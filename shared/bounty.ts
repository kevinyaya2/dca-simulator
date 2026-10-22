export const SCORE_TARGET = 1500;
export const ROUND_DURATION_MS = 8 * 60 * 1000;
export const BASE_BOUNTY = 100;
export const MIN_BOUNTY = 50;
export const MAX_BOUNTY = 300;
export const HIGH_BOUNTY = 200;

export type BountyState = { score:number; bounty:number; consecutiveDeaths:number };
export type ScoreRow = { id:string; name:string; score:number; bounty:number; kills:number; deaths:number };
export type FinalStanding = ScoreRow & { rank:number };
export type EndReason = 'target'|'timeout'|'draw';

export function initialBounty():BountyState {
  return {score:0,bounty:BASE_BOUNTY,consecutiveDeaths:0};
}

// Read the old bounty before changing either participant. Death never spends score.
export function settleBountyKill(attacker:BountyState,victim:BountyState) {
  const scoreAwarded=victim.bounty;
  return {
    scoreAwarded,
    attacker:{score:attacker.score+scoreAwarded,bounty:Math.min(MAX_BOUNTY,attacker.bounty+Math.min(50,Math.round(scoreAwarded*.25))),consecutiveDeaths:0},
    victim:{score:victim.score,bounty:Math.max(MIN_BOUNTY,victim.bounty-(victim.consecutiveDeaths===0?25:50)),consecutiveDeaths:victim.consecutiveDeaths+1},
  };
}

export function rankScores<T extends ScoreRow>(players:readonly T[]):(T & {rank:number})[] {
  const sorted=[...players].sort((a,b)=>b.score-a.score);
  let rank=0;
  return sorted.map((player,index)=>{
    if(index===0||player.score!==sorted[index-1].score)rank=index+1;
    return {...player,rank};
  });
}

export function finalStandings(players:readonly ScoreRow[]):FinalStanding[] {
  // Copy only result fields: subsequent roster changes cannot alter this snapshot.
  return rankScores(players.map(({id,name,score,bounty,kills,deaths})=>({id,name,score,bounty,kills,deaths})));
}
