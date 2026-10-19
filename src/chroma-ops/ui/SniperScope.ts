import * as T from 'three';
import type { WeaponId } from '../../../shared/weapons';
import type { InputState } from '../input/InputManager';

// Render the same scene into a circular lens; the main camera always keeps its normal FOV.
export class SniperScope {
  private shell:HTMLDivElement;
  private lens=new T.PerspectiveCamera(75,1,.05,420);
  private target=new T.WebGLRenderTarget(256,256);
  private overlay=new T.Scene();
  private overlayCamera=new T.OrthographicCamera(-1,1,1,-1,0,2);
  private material=new T.ShaderMaterial({
    uniforms:{map:{value:this.target.texture}},depthTest:false,depthWrite:false,transparent:true,
    vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
    fragmentShader:`uniform sampler2D map;varying vec2 vUv;
      void main(){
        if(distance(vUv,vec2(.5))>.5)discard;
        gl_FragColor=texture2D(map,vUv);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  private plane=new T.Mesh(new T.PlaneGeometry(2,2),this.material);
  private scoped=false;
  private gunParts=new T.Group();

  constructor(private root:HTMLElement,private gun:T.Group,private coarse:boolean) {
    this.shell=document.createElement('div');this.shell.className='co-scope';this.shell.hidden=true;this.shell.setAttribute('aria-hidden','true');
    this.shell.innerHTML=`<div class="co-scope-shade"></div><div class="co-scope-frame">
      <svg viewBox="0 0 100 100" aria-hidden="true"><path fill="black" fill-rule="evenodd" d="M25 0H75L100 50 75 100H25L0 50ZM80 50a30 30 0 1 0-60 0 30 30 0 1 0 60 0"/></svg>
      <div class="co-scope-reticle"><i></i><b></b><span></span></div><div class="co-scope-stock"></div></div>`;
    root.append(this.shell);this.overlayCamera.position.z=1;this.overlay.add(this.plane);
    const barrel=new T.Mesh(new T.BoxGeometry(.1,.1,1.6),new T.MeshBasicMaterial({color:0x10141e}));barrel.position.set(.34,-.25,-1.15);
    const optic=new T.Mesh(new T.CylinderGeometry(.09,.09,.34,6),new T.MeshBasicMaterial({color:0x080b10}));optic.rotation.x=Math.PI/2;optic.position.set(.34,-.12,-.7);
    this.gunParts.add(barrel,optic);gun.add(this.gunParts);this.gunParts.visible=false;
    root.addEventListener('combat:reset',this.reset);
  }

  private reset=()=>{this.scoped=false;this.shell.hidden=true;this.root.classList.remove('co-scoped');};

  update(id:WeaponId,input:InputState,alive:boolean,reloading:boolean,blocked:boolean) {
    this.scoped=id==='sniper'&&!!input.aim&&!input.sprint&&alive&&!reloading&&!blocked;
    this.shell.hidden=!this.scoped;this.root.classList.toggle('co-scoped',this.scoped);
    this.root.querySelector('[data-sprint]')?.setAttribute('aria-pressed',String(!!input.sprint&&alive&&!blocked));
    const aim=this.root.querySelector<HTMLButtonElement>('[data-aim]');
    if(aim){aim.disabled=id!=='sniper';aim.setAttribute('aria-pressed',String(this.scoped));}
    this.gunParts.visible=id==='sniper';
    return this.scoped;
  }

  render(renderer:T.WebGLRenderer,scene:T.Scene,camera:T.PerspectiveCamera) {
    this.gun.visible=!this.scoped;
    renderer.render(scene,camera);
    this.gun.visible=true;
    if(!this.scoped)return;
    const width=this.root.clientWidth,height=this.root.clientHeight;
    const frame=Math.min(height*.58,width*.44),diameter=frame*.6;
    this.root.style.setProperty('--scope-size',`${frame}px`);
    this.root.style.setProperty('--lens-size',`${diameter}px`);
    const pixels=Math.max(64,Math.min(this.coarse?512:768,Math.ceil(diameter*renderer.getPixelRatio())));
    if(this.target.width!==pixels)this.target.setSize(pixels,pixels);
    this.lens.position.copy(camera.position);this.lens.quaternion.copy(camera.quaternion);
    this.lens.fov=camera.fov;this.lens.zoom=4*height/diameter;this.lens.far=camera.far;this.lens.updateProjectionMatrix();
    this.gun.visible=false;
    const savedTarget=renderer.getRenderTarget(),savedAutoClear=renderer.autoClear;
    renderer.setRenderTarget(this.target);renderer.render(scene,this.lens);renderer.setRenderTarget(savedTarget);
    this.gun.visible=true;
    this.plane.scale.set(diameter/width,diameter/height,1);
    renderer.autoClear=false;renderer.clearDepth();renderer.render(this.overlay,this.overlayCamera);renderer.autoClear=savedAutoClear;
  }

  dispose() {
    this.root.removeEventListener('combat:reset',this.reset);this.reset();this.shell.remove();
    this.target.dispose();this.plane.geometry.dispose();this.material.dispose();
    this.gunParts.traverse(object=>{if(object instanceof T.Mesh){object.geometry.dispose();(object.material as T.Material).dispose();}});
    this.gun.remove(this.gunParts);
  }
}
