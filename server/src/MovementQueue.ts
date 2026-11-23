import { MAX_INPUT_BACKLOG, MAX_INPUT_BACKLOG_MS, type MovementCommand } from '../../shared/movement.js';

// Acknowledgements describe execution, not reception. Discards are a separate
// generation so clients can hard-resync without replaying abandoned actions.
export class MovementQueue {
  private commands:{command:MovementCommand;receivedAt:number}[]=[];
  received=0;
  processed=0;
  resetId=0;
  discardedThrough=0;
  private discarded=0;
  private resets=0;
  get length(){return this.commands.length;}
  clear(){
    this.discarded+=this.commands.length;this.resets++;
    this.discardedThrough=Math.max(this.discardedThrough,this.received);
    this.commands=[];this.resetId++;
  }
  enqueue(command:MovementCommand,at:number){
    if(command.seq<=this.received)return false;
    if(command.reset||this.commands.length>=MAX_INPUT_BACKLOG||
      this.commands[0]&&at-this.commands[0].receivedAt>MAX_INPUT_BACKLOG_MS)this.clear();
    this.received=command.seq;
    this.commands.push({command,receivedAt:at});
    return true;
  }
  take(at:number){
    if(this.commands[0]&&at-this.commands[0].receivedAt>MAX_INPUT_BACKLOG_MS){this.clear();return undefined;}
    return this.commands.shift()?.command;
  }
  markProcessed(command:MovementCommand){this.processed=command.seq;}
  find(seq:number){return this.commands.find(entry=>entry.command.seq===seq)?.command;}
  latest(){return this.commands[this.commands.length-1]?.command;}
  drainStats(){const stats={discarded:this.discarded,resets:this.resets};this.discarded=0;this.resets=0;return stats;}
}
