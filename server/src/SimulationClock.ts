const stepSeconds=1/60;
const maxCatchUpSeconds=.25;

// Drop excess physics work after a stall, but never leave outgoing timestamps
// permanently behind wall time. Physics/platform time advances only for steps run.
export class SimulationClock {
  private accumulator=0;
  constructor(private last:number){}

  advance(time:number,update:(dt:number,at:number)=>void) {
    const elapsed=Math.max(0,(time-this.last)/1000);
    this.last=time;
    const droppedSeconds=Math.max(0,this.accumulator+elapsed-maxCatchUpSeconds);
    this.accumulator=Math.min(maxCatchUpSeconds,this.accumulator+elapsed);
    let steps=0;
    while(this.accumulator+1e-10>=stepSeconds){
      this.accumulator=Math.max(0,this.accumulator-stepSeconds);
      update(stepSeconds,time-this.accumulator*1000);steps++;
    }
    return {steps,droppedSeconds};
  }
}

export function advanceRoomClock(room:{lastStep:number;wheelEpoch:number},at:number,dt:number) {
  const elapsed=at-room.lastStep;
  // Rooms can start between two global clock steps.
  // Epoch-sized JS timestamps have sub-millisecond rounding error. A 1us
  // tolerance prevents that error from accidentally skipping every other tick.
  if(elapsed+.001<dt*1000)return false;
  const skipped=elapsed-dt*1000;
  if(skipped>.001)room.wheelEpoch+=skipped;
  room.lastStep=at;
  return true;
}
