import{r as rt,j as z}from"./index-4ja_o-bs.js";const Ts=[{x:-65,z:45,color:3524949,name:"WEST ARCADE",side:-1},{x:68,z:44,color:1683169,name:"EAST STATION",side:1},{x:-68,z:-47,color:15613063,name:"PINK GALLERY",side:-1},{x:66,z:-48,color:15836972,name:"SUN MARKET",side:1},...[-1,1].flatMap(i=>[-90,-12,92].map((e,t)=>({x:i*112,z:e,color:[9987295,15824696,2537901][t],name:`${i<0?"WEST":"EAST"} ${["STUDIO","SHOPS","GARDEN"][t]}`,side:i})))],Le=(i,e,t,n,s,r,a=0)=>({minX:i-t/2,maxX:i+t/2,minZ:e-n/2,maxZ:e+n/2,minY:a,maxY:s,color:r}),vh=Ts.flatMap(i=>[{x:i.x+i.side*16,z0:i.z+25,z1:i.z+1,from:0,to:6,width:4},{x:i.x+i.side*22,z0:i.z+1,z1:i.z+25,from:6,to:12,width:4}]);function _d(i,e){for(const t of vh){const n=(e-t.z0)/(t.z1-t.z0);if(Math.abs(i-t.x)<=t.width/2&&n>=0&&n<=1)return t.from+(t.to-t.from)*n}return null}const ln=[];for(const i of Ts){const e=(t,n,s,r,a,o=i.color,c=0)=>ln.push(Le(i.x+t,i.z+n,s,r,a,o,c));for(const t of[0,6])for(const n of[-1,1])for(const s of["x","z"]){const r=(a,o,c,l)=>s==="x"?e(n*12,a,.4,o,l,i.color,c):e(a,n*12,o,.4,l,i.color,c);r(0,24,t+3.5,t+6);for(const a of[-7,7])r(a,10,t,t+1.2);for(const a of[-12,-6,-2,2,6,12])r(a,.6,t+1.2,t+3.5)}for(const t of[6,12]){e(-8.65,0,6.3,23.6,t,15330801,t-.3),e(5.15,0,13.3,23.6,t,15330801,t-.3),e(-3.5,-10.15,4,3.3,t,15330801,t-.3),e(-3.5,6.7,4,10.2,t,15330801,t-.3);for(const n of[t-6]){for(let s=0;s<12;s++)e(-7.5,-8+(s+.5)*.65,4,.65,n+(s+1)*.25,16761648,n),e(-3.5,-.2-(s+.5)*.65,4,.65,n+3+(s+1)*.25,16761648,n+3);e(-5.5,.9,8,2.2,n+3,16761648,n+2.7)}}for(const t of[-1,1])e(t*12,0,.25,10,13.1,16777215,12),e(0,t*12,6,.25,13.1,16777215,12);e(i.side*18,-1,12,4,6,16761648,5.7),e(i.side*15,27,18,4,12,16761648,11.7),e(i.side*8,20.5,4,17,12,16761648,11.7)}ln.push(Le(0,36,88,4,6,16761648,5.7));for(const i of[34,38])ln.push(Le(0,i,80,.2,7.1,16777215,6));for(const[i,e,t]of[[-48.5,45,11],[50,44,12]])ln.push(Le(i,e,t,4,6,16761648,5.7));for(const i of[-44,44]){ln.push(Le(i,40.5,4,9,6,16761648,5.7));for(const e of[-1,1])ln.push(Le(i+e*2,41.5,.2,3,7.1,16777215,6))}for(const i of[-36,36])ln.push(Le(i,36,1.2,1.2,5.7,7174304));for(const[i,e]of[[-37.5,35],[38,36]]){ln.push(Le(i,55.5,e,4,12,16761648,11.7));for(const t of[53.5,57.5])ln.push(Le(i,t,e,.2,13.1,16777215,12))}for(const i of[6,12])ln.push(Le(68,31,4,2,i,15330801,i-.3));for(const i of[65,71])ln.push(Le(i,25,.35,.35,14,6715566));const vd=ln,gr=[[-42,-65],[40,-65],[-45,18],[46,20],[-112,64],[115,65],[-30,112],[94,124]],$a=[[-50,-64],[50,-64],[-38,36],[38,36],[-119,18],[119,18],[-40,80],[42,80],[-16,-90],[16,-90]],xd=[...gr.map(([i,e])=>Le(i,e,5,5,.8,15747988)),...[[-40,5],[40,3],[-105,68],[108,68]].flatMap(([i,e])=>[Le(i,e,4,1,.65,16761648),Le(i,e+.5,4,.2,1.3,16761648,.65)]),...$a.map(([i,e])=>Le(i,e,.25,.25,4.6,14148848))],yd=[[-140,-114],[-104,-122],[-148,-36],[-140,75],[-78,112],[-26,-116],[28,-122],[84,-106],[140,-100],[145,-36],[126,62],[88,124],[18,126],[-42,112],[-96,58],[-112,-48],[-36,-54],[30,32],[120,24],[-56,8]],Sd=[[-130,-100],[-92,-42],[-45,30],[-65,45],[-65,62],[0,32],[68,44],[68,62],[110,60],[120,-18],[88,-74],[20,-102],[-25,-54],[-112,45],[-12,104],[35,35]],Md={minX:-90,maxX:90,minZ:-22,maxZ:26},Ki=[{name:"NORTH",axis:"z",outer:-46,inner:-22,cross:0,kind:"ramp"},{name:"SOUTH",axis:"z",outer:50,inner:26,cross:0,kind:"ramp"},{name:"WEST",axis:"x",outer:-114,inner:-90,cross:9,kind:"stairs"},{name:"EAST",axis:"x",outer:114,inner:90,cross:9,kind:"stairs"}],Ds=Ki.map(i=>i.axis==="z"?{minX:-3,maxX:3,minZ:Math.min(i.outer,i.inner),maxZ:Math.max(i.outer,i.inner)}:{minX:Math.min(i.outer,i.inner),maxX:Math.max(i.outer,i.inner),minZ:6,maxZ:12}),Za=(i,e,t,n=0)=>i>=t.minX-n&&i<=t.maxX+n&&e>=t.minZ-n&&e<=t.maxZ+n;function Ed(i,e){for(let t=0;t<Ki.length;t++)if(Za(i,e,Ds[t])){const n=Ki[t],s=((n.axis==="z"?e:i)-n.outer)/(n.inner-n.outer);return n.kind==="ramp"?-6*s:-6}return Za(i,e,Md)?-6:null}function xh(i,e=Ds){let t=[i];for(const n of e)t=t.flatMap(s=>{const r=Math.max(s.minX,n.minX),a=Math.min(s.maxX,n.maxX),o=Math.max(s.minZ,n.minZ),c=Math.min(s.maxZ,n.maxZ);return r>=a||o>=c?[s]:[{...s,maxX:r},{...s,minX:a},{...s,minX:r,maxX:a,maxZ:o},{...s,minX:r,maxX:a,minZ:c}].filter(l=>l.maxX-l.minX>1e-6&&l.maxZ-l.minZ>1e-6)});return t}const bn=[Le(0,2,180,48,-6,8625066,-6.4),Le(0,2,180,48,0,13228511,-.35)];for(const i of[-22,26])for(const e of[-46.5,46.5])bn.push(Le(e,i,87,.4,0,5268103,-6));for(const i of[-90,90])bn.push(Le(i,-8,.4,28,0,5268103,-6),Le(i,19,.4,14,0,5268103,-6));for(const i of Ki){const e=(i.outer+i.inner)/2;for(const t of[-1,1])bn.push(i.axis==="z"?Le(t*3.2,e,.4,24,1.1,8837607,-6):Le(e,i.cross+t*3.2,24,.4,1.1,8837607,-6));if(i.kind==="stairs")for(let t=0;t<24;t++){const n=i.outer+Math.sign(i.inner-i.outer)*(t+.5);bn.push(Le(n,i.cross,1,6,-t*.25,16760147,-6.3))}}const yh=[-51.5,-42.5,-33.5,-24.5,24.5,33.5,42.5,51.5].map((i,e)=>({x:i,z:2,width:9,depth:12,color:[16018351,5888449,16761946,10325231][e%4],name:["ARCADE","CAFE","SPORT","MUSIC","BOOKS","TECH","TOYS","BAKERY"][e]}));for(const i of yh){bn.push(Le(i.x-4.5,2,.25,12,-.35,i.color,-6));for(const e of[-4,8]){for(const t of[-1,1])bn.push(Le(i.x+t*3.25,e,2.5,.25,-.35,i.color,-6));bn.push(Le(i.x,e,4,.25,-.35,i.color,-2.5))}bn.push(Le(i.x,2,3,1,-5,5861761,-6))}for(const i of[-20,56])bn.push(Le(i,2,.25,12,-.35,10325231,-6));const bd=bn,Ka=[{x:-64,y:-6,z:18},{x:64,y:-6,z:-14},{x:-42.5,y:-6,z:5},{x:42.5,y:-6,z:-1}],Vt={x:0,z:-90,radius:22,centerY:22.2,cabins:8,period:60},wd=[16731800,3594436,16761648,4945384,13208831,16742461,5625599,9626447],oi=(i,e,t,n,s,r,a)=>({minX:i-n/2,maxX:i+n/2,minY:e-s/2,maxY:e+s/2,minZ:t-r/2,maxZ:t+r/2,color:a}),Td=[-1,1].flatMap(i=>[oi(i*8,10.5,-94,1.2,21,1.2,16761648),oi(i*8,.25,-94,4,.5,4,2374768)]).concat([oi(0,21.2,-94,17,1.2,1.2,16761648)]);function Sh(i,e){const t=(e/Vt.period+i/Vt.cabins)*Math.PI*2;return{x:Vt.x+Math.sin(t)*Vt.radius,y:Vt.centerY-Math.cos(t)*Vt.radius,z:Vt.z}}function Lr(i,e){const{x:t,y:n,z:s}=Sh(i,e),r=wd[i];return[oi(t,n-.2,s,6,.4,4,r),oi(t-2.9,n+.55,s,.2,1.1,4,r),oi(t+2.9,n+.55,s,.2,1.1,4,r),oi(t,n+.55,s-1.9,5.6,1.1,.2,r)]}function Ad(i){return Array.from({length:Vt.cabins},(e,t)=>Lr(t,i)).flat()}function Rd(i,e,t,n){for(let s=0;s<Vt.cabins;s++)for(const r of Lr(s,n)){const a=Math.max(r.minX-i,0,i-r.maxX),o=Math.max(r.minZ-t,0,t-r.maxZ);if(Math.abs(e-r.maxY)<.025&&a*a+o*o<.42*.42)return s}return null}const Mh=8,Ji={x:68,z:28};function Eh(i){const e=(i%28+28)%28;return e<3?0:e<7?(e-3)/4*6:e<10?6:e<14?6+(e-10)/4*6:e<17?12:e<21?12-(e-17)/4*6:e<24?6:6-(e-24)/4*6}function Ms(i,e){return i===Mh?{x:Ji.x,y:Eh(e),z:Ji.z}:Sh(i,e)}function Ir(i){const e=Eh(i);return[Le(68,28,4,4,e,16731800,e-.3),Le(66.1,28,.2,4,e+1.1,16777215,e),Le(69.9,28,.2,4,e+1.1,16777215,e),Le(68,26.1,4,.2,e+1.1,16777215,e)]}function Ja(i){return[...Ad(i),...Ir(i)]}function Jc(i,e,t,n){if(Math.abs(i-Ji.x)<2.5&&Math.abs(t-Ji.z)<2.5)for(const s of Ir(n)){const r=Math.max(s.minX-i,0,i-s.maxX),a=Math.max(s.minZ-t,0,t-s.maxZ);if(Math.abs(e-s.maxY)<.025&&r*r+a*a<.42*.42)return Mh}return Rd(i,e,t,n)}const ic={floors:[0,6,12],name:"CHROMA LAB"},et=[],Es=[],ci=[],Bn=15330801,Fn=6322567,Jn=10082783,We=(i,e,t,n,s,r,a,o=Bn)=>i.push(Le(e,t,n,s,r,o,a));for(const i of[6,12,18])We(et,58,104,56.8,24.8,i,i-.3);We(et,58,103,55.6,21.6,.02,0);for(const i of ic.floors){for(const n of[92,i===0?114:116]){for(const s of[43,73])We(Es,s,n,26,.18,i+5.7,i+.4,13234669),We(et,s,n,26,.35,i+.4,i,Bn);i>0&&(We(Es,58,n,4,.18,i+5.7,i+.4,13234669),We(et,58,n,4,.35,i+.4,i,Bn)),We(et,58,n,56,.35,i+6,i+(i===0?4.2:5.7));for(let s=30;s<=86;s+=4)(i>0||s!==58)&&We(ci,s,n,.09,.26,i+5.7,i+.4,Fn);for(const s of[i+.4,i+3,i+5.7])for(const r of[43,73])We(ci,r,n,26,.26,s+.05,s-.05,Jn);if(i>0)for(const s of[i+.4,i+3,i+5.7])We(ci,58,n,4,.26,s+.05,s-.05,Jn)}We(et,30,i===0?105.25:106.25,.4,i===0?17.5:19.5,i+6,i),We(et,30,94.25,.4,4.5,i+6,i+4.2);const e=i===0?103:104,t=i===0?22:24;We(Es,86,e,.18,t,i+5.7,i+.4,13234669),We(et,86,e,.4,t,i+.4,i),We(et,86,e,.4,t,i+6,i+5.7);for(const n of[92,96,100,104,108,112,i===0?114:116])We(ci,86,n,.26,.09,i+5.7,i+.4,Fn);We(et,38,105,8,.4,i+3.3,i,Fn),We(et,34,103,.4,4,i+3.3,i,Fn),We(et,72,102,6,1.2,i+1.1,i,Bn)}for(const i of ic.floors){for(let e=0;e<12;e++){const t=(e+1)*.25;We(et,23.5,94.5+(e+.5)*.75,4,.75,i+t,i,Bn),We(et,27.5,103.5-(e+.5)*.75,4,.75,i+3+t,i+3,Bn);for(const[n,s,r]of[[21.45,94.5+(e+.5)*.75,i+t],[29.55,103.5-(e+.5)*.75,i+3+t]])We(et,n,s,.15,.75,r+1.1,r+.95,Jn),We(et,n,s,.15,.12,r+1.1,r,Fn)}We(et,25.5,104.5,8,2,i+3,i+2.7),We(et,25.5,93.5,8,2,i+6,i+5.7),We(et,29.75,94.25,.5,4.5,i+6,i+5.7),We(et,25.5,105.5,8,.15,i+4.1,i+3,Jn),We(et,25.5,92.5,8,.15,i+7.1,i+6,Jn);for(const e of[21.45,29.55])We(et,e,104.5,.15,2,i+4.1,i+3,Jn);We(et,21.45,93.5,.15,2,i+7.1,i+6,Jn)}We(et,25.5,93.5,8,2,0,-.3);for(const i of[30,86])We(et,i,106.25,.2,19.5,19.1,18,Fn);for(const i of[92,116])We(et,58,i,56,.2,19.1,18,Fn);We(et,58,98,40,.3,21,18,Bn);for(const i of[38,78])We(et,i,102,.3,8,21,18,Bn);for(let i=38;i<=78;i+=2)We(ci,i,97.8,.1,.1,21,18,Fn);We(et,58,117,56,6,4.7,4.45,Jn);We(et,58,116.7,57,.6,18.25,17.85,Bn);for(const i of[32,40,48,68,76,84])We(ci,i,116.25,.22,.5,4.4,0,Fn);const jc=Es,Cd=ci,Pd=[...et,...Es],Wi={minX:-154,maxX:154,minZ:-140,maxZ:140,width:308,depth:280},bs=420,ja=8,Qc=1.2,Sn=1.65,_r=1.8,sc=.42,Ld=7,el=14,Fs=.35,qi=1e-4,Id=yd;Ts.map(i=>({...i,openSouth:!0}));const Ct=(i,e,t,n,s,r,a=0)=>({minX:i-t/2,maxX:i+t/2,minZ:e-n/2,maxZ:e+n/2,minY:a,maxY:a+s,color:r}),Yt=[...Td,...vd,...xd,...bd,...Pd,Ct(-152,0,4,280,19,2971848),Ct(152,0,4,280,19,15479928),Ct(0,-138,308,4,17,15968045),Ct(0,138,308,4,17,3524949),Ct(0,-3,6,6,3,15747925),Ct(-22,13,8,3,2,16758584),Ct(24,-14,8,3,2,4945384),Ct(-3,20,3,8,2,8014805),Ct(5,-25,3,8,2,3524949),Ct(-40,-8,12,2,4,9262549),Ct(-34,-19,2,18,4,9262549),Ct(-49,-19,2,18,4,9262549),Ct(42,10,13,2,4,15682683),Ct(36,20,2,18,4,15682683),Ct(49,20,2,18,4,15682683),Ct(-43,-34,4,4,2,16761648),Ct(42,34,4,4,2,3524949),Ct(-12,92,32,3,3,3524949)];function Qa(i){return{boxes:[...Yt,...Ja(i)],heightAt:ns}}function rc(i,e){const t=_d(i,e);return t!==null?t:i>-22&&i<22&&e>52&&e<72?12:i>-25&&i<-16&&e>40&&e<=52?e-40:i>-12&&i<20&&e>88&&e<112?6:i>-38&&i<=-12&&e>88&&e<112?Math.max(0,(i+38)/26*6):0}function ns(i,e){return Ed(i,e)??rc(i,e)}const eo=new Map;for(const i of Yt)for(let e=Math.floor(i.minX/16);e<=Math.floor(i.maxX/16);e++)for(let t=Math.floor(i.minZ/16);t<=Math.floor(i.maxZ/16);t++){const n=`${e},${t}`,s=eo.get(n)||[];s.push(i),eo.set(n,s)}function ac(i,e,t=1){const n=new Set;for(let s=Math.floor((i-t)/16);s<=Math.floor((i+t)/16);s++)for(let r=Math.floor((e-t)/16);r<=Math.floor((e+t)/16);r++)for(const a of eo.get(`${s},${r}`)||[])n.add(a);return[...n]}function oc(i,e,t,n=sc){const s=Math.max(t.minX-i,0,i-t.maxX),r=Math.max(t.minZ-e,0,e-t.maxZ);return s*s+r*r<n*n}function $r(i,e,t=sc,n=0,s=Yt){return s===Yt&&(s=ac(i,e,t)),s.some(r=>oc(i,e,r,t)&&n<r.maxY-qi&&n+_r>r.minY+qi)}function bh(i,e,t,n){let s=0,r=n;for(const a of["X","Y","Z"]){const o=a.toLowerCase(),c=e[o],l=i[o];if(Math.abs(c)<1e-9){if(l<t[`min${a}`]||l>t[`max${a}`])return null;continue}const h=(t[`min${a}`]-l)/c,d=(t[`max${a}`]-l)/c;if(s=Math.max(s,Math.min(h,d)),r=Math.min(r,Math.max(h,d)),s>r)return null}return s<=n?s:null}function ji(i,e,t,n={boxes:Yt,heightAt:ns}){let s=t;for(const r of n.boxes){const a=bh(i,e,r,s);a!==null&&(s=a)}for(let r=0;r<=s;r+=.1)if(i.y+e.y*r<n.heightAt(i.x+e.x*r,i.z+e.z*r))return r;return s}function to(i,e,t,n={boxes:Yt,heightAt:ns}){let s=n.heightAt(i,e);for(const r of n.boxes===Yt?ac(i,e):n.boxes)r.maxY<=t+qi&&oc(i,e,r)&&(s=Math.max(s,r.maxY));return s}function cc(i,e,t,n={boxes:Yt,heightAt:ns},s=1,r){if(!i.alive)return;n.boxes===Yt&&(n={...n,boxes:ac(i.x,i.z,7)});const a=n;r!==void 0&&(n={...a,boxes:[...a.boxes,...Ja(r)]}),i.yaw-=e.lookX*.0024,i.pitch=Math.max(-1.35,Math.min(1.35,i.pitch-e.lookY*.0021));let o=i.y-Sn,c=to(i.x,i.z,o+.02,n),l=Math.abs(o-c)<=.02&&i.velocityY<=0;l?(i.jumpsUsed=0,i.velocityY=0):i.jumpsUsed===0&&(i.jumpsUsed=1),e.jump&&i.jumpsUsed<2&&(i.velocityY=Ld,i.jumpsUsed++,l=!1);const h=-Math.sin(i.yaw),d=-Math.cos(i.yaw);let u=h*e.moveY+Math.cos(i.yaw)*e.moveX,f=d*e.moveY-Math.sin(i.yaw)*e.moveX;const _=Math.hypot(u,f);_>0&&(u=u/_*ja*s*(e.sprint?Qc:1),f=f/_*ja*s*(e.sprint?Qc:1));const y=Math.max(0,Math.min(.25,t)),m=Math.max(1,Math.ceil(y/(1/120))),p=y/m;for(let b=0;b<m;b++){if(r!==void 0){const A=r+b*p,v=A+p,E=l?Jc(i.x,i.y-Sn,i.z,A):null;if(E!==null){const C=Ms(E,A),N=Ms(E,v);i.x+=N.x-C.x,i.y+=N.y-C.y,i.z+=N.z-C.z}n={...a,boxes:[...a.boxes,...Ja(v)]}}o=i.y-Sn;const R=(A,v)=>!$r(A,v,sc,o+(l?Fs:0),n.boxes)&&n.heightAt(A,v)<=o+(l?Fs:qi),S=i.x+u*p;R(S,i.z)&&(i.x=S);const w=i.z+f*p;if(R(i.x,w)&&(i.z=w),c=to(i.x,i.z,o+(l?Fs:.04),n),l&&Math.abs(c-o)<=Fs){i.y=c+Sn,i.velocityY=0,i.jumpsUsed=0;continue}l=!1,i.jumpsUsed===0&&(i.jumpsUsed=1);let M=o+i.velocityY*p-el*p*p/2;if(i.velocityY-=el*p,M>o)for(const A of n.boxes)oc(i.x,i.z,A)&&o+_r<=A.minY+qi&&M+_r>A.minY&&(M=Math.min(M,A.minY-_r),i.velocityY=0);i.velocityY<=0&&o>=c-(r!==void 0?.04:qi)&&M<=c&&(M=c,i.velocityY=0,i.jumpsUsed=0,l=!0),i.y=M+Sn}r!==void 0&&(i.supportId=i.velocityY<=0?Jc(i.x,i.y-Sn,i.z,r+y):null)}const Lt={ar:{id:"ar",label:"AR-01",icon:"▰",color:5625599,magazine:30,damage:28,fireDelay:.11,reloadTime:1.25,spread:.006,range:420,falloff:{start:40,end:160,minimum:.5},headshot:2,description:"平衡全自動步槍"},smg:{id:"smg",label:"VOLT-9",icon:"≋",color:16765021,magazine:36,damage:22,fireDelay:.075,reloadTime:.9,spread:.018,range:420,falloff:{start:12,end:60,minimum:.3},headshot:2,description:"高速近距離衝鋒槍"},flame:{id:"flame",label:"焰流槍",icon:"✦",color:16739127,magazine:80,damage:20,fireDelay:.08,reloadTime:1.6,spread:.18,range:12,burn:2,description:"近距離燃燒火焰"},ice:{id:"ice",label:"霜凍槍",icon:"❄",color:7924479,magazine:24,damage:28,fireDelay:.16,reloadTime:1.3,spread:.008,range:45,headshot:2,slow:1.25,description:"命中使敵人緩速"},shotgun:{id:"shotgun",label:"裂片散彈槍",icon:"✹",color:13208831,magazine:8,damage:10,fireDelay:.75,reloadTime:1.45,spread:.12,range:18,headshot:2,pellets:10,description:"近距離高爆發"},sniper:{id:"sniper",label:"長弓狙擊槍",icon:"⌖",color:14942074,magazine:5,damage:80,fireDelay:1,reloadTime:2.5,spread:.02,scopedSpread:0,range:420,headshot:2,description:"4 倍狙擊鏡・爆頭致命"},rocket:{id:"rocket",label:"脈衝火箭炮",icon:"◆",color:16735358,magazine:4,damage:100,fireDelay:1.05,reloadTime:1.9,spread:.012,range:52,splash:5,description:"範圍爆炸傷害"}},Jt=["ar","smg","flame","ice","shotgun","rocket","sniper"],wh={boxes:Yt,heightAt:ns},Xi=i=>({x:i[0],y:i[1],z:i[2]}),Dd=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],ra=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]],vr=i=>Math.hypot(...i),Dr=i=>{const e=vr(i)||1;return i.map(t=>t/e)},Nr=(i,e,t)=>[i[0]+e[0]*t,i[1]+e[1]*t,i[2]+e[2]*t],Th=12*Math.PI/180;function Ah(i){const e=i.y-Sn;return[[0,1.22,0],[0,1.92,0],[-.28,1.22,0],[.28,1.22,0],[0,.46,0]].map(([t,n,s])=>[i.x+t,e+n,i.z+s])}const Rh=(i,e)=>[-Math.sin(i)*Math.cos(e),Math.sin(e),-Math.cos(i)*Math.cos(e)];function tl(i,e,t){const n=Dr(Math.abs(i[1])>.999?[1,0,0]:[-i[2],0,i[0]]),s=[n[1]*i[2]-n[2]*i[1],n[2]*i[0]-n[0]*i[2],n[0]*i[1]-n[1]*i[0]];return Dr([i[0]+n[0]*e+s[0]*t,i[1]+n[1]*e+s[1]*t,i[2]+n[2]*e+s[2]*t])}function Nd(i,e,t=!1){const n=Lt[i],s=n.falloff,r=s?1-(1-s.minimum)*Math.max(0,Math.min(1,(e-s.start)/(s.end-s.start))):1;return Math.max(1,Math.round(n.damage*r*(t?n.headshot??1:1)))}function Ch(i,e,t,n){const s=Math.cos(t.yaw),r=Math.sin(t.yaw),a=i[0]-t.x,o=i[2]-t.z,c={x:s*a-r*o,y:i[1]-(t.y-Sn),z:r*a+s*o},l={x:s*e[0]-r*e[2],y:e[1],z:r*e[0]+s*e[2]},h=[{kind:"head",minX:-.26,maxX:.26,minY:1.66,maxY:2.18,minZ:-.26,maxZ:.26},{kind:"body",minX:-.15,maxX:.15,minY:1.63,maxY:1.66,minZ:-.14,maxZ:.14},{kind:"body",minX:-.34,maxX:.34,minY:.81,maxY:1.63,minZ:-.19,maxZ:.19},...[-1,1].map(u=>({kind:"body",minX:u*.48-.08,maxX:u*.48+.08,minY:1.03,maxY:1.61,minZ:-.08,maxZ:.08})),...[-1,1].map(u=>({kind:"body",minX:u*.22-.095,maxX:u*.22+.095,minY:.125,maxY:.795,minZ:-.095,maxZ:.095}))];let d;for(const u of h){const f=bh(c,l,u,n);f!==null&&(!d||f<d.distance)&&(d={distance:f,kind:u.kind})}return d}function aa(i,e,t,n,s=wh){let r=ji(Xi(i),Xi(e),t,s),a=r<t?"wall":"range",o;for(const c of n){if(!c.alive)continue;const l=Ch(i,e,c,r);l&&l.distance<r&&(r=l.distance,a=l.kind,o=c.id)}return{dir:e,end:Nr(i,e,r),kind:a,targetId:o}}function Ud(i,e,t,n,s=Math.random,r=wh,a=!1){const o=Lt[i],c=a?o.scopedSpread??o.spread:o.spread,l=[],h=new Map,d=(u,f,_,y)=>{const m=h.get(u);m?(m.damage+=f,m.headshot||=_):h.set(u,{targetId:u,damage:f,headshot:_,position:y})};if(i==="flame"){const u=Th;l.push(aa(e,t,o.range,n,r));for(let f=0;f<24;f++){const _=Math.sqrt((f+.5)/24)*Math.tan(u),y=f*2.399963,m=tl(t,Math.cos(y)*_,Math.sin(y)*_);l.push(aa(e,m,o.range,n,r))}for(const f of n){if(!f.alive)continue;let _;for(const y of Ah(f)){const m=ra(y,e),p=vr(m);if(p>o.range||p<.001)continue;const b=Dr(m),R=Math.acos(Math.max(-1,Math.min(1,Dd(b,t))));R<=u&&ji(Xi(e),Xi(b),p,r)>=p-.001&&(!_||R<_.angle)&&(_={position:y,angle:R})}_&&d(f.id,Math.round(o.damage*(1-.4*_.angle/u)),!1,_.position)}}else{for(let u=0;u<(o.pellets??1);u++){const f=tl(t,(s()-.5)*c,(s()-.5)*c),_=aa(e,f,o.range,n,r);l.push(_),i!=="rocket"&&_.targetId&&d(_.targetId,Nd(i,vr(ra(_.end,e)),_.kind==="head"),_.kind==="head",_.end)}if(i==="rocket"){const u=l[0];if(u.kind!=="range"){const f=Nr(u.end,u.dir,-.06);for(const _ of n){if(!_.alive)continue;const y=[_.x,_.y-Sn+1.22,_.z],m=ra(y,f),p=vr(m);_.id===u.targetId?d(_.id,o.damage,!1,u.end):p<(o.splash??0)&&ji(Xi(f),Xi(Dr(m)),p,r)>=p-.001&&d(_.id,Math.max(1,Math.round(o.damage*(1-p/o.splash))),!1,y)}}}}return{rays:l,hits:[...h.values()]}}class Fd{constructor(e="kill"){this.prefix=e}states=new Map;sequence=0;reset(){this.states.clear()}death(e){this.states.delete(e)}remove(e){this.states.delete(e)}record(e,t,n,s,r){this.death(t.id);const a=this.states.get(e.id),o=e.alive?{last:r,multi:a&&r-a.last<=4e3?a.multi+1:1,streak:(a?.streak??0)+1}:{last:r,multi:0,streak:0};e.alive&&this.states.set(e.id,o);const c={3:"勢如破竹",5:"大殺特殺",7:"無人能擋",10:"戰場主宰"};return{eventId:`${this.prefix}:${++this.sequence}`,at:r,attackerId:e.id,attackerName:e.name,victimId:t.id,victimName:t.name,weapon:n,headshot:s,multi:o.multi,streak:o.streak,title:c[o.streak]}}}function Ph(i,e,t,n,s){const r=Lt[i],a={x:e[0],y:e[1],z:e[2]},o=ji(a,{x:t[0],y:t[1],z:t[2]},bs,s);let c=o,l=o<bs?"blocked":"neutral";for(const d of n){if(!d.alive)continue;const u=Ch(e,t,d,c);u&&u.distance<c&&(c=u.distance,l=c<=r.range?"in-range":"out-of-range")}if(i!=="flame")return l;let h=1/0;for(const d of n)if(d.alive)for(const u of Ah(d)){const f=u[0]-e[0],_=u[1]-e[1],y=u[2]-e[2],m=Math.hypot(f,_,y);if(m<.001||m>bs)continue;const p={x:f/m,y:_/m,z:y/m};p.x*t[0]+p.y*t[1]+p.z*t[2]<Math.cos(Th)||ji(a,p,m,s)>=m-.001&&(h=Math.min(h,m))}return h<1/0?h<=r.range?"in-range":"out-of-range":l==="blocked"?"blocked":"neutral"}function Lh(i){return{origin:[i.x,i.y,i.z],direction:Rh(i.yaw,i.pitch)}}class Ih{constructor(e){this.root=e,this.label.className="co-aim-feedback",this.label.hidden=!0,e.append(this.label),e.addEventListener("combat:reset",this.reset),e.addEventListener("armory:open",this.reset)}label=document.createElement("span");state="";reset=()=>this.update("neutral",!1);update(e,t){const n=t&&(e==="in-range"||e==="out-of-range")?e:"neutral";n!==this.state&&(this.state=n,this.root.dataset.aimState=n,this.label.textContent=n==="in-range"?"射程內":n==="out-of-range"?"超出射程":"",this.label.hidden=n==="neutral")}dispose(){this.root.removeEventListener("combat:reset",this.reset),this.root.removeEventListener("armory:open",this.reset),delete this.root.dataset.aimState,this.label.remove()}}const lc="186",Od=0,nl=1,Bd=2,xr=1,kd=2,xs=3,di=0,$t=1,jt=2,kn=0,ui=1,ws=2,il=3,sl=4,zd=5,Vi=100,Hd=101,Gd=102,Vd=103,Wd=104,Xd=200,Yd=201,qd=202,$d=203,Dh=204,Nh=205,Zd=206,Kd=207,Jd=208,jd=209,Qd=210,ef=211,tf=212,nf=213,sf=214,no=0,io=1,so=2,As=3,ro=4,ao=5,oo=6,co=7,Uh=0,rf=1,af=2,Tn=0,Fh=1,Oh=2,Bh=3,kh=4,zh=5,Hh=6,Gh=7,Vh=300,fi=301,Qi=302,oa=303,ca=304,Zr=306,lo=1e3,On=1001,ho=1002,Dt=1003,of=1004,Os=1005,kt=1006,la=1007,li=1008,rn=1009,Wh=1010,Xh=1011,Rs=1012,hc=1013,Rn=1014,mn=1015,Cn=1016,uc=1017,dc=1018,Cs=1020,Yh=35902,qh=35899,$h=1021,Zh=1022,gn=1023,Hn=1026,hi=1027,fc=1028,pc=1029,pi=1030,mc=1031,gc=1033,yr=33776,Sr=33777,Mr=33778,Er=33779,uo=35840,fo=35841,po=35842,mo=35843,go=36196,_o=37492,vo=37496,xo=37488,yo=37489,Ur=37490,So=37491,Mo=37808,Eo=37809,bo=37810,wo=37811,To=37812,Ao=37813,Ro=37814,Co=37815,Po=37816,Lo=37817,Io=37818,Do=37819,No=37820,Uo=37821,Fo=36492,Oo=36494,Bo=36495,ko=36283,zo=36284,Fr=36285,Ho=36286,cf=3200,rl=0,lf=1,jn="",nn="srgb",Or="srgb-linear",Br="linear",at="srgb",ha=7680,hf=519,uf=512,df=513,ff=514,_c=515,pf=516,mf=517,vc=518,gf=519,Kh=35044,_f=35048,al="300 es",wn=2e3,kr=2001;function vf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xf(){const i=zr("canvas");return i.style.display="block",i}const ol={};function Hr(...i){const e="THREE."+i.shift();console.log(e,...i)}function Jh(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function De(...i){i=Jh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function je(...i){i=Jh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function $i(...i){const e=i.join(" ");e in ol||(ol[e]=!0,De(...i))}function yf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Sf={[no]:io,[so]:oo,[ro]:co,[As]:ao,[io]:no,[oo]:so,[co]:ro,[ao]:As};class vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ua=Math.PI/180,Go=180/Math.PI;function Qn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function Mf(i,e){return(i%e+e)%e}function da(i,e,t){return(1-t)*i+t*e}function En(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Fc=class Fc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fc.prototype.isVector2=!0;let Be=Fc;class xi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],_=r[a+2],y=r[a+3];if(d!==y||c!==u||l!==f||h!==_){let m=c*u+l*f+h*_+d*y;m<0&&(u=-u,f=-f,_=-_,y=-y,m=-m);let p=1-o;if(m<.9995){const b=Math.acos(m),R=Math.sin(b);p=Math.sin(p*b)/R,o=Math.sin(o*b)/R,c=c*p+u*o,l=l*p+f*o,h=h*p+_*o,d=d*p+y*o}else{c=c*p+u*o,l=l*p+f*o,h=h*p+_*o,d=d*p+y*o;const b=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=b,l*=b,h*=b,d*=b}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+h*d+c*f-l*u,e[t+1]=c*_+h*u+l*d-o*f,e[t+2]=l*_+h*f+o*u-c*d,e[t+3]=h*_-o*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),f=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*_,this._y=l*f*d-u*h*_,this._z=l*h*_+u*f*d,this._w=l*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+l*f*_,this._y=l*f*d-u*h*_,this._z=l*h*_-u*f*d,this._w=l*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-l*f*_,this._y=l*f*d+u*h*_,this._z=l*h*_+u*f*d,this._w=l*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-l*f*_,this._y=l*f*d+u*h*_,this._z=l*h*_-u*f*d,this._w=l*h*d+u*f*_;break;case"YZX":this._x=u*h*d+l*f*_,this._y=l*f*d+u*h*_,this._z=l*h*_-u*f*d,this._w=l*h*d-u*f*_;break;case"XZY":this._x=u*h*d-l*f*_,this._y=l*f*d-u*h*_,this._z=l*h*_+u*f*d,this._w=l*h*d+u*f*_;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Oc=class Oc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fa.copy(this).projectOnVector(e),this.sub(fa)}reflect(e){return this.sub(fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Oc.prototype.isVector3=!0;let P=Oc;const fa=new P,cl=new xi,Bc=class Bc{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],_=n[8],y=s[0],m=s[3],p=s[6],b=s[1],R=s[4],S=s[7],w=s[2],M=s[5],A=s[8];return r[0]=a*y+o*b+c*w,r[3]=a*m+o*R+c*M,r[6]=a*p+o*S+c*A,r[1]=l*y+h*b+d*w,r[4]=l*m+h*R+d*M,r[7]=l*p+h*S+d*A,r[2]=u*y+f*b+_*w,r[5]=u*m+f*R+_*M,r[8]=u*p+f*S+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,_=t*d+n*u+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=d*y,e[1]=(s*l-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=u*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(n*c-l*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return $i("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pa.makeScale(e,t)),this}rotate(e){return $i("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pa.makeRotation(-e)),this}translate(e,t){return $i("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Bc.prototype.isMatrix3=!0;let Oe=Bc;const pa=new Oe,ll=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hl=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ef(){const i={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===at&&(s.r=zn(s.r),s.g=zn(s.g),s.b=zn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===jn?Br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $i("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $i("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Or]:{primaries:e,whitePoint:n,transfer:Br,toXYZ:ll,fromXYZ:hl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:n,transfer:at,toXYZ:ll,fromXYZ:hl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),i}const $e=Ef();function zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let wi;class bf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wi===void 0&&(wi=zr("canvas")),wi.width=e.width,wi.height=e.height;const s=wi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=wi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=zn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zn(t[n]/255)*255):t[n]=zn(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wf=0;class xc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ma(s[a].image)):r.push(ma(s[a]))}else r=ma(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ma(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let Tf=0;const ga=new P;class Nt extends vi{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=On,s=On,r=kt,a=li,o=gn,c=rn,l=Nt.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Qn(),this.name="",this.source=new xc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ga).x}get height(){return this.source.getSize(ga).y}get depth(){return this.source.getSize(ga).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lo:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lo:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Vh;Nt.DEFAULT_ANISOTROPY=1;const kc=class kc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],_=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(_+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(l+1)/2,S=(f+1)/2,w=(p+1)/2,M=(h+u)/4,A=(d+y)/4,v=(_+m)/4;return R>S&&R>w?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=M/n,r=A/n):S>w?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=M/s,r=v/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=A/r,s=v/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-_)*(m-_)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(d-y)/b,this.z=(u-h)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};kc.prototype.isVector4=!0;let vt=kc;class Af extends vi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Nt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new xc(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class on extends Af{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jh extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rf extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const qr=class qr{constructor(e,t,n,s,r,a,o,c,l,h,d,u,f,_,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,d,u,f,_,y,m)}set(e,t,n,s,r,a,o,c,l,h,d,u,f,_,y,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=_,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Ti.setFromMatrixColumn(e,0).length(),r=1/Ti.setFromMatrixColumn(e,1).length(),a=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,_=o*h,y=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+_*l,t[5]=u-y*l,t[9]=-o*c,t[2]=y-u*l,t[6]=_+f*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*h,f=c*d,_=l*h,y=l*d;t[0]=u+y*o,t[4]=_*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-_,t[6]=y+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*h,f=c*d,_=l*h,y=l*d;t[0]=u-y*o,t[4]=-a*d,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*h,f=a*d,_=o*h,y=o*d;t[0]=c*h,t[4]=_*l-f,t[8]=u*l+y,t[1]=c*d,t[5]=y*l+u,t[9]=f*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,f=a*l,_=o*c,y=o*l;t[0]=c*h,t[4]=y-u*d,t[8]=_*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+_,t[10]=u-y*d}else if(e.order==="XZY"){const u=a*c,f=a*l,_=o*c,y=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+y,t[5]=a*h,t[9]=f*d-_,t[2]=_*d-f,t[6]=o*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cf,e,Pf)}lookAt(e,t,n){const s=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Xn.crossVectors(n,Zt),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Xn.crossVectors(n,Zt)),Xn.normalize(),Bs.crossVectors(Zt,Xn),s[0]=Xn.x,s[4]=Bs.x,s[8]=Zt.x,s[1]=Xn.y,s[5]=Bs.y,s[9]=Zt.y,s[2]=Xn.z,s[6]=Bs.z,s[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],_=n[2],y=n[6],m=n[10],p=n[14],b=n[3],R=n[7],S=n[11],w=n[15],M=s[0],A=s[4],v=s[8],E=s[12],C=s[1],N=s[5],L=s[9],G=s[13],I=s[2],H=s[6],Y=s[10],$=s[14],se=s[3],X=s[7],ee=s[11],ne=s[15];return r[0]=a*M+o*C+c*I+l*se,r[4]=a*A+o*N+c*H+l*X,r[8]=a*v+o*L+c*Y+l*ee,r[12]=a*E+o*G+c*$+l*ne,r[1]=h*M+d*C+u*I+f*se,r[5]=h*A+d*N+u*H+f*X,r[9]=h*v+d*L+u*Y+f*ee,r[13]=h*E+d*G+u*$+f*ne,r[2]=_*M+y*C+m*I+p*se,r[6]=_*A+y*N+m*H+p*X,r[10]=_*v+y*L+m*Y+p*ee,r[14]=_*E+y*G+m*$+p*ne,r[3]=b*M+R*C+S*I+w*se,r[7]=b*A+R*N+S*H+w*X,r[11]=b*v+R*L+S*Y+w*ee,r[15]=b*E+R*G+S*$+w*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],_=e[3],y=e[7],m=e[11],p=e[15],b=c*f-l*u,R=o*f-l*d,S=o*u-c*d,w=a*f-l*h,M=a*u-c*h,A=a*d-o*h;return t*(y*b-m*R+p*S)-n*(_*b-m*w+p*M)+s*(_*R-y*w+p*A)-r*(_*S-y*M+m*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],_=e[12],y=e[13],m=e[14],p=e[15],b=t*o-n*a,R=t*c-s*a,S=t*l-r*a,w=n*c-s*o,M=n*l-r*o,A=s*l-r*c,v=h*y-d*_,E=h*m-u*_,C=h*p-f*_,N=d*m-u*y,L=d*p-f*y,G=u*p-f*m,I=b*G-R*L+S*N+w*C-M*E+A*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/I;return e[0]=(o*G-c*L+l*N)*H,e[1]=(s*L-n*G-r*N)*H,e[2]=(y*A-m*M+p*w)*H,e[3]=(u*M-d*A-f*w)*H,e[4]=(c*C-a*G-l*E)*H,e[5]=(t*G-s*C+r*E)*H,e[6]=(m*S-_*A-p*R)*H,e[7]=(h*A-u*S+f*R)*H,e[8]=(a*L-o*C+l*v)*H,e[9]=(n*C-t*L-r*v)*H,e[10]=(_*M-y*S+p*b)*H,e[11]=(d*S-h*M-f*b)*H,e[12]=(o*E-a*N-c*v)*H,e[13]=(t*N-n*E+s*v)*H,e[14]=(y*R-_*w-m*b)*H,e[15]=(h*w-d*R+u*b)*H,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,_=r*d,y=a*h,m=a*d,p=o*d,b=c*l,R=c*h,S=c*d,w=n.x,M=n.y,A=n.z;return s[0]=(1-(y+p))*w,s[1]=(f+S)*w,s[2]=(_-R)*w,s[3]=0,s[4]=(f-S)*M,s[5]=(1-(u+p))*M,s[6]=(m+b)*M,s[7]=0,s[8]=(_+R)*A,s[9]=(m-b)*A,s[10]=(1-(u+y))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ti.set(s[0],s[1],s[2]).length();const o=Ti.set(s[4],s[5],s[6]).length(),c=Ti.set(s[8],s[9],s[10]).length();r<0&&(a=-a),un.copy(this);const l=1/a,h=1/o,d=1/c;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=d,un.elements[9]*=d,un.elements[10]*=d,t.setFromRotationMatrix(un),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=wn,c=!1){const l=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let _,y;if(c)_=r/(a-r),y=a*r/(a-r);else if(o===wn)_=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===kr)_=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=wn,c=!1){const l=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s);let _,y;if(c)_=1/(a-r),y=a/(a-r);else if(o===wn)_=-2/(a-r),y=-(a+r)/(a-r);else if(o===kr)_=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};qr.prototype.isMatrix4=!0;let dt=qr;const Ti=new P,un=new dt,Cf=new P(0,0,0),Pf=new P(1,1,1),Xn=new P,Bs=new P,Zt=new P,ul=new dt,dl=new xi;class mi{constructor(e=0,t=0,n=0,s=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ul.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ul,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dl.setFromEuler(this),this.setFromQuaternion(dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class Qh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lf=0;const fl=new P,Ai=new xi,Ln=new dt,ks=new P,rs=new P,If=new P,Df=new xi,pl=new P(1,0,0),ml=new P(0,1,0),gl=new P(0,0,1),_l={type:"added"},Nf={type:"removed"},Ri={type:"childadded",child:null},_a={type:"childremoved",child:null};class It extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new P,t=new mi,n=new xi,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new Oe}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(pl,e)}rotateY(e){return this.rotateOnAxis(ml,e)}rotateZ(e){return this.rotateOnAxis(gl,e)}translateOnAxis(e,t){return fl.copy(e).applyQuaternion(this.quaternion),this.position.add(fl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pl,e)}translateY(e){return this.translateOnAxis(ml,e)}translateZ(e){return this.translateOnAxis(gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ks.copy(e):ks.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(rs,ks,this.up):Ln.lookAt(ks,rs,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),Ai.setFromRotationMatrix(Ln),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_l),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nf),_a.child=e,this.dispatchEvent(_a),_a.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_l),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,e,If),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,Df,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}It.DEFAULT_UP=new P(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qt extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uf={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,n),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;l.inputState.pinching&&u>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Uf)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},zs={h:0,s:0,l:0};function xa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=$e.workingColorSpace){if(e=Mf(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=xa(a,r,e+1/3),this.g=xa(a,r,e),this.b=xa(a,r,e-1/3)}return $e.colorSpaceToWorking(this,s),this}setStyle(e,t=nn){function n(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const n=eu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return $e.workingToColorSpace(Bt.copy(this),e),Math.round(Ze(Bt.r*255,0,255))*65536+Math.round(Ze(Bt.g*255,0,255))*256+Math.round(Ze(Bt.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Bt.copy(this),t);const n=Bt.r,s=Bt.g,r=Bt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=nn){$e.workingToColorSpace(Bt.copy(this),e);const t=Bt.r,n=Bt.g,s=Bt.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(zs);const n=da(Yn.h,zs.h,t),s=da(Yn.s,zs.s,t),r=da(Yn.l,zs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Ue;Ue.NAMES=eu;class yc extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const dn=new P,In=new P,ya=new P,Dn=new P,Ci=new P,Pi=new P,vl=new P,Sa=new P,Ma=new P,Ea=new P,ba=new vt,wa=new vt,Ta=new vt;class an{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),dn.subVectors(e,t),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){dn.subVectors(s,t),In.subVectors(n,t),ya.subVectors(e,t);const a=dn.dot(dn),o=dn.dot(In),c=dn.dot(ya),l=In.dot(In),h=In.dot(ya),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-o*h)*u,_=(a*h-o*c)*u;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Dn.x),c.addScaledVector(a,Dn.y),c.addScaledVector(o,Dn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return ba.setScalar(0),wa.setScalar(0),Ta.setScalar(0),ba.fromBufferAttribute(e,t),wa.fromBufferAttribute(e,n),Ta.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ba,r.x),a.addScaledVector(wa,r.y),a.addScaledVector(Ta,r.z),a}static isFrontFacing(e,t,n,s){return dn.subVectors(n,t),In.subVectors(e,t),dn.cross(In).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),dn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return an.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ci.subVectors(s,n),Pi.subVectors(r,n),Sa.subVectors(e,n);const c=Ci.dot(Sa),l=Pi.dot(Sa);if(c<=0&&l<=0)return t.copy(n);Ma.subVectors(e,s);const h=Ci.dot(Ma),d=Pi.dot(Ma);if(h>=0&&d<=h)return t.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ci,a);Ea.subVectors(e,r);const f=Ci.dot(Ea),_=Pi.dot(Ea);if(_>=0&&f<=_)return t.copy(r);const y=f*l-c*_;if(y<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(Pi,o);const m=h*_-f*d;if(m<=0&&d-h>=0&&f-_>=0)return vl.subVectors(r,s),o=(d-h)/(d-h+(f-_)),t.copy(s).addScaledVector(vl,o);const p=1/(m+y+u);return a=y*p,o=u*p,t.copy(n).addScaledVector(Ci,a).addScaledVector(Pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class yi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hs.copy(n.boundingBox)),Hs.applyMatrix4(e.matrixWorld),this.union(Hs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(as),Gs.subVectors(this.max,as),Li.subVectors(e.a,as),Ii.subVectors(e.b,as),Di.subVectors(e.c,as),qn.subVectors(Ii,Li),$n.subVectors(Di,Ii),ni.subVectors(Li,Di);let t=[0,-qn.z,qn.y,0,-$n.z,$n.y,0,-ni.z,ni.y,qn.z,0,-qn.x,$n.z,0,-$n.x,ni.z,0,-ni.x,-qn.y,qn.x,0,-$n.y,$n.x,0,-ni.y,ni.x,0];return!Aa(t,Li,Ii,Di,Gs)||(t=[1,0,0,0,1,0,0,0,1],!Aa(t,Li,Ii,Di,Gs))?!1:(Vs.crossVectors(qn,$n),t=[Vs.x,Vs.y,Vs.z],Aa(t,Li,Ii,Di,Gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Nn=[new P,new P,new P,new P,new P,new P,new P,new P],fn=new P,Hs=new yi,Li=new P,Ii=new P,Di=new P,qn=new P,$n=new P,ni=new P,as=new P,Gs=new P,Vs=new P,ii=new P;function Aa(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ii.fromArray(i,r);const o=s.x*Math.abs(ii.x)+s.y*Math.abs(ii.y)+s.z*Math.abs(ii.z),c=e.dot(ii),l=t.dot(ii),h=n.dot(ii);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const bt=new P,Ws=new Be;let Ff=0;class cn extends vi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ff++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kh,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class tu extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class nu extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ft extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Of=new yi,os=new P,Ra=new P;class Si{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Of.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;os.subVectors(e,this.center);const t=os.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(os,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(os.copy(e.center).add(Ra)),this.expandByPoint(os.copy(e.center).sub(Ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Bf=0;const tn=new dt,Ca=new It,Ni=new P,Kt=new yi,cs=new yi,Pt=new P;class Tt extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vf(e)?nu:tu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return Ca.lookAt(e),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ft(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];cs.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(Kt.min,cs.min),Kt.expandByPoint(Pt),Pt.addVectors(Kt.max,cs.max),Kt.expandByPoint(Pt)):(Kt.expandByPoint(cs.min),Kt.expandByPoint(cs.max))}Kt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Pt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Pt.fromBufferAttribute(o,l),c&&(Ni.fromBufferAttribute(e,l),Pt.add(Ni)),s=Math.max(s,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new cn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new P,c[v]=new P;const l=new P,h=new P,d=new P,u=new Be,f=new Be,_=new Be,y=new P,m=new P;function p(v,E,C){l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,C),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,E),_.fromBufferAttribute(r,C),h.sub(l),d.sub(l),f.sub(u),_.sub(u);const N=1/(f.x*_.y-_.x*f.y);isFinite(N)&&(y.copy(h).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(N),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(N),o[v].add(y),o[E].add(y),o[C].add(y),c[v].add(m),c[E].add(m),c[C].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let v=0,E=b.length;v<E;++v){const C=b[v],N=C.start,L=C.count;for(let G=N,I=N+L;G<I;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const R=new P,S=new P,w=new P,M=new P;function A(v){w.fromBufferAttribute(s,v),M.copy(w);const E=o[v];R.copy(E),R.sub(w.multiplyScalar(w.dot(E))).normalize(),S.crossVectors(M,E);const N=S.dot(c[v])<0?-1:1;a.setXYZW(v,R.x,R.y,R.z,N)}for(let v=0,E=b.length;v<E;++v){const C=b[v],N=C.start,L=C.count;for(let G=N,I=N+L;G<I;G+=3)A(e.getX(G+0)),A(e.getX(G+1)),A(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,d=new P;if(e)for(let u=0,f=e.count;u<f;u+=3){const _=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let f=0,_=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?f=c[y]*o.data.stride+o.offset:f=c[y]*h;for(let p=0;p<h;p++)u[_++]=l[f++]}return new cn(u,h,d)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kh,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Ht=new P;class Gr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Hr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Hr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Pa=new P,zf=new P,Hf=new Oe;class Kn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Pa.subVectors(n,t).cross(zf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Pa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hf.getNormalMatrix(e),s=this.coplanarPoint(Pa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Gf=0;class Mi extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=ui,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dh,this.blendDst=Nh,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ha,this.stencilZFail=ha,this.stencilZPass=ha,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Kn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Be().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class iu extends Mi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ui;const ls=new P,Fi=new P,Oi=new P,Bi=new Be,hs=new Be,su=new dt,Xs=new P,us=new P,Ys=new P,xl=new Be,La=new Be,yl=new Be;class ru extends It{constructor(e=new iu){if(super(),this.isSprite=!0,this.type="Sprite",Ui===void 0){Ui=new Tt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new kf(t,5);Ui.setIndex([0,1,2,0,2,3]),Ui.setAttribute("position",new Gr(n,3,0,!1)),Ui.setAttribute("uv",new Gr(n,2,3,!1))}this.geometry=Ui,this.material=e,this.center=new Be(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fi.setFromMatrixScale(this.matrixWorld),su.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Oi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fi.multiplyScalar(-Oi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;qs(Xs.set(-.5,-.5,0),Oi,a,Fi,s,r),qs(us.set(.5,-.5,0),Oi,a,Fi,s,r),qs(Ys.set(.5,.5,0),Oi,a,Fi,s,r),xl.set(0,0),La.set(1,0),yl.set(1,1);let o=e.ray.intersectTriangle(Xs,us,Ys,!1,ls);if(o===null&&(qs(us.set(-.5,.5,0),Oi,a,Fi,s,r),La.set(0,1),o=e.ray.intersectTriangle(Xs,Ys,us,!1,ls),o===null))return;const c=e.ray.origin.distanceTo(ls);c<e.near||c>e.far||t.push({distance:c,point:ls.clone(),uv:an.getInterpolation(ls,Xs,us,Ys,xl,La,yl,new Be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function qs(i,e,t,n,s,r){Bi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(hs.x=r*Bi.x-s*Bi.y,hs.y=s*Bi.x+r*Bi.y):hs.copy(Bi),i.copy(e),i.x+=hs.x,i.y+=hs.y,i.applyMatrix4(su)}const Un=new P,Ia=new P,$s=new P,Zs=new P;class Sc{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ia.copy(e).add(t).multiplyScalar(.5),$s.copy(t).sub(e).normalize(),Zs.copy(this.origin).sub(Ia);const r=e.distanceTo(t)*.5,a=-this.direction.dot($s),o=Zs.dot(this.direction),c=-Zs.dot($s),l=Zs.lengthSq(),h=Math.abs(1-a*a);let d,u,f,_;if(h>0)if(d=a*c-o,u=a*o-c,_=r*h,d>=0)if(u>=-_)if(u<=_){const y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-_?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=_?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ia).addScaledVector($s,u),f}intersectSphere(e,t){if(e.radius<0)return null;Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,_=t.x-a.x,y=t.y-a.y,m=t.z-a.z,p=n.x-a.x,b=n.y-a.y,R=n.z-a.z,S=Math.abs(c),w=Math.abs(l),M=Math.abs(h);let A,v,E,C,N,L,G,I,H,Y,$,se;if(S>=w&&S>=M?(E=c,L=d,H=_,se=p,c>=0?(A=l,v=h,C=u,N=f,G=y,I=m,Y=b,$=R):(A=h,v=l,C=f,N=u,G=m,I=y,Y=R,$=b)):w>=M?(E=l,L=u,H=y,se=b,l>=0?(A=h,v=c,C=f,N=d,G=m,I=_,Y=R,$=p):(A=c,v=h,C=d,N=f,G=_,I=m,Y=p,$=R)):(E=h,L=f,H=m,se=R,h>=0?(A=c,v=l,C=d,N=u,G=_,I=y,Y=p,$=b):(A=l,v=c,C=u,N=d,G=y,I=_,Y=b,$=p)),E===0)return null;const X=A/E,ee=v/E,ne=1/E,Re=C-X*L,Ee=N-ee*L,ot=G-X*H,qe=I-ee*H,Ke=Y-X*se,Z=$-ee*se,te=Ke*qe-Z*ot,ge=Re*Z-Ee*Ke,Ne=ot*Ee-qe*Re;if(s){if(te<0||ge<0||Ne<0)return null}else if((te<0||ge<0||Ne<0)&&(te>0||ge>0||Ne>0))return null;const J=te+ge+Ne;if(J===0)return null;const xe=ne*(te*L+ge*H+Ne*se);return(J>0?xe<0:xe>0)?null:this.at(xe/J,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt extends Mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sl=new dt,si=new Sc,Ks=new Si,Ml=new P,Js=new P,js=new P,Qs=new P,Da=new P,er=new P,El=new P,tr=new P;class Fe extends It{constructor(e=new Tt,t=new tt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){er.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(Da.fromBufferAttribute(d,e),a?er.addScaledVector(Da,h):er.addScaledVector(Da.sub(t),h))}t.add(er)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(r),si.copy(e.ray).recast(e.near),!(Ks.containsPoint(si.origin)===!1&&(si.intersectSphere(Ks,Ml)===null||si.origin.distanceToSquared(Ml)>(e.far-e.near)**2))&&(Sl.copy(r).invert(),si.copy(e.ray).applyMatrix4(Sl),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=u.length;_<y;_++){const m=u[_],p=a[m.materialIndex],b=Math.max(m.start,f.start),R=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=b,w=R;S<w;S+=3){const M=o.getX(S),A=o.getX(S+1),v=o.getX(S+2);s=nr(this,p,e,n,l,h,d,M,A,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=_,p=y;m<p;m+=3){const b=o.getX(m),R=o.getX(m+1),S=o.getX(m+2);s=nr(this,a,e,n,l,h,d,b,R,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,y=u.length;_<y;_++){const m=u[_],p=a[m.materialIndex],b=Math.max(m.start,f.start),R=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=b,w=R;S<w;S+=3){const M=S,A=S+1,v=S+2;s=nr(this,p,e,n,l,h,d,M,A,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=_,p=y;m<p;m+=3){const b=m,R=m+1,S=m+2;s=nr(this,a,e,n,l,h,d,b,R,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Vf(i,e,t,n,s,r,a,o){let c;if(e.side===$t?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===di,o),c===null)return null;tr.copy(o),tr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(tr);return l<t.near||l>t.far?null:{distance:l,point:tr.clone(),object:i}}function nr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Js),i.getVertexPosition(c,js),i.getVertexPosition(l,Qs);const h=Vf(i,e,t,n,Js,js,Qs,El);if(h){const d=new P;an.getBarycoord(El,Js,js,Qs,d),s&&(h.uv=an.getInterpolatedAttribute(s,o,c,l,d,new Be)),r&&(h.uv1=an.getInterpolatedAttribute(r,o,c,l,d,new Be)),a&&(h.normal=an.getInterpolatedAttribute(a,o,c,l,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new P,materialIndex:0};an.getNormal(Js,js,Qs,u.normal),h.face=u,h.barycoord=d}return h}class au extends Nt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Dt,h=Dt,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bl extends cn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ki=new dt,wl=new dt,ir=[],Tl=new yi,Wf=new dt,ds=new Fe,fs=new Si;class br extends Fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Wf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ki),Tl.copy(e.boundingBox).applyMatrix4(ki),this.boundingBox.union(Tl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ki),fs.copy(e.boundingSphere).applyMatrix4(ki),this.boundingSphere.union(fs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ds.geometry=this.geometry,ds.material=this.material,ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fs.copy(this.boundingSphere),fs.applyMatrix4(n),e.ray.intersectsSphere(fs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ki),wl.multiplyMatrices(n,ki),ds.matrixWorld=wl,ds.raycast(e,ir);for(let a=0,o=ir.length;a<o;a++){const c=ir[a];c.instanceId=r,c.object=this,t.push(c)}ir.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new bl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new au(new Float32Array(s*this.count),s,this.count,fc,mn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ri=new Si,Xf=new Be(.5,.5),sr=new P;class ou{constructor(e=new Kn,t=new Kn,n=new Kn,s=new Kn,r=new Kn,a=new Kn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],_=r[8],y=r[9],m=r[10],p=r[11],b=r[12],R=r[13],S=r[14],w=r[15];if(s[0].setComponents(l-a,f-h,p-_,w-b).normalize(),s[1].setComponents(l+a,f+h,p+_,w+b).normalize(),s[2].setComponents(l+o,f+d,p+y,w+R).normalize(),s[3].setComponents(l-o,f-d,p-y,w-R).normalize(),n)s[4].setComponents(c,u,m,S).normalize(),s[5].setComponents(l-c,f-u,p-m,w-S).normalize();else if(s[4].setComponents(l-c,f-u,p-m,w-S).normalize(),t===wn)s[5].setComponents(l+c,f+u,p+m,w+S).normalize();else if(t===kr)s[5].setComponents(c,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){ri.center.set(0,0,0);const t=Xf.distanceTo(e.center);return ri.radius=.7071067811865476+t,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(sr.x=s.normal.x>0?e.max.x:e.min.x,sr.y=s.normal.y>0?e.max.y:e.min.y,sr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(sr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yf extends Mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vr=new P,Wr=new P,Al=new dt,ps=new Sc,rr=new Si,Na=new P,Rl=new P;class Cl extends It{constructor(e=new Tt,t=new Yf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Vr.fromBufferAttribute(t,s-1),Wr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Vr.distanceTo(Wr);e.setAttribute("lineDistance",new ft(n,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(s),rr.radius+=r,e.ray.intersectsSphere(rr)===!1)return;Al.copy(s).invert(),ps.copy(e.ray).applyMatrix4(Al);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let y=f,m=_-1;y<m;y+=l){const p=h.getX(y),b=h.getX(y+1),R=ar(this,e,ps,c,p,b,y);R&&t.push(R)}if(this.isLineLoop){const y=h.getX(_-1),m=h.getX(f),p=ar(this,e,ps,c,y,m,_-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let y=f,m=_-1;y<m;y+=l){const p=ar(this,e,ps,c,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){const y=ar(this,e,ps,c,_-1,f,_-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ar(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Vr.fromBufferAttribute(o,s),Wr.fromBufferAttribute(o,r),t.distanceSqToSegment(Vr,Wr,Na,Rl)>n)return;Na.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Na);if(!(l<e.near||l>e.far))return{distance:l,point:Rl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class qf extends Mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pl=new dt,Vo=new Sc,or=new Si,cr=new P;class Wo extends It{constructor(e=new Tt,t=new qf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(s),or.radius+=r,e.ray.intersectsSphere(or)===!1)return;Pl.copy(s).invert(),Vo.copy(e.ray).applyMatrix4(Pl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let _=u,y=f;_<y;_++){const m=l.getX(_);cr.fromBufferAttribute(d,m),Ll(cr,m,c,s,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let _=u,y=f;_<y;_++)cr.fromBufferAttribute(d,_),Ll(cr,_,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ll(i,e,t,n,s,r,a){const o=Vo.distanceSqToPoint(i);if(o<t){const c=new P;Vo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class cu extends Nt{constructor(e=[],t=fi,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lu extends Nt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ps extends Nt{constructor(e,t,n=Rn,s,r,a,o=Dt,c=Dt,l,h=Hn,d=1){if(h!==Hn&&h!==hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class $f extends Ps{constructor(e,t=Rn,n=fi,s,r,a=Dt,o=Dt,c,l=Hn){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class hu extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yt extends Tt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,f=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(d,2));function _(y,m,p,b,R,S,w,M,A,v,E){const C=S/A,N=w/v,L=S/2,G=w/2,I=M/2,H=A+1,Y=v+1;let $=0,se=0;const X=new P;for(let ee=0;ee<Y;ee++){const ne=ee*N-G;for(let Re=0;Re<H;Re++){const Ee=Re*C-L;X[y]=Ee*b,X[m]=ne*R,X[p]=I,l.push(X.x,X.y,X.z),X[y]=0,X[m]=0,X[p]=M>0?1:-1,h.push(X.x,X.y,X.z),d.push(Re/A),d.push(1-ee/v),$+=1}}for(let ee=0;ee<v;ee++)for(let ne=0;ne<A;ne++){const Re=u+ne+H*ee,Ee=u+ne+H*(ee+1),ot=u+(ne+1)+H*(ee+1),qe=u+(ne+1)+H*ee;c.push(Re,Ee,qe),c.push(Ee,ot,qe),se+=6}o.addGroup(f,se,E),f+=se,u+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Mc extends Tt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new P,h=new Be;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=n+d/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(o,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class gi extends Tt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let _=0;const y=[],m=n/2;let p=0;b(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new ft(d,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(f,2));function b(){const S=new P,w=new P;let M=0;const A=(t-e)/n;for(let v=0;v<=r;v++){const E=[],C=v/r,N=C*(t-e)+e;for(let L=0;L<=s;L++){const G=L/s,I=G*c+o,H=Math.sin(I),Y=Math.cos(I);w.x=N*H,w.y=-C*n+m,w.z=N*Y,d.push(w.x,w.y,w.z),S.set(H,A,Y).normalize(),u.push(S.x,S.y,S.z),f.push(G,1-C),E.push(_++)}y.push(E)}for(let v=0;v<s;v++)for(let E=0;E<r;E++){const C=y[E][v],N=y[E+1][v],L=y[E+1][v+1],G=y[E][v+1];(e>0||E!==0)&&(h.push(C,N,G),M+=3),(t>0||E!==r-1)&&(h.push(N,L,G),M+=3)}l.addGroup(p,M,0),p+=M}function R(S){const w=_,M=new Be,A=new P;let v=0;const E=S===!0?e:t,C=S===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,m*C,0),u.push(0,C,0),f.push(.5,.5),_++;const N=_;for(let L=0;L<=s;L++){const I=L/s*c+o,H=Math.cos(I),Y=Math.sin(I);A.x=E*Y,A.y=m*C,A.z=E*H,d.push(A.x,A.y,A.z),u.push(0,C,0),M.x=H*.5+.5,M.y=Y*.5*C+.5,f.push(M.x,M.y),_++}for(let L=0;L<s;L++){const G=w+L,I=N+L;S===!0?h.push(I,I+1,G):h.push(I+1,I,G),v+=3}l.addGroup(p,v,S===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Kr extends Tt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(r.slice(),3)),this.setAttribute("uv",new ft(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const R=new P,S=new P,w=new P;for(let M=0;M<t.length;M+=3)f(t[M+0],R),f(t[M+1],S),f(t[M+2],w),c(R,S,w,b)}function c(b,R,S,w){const M=w+1,A=[];for(let v=0;v<=M;v++){A[v]=[];const E=b.clone().lerp(S,v/M),C=R.clone().lerp(S,v/M),N=M-v;for(let L=0;L<=N;L++)L===0&&v===M?A[v][L]=E:A[v][L]=E.clone().lerp(C,L/N)}for(let v=0;v<M;v++)for(let E=0;E<2*(M-v)-1;E++){const C=Math.floor(E/2);E%2===0?(u(A[v][C+1]),u(A[v+1][C]),u(A[v][C])):(u(A[v][C+1]),u(A[v+1][C+1]),u(A[v+1][C]))}}function l(b){const R=new P;for(let S=0;S<r.length;S+=3)R.x=r[S+0],R.y=r[S+1],R.z=r[S+2],R.normalize().multiplyScalar(b),r[S+0]=R.x,r[S+1]=R.y,r[S+2]=R.z}function h(){const b=new P;for(let R=0;R<r.length;R+=3){b.x=r[R+0],b.y=r[R+1],b.z=r[R+2];const S=m(b)/2/Math.PI+.5,w=p(b)/Math.PI+.5;a.push(S,1-w)}_(),d()}function d(){for(let b=0;b<a.length;b+=6){const R=a[b+0],S=a[b+2],w=a[b+4],M=Math.max(R,S,w),A=Math.min(R,S,w);M>.9&&A<.1&&(R<.2&&(a[b+0]+=1),S<.2&&(a[b+2]+=1),w<.2&&(a[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function f(b,R){const S=b*3;R.x=e[S+0],R.y=e[S+1],R.z=e[S+2]}function _(){const b=new P,R=new P,S=new P,w=new P,M=new Be,A=new Be,v=new Be;for(let E=0,C=0;E<r.length;E+=9,C+=6){b.set(r[E+0],r[E+1],r[E+2]),R.set(r[E+3],r[E+4],r[E+5]),S.set(r[E+6],r[E+7],r[E+8]),M.set(a[C+0],a[C+1]),A.set(a[C+2],a[C+3]),v.set(a[C+4],a[C+5]),w.copy(b).add(R).add(S).divideScalar(3);const N=m(w);y(M,C+0,b,N),y(A,C+2,R,N),y(v,C+4,S,N)}}function y(b,R,S,w){w<0&&b.x===1&&(a[R]=b.x-1),S.x===0&&S.z===0&&(a[R]=w/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.vertices,e.indices,e.radius,e.detail)}}class Ec extends Kr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ec(e.radius,e.detail)}}class es extends Kr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new es(e.radius,e.detail)}}class _i extends Tt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=e/o,u=t/c,f=[],_=[],y=[],m=[];for(let p=0;p<h;p++){const b=p*u-a;for(let R=0;R<l;R++){const S=R*d-r;_.push(S,-b,0),y.push(0,0,1),m.push(R/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){const R=b+l*p,S=b+l*(p+1),w=b+1+l*(p+1),M=b+1+l*p;f.push(R,S,M),f.push(S,w,M)}this.setIndex(f),this.setAttribute("position",new ft(_,3)),this.setAttribute("normal",new ft(y,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.width,e.height,e.widthSegments,e.heightSegments)}}class bc extends Tt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let d=e;const u=(t-e)/s,f=new P,_=new Be;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),_.x=(f.x/t+1)/2,_.y=(f.y/t+1)/2,h.push(_.x,_.y)}d+=u}for(let y=0;y<s;y++){const m=y*(n+1);for(let p=0;p<n;p++){const b=p+m,R=b,S=b+n+1,w=b+n+2,M=b+1;o.push(R,S,M),o.push(S,w,M)}}this.setIndex(o),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class wc extends Tt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const c=[],l=[],h=[],d=[],u=new P,f=new P,_=new P;for(let y=0;y<=n;y++){const m=a+y/n*o;for(let p=0;p<=s;p++){const b=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(b),f.y=(e+t*Math.cos(m))*Math.sin(b),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),u.x=e*Math.cos(b),u.y=e*Math.sin(b),_.subVectors(f,u).normalize(),h.push(_.x,_.y,_.z),d.push(p/s),d.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){const p=(s+1)*y+m-1,b=(s+1)*(y-1)+m-1,R=(s+1)*(y-1)+m,S=(s+1)*y+m;c.push(p,b,S),c.push(b,R,S)}this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ts(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Il(s))s.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Il(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Gt(i){const e={};for(let t=0;t<i.length;t++){const n=ts(i[t]);for(const s in n)e[s]=n[s]}return e}function Il(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Zf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function uu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const Kf={clone:ts,merge:Gt};var Jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qt extends Mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jf,this.fragmentShader=jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=Zf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ue().setHex(s.value);break;case"v2":this.uniforms[n].value=new Be().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new vt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Oe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new dt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Qf extends Qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ep extends Mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tp extends Mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class np extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class du extends np{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const lr=new P,hr=new xi,xn=new P;class fu extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(lr,hr,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lr,hr,xn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(lr,hr,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lr,hr,xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new P,Dl=new Be,Nl=new Be;class Xt extends fu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z)}getViewSize(e,t){return this.getViewBounds(e,Dl,Nl),t.subVectors(Nl,Dl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ua*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Tc extends fu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zi=-90,Hi=1;class ip extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xt(zi,Hi,e,t);s.layers=this.layers,this.add(s);const r=new Xt(zi,Hi,e,t);r.layers=this.layers,this.add(r);const a=new Xt(zi,Hi,e,t);a.layers=this.layers,this.add(a);const o=new Xt(zi,Hi,e,t);o.layers=this.layers,this.add(o);const c=new Xt(zi,Hi,e,t);c.layers=this.layers,this.add(c);const l=new Xt(zi,Hi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class sp extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const zc=class zc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};zc.prototype.isMatrix2=!0;let Ul=zc;function Fl(i,e,t,n){const s=rp(n);switch(t){case $h:return i*e;case fc:return i*e/s.components*s.byteLength;case pc:return i*e/s.components*s.byteLength;case pi:return i*e*2/s.components*s.byteLength;case mc:return i*e*2/s.components*s.byteLength;case Zh:return i*e*3/s.components*s.byteLength;case gn:return i*e*4/s.components*s.byteLength;case gc:return i*e*4/s.components*s.byteLength;case yr:case Sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mr:case Er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fo:case mo:return Math.max(i,16)*Math.max(e,8)/4;case uo:case po:return Math.max(i,8)*Math.max(e,8)/2;case go:case _o:case xo:case yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vo:case Ur:case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case bo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case wo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case To:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Co:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Po:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Io:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case No:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Uo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Fo:case Oo:case Bo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ko:case zo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Fr:case Ho:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rp(i){switch(i){case rn:case Wh:return{byteLength:1,components:1};case Rs:case Xh:case Cn:return{byteLength:2,components:1};case uc:case dc:return{byteLength:2,components:4};case Rn:case hc:case mn:return{byteLength:4,components:1};case Yh:case qh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lc}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lc);function pu(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ap(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<d.length;f++){const _=d[u],y=d[f];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,_=d.length;f<_;f++){const y=d[f];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Pp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ip=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Op="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$p=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Qp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,am=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,om=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,um=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_m=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,km=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ym=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$m=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Km=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ng=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const og=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ig=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ng=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ug=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Og=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:op,alphahash_pars_fragment:cp,alphamap_fragment:lp,alphamap_pars_fragment:hp,alphatest_fragment:up,alphatest_pars_fragment:dp,aomap_fragment:fp,aomap_pars_fragment:pp,batching_pars_vertex:mp,batching_vertex:gp,begin_vertex:_p,beginnormal_vertex:vp,bsdfs:xp,iridescence_fragment:yp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:Mp,clipping_planes_pars_fragment:Ep,clipping_planes_pars_vertex:bp,clipping_planes_vertex:wp,color_fragment:Tp,color_pars_fragment:Ap,color_pars_vertex:Rp,color_vertex:Cp,common:Pp,cube_uv_reflection_fragment:Lp,defaultnormal_vertex:Ip,displacementmap_pars_vertex:Dp,displacementmap_vertex:Np,emissivemap_fragment:Up,emissivemap_pars_fragment:Fp,colorspace_fragment:Op,colorspace_pars_fragment:Bp,envmap_fragment:kp,envmap_common_pars_fragment:zp,envmap_pars_fragment:Hp,envmap_pars_vertex:Gp,envmap_physical_pars_fragment:Qp,envmap_vertex:Vp,fog_vertex:Wp,fog_pars_vertex:Xp,fog_fragment:Yp,fog_pars_fragment:qp,gradientmap_pars_fragment:$p,lightmap_pars_fragment:Zp,lights_lambert_fragment:Kp,lights_lambert_pars_fragment:Jp,lights_pars_begin:jp,lights_toon_fragment:em,lights_toon_pars_fragment:tm,lights_phong_fragment:nm,lights_phong_pars_fragment:im,lights_physical_fragment:sm,lights_physical_pars_fragment:rm,lights_fragment_begin:am,lights_fragment_maps:om,lights_fragment_end:cm,lightprobes_pars_fragment:lm,logdepthbuf_fragment:hm,logdepthbuf_pars_fragment:um,logdepthbuf_pars_vertex:dm,logdepthbuf_vertex:fm,map_fragment:pm,map_pars_fragment:mm,map_particle_fragment:gm,map_particle_pars_fragment:_m,metalnessmap_fragment:vm,metalnessmap_pars_fragment:xm,morphinstance_vertex:ym,morphcolor_vertex:Sm,morphnormal_vertex:Mm,morphtarget_pars_vertex:Em,morphtarget_vertex:bm,normal_fragment_begin:wm,normal_fragment_maps:Tm,normal_pars_fragment:Am,normal_pars_vertex:Rm,normal_vertex:Cm,normalmap_pars_fragment:Pm,clearcoat_normal_fragment_begin:Lm,clearcoat_normal_fragment_maps:Im,clearcoat_pars_fragment:Dm,iridescence_pars_fragment:Nm,opaque_fragment:Um,packing:Fm,premultiplied_alpha_fragment:Om,project_vertex:Bm,dithering_fragment:km,dithering_pars_fragment:zm,roughnessmap_fragment:Hm,roughnessmap_pars_fragment:Gm,shadowmap_pars_fragment:Vm,shadowmap_pars_vertex:Wm,shadowmap_vertex:Xm,shadowmask_pars_fragment:Ym,skinbase_vertex:qm,skinning_pars_vertex:$m,skinning_vertex:Zm,skinnormal_vertex:Km,specularmap_fragment:Jm,specularmap_pars_fragment:jm,tonemapping_fragment:Qm,tonemapping_pars_fragment:eg,transmission_fragment:tg,transmission_pars_fragment:ng,uv_pars_fragment:ig,uv_pars_vertex:sg,uv_vertex:rg,worldpos_vertex:ag,background_vert:og,background_frag:cg,backgroundCube_vert:lg,backgroundCube_frag:hg,cube_vert:ug,cube_frag:dg,depth_vert:fg,depth_frag:pg,distance_vert:mg,distance_frag:gg,equirect_vert:_g,equirect_frag:vg,linedashed_vert:xg,linedashed_frag:yg,meshbasic_vert:Sg,meshbasic_frag:Mg,meshlambert_vert:Eg,meshlambert_frag:bg,meshmatcap_vert:wg,meshmatcap_frag:Tg,meshnormal_vert:Ag,meshnormal_frag:Rg,meshphong_vert:Cg,meshphong_frag:Pg,meshphysical_vert:Lg,meshphysical_frag:Ig,meshtoon_vert:Dg,meshtoon_frag:Ng,points_vert:Ug,points_frag:Fg,shadow_vert:Og,shadow_frag:Bg,sprite_vert:kg,sprite_frag:zg},de={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Mn={basic:{uniforms:Gt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Gt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Gt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Gt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Gt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Gt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Gt([de.points,de.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Gt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Gt([de.common,de.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Gt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Gt([de.sprite,de.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Gt([de.common,de.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Gt([de.lights,de.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Mn.physical={uniforms:Gt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const ur={r:0,b:0,g:0},Hg=new dt,mu=new Oe;mu.set(-1,0,0,0,1,0,0,0,1);function Gg(i,e,t,n,s,r){const a=new Ue(0);let o=s===!0?0:1,c,l,h=null,d=0,u=null;function f(b){let R=b.isScene===!0?b.background:null;if(R&&R.isTexture){const S=b.backgroundBlurriness>0;R=e.get(R,S)}return R}function _(b){let R=!1;const S=f(b);S===null?m(a,o):S&&S.isColor&&(m(S,1),R=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(b,R){const S=f(R);S&&(S.isCubeTexture||S.mapping===Zr)?(l===void 0&&(l=new Fe(new yt(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:ts(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Hg.makeRotationFromEuler(R.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(mu),l.material.toneMapped=$e.getTransfer(S.colorSpace)!==at,(h!==S||d!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Fe(new _i(2,2),new Qt({name:"BackgroundMaterial",uniforms:ts(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=$e.getTransfer(S.colorSpace)!==at,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,R){b.getRGB(ur,uu(i)),t.buffers.color.setClear(ur.r,ur.g,ur.b,R,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,R=1){a.set(b),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:_,addToRenderList:y,dispose:p}}function Vg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(N,L,G,I,H){let Y=!1;const $=d(N,I,G,L);r!==$&&(r=$,l(r.object)),Y=f(N,I,G,H),Y&&_(N,I,G,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,S(N,L,G,I),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function d(N,L,G,I){const H=I.wireframe===!0;let Y=n[L.id];Y===void 0&&(Y={},n[L.id]=Y);const $=N.isInstancedMesh===!0?N.id:0;let se=Y[$];se===void 0&&(se={},Y[$]=se);let X=se[G.id];X===void 0&&(X={},se[G.id]=X);let ee=X[H];return ee===void 0&&(ee=u(c()),X[H]=ee),ee}function u(N){const L=[],G=[],I=[];for(let H=0;H<t;H++)L[H]=0,G[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:I,object:N,attributes:{},index:null}}function f(N,L,G,I){const H=r.attributes,Y=L.attributes;let $=0;const se=G.getAttributes();for(const X in se)if(se[X].location>=0){const ne=H[X];let Re=Y[X];if(Re===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(Re=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(Re=N.instanceColor)),ne===void 0||ne.attribute!==Re||Re&&ne.data!==Re.data)return!0;$++}return r.attributesNum!==$||r.index!==I}function _(N,L,G,I){const H={},Y=L.attributes;let $=0;const se=G.getAttributes();for(const X in se)if(se[X].location>=0){let ne=Y[X];ne===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor));const Re={};Re.attribute=ne,ne&&ne.data&&(Re.data=ne.data),H[X]=Re,$++}r.attributes=H,r.attributesNum=$,r.index=I}function y(){const N=r.newAttributes;for(let L=0,G=N.length;L<G;L++)N[L]=0}function m(N){p(N,0)}function p(N,L){const G=r.newAttributes,I=r.enabledAttributes,H=r.attributeDivisors;G[N]=1,I[N]===0&&(i.enableVertexAttribArray(N),I[N]=1),H[N]!==L&&(i.vertexAttribDivisor(N,L),H[N]=L)}function b(){const N=r.newAttributes,L=r.enabledAttributes;for(let G=0,I=L.length;G<I;G++)L[G]!==N[G]&&(i.disableVertexAttribArray(G),L[G]=0)}function R(N,L,G,I,H,Y,$){$===!0?i.vertexAttribIPointer(N,L,G,H,Y):i.vertexAttribPointer(N,L,G,I,H,Y)}function S(N,L,G,I){y();const H=I.attributes,Y=G.getAttributes(),$=L.defaultAttributeValues;for(const se in Y){const X=Y[se];if(X.location>=0){let ee=H[se];if(ee===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor)),ee!==void 0){const ne=ee.normalized,Re=ee.itemSize,Ee=e.get(ee);if(Ee===void 0)continue;const ot=Ee.buffer,qe=Ee.type,Ke=Ee.bytesPerElement,Z=qe===i.INT||qe===i.UNSIGNED_INT||ee.gpuType===hc;if(ee.isInterleavedBufferAttribute){const te=ee.data,ge=te.stride,Ne=ee.offset;if(te.isInstancedInterleavedBuffer){for(let J=0;J<X.locationSize;J++)p(X.location+J,te.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let J=0;J<X.locationSize;J++)m(X.location+J);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let J=0;J<X.locationSize;J++)R(X.location+J,Re/X.locationSize,qe,ne,ge*Ke,(Ne+Re/X.locationSize*J)*Ke,Z)}else{if(ee.isInstancedBufferAttribute){for(let te=0;te<X.locationSize;te++)p(X.location+te,ee.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let te=0;te<X.locationSize;te++)m(X.location+te);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let te=0;te<X.locationSize;te++)R(X.location+te,Re/X.locationSize,qe,ne,Re*Ke,Re/X.locationSize*te*Ke,Z)}}else if($!==void 0){const ne=$[se];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(X.location,ne);break;case 3:i.vertexAttrib3fv(X.location,ne);break;case 4:i.vertexAttrib4fv(X.location,ne);break;default:i.vertexAttrib1fv(X.location,ne)}}}}b()}function w(){E();for(const N in n){const L=n[N];for(const G in L){const I=L[G];for(const H in I){const Y=I[H];for(const $ in Y)h(Y[$].object),delete Y[$];delete I[H]}}delete n[N]}}function M(N){if(n[N.id]===void 0)return;const L=n[N.id];for(const G in L){const I=L[G];for(const H in I){const Y=I[H];for(const $ in Y)h(Y[$].object),delete Y[$];delete I[H]}}delete n[N.id]}function A(N){for(const L in n){const G=n[L];for(const I in G){const H=G[I];if(H[N.id]===void 0)continue;const Y=H[N.id];for(const $ in Y)h(Y[$].object),delete Y[$];delete H[N.id]}}}function v(N){for(const L in n){const G=n[L],I=N.isInstancedMesh===!0?N.id:0,H=G[I];if(H!==void 0){for(const Y in H){const $=H[Y];for(const se in $)h($[se].object),delete $[se];delete H[Y]}delete G[I],Object.keys(G).length===0&&delete n[L]}}}function E(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function Wg(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Xg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==gn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const v=A===Cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==rn&&A!==mn&&!v&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(De("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:R,maxFragmentUniforms:S,maxSamples:w,samples:M}}function Yg(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Kn,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const _=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||_===null||_.length===0||r&&!m)r?h(null):l();else{const b=r?0:n,R=b*4;let S=p.clippingState||null;c.value=S,S=h(_,u,R,f);for(let w=0;w!==R;++w)S[w]=t[w];p.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,_){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=c.value,_!==!0||m===null){const p=f+y*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,S=f;R!==y;++R,S+=4)a.copy(d[R]).applyMatrix4(b,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const Yi=4,qg=6,$g=20,Zg=256,ms=new Tc,Ol=new Ue;let Ua=null,Fa=0,Oa=0,Ba=!1;const Kg=new P,ai=new P;class Bl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Kg}=r;Ua=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ua,Fa,Oa),this._renderer.xr.enabled=Ba,e.scissorTest=!1,Gi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fi||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ua=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Cn,format:gn,colorSpace:Or,depthBuffer:!1},s=kl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kl(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Jg(r)),this._blurMaterial=Qg(r,e,t),this._ggxMaterial=jg(r,e,t)}return s}_compileMaterial(e){const t=new Fe(new Tt,e);this._renderer.compile(t,ms)}_sceneToCubeUV(e,t,n,s,r){const c=new Xt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Ol),d.toneMapping=Tn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fe(new yt,new tt({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let p=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,p=!0):(m.color.copy(Ol),p=!0);for(let R=0;R<6;R++){const S=R%3;S===0?(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[R],r.y,r.z)):S===1?(c.up.set(0,0,l[R]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[R],r.z)):(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[R]));const w=this._cubeSize;Gi(s,S*w,R>2?w:0,w,w),d.setRenderTarget(s),p&&d.render(y,c),d.render(e,c)}d.toneMapping=f,d.autoClear=u,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===fi||e.mapping===Qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Gi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ms)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:_}=this,y=this._sizeLods[n],m=3*y*(n>_-Yi?n-_+Yi:0),p=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=_-t,Gi(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,ms),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,Gi(e,m,p,3*y,2*y),s.setRenderTarget(e),s.render(o,ms)}_blur(e,t,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],d=3*h*(s>this._lodMax-Yi?s-this._lodMax+Yi:0),u=4*(this._cubeSize-h);Gi(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(c,ms)}}function Jg(i){const e=[],t=[];let n=i;const s=i-Yi+1+qg;for(let r=0;r<s;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,_=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let p=0;p<d;p++){const b=p%3*2/3-1,R=p>2?0:-1,S=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];_.set(S,f*u*p);for(let w=0;w<u;w++){const M=h[w*2]*2-1,A=h[w*2+1]*2-1;p===0?ai.set(1,A,M):p===1?ai.set(-M,1,-A):p===2?ai.set(-M,A,1):p===3?ai.set(-1,A,-M):p===4?ai.set(-M,-1,A):ai.set(M,A,-1),ai.toArray(y,(p*u+w)*f)}}const m=new Tt;m.setAttribute("position",new cn(_,f)),m.setAttribute("outputDirection",new cn(y,f)),t.push(new Fe(m,null)),n>Yi&&n--}return{lodMeshes:t,sizeLods:e}}function kl(i,e,t){const n=new on(i,e,t);return n.texture.mapping=Zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function jg(i,e,t){return new Qt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Qg(i,e,t){return new Qt({name:"SphericalGaussianBlur",defines:{SAMPLES:$g,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Jr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function zl(){return new Qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Hl(){return new Qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Jr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class gu extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new cu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new yt(5,5,5),r=new Qt({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:kn});r.uniforms.tEquirect.value=t;const a=new Fe(s,r),o=t.minFilter;return t.minFilter===li&&(t.minFilter=kt),new ip(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function e0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===oa||f===ca)if(e.has(u)){const _=e.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const y=new gu(_.height);return y.fromEquirectangularTexture(i,u),e.set(u,y),u.addEventListener("dispose",l),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,_=f===oa||f===ca,y=f===fi||f===Qi;if(_||y){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Bl(i)),m=_?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const b=u.image;return _&&b&&b.height>0||y&&b&&c(b)?(n===null&&(n=new Bl(i)),m=_?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===oa?u.mapping=fi:f===ca&&(u.mapping=Qi),u}function c(u){let f=0;const _=6;for(let y=0;y<_;y++)u[y]!==void 0&&f++;return f===_}function l(u){const f=u.target;f.removeEventListener("dispose",l);const _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function t0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&$i("WebGLRenderer: "+n+" extension not supported."),s}}}function n0(i,e,t,n){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)e.update(u[f],i.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,_=d.attributes.position;let y=0;if(_===void 0)return;if(f!==null){const b=f.array;y=f.version;for(let R=0,S=b.length;R<S;R+=3){const w=b[R+0],M=b[R+1],A=b[R+2];u.push(w,M,M,A,A,w)}}else{const b=_.array;y=_.version;for(let R=0,S=b.length/3-1;R<S;R+=3){const w=R+0,M=R+1,A=R+2;u.push(w,M,M,A,A,w)}}const m=new(_.count>=65535?nu:tu)(u,1);m.version=y;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function i0(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function s0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function r0(i,e,t){const n=new WeakMap,s=new vt;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let E=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let R=0;f===!0&&(R=1),_===!0&&(R=2),y===!0&&(R=3);let S=o.attributes.position.count*R,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const M=new Float32Array(S*w*4*d),A=new jh(M,S,w,d);A.type=mn,A.needsUpdate=!0;const v=R*4;for(let C=0;C<d;C++){const N=m[C],L=p[C],G=b[C],I=S*w*4*C;for(let H=0;H<N.count;H++){const Y=H*v;f===!0&&(s.fromBufferAttribute(N,H),M[I+Y+0]=s.x,M[I+Y+1]=s.y,M[I+Y+2]=s.z,M[I+Y+3]=0),_===!0&&(s.fromBufferAttribute(L,H),M[I+Y+4]=s.x,M[I+Y+5]=s.y,M[I+Y+6]=s.z,M[I+Y+7]=0),y===!0&&(s.fromBufferAttribute(G,H),M[I+Y+8]=s.x,M[I+Y+9]=s.y,M[I+Y+10]=s.z,M[I+Y+11]=G.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new Be(S,w)},n.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];const _=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function a0(i,e,t,n,s){let r=new WeakMap;function a(l){const h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const o0={[Fh]:"LINEAR_TONE_MAPPING",[Oh]:"REINHARD_TONE_MAPPING",[Bh]:"CINEON_TONE_MAPPING",[kh]:"ACES_FILMIC_TONE_MAPPING",[Hh]:"AGX_TONE_MAPPING",[Gh]:"NEUTRAL_TONE_MAPPING",[zh]:"CUSTOM_TONE_MAPPING"};function c0(i,e,t,n,s,r){const a=new on(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Tt;l.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ft([0,2,0,0,2,0],2));const h=new Qf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Fe(l,h),u=new Tc(-1,1,1,-1,0,1);let f=null,_=null,y=!1,m,p=null,b=[],R=!1;this.setSize=function(S,w){a.setSize(S,w),o!==null&&o.setSize(S,w),c!==null&&c.setSize(S,w);for(let M=0;M<b.length;M++){const A=b[M];A.setSize&&A.setSize(S,w)}},this.setEffects=function(S){b=S,R=b.length>0&&b[0].isRenderPass===!0;const w=a.width,M=a.height;b.length>0&&o===null&&(o=new on(w,M,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),c=new on(w,M,{type:Cn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<b.length;A++){const v=b[A];v.setSize&&v.setSize(w,M)}},this.begin=function(S,w){if(y||S.toneMapping===Tn&&b.length===0)return!1;if(p=w,w!==null){const M=w.width,A=w.height;(a.width!==M||a.height!==A)&&this.setSize(M,A)}return R===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=Tn,!0},this.hasRenderPass=function(){return R},this.end=function(S,w){S.toneMapping=m,y=!0;let M=a,A=o;for(let v=0;v<b.length;v++){const E=b[v];E.enabled!==!1&&(E.render(S,A,M,w),E.needsSwap!==!1&&(M=A,A=A===o?c:o))}if(f!==S.outputColorSpace||_!==S.toneMapping){f=S.outputColorSpace,_=S.toneMapping,h.defines={},$e.getTransfer(f)===at&&(h.defines.SRGB_TRANSFER="");const v=o0[_];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,S.setRenderTarget(p),S.render(d,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const _u=new Nt,Xo=new Ps(1,1),vu=new jh,xu=new Rf,yu=new cu,Gl=[],Vl=[],Wl=new Float32Array(16),Xl=new Float32Array(9),Yl=new Float32Array(4);function is(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Gl[s];if(r===void 0&&(r=new Float32Array(s),Gl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function jr(i,e){let t=Vl[e];t===void 0&&(t=new Int32Array(e),Vl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function l0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function h0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),Rt(t,e)}}function u0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),Rt(t,e)}}function d0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),Rt(t,e)}}function f0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Yl.set(n),i.uniformMatrix2fv(this.addr,!1,Yl),Rt(t,n)}}function p0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Xl.set(n),i.uniformMatrix3fv(this.addr,!1,Xl),Rt(t,n)}}function m0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Wl.set(n),i.uniformMatrix4fv(this.addr,!1,Wl),Rt(t,n)}}function g0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),Rt(t,e)}}function v0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),Rt(t,e)}}function x0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),Rt(t,e)}}function y0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function S0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),Rt(t,e)}}function M0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),Rt(t,e)}}function E0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),Rt(t,e)}}function b0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xo.compareFunction=t.isReversedDepthBuffer()?vc:_c,r=Xo):r=_u,t.setTexture2D(e||r,s)}function w0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xu,s)}function T0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||yu,s)}function A0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||vu,s)}function R0(i){switch(i){case 5126:return l0;case 35664:return h0;case 35665:return u0;case 35666:return d0;case 35674:return f0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return _0;case 35668:case 35672:return v0;case 35669:case 35673:return x0;case 5125:return y0;case 36294:return S0;case 36295:return M0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return b0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return T0;case 36289:case 36303:case 36311:case 36292:return A0}}function C0(i,e){i.uniform1fv(this.addr,e)}function P0(i,e){const t=is(e,this.size,2);i.uniform2fv(this.addr,t)}function L0(i,e){const t=is(e,this.size,3);i.uniform3fv(this.addr,t)}function I0(i,e){const t=is(e,this.size,4);i.uniform4fv(this.addr,t)}function D0(i,e){const t=is(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function N0(i,e){const t=is(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function U0(i,e){const t=is(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function F0(i,e){i.uniform1iv(this.addr,e)}function O0(i,e){i.uniform2iv(this.addr,e)}function B0(i,e){i.uniform3iv(this.addr,e)}function k0(i,e){i.uniform4iv(this.addr,e)}function z0(i,e){i.uniform1uiv(this.addr,e)}function H0(i,e){i.uniform2uiv(this.addr,e)}function G0(i,e){i.uniform3uiv(this.addr,e)}function V0(i,e){i.uniform4uiv(this.addr,e)}function W0(i,e,t){const n=this.cache,s=e.length,r=jr(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Xo:a=_u;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function X0(i,e,t){const n=this.cache,s=e.length,r=jr(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||xu,r[a])}function Y0(i,e,t){const n=this.cache,s=e.length,r=jr(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||yu,r[a])}function q0(i,e,t){const n=this.cache,s=e.length,r=jr(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||vu,r[a])}function $0(i){switch(i){case 5126:return C0;case 35664:return P0;case 35665:return L0;case 35666:return I0;case 35674:return D0;case 35675:return N0;case 35676:return U0;case 5124:case 35670:return F0;case 35667:case 35671:return O0;case 35668:case 35672:return B0;case 35669:case 35673:return k0;case 5125:return z0;case 36294:return H0;case 36295:return G0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return q0}}class Z0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=R0(t.type)}}class K0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$0(t.type)}}class J0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const ka=/(\w+)(\])?(\[|\.)?/g;function ql(i,e){i.seq.push(e),i.map[e.id]=e}function j0(i,e,t){const n=i.name,s=n.length;for(ka.lastIndex=0;;){const r=ka.exec(n),a=ka.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){ql(t,l===void 0?new Z0(o,i,e):new K0(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new J0(o),ql(t,d)),t=d}}}class wr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);j0(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function $l(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Q0=37297;let e_=0;function t_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Zl=new Oe;function n_(i){$e._getMatrix(Zl,$e.workingColorSpace,i);const e=`mat3( ${Zl.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case Br:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Kl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+t_(i.getShaderSource(e),o)}else return r}function i_(i,e){const t=n_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const s_={[Fh]:"Linear",[Oh]:"Reinhard",[Bh]:"Cineon",[kh]:"ACESFilmic",[Hh]:"AgX",[Gh]:"Neutral",[zh]:"Custom"};function r_(i,e){const t=s_[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const dr=new P;function a_(){$e.getLuminanceCoefficients(dr);const i=dr.x.toFixed(4),e=dr.y.toFixed(4),t=dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ys).join(`
`)}function c_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function l_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ys(i){return i!==""}function Jl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const h_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yo(i){return i.replace(h_,d_)}const u_=new Map;function d_(i,e){let t=Ge[e];if(t===void 0){const n=u_.get(e);if(n!==void 0)t=Ge[n],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Yo(t)}const f_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ql(i){return i.replace(f_,p_)}function p_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function eh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const m_={[xr]:"SHADOWMAP_TYPE_PCF",[xs]:"SHADOWMAP_TYPE_VSM"};function g_(i){return m_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const __={[fi]:"ENVMAP_TYPE_CUBE",[Qi]:"ENVMAP_TYPE_CUBE",[Zr]:"ENVMAP_TYPE_CUBE_UV"};function v_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":__[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const x_={[Qi]:"ENVMAP_MODE_REFRACTION"};function y_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":x_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const S_={[Uh]:"ENVMAP_BLENDING_MULTIPLY",[rf]:"ENVMAP_BLENDING_MIX",[af]:"ENVMAP_BLENDING_ADD"};function M_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":S_[i.combine]||"ENVMAP_BLENDING_NONE"}function E_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function b_(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=g_(t),l=v_(t),h=y_(t),d=M_(t),u=E_(t),f=o_(t),_=c_(r),y=s.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ys).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ys).join(`
`),p.length>0&&(p+=`
`)):(m=[eh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),p=[eh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Tn?r_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,i_("linearToOutputTexel",t.outputColorSpace),a_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ys).join(`
`)),a=Yo(a),a=Jl(a,t),a=jl(a,t),o=Yo(o),o=Jl(o,t),o=jl(o,t),a=Ql(a),o=Ql(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===al?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const R=b+m+a,S=b+p+o,w=$l(s,s.VERTEX_SHADER,R),M=$l(s,s.FRAGMENT_SHADER,S);s.attachShader(y,w),s.attachShader(y,M),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(N){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(y)||"",G=s.getShaderInfoLog(w)||"",I=s.getShaderInfoLog(M)||"",H=L.trim(),Y=G.trim(),$=I.trim();let se=!0,X=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,w,M);else{const ee=Kl(s,w,"vertex"),ne=Kl(s,M,"fragment");je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+H+`
`+ee+`
`+ne)}else H!==""?De("WebGLProgram: Program Info Log:",H):(Y===""||$==="")&&(X=!1);X&&(N.diagnostics={runnable:se,programLog:H,vertexShader:{log:Y,prefix:m},fragmentShader:{log:$,prefix:p}})}s.deleteShader(w),s.deleteShader(M),v=new wr(s,y),E=l_(s,y)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(y,Q0)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=e_++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=M,this}let w_=0;class T_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new A_(e),t.set(e,n)),n}}class A_{constructor(e){this.id=w_++,this.code=e,this.usedTimes=0}}function R_(i){return i===pi||i===Ur||i===Fr}function C_(i,e,t,n,s,r){const a=new Qh,o=new T_,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function y(v,E,C,N,L,G){const I=N.fog,H=L.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,se=e.get(v.envMap||Y,$),X=se&&se.mapping===Zr?se.image.height:null,ee=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&De("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const ne=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Re=ne!==void 0?ne.length:0;let Ee=0;H.morphAttributes.position!==void 0&&(Ee=1),H.morphAttributes.normal!==void 0&&(Ee=2),H.morphAttributes.color!==void 0&&(Ee=3);let ot,qe,Ke,Z;if(ee){const pt=Mn[ee];ot=pt.vertexShader,qe=pt.fragmentShader}else{ot=v.vertexShader,qe=v.fragmentShader;const pt=o.getVertexShaderStage(v),nt=o.getFragmentShaderStage(v);o.update(v,pt,nt),Ke=pt.id,Z=nt.id}const te=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Ne=L.isInstancedMesh===!0,J=L.isBatchedMesh===!0,xe=!!v.map,ke=!!v.matcap,be=!!se,Xe=!!v.aoMap,Qe=!!v.lightMap,Pe=!!v.bumpMap&&v.wireframe===!1,ct=!!v.normalMap,St=!!v.displacementMap,Wt=!!v.emissiveMap,_t=!!v.metalnessMap,Mt=!!v.roughnessMap,F=v.anisotropy>0,Ut=v.clearcoat>0,st=v.dispersion>0,T=v.retroreflectivity>0,g=v.iridescence>0,O=v.sheen>0,V=v.transmission>0,q=F&&!!v.anisotropyMap,re=Ut&&!!v.clearcoatMap,ae=Ut&&!!v.clearcoatNormalMap,K=Ut&&!!v.clearcoatRoughnessMap,Q=g&&!!v.iridescenceMap,oe=g&&!!v.iridescenceThicknessMap,Te=O&&!!v.sheenColorMap,ue=O&&!!v.sheenRoughnessMap,ce=!!v.specularMap,Ae=!!v.specularColorMap,Ie=!!v.specularIntensityMap,ze=V&&!!v.transmissionMap,U=V&&!!v.thicknessMap,le=!!v.gradientMap,j=!!v.alphaMap,he=v.alphaTest>0,me=!!v.alphaHash,ie=!!v.extensions;let Ce=Tn;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ce=i.toneMapping);const Me={shaderID:ee,shaderType:v.type,shaderName:v.name,vertexShader:ot,fragmentShader:qe,defines:v.defines,customVertexShaderID:Ke,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:J,batchingColor:J&&L._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&L.instanceColor!==null,instancingMorph:Ne&&L.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:xe,matcap:ke,envMap:be,envMapMode:be&&se.mapping,envMapCubeUVHeight:X,aoMap:Xe,lightMap:Qe,bumpMap:Pe,normalMap:ct,displacementMap:St,emissiveMap:Wt,normalMapObjectSpace:ct&&v.normalMapType===lf,normalMapTangentSpace:ct&&v.normalMapType===rl,packedNormalMap:ct&&v.normalMapType===rl&&R_(v.normalMap.format),metalnessMap:_t,roughnessMap:Mt,anisotropy:F,anisotropyMap:q,clearcoat:Ut,clearcoatMap:re,clearcoatNormalMap:ae,clearcoatRoughnessMap:K,dispersion:st,retroreflection:T,iridescence:g,iridescenceMap:Q,iridescenceThicknessMap:oe,sheen:O,sheenColorMap:Te,sheenRoughnessMap:ue,specularMap:ce,specularColorMap:Ae,specularIntensityMap:Ie,transmission:V,transmissionMap:ze,thicknessMap:U,gradientMap:le,opaque:v.transparent===!1&&v.blending===ui&&v.alphaToCoverage===!1,alphaMap:j,alphaTest:he,alphaHash:me,combine:v.combine,mapUv:xe&&_(v.map.channel),aoMapUv:Xe&&_(v.aoMap.channel),lightMapUv:Qe&&_(v.lightMap.channel),bumpMapUv:Pe&&_(v.bumpMap.channel),normalMapUv:ct&&_(v.normalMap.channel),displacementMapUv:St&&_(v.displacementMap.channel),emissiveMapUv:Wt&&_(v.emissiveMap.channel),metalnessMapUv:_t&&_(v.metalnessMap.channel),roughnessMapUv:Mt&&_(v.roughnessMap.channel),anisotropyMapUv:q&&_(v.anisotropyMap.channel),clearcoatMapUv:re&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ue&&_(v.sheenRoughnessMap.channel),specularMapUv:ce&&_(v.specularMap.channel),specularColorMapUv:Ae&&_(v.specularColorMap.channel),specularIntensityMapUv:Ie&&_(v.specularIntensityMap.channel),transmissionMapUv:ze&&_(v.transmissionMap.channel),thicknessMapUv:U&&_(v.thicknessMap.channel),alphaMapUv:j&&_(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ct||F),vertexNormals:!!H.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!H.attributes.uv&&(xe||j),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||H.attributes.normal===void 0&&ct===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ge,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Ee,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ce,decodeVideoTexture:xe&&v.map.isVideoTexture===!0&&$e.getTransfer(v.map.colorSpace)===at,decodeVideoTextureEmissive:Wt&&v.emissiveMap.isVideoTexture===!0&&$e.getTransfer(v.emissiveMap.colorSpace)===at,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===jt,flipSided:v.side===$t,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ie&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&v.extensions.multiDraw===!0||J)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function m(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)E.push(C),E.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(p(E,v),b(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function p(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function b(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function R(v){const E=f[v.type];let C;if(E){const N=Mn[E];C=Kf.clone(N.uniforms)}else C=v.uniforms;return C}function S(v,E){let C=h.get(E);return C!==void 0?++C.usedTimes:(C=new b_(i,E,v,s),l.push(C),h.set(E,C)),C}function w(v){if(--v.usedTimes===0){const E=l.indexOf(v);l[E]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function M(v){o.remove(v)}function A(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:R,acquireProgram:S,releaseProgram:w,releaseShaderCache:M,programs:l,dispose:A}}function P_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function L_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function th(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,_,y,m,p){let b=i[e];return b===void 0?(b={id:u.id,object:u,geometry:f,material:_,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},i[e]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=_,b.materialVariant=a(u),b.groupOrder=y,b.renderOrder=u.renderOrder,b.z=m,b.group=p),e++,b}function c(u,f,_,y,m,p,b){b.reversedDepth===!0&&(m=-m);const R=o(u,f,_,y,m,p);_.transmission>0?n.push(R):_.transparent===!0?s.push(R):t.push(R)}function l(u,f,_,y,m,p){const b=o(u,f,_,y,m,p);_.transmission>0?n.unshift(b):_.transparent===!0?s.unshift(b):t.unshift(b)}function h(u,f){t.length>1&&t.sort(u||L_),n.length>1&&n.sort(f||th),s.length>1&&s.sort(f||th)}function d(){for(let u=e,f=i.length;u<f;u++){const _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function I_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new nh,i.set(n,[a])):s>=r.length?(a=new nh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function D_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Ue};break;case"SpotLight":t={position:new P,direction:new P,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function N_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let U_=0;function F_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function O_(i){const e=new D_,t=N_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,r=new dt,a=new dt;function o(l){let h=0,d=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,_=0,y=0,m=0,p=0,b=0,R=0,S=0,w=0,M=0,A=0,v=0,E=0,C=0;l.sort(F_);for(let L=0,G=l.length;L<G;L++){const I=l[L],H=I.color,Y=I.intensity,$=I.distance;let se=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===pi?se=I.shadow.map.texture:se=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=H.r*Y,d+=H.g*Y,u+=H.b*Y;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],Y);C++}else if(I.isSunLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ee=I.shadow,ne=t.get(I);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),n.sunShadow[_]=ne,n.sunShadowMap[_]=se;const Re=ee.getViewportCount();for(let Ee=0;Ee<Re;Ee++)n.sunShadowMatrix[y+Ee]=ee.getMatrix(Ee),n.sunShadowCascade[y+Ee]=ee._cascadeData[Ee];y+=Re,_++}n.sun[f]=X,f++}else if(I.isDirectionalLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ee=I.shadow,ne=t.get(I);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,n.directionalShadow[m]=ne,n.directionalShadowMap[m]=se,n.directionalShadowMatrix[m]=I.shadow.matrix,w++}n.directional[m]=X,m++}else if(I.isSpotLight){const X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(H).multiplyScalar(Y),X.distance=$,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[b]=X;const ee=I.shadow;if(I.map&&(n.spotLightMap[v]=I.map,v++,ee.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[b]=ee.matrix,I.castShadow){const ne=t.get(I);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,n.spotShadow[b]=ne,n.spotShadowMap[b]=se,A++}b++}else if(I.isRectAreaLight){const X=e.get(I);X.color.copy(H).multiplyScalar(Y),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[R]=X,R++}else if(I.isPointLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){const ee=I.shadow,ne=t.get(I);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,ne.shadowCameraNear=ee.camera.near,ne.shadowCameraFar=ee.camera.far,n.pointShadow[p]=ne,n.pointShadowMap[p]=se,n.pointShadowMatrix[p]=I.shadow.matrix,M++}n.point[p]=X,p++}else if(I.isHemisphereLight){const X=e.get(I);X.skyColor.copy(I.color).multiplyScalar(Y),X.groundColor.copy(I.groundColor).multiplyScalar(Y),n.hemi[S]=X,S++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const N=n.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==b||N.rectAreaLength!==R||N.hemiLength!==S||N.numSunShadows!==_||N.numDirectionalShadows!==w||N.numPointShadows!==M||N.numSpotShadows!==A||N.numSpotMaps!==v||N.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=b,n.rectArea.length=R,n.point.length=p,n.hemi.length=S,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,N.sunLength=f,N.directionalLength=m,N.pointLength=p,N.spotLength=b,N.rectAreaLength=R,N.hemiLength=S,N.numSunShadows=_,N.numDirectionalShadows=w,N.numPointShadows=M,N.numSpotShadows=A,N.numSpotMaps=v,N.numLightProbes=C,n.version=U_++)}function c(l,h){let d=0,u=0,f=0,_=0,y=0,m=0;const p=h.matrixWorldInverse;for(let b=0,R=l.length;b<R;b++){const S=l[b];if(S.isSunLight){const w=n.sun[d];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),d++}else if(S.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(S.isSpotLight){const w=n.spot[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),_++}else if(S.isRectAreaLight){const w=n.rectArea[y];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const w=n.hemi[m];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function ih(i){const e=new O_(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function c(u){s.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function B_(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new ih(i),e.set(s,[o])):r>=a.length?(o=new ih(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const k_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,H_=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],G_=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],sh=new dt,gs=new P,za=new P;function V_(i,e,t){let n=new ou;const s=new Be,r=new Be,a=new vt,o=new ep,c=new tp,l={},h=t.maxTextureSize,d={[di]:$t,[$t]:di,[jt]:jt},u=new Qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:k_,fragmentShader:z_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const _=new Tt;_.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Fe(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xr;let p=this.type;this.render=function(M,A,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===kd&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xr);const E=i.getRenderTarget(),C=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),L=i.state;L.setBlending(kn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const G=p!==this.type;G&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(H=>H.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,H=M.length;I<H;I++){const Y=M[I],$=Y.shadow;if($===void 0){De("WebGLShadowMap:",Y,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const se=$.getFrameExtents();s.multiply(se),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,$.mapSize.y=r.y));const X=i.state.buffers.depth.getReversed();if($.camera._reversedDepth=X,$.map===null||G===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===xs){if(Y.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new on(s.x,s.y,{format:pi,type:Cn,minFilter:kt,magFilter:kt,generateMipmaps:!1}),$.map.texture.name=Y.name+".shadowMap",$.map.depthTexture=new Ps(s.x,s.y,mn),$.map.depthTexture.name=Y.name+".shadowMapDepth",$.map.depthTexture.format=Hn,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Dt,$.map.depthTexture.magFilter=Dt}else Y.isPointLight?($.map=new gu(s.x),$.map.depthTexture=new $f(s.x,Rn)):($.map=new on(s.x,s.y),$.map.depthTexture=new Ps(s.x,s.y,Rn)),$.map.depthTexture.name=Y.name+".shadowMap",$.map.depthTexture.format=Hn,this.type===xr?($.map.depthTexture.compareFunction=X?vc:_c,$.map.depthTexture.minFilter=kt,$.map.depthTexture.magFilter=kt):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Dt,$.map.depthTexture.magFilter=Dt);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);const ee=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();Y.isPointLight!==!0&&$.updateMatrices(Y,v);for(let ne=0;ne<ee;ne++){const Re=$.getCamera(ne);if(Y.isPointLight){const Ee=$.camera,ot=$.matrix,qe=Y.distance||Ee.far;qe!==Ee.far&&(Ee.far=qe,Ee.updateProjectionMatrix()),gs.setFromMatrixPosition(Y.matrixWorld),Ee.position.copy(gs),za.copy(Ee.position),za.add(H_[ne]),Ee.up.copy(G_[ne]),Ee.lookAt(za),Ee.updateMatrixWorld(),ot.makeTranslation(-gs.x,-gs.y,-gs.z),sh.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),$._frustum.setFromProjectionMatrix(sh,Ee.coordinateSystem,Ee.reversedDepth)}if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,ne),i.clear();else{ne===0&&(i.setRenderTarget($.map),i.clear());const Ee=$.getViewport(ne);a.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),L.viewport(a)}n=$.getFrustum(ne),S(A,v,Re,Y,this.type)}$.isPointLightShadow!==!0&&this.type===xs&&b($,v),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,C,N)};function b(M,A){const v=e.update(y);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new on(s.x,s.y,{format:pi,type:Cn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(A,null,v,u,y,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(A,null,v,f,y,null)}function R(M,A,v,E){let C=null;const N=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(N!==void 0)C=N;else if(C=v.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const L=C.uuid,G=A.uuid;let I=l[L];I===void 0&&(I={},l[L]=I);let H=I[G];H===void 0&&(H=C.clone(),I[G]=H,A.addEventListener("dispose",w)),C=H}if(C.visible=A.visible,C.wireframe=A.wireframe,E===xs?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:d[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const L=i.properties.get(C);L.light=v}return C}function S(M,A,v,E,C){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&C===xs)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);const G=e.update(M),I=M.material;if(Array.isArray(I)){const H=G.groups;for(let Y=0,$=H.length;Y<$;Y++){const se=H[Y],X=I[se.materialIndex];if(X&&X.visible){const ee=R(M,X,E,C);M.onBeforeShadow(i,M,A,v,G,ee,se),i.renderBufferDirect(v,null,G,ee,M,se),M.onAfterShadow(i,M,A,v,G,ee,se)}}}else if(I.visible){const H=R(M,I,E,C);M.onBeforeShadow(i,M,A,v,G,H,null),i.renderBufferDirect(v,null,G,H,M,null),M.onAfterShadow(i,M,A,v,G,H,null)}}const L=M.children;for(let G=0,I=L.length;G<I;G++)S(L[G],A,v,E,C)}function w(M){M.target.removeEventListener("dispose",w);for(const v in l){const E=l[v],C=M.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function W_(i,e){function t(){let U=!1;const le=new vt;let j=null;const he=new vt(0,0,0,0);return{setMask:function(me){j!==me&&!U&&(i.colorMask(me,me,me,me),j=me)},setLocked:function(me){U=me},setClear:function(me,ie,Ce,Me,pt){pt===!0&&(me*=Me,ie*=Me,Ce*=Me),le.set(me,ie,Ce,Me),he.equals(le)===!1&&(i.clearColor(me,ie,Ce,Me),he.copy(le))},reset:function(){U=!1,j=null,he.set(-1,0,0,0)}}}function n(){let U=!1,le=!1,j=null,he=null,me=null;return{setReversed:function(ie){if(le!==ie){const Ce=e.get("EXT_clip_control");ie?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),le=ie;const Me=me;me=null,this.setClear(Me)}},getReversed:function(){return le},setTest:function(ie){ie?te(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(ie){j!==ie&&!U&&(i.depthMask(ie),j=ie)},setFunc:function(ie){if(le&&(ie=Sf[ie]),he!==ie){switch(ie){case no:i.depthFunc(i.NEVER);break;case io:i.depthFunc(i.ALWAYS);break;case so:i.depthFunc(i.LESS);break;case As:i.depthFunc(i.LEQUAL);break;case ro:i.depthFunc(i.EQUAL);break;case ao:i.depthFunc(i.GEQUAL);break;case oo:i.depthFunc(i.GREATER);break;case co:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=ie}},setLocked:function(ie){U=ie},setClear:function(ie){me!==ie&&(me=ie,le&&(ie=1-ie),i.clearDepth(ie))},reset:function(){U=!1,j=null,he=null,me=null,le=!1}}}function s(){let U=!1,le=null,j=null,he=null,me=null,ie=null,Ce=null,Me=null,pt=null;return{setTest:function(nt){U||(nt?te(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(nt){le!==nt&&!U&&(i.stencilMask(nt),le=nt)},setFunc:function(nt,hn,_n){(j!==nt||he!==hn||me!==_n)&&(i.stencilFunc(nt,hn,_n),j=nt,he=hn,me=_n)},setOp:function(nt,hn,_n){(ie!==nt||Ce!==hn||Me!==_n)&&(i.stencilOp(nt,hn,_n),ie=nt,Ce=hn,Me=_n)},setLocked:function(nt){U=nt},setClear:function(nt){pt!==nt&&(i.clearStencil(nt),pt=nt)},reset:function(){U=!1,le=null,j=null,he=null,me=null,ie=null,Ce=null,Me=null,pt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},d={},u={},f=new WeakMap,_=[],y=null,m=!1,p=null,b=null,R=null,S=null,w=null,M=null,A=null,v=new Ue(0,0,0),E=0,C=!1,N=null,L=null,G=null,I=null,H=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,se=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=se>=1):X.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=se>=2);let ee=null,ne={};const Re=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),ot=new vt().fromArray(Re),qe=new vt().fromArray(Ee);function Ke(U,le,j,he){const me=new Uint8Array(4),ie=i.createTexture();i.bindTexture(U,ie),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<j;Ce++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(le+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return ie}const Z={};Z[i.TEXTURE_2D]=Ke(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(i.DEPTH_TEST),a.setFunc(As),Pe(!1),ct(nl),te(i.CULL_FACE),Xe(kn);function te(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function ge(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Ne(U,le){return u[U]!==le?(i.bindFramebuffer(U,le),u[U]=le,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=le),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=le),!0):!1}function J(U,le){let j=_,he=!1;if(U){j=f.get(le),j===void 0&&(j=[],f.set(le,j));const me=U.textures;if(j.length!==me.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Ce=me.length;ie<Ce;ie++)j[ie]=i.COLOR_ATTACHMENT0+ie;j.length=me.length,he=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,he=!0);he&&i.drawBuffers(j)}function xe(U){return y!==U?(i.useProgram(U),y=U,!0):!1}const ke={[Vi]:i.FUNC_ADD,[Hd]:i.FUNC_SUBTRACT,[Gd]:i.FUNC_REVERSE_SUBTRACT};ke[Vd]=i.MIN,ke[Wd]=i.MAX;const be={[Xd]:i.ZERO,[Yd]:i.ONE,[qd]:i.SRC_COLOR,[Dh]:i.SRC_ALPHA,[Qd]:i.SRC_ALPHA_SATURATE,[Jd]:i.DST_COLOR,[Zd]:i.DST_ALPHA,[$d]:i.ONE_MINUS_SRC_COLOR,[Nh]:i.ONE_MINUS_SRC_ALPHA,[jd]:i.ONE_MINUS_DST_COLOR,[Kd]:i.ONE_MINUS_DST_ALPHA,[ef]:i.CONSTANT_COLOR,[tf]:i.ONE_MINUS_CONSTANT_COLOR,[nf]:i.CONSTANT_ALPHA,[sf]:i.ONE_MINUS_CONSTANT_ALPHA};function Xe(U,le,j,he,me,ie,Ce,Me,pt,nt){if(U===kn){m===!0&&(ge(i.BLEND),m=!1);return}if(m===!1&&(te(i.BLEND),m=!0),U!==zd){if(U!==p||nt!==C){if((b!==Vi||w!==Vi)&&(i.blendEquation(i.FUNC_ADD),b=Vi,w=Vi),nt)switch(U){case ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ws:i.blendFunc(i.ONE,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",U);break}else switch(U){case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case il:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sl:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",U);break}R=null,S=null,M=null,A=null,v.set(0,0,0),E=0,p=U,C=nt}return}me=me||le,ie=ie||j,Ce=Ce||he,(le!==b||me!==w)&&(i.blendEquationSeparate(ke[le],ke[me]),b=le,w=me),(j!==R||he!==S||ie!==M||Ce!==A)&&(i.blendFuncSeparate(be[j],be[he],be[ie],be[Ce]),R=j,S=he,M=ie,A=Ce),(Me.equals(v)===!1||pt!==E)&&(i.blendColor(Me.r,Me.g,Me.b,pt),v.copy(Me),E=pt),p=U,C=!1}function Qe(U,le){U.side===jt?ge(i.CULL_FACE):te(i.CULL_FACE);let j=U.side===$t;le&&(j=!j),Pe(j),U.blending===ui&&U.transparent===!1?Xe(kn):Xe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const he=U.stencilWrite;o.setTest(he),he&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Wt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(U){N!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),N=U)}function ct(U){U!==Od?(te(i.CULL_FACE),U!==L&&(U===nl?i.cullFace(i.BACK):U===Bd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),L=U}function St(U){U!==G&&($&&i.lineWidth(U),G=U)}function Wt(U,le,j){U?(te(i.POLYGON_OFFSET_FILL),(I!==le||H!==j)&&(I=le,H=j,a.getReversed()&&(le=-le),i.polygonOffset(le,j))):ge(i.POLYGON_OFFSET_FILL)}function _t(U){U?te(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function Mt(U){U===void 0&&(U=i.TEXTURE0+Y-1),ee!==U&&(i.activeTexture(U),ee=U)}function F(U,le,j){j===void 0&&(ee===null?j=i.TEXTURE0+Y-1:j=ee);let he=ne[j];he===void 0&&(he={type:void 0,texture:void 0},ne[j]=he),(he.type!==U||he.texture!==le)&&(ee!==j&&(i.activeTexture(j),ee=j),i.bindTexture(U,le||Z[U]),he.type=U,he.texture=le)}function Ut(){const U=ne[ee];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function st(){try{i.compressedTexImage2D(...arguments)}catch(U){je("WebGLState:",U)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(U){je("WebGLState:",U)}}function g(){try{i.texSubImage2D(...arguments)}catch(U){je("WebGLState:",U)}}function O(){try{i.texSubImage3D(...arguments)}catch(U){je("WebGLState:",U)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(U){je("WebGLState:",U)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(U){je("WebGLState:",U)}}function re(){try{i.texStorage2D(...arguments)}catch(U){je("WebGLState:",U)}}function ae(){try{i.texStorage3D(...arguments)}catch(U){je("WebGLState:",U)}}function K(){try{i.texImage2D(...arguments)}catch(U){je("WebGLState:",U)}}function Q(){try{i.texImage3D(...arguments)}catch(U){je("WebGLState:",U)}}function oe(U){return d[U]!==void 0?d[U]:i.getParameter(U)}function Te(U,le){d[U]!==le&&(i.pixelStorei(U,le),d[U]=le)}function ue(U){ot.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ot.copy(U))}function ce(U){qe.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),qe.copy(U))}function Ae(U,le){let j=l.get(le);j===void 0&&(j=new WeakMap,l.set(le,j));let he=j.get(U);he===void 0&&(he=i.getUniformBlockIndex(le,U.name),j.set(U,he))}function Ie(U,le){const he=l.get(le).get(U);c.get(le)!==he&&(i.uniformBlockBinding(le,he,U.__bindingPointIndex),c.set(le,he))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},ee=null,ne={},u={},f=new WeakMap,_=[],y=null,m=!1,p=null,b=null,R=null,S=null,w=null,M=null,A=null,v=new Ue(0,0,0),E=0,C=!1,N=null,L=null,G=null,I=null,H=null,ot.set(0,0,i.canvas.width,i.canvas.height),qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:ge,bindFramebuffer:Ne,drawBuffers:J,useProgram:xe,setBlending:Xe,setMaterial:Qe,setFlipSided:Pe,setCullFace:ct,setLineWidth:St,setPolygonOffset:Wt,setScissorTest:_t,activeTexture:Mt,bindTexture:F,unbindTexture:Ut,compressedTexImage2D:st,compressedTexImage3D:T,texImage2D:K,texImage3D:Q,pixelStorei:Te,getParameter:oe,updateUBOMapping:Ae,uniformBlockBinding:Ie,texStorage2D:re,texStorage3D:ae,texSubImage2D:g,texSubImage3D:O,compressedTexSubImage2D:V,compressedTexSubImage3D:q,scissor:ue,viewport:ce,reset:ze}}function X_(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Be,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,g){return _?new OffscreenCanvas(T,g):zr("canvas")}function m(T,g,O){let V=1;const q=st(T);if((q.width>O||q.height>O)&&(V=O/Math.max(q.width,q.height)),V<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const re=Math.floor(V*q.width),ae=Math.floor(V*q.height);u===void 0&&(u=y(re,ae));const K=g?y(re,ae):u;return K.width=re,K.height=ae,K.getContext("2d").drawImage(T,0,0,re,ae),De("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+re+"x"+ae+")."),K}else return"data"in T&&De("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),T;return T}function p(T){return T.generateMipmaps}function b(T){i.generateMipmap(T)}function R(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(T,g,O,V,q,re=!1){if(T!==null){if(i[T]!==void 0)return i[T];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ae;V&&(ae=e.get("EXT_texture_norm16"),ae||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=g;if(g===i.RED&&(O===i.FLOAT&&(K=i.R32F),O===i.HALF_FLOAT&&(K=i.R16F),O===i.UNSIGNED_BYTE&&(K=i.R8),O===i.UNSIGNED_SHORT&&ae&&(K=ae.R16_EXT),O===i.SHORT&&ae&&(K=ae.R16_SNORM_EXT)),g===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.R8UI),O===i.UNSIGNED_SHORT&&(K=i.R16UI),O===i.UNSIGNED_INT&&(K=i.R32UI),O===i.BYTE&&(K=i.R8I),O===i.SHORT&&(K=i.R16I),O===i.INT&&(K=i.R32I)),g===i.RG&&(O===i.FLOAT&&(K=i.RG32F),O===i.HALF_FLOAT&&(K=i.RG16F),O===i.UNSIGNED_BYTE&&(K=i.RG8),O===i.UNSIGNED_SHORT&&ae&&(K=ae.RG16_EXT),O===i.SHORT&&ae&&(K=ae.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RG8UI),O===i.UNSIGNED_SHORT&&(K=i.RG16UI),O===i.UNSIGNED_INT&&(K=i.RG32UI),O===i.BYTE&&(K=i.RG8I),O===i.SHORT&&(K=i.RG16I),O===i.INT&&(K=i.RG32I)),g===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGB8UI),O===i.UNSIGNED_SHORT&&(K=i.RGB16UI),O===i.UNSIGNED_INT&&(K=i.RGB32UI),O===i.BYTE&&(K=i.RGB8I),O===i.SHORT&&(K=i.RGB16I),O===i.INT&&(K=i.RGB32I)),g===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),O===i.UNSIGNED_INT&&(K=i.RGBA32UI),O===i.BYTE&&(K=i.RGBA8I),O===i.SHORT&&(K=i.RGBA16I),O===i.INT&&(K=i.RGBA32I)),g===i.RGB&&(O===i.UNSIGNED_SHORT&&ae&&(K=ae.RGB16_EXT),O===i.SHORT&&ae&&(K=ae.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),g===i.RGBA){const Q=re?Br:$e.getTransfer(q);O===i.FLOAT&&(K=i.RGBA32F),O===i.HALF_FLOAT&&(K=i.RGBA16F),O===i.UNSIGNED_BYTE&&(K=Q===at?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&ae&&(K=ae.RGBA16_EXT),O===i.SHORT&&ae&&(K=ae.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function w(T,g){let O;return T?g===null||g===Rn||g===Cs?O=i.DEPTH24_STENCIL8:g===mn?O=i.DEPTH32F_STENCIL8:g===Rs&&(O=i.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Rn||g===Cs?O=i.DEPTH_COMPONENT24:g===mn?O=i.DEPTH_COMPONENT32F:g===Rs&&(O=i.DEPTH_COMPONENT16),O}function M(T,g){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Dt&&T.minFilter!==kt?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function A(T){const g=T.target;g.removeEventListener("dispose",A),E(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&d.delete(g)}function v(T){const g=T.target;g.removeEventListener("dispose",v),N(g)}function E(T){const g=n.get(T);if(g.__webglInit===void 0)return;const O=T.source,V=f.get(O);if(V){const q=V[g.__cacheKey];q.usedTimes--,q.usedTimes===0&&C(T),Object.keys(V).length===0&&f.delete(O)}n.remove(T)}function C(T){const g=n.get(T);i.deleteTexture(g.__webglTexture);const O=T.source,V=f.get(O);delete V[g.__cacheKey],a.memory.textures--}function N(T){const g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(g.__webglFramebuffer[V]))for(let q=0;q<g.__webglFramebuffer[V].length;q++)i.deleteFramebuffer(g.__webglFramebuffer[V][q]);else i.deleteFramebuffer(g.__webglFramebuffer[V]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[V])}else{if(Array.isArray(g.__webglFramebuffer))for(let V=0;V<g.__webglFramebuffer.length;V++)i.deleteFramebuffer(g.__webglFramebuffer[V]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let V=0;V<g.__webglColorRenderbuffer.length;V++)g.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[V]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=T.textures;for(let V=0,q=O.length;V<q;V++){const re=n.get(O[V]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),a.memory.textures--),n.remove(O[V])}n.remove(T)}let L=0;function G(){L=0}function I(){return L}function H(T){L=T}function Y(){const T=L;return T>=s.maxTextures&&De("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function $(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function se(T,g){const O=n.get(T);if(T.isVideoTexture&&F(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){const V=T.image;if(V===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(O,T,g);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+g)}function X(T,g){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){ge(O,T,g);return}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+g)}function ee(T,g){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){ge(O,T,g);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+g)}function ne(T,g){const O=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&O.__version!==T.version){Ne(O,T,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+g)}const Re={[lo]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[ho]:i.MIRRORED_REPEAT},Ee={[Dt]:i.NEAREST,[of]:i.NEAREST_MIPMAP_NEAREST,[Os]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[la]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},ot={[uf]:i.NEVER,[gf]:i.ALWAYS,[df]:i.LESS,[_c]:i.LEQUAL,[ff]:i.EQUAL,[vc]:i.GEQUAL,[pf]:i.GREATER,[mf]:i.NOTEQUAL};function qe(T,g){if(g.type===mn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===kt||g.magFilter===la||g.magFilter===Os||g.magFilter===li||g.minFilter===kt||g.minFilter===la||g.minFilter===Os||g.minFilter===li)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Re[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Re[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Re[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Ee[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Ee[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ot[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Dt||g.minFilter!==Os&&g.minFilter!==li||g.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ke(T,g){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",A));const V=g.source;let q=f.get(V);q===void 0&&(q={},f.set(V,q));const re=$(g);if(re!==T.__cacheKey){q[re]===void 0&&(q[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),q[re].usedTimes++;const ae=q[T.__cacheKey];ae!==void 0&&(q[T.__cacheKey].usedTimes--,ae.usedTimes===0&&C(g)),T.__cacheKey=re,T.__webglTexture=q[re].texture}return O}function Z(T,g,O){return Math.floor(Math.floor(T/O)/g)}function te(T,g,O,V){const re=T.updateRanges;if(re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,O,V,g.data);else{re.sort((Te,ue)=>Te.start-ue.start);let ae=0;for(let Te=1;Te<re.length;Te++){const ue=re[ae],ce=re[Te],Ae=ue.start+ue.count,Ie=Z(ce.start,g.width,4),ze=Z(ue.start,g.width,4);ce.start<=Ae+1&&Ie===ze&&Z(ce.start+ce.count-1,g.width,4)===Ie?ue.count=Math.max(ue.count,ce.start+ce.count-ue.start):(++ae,re[ae]=ce)}re.length=ae+1;const K=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Te=0,ue=re.length;Te<ue;Te++){const ce=re[Te],Ae=Math.floor(ce.start/4),Ie=Math.ceil(ce.count/4),ze=Ae%g.width,U=Math.floor(Ae/g.width),le=Ie,j=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,ze,U,le,j,O,V,g.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function ge(T,g,O){let V=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(V=i.TEXTURE_3D);const q=Ke(T,g),re=g.source;t.bindTexture(V,T.__webglTexture,i.TEXTURE0+O);const ae=n.get(re);if(re.version!==ae.__version||q===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const j=$e.getPrimaries($e.workingColorSpace),he=g.colorSpace===jn?null:$e.getPrimaries(g.colorSpace),me=g.colorSpace===jn||j===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let Q=m(g.image,!1,s.maxTextureSize);Q=Ut(g,Q);const oe=r.convert(g.format,g.colorSpace),Te=r.convert(g.type);let ue=S(g.internalFormat,oe,Te,g.normalized,g.colorSpace,g.isVideoTexture);qe(V,g);let ce;const Ae=g.mipmaps,Ie=g.isVideoTexture!==!0,ze=ae.__version===void 0||q===!0,U=re.dataReady,le=M(g,Q);if(g.isDepthTexture)ue=w(g.format===hi,g.type),ze&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,ue,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,ue,Q.width,Q.height,0,oe,Te,null));else if(g.isDataTexture)if(Ae.length>0){Ie&&ze&&t.texStorage2D(i.TEXTURE_2D,le,ue,Ae[0].width,Ae[0].height);for(let j=0,he=Ae.length;j<he;j++)ce=Ae[j],Ie?U&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ce.width,ce.height,oe,Te,ce.data):t.texImage2D(i.TEXTURE_2D,j,ue,ce.width,ce.height,0,oe,Te,ce.data);g.generateMipmaps=!1}else Ie?(ze&&t.texStorage2D(i.TEXTURE_2D,le,ue,Q.width,Q.height),U&&te(g,Q,oe,Te)):t.texImage2D(i.TEXTURE_2D,0,ue,Q.width,Q.height,0,oe,Te,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ie&&ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,ue,Ae[0].width,Ae[0].height,Q.depth);for(let j=0,he=Ae.length;j<he;j++)if(ce=Ae[j],g.format!==gn)if(oe!==null)if(Ie){if(U)if(g.layerUpdates.size>0){const me=Fl(ce.width,ce.height,g.format,g.type);for(const ie of g.layerUpdates){const Ce=ce.data.subarray(ie*me/ce.data.BYTES_PER_ELEMENT,(ie+1)*me/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,ie,ce.width,ce.height,1,oe,Ce)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ce.width,ce.height,Q.depth,oe,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,ue,ce.width,ce.height,Q.depth,0,ce.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ce.width,ce.height,Q.depth,oe,Te,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,ue,ce.width,ce.height,Q.depth,0,oe,Te,ce.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Ie&&ze&&t.texStorage2D(i.TEXTURE_2D,le,ue,Ae[0].width,Ae[0].height);for(let j=0,he=Ae.length;j<he;j++)ce=Ae[j],g.format!==gn?oe!==null?Ie?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,ce.width,ce.height,oe,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,j,ue,ce.width,ce.height,0,ce.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?U&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ce.width,ce.height,oe,Te,ce.data):t.texImage2D(i.TEXTURE_2D,j,ue,ce.width,ce.height,0,oe,Te,ce.data)}else if(g.isDataArrayTexture)if(Ie){if(ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,ue,Q.width,Q.height,Q.depth),U)if(g.layerUpdates.size>0){const j=Fl(Q.width,Q.height,g.format,g.type);for(const he of g.layerUpdates){const me=Q.data.subarray(he*j/Q.data.BYTES_PER_ELEMENT,(he+1)*j/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,Q.width,Q.height,1,oe,Te,me)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,oe,Te,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ue,Q.width,Q.height,Q.depth,0,oe,Te,Q.data);else if(g.isData3DTexture)Ie?(ze&&t.texStorage3D(i.TEXTURE_3D,le,ue,Q.width,Q.height,Q.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,oe,Te,Q.data)):t.texImage3D(i.TEXTURE_3D,0,ue,Q.width,Q.height,Q.depth,0,oe,Te,Q.data);else if(g.isFramebufferTexture){if(ze)if(Ie)t.texStorage2D(i.TEXTURE_2D,le,ue,Q.width,Q.height);else{let j=Q.width,he=Q.height;for(let me=0;me<le;me++)t.texImage2D(i.TEXTURE_2D,me,ue,j,he,0,oe,Te,null),j>>=1,he>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Q.parentNode!==j){j.appendChild(Q),d.add(g),j.onpaint=he=>{const me=he.changedElements;for(const ie of d)me.includes(ie.image)&&(ie.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{const me=i.RGBA,ie=i.RGBA,Ce=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,me,ie,Ce,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Ie&&ze){const j=st(Ae[0]);t.texStorage2D(i.TEXTURE_2D,le,ue,j.width,j.height)}for(let j=0,he=Ae.length;j<he;j++)ce=Ae[j],Ie?U&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,oe,Te,ce):t.texImage2D(i.TEXTURE_2D,j,ue,oe,Te,ce);g.generateMipmaps=!1}else if(Ie){if(ze){const j=st(Q);t.texStorage2D(i.TEXTURE_2D,le,ue,j.width,j.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,Te,Q)}else t.texImage2D(i.TEXTURE_2D,0,ue,oe,Te,Q);p(g)&&b(V),ae.__version=re.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Ne(T,g,O){if(g.image.length!==6)return;const V=Ke(T,g),q=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);const re=n.get(q);if(q.version!==re.__version||V===!0){t.activeTexture(i.TEXTURE0+O);const ae=$e.getPrimaries($e.workingColorSpace),K=g.colorSpace===jn?null:$e.getPrimaries(g.colorSpace),Q=g.colorSpace===jn||ae===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const oe=g.isCompressedTexture||g.image[0].isCompressedTexture,Te=g.image[0]&&g.image[0].isDataTexture,ue=[];for(let ie=0;ie<6;ie++)!oe&&!Te?ue[ie]=m(g.image[ie],!0,s.maxCubemapSize):ue[ie]=Te?g.image[ie].image:g.image[ie],ue[ie]=Ut(g,ue[ie]);const ce=ue[0],Ae=r.convert(g.format,g.colorSpace),Ie=r.convert(g.type),ze=S(g.internalFormat,Ae,Ie,g.normalized,g.colorSpace),U=g.isVideoTexture!==!0,le=re.__version===void 0||V===!0,j=q.dataReady;let he=M(g,ce);qe(i.TEXTURE_CUBE_MAP,g);let me;if(oe){U&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,ze,ce.width,ce.height);for(let ie=0;ie<6;ie++){me=ue[ie].mipmaps;for(let Ce=0;Ce<me.length;Ce++){const Me=me[Ce];g.format!==gn?Ae!==null?U?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,Me.width,Me.height,Ae,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,ze,Me.width,Me.height,0,Me.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,Me.width,Me.height,Ae,Ie,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,ze,Me.width,Me.height,0,Ae,Ie,Me.data)}}}else{if(me=g.mipmaps,U&&le){me.length>0&&he++;const ie=st(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,ze,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Te){U?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ue[ie].width,ue[ie].height,Ae,Ie,ue[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ze,ue[ie].width,ue[ie].height,0,Ae,Ie,ue[ie].data);for(let Ce=0;Ce<me.length;Ce++){const pt=me[Ce].image[ie].image;U?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,pt.width,pt.height,Ae,Ie,pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,ze,pt.width,pt.height,0,Ae,Ie,pt.data)}}else{U?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ae,Ie,ue[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ze,Ae,Ie,ue[ie]);for(let Ce=0;Ce<me.length;Ce++){const Me=me[Ce];U?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,Ae,Ie,Me.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,ze,Ae,Ie,Me.image[ie])}}}p(g)&&b(i.TEXTURE_CUBE_MAP),re.__version=q.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function J(T,g,O,V,q,re){const ae=r.convert(O.format,O.colorSpace),K=r.convert(O.type),Q=S(O.internalFormat,ae,K,O.normalized,O.colorSpace),oe=n.get(g),Te=n.get(O);if(Te.__renderTarget=g,!oe.__hasExternalTextures){const ue=Math.max(1,g.width>>re),ce=Math.max(1,g.height>>re);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,re,Q,ue,ce,g.depth,0,ae,K,null):t.texImage2D(q,re,Q,ue,ce,0,ae,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Mt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,q,Te.__webglTexture,0,_t(g)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,q,Te.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(T,g,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){const V=g.depthTexture,q=V&&V.isDepthTexture?V.type:null,re=w(g.stencilBuffer,q),ae=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Mt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t(g),re,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t(g),re,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,re,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,T)}else{const V=g.textures;for(let q=0;q<V.length;q++){const re=V[q],ae=r.convert(re.format,re.colorSpace),K=r.convert(re.type),Q=S(re.internalFormat,ae,K,re.normalized,re.colorSpace);Mt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t(g),Q,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t(g),Q,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Q,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(T,g,O){const V=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=n.get(g.depthTexture);if(q.__renderTarget=g,(!q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),V){if(q.__webglInit===void 0&&(q.__webglInit=!0,g.depthTexture.addEventListener("dispose",A)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),qe(i.TEXTURE_CUBE_MAP,g.depthTexture);const oe=r.convert(g.depthTexture.format),Te=r.convert(g.depthTexture.type);let ue;g.depthTexture.format===Hn?ue=i.DEPTH_COMPONENT24:g.depthTexture.format===hi&&(ue=i.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ue,g.width,g.height,0,oe,Te,null)}}else se(g.depthTexture,0);const re=q.__webglTexture,ae=_t(g),K=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,Q=g.depthTexture.format===hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Hn)Mt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,re,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,re,0);else if(g.depthTexture.format===hi)Mt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,re,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function be(T){const g=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const V=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),V){const q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,V.removeEventListener("dispose",q)};V.addEventListener("dispose",q),g.__depthDisposeCallback=q}g.__boundDepthTexture=V}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(O)for(let V=0;V<6;V++)ke(g.__webglFramebuffer[V],T,V);else{const V=T.texture.mipmaps;V&&V.length>0?ke(g.__webglFramebuffer[0],T,0):ke(g.__webglFramebuffer,T,0)}else if(O){g.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[V]),g.__webglDepthbuffer[V]===void 0)g.__webglDepthbuffer[V]=i.createRenderbuffer(),xe(g.__webglDepthbuffer[V],T,!1);else{const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=g.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,re)}}else{const V=T.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),xe(g.__webglDepthbuffer,T,!1);else{const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,re)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(T,g,O){const V=n.get(T);g!==void 0&&J(V.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&be(T)}function Qe(T){const g=T.texture,O=n.get(T),V=n.get(g);T.addEventListener("dispose",v);const q=T.textures,re=T.isWebGLCubeRenderTarget===!0,ae=q.length>1;if(ae||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=g.version,a.memory.textures++),re){O.__webglFramebuffer=[];for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[K]=[];for(let Q=0;Q<g.mipmaps.length;Q++)O.__webglFramebuffer[K][Q]=i.createFramebuffer()}else O.__webglFramebuffer[K]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let K=0;K<g.mipmaps.length;K++)O.__webglFramebuffer[K]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ae)for(let K=0,Q=q.length;K<Q;K++){const oe=n.get(q[K]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Mt(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let K=0;K<q.length;K++){const Q=q[K];O.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[K]);const oe=r.convert(Q.format,Q.colorSpace),Te=r.convert(Q.type),ue=S(Q.internalFormat,oe,Te,Q.normalized,Q.colorSpace,T.isXRRenderTarget===!0),ce=_t(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,ue,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,O.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),qe(i.TEXTURE_CUBE_MAP,g);for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)J(O.__webglFramebuffer[K][Q],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else J(O.__webglFramebuffer[K],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(g)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let K=0,Q=q.length;K<Q;K++){const oe=q[K],Te=n.get(oe);let ue=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ue=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,Te.__webglTexture),qe(ue,oe),J(O.__webglFramebuffer,T,oe,i.COLOR_ATTACHMENT0+K,ue,0),p(oe)&&b(ue)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(K=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,V.__webglTexture),qe(K,g),g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)J(O.__webglFramebuffer[Q],T,g,i.COLOR_ATTACHMENT0,K,Q);else J(O.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,K,0);p(g)&&b(K),t.unbindTexture()}T.depthBuffer&&be(T)}function Pe(T){const g=T.textures;for(let O=0,V=g.length;O<V;O++){const q=g[O];if(p(q)){const re=R(T),ae=n.get(q).__webglTexture;t.bindTexture(re,ae),b(re),t.unbindTexture()}}}const ct=[],St=[];function Wt(T){if(T.samples>0){if(Mt(T)===!1){const g=T.textures,O=T.width,V=T.height;let q=i.COLOR_BUFFER_BIT;const re=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(T),K=g.length>1;if(K)for(let oe=0;oe<g.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const Q=T.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let oe=0;oe<g.length;oe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Te=n.get(g[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,O,V,0,0,O,V,q,i.NEAREST),c===!0&&(ct.length=0,St.length=0,ct.push(i.COLOR_ATTACHMENT0+oe),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(ct.push(re),St.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,St)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let oe=0;oe<g.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Te=n.get(g[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){const g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function _t(T){return Math.min(s.maxSamples,T.samples)}function Mt(T){const g=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function F(T){const g=a.render.frame;h.get(T)!==g&&(h.set(T,g),T.update())}function Ut(T,g){const O=T.colorSpace,V=T.format,q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Or&&O!==jn&&($e.getTransfer(O)===at?(V!==gn||q!==rn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",O)),g}function st(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=G,this.getTextureUnits=I,this.setTextureUnits=H,this.setTexture2D=se,this.setTexture2DArray=X,this.setTexture3D=ee,this.setTextureCube=ne,this.rebindTextures=Xe,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Y_(i,e){function t(n,s=jn){let r;const a=$e.getTransfer(s);if(n===rn)return i.UNSIGNED_BYTE;if(n===uc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wh)return i.BYTE;if(n===Xh)return i.SHORT;if(n===Rs)return i.UNSIGNED_SHORT;if(n===hc)return i.INT;if(n===Rn)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===Cn)return i.HALF_FLOAT;if(n===$h)return i.ALPHA;if(n===Zh)return i.RGB;if(n===gn)return i.RGBA;if(n===Hn)return i.DEPTH_COMPONENT;if(n===hi)return i.DEPTH_STENCIL;if(n===fc)return i.RED;if(n===pc)return i.RED_INTEGER;if(n===pi)return i.RG;if(n===mc)return i.RG_INTEGER;if(n===gc)return i.RGBA_INTEGER;if(n===yr||n===Sr||n===Mr||n===Er)if(a===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uo||n===fo||n===po||n===mo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===uo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===po)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===go||n===_o||n===vo||n===xo||n===yo||n===Ur||n===So)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===go||n===_o)return a===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===xo)return r.COMPRESSED_R11_EAC;if(n===yo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ur)return r.COMPRESSED_RG11_EAC;if(n===So)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Mo||n===Eo||n===bo||n===wo||n===To||n===Ao||n===Ro||n===Co||n===Po||n===Lo||n===Io||n===Do||n===No||n===Uo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===To)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ao)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ro)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Co)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Po)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Io)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Do)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===No)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fo||n===Oo||n===Bo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Fo)return a===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ko||n===zo||n===Fr||n===Ho)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ko)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ho)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const q_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Z_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new hu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Qt({vertexShader:q_,fragmentShader:$_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new _i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K_ extends vi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,_=null;const y=typeof XRWebGLBinding<"u",m=new Z_,p={},b=t.getContextAttributes();let R=null,S=null;const w=[],M=[],A=new Be;let v=null,E=null;const C=new Xt;C.viewport=new vt;const N=new Xt;N.viewport=new vt;const L=[C,N],G=new sp;let I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let te=w[Z];return te===void 0&&(te=new va,w[Z]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Z){let te=w[Z];return te===void 0&&(te=new va,w[Z]=te),te.getGripSpace()},this.getHand=function(Z){let te=w[Z];return te===void 0&&(te=new va,w[Z]=te),te.getHandSpace()};function Y(Z){const te=M.indexOf(Z.inputSource);if(te===-1)return;const ge=w[te];ge!==void 0&&(ge.update(Z.inputSource,Z.frame,l||a),ge.dispatchEvent({type:Z.type,data:Z.inputSource}))}function $(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",se);for(let Z=0;Z<w.length;Z++){const te=M[Z];te!==null&&(M[Z]=null,w[Z].disconnect(te))}I=null,H=null,m.reset();for(const Z in p)delete p[Z];if(e.setRenderTarget(R),f=null,u=null,d=null,s=null,S=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),E!==null){const Z=E.camera;Z.fov=E.fov,Z.zoom=E.zoom,Z.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",$),s.addEventListener("inputsourceschange",se),b.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Ne=null,J=null;b.depth&&(J=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=b.stencil?hi:Hn,Ne=b.stencil?Cs:Rn);const xe={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(xe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new on(u.textureWidth,u.textureHeight,{format:gn,type:rn,depthTexture:new Ps(u.textureWidth,u.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ge={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new on(f.framebufferWidth,f.framebufferHeight,{format:gn,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ke.setContext(s),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function se(Z){for(let te=0;te<Z.removed.length;te++){const ge=Z.removed[te],Ne=M.indexOf(ge);Ne>=0&&(M[Ne]=null,w[Ne].disconnect(ge))}for(let te=0;te<Z.added.length;te++){const ge=Z.added[te];let Ne=M.indexOf(ge);if(Ne===-1){for(let xe=0;xe<w.length;xe++)if(xe>=M.length){M.push(ge),Ne=xe;break}else if(M[xe]===null){M[xe]=ge,Ne=xe;break}if(Ne===-1)break}const J=w[Ne];J&&J.connect(ge)}}const X=new P,ee=new P;function ne(Z,te,ge){X.setFromMatrixPosition(te.matrixWorld),ee.setFromMatrixPosition(ge.matrixWorld);const Ne=X.distanceTo(ee),J=te.projectionMatrix.elements,xe=ge.projectionMatrix.elements,ke=J[14]/(J[10]-1),be=J[14]/(J[10]+1),Xe=(J[9]+1)/J[5],Qe=(J[9]-1)/J[5],Pe=(J[8]-1)/J[0],ct=(xe[8]+1)/xe[0],St=ke*Pe,Wt=ke*ct,_t=Ne/(-Pe+ct),Mt=_t*-Pe;if(te.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Mt),Z.translateZ(_t),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),J[10]===-1)Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const F=ke+_t,Ut=be+_t,st=St-Mt,T=Wt+(Ne-Mt),g=Xe*be/Ut*F,O=Qe*be/Ut*F;Z.projectionMatrix.makePerspective(st,T,g,O,F,Ut),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Re(Z,te){te===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(te.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let te=Z.near,ge=Z.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),G.near=N.near=C.near=te,G.far=N.far=C.far=ge,(I!==G.near||H!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),I=G.near,H=G.far),G.layers.mask=Z.layers.mask|6,C.layers.mask=G.layers.mask&-5,N.layers.mask=G.layers.mask&-3;const Ne=Z.parent,J=G.cameras;Re(G,Ne);for(let xe=0;xe<J.length;xe++)Re(J[xe],Ne);J.length===2?ne(G,C,N):G.projectionMatrix.copy(C.projectionMatrix),E===null&&Z.isPerspectiveCamera&&(E={camera:Z,fov:Z.fov,zoom:Z.zoom}),Ee(Z,G,Ne)};function Ee(Z,te,ge){ge===null?Z.matrix.copy(te.matrixWorld):(Z.matrix.copy(ge.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(te.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Go*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(Z){return p[Z]};let ot=null;function qe(Z,te){if(h=te.getViewerPose(l||a),_=te,h!==null){const ge=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Ne=!1;ge.length!==G.cameras.length&&(G.cameras.length=0,Ne=!0);for(let be=0;be<ge.length;be++){const Xe=ge[be];let Qe=null;if(f!==null)Qe=f.getViewport(Xe);else{const ct=d.getViewSubImage(u,Xe);Qe=ct.viewport,be===0&&(e.setRenderTargetTextures(S,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(S))}let Pe=L[be];Pe===void 0&&(Pe=new Xt,Pe.layers.enable(be),Pe.viewport=new vt,L[be]=Pe),Pe.matrix.fromArray(Xe.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Xe.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),be===0&&(G.matrix.copy(Pe.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Ne===!0&&G.cameras.push(Pe)}const J=s.enabledFeatures;if(J&&J.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();const be=d.getDepthInformation(ge[0]);be&&be.isValid&&be.texture&&m.init(be,s.renderState)}if(J&&J.includes("camera-access")&&y){e.state.unbindTexture(),d=n.getBinding();for(let be=0;be<ge.length;be++){const Xe=ge[be].camera;if(Xe){let Qe=p[Xe];Qe||(Qe=new hu,p[Xe]=Qe);const Pe=d.getCameraImage(Xe);Qe.sourceTexture=Pe}}}}for(let ge=0;ge<w.length;ge++){const Ne=M[ge],J=w[ge];Ne!==null&&J!==void 0&&J.update(Ne,te,l||a)}ot&&ot(Z,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),_=null}const Ke=new pu;Ke.setAnimationLoop(qe),this.setAnimationLoop=function(Z){ot=Z},this.dispose=function(){}}}const J_=new dt,Su=new Oe;Su.set(-1,0,0,0,1,0,0,0,1);function j_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,uu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,R,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,b,R):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$t&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$t&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),R=b.envMap,S=b.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(J_.makeRotationFromEuler(S)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Su),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=R*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Q_(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,w){const M=w.program;n.uniformBlockBinding(S,M)}function l(S,w){let M=s[S.id];M===void 0&&(m(S),M=h(S),s[S.id]=M,S.addEventListener("dispose",b));const A=w.program;n.updateUBOMapping(S,A);const v=e.render.frame;r[S.id]!==v&&(u(S),r[S.id]=v)}function h(S){const w=d();S.__bindingPointIndex=w;const M=i.createBuffer(),A=S.__size,v=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,M),M}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const w=s[S.id],M=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let v=0,E=M.length;v<E;v++){const C=M[v];if(Array.isArray(C))for(let N=0,L=C.length;N<L;N++)f(C[N],v,N,A);else f(C,v,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,w,M,A){if(y(S,w,M,A)===!0){const v=S.__offset,E=S.value;if(Array.isArray(E)){let C=0;for(let N=0;N<E.length;N++){const L=E[N],G=p(L);_(L,S.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,S.__data)}}function _(S,w,M){typeof S=="number"||typeof S=="boolean"?w[0]=S:S.isMatrix3?(w[0]=S.elements[0],w[1]=S.elements[1],w[2]=S.elements[2],w[3]=0,w[4]=S.elements[3],w[5]=S.elements[4],w[6]=S.elements[5],w[7]=0,w[8]=S.elements[6],w[9]=S.elements[7],w[10]=S.elements[8],w[11]=0):ArrayBuffer.isView(S)?w.set(new S.constructor(S.buffer,S.byteOffset,w.length)):S.toArray(w,M)}function y(S,w,M,A){const v=S.value,E=w+"_"+M;if(A[E]===void 0)return typeof v=="number"||typeof v=="boolean"?A[E]=v:ArrayBuffer.isView(v)?A[E]=v.slice():A[E]=v.clone(),!0;{const C=A[E];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return A[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function m(S){const w=S.uniforms;let M=0;const A=16;for(let E=0,C=w.length;E<C;E++){const N=Array.isArray(w[E])?w[E]:[w[E]];for(let L=0,G=N.length;L<G;L++){const I=N[L],H=Array.isArray(I.value)?I.value:[I.value];for(let Y=0,$=H.length;Y<$;Y++){const se=H[Y],X=p(se),ee=M%A,ne=ee%X.boundary,Re=ee+ne;M+=ne,Re!==0&&A-Re<X.storage&&(M+=A-Re),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=X.storage}}}const v=M%A;return v>0&&(M+=A-v),S.__size=M,S.__cache={},this}function p(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):De("WebGLRenderer: Unsupported uniform value type.",S),w}function b(S){const w=S.target;w.removeEventListener("dispose",b);const M=a.indexOf(w.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function R(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:R}}const ev=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yn=null;function tv(){return yn===null&&(yn=new au(ev,16,16,pi,Cn),yn.name="DFG_LUT",yn.minFilter=kt,yn.magFilter=kt,yn.wrapS=On,yn.wrapT=On,yn.generateMipmaps=!1,yn.needsUpdate=!0),yn}class Mu{constructor(e={}){const{canvas:t=xf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=rn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const y=f,m=new Set([gc,mc,pc]),p=new Set([rn,Rn,Rs,Cs,uc,dc]),b=new Uint32Array(4),R=new Int32Array(4),S=new P;let w=null,M=null;const A=[],v=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let N=!1,L=null,G=null,I=null,H=null;this._outputColorSpace=nn;let Y=0,$=0,se=null,X=-1,ee=null;const ne=new vt,Re=new vt;let Ee=null;const ot=new Ue(0);let qe=0,Ke=t.width,Z=t.height,te=1,ge=null,Ne=null;const J=new vt(0,0,Ke,Z),xe=new vt(0,0,Ke,Z);let ke=!1;const be=new ou;let Xe=!1,Qe=!1;const Pe=new dt,ct=new P,St=new vt,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function Mt(){return se===null?te:1}let F=n;function Ut(x,D){return t.getContext(x,D)}let st,T,g,O,V,q,re,ae,K,Q,oe,Te,ue,ce,Ae,Ie,ze,U,le,j,he,me,ie;try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lc}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",hn,!1),F===null){const D="webgl2";if(F=Ut(D,x),F===null)throw Ut(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ce()}catch(x){throw t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",hn,!1),je("WebGLRenderer: "+x.message),x}function Ce(){st=new t0(F),st.init(),he=new Y_(F,st),T=new Xg(F,st,e,he),g=new W_(F,st),T.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),G=F.createFramebuffer(),I=F.createFramebuffer(),H=F.createFramebuffer(),O=new s0(F),V=new P_,q=new X_(F,st,g,V,T,he,O),re=new e0(C),ae=new ap(F),me=new Vg(F,ae),K=new n0(F,ae,O,me),Q=new a0(F,K,ae,me,O),U=new r0(F,T,q),Ae=new Yg(V),oe=new C_(C,re,st,T,me,Ae),Te=new j_(C,V),ue=new I_,ce=new B_(st),ze=new Gg(C,re,g,Q,_,c),Ie=new V_(C,Q,T),ie=new Q_(F,O,T,g),le=new Wg(F,st,O),j=new i0(F,st,O),O.programs=oe.programs,C.capabilities=T,C.extensions=st,C.properties=V,C.renderLists=ue,C.shadowMap=Ie,C.state=g,C.info=O}y!==rn&&(E=new c0(y,t.width,t.height,o,s,r));const Me=new K_(C,F);this.xr=Me,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const x=st.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=st.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(x){x!==void 0&&(te=x,this.setSize(Ke,Z,!1))},this.getSize=function(x){return x.set(Ke,Z)},this.setSize=function(x,D,W=!0){if(Me.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}Ke=x,Z=D,t.width=Math.floor(x*te),t.height=Math.floor(D*te),W===!0&&(t.style.width=x+"px",t.style.height=D+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(Ke*te,Z*te).floor()},this.setDrawingBufferSize=function(x,D,W){Ke=x,Z=D,te=W,t.width=Math.floor(x*W),t.height=Math.floor(D*W),this.setViewport(0,0,x,D)},this.setEffects=function(x){if(y===rn){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let D=0;D<x.length;D++)if(x[D].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ne)},this.getViewport=function(x){return x.copy(J)},this.setViewport=function(x,D,W,B){x.isVector4?J.set(x.x,x.y,x.z,x.w):J.set(x,D,W,B),g.viewport(ne.copy(J).multiplyScalar(te).round())},this.getScissor=function(x){return x.copy(xe)},this.setScissor=function(x,D,W,B){x.isVector4?xe.set(x.x,x.y,x.z,x.w):xe.set(x,D,W,B),g.scissor(Re.copy(xe).multiplyScalar(te).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(x){g.setScissorTest(ke=x)},this.setOpaqueSort=function(x){ge=x},this.setTransparentSort=function(x){Ne=x},this.getClearColor=function(x){return x.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(x=!0,D=!0,W=!0){let B=0;if(x){let k=!1;if(se!==null){const pe=se.texture.format;k=m.has(pe)}if(k){const pe=se.texture.type,ve=p.has(pe),fe=ze.getClearColor(),ye=ze.getClearAlpha(),we=fe.r,He=fe.g,Ye=fe.b;ve?(b[0]=we,b[1]=He,b[2]=Ye,b[3]=ye,F.clearBufferuiv(F.COLOR,0,b)):(R[0]=we,R[1]=He,R[2]=Ye,R[3]=ye,F.clearBufferiv(F.COLOR,0,R))}else B|=F.COLOR_BUFFER_BIT}D&&(B|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),L=x},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",hn,!1),ze.dispose(),ue.dispose(),ce.dispose(),V.dispose(),re.dispose(),Q.dispose(),me.dispose(),ie.dispose(),oe.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Gc),Me.removeEventListener("sessionend",Vc),ti.stop()};function pt(x){x.preventDefault(),Hr("WebGLRenderer: Context Lost."),N=!0}function nt(){Hr("WebGLRenderer: Context Restored."),N=!1;const x=O.autoReset,D=Ie.enabled,W=Ie.autoUpdate,B=Ie.needsUpdate,k=Ie.type;Ce(),O.autoReset=x,Ie.enabled=D,Ie.autoUpdate=W,Ie.needsUpdate=B,Ie.type=k}function hn(x){je("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function _n(x){const D=x.target;D.removeEventListener("dispose",_n),hd(D)}function hd(x){ud(x),V.remove(x)}function ud(x){const D=V.get(x).programs;D!==void 0&&(D.forEach(function(W){oe.releaseProgram(W)}),x.isShaderMaterial&&oe.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,W,B,k,pe){D===null&&(D=Wt);const ve=k.isMesh&&k.matrixWorld.determinantAffine()<0,fe=pd(x,D,W,B,k);g.setMaterial(B,ve);let ye=W.index,we=1;if(B.wireframe===!0){if(ye=K.getWireframeAttribute(W),ye===void 0)return;we=2}const He=W.drawRange,Ye=W.attributes.position;let Se=He.start*we,it=(He.start+He.count)*we;pe!==null&&(Se=Math.max(Se,pe.start*we),it=Math.min(it,(pe.start+pe.count)*we)),ye!==null?(Se=Math.max(Se,0),it=Math.min(it,ye.count)):Ye!=null&&(Se=Math.max(Se,0),it=Math.min(it,Ye.count));const Et=it-Se;if(Et<0||Et===1/0)return;me.setup(k,B,fe,W,ye);let gt,ut=le;if(ye!==null&&(gt=ae.get(ye),ut=j,ut.setIndex(gt)),k.isMesh)B.wireframe===!0?(g.setLineWidth(B.wireframeLinewidth*Mt()),ut.setMode(F.LINES)):ut.setMode(F.TRIANGLES);else if(k.isLine){let Ft=B.linewidth;Ft===void 0&&(Ft=1),g.setLineWidth(Ft*Mt()),k.isLineSegments?ut.setMode(F.LINES):k.isLineLoop?ut.setMode(F.LINE_LOOP):ut.setMode(F.LINE_STRIP)}else k.isPoints?ut.setMode(F.POINTS):k.isSprite&&ut.setMode(F.TRIANGLES);if(k.isBatchedMesh)if(st.get("WEBGL_multi_draw"))ut.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ft=k._multiDrawStarts,_e=k._multiDrawCounts,zt=k._multiDrawCount,Je=ye?ae.get(ye).bytesPerElement:1,en=V.get(B).currentProgram.getUniforms();for(let vn=0;vn<zt;vn++)en.setValue(F,"_gl_DrawID",vn),ut.render(Ft[vn]/Je,_e[vn])}else if(k.isInstancedMesh)ut.renderInstances(Se,Et,k.count);else if(W.isInstancedBufferGeometry){const Ft=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,_e=Math.min(W.instanceCount,Ft);ut.renderInstances(Se,Et,_e)}else ut.render(Se,Et)};function Hc(x,D,W,B){L!==null&&x.isNodeMaterial&&L.setObject(B,x),Xe===!0&&Ae.setState(x,W,!1),x.transparent===!0&&x.side===jt&&x.forceSinglePass===!1?(x.side=$t,x.needsUpdate=!0,Us(x,D,B),x.side=di,x.needsUpdate=!0,Us(x,D,B),x.side=jt):Us(x,D,B)}this.compile=function(x,D,W=null){W===null&&(W=x),L!==null&&L.renderStart(x,D,W),M=ce.get(W),M.init(D),v.push(M),W.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(M.pushLight(k),k.castShadow&&M.pushShadow(k))}),x!==W&&x.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(M.pushLight(k),k.castShadow&&M.pushShadow(k))}),M.setupLights(),L!==null&&L.updateLights(M.state.lightsArray),Qe=this.localClippingEnabled,Xe=Ae.init(this.clippingPlanes,Qe),Xe===!0&&Ae.setGlobalState(this.clippingPlanes,D),L!==null&&Ie.render(M.state.shadowsArray,W,D);const B=new Set;return x.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const pe=k.material;if(pe)if(Array.isArray(pe))for(let ve=0;ve<pe.length;ve++){const fe=pe[ve];Hc(fe,W,D,k),B.add(fe)}else Hc(pe,W,D,k),B.add(pe)}),M=v.pop(),L!==null&&L.renderEnd(),B},this.compileAsync=function(x,D,W=null){const B=this.compile(x,D,W);return new Promise(k=>{function pe(){if(B.forEach(function(ve){const ye=V.get(ve).currentProgram;(ye===void 0||ye.isReady())&&B.delete(ve)}),B.size===0){k(x);return}setTimeout(pe,10)}st.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let ia=null;function dd(x){ia&&ia(x)}function Gc(){ti.stop()}function Vc(){ti.start()}const ti=new pu;ti.setAnimationLoop(dd),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(x){ia=x,Me.setAnimationLoop(x),x===null?ti.stop():ti.start()},Me.addEventListener("sessionstart",Gc),Me.addEventListener("sessionend",Vc),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;L!==null&&L.renderStart(x,D);const W=Me.enabled===!0&&Me.isPresenting===!0,B=E!==null&&(se===null||W)&&E.begin(C,se);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(D),D=Me.getCamera()),x.isScene===!0&&x.onBeforeRender(C,x,D,se),M=ce.get(x,v.length),M.init(D),M.state.textureUnits=q.getTextureUnits(),v.push(M),Pe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),be.setFromProjectionMatrix(Pe,wn,D.reversedDepth),Qe=this.localClippingEnabled,Xe=Ae.init(this.clippingPlanes,Qe),w=ue.get(x,A.length),w.init(),A.push(w),Me.enabled===!0&&Me.isPresenting===!0){const ve=C.xr.getDepthSensingMesh();ve!==null&&sa(ve,D,-1/0,C.sortObjects)}sa(x,D,0,C.sortObjects),w.finish(),L!==null&&L.updateLights(M.state.lightsArray),C.sortObjects===!0&&w.sort(ge,Ne),_t=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,_t&&ze.addToRenderList(w,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xe===!0&&Ae.beginShadows();const k=M.state.shadowsArray;if(Ie.render(k,x,D),Xe===!0&&Ae.endShadows(),(B&&E.hasRenderPass())===!1){const ve=w.opaque,fe=w.transmissive;if(M.setupLights(),D.isArrayCamera){const ye=D.cameras;if(fe.length>0)for(let we=0,He=ye.length;we<He;we++){const Ye=ye[we];Xc(ve,fe,x,Ye)}_t&&ze.render(x);for(let we=0,He=ye.length;we<He;we++){const Ye=ye[we];Wc(w,x,Ye,Ye.viewport)}}else fe.length>0&&Xc(ve,fe,x,D),_t&&ze.render(x),Wc(w,x,D)}se!==null&&$===0&&(q.updateMultisampleRenderTarget(se),q.updateRenderTargetMipmap(se)),B&&E.end(C),x.isScene===!0&&x.onAfterRender(C,x,D),me.resetDefaultState(),X=-1,ee=null,v.pop(),v.length>0?(M=v[v.length-1],q.setTextureUnits(M.state.textureUnits),Xe===!0&&Ae.setGlobalState(C.clippingPlanes,M.state.camera)):M=null,A.pop(),A.length>0?w=A[A.length-1]:w=null,L!==null&&L.renderEnd()};function sa(x,D,W,B){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)W=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLightProbeGrid)M.pushLightProbeGrid(x);else if(x.isLight)M.pushLight(x),x.castShadow&&M.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(be)){B&&St.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Pe);const ve=Q.update(x),fe=x.material;fe.visible&&w.push(x,ve,fe,W,St.z,null,D)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(be))){const ve=Q.update(x),fe=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),St.copy(x.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),St.copy(ve.boundingSphere.center)),St.applyMatrix4(x.matrixWorld).applyMatrix4(Pe)),Array.isArray(fe)){const ye=ve.groups;for(let we=0,He=ye.length;we<He;we++){const Ye=ye[we],Se=fe[Ye.materialIndex];Se&&Se.visible&&w.push(x,ve,Se,W,St.z,Ye,D)}}else fe.visible&&w.push(x,ve,fe,W,St.z,null,D)}}const pe=x.children;for(let ve=0,fe=pe.length;ve<fe;ve++)sa(pe[ve],D,W,B)}function Wc(x,D,W,B){const{opaque:k,transmissive:pe,transparent:ve}=x;M.setupLightsView(W),Xe===!0&&Ae.setGlobalState(C.clippingPlanes,W),B&&g.viewport(ne.copy(B)),k.length>0&&Ns(k,D,W),pe.length>0&&Ns(pe,D,W),ve.length>0&&Ns(ve,D,W),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Xc(x,D,W,B){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[B.id]===void 0){const Se=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[B.id]=new on(1,1,{generateMipmaps:!0,type:Se?Cn:rn,minFilter:li,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const pe=M.state.transmissionRenderTarget[B.id],ve=B.viewport||ne;pe.setSize(ve.z*C.transmissionResolutionScale,ve.w*C.transmissionResolutionScale);const fe=C.getRenderTarget(),ye=C.getActiveCubeFace(),we=C.getActiveMipmapLevel();C.setRenderTarget(pe),C.getClearColor(ot),qe=C.getClearAlpha(),qe<1&&C.setClearColor(16777215,.5),C.clear(),_t&&ze.render(W);const He=C.toneMapping;C.toneMapping=Tn;const Ye=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),M.setupLightsView(B),Xe===!0&&Ae.setGlobalState(C.clippingPlanes,B),Ns(x,W,B),q.updateMultisampleRenderTarget(pe),q.updateRenderTargetMipmap(pe),st.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let it=0,Et=D.length;it<Et;it++){const gt=D[it],{object:ut,geometry:Ft,material:_e,group:zt}=gt;if(_e.side===jt&&ut.layers.test(B.layers)){const Je=_e.side;_e.side=$t,_e.needsUpdate=!0,Yc(ut,W,B,Ft,_e,zt),_e.side=Je,_e.needsUpdate=!0,Se=!0}}Se===!0&&(q.updateMultisampleRenderTarget(pe),q.updateRenderTargetMipmap(pe))}C.setRenderTarget(fe,ye,we),C.setClearColor(ot,qe),Ye!==void 0&&(B.viewport=Ye),C.toneMapping=He}function Ns(x,D,W){const B=D.isScene===!0?D.overrideMaterial:null;for(let k=0,pe=x.length;k<pe;k++){const ve=x[k],{object:fe,geometry:ye,group:we}=ve;let He=ve.material;He.allowOverride===!0&&B!==null&&(He=B),fe.layers.test(W.layers)&&Yc(fe,D,W,ye,He,we)}}function Yc(x,D,W,B,k,pe){L!==null&&k.isNodeMaterial&&L.setObject(x,k),x.onBeforeRender(C,D,W,B,k,pe),x.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),k.onBeforeRender(C,D,W,B,x,pe),k.transparent===!0&&k.side===jt&&k.forceSinglePass===!1?(k.side=$t,k.needsUpdate=!0,C.renderBufferDirect(W,D,B,k,x,pe),k.side=di,k.needsUpdate=!0,C.renderBufferDirect(W,D,B,k,x,pe),k.side=jt):C.renderBufferDirect(W,D,B,k,x,pe),x.onAfterRender(C,D,W,B,k,pe)}function Us(x,D,W){D.isScene!==!0&&(D=Wt);const B=V.get(x),k=M.state.lights,pe=M.state.shadowsArray,ve=k.state.version,fe=oe.getParameters(x,k.state,pe,D,W,M.state.lightProbeGridArray),ye=oe.getProgramCacheKey(fe);let we=B.programs;B.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,B.fog=D.fog;const He=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;B.envMap=re.get(x.envMap||B.environment,He),B.envMapRotation=B.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,we===void 0&&(x.addEventListener("dispose",_n),we=new Map,B.programs=we);let Ye=we.get(ye);if(Ye!==void 0){if(B.currentProgram===Ye&&B.lightsStateVersion===ve)return $c(x,fe),Ye}else fe.uniforms=oe.getUniforms(x),L!==null&&x.isNodeMaterial&&L.build(x,W,fe),x.onBeforeCompile(fe,C),Ye=oe.acquireProgram(fe,ye),we.set(ye,Ye),B.uniforms=fe.uniforms;const Se=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Se.clippingPlanes=Ae.uniform),$c(x,fe),B.needsLights=gd(x),B.lightsStateVersion=ve,B.needsLights&&(Se.ambientLightColor.value=k.state.ambient,Se.lightProbe.value=k.state.probe,Se.sunLights.value=k.state.sun,Se.sunLightShadows.value=k.state.sunShadow,Se.directionalLights.value=k.state.directional,Se.directionalLightShadows.value=k.state.directionalShadow,Se.spotLights.value=k.state.spot,Se.spotLightShadows.value=k.state.spotShadow,Se.rectAreaLights.value=k.state.rectArea,Se.ltc_1.value=k.state.rectAreaLTC1,Se.ltc_2.value=k.state.rectAreaLTC2,Se.pointLights.value=k.state.point,Se.pointLightShadows.value=k.state.pointShadow,Se.hemisphereLights.value=k.state.hemi,Se.sunShadowMatrix.value=k.state.sunShadowMatrix,Se.sunShadowCascade.value=k.state.sunShadowCascade,Se.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Se.spotLightMatrix.value=k.state.spotLightMatrix,Se.spotLightMap.value=k.state.spotLightMap,Se.pointShadowMatrix.value=k.state.pointShadowMatrix),B.lightProbeGrid=M.state.lightProbeGridArray.length>0,B.currentProgram=Ye,B.uniformsList=null,Ye}function qc(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=wr.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function $c(x,D){const W=V.get(x);W.outputColorSpace=D.outputColorSpace,W.batching=D.batching,W.batchingColor=D.batchingColor,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.instancingMorph=D.instancingMorph,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function fd(x,D){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;S.setFromMatrixPosition(D.matrixWorld);for(let W=0,B=x.length;W<B;W++){const k=x[W];if(k.texture!==null&&k.boundingBox.containsPoint(S))return k}return null}function pd(x,D,W,B,k){D.isScene!==!0&&(D=Wt),q.resetTextureUnits();const pe=D.fog,ve=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?D.environment:null,fe=se===null?C.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:$e.workingColorSpace,ye=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,we=re.get(B.envMap||ve,ye),He=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ye=!!W.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Se=!!W.morphAttributes.position,it=!!W.morphAttributes.normal,Et=!!W.morphAttributes.color;let gt=Tn;B.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(gt=C.toneMapping);const ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ft=ut!==void 0?ut.length:0,_e=V.get(B),zt=M.state.lights;if(Xe===!0&&(Qe===!0||x!==ee)){const mt=x===ee&&B.id===X;Ae.setState(B,x,mt)}let Je=!1;B.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==zt.state.version||_e.outputColorSpace!==fe||k.isBatchedMesh&&_e.batching===!1||!k.isBatchedMesh&&_e.batching===!0||k.isBatchedMesh&&_e.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&_e.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&_e.instancing===!1||!k.isInstancedMesh&&_e.instancing===!0||k.isSkinnedMesh&&_e.skinning===!1||!k.isSkinnedMesh&&_e.skinning===!0||k.isInstancedMesh&&_e.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&_e.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&_e.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&_e.instancingMorph===!1&&k.morphTexture!==null||_e.envMap!==we||B.fog===!0&&_e.fog!==pe||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Ae.numPlanes||_e.numIntersection!==Ae.numIntersection)||_e.vertexAlphas!==He||_e.vertexTangents!==Ye||_e.morphTargets!==Se||_e.morphNormals!==it||_e.morphColors!==Et||_e.toneMapping!==gt||_e.morphTargetsCount!==Ft||!!_e.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,_e.__version=B.version);let en=_e.currentProgram;Je===!0&&(en=Us(B,D,k),L&&B.isNodeMaterial&&L.onUpdateProgram(B,en,_e));let vn=!1,Gn=!1,Ei=!1;const lt=en.getUniforms(),xt=_e.uniforms;if(g.useProgram(en.program)&&(vn=!0,Gn=!0,Ei=!0),B.id!==X&&(X=B.id,Gn=!0),_e.needsLights){const mt=fd(M.state.lightProbeGridArray,k);_e.lightProbeGrid!==mt&&(_e.lightProbeGrid=mt,Gn=!0)}if(vn||ee!==x){g.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),lt.setValue(F,"projectionMatrix",x.projectionMatrix),lt.setValue(F,"viewMatrix",x.matrixWorldInverse);const Wn=lt.map.cameraPosition;Wn!==void 0&&Wn.setValue(F,ct.setFromMatrixPosition(x.matrixWorld)),T.logarithmicDepthBuffer&&lt.setValue(F,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&lt.setValue(F,"isOrthographic",x.isOrthographicCamera===!0),ee!==x&&(ee=x,Gn=!0,Ei=!0)}if(_e.needsLights&&(zt.state.sunShadowMap.length>0&&lt.setValue(F,"sunShadowMap",zt.state.sunShadowMap,q),zt.state.directionalShadowMap.length>0&&lt.setValue(F,"directionalShadowMap",zt.state.directionalShadowMap,q),zt.state.spotShadowMap.length>0&&lt.setValue(F,"spotShadowMap",zt.state.spotShadowMap,q),zt.state.pointShadowMap.length>0&&lt.setValue(F,"pointShadowMap",zt.state.pointShadowMap,q)),k.isSkinnedMesh){lt.setOptional(F,k,"bindMatrix"),lt.setOptional(F,k,"bindMatrixInverse");const mt=k.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),lt.setValue(F,"boneTexture",mt.boneTexture,q))}k.isBatchedMesh&&(lt.setOptional(F,k,"batchingTexture"),lt.setValue(F,"batchingTexture",k._matricesTexture,q),lt.setOptional(F,k,"batchingIdTexture"),lt.setValue(F,"batchingIdTexture",k._indirectTexture,q),lt.setOptional(F,k,"batchingColorTexture"),k._colorsTexture!==null&&lt.setValue(F,"batchingColorTexture",k._colorsTexture,q));const Vn=W.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&U.update(k,W,en),(Gn||_e.receiveShadow!==k.receiveShadow)&&(_e.receiveShadow=k.receiveShadow,lt.setValue(F,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&D.environment!==null&&(xt.envMapIntensity.value=D.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=tv()),Gn){if(lt.setValue(F,"toneMappingExposure",C.toneMappingExposure),_e.needsLights&&md(xt,Ei),pe&&B.fog===!0&&Te.refreshFogUniforms(xt,pe),Te.refreshMaterialUniforms(xt,B,te,Z,M.state.transmissionRenderTarget[x.id]),_e.needsLights&&_e.lightProbeGrid){const mt=_e.lightProbeGrid;xt.probesSH.value=mt.texture,xt.probesMin.value.copy(mt.boundingBox.min),xt.probesMax.value.copy(mt.boundingBox.max),xt.probesResolution.value.copy(mt.resolution)}wr.upload(F,qc(_e),xt,q)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(wr.upload(F,qc(_e),xt,q),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&lt.setValue(F,"center",k.center),lt.setValue(F,"modelViewMatrix",k.modelViewMatrix),lt.setValue(F,"normalMatrix",k.normalMatrix),lt.setValue(F,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){const mt=B.uniformsGroups;for(let Wn=0,bi=mt.length;Wn<bi;Wn++){const Kc=mt[Wn];ie.update(Kc,en),ie.bind(Kc,en)}}return en}function md(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.sunLights.needsUpdate=D,x.sunLightShadows.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function gd(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(x,D,W){const B=V.get(x);B.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),V.get(x.texture).__webglTexture=D,V.get(x.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:W,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,D){const W=V.get(x);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(x,D=0,W=0){se=x,Y=D,$=W;let B=null,k=!1,pe=!1;if(x){const fe=V.get(x);if(fe.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(F.FRAMEBUFFER,fe.__webglFramebuffer),ne.copy(x.viewport),Re.copy(x.scissor),Ee=x.scissorTest,g.viewport(ne),g.scissor(Re),g.setScissorTest(Ee),X=-1;return}else if(fe.__webglFramebuffer===void 0)q.setupRenderTarget(x);else if(fe.__hasExternalTextures)q.rebindTextures(x,V.get(x.texture).__webglTexture,V.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const He=x.depthTexture;if(fe.__boundDepthTexture!==He){if(He!==null&&V.has(He)&&(x.width!==He.image.width||x.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(x)}}const ye=x.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(pe=!0);const we=V.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(we[D])?B=we[D][W]:B=we[D],k=!0):x.samples>0&&q.useMultisampledRTT(x)===!1?B=V.get(x).__webglMultisampledFramebuffer:Array.isArray(we)?B=we[W]:B=we,ne.copy(x.viewport),Re.copy(x.scissor),Ee=x.scissorTest}else ne.copy(J).multiplyScalar(te).floor(),Re.copy(xe).multiplyScalar(te).floor(),Ee=ke;if(W!==0&&(B=G),g.bindFramebuffer(F.FRAMEBUFFER,B)&&g.drawBuffers(x,B),g.viewport(ne),g.scissor(Re),g.setScissorTest(Ee),k){const fe=V.get(x.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,fe.__webglTexture,W)}else if(pe){const fe=D;for(let ye=0;ye<x.textures.length;ye++){const we=V.get(x.textures[ye]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+ye,we.__webglTexture,W,fe)}}else if(x!==null&&W!==0){const fe=V.get(x.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,fe.__webglTexture,W)}X=-1};function Zc(x){const D=V.get(x);return(D.__readFormat!==x.format||D.__readType!==x.type)&&(D.__readFormat=x.format,D.__readType=x.type,D.__formatReadable=T.textureFormatReadable(x.format),D.__typeReadable=T.textureTypeReadable(x.type)),D}this.readRenderTargetPixels=function(x,D,W,B,k,pe,ve,fe=0){if(!(x&&x.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=V.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve]),ye){g.bindFramebuffer(F.FRAMEBUFFER,ye);try{const we=x.textures[fe],He=we.format,Ye=we.type;x.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+fe);const Se=Zc(we);if(Se.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-B&&W>=0&&W<=x.height-k&&F.readPixels(D,W,B,k,he.convert(He),he.convert(Ye),pe)}finally{const we=se!==null?V.get(se).__webglFramebuffer:null;g.bindFramebuffer(F.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(x,D,W,B,k,pe,ve,fe=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=V.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve]),ye)if(D>=0&&D<=x.width-B&&W>=0&&W<=x.height-k){g.bindFramebuffer(F.FRAMEBUFFER,ye);const we=x.textures[fe],He=we.format,Ye=we.type;x.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+fe);const Se=Zc(we);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,it),F.bufferData(F.PIXEL_PACK_BUFFER,pe.byteLength,F.STREAM_READ),F.readPixels(D,W,B,k,he.convert(He),he.convert(Ye),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const Et=se!==null?V.get(se).__webglFramebuffer:null;g.bindFramebuffer(F.FRAMEBUFFER,Et);const gt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await yf(F,gt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,it),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,pe),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(it),F.deleteSync(gt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,D=null,W=0){const B=Math.pow(2,-W),k=Math.floor(x.image.width*B),pe=Math.floor(x.image.height*B),ve=D!==null?D.x:0,fe=D!==null?D.y:0;q.setTexture2D(x,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,ve,fe,k,pe),g.unbindTexture()},this.copyTextureToTexture=function(x,D,W=null,B=null,k=0,pe=0){let ve,fe,ye,we,He,Ye,Se,it,Et;const gt=x.isCompressedTexture?x.mipmaps[pe]:x.image;if(W!==null)ve=W.max.x-W.min.x,fe=W.max.y-W.min.y,ye=W.isBox3?W.max.z-W.min.z:1,we=W.min.x,He=W.min.y,Ye=W.isBox3?W.min.z:0;else{const xt=Math.pow(2,-k);ve=Math.floor(gt.width*xt),fe=Math.floor(gt.height*xt),x.isDataArrayTexture?ye=gt.depth:x.isData3DTexture?ye=Math.floor(gt.depth*xt):ye=1,we=0,He=0,Ye=0}B!==null?(Se=B.x,it=B.y,Et=B.z):(Se=0,it=0,Et=0);const ut=he.convert(D.format),Ft=he.convert(D.type);let _e;D.isData3DTexture?(q.setTexture3D(D,0),_e=F.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(q.setTexture2DArray(D,0),_e=F.TEXTURE_2D_ARRAY):(q.setTexture2D(D,0),_e=F.TEXTURE_2D),g.activeTexture(F.TEXTURE0),g.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,D.flipY),g.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),g.pixelStorei(F.UNPACK_ALIGNMENT,D.unpackAlignment);const zt=g.getParameter(F.UNPACK_ROW_LENGTH),Je=g.getParameter(F.UNPACK_IMAGE_HEIGHT),en=g.getParameter(F.UNPACK_SKIP_PIXELS),vn=g.getParameter(F.UNPACK_SKIP_ROWS),Gn=g.getParameter(F.UNPACK_SKIP_IMAGES);g.pixelStorei(F.UNPACK_ROW_LENGTH,gt.width),g.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt.height),g.pixelStorei(F.UNPACK_SKIP_PIXELS,we),g.pixelStorei(F.UNPACK_SKIP_ROWS,He),g.pixelStorei(F.UNPACK_SKIP_IMAGES,Ye);const Ei=x.isDataArrayTexture||x.isData3DTexture,lt=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){const xt=V.get(x),Vn=V.get(D),mt=V.get(xt.__renderTarget),Wn=V.get(Vn.__renderTarget);g.bindFramebuffer(F.READ_FRAMEBUFFER,mt.__webglFramebuffer),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let bi=0;bi<ye;bi++)Ei&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,V.get(x).__webglTexture,k,Ye+bi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,V.get(D).__webglTexture,pe,Et+bi)),F.blitFramebuffer(we,He,ve,fe,Se,it,ve,fe,F.DEPTH_BUFFER_BIT,F.NEAREST);g.bindFramebuffer(F.READ_FRAMEBUFFER,null),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(k!==0||x.isRenderTargetTexture||V.has(x)){const xt=V.get(x),Vn=V.get(D);g.bindFramebuffer(F.READ_FRAMEBUFFER,I),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,H);for(let mt=0;mt<ye;mt++)Ei?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xt.__webglTexture,k,Ye+mt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xt.__webglTexture,k),lt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Vn.__webglTexture,pe,Et+mt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Vn.__webglTexture,pe),k!==0?F.blitFramebuffer(we,He,ve,fe,Se,it,ve,fe,F.COLOR_BUFFER_BIT,F.NEAREST):lt?F.copyTexSubImage3D(_e,pe,Se,it,Et+mt,we,He,ve,fe):F.copyTexSubImage2D(_e,pe,Se,it,we,He,ve,fe);g.bindFramebuffer(F.READ_FRAMEBUFFER,null),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else lt?x.isDataTexture||x.isData3DTexture?F.texSubImage3D(_e,pe,Se,it,Et,ve,fe,ye,ut,Ft,gt.data):D.isCompressedArrayTexture?F.compressedTexSubImage3D(_e,pe,Se,it,Et,ve,fe,ye,ut,gt.data):F.texSubImage3D(_e,pe,Se,it,Et,ve,fe,ye,ut,Ft,gt):x.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,pe,Se,it,ve,fe,ut,Ft,gt.data):x.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,pe,Se,it,gt.width,gt.height,ut,gt.data):F.texSubImage2D(F.TEXTURE_2D,pe,Se,it,ve,fe,ut,Ft,gt);g.pixelStorei(F.UNPACK_ROW_LENGTH,zt),g.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Je),g.pixelStorei(F.UNPACK_SKIP_PIXELS,en),g.pixelStorei(F.UNPACK_SKIP_ROWS,vn),g.pixelStorei(F.UNPACK_SKIP_IMAGES,Gn),pe===0&&D.generateMipmaps&&F.generateMipmap(_e),g.unbindTexture()},this.initRenderTarget=function(x){V.get(x).__webglFramebuffer===void 0&&q.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?q.setTextureCube(x,0):x.isData3DTexture?q.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?q.setTexture2DArray(x,0):q.setTexture2D(x,0),g.unbindTexture()},this.resetState=function(){Y=0,$=0,se=null,g.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}const Ac=.15;class Eu{antialias=!0;pixelRatio;impactLimit;constructor(){const e=matchMedia("(pointer:coarse)").matches,t=navigator.deviceMemory??4,n=(navigator.hardwareConcurrency||4)<=4||t<=3;this.pixelRatio=Math.min(devicePixelRatio,e?n?1:1.6:2),this.impactLimit=n?8:16}}class bu{constructor(e,t,n){this.root=e,this.gun=t,this.coarse=n,this.shell=document.createElement("div"),this.shell.className="co-scope",this.shell.hidden=!0,this.shell.setAttribute("aria-hidden","true"),this.shell.innerHTML=`<div class="co-scope-shade"></div><div class="co-scope-frame">
      <svg viewBox="0 0 100 100" aria-hidden="true"><path fill="black" fill-rule="evenodd" d="M25 0H75L100 50 75 100H25L0 50ZM80 50a30 30 0 1 0-60 0 30 30 0 1 0 60 0"/></svg>
      <div class="co-scope-reticle"><i></i><b></b><span></span></div><div class="co-scope-stock"></div></div>`,e.append(this.shell),this.overlayCamera.position.z=1,this.overlay.add(this.plane);const s=new Fe(new yt(.1,.1,1.6),new tt({color:1053726}));s.position.set(.34,-.25,-1.15);const r=new Fe(new gi(.09,.09,.34,6),new tt({color:527120}));r.rotation.x=Math.PI/2,r.position.set(.34,-.12,-.7),this.gunParts.add(s,r),t.add(this.gunParts),this.gunParts.visible=!1,e.addEventListener("combat:reset",this.reset),e.addEventListener("armory:open",this.reset)}shell;lens=new Xt(75,1,Ac,420);target=new on(256,256);overlay=new yc;overlayCamera=new Tc(-1,1,1,-1,0,2);material=new Qt({uniforms:{map:{value:this.target.texture}},depthTest:!1,depthWrite:!1,transparent:!0,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`uniform sampler2D map;varying vec2 vUv;
      void main(){
        if(distance(vUv,vec2(.5))>.5)discard;
        gl_FragColor=texture2D(map,vUv);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`});plane=new Fe(new _i(2,2),this.material);scoped=!1;gunParts=new qt;reset=()=>{this.scoped=!1,this.shell.hidden=!0,this.root.classList.remove("co-scoped")};update(e,t,n,s,r){this.scoped=e==="sniper"&&!!t.aim&&n&&!s&&!r,this.shell.hidden=!this.scoped,this.root.classList.toggle("co-scoped",this.scoped),this.root.querySelector("[data-sprint]")?.setAttribute("aria-pressed",String(!!t.sprint&&n));const a=this.root.querySelector("[data-aim]");return a&&(a.disabled=e!=="sniper",a.setAttribute("aria-pressed",String(this.scoped))),this.gunParts.visible=e==="sniper",this.scoped}render(e,t,n){if(this.gun.visible=!this.scoped,e.render(t,n),this.gun.visible=!0,!this.scoped)return;this.target.samples=Math.min(4,e.capabilities.maxSamples);const s=this.root.clientWidth,r=this.root.clientHeight,a=Math.min(r*.58,s*.44),o=a*.6;this.root.style.setProperty("--scope-size",`${a}px`),this.root.style.setProperty("--lens-size",`${o}px`);const c=Math.max(64,Math.min(this.coarse?512:768,Math.ceil(o*e.getPixelRatio())));this.target.width!==c&&this.target.setSize(c,c),this.lens.position.copy(n.position),this.lens.quaternion.copy(n.quaternion),this.lens.fov=n.fov,this.lens.zoom=4*r/o,this.lens.near=n.near,this.lens.far=n.far,this.lens.updateProjectionMatrix(),this.gun.visible=!1;const l=e.getRenderTarget(),h=e.autoClear;e.setRenderTarget(this.target),e.render(t,this.lens),e.setRenderTarget(l),this.gun.visible=!0,this.plane.scale.set(o/s,o/r,1),e.autoClear=!1,e.clearDepth(),e.render(this.overlay,this.overlayCamera),e.autoClear=h}dispose(){this.root.removeEventListener("combat:reset",this.reset),this.root.removeEventListener("armory:open",this.reset),this.reset(),this.shell.remove(),this.target.dispose(),this.plane.geometry.dispose(),this.material.dispose(),this.gunParts.traverse(e=>{e instanceof Fe&&(e.geometry.dispose(),e.material.dispose())}),this.gun.remove(this.gunParts)}}function Qr(...i){const e=new Set,t=new Set,n=new Set,s=new Set;for(const r of i)r.traverse(a=>{if(a instanceof br&&s.add(a),(a instanceof Fe||a instanceof Wo||a instanceof Cl)&&e.add(a.geometry),a instanceof Fe||a instanceof Wo||a instanceof Cl||a instanceof ru)for(const o of Array.isArray(a.material)?a.material:[a.material])t.add(o)});for(const r of s)r.dispose();for(const r of t)for(const a of Object.values(r))a instanceof Nt&&n.add(a);for(const r of n)r.dispose();for(const r of t)r.dispose();for(const r of e)r.dispose()}class wu{constructor(e,t=!1){this.scene=e,this.coarse=t;const n=t?320:900;this.positions=new Float32Array(n*3),this.colors=new Float32Array(n*3),this.sizes=new Float32Array(n),this.alphas=new Float32Array(n),this.styles=new Float32Array(n),this.particles=Array.from({length:n},()=>({position:new P,velocity:new P,life:0,duration:1,size:0,color:new Ue,style:0}));for(const[s,r,a]of[["position",this.positions,3],["color",this.colors,3],["size",this.sizes,1],["alpha",this.alphas,1],["style",this.styles,1]])this.geometry.setAttribute(s,new cn(r,a).setUsage(_f));this.material=new Qt({transparent:!0,depthWrite:!1,depthTest:!0,blending:ui,uniforms:{time:{value:0}},vertexShader:`attribute float size;attribute float alpha;attribute float style;varying vec3 vColor;varying float vAlpha;varying float vStyle;
      void main(){vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(size*500./max(.1,-p.z),0.,120.);vColor=color;vAlpha=alpha;vStyle=style;}`,fragmentShader:`uniform float time;varying vec3 vColor;varying float vAlpha;varying float vStyle;
      float noise(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float smoothNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(noise(i),noise(i+vec2(1.,0.)),f.x),mix(noise(i+vec2(0.,1.)),noise(i+vec2(1.,1.)),f.x),f.y);}
      void main(){vec2 uv=gl_PointCoord*2.-1.;float r=length(uv);float a=pow(max(0.,1.-r),2.);vec3 color=vColor;
      if(vStyle>1.5&&vStyle<2.5){float phase=time*3.;uv=mat2(cos(phase),-sin(phase),sin(phase),cos(phase))*uv;float diamond=abs(uv.x)+abs(uv.y);a=pow(max(0.,1.-diamond),.7);color=mix(vColor,vec3(.95,1.,1.),pow(max(0.,1.-diamond),6.));}
      if(vStyle>.5&&vStyle<1.5){vec2 flow=uv*vec2(2.8,4.)+vec2(time*1.5,-time*5.);float turbulence=smoothNoise(flow)*.6+smoothNoise(flow*2.)*.25;
        float flame=length(uv*vec2(1.05,.8))+turbulence*.3;float core=pow(max(0.,1.-flame),3.);a=(1.-smoothstep(.15,1.,flame))*.16;
        color=mix(vColor*.65,vec3(1.,.85,.32),core);}
      if(vStyle>2.5){a=pow(max(0.,1.-r),1.3)*.16;}
      gl_FragColor=vec4(color,a*vAlpha);
      #include <colorspace_fragment>
      }`,vertexColors:!0}),this.points=new Wo(this.geometry,this.material),this.points.frustumCulled=!1,this.group.add(this.points),this.beams=Array.from({length:t?32:64},()=>{const s=new Fe(this.cylinder,new tt({transparent:!0,depthWrite:!1,blending:ws})),r=new Fe(this.cylinder,new tt({color:16777215,transparent:!0,depthWrite:!1,blending:ws}));return s.visible=r.visible=!1,this.group.add(s,r),{mesh:s,core:r,life:0,duration:1}}),this.rings=Array.from({length:8},()=>{const s=new Fe(this.ringGeometry,new tt({transparent:!0,depthWrite:!1,side:jt,blending:ws}));return s.visible=!1,this.group.add(s),{mesh:s,life:0,duration:1,radius:1}}),this.flames=Array.from({length:t?24:48},()=>{const s=new Qt({transparent:!0,depthWrite:!1,depthTest:!0,side:jt,blending:ui,uniforms:{time:{value:0},opacity:{value:1}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float time;uniform float opacity;varying vec2 vUv;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}
      void main(){float n=noise(vec2(vUv.x*6.+time,vUv.y*9.-time*9.));float fine=noise(vec2(vUv.x*13.,vUv.y*17.-time*13.));float tongue=smoothstep(.25,.8,n*.75+fine*.35);float tip=1.-smoothstep(.65,1.,vUv.y);float ignition=smoothstep(0.,.06,vUv.y);vec3 color=mix(vec3(1.,.86,.34),vec3(1.,.16,.015),vUv.y);gl_FragColor=vec4(color,tongue*tip*ignition*opacity*.32);
      #include <colorspace_fragment>
      }`}),r=new Fe(this.flameGeometry,s);return r.visible=!1,this.group.add(r),{mesh:r,life:0}}),e.add(this.group)}group=new qt;particles;beams;rings;flames;flameCursor=0;flameGeometry=new gi(1,.25,1,8,1,!0);cursor=0;beamCursor=0;ringCursor=0;geometry=new Tt;material;points;cylinder=new gi(1,1,1,6,1,!0);ringGeometry=new bc(.88,1,48);positions;colors;sizes;alphas;styles;particle(e,t,n,s,r=0,a){const o=this.particles[this.cursor++%this.particles.length];o.position.copy(e),o.color.setHex(t),o.size=n,o.life=o.duration=s,o.style=r,o.velocity.copy(a??new P((Math.random()-.5)*2,Math.random()*2,(Math.random()-.5)*2))}beam(e,t,n,s,r=.022){const a=this.beams[this.beamCursor++%this.beams.length],o=t.clone().sub(e),c=o.length();if(c<.01)return;a.mesh.position.copy(e).addScaledVector(o,.5),a.core.position.copy(a.mesh.position);const l=new xi().setFromUnitVectors(new P(0,1,0),o.normalize());a.mesh.quaternion.copy(l),a.core.quaternion.copy(l),a.mesh.scale.set(r,c,r),a.core.scale.set(r*.24,c,r*.24),a.mesh.material.color.setHex(n),a.life=a.duration=s,a.mesh.visible=a.core.visible=!0}play(e,t,n=!0){const s=Lt[e.weapon],r=new P(...e.origin),a=e.weapon;if(n&&this.muzzle(t,a),a==="flame"){const o=this.coarse?3:2;for(let c=0;c<e.rays.length;c+=o){const l=e.rays[c],h=new P(...l.end),d=h.clone().sub(t),u=d.length();if(u<.1)continue;const f=this.flames[this.flameCursor++%this.flames.length];f.mesh.position.copy(t).addScaledVector(d,.5),f.mesh.quaternion.setFromUnitVectors(new P(0,1,0),d.normalize()),f.mesh.scale.set(.05+u*.018,u,.05+u*.018),f.life=.16,f.mesh.visible=!0}for(let c=0;c<e.rays.length;c+=o){const l=e.rays[c],h=r.distanceTo(new P(...l.end));for(let d=0;d<(this.coarse?5:9);d++){const u=(d+.25)/(this.coarse?5:9),f=new P(...Nr(e.origin,l.dir,h*u));h*u<1.3&&f.lerp(t,1-h*u/1.3),this.particle(f,u<.2?16774592:u<.6?16752686:16729633,.15+u*.4,.12+Math.random()*.12,1,new P(0,.4,0)),d%3===0&&this.particle(f,16755780,.055,.18,0,new P(0,.3,0))}}}else for(const o of e.rays){const c=new P(...o.end);if(this.beam(t,c,s.color,a==="smg"?.075:a==="ice"?.16:.105,a==="ice"?.035:a==="rocket"?.06:.02),a==="smg"){const l=c.clone().sub(t),h=new P(-l.z,0,l.x).normalize();let d=t.clone().lerp(c,.2);for(let u=1;u<=3;u++){const f=t.clone().lerp(c,.2+u*.12).addScaledVector(h,(u%2?1:-1)*.045);this.beam(d,f,16765021,.06,.007),d=f}}if(a==="ice"||a==="rocket"||a==="smg"){const l=this.coarse?4:10;for(let h=1;h<=l;h++){const d=t.clone().lerp(c,h/(l+1));this.particle(d,s.color,a==="rocket"?.48:a==="ice"?.16:.045,a==="rocket"?.4:.2,a==="rocket"?3:a==="ice"?2:0,new P(0,.12,0))}}}for(const[o,c]of e.rays.entries())if(c.kind!=="range"&&(a!=="flame"||o%4===0)){const l=new P(...c.end);this.impact(l,a,c.kind==="head",new P(...c.dir).negate())}a==="rocket"&&e.rays[0]?.kind!=="range"&&this.explosion(new P(...Nr(e.rays[0].end,e.rays[0].dir,-.1)))}muzzle(e,t){const n=Lt[t].color;for(let s=0;s<(this.coarse?3:7);s++)this.particle(e,s===0?16777215:n,s===0?.32:.08,.04+Math.random()*.035)}impact(e,t,n,s){const r=t==="flame"?this.coarse?2:4:this.coarse?4:t==="ice"?16:10,a=n?16767593:Lt[t].color;this.particle(e.clone().addScaledVector(s,.035),16777215,.26,.065);for(let o=0;o<r;o++){const c=new P((Math.random()-.5)*3,Math.random()*3,(Math.random()-.5)*3).addScaledVector(s,1);this.particle(e.clone().addScaledVector(s,.04),a,t==="ice"?.12:.055,.14+Math.random()*.2,t==="ice"?2:0,c)}t==="ice"&&this.particle(e.clone().addScaledVector(s,.05),8707583,.8,.32,3,new P)}explosion(e){const t=this.coarse?25:65;for(let s=0;s<t;s++)this.particle(e,s<10?16774613:s<t*.6?16741421:9666456,s<10?.55:.85,.18+Math.random()*.55,s<t*.6?1:3,new P((Math.random()-.5)*11,Math.random()*7,(Math.random()-.5)*11));const n=this.rings[this.ringCursor++%8];n.mesh.position.copy(e),n.mesh.rotation.x=-Math.PI/2,n.life=n.duration=.35,n.radius=5,n.mesh.material.color.setHex(16751449),n.mesh.visible=!0}status(e,t){this.particle(e,Lt[t].color,t==="flame"?.22:.16,.22,t==="flame"?1:2,new P(0,.5,0))}update(e){this.material.uniforms.time.value+=e,this.particles.forEach((t,n)=>{t.life=Math.max(0,t.life-e),t.life&&(t.position.addScaledVector(t.velocity,e),(t.style===0||t.style===2)&&(t.velocity.y-=e*3)),t.position.toArray(this.positions,n*3),t.color.toArray(this.colors,n*3),this.sizes[n]=t.life?t.size*(t.style===3?1+(1-t.life/t.duration):1):0,this.alphas[n]=t.life/t.duration,this.styles[n]=t.style});for(const t of Object.values(this.geometry.attributes))t.needsUpdate=!0;for(const t of this.beams)t.life=Math.max(0,t.life-e),t.mesh.visible=t.core.visible=t.life>0,t.mesh.material.opacity=.32*t.life/t.duration,t.core.material.opacity=t.life/t.duration;for(const t of this.flames){t.life=Math.max(0,t.life-e),t.mesh.visible=t.life>0;const n=t.mesh.material;n.uniforms.time.value=this.material.uniforms.time.value,n.uniforms.opacity.value=t.life/.16}for(const t of this.rings)t.life=Math.max(0,t.life-e),t.mesh.visible=t.life>0,t.mesh.scale.setScalar(Math.max(.01,t.radius*(1-t.life/t.duration))),t.mesh.material.opacity=t.life/t.duration*.65}dispose(){this.scene.remove(this.group),this.geometry.dispose(),this.material.dispose(),this.cylinder.dispose(),this.ringGeometry.dispose(),this.flameGeometry.dispose();for(const e of this.flames)e.mesh.material.dispose();for(const e of this.beams)e.mesh.material.dispose(),e.core.material.dispose();for(const e of this.rings)e.mesh.material.dispose();this.group.clear()}}class Tu{constructor(e){this.root=e,this.el.className="co-battle-feedback",this.feed.className="co-kill-feed",this.banner.className="co-kill-banner",this.marker.className="co-hit-marker",this.banner.hidden=this.marker.hidden=!0,this.el.append(this.feed,this.banner,this.marker),e.append(this.el),e.addEventListener("pointerdown",this.unlock),e.addEventListener("keydown",this.unlock)}el=document.createElement("div");feed=document.createElement("div");banner=document.createElement("div");marker=document.createElement("div");entries=[];numbers=[];seen=new Set;ids=[];markerLife=0;markerRank=0;bannerLife=0;bannerAttacker="";audio;disposed=!1;unlock=()=>{if(!this.audio)try{this.audio=new AudioContext}catch{return}this.audio.resume().catch(()=>{})};accept(e){return this.seen.has(e)?!1:(this.seen.add(e),this.ids.push(e),this.ids.length>1024&&this.seen.delete(this.ids.shift()),!0)}hit(e){if(!this.accept(`hit:${e.eventId}`)||!e.hits.length)return;const t=e.hits.some(n=>n.killed)?3:e.hits.some(n=>n.headshot)?2:1;(t>=this.markerRank||!this.markerLife)&&(this.markerRank=t,this.marker.className=`co-hit-marker ${t===3?"is-kill":t===2?"is-head":""}`,this.marker.hidden=!1,this.markerLife=.18),this.tone(t);for(const n of e.hits){if(n.damage<=0)continue;const s=document.createElement("span");s.className=`co-damage-number ${n.killed?"is-kill":n.headshot?"is-head":""}`,s.textContent=String(n.damage),this.el.append(s),this.numbers.push({el:s,life:.7,position:new P(...n.position)}),this.numbers.length>24&&this.numbers.shift().el.remove()}}kill(e){if(!this.accept(`kill:${e.eventId}`))return;const t=document.createElement("div");t.className="co-kill-entry";const n=document.createElement("b"),s=document.createElement("span"),r=document.createElement("b");if(n.textContent=e.attackerName,s.textContent=`${Lt[e.weapon].icon}${e.headshot?" · 爆頭":""}`,s.title=Lt[e.weapon].label,r.textContent=e.victimName,t.append(n,s,r),e.scoreAwarded!==void 0){const h=document.createElement("em");h.className="co-kill-reward",h.textContent=`+${e.scoreAwarded} 分`,t.append(h)}for(this.feed.prepend(t),this.entries.push({el:t,life:6});this.entries.length>5;)this.entries.shift().el.remove();const a=e.multi>=2?["","","雙殺","三連殺","四連殺","五連殺"][e.multi]??`${e.multi} 連殺`:"";if(!a&&!e.title)return;const o=this.bannerAttacker===e.attackerId&&this.bannerLife>0;this.bannerAttacker=e.attackerId,this.banner.replaceChildren();const c=document.createElement("small"),l=document.createElement("strong");c.textContent=e.attackerName,l.textContent=[a,e.title].filter(Boolean).join(" · "),this.banner.append(c,l),this.banner.hidden=!1,this.bannerLife=2,o||(this.banner.classList.remove("is-entering"),this.banner.offsetWidth,this.banner.classList.add("is-entering"))}tone(e){const t=this.audio;if(!t||t.state!=="running")return;const n=t.createOscillator(),s=t.createGain();n.type="sine",n.frequency.setValueAtTime(e===3?660:e===2?1040:780,t.currentTime),n.frequency.exponentialRampToValueAtTime(e===3?980:500,t.currentTime+.075),s.gain.setValueAtTime(.045,t.currentTime),s.gain.exponentialRampToValueAtTime(.001,t.currentTime+.09),n.connect(s).connect(t.destination),n.start(),n.stop(t.currentTime+.1),n.onended=()=>{n.disconnect(),s.disconnect()}}update(e,t){this.disposed||(this.markerLife=Math.max(0,this.markerLife-e),this.markerLife||(this.marker.hidden=!0,this.markerRank=0),this.bannerLife=Math.max(0,this.bannerLife-e),this.banner.hidden=this.bannerLife===0,this.banner.style.opacity=String(Math.min(1,this.bannerLife/.25)),this.entries=this.entries.filter(n=>(n.life-=e,n.life<=0?(n.el.remove(),!1):(n.el.style.opacity=String(Math.min(1,n.life/.4)),!0))),this.numbers=this.numbers.filter(n=>{if(n.life-=e,n.life<=0)return n.el.remove(),!1;const s=n.position.clone().project(t),r=s.z>=-1&&s.z<=1&&Math.abs(s.x)<1.1&&Math.abs(s.y)<1.1;return n.el.hidden=!r,n.el.style.left=`${(s.x*.5+.5)*100}%`,n.el.style.top=`calc(${(-s.y*.5+.5)*100}% - ${(1-n.life/.7)*34}px)`,n.el.style.opacity=String(Math.min(1,n.life/.2)),!0}))}dispose(){this.disposed=!0,this.root.removeEventListener("pointerdown",this.unlock),this.root.removeEventListener("keydown",this.unlock),this.audio?.close().catch(()=>{}),this.el.remove(),this.entries=[],this.numbers=[],this.seen.clear(),this.ids=[]}}const Rc=Id.filter(([i,e])=>i>Wi.minX+1&&i<Wi.maxX-1&&e>Wi.minZ+1&&e<Wi.maxZ-1&&!Ds.some(t=>Za(i,e,t,2))&&rc(i,e)===0&&!$r(i,e,.75)),nv=(i,e)=>e&&i[0]===e[0]&&i[1]===e[1],iv=(i,e)=>Math.hypot(i[0]-e.x,i[1]-e.z),sv=(i,e)=>[...i[Math.min(i.length-1,Math.max(0,Math.floor(e()*i.length)))]];function rv(i,e,t=Math.random,n=Rc){const s=n.filter(c=>!nv(c,e));if(!s.length)throw new Error("No legal respawn candidates");const r=i.filter(c=>c.alive!==!1),a=s.map(c=>({point:c,distance:r.reduce((l,h)=>Math.min(l,iv(c,h)),1/0)})),o=a.filter(c=>c.distance>=20).map(c=>c.point);return sv(o.length?o:a.sort((c,l)=>l.distance-c.distance).slice(0,3).map(c=>c.point),t)}const Au=[...Rc.map(([i,e])=>({x:i,y:0,z:e})),...Ka];function av(i){return i==="smg"?[Ka[0]]:i==="shotgun"?[Ka[1]]:Au.filter(e=>e.y===0)}function ov(i,e,t,n=Math.random,s=Au){const r=[...i.filter(o=>o.alive!==!1),...e],a=s.filter(o=>(!t||o.x!==t.x||o.y!==t.y||o.z!==t.z)&&r.every(c=>Math.hypot(o.x-c.x,o.y-(c.y??0),o.z-c.z)>=8));return a.length?{...a[Math.min(a.length-1,Math.max(0,Math.floor(n()*a.length)))]}:null}const Ls=2,Cc=.5,Pc=16,Ru=.1,Cu="chroma-mouse-sensitivity";function Pu(i){return!Number.isFinite(i)||i<Cc||i>Pc?Ls:Math.round(i*10)/10}function cv(){try{const i=localStorage.getItem(Cu);return i===null||i.trim()===""?Ls:Pu(Number(i))}catch{return Ls}}let qo=cv();const $o=new Set,ea=()=>qo;function Xr(i){qo=Pu(i);try{localStorage.setItem(Cu,String(qo))}catch{}$o.forEach(e=>e())}function Lu(i){return $o.add(i),()=>{$o.delete(i)}}let lv=0;class Iu{constructor(e,t,n,s=!1,r){this.root=e,this.onOpen=t,this.onClose=n,this.roomActions=r;const a=`co-settings-${++lv}`;this.shell=document.createElement("div"),this.shell.dataset.gameUi="",this.shell.className="co-settings-shell",this.shell.innerHTML=`<button type="button" class="co-settings-trigger" aria-controls="${a}" aria-expanded="false">${this.coarse?"設定":"設定 · F2"}</button>
      <p class="co-lock-hint" hidden>點擊場景繼續遊戲 · F2 開啟設定</p>
      <div class="co-settings-overlay" hidden>
        <section id="${a}" class="co-settings-card" role="dialog" aria-modal="true" aria-labelledby="${a}-title" tabindex="-1">
          <p class="co-settings-eyebrow">CHROMA OPS</p><h2 id="${a}-title">遊戲設定</h2>
          <div class="co-sensitivity"><label for="${a}-range">視角靈敏度 <output for="${a}-range"></output></label>
          <input id="${a}-range" type="range" min="${Cc}" max="${Pc}" step="${Ru}">
          <p>滑鼠與觸控共用倍率，1 倍為原本手感。設定會自動儲存。</p>
          <button type="button" data-reset>恢復預設（2 倍）</button></div>
          <p class="co-settings-status">${s?"對戰仍在進行，你仍可能受到攻擊":"單人遊戲已暫停"}</p>
          ${r?`<div class="co-room-actions"><p>房間 <b data-room-code></b></p><button type="button" data-invite>複製邀請連結</button>${r.isHost?'<button type="button" data-end>結束本局並回房間</button><div data-end-confirmation hidden><p>結束本局並讓所有人回到原房間？</p><button type="button" data-confirm-end>確認結束本局</button><button type="button" data-cancel-end>繼續對戰</button></div>':""}<button type="button" data-leave>離開房間</button><p data-room-status role="status"></p></div>`:""}
          <button type="button" class="co-settings-continue" data-continue>繼續遊戲</button>
          <p class="co-settings-help">${this.coarse?"點擊「繼續遊戲」返回戰場":"F2 / Esc 關閉 · 關閉後點擊場景繼續"}</p>
        </section>
      </div>`;const o=this.shell.querySelector("[data-room-code]");o&&r&&(o.textContent=r.code),e.classList.add("co-has-settings"),e.append(this.shell),this.panel=this.shell.querySelector(".co-settings-overlay"),this.slider=this.shell.querySelector("input"),this.output=this.shell.querySelector("output"),this.trigger=this.shell.querySelector(".co-settings-trigger"),this.hint=this.shell.querySelector(".co-lock-hint"),this.shell.addEventListener("click",this.onClick),this.slider.addEventListener("input",this.onInput),window.addEventListener("keydown",this.onKey,!0),document.addEventListener("focusin",this.onFocus),document.addEventListener("pointerlockchange",this.updateHint),document.addEventListener("pointerlockerror",this.updateHint),this.unsubscribe=Lu(this.render),this.render(),this.updateHint()}shell;panel;slider;output;trigger;hint;previousFocus=null;unsubscribe;open=!1;active=!0;coarse=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>0;get isOpen(){return this.open}render=()=>{const e=ea();this.slider.value=String(e),this.slider.setAttribute("aria-valuetext",`${e.toFixed(1)} 倍`),this.output.value=`${e.toFixed(1)} 倍`};onInput=()=>Xr(Number(this.slider.value));onClick=e=>{e.stopPropagation();const t=e.target;if(t.closest(".co-settings-trigger"))this.show();else if(t.closest("[data-reset]"))Xr(Ls);else if(t.closest("[data-leave]"))this.roomActions?.onLeave();else if(t.closest("[data-end]"))this.endConfirmation(!0);else if(t.closest("[data-confirm-end]"))this.endConfirmation(!1),this.roomActions?.onEnd();else if(t.closest("[data-cancel-end]"))this.endConfirmation(!1);else if(t.closest("[data-invite]")){const n=new URL(location.href);n.searchParams.set("room",this.roomActions?.code??""),navigator.clipboard?.writeText(n.toString()).then(()=>this.inviteStatus("邀請連結已複製")).catch(()=>this.inviteStatus("無法複製，請分享房間碼"))}else t.closest("[data-continue]")&&this.close(!this.coarse)};inviteStatus(e){const t=this.shell.querySelector("[data-room-status]");t&&(t.textContent=e)}endConfirmation(e){const t=this.shell.querySelector("[data-end-confirmation]");t&&(t.hidden=!e,e&&t.querySelector("[data-cancel-end]")?.focus())}onFocus=e=>{this.open&&!this.panel.contains(e.target)&&this.slider.focus()};onKey=e=>{if(!this.active)return;const t=e.target instanceof HTMLElement&&e.target.closest("input, textarea, select, [contenteditable]");if(e.key==="F2"&&(this.open||!t)){e.preventDefault(),e.stopImmediatePropagation(),e.repeat||(this.open?this.close(!1):this.show());return}if(this.open){if(e.key==="Escape")e.preventDefault(),e.stopImmediatePropagation(),this.close(!1);else if(e.key==="Tab"){const n=Array.from(this.panel.querySelectorAll("input, button")).filter(a=>!a.closest("[hidden]")),s=n[0],r=n[n.length-1];e.shiftKey&&document.activeElement===s?(e.preventDefault(),r.focus()):!e.shiftKey&&document.activeElement===r&&(e.preventDefault(),s.focus())}}};show(){!this.active||this.open||(this.previousFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.open=!0,this.panel.hidden=!1,this.trigger.setAttribute("aria-expanded","true"),this.onOpen(),document.pointerLockElement===this.root&&document.exitPointerLock?.(),this.slider.focus(),this.updateHint())}close(e=!1,t=!0){this.open&&(this.open=!1,this.endConfirmation(!1),this.panel.hidden=!0,this.trigger.setAttribute("aria-expanded","false"),t&&((this.previousFocus?.isConnected?this.previousFocus:this.trigger).focus({preventScroll:!0}),this.onClose(e)),this.updateHint())}setActive(e){this.active=e,e||this.close(!1,!1),this.shell.hidden=!e,this.updateHint()}updateHint=()=>{(!this.active||this.open)&&document.pointerLockElement===this.root&&document.exitPointerLock?.(),this.hint.hidden=this.coarse||!this.active||this.open||document.pointerLockElement===this.root};dispose(){this.active=!1,this.close(!1,!1),this.unsubscribe(),window.removeEventListener("keydown",this.onKey,!0),document.removeEventListener("focusin",this.onFocus),document.removeEventListener("pointerlockchange",this.updateHint),document.removeEventListener("pointerlockerror",this.updateHint),this.shell.removeEventListener("click",this.onClick),this.slider.removeEventListener("input",this.onInput),this.root.classList.remove("co-has-settings"),this.shell.remove()}}const rh=()=>({moveX:0,moveY:0,lookX:0,lookY:0,shoot:!1,jump:!1,reload:!1,switchWeapon:0,sprint:!1,aim:!1});class Du{constructor(e){this.onReset=e}state=rh();set(e){Object.assign(this.state,e),(e.reload||e.switchWeapon)&&(this.state.aim=!1)}addLook(e,t){this.state.lookX+=e,this.state.lookY+=t}getState(){const e={...this.state};return this.state.lookX=0,this.state.lookY=0,this.state.jump=!1,this.state.reload=!1,this.state.switchWeapon=0,e}get aiming(){return!!this.state.aim}get sprinting(){return!!this.state.sprint}clearCombat(){this.set({shoot:!1,aim:!1,lookX:0,lookY:0,jump:!1,reload:!1,switchWeapon:0})}reset(){const e=this.state.moveX||this.state.moveY||this.state.sprint||this.state.aim||this.state.shoot||this.state.jump;this.state=rh(),e&&this.onReset?.()}}class Nu{constructor(e,t){this.el=e,this.input=t,window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onKey),document.addEventListener("mousemove",this.onMove),e.addEventListener("contextmenu",this.onContext),e.addEventListener("combat:reset",this.reset),e.addEventListener("armory:open",this.clearCombat),document.addEventListener("visibilitychange",this.onVisibility),e.tabIndex=-1,document.addEventListener("pointerlockchange",this.onLockChange),window.addEventListener("blur",this.reset),e.addEventListener("mousedown",this.onDown),window.addEventListener("mouseup",this.onUp)}keys=new Set;enabled=!0;get canPlay(){return this.enabled&&document.pointerLockElement===this.el}get armoryOpen(){return!!this.el.querySelector(".co-armory:not([hidden])")}clearCombat=()=>this.input.clearCombat();reset=()=>{this.keys.clear(),this.input.reset()};onLockChange=()=>{this.reset(),this.canPlay&&this.el.focus({preventScroll:!0})};onKey=e=>{const t=e.key.toLowerCase();if(e.type==="keyup"){this.keys.delete(t);return}const n=["w","a","s","d","shift"].includes(t);if(!this.canPlay||e.target instanceof HTMLElement&&e.target.closest(n?"input, textarea, select, [contenteditable]":"input, button, textarea, select, [contenteditable]")||this.armoryOpen&&!n||!["w","a","s","d"," ","r","q","1","2","3","4","5","6","7","shift"].includes(t))return;e.preventDefault();const s=!e.repeat&&!this.keys.has(t);this.keys.add(t),t===" "&&s&&this.input.set({jump:!0}),t==="r"&&this.input.set({reload:!0}),/^[1-7]$/.test(t)&&this.input.set({switchWeapon:+t})};onMove=e=>{if(this.canPlay&&!this.armoryOpen){const t=ea();this.input.addLook(e.movementX*t,e.movementY*t)}};onDown=e=>{e.button===2&&this.canPlay&&!this.armoryOpen&&(e.preventDefault(),this.input.set({aim:!0})),e.button===0&&this.canPlay&&!this.armoryOpen&&!(e.target instanceof HTMLElement&&e.target.closest("[data-game-ui], .co-armory, button, input"))&&this.input.set({shoot:!0})};onUp=e=>{e.button===0&&this.input.set({shoot:!1}),e.button===2&&this.input.set({aim:!1})};onContext=e=>e.preventDefault();onVisibility=()=>{document.hidden&&this.reset()};setEnabled(e){this.enabled=e,this.reset()}update(){if(!this.canPlay){this.reset();return}this.input.set({sprint:this.keys.has("shift"),moveX:(this.keys.has("d")?1:0)-(this.keys.has("a")?1:0),moveY:(this.keys.has("w")?1:0)-(this.keys.has("s")?1:0)})}dispose(){this.reset(),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onKey),document.removeEventListener("mousemove",this.onMove),document.removeEventListener("pointerlockchange",this.onLockChange),window.removeEventListener("blur",this.reset),this.el.removeEventListener("contextmenu",this.onContext),this.el.removeEventListener("combat:reset",this.reset),this.el.removeEventListener("armory:open",this.clearCombat),document.removeEventListener("visibilitychange",this.onVisibility),this.el.removeEventListener("mousedown",this.onDown),window.removeEventListener("mouseup",this.onUp)}}class Uu{constructor(e,t){this.el=e,this.input=t,window.PointerEvent?(e.addEventListener("pointerdown",this.onPointerDown,this.options),e.addEventListener("pointermove",this.onPointerMove,this.options),e.addEventListener("pointerup",this.onPointerUp,this.options),e.addEventListener("pointercancel",this.onPointerUp,this.options)):(e.addEventListener("touchstart",this.onTouchStart,this.options),e.addEventListener("touchmove",this.onTouchMove,this.options),e.addEventListener("touchend",this.onTouchEnd,this.options),e.addEventListener("touchcancel",this.onTouchEnd,this.options)),e.addEventListener("combat:reset",this.reset),e.addEventListener("armory:open",this.clearCombat),e.addEventListener("tactical:open",this.clearCombat),window.addEventListener("blur",this.reset),window.addEventListener("orientationchange",this.reset),document.addEventListener("visibilitychange",this.onVisibility)}enabled=!0;setEnabled(e){this.enabled=e,this.reset()}isGameTarget=e=>!this.el.querySelector(".co-armory:not([hidden])")&&!(e instanceof HTMLElement&&e.closest(".co-armory, [data-game-ui]"));joyId=null;lookId=null;shootId=null;ox=0;oy=0;lx=0;ly=0;options={passive:!1};reset=()=>{this.joyId=null,this.lookId=null,this.shootId=null,this.input.reset(),this.el.style.setProperty("--joy-x","0px"),this.el.style.setProperty("--joy-y","0px")};clearCombat=()=>{this.lookId=null,this.shootId=null,this.input.clearCombat()};stopShooting=()=>{this.shootId=null,this.input.set({shoot:!1})};onVisibility=()=>{document.hidden&&this.reset()};begin=(e,t,n,s)=>{const r=this.el.getBoundingClientRect();if(!this.enabled||!this.isGameTarget(s))return;const a=s instanceof HTMLElement?s.closest("[data-fire],[data-jump],[data-reload],[data-weapon],[data-sprint],[data-aim]"):null;a?.matches("[data-sprint]")?this.input.set({sprint:!this.input.sprinting}):a?.matches("[data-aim]")?this.input.set({aim:!this.input.aiming}):a?.matches("[data-jump]")?this.input.set({jump:!0}):a?.matches("[data-reload]")?this.input.set({reload:!0}):a?.matches("[data-weapon]")?(this.stopShooting(),this.el.dispatchEvent(new CustomEvent("armory"))):a?.matches("[data-fire]")?(this.shootId=e,this.input.set({shoot:!0})):t<r.left+r.width*.48&&this.joyId===null?(this.joyId=e,this.ox=t,this.oy=n):this.lookId===null&&(this.lookId=e,this.lx=t,this.ly=n)};movePoint=(e,t,n)=>{if(this.enabled){if(e===this.joyId){const s=Math.max(-52,Math.min(52,t-this.ox)),r=Math.max(-52,Math.min(52,n-this.oy));this.input.set({moveX:s/52,moveY:-r/52}),this.el.style.setProperty("--joy-x",`${s}px`),this.el.style.setProperty("--joy-y",`${r}px`)}if(e===this.lookId){const s=ea();this.input.addLook((t-this.lx)*s,(n-this.ly)*s),this.lx=t,this.ly=n}}};end=e=>{e===this.joyId&&(this.joyId=null,this.input.set({moveX:0,moveY:0}),this.el.style.setProperty("--joy-x","0px"),this.el.style.setProperty("--joy-y","0px")),e===this.lookId&&(this.lookId=null),e===this.shootId&&(this.shootId=null,this.input.set({shoot:!1}))};onPointerDown=e=>{!this.enabled||!this.isGameTarget(e.target)||(e.preventDefault(),this.begin(e.pointerId,e.clientX,e.clientY,e.target),this.el.setPointerCapture?.(e.pointerId))};onPointerMove=e=>{!this.enabled||e.pointerId!==this.joyId&&!this.isGameTarget(e.target)||(e.preventDefault(),this.movePoint(e.pointerId,e.clientX,e.clientY))};onPointerUp=e=>{this.enabled&&this.isGameTarget(e.target)&&e.preventDefault(),this.end(e.pointerId)};onTouchStart=e=>{if(!(!this.enabled||!this.isGameTarget(e.target))){e.preventDefault();for(const t of Array.from(e.changedTouches))this.begin(t.identifier,t.clientX,t.clientY,e.target)}};onTouchMove=e=>{if(this.enabled)for(const t of Array.from(e.changedTouches))t.identifier!==this.joyId&&!this.isGameTarget(e.target)||(e.preventDefault(),this.movePoint(t.identifier,t.clientX,t.clientY))};onTouchEnd=e=>{this.enabled&&this.isGameTarget(e.target)&&e.preventDefault();for(const t of Array.from(e.changedTouches))this.end(t.identifier)};dispose(){this.el.removeEventListener("tactical:open",this.clearCombat),this.el.removeEventListener("armory:open",this.clearCombat),this.el.removeEventListener("combat:reset",this.reset),this.reset(),window.PointerEvent?(this.el.removeEventListener("pointerdown",this.onPointerDown),this.el.removeEventListener("pointermove",this.onPointerMove),this.el.removeEventListener("pointerup",this.onPointerUp),this.el.removeEventListener("pointercancel",this.onPointerUp)):(this.el.removeEventListener("touchstart",this.onTouchStart),this.el.removeEventListener("touchmove",this.onTouchMove),this.el.removeEventListener("touchend",this.onTouchEnd),this.el.removeEventListener("touchcancel",this.onTouchEnd)),window.removeEventListener("blur",this.reset),window.removeEventListener("orientationchange",this.reset),document.removeEventListener("visibilitychange",this.onVisibility)}}class hv{constructor(e,t=()=>0){this.boxes=e,this.heightAt=t}groundHeight(e,t){return this.heightAt(e,t)}blocked(e,t,n=.42){return $r(e,t,n,0,this.boxes)}rayBlocked(e,t){return!!this.firstWallHit(e,t.clone().sub(e).normalize(),e.distanceTo(t))}firstWallHit(e,t,n=30){const s=ji(e,t,n,{boxes:this.boxes,heightAt:this.heightAt});return s<n?e.clone().addScaledVector(t,s):null}}class uv{constructor(e){this.points=e}previous=new Map;choose(e,t="player"){const n=rv(e.map(s=>({x:s.position.x,z:s.position.z,alive:s.alive})),this.previous.get(t),Math.random,this.points);return this.previous.set(t,n),n}}class dv{timers=new Map;kill(e){this.timers.set(e,3)}update(e,t){for(const[n,s]of this.timers)s<=e?(this.timers.delete(n),t(n)):this.timers.set(n,s-e)}}class fv{kills=0;deaths=0;onKill(){this.kills++}onDeath(){this.deaths++}}class Fu{constructor(e){this.el=e}flash=0;directionTime=0;dir="up";damage(e,t,n,s){const r=t.clone().sub(n);r.y=0,r.normalize(),s.y=0,s.normalize();const a=r.dot(s),o=r.x*s.z-r.z*s.x;this.dir=Math.abs(a)>Math.abs(o)?a>0?"up":"down":o>0?"right":"left",this.flash=Math.min(1,Math.max(.65,this.flash+e/18)),this.directionTime=.8,this.el.classList.remove("is-hit"),this.el.offsetWidth,this.el.classList.add("is-hit")}update(e,t){this.flash=Math.max(0,this.flash-e/.45),this.directionTime=Math.max(0,this.directionTime-e);const n={up:"0rad",right:"1.5708rad",down:"3.1416rad",left:"-1.5708rad"};this.el.style.setProperty("--damage-rotation",n[this.dir]),this.el.style.setProperty("--damage-flash",String(this.flash*.72)),this.el.style.setProperty("--low-hp",String(t<=30?.1+(30-t)/180:0)),this.el.style.setProperty("--damage-opacity",String(this.directionTime?Math.min(1,this.directionTime*2):0)),this.flash||this.el.classList.remove("is-hit")}dispose(){this.el.classList.remove("is-hit")}}class pv{group=new qt;rotor=new qt;cabins=[];constructor(){const{radius:e,centerY:t,z:n}=Vt;this.rotor.position.set(0,t,n);for(const[r,a]of[[e,16761648],[e*.72,1482464]]){const o=new Fe(new wc(r,.65,6,64),new tt({color:a}));this.rotor.add(o)}for(let r=0;r<12;r++){const a=new Fe(new yt(.3,e*2,.3),new tt({color:16777215}));a.rotation.z=r*Math.PI/12,this.rotor.add(a)}const s=new Fe(new gi(1.6,1.6,10,12),new tt({color:5625599}));s.rotation.x=Math.PI/2,s.position.set(0,t,n-2),this.group.add(s,this.rotor);for(let r=0;r<Vt.cabins;r++){const a=Lr(r,0).map(o=>{const c=new Fe(new yt(o.maxX-o.minX,o.maxY-o.minY,o.maxZ-o.minZ),new tt({color:o.color}));return this.group.add(c),c});this.cabins.push(a)}this.update(0)}update(e){this.rotor.rotation.z=e/Vt.period*Math.PI*2,this.cabins.forEach((t,n)=>Lr(n,e).forEach((s,r)=>t[r].position.set((s.minX+s.maxX)/2,(s.minY+s.maxY)/2,(s.minZ+s.maxZ)/2)))}dispose(){this.group.traverse(e=>{e instanceof Fe&&(e.geometry.dispose(),e.material.dispose())})}}const ah=[Le(0,0,Wi.width,Wi.depth,0,1685980),Le(0,0,78,62,0,14020080),Le(-65,0,16,180,0,15330801),Le(68,0,16,180,0,15330801),Le(0,-64,184,16,0,15330801),Le(0,76,210,12,0,15330801),Le(0,24,112,12,0,15330801),Le(0,102,92,16,0,10082783)],mv=ah.flatMap((i,e)=>xh(i,[...Ds,...ah.slice(e+1)]));function gv(i){const e=new Map;for(const t of i){const n=e.get(t.maxY)||[];n.push(t),e.set(t.maxY,n)}return[...e.values()].flatMap(t=>t.flatMap((n,s)=>xh(n,t.slice(s+1).filter(r=>r.minX<n.maxX&&r.maxX>n.minX&&r.minZ<n.maxZ&&r.maxZ>n.minZ))))}function oh(i){return i.maxY===0&&!Ds.some(e=>Math.min(i.maxX,e.maxX)>Math.max(i.minX,e.minX)&&Math.min(i.maxZ,e.maxZ)>Math.max(i.minZ,e.minZ))}const Ha=240,ch=i=>i*i*(3-2*i);function _v(i){const e=(i%Ha+Ha)%Ha;return e<90?{phase:"day",night:0,cycleTime:e}:e<120?{phase:"dusk",night:ch((e-90)/30),cycleTime:e}:e<210?{phase:"night",night:1,cycleTime:e}:{phase:"dawn",night:1-ch((e-210)/30),cycleTime:e}}function vv(i,e){return i.environmentTime+Math.max(0,Math.min(.25,(e-i.serverTime)/1e3))}class Ou{group=new qt;wheel=new pv;boxes=Yt;spawns=Rc;waypoints=Sd;lift=[];palette=[];pools=new qt;poolMaterial=new tt({color:16768402,transparent:!0,opacity:0,depthWrite:!1});unitBox=new yt(1,1,1);openTopBox=this.unitBox.clone();groundPlane=new _i(1,1).rotateX(-Math.PI/2);matrix=new dt;daySky=new Ue(1489372);sunset=new Ue(13072804);nightSky=new Ue(1051701);sky=new Ue;lastNight=-1;groundHeight(e,t){return ns(e,t)}constructor(){this.group.add(this.wheel.group,this.pools),this.openTopBox.setIndex(Array.from(this.unitBox.index.array).filter((s,r)=>r<12||r>=18)),this.openTopBox.clearGroups();const e=new Set(jc),t=[...Yt.filter(s=>s.maxY>0&&!e.has(s)),Le(0,62,44,20,12,1608656),Le(4,100,32,24,6,7953112)];this.drawSolids(t),this.drawBoxes(Cd),this.makeGlasshouseWindows(),this.drawBoxes(Yt.filter(s=>s.maxY<=0&&!oh(s)),void 0,!0),this.drawBoxes(Yt.filter(oh),void 0,!0,this.openTopBox),this.drawBoxes(mv,void 0,!1,this.groundPlane,!0);for(const s of vh)this.ramp(s.x,s.z0,s.x,s.z1,s.from,s.to,s.width);this.ramp(-20.5,40,-20.5,52,0,12,9),this.ramp(-38,100,-12,100,0,6,24);for(const s of Ki){s.kind==="ramp"&&this.ramp(0,s.outer,0,s.inner,0,-6,6);const r=this.sign(`B1  ${s.name}  MALL`,s.axis==="z"?0:s.outer,2.8,s.axis==="z"?s.outer:s.cross,7733217);r.rotation.y=s.name==="NORTH"?Math.PI:s.name==="WEST"?-Math.PI/2:s.name==="EAST"?Math.PI/2:0}this.makeWindows(),this.makeStreet(),this.makeMall(),this.lift=Ir(0).map(s=>{const r=new Fe(new yt(s.maxX-s.minX,s.maxY-s.minY,s.maxZ-s.minZ),new tt({color:s.color}));return this.group.add(r),r});for(const s of Ts)this.sign(s.name,s.x,5,s.z+12.35,s.color);this.sign("SKY WALK  /  6m",0,7.8,38.15,16761648),this.sign("FERRIS PLAZA",0,3,-85,16731800),this.sign("LIFT  0 / 6 / 12",68,13.6,25.75,16731800),this.sign(ic.name,58,5.25,116.3,10082783);const n=new Set;this.group.traverse(s=>{if(!(s instanceof Fe))return;const r=Array.isArray(s.material)?s.material:[s.material];for(const a of r){if(!(a instanceof tt)||a===this.poolMaterial||n.has(a))continue;n.add(a);const o=a.color.getHex(),c=[15330801,14020080,10082783,16777215].includes(o),l=a.userData.glow;this.palette.push({material:a,base:a.color.clone(),night:a.userData.fixedLight?1:c?.63:.38,glow:l===void 0?void 0:new Ue(l)})}}),this.wheel.group.traverse(s=>{if(s instanceof Fe){const r=this.palette.find(a=>a.material===s.material);if(r){r.night=.85;const a=r.base.getHex();a===16761648&&(r.glow=new Ue(16742616)),a===1482464&&(r.glow=new Ue(10192383))}}}),this.update(0,0)}drawBoxes(e,t,n=!1,s=this.unitBox,r=!1){const a=new Map;for(const o of e){const c=a.get(o.color)||[];c.push(o),a.set(o.color,c)}for(const[o,c]of a){const l=new tt({color:o});l.userData.fixedLight=n,t!==void 0&&(l.userData.glow=t);const h=new br(s,l,c.length);c.forEach((d,u)=>{this.matrix.makeScale(d.maxX-d.minX,r?1:d.maxY-d.minY,d.maxZ-d.minZ),this.matrix.setPosition((d.minX+d.maxX)/2,r?d.maxY:(d.minY+d.maxY)/2,(d.minZ+d.maxZ)/2),h.setMatrixAt(u,this.matrix)}),h.instanceMatrix.needsUpdate=!0,this.group.add(h)}}drawSolids(e){const t=new Map,n=s=>{let r=t.get(s);return r||(r={positions:[],indices:[]},t.set(s,r)),r};for(const s of e){const r=n(s.color),a=r.positions.length/3;for(const o of[s.minY,s.maxY])r.positions.push(s.minX,o,s.minZ,s.maxX,o,s.minZ,s.maxX,o,s.maxZ,s.minX,o,s.maxZ);for(const o of[0,1,2,0,2,3,0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0])r.indices.push(a+o)}for(const s of gv(e)){const r=n(s.color),a=r.positions.length/3;r.positions.push(s.minX,s.maxY,s.minZ,s.maxX,s.maxY,s.minZ,s.maxX,s.maxY,s.maxZ,s.minX,s.maxY,s.maxZ);for(const o of[0,2,1,0,3,2])r.indices.push(a+o)}for(const[s,r]of t){const a=new Tt;a.setAttribute("position",new ft(r.positions,3)),a.setIndex(r.indices),this.group.add(new Fe(a,new tt({color:s})))}}makeGlasshouseWindows(){const e=new tt({color:13234669,transparent:!0,opacity:.28,depthWrite:!1});for(const t of jc){const n=new Fe(this.unitBox,e);n.scale.set(t.maxX-t.minX,t.maxY-t.minY,t.maxZ-t.minZ),n.position.set((t.minX+t.maxX)/2,(t.minY+t.maxY)/2,(t.minZ+t.maxZ)/2),this.group.add(n)}}ramp(e,t,n,s,r,a,o){const c=Math.hypot(n-e,s-t),l=(s-t)/c*o/2,h=-(n-e)/c*o/2,d=Math.min(r,a)-.1,u=[e-l,r,t-h,e+l,r,t+h,n+l,a,s+h,n-l,a,s-h,e-l,d,t-h,e+l,d,t+h,n+l,d,s+h,n-l,d,s-h],f=new Tt;f.setAttribute("position",new ft(u,3)),f.setIndex([0,1,2,0,2,3,4,6,5,4,7,6,0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0]),f.computeVertexNormals(),this.group.add(new Fe(f,new tt({color:16761648,side:jt})))}makeWindows(){const e=[];for(const t of Ts)for(const n of[0,6])for(const s of[-1,1])for(const r of["x","z"])for(const[a,o]of[[-9,5.4],[-4,3.4],[4,3.4],[9,5.4]]){const c=(l,h,d,u)=>e.push(r==="x"?Le(t.x+s*12.27,t.z+l,.05,h,d+u/2,13959158,d-u/2):Le(t.x+l,t.z+s*12.27,h,.05,d+u/2,13959158,d-u/2));for(const l of[n+1.23,n+3.47])c(a,o,l,.08);for(const l of[a-o/2,a+o/2])c(l,.08,n+2.35,2.3);(t.name.includes("STUDIO")||t.name.includes("GALLERY"))&&c(a,.06,n+2.35,2.3),(t.name.includes("GARDEN")||t.name.includes("MARKET"))&&c(a,o,n+2.7,.06)}this.drawBoxes(e,7733217)}makeMall(){this.drawBoxes([Le(0,2,32,24,-5.98,12824031,-6),...[-14,18].map(t=>Le(0,t,176,8,-5.98,5748926,-6)),...[-64,64].map(t=>Le(t,2,8,40,-5.98,5748926,-6))],void 0,!0);const e=[];for(const t of yh){this.sign(t.name,t.x,-1.4,8.2,t.color),this.sign(t.name,t.x,-1.4,-4.2,t.color);for(const n of[-4.2,8.2])e.push(Le(t.x,n,8,.08,-.65,t.color,-.8))}for(const t of[-14,18])e.push(Le(0,t,168,.35,-.42,7733217,-.5));for(const t of[-64,0,64])e.push(Le(t,2,.35,38,-.42,16766838,-.5));this.drawBoxes(e,void 0,!0),this.sign("B1  COLOR MALL",0,-1.6,2,7733217),this.sign("NORTH EXIT",0,-1.5,-20,7733217),this.sign("SOUTH EXIT",0,-1.5,24,7733217).rotation.y=Math.PI,this.sign("WEST EXIT",-88,-1.5,9,7733217).rotation.y=Math.PI/2,this.sign("EAST EXIT",88,-1.5,9,7733217).rotation.y=-Math.PI/2}makeStreet(){const e=new gi(.28,.4,3,6),t=new Ec(1,0),n=new br(e,new tt({color:16754476}),gr.length),s=new br(t,new tt({color:16777215}),gr.length*5),r=[16731818,16765774,5168565,10021195,6740479];gr.forEach(([c,l],h)=>{this.matrix.makeTranslation(c,2.1,l),n.setMatrixAt(h,this.matrix);for(let d=0;d<5;d++){const u=d*Math.PI*2/5;this.matrix.makeScale(1.1,1.15,1.1),this.matrix.setPosition(c+Math.sin(u)*1.1,3.7+d%2*.8,l+Math.cos(u)*1.1),s.setMatrixAt(h*5+d,this.matrix),s.setColorAt(h*5+d,new Ue(r[d]))}}),this.group.add(n,s);const a=$a.map(([c,l])=>Le(c+.65,l,1.5,.65,4.9,16773841,4.6));this.drawBoxes(a,16769948);const o=new Mc(4.5,16);for(const[c,l]of $a){const h=new Fe(o,this.poolMaterial);h.rotation.x=-Math.PI/2,h.position.set(c+.65,.045,l),this.pools.add(h)}}sign(e,t,n,s,r){const a=document.createElement("canvas");a.width=512,a.height=96;const o=a.getContext("2d");o.fillStyle="#12203b",o.fillRect(0,0,512,96),o.strokeStyle="#"+r.toString(16).padStart(6,"0"),o.lineWidth=10,o.strokeRect(3,3,506,90),o.fillStyle="#ffffff",o.font="bold 32px Arial",o.textAlign="center",o.fillText(e,256,60);const c=new tt({map:new lu(a),side:jt});c.userData.glow=16777215;const l=new Fe(new _i(8,1.5),c);return l.position.set(t,n,s),this.group.add(l),l}update(e,t=e,n){this.wheel.update(e),Ir(e).forEach((r,a)=>this.lift[a]?.position.set((r.minX+r.maxX)/2,(r.minY+r.maxY)/2,(r.minZ+r.maxZ)/2));const{night:s}=_v(t);if(Math.abs(s-this.lastNight)>1e-5){for(const r of this.palette)r.material.color.copy(r.base),r.glow?r.material.color.lerp(r.glow,s):r.material.color.multiplyScalar(1-s*(1-r.night));this.poolMaterial.opacity=s*.16,this.pools.visible=s>.01,this.lastNight=s}n&&(s<.5?this.sky.copy(this.daySky).lerp(this.sunset,s*2):this.sky.copy(this.sunset).lerp(this.nightSky,s*2-1),n.setClearColor(this.sky))}dispose(){this.group.removeFromParent(),Qr(this.group),this.group.clear()}}class Bu{position=new P(-10,1.65,-10);velocityY=0;jumpsUsed=0;supportId=null;hp=100;alive=!0;kills=0;deaths=0;yaw=0;pitch=0;color=5285631;respawn(e){this.position.set(e[0],rc(e[0],e[1])+Sn,e[1]),this.velocityY=0,this.jumpsUsed=0,this.supportId=null,this.hp=100,this.alive=!0}damage(e){this.hp=Math.max(0,this.hp-e),this.hp||(this.alive=!1)}}class xv{update(e,t,n,s,r=1,a){const o={x:e.position.x,y:e.position.y,z:e.position.z,yaw:e.yaw,pitch:e.pitch,velocityY:e.velocityY,supportId:e.supportId,jumpsUsed:e.jumpsUsed,alive:e.alive};cc(o,t,n,{boxes:s.boxes,heightAt:(c,l)=>s.groundHeight(c,l)},r,a),e.position.set(o.x,o.y,o.z),e.yaw=o.yaw,e.pitch=o.pitch,e.supportId=o.supportId??null,e.velocityY=o.velocityY,e.jumpsUsed=o.jumpsUsed}}class yv{constructor(e){this.spec=e,this.rounds=e.magazine}rounds;cooldown=0;reloadTime=0;get ammo(){return this.rounds}get reserve(){return 1/0}get reloading(){return this.reloadTime>0}update(e,t){return this.reloadTime>0?(this.reloadTime-=e,this.reloadTime<=0&&(this.rounds=this.spec.magazine),{fired:!1,empty:!1,autoReload:!1}):(this.cooldown-=e,t&&this.cooldown<=0&&this.rounds>0?(this.rounds--,this.cooldown=this.spec.fireDelay,{fired:!0,empty:!1,autoReload:!1}):t&&this.rounds===0?(this.reload(),{fired:!1,empty:!1,autoReload:!0}):{fired:!1,empty:!1,autoReload:!1})}reload(){this.rounds<this.spec.magazine&&!this.reloading&&(this.reloadTime=this.spec.reloadTime)}addReserve(e){}}class ku{constructor(e,t,n,s=""){this.id=e,this.name=t,this.color=n;const r=new tt({color:n}),a=(h,d,u,f,_="body")=>{const y=new Fe(h,r);y.position.set(d,u,f),this.group.add(y),this.parts.push(y),_==="arm"&&this.arms.push(y),_==="leg"&&this.legs.push(y)};a(new yt(.68,.82,.38),0,1.22,0),a(new yt(.52,.52,.52),0,1.92,0),a(new yt(.16,.58,.16),-.48,1.32,0,"arm"),a(new yt(.16,.58,.16),.48,1.32,0,"arm"),a(new yt(.19,.67,.19),-.22,.46,0,"leg"),a(new yt(.19,.67,.19),.22,.46,0,"leg"),this.gun=new Fe(new yt(.14,.14,.72),new tt({color:1581102})),this.gun.position.set(.34,1.38,-.28),this.gun.rotation.x=-.22,this.group.add(this.gun);const o=document.createElement("canvas");o.width=320,o.height=72;const c=o.getContext("2d");c.fillStyle="#fff",c.font="bold 40px Arial",c.textAlign="center",c.fillText(t,160,48);const l=new ru(new iu({map:new lu(o),transparent:!0,depthTest:!0,depthWrite:!1}));l.position.set(0,2.9,0),l.scale.set(3.2,.72,1),this.group.add(l)}group=new qt;position=new P;deathGroup=new qt;hp=100;alive=!0;cooldown=0;parts=[];arms=[];legs=[];pieces=[];walk=0;reaction=0;gun;disposed=!1;clearPieces(){for(const e of this.pieces)e.mesh.material.dispose();this.pieces=[],this.deathGroup.clear()}dispose(){this.disposed||(this.disposed=!0,this.clearPieces(),this.group.removeFromParent(),this.deathGroup.removeFromParent(),Qr(this.group),this.group.clear())}muzzlePosition(e=new P){return this.group.localToWorld(e.set(.34,1.38,-.7))}respawn(e,t){this.position.set(e,0,t),this.group.position.copy(this.position),this.hp=100,this.reaction=0,this.parts[0].material.color.setHex(this.color),this.alive=!0,this.group.visible=!0,this.deathGroup.visible=!1,this.clearPieces()}damage(e){this.hp=Math.max(0,this.hp-e),this.reaction=.16,this.hp||this.die()}hit(){this.alive&&(this.reaction=.16)}die(){this.alive=!1,this.group.visible=!1,this.clearPieces(),this.deathGroup.position.copy(this.position),this.deathGroup.visible=!0,this.pieces=this.parts.map((e,t)=>{const n=new Fe(e.geometry,e.material.clone());return n.position.copy(e.position),n.rotation.copy(e.rotation),this.deathGroup.add(n),{mesh:n,velocity:new P((Math.random()-.5)*3,2+Math.random()*2,(Math.random()-.5)*3),spin:new P(Math.random()*8,Math.random()*8,Math.random()*8),life:1.1+t*.02}})}updateVisual(e,t,n){if(!this.alive){for(const r of this.pieces)r.life-=e,r.velocity.y-=11*e,r.mesh.position.addScaledVector(r.velocity,e),r.mesh.rotation.x+=r.spin.x*e,r.mesh.rotation.y+=r.spin.y*e,r.mesh.rotation.z+=r.spin.z*e,r.mesh.visible=r.life>0;this.pieces.length&&this.pieces.every(r=>r.life<=0)&&this.clearPieces();return}this.walk+=t?e*10:e*3;const s=t?Math.sin(this.walk)*.55:0;this.legs.forEach((r,a)=>r.rotation.x=(a?1:-1)*s),this.arms.forEach((r,a)=>r.rotation.x=(n?-.72:0)+(a?1:-1)*s*.45),this.group.rotation.z=0,this.reaction=Math.max(0,this.reaction-e),this.parts[0].material.color.setHex(this.color).lerp(new Ue(16777215),this.reaction/.16*.65)}}function Is(i,e){const t=Math.ceil(Math.hypot(e.x-i.x,e.y-i.y,e.z-i.z)*2);for(let n=0;n<=t;n++){const s=t?n/t:0,r=i.x+(e.x-i.x)*s,a=i.z+(e.z-i.z)*s,o=i.y+(e.y-i.y)*s;if(Math.abs(r-Ji.x)<2.8&&Math.abs(a-Ji.z)<2.8||Math.abs(r-Vt.x)<Vt.radius+4&&Math.abs(a-Vt.z)<3.5||$r(r,a,.45,o+.35)||Math.abs(to(r,a,o+.35)-o)>.38)return!1}return!0}let Ga;function zu(){if(Ga)return Ga;const i=[],e=new Map,t=(r,a,o)=>(i.push({x:r,y:a,z:o,edges:[]}),i.length-1),n=(r,a)=>{Is(i[r],i[a])&&(i[r].edges.push(a),i[a].edges.push(r))};for(let r=-144;r<=144;r+=8)for(let a=-128;a<=128;a+=8){const o={x:r,y:0,z:a};Is(o,o)&&e.set(`${r},${a}`,t(r,0,a))}for(const[r,a]of e){const[o,c]=r.split(",").map(Number);for(const[l,h]of[[8,0],[0,8],[8,8],[8,-8]]){const d=e.get(`${o+l},${c+h}`);d!==void 0&&n(a,d)}}const s=[];for(const r of[-88,-64,-51.5,-42.5,-33.5,-24.5,0,24.5,33.5,42.5,51.5,64,88])for(const a of[-14,18])s.push(t(r,-6,a));for(const r of[-88,-64,0,64,88])s.push(t(r,-6,9));for(const r of s)for(const a of s)r<a&&Math.hypot(i[r].x-i[a].x,i[r].z-i[a].z)<=30&&n(r,a);for(const r of Ki){const a=Math.sign(r.outer-r.inner),o=(h,d)=>r.axis==="z"?{x:0,y:d,z:h}:{x:h,y:d,z:9};let c=-1,l=-1;for(let h=0;h<=14;h++){const d=Math.max(0,Math.min(1,(h-1)/12)),u=o(h===0?r.outer+a:h===14?r.inner-a:r.outer+(r.inner-r.outer)*d,-6*d),f=t(u.x,u.y,u.z);c>=0?n(c,f):l=f,c=f}for(const h of e.values())Math.hypot(i[h].x-i[l].x,i[h].z-i[l].z)<13&&n(l,h);for(const h of s)Math.hypot(i[h].x-i[c].x,i[h].z-i[c].z)<20&&n(c,h)}return Ga=i,i}function lh(i,e){return e.map((n,s)=>({id:s,d:Math.hypot(n.x-i.x,n.z-i.z)+Math.abs(n.y-i.y)*4})).sort((n,s)=>n.d-s.d).find(({id:n,d:s})=>s<30&&Is(i,e[n]))?.id}function Sv(i,e){const t=zu(),n=lh(i,t),s=lh(e,t);if(n===void 0||s===void 0)return[];const r=new Set([n]),a=new Map([[n,0]]),o=new Map;for(;r.size;){let c=-1,l=1/0;for(const h of r){const d=t[h],u=t[s],f=a.get(h)+Math.hypot(d.x-u.x,d.y-u.y,d.z-u.z);f<l&&(c=h,l=f)}if(c===s){const h=[s];for(;o.has(h[0]);)h.unshift(o.get(h[0]));for(;h.length>1&&Is(i,t[h[1]]);)h.shift();return[...h.map(d=>t[d]),...Is(t[s],e)?[e]:[]]}r.delete(c);for(const h of t[c].edges){const d=t[c],u=t[h],f=a.get(c)+Math.hypot(d.x-u.x,d.y-u.y,d.z-u.z);f<(a.get(h)??1/0)&&(a.set(h,f),o.set(h,c),r.add(h))}}return[]}class Mv{routes=new Map;canSee(e,t,n,s=38){return e.alive&&t.alive&&e.position.distanceTo(t.position)<s&&!n.rayBlocked(e.position.clone().add(new P(0,1.3,0)),t.position)}update(e,t,n,s,r,a,o){if(!e.alive||!t.alive)return;e.cooldown-=n;const c=this.canSee(e,t,s,55),l=e.position.distanceTo(t.position),h={x:e.position.x,y:e.position.y,z:e.position.z};let d=this.routes.get(e.id);d&&d.last.distanceTo(e.position)>5&&(d=void 0),d||(d={path:[],remaining:0,goal:h,velocityY:0,last:e.position.clone()},this.routes.set(e.id,d)),d.remaining-=n;const u={x:t.position.x,y:t.position.y-1.65,z:t.position.z};if(u.y>1&&(u.y=0),d.remaining<=0){if(c||u.y<-2||h.y<-2)d.goal=u;else if(!d.path.length){const R=zu().filter(S=>S.y===0);d.goal=R[Math.floor(Math.random()*R.length)]}d.path=Sv(h,d.goal),d.remaining=.75}for(;d.path.length&&Math.hypot(d.path[0].x-h.x,d.path[0].z-h.z)<.25&&Math.abs(d.path[0].y-h.y)<.4;)d.path.shift();const f=d.path[0];let _=0,y=0;f&&(_=f.x-h.x,y=f.z-h.z);const m=f?Math.min(n,Math.hypot(_,y)/3.2):n,p={...h,y:h.y+1.65,yaw:0,pitch:0,velocityY:d.velocityY,jumpsUsed:0,alive:!0};cc(p,{moveX:_,moveY:-y,lookX:0,lookY:0,jump:!1},m,{boxes:s.boxes,heightAt:(b,R)=>s.groundHeight(b,R)},3.2/ja),e.position.set(p.x,p.y-1.65,p.z),d.velocityY=p.velocityY,d.last.copy(e.position),e.group.position.copy(e.position),(_||y)&&(e.group.rotation.y=Math.atan2(-_,-y)),a&&l<38&&c&&e.cooldown<=0&&(e.cooldown=1.5+Math.random()*.8,o(Math.random()<Math.max(.18,.35-Math.max(0,l-12)*.0065)))}}const hh=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);class Hu{constructor(e){this.el=e,this.death.className="co-dead",this.death.hidden=!0,this.el.parentElement?.append(this.death)}death=document.createElement("div");wasDead=!1;hideTimer=0;signature="";render(e){const t=Number.isFinite(e.reserve)?e.reserve:"∞",n=e.remainingSeconds??0,s=e.score===void 0?`擊殺 ${e.kills} <span>／</span> 死亡 ${e.deaths}`:`積分 ${e.score} / ${e.scoreTarget}<small>賞金 ${e.bounty} · ${Math.floor(n/60)}:${String(n%60).padStart(2,"0")} · K/D ${e.kills}/${e.deaths}</small>`,r=`${e.hp}|${e.ammo}|${t}|${e.label}|${e.notice}|${e.kills}|${e.deaths}|${e.kill}|${e.reloading}|${s}`;r!==this.signature&&(this.signature=r,this.el.innerHTML=`<div class="co-score">${s}</div><div class="co-hp">生命值 <b>${e.hp}</b></div><div class="co-ammo">${e.label}<br><b>${e.ammo} <small>/ ${t}</small></b>${e.reloading?"<em>換彈中</em>":""}</div>${e.notice?`<div class="co-notice">${hh(e.notice)}</div>`:""}<i class="co-crosshair ${e.kill?"is-kill":""}"></i>`),e.dead&&!this.wasDead&&(window.clearTimeout(this.hideTimer),this.death.hidden=!1,this.death.classList.remove("is-leaving"),this.death.innerHTML=`<section class="co-dead-card"><p>戰鬥結束</p><h2>你已陣亡</h2><div class="co-dead-killer">擊倒者 <b>${hh(e.killer||"未知敵人")}</b></div><small>正在準備重生…</small></section>`),!e.dead&&this.wasDead&&(this.death.classList.add("is-leaving"),this.hideTimer=window.setTimeout(()=>{this.death.hidden=!0,this.death.classList.remove("is-leaving")},180)),this.el.parentElement?.classList.toggle("co-is-dead",e.dead),this.wasDead=e.dead}dispose(){window.clearTimeout(this.hideTimer),this.death.remove(),this.el.replaceChildren(),this.el.parentElement?.classList.remove("co-is-dead")}}const Gu=()=>'<div class="co-mobile"><div class="co-joy"><i></i></div><div class="co-actions"><button data-weapon>武器庫</button><button data-reload>換彈</button><button data-jump aria-label="跳躍，空中再按一次二段跳">跳躍</button><button data-sprint aria-label="切換跑步" aria-pressed="false">跑步</button><button data-aim aria-label="切換狙擊鏡" aria-pressed="false" disabled>瞄準</button><button data-fire>射擊</button></div></div><div class="co-rotate">請旋轉裝置後遊玩</div>';class Vu{constructor(e,t,n,s){this.root=e,this.choose=t,this.owned=n,this.afterClose=s;const r=this.coarse?"左右滑動選擇，點擊已取得武器裝備":"滾輪瀏覽，點擊已取得武器裝備";e.insertAdjacentHTML("beforeend",`<div class="co-armory" hidden><div class="co-armory-head">武器庫<small>${r}</small></div><div class="co-armory-track"></div></div>`),this.box=e.querySelector(".co-armory"),this.track=this.box.querySelector(".co-armory-track"),this.track.innerHTML=Jt.map(a=>{const o=Lt[a];return`<button type="button" class="co-weapon-card" data-armory="${a}" style="--weapon:#${o.color.toString(16).padStart(6,"0")}"><span>${o.icon}</span><b>${o.label}</b><small></small><em>${o.magazine} 發彈匣</em></button>`}).join(""),e.addEventListener("pointerdown",this.onPointerDown,!0),window.addEventListener("pointermove",this.onPointerMove,!0),window.addEventListener("pointerup",this.onPointerUp,!0),window.addEventListener("pointercancel",this.onPointerCancel,!0),window.PointerEvent||(e.addEventListener("touchstart",this.onTouchStart,{capture:!0,passive:!1}),window.addEventListener("touchmove",this.onTouchMove,!0),window.addEventListener("touchend",this.onTouchEnd,!0),window.addEventListener("touchcancel",this.onTouchEnd,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("wheel",this.onWheel,{passive:!1}),e.addEventListener("armory",this.onArmory),window.addEventListener("keydown",this.onKey),this.render("ar")}skipOpeningClick=!1;suppressClick=!1;gestures=new Map;enabled=!0;open=!1;selected=0;active="ar";signature="";box;track;coarse=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>0;equip(e){return this.owned().has(e)?(this.choose(e),this.active=e,this.render(e),this.close(),!0):!1}consume(e){e.preventDefault(),e.stopImmediatePropagation()}start(e,t,n,s,r){if(!this.open){this.suppressClick=!1;return}if(!this.open||!(s instanceof HTMLElement))return;this.skipOpeningClick=!1,this.gestures.size||(this.suppressClick=!1);const a=this.box.contains(s);this.gestures.set(e,{x:t,y:n,inside:a,moved:!1}),a||this.consume(r)}moveGesture(e,t,n){const s=this.gestures.get(e);s&&Math.hypot(t-s.x,n-s.y)>8&&(s.moved=!0,this.suppressClick=!0)}end(e,t,n=!1){const s=this.gestures.get(e);s&&(this.gestures.delete(e),(n||s.moved)&&(this.suppressClick=!0),s.inside||(this.consume(t),!n&&!s.moved&&this.close(),this.suppressClick=!0))}onPointerDown=e=>{e.button===0&&this.start(e.pointerId,e.clientX,e.clientY,e.target,e)};onPointerMove=e=>this.moveGesture(e.pointerId,e.clientX,e.clientY);onPointerUp=e=>{this.moveGesture(e.pointerId,e.clientX,e.clientY),this.end(e.pointerId,e)};onPointerCancel=e=>this.end(e.pointerId,e,!0);onTouchStart=e=>{for(const t of Array.from(e.changedTouches))this.start(t.identifier,t.clientX,t.clientY,e.target,e)};onTouchMove=e=>{for(const t of Array.from(e.changedTouches))this.moveGesture(t.identifier,t.clientX,t.clientY)};onTouchEnd=e=>{for(const t of Array.from(e.changedTouches))this.moveGesture(t.identifier,t.clientX,t.clientY),this.end(t.identifier,e,e.type==="touchcancel")};onClick=e=>{if(this.suppressClick){this.suppressClick=!1,this.consume(e);return}if(!this.open||!(e.target instanceof HTMLElement))return;if(this.skipOpeningClick){this.skipOpeningClick=!1,this.consume(e);return}if(this.consume(e),!this.box.contains(e.target)){this.close();return}const t=e.target.closest("[data-armory]");if(!t)return;const n=t.dataset.armory,s=Jt.indexOf(n);s<0||(this.selected=s,this.render(),this.equip(n))};onWheel=e=>{this.open&&(e.preventDefault(),this.move(e.deltaY>0?1:-1))};onArmory=()=>{this.toggle(),this.skipOpeningClick=this.open};onKey=e=>{!this.enabled||e.repeat||e.key.toLowerCase()!=="q"||e.target instanceof HTMLElement&&e.target.closest("input, textarea, select, [contenteditable]")||(e.preventDefault(),this.toggle())};get isOpen(){return this.open}setEnabled(e){this.enabled=e,e||this.close()}close(){this.open&&(this.open=!1,this.skipOpeningClick=!1,this.gestures.clear(),this.box.hidden=!0,this.signature="",this.afterClose?.())}toggle(){if(!this.enabled)return;if(this.open){this.close();return}this.suppressClick=!1,this.root.dispatchEvent(new Event("armory:open")),this.open=!0,this.box.hidden=!1;const e=Jt.indexOf(this.active);e>=0&&(this.selected=e),this.render(),this.scrollSelected(!1)}move(e){this.selected=(this.selected+e+Jt.length)%Jt.length,this.render(),this.scrollSelected()}render(e=this.active){this.active=e,this.box.hidden=!this.open;const t=this.owned(),n=`${this.open}|${e}|${this.selected}|${Jt.map(s=>t.has(s)?1:0).join("")}`;n!==this.signature&&(this.signature=n,Jt.forEach((s,r)=>{const a=this.track.children[r],o=t.has(s),c=Lt[s];a.classList.toggle("active",s===e),a.classList.toggle("focus",r===this.selected),a.classList.toggle("locked",!o),a.setAttribute("aria-disabled",String(!o)),a.querySelector("small").textContent=o?c.description:"尚未取得"}))}scrollSelected(e=!0){requestAnimationFrame(()=>{this.open&&this.track.children[this.selected]?.scrollIntoView({behavior:e?"smooth":"auto",block:"nearest",inline:"center"})})}dispose(){this.gestures.clear(),this.box.remove(),this.root.removeEventListener("pointerdown",this.onPointerDown,!0),this.root.removeEventListener("touchstart",this.onTouchStart,!0),window.removeEventListener("pointermove",this.onPointerMove,!0),window.removeEventListener("pointerup",this.onPointerUp,!0),window.removeEventListener("pointercancel",this.onPointerCancel,!0),window.removeEventListener("touchmove",this.onTouchMove,!0),window.removeEventListener("touchend",this.onTouchEnd,!0),window.removeEventListener("touchcancel",this.onTouchEnd,!0),this.root.removeEventListener("click",this.onClick,!0),this.root.removeEventListener("wheel",this.onWheel),this.root.removeEventListener("armory",this.onArmory),window.removeEventListener("keydown",this.onKey)}}class Wu{constructor(e){this.update=e}id=0;last=0;running=!1;start(){if(this.running)return;this.running=!0,this.last=0;const e=t=>{if(!this.running)return;const n=Math.min(.05,(t-this.last)/1e3||0);this.last=t,this.update(n),this.running&&(this.id=requestAnimationFrame(e))};this.id=requestAnimationFrame(e)}stop(){this.running=!1,cancelAnimationFrame(this.id),this.id=0,this.last=0}}class Ev{constructor(e){this.root=e;const t=new Eu;this.renderer=new Mu({antialias:t.antialias,powerPreference:"high-performance"}),this.renderer.setPixelRatio(t.pixelRatio),this.renderer.setClearColor(1489372),e.append(this.renderer.domElement),e.insertAdjacentHTML("beforeend",'<div class="co-feedback"></div><div class="co-hud"></div>'+Gu()),this.hud=new Hu(e.querySelector(".co-hud")),this.aimFeedback=new Ih(e),this.armory=new Vu(e,r=>{this.owned.has(r)&&(this.input.set({aim:!1}),this.active=r,this.armory.render(this.active))},()=>this.owned,this.restorePointerLock),this.feedback=new Fu(e.querySelector(".co-feedback")),this.scene.add(this.arena.group,new du(16777215,1489372,2)),this.effects=new wu(this.scene,this.coarse),this.battle=new Tu(e),this.makeGun(),this.scope=new bu(e,this.gun,this.coarse);const n=[16731770,3594436,16235083,10975231,5285631,16739127,3656447,9626447],s=["RED","BLUE","GREEN","YELLOW","PURPLE","ORANGE","CYAN","LIME"];n.forEach((r,a)=>{const o=new ku("bot"+a,s[a],r);o.respawn(...this.spawns.choose(this.bots,o.id)),this.bots.push(o),this.scene.add(o.group,o.deathGroup)}),this.player.respawn(this.spawns.choose(this.bots)),Jt.filter(r=>r!=="ar").forEach(r=>this.addPickup(r)),this.coarse?this.mobile=new Uu(e,this.input):(this.desktop=new Nu(e,this.input),e.onclick=r=>{r.target.closest(".co-armory, [data-game-ui], button, input")||this.restorePointerLock()}),this.resize=()=>{this.cam.aspect=e.clientWidth/e.clientHeight,this.cam.updateProjectionMatrix(),this.renderer.setSize(e.clientWidth,e.clientHeight,!1)},window.addEventListener("resize",this.resize),this.resize(),this.loop=new Wu(r=>this.update(r)),this.settings=new Iu(e,()=>{this.root.dispatchEvent(new Event("combat:reset")),this.desktop?.setEnabled(!1),this.mobile?.setEnabled(!1),this.armory.setEnabled(!1),this.loop.stop()},r=>{this.desktop?.setEnabled(!0),this.mobile?.setEnabled(!0),this.armory.setEnabled(!0),this.loop.start(),r&&this.restorePointerLock()},!1)}scene=new yc;cam=new Xt(75,1,Ac,bs);renderer;input=new Du;arena=new Ou;collision=new hv(this.arena.boxes,(e,t)=>this.arena.groundHeight(e,t));player=new Bu;controller=new xv;bots=[];ai=new Mv;spawns=new uv(this.arena.spawns);respawn=new dv;weapons=new Map(Jt.map(e=>[e,new yv(Lt[e])]));active="ar";owned=new Set(["ar"]);pickups=[];hud;aimFeedback;armory;feedback;effects;battle;killTracker=new Fd("solo");shotSequence=0;elapsed=0;status=new Map;statusTimer=0;loop;settings;desktop;mobile;mode=new fv;hit=0;kill=0;shake=0;notice="";noticeT=0;gun=new qt;gunFlash;dead=!1;killer="";coarse=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>0;resize=()=>{};scope;aiming=!1;restorePointerLock=()=>{if(!(this.coarse||this.settings?.isOpen||document.pointerLockElement===this.root))try{this.root.requestPointerLock?.()?.catch(()=>{})}catch{}};makeGun(){const e=new tt({color:2106932}),t=new tt({color:this.player.color}),n=new Fe(new yt(.18,.16,.9),e);n.position.set(.34,-.28,-.8);for(const[s,r,a,o]of[[.47,-.52,-.5,-.55],[.12,-.55,-.63,.42],[.37,-.43,-.74,0],[.17,-.42,-.86,0]]){const c=new Fe(new yt(.18,.28,.18),t);c.position.set(s,r,a),c.rotation.z=o,this.gun.add(c)}this.gunFlash=new Fe(new es(.08),new tt({color:16766045})),this.gunFlash.position.set(.34,-.25,-1.3),this.gunFlash.visible=!1,this.gun.add(n,this.gunFlash),this.cam.add(this.gun),this.scene.add(this.cam)}pickupPoint(e,t){return ov([this.player,...this.bots].map(n=>({x:n.position.x,y:n.position.y-(n===this.player?1.65:0),z:n.position.z,alive:n.alive})),this.pickups.filter(n=>n.mesh.visible).map(n=>({x:n.position.x,y:n.position.y-.9,z:n.position.z})),e,Math.random,t?av(t):void 0)}addPickup(e){const t=new Fe(new es(.75),new tt({color:Lt[e].color})),n=this.pickupPoint(void 0,e);t.visible=!!n,n&&t.position.set(n.x,n.y+.9,n.z),this.scene.add(t),this.pickups.push({id:e,mesh:t,position:t.position.clone(),cooldown:n?0:.1})}respawnPickup(e){const t=this.pickupPoint({x:e.position.x,y:e.position.y-.9,z:e.position.z});if(!t){e.cooldown=.1;return}e.position.set(t.x,t.y+.9,t.z),e.mesh.position.copy(e.position),e.mesh.visible=!0}resetInput(){this.desktop?.setEnabled(!0),this.mobile?.reset(),this.input.reset()}actors(){return[{id:"player",x:this.player.position.x,y:this.player.position.y,z:this.player.position.z,yaw:this.player.yaw,alive:this.player.alive},...this.bots.map(e=>({id:e.id,x:e.position.x,y:e.position.y+1.65,z:e.position.z,yaw:e.group.rotation.y,alive:e.alive}))]}actor(e){return e==="player"?this.player:this.bots.find(t=>t.id===e)}actorName(e){return e==="player"?"YOU":this.bots.find(t=>t.id===e)?.name??e}damageActor(e,t,n){const s=this.actor(t.targetId),r=this.actor(e);if(!s?.alive||!r)return;const a=Math.min(s.hp,t.damage);s.damage(a);const o=!s.alive;return t.targetId==="player"&&(this.feedback.damage(a,r.position,this.player.position,new P(-Math.sin(this.player.yaw),0,-Math.cos(this.player.yaw))),o&&(this.dead=!0,this.resetInput(),this.killer=this.actorName(e),this.mode.onDeath())),o&&(this.status.delete(t.targetId),this.respawn.kill(t.targetId),e==="player"&&(this.mode.onKill(),this.kill=.3),this.battle.kill(this.killTracker.record({id:e,name:this.actorName(e),alive:r.alive},{id:t.targetId,name:this.actorName(t.targetId)},n,t.headshot,this.elapsed*1e3))),{...t,damage:a,killed:o}}shootActor(e,t,n,s,r){const a=Ud(t,n.toArray(),s.toArray(),this.actors().filter(h=>h.id!==e),Math.random,Qa(this.elapsed),e==="player"&&this.aiming),o=`solo:shot:${++this.shotSequence}`,c={...a,eventId:o,id:e,weapon:t,origin:n.toArray(),dir:s.toArray()};this.effects.play(c,r);const l=[];for(const h of a.hits){const d=this.damageActor(e,h,t);if(d&&(l.push(d),!d.killed&&(t==="ice"||t==="flame"))){const u=this.status.get(h.targetId)??{slowUntil:0};t==="ice"?u.slowUntil=this.elapsed+1.25:u.burn={attackerId:e,nextTick:u.burn?.nextTick??this.elapsed+.25,expiresAt:this.elapsed+2},this.status.set(h.targetId,u)}}e==="player"&&l.length&&(this.hit=.12,this.battle.hit({eventId:o,weapon:t,hits:l}))}fire(){this.cam.position.copy(this.player.position),this.cam.rotation.set(this.player.pitch,this.player.yaw,0,"YXZ"),this.cam.updateMatrixWorld(!0),this.shootActor("player",this.active,this.player.position.clone(),new P(...Rh(this.player.yaw,this.player.pitch)),this.gunFlash.getWorldPosition(new P)),this.shake=.035}updateStatuses(e){this.statusTimer+=e;const t=this.statusTimer>=.08;t&&(this.statusTimer=0);for(const[n,s]of this.status){const r=this.actor(n);if(!r?.alive){this.status.delete(n);continue}for(;s.burn&&s.burn.nextTick<=this.elapsed&&s.burn.nextTick<=s.burn.expiresAt;){const a=s.burn.attackerId;s.burn.nextTick+=.25;const o=this.damageActor(a,{targetId:n,damage:4,headshot:!1,position:[r.position.x,r.position.y+(n==="player"?-.4:1.22),r.position.z]},"flame");if(o&&a==="player"&&this.battle.hit({eventId:`solo:burn:${++this.shotSequence}`,weapon:"flame",hits:[o]}),!r.alive)break}s.burn&&this.elapsed>=s.burn.expiresAt&&(s.burn=void 0),t&&r.alive&&(s.burn||s.slowUntil>this.elapsed)&&this.effects.status(r.position.clone().add(new P(0,n==="player"?-.4:1.22,0)),s.burn?"flame":"ice"),!s.burn&&s.slowUntil<=this.elapsed&&this.status.delete(n)}}update(e){this.elapsed+=e,this.desktop?.update(),this.updateStatuses(e);const t=this.input.getState();if(t.switchWeapon){const o=Jt[t.switchWeapon-1];o&&this.owned.has(o)&&(this.input.set({aim:!1}),t.aim=!1,this.active=o)}const n=this.weapons.get(this.active);t.reload&&n.reload();const s=this.armory.isOpen||!!this.settings?.isOpen;(this.active!=="sniper"||n.reloading||!this.player.alive||s)&&(this.input.set({aim:!1}),t.aim=!1),s&&(t.shoot=!1,this.input.clearCombat()),this.aiming=this.scope.update(this.active,t,this.player.alive,n.reloading,s),this.aiming&&(t.lookX*=.25,t.lookY*=.25),this.controller.update(this.player,t,e,this.collision,(this.status.get("player")?.slowUntil??0)>this.elapsed?.65:1,this.elapsed-e),this.arena.update(this.elapsed,this.elapsed,this.renderer),!this.armory.isOpen&&n.update(e,t.shoot&&this.player.alive).fired&&this.fire(),this.pickups.forEach(o=>{o.mesh.rotation.y+=e*2,o.cooldown>0?(o.cooldown-=e,o.cooldown<=0&&this.respawnPickup(o)):this.player.position.distanceTo(o.position)<2&&(this.owned.add(o.id),this.active=o.id,this.input.set({aim:!1}),this.aiming=!1,o.cooldown=30,o.mesh.visible=!1,this.notice=`取得 ${Lt[o.id].label}`,this.noticeT=1.5,this.armory.render(this.active))});const r=new Set(this.bots.filter(o=>this.ai.canSee(o,this.player,this.collision,38)).sort((o,c)=>o.position.distanceTo(this.player.position)-c.position.distanceTo(this.player.position)).slice(0,3).map(o=>o.id));this.bots.forEach(o=>{const c=o.position.clone();this.ai.update(o,this.player,(this.status.get(o.id)?.slowUntil??0)>this.elapsed?e*.65:e,this.collision,this.arena.waypoints,r.has(o.id),l=>{const h=o.position.clone().add(new P(0,1.65,0)),d=this.player.position.clone().add(new P(0,-.43,0));l||d.add(new P((Math.random()<.5?-1:1)*(1.3+Math.random()),Math.random()*.5,0)),this.shootActor(o.id,"ar",h,d.sub(h).normalize(),o.muzzlePosition())}),o.updateVisual(e,o.position.distanceToSquared(c)>.001,o.alive&&this.player.alive)}),this.respawn.update(e,o=>{if(o==="player")this.player.respawn(this.spawns.choose(this.bots)),this.status.delete("player"),this.resetInput(),this.dead=!1;else{const c=this.bots.find(l=>l.id===o);c&&c.respawn(...this.spawns.choose([this.player,...this.bots.filter(l=>l!==c)],c.id))}}),this.hit=Math.max(0,this.hit-e),this.kill=Math.max(0,this.kill-e),this.noticeT=Math.max(0,this.noticeT-e),this.effects.update(e),this.feedback.update(e,this.player.hp),this.cam.position.copy(this.player.position),this.cam.rotation.set(this.player.pitch,this.player.yaw,0,"YXZ"),this.gun.position.z=this.shake*2,this.gun.rotation.x=this.shake,this.shake=Math.max(0,this.shake-e*.5),this.armory.render(this.active),this.hud.render({hp:this.player.hp,ammo:n.ammo,reserve:n.reserve,label:n.spec.label,notice:this.noticeT?this.notice:"",kills:this.mode.kills,deaths:this.mode.deaths,dead:this.dead,killer:this.killer,hit:this.hit>0,kill:this.kill>0,reloading:n.reloading}),this.cam.updateMatrixWorld(!0),this.battle.update(e,this.cam);const a=Lh({x:this.player.position.x,y:this.player.position.y,z:this.player.position.z,yaw:this.player.yaw,pitch:this.player.pitch});this.aimFeedback.update(s||!this.player.alive?"neutral":Ph(this.active,a.origin,a.direction,this.actors().filter(o=>o.id!=="player"),Qa(this.elapsed)),this.player.alive&&!s),this.scope.render(this.renderer,this.scene,this.cam)}start(){this.loop.start()}dispose(){this.hud.dispose(),this.aimFeedback.dispose();for(const e of this.bots)e.dispose();this.scope.dispose(),this.arena.dispose(),this.settings?.dispose(),this.root.onclick=null,this.loop.stop(),window.removeEventListener("resize",this.resize),this.desktop?.dispose(),this.mobile?.dispose(),this.armory.dispose(),this.effects.dispose(),this.battle.dispose(),this.status.clear(),this.killTracker.reset(),this.feedback.dispose(),Qr(this.scene),this.scene.clear(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.root.replaceChildren()}}const Zo=1500,bv=100,Xu=200;function wv(i){const e=[...i].sort((n,s)=>s.score-n.score);let t=0;return e.map((n,s)=>((s===0||n.score!==e[s-1].score)&&(t=s+1),{...n,rank:t}))}const Pn=Object.create(null);Pn.open="0";Pn.close="1";Pn.ping="2";Pn.pong="3";Pn.message="4";Pn.upgrade="5";Pn.noop="6";const Tr=Object.create(null);Object.keys(Pn).forEach(i=>{Tr[Pn[i]]=i});const Ko={type:"error",data:"parser error"},Yu=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",qu=typeof ArrayBuffer=="function",$u=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i&&i.buffer instanceof ArrayBuffer,Lc=({type:i,data:e},t,n)=>Yu&&e instanceof Blob?t?n(e):uh(e,n):qu&&(e instanceof ArrayBuffer||$u(e))?t?n(e):uh(new Blob([e]),n):n(Pn[i]+(e||"")),uh=(i,e)=>{const t=new FileReader;return t.onload=function(){const n=t.result.split(",")[1];e("b"+(n||""))},t.readAsDataURL(i)};function dh(i){return i instanceof Uint8Array?i:i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength)}let Va;function Tv(i,e){if(Yu&&i.data instanceof Blob)return i.data.arrayBuffer().then(dh).then(e);if(qu&&(i.data instanceof ArrayBuffer||$u(i.data)))return e(dh(i.data));Lc(i,!1,t=>{Va||(Va=new TextEncoder),e(Va.encode(t))})}const fh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ss=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let i=0;i<fh.length;i++)Ss[fh.charCodeAt(i)]=i;const Av=i=>{let e=i.length*.75,t=i.length,n,s=0,r,a,o,c;i[i.length-1]==="="&&(e--,i[i.length-2]==="="&&e--);const l=new ArrayBuffer(e),h=new Uint8Array(l);for(n=0;n<t;n+=4)r=Ss[i.charCodeAt(n)],a=Ss[i.charCodeAt(n+1)],o=Ss[i.charCodeAt(n+2)],c=Ss[i.charCodeAt(n+3)],h[s++]=r<<2|a>>4,h[s++]=(a&15)<<4|o>>2,h[s++]=(o&3)<<6|c&63;return l},Rv=typeof ArrayBuffer=="function",Ic=(i,e)=>{if(typeof i!="string")return{type:"message",data:Zu(i,e)};const t=i.charAt(0);return t==="b"?{type:"message",data:Cv(i.substring(1),e)}:Tr[t]?i.length>1?{type:Tr[t],data:i.substring(1)}:{type:Tr[t]}:Ko},Cv=(i,e)=>{if(Rv){const t=Av(i);return Zu(t,e)}else return{base64:!0,data:i}},Zu=(i,e)=>{switch(e){case"blob":return i instanceof Blob?i:new Blob([i]);case"arraybuffer":default:return i instanceof ArrayBuffer?i:i.buffer}},Ku="",Pv=(i,e)=>{const t=i.length,n=new Array(t);let s=0;i.forEach((r,a)=>{Lc(r,!1,o=>{n[a]=o,++s===t&&e(n.join(Ku))})})},Lv=(i,e)=>{const t=i.split(Ku),n=[];for(let s=0;s<t.length;s++){const r=Ic(t[s],e);if(n.push(r),r.type==="error")break}return n};function Iv(){return new TransformStream({transform(i,e){Tv(i,t=>{const n=t.length;let s;if(n<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,n);else if(n<65536){s=new Uint8Array(3);const r=new DataView(s.buffer);r.setUint8(0,126),r.setUint16(1,n)}else{s=new Uint8Array(9);const r=new DataView(s.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(n))}i.data&&typeof i.data!="string"&&(s[0]|=128),e.enqueue(s),e.enqueue(t)})}})}let Wa;function fr(i){return i.reduce((e,t)=>e+t.length,0)}function pr(i,e){if(i[0].length===e)return i.shift();const t=new Uint8Array(e);let n=0;for(let s=0;s<e;s++)t[s]=i[0][n++],n===i[0].length&&(i.shift(),n=0);return i.length&&n<i[0].length&&(i[0]=i[0].slice(n)),t}function Dv(i,e){Wa||(Wa=new TextDecoder);const t=[];let n=0,s=-1,r=!1;return new TransformStream({transform(a,o){for(t.push(a);;){if(n===0){if(fr(t)<1)break;const c=pr(t,1);r=(c[0]&128)===128,s=c[0]&127,s<126?n=3:s===126?n=1:n=2}else if(n===1){if(fr(t)<2)break;const c=pr(t,2);s=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),n=3}else if(n===2){if(fr(t)<8)break;const c=pr(t,8),l=new DataView(c.buffer,c.byteOffset,c.length),h=l.getUint32(0);if(h>Math.pow(2,21)-1){o.enqueue(Ko);break}s=h*Math.pow(2,32)+l.getUint32(4),n=3}else{if(fr(t)<s)break;const c=pr(t,s);o.enqueue(Ic(r?c:Wa.decode(c),e)),n=0}if(s===0||s>i){o.enqueue(Ko);break}}}})}const Ju=4;function wt(i){if(i)return Nv(i)}function Nv(i){for(var e in wt.prototype)i[e]=wt.prototype[e];return i}wt.prototype.on=wt.prototype.addEventListener=function(i,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+i]=this._callbacks["$"+i]||[]).push(e),this};wt.prototype.once=function(i,e){function t(){this.off(i,t),e.apply(this,arguments)}return t.fn=e,this.on(i,t),this};wt.prototype.off=wt.prototype.removeListener=wt.prototype.removeAllListeners=wt.prototype.removeEventListener=function(i,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+i];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+i],this;for(var n,s=0;s<t.length;s++)if(n=t[s],n===e||n.fn===e){t.splice(s,1);break}return t.length===0&&delete this._callbacks["$"+i],this};wt.prototype.emit=function(i){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+i],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(t){t=t.slice(0);for(var n=0,s=t.length;n<s;++n)t[n].apply(this,e)}return this};wt.prototype.emitReserved=wt.prototype.emit;wt.prototype.listeners=function(i){return this._callbacks=this._callbacks||{},this._callbacks["$"+i]||[]};wt.prototype.hasListeners=function(i){return!!this.listeners(i).length};const ta=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),sn=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Uv="arraybuffer";function ju(i,...e){return e.reduce((t,n)=>(i.hasOwnProperty(n)&&(t[n]=i[n]),t),{})}const Fv=sn.setTimeout,Ov=sn.clearTimeout;function na(i,e){e.useNativeTimers?(i.setTimeoutFn=Fv.bind(sn),i.clearTimeoutFn=Ov.bind(sn)):(i.setTimeoutFn=sn.setTimeout.bind(sn),i.clearTimeoutFn=sn.clearTimeout.bind(sn))}const Bv=1.33;function kv(i){return typeof i=="string"?zv(i):Math.ceil((i.byteLength||i.size)*Bv)}function zv(i){let e=0,t=0;for(let n=0,s=i.length;n<s;n++)e=i.charCodeAt(n),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(n++,t+=4);return t}function Qu(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Hv(i){let e="";for(let t in i)i.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(i[t]));return e}function Gv(i){let e={},t=i.split("&");for(let n=0,s=t.length;n<s;n++){let r=t[n].split("=");e[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return e}class Vv extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}}class Dc extends wt{constructor(e){super(),this.writable=!1,na(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,n){return super.emitReserved("error",new Vv(e,t,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=Ic(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=Hv(e);return t.length?"?"+t:""}}class Wv extends Dc{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||t()})),this.writable||(n++,this.once("drain",function(){--n||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};Lv(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Pv(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=Qu()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}}let ed=!1;try{ed=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Xv=ed;function Yv(){}class qv extends Wv{constructor(e){if(super(e),typeof location<"u"){const t=location.protocol==="https:";let n=location.port;n||(n=t?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",(s,r)=>{this.onError("xhr post error",s,r)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,n)=>{this.onError("xhr poll error",t,n)}),this.pollXhr=e}}class An extends wt{constructor(e,t,n){super(),this.createRequest=e,na(this,n),this._opts=n,this._method=n.method||"GET",this._uri=t,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var e;const t=ju(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(t);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&n.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var s;n.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=An.requestsCount++,An.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Yv,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete An.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}An.requestsCount=0;An.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",ph);else if(typeof addEventListener=="function"){const i="onpagehide"in sn?"pagehide":"unload";addEventListener(i,ph,!1)}}function ph(){for(let i in An.requests)An.requests.hasOwnProperty(i)&&An.requests[i].abort()}const $v=(function(){const i=td({xdomain:!1});return i&&i.responseType!==null})();class Zv extends qv{constructor(e){super(e);const t=e&&e.forceBase64;this.supportsBinary=$v&&!t}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new An(td,this.uri(),e)}}function td(i){const e=i.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Xv))return new XMLHttpRequest}catch{}if(!e)try{return new sn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const nd=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Kv extends Dc{get name(){return"websocket"}doOpen(){const e=this.uri(),t=this.opts.protocols,n=nd?{}:ju(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,n)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],s=t===e.length-1;Lc(n,this.supportsBinary,r=>{try{this.doWrite(n,r)}catch{}s&&ta(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=Qu()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}}const Xa=sn.WebSocket||sn.MozWebSocket;class Jv extends Kv{createSocket(e,t,n){return nd?new Xa(e,t,n):t?new Xa(e,t):new Xa(e)}doWrite(e,t){this.ws.send(t)}}class jv extends Dc{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const t=Dv(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),s=Iv();s.readable.pipeTo(e.writable),this._writer=s.writable.getWriter();const r=()=>{n.read().then(({done:o,value:c})=>{o||(this.onPacket(c),r())}).catch(o=>{})};r();const a={type:"open"};this.query.sid&&(a.data=`{"sid":"${this.query.sid}"}`),this._writer.write(a).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],s=t===e.length-1;this._writer.write(n).then(()=>{s&&ta(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const Qv={websocket:Jv,webtransport:jv,polling:Zv},ex=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,tx=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Jo(i){if(i.length>8e3)throw"URI too long";const e=i,t=i.indexOf("["),n=i.indexOf("]");t!=-1&&n!=-1&&(i=i.substring(0,t)+i.substring(t,n).replace(/:/g,";")+i.substring(n,i.length));let s=ex.exec(i||""),r={},a=14;for(;a--;)r[tx[a]]=s[a]||"";return t!=-1&&n!=-1&&(r.source=e,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=nx(r,r.path),r.queryKey=ix(r,r.query),r}function nx(i,e){const t=/\/{2,9}/g,n=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function ix(i,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,s,r){s&&(t[s]=r)}),t}const jo=typeof addEventListener=="function"&&typeof removeEventListener=="function",Ar=[];jo&&addEventListener("offline",()=>{Ar.forEach(i=>i())},!1);class ei extends wt{constructor(e,t){if(super(),this.binaryType=Uv,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(t=e,e=null),e){const n=Jo(e);t.hostname=n.host,t.secure=n.protocol==="https"||n.protocol==="wss",t.port=n.port,n.query&&(t.query=n.query)}else t.host&&(t.hostname=Jo(t.host).host);na(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},t.transports.forEach(n=>{const s=n.prototype.name;this.transports.push(s),this._transportsByName[s]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Gv(this.opts.query)),jo&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Ar.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=Ju,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&ei.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",t=>this._onClose("transport close",t))}onOpen(){this.readyState="open",ei.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let n=0;n<this.writeBuffer.length;n++){const s=this.writeBuffer[n].data;if(s&&(t+=kv(s)),n>0&&t>this._maxPayload)return this.writeBuffer.slice(0,n);t+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,ta(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,t,n){return this._sendPacket("message",e,t,n),this}send(e,t,n){return this._sendPacket("message",e,t,n),this}_sendPacket(e,t,n,s){if(typeof t=="function"&&(s=t,t=void 0),typeof n=="function"&&(s=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const r={type:e,data:t,options:n};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),s&&this.once("flush",s),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(ei.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),jo&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=Ar.indexOf(this._offlineEventListener);n!==-1&&Ar.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}}ei.protocol=Ju;class sx extends ei{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let t=this.createTransport(e),n=!1;ei.priorWebsocketSuccess=!1;const s=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",d=>{if(!n)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;ei.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(h(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const u=new Error("probe error");u.transport=t.name,this.emitReserved("upgradeError",u)}}))};function r(){n||(n=!0,h(),t.close(),t=null)}const a=d=>{const u=new Error("probe error: "+d);u.transport=t.name,r(),this.emitReserved("upgradeError",u)};function o(){a("transport closed")}function c(){a("socket closed")}function l(d){t&&d.name!==t.name&&r()}const h=()=>{t.removeListener("open",s),t.removeListener("error",a),t.removeListener("close",o),this.off("close",c),this.off("upgrading",l)};t.once("open",s),t.once("error",a),t.once("close",o),this.once("close",c),this.once("upgrading",l),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||t.open()},200):t.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const t=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}}let rx=class extends sx{constructor(e,t={}){const n=typeof e=="object",s=n?{...e}:{...t};(!s.transports||s.transports&&typeof s.transports[0]=="string")&&(s.transports=(s.transports||["polling","websocket","webtransport"]).map(r=>Qv[r]).filter(r=>!!r)),super(n?s:e,s)}};function ax(i,e="",t){let n=i;t=t||typeof location<"u"&&location,i==null&&(i=t.protocol+"//"+t.host),typeof i=="string"&&(i.charAt(0)==="/"&&(i.charAt(1)==="/"?i=t.protocol+i:i=t.host+i),/^(https?|wss?):\/\//.test(i)||(typeof t<"u"?i=t.protocol+"//"+i:i="https://"+i),n=Jo(i)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const r=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+r+":"+n.port+e,n.href=n.protocol+"://"+r+(t&&t.port===n.port?"":":"+n.port),n}const ox=typeof ArrayBuffer=="function",cx=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i.buffer instanceof ArrayBuffer,id=Object.prototype.toString,lx=typeof Blob=="function"||typeof Blob<"u"&&id.call(Blob)==="[object BlobConstructor]",hx=typeof File=="function"||typeof File<"u"&&id.call(File)==="[object FileConstructor]";function Nc(i){return ox&&(i instanceof ArrayBuffer||cx(i))||lx&&i instanceof Blob||hx&&i instanceof File}function Rr(i,e){if(!i||typeof i!="object")return!1;if(Array.isArray(i)){for(let t=0,n=i.length;t<n;t++)if(Rr(i[t]))return!0;return!1}if(Nc(i))return!0;if(i.toJSON&&typeof i.toJSON=="function"&&arguments.length===1)return Rr(i.toJSON(),!0);for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t)&&Rr(i[t]))return!0;return!1}function ux(i){const e=[],t=i.data,n=i;return n.data=Cr(t,e),n.attachments=e.length,{packet:n,buffers:e}}function Cr(i,e,t){if(!i)return i;if(Nc(i)){const n={_placeholder:!0,num:e.length};return e.push(i),n}else if(Array.isArray(i)){const n=new Array(i.length);for(let s=0;s<i.length;s++)n[s]=Cr(i[s],e);return n}else if(typeof i=="object"&&!(i instanceof Date)){if(i.toJSON&&typeof i.toJSON=="function"&&!t)return Cr(i.toJSON(),e,!0);const n={};for(const s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=Cr(i[s],e));return n}return i}function dx(i,e){return i.data=Qo(i.data,e),delete i.attachments,i}function Qo(i,e){if(!i)return i;if(i&&i._placeholder===!0){if(typeof i.num=="number"&&i.num>=0&&i.num<e.length)return e[i.num];throw new Error("illegal attachments")}else if(Array.isArray(i))for(let t=0;t<i.length;t++)i[t]=Qo(i[t],e);else if(typeof i=="object")for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&(i[t]=Qo(i[t],e));return i}const sd=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],fx=5;var Ve;(function(i){i[i.CONNECT=0]="CONNECT",i[i.DISCONNECT=1]="DISCONNECT",i[i.EVENT=2]="EVENT",i[i.ACK=3]="ACK",i[i.CONNECT_ERROR=4]="CONNECT_ERROR",i[i.BINARY_EVENT=5]="BINARY_EVENT",i[i.BINARY_ACK=6]="BINARY_ACK"})(Ve||(Ve={}));class px{constructor(e){this.replacer=e}encode(e){return(e.type===Ve.EVENT||e.type===Ve.ACK)&&Rr(e)?this.encodeAsBinary({type:e.type===Ve.EVENT?Ve.BINARY_EVENT:Ve.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===Ve.BINARY_EVENT||e.type===Ve.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=ux(e),n=this.encodeAsString(t.packet),s=t.buffers;return s.unshift(n),s}}class Uc extends wt{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const n=t.type===Ve.BINARY_EVENT;n||t.type===Ve.BINARY_ACK?(t.type=n?Ve.EVENT:Ve.ACK,this.reconstructor=new mx(t)):super.emitReserved("decoded",t)}else if(Nc(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(Ve[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===Ve.BINARY_EVENT||n.type===Ve.BINARY_ACK){const r=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const a=e.substring(r,t);if(a!=Number(a)||e.charAt(t)!=="-")throw new Error("Illegal attachments");const o=Number(a);if(!rd(o)||o<1)throw new Error("Illegal attachments");if(o>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=o}if(e.charAt(t+1)==="/"){const r=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););n.nsp=e.substring(r,t)}else n.nsp="/";const s=e.charAt(t+1);if(s!==""&&Number(s)==s){const r=t+1;for(;++t;){const a=e.charAt(t);if(a==null||Number(a)!=a){--t;break}if(t===e.length)break}n.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){const r=this.tryParse(e.substr(t));if(Uc.isPayloadValid(n.type,r))n.data=r;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case Ve.CONNECT:return Yr(t);case Ve.DISCONNECT:return t===void 0;case Ve.CONNECT_ERROR:return typeof t=="string"||Yr(t);case Ve.EVENT:case Ve.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&sd.indexOf(t[0])===-1);case Ve.ACK:case Ve.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class mx{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=dx(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function gx(i){return typeof i=="string"}const rd=Number.isInteger||function(i){return typeof i=="number"&&isFinite(i)&&Math.floor(i)===i};function _x(i){return i===void 0||rd(i)}function Yr(i){return Object.prototype.toString.call(i)==="[object Object]"}function vx(i,e){switch(i){case Ve.CONNECT:return e===void 0||Yr(e);case Ve.DISCONNECT:return e===void 0;case Ve.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&sd.indexOf(e[0])===-1);case Ve.ACK:return Array.isArray(e);case Ve.CONNECT_ERROR:return typeof e=="string"||Yr(e);default:return!1}}function xx(i){return gx(i.nsp)&&_x(i.id)&&vx(i.type,i.data)}const yx=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Uc,Encoder:px,get PacketType(){return Ve},isPacketValid:xx,protocol:fx},Symbol.toStringTag,{value:"Module"}));function pn(i,e,t){return i.on(e,t),function(){i.off(e,t)}}const Sx=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class ad extends wt{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[pn(e,"open",this.onopen.bind(this)),pn(e,"packet",this.onpacket.bind(this)),pn(e,"error",this.onerror.bind(this)),pn(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){var n,s,r;if(Sx.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const a={type:Ve.EVENT,data:t};if(a.options={},a.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const h=this.ids++,d=t.pop();this._registerAckCallback(h,d),a.id=h}const o=(s=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||s===void 0?void 0:s.writable,c=this.connected&&!(!((r=this.io.engine)===null||r===void 0)&&r._hasPingExpired());return this.flags.volatile&&!o||(c?(this.notifyOutgoingListeners(a),this.packet(a)):this.sendBuffer.push(a)),this.flags={},this}_registerAckCallback(e,t){var n;const s=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(s===void 0){this.acks[e]=t;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let o=0;o<this.sendBuffer.length;o++)this.sendBuffer[o].id===e&&this.sendBuffer.splice(o,1);t.call(this,new Error("operation has timed out"))},s),a=(...o)=>{this.io.clearTimeoutFn(r),t.apply(this,o)};a.withError=!0,this.acks[e]=a}emitWithAck(e,...t){return new Promise((n,s)=>{const r=(a,o)=>a?s(a):n(o);r.withError=!0,t.push(r),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((s,...r)=>(this._queue[0],s!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(s)):(this._queue.shift(),t&&t(null,...r)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:Ve.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(n=>String(n.id)===e)){const n=this.acks[e];delete this.acks[e],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case Ve.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Ve.EVENT:case Ve.BINARY_EVENT:this.onevent(e);break;case Ve.ACK:case Ve.BINARY_ACK:this.onack(e);break;case Ve.DISCONNECT:this.ondisconnect();break;case Ve.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let n=!1;return function(...s){n||(n=!0,t.packet({type:Ve.ACK,id:e,data:s}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Ve.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const n of t)n.apply(this,e.data)}}}function ss(i){i=i||{},this.ms=i.min||100,this.max=i.max||1e4,this.factor=i.factor||2,this.jitter=i.jitter>0&&i.jitter<=1?i.jitter:0,this.attempts=0}ss.prototype.duration=function(){var i=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*i);i=(Math.floor(e*10)&1)==0?i-t:i+t}return Math.min(i,this.max)|0};ss.prototype.reset=function(){this.attempts=0};ss.prototype.setMin=function(i){this.ms=i};ss.prototype.setMax=function(i){this.max=i};ss.prototype.setJitter=function(i){this.jitter=i};class ec extends wt{constructor(e,t){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,na(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((n=t.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new ss({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const s=t.parser||yx;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new rx(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const s=pn(t,"open",function(){n.onopen(),e&&e()}),r=o=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",o),e?e(o):this.maybeReconnectOnOpen()},a=pn(t,"error",r);if(this._timeout!==!1){const o=this._timeout,c=this.setTimeoutFn(()=>{s(),r(new Error("timeout")),t.close()},o);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(s),this.subs.push(a),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(pn(e,"ping",this.onping.bind(this)),pn(e,"data",this.ondata.bind(this)),pn(e,"error",this.onerror.bind(this)),pn(e,"close",this.onclose.bind(this)),pn(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){ta(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new ad(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const n of t)if(this.nsps[n].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(s=>{s?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",s)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const _s={};function Pr(i,e){typeof i=="object"&&(e=i,i=void 0),e=e||{};const t=ax(i,e.path||"/socket.io"),n=t.source,s=t.id,r=t.path,a=_s[s]&&r in _s[s].nsps,o=e.forceNew||e["force new connection"]||e.multiplex===!1||a;let c;return o?c=new ec(n,e):(_s[s]||(_s[s]=new ec(n,e)),c=_s[s]),t.query&&!e.query&&(e.query=t.queryKey),c.socket(t.path,e)}Object.assign(Pr,{Manager:ec,Socket:ad,io:Pr,connect:Pr});function tc(){const i=rt.useId(),e=rt.useSyncExternalStore(Lu,ea);return z.jsxs("section",{className:"co-sensitivity","aria-label":"視角設定",children:[z.jsxs("label",{htmlFor:i,children:["視角靈敏度 ",z.jsxs("output",{htmlFor:i,children:[e.toFixed(1)," 倍"]})]}),z.jsx("input",{id:i,type:"range",min:Cc,max:Pc,step:Ru,value:e,"aria-valuetext":`${e.toFixed(1)} 倍`,onChange:t=>Xr(Number(t.target.value))}),z.jsx("p",{children:"滑鼠與觸控共用倍率，水平與垂直同步調整；1 倍為原本手感。"}),z.jsx("button",{type:"button",onClick:()=>Xr(Ls),children:"恢復預設（2 倍）"})]})}let Mx=0;class Ex{constructor(e,t){this.root=e;const n=`co-tactical-${++Mx}`;this.shell.className="co-tactical",this.shell.dataset.gameUi="",this.shell.innerHTML=`<button type="button" class="co-tactical-trigger" aria-label="戰術板" aria-controls="${n}" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 3v18M14 13h3m-3 4h3"/></svg></button>
      <section class="co-mp-roster" id="${n}" aria-label="戰術板" tabindex="-1">
      <header class="co-tactical-heading"><b></b><button type="button" class="co-tactical-close" aria-label="關閉戰術板">×</button></header>
      <div class="co-tactical-scroll"><div class="co-tactical-columns" aria-hidden="true"><span>名次</span><span>玩家</span><span>積分</span><span>賞金</span><span>K/D</span></div><div class="co-tactical-rows"></div></div></section>`,e.append(this.shell),this.panel=this.shell.querySelector(".co-mp-roster"),this.trigger=this.shell.querySelector(".co-tactical-trigger"),this.body=this.shell.querySelector(".co-tactical-rows"),this.heading=this.shell.querySelector(".co-tactical-heading b"),this.setTouchMode(t),e.addEventListener("click",this.onClick,!0),e.addEventListener("pointerdown",this.onPointerDown,!0),e.addEventListener("pointermove",this.onPointerMove,!0),e.addEventListener("pointerup",this.onPointerEnd,!0),e.addEventListener("pointercancel",this.onPointerEnd,!0),window.PointerEvent||(e.addEventListener("touchstart",this.onTouchStart,{capture:!0,passive:!1}),e.addEventListener("touchmove",this.onTouchMove,{capture:!0,passive:!1}),e.addEventListener("touchend",this.onTouchEnd,!0),e.addEventListener("touchcancel",this.onTouchEnd,!0)),e.addEventListener("armory:open",this.close),window.addEventListener("keydown",this.onKey),window.addEventListener("blur",this.onBlur),window.addEventListener("resize",this.layout)}shell=document.createElement("div");panel;trigger;body;heading;rows=new Map;open=!1;touch=!1;active=!0;gestures=new Map;suppressClick=!1;get isOpen(){return this.touch&&this.open}setTouchMode(e){this.touch=e,this.root.classList.toggle("co-touch-ui",e),this.close()}setActive(e){this.active=e,e||this.close(),this.shell.hidden=!e}toggle(){if(!(!this.touch||!this.active)){if(this.open){this.close();return}this.open=!0,this.panel.hidden=!1,this.trigger.setAttribute("aria-expanded","true"),this.root.dispatchEvent(new Event("tactical:open")),this.layout()}}close=()=>{this.open=!1,this.panel.hidden=this.touch,this.trigger.setAttribute("aria-expanded","false"),this.layout()};onBlur=()=>{this.close(),this.gestures.clear(),this.suppressClick=!1};onKey=e=>{this.isOpen&&e.key==="Escape"&&(e.preventDefault(),this.close(),this.trigger.focus({preventScroll:!0}))};contains(e){return e instanceof Node&&this.shell.contains(e)}consume(e,t=!1){t&&e.preventDefault(),e.stopImmediatePropagation()}onPointerDown=e=>{if(!(!this.touch||!this.active)){if(this.suppressClick=!1,this.contains(e.target)){this.gestures.set(e.pointerId,!1),this.consume(e);return}this.open&&(this.close(),this.gestures.set(e.pointerId,!0),this.suppressClick=!0,this.root.setPointerCapture?.(e.pointerId),this.consume(e,!0))}};onPointerMove=e=>{this.gestures.has(e.pointerId)&&this.consume(e,this.gestures.get(e.pointerId))};onPointerEnd=e=>{if(!this.gestures.has(e.pointerId))return;const t=this.gestures.get(e.pointerId);this.gestures.delete(e.pointerId),this.consume(e,t)};onTouchStart=e=>{if(!this.touch||!this.active)return;this.suppressClick=!1;const t=this.contains(e.target),n=this.open&&!t;if(!(!t&&!n)){n&&(this.close(),this.suppressClick=!0);for(const s of Array.from(e.changedTouches))this.gestures.set(s.identifier,n);this.consume(e,n)}};onTouchMove=e=>{const t=Array.from(e.changedTouches);t.length&&t.every(n=>this.gestures.has(n.identifier))&&this.consume(e,t.some(n=>this.gestures.get(n.identifier)))};onTouchEnd=e=>{const t=Array.from(e.changedTouches),n=t.every(r=>this.gestures.has(r.identifier)),s=t.some(r=>this.gestures.get(r.identifier));for(const r of t)this.gestures.delete(r.identifier);n&&this.consume(e,s)};onClick=e=>{if(!this.touch||!this.active)return;if(this.suppressClick){this.suppressClick=!1,this.consume(e,!0);return}const t=e.target;!(t instanceof Element)||!this.contains(t)||(this.consume(e),t.closest(".co-tactical-trigger")?this.toggle():t.closest(".co-tactical-close")&&(this.close(),this.trigger.focus({preventScroll:!0})))};update(e,t,n){this.heading.textContent=`${t||"房間"} · ${Math.round(n)}ms`;const s=this.shell.querySelector(".co-tactical-scroll"),r=s.scrollTop,a=wv(e),o=new Set(a.map(c=>c.id));for(const[c,l]of this.rows)o.has(c)||(l.remove(),this.rows.delete(c));a.forEach((c,l)=>{let h=this.rows.get(c.id);if(!h){h=document.createElement("div"),h.className="co-tactical-row";for(let u=0;u<5;u++)h.append(document.createElement("span"));this.rows.set(c.id,h)}[String(c.rank),c.name,String(c.score),String(c.bounty),`${c.kills}/${c.deaths}`].forEach((u,f)=>{h.children[f].textContent!==u&&(h.children[f].textContent=u)}),h.classList.toggle("is-high-bounty",c.bounty>=Xu),this.body.children[l]!==h&&this.body.insertBefore(h,this.body.children[l]??null)}),s.scrollTop=r,this.layout()}layout=()=>{const e=this.touch&&!this.open?this.trigger:this.panel;this.root.style.setProperty("--co-roster-bottom",`${e.getBoundingClientRect().bottom-this.root.getBoundingClientRect().top}px`)};dispose(){this.gestures.clear(),this.rows.clear(),this.root.removeEventListener("click",this.onClick,!0),this.root.removeEventListener("pointerdown",this.onPointerDown,!0),this.root.removeEventListener("pointermove",this.onPointerMove,!0),this.root.removeEventListener("pointerup",this.onPointerEnd,!0),this.root.removeEventListener("pointercancel",this.onPointerEnd,!0),this.root.removeEventListener("touchstart",this.onTouchStart,!0),this.root.removeEventListener("touchmove",this.onTouchMove,!0),this.root.removeEventListener("touchend",this.onTouchEnd,!0),this.root.removeEventListener("touchcancel",this.onTouchEnd,!0),this.root.removeEventListener("armory:open",this.close),window.removeEventListener("keydown",this.onKey),window.removeEventListener("blur",this.onBlur),window.removeEventListener("resize",this.layout),this.root.classList.remove("co-touch-ui"),this.root.style.removeProperty("--co-roster-bottom"),this.shell.remove()}}const bx=10;function vs(i,e){return typeof i=="object"&&i!==null&&i.roundId===e}const mr=(i,e,t)=>Math.max(e,Math.min(t,i)),mh=(i,e)=>(e-i+Math.PI*3)%(Math.PI*2)-Math.PI;class wx{constructor(e,t,n,s,r,a,o=0,c){this.root=e,this.socket=t,this.roomCode=n,this.roundId=s,this.onFatal=r,this.playerId=a,this.seq=o;const l=new Eu;this.renderer=new Mu({antialias:l.antialias,powerPreference:"high-performance"}),this.renderer.setPixelRatio(l.pixelRatio),this.renderer.setClearColor(1489372),e.append(this.renderer.domElement),e.insertAdjacentHTML("beforeend",'<div class="co-feedback"></div><div class="co-hud"></div><div class="co-minimap"><canvas aria-label="以自己為中心的戰術雷達"></canvas></div>'+Gu()),this.tacticalBoard=new Ex(e,this.coarse),this.radarCanvas=e.querySelector(".co-minimap canvas"),this.radarContext=this.radarCanvas.getContext("2d"),this.hud=new Hu(e.querySelector(".co-hud")),this.aimFeedback=new Ih(e),this.feedback=new Fu(e.querySelector(".co-feedback")),this.armory=new Vu(e,h=>{this.input.set({aim:!1}),this.socket.emit("match:weapon",{id:h,roundId:this.roundId})},()=>this.owned,this.restorePointerLock),this.scene.add(this.arena.group,new du(16777215,1489372,2)),this.effects=new wu(this.scene,this.coarse),this.battle=new Tu(e),this.makeGun(),this.scope=new bu(e,this.gun,this.coarse),this.makePickups(),this.coarse?this.mobile=new Uu(e,this.input):(this.desktop=new Nu(e,this.input),e.onclick=h=>{h.target.closest(".co-armory, [data-game-ui], button, input")||this.restorePointerLock()}),this.resize=()=>{this.cam.aspect=e.clientWidth/e.clientHeight,this.cam.updateProjectionMatrix(),this.renderer.setSize(e.clientWidth,e.clientHeight,!1),this.sizeRadar()},window.addEventListener("resize",this.resize),this.resize(),this.socket.on("match:snapshot",this.onSnapshot),this.socket.on("match:shot",this.onShot),this.socket.on("match:hit",this.onHit),this.socket.on("match:kill",this.onKill),this.socket.on("match:damage",this.onDamage),this.socket.on("disconnect",this.onDisconnect),this.socket.on("connect_error",this.onConnectError),this.loop=new Wu(h=>this.update(h)),this.settings=new Iu(e,()=>{this.tacticalBoard.close(),this.root.dispatchEvent(new Event("combat:reset")),this.socket.emit("match:input",{roundId:this.roundId,seq:++this.seq,clientTime:this.serverNow(),moveX:0,moveY:0,yaw:this.player.yaw,pitch:this.player.pitch,jump:!1,reload:!1,sprint:!1,aim:!1}),this.desktop?.setEnabled(!1),this.mobile?.setEnabled(!1),this.armory.setEnabled(!1),this.wasShooting=!1},h=>{this.desktop?.setEnabled(!0),this.mobile?.setEnabled(!0),this.armory.setEnabled(!0),h&&this.restorePointerLock()},!0,c?{...c,code:n??""}:void 0)}scene=new yc;cam=new Xt(75,1,Ac,bs);renderer;input=new Du(()=>this.sendResetInput());arena=new Ou;player=new Bu;avatars=new Map;pickupMeshes=new Map;pending=[];snaps=[];seq=0;hud;aimFeedback;armory;feedback;effects;battle;seenShots=new Set;statusTimer=0;loop;settings;desktop;mobile;resize=()=>{};owned=new Set(["ar"]);active="ar";weapons=Object.fromEntries(Jt.map(e=>[e,{ammo:Lt[e].magazine,reloadUntil:0}]));score=0;bounty=bv;scoreTarget=Zo;endsAt=0;kills=0;deaths=0;dead=!1;killer="";ping=0;pingTimer=0;serverClockOffset=0;hasClockOffset=!1;notice="";noticeT=0;slowUntil=0;disposed=!1;ready=!1;paused=!1;wasShooting=!1;lastLocalShot=0;recoilPitch=0;recoilYaw=0;gun=new qt;gunFlash;gunMaterial=new tt({color:2106932});handMaterial=new tt({color:16777215});coarse=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>0;cameraOffset=new P;visualPosition=new P;remoteTarget=new P;moveIntent=new P;tacticalBoard;scope;physicsTime=0;awaitingWeapon=!1;snapshotInterval=50;snapshotJitter=0;lastSnapshotArrival=0;radarCanvas;radarContext;radarPlayers=new Map;radarTimer=0;start(){this.disposed||(this.paused=!1,this.loop.start())}pause(){if(this.disposed)return;this.paused=!0,this.tacticalBoard.setActive(!1),this.settings?.setActive(!1),this.desktop?.setEnabled(!1),this.mobile?.setEnabled(!1),this.armory.setEnabled(!1),this.wasShooting=!1,this.input.reset(),this.loop.stop();const e=document.pointerLockElement;e&&(e===this.root||this.root.contains(e))&&document.exitPointerLock?.()}resume(){this.disposed||(this.paused=!1,this.tacticalBoard.setActive(!0),this.settings?.setActive(!0),this.desktop?.setEnabled(!0),this.mobile?.setEnabled(!0),this.armory.setEnabled(!0),this.loop.start())}restorePointerLock=()=>{if(!(this.disposed||this.paused)&&!(this.coarse||this.settings?.isOpen||document.pointerLockElement===this.root))try{this.root.requestPointerLock?.()?.catch(()=>{})}catch{}};sendResetInput(){this.disposed||this.paused||!this.ready||!this.socket?.connected||this.socket.emit("match:input",{roundId:this.roundId,seq:++this.seq,clientTime:this.serverNow(),moveX:0,moveY:0,yaw:this.player.yaw,pitch:this.player.pitch,jump:!1,reload:!1,sprint:!1,aim:!1})}serverNow(){return Date.now()-this.serverClockOffset}makeGun(){const e=new Fe(new yt(.18,.16,.9),this.gunMaterial);e.position.set(.34,-.28,-.8);const t=[[[.17,.48,.18],[.47,-.52,-.5]],[[.17,.43,.18],[.12,-.55,-.63]],[[.2,.18,.2],[.37,-.43,-.74]],[[.2,.18,.2],[.17,-.42,-.86]]];for(const[n,s]of t){const r=new Fe(new yt(...n),this.handMaterial);r.position.set(...s),this.gun.add(r)}this.gunFlash=new Fe(new es(.08),new tt({color:16766045})),this.gunFlash.position.set(.34,-.25,-1.3),this.gunFlash.visible=!1,this.gun.add(e,this.gunFlash),this.cam.add(this.gun),this.scene.add(this.cam)}makePickups(){for(const e of Jt.filter(t=>t!=="ar")){const t=Lt[e],n=new Fe(new es(.75),new tt({color:t.color}));n.visible=!1,this.pickupMeshes.set(e,n),this.scene.add(n)}}simulate(e,t,n,s){e.yaw=t.yaw,e.pitch=t.pitch,cc(e,{moveX:t.moveX,moveY:t.moveY,lookX:0,lookY:0,jump:t.jump,sprint:t.sprint},n,void 0,this.slowUntil>this.serverNow()?.65:1,s)}predict(e,t){const n={x:this.player.position.x,y:this.player.position.y,z:this.player.position.z,yaw:this.player.yaw,pitch:this.player.pitch,velocityY:this.player.velocityY,supportId:this.player.supportId,jumpsUsed:this.player.jumpsUsed,alive:this.player.alive};this.simulate(n,e,t,this.physicsTime),this.physicsTime+=t,this.player.position.set(n.x,n.y,n.z),this.player.yaw=n.yaw,this.player.pitch=n.pitch,this.player.velocityY=n.velocityY,this.player.jumpsUsed=n.jumpsUsed,this.player.supportId=n.supportId??null}onSnapshot=e=>{if(this.disposed||this.paused||!vs(e,this.roundId))return;if(!Array.isArray(e?.players)||!Array.isArray(e?.pickups))return this.onFatal("多人同步資料無效");const t=!this.ready;this.ready=!0;const n=performance.now();if(this.lastSnapshotArrival){const h=n-this.lastSnapshotArrival;this.snapshotJitter=this.snapshotJitter*.8+Math.abs(h-this.snapshotInterval)*.2,this.snapshotInterval=this.snapshotInterval*.85+h*.15}for(this.lastSnapshotArrival=n,e.byId=new Map(e.players.map(h=>[h.id,h])),this.snaps.push(e);this.snaps.length>12;)this.snaps.shift();const s=e.byId.get(this.playerId);if(!s)return;t&&(this.seq=Math.max(this.seq,s.ack));const r=this.player.alive,a=!r&&s.alive;this.slowUntil=s.slowUntil,this.pending=this.pending.filter(h=>h.seq>s.ack),(t||a||r!==s.alive)&&(this.pending.length=0,this.input.reset(),this.mobile?.reset(),this.desktop?.setEnabled(!this.paused&&!this.settings?.isOpen)),this.visualPosition.copy(this.player.position).add(this.cameraOffset);const o={x:s.x,y:s.y,z:s.z,yaw:s.yaw,pitch:s.pitch,velocityY:s.velocityY,supportId:s.supportId,jumpsUsed:s.jumpsUsed,alive:s.alive};this.physicsTime=e.simulationTime;for(const h of this.pending)this.simulate(o,h,h.dt,this.physicsTime),this.physicsTime+=h.dt;const c=Math.hypot(o.x-this.player.position.x,o.y-this.player.position.y,o.z-this.player.position.z),l=t||a||c>4;this.player.position.set(o.x,o.y,o.z),this.player.velocityY=o.velocityY,this.player.jumpsUsed=o.jumpsUsed,this.player.supportId=o.supportId??null,(t||a)&&(this.player.yaw=s.yaw,this.player.pitch=s.pitch),l?this.cameraOffset.set(0,0,0):(this.cameraOffset.copy(this.visualPosition).sub(this.player.position),Math.hypot(this.cameraOffset.x,this.cameraOffset.z)>4&&this.cameraOffset.set(0,0,0)),this.player.hp=s.hp,this.player.alive=s.alive,this.handMaterial.color.setHex(s.color),this.active!==s.activeWeapon&&(this.input.set({aim:!1}),this.awaitingWeapon=!1),this.active=s.activeWeapon,this.owned=new Set(s.ownedWeapons),this.weapons=s.weapons,this.score=s.score,this.bounty=s.bounty,this.scoreTarget=e.scoreTarget,this.endsAt=e.endsAt,this.kills=s.kills,this.deaths=s.deaths,this.dead=!s.alive,this.syncAvatars(e.players),this.syncPickups(e.pickups),this.armory.render(this.active),this.updatePanels(e)};updatePanels(e){this.tacticalBoard.update(e.players,this.roomCode,this.ping),this.radarPlayers=e.byId??new Map(e.players.map(t=>[t.id,t]))}syncAvatars(e){const t=new Set(e.map(n=>n.id));for(const[n,s]of this.avatars)t.has(n)||(s.dispose(),this.avatars.delete(n));for(const n of e){if(n.id===this.playerId)continue;let s=this.avatars.get(n.id);s||(s=new ku(n.id,n.name,n.color),s.respawn(n.x,n.z),s.position.y=n.y-1.65,s.group.position.copy(s.position),this.avatars.set(n.id,s),this.scene.add(s.group,s.deathGroup)),n.alive&&!s.alive&&s.respawn(n.x,n.z),!n.alive&&s.alive&&s.damage(100)}}syncPickups(e){for(const t of e){const n=this.pickupMeshes.get(t.id);n&&(n.position.set(t.x,t.y+.9,t.z),n.visible=t.available)}}sizeRadar(){const e=this.radarCanvas?.getBoundingClientRect();if(!e?.width||!e.height)return;const t=Math.min(window.devicePixelRatio||1,1.5),n=Math.round(e.width*t),s=Math.round(e.height*t);(this.radarCanvas.width!==n||this.radarCanvas.height!==s)&&(this.radarCanvas.width=n,this.radarCanvas.height=s)}drawRadar(e){if(this.radarTimer+=e,this.radarTimer<1/30)return;this.radarTimer%=1/30;const t=this.radarCanvas,n=t.getBoundingClientRect();if(!n.width||!n.height)return;this.sizeRadar();const s=t.width/n.width,r=this.radarContext,a=n.width,o=n.height,c=a/2,l=o/2+4,h=Math.min(a,o)*.38;r.setTransform(s,0,0,s,0,0),r.clearRect(0,0,a,o),r.strokeStyle="#ffffff24",r.lineWidth=1,r.beginPath(),r.arc(c,l,h,0,Math.PI*2),r.moveTo(c-h,l),r.lineTo(c+h,l),r.moveTo(c,l-h),r.lineTo(c,l+h),r.stroke(),r.fillStyle="#dfffff",r.font="800 9px Arial",r.fillText("戰術雷達",8,14);const d=this.player.position.y-1.65,u=d<-2?"B1":d>=9?"RF":d>=3?"2F":"1F";this.radarCanvas.setAttribute("aria-label",`Radar ${u}`),r.fillText(u,60,14);const f=Math.cos(this.player.yaw),_=Math.sin(this.player.yaw);for(const y of this.radarPlayers.values()){if(y.id===this.playerId||!y.alive)continue;const m=this.avatars.get(y.id),p=m?.position.x??y.x,b=m?.position.z??y.z,R=p-this.player.position.x,S=b-this.player.position.z,w=Math.max(.001,Math.hypot(R,S)),M=R*f-S*_,A=-R*_-S*f,v=h*Math.min(w/70,1)/w,E=c+M*v,C=l-A*v;r.beginPath(),r.arc(E,C,w>70?5:4,0,Math.PI*2),r.fillStyle=`#${y.color.toString(16).padStart(6,"0")}`,r.fill();const N=y.y-this.player.position.y;Math.abs(N)>2.5&&(r.fillStyle="#fff",r.fillText(String.fromCodePoint(N>0?9650:9660),E-4,C-7)),w>70&&(r.strokeStyle="#ffffffcc",r.lineWidth=1.5,r.stroke())}r.save(),r.translate(c,l),r.fillStyle="#fff",r.shadowColor="#55f1ae",r.shadowBlur=7,r.beginPath(),r.moveTo(0,-7),r.lineTo(5,6),r.lineTo(0,3),r.lineTo(-5,6),r.closePath(),r.fill(),r.restore()}onShot=e=>{if(this.disposed||this.paused||!this.ready||!vs(e,this.roundId)||this.seenShots.has(e.eventId))return;this.seenShots.add(e.eventId),this.seenShots.size>512&&this.seenShots.delete(this.seenShots.values().next().value);const t=new P,n=e.id===this.playerId;if(n)this.cam.updateMatrixWorld(!0),this.gunFlash.getWorldPosition(t);else{const s=this.avatars.get(e.id);s?s.muzzlePosition(t):t.set(...e.origin).add(new P(.34,-.27,0))}this.effects.play(e,t,!n);for(const s of e.hits)this.avatars.get(s.targetId)?.hit()};onHit=e=>{!this.disposed&&!this.paused&&this.ready&&vs(e,this.roundId)&&this.battle.hit(e)};onKill=e=>{!this.disposed&&!this.paused&&this.ready&&vs(e,this.roundId)&&this.battle.kill(e)};onDamage=e=>{this.disposed||this.paused||!this.ready||!vs(e,this.roundId)||(this.player.hp=e.hp,this.killer=e.name,this.notice=`遭 ${e.name} 使用 ${Lt[e.weapon]?.label??"武器"} 擊中`,this.noticeT=.8,this.feedback.damage(e.damage,new P(e.from.x,0,e.from.z),this.player.position,new P(-Math.sin(this.player.yaw),0,-Math.cos(this.player.yaw))))};onDisconnect=()=>{this.pause(),this.socket.sendBuffer.length=0,this.onFatal("連線已中斷")};onConnectError=()=>this.onFatal("無法連線至遊戲伺服器");measurePing(e){if(this.pingTimer-=e,this.pingTimer>0)return;this.pingTimer=1;const t=Date.now();this.socket.emit("net:ping",n=>{if(this.disposed)return;this.ping=Date.now()-t;const s=Date.now()-n-this.ping/2;this.serverClockOffset=this.hasClockOffset?this.serverClockOffset*.8+s*.2:s,this.hasClockOffset=!0})}updateRemotePlayers(e){if(!this.snaps.length)return;const t=mr(80+this.ping*.1+this.snapshotJitter*1.5,80,120),n=this.serverNow()-t;let s=this.snaps[0],r=this.snaps[0],a=0;const o=this.snaps[this.snaps.length-1];if(n>=o.serverTime&&this.snaps.length>1){s=this.snaps[this.snaps.length-2],r=o;const l=Math.max(1,r.serverTime-s.serverTime);a=1+Math.min(75,n-r.serverTime)/l}else{for(let l=1;l<this.snaps.length;l++)if(this.snaps[l].serverTime>=n){s=this.snaps[l-1],r=this.snaps[l];break}a=s===r?0:mr((n-s.serverTime)/Math.max(1,r.serverTime-s.serverTime),0,1)}const c=1-Math.exp(-e*30);for(const[l,h]of this.avatars){const d=s.byId?.get(l),u=r.byId?.get(l);if(!(!d||!u)){if(this.remoteTarget.set(d.x+(u.x-d.x)*a,d.y+(u.y-d.y)*a-1.65,d.z+(u.z-d.z)*a),u.supportId!==null&&u.supportId===d.supportId){const f=Ms(u.supportId,s.simulationTime),_=Ms(u.supportId,r.simulationTime),y=Ms(u.supportId,this.physicsTime);this.remoteTarget.x+=y.x-(f.x+(_.x-f.x)*a),this.remoteTarget.y+=y.y-(f.y+(_.y-f.y)*a),this.remoteTarget.z+=y.z-(f.z+(_.z-f.z)*a),h.group.position.copy(this.remoteTarget)}else h.group.position.lerp(this.remoteTarget,c);h.group.rotation.y+=mh(h.group.rotation.y,d.yaw+mh(d.yaw,u.yaw)*a)*c,h.position.copy(h.group.position),h.updateVisual(e,Math.abs(u.x-d.x)+Math.abs(u.z-d.z)>.02,!0)}}}update(e){if(this.disposed||this.paused||(this.measurePing(e),!this.ready))return;this.desktop?.update();const t=this.input.getState(),n=this.tacticalBoard.isOpen||this.armory.isOpen||!!this.settings?.isOpen||this.paused,s=this.weapons[this.active].reloadUntil>this.serverNow();(this.active!=="sniper"||s||t.reload||t.switchWeapon||!this.player.alive||n||this.awaitingWeapon)&&(this.input.set({aim:!1}),t.aim=!1),n&&(t.shoot=!1,this.input.clearCombat());const r=this.scope.update(this.active,t,this.player.alive,s,n);r&&(t.lookX*=.25,t.lookY*=.25);const a=this.player.yaw-t.lookX*.0024,o=mr(this.player.pitch-t.lookY*.0021,-1.35,1.35),c={roundId:this.roundId,seq:++this.seq,clientTime:this.serverNow(),moveX:t.moveX,moveY:t.moveY,yaw:a,pitch:o,jump:t.jump,reload:t.reload,sprint:!!t.sprint,aim:r};for(this.pending.push({...c,dt:e});this.pending.length>180;)this.pending.shift();this.predict(c,e),this.socket.emit("match:input",c);const l=-Math.sin(a),h=-Math.cos(a),d=Math.cos(a),u=-Math.sin(a);if(this.moveIntent.set(l*t.moveY+d*t.moveX,0,h*t.moveY+u*t.moveX),this.moveIntent.lengthSq()>1e-4&&this.moveIntent.normalize(),t.switchWeapon){const v=Jt[t.switchWeapon-1];v&&this.owned.has(v)&&v!==this.active&&(this.awaitingWeapon=!0,this.socket.emit("match:weapon",{id:v,roundId:this.roundId}))}const f=Lt[this.active],_=this.weapons[this.active],y=this.serverNow();this.player.alive&&t.shoot&&!this.armory.isOpen&&(!this.wasShooting||y-this.lastLocalShot>=f.fireDelay*1e3)&&_.ammo>0&&_.reloadUntil<=y&&(this.cam.updateMatrixWorld(!0),this.effects.muzzle(this.gunFlash.getWorldPosition(new P),this.active),this.recoilPitch=Math.min(.04,this.recoilPitch+.009),this.recoilYaw=mr(this.recoilYaw+(this.seq%2?.0025:-.0025),-.012,.012),navigator.vibrate?.(8),this.socket.emit("match:fire",{roundId:this.roundId,clientTime:c.clientTime}),this.lastLocalShot=y),this.wasShooting=t.shoot,this.updateRemotePlayers(e);for(const v of this.pickupMeshes.values())v.rotation.y+=e*2;this.drawRadar(e),this.noticeT=Math.max(0,this.noticeT-e),this.effects.update(e),this.feedback.update(e,this.player.hp);const m=Math.exp(-e*16);this.recoilPitch*=m,this.recoilYaw*=m;const p=Math.pow(.5,e/.12),b=Math.pow(.5,e/.08),R=this.moveIntent.lengthSq()>.01,S=-this.cameraOffset.x*this.moveIntent.x+-this.cameraOffset.z*this.moveIntent.z;(!R||S>=0)&&(this.cameraOffset.x*=p,this.cameraOffset.z*=p),this.cameraOffset.y*=b,this.cameraOffset.lengthSq()<1e-6&&this.cameraOffset.set(0,0,0),this.visualPosition.copy(this.player.position),r||this.visualPosition.add(this.cameraOffset),this.cam.position.copy(this.visualPosition),this.cam.rotation.set(this.player.pitch,this.player.yaw,0,"YXZ"),this.gun.rotation.set(this.recoilPitch,this.recoilYaw,0),this.gun.position.z=this.recoilPitch*2;const w=_.reloadUntil>this.serverNow();if(this.hud.render({hp:this.player.hp,ammo:_.ammo,reserve:1/0,label:f.label,notice:this.noticeT?this.notice:"",kills:this.kills,deaths:this.deaths,dead:this.dead,killer:this.killer,hit:!1,kill:!1,reloading:w,score:this.score,bounty:this.bounty,scoreTarget:this.scoreTarget,remainingSeconds:Math.max(0,Math.ceil((this.endsAt-this.serverNow())/1e3))}),this.cam.updateMatrixWorld(!0),this.battle.update(e,this.cam),this.statusTimer+=e,this.statusTimer>=.08){this.statusTimer=0;const v=this.serverNow();for(const E of this.radarPlayers.values())if(E.alive&&(E.burnUntil>v||E.slowUntil>v)){const C=this.avatars.get(E.id);C&&this.effects.status(C.position.clone().add(new P(0,1.22,0)),E.burnUntil>v?"flame":"ice")}}this.arena.update(this.physicsTime,vv(this.snaps[this.snaps.length-1],this.serverNow()),this.renderer);const M=Lh({x:this.player.position.x,y:this.player.position.y,z:this.player.position.z,yaw:this.player.yaw,pitch:this.player.pitch}),A=[...this.avatars].map(([v,E])=>({id:v,x:E.position.x,y:E.position.y+1.65,z:E.position.z,yaw:E.group.rotation.y,alive:E.alive}));this.aimFeedback.update(n||!this.player.alive?"neutral":Ph(this.active,M.origin,M.direction,A,Qa(this.physicsTime)),this.player.alive&&!n),this.scope.render(this.renderer,this.scene,this.cam)}dispose(){if(!this.disposed){this.disposed=!0,this.paused=!0,this.ready=!1,this.loop.stop(),this.socket.off("match:snapshot",this.onSnapshot),this.socket.off("match:shot",this.onShot),this.socket.off("match:hit",this.onHit),this.socket.off("match:kill",this.onKill),this.socket.off("match:damage",this.onDamage),this.socket.off("disconnect",this.onDisconnect),this.socket.off("connect_error",this.onConnectError),window.removeEventListener("resize",this.resize),this.root.onclick=null,this.desktop?.dispose(),this.mobile?.dispose(),this.tacticalBoard.dispose(),this.settings?.dispose(),this.armory.dispose(),this.scope.dispose(),this.effects.dispose(),this.battle.dispose(),this.feedback.dispose(),this.hud.dispose(),this.aimFeedback.dispose();for(const e of this.avatars.values())e.dispose();this.avatars.clear(),Qr(this.scene),this.scene.clear(),this.pickupMeshes.clear(),this.pending=[],this.snaps=[],this.radarPlayers.clear(),this.seenShots.clear(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),document.pointerLockElement===this.root&&document.exitPointerLock?.(),this.root.replaceChildren()}}}const nc="chroma-multiplayer-session";function od(){try{const i=JSON.parse(sessionStorage.getItem(nc));return typeof i?.code=="string"&&typeof i?.playerId=="string"&&typeof i?.resumeToken=="string"?i:null}catch{return null}}function gh(i){try{i?sessionStorage.setItem(nc,JSON.stringify({code:i.code,playerId:i.playerId,resumeToken:i.resumeToken})):sessionStorage.removeItem(nc)}catch{}}function cd({code:i,onResume:e,disabled:t=!1}){return z.jsxs("button",{type:"button",className:"co-resume-card",onClick:e,disabled:t,children:[z.jsx("span",{className:"co-resume-icon","aria-hidden":"true",children:z.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[z.jsx("path",{d:"M4 10a8 8 0 1 1 1.8 7.1M4 4v6h6"}),z.jsx("path",{d:"m11 9 4 3-4 3V9Z"})]})}),z.jsxs("span",{className:"co-resume-copy",children:[z.jsxs("span",{className:"co-resume-eyebrow",children:["繼續你的對戰 ",z.jsx("span",{children:i})]}),z.jsx("strong",{children:"返回上一場"}),z.jsx("small",{children:"回到原本的房間，與隊友再度集合"})]}),z.jsx("span",{className:"co-resume-arrow","aria-hidden":"true",children:"↗"})]})}function ld({notice:i}){const e=i.kind==="reconnected";return z.jsxs("div",{className:`mp-notice ${e?"is-restored":"is-offline"}`,children:[z.jsx("span",{className:"mp-notice-icon","aria-hidden":"true",children:e?"↗":"!"}),z.jsxs("span",{className:"mp-notice-copy",children:[z.jsxs("span",{children:[z.jsx("b",{children:i.name}),e?" 已恢復連線":" 已斷線"]}),z.jsx("small",{children:e?"已回到房間，繼續對戰":"席位保留 60 秒，等待重新連線"})]}),z.jsx("time",{dateTime:new Date(i.at).toISOString(),children:new Date(i.at).toLocaleTimeString("zh-TW",{hour12:!1,hour:"2-digit",minute:"2-digit"})})]})}function Tx({notices:i}){const[e,t]=rt.useState(()=>Date.now()),n=i.filter(s=>s.expiresAt>e).slice(-3);return rt.useEffect(()=>{const s=i.filter(o=>o.expiresAt>e);if(!s.length)return;const r=Math.min(...s.map(o=>o.expiresAt)),a=setTimeout(()=>t(Date.now()),Math.max(0,r-Date.now()));return()=>clearTimeout(a)},[i,e]),n.length?z.jsx("aside",{className:"mp-broadcast-toasts","aria-label":"房間連線通知",role:"log","aria-live":"polite","aria-relevant":"additions",children:n.map(s=>z.jsx(ld,{notice:s},s.id))}):null}function _h({notices:i=[],floating:e=!1}){return i.length?e?z.jsx(Tx,{notices:i}):z.jsxs("section",{className:"mp-broadcast","aria-label":"房間廣播",children:[z.jsxs("header",{children:[z.jsxs("span",{children:[z.jsx("i",{"aria-hidden":"true"}),"房間廣播"]}),z.jsx("small",{children:"連線動態"})]}),z.jsx("div",{className:"mp-broadcast-log",role:"log","aria-live":"polite","aria-relevant":"additions",children:i.slice(-5).map(t=>z.jsx(ld,{notice:t},t.id))})]}):null}const Ax="https://dca-simulator-uw4r.onrender.com",Ya="https://dca-simulator-uw4r.onrender.com".trim().replace(/\/+$/,""),Rx=i=>/^https?:\/\/(localhost|127(?:\.\d+){3})(?::|\/|$)/i.test(i),Cx=Ya&&!Rx(Ya)?Ya:Ax,Px={INVALID_NICKNAME:"暱稱需為 2 到 16 個字元",INVALID_ROOM_CODE:"請輸入 6 碼房間碼",ROOM_NOT_FOUND:"房間已不存在，請重新加入或建立房間",ROOM_FULL:"房間已滿（包含斷線保留席位）",ROUND_ENDING:"本局正在結算，請稍後再加入",SESSION_EXPIRED:"上一場席位已過期，或伺服器已重啟，請用房號重新加入",HOST_ONLY:"只有目前房主可以操作",NOT_READY:"需要至少兩位在線玩家才能開始",INVALID_STATE:"房間狀態已改變，請重試",ALREADY_IN_ROOM:"你已在房間內，請先離開"},qa=i=>Px[i]||i||"操作失敗，請重試";function Lx({onBack:i,resumeOnMount:e=!1}){const[t,n]=rt.useState(e?"reconnecting":"join"),[s,r]=rt.useState(localStorage.getItem("chroma-name")||""),[a,o]=rt.useState(new URLSearchParams(location.search).get("room")||""),[c,l]=rt.useState(null),[h,d]=rt.useState(""),[u,f]=rt.useState(""),[_,y]=rt.useState(!1),[m,p]=rt.useState(10),[b,R]=rt.useState([]),S=rt.useRef(null),w=rt.useRef(null),M=rt.useRef(od()),A=rt.useRef(e),v=rt.useRef(0),E=rt.useRef(!1),C=rt.useRef(!1),N=rt.useRef(!1),L=rt.useMemo(()=>Pr(Cx,{autoConnect:!1}),[]),G=t==="playing"||t==="results",I=h===c?.host,H=async(J,...xe)=>{if(!L.connected)throw new Error("連線已中斷，請等待重連後再操作");try{const ke=await L.timeout(8e3).emitWithAck(J,...xe);if(ke?.error)throw new Error(qa(ke.error));return ke}catch(ke){throw new Error(ke.message==="operation has timed out"?"伺服器回應逾時，請重試":ke.message)}},Y=()=>{M.current=null,R([]),gh(null)},$=J=>{if(J?.protocolVersion!==bx)throw A.current=!1,L.disconnect(),new Error("多人伺服器版本不一致，請同步部署前端與 Render 伺服器後再試。");l(J),n(J.state==="PLAYING"?"playing":J.state==="GAME_OVER"?"results":"lobby")},se=J=>{M.current={code:J.code,playerId:J.playerId,resumeToken:J.resumeToken},gh(M.current),v.current=J.lastReceivedSeq||0,A.current=!0,d(J.playerId),o(J.code),$(J.room)};rt.useEffect(()=>{E.current=!0;const J=async()=>{if(!(!A.current||!M.current||C.current)){C.current=!0,y(!0),f("");try{const Pe=await L.timeout(8e3).emitWithAck("room:resume",M.current);if(!E.current||!A.current)return;if(Pe.error)throw Pe.error==="SESSION_EXPIRED"&&Y(),new Error(qa(Pe.error));se(Pe)}catch(Pe){E.current&&(f(Pe.message==="operation has timed out"?"恢復連線逾時，請點「返回上一場」重試":qa(Pe.message)),n("join"),A.current=!1)}finally{C.current=!1,E.current&&y(!1)}}},xe=Pe=>{if(!(!A.current||C.current||!M.current))try{$(Pe)}catch(ct){f(ct.message),n("join")}},ke=()=>{A.current&&M.current&&(L.sendBuffer.length=0,n("reconnecting"),y(!1))},be=()=>{f("無法連線至遊戲伺服器，正在重試；斷線席位保留 60 秒"),y(!1)},Xe=()=>{A.current=!1,Y(),L.disconnect(),l(null),n("join"),y(!1),f("此席位已在另一個連線恢復，這個連線已結束")},Qe=Pe=>{!A.current||Pe?.code!==M.current?.code||!["disconnected","reconnected"].includes(Pe.kind)||!Number.isFinite(Pe.at)||R(ct=>[...ct.filter(St=>St.id!==Pe.id),{...Pe,expiresAt:Date.now()+8e3}].slice(-3))};return L.on("connect",J),L.on("room:state",xe),L.on("disconnect",ke),L.on("connect_error",be),L.on("room:replaced",Xe),L.on("room:notice",Qe),A.current&&M.current&&L.connect(),()=>{E.current=!1,L.off("connect",J),L.off("room:state",xe),L.off("disconnect",ke),L.off("connect_error",be),L.off("room:replaced",Xe),L.off("room:notice",Qe),L.disconnect()}},[L]);const X=async()=>{A.current=!1,y(!0);try{L.connected&&await H("room:leave")}catch(J){f(J.message)}Y(),L.disconnect(),y(!1),i()},ee=async J=>{if(!N.current){N.current=!0,y(!0),f("");try{await H(J)}catch(xe){f(xe.message)}finally{N.current=!1,E.current&&y(!1)}}};rt.useEffect(()=>{if(!G||!S.current||w.current)return;const J=new wx(S.current,L,c?.code,c?.roundId,xe=>{f(xe),y(!1),n(L.connected?"join":"reconnecting")},h,v.current,{isHost:I,onLeave:()=>{X()},onEnd:()=>{ee("game:end")}});return w.current=J,J.start(),t==="results"&&J.pause(),()=>{J.dispose(),w.current===J&&(w.current=null)}},[G,L,c?.code,c?.roundId,h,I]),rt.useEffect(()=>{t==="results"?w.current?.pause():t==="playing"&&w.current?.resume()},[t]),rt.useEffect(()=>{if(t!=="results"||!c?.returnAt)return;const J=performance.now()+Math.max(0,c.returnAt-(c.serverTime||Date.now())),xe=()=>p(Math.max(0,Math.ceil((J-performance.now())/1e3)));xe();const ke=window.setInterval(xe,200);return()=>window.clearInterval(ke)},[t,c?.returnAt,c?.serverTime]);const ne=()=>L.connected?Promise.resolve():new Promise((J,xe)=>{const ke=()=>{clearTimeout(Qe),L.off("connect",be),L.off("connect_error",Xe)},be=()=>{ke(),J()},Xe=()=>{ke(),xe(new Error("無法連線至遊戲伺服器，請重試"))},Qe=setTimeout(()=>{ke(),xe(new Error("連線逾時，請重試"))},1e4);L.once("connect",be),L.once("connect_error",Xe),L.connect()}),Re=async J=>{const xe=s.trim();if(xe.length<2||xe.length>16){f("暱稱需為 2 到 16 個字元");return}A.current=!1,C.current=!0,f(""),y(!0);try{await ne(),M.current&&((await L.timeout(8e3).emitWithAck("room:resume",M.current)).error||await H("room:leave"),Y()),localStorage.setItem("chroma-name",xe);const ke=await H(J,J==="room:create"?xe:{code:a,name:xe});E.current&&se(ke)}catch(ke){E.current&&(f(ke.message),n("join"))}finally{C.current=!1,E.current&&y(!1)}},Ee=async()=>{!M.current||_||(n("reconnecting"),f(""),A.current=!0,L.disconnect(),L.sendBuffer.length=0,L.connect())},ot=()=>{Re("room:create")},qe=()=>{Re("room:join")},Ke=()=>{ee("game:start")},Z=()=>{ee("game:again")},te=()=>{ee("game:lobby")},ge=_?z.jsxs(z.Fragment,{children:[z.jsx("i",{className:"mp-spinner","aria-hidden":"true"}),"連線中…"]}):null,Ne=()=>{const J=new URL(location.href);J.searchParams.set("room",c.code),navigator.clipboard?.writeText(J.toString()).catch(()=>f("無法複製，請分享房間碼"))};if(t==="reconnecting")return z.jsx("main",{className:"mp",children:z.jsxs("section",{className:"mp-panel mp-join-panel mp-reconnect-panel",children:[z.jsx("span",{className:"mp-reconnect-orbit","aria-hidden":"true",children:z.jsx("i",{className:"mp-spinner"})}),z.jsx("p",{className:"mp-eyebrow",children:"BACK TO THE ARENA"}),z.jsx("h1",{children:"正在返回上一場"}),z.jsx("p",{className:"mp-subtitle",children:"隊友還在戰場，正在為你恢復連線。"}),z.jsxs("p",{className:"mp-reconnect-hint",children:["斷線席位保留 ",z.jsx("b",{children:"60 秒"})]}),z.jsx("p",{className:"mp-status",role:"status",children:u||"網路恢復後會自動重新連線"}),z.jsx("button",{className:"mp-primary",disabled:_,onClick:Ee,children:"重試連線"}),z.jsx("button",{className:"mp-secondary",onClick:X,children:"離開房間"})]})});if(G){const J=c?.finalStandings||[],xe=J.filter(be=>c?.winnerIds?.includes(be.id)),ke=c?.winnerIds?.includes(h);return z.jsxs("main",{className:"chroma-ops co-multiplayer-shell",children:[z.jsx("div",{className:"co-game-stage",ref:S,"aria-label":"CHROMA OPS multiplayer arena"},c?.roundId),z.jsx(_h,{notices:b,floating:!0}),u&&z.jsx("p",{className:"mp-match-error",role:"alert",children:u}),t==="results"&&z.jsx("section",{className:"mp-result",role:"dialog","aria-modal":"true","aria-labelledby":"mp-result-title",children:z.jsxs("div",{className:`mp-result-card ${ke?"is-winner":""}`,children:[z.jsx("p",{className:"mp-result-eyebrow",children:"比賽結束"}),z.jsx("h1",{id:"mp-result-title",children:c?.endReason==="draw"?"平手":ke?"勝利！":"戰鬥結束"}),z.jsx("p",{className:"mp-result-winner",children:c?.endReason==="draw"?"本局無人取得積分":z.jsxs(z.Fragment,{children:[z.jsx("b",{children:xe.map(be=>be.name).join("、")})," ",c?.endReason==="target"?`率先達到 ${c.scoreTarget} 分`:xe.length>1?"超時並列獲勝":"超時積分最高"]})}),c?.winnerTitle&&z.jsx("p",{className:"mp-result-title",children:c.winnerTitle}),z.jsxs("div",{className:"mp-result-ranking",children:[z.jsxs("header",{children:[z.jsx("span",{children:"最終排名"}),z.jsx("span",{children:"積分 · 賞金 · K/D"})]}),J.map(be=>z.jsxs("div",{className:be.id===h?"is-me":"",children:[z.jsxs("span",{children:[z.jsx("i",{children:be.rank}),be.name,c?.winnerIds?.includes(be.id)&&z.jsx("em",{children:"勝者"})]}),z.jsxs("strong",{className:be.bounty>=Xu?"is-high-bounty":"",children:[be.score,"分 · 賞",be.bounty," · ",be.kills,"/",be.deaths]})]},be.id))]}),z.jsxs("p",{className:"mp-result-countdown",children:[z.jsx("b",{children:m})," 秒後自動回到房間"]}),I?z.jsxs("div",{className:"mp-result-actions",children:[z.jsx("button",{className:"mp-primary",disabled:_,onClick:Z,children:_?ge:"立即再玩"}),z.jsx("button",{disabled:_,onClick:te,children:"立即回房間"})]}):z.jsx("p",{className:"mp-result-waiting",children:"等待房主操作，或倒數結束後自動返回"}),z.jsx("button",{className:"mp-result-leave",onClick:X,children:"離開多人模式"})]})})]})}return t==="lobby"&&c?z.jsx("main",{className:"mp",children:z.jsxs("section",{className:"mp-panel mp-lobby-panel",children:[z.jsx("button",{className:"mp-back",disabled:_,onClick:X,children:"← 離開房間"}),z.jsxs("header",{className:"mp-lobby-header",children:[z.jsxs("div",{children:[z.jsx("p",{className:"mp-eyebrow",children:"CHROMA OPS / LOBBY"}),z.jsx("h1",{children:"集結，準備開戰。"}),z.jsx("p",{className:"mp-subtitle",children:"分享房號，邀請朋友加入你的戰場。"})]}),z.jsxs("div",{className:"mp-room-code",children:[z.jsx("small",{children:"房間代碼"}),z.jsx("strong",{children:c.code}),z.jsxs("span",{children:[z.jsx("i",{}),c.players.filter(J=>J.connected).length," 位在線 · ",c.players.length," / 8 席位"]})]})]}),c.lobbyReason&&z.jsx("p",{className:"mp-status",role:"status",children:c.lobbyReason}),z.jsxs("div",{className:`mp-lobby-columns ${c.notices?.length?"":"is-roster-only"}`,children:[z.jsxs("section",{className:"mp-roster-panel","aria-label":"房間玩家",children:[z.jsxs("h2",{children:["玩家名單 ",z.jsxs("span",{children:[c.players.length.toString().padStart(2,"0")," / 08"]})]}),z.jsx("div",{className:"mp-player-list",children:c.players.map(J=>z.jsxs("div",{className:`mp-player-row ${J.connected?"":"is-offline"}`,children:[z.jsxs("span",{className:"mp-player-info",children:[z.jsxs("b",{children:[J.name,J.id===h&&z.jsx("small",{children:"你"})]}),z.jsxs("span",{children:[z.jsx("i",{}),J.connected?"已連線，準備就緒":"斷線中 · 席位保留 60 秒"]})]}),J.id===c.host&&z.jsx("span",{className:"mp-host-badge",children:"房主"})]},J.id))}),z.jsxs("div",{className:"mp-share-actions",children:[z.jsx("button",{className:"mp-secondary",onClick:()=>navigator.clipboard?.writeText(c.code).catch(()=>f("無法複製，請手動複製房間碼")),children:"複製房間碼"}),z.jsx("button",{className:"mp-secondary",onClick:Ne,children:"複製邀請連結 ↗"})]})]}),z.jsx(_h,{notices:c.notices})]}),z.jsxs("footer",{className:"mp-lobby-footer",children:[z.jsx("p",{children:I?"至少 2 位玩家在線即可開始，朋友也能中途加入。":"等待房主開始遊戲，先調整好你的手感吧。"}),I&&z.jsx("button",{className:"mp-primary",disabled:_||c.players.filter(J=>J.connected).length<2,onClick:Ke,children:_?ge:"開始遊戲 →"})]}),z.jsxs("p",{className:"mp-bounty-rules",children:["賞金競速：先達 ",Zo," 分獲勝，限時 8 分鐘。擊殺取得對方當下賞金（50～300），死亡不扣積分。賞金隨擊殺上升、連死逐步下降；超時同分並列獲勝。"]}),z.jsxs("details",{className:"mp-preferences",children:[z.jsx("summary",{children:"視角與操作設定"}),z.jsx(tc,{})]}),u&&z.jsx("p",{className:"mp-error",role:"alert",children:u})]})}):z.jsx("main",{className:"mp",children:z.jsxs("section",{className:"mp-panel mp-join-panel",children:[z.jsx("button",{className:"mp-back",disabled:_,onClick:X,children:"← 選擇模式"}),z.jsx("p",{className:"mp-eyebrow",children:"CHROMA OPS / MULTIPLAYER"}),z.jsx("h1",{children:"邀請你的隊友。"}),z.jsx("p",{className:"mp-subtitle",children:"建立專屬房間，或用房號直達戰場。"}),M.current&&z.jsx(cd,{code:M.current.code,disabled:_,onResume:Ee}),z.jsxs("label",{className:"mp-field",children:["玩家暱稱",z.jsx("input",{placeholder:"大家怎麼稱呼你？",autoComplete:"nickname",disabled:_,value:s,maxLength:"16",onChange:J=>r(J.target.value)})]}),z.jsx("button",{className:"mp-primary",disabled:_,onClick:ot,children:_?ge:"建立新房間 →"}),z.jsx("div",{className:"mp-divider",children:z.jsx("span",{children:"或加入朋友的房間"})}),z.jsxs("label",{className:"mp-field",children:["房間碼",z.jsx("input",{className:"mp-code-input",placeholder:"輸入 6 碼房號",autoCapitalize:"characters",disabled:_,value:a,maxLength:"6",onChange:J=>o(J.target.value.toUpperCase())})]}),z.jsx("button",{className:"mp-secondary",disabled:_,onClick:qe,children:_?ge:"加入房間 ↗"}),z.jsxs("p",{className:"mp-bounty-rules",children:["賞金競速：先達 ",Zo," 分獲勝，限時 8 分鐘。擊殺取得對方當下賞金（50～300），死亡不扣積分。賞金隨擊殺上升、連死逐步下降；超時同分並列獲勝。"]}),z.jsxs("details",{className:"mp-preferences",children:[z.jsx("summary",{children:"視角與操作設定"}),z.jsx(tc,{})]}),u&&z.jsx("p",{className:"mp-error",role:"alert",children:u})]})})}function Ix({onBack:i}){const e=rt.useRef(null);return rt.useEffect(()=>{const t=new Ev(e.current);return t.start(),()=>t.dispose()},[]),z.jsxs("main",{className:"chroma-ops",ref:e,children:[z.jsx("button",{className:"co-exit",onClick:i,children:"← 選擇模式"}),z.jsxs("div",{className:"co-start",children:["CHROMA OPS ",z.jsx("small",{children:"WASD 移動 · Shift 跑步 · 1–7 武器 · 狙擊槍右鍵開鏡"})]})]})}function Ux(){const[i,e]=rt.useState(()=>new URLSearchParams(location.search).has("room")?"multi":"menu"),t=od();return i==="solo"?z.jsx(Ix,{onBack:()=>e("menu")}):i==="multi"||i==="resume"?z.jsx(Lx,{resumeOnMount:i==="resume",onBack:()=>{const n=new URL(location.href);n.searchParams.delete("room"),history.replaceState(null,"",n),e("menu")}}):z.jsx("main",{className:"co-menu",children:z.jsxs("section",{className:"co-menu-card",children:[z.jsx("p",{className:"co-eyebrow",children:"NEON CITY ARENA"}),z.jsx("h1",{children:"CHROMA OPS"}),z.jsx("p",{children:"選擇你的戰場模式"}),z.jsxs("div",{className:"co-mode-grid",children:[z.jsxs("button",{onClick:()=>e("solo"),children:[z.jsx("span",{children:"◎"}),z.jsx("b",{children:"單機訓練"}),z.jsx("small",{children:"對戰 AI、熟悉地圖與武器"})]}),z.jsxs("button",{onClick:()=>e("multi"),children:[z.jsx("span",{children:"◉"}),z.jsx("b",{children:"多人連線"}),z.jsx("small",{children:"建立房間、邀請朋友對戰"})]})]}),t&&z.jsx(cd,{code:t.code,onResume:()=>e("resume")}),z.jsx(tc,{})]})})}export{Ux as default};
