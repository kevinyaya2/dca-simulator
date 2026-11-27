const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/WardenPreview-DAuz-BMN.js","assets/index-Ca8bu5xD.js","assets/index-CDSHnDx4.css","assets/WardenPreview-BAWcPL5r.css"])))=>i.map(i=>d[i]);
import{r as zt,j as O,_ as rp}from"./index-Ca8bu5xD.js";function Oa(n,t){if(n.maxY<=.05||n.minY<0)return[n];const e=n.maxX-n.minX,i=n.maxZ-n.minZ,s=n.maxY-n.minY,r=Math.ceil(e/4),a=Math.ceil(i/4),o=Math.ceil(s/4),c=[];for(let l=0;l<r;l++)for(let u=0;u<a;u++)for(let d=0;d<o;d++)c.push({...n,breakKey:`${t}:${l}:${u}:${d}`,minX:n.minX+e*l/r,maxX:n.minX+e*(l+1)/r,minY:n.minY+s*d/o,maxY:n.minY+s*(d+1)/o,minZ:n.minZ+i*u/a,maxZ:n.minZ+i*(u+1)/a});return c}function ys(n,t){return!n.breakKey||!t?.has(n.breakKey)}const tr=[{x:-65,z:45,color:3524949,name:"WEST ARCADE",side:-1},{x:68,z:44,color:1683169,name:"EAST STATION",side:1},{x:-68,z:-47,color:15613063,name:"PINK GALLERY",side:-1},{x:66,z:-48,color:15836972,name:"SUN MARKET",side:1},...[-1,1].flatMap(n=>[-90,-12,92].map((t,e)=>({x:n*112,z:t,color:[9987295,15824696,2537901][e],name:`${n<0?"WEST":"EAST"} ${["STUDIO","SHOPS","GARDEN"][e]}`,side:n})))],It=(n,t,e,i,s,r,a=0)=>({minX:n-e/2,maxX:n+e/2,minZ:t-i/2,maxZ:t+i/2,minY:a,maxY:s,color:r}),ju=tr.flatMap(n=>[{x:n.x+n.side*16,z0:n.z+25,z1:n.z+1,from:0,to:6,width:4},{x:n.x+n.side*22,z0:n.z+1,z1:n.z+25,from:6,to:12,width:4}]);function ap(n,t){for(const e of ju){const i=(t-e.z0)/(e.z1-e.z0);if(Math.abs(n-e.x)<=e.width/2&&i>=0&&i<=1)return e.from+(e.to-e.from)*i}return null}const pi=[];for(const[n,t]of tr.entries()){let e=0;const i=(s,r,a,o,c,l=t.color,u=0,d=!0)=>{const h=It(t.x+s,t.z+r,a,o,c,l,u);pi.push(...d?Oa(h,`city:${n}:${e++}`):[h])};for(const s of[0,6])for(const r of[-1,1])for(const a of["x","z"]){const o=(c,l,u,d)=>a==="x"?i(r*12,c,.4,l,d,t.color,u):i(c,r*12,l,.4,d,t.color,u);o(0,24,s+3.5,s+6);for(const c of[-7,7])o(c,10,s,s+1.2);for(const c of[-12,-6,-2,2,6,12])o(c,.6,s+1.2,s+3.5)}for(const s of[6,12]){i(-8.65,0,6.3,23.6,s,15330801,s-.3),i(5.15,0,13.3,23.6,s,15330801,s-.3),i(-3.5,-10.15,4,3.3,s,15330801,s-.3),i(-3.5,6.7,4,10.2,s,15330801,s-.3);for(const r of[s-6]){for(let a=0;a<12;a++)i(-7.5,-8+(a+.5)*.65,4,.65,r+(a+1)*.25,16761648,r),i(-3.5,-.2-(a+.5)*.65,4,.65,r+3+(a+1)*.25,16761648,r+3);i(-5.5,.9,8,2.2,r+3,16761648,r+2.7)}}for(const s of[-1,1])i(s*12,0,.25,10,13.1,16777215,12),i(0,s*12,6,.25,13.1,16777215,12);i(t.side*18,-1,12,4,6,16761648,5.7,!1),i(t.side*15,27,18,4,12,16761648,11.7,!1),i(t.side*8,20.5,4,17,12,16761648,11.7,!1)}pi.push(It(0,36,88,4,6,16761648,5.7));for(const n of[34,38])pi.push(It(0,n,80,.2,7.1,16777215,6));for(const[n,t,e]of[[-48.5,45,11],[50,44,12]])pi.push(It(n,t,e,4,6,16761648,5.7));for(const n of[-44,44]){pi.push(It(n,40.5,4,9,6,16761648,5.7));for(const t of[-1,1])pi.push(It(n+t*2,41.5,.2,3,7.1,16777215,6))}for(const n of[-36,36])pi.push(It(n,36,1.2,1.2,5.7,7174304));for(const[n,t]of[[-37.5,35],[38,36]]){pi.push(It(n,55.5,t,4,12,16761648,11.7));for(const e of[53.5,57.5])pi.push(It(n,e,t,.2,13.1,16777215,12))}for(const n of[6,12])pi.push(It(68,31,4,2,n,15330801,n-.3));for(const n of[65,71])pi.push(It(n,25,.35,.35,14,6715566));const op=pi,jr=[[-42,-65],[40,-65],[-45,18],[46,20],[-112,64],[115,65],[-30,112],[94,124]],Ko=[[-50,-64],[50,-64],[-38,36],[38,36],[-119,18],[119,18],[-40,80],[42,80],[-16,-90],[16,-90]],cp=[...jr.map(([n,t])=>It(n,t,5,5,.8,15747988)),...[[-40,5],[40,3],[-105,68],[108,68]].flatMap(([n,t])=>[It(n,t,4,1,.65,16761648),It(n,t+.5,4,.2,1.3,16761648,.65)]),...Ko.map(([n,t])=>It(n,t,.25,.25,4.6,14148848))],lp=[[-140,-114],[-104,-122],[-148,-36],[-140,75],[-78,112],[-26,-116],[28,-122],[84,-106],[140,-100],[145,-36],[126,62],[88,124],[18,126],[-42,112],[-96,58],[-112,-48],[-36,-54],[30,32],[120,24],[-56,8]],hp=[[-130,-100],[-92,-42],[-45,30],[-65,45],[-65,62],[0,32],[68,44],[68,62],[110,60],[120,-18],[88,-74],[20,-102],[-25,-54],[-112,45],[-12,104],[35,35]],up={minX:-90,maxX:90,minZ:-22,maxZ:26},Ms=[{name:"NORTH",axis:"z",outer:-46,inner:-22,cross:0,kind:"ramp"},{name:"SOUTH",axis:"z",outer:50,inner:26,cross:0,kind:"ramp"},{name:"WEST",axis:"x",outer:-114,inner:-90,cross:9,kind:"stairs"},{name:"EAST",axis:"x",outer:114,inner:90,cross:9,kind:"stairs"}],lr=Ms.map(n=>n.axis==="z"?{minX:-3,maxX:3,minZ:Math.min(n.outer,n.inner),maxZ:Math.max(n.outer,n.inner)}:{minX:Math.min(n.outer,n.inner),maxX:Math.max(n.outer,n.inner),minZ:6,maxZ:12}),jo=(n,t,e,i=0)=>n>=e.minX-i&&n<=e.maxX+i&&t>=e.minZ-i&&t<=e.maxZ+i;function dp(n,t){for(let e=0;e<Ms.length;e++)if(jo(n,t,lr[e])){const i=Ms[e],s=((i.axis==="z"?t:n)-i.outer)/(i.inner-i.outer);return i.kind==="ramp"?-6*s:-6}return jo(n,t,up)?-6:null}function Ju(n,t=lr){let e=[n];for(const i of t)e=e.flatMap(s=>{const r=Math.max(s.minX,i.minX),a=Math.min(s.maxX,i.maxX),o=Math.max(s.minZ,i.minZ),c=Math.min(s.maxZ,i.maxZ);return r>=a||o>=c?[s]:[{...s,maxX:r},{...s,minX:a},{...s,minX:r,maxX:a,maxZ:o},{...s,minX:r,maxX:a,minZ:c}].filter(l=>l.maxX-l.minX>1e-6&&l.maxZ-l.minZ>1e-6)});return e}const Ui=[It(0,2,180,48,-6,8625066,-6.4),It(0,2,180,48,0,13228511,-.35)];for(const n of[-22,26])for(const t of[-46.5,46.5])Ui.push(It(t,n,87,.4,0,5268103,-6));for(const n of[-90,90])Ui.push(It(n,-8,.4,28,0,5268103,-6),It(n,19,.4,14,0,5268103,-6));for(const n of Ms){const t=(n.outer+n.inner)/2;for(const e of[-1,1])Ui.push(n.axis==="z"?It(e*3.2,t,.4,24,1.1,8837607,-6):It(t,n.cross+e*3.2,24,.4,1.1,8837607,-6));if(n.kind==="stairs")for(let e=0;e<24;e++){const i=n.outer+Math.sign(n.inner-n.outer)*(e+.5);Ui.push(It(i,n.cross,1,6,-e*.25,16760147,-6.3))}}const Qu=[-51.5,-42.5,-33.5,-24.5,24.5,33.5,42.5,51.5].map((n,t)=>({x:n,z:2,width:9,depth:12,color:[16018351,5888449,16761946,10325231][t%4],name:["ARCADE","CAFE","SPORT","MUSIC","BOOKS","TECH","TOYS","BAKERY"][t]}));for(const n of Qu){Ui.push(It(n.x-4.5,2,.25,12,-.35,n.color,-6));for(const t of[-4,8]){for(const e of[-1,1])Ui.push(It(n.x+e*3.25,t,2.5,.25,-.35,n.color,-6));Ui.push(It(n.x,t,4,.25,-.35,n.color,-2.5))}Ui.push(It(n.x,2,3,1,-5,5861761,-6))}for(const n of[-20,56])Ui.push(It(n,2,.25,12,-.35,10325231,-6));const fp=Ui,Jo=[{x:-64,y:-6,z:18},{x:64,y:-6,z:-14},{x:-42.5,y:-6,z:5},{x:42.5,y:-6,z:-1}],Qe={x:0,z:-90,radius:22,centerY:22.2,cabins:8,period:60},pp=[16731800,3594436,16761648,4945384,13208831,16742461,5625599,9626447],Dn=(n,t,e,i,s,r,a)=>({minX:n-i/2,maxX:n+i/2,minY:t-s/2,maxY:t+s/2,minZ:e-r/2,maxZ:e+r/2,color:a}),mp=[-1,1].flatMap(n=>[Dn(n*8,10.5,-94,1.2,21,1.2,16761648),Dn(n*8,.25,-94,4,.5,4,2374768)]).concat([Dn(0,21.2,-94,17,1.2,1.2,16761648)]);function td(n,t){const e=(t/Qe.period+n/Qe.cabins)*Math.PI*2;return{x:Qe.x+Math.sin(e)*Qe.radius,y:Qe.centerY-Math.cos(e)*Qe.radius,z:Qe.z}}function pa(n,t){const{x:e,y:i,z:s}=td(n,t),r=pp[n];return[Dn(e,i-.2,s,6,.4,4,r),Dn(e-2.9,i+.55,s,.2,1.1,4,r),Dn(e+2.9,i+.55,s,.2,1.1,4,r),Dn(e,i+.55,s-1.9,5.6,1.1,.2,r)]}function gp(n){return Array.from({length:Qe.cabins},(t,e)=>pa(e,n)).flat()}function vp(n,t,e,i){for(let s=0;s<Qe.cabins;s++)for(const r of pa(s,i)){const a=Math.max(r.minX-n,0,n-r.maxX),o=Math.max(r.minZ-e,0,e-r.maxZ);if(Math.abs(t-r.maxY)<.025&&a*a+o*o<.42*.42)return s}return null}const ed=8,Ss={x:68,z:28};function id(n){const t=(n%28+28)%28;return t<3?0:t<7?(t-3)/4*6:t<10?6:t<14?6+(t-10)/4*6:t<17?12:t<21?12-(t-17)/4*6:t<24?6:6-(t-24)/4*6}function Ks(n,t){return n===ed?{x:Ss.x,y:id(t),z:Ss.z}:td(n,t)}function ma(n){const t=id(n);return[It(68,28,4,4,t,16731800,t-.3),It(66.1,28,.2,4,t+1.1,16777215,t),It(69.9,28,.2,4,t+1.1,16777215,t),It(68,26.1,4,.2,t+1.1,16777215,t)]}function Qo(n){return[...gp(n),...ma(n)]}function oh(n,t,e,i){if(Math.abs(n-Ss.x)<2.5&&Math.abs(e-Ss.z)<2.5)for(const s of ma(i)){const r=Math.max(s.minX-n,0,n-s.maxX),a=Math.max(s.minZ-e,0,e-s.maxZ);if(Math.abs(t-s.maxY)<.025&&r*r+a*a<.42*.42)return ed}return vp(n,t,e,i)}const ll={floors:[0,6,12],name:"CHROMA LAB"},ae=[],gs=[],xn=[],Qi=15330801,ji=6322567,vn=10082783,Zt=(n,t,e,i,s,r,a,o=Qi)=>{const c=It(t,e,i,s,r,o,a);n===xn?n.push(c):n.push(...Oa(c,`lab:${n===gs?"glass":"solid"}:${n.length}`))};for(const n of[6,12,18])Zt(ae,58,104,56.8,24.8,n,n-.3);Zt(ae,58,103,55.6,21.6,.02,0);for(const n of ll.floors){for(const i of[92,n===0?114:116]){for(const s of[43,73])Zt(gs,s,i,26,.18,n+5.7,n+.4,13234669),Zt(ae,s,i,26,.35,n+.4,n,Qi);n>0&&(Zt(gs,58,i,4,.18,n+5.7,n+.4,13234669),Zt(ae,58,i,4,.35,n+.4,n,Qi)),Zt(ae,58,i,56,.35,n+6,n+(n===0?4.2:5.7));for(let s=30;s<=86;s+=4)(n>0||s!==58)&&Zt(xn,s,i,.09,.26,n+5.7,n+.4,ji);for(const s of[n+.4,n+3,n+5.7])for(const r of[43,73])Zt(xn,r,i,26,.26,s+.05,s-.05,vn);if(n>0)for(const s of[n+.4,n+3,n+5.7])Zt(xn,58,i,4,.26,s+.05,s-.05,vn)}Zt(ae,30,n===0?105.25:106.25,.4,n===0?17.5:19.5,n+6,n),Zt(ae,30,94.25,.4,4.5,n+6,n+4.2);const t=n===0?103:104,e=n===0?22:24;Zt(gs,86,t,.18,e,n+5.7,n+.4,13234669),Zt(ae,86,t,.4,e,n+.4,n),Zt(ae,86,t,.4,e,n+6,n+5.7);for(const i of[92,96,100,104,108,112,n===0?114:116])Zt(xn,86,i,.26,.09,n+5.7,n+.4,ji);Zt(ae,38,105,8,.4,n+3.3,n,ji),Zt(ae,34,103,.4,4,n+3.3,n,ji),Zt(ae,72,102,6,1.2,n+1.1,n,Qi)}for(const n of ll.floors){for(let t=0;t<12;t++){const e=(t+1)*.25;Zt(ae,23.5,94.5+(t+.5)*.75,4,.75,n+e,n,Qi),Zt(ae,27.5,103.5-(t+.5)*.75,4,.75,n+3+e,n+3,Qi);for(const[i,s,r]of[[21.45,94.5+(t+.5)*.75,n+e],[29.55,103.5-(t+.5)*.75,n+3+e]])Zt(ae,i,s,.15,.75,r+1.1,r+.95,vn),Zt(ae,i,s,.15,.12,r+1.1,r,ji)}Zt(ae,25.5,104.5,8,2,n+3,n+2.7),Zt(ae,25.5,93.5,8,2,n+6,n+5.7),Zt(ae,29.75,94.25,.5,4.5,n+6,n+5.7),Zt(ae,25.5,105.5,8,.15,n+4.1,n+3,vn),Zt(ae,25.5,92.5,8,.15,n+7.1,n+6,vn);for(const t of[21.45,29.55])Zt(ae,t,104.5,.15,2,n+4.1,n+3,vn);Zt(ae,21.45,93.5,.15,2,n+7.1,n+6,vn)}Zt(ae,25.5,93.5,8,2,0,-.3);for(const n of[30,86])Zt(ae,n,106.25,.2,19.5,19.1,18,ji);for(const n of[92,116])Zt(ae,58,n,56,.2,19.1,18,ji);Zt(ae,58,98,40,.3,21,18,Qi);for(const n of[38,78])Zt(ae,n,102,.3,8,21,18,Qi);for(let n=38;n<=78;n+=2)Zt(xn,n,97.8,.1,.1,21,18,ji);Zt(ae,58,117,56,6,4.7,4.45,vn);Zt(ae,58,116.7,57,.6,18.25,17.85,Qi);for(const n of[32,40,48,68,76,84])Zt(xn,n,116.25,.22,.5,4.4,0,ji);const ch=gs,_p=xn,xp=[...ae,...gs],Fi={minX:-154,maxX:154,minZ:-140,maxZ:140,width:308,depth:280},hl=560,tc=8,lh=1.2,hi=1.65,Jr=1.8,ul=.42,yp=7,hh=14,mr=.35,vs=1e-4,Mp=lp;tr.map(n=>({...n,openSouth:!0}));const Be=(n,t,e,i,s,r,a=0)=>({minX:n-e/2,maxX:n+e/2,minZ:t-i/2,maxZ:t+i/2,minY:a,maxY:a+s,color:r}),He=[...mp,...op,...cp,...fp,...xp,Be(-152,0,4,280,19,2971848),Be(152,0,4,280,19,15479928),Be(0,-138,308,4,17,15968045),Be(0,138,308,4,17,3524949),...[Be(0,-3,6,6,3,15747925),Be(-22,13,8,3,2,16758584),Be(24,-14,8,3,2,4945384),Be(-3,20,3,8,2,8014805),Be(5,-25,3,8,2,3524949),Be(-40,-8,12,2,4,9262549),Be(-34,-19,2,18,4,9262549),Be(-49,-19,2,18,4,9262549),Be(42,10,13,2,4,15682683),Be(36,20,2,18,4,15682683),Be(49,20,2,18,4,15682683),Be(-43,-34,4,4,2,16761648),Be(42,34,4,4,2,3524949),Be(-12,92,32,3,3,3524949)].flatMap((n,t)=>Oa(n,`cover:${t}`))];function uh(n){return{boxes:He,heightAt:Hn,destroyed:n,rayCandidates:(t,e,i)=>fl(t,e,i,n)}}const dh=new WeakMap;function Qr(n,t){let e=He;if(t?.size){const s=dh.get(t);e=s??He.filter(r=>ys(r,t)),s||dh.set(t,e)}const i=Qo(n);return{boxes:[...e,...i],heightAt:Hn,boxesNear:(s,r,a)=>[...hr(s,r,a).filter(o=>ys(o,t)),...i],rayCandidates:(s,r,a)=>fl(s,r,a,t,i)}}function dl(n,t){const e=ap(n,t);return e!==null?e:n>-22&&n<22&&t>52&&t<72?12:n>-25&&n<-16&&t>40&&t<=52?t-40:n>-12&&n<20&&t>88&&t<112?6:n>-38&&n<=-12&&t>88&&t<112?Math.max(0,(n+38)/26*6):0}function Hn(n,t){return dp(n,t)??dl(n,t)}const ga=new Map;let va=1/0,_a=-1/0,xa=1/0,ya=-1/0;for(const n of He)for(let t=Math.floor(n.minX/16);t<=Math.floor(n.maxX/16);t++)for(let e=Math.floor(n.minZ/16);e<=Math.floor(n.maxZ/16);e++){const i=`${t},${e}`,s=ga.get(i)||[];s.push(n),ga.set(i,s),va=Math.min(va,t),_a=Math.max(_a,t),xa=Math.min(xa,e),ya=Math.max(ya,e)}function fl(n,t,e,i,s=[]){if(![n.x,n.y,n.z,t.x,t.y,t.z,e].every(Number.isFinite)||e<0)return[...He.filter(M=>ys(M,i)),...s];let r=0,a=e;for(const[M,T,_,A]of[[n.x,t.x,va*16,(_a+1)*16],[n.z,t.z,xa*16,(ya+1)*16]]){if(Math.abs(T)<1e-9){if(M<_||M>A)return[...s];continue}const P=(_-M)/T,L=(A-M)/T;if(r=Math.max(r,Math.min(P,L)),a=Math.min(a,Math.max(P,L)),r>a)return[...s]}const o=new Set,c=(M,T)=>{for(const _ of ga.get(`${M},${T}`)??[])ys(_,i)&&o.add(_)},l=n.x+t.x*r,u=n.z+t.z*r;let d=Math.floor(l/16),h=Math.floor(u/16);const f=Math.abs(t.x)<1e-9?0:Math.sign(t.x),g=Math.abs(t.z)<1e-9?0:Math.sign(t.z);let v=f?((f>0?(d+1)*16:d*16)-n.x)/t.x:1/0,m=g?((g>0?(h+1)*16:h*16)-n.z)/t.z:1/0;const p=f?16/Math.abs(t.x):1/0,S=g?16/Math.abs(t.z):1/0,E=Math.abs(l/16-Math.round(l/16))<1e-9,y=Math.abs(u/16-Math.round(u/16))<1e-9;E&&c(Math.round(l/16)-1,h),y&&c(d,Math.round(u/16)-1),E&&y&&c(Math.round(l/16)-1,Math.round(u/16)-1);const w=(_a-va+ya-xa+8)*2;for(let M=0;M<w&&(c(d,h),!(Math.min(v,m)>a||!f&&!g));M++)Math.abs(v-m)<1e-9?(c(d+f,h),c(d,h+g),d+=f,h+=g,v+=p,m+=S):v<m?(d+=f,v+=p):(h+=g,m+=S);for(const M of s)o.add(M);return[...o]}function hr(n,t,e=1){const i=new Set;for(let s=Math.floor((n-e)/16);s<=Math.floor((n+e)/16);s++)for(let r=Math.floor((t-e)/16);r<=Math.floor((t+e)/16);r++)for(const a of ga.get(`${s},${r}`)||[])i.add(a);return[...i]}function pl(n,t,e,i=ul){const s=Math.max(e.minX-n,0,n-e.maxX),r=Math.max(e.minZ-t,0,t-e.maxZ);return s*s+r*r<i*i}function ka(n,t,e=ul,i=0,s=He){return s===He&&(s=hr(n,t,e)),s.some(r=>pl(n,t,r,e)&&i<r.maxY-vs&&i+Jr>r.minY+vs)}function Ma(n,t,e,i){let s=0,r=i;if(Math.abs(t.x)<1e-9){if(n.x<e.minX||n.x>e.maxX)return null}else{const a=(e.minX-n.x)/t.x,o=(e.maxX-n.x)/t.x;if(s=Math.max(s,Math.min(a,o)),r=Math.min(r,Math.max(a,o)),s>r)return null}if(Math.abs(t.y)<1e-9){if(n.y<e.minY||n.y>e.maxY)return null}else{const a=(e.minY-n.y)/t.y,o=(e.maxY-n.y)/t.y;if(s=Math.max(s,Math.min(a,o)),r=Math.min(r,Math.max(a,o)),s>r)return null}if(Math.abs(t.z)<1e-9){if(n.z<e.minZ||n.z>e.maxZ)return null}else{const a=(e.minZ-n.z)/t.z,o=(e.maxZ-n.z)/t.z;if(s=Math.max(s,Math.min(a,o)),r=Math.min(r,Math.max(a,o)),s>r)return null}return s<=i?s:null}function oi(n,t,e,i={boxes:He,heightAt:Hn}){let s=e;const r=i.rayCandidates?.(n,t,e)??(i.boxes===He?fl(n,t,e,i.destroyed):i.boxes);for(const a of r){const o=Ma(n,t,a,s);o!==null&&(s=o)}for(let a=0;a<=s;a+=.1)if(n.y+t.y*a<i.heightAt(n.x+t.x*a,n.z+t.z*a))return a;return s}function ec(n,t,e,i={boxes:He,heightAt:Hn}){let s=i.heightAt(n,t);for(const r of i.boxes===He?hr(n,t):i.boxes)ys(r,i.destroyed)&&r.maxY<=e+vs&&pl(n,t,r)&&(s=Math.max(s,r.maxY));return s}function ml(n,t,e,i={boxes:He,heightAt:Hn},s=1,r){if(!n.alive)return;i.boxes===He&&(i={...i,boxes:hr(n.x,n.z,7).filter(S=>ys(S,i.destroyed))});const a=i;r!==void 0&&(i={...a,boxes:[...a.boxes,...Qo(r)]}),n.yaw-=t.lookX*.0024,n.pitch=Math.max(-1.35,Math.min(1.35,n.pitch-t.lookY*.0021));let o=n.y-hi,c=ec(n.x,n.z,o+.02,i),l=Math.abs(o-c)<=.02&&n.velocityY<=0;l?(n.jumpsUsed=0,n.velocityY=0):n.jumpsUsed===0&&(n.jumpsUsed=1),t.jump&&n.jumpsUsed<2&&(n.velocityY=yp,n.jumpsUsed++,l=!1);const u=-Math.sin(n.yaw),d=-Math.cos(n.yaw);let h=u*t.moveY+Math.cos(n.yaw)*t.moveX,f=d*t.moveY-Math.sin(n.yaw)*t.moveX;const g=Math.hypot(h,f);g>0&&(h=h/g*tc*s*(t.sprint?lh:1),f=f/g*tc*s*(t.sprint?lh:1));const v=Math.max(0,Math.min(.25,e)),m=Math.max(1,Math.ceil(v/(1/120))),p=v/m;for(let S=0;S<m;S++){if(r!==void 0){const T=r+S*p,_=T+p,A=l?oh(n.x,n.y-hi,n.z,T):null;if(A!==null){const P=Ks(A,T),L=Ks(A,_);n.x+=L.x-P.x,n.y+=L.y-P.y,n.z+=L.z-P.z}i={...a,boxes:[...a.boxes,...Qo(_)]}}o=n.y-hi;const E=(T,_)=>!ka(T,_,ul,o+(l?mr:0),i.boxes)&&i.heightAt(T,_)<=o+(l?mr:vs),y=n.x+h*p;E(y,n.z)&&(n.x=y);const w=n.z+f*p;if(E(n.x,w)&&(n.z=w),c=ec(n.x,n.z,o+(l?mr:.04),i),l&&Math.abs(c-o)<=mr){n.y=c+hi,n.velocityY=0,n.jumpsUsed=0;continue}l=!1,n.jumpsUsed===0&&(n.jumpsUsed=1);let M=o+n.velocityY*p-hh*p*p/2;if(n.velocityY-=hh*p,M>o)for(const T of i.boxes)pl(n.x,n.z,T)&&o+Jr<=T.minY+vs&&M+Jr>T.minY&&(M=Math.min(M,T.minY-Jr),n.velocityY=0);n.velocityY<=0&&o>=c-(r!==void 0?.04:vs)&&M<=c&&(M=c,n.velocityY=0,n.jumpsUsed=0,l=!0),n.y=M+hi}r!==void 0&&(n.supportId=n.velocityY<=0?oh(n.x,n.y-hi,n.z,r+v):null)}const xe={ar:{id:"ar",label:"AR-01",icon:"▰",color:5625599,magazine:30,damage:28,fireDelay:.11,reloadTime:1.25,spread:.006,range:30,headshot:2,description:"平衡全自動步槍"},smg:{id:"smg",label:"VOLT-9",icon:"≋",color:16765021,magazine:36,damage:22,fireDelay:.075,reloadTime:.9,spread:.018,range:45,headshot:2,description:"高速近距離衝鋒槍"},flame:{id:"flame",label:"焰流槍",icon:"✦",color:16739127,magazine:80,damage:20,fireDelay:.08,reloadTime:1.6,spread:.18,range:25,burn:2,description:"近距離燃燒火焰"},ice:{id:"ice",label:"霜凍槍",icon:"❄",color:7924479,magazine:24,damage:28,fireDelay:.16,reloadTime:1.3,spread:.008,range:55,headshot:2,slow:1.25,description:"命中使敵人緩速"},shotgun:{id:"shotgun",label:"裂片散彈槍",icon:"✹",color:13208831,magazine:8,damage:10,fireDelay:.75,reloadTime:1.45,spread:.12,range:35,headshot:2,pellets:10,description:"近距離高爆發"},sniper:{id:"sniper",label:"長弓狙擊槍",icon:"⌖",color:14942074,magazine:5,damage:80,fireDelay:1,reloadTime:2.5,spread:.02,scopedSpread:0,range:420,headshot:2,description:"4 倍狙擊鏡・爆頭致命"},rocket:{id:"rocket",label:"脈衝火箭炮",icon:"◆",color:16735358,magazine:4,damage:100,fireDelay:1.05,reloadTime:1.9,spread:.012,range:100,splash:5,description:"範圍爆炸傷害"},prism:{id:"prism",label:"稜鏡脈衝砲",icon:"✦",color:16764249,magazine:2,damage:160,fireDelay:1.25,reloadTime:2.6,spread:0,range:450,splash:14,description:"全收集解鎖 · 巨型能量球"}},ws=["ar","smg","flame","ice","shotgun","rocket","sniper"],xi=[...ws,"prism"];function Sp(n){return!n.has("prism")&&ws.every(t=>n.has(t))}function Ba(n=1){return 1+.1*(n-1)}function za(n,t=1){return xe[n].range*(1+.15*(t-1))}const wp=8,bp=.75;function wi(n,t=1){return Math.round(xe[n].magazine*(1+.25*(t-1)))}function Ep(){return Object.fromEntries(xi.map(n=>[n,{level:1,ammo:wi(n),reloadUntil:0,quickReloadUntil:0}]))}function nd(n,t,e){return e?t.level<3?"upgrade":t.ammo<wi(n,t.level)?"refill":"boost":"unlock"}function Tp(n,t,e,i=0,s=1e3){const r=wi(n,t.level),a=t.ammo,o=nd(n,t,e);return o==="unlock"?(t.level=1,t.ammo=wi(n),t.reloadUntil=0,t.quickReloadUntil=0):o==="upgrade"?(t.level=t.level+1,t.ammo=wi(n,t.level),t.reloadUntil=0):o==="refill"?(t.ammo=r,t.reloadUntil=0):t.quickReloadUntil=i+wp*s,{weapon:n,kind:o,level:t.level,previousCapacity:r,capacity:wi(n,t.level),ammoAdded:t.ammo-a}}function Qa(n,t,e,i=!1,s=1e3){t.reloadUntil&&e>=t.reloadUntil&&(t.ammo=wi(n,t.level),t.reloadUntil=0),!t.reloadUntil&&(t.ammo===0||i&&t.ammo<wi(n,t.level))&&(t.reloadUntil=e+xe[n].reloadTime*s*(t.quickReloadUntil>e?bp:1))}const sd={boxes:He,heightAt:Hn},ps=n=>({x:n[0],y:n[1],z:n[2]}),Ap=(n,t)=>n[0]*t[0]+n[1]*t[1]+n[2]*t[2],to=(n,t)=>[n[0]-t[0],n[1]-t[1],n[2]-t[2]],ta=n=>Math.hypot(...n),bs=n=>{const t=ta(n)||1;return n.map(e=>e/t)},Mn=(n,t,e)=>[n[0]+t[0]*e,n[1]+t[1]*e,n[2]+t[2]*e],gl=12*Math.PI/180;function Sa(n,t){const e=n.y-hi;if(n.kind==="warden"){const i=n.scale??1,s=[[0,1,0],[0,2.35,0],[0,3.55,0],[-.49,2.6,0],[.49,2.6,0]].map(([r,a,o])=>[n.x+r*i,e+a*i,n.z+o*i]);if(t){const r=Math.cos(n.yaw),a=Math.sin(n.yaw),o=t[0]-n.x,c=t[2]-n.z,l=Math.max(-.76*i,Math.min(.76*i,r*o-a*c)),u=Math.max(-.62*i,Math.min(.58*i,a*o+r*c)),d=Math.max(e+.13,Math.min(e+4.69*i,t[1]));s.push([n.x+r*l+a*u,d,n.z-a*l+r*u])}return s}return[[0,1.22,0],[0,1.92,0],[-.28,1.22,0],[.28,1.22,0],[0,.46,0]].map(([i,s,r])=>[n.x+i,e+s,n.z+r])}const ic=(n,t)=>[-Math.sin(n)*Math.cos(t),Math.sin(t),-Math.cos(n)*Math.cos(t)];function nc(n,t,e){const i=bs(Math.abs(n[1])>.999?[1,0,0]:[-n[2],0,n[0]]),s=[i[1]*n[2]-i[2]*n[1],i[2]*n[0]-i[0]*n[2],i[0]*n[1]-i[1]*n[0]];return bs([n[0]+i[0]*t+s[0]*e,n[1]+i[1]*t+s[1]*e,n[2]+i[2]*t+s[2]*e])}function Rp(n,t,e=!1,i=1){const s=xe[n],r=s.falloff,a=r?1-(1-r.minimum)*Math.max(0,Math.min(1,(t-r.start)/(r.end-r.start))):1;return Math.max(1,Math.round(s.damage*Ba(i)*a*(e?s.headshot??1:1)))}function rd(n,t,e,i){const s=Math.cos(e.yaw),r=Math.sin(e.yaw),a=n[0]-e.x,o=n[2]-e.z,c={x:s*a-r*o,y:n[1]-(e.y-hi),z:r*a+s*o},l={x:s*t[0]-r*t[2],y:t[1],z:r*t[0]+s*t[2]};if(e.kind==="warden"){const h=e.scale??1,f=Ma(c,l,{minX:-.77*h,maxX:.77*h,minY:.12,maxY:4.7*h,minZ:-.63*h,maxZ:.59*h},i);return f===null?void 0:{distance:f,kind:"body"}}const u=[{kind:"head",minX:-.26,maxX:.26,minY:1.66,maxY:2.18,minZ:-.26,maxZ:.26},{kind:"body",minX:-.15,maxX:.15,minY:1.63,maxY:1.66,minZ:-.14,maxZ:.14},{kind:"body",minX:-.34,maxX:.34,minY:.81,maxY:1.63,minZ:-.19,maxZ:.19},...[-1,1].map(h=>({kind:"body",minX:h*.48-.08,maxX:h*.48+.08,minY:1.03,maxY:1.61,minZ:-.08,maxZ:.08})),...[-1,1].map(h=>({kind:"body",minX:h*.22-.095,maxX:h*.22+.095,minY:.125,maxY:.795,minZ:-.095,maxZ:.095}))];let d;for(const h of u){const f=Ma(c,l,h,i);f!==null&&(!d||f<d.distance)&&(d={distance:f,kind:h.kind})}return d}function ea(n,t,e,i,s=sd){let r=oi(ps(n),ps(t),e,s),a=r<e?"wall":"range",o;for(const c of i){if(!c.alive)continue;const l=rd(n,t,c,r);l&&l.distance<r&&(r=l.distance,a=l.kind,o=c.id)}return{dir:t,end:Mn(n,t,r),kind:a,targetId:o}}function ad(n,t,e,i,s=Math.random,r=sd,a=!1,o=1){const c=xe[n],l=za(n,o),u=c.damage*Ba(o),d=a?c.scopedSpread??c.spread:c.spread,h=[],f=new Map,g=(v,m,p,S)=>{const E=f.get(v);E?(E.damage+=m,E.headshot||=p):f.set(v,{targetId:v,damage:m,headshot:p,position:S})};if(n==="flame"){const v=gl;h.push(ea(t,e,l,i,r));for(let m=0;m<24;m++){const p=Math.sqrt((m+.5)/24)*Math.tan(v),S=m*2.399963,E=nc(e,Math.cos(S)*p,Math.sin(S)*p);h.push(ea(t,E,l,i,r))}for(const m of i){if(!m.alive)continue;let p;for(const S of Sa(m,t)){const E=to(S,t),y=ta(E);if(y>l||y<.001)continue;const w=bs(E),M=Math.acos(Math.max(-1,Math.min(1,Ap(w,e))));M<=v&&oi(ps(t),ps(w),y,r)>=y-.001&&(!p||M<p.angle)&&(p={position:S,angle:M})}p&&g(m.id,Math.round(u*(1-.4*p.angle/v)),!1,p.position)}}else{for(let v=0;v<(c.pellets??1);v++){const m=nc(e,(s()-.5)*d,(s()-.5)*d),p=ea(t,m,l,i,r);h.push(p),n!=="rocket"&&p.targetId&&g(p.targetId,Rp(n,ta(to(p.end,t)),p.kind==="head",o),p.kind==="head",p.end)}if(n==="rocket"){const v=h[0];if(v.kind!=="range"){const m=Mn(v.end,v.dir,-.06);for(const p of i){if(!p.alive)continue;if(p.id===v.targetId){g(p.id,Math.round(u),!1,v.end);continue}const S=p.kind==="warden"?Sa(p,m):[[p.x,p.y-hi+1.22,p.z]];let E=c.splash??0,y;for(const w of S){const M=to(w,m),T=ta(M);T<E&&oi(ps(m),ps(bs(M)),T,r)>=T-.001&&(E=T,y=w)}y&&g(p.id,Math.max(1,Math.round(u*(1-E/c.splash))),!1,y)}}}}return{rays:h,hits:[...f.values()]}}class Cp{constructor(t="kill"){this.prefix=t}states=new Map;sequence=0;reset(){this.states.clear()}death(t){this.states.delete(t)}remove(t){this.states.delete(t)}record(t,e,i,s,r){this.death(e.id);const a=this.states.get(t.id),o=t.alive?{last:r,multi:a&&r-a.last<=4e3?a.multi+1:1,streak:(a?.streak??0)+1}:{last:r,multi:0,streak:0};t.alive&&this.states.set(t.id,o);const c={3:"勢如破竹",5:"大殺特殺",7:"無人能擋",10:"戰場主宰"};return{eventId:`${this.prefix}:${++this.sequence}`,at:r,attackerId:t.id,attackerName:t.name,victimId:e.id,victimName:e.name,weapon:i,headshot:s,multi:o.multi,streak:o.streak,title:c[o.streak]}}}const od=360,Mi=2.5,sc=xe.prism.splash,Pp=50,rc=.001,wa=([n,t,e])=>({x:n,y:t,z:e}),ac=(n,t)=>[n[0]-t[0],n[1]-t[1],n[2]-t[2]],fh=(n,t)=>n[0]*t[0]+n[1]*t[1]+n[2]*t[2];function cd(n,t,e,i){return{id:n,ownerId:t,position:e,direction:bs(i),remaining:xe.prism.range}}function ph(n,t,e){const i=ac(t,n),s=Math.hypot(...i);return s<rc||oi(wa(n),wa(bs(i)),s,e)>=s-rc}function mh(n,t){if(n.kind==="warden")return Sa(n,t);const e=n.y-hi;return[[n.x,e+.45,n.z],[n.x,e+1.22,n.z],[n.x,e+1.92,n.z]]}function Lp(n,t,e,i){const s=wa(n),r=wa(t);let a=oi(s,r,e,i);const o=Mn(n,t,a/2),c=i.boxesNear?.(o[0],o[2],a/2+Mi)??i.boxes;for(const l of c){const u=Ma(s,r,{minX:l.minX-Mi,maxX:l.maxX+Mi,minZ:l.minZ-Mi,maxZ:l.maxZ+Mi,minY:l.minY,maxY:l.maxY},a);if(u!==null){if(u===0){const d=s.x-Math.max(l.minX,Math.min(l.maxX,s.x)),h=s.z-Math.max(l.minZ,Math.min(l.maxZ,s.z));if(d*r.x+h*r.z>=0)continue}a=u}}return a}function Ip(n,t,e,i){const s=Math.min(n.remaining,Math.max(0,t)*od);if(!s)return null;const r=n.position,a=n.direction,o=Lp(r,a,s,i);let c=o,l;for(const f of e)if(!(!f.alive||f.id===n.ownerId))for(const g of mh(f,r)){const v=ac(g,r),m=fh(v,a),p=Mi*Mi,S=fh(v,v);if(m<0&&S>p)continue;const E=p-(S-m*m);if(E<0)continue;const y=Math.max(0,m-Math.sqrt(E));y>=c||!ph(Mn(r,a,y),g,i)||(c=y,l=f.id)}n.position=Mn(r,a,c),n.remaining-=c;const u=o<s;if(!l&&!u&&n.remaining>rc)return null;const d=u&&!l?Mn(r,a,Math.max(0,c-.12)):n.position,h=[];for(const f of e){if(!f.alive||f.id===n.ownerId)continue;let g=sc,v;for(const S of mh(f,d)){const E=Math.hypot(...ac(S,d));E>g||!ph(d,S,i)||(g=E,v=S)}if(!v)continue;const m=xe.prism.damage,p=f.id===l?m:Math.round(m+(Pp-m)*g/sc);h.push({targetId:f.id,damage:p,headshot:!1,position:v})}return{impact:{id:n.id,position:n.position},hits:h}}const vl="186",w1={ROTATE:0,DOLLY:1,PAN:2},b1={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Dp=0,gh=1,Np=2,ia=1,Up=2,Xs=3,kn=0,ni=1,Pe=2,tn=0,Fn=1,ti=2,vh=3,_h=4,Fp=5,fs=100,Op=101,kp=102,Bp=103,zp=104,Hp=200,Gp=201,Vp=202,Wp=203,ld=204,hd=205,Xp=206,qp=207,Yp=208,$p=209,Zp=210,Kp=211,jp=212,Jp=213,Qp=214,oc=0,cc=1,lc=2,er=3,hc=4,uc=5,dc=6,fc=7,ud=0,tm=1,em=2,Bi=0,dd=1,fd=2,pd=3,md=4,gd=5,vd=6,_d=7,xd=300,Bn=301,Es=302,eo=303,io=304,Ha=306,pc=1e3,Ji=1001,mc=1002,Ge=1003,im=1004,gr=1005,Ve=1006,no=1007,Nn=1008,ai=1009,yd=1010,Md=1011,ir=1012,_l=1013,Gi=1014,bi=1015,Vi=1016,xl=1017,yl=1018,nr=1020,Sd=35902,wd=35899,bd=1021,Ed=1022,Ei=1023,sn=1026,Un=1027,Ml=1028,Sl=1029,zn=1030,wl=1031,bl=1033,na=33776,sa=33777,ra=33778,aa=33779,gc=35840,vc=35841,_c=35842,xc=35843,yc=36196,Mc=37492,Sc=37496,wc=37488,bc=37489,ba=37490,Ec=37491,Tc=37808,Ac=37809,Rc=37810,Cc=37811,Pc=37812,Lc=37813,Ic=37814,Dc=37815,Nc=37816,Uc=37817,Fc=37818,Oc=37819,kc=37820,Bc=37821,zc=36492,Hc=36494,Gc=36495,Vc=36283,Wc=36284,Ea=36285,Xc=36286,nm=3200,qc=0,sm=1,_n="",ei="srgb",Ta="srgb-linear",Aa="linear",he="srgb",so=7680,rm=519,am=512,om=513,cm=514,El=515,lm=516,hm=517,Tl=518,um=519,Td=35044,Oi=35048,xh="300 es",ki=2e3,sr=2001;function dm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ra(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function fm(){const n=Ra("canvas");return n.style.display="block",n}const yh={};function Ca(...n){const t="THREE."+n.shift();console.log(t,...n)}function Ad(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ut(...n){n=Ad(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ne(...n){n=Ad(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function _s(...n){const t=n.join(" ");t in yh||(yh[t]=!0,Ut(...n))}function pm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const mm={[oc]:cc,[lc]:dc,[hc]:fc,[er]:uc,[cc]:oc,[dc]:lc,[fc]:hc,[uc]:er};class En{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const $e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mh=1234567;const js=Math.PI/180,rr=180/Math.PI;function en(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]).toLowerCase()}function Kt(n,t,e){return Math.max(t,Math.min(e,n))}function Al(n,t){return(n%t+t)%t}function gm(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function vm(n,t,e){return n!==t?(e-n)/(t-n):0}function Js(n,t,e){return(1-e)*n+e*t}function _m(n,t,e,i){return Js(n,t,1-Math.exp(-e*i))}function xm(n,t=1){return t-Math.abs(Al(n,t*2)-t)}function ym(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Mm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Sm(n,t){return n+Math.floor(Math.random()*(t-n+1))}function wm(n,t){return n+Math.random()*(t-n)}function bm(n){return n*(.5-Math.random())}function Em(n){n!==void 0&&(Mh=n);let t=Mh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Tm(n){return n*js}function Am(n){return n*rr}function Rm(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Cm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Pm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Lm(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),u=a((t+i)/2),d=r((t-i)/2),h=a((t-i)/2),f=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*u,c*d,c*h,o*l);break;case"YZY":n.set(c*h,o*u,c*d,o*l);break;case"ZXZ":n.set(c*d,c*h,o*u,o*l);break;case"XZX":n.set(o*u,c*g,c*f,o*l);break;case"YXY":n.set(c*f,o*u,c*g,o*l);break;case"ZYZ":n.set(c*g,c*f,o*u,o*l);break;default:Ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Si(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ue(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Re={DEG2RAD:js,RAD2DEG:rr,generateUUID:en,clamp:Kt,euclideanModulo:Al,mapLinear:gm,inverseLerp:vm,lerp:Js,damp:_m,pingpong:xm,smoothstep:ym,smootherstep:Mm,randInt:Sm,randFloat:wm,randFloatSpread:bm,seededRandom:Em,degToRad:Tm,radToDeg:Am,isPowerOfTwo:Rm,ceilPowerOfTwo:Cm,floorPowerOfTwo:Pm,setQuaternionFromProperEuler:Lm,normalize:ue,denormalize:Si},ql=class ql{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ql.prototype.isVector2=!0;let Ot=ql;class Wi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(d!==v||c!==h||l!==f||u!==g){let m=c*h+l*f+u*g+d*v;m<0&&(h=-h,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){const S=Math.acos(m),E=Math.sin(S);p=Math.sin(p*S)/E,o=Math.sin(o*S)/E,c=c*p+h*o,l=l*p+f*o,u=u*p+g*o,d=d*p+v*o}else{c=c*p+h*o,l=l*p+f*o,u=u*p+g*o,d=d*p+v*o;const S=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=S,l*=S,u*=S,d*=S}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*d+c*f-l*h,t[e+1]=c*g+u*h+l*d-o*f,t[e+2]=l*g+u*f+o*h-c*d,t[e+3]=u*g-o*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),d=o(r/2),h=c(i/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=i+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Yl=class Yl{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),u=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+c*l+a*d-o*u,this.y=i+c*u+o*l-r*d,this.z=s+c*d+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ro.copy(this).projectOnVector(t),this.sub(ro)}reflect(t){return this.sub(ro.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yl.prototype.isVector3=!0;let R=Yl;const ro=new R,Sh=new Wi,$l=class $l{constructor(t,e,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],S=s[1],E=s[4],y=s[7],w=s[2],M=s[5],T=s[8];return r[0]=a*v+o*S+c*w,r[3]=a*m+o*E+c*M,r[6]=a*p+o*y+c*T,r[1]=l*v+u*S+d*w,r[4]=l*m+u*E+d*M,r[7]=l*p+u*y+d*T,r[2]=h*v+f*S+g*w,r[5]=h*m+f*E+g*M,r[8]=h*p+f*y+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=u*a-o*l,h=o*c-u*r,f=l*r-a*c,g=e*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(s*l-u*i)*v,t[2]=(o*i-s*a)*v,t[3]=h*v,t[4]=(u*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(i*c-l*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return _s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ao.makeScale(t,e)),this}rotate(t){return _s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ao.makeRotation(-t)),this}translate(t,e){return _s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ao.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};$l.prototype.isMatrix3=!0;let Ht=$l;const ao=new Ht,wh=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bh=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Im(){const n={enabled:!0,workingColorSpace:Ta,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===he&&(s.r=nn(s.r),s.g=nn(s.g),s.b=nn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===he&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_n?Aa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return _s("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return _s("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ta]:{primaries:t,whitePoint:i,transfer:Aa,toXYZ:wh,fromXYZ:bh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:t,whitePoint:i,transfer:he,toXYZ:wh,fromXYZ:bh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),n}const Qt=Im();function nn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let qn;class Dm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{qn===void 0&&(qn=Ra("canvas")),qn.width=t.width,qn.height=t.height;const s=qn.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=qn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ra("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=nn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(nn(e[i]/255)*255):e[i]=nn(e[i]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Nm=0;class Rl{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=en(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(oo(s[a].image)):r.push(oo(s[a]))}else r=oo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function oo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Dm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}let Um=0;const co=new R;class We extends En{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,i=Ji,s=Ji,r=Ve,a=Nn,o=Ei,c=ai,l=We.DEFAULT_ANISOTROPY,u=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=en(),this.name="",this.source=new Rl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(co).x}get height(){return this.source.getSize(co).y}get depth(){return this.source.getSize(co).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pc:t.x=t.x-Math.floor(t.x);break;case Ji:t.x=t.x<0?0:1;break;case mc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pc:t.y=t.y-Math.floor(t.y);break;case Ji:t.y=t.y<0?0:1;break;case mc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=xd;We.DEFAULT_ANISOTROPY=1;const Zl=class Zl{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,y=(f+1)/2,w=(p+1)/2,M=(u+h)/4,T=(d+v)/4,_=(g+m)/4;return E>y&&E>w?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=M/i,r=T/i):y>w?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=M/s,r=_/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=T/r,s=_/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-v)/S,this.z=(h-u)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zl.prototype.isVector4=!0;let Ee=Zl;class Fm extends En{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new We(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ve,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Rl(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends Fm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Rd extends We{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Om extends We{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Fa=class Fa{constructor(t,e,i,s,r,a,o,c,l,u,d,h,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,u,d,h,f,g,v,m)}set(t,e,i,s,r,a,o,c,l,u,d,h,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fa().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/Yn.setFromMatrixColumn(t,0).length(),r=1/Yn.setFromMatrixColumn(t,1).length(),a=1/Yn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=a*u,f=a*d,g=o*u,v=o*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=h-v*l,e[9]=-o*c,e[2]=v-h*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const h=c*u,f=c*d,g=l*u,v=l*d;e[0]=h+v*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=v+h*o,e[10]=a*c}else if(t.order==="ZXY"){const h=c*u,f=c*d,g=l*u,v=l*d;e[0]=h-v*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=v-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const h=a*u,f=a*d,g=o*u,v=o*d;e[0]=c*u,e[4]=g*l-f,e[8]=h*l+v,e[1]=c*d,e[5]=v*l+h,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const h=a*c,f=a*l,g=o*c,v=o*l;e[0]=c*u,e[4]=v-h*d,e[8]=g*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=f*d+g,e[10]=h-v*d}else if(t.order==="XZY"){const h=a*c,f=a*l,g=o*c,v=o*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+v,e[5]=a*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*u,e[10]=v*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(km,t,Bm)}lookAt(t,e,i){const s=this.elements;return si.subVectors(t,e),si.lengthSq()===0&&(si.z=1),si.normalize(),un.crossVectors(i,si),un.lengthSq()===0&&(Math.abs(i.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),un.crossVectors(i,si)),un.normalize(),vr.crossVectors(si,un),s[0]=un.x,s[4]=vr.x,s[8]=si.x,s[1]=un.y,s[5]=vr.y,s[9]=si.y,s[2]=un.z,s[6]=vr.z,s[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],S=i[3],E=i[7],y=i[11],w=i[15],M=s[0],T=s[4],_=s[8],A=s[12],P=s[1],L=s[5],F=s[9],B=s[13],I=s[2],V=s[6],z=s[10],Y=s[14],it=s[3],q=s[7],Q=s[11],et=s[15];return r[0]=a*M+o*P+c*I+l*it,r[4]=a*T+o*L+c*V+l*q,r[8]=a*_+o*F+c*z+l*Q,r[12]=a*A+o*B+c*Y+l*et,r[1]=u*M+d*P+h*I+f*it,r[5]=u*T+d*L+h*V+f*q,r[9]=u*_+d*F+h*z+f*Q,r[13]=u*A+d*B+h*Y+f*et,r[2]=g*M+v*P+m*I+p*it,r[6]=g*T+v*L+m*V+p*q,r[10]=g*_+v*F+m*z+p*Q,r[14]=g*A+v*B+m*Y+p*et,r[3]=S*M+E*P+y*I+w*it,r[7]=S*T+E*L+y*V+w*q,r[11]=S*_+E*F+y*z+w*Q,r[15]=S*A+E*B+y*Y+w*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15],S=c*f-l*h,E=o*f-l*d,y=o*h-c*d,w=a*f-l*u,M=a*h-c*u,T=a*d-o*u;return e*(v*S-m*E+p*y)-i*(g*S-m*w+p*M)+s*(g*E-v*w+p*T)-r*(g*y-v*M+m*T)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-i*(r*u-o*c)+s*(r*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],S=e*o-i*a,E=e*c-s*a,y=e*l-r*a,w=i*c-s*o,M=i*l-r*o,T=s*l-r*c,_=u*v-d*g,A=u*m-h*g,P=u*p-f*g,L=d*m-h*v,F=d*p-f*v,B=h*p-f*m,I=S*B-E*F+y*L+w*P-M*A+T*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/I;return t[0]=(o*B-c*F+l*L)*V,t[1]=(s*F-i*B-r*L)*V,t[2]=(v*T-m*M+p*w)*V,t[3]=(h*M-d*T-f*w)*V,t[4]=(c*P-a*B-l*A)*V,t[5]=(e*B-s*P+r*A)*V,t[6]=(m*y-g*T-p*E)*V,t[7]=(u*T-h*y+f*E)*V,t[8]=(a*F-o*P+l*_)*V,t[9]=(i*P-e*F-r*_)*V,t[10]=(g*M-v*y+p*S)*V,t[11]=(d*y-u*M-f*S)*V,t[12]=(o*A-a*L-c*_)*V,t[13]=(e*L-i*A+s*_)*V,t[14]=(v*E-g*w-m*S)*V,t[15]=(u*w-d*E+h*S)*V,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,d=o+o,h=r*l,f=r*u,g=r*d,v=a*u,m=a*d,p=o*d,S=c*l,E=c*u,y=c*d,w=i.x,M=i.y,T=i.z;return s[0]=(1-(v+p))*w,s[1]=(f+y)*w,s[2]=(g-E)*w,s[3]=0,s[4]=(f-y)*M,s[5]=(1-(h+p))*M,s[6]=(m+S)*M,s[7]=0,s[8]=(g+E)*T,s[9]=(m-S)*T,s[10]=(1-(h+v))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Yn.set(s[0],s[1],s[2]).length();const o=Yn.set(s[4],s[5],s[6]).length(),c=Yn.set(s[8],s[9],s[10]).length();r<0&&(a=-a),gi.copy(this);const l=1/a,u=1/o,d=1/c;return gi.elements[0]*=l,gi.elements[1]*=l,gi.elements[2]*=l,gi.elements[4]*=u,gi.elements[5]*=u,gi.elements[6]*=u,gi.elements[8]*=d,gi.elements[9]*=d,gi.elements[10]*=d,e.setFromRotationMatrix(gi),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,s,r,a,o=ki,c=!1){const l=this.elements,u=2*r/(e-t),d=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let g,v;if(c)g=r/(a-r),v=a*r/(a-r);else if(o===ki)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===sr)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=ki,c=!1){const l=this.elements,u=2/(e-t),d=2/(i-s),h=-(e+t)/(e-t),f=-(i+s)/(i-s);let g,v;if(c)g=1/(a-r),v=a/(a-r);else if(o===ki)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===sr)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Fa.prototype.isMatrix4=!0;let se=Fa;const Yn=new R,gi=new se,km=new R(0,0,0),Bm=new R(1,1,1),un=new R,vr=new R,si=new R,Eh=new se,Th=new Wi;class wn{constructor(t=0,e=0,i=0,s=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Eh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Th.setFromEuler(this),this.setFromQuaternion(Th,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class Cd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zm=0;const Ah=new R,$n=new Wi,qi=new se,_r=new R,Ls=new R,Hm=new R,Gm=new Wi,Rh=new R(1,0,0),Ch=new R(0,1,0),Ph=new R(0,0,1),Lh={type:"added"},Vm={type:"removed"},Zn={type:"childadded",child:null},lo={type:"childremoved",child:null};class ge extends En{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=en(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new R,e=new wn,i=new Wi,s=new R(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Ht}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.multiply($n),this}rotateOnWorldAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.premultiply($n),this}rotateX(t){return this.rotateOnAxis(Rh,t)}rotateY(t){return this.rotateOnAxis(Ch,t)}rotateZ(t){return this.rotateOnAxis(Ph,t)}translateOnAxis(t,e){return Ah.copy(t).applyQuaternion(this.quaternion),this.position.add(Ah.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rh,t)}translateY(t){return this.translateOnAxis(Ch,t)}translateZ(t){return this.translateOnAxis(Ph,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?_r.copy(t):_r.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Ls,_r,this.up):qi.lookAt(_r,Ls,this.up),this.quaternion.setFromRotationMatrix(qi),s&&(qi.extractRotation(s.matrixWorld),$n.setFromRotationMatrix(qi),this.quaternion.premultiply($n.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lh),Zn.child=t,this.dispatchEvent(Zn),Zn.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vm),lo.child=t,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lh),Zn.child=t,this.dispatchEvent(Zn),Zn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,t,Hm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,Gm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ge.DEFAULT_UP=new R(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class de extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wm={type:"move"};class ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new de,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new de,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new de,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new de;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={h:0,s:0,l:0},xr={h:0,s:0,l:0};function uo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Lt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ei){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Qt.workingColorSpace){if(t=Al(t,1),e=Kt(e,0,1),i=Kt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=uo(a,r,t+1/3),this.g=uo(a,r,t),this.b=uo(a,r,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=ei){function i(r){r!==void 0&&parseFloat(r)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ei){const i=Pd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=nn(t.r),this.g=nn(t.g),this.b=nn(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ei){return Qt.workingToColorSpace(Ze.copy(this),t),Math.round(Kt(Ze.r*255,0,255))*65536+Math.round(Kt(Ze.g*255,0,255))*256+Math.round(Kt(Ze.b*255,0,255))}getHexString(t=ei){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(Ze.copy(this),e);const i=Ze.r,s=Ze.g,r=Ze.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=ei){Qt.workingToColorSpace(Ze.copy(this),t);const e=Ze.r,i=Ze.g,s=Ze.b;return t!==ei?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(dn),this.setHSL(dn.h+t,dn.s+e,dn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(dn),t.getHSL(xr);const i=Js(dn.h,xr.h,e),s=Js(dn.s,xr.s,e),r=Js(dn.l,xr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ze=new Lt;Lt.NAMES=Pd;class Cl extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const vi=new R,Yi=new R,fo=new R,$i=new R,Kn=new R,jn=new R,Ih=new R,po=new R,mo=new R,go=new R,vo=new Ee,_o=new Ee,xo=new Ee;class di{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),vi.subVectors(t,e),s.cross(vi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){vi.subVectors(s,e),Yi.subVectors(i,e),fo.subVectors(t,e);const a=vi.dot(vi),o=vi.dot(Yi),c=vi.dot(fo),l=Yi.dot(Yi),u=Yi.dot(fo),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-o*u)*h,g=(a*u-o*c)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,$i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,$i.x),c.addScaledVector(a,$i.y),c.addScaledVector(o,$i.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return vo.setScalar(0),_o.setScalar(0),xo.setScalar(0),vo.fromBufferAttribute(t,e),_o.fromBufferAttribute(t,i),xo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(vo,r.x),a.addScaledVector(_o,r.y),a.addScaledVector(xo,r.z),a}static isFrontFacing(t,e,i,s){return vi.subVectors(i,e),Yi.subVectors(t,e),vi.cross(Yi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),vi.cross(Yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return di.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return di.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return di.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return di.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return di.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Kn.subVectors(s,i),jn.subVectors(r,i),po.subVectors(t,i);const c=Kn.dot(po),l=jn.dot(po);if(c<=0&&l<=0)return e.copy(i);mo.subVectors(t,s);const u=Kn.dot(mo),d=jn.dot(mo);if(u>=0&&d<=u)return e.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(i).addScaledVector(Kn,a);go.subVectors(t,r);const f=Kn.dot(go),g=jn.dot(go);if(g>=0&&f<=g)return e.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(jn,o);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Ih.subVectors(r,s),o=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(Ih,o);const p=1/(m+v+h);return a=v*p,o=h*p,e.copy(i).addScaledVector(Kn,a).addScaledVector(jn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Gn{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(_i.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(_i.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=_i.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_i):_i.fromBufferAttribute(r,a),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yr.copy(i.boundingBox)),yr.applyMatrix4(t.matrixWorld),this.union(yr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),Mr.subVectors(this.max,Is),Jn.subVectors(t.a,Is),Qn.subVectors(t.b,Is),ts.subVectors(t.c,Is),fn.subVectors(Qn,Jn),pn.subVectors(ts,Qn),Rn.subVectors(Jn,ts);let e=[0,-fn.z,fn.y,0,-pn.z,pn.y,0,-Rn.z,Rn.y,fn.z,0,-fn.x,pn.z,0,-pn.x,Rn.z,0,-Rn.x,-fn.y,fn.x,0,-pn.y,pn.x,0,-Rn.y,Rn.x,0];return!yo(e,Jn,Qn,ts,Mr)||(e=[1,0,0,0,1,0,0,0,1],!yo(e,Jn,Qn,ts,Mr))?!1:(Sr.crossVectors(fn,pn),e=[Sr.x,Sr.y,Sr.z],yo(e,Jn,Qn,ts,Mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Zi=[new R,new R,new R,new R,new R,new R,new R,new R],_i=new R,yr=new Gn,Jn=new R,Qn=new R,ts=new R,fn=new R,pn=new R,Rn=new R,Is=new R,Mr=new R,Sr=new R,Cn=new R;function yo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Cn.fromArray(n,r);const o=s.x*Math.abs(Cn.x)+s.y*Math.abs(Cn.y)+s.z*Math.abs(Cn.z),c=t.dot(Cn),l=e.dot(Cn),u=i.dot(Cn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Ie=new R,wr=new Ot;let Xm=0;class Fe extends En{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Td,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)wr.fromBufferAttribute(this,e),wr.applyMatrix3(t),this.setXY(e,wr.x,wr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Si(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Si(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Si(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Si(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Ld extends Fe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Id extends Fe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ee extends Fe{constructor(t,e,i){super(new Float32Array(t),e,i)}}const qm=new Gn,Ds=new R,Mo=new R;class Vn{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):qm.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);const e=Ds.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ds,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(Mo)),this.expandByPoint(Ds.copy(t.center).sub(Mo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Ym=0;const li=new se,So=new ge,es=new R,ri=new Gn,Ns=new Gn,ze=new R;class pe extends En{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=en(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dm(t)?Id:Ld)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ht().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,e,i){return li.makeTranslation(t,e,i),this.applyMatrix4(li),this}scale(t,e,i){return li.makeScale(t,e,i),this.applyMatrix4(li),this}lookAt(t){return So.lookAt(t),So.updateMatrix(),this.applyMatrix4(So.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ee(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const i=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ns.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(ri.min,Ns.min),ri.expandByPoint(ze),ze.addVectors(ri.max,Ns.max),ri.expandByPoint(ze)):(ri.expandByPoint(Ns.min),ri.expandByPoint(Ns.max))}ri.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ze));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)ze.fromBufferAttribute(o,l),c&&(es.fromBufferAttribute(t,l),ze.add(es)),s=Math.max(s,i.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Fe(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new R,c[_]=new R;const l=new R,u=new R,d=new R,h=new Ot,f=new Ot,g=new Ot,v=new R,m=new R;function p(_,A,P){l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,P),h.fromBufferAttribute(r,_),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,P),u.sub(l),d.sub(l),f.sub(h),g.sub(h);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),o[_].add(v),o[A].add(v),o[P].add(v),c[_].add(m),c[A].add(m),c[P].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let _=0,A=S.length;_<A;++_){const P=S[_],L=P.start,F=P.count;for(let B=L,I=L+F;B<I;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const E=new R,y=new R,w=new R,M=new R;function T(_){w.fromBufferAttribute(s,_),M.copy(w);const A=o[_];E.copy(A),E.sub(w.multiplyScalar(w.dot(A))).normalize(),y.crossVectors(M,A);const L=y.dot(c[_])<0?-1:1;a.setXYZW(_,E.x,E.y,E.z,L)}for(let _=0,A=S.length;_<A;++_){const P=S[_],L=P.start,F=P.count;for(let B=L,I=L+F;B<I;B+=3)T(t.getX(B+0)),T(t.getX(B+1)),T(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new R,r=new R,a=new R,o=new R,c=new R,l=new R,u=new R,d=new R;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new Fe(h,u,d)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pe,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,i);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=t(h,i);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $m{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Td,this.updateRanges=[],this.version=0,this.uuid=en()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=en()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=en()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const je=new R;class Pa{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Si(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Si(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Si(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Si(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Si(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ca("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Pa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ca("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const wo=new R,Zm=new R,Km=new Ht;class gn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=wo.subVectors(i,e).cross(Zm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(wo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Km.getNormalMatrix(t),s=this.coplanarPoint(wo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let jm=0;class Tn extends En{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=en(),this.name="",this.type="Material",this.blending=Fn,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ld,this.blendDst=hd,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=so,this.stencilZFail=so,this.stencilZPass=so,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Lt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new gn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ot().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ur extends Tn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let is;const Us=new R,ns=new R,ss=new R,rs=new Ot,Fs=new Ot,Dd=new se,br=new R,Os=new R,Er=new R,Dh=new Ot,bo=new Ot,Nh=new Ot;class dr extends ge{constructor(t=new ur){if(super(),this.isSprite=!0,this.type="Sprite",is===void 0){is=new pe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new $m(e,5);is.setIndex([0,1,2,0,2,3]),is.setAttribute("position",new Pa(i,3,0,!1)),is.setAttribute("uv",new Pa(i,2,3,!1))}this.geometry=is,this.material=t,this.center=new Ot(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ns.setFromMatrixScale(this.matrixWorld),Dd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ss.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ns.multiplyScalar(-ss.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;Tr(br.set(-.5,-.5,0),ss,a,ns,s,r),Tr(Os.set(.5,-.5,0),ss,a,ns,s,r),Tr(Er.set(.5,.5,0),ss,a,ns,s,r),Dh.set(0,0),bo.set(1,0),Nh.set(1,1);let o=t.ray.intersectTriangle(br,Os,Er,!1,Us);if(o===null&&(Tr(Os.set(-.5,.5,0),ss,a,ns,s,r),bo.set(0,1),o=t.ray.intersectTriangle(br,Er,Os,!1,Us),o===null))return;const c=t.ray.origin.distanceTo(Us);c<t.near||c>t.far||e.push({distance:c,point:Us.clone(),uv:di.getInterpolation(Us,br,Os,Er,Dh,bo,Nh,new Ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Tr(n,t,e,i,s,r){rs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Fs.x=r*rs.x-s*rs.y,Fs.y=s*rs.x+r*rs.y):Fs.copy(rs),n.copy(t),n.x+=Fs.x,n.y+=Fs.y,n.applyMatrix4(Dd)}const Ki=new R,Eo=new R,Ar=new R,Rr=new R;class Pl{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ki)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ki.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ki.copy(this.origin).addScaledVector(this.direction,e),Ki.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Eo.copy(t).add(e).multiplyScalar(.5),Ar.copy(e).sub(t).normalize(),Rr.copy(this.origin).sub(Eo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ar),o=Rr.dot(this.direction),c=-Rr.dot(Ar),l=Rr.lengthSq(),u=Math.abs(1-a*a);let d,h,f,g;if(u>0)if(d=a*c-o,h=a*o-c,g=r*u,d>=0)if(h>=-g)if(h<=g){const v=1/u;d*=v,h*=v,f=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Eo).addScaledVector(Ar,h),f}intersectSphere(t,e){if(t.radius<0)return null;Ki.subVectors(t.center,this.origin);const i=Ki.dot(this.direction),s=Ki.dot(Ki)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ki)!==null}intersectTriangle(t,e,i,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,f=t.z-a.z,g=e.x-a.x,v=e.y-a.y,m=e.z-a.z,p=i.x-a.x,S=i.y-a.y,E=i.z-a.z,y=Math.abs(c),w=Math.abs(l),M=Math.abs(u);let T,_,A,P,L,F,B,I,V,z,Y,it;if(y>=w&&y>=M?(A=c,F=d,V=g,it=p,c>=0?(T=l,_=u,P=h,L=f,B=v,I=m,z=S,Y=E):(T=u,_=l,P=f,L=h,B=m,I=v,z=E,Y=S)):w>=M?(A=l,F=h,V=v,it=S,l>=0?(T=u,_=c,P=f,L=d,B=m,I=g,z=E,Y=p):(T=c,_=u,P=d,L=f,B=g,I=m,z=p,Y=E)):(A=u,F=f,V=m,it=E,u>=0?(T=c,_=l,P=d,L=h,B=g,I=v,z=p,Y=S):(T=l,_=c,P=h,L=d,B=v,I=g,z=S,Y=p)),A===0)return null;const q=T/A,Q=_/A,et=1/A,Ct=P-q*F,Mt=L-Q*F,re=B-q*V,Jt=I-Q*V,te=z-q*it,$=Y-Q*it,tt=te*Jt-$*re,xt=Ct*$-Mt*te,kt=re*Mt-Jt*Ct;if(s){if(tt<0||xt<0||kt<0)return null}else if((tt<0||xt<0||kt<0)&&(tt>0||xt>0||kt>0))return null;const gt=tt+xt+kt;if(gt===0)return null;const Vt=et*(tt*F+xt*V+kt*it);return(gt>0?Vt<0:Vt>0)?null:this.at(Vt/gt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft extends Tn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Uh=new se,Pn=new Pl,Cr=new Vn,Fh=new R,Pr=new R,Lr=new R,Ir=new R,To=new R,Dr=new R,Oh=new R,Nr=new R;class _t extends ge{constructor(t=new pe,e=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Dr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],d=r[c];u!==0&&(To.fromBufferAttribute(d,t),a?Dr.addScaledVector(To,u):Dr.addScaledVector(To.sub(e),u))}e.add(Dr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cr.copy(i.boundingSphere),Cr.applyMatrix4(r),Pn.copy(t.ray).recast(t.near),!(Cr.containsPoint(Pn.origin)===!1&&(Pn.intersectSphere(Cr,Fh)===null||Pn.origin.distanceToSquared(Fh)>(t.far-t.near)**2))&&(Uh.copy(r).invert(),Pn.copy(t.ray).applyMatrix4(Uh),!(i.boundingBox!==null&&Pn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Pn)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,w=E;y<w;y+=3){const M=o.getX(y),T=o.getX(y+1),_=o.getX(y+2);s=Ur(this,p,t,i,l,u,d,M,T,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const S=o.getX(m),E=o.getX(m+1),y=o.getX(m+2);s=Ur(this,a,t,i,l,u,d,S,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,w=E;y<w;y+=3){const M=y,T=y+1,_=y+2;s=Ur(this,p,t,i,l,u,d,M,T,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const S=m,E=m+1,y=m+2;s=Ur(this,a,t,i,l,u,d,S,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Jm(n,t,e,i,s,r,a,o){let c;if(t.side===ni?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===kn,o),c===null)return null;Nr.copy(o),Nr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Nr);return l<e.near||l>e.far?null:{distance:l,point:Nr.clone(),object:n}}function Ur(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,Pr),n.getVertexPosition(c,Lr),n.getVertexPosition(l,Ir);const u=Jm(n,t,e,i,Pr,Lr,Ir,Oh);if(u){const d=new R;di.getBarycoord(Oh,Pr,Lr,Ir,d),s&&(u.uv=di.getInterpolatedAttribute(s,o,c,l,d,new Ot)),r&&(u.uv1=di.getInterpolatedAttribute(r,o,c,l,d,new Ot)),a&&(u.normal=di.getInterpolatedAttribute(a,o,c,l,d,new R),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new R,materialIndex:0};di.getNormal(Pr,Lr,Ir,h.normal),u.face=h,u.barycoord=d}return u}class Ll extends We{constructor(t=null,e=1,i=1,s,r,a,o,c,l=Ge,u=Ge,d,h){super(null,a,o,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kh extends Fe{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const as=new se,Bh=new se,Fr=[],zh=new Gn,Qm=new se,ks=new _t,Bs=new Vn;class yn extends _t{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new kh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Qm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,as),zh.copy(t.boundingBox).applyMatrix4(as),this.boundingBox.union(zh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,as),Bs.copy(t.boundingSphere).applyMatrix4(as),this.boundingSphere.union(Bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(i),t.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,as),Bh.multiplyMatrices(i,as),ks.matrixWorld=Bh,ks.raycast(t,Fr);for(let a=0,o=Fr.length;a<o;a++){const c=Fr[a];c.instanceId=r,c.object=this,e.push(c)}Fr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new kh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ll(new Float32Array(s*this.count),s,this.count,Ml,bi));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ln=new Vn,t0=new Ot(.5,.5),Or=new R;class Il{constructor(t=new gn,e=new gn,i=new gn,s=new gn,r=new gn,a=new gn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ki,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],S=r[12],E=r[13],y=r[14],w=r[15];if(s[0].setComponents(l-a,f-u,p-g,w-S).normalize(),s[1].setComponents(l+a,f+u,p+g,w+S).normalize(),s[2].setComponents(l+o,f+d,p+v,w+E).normalize(),s[3].setComponents(l-o,f-d,p-v,w-E).normalize(),i)s[4].setComponents(c,h,m,y).normalize(),s[5].setComponents(l-c,f-h,p-m,w-y).normalize();else if(s[4].setComponents(l-c,f-h,p-m,w-y).normalize(),e===ki)s[5].setComponents(l+c,f+h,p+m,w+y).normalize();else if(e===sr)s[5].setComponents(c,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ln.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ln.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ln)}intersectsSprite(t){Ln.center.set(0,0,0);const e=t0.distanceTo(t.center);return Ln.radius=.7071067811865476+e,Ln.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ln)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Or.x=s.normal.x>0?t.max.x:t.min.x,Or.y=s.normal.y>0?t.max.y:t.min.y,Or.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Or)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dl extends Tn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const La=new R,Ia=new R,Hh=new se,zs=new Pl,kr=new Vn,Ao=new R,Gh=new R;class Da extends ge{constructor(t=new pe,e=new Dl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)La.fromBufferAttribute(e,s-1),Ia.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=La.distanceTo(Ia);t.setAttribute("lineDistance",new ee(i,1))}else Ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere),kr.applyMatrix4(s),kr.radius+=r,t.ray.intersectsSphere(kr)===!1)return;Hh.copy(s).invert(),zs.copy(t.ray).applyMatrix4(Hh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){const p=u.getX(v),S=u.getX(v+1),E=Br(this,t,zs,c,p,S,v);E&&e.push(E)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(f),p=Br(this,t,zs,c,v,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){const p=Br(this,t,zs,c,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){const v=Br(this,t,zs,c,g-1,f,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Br(n,t,e,i,s,r,a){const o=n.geometry.attributes.position;if(La.fromBufferAttribute(o,s),Ia.fromBufferAttribute(o,r),e.distanceSqToSegment(La,Ia,Ao,Gh)>i)return;Ao.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ao);if(!(l<t.near||l>t.far))return{distance:l,point:Gh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Vh=new R,Wh=new R;class e0 extends Da{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Vh.fromBufferAttribute(e,s),Wh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Vh.distanceTo(Wh);t.setAttribute("lineDistance",new ee(i,1))}else Ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nd extends Tn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Xh=new se,Yc=new Pl,zr=new Vn,Hr=new R;class ar extends ge{constructor(t=new pe,e=new Nd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zr.copy(i.boundingSphere),zr.applyMatrix4(s),zr.radius+=r,t.ray.intersectsSphere(zr)===!1)return;Xh.copy(s).invert(),Yc.copy(t.ray).applyMatrix4(Xh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,d=i.attributes.position;if(l!==null){const h=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=h,v=f;g<v;g++){const m=l.getX(g);Hr.fromBufferAttribute(d,m),qh(Hr,m,c,s,t,e,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,v=f;g<v;g++)Hr.fromBufferAttribute(d,g),qh(Hr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function qh(n,t,e,i,s,r,a){const o=Yc.distanceSqToPoint(n);if(o<e){const c=new R;Yc.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ud extends We{constructor(t=[],e=Bn,i,s,r,a,o,c,l,u){super(t,e,i,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ga extends We{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class or extends We{constructor(t,e,i=Gi,s,r,a,o=Ge,c=Ge,l,u=sn,d=1){if(u!==sn&&u!==Un)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Rl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class i0 extends or{constructor(t,e=Gi,i=Bn,s,r,a=Ge,o=Ge,c,l=sn){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Fd extends We{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class be extends pe{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(d,2));function g(v,m,p,S,E,y,w,M,T,_,A){const P=y/T,L=w/_,F=y/2,B=w/2,I=M/2,V=T+1,z=_+1;let Y=0,it=0;const q=new R;for(let Q=0;Q<z;Q++){const et=Q*L-B;for(let Ct=0;Ct<V;Ct++){const Mt=Ct*P-F;q[v]=Mt*S,q[m]=et*E,q[p]=I,l.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[p]=M>0?1:-1,u.push(q.x,q.y,q.z),d.push(Ct/T),d.push(1-Q/_),Y+=1}}for(let Q=0;Q<_;Q++)for(let et=0;et<T;et++){const Ct=h+et+V*Q,Mt=h+et+V*(Q+1),re=h+(et+1)+V*(Q+1),Jt=h+(et+1)+V*Q;c.push(Ct,Mt,Jt),c.push(Mt,re,Jt),it+=6}o.addGroup(f,it,A),f+=it,h+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Nl extends pe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new R,u=new Ot;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const f=i+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(o,3)),this.setAttribute("uv",new ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class rn extends pe{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const v=[],m=i/2;let p=0;S(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new ee(d,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(f,2));function S(){const y=new R,w=new R;let M=0;const T=(e-t)/i;for(let _=0;_<=r;_++){const A=[],P=_/r,L=P*(e-t)+t;for(let F=0;F<=s;F++){const B=F/s,I=B*c+o,V=Math.sin(I),z=Math.cos(I);w.x=L*V,w.y=-P*i+m,w.z=L*z,d.push(w.x,w.y,w.z),y.set(V,T,z).normalize(),h.push(y.x,y.y,y.z),f.push(B,1-P),A.push(g++)}v.push(A)}for(let _=0;_<s;_++)for(let A=0;A<r;A++){const P=v[A][_],L=v[A+1][_],F=v[A+1][_+1],B=v[A][_+1];(t>0||A!==0)&&(u.push(P,L,B),M+=3),(e>0||A!==r-1)&&(u.push(L,F,B),M+=3)}l.addGroup(p,M,0),p+=M}function E(y){const w=g,M=new Ot,T=new R;let _=0;const A=y===!0?t:e,P=y===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*P,0),h.push(0,P,0),f.push(.5,.5),g++;const L=g;for(let F=0;F<=s;F++){const I=F/s*c+o,V=Math.cos(I),z=Math.sin(I);T.x=A*z,T.y=m*P,T.z=A*V,d.push(T.x,T.y,T.z),h.push(0,P,0),M.x=V*.5+.5,M.y=z*.5*P+.5,f.push(M.x,M.y),g++}for(let F=0;F<s;F++){const B=w+F,I=L+F;y===!0?u.push(I,I+1,B):u.push(I+1,I,B),_+=3}l.addGroup(p,_,y===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ul extends rn{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ul(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Va extends pe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),l(i),u(),this.setAttribute("position",new ee(r,3)),this.setAttribute("normal",new ee(r.slice(),3)),this.setAttribute("uv",new ee(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const E=new R,y=new R,w=new R;for(let M=0;M<e.length;M+=3)f(e[M+0],E),f(e[M+1],y),f(e[M+2],w),c(E,y,w,S)}function c(S,E,y,w){const M=w+1,T=[];for(let _=0;_<=M;_++){T[_]=[];const A=S.clone().lerp(y,_/M),P=E.clone().lerp(y,_/M),L=M-_;for(let F=0;F<=L;F++)F===0&&_===M?T[_][F]=A:T[_][F]=A.clone().lerp(P,F/L)}for(let _=0;_<M;_++)for(let A=0;A<2*(M-_)-1;A++){const P=Math.floor(A/2);A%2===0?(h(T[_][P+1]),h(T[_+1][P]),h(T[_][P])):(h(T[_][P+1]),h(T[_+1][P+1]),h(T[_+1][P]))}}function l(S){const E=new R;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(S),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function u(){const S=new R;for(let E=0;E<r.length;E+=3){S.x=r[E+0],S.y=r[E+1],S.z=r[E+2];const y=m(S)/2/Math.PI+.5,w=p(S)/Math.PI+.5;a.push(y,1-w)}g(),d()}function d(){for(let S=0;S<a.length;S+=6){const E=a[S+0],y=a[S+2],w=a[S+4],M=Math.max(E,y,w),T=Math.min(E,y,w);M>.9&&T<.1&&(E<.2&&(a[S+0]+=1),y<.2&&(a[S+2]+=1),w<.2&&(a[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function f(S,E){const y=S*3;E.x=t[y+0],E.y=t[y+1],E.z=t[y+2]}function g(){const S=new R,E=new R,y=new R,w=new R,M=new Ot,T=new Ot,_=new Ot;for(let A=0,P=0;A<r.length;A+=9,P+=6){S.set(r[A+0],r[A+1],r[A+2]),E.set(r[A+3],r[A+4],r[A+5]),y.set(r[A+6],r[A+7],r[A+8]),M.set(a[P+0],a[P+1]),T.set(a[P+2],a[P+3]),_.set(a[P+4],a[P+5]),w.copy(S).add(E).add(y).divideScalar(3);const L=m(w);v(M,P+0,S,L),v(T,P+2,E,L),v(_,P+4,y,L)}}function v(S,E,y,w){w<0&&S.x===1&&(a[E]=S.x-1),y.x===0&&y.z===0&&(a[E]=w/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Va(t.vertices,t.indices,t.radius,t.detail)}}class Wa extends Va{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Wa(t.radius,t.detail)}}class bn extends Va{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bn(t.radius,t.detail)}}class an extends pe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,d=t/o,h=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const S=p*h-a;for(let E=0;E<l;E++){const y=E*d-r;g.push(y,-S,0),v.push(0,0,1),m.push(E/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){const E=S+l*p,y=S+l*(p+1),w=S+1+l*(p+1),M=S+1+l*p;f.push(E,y,M),f.push(y,w,M)}this.setIndex(f),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(v,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ts extends pe{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let d=t;const h=(e-t)/s,f=new R,g=new Ot;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){const p=r+m/i*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}d+=h}for(let v=0;v<s;v++){const m=v*(i+1);for(let p=0;p<i;p++){const S=p+m,E=S,y=S+i+1,w=S+i+2,M=S+1;o.push(E,y,M),o.push(y,w,M)}}this.setIndex(o),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(l,3)),this.setAttribute("uv",new ee(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Fl extends pe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],d=new R,h=new R,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const S=[],E=p/i,y=a+E*o,w=t*Math.cos(y),M=Math.sqrt(t*t-w*w);let T=0;p===0&&a===0?T=.5/e:p===i&&c===Math.PI&&(T=-.5/e);for(let _=0;_<=e;_++){const A=_/e,P=s+A*r;d.x=-M*Math.cos(P),d.y=w,d.z=M*Math.sin(P),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(A+T,1-E),S.push(l++)}u.push(S)}for(let p=0;p<i;p++)for(let S=0;S<e;S++){const E=u[p][S+1],y=u[p][S],w=u[p+1][S],M=u[p+1][S+1];(p!==0||a>0)&&f.push(E,y,M),(p!==i-1||c<Math.PI)&&f.push(y,w,M)}this.setIndex(f),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(v,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Rs extends pe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],u=[],d=[],h=new R,f=new R,g=new R;for(let v=0;v<=i;v++){const m=a+v/i*o;for(let p=0;p<=s;p++){const S=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(S),f.y=(t+e*Math.cos(m))*Math.sin(S),f.z=e*Math.sin(m),l.push(f.x,f.y,f.z),h.x=t*Math.cos(S),h.y=t*Math.sin(S),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(p/s),d.push(v/i)}}for(let v=1;v<=i;v++)for(let m=1;m<=s;m++){const p=(s+1)*v+m-1,S=(s+1)*(v-1)+m-1,E=(s+1)*(v-1)+m,y=(s+1)*v+m;c.push(p,S,y),c.push(S,E,y)}this.setIndex(c),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function As(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(Yh(s))s.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Yh(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Je(n){const t={};for(let e=0;e<n.length;e++){const i=As(n[e]);for(const s in i)t[s]=i[s]}return t}function Yh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function n0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Od(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const s0={clone:As,merge:Je};var r0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xe extends Tn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r0,this.fragmentShader=a0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=n0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Lt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ot().fromArray(s.value);break;case"v3":this.uniforms[i].value=new R().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ee().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ht().fromArray(s.value);break;case"m4":this.uniforms[i].value=new se().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class o0 extends Xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qs extends Tn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qc,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class c0 extends Tn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class l0 extends Tn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class kd extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Bd extends kd{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ro=new se,$h=new R,Zh=new R;class h0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Il,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;$h.setFromMatrixPosition(t.matrixWorld),e.position.copy($h),Zh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Ro.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Ro,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===sr||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Ro)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Gr=new R,Vr=new Wi,Ri=new R;class zd extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Gr,Vr,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gr,Vr,Ri.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Gr,Vr,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gr,Vr,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const mn=new R,Kh=new Ot,jh=new Ot;class ii extends zd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mn.x,mn.y).multiplyScalar(-t/mn.z),mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mn.x,mn.y).multiplyScalar(-t/mn.z)}getViewSize(t,e){return this.getViewBounds(t,Kh,jh),e.subVectors(jh,Kh)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(js*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Xa extends zd{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class u0 extends h0{constructor(){super(new Xa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class E1 extends kd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new u0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const os=-90,cs=1;class d0 extends ge{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ii(os,cs,t,e);s.layers=this.layers,this.add(s);const r=new ii(os,cs,t,e);r.layers=this.layers,this.add(r);const a=new ii(os,cs,t,e);a.layers=this.layers,this.add(a);const o=new ii(os,cs,t,e);o.layers=this.layers,this.add(o);const c=new ii(os,cs,t,e);c.layers=this.layers,this.add(c);const l=new ii(os,cs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===ki)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===sr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class f0 extends ii{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class T1{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Kl=class Kl{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Kl.prototype.isMatrix2=!0;let Jh=Kl;class A1 extends En{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Qh(n,t,e,i){const s=p0(i);switch(e){case bd:return n*t;case Ml:return n*t/s.components*s.byteLength;case Sl:return n*t/s.components*s.byteLength;case zn:return n*t*2/s.components*s.byteLength;case wl:return n*t*2/s.components*s.byteLength;case Ed:return n*t*3/s.components*s.byteLength;case Ei:return n*t*4/s.components*s.byteLength;case bl:return n*t*4/s.components*s.byteLength;case na:case sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ra:case aa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vc:case xc:return Math.max(n,16)*Math.max(t,8)/4;case gc:case _c:return Math.max(n,8)*Math.max(t,8)/2;case yc:case Mc:case wc:case bc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Sc:case ba:case Ec:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Tc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ac:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Rc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Lc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ic:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Dc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Nc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Fc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Oc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case kc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Bc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case zc:case Hc:case Gc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Vc:case Wc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ea:case Xc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function p0(n){switch(n){case ai:case yd:return{byteLength:1,components:1};case ir:case Md:case Vi:return{byteLength:2,components:1};case xl:case yl:return{byteLength:2,components:4};case Gi:case _l:case bi:return{byteLength:4,components:1};case Sd:case wd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vl}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vl);function Hd(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function m0(n){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var g0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v0=`#ifdef USE_ALPHAHASH
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
#endif`,_0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,M0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S0=`#ifdef USE_AOMAP
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
#endif`,w0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b0=`#ifdef USE_BATCHING
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
#endif`,E0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,A0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,C0=`#ifdef USE_IRIDESCENCE
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
#endif`,P0=`#ifdef USE_BUMPMAP
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
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,F0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,O0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,k0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,B0=`#define PI 3.141592653589793
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
} // validated`,z0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,H0=`vec3 transformedNormal = objectNormal;
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
#endif`,G0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,W0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,X0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Y0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
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
#endif`,j0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ng=`#ifdef USE_GRADIENTMAP
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
}`,sg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,og=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,cg=`#ifdef USE_ENVMAP
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
#endif`,lg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ug=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fg=`PhysicalMaterial material;
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
#endif`,pg=`uniform sampler2D dfgLUT;
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
}`,mg=`
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
#endif`,gg=`#if defined( RE_IndirectDiffuse )
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
#endif`,vg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_g=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,xg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Eg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tg=`#if defined( USE_POINTS_UV )
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
#endif`,Ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ig=`#ifdef USE_MORPHTARGETS
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
#endif`,Dg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ng=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ug=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bg=`#ifdef USE_NORMALMAP
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
#endif`,zg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$g=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ev=`float getShadowMask() {
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
}`,iv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nv=`#ifdef USE_SKINNING
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
#endif`,sv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rv=`#ifdef USE_SKINNING
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
#endif`,av=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ov=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hv=`#ifdef USE_TRANSMISSION
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
#endif`,uv=`#ifdef USE_TRANSMISSION
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
#endif`,dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vv=`uniform sampler2D t2D;
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
}`,_v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sv=`#include <common>
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
}`,wv=`#if DEPTH_PACKING == 3200
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
}`,bv=`#define DISTANCE
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
}`,Ev=`#define DISTANCE
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
}`,Tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Av=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`uniform float scale;
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
}`,Cv=`uniform vec3 diffuse;
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
}`,Pv=`#include <common>
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
}`,Lv=`uniform vec3 diffuse;
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
}`,Iv=`#define LAMBERT
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
}`,Dv=`#define LAMBERT
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
}`,Nv=`#define MATCAP
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
}`,Uv=`#define MATCAP
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
}`,Fv=`#define NORMAL
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
}`,Ov=`#define NORMAL
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
}`,kv=`#define PHONG
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
}`,Bv=`#define PHONG
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
}`,zv=`#define STANDARD
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
}`,Hv=`#define STANDARD
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
}`,Gv=`#define TOON
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
}`,Vv=`#define TOON
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
}`,Wv=`uniform float size;
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
}`,Xv=`uniform vec3 diffuse;
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
}`,qv=`#include <common>
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
}`,Yv=`uniform vec3 color;
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
}`,$v=`uniform float rotation;
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
}`,Zv=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:g0,alphahash_pars_fragment:v0,alphamap_fragment:_0,alphamap_pars_fragment:x0,alphatest_fragment:y0,alphatest_pars_fragment:M0,aomap_fragment:S0,aomap_pars_fragment:w0,batching_pars_vertex:b0,batching_vertex:E0,begin_vertex:T0,beginnormal_vertex:A0,bsdfs:R0,iridescence_fragment:C0,bumpmap_pars_fragment:P0,clipping_planes_fragment:L0,clipping_planes_pars_fragment:I0,clipping_planes_pars_vertex:D0,clipping_planes_vertex:N0,color_fragment:U0,color_pars_fragment:F0,color_pars_vertex:O0,color_vertex:k0,common:B0,cube_uv_reflection_fragment:z0,defaultnormal_vertex:H0,displacementmap_pars_vertex:G0,displacementmap_vertex:V0,emissivemap_fragment:W0,emissivemap_pars_fragment:X0,colorspace_fragment:q0,colorspace_pars_fragment:Y0,envmap_fragment:$0,envmap_common_pars_fragment:Z0,envmap_pars_fragment:K0,envmap_pars_vertex:j0,envmap_physical_pars_fragment:cg,envmap_vertex:J0,fog_vertex:Q0,fog_pars_vertex:tg,fog_fragment:eg,fog_pars_fragment:ig,gradientmap_pars_fragment:ng,lightmap_pars_fragment:sg,lights_lambert_fragment:rg,lights_lambert_pars_fragment:ag,lights_pars_begin:og,lights_toon_fragment:lg,lights_toon_pars_fragment:hg,lights_phong_fragment:ug,lights_phong_pars_fragment:dg,lights_physical_fragment:fg,lights_physical_pars_fragment:pg,lights_fragment_begin:mg,lights_fragment_maps:gg,lights_fragment_end:vg,lightprobes_pars_fragment:_g,logdepthbuf_fragment:xg,logdepthbuf_pars_fragment:yg,logdepthbuf_pars_vertex:Mg,logdepthbuf_vertex:Sg,map_fragment:wg,map_pars_fragment:bg,map_particle_fragment:Eg,map_particle_pars_fragment:Tg,metalnessmap_fragment:Ag,metalnessmap_pars_fragment:Rg,morphinstance_vertex:Cg,morphcolor_vertex:Pg,morphnormal_vertex:Lg,morphtarget_pars_vertex:Ig,morphtarget_vertex:Dg,normal_fragment_begin:Ng,normal_fragment_maps:Ug,normal_pars_fragment:Fg,normal_pars_vertex:Og,normal_vertex:kg,normalmap_pars_fragment:Bg,clearcoat_normal_fragment_begin:zg,clearcoat_normal_fragment_maps:Hg,clearcoat_pars_fragment:Gg,iridescence_pars_fragment:Vg,opaque_fragment:Wg,packing:Xg,premultiplied_alpha_fragment:qg,project_vertex:Yg,dithering_fragment:$g,dithering_pars_fragment:Zg,roughnessmap_fragment:Kg,roughnessmap_pars_fragment:jg,shadowmap_pars_fragment:Jg,shadowmap_pars_vertex:Qg,shadowmap_vertex:tv,shadowmask_pars_fragment:ev,skinbase_vertex:iv,skinning_pars_vertex:nv,skinning_vertex:sv,skinnormal_vertex:rv,specularmap_fragment:av,specularmap_pars_fragment:ov,tonemapping_fragment:cv,tonemapping_pars_fragment:lv,transmission_fragment:hv,transmission_pars_fragment:uv,uv_pars_fragment:dv,uv_pars_vertex:fv,uv_vertex:pv,worldpos_vertex:mv,background_vert:gv,background_frag:vv,backgroundCube_vert:_v,backgroundCube_frag:xv,cube_vert:yv,cube_frag:Mv,depth_vert:Sv,depth_frag:wv,distance_vert:bv,distance_frag:Ev,equirect_vert:Tv,equirect_frag:Av,linedashed_vert:Rv,linedashed_frag:Cv,meshbasic_vert:Pv,meshbasic_frag:Lv,meshlambert_vert:Iv,meshlambert_frag:Dv,meshmatcap_vert:Nv,meshmatcap_frag:Uv,meshnormal_vert:Fv,meshnormal_frag:Ov,meshphong_vert:kv,meshphong_frag:Bv,meshphysical_vert:zv,meshphysical_frag:Hv,meshtoon_vert:Gv,meshtoon_frag:Vv,points_vert:Wv,points_frag:Xv,shadow_vert:qv,shadow_frag:Yv,sprite_vert:$v,sprite_frag:Zv},dt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Di={basic:{uniforms:Je([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Je([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Je([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Je([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Je([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Je([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Je([dt.points,dt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Je([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Je([dt.common,dt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Je([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Je([dt.sprite,dt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:Je([dt.common,dt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:Je([dt.lights,dt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Di.physical={uniforms:Je([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const Wr={r:0,b:0,g:0},Kv=new se,Gd=new Ht;Gd.set(-1,0,0,0,1,0,0,0,1);function jv(n,t,e,i,s,r){const a=new Lt(0);let o=s===!0?0:1,c,l,u=null,d=0,h=null;function f(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){const y=S.backgroundBlurriness>0;E=t.get(E,y)}return E}function g(S){let E=!1;const y=f(S);y===null?m(a,o):y&&y.isColor&&(m(y,1),E=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(S,E){const y=f(E);y&&(y.isCubeTexture||y.mapping===Ha)?(l===void 0&&(l=new _t(new be(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:As(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Kv.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Gd),l.material.toneMapped=Qt.getTransfer(y.colorSpace)!==he,(u!==y||d!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new _t(new an(2,2),new Xe({name:"BackgroundMaterial",uniforms:As(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(y.colorSpace)!==he,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,E){S.getRGB(Wr,Od(n)),e.buffers.color.setClear(Wr.r,Wr.g,Wr.b,E,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:v,dispose:p}}function Jv(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(L,F,B,I,V){let z=!1;const Y=d(L,I,B,F);r!==Y&&(r=Y,l(r.object)),z=f(L,I,B,V),z&&g(L,I,B,V),V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,y(L,F,B,I),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return n.createVertexArray()}function l(L){return n.bindVertexArray(L)}function u(L){return n.deleteVertexArray(L)}function d(L,F,B,I){const V=I.wireframe===!0;let z=i[F.id];z===void 0&&(z={},i[F.id]=z);const Y=L.isInstancedMesh===!0?L.id:0;let it=z[Y];it===void 0&&(it={},z[Y]=it);let q=it[B.id];q===void 0&&(q={},it[B.id]=q);let Q=q[V];return Q===void 0&&(Q=h(c()),q[V]=Q),Q}function h(L){const F=[],B=[],I=[];for(let V=0;V<e;V++)F[V]=0,B[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:I,object:L,attributes:{},index:null}}function f(L,F,B,I){const V=r.attributes,z=F.attributes;let Y=0;const it=B.getAttributes();for(const q in it)if(it[q].location>=0){const et=V[q];let Ct=z[q];if(Ct===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(Ct=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(Ct=L.instanceColor)),et===void 0||et.attribute!==Ct||Ct&&et.data!==Ct.data)return!0;Y++}return r.attributesNum!==Y||r.index!==I}function g(L,F,B,I){const V={},z=F.attributes;let Y=0;const it=B.getAttributes();for(const q in it)if(it[q].location>=0){let et=z[q];et===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(et=L.instanceColor));const Ct={};Ct.attribute=et,et&&et.data&&(Ct.data=et.data),V[q]=Ct,Y++}r.attributes=V,r.attributesNum=Y,r.index=I}function v(){const L=r.newAttributes;for(let F=0,B=L.length;F<B;F++)L[F]=0}function m(L){p(L,0)}function p(L,F){const B=r.newAttributes,I=r.enabledAttributes,V=r.attributeDivisors;B[L]=1,I[L]===0&&(n.enableVertexAttribArray(L),I[L]=1),V[L]!==F&&(n.vertexAttribDivisor(L,F),V[L]=F)}function S(){const L=r.newAttributes,F=r.enabledAttributes;for(let B=0,I=F.length;B<I;B++)F[B]!==L[B]&&(n.disableVertexAttribArray(B),F[B]=0)}function E(L,F,B,I,V,z,Y){Y===!0?n.vertexAttribIPointer(L,F,B,V,z):n.vertexAttribPointer(L,F,B,I,V,z)}function y(L,F,B,I){v();const V=I.attributes,z=B.getAttributes(),Y=F.defaultAttributeValues;for(const it in z){const q=z[it];if(q.location>=0){let Q=V[it];if(Q===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){const et=Q.normalized,Ct=Q.itemSize,Mt=t.get(Q);if(Mt===void 0)continue;const re=Mt.buffer,Jt=Mt.type,te=Mt.bytesPerElement,$=Jt===n.INT||Jt===n.UNSIGNED_INT||Q.gpuType===_l;if(Q.isInterleavedBufferAttribute){const tt=Q.data,xt=tt.stride,kt=Q.offset;if(tt.isInstancedInterleavedBuffer){for(let gt=0;gt<q.locationSize;gt++)p(q.location+gt,tt.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let gt=0;gt<q.locationSize;gt++)m(q.location+gt);n.bindBuffer(n.ARRAY_BUFFER,re);for(let gt=0;gt<q.locationSize;gt++)E(q.location+gt,Ct/q.locationSize,Jt,et,xt*te,(kt+Ct/q.locationSize*gt)*te,$)}else{if(Q.isInstancedBufferAttribute){for(let tt=0;tt<q.locationSize;tt++)p(q.location+tt,Q.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let tt=0;tt<q.locationSize;tt++)m(q.location+tt);n.bindBuffer(n.ARRAY_BUFFER,re);for(let tt=0;tt<q.locationSize;tt++)E(q.location+tt,Ct/q.locationSize,Jt,et,Ct*te,Ct/q.locationSize*tt*te,$)}}else if(Y!==void 0){const et=Y[it];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(q.location,et);break;case 3:n.vertexAttrib3fv(q.location,et);break;case 4:n.vertexAttrib4fv(q.location,et);break;default:n.vertexAttrib1fv(q.location,et)}}}}S()}function w(){A();for(const L in i){const F=i[L];for(const B in F){const I=F[B];for(const V in I){const z=I[V];for(const Y in z)u(z[Y].object),delete z[Y];delete I[V]}}delete i[L]}}function M(L){if(i[L.id]===void 0)return;const F=i[L.id];for(const B in F){const I=F[B];for(const V in I){const z=I[V];for(const Y in z)u(z[Y].object),delete z[Y];delete I[V]}}delete i[L.id]}function T(L){for(const F in i){const B=i[F];for(const I in B){const V=B[I];if(V[L.id]===void 0)continue;const z=V[L.id];for(const Y in z)u(z[Y].object),delete z[Y];delete V[L.id]}}}function _(L){for(const F in i){const B=i[F],I=L.isInstancedMesh===!0?L.id:0,V=B[I];if(V!==void 0){for(const z in V){const Y=V[z];for(const it in Y)u(Y[it].object),delete Y[it];delete V[z]}delete B[I],Object.keys(B).length===0&&delete i[F]}}}function A(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function Qv(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),e.update(l,i,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function t_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Ei&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const _=T===Vi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ai&&T!==bi&&!_&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Ut("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:y,maxSamples:w,samples:M}}function e_(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new gn,o=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const S=r?0:i,E=S*4;let y=p.clippingState||null;c.value=y,y=u(g,h,E,f);for(let w=0;w!==E;++w)y[w]=e[w];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,y=f;E!==v;++E,y+=4)a.copy(d[E]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}const ms=4,i_=6,n_=20,s_=256,Hs=new Xa,tu=new Lt;let Co=null,Po=0,Lo=0,Io=!1;const r_=new R,In=new R;class eu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=r_}=r;Co=this._renderer.getRenderTarget(),Po=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Co,Po,Lo),this._renderer.xr.enabled=Io,t.scissorTest=!1,ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bn||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Co=this._renderer.getRenderTarget(),Po=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:Vi,format:Ei,colorSpace:Ta,depthBuffer:!1},s=iu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iu(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=a_(r)),this._blurMaterial=c_(r,t,e),this._ggxMaterial=o_(r,t,e)}return s}_compileMaterial(t){const e=new _t(new pe,t);this._renderer.compile(e,Hs)}_sceneToCubeUV(t,e,i,s,r){const c=new ii(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(tu),d.toneMapping=Bi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _t(new be,new Ft({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(tu),p=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[E],r.y,r.z)):y===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[E]));const w=this._cubeSize;ls(s,y*w,E>2?w:0,w,w),d.setRenderTarget(s),p&&d.render(v,c),d.render(t,c)}d.toneMapping=f,d.autoClear=h,t.background=S}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Bn||t.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=su()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;ls(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,Hs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=l*1.25,f=d*h,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-ms?i-g+ms:0),p=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,ls(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,Hs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,ls(t,m,p,3*v,2*v),s.setRenderTarget(t),s.render(o,Hs)}_blur(t,e,i,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;const l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],d=3*u*(s>this._lodMax-ms?s-this._lodMax+ms:0),h=4*(this._cubeSize-u);ls(e,d,h,3*u,2*u),a.setRenderTarget(e),a.render(c,Hs)}}function a_(n){const t=[],e=[];let i=n;const s=n-ms+1+i_;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);const o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,f=3,g=new Float32Array(f*h*d),v=new Float32Array(f*h*d);for(let p=0;p<d;p++){const S=p%3*2/3-1,E=p>2?0:-1,y=[S,E,0,S+2/3,E,0,S+2/3,E+1,0,S,E,0,S+2/3,E+1,0,S,E+1,0];g.set(y,f*h*p);for(let w=0;w<h;w++){const M=u[w*2]*2-1,T=u[w*2+1]*2-1;p===0?In.set(1,T,M):p===1?In.set(-M,1,-T):p===2?In.set(-M,T,1):p===3?In.set(-1,T,-M):p===4?In.set(-M,-1,T):In.set(M,T,-1),In.toArray(v,(p*h+w)*f)}}const m=new pe;m.setAttribute("position",new Fe(g,f)),m.setAttribute("outputDirection",new Fe(v,f)),e.push(new _t(m,null)),i>ms&&i--}return{lodMeshes:e,sizeLods:t}}function iu(n,t,e){const i=new fi(n,t,e);return i.texture.mapping=Ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ls(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function o_(n,t,e){return new Xe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:s_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qa(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function c_(n,t,e){return new Xe({name:"SphericalGaussianBlur",defines:{SAMPLES:n_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qa(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function nu(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qa(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function su(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function qa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Vd extends fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ud(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new be(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ni,blending:tn});r.uniforms.tEquirect.value=e;const a=new _t(s,r),o=e.minFilter;return e.minFilter===Nn&&(e.minFilter=Ve),new d0(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}function l_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===eo||f===io)if(t.has(h)){const g=t.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const v=new Vd(g.height);return v.fromEquirectangularTexture(n,h),t.set(h,v),h.addEventListener("dispose",l),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,g=f===eo||f===io,v=f===Bn||f===Es;if(g||v){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new eu(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const S=h.image;return g&&S&&S.height>0||v&&S&&c(S)?(i===null&&(i=new eu(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===eo?h.mapping=Bn:f===io&&(h.mapping=Es),h}function c(h){let f=0;const g=6;for(let v=0;v<g;v++)h[v]!==void 0&&f++;return f===g}function l(h){const f=h.target;f.removeEventListener("dispose",l);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function h_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&_s("WebGLRenderer: "+i+" extension not supported."),s}}}function u_(n,t,e,i){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)t.update(h[f],n.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,g=d.attributes.position;let v=0;if(g===void 0)return;if(f!==null){const S=f.array;v=f.version;for(let E=0,y=S.length;E<y;E+=3){const w=S[E+0],M=S[E+1],T=S[E+2];h.push(w,M,M,T,T,w)}}else{const S=g.array;v=g.version;for(let E=0,y=S.length/3-1;E<y;E+=3){const w=E+0,M=E+1,T=E+2;h.push(w,M,M,T,T,w)}}const m=new(g.count>=65535?Id:Ld)(h,1);m.version=v;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function d_(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,h){n.drawElements(i,h,r,d*a),e.update(h,i,1)}function l(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*a,f),e.update(h,i,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=h[m];e.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function f_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:ne("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function p_(n,t,e){const i=new WeakMap,s=new Ee;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let A=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let E=0;f===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let y=o.attributes.position.count*E,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const M=new Float32Array(y*w*4*d),T=new Rd(M,y,w,d);T.type=bi,T.needsUpdate=!0;const _=E*4;for(let P=0;P<d;P++){const L=m[P],F=p[P],B=S[P],I=y*w*4*P;for(let V=0;V<L.count;V++){const z=V*_;f===!0&&(s.fromBufferAttribute(L,V),M[I+z+0]=s.x,M[I+z+1]=s.y,M[I+z+2]=s.z,M[I+z+3]=0),g===!0&&(s.fromBufferAttribute(F,V),M[I+z+4]=s.x,M[I+z+5]=s.y,M[I+z+6]=s.z,M[I+z+7]=0),v===!0&&(s.fromBufferAttribute(B,V),M[I+z+8]=s.x,M[I+z+9]=s.y,M[I+z+10]=s.z,M[I+z+11]=B.itemSize===4?s.w:1)}}h={count:d,texture:T,size:new Ot(y,w)},i.set(o,h),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function m_(n,t,e,i,s){let r=new WeakMap;function a(l){const u=s.render.frame,d=l.geometry,h=t.get(l,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const g_={[dd]:"LINEAR_TONE_MAPPING",[fd]:"REINHARD_TONE_MAPPING",[pd]:"CINEON_TONE_MAPPING",[md]:"ACES_FILMIC_TONE_MAPPING",[vd]:"AGX_TONE_MAPPING",[_d]:"NEUTRAL_TONE_MAPPING",[gd]:"CUSTOM_TONE_MAPPING"};function v_(n,t,e,i,s,r){const a=new fi(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new pe;l.setAttribute("position",new ee([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ee([0,2,0,0,2,0],2));const u=new o0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new _t(l,u),h=new Xa(-1,1,1,-1,0,1);let f=null,g=null,v=!1,m,p=null,S=[],E=!1;this.setSize=function(y,w){a.setSize(y,w),o!==null&&o.setSize(y,w),c!==null&&c.setSize(y,w);for(let M=0;M<S.length;M++){const T=S[M];T.setSize&&T.setSize(y,w)}},this.setEffects=function(y){S=y,E=S.length>0&&S[0].isRenderPass===!0;const w=a.width,M=a.height;S.length>0&&o===null&&(o=new fi(w,M,{type:Vi,depthBuffer:!1,stencilBuffer:!1}),c=new fi(w,M,{type:Vi,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<S.length;T++){const _=S[T];_.setSize&&_.setSize(w,M)}},this.begin=function(y,w){if(v||y.toneMapping===Bi&&S.length===0)return!1;if(p=w,w!==null){const M=w.width,T=w.height;(a.width!==M||a.height!==T)&&this.setSize(M,T)}return E===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Bi,!0},this.hasRenderPass=function(){return E},this.end=function(y,w){y.toneMapping=m,v=!0;let M=a,T=o;for(let _=0;_<S.length;_++){const A=S[_];A.enabled!==!1&&(A.render(y,T,M,w),A.needsSwap!==!1&&(M=T,T=T===o?c:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,u.defines={},Qt.getTransfer(f)===he&&(u.defines.SRGB_TRANSFER="");const _=g_[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(p),y.render(d,h),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const Wd=new We,$c=new or(1,1),Xd=new Rd,qd=new Om,Yd=new Ud,ru=[],au=[],ou=new Float32Array(16),cu=new Float32Array(9),lu=new Float32Array(4);function Cs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=ru[s];if(r===void 0&&(r=new Float32Array(s),ru[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Oe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ke(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ya(n,t){let e=au[t];e===void 0&&(e=new Int32Array(t),au[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function __(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function x_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2fv(this.addr,t),ke(e,t)}}function y_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;n.uniform3fv(this.addr,t),ke(e,t)}}function M_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4fv(this.addr,t),ke(e,t)}}function S_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Oe(e,i))return;lu.set(i),n.uniformMatrix2fv(this.addr,!1,lu),ke(e,i)}}function w_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Oe(e,i))return;cu.set(i),n.uniformMatrix3fv(this.addr,!1,cu),ke(e,i)}}function b_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Oe(e,i))return;ou.set(i),n.uniformMatrix4fv(this.addr,!1,ou),ke(e,i)}}function E_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function T_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2iv(this.addr,t),ke(e,t)}}function A_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3iv(this.addr,t),ke(e,t)}}function R_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4iv(this.addr,t),ke(e,t)}}function C_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function P_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2uiv(this.addr,t),ke(e,t)}}function L_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3uiv(this.addr,t),ke(e,t)}}function I_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4uiv(this.addr,t),ke(e,t)}}function D_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?($c.compareFunction=e.isReversedDepthBuffer()?Tl:El,r=$c):r=Wd,e.setTexture2D(t||r,s)}function N_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||qd,s)}function U_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Yd,s)}function F_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Xd,s)}function O_(n){switch(n){case 5126:return __;case 35664:return x_;case 35665:return y_;case 35666:return M_;case 35674:return S_;case 35675:return w_;case 35676:return b_;case 5124:case 35670:return E_;case 35667:case 35671:return T_;case 35668:case 35672:return A_;case 35669:case 35673:return R_;case 5125:return C_;case 36294:return P_;case 36295:return L_;case 36296:return I_;case 35678:case 36198:case 36298:case 36306:case 35682:return D_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return F_}}function k_(n,t){n.uniform1fv(this.addr,t)}function B_(n,t){const e=Cs(t,this.size,2);n.uniform2fv(this.addr,e)}function z_(n,t){const e=Cs(t,this.size,3);n.uniform3fv(this.addr,e)}function H_(n,t){const e=Cs(t,this.size,4);n.uniform4fv(this.addr,e)}function G_(n,t){const e=Cs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function V_(n,t){const e=Cs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function W_(n,t){const e=Cs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function X_(n,t){n.uniform1iv(this.addr,t)}function q_(n,t){n.uniform2iv(this.addr,t)}function Y_(n,t){n.uniform3iv(this.addr,t)}function $_(n,t){n.uniform4iv(this.addr,t)}function Z_(n,t){n.uniform1uiv(this.addr,t)}function K_(n,t){n.uniform2uiv(this.addr,t)}function j_(n,t){n.uniform3uiv(this.addr,t)}function J_(n,t){n.uniform4uiv(this.addr,t)}function Q_(n,t,e){const i=this.cache,s=t.length,r=Ya(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=$c:a=Wd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function tx(n,t,e){const i=this.cache,s=t.length,r=Ya(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||qd,r[a])}function ex(n,t,e){const i=this.cache,s=t.length,r=Ya(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Yd,r[a])}function ix(n,t,e){const i=this.cache,s=t.length,r=Ya(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Xd,r[a])}function nx(n){switch(n){case 5126:return k_;case 35664:return B_;case 35665:return z_;case 35666:return H_;case 35674:return G_;case 35675:return V_;case 35676:return W_;case 5124:case 35670:return X_;case 35667:case 35671:return q_;case 35668:case 35672:return Y_;case 35669:case 35673:return $_;case 5125:return Z_;case 36294:return K_;case 36295:return j_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return Q_;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return ex;case 36289:case 36303:case 36311:case 36292:return ix}}class sx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=O_(e.type)}}class rx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nx(e.type)}}class ax{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Do=/(\w+)(\])?(\[|\.)?/g;function hu(n,t){n.seq.push(t),n.map[t.id]=t}function ox(n,t,e){const i=n.name,s=i.length;for(Do.lastIndex=0;;){const r=Do.exec(i),a=Do.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){hu(e,l===void 0?new sx(o,n,t):new rx(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new ax(o),hu(e,d)),e=d}}}class oa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);ox(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function uu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const cx=37297;let lx=0;function hx(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const du=new Ht;function ux(n){Qt._getMatrix(du,Qt.workingColorSpace,n);const t=`mat3( ${du.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(n)){case Aa:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function fu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+hx(n.getShaderSource(t),o)}else return r}function dx(n,t){const e=ux(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const fx={[dd]:"Linear",[fd]:"Reinhard",[pd]:"Cineon",[md]:"ACESFilmic",[vd]:"AgX",[_d]:"Neutral",[gd]:"Custom"};function px(n,t){const e=fx[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xr=new R;function mx(){Qt.getLuminanceCoefficients(Xr);const n=Xr.x.toFixed(4),t=Xr.y.toFixed(4),e=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function vx(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function _x(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Ys(n){return n!==""}function pu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(n){return n.replace(xx,Mx)}const yx=new Map;function Mx(n,t){let e=Xt[t];if(e===void 0){const i=yx.get(t);if(i!==void 0)e=Xt[i],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Zc(e)}const Sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gu(n){return n.replace(Sx,wx)}function wx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const bx={[ia]:"SHADOWMAP_TYPE_PCF",[Xs]:"SHADOWMAP_TYPE_VSM"};function Ex(n){return bx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Tx={[Bn]:"ENVMAP_TYPE_CUBE",[Es]:"ENVMAP_TYPE_CUBE",[Ha]:"ENVMAP_TYPE_CUBE_UV"};function Ax(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Tx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Rx={[Es]:"ENVMAP_MODE_REFRACTION"};function Cx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Rx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Px={[ud]:"ENVMAP_BLENDING_MULTIPLY",[tm]:"ENVMAP_BLENDING_MIX",[em]:"ENVMAP_BLENDING_ADD"};function Lx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Px[n.combine]||"ENVMAP_BLENDING_NONE"}function Ix(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Dx(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Ex(e),l=Ax(e),u=Cx(e),d=Lx(e),h=Ix(e),f=gx(e),g=vx(r),v=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ys).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ys).join(`
`),p.length>0&&(p+=`
`)):(m=[vu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),p=[vu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Bi?px("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,dx("linearToOutputTexel",e.outputColorSpace),mx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ys).join(`
`)),a=Zc(a),a=pu(a,e),a=mu(a,e),o=Zc(o),o=pu(o,e),o=mu(o,e),a=gu(a),o=gu(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=S+m+a,y=S+p+o,w=uu(s,s.VERTEX_SHADER,E),M=uu(s,s.FRAGMENT_SHADER,y);s.attachShader(v,w),s.attachShader(v,M),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(L){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(v)||"",B=s.getShaderInfoLog(w)||"",I=s.getShaderInfoLog(M)||"",V=F.trim(),z=B.trim(),Y=I.trim();let it=!0,q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(it=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,w,M);else{const Q=fu(s,w,"vertex"),et=fu(s,M,"fragment");ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+Q+`
`+et)}else V!==""?Ut("WebGLProgram: Program Info Log:",V):(z===""||Y==="")&&(q=!1);q&&(L.diagnostics={runnable:it,programLog:V,vertexShader:{log:z,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(w),s.deleteShader(M),_=new oa(s,v),A=_x(s,v)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let A;this.getAttributes=function(){return A===void 0&&T(this),A};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(v,cx)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lx++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=M,this}let Nx=0;class Ux{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Fx(t),e.set(t,i)),i}}class Fx{constructor(t){this.id=Nx++,this.code=t,this.usedTimes=0}}function Ox(n){return n===zn||n===ba||n===Ea}function kx(n,t,e,i,s,r){const a=new Cd,o=new Ux,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,A,P,L,F,B){const I=L.fog,V=F.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,it=t.get(_.envMap||z,Y),q=it&&it.mapping===Ha?it.image.height:null,Q=f[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&Ut("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const et=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ct=et!==void 0?et.length:0;let Mt=0;V.morphAttributes.position!==void 0&&(Mt=1),V.morphAttributes.normal!==void 0&&(Mt=2),V.morphAttributes.color!==void 0&&(Mt=3);let re,Jt,te,$;if(Q){const ve=Di[Q];re=ve.vertexShader,Jt=ve.fragmentShader}else{re=_.vertexShader,Jt=_.fragmentShader;const ve=o.getVertexShaderStage(_),oe=o.getFragmentShaderStage(_);o.update(_,ve,oe),te=ve.id,$=oe.id}const tt=n.getRenderTarget(),xt=n.state.buffers.depth.getReversed(),kt=F.isInstancedMesh===!0,gt=F.isBatchedMesh===!0,Vt=!!_.map,Me=!!_.matcap,Yt=!!it,st=!!_.aoMap,Nt=!!_.lightMap,Et=!!_.bumpMap&&_.wireframe===!1,Bt=!!_.normalMap,Se=!!_.displacementMap,Ne=!!_.emissiveMap,$t=!!_.metalnessMap,we=!!_.roughnessMap,U=_.anisotropy>0,qe=_.clearcoat>0,le=_.dispersion>0,C=_.retroreflectivity>0,x=_.iridescence>0,k=_.sheen>0,W=_.transmission>0,Z=U&&!!_.anisotropyMap,rt=qe&&!!_.clearcoatMap,at=qe&&!!_.clearcoatNormalMap,K=qe&&!!_.clearcoatRoughnessMap,J=x&&!!_.iridescenceMap,ot=x&&!!_.iridescenceThicknessMap,At=k&&!!_.sheenColorMap,ut=k&&!!_.sheenRoughnessMap,ct=!!_.specularMap,Rt=!!_.specularColorMap,Dt=!!_.specularIntensityMap,Gt=W&&!!_.transmissionMap,N=W&&!!_.thicknessMap,lt=!!_.gradientMap,j=!!_.alphaMap,ht=_.alphaTest>0,mt=!!_.alphaHash,nt=!!_.extensions;let Pt=Bi;_.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Pt=n.toneMapping);const bt={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:re,fragmentShader:Jt,defines:_.defines,customVertexShaderID:te,customFragmentShaderID:$,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:gt,batchingColor:gt&&F._colorsTexture!==null,instancing:kt,instancingColor:kt&&F.instanceColor!==null,instancingMorph:kt&&F.morphTexture!==null,outputColorSpace:tt===null?n.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Vt,matcap:Me,envMap:Yt,envMapMode:Yt&&it.mapping,envMapCubeUVHeight:q,aoMap:st,lightMap:Nt,bumpMap:Et,normalMap:Bt,displacementMap:Se,emissiveMap:Ne,normalMapObjectSpace:Bt&&_.normalMapType===sm,normalMapTangentSpace:Bt&&_.normalMapType===qc,packedNormalMap:Bt&&_.normalMapType===qc&&Ox(_.normalMap.format),metalnessMap:$t,roughnessMap:we,anisotropy:U,anisotropyMap:Z,clearcoat:qe,clearcoatMap:rt,clearcoatNormalMap:at,clearcoatRoughnessMap:K,dispersion:le,retroreflection:C,iridescence:x,iridescenceMap:J,iridescenceThicknessMap:ot,sheen:k,sheenColorMap:At,sheenRoughnessMap:ut,specularMap:ct,specularColorMap:Rt,specularIntensityMap:Dt,transmission:W,transmissionMap:Gt,thicknessMap:N,gradientMap:lt,opaque:_.transparent===!1&&_.blending===Fn&&_.alphaToCoverage===!1,alphaMap:j,alphaTest:ht,alphaHash:mt,combine:_.combine,mapUv:Vt&&g(_.map.channel),aoMapUv:st&&g(_.aoMap.channel),lightMapUv:Nt&&g(_.lightMap.channel),bumpMapUv:Et&&g(_.bumpMap.channel),normalMapUv:Bt&&g(_.normalMap.channel),displacementMapUv:Se&&g(_.displacementMap.channel),emissiveMapUv:Ne&&g(_.emissiveMap.channel),metalnessMapUv:$t&&g(_.metalnessMap.channel),roughnessMapUv:we&&g(_.roughnessMap.channel),anisotropyMapUv:Z&&g(_.anisotropyMap.channel),clearcoatMapUv:rt&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:at&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:At&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:ut&&g(_.sheenRoughnessMap.channel),specularMapUv:ct&&g(_.specularMap.channel),specularColorMapUv:Rt&&g(_.specularColorMap.channel),specularIntensityMapUv:Dt&&g(_.specularIntensityMap.channel),transmissionMapUv:Gt&&g(_.transmissionMap.channel),thicknessMapUv:N&&g(_.thicknessMap.channel),alphaMapUv:j&&g(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Bt||U),vertexNormals:!!V.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(Vt||j),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||V.attributes.normal===void 0&&Bt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Mt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pt,decodeVideoTexture:Vt&&_.map.isVideoTexture===!0&&Qt.getTransfer(_.map.colorSpace)===he,decodeVideoTextureEmissive:Ne&&_.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(_.emissiveMap.colorSpace)===he,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Pe,flipSided:_.side===ni,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:nt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&_.extensions.multiDraw===!0||gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function m(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)A.push(P),A.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(A,_),S(A,_),A.push(n.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function p(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function S(_,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function E(_){const A=f[_.type];let P;if(A){const L=Di[A];P=s0.clone(L.uniforms)}else P=_.uniforms;return P}function y(_,A){let P=u.get(A);return P!==void 0?++P.usedTimes:(P=new Dx(n,A,_,s),l.push(P),u.set(A,P)),P}function w(_){if(--_.usedTimes===0){const A=l.indexOf(_);l[A]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function M(_){o.remove(_)}function T(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:E,acquireProgram:y,releaseProgram:w,releaseShaderCache:M,programs:l,dispose:T}}function Bx(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function zx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function _u(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function xu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,v,m,p){let S=n[t];return S===void 0?(S={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:p},n[t]=S):(S.id=h.id,S.object=h,S.geometry=f,S.material=g,S.materialVariant=a(h),S.groupOrder=v,S.renderOrder=h.renderOrder,S.z=m,S.group=p),t++,S}function c(h,f,g,v,m,p,S){S.reversedDepth===!0&&(m=-m);const E=o(h,f,g,v,m,p);g.transmission>0?i.push(E):g.transparent===!0?s.push(E):e.push(E)}function l(h,f,g,v,m,p){const S=o(h,f,g,v,m,p);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function u(h,f){e.length>1&&e.sort(h||zx),i.length>1&&i.sort(f||_u),s.length>1&&s.sort(f||_u)}function d(){for(let h=t,f=n.length;h<f;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function Hx(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new xu,n.set(i,[a])):s>=r.length?(a=new xu,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Gx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new Lt};break;case"SpotLight":e={position:new R,direction:new R,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new R,halfWidth:new R,halfHeight:new R};break}return n[t.id]=e,e}}}function Vx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Wx=0;function Xx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function qx(n){const t=new Gx,e=Vx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new R);const s=new R,r=new se,a=new se;function o(l){let u=0,d=0,h=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,S=0,E=0,y=0,w=0,M=0,T=0,_=0,A=0,P=0;l.sort(Xx);for(let F=0,B=l.length;F<B;F++){const I=l[F],V=I.color,z=I.intensity,Y=I.distance;let it=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===zn?it=I.shadow.map.texture:it=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=V.r*z,d+=V.g*z,h+=V.b*z;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],z);P++}else if(I.isSunLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Q=I.shadow,et=e.get(I);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[g]=et,i.sunShadowMap[g]=it;const Ct=Q.getViewportCount();for(let Mt=0;Mt<Ct;Mt++)i.sunShadowMatrix[v+Mt]=Q.getMatrix(Mt),i.sunShadowCascade[v+Mt]=Q._cascadeData[Mt];v+=Ct,g++}i.sun[f]=q,f++}else if(I.isDirectionalLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Q=I.shadow,et=e.get(I);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,i.directionalShadow[m]=et,i.directionalShadowMap[m]=it,i.directionalShadowMatrix[m]=I.shadow.matrix,w++}i.directional[m]=q,m++}else if(I.isSpotLight){const q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(V).multiplyScalar(z),q.distance=Y,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[S]=q;const Q=I.shadow;if(I.map&&(i.spotLightMap[_]=I.map,_++,Q.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[S]=Q.matrix,I.castShadow){const et=e.get(I);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,i.spotShadow[S]=et,i.spotShadowMap[S]=it,T++}S++}else if(I.isRectAreaLight){const q=t.get(I);q.color.copy(V).multiplyScalar(z),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[E]=q,E++}else if(I.isPointLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){const Q=I.shadow,et=e.get(I);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,et.shadowCameraNear=Q.camera.near,et.shadowCameraFar=Q.camera.far,i.pointShadow[p]=et,i.pointShadowMap[p]=it,i.pointShadowMatrix[p]=I.shadow.matrix,M++}i.point[p]=q,p++}else if(I.isHemisphereLight){const q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(z),q.groundColor.copy(I.groundColor).multiplyScalar(z),i.hemi[y]=q,y++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const L=i.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==S||L.rectAreaLength!==E||L.hemiLength!==y||L.numSunShadows!==g||L.numDirectionalShadows!==w||L.numPointShadows!==M||L.numSpotShadows!==T||L.numSpotMaps!==_||L.numLightProbes!==P)&&(i.sun.length=f,i.directional.length=m,i.spot.length=S,i.rectArea.length=E,i.point.length=p,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=T,i.spotShadowMap.length=T,i.spotLightMatrix.length=T+_-A,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=S,L.rectAreaLength=E,L.hemiLength=y,L.numSunShadows=g,L.numDirectionalShadows=w,L.numPointShadows=M,L.numSpotShadows=T,L.numSpotMaps=_,L.numLightProbes=P,i.version=Wx++)}function c(l,u){let d=0,h=0,f=0,g=0,v=0,m=0;const p=u.matrixWorldInverse;for(let S=0,E=l.length;S<E;S++){const y=l[S];if(y.isSunLight){const w=i.sun[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),d++}else if(y.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),h++}else if(y.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const w=i.rectArea[v];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const w=i.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:i}}function yu(n){const t=new qx(n),e=[],i=[],s=[];function r(h){d.camera=h,e.length=0,i.length=0,s.length=0}function a(h){e.push(h)}function o(h){i.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Yx(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new yu(n),t.set(s,[o])):r>=a.length?(o=new yu(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const $x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zx=`uniform sampler2D shadow_pass;
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
}`,Kx=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],jx=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Mu=new se,Gs=new R,No=new R;function Jx(n,t,e){let i=new Il;const s=new Ot,r=new Ot,a=new Ee,o=new c0,c=new l0,l={},u=e.maxTextureSize,d={[kn]:ni,[ni]:kn,[Pe]:Pe},h=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:$x,fragmentShader:Zx}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new pe;g.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new _t(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ia;let p=this.type;this.render=function(M,T,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===Up&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ia);const A=n.getRenderTarget(),P=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),F=n.state;F.setBlending(tn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=p!==this.type;B&&T.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(V=>V.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,V=M.length;I<V;I++){const z=M[I],Y=z.shadow;if(Y===void 0){Ut("WebGLShadowMap:",z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const it=Y.getFrameExtents();s.multiply(it),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/it.x),s.x=r.x*it.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/it.y),s.y=r.y*it.y,Y.mapSize.y=r.y));const q=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=q,Y.map===null||B===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Xs){if(z.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new fi(s.x,s.y,{format:zn,type:Vi,minFilter:Ve,magFilter:Ve,generateMipmaps:!1}),Y.map.texture.name=z.name+".shadowMap",Y.map.depthTexture=new or(s.x,s.y,bi),Y.map.depthTexture.name=z.name+".shadowMapDepth",Y.map.depthTexture.format=sn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ge,Y.map.depthTexture.magFilter=Ge}else z.isPointLight?(Y.map=new Vd(s.x),Y.map.depthTexture=new i0(s.x,Gi)):(Y.map=new fi(s.x,s.y),Y.map.depthTexture=new or(s.x,s.y,Gi)),Y.map.depthTexture.name=z.name+".shadowMap",Y.map.depthTexture.format=sn,this.type===ia?(Y.map.depthTexture.compareFunction=q?Tl:El,Y.map.depthTexture.minFilter=Ve,Y.map.depthTexture.magFilter=Ve):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ge,Y.map.depthTexture.magFilter=Ge);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);const Q=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();z.isPointLight!==!0&&Y.updateMatrices(z,_);for(let et=0;et<Q;et++){const Ct=Y.getCamera(et);if(z.isPointLight){const Mt=Y.camera,re=Y.matrix,Jt=z.distance||Mt.far;Jt!==Mt.far&&(Mt.far=Jt,Mt.updateProjectionMatrix()),Gs.setFromMatrixPosition(z.matrixWorld),Mt.position.copy(Gs),No.copy(Mt.position),No.add(Kx[et]),Mt.up.copy(jx[et]),Mt.lookAt(No),Mt.updateMatrixWorld(),re.makeTranslation(-Gs.x,-Gs.y,-Gs.z),Mu.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Mu,Mt.coordinateSystem,Mt.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,et),n.clear();else{et===0&&(n.setRenderTarget(Y.map),n.clear());const Mt=Y.getViewport(et);a.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),F.viewport(a)}i=Y.getFrustum(et),y(T,_,Ct,z,this.type)}Y.isPointLightShadow!==!0&&this.type===Xs&&S(Y,_),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(A,P,L)};function S(M,T){const _=t.update(v);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new fi(s.x,s.y,{format:zn,type:Vi}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value.set(M.map.width,M.map.height),h.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(T,null,_,h,v,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(T,null,_,f,v,null)}function E(M,T,_,A){let P=null;const L=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(L!==void 0)P=L;else if(P=_.isPointLight===!0?c:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const F=P.uuid,B=T.uuid;let I=l[F];I===void 0&&(I={},l[F]=I);let V=I[B];V===void 0&&(V=P.clone(),I[B]=V,T.addEventListener("dispose",w)),P=V}if(P.visible=T.visible,P.wireframe=T.wireframe,A===Xs?P.side=T.shadowSide!==null?T.shadowSide:T.side:P.side=T.shadowSide!==null?T.shadowSide:d[T.side],P.alphaMap=T.alphaMap,P.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,P.map=T.map,P.clipShadows=T.clipShadows,P.clippingPlanes=T.clippingPlanes,P.clipIntersection=T.clipIntersection,P.displacementMap=T.displacementMap,P.displacementScale=T.displacementScale,P.displacementBias=T.displacementBias,P.wireframeLinewidth=T.wireframeLinewidth,P.linewidth=T.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const F=n.properties.get(P);F.light=_}return P}function y(M,T,_,A,P){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&P===Xs)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);const B=t.update(M),I=M.material;if(Array.isArray(I)){const V=B.groups;for(let z=0,Y=V.length;z<Y;z++){const it=V[z],q=I[it.materialIndex];if(q&&q.visible){const Q=E(M,q,A,P);M.onBeforeShadow(n,M,T,_,B,Q,it),n.renderBufferDirect(_,null,B,Q,M,it),M.onAfterShadow(n,M,T,_,B,Q,it)}}}else if(I.visible){const V=E(M,I,A,P);M.onBeforeShadow(n,M,T,_,B,V,null),n.renderBufferDirect(_,null,B,V,M,null),M.onAfterShadow(n,M,T,_,B,V,null)}}const F=M.children;for(let B=0,I=F.length;B<I;B++)y(F[B],T,_,A,P)}function w(M){M.target.removeEventListener("dispose",w);for(const _ in l){const A=l[_],P=M.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function Qx(n,t){function e(){let N=!1;const lt=new Ee;let j=null;const ht=new Ee(0,0,0,0);return{setMask:function(mt){j!==mt&&!N&&(n.colorMask(mt,mt,mt,mt),j=mt)},setLocked:function(mt){N=mt},setClear:function(mt,nt,Pt,bt,ve){ve===!0&&(mt*=bt,nt*=bt,Pt*=bt),lt.set(mt,nt,Pt,bt),ht.equals(lt)===!1&&(n.clearColor(mt,nt,Pt,bt),ht.copy(lt))},reset:function(){N=!1,j=null,ht.set(-1,0,0,0)}}}function i(){let N=!1,lt=!1,j=null,ht=null,mt=null;return{setReversed:function(nt){if(lt!==nt){const Pt=t.get("EXT_clip_control");nt?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),lt=nt;const bt=mt;mt=null,this.setClear(bt)}},getReversed:function(){return lt},setTest:function(nt){nt?tt(n.DEPTH_TEST):xt(n.DEPTH_TEST)},setMask:function(nt){j!==nt&&!N&&(n.depthMask(nt),j=nt)},setFunc:function(nt){if(lt&&(nt=mm[nt]),ht!==nt){switch(nt){case oc:n.depthFunc(n.NEVER);break;case cc:n.depthFunc(n.ALWAYS);break;case lc:n.depthFunc(n.LESS);break;case er:n.depthFunc(n.LEQUAL);break;case hc:n.depthFunc(n.EQUAL);break;case uc:n.depthFunc(n.GEQUAL);break;case dc:n.depthFunc(n.GREATER);break;case fc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ht=nt}},setLocked:function(nt){N=nt},setClear:function(nt){mt!==nt&&(mt=nt,lt&&(nt=1-nt),n.clearDepth(nt))},reset:function(){N=!1,j=null,ht=null,mt=null,lt=!1}}}function s(){let N=!1,lt=null,j=null,ht=null,mt=null,nt=null,Pt=null,bt=null,ve=null;return{setTest:function(oe){N||(oe?tt(n.STENCIL_TEST):xt(n.STENCIL_TEST))},setMask:function(oe){lt!==oe&&!N&&(n.stencilMask(oe),lt=oe)},setFunc:function(oe,mi,Ti){(j!==oe||ht!==mi||mt!==Ti)&&(n.stencilFunc(oe,mi,Ti),j=oe,ht=mi,mt=Ti)},setOp:function(oe,mi,Ti){(nt!==oe||Pt!==mi||bt!==Ti)&&(n.stencilOp(oe,mi,Ti),nt=oe,Pt=mi,bt=Ti)},setLocked:function(oe){N=oe},setClear:function(oe){ve!==oe&&(n.clearStencil(oe),ve=oe)},reset:function(){N=!1,lt=null,j=null,ht=null,mt=null,nt=null,Pt=null,bt=null,ve=null}}}const r=new e,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],v=null,m=!1,p=null,S=null,E=null,y=null,w=null,M=null,T=null,_=new Lt(0,0,0),A=0,P=!1,L=null,F=null,B=null,I=null,V=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,it=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=it>=1):q.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=it>=2);let Q=null,et={};const Ct=n.getParameter(n.SCISSOR_BOX),Mt=n.getParameter(n.VIEWPORT),re=new Ee().fromArray(Ct),Jt=new Ee().fromArray(Mt);function te(N,lt,j,ht){const mt=new Uint8Array(4),nt=n.createTexture();n.bindTexture(N,nt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pt=0;Pt<j;Pt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(lt,0,n.RGBA,1,1,ht,0,n.RGBA,n.UNSIGNED_BYTE,mt):n.texImage2D(lt+Pt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,mt);return nt}const $={};$[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(n.DEPTH_TEST),a.setFunc(er),Et(!1),Bt(gh),tt(n.CULL_FACE),st(tn);function tt(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function xt(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function kt(N,lt){return h[N]!==lt?(n.bindFramebuffer(N,lt),h[N]=lt,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=lt),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=lt),!0):!1}function gt(N,lt){let j=g,ht=!1;if(N){j=f.get(lt),j===void 0&&(j=[],f.set(lt,j));const mt=N.textures;if(j.length!==mt.length||j[0]!==n.COLOR_ATTACHMENT0){for(let nt=0,Pt=mt.length;nt<Pt;nt++)j[nt]=n.COLOR_ATTACHMENT0+nt;j.length=mt.length,ht=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,ht=!0);ht&&n.drawBuffers(j)}function Vt(N){return v!==N?(n.useProgram(N),v=N,!0):!1}const Me={[fs]:n.FUNC_ADD,[Op]:n.FUNC_SUBTRACT,[kp]:n.FUNC_REVERSE_SUBTRACT};Me[Bp]=n.MIN,Me[zp]=n.MAX;const Yt={[Hp]:n.ZERO,[Gp]:n.ONE,[Vp]:n.SRC_COLOR,[ld]:n.SRC_ALPHA,[Zp]:n.SRC_ALPHA_SATURATE,[Yp]:n.DST_COLOR,[Xp]:n.DST_ALPHA,[Wp]:n.ONE_MINUS_SRC_COLOR,[hd]:n.ONE_MINUS_SRC_ALPHA,[$p]:n.ONE_MINUS_DST_COLOR,[qp]:n.ONE_MINUS_DST_ALPHA,[Kp]:n.CONSTANT_COLOR,[jp]:n.ONE_MINUS_CONSTANT_COLOR,[Jp]:n.CONSTANT_ALPHA,[Qp]:n.ONE_MINUS_CONSTANT_ALPHA};function st(N,lt,j,ht,mt,nt,Pt,bt,ve,oe){if(N===tn){m===!0&&(xt(n.BLEND),m=!1);return}if(m===!1&&(tt(n.BLEND),m=!0),N!==Fp){if(N!==p||oe!==P){if((S!==fs||w!==fs)&&(n.blendEquation(n.FUNC_ADD),S=fs,w=fs),oe)switch(N){case Fn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ti:n.blendFunc(n.ONE,n.ONE);break;case vh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _h:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ne("WebGLState: Invalid blending: ",N);break}else switch(N){case Fn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ti:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case vh:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _h:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",N);break}E=null,y=null,M=null,T=null,_.set(0,0,0),A=0,p=N,P=oe}return}mt=mt||lt,nt=nt||j,Pt=Pt||ht,(lt!==S||mt!==w)&&(n.blendEquationSeparate(Me[lt],Me[mt]),S=lt,w=mt),(j!==E||ht!==y||nt!==M||Pt!==T)&&(n.blendFuncSeparate(Yt[j],Yt[ht],Yt[nt],Yt[Pt]),E=j,y=ht,M=nt,T=Pt),(bt.equals(_)===!1||ve!==A)&&(n.blendColor(bt.r,bt.g,bt.b,ve),_.copy(bt),A=ve),p=N,P=!1}function Nt(N,lt){N.side===Pe?xt(n.CULL_FACE):tt(n.CULL_FACE);let j=N.side===ni;lt&&(j=!j),Et(j),N.blending===Fn&&N.transparent===!1?st(tn):st(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const ht=N.stencilWrite;o.setTest(ht),ht&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ne(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?tt(n.SAMPLE_ALPHA_TO_COVERAGE):xt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Et(N){L!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),L=N)}function Bt(N){N!==Dp?(tt(n.CULL_FACE),N!==F&&(N===gh?n.cullFace(n.BACK):N===Np?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xt(n.CULL_FACE),F=N}function Se(N){N!==B&&(Y&&n.lineWidth(N),B=N)}function Ne(N,lt,j){N?(tt(n.POLYGON_OFFSET_FILL),(I!==lt||V!==j)&&(I=lt,V=j,a.getReversed()&&(lt=-lt),n.polygonOffset(lt,j))):xt(n.POLYGON_OFFSET_FILL)}function $t(N){N?tt(n.SCISSOR_TEST):xt(n.SCISSOR_TEST)}function we(N){N===void 0&&(N=n.TEXTURE0+z-1),Q!==N&&(n.activeTexture(N),Q=N)}function U(N,lt,j){j===void 0&&(Q===null?j=n.TEXTURE0+z-1:j=Q);let ht=et[j];ht===void 0&&(ht={type:void 0,texture:void 0},et[j]=ht),(ht.type!==N||ht.texture!==lt)&&(Q!==j&&(n.activeTexture(j),Q=j),n.bindTexture(N,lt||$[N]),ht.type=N,ht.texture=lt)}function qe(){const N=et[Q];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function le(){try{n.compressedTexImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function x(){try{n.texSubImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function k(){try{n.texSubImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function Z(){try{n.compressedTexSubImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function rt(){try{n.texStorage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function at(){try{n.texStorage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function K(){try{n.texImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function J(){try{n.texImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function ot(N){return d[N]!==void 0?d[N]:n.getParameter(N)}function At(N,lt){d[N]!==lt&&(n.pixelStorei(N,lt),d[N]=lt)}function ut(N){re.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),re.copy(N))}function ct(N){Jt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Jt.copy(N))}function Rt(N,lt){let j=l.get(lt);j===void 0&&(j=new WeakMap,l.set(lt,j));let ht=j.get(N);ht===void 0&&(ht=n.getUniformBlockIndex(lt,N.name),j.set(N,ht))}function Dt(N,lt){const ht=l.get(lt).get(N);c.get(lt)!==ht&&(n.uniformBlockBinding(lt,ht,N.__bindingPointIndex),c.set(lt,ht))}function Gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},Q=null,et={},h={},f=new WeakMap,g=[],v=null,m=!1,p=null,S=null,E=null,y=null,w=null,M=null,T=null,_=new Lt(0,0,0),A=0,P=!1,L=null,F=null,B=null,I=null,V=null,re.set(0,0,n.canvas.width,n.canvas.height),Jt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:xt,bindFramebuffer:kt,drawBuffers:gt,useProgram:Vt,setBlending:st,setMaterial:Nt,setFlipSided:Et,setCullFace:Bt,setLineWidth:Se,setPolygonOffset:Ne,setScissorTest:$t,activeTexture:we,bindTexture:U,unbindTexture:qe,compressedTexImage2D:le,compressedTexImage3D:C,texImage2D:K,texImage3D:J,pixelStorei:At,getParameter:ot,updateUBOMapping:Rt,uniformBlockBinding:Dt,texStorage2D:rt,texStorage3D:at,texSubImage2D:x,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:Z,scissor:ut,viewport:ct,reset:Gt}}function ty(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ot,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,x){return g?new OffscreenCanvas(C,x):Ra("canvas")}function m(C,x,k){let W=1;const Z=le(C);if((Z.width>k||Z.height>k)&&(W=k/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const rt=Math.floor(W*Z.width),at=Math.floor(W*Z.height);h===void 0&&(h=v(rt,at));const K=x?v(rt,at):h;return K.width=rt,K.height=at,K.getContext("2d").drawImage(C,0,0,rt,at),Ut("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+rt+"x"+at+")."),K}else return"data"in C&&Ut("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function p(C){return C.generateMipmaps}function S(C){n.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(C,x,k,W,Z,rt=!1){if(C!==null){if(n[C]!==void 0)return n[C];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let at;W&&(at=t.get("EXT_texture_norm16"),at||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=x;if(x===n.RED&&(k===n.FLOAT&&(K=n.R32F),k===n.HALF_FLOAT&&(K=n.R16F),k===n.UNSIGNED_BYTE&&(K=n.R8),k===n.UNSIGNED_SHORT&&at&&(K=at.R16_EXT),k===n.SHORT&&at&&(K=at.R16_SNORM_EXT)),x===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.R8UI),k===n.UNSIGNED_SHORT&&(K=n.R16UI),k===n.UNSIGNED_INT&&(K=n.R32UI),k===n.BYTE&&(K=n.R8I),k===n.SHORT&&(K=n.R16I),k===n.INT&&(K=n.R32I)),x===n.RG&&(k===n.FLOAT&&(K=n.RG32F),k===n.HALF_FLOAT&&(K=n.RG16F),k===n.UNSIGNED_BYTE&&(K=n.RG8),k===n.UNSIGNED_SHORT&&at&&(K=at.RG16_EXT),k===n.SHORT&&at&&(K=at.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RG8UI),k===n.UNSIGNED_SHORT&&(K=n.RG16UI),k===n.UNSIGNED_INT&&(K=n.RG32UI),k===n.BYTE&&(K=n.RG8I),k===n.SHORT&&(K=n.RG16I),k===n.INT&&(K=n.RG32I)),x===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGB8UI),k===n.UNSIGNED_SHORT&&(K=n.RGB16UI),k===n.UNSIGNED_INT&&(K=n.RGB32UI),k===n.BYTE&&(K=n.RGB8I),k===n.SHORT&&(K=n.RGB16I),k===n.INT&&(K=n.RGB32I)),x===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),k===n.UNSIGNED_INT&&(K=n.RGBA32UI),k===n.BYTE&&(K=n.RGBA8I),k===n.SHORT&&(K=n.RGBA16I),k===n.INT&&(K=n.RGBA32I)),x===n.RGB&&(k===n.UNSIGNED_SHORT&&at&&(K=at.RGB16_EXT),k===n.SHORT&&at&&(K=at.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),x===n.RGBA){const J=rt?Aa:Qt.getTransfer(Z);k===n.FLOAT&&(K=n.RGBA32F),k===n.HALF_FLOAT&&(K=n.RGBA16F),k===n.UNSIGNED_BYTE&&(K=J===he?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&at&&(K=at.RGBA16_EXT),k===n.SHORT&&at&&(K=at.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function w(C,x){let k;return C?x===null||x===Gi||x===nr?k=n.DEPTH24_STENCIL8:x===bi?k=n.DEPTH32F_STENCIL8:x===ir&&(k=n.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Gi||x===nr?k=n.DEPTH_COMPONENT24:x===bi?k=n.DEPTH_COMPONENT32F:x===ir&&(k=n.DEPTH_COMPONENT16),k}function M(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ge&&C.minFilter!==Ve?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function T(C){const x=C.target;x.removeEventListener("dispose",T),A(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&d.delete(x)}function _(C){const x=C.target;x.removeEventListener("dispose",_),L(x)}function A(C){const x=i.get(C);if(x.__webglInit===void 0)return;const k=C.source,W=f.get(k);if(W){const Z=W[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(C),Object.keys(W).length===0&&f.delete(k)}i.remove(C)}function P(C){const x=i.get(C);n.deleteTexture(x.__webglTexture);const k=C.source,W=f.get(k);delete W[x.__cacheKey],a.memory.textures--}function L(C){const x=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let Z=0;Z<x.__webglFramebuffer[W].length;Z++)n.deleteFramebuffer(x.__webglFramebuffer[W][Z]);else n.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)n.deleteFramebuffer(x.__webglFramebuffer[W]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=C.textures;for(let W=0,Z=k.length;W<Z;W++){const rt=i.get(k[W]);rt.__webglTexture&&(n.deleteTexture(rt.__webglTexture),a.memory.textures--),i.remove(k[W])}i.remove(C)}let F=0;function B(){F=0}function I(){return F}function V(C){F=C}function z(){const C=F;return C>=s.maxTextures&&Ut("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,C}function Y(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function it(C,x){const k=i.get(C);if(C.isVideoTexture&&U(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const W=C.image;if(W===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(k,C,x);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+x)}function q(C,x){const k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){xt(k,C,x);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+x)}function Q(C,x){const k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){xt(k,C,x);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+x)}function et(C,x){const k=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){kt(k,C,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+x)}const Ct={[pc]:n.REPEAT,[Ji]:n.CLAMP_TO_EDGE,[mc]:n.MIRRORED_REPEAT},Mt={[Ge]:n.NEAREST,[im]:n.NEAREST_MIPMAP_NEAREST,[gr]:n.NEAREST_MIPMAP_LINEAR,[Ve]:n.LINEAR,[no]:n.LINEAR_MIPMAP_NEAREST,[Nn]:n.LINEAR_MIPMAP_LINEAR},re={[am]:n.NEVER,[um]:n.ALWAYS,[om]:n.LESS,[El]:n.LEQUAL,[cm]:n.EQUAL,[Tl]:n.GEQUAL,[lm]:n.GREATER,[hm]:n.NOTEQUAL};function Jt(C,x){if(x.type===bi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ve||x.magFilter===no||x.magFilter===gr||x.magFilter===Nn||x.minFilter===Ve||x.minFilter===no||x.minFilter===gr||x.minFilter===Nn)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Ct[x.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Ct[x.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Ct[x.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Mt[x.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Mt[x.minFilter]),x.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,re[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ge||x.minFilter!==gr&&x.minFilter!==Nn||x.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function te(C,x){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",T));const W=x.source;let Z=f.get(W);Z===void 0&&(Z={},f.set(W,Z));const rt=Y(x);if(rt!==C.__cacheKey){Z[rt]===void 0&&(Z[rt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Z[rt].usedTimes++;const at=Z[C.__cacheKey];at!==void 0&&(Z[C.__cacheKey].usedTimes--,at.usedTimes===0&&P(x)),C.__cacheKey=rt,C.__webglTexture=Z[rt].texture}return k}function $(C,x,k){return Math.floor(Math.floor(C/k)/x)}function tt(C,x,k,W){const rt=C.updateRanges;if(rt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,k,W,x.data);else{rt.sort((At,ut)=>At.start-ut.start);let at=0;for(let At=1;At<rt.length;At++){const ut=rt[at],ct=rt[At],Rt=ut.start+ut.count,Dt=$(ct.start,x.width,4),Gt=$(ut.start,x.width,4);ct.start<=Rt+1&&Dt===Gt&&$(ct.start+ct.count-1,x.width,4)===Dt?ut.count=Math.max(ut.count,ct.start+ct.count-ut.start):(++at,rt[at]=ct)}rt.length=at+1;const K=e.getParameter(n.UNPACK_ROW_LENGTH),J=e.getParameter(n.UNPACK_SKIP_PIXELS),ot=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let At=0,ut=rt.length;At<ut;At++){const ct=rt[At],Rt=Math.floor(ct.start/4),Dt=Math.ceil(ct.count/4),Gt=Rt%x.width,N=Math.floor(Rt/x.width),lt=Dt,j=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Gt),e.pixelStorei(n.UNPACK_SKIP_ROWS,N),e.texSubImage2D(n.TEXTURE_2D,0,Gt,N,lt,j,k,W,x.data)}C.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,K),e.pixelStorei(n.UNPACK_SKIP_PIXELS,J),e.pixelStorei(n.UNPACK_SKIP_ROWS,ot)}}function xt(C,x,k){let W=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=n.TEXTURE_3D);const Z=te(C,x),rt=x.source;e.bindTexture(W,C.__webglTexture,n.TEXTURE0+k);const at=i.get(rt);if(rt.version!==at.__version||Z===!0){if(e.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const j=Qt.getPrimaries(Qt.workingColorSpace),ht=x.colorSpace===_n?null:Qt.getPrimaries(x.colorSpace),mt=x.colorSpace===_n||j===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let J=m(x.image,!1,s.maxTextureSize);J=qe(x,J);const ot=r.convert(x.format,x.colorSpace),At=r.convert(x.type);let ut=y(x.internalFormat,ot,At,x.normalized,x.colorSpace,x.isVideoTexture);Jt(W,x);let ct;const Rt=x.mipmaps,Dt=x.isVideoTexture!==!0,Gt=at.__version===void 0||Z===!0,N=rt.dataReady,lt=M(x,J);if(x.isDepthTexture)ut=w(x.format===Un,x.type),Gt&&(Dt?e.texStorage2D(n.TEXTURE_2D,1,ut,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,ut,J.width,J.height,0,ot,At,null));else if(x.isDataTexture)if(Rt.length>0){Dt&&Gt&&e.texStorage2D(n.TEXTURE_2D,lt,ut,Rt[0].width,Rt[0].height);for(let j=0,ht=Rt.length;j<ht;j++)ct=Rt[j],Dt?N&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,ct.width,ct.height,ot,At,ct.data):e.texImage2D(n.TEXTURE_2D,j,ut,ct.width,ct.height,0,ot,At,ct.data);x.generateMipmaps=!1}else Dt?(Gt&&e.texStorage2D(n.TEXTURE_2D,lt,ut,J.width,J.height),N&&tt(x,J,ot,At)):e.texImage2D(n.TEXTURE_2D,0,ut,J.width,J.height,0,ot,At,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Dt&&Gt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,ut,Rt[0].width,Rt[0].height,J.depth);for(let j=0,ht=Rt.length;j<ht;j++)if(ct=Rt[j],x.format!==Ei)if(ot!==null)if(Dt){if(N)if(x.layerUpdates.size>0){const mt=Qh(ct.width,ct.height,x.format,x.type);for(const nt of x.layerUpdates){const Pt=ct.data.subarray(nt*mt/ct.data.BYTES_PER_ELEMENT,(nt+1)*mt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,nt,ct.width,ct.height,1,ot,Pt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ct.width,ct.height,J.depth,ot,ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,ut,ct.width,ct.height,J.depth,0,ct.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ct.width,ct.height,J.depth,ot,At,ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,j,ut,ct.width,ct.height,J.depth,0,ot,At,ct.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Dt&&Gt&&e.texStorage2D(n.TEXTURE_2D,lt,ut,Rt[0].width,Rt[0].height);for(let j=0,ht=Rt.length;j<ht;j++)ct=Rt[j],x.format!==Ei?ot!==null?Dt?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,ct.width,ct.height,ot,ct.data):e.compressedTexImage2D(n.TEXTURE_2D,j,ut,ct.width,ct.height,0,ct.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?N&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,ct.width,ct.height,ot,At,ct.data):e.texImage2D(n.TEXTURE_2D,j,ut,ct.width,ct.height,0,ot,At,ct.data)}else if(x.isDataArrayTexture)if(Dt){if(Gt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,ut,J.width,J.height,J.depth),N)if(x.layerUpdates.size>0){const j=Qh(J.width,J.height,x.format,x.type);for(const ht of x.layerUpdates){const mt=J.data.subarray(ht*j/J.data.BYTES_PER_ELEMENT,(ht+1)*j/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ht,J.width,J.height,1,ot,At,mt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ot,At,J.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ut,J.width,J.height,J.depth,0,ot,At,J.data);else if(x.isData3DTexture)Dt?(Gt&&e.texStorage3D(n.TEXTURE_3D,lt,ut,J.width,J.height,J.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ot,At,J.data)):e.texImage3D(n.TEXTURE_3D,0,ut,J.width,J.height,J.depth,0,ot,At,J.data);else if(x.isFramebufferTexture){if(Gt)if(Dt)e.texStorage2D(n.TEXTURE_2D,lt,ut,J.width,J.height);else{let j=J.width,ht=J.height;for(let mt=0;mt<lt;mt++)e.texImage2D(n.TEXTURE_2D,mt,ut,j,ht,0,ot,At,null),j>>=1,ht>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){const j=n.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),J.parentNode!==j){j.appendChild(J),d.add(x),j.onpaint=ht=>{const mt=ht.changedElements;for(const nt of d)mt.includes(nt.image)&&(nt.needsUpdate=!0)},j.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,J);else{const mt=n.RGBA,nt=n.RGBA,Pt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,mt,nt,Pt,J)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Rt.length>0){if(Dt&&Gt){const j=le(Rt[0]);e.texStorage2D(n.TEXTURE_2D,lt,ut,j.width,j.height)}for(let j=0,ht=Rt.length;j<ht;j++)ct=Rt[j],Dt?N&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,ot,At,ct):e.texImage2D(n.TEXTURE_2D,j,ut,ot,At,ct);x.generateMipmaps=!1}else if(Dt){if(Gt){const j=le(J);e.texStorage2D(n.TEXTURE_2D,lt,ut,j.width,j.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot,At,J)}else e.texImage2D(n.TEXTURE_2D,0,ut,ot,At,J);p(x)&&S(W),at.__version=rt.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function kt(C,x,k){if(x.image.length!==6)return;const W=te(C,x),Z=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+k);const rt=i.get(Z);if(Z.version!==rt.__version||W===!0){e.activeTexture(n.TEXTURE0+k);const at=Qt.getPrimaries(Qt.workingColorSpace),K=x.colorSpace===_n?null:Qt.getPrimaries(x.colorSpace),J=x.colorSpace===_n||at===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ot=x.isCompressedTexture||x.image[0].isCompressedTexture,At=x.image[0]&&x.image[0].isDataTexture,ut=[];for(let nt=0;nt<6;nt++)!ot&&!At?ut[nt]=m(x.image[nt],!0,s.maxCubemapSize):ut[nt]=At?x.image[nt].image:x.image[nt],ut[nt]=qe(x,ut[nt]);const ct=ut[0],Rt=r.convert(x.format,x.colorSpace),Dt=r.convert(x.type),Gt=y(x.internalFormat,Rt,Dt,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,lt=rt.__version===void 0||W===!0,j=Z.dataReady;let ht=M(x,ct);Jt(n.TEXTURE_CUBE_MAP,x);let mt;if(ot){N&&lt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ht,Gt,ct.width,ct.height);for(let nt=0;nt<6;nt++){mt=ut[nt].mipmaps;for(let Pt=0;Pt<mt.length;Pt++){const bt=mt[Pt];x.format!==Ei?Rt!==null?N?j&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt,0,0,bt.width,bt.height,Rt,bt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt,Gt,bt.width,bt.height,0,bt.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt,0,0,bt.width,bt.height,Rt,Dt,bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt,Gt,bt.width,bt.height,0,Rt,Dt,bt.data)}}}else{if(mt=x.mipmaps,N&&lt){mt.length>0&&ht++;const nt=le(ut[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ht,Gt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(At){N?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ut[nt].width,ut[nt].height,Rt,Dt,ut[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Gt,ut[nt].width,ut[nt].height,0,Rt,Dt,ut[nt].data);for(let Pt=0;Pt<mt.length;Pt++){const ve=mt[Pt].image[nt].image;N?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt+1,0,0,ve.width,ve.height,Rt,Dt,ve.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt+1,Gt,ve.width,ve.height,0,Rt,Dt,ve.data)}}else{N?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Rt,Dt,ut[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Gt,Rt,Dt,ut[nt]);for(let Pt=0;Pt<mt.length;Pt++){const bt=mt[Pt];N?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt+1,0,0,Rt,Dt,bt.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt+1,Gt,Rt,Dt,bt.image[nt])}}}p(x)&&S(n.TEXTURE_CUBE_MAP),rt.__version=Z.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function gt(C,x,k,W,Z,rt){const at=r.convert(k.format,k.colorSpace),K=r.convert(k.type),J=y(k.internalFormat,at,K,k.normalized,k.colorSpace),ot=i.get(x),At=i.get(k);if(At.__renderTarget=x,!ot.__hasExternalTextures){const ut=Math.max(1,x.width>>rt),ct=Math.max(1,x.height>>rt);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,rt,J,ut,ct,x.depth,0,at,K,null):e.texImage2D(Z,rt,J,ut,ct,0,at,K,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),we(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Z,At.__webglTexture,0,$t(x)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Z,At.__webglTexture,rt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Vt(C,x,k){if(n.bindRenderbuffer(n.RENDERBUFFER,C),x.depthBuffer){const W=x.depthTexture,Z=W&&W.isDepthTexture?W.type:null,rt=w(x.stencilBuffer,Z),at=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;we(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$t(x),rt,x.width,x.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,$t(x),rt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,rt,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,C)}else{const W=x.textures;for(let Z=0;Z<W.length;Z++){const rt=W[Z],at=r.convert(rt.format,rt.colorSpace),K=r.convert(rt.type),J=y(rt.internalFormat,at,K,rt.normalized,rt.colorSpace);we(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$t(x),J,x.width,x.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,$t(x),J,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,J,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Me(C,x,k){const W=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=i.get(x.depthTexture);if(Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,x.depthTexture.addEventListener("dispose",T)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Jt(n.TEXTURE_CUBE_MAP,x.depthTexture);const ot=r.convert(x.depthTexture.format),At=r.convert(x.depthTexture.type);let ut;x.depthTexture.format===sn?ut=n.DEPTH_COMPONENT24:x.depthTexture.format===Un&&(ut=n.DEPTH24_STENCIL8);for(let ct=0;ct<6;ct++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ut,x.width,x.height,0,ot,At,null)}}else it(x.depthTexture,0);const rt=Z.__webglTexture,at=$t(x),K=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,J=x.depthTexture.format===Un?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===sn)we(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,K,rt,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,J,K,rt,0);else if(x.depthTexture.format===Un)we(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,K,rt,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,J,K,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Yt(C){const x=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const W=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=W}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)Me(x.__webglFramebuffer[W],C,W);else{const W=C.texture.mipmaps;W&&W.length>0?Me(x.__webglFramebuffer[0],C,0):Me(x.__webglFramebuffer,C,0)}else if(k){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=n.createRenderbuffer(),Vt(x.__webglDepthbuffer[W],C,!1);else{const Z=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=x.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,rt)}}else{const W=C.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Vt(x.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,rt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function st(C,x,k){const W=i.get(C);x!==void 0&&gt(W.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Yt(C)}function Nt(C){const x=C.texture,k=i.get(C),W=i.get(x);C.addEventListener("dispose",_);const Z=C.textures,rt=C.isWebGLCubeRenderTarget===!0,at=Z.length>1;if(at||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=x.version,a.memory.textures++),rt){k.__webglFramebuffer=[];for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[K]=[];for(let J=0;J<x.mipmaps.length;J++)k.__webglFramebuffer[K][J]=n.createFramebuffer()}else k.__webglFramebuffer[K]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let K=0;K<x.mipmaps.length;K++)k.__webglFramebuffer[K]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(at)for(let K=0,J=Z.length;K<J;K++){const ot=i.get(Z[K]);ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&we(C)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let K=0;K<Z.length;K++){const J=Z[K];k.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[K]);const ot=r.convert(J.format,J.colorSpace),At=r.convert(J.type),ut=y(J.internalFormat,ot,At,J.normalized,J.colorSpace,C.isXRRenderTarget===!0),ct=$t(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,ut,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,k.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Vt(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(rt){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Jt(n.TEXTURE_CUBE_MAP,x);for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)gt(k.__webglFramebuffer[K][J],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,J);else gt(k.__webglFramebuffer[K],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(x)&&S(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let K=0,J=Z.length;K<J;K++){const ot=Z[K],At=i.get(ot);let ut=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ut=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,At.__webglTexture),Jt(ut,ot),gt(k.__webglFramebuffer,C,ot,n.COLOR_ATTACHMENT0+K,ut,0),p(ot)&&S(ut)}e.unbindTexture()}else{let K=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,W.__webglTexture),Jt(K,x),x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)gt(k.__webglFramebuffer[J],C,x,n.COLOR_ATTACHMENT0,K,J);else gt(k.__webglFramebuffer,C,x,n.COLOR_ATTACHMENT0,K,0);p(x)&&S(K),e.unbindTexture()}C.depthBuffer&&Yt(C)}function Et(C){const x=C.textures;for(let k=0,W=x.length;k<W;k++){const Z=x[k];if(p(Z)){const rt=E(C),at=i.get(Z).__webglTexture;e.bindTexture(rt,at),S(rt),e.unbindTexture()}}}const Bt=[],Se=[];function Ne(C){if(C.samples>0){if(we(C)===!1){const x=C.textures,k=C.width,W=C.height;let Z=n.COLOR_BUFFER_BIT;const rt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=i.get(C),K=x.length>1;if(K)for(let ot=0;ot<x.length;ot++)e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);const J=C.texture.mipmaps;J&&J.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let ot=0;ot<x.length;ot++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);const At=i.get(x[ot]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,At,0)}n.blitFramebuffer(0,0,k,W,0,0,k,W,Z,n.NEAREST),c===!0&&(Bt.length=0,Se.length=0,Bt.push(n.COLOR_ATTACHMENT0+ot),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(Bt.push(rt),Se.push(rt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Se)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let ot=0;ot<x.length;ot++){e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);const At=i.get(x[ot]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,At,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){const x=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function $t(C){return Math.min(s.maxSamples,C.samples)}function we(C){const x=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function U(C){const x=a.render.frame;u.get(C)!==x&&(u.set(C,x),C.update())}function qe(C,x){const k=C.colorSpace,W=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Ta&&k!==_n&&(Qt.getTransfer(k)===he?(W!==Ei||Z!==ai)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",k)),x}function le(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.getTextureUnits=I,this.setTextureUnits=V,this.setTexture2D=it,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=et,this.rebindTextures=st,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=we,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ey(n,t){function e(i,s=_n){let r;const a=Qt.getTransfer(s);if(i===ai)return n.UNSIGNED_BYTE;if(i===xl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===yl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Sd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===wd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===yd)return n.BYTE;if(i===Md)return n.SHORT;if(i===ir)return n.UNSIGNED_SHORT;if(i===_l)return n.INT;if(i===Gi)return n.UNSIGNED_INT;if(i===bi)return n.FLOAT;if(i===Vi)return n.HALF_FLOAT;if(i===bd)return n.ALPHA;if(i===Ed)return n.RGB;if(i===Ei)return n.RGBA;if(i===sn)return n.DEPTH_COMPONENT;if(i===Un)return n.DEPTH_STENCIL;if(i===Ml)return n.RED;if(i===Sl)return n.RED_INTEGER;if(i===zn)return n.RG;if(i===wl)return n.RG_INTEGER;if(i===bl)return n.RGBA_INTEGER;if(i===na||i===sa||i===ra||i===aa)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gc||i===vc||i===_c||i===xc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yc||i===Mc||i===Sc||i===wc||i===bc||i===ba||i===Ec)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===yc||i===Mc)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Sc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===wc)return r.COMPRESSED_R11_EAC;if(i===bc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ba)return r.COMPRESSED_RG11_EAC;if(i===Ec)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Tc||i===Ac||i===Rc||i===Cc||i===Pc||i===Lc||i===Ic||i===Dc||i===Nc||i===Uc||i===Fc||i===Oc||i===kc||i===Bc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Tc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ac)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ic)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Oc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zc||i===Hc||i===Gc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===zc)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vc||i===Wc||i===Ea||i===Xc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Vc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===nr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const iy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ny=`
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

}`;class sy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Fd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Xe({vertexShader:iy,fragmentShader:ny,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _t(new an(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ry extends En{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new sy,p={},S=e.getContextAttributes();let E=null,y=null;const w=[],M=[],T=new Ot;let _=null,A=null;const P=new ii;P.viewport=new Ee;const L=new ii;L.viewport=new Ee;const F=[P,L],B=new f0;let I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let tt=w[$];return tt===void 0&&(tt=new ho,w[$]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function($){let tt=w[$];return tt===void 0&&(tt=new ho,w[$]=tt),tt.getGripSpace()},this.getHand=function($){let tt=w[$];return tt===void 0&&(tt=new ho,w[$]=tt),tt.getHandSpace()};function z($){const tt=M.indexOf($.inputSource);if(tt===-1)return;const xt=w[tt];xt!==void 0&&(xt.update($.inputSource,$.frame,l||a),xt.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",it);for(let $=0;$<w.length;$++){const tt=M[$];tt!==null&&(M[$]=null,w[$].disconnect(tt))}I=null,V=null,m.reset();for(const $ in p)delete p[$];if(t.setRenderTarget(E),f=null,h=null,d=null,s=null,y=null,te.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(T.width,T.height,!1),A!==null){const $=A.camera;$.fov=A.fov,$.zoom=A.zoom,$.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",it),S.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,kt=null,gt=null;S.depth&&(gt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=S.stencil?Un:sn,kt=S.stencil?nr:Gi);const Vt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Vt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new fi(h.textureWidth,h.textureHeight,{format:Ei,type:ai,depthTexture:new or(h.textureWidth,h.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const xt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new fi(f.framebufferWidth,f.framebufferHeight,{format:Ei,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),te.setContext(s),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it($){for(let tt=0;tt<$.removed.length;tt++){const xt=$.removed[tt],kt=M.indexOf(xt);kt>=0&&(M[kt]=null,w[kt].disconnect(xt))}for(let tt=0;tt<$.added.length;tt++){const xt=$.added[tt];let kt=M.indexOf(xt);if(kt===-1){for(let Vt=0;Vt<w.length;Vt++)if(Vt>=M.length){M.push(xt),kt=Vt;break}else if(M[Vt]===null){M[Vt]=xt,kt=Vt;break}if(kt===-1)break}const gt=w[kt];gt&&gt.connect(xt)}}const q=new R,Q=new R;function et($,tt,xt){q.setFromMatrixPosition(tt.matrixWorld),Q.setFromMatrixPosition(xt.matrixWorld);const kt=q.distanceTo(Q),gt=tt.projectionMatrix.elements,Vt=xt.projectionMatrix.elements,Me=gt[14]/(gt[10]-1),Yt=gt[14]/(gt[10]+1),st=(gt[9]+1)/gt[5],Nt=(gt[9]-1)/gt[5],Et=(gt[8]-1)/gt[0],Bt=(Vt[8]+1)/Vt[0],Se=Me*Et,Ne=Me*Bt,$t=kt/(-Et+Bt),we=$t*-Et;if(tt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(we),$.translateZ($t),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),gt[10]===-1)$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const U=Me+$t,qe=Yt+$t,le=Se-we,C=Ne+(kt-we),x=st*Yt/qe*U,k=Nt*Yt/qe*U;$.projectionMatrix.makePerspective(le,C,x,k,U,qe),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Ct($,tt){tt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(tt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let tt=$.near,xt=$.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),B.near=L.near=P.near=tt,B.far=L.far=P.far=xt,(I!==B.near||V!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,V=B.far),B.layers.mask=$.layers.mask|6,P.layers.mask=B.layers.mask&-5,L.layers.mask=B.layers.mask&-3;const kt=$.parent,gt=B.cameras;Ct(B,kt);for(let Vt=0;Vt<gt.length;Vt++)Ct(gt[Vt],kt);gt.length===2?et(B,P,L):B.projectionMatrix.copy(P.projectionMatrix),A===null&&$.isPerspectiveCamera&&(A={camera:$,fov:$.fov,zoom:$.zoom}),Mt($,B,kt)};function Mt($,tt,xt){xt===null?$.matrix.copy(tt.matrixWorld):($.matrix.copy(xt.matrixWorld),$.matrix.invert(),$.matrix.multiply(tt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=rr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function($){return p[$]};let re=null;function Jt($,tt){if(u=tt.getViewerPose(l||a),g=tt,u!==null){const xt=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let kt=!1;xt.length!==B.cameras.length&&(B.cameras.length=0,kt=!0);for(let Yt=0;Yt<xt.length;Yt++){const st=xt[Yt];let Nt=null;if(f!==null)Nt=f.getViewport(st);else{const Bt=d.getViewSubImage(h,st);Nt=Bt.viewport,Yt===0&&(t.setRenderTargetTextures(y,Bt.colorTexture,Bt.depthStencilTexture),t.setRenderTarget(y))}let Et=F[Yt];Et===void 0&&(Et=new ii,Et.layers.enable(Yt),Et.viewport=new Ee,F[Yt]=Et),Et.matrix.fromArray(st.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(st.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),Yt===0&&(B.matrix.copy(Et.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),kt===!0&&B.cameras.push(Et)}const gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const Yt=d.getDepthInformation(xt[0]);Yt&&Yt.isValid&&Yt.texture&&m.init(Yt,s.renderState)}if(gt&&gt.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let Yt=0;Yt<xt.length;Yt++){const st=xt[Yt].camera;if(st){let Nt=p[st];Nt||(Nt=new Fd,p[st]=Nt);const Et=d.getCameraImage(st);Nt.sourceTexture=Et}}}}for(let xt=0;xt<w.length;xt++){const kt=M[xt],gt=w[xt];kt!==null&&gt!==void 0&&gt.update(kt,tt,l||a)}re&&re($,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),g=null}const te=new Hd;te.setAnimationLoop(Jt),this.setAnimationLoop=function($){re=$},this.dispose=function(){}}}const ay=new se,$d=new Ht;$d.set(-1,0,0,0,1,0,0,0,1);function oy(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Od(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,E,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,S,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ni&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ni&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),E=S.envMap,y=S.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(ay.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply($d),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ni&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function cy(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,w){const M=w.program;i.uniformBlockBinding(y,M)}function l(y,w){let M=s[y.id];M===void 0&&(m(y),M=u(y),s[y.id]=M,y.addEventListener("dispose",S));const T=w.program;i.updateUBOMapping(y,T);const _=t.render.frame;r[y.id]!==_&&(h(y),r[y.id]=_)}function u(y){const w=d();y.__bindingPointIndex=w;const M=n.createBuffer(),T=y.__size,_=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,T,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,M),M}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const w=s[y.id],M=y.uniforms,T=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let _=0,A=M.length;_<A;_++){const P=M[_];if(Array.isArray(P))for(let L=0,F=P.length;L<F;L++)f(P[L],_,L,T);else f(P,_,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,w,M,T){if(v(y,w,M,T)===!0){const _=y.__offset,A=y.value;if(Array.isArray(A)){let P=0;for(let L=0;L<A.length;L++){const F=A[L],B=p(F);g(F,y.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,y.__data)}}function g(y,w,M){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,M)}function v(y,w,M,T){const _=y.value,A=w+"_"+M;if(T[A]===void 0)return typeof _=="number"||typeof _=="boolean"?T[A]=_:ArrayBuffer.isView(_)?T[A]=_.slice():T[A]=_.clone(),!0;{const P=T[A];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return T[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function m(y){const w=y.uniforms;let M=0;const T=16;for(let A=0,P=w.length;A<P;A++){const L=Array.isArray(w[A])?w[A]:[w[A]];for(let F=0,B=L.length;F<B;F++){const I=L[F],V=Array.isArray(I.value)?I.value:[I.value];for(let z=0,Y=V.length;z<Y;z++){const it=V[z],q=p(it),Q=M%T,et=Q%q.boundary,Ct=Q+et;M+=et,Ct!==0&&T-Ct<q.storage&&(M+=T-Ct),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=q.storage}}}const _=M%T;return _>0&&(M+=T-_),y.__size=M,y.__cache={},this}function p(y){const w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",y),w}function S(y){const w=y.target;w.removeEventListener("dispose",S);const M=a.indexOf(w.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function E(){for(const y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:E}}const ly=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ci=null;function hy(){return Ci===null&&(Ci=new Ll(ly,16,16,zn,Vi),Ci.name="DFG_LUT",Ci.minFilter=Ve,Ci.magFilter=Ve,Ci.wrapS=Ji,Ci.wrapT=Ji,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}class Zd{constructor(t={}){const{canvas:e=fm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=ai}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const v=f,m=new Set([bl,wl,Sl]),p=new Set([ai,Gi,ir,nr,xl,yl]),S=new Uint32Array(4),E=new Int32Array(4),y=new R;let w=null,M=null;const T=[],_=[];let A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let L=!1,F=null,B=null,I=null,V=null;this._outputColorSpace=ei;let z=0,Y=0,it=null,q=-1,Q=null;const et=new Ee,Ct=new Ee;let Mt=null;const re=new Lt(0);let Jt=0,te=e.width,$=e.height,tt=1,xt=null,kt=null;const gt=new Ee(0,0,te,$),Vt=new Ee(0,0,te,$);let Me=!1;const Yt=new Il;let st=!1,Nt=!1;const Et=new se,Bt=new R,Se=new Ee,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function we(){return it===null?tt:1}let U=i;function qe(b,D){return e.getContext(b,D)}let le,C,x,k,W,Z,rt,at,K,J,ot,At,ut,ct,Rt,Dt,Gt,N,lt,j,ht,mt,nt;try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vl}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",oe,!1),e.addEventListener("webglcontextcreationerror",mi,!1),U===null){const D="webgl2";if(U=qe(D,b),U===null)throw qe(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pt()}catch(b){throw e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",mi,!1),ne("WebGLRenderer: "+b.message),b}function Pt(){le=new h_(U),le.init(),ht=new ey(U,le),C=new t_(U,le,t,ht),x=new Qx(U,le),C.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),B=U.createFramebuffer(),I=U.createFramebuffer(),V=U.createFramebuffer(),k=new f_(U),W=new Bx,Z=new ty(U,le,x,W,C,ht,k),rt=new l_(P),at=new m0(U),mt=new Jv(U,at),K=new u_(U,at,k,mt),J=new m_(U,K,at,mt,k),N=new p_(U,C,Z),Rt=new e_(W),ot=new kx(P,rt,le,C,mt,Rt),At=new oy(P,W),ut=new Hx,ct=new Yx(le),Gt=new jv(P,rt,x,J,g,c),Dt=new Jx(P,J,C),nt=new cy(U,k,C,x),lt=new Qv(U,le,k),j=new d_(U,le,k),k.programs=ot.programs,P.capabilities=C,P.extensions=le,P.properties=W,P.renderLists=ut,P.shadowMap=Dt,P.state=x,P.info=k}v!==ai&&(A=new v_(v,e.width,e.height,o,s,r));const bt=new ry(P,U);this.xr=bt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=le.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=le.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(b){b!==void 0&&(tt=b,this.setSize(te,$,!1))},this.getSize=function(b){return b.set(te,$)},this.setSize=function(b,D,X=!0){if(bt.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}te=b,$=D,e.width=Math.floor(b*tt),e.height=Math.floor(D*tt),X===!0&&(e.style.width=b+"px",e.style.height=D+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(te*tt,$*tt).floor()},this.setDrawingBufferSize=function(b,D,X){te=b,$=D,tt=X,e.width=Math.floor(b*X),e.height=Math.floor(D*X),this.setViewport(0,0,b,D)},this.setEffects=function(b){if(v===ai){ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let D=0;D<b.length;D++)if(b[D].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(et)},this.getViewport=function(b){return b.copy(gt)},this.setViewport=function(b,D,X,H){b.isVector4?gt.set(b.x,b.y,b.z,b.w):gt.set(b,D,X,H),x.viewport(et.copy(gt).multiplyScalar(tt).round())},this.getScissor=function(b){return b.copy(Vt)},this.setScissor=function(b,D,X,H){b.isVector4?Vt.set(b.x,b.y,b.z,b.w):Vt.set(b,D,X,H),x.scissor(Ct.copy(Vt).multiplyScalar(tt).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(b){x.setScissorTest(Me=b)},this.setOpaqueSort=function(b){xt=b},this.setTransparentSort=function(b){kt=b},this.getClearColor=function(b){return b.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor(...arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha(...arguments)},this.clear=function(b=!0,D=!0,X=!0){let H=0;if(b){let G=!1;if(it!==null){const pt=it.texture.format;G=m.has(pt)}if(G){const pt=it.texture.type,yt=p.has(pt),ft=Gt.getClearColor(),St=Gt.getClearAlpha(),Tt=ft.r,Wt=ft.g,jt=ft.b;yt?(S[0]=Tt,S[1]=Wt,S[2]=jt,S[3]=St,U.clearBufferuiv(U.COLOR,0,S)):(E[0]=Tt,E[1]=Wt,E[2]=jt,E[3]=St,U.clearBufferiv(U.COLOR,0,E))}else H|=U.COLOR_BUFFER_BIT}D&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",mi,!1),Gt.dispose(),ut.dispose(),ct.dispose(),W.dispose(),rt.dispose(),J.dispose(),mt.dispose(),nt.dispose(),ot.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Jl),bt.removeEventListener("sessionend",Ql),An.stop()};function ve(b){b.preventDefault(),Ca("WebGLRenderer: Context Lost."),L=!0}function oe(){Ca("WebGLRenderer: Context Restored."),L=!1;const b=k.autoReset,D=Dt.enabled,X=Dt.autoUpdate,H=Dt.needsUpdate,G=Dt.type;Pt(),k.autoReset=b,Dt.enabled=D,Dt.autoUpdate=X,Dt.needsUpdate=H,Dt.type=G}function mi(b){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ti(b){const D=b.target;D.removeEventListener("dispose",Ti),Jf(D)}function Jf(b){Qf(b),W.remove(b)}function Qf(b){const D=W.get(b).programs;D!==void 0&&(D.forEach(function(X){ot.releaseProgram(X)}),b.isShaderMaterial&&ot.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,X,H,G,pt){D===null&&(D=Ne);const yt=G.isMesh&&G.matrixWorld.determinantAffine()<0,ft=ip(b,D,X,H,G);x.setMaterial(H,yt);let St=X.index,Tt=1;if(H.wireframe===!0){if(St=K.getWireframeAttribute(X),St===void 0)return;Tt=2}const Wt=X.drawRange,jt=X.attributes.position;let wt=Wt.start*Tt,ce=(Wt.start+Wt.count)*Tt;pt!==null&&(wt=Math.max(wt,pt.start*Tt),ce=Math.min(ce,(pt.start+pt.count)*Tt)),St!==null?(wt=Math.max(wt,0),ce=Math.min(ce,St.count)):jt!=null&&(wt=Math.max(wt,0),ce=Math.min(ce,jt.count));const Le=ce-wt;if(Le<0||Le===1/0)return;mt.setup(G,H,ft,X,St);let ye,me=lt;if(St!==null&&(ye=at.get(St),me=j,me.setIndex(ye)),G.isMesh)H.wireframe===!0?(x.setLineWidth(H.wireframeLinewidth*we()),me.setMode(U.LINES)):me.setMode(U.TRIANGLES);else if(G.isLine){let Ye=H.linewidth;Ye===void 0&&(Ye=1),x.setLineWidth(Ye*we()),G.isLineSegments?me.setMode(U.LINES):G.isLineLoop?me.setMode(U.LINE_LOOP):me.setMode(U.LINE_STRIP)}else G.isPoints?me.setMode(U.POINTS):G.isSprite&&me.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(le.get("WEBGL_multi_draw"))me.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ye=G._multiDrawStarts,vt=G._multiDrawCounts,Ke=G._multiDrawCount,ie=St?at.get(St).bytesPerElement:1,ci=W.get(H).currentProgram.getUniforms();for(let Ai=0;Ai<Ke;Ai++)ci.setValue(U,"_gl_DrawID",Ai),me.render(Ye[Ai]/ie,vt[Ai])}else if(G.isInstancedMesh)me.renderInstances(wt,Le,G.count);else if(X.isInstancedBufferGeometry){const Ye=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,vt=Math.min(X.instanceCount,Ye);me.renderInstances(wt,Le,vt)}else me.render(wt,Le)};function jl(b,D,X,H){F!==null&&b.isNodeMaterial&&F.setObject(H,b),st===!0&&Rt.setState(b,X,!1),b.transparent===!0&&b.side===Pe&&b.forceSinglePass===!1?(b.side=ni,b.needsUpdate=!0,pr(b,D,H),b.side=kn,b.needsUpdate=!0,pr(b,D,H),b.side=Pe):pr(b,D,H)}this.compile=function(b,D,X=null){X===null&&(X=b),F!==null&&F.renderStart(b,D,X),M=ct.get(X),M.init(D),_.push(M),X.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),b!==X&&b.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),M.setupLights(),F!==null&&F.updateLights(M.state.lightsArray),Nt=this.localClippingEnabled,st=Rt.init(this.clippingPlanes,Nt),st===!0&&Rt.setGlobalState(this.clippingPlanes,D),F!==null&&Dt.render(M.state.shadowsArray,X,D);const H=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const pt=G.material;if(pt)if(Array.isArray(pt))for(let yt=0;yt<pt.length;yt++){const ft=pt[yt];jl(ft,X,D,G),H.add(ft)}else jl(pt,X,D,G),H.add(pt)}),M=_.pop(),F!==null&&F.renderEnd(),H},this.compileAsync=function(b,D,X=null){const H=this.compile(b,D,X);return new Promise(G=>{function pt(){if(H.forEach(function(yt){const St=W.get(yt).currentProgram;(St===void 0||St.isReady())&&H.delete(yt)}),H.size===0){G(b);return}setTimeout(pt,10)}le.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let ja=null;function tp(b){ja&&ja(b)}function Jl(){An.stop()}function Ql(){An.start()}const An=new Hd;An.setAnimationLoop(tp),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(b){ja=b,bt.setAnimationLoop(b),b===null?An.stop():An.start()},bt.addEventListener("sessionstart",Jl),bt.addEventListener("sessionend",Ql),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(b,D);const X=bt.enabled===!0&&bt.isPresenting===!0,H=A!==null&&(it===null||X)&&A.begin(P,it);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(D),D=bt.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,D,it),M=ct.get(b,_.length),M.init(D),M.state.textureUnits=Z.getTextureUnits(),_.push(M),Et.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Yt.setFromProjectionMatrix(Et,ki,D.reversedDepth),Nt=this.localClippingEnabled,st=Rt.init(this.clippingPlanes,Nt),w=ut.get(b,T.length),w.init(),T.push(w),bt.enabled===!0&&bt.isPresenting===!0){const yt=P.xr.getDepthSensingMesh();yt!==null&&Ja(yt,D,-1/0,P.sortObjects)}Ja(b,D,0,P.sortObjects),w.finish(),F!==null&&F.updateLights(M.state.lightsArray),P.sortObjects===!0&&w.sort(xt,kt),$t=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,$t&&Gt.addToRenderList(w,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&Rt.beginShadows();const G=M.state.shadowsArray;if(Dt.render(G,b,D),st===!0&&Rt.endShadows(),(H&&A.hasRenderPass())===!1){const yt=w.opaque,ft=w.transmissive;if(M.setupLights(),D.isArrayCamera){const St=D.cameras;if(ft.length>0)for(let Tt=0,Wt=St.length;Tt<Wt;Tt++){const jt=St[Tt];eh(yt,ft,b,jt)}$t&&Gt.render(b);for(let Tt=0,Wt=St.length;Tt<Wt;Tt++){const jt=St[Tt];th(w,b,jt,jt.viewport)}}else ft.length>0&&eh(yt,ft,b,D),$t&&Gt.render(b),th(w,b,D)}it!==null&&Y===0&&(Z.updateMultisampleRenderTarget(it),Z.updateRenderTargetMipmap(it)),H&&A.end(P),b.isScene===!0&&b.onAfterRender(P,b,D),mt.resetDefaultState(),q=-1,Q=null,_.pop(),_.length>0?(M=_[_.length-1],Z.setTextureUnits(M.state.textureUnits),st===!0&&Rt.setGlobalState(P.clippingPlanes,M.state.camera)):M=null,T.pop(),T.length>0?w=T[T.length-1]:w=null,F!==null&&F.renderEnd()};function Ja(b,D,X,H){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLightProbeGrid)M.pushLightProbeGrid(b);else if(b.isLight)M.pushLight(b),b.castShadow&&M.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Yt)){H&&Se.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Et);const yt=J.update(b),ft=b.material;ft.visible&&w.push(b,yt,ft,X,Se.z,null,D)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Yt))){const yt=J.update(b),ft=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Se.copy(b.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Se.copy(yt.boundingSphere.center)),Se.applyMatrix4(b.matrixWorld).applyMatrix4(Et)),Array.isArray(ft)){const St=yt.groups;for(let Tt=0,Wt=St.length;Tt<Wt;Tt++){const jt=St[Tt],wt=ft[jt.materialIndex];wt&&wt.visible&&w.push(b,yt,wt,X,Se.z,jt,D)}}else ft.visible&&w.push(b,yt,ft,X,Se.z,null,D)}}const pt=b.children;for(let yt=0,ft=pt.length;yt<ft;yt++)Ja(pt[yt],D,X,H)}function th(b,D,X,H){const{opaque:G,transmissive:pt,transparent:yt}=b;M.setupLightsView(X),st===!0&&Rt.setGlobalState(P.clippingPlanes,X),H&&x.viewport(et.copy(H)),G.length>0&&fr(G,D,X),pt.length>0&&fr(pt,D,X),yt.length>0&&fr(yt,D,X),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function eh(b,D,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[H.id]===void 0){const wt=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[H.id]=new fi(1,1,{generateMipmaps:!0,type:wt?Vi:ai,minFilter:Nn,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}const pt=M.state.transmissionRenderTarget[H.id],yt=H.viewport||et;pt.setSize(yt.z*P.transmissionResolutionScale,yt.w*P.transmissionResolutionScale);const ft=P.getRenderTarget(),St=P.getActiveCubeFace(),Tt=P.getActiveMipmapLevel();P.setRenderTarget(pt),P.getClearColor(re),Jt=P.getClearAlpha(),Jt<1&&P.setClearColor(16777215,.5),P.clear(),$t&&Gt.render(X);const Wt=P.toneMapping;P.toneMapping=Bi;const jt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),M.setupLightsView(H),st===!0&&Rt.setGlobalState(P.clippingPlanes,H),fr(b,X,H),Z.updateMultisampleRenderTarget(pt),Z.updateRenderTargetMipmap(pt),le.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let ce=0,Le=D.length;ce<Le;ce++){const ye=D[ce],{object:me,geometry:Ye,material:vt,group:Ke}=ye;if(vt.side===Pe&&me.layers.test(H.layers)){const ie=vt.side;vt.side=ni,vt.needsUpdate=!0,ih(me,X,H,Ye,vt,Ke),vt.side=ie,vt.needsUpdate=!0,wt=!0}}wt===!0&&(Z.updateMultisampleRenderTarget(pt),Z.updateRenderTargetMipmap(pt))}P.setRenderTarget(ft,St,Tt),P.setClearColor(re,Jt),jt!==void 0&&(H.viewport=jt),P.toneMapping=Wt}function fr(b,D,X){const H=D.isScene===!0?D.overrideMaterial:null;for(let G=0,pt=b.length;G<pt;G++){const yt=b[G],{object:ft,geometry:St,group:Tt}=yt;let Wt=yt.material;Wt.allowOverride===!0&&H!==null&&(Wt=H),ft.layers.test(X.layers)&&ih(ft,D,X,St,Wt,Tt)}}function ih(b,D,X,H,G,pt){F!==null&&G.isNodeMaterial&&F.setObject(b,G),b.onBeforeRender(P,D,X,H,G,pt),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(P,D,X,H,b,pt),G.transparent===!0&&G.side===Pe&&G.forceSinglePass===!1?(G.side=ni,G.needsUpdate=!0,P.renderBufferDirect(X,D,H,G,b,pt),G.side=kn,G.needsUpdate=!0,P.renderBufferDirect(X,D,H,G,b,pt),G.side=Pe):P.renderBufferDirect(X,D,H,G,b,pt),b.onAfterRender(P,D,X,H,G,pt)}function pr(b,D,X){D.isScene!==!0&&(D=Ne);const H=W.get(b),G=M.state.lights,pt=M.state.shadowsArray,yt=G.state.version,ft=ot.getParameters(b,G.state,pt,D,X,M.state.lightProbeGridArray),St=ot.getProgramCacheKey(ft);let Tt=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?D.environment:null,H.fog=D.fog;const Wt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=rt.get(b.envMap||H.environment,Wt),H.envMapRotation=H.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Tt===void 0&&(b.addEventListener("dispose",Ti),Tt=new Map,H.programs=Tt);let jt=Tt.get(St);if(jt!==void 0){if(H.currentProgram===jt&&H.lightsStateVersion===yt)return sh(b,ft),jt}else ft.uniforms=ot.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,X,ft),b.onBeforeCompile(ft,P),jt=ot.acquireProgram(ft,St),Tt.set(St,jt),H.uniforms=ft.uniforms;const wt=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(wt.clippingPlanes=Rt.uniform),sh(b,ft),H.needsLights=sp(b),H.lightsStateVersion=yt,H.needsLights&&(wt.ambientLightColor.value=G.state.ambient,wt.lightProbe.value=G.state.probe,wt.sunLights.value=G.state.sun,wt.sunLightShadows.value=G.state.sunShadow,wt.directionalLights.value=G.state.directional,wt.directionalLightShadows.value=G.state.directionalShadow,wt.spotLights.value=G.state.spot,wt.spotLightShadows.value=G.state.spotShadow,wt.rectAreaLights.value=G.state.rectArea,wt.ltc_1.value=G.state.rectAreaLTC1,wt.ltc_2.value=G.state.rectAreaLTC2,wt.pointLights.value=G.state.point,wt.pointLightShadows.value=G.state.pointShadow,wt.hemisphereLights.value=G.state.hemi,wt.sunShadowMatrix.value=G.state.sunShadowMatrix,wt.sunShadowCascade.value=G.state.sunShadowCascade,wt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,wt.spotLightMatrix.value=G.state.spotLightMatrix,wt.spotLightMap.value=G.state.spotLightMap,wt.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=M.state.lightProbeGridArray.length>0,H.currentProgram=jt,H.uniformsList=null,jt}function nh(b){if(b.uniformsList===null){const D=b.currentProgram.getUniforms();b.uniformsList=oa.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function sh(b,D){const X=W.get(b);X.outputColorSpace=D.outputColorSpace,X.batching=D.batching,X.batchingColor=D.batchingColor,X.instancing=D.instancing,X.instancingColor=D.instancingColor,X.instancingMorph=D.instancingMorph,X.skinning=D.skinning,X.morphTargets=D.morphTargets,X.morphNormals=D.morphNormals,X.morphColors=D.morphColors,X.morphTargetsCount=D.morphTargetsCount,X.numClippingPlanes=D.numClippingPlanes,X.numIntersection=D.numClipIntersection,X.vertexAlphas=D.vertexAlphas,X.vertexTangents=D.vertexTangents,X.toneMapping=D.toneMapping}function ep(b,D){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(D.matrixWorld);for(let X=0,H=b.length;X<H;X++){const G=b[X];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function ip(b,D,X,H,G){D.isScene!==!0&&(D=Ne),Z.resetTextureUnits();const pt=D.fog,yt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?D.environment:null,ft=it===null?P.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Qt.workingColorSpace,St=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Tt=rt.get(H.envMap||yt,St),Wt=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,jt=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),wt=!!X.morphAttributes.position,ce=!!X.morphAttributes.normal,Le=!!X.morphAttributes.color;let ye=Bi;H.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ye=P.toneMapping);const me=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ye=me!==void 0?me.length:0,vt=W.get(H),Ke=M.state.lights;if(st===!0&&(Nt===!0||b!==Q)){const _e=b===Q&&H.id===q;Rt.setState(H,b,_e)}let ie=!1;H.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==Ke.state.version||vt.outputColorSpace!==ft||G.isBatchedMesh&&vt.batching===!1||!G.isBatchedMesh&&vt.batching===!0||G.isBatchedMesh&&vt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&vt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&vt.instancing===!1||!G.isInstancedMesh&&vt.instancing===!0||G.isSkinnedMesh&&vt.skinning===!1||!G.isSkinnedMesh&&vt.skinning===!0||G.isInstancedMesh&&vt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&vt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&vt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&vt.instancingMorph===!1&&G.morphTexture!==null||vt.envMap!==Tt||H.fog===!0&&vt.fog!==pt||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==Rt.numPlanes||vt.numIntersection!==Rt.numIntersection)||vt.vertexAlphas!==Wt||vt.vertexTangents!==jt||vt.morphTargets!==wt||vt.morphNormals!==ce||vt.morphColors!==Le||vt.toneMapping!==ye||vt.morphTargetsCount!==Ye||!!vt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ie=!0):(ie=!0,vt.__version=H.version);let ci=vt.currentProgram;ie===!0&&(ci=pr(H,D,G),F&&H.isNodeMaterial&&F.onUpdateProgram(H,ci,vt));let Ai=!1,cn=!1,Wn=!1;const fe=ci.getUniforms(),Te=vt.uniforms;if(x.useProgram(ci.program)&&(Ai=!0,cn=!0,Wn=!0),H.id!==q&&(q=H.id,cn=!0),vt.needsLights){const _e=ep(M.state.lightProbeGridArray,G);vt.lightProbeGrid!==_e&&(vt.lightProbeGrid=_e,cn=!0)}if(Ai||Q!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),fe.setValue(U,"projectionMatrix",b.projectionMatrix),fe.setValue(U,"viewMatrix",b.matrixWorldInverse);const hn=fe.map.cameraPosition;hn!==void 0&&hn.setValue(U,Bt.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&fe.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&fe.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),Q!==b&&(Q=b,cn=!0,Wn=!0)}if(vt.needsLights&&(Ke.state.sunShadowMap.length>0&&fe.setValue(U,"sunShadowMap",Ke.state.sunShadowMap,Z),Ke.state.directionalShadowMap.length>0&&fe.setValue(U,"directionalShadowMap",Ke.state.directionalShadowMap,Z),Ke.state.spotShadowMap.length>0&&fe.setValue(U,"spotShadowMap",Ke.state.spotShadowMap,Z),Ke.state.pointShadowMap.length>0&&fe.setValue(U,"pointShadowMap",Ke.state.pointShadowMap,Z)),G.isSkinnedMesh){fe.setOptional(U,G,"bindMatrix"),fe.setOptional(U,G,"bindMatrixInverse");const _e=G.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),fe.setValue(U,"boneTexture",_e.boneTexture,Z))}G.isBatchedMesh&&(fe.setOptional(U,G,"batchingTexture"),fe.setValue(U,"batchingTexture",G._matricesTexture,Z),fe.setOptional(U,G,"batchingIdTexture"),fe.setValue(U,"batchingIdTexture",G._indirectTexture,Z),fe.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&fe.setValue(U,"batchingColorTexture",G._colorsTexture,Z));const ln=X.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&N.update(G,X,ci),(cn||vt.receiveShadow!==G.receiveShadow)&&(vt.receiveShadow=G.receiveShadow,fe.setValue(U,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&D.environment!==null&&(Te.envMapIntensity.value=D.environmentIntensity),Te.dfgLUT!==void 0&&(Te.dfgLUT.value=hy()),cn){if(fe.setValue(U,"toneMappingExposure",P.toneMappingExposure),vt.needsLights&&np(Te,Wn),pt&&H.fog===!0&&At.refreshFogUniforms(Te,pt),At.refreshMaterialUniforms(Te,H,tt,$,M.state.transmissionRenderTarget[b.id]),vt.needsLights&&vt.lightProbeGrid){const _e=vt.lightProbeGrid;Te.probesSH.value=_e.texture,Te.probesMin.value.copy(_e.boundingBox.min),Te.probesMax.value.copy(_e.boundingBox.max),Te.probesResolution.value.copy(_e.resolution)}oa.upload(U,nh(vt),Te,Z)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(oa.upload(U,nh(vt),Te,Z),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&fe.setValue(U,"center",G.center),fe.setValue(U,"modelViewMatrix",G.modelViewMatrix),fe.setValue(U,"normalMatrix",G.normalMatrix),fe.setValue(U,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const _e=H.uniformsGroups;for(let hn=0,Xn=_e.length;hn<Xn;hn++){const ah=_e[hn];nt.update(ah,ci),nt.bind(ah,ci)}}return ci}function np(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.sunLights.needsUpdate=D,b.sunLightShadows.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function sp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(b,D,X){const H=W.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),W.get(b.texture).__webglTexture=D,W.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,D){const X=W.get(b);X.__webglFramebuffer=D,X.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,X=0){it=b,z=D,Y=X;let H=null,G=!1,pt=!1;if(b){const ft=W.get(b);if(ft.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(U.FRAMEBUFFER,ft.__webglFramebuffer),et.copy(b.viewport),Ct.copy(b.scissor),Mt=b.scissorTest,x.viewport(et),x.scissor(Ct),x.setScissorTest(Mt),q=-1;return}else if(ft.__webglFramebuffer===void 0)Z.setupRenderTarget(b);else if(ft.__hasExternalTextures)Z.rebindTextures(b,W.get(b.texture).__webglTexture,W.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Wt=b.depthTexture;if(ft.__boundDepthTexture!==Wt){if(Wt!==null&&W.has(Wt)&&(b.width!==Wt.image.width||b.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(b)}}const St=b.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(pt=!0);const Tt=W.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Tt[D])?H=Tt[D][X]:H=Tt[D],G=!0):b.samples>0&&Z.useMultisampledRTT(b)===!1?H=W.get(b).__webglMultisampledFramebuffer:Array.isArray(Tt)?H=Tt[X]:H=Tt,et.copy(b.viewport),Ct.copy(b.scissor),Mt=b.scissorTest}else et.copy(gt).multiplyScalar(tt).floor(),Ct.copy(Vt).multiplyScalar(tt).floor(),Mt=Me;if(X!==0&&(H=B),x.bindFramebuffer(U.FRAMEBUFFER,H)&&x.drawBuffers(b,H),x.viewport(et),x.scissor(Ct),x.setScissorTest(Mt),G){const ft=W.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,ft.__webglTexture,X)}else if(pt){const ft=D;for(let St=0;St<b.textures.length;St++){const Tt=W.get(b.textures[St]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+St,Tt.__webglTexture,X,ft)}}else if(b!==null&&X!==0){const ft=W.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ft.__webglTexture,X)}q=-1};function rh(b){const D=W.get(b);return(D.__readFormat!==b.format||D.__readType!==b.type)&&(D.__readFormat=b.format,D.__readType=b.type,D.__formatReadable=C.textureFormatReadable(b.format),D.__typeReadable=C.textureTypeReadable(b.type)),D}this.readRenderTargetPixels=function(b,D,X,H,G,pt,yt,ft=0){if(!(b&&b.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&yt!==void 0&&(St=St[yt]),St){x.bindFramebuffer(U.FRAMEBUFFER,St);try{const Tt=b.textures[ft],Wt=Tt.format,jt=Tt.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ft);const wt=rh(Tt);if(wt.__formatReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-H&&X>=0&&X<=b.height-G&&U.readPixels(D,X,H,G,ht.convert(Wt),ht.convert(jt),pt)}finally{const Tt=it!==null?W.get(it).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(b,D,X,H,G,pt,yt,ft=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&yt!==void 0&&(St=St[yt]),St)if(D>=0&&D<=b.width-H&&X>=0&&X<=b.height-G){x.bindFramebuffer(U.FRAMEBUFFER,St);const Tt=b.textures[ft],Wt=Tt.format,jt=Tt.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ft);const wt=rh(Tt);if(wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ce),U.bufferData(U.PIXEL_PACK_BUFFER,pt.byteLength,U.STREAM_READ),U.readPixels(D,X,H,G,ht.convert(Wt),ht.convert(jt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Le=it!==null?W.get(it).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Le);const ye=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await pm(U,ye,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ce),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,pt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ce),U.deleteSync(ye),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,D=null,X=0){const H=Math.pow(2,-X),G=Math.floor(b.image.width*H),pt=Math.floor(b.image.height*H),yt=D!==null?D.x:0,ft=D!==null?D.y:0;Z.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,yt,ft,G,pt),x.unbindTexture()},this.copyTextureToTexture=function(b,D,X=null,H=null,G=0,pt=0){let yt,ft,St,Tt,Wt,jt,wt,ce,Le;const ye=b.isCompressedTexture?b.mipmaps[pt]:b.image;if(X!==null)yt=X.max.x-X.min.x,ft=X.max.y-X.min.y,St=X.isBox3?X.max.z-X.min.z:1,Tt=X.min.x,Wt=X.min.y,jt=X.isBox3?X.min.z:0;else{const Te=Math.pow(2,-G);yt=Math.floor(ye.width*Te),ft=Math.floor(ye.height*Te),b.isDataArrayTexture?St=ye.depth:b.isData3DTexture?St=Math.floor(ye.depth*Te):St=1,Tt=0,Wt=0,jt=0}H!==null?(wt=H.x,ce=H.y,Le=H.z):(wt=0,ce=0,Le=0);const me=ht.convert(D.format),Ye=ht.convert(D.type);let vt;D.isData3DTexture?(Z.setTexture3D(D,0),vt=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Z.setTexture2DArray(D,0),vt=U.TEXTURE_2D_ARRAY):(Z.setTexture2D(D,0),vt=U.TEXTURE_2D),x.activeTexture(U.TEXTURE0),x.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),x.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),x.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const Ke=x.getParameter(U.UNPACK_ROW_LENGTH),ie=x.getParameter(U.UNPACK_IMAGE_HEIGHT),ci=x.getParameter(U.UNPACK_SKIP_PIXELS),Ai=x.getParameter(U.UNPACK_SKIP_ROWS),cn=x.getParameter(U.UNPACK_SKIP_IMAGES);x.pixelStorei(U.UNPACK_ROW_LENGTH,ye.width),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ye.height),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Tt),x.pixelStorei(U.UNPACK_SKIP_ROWS,Wt),x.pixelStorei(U.UNPACK_SKIP_IMAGES,jt);const Wn=b.isDataArrayTexture||b.isData3DTexture,fe=D.isDataArrayTexture||D.isData3DTexture;if(b.isDepthTexture){const Te=W.get(b),ln=W.get(D),_e=W.get(Te.__renderTarget),hn=W.get(ln.__renderTarget);x.bindFramebuffer(U.READ_FRAMEBUFFER,_e.__webglFramebuffer),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,hn.__webglFramebuffer);for(let Xn=0;Xn<St;Xn++)Wn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(b).__webglTexture,G,jt+Xn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(D).__webglTexture,pt,Le+Xn)),U.blitFramebuffer(Tt,Wt,yt,ft,wt,ce,yt,ft,U.DEPTH_BUFFER_BIT,U.NEAREST);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||W.has(b)){const Te=W.get(b),ln=W.get(D);x.bindFramebuffer(U.READ_FRAMEBUFFER,I),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,V);for(let _e=0;_e<St;_e++)Wn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.__webglTexture,G,jt+_e):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Te.__webglTexture,G),fe?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ln.__webglTexture,pt,Le+_e):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ln.__webglTexture,pt),G!==0?U.blitFramebuffer(Tt,Wt,yt,ft,wt,ce,yt,ft,U.COLOR_BUFFER_BIT,U.NEAREST):fe?U.copyTexSubImage3D(vt,pt,wt,ce,Le+_e,Tt,Wt,yt,ft):U.copyTexSubImage2D(vt,pt,wt,ce,Tt,Wt,yt,ft);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else fe?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(vt,pt,wt,ce,Le,yt,ft,St,me,Ye,ye.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(vt,pt,wt,ce,Le,yt,ft,St,me,ye.data):U.texSubImage3D(vt,pt,wt,ce,Le,yt,ft,St,me,Ye,ye):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,pt,wt,ce,yt,ft,me,Ye,ye.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,pt,wt,ce,ye.width,ye.height,me,ye.data):U.texSubImage2D(U.TEXTURE_2D,pt,wt,ce,yt,ft,me,Ye,ye);x.pixelStorei(U.UNPACK_ROW_LENGTH,Ke),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ie),x.pixelStorei(U.UNPACK_SKIP_PIXELS,ci),x.pixelStorei(U.UNPACK_SKIP_ROWS,Ai),x.pixelStorei(U.UNPACK_SKIP_IMAGES,cn),pt===0&&D.generateMipmaps&&U.generateMipmap(vt),x.unbindTexture()},this.initRenderTarget=function(b){W.get(b).__webglFramebuffer===void 0&&Z.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Z.setTextureCube(b,0):b.isData3DTexture?Z.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Z.setTexture2DArray(b,0):Z.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){z=0,Y=0,it=null,x.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}const Uo=[16767588,16742044,8252159,12163839],Su=new R(0,0,1);class Kd{constructor(t,e){this.scene=t,this.coarse=e}sphere=new Fl(1,20,12);ring=new Rs(1,.045,6,32);shard=new bn(1);flame=new Ul(.2,1.4,5);bolt=new pe().setFromPoints([new R(0,0,0),new R(.15,.44,.2),new R(-.22,.61,.25),new R(.22,1.03,-.12),new R(.07,1.52,.13)]);electric=new Dl({color:12317183,transparent:!0,opacity:.85,depthWrite:!1,blending:ti});materials=Uo.map(t=>new Ft({color:t,transparent:!0,opacity:.72,depthWrite:!1,blending:ti}));trailMaterial=new Ft({color:16777215,transparent:!0,opacity:.72,depthWrite:!1,blending:ti});auraMaterials=[16768097,16755765].map(t=>new Ft({color:t,transparent:!0,opacity:.86,depthWrite:!1}));core=new Ft({color:16774094});badgeMaterial;orbs=new Map;auras=new Map;bursts=[];reducedMotion=matchMedia("(prefers-reduced-motion: reduce)");makeOrb(t){const e=new de,i=new R(...t.direction),s=new _t(this.sphere,this.core);s.scale.setScalar(Mi*.64),e.add(s);const r=new _t(this.sphere,this.materials[0]);r.scale.setScalar(Mi*.92),e.add(r);for(let u=0;u<3;u++){const d=new _t(this.ring,this.materials[u+1]);d.rotation.set(u*Math.PI/3,-u*Math.PI/4,0),d.scale.setScalar(Mi*(1+u*.09)),e.add(d)}const a=this.coarse?10:18,o=new yn(this.shard,this.trailMaterial,a),c=new ge;c.scale.set(.44,.44,1.1);for(let u=0;u<a;u++){const d=u*1.2;c.position.set(Math.cos(d)*(1.5+u*.12),Math.sin(d)*(1.5+u*.12),-2-u*1.35),c.updateMatrix(),o.setMatrixAt(u,c.matrix),o.setColorAt(u,this.materials[u%Uo.length].color)}o.computeBoundingSphere(),o.count=0,e.add(o),e.quaternion.setFromUnitVectors(Su,i),e.position.set(...t.position),this.scene.add(e);const l={group:e,direction:i,remaining:t.remaining,predictionSeconds:.08,trail:o,trailCount:a};return this.orbs.set(t.id,l),l}syncOrbs(t){const e=new Set(t.map(i=>i.id));for(const[i,s]of this.orbs)e.has(i)||this.removeOrb(i,s);for(const i of t)this.syncLaunch(i)}syncLaunch(t){const e=this.orbs.get(t.id)??this.makeOrb(t);e.group.position.set(...t.position),e.remaining=t.remaining,e.predictionSeconds=.08}launch(t,e,i=!0){i&&!this.orbs.has(t.id)&&this.makeOrb(t),this.burst("launch",e,3,.32,t.direction)}impact(t,e){const i=this.orbs.get(t);i&&this.removeOrb(t,i),this.burst("impact",new R(...e),sc,.82)}removeOrb(t,e){e.group.removeFromParent(),e.trail.dispose(),this.orbs.delete(t)}unlock(t,e,i){this.burst("unlock",new R(t,e+.12,i),5,1.5)}aura(t,e,i=!1){let s=this.auras.get(t);if(!s){s=new de;const r=new _t(this.ring,this.auraMaterials[0]);if(r.rotation.x=-Math.PI/2,r.position.y=.07,r.scale.setScalar(i?1.8:1.2),s.add(r),!i){for(let o=0;o<(this.coarse?6:10);o++){const c=new _t(this.flame,this.auraMaterials[o%4===0?1:0]),l=o*Math.PI*(3-Math.sqrt(5));c.position.set(Math.cos(l)*(.55+o%3*.22),.7+o%4*.39,Math.sin(l)*(.55+o%3*.22)),c.rotation.set(Math.sin(l)*.22,l,Math.cos(l)*.22),s.add(c)}const a=new dr(this.getBadgeMaterial());a.position.y=3.62,a.scale.set(2.8,.64,1),s.add(a)}this.auras.set(t,s),this.scene.add(s)}s.position.copy(e)}retainAuras(t){for(const[e,i]of this.auras)t.has(e)||(i.removeFromParent(),this.auras.delete(e))}getBadgeMaterial(){if(this.badgeMaterial)return this.badgeMaterial;const t=document.createElement("canvas");t.width=280,t.height=64;const e=t.getContext("2d");e.fillStyle="#261d2a",e.strokeStyle="#ffcf64",e.lineWidth=4,e.fillRect(8,6,264,52),e.strokeRect(8,6,264,52),e.fillStyle="#ffe7a2",e.textAlign="center",e.textBaseline="middle",e.font="bold 34px Arial, sans-serif",e.fillText("武器全收集",140,34);const i=new Ga(t);return i.colorSpace=ei,this.badgeMaterial=new ur({map:i,transparent:!0,depthTest:!0,depthWrite:!1}),this.badgeMaterial}burst(t,e,i,s,r){const a=new de,o=[],c=[],l=[];a.position.copy(e),r&&a.quaternion.setFromUnitVectors(Su,new R(...r));for(let h=0;h<3;h++){const f=new _t(this.ring,this.materials[h]);t!=="launch"?f.rotation.x=-Math.PI/2+h*.47:f.position.z=h*.6,o.push(f),a.add(f)}const u=this.reducedMotion.matches?0:t==="launch"?4:this.coarse?14:26;for(let h=0;h<u;h++){const f=new _t(this.shard,this.materials[h%Uo.length]);c.push(f),a.add(f)}if(t==="unlock"&&!this.reducedMotion.matches)for(let h=0;h<(this.coarse?4:8);h++){const f=new Da(this.bolt,this.electric);l.push(f),a.add(f)}const d=t==="impact"?new _t(this.sphere,this.materials[0]):void 0;d&&a.add(d),this.scene.add(a),this.bursts.push({group:a,age:0,duration:s,radius:i,kind:t,rings:o,shards:c,bolts:l,flash:d}),this.animateBurst(this.bursts[this.bursts.length-1],0)}animateBurst(t,e){const i=e<.13&&t.kind==="impact"?.18*(1-e/.13):1-(1-Math.max(0,(e-.13)/.87))**2;if(t.flash){const s=e<.13?Mi*(1-e/.13):t.radius*.45*Math.sin(Math.PI*Math.min(1,(e-.13)/.38));t.flash.scale.setScalar(Math.max(.01,s)),t.flash.visible=e<.51}t.rings.forEach((s,r)=>{const a=.15+t.radius*i*(1-r*.16);s.scale.set(a,a,Math.max(.05,(1-e)*3)),s.visible=e<1-r*.13}),t.shards.forEach((s,r)=>{const a=r*Math.PI*(3-Math.sqrt(5)),o=t.radius*i*(.25+r%6*.13),c=t.kind==="unlock"?e*(1.6+r%5*.73):Math.sin(e*Math.PI)*(1+r%5*.68);s.position.set(Math.cos(a)*o,c,Math.sin(a)*o),s.rotation.set(e*4,r,e*8),s.scale.setScalar(Math.max(.01,(1-e)*(t.kind==="impact"?.55:.24)))}),t.bolts.forEach((s,r)=>{const a=r*2.4+e*11,o=.48+Math.sin(e*Math.PI)*1.25;s.position.set(Math.cos(a)*o,e*(1.4+r%3*.55),Math.sin(a)*o),s.rotation.set(e*.4,a,e*.65),s.scale.setScalar(.35+Math.sin(e*Math.PI)*1.15)})}update(t,e,i){for(const s of this.orbs.values()){if(e){const a=Math.min(t,s.predictionSeconds),o=Math.min(s.remaining,a*od);s.group.position.addScaledVector(s.direction,o),s.remaining-=o,s.predictionSeconds-=a}const r=xe.prism.range-s.remaining;s.trail.count=Math.max(0,Math.min(s.trailCount,Math.ceil((r-2)/1.35))),this.reducedMotion.matches||s.group.rotateZ(t*11)}for(const s of this.auras.values())this.reducedMotion.matches||s.children.forEach((r,a)=>{a>0&&r instanceof _t&&(r.scale.y=1+Math.sin(i*8+a*1.9)*.42)});for(let s=this.bursts.length-1;s>=0;s--){const r=this.bursts[s];r.age+=t,r.age>=r.duration?(r.group.removeFromParent(),this.bursts.splice(s,1)):this.animateBurst(r,r.age/r.duration)}}dispose(){this.syncOrbs([]),this.retainAuras(new Set);for(const t of this.bursts)t.group.removeFromParent();this.bursts.length=0;for(const t of[this.sphere,this.ring,this.shard,this.flame,this.bolt])t.dispose();for(const t of[...this.materials,...this.auraMaterials,this.core,this.electric,this.trailMaterial])t.dispose();this.badgeMaterial?.map?.dispose(),this.badgeMaterial?.dispose()}}function uy(n,t,e){if(n){if(n.state==="DESPAWN")return null;const i=n.ownerId===e?"#56ffe1":n.ownerId?"#94bfff":"#ff974f";return{x:n.x,y:n.y,z:n.z,color:i,pending:!1,label:"虛空騎士"}}return t?{x:t.x,y:t.y,z:t.z,color:"#ffcf76",pending:!0,label:"騎士出生點"}:null}function jd(n,t,e,i,s){const r=Math.hypot(n,t),a=s/Math.max(70,r);return{x:(n*e-t*i)*a,y:(n*i+t*e)*a,offRadar:r>70}}const dy={ar:"AR",smg:"SMG",flame:"FL",ice:"ICE",shotgun:"SG",rocket:"RPG",sniper:"SR"};function Jd(n,t,e,i,s,r,a,o){const c=i.y-1.65,l=Math.cos(i.yaw),u=Math.sin(i.yaw);n.save(),n.font="800 9px Arial, sans-serif",n.textAlign="center",n.textBaseline="middle";const d=[];for(const h of t){if(!h.available||e.has(h.id))continue;const f=jd(h.x-i.x,h.z-i.z,l,u,a),g=Math.atan2(f.y,f.x),v=Math.hypot(f.x,f.y),m=[0,.42,-.42,.84,-.84,1.26,-1.26];let p=s+f.x,S=r+f.y;for(const T of m){const _=s+Math.cos(g+T)*v,A=r+Math.sin(g+T)*v;if(!d.some(P=>Math.abs(P.x-_)<25&&Math.abs(P.y-A)<11)){p=_,S=A;break}}d.push({x:p,y:S});const E="#"+xe[h.id].color.toString(16).padStart(6,"0"),y=h.y-c,w=dy[h.id]+(y>2.5?"↑":y<-2.5?"↓":""),M=n.measureText(w).width+7;n.fillStyle="#10162c",n.strokeStyle=E,n.lineWidth=1,n.fillRect(p-M/2,S-5.5,M,11),n.strokeRect(p-M/2,S-5.5,M,11),n.fillStyle=E,n.fillText(w,p,S+.5)}n.fillStyle="#ffe68a",n.fillText(`掃描 ${ws.filter(h=>e.has(h)).length} / ${ws.length}`,s,o-8),n.restore()}function fy(n,t,e,i){const{width:s,height:r}=n.getBoundingClientRect();if(!s||!r)return;const a=Math.min(window.devicePixelRatio||1,1.5),o=Math.round(s*a),c=Math.round(r*a);(n.width!==o||n.height!==c)&&(n.width=o,n.height=c);const l=n.getContext("2d"),u=s/2,d=r/2,h=Math.min(s,r)*.34;l.setTransform(a,0,0,a,0,0),l.clearRect(0,0,s,r),l.strokeStyle="#fff4",l.lineWidth=1,l.beginPath(),l.arc(u,d,h,0,Math.PI*2),l.stroke(),l.fillStyle="#dfffff",l.font="800 9px Arial, sans-serif",l.fillText("光譜掃描儀",8,14),Jd(l,t,e,i,u,d,h,r),l.beginPath(),l.moveTo(u,d-6),l.lineTo(u+4,d+5),l.lineTo(u,d+3),l.lineTo(u-4,d+5),l.closePath(),l.fill()}function Qd(n,t){let e=0,i=0;const s=()=>{const a=n.clientWidth,o=n.clientHeight;!a||!o||a===e&&o===i||(e=a,i=o,t(e,i))},r=typeof ResizeObserver>"u"?null:new ResizeObserver(s);return r?.observe(n),window.addEventListener("resize",s),window.visualViewport?.addEventListener("resize",s),s(),()=>{r?.disconnect(),window.removeEventListener("resize",s),window.visualViewport?.removeEventListener("resize",s)}}function py(n,t,e){let i=7,s;for(const o of n){if(!o.available)continue;const c=o.position.x-t.x,l=o.position.y-t.y,u=o.position.z-t.z,d=Math.hypot(c,l,u);d>i||d>.001&&oi(t,{x:c/d,y:l/d,z:u/d},d,e)<d-.05||(i=d,s=o)}if(!s)return"";const r=nd(s.id,s.state,s.owned),a=r==="unlock"?"取得 Lv.1":r==="upgrade"?`升至 Lv.${s.state.level+1}・彈匣補滿`:r==="refill"?"彈匣補滿":"快速換彈 8 秒・換彈時間 -25%";return`${xe[s.id].label}｜${a}`}class tf{el=document.createElement("div");signature="";constructor(t){this.el.className="co-pickup-preview",this.el.hidden=!0,t.append(this.el)}update(t,e,i,s){const r=s?py(t,e,i):"";r!==this.signature&&(this.signature=r,this.el.textContent=r,this.el.hidden=!r)}dispose(){this.el.remove()}}function Qs(n,t,e=new R){return t==="prism"?n.position.set(.4,-.36,-2.04):n.position.set(.34,-.25,t==="sniper"?-1.95:-1.3),n.updateWorldMatrix(!0,!1),n.getWorldPosition(e)}class ef{constructor(t,e){this.coarse=e,this.el.className="co-pickup-feedback",this.el.hidden=!0,this.el.setAttribute("role","status"),this.el.setAttribute("aria-live","polite"),t.append(this.el)}el=document.createElement("div");queue=[];remaining=0;seen=new Set;push(t,e){if(e){if(this.seen.has(e))return;this.seen.add(e),this.seen.size>256&&this.seen.delete(this.seen.values().next().value)}this.queue.length<3&&this.queue.push(t),this.remaining||this.next()}next(){const t=this.queue.shift();if(this.el.hidden=!t,!t)return;const e=xe[t.weapon];this.el.dataset.level=String(t.level),this.el.style.setProperty("--weapon",`#${e.color.toString(16).padStart(6,"0")}`);const i=t.kind==="unlock"?"取得新武器":t.kind==="upgrade"?`升至 Lv.${t.level}`:t.kind==="boost"?"滿級・快速換彈":"滿級・彈藥補滿",s=t.kind==="unlock"?this.coarse?"點擊武器庫選擇裝備":"按 Q 開啟武器庫裝備":t.kind==="upgrade"?`${t.previousCapacity} → ${t.capacity} 發彈匣 · 已補滿`:t.kind==="boost"?"換彈時間 -25% · 持續 8 秒・重拾刷新":`${t.capacity} 發彈匣 · +${t.ammoAdded} 發`;this.el.replaceChildren();const r=document.createElement("span"),a=document.createElement("div"),o=document.createElement("strong"),c=document.createElement("b"),l=document.createElement("small");r.textContent=e.icon,o.textContent=i,c.textContent=`${e.label} · Lv.${t.level}`,l.textContent=s,a.append(o,c,l),this.el.append(r,a),this.remaining=2}update(t){this.remaining&&(this.remaining=Math.max(0,this.remaining-t),this.remaining||this.next())}dispose(){this.el.remove(),this.queue=[],this.seen.clear()}}const wu=[12044504,5432544,16765543];function nf(){const n=new de,t=new Ft({color:2630467}),e=new Ft({color:5785448}),i=new _t(new rn(.21,.28,1.05,6),t);i.rotation.x=-Math.PI/2,i.position.z=-.28,n.add(i);const s=new _t(new be(.51,.46,.5),e);s.position.z=.22,n.add(s);const r=[16765531,16741261,7855359];for(let o=0;o<r.length;o++){const c=new _t(new Rs(.22+o*.05,.032,6,12),new Ft({color:r[o]}));c.position.z=-.72-o*.15,n.add(c)}const a=new _t(new bn(.16),new Ft({color:16773043}));return a.position.set(0,.25,.07),a.scale.set(.8,.8,1.8),n.add(a),n}class sf{signature="";parts=[];material=new Ft({color:wu[0]});accent=new Ft;prism=nf();constructor(t){const e=[[[.012,.045,.62],[.438,-.28,-.8]],[[.15,.22,.16],[.34,-.45,-.67]],[[.012,.035,.62],[.242,-.28,-.8]],[[.14,.025,.32],[.34,-.185,-.84]]];for(const[i,s]of e){const r=new _t(new be(i[0],i[1],i[2]),this.parts.length===3?this.accent:this.material);r.position.set(s[0],s[1],s[2]),r.visible=!1,t.add(r),this.parts.push(r)}this.prism.position.set(.4,-.36,-.92),this.prism.visible=!1,t.add(this.prism)}update(t,e){const i=`${t}:${e}`;i!==this.signature&&(this.signature=i,this.material.color.setHex(wu[e-1]),this.accent.color.setHex(xe[t].color),this.parts.forEach((s,r)=>s.visible=e>=2&&(r<2||e===3)),this.prism.visible=t==="prism")}}function rf(n,t,e,i,s,r=1){const a=za(n,r),o=Math.max(hl,a+2),c={x:t[0],y:t[1],z:t[2]},l=oi(c,{x:e[0],y:e[1],z:e[2]},o,s);let u=l,d=l<o?"blocked":"neutral";for(const f of i){if(!f.alive)continue;const g=rd(t,e,f,u);g&&g.distance<u&&(u=g.distance,d=u<=a?"in-range":"out-of-range")}if(n!=="flame")return d;let h=1/0;for(const f of i)if(f.alive)for(const g of Sa(f,t)){const v=g[0]-t[0],m=g[1]-t[1],p=g[2]-t[2],S=Math.hypot(v,m,p);if(S<.001||S>o)continue;const E={x:v/S,y:m/S,z:p/S};E.x*e[0]+E.y*e[1]+E.z*e[2]<Math.cos(gl)||oi(c,E,S,s)>=S-.001&&(h=Math.min(h,S))}return h<1/0?h<=a?"in-range":"out-of-range":d==="blocked"?"blocked":"neutral"}function af(n){return{origin:[n.x,n.y,n.z],direction:ic(n.yaw,n.pitch)}}class of{constructor(t){this.root=t,this.label.className="co-aim-feedback",this.label.hidden=!0,t.append(this.label),t.addEventListener("combat:reset",this.reset),t.addEventListener("armory:open",this.reset)}label=document.createElement("span");state="";reset=()=>this.update("neutral",!1);update(t,e){const i=e&&(t==="in-range"||t==="out-of-range")?t:"neutral";i!==this.state&&(this.state=i,this.root.dataset.aimState=i,this.label.textContent=i==="in-range"?"射程內":i==="out-of-range"?"超出射程":"",this.label.hidden=i==="neutral")}dispose(){this.root.removeEventListener("combat:reset",this.reset),this.root.removeEventListener("armory:open",this.reset),delete this.root.dataset.aimState,this.label.remove()}}const Ol=.15;class cf{antialias=!0;pixelRatio;impactLimit;constructor(){const t=matchMedia("(pointer:coarse)").matches,e=navigator.deviceMemory??4,i=(navigator.hardwareConcurrency||4)<=4||e<=3;this.pixelRatio=Math.min(devicePixelRatio,t?i?1:1.6:2),this.impactLimit=i?8:16}}class lf{constructor(t,e,i){this.root=t,this.gun=e,this.coarse=i,this.shell=document.createElement("div"),this.shell.className="co-scope",this.shell.hidden=!0,this.shell.setAttribute("aria-hidden","true"),this.shell.innerHTML=`<div class="co-scope-shade"></div><div class="co-scope-frame">
      <svg viewBox="0 0 100 100" aria-hidden="true"><path fill="black" fill-rule="evenodd" d="M25 0H75L100 50 75 100H25L0 50ZM80 50a30 30 0 1 0-60 0 30 30 0 1 0 60 0"/></svg>
      <div class="co-scope-reticle"><i></i><b></b><span></span></div><div class="co-scope-stock"></div></div>`,t.append(this.shell),this.overlayCamera.position.z=1,this.overlay.add(this.plane);const s=new _t(new be(.1,.1,1.6),new Ft({color:1053726}));s.position.set(.34,-.25,-1.15);const r=new _t(new rn(.09,.09,.34,6),new Ft({color:527120}));r.rotation.x=Math.PI/2,r.position.set(.34,-.12,-.7),this.gunParts.add(s,r),e.add(this.gunParts),this.gunParts.visible=!1,t.addEventListener("combat:reset",this.reset),t.addEventListener("armory:open",this.reset)}shell;lens=new ii(75,1,Ol,420);target=new fi(256,256);overlay=new Cl;overlayCamera=new Xa(-1,1,1,-1,0,2);material=new Xe({uniforms:{map:{value:this.target.texture}},depthTest:!1,depthWrite:!1,transparent:!0,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`uniform sampler2D map;varying vec2 vUv;
      void main(){
        if(distance(vUv,vec2(.5))>.5)discard;
        gl_FragColor=texture2D(map,vUv);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`});plane=new _t(new an(2,2),this.material);scoped=!1;gunParts=new de;reset=()=>{this.scoped=!1,this.shell.hidden=!0,this.root.classList.remove("co-scoped")};update(t,e,i,s,r){this.scoped=t==="sniper"&&!!e.aim&&i&&!s&&!r,this.shell.hidden=!this.scoped,this.root.classList.toggle("co-scoped",this.scoped),this.root.querySelector("[data-sprint]")?.setAttribute("aria-pressed",String(!!e.sprint&&i));const a=this.root.querySelector("[data-aim]");return a&&(a.disabled=t!=="sniper",a.setAttribute("aria-pressed",String(this.scoped))),this.gunParts.visible=t==="sniper",this.scoped}render(t,e,i){if(this.gun.visible=!this.scoped,t.render(e,i),this.gun.visible=!0,!this.scoped)return;this.target.samples=Math.min(4,t.capabilities.maxSamples);const s=this.root.clientWidth,r=this.root.clientHeight,a=Math.min(r*.58,s*.44),o=a*.6;this.root.style.setProperty("--scope-size",`${a}px`),this.root.style.setProperty("--lens-size",`${o}px`);const c=Math.max(64,Math.min(this.coarse?512:768,Math.ceil(o*t.getPixelRatio())));this.target.width!==c&&this.target.setSize(c,c),this.lens.position.copy(i.position),this.lens.quaternion.copy(i.quaternion),this.lens.fov=i.fov,this.lens.zoom=4*r/o,this.lens.near=i.near,this.lens.far=i.far,this.lens.updateProjectionMatrix(),this.gun.visible=!1;const l=t.getRenderTarget(),u=t.autoClear;t.setRenderTarget(this.target),t.render(e,this.lens),t.setRenderTarget(l),this.gun.visible=!0,this.plane.scale.set(o/s,o/r,1),t.autoClear=!1,t.clearDepth(),t.render(this.overlay,this.overlayCamera),t.autoClear=u}dispose(){this.root.removeEventListener("combat:reset",this.reset),this.root.removeEventListener("armory:open",this.reset),this.reset(),this.shell.remove(),this.target.dispose(),this.plane.geometry.dispose(),this.material.dispose(),this.gunParts.traverse(t=>{t instanceof _t&&(t.geometry.dispose(),t.material.dispose())}),this.gun.remove(this.gunParts)}}function on(...n){const t=new Set,e=new Set,i=new Set,s=new Set;for(const r of n)r.traverse(a=>{if(a instanceof yn&&s.add(a),(a instanceof _t||a instanceof ar||a instanceof Da)&&t.add(a.geometry),a instanceof _t||a instanceof ar||a instanceof Da||a instanceof dr)for(const o of Array.isArray(a.material)?a.material:[a.material])e.add(o)});for(const r of s)r.dispose();for(const r of e)for(const a of Object.values(r))a instanceof We&&i.add(a);for(const r of i)r.dispose();for(const r of e)r.dispose();for(const r of t)r.dispose()}class hf{constructor(t,e=!1){this.scene=t,this.coarse=e;const i=e?320:900;this.positions=new Float32Array(i*3),this.colors=new Float32Array(i*3),this.sizes=new Float32Array(i),this.alphas=new Float32Array(i),this.styles=new Float32Array(i),this.particles=Array.from({length:i},()=>({position:new R,velocity:new R,life:0,duration:1,size:0,color:new Lt,style:0}));for(const[s,r,a]of[["position",this.positions,3],["color",this.colors,3],["size",this.sizes,1],["alpha",this.alphas,1],["style",this.styles,1]])this.geometry.setAttribute(s,new Fe(r,a).setUsage(Oi));this.material=new Xe({transparent:!0,depthWrite:!1,depthTest:!0,blending:Fn,uniforms:{time:{value:0}},vertexShader:`attribute float size;attribute float alpha;attribute float style;varying vec3 vColor;varying float vAlpha;varying float vStyle;
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
      }`,vertexColors:!0}),this.points=new ar(this.geometry,this.material),this.points.frustumCulled=!1,this.group.add(this.points),this.beams=Array.from({length:e?32:64},()=>{const s=new _t(this.cylinder,new Ft({transparent:!0,depthWrite:!1,blending:ti})),r=new _t(this.cylinder,new Ft({color:16777215,transparent:!0,depthWrite:!1,blending:ti}));return s.visible=r.visible=!1,this.group.add(s,r),{mesh:s,core:r,life:0,duration:1}}),this.rings=Array.from({length:8},()=>{const s=new _t(this.ringGeometry,new Ft({transparent:!0,depthWrite:!1,side:Pe,blending:ti}));return s.visible=!1,this.group.add(s),{mesh:s,life:0,duration:1,radius:1}}),this.flames=Array.from({length:e?24:48},()=>{const s=new Xe({transparent:!0,depthWrite:!1,depthTest:!0,side:Pe,blending:Fn,uniforms:{time:{value:0},opacity:{value:1}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float time;uniform float opacity;varying vec2 vUv;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}
      void main(){float n=noise(vec2(vUv.x*6.+time,vUv.y*9.-time*9.));float fine=noise(vec2(vUv.x*13.,vUv.y*17.-time*13.));float tongue=smoothstep(.25,.8,n*.75+fine*.35);float tip=1.-smoothstep(.65,1.,vUv.y);float ignition=smoothstep(0.,.06,vUv.y);vec3 color=mix(vec3(1.,.86,.34),vec3(1.,.16,.015),vUv.y);gl_FragColor=vec4(color,tongue*tip*ignition*opacity*.32);
      #include <colorspace_fragment>
      }`}),r=new _t(this.flameGeometry,s);return r.visible=!1,this.group.add(r),{mesh:r,life:0}}),this.localFlames=this.flames.splice(0,e?5:9),t.add(this.group)}localFlames=[];localFlameTimer=0;group=new de;particles;beams;rings;flames;flameCursor=0;flameGeometry=new rn(1,.25,1,8,1,!0);cursor=0;beamCursor=0;ringCursor=0;geometry=new pe;material;points;cylinder=new rn(1,1,1,6,1,!0);ringGeometry=new Ts(.88,1,48);positions;colors;sizes;alphas;styles;particle(t,e,i,s,r=0,a){const o=this.particles[this.cursor++%this.particles.length];o.position.copy(t),o.color.setHex(e),o.size=i,o.life=o.duration=s,o.style=r,o.velocity.copy(a??new R((Math.random()-.5)*2,Math.random()*2,(Math.random()-.5)*2))}beam(t,e,i,s,r=.022,a){const o=this.beams[this.beamCursor++%this.beams.length],c=e.clone().sub(t),l=c.length();if(l<.01)return;o.mesh.position.copy(t).addScaledVector(c,.5),o.core.position.copy(o.mesh.position);const u=new Wi().setFromUnitVectors(new R(0,1,0),c.normalize());o.mesh.quaternion.copy(u),o.core.quaternion.copy(u),o.mesh.scale.set(r,l,r),o.core.scale.set(r*.24,l,r*.24),o.mesh.material.color.setHex(i),o.life=o.duration=s,o.mesh.visible=o.core.visible=!0,o.localWeapon=a,o.end=a?e.clone():void 0}play(t,e,i=!0,s=!1,r=!0,a=!0){const o=xe[t.weapon],c=new R(...t.origin),l=t.weapon;if(i&&this.muzzle(e,l),r&&l==="flame"&&!s){const u=this.coarse?3:2;for(let d=0;d<t.rays.length;d+=u){const h=t.rays[d],f=new R(...h.end),g=f.clone().sub(e),v=g.length();if(v<.1)continue;const m=this.flames[this.flameCursor++%this.flames.length];m.mesh.position.copy(e).addScaledVector(g,.5),m.mesh.quaternion.setFromUnitVectors(new R(0,1,0),g.normalize()),m.mesh.scale.set(.05+v*.018,v,.05+v*.018),m.life=.16,m.mesh.visible=!0}for(let d=0;d<t.rays.length;d+=u){const h=t.rays[d],f=c.distanceTo(new R(...h.end));for(let g=0;g<(this.coarse?5:9);g++){const v=(g+.25)/(this.coarse?5:9),m=new R(...Mn(t.origin,h.dir,f*v));f*v<1.3&&m.lerp(e,1-f*v/1.3),this.particle(m,v<.2?16774592:v<.6?16752686:16729633,.15+v*.4,.12+Math.random()*.12,1,new R(0,.4,0)),g%3===0&&this.particle(m,16755780,.055,.18,0,new R(0,.3,0))}}}else if(r&&l!=="flame")for(const u of t.rays){const d=new R(...u.end);if(this.beam(e,d,o.color,l==="smg"?.075:l==="ice"?.16:.105,l==="ice"?.035:l==="rocket"?.06:.02,s?l:void 0),l==="smg"){const h=d.clone().sub(e),f=new R(-h.z,0,h.x).normalize();let g=e.clone().lerp(d,.2);for(let v=1;v<=3;v++){const m=e.clone().lerp(d,.2+v*.12).addScaledVector(f,(v%2?1:-1)*.045);this.beam(g,m,16765021,.06,.007),g=m}}if(l==="ice"||l==="rocket"||l==="smg"){const h=this.coarse?4:10;for(let f=1;f<=h;f++){const g=e.clone().lerp(d,f/(h+1));this.particle(g,o.color,l==="rocket"?.48:l==="ice"?.16:.045,l==="rocket"?.4:.2,l==="rocket"?3:l==="ice"?2:0,new R(0,.12,0))}}}if(a){for(const[u,d]of t.rays.entries())if(d.kind!=="range"&&(l!=="flame"||u%4===0)){const h=new R(...d.end);this.impact(h,l,d.kind==="head",new R(...d.dir).negate())}}a&&l==="rocket"&&t.rays[0]?.kind!=="range"&&this.explosion(new R(...Mn(t.rays[0].end,t.rays[0].dir,-.1)))}updateLocalMuzzle(t,e,i,s){const r=t.clone().sub(i),a=r.length(),o=a>.001&&oi(i,r.normalize(),a,s)<a-.01;for(const c of this.beams){if(!c.life||!c.localWeapon||!c.end)continue;if(c.localWeapon!==e){c.localWeapon=void 0;continue}const l=c.end.clone().sub(t),u=l.length();if(o||u<.01){c.mesh.visible=c.core.visible=!1;continue}l.normalize();const d=oi(t,l,u,s);c.mesh.visible=c.core.visible=d>.01,c.mesh.position.copy(t).addScaledVector(l,d*.5),c.core.position.copy(c.mesh.position),c.mesh.quaternion.setFromUnitVectors(new R(0,1,0),l),c.core.quaternion.copy(c.mesh.quaternion),c.mesh.scale.y=c.core.scale.y=d}}localFlame(t,e,i,s,r,a,o=[],c=1){if(this.localFlameTimer+=a,!t)return;const l=e.clone().sub(i),u=l.length();if(u>.001&&oi(i,l.normalize(),u,r)<u-.01){for(const g of this.localFlames)g.life=0,g.mesh.visible=!1;return}const d=this.localFlameTimer>=.04;d&&(this.localFlameTimer=0);const h=s.toArray(),f=i.toArray();this.localFlames.forEach((g,v)=>{const m=v?Math.tan(gl)*.8:0,p=v*Math.PI*2/(this.localFlames.length-1),S=ea(f,nc(h,Math.cos(p)*m,Math.sin(p)*m),za("flame",c),o,r),E=new R(...S.end).sub(e),y=E.length();if(y<.05||E.dot(s)<=0){g.life=0,g.mesh.visible=!1;return}E.normalize();const w=Math.min(y,oi(e,E,y,r));if(w<.05){g.life=0,g.mesh.visible=!1;return}g.mesh.position.copy(e).addScaledVector(E,w*.5),g.mesh.quaternion.setFromUnitVectors(new R(0,1,0),E),g.mesh.scale.set(.05+w*.018,w,.05+w*.018),g.life=.16,g.mesh.visible=!0;const M=g.mesh.material;if(M.uniforms.opacity.value=1,d)for(let T=1;T<=4;T++){const _=e.clone().addScaledVector(E,w*T/5);this.particle(_,T<2?16765803:16740394,.18+T*.07,.12,1,new R(0,.25,0))}})}muzzle(t,e){const i=xe[e].color;for(let s=0;s<(this.coarse?3:7);s++)this.particle(t,s===0?16777215:i,s===0?.32:.08,.04+Math.random()*.035)}impact(t,e,i,s){const r=e==="flame"?this.coarse?2:4:this.coarse?4:e==="ice"?16:10,a=i?16767593:xe[e].color;this.particle(t.clone().addScaledVector(s,.035),16777215,.26,.065);for(let o=0;o<r;o++){const c=new R((Math.random()-.5)*3,Math.random()*3,(Math.random()-.5)*3).addScaledVector(s,1);this.particle(t.clone().addScaledVector(s,.04),a,e==="ice"?.12:.055,.14+Math.random()*.2,e==="ice"?2:0,c)}e==="ice"&&this.particle(t.clone().addScaledVector(s,.05),8707583,.8,.32,3,new R)}explosion(t){const e=this.coarse?25:65;for(let s=0;s<e;s++)this.particle(t,s<10?16774613:s<e*.6?16741421:9666456,s<10?.55:.85,.18+Math.random()*.55,s<e*.6?1:3,new R((Math.random()-.5)*11,Math.random()*7,(Math.random()-.5)*11));const i=this.rings[this.ringCursor++%8];i.mesh.position.copy(t),i.mesh.rotation.x=-Math.PI/2,i.life=i.duration=.35,i.radius=5,i.mesh.material.color.setHex(16751449),i.mesh.visible=!0}status(t,e){this.particle(t,xe[e].color,e==="flame"?.22:.16,.22,e==="flame"?1:2,new R(0,.5,0))}update(t){this.material.uniforms.time.value+=t,this.particles.forEach((e,i)=>{e.life=Math.max(0,e.life-t),e.life&&(e.position.addScaledVector(e.velocity,t),(e.style===0||e.style===2)&&(e.velocity.y-=t*3)),e.position.toArray(this.positions,i*3),e.color.toArray(this.colors,i*3),this.sizes[i]=e.life?e.size*(e.style===3?1+(1-e.life/e.duration):1):0,this.alphas[i]=e.life/e.duration,this.styles[i]=e.style});for(const e of Object.values(this.geometry.attributes))e.needsUpdate=!0;for(const e of this.beams)e.life=Math.max(0,e.life-t),e.mesh.visible=e.core.visible=e.life>0,e.mesh.material.opacity=.32*e.life/e.duration,e.core.material.opacity=e.life/e.duration;for(const e of[this.flames,this.localFlames])for(const i of e){i.life=Math.max(0,i.life-t),i.mesh.visible=i.life>0;const s=i.mesh.material;s.uniforms.time.value=this.material.uniforms.time.value,s.uniforms.opacity.value=i.life/.16}for(const e of this.rings)e.life=Math.max(0,e.life-t),e.mesh.visible=e.life>0,e.mesh.scale.setScalar(Math.max(.01,e.radius*(1-e.life/e.duration))),e.mesh.material.opacity=e.life/e.duration*.65}dispose(){this.scene.remove(this.group),this.geometry.dispose(),this.material.dispose(),this.cylinder.dispose(),this.ringGeometry.dispose(),this.flameGeometry.dispose();for(const t of[this.flames,this.localFlames])for(const e of t)e.mesh.material.dispose();for(const t of this.beams)t.mesh.material.dispose(),t.core.material.dispose();for(const t of this.rings)t.mesh.material.dispose();this.group.clear()}}class uf{constructor(t){this.root=t,this.el.className="co-battle-feedback",this.feed.className="co-kill-feed",this.banner.className="co-kill-banner",this.marker.className="co-hit-marker",this.banner.hidden=this.marker.hidden=!0,this.el.append(this.feed,this.banner,this.marker),t.append(this.el),t.addEventListener("pointerdown",this.unlock),t.addEventListener("keydown",this.unlock)}el=document.createElement("div");feed=document.createElement("div");banner=document.createElement("div");marker=document.createElement("div");entries=[];numbers=[];seen=new Set;ids=[];markerLife=0;markerRank=0;bannerLife=0;bannerAttacker="";audio;disposed=!1;unlock=()=>{if(!this.audio)try{this.audio=new AudioContext}catch{return}this.audio.resume().catch(()=>{})};accept(t){return this.seen.has(t)?!1:(this.seen.add(t),this.ids.push(t),this.ids.length>1024&&this.seen.delete(this.ids.shift()),!0)}hit(t){if(!this.accept(`hit:${t.eventId}`)||!t.hits.length)return;const e=t.hits.some(i=>i.killed)?3:t.hits.some(i=>i.headshot)?2:1;(e>=this.markerRank||!this.markerLife)&&(this.markerRank=e,this.marker.className=`co-hit-marker ${e===3?"is-kill":e===2?"is-head":""}`,this.marker.hidden=!1,this.markerLife=.18),this.tone(e);for(const i of t.hits){if(i.damage<=0)continue;const s=document.createElement("span");s.className=`co-damage-number ${i.killed?"is-kill":i.headshot?"is-head":""}`,s.textContent=String(i.damage),this.el.append(s),this.numbers.push({el:s,life:.7,position:new R(...i.position)}),this.numbers.length>24&&this.numbers.shift().el.remove()}}kill(t){if(!this.accept(`kill:${t.eventId}`))return;const e=document.createElement("div");e.className="co-kill-entry";const i=document.createElement("b"),s=document.createElement("span"),r=document.createElement("b");if(i.textContent=t.attackerName,s.textContent=`${xe[t.weapon].icon}${t.headshot?" · 爆頭":""}`,s.title=xe[t.weapon].label,r.textContent=t.victimName,e.append(i,s,r),t.scoreAwarded!==void 0){const u=document.createElement("em");u.className="co-kill-reward",u.textContent=`+${t.scoreAwarded} 分`,e.append(u)}for(this.feed.prepend(e),this.entries.push({el:e,life:6});this.entries.length>5;)this.entries.shift().el.remove();const a=t.multi>=2?["","","雙殺","三連殺","四連殺","五連殺"][t.multi]??`${t.multi} 連殺`:"";if(!a&&!t.title)return;const o=this.bannerAttacker===t.attackerId&&this.bannerLife>0;this.bannerAttacker=t.attackerId,this.banner.replaceChildren();const c=document.createElement("small"),l=document.createElement("strong");c.textContent=t.attackerName,l.textContent=[a,t.title].filter(Boolean).join(" · "),this.banner.append(c,l),this.banner.hidden=!1,this.bannerLife=2,o||(this.banner.classList.remove("is-entering"),this.banner.offsetWidth,this.banner.classList.add("is-entering"))}wardenWarning(){this.playTone(360,510,.16,0),this.playTone(510,710,.22,.18)}tone(t){this.playTone(t===3?660:t===2?1040:780,t===3?980:500,.1,0)}playTone(t,e,i,s){const r=this.audio;if(!r||r.state!=="running")return;const a=r.currentTime+s,o=r.createOscillator(),c=r.createGain();o.type="sine",o.frequency.setValueAtTime(t,a),o.frequency.exponentialRampToValueAtTime(e,a+i*.75),c.gain.setValueAtTime(.045,a),c.gain.exponentialRampToValueAtTime(.001,a+i*.9),o.connect(c).connect(r.destination),o.start(a),o.stop(a+i),o.onended=()=>{o.disconnect(),c.disconnect()}}update(t,e){this.disposed||(this.markerLife=Math.max(0,this.markerLife-t),this.markerLife||(this.marker.hidden=!0,this.markerRank=0),this.bannerLife=Math.max(0,this.bannerLife-t),this.banner.hidden=this.bannerLife===0,this.banner.style.opacity=String(Math.min(1,this.bannerLife/.25)),this.entries=this.entries.filter(i=>(i.life-=t,i.life<=0?(i.el.remove(),!1):(i.el.style.opacity=String(Math.min(1,i.life/.4)),!0))),this.numbers=this.numbers.filter(i=>{if(i.life-=t,i.life<=0)return i.el.remove(),!1;const s=i.position.clone().project(e),r=s.z>=-1&&s.z<=1&&Math.abs(s.x)<1.1&&Math.abs(s.y)<1.1;return i.el.hidden=!r,i.el.style.left=`${(s.x*.5+.5)*100}%`,i.el.style.top=`calc(${(-s.y*.5+.5)*100}% - ${(1-i.life/.7)*34}px)`,i.el.style.opacity=String(Math.min(1,i.life/.2)),!0}))}dispose(){this.disposed=!0,this.root.removeEventListener("pointerdown",this.unlock),this.root.removeEventListener("keydown",this.unlock),this.audio?.close().catch(()=>{}),this.el.remove(),this.entries=[],this.numbers=[],this.seen.clear(),this.ids=[]}}const kl=Mp.filter(([n,t])=>n>Fi.minX+1&&n<Fi.maxX-1&&t>Fi.minZ+1&&t<Fi.maxZ-1&&!lr.some(e=>jo(n,t,e,2))&&dl(n,t)===0&&!ka(n,t,.75)),my=(n,t)=>t&&n[0]===t[0]&&n[1]===t[1],gy=(n,t)=>Math.hypot(n[0]-t.x,n[1]-t.z),vy=(n,t)=>[...n[Math.min(n.length-1,Math.max(0,Math.floor(t()*n.length)))]];function _y(n,t,e=Math.random,i=kl){const s=i.filter(c=>!my(c,t));if(!s.length)throw new Error("No legal respawn candidates");const r=n.filter(c=>c.alive!==!1),a=s.map(c=>({point:c,distance:r.reduce((l,u)=>Math.min(l,gy(c,u)),1/0)})),o=a.filter(c=>c.distance>=20).map(c=>c.point);return vy(o.length?o:a.sort((c,l)=>l.distance-c.distance).slice(0,3).map(c=>c.point),e)}const df=[...kl.map(([n,t])=>({x:n,y:0,z:t})),...Jo];function xy(n){return n==="smg"?[Jo[0]]:n==="shotgun"?[Jo[1]]:df.filter(t=>t.y===0)}function yy(n,t,e,i=Math.random,s=df){const r=[...n.filter(o=>o.alive!==!1),...t],a=s.filter(o=>(!e||o.x!==e.x||o.y!==e.y||o.z!==e.z)&&r.every(c=>Math.hypot(o.x-c.x,o.y-(c.y??0),o.z-c.z)>=8));return a.length?{...a[Math.min(a.length-1,Math.max(0,Math.floor(i()*a.length)))]}:null}const cr=2,Bl=.5,zl=16,ff=.1,pf="chroma-mouse-sensitivity";function mf(n){return!Number.isFinite(n)||n<Bl||n>zl?cr:Math.round(n*10)/10}function My(){try{const n=localStorage.getItem(pf);return n===null||n.trim()===""?cr:mf(Number(n))}catch{return cr}}let Kc=My();const jc=new Set,$a=()=>Kc;function Na(n){Kc=mf(n);try{localStorage.setItem(pf,String(Kc))}catch{}jc.forEach(t=>t())}function gf(n){return jc.add(n),()=>{jc.delete(n)}}let Sy=0;class vf{constructor(t,e,i,s=!1,r){this.root=t,this.onOpen=e,this.onClose=i,this.roomActions=r;const a=`co-settings-${++Sy}`;this.shell=document.createElement("div"),this.shell.dataset.gameUi="",this.shell.className="co-settings-shell",this.shell.innerHTML=`<button type="button" class="co-settings-trigger" aria-controls="${a}" aria-expanded="false">${this.coarse?"設定":"設定 · F2"}</button>
      <p class="co-lock-hint" hidden>點擊場景繼續遊戲 · F2 開啟設定</p>
      <div class="co-settings-overlay" hidden>
        <section id="${a}" class="co-settings-card" role="dialog" aria-modal="true" aria-labelledby="${a}-title" tabindex="-1">
          <p class="co-settings-eyebrow">CHROMA OPS</p><h2 id="${a}-title">遊戲設定</h2>
          <div class="co-sensitivity"><label for="${a}-range">視角靈敏度 <output for="${a}-range"></output></label>
          <input id="${a}-range" type="range" min="${Bl}" max="${zl}" step="${ff}">
          <p>滑鼠與觸控共用倍率，1 倍為原本手感。設定會自動儲存。</p>
          <button type="button" data-reset>恢復預設（2 倍）</button></div>
          <p class="co-settings-status">${s?"對戰仍在進行，你仍可能受到攻擊":"單人遊戲已暫停"}</p>
          ${r?`<div class="co-room-actions"><p>房間 <b data-room-code></b></p><button type="button" data-invite>複製邀請連結</button>${r.isHost?'<button type="button" data-end>結束本局並回房間</button><div data-end-confirmation hidden><p>結束本局並讓所有人回到原房間？</p><button type="button" data-confirm-end>確認結束本局</button><button type="button" data-cancel-end>繼續對戰</button></div>':""}<button type="button" data-leave>離開房間</button><p data-room-status role="status"></p></div>`:""}
          <button type="button" class="co-settings-continue" data-continue>繼續遊戲</button>
          <p class="co-settings-help">${this.coarse?"點擊「繼續遊戲」返回戰場":"F2 / Esc 關閉 · 關閉後點擊場景繼續"}</p>
        </section>
      </div>`;const o=this.shell.querySelector("[data-room-code]");o&&r&&(o.textContent=r.code),t.classList.add("co-has-settings"),t.append(this.shell),this.panel=this.shell.querySelector(".co-settings-overlay"),this.slider=this.shell.querySelector("input"),this.output=this.shell.querySelector("output"),this.trigger=this.shell.querySelector(".co-settings-trigger"),this.hint=this.shell.querySelector(".co-lock-hint"),this.shell.addEventListener("click",this.onClick),this.slider.addEventListener("input",this.onInput),window.addEventListener("keydown",this.onKey,!0),document.addEventListener("focusin",this.onFocus),document.addEventListener("pointerlockchange",this.updateHint),document.addEventListener("pointerlockerror",this.updateHint),this.unsubscribe=gf(this.render),this.render(),this.updateHint()}shell;panel;slider;output;trigger;hint;previousFocus=null;unsubscribe;open=!1;active=!0;coarse=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>0;get isOpen(){return this.open}render=()=>{const t=$a();this.slider.value=String(t),this.slider.setAttribute("aria-valuetext",`${t.toFixed(1)} 倍`),this.output.value=`${t.toFixed(1)} 倍`};onInput=()=>Na(Number(this.slider.value));onClick=t=>{t.stopPropagation();const e=t.target;if(e.closest(".co-settings-trigger"))this.show();else if(e.closest("[data-reset]"))Na(cr);else if(e.closest("[data-leave]"))this.roomActions?.onLeave();else if(e.closest("[data-end]"))this.endConfirmation(!0);else if(e.closest("[data-confirm-end]"))this.endConfirmation(!1),this.roomActions?.onEnd();else if(e.closest("[data-cancel-end]"))this.endConfirmation(!1);else if(e.closest("[data-invite]")){const i=new URL(location.href);i.searchParams.set("room",this.roomActions?.code??""),navigator.clipboard?.writeText(i.toString()).then(()=>this.inviteStatus("邀請連結已複製")).catch(()=>this.inviteStatus("無法複製，請分享房間碼"))}else e.closest("[data-continue]")&&this.close(!this.coarse)};inviteStatus(t){const e=this.shell.querySelector("[data-room-status]");e&&(e.textContent=t)}endConfirmation(t){const e=this.shell.querySelector("[data-end-confirmation]");e&&(e.hidden=!t,t&&e.querySelector("[data-cancel-end]")?.focus())}onFocus=t=>{this.open&&!this.panel.contains(t.target)&&this.slider.focus()};onKey=t=>{if(!this.active)return;const e=t.target instanceof HTMLElement&&t.target.closest("input, textarea, select, [contenteditable]");if(t.key==="F2"&&(this.open||!e)){t.preventDefault(),t.stopImmediatePropagation(),t.repeat||(this.open?this.close(!1):this.show());return}if(this.open){if(t.key==="Escape")t.preventDefault(),t.stopImmediatePropagation(),this.close(!1);else if(t.key==="Tab"){const i=Array.from(this.panel.querySelectorAll("input, button")).filter(a=>!a.closest("[hidden]")),s=i[0],r=i[i.length-1];t.shiftKey&&document.activeElement===s?(t.preventDefault(),r.focus()):!t.shiftKey&&document.activeElement===r&&(t.preventDefault(),s.focus())}}};show(){!this.active||this.open||(this.previousFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.open=!0,this.panel.hidden=!1,this.trigger.setAttribute("aria-expanded","true"),this.onOpen(),document.pointerLockElement===this.root&&document.exitPointerLock?.(),this.slider.focus(),this.updateHint())}close(t=!1,e=!0){this.open&&(this.open=!1,this.endConfirmation(!1),this.panel.hidden=!0,this.trigger.setAttribute("aria-expanded","false"),e&&((this.previousFocus?.isConnected?this.previousFocus:this.trigger).focus({preventScroll:!0}),this.onClose(t)),this.updateHint())}setActive(t){this.active=t,t||this.close(!1,!1),this.shell.hidden=!t,this.updateHint()}updateHint=()=>{(!this.active||this.open)&&document.pointerLockElement===this.root&&document.exitPointerLock?.(),this.hint.hidden=this.coarse||!this.active||this.open||document.pointerLockElement===this.root};dispose(){this.active=!1,this.close(!1,!1),this.unsubscribe(),window.removeEventListener("keydown",this.onKey,!0),document.removeEventListener("focusin",this.onFocus),document.removeEventListener("pointerlockchange",this.updateHint),document.removeEventListener("pointerlockerror",this.updateHint),this.shell.removeEventListener("click",this.onClick),this.slider.removeEventListener("input",this.onInput),this.root.classList.remove("co-has-settings"),this.shell.remove()}}const bu=()=>({moveX:0,moveY:0,lookX:0,lookY:0,shoot:!1,jump:!1,reload:!1,switchWeapon:0,sprint:!1,aim:!1});class _f{constructor(t){this.onReset=t}state=bu();set(t){Object.assign(this.state,t),(t.reload||t.switchWeapon)&&(this.state.aim=!1)}addLook(t,e){this.state.lookX+=t,this.state.lookY+=e}getState(){const t={...this.state};return this.state.lookX=0,this.state.lookY=0,this.state.jump=!1,this.state.reload=!1,this.state.switchWeapon=0,t}get aiming(){return!!this.state.aim}get sprinting(){return!!this.state.sprint}clearCombat(){this.set({shoot:!1,aim:!1,lookX:0,lookY:0,jump:!1,reload:!1,switchWeapon:0})}reset(){const t=this.state.moveX||this.state.moveY||this.state.sprint||this.state.aim||this.state.shoot||this.state.jump;this.state=bu(),t&&this.onReset?.()}}class xf{constructor(t,e){this.el=t,this.input=e,window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onKey),document.addEventListener("mousemove",this.onMove),t.addEventListener("contextmenu",this.onContext),t.addEventListener("combat:reset",this.reset),t.addEventListener("armory:open",this.clearCombat),document.addEventListener("visibilitychange",this.onVisibility),t.tabIndex=-1,document.addEventListener("pointerlockchange",this.onLockChange),window.addEventListener("blur",this.reset),t.addEventListener("mousedown",this.onDown),window.addEventListener("mouseup",this.onUp)}keys=new Set;enabled=!0;get canPlay(){return this.enabled&&document.pointerLockElement===this.el}get armoryOpen(){return!!this.el.querySelector(".co-armory:not([hidden])")}clearCombat=()=>this.input.clearCombat();reset=()=>{this.keys.clear(),this.input.reset()};onLockChange=()=>{this.reset(),this.canPlay&&this.el.focus({preventScroll:!0})};onKey=t=>{const e=t.key.toLowerCase();if(t.type==="keyup"){this.keys.delete(e);return}const i=["w","a","s","d","shift"].includes(e);if(!this.canPlay||t.target instanceof HTMLElement&&t.target.closest(i?"input, textarea, select, [contenteditable]":"input, button, textarea, select, [contenteditable]")||this.armoryOpen&&!i)return;const s=/^[1-8]$/.test(e);if(!s&&!["w","a","s","d"," ","r","q","shift"].includes(e))return;t.preventDefault();const r=!t.repeat&&!this.keys.has(e);this.keys.add(e),e===" "&&r&&this.input.set({jump:!0}),e==="r"&&this.input.set({reload:!0}),s&&this.input.set({switchWeapon:+e})};onMove=t=>{if(this.canPlay&&!this.armoryOpen){const e=$a();this.input.addLook(t.movementX*e,t.movementY*e)}};onDown=t=>{t.button===2&&this.canPlay&&!this.armoryOpen&&(t.preventDefault(),this.input.set({aim:!0})),t.button===0&&this.canPlay&&!this.armoryOpen&&!(t.target instanceof HTMLElement&&t.target.closest("[data-game-ui], .co-armory, button, input"))&&this.input.set({shoot:!0})};onUp=t=>{t.button===0&&this.input.set({shoot:!1}),t.button===2&&this.input.set({aim:!1})};onContext=t=>t.preventDefault();onVisibility=()=>{document.hidden&&this.reset()};setEnabled(t){this.enabled=t,this.reset()}update(){if(!this.canPlay){this.reset();return}this.input.set({sprint:this.keys.has("shift"),moveX:(this.keys.has("d")?1:0)-(this.keys.has("a")?1:0),moveY:(this.keys.has("w")?1:0)-(this.keys.has("s")?1:0)})}dispose(){this.reset(),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onKey),document.removeEventListener("mousemove",this.onMove),document.removeEventListener("pointerlockchange",this.onLockChange),window.removeEventListener("blur",this.reset),this.el.removeEventListener("contextmenu",this.onContext),this.el.removeEventListener("combat:reset",this.reset),this.el.removeEventListener("armory:open",this.clearCombat),document.removeEventListener("visibilitychange",this.onVisibility),this.el.removeEventListener("mousedown",this.onDown),window.removeEventListener("mouseup",this.onUp)}}class yf{constructor(t,e){this.el=t,this.input=e,t.classList?.toggle("co-touch-controls",!0),this.portrait?.addEventListener?.("change",this.reset),window.PointerEvent?(t.addEventListener("pointerdown",this.onPointerDown,this.options),t.addEventListener("pointermove",this.onPointerMove,this.options),t.addEventListener("pointerup",this.onPointerUp,this.options),t.addEventListener("pointercancel",this.onPointerUp,this.options)):(t.addEventListener("touchstart",this.onTouchStart,this.options),t.addEventListener("touchmove",this.onTouchMove,this.options),t.addEventListener("touchend",this.onTouchEnd,this.options),t.addEventListener("touchcancel",this.onTouchEnd,this.options)),t.addEventListener("lostpointercapture",this.onPointerUp),t.addEventListener("combat:reset",this.reset),t.addEventListener("armory:open",this.clearCombat),t.addEventListener("tactical:open",this.clearCombat),window.addEventListener("blur",this.reset),window.addEventListener("orientationchange",this.reset),document.addEventListener("visibilitychange",this.onVisibility)}enabled=!0;setEnabled(t){this.enabled=t,this.reset()}portrait=window.matchMedia?.("(orientation: portrait)");isGameTarget=t=>!this.el.querySelector(".co-armory:not([hidden])")&&!(t instanceof HTMLElement&&t.closest(".co-armory, [data-game-ui]"));joyId=null;lookId=null;shootId=null;ox=0;oy=0;lx=0;ly=0;joyTravel=52;options={passive:!1};reset=()=>{this.joyId=null,this.lookId=null,this.shootId=null,this.input.reset(),this.el.style.setProperty("--joy-x","0px"),this.el.style.setProperty("--joy-y","0px")};clearCombat=()=>{this.lookId=null,this.shootId=null,this.input.clearCombat()};stopShooting=()=>{this.shootId=null,this.input.set({shoot:!1})};onVisibility=()=>{document.hidden&&this.reset()};begin=(t,e,i,s)=>{const r=this.el.getBoundingClientRect();if(!this.enabled||this.portrait?.matches||!this.isGameTarget(s))return;const a=s instanceof HTMLElement?s.closest("[data-fire],[data-jump],[data-reload],[data-weapon],[data-sprint],[data-aim]"):null;if(a?.matches("[data-sprint]"))this.input.set({sprint:!this.input.sprinting});else if(a?.matches("[data-aim]"))this.input.set({aim:!this.input.aiming});else if(a?.matches("[data-jump]"))this.input.set({jump:!0});else if(a?.matches("[data-reload]"))this.input.set({reload:!0});else if(a?.matches("[data-weapon]"))this.stopShooting(),this.el.dispatchEvent(new Event("armory"));else if(a?.matches("[data-fire]"))this.shootId=t,this.input.set({shoot:!0});else if(e<r.left+r.width*.48&&this.joyId===null){this.joyId=t,this.ox=e,this.oy=i;const o=this.el.querySelector(".co-joy")?.getBoundingClientRect().width;this.joyTravel=o?o*.42:52}else this.lookId===null&&(this.lookId=t,this.lx=e,this.ly=i)};movePoint=(t,e,i)=>{if(!(!this.enabled||this.portrait?.matches)){if(t===this.joyId){const s=e-this.ox,r=i-this.oy,a=1/Math.max(this.joyTravel,Math.hypot(s,r));this.input.set({moveX:Math.max(-1,Math.min(1,s/this.joyTravel)),moveY:Math.max(-1,Math.min(1,-r/this.joyTravel))}),this.el.style.setProperty("--joy-x",`${s*a*55}%`),this.el.style.setProperty("--joy-y",`${r*a*55}%`)}if(t===this.lookId){const s=$a();this.input.addLook((e-this.lx)*s,(i-this.ly)*s),this.lx=e,this.ly=i}}};end=t=>{t===this.joyId&&(this.joyId=null,this.input.set({moveX:0,moveY:0}),this.el.style.setProperty("--joy-x","0px"),this.el.style.setProperty("--joy-y","0px")),t===this.lookId&&(this.lookId=null),t===this.shootId&&(this.shootId=null,this.input.set({shoot:!1}))};onPointerDown=t=>{!this.enabled||this.portrait?.matches||!this.isGameTarget(t.target)||(t.preventDefault(),this.begin(t.pointerId,t.clientX,t.clientY,t.target),(t.pointerId===this.joyId||t.pointerId===this.lookId||t.pointerId===this.shootId)&&this.el.setPointerCapture?.(t.pointerId))};onPointerMove=t=>{!this.enabled||t.pointerId!==this.joyId&&!this.isGameTarget(t.target)||(t.preventDefault(),this.movePoint(t.pointerId,t.clientX,t.clientY))};onPointerUp=t=>{this.enabled&&this.isGameTarget(t.target)&&t.preventDefault(),this.end(t.pointerId)};onTouchStart=t=>{if(!(!this.enabled||!this.isGameTarget(t.target))){t.preventDefault();for(const e of Array.from(t.changedTouches))this.begin(e.identifier,e.clientX,e.clientY,t.target)}};onTouchMove=t=>{if(this.enabled)for(const e of Array.from(t.changedTouches))e.identifier!==this.joyId&&!this.isGameTarget(t.target)||(t.preventDefault(),this.movePoint(e.identifier,e.clientX,e.clientY))};onTouchEnd=t=>{this.enabled&&this.isGameTarget(t.target)&&t.preventDefault();for(const e of Array.from(t.changedTouches))this.end(e.identifier)};dispose(){this.el.classList?.toggle("co-touch-controls",!1),this.portrait?.removeEventListener?.("change",this.reset),this.el.removeEventListener("lostpointercapture",this.onPointerUp),this.el.removeEventListener("tactical:open",this.clearCombat),this.el.removeEventListener("armory:open",this.clearCombat),this.el.removeEventListener("combat:reset",this.reset),this.reset(),window.PointerEvent?(this.el.removeEventListener("pointerdown",this.onPointerDown),this.el.removeEventListener("pointermove",this.onPointerMove),this.el.removeEventListener("pointerup",this.onPointerUp),this.el.removeEventListener("pointercancel",this.onPointerUp)):(this.el.removeEventListener("touchstart",this.onTouchStart),this.el.removeEventListener("touchmove",this.onTouchMove),this.el.removeEventListener("touchend",this.onTouchEnd),this.el.removeEventListener("touchcancel",this.onTouchEnd)),window.removeEventListener("blur",this.reset),window.removeEventListener("orientationchange",this.reset),document.removeEventListener("visibilitychange",this.onVisibility)}}class wy{constructor(t,e=()=>0){this.boxes=t,this.heightAt=e}groundHeight(t,e){return this.heightAt(t,e)}blocked(t,e,i=.42){return ka(t,e,i,0,this.boxes)}rayBlocked(t,e){return!!this.firstWallHit(t,e.clone().sub(t).normalize(),t.distanceTo(e))}firstWallHit(t,e,i=30){const s=oi(t,e,i,{boxes:this.boxes,heightAt:this.heightAt});return s<i?t.clone().addScaledVector(e,s):null}}class by{constructor(t){this.points=t}previous=new Map;choose(t,e="player"){const i=_y(t.map(s=>({x:s.position.x,z:s.position.z,alive:s.alive})),this.previous.get(e),Math.random,this.points);return this.previous.set(e,i),i}}class Ey{timers=new Map;kill(t){this.timers.set(t,3)}update(t,e){for(const[i,s]of this.timers)s<=t?(this.timers.delete(i),e(i)):this.timers.set(i,s-t)}}class Ty{kills=0;deaths=0;onKill(){this.kills++}onDeath(){this.deaths++}}class Mf{constructor(t){this.el=t}flash=0;directionTime=0;dir="up";damage(t,e,i,s){const r=e.clone().sub(i);r.y=0,r.normalize(),s.y=0,s.normalize();const a=r.dot(s),o=r.x*s.z-r.z*s.x;this.dir=Math.abs(a)>Math.abs(o)?a>0?"up":"down":o>0?"right":"left",this.flash=Math.min(1,Math.max(.65,this.flash+t/18)),this.directionTime=.8,this.el.classList.remove("is-hit"),this.el.offsetWidth,this.el.classList.add("is-hit")}update(t,e){this.flash=Math.max(0,this.flash-t/.45),this.directionTime=Math.max(0,this.directionTime-t);const i={up:"0rad",right:"1.5708rad",down:"3.1416rad",left:"-1.5708rad"};this.el.style.setProperty("--damage-rotation",i[this.dir]),this.el.style.setProperty("--damage-flash",String(this.flash*.72)),this.el.style.setProperty("--low-hp",String(e<=30?.1+(30-e)/180:0)),this.el.style.setProperty("--damage-opacity",String(this.directionTime?Math.min(1,this.directionTime*2):0)),this.flash||this.el.classList.remove("is-hit")}dispose(){this.el.classList.remove("is-hit")}}class Ay{group=new de;rotor=new de;cabins=[];constructor(){const{radius:t,centerY:e,z:i}=Qe;this.rotor.position.set(0,e,i);for(const[r,a]of[[t,16761648],[t*.72,1482464]]){const o=new _t(new Rs(r,.65,6,64),new Ft({color:a}));this.rotor.add(o)}for(let r=0;r<12;r++){const a=new _t(new be(.3,t*2,.3),new Ft({color:16777215}));a.rotation.z=r*Math.PI/12,this.rotor.add(a)}const s=new _t(new rn(1.6,1.6,10,12),new Ft({color:5625599}));s.rotation.x=Math.PI/2,s.position.set(0,e,i-2),this.group.add(s,this.rotor);for(let r=0;r<Qe.cabins;r++){const a=pa(r,0).map(o=>{const c=new _t(new be(o.maxX-o.minX,o.maxY-o.minY,o.maxZ-o.minZ),new Ft({color:o.color}));return this.group.add(c),c});this.cabins.push(a)}this.update(0)}update(t){this.rotor.rotation.z=t/Qe.period*Math.PI*2,this.cabins.forEach((e,i)=>pa(i,t).forEach((s,r)=>e[r].position.set((s.minX+s.maxX)/2,(s.minY+s.maxY)/2,(s.minZ+s.maxZ)/2)))}dispose(){this.group.traverse(t=>{t instanceof _t&&(t.geometry.dispose(),t.material.dispose())})}}const Eu=[It(0,0,Fi.width,Fi.depth,0,1685980),It(0,0,78,62,0,14020080),It(-65,0,16,180,0,15330801),It(68,0,16,180,0,15330801),It(0,-64,184,16,0,15330801),It(0,76,210,12,0,15330801),It(0,24,112,12,0,15330801),It(0,102,92,16,0,10082783)],Ry=Eu.flatMap((n,t)=>Ju(n,[...lr,...Eu.slice(t+1)]));function Cy(n){const t=new Map;for(const e of n){const i=t.get(e.maxY)||[];i.push(e),t.set(e.maxY,i)}return[...t.values()].flatMap(e=>e.flatMap((i,s)=>Ju(i,e.slice(s+1).filter(r=>r.minX<i.maxX&&r.maxX>i.minX&&r.minZ<i.maxZ&&r.maxZ>i.minZ))))}function Tu(n){return n.maxY===0&&!lr.some(t=>Math.min(n.maxX,t.maxX)>Math.max(n.minX,t.minX)&&Math.min(n.maxZ,t.maxZ)>Math.max(n.minZ,t.minZ))}const Fo=240,Au=n=>n*n*(3-2*n);function Py(n){const t=(n%Fo+Fo)%Fo;return t<90?{phase:"day",night:0,cycleTime:t}:t<120?{phase:"dusk",night:Au((t-90)/30),cycleTime:t}:t<210?{phase:"night",night:1,cycleTime:t}:{phase:"dawn",night:1-Au((t-210)/30),cycleTime:t}}function Ly(n,t){return n.environmentTime+Math.max(0,Math.min(.25,(t-n.serverTime)/1e3))}class Sf{group=new de;wheel=new Ay;boxes=He;spawns=kl;waypoints=hp;lift=[];palette=[];pools=new de;poolMaterial=new Ft({color:16768402,transparent:!0,opacity:0,depthWrite:!1});unitBox=new be(1,1,1);openTopBox=this.unitBox.clone();groundPlane=new an(1,1).rotateX(-Math.PI/2);matrix=new se;daySky=new Lt(1489372);sunset=new Lt(13072804);nightSky=new Lt(1051701);sky=new Lt;lastNight=-1;destroyed=new Set;breakable=new Map;groundHeight(t,e){return Hn(t,e)}constructor(){this.group.add(this.wheel.group,this.pools),this.openTopBox.setIndex(Array.from(this.unitBox.index.array).filter((s,r)=>r<12||r>=18)),this.openTopBox.clearGroups();const t=new Set(ch),e=[...He.filter(s=>s.maxY>0&&!t.has(s)),It(0,62,44,20,12,1608656),It(4,100,32,24,6,7953112)];this.drawSolids(e.filter(s=>!s.breakKey)),this.drawBoxes(e.filter(s=>s.breakKey)),this.drawBoxes(this.coupledDetails(_p)),this.makeGlasshouseWindows(),this.drawBoxes(He.filter(s=>s.maxY<=0&&!Tu(s)),void 0,!0),this.drawBoxes(He.filter(Tu),void 0,!0,this.openTopBox),this.drawBoxes(Ry,void 0,!1,this.groundPlane,!0);for(const s of ju)this.ramp(s.x,s.z0,s.x,s.z1,s.from,s.to,s.width);this.ramp(-20.5,40,-20.5,52,0,12,9),this.ramp(-38,100,-12,100,0,6,24);for(const s of Ms){s.kind==="ramp"&&this.ramp(0,s.outer,0,s.inner,0,-6,6);const r=this.sign(`B1  ${s.name}  MALL`,s.axis==="z"?0:s.outer,2.8,s.axis==="z"?s.outer:s.cross,7733217);r.rotation.y=s.name==="NORTH"?Math.PI:s.name==="WEST"?-Math.PI/2:s.name==="EAST"?Math.PI/2:0}this.makeWindows(),this.makeStreet(),this.makeMall(),this.lift=ma(0).map(s=>{const r=new _t(new be(s.maxX-s.minX,s.maxY-s.minY,s.maxZ-s.minZ),new Ft({color:s.color}));return this.group.add(r),r});for(const s of tr)this.sign(s.name,s.x,5,s.z+12.35,s.color);this.sign("SKY WALK  /  6m",0,7.8,38.15,16761648),this.sign("FERRIS PLAZA",0,3,-85,16731800),this.sign("LIFT  0 / 6 / 12",68,13.6,25.75,16731800),this.sign(ll.name,58,5.25,116.3,10082783);const i=new Set;this.group.traverse(s=>{if(!(s instanceof _t))return;const r=Array.isArray(s.material)?s.material:[s.material];for(const a of r){if(!(a instanceof Ft)||a===this.poolMaterial||i.has(a))continue;i.add(a);const o=a.color.getHex(),c=[15330801,14020080,10082783,16777215].includes(o),l=a.userData.glow;this.palette.push({material:a,base:a.color.clone(),night:a.userData.fixedLight?1:c?.63:.38,glow:l===void 0?void 0:new Lt(l)})}}),this.wheel.group.traverse(s=>{if(s instanceof _t){const r=this.palette.find(a=>a.material===s.material);if(r){r.night=.85;const a=r.base.getHex();a===16761648&&(r.glow=new Lt(16742616)),a===1482464&&(r.glow=new Lt(10192383))}}}),this.update(0,0)}drawBoxes(t,e,i=!1,s=this.unitBox,r=!1){const a=new Map;for(const o of t){const c=a.get(o.color)||[];c.push(o),a.set(o.color,c)}for(const[o,c]of a){const l=new Ft({color:o});l.userData.fixedLight=i,e!==void 0&&(l.userData.glow=e);const u=new yn(s,l,c.length);c.forEach((d,h)=>{this.matrix.makeScale(d.maxX-d.minX,r?1:d.maxY-d.minY,d.maxZ-d.minZ),this.matrix.setPosition((d.minX+d.maxX)/2,r?d.maxY:(d.minY+d.maxY)/2,(d.minZ+d.maxZ)/2),u.setMatrixAt(h,this.matrix),d.breakKey&&this.trackPart(d.breakKey,u,h,this.matrix.clone())}),u.instanceMatrix.needsUpdate=!0,this.group.add(u)}}drawSolids(t){const e=new Map,i=s=>{let r=e.get(s);return r||(r={positions:[],indices:[]},e.set(s,r)),r};for(const s of t){const r=i(s.color),a=r.positions.length/3;for(const o of[s.minY,s.maxY])r.positions.push(s.minX,o,s.minZ,s.maxX,o,s.minZ,s.maxX,o,s.maxZ,s.minX,o,s.maxZ);for(const o of[0,1,2,0,2,3,0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0])r.indices.push(a+o)}for(const s of Cy(t)){const r=i(s.color),a=r.positions.length/3;r.positions.push(s.minX,s.maxY,s.minZ,s.maxX,s.maxY,s.minZ,s.maxX,s.maxY,s.maxZ,s.minX,s.maxY,s.maxZ);for(const o of[0,2,1,0,3,2])r.indices.push(a+o)}for(const[s,r]of e){const a=new pe;a.setAttribute("position",new ee(r.positions,3)),a.setIndex(r.indices),this.group.add(new _t(a,new Ft({color:s})))}}makeGlasshouseWindows(){const t=new Ft({color:13234669,transparent:!0,opacity:.28,depthWrite:!1}),e=new Map;for(const i of ch){const s=i.breakKey?.split(":").slice(0,-3).join(":")??`pane:${e.size}`,r=e.get(s)??[];r.push(i),e.set(s,r)}for(const[i,s]of e){const r=new yn(this.unitBox,t,s.length);r.name=i;const a=s[0],o=s[s.length-1];r.position.set((a.minX+o.maxX)/2,(a.minY+o.maxY)/2,(a.minZ+o.maxZ)/2),s.forEach((c,l)=>{this.matrix.makeScale(c.maxX-c.minX,c.maxY-c.minY,c.maxZ-c.minZ),this.matrix.setPosition((c.minX+c.maxX)/2-r.position.x,(c.minY+c.maxY)/2-r.position.y,(c.minZ+c.maxZ)/2-r.position.z),r.setMatrixAt(l,this.matrix),c.breakKey&&this.trackPart(c.breakKey,r,l,this.matrix.clone())}),r.instanceMatrix.needsUpdate=!0,this.group.add(r)}}trackPart(t,e,i,s){const r=this.breakable.get(t)??[];r.push(()=>{e.setMatrixAt(i,this.destroyed.has(t)?this.matrix.makeScale(0,0,0):s),e.instanceMatrix.needsUpdate=!0}),this.breakable.set(t,r)}setDestroyed(t){if(t===this.destroyed)return;const e=this.destroyed;this.destroyed=t;for(const i of new Set([...e,...t]))e.has(i)!==t.has(i)&&this.breakable.get(i)?.forEach(s=>s())}coupledDetails(t){return t.flatMap(e=>Oa(e,"decoration")).map(e=>{const i=(e.minX+e.maxX)/2,s=(e.minY+e.maxY)/2,r=(e.minZ+e.maxZ)/2;let a,o=.7;for(const c of hr(i,r,1)){if(!c.breakKey)continue;const l=Math.hypot(Math.max(0,c.minX-i,i-c.maxX),Math.max(0,c.minY-s,s-c.maxY),Math.max(0,c.minZ-r,r-c.maxZ));l<o&&(a=c.breakKey,o=l)}return{...e,breakKey:a}})}ramp(t,e,i,s,r,a,o){const c=Math.hypot(i-t,s-e),l=(s-e)/c*o/2,u=-(i-t)/c*o/2,d=Math.min(r,a)-.1,h=[t-l,r,e-u,t+l,r,e+u,i+l,a,s+u,i-l,a,s-u,t-l,d,e-u,t+l,d,e+u,i+l,d,s+u,i-l,d,s-u],f=new pe;f.setAttribute("position",new ee(h,3)),f.setIndex([0,1,2,0,2,3,4,6,5,4,7,6,0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0]),f.computeVertexNormals(),this.group.add(new _t(f,new Ft({color:16761648,side:Pe})))}makeWindows(){const t=[];for(const e of tr)for(const i of[0,6])for(const s of[-1,1])for(const r of["x","z"])for(const[a,o]of[[-9,5.4],[-4,3.4],[4,3.4],[9,5.4]]){const c=(l,u,d,h)=>t.push(r==="x"?It(e.x+s*12.27,e.z+l,.05,u,d+h/2,13959158,d-h/2):It(e.x+l,e.z+s*12.27,u,.05,d+h/2,13959158,d-h/2));for(const l of[i+1.23,i+3.47])c(a,o,l,.08);for(const l of[a-o/2,a+o/2])c(l,.08,i+2.35,2.3);(e.name.includes("STUDIO")||e.name.includes("GALLERY"))&&c(a,.06,i+2.35,2.3),(e.name.includes("GARDEN")||e.name.includes("MARKET"))&&c(a,o,i+2.7,.06)}this.drawBoxes(this.coupledDetails(t),7733217)}makeMall(){this.drawBoxes([It(0,2,32,24,-5.98,12824031,-6),...[-14,18].map(e=>It(0,e,176,8,-5.98,5748926,-6)),...[-64,64].map(e=>It(e,2,8,40,-5.98,5748926,-6))],void 0,!0);const t=[];for(const e of Qu){this.sign(e.name,e.x,-1.4,8.2,e.color),this.sign(e.name,e.x,-1.4,-4.2,e.color);for(const i of[-4.2,8.2])t.push(It(e.x,i,8,.08,-.65,e.color,-.8))}for(const e of[-14,18])t.push(It(0,e,168,.35,-.42,7733217,-.5));for(const e of[-64,0,64])t.push(It(e,2,.35,38,-.42,16766838,-.5));this.drawBoxes(t,void 0,!0),this.sign("B1  COLOR MALL",0,-1.6,2,7733217),this.sign("NORTH EXIT",0,-1.5,-20,7733217),this.sign("SOUTH EXIT",0,-1.5,24,7733217).rotation.y=Math.PI,this.sign("WEST EXIT",-88,-1.5,9,7733217).rotation.y=Math.PI/2,this.sign("EAST EXIT",88,-1.5,9,7733217).rotation.y=-Math.PI/2}makeStreet(){const t=new rn(.28,.4,3,6),e=new Wa(1,0),i=new yn(t,new Ft({color:16754476}),jr.length),s=new yn(e,new Ft({color:16777215}),jr.length*5),r=[16731818,16765774,5168565,10021195,6740479];jr.forEach(([c,l],u)=>{this.matrix.makeTranslation(c,2.1,l),i.setMatrixAt(u,this.matrix);for(let d=0;d<5;d++){const h=d*Math.PI*2/5;this.matrix.makeScale(1.1,1.15,1.1),this.matrix.setPosition(c+Math.sin(h)*1.1,3.7+d%2*.8,l+Math.cos(h)*1.1),s.setMatrixAt(u*5+d,this.matrix),s.setColorAt(u*5+d,new Lt(r[d]))}}),this.group.add(i,s);const a=Ko.map(([c,l])=>It(c+.65,l,1.5,.65,4.9,16773841,4.6));this.drawBoxes(a,16769948);const o=new Nl(4.5,16);for(const[c,l]of Ko){const u=new _t(o,this.poolMaterial);u.rotation.x=-Math.PI/2,u.position.set(c+.65,.045,l),this.pools.add(u)}}sign(t,e,i,s,r){const a=document.createElement("canvas");a.width=512,a.height=96;const o=a.getContext("2d");o.fillStyle="#12203b",o.fillRect(0,0,512,96),o.strokeStyle="#"+r.toString(16).padStart(6,"0"),o.lineWidth=10,o.strokeRect(3,3,506,90),o.fillStyle="#ffffff",o.font="bold 32px Arial",o.textAlign="center",o.fillText(t,256,60);const c=new Ft({map:new Ga(a),side:Pe});c.userData.glow=16777215;const l=new _t(new an(8,1.5),c);return l.position.set(e,i,s),this.group.add(l),l}update(t,e=t,i){this.wheel.update(t),ma(t).forEach((r,a)=>this.lift[a]?.position.set((r.minX+r.maxX)/2,(r.minY+r.maxY)/2,(r.minZ+r.maxZ)/2));const{night:s}=Py(e);if(Math.abs(s-this.lastNight)>1e-5){for(const r of this.palette)r.material.color.copy(r.base),r.glow?r.material.color.lerp(r.glow,s):r.material.color.multiplyScalar(1-s*(1-r.night));this.poolMaterial.opacity=s*.16,this.pools.visible=s>.01,this.lastNight=s}i&&(s<.5?this.sky.copy(this.daySky).lerp(this.sunset,s*2):this.sky.copy(this.sunset).lerp(this.nightSky,s*2-1),i.setClearColor(this.sky))}dispose(){this.group.removeFromParent(),on(this.group),this.group.clear()}}class wf{position=new R(-10,1.65,-10);velocityY=0;jumpsUsed=0;supportId=null;hp=100;alive=!0;kills=0;deaths=0;yaw=0;pitch=0;color=5285631;respawn(t){this.position.set(t[0],dl(t[0],t[1])+hi,t[1]),this.velocityY=0,this.jumpsUsed=0,this.supportId=null,this.hp=100,this.alive=!0}damage(t){this.hp=Math.max(0,this.hp-t),this.hp||(this.alive=!1)}}class Iy{update(t,e,i,s,r=1,a){const o={x:t.position.x,y:t.position.y,z:t.position.z,yaw:t.yaw,pitch:t.pitch,velocityY:t.velocityY,supportId:t.supportId,jumpsUsed:t.jumpsUsed,alive:t.alive};ml(o,e,i,{boxes:s.boxes,heightAt:(c,l)=>s.groundHeight(c,l)},r,a),t.position.set(o.x,o.y,o.z),t.yaw=o.yaw,t.pitch=o.pitch,t.supportId=o.supportId??null,t.velocityY=o.velocityY,t.jumpsUsed=o.jumpsUsed}}class Dy{constructor(t){this.spec=t,this.state={level:1,ammo:t.magazine,reloadUntil:0,quickReloadUntil:0}}state;time=0;cooldown=0;get ammo(){return this.state.ammo}get level(){return this.state.level}get capacity(){return wi(this.spec.id,this.level)}get reserve(){return 1/0}get reloading(){return this.state.reloadUntil>this.time}get quickReloadSeconds(){return Math.max(0,this.state.quickReloadUntil-this.time)}clearBoost(){this.state.quickReloadUntil=0}update(t,e){return this.time+=t,this.cooldown=Math.max(0,this.cooldown-t),Qa(this.spec.id,this.state,this.time,!1,1),e&&!this.reloading&&this.cooldown<=0&&this.ammo>0?(this.state.ammo--,this.cooldown=this.spec.fireDelay,Qa(this.spec.id,this.state,this.time,!1,1),{fired:!0,empty:this.ammo===0,autoReload:this.reloading}):{fired:!1,empty:this.ammo===0,autoReload:!1}}reload(){Qa(this.spec.id,this.state,this.time,!0,1)}collect(t){return Tp(this.spec.id,this.state,t,this.time,1)}refill(){this.state.ammo=this.capacity,this.state.reloadUntil=0,this.cooldown=0,this.clearBoost()}addReserve(t){}}class bf{constructor(t,e,i,s=""){this.id=t,this.name=e,this.color=i;const r=new Ft({color:i}),a=(u,d,h,f,g="body")=>{const v=new _t(u,r);v.position.set(d,h,f),this.group.add(v),this.parts.push(v),g==="arm"&&this.arms.push(v),g==="leg"&&this.legs.push(v)};a(new be(.68,.82,.38),0,1.22,0),a(new be(.52,.52,.52),0,1.92,0),a(new be(.16,.58,.16),-.48,1.32,0,"arm"),a(new be(.16,.58,.16),.48,1.32,0,"arm"),a(new be(.19,.67,.19),-.22,.46,0,"leg"),a(new be(.19,.67,.19),.22,.46,0,"leg"),this.gun=new _t(new be(.14,.14,.72),new Ft({color:1581102})),this.gun.position.set(.34,1.38,-.28),this.gun.rotation.x=-.22,this.group.add(this.gun);const o=document.createElement("canvas");o.width=320,o.height=72;const c=o.getContext("2d");c.fillStyle="#fff",c.font="bold 40px Arial",c.textAlign="center",c.fillText(e,160,48);const l=new dr(new ur({map:new Ga(o),transparent:!0,depthTest:!0,depthWrite:!1}));l.position.set(0,2.9,0),l.scale.set(3.2,.72,1),this.group.add(l)}group=new de;position=new R;deathGroup=new de;hp=100;alive=!0;cooldown=0;parts=[];arms=[];legs=[];pieces=[];walk=0;reaction=0;gun;prismCannon;disposed=!1;clearPieces(){for(const t of this.pieces)t.mesh.material.dispose();this.pieces=[],this.deathGroup.clear()}dispose(){this.disposed||(this.disposed=!0,this.clearPieces(),this.group.removeFromParent(),this.deathGroup.removeFromParent(),on(this.group),this.group.clear())}setWeapon(t){t==="prism"&&!this.prismCannon&&(this.prismCannon=nf(),this.prismCannon.position.set(.34,1.38,-.45),this.prismCannon.scale.setScalar(.85),this.group.add(this.prismCannon)),this.prismCannon&&(this.prismCannon.visible=t==="prism"),this.gun.visible=t!=="prism"}muzzlePosition(t=new R,e){return this.group.localToWorld(t.set(.34,1.38,e==="prism"?-1.38:-.7))}respawn(t,e){this.position.set(t,0,e),this.group.position.copy(this.position),this.hp=100,this.reaction=0,this.parts[0].material.color.setHex(this.color),this.alive=!0,this.group.visible=!0,this.deathGroup.visible=!1,this.clearPieces()}damage(t){this.hp=Math.max(0,this.hp-t),this.reaction=.16,this.hp||this.die()}hit(){this.alive&&(this.reaction=.16)}die(){this.alive=!1,this.group.visible=!1,this.clearPieces(),this.deathGroup.position.copy(this.position),this.deathGroup.visible=!0,this.pieces=this.parts.map((t,e)=>{const i=new _t(t.geometry,t.material.clone());return i.position.copy(t.position),i.rotation.copy(t.rotation),this.deathGroup.add(i),{mesh:i,velocity:new R((Math.random()-.5)*3,2+Math.random()*2,(Math.random()-.5)*3),spin:new R(Math.random()*8,Math.random()*8,Math.random()*8),life:1.1+e*.02}})}updateVisual(t,e,i){if(!this.alive){for(const r of this.pieces)r.life-=t,r.velocity.y-=11*t,r.mesh.position.addScaledVector(r.velocity,t),r.mesh.rotation.x+=r.spin.x*t,r.mesh.rotation.y+=r.spin.y*t,r.mesh.rotation.z+=r.spin.z*t,r.mesh.visible=r.life>0;this.pieces.length&&this.pieces.every(r=>r.life<=0)&&this.clearPieces();return}this.walk+=e?t*10:t*3;const s=e?Math.sin(this.walk)*.55:0;this.legs.forEach((r,a)=>r.rotation.x=(a?1:-1)*s),this.arms.forEach((r,a)=>r.rotation.x=(i?-.72:0)+(a?1:-1)*s*.45),this.group.rotation.z=0,this.reaction=Math.max(0,this.reaction-t),this.parts[0].material.color.setHex(this.color).lerp(new Lt(16777215),this.reaction/.16*.65)}}function Jc(n,t){const e=Math.ceil(Math.hypot(t.x-n.x,t.y-n.y,t.z-n.z)*2);for(let i=0;i<=e;i++){const s=e?i/e:0,r=n.x+(t.x-n.x)*s,a=n.z+(t.z-n.z)*s,o=n.y+(t.y-n.y)*s;if(Math.abs(r-Ss.x)<2.8&&Math.abs(a-Ss.z)<2.8||Math.abs(r-Qe.x)<Qe.radius+4&&Math.abs(a-Qe.z)<3.5||ka(r,a,.45,o+.35)||Math.abs(ec(r,a,o+.35)-o)>.38)return!1}return!0}let Ru,Cu;function Ef(n=!1){const t=n?Cu:Ru;if(t)return t;const e=[],i=new Map,s=(o,c,l)=>(e.push({x:o,y:c,z:l,edges:[]}),e.length-1),r=(o,c)=>{(n||Jc(e[o],e[c]))&&(e[o].edges.push(c),e[c].edges.push(o))};for(let o=-144;o<=144;o+=8)for(let c=-128;c<=128;c+=8){const l={x:o,y:0,z:c};(n||Jc(l,l))&&i.set(`${o},${c}`,s(o,0,c))}for(const[o,c]of i){const[l,u]=o.split(",").map(Number);for(const[d,h]of[[8,0],[0,8],[8,8],[8,-8]]){const f=i.get(`${l+d},${u+h}`);f!==void 0&&r(c,f)}}const a=[];for(const o of[-88,-64,-51.5,-42.5,-33.5,-24.5,0,24.5,33.5,42.5,51.5,64,88])for(const c of[-14,18])a.push(s(o,-6,c));for(const o of[-88,-64,0,64,88])a.push(s(o,-6,9));for(const o of a)for(const c of a)o<c&&Math.hypot(e[o].x-e[c].x,e[o].z-e[c].z)<=30&&r(o,c);for(const o of Ms){const c=Math.sign(o.outer-o.inner),l=(h,f)=>o.axis==="z"?{x:0,y:f,z:h}:{x:h,y:f,z:9};let u=-1,d=-1;for(let h=0;h<=14;h++){const f=Math.max(0,Math.min(1,(h-1)/12)),g=l(h===0?o.outer+c:h===14?o.inner-c:o.outer+(o.inner-o.outer)*f,-6*f),v=s(g.x,g.y,g.z);u>=0?r(u,v):d=v,u=v}for(const h of i.values())Math.hypot(e[h].x-e[d].x,e[h].z-e[d].z)<13&&r(d,h);for(const h of a)Math.hypot(e[h].x-e[u].x,e[h].z-e[u].z)<20&&r(u,h)}return n?Cu=e:Ru=e,e}const hs=n=>Number.isFinite(n.x)&&Number.isFinite(n.y)&&Number.isFinite(n.z);class Ny{constructor(t){this.work=t}request;result;advance(t){for(;this.result===void 0;){if(this.request!==void 0){if(!(!t||(this.request==="sample"?t.sample():this.request==="node"?t.node():t.check())))return;this.request=void 0}const e=this.work.next();if(e.done)return this.result=e.value,this.result;this.request=e.value}return this.result}}function*Uy(n,t,e,i=!1,s=!1){if(yield"check",!hs(n)||!hs(t))return[];const r=new WeakMap;function*a(E,y){yield"check";let w=r.get(E);w||(w=new WeakMap,r.set(E,w));const M=w.get(y);if(M!==void 0)return M;const T=yield*e(E,y);return w.set(y,T),T}const o=Ef(s);function*c(E,y=!1){const w=o.map((M,T)=>({id:T,d:Math.hypot(M.x-E.x,M.z-E.z)+Math.abs(M.y-E.y)*4})).sort((M,T)=>M.d-T.d);for(const{id:M,d:T}of w)if(yield"check",T<30&&hs(o[M])&&(yield*a(y?o[M]:E,o[M])))return M}const l=yield*c(n);if(l===void 0)return[];const u=yield*c(t,i);if(u===void 0&&!i)return[];const d=new Set([l]),h=new Set,f=new Map([[l,0]]),g=new Map;let v=l,m=1/0;const p=u===void 0?t:o[u];function*S(E){const y=[E],w=new Set(y);for(;g.has(y[0]);){yield"check";const M=g.get(y[0]);if(w.has(M)||!o[M]||!hs(o[M]))return[];w.add(M),y.unshift(M)}for(;y.length>1&&(yield*a(n,o[y[1]]));)y.shift();return[...y.map(M=>o[M]),...(yield*a(o[E],t))?[t]:[]]}for(;d.size;){yield"node";let E=-1,y=1/0;for(const w of d){yield"check";const M=o[w],T=f.get(w)+Math.hypot(M.x-p.x,M.y-p.y,M.z-p.z);T<y&&(E=w,y=T)}if(E<0||!hs(o[E]))return[];if(E===u)return yield*S(E);if(i){const w=o[E],M=Math.hypot(w.x-t.x,w.z-t.z)+Math.abs(w.y-t.y)*4;M<m&&(v=E,m=M)}d.delete(E),h.add(E);for(const w of o[E].edges){if(yield"check",h.has(w)||!o[w]||!hs(o[w]))continue;const M=o[E],T=o[w],_=f.get(E)+Math.hypot(M.x-T.x,M.y-T.y,M.z-T.z);_<(f.get(w)??1/0)&&(yield*a(M,T))&&(f.set(w,_),g.set(w,E),d.add(w))}}return i?yield*S(v):[]}function Fy(n,t,e=Jc,i=!1,s=!1,r){const a=function*(o,c){return e(o,c)};return new Ny(Uy(n,t,a,i,s)).advance(r)??[]}class Oy{routes=new Map;canSee(t,e,i,s=38){return t.alive&&e.alive&&t.position.distanceTo(e.position)<s&&!i.rayBlocked(t.position.clone().add(new R(0,1.3,0)),e.position)}update(t,e,i,s,r,a,o){if(!t.alive||!e.alive)return;t.cooldown-=i;const c=this.canSee(t,e,s,55),l=t.position.distanceTo(e.position),u={x:t.position.x,y:t.position.y,z:t.position.z};let d=this.routes.get(t.id);d&&d.last.distanceTo(t.position)>5&&(d=void 0),d||(d={path:[],remaining:0,goal:u,velocityY:0,last:t.position.clone()},this.routes.set(t.id,d)),d.remaining-=i;const h={x:e.position.x,y:e.position.y-1.65,z:e.position.z};if(h.y>1&&(h.y=0),d.remaining<=0){if(c||h.y<-2||u.y<-2)d.goal=h;else if(!d.path.length){const E=Ef().filter(y=>y.y===0);d.goal=E[Math.floor(Math.random()*E.length)]}d.path=Fy(u,d.goal),d.remaining=.75}for(;d.path.length&&Math.hypot(d.path[0].x-u.x,d.path[0].z-u.z)<.25&&Math.abs(d.path[0].y-u.y)<.4;)d.path.shift();const f=d.path[0];let g=0,v=0;f&&(g=f.x-u.x,v=f.z-u.z);const m=f?Math.min(i,Math.hypot(g,v)/3.2):i,p={...u,y:u.y+1.65,yaw:0,pitch:0,velocityY:d.velocityY,jumpsUsed:0,alive:!0};ml(p,{moveX:g,moveY:-v,lookX:0,lookY:0,jump:!1},m,{boxes:s.boxes,heightAt:(S,E)=>s.groundHeight(S,E)},3.2/tc),t.position.set(p.x,p.y-1.65,p.z),d.velocityY=p.velocityY,d.last.copy(t.position),t.group.position.copy(t.position),(g||v)&&(t.group.rotation.y=Math.atan2(-g,-v)),a&&l<38&&c&&t.cooldown<=0&&(t.cooldown=1.5+Math.random()*.8,o(Math.random()<Math.max(.18,.35-Math.max(0,l-12)*.0065)))}}const Pu=n=>n.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);class Tf{constructor(t){this.el=t,this.death.className="co-dead",this.death.hidden=!0,this.el.parentElement?.append(this.death)}death=document.createElement("div");wasDead=!1;hideTimer=0;signature="";render(t){const e=Number.isFinite(t.reserve)?t.reserve:"∞",i=t.remainingSeconds??0,s=t.score===void 0?`擊殺 ${t.kills} <span>／</span> 死亡 ${t.deaths}`:`積分 ${t.score} / ${t.scoreTarget}<small>賞金 ${t.bounty} · ${Math.floor(i/60)}:${String(i%60).padStart(2,"0")} · K/D ${t.kills}/${t.deaths}</small>`,r=`${t.quickReloadSeconds}|${t.level}|${t.capacity}|${t.hp}|${t.ammo}|${e}|${t.label}|${t.notice}|${t.kills}|${t.deaths}|${t.kill}|${t.reloading}|${s}`;r!==this.signature&&(this.signature=r,this.el.innerHTML=`<div class="co-score">${s}</div><div class="co-hp">生命值 <b>${t.hp}</b></div><div class="co-ammo">${t.label} <span class="co-hud-level">Lv.${t.level??1}</span><br><b>${t.ammo} <small>/ ${t.capacity??e}</small></b><small class="co-reserve">&#28961;&#38480;&#20633;&#24392; ${e}</small>${t.quickReloadSeconds?`<em class="co-quick-reload">&#24555;&#36895;&#25563;&#24392; ${t.quickReloadSeconds}s &middot; -25%</em>`:""}${t.reloading?"<em>換彈中</em>":""}</div>${t.notice?`<div class="co-notice">${Pu(t.notice)}</div>`:""}<i class="co-crosshair ${t.kill?"is-kill":""}"></i>`),t.dead&&!this.wasDead&&(window.clearTimeout(this.hideTimer),this.death.hidden=!1,this.death.classList.remove("is-leaving"),this.death.innerHTML=`<section class="co-dead-card"><p>戰鬥結束</p><h2>你已陣亡</h2><div class="co-dead-killer">擊倒者 <b>${Pu(t.killer||"未知敵人")}</b></div><small>正在準備重生…</small></section>`),!t.dead&&this.wasDead&&(this.death.classList.add("is-leaving"),this.hideTimer=window.setTimeout(()=>{this.death.hidden=!0,this.death.classList.remove("is-leaving")},180)),this.el.parentElement?.classList.toggle("co-is-dead",t.dead),this.wasDead=t.dead}dispose(){window.clearTimeout(this.hideTimer),this.death.remove(),this.el.replaceChildren(),this.el.parentElement?.classList.remove("co-is-dead")}}const Af=()=>`<div class="co-mobile">
  <div class="co-joy" aria-hidden="true"><i></i></div>
  <button type="button" data-sprint aria-label="切換跑步" aria-pressed="false">跑步</button>
  <div class="co-actions">
    <button type="button" data-weapon aria-expanded="false">武器庫</button>
    <button type="button" data-reload>換彈</button>
    <button type="button" data-jump aria-label="跳躍，空中再按一次二段跳">跳躍</button>
    <button type="button" data-aim aria-label="切換狙擊鏡" aria-pressed="false" disabled>瞄準</button>
    <button type="button" data-fire>射擊</button>
  </div>
</div><div class="co-rotate" data-game-ui>請旋轉裝置後遊玩</div>`;class Rf{constructor(t,e,i,s,r=()=>1){this.root=t,this.choose=e,this.owned=i,this.afterClose=s,this.level=r;const a=this.coarse?"左右滑動選擇，點擊已取得武器裝備":"滾輪選擇，滑鼠左鍵裝備目前選取武器";t.insertAdjacentHTML("beforeend",`<div class="co-armory" hidden><div class="co-armory-head">武器庫<small>${a}</small></div><div class="co-armory-track"></div></div>`),this.box=t.querySelector(".co-armory"),this.track=this.box.querySelector(".co-armory-track"),this.trigger=t.querySelector("[data-weapon]"),this.track.innerHTML=xi.map(o=>{const c=xe[o];return`<button type="button"${o==="prism"?" hidden":""} class="co-weapon-card" data-armory="${o}" style="--weapon:#${c.color.toString(16).padStart(6,"0")}"><span>${c.icon}</span><b>${c.label}</b><strong class="co-level"></strong><small></small><em></em><div class="co-weapon-stats"></div></button>`}).join(""),t.addEventListener("pointerdown",this.onPointerDown,!0),window.addEventListener("pointermove",this.onPointerMove,!0),window.addEventListener("pointerup",this.onPointerUp,!0),window.addEventListener("pointercancel",this.onPointerCancel,!0),window.PointerEvent||(t.addEventListener("touchstart",this.onTouchStart,{capture:!0,passive:!1}),window.addEventListener("touchmove",this.onTouchMove,!0),window.addEventListener("touchend",this.onTouchEnd,{capture:!0,passive:!1}),window.addEventListener("touchcancel",this.onTouchEnd,!0)),window.addEventListener("blur",this.onInterrupted),window.addEventListener("orientationchange",this.onInterrupted),document.addEventListener("visibilitychange",this.onVisibility),t.addEventListener("combat:reset",this.onInterrupted),t.addEventListener("click",this.onClick,!0),t.addEventListener("wheel",this.onWheel,{passive:!1}),t.addEventListener("armory",this.onArmory),window.addEventListener("keydown",this.onKey),this.render("ar")}suppressMouseClick=!1;touchRelease=null;gestures=new Map;scrollFrame;enabled=!0;open=!1;selected=0;active="ar";signature="";box;track;trigger;coarse=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>0;get pointerLocked(){return!this.coarse&&document.pointerLockElement===this.root}equip(t){!this.owned().has(t)||this.choose(t)===!1||this.close()}selectCard(t){const e=t.dataset.armory,i=xi.indexOf(e);i<0||(this.selected=i,this.render(),this.equip(e))}consume(t){t.preventDefault(),t.stopImmediatePropagation()}start(t,e,i,s,r,a){if(a||(this.suppressMouseClick=!1),this.touchRelease=null,!this.open||!(s instanceof HTMLElement))return;const o=this.pointerLocked||this.box.contains(s);this.gestures.set(t,{x:e,y:i,inside:o,moved:!1,touch:a,card:o?s.closest("[data-armory]"):null}),o||this.consume(r)}moveGesture(t,e,i){if(this.pointerLocked)return;const s=this.gestures.get(t);s&&Math.hypot(e-s.x,i-s.y)>8&&(s.moved=!0)}end(t,e,i,s,r=!1){const a=this.gestures.get(t);if(!a)return;this.gestures.delete(t);const o=!r&&!a.moved;a.inside?a.touch&&o&&a.card&&document.elementFromPoint(e,i)?.closest("[data-armory]")===a.card&&this.selectCard(a.card):(this.consume(s),o&&this.close()),a.touch?(this.touchRelease={x:e,y:i,expires:Date.now()+500},o&&s.cancelable&&s.preventDefault()):(!o||!a.inside)&&(this.suppressMouseClick=!0)}onPointerDown=t=>{t.button===0&&this.start(t.pointerId,t.clientX,t.clientY,t.target,t,t.pointerType==="touch")};onPointerMove=t=>this.moveGesture(t.pointerId,t.clientX,t.clientY);onPointerUp=t=>{this.moveGesture(t.pointerId,t.clientX,t.clientY),this.end(t.pointerId,t.clientX,t.clientY,t)};onPointerCancel=t=>this.end(t.pointerId,t.clientX,t.clientY,t,!0);onTouchStart=t=>{for(const e of Array.from(t.changedTouches))this.start(e.identifier,e.clientX,e.clientY,e.target??t.target,t,!0)};onTouchMove=t=>{for(const e of Array.from(t.changedTouches))this.moveGesture(e.identifier,e.clientX,e.clientY)};onTouchEnd=t=>{for(const e of Array.from(t.changedTouches))this.moveGesture(e.identifier,e.clientX,e.clientY),this.end(e.identifier,e.clientX,e.clientY,t,t.type==="touchcancel")};onClick=t=>{const e=this.touchRelease;if(e&&Date.now()<e.expires&&t.detail>0&&Math.hypot(t.clientX-e.x,t.clientY-e.y)<25){this.touchRelease=null,this.consume(t);return}if(this.suppressMouseClick){this.suppressMouseClick=!1,this.consume(t);return}if(this.coarse&&t.detail>0&&(!("pointerType"in t)||t.pointerType==="touch")){this.open&&this.consume(t);return}if(!this.open||!(t.target instanceof HTMLElement))return;if(this.consume(t),this.pointerLocked){this.equip(xi[this.selected]);return}if(!this.box.contains(t.target)){this.close();return}const i=t.target.closest("[data-armory]");i&&this.selectCard(i)};onWheel=t=>{this.open&&(t.preventDefault(),this.move(t.deltaY>0?1:-1))};onArmory=()=>this.toggle();onInterrupted=()=>this.close(!1);onVisibility=()=>{document.hidden&&this.close(!1)};onKey=t=>{!this.enabled||t.repeat||t.key.toLowerCase()!=="q"||t.target instanceof HTMLElement&&t.target.closest("input, textarea, select, [contenteditable]")||(t.preventDefault(),this.toggle())};get isOpen(){return this.open}setEnabled(t){this.enabled=t,t||this.close(!1)}close(t=!0){this.gestures.clear(),this.suppressMouseClick=!1,this.touchRelease=null,this.scrollFrame!==void 0&&(cancelAnimationFrame(this.scrollFrame),this.scrollFrame=void 0),this.open&&(this.open=!1,this.box.hidden=!0,this.signature="",this.trigger?.setAttribute("aria-expanded","false"),t&&this.afterClose?.())}toggle(){if(!this.enabled)return;if(this.open){this.close();return}this.root.dispatchEvent(new Event("armory:open")),this.open=!0,this.box.hidden=!1,this.trigger?.setAttribute("aria-expanded","true");const t=xi.indexOf(this.active);t>=0&&(this.selected=t),this.render(),this.scrollSelected(!1)}move(t){const e=xi.length-(this.owned().has("prism")?0:1);this.selected=(this.selected+t+e)%e,this.render(),this.scrollSelected()}render(t=this.active){this.active=t,this.box.hidden=!this.open;const e=this.owned(),i=`${this.open}|${t}|${this.selected}|${xi.map(s=>`${e.has(s)}:${this.level(s)}`).join("|")}`;i!==this.signature&&(this.signature=i,xi.forEach((s,r)=>{const a=this.track.children[r],o=e.has(s),c=xe[s],l=this.level(s);s==="prism"&&(a.hidden=!o),a.classList.toggle("active",s===t),a.classList.toggle("focus",r===this.selected),a.classList.toggle("locked",!o),a.setAttribute("aria-disabled",String(!o)),a.dataset.level=o?String(l):"0",a.querySelector("small").textContent=o?c.description:"尚未取得";const u=a.querySelector(".co-level"),d=a.querySelector("em");u&&(u.textContent=s==="prism"?"武器全收集":o?`Lv.${l}${l===3?" · 滿級":""}`:"未解鎖"),d&&(d.textContent=`${wi(s,l)} 發彈匣`);const h=a.querySelector(".co-weapon-stats");h&&(h.textContent=`${c.pellets?"每顆":"傷害"} ${Math.round(c.damage*Ba(l))} · 射程 ${Number(za(s,l).toFixed(2))}`)}))}scrollSelected(t=!0){this.scrollFrame!==void 0&&cancelAnimationFrame(this.scrollFrame),this.scrollFrame=requestAnimationFrame(()=>{if(this.scrollFrame=void 0,!this.open)return;const e=this.track.children[this.selected],i=e.offsetLeft+(e.offsetWidth-this.track.clientWidth)/2;this.track.scrollTo({left:i,behavior:t?"smooth":"instant"})})}dispose(){this.enabled=!1,this.open=!1,this.close(),this.box.remove(),window.removeEventListener("blur",this.onInterrupted),window.removeEventListener("orientationchange",this.onInterrupted),document.removeEventListener("visibilitychange",this.onVisibility),this.root.removeEventListener("combat:reset",this.onInterrupted),this.root.removeEventListener("pointerdown",this.onPointerDown,!0),this.root.removeEventListener("touchstart",this.onTouchStart,!0),window.removeEventListener("pointermove",this.onPointerMove,!0),window.removeEventListener("pointerup",this.onPointerUp,!0),window.removeEventListener("pointercancel",this.onPointerCancel,!0),window.removeEventListener("touchmove",this.onTouchMove,!0),window.removeEventListener("touchend",this.onTouchEnd,!0),window.removeEventListener("touchcancel",this.onTouchEnd,!0),this.root.removeEventListener("click",this.onClick,!0),this.root.removeEventListener("wheel",this.onWheel),this.root.removeEventListener("armory",this.onArmory),window.removeEventListener("keydown",this.onKey)}}class Cf{constructor(t){this.update=t}id=0;last=0;running=!1;start(){if(this.running)return;this.running=!0,this.last=0;const t=e=>{if(!this.running)return;const i=this.last?Math.max(0,(e-this.last)/1e3):0,s=Math.min(.05,i);this.last=e,this.update(s,i),this.running&&(this.id=requestAnimationFrame(t))};this.id=requestAnimationFrame(t)}stop(){this.running=!1,cancelAnimationFrame(this.id),this.id=0,this.last=0}}class ky{constructor(t){this.root=t;const e=new cf;this.renderer=new Zd({antialias:e.antialias,powerPreference:"high-performance"}),this.renderer.setPixelRatio(e.pixelRatio),this.renderer.setClearColor(1489372),t.append(this.renderer.domElement),t.insertAdjacentHTML("beforeend",'<div class="co-feedback"></div><div class="co-hud"></div><div class="co-minimap co-solo-radar" hidden><canvas aria-label="武器掃描雷達"></canvas></div>'+Af()),this.hud=new Tf(t.querySelector(".co-hud")),this.aimFeedback=new of(t),this.radar=t.querySelector(".co-solo-radar canvas"),this.prism=new Kd(this.scene,this.coarse),this.armory=new Rf(t,r=>{this.owned.has(r)&&(this.input.set({aim:!1}),this.active=r,this.armory.render(this.active))},()=>this.owned,this.restorePointerLock,r=>this.weapons.get(r).level),this.feedback=new Mf(t.querySelector(".co-feedback")),this.scene.add(this.arena.group,new Bd(16777215,1489372,2)),this.effects=new hf(this.scene,this.coarse),this.battle=new uf(t),this.makeGun(),this.appearance=new sf(this.gun),this.pickupFeedback=new ef(t,this.coarse),this.pickupPreview=new tf(t),this.scope=new lf(t,this.gun,this.coarse);const i=[16731770,3594436,16235083,10975231,5285631,16739127,3656447,9626447],s=["RED","BLUE","GREEN","YELLOW","PURPLE","ORANGE","CYAN","LIME"];i.forEach((r,a)=>{const o=new bf("bot"+a,s[a],r);o.respawn(...this.spawns.choose(this.bots,o.id)),this.bots.push(o),this.scene.add(o.group,o.deathGroup)}),this.player.respawn(this.spawns.choose(this.bots)),ws.forEach(r=>this.addPickup(r)),this.coarse?this.mobile=new yf(t,this.input):(this.desktop=new xf(t,this.input),t.onclick=r=>{r.target.closest(".co-armory, [data-game-ui], button, input")||this.restorePointerLock()}),this.stopResize=Qd(t,(r,a)=>{this.cam.aspect=r/a,this.cam.updateProjectionMatrix(),this.renderer.setSize(r,a,!1)}),this.loop=new Cf(r=>this.update(r)),this.settings=new vf(t,()=>{this.root.dispatchEvent(new Event("combat:reset")),this.desktop?.setEnabled(!1),this.mobile?.setEnabled(!1),this.armory.setEnabled(!1),this.loop.stop()},r=>{this.desktop?.setEnabled(!0),this.mobile?.setEnabled(!0),this.armory.setEnabled(!0),this.loop.start(),r&&this.restorePointerLock()},!1)}scene=new Cl;cam=new ii(75,1,Ol,hl);renderer;input=new _f;arena=new Sf;collision=new wy(this.arena.boxes,(t,e)=>this.arena.groundHeight(t,e));player=new wf;controller=new Iy;bots=[];ai=new Oy;spawns=new by(this.arena.spawns);respawn=new Ey;weapons=new Map(xi.map(t=>[t,new Dy(xe[t])]));active="ar";owned=new Set(["ar"]);pickups=[];hud;aimFeedback;armory;feedback;effects;battle;killTracker=new Cp("solo");shotSequence=0;elapsed=0;status=new Map;statusTimer=0;loop;settings;desktop;mobile;mode=new Ty;hit=0;kill=0;shake=0;notice="";noticeT=0;gun=new de;gunFlash;dead=!1;killer="";coarse=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>0;stopResize=()=>{};pickupPreview;pickupFeedback;appearance;scope;scanner=!1;radar;radarTimer=0;prism;prismOrbs=new Map;aiming=!1;restorePointerLock=()=>{if(!(this.coarse||this.settings?.isOpen||document.pointerLockElement===this.root))try{this.root.requestPointerLock?.()?.catch(()=>{})}catch{}};makeGun(){const t=new Ft({color:2106932}),e=new Ft({color:this.player.color}),i=new _t(new be(.18,.16,.9),t);i.position.set(.34,-.28,-.8);for(const[s,r,a,o]of[[.47,-.52,-.5,-.55],[.12,-.55,-.63,.42],[.37,-.43,-.74,0],[.17,-.42,-.86,0]]){const c=new _t(new be(.18,.28,.18),e);c.position.set(s,r,a),c.rotation.z=o,this.gun.add(c)}this.gunFlash=new _t(new bn(.08),new Ft({color:16766045})),this.gunFlash.position.set(.34,-.25,-1.3),this.gunFlash.visible=!1,this.gun.add(i,this.gunFlash),this.cam.add(this.gun),this.scene.add(this.cam)}pickupPoint(t,e){return yy([this.player,...this.bots].map(i=>({x:i.position.x,y:i.position.y-(i===this.player?1.65:0),z:i.position.z,alive:i.alive})),this.pickups.filter(i=>i.mesh.visible).map(i=>({x:i.position.x,y:i.position.y-.9,z:i.position.z})),t,Math.random,e?xy(e):void 0)}addPickup(t){const e=new _t(new bn(.75),new Ft({color:xe[t].color})),i=this.pickupPoint(void 0,t);e.visible=!!i,i&&e.position.set(i.x,i.y+.9,i.z),this.scene.add(e),this.pickups.push({id:t,mesh:e,position:e.position.clone(),cooldown:i?0:.1})}respawnPickup(t){const e=this.pickupPoint({x:t.position.x,y:t.position.y-.9,z:t.position.z});if(!e){t.cooldown=.1;return}t.position.set(e.x,e.y+.9,e.z),t.mesh.position.copy(t.position),t.mesh.visible=!0}resetInput(){this.armory.close(!1),this.desktop?.setEnabled(!0),this.mobile?.reset(),this.input.reset()}actors(){return[{id:"player",x:this.player.position.x,y:this.player.position.y,z:this.player.position.z,yaw:this.player.yaw,alive:this.player.alive},...this.bots.map(t=>({id:t.id,x:t.position.x,y:t.position.y+1.65,z:t.position.z,yaw:t.group.rotation.y,alive:t.alive}))]}actor(t){return t==="player"?this.player:this.bots.find(e=>e.id===t)}actorName(t){return t==="player"?"YOU":this.bots.find(e=>e.id===t)?.name??t}damageActor(t,e,i){const s=this.actor(e.targetId),r=this.actor(t);if(!s?.alive||!r)return;const a=Math.min(s.hp,e.damage);s.damage(a);const o=!s.alive;if(e.targetId==="player"&&(this.feedback.damage(a,r.position,this.player.position,new R(-Math.sin(this.player.yaw),0,-Math.cos(this.player.yaw))),o)){for(const c of this.weapons.values())c.clearBoost();this.dead=!0,this.resetInput(),this.killer=this.actorName(t),this.mode.onDeath()}return o&&(this.status.delete(e.targetId),this.respawn.kill(e.targetId),t==="player"&&(this.mode.onKill(),this.kill=.3,this.scanner||(this.scanner=!0,this.radar.parentElement.hidden=!1,this.showNotice("光譜掃描儀已啟用"))),this.battle.kill(this.killTracker.record({id:t,name:this.actorName(t),alive:r.alive},{id:e.targetId,name:this.actorName(e.targetId)},i,e.headshot,this.elapsed*1e3))),{...e,damage:a,killed:o}}shootActor(t,e,i,s,r){const a=ad(e,i.toArray(),s.toArray(),this.actors().filter(u=>u.id!==t),Math.random,Qr(this.elapsed),t==="player"&&this.aiming,t==="player"?this.weapons.get(e).level:1),o=`solo:shot:${++this.shotSequence}`,c={...a,eventId:o,id:t,weapon:e,origin:i.toArray(),dir:s.toArray()};this.effects.play(c,r,!0,t==="player");const l=[];for(const u of a.hits){const d=this.damageActor(t,u,e);if(d&&(l.push(d),!d.killed&&(e==="ice"||e==="flame"))){const h=this.status.get(u.targetId)??{slowUntil:0};e==="ice"?h.slowUntil=this.elapsed+1.25:h.burn={damage:Math.round(4*Ba(this.weapons.get(e).level)),attackerId:t,nextTick:h.burn?.nextTick??this.elapsed+.25,expiresAt:this.elapsed+2},this.status.set(u.targetId,h)}}t==="player"&&l.length&&(this.hit=.12,this.battle.hit({eventId:o,weapon:e,hits:l}))}showNotice(t){this.notice=t,this.noticeT=2.7}updatePrism(t){if(this.prismOrbs.size){const e=Qr(this.elapsed),i=this.actors();for(const[s,r]of this.prismOrbs){const a=Ip(r,t,i,e);if(!a)continue;this.prismOrbs.delete(s),this.prism.impact(s,a.impact.position);const o=[];for(const c of a.hits){const l=this.damageActor("player",c,"prism");l&&o.push(l)}o.length&&(this.hit=.12,this.battle.hit({eventId:s,weapon:"prism",hits:o}))}this.prism.syncOrbs([...this.prismOrbs.values()])}this.owned.has("prism")&&this.player.alive?this.prism.aura("player",this.player.position.clone().add(new R(0,-1.65,0)),!0):this.prism.retainAuras(new Set),this.prism.update(t,!1,this.elapsed)}updateRadar(t){if(!this.scanner||(this.radarTimer+=t,this.radarTimer<1/30))return;this.radarTimer%=1/30;const e=this.pickups.map(({id:i,position:s,mesh:r})=>({id:i,x:s.x,y:s.y-.9,z:s.z,available:r.visible}));fy(this.radar,e,this.owned,{...this.player.position,yaw:this.player.yaw})}fire(){this.shake=this.active==="prism"?.12:.035,this.gun.position.z=this.shake*2,this.gun.rotation.x=this.shake,this.cam.position.copy(this.player.position),this.cam.rotation.set(this.player.pitch,this.player.yaw,0,"YXZ"),this.cam.updateMatrixWorld(!0);const t=ic(this.player.yaw,this.player.pitch),e=Qs(this.gunFlash,this.active);if(this.active==="prism"){const i=cd(`solo:shot:${++this.shotSequence}`,"player",this.player.position.toArray(),t);this.prismOrbs.set(i.id,i),this.prism.launch(i,e)}else this.shootActor("player",this.active,this.player.position.clone(),new R(...t),e)}updateStatuses(t){this.statusTimer+=t;const e=this.statusTimer>=.08;e&&(this.statusTimer=0);for(const[i,s]of this.status){const r=this.actor(i);if(!r?.alive){this.status.delete(i);continue}for(;s.burn&&s.burn.nextTick<=this.elapsed&&s.burn.nextTick<=s.burn.expiresAt;){const a=s.burn.attackerId;s.burn.nextTick+=.25;const o=this.damageActor(a,{targetId:i,damage:s.burn.damage,headshot:!1,position:[r.position.x,r.position.y+(i==="player"?-.4:1.22),r.position.z]},"flame");if(o&&a==="player"&&this.battle.hit({eventId:`solo:burn:${++this.shotSequence}`,weapon:"flame",hits:[o]}),!r.alive)break}s.burn&&this.elapsed>=s.burn.expiresAt&&(s.burn=void 0),e&&r.alive&&(s.burn||s.slowUntil>this.elapsed)&&this.effects.status(r.position.clone().add(new R(0,i==="player"?-.4:1.22,0)),s.burn?"flame":"ice"),!s.burn&&s.slowUntil<=this.elapsed&&this.status.delete(i)}}update(t){this.elapsed+=t,this.desktop?.update(),this.updateStatuses(t);const e=this.input.getState();if(e.switchWeapon){const l=xi[e.switchWeapon-1];l&&this.owned.has(l)&&(this.input.set({aim:!1}),e.aim=!1,this.active=l)}const i=this.weapons.get(this.active);e.reload&&i.reload();const s=this.armory.isOpen||!!this.settings?.isOpen;(this.active!=="sniper"||i.reloading||!this.player.alive||s)&&(this.input.set({aim:!1}),e.aim=!1),s&&(e.shoot=!1,this.input.clearCombat()),this.aiming=this.scope.update(this.active,e,this.player.alive,i.reloading,s),this.aiming&&(e.lookX*=.25,e.lookY*=.25),this.controller.update(this.player,e,t,this.collision,(this.status.get("player")?.slowUntil??0)>this.elapsed?.65:1,this.elapsed-t),this.arena.update(this.elapsed,this.elapsed,this.renderer),this.updatePrism(t);for(const[l,u]of this.weapons)u.update(t,l===this.active&&!s&&e.shoot&&this.player.alive).fired&&this.fire();this.pickups.forEach(l=>{if(l.mesh.rotation.y+=t*2,l.cooldown>0)l.cooldown-=t,l.cooldown<=0&&this.respawnPickup(l);else if(this.player.alive&&this.player.position.distanceTo(l.position)<2){const u=this.weapons.get(l.id).collect(this.owned.has(l.id));if(!u)return;if(this.owned.add(l.id),Sp(this.owned)){this.owned.add("prism");const{x:d,y:h,z:f}=this.player.position;this.prism.unlock(d,h-1.65,f),this.showNotice("稜鏡脈衝砲已解鎖")}l.cooldown=30,l.mesh.visible=!1,this.pickupFeedback.push(u),this.armory.render(this.active)}}),this.updateRadar(t);const r=new Set(this.bots.filter(l=>this.ai.canSee(l,this.player,this.collision,38)).sort((l,u)=>l.position.distanceTo(this.player.position)-u.position.distanceTo(this.player.position)).slice(0,3).map(l=>l.id));this.bots.forEach(l=>{const u=l.position.clone();this.ai.update(l,this.player,(this.status.get(l.id)?.slowUntil??0)>this.elapsed?t*.65:t,this.collision,this.arena.waypoints,r.has(l.id),d=>{const h=l.position.clone().add(new R(0,1.65,0)),f=this.player.position.clone().add(new R(0,-.43,0));d||f.add(new R((Math.random()<.5?-1:1)*(1.3+Math.random()),Math.random()*.5,0)),this.shootActor(l.id,"ar",h,f.sub(h).normalize(),l.muzzlePosition())}),l.updateVisual(t,l.position.distanceToSquared(u)>.001,l.alive&&this.player.alive)}),this.respawn.update(t,l=>{if(l==="player"){this.player.respawn(this.spawns.choose(this.bots));for(const u of this.weapons.values())u.refill();this.status.delete("player"),this.resetInput(),this.dead=!1}else{const u=this.bots.find(d=>d.id===l);u&&u.respawn(...this.spawns.choose([this.player,...this.bots.filter(d=>d!==u)],u.id))}}),this.hit=Math.max(0,this.hit-t),this.kill=Math.max(0,this.kill-t),this.noticeT=Math.max(0,this.noticeT-t),this.effects.update(t),this.feedback.update(t,this.player.hp),this.cam.position.copy(this.player.position),this.cam.rotation.set(this.player.pitch,this.player.yaw,0,"YXZ"),this.gun.position.z=this.shake*2,this.gun.rotation.x=this.shake,this.shake=Math.max(0,this.shake-t*.5),this.armory.render(this.active),this.appearance.update(this.active,i.level),this.pickupFeedback.update(t),this.hud.render({quickReloadSeconds:Math.ceil(i.quickReloadSeconds),level:i.level,capacity:i.capacity,hp:this.player.hp,ammo:i.ammo,reserve:i.reserve,label:i.spec.label,notice:this.noticeT?this.notice:"",kills:this.mode.kills,deaths:this.mode.deaths,dead:this.dead,killer:this.killer,hit:this.hit>0,kill:this.kill>0,reloading:i.reloading}),this.cam.updateMatrixWorld(!0),this.battle.update(t,this.cam);const a=Qr(this.elapsed),o=this.actors().filter(l=>l.id!=="player");this.pickupPreview.update(this.pickups.map(l=>({id:l.id,position:l.position,available:l.mesh.visible,owned:this.owned.has(l.id),state:this.weapons.get(l.id)})),this.cam.position,a,this.player.alive&&!s),this.effects.updateLocalMuzzle(Qs(this.gunFlash,this.active),this.active,this.cam.position,a),this.effects.localFlame(this.player.alive&&!s&&e.shoot&&this.active==="flame"&&!i.reloading,Qs(this.gunFlash,this.active),this.cam.position,new R(...ic(this.player.yaw,this.player.pitch)),a,t,o,i.level);const c=af({x:this.player.position.x,y:this.player.position.y,z:this.player.position.z,yaw:this.player.yaw,pitch:this.player.pitch});this.aimFeedback.update(s||!this.player.alive?"neutral":rf(this.active,c.origin,c.direction,o,a,i.level),this.player.alive&&!s),this.scope.render(this.renderer,this.scene,this.cam)}start(){this.loop.start()}dispose(){this.prism.dispose(),this.prismOrbs.clear(),this.pickupPreview.dispose(),this.pickupFeedback.dispose(),this.hud.dispose(),this.aimFeedback.dispose();for(const t of this.bots)t.dispose();this.scope.dispose(),this.arena.dispose(),this.settings?.dispose(),this.root.onclick=null,this.loop.stop(),this.stopResize(),this.desktop?.dispose(),this.mobile?.dispose(),this.armory.dispose(),this.effects.dispose(),this.battle.dispose(),this.status.clear(),this.killTracker.reset(),this.feedback.dispose(),on(this.scene),this.scene.clear(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.root.replaceChildren()}}const Qc=1500,By=100,Pf=200;function zy(n){const t=[...n].sort((i,s)=>s.score-i.score);let e=0;return t.map((i,s)=>((s===0||i.score!==t[s-1].score)&&(e=s+1),{...i,rank:e}))}const Xi=Object.create(null);Xi.open="0";Xi.close="1";Xi.ping="2";Xi.pong="3";Xi.message="4";Xi.upgrade="5";Xi.noop="6";const ca=Object.create(null);Object.keys(Xi).forEach(n=>{ca[Xi[n]]=n});const tl={type:"error",data:"parser error"},Lf=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",If=typeof ArrayBuffer=="function",Df=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n&&n.buffer instanceof ArrayBuffer,Hl=({type:n,data:t},e,i)=>Lf&&t instanceof Blob?e?i(t):Lu(t,i):If&&(t instanceof ArrayBuffer||Df(t))?e?i(t):Lu(new Blob([t]),i):i(Xi[n]+(t||"")),Lu=(n,t)=>{const e=new FileReader;return e.onload=function(){const i=e.result.split(",")[1];t("b"+(i||""))},e.readAsDataURL(n)};function Iu(n){return n instanceof Uint8Array?n:n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength)}let Oo;function Hy(n,t){if(Lf&&n.data instanceof Blob)return n.data.arrayBuffer().then(Iu).then(t);if(If&&(n.data instanceof ArrayBuffer||Df(n.data)))return t(Iu(n.data));Hl(n,!1,e=>{Oo||(Oo=new TextEncoder),t(Oo.encode(e))})}const Du="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",$s=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let n=0;n<Du.length;n++)$s[Du.charCodeAt(n)]=n;const Gy=n=>{let t=n.length*.75,e=n.length,i,s=0,r,a,o,c;n[n.length-1]==="="&&(t--,n[n.length-2]==="="&&t--);const l=new ArrayBuffer(t),u=new Uint8Array(l);for(i=0;i<e;i+=4)r=$s[n.charCodeAt(i)],a=$s[n.charCodeAt(i+1)],o=$s[n.charCodeAt(i+2)],c=$s[n.charCodeAt(i+3)],u[s++]=r<<2|a>>4,u[s++]=(a&15)<<4|o>>2,u[s++]=(o&3)<<6|c&63;return l},Vy=typeof ArrayBuffer=="function",Gl=(n,t)=>{if(typeof n!="string")return{type:"message",data:Nf(n,t)};const e=n.charAt(0);return e==="b"?{type:"message",data:Wy(n.substring(1),t)}:ca[e]?n.length>1?{type:ca[e],data:n.substring(1)}:{type:ca[e]}:tl},Wy=(n,t)=>{if(Vy){const e=Gy(n);return Nf(e,t)}else return{base64:!0,data:n}},Nf=(n,t)=>{switch(t){case"blob":return n instanceof Blob?n:new Blob([n]);case"arraybuffer":default:return n instanceof ArrayBuffer?n:n.buffer}},Uf="",Xy=(n,t)=>{const e=n.length,i=new Array(e);let s=0;n.forEach((r,a)=>{Hl(r,!1,o=>{i[a]=o,++s===e&&t(i.join(Uf))})})},qy=(n,t)=>{const e=n.split(Uf),i=[];for(let s=0;s<e.length;s++){const r=Gl(e[s],t);if(i.push(r),r.type==="error")break}return i};function Yy(){return new TransformStream({transform(n,t){Hy(n,e=>{const i=e.length;let s;if(i<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,i);else if(i<65536){s=new Uint8Array(3);const r=new DataView(s.buffer);r.setUint8(0,126),r.setUint16(1,i)}else{s=new Uint8Array(9);const r=new DataView(s.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(i))}n.data&&typeof n.data!="string"&&(s[0]|=128),t.enqueue(s),t.enqueue(e)})}})}let ko;function qr(n){return n.reduce((t,e)=>t+e.length,0)}function Yr(n,t){if(n[0].length===t)return n.shift();const e=new Uint8Array(t);let i=0;for(let s=0;s<t;s++)e[s]=n[0][i++],i===n[0].length&&(n.shift(),i=0);return n.length&&i<n[0].length&&(n[0]=n[0].slice(i)),e}function $y(n,t){ko||(ko=new TextDecoder);const e=[];let i=0,s=-1,r=!1;return new TransformStream({transform(a,o){for(e.push(a);;){if(i===0){if(qr(e)<1)break;const c=Yr(e,1);r=(c[0]&128)===128,s=c[0]&127,s<126?i=3:s===126?i=1:i=2}else if(i===1){if(qr(e)<2)break;const c=Yr(e,2);s=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),i=3}else if(i===2){if(qr(e)<8)break;const c=Yr(e,8),l=new DataView(c.buffer,c.byteOffset,c.length),u=l.getUint32(0);if(u>Math.pow(2,21)-1){o.enqueue(tl);break}s=u*Math.pow(2,32)+l.getUint32(4),i=3}else{if(qr(e)<s)break;const c=Yr(e,s);o.enqueue(Gl(r?c:ko.decode(c),t)),i=0}if(s===0||s>n){o.enqueue(tl);break}}}})}const Ff=4;function De(n){if(n)return Zy(n)}function Zy(n){for(var t in De.prototype)n[t]=De.prototype[t];return n}De.prototype.on=De.prototype.addEventListener=function(n,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+n]=this._callbacks["$"+n]||[]).push(t),this};De.prototype.once=function(n,t){function e(){this.off(n,e),t.apply(this,arguments)}return e.fn=t,this.on(n,e),this};De.prototype.off=De.prototype.removeListener=De.prototype.removeAllListeners=De.prototype.removeEventListener=function(n,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var e=this._callbacks["$"+n];if(!e)return this;if(arguments.length==1)return delete this._callbacks["$"+n],this;for(var i,s=0;s<e.length;s++)if(i=e[s],i===t||i.fn===t){e.splice(s,1);break}return e.length===0&&delete this._callbacks["$"+n],this};De.prototype.emit=function(n){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),e=this._callbacks["$"+n],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(e){e=e.slice(0);for(var i=0,s=e.length;i<s;++i)e[i].apply(this,t)}return this};De.prototype.emitReserved=De.prototype.emit;De.prototype.listeners=function(n){return this._callbacks=this._callbacks||{},this._callbacks["$"+n]||[]};De.prototype.hasListeners=function(n){return!!this.listeners(n).length};const Za=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,e)=>e(t,0),ui=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Ky="arraybuffer";function Of(n,...t){return t.reduce((e,i)=>(n.hasOwnProperty(i)&&(e[i]=n[i]),e),{})}const jy=ui.setTimeout,Jy=ui.clearTimeout;function Ka(n,t){t.useNativeTimers?(n.setTimeoutFn=jy.bind(ui),n.clearTimeoutFn=Jy.bind(ui)):(n.setTimeoutFn=ui.setTimeout.bind(ui),n.clearTimeoutFn=ui.clearTimeout.bind(ui))}const Qy=1.33;function tM(n){return typeof n=="string"?eM(n):Math.ceil((n.byteLength||n.size)*Qy)}function eM(n){let t=0,e=0;for(let i=0,s=n.length;i<s;i++)t=n.charCodeAt(i),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(i++,e+=4);return e}function kf(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function iM(n){let t="";for(let e in n)n.hasOwnProperty(e)&&(t.length&&(t+="&"),t+=encodeURIComponent(e)+"="+encodeURIComponent(n[e]));return t}function nM(n){let t={},e=n.split("&");for(let i=0,s=e.length;i<s;i++){let r=e[i].split("=");t[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return t}class sM extends Error{constructor(t,e,i){super(t),this.description=e,this.context=i,this.type="TransportError"}}class Vl extends De{constructor(t){super(),this.writable=!1,Ka(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,e,i){return super.emitReserved("error",new sM(t,e,i)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const e=Gl(t,this.socket.binaryType);this.onPacket(e)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,e={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(e)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const e=iM(t);return e.length?"?"+e:""}}class rM extends Vl{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const e=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let i=0;this._polling&&(i++,this.once("pollComplete",function(){--i||e()})),this.writable||(i++,this.once("drain",function(){--i||e()}))}else e()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const e=i=>{if(this.readyState==="opening"&&i.type==="open"&&this.onOpen(),i.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(i)};qy(t,this.socket.binaryType).forEach(e),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,Xy(t,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",e=this.query||{};return this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=kf()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.createUri(t,e)}}let Bf=!1;try{Bf=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const aM=Bf;function oM(){}class cM extends rM{constructor(t){if(super(t),typeof location<"u"){const e=location.protocol==="https:";let i=location.port;i||(i=e?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||i!==t.port}}doWrite(t,e){const i=this.request({method:"POST",data:t});i.on("success",e),i.on("error",(s,r)=>{this.onError("xhr post error",s,r)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(e,i)=>{this.onError("xhr poll error",e,i)}),this.pollXhr=t}}class zi extends De{constructor(t,e,i){super(),this.createRequest=t,Ka(this,i),this._opts=i,this._method=i.method||"GET",this._uri=e,this._data=i.data!==void 0?i.data:null,this._create()}_create(){var t;const e=Of(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this._opts.xd;const i=this._xhr=this.createRequest(e);try{i.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){i.setDisableHeaderCheck&&i.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&i.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{i.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{i.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(i),"withCredentials"in i&&(i.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(i.timeout=this._opts.requestTimeout),i.onreadystatechange=()=>{var s;i.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(i.getResponseHeader("set-cookie"))),i.readyState===4&&(i.status===200||i.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof i.status=="number"?i.status:0)},0))},i.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=zi.requestsCount++,zi.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=oM,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete zi.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}zi.requestsCount=0;zi.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Nu);else if(typeof addEventListener=="function"){const n="onpagehide"in ui?"pagehide":"unload";addEventListener(n,Nu,!1)}}function Nu(){for(let n in zi.requests)zi.requests.hasOwnProperty(n)&&zi.requests[n].abort()}const lM=(function(){const n=zf({xdomain:!1});return n&&n.responseType!==null})();class hM extends cM{constructor(t){super(t);const e=t&&t.forceBase64;this.supportsBinary=lM&&!e}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new zi(zf,this.uri(),t)}}function zf(n){const t=n.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||aM))return new XMLHttpRequest}catch{}if(!t)try{return new ui[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Hf=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class uM extends Vl{get name(){return"websocket"}doOpen(){const t=this.uri(),e=this.opts.protocols,i=Hf?{}:Of(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(i.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,e,i)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const i=t[e],s=e===t.length-1;Hl(i,this.supportsBinary,r=>{try{this.doWrite(i,r)}catch{}s&&Za(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",e=this.query||{};return this.opts.timestampRequests&&(e[this.opts.timestampParam]=kf()),this.supportsBinary||(e.b64=1),this.createUri(t,e)}}const Bo=ui.WebSocket||ui.MozWebSocket;class dM extends uM{createSocket(t,e,i){return Hf?new Bo(t,e,i):e?new Bo(t,e):new Bo(t)}doWrite(t,e){this.ws.send(e)}}class fM extends Vl{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const e=$y(Number.MAX_SAFE_INTEGER,this.socket.binaryType),i=t.readable.pipeThrough(e).getReader(),s=Yy();s.readable.pipeTo(t.writable),this._writer=s.writable.getWriter();const r=()=>{i.read().then(({done:o,value:c})=>{o||(this.onPacket(c),r())}).catch(o=>{})};r();const a={type:"open"};this.query.sid&&(a.data=`{"sid":"${this.query.sid}"}`),this._writer.write(a).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const i=t[e],s=e===t.length-1;this._writer.write(i).then(()=>{s&&Za(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const pM={websocket:dM,webtransport:fM,polling:hM},mM=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,gM=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function el(n){if(n.length>8e3)throw"URI too long";const t=n,e=n.indexOf("["),i=n.indexOf("]");e!=-1&&i!=-1&&(n=n.substring(0,e)+n.substring(e,i).replace(/:/g,";")+n.substring(i,n.length));let s=mM.exec(n||""),r={},a=14;for(;a--;)r[gM[a]]=s[a]||"";return e!=-1&&i!=-1&&(r.source=t,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=vM(r,r.path),r.queryKey=_M(r,r.query),r}function vM(n,t){const e=/\/{2,9}/g,i=t.replace(e,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&i.splice(0,1),t.slice(-1)=="/"&&i.splice(i.length-1,1),i}function _M(n,t){const e={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(i,s,r){s&&(e[s]=r)}),e}const il=typeof addEventListener=="function"&&typeof removeEventListener=="function",la=[];il&&addEventListener("offline",()=>{la.forEach(n=>n())},!1);class Sn extends De{constructor(t,e){if(super(),this.binaryType=Ky,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(e=t,t=null),t){const i=el(t);e.hostname=i.host,e.secure=i.protocol==="https"||i.protocol==="wss",e.port=i.port,i.query&&(e.query=i.query)}else e.host&&(e.hostname=el(e.host).host);Ka(this,e),this.secure=e.secure!=null?e.secure:typeof location<"u"&&location.protocol==="https:",e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=e.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},e.transports.forEach(i=>{const s=i.prototype.name;this.transports.push(s),this._transportsByName[s]=i}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},e),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=nM(this.opts.query)),il&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},la.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const e=Object.assign({},this.opts.query);e.EIO=Ff,e.transport=t,this.id&&(e.sid=this.id);const i=Object.assign({},this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](i)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&Sn.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const e=this.createTransport(t);e.open(),this.setTransport(e)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",e=>this._onClose("transport close",e))}onOpen(){this.readyState="open",Sn.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const e=new Error("server error");e.code=t.data,this._onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let i=0;i<this.writeBuffer.length;i++){const s=this.writeBuffer[i].data;if(s&&(e+=tM(s)),i>0&&e>this._maxPayload)return this.writeBuffer.slice(0,i);e+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,Za(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,e,i){return this._sendPacket("message",t,e,i),this}send(t,e,i){return this._sendPacket("message",t,e,i),this}_sendPacket(t,e,i,s){if(typeof e=="function"&&(s=e,e=void 0),typeof i=="function"&&(s=i,i=null),this.readyState==="closing"||this.readyState==="closed")return;i=i||{},i.compress=i.compress!==!1;const r={type:t,data:e,options:i};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),s&&this.once("flush",s),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},i=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?i():t()}):this.upgrading?i():t()),this}_onError(t){if(Sn.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),il&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const i=la.indexOf(this._offlineEventListener);i!==-1&&la.splice(i,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this._prevBufferLen=0}}}Sn.protocol=Ff;class xM extends Sn{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let e=this.createTransport(t),i=!1;Sn.priorWebsocketSuccess=!1;const s=()=>{i||(e.send([{type:"ping",data:"probe"}]),e.once("packet",d=>{if(!i)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",e),!e)return;Sn.priorWebsocketSuccess=e.name==="websocket",this.transport.pause(()=>{i||this.readyState!=="closed"&&(u(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())})}else{const h=new Error("probe error");h.transport=e.name,this.emitReserved("upgradeError",h)}}))};function r(){i||(i=!0,u(),e.close(),e=null)}const a=d=>{const h=new Error("probe error: "+d);h.transport=e.name,r(),this.emitReserved("upgradeError",h)};function o(){a("transport closed")}function c(){a("socket closed")}function l(d){e&&d.name!==e.name&&r()}const u=()=>{e.removeListener("open",s),e.removeListener("error",a),e.removeListener("close",o),this.off("close",c),this.off("upgrading",l)};e.once("open",s),e.once("error",a),e.once("close",o),this.once("close",c),this.once("upgrading",l),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{i||e.open()},200):e.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const e=[];for(let i=0;i<t.length;i++)~this.transports.indexOf(t[i])&&e.push(t[i]);return e}}let yM=class extends xM{constructor(t,e={}){const i=typeof t=="object",s=i?{...t}:{...e};(!s.transports||s.transports&&typeof s.transports[0]=="string")&&(s.transports=(s.transports||["polling","websocket","webtransport"]).map(r=>pM[r]).filter(r=>!!r)),super(i?s:t,s)}};function MM(n,t="",e){let i=n;e=e||typeof location<"u"&&location,n==null&&(n=e.protocol+"//"+e.host),typeof n=="string"&&(n.charAt(0)==="/"&&(n.charAt(1)==="/"?n=e.protocol+n:n=e.host+n),/^(https?|wss?):\/\//.test(n)||(typeof e<"u"?n=e.protocol+"//"+n:n="https://"+n),i=el(n)),i.port||(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";const r=i.host.indexOf(":")!==-1?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+r+":"+i.port+t,i.href=i.protocol+"://"+r+(e&&e.port===i.port?"":":"+i.port),i}const SM=typeof ArrayBuffer=="function",wM=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n.buffer instanceof ArrayBuffer,Gf=Object.prototype.toString,bM=typeof Blob=="function"||typeof Blob<"u"&&Gf.call(Blob)==="[object BlobConstructor]",EM=typeof File=="function"||typeof File<"u"&&Gf.call(File)==="[object FileConstructor]";function Wl(n){return SM&&(n instanceof ArrayBuffer||wM(n))||bM&&n instanceof Blob||EM&&n instanceof File}function ha(n,t){if(!n||typeof n!="object")return!1;if(Array.isArray(n)){for(let e=0,i=n.length;e<i;e++)if(ha(n[e]))return!0;return!1}if(Wl(n))return!0;if(n.toJSON&&typeof n.toJSON=="function"&&arguments.length===1)return ha(n.toJSON(),!0);for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)&&ha(n[e]))return!0;return!1}function TM(n){const t=[],e=n.data,i=n;return i.data=ua(e,t),i.attachments=t.length,{packet:i,buffers:t}}function ua(n,t,e){if(!n)return n;if(Wl(n)){const i={_placeholder:!0,num:t.length};return t.push(n),i}else if(Array.isArray(n)){const i=new Array(n.length);for(let s=0;s<n.length;s++)i[s]=ua(n[s],t);return i}else if(typeof n=="object"&&!(n instanceof Date)){if(n.toJSON&&typeof n.toJSON=="function"&&!e)return ua(n.toJSON(),t,!0);const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=ua(n[s],t));return i}return n}function AM(n,t){return n.data=nl(n.data,t),delete n.attachments,n}function nl(n,t){if(!n)return n;if(n&&n._placeholder===!0){if(typeof n.num=="number"&&n.num>=0&&n.num<t.length)return t[n.num];throw new Error("illegal attachments")}else if(Array.isArray(n))for(let e=0;e<n.length;e++)n[e]=nl(n[e],t);else if(typeof n=="object")for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&(n[e]=nl(n[e],t));return n}const Vf=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],RM=5;var qt;(function(n){n[n.CONNECT=0]="CONNECT",n[n.DISCONNECT=1]="DISCONNECT",n[n.EVENT=2]="EVENT",n[n.ACK=3]="ACK",n[n.CONNECT_ERROR=4]="CONNECT_ERROR",n[n.BINARY_EVENT=5]="BINARY_EVENT",n[n.BINARY_ACK=6]="BINARY_ACK"})(qt||(qt={}));class CM{constructor(t){this.replacer=t}encode(t){return(t.type===qt.EVENT||t.type===qt.ACK)&&ha(t)?this.encodeAsBinary({type:t.type===qt.EVENT?qt.BINARY_EVENT:qt.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let e=""+t.type;return(t.type===qt.BINARY_EVENT||t.type===qt.BINARY_ACK)&&(e+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(e+=t.nsp+","),t.id!=null&&(e+=t.id),t.data!=null&&(e+=JSON.stringify(t.data,this.replacer)),e}encodeAsBinary(t){const e=TM(t),i=this.encodeAsString(e.packet),s=e.buffers;return s.unshift(i),s}}class Xl extends De{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let e;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");e=this.decodeString(t);const i=e.type===qt.BINARY_EVENT;i||e.type===qt.BINARY_ACK?(e.type=i?qt.EVENT:qt.ACK,this.reconstructor=new PM(e)):super.emitReserved("decoded",e)}else if(Wl(t)||t.base64)if(this.reconstructor)e=this.reconstructor.takeBinaryData(t),e&&(this.reconstructor=null,super.emitReserved("decoded",e));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let e=0;const i={type:Number(t.charAt(0))};if(qt[i.type]===void 0)throw new Error("unknown packet type "+i.type);if(i.type===qt.BINARY_EVENT||i.type===qt.BINARY_ACK){const r=e+1;for(;t.charAt(++e)!=="-"&&e!=t.length;);const a=t.substring(r,e);if(a!=Number(a)||t.charAt(e)!=="-")throw new Error("Illegal attachments");const o=Number(a);if(!Wf(o)||o<1)throw new Error("Illegal attachments");if(o>this.opts.maxAttachments)throw new Error("too many attachments");i.attachments=o}if(t.charAt(e+1)==="/"){const r=e+1;for(;++e&&!(t.charAt(e)===","||e===t.length););i.nsp=t.substring(r,e)}else i.nsp="/";const s=t.charAt(e+1);if(s!==""&&Number(s)==s){const r=e+1;for(;++e;){const a=t.charAt(e);if(a==null||Number(a)!=a){--e;break}if(e===t.length)break}i.id=Number(t.substring(r,e+1))}if(t.charAt(++e)){const r=this.tryParse(t.substr(e));if(Xl.isPayloadValid(i.type,r))i.data=r;else throw new Error("invalid payload")}return i}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,e){switch(t){case qt.CONNECT:return Ua(e);case qt.DISCONNECT:return e===void 0;case qt.CONNECT_ERROR:return typeof e=="string"||Ua(e);case qt.EVENT:case qt.BINARY_EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&Vf.indexOf(e[0])===-1);case qt.ACK:case qt.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class PM{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const e=AM(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function LM(n){return typeof n=="string"}const Wf=Number.isInteger||function(n){return typeof n=="number"&&isFinite(n)&&Math.floor(n)===n};function IM(n){return n===void 0||Wf(n)}function Ua(n){return Object.prototype.toString.call(n)==="[object Object]"}function DM(n,t){switch(n){case qt.CONNECT:return t===void 0||Ua(t);case qt.DISCONNECT:return t===void 0;case qt.EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&Vf.indexOf(t[0])===-1);case qt.ACK:return Array.isArray(t);case qt.CONNECT_ERROR:return typeof t=="string"||Ua(t);default:return!1}}function NM(n){return LM(n.nsp)&&IM(n.id)&&DM(n.type,n.data)}const UM=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Xl,Encoder:CM,get PacketType(){return qt},isPacketValid:NM,protocol:RM},Symbol.toStringTag,{value:"Module"}));function yi(n,t,e){return n.on(t,e),function(){n.off(t,e)}}const FM=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Xf extends De{constructor(t,e,i){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=e,i&&i.auth&&(this.auth=i.auth),this._opts=Object.assign({},i),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[yi(t,"open",this.onopen.bind(this)),yi(t,"packet",this.onpacket.bind(this)),yi(t,"error",this.onerror.bind(this)),yi(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...e){var i,s,r;if(FM.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(e.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(e),this;const a={type:qt.EVENT,data:e};if(a.options={},a.options.compress=this.flags.compress!==!1,typeof e[e.length-1]=="function"){const u=this.ids++,d=e.pop();this._registerAckCallback(u,d),a.id=u}const o=(s=(i=this.io.engine)===null||i===void 0?void 0:i.transport)===null||s===void 0?void 0:s.writable,c=this.connected&&!(!((r=this.io.engine)===null||r===void 0)&&r._hasPingExpired());return this.flags.volatile&&!o||(c?(this.notifyOutgoingListeners(a),this.packet(a)):this.sendBuffer.push(a)),this.flags={},this}_registerAckCallback(t,e){var i;const s=(i=this.flags.timeout)!==null&&i!==void 0?i:this._opts.ackTimeout;if(s===void 0){this.acks[t]=e;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let o=0;o<this.sendBuffer.length;o++)this.sendBuffer[o].id===t&&this.sendBuffer.splice(o,1);e.call(this,new Error("operation has timed out"))},s),a=(...o)=>{this.io.clearTimeoutFn(r),e.apply(this,o)};a.withError=!0,this.acks[t]=a}emitWithAck(t,...e){return new Promise((i,s)=>{const r=(a,o)=>a?s(a):i(o);r.withError=!0,e.push(r),this.emit(t,...e)})}_addToQueue(t){let e;typeof t[t.length-1]=="function"&&(e=t.pop());const i={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((s,...r)=>(this._queue[0],s!==null?i.tryCount>this._opts.retries&&(this._queue.shift(),e&&e(s)):(this._queue.shift(),e&&e(null,...r)),i.pending=!1,this._drainQueue())),this._queue.push(i),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const e=this._queue[0];e.pending&&!t||(e.pending=!0,e.tryCount++,this.flags=e.flags,this.emit.apply(this,e.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:qt.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(i=>String(i.id)===t)){const i=this.acks[t];delete this.acks[t],i.withError&&i.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case qt.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case qt.EVENT:case qt.BINARY_EVENT:this.onevent(t);break;case qt.ACK:case qt.BINARY_ACK:this.onack(t);break;case qt.DISCONNECT:this.ondisconnect();break;case qt.CONNECT_ERROR:this.destroy();const i=new Error(t.data.message);i.data=t.data.data,this.emitReserved("connect_error",i);break}}onevent(t){const e=t.data||[];t.id!=null&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const e=this._anyListeners.slice();for(const i of e)i.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const e=this;let i=!1;return function(...s){i||(i=!0,e.packet({type:qt.ACK,id:t,data:s}))}}onack(t){const e=this.acks[t.id];typeof e=="function"&&(delete this.acks[t.id],e.withError&&t.data.unshift(null),e.apply(this,t.data))}onconnect(t,e){this.id=t,this.recovered=e&&this._pid===e,this._pid=e,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:qt.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const e=this._anyListeners;for(let i=0;i<e.length;i++)if(t===e[i])return e.splice(i,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const e=this._anyOutgoingListeners;for(let i=0;i<e.length;i++)if(t===e[i])return e.splice(i,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const e=this._anyOutgoingListeners.slice();for(const i of e)i.apply(this,t.data)}}}function Ps(n){n=n||{},this.ms=n.min||100,this.max=n.max||1e4,this.factor=n.factor||2,this.jitter=n.jitter>0&&n.jitter<=1?n.jitter:0,this.attempts=0}Ps.prototype.duration=function(){var n=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),e=Math.floor(t*this.jitter*n);n=(Math.floor(t*10)&1)==0?n-e:n+e}return Math.min(n,this.max)|0};Ps.prototype.reset=function(){this.attempts=0};Ps.prototype.setMin=function(n){this.ms=n};Ps.prototype.setMax=function(n){this.max=n};Ps.prototype.setJitter=function(n){this.jitter=n};class sl extends De{constructor(t,e){var i;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.opts=e,Ka(this,e),this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor((i=e.randomizationFactor)!==null&&i!==void 0?i:.5),this.backoff=new Ps({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(e.timeout==null?2e4:e.timeout),this._readyState="closed",this.uri=t;const s=e.parser||UM;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=e.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var e;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(e=this.backoff)===null||e===void 0||e.setMin(t),this)}randomizationFactor(t){var e;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(e=this.backoff)===null||e===void 0||e.setJitter(t),this)}reconnectionDelayMax(t){var e;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(e=this.backoff)===null||e===void 0||e.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new yM(this.uri,this.opts);const e=this.engine,i=this;this._readyState="opening",this.skipReconnect=!1;const s=yi(e,"open",function(){i.onopen(),t&&t()}),r=o=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",o),t?t(o):this.maybeReconnectOnOpen()},a=yi(e,"error",r);if(this._timeout!==!1){const o=this._timeout,c=this.setTimeoutFn(()=>{s(),r(new Error("timeout")),e.close()},o);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(s),this.subs.push(a),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(yi(t,"ping",this.onping.bind(this)),yi(t,"data",this.ondata.bind(this)),yi(t,"error",this.onerror.bind(this)),yi(t,"close",this.onclose.bind(this)),yi(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(e){this.onclose("parse error",e)}}ondecoded(t){Za(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,e){let i=this.nsps[t];return i?this._autoConnect&&!i.active&&i.connect():(i=new Xf(this,t,e),this.nsps[t]=i),i}_destroy(t){const e=Object.keys(this.nsps);for(const i of e)if(this.nsps[i].active)return;this._close()}_packet(t){const e=this.encoder.encode(t);for(let i=0;i<e.length;i++)this.engine.write(e[i],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,e){var i;this.cleanup(),(i=this.engine)===null||i===void 0||i.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const e=this.backoff.duration();this._reconnecting=!0;const i=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(s=>{s?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",s)):t.onreconnect()}))},e);this.opts.autoUnref&&i.unref(),this.subs.push(()=>{this.clearTimeoutFn(i)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const Vs={};function da(n,t){typeof n=="object"&&(t=n,n=void 0),t=t||{};const e=MM(n,t.path||"/socket.io"),i=e.source,s=e.id,r=e.path,a=Vs[s]&&r in Vs[s].nsps,o=t.forceNew||t["force new connection"]||t.multiplex===!1||a;let c;return o?c=new sl(i,t):(Vs[s]||(Vs[s]=new sl(i,t)),c=Vs[s]),e.query&&!t.query&&(t.query=e.queryKey),c.socket(e.path,t)}Object.assign(da,{Manager:sl,Socket:Xf,io:da,connect:da});function rl(){const n=zt.useId(),t=zt.useSyncExternalStore(gf,$a);return O.jsxs("section",{className:"co-sensitivity","aria-label":"視角設定",children:[O.jsxs("label",{htmlFor:n,children:["視角靈敏度 ",O.jsxs("output",{htmlFor:n,children:[t.toFixed(1)," 倍"]})]}),O.jsx("input",{id:n,type:"range",min:Bl,max:zl,step:ff,value:t,"aria-valuetext":`${t.toFixed(1)} 倍`,onChange:e=>Na(Number(e.target.value))}),O.jsx("p",{children:"滑鼠與觸控共用倍率，水平與垂直同步調整；1 倍為原本手感。"}),O.jsx("button",{type:"button",onClick:()=>Na(cr),children:"恢復預設（2 倍）"})]})}class OM{life;at=-1/0;hp;fatal=!1;sync(t){this.life!==t&&(this.life=t,this.at=-1/0,this.hp=void 0,this.fatal=!1)}accept(t,e){return this.sync(e),t.life!==void 0&&t.life!==e||!Number.isFinite(t.hp)||t.hp<0||this.fatal||t.serverTime!==void 0&&(!Number.isFinite(t.serverTime)||t.serverTime<this.at)?!1:(this.at=t.serverTime??this.at,this.hp=t.hp,this.fatal=t.hp===0,!0)}reconcile(t,e){return this.sync(t.life),this.fatal?{...t,hp:0,alive:!1}:this.hp!==void 0&&e<this.at?{...t,hp:this.hp}:t}}const Ni={name:"虛空騎士",warningMs:1e4,location:{x:12,y:0,z:8},locationLabel:"地圖中央 1F，中央掩體東南側",enrageRate:1.22,alliedHp:3e3,collapseMs:900};[[80,20],[72,-82],[-24,-96],[-104,-33],[-78,72],[-16,84],[48,84],[12,8]].map(([n,t])=>({x:n,y:0,z:t}));const Uu={durationMs:6e4,speed:1.1},kM="void-warden",Ce={slash:{name:"三連斬",duration:1970,impact:[500,990,1640],range:7,angle:Math.PI*5/6,damage:22,recovery:780},dash:{name:"高速突刺",duration:1040,windup:680,range:16,width:1.6,damage:34,recovery:950},leap:{name:"跳躍下劈",duration:1250,lift:360,windup:690,range:12,radius:8,damage:40,recovery:900},burst:{name:"感染爆發",duration:1370,launch:790,impact:1220,radius:2.8,range:13,count:10,width:.82,damage:28,recovery:950}},Ae={cracks:430,chains:880,reveal:1580,breakChains:3e3,land:3650,title:4520,finish:5250,titleDuration:1750},Fu=n=>n?.state==="DESPAWN"?null:n?.ownerId??null,BM=(n,t)=>n.ownerId!==t&&n.state!=="SPAWN"&&n.state!=="DEFEATED"&&n.state!=="ALLIED"&&n.state!=="DESPAWN",zM=(n,t,e)=>(n>e?.65:1)*(t>e&&t-Uu.durationMs<=e?Uu.speed:1),Hi=1/60,al=250;class HM{accumulator=0;get alpha(){return this.accumulator/Hi}reset(){this.accumulator=0}advance(t,e){const i=this.accumulator+Math.max(0,t),s=Math.max(0,i-al/1e3);this.accumulator=Math.min(i,al/1e3);let r=0;for(;this.accumulator+1e-10>=Hi;)this.accumulator=Math.max(0,this.accumulator-Hi),e(),r++;return{steps:r,dropped:s}}}function qf(n,t,e,i,s,r=0,a=0){n.yaw=t.yaw,n.pitch=t.pitch,ml(n,{...t,lookX:0,lookY:0},Hi,e,zM(r,a,s),i)}function GM(n,t,e,i,s,r=0,a=0){for(const o of t)qf(n,o,e,i,s+Hi*1e3,r,a),i+=Hi,s+=Hi*1e3;return i}class VM{constructor(t=600){this.capacity=t}metrics=new Map;record(t,e){if(!Number.isFinite(e)||e<0)return;let i=this.metrics.get(t);i||(i={values:[],cursor:0,count:0,sum:0,max:0},this.metrics.set(t,i)),i.values.length<this.capacity?i.values.push(e):(i.values[i.cursor]=e,i.cursor=(i.cursor+1)%this.capacity),i.count++,i.sum+=e,i.max=Math.max(i.max,e)}summary(){return Object.fromEntries([...this.metrics].map(([t,e])=>{const i=e.values.slice().sort((r,a)=>r-a),s=r=>i[Math.max(0,Math.ceil(i.length*r)-1)]??0;return[t,{count:e.count,sum:e.sum,mean:e.sum/e.count,p50:s(.5),p95:s(.95),p99:s(.99),max:e.max,samples:i.length}]}))}reset(){this.metrics.clear()}}class WM{element;elapsed=0;combatMilliseconds=0;metrics=new VM(600);constructor(t){new URLSearchParams(location.search).get("chromaDiagnostics")==="1"&&(this.element=document.createElement("pre"),this.element.dataset.gameUi="diagnostics",this.element.setAttribute("aria-label","Network diagnostics"),Object.assign(this.element.style,{position:"absolute",top:"55px",left:"8px",zIndex:"80",pointerEvents:"none",font:"11px monospace",padding:"8px",color:"#b9ffce",background:"#001b25dd",whiteSpace:"pre-wrap"}),t.append(this.element))}record(t,e){this.element&&this.metrics.record(t,e)}beginCombatFrame(){this.combatMilliseconds=0}measure(t,e){if(!this.element)return e();const i=performance.now();try{return e()}finally{const s=performance.now()-i;this.combatMilliseconds+=s,this.record(t,s)}}endCombatFrame(){this.record("combatCPU_ms",this.combatMilliseconds)}update(t,e){if(!this.element||(this.elapsed+=t,this.elapsed<.25))return;this.elapsed=0;const i=this.metrics.summary(),s=r=>{const a=i[r];return a?`${a.p50.toFixed(2)} / ${a.p95.toFixed(2)} / ${a.p99.toFixed(2)} / ${a.max.toFixed(2)}`:"—"};this.element.textContent=`Network diagnostics (P50/P95/P99/max)
Frame ms: ${s("frame_ms")}
Snapshot ms: ${s("snapshot_ms")}
Correction units: ${s("correction")}
Shot CPU ms: ${s("shotCPU_ms")}
Flame CPU ms: ${s("flameCPU_ms")}
Aim CPU ms: ${s("aimCPU_ms")}
Combat CPU ms: ${s("combatCPU_ms")}
Damage to render ms: ${s("deathFeedback_ms")}
RTT: ${e.rtt} ms | Pending: ${e.pending}
Camera offset: ${e.camera.toFixed(3)} | Resets: ${e.resets}`}dispose(){this.element?.remove(),this.metrics.reset()}}let XM=0;class qM{constructor(t,e){this.root=t;const i=`co-tactical-${++XM}`;this.shell.className="co-tactical",this.shell.dataset.gameUi="",this.shell.innerHTML=`<button type="button" class="co-tactical-trigger" aria-label="戰術板" aria-controls="${i}" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 3v18M14 13h3m-3 4h3"/></svg></button>
      <section class="co-mp-roster" id="${i}" aria-label="戰術板" tabindex="-1">
      <header class="co-tactical-heading"><b></b><button type="button" class="co-tactical-close" aria-label="關閉戰術板">×</button></header>
      <div class="co-tactical-scroll"><div class="co-tactical-columns" aria-hidden="true"><span>名次</span><span>玩家</span><span>積分</span><span>賞金</span><span>K/D</span></div><div class="co-tactical-rows"></div></div></section>`,t.append(this.shell),this.panel=this.shell.querySelector(".co-mp-roster"),this.trigger=this.shell.querySelector(".co-tactical-trigger"),this.body=this.shell.querySelector(".co-tactical-rows"),this.heading=this.shell.querySelector(".co-tactical-heading b"),this.setTouchMode(e),t.addEventListener("click",this.onClick,!0),t.addEventListener("pointerdown",this.onPointerDown,!0),t.addEventListener("pointermove",this.onPointerMove,!0),t.addEventListener("pointerup",this.onPointerEnd,!0),t.addEventListener("pointercancel",this.onPointerEnd,!0),window.PointerEvent||(t.addEventListener("touchstart",this.onTouchStart,{capture:!0,passive:!1}),t.addEventListener("touchmove",this.onTouchMove,{capture:!0,passive:!1}),t.addEventListener("touchend",this.onTouchEnd,!0),t.addEventListener("touchcancel",this.onTouchEnd,!0)),t.addEventListener("armory:open",this.close),window.addEventListener("keydown",this.onKey),window.addEventListener("blur",this.onBlur),window.addEventListener("resize",this.layout)}shell=document.createElement("div");panel;trigger;body;heading;rows=new Map;open=!1;touch=!1;active=!0;gestures=new Map;suppressClick=!1;get isOpen(){return this.touch&&this.open}setTouchMode(t){this.touch=t,this.root.classList.toggle("co-touch-ui",t),this.close()}setActive(t){this.active=t,t||this.close(),this.shell.hidden=!t}toggle(){if(!(!this.touch||!this.active)){if(this.open){this.close();return}this.open=!0,this.panel.hidden=!1,this.trigger.setAttribute("aria-expanded","true"),this.root.dispatchEvent(new Event("tactical:open")),this.layout()}}close=()=>{this.open=!1,this.panel.hidden=this.touch,this.trigger.setAttribute("aria-expanded","false"),this.layout()};onBlur=()=>{this.close(),this.gestures.clear(),this.suppressClick=!1};onKey=t=>{this.isOpen&&t.key==="Escape"&&(t.preventDefault(),this.close(),this.trigger.focus({preventScroll:!0}))};contains(t){return t instanceof Node&&this.shell.contains(t)}consume(t,e=!1){e&&t.preventDefault(),t.stopImmediatePropagation()}onPointerDown=t=>{if(!(!this.touch||!this.active)){if(this.suppressClick=!1,this.contains(t.target)){this.gestures.set(t.pointerId,!1),this.consume(t);return}this.open&&(this.close(),this.gestures.set(t.pointerId,!0),this.suppressClick=!0,this.root.setPointerCapture?.(t.pointerId),this.consume(t,!0))}};onPointerMove=t=>{this.gestures.has(t.pointerId)&&this.consume(t,this.gestures.get(t.pointerId))};onPointerEnd=t=>{if(!this.gestures.has(t.pointerId))return;const e=this.gestures.get(t.pointerId);this.gestures.delete(t.pointerId),this.consume(t,e)};onTouchStart=t=>{if(!this.touch||!this.active)return;this.suppressClick=!1;const e=this.contains(t.target),i=this.open&&!e;if(!(!e&&!i)){i&&(this.close(),this.suppressClick=!0);for(const s of Array.from(t.changedTouches))this.gestures.set(s.identifier,i);this.consume(t,i)}};onTouchMove=t=>{const e=Array.from(t.changedTouches);e.length&&e.every(i=>this.gestures.has(i.identifier))&&this.consume(t,e.some(i=>this.gestures.get(i.identifier)))};onTouchEnd=t=>{const e=Array.from(t.changedTouches),i=e.every(r=>this.gestures.has(r.identifier)),s=e.some(r=>this.gestures.get(r.identifier));for(const r of e)this.gestures.delete(r.identifier);i&&this.consume(t,s)};onClick=t=>{if(!this.touch||!this.active)return;if(this.suppressClick){this.suppressClick=!1,this.consume(t,!0);return}const e=t.target;!(e instanceof Element)||!this.contains(e)||(this.consume(t),e.closest(".co-tactical-trigger")?this.toggle():e.closest(".co-tactical-close")&&(this.close(),this.trigger.focus({preventScroll:!0})))};update(t,e,i){this.heading.textContent=`${e||"房間"} · ${Math.round(i)}ms`;const s=this.shell.querySelector(".co-tactical-scroll"),r=s.scrollTop,a=zy(t),o=new Set(a.map(c=>c.id));for(const[c,l]of this.rows)o.has(c)||(l.remove(),this.rows.delete(c));a.forEach((c,l)=>{let u=this.rows.get(c.id);if(!u){u=document.createElement("div"),u.className="co-tactical-row";for(let h=0;h<5;h++)u.append(document.createElement("span"));this.rows.set(c.id,u)}[String(c.rank),c.name,String(c.score),String(c.bounty),`${c.kills}/${c.deaths}`].forEach((h,f)=>{u.children[f].textContent!==h&&(u.children[f].textContent=h)}),u.classList.toggle("is-high-bounty",c.bounty>=Pf),this.body.children[l]!==u&&this.body.insertBefore(u,this.body.children[l]??null)}),s.scrollTop=r,this.layout()}layout=()=>{const t=this.touch&&!this.open?this.trigger:this.panel;this.root.style.setProperty("--co-roster-bottom",`${t.getBoundingClientRect().bottom-this.root.getBoundingClientRect().top}px`)};dispose(){this.gestures.clear(),this.rows.clear(),this.root.removeEventListener("click",this.onClick,!0),this.root.removeEventListener("pointerdown",this.onPointerDown,!0),this.root.removeEventListener("pointermove",this.onPointerMove,!0),this.root.removeEventListener("pointerup",this.onPointerEnd,!0),this.root.removeEventListener("pointercancel",this.onPointerEnd,!0),this.root.removeEventListener("touchstart",this.onTouchStart,!0),this.root.removeEventListener("touchmove",this.onTouchMove,!0),this.root.removeEventListener("touchend",this.onTouchEnd,!0),this.root.removeEventListener("touchcancel",this.onTouchEnd,!0),this.root.removeEventListener("armory:open",this.close),window.removeEventListener("keydown",this.onKey),window.removeEventListener("blur",this.onBlur),window.removeEventListener("resize",this.layout),this.root.classList.remove("co-touch-ui"),this.root.style.removeProperty("--co-roster-bottom"),this.shell.remove()}}const YM=19;function Pi(n,t){return typeof n=="object"&&n!==null&&n.roundId===t}const fa=72,Ou=1.1,ku=1.65,Bu=new Lt(16763490),zu=new Lt(16739094),Hu=new Lt(12331270),$M=Array.from({length:fa},(n,t)=>{const e=t*2.399963;return{emitter:t%2,side:Math.cos(e),outward:.66+Math.abs(Math.sin(e))*.68,spread:.6+t%9*.17,lift:1.2+t%11*.26,delay:t*.618%1,lifetime:.49+t%13*.043,size:.046+t%7*.012}});class ZM{group=new de;emitters=[new ge,new ge];sources=[new R,new R];geometry=new pe;vertices=new Float32Array(fa*18);colors=new Float32Array(fa*18);inverse=new se;shockwave;constructor(){this.group.name="Infection burst",this.group.visible=!1,this.emitters[0].position.set(.07,.72,.41),this.emitters[1].position.set(-.38,1.24,-.58),this.geometry.setAttribute("position",new Fe(this.vertices,3).setUsage(Oi)),this.geometry.setAttribute("color",new Fe(this.colors,3).setUsage(Oi)),this.geometry.setDrawRange(0,0);const t=new _t(this.geometry,new Ft({vertexColors:!0,side:Pe,depthWrite:!1,transparent:!0,blending:ti,toneMapped:!1}));t.frustumCulled=!1,t.renderOrder=2,this.group.add(t),this.shockwave=new _t(new an(4.65,4.65),new Xe({uniforms:{progress:{value:0}},depthWrite:!1,transparent:!0,blending:ti,toneMapped:!1,vertexShader:`
        varying vec2 point;
        void main() {
          point=uv*2.0-1.0;
          gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);
        }`,fragmentShader:`
        varying vec2 point;
        uniform float progress;
        void main() {
          float distance=length(point);
          float radius=0.12+0.80*(1.0-pow(1.0-progress,2.0));
          float rim=1.0-smoothstep(0.007,0.031,abs(distance-radius));
          float glow=1.0-smoothstep(0.022,0.11,abs(distance-radius));
          float wake=1.0-smoothstep(0.008,0.035,abs(distance-radius*0.76));
          float fade=smoothstep(0.0,0.08,progress)*pow(1.0-progress,1.4);
          vec3 color=mix(vec3(1.0,0.17,0.015),vec3(1.0,0.72,0.27),rim);
          gl_FragColor=vec4(color,(rim*0.77+glow*0.23+wake*0.23)*fade);
        }`})),this.shockwave.rotation.x=-Math.PI/2,this.shockwave.position.y=.028,this.shockwave.renderOrder=1,this.group.add(this.shockwave)}update(t,e){if(this.group.visible=t!==null,t===null)return;this.shockwave.visible=t<.82,this.shockwave.material.uniforms.progress.value=Math.min(1,t/.82),this.group.updateWorldMatrix(!0,!1),this.inverse.copy(this.group.matrixWorld).invert();for(const[c,l]of this.emitters.entries())l.getWorldPosition(this.sources[c]).applyMatrix4(this.inverse);const i=t<Ou,s=i?e?36:fa:e?14:32,r=i?t:t-Ou,a=i?1:.52;let o=0;for(let c=0;c<s;c++){const{emitter:l,side:u,outward:d,spread:h,lift:f,delay:g,lifetime:v,size:m}=$M[c],p=i?r-g*.12:(r+g*ku)%ku;if(p<0||p>=v)continue;const S=this.sources[l],E=l===0?1:-1,y=p/v,w=i?.34*(1-Math.exp(-8*p)):0,M=S.x+u*h*(a*p+w),T=S.y+(f*a-1.7*p)*p,_=S.z+E*d*(a*p+w*.73),A=m*(1-y*.59),P=A*(i?3.5:2.5),L=Math.min(1,p/.032)*(1-y)**1.25*(i?1.14:.95);o=this.vertex(o,M,T+A,_,Bu,L),o=this.vertex(o,M-A,T,_+A*.45,zu,L*.8),o=this.vertex(o,M-u*P,T-P,_-E*P*.5,Hu,L*.42),o=this.vertex(o,M,T+A,_,Bu,L),o=this.vertex(o,M+A,T,_-A*.45,zu,L*.8),o=this.vertex(o,M-u*P,T-P,_-E*P*.5,Hu,L*.42)}if(this.geometry.setDrawRange(0,o/3),o)for(const c of["position","color"]){const l=this.geometry.getAttribute(c);l.clearUpdateRanges(),l.addUpdateRange(0,o),l.needsUpdate=!0}}vertex(t,e,i,s,r,a){return this.vertices[t]=e,this.vertices[t+1]=i,this.vertices[t+2]=s,this.colors[t]=r.r*a,this.colors[t+1]=r.g*a,this.colors[t+2]=r.b*a,t+3}}const KM=4.8,C1=[{id:"idle",label:"待機"},{id:"walk",label:"走路"},{id:"attack",label:"三連斬"}],Li=2695994,$r=4469333,Ii=1643810,jM=16741150,Yf=[[1,.42],[.42,1],[-.42,1],[-1,.42],[-1,-.42],[-.42,-1],[.42,-1],[1,-.42]],Zs=[[-.13,.076,.184,0,.066],[-.073,.084,.177,0,.068],[.06,.045,.061]],JM=Yf.map(([n,t])=>new R(n*Zs[0][1],Zs[0][0],t*Zs[0][2]+Zs[0][4])),zo=2.22,Gu=1.42,Vu=30;function QM(){const t=new Uint8Array(4096);for(let i=0;i<32;i++)for(let s=0;s<32;s++){const r=Math.hypot((s+.5)/32-.5,(i+.5)/32-.5)*2,a=(i*32+s)*4;t.set([255,255,255,Math.round(255*Math.max(0,1-r)**2)],a)}const e=new Ll(t,32,32);return e.magFilter=e.minFilter=Ve,e.needsUpdate=!0,e}function t1(n){const t=[],e=[],i=new Lt;for(const[r,a,o,c]of n){i.setHex(c);for(const[l,u,d]of[r,a,o])t.push(l,u,d),e.push(i.r,i.g,i.b)}const s=new pe;return s.setAttribute("position",new ee(t,3)),s.setAttribute("color",new ee(e,3)),s.computeVertexNormals(),s}function On(n,t,e,i,s,r,a=r){n.push([t,e,i,r],[t,i,s,a])}function Ue(n,t,e=Yf){const i=[],s=n.map(([o,c,l,u=0,d=0])=>e.map(([h,f])=>[u+h*c,o,d+f*l])),r=e.length;for(let o=1;o<s.length;o++)for(let c=0;c<r;c++){const l=(c+1)%r;On(i,s[o-1][l],s[o-1][c],s[o][c],s[o][l],t[c%t.length],t[(c+o%2)%t.length])}const a=s[s.length-1];for(let o=1;o<r-1;o++)i.push([s[0][0],s[0][o],s[0][o+1],t[0]]),i.push([a[0],a[o+1],a[o],t[0]]);return i}function e1(){const n=[[0,.192,.32],[.132,.237,.27],[.285,.27,.173],[.321,.092,.17],[.277,-.074,.199],[.202,-.224,.267],[0,-.344,.352],[0,-.089,.402]],t=n.flatMap((d,h)=>{const[f,g,v]=d,[m,p,S]=n[(h+1)%n.length];return[d,[(f+m)/2,(g+p)/2,(v+S)/2]]}),e=.34,i=.161,s=-.12,r=(d,h)=>.434-.78*d-.18*h,a=t.map((d,h)=>{const f=(7-h)*Math.PI/8,g=Math.sin(f),v=Math.cos(f)*.056*(1-.3*g),m=g*.102,p=i+v*Math.cos(e)+m*Math.sin(e),S=s+m*Math.cos(e)-v*Math.sin(e);return[p,S,r(p,S)]}),o=[i-.015,s-.004,r(i,s)-.115],c=[15854817,15394269,14998998,15196121,15920096,15854048,16117219,15985892],l=[],u=[];for(const d of[-1,1]){const h=[],f=a.map(([v,m,p])=>[v-.015,m-.004,p-.105]),g=([v,m,p])=>[d*v,m,p];for(let v=0;v<a.length;v++){const m=(v+1)%a.length;if(On(h,t[v],t[m],a[m],a[v],c[Math.floor(v/2)]),On(h,a[v],a[m],f[m],f[v],788753),u.push([g(o),g(f[v]),g(f[m]),16777215]),v<12){const p=([S,E,y])=>[S*.9,E+.011,y-.099];On(h,t[v],p(t[v]),p(t[m]),t[m],13287615)}}for(const[v,m,p,S]of h)l.push([g(v),g(m),g(p),S])}return{faceplate:l,eyeWells:u}}function i1(n,t,e,i){const s=(o,c)=>{const l=c===.5?.29:c===0?-.51:-.3,u=n+(c-.5)*t+o*(i<4?.064:-.044),d=[.46,.72,.97,1.16][o]+(c===.5?.059:0),h=o===3?e+l:[0,.43,1.01][o];return[Math.sin(u)*d,-.04-h+Math.cos(u)*.12,Math.cos(u)*d*.66-.13]},r=[],a=[3746635,2628918,5259360,3352388,5847117];for(let o=0;o<2;o++)for(const c of[0,.5]){const l=(i+o+c*2)%a.length;On(r,s(o,c),s(o+1,c),s(o+1,c+.5),s(o,c+.5),a[l],a[(l+1)%a.length])}for(const o of[0,.5]){const c=i%3===0&&o===.5?8997446:a[(i+3)%a.length];On(r,s(2,o),s(3,o),s(3,o+.5),s(2,o+.5),c,a[(i+1)%a.length])}return r}const $f=2.78,n1=[[.41,.59],[.9,1.09],[1.52,1.76]],Ho=[[0,0,0,0,.65,1.94,.24,47,-54],[.41,.08,-.38,.46,.96,2.03,.66,91,37],[.5,.37,.06,.63,.54,1.58,1.22,5,1],[.59,.47,.54,.77,-.4,1.13,1.34,-91,-26],[.66,.47,.53,.79,-.43,1.1,1.37,-94,-28],[.9,.43,.51,.51,-.43,2.04,1.27,-90,36],[.99,.6,.04,.66,.3,1.55,1.47,-2,2],[1.09,.68,-.43,.76,1.04,1.12,1.08,94,-26],[1.17,.68,-.44,.76,1.07,1.1,1.1,96,-27],[1.52,.59,-.23,.38,.82,2.55,1.06,55,61],[1.64,.86,.06,.69,.49,1.98,1.52,8,16],[1.76,1.03,.37,.88,-.2,1.11,1.83,-40,-31],[1.92,1.02,.34,.88,-.22,1.05,1.83,-43,-29],[2.59,0,0,0,.65,1.94,.24,47,-54],[$f,0,0,0,.65,1.94,.24,47,-54]].map(([n,...t])=>({time:n,values:t})),Zr=.69,Go=.66,Wu=new R(0,-1,0),Xu=2;class s1{group=new de;triangleCount;hips=new de;body=new de;infectionBurst=new ZM;head=new de;arms=[];legs=[];cape=[];plates=new qs({vertexColors:!0,roughness:.78,metalness:.12});fabric=new qs({vertexColors:!0,side:Pe,roughness:.97});face=new qs({vertexColors:!0,side:Pe,roughness:.49});eyeWells=new Ft({color:262918,side:Pe});glow=new qs({vertexColors:!0,color:16764303,emissive:jM,emissiveIntensity:1.1,roughness:.58});particleGeometry=new pe;glowMap=QM();particleMaterial=new Nd({map:this.glowMap,color:16752723,size:.13,transparent:!0,opacity:.85,depthWrite:!1,blending:ti});haloMaterial=new ur({map:this.glowMap,color:16741424,transparent:!0,opacity:.24,depthWrite:!1,blending:ti,toneMapped:!1});particlePositions=new Float32Array(Vu*3);sole=new R;inverseRoot=new se;weaponTipAxis=new R;weaponTipDistance=0;hiltPosition=new R;bladeDirection=new R;weaponGroup=new de;rootRotation=new Wi;jointRotation=new Wi;shoulderPosition=new R;elbowDirection=new R;handDirection=new R;elbowBend=new R;bladeBase=new ge;bladeTip=new ge;constructor(){this.group.name="Void Warden",this.group.add(this.hips),this.hips.position.y=zo,this.hips.add(this.body),this.body.add(this.head),this.head.position.set(0,Gu,.05),this.piece(this.hips,Ue([[-.25,.134,.145],[-.075,.326,.221],[.16,.225,.193]],[Ii,Li,$r])),this.piece(this.body,Ue([[0,.19,.17],[.31,.245,.222],[.77,.346,.258],[1.08,.439,.233],[1.28,.189,.172]],[2367789,2695473,4140873,1775653,3483969])),this.piece(this.body,Ue([[1.08,.174,.12],[1.46,.141,.137]],[Ii,Li])),this.piece(this.head,Ue([[-.298,.1,.112,0,-.036],[-.158,.221,.165,0,-.055],[.095,.282,.215,0,-.081],[.246,.244,.19,0,-.087],[.284,.16,.126,0,-.089]],[Ii,Li]));const{faceplate:t,eyeWells:e}=e1();this.piece(this.head,t,this.face).name="Faceplate",this.piece(this.head,e,this.eyeWells).name="Recessed eyes";const i=[14076615,15787736,16183784,14604237,15590616,13352381,12958140,15063502];for(const c of[-1,1]){const l=c===1,u=KM-zo-Gu+(l?.033:-.073);this.piece(this.head,Ue([[.105,.139,.126,c*.207,.105],[.249,.123,.138,c*.295,.053],[.386,.11,.128,c*.375,-.005],[.54,.098,.106,c*.432,-.051],[.69,.081,.09,c*(l?.463:.456),-.092],[.83,.063,.071,c*(l?.444:.432),-.113],[.946,.042,.049,c*(l?.397:.379),-.137],[u-.07,.024,.027,c*(l?.342:.337),-.158],[u,.002,.002,c*(l?.291:.307),-.179]],i)),l&&this.piece(this.head,Ue([[.642,.045,.055,.415,-.081],[.749,.033,.04,.373,-.086],[.841,.002,.003,.304,-.073]],i));const d=this.joint(this.body,c*.448,1.016,0),h=this.joint(d,0,-Zr,0),f=this.joint(h,0,-Go,0);this.arms.push({shoulder:d,elbow:h,hand:f}),this.piece(d,Ue([[-.71,.057,.061],[-.46,.071,.078],[-.18,.106,.109],[.02,.153,.144,c*.038],[.13,.095,.091]],[Ii,Li,$r,4404044])),this.piece(h,Ue([[-.68,.049,.055],[-.52,.063,.076],[-.24,.094,.094],[-.052,.105,.112],[.07,.064,.069]],[Li,Ii,3353150,4863828])),this.piece(f,Ue([[-.205,.042,.052],[-.145,.086,.091],[-.04,.091,.092],[.04,.063,.069]],[Ii,Li]));const g=[];for(let S=0;S<3;S++){const E=(S-1)*.05;g.push(...Ue([[-.26,.023,.036,E,.02],[-.16,.032,.053,E,.044],[-.074,.026,.045,E,.045]],[Li,Ii,5324890]))}this.piece(f,g);const v=this.joint(this.hips,c*.214,-.07,0),m=this.joint(v,0,-1.045,0),p=this.joint(m,0,-.99,0);this.legs.push({thigh:v,shin:m,foot:p}),this.piece(v,Ue([[-1.08,.063,.078],[-.85,.071,.084],[-.36,.108,.116],[-.06,.136,.133],[.09,.102,.104]],[Ii,2761011,3812420,Li])),this.piece(m,Ue([[-.99,.034,.049],[-.76,.045,.055],[-.26,.072,.086],[-.055,.092,.107,0,.015],[.07,.063,.072]],[Li,Ii,$r,3352124])),this.piece(p,Ue(Zs,[Ii,Li,$r]))}const s=[1.32,1.96,2.24,1.85,2.01,2.21,1.88,1.4];s.forEach((c,l)=>{const u=.67+l*(2*Math.PI-1.34)/(s.length-1),d=this.piece(this.body,i1(u,.87,c,l),this.fabric);d.position.y=1.15,this.cape.push(d)});const r=[];for(const[c,l]of[.35,1,1.72,2.47,3.18,3.94,4.69,5.44].entries()){const u=[6966126,3877706,5850207,2695219],d=(m,p,S)=>[Math.sin(m)*p,S,Math.cos(m)*p*.71-.04],h=d(l,.21,1.28),f=d(l+.76,.23,1.31),g=d(l+.74,.69,1.035),v=d(l+.01,.68,1.055);On(r,h,f,g,v,u[c%4],u[(c+1)%4]),r.push([v,g,d(l+.42,.88,.79),u[(c+2)%4]])}this.piece(this.body,r,this.fabric),this.infection(),this.weapon(this.arms[1].hand);let a=0;this.group.traverse(c=>{c instanceof _t&&(a+=(c.geometry.index?.count??c.geometry.getAttribute("position").count)/3)}),this.triangleCount=a,this.particleGeometry.setAttribute("position",new Fe(this.particlePositions,3).setUsage(Oi)),this.particleGeometry.setDrawRange(0,18);const o=new ar(this.particleGeometry,this.particleMaterial);o.frustumCulled=!1,this.group.add(o,this.infectionBurst.group),this.body.add(...this.infectionBurst.emitters),this.pose("idle",0,!1)}joint(t,e,i,s){const r=new de;return r.position.set(e,i,s),t.add(r),r}piece(t,e,i=this.plates){const s=new _t(t1(e),i);return t.add(s),s}infection(){const t=[],e=[];for(const[i,s,r,a]of[[.078,.69,.254,.46],[-.4,1.23,-.37,1.16],[-.13,1.16,-.48,.69]]){const o=Math.sign(r),c=new dr(this.haloMaterial);c.position.set(i,s+.01,r+.24*o),c.scale.setScalar(.83*a),this.body.add(c);const l=Ue([[s-.19*a,.094*a,.07*a,i,r],[s-.08*a,.26*a,.16*a,i,r],[s+.11*a,.24*a,.19*a,i,r],[s+.23*a,.07*a,.07*a,i,r]],[3285554,6305608,2169643,5386305]);t.push(...l),e.push(...Ue([[s-.175*a,.02,.022,i,r+.11*o*a],[s-.06*a,.117*a,.082*a,i,r+.14*o*a],[s+.059*a,.15*a,.094*a,i-.02,r+.16*o*a],[s+.18*a,.033,.038,i+.02,r+.125*o*a]],[16753477,16741680,16761188,15681556,16745506,16756539]));const u=(d,h,f)=>[i+d*a,s+h*a,r+f*o*a];e.push([u(-.03,-.03,.235),u(.022,-.04,.235),u(-.056,-.34,.11),15746323],[u(.03,.05,.244),u(.06,.016,.239),u(.195,.142,.14),16738594],[u(-.09,.045,.21),u(-.12,.02,.2),u(-.24,.12,.05),16340516])}this.piece(this.body,t),this.piece(this.body,e,this.glow)}weapon(t){const e=this.weaponGroup;e.position.set(0,-.1,.07),e.scale.setScalar(Xu),t.add(e);const i=[[0,1],[-1,0],[0,-1],[1,0]];this.piece(e,Ue([[-.28,.074,.08],[-.13,.078,.085],[.14,.075,.08],[.24,.115,.13],[.4,.061,.068]],[4075847,2169127,6706279,4534349])),this.piece(e,Ue([[-.45,.15,.11],[-.37,.28,.13],[-.25,.32,.15],[-.2,.11,.085]],[8878484,5256531,12366005,3614781],i)),this.piece(e,Ue([[-2.12,.002,.003,.098],[-1.51,.077,.054,.021],[-.67,.162,.115],[-.4,.194,.129],[-.3,.109,.08]],[12823993,7889789,14268610,9667998],i)),this.piece(e,Ue([[-1.51,.006,.008,.04,.05],[-.73,.022,.014,.015,.113],[-.45,.038,.018,.006,.127]],[16741680,15224094],i),this.glow),this.bladeBase.position.set(0,-.47,0),this.bladeTip.position.set(.098,-2.12,0),this.weaponTipAxis.copy(this.bladeTip.position).multiplyScalar(Xu).add(e.position),this.weaponTipDistance=this.weaponTipAxis.length(),this.weaponTipAxis.divideScalar(this.weaponTipDistance),e.add(this.bladeBase,this.bladeTip)}pose(t,e,i){this.weaponGroup.visible=!0;const s=e*(i?Ni.enrageRate:1),r=s%$f,a=s*Math.PI*1.75,o=Math.sin(s*2.7),c=t==="walk",l=t==="attack";let u=0,d=0,h=0,f=0,g=0,v=0,m=0,p=0;const S=l&&n1.some(([E,y])=>r>=E&&r<=y);if(l){const E=Ho.findIndex(P=>P.time>r),{time:y,values:w}=Ho[E-1],{time:M,values:T}=Ho[E],_=(r-y)/(M-y),A=S?_:_*_*(3-2*_);[u,d,h,f,g,v,m,p]=w.map((P,L)=>Re.lerp(P,T[L],A))}this.hips.position.set(0,zo+(c?-.06+Math.abs(Math.sin(a))*.075:o*.016),u),this.hips.rotation.y=c?Math.sin(a)*.085:d*.21,this.body.rotation.set((c?.1:h)+(i?.06:0),d*.79,c?Math.sin(a)*.05:-d*.045),this.head.rotation.set(-this.body.rotation.x*.68+o*.025,-d*.34,i?-.07:o*.021);for(let E=0;E<2;E++){const y=E===0?-1:1,w=c?Math.sin(a)*y:0,{thigh:M,shin:T,foot:_}=this.legs[E];if(M.rotation.set(w*.41,y*.1,y*(c?.088:.145)),T.rotation.x=Math.max(0,-w)*.66,l){const F=Math.min(1,h/.7);M.rotation.x=(y===1?-1.19:.72)*F,T.rotation.x=(y===1?1.68:.25)*F}_.rotation.x=-(M.rotation.x+T.rotation.x)*(l?1:.65);const{shoulder:A,elbow:P,hand:L}=this.arms[E];y===1?(A.rotation.set(-.12-w*.18-(c?.19:0),0,.14),P.rotation.set(-.25-Math.max(0,w)*.19,0,0),L.rotation.set(-.34,.046,.12)):(A.rotation.set(-.04-w*.38-h*.8,-.12,-.14-Math.abs(d)*.38),P.rotation.x=-.21-Math.abs(d)*.33,L.rotation.set(-.03,.01,-.05))}return this.plantFeet(),l?this.swingBlade(f,g,v,m,p):this.aimBlade(c?39+Math.sin(a)*4:73,-27),this.cape.forEach((E,y)=>{E.rotation.x=(c?.046:.012)*Math.sin(s*3.2+y*.48)-h*.18,E.rotation.z=(c?.066:.025)*Math.sin(s*2.8+y*.42)-d*.11}),this.glow.emissiveIntensity=(i?2.5:.9)+(o+1)*(i?.4:.16),this.haloMaterial.opacity=(i?.53:.22)+(o+1)*(i?.08:.025),this.eyeWells.color.setHex(i?16738323:262918),i&&this.eyeWells.color.multiplyScalar(1.1+(o+1)*.43),S}swingBlade(t,e,i,s,r){const{shoulder:a,elbow:o,hand:c}=this.arms[1];a.getWorldPosition(this.shoulderPosition).applyMatrix4(this.inverseRoot),this.handDirection.set(t,e,i).sub(this.shoulderPosition);const l=Re.clamp(this.handDirection.length(),.12,Zr+Go-.015);this.handDirection.normalize();const u=(Zr**2-Go**2+l**2)/(2*l),d=Math.sqrt(Math.max(0,Zr**2-u**2));this.elbowBend.set(.85,-.58,-.37),this.elbowBend.addScaledVector(this.handDirection,-this.elbowBend.dot(this.handDirection)).normalize(),this.elbowDirection.copy(this.handDirection).multiplyScalar(u).addScaledVector(this.elbowBend,d),this.aimJoint(a,Wu,this.elbowDirection),this.handDirection.multiplyScalar(l).sub(this.elbowDirection),this.aimJoint(o,Wu,this.handDirection),this.aimBlade(s,r)}aimBlade(t,e){const{hand:i}=this.arms[1];i.getWorldPosition(this.hiltPosition).applyMatrix4(this.inverseRoot);const s=Re.degToRad(t),r=Re.degToRad(e),a=Re.clamp((.105-this.hiltPosition.y)/this.weaponTipDistance,-1,1),o=Math.max(Math.sin(r),a),c=Math.sqrt(1-o*o);this.bladeDirection.set(Math.sin(s)*c,o,Math.cos(s)*c),this.aimJoint(i,this.weaponTipAxis,this.bladeDirection)}entrancePose(t){this.pose("idle",t/1e3,!1);const{land:e,title:i}=Ae,r=1-Re.smoothstep(t,e+80,i+400);this.body.rotation.x=.53*r,this.head.rotation.x=.4*r;const a=Re.smoothstep(t,e-125,e+40)*(1-Re.smoothstep(t,e+80,e+640));if(a>0){for(const{thigh:c,shin:l,foot:u}of this.legs)c.rotation.x=-.56*a,l.rotation.x=1.13*a,u.rotation.x=-.57*a;this.plantFeet()}for(const[c,{shoulder:l,elbow:u}]of this.arms.entries()){const d=c===0?-1:1;l.rotation.set(-.26*r,d*.12*r,d*(.14+.43*r)),u.rotation.x=-.23-.48*r}this.weaponGroup.visible=t>=e+130;const o=Math.sin(Math.PI*Re.smoothstep(t,e+140,Ae.finish));this.aimBlade(73-27*o,-27+53*o)}combatPose(t,e,i){const s=Math.max(0,e);if(t==="slash"){this.pose("attack",Math.min(s,Ce.slash.duration)/1e3/(i?Ni.enrageRate:1),i);return}if(this.pose("idle",s/1e3,i),t==="dash"){const r=Re.smoothstep(s,0,Ce.dash.windup);this.body.rotation.x=.58*r,this.head.rotation.x=-.3*r,this.swingBlade(.58,1.63-.42*r,.28+.85*r,24-24*r,20-22*r)}else if(t==="leap"){const r=Re.smoothstep(s,Ce.leap.windup,Ce.leap.duration);this.body.rotation.x=.1+.65*r,this.head.rotation.x=-.34*r,this.swingBlade(.64-.35*r,2.52-1.31*r,.7+.76*r,50-73*r,71-110*r)}else{const r=Math.sin(Math.PI*Re.smoothstep(s,180,Ce.burst.duration));this.body.rotation.x=-.17*r,this.head.rotation.x=.19*r,this.arms[0].shoulder.rotation.z=-.9*r-.14,this.swingBlade(.68+.24*r,1.47+.6*r,.52,92,12+25*r),this.glow.emissiveIntensity+=2.8*r}}selfStabPose(t){this.pose("idle",t/1e3,!0);const e=Re.smoothstep(t,0,410),i=Re.smoothstep(t,450,590);this.body.rotation.x=.24*i-.09*e,this.head.rotation.x=.38*i,this.swingBlade(.87-.56*i,2.12+.48*e-.67*i,.55+.76*e,59+113*e,57-71*i)}collapsePose(t,e){this.pose("idle",t/1e3,!1);const i=Re.smoothstep(t,0,e?400:700),s=e?1-i:i;this.body.rotation.x=s*.62,this.head.rotation.x=s*.42;for(const[r,{thigh:a,shin:o,foot:c}]of this.legs.entries())a.rotation.x=-(r===0?.82:1.22)*s,o.rotation.x=(r===0?1.88:1.63)*s,c.rotation.x=-(a.rotation.x+o.rotation.x)*.94;this.plantFeet(),this.aimBlade(75,-31)}bindingPoints(t,e){this.arms[0].hand.getWorldPosition(t),this.arms[1].hand.getWorldPosition(e)}aimJoint(t,e,i){t.parent.getWorldQuaternion(this.jointRotation).invert().multiply(this.rootRotation),this.sole.copy(i).normalize().applyQuaternion(this.jointRotation),t.quaternion.setFromUnitVectors(e,this.sole)}plantFeet(){this.group.getWorldQuaternion(this.rootRotation),this.inverseRoot.copy(this.group.matrixWorld).invert(),this.hips.updateWorldMatrix(!1,!1);let t=1/0;for(const{thigh:e,shin:i,foot:s}of this.legs){e.updateWorldMatrix(!1,!1),i.updateWorldMatrix(!1,!1),s.updateWorldMatrix(!1,!1);for(const r of JM)this.sole.copy(r).applyMatrix4(s.matrixWorld).applyMatrix4(this.inverseRoot),t=Math.min(t,this.sole.y)}this.hips.position.y-=t-.006}updateParticles(t,e,i){const s=e!==null,r=i?s?10:6:s?Vu:18;this.particleGeometry.setDrawRange(0,r);for(let o=0;o<r;o++){const c=o*2.399963+t*(.18+o%4*.055),l=(o*.618+t*(s?.39:.23))%1,u=.65+o%5*.18+l*.25;this.particlePositions[o*3]=Math.cos(c)*u,this.particlePositions[o*3+1]=.4+l*3.85,this.particlePositions[o*3+2]=Math.sin(c)*u}const a=this.particleGeometry.getAttribute("position");a.clearUpdateRanges(),a.addUpdateRange(0,r*3),a.needsUpdate=!0,this.particleMaterial.size=s?.16:.13,this.infectionBurst.update(e,i)}dispose(){this.group.removeFromParent(),on(this.group)}}const us=42,Vo=5e3,Wo=new Lt(16752715),r1=new Lt(16731943),Ws=new Lt(16768192);class a1{group=new de;geometry=new pe;positions=new Float32Array(Vo*3);colors=new Float32Array(Vo*3);accents=new Float32Array(Vo);bolts;boltMatrix=new se;cursor=0;emitter=new R;corners=Array.from({length:4},()=>new R);trail=Array.from({length:8},()=>({base:new R,tip:new R,at:0}));trailIndex=0;trailCount=0;trailAttack=0;constructor(t){this.geometry.setAttribute("position",new Fe(this.positions,3).setUsage(Oi)),this.geometry.setAttribute("color",new Fe(this.colors,3).setUsage(Oi)),this.geometry.setAttribute("strength",new Fe(this.accents,1).setUsage(Oi)),this.geometry.setDrawRange(0,0);const e=new _t(this.geometry,new Xe({transparent:!0,depthWrite:!1,side:Pe,vertexColors:!0,toneMapped:!1,vertexShader:`attribute float strength; varying vec4 tint;
        void main(){ tint=vec4(color,strength); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,fragmentShader:"varying vec4 tint; void main(){ gl_FragColor=tint; }"}));e.frustumCulled=!1,e.renderOrder=1,this.group.add(e),this.bolts=new yn(new Wa(.29,t?0:1),new Ft({color:16741933,toneMapped:!1}),Ce.burst.count),this.bolts.count=0,this.bolts.instanceMatrix.setUsage(Oi),this.bolts.frustumCulled=!1,this.group.add(this.bolts)}update(t,e,i,s,r){if(this.cursor=0,this.bolts.count=0,t){const a=Math.max(0,(e-t.startedAt)*t.rate),o=t.scale??1,c=i?r1:Wo,{from:l,to:u}=t;switch(t.kind){case"slash":{const d=Ce.slash,h=d.impact.findIndex(v=>a<=v+135);if(h<0)break;const f=d.impact[h]-a,g=f>=0?.12+.19*(1-Math.min(1,f/550)):.38*(1+f/135);this.fan(l,d.range*o,t.yaw,d.angle,f<0?Ws:c,g);break}case"dash":{const d=a>=Ce.dash.windup;a<Ce.dash.duration+145&&this.strip(l,u,Ce.dash.width*o,d?Ws:c,d?.31*(1-Math.max(0,a-Ce.dash.duration)/145):.19);break}case"leap":{const d=a-Ce.leap.duration;if(d<230&&(this.fan(u,Ce.leap.radius*o,0,Math.PI*2,d>=0?Ws:c,d>=0?.42*(1-d/230):.21),d>=0)){const h=Ce.leap.radius*o*(.28+.72*d/230);this.arc(u,h,0,Math.PI*2,Ws,.94*(1-d/230),.16)}break}case"burst":{const d=Ce.burst,h=t.rays??[];if(a>d.impact+210)break;const f=(a-d.launch)/(d.impact-d.launch);for(const[g,v]of h.entries())f<1&&this.strip(l,v,d.width*o,c,a<d.launch?.16:.25),this.fan(v,d.radius*o,0,Math.PI*2,f>=1?Ws:c,f>=1?.38*(1-(a-d.impact)/210):.18),f>=0&&f<1&&(this.emitter.set(Re.lerp(l.x,v.x,f),l.y+.83,Re.lerp(l.z,v.z,f)),this.boltMatrix.makeTranslation(this.emitter.x,this.emitter.y,this.emitter.z),this.bolts.setMatrixAt(g,this.boltMatrix),this.bolts.count++);this.bolts.count&&(this.bolts.instanceMatrix.clearUpdateRanges(),this.bolts.instanceMatrix.addUpdateRange(0,this.bolts.count*16),this.bolts.instanceMatrix.needsUpdate=!0);break}}}if(this.drawBladeTrail(t,e,s,r),this.geometry.setDrawRange(0,this.cursor),this.cursor)for(const a of["position","color","strength"]){const o=this.geometry.getAttribute(a);o.clearUpdateRanges(),o.addUpdateRange(0,this.cursor*o.itemSize),o.needsUpdate=!0}}drawBladeTrail(t,e,i,s){if(!t||t.kind!=="slash"){this.trailCount=0;return}this.trailAttack!==t.startedAt&&(this.trailCount=0,this.trailAttack=t.startedAt);const r=(e-t.startedAt)*t.rate;if(Ce.slash.impact.some(a=>r>=a-100&&r<=a+105)){const a=this.trail[this.trailIndex];a.base.copy(i),a.tip.copy(s),a.at=e,this.trailIndex=(this.trailIndex+1)%this.trail.length,this.trailCount=Math.min(this.trailCount+1,this.trail.length)}for(let a=0;a<this.trailCount-1;a++){const o=this.trail[(this.trailIndex+this.trail.length-a-1)%this.trail.length],c=this.trail[(this.trailIndex+this.trail.length-a-2)%this.trail.length],l=(1-(e-c.at)/125)*.64;if(l<=0)break;this.triangle(o.base,o.tip,c.tip,Wo,l),this.triangle(o.base,c.tip,c.base,Wo,l)}}vertex(t,e,i){const s=this.cursor*3;this.positions[s]=Re.clamp(t.x,Fi.minX,Fi.maxX),this.positions[s+1]=Re.clamp(t.y+.065,-10,650),this.positions[s+2]=Re.clamp(t.z,Fi.minZ,Fi.maxZ),this.colors[s]=e.r,this.colors[s+1]=e.g,this.colors[s+2]=e.b,this.accents[this.cursor++]=Math.max(0,i)}triangle(t,e,i,s,r){this.vertex(t,s,r),this.vertex(e,s,r),this.vertex(i,s,r)}ringPoint(t,e,i,s){return t.set(e.x+Math.sin(s)*i,e.y,e.z+Math.cos(s)*i)}fan(t,e,i,s,r,a){for(let o=0;o<us;o++){const c=i-s/2+s*o/us,l=i-s/2+s*(o+1)/us;this.triangle(t,this.ringPoint(this.corners[0],t,e,c),this.ringPoint(this.corners[1],t,e,l),r,a)}this.arc(t,e,i,s,r,Math.min(.82,a*2.8),.095)}arc(t,e,i,s,r,a,o){for(let c=0;c<us;c++){const l=i-s/2+s*c/us,u=i-s/2+s*(c+1)/us,d=this.ringPoint(this.corners[0],t,e,l),h=this.ringPoint(this.corners[1],t,e,u),f=this.ringPoint(this.corners[2],t,e-o,l),g=this.ringPoint(this.corners[3],t,e-o,u);this.triangle(d,f,h,r,a),this.triangle(h,f,g,r,a)}}strip(t,e,i,s,r){const a=e.x-t.x,o=e.z-t.z,c=Math.hypot(a,o)||1,l=o/c*i,u=-a/c*i,[d,h,f,g]=this.corners;d.set(t.x-l,t.y,t.z-u),h.set(t.x+l,t.y,t.z+u),f.set(e.x-l,e.y,e.z-u),g.set(e.x+l,e.y,e.z+u),this.triangle(d,h,f,s,r),this.triangle(f,h,g,s,r);for(let v=-1;v<=1;v+=2)d.set(t.x+l*v,t.y,t.z+u*v),h.set(e.x+l*v,e.y,e.z+u*v),f.set(t.x+l*(v*.92),t.y,t.z+u*(v*.92)),g.set(e.x+l*(v*.92),e.y,e.z+u*(v*.92)),this.triangle(d,f,h,s,r*2.6),this.triangle(h,f,g,s,r*2.6)}dispose(){this.group.removeFromParent(),on(this.group)}}const qu=new R(0,1,0),Yu=4,Xo=19,o1=[[-2.5,10,-1.2],[2.6,10,.7],[-1.1,10,2.2],[1.3,10,-2.4]],ds=(n,t,e)=>Re.smoothstep(n,t,e);class c1{constructor(t,e,i,s=""){this.localId=s,this.model.group.visible=!1,this.effects.position.copy(Ni.location),this.combat=new a1(i),this.ownerRing.rotation.x=-Math.PI/2,this.ownerRing.visible=!1,t.add(this.effects,this.model.group,this.combat.group,this.ownerRing);const r=new Rs(.128,.036,5,i?8:12);r.rotateX(Math.PI/2),r.rotateZ(Math.PI/2),r.scale(.78,1.48,.78),this.chainMesh=new yn(r,new qs({color:3482935,roughness:.44,metalness:.58,emissive:5120275,emissiveIntensity:.38}),Yu*Xo),this.chainMesh.instanceMatrix.setUsage(Oi),this.chainMesh.frustumCulled=!1,this.effects.add(this.chainMesh);const a=new pe,o=[];for(let u=0;u<9;u++){const d=u*Math.PI*2/9+.17;let h=0,f=0;for(let g=1;g<=5;g++){const v=d+Math.sin(u*4+g*9)*.23,m=g*(.62+u%3*.12),p=Math.cos(v)*m,S=Math.sin(v)*m;o.push(h,.034,f,p,.034,S),(g===2||g===4)&&o.push(p,.034,S,p+Math.cos(v+.65)*.53,.034,S+Math.sin(v+.65)*.53),h=p,f=S}}a.setAttribute("position",new ee(o,3)),this.cracks=new e0(a,new Dl({color:16742698,transparent:!0,blending:ti,depthWrite:!1,toneMapped:!1})),this.effects.add(this.cracks),this.rift=new _t(new an(16,16),new Xe({uniforms:{light:{value:0},wave:{value:-1}},transparent:!0,depthWrite:!1,blending:ti,vertexShader:`varying vec2 ground;
        void main(){ ground=uv*2.0-1.0; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,fragmentShader:`varying vec2 ground;
        uniform float light;
        uniform float wave;
        void main(){
          float d=length(ground);
          float r=.08+.84*(1.0-pow(1.0-clamp(wave,0.0,1.0),2.0));
          float ring=(1.0-smoothstep(.007,.042,abs(d-r)))*step(0.0,wave)*pow(1.0-clamp(wave,0.0,1.0),1.2);
          float pool=pow(max(0.0,1.0-d*2.45),2.0)*light;
          vec3 color=mix(vec3(.94,.19,.015),vec3(1.0,.67,.23),clamp(ring+pool*.7,0.0,1.0));
          gl_FragColor=vec4(color,pool*.82+ring*.92);
        }`})),this.rift.rotation.x=-Math.PI/2,this.rift.position.y=.028,this.effects.add(this.rift),this.sparkCount=i?36:78,this.sparkData=new Float32Array(this.sparkCount*3);const c=new pe;c.setAttribute("position",new Fe(this.sparkData,3).setUsage(Oi)),this.sparks=new ar(c,new Xe({uniforms:{opacity:{value:0}},transparent:!0,blending:ti,depthWrite:!1,vertexShader:`uniform float opacity;
        void main(){ vec4 p=modelViewMatrix*vec4(position,1.0);
          gl_Position=projectionMatrix*p;
          gl_PointSize=clamp(112.0*sqrt(opacity)/max(3.0,-p.z),1.0,11.0);
        }`,fragmentShader:`uniform float opacity;
        void main(){ float d=length(gl_PointCoord-vec2(.5));
          gl_FragColor=vec4(1.0,.41,.08,opacity*(1.0-smoothstep(.11,.5,d)));
        }`})),this.sparks.frustumCulled=!1,this.effects.add(this.sparks),this.title.className="co-warden-title",this.title.hidden=!0,this.title.setAttribute("role","status"),this.title.innerHTML="<span>中立 Boss 登場</span><strong>虛空騎士</strong>",this.hud.className="co-warden-hud",this.hud.hidden=!0;const l=document.createElement("span");l.textContent=Ni.name,this.meter.setAttribute("aria-label",`${Ni.name}生命值`),this.allegiance.className="co-warden-allegiance",this.warning.className="co-warden-warning",this.growth.className="co-warden-growth",this.hud.append(l,this.meter,this.allegiance,this.growth,this.warning),e.append(this.title,this.hud)}model=new s1;effects=new de;title=document.createElement("div");hud=document.createElement("div");allegiance=document.createElement("small");warning=document.createElement("small");growth=document.createElement("small");meter=document.createElement("progress");combat;ownerRing=new _t(new Ts(1.03,1.18,42),new Ft({color:5302220,transparent:!0,opacity:.77,side:Pe,depthWrite:!1}));chainMesh;cracks;rift;sparks;sparkData;left=new R;right=new R;begin=new R;end=new R;direction=new R;link=new ge;twist=new Wi;destination=new R;sparkCount;motionTime=0;initialized=!1;update(t,e,i){const s=Math.max(0,e-t.spawnAt),r=t.state==="SPAWN",a=s<Ae.title||s>=Ae.title+Ae.titleDuration,o=s<Ae.title&&r;this.title.hidden!==a&&(this.title.hidden=a),this.hud.hidden!==o&&(this.hud.hidden=o);const c=t.ownerId&&t.state!=="DEFEATED"?Ni.alliedHp:t.maxHp;this.meter.max!==c&&(this.meter.max=c),this.meter.value!==t.hp&&(this.meter.value=t.hp),this.toggleHudClass("is-infected",t.phaseTwo&&!t.ownerId),this.toggleHudClass("is-allied",!!t.ownerId),this.toggleHudClass("is-owned",t.ownerId===this.localId);const l=t.ownerId?`◆ ${t.ownerId===this.localId?"你的隊友":t.ownerName??"已收編"}`:t.enraged?"狂暴":t.phaseTwo?"感染階段":"";this.allegiance.textContent!==l&&(this.allegiance.textContent=l);const u=t.scale??1,d=u>=1e3?u.toExponential(1):u.toFixed(2),h=t.ownerId?`體型 ×${d}`:`賞金 ${t.heldBounty??0} · 體型 ×${d}`;this.growth.textContent!==h&&(this.growth.textContent=h);const f=t.state==="ATTACK"&&t.attack?Ce[t.attack.kind].name:t.state==="ENRAGED"?"自刺狂暴":"";this.warning.textContent!==f&&(this.warning.textContent=f),this.ownerRing.visible=!!t.ownerId&&t.state!=="DESPAWN"&&t.state!=="DEFEATED",this.effects.visible=r,this.model.group.visible=!r||s>=Ae.reveal;const g=this.model.group,v=g.position.x,m=g.position.z,p=t.state==="DESPAWN"?Math.max(.001,1-ds(e-t.stateAt,260,Ni.collapseMs)):1;if(g.scale.setScalar(Math.min(u,1e20)*p),this.destination.set(t.x,t.y+(t.air??0),t.z),!this.initialized||r)g.position.copy(this.destination),g.rotation.y=t.yaw,this.initialized=!0;else{const M=1-Math.exp(-i*20);g.position.lerp(this.destination,M),g.rotation.y+=Math.atan2(Math.sin(t.yaw-g.rotation.y),Math.cos(t.yaw-g.rotation.y))*M}if(this.ownerRing.position.set(g.position.x,t.y+.07,g.position.z),this.ownerRing.scale.setScalar(Math.min(u,420)),this.ownerRing.material.color.setHex(t.ownerId===this.localId?5439456:8368127),r){const M=ds(s,Ae.breakChains,Ae.land);g.position.y=t.y+1.86*(1-M**2),this.model.group.visible&&this.model.entrancePose(s),this.showEntrance(s);return}this.motionTime+=i;const S=Math.max(0,e-t.stateAt),E=i>0&&Math.hypot(g.position.x-v,g.position.z-m)>i*.12,y=t.attack?Math.max(0,(e-t.attack.startedAt)*t.attack.rate):0;t.attack&&(t.state==="ATTACK"||t.state==="STAGGER"&&y<Ce[t.attack.kind].duration+150)?this.model.combatPose(t.attack.kind,y,t.enraged):t.state==="ENRAGED"?this.model.selfStabPose(S):t.state==="DEFEATED"||t.state==="ALLIED"||t.state==="DESPAWN"?this.model.collapsePose(S,t.state==="ALLIED"):this.model.pose(E?"walk":"idle",this.motionTime,t.enraged);let w=t.enraged?this.motionTime+1.2:null;t.state==="ENRAGED"&&(w=S>550?(S-550)/1e3:null),t.state==="ATTACK"&&t.attack?.kind==="burst"&&y>=Ce.burst.launch&&(w=(y-Ce.burst.launch)/1e3),this.model.updateParticles(this.motionTime,w,this.sparkCount<50),this.model.bladeBase.getWorldPosition(this.left),this.model.bladeTip.getWorldPosition(this.right),this.combat.update(t.attack,e,t.enraged,this.left,this.right)}showEntrance(t){const e=ds(t,0,550)*(1-ds(t,Ae.land+150,Ae.finish)),i=(t-Ae.land)/820;this.rift.material.uniforms.light.value=e,this.rift.material.uniforms.wave.value=i<1?i:-1,this.cracks.visible=t>=Ae.cracks,this.cracks.material.opacity=(.38+.3*Math.sin(t*.019)**2)*e,this.sparks.material.uniforms.opacity.value=e;const s=t/1e3;for(let r=0;r<this.sparkCount;r++){const a=r*2.399963+s*.5,o=(r*.618+s*.65)%1,c=.38+r%8*.28+o*(i>=0&&i<1?3.5*i:.5);this.sparkData[r*3]=Math.cos(a)*c,this.sparkData[r*3+1]=.04+o*(i>=0&&i<1?3.8:2.6),this.sparkData[r*3+2]=Math.sin(a)*c}this.sparks.geometry.attributes.position.needsUpdate=!0,this.updateChains(t)}updateChains(t){if(this.chainMesh.visible=t>=Ae.chains&&t<Ae.land+320,!this.chainMesh.visible)return;t>=Ae.reveal?(this.model.bindingPoints(this.left,this.right),this.left.sub(this.effects.position),this.right.sub(this.effects.position)):(this.left.set(-.7,3.8,0),this.right.set(.7,3.8,0));const e=ds(t,Ae.chains,Ae.reveal+110),i=ds(t,Ae.breakChains,Ae.land+320),s=t>=Ae.breakChains;let r=0;for(let a=0;a<Yu;a++){const[o,c,l]=o1[a];this.begin.set(o,c,l),this.end.copy(a%2===0?this.left:this.right),a>=2&&(this.end.y+=.76),this.end.lerp(this.begin,1-e),this.direction.subVectors(this.end,this.begin).normalize().negate();for(let u=0;u<Xo;u++){if(s&&u>=6&&u<=8)continue;const d=u/(Xo-1);if(this.link.position.lerpVectors(this.begin,this.end,d),s){const h=u<6?.7:1.37;this.link.position.y-=i*i*4.2*h,this.link.position.x+=(a%2===0?-1:1)*i*h}this.link.position.y<.12||(this.link.quaternion.setFromUnitVectors(qu,this.direction),this.link.quaternion.multiply(this.twist.setFromAxisAngle(qu,u%2*Math.PI*.5+i*(u%3))),this.link.updateMatrix(),this.chainMesh.setMatrixAt(r++,this.link.matrix))}}this.chainMesh.count=r,this.chainMesh.instanceMatrix.needsUpdate=!0}hideHud(){this.title.hidden||(this.title.hidden=!0),this.hud.hidden||(this.hud.hidden=!0)}toggleHudClass(t,e){this.hud.classList.contains(t)!==e&&this.hud.classList.toggle(t,e)}target(t,e){if(!BM(t,e))return null;const{position:i,rotation:s}=this.model.group;return{id:kM,x:i.x,y:i.y+hi,z:i.z,yaw:s.y,alive:!0,kind:"warden",scale:t.scale}}dispose(){this.model.dispose(),this.combat.dispose(),this.ownerRing.removeFromParent(),on(this.ownerRing),this.effects.removeFromParent(),on(this.effects),this.hud.remove(),this.title.remove()}}const l1=12286207;class h1{constructor(t,e){this.root=t,this.scene=e,this.badge.className="co-warden-buff",this.badge.hidden=!0,this.badge.title="武器傷害 +20% · 移動速度 +10%";const i=document.createElement("span");i.textContent="虛空祝福";const s=document.createElement("i");s.setAttribute("aria-hidden","true"),s.textContent="◆",this.badge.append(s,i,this.timer),this.notice.className="co-warden-notice",this.notice.hidden=!0,this.notice.setAttribute("role","status"),this.spawnNotice.className="co-warden-spawn-warning",this.spawnNotice.hidden=!0,this.spawnNotice.setAttribute("role","status");const r=document.createElement("strong");r.textContent=`${Ni.name}即將登場`;const a=document.createElement("span");a.textContent=Ni.locationLabel,this.spawnCountdown.setAttribute("aria-hidden","true"),this.spawnNotice.append(r,a,this.spawnCountdown),this.royalBadge.className="co-warden-royal",this.royalBadge.textContent="♛ 紫光王者",this.royalBadge.hidden=!0,t.append(this.badge,this.notice,this.spawnNotice,this.royalBadge)}badge=document.createElement("div");timer=document.createElement("b");notice=document.createElement("div");spawnNotice=document.createElement("div");spawnCountdown=document.createElement("b");royalBadge=document.createElement("div");ownerMark;aura=new Map;auraGeometry=new Ts(.82,.97,30);auraMaterial=new Ft({color:l1,transparent:!0,opacity:.69,depthWrite:!1,side:Pe});noticeUntil=0;lastWarningAt=null;showSpawnWarning(t,e){const i=t?t.spawnAt-e:0;if(this.spawnNotice.hidden=i<=0||i>Ni.warningMs,!t||this.spawnNotice.hidden)return!1;const s=`${Math.ceil(i/1e3)} 秒`;return this.spawnCountdown.textContent!==s&&(this.spawnCountdown.textContent=s),this.lastWarningAt===t.spawnAt?!1:(this.lastWarningAt=t.spawnAt,!0)}announce(t,e){const i={recruited:`${t.name} 擊敗並收編了虛空騎士`,destroyed:`${t.name} 擊倒了已收編的虛空騎士`,"player-slain":`${t.name} 被虛空騎士擊倒`},s=t.scoreAwarded??0;this.notice.textContent=t.kind==="player-slain"&&s?`${i[t.kind]} · ${t.ownerName?`${t.ownerName} +${s} 積分`:`騎士賞金 +${s}`}`:`${i[t.kind]}${s?` · +${s} 積分`:""}`,this.notice.hidden=!1,this.noticeUntil=e+3400}update(t,e,i,s,r=null,a=""){if(this.badge.hidden=i<=s,this.root.classList.toggle("co-warden-blessed",!this.badge.hidden),!this.badge.hidden){const c=`${Math.ceil((i-s)/1e3)}s`;this.timer.textContent!==c&&(this.timer.textContent=c)}this.notice.hidden=s>=this.noticeUntil,this.royalBadge.hidden=r===null||r!==a,this.ownerMark&&(this.ownerMark.visible=!1);const o=new Set;for(const c of t){const l=e.get(c.id);if(c.id===r&&c.alive&&c.connected!==!1&&l&&(this.ownerMark??=this.createOwnerMark(),this.ownerMark.visible=!0,this.ownerMark.position.copy(l.group.position)),!c.alive||(c.blessingUntil??0)<=s||!l)continue;o.add(c.id);let u=this.aura.get(c.id);if(!u){u=new de;for(const[d,h]of[[.05,-Math.PI/2],[1.43,-Math.PI*.32]]){const f=new _t(this.auraGeometry,this.auraMaterial);f.rotation.x=h,f.position.y=d,d>1&&f.scale.setScalar(.77),u.add(f)}this.aura.set(c.id,u),this.scene.add(u)}u.position.copy(l.group.position),u.rotation.y=s/600}for(const[c,l]of this.aura)o.has(c)||(l.removeFromParent(),this.aura.delete(c))}createOwnerMark(){const t=new de,e=document.createElement("canvas");e.width=128,e.height=96;const i=e.getContext("2d");if(i){i.fillStyle="#edc6ff",i.strokeStyle="#8b26ff",i.shadowColor="#ac36ff",i.shadowBlur=20,i.lineWidth=5,i.beginPath(),i.moveTo(19,25),i.lineTo(44,42),i.lineTo(64,16),i.lineTo(84,42),i.lineTo(109,25),i.lineTo(99,65),i.lineTo(29,65),i.closePath(),i.fill(),i.stroke(),i.fillRect(30,72,68,6);const r=new Ga(e);r.colorSpace=ei;const a=new dr(new ur({map:r,transparent:!0,depthWrite:!1}));a.position.y=2.55,a.scale.set(1.65,1.24,1),t.add(a)}const s=new _t(new Ts(.95,1.19,36),new Ft({color:12276735,transparent:!0,opacity:.84,depthWrite:!1,side:Pe}));return s.rotation.x=-Math.PI/2,s.position.y=.08,t.add(s),this.scene.add(t),t}hide(){this.badge.hidden=!0,this.notice.hidden=!0,this.spawnNotice.hidden=!0,this.royalBadge.hidden=!0,this.ownerMark&&(this.ownerMark.visible=!1),this.root.classList.remove("co-warden-blessed")}dispose(){for(const t of this.aura.values())t.removeFromParent();this.aura.clear(),this.auraGeometry.dispose(),this.auraMaterial.dispose(),this.ownerMark&&(this.ownerMark.removeFromParent(),on(this.ownerMark)),this.root.classList.remove("co-warden-blessed"),this.badge.remove(),this.notice.remove(),this.spawnNotice.remove(),this.royalBadge.remove()}}const Kr=(n,t,e)=>Math.max(t,Math.min(e,n)),$u=(n,t)=>(t-n+Math.PI*3)%(Math.PI*2)-Math.PI;class u1{constructor(t,e,i,s,r,a,o=0,c){this.root=t,this.socket=e,this.roomCode=i,this.roundId=s,this.onFatal=r,this.playerId=a,this.seq=o,this.diagnostics=new WM(t);const l=new cf;this.renderer=new Zd({antialias:l.antialias,powerPreference:"high-performance"}),this.renderer.setPixelRatio(l.pixelRatio),this.renderer.setClearColor(1489372),t.append(this.renderer.domElement),t.insertAdjacentHTML("beforeend",'<div class="co-feedback"></div><div class="co-hud"></div><div class="co-minimap"><canvas aria-label="以自己為中心的戰術雷達"></canvas></div>'+Af()),this.blessing=new h1(t,this.scene),this.prism=new Kd(this.scene,this.coarse),this.tacticalBoard=new qM(t,this.coarse),this.radarCanvas=t.querySelector(".co-minimap canvas"),this.radarContext=this.radarCanvas.getContext("2d"),this.hud=new Tf(t.querySelector(".co-hud")),this.aimFeedback=new of(t),this.feedback=new Mf(t.querySelector(".co-feedback")),this.armory=new Rf(t,u=>!this.ready||this.paused||!this.player.alive||!this.socket.connected?!1:(this.input.set({aim:!1}),u!==this.active&&(this.requestedWeapon=u,this.awaitingWeapon=!0),!0),()=>this.owned,this.restorePointerLock,u=>this.weapons[u].level),this.scene.add(this.arena.group,new Bd(16777215,1489372,2)),this.effects=new hf(this.scene,this.coarse),this.battle=new uf(t),this.makeGun(),this.appearance=new sf(this.gun),this.pickupFeedback=new ef(t,this.coarse),this.pickupPreview=new tf(t),this.scope=new lf(t,this.gun,this.coarse),this.makePickups(),this.coarse?this.mobile=new yf(t,this.input):(this.desktop=new xf(t,this.input),t.onclick=u=>{u.target.closest(".co-armory, [data-game-ui], button, input")||this.restorePointerLock()}),this.stopResize=Qd(t,(u,d)=>{this.cam.aspect=u/d,this.cam.updateProjectionMatrix(),this.renderer.setSize(u,d,!1),this.sizeRadar()}),this.socket.on("match:prismUnlock",this.onPrismUnlock),this.socket.on("match:prismLaunch",this.onPrismLaunch),this.socket.on("match:prismImpact",this.onPrismImpact),this.socket.on("match:pickup",this.onPickup),this.socket.on("match:snapshot",this.onSnapshot),this.socket.on("match:shot",this.onShot),this.socket.on("match:hit",this.onHit),this.socket.on("match:kill",this.onKill),this.socket.on("match:damage",this.onDamage),this.socket.on("match:warden",this.onWardenNotice),this.socket.on("disconnect",this.onDisconnect),this.socket.on("connect_error",this.onConnectError),this.loop=new Cf((u,d)=>this.update(u,d)),this.settings=new vf(t,()=>{this.tacticalBoard.close(),this.root.dispatchEvent(new Event("combat:reset")),this.sendResetInput(),this.desktop?.setEnabled(!1),this.mobile?.setEnabled(!1),this.armory.setEnabled(!1)},u=>{this.desktop?.setEnabled(!0),this.mobile?.setEnabled(!0),this.armory.setEnabled(!0),u&&this.restorePointerLock()},!0,c?{...c,code:i??""}:void 0)}scene=new Cl;cam=new ii(75,1,Ol,hl);renderer;input=new _f(()=>this.sendResetInput());arena=new Sf;player=new wf;avatars=new Map;pickupMeshes=new Map;pending=[];snaps=[];seq=0;hud;aimFeedback;armory;feedback;effects;battle;seenShots=new Set;statusTimer=0;loop;settings;desktop;mobile;stopResize=()=>{};owned=new Set(["ar"]);active="ar";weapons=Ep();score=0;bounty=By;scoreTarget=Qc;endsAt=0;kills=0;deaths=0;dead=!1;killer="";ping=0;pingTimer=0;serverClockOffset=0;hasClockOffset=!1;notice="";noticeT=0;slowUntil=0;disposed=!1;ready=!1;paused=!1;lastLocalShot=0;recoilPitch=0;recoilYaw=0;gun=new de;gunFlash;gunMaterial=new Ft({color:2106932});handMaterial=new Ft({color:16777215});coarse=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>0;movementClock=new HM;previousPosition=new R;jumpQueued=!1;reloadQueued=!1;requestedWeapon;life=0;inputReset=0;resyncCount=0;predictionAt=0;diagnostics;damageTimeline=new OM;deathReceivedAt;cameraOffset=new R;visualPosition=new R;remoteTarget=new R;pickupPreview;pickupFeedback;appearance;tacticalBoard;scope;physicsTime=0;awaitingWeapon=!1;warden;destroyedParts=new Set;blessing;prism;prismAuraPosition=new R;blessingUntil=0;snapshotInterval=50;snapshotJitter=0;lastSnapshotArrival=0;radarCanvas;radarContext;radarPlayers=new Map;radarTimer=0;start(){this.disposed||(this.paused=!1,this.loop.start())}pause(){if(this.disposed)return;this.paused=!0,this.warden?.hideHud(),this.blessing.hide(),this.tacticalBoard.setActive(!1),this.settings?.setActive(!1),this.desktop?.setEnabled(!1),this.mobile?.setEnabled(!1),this.armory.setEnabled(!1),this.input.reset(),this.loop.stop();const t=document.pointerLockElement;t&&(t===this.root||this.root.contains(t))&&document.exitPointerLock?.()}resume(){this.disposed||(this.paused=!1,this.tacticalBoard.setActive(!0),this.settings?.setActive(!0),this.desktop?.setEnabled(!0),this.mobile?.setEnabled(!0),this.armory.setEnabled(!0),this.loop.start())}restorePointerLock=()=>{if(!(this.disposed||this.paused)&&!(this.coarse||this.settings?.isOpen||document.pointerLockElement===this.root))try{this.root.requestPointerLock?.()?.catch(()=>{})}catch{}};sendResetInput(){const t=this.requestedWeapon;if(this.jumpQueued=!1,this.reloadQueued=!1,this.requestedWeapon=void 0,this.movementClock.reset(),this.disposed||!this.ready||!this.socket?.connected||!this.player.alive)return;const e={roundId:this.roundId,life:this.life,seq:++this.seq,clientTime:this.serverNow(),moveX:0,moveY:0,yaw:this.player.yaw,pitch:this.player.pitch,jump:!1,reload:!1,sprint:!1,aim:!1,reset:!0,weapon:t};this.pending=[e],this.socket.emit("match:input",e)}serverNow(){return Date.now()-this.serverClockOffset}makeGun(){const t=new _t(new be(.18,.16,.9),this.gunMaterial);t.position.set(.34,-.28,-.8);const e=[[[.17,.48,.18],[.47,-.52,-.5]],[[.17,.43,.18],[.12,-.55,-.63]],[[.2,.18,.2],[.37,-.43,-.74]],[[.2,.18,.2],[.17,-.42,-.86]]];for(const[i,s]of e){const r=new _t(new be(...i),this.handMaterial);r.position.set(...s),this.gun.add(r)}this.gunFlash=new _t(new bn(.08),new Ft({color:16766045})),this.gunFlash.position.set(.34,-.25,-1.3),this.gunFlash.visible=!1,this.gun.add(t,this.gunFlash),this.cam.add(this.gun),this.scene.add(this.cam)}makePickups(){for(const t of ws){const e=xe[t],i=new _t(new bn(.75),new Ft({color:e.color}));i.visible=!1,this.pickupMeshes.set(t,i),this.scene.add(i)}}predict(t){this.previousPosition.copy(this.player.position);const e={x:this.player.position.x,y:this.player.position.y,z:this.player.position.z,yaw:this.player.yaw,pitch:this.player.pitch,velocityY:this.player.velocityY,supportId:this.player.supportId,jumpsUsed:this.player.jumpsUsed,alive:this.player.alive};this.predictionAt+=Hi*1e3,qf(e,t,uh(this.destroyedParts),this.physicsTime,this.predictionAt,this.slowUntil,this.blessingUntil),this.physicsTime+=Hi,this.player.position.set(e.x,e.y,e.z),this.player.velocityY=e.velocityY,this.player.jumpsUsed=e.jumpsUsed,this.player.supportId=e.supportId??null}visualBase(t){return t.copy(this.previousPosition).lerp(this.player.position,this.movementClock.alpha)}onSnapshot=t=>{if(this.disposed||this.paused||!Pi(t,this.roundId))return;if(!Array.isArray(t?.players)||!Array.isArray(t?.pickups))return this.onFatal("多人同步資料無效");const e=this.snaps[this.snaps.length-1];if(e&&t.tick<=e.tick)return;const i=!this.ready;this.ready=!0;const s=performance.now();if(this.lastSnapshotArrival){const m=s-this.lastSnapshotArrival;this.diagnostics.record("snapshot_ms",m),this.snapshotJitter=this.snapshotJitter*.8+Math.abs(m-this.snapshotInterval)*.2,this.snapshotInterval=this.snapshotInterval*.85+m*.15}for(this.lastSnapshotArrival=s,t.byId=new Map(t.players.map(m=>[m.id,m])),this.snaps.push(t);this.snaps.length>12;)this.snaps.shift();const r=t.destroyedBuildingParts??[];(r.length!==this.destroyedParts.size||r.some(m=>!this.destroyedParts.has(m)))&&(this.destroyedParts=new Set(r),this.arena.setDestroyed(this.destroyedParts));const a=t.byId.get(this.playerId);if(!a)return;const o=this.damageTimeline.reconcile({...a,life:a.life??0},t.serverTime);i&&(this.seq=Math.max(this.seq,o.ack));const c=this.player.alive,l=!c&&o.alive;this.slowUntil=o.slowUntil,this.blessingUntil=o.alive?o.blessingUntil??0:0;const u=this.life!==(o.life??0),d=i||u||this.inputReset!==(o.inputReset??0);this.life=o.life??0,this.inputReset=o.inputReset??0,this.pending=this.pending.filter(m=>m.seq>Math.max(o.ack,o.discardedThrough??0)),i||u||c!==o.alive?(this.pending=[],this.movementClock.reset(),this.jumpQueued=!1,this.reloadQueued=!1,this.requestedWeapon=void 0,this.seq=Math.max(this.seq,o.ack,o.discardedThrough??0),this.resyncCount++,this.armory.close(!1),this.mobile?.reset(),this.desktop?.setEnabled(!this.paused&&!this.settings?.isOpen)):d&&(this.movementClock.reset(),this.resyncCount++),this.visualPosition.copy(this.cam.position);const h=this.player.position.clone(),f={x:o.x,y:o.y,z:o.z,yaw:o.yaw,pitch:o.pitch,velocityY:o.velocityY,supportId:o.supportId,jumpsUsed:o.jumpsUsed,alive:o.alive};this.physicsTime=GM(f,this.pending,uh(this.destroyedParts),t.simulationTime,t.serverTime,this.slowUntil,this.blessingUntil),this.predictionAt=t.serverTime+this.pending.length*Hi*1e3;const g=Math.hypot(f.x-h.x,f.y-h.y,f.z-h.z),v=d||l||g>10;this.diagnostics.record("correction",g),this.player.position.set(f.x,f.y,f.z),this.player.velocityY=f.velocityY,this.player.jumpsUsed=f.jumpsUsed,this.player.supportId=f.supportId??null,(i||l)&&(this.player.yaw=o.yaw,this.player.pitch=o.pitch),v?(this.previousPosition.copy(this.player.position),this.cameraOffset.set(0,0,0)):(this.previousPosition.add(this.player.position).sub(h),this.visualBase(h),this.cameraOffset.copy(this.visualPosition).sub(h)),this.player.hp=o.hp,this.player.alive=o.alive,this.handMaterial.color.setHex(o.color),this.active!==o.activeWeapon&&(this.input.set({aim:!1}),this.awaitingWeapon=!1),this.active=o.activeWeapon,this.awaitingWeapon=!!this.requestedWeapon||this.pending.some(m=>m.weapon!==void 0&&m.weapon!==o.activeWeapon),this.owned=new Set(o.ownedWeapons),this.weapons=o.weapons,this.score=o.score,this.bounty=o.bounty,this.scoreTarget=t.scoreTarget,this.endsAt=t.endsAt,this.kills=o.kills,this.deaths=o.deaths,this.dead=!o.alive,this.prism.syncOrbs(t.prismOrbs??[]),this.syncAvatars(t.players),this.syncPickups(t.pickups),this.armory.render(this.active),this.updatePanels(t)};updatePanels(t){this.tacticalBoard.update(t.players,this.roomCode,this.ping),this.radarPlayers=t.byId??new Map(t.players.map(e=>[e.id,e]))}syncAvatars(t){const e=new Set(t.map(i=>i.id));for(const[i,s]of this.avatars)e.has(i)||(s.dispose(),this.avatars.delete(i));for(const i of t){if(i.id===this.playerId)continue;let s=this.avatars.get(i.id);s||(s=new bf(i.id,i.name,i.color),s.respawn(i.x,i.z),s.position.y=i.y-1.65,s.group.position.copy(s.position),this.avatars.set(i.id,s),this.scene.add(s.group,s.deathGroup)),s.setWeapon(i.activeWeapon),i.alive&&!s.alive&&s.respawn(i.x,i.z),!i.alive&&s.alive&&s.damage(100)}}syncPickups(t){for(const e of t){const i=this.pickupMeshes.get(e.id);i&&(i.position.set(e.x,e.y+.9,e.z),i.visible=e.available)}}sizeRadar(){const t=this.radarCanvas?.getBoundingClientRect();if(!t?.width||!t.height)return;const e=Math.min(window.devicePixelRatio||1,1.5),i=Math.round(t.width*e),s=Math.round(t.height*e);(this.radarCanvas.width!==i||this.radarCanvas.height!==s)&&(this.radarCanvas.width=i,this.radarCanvas.height=s)}drawRadar(t){if(this.radarTimer+=t,this.radarTimer<1/30)return;this.radarTimer%=1/30;const e=this.radarCanvas,i=e.getBoundingClientRect();if(!i.width||!i.height)return;this.sizeRadar();const s=this.snaps[this.snaps.length-1],r=Fu(s?.warden),a=uy(s?.warden??null,s?.wardenWarning??null,this.playerId),o=e.width/i.width,c=this.radarContext,l=i.width,u=i.height,d=this.kills>0,h=l/2,f=u/2+(d&&a?-7:a?2:4),g=Math.min(l,u)*(d&&a?.24:a?.32:.38);c.setTransform(o,0,0,o,0,0),c.clearRect(0,0,l,u),c.strokeStyle="#ffffff24",c.lineWidth=1,c.beginPath(),c.arc(h,f,g,0,Math.PI*2),c.moveTo(h-g,f),c.lineTo(h+g,f),c.moveTo(h,f-g),c.lineTo(h,f+g),c.stroke(),c.fillStyle="#dfffff",c.font="800 9px Arial",c.fillText("戰術雷達",8,14);const v=this.player.position.y-1.65,m=v<-2?"B1":v>=9?"RF":v>=3?"2F":"1F",p="戰術雷達 "+m+(d?" · 光譜掃描儀":"")+(a?" · "+a.label:"");e.getAttribute("aria-label")!==p&&e.setAttribute("aria-label",p),c.fillText(m,60,14);const S=Math.cos(this.player.yaw),E=Math.sin(this.player.yaw),y=(T,_)=>jd(T-this.player.position.x,_-this.player.position.z,S,E,g),w=(T,_,A)=>{Math.abs(T)<=2.5||(c.fillStyle="#fff",c.fillText(T>0?"▲":"▼",_-4,A-8))},M=(T,_)=>{c.fillStyle="#bf65ff",c.strokeStyle="#f2ccff",c.lineWidth=1,c.beginPath(),c.moveTo(T-6,_-5),c.lineTo(T-3,_-3),c.lineTo(T,_-8),c.lineTo(T+3,_-3),c.lineTo(T+6,_-5),c.lineTo(T+4,_+1),c.lineTo(T-4,_+1),c.closePath(),c.fill(),c.stroke()};for(const T of this.radarPlayers.values()){if(T.id===this.playerId||!T.alive)continue;const _=this.avatars.get(T.id),{x:A,y:P,offRadar:L}=y(_?.position.x??T.x,_?.position.z??T.z),F=h+A,B=f+P;c.beginPath(),c.arc(F,B,L?5:4,0,Math.PI*2),c.fillStyle="#"+T.color.toString(16).padStart(6,"0"),c.fill(),L&&(c.strokeStyle="#ffffffcc",c.lineWidth=1.5,c.stroke()),T.id===r&&M(F,B),w(T.y-this.player.position.y,F,B)}if(a){const{x:T,y:_,offRadar:A}=y(a.x,a.z),P=h+T,L=f+_;c.beginPath(),c.moveTo(P,L-7),c.lineTo(P+7,L),c.lineTo(P,L+7),c.lineTo(P-7,L),c.closePath(),c.fillStyle=a.pending?"#172742":a.color,c.fill(),c.lineWidth=A?2.2:1.6,c.strokeStyle=a.pending?a.color:"#2f1723",c.stroke(),w(a.y-v,P,L),c.fillStyle=a.color,c.fillText("◆ "+a.label,8,u-5)}if(d&&s){const{x:T,y:_,z:A}=this.player.position;Jd(c,s.pickups,this.owned,{x:T,y:_,z:A,yaw:this.player.yaw},h,f,g,u-(a?12:0))}c.save(),c.translate(h,f),c.fillStyle="#fff",c.shadowColor="#55f1ae",c.shadowBlur=7,c.beginPath(),c.moveTo(0,-7),c.lineTo(5,6),c.lineTo(0,3),c.lineTo(-5,6),c.closePath(),c.fill(),c.restore(),r===this.playerId&&this.player.alive&&M(h,f-9)}showNotice(t){this.notice=t,this.noticeT=2.7}onPrismUnlock=t=>{this.disposed||this.paused||!Pi(t,this.roundId)||(this.prism.unlock(t.x,t.y,t.z),t.id===this.playerId&&this.showNotice("稜鏡脈衝砲已解鎖"))};onPrismLaunch=t=>{if(this.disposed||this.paused||!this.ready||!Pi(t,this.roundId))return;if(t.ownerId===this.playerId){this.prism.syncLaunch(t);return}const e=this.avatars.get(t.ownerId)?.muzzlePosition(void 0,"prism")??new R(...t.position);this.prism.launch(t,e)};onPrismImpact=t=>{this.disposed||this.paused||!this.ready||!Pi(t,this.roundId)||this.prism.impact(t.id,t.position)};updatePrism(t){const e=new Set;for(const i of this.radarPlayers.values()){const s=i.id===this.playerId;if(!(s?this.player.alive:i.alive)||!i.ownedWeapons.includes("prism"))continue;const r=this.avatars.get(i.id);if(!s&&!r)continue;const a=s?this.prismAuraPosition.copy(this.player.position).addScaledVector(ge.DEFAULT_UP,-1.65):r.group.position;this.prism.aura(i.id,a,s),e.add(i.id)}this.prism.retainAuras(e),this.prism.update(t,!0,this.serverNow()/1e3)}onShot=t=>{if(this.disposed||this.paused||!this.ready||!Pi(t,this.roundId)||this.seenShots.has(t.eventId))return;this.seenShots.add(t.eventId),this.seenShots.size>512&&this.seenShots.delete(this.seenShots.values().next().value);const e=new R,i=t.id===this.playerId;if(i)e.set(...t.origin);else{const s=this.avatars.get(t.id);s?s.muzzlePosition(e):e.set(...t.origin).add(new R(.34,-.27,0))}this.effects.play(t,e,!i,i,!i);for(const s of t.hits)this.avatars.get(s.targetId)?.hit()};onPickup=t=>{this.disposed||this.paused||!Pi(t,this.roundId)||this.pickupFeedback.push(t,t.eventId)};onHit=t=>{!this.disposed&&!this.paused&&this.ready&&Pi(t,this.roundId)&&this.battle.hit(t)};onKill=t=>{this.disposed||this.paused||!this.ready||!Pi(t,this.roundId)||(t.attackerId===this.playerId&&this.kills===0&&this.showNotice("光譜掃描儀已啟用"),this.battle.kill(t))};onDamage=t=>{if(this.disposed||this.paused||!this.ready||!Pi(t,this.roundId)||!this.damageTimeline.accept(t,this.life))return;this.player.hp=t.hp,t.hp===0&&(this.deathReceivedAt=performance.now(),this.player.alive=!1,this.dead=!0,this.pending=[],this.jumpQueued=!1,this.reloadQueued=!1,this.requestedWeapon=void 0,this.awaitingWeapon=!1,this.movementClock.reset(),this.previousPosition.copy(this.player.position),this.input.clearCombat(),this.input.set({moveX:0,moveY:0,sprint:!1})),this.killer=t.name;const e=t.wardenAttack?Ce[t.wardenAttack].name:t.weapon?xe[t.weapon].label:"";this.notice=e?`遭 ${t.name} 的 ${e} 擊中`:`遭 ${t.name} 擊中`,this.noticeT=.8,this.feedback.damage(t.damage,new R(t.from.x,0,t.from.z),this.player.position,new R(-Math.sin(this.player.yaw),0,-Math.cos(this.player.yaw)))};onWardenNotice=t=>{!this.disposed&&!this.paused&&Pi(t,this.roundId)&&this.blessing.announce(t,this.serverNow())};onDisconnect=()=>{this.pause(),this.socket.sendBuffer.length=0,this.onFatal("連線已中斷")};onConnectError=()=>this.onFatal("無法連線至遊戲伺服器");measurePing(t){if(this.pingTimer-=t,this.pingTimer>0)return;this.pingTimer=1;const e=Date.now();this.socket.emit("net:ping",i=>{if(this.disposed)return;this.ping=Date.now()-e;const s=Date.now()-i-this.ping/2;this.serverClockOffset=this.hasClockOffset?this.serverClockOffset*.8+s*.2:s,this.hasClockOffset=!0})}updateRemotePlayers(t){if(!this.snaps.length)return;const e=Kr(80+this.ping*.1+this.snapshotJitter*1.5,80,120),i=this.serverNow()-e;let s=this.snaps[0],r=this.snaps[0],a=0;const o=this.snaps[this.snaps.length-1];if(i>=o.serverTime&&this.snaps.length>1){s=this.snaps[this.snaps.length-2],r=o;const l=Math.max(1,r.serverTime-s.serverTime);a=1+Math.min(75,i-r.serverTime)/l}else{for(let l=1;l<this.snaps.length;l++)if(this.snaps[l].serverTime>=i){s=this.snaps[l-1],r=this.snaps[l];break}a=s===r?0:Kr((i-s.serverTime)/Math.max(1,r.serverTime-s.serverTime),0,1)}const c=1-Math.exp(-t*30);for(const[l,u]of this.avatars){const d=s.byId?.get(l),h=r.byId?.get(l);if(!(!d||!h)){if(this.remoteTarget.set(d.x+(h.x-d.x)*a,d.y+(h.y-d.y)*a-1.65,d.z+(h.z-d.z)*a),h.supportId!==null&&h.supportId===d.supportId){const f=Ks(h.supportId,s.simulationTime),g=Ks(h.supportId,r.simulationTime),v=Ks(h.supportId,this.physicsTime);this.remoteTarget.x+=v.x-(f.x+(g.x-f.x)*a),this.remoteTarget.y+=v.y-(f.y+(g.y-f.y)*a),this.remoteTarget.z+=v.z-(f.z+(g.z-f.z)*a),u.group.position.copy(this.remoteTarget)}else u.group.position.lerp(this.remoteTarget,c);u.group.rotation.y+=$u(u.group.rotation.y,d.yaw+$u(d.yaw,h.yaw)*a)*c,u.position.copy(u.group.position),u.updateVisual(t,Math.abs(h.x-d.x)+Math.abs(h.z-d.z)>.02,!0)}}}updateWarden(t){const e=this.snaps[this.snaps.length-1],i=this.hasClockOffset?this.serverNow():e?.serverTime??this.serverNow();if(this.blessing.showSpawnWarning(e?.wardenWarning??null,i)&&this.battle.wardenWarning(),!e?.warden){this.warden?.dispose(),this.warden=void 0;return}this.warden??=new c1(this.scene,this.root,this.coarse,this.playerId),this.warden.update(e.warden,i,t)}update(t,e=t){if(this.disposed||this.paused||(this.diagnostics.record("frame_ms",e*1e3),this.measurePing(t),!this.ready))return;this.diagnostics.beginCombatFrame(),this.desktop?.update();const i=this.input.getState(),s=this.tacticalBoard.isOpen||this.armory.isOpen||!!this.settings?.isOpen||this.paused,r=this.weapons[this.active].reloadUntil>this.serverNow();(this.active!=="sniper"||r||i.reload||i.switchWeapon||!this.player.alive||s||this.awaitingWeapon)&&(this.input.set({aim:!1}),i.aim=!1),s&&(i.shoot=!1,i.jump=!1,i.reload=!1,i.switchWeapon=0,this.jumpQueued=!1,this.reloadQueued=!1,this.input.clearCombat());const a=this.scope.update(this.active,i,this.player.alive,r,s);if(a&&(i.lookX*=.25,i.lookY*=.25),this.player.yaw-=i.lookX*.0024,this.player.pitch=Kr(this.player.pitch-i.lookY*.0021,-1.35,1.35),this.jumpQueued||=i.jump,this.reloadQueued||=i.reload,i.switchWeapon){const w=xi[i.switchWeapon-1];w&&this.owned.has(w)&&w!==this.active&&(this.requestedWeapon=w,this.awaitingWeapon=!0)}let o=!1;const c=xe[this.active],l=this.weapons[this.active],u=this.serverNow();e>al/1e3&&(this.sendResetInput(),e=0),this.player.alive&&this.movementClock.advance(e,()=>{const w={roundId:this.roundId,life:this.life,seq:++this.seq,clientTime:this.serverNow(),moveX:i.moveX,moveY:i.moveY,yaw:this.player.yaw,pitch:this.player.pitch,jump:this.jumpQueued,reload:this.reloadQueued,sprint:!!i.sprint,aim:a,weapon:this.requestedWeapon};this.jumpQueued=!1,this.reloadQueued=!1,this.requestedWeapon=void 0,i.shoot&&!s&&!this.awaitingWeapon&&u-this.lastLocalShot>=c.fireDelay*1e3&&l.ammo>0&&l.reloadUntil<=u&&(w.fire=!0,o=!0,this.recoilPitch=this.active==="prism"?.12:Math.min(.04,this.recoilPitch+.009),this.recoilYaw=Kr(this.recoilYaw+(this.seq%2?.0025:-.0025),-.012,.012),navigator.vibrate?.(8),this.lastLocalShot=u),this.pending.push(w),this.predict(w),this.socket.emit("match:input",w)}),this.pending.length>120&&this.sendResetInput(),this.updateWarden(t),this.updateRemotePlayers(t),this.updatePrism(t),this.blessing.update(this.radarPlayers.values(),this.avatars,this.blessingUntil,this.serverNow(),Fu(this.snaps[this.snaps.length-1]?.warden),this.playerId);for(const w of this.pickupMeshes.values())w.rotation.y+=t*2;this.drawRadar(t),this.noticeT=Math.max(0,this.noticeT-t),this.effects.update(t),this.feedback.update(t,this.player.hp);const d=Math.exp(-t*16);this.recoilPitch*=d,this.recoilYaw*=d;const h=Math.pow(.5,t/.12),f=Math.pow(.5,t/.08);this.cameraOffset.x*=h,this.cameraOffset.z*=h,this.cameraOffset.y*=f,this.cameraOffset.lengthSq()<1e-6&&this.cameraOffset.set(0,0,0),this.visualBase(this.visualPosition),this.visualPosition.add(this.cameraOffset),this.cam.position.copy(this.visualPosition),this.cam.rotation.set(this.player.pitch,this.player.yaw,0,"YXZ"),this.gun.rotation.set(this.recoilPitch,this.recoilYaw,0),this.gun.position.z=this.recoilPitch*2;const g=l.reloadUntil>this.serverNow();if(this.appearance.update(this.active,l.level),this.pickupFeedback.update(t),this.hud.render({quickReloadSeconds:Math.max(0,Math.ceil((l.quickReloadUntil-this.serverNow())/1e3)),level:l.level,capacity:wi(this.active,l.level),hp:this.player.hp,ammo:l.ammo,reserve:1/0,label:c.label,notice:this.noticeT?this.notice:"",kills:this.kills,deaths:this.deaths,dead:this.dead,killer:this.killer,hit:!1,kill:!1,reloading:g,score:this.score,bounty:this.bounty,scoreTarget:this.scoreTarget,remainingSeconds:Math.max(0,Math.ceil((this.endsAt-this.serverNow())/1e3))}),this.cam.updateMatrixWorld(!0),this.battle.update(t,this.cam),this.statusTimer+=t,this.statusTimer>=.08){this.statusTimer=0;const w=this.serverNow();for(const M of this.radarPlayers.values())if(M.alive&&(M.burnUntil>w||M.slowUntil>w)){const T=this.avatars.get(M.id);T&&this.effects.status(T.position.clone().add(new R(0,1.22,0)),M.burnUntil>w?"flame":"ice")}}this.arena.update(this.physicsTime,Ly(this.snaps[this.snaps.length-1],this.serverNow()),this.renderer);const v=af({x:this.player.position.x,y:this.player.position.y,z:this.player.position.z,yaw:this.player.yaw,pitch:this.player.pitch}),m=[...this.avatars].map(([w,M])=>({id:w,x:M.position.x,y:M.position.y+1.65,z:M.position.z,yaw:M.group.rotation.y,alive:M.alive})),p=Qr(this.physicsTime,this.destroyedParts),S=this.snaps[this.snaps.length-1]?.warden,E=S&&this.warden?.target(S,this.playerId);E&&m.push(E);const y=Qs(this.gunFlash,this.active);if(o){const w=this.cam.position.toArray(),M=this.cam.getWorldDirection(new R).toArray();if(this.active==="prism"){const T=cd(`local:${this.seq}`,this.playerId,w,M);this.prism.launch(T,y,!1)}else{const _={...this.diagnostics.measure("shotCPU_ms",()=>ad(this.active,w,M,m,Math.random,p,a,l.level)),eventId:"local:"+this.seq,id:this.playerId,weapon:this.active,origin:w,dir:M};this.effects.play(_,y,!0,!0,!0,!1)}}this.pickupPreview.update([...this.pickupMeshes].map(([w,M])=>({id:w,position:M.position,available:M.visible,owned:this.owned.has(w),state:this.weapons[w]})),this.cam.position,p,this.player.alive&&!s),this.effects.updateLocalMuzzle(y,this.active,this.cam.position,p),this.diagnostics.measure("flameCPU_ms",()=>this.effects.localFlame(this.player.alive&&!s&&!this.awaitingWeapon&&i.shoot&&this.active==="flame"&&!g&&l.ammo>0,Qs(this.gunFlash,this.active),this.cam.position,this.cam.getWorldDirection(new R),p,t,m,l.level)),this.aimFeedback.update(s||!this.player.alive?"neutral":this.diagnostics.measure("aimCPU_ms",()=>rf(this.active,v.origin,v.direction,m,p,l.level)),this.player.alive&&!s),this.scope.render(this.renderer,this.scene,this.cam),this.diagnostics.endCombatFrame(),this.deathReceivedAt!==void 0&&(this.diagnostics.record("deathFeedback_ms",performance.now()-this.deathReceivedAt),this.deathReceivedAt=void 0),this.diagnostics.update(t,{rtt:this.ping,pending:this.pending.length,camera:this.cameraOffset.length(),resets:this.resyncCount})}dispose(){if(!this.disposed){this.disposed=!0,this.paused=!0,this.ready=!1,this.loop.stop(),this.diagnostics.dispose(),this.socket.off("match:pickup",this.onPickup),this.socket.off("match:snapshot",this.onSnapshot),this.socket.off("match:shot",this.onShot),this.socket.off("match:hit",this.onHit),this.socket.off("match:kill",this.onKill),this.socket.off("match:damage",this.onDamage),this.socket.off("match:warden",this.onWardenNotice),this.socket.off("disconnect",this.onDisconnect),this.socket.off("connect_error",this.onConnectError),this.stopResize(),this.root.onclick=null,this.desktop?.dispose(),this.mobile?.dispose(),this.tacticalBoard.dispose(),this.settings?.dispose(),this.armory.dispose(),this.pickupPreview.dispose(),this.pickupFeedback.dispose(),this.scope.dispose(),this.effects.dispose(),this.battle.dispose(),this.feedback.dispose(),this.hud.dispose(),this.aimFeedback.dispose(),this.warden?.dispose(),this.warden=void 0,this.socket.off("match:prismUnlock",this.onPrismUnlock),this.socket.off("match:prismLaunch",this.onPrismLaunch),this.socket.off("match:prismImpact",this.onPrismImpact),this.prism.dispose(),this.blessing.dispose();for(const t of this.avatars.values())t.dispose();this.avatars.clear(),on(this.scene),this.scene.clear(),this.pickupMeshes.clear(),this.pending=[],this.snaps=[],this.radarPlayers.clear(),this.seenShots.clear(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),document.pointerLockElement===this.root&&document.exitPointerLock?.(),this.root.replaceChildren()}}}const ol="chroma-multiplayer-session";function Zf(){try{const n=JSON.parse(sessionStorage.getItem(ol));return typeof n?.code=="string"&&typeof n?.playerId=="string"&&typeof n?.resumeToken=="string"?n:null}catch{return null}}function Zu(n){try{n?sessionStorage.setItem(ol,JSON.stringify({code:n.code,playerId:n.playerId,resumeToken:n.resumeToken})):sessionStorage.removeItem(ol)}catch{}}function Kf({code:n,onResume:t,disabled:e=!1}){return O.jsxs("button",{type:"button",className:"co-resume-card",onClick:t,disabled:e,children:[O.jsx("span",{className:"co-resume-icon","aria-hidden":"true",children:O.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[O.jsx("path",{d:"M4 10a8 8 0 1 1 1.8 7.1M4 4v6h6"}),O.jsx("path",{d:"m11 9 4 3-4 3V9Z"})]})}),O.jsxs("span",{className:"co-resume-copy",children:[O.jsxs("span",{className:"co-resume-eyebrow",children:["繼續你的對戰 ",O.jsx("span",{children:n})]}),O.jsx("strong",{children:"返回上一場"}),O.jsx("small",{children:"回到原本的房間，與隊友再度集合"})]}),O.jsx("span",{className:"co-resume-arrow","aria-hidden":"true",children:"↗"})]})}function jf({notice:n}){const t=n.kind==="reconnected";return O.jsxs("div",{className:`mp-notice ${t?"is-restored":"is-offline"}`,children:[O.jsx("span",{className:"mp-notice-icon","aria-hidden":"true",children:t?"↗":"!"}),O.jsxs("span",{className:"mp-notice-copy",children:[O.jsxs("span",{children:[O.jsx("b",{children:n.name}),t?" 已恢復連線":" 已斷線"]}),O.jsx("small",{children:t?"已回到房間，繼續對戰":"席位保留 60 秒，等待重新連線"})]}),O.jsx("time",{dateTime:new Date(n.at).toISOString(),children:new Date(n.at).toLocaleTimeString("zh-TW",{hour12:!1,hour:"2-digit",minute:"2-digit"})})]})}function d1({notices:n}){const[t,e]=zt.useState(()=>Date.now()),i=n.filter(s=>s.expiresAt>t).slice(-3);return zt.useEffect(()=>{const s=n.filter(o=>o.expiresAt>t);if(!s.length)return;const r=Math.min(...s.map(o=>o.expiresAt)),a=setTimeout(()=>e(Date.now()),Math.max(0,r-Date.now()));return()=>clearTimeout(a)},[n,t]),i.length?O.jsx("aside",{className:"mp-broadcast-toasts","aria-label":"房間連線通知",role:"log","aria-live":"polite","aria-relevant":"additions",children:i.map(s=>O.jsx(jf,{notice:s},s.id))}):null}function Ku({notices:n=[],floating:t=!1}){return n.length?t?O.jsx(d1,{notices:n}):O.jsxs("section",{className:"mp-broadcast","aria-label":"房間廣播",children:[O.jsxs("header",{children:[O.jsxs("span",{children:[O.jsx("i",{"aria-hidden":"true"}),"房間廣播"]}),O.jsx("small",{children:"連線動態"})]}),O.jsx("div",{className:"mp-broadcast-log",role:"log","aria-live":"polite","aria-relevant":"additions",children:n.slice(-5).map(e=>O.jsx(jf,{notice:e},e.id))})]}):null}const f1="https://dca-simulator-uw4r.onrender.com",qo="https://dca-simulator-uw4r.onrender.com".trim().replace(/\/+$/,""),p1=n=>/^https?:\/\/(localhost|127(?:\.\d+){3})(?::|\/|$)/i.test(n),m1=qo&&!p1(qo)?qo:f1,g1={INVALID_NICKNAME:"暱稱需為 2 到 16 個字元",INVALID_ROOM_CODE:"請輸入 6 碼房間碼",ROOM_NOT_FOUND:"房間已不存在，請重新加入或建立房間",ROOM_FULL:"房間已滿（包含斷線保留席位）",ROUND_ENDING:"本局正在結算，請稍後再加入",SESSION_EXPIRED:"上一場席位已過期，或伺服器已重啟，請用房號重新加入",HOST_ONLY:"只有目前房主可以操作",NOT_READY:"需要至少兩位在線玩家才能開始",INVALID_STATE:"房間狀態已改變，請重試",ALREADY_IN_ROOM:"你已在房間內，請先離開"},Yo=n=>g1[n]||n||"操作失敗，請重試";function v1({onBack:n,resumeOnMount:t=!1,enterFullscreen:e,exitFullscreen:i,enterOnFirstTouch:s,fullscreenButton:r}){const[a,o]=zt.useState(t?"reconnecting":"join"),[c,l]=zt.useState(localStorage.getItem("chroma-name")||""),[u,d]=zt.useState(new URLSearchParams(location.search).get("room")||""),[h,f]=zt.useState(null),[g,v]=zt.useState(""),[m,p]=zt.useState(""),[S,E]=zt.useState(!1),[y,w]=zt.useState(10),[M,T]=zt.useState([]),_=zt.useRef(null),A=zt.useRef(null),P=zt.useRef(Zf()),L=zt.useRef(t),F=zt.useRef(0),B=zt.useRef(!1),I=zt.useRef(!1),V=zt.useRef(!1),z=zt.useMemo(()=>da(m1,{autoConnect:!1}),[]),Y=a==="playing"||a==="results",it=g===h?.host;zt.useEffect(()=>{(a==="lobby"||a==="join")&&i?.()},[a,i]);const q=async(st,...Nt)=>{if(!z.connected)throw new Error("連線已中斷，請等待重連後再操作");try{const Et=await z.timeout(8e3).emitWithAck(st,...Nt);if(Et?.error)throw new Error(Yo(Et.error));return Et}catch(Et){throw new Error(Et.message==="operation has timed out"?"伺服器回應逾時，請重試":Et.message)}},Q=()=>{P.current=null,T([]),Zu(null)},et=st=>{if(st?.protocolVersion!==YM)throw L.current=!1,z.disconnect(),new Error("多人伺服器版本不一致，請同步部署前端與 Render 伺服器後再試。");f(st),o(st.state==="PLAYING"?"playing":st.state==="GAME_OVER"?"results":"lobby")},Ct=st=>{P.current={code:st.code,playerId:st.playerId,resumeToken:st.resumeToken},Zu(P.current),F.current=st.lastReceivedSeq||0,L.current=!0,v(st.playerId),d(st.code),et(st.room)};zt.useEffect(()=>{B.current=!0;const st=async()=>{if(!(!L.current||!P.current||I.current)){I.current=!0,E(!0),p("");try{const $t=await z.timeout(8e3).emitWithAck("room:resume",P.current);if(!B.current||!L.current)return;if($t.error)throw $t.error==="SESSION_EXPIRED"&&Q(),new Error(Yo($t.error));Ct($t)}catch($t){B.current&&(p($t.message==="operation has timed out"?"恢復連線逾時，請點「返回上一場」重試":Yo($t.message)),o("join"),L.current=!1)}finally{I.current=!1,B.current&&E(!1)}}},Nt=$t=>{if(!(!L.current||I.current||!P.current))try{et($t)}catch(we){p(we.message),o("join")}},Et=()=>{L.current&&P.current&&(z.sendBuffer.length=0,o("reconnecting"),E(!1))},Bt=()=>{p("無法連線至遊戲伺服器，正在重試；斷線席位保留 60 秒"),E(!1)},Se=()=>{L.current=!1,Q(),z.disconnect(),f(null),o("join"),E(!1),p("此席位已在另一個連線恢復，這個連線已結束")},Ne=$t=>{!L.current||$t?.code!==P.current?.code||!["disconnected","reconnected"].includes($t.kind)||!Number.isFinite($t.at)||T(we=>[...we.filter(U=>U.id!==$t.id),{...$t,expiresAt:Date.now()+8e3}].slice(-3))};return z.on("connect",st),z.on("room:state",Nt),z.on("disconnect",Et),z.on("connect_error",Bt),z.on("room:replaced",Se),z.on("room:notice",Ne),L.current&&P.current&&z.connect(),()=>{B.current=!1,z.off("connect",st),z.off("room:state",Nt),z.off("disconnect",Et),z.off("connect_error",Bt),z.off("room:replaced",Se),z.off("room:notice",Ne),z.disconnect()}},[z]);const Mt=async()=>{L.current=!1,E(!0);try{z.connected&&await q("room:leave")}catch(st){p(st.message)}Q(),z.disconnect(),E(!1),n()},re=async st=>{if(!V.current){V.current=!0,E(!0),p("");try{await q(st)}catch(Nt){st==="game:start"&&i?.(),p(Nt.message)}finally{V.current=!1,B.current&&E(!1)}}};zt.useEffect(()=>{if(!Y||!_.current||A.current)return;const st=new u1(_.current,z,h?.code,h?.roundId,Nt=>{p(Nt),E(!1),o(z.connected?"join":"reconnecting")},g,F.current,{isHost:it,onLeave:()=>{Mt()},onEnd:()=>{re("game:end")}});return A.current=st,st.start(),a==="results"&&st.pause(),()=>{st.dispose(),A.current===st&&(A.current=null)}},[Y,z,h?.code,h?.roundId,g,it]),zt.useEffect(()=>{a==="results"?A.current?.pause():a==="playing"&&A.current?.resume()},[a]),zt.useEffect(()=>{if(a!=="results"||!h?.returnAt)return;const st=performance.now()+Math.max(0,h.returnAt-(h.serverTime||Date.now())),Nt=()=>w(Math.max(0,Math.ceil((st-performance.now())/1e3)));Nt();const Et=window.setInterval(Nt,200);return()=>window.clearInterval(Et)},[a,h?.returnAt,h?.serverTime]);const Jt=()=>z.connected?Promise.resolve():new Promise((st,Nt)=>{const Et=()=>{clearTimeout(Ne),z.off("connect",Bt),z.off("connect_error",Se)},Bt=()=>{Et(),st()},Se=()=>{Et(),Nt(new Error("無法連線至遊戲伺服器，請重試"))},Ne=setTimeout(()=>{Et(),Nt(new Error("連線逾時，請重試"))},1e4);z.once("connect",Bt),z.once("connect_error",Se),z.connect()}),te=async st=>{const Nt=c.trim();if(Nt.length<2||Nt.length>16){p("暱稱需為 2 到 16 個字元");return}L.current=!1,I.current=!0,p(""),E(!0);try{await Jt(),P.current&&((await z.timeout(8e3).emitWithAck("room:resume",P.current)).error||await q("room:leave"),Q()),localStorage.setItem("chroma-name",Nt);const Et=await q(st,st==="room:create"?Nt:{code:u,name:Nt});B.current&&Ct(Et)}catch(Et){B.current&&(p(Et.message),o("join"))}finally{I.current=!1,B.current&&E(!1)}},$=async()=>{!P.current||S||(e?.(),o("reconnecting"),p(""),L.current=!0,z.disconnect(),z.sendBuffer.length=0,z.connect())},tt=()=>{te("room:create")},xt=()=>{te("room:join")},kt=()=>{e?.(),re("game:start")},gt=()=>{e?.(),re("game:again")},Vt=()=>{re("game:lobby")},Me=S?O.jsxs(O.Fragment,{children:[O.jsx("i",{className:"mp-spinner","aria-hidden":"true"}),"連線中…"]}):null,Yt=()=>{const st=new URL(location.href);st.searchParams.set("room",h.code),navigator.clipboard?.writeText(st.toString()).catch(()=>p("無法複製，請分享房間碼"))};if(a==="reconnecting")return O.jsx("main",{className:"mp",children:O.jsxs("section",{className:"mp-panel mp-join-panel mp-reconnect-panel",children:[O.jsx("span",{className:"mp-reconnect-orbit","aria-hidden":"true",children:O.jsx("i",{className:"mp-spinner"})}),O.jsx("p",{className:"mp-eyebrow",children:"BACK TO THE ARENA"}),O.jsx("h1",{children:"正在返回上一場"}),O.jsx("p",{className:"mp-subtitle",children:"隊友還在戰場，正在為你恢復連線。"}),O.jsxs("p",{className:"mp-reconnect-hint",children:["斷線席位保留 ",O.jsx("b",{children:"60 秒"})]}),O.jsx("p",{className:"mp-status",role:"status",children:m||"網路恢復後會自動重新連線"}),O.jsx("button",{className:"mp-primary",disabled:S,onClick:$,children:"重試連線"}),O.jsx("button",{className:"mp-secondary",onClick:Mt,children:"離開房間"})]})});if(Y){const st=h?.finalStandings||[],Nt=st.filter(Bt=>h?.winnerIds?.includes(Bt.id)),Et=h?.winnerIds?.includes(g);return O.jsxs("main",{className:"chroma-ops co-multiplayer-shell",onPointerUpCapture:a==="playing"?s:void 0,children:[O.jsx("div",{className:"co-game-stage",ref:_,"aria-label":"CHROMA OPS multiplayer arena"},h?.roundId),a==="playing"&&r,O.jsx(Ku,{notices:M,floating:!0}),m&&O.jsx("p",{className:"mp-match-error",role:"alert",children:m}),a==="results"&&O.jsx("section",{className:"mp-result",role:"dialog","aria-modal":"true","aria-labelledby":"mp-result-title",children:O.jsxs("div",{className:`mp-result-card ${Et?"is-winner":""}`,children:[O.jsx("p",{className:"mp-result-eyebrow",children:"比賽結束"}),O.jsx("h1",{id:"mp-result-title",children:h?.endReason==="draw"?"平手":Et?"勝利！":"戰鬥結束"}),O.jsx("p",{className:"mp-result-winner",children:h?.endReason==="draw"?"本局無人取得積分":O.jsxs(O.Fragment,{children:[O.jsx("b",{children:Nt.map(Bt=>Bt.name).join("、")})," ",h?.endReason==="target"?`率先達到 ${h.scoreTarget} 分`:Nt.length>1?"超時並列獲勝":"超時積分最高"]})}),h?.winnerTitle&&O.jsx("p",{className:"mp-result-title",children:h.winnerTitle}),O.jsxs("div",{className:"mp-result-ranking",children:[O.jsxs("header",{children:[O.jsx("span",{children:"最終排名"}),O.jsx("span",{children:"積分 · 賞金 · K/D"})]}),st.map(Bt=>O.jsxs("div",{className:Bt.id===g?"is-me":"",children:[O.jsxs("span",{children:[O.jsx("i",{children:Bt.rank}),Bt.name,h?.winnerIds?.includes(Bt.id)&&O.jsx("em",{children:"勝者"})]}),O.jsxs("strong",{className:Bt.bounty>=Pf?"is-high-bounty":"",children:[Bt.score,"分 · 賞",Bt.bounty," · ",Bt.kills,"/",Bt.deaths]})]},Bt.id))]}),O.jsxs("p",{className:"mp-result-countdown",children:[O.jsx("b",{children:y})," 秒後自動回到房間"]}),it?O.jsxs("div",{className:"mp-result-actions",children:[O.jsx("button",{className:"mp-primary",disabled:S,onClick:gt,children:S?Me:"立即再玩"}),O.jsx("button",{disabled:S,onClick:Vt,children:"立即回房間"})]}):O.jsx("p",{className:"mp-result-waiting",children:"等待房主操作，或倒數結束後自動返回"}),O.jsx("button",{className:"mp-result-leave",onClick:Mt,children:"離開多人模式"})]})})]})}return a==="lobby"&&h?O.jsx("main",{className:"mp",children:O.jsxs("section",{className:"mp-panel mp-lobby-panel",children:[O.jsx("button",{className:"mp-back",disabled:S,onClick:Mt,children:"← 離開房間"}),O.jsxs("header",{className:"mp-lobby-header",children:[O.jsxs("div",{children:[O.jsx("p",{className:"mp-eyebrow",children:"CHROMA OPS / LOBBY"}),O.jsx("h1",{children:"集結，準備開戰。"}),O.jsx("p",{className:"mp-subtitle",children:"分享房號，邀請朋友加入你的戰場。"})]}),O.jsxs("div",{className:"mp-room-code",children:[O.jsx("small",{children:"房間代碼"}),O.jsx("strong",{children:h.code}),O.jsxs("span",{children:[O.jsx("i",{}),h.players.filter(st=>st.connected).length," 位在線 · ",h.players.length," / 8 席位"]})]})]}),h.lobbyReason&&O.jsx("p",{className:"mp-status",role:"status",children:h.lobbyReason}),O.jsxs("div",{className:`mp-lobby-columns ${h.notices?.length?"":"is-roster-only"}`,children:[O.jsxs("section",{className:"mp-roster-panel","aria-label":"房間玩家",children:[O.jsxs("h2",{children:["玩家名單 ",O.jsxs("span",{children:[h.players.length.toString().padStart(2,"0")," / 08"]})]}),O.jsx("div",{className:"mp-player-list",children:h.players.map(st=>O.jsxs("div",{className:`mp-player-row ${st.connected?"":"is-offline"}`,children:[O.jsxs("span",{className:"mp-player-info",children:[O.jsxs("b",{children:[st.name,st.id===g&&O.jsx("small",{children:"你"})]}),O.jsxs("span",{children:[O.jsx("i",{}),st.connected?"已連線，準備就緒":"斷線中 · 席位保留 60 秒"]})]}),st.id===h.host&&O.jsx("span",{className:"mp-host-badge",children:"房主"})]},st.id))}),O.jsxs("div",{className:"mp-share-actions",children:[O.jsx("button",{className:"mp-secondary",onClick:()=>navigator.clipboard?.writeText(h.code).catch(()=>p("無法複製，請手動複製房間碼")),children:"複製房間碼"}),O.jsx("button",{className:"mp-secondary",onClick:Yt,children:"複製邀請連結 ↗"})]})]}),O.jsx(Ku,{notices:h.notices})]}),O.jsxs("footer",{className:"mp-lobby-footer",children:[O.jsx("p",{children:it?"至少 2 位玩家在線即可開始，朋友也能中途加入。":"等待房主開始遊戲，先調整好你的手感吧。"}),it&&O.jsx("button",{className:"mp-primary",disabled:S||h.players.filter(st=>st.connected).length<2,onClick:kt,children:S?Me:"開始遊戲 →"})]}),O.jsxs("p",{className:"mp-bounty-rules",children:["賞金競速：先達 ",Qc," 分獲勝，限時 8 分鐘。擊殺取得對方當下賞金（50～300），死亡不扣積分。賞金隨擊殺上升、連死逐步下降；超時同分並列獲勝。"]}),O.jsxs("details",{className:"mp-preferences",children:[O.jsx("summary",{children:"視角與操作設定"}),O.jsx(rl,{})]}),m&&O.jsx("p",{className:"mp-error",role:"alert",children:m})]})}):O.jsx("main",{className:"mp",children:O.jsxs("section",{className:"mp-panel mp-join-panel",children:[O.jsx("button",{className:"mp-back",disabled:S,onClick:Mt,children:"← 選擇模式"}),O.jsx("p",{className:"mp-eyebrow",children:"CHROMA OPS / MULTIPLAYER"}),O.jsx("h1",{children:"邀請你的隊友。"}),O.jsx("p",{className:"mp-subtitle",children:"建立專屬房間，或用房號直達戰場。"}),P.current&&O.jsx(Kf,{code:P.current.code,disabled:S,onResume:$}),O.jsxs("label",{className:"mp-field",children:["玩家暱稱",O.jsx("input",{placeholder:"大家怎麼稱呼你？",autoComplete:"nickname",disabled:S,value:c,maxLength:"16",onChange:st=>l(st.target.value)})]}),O.jsx("button",{className:"mp-primary",disabled:S,onClick:tt,children:S?Me:"建立新房間 →"}),O.jsx("div",{className:"mp-divider",children:O.jsx("span",{children:"或加入朋友的房間"})}),O.jsxs("label",{className:"mp-field",children:["房間碼",O.jsx("input",{className:"mp-code-input",placeholder:"輸入 6 碼房號",autoCapitalize:"characters",disabled:S,value:u,maxLength:"6",onChange:st=>d(st.target.value.toUpperCase())})]}),O.jsx("button",{className:"mp-secondary",disabled:S,onClick:xt,children:S?Me:"加入房間 ↗"}),O.jsxs("p",{className:"mp-bounty-rules",children:["賞金競速：先達 ",Qc," 分獲勝，限時 8 分鐘。擊殺取得對方當下賞金（50～300），死亡不扣積分。賞金隨擊殺上升、連死逐步下降；超時同分並列獲勝。"]}),O.jsxs("details",{className:"mp-preferences",children:[O.jsx("summary",{children:"視角與操作設定"}),O.jsx(rl,{})]}),m&&O.jsx("p",{className:"mp-error",role:"alert",children:m})]})})}const $o=()=>navigator.standalone===!0||matchMedia("(display-mode: standalone), (display-mode: fullscreen)").matches;function cl(){return document.fullscreenElement||document.webkitFullscreenElement}function Zo(n){if(!(!n||cl()!==n))try{(document.exitFullscreen||document.webkitExitFullscreen)?.call(document)?.catch(()=>{})}catch{}}function _1(){const n=zt.useRef(null),t=zt.useCallback(d=>{n.current=d},[]),e=zt.useRef(!1),i=zt.useRef(null),[s,r]=zt.useState(!1),[a]=zt.useState(()=>!$o()&&!!(document.documentElement.requestFullscreen||document.documentElement.webkitRequestFullscreen)&&(document.fullscreenEnabled??document.webkitFullscreenEnabled)!==!1),[o]=zt.useState(()=>/iPhone|iPod/.test(navigator.userAgent)&&!$o()),c=zt.useCallback(()=>{const d=n.current;if(!d||i.current||cl()||$o()||!(d.requestFullscreen||d.webkitRequestFullscreen)||(document.fullscreenEnabled??document.webkitFullscreenEnabled)===!1)return;e.current=!0;const f={cancelled:!1};i.current=f;const g=()=>{i.current===f&&(i.current=null),f.cancelled&&!i.current&&Zo(d)};try{const v=d.requestFullscreen?d.requestFullscreen({navigationUI:"hide"}):d.webkitRequestFullscreen();Promise.resolve(v).then(g,g)}catch{g()}},[]),l=zt.useCallback(()=>{i.current&&(i.current.cancelled=!0,i.current=null),e.current=!1,Zo(n.current)},[]),u=zt.useCallback(d=>{d.isTrusted&&d.pointerType==="touch"&&!e.current&&c()},[c]);return zt.useEffect(()=>{const d=n.current,h=()=>r(cl()===d);return document.addEventListener("fullscreenchange",h),document.addEventListener("webkitfullscreenchange",h),()=>{document.removeEventListener("fullscreenchange",h),document.removeEventListener("webkitfullscreenchange",h),l(),Zo(d)}},[l]),{attachSurface:t,enter:c,exit:l,enterOnFirstTouch:u,showInstall:o,canEnter:a&&!s}}const x1=zt.lazy(()=>rp(()=>import("./WardenPreview-DAuz-BMN.js"),__vite__mapDeps([0,1,2,3])));function y1({onBack:n,fullscreenButton:t}){const e=zt.useRef(null);return zt.useEffect(()=>{const i=new ky(e.current);return i.start(),()=>i.dispose()},[]),O.jsxs("main",{className:"chroma-ops",children:[O.jsx("div",{className:"co-game-stage",ref:e}),O.jsxs("div",{className:"co-start",children:["CHROMA OPS ",O.jsx("small",{children:"WASD 移動 · Shift 跑步 · 1–8 武器 · 狙擊槍右鍵開鏡"})]}),O.jsx("button",{type:"button",className:"co-exit",onClick:n,children:"← 選擇模式"}),t]})}function M1(){const[n,t]=zt.useState(()=>new URLSearchParams(location.search).has("room")?"multi":"menu"),{attachSurface:e,enter:i,exit:s,enterOnFirstTouch:r,showInstall:a,canEnter:o}=_1(),c=Zf();zt.useEffect(()=>{const d=document.querySelector('meta[name="viewport"]'),h=d?.content;d&&(d.content=`${h}, viewport-fit=cover`);const f=document.createElement("link");f.rel="manifest",f.href="/dca-simulator/chroma-ops.webmanifest";const g=document.createElement("link");return g.rel="apple-touch-icon",g.href="/dca-simulator/chroma-ops-192.png",document.head.append(f,g),()=>{d&&(d.content=h),f.remove(),g.remove()}},[]);const l=()=>{s();const d=new URL(location.href);d.searchParams.delete("room"),history.replaceState(null,"",d),t("menu")},u=o&&O.jsx("button",{type:"button",className:"co-fullscreen",onClick:i,children:"全螢幕"});return O.jsx("div",{className:"co-surface",ref:e,children:n==="solo"?O.jsx(y1,{onBack:l,fullscreenButton:u}):n==="multi"||n==="resume"?O.jsx(v1,{resumeOnMount:n==="resume",onBack:l,enterFullscreen:i,exitFullscreen:s,enterOnFirstTouch:r,fullscreenButton:u}):n==="warden"?O.jsx(zt.Suspense,{fallback:O.jsx("main",{className:"co-menu",role:"status",children:"載入虛空騎士預覽…"}),children:O.jsx(x1,{onBack:l})}):O.jsx("main",{className:"co-menu",children:O.jsxs("section",{className:"co-menu-card",children:[O.jsx("p",{className:"co-eyebrow",children:"NEON CITY ARENA"}),O.jsx("h1",{children:"CHROMA OPS"}),O.jsx("p",{children:"選擇你的戰場模式"}),O.jsxs("div",{className:"co-mode-grid",children:[O.jsxs("button",{onClick:()=>{i(),t("solo")},children:[O.jsx("span",{children:"◎"}),O.jsx("b",{children:"單機訓練"}),O.jsx("small",{children:"對戰 AI、熟悉地圖與武器"})]}),O.jsxs("button",{onClick:()=>t("multi"),children:[O.jsx("span",{children:"◉"}),O.jsx("b",{children:"多人連線"}),O.jsx("small",{children:"建立房間、邀請朋友對戰"})]})]}),O.jsxs("button",{type:"button",className:"co-warden-entry",onClick:()=>t("warden"),children:[O.jsxs("span",{children:[O.jsx("strong",{children:"虛空騎士預覽"}),O.jsx("small",{children:"檢視 3D 模型與招式動畫"})]}),O.jsx("span",{"aria-hidden":"true",children:"→"})]}),c&&O.jsx(Kf,{code:c.code,onResume:()=>{i(),t("resume")}}),a&&O.jsxs("details",{className:"co-install",children:[O.jsx("summary",{children:"在 iPhone 隱藏瀏覽器工具列"}),O.jsx("p",{children:"在 Safari 點「分享」→「加入主畫面」。如果看到「作為網頁 App 開啟」，請開啟它。之後從主畫面的 Chroma Ops 圖示啟動。"})]}),O.jsx(rl,{})]})})})}const P1=Object.freeze(Object.defineProperty({__proto__:null,default:M1},Symbol.toStringTag,{value:"Module"}));export{md as A,pe as B,A1 as C,E1 as D,ee as F,de as G,Bd as H,e0 as L,w1 as M,gn as P,Wi as Q,Pl as R,T1 as S,b1 as T,R as V,Zd as W,Ot as a,Re as b,Cl as c,ii as d,s1 as e,_t as f,rn as g,qs as h,Ts as i,Ft as j,Dl as k,an as l,Xe as m,Fe as n,Qd as o,Oi as p,ti as q,Pe as r,on as s,C1 as t,P1 as u};
