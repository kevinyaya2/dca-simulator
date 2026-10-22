import test from 'node:test';
import assert from 'node:assert/strict';
import { io as connect, type Socket } from 'socket.io-client';
import { SCORE_TARGET, ROUND_DURATION_MS, initialBounty, settleBountyKill, rankScores, finalStandings } from '../shared/bounty.ts';
import { KillTracker } from '../shared/combat.ts';
import { beginRound, kill, finishRound, step, createGameServer } from '../server/src/index.ts';

function fixture(count=4){
  const room={environmentTime:0,code:'BOUNTY',host:'p0',roundId:0,state:'LOBBY',
    players:new Map(Array.from({length:count},(_,i)=>[`p${i}`,{id:`p${i}`,name:`Player ${i}`,color:0xffffff,avatar:'',
      x:0,y:1.65,z:0,yaw:0,pitch:0,velocityY:0,jumpsUsed:0,hp:100,alive:true,kills:0,deaths:0,...initialBounty(),weapons:{}}])),
    pickups:[],history:[],tick:0,lastStep:Date.now(),wheelEpoch:0,respawnTimers:new Map(),reconnectTimers:new Map(),shotSequence:0,killTracker:new KillTracker('bounty'),
  } as unknown as Parameters<typeof beginRound>[1];
  const events:{name:string;data:any}[]=[];
  const io={to:()=>({emit:(name:string,data:unknown)=>events.push({name,data})})} as unknown as Parameters<typeof beginRound>[0];
  beginRound(io,room);events.length=0;
  return {room,io,events,players:[...room.players.values()],close:()=>{for(const timer of room.respawnTimers.values())clearTimeout(timer);if(room.gameOverTimer)clearTimeout(room.gameOverTimer);}};
}

test('bounty gains use the old victim value, round and cap; death does not spend score',()=>{
  assert.deepEqual(initialBounty(),{score:0,bounty:100,consecutiveDeaths:0});
  for(const [bounty,gain] of [[50,13],[100,25],[300,50]]){
    const attacker={...initialBounty(),consecutiveDeaths:3},victim={score:700,bounty,consecutiveDeaths:0};
    const result=settleBountyKill(attacker,victim);
    assert.equal(result.scoreAwarded,bounty);assert.equal(result.attacker.score,bounty);
    assert.equal(result.attacker.bounty,100+gain);assert.equal(result.attacker.consecutiveDeaths,0);
    assert.equal(result.victim.score,700);assert.equal(victim.bounty,bounty,'pure settlement does not mutate its inputs');
  }
  assert.equal(settleBountyKill({...initialBounty(),bounty:290},{...initialBounty(),bounty:300}).attacker.bounty,300);
  let victim={score:800,bounty:300,consecutiveDeaths:0};
  for(const expected of [275,225,175,125,75,50,50]){
    victim=settleBountyKill(initialBounty(),victim).victim;
    assert.equal(victim.bounty,expected);assert.equal(victim.score,800);
  }
  victim=settleBountyKill(victim,initialBounty()).attacker;
  assert.equal(victim.consecutiveDeaths,0);
  assert.equal(settleBountyKill(initialBounty(),victim).victim.bounty,50);
});

test('shared ranking uses only score, keeps ties and copies final rows',()=>{
  const rows=[{id:'a',name:'A',score:200,bounty:300,kills:1,deaths:20},{id:'b',name:'B',score:200,bounty:50,kills:20,deaths:0},{id:'c',name:'C',score:100,bounty:100,kills:30,deaths:0}];
  assert.deepEqual(rankScores(rows).map(p=>p.rank),[1,1,3]);
  const final=finalStandings(rows);rows[0].score=0;rows.pop();
  assert.equal(final.length,3);assert.equal(final[0].score,200);
});

test('ten kills no longer wins; fewer high bounty kills can win, once, before terminal state',()=>{
  const f=fixture();try{
    const [leader,hunter,victim]=f.players;
    for(let i=0;i<10;i++){victim.alive=true;kill(f.io,f.room,leader,victim,'ar',false);}
    assert.equal(leader.kills,10);assert.equal(f.room.state,'PLAYING');assert.ok(leader.score<SCORE_TARGET);
    hunter.score=1200;victim.bounty=300;victim.alive=true;
    kill(f.io,f.room,hunter,victim,'sniper',true);
    assert.equal(f.room.state,'GAME_OVER');assert.equal(hunter.kills,1);assert.equal(hunter.score,1500);
    assert.deepEqual(f.room.winnerIds,[hunter.id]);assert.equal(f.room.endReason,'target');
    const lastKill=f.events.findLastIndex(e=>e.name==='match:kill');
    assert.equal(f.events[lastKill].data.scoreAwarded,300);
    assert.equal(f.events[lastKill+1].name,'room:state');assert.equal(f.events[lastKill+1].data.state,'GAME_OVER');
    const frozen=structuredClone(f.room.finalStandings);
    victim.alive=true;kill(f.io,f.room,hunter,victim,'rocket',false);finishRound(f.io,f.room,'timeout');
    assert.deepEqual(f.room.finalStandings,frozen);assert.equal(hunter.score,1500);assert.equal(f.room.respawnTimers.size,0);
    f.room.players.delete(hunter.id);leader.score=9999;
    assert.deepEqual(f.room.finalStandings,frozen);assert.deepEqual(f.room.winnerIds,[hunter.id]);
  }finally{f.close();}
});

test('duplicate death cannot score; dead attacker burn kills score and reset consecutive deaths',()=>{
  const f=fixture();try{
    const [attacker,victim]=f.players;attacker.alive=false;attacker.consecutiveDeaths=3;victim.bounty=300;
    kill(f.io,f.room,attacker,victim,'flame',false);kill(f.io,f.room,attacker,victim,'flame',false);
    assert.equal(attacker.score,300);assert.equal(attacker.kills,1);assert.equal(attacker.consecutiveDeaths,0);
    assert.equal(victim.bounty,275);assert.equal(victim.deaths,1);assert.equal(f.events.filter(e=>e.name==='match:kill').length,1);
    victim.alive=true;victim.hp=4;victim.burn={attackerId:attacker.id,nextTick:Date.now()-1,expiresAt:Date.now()+1000};
    step(f.io,f.room,1/60);assert.equal(attacker.score,575);assert.equal(victim.alive,false);
  }finally{f.close();}
});

test('deadline rejects kills and pending burn, settles ties, zero scores and a unique leader',()=>{
  for(const scores of [[500,500,0,0],[0,0,0,0],[501,500,0,0]]){
    const f=fixture();try{
      f.players.forEach((p,i)=>p.score=scores[i]);f.room.endsAt=Date.now()-1;
      f.players[1].hp=4;f.players[1].burn={attackerId:f.players[0].id,nextTick:Date.now()-1,expiresAt:Date.now()+1000};
      kill(f.io,f.room,f.players[0],f.players[1],'ar',false);step(f.io,f.room,1/60);
      assert.equal(f.room.state,'GAME_OVER');assert.equal(f.players[1].hp,4);assert.equal(f.events.filter(e=>e.name==='match:kill').length,0);
      assert.deepEqual(f.room.winnerIds,scores[0]===0?[]:scores[0]===500?['p0','p1']:['p0']);
      assert.equal(f.room.endReason,scores[0]===0?'draw':'timeout');
    }finally{f.close();}
  }
});

test('the exact deadline is closed; terminal multi-target damage cannot score another victim',()=>{
  const expired=fixture();try{
    expired.room.endsAt=Date.now()+1000;
    kill(expired.io,expired.room,expired.players[0],expired.players[1],'ar',false,expired.room.endsAt);
    assert.equal(expired.room.state,'GAME_OVER');assert.equal(expired.players[0].score,0);assert.equal(expired.players[1].alive,true);
  }finally{expired.close();}
  const f=fixture();try{
    const [attacker,first,second]=f.players;attacker.score=1450;
    for(const victim of [first,second]){victim.hp=4;victim.burn={attackerId:attacker.id,nextTick:Date.now()-1,expiresAt:Date.now()+1000};}
    step(f.io,f.room,1/60);
    assert.equal(f.room.state,'GAME_OVER');assert.equal(attacker.score,1550);
    assert.equal(first.alive,false);assert.equal(second.hp,4);assert.equal(second.alive,true);
    assert.equal(f.events.filter(e=>e.name==='match:kill').length,1);
    assert.equal(f.room.finalStandings?.find(p=>p.id===attacker.id)?.score,1550);
  }finally{f.close();}
});

test('3, 4 and 8 player rounds reset all scoring, final results and deadline on rematch',()=>{
  for(const count of [3,4,8]){
    const f=fixture(count);try{
      for(let round=0;round<3;round++){
        f.players.forEach(p=>{p.score=1600;p.bounty=300;p.consecutiveDeaths=3;});finishRound(f.io,f.room,'timeout');
        beginRound(f.io,f.room);
        assert.equal(f.room.finalStandings,undefined);assert.equal(f.room.winnerIds,undefined);assert.equal(f.room.endReason,undefined);
        assert.ok(Math.abs(f.room.endsAt!-Date.now()-ROUND_DURATION_MS)<500);
        for(const p of f.players){assert.equal(p.score,0);assert.equal(p.bounty,100);assert.equal(p.consecutiveDeaths,0);assert.equal(p.kills,0);}
      }
    }finally{f.close();}
  }
});

function event(socket:Socket,name:string,predicate:(value:any)=>boolean=()=>true):Promise<any>{
  return new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>{socket.off(name,receive);reject(new Error(`Timed out: ${name}`));},4000);
    const receive=(value:any)=>{if(predicate(value)){clearTimeout(timer);socket.off(name,receive);resolve(value);}};
    socket.on(name,receive);
  });
}

test('socket snapshots, late join and resume share a deadline; results survive a real leave',async(t)=>{
  const server=createGameServer();const sockets:Socket[]=[];
  await new Promise<void>(resolve=>server.http.listen(0,'127.0.0.1',resolve));
  const address=server.http.address();assert.ok(address&&typeof address!=='string');
  const client=async()=>{const socket=connect(`http://127.0.0.1:${address.port}`,{transports:['websocket'],forceNew:true,autoConnect:false,reconnection:false});sockets.push(socket);const ready=event(socket,'connect');socket.connect();await ready;return socket;};
  try{
    const a=await client(),b=await client();const host=await a.emitWithAck('room:create','Host');
    await b.emitWithAck('room:join',{code:host.code,name:'Guest'});
    const first=event(a,'match:snapshot');await a.emitWithAck('game:start');const snapshot=await first;
    assert.equal(snapshot.scoreTarget,1500);assert.ok(snapshot.endsAt>snapshot.serverTime);
    for(const player of snapshot.players){assert.equal(player.score,0);assert.equal(player.bounty,100);assert.ok(!('consecutiveDeaths' in player));}
    const late=await client(),seat=await late.emitWithAck('room:join',{code:host.code,name:'Late'});
    assert.equal(seat.room.endsAt,snapshot.endsAt);assert.equal(seat.room.players.find((p:any)=>p.id===seat.playerId).score,0);
    const offline=event(a,'room:notice');late.disconnect();await offline;
    const restored=await client(),resumed=await restored.emitWithAck('room:resume',seat);
    assert.equal(resumed.room.endsAt,snapshot.endsAt);assert.equal(resumed.room.players.find((p:any)=>p.id===seat.playerId).bounty,100);
    const left=event(a,'room:state',(room)=>!room.players.some((p:any)=>p.id===seat.playerId));await restored.emitWithAck('room:leave');await left;
    const ended=event(a,'room:state',room=>room.state==='GAME_OVER');
    const realNow=Date.now.bind(Date),offset=snapshot.endsAt-realNow()+1;
    const clock=t.mock.method(Date,'now',()=>realNow()+offset);
    const result=await ended;clock.mock.restore();
    assert.equal(result.endReason,'draw');assert.equal(result.finalStandings.length,2);
    assert.ok(!result.finalStandings.some((p:any)=>p.id===seat.playerId),'mid-round departure is not a contender');
    const afterLeave=event(b,'room:state',room=>room.players.length===1);
    await a.emitWithAck('room:leave');const remaining=await afterLeave;
    assert.deepEqual(remaining.finalStandings,result.finalStandings);
    assert.deepEqual(remaining.winnerIds,result.winnerIds);
    assert.equal(remaining.returnAt,result.returnAt);
  }finally{sockets.forEach(socket=>socket.disconnect());server.close();}
});
