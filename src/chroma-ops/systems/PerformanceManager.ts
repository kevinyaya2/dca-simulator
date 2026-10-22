// A less extreme near/far ratio improves depth precision at distant facades.
export const CAMERA_NEAR=.15;
export class PerformanceManager { readonly antialias=true; readonly pixelRatio:number; readonly impactLimit:number; constructor(){const coarse=matchMedia('(pointer:coarse)').matches;const memory=(navigator as Navigator&{deviceMemory?:number}).deviceMemory??4;const low=(navigator.hardwareConcurrency||4)<=4||memory<=3;this.pixelRatio=Math.min(devicePixelRatio,coarse?(low?1:1.6):2);this.impactLimit=low?8:16;} }
