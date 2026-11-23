const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/WardenPreview-0FMt1xfH.js","assets/index-YGv3G7Ev.js","assets/index-CDSHnDx4.css","assets/WardenPreview-BAWcPL5r.css"])))=>i.map(i=>d[i]);
import{r as Bt,j as O,_ as Uf}from"./index-YGv3G7Ev.js";function Iu(n,t){let e=0,i=0;const s=()=>{const a=n.clientWidth,o=n.clientHeight;!a||!o||a===e&&o===i||(e=a,i=o,t(e,i))},r=typeof ResizeObserver>"u"?null:new ResizeObserver(s);return r?.observe(n),window.addEventListener("resize",s),window.visualViewport?.addEventListener("resize",s),s(),()=>{r?.disconnect(),window.removeEventListener("resize",s),window.visualViewport?.removeEventListener("resize",s)}}const Pe={ar:{id:"ar",label:"AR-01",icon:"▰",color:5625599,magazine:30,damage:28,fireDelay:.11,reloadTime:1.25,spread:.006,range:30,headshot:2,description:"平衡全自動步槍"},smg:{id:"smg",label:"VOLT-9",icon:"≋",color:16765021,magazine:36,damage:22,fireDelay:.075,reloadTime:.9,spread:.018,range:45,headshot:2,description:"高速近距離衝鋒槍"},flame:{id:"flame",label:"焰流槍",icon:"✦",color:16739127,magazine:80,damage:20,fireDelay:.08,reloadTime:1.6,spread:.18,range:25,burn:2,description:"近距離燃燒火焰"},ice:{id:"ice",label:"霜凍槍",icon:"❄",color:7924479,magazine:24,damage:28,fireDelay:.16,reloadTime:1.3,spread:.008,range:55,headshot:2,slow:1.25,description:"命中使敵人緩速"},shotgun:{id:"shotgun",label:"裂片散彈槍",icon:"✹",color:13208831,magazine:8,damage:10,fireDelay:.75,reloadTime:1.45,spread:.12,range:35,headshot:2,pellets:10,description:"近距離高爆發"},sniper:{id:"sniper",label:"長弓狙擊槍",icon:"⌖",color:14942074,magazine:5,damage:80,fireDelay:1,reloadTime:2.5,spread:.02,scopedSpread:0,range:420,headshot:2,description:"4 倍狙擊鏡・爆頭致命"},rocket:{id:"rocket",label:"脈衝火箭炮",icon:"◆",color:16735358,magazine:4,damage:100,fireDelay:1.05,reloadTime:1.9,spread:.012,range:100,splash:5,description:"範圍爆炸傷害"}},ti=["ar","smg","flame","ice","shotgun","rocket","sniper"];function ya(n=1){return 1+.1*(n-1)}function Ma(n,t=1){return Pe[n].range*(1+.15*(t-1))}const Ff=8,Of=.75;function Mi(n,t=1){return Math.round(Pe[n].magazine*(1+.25*(t-1)))}function kf(){return Object.fromEntries(ti.map(n=>[n,{level:1,ammo:Mi(n),reloadUntil:0,quickReloadUntil:0}]))}function Du(n,t,e){return e?t.level<3?"upgrade":t.ammo<Mi(n,t.level)?"refill":"boost":"unlock"}function Bf(n,t,e,i=0,s=1e3){const r=Mi(n,t.level),a=t.ammo,o=Du(n,t,e);return o==="unlock"?(t.level=1,t.ammo=Mi(n),t.reloadUntil=0,t.quickReloadUntil=0):o==="upgrade"?(t.level=t.level+1,t.ammo=Mi(n,t.level),t.reloadUntil=0):o==="refill"?(t.ammo=r,t.reloadUntil=0):t.quickReloadUntil=i+Ff*s,{weapon:n,kind:o,level:t.level,previousCapacity:r,capacity:Mi(n,t.level),ammoAdded:t.ammo-a}}function Ba(n,t,e,i=!1,s=1e3){t.reloadUntil&&e>=t.reloadUntil&&(t.ammo=Mi(n,t.level),t.reloadUntil=0),!t.reloadUntil&&(t.ammo===0||i&&t.ammo<Mi(n,t.level))&&(t.reloadUntil=e+Pe[n].reloadTime*s*(t.quickReloadUntil>e?Of:1))}function Sa(n,t){if(n.maxY<=.05||n.minY<0)return[n];const e=n.maxX-n.minX,i=n.maxZ-n.minZ,s=n.maxY-n.minY,r=Math.ceil(e/4),a=Math.ceil(i/4),o=Math.ceil(s/4),c=[];for(let l=0;l<r;l++)for(let u=0;u<a;u++)for(let d=0;d<o;d++)c.push({...n,breakKey:`${t}:${l}:${u}:${d}`,minX:n.minX+e*l/r,maxX:n.minX+e*(l+1)/r,minY:n.minY+s*d/o,maxY:n.minY+s*(d+1)/o,minZ:n.minZ+i*u/a,maxZ:n.minZ+i*(u+1)/a});return c}function Kc(n,t){return!n.breakKey||!t?.has(n.breakKey)}const $s=[{x:-65,z:45,color:3524949,name:"WEST ARCADE",side:-1},{x:68,z:44,color:1683169,name:"EAST STATION",side:1},{x:-68,z:-47,color:15613063,name:"PINK GALLERY",side:-1},{x:66,z:-48,color:15836972,name:"SUN MARKET",side:1},...[-1,1].flatMap(n=>[-90,-12,92].map((t,e)=>({x:n*112,z:t,color:[9987295,15824696,2537901][e],name:`${n<0?"WEST":"EAST"} ${["STUDIO","SHOPS","GARDEN"][e]}`,side:n})))],It=(n,t,e,i,s,r,a=0)=>({minX:n-e/2,maxX:n+e/2,minZ:t-i/2,maxZ:t+i/2,minY:a,maxY:s,color:r}),Nu=$s.flatMap(n=>[{x:n.x+n.side*16,z0:n.z+25,z1:n.z+1,from:0,to:6,width:4},{x:n.x+n.side*22,z0:n.z+1,z1:n.z+25,from:6,to:12,width:4}]);function zf(n,t){for(const e of Nu){const i=(t-e.z0)/(e.z1-e.z0);if(Math.abs(n-e.x)<=e.width/2&&i>=0&&i<=1)return e.from+(e.to-e.from)*i}return null}const fi=[];for(const[n,t]of $s.entries()){let e=0;const i=(s,r,a,o,c,l=t.color,u=0,d=!0)=>{const h=It(t.x+s,t.z+r,a,o,c,l,u);fi.push(...d?Sa(h,`city:${n}:${e++}`):[h])};for(const s of[0,6])for(const r of[-1,1])for(const a of["x","z"]){const o=(c,l,u,d)=>a==="x"?i(r*12,c,.4,l,d,t.color,u):i(c,r*12,l,.4,d,t.color,u);o(0,24,s+3.5,s+6);for(const c of[-7,7])o(c,10,s,s+1.2);for(const c of[-12,-6,-2,2,6,12])o(c,.6,s+1.2,s+3.5)}for(const s of[6,12]){i(-8.65,0,6.3,23.6,s,15330801,s-.3),i(5.15,0,13.3,23.6,s,15330801,s-.3),i(-3.5,-10.15,4,3.3,s,15330801,s-.3),i(-3.5,6.7,4,10.2,s,15330801,s-.3);for(const r of[s-6]){for(let a=0;a<12;a++)i(-7.5,-8+(a+.5)*.65,4,.65,r+(a+1)*.25,16761648,r),i(-3.5,-.2-(a+.5)*.65,4,.65,r+3+(a+1)*.25,16761648,r+3);i(-5.5,.9,8,2.2,r+3,16761648,r+2.7)}}for(const s of[-1,1])i(s*12,0,.25,10,13.1,16777215,12),i(0,s*12,6,.25,13.1,16777215,12);i(t.side*18,-1,12,4,6,16761648,5.7,!1),i(t.side*15,27,18,4,12,16761648,11.7,!1),i(t.side*8,20.5,4,17,12,16761648,11.7,!1)}fi.push(It(0,36,88,4,6,16761648,5.7));for(const n of[34,38])fi.push(It(0,n,80,.2,7.1,16777215,6));for(const[n,t,e]of[[-48.5,45,11],[50,44,12]])fi.push(It(n,t,e,4,6,16761648,5.7));for(const n of[-44,44]){fi.push(It(n,40.5,4,9,6,16761648,5.7));for(const t of[-1,1])fi.push(It(n+t*2,41.5,.2,3,7.1,16777215,6))}for(const n of[-36,36])fi.push(It(n,36,1.2,1.2,5.7,7174304));for(const[n,t]of[[-37.5,35],[38,36]]){fi.push(It(n,55.5,t,4,12,16761648,11.7));for(const e of[53.5,57.5])fi.push(It(n,e,t,.2,13.1,16777215,12))}for(const n of[6,12])fi.push(It(68,31,4,2,n,15330801,n-.3));for(const n of[65,71])fi.push(It(n,25,.35,.35,14,6715566));const Hf=fi,Gr=[[-42,-65],[40,-65],[-45,18],[46,20],[-112,64],[115,65],[-30,112],[94,124]],Uo=[[-50,-64],[50,-64],[-38,36],[38,36],[-119,18],[119,18],[-40,80],[42,80],[-16,-90],[16,-90]],Gf=[...Gr.map(([n,t])=>It(n,t,5,5,.8,15747988)),...[[-40,5],[40,3],[-105,68],[108,68]].flatMap(([n,t])=>[It(n,t,4,1,.65,16761648),It(n,t+.5,4,.2,1.3,16761648,.65)]),...Uo.map(([n,t])=>It(n,t,.25,.25,4.6,14148848))],Vf=[[-140,-114],[-104,-122],[-148,-36],[-140,75],[-78,112],[-26,-116],[28,-122],[84,-106],[140,-100],[145,-36],[126,62],[88,124],[18,126],[-42,112],[-96,58],[-112,-48],[-36,-54],[30,32],[120,24],[-56,8]],Wf=[[-130,-100],[-92,-42],[-45,30],[-65,45],[-65,62],[0,32],[68,44],[68,62],[110,60],[120,-18],[88,-74],[20,-102],[-25,-54],[-112,45],[-12,104],[35,35]],Xf={minX:-90,maxX:90,minZ:-22,maxZ:26},_s=[{name:"NORTH",axis:"z",outer:-46,inner:-22,cross:0,kind:"ramp"},{name:"SOUTH",axis:"z",outer:50,inner:26,cross:0,kind:"ramp"},{name:"WEST",axis:"x",outer:-114,inner:-90,cross:9,kind:"stairs"},{name:"EAST",axis:"x",outer:114,inner:90,cross:9,kind:"stairs"}],nr=_s.map(n=>n.axis==="z"?{minX:-3,maxX:3,minZ:Math.min(n.outer,n.inner),maxZ:Math.max(n.outer,n.inner)}:{minX:Math.min(n.outer,n.inner),maxX:Math.max(n.outer,n.inner),minZ:6,maxZ:12}),Fo=(n,t,e,i=0)=>n>=e.minX-i&&n<=e.maxX+i&&t>=e.minZ-i&&t<=e.maxZ+i;function qf(n,t){for(let e=0;e<_s.length;e++)if(Fo(n,t,nr[e])){const i=_s[e],s=((i.axis==="z"?t:n)-i.outer)/(i.inner-i.outer);return i.kind==="ramp"?-6*s:-6}return Fo(n,t,Xf)?-6:null}function Uu(n,t=nr){let e=[n];for(const i of t)e=e.flatMap(s=>{const r=Math.max(s.minX,i.minX),a=Math.min(s.maxX,i.maxX),o=Math.max(s.minZ,i.minZ),c=Math.min(s.maxZ,i.maxZ);return r>=a||o>=c?[s]:[{...s,maxX:r},{...s,minX:a},{...s,minX:r,maxX:a,maxZ:o},{...s,minX:r,maxX:a,minZ:c}].filter(l=>l.maxX-l.minX>1e-6&&l.maxZ-l.minZ>1e-6)});return e}const Di=[It(0,2,180,48,-6,8625066,-6.4),It(0,2,180,48,0,13228511,-.35)];for(const n of[-22,26])for(const t of[-46.5,46.5])Di.push(It(t,n,87,.4,0,5268103,-6));for(const n of[-90,90])Di.push(It(n,-8,.4,28,0,5268103,-6),It(n,19,.4,14,0,5268103,-6));for(const n of _s){const t=(n.outer+n.inner)/2;for(const e of[-1,1])Di.push(n.axis==="z"?It(e*3.2,t,.4,24,1.1,8837607,-6):It(t,n.cross+e*3.2,24,.4,1.1,8837607,-6));if(n.kind==="stairs")for(let e=0;e<24;e++){const i=n.outer+Math.sign(n.inner-n.outer)*(e+.5);Di.push(It(i,n.cross,1,6,-e*.25,16760147,-6.3))}}const Fu=[-51.5,-42.5,-33.5,-24.5,24.5,33.5,42.5,51.5].map((n,t)=>({x:n,z:2,width:9,depth:12,color:[16018351,5888449,16761946,10325231][t%4],name:["ARCADE","CAFE","SPORT","MUSIC","BOOKS","TECH","TOYS","BAKERY"][t]}));for(const n of Fu){Di.push(It(n.x-4.5,2,.25,12,-.35,n.color,-6));for(const t of[-4,8]){for(const e of[-1,1])Di.push(It(n.x+e*3.25,t,2.5,.25,-.35,n.color,-6));Di.push(It(n.x,t,4,.25,-.35,n.color,-2.5))}Di.push(It(n.x,2,3,1,-5,5861761,-6))}for(const n of[-20,56])Di.push(It(n,2,.25,12,-.35,10325231,-6));const Yf=Di,Oo=[{x:-64,y:-6,z:18},{x:64,y:-6,z:-14},{x:-42.5,y:-6,z:5},{x:42.5,y:-6,z:-1}],Qe={x:0,z:-90,radius:22,centerY:22.2,cabins:8,period:60},$f=[16731800,3594436,16761648,4945384,13208831,16742461,5625599,9626447],Rn=(n,t,e,i,s,r,a)=>({minX:n-i/2,maxX:n+i/2,minY:t-s/2,maxY:t+s/2,minZ:e-r/2,maxZ:e+r/2,color:a}),Zf=[-1,1].flatMap(n=>[Rn(n*8,10.5,-94,1.2,21,1.2,16761648),Rn(n*8,.25,-94,4,.5,4,2374768)]).concat([Rn(0,21.2,-94,17,1.2,1.2,16761648)]);function Ou(n,t){const e=(t/Qe.period+n/Qe.cabins)*Math.PI*2;return{x:Qe.x+Math.sin(e)*Qe.radius,y:Qe.centerY-Math.cos(e)*Qe.radius,z:Qe.z}}function sa(n,t){const{x:e,y:i,z:s}=Ou(n,t),r=$f[n];return[Rn(e,i-.2,s,6,.4,4,r),Rn(e-2.9,i+.55,s,.2,1.1,4,r),Rn(e+2.9,i+.55,s,.2,1.1,4,r),Rn(e,i+.55,s-1.9,5.6,1.1,.2,r)]}function Kf(n){return Array.from({length:Qe.cabins},(t,e)=>sa(e,n)).flat()}function jf(n,t,e,i){for(let s=0;s<Qe.cabins;s++)for(const r of sa(s,i)){const a=Math.max(r.minX-n,0,n-r.maxX),o=Math.max(r.minZ-e,0,e-r.maxZ);if(Math.abs(t-r.maxY)<.025&&a*a+o*o<.42*.42)return s}return null}const ku=8,vs={x:68,z:28};function Bu(n){const t=(n%28+28)%28;return t<3?0:t<7?(t-3)/4*6:t<10?6:t<14?6+(t-10)/4*6:t<17?12:t<21?12-(t-17)/4*6:t<24?6:6-(t-24)/4*6}function Ws(n,t){return n===ku?{x:vs.x,y:Bu(t),z:vs.z}:Ou(n,t)}function ra(n){const t=Bu(n);return[It(68,28,4,4,t,16731800,t-.3),It(66.1,28,.2,4,t+1.1,16777215,t),It(69.9,28,.2,4,t+1.1,16777215,t),It(68,26.1,4,.2,t+1.1,16777215,t)]}function ko(n){return[...Kf(n),...ra(n)]}function ql(n,t,e,i){if(Math.abs(n-vs.x)<2.5&&Math.abs(e-vs.z)<2.5)for(const s of ra(i)){const r=Math.max(s.minX-n,0,n-s.maxX),a=Math.max(s.minZ-e,0,e-s.maxZ);if(Math.abs(t-s.maxY)<.025&&r*r+a*a<.42*.42)return ku}return jf(n,t,e,i)}const jc={floors:[0,6,12],name:"CHROMA LAB"},re=[],fs=[],gn=[],ji=15330801,Zi=6322567,pn=10082783,$t=(n,t,e,i,s,r,a,o=ji)=>{const c=It(t,e,i,s,r,o,a);n===gn?n.push(c):n.push(...Sa(c,`lab:${n===fs?"glass":"solid"}:${n.length}`))};for(const n of[6,12,18])$t(re,58,104,56.8,24.8,n,n-.3);$t(re,58,103,55.6,21.6,.02,0);for(const n of jc.floors){for(const i of[92,n===0?114:116]){for(const s of[43,73])$t(fs,s,i,26,.18,n+5.7,n+.4,13234669),$t(re,s,i,26,.35,n+.4,n,ji);n>0&&($t(fs,58,i,4,.18,n+5.7,n+.4,13234669),$t(re,58,i,4,.35,n+.4,n,ji)),$t(re,58,i,56,.35,n+6,n+(n===0?4.2:5.7));for(let s=30;s<=86;s+=4)(n>0||s!==58)&&$t(gn,s,i,.09,.26,n+5.7,n+.4,Zi);for(const s of[n+.4,n+3,n+5.7])for(const r of[43,73])$t(gn,r,i,26,.26,s+.05,s-.05,pn);if(n>0)for(const s of[n+.4,n+3,n+5.7])$t(gn,58,i,4,.26,s+.05,s-.05,pn)}$t(re,30,n===0?105.25:106.25,.4,n===0?17.5:19.5,n+6,n),$t(re,30,94.25,.4,4.5,n+6,n+4.2);const t=n===0?103:104,e=n===0?22:24;$t(fs,86,t,.18,e,n+5.7,n+.4,13234669),$t(re,86,t,.4,e,n+.4,n),$t(re,86,t,.4,e,n+6,n+5.7);for(const i of[92,96,100,104,108,112,n===0?114:116])$t(gn,86,i,.26,.09,n+5.7,n+.4,Zi);$t(re,38,105,8,.4,n+3.3,n,Zi),$t(re,34,103,.4,4,n+3.3,n,Zi),$t(re,72,102,6,1.2,n+1.1,n,ji)}for(const n of jc.floors){for(let t=0;t<12;t++){const e=(t+1)*.25;$t(re,23.5,94.5+(t+.5)*.75,4,.75,n+e,n,ji),$t(re,27.5,103.5-(t+.5)*.75,4,.75,n+3+e,n+3,ji);for(const[i,s,r]of[[21.45,94.5+(t+.5)*.75,n+e],[29.55,103.5-(t+.5)*.75,n+3+e]])$t(re,i,s,.15,.75,r+1.1,r+.95,pn),$t(re,i,s,.15,.12,r+1.1,r,Zi)}$t(re,25.5,104.5,8,2,n+3,n+2.7),$t(re,25.5,93.5,8,2,n+6,n+5.7),$t(re,29.75,94.25,.5,4.5,n+6,n+5.7),$t(re,25.5,105.5,8,.15,n+4.1,n+3,pn),$t(re,25.5,92.5,8,.15,n+7.1,n+6,pn);for(const t of[21.45,29.55])$t(re,t,104.5,.15,2,n+4.1,n+3,pn);$t(re,21.45,93.5,.15,2,n+7.1,n+6,pn)}$t(re,25.5,93.5,8,2,0,-.3);for(const n of[30,86])$t(re,n,106.25,.2,19.5,19.1,18,Zi);for(const n of[92,116])$t(re,58,n,56,.2,19.1,18,Zi);$t(re,58,98,40,.3,21,18,ji);for(const n of[38,78])$t(re,n,102,.3,8,21,18,ji);for(let n=38;n<=78;n+=2)$t(gn,n,97.8,.1,.1,21,18,Zi);$t(re,58,117,56,6,4.7,4.45,pn);$t(re,58,116.7,57,.6,18.25,17.85,ji);for(const n of[32,40,48,68,76,84])$t(gn,n,116.25,.22,.5,4.4,0,Zi);const Yl=fs,Jf=gn,Qf=[...re,...fs],Ni={minX:-154,maxX:154,minZ:-140,maxZ:140,width:308,depth:280},Jc=560,Bo=8,$l=1.2,xi=1.65,Vr=1.8,Qc=.42,tp=7,Zl=14,ar=.35,ps=1e-4,ep=Vf;$s.map(n=>({...n,openSouth:!0}));const Be=(n,t,e,i,s,r,a=0)=>({minX:n-e/2,maxX:n+e/2,minZ:t-i/2,maxZ:t+i/2,minY:a,maxY:a+s,color:r}),Ze=[...Zf,...Hf,...Gf,...Yf,...Qf,Be(-152,0,4,280,19,2971848),Be(152,0,4,280,19,15479928),Be(0,-138,308,4,17,15968045),Be(0,138,308,4,17,3524949),...[Be(0,-3,6,6,3,15747925),Be(-22,13,8,3,2,16758584),Be(24,-14,8,3,2,4945384),Be(-3,20,3,8,2,8014805),Be(5,-25,3,8,2,3524949),Be(-40,-8,12,2,4,9262549),Be(-34,-19,2,18,4,9262549),Be(-49,-19,2,18,4,9262549),Be(42,10,13,2,4,15682683),Be(36,20,2,18,4,15682683),Be(49,20,2,18,4,15682683),Be(-43,-34,4,4,2,16761648),Be(42,34,4,4,2,3524949),Be(-12,92,32,3,3,3524949)].flatMap((n,t)=>Sa(n,`cover:${t}`))];function Kl(n){return{boxes:Ze,heightAt:kn,destroyed:n}}const jl=new WeakMap;function zo(n,t){let e=Ze;if(t?.size){const i=jl.get(t);e=i??Ze.filter(s=>Kc(s,t)),i||jl.set(t,e)}return{boxes:[...e,...ko(n)],heightAt:kn}}function tl(n,t){const e=zf(n,t);return e!==null?e:n>-22&&n<22&&t>52&&t<72?12:n>-25&&n<-16&&t>40&&t<=52?t-40:n>-12&&n<20&&t>88&&t<112?6:n>-38&&n<=-12&&t>88&&t<112?Math.max(0,(n+38)/26*6):0}function kn(n,t){return qf(n,t)??tl(n,t)}const Ho=new Map;for(const n of Ze)for(let t=Math.floor(n.minX/16);t<=Math.floor(n.maxX/16);t++)for(let e=Math.floor(n.minZ/16);e<=Math.floor(n.maxZ/16);e++){const i=`${t},${e}`,s=Ho.get(i)||[];s.push(n),Ho.set(i,s)}function ba(n,t,e=1){const i=new Set;for(let s=Math.floor((n-e)/16);s<=Math.floor((n+e)/16);s++)for(let r=Math.floor((t-e)/16);r<=Math.floor((t+e)/16);r++)for(const a of Ho.get(`${s},${r}`)||[])i.add(a);return[...i]}function el(n,t,e,i=Qc){const s=Math.max(e.minX-n,0,n-e.maxX),r=Math.max(e.minZ-t,0,t-e.maxZ);return s*s+r*r<i*i}function wa(n,t,e=Qc,i=0,s=Ze){return s===Ze&&(s=ba(n,t,e)),s.some(r=>el(n,t,r,e)&&i<r.maxY-ps&&i+Vr>r.minY+ps)}function Go(n,t,e,i){let s=0,r=i;for(const a of["X","Y","Z"]){const o=a.toLowerCase(),c=t[o],l=n[o];if(Math.abs(c)<1e-9){if(l<e[`min${a}`]||l>e[`max${a}`])return null;continue}const u=(e[`min${a}`]-l)/c,d=(e[`max${a}`]-l)/c;if(s=Math.max(s,Math.min(u,d)),r=Math.min(r,Math.max(u,d)),s>r)return null}return s<=i?s:null}function Si(n,t,e,i={boxes:Ze,heightAt:kn}){let s=e;for(const r of i.boxes){const a=Go(n,t,r,s);a!==null&&(s=a)}for(let r=0;r<=s;r+=.1)if(n.y+t.y*r<i.heightAt(n.x+t.x*r,n.z+t.z*r))return r;return s}function Vo(n,t,e,i={boxes:Ze,heightAt:kn}){let s=i.heightAt(n,t);for(const r of i.boxes===Ze?ba(n,t):i.boxes)Kc(r,i.destroyed)&&r.maxY<=e+ps&&el(n,t,r)&&(s=Math.max(s,r.maxY));return s}function il(n,t,e,i={boxes:Ze,heightAt:kn},s=1,r){if(!n.alive)return;i.boxes===Ze&&(i={...i,boxes:ba(n.x,n.z,7).filter(S=>Kc(S,i.destroyed))});const a=i;r!==void 0&&(i={...a,boxes:[...a.boxes,...ko(r)]}),n.yaw-=t.lookX*.0024,n.pitch=Math.max(-1.35,Math.min(1.35,n.pitch-t.lookY*.0021));let o=n.y-xi,c=Vo(n.x,n.z,o+.02,i),l=Math.abs(o-c)<=.02&&n.velocityY<=0;l?(n.jumpsUsed=0,n.velocityY=0):n.jumpsUsed===0&&(n.jumpsUsed=1),t.jump&&n.jumpsUsed<2&&(n.velocityY=tp,n.jumpsUsed++,l=!1);const u=-Math.sin(n.yaw),d=-Math.cos(n.yaw);let h=u*t.moveY+Math.cos(n.yaw)*t.moveX,p=d*t.moveY-Math.sin(n.yaw)*t.moveX;const g=Math.hypot(h,p);g>0&&(h=h/g*Bo*s*(t.sprint?$l:1),p=p/g*Bo*s*(t.sprint?$l:1));const _=Math.max(0,Math.min(.25,e)),m=Math.max(1,Math.ceil(_/(1/120))),f=_/m;for(let S=0;S<m;S++){if(r!==void 0){const A=r+S*f,x=A+f,T=l?ql(n.x,n.y-xi,n.z,A):null;if(T!==null){const C=Ws(T,A),L=Ws(T,x);n.x+=L.x-C.x,n.y+=L.y-C.y,n.z+=L.z-C.z}i={...a,boxes:[...a.boxes,...ko(x)]}}o=n.y-xi;const E=(A,x)=>!wa(A,x,Qc,o+(l?ar:0),i.boxes)&&i.heightAt(A,x)<=o+(l?ar:ps),M=n.x+h*f;E(M,n.z)&&(n.x=M);const w=n.z+p*f;if(E(n.x,w)&&(n.z=w),c=Vo(n.x,n.z,o+(l?ar:.04),i),l&&Math.abs(c-o)<=ar){n.y=c+xi,n.velocityY=0,n.jumpsUsed=0;continue}l=!1,n.jumpsUsed===0&&(n.jumpsUsed=1);let y=o+n.velocityY*f-Zl*f*f/2;if(n.velocityY-=Zl*f,y>o)for(const A of i.boxes)el(n.x,n.z,A)&&o+Vr<=A.minY+ps&&y+Vr>A.minY&&(y=Math.min(y,A.minY-Vr),n.velocityY=0);n.velocityY<=0&&o>=c-(r!==void 0?.04:ps)&&y<=c&&(y=c,n.velocityY=0,n.jumpsUsed=0,l=!0),n.y=y+xi}r!==void 0&&(n.supportId=n.velocityY<=0?ql(n.x,n.y-xi,n.z,r+_):null)}function ip(n,t,e){let i=7,s;for(const o of n){if(!o.available)continue;const c=o.position.x-t.x,l=o.position.y-t.y,u=o.position.z-t.z,d=Math.hypot(c,l,u);d>i||d>.001&&Si(t,{x:c/d,y:l/d,z:u/d},d,e)<d-.05||(i=d,s=o)}if(!s)return"";const r=Du(s.id,s.state,s.owned),a=r==="unlock"?"取得 Lv.1":r==="upgrade"?`升至 Lv.${s.state.level+1}・彈匣補滿`:r==="refill"?"彈匣補滿":"快速換彈 8 秒・換彈時間 -25%";return`${Pe[s.id].label}｜${a}`}class zu{el=document.createElement("div");signature="";constructor(t){this.el.className="co-pickup-preview",this.el.hidden=!0,t.append(this.el)}update(t,e,i,s){const r=s?ip(t,e,i):"";r!==this.signature&&(this.signature=r,this.el.textContent=r,this.el.hidden=!r)}dispose(){this.el.remove()}}const nl="186",YM={ROTATE:0,DOLLY:1,PAN:2},$M={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},np=0,Jl=1,sp=2,Wr=1,rp=2,Bs=3,Nn=0,ii=1,Ce=2,Ji=0,In=1,ui=2,Ql=3,th=4,ap=5,hs=100,op=101,cp=102,lp=103,hp=104,up=200,dp=201,fp=202,pp=203,Hu=204,Gu=205,mp=206,gp=207,_p=208,vp=209,xp=210,yp=211,Mp=212,Sp=213,bp=214,Wo=0,Xo=1,qo=2,Zs=3,Yo=4,$o=5,Zo=6,Ko=7,Vu=0,wp=1,Ep=2,Oi=0,Wu=1,Xu=2,qu=3,Yu=4,$u=5,Zu=6,Ku=7,ju=300,Un=301,xs=302,za=303,Ha=304,Ea=306,jo=1e3,Ki=1001,Jo=1002,He=1003,Tp=1004,or=1005,Ge=1006,Ga=1007,Cn=1008,ai=1009,Ju=1010,Qu=1011,Ks=1012,sl=1013,zi=1014,bi=1015,Hi=1016,rl=1017,al=1018,js=1020,td=35902,ed=35899,id=1021,nd=1022,wi=1023,en=1026,Pn=1027,ol=1028,cl=1029,Fn=1030,ll=1031,hl=1033,Xr=33776,qr=33777,Yr=33778,$r=33779,Qo=35840,tc=35841,ec=35842,ic=35843,nc=36196,sc=37492,rc=37496,ac=37488,oc=37489,aa=37490,cc=37491,lc=37808,hc=37809,uc=37810,dc=37811,fc=37812,pc=37813,mc=37814,gc=37815,_c=37816,vc=37817,xc=37818,yc=37819,Mc=37820,Sc=37821,bc=36492,wc=36494,Ec=36495,Tc=36283,Ac=36284,oa=36285,Rc=36286,Ap=3200,Cc=0,Rp=1,mn="",ri="srgb",ca="srgb-linear",la="linear",he="srgb",Va=7680,Cp=519,Pp=512,Lp=513,Ip=514,ul=515,Dp=516,Np=517,dl=518,Up=519,sd=35044,Ui=35048,eh="300 es",Fi=2e3,Js=2001;function Fp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ha(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Op(){const n=ha("canvas");return n.style.display="block",n}const ih={};function ua(...n){const t="THREE."+n.shift();console.log(t,...n)}function rd(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ut(...n){n=rd(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ie(...n){n=rd(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function ms(...n){const t=n.join(" ");t in ih||(ih[t]=!0,Ut(...n))}function kp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Bp={[Wo]:Xo,[qo]:Zo,[Yo]:Ko,[Zs]:$o,[Xo]:Wo,[Zo]:qo,[Ko]:Yo,[$o]:Zs};class xn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nh=1234567;const Xs=Math.PI/180,Qs=180/Math.PI;function Qi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]).toLowerCase()}function Kt(n,t,e){return Math.max(t,Math.min(e,n))}function fl(n,t){return(n%t+t)%t}function zp(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Hp(n,t,e){return n!==t?(e-n)/(t-n):0}function qs(n,t,e){return(1-e)*n+e*t}function Gp(n,t,e,i){return qs(n,t,1-Math.exp(-e*i))}function Vp(n,t=1){return t-Math.abs(fl(n,t*2)-t)}function Wp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Xp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function qp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Yp(n,t){return n+Math.random()*(t-n)}function $p(n){return n*(.5-Math.random())}function Zp(n){n!==void 0&&(nh=n);let t=nh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Kp(n){return n*Xs}function jp(n){return n*Qs}function Jp(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Qp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function tm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function em(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),u=a((t+i)/2),d=r((t-i)/2),h=a((t-i)/2),p=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*u,c*d,c*h,o*l);break;case"YZY":n.set(c*h,o*u,c*d,o*l);break;case"ZXZ":n.set(c*d,c*h,o*u,o*l);break;case"XZX":n.set(o*u,c*g,c*p,o*l);break;case"YXY":n.set(c*p,o*u,c*g,o*l);break;case"ZYZ":n.set(c*g,c*p,o*u,o*l);break;default:Ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ue(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ae={DEG2RAD:Xs,RAD2DEG:Qs,generateUUID:Qi,clamp:Kt,euclideanModulo:fl,mapLinear:zp,inverseLerp:Hp,lerp:qs,damp:Gp,pingpong:Vp,smoothstep:Wp,smootherstep:Xp,randInt:qp,randFloat:Yp,randFloatSpread:$p,seededRandom:Zp,degToRad:Kp,radToDeg:jp,isPowerOfTwo:Jp,ceilPowerOfTwo:Qp,floorPowerOfTwo:tm,setQuaternionFromProperEuler:em,normalize:ue,denormalize:yi},Ll=class Ll{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ll.prototype.isVector2=!0;let Ft=Ll;class Gi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(d!==_||c!==h||l!==p||u!==g){let m=c*h+l*p+u*g+d*_;m<0&&(h=-h,p=-p,g=-g,_=-_,m=-m);let f=1-o;if(m<.9995){const S=Math.acos(m),E=Math.sin(S);f=Math.sin(f*S)/E,o=Math.sin(o*S)/E,c=c*f+h*o,l=l*f+p*o,u=u*f+g*o,d=d*f+_*o}else{c=c*f+h*o,l=l*f+p*o,u=u*f+g*o,d=d*f+_*o;const S=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=S,l*=S,u*=S,d*=S}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[a],h=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+u*d+c*p-l*h,t[e+1]=c*g+u*h+l*d-o*p,t[e+2]=l*g+u*p+o*h-c*d,t[e+3]=u*g-o*d-c*h-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),d=o(r/2),h=c(i/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"YZX":this._x=h*u*d+l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d-h*p*g;break;case"XZY":this._x=h*u*d-l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d+h*p*g;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Il=class Il{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),u=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+c*l+a*d-o*u,this.y=i+c*u+o*l-r*d,this.z=s+c*d+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Wa.copy(this).projectOnVector(t),this.sub(Wa)}reflect(t){return this.sub(Wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Il.prototype.isVector3=!0;let P=Il;const Wa=new P,sh=new Gi,Dl=class Dl{constructor(t,e,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],_=s[0],m=s[3],f=s[6],S=s[1],E=s[4],M=s[7],w=s[2],y=s[5],A=s[8];return r[0]=a*_+o*S+c*w,r[3]=a*m+o*E+c*y,r[6]=a*f+o*M+c*A,r[1]=l*_+u*S+d*w,r[4]=l*m+u*E+d*y,r[7]=l*f+u*M+d*A,r[2]=h*_+p*S+g*w,r[5]=h*m+p*E+g*y,r[8]=h*f+p*M+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=u*a-o*l,h=o*c-u*r,p=l*r-a*c,g=e*d+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*l-u*i)*_,t[2]=(o*i-s*a)*_,t[3]=h*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(i*c-l*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xa.makeScale(t,e)),this}rotate(t){return ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xa.makeRotation(-t)),this}translate(t,e){return ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Dl.prototype.isMatrix3=!0;let zt=Dl;const Xa=new zt,rh=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ah=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function im(){const n={enabled:!0,workingColorSpace:ca,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===he&&(s.r=tn(s.r),s.g=tn(s.g),s.b=tn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===he&&(s.r=gs(s.r),s.g=gs(s.g),s.b=gs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mn?la:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ca]:{primaries:t,whitePoint:i,transfer:la,toXYZ:rh,fromXYZ:ah,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:t,whitePoint:i,transfer:he,toXYZ:rh,fromXYZ:ah,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),n}const Qt=im();function tn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function gs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vn;class nm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Vn===void 0&&(Vn=ha("canvas")),Vn.width=t.width,Vn.height=t.height;const s=Vn.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Vn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ha("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=tn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(tn(e[i]/255)*255):e[i]=tn(e[i]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sm=0;class pl{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=Qi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(qa(s[a].image)):r.push(qa(s[a]))}else r=qa(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}let rm=0;const Ya=new P;class Ve extends xn{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,i=Ki,s=Ki,r=Ge,a=Cn,o=wi,c=ai,l=Ve.DEFAULT_ANISOTROPY,u=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=Qi(),this.name="",this.source=new pl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ya).x}get height(){return this.source.getSize(Ya).y}get depth(){return this.source.getSize(Ya).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ju)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jo:t.x=t.x-Math.floor(t.x);break;case Ki:t.x=t.x<0?0:1;break;case Jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jo:t.y=t.y-Math.floor(t.y);break;case Ki:t.y=t.y<0?0:1;break;case Jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=ju;Ve.DEFAULT_ANISOTROPY=1;const Nl=class Nl{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,M=(p+1)/2,w=(f+1)/2,y=(u+h)/4,A=(d+_)/4,x=(g+m)/4;return E>M&&E>w?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=y/i,r=A/i):M>w?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=y/s,r=x/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=A/r,s=x/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-_)/S,this.z=(h-u)/S,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nl.prototype.isVector4=!0;let be=Nl;class am extends xn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new Ve(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new pl(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends am{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ad extends Ve{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class om extends Ve{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const xa=class xa{constructor(t,e,i,s,r,a,o,c,l,u,d,h,p,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,u,d,h,p,g,_,m)}set(t,e,i,s,r,a,o,c,l,u,d,h,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xa().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/Wn.setFromMatrixColumn(t,0).length(),r=1/Wn.setFromMatrixColumn(t,1).length(),a=1/Wn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=a*u,p=a*d,g=o*u,_=o*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=h-_*l,e[9]=-o*c,e[2]=_-h*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const h=c*u,p=c*d,g=l*u,_=l*d;e[0]=h+_*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=_+h*o,e[10]=a*c}else if(t.order==="ZXY"){const h=c*u,p=c*d,g=l*u,_=l*d;e[0]=h-_*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=_-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const h=a*u,p=a*d,g=o*u,_=o*d;e[0]=c*u,e[4]=g*l-p,e[8]=h*l+_,e[1]=c*d,e[5]=_*l+h,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const h=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*u,e[4]=_-h*d,e[8]=g*d+p,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=p*d+g,e[10]=h-_*d}else if(t.order==="XZY"){const h=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+_,e[5]=a*u,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cm,t,lm)}lookAt(t,e,i){const s=this.elements;return ni.subVectors(t,e),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),cn.crossVectors(i,ni),cn.lengthSq()===0&&(Math.abs(i.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),cn.crossVectors(i,ni)),cn.normalize(),cr.crossVectors(ni,cn),s[0]=cn.x,s[4]=cr.x,s[8]=ni.x,s[1]=cn.y,s[5]=cr.y,s[9]=ni.y,s[2]=cn.z,s[6]=cr.z,s[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],S=i[3],E=i[7],M=i[11],w=i[15],y=s[0],A=s[4],x=s[8],T=s[12],C=s[1],L=s[5],F=s[9],z=s[13],I=s[2],V=s[6],B=s[10],Y=s[14],it=s[3],q=s[7],Q=s[11],et=s[15];return r[0]=a*y+o*C+c*I+l*it,r[4]=a*A+o*L+c*V+l*q,r[8]=a*x+o*F+c*B+l*Q,r[12]=a*T+o*z+c*Y+l*et,r[1]=u*y+d*C+h*I+p*it,r[5]=u*A+d*L+h*V+p*q,r[9]=u*x+d*F+h*B+p*Q,r[13]=u*T+d*z+h*Y+p*et,r[2]=g*y+_*C+m*I+f*it,r[6]=g*A+_*L+m*V+f*q,r[10]=g*x+_*F+m*B+f*Q,r[14]=g*T+_*z+m*Y+f*et,r[3]=S*y+E*C+M*I+w*it,r[7]=S*A+E*L+M*V+w*q,r[11]=S*x+E*F+M*B+w*Q,r[15]=S*T+E*z+M*Y+w*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15],S=c*p-l*h,E=o*p-l*d,M=o*h-c*d,w=a*p-l*u,y=a*h-c*u,A=a*d-o*u;return e*(_*S-m*E+f*M)-i*(g*S-m*w+f*y)+s*(g*E-_*w+f*A)-r*(g*M-_*y+m*A)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-i*(r*u-o*c)+s*(r*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],S=e*o-i*a,E=e*c-s*a,M=e*l-r*a,w=i*c-s*o,y=i*l-r*o,A=s*l-r*c,x=u*_-d*g,T=u*m-h*g,C=u*f-p*g,L=d*m-h*_,F=d*f-p*_,z=h*f-p*m,I=S*z-E*F+M*L+w*C-y*T+A*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/I;return t[0]=(o*z-c*F+l*L)*V,t[1]=(s*F-i*z-r*L)*V,t[2]=(_*A-m*y+f*w)*V,t[3]=(h*y-d*A-p*w)*V,t[4]=(c*C-a*z-l*T)*V,t[5]=(e*z-s*C+r*T)*V,t[6]=(m*M-g*A-f*E)*V,t[7]=(u*A-h*M+p*E)*V,t[8]=(a*F-o*C+l*x)*V,t[9]=(i*C-e*F-r*x)*V,t[10]=(g*y-_*M+f*S)*V,t[11]=(d*M-u*y-p*S)*V,t[12]=(o*T-a*L-c*x)*V,t[13]=(e*L-i*T+s*x)*V,t[14]=(_*E-g*w-m*S)*V,t[15]=(u*w-d*E+h*S)*V,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,d=o+o,h=r*l,p=r*u,g=r*d,_=a*u,m=a*d,f=o*d,S=c*l,E=c*u,M=c*d,w=i.x,y=i.y,A=i.z;return s[0]=(1-(_+f))*w,s[1]=(p+M)*w,s[2]=(g-E)*w,s[3]=0,s[4]=(p-M)*y,s[5]=(1-(h+f))*y,s[6]=(m+S)*y,s[7]=0,s[8]=(g+E)*A,s[9]=(m-S)*A,s[10]=(1-(h+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Wn.set(s[0],s[1],s[2]).length();const o=Wn.set(s[4],s[5],s[6]).length(),c=Wn.set(s[8],s[9],s[10]).length();r<0&&(a=-a),mi.copy(this);const l=1/a,u=1/o,d=1/c;return mi.elements[0]*=l,mi.elements[1]*=l,mi.elements[2]*=l,mi.elements[4]*=u,mi.elements[5]*=u,mi.elements[6]*=u,mi.elements[8]*=d,mi.elements[9]*=d,mi.elements[10]*=d,e.setFromRotationMatrix(mi),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,s,r,a,o=Fi,c=!1){const l=this.elements,u=2*r/(e-t),d=2*r/(i-s),h=(e+t)/(e-t),p=(i+s)/(i-s);let g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===Fi)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Js)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Fi,c=!1){const l=this.elements,u=2/(e-t),d=2/(i-s),h=-(e+t)/(e-t),p=-(i+s)/(i-s);let g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===Fi)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Js)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};xa.prototype.isMatrix4=!0;let ne=xa;const Wn=new P,mi=new ne,cm=new P(0,0,0),lm=new P(1,1,1),cn=new P,cr=new P,ni=new P,oh=new ne,ch=new Gi;class vn{constructor(t=0,e=0,i=0,s=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return oh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ch.setFromEuler(this),this.setFromQuaternion(ch,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class od{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hm=0;const lh=new P,Xn=new Gi,Wi=new ne,lr=new P,Es=new P,um=new P,dm=new Gi,hh=new P(1,0,0),uh=new P(0,1,0),dh=new P(0,0,1),fh={type:"added"},fm={type:"removed"},qn={type:"childadded",child:null},$a={type:"childremoved",child:null};class xe extends xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new P,e=new vn,i=new Gi,s=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new zt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new od,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xn.setFromAxisAngle(t,e),this.quaternion.multiply(Xn),this}rotateOnWorldAxis(t,e){return Xn.setFromAxisAngle(t,e),this.quaternion.premultiply(Xn),this}rotateX(t){return this.rotateOnAxis(hh,t)}rotateY(t){return this.rotateOnAxis(uh,t)}rotateZ(t){return this.rotateOnAxis(dh,t)}translateOnAxis(t,e){return lh.copy(t).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hh,t)}translateY(t){return this.translateOnAxis(uh,t)}translateZ(t){return this.translateOnAxis(dh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?lr.copy(t):lr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Es,lr,this.up):Wi.lookAt(lr,Es,this.up),this.quaternion.setFromRotationMatrix(Wi),s&&(Wi.extractRotation(s.matrixWorld),Xn.setFromRotationMatrix(Wi),this.quaternion.premultiply(Xn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fh),qn.child=t,this.dispatchEvent(qn),qn.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fm),$a.child=t,this.dispatchEvent($a),$a.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fh),qn.child=t,this.dispatchEvent(qn),qn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,t,um),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,dm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}xe.DEFAULT_UP=new P(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ve extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pm={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ve;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ln={h:0,s:0,l:0},hr={h:0,s:0,l:0};function Ka(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Pt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ri){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Qt.workingColorSpace){if(t=fl(t,1),e=Kt(e,0,1),i=Kt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Ka(a,r,t+1/3),this.g=Ka(a,r,t),this.b=Ka(a,r,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=ri){function i(r){r!==void 0&&parseFloat(r)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ri){const i=cd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=tn(t.r),this.g=tn(t.g),this.b=tn(t.b),this}copyLinearToSRGB(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ri){return Qt.workingToColorSpace($e.copy(this),t),Math.round(Kt($e.r*255,0,255))*65536+Math.round(Kt($e.g*255,0,255))*256+Math.round(Kt($e.b*255,0,255))}getHexString(t=ri){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace($e.copy(this),e);const i=$e.r,s=$e.g,r=$e.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=ri){Qt.workingToColorSpace($e.copy(this),t);const e=$e.r,i=$e.g,s=$e.b;return t!==ri?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ln),this.setHSL(ln.h+t,ln.s+e,ln.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ln),t.getHSL(hr);const i=qs(ln.h,hr.h,e),s=qs(ln.s,hr.s,e),r=qs(ln.l,hr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new Pt;Pt.NAMES=cd;class ml extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const gi=new P,Xi=new P,ja=new P,qi=new P,Yn=new P,$n=new P,ph=new P,Ja=new P,Qa=new P,to=new P,eo=new be,io=new be,no=new be;class hi{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),gi.subVectors(t,e),s.cross(gi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){gi.subVectors(s,e),Xi.subVectors(i,e),ja.subVectors(t,e);const a=gi.dot(gi),o=gi.dot(Xi),c=gi.dot(ja),l=Xi.dot(Xi),u=Xi.dot(ja),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(l*c-o*u)*h,g=(a*u-o*c)*h;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,qi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,qi.x),c.addScaledVector(a,qi.y),c.addScaledVector(o,qi.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return eo.setScalar(0),io.setScalar(0),no.setScalar(0),eo.fromBufferAttribute(t,e),io.fromBufferAttribute(t,i),no.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(eo,r.x),a.addScaledVector(io,r.y),a.addScaledVector(no,r.z),a}static isFrontFacing(t,e,i,s){return gi.subVectors(i,e),Xi.subVectors(t,e),gi.cross(Xi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),gi.cross(Xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return hi.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return hi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Yn.subVectors(s,i),$n.subVectors(r,i),Ja.subVectors(t,i);const c=Yn.dot(Ja),l=$n.dot(Ja);if(c<=0&&l<=0)return e.copy(i);Qa.subVectors(t,s);const u=Yn.dot(Qa),d=$n.dot(Qa);if(u>=0&&d<=u)return e.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(i).addScaledVector(Yn,a);to.subVectors(t,r);const p=Yn.dot(to),g=$n.dot(to);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector($n,o);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return ph.subVectors(r,s),o=(d-u)/(d-u+(p-g)),e.copy(s).addScaledVector(ph,o);const f=1/(m+_+h);return a=_*f,o=h*f,e.copy(i).addScaledVector(Yn,a).addScaledVector($n,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Bn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(_i.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(_i.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=_i.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_i):_i.fromBufferAttribute(r,a),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ur.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ur.copy(i.boundingBox)),ur.applyMatrix4(t.matrixWorld),this.union(ur)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ts),dr.subVectors(this.max,Ts),Zn.subVectors(t.a,Ts),Kn.subVectors(t.b,Ts),jn.subVectors(t.c,Ts),hn.subVectors(Kn,Zn),un.subVectors(jn,Kn),Sn.subVectors(Zn,jn);let e=[0,-hn.z,hn.y,0,-un.z,un.y,0,-Sn.z,Sn.y,hn.z,0,-hn.x,un.z,0,-un.x,Sn.z,0,-Sn.x,-hn.y,hn.x,0,-un.y,un.x,0,-Sn.y,Sn.x,0];return!so(e,Zn,Kn,jn,dr)||(e=[1,0,0,0,1,0,0,0,1],!so(e,Zn,Kn,jn,dr))?!1:(fr.crossVectors(hn,un),e=[fr.x,fr.y,fr.z],so(e,Zn,Kn,jn,dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Yi=[new P,new P,new P,new P,new P,new P,new P,new P],_i=new P,ur=new Bn,Zn=new P,Kn=new P,jn=new P,hn=new P,un=new P,Sn=new P,Ts=new P,dr=new P,fr=new P,bn=new P;function so(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){bn.fromArray(n,r);const o=s.x*Math.abs(bn.x)+s.y*Math.abs(bn.y)+s.z*Math.abs(bn.z),c=t.dot(bn),l=e.dot(bn),u=i.dot(bn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Ie=new P,pr=new Ft;let mm=0;class Fe extends xn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=sd,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)pr.fromBufferAttribute(this,e),pr.applyMatrix3(t),this.setXY(e,pr.x,pr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=yi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class ld extends Fe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class hd extends Fe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ae extends Fe{constructor(t,e,i){super(new Float32Array(t),e,i)}}const gm=new Bn,As=new P,ro=new P;class zn{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):gm.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;As.subVectors(t,this.center);const e=As.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(As,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ro.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(As.copy(t.center).add(ro)),this.expandByPoint(As.copy(t.center).sub(ro))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let _m=0;const ci=new ne,ao=new xe,Jn=new P,si=new Bn,Rs=new Bn,ze=new P;class ge extends xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fp(t)?hd:ld)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,e,i){return ci.makeTranslation(t,e,i),this.applyMatrix4(ci),this}scale(t,e,i){return ci.makeScale(t,e,i),this.applyMatrix4(ci),this}lookAt(t){return ao.lookAt(t),ao.updateMatrix(),this.applyMatrix4(ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jn).negate(),this.translate(Jn.x,Jn.y,Jn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ae(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];si.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(si.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Rs.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(si.min,Rs.min),si.expandByPoint(ze),ze.addVectors(si.max,Rs.max),si.expandByPoint(ze)):(si.expandByPoint(Rs.min),si.expandByPoint(Rs.max))}si.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ze));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)ze.fromBufferAttribute(o,l),c&&(Jn.fromBufferAttribute(t,l),ze.add(Jn)),s=Math.max(s,i.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Fe(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let x=0;x<i.count;x++)o[x]=new P,c[x]=new P;const l=new P,u=new P,d=new P,h=new Ft,p=new Ft,g=new Ft,_=new P,m=new P;function f(x,T,C){l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,C),h.fromBufferAttribute(r,x),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,C),u.sub(l),d.sub(l),p.sub(h),g.sub(h);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),o[x].add(_),o[T].add(_),o[C].add(_),c[x].add(m),c[T].add(m),c[C].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let x=0,T=S.length;x<T;++x){const C=S[x],L=C.start,F=C.count;for(let z=L,I=L+F;z<I;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const E=new P,M=new P,w=new P,y=new P;function A(x){w.fromBufferAttribute(s,x),y.copy(w);const T=o[x];E.copy(T),E.sub(w.multiplyScalar(w.dot(T))).normalize(),M.crossVectors(y,T);const L=M.dot(c[x])<0?-1:1;a.setXYZW(x,E.x,E.y,E.z,L)}for(let x=0,T=S.length;x<T;++x){const C=S[x],L=C.start,F=C.count;for(let z=L,I=L+F;z<I;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,u=new P,d=new P;if(t)for(let h=0,p=t.count;h<p;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*u;for(let f=0;f<u;f++)h[g++]=l[p++]}return new Fe(h,u,d)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ge,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,i);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],p=t(h,i);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const p=l[d];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=sd,this.updateRanges=[],this.version=0,this.uuid=Qi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const je=new P;class da{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=yi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ua("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new da(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ua("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const oo=new P,xm=new P,ym=new zt;class fn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=oo.subVectors(i,e).cross(xm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(oo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ym.getNormalMatrix(t),s=this.coplanarPoint(oo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Mm=0;class yn extends xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=In,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hu,this.blendDst=Gu,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Va,this.stencilZFail=Va,this.stencilZPass=Va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Pt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new fn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ft().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ta extends yn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Qn;const Cs=new P,ts=new P,es=new P,is=new Ft,Ps=new Ft,ud=new ne,mr=new P,Ls=new P,gr=new P,mh=new Ft,co=new Ft,gh=new Ft;class Aa extends xe{constructor(t=new Ta){if(super(),this.isSprite=!0,this.type="Sprite",Qn===void 0){Qn=new ge;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new vm(e,5);Qn.setIndex([0,1,2,0,2,3]),Qn.setAttribute("position",new da(i,3,0,!1)),Qn.setAttribute("uv",new da(i,2,3,!1))}this.geometry=Qn,this.material=t,this.center=new Ft(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ie('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ts.setFromMatrixScale(this.matrixWorld),ud.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),es.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ts.multiplyScalar(-es.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;_r(mr.set(-.5,-.5,0),es,a,ts,s,r),_r(Ls.set(.5,-.5,0),es,a,ts,s,r),_r(gr.set(.5,.5,0),es,a,ts,s,r),mh.set(0,0),co.set(1,0),gh.set(1,1);let o=t.ray.intersectTriangle(mr,Ls,gr,!1,Cs);if(o===null&&(_r(Ls.set(-.5,.5,0),es,a,ts,s,r),co.set(0,1),o=t.ray.intersectTriangle(mr,gr,Ls,!1,Cs),o===null))return;const c=t.ray.origin.distanceTo(Cs);c<t.near||c>t.far||e.push({distance:c,point:Cs.clone(),uv:hi.getInterpolation(Cs,mr,Ls,gr,mh,co,gh,new Ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function _r(n,t,e,i,s,r){is.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Ps.x=r*is.x-s*is.y,Ps.y=s*is.x+r*is.y):Ps.copy(is),n.copy(t),n.x+=Ps.x,n.y+=Ps.y,n.applyMatrix4(ud)}const $i=new P,lo=new P,vr=new P,xr=new P;class gl{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($i.copy(this.origin).addScaledVector(this.direction,e),$i.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){lo.copy(t).add(e).multiplyScalar(.5),vr.copy(e).sub(t).normalize(),xr.copy(this.origin).sub(lo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(vr),o=xr.dot(this.direction),c=-xr.dot(vr),l=xr.lengthSq(),u=Math.abs(1-a*a);let d,h,p,g;if(u>0)if(d=a*c-o,h=a*o-c,g=r*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,p=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+h*(h+2*c)+l);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(lo).addScaledVector(vr,h),p}intersectSphere(t,e){if(t.radius<0)return null;$i.subVectors(t.center,this.origin);const i=$i.dot(this.direction),s=$i.dot($i)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,$i)!==null}intersectTriangle(t,e,i,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,p=t.z-a.z,g=e.x-a.x,_=e.y-a.y,m=e.z-a.z,f=i.x-a.x,S=i.y-a.y,E=i.z-a.z,M=Math.abs(c),w=Math.abs(l),y=Math.abs(u);let A,x,T,C,L,F,z,I,V,B,Y,it;if(M>=w&&M>=y?(T=c,F=d,V=g,it=f,c>=0?(A=l,x=u,C=h,L=p,z=_,I=m,B=S,Y=E):(A=u,x=l,C=p,L=h,z=m,I=_,B=E,Y=S)):w>=y?(T=l,F=h,V=_,it=S,l>=0?(A=u,x=c,C=p,L=d,z=m,I=g,B=E,Y=f):(A=c,x=u,C=d,L=p,z=g,I=m,B=f,Y=E)):(T=u,F=p,V=m,it=E,u>=0?(A=c,x=l,C=d,L=h,z=g,I=_,B=f,Y=S):(A=l,x=c,C=h,L=d,z=_,I=g,B=S,Y=f)),T===0)return null;const q=A/T,Q=x/T,et=1/T,Rt=C-q*F,yt=L-Q*F,se=z-q*V,Jt=I-Q*V,te=B-q*it,$=Y-Q*it,tt=te*Jt-$*se,vt=Rt*$-yt*te,Ot=se*yt-Jt*Rt;if(s){if(tt<0||vt<0||Ot<0)return null}else if((tt<0||vt<0||Ot<0)&&(tt>0||vt>0||Ot>0))return null;const gt=tt+vt+Ot;if(gt===0)return null;const Gt=et*(tt*F+vt*V+Ot*it);return(gt>0?Gt<0:Gt>0)?null:this.at(Gt/gt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt extends yn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _h=new ne,wn=new gl,yr=new zn,vh=new P,Mr=new P,Sr=new P,br=new P,ho=new P,wr=new P,xh=new P,Er=new P;class Lt extends xe{constructor(t=new ge,e=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){wr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],d=r[c];u!==0&&(ho.fromBufferAttribute(d,t),a?wr.addScaledVector(ho,u):wr.addScaledVector(ho.sub(e),u))}e.add(wr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere),yr.applyMatrix4(r),wn.copy(t.ray).recast(t.near),!(yr.containsPoint(wn.origin)===!1&&(wn.intersectSphere(yr,vh)===null||wn.origin.distanceToSquared(vh)>(t.far-t.near)**2))&&(_h.copy(r).invert(),wn.copy(t.ray).applyMatrix4(_h),!(i.boundingBox!==null&&wn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,wn)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,w=E;M<w;M+=3){const y=o.getX(M),A=o.getX(M+1),x=o.getX(M+2);s=Tr(this,f,t,i,l,u,d,y,A,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const S=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);s=Tr(this,a,t,i,l,u,d,S,E,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,w=E;M<w;M+=3){const y=M,A=M+1,x=M+2;s=Tr(this,f,t,i,l,u,d,y,A,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const S=m,E=m+1,M=m+2;s=Tr(this,a,t,i,l,u,d,S,E,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Sm(n,t,e,i,s,r,a,o){let c;if(t.side===ii?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===Nn,o),c===null)return null;Er.copy(o),Er.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Er);return l<e.near||l>e.far?null:{distance:l,point:Er.clone(),object:n}}function Tr(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,Mr),n.getVertexPosition(c,Sr),n.getVertexPosition(l,br);const u=Sm(n,t,e,i,Mr,Sr,br,xh);if(u){const d=new P;hi.getBarycoord(xh,Mr,Sr,br,d),s&&(u.uv=hi.getInterpolatedAttribute(s,o,c,l,d,new Ft)),r&&(u.uv1=hi.getInterpolatedAttribute(r,o,c,l,d,new Ft)),a&&(u.normal=hi.getInterpolatedAttribute(a,o,c,l,d,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new P,materialIndex:0};hi.getNormal(Mr,Sr,br,h.normal),u.face=h,u.barycoord=d}return u}class _l extends Ve{constructor(t=null,e=1,i=1,s,r,a,o,c,l=He,u=He,d,h){super(null,a,o,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yh extends Fe{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ns=new ne,Mh=new ne,Ar=[],Sh=new Bn,bm=new ne,Is=new Lt,Ds=new zn;class Ln extends Lt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new yh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,bm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ns),Sh.copy(t.boundingBox).applyMatrix4(ns),this.boundingBox.union(Sh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ns),Ds.copy(t.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(Ds)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Is.geometry=this.geometry,Is.material=this.material,Is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ds.copy(this.boundingSphere),Ds.applyMatrix4(i),t.ray.intersectsSphere(Ds)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ns),Mh.multiplyMatrices(i,ns),Is.matrixWorld=Mh,Is.raycast(t,Ar);for(let a=0,o=Ar.length;a<o;a++){const c=Ar[a];c.instanceId=r,c.object=this,e.push(c)}Ar.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new yh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new _l(new Float32Array(s*this.count),s,this.count,ol,bi));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const En=new zn,wm=new Ft(.5,.5),Rr=new P;class vl{constructor(t=new fn,e=new fn,i=new fn,s=new fn,r=new fn,a=new fn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Fi,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],p=r[7],g=r[8],_=r[9],m=r[10],f=r[11],S=r[12],E=r[13],M=r[14],w=r[15];if(s[0].setComponents(l-a,p-u,f-g,w-S).normalize(),s[1].setComponents(l+a,p+u,f+g,w+S).normalize(),s[2].setComponents(l+o,p+d,f+_,w+E).normalize(),s[3].setComponents(l-o,p-d,f-_,w-E).normalize(),i)s[4].setComponents(c,h,m,M).normalize(),s[5].setComponents(l-c,p-h,f-m,w-M).normalize();else if(s[4].setComponents(l-c,p-h,f-m,w-M).normalize(),e===Fi)s[5].setComponents(l+c,p+h,f+m,w+M).normalize();else if(e===Js)s[5].setComponents(c,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),En.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),En.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(En)}intersectsSprite(t){En.center.set(0,0,0);const e=wm.distanceTo(t.center);return En.radius=.7071067811865476+e,En.applyMatrix4(t.matrixWorld),this.intersectsSphere(En)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Rr.x=s.normal.x>0?t.max.x:t.min.x,Rr.y=s.normal.y>0?t.max.y:t.min.y,Rr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dd extends yn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fa=new P,pa=new P,bh=new ne,Ns=new gl,Cr=new zn,uo=new P,wh=new P;class Pc extends xe{constructor(t=new ge,e=new dd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)fa.fromBufferAttribute(e,s-1),pa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=fa.distanceTo(pa);t.setAttribute("lineDistance",new ae(i,1))}else Ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cr.copy(i.boundingSphere),Cr.applyMatrix4(s),Cr.radius+=r,t.ray.intersectsSphere(Cr)===!1)return;bh.copy(s).invert(),Ns.copy(t.ray).applyMatrix4(bh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const f=u.getX(_),S=u.getX(_+1),E=Pr(this,t,Ns,c,f,S,_);E&&e.push(E)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),f=Pr(this,t,Ns,c,_,m,g-1);f&&e.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const f=Pr(this,t,Ns,c,_,_+1,_);f&&e.push(f)}if(this.isLineLoop){const _=Pr(this,t,Ns,c,g-1,p,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Pr(n,t,e,i,s,r,a){const o=n.geometry.attributes.position;if(fa.fromBufferAttribute(o,s),pa.fromBufferAttribute(o,r),e.distanceSqToSegment(fa,pa,uo,wh)>i)return;uo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(uo);if(!(l<t.near||l>t.far))return{distance:l,point:wh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Eh=new P,Th=new P;class Em extends Pc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Eh.fromBufferAttribute(e,s),Th.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Eh.distanceTo(Th);t.setAttribute("lineDistance",new ae(i,1))}else Ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fd extends yn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ah=new ne,Lc=new gl,Lr=new zn,Ir=new P;class tr extends xe{constructor(t=new ge,e=new fd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Lr.copy(i.boundingSphere),Lr.applyMatrix4(s),Lr.radius+=r,t.ray.intersectsSphere(Lr)===!1)return;Ah.copy(s).invert(),Lc.copy(t.ray).applyMatrix4(Ah);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,d=i.attributes.position;if(l!==null){const h=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=h,_=p;g<_;g++){const m=l.getX(g);Ir.fromBufferAttribute(d,m),Rh(Ir,m,c,s,t,e,this)}}else{const h=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=h,_=p;g<_;g++)Ir.fromBufferAttribute(d,g),Rh(Ir,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Rh(n,t,e,i,s,r,a){const o=Lc.distanceSqToPoint(n);if(o<e){const c=new P;Lc.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class pd extends Ve{constructor(t=[],e=Un,i,s,r,a,o,c,l,u){super(t,e,i,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xl extends Ve{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class er extends Ve{constructor(t,e,i=zi,s,r,a,o=He,c=He,l,u=en,d=1){if(u!==en&&u!==Pn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Tm extends er{constructor(t,e=zi,i=Un,s,r,a=He,o=He,c,l=en){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class md extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class we extends ge{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(d,2));function g(_,m,f,S,E,M,w,y,A,x,T){const C=M/A,L=w/x,F=M/2,z=w/2,I=y/2,V=A+1,B=x+1;let Y=0,it=0;const q=new P;for(let Q=0;Q<B;Q++){const et=Q*L-z;for(let Rt=0;Rt<V;Rt++){const yt=Rt*C-F;q[_]=yt*S,q[m]=et*E,q[f]=I,l.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[f]=y>0?1:-1,u.push(q.x,q.y,q.z),d.push(Rt/A),d.push(1-Q/x),Y+=1}}for(let Q=0;Q<x;Q++)for(let et=0;et<A;et++){const Rt=h+et+V*Q,yt=h+et+V*(Q+1),se=h+(et+1)+V*(Q+1),Jt=h+(et+1)+V*Q;c.push(Rt,yt,Jt),c.push(yt,se,Jt),it+=6}o.addGroup(p,it,T),p+=it,h+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class yl extends ge{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new P,u=new Ft;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const p=i+d/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(o,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class On extends ge{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],p=[];let g=0;const _=[],m=i/2;let f=0;S(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(p,2));function S(){const M=new P,w=new P;let y=0;const A=(e-t)/i;for(let x=0;x<=r;x++){const T=[],C=x/r,L=C*(e-t)+t;for(let F=0;F<=s;F++){const z=F/s,I=z*c+o,V=Math.sin(I),B=Math.cos(I);w.x=L*V,w.y=-C*i+m,w.z=L*B,d.push(w.x,w.y,w.z),M.set(V,A,B).normalize(),h.push(M.x,M.y,M.z),p.push(z,1-C),T.push(g++)}_.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){const C=_[T][x],L=_[T+1][x],F=_[T+1][x+1],z=_[T][x+1];(t>0||T!==0)&&(u.push(C,L,z),y+=3),(e>0||T!==r-1)&&(u.push(L,F,z),y+=3)}l.addGroup(f,y,0),f+=y}function E(M){const w=g,y=new Ft,A=new P;let x=0;const T=M===!0?t:e,C=M===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*C,0),h.push(0,C,0),p.push(.5,.5),g++;const L=g;for(let F=0;F<=s;F++){const I=F/s*c+o,V=Math.cos(I),B=Math.sin(I);A.x=T*B,A.y=m*C,A.z=T*V,d.push(A.x,A.y,A.z),h.push(0,C,0),y.x=V*.5+.5,y.y=B*.5*C+.5,p.push(y.x,y.y),g++}for(let F=0;F<s;F++){const z=w+F,I=L+F;M===!0?u.push(I,I+1,z):u.push(I+1,I,z),x+=3}l.addGroup(f,x,M===!0?1:2),f+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new On(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ra extends ge{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),l(i),u(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const E=new P,M=new P,w=new P;for(let y=0;y<e.length;y+=3)p(e[y+0],E),p(e[y+1],M),p(e[y+2],w),c(E,M,w,S)}function c(S,E,M,w){const y=w+1,A=[];for(let x=0;x<=y;x++){A[x]=[];const T=S.clone().lerp(M,x/y),C=E.clone().lerp(M,x/y),L=y-x;for(let F=0;F<=L;F++)F===0&&x===y?A[x][F]=T:A[x][F]=T.clone().lerp(C,F/L)}for(let x=0;x<y;x++)for(let T=0;T<2*(y-x)-1;T++){const C=Math.floor(T/2);T%2===0?(h(A[x][C+1]),h(A[x+1][C]),h(A[x][C])):(h(A[x][C+1]),h(A[x+1][C+1]),h(A[x+1][C]))}}function l(S){const E=new P;for(let M=0;M<r.length;M+=3)E.x=r[M+0],E.y=r[M+1],E.z=r[M+2],E.normalize().multiplyScalar(S),r[M+0]=E.x,r[M+1]=E.y,r[M+2]=E.z}function u(){const S=new P;for(let E=0;E<r.length;E+=3){S.x=r[E+0],S.y=r[E+1],S.z=r[E+2];const M=m(S)/2/Math.PI+.5,w=f(S)/Math.PI+.5;a.push(M,1-w)}g(),d()}function d(){for(let S=0;S<a.length;S+=6){const E=a[S+0],M=a[S+2],w=a[S+4],y=Math.max(E,M,w),A=Math.min(E,M,w);y>.9&&A<.1&&(E<.2&&(a[S+0]+=1),M<.2&&(a[S+2]+=1),w<.2&&(a[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function p(S,E){const M=S*3;E.x=t[M+0],E.y=t[M+1],E.z=t[M+2]}function g(){const S=new P,E=new P,M=new P,w=new P,y=new Ft,A=new Ft,x=new Ft;for(let T=0,C=0;T<r.length;T+=9,C+=6){S.set(r[T+0],r[T+1],r[T+2]),E.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),y.set(a[C+0],a[C+1]),A.set(a[C+2],a[C+3]),x.set(a[C+4],a[C+5]),w.copy(S).add(E).add(M).divideScalar(3);const L=m(w);_(y,C+0,S,L),_(A,C+2,E,L),_(x,C+4,M,L)}}function _(S,E,M,w){w<0&&S.x===1&&(a[E]=S.x-1),M.x===0&&M.z===0&&(a[E]=w/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ra(t.vertices,t.indices,t.radius,t.detail)}}class Ca extends Ra{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ca(t.radius,t.detail)}}class ys extends Ra{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ys(t.radius,t.detail)}}class nn extends ge{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,d=t/o,h=e/c,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const S=f*h-a;for(let E=0;E<l;E++){const M=E*d-r;g.push(M,-S,0),_.push(0,0,1),m.push(E/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<o;S++){const E=S+l*f,M=S+l*(f+1),w=S+1+l*(f+1),y=S+1+l*f;p.push(E,M,y),p.push(M,w,y)}this.setIndex(p),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ms extends ge{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let d=t;const h=(e-t)/s,p=new P,g=new Ft;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const f=r+m/i*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}d+=h}for(let _=0;_<s;_++){const m=_*(i+1);for(let f=0;f<i;f++){const S=f+m,E=S,M=S+i+1,w=S+i+2,y=S+1;o.push(E,M,y),o.push(M,w,y)}}this.setIndex(o),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Pa extends ge{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],u=[],d=[],h=new P,p=new P,g=new P;for(let _=0;_<=i;_++){const m=a+_/i*o;for(let f=0;f<=s;f++){const S=f/s*r;p.x=(t+e*Math.cos(m))*Math.cos(S),p.y=(t+e*Math.cos(m))*Math.sin(S),p.z=e*Math.sin(m),l.push(p.x,p.y,p.z),h.x=t*Math.cos(S),h.y=t*Math.sin(S),g.subVectors(p,h).normalize(),u.push(g.x,g.y,g.z),d.push(f/s),d.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=s;m++){const f=(s+1)*_+m-1,S=(s+1)*(_-1)+m-1,E=(s+1)*(_-1)+m,M=(s+1)*_+m;c.push(f,S,M),c.push(S,E,M)}this.setIndex(c),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pa(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function Ss(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(Ch(s))s.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Ch(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Je(n){const t={};for(let e=0;e<n.length;e++){const i=Ss(n[e]);for(const s in i)t[s]=i[s]}return t}function Ch(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Am(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function gd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Rm={clone:Ss,merge:Je};var Cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class We extends yn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cm,this.fragmentShader=Pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=Am(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Pt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ft().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new be().fromArray(s.value);break;case"m3":this.uniforms[i].value=new zt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ne().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Lm extends We{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zs extends yn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cc,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Im extends yn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Dm extends yn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class _d extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class vd extends _d{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const fo=new ne,Ph=new P,Lh=new P;class Nm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vl,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Ph.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ph),Lh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){fo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(fo,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Js||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(fo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Dr=new P,Nr=new Gi,Ai=new P;class xd extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Dr,Nr,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dr,Nr,Ai.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Dr,Nr,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dr,Nr,Ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const dn=new P,Ih=new Ft,Dh=new Ft;class ei extends xd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(dn.x,dn.y).multiplyScalar(-t/dn.z),dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(dn.x,dn.y).multiplyScalar(-t/dn.z)}getViewSize(t,e){return this.getViewBounds(t,Ih,Dh),e.subVectors(Dh,Ih)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class La extends xd{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Um extends Nm{constructor(){super(new La(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ZM extends _d{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new Um}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const ss=-90,rs=1;class Fm extends xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ei(ss,rs,t,e);s.layers=this.layers,this.add(s);const r=new ei(ss,rs,t,e);r.layers=this.layers,this.add(r);const a=new ei(ss,rs,t,e);a.layers=this.layers,this.add(a);const o=new ei(ss,rs,t,e);o.layers=this.layers,this.add(o);const c=new ei(ss,rs,t,e);c.layers=this.layers,this.add(c);const l=new ei(ss,rs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Js)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Om extends ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class KM{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ul=class Ul{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Ul.prototype.isMatrix2=!0;let Nh=Ul;class jM extends xn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Uh(n,t,e,i){const s=km(i);switch(e){case id:return n*t;case ol:return n*t/s.components*s.byteLength;case cl:return n*t/s.components*s.byteLength;case Fn:return n*t*2/s.components*s.byteLength;case ll:return n*t*2/s.components*s.byteLength;case nd:return n*t*3/s.components*s.byteLength;case wi:return n*t*4/s.components*s.byteLength;case hl:return n*t*4/s.components*s.byteLength;case Xr:case qr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Yr:case $r:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case tc:case ic:return Math.max(n,16)*Math.max(t,8)/4;case Qo:case ec:return Math.max(n,8)*Math.max(t,8)/2;case nc:case sc:case ac:case oc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case rc:case aa:case cc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case lc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case uc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case dc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case fc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case pc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case mc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case gc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case _c:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case vc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case xc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case yc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Mc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Sc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case bc:case wc:case Ec:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Tc:case Ac:return Math.ceil(n/4)*Math.ceil(t/4)*8;case oa:case Rc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function km(n){switch(n){case ai:case Ju:return{byteLength:1,components:1};case Ks:case Qu:case Hi:return{byteLength:2,components:1};case rl:case al:return{byteLength:2,components:4};case zi:case sl:case bi:return{byteLength:4,components:1};case td:case ed:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nl}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nl);function yd(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Bm(n){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var zm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hm=`#ifdef USE_ALPHAHASH
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
#endif`,Gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qm=`#ifdef USE_AOMAP
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
#endif`,Ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$m=`#ifdef USE_BATCHING
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
#endif`,Zm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Km=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qm=`#ifdef USE_IRIDESCENCE
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
#endif`,t0=`#ifdef USE_BUMPMAP
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
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,a0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,o0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,c0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,l0=`#define PI 3.141592653589793
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
} // validated`,h0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,u0=`vec3 transformedNormal = objectNormal;
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
#endif`,d0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g0="gl_FragColor = linearToOutputTexel( gl_FragColor );",_0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
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
#endif`,b0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A0=`#ifdef USE_GRADIENTMAP
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
}`,R0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,C0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,I0=`#ifdef USE_ENVMAP
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
#endif`,D0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O0=`PhysicalMaterial material;
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
#endif`,k0=`uniform sampler2D dfgLUT;
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
}`,B0=`
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
#endif`,z0=`#if defined( RE_IndirectDiffuse )
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
#endif`,H0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,V0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Y0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,K0=`#if defined( USE_POINTS_UV )
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
#endif`,j0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ig=`#ifdef USE_MORPHTARGETS
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
#endif`,ng=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,lg=`#ifdef USE_NORMALMAP
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
#endif`,hg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ug=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_g=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Eg=`float getShadowMask() {
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
}`,Tg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ag=`#ifdef USE_SKINNING
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
#endif`,Rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cg=`#ifdef USE_SKINNING
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
#endif`,Pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ng=`#ifdef USE_TRANSMISSION
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
#endif`,Ug=`#ifdef USE_TRANSMISSION
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
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hg=`uniform sampler2D t2D;
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
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`#include <common>
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
}`,Yg=`#if DEPTH_PACKING == 3200
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
}`,$g=`#define DISTANCE
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
}`,Zg=`#define DISTANCE
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
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`uniform float scale;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,t_=`#include <common>
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
}`,e_=`uniform vec3 diffuse;
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
}`,i_=`#define LAMBERT
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
}`,n_=`#define LAMBERT
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
}`,s_=`#define MATCAP
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
}`,r_=`#define MATCAP
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
}`,a_=`#define NORMAL
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
}`,o_=`#define NORMAL
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
}`,c_=`#define PHONG
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
}`,l_=`#define PHONG
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
}`,h_=`#define STANDARD
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
}`,u_=`#define STANDARD
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
}`,d_=`#define TOON
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
}`,f_=`#define TOON
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
}`,p_=`uniform float size;
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
}`,m_=`uniform vec3 diffuse;
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
}`,g_=`#include <common>
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
}`,__=`uniform vec3 color;
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
}`,v_=`uniform float rotation;
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
}`,x_=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:zm,alphahash_pars_fragment:Hm,alphamap_fragment:Gm,alphamap_pars_fragment:Vm,alphatest_fragment:Wm,alphatest_pars_fragment:Xm,aomap_fragment:qm,aomap_pars_fragment:Ym,batching_pars_vertex:$m,batching_vertex:Zm,begin_vertex:Km,beginnormal_vertex:jm,bsdfs:Jm,iridescence_fragment:Qm,bumpmap_pars_fragment:t0,clipping_planes_fragment:e0,clipping_planes_pars_fragment:i0,clipping_planes_pars_vertex:n0,clipping_planes_vertex:s0,color_fragment:r0,color_pars_fragment:a0,color_pars_vertex:o0,color_vertex:c0,common:l0,cube_uv_reflection_fragment:h0,defaultnormal_vertex:u0,displacementmap_pars_vertex:d0,displacementmap_vertex:f0,emissivemap_fragment:p0,emissivemap_pars_fragment:m0,colorspace_fragment:g0,colorspace_pars_fragment:_0,envmap_fragment:v0,envmap_common_pars_fragment:x0,envmap_pars_fragment:y0,envmap_pars_vertex:M0,envmap_physical_pars_fragment:I0,envmap_vertex:S0,fog_vertex:b0,fog_pars_vertex:w0,fog_fragment:E0,fog_pars_fragment:T0,gradientmap_pars_fragment:A0,lightmap_pars_fragment:R0,lights_lambert_fragment:C0,lights_lambert_pars_fragment:P0,lights_pars_begin:L0,lights_toon_fragment:D0,lights_toon_pars_fragment:N0,lights_phong_fragment:U0,lights_phong_pars_fragment:F0,lights_physical_fragment:O0,lights_physical_pars_fragment:k0,lights_fragment_begin:B0,lights_fragment_maps:z0,lights_fragment_end:H0,lightprobes_pars_fragment:G0,logdepthbuf_fragment:V0,logdepthbuf_pars_fragment:W0,logdepthbuf_pars_vertex:X0,logdepthbuf_vertex:q0,map_fragment:Y0,map_pars_fragment:$0,map_particle_fragment:Z0,map_particle_pars_fragment:K0,metalnessmap_fragment:j0,metalnessmap_pars_fragment:J0,morphinstance_vertex:Q0,morphcolor_vertex:tg,morphnormal_vertex:eg,morphtarget_pars_vertex:ig,morphtarget_vertex:ng,normal_fragment_begin:sg,normal_fragment_maps:rg,normal_pars_fragment:ag,normal_pars_vertex:og,normal_vertex:cg,normalmap_pars_fragment:lg,clearcoat_normal_fragment_begin:hg,clearcoat_normal_fragment_maps:ug,clearcoat_pars_fragment:dg,iridescence_pars_fragment:fg,opaque_fragment:pg,packing:mg,premultiplied_alpha_fragment:gg,project_vertex:_g,dithering_fragment:vg,dithering_pars_fragment:xg,roughnessmap_fragment:yg,roughnessmap_pars_fragment:Mg,shadowmap_pars_fragment:Sg,shadowmap_pars_vertex:bg,shadowmap_vertex:wg,shadowmask_pars_fragment:Eg,skinbase_vertex:Tg,skinning_pars_vertex:Ag,skinning_vertex:Rg,skinnormal_vertex:Cg,specularmap_fragment:Pg,specularmap_pars_fragment:Lg,tonemapping_fragment:Ig,tonemapping_pars_fragment:Dg,transmission_fragment:Ng,transmission_pars_fragment:Ug,uv_pars_fragment:Fg,uv_pars_vertex:Og,uv_vertex:kg,worldpos_vertex:Bg,background_vert:zg,background_frag:Hg,backgroundCube_vert:Gg,backgroundCube_frag:Vg,cube_vert:Wg,cube_frag:Xg,depth_vert:qg,depth_frag:Yg,distance_vert:$g,distance_frag:Zg,equirect_vert:Kg,equirect_frag:jg,linedashed_vert:Jg,linedashed_frag:Qg,meshbasic_vert:t_,meshbasic_frag:e_,meshlambert_vert:i_,meshlambert_frag:n_,meshmatcap_vert:s_,meshmatcap_frag:r_,meshnormal_vert:a_,meshnormal_frag:o_,meshphong_vert:c_,meshphong_frag:l_,meshphysical_vert:h_,meshphysical_frag:u_,meshtoon_vert:d_,meshtoon_frag:f_,points_vert:p_,points_frag:m_,shadow_vert:g_,shadow_frag:__,sprite_vert:v_,sprite_frag:x_},dt={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Li={basic:{uniforms:Je([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Je([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Je([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Je([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Je([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Je([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Je([dt.points,dt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Je([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Je([dt.common,dt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Je([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Je([dt.sprite,dt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distance:{uniforms:Je([dt.common,dt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distance_vert,fragmentShader:Wt.distance_frag},shadow:{uniforms:Je([dt.lights,dt.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Li.physical={uniforms:Je([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Ur={r:0,b:0,g:0},y_=new ne,Md=new zt;Md.set(-1,0,0,0,1,0,0,0,1);function M_(n,t,e,i,s,r){const a=new Pt(0);let o=s===!0?0:1,c,l,u=null,d=0,h=null;function p(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){const M=S.backgroundBlurriness>0;E=t.get(E,M)}return E}function g(S){let E=!1;const M=p(S);M===null?m(a,o):M&&M.isColor&&(m(M,1),E=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(S,E){const M=p(E);M&&(M.isCubeTexture||M.mapping===Ea)?(l===void 0&&(l=new Lt(new we(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:Ss(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,y,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(y_.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Md),l.material.toneMapped=Qt.getTransfer(M.colorSpace)!==he,(u!==M||d!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Lt(new nn(2,2),new We({name:"BackgroundMaterial",uniforms:Ss(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(M.colorSpace)!==he,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,E){S.getRGB(Ur,gd(n)),e.buffers.color.setClear(Ur.r,Ur.g,Ur.b,E,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:_,dispose:f}}function S_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(L,F,z,I,V){let B=!1;const Y=d(L,I,z,F);r!==Y&&(r=Y,l(r.object)),B=p(L,I,z,V),B&&g(L,I,z,V),V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,M(L,F,z,I),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return n.createVertexArray()}function l(L){return n.bindVertexArray(L)}function u(L){return n.deleteVertexArray(L)}function d(L,F,z,I){const V=I.wireframe===!0;let B=i[F.id];B===void 0&&(B={},i[F.id]=B);const Y=L.isInstancedMesh===!0?L.id:0;let it=B[Y];it===void 0&&(it={},B[Y]=it);let q=it[z.id];q===void 0&&(q={},it[z.id]=q);let Q=q[V];return Q===void 0&&(Q=h(c()),q[V]=Q),Q}function h(L){const F=[],z=[],I=[];for(let V=0;V<e;V++)F[V]=0,z[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:I,object:L,attributes:{},index:null}}function p(L,F,z,I){const V=r.attributes,B=F.attributes;let Y=0;const it=z.getAttributes();for(const q in it)if(it[q].location>=0){const et=V[q];let Rt=B[q];if(Rt===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(Rt=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(Rt=L.instanceColor)),et===void 0||et.attribute!==Rt||Rt&&et.data!==Rt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==I}function g(L,F,z,I){const V={},B=F.attributes;let Y=0;const it=z.getAttributes();for(const q in it)if(it[q].location>=0){let et=B[q];et===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(et=L.instanceColor));const Rt={};Rt.attribute=et,et&&et.data&&(Rt.data=et.data),V[q]=Rt,Y++}r.attributes=V,r.attributesNum=Y,r.index=I}function _(){const L=r.newAttributes;for(let F=0,z=L.length;F<z;F++)L[F]=0}function m(L){f(L,0)}function f(L,F){const z=r.newAttributes,I=r.enabledAttributes,V=r.attributeDivisors;z[L]=1,I[L]===0&&(n.enableVertexAttribArray(L),I[L]=1),V[L]!==F&&(n.vertexAttribDivisor(L,F),V[L]=F)}function S(){const L=r.newAttributes,F=r.enabledAttributes;for(let z=0,I=F.length;z<I;z++)F[z]!==L[z]&&(n.disableVertexAttribArray(z),F[z]=0)}function E(L,F,z,I,V,B,Y){Y===!0?n.vertexAttribIPointer(L,F,z,V,B):n.vertexAttribPointer(L,F,z,I,V,B)}function M(L,F,z,I){_();const V=I.attributes,B=z.getAttributes(),Y=F.defaultAttributeValues;for(const it in B){const q=B[it];if(q.location>=0){let Q=V[it];if(Q===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){const et=Q.normalized,Rt=Q.itemSize,yt=t.get(Q);if(yt===void 0)continue;const se=yt.buffer,Jt=yt.type,te=yt.bytesPerElement,$=Jt===n.INT||Jt===n.UNSIGNED_INT||Q.gpuType===sl;if(Q.isInterleavedBufferAttribute){const tt=Q.data,vt=tt.stride,Ot=Q.offset;if(tt.isInstancedInterleavedBuffer){for(let gt=0;gt<q.locationSize;gt++)f(q.location+gt,tt.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let gt=0;gt<q.locationSize;gt++)m(q.location+gt);n.bindBuffer(n.ARRAY_BUFFER,se);for(let gt=0;gt<q.locationSize;gt++)E(q.location+gt,Rt/q.locationSize,Jt,et,vt*te,(Ot+Rt/q.locationSize*gt)*te,$)}else{if(Q.isInstancedBufferAttribute){for(let tt=0;tt<q.locationSize;tt++)f(q.location+tt,Q.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let tt=0;tt<q.locationSize;tt++)m(q.location+tt);n.bindBuffer(n.ARRAY_BUFFER,se);for(let tt=0;tt<q.locationSize;tt++)E(q.location+tt,Rt/q.locationSize,Jt,et,Rt*te,Rt/q.locationSize*tt*te,$)}}else if(Y!==void 0){const et=Y[it];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(q.location,et);break;case 3:n.vertexAttrib3fv(q.location,et);break;case 4:n.vertexAttrib4fv(q.location,et);break;default:n.vertexAttrib1fv(q.location,et)}}}}S()}function w(){T();for(const L in i){const F=i[L];for(const z in F){const I=F[z];for(const V in I){const B=I[V];for(const Y in B)u(B[Y].object),delete B[Y];delete I[V]}}delete i[L]}}function y(L){if(i[L.id]===void 0)return;const F=i[L.id];for(const z in F){const I=F[z];for(const V in I){const B=I[V];for(const Y in B)u(B[Y].object),delete B[Y];delete I[V]}}delete i[L.id]}function A(L){for(const F in i){const z=i[F];for(const I in z){const V=z[I];if(V[L.id]===void 0)continue;const B=V[L.id];for(const Y in B)u(B[Y].object),delete B[Y];delete V[L.id]}}}function x(L){for(const F in i){const z=i[F],I=L.isInstancedMesh===!0?L.id:0,V=z[I];if(V!==void 0){for(const B in V){const Y=V[B];for(const it in Y)u(Y[it].object),delete Y[it];delete V[B]}delete z[I],Object.keys(z).length===0&&delete i[F]}}}function T(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:y,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function b_(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),e.update(l,i,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let p=0;p<u;p++)h+=l[p];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function w_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==wi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const x=A===Hi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==ai&&A!==bi&&!x&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Ut("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),y=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:M,maxSamples:w,samples:y}}function E_(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new fn,o=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const S=r?0:i,E=S*4;let M=f.clippingState||null;c.value=M,M=u(g,h,E,p);for(let w=0;w!==E;++w)M[w]=e[w];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,M=p;E!==_;++E,M+=4)a.copy(d[E]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}const us=4,T_=6,A_=20,R_=256,Us=new La,Fh=new Pt;let po=null,mo=0,go=0,_o=!1;const C_=new P,Tn=new P;class Oh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=C_}=r;po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),go=this._renderer.getActiveMipmapLevel(),_o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(po,mo,go),this._renderer.xr.enabled=_o,t.scissorTest=!1,as(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Un||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),go=this._renderer.getActiveMipmapLevel(),_o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:Hi,format:wi,colorSpace:ca,depthBuffer:!1},s=kh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=P_(r)),this._blurMaterial=I_(r,t,e),this._ggxMaterial=L_(r,t,e)}return s}_compileMaterial(t){const e=new Lt(new ge,t);this._renderer.compile(e,Us)}_sceneToCubeUV(t,e,i,s,r){const c=new ei(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Fh),d.toneMapping=Oi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Lt(new we,new Zt({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let f=!1;const S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,f=!0):(m.color.copy(Fh),f=!0);for(let E=0;E<6;E++){const M=E%3;M===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[E],r.y,r.z)):M===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[E]));const w=this._cubeSize;as(s,M*w,E>2?w:0,w,w),d.setRenderTarget(s),f&&d.render(_,c),d.render(t,c)}d.toneMapping=p,d.autoClear=h,t.background=S}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Un||t.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;as(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,Us)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=l*1.25,p=d*h,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-us?i-g+us:0),f=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=g-e,as(r,m,f,3*_,2*_),s.setRenderTarget(r),s.render(o,Us),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,as(t,m,f,3*_,2*_),s.setRenderTarget(t),s.render(o,Us)}_blur(t,e,i,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;const l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],d=3*u*(s>this._lodMax-us?s-this._lodMax+us:0),h=4*(this._cubeSize-u);as(e,d,h,3*u,2*u),a.setRenderTarget(e),a.render(c,Us)}}function P_(n){const t=[],e=[];let i=n;const s=n-us+1+T_;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);const o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,p=3,g=new Float32Array(p*h*d),_=new Float32Array(p*h*d);for(let f=0;f<d;f++){const S=f%3*2/3-1,E=f>2?0:-1,M=[S,E,0,S+2/3,E,0,S+2/3,E+1,0,S,E,0,S+2/3,E+1,0,S,E+1,0];g.set(M,p*h*f);for(let w=0;w<h;w++){const y=u[w*2]*2-1,A=u[w*2+1]*2-1;f===0?Tn.set(1,A,y):f===1?Tn.set(-y,1,-A):f===2?Tn.set(-y,A,1):f===3?Tn.set(-1,A,-y):f===4?Tn.set(-y,-1,A):Tn.set(y,A,-1),Tn.toArray(_,(f*h+w)*p)}}const m=new ge;m.setAttribute("position",new Fe(g,p)),m.setAttribute("outputDirection",new Fe(_,p)),e.push(new Lt(m,null)),i>us&&i--}return{lodMeshes:e,sizeLods:t}}function kh(n,t,e){const i=new di(n,t,e);return i.texture.mapping=Ea,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function as(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function L_(n,t,e){return new We({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:R_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ia(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function I_(n,t,e){return new We({name:"SphericalGaussianBlur",defines:{SAMPLES:A_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ia(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Bh(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ia(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function zh(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Ia(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Sd extends di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new pd(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new we(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:Ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ii,blending:Ji});r.uniforms.tEquirect.value=e;const a=new Lt(s,r),o=e.minFilter;return e.minFilter===Cn&&(e.minFilter=Ge),new Fm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}function D_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===za||p===Ha)if(t.has(h)){const g=t.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new Sd(g.height);return _.fromEquirectangularTexture(n,h),t.set(h,_),h.addEventListener("dispose",l),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const p=h.mapping,g=p===za||p===Ha,_=p===Un||p===xs;if(g||_){let m=e.get(h);const f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new Oh(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const S=h.image;return g&&S&&S.height>0||_&&S&&c(S)?(i===null&&(i=new Oh(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===za?h.mapping=Un:p===Ha&&(h.mapping=xs),h}function c(h){let p=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&p++;return p===g}function l(h){const p=h.target;p.removeEventListener("dispose",l);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function N_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ms("WebGLRenderer: "+i+" extension not supported."),s}}}function U_(n,t,e,i){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const p=r.get(h);p&&(t.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const p in h)t.update(h[p],n.ARRAY_BUFFER)}function l(d){const h=[],p=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(p!==null){const S=p.array;_=p.version;for(let E=0,M=S.length;E<M;E+=3){const w=S[E+0],y=S[E+1],A=S[E+2];h.push(w,y,y,A,A,w)}}else{const S=g.array;_=g.version;for(let E=0,M=S.length/3-1;E<M;E+=3){const w=E+0,y=E+1,A=E+2;h.push(w,y,y,A,A,w)}}const m=new(g.count>=65535?hd:ld)(h,1);m.version=_;const f=r.get(d);f&&t.remove(f),r.set(d,m)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function F_(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,h){n.drawElements(i,h,r,d*a),e.update(h,i,1)}function l(d,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,d*a,p),e.update(h,i,p))}function u(d,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,p);let _=0;for(let m=0;m<p;m++)_+=h[m];e.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function O_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:ie("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function k_(n,t,e){const i=new WeakMap,s=new be;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let T=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let E=0;p===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let M=o.attributes.position.count*E,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const y=new Float32Array(M*w*4*d),A=new ad(y,M,w,d);A.type=bi,A.needsUpdate=!0;const x=E*4;for(let C=0;C<d;C++){const L=m[C],F=f[C],z=S[C],I=M*w*4*C;for(let V=0;V<L.count;V++){const B=V*x;p===!0&&(s.fromBufferAttribute(L,V),y[I+B+0]=s.x,y[I+B+1]=s.y,y[I+B+2]=s.z,y[I+B+3]=0),g===!0&&(s.fromBufferAttribute(F,V),y[I+B+4]=s.x,y[I+B+5]=s.y,y[I+B+6]=s.z,y[I+B+7]=0),_===!0&&(s.fromBufferAttribute(z,V),y[I+B+8]=s.x,y[I+B+9]=s.y,y[I+B+10]=s.z,y[I+B+11]=z.itemSize===4?s.w:1)}}h={count:d,texture:A,size:new Ft(M,w)},i.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];const g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function B_(n,t,e,i,s){let r=new WeakMap;function a(l){const u=s.render.frame,d=l.geometry,h=t.get(l,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const z_={[Wu]:"LINEAR_TONE_MAPPING",[Xu]:"REINHARD_TONE_MAPPING",[qu]:"CINEON_TONE_MAPPING",[Yu]:"ACES_FILMIC_TONE_MAPPING",[Zu]:"AGX_TONE_MAPPING",[Ku]:"NEUTRAL_TONE_MAPPING",[$u]:"CUSTOM_TONE_MAPPING"};function H_(n,t,e,i,s,r){const a=new di(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new ge;l.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ae([0,2,0,0,2,0],2));const u=new Lm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Lt(l,u),h=new La(-1,1,1,-1,0,1);let p=null,g=null,_=!1,m,f=null,S=[],E=!1;this.setSize=function(M,w){a.setSize(M,w),o!==null&&o.setSize(M,w),c!==null&&c.setSize(M,w);for(let y=0;y<S.length;y++){const A=S[y];A.setSize&&A.setSize(M,w)}},this.setEffects=function(M){S=M,E=S.length>0&&S[0].isRenderPass===!0;const w=a.width,y=a.height;S.length>0&&o===null&&(o=new di(w,y,{type:Hi,depthBuffer:!1,stencilBuffer:!1}),c=new di(w,y,{type:Hi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<S.length;A++){const x=S[A];x.setSize&&x.setSize(w,y)}},this.begin=function(M,w){if(_||M.toneMapping===Oi&&S.length===0)return!1;if(f=w,w!==null){const y=w.width,A=w.height;(a.width!==y||a.height!==A)&&this.setSize(y,A)}return E===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=Oi,!0},this.hasRenderPass=function(){return E},this.end=function(M,w){M.toneMapping=m,_=!0;let y=a,A=o;for(let x=0;x<S.length;x++){const T=S[x];T.enabled!==!1&&(T.render(M,A,y,w),T.needsSwap!==!1&&(y=A,A=A===o?c:o))}if(p!==M.outputColorSpace||g!==M.toneMapping){p=M.outputColorSpace,g=M.toneMapping,u.defines={},Qt.getTransfer(p)===he&&(u.defines.SRGB_TRANSFER="");const x=z_[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(f),M.render(d,h),f=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const bd=new Ve,Ic=new er(1,1),wd=new ad,Ed=new om,Td=new pd,Hh=[],Gh=[],Vh=new Float32Array(16),Wh=new Float32Array(9),Xh=new Float32Array(4);function bs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Hh[s];if(r===void 0&&(r=new Float32Array(s),Hh[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Oe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ke(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Da(n,t){let e=Gh[t];e===void 0&&(e=new Int32Array(t),Gh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function G_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function V_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2fv(this.addr,t),ke(e,t)}}function W_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;n.uniform3fv(this.addr,t),ke(e,t)}}function X_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4fv(this.addr,t),ke(e,t)}}function q_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Oe(e,i))return;Xh.set(i),n.uniformMatrix2fv(this.addr,!1,Xh),ke(e,i)}}function Y_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Oe(e,i))return;Wh.set(i),n.uniformMatrix3fv(this.addr,!1,Wh),ke(e,i)}}function $_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Oe(e,i))return;Vh.set(i),n.uniformMatrix4fv(this.addr,!1,Vh),ke(e,i)}}function Z_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function K_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2iv(this.addr,t),ke(e,t)}}function j_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3iv(this.addr,t),ke(e,t)}}function J_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4iv(this.addr,t),ke(e,t)}}function Q_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function tv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2uiv(this.addr,t),ke(e,t)}}function ev(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3uiv(this.addr,t),ke(e,t)}}function iv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4uiv(this.addr,t),ke(e,t)}}function nv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ic.compareFunction=e.isReversedDepthBuffer()?dl:ul,r=Ic):r=bd,e.setTexture2D(t||r,s)}function sv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ed,s)}function rv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Td,s)}function av(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||wd,s)}function ov(n){switch(n){case 5126:return G_;case 35664:return V_;case 35665:return W_;case 35666:return X_;case 35674:return q_;case 35675:return Y_;case 35676:return $_;case 5124:case 35670:return Z_;case 35667:case 35671:return K_;case 35668:case 35672:return j_;case 35669:case 35673:return J_;case 5125:return Q_;case 36294:return tv;case 36295:return ev;case 36296:return iv;case 35678:case 36198:case 36298:case 36306:case 35682:return nv;case 35679:case 36299:case 36307:return sv;case 35680:case 36300:case 36308:case 36293:return rv;case 36289:case 36303:case 36311:case 36292:return av}}function cv(n,t){n.uniform1fv(this.addr,t)}function lv(n,t){const e=bs(t,this.size,2);n.uniform2fv(this.addr,e)}function hv(n,t){const e=bs(t,this.size,3);n.uniform3fv(this.addr,e)}function uv(n,t){const e=bs(t,this.size,4);n.uniform4fv(this.addr,e)}function dv(n,t){const e=bs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function fv(n,t){const e=bs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function pv(n,t){const e=bs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function mv(n,t){n.uniform1iv(this.addr,t)}function gv(n,t){n.uniform2iv(this.addr,t)}function _v(n,t){n.uniform3iv(this.addr,t)}function vv(n,t){n.uniform4iv(this.addr,t)}function xv(n,t){n.uniform1uiv(this.addr,t)}function yv(n,t){n.uniform2uiv(this.addr,t)}function Mv(n,t){n.uniform3uiv(this.addr,t)}function Sv(n,t){n.uniform4uiv(this.addr,t)}function bv(n,t,e){const i=this.cache,s=t.length,r=Da(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Ic:a=bd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function wv(n,t,e){const i=this.cache,s=t.length,r=Da(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ed,r[a])}function Ev(n,t,e){const i=this.cache,s=t.length,r=Da(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Td,r[a])}function Tv(n,t,e){const i=this.cache,s=t.length,r=Da(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||wd,r[a])}function Av(n){switch(n){case 5126:return cv;case 35664:return lv;case 35665:return hv;case 35666:return uv;case 35674:return dv;case 35675:return fv;case 35676:return pv;case 5124:case 35670:return mv;case 35667:case 35671:return gv;case 35668:case 35672:return _v;case 35669:case 35673:return vv;case 5125:return xv;case 36294:return yv;case 36295:return Mv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return bv;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return Ev;case 36289:case 36303:case 36311:case 36292:return Tv}}class Rv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ov(e.type)}}class Cv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Av(e.type)}}class Pv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const vo=/(\w+)(\])?(\[|\.)?/g;function qh(n,t){n.seq.push(t),n.map[t.id]=t}function Lv(n,t,e){const i=n.name,s=i.length;for(vo.lastIndex=0;;){const r=vo.exec(i),a=vo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){qh(e,l===void 0?new Rv(o,n,t):new Cv(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new Pv(o),qh(e,d)),e=d}}}class Zr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Lv(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Yh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Iv=37297;let Dv=0;function Nv(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const $h=new zt;function Uv(n){Qt._getMatrix($h,Qt.workingColorSpace,n);const t=`mat3( ${$h.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(n)){case la:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Zh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Nv(n.getShaderSource(t),o)}else return r}function Fv(n,t){const e=Uv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Ov={[Wu]:"Linear",[Xu]:"Reinhard",[qu]:"Cineon",[Yu]:"ACESFilmic",[Zu]:"AgX",[Ku]:"Neutral",[$u]:"Custom"};function kv(n,t){const e=Ov[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Fr=new P;function Bv(){Qt.getLuminanceCoefficients(Fr);const n=Fr.x.toFixed(4),t=Fr.y.toFixed(4),e=Fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function Hv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Gv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Hs(n){return n!==""}function Kh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dc(n){return n.replace(Vv,Xv)}const Wv=new Map;function Xv(n,t){let e=Wt[t];if(e===void 0){const i=Wv.get(t);if(i!==void 0)e=Wt[i],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Dc(e)}const qv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jh(n){return n.replace(qv,Yv)}function Yv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const $v={[Wr]:"SHADOWMAP_TYPE_PCF",[Bs]:"SHADOWMAP_TYPE_VSM"};function Zv(n){return $v[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Kv={[Un]:"ENVMAP_TYPE_CUBE",[xs]:"ENVMAP_TYPE_CUBE",[Ea]:"ENVMAP_TYPE_CUBE_UV"};function jv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Kv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Jv={[xs]:"ENVMAP_MODE_REFRACTION"};function Qv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Jv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tx={[Vu]:"ENVMAP_BLENDING_MULTIPLY",[wp]:"ENVMAP_BLENDING_MIX",[Ep]:"ENVMAP_BLENDING_ADD"};function ex(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":tx[n.combine]||"ENVMAP_BLENDING_NONE"}function ix(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function nx(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Zv(e),l=jv(e),u=Qv(e),d=ex(e),h=ix(e),p=zv(e),g=Hv(r),_=s.createProgram();let m,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hs).join(`
`),f.length>0&&(f+=`
`)):(m=[Qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),f=[Qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Oi?"#define TONE_MAPPING":"",e.toneMapping!==Oi?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Oi?kv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Fv("linearToOutputTexel",e.outputColorSpace),Bv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hs).join(`
`)),a=Dc(a),a=Kh(a,e),a=jh(a,e),o=Dc(o),o=Kh(o,e),o=jh(o,e),a=Jh(a),o=Jh(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=S+m+a,M=S+f+o,w=Yh(s,s.VERTEX_SHADER,E),y=Yh(s,s.FRAGMENT_SHADER,M);s.attachShader(_,w),s.attachShader(_,y),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(L){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(_)||"",z=s.getShaderInfoLog(w)||"",I=s.getShaderInfoLog(y)||"",V=F.trim(),B=z.trim(),Y=I.trim();let it=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(it=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,w,y);else{const Q=Zh(s,w,"vertex"),et=Zh(s,y,"fragment");ie("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+Q+`
`+et)}else V!==""?Ut("WebGLProgram: Program Info Log:",V):(B===""||Y==="")&&(q=!1);q&&(L.diagnostics={runnable:it,programLog:V,vertexShader:{log:B,prefix:m},fragmentShader:{log:Y,prefix:f}})}s.deleteShader(w),s.deleteShader(y),x=new Zr(s,_),T=Gv(s,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(_,Iv)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=y,this}let sx=0;class rx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new ax(t),e.set(t,i)),i}}class ax{constructor(t){this.id=sx++,this.code=t,this.usedTimes=0}}function ox(n){return n===Fn||n===aa||n===oa}function cx(n,t,e,i,s,r){const a=new od,o=new rx,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,T,C,L,F,z){const I=L.fog,V=F.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,it=t.get(x.envMap||B,Y),q=it&&it.mapping===Ea?it.image.height:null,Q=p[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Ut("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const et=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Rt=et!==void 0?et.length:0;let yt=0;V.morphAttributes.position!==void 0&&(yt=1),V.morphAttributes.normal!==void 0&&(yt=2),V.morphAttributes.color!==void 0&&(yt=3);let se,Jt,te,$;if(Q){const pe=Li[Q];se=pe.vertexShader,Jt=pe.fragmentShader}else{se=x.vertexShader,Jt=x.fragmentShader;const pe=o.getVertexShaderStage(x),oe=o.getFragmentShaderStage(x);o.update(x,pe,oe),te=pe.id,$=oe.id}const tt=n.getRenderTarget(),vt=n.state.buffers.depth.getReversed(),Ot=F.isInstancedMesh===!0,gt=F.isBatchedMesh===!0,Gt=!!x.map,ye=!!x.matcap,qt=!!it,st=!!x.aoMap,Nt=!!x.lightMap,wt=!!x.bumpMap&&x.wireframe===!1,kt=!!x.normalMap,Me=!!x.displacementMap,Ne=!!x.emissiveMap,Yt=!!x.metalnessMap,Se=!!x.roughnessMap,U=x.anisotropy>0,Xe=x.clearcoat>0,le=x.dispersion>0,R=x.retroreflectivity>0,v=x.iridescence>0,k=x.sheen>0,W=x.transmission>0,Z=U&&!!x.anisotropyMap,rt=Xe&&!!x.clearcoatMap,at=Xe&&!!x.clearcoatNormalMap,K=Xe&&!!x.clearcoatRoughnessMap,J=v&&!!x.iridescenceMap,ot=v&&!!x.iridescenceThicknessMap,Tt=k&&!!x.sheenColorMap,ut=k&&!!x.sheenRoughnessMap,ct=!!x.specularMap,At=!!x.specularColorMap,Dt=!!x.specularIntensityMap,Ht=W&&!!x.transmissionMap,N=W&&!!x.thicknessMap,lt=!!x.gradientMap,j=!!x.alphaMap,ht=x.alphaTest>0,mt=!!x.alphaHash,nt=!!x.extensions;let Ct=Oi;x.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ct=n.toneMapping);const bt={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:se,fragmentShader:Jt,defines:x.defines,customVertexShaderID:te,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:gt,batchingColor:gt&&F._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&F.instanceColor!==null,instancingMorph:Ot&&F.morphTexture!==null,outputColorSpace:tt===null?n.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Gt,matcap:ye,envMap:qt,envMapMode:qt&&it.mapping,envMapCubeUVHeight:q,aoMap:st,lightMap:Nt,bumpMap:wt,normalMap:kt,displacementMap:Me,emissiveMap:Ne,normalMapObjectSpace:kt&&x.normalMapType===Rp,normalMapTangentSpace:kt&&x.normalMapType===Cc,packedNormalMap:kt&&x.normalMapType===Cc&&ox(x.normalMap.format),metalnessMap:Yt,roughnessMap:Se,anisotropy:U,anisotropyMap:Z,clearcoat:Xe,clearcoatMap:rt,clearcoatNormalMap:at,clearcoatRoughnessMap:K,dispersion:le,retroreflection:R,iridescence:v,iridescenceMap:J,iridescenceThicknessMap:ot,sheen:k,sheenColorMap:Tt,sheenRoughnessMap:ut,specularMap:ct,specularColorMap:At,specularIntensityMap:Dt,transmission:W,transmissionMap:Ht,thicknessMap:N,gradientMap:lt,opaque:x.transparent===!1&&x.blending===In&&x.alphaToCoverage===!1,alphaMap:j,alphaTest:ht,alphaHash:mt,combine:x.combine,mapUv:Gt&&g(x.map.channel),aoMapUv:st&&g(x.aoMap.channel),lightMapUv:Nt&&g(x.lightMap.channel),bumpMapUv:wt&&g(x.bumpMap.channel),normalMapUv:kt&&g(x.normalMap.channel),displacementMapUv:Me&&g(x.displacementMap.channel),emissiveMapUv:Ne&&g(x.emissiveMap.channel),metalnessMapUv:Yt&&g(x.metalnessMap.channel),roughnessMapUv:Se&&g(x.roughnessMap.channel),anisotropyMapUv:Z&&g(x.anisotropyMap.channel),clearcoatMapUv:rt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:at&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ut&&g(x.sheenRoughnessMap.channel),specularMapUv:ct&&g(x.specularMap.channel),specularColorMapUv:At&&g(x.specularColorMap.channel),specularIntensityMapUv:Dt&&g(x.specularIntensityMap.channel),transmissionMapUv:Ht&&g(x.transmissionMap.channel),thicknessMapUv:N&&g(x.thicknessMap.channel),alphaMapUv:j&&g(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(kt||U),vertexNormals:!!V.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(Gt||j),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||V.attributes.normal===void 0&&kt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:yt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ct,decodeVideoTexture:Gt&&x.map.isVideoTexture===!0&&Qt.getTransfer(x.map.colorSpace)===he,decodeVideoTextureEmissive:Ne&&x.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(x.emissiveMap.colorSpace)===he,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ce,flipSided:x.side===ii,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function m(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)T.push(C),T.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(f(T,x),S(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function f(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function S(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function E(x){const T=p[x.type];let C;if(T){const L=Li[T];C=Rm.clone(L.uniforms)}else C=x.uniforms;return C}function M(x,T){let C=u.get(T);return C!==void 0?++C.usedTimes:(C=new nx(n,T,x,s),l.push(C),u.set(T,C)),C}function w(x){if(--x.usedTimes===0){const T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function y(x){o.remove(x)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:E,acquireProgram:M,releaseProgram:w,releaseShaderCache:y,programs:l,dispose:A}}function lx(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function hx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function tu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function eu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,g,_,m,f){let S=n[t];return S===void 0?(S={id:h.id,object:h,geometry:p,material:g,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:f},n[t]=S):(S.id=h.id,S.object=h,S.geometry=p,S.material=g,S.materialVariant=a(h),S.groupOrder=_,S.renderOrder=h.renderOrder,S.z=m,S.group=f),t++,S}function c(h,p,g,_,m,f,S){S.reversedDepth===!0&&(m=-m);const E=o(h,p,g,_,m,f);g.transmission>0?i.push(E):g.transparent===!0?s.push(E):e.push(E)}function l(h,p,g,_,m,f){const S=o(h,p,g,_,m,f);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function u(h,p){e.length>1&&e.sort(h||hx),i.length>1&&i.sort(p||tu),s.length>1&&s.sort(p||tu)}function d(){for(let h=t,p=n.length;h<p;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function ux(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new eu,n.set(i,[a])):s>=r.length?(a=new eu,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function dx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Pt};break;case"SpotLight":e={position:new P,direction:new P,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function fx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let px=0;function mx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function gx(n){const t=new dx,e=fx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);const s=new P,r=new ne,a=new ne;function o(l){let u=0,d=0,h=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,S=0,E=0,M=0,w=0,y=0,A=0,x=0,T=0,C=0;l.sort(mx);for(let F=0,z=l.length;F<z;F++){const I=l[F],V=I.color,B=I.intensity,Y=I.distance;let it=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Fn?it=I.shadow.map.texture:it=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=V.r*B,d+=V.g*B,h+=V.b*B;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],B);C++}else if(I.isSunLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Q=I.shadow,et=e.get(I);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[g]=et,i.sunShadowMap[g]=it;const Rt=Q.getViewportCount();for(let yt=0;yt<Rt;yt++)i.sunShadowMatrix[_+yt]=Q.getMatrix(yt),i.sunShadowCascade[_+yt]=Q._cascadeData[yt];_+=Rt,g++}i.sun[p]=q,p++}else if(I.isDirectionalLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Q=I.shadow,et=e.get(I);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,i.directionalShadow[m]=et,i.directionalShadowMap[m]=it,i.directionalShadowMatrix[m]=I.shadow.matrix,w++}i.directional[m]=q,m++}else if(I.isSpotLight){const q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(V).multiplyScalar(B),q.distance=Y,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[S]=q;const Q=I.shadow;if(I.map&&(i.spotLightMap[x]=I.map,x++,Q.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[S]=Q.matrix,I.castShadow){const et=e.get(I);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,i.spotShadow[S]=et,i.spotShadowMap[S]=it,A++}S++}else if(I.isRectAreaLight){const q=t.get(I);q.color.copy(V).multiplyScalar(B),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[E]=q,E++}else if(I.isPointLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){const Q=I.shadow,et=e.get(I);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,et.shadowCameraNear=Q.camera.near,et.shadowCameraFar=Q.camera.far,i.pointShadow[f]=et,i.pointShadowMap[f]=it,i.pointShadowMatrix[f]=I.shadow.matrix,y++}i.point[f]=q,f++}else if(I.isHemisphereLight){const q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(B),q.groundColor.copy(I.groundColor).multiplyScalar(B),i.hemi[M]=q,M++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const L=i.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==f||L.spotLength!==S||L.rectAreaLength!==E||L.hemiLength!==M||L.numSunShadows!==g||L.numDirectionalShadows!==w||L.numPointShadows!==y||L.numSpotShadows!==A||L.numSpotMaps!==x||L.numLightProbes!==C)&&(i.sun.length=p,i.directional.length=m,i.spot.length=S,i.rectArea.length=E,i.point.length=f,i.hemi.length=M,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=y,i.pointShadowMap.length=y,i.pointShadowMatrix.length=y,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+x-T,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,L.sunLength=p,L.directionalLength=m,L.pointLength=f,L.spotLength=S,L.rectAreaLength=E,L.hemiLength=M,L.numSunShadows=g,L.numDirectionalShadows=w,L.numPointShadows=y,L.numSpotShadows=A,L.numSpotMaps=x,L.numLightProbes=C,i.version=px++)}function c(l,u){let d=0,h=0,p=0,g=0,_=0,m=0;const f=u.matrixWorldInverse;for(let S=0,E=l.length;S<E;S++){const M=l[S];if(M.isSunLight){const w=i.sun[d];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(f),d++}else if(M.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),h++}else if(M.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),g++}else if(M.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),a.identity(),r.copy(M.matrixWorld),r.premultiply(f),a.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const w=i.point[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){const w=i.hemi[m];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(f),m++}}}return{setup:o,setupView:c,state:i}}function iu(n){const t=new gx(n),e=[],i=[],s=[];function r(h){d.camera=h,e.length=0,i.length=0,s.length=0}function a(h){e.push(h)}function o(h){i.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function _x(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new iu(n),t.set(s,[o])):r>=a.length?(o=new iu(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xx=`uniform sampler2D shadow_pass;
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
}`,yx=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Mx=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],nu=new ne,Fs=new P,xo=new P;function Sx(n,t,e){let i=new vl;const s=new Ft,r=new Ft,a=new be,o=new Im,c=new Dm,l={},u=e.maxTextureSize,d={[Nn]:ii,[ii]:Nn,[Ce]:Ce},h=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:vx,fragmentShader:xx}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new ge;g.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Lt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wr;let f=this.type;this.render=function(y,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;this.type===rp&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wr);const T=n.getRenderTarget(),C=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Ji),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=f!==this.type;z&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(V=>V.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,V=y.length;I<V;I++){const B=y[I],Y=B.shadow;if(Y===void 0){Ut("WebGLShadowMap:",B,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const it=Y.getFrameExtents();s.multiply(it),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/it.x),s.x=r.x*it.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/it.y),s.y=r.y*it.y,Y.mapSize.y=r.y));const q=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=q,Y.map===null||z===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Bs){if(B.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new di(s.x,s.y,{format:Fn,type:Hi,minFilter:Ge,magFilter:Ge,generateMipmaps:!1}),Y.map.texture.name=B.name+".shadowMap",Y.map.depthTexture=new er(s.x,s.y,bi),Y.map.depthTexture.name=B.name+".shadowMapDepth",Y.map.depthTexture.format=en,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=He,Y.map.depthTexture.magFilter=He}else B.isPointLight?(Y.map=new Sd(s.x),Y.map.depthTexture=new Tm(s.x,zi)):(Y.map=new di(s.x,s.y),Y.map.depthTexture=new er(s.x,s.y,zi)),Y.map.depthTexture.name=B.name+".shadowMap",Y.map.depthTexture.format=en,this.type===Wr?(Y.map.depthTexture.compareFunction=q?dl:ul,Y.map.depthTexture.minFilter=Ge,Y.map.depthTexture.magFilter=Ge):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=He,Y.map.depthTexture.magFilter=He);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);const Q=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();B.isPointLight!==!0&&Y.updateMatrices(B,x);for(let et=0;et<Q;et++){const Rt=Y.getCamera(et);if(B.isPointLight){const yt=Y.camera,se=Y.matrix,Jt=B.distance||yt.far;Jt!==yt.far&&(yt.far=Jt,yt.updateProjectionMatrix()),Fs.setFromMatrixPosition(B.matrixWorld),yt.position.copy(Fs),xo.copy(yt.position),xo.add(yx[et]),yt.up.copy(Mx[et]),yt.lookAt(xo),yt.updateMatrixWorld(),se.makeTranslation(-Fs.x,-Fs.y,-Fs.z),nu.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(nu,yt.coordinateSystem,yt.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,et),n.clear();else{et===0&&(n.setRenderTarget(Y.map),n.clear());const yt=Y.getViewport(et);a.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),F.viewport(a)}i=Y.getFrustum(et),M(A,x,Rt,B,this.type)}Y.isPointLightShadow!==!0&&this.type===Bs&&S(Y,x),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(T,C,L)};function S(y,A){const x=t.update(_);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null?y.mapPass=new di(s.x,s.y,{format:Fn,type:Hi}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),h.uniforms.shadow_pass.value=y.map.depthTexture,h.uniforms.resolution.value.set(y.map.width,y.map.height),h.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(A,null,x,h,_,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value.set(y.map.width,y.map.height),p.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(A,null,x,p,_,null)}function E(y,A,x,T){let C=null;const L=x.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(L!==void 0)C=L;else if(C=x.isPointLight===!0?c:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const F=C.uuid,z=A.uuid;let I=l[F];I===void 0&&(I={},l[F]=I);let V=I[z];V===void 0&&(V=C.clone(),I[z]=V,A.addEventListener("dispose",w)),C=V}if(C.visible=A.visible,C.wireframe=A.wireframe,T===Bs?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:d[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const F=n.properties.get(C);F.light=x}return C}function M(y,A,x,T,C){if(y.visible===!1)return;if(y.layers.test(A.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&C===Bs)&&(!y.frustumCulled||y.intersectsFrustum(i))){y.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,y.matrixWorld);const z=t.update(y),I=y.material;if(Array.isArray(I)){const V=z.groups;for(let B=0,Y=V.length;B<Y;B++){const it=V[B],q=I[it.materialIndex];if(q&&q.visible){const Q=E(y,q,T,C);y.onBeforeShadow(n,y,A,x,z,Q,it),n.renderBufferDirect(x,null,z,Q,y,it),y.onAfterShadow(n,y,A,x,z,Q,it)}}}else if(I.visible){const V=E(y,I,T,C);y.onBeforeShadow(n,y,A,x,z,V,null),n.renderBufferDirect(x,null,z,V,y,null),y.onAfterShadow(n,y,A,x,z,V,null)}}const F=y.children;for(let z=0,I=F.length;z<I;z++)M(F[z],A,x,T,C)}function w(y){y.target.removeEventListener("dispose",w);for(const x in l){const T=l[x],C=y.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function bx(n,t){function e(){let N=!1;const lt=new be;let j=null;const ht=new be(0,0,0,0);return{setMask:function(mt){j!==mt&&!N&&(n.colorMask(mt,mt,mt,mt),j=mt)},setLocked:function(mt){N=mt},setClear:function(mt,nt,Ct,bt,pe){pe===!0&&(mt*=bt,nt*=bt,Ct*=bt),lt.set(mt,nt,Ct,bt),ht.equals(lt)===!1&&(n.clearColor(mt,nt,Ct,bt),ht.copy(lt))},reset:function(){N=!1,j=null,ht.set(-1,0,0,0)}}}function i(){let N=!1,lt=!1,j=null,ht=null,mt=null;return{setReversed:function(nt){if(lt!==nt){const Ct=t.get("EXT_clip_control");nt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),lt=nt;const bt=mt;mt=null,this.setClear(bt)}},getReversed:function(){return lt},setTest:function(nt){nt?tt(n.DEPTH_TEST):vt(n.DEPTH_TEST)},setMask:function(nt){j!==nt&&!N&&(n.depthMask(nt),j=nt)},setFunc:function(nt){if(lt&&(nt=Bp[nt]),ht!==nt){switch(nt){case Wo:n.depthFunc(n.NEVER);break;case Xo:n.depthFunc(n.ALWAYS);break;case qo:n.depthFunc(n.LESS);break;case Zs:n.depthFunc(n.LEQUAL);break;case Yo:n.depthFunc(n.EQUAL);break;case $o:n.depthFunc(n.GEQUAL);break;case Zo:n.depthFunc(n.GREATER);break;case Ko:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ht=nt}},setLocked:function(nt){N=nt},setClear:function(nt){mt!==nt&&(mt=nt,lt&&(nt=1-nt),n.clearDepth(nt))},reset:function(){N=!1,j=null,ht=null,mt=null,lt=!1}}}function s(){let N=!1,lt=null,j=null,ht=null,mt=null,nt=null,Ct=null,bt=null,pe=null;return{setTest:function(oe){N||(oe?tt(n.STENCIL_TEST):vt(n.STENCIL_TEST))},setMask:function(oe){lt!==oe&&!N&&(n.stencilMask(oe),lt=oe)},setFunc:function(oe,pi,Ei){(j!==oe||ht!==pi||mt!==Ei)&&(n.stencilFunc(oe,pi,Ei),j=oe,ht=pi,mt=Ei)},setOp:function(oe,pi,Ei){(nt!==oe||Ct!==pi||bt!==Ei)&&(n.stencilOp(oe,pi,Ei),nt=oe,Ct=pi,bt=Ei)},setLocked:function(oe){N=oe},setClear:function(oe){pe!==oe&&(n.clearStencil(oe),pe=oe)},reset:function(){N=!1,lt=null,j=null,ht=null,mt=null,nt=null,Ct=null,bt=null,pe=null}}}const r=new e,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h={},p=new WeakMap,g=[],_=null,m=!1,f=null,S=null,E=null,M=null,w=null,y=null,A=null,x=new Pt(0,0,0),T=0,C=!1,L=null,F=null,z=null,I=null,V=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,it=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=it>=1):q.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=it>=2);let Q=null,et={};const Rt=n.getParameter(n.SCISSOR_BOX),yt=n.getParameter(n.VIEWPORT),se=new be().fromArray(Rt),Jt=new be().fromArray(yt);function te(N,lt,j,ht){const mt=new Uint8Array(4),nt=n.createTexture();n.bindTexture(N,nt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ct=0;Ct<j;Ct++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(lt,0,n.RGBA,1,1,ht,0,n.RGBA,n.UNSIGNED_BYTE,mt):n.texImage2D(lt+Ct,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,mt);return nt}const $={};$[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(n.DEPTH_TEST),a.setFunc(Zs),wt(!1),kt(Jl),tt(n.CULL_FACE),st(Ji);function tt(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function vt(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Ot(N,lt){return h[N]!==lt?(n.bindFramebuffer(N,lt),h[N]=lt,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=lt),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=lt),!0):!1}function gt(N,lt){let j=g,ht=!1;if(N){j=p.get(lt),j===void 0&&(j=[],p.set(lt,j));const mt=N.textures;if(j.length!==mt.length||j[0]!==n.COLOR_ATTACHMENT0){for(let nt=0,Ct=mt.length;nt<Ct;nt++)j[nt]=n.COLOR_ATTACHMENT0+nt;j.length=mt.length,ht=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,ht=!0);ht&&n.drawBuffers(j)}function Gt(N){return _!==N?(n.useProgram(N),_=N,!0):!1}const ye={[hs]:n.FUNC_ADD,[op]:n.FUNC_SUBTRACT,[cp]:n.FUNC_REVERSE_SUBTRACT};ye[lp]=n.MIN,ye[hp]=n.MAX;const qt={[up]:n.ZERO,[dp]:n.ONE,[fp]:n.SRC_COLOR,[Hu]:n.SRC_ALPHA,[xp]:n.SRC_ALPHA_SATURATE,[_p]:n.DST_COLOR,[mp]:n.DST_ALPHA,[pp]:n.ONE_MINUS_SRC_COLOR,[Gu]:n.ONE_MINUS_SRC_ALPHA,[vp]:n.ONE_MINUS_DST_COLOR,[gp]:n.ONE_MINUS_DST_ALPHA,[yp]:n.CONSTANT_COLOR,[Mp]:n.ONE_MINUS_CONSTANT_COLOR,[Sp]:n.CONSTANT_ALPHA,[bp]:n.ONE_MINUS_CONSTANT_ALPHA};function st(N,lt,j,ht,mt,nt,Ct,bt,pe,oe){if(N===Ji){m===!0&&(vt(n.BLEND),m=!1);return}if(m===!1&&(tt(n.BLEND),m=!0),N!==ap){if(N!==f||oe!==C){if((S!==hs||w!==hs)&&(n.blendEquation(n.FUNC_ADD),S=hs,w=hs),oe)switch(N){case In:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ui:n.blendFunc(n.ONE,n.ONE);break;case Ql:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case th:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ie("WebGLState: Invalid blending: ",N);break}else switch(N){case In:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ui:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ql:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case th:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",N);break}E=null,M=null,y=null,A=null,x.set(0,0,0),T=0,f=N,C=oe}return}mt=mt||lt,nt=nt||j,Ct=Ct||ht,(lt!==S||mt!==w)&&(n.blendEquationSeparate(ye[lt],ye[mt]),S=lt,w=mt),(j!==E||ht!==M||nt!==y||Ct!==A)&&(n.blendFuncSeparate(qt[j],qt[ht],qt[nt],qt[Ct]),E=j,M=ht,y=nt,A=Ct),(bt.equals(x)===!1||pe!==T)&&(n.blendColor(bt.r,bt.g,bt.b,pe),x.copy(bt),T=pe),f=N,C=!1}function Nt(N,lt){N.side===Ce?vt(n.CULL_FACE):tt(n.CULL_FACE);let j=N.side===ii;lt&&(j=!j),wt(j),N.blending===In&&N.transparent===!1?st(Ji):st(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const ht=N.stencilWrite;o.setTest(ht),ht&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ne(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?tt(n.SAMPLE_ALPHA_TO_COVERAGE):vt(n.SAMPLE_ALPHA_TO_COVERAGE)}function wt(N){L!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),L=N)}function kt(N){N!==np?(tt(n.CULL_FACE),N!==F&&(N===Jl?n.cullFace(n.BACK):N===sp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):vt(n.CULL_FACE),F=N}function Me(N){N!==z&&(Y&&n.lineWidth(N),z=N)}function Ne(N,lt,j){N?(tt(n.POLYGON_OFFSET_FILL),(I!==lt||V!==j)&&(I=lt,V=j,a.getReversed()&&(lt=-lt),n.polygonOffset(lt,j))):vt(n.POLYGON_OFFSET_FILL)}function Yt(N){N?tt(n.SCISSOR_TEST):vt(n.SCISSOR_TEST)}function Se(N){N===void 0&&(N=n.TEXTURE0+B-1),Q!==N&&(n.activeTexture(N),Q=N)}function U(N,lt,j){j===void 0&&(Q===null?j=n.TEXTURE0+B-1:j=Q);let ht=et[j];ht===void 0&&(ht={type:void 0,texture:void 0},et[j]=ht),(ht.type!==N||ht.texture!==lt)&&(Q!==j&&(n.activeTexture(j),Q=j),n.bindTexture(N,lt||$[N]),ht.type=N,ht.texture=lt)}function Xe(){const N=et[Q];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function le(){try{n.compressedTexImage2D(...arguments)}catch(N){ie("WebGLState:",N)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(N){ie("WebGLState:",N)}}function v(){try{n.texSubImage2D(...arguments)}catch(N){ie("WebGLState:",N)}}function k(){try{n.texSubImage3D(...arguments)}catch(N){ie("WebGLState:",N)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(N){ie("WebGLState:",N)}}function Z(){try{n.compressedTexSubImage3D(...arguments)}catch(N){ie("WebGLState:",N)}}function rt(){try{n.texStorage2D(...arguments)}catch(N){ie("WebGLState:",N)}}function at(){try{n.texStorage3D(...arguments)}catch(N){ie("WebGLState:",N)}}function K(){try{n.texImage2D(...arguments)}catch(N){ie("WebGLState:",N)}}function J(){try{n.texImage3D(...arguments)}catch(N){ie("WebGLState:",N)}}function ot(N){return d[N]!==void 0?d[N]:n.getParameter(N)}function Tt(N,lt){d[N]!==lt&&(n.pixelStorei(N,lt),d[N]=lt)}function ut(N){se.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),se.copy(N))}function ct(N){Jt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Jt.copy(N))}function At(N,lt){let j=l.get(lt);j===void 0&&(j=new WeakMap,l.set(lt,j));let ht=j.get(N);ht===void 0&&(ht=n.getUniformBlockIndex(lt,N.name),j.set(N,ht))}function Dt(N,lt){const ht=l.get(lt).get(N);c.get(lt)!==ht&&(n.uniformBlockBinding(lt,ht,N.__bindingPointIndex),c.set(lt,ht))}function Ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},Q=null,et={},h={},p=new WeakMap,g=[],_=null,m=!1,f=null,S=null,E=null,M=null,w=null,y=null,A=null,x=new Pt(0,0,0),T=0,C=!1,L=null,F=null,z=null,I=null,V=null,se.set(0,0,n.canvas.width,n.canvas.height),Jt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:vt,bindFramebuffer:Ot,drawBuffers:gt,useProgram:Gt,setBlending:st,setMaterial:Nt,setFlipSided:wt,setCullFace:kt,setLineWidth:Me,setPolygonOffset:Ne,setScissorTest:Yt,activeTexture:Se,bindTexture:U,unbindTexture:Xe,compressedTexImage2D:le,compressedTexImage3D:R,texImage2D:K,texImage3D:J,pixelStorei:Tt,getParameter:ot,updateUBOMapping:At,uniformBlockBinding:Dt,texStorage2D:rt,texStorage3D:at,texSubImage2D:v,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:Z,scissor:ut,viewport:ct,reset:Ht}}function wx(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ft,u=new WeakMap,d=new Set;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,v){return g?new OffscreenCanvas(R,v):ha("canvas")}function m(R,v,k){let W=1;const Z=le(R);if((Z.width>k||Z.height>k)&&(W=k/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const rt=Math.floor(W*Z.width),at=Math.floor(W*Z.height);h===void 0&&(h=_(rt,at));const K=v?_(rt,at):h;return K.width=rt,K.height=at,K.getContext("2d").drawImage(R,0,0,rt,at),Ut("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+rt+"x"+at+")."),K}else return"data"in R&&Ut("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function f(R){return R.generateMipmaps}function S(R){n.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(R,v,k,W,Z,rt=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let at;W&&(at=t.get("EXT_texture_norm16"),at||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=v;if(v===n.RED&&(k===n.FLOAT&&(K=n.R32F),k===n.HALF_FLOAT&&(K=n.R16F),k===n.UNSIGNED_BYTE&&(K=n.R8),k===n.UNSIGNED_SHORT&&at&&(K=at.R16_EXT),k===n.SHORT&&at&&(K=at.R16_SNORM_EXT)),v===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.R8UI),k===n.UNSIGNED_SHORT&&(K=n.R16UI),k===n.UNSIGNED_INT&&(K=n.R32UI),k===n.BYTE&&(K=n.R8I),k===n.SHORT&&(K=n.R16I),k===n.INT&&(K=n.R32I)),v===n.RG&&(k===n.FLOAT&&(K=n.RG32F),k===n.HALF_FLOAT&&(K=n.RG16F),k===n.UNSIGNED_BYTE&&(K=n.RG8),k===n.UNSIGNED_SHORT&&at&&(K=at.RG16_EXT),k===n.SHORT&&at&&(K=at.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RG8UI),k===n.UNSIGNED_SHORT&&(K=n.RG16UI),k===n.UNSIGNED_INT&&(K=n.RG32UI),k===n.BYTE&&(K=n.RG8I),k===n.SHORT&&(K=n.RG16I),k===n.INT&&(K=n.RG32I)),v===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGB8UI),k===n.UNSIGNED_SHORT&&(K=n.RGB16UI),k===n.UNSIGNED_INT&&(K=n.RGB32UI),k===n.BYTE&&(K=n.RGB8I),k===n.SHORT&&(K=n.RGB16I),k===n.INT&&(K=n.RGB32I)),v===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),k===n.UNSIGNED_INT&&(K=n.RGBA32UI),k===n.BYTE&&(K=n.RGBA8I),k===n.SHORT&&(K=n.RGBA16I),k===n.INT&&(K=n.RGBA32I)),v===n.RGB&&(k===n.UNSIGNED_SHORT&&at&&(K=at.RGB16_EXT),k===n.SHORT&&at&&(K=at.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),v===n.RGBA){const J=rt?la:Qt.getTransfer(Z);k===n.FLOAT&&(K=n.RGBA32F),k===n.HALF_FLOAT&&(K=n.RGBA16F),k===n.UNSIGNED_BYTE&&(K=J===he?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&at&&(K=at.RGBA16_EXT),k===n.SHORT&&at&&(K=at.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function w(R,v){let k;return R?v===null||v===zi||v===js?k=n.DEPTH24_STENCIL8:v===bi?k=n.DEPTH32F_STENCIL8:v===Ks&&(k=n.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===zi||v===js?k=n.DEPTH_COMPONENT24:v===bi?k=n.DEPTH_COMPONENT32F:v===Ks&&(k=n.DEPTH_COMPONENT16),k}function y(R,v){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==He&&R.minFilter!==Ge?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function A(R){const v=R.target;v.removeEventListener("dispose",A),T(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function x(R){const v=R.target;v.removeEventListener("dispose",x),L(v)}function T(R){const v=i.get(R);if(v.__webglInit===void 0)return;const k=R.source,W=p.get(k);if(W){const Z=W[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(R),Object.keys(W).length===0&&p.delete(k)}i.remove(R)}function C(R){const v=i.get(R);n.deleteTexture(v.__webglTexture);const k=R.source,W=p.get(k);delete W[v.__cacheKey],a.memory.textures--}function L(R){const v=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let Z=0;Z<v.__webglFramebuffer[W].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[W][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)n.deleteFramebuffer(v.__webglFramebuffer[W]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=R.textures;for(let W=0,Z=k.length;W<Z;W++){const rt=i.get(k[W]);rt.__webglTexture&&(n.deleteTexture(rt.__webglTexture),a.memory.textures--),i.remove(k[W])}i.remove(R)}let F=0;function z(){F=0}function I(){return F}function V(R){F=R}function B(){const R=F;return R>=s.maxTextures&&Ut("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,R}function Y(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function it(R,v){const k=i.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const W=R.image;if(W===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(k,R,v);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+v)}function q(R,v){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){vt(k,R,v);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+v)}function Q(R,v){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){vt(k,R,v);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+v)}function et(R,v){const k=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){Ot(k,R,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+v)}const Rt={[jo]:n.REPEAT,[Ki]:n.CLAMP_TO_EDGE,[Jo]:n.MIRRORED_REPEAT},yt={[He]:n.NEAREST,[Tp]:n.NEAREST_MIPMAP_NEAREST,[or]:n.NEAREST_MIPMAP_LINEAR,[Ge]:n.LINEAR,[Ga]:n.LINEAR_MIPMAP_NEAREST,[Cn]:n.LINEAR_MIPMAP_LINEAR},se={[Pp]:n.NEVER,[Up]:n.ALWAYS,[Lp]:n.LESS,[ul]:n.LEQUAL,[Ip]:n.EQUAL,[dl]:n.GEQUAL,[Dp]:n.GREATER,[Np]:n.NOTEQUAL};function Jt(R,v){if(v.type===bi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ge||v.magFilter===Ga||v.magFilter===or||v.magFilter===Cn||v.minFilter===Ge||v.minFilter===Ga||v.minFilter===or||v.minFilter===Cn)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Rt[v.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Rt[v.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Rt[v.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,yt[v.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,yt[v.minFilter]),v.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,se[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===He||v.minFilter!==or&&v.minFilter!==Cn||v.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function te(R,v){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",A));const W=v.source;let Z=p.get(W);Z===void 0&&(Z={},p.set(W,Z));const rt=Y(v);if(rt!==R.__cacheKey){Z[rt]===void 0&&(Z[rt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Z[rt].usedTimes++;const at=Z[R.__cacheKey];at!==void 0&&(Z[R.__cacheKey].usedTimes--,at.usedTimes===0&&C(v)),R.__cacheKey=rt,R.__webglTexture=Z[rt].texture}return k}function $(R,v,k){return Math.floor(Math.floor(R/k)/v)}function tt(R,v,k,W){const rt=R.updateRanges;if(rt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,k,W,v.data);else{rt.sort((Tt,ut)=>Tt.start-ut.start);let at=0;for(let Tt=1;Tt<rt.length;Tt++){const ut=rt[at],ct=rt[Tt],At=ut.start+ut.count,Dt=$(ct.start,v.width,4),Ht=$(ut.start,v.width,4);ct.start<=At+1&&Dt===Ht&&$(ct.start+ct.count-1,v.width,4)===Dt?ut.count=Math.max(ut.count,ct.start+ct.count-ut.start):(++at,rt[at]=ct)}rt.length=at+1;const K=e.getParameter(n.UNPACK_ROW_LENGTH),J=e.getParameter(n.UNPACK_SKIP_PIXELS),ot=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Tt=0,ut=rt.length;Tt<ut;Tt++){const ct=rt[Tt],At=Math.floor(ct.start/4),Dt=Math.ceil(ct.count/4),Ht=At%v.width,N=Math.floor(At/v.width),lt=Dt,j=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Ht),e.pixelStorei(n.UNPACK_SKIP_ROWS,N),e.texSubImage2D(n.TEXTURE_2D,0,Ht,N,lt,j,k,W,v.data)}R.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,K),e.pixelStorei(n.UNPACK_SKIP_PIXELS,J),e.pixelStorei(n.UNPACK_SKIP_ROWS,ot)}}function vt(R,v,k){let W=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=n.TEXTURE_3D);const Z=te(R,v),rt=v.source;e.bindTexture(W,R.__webglTexture,n.TEXTURE0+k);const at=i.get(rt);if(rt.version!==at.__version||Z===!0){if(e.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const j=Qt.getPrimaries(Qt.workingColorSpace),ht=v.colorSpace===mn?null:Qt.getPrimaries(v.colorSpace),mt=v.colorSpace===mn||j===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let J=m(v.image,!1,s.maxTextureSize);J=Xe(v,J);const ot=r.convert(v.format,v.colorSpace),Tt=r.convert(v.type);let ut=M(v.internalFormat,ot,Tt,v.normalized,v.colorSpace,v.isVideoTexture);Jt(W,v);let ct;const At=v.mipmaps,Dt=v.isVideoTexture!==!0,Ht=at.__version===void 0||Z===!0,N=rt.dataReady,lt=y(v,J);if(v.isDepthTexture)ut=w(v.format===Pn,v.type),Ht&&(Dt?e.texStorage2D(n.TEXTURE_2D,1,ut,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,ut,J.width,J.height,0,ot,Tt,null));else if(v.isDataTexture)if(At.length>0){Dt&&Ht&&e.texStorage2D(n.TEXTURE_2D,lt,ut,At[0].width,At[0].height);for(let j=0,ht=At.length;j<ht;j++)ct=At[j],Dt?N&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,ct.width,ct.height,ot,Tt,ct.data):e.texImage2D(n.TEXTURE_2D,j,ut,ct.width,ct.height,0,ot,Tt,ct.data);v.generateMipmaps=!1}else Dt?(Ht&&e.texStorage2D(n.TEXTURE_2D,lt,ut,J.width,J.height),N&&tt(v,J,ot,Tt)):e.texImage2D(n.TEXTURE_2D,0,ut,J.width,J.height,0,ot,Tt,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Dt&&Ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,ut,At[0].width,At[0].height,J.depth);for(let j=0,ht=At.length;j<ht;j++)if(ct=At[j],v.format!==wi)if(ot!==null)if(Dt){if(N)if(v.layerUpdates.size>0){const mt=Uh(ct.width,ct.height,v.format,v.type);for(const nt of v.layerUpdates){const Ct=ct.data.subarray(nt*mt/ct.data.BYTES_PER_ELEMENT,(nt+1)*mt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,nt,ct.width,ct.height,1,ot,Ct)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ct.width,ct.height,J.depth,ot,ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,ut,ct.width,ct.height,J.depth,0,ct.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ct.width,ct.height,J.depth,ot,Tt,ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,j,ut,ct.width,ct.height,J.depth,0,ot,Tt,ct.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Dt&&Ht&&e.texStorage2D(n.TEXTURE_2D,lt,ut,At[0].width,At[0].height);for(let j=0,ht=At.length;j<ht;j++)ct=At[j],v.format!==wi?ot!==null?Dt?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,ct.width,ct.height,ot,ct.data):e.compressedTexImage2D(n.TEXTURE_2D,j,ut,ct.width,ct.height,0,ct.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?N&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,ct.width,ct.height,ot,Tt,ct.data):e.texImage2D(n.TEXTURE_2D,j,ut,ct.width,ct.height,0,ot,Tt,ct.data)}else if(v.isDataArrayTexture)if(Dt){if(Ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,ut,J.width,J.height,J.depth),N)if(v.layerUpdates.size>0){const j=Uh(J.width,J.height,v.format,v.type);for(const ht of v.layerUpdates){const mt=J.data.subarray(ht*j/J.data.BYTES_PER_ELEMENT,(ht+1)*j/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ht,J.width,J.height,1,ot,Tt,mt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ot,Tt,J.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ut,J.width,J.height,J.depth,0,ot,Tt,J.data);else if(v.isData3DTexture)Dt?(Ht&&e.texStorage3D(n.TEXTURE_3D,lt,ut,J.width,J.height,J.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ot,Tt,J.data)):e.texImage3D(n.TEXTURE_3D,0,ut,J.width,J.height,J.depth,0,ot,Tt,J.data);else if(v.isFramebufferTexture){if(Ht)if(Dt)e.texStorage2D(n.TEXTURE_2D,lt,ut,J.width,J.height);else{let j=J.width,ht=J.height;for(let mt=0;mt<lt;mt++)e.texImage2D(n.TEXTURE_2D,mt,ut,j,ht,0,ot,Tt,null),j>>=1,ht>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){const j=n.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),J.parentNode!==j){j.appendChild(J),d.add(v),j.onpaint=ht=>{const mt=ht.changedElements;for(const nt of d)mt.includes(nt.image)&&(nt.needsUpdate=!0)},j.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,J);else{const mt=n.RGBA,nt=n.RGBA,Ct=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,mt,nt,Ct,J)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(At.length>0){if(Dt&&Ht){const j=le(At[0]);e.texStorage2D(n.TEXTURE_2D,lt,ut,j.width,j.height)}for(let j=0,ht=At.length;j<ht;j++)ct=At[j],Dt?N&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,ot,Tt,ct):e.texImage2D(n.TEXTURE_2D,j,ut,ot,Tt,ct);v.generateMipmaps=!1}else if(Dt){if(Ht){const j=le(J);e.texStorage2D(n.TEXTURE_2D,lt,ut,j.width,j.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot,Tt,J)}else e.texImage2D(n.TEXTURE_2D,0,ut,ot,Tt,J);f(v)&&S(W),at.__version=rt.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Ot(R,v,k){if(v.image.length!==6)return;const W=te(R,v),Z=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+k);const rt=i.get(Z);if(Z.version!==rt.__version||W===!0){e.activeTexture(n.TEXTURE0+k);const at=Qt.getPrimaries(Qt.workingColorSpace),K=v.colorSpace===mn?null:Qt.getPrimaries(v.colorSpace),J=v.colorSpace===mn||at===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ot=v.isCompressedTexture||v.image[0].isCompressedTexture,Tt=v.image[0]&&v.image[0].isDataTexture,ut=[];for(let nt=0;nt<6;nt++)!ot&&!Tt?ut[nt]=m(v.image[nt],!0,s.maxCubemapSize):ut[nt]=Tt?v.image[nt].image:v.image[nt],ut[nt]=Xe(v,ut[nt]);const ct=ut[0],At=r.convert(v.format,v.colorSpace),Dt=r.convert(v.type),Ht=M(v.internalFormat,At,Dt,v.normalized,v.colorSpace),N=v.isVideoTexture!==!0,lt=rt.__version===void 0||W===!0,j=Z.dataReady;let ht=y(v,ct);Jt(n.TEXTURE_CUBE_MAP,v);let mt;if(ot){N&&lt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ht,Ht,ct.width,ct.height);for(let nt=0;nt<6;nt++){mt=ut[nt].mipmaps;for(let Ct=0;Ct<mt.length;Ct++){const bt=mt[Ct];v.format!==wi?At!==null?N?j&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct,0,0,bt.width,bt.height,At,bt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct,Ht,bt.width,bt.height,0,bt.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct,0,0,bt.width,bt.height,At,Dt,bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct,Ht,bt.width,bt.height,0,At,Dt,bt.data)}}}else{if(mt=v.mipmaps,N&&lt){mt.length>0&&ht++;const nt=le(ut[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ht,Ht,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(Tt){N?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ut[nt].width,ut[nt].height,At,Dt,ut[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ht,ut[nt].width,ut[nt].height,0,At,Dt,ut[nt].data);for(let Ct=0;Ct<mt.length;Ct++){const pe=mt[Ct].image[nt].image;N?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct+1,0,0,pe.width,pe.height,At,Dt,pe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct+1,Ht,pe.width,pe.height,0,At,Dt,pe.data)}}else{N?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,At,Dt,ut[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ht,At,Dt,ut[nt]);for(let Ct=0;Ct<mt.length;Ct++){const bt=mt[Ct];N?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct+1,0,0,At,Dt,bt.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct+1,Ht,At,Dt,bt.image[nt])}}}f(v)&&S(n.TEXTURE_CUBE_MAP),rt.__version=Z.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function gt(R,v,k,W,Z,rt){const at=r.convert(k.format,k.colorSpace),K=r.convert(k.type),J=M(k.internalFormat,at,K,k.normalized,k.colorSpace),ot=i.get(v),Tt=i.get(k);if(Tt.__renderTarget=v,!ot.__hasExternalTextures){const ut=Math.max(1,v.width>>rt),ct=Math.max(1,v.height>>rt);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,rt,J,ut,ct,v.depth,0,at,K,null):e.texImage2D(Z,rt,J,ut,ct,0,at,K,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),Se(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Z,Tt.__webglTexture,0,Yt(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Z,Tt.__webglTexture,rt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Gt(R,v,k){if(n.bindRenderbuffer(n.RENDERBUFFER,R),v.depthBuffer){const W=v.depthTexture,Z=W&&W.isDepthTexture?W.type:null,rt=w(v.stencilBuffer,Z),at=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Se(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Yt(v),rt,v.width,v.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Yt(v),rt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,rt,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,R)}else{const W=v.textures;for(let Z=0;Z<W.length;Z++){const rt=W[Z],at=r.convert(rt.format,rt.colorSpace),K=r.convert(rt.type),J=M(rt.internalFormat,at,K,rt.normalized,rt.colorSpace);Se(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Yt(v),J,v.width,v.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Yt(v),J,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,J,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ye(R,v,k){const W=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=i.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Jt(n.TEXTURE_CUBE_MAP,v.depthTexture);const ot=r.convert(v.depthTexture.format),Tt=r.convert(v.depthTexture.type);let ut;v.depthTexture.format===en?ut=n.DEPTH_COMPONENT24:v.depthTexture.format===Pn&&(ut=n.DEPTH24_STENCIL8);for(let ct=0;ct<6;ct++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ut,v.width,v.height,0,ot,Tt,null)}}else it(v.depthTexture,0);const rt=Z.__webglTexture,at=Yt(v),K=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,J=v.depthTexture.format===Pn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===en)Se(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,K,rt,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,J,K,rt,0);else if(v.depthTexture.format===Pn)Se(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,K,rt,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,J,K,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function qt(R){const v=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const W=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=W}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)ye(v.__webglFramebuffer[W],R,W);else{const W=R.texture.mipmaps;W&&W.length>0?ye(v.__webglFramebuffer[0],R,0):ye(v.__webglFramebuffer,R,0)}else if(k){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=n.createRenderbuffer(),Gt(v.__webglDepthbuffer[W],R,!1);else{const Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=v.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,rt)}}else{const W=R.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Gt(v.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,rt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function st(R,v,k){const W=i.get(R);v!==void 0&&gt(W.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&qt(R)}function Nt(R){const v=R.texture,k=i.get(R),W=i.get(v);R.addEventListener("dispose",x);const Z=R.textures,rt=R.isWebGLCubeRenderTarget===!0,at=Z.length>1;if(at||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=v.version,a.memory.textures++),rt){k.__webglFramebuffer=[];for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[K]=[];for(let J=0;J<v.mipmaps.length;J++)k.__webglFramebuffer[K][J]=n.createFramebuffer()}else k.__webglFramebuffer[K]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let K=0;K<v.mipmaps.length;K++)k.__webglFramebuffer[K]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(at)for(let K=0,J=Z.length;K<J;K++){const ot=i.get(Z[K]);ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Se(R)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let K=0;K<Z.length;K++){const J=Z[K];k.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[K]);const ot=r.convert(J.format,J.colorSpace),Tt=r.convert(J.type),ut=M(J.internalFormat,ot,Tt,J.normalized,J.colorSpace,R.isXRRenderTarget===!0),ct=Yt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,ut,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,k.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Gt(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(rt){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Jt(n.TEXTURE_CUBE_MAP,v);for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)gt(k.__webglFramebuffer[K][J],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,J);else gt(k.__webglFramebuffer[K],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);f(v)&&S(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let K=0,J=Z.length;K<J;K++){const ot=Z[K],Tt=i.get(ot);let ut=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ut=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,Tt.__webglTexture),Jt(ut,ot),gt(k.__webglFramebuffer,R,ot,n.COLOR_ATTACHMENT0+K,ut,0),f(ot)&&S(ut)}e.unbindTexture()}else{let K=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,W.__webglTexture),Jt(K,v),v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)gt(k.__webglFramebuffer[J],R,v,n.COLOR_ATTACHMENT0,K,J);else gt(k.__webglFramebuffer,R,v,n.COLOR_ATTACHMENT0,K,0);f(v)&&S(K),e.unbindTexture()}R.depthBuffer&&qt(R)}function wt(R){const v=R.textures;for(let k=0,W=v.length;k<W;k++){const Z=v[k];if(f(Z)){const rt=E(R),at=i.get(Z).__webglTexture;e.bindTexture(rt,at),S(rt),e.unbindTexture()}}}const kt=[],Me=[];function Ne(R){if(R.samples>0){if(Se(R)===!1){const v=R.textures,k=R.width,W=R.height;let Z=n.COLOR_BUFFER_BIT;const rt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=i.get(R),K=v.length>1;if(K)for(let ot=0;ot<v.length;ot++)e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);const J=R.texture.mipmaps;J&&J.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let ot=0;ot<v.length;ot++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);const Tt=i.get(v[ot]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Tt,0)}n.blitFramebuffer(0,0,k,W,0,0,k,W,Z,n.NEAREST),c===!0&&(kt.length=0,Me.length=0,kt.push(n.COLOR_ATTACHMENT0+ot),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(kt.push(rt),Me.push(rt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Me)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let ot=0;ot<v.length;ot++){e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);const Tt=i.get(v[ot]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,Tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){const v=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Yt(R){return Math.min(s.maxSamples,R.samples)}function Se(R){const v=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function U(R){const v=a.render.frame;u.get(R)!==v&&(u.set(R,v),R.update())}function Xe(R,v){const k=R.colorSpace,W=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==ca&&k!==mn&&(Qt.getTransfer(k)===he?(W!==wi||Z!==ai)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",k)),v}function le(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.getTextureUnits=I,this.setTextureUnits=V,this.setTexture2D=it,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=et,this.rebindTextures=st,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Se,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ex(n,t){function e(i,s=mn){let r;const a=Qt.getTransfer(s);if(i===ai)return n.UNSIGNED_BYTE;if(i===rl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===al)return n.UNSIGNED_SHORT_5_5_5_1;if(i===td)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ed)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ju)return n.BYTE;if(i===Qu)return n.SHORT;if(i===Ks)return n.UNSIGNED_SHORT;if(i===sl)return n.INT;if(i===zi)return n.UNSIGNED_INT;if(i===bi)return n.FLOAT;if(i===Hi)return n.HALF_FLOAT;if(i===id)return n.ALPHA;if(i===nd)return n.RGB;if(i===wi)return n.RGBA;if(i===en)return n.DEPTH_COMPONENT;if(i===Pn)return n.DEPTH_STENCIL;if(i===ol)return n.RED;if(i===cl)return n.RED_INTEGER;if(i===Fn)return n.RG;if(i===ll)return n.RG_INTEGER;if(i===hl)return n.RGBA_INTEGER;if(i===Xr||i===qr||i===Yr||i===$r)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qo||i===tc||i===ec||i===ic)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nc||i===sc||i===rc||i===ac||i===oc||i===aa||i===cc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===nc||i===sc)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===rc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ac)return r.COMPRESSED_R11_EAC;if(i===oc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===aa)return r.COMPRESSED_RG11_EAC;if(i===cc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===lc||i===hc||i===uc||i===dc||i===fc||i===pc||i===mc||i===gc||i===_c||i===vc||i===xc||i===yc||i===Mc||i===Sc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===lc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_c)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bc||i===wc||i===Ec)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===bc)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tc||i===Ac||i===oa||i===Rc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Tc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===js?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Tx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ax=`
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

}`;class Rx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new md(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new We({vertexShader:Tx,fragmentShader:Ax,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Lt(new nn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cx extends xn{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Rx,f={},S=e.getContextAttributes();let E=null,M=null;const w=[],y=[],A=new Ft;let x=null,T=null;const C=new ei;C.viewport=new be;const L=new ei;L.viewport=new be;const F=[C,L],z=new Om;let I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let tt=w[$];return tt===void 0&&(tt=new Za,w[$]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function($){let tt=w[$];return tt===void 0&&(tt=new Za,w[$]=tt),tt.getGripSpace()},this.getHand=function($){let tt=w[$];return tt===void 0&&(tt=new Za,w[$]=tt),tt.getHandSpace()};function B($){const tt=y.indexOf($.inputSource);if(tt===-1)return;const vt=w[tt];vt!==void 0&&(vt.update($.inputSource,$.frame,l||a),vt.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",it);for(let $=0;$<w.length;$++){const tt=y[$];tt!==null&&(y[$]=null,w[$].disconnect(tt))}I=null,V=null,m.reset();for(const $ in f)delete f[$];if(t.setRenderTarget(E),p=null,h=null,d=null,s=null,M=null,te.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(A.width,A.height,!1),T!==null){const $=T.camera;$.fov=T.fov,$.zoom=T.zoom,$.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",it),S.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Ot=null,gt=null;S.depth&&(gt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=S.stencil?Pn:en,Ot=S.stencil?js:zi);const Gt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Gt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new di(h.textureWidth,h.textureHeight,{format:wi,type:ai,depthTexture:new er(h.textureWidth,h.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const vt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new di(p.framebufferWidth,p.framebufferHeight,{format:wi,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),te.setContext(s),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it($){for(let tt=0;tt<$.removed.length;tt++){const vt=$.removed[tt],Ot=y.indexOf(vt);Ot>=0&&(y[Ot]=null,w[Ot].disconnect(vt))}for(let tt=0;tt<$.added.length;tt++){const vt=$.added[tt];let Ot=y.indexOf(vt);if(Ot===-1){for(let Gt=0;Gt<w.length;Gt++)if(Gt>=y.length){y.push(vt),Ot=Gt;break}else if(y[Gt]===null){y[Gt]=vt,Ot=Gt;break}if(Ot===-1)break}const gt=w[Ot];gt&&gt.connect(vt)}}const q=new P,Q=new P;function et($,tt,vt){q.setFromMatrixPosition(tt.matrixWorld),Q.setFromMatrixPosition(vt.matrixWorld);const Ot=q.distanceTo(Q),gt=tt.projectionMatrix.elements,Gt=vt.projectionMatrix.elements,ye=gt[14]/(gt[10]-1),qt=gt[14]/(gt[10]+1),st=(gt[9]+1)/gt[5],Nt=(gt[9]-1)/gt[5],wt=(gt[8]-1)/gt[0],kt=(Gt[8]+1)/Gt[0],Me=ye*wt,Ne=ye*kt,Yt=Ot/(-wt+kt),Se=Yt*-wt;if(tt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Se),$.translateZ(Yt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),gt[10]===-1)$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const U=ye+Yt,Xe=qt+Yt,le=Me-Se,R=Ne+(Ot-Se),v=st*qt/Xe*U,k=Nt*qt/Xe*U;$.projectionMatrix.makePerspective(le,R,v,k,U,Xe),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Rt($,tt){tt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(tt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let tt=$.near,vt=$.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),z.near=L.near=C.near=tt,z.far=L.far=C.far=vt,(I!==z.near||V!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),I=z.near,V=z.far),z.layers.mask=$.layers.mask|6,C.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;const Ot=$.parent,gt=z.cameras;Rt(z,Ot);for(let Gt=0;Gt<gt.length;Gt++)Rt(gt[Gt],Ot);gt.length===2?et(z,C,L):z.projectionMatrix.copy(C.projectionMatrix),T===null&&$.isPerspectiveCamera&&(T={camera:$,fov:$.fov,zoom:$.zoom}),yt($,z,Ot)};function yt($,tt,vt){vt===null?$.matrix.copy(tt.matrixWorld):($.matrix.copy(vt.matrixWorld),$.matrix.invert(),$.matrix.multiply(tt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Qs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function($){return f[$]};let se=null;function Jt($,tt){if(u=tt.getViewerPose(l||a),g=tt,u!==null){const vt=u.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let Ot=!1;vt.length!==z.cameras.length&&(z.cameras.length=0,Ot=!0);for(let qt=0;qt<vt.length;qt++){const st=vt[qt];let Nt=null;if(p!==null)Nt=p.getViewport(st);else{const kt=d.getViewSubImage(h,st);Nt=kt.viewport,qt===0&&(t.setRenderTargetTextures(M,kt.colorTexture,kt.depthStencilTexture),t.setRenderTarget(M))}let wt=F[qt];wt===void 0&&(wt=new ei,wt.layers.enable(qt),wt.viewport=new be,F[qt]=wt),wt.matrix.fromArray(st.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(st.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),qt===0&&(z.matrix.copy(wt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ot===!0&&z.cameras.push(wt)}const gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const qt=d.getDepthInformation(vt[0]);qt&&qt.isValid&&qt.texture&&m.init(qt,s.renderState)}if(gt&&gt.includes("camera-access")&&_){t.state.unbindTexture(),d=i.getBinding();for(let qt=0;qt<vt.length;qt++){const st=vt[qt].camera;if(st){let Nt=f[st];Nt||(Nt=new md,f[st]=Nt);const wt=d.getCameraImage(st);Nt.sourceTexture=wt}}}}for(let vt=0;vt<w.length;vt++){const Ot=y[vt],gt=w[vt];Ot!==null&&gt!==void 0&&gt.update(Ot,tt,l||a)}se&&se($,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),g=null}const te=new yd;te.setAnimationLoop(Jt),this.setAnimationLoop=function($){se=$},this.dispose=function(){}}}const Px=new ne,Ad=new zt;Ad.set(-1,0,0,0,1,0,0,0,1);function Lx(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,gd(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,E,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,S,E):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ii&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ii&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=t.get(f),E=S.envMap,M=S.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(Px.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ad),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,S,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=E*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ii&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ix(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,w){const y=w.program;i.uniformBlockBinding(M,y)}function l(M,w){let y=s[M.id];y===void 0&&(m(M),y=u(M),s[M.id]=y,M.addEventListener("dispose",S));const A=w.program;i.updateUBOMapping(M,A);const x=t.render.frame;r[M.id]!==x&&(h(M),r[M.id]=x)}function u(M){const w=d();M.__bindingPointIndex=w;const y=n.createBuffer(),A=M.__size,x=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,A,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,y),y}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const w=s[M.id],y=M.uniforms,A=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let x=0,T=y.length;x<T;x++){const C=y[x];if(Array.isArray(C))for(let L=0,F=C.length;L<F;L++)p(C[L],x,L,A);else p(C,x,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,w,y,A){if(_(M,w,y,A)===!0){const x=M.__offset,T=M.value;if(Array.isArray(T)){let C=0;for(let L=0;L<T.length;L++){const F=T[L],z=f(F);g(F,M.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,M.__data)}}function g(M,w,y){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,y)}function _(M,w,y,A){const x=M.value,T=w+"_"+y;if(A[T]===void 0)return typeof x=="number"||typeof x=="boolean"?A[T]=x:ArrayBuffer.isView(x)?A[T]=x.slice():A[T]=x.clone(),!0;{const C=A[T];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return A[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(M){const w=M.uniforms;let y=0;const A=16;for(let T=0,C=w.length;T<C;T++){const L=Array.isArray(w[T])?w[T]:[w[T]];for(let F=0,z=L.length;F<z;F++){const I=L[F],V=Array.isArray(I.value)?I.value:[I.value];for(let B=0,Y=V.length;B<Y;B++){const it=V[B],q=f(it),Q=y%A,et=Q%q.boundary,Rt=Q+et;y+=et,Rt!==0&&A-Rt<q.storage&&(y+=A-Rt),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=q.storage}}}const x=y%A;return x>0&&(y+=A-x),M.__size=y,M.__cache={},this}function f(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",M),w}function S(M){const w=M.target;w.removeEventListener("dispose",S);const y=a.indexOf(w.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function E(){for(const M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:E}}const Dx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ri=null;function Nx(){return Ri===null&&(Ri=new _l(Dx,16,16,Fn,Hi),Ri.name="DFG_LUT",Ri.minFilter=Ge,Ri.magFilter=Ge,Ri.wrapS=Ki,Ri.wrapT=Ki,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}class Rd{constructor(t={}){const{canvas:e=Op(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=ai}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const _=p,m=new Set([hl,ll,cl]),f=new Set([ai,zi,Ks,js,rl,al]),S=new Uint32Array(4),E=new Int32Array(4),M=new P;let w=null,y=null;const A=[],x=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1,F=null,z=null,I=null,V=null;this._outputColorSpace=ri;let B=0,Y=0,it=null,q=-1,Q=null;const et=new be,Rt=new be;let yt=null;const se=new Pt(0);let Jt=0,te=e.width,$=e.height,tt=1,vt=null,Ot=null;const gt=new be(0,0,te,$),Gt=new be(0,0,te,$);let ye=!1;const qt=new vl;let st=!1,Nt=!1;const wt=new ne,kt=new P,Me=new be,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function Se(){return it===null?tt:1}let U=i;function Xe(b,D){return e.getContext(b,D)}let le,R,v,k,W,Z,rt,at,K,J,ot,Tt,ut,ct,At,Dt,Ht,N,lt,j,ht,mt,nt;try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nl}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",oe,!1),e.addEventListener("webglcontextcreationerror",pi,!1),U===null){const D="webgl2";if(U=Xe(D,b),U===null)throw Xe(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ct()}catch(b){throw e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",pi,!1),ie("WebGLRenderer: "+b.message),b}function Ct(){le=new N_(U),le.init(),ht=new Ex(U,le),R=new w_(U,le,t,ht),v=new bx(U,le),R.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),z=U.createFramebuffer(),I=U.createFramebuffer(),V=U.createFramebuffer(),k=new O_(U),W=new lx,Z=new wx(U,le,v,W,R,ht,k),rt=new D_(C),at=new Bm(U),mt=new S_(U,at),K=new U_(U,at,k,mt),J=new B_(U,K,at,mt,k),N=new k_(U,R,Z),At=new E_(W),ot=new cx(C,rt,le,R,mt,At),Tt=new Lx(C,W),ut=new ux,ct=new _x(le),Ht=new M_(C,rt,v,J,g,c),Dt=new Sx(C,J,R),nt=new Ix(U,k,R,v),lt=new b_(U,le,k),j=new F_(U,le,k),k.programs=ot.programs,C.capabilities=R,C.extensions=le,C.properties=W,C.renderLists=ut,C.shadowMap=Dt,C.state=v,C.info=k}_!==ai&&(T=new H_(_,e.width,e.height,o,s,r));const bt=new Cx(C,U);this.xr=bt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=le.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=le.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(b){b!==void 0&&(tt=b,this.setSize(te,$,!1))},this.getSize=function(b){return b.set(te,$)},this.setSize=function(b,D,X=!0){if(bt.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}te=b,$=D,e.width=Math.floor(b*tt),e.height=Math.floor(D*tt),X===!0&&(e.style.width=b+"px",e.style.height=D+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(te*tt,$*tt).floor()},this.setDrawingBufferSize=function(b,D,X){te=b,$=D,tt=X,e.width=Math.floor(b*X),e.height=Math.floor(D*X),this.setViewport(0,0,b,D)},this.setEffects=function(b){if(_===ai){ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let D=0;D<b.length;D++)if(b[D].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(et)},this.getViewport=function(b){return b.copy(gt)},this.setViewport=function(b,D,X,H){b.isVector4?gt.set(b.x,b.y,b.z,b.w):gt.set(b,D,X,H),v.viewport(et.copy(gt).multiplyScalar(tt).round())},this.getScissor=function(b){return b.copy(Gt)},this.setScissor=function(b,D,X,H){b.isVector4?Gt.set(b.x,b.y,b.z,b.w):Gt.set(b,D,X,H),v.scissor(Rt.copy(Gt).multiplyScalar(tt).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(b){v.setScissorTest(ye=b)},this.setOpaqueSort=function(b){vt=b},this.setTransparentSort=function(b){Ot=b},this.getClearColor=function(b){return b.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor(...arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha(...arguments)},this.clear=function(b=!0,D=!0,X=!0){let H=0;if(b){let G=!1;if(it!==null){const pt=it.texture.format;G=m.has(pt)}if(G){const pt=it.texture.type,xt=f.has(pt),ft=Ht.getClearColor(),Mt=Ht.getClearAlpha(),Et=ft.r,Vt=ft.g,jt=ft.b;xt?(S[0]=Et,S[1]=Vt,S[2]=jt,S[3]=Mt,U.clearBufferuiv(U.COLOR,0,S)):(E[0]=Et,E[1]=Vt,E[2]=jt,E[3]=Mt,U.clearBufferiv(U.COLOR,0,E))}else H|=U.COLOR_BUFFER_BIT}D&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",pi,!1),Ht.dispose(),ut.dispose(),ct.dispose(),W.dispose(),rt.dispose(),J.dispose(),mt.dispose(),nt.dispose(),ot.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Ol),bt.removeEventListener("sessionend",kl),Mn.stop()};function pe(b){b.preventDefault(),ua("WebGLRenderer: Context Lost."),L=!0}function oe(){ua("WebGLRenderer: Context Restored."),L=!1;const b=k.autoReset,D=Dt.enabled,X=Dt.autoUpdate,H=Dt.needsUpdate,G=Dt.type;Ct(),k.autoReset=b,Dt.enabled=D,Dt.autoUpdate=X,Dt.needsUpdate=H,Dt.type=G}function pi(b){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ei(b){const D=b.target;D.removeEventListener("dispose",Ei),Rf(D)}function Rf(b){Cf(b),W.remove(b)}function Cf(b){const D=W.get(b).programs;D!==void 0&&(D.forEach(function(X){ot.releaseProgram(X)}),b.isShaderMaterial&&ot.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,X,H,G,pt){D===null&&(D=Ne);const xt=G.isMesh&&G.matrixWorld.determinantAffine()<0,ft=If(b,D,X,H,G);v.setMaterial(H,xt);let Mt=X.index,Et=1;if(H.wireframe===!0){if(Mt=K.getWireframeAttribute(X),Mt===void 0)return;Et=2}const Vt=X.drawRange,jt=X.attributes.position;let St=Vt.start*Et,ce=(Vt.start+Vt.count)*Et;pt!==null&&(St=Math.max(St,pt.start*Et),ce=Math.min(ce,(pt.start+pt.count)*Et)),Mt!==null?(St=Math.max(St,0),ce=Math.min(ce,Mt.count)):jt!=null&&(St=Math.max(St,0),ce=Math.min(ce,jt.count));const Le=ce-St;if(Le<0||Le===1/0)return;mt.setup(G,H,ft,X,Mt);let _e,fe=lt;if(Mt!==null&&(_e=at.get(Mt),fe=j,fe.setIndex(_e)),G.isMesh)H.wireframe===!0?(v.setLineWidth(H.wireframeLinewidth*Se()),fe.setMode(U.LINES)):fe.setMode(U.TRIANGLES);else if(G.isLine){let qe=H.linewidth;qe===void 0&&(qe=1),v.setLineWidth(qe*Se()),G.isLineSegments?fe.setMode(U.LINES):G.isLineLoop?fe.setMode(U.LINE_LOOP):fe.setMode(U.LINE_STRIP)}else G.isPoints?fe.setMode(U.POINTS):G.isSprite&&fe.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(le.get("WEBGL_multi_draw"))fe.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const qe=G._multiDrawStarts,_t=G._multiDrawCounts,Ke=G._multiDrawCount,ee=Mt?at.get(Mt).bytesPerElement:1,oi=W.get(H).currentProgram.getUniforms();for(let Ti=0;Ti<Ke;Ti++)oi.setValue(U,"_gl_DrawID",Ti),fe.render(qe[Ti]/ee,_t[Ti])}else if(G.isInstancedMesh)fe.renderInstances(St,Le,G.count);else if(X.isInstancedBufferGeometry){const qe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,_t=Math.min(X.instanceCount,qe);fe.renderInstances(St,Le,_t)}else fe.render(St,Le)};function Fl(b,D,X,H){F!==null&&b.isNodeMaterial&&F.setObject(H,b),st===!0&&At.setState(b,X,!1),b.transparent===!0&&b.side===Ce&&b.forceSinglePass===!1?(b.side=ii,b.needsUpdate=!0,rr(b,D,H),b.side=Nn,b.needsUpdate=!0,rr(b,D,H),b.side=Ce):rr(b,D,H)}this.compile=function(b,D,X=null){X===null&&(X=b),F!==null&&F.renderStart(b,D,X),y=ct.get(X),y.init(D),x.push(y),X.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),b!==X&&b.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),y.setupLights(),F!==null&&F.updateLights(y.state.lightsArray),Nt=this.localClippingEnabled,st=At.init(this.clippingPlanes,Nt),st===!0&&At.setGlobalState(this.clippingPlanes,D),F!==null&&Dt.render(y.state.shadowsArray,X,D);const H=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const pt=G.material;if(pt)if(Array.isArray(pt))for(let xt=0;xt<pt.length;xt++){const ft=pt[xt];Fl(ft,X,D,G),H.add(ft)}else Fl(pt,X,D,G),H.add(pt)}),y=x.pop(),F!==null&&F.renderEnd(),H},this.compileAsync=function(b,D,X=null){const H=this.compile(b,D,X);return new Promise(G=>{function pt(){if(H.forEach(function(xt){const Mt=W.get(xt).currentProgram;(Mt===void 0||Mt.isReady())&&H.delete(xt)}),H.size===0){G(b);return}setTimeout(pt,10)}le.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Oa=null;function Pf(b){Oa&&Oa(b)}function Ol(){Mn.stop()}function kl(){Mn.start()}const Mn=new yd;Mn.setAnimationLoop(Pf),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(b){Oa=b,bt.setAnimationLoop(b),b===null?Mn.stop():Mn.start()},bt.addEventListener("sessionstart",Ol),bt.addEventListener("sessionend",kl),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(b,D);const X=bt.enabled===!0&&bt.isPresenting===!0,H=T!==null&&(it===null||X)&&T.begin(C,it);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(D),D=bt.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,D,it),y=ct.get(b,x.length),y.init(D),y.state.textureUnits=Z.getTextureUnits(),x.push(y),wt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),qt.setFromProjectionMatrix(wt,Fi,D.reversedDepth),Nt=this.localClippingEnabled,st=At.init(this.clippingPlanes,Nt),w=ut.get(b,A.length),w.init(),A.push(w),bt.enabled===!0&&bt.isPresenting===!0){const xt=C.xr.getDepthSensingMesh();xt!==null&&ka(xt,D,-1/0,C.sortObjects)}ka(b,D,0,C.sortObjects),w.finish(),F!==null&&F.updateLights(y.state.lightsArray),C.sortObjects===!0&&w.sort(vt,Ot),Yt=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Yt&&Ht.addToRenderList(w,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&At.beginShadows();const G=y.state.shadowsArray;if(Dt.render(G,b,D),st===!0&&At.endShadows(),(H&&T.hasRenderPass())===!1){const xt=w.opaque,ft=w.transmissive;if(y.setupLights(),D.isArrayCamera){const Mt=D.cameras;if(ft.length>0)for(let Et=0,Vt=Mt.length;Et<Vt;Et++){const jt=Mt[Et];zl(xt,ft,b,jt)}Yt&&Ht.render(b);for(let Et=0,Vt=Mt.length;Et<Vt;Et++){const jt=Mt[Et];Bl(w,b,jt,jt.viewport)}}else ft.length>0&&zl(xt,ft,b,D),Yt&&Ht.render(b),Bl(w,b,D)}it!==null&&Y===0&&(Z.updateMultisampleRenderTarget(it),Z.updateRenderTargetMipmap(it)),H&&T.end(C),b.isScene===!0&&b.onAfterRender(C,b,D),mt.resetDefaultState(),q=-1,Q=null,x.pop(),x.length>0?(y=x[x.length-1],Z.setTextureUnits(y.state.textureUnits),st===!0&&At.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,A.pop(),A.length>0?w=A[A.length-1]:w=null,F!==null&&F.renderEnd()};function ka(b,D,X,H){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLightProbeGrid)y.pushLightProbeGrid(b);else if(b.isLight)y.pushLight(b),b.castShadow&&y.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(qt)){H&&Me.setFromMatrixPosition(b.matrixWorld).applyMatrix4(wt);const xt=J.update(b),ft=b.material;ft.visible&&w.push(b,xt,ft,X,Me.z,null,D)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(qt))){const xt=J.update(b),ft=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Me.copy(b.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Me.copy(xt.boundingSphere.center)),Me.applyMatrix4(b.matrixWorld).applyMatrix4(wt)),Array.isArray(ft)){const Mt=xt.groups;for(let Et=0,Vt=Mt.length;Et<Vt;Et++){const jt=Mt[Et],St=ft[jt.materialIndex];St&&St.visible&&w.push(b,xt,St,X,Me.z,jt,D)}}else ft.visible&&w.push(b,xt,ft,X,Me.z,null,D)}}const pt=b.children;for(let xt=0,ft=pt.length;xt<ft;xt++)ka(pt[xt],D,X,H)}function Bl(b,D,X,H){const{opaque:G,transmissive:pt,transparent:xt}=b;y.setupLightsView(X),st===!0&&At.setGlobalState(C.clippingPlanes,X),H&&v.viewport(et.copy(H)),G.length>0&&sr(G,D,X),pt.length>0&&sr(pt,D,X),xt.length>0&&sr(xt,D,X),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function zl(b,D,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[H.id]===void 0){const St=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[H.id]=new di(1,1,{generateMipmaps:!0,type:St?Hi:ai,minFilter:Cn,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}const pt=y.state.transmissionRenderTarget[H.id],xt=H.viewport||et;pt.setSize(xt.z*C.transmissionResolutionScale,xt.w*C.transmissionResolutionScale);const ft=C.getRenderTarget(),Mt=C.getActiveCubeFace(),Et=C.getActiveMipmapLevel();C.setRenderTarget(pt),C.getClearColor(se),Jt=C.getClearAlpha(),Jt<1&&C.setClearColor(16777215,.5),C.clear(),Yt&&Ht.render(X);const Vt=C.toneMapping;C.toneMapping=Oi;const jt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),y.setupLightsView(H),st===!0&&At.setGlobalState(C.clippingPlanes,H),sr(b,X,H),Z.updateMultisampleRenderTarget(pt),Z.updateRenderTargetMipmap(pt),le.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let ce=0,Le=D.length;ce<Le;ce++){const _e=D[ce],{object:fe,geometry:qe,material:_t,group:Ke}=_e;if(_t.side===Ce&&fe.layers.test(H.layers)){const ee=_t.side;_t.side=ii,_t.needsUpdate=!0,Hl(fe,X,H,qe,_t,Ke),_t.side=ee,_t.needsUpdate=!0,St=!0}}St===!0&&(Z.updateMultisampleRenderTarget(pt),Z.updateRenderTargetMipmap(pt))}C.setRenderTarget(ft,Mt,Et),C.setClearColor(se,Jt),jt!==void 0&&(H.viewport=jt),C.toneMapping=Vt}function sr(b,D,X){const H=D.isScene===!0?D.overrideMaterial:null;for(let G=0,pt=b.length;G<pt;G++){const xt=b[G],{object:ft,geometry:Mt,group:Et}=xt;let Vt=xt.material;Vt.allowOverride===!0&&H!==null&&(Vt=H),ft.layers.test(X.layers)&&Hl(ft,D,X,Mt,Vt,Et)}}function Hl(b,D,X,H,G,pt){F!==null&&G.isNodeMaterial&&F.setObject(b,G),b.onBeforeRender(C,D,X,H,G,pt),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(C,D,X,H,b,pt),G.transparent===!0&&G.side===Ce&&G.forceSinglePass===!1?(G.side=ii,G.needsUpdate=!0,C.renderBufferDirect(X,D,H,G,b,pt),G.side=Nn,G.needsUpdate=!0,C.renderBufferDirect(X,D,H,G,b,pt),G.side=Ce):C.renderBufferDirect(X,D,H,G,b,pt),b.onAfterRender(C,D,X,H,G,pt)}function rr(b,D,X){D.isScene!==!0&&(D=Ne);const H=W.get(b),G=y.state.lights,pt=y.state.shadowsArray,xt=G.state.version,ft=ot.getParameters(b,G.state,pt,D,X,y.state.lightProbeGridArray),Mt=ot.getProgramCacheKey(ft);let Et=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?D.environment:null,H.fog=D.fog;const Vt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=rt.get(b.envMap||H.environment,Vt),H.envMapRotation=H.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Et===void 0&&(b.addEventListener("dispose",Ei),Et=new Map,H.programs=Et);let jt=Et.get(Mt);if(jt!==void 0){if(H.currentProgram===jt&&H.lightsStateVersion===xt)return Vl(b,ft),jt}else ft.uniforms=ot.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,X,ft),b.onBeforeCompile(ft,C),jt=ot.acquireProgram(ft,Mt),Et.set(Mt,jt),H.uniforms=ft.uniforms;const St=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(St.clippingPlanes=At.uniform),Vl(b,ft),H.needsLights=Nf(b),H.lightsStateVersion=xt,H.needsLights&&(St.ambientLightColor.value=G.state.ambient,St.lightProbe.value=G.state.probe,St.sunLights.value=G.state.sun,St.sunLightShadows.value=G.state.sunShadow,St.directionalLights.value=G.state.directional,St.directionalLightShadows.value=G.state.directionalShadow,St.spotLights.value=G.state.spot,St.spotLightShadows.value=G.state.spotShadow,St.rectAreaLights.value=G.state.rectArea,St.ltc_1.value=G.state.rectAreaLTC1,St.ltc_2.value=G.state.rectAreaLTC2,St.pointLights.value=G.state.point,St.pointLightShadows.value=G.state.pointShadow,St.hemisphereLights.value=G.state.hemi,St.sunShadowMatrix.value=G.state.sunShadowMatrix,St.sunShadowCascade.value=G.state.sunShadowCascade,St.directionalShadowMatrix.value=G.state.directionalShadowMatrix,St.spotLightMatrix.value=G.state.spotLightMatrix,St.spotLightMap.value=G.state.spotLightMap,St.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=y.state.lightProbeGridArray.length>0,H.currentProgram=jt,H.uniformsList=null,jt}function Gl(b){if(b.uniformsList===null){const D=b.currentProgram.getUniforms();b.uniformsList=Zr.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function Vl(b,D){const X=W.get(b);X.outputColorSpace=D.outputColorSpace,X.batching=D.batching,X.batchingColor=D.batchingColor,X.instancing=D.instancing,X.instancingColor=D.instancingColor,X.instancingMorph=D.instancingMorph,X.skinning=D.skinning,X.morphTargets=D.morphTargets,X.morphNormals=D.morphNormals,X.morphColors=D.morphColors,X.morphTargetsCount=D.morphTargetsCount,X.numClippingPlanes=D.numClippingPlanes,X.numIntersection=D.numClipIntersection,X.vertexAlphas=D.vertexAlphas,X.vertexTangents=D.vertexTangents,X.toneMapping=D.toneMapping}function Lf(b,D){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition(D.matrixWorld);for(let X=0,H=b.length;X<H;X++){const G=b[X];if(G.texture!==null&&G.boundingBox.containsPoint(M))return G}return null}function If(b,D,X,H,G){D.isScene!==!0&&(D=Ne),Z.resetTextureUnits();const pt=D.fog,xt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?D.environment:null,ft=it===null?C.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Qt.workingColorSpace,Mt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Et=rt.get(H.envMap||xt,Mt),Vt=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,jt=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),St=!!X.morphAttributes.position,ce=!!X.morphAttributes.normal,Le=!!X.morphAttributes.color;let _e=Oi;H.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(_e=C.toneMapping);const fe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,qe=fe!==void 0?fe.length:0,_t=W.get(H),Ke=y.state.lights;if(st===!0&&(Nt===!0||b!==Q)){const me=b===Q&&H.id===q;At.setState(H,b,me)}let ee=!1;H.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==Ke.state.version||_t.outputColorSpace!==ft||G.isBatchedMesh&&_t.batching===!1||!G.isBatchedMesh&&_t.batching===!0||G.isBatchedMesh&&_t.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&_t.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&_t.instancing===!1||!G.isInstancedMesh&&_t.instancing===!0||G.isSkinnedMesh&&_t.skinning===!1||!G.isSkinnedMesh&&_t.skinning===!0||G.isInstancedMesh&&_t.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&_t.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&_t.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&_t.instancingMorph===!1&&G.morphTexture!==null||_t.envMap!==Et||H.fog===!0&&_t.fog!==pt||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==At.numPlanes||_t.numIntersection!==At.numIntersection)||_t.vertexAlphas!==Vt||_t.vertexTangents!==jt||_t.morphTargets!==St||_t.morphNormals!==ce||_t.morphColors!==Le||_t.toneMapping!==_e||_t.morphTargetsCount!==qe||!!_t.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(ee=!0):(ee=!0,_t.__version=H.version);let oi=_t.currentProgram;ee===!0&&(oi=rr(H,D,G),F&&H.isNodeMaterial&&F.onUpdateProgram(H,oi,_t));let Ti=!1,rn=!1,Hn=!1;const de=oi.getUniforms(),Ee=_t.uniforms;if(v.useProgram(oi.program)&&(Ti=!0,rn=!0,Hn=!0),H.id!==q&&(q=H.id,rn=!0),_t.needsLights){const me=Lf(y.state.lightProbeGridArray,G);_t.lightProbeGrid!==me&&(_t.lightProbeGrid=me,rn=!0)}if(Ti||Q!==b){v.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),de.setValue(U,"projectionMatrix",b.projectionMatrix),de.setValue(U,"viewMatrix",b.matrixWorldInverse);const on=de.map.cameraPosition;on!==void 0&&on.setValue(U,kt.setFromMatrixPosition(b.matrixWorld)),R.logarithmicDepthBuffer&&de.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&de.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),Q!==b&&(Q=b,rn=!0,Hn=!0)}if(_t.needsLights&&(Ke.state.sunShadowMap.length>0&&de.setValue(U,"sunShadowMap",Ke.state.sunShadowMap,Z),Ke.state.directionalShadowMap.length>0&&de.setValue(U,"directionalShadowMap",Ke.state.directionalShadowMap,Z),Ke.state.spotShadowMap.length>0&&de.setValue(U,"spotShadowMap",Ke.state.spotShadowMap,Z),Ke.state.pointShadowMap.length>0&&de.setValue(U,"pointShadowMap",Ke.state.pointShadowMap,Z)),G.isSkinnedMesh){de.setOptional(U,G,"bindMatrix"),de.setOptional(U,G,"bindMatrixInverse");const me=G.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),de.setValue(U,"boneTexture",me.boneTexture,Z))}G.isBatchedMesh&&(de.setOptional(U,G,"batchingTexture"),de.setValue(U,"batchingTexture",G._matricesTexture,Z),de.setOptional(U,G,"batchingIdTexture"),de.setValue(U,"batchingIdTexture",G._indirectTexture,Z),de.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&de.setValue(U,"batchingColorTexture",G._colorsTexture,Z));const an=X.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&N.update(G,X,oi),(rn||_t.receiveShadow!==G.receiveShadow)&&(_t.receiveShadow=G.receiveShadow,de.setValue(U,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&D.environment!==null&&(Ee.envMapIntensity.value=D.environmentIntensity),Ee.dfgLUT!==void 0&&(Ee.dfgLUT.value=Nx()),rn){if(de.setValue(U,"toneMappingExposure",C.toneMappingExposure),_t.needsLights&&Df(Ee,Hn),pt&&H.fog===!0&&Tt.refreshFogUniforms(Ee,pt),Tt.refreshMaterialUniforms(Ee,H,tt,$,y.state.transmissionRenderTarget[b.id]),_t.needsLights&&_t.lightProbeGrid){const me=_t.lightProbeGrid;Ee.probesSH.value=me.texture,Ee.probesMin.value.copy(me.boundingBox.min),Ee.probesMax.value.copy(me.boundingBox.max),Ee.probesResolution.value.copy(me.resolution)}Zr.upload(U,Gl(_t),Ee,Z)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Zr.upload(U,Gl(_t),Ee,Z),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&de.setValue(U,"center",G.center),de.setValue(U,"modelViewMatrix",G.modelViewMatrix),de.setValue(U,"normalMatrix",G.normalMatrix),de.setValue(U,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const me=H.uniformsGroups;for(let on=0,Gn=me.length;on<Gn;on++){const Xl=me[on];nt.update(Xl,oi),nt.bind(Xl,oi)}}return oi}function Df(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.sunLights.needsUpdate=D,b.sunLightShadows.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function Nf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(b,D,X){const H=W.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),W.get(b.texture).__webglTexture=D,W.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,D){const X=W.get(b);X.__webglFramebuffer=D,X.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,X=0){it=b,B=D,Y=X;let H=null,G=!1,pt=!1;if(b){const ft=W.get(b);if(ft.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(U.FRAMEBUFFER,ft.__webglFramebuffer),et.copy(b.viewport),Rt.copy(b.scissor),yt=b.scissorTest,v.viewport(et),v.scissor(Rt),v.setScissorTest(yt),q=-1;return}else if(ft.__webglFramebuffer===void 0)Z.setupRenderTarget(b);else if(ft.__hasExternalTextures)Z.rebindTextures(b,W.get(b.texture).__webglTexture,W.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Vt=b.depthTexture;if(ft.__boundDepthTexture!==Vt){if(Vt!==null&&W.has(Vt)&&(b.width!==Vt.image.width||b.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(b)}}const Mt=b.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(pt=!0);const Et=W.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Et[D])?H=Et[D][X]:H=Et[D],G=!0):b.samples>0&&Z.useMultisampledRTT(b)===!1?H=W.get(b).__webglMultisampledFramebuffer:Array.isArray(Et)?H=Et[X]:H=Et,et.copy(b.viewport),Rt.copy(b.scissor),yt=b.scissorTest}else et.copy(gt).multiplyScalar(tt).floor(),Rt.copy(Gt).multiplyScalar(tt).floor(),yt=ye;if(X!==0&&(H=z),v.bindFramebuffer(U.FRAMEBUFFER,H)&&v.drawBuffers(b,H),v.viewport(et),v.scissor(Rt),v.setScissorTest(yt),G){const ft=W.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,ft.__webglTexture,X)}else if(pt){const ft=D;for(let Mt=0;Mt<b.textures.length;Mt++){const Et=W.get(b.textures[Mt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Mt,Et.__webglTexture,X,ft)}}else if(b!==null&&X!==0){const ft=W.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ft.__webglTexture,X)}q=-1};function Wl(b){const D=W.get(b);return(D.__readFormat!==b.format||D.__readType!==b.type)&&(D.__readFormat=b.format,D.__readType=b.type,D.__formatReadable=R.textureFormatReadable(b.format),D.__typeReadable=R.textureTypeReadable(b.type)),D}this.readRenderTargetPixels=function(b,D,X,H,G,pt,xt,ft=0){if(!(b&&b.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(Mt=Mt[xt]),Mt){v.bindFramebuffer(U.FRAMEBUFFER,Mt);try{const Et=b.textures[ft],Vt=Et.format,jt=Et.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ft);const St=Wl(Et);if(St.__formatReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-H&&X>=0&&X<=b.height-G&&U.readPixels(D,X,H,G,ht.convert(Vt),ht.convert(jt),pt)}finally{const Et=it!==null?W.get(it).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(b,D,X,H,G,pt,xt,ft=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(Mt=Mt[xt]),Mt)if(D>=0&&D<=b.width-H&&X>=0&&X<=b.height-G){v.bindFramebuffer(U.FRAMEBUFFER,Mt);const Et=b.textures[ft],Vt=Et.format,jt=Et.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ft);const St=Wl(Et);if(St.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ce),U.bufferData(U.PIXEL_PACK_BUFFER,pt.byteLength,U.STREAM_READ),U.readPixels(D,X,H,G,ht.convert(Vt),ht.convert(jt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Le=it!==null?W.get(it).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Le);const _e=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await kp(U,_e,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ce),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,pt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ce),U.deleteSync(_e),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,D=null,X=0){const H=Math.pow(2,-X),G=Math.floor(b.image.width*H),pt=Math.floor(b.image.height*H),xt=D!==null?D.x:0,ft=D!==null?D.y:0;Z.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,xt,ft,G,pt),v.unbindTexture()},this.copyTextureToTexture=function(b,D,X=null,H=null,G=0,pt=0){let xt,ft,Mt,Et,Vt,jt,St,ce,Le;const _e=b.isCompressedTexture?b.mipmaps[pt]:b.image;if(X!==null)xt=X.max.x-X.min.x,ft=X.max.y-X.min.y,Mt=X.isBox3?X.max.z-X.min.z:1,Et=X.min.x,Vt=X.min.y,jt=X.isBox3?X.min.z:0;else{const Ee=Math.pow(2,-G);xt=Math.floor(_e.width*Ee),ft=Math.floor(_e.height*Ee),b.isDataArrayTexture?Mt=_e.depth:b.isData3DTexture?Mt=Math.floor(_e.depth*Ee):Mt=1,Et=0,Vt=0,jt=0}H!==null?(St=H.x,ce=H.y,Le=H.z):(St=0,ce=0,Le=0);const fe=ht.convert(D.format),qe=ht.convert(D.type);let _t;D.isData3DTexture?(Z.setTexture3D(D,0),_t=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Z.setTexture2DArray(D,0),_t=U.TEXTURE_2D_ARRAY):(Z.setTexture2D(D,0),_t=U.TEXTURE_2D),v.activeTexture(U.TEXTURE0),v.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),v.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),v.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const Ke=v.getParameter(U.UNPACK_ROW_LENGTH),ee=v.getParameter(U.UNPACK_IMAGE_HEIGHT),oi=v.getParameter(U.UNPACK_SKIP_PIXELS),Ti=v.getParameter(U.UNPACK_SKIP_ROWS),rn=v.getParameter(U.UNPACK_SKIP_IMAGES);v.pixelStorei(U.UNPACK_ROW_LENGTH,_e.width),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_e.height),v.pixelStorei(U.UNPACK_SKIP_PIXELS,Et),v.pixelStorei(U.UNPACK_SKIP_ROWS,Vt),v.pixelStorei(U.UNPACK_SKIP_IMAGES,jt);const Hn=b.isDataArrayTexture||b.isData3DTexture,de=D.isDataArrayTexture||D.isData3DTexture;if(b.isDepthTexture){const Ee=W.get(b),an=W.get(D),me=W.get(Ee.__renderTarget),on=W.get(an.__renderTarget);v.bindFramebuffer(U.READ_FRAMEBUFFER,me.__webglFramebuffer),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,on.__webglFramebuffer);for(let Gn=0;Gn<Mt;Gn++)Hn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(b).__webglTexture,G,jt+Gn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(D).__webglTexture,pt,Le+Gn)),U.blitFramebuffer(Et,Vt,xt,ft,St,ce,xt,ft,U.DEPTH_BUFFER_BIT,U.NEAREST);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||W.has(b)){const Ee=W.get(b),an=W.get(D);v.bindFramebuffer(U.READ_FRAMEBUFFER,I),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,V);for(let me=0;me<Mt;me++)Hn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ee.__webglTexture,G,jt+me):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ee.__webglTexture,G),de?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,an.__webglTexture,pt,Le+me):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,an.__webglTexture,pt),G!==0?U.blitFramebuffer(Et,Vt,xt,ft,St,ce,xt,ft,U.COLOR_BUFFER_BIT,U.NEAREST):de?U.copyTexSubImage3D(_t,pt,St,ce,Le+me,Et,Vt,xt,ft):U.copyTexSubImage2D(_t,pt,St,ce,Et,Vt,xt,ft);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else de?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(_t,pt,St,ce,Le,xt,ft,Mt,fe,qe,_e.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(_t,pt,St,ce,Le,xt,ft,Mt,fe,_e.data):U.texSubImage3D(_t,pt,St,ce,Le,xt,ft,Mt,fe,qe,_e):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,pt,St,ce,xt,ft,fe,qe,_e.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,pt,St,ce,_e.width,_e.height,fe,_e.data):U.texSubImage2D(U.TEXTURE_2D,pt,St,ce,xt,ft,fe,qe,_e);v.pixelStorei(U.UNPACK_ROW_LENGTH,Ke),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ee),v.pixelStorei(U.UNPACK_SKIP_PIXELS,oi),v.pixelStorei(U.UNPACK_SKIP_ROWS,Ti),v.pixelStorei(U.UNPACK_SKIP_IMAGES,rn),pt===0&&D.generateMipmaps&&U.generateMipmap(_t),v.unbindTexture()},this.initRenderTarget=function(b){W.get(b).__webglFramebuffer===void 0&&Z.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Z.setTextureCube(b,0):b.isData3DTexture?Z.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Z.setTexture2DArray(b,0):Z.setTexture2D(b,0),v.unbindTexture()},this.resetState=function(){B=0,Y=0,it=null,v.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}function Ys(n,t,e=new P){return n.position.set(.34,-.25,t==="sniper"?-1.95:-1.3),n.updateWorldMatrix(!0,!1),n.getWorldPosition(e)}class Cd{constructor(t,e){this.coarse=e,this.el.className="co-pickup-feedback",this.el.hidden=!0,this.el.setAttribute("role","status"),this.el.setAttribute("aria-live","polite"),t.append(this.el)}el=document.createElement("div");queue=[];remaining=0;seen=new Set;push(t,e){if(e){if(this.seen.has(e))return;this.seen.add(e),this.seen.size>256&&this.seen.delete(this.seen.values().next().value)}this.queue.length<3&&this.queue.push(t),this.remaining||this.next()}next(){const t=this.queue.shift();if(this.el.hidden=!t,!t)return;const e=Pe[t.weapon];this.el.dataset.level=String(t.level),this.el.style.setProperty("--weapon",`#${e.color.toString(16).padStart(6,"0")}`);const i=t.kind==="unlock"?"取得新武器":t.kind==="upgrade"?`升至 Lv.${t.level}`:t.kind==="boost"?"滿級・快速換彈":"滿級・彈藥補滿",s=t.kind==="unlock"?this.coarse?"點擊武器庫選擇裝備":"按 Q 開啟武器庫裝備":t.kind==="upgrade"?`${t.previousCapacity} → ${t.capacity} 發彈匣 · 已補滿`:t.kind==="boost"?"換彈時間 -25% · 持續 8 秒・重拾刷新":`${t.capacity} 發彈匣 · +${t.ammoAdded} 發`;this.el.replaceChildren();const r=document.createElement("span"),a=document.createElement("div"),o=document.createElement("strong"),c=document.createElement("b"),l=document.createElement("small");r.textContent=e.icon,o.textContent=i,c.textContent=`${e.label} · Lv.${t.level}`,l.textContent=s,a.append(o,c,l),this.el.append(r,a),this.remaining=2}update(t){this.remaining&&(this.remaining=Math.max(0,this.remaining-t),this.remaining||this.next())}dispose(){this.el.remove(),this.queue=[],this.seen.clear()}}const su=[12044504,5432544,16765543];class Pd{signature="";parts=[];material=new Zt({color:su[0]});accent=new Zt;constructor(t){const e=[[[.012,.045,.62],[.438,-.28,-.8]],[[.15,.22,.16],[.34,-.45,-.67]],[[.012,.035,.62],[.242,-.28,-.8]],[[.14,.025,.32],[.34,-.185,-.84]]];for(const[i,s]of e){const r=new Lt(new we(i[0],i[1],i[2]),this.parts.length===3?this.accent:this.material);r.position.set(s[0],s[1],s[2]),r.visible=!1,t.add(r),this.parts.push(r)}}update(t,e){const i=`${t}:${e}`;i!==this.signature&&(this.signature=i,this.material.color.setHex(su[e-1]),this.accent.color.setHex(Pe[t].color),this.parts.forEach((s,r)=>s.visible=e>=2&&(r<2||e===3)))}}const Ld={boxes:Ze,heightAt:kn},ds=n=>({x:n[0],y:n[1],z:n[2]}),Ux=(n,t)=>n[0]*t[0]+n[1]*t[1]+n[2]*t[2],yo=(n,t)=>[n[0]-t[0],n[1]-t[1],n[2]-t[2]],Kr=n=>Math.hypot(...n),ma=n=>{const t=Kr(n)||1;return n.map(e=>e/t)},ga=(n,t,e)=>[n[0]+t[0]*e,n[1]+t[1]*e,n[2]+t[2]*e],Ml=12*Math.PI/180;function Nc(n,t){const e=n.y-xi;if(n.kind==="warden"){const i=n.scale??1,s=[[0,1,0],[0,2.35,0],[0,3.55,0],[-.49,2.6,0],[.49,2.6,0]].map(([r,a,o])=>[n.x+r*i,e+a*i,n.z+o*i]);if(t){const r=Math.cos(n.yaw),a=Math.sin(n.yaw),o=t[0]-n.x,c=t[2]-n.z,l=Math.max(-.76*i,Math.min(.76*i,r*o-a*c)),u=Math.max(-.62*i,Math.min(.58*i,a*o+r*c)),d=Math.max(e+.13,Math.min(e+4.69*i,t[1]));s.push([n.x+r*l+a*u,d,n.z-a*l+r*u])}return s}return[[0,1.22,0],[0,1.92,0],[-.28,1.22,0],[.28,1.22,0],[0,.46,0]].map(([i,s,r])=>[n.x+i,e+s,n.z+r])}const Uc=(n,t)=>[-Math.sin(n)*Math.cos(t),Math.sin(t),-Math.cos(n)*Math.cos(t)];function Fc(n,t,e){const i=ma(Math.abs(n[1])>.999?[1,0,0]:[-n[2],0,n[0]]),s=[i[1]*n[2]-i[2]*n[1],i[2]*n[0]-i[0]*n[2],i[0]*n[1]-i[1]*n[0]];return ma([n[0]+i[0]*t+s[0]*e,n[1]+i[1]*t+s[1]*e,n[2]+i[2]*t+s[2]*e])}function Fx(n,t,e=!1,i=1){const s=Pe[n],r=s.falloff,a=r?1-(1-r.minimum)*Math.max(0,Math.min(1,(t-r.start)/(r.end-r.start))):1;return Math.max(1,Math.round(s.damage*ya(i)*a*(e?s.headshot??1:1)))}function Id(n,t,e,i){const s=Math.cos(e.yaw),r=Math.sin(e.yaw),a=n[0]-e.x,o=n[2]-e.z,c={x:s*a-r*o,y:n[1]-(e.y-xi),z:r*a+s*o},l={x:s*t[0]-r*t[2],y:t[1],z:r*t[0]+s*t[2]};if(e.kind==="warden"){const h=e.scale??1,p=Go(c,l,{minX:-.77*h,maxX:.77*h,minY:.12,maxY:4.7*h,minZ:-.63*h,maxZ:.59*h},i);return p===null?void 0:{distance:p,kind:"body"}}const u=[{kind:"head",minX:-.26,maxX:.26,minY:1.66,maxY:2.18,minZ:-.26,maxZ:.26},{kind:"body",minX:-.15,maxX:.15,minY:1.63,maxY:1.66,minZ:-.14,maxZ:.14},{kind:"body",minX:-.34,maxX:.34,minY:.81,maxY:1.63,minZ:-.19,maxZ:.19},...[-1,1].map(h=>({kind:"body",minX:h*.48-.08,maxX:h*.48+.08,minY:1.03,maxY:1.61,minZ:-.08,maxZ:.08})),...[-1,1].map(h=>({kind:"body",minX:h*.22-.095,maxX:h*.22+.095,minY:.125,maxY:.795,minZ:-.095,maxZ:.095}))];let d;for(const h of u){const p=Go(c,l,h,i);p!==null&&(!d||p<d.distance)&&(d={distance:p,kind:h.kind})}return d}function jr(n,t,e,i,s=Ld){let r=Si(ds(n),ds(t),e,s),a=r<e?"wall":"range",o;for(const c of i){if(!c.alive)continue;const l=Id(n,t,c,r);l&&l.distance<r&&(r=l.distance,a=l.kind,o=c.id)}return{dir:t,end:ga(n,t,r),kind:a,targetId:o}}function Dd(n,t,e,i,s=Math.random,r=Ld,a=!1,o=1){const c=Pe[n],l=Ma(n,o),u=c.damage*ya(o),d=a?c.scopedSpread??c.spread:c.spread,h=[],p=new Map,g=(_,m,f,S)=>{const E=p.get(_);E?(E.damage+=m,E.headshot||=f):p.set(_,{targetId:_,damage:m,headshot:f,position:S})};if(n==="flame"){const _=Ml;h.push(jr(t,e,l,i,r));for(let m=0;m<24;m++){const f=Math.sqrt((m+.5)/24)*Math.tan(_),S=m*2.399963,E=Fc(e,Math.cos(S)*f,Math.sin(S)*f);h.push(jr(t,E,l,i,r))}for(const m of i){if(!m.alive)continue;let f;for(const S of Nc(m,t)){const E=yo(S,t),M=Kr(E);if(M>l||M<.001)continue;const w=ma(E),y=Math.acos(Math.max(-1,Math.min(1,Ux(w,e))));y<=_&&Si(ds(t),ds(w),M,r)>=M-.001&&(!f||y<f.angle)&&(f={position:S,angle:y})}f&&g(m.id,Math.round(u*(1-.4*f.angle/_)),!1,f.position)}}else{for(let _=0;_<(c.pellets??1);_++){const m=Fc(e,(s()-.5)*d,(s()-.5)*d),f=jr(t,m,l,i,r);h.push(f),n!=="rocket"&&f.targetId&&g(f.targetId,Fx(n,Kr(yo(f.end,t)),f.kind==="head",o),f.kind==="head",f.end)}if(n==="rocket"){const _=h[0];if(_.kind!=="range"){const m=ga(_.end,_.dir,-.06);for(const f of i){if(!f.alive)continue;if(f.id===_.targetId){g(f.id,Math.round(u),!1,_.end);continue}const S=f.kind==="warden"?Nc(f,m):[[f.x,f.y-xi+1.22,f.z]];let E=c.splash??0,M;for(const w of S){const y=yo(w,m),A=Kr(y);A<E&&Si(ds(m),ds(ma(y)),A,r)>=A-.001&&(E=A,M=w)}M&&g(f.id,Math.max(1,Math.round(u*(1-E/c.splash))),!1,M)}}}}return{rays:h,hits:[...p.values()]}}class Ox{constructor(t="kill"){this.prefix=t}states=new Map;sequence=0;reset(){this.states.clear()}death(t){this.states.delete(t)}remove(t){this.states.delete(t)}record(t,e,i,s,r){this.death(e.id);const a=this.states.get(t.id),o=t.alive?{last:r,multi:a&&r-a.last<=4e3?a.multi+1:1,streak:(a?.streak??0)+1}:{last:r,multi:0,streak:0};t.alive&&this.states.set(t.id,o);const c={3:"勢如破竹",5:"大殺特殺",7:"無人能擋",10:"戰場主宰"};return{eventId:`${this.prefix}:${++this.sequence}`,at:r,attackerId:t.id,attackerName:t.name,victimId:e.id,victimName:e.name,weapon:i,headshot:s,multi:o.multi,streak:o.streak,title:c[o.streak]}}}function Nd(n,t,e,i,s,r=1){const a=Ma(n,r),o=Math.max(Jc,a+2),c={x:t[0],y:t[1],z:t[2]},l=Si(c,{x:e[0],y:e[1],z:e[2]},o,s);let u=l,d=l<o?"blocked":"neutral";for(const p of i){if(!p.alive)continue;const g=Id(t,e,p,u);g&&g.distance<u&&(u=g.distance,d=u<=a?"in-range":"out-of-range")}if(n!=="flame")return d;let h=1/0;for(const p of i)if(p.alive)for(const g of Nc(p,t)){const _=g[0]-t[0],m=g[1]-t[1],f=g[2]-t[2],S=Math.hypot(_,m,f);if(S<.001||S>o)continue;const E={x:_/S,y:m/S,z:f/S};E.x*e[0]+E.y*e[1]+E.z*e[2]<Math.cos(Ml)||Si(c,E,S,s)>=S-.001&&(h=Math.min(h,S))}return h<1/0?h<=a?"in-range":"out-of-range":d==="blocked"?"blocked":"neutral"}function Ud(n){return{origin:[n.x,n.y,n.z],direction:Uc(n.yaw,n.pitch)}}class Fd{constructor(t){this.root=t,this.label.className="co-aim-feedback",this.label.hidden=!0,t.append(this.label),t.addEventListener("combat:reset",this.reset),t.addEventListener("armory:open",this.reset)}label=document.createElement("span");state="";reset=()=>this.update("neutral",!1);update(t,e){const i=e&&(t==="in-range"||t==="out-of-range")?t:"neutral";i!==this.state&&(this.state=i,this.root.dataset.aimState=i,this.label.textContent=i==="in-range"?"射程內":i==="out-of-range"?"超出射程":"",this.label.hidden=i==="neutral")}dispose(){this.root.removeEventListener("combat:reset",this.reset),this.root.removeEventListener("armory:open",this.reset),delete this.root.dataset.aimState,this.label.remove()}}const Sl=.15;class Od{antialias=!0;pixelRatio;impactLimit;constructor(){const t=matchMedia("(pointer:coarse)").matches,e=navigator.deviceMemory??4,i=(navigator.hardwareConcurrency||4)<=4||e<=3;this.pixelRatio=Math.min(devicePixelRatio,t?i?1:1.6:2),this.impactLimit=i?8:16}}class kd{constructor(t,e,i){this.root=t,this.gun=e,this.coarse=i,this.shell=document.createElement("div"),this.shell.className="co-scope",this.shell.hidden=!0,this.shell.setAttribute("aria-hidden","true"),this.shell.innerHTML=`<div class="co-scope-shade"></div><div class="co-scope-frame">
      <svg viewBox="0 0 100 100" aria-hidden="true"><path fill="black" fill-rule="evenodd" d="M25 0H75L100 50 75 100H25L0 50ZM80 50a30 30 0 1 0-60 0 30 30 0 1 0 60 0"/></svg>
      <div class="co-scope-reticle"><i></i><b></b><span></span></div><div class="co-scope-stock"></div></div>`,t.append(this.shell),this.overlayCamera.position.z=1,this.overlay.add(this.plane);const s=new Lt(new we(.1,.1,1.6),new Zt({color:1053726}));s.position.set(.34,-.25,-1.15);const r=new Lt(new On(.09,.09,.34,6),new Zt({color:527120}));r.rotation.x=Math.PI/2,r.position.set(.34,-.12,-.7),this.gunParts.add(s,r),e.add(this.gunParts),this.gunParts.visible=!1,t.addEventListener("combat:reset",this.reset),t.addEventListener("armory:open",this.reset)}shell;lens=new ei(75,1,Sl,420);target=new di(256,256);overlay=new ml;overlayCamera=new La(-1,1,1,-1,0,2);material=new We({uniforms:{map:{value:this.target.texture}},depthTest:!1,depthWrite:!1,transparent:!0,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`uniform sampler2D map;varying vec2 vUv;
      void main(){
        if(distance(vUv,vec2(.5))>.5)discard;
        gl_FragColor=texture2D(map,vUv);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`});plane=new Lt(new nn(2,2),this.material);scoped=!1;gunParts=new ve;reset=()=>{this.scoped=!1,this.shell.hidden=!0,this.root.classList.remove("co-scoped")};update(t,e,i,s,r){this.scoped=t==="sniper"&&!!e.aim&&i&&!s&&!r,this.shell.hidden=!this.scoped,this.root.classList.toggle("co-scoped",this.scoped),this.root.querySelector("[data-sprint]")?.setAttribute("aria-pressed",String(!!e.sprint&&i));const a=this.root.querySelector("[data-aim]");return a&&(a.disabled=t!=="sniper",a.setAttribute("aria-pressed",String(this.scoped))),this.gunParts.visible=t==="sniper",this.scoped}render(t,e,i){if(this.gun.visible=!this.scoped,t.render(e,i),this.gun.visible=!0,!this.scoped)return;this.target.samples=Math.min(4,t.capabilities.maxSamples);const s=this.root.clientWidth,r=this.root.clientHeight,a=Math.min(r*.58,s*.44),o=a*.6;this.root.style.setProperty("--scope-size",`${a}px`),this.root.style.setProperty("--lens-size",`${o}px`);const c=Math.max(64,Math.min(this.coarse?512:768,Math.ceil(o*t.getPixelRatio())));this.target.width!==c&&this.target.setSize(c,c),this.lens.position.copy(i.position),this.lens.quaternion.copy(i.quaternion),this.lens.fov=i.fov,this.lens.zoom=4*r/o,this.lens.near=i.near,this.lens.far=i.far,this.lens.updateProjectionMatrix(),this.gun.visible=!1;const l=t.getRenderTarget(),u=t.autoClear;t.setRenderTarget(this.target),t.render(e,this.lens),t.setRenderTarget(l),this.gun.visible=!0,this.plane.scale.set(o/s,o/r,1),t.autoClear=!1,t.clearDepth(),t.render(this.overlay,this.overlayCamera),t.autoClear=u}dispose(){this.root.removeEventListener("combat:reset",this.reset),this.root.removeEventListener("armory:open",this.reset),this.reset(),this.shell.remove(),this.target.dispose(),this.plane.geometry.dispose(),this.material.dispose(),this.gunParts.traverse(t=>{t instanceof Lt&&(t.geometry.dispose(),t.material.dispose())}),this.gun.remove(this.gunParts)}}function sn(...n){const t=new Set,e=new Set,i=new Set,s=new Set;for(const r of n)r.traverse(a=>{if(a instanceof Ln&&s.add(a),(a instanceof Lt||a instanceof tr||a instanceof Pc)&&t.add(a.geometry),a instanceof Lt||a instanceof tr||a instanceof Pc||a instanceof Aa)for(const o of Array.isArray(a.material)?a.material:[a.material])e.add(o)});for(const r of s)r.dispose();for(const r of e)for(const a of Object.values(r))a instanceof Ve&&i.add(a);for(const r of i)r.dispose();for(const r of e)r.dispose();for(const r of t)r.dispose()}class Bd{constructor(t,e=!1){this.scene=t,this.coarse=e;const i=e?320:900;this.positions=new Float32Array(i*3),this.colors=new Float32Array(i*3),this.sizes=new Float32Array(i),this.alphas=new Float32Array(i),this.styles=new Float32Array(i),this.particles=Array.from({length:i},()=>({position:new P,velocity:new P,life:0,duration:1,size:0,color:new Pt,style:0}));for(const[s,r,a]of[["position",this.positions,3],["color",this.colors,3],["size",this.sizes,1],["alpha",this.alphas,1],["style",this.styles,1]])this.geometry.setAttribute(s,new Fe(r,a).setUsage(Ui));this.material=new We({transparent:!0,depthWrite:!1,depthTest:!0,blending:In,uniforms:{time:{value:0}},vertexShader:`attribute float size;attribute float alpha;attribute float style;varying vec3 vColor;varying float vAlpha;varying float vStyle;
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
      }`,vertexColors:!0}),this.points=new tr(this.geometry,this.material),this.points.frustumCulled=!1,this.group.add(this.points),this.beams=Array.from({length:e?32:64},()=>{const s=new Lt(this.cylinder,new Zt({transparent:!0,depthWrite:!1,blending:ui})),r=new Lt(this.cylinder,new Zt({color:16777215,transparent:!0,depthWrite:!1,blending:ui}));return s.visible=r.visible=!1,this.group.add(s,r),{mesh:s,core:r,life:0,duration:1}}),this.rings=Array.from({length:8},()=>{const s=new Lt(this.ringGeometry,new Zt({transparent:!0,depthWrite:!1,side:Ce,blending:ui}));return s.visible=!1,this.group.add(s),{mesh:s,life:0,duration:1,radius:1}}),this.flames=Array.from({length:e?24:48},()=>{const s=new We({transparent:!0,depthWrite:!1,depthTest:!0,side:Ce,blending:In,uniforms:{time:{value:0},opacity:{value:1}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float time;uniform float opacity;varying vec2 vUv;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}
      void main(){float n=noise(vec2(vUv.x*6.+time,vUv.y*9.-time*9.));float fine=noise(vec2(vUv.x*13.,vUv.y*17.-time*13.));float tongue=smoothstep(.25,.8,n*.75+fine*.35);float tip=1.-smoothstep(.65,1.,vUv.y);float ignition=smoothstep(0.,.06,vUv.y);vec3 color=mix(vec3(1.,.86,.34),vec3(1.,.16,.015),vUv.y);gl_FragColor=vec4(color,tongue*tip*ignition*opacity*.32);
      #include <colorspace_fragment>
      }`}),r=new Lt(this.flameGeometry,s);return r.visible=!1,this.group.add(r),{mesh:r,life:0}}),this.localFlames=this.flames.splice(0,e?5:9),t.add(this.group)}localFlames=[];localFlameTimer=0;group=new ve;particles;beams;rings;flames;flameCursor=0;flameGeometry=new On(1,.25,1,8,1,!0);cursor=0;beamCursor=0;ringCursor=0;geometry=new ge;material;points;cylinder=new On(1,1,1,6,1,!0);ringGeometry=new Ms(.88,1,48);positions;colors;sizes;alphas;styles;particle(t,e,i,s,r=0,a){const o=this.particles[this.cursor++%this.particles.length];o.position.copy(t),o.color.setHex(e),o.size=i,o.life=o.duration=s,o.style=r,o.velocity.copy(a??new P((Math.random()-.5)*2,Math.random()*2,(Math.random()-.5)*2))}beam(t,e,i,s,r=.022,a){const o=this.beams[this.beamCursor++%this.beams.length],c=e.clone().sub(t),l=c.length();if(l<.01)return;o.mesh.position.copy(t).addScaledVector(c,.5),o.core.position.copy(o.mesh.position);const u=new Gi().setFromUnitVectors(new P(0,1,0),c.normalize());o.mesh.quaternion.copy(u),o.core.quaternion.copy(u),o.mesh.scale.set(r,l,r),o.core.scale.set(r*.24,l,r*.24),o.mesh.material.color.setHex(i),o.life=o.duration=s,o.mesh.visible=o.core.visible=!0,o.localWeapon=a,o.end=a?e.clone():void 0}play(t,e,i=!0,s=!1,r=!0,a=!0){const o=Pe[t.weapon],c=new P(...t.origin),l=t.weapon;if(i&&this.muzzle(e,l),r&&l==="flame"&&!s){const u=this.coarse?3:2;for(let d=0;d<t.rays.length;d+=u){const h=t.rays[d],p=new P(...h.end),g=p.clone().sub(e),_=g.length();if(_<.1)continue;const m=this.flames[this.flameCursor++%this.flames.length];m.mesh.position.copy(e).addScaledVector(g,.5),m.mesh.quaternion.setFromUnitVectors(new P(0,1,0),g.normalize()),m.mesh.scale.set(.05+_*.018,_,.05+_*.018),m.life=.16,m.mesh.visible=!0}for(let d=0;d<t.rays.length;d+=u){const h=t.rays[d],p=c.distanceTo(new P(...h.end));for(let g=0;g<(this.coarse?5:9);g++){const _=(g+.25)/(this.coarse?5:9),m=new P(...ga(t.origin,h.dir,p*_));p*_<1.3&&m.lerp(e,1-p*_/1.3),this.particle(m,_<.2?16774592:_<.6?16752686:16729633,.15+_*.4,.12+Math.random()*.12,1,new P(0,.4,0)),g%3===0&&this.particle(m,16755780,.055,.18,0,new P(0,.3,0))}}}else if(r&&l!=="flame")for(const u of t.rays){const d=new P(...u.end);if(this.beam(e,d,o.color,l==="smg"?.075:l==="ice"?.16:.105,l==="ice"?.035:l==="rocket"?.06:.02,s?l:void 0),l==="smg"){const h=d.clone().sub(e),p=new P(-h.z,0,h.x).normalize();let g=e.clone().lerp(d,.2);for(let _=1;_<=3;_++){const m=e.clone().lerp(d,.2+_*.12).addScaledVector(p,(_%2?1:-1)*.045);this.beam(g,m,16765021,.06,.007),g=m}}if(l==="ice"||l==="rocket"||l==="smg"){const h=this.coarse?4:10;for(let p=1;p<=h;p++){const g=e.clone().lerp(d,p/(h+1));this.particle(g,o.color,l==="rocket"?.48:l==="ice"?.16:.045,l==="rocket"?.4:.2,l==="rocket"?3:l==="ice"?2:0,new P(0,.12,0))}}}if(a){for(const[u,d]of t.rays.entries())if(d.kind!=="range"&&(l!=="flame"||u%4===0)){const h=new P(...d.end);this.impact(h,l,d.kind==="head",new P(...d.dir).negate())}}a&&l==="rocket"&&t.rays[0]?.kind!=="range"&&this.explosion(new P(...ga(t.rays[0].end,t.rays[0].dir,-.1)))}updateLocalMuzzle(t,e,i,s){const r=t.clone().sub(i),a=r.length(),o=a>.001&&Si(i,r.normalize(),a,s)<a-.01;for(const c of this.beams){if(!c.life||!c.localWeapon||!c.end)continue;if(c.localWeapon!==e){c.localWeapon=void 0;continue}const l=c.end.clone().sub(t),u=l.length();if(o||u<.01){c.mesh.visible=c.core.visible=!1;continue}l.normalize();const d=Si(t,l,u,s);c.mesh.visible=c.core.visible=d>.01,c.mesh.position.copy(t).addScaledVector(l,d*.5),c.core.position.copy(c.mesh.position),c.mesh.quaternion.setFromUnitVectors(new P(0,1,0),l),c.core.quaternion.copy(c.mesh.quaternion),c.mesh.scale.y=c.core.scale.y=d}}localFlame(t,e,i,s,r,a,o=[],c=1){if(this.localFlameTimer+=a,!t)return;const l=e.clone().sub(i),u=l.length();if(u>.001&&Si(i,l.normalize(),u,r)<u-.01){for(const g of this.localFlames)g.life=0,g.mesh.visible=!1;return}const d=this.localFlameTimer>=.04;d&&(this.localFlameTimer=0);const h=s.toArray(),p=i.toArray();this.localFlames.forEach((g,_)=>{const m=_?Math.tan(Ml)*.8:0,f=_*Math.PI*2/(this.localFlames.length-1),S=jr(p,Fc(h,Math.cos(f)*m,Math.sin(f)*m),Ma("flame",c),o,r),E=new P(...S.end).sub(e),M=E.length();if(M<.05||E.dot(s)<=0){g.life=0,g.mesh.visible=!1;return}E.normalize();const w=Math.min(M,Si(e,E,M,r));if(w<.05){g.life=0,g.mesh.visible=!1;return}g.mesh.position.copy(e).addScaledVector(E,w*.5),g.mesh.quaternion.setFromUnitVectors(new P(0,1,0),E),g.mesh.scale.set(.05+w*.018,w,.05+w*.018),g.life=.16,g.mesh.visible=!0;const y=g.mesh.material;if(y.uniforms.opacity.value=1,d)for(let A=1;A<=4;A++){const x=e.clone().addScaledVector(E,w*A/5);this.particle(x,A<2?16765803:16740394,.18+A*.07,.12,1,new P(0,.25,0))}})}muzzle(t,e){const i=Pe[e].color;for(let s=0;s<(this.coarse?3:7);s++)this.particle(t,s===0?16777215:i,s===0?.32:.08,.04+Math.random()*.035)}impact(t,e,i,s){const r=e==="flame"?this.coarse?2:4:this.coarse?4:e==="ice"?16:10,a=i?16767593:Pe[e].color;this.particle(t.clone().addScaledVector(s,.035),16777215,.26,.065);for(let o=0;o<r;o++){const c=new P((Math.random()-.5)*3,Math.random()*3,(Math.random()-.5)*3).addScaledVector(s,1);this.particle(t.clone().addScaledVector(s,.04),a,e==="ice"?.12:.055,.14+Math.random()*.2,e==="ice"?2:0,c)}e==="ice"&&this.particle(t.clone().addScaledVector(s,.05),8707583,.8,.32,3,new P)}explosion(t){const e=this.coarse?25:65;for(let s=0;s<e;s++)this.particle(t,s<10?16774613:s<e*.6?16741421:9666456,s<10?.55:.85,.18+Math.random()*.55,s<e*.6?1:3,new P((Math.random()-.5)*11,Math.random()*7,(Math.random()-.5)*11));const i=this.rings[this.ringCursor++%8];i.mesh.position.copy(t),i.mesh.rotation.x=-Math.PI/2,i.life=i.duration=.35,i.radius=5,i.mesh.material.color.setHex(16751449),i.mesh.visible=!0}status(t,e){this.particle(t,Pe[e].color,e==="flame"?.22:.16,.22,e==="flame"?1:2,new P(0,.5,0))}update(t){this.material.uniforms.time.value+=t,this.particles.forEach((e,i)=>{e.life=Math.max(0,e.life-t),e.life&&(e.position.addScaledVector(e.velocity,t),(e.style===0||e.style===2)&&(e.velocity.y-=t*3)),e.position.toArray(this.positions,i*3),e.color.toArray(this.colors,i*3),this.sizes[i]=e.life?e.size*(e.style===3?1+(1-e.life/e.duration):1):0,this.alphas[i]=e.life/e.duration,this.styles[i]=e.style});for(const e of Object.values(this.geometry.attributes))e.needsUpdate=!0;for(const e of this.beams)e.life=Math.max(0,e.life-t),e.mesh.visible=e.core.visible=e.life>0,e.mesh.material.opacity=.32*e.life/e.duration,e.core.material.opacity=e.life/e.duration;for(const e of[this.flames,this.localFlames])for(const i of e){i.life=Math.max(0,i.life-t),i.mesh.visible=i.life>0;const s=i.mesh.material;s.uniforms.time.value=this.material.uniforms.time.value,s.uniforms.opacity.value=i.life/.16}for(const e of this.rings)e.life=Math.max(0,e.life-t),e.mesh.visible=e.life>0,e.mesh.scale.setScalar(Math.max(.01,e.radius*(1-e.life/e.duration))),e.mesh.material.opacity=e.life/e.duration*.65}dispose(){this.scene.remove(this.group),this.geometry.dispose(),this.material.dispose(),this.cylinder.dispose(),this.ringGeometry.dispose(),this.flameGeometry.dispose();for(const t of[this.flames,this.localFlames])for(const e of t)e.mesh.material.dispose();for(const t of this.beams)t.mesh.material.dispose(),t.core.material.dispose();for(const t of this.rings)t.mesh.material.dispose();this.group.clear()}}class zd{constructor(t){this.root=t,this.el.className="co-battle-feedback",this.feed.className="co-kill-feed",this.banner.className="co-kill-banner",this.marker.className="co-hit-marker",this.banner.hidden=this.marker.hidden=!0,this.el.append(this.feed,this.banner,this.marker),t.append(this.el),t.addEventListener("pointerdown",this.unlock),t.addEventListener("keydown",this.unlock)}el=document.createElement("div");feed=document.createElement("div");banner=document.createElement("div");marker=document.createElement("div");entries=[];numbers=[];seen=new Set;ids=[];markerLife=0;markerRank=0;bannerLife=0;bannerAttacker="";audio;disposed=!1;unlock=()=>{if(!this.audio)try{this.audio=new AudioContext}catch{return}this.audio.resume().catch(()=>{})};accept(t){return this.seen.has(t)?!1:(this.seen.add(t),this.ids.push(t),this.ids.length>1024&&this.seen.delete(this.ids.shift()),!0)}hit(t){if(!this.accept(`hit:${t.eventId}`)||!t.hits.length)return;const e=t.hits.some(i=>i.killed)?3:t.hits.some(i=>i.headshot)?2:1;(e>=this.markerRank||!this.markerLife)&&(this.markerRank=e,this.marker.className=`co-hit-marker ${e===3?"is-kill":e===2?"is-head":""}`,this.marker.hidden=!1,this.markerLife=.18),this.tone(e);for(const i of t.hits){if(i.damage<=0)continue;const s=document.createElement("span");s.className=`co-damage-number ${i.killed?"is-kill":i.headshot?"is-head":""}`,s.textContent=String(i.damage),this.el.append(s),this.numbers.push({el:s,life:.7,position:new P(...i.position)}),this.numbers.length>24&&this.numbers.shift().el.remove()}}kill(t){if(!this.accept(`kill:${t.eventId}`))return;const e=document.createElement("div");e.className="co-kill-entry";const i=document.createElement("b"),s=document.createElement("span"),r=document.createElement("b");if(i.textContent=t.attackerName,s.textContent=`${Pe[t.weapon].icon}${t.headshot?" · 爆頭":""}`,s.title=Pe[t.weapon].label,r.textContent=t.victimName,e.append(i,s,r),t.scoreAwarded!==void 0){const u=document.createElement("em");u.className="co-kill-reward",u.textContent=`+${t.scoreAwarded} 分`,e.append(u)}for(this.feed.prepend(e),this.entries.push({el:e,life:6});this.entries.length>5;)this.entries.shift().el.remove();const a=t.multi>=2?["","","雙殺","三連殺","四連殺","五連殺"][t.multi]??`${t.multi} 連殺`:"";if(!a&&!t.title)return;const o=this.bannerAttacker===t.attackerId&&this.bannerLife>0;this.bannerAttacker=t.attackerId,this.banner.replaceChildren();const c=document.createElement("small"),l=document.createElement("strong");c.textContent=t.attackerName,l.textContent=[a,t.title].filter(Boolean).join(" · "),this.banner.append(c,l),this.banner.hidden=!1,this.bannerLife=2,o||(this.banner.classList.remove("is-entering"),this.banner.offsetWidth,this.banner.classList.add("is-entering"))}wardenWarning(){this.playTone(360,510,.16,0),this.playTone(510,710,.22,.18)}tone(t){this.playTone(t===3?660:t===2?1040:780,t===3?980:500,.1,0)}playTone(t,e,i,s){const r=this.audio;if(!r||r.state!=="running")return;const a=r.currentTime+s,o=r.createOscillator(),c=r.createGain();o.type="sine",o.frequency.setValueAtTime(t,a),o.frequency.exponentialRampToValueAtTime(e,a+i*.75),c.gain.setValueAtTime(.045,a),c.gain.exponentialRampToValueAtTime(.001,a+i*.9),o.connect(c).connect(r.destination),o.start(a),o.stop(a+i),o.onended=()=>{o.disconnect(),c.disconnect()}}update(t,e){this.disposed||(this.markerLife=Math.max(0,this.markerLife-t),this.markerLife||(this.marker.hidden=!0,this.markerRank=0),this.bannerLife=Math.max(0,this.bannerLife-t),this.banner.hidden=this.bannerLife===0,this.banner.style.opacity=String(Math.min(1,this.bannerLife/.25)),this.entries=this.entries.filter(i=>(i.life-=t,i.life<=0?(i.el.remove(),!1):(i.el.style.opacity=String(Math.min(1,i.life/.4)),!0))),this.numbers=this.numbers.filter(i=>{if(i.life-=t,i.life<=0)return i.el.remove(),!1;const s=i.position.clone().project(e),r=s.z>=-1&&s.z<=1&&Math.abs(s.x)<1.1&&Math.abs(s.y)<1.1;return i.el.hidden=!r,i.el.style.left=`${(s.x*.5+.5)*100}%`,i.el.style.top=`calc(${(-s.y*.5+.5)*100}% - ${(1-i.life/.7)*34}px)`,i.el.style.opacity=String(Math.min(1,i.life/.2)),!0}))}dispose(){this.disposed=!0,this.root.removeEventListener("pointerdown",this.unlock),this.root.removeEventListener("keydown",this.unlock),this.audio?.close().catch(()=>{}),this.el.remove(),this.entries=[],this.numbers=[],this.seen.clear(),this.ids=[]}}const bl=ep.filter(([n,t])=>n>Ni.minX+1&&n<Ni.maxX-1&&t>Ni.minZ+1&&t<Ni.maxZ-1&&!nr.some(e=>Fo(n,t,e,2))&&tl(n,t)===0&&!wa(n,t,.75)),kx=(n,t)=>t&&n[0]===t[0]&&n[1]===t[1],Bx=(n,t)=>Math.hypot(n[0]-t.x,n[1]-t.z),zx=(n,t)=>[...n[Math.min(n.length-1,Math.max(0,Math.floor(t()*n.length)))]];function Hx(n,t,e=Math.random,i=bl){const s=i.filter(c=>!kx(c,t));if(!s.length)throw new Error("No legal respawn candidates");const r=n.filter(c=>c.alive!==!1),a=s.map(c=>({point:c,distance:r.reduce((l,u)=>Math.min(l,Bx(c,u)),1/0)})),o=a.filter(c=>c.distance>=20).map(c=>c.point);return zx(o.length?o:a.sort((c,l)=>l.distance-c.distance).slice(0,3).map(c=>c.point),e)}const Hd=[...bl.map(([n,t])=>({x:n,y:0,z:t})),...Oo];function Gx(n){return n==="smg"?[Oo[0]]:n==="shotgun"?[Oo[1]]:Hd.filter(t=>t.y===0)}function Vx(n,t,e,i=Math.random,s=Hd){const r=[...n.filter(o=>o.alive!==!1),...t],a=s.filter(o=>(!e||o.x!==e.x||o.y!==e.y||o.z!==e.z)&&r.every(c=>Math.hypot(o.x-c.x,o.y-(c.y??0),o.z-c.z)>=8));return a.length?{...a[Math.min(a.length-1,Math.max(0,Math.floor(i()*a.length)))]}:null}const ir=2,wl=.5,El=16,Gd=.1,Vd="chroma-mouse-sensitivity";function Wd(n){return!Number.isFinite(n)||n<wl||n>El?ir:Math.round(n*10)/10}function Wx(){try{const n=localStorage.getItem(Vd);return n===null||n.trim()===""?ir:Wd(Number(n))}catch{return ir}}let Oc=Wx();const kc=new Set,Na=()=>Oc;function _a(n){Oc=Wd(n);try{localStorage.setItem(Vd,String(Oc))}catch{}kc.forEach(t=>t())}function Xd(n){return kc.add(n),()=>{kc.delete(n)}}let Xx=0;class qd{constructor(t,e,i,s=!1,r){this.root=t,this.onOpen=e,this.onClose=i,this.roomActions=r;const a=`co-settings-${++Xx}`;this.shell=document.createElement("div"),this.shell.dataset.gameUi="",this.shell.className="co-settings-shell",this.shell.innerHTML=`<button type="button" class="co-settings-trigger" aria-controls="${a}" aria-expanded="false">${this.coarse?"設定":"設定 · F2"}</button>
      <p class="co-lock-hint" hidden>點擊場景繼續遊戲 · F2 開啟設定</p>
      <div class="co-settings-overlay" hidden>
        <section id="${a}" class="co-settings-card" role="dialog" aria-modal="true" aria-labelledby="${a}-title" tabindex="-1">
          <p class="co-settings-eyebrow">CHROMA OPS</p><h2 id="${a}-title">遊戲設定</h2>
          <div class="co-sensitivity"><label for="${a}-range">視角靈敏度 <output for="${a}-range"></output></label>
          <input id="${a}-range" type="range" min="${wl}" max="${El}" step="${Gd}">
          <p>滑鼠與觸控共用倍率，1 倍為原本手感。設定會自動儲存。</p>
          <button type="button" data-reset>恢復預設（2 倍）</button></div>
          <p class="co-settings-status">${s?"對戰仍在進行，你仍可能受到攻擊":"單人遊戲已暫停"}</p>
          ${r?`<div class="co-room-actions"><p>房間 <b data-room-code></b></p><button type="button" data-invite>複製邀請連結</button>${r.isHost?'<button type="button" data-end>結束本局並回房間</button><div data-end-confirmation hidden><p>結束本局並讓所有人回到原房間？</p><button type="button" data-confirm-end>確認結束本局</button><button type="button" data-cancel-end>繼續對戰</button></div>':""}<button type="button" data-leave>離開房間</button><p data-room-status role="status"></p></div>`:""}
          <button type="button" class="co-settings-continue" data-continue>繼續遊戲</button>
          <p class="co-settings-help">${this.coarse?"點擊「繼續遊戲」返回戰場":"F2 / Esc 關閉 · 關閉後點擊場景繼續"}</p>
        </section>
      </div>`;const o=this.shell.querySelector("[data-room-code]");o&&r&&(o.textContent=r.code),t.classList.add("co-has-settings"),t.append(this.shell),this.panel=this.shell.querySelector(".co-settings-overlay"),this.slider=this.shell.querySelector("input"),this.output=this.shell.querySelector("output"),this.trigger=this.shell.querySelector(".co-settings-trigger"),this.hint=this.shell.querySelector(".co-lock-hint"),this.shell.addEventListener("click",this.onClick),this.slider.addEventListener("input",this.onInput),window.addEventListener("keydown",this.onKey,!0),document.addEventListener("focusin",this.onFocus),document.addEventListener("pointerlockchange",this.updateHint),document.addEventListener("pointerlockerror",this.updateHint),this.unsubscribe=Xd(this.render),this.render(),this.updateHint()}shell;panel;slider;output;trigger;hint;previousFocus=null;unsubscribe;open=!1;active=!0;coarse=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>0;get isOpen(){return this.open}render=()=>{const t=Na();this.slider.value=String(t),this.slider.setAttribute("aria-valuetext",`${t.toFixed(1)} 倍`),this.output.value=`${t.toFixed(1)} 倍`};onInput=()=>_a(Number(this.slider.value));onClick=t=>{t.stopPropagation();const e=t.target;if(e.closest(".co-settings-trigger"))this.show();else if(e.closest("[data-reset]"))_a(ir);else if(e.closest("[data-leave]"))this.roomActions?.onLeave();else if(e.closest("[data-end]"))this.endConfirmation(!0);else if(e.closest("[data-confirm-end]"))this.endConfirmation(!1),this.roomActions?.onEnd();else if(e.closest("[data-cancel-end]"))this.endConfirmation(!1);else if(e.closest("[data-invite]")){const i=new URL(location.href);i.searchParams.set("room",this.roomActions?.code??""),navigator.clipboard?.writeText(i.toString()).then(()=>this.inviteStatus("邀請連結已複製")).catch(()=>this.inviteStatus("無法複製，請分享房間碼"))}else e.closest("[data-continue]")&&this.close(!this.coarse)};inviteStatus(t){const e=this.shell.querySelector("[data-room-status]");e&&(e.textContent=t)}endConfirmation(t){const e=this.shell.querySelector("[data-end-confirmation]");e&&(e.hidden=!t,t&&e.querySelector("[data-cancel-end]")?.focus())}onFocus=t=>{this.open&&!this.panel.contains(t.target)&&this.slider.focus()};onKey=t=>{if(!this.active)return;const e=t.target instanceof HTMLElement&&t.target.closest("input, textarea, select, [contenteditable]");if(t.key==="F2"&&(this.open||!e)){t.preventDefault(),t.stopImmediatePropagation(),t.repeat||(this.open?this.close(!1):this.show());return}if(this.open){if(t.key==="Escape")t.preventDefault(),t.stopImmediatePropagation(),this.close(!1);else if(t.key==="Tab"){const i=Array.from(this.panel.querySelectorAll("input, button")).filter(a=>!a.closest("[hidden]")),s=i[0],r=i[i.length-1];t.shiftKey&&document.activeElement===s?(t.preventDefault(),r.focus()):!t.shiftKey&&document.activeElement===r&&(t.preventDefault(),s.focus())}}};show(){!this.active||this.open||(this.previousFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.open=!0,this.panel.hidden=!1,this.trigger.setAttribute("aria-expanded","true"),this.onOpen(),document.pointerLockElement===this.root&&document.exitPointerLock?.(),this.slider.focus(),this.updateHint())}close(t=!1,e=!0){this.open&&(this.open=!1,this.endConfirmation(!1),this.panel.hidden=!0,this.trigger.setAttribute("aria-expanded","false"),e&&((this.previousFocus?.isConnected?this.previousFocus:this.trigger).focus({preventScroll:!0}),this.onClose(t)),this.updateHint())}setActive(t){this.active=t,t||this.close(!1,!1),this.shell.hidden=!t,this.updateHint()}updateHint=()=>{(!this.active||this.open)&&document.pointerLockElement===this.root&&document.exitPointerLock?.(),this.hint.hidden=this.coarse||!this.active||this.open||document.pointerLockElement===this.root};dispose(){this.active=!1,this.close(!1,!1),this.unsubscribe(),window.removeEventListener("keydown",this.onKey,!0),document.removeEventListener("focusin",this.onFocus),document.removeEventListener("pointerlockchange",this.updateHint),document.removeEventListener("pointerlockerror",this.updateHint),this.shell.removeEventListener("click",this.onClick),this.slider.removeEventListener("input",this.onInput),this.root.classList.remove("co-has-settings"),this.shell.remove()}}const ru=()=>({moveX:0,moveY:0,lookX:0,lookY:0,shoot:!1,jump:!1,reload:!1,switchWeapon:0,sprint:!1,aim:!1});class Yd{constructor(t){this.onReset=t}state=ru();set(t){Object.assign(this.state,t),(t.reload||t.switchWeapon)&&(this.state.aim=!1)}addLook(t,e){this.state.lookX+=t,this.state.lookY+=e}getState(){const t={...this.state};return this.state.lookX=0,this.state.lookY=0,this.state.jump=!1,this.state.reload=!1,this.state.switchWeapon=0,t}get aiming(){return!!this.state.aim}get sprinting(){return!!this.state.sprint}clearCombat(){this.set({shoot:!1,aim:!1,lookX:0,lookY:0,jump:!1,reload:!1,switchWeapon:0})}reset(){const t=this.state.moveX||this.state.moveY||this.state.sprint||this.state.aim||this.state.shoot||this.state.jump;this.state=ru(),t&&this.onReset?.()}}class $d{constructor(t,e){this.el=t,this.input=e,window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onKey),document.addEventListener("mousemove",this.onMove),t.addEventListener("contextmenu",this.onContext),t.addEventListener("combat:reset",this.reset),t.addEventListener("armory:open",this.clearCombat),document.addEventListener("visibilitychange",this.onVisibility),t.tabIndex=-1,document.addEventListener("pointerlockchange",this.onLockChange),window.addEventListener("blur",this.reset),t.addEventListener("mousedown",this.onDown),window.addEventListener("mouseup",this.onUp)}keys=new Set;enabled=!0;get canPlay(){return this.enabled&&document.pointerLockElement===this.el}get armoryOpen(){return!!this.el.querySelector(".co-armory:not([hidden])")}clearCombat=()=>this.input.clearCombat();reset=()=>{this.keys.clear(),this.input.reset()};onLockChange=()=>{this.reset(),this.canPlay&&this.el.focus({preventScroll:!0})};onKey=t=>{const e=t.key.toLowerCase();if(t.type==="keyup"){this.keys.delete(e);return}const i=["w","a","s","d","shift"].includes(e);if(!this.canPlay||t.target instanceof HTMLElement&&t.target.closest(i?"input, textarea, select, [contenteditable]":"input, button, textarea, select, [contenteditable]")||this.armoryOpen&&!i||!["w","a","s","d"," ","r","q","1","2","3","4","5","6","7","shift"].includes(e))return;t.preventDefault();const s=!t.repeat&&!this.keys.has(e);this.keys.add(e),e===" "&&s&&this.input.set({jump:!0}),e==="r"&&this.input.set({reload:!0}),/^[1-7]$/.test(e)&&this.input.set({switchWeapon:+e})};onMove=t=>{if(this.canPlay&&!this.armoryOpen){const e=Na();this.input.addLook(t.movementX*e,t.movementY*e)}};onDown=t=>{t.button===2&&this.canPlay&&!this.armoryOpen&&(t.preventDefault(),this.input.set({aim:!0})),t.button===0&&this.canPlay&&!this.armoryOpen&&!(t.target instanceof HTMLElement&&t.target.closest("[data-game-ui], .co-armory, button, input"))&&this.input.set({shoot:!0})};onUp=t=>{t.button===0&&this.input.set({shoot:!1}),t.button===2&&this.input.set({aim:!1})};onContext=t=>t.preventDefault();onVisibility=()=>{document.hidden&&this.reset()};setEnabled(t){this.enabled=t,this.reset()}update(){if(!this.canPlay){this.reset();return}this.input.set({sprint:this.keys.has("shift"),moveX:(this.keys.has("d")?1:0)-(this.keys.has("a")?1:0),moveY:(this.keys.has("w")?1:0)-(this.keys.has("s")?1:0)})}dispose(){this.reset(),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onKey),document.removeEventListener("mousemove",this.onMove),document.removeEventListener("pointerlockchange",this.onLockChange),window.removeEventListener("blur",this.reset),this.el.removeEventListener("contextmenu",this.onContext),this.el.removeEventListener("combat:reset",this.reset),this.el.removeEventListener("armory:open",this.clearCombat),document.removeEventListener("visibilitychange",this.onVisibility),this.el.removeEventListener("mousedown",this.onDown),window.removeEventListener("mouseup",this.onUp)}}class Zd{constructor(t,e){this.el=t,this.input=e,t.classList?.toggle("co-touch-controls",!0),this.portrait?.addEventListener?.("change",this.reset),window.PointerEvent?(t.addEventListener("pointerdown",this.onPointerDown,this.options),t.addEventListener("pointermove",this.onPointerMove,this.options),t.addEventListener("pointerup",this.onPointerUp,this.options),t.addEventListener("pointercancel",this.onPointerUp,this.options)):(t.addEventListener("touchstart",this.onTouchStart,this.options),t.addEventListener("touchmove",this.onTouchMove,this.options),t.addEventListener("touchend",this.onTouchEnd,this.options),t.addEventListener("touchcancel",this.onTouchEnd,this.options)),t.addEventListener("lostpointercapture",this.onPointerUp),t.addEventListener("combat:reset",this.reset),t.addEventListener("armory:open",this.clearCombat),t.addEventListener("tactical:open",this.clearCombat),window.addEventListener("blur",this.reset),window.addEventListener("orientationchange",this.reset),document.addEventListener("visibilitychange",this.onVisibility)}enabled=!0;setEnabled(t){this.enabled=t,this.reset()}portrait=window.matchMedia?.("(orientation: portrait)");isGameTarget=t=>!this.el.querySelector(".co-armory:not([hidden])")&&!(t instanceof HTMLElement&&t.closest(".co-armory, [data-game-ui]"));joyId=null;lookId=null;shootId=null;ox=0;oy=0;lx=0;ly=0;joyTravel=52;options={passive:!1};reset=()=>{this.joyId=null,this.lookId=null,this.shootId=null,this.input.reset(),this.el.style.setProperty("--joy-x","0px"),this.el.style.setProperty("--joy-y","0px")};clearCombat=()=>{this.lookId=null,this.shootId=null,this.input.clearCombat()};stopShooting=()=>{this.shootId=null,this.input.set({shoot:!1})};onVisibility=()=>{document.hidden&&this.reset()};begin=(t,e,i,s)=>{const r=this.el.getBoundingClientRect();if(!this.enabled||this.portrait?.matches||!this.isGameTarget(s))return;const a=s instanceof HTMLElement?s.closest("[data-fire],[data-jump],[data-reload],[data-weapon],[data-sprint],[data-aim]"):null;if(a?.matches("[data-sprint]"))this.input.set({sprint:!this.input.sprinting});else if(a?.matches("[data-aim]"))this.input.set({aim:!this.input.aiming});else if(a?.matches("[data-jump]"))this.input.set({jump:!0});else if(a?.matches("[data-reload]"))this.input.set({reload:!0});else if(a?.matches("[data-weapon]"))this.stopShooting(),this.el.dispatchEvent(new Event("armory"));else if(a?.matches("[data-fire]"))this.shootId=t,this.input.set({shoot:!0});else if(e<r.left+r.width*.48&&this.joyId===null){this.joyId=t,this.ox=e,this.oy=i;const o=this.el.querySelector(".co-joy")?.getBoundingClientRect().width;this.joyTravel=o?o*.42:52}else this.lookId===null&&(this.lookId=t,this.lx=e,this.ly=i)};movePoint=(t,e,i)=>{if(!(!this.enabled||this.portrait?.matches)){if(t===this.joyId){const s=e-this.ox,r=i-this.oy,a=1/Math.max(this.joyTravel,Math.hypot(s,r));this.input.set({moveX:Math.max(-1,Math.min(1,s/this.joyTravel)),moveY:Math.max(-1,Math.min(1,-r/this.joyTravel))}),this.el.style.setProperty("--joy-x",`${s*a*55}%`),this.el.style.setProperty("--joy-y",`${r*a*55}%`)}if(t===this.lookId){const s=Na();this.input.addLook((e-this.lx)*s,(i-this.ly)*s),this.lx=e,this.ly=i}}};end=t=>{t===this.joyId&&(this.joyId=null,this.input.set({moveX:0,moveY:0}),this.el.style.setProperty("--joy-x","0px"),this.el.style.setProperty("--joy-y","0px")),t===this.lookId&&(this.lookId=null),t===this.shootId&&(this.shootId=null,this.input.set({shoot:!1}))};onPointerDown=t=>{!this.enabled||this.portrait?.matches||!this.isGameTarget(t.target)||(t.preventDefault(),this.begin(t.pointerId,t.clientX,t.clientY,t.target),(t.pointerId===this.joyId||t.pointerId===this.lookId||t.pointerId===this.shootId)&&this.el.setPointerCapture?.(t.pointerId))};onPointerMove=t=>{!this.enabled||t.pointerId!==this.joyId&&!this.isGameTarget(t.target)||(t.preventDefault(),this.movePoint(t.pointerId,t.clientX,t.clientY))};onPointerUp=t=>{this.enabled&&this.isGameTarget(t.target)&&t.preventDefault(),this.end(t.pointerId)};onTouchStart=t=>{if(!(!this.enabled||!this.isGameTarget(t.target))){t.preventDefault();for(const e of Array.from(t.changedTouches))this.begin(e.identifier,e.clientX,e.clientY,t.target)}};onTouchMove=t=>{if(this.enabled)for(const e of Array.from(t.changedTouches))e.identifier!==this.joyId&&!this.isGameTarget(t.target)||(t.preventDefault(),this.movePoint(e.identifier,e.clientX,e.clientY))};onTouchEnd=t=>{this.enabled&&this.isGameTarget(t.target)&&t.preventDefault();for(const e of Array.from(t.changedTouches))this.end(e.identifier)};dispose(){this.el.classList?.toggle("co-touch-controls",!1),this.portrait?.removeEventListener?.("change",this.reset),this.el.removeEventListener("lostpointercapture",this.onPointerUp),this.el.removeEventListener("tactical:open",this.clearCombat),this.el.removeEventListener("armory:open",this.clearCombat),this.el.removeEventListener("combat:reset",this.reset),this.reset(),window.PointerEvent?(this.el.removeEventListener("pointerdown",this.onPointerDown),this.el.removeEventListener("pointermove",this.onPointerMove),this.el.removeEventListener("pointerup",this.onPointerUp),this.el.removeEventListener("pointercancel",this.onPointerUp)):(this.el.removeEventListener("touchstart",this.onTouchStart),this.el.removeEventListener("touchmove",this.onTouchMove),this.el.removeEventListener("touchend",this.onTouchEnd),this.el.removeEventListener("touchcancel",this.onTouchEnd)),window.removeEventListener("blur",this.reset),window.removeEventListener("orientationchange",this.reset),document.removeEventListener("visibilitychange",this.onVisibility)}}class qx{constructor(t,e=()=>0){this.boxes=t,this.heightAt=e}groundHeight(t,e){return this.heightAt(t,e)}blocked(t,e,i=.42){return wa(t,e,i,0,this.boxes)}rayBlocked(t,e){return!!this.firstWallHit(t,e.clone().sub(t).normalize(),t.distanceTo(e))}firstWallHit(t,e,i=30){const s=Si(t,e,i,{boxes:this.boxes,heightAt:this.heightAt});return s<i?t.clone().addScaledVector(e,s):null}}class Yx{constructor(t){this.points=t}previous=new Map;choose(t,e="player"){const i=Hx(t.map(s=>({x:s.position.x,z:s.position.z,alive:s.alive})),this.previous.get(e),Math.random,this.points);return this.previous.set(e,i),i}}class $x{timers=new Map;kill(t){this.timers.set(t,3)}update(t,e){for(const[i,s]of this.timers)s<=t?(this.timers.delete(i),e(i)):this.timers.set(i,s-t)}}class Zx{kills=0;deaths=0;onKill(){this.kills++}onDeath(){this.deaths++}}class Kd{constructor(t){this.el=t}flash=0;directionTime=0;dir="up";damage(t,e,i,s){const r=e.clone().sub(i);r.y=0,r.normalize(),s.y=0,s.normalize();const a=r.dot(s),o=r.x*s.z-r.z*s.x;this.dir=Math.abs(a)>Math.abs(o)?a>0?"up":"down":o>0?"right":"left",this.flash=Math.min(1,Math.max(.65,this.flash+t/18)),this.directionTime=.8,this.el.classList.remove("is-hit"),this.el.offsetWidth,this.el.classList.add("is-hit")}update(t,e){this.flash=Math.max(0,this.flash-t/.45),this.directionTime=Math.max(0,this.directionTime-t);const i={up:"0rad",right:"1.5708rad",down:"3.1416rad",left:"-1.5708rad"};this.el.style.setProperty("--damage-rotation",i[this.dir]),this.el.style.setProperty("--damage-flash",String(this.flash*.72)),this.el.style.setProperty("--low-hp",String(e<=30?.1+(30-e)/180:0)),this.el.style.setProperty("--damage-opacity",String(this.directionTime?Math.min(1,this.directionTime*2):0)),this.flash||this.el.classList.remove("is-hit")}dispose(){this.el.classList.remove("is-hit")}}class Kx{group=new ve;rotor=new ve;cabins=[];constructor(){const{radius:t,centerY:e,z:i}=Qe;this.rotor.position.set(0,e,i);for(const[r,a]of[[t,16761648],[t*.72,1482464]]){const o=new Lt(new Pa(r,.65,6,64),new Zt({color:a}));this.rotor.add(o)}for(let r=0;r<12;r++){const a=new Lt(new we(.3,t*2,.3),new Zt({color:16777215}));a.rotation.z=r*Math.PI/12,this.rotor.add(a)}const s=new Lt(new On(1.6,1.6,10,12),new Zt({color:5625599}));s.rotation.x=Math.PI/2,s.position.set(0,e,i-2),this.group.add(s,this.rotor);for(let r=0;r<Qe.cabins;r++){const a=sa(r,0).map(o=>{const c=new Lt(new we(o.maxX-o.minX,o.maxY-o.minY,o.maxZ-o.minZ),new Zt({color:o.color}));return this.group.add(c),c});this.cabins.push(a)}this.update(0)}update(t){this.rotor.rotation.z=t/Qe.period*Math.PI*2,this.cabins.forEach((e,i)=>sa(i,t).forEach((s,r)=>e[r].position.set((s.minX+s.maxX)/2,(s.minY+s.maxY)/2,(s.minZ+s.maxZ)/2)))}dispose(){this.group.traverse(t=>{t instanceof Lt&&(t.geometry.dispose(),t.material.dispose())})}}const au=[It(0,0,Ni.width,Ni.depth,0,1685980),It(0,0,78,62,0,14020080),It(-65,0,16,180,0,15330801),It(68,0,16,180,0,15330801),It(0,-64,184,16,0,15330801),It(0,76,210,12,0,15330801),It(0,24,112,12,0,15330801),It(0,102,92,16,0,10082783)],jx=au.flatMap((n,t)=>Uu(n,[...nr,...au.slice(t+1)]));function Jx(n){const t=new Map;for(const e of n){const i=t.get(e.maxY)||[];i.push(e),t.set(e.maxY,i)}return[...t.values()].flatMap(e=>e.flatMap((i,s)=>Uu(i,e.slice(s+1).filter(r=>r.minX<i.maxX&&r.maxX>i.minX&&r.minZ<i.maxZ&&r.maxZ>i.minZ))))}function ou(n){return n.maxY===0&&!nr.some(t=>Math.min(n.maxX,t.maxX)>Math.max(n.minX,t.minX)&&Math.min(n.maxZ,t.maxZ)>Math.max(n.minZ,t.minZ))}const Mo=240,cu=n=>n*n*(3-2*n);function Qx(n){const t=(n%Mo+Mo)%Mo;return t<90?{phase:"day",night:0,cycleTime:t}:t<120?{phase:"dusk",night:cu((t-90)/30),cycleTime:t}:t<210?{phase:"night",night:1,cycleTime:t}:{phase:"dawn",night:1-cu((t-210)/30),cycleTime:t}}function ty(n,t){return n.environmentTime+Math.max(0,Math.min(.25,(t-n.serverTime)/1e3))}class jd{group=new ve;wheel=new Kx;boxes=Ze;spawns=bl;waypoints=Wf;lift=[];palette=[];pools=new ve;poolMaterial=new Zt({color:16768402,transparent:!0,opacity:0,depthWrite:!1});unitBox=new we(1,1,1);openTopBox=this.unitBox.clone();groundPlane=new nn(1,1).rotateX(-Math.PI/2);matrix=new ne;daySky=new Pt(1489372);sunset=new Pt(13072804);nightSky=new Pt(1051701);sky=new Pt;lastNight=-1;destroyed=new Set;breakable=new Map;groundHeight(t,e){return kn(t,e)}constructor(){this.group.add(this.wheel.group,this.pools),this.openTopBox.setIndex(Array.from(this.unitBox.index.array).filter((s,r)=>r<12||r>=18)),this.openTopBox.clearGroups();const t=new Set(Yl),e=[...Ze.filter(s=>s.maxY>0&&!t.has(s)),It(0,62,44,20,12,1608656),It(4,100,32,24,6,7953112)];this.drawSolids(e.filter(s=>!s.breakKey)),this.drawBoxes(e.filter(s=>s.breakKey)),this.drawBoxes(this.coupledDetails(Jf)),this.makeGlasshouseWindows(),this.drawBoxes(Ze.filter(s=>s.maxY<=0&&!ou(s)),void 0,!0),this.drawBoxes(Ze.filter(ou),void 0,!0,this.openTopBox),this.drawBoxes(jx,void 0,!1,this.groundPlane,!0);for(const s of Nu)this.ramp(s.x,s.z0,s.x,s.z1,s.from,s.to,s.width);this.ramp(-20.5,40,-20.5,52,0,12,9),this.ramp(-38,100,-12,100,0,6,24);for(const s of _s){s.kind==="ramp"&&this.ramp(0,s.outer,0,s.inner,0,-6,6);const r=this.sign(`B1  ${s.name}  MALL`,s.axis==="z"?0:s.outer,2.8,s.axis==="z"?s.outer:s.cross,7733217);r.rotation.y=s.name==="NORTH"?Math.PI:s.name==="WEST"?-Math.PI/2:s.name==="EAST"?Math.PI/2:0}this.makeWindows(),this.makeStreet(),this.makeMall(),this.lift=ra(0).map(s=>{const r=new Lt(new we(s.maxX-s.minX,s.maxY-s.minY,s.maxZ-s.minZ),new Zt({color:s.color}));return this.group.add(r),r});for(const s of $s)this.sign(s.name,s.x,5,s.z+12.35,s.color);this.sign("SKY WALK  /  6m",0,7.8,38.15,16761648),this.sign("FERRIS PLAZA",0,3,-85,16731800),this.sign("LIFT  0 / 6 / 12",68,13.6,25.75,16731800),this.sign(jc.name,58,5.25,116.3,10082783);const i=new Set;this.group.traverse(s=>{if(!(s instanceof Lt))return;const r=Array.isArray(s.material)?s.material:[s.material];for(const a of r){if(!(a instanceof Zt)||a===this.poolMaterial||i.has(a))continue;i.add(a);const o=a.color.getHex(),c=[15330801,14020080,10082783,16777215].includes(o),l=a.userData.glow;this.palette.push({material:a,base:a.color.clone(),night:a.userData.fixedLight?1:c?.63:.38,glow:l===void 0?void 0:new Pt(l)})}}),this.wheel.group.traverse(s=>{if(s instanceof Lt){const r=this.palette.find(a=>a.material===s.material);if(r){r.night=.85;const a=r.base.getHex();a===16761648&&(r.glow=new Pt(16742616)),a===1482464&&(r.glow=new Pt(10192383))}}}),this.update(0,0)}drawBoxes(t,e,i=!1,s=this.unitBox,r=!1){const a=new Map;for(const o of t){const c=a.get(o.color)||[];c.push(o),a.set(o.color,c)}for(const[o,c]of a){const l=new Zt({color:o});l.userData.fixedLight=i,e!==void 0&&(l.userData.glow=e);const u=new Ln(s,l,c.length);c.forEach((d,h)=>{this.matrix.makeScale(d.maxX-d.minX,r?1:d.maxY-d.minY,d.maxZ-d.minZ),this.matrix.setPosition((d.minX+d.maxX)/2,r?d.maxY:(d.minY+d.maxY)/2,(d.minZ+d.maxZ)/2),u.setMatrixAt(h,this.matrix),d.breakKey&&this.trackPart(d.breakKey,u,h,this.matrix.clone())}),u.instanceMatrix.needsUpdate=!0,this.group.add(u)}}drawSolids(t){const e=new Map,i=s=>{let r=e.get(s);return r||(r={positions:[],indices:[]},e.set(s,r)),r};for(const s of t){const r=i(s.color),a=r.positions.length/3;for(const o of[s.minY,s.maxY])r.positions.push(s.minX,o,s.minZ,s.maxX,o,s.minZ,s.maxX,o,s.maxZ,s.minX,o,s.maxZ);for(const o of[0,1,2,0,2,3,0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0])r.indices.push(a+o)}for(const s of Jx(t)){const r=i(s.color),a=r.positions.length/3;r.positions.push(s.minX,s.maxY,s.minZ,s.maxX,s.maxY,s.minZ,s.maxX,s.maxY,s.maxZ,s.minX,s.maxY,s.maxZ);for(const o of[0,2,1,0,3,2])r.indices.push(a+o)}for(const[s,r]of e){const a=new ge;a.setAttribute("position",new ae(r.positions,3)),a.setIndex(r.indices),this.group.add(new Lt(a,new Zt({color:s})))}}makeGlasshouseWindows(){const t=new Zt({color:13234669,transparent:!0,opacity:.28,depthWrite:!1}),e=new Map;for(const i of Yl){const s=i.breakKey?.split(":").slice(0,-3).join(":")??`pane:${e.size}`,r=e.get(s)??[];r.push(i),e.set(s,r)}for(const[i,s]of e){const r=new Ln(this.unitBox,t,s.length);r.name=i;const a=s[0],o=s[s.length-1];r.position.set((a.minX+o.maxX)/2,(a.minY+o.maxY)/2,(a.minZ+o.maxZ)/2),s.forEach((c,l)=>{this.matrix.makeScale(c.maxX-c.minX,c.maxY-c.minY,c.maxZ-c.minZ),this.matrix.setPosition((c.minX+c.maxX)/2-r.position.x,(c.minY+c.maxY)/2-r.position.y,(c.minZ+c.maxZ)/2-r.position.z),r.setMatrixAt(l,this.matrix),c.breakKey&&this.trackPart(c.breakKey,r,l,this.matrix.clone())}),r.instanceMatrix.needsUpdate=!0,this.group.add(r)}}trackPart(t,e,i,s){const r=this.breakable.get(t)??[];r.push(()=>{e.setMatrixAt(i,this.destroyed.has(t)?this.matrix.makeScale(0,0,0):s),e.instanceMatrix.needsUpdate=!0}),this.breakable.set(t,r)}setDestroyed(t){if(t===this.destroyed)return;const e=this.destroyed;this.destroyed=t;for(const i of new Set([...e,...t]))e.has(i)!==t.has(i)&&this.breakable.get(i)?.forEach(s=>s())}coupledDetails(t){return t.flatMap(e=>Sa(e,"decoration")).map(e=>{const i=(e.minX+e.maxX)/2,s=(e.minY+e.maxY)/2,r=(e.minZ+e.maxZ)/2;let a,o=.7;for(const c of ba(i,r,1)){if(!c.breakKey)continue;const l=Math.hypot(Math.max(0,c.minX-i,i-c.maxX),Math.max(0,c.minY-s,s-c.maxY),Math.max(0,c.minZ-r,r-c.maxZ));l<o&&(a=c.breakKey,o=l)}return{...e,breakKey:a}})}ramp(t,e,i,s,r,a,o){const c=Math.hypot(i-t,s-e),l=(s-e)/c*o/2,u=-(i-t)/c*o/2,d=Math.min(r,a)-.1,h=[t-l,r,e-u,t+l,r,e+u,i+l,a,s+u,i-l,a,s-u,t-l,d,e-u,t+l,d,e+u,i+l,d,s+u,i-l,d,s-u],p=new ge;p.setAttribute("position",new ae(h,3)),p.setIndex([0,1,2,0,2,3,4,6,5,4,7,6,0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0]),p.computeVertexNormals(),this.group.add(new Lt(p,new Zt({color:16761648,side:Ce})))}makeWindows(){const t=[];for(const e of $s)for(const i of[0,6])for(const s of[-1,1])for(const r of["x","z"])for(const[a,o]of[[-9,5.4],[-4,3.4],[4,3.4],[9,5.4]]){const c=(l,u,d,h)=>t.push(r==="x"?It(e.x+s*12.27,e.z+l,.05,u,d+h/2,13959158,d-h/2):It(e.x+l,e.z+s*12.27,u,.05,d+h/2,13959158,d-h/2));for(const l of[i+1.23,i+3.47])c(a,o,l,.08);for(const l of[a-o/2,a+o/2])c(l,.08,i+2.35,2.3);(e.name.includes("STUDIO")||e.name.includes("GALLERY"))&&c(a,.06,i+2.35,2.3),(e.name.includes("GARDEN")||e.name.includes("MARKET"))&&c(a,o,i+2.7,.06)}this.drawBoxes(this.coupledDetails(t),7733217)}makeMall(){this.drawBoxes([It(0,2,32,24,-5.98,12824031,-6),...[-14,18].map(e=>It(0,e,176,8,-5.98,5748926,-6)),...[-64,64].map(e=>It(e,2,8,40,-5.98,5748926,-6))],void 0,!0);const t=[];for(const e of Fu){this.sign(e.name,e.x,-1.4,8.2,e.color),this.sign(e.name,e.x,-1.4,-4.2,e.color);for(const i of[-4.2,8.2])t.push(It(e.x,i,8,.08,-.65,e.color,-.8))}for(const e of[-14,18])t.push(It(0,e,168,.35,-.42,7733217,-.5));for(const e of[-64,0,64])t.push(It(e,2,.35,38,-.42,16766838,-.5));this.drawBoxes(t,void 0,!0),this.sign("B1  COLOR MALL",0,-1.6,2,7733217),this.sign("NORTH EXIT",0,-1.5,-20,7733217),this.sign("SOUTH EXIT",0,-1.5,24,7733217).rotation.y=Math.PI,this.sign("WEST EXIT",-88,-1.5,9,7733217).rotation.y=Math.PI/2,this.sign("EAST EXIT",88,-1.5,9,7733217).rotation.y=-Math.PI/2}makeStreet(){const t=new On(.28,.4,3,6),e=new Ca(1,0),i=new Ln(t,new Zt({color:16754476}),Gr.length),s=new Ln(e,new Zt({color:16777215}),Gr.length*5),r=[16731818,16765774,5168565,10021195,6740479];Gr.forEach(([c,l],u)=>{this.matrix.makeTranslation(c,2.1,l),i.setMatrixAt(u,this.matrix);for(let d=0;d<5;d++){const h=d*Math.PI*2/5;this.matrix.makeScale(1.1,1.15,1.1),this.matrix.setPosition(c+Math.sin(h)*1.1,3.7+d%2*.8,l+Math.cos(h)*1.1),s.setMatrixAt(u*5+d,this.matrix),s.setColorAt(u*5+d,new Pt(r[d]))}}),this.group.add(i,s);const a=Uo.map(([c,l])=>It(c+.65,l,1.5,.65,4.9,16773841,4.6));this.drawBoxes(a,16769948);const o=new yl(4.5,16);for(const[c,l]of Uo){const u=new Lt(o,this.poolMaterial);u.rotation.x=-Math.PI/2,u.position.set(c+.65,.045,l),this.pools.add(u)}}sign(t,e,i,s,r){const a=document.createElement("canvas");a.width=512,a.height=96;const o=a.getContext("2d");o.fillStyle="#12203b",o.fillRect(0,0,512,96),o.strokeStyle="#"+r.toString(16).padStart(6,"0"),o.lineWidth=10,o.strokeRect(3,3,506,90),o.fillStyle="#ffffff",o.font="bold 32px Arial",o.textAlign="center",o.fillText(t,256,60);const c=new Zt({map:new xl(a),side:Ce});c.userData.glow=16777215;const l=new Lt(new nn(8,1.5),c);return l.position.set(e,i,s),this.group.add(l),l}update(t,e=t,i){this.wheel.update(t),ra(t).forEach((r,a)=>this.lift[a]?.position.set((r.minX+r.maxX)/2,(r.minY+r.maxY)/2,(r.minZ+r.maxZ)/2));const{night:s}=Qx(e);if(Math.abs(s-this.lastNight)>1e-5){for(const r of this.palette)r.material.color.copy(r.base),r.glow?r.material.color.lerp(r.glow,s):r.material.color.multiplyScalar(1-s*(1-r.night));this.poolMaterial.opacity=s*.16,this.pools.visible=s>.01,this.lastNight=s}i&&(s<.5?this.sky.copy(this.daySky).lerp(this.sunset,s*2):this.sky.copy(this.sunset).lerp(this.nightSky,s*2-1),i.setClearColor(this.sky))}dispose(){this.group.removeFromParent(),sn(this.group),this.group.clear()}}class Jd{position=new P(-10,1.65,-10);velocityY=0;jumpsUsed=0;supportId=null;hp=100;alive=!0;kills=0;deaths=0;yaw=0;pitch=0;color=5285631;respawn(t){this.position.set(t[0],tl(t[0],t[1])+xi,t[1]),this.velocityY=0,this.jumpsUsed=0,this.supportId=null,this.hp=100,this.alive=!0}damage(t){this.hp=Math.max(0,this.hp-t),this.hp||(this.alive=!1)}}class ey{update(t,e,i,s,r=1,a){const o={x:t.position.x,y:t.position.y,z:t.position.z,yaw:t.yaw,pitch:t.pitch,velocityY:t.velocityY,supportId:t.supportId,jumpsUsed:t.jumpsUsed,alive:t.alive};il(o,e,i,{boxes:s.boxes,heightAt:(c,l)=>s.groundHeight(c,l)},r,a),t.position.set(o.x,o.y,o.z),t.yaw=o.yaw,t.pitch=o.pitch,t.supportId=o.supportId??null,t.velocityY=o.velocityY,t.jumpsUsed=o.jumpsUsed}}class iy{constructor(t){this.spec=t,this.state={level:1,ammo:t.magazine,reloadUntil:0,quickReloadUntil:0}}state;time=0;cooldown=0;get ammo(){return this.state.ammo}get level(){return this.state.level}get capacity(){return Mi(this.spec.id,this.level)}get reserve(){return 1/0}get reloading(){return this.state.reloadUntil>this.time}get quickReloadSeconds(){return Math.max(0,this.state.quickReloadUntil-this.time)}clearBoost(){this.state.quickReloadUntil=0}update(t,e){return this.time+=t,this.cooldown=Math.max(0,this.cooldown-t),Ba(this.spec.id,this.state,this.time,!1,1),e&&!this.reloading&&this.cooldown<=0&&this.ammo>0?(this.state.ammo--,this.cooldown=this.spec.fireDelay,Ba(this.spec.id,this.state,this.time,!1,1),{fired:!0,empty:this.ammo===0,autoReload:this.reloading}):{fired:!1,empty:this.ammo===0,autoReload:!1}}reload(){Ba(this.spec.id,this.state,this.time,!0,1)}collect(t){return Bf(this.spec.id,this.state,t,this.time,1)}refill(){this.state.ammo=this.capacity,this.state.reloadUntil=0,this.cooldown=0,this.clearBoost()}addReserve(t){}}class Qd{constructor(t,e,i,s=""){this.id=t,this.name=e,this.color=i;const r=new Zt({color:i}),a=(u,d,h,p,g="body")=>{const _=new Lt(u,r);_.position.set(d,h,p),this.group.add(_),this.parts.push(_),g==="arm"&&this.arms.push(_),g==="leg"&&this.legs.push(_)};a(new we(.68,.82,.38),0,1.22,0),a(new we(.52,.52,.52),0,1.92,0),a(new we(.16,.58,.16),-.48,1.32,0,"arm"),a(new we(.16,.58,.16),.48,1.32,0,"arm"),a(new we(.19,.67,.19),-.22,.46,0,"leg"),a(new we(.19,.67,.19),.22,.46,0,"leg"),this.gun=new Lt(new we(.14,.14,.72),new Zt({color:1581102})),this.gun.position.set(.34,1.38,-.28),this.gun.rotation.x=-.22,this.group.add(this.gun);const o=document.createElement("canvas");o.width=320,o.height=72;const c=o.getContext("2d");c.fillStyle="#fff",c.font="bold 40px Arial",c.textAlign="center",c.fillText(e,160,48);const l=new Aa(new Ta({map:new xl(o),transparent:!0,depthTest:!0,depthWrite:!1}));l.position.set(0,2.9,0),l.scale.set(3.2,.72,1),this.group.add(l)}group=new ve;position=new P;deathGroup=new ve;hp=100;alive=!0;cooldown=0;parts=[];arms=[];legs=[];pieces=[];walk=0;reaction=0;gun;disposed=!1;clearPieces(){for(const t of this.pieces)t.mesh.material.dispose();this.pieces=[],this.deathGroup.clear()}dispose(){this.disposed||(this.disposed=!0,this.clearPieces(),this.group.removeFromParent(),this.deathGroup.removeFromParent(),sn(this.group),this.group.clear())}muzzlePosition(t=new P){return this.group.localToWorld(t.set(.34,1.38,-.7))}respawn(t,e){this.position.set(t,0,e),this.group.position.copy(this.position),this.hp=100,this.reaction=0,this.parts[0].material.color.setHex(this.color),this.alive=!0,this.group.visible=!0,this.deathGroup.visible=!1,this.clearPieces()}damage(t){this.hp=Math.max(0,this.hp-t),this.reaction=.16,this.hp||this.die()}hit(){this.alive&&(this.reaction=.16)}die(){this.alive=!1,this.group.visible=!1,this.clearPieces(),this.deathGroup.position.copy(this.position),this.deathGroup.visible=!0,this.pieces=this.parts.map((t,e)=>{const i=new Lt(t.geometry,t.material.clone());return i.position.copy(t.position),i.rotation.copy(t.rotation),this.deathGroup.add(i),{mesh:i,velocity:new P((Math.random()-.5)*3,2+Math.random()*2,(Math.random()-.5)*3),spin:new P(Math.random()*8,Math.random()*8,Math.random()*8),life:1.1+e*.02}})}updateVisual(t,e,i){if(!this.alive){for(const r of this.pieces)r.life-=t,r.velocity.y-=11*t,r.mesh.position.addScaledVector(r.velocity,t),r.mesh.rotation.x+=r.spin.x*t,r.mesh.rotation.y+=r.spin.y*t,r.mesh.rotation.z+=r.spin.z*t,r.mesh.visible=r.life>0;this.pieces.length&&this.pieces.every(r=>r.life<=0)&&this.clearPieces();return}this.walk+=e?t*10:t*3;const s=e?Math.sin(this.walk)*.55:0;this.legs.forEach((r,a)=>r.rotation.x=(a?1:-1)*s),this.arms.forEach((r,a)=>r.rotation.x=(i?-.72:0)+(a?1:-1)*s*.45),this.group.rotation.z=0,this.reaction=Math.max(0,this.reaction-t),this.parts[0].material.color.setHex(this.color).lerp(new Pt(16777215),this.reaction/.16*.65)}}function Bc(n,t){const e=Math.ceil(Math.hypot(t.x-n.x,t.y-n.y,t.z-n.z)*2);for(let i=0;i<=e;i++){const s=e?i/e:0,r=n.x+(t.x-n.x)*s,a=n.z+(t.z-n.z)*s,o=n.y+(t.y-n.y)*s;if(Math.abs(r-vs.x)<2.8&&Math.abs(a-vs.z)<2.8||Math.abs(r-Qe.x)<Qe.radius+4&&Math.abs(a-Qe.z)<3.5||wa(r,a,.45,o+.35)||Math.abs(Vo(r,a,o+.35)-o)>.38)return!1}return!0}let lu,hu;function tf(n=!1){const t=n?hu:lu;if(t)return t;const e=[],i=new Map,s=(o,c,l)=>(e.push({x:o,y:c,z:l,edges:[]}),e.length-1),r=(o,c)=>{(n||Bc(e[o],e[c]))&&(e[o].edges.push(c),e[c].edges.push(o))};for(let o=-144;o<=144;o+=8)for(let c=-128;c<=128;c+=8){const l={x:o,y:0,z:c};(n||Bc(l,l))&&i.set(`${o},${c}`,s(o,0,c))}for(const[o,c]of i){const[l,u]=o.split(",").map(Number);for(const[d,h]of[[8,0],[0,8],[8,8],[8,-8]]){const p=i.get(`${l+d},${u+h}`);p!==void 0&&r(c,p)}}const a=[];for(const o of[-88,-64,-51.5,-42.5,-33.5,-24.5,0,24.5,33.5,42.5,51.5,64,88])for(const c of[-14,18])a.push(s(o,-6,c));for(const o of[-88,-64,0,64,88])a.push(s(o,-6,9));for(const o of a)for(const c of a)o<c&&Math.hypot(e[o].x-e[c].x,e[o].z-e[c].z)<=30&&r(o,c);for(const o of _s){const c=Math.sign(o.outer-o.inner),l=(h,p)=>o.axis==="z"?{x:0,y:p,z:h}:{x:h,y:p,z:9};let u=-1,d=-1;for(let h=0;h<=14;h++){const p=Math.max(0,Math.min(1,(h-1)/12)),g=l(h===0?o.outer+c:h===14?o.inner-c:o.outer+(o.inner-o.outer)*p,-6*p),_=s(g.x,g.y,g.z);u>=0?r(u,_):d=_,u=_}for(const h of i.values())Math.hypot(e[h].x-e[d].x,e[h].z-e[d].z)<13&&r(d,h);for(const h of a)Math.hypot(e[h].x-e[u].x,e[h].z-e[u].z)<20&&r(u,h)}return n?hu=e:lu=e,e}const os=n=>Number.isFinite(n.x)&&Number.isFinite(n.y)&&Number.isFinite(n.z);class ny{constructor(t){this.work=t}request;result;advance(t){for(;this.result===void 0;){if(this.request!==void 0){if(!(!t||(this.request==="sample"?t.sample():this.request==="node"?t.node():t.check())))return;this.request=void 0}const e=this.work.next();if(e.done)return this.result=e.value,this.result;this.request=e.value}return this.result}}function*sy(n,t,e,i=!1,s=!1){if(yield"check",!os(n)||!os(t))return[];const r=new WeakMap;function*a(E,M){yield"check";let w=r.get(E);w||(w=new WeakMap,r.set(E,w));const y=w.get(M);if(y!==void 0)return y;const A=yield*e(E,M);return w.set(M,A),A}const o=tf(s);function*c(E,M=!1){const w=o.map((y,A)=>({id:A,d:Math.hypot(y.x-E.x,y.z-E.z)+Math.abs(y.y-E.y)*4})).sort((y,A)=>y.d-A.d);for(const{id:y,d:A}of w)if(yield"check",A<30&&os(o[y])&&(yield*a(M?o[y]:E,o[y])))return y}const l=yield*c(n);if(l===void 0)return[];const u=yield*c(t,i);if(u===void 0&&!i)return[];const d=new Set([l]),h=new Set,p=new Map([[l,0]]),g=new Map;let _=l,m=1/0;const f=u===void 0?t:o[u];function*S(E){const M=[E],w=new Set(M);for(;g.has(M[0]);){yield"check";const y=g.get(M[0]);if(w.has(y)||!o[y]||!os(o[y]))return[];w.add(y),M.unshift(y)}for(;M.length>1&&(yield*a(n,o[M[1]]));)M.shift();return[...M.map(y=>o[y]),...(yield*a(o[E],t))?[t]:[]]}for(;d.size;){yield"node";let E=-1,M=1/0;for(const w of d){yield"check";const y=o[w],A=p.get(w)+Math.hypot(y.x-f.x,y.y-f.y,y.z-f.z);A<M&&(E=w,M=A)}if(E<0||!os(o[E]))return[];if(E===u)return yield*S(E);if(i){const w=o[E],y=Math.hypot(w.x-t.x,w.z-t.z)+Math.abs(w.y-t.y)*4;y<m&&(_=E,m=y)}d.delete(E),h.add(E);for(const w of o[E].edges){if(yield"check",h.has(w)||!o[w]||!os(o[w]))continue;const y=o[E],A=o[w],x=p.get(E)+Math.hypot(y.x-A.x,y.y-A.y,y.z-A.z);x<(p.get(w)??1/0)&&(yield*a(y,A))&&(p.set(w,x),g.set(w,E),d.add(w))}}return i?yield*S(_):[]}function ry(n,t,e=Bc,i=!1,s=!1,r){const a=function*(o,c){return e(o,c)};return new ny(sy(n,t,a,i,s)).advance(r)??[]}class ay{routes=new Map;canSee(t,e,i,s=38){return t.alive&&e.alive&&t.position.distanceTo(e.position)<s&&!i.rayBlocked(t.position.clone().add(new P(0,1.3,0)),e.position)}update(t,e,i,s,r,a,o){if(!t.alive||!e.alive)return;t.cooldown-=i;const c=this.canSee(t,e,s,55),l=t.position.distanceTo(e.position),u={x:t.position.x,y:t.position.y,z:t.position.z};let d=this.routes.get(t.id);d&&d.last.distanceTo(t.position)>5&&(d=void 0),d||(d={path:[],remaining:0,goal:u,velocityY:0,last:t.position.clone()},this.routes.set(t.id,d)),d.remaining-=i;const h={x:e.position.x,y:e.position.y-1.65,z:e.position.z};if(h.y>1&&(h.y=0),d.remaining<=0){if(c||h.y<-2||u.y<-2)d.goal=h;else if(!d.path.length){const E=tf().filter(M=>M.y===0);d.goal=E[Math.floor(Math.random()*E.length)]}d.path=ry(u,d.goal),d.remaining=.75}for(;d.path.length&&Math.hypot(d.path[0].x-u.x,d.path[0].z-u.z)<.25&&Math.abs(d.path[0].y-u.y)<.4;)d.path.shift();const p=d.path[0];let g=0,_=0;p&&(g=p.x-u.x,_=p.z-u.z);const m=p?Math.min(i,Math.hypot(g,_)/3.2):i,f={...u,y:u.y+1.65,yaw:0,pitch:0,velocityY:d.velocityY,jumpsUsed:0,alive:!0};il(f,{moveX:g,moveY:-_,lookX:0,lookY:0,jump:!1},m,{boxes:s.boxes,heightAt:(S,E)=>s.groundHeight(S,E)},3.2/Bo),t.position.set(f.x,f.y-1.65,f.z),d.velocityY=f.velocityY,d.last.copy(t.position),t.group.position.copy(t.position),(g||_)&&(t.group.rotation.y=Math.atan2(-g,-_)),a&&l<38&&c&&t.cooldown<=0&&(t.cooldown=1.5+Math.random()*.8,o(Math.random()<Math.max(.18,.35-Math.max(0,l-12)*.0065)))}}const uu=n=>n.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);class ef{constructor(t){this.el=t,this.death.className="co-dead",this.death.hidden=!0,this.el.parentElement?.append(this.death)}death=document.createElement("div");wasDead=!1;hideTimer=0;signature="";render(t){const e=Number.isFinite(t.reserve)?t.reserve:"∞",i=t.remainingSeconds??0,s=t.score===void 0?`擊殺 ${t.kills} <span>／</span> 死亡 ${t.deaths}`:`積分 ${t.score} / ${t.scoreTarget}<small>賞金 ${t.bounty} · ${Math.floor(i/60)}:${String(i%60).padStart(2,"0")} · K/D ${t.kills}/${t.deaths}</small>`,r=`${t.quickReloadSeconds}|${t.level}|${t.capacity}|${t.hp}|${t.ammo}|${e}|${t.label}|${t.notice}|${t.kills}|${t.deaths}|${t.kill}|${t.reloading}|${s}`;r!==this.signature&&(this.signature=r,this.el.innerHTML=`<div class="co-score">${s}</div><div class="co-hp">生命值 <b>${t.hp}</b></div><div class="co-ammo">${t.label} <span class="co-hud-level">Lv.${t.level??1}</span><br><b>${t.ammo} <small>/ ${t.capacity??e}</small></b><small class="co-reserve">&#28961;&#38480;&#20633;&#24392; ${e}</small>${t.quickReloadSeconds?`<em class="co-quick-reload">&#24555;&#36895;&#25563;&#24392; ${t.quickReloadSeconds}s &middot; -25%</em>`:""}${t.reloading?"<em>換彈中</em>":""}</div>${t.notice?`<div class="co-notice">${uu(t.notice)}</div>`:""}<i class="co-crosshair ${t.kill?"is-kill":""}"></i>`),t.dead&&!this.wasDead&&(window.clearTimeout(this.hideTimer),this.death.hidden=!1,this.death.classList.remove("is-leaving"),this.death.innerHTML=`<section class="co-dead-card"><p>戰鬥結束</p><h2>你已陣亡</h2><div class="co-dead-killer">擊倒者 <b>${uu(t.killer||"未知敵人")}</b></div><small>正在準備重生…</small></section>`),!t.dead&&this.wasDead&&(this.death.classList.add("is-leaving"),this.hideTimer=window.setTimeout(()=>{this.death.hidden=!0,this.death.classList.remove("is-leaving")},180)),this.el.parentElement?.classList.toggle("co-is-dead",t.dead),this.wasDead=t.dead}dispose(){window.clearTimeout(this.hideTimer),this.death.remove(),this.el.replaceChildren(),this.el.parentElement?.classList.remove("co-is-dead")}}const nf=()=>`<div class="co-mobile">
  <div class="co-joy" aria-hidden="true"><i></i></div>
  <button type="button" data-sprint aria-label="切換跑步" aria-pressed="false">跑步</button>
  <div class="co-actions">
    <button type="button" data-weapon aria-expanded="false">武器庫</button>
    <button type="button" data-reload>換彈</button>
    <button type="button" data-jump aria-label="跳躍，空中再按一次二段跳">跳躍</button>
    <button type="button" data-aim aria-label="切換狙擊鏡" aria-pressed="false" disabled>瞄準</button>
    <button type="button" data-fire>射擊</button>
  </div>
</div><div class="co-rotate" data-game-ui>請旋轉裝置後遊玩</div>`;class sf{constructor(t,e,i,s,r=()=>1){this.root=t,this.choose=e,this.owned=i,this.afterClose=s,this.level=r;const a=this.coarse?"左右滑動選擇，點擊已取得武器裝備":"滾輪選擇，滑鼠左鍵裝備目前選取武器";t.insertAdjacentHTML("beforeend",`<div class="co-armory" hidden><div class="co-armory-head">武器庫<small>${a}</small></div><div class="co-armory-track"></div></div>`),this.box=t.querySelector(".co-armory"),this.track=this.box.querySelector(".co-armory-track"),this.trigger=t.querySelector("[data-weapon]"),this.track.innerHTML=ti.map(o=>{const c=Pe[o];return`<button type="button" class="co-weapon-card" data-armory="${o}" style="--weapon:#${c.color.toString(16).padStart(6,"0")}"><span>${c.icon}</span><b>${c.label}</b><strong class="co-level"></strong><small></small><em></em><div class="co-weapon-stats"></div></button>`}).join(""),t.addEventListener("pointerdown",this.onPointerDown,!0),window.addEventListener("pointermove",this.onPointerMove,!0),window.addEventListener("pointerup",this.onPointerUp,!0),window.addEventListener("pointercancel",this.onPointerCancel,!0),window.PointerEvent||(t.addEventListener("touchstart",this.onTouchStart,{capture:!0,passive:!1}),window.addEventListener("touchmove",this.onTouchMove,!0),window.addEventListener("touchend",this.onTouchEnd,{capture:!0,passive:!1}),window.addEventListener("touchcancel",this.onTouchEnd,!0)),window.addEventListener("blur",this.onInterrupted),window.addEventListener("orientationchange",this.onInterrupted),document.addEventListener("visibilitychange",this.onVisibility),t.addEventListener("combat:reset",this.onInterrupted),t.addEventListener("click",this.onClick,!0),t.addEventListener("wheel",this.onWheel,{passive:!1}),t.addEventListener("armory",this.onArmory),window.addEventListener("keydown",this.onKey),this.render("ar")}suppressMouseClick=!1;touchRelease=null;gestures=new Map;scrollFrame;enabled=!0;open=!1;selected=0;active="ar";signature="";box;track;trigger;coarse=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>0;get pointerLocked(){return!this.coarse&&document.pointerLockElement===this.root}equip(t){!this.owned().has(t)||this.choose(t)===!1||this.close()}selectCard(t){const e=t.dataset.armory,i=ti.indexOf(e);i<0||(this.selected=i,this.render(),this.equip(e))}consume(t){t.preventDefault(),t.stopImmediatePropagation()}start(t,e,i,s,r,a){if(a||(this.suppressMouseClick=!1),this.touchRelease=null,!this.open||!(s instanceof HTMLElement))return;const o=this.pointerLocked||this.box.contains(s);this.gestures.set(t,{x:e,y:i,inside:o,moved:!1,touch:a,card:o?s.closest("[data-armory]"):null}),o||this.consume(r)}moveGesture(t,e,i){if(this.pointerLocked)return;const s=this.gestures.get(t);s&&Math.hypot(e-s.x,i-s.y)>8&&(s.moved=!0)}end(t,e,i,s,r=!1){const a=this.gestures.get(t);if(!a)return;this.gestures.delete(t);const o=!r&&!a.moved;a.inside?a.touch&&o&&a.card&&document.elementFromPoint(e,i)?.closest("[data-armory]")===a.card&&this.selectCard(a.card):(this.consume(s),o&&this.close()),a.touch?(this.touchRelease={x:e,y:i,expires:Date.now()+500},o&&s.cancelable&&s.preventDefault()):(!o||!a.inside)&&(this.suppressMouseClick=!0)}onPointerDown=t=>{t.button===0&&this.start(t.pointerId,t.clientX,t.clientY,t.target,t,t.pointerType==="touch")};onPointerMove=t=>this.moveGesture(t.pointerId,t.clientX,t.clientY);onPointerUp=t=>{this.moveGesture(t.pointerId,t.clientX,t.clientY),this.end(t.pointerId,t.clientX,t.clientY,t)};onPointerCancel=t=>this.end(t.pointerId,t.clientX,t.clientY,t,!0);onTouchStart=t=>{for(const e of Array.from(t.changedTouches))this.start(e.identifier,e.clientX,e.clientY,e.target??t.target,t,!0)};onTouchMove=t=>{for(const e of Array.from(t.changedTouches))this.moveGesture(e.identifier,e.clientX,e.clientY)};onTouchEnd=t=>{for(const e of Array.from(t.changedTouches))this.moveGesture(e.identifier,e.clientX,e.clientY),this.end(e.identifier,e.clientX,e.clientY,t,t.type==="touchcancel")};onClick=t=>{const e=this.touchRelease;if(e&&Date.now()<e.expires&&t.detail>0&&Math.hypot(t.clientX-e.x,t.clientY-e.y)<25){this.touchRelease=null,this.consume(t);return}if(this.suppressMouseClick){this.suppressMouseClick=!1,this.consume(t);return}if(this.coarse&&t.detail>0&&(!("pointerType"in t)||t.pointerType==="touch")){this.open&&this.consume(t);return}if(!this.open||!(t.target instanceof HTMLElement))return;if(this.consume(t),this.pointerLocked){this.equip(ti[this.selected]);return}if(!this.box.contains(t.target)){this.close();return}const i=t.target.closest("[data-armory]");i&&this.selectCard(i)};onWheel=t=>{this.open&&(t.preventDefault(),this.move(t.deltaY>0?1:-1))};onArmory=()=>this.toggle();onInterrupted=()=>this.close(!1);onVisibility=()=>{document.hidden&&this.close(!1)};onKey=t=>{!this.enabled||t.repeat||t.key.toLowerCase()!=="q"||t.target instanceof HTMLElement&&t.target.closest("input, textarea, select, [contenteditable]")||(t.preventDefault(),this.toggle())};get isOpen(){return this.open}setEnabled(t){this.enabled=t,t||this.close(!1)}close(t=!0){this.gestures.clear(),this.suppressMouseClick=!1,this.touchRelease=null,this.scrollFrame!==void 0&&(cancelAnimationFrame(this.scrollFrame),this.scrollFrame=void 0),this.open&&(this.open=!1,this.box.hidden=!0,this.signature="",this.trigger?.setAttribute("aria-expanded","false"),t&&this.afterClose?.())}toggle(){if(!this.enabled)return;if(this.open){this.close();return}this.root.dispatchEvent(new Event("armory:open")),this.open=!0,this.box.hidden=!1,this.trigger?.setAttribute("aria-expanded","true");const t=ti.indexOf(this.active);t>=0&&(this.selected=t),this.render(),this.scrollSelected(!1)}move(t){this.selected=(this.selected+t+ti.length)%ti.length,this.render(),this.scrollSelected()}render(t=this.active){this.active=t,this.box.hidden=!this.open;const e=this.owned(),i=`${this.open}|${t}|${this.selected}|${ti.map(s=>`${e.has(s)}:${this.level(s)}`).join("|")}`;i!==this.signature&&(this.signature=i,ti.forEach((s,r)=>{const a=this.track.children[r],o=e.has(s),c=Pe[s],l=this.level(s);a.classList.toggle("active",s===t),a.classList.toggle("focus",r===this.selected),a.classList.toggle("locked",!o),a.setAttribute("aria-disabled",String(!o)),a.dataset.level=o?String(l):"0",a.querySelector("small").textContent=o?c.description:"尚未取得";const u=a.querySelector(".co-level"),d=a.querySelector("em");u&&(u.textContent=o?`Lv.${l}${l===3?" · 滿級":""}`:"未解鎖"),d&&(d.textContent=`${Mi(s,l)} 發彈匣`);const h=a.querySelector(".co-weapon-stats");h&&(h.textContent=`${c.pellets?"每顆":"傷害"} ${Math.round(c.damage*ya(l))} · 射程 ${Number(Ma(s,l).toFixed(2))}`)}))}scrollSelected(t=!0){this.scrollFrame!==void 0&&cancelAnimationFrame(this.scrollFrame),this.scrollFrame=requestAnimationFrame(()=>{if(this.scrollFrame=void 0,!this.open)return;const e=this.track.children[this.selected],i=e.offsetLeft+(e.offsetWidth-this.track.clientWidth)/2;this.track.scrollTo({left:i,behavior:t?"smooth":"instant"})})}dispose(){this.enabled=!1,this.open=!1,this.close(),this.box.remove(),window.removeEventListener("blur",this.onInterrupted),window.removeEventListener("orientationchange",this.onInterrupted),document.removeEventListener("visibilitychange",this.onVisibility),this.root.removeEventListener("combat:reset",this.onInterrupted),this.root.removeEventListener("pointerdown",this.onPointerDown,!0),this.root.removeEventListener("touchstart",this.onTouchStart,!0),window.removeEventListener("pointermove",this.onPointerMove,!0),window.removeEventListener("pointerup",this.onPointerUp,!0),window.removeEventListener("pointercancel",this.onPointerCancel,!0),window.removeEventListener("touchmove",this.onTouchMove,!0),window.removeEventListener("touchend",this.onTouchEnd,!0),window.removeEventListener("touchcancel",this.onTouchEnd,!0),this.root.removeEventListener("click",this.onClick,!0),this.root.removeEventListener("wheel",this.onWheel),this.root.removeEventListener("armory",this.onArmory),window.removeEventListener("keydown",this.onKey)}}class rf{constructor(t){this.update=t}id=0;last=0;running=!1;start(){if(this.running)return;this.running=!0,this.last=0;const t=e=>{if(!this.running)return;const i=this.last?Math.max(0,(e-this.last)/1e3):0,s=Math.min(.05,i);this.last=e,this.update(s,i),this.running&&(this.id=requestAnimationFrame(t))};this.id=requestAnimationFrame(t)}stop(){this.running=!1,cancelAnimationFrame(this.id),this.id=0,this.last=0}}class oy{constructor(t){this.root=t;const e=new Od;this.renderer=new Rd({antialias:e.antialias,powerPreference:"high-performance"}),this.renderer.setPixelRatio(e.pixelRatio),this.renderer.setClearColor(1489372),t.append(this.renderer.domElement),t.insertAdjacentHTML("beforeend",'<div class="co-feedback"></div><div class="co-hud"></div>'+nf()),this.hud=new ef(t.querySelector(".co-hud")),this.aimFeedback=new Fd(t),this.armory=new sf(t,r=>{this.owned.has(r)&&(this.input.set({aim:!1}),this.active=r,this.armory.render(this.active))},()=>this.owned,this.restorePointerLock,r=>this.weapons.get(r).level),this.feedback=new Kd(t.querySelector(".co-feedback")),this.scene.add(this.arena.group,new vd(16777215,1489372,2)),this.effects=new Bd(this.scene,this.coarse),this.battle=new zd(t),this.makeGun(),this.appearance=new Pd(this.gun),this.pickupFeedback=new Cd(t,this.coarse),this.pickupPreview=new zu(t),this.scope=new kd(t,this.gun,this.coarse);const i=[16731770,3594436,16235083,10975231,5285631,16739127,3656447,9626447],s=["RED","BLUE","GREEN","YELLOW","PURPLE","ORANGE","CYAN","LIME"];i.forEach((r,a)=>{const o=new Qd("bot"+a,s[a],r);o.respawn(...this.spawns.choose(this.bots,o.id)),this.bots.push(o),this.scene.add(o.group,o.deathGroup)}),this.player.respawn(this.spawns.choose(this.bots)),ti.forEach(r=>this.addPickup(r)),this.coarse?this.mobile=new Zd(t,this.input):(this.desktop=new $d(t,this.input),t.onclick=r=>{r.target.closest(".co-armory, [data-game-ui], button, input")||this.restorePointerLock()}),this.stopResize=Iu(t,(r,a)=>{this.cam.aspect=r/a,this.cam.updateProjectionMatrix(),this.renderer.setSize(r,a,!1)}),this.loop=new rf(r=>this.update(r)),this.settings=new qd(t,()=>{this.root.dispatchEvent(new Event("combat:reset")),this.desktop?.setEnabled(!1),this.mobile?.setEnabled(!1),this.armory.setEnabled(!1),this.loop.stop()},r=>{this.desktop?.setEnabled(!0),this.mobile?.setEnabled(!0),this.armory.setEnabled(!0),this.loop.start(),r&&this.restorePointerLock()},!1)}scene=new ml;cam=new ei(75,1,Sl,Jc);renderer;input=new Yd;arena=new jd;collision=new qx(this.arena.boxes,(t,e)=>this.arena.groundHeight(t,e));player=new Jd;controller=new ey;bots=[];ai=new ay;spawns=new Yx(this.arena.spawns);respawn=new $x;weapons=new Map(ti.map(t=>[t,new iy(Pe[t])]));active="ar";owned=new Set(["ar"]);pickups=[];hud;aimFeedback;armory;feedback;effects;battle;killTracker=new Ox("solo");shotSequence=0;elapsed=0;status=new Map;statusTimer=0;loop;settings;desktop;mobile;mode=new Zx;hit=0;kill=0;shake=0;notice="";noticeT=0;gun=new ve;gunFlash;dead=!1;killer="";coarse=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>0;stopResize=()=>{};pickupPreview;pickupFeedback;appearance;scope;aiming=!1;restorePointerLock=()=>{if(!(this.coarse||this.settings?.isOpen||document.pointerLockElement===this.root))try{this.root.requestPointerLock?.()?.catch(()=>{})}catch{}};makeGun(){const t=new Zt({color:2106932}),e=new Zt({color:this.player.color}),i=new Lt(new we(.18,.16,.9),t);i.position.set(.34,-.28,-.8);for(const[s,r,a,o]of[[.47,-.52,-.5,-.55],[.12,-.55,-.63,.42],[.37,-.43,-.74,0],[.17,-.42,-.86,0]]){const c=new Lt(new we(.18,.28,.18),e);c.position.set(s,r,a),c.rotation.z=o,this.gun.add(c)}this.gunFlash=new Lt(new ys(.08),new Zt({color:16766045})),this.gunFlash.position.set(.34,-.25,-1.3),this.gunFlash.visible=!1,this.gun.add(i,this.gunFlash),this.cam.add(this.gun),this.scene.add(this.cam)}pickupPoint(t,e){return Vx([this.player,...this.bots].map(i=>({x:i.position.x,y:i.position.y-(i===this.player?1.65:0),z:i.position.z,alive:i.alive})),this.pickups.filter(i=>i.mesh.visible).map(i=>({x:i.position.x,y:i.position.y-.9,z:i.position.z})),t,Math.random,e?Gx(e):void 0)}addPickup(t){const e=new Lt(new ys(.75),new Zt({color:Pe[t].color})),i=this.pickupPoint(void 0,t);e.visible=!!i,i&&e.position.set(i.x,i.y+.9,i.z),this.scene.add(e),this.pickups.push({id:t,mesh:e,position:e.position.clone(),cooldown:i?0:.1})}respawnPickup(t){const e=this.pickupPoint({x:t.position.x,y:t.position.y-.9,z:t.position.z});if(!e){t.cooldown=.1;return}t.position.set(e.x,e.y+.9,e.z),t.mesh.position.copy(t.position),t.mesh.visible=!0}resetInput(){this.armory.close(!1),this.desktop?.setEnabled(!0),this.mobile?.reset(),this.input.reset()}actors(){return[{id:"player",x:this.player.position.x,y:this.player.position.y,z:this.player.position.z,yaw:this.player.yaw,alive:this.player.alive},...this.bots.map(t=>({id:t.id,x:t.position.x,y:t.position.y+1.65,z:t.position.z,yaw:t.group.rotation.y,alive:t.alive}))]}actor(t){return t==="player"?this.player:this.bots.find(e=>e.id===t)}actorName(t){return t==="player"?"YOU":this.bots.find(e=>e.id===t)?.name??t}damageActor(t,e,i){const s=this.actor(e.targetId),r=this.actor(t);if(!s?.alive||!r)return;const a=Math.min(s.hp,e.damage);s.damage(a);const o=!s.alive;if(e.targetId==="player"&&(this.feedback.damage(a,r.position,this.player.position,new P(-Math.sin(this.player.yaw),0,-Math.cos(this.player.yaw))),o)){for(const c of this.weapons.values())c.clearBoost();this.dead=!0,this.resetInput(),this.killer=this.actorName(t),this.mode.onDeath()}return o&&(this.status.delete(e.targetId),this.respawn.kill(e.targetId),t==="player"&&(this.mode.onKill(),this.kill=.3),this.battle.kill(this.killTracker.record({id:t,name:this.actorName(t),alive:r.alive},{id:e.targetId,name:this.actorName(e.targetId)},i,e.headshot,this.elapsed*1e3))),{...e,damage:a,killed:o}}shootActor(t,e,i,s,r){const a=Dd(e,i.toArray(),s.toArray(),this.actors().filter(u=>u.id!==t),Math.random,zo(this.elapsed),t==="player"&&this.aiming,t==="player"?this.weapons.get(e).level:1),o=`solo:shot:${++this.shotSequence}`,c={...a,eventId:o,id:t,weapon:e,origin:i.toArray(),dir:s.toArray()};this.effects.play(c,r,!0,t==="player");const l=[];for(const u of a.hits){const d=this.damageActor(t,u,e);if(d&&(l.push(d),!d.killed&&(e==="ice"||e==="flame"))){const h=this.status.get(u.targetId)??{slowUntil:0};e==="ice"?h.slowUntil=this.elapsed+1.25:h.burn={damage:Math.round(4*ya(this.weapons.get(e).level)),attackerId:t,nextTick:h.burn?.nextTick??this.elapsed+.25,expiresAt:this.elapsed+2},this.status.set(u.targetId,h)}}t==="player"&&l.length&&(this.hit=.12,this.battle.hit({eventId:o,weapon:e,hits:l}))}fire(){this.shake=.035,this.gun.position.z=this.shake*2,this.gun.rotation.x=this.shake,this.cam.position.copy(this.player.position),this.cam.rotation.set(this.player.pitch,this.player.yaw,0,"YXZ"),this.cam.updateMatrixWorld(!0),this.shootActor("player",this.active,this.player.position.clone(),new P(...Uc(this.player.yaw,this.player.pitch)),Ys(this.gunFlash,this.active)),this.shake=.035}updateStatuses(t){this.statusTimer+=t;const e=this.statusTimer>=.08;e&&(this.statusTimer=0);for(const[i,s]of this.status){const r=this.actor(i);if(!r?.alive){this.status.delete(i);continue}for(;s.burn&&s.burn.nextTick<=this.elapsed&&s.burn.nextTick<=s.burn.expiresAt;){const a=s.burn.attackerId;s.burn.nextTick+=.25;const o=this.damageActor(a,{targetId:i,damage:s.burn.damage,headshot:!1,position:[r.position.x,r.position.y+(i==="player"?-.4:1.22),r.position.z]},"flame");if(o&&a==="player"&&this.battle.hit({eventId:`solo:burn:${++this.shotSequence}`,weapon:"flame",hits:[o]}),!r.alive)break}s.burn&&this.elapsed>=s.burn.expiresAt&&(s.burn=void 0),e&&r.alive&&(s.burn||s.slowUntil>this.elapsed)&&this.effects.status(r.position.clone().add(new P(0,i==="player"?-.4:1.22,0)),s.burn?"flame":"ice"),!s.burn&&s.slowUntil<=this.elapsed&&this.status.delete(i)}}update(t){this.elapsed+=t,this.desktop?.update(),this.updateStatuses(t);const e=this.input.getState();if(e.switchWeapon){const l=ti[e.switchWeapon-1];l&&this.owned.has(l)&&(this.input.set({aim:!1}),e.aim=!1,this.active=l)}const i=this.weapons.get(this.active);e.reload&&i.reload();const s=this.armory.isOpen||!!this.settings?.isOpen;(this.active!=="sniper"||i.reloading||!this.player.alive||s)&&(this.input.set({aim:!1}),e.aim=!1),s&&(e.shoot=!1,this.input.clearCombat()),this.aiming=this.scope.update(this.active,e,this.player.alive,i.reloading,s),this.aiming&&(e.lookX*=.25,e.lookY*=.25),this.controller.update(this.player,e,t,this.collision,(this.status.get("player")?.slowUntil??0)>this.elapsed?.65:1,this.elapsed-t),this.arena.update(this.elapsed,this.elapsed,this.renderer);for(const[l,u]of this.weapons)u.update(t,l===this.active&&!s&&e.shoot&&this.player.alive).fired&&this.fire();this.pickups.forEach(l=>{if(l.mesh.rotation.y+=t*2,l.cooldown>0)l.cooldown-=t,l.cooldown<=0&&this.respawnPickup(l);else if(this.player.alive&&this.player.position.distanceTo(l.position)<2){const u=this.weapons.get(l.id).collect(this.owned.has(l.id));if(!u)return;this.owned.add(l.id),l.cooldown=30,l.mesh.visible=!1,this.pickupFeedback.push(u),this.armory.render(this.active)}});const r=new Set(this.bots.filter(l=>this.ai.canSee(l,this.player,this.collision,38)).sort((l,u)=>l.position.distanceTo(this.player.position)-u.position.distanceTo(this.player.position)).slice(0,3).map(l=>l.id));this.bots.forEach(l=>{const u=l.position.clone();this.ai.update(l,this.player,(this.status.get(l.id)?.slowUntil??0)>this.elapsed?t*.65:t,this.collision,this.arena.waypoints,r.has(l.id),d=>{const h=l.position.clone().add(new P(0,1.65,0)),p=this.player.position.clone().add(new P(0,-.43,0));d||p.add(new P((Math.random()<.5?-1:1)*(1.3+Math.random()),Math.random()*.5,0)),this.shootActor(l.id,"ar",h,p.sub(h).normalize(),l.muzzlePosition())}),l.updateVisual(t,l.position.distanceToSquared(u)>.001,l.alive&&this.player.alive)}),this.respawn.update(t,l=>{if(l==="player"){this.player.respawn(this.spawns.choose(this.bots));for(const u of this.weapons.values())u.refill();this.status.delete("player"),this.resetInput(),this.dead=!1}else{const u=this.bots.find(d=>d.id===l);u&&u.respawn(...this.spawns.choose([this.player,...this.bots.filter(d=>d!==u)],u.id))}}),this.hit=Math.max(0,this.hit-t),this.kill=Math.max(0,this.kill-t),this.noticeT=Math.max(0,this.noticeT-t),this.effects.update(t),this.feedback.update(t,this.player.hp),this.cam.position.copy(this.player.position),this.cam.rotation.set(this.player.pitch,this.player.yaw,0,"YXZ"),this.gun.position.z=this.shake*2,this.gun.rotation.x=this.shake,this.shake=Math.max(0,this.shake-t*.5),this.armory.render(this.active),this.appearance.update(this.active,i.level),this.pickupFeedback.update(t),this.hud.render({quickReloadSeconds:Math.ceil(i.quickReloadSeconds),level:i.level,capacity:i.capacity,hp:this.player.hp,ammo:i.ammo,reserve:i.reserve,label:i.spec.label,notice:this.noticeT?this.notice:"",kills:this.mode.kills,deaths:this.mode.deaths,dead:this.dead,killer:this.killer,hit:this.hit>0,kill:this.kill>0,reloading:i.reloading}),this.cam.updateMatrixWorld(!0),this.battle.update(t,this.cam);const a=zo(this.elapsed),o=this.actors().filter(l=>l.id!=="player");this.pickupPreview.update(this.pickups.map(l=>({id:l.id,position:l.position,available:l.mesh.visible,owned:this.owned.has(l.id),state:this.weapons.get(l.id)})),this.cam.position,a,this.player.alive&&!s),this.effects.updateLocalMuzzle(Ys(this.gunFlash,this.active),this.active,this.cam.position,a),this.effects.localFlame(this.player.alive&&!s&&e.shoot&&this.active==="flame"&&!i.reloading,Ys(this.gunFlash,this.active),this.cam.position,new P(...Uc(this.player.yaw,this.player.pitch)),a,t,o,i.level);const c=Ud({x:this.player.position.x,y:this.player.position.y,z:this.player.position.z,yaw:this.player.yaw,pitch:this.player.pitch});this.aimFeedback.update(s||!this.player.alive?"neutral":Nd(this.active,c.origin,c.direction,o,a,i.level),this.player.alive&&!s),this.scope.render(this.renderer,this.scene,this.cam)}start(){this.loop.start()}dispose(){this.pickupPreview.dispose(),this.pickupFeedback.dispose(),this.hud.dispose(),this.aimFeedback.dispose();for(const t of this.bots)t.dispose();this.scope.dispose(),this.arena.dispose(),this.settings?.dispose(),this.root.onclick=null,this.loop.stop(),this.stopResize(),this.desktop?.dispose(),this.mobile?.dispose(),this.armory.dispose(),this.effects.dispose(),this.battle.dispose(),this.status.clear(),this.killTracker.reset(),this.feedback.dispose(),sn(this.scene),this.scene.clear(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.root.replaceChildren()}}const zc=1500,cy=100,af=200;function ly(n){const t=[...n].sort((i,s)=>s.score-i.score);let e=0;return t.map((i,s)=>((s===0||i.score!==t[s-1].score)&&(e=s+1),{...i,rank:e}))}const Vi=Object.create(null);Vi.open="0";Vi.close="1";Vi.ping="2";Vi.pong="3";Vi.message="4";Vi.upgrade="5";Vi.noop="6";const Jr=Object.create(null);Object.keys(Vi).forEach(n=>{Jr[Vi[n]]=n});const Hc={type:"error",data:"parser error"},of=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",cf=typeof ArrayBuffer=="function",lf=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n&&n.buffer instanceof ArrayBuffer,Tl=({type:n,data:t},e,i)=>of&&t instanceof Blob?e?i(t):du(t,i):cf&&(t instanceof ArrayBuffer||lf(t))?e?i(t):du(new Blob([t]),i):i(Vi[n]+(t||"")),du=(n,t)=>{const e=new FileReader;return e.onload=function(){const i=e.result.split(",")[1];t("b"+(i||""))},e.readAsDataURL(n)};function fu(n){return n instanceof Uint8Array?n:n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength)}let So;function hy(n,t){if(of&&n.data instanceof Blob)return n.data.arrayBuffer().then(fu).then(t);if(cf&&(n.data instanceof ArrayBuffer||lf(n.data)))return t(fu(n.data));Tl(n,!1,e=>{So||(So=new TextEncoder),t(So.encode(e))})}const pu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Gs=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let n=0;n<pu.length;n++)Gs[pu.charCodeAt(n)]=n;const uy=n=>{let t=n.length*.75,e=n.length,i,s=0,r,a,o,c;n[n.length-1]==="="&&(t--,n[n.length-2]==="="&&t--);const l=new ArrayBuffer(t),u=new Uint8Array(l);for(i=0;i<e;i+=4)r=Gs[n.charCodeAt(i)],a=Gs[n.charCodeAt(i+1)],o=Gs[n.charCodeAt(i+2)],c=Gs[n.charCodeAt(i+3)],u[s++]=r<<2|a>>4,u[s++]=(a&15)<<4|o>>2,u[s++]=(o&3)<<6|c&63;return l},dy=typeof ArrayBuffer=="function",Al=(n,t)=>{if(typeof n!="string")return{type:"message",data:hf(n,t)};const e=n.charAt(0);return e==="b"?{type:"message",data:fy(n.substring(1),t)}:Jr[e]?n.length>1?{type:Jr[e],data:n.substring(1)}:{type:Jr[e]}:Hc},fy=(n,t)=>{if(dy){const e=uy(n);return hf(e,t)}else return{base64:!0,data:n}},hf=(n,t)=>{switch(t){case"blob":return n instanceof Blob?n:new Blob([n]);case"arraybuffer":default:return n instanceof ArrayBuffer?n:n.buffer}},uf="",py=(n,t)=>{const e=n.length,i=new Array(e);let s=0;n.forEach((r,a)=>{Tl(r,!1,o=>{i[a]=o,++s===e&&t(i.join(uf))})})},my=(n,t)=>{const e=n.split(uf),i=[];for(let s=0;s<e.length;s++){const r=Al(e[s],t);if(i.push(r),r.type==="error")break}return i};function gy(){return new TransformStream({transform(n,t){hy(n,e=>{const i=e.length;let s;if(i<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,i);else if(i<65536){s=new Uint8Array(3);const r=new DataView(s.buffer);r.setUint8(0,126),r.setUint16(1,i)}else{s=new Uint8Array(9);const r=new DataView(s.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(i))}n.data&&typeof n.data!="string"&&(s[0]|=128),t.enqueue(s),t.enqueue(e)})}})}let bo;function Or(n){return n.reduce((t,e)=>t+e.length,0)}function kr(n,t){if(n[0].length===t)return n.shift();const e=new Uint8Array(t);let i=0;for(let s=0;s<t;s++)e[s]=n[0][i++],i===n[0].length&&(n.shift(),i=0);return n.length&&i<n[0].length&&(n[0]=n[0].slice(i)),e}function _y(n,t){bo||(bo=new TextDecoder);const e=[];let i=0,s=-1,r=!1;return new TransformStream({transform(a,o){for(e.push(a);;){if(i===0){if(Or(e)<1)break;const c=kr(e,1);r=(c[0]&128)===128,s=c[0]&127,s<126?i=3:s===126?i=1:i=2}else if(i===1){if(Or(e)<2)break;const c=kr(e,2);s=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),i=3}else if(i===2){if(Or(e)<8)break;const c=kr(e,8),l=new DataView(c.buffer,c.byteOffset,c.length),u=l.getUint32(0);if(u>Math.pow(2,21)-1){o.enqueue(Hc);break}s=u*Math.pow(2,32)+l.getUint32(4),i=3}else{if(Or(e)<s)break;const c=kr(e,s);o.enqueue(Al(r?c:bo.decode(c),t)),i=0}if(s===0||s>n){o.enqueue(Hc);break}}}})}const df=4;function De(n){if(n)return vy(n)}function vy(n){for(var t in De.prototype)n[t]=De.prototype[t];return n}De.prototype.on=De.prototype.addEventListener=function(n,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+n]=this._callbacks["$"+n]||[]).push(t),this};De.prototype.once=function(n,t){function e(){this.off(n,e),t.apply(this,arguments)}return e.fn=t,this.on(n,e),this};De.prototype.off=De.prototype.removeListener=De.prototype.removeAllListeners=De.prototype.removeEventListener=function(n,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var e=this._callbacks["$"+n];if(!e)return this;if(arguments.length==1)return delete this._callbacks["$"+n],this;for(var i,s=0;s<e.length;s++)if(i=e[s],i===t||i.fn===t){e.splice(s,1);break}return e.length===0&&delete this._callbacks["$"+n],this};De.prototype.emit=function(n){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),e=this._callbacks["$"+n],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(e){e=e.slice(0);for(var i=0,s=e.length;i<s;++i)e[i].apply(this,t)}return this};De.prototype.emitReserved=De.prototype.emit;De.prototype.listeners=function(n){return this._callbacks=this._callbacks||{},this._callbacks["$"+n]||[]};De.prototype.hasListeners=function(n){return!!this.listeners(n).length};const Ua=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,e)=>e(t,0),li=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),xy="arraybuffer";function ff(n,...t){return t.reduce((e,i)=>(n.hasOwnProperty(i)&&(e[i]=n[i]),e),{})}const yy=li.setTimeout,My=li.clearTimeout;function Fa(n,t){t.useNativeTimers?(n.setTimeoutFn=yy.bind(li),n.clearTimeoutFn=My.bind(li)):(n.setTimeoutFn=li.setTimeout.bind(li),n.clearTimeoutFn=li.clearTimeout.bind(li))}const Sy=1.33;function by(n){return typeof n=="string"?wy(n):Math.ceil((n.byteLength||n.size)*Sy)}function wy(n){let t=0,e=0;for(let i=0,s=n.length;i<s;i++)t=n.charCodeAt(i),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(i++,e+=4);return e}function pf(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Ey(n){let t="";for(let e in n)n.hasOwnProperty(e)&&(t.length&&(t+="&"),t+=encodeURIComponent(e)+"="+encodeURIComponent(n[e]));return t}function Ty(n){let t={},e=n.split("&");for(let i=0,s=e.length;i<s;i++){let r=e[i].split("=");t[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return t}class Ay extends Error{constructor(t,e,i){super(t),this.description=e,this.context=i,this.type="TransportError"}}class Rl extends De{constructor(t){super(),this.writable=!1,Fa(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,e,i){return super.emitReserved("error",new Ay(t,e,i)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const e=Al(t,this.socket.binaryType);this.onPacket(e)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,e={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(e)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const e=Ey(t);return e.length?"?"+e:""}}class Ry extends Rl{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const e=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let i=0;this._polling&&(i++,this.once("pollComplete",function(){--i||e()})),this.writable||(i++,this.once("drain",function(){--i||e()}))}else e()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const e=i=>{if(this.readyState==="opening"&&i.type==="open"&&this.onOpen(),i.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(i)};my(t,this.socket.binaryType).forEach(e),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,py(t,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",e=this.query||{};return this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=pf()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.createUri(t,e)}}let mf=!1;try{mf=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Cy=mf;function Py(){}class Ly extends Ry{constructor(t){if(super(t),typeof location<"u"){const e=location.protocol==="https:";let i=location.port;i||(i=e?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||i!==t.port}}doWrite(t,e){const i=this.request({method:"POST",data:t});i.on("success",e),i.on("error",(s,r)=>{this.onError("xhr post error",s,r)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(e,i)=>{this.onError("xhr poll error",e,i)}),this.pollXhr=t}}class ki extends De{constructor(t,e,i){super(),this.createRequest=t,Fa(this,i),this._opts=i,this._method=i.method||"GET",this._uri=e,this._data=i.data!==void 0?i.data:null,this._create()}_create(){var t;const e=ff(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this._opts.xd;const i=this._xhr=this.createRequest(e);try{i.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){i.setDisableHeaderCheck&&i.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&i.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{i.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{i.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(i),"withCredentials"in i&&(i.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(i.timeout=this._opts.requestTimeout),i.onreadystatechange=()=>{var s;i.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(i.getResponseHeader("set-cookie"))),i.readyState===4&&(i.status===200||i.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof i.status=="number"?i.status:0)},0))},i.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=ki.requestsCount++,ki.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Py,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete ki.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}ki.requestsCount=0;ki.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",mu);else if(typeof addEventListener=="function"){const n="onpagehide"in li?"pagehide":"unload";addEventListener(n,mu,!1)}}function mu(){for(let n in ki.requests)ki.requests.hasOwnProperty(n)&&ki.requests[n].abort()}const Iy=(function(){const n=gf({xdomain:!1});return n&&n.responseType!==null})();class Dy extends Ly{constructor(t){super(t);const e=t&&t.forceBase64;this.supportsBinary=Iy&&!e}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new ki(gf,this.uri(),t)}}function gf(n){const t=n.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||Cy))return new XMLHttpRequest}catch{}if(!t)try{return new li[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const _f=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Ny extends Rl{get name(){return"websocket"}doOpen(){const t=this.uri(),e=this.opts.protocols,i=_f?{}:ff(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(i.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,e,i)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const i=t[e],s=e===t.length-1;Tl(i,this.supportsBinary,r=>{try{this.doWrite(i,r)}catch{}s&&Ua(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",e=this.query||{};return this.opts.timestampRequests&&(e[this.opts.timestampParam]=pf()),this.supportsBinary||(e.b64=1),this.createUri(t,e)}}const wo=li.WebSocket||li.MozWebSocket;class Uy extends Ny{createSocket(t,e,i){return _f?new wo(t,e,i):e?new wo(t,e):new wo(t)}doWrite(t,e){this.ws.send(e)}}class Fy extends Rl{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const e=_y(Number.MAX_SAFE_INTEGER,this.socket.binaryType),i=t.readable.pipeThrough(e).getReader(),s=gy();s.readable.pipeTo(t.writable),this._writer=s.writable.getWriter();const r=()=>{i.read().then(({done:o,value:c})=>{o||(this.onPacket(c),r())}).catch(o=>{})};r();const a={type:"open"};this.query.sid&&(a.data=`{"sid":"${this.query.sid}"}`),this._writer.write(a).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const i=t[e],s=e===t.length-1;this._writer.write(i).then(()=>{s&&Ua(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const Oy={websocket:Uy,webtransport:Fy,polling:Dy},ky=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,By=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Gc(n){if(n.length>8e3)throw"URI too long";const t=n,e=n.indexOf("["),i=n.indexOf("]");e!=-1&&i!=-1&&(n=n.substring(0,e)+n.substring(e,i).replace(/:/g,";")+n.substring(i,n.length));let s=ky.exec(n||""),r={},a=14;for(;a--;)r[By[a]]=s[a]||"";return e!=-1&&i!=-1&&(r.source=t,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=zy(r,r.path),r.queryKey=Hy(r,r.query),r}function zy(n,t){const e=/\/{2,9}/g,i=t.replace(e,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&i.splice(0,1),t.slice(-1)=="/"&&i.splice(i.length-1,1),i}function Hy(n,t){const e={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(i,s,r){s&&(e[s]=r)}),e}const Vc=typeof addEventListener=="function"&&typeof removeEventListener=="function",Qr=[];Vc&&addEventListener("offline",()=>{Qr.forEach(n=>n())},!1);class _n extends De{constructor(t,e){if(super(),this.binaryType=xy,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(e=t,t=null),t){const i=Gc(t);e.hostname=i.host,e.secure=i.protocol==="https"||i.protocol==="wss",e.port=i.port,i.query&&(e.query=i.query)}else e.host&&(e.hostname=Gc(e.host).host);Fa(this,e),this.secure=e.secure!=null?e.secure:typeof location<"u"&&location.protocol==="https:",e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=e.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},e.transports.forEach(i=>{const s=i.prototype.name;this.transports.push(s),this._transportsByName[s]=i}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},e),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Ty(this.opts.query)),Vc&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Qr.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const e=Object.assign({},this.opts.query);e.EIO=df,e.transport=t,this.id&&(e.sid=this.id);const i=Object.assign({},this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](i)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&_n.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const e=this.createTransport(t);e.open(),this.setTransport(e)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",e=>this._onClose("transport close",e))}onOpen(){this.readyState="open",_n.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const e=new Error("server error");e.code=t.data,this._onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let i=0;i<this.writeBuffer.length;i++){const s=this.writeBuffer[i].data;if(s&&(e+=by(s)),i>0&&e>this._maxPayload)return this.writeBuffer.slice(0,i);e+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,Ua(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,e,i){return this._sendPacket("message",t,e,i),this}send(t,e,i){return this._sendPacket("message",t,e,i),this}_sendPacket(t,e,i,s){if(typeof e=="function"&&(s=e,e=void 0),typeof i=="function"&&(s=i,i=null),this.readyState==="closing"||this.readyState==="closed")return;i=i||{},i.compress=i.compress!==!1;const r={type:t,data:e,options:i};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),s&&this.once("flush",s),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},i=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?i():t()}):this.upgrading?i():t()),this}_onError(t){if(_n.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Vc&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const i=Qr.indexOf(this._offlineEventListener);i!==-1&&Qr.splice(i,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this._prevBufferLen=0}}}_n.protocol=df;class Gy extends _n{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let e=this.createTransport(t),i=!1;_n.priorWebsocketSuccess=!1;const s=()=>{i||(e.send([{type:"ping",data:"probe"}]),e.once("packet",d=>{if(!i)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",e),!e)return;_n.priorWebsocketSuccess=e.name==="websocket",this.transport.pause(()=>{i||this.readyState!=="closed"&&(u(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())})}else{const h=new Error("probe error");h.transport=e.name,this.emitReserved("upgradeError",h)}}))};function r(){i||(i=!0,u(),e.close(),e=null)}const a=d=>{const h=new Error("probe error: "+d);h.transport=e.name,r(),this.emitReserved("upgradeError",h)};function o(){a("transport closed")}function c(){a("socket closed")}function l(d){e&&d.name!==e.name&&r()}const u=()=>{e.removeListener("open",s),e.removeListener("error",a),e.removeListener("close",o),this.off("close",c),this.off("upgrading",l)};e.once("open",s),e.once("error",a),e.once("close",o),this.once("close",c),this.once("upgrading",l),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{i||e.open()},200):e.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const e=[];for(let i=0;i<t.length;i++)~this.transports.indexOf(t[i])&&e.push(t[i]);return e}}let Vy=class extends Gy{constructor(t,e={}){const i=typeof t=="object",s=i?{...t}:{...e};(!s.transports||s.transports&&typeof s.transports[0]=="string")&&(s.transports=(s.transports||["polling","websocket","webtransport"]).map(r=>Oy[r]).filter(r=>!!r)),super(i?s:t,s)}};function Wy(n,t="",e){let i=n;e=e||typeof location<"u"&&location,n==null&&(n=e.protocol+"//"+e.host),typeof n=="string"&&(n.charAt(0)==="/"&&(n.charAt(1)==="/"?n=e.protocol+n:n=e.host+n),/^(https?|wss?):\/\//.test(n)||(typeof e<"u"?n=e.protocol+"//"+n:n="https://"+n),i=Gc(n)),i.port||(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";const r=i.host.indexOf(":")!==-1?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+r+":"+i.port+t,i.href=i.protocol+"://"+r+(e&&e.port===i.port?"":":"+i.port),i}const Xy=typeof ArrayBuffer=="function",qy=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n.buffer instanceof ArrayBuffer,vf=Object.prototype.toString,Yy=typeof Blob=="function"||typeof Blob<"u"&&vf.call(Blob)==="[object BlobConstructor]",$y=typeof File=="function"||typeof File<"u"&&vf.call(File)==="[object FileConstructor]";function Cl(n){return Xy&&(n instanceof ArrayBuffer||qy(n))||Yy&&n instanceof Blob||$y&&n instanceof File}function ta(n,t){if(!n||typeof n!="object")return!1;if(Array.isArray(n)){for(let e=0,i=n.length;e<i;e++)if(ta(n[e]))return!0;return!1}if(Cl(n))return!0;if(n.toJSON&&typeof n.toJSON=="function"&&arguments.length===1)return ta(n.toJSON(),!0);for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)&&ta(n[e]))return!0;return!1}function Zy(n){const t=[],e=n.data,i=n;return i.data=ea(e,t),i.attachments=t.length,{packet:i,buffers:t}}function ea(n,t,e){if(!n)return n;if(Cl(n)){const i={_placeholder:!0,num:t.length};return t.push(n),i}else if(Array.isArray(n)){const i=new Array(n.length);for(let s=0;s<n.length;s++)i[s]=ea(n[s],t);return i}else if(typeof n=="object"&&!(n instanceof Date)){if(n.toJSON&&typeof n.toJSON=="function"&&!e)return ea(n.toJSON(),t,!0);const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=ea(n[s],t));return i}return n}function Ky(n,t){return n.data=Wc(n.data,t),delete n.attachments,n}function Wc(n,t){if(!n)return n;if(n&&n._placeholder===!0){if(typeof n.num=="number"&&n.num>=0&&n.num<t.length)return t[n.num];throw new Error("illegal attachments")}else if(Array.isArray(n))for(let e=0;e<n.length;e++)n[e]=Wc(n[e],t);else if(typeof n=="object")for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&(n[e]=Wc(n[e],t));return n}const xf=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],jy=5;var Xt;(function(n){n[n.CONNECT=0]="CONNECT",n[n.DISCONNECT=1]="DISCONNECT",n[n.EVENT=2]="EVENT",n[n.ACK=3]="ACK",n[n.CONNECT_ERROR=4]="CONNECT_ERROR",n[n.BINARY_EVENT=5]="BINARY_EVENT",n[n.BINARY_ACK=6]="BINARY_ACK"})(Xt||(Xt={}));class Jy{constructor(t){this.replacer=t}encode(t){return(t.type===Xt.EVENT||t.type===Xt.ACK)&&ta(t)?this.encodeAsBinary({type:t.type===Xt.EVENT?Xt.BINARY_EVENT:Xt.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let e=""+t.type;return(t.type===Xt.BINARY_EVENT||t.type===Xt.BINARY_ACK)&&(e+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(e+=t.nsp+","),t.id!=null&&(e+=t.id),t.data!=null&&(e+=JSON.stringify(t.data,this.replacer)),e}encodeAsBinary(t){const e=Zy(t),i=this.encodeAsString(e.packet),s=e.buffers;return s.unshift(i),s}}class Pl extends De{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let e;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");e=this.decodeString(t);const i=e.type===Xt.BINARY_EVENT;i||e.type===Xt.BINARY_ACK?(e.type=i?Xt.EVENT:Xt.ACK,this.reconstructor=new Qy(e)):super.emitReserved("decoded",e)}else if(Cl(t)||t.base64)if(this.reconstructor)e=this.reconstructor.takeBinaryData(t),e&&(this.reconstructor=null,super.emitReserved("decoded",e));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let e=0;const i={type:Number(t.charAt(0))};if(Xt[i.type]===void 0)throw new Error("unknown packet type "+i.type);if(i.type===Xt.BINARY_EVENT||i.type===Xt.BINARY_ACK){const r=e+1;for(;t.charAt(++e)!=="-"&&e!=t.length;);const a=t.substring(r,e);if(a!=Number(a)||t.charAt(e)!=="-")throw new Error("Illegal attachments");const o=Number(a);if(!yf(o)||o<1)throw new Error("Illegal attachments");if(o>this.opts.maxAttachments)throw new Error("too many attachments");i.attachments=o}if(t.charAt(e+1)==="/"){const r=e+1;for(;++e&&!(t.charAt(e)===","||e===t.length););i.nsp=t.substring(r,e)}else i.nsp="/";const s=t.charAt(e+1);if(s!==""&&Number(s)==s){const r=e+1;for(;++e;){const a=t.charAt(e);if(a==null||Number(a)!=a){--e;break}if(e===t.length)break}i.id=Number(t.substring(r,e+1))}if(t.charAt(++e)){const r=this.tryParse(t.substr(e));if(Pl.isPayloadValid(i.type,r))i.data=r;else throw new Error("invalid payload")}return i}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,e){switch(t){case Xt.CONNECT:return va(e);case Xt.DISCONNECT:return e===void 0;case Xt.CONNECT_ERROR:return typeof e=="string"||va(e);case Xt.EVENT:case Xt.BINARY_EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&xf.indexOf(e[0])===-1);case Xt.ACK:case Xt.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Qy{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const e=Ky(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function tM(n){return typeof n=="string"}const yf=Number.isInteger||function(n){return typeof n=="number"&&isFinite(n)&&Math.floor(n)===n};function eM(n){return n===void 0||yf(n)}function va(n){return Object.prototype.toString.call(n)==="[object Object]"}function iM(n,t){switch(n){case Xt.CONNECT:return t===void 0||va(t);case Xt.DISCONNECT:return t===void 0;case Xt.EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&xf.indexOf(t[0])===-1);case Xt.ACK:return Array.isArray(t);case Xt.CONNECT_ERROR:return typeof t=="string"||va(t);default:return!1}}function nM(n){return tM(n.nsp)&&eM(n.id)&&iM(n.type,n.data)}const sM=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Pl,Encoder:Jy,get PacketType(){return Xt},isPacketValid:nM,protocol:jy},Symbol.toStringTag,{value:"Module"}));function vi(n,t,e){return n.on(t,e),function(){n.off(t,e)}}const rM=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Mf extends De{constructor(t,e,i){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=e,i&&i.auth&&(this.auth=i.auth),this._opts=Object.assign({},i),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[vi(t,"open",this.onopen.bind(this)),vi(t,"packet",this.onpacket.bind(this)),vi(t,"error",this.onerror.bind(this)),vi(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...e){var i,s,r;if(rM.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(e.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(e),this;const a={type:Xt.EVENT,data:e};if(a.options={},a.options.compress=this.flags.compress!==!1,typeof e[e.length-1]=="function"){const u=this.ids++,d=e.pop();this._registerAckCallback(u,d),a.id=u}const o=(s=(i=this.io.engine)===null||i===void 0?void 0:i.transport)===null||s===void 0?void 0:s.writable,c=this.connected&&!(!((r=this.io.engine)===null||r===void 0)&&r._hasPingExpired());return this.flags.volatile&&!o||(c?(this.notifyOutgoingListeners(a),this.packet(a)):this.sendBuffer.push(a)),this.flags={},this}_registerAckCallback(t,e){var i;const s=(i=this.flags.timeout)!==null&&i!==void 0?i:this._opts.ackTimeout;if(s===void 0){this.acks[t]=e;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let o=0;o<this.sendBuffer.length;o++)this.sendBuffer[o].id===t&&this.sendBuffer.splice(o,1);e.call(this,new Error("operation has timed out"))},s),a=(...o)=>{this.io.clearTimeoutFn(r),e.apply(this,o)};a.withError=!0,this.acks[t]=a}emitWithAck(t,...e){return new Promise((i,s)=>{const r=(a,o)=>a?s(a):i(o);r.withError=!0,e.push(r),this.emit(t,...e)})}_addToQueue(t){let e;typeof t[t.length-1]=="function"&&(e=t.pop());const i={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((s,...r)=>(this._queue[0],s!==null?i.tryCount>this._opts.retries&&(this._queue.shift(),e&&e(s)):(this._queue.shift(),e&&e(null,...r)),i.pending=!1,this._drainQueue())),this._queue.push(i),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const e=this._queue[0];e.pending&&!t||(e.pending=!0,e.tryCount++,this.flags=e.flags,this.emit.apply(this,e.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:Xt.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(i=>String(i.id)===t)){const i=this.acks[t];delete this.acks[t],i.withError&&i.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case Xt.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Xt.EVENT:case Xt.BINARY_EVENT:this.onevent(t);break;case Xt.ACK:case Xt.BINARY_ACK:this.onack(t);break;case Xt.DISCONNECT:this.ondisconnect();break;case Xt.CONNECT_ERROR:this.destroy();const i=new Error(t.data.message);i.data=t.data.data,this.emitReserved("connect_error",i);break}}onevent(t){const e=t.data||[];t.id!=null&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const e=this._anyListeners.slice();for(const i of e)i.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const e=this;let i=!1;return function(...s){i||(i=!0,e.packet({type:Xt.ACK,id:t,data:s}))}}onack(t){const e=this.acks[t.id];typeof e=="function"&&(delete this.acks[t.id],e.withError&&t.data.unshift(null),e.apply(this,t.data))}onconnect(t,e){this.id=t,this.recovered=e&&this._pid===e,this._pid=e,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Xt.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const e=this._anyListeners;for(let i=0;i<e.length;i++)if(t===e[i])return e.splice(i,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const e=this._anyOutgoingListeners;for(let i=0;i<e.length;i++)if(t===e[i])return e.splice(i,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const e=this._anyOutgoingListeners.slice();for(const i of e)i.apply(this,t.data)}}}function ws(n){n=n||{},this.ms=n.min||100,this.max=n.max||1e4,this.factor=n.factor||2,this.jitter=n.jitter>0&&n.jitter<=1?n.jitter:0,this.attempts=0}ws.prototype.duration=function(){var n=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),e=Math.floor(t*this.jitter*n);n=(Math.floor(t*10)&1)==0?n-e:n+e}return Math.min(n,this.max)|0};ws.prototype.reset=function(){this.attempts=0};ws.prototype.setMin=function(n){this.ms=n};ws.prototype.setMax=function(n){this.max=n};ws.prototype.setJitter=function(n){this.jitter=n};class Xc extends De{constructor(t,e){var i;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.opts=e,Fa(this,e),this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor((i=e.randomizationFactor)!==null&&i!==void 0?i:.5),this.backoff=new ws({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(e.timeout==null?2e4:e.timeout),this._readyState="closed",this.uri=t;const s=e.parser||sM;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=e.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var e;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(e=this.backoff)===null||e===void 0||e.setMin(t),this)}randomizationFactor(t){var e;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(e=this.backoff)===null||e===void 0||e.setJitter(t),this)}reconnectionDelayMax(t){var e;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(e=this.backoff)===null||e===void 0||e.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new Vy(this.uri,this.opts);const e=this.engine,i=this;this._readyState="opening",this.skipReconnect=!1;const s=vi(e,"open",function(){i.onopen(),t&&t()}),r=o=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",o),t?t(o):this.maybeReconnectOnOpen()},a=vi(e,"error",r);if(this._timeout!==!1){const o=this._timeout,c=this.setTimeoutFn(()=>{s(),r(new Error("timeout")),e.close()},o);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(s),this.subs.push(a),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(vi(t,"ping",this.onping.bind(this)),vi(t,"data",this.ondata.bind(this)),vi(t,"error",this.onerror.bind(this)),vi(t,"close",this.onclose.bind(this)),vi(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(e){this.onclose("parse error",e)}}ondecoded(t){Ua(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,e){let i=this.nsps[t];return i?this._autoConnect&&!i.active&&i.connect():(i=new Mf(this,t,e),this.nsps[t]=i),i}_destroy(t){const e=Object.keys(this.nsps);for(const i of e)if(this.nsps[i].active)return;this._close()}_packet(t){const e=this.encoder.encode(t);for(let i=0;i<e.length;i++)this.engine.write(e[i],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,e){var i;this.cleanup(),(i=this.engine)===null||i===void 0||i.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const e=this.backoff.duration();this._reconnecting=!0;const i=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(s=>{s?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",s)):t.onreconnect()}))},e);this.opts.autoUnref&&i.unref(),this.subs.push(()=>{this.clearTimeoutFn(i)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const Os={};function ia(n,t){typeof n=="object"&&(t=n,n=void 0),t=t||{};const e=Wy(n,t.path||"/socket.io"),i=e.source,s=e.id,r=e.path,a=Os[s]&&r in Os[s].nsps,o=t.forceNew||t["force new connection"]||t.multiplex===!1||a;let c;return o?c=new Xc(i,t):(Os[s]||(Os[s]=new Xc(i,t)),c=Os[s]),e.query&&!t.query&&(t.query=e.queryKey),c.socket(e.path,t)}Object.assign(ia,{Manager:Xc,Socket:Mf,io:ia,connect:ia});function qc(){const n=Bt.useId(),t=Bt.useSyncExternalStore(Xd,Na);return O.jsxs("section",{className:"co-sensitivity","aria-label":"視角設定",children:[O.jsxs("label",{htmlFor:n,children:["視角靈敏度 ",O.jsxs("output",{htmlFor:n,children:[t.toFixed(1)," 倍"]})]}),O.jsx("input",{id:n,type:"range",min:wl,max:El,step:Gd,value:t,"aria-valuetext":`${t.toFixed(1)} 倍`,onChange:e=>_a(Number(e.target.value))}),O.jsx("p",{children:"滑鼠與觸控共用倍率，水平與垂直同步調整；1 倍為原本手感。"}),O.jsx("button",{type:"button",onClick:()=>_a(ir),children:"恢復預設（2 倍）"})]})}const Ii={name:"虛空騎士",warningMs:1e4,location:{x:12,y:0,z:8},locationLabel:"地圖中央 1F，中央掩體東南側",enrageRate:1.22,alliedHp:3e3,collapseMs:900};[[80,20],[72,-82],[-24,-96],[-104,-33],[-78,72],[-16,84],[48,84],[12,8]].map(([n,t])=>({x:n,y:0,z:t}));const gu={durationMs:6e4,speed:1.1},aM="void-warden",Re={slash:{name:"三連斬",duration:1970,impact:[500,990,1640],range:7,angle:Math.PI*5/6,damage:22,recovery:780},dash:{name:"高速突刺",duration:1040,windup:680,range:16,width:1.6,damage:34,recovery:950},leap:{name:"跳躍下劈",duration:1250,lift:360,windup:690,range:12,radius:8,damage:40,recovery:900},burst:{name:"感染爆發",duration:1370,launch:790,impact:1220,radius:2.8,range:13,count:10,width:.82,damage:28,recovery:950}},Te={cracks:430,chains:880,reveal:1580,breakChains:3e3,land:3650,title:4520,finish:5250,titleDuration:1750},_u=n=>n?.state==="DESPAWN"?null:n?.ownerId??null,oM=(n,t)=>n.ownerId!==t&&n.state!=="SPAWN"&&n.state!=="DEFEATED"&&n.state!=="ALLIED"&&n.state!=="DESPAWN",cM=(n,t,e)=>(n>e?.65:1)*(t>e&&t-gu.durationMs<=e?gu.speed:1),Bi=1/60,Yc=250;class lM{accumulator=0;get alpha(){return this.accumulator/Bi}reset(){this.accumulator=0}advance(t,e){const i=this.accumulator+Math.max(0,t),s=Math.max(0,i-Yc/1e3);this.accumulator=Math.min(i,Yc/1e3);let r=0;for(;this.accumulator+1e-10>=Bi;)this.accumulator=Math.max(0,this.accumulator-Bi),e(),r++;return{steps:r,dropped:s}}}function Sf(n,t,e,i,s,r=0,a=0){n.yaw=t.yaw,n.pitch=t.pitch,il(n,{...t,lookX:0,lookY:0},Bi,e,cM(r,a,s),i)}function hM(n,t,e,i,s,r=0,a=0){for(const o of t)Sf(n,o,e,i,s+Bi*1e3,r,a),i+=Bi,s+=Bi*1e3;return i}class uM{constructor(t=600){this.capacity=t}metrics=new Map;record(t,e){if(!Number.isFinite(e)||e<0)return;let i=this.metrics.get(t);i||(i={values:[],cursor:0,count:0,sum:0,max:0},this.metrics.set(t,i)),i.values.length<this.capacity?i.values.push(e):(i.values[i.cursor]=e,i.cursor=(i.cursor+1)%this.capacity),i.count++,i.sum+=e,i.max=Math.max(i.max,e)}summary(){return Object.fromEntries([...this.metrics].map(([t,e])=>{const i=e.values.slice().sort((r,a)=>r-a),s=r=>i[Math.max(0,Math.ceil(i.length*r)-1)]??0;return[t,{count:e.count,sum:e.sum,mean:e.sum/e.count,p50:s(.5),p95:s(.95),p99:s(.99),max:e.max,samples:i.length}]}))}reset(){this.metrics.clear()}}class dM{element;elapsed=0;metrics=new uM(600);constructor(t){new URLSearchParams(location.search).get("chromaDiagnostics")==="1"&&(this.element=document.createElement("pre"),this.element.dataset.gameUi="diagnostics",this.element.setAttribute("aria-label","Network diagnostics"),Object.assign(this.element.style,{position:"absolute",top:"55px",left:"8px",zIndex:"80",pointerEvents:"none",font:"11px monospace",padding:"8px",color:"#b9ffce",background:"#001b25dd",whiteSpace:"pre-wrap"}),t.append(this.element))}record(t,e){this.element&&this.metrics.record(t,e)}update(t,e){if(!this.element||(this.elapsed+=t,this.elapsed<.25))return;this.elapsed=0;const i=this.metrics.summary(),s=r=>{const a=i[r];return a?`${a.p50.toFixed(2)} / ${a.p95.toFixed(2)} / ${a.p99.toFixed(2)} / ${a.max.toFixed(2)}`:"—"};this.element.textContent=`Network diagnostics (P50/P95/P99/max)
Frame ms: ${s("frame_ms")}
Snapshot ms: ${s("snapshot_ms")}
Correction units: ${s("correction")}
RTT: ${e.rtt} ms | Pending: ${e.pending}
Camera offset: ${e.camera.toFixed(3)} | Resets: ${e.resets}`}dispose(){this.element?.remove(),this.metrics.reset()}}let fM=0;class pM{constructor(t,e){this.root=t;const i=`co-tactical-${++fM}`;this.shell.className="co-tactical",this.shell.dataset.gameUi="",this.shell.innerHTML=`<button type="button" class="co-tactical-trigger" aria-label="戰術板" aria-controls="${i}" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 3v18M14 13h3m-3 4h3"/></svg></button>
      <section class="co-mp-roster" id="${i}" aria-label="戰術板" tabindex="-1">
      <header class="co-tactical-heading"><b></b><button type="button" class="co-tactical-close" aria-label="關閉戰術板">×</button></header>
      <div class="co-tactical-scroll"><div class="co-tactical-columns" aria-hidden="true"><span>名次</span><span>玩家</span><span>積分</span><span>賞金</span><span>K/D</span></div><div class="co-tactical-rows"></div></div></section>`,t.append(this.shell),this.panel=this.shell.querySelector(".co-mp-roster"),this.trigger=this.shell.querySelector(".co-tactical-trigger"),this.body=this.shell.querySelector(".co-tactical-rows"),this.heading=this.shell.querySelector(".co-tactical-heading b"),this.setTouchMode(e),t.addEventListener("click",this.onClick,!0),t.addEventListener("pointerdown",this.onPointerDown,!0),t.addEventListener("pointermove",this.onPointerMove,!0),t.addEventListener("pointerup",this.onPointerEnd,!0),t.addEventListener("pointercancel",this.onPointerEnd,!0),window.PointerEvent||(t.addEventListener("touchstart",this.onTouchStart,{capture:!0,passive:!1}),t.addEventListener("touchmove",this.onTouchMove,{capture:!0,passive:!1}),t.addEventListener("touchend",this.onTouchEnd,!0),t.addEventListener("touchcancel",this.onTouchEnd,!0)),t.addEventListener("armory:open",this.close),window.addEventListener("keydown",this.onKey),window.addEventListener("blur",this.onBlur),window.addEventListener("resize",this.layout)}shell=document.createElement("div");panel;trigger;body;heading;rows=new Map;open=!1;touch=!1;active=!0;gestures=new Map;suppressClick=!1;get isOpen(){return this.touch&&this.open}setTouchMode(t){this.touch=t,this.root.classList.toggle("co-touch-ui",t),this.close()}setActive(t){this.active=t,t||this.close(),this.shell.hidden=!t}toggle(){if(!(!this.touch||!this.active)){if(this.open){this.close();return}this.open=!0,this.panel.hidden=!1,this.trigger.setAttribute("aria-expanded","true"),this.root.dispatchEvent(new Event("tactical:open")),this.layout()}}close=()=>{this.open=!1,this.panel.hidden=this.touch,this.trigger.setAttribute("aria-expanded","false"),this.layout()};onBlur=()=>{this.close(),this.gestures.clear(),this.suppressClick=!1};onKey=t=>{this.isOpen&&t.key==="Escape"&&(t.preventDefault(),this.close(),this.trigger.focus({preventScroll:!0}))};contains(t){return t instanceof Node&&this.shell.contains(t)}consume(t,e=!1){e&&t.preventDefault(),t.stopImmediatePropagation()}onPointerDown=t=>{if(!(!this.touch||!this.active)){if(this.suppressClick=!1,this.contains(t.target)){this.gestures.set(t.pointerId,!1),this.consume(t);return}this.open&&(this.close(),this.gestures.set(t.pointerId,!0),this.suppressClick=!0,this.root.setPointerCapture?.(t.pointerId),this.consume(t,!0))}};onPointerMove=t=>{this.gestures.has(t.pointerId)&&this.consume(t,this.gestures.get(t.pointerId))};onPointerEnd=t=>{if(!this.gestures.has(t.pointerId))return;const e=this.gestures.get(t.pointerId);this.gestures.delete(t.pointerId),this.consume(t,e)};onTouchStart=t=>{if(!this.touch||!this.active)return;this.suppressClick=!1;const e=this.contains(t.target),i=this.open&&!e;if(!(!e&&!i)){i&&(this.close(),this.suppressClick=!0);for(const s of Array.from(t.changedTouches))this.gestures.set(s.identifier,i);this.consume(t,i)}};onTouchMove=t=>{const e=Array.from(t.changedTouches);e.length&&e.every(i=>this.gestures.has(i.identifier))&&this.consume(t,e.some(i=>this.gestures.get(i.identifier)))};onTouchEnd=t=>{const e=Array.from(t.changedTouches),i=e.every(r=>this.gestures.has(r.identifier)),s=e.some(r=>this.gestures.get(r.identifier));for(const r of e)this.gestures.delete(r.identifier);i&&this.consume(t,s)};onClick=t=>{if(!this.touch||!this.active)return;if(this.suppressClick){this.suppressClick=!1,this.consume(t,!0);return}const e=t.target;!(e instanceof Element)||!this.contains(e)||(this.consume(t),e.closest(".co-tactical-trigger")?this.toggle():e.closest(".co-tactical-close")&&(this.close(),this.trigger.focus({preventScroll:!0})))};update(t,e,i){this.heading.textContent=`${e||"房間"} · ${Math.round(i)}ms`;const s=this.shell.querySelector(".co-tactical-scroll"),r=s.scrollTop,a=ly(t),o=new Set(a.map(c=>c.id));for(const[c,l]of this.rows)o.has(c)||(l.remove(),this.rows.delete(c));a.forEach((c,l)=>{let u=this.rows.get(c.id);if(!u){u=document.createElement("div"),u.className="co-tactical-row";for(let h=0;h<5;h++)u.append(document.createElement("span"));this.rows.set(c.id,u)}[String(c.rank),c.name,String(c.score),String(c.bounty),`${c.kills}/${c.deaths}`].forEach((h,p)=>{u.children[p].textContent!==h&&(u.children[p].textContent=h)}),u.classList.toggle("is-high-bounty",c.bounty>=af),this.body.children[l]!==u&&this.body.insertBefore(u,this.body.children[l]??null)}),s.scrollTop=r,this.layout()}layout=()=>{const t=this.touch&&!this.open?this.trigger:this.panel;this.root.style.setProperty("--co-roster-bottom",`${t.getBoundingClientRect().bottom-this.root.getBoundingClientRect().top}px`)};dispose(){this.gestures.clear(),this.rows.clear(),this.root.removeEventListener("click",this.onClick,!0),this.root.removeEventListener("pointerdown",this.onPointerDown,!0),this.root.removeEventListener("pointermove",this.onPointerMove,!0),this.root.removeEventListener("pointerup",this.onPointerEnd,!0),this.root.removeEventListener("pointercancel",this.onPointerEnd,!0),this.root.removeEventListener("touchstart",this.onTouchStart,!0),this.root.removeEventListener("touchmove",this.onTouchMove,!0),this.root.removeEventListener("touchend",this.onTouchEnd,!0),this.root.removeEventListener("touchcancel",this.onTouchEnd,!0),this.root.removeEventListener("armory:open",this.close),window.removeEventListener("keydown",this.onKey),window.removeEventListener("blur",this.onBlur),window.removeEventListener("resize",this.layout),this.root.classList.remove("co-touch-ui"),this.root.style.removeProperty("--co-roster-bottom"),this.shell.remove()}}const mM=18;function An(n,t){return typeof n=="object"&&n!==null&&n.roundId===t}const na=72,vu=1.1,xu=1.65,yu=new Pt(16763490),Mu=new Pt(16739094),Su=new Pt(12331270),gM=Array.from({length:na},(n,t)=>{const e=t*2.399963;return{emitter:t%2,side:Math.cos(e),outward:.66+Math.abs(Math.sin(e))*.68,spread:.6+t%9*.17,lift:1.2+t%11*.26,delay:t*.618%1,lifetime:.49+t%13*.043,size:.046+t%7*.012}});class _M{group=new ve;emitters=[new xe,new xe];sources=[new P,new P];geometry=new ge;vertices=new Float32Array(na*18);colors=new Float32Array(na*18);inverse=new ne;shockwave;constructor(){this.group.name="Infection burst",this.group.visible=!1,this.emitters[0].position.set(.07,.72,.41),this.emitters[1].position.set(-.38,1.24,-.58),this.geometry.setAttribute("position",new Fe(this.vertices,3).setUsage(Ui)),this.geometry.setAttribute("color",new Fe(this.colors,3).setUsage(Ui)),this.geometry.setDrawRange(0,0);const t=new Lt(this.geometry,new Zt({vertexColors:!0,side:Ce,depthWrite:!1,transparent:!0,blending:ui,toneMapped:!1}));t.frustumCulled=!1,t.renderOrder=2,this.group.add(t),this.shockwave=new Lt(new nn(4.65,4.65),new We({uniforms:{progress:{value:0}},depthWrite:!1,transparent:!0,blending:ui,toneMapped:!1,vertexShader:`
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
        }`})),this.shockwave.rotation.x=-Math.PI/2,this.shockwave.position.y=.028,this.shockwave.renderOrder=1,this.group.add(this.shockwave)}update(t,e){if(this.group.visible=t!==null,t===null)return;this.shockwave.visible=t<.82,this.shockwave.material.uniforms.progress.value=Math.min(1,t/.82),this.group.updateWorldMatrix(!0,!1),this.inverse.copy(this.group.matrixWorld).invert();for(const[c,l]of this.emitters.entries())l.getWorldPosition(this.sources[c]).applyMatrix4(this.inverse);const i=t<vu,s=i?e?36:na:e?14:32,r=i?t:t-vu,a=i?1:.52;let o=0;for(let c=0;c<s;c++){const{emitter:l,side:u,outward:d,spread:h,lift:p,delay:g,lifetime:_,size:m}=gM[c],f=i?r-g*.12:(r+g*xu)%xu;if(f<0||f>=_)continue;const S=this.sources[l],E=l===0?1:-1,M=f/_,w=i?.34*(1-Math.exp(-8*f)):0,y=S.x+u*h*(a*f+w),A=S.y+(p*a-1.7*f)*f,x=S.z+E*d*(a*f+w*.73),T=m*(1-M*.59),C=T*(i?3.5:2.5),L=Math.min(1,f/.032)*(1-M)**1.25*(i?1.14:.95);o=this.vertex(o,y,A+T,x,yu,L),o=this.vertex(o,y-T,A,x+T*.45,Mu,L*.8),o=this.vertex(o,y-u*C,A-C,x-E*C*.5,Su,L*.42),o=this.vertex(o,y,A+T,x,yu,L),o=this.vertex(o,y+T,A,x-T*.45,Mu,L*.8),o=this.vertex(o,y-u*C,A-C,x-E*C*.5,Su,L*.42)}if(this.geometry.setDrawRange(0,o/3),o)for(const c of["position","color"]){const l=this.geometry.getAttribute(c);l.clearUpdateRanges(),l.addUpdateRange(0,o),l.needsUpdate=!0}}vertex(t,e,i,s,r,a){return this.vertices[t]=e,this.vertices[t+1]=i,this.vertices[t+2]=s,this.colors[t]=r.r*a,this.colors[t+1]=r.g*a,this.colors[t+2]=r.b*a,t+3}}const vM=4.8,QM=[{id:"idle",label:"待機"},{id:"walk",label:"走路"},{id:"attack",label:"三連斬"}],Ci=2695994,Br=4469333,Pi=1643810,xM=16741150,bf=[[1,.42],[.42,1],[-.42,1],[-1,.42],[-1,-.42],[-.42,-1],[.42,-1],[1,-.42]],Vs=[[-.13,.076,.184,0,.066],[-.073,.084,.177,0,.068],[.06,.045,.061]],yM=bf.map(([n,t])=>new P(n*Vs[0][1],Vs[0][0],t*Vs[0][2]+Vs[0][4])),Eo=2.22,bu=1.42,wu=30;function MM(){const t=new Uint8Array(4096);for(let i=0;i<32;i++)for(let s=0;s<32;s++){const r=Math.hypot((s+.5)/32-.5,(i+.5)/32-.5)*2,a=(i*32+s)*4;t.set([255,255,255,Math.round(255*Math.max(0,1-r)**2)],a)}const e=new _l(t,32,32);return e.magFilter=e.minFilter=Ge,e.needsUpdate=!0,e}function SM(n){const t=[],e=[],i=new Pt;for(const[r,a,o,c]of n){i.setHex(c);for(const[l,u,d]of[r,a,o])t.push(l,u,d),e.push(i.r,i.g,i.b)}const s=new ge;return s.setAttribute("position",new ae(t,3)),s.setAttribute("color",new ae(e,3)),s.computeVertexNormals(),s}function Dn(n,t,e,i,s,r,a=r){n.push([t,e,i,r],[t,i,s,a])}function Ue(n,t,e=bf){const i=[],s=n.map(([o,c,l,u=0,d=0])=>e.map(([h,p])=>[u+h*c,o,d+p*l])),r=e.length;for(let o=1;o<s.length;o++)for(let c=0;c<r;c++){const l=(c+1)%r;Dn(i,s[o-1][l],s[o-1][c],s[o][c],s[o][l],t[c%t.length],t[(c+o%2)%t.length])}const a=s[s.length-1];for(let o=1;o<r-1;o++)i.push([s[0][0],s[0][o],s[0][o+1],t[0]]),i.push([a[0],a[o+1],a[o],t[0]]);return i}function bM(){const n=[[0,.192,.32],[.132,.237,.27],[.285,.27,.173],[.321,.092,.17],[.277,-.074,.199],[.202,-.224,.267],[0,-.344,.352],[0,-.089,.402]],t=n.flatMap((d,h)=>{const[p,g,_]=d,[m,f,S]=n[(h+1)%n.length];return[d,[(p+m)/2,(g+f)/2,(_+S)/2]]}),e=.34,i=.161,s=-.12,r=(d,h)=>.434-.78*d-.18*h,a=t.map((d,h)=>{const p=(7-h)*Math.PI/8,g=Math.sin(p),_=Math.cos(p)*.056*(1-.3*g),m=g*.102,f=i+_*Math.cos(e)+m*Math.sin(e),S=s+m*Math.cos(e)-_*Math.sin(e);return[f,S,r(f,S)]}),o=[i-.015,s-.004,r(i,s)-.115],c=[15854817,15394269,14998998,15196121,15920096,15854048,16117219,15985892],l=[],u=[];for(const d of[-1,1]){const h=[],p=a.map(([_,m,f])=>[_-.015,m-.004,f-.105]),g=([_,m,f])=>[d*_,m,f];for(let _=0;_<a.length;_++){const m=(_+1)%a.length;if(Dn(h,t[_],t[m],a[m],a[_],c[Math.floor(_/2)]),Dn(h,a[_],a[m],p[m],p[_],788753),u.push([g(o),g(p[_]),g(p[m]),16777215]),_<12){const f=([S,E,M])=>[S*.9,E+.011,M-.099];Dn(h,t[_],f(t[_]),f(t[m]),t[m],13287615)}}for(const[_,m,f,S]of h)l.push([g(_),g(m),g(f),S])}return{faceplate:l,eyeWells:u}}function wM(n,t,e,i){const s=(o,c)=>{const l=c===.5?.29:c===0?-.51:-.3,u=n+(c-.5)*t+o*(i<4?.064:-.044),d=[.46,.72,.97,1.16][o]+(c===.5?.059:0),h=o===3?e+l:[0,.43,1.01][o];return[Math.sin(u)*d,-.04-h+Math.cos(u)*.12,Math.cos(u)*d*.66-.13]},r=[],a=[3746635,2628918,5259360,3352388,5847117];for(let o=0;o<2;o++)for(const c of[0,.5]){const l=(i+o+c*2)%a.length;Dn(r,s(o,c),s(o+1,c),s(o+1,c+.5),s(o,c+.5),a[l],a[(l+1)%a.length])}for(const o of[0,.5]){const c=i%3===0&&o===.5?8997446:a[(i+3)%a.length];Dn(r,s(2,o),s(3,o),s(3,o+.5),s(2,o+.5),c,a[(i+1)%a.length])}return r}const wf=2.78,EM=[[.41,.59],[.9,1.09],[1.52,1.76]],To=[[0,0,0,0,.65,1.94,.24,47,-54],[.41,.08,-.38,.46,.96,2.03,.66,91,37],[.5,.37,.06,.63,.54,1.58,1.22,5,1],[.59,.47,.54,.77,-.4,1.13,1.34,-91,-26],[.66,.47,.53,.79,-.43,1.1,1.37,-94,-28],[.9,.43,.51,.51,-.43,2.04,1.27,-90,36],[.99,.6,.04,.66,.3,1.55,1.47,-2,2],[1.09,.68,-.43,.76,1.04,1.12,1.08,94,-26],[1.17,.68,-.44,.76,1.07,1.1,1.1,96,-27],[1.52,.59,-.23,.38,.82,2.55,1.06,55,61],[1.64,.86,.06,.69,.49,1.98,1.52,8,16],[1.76,1.03,.37,.88,-.2,1.11,1.83,-40,-31],[1.92,1.02,.34,.88,-.22,1.05,1.83,-43,-29],[2.59,0,0,0,.65,1.94,.24,47,-54],[wf,0,0,0,.65,1.94,.24,47,-54]].map(([n,...t])=>({time:n,values:t})),zr=.69,Ao=.66,Eu=new P(0,-1,0),Tu=2;class TM{group=new ve;triangleCount;hips=new ve;body=new ve;infectionBurst=new _M;head=new ve;arms=[];legs=[];cape=[];plates=new zs({vertexColors:!0,roughness:.78,metalness:.12});fabric=new zs({vertexColors:!0,side:Ce,roughness:.97});face=new zs({vertexColors:!0,side:Ce,roughness:.49});eyeWells=new Zt({color:262918,side:Ce});glow=new zs({vertexColors:!0,color:16764303,emissive:xM,emissiveIntensity:1.1,roughness:.58});particleGeometry=new ge;glowMap=MM();particleMaterial=new fd({map:this.glowMap,color:16752723,size:.13,transparent:!0,opacity:.85,depthWrite:!1,blending:ui});haloMaterial=new Ta({map:this.glowMap,color:16741424,transparent:!0,opacity:.24,depthWrite:!1,blending:ui,toneMapped:!1});particlePositions=new Float32Array(wu*3);sole=new P;inverseRoot=new ne;weaponTipAxis=new P;weaponTipDistance=0;hiltPosition=new P;bladeDirection=new P;weaponGroup=new ve;rootRotation=new Gi;jointRotation=new Gi;shoulderPosition=new P;elbowDirection=new P;handDirection=new P;elbowBend=new P;bladeBase=new xe;bladeTip=new xe;constructor(){this.group.name="Void Warden",this.group.add(this.hips),this.hips.position.y=Eo,this.hips.add(this.body),this.body.add(this.head),this.head.position.set(0,bu,.05),this.piece(this.hips,Ue([[-.25,.134,.145],[-.075,.326,.221],[.16,.225,.193]],[Pi,Ci,Br])),this.piece(this.body,Ue([[0,.19,.17],[.31,.245,.222],[.77,.346,.258],[1.08,.439,.233],[1.28,.189,.172]],[2367789,2695473,4140873,1775653,3483969])),this.piece(this.body,Ue([[1.08,.174,.12],[1.46,.141,.137]],[Pi,Ci])),this.piece(this.head,Ue([[-.298,.1,.112,0,-.036],[-.158,.221,.165,0,-.055],[.095,.282,.215,0,-.081],[.246,.244,.19,0,-.087],[.284,.16,.126,0,-.089]],[Pi,Ci]));const{faceplate:t,eyeWells:e}=bM();this.piece(this.head,t,this.face).name="Faceplate",this.piece(this.head,e,this.eyeWells).name="Recessed eyes";const i=[14076615,15787736,16183784,14604237,15590616,13352381,12958140,15063502];for(const c of[-1,1]){const l=c===1,u=vM-Eo-bu+(l?.033:-.073);this.piece(this.head,Ue([[.105,.139,.126,c*.207,.105],[.249,.123,.138,c*.295,.053],[.386,.11,.128,c*.375,-.005],[.54,.098,.106,c*.432,-.051],[.69,.081,.09,c*(l?.463:.456),-.092],[.83,.063,.071,c*(l?.444:.432),-.113],[.946,.042,.049,c*(l?.397:.379),-.137],[u-.07,.024,.027,c*(l?.342:.337),-.158],[u,.002,.002,c*(l?.291:.307),-.179]],i)),l&&this.piece(this.head,Ue([[.642,.045,.055,.415,-.081],[.749,.033,.04,.373,-.086],[.841,.002,.003,.304,-.073]],i));const d=this.joint(this.body,c*.448,1.016,0),h=this.joint(d,0,-zr,0),p=this.joint(h,0,-Ao,0);this.arms.push({shoulder:d,elbow:h,hand:p}),this.piece(d,Ue([[-.71,.057,.061],[-.46,.071,.078],[-.18,.106,.109],[.02,.153,.144,c*.038],[.13,.095,.091]],[Pi,Ci,Br,4404044])),this.piece(h,Ue([[-.68,.049,.055],[-.52,.063,.076],[-.24,.094,.094],[-.052,.105,.112],[.07,.064,.069]],[Ci,Pi,3353150,4863828])),this.piece(p,Ue([[-.205,.042,.052],[-.145,.086,.091],[-.04,.091,.092],[.04,.063,.069]],[Pi,Ci]));const g=[];for(let S=0;S<3;S++){const E=(S-1)*.05;g.push(...Ue([[-.26,.023,.036,E,.02],[-.16,.032,.053,E,.044],[-.074,.026,.045,E,.045]],[Ci,Pi,5324890]))}this.piece(p,g);const _=this.joint(this.hips,c*.214,-.07,0),m=this.joint(_,0,-1.045,0),f=this.joint(m,0,-.99,0);this.legs.push({thigh:_,shin:m,foot:f}),this.piece(_,Ue([[-1.08,.063,.078],[-.85,.071,.084],[-.36,.108,.116],[-.06,.136,.133],[.09,.102,.104]],[Pi,2761011,3812420,Ci])),this.piece(m,Ue([[-.99,.034,.049],[-.76,.045,.055],[-.26,.072,.086],[-.055,.092,.107,0,.015],[.07,.063,.072]],[Ci,Pi,Br,3352124])),this.piece(f,Ue(Vs,[Pi,Ci,Br]))}const s=[1.32,1.96,2.24,1.85,2.01,2.21,1.88,1.4];s.forEach((c,l)=>{const u=.67+l*(2*Math.PI-1.34)/(s.length-1),d=this.piece(this.body,wM(u,.87,c,l),this.fabric);d.position.y=1.15,this.cape.push(d)});const r=[];for(const[c,l]of[.35,1,1.72,2.47,3.18,3.94,4.69,5.44].entries()){const u=[6966126,3877706,5850207,2695219],d=(m,f,S)=>[Math.sin(m)*f,S,Math.cos(m)*f*.71-.04],h=d(l,.21,1.28),p=d(l+.76,.23,1.31),g=d(l+.74,.69,1.035),_=d(l+.01,.68,1.055);Dn(r,h,p,g,_,u[c%4],u[(c+1)%4]),r.push([_,g,d(l+.42,.88,.79),u[(c+2)%4]])}this.piece(this.body,r,this.fabric),this.infection(),this.weapon(this.arms[1].hand);let a=0;this.group.traverse(c=>{c instanceof Lt&&(a+=(c.geometry.index?.count??c.geometry.getAttribute("position").count)/3)}),this.triangleCount=a,this.particleGeometry.setAttribute("position",new Fe(this.particlePositions,3).setUsage(Ui)),this.particleGeometry.setDrawRange(0,18);const o=new tr(this.particleGeometry,this.particleMaterial);o.frustumCulled=!1,this.group.add(o,this.infectionBurst.group),this.body.add(...this.infectionBurst.emitters),this.pose("idle",0,!1)}joint(t,e,i,s){const r=new ve;return r.position.set(e,i,s),t.add(r),r}piece(t,e,i=this.plates){const s=new Lt(SM(e),i);return t.add(s),s}infection(){const t=[],e=[];for(const[i,s,r,a]of[[.078,.69,.254,.46],[-.4,1.23,-.37,1.16],[-.13,1.16,-.48,.69]]){const o=Math.sign(r),c=new Aa(this.haloMaterial);c.position.set(i,s+.01,r+.24*o),c.scale.setScalar(.83*a),this.body.add(c);const l=Ue([[s-.19*a,.094*a,.07*a,i,r],[s-.08*a,.26*a,.16*a,i,r],[s+.11*a,.24*a,.19*a,i,r],[s+.23*a,.07*a,.07*a,i,r]],[3285554,6305608,2169643,5386305]);t.push(...l),e.push(...Ue([[s-.175*a,.02,.022,i,r+.11*o*a],[s-.06*a,.117*a,.082*a,i,r+.14*o*a],[s+.059*a,.15*a,.094*a,i-.02,r+.16*o*a],[s+.18*a,.033,.038,i+.02,r+.125*o*a]],[16753477,16741680,16761188,15681556,16745506,16756539]));const u=(d,h,p)=>[i+d*a,s+h*a,r+p*o*a];e.push([u(-.03,-.03,.235),u(.022,-.04,.235),u(-.056,-.34,.11),15746323],[u(.03,.05,.244),u(.06,.016,.239),u(.195,.142,.14),16738594],[u(-.09,.045,.21),u(-.12,.02,.2),u(-.24,.12,.05),16340516])}this.piece(this.body,t),this.piece(this.body,e,this.glow)}weapon(t){const e=this.weaponGroup;e.position.set(0,-.1,.07),e.scale.setScalar(Tu),t.add(e);const i=[[0,1],[-1,0],[0,-1],[1,0]];this.piece(e,Ue([[-.28,.074,.08],[-.13,.078,.085],[.14,.075,.08],[.24,.115,.13],[.4,.061,.068]],[4075847,2169127,6706279,4534349])),this.piece(e,Ue([[-.45,.15,.11],[-.37,.28,.13],[-.25,.32,.15],[-.2,.11,.085]],[8878484,5256531,12366005,3614781],i)),this.piece(e,Ue([[-2.12,.002,.003,.098],[-1.51,.077,.054,.021],[-.67,.162,.115],[-.4,.194,.129],[-.3,.109,.08]],[12823993,7889789,14268610,9667998],i)),this.piece(e,Ue([[-1.51,.006,.008,.04,.05],[-.73,.022,.014,.015,.113],[-.45,.038,.018,.006,.127]],[16741680,15224094],i),this.glow),this.bladeBase.position.set(0,-.47,0),this.bladeTip.position.set(.098,-2.12,0),this.weaponTipAxis.copy(this.bladeTip.position).multiplyScalar(Tu).add(e.position),this.weaponTipDistance=this.weaponTipAxis.length(),this.weaponTipAxis.divideScalar(this.weaponTipDistance),e.add(this.bladeBase,this.bladeTip)}pose(t,e,i){this.weaponGroup.visible=!0;const s=e*(i?Ii.enrageRate:1),r=s%wf,a=s*Math.PI*1.75,o=Math.sin(s*2.7),c=t==="walk",l=t==="attack";let u=0,d=0,h=0,p=0,g=0,_=0,m=0,f=0;const S=l&&EM.some(([E,M])=>r>=E&&r<=M);if(l){const E=To.findIndex(C=>C.time>r),{time:M,values:w}=To[E-1],{time:y,values:A}=To[E],x=(r-M)/(y-M),T=S?x:x*x*(3-2*x);[u,d,h,p,g,_,m,f]=w.map((C,L)=>Ae.lerp(C,A[L],T))}this.hips.position.set(0,Eo+(c?-.06+Math.abs(Math.sin(a))*.075:o*.016),u),this.hips.rotation.y=c?Math.sin(a)*.085:d*.21,this.body.rotation.set((c?.1:h)+(i?.06:0),d*.79,c?Math.sin(a)*.05:-d*.045),this.head.rotation.set(-this.body.rotation.x*.68+o*.025,-d*.34,i?-.07:o*.021);for(let E=0;E<2;E++){const M=E===0?-1:1,w=c?Math.sin(a)*M:0,{thigh:y,shin:A,foot:x}=this.legs[E];if(y.rotation.set(w*.41,M*.1,M*(c?.088:.145)),A.rotation.x=Math.max(0,-w)*.66,l){const F=Math.min(1,h/.7);y.rotation.x=(M===1?-1.19:.72)*F,A.rotation.x=(M===1?1.68:.25)*F}x.rotation.x=-(y.rotation.x+A.rotation.x)*(l?1:.65);const{shoulder:T,elbow:C,hand:L}=this.arms[E];M===1?(T.rotation.set(-.12-w*.18-(c?.19:0),0,.14),C.rotation.set(-.25-Math.max(0,w)*.19,0,0),L.rotation.set(-.34,.046,.12)):(T.rotation.set(-.04-w*.38-h*.8,-.12,-.14-Math.abs(d)*.38),C.rotation.x=-.21-Math.abs(d)*.33,L.rotation.set(-.03,.01,-.05))}return this.plantFeet(),l?this.swingBlade(p,g,_,m,f):this.aimBlade(c?39+Math.sin(a)*4:73,-27),this.cape.forEach((E,M)=>{E.rotation.x=(c?.046:.012)*Math.sin(s*3.2+M*.48)-h*.18,E.rotation.z=(c?.066:.025)*Math.sin(s*2.8+M*.42)-d*.11}),this.glow.emissiveIntensity=(i?2.5:.9)+(o+1)*(i?.4:.16),this.haloMaterial.opacity=(i?.53:.22)+(o+1)*(i?.08:.025),this.eyeWells.color.setHex(i?16738323:262918),i&&this.eyeWells.color.multiplyScalar(1.1+(o+1)*.43),S}swingBlade(t,e,i,s,r){const{shoulder:a,elbow:o,hand:c}=this.arms[1];a.getWorldPosition(this.shoulderPosition).applyMatrix4(this.inverseRoot),this.handDirection.set(t,e,i).sub(this.shoulderPosition);const l=Ae.clamp(this.handDirection.length(),.12,zr+Ao-.015);this.handDirection.normalize();const u=(zr**2-Ao**2+l**2)/(2*l),d=Math.sqrt(Math.max(0,zr**2-u**2));this.elbowBend.set(.85,-.58,-.37),this.elbowBend.addScaledVector(this.handDirection,-this.elbowBend.dot(this.handDirection)).normalize(),this.elbowDirection.copy(this.handDirection).multiplyScalar(u).addScaledVector(this.elbowBend,d),this.aimJoint(a,Eu,this.elbowDirection),this.handDirection.multiplyScalar(l).sub(this.elbowDirection),this.aimJoint(o,Eu,this.handDirection),this.aimBlade(s,r)}aimBlade(t,e){const{hand:i}=this.arms[1];i.getWorldPosition(this.hiltPosition).applyMatrix4(this.inverseRoot);const s=Ae.degToRad(t),r=Ae.degToRad(e),a=Ae.clamp((.105-this.hiltPosition.y)/this.weaponTipDistance,-1,1),o=Math.max(Math.sin(r),a),c=Math.sqrt(1-o*o);this.bladeDirection.set(Math.sin(s)*c,o,Math.cos(s)*c),this.aimJoint(i,this.weaponTipAxis,this.bladeDirection)}entrancePose(t){this.pose("idle",t/1e3,!1);const{land:e,title:i}=Te,r=1-Ae.smoothstep(t,e+80,i+400);this.body.rotation.x=.53*r,this.head.rotation.x=.4*r;const a=Ae.smoothstep(t,e-125,e+40)*(1-Ae.smoothstep(t,e+80,e+640));if(a>0){for(const{thigh:c,shin:l,foot:u}of this.legs)c.rotation.x=-.56*a,l.rotation.x=1.13*a,u.rotation.x=-.57*a;this.plantFeet()}for(const[c,{shoulder:l,elbow:u}]of this.arms.entries()){const d=c===0?-1:1;l.rotation.set(-.26*r,d*.12*r,d*(.14+.43*r)),u.rotation.x=-.23-.48*r}this.weaponGroup.visible=t>=e+130;const o=Math.sin(Math.PI*Ae.smoothstep(t,e+140,Te.finish));this.aimBlade(73-27*o,-27+53*o)}combatPose(t,e,i){const s=Math.max(0,e);if(t==="slash"){this.pose("attack",Math.min(s,Re.slash.duration)/1e3/(i?Ii.enrageRate:1),i);return}if(this.pose("idle",s/1e3,i),t==="dash"){const r=Ae.smoothstep(s,0,Re.dash.windup);this.body.rotation.x=.58*r,this.head.rotation.x=-.3*r,this.swingBlade(.58,1.63-.42*r,.28+.85*r,24-24*r,20-22*r)}else if(t==="leap"){const r=Ae.smoothstep(s,Re.leap.windup,Re.leap.duration);this.body.rotation.x=.1+.65*r,this.head.rotation.x=-.34*r,this.swingBlade(.64-.35*r,2.52-1.31*r,.7+.76*r,50-73*r,71-110*r)}else{const r=Math.sin(Math.PI*Ae.smoothstep(s,180,Re.burst.duration));this.body.rotation.x=-.17*r,this.head.rotation.x=.19*r,this.arms[0].shoulder.rotation.z=-.9*r-.14,this.swingBlade(.68+.24*r,1.47+.6*r,.52,92,12+25*r),this.glow.emissiveIntensity+=2.8*r}}selfStabPose(t){this.pose("idle",t/1e3,!0);const e=Ae.smoothstep(t,0,410),i=Ae.smoothstep(t,450,590);this.body.rotation.x=.24*i-.09*e,this.head.rotation.x=.38*i,this.swingBlade(.87-.56*i,2.12+.48*e-.67*i,.55+.76*e,59+113*e,57-71*i)}collapsePose(t,e){this.pose("idle",t/1e3,!1);const i=Ae.smoothstep(t,0,e?400:700),s=e?1-i:i;this.body.rotation.x=s*.62,this.head.rotation.x=s*.42;for(const[r,{thigh:a,shin:o,foot:c}]of this.legs.entries())a.rotation.x=-(r===0?.82:1.22)*s,o.rotation.x=(r===0?1.88:1.63)*s,c.rotation.x=-(a.rotation.x+o.rotation.x)*.94;this.plantFeet(),this.aimBlade(75,-31)}bindingPoints(t,e){this.arms[0].hand.getWorldPosition(t),this.arms[1].hand.getWorldPosition(e)}aimJoint(t,e,i){t.parent.getWorldQuaternion(this.jointRotation).invert().multiply(this.rootRotation),this.sole.copy(i).normalize().applyQuaternion(this.jointRotation),t.quaternion.setFromUnitVectors(e,this.sole)}plantFeet(){this.group.getWorldQuaternion(this.rootRotation),this.inverseRoot.copy(this.group.matrixWorld).invert(),this.hips.updateWorldMatrix(!1,!1);let t=1/0;for(const{thigh:e,shin:i,foot:s}of this.legs){e.updateWorldMatrix(!1,!1),i.updateWorldMatrix(!1,!1),s.updateWorldMatrix(!1,!1);for(const r of yM)this.sole.copy(r).applyMatrix4(s.matrixWorld).applyMatrix4(this.inverseRoot),t=Math.min(t,this.sole.y)}this.hips.position.y-=t-.006}updateParticles(t,e,i){const s=e!==null,r=i?s?10:6:s?wu:18;this.particleGeometry.setDrawRange(0,r);for(let o=0;o<r;o++){const c=o*2.399963+t*(.18+o%4*.055),l=(o*.618+t*(s?.39:.23))%1,u=.65+o%5*.18+l*.25;this.particlePositions[o*3]=Math.cos(c)*u,this.particlePositions[o*3+1]=.4+l*3.85,this.particlePositions[o*3+2]=Math.sin(c)*u}const a=this.particleGeometry.getAttribute("position");a.clearUpdateRanges(),a.addUpdateRange(0,r*3),a.needsUpdate=!0,this.particleMaterial.size=s?.16:.13,this.infectionBurst.update(e,i)}dispose(){this.group.removeFromParent(),sn(this.group)}}const cs=42,Ro=5e3,Co=new Pt(16752715),AM=new Pt(16731943),ks=new Pt(16768192);class RM{group=new ve;geometry=new ge;positions=new Float32Array(Ro*3);colors=new Float32Array(Ro*3);accents=new Float32Array(Ro);bolts;boltMatrix=new ne;cursor=0;emitter=new P;corners=Array.from({length:4},()=>new P);trail=Array.from({length:8},()=>({base:new P,tip:new P,at:0}));trailIndex=0;trailCount=0;trailAttack=0;constructor(t){this.geometry.setAttribute("position",new Fe(this.positions,3).setUsage(Ui)),this.geometry.setAttribute("color",new Fe(this.colors,3).setUsage(Ui)),this.geometry.setAttribute("strength",new Fe(this.accents,1).setUsage(Ui)),this.geometry.setDrawRange(0,0);const e=new Lt(this.geometry,new We({transparent:!0,depthWrite:!1,side:Ce,vertexColors:!0,toneMapped:!1,vertexShader:`attribute float strength; varying vec4 tint;
        void main(){ tint=vec4(color,strength); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,fragmentShader:"varying vec4 tint; void main(){ gl_FragColor=tint; }"}));e.frustumCulled=!1,e.renderOrder=1,this.group.add(e),this.bolts=new Ln(new Ca(.29,t?0:1),new Zt({color:16741933,toneMapped:!1}),Re.burst.count),this.bolts.count=0,this.bolts.instanceMatrix.setUsage(Ui),this.bolts.frustumCulled=!1,this.group.add(this.bolts)}update(t,e,i,s,r){if(this.cursor=0,this.bolts.count=0,t){const a=Math.max(0,(e-t.startedAt)*t.rate),o=t.scale??1,c=i?AM:Co,{from:l,to:u}=t;switch(t.kind){case"slash":{const d=Re.slash,h=d.impact.findIndex(_=>a<=_+135);if(h<0)break;const p=d.impact[h]-a,g=p>=0?.12+.19*(1-Math.min(1,p/550)):.38*(1+p/135);this.fan(l,d.range*o,t.yaw,d.angle,p<0?ks:c,g);break}case"dash":{const d=a>=Re.dash.windup;a<Re.dash.duration+145&&this.strip(l,u,Re.dash.width*o,d?ks:c,d?.31*(1-Math.max(0,a-Re.dash.duration)/145):.19);break}case"leap":{const d=a-Re.leap.duration;if(d<230&&(this.fan(u,Re.leap.radius*o,0,Math.PI*2,d>=0?ks:c,d>=0?.42*(1-d/230):.21),d>=0)){const h=Re.leap.radius*o*(.28+.72*d/230);this.arc(u,h,0,Math.PI*2,ks,.94*(1-d/230),.16)}break}case"burst":{const d=Re.burst,h=t.rays??[];if(a>d.impact+210)break;const p=(a-d.launch)/(d.impact-d.launch);for(const[g,_]of h.entries())p<1&&this.strip(l,_,d.width*o,c,a<d.launch?.16:.25),this.fan(_,d.radius*o,0,Math.PI*2,p>=1?ks:c,p>=1?.38*(1-(a-d.impact)/210):.18),p>=0&&p<1&&(this.emitter.set(Ae.lerp(l.x,_.x,p),l.y+.83,Ae.lerp(l.z,_.z,p)),this.boltMatrix.makeTranslation(this.emitter.x,this.emitter.y,this.emitter.z),this.bolts.setMatrixAt(g,this.boltMatrix),this.bolts.count++);this.bolts.count&&(this.bolts.instanceMatrix.clearUpdateRanges(),this.bolts.instanceMatrix.addUpdateRange(0,this.bolts.count*16),this.bolts.instanceMatrix.needsUpdate=!0);break}}}if(this.drawBladeTrail(t,e,s,r),this.geometry.setDrawRange(0,this.cursor),this.cursor)for(const a of["position","color","strength"]){const o=this.geometry.getAttribute(a);o.clearUpdateRanges(),o.addUpdateRange(0,this.cursor*o.itemSize),o.needsUpdate=!0}}drawBladeTrail(t,e,i,s){if(!t||t.kind!=="slash"){this.trailCount=0;return}this.trailAttack!==t.startedAt&&(this.trailCount=0,this.trailAttack=t.startedAt);const r=(e-t.startedAt)*t.rate;if(Re.slash.impact.some(a=>r>=a-100&&r<=a+105)){const a=this.trail[this.trailIndex];a.base.copy(i),a.tip.copy(s),a.at=e,this.trailIndex=(this.trailIndex+1)%this.trail.length,this.trailCount=Math.min(this.trailCount+1,this.trail.length)}for(let a=0;a<this.trailCount-1;a++){const o=this.trail[(this.trailIndex+this.trail.length-a-1)%this.trail.length],c=this.trail[(this.trailIndex+this.trail.length-a-2)%this.trail.length],l=(1-(e-c.at)/125)*.64;if(l<=0)break;this.triangle(o.base,o.tip,c.tip,Co,l),this.triangle(o.base,c.tip,c.base,Co,l)}}vertex(t,e,i){const s=this.cursor*3;this.positions[s]=Ae.clamp(t.x,Ni.minX,Ni.maxX),this.positions[s+1]=Ae.clamp(t.y+.065,-10,650),this.positions[s+2]=Ae.clamp(t.z,Ni.minZ,Ni.maxZ),this.colors[s]=e.r,this.colors[s+1]=e.g,this.colors[s+2]=e.b,this.accents[this.cursor++]=Math.max(0,i)}triangle(t,e,i,s,r){this.vertex(t,s,r),this.vertex(e,s,r),this.vertex(i,s,r)}ringPoint(t,e,i,s){return t.set(e.x+Math.sin(s)*i,e.y,e.z+Math.cos(s)*i)}fan(t,e,i,s,r,a){for(let o=0;o<cs;o++){const c=i-s/2+s*o/cs,l=i-s/2+s*(o+1)/cs;this.triangle(t,this.ringPoint(this.corners[0],t,e,c),this.ringPoint(this.corners[1],t,e,l),r,a)}this.arc(t,e,i,s,r,Math.min(.82,a*2.8),.095)}arc(t,e,i,s,r,a,o){for(let c=0;c<cs;c++){const l=i-s/2+s*c/cs,u=i-s/2+s*(c+1)/cs,d=this.ringPoint(this.corners[0],t,e,l),h=this.ringPoint(this.corners[1],t,e,u),p=this.ringPoint(this.corners[2],t,e-o,l),g=this.ringPoint(this.corners[3],t,e-o,u);this.triangle(d,p,h,r,a),this.triangle(h,p,g,r,a)}}strip(t,e,i,s,r){const a=e.x-t.x,o=e.z-t.z,c=Math.hypot(a,o)||1,l=o/c*i,u=-a/c*i,[d,h,p,g]=this.corners;d.set(t.x-l,t.y,t.z-u),h.set(t.x+l,t.y,t.z+u),p.set(e.x-l,e.y,e.z-u),g.set(e.x+l,e.y,e.z+u),this.triangle(d,h,p,s,r),this.triangle(p,h,g,s,r);for(let _=-1;_<=1;_+=2)d.set(t.x+l*_,t.y,t.z+u*_),h.set(e.x+l*_,e.y,e.z+u*_),p.set(t.x+l*(_*.92),t.y,t.z+u*(_*.92)),g.set(e.x+l*(_*.92),e.y,e.z+u*(_*.92)),this.triangle(d,p,h,s,r*2.6),this.triangle(h,p,g,s,r*2.6)}dispose(){this.group.removeFromParent(),sn(this.group)}}const Au=new P(0,1,0),Ru=4,Po=19,CM=[[-2.5,10,-1.2],[2.6,10,.7],[-1.1,10,2.2],[1.3,10,-2.4]],ls=(n,t,e)=>Ae.smoothstep(n,t,e);class PM{constructor(t,e,i,s=""){this.localId=s,this.model.group.visible=!1,this.effects.position.copy(Ii.location),this.combat=new RM(i),this.ownerRing.rotation.x=-Math.PI/2,this.ownerRing.visible=!1,t.add(this.effects,this.model.group,this.combat.group,this.ownerRing);const r=new Pa(.128,.036,5,i?8:12);r.rotateX(Math.PI/2),r.rotateZ(Math.PI/2),r.scale(.78,1.48,.78),this.chainMesh=new Ln(r,new zs({color:3482935,roughness:.44,metalness:.58,emissive:5120275,emissiveIntensity:.38}),Ru*Po),this.chainMesh.instanceMatrix.setUsage(Ui),this.chainMesh.frustumCulled=!1,this.effects.add(this.chainMesh);const a=new ge,o=[];for(let u=0;u<9;u++){const d=u*Math.PI*2/9+.17;let h=0,p=0;for(let g=1;g<=5;g++){const _=d+Math.sin(u*4+g*9)*.23,m=g*(.62+u%3*.12),f=Math.cos(_)*m,S=Math.sin(_)*m;o.push(h,.034,p,f,.034,S),(g===2||g===4)&&o.push(f,.034,S,f+Math.cos(_+.65)*.53,.034,S+Math.sin(_+.65)*.53),h=f,p=S}}a.setAttribute("position",new ae(o,3)),this.cracks=new Em(a,new dd({color:16742698,transparent:!0,blending:ui,depthWrite:!1,toneMapped:!1})),this.effects.add(this.cracks),this.rift=new Lt(new nn(16,16),new We({uniforms:{light:{value:0},wave:{value:-1}},transparent:!0,depthWrite:!1,blending:ui,vertexShader:`varying vec2 ground;
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
        }`})),this.rift.rotation.x=-Math.PI/2,this.rift.position.y=.028,this.effects.add(this.rift),this.sparkCount=i?36:78,this.sparkData=new Float32Array(this.sparkCount*3);const c=new ge;c.setAttribute("position",new Fe(this.sparkData,3).setUsage(Ui)),this.sparks=new tr(c,new We({uniforms:{opacity:{value:0}},transparent:!0,blending:ui,depthWrite:!1,vertexShader:`uniform float opacity;
        void main(){ vec4 p=modelViewMatrix*vec4(position,1.0);
          gl_Position=projectionMatrix*p;
          gl_PointSize=clamp(112.0*sqrt(opacity)/max(3.0,-p.z),1.0,11.0);
        }`,fragmentShader:`uniform float opacity;
        void main(){ float d=length(gl_PointCoord-vec2(.5));
          gl_FragColor=vec4(1.0,.41,.08,opacity*(1.0-smoothstep(.11,.5,d)));
        }`})),this.sparks.frustumCulled=!1,this.effects.add(this.sparks),this.title.className="co-warden-title",this.title.hidden=!0,this.title.setAttribute("role","status"),this.title.innerHTML="<span>中立 Boss 登場</span><strong>虛空騎士</strong>",this.hud.className="co-warden-hud",this.hud.hidden=!0;const l=document.createElement("span");l.textContent=Ii.name,this.meter.setAttribute("aria-label",`${Ii.name}生命值`),this.allegiance.className="co-warden-allegiance",this.warning.className="co-warden-warning",this.growth.className="co-warden-growth",this.hud.append(l,this.meter,this.allegiance,this.growth,this.warning),e.append(this.title,this.hud)}model=new TM;effects=new ve;title=document.createElement("div");hud=document.createElement("div");allegiance=document.createElement("small");warning=document.createElement("small");growth=document.createElement("small");meter=document.createElement("progress");combat;ownerRing=new Lt(new Ms(1.03,1.18,42),new Zt({color:5302220,transparent:!0,opacity:.77,side:Ce,depthWrite:!1}));chainMesh;cracks;rift;sparks;sparkData;left=new P;right=new P;begin=new P;end=new P;direction=new P;link=new xe;twist=new Gi;destination=new P;sparkCount;motionTime=0;initialized=!1;update(t,e,i){const s=Math.max(0,e-t.spawnAt),r=t.state==="SPAWN",a=s<Te.title||s>=Te.title+Te.titleDuration,o=s<Te.title&&r;this.title.hidden!==a&&(this.title.hidden=a),this.hud.hidden!==o&&(this.hud.hidden=o);const c=t.ownerId&&t.state!=="DEFEATED"?Ii.alliedHp:t.maxHp;this.meter.max!==c&&(this.meter.max=c),this.meter.value!==t.hp&&(this.meter.value=t.hp),this.toggleHudClass("is-infected",t.phaseTwo&&!t.ownerId),this.toggleHudClass("is-allied",!!t.ownerId),this.toggleHudClass("is-owned",t.ownerId===this.localId);const l=t.ownerId?`◆ ${t.ownerId===this.localId?"你的隊友":t.ownerName??"已收編"}`:t.enraged?"狂暴":t.phaseTwo?"感染階段":"";this.allegiance.textContent!==l&&(this.allegiance.textContent=l);const u=t.scale??1,d=u>=1e3?u.toExponential(1):u.toFixed(2),h=t.ownerId?`體型 ×${d}`:`賞金 ${t.heldBounty??0} · 體型 ×${d}`;this.growth.textContent!==h&&(this.growth.textContent=h);const p=t.state==="ATTACK"&&t.attack?Re[t.attack.kind].name:t.state==="ENRAGED"?"自刺狂暴":"";this.warning.textContent!==p&&(this.warning.textContent=p),this.ownerRing.visible=!!t.ownerId&&t.state!=="DESPAWN"&&t.state!=="DEFEATED",this.effects.visible=r,this.model.group.visible=!r||s>=Te.reveal;const g=this.model.group,_=g.position.x,m=g.position.z,f=t.state==="DESPAWN"?Math.max(.001,1-ls(e-t.stateAt,260,Ii.collapseMs)):1;if(g.scale.setScalar(Math.min(u,1e20)*f),this.destination.set(t.x,t.y+(t.air??0),t.z),!this.initialized||r)g.position.copy(this.destination),g.rotation.y=t.yaw,this.initialized=!0;else{const y=1-Math.exp(-i*20);g.position.lerp(this.destination,y),g.rotation.y+=Math.atan2(Math.sin(t.yaw-g.rotation.y),Math.cos(t.yaw-g.rotation.y))*y}if(this.ownerRing.position.set(g.position.x,t.y+.07,g.position.z),this.ownerRing.scale.setScalar(Math.min(u,420)),this.ownerRing.material.color.setHex(t.ownerId===this.localId?5439456:8368127),r){const y=ls(s,Te.breakChains,Te.land);g.position.y=t.y+1.86*(1-y**2),this.model.group.visible&&this.model.entrancePose(s),this.showEntrance(s);return}this.motionTime+=i;const S=Math.max(0,e-t.stateAt),E=i>0&&Math.hypot(g.position.x-_,g.position.z-m)>i*.12,M=t.attack?Math.max(0,(e-t.attack.startedAt)*t.attack.rate):0;t.attack&&(t.state==="ATTACK"||t.state==="STAGGER"&&M<Re[t.attack.kind].duration+150)?this.model.combatPose(t.attack.kind,M,t.enraged):t.state==="ENRAGED"?this.model.selfStabPose(S):t.state==="DEFEATED"||t.state==="ALLIED"||t.state==="DESPAWN"?this.model.collapsePose(S,t.state==="ALLIED"):this.model.pose(E?"walk":"idle",this.motionTime,t.enraged);let w=t.enraged?this.motionTime+1.2:null;t.state==="ENRAGED"&&(w=S>550?(S-550)/1e3:null),t.state==="ATTACK"&&t.attack?.kind==="burst"&&M>=Re.burst.launch&&(w=(M-Re.burst.launch)/1e3),this.model.updateParticles(this.motionTime,w,this.sparkCount<50),this.model.bladeBase.getWorldPosition(this.left),this.model.bladeTip.getWorldPosition(this.right),this.combat.update(t.attack,e,t.enraged,this.left,this.right)}showEntrance(t){const e=ls(t,0,550)*(1-ls(t,Te.land+150,Te.finish)),i=(t-Te.land)/820;this.rift.material.uniforms.light.value=e,this.rift.material.uniforms.wave.value=i<1?i:-1,this.cracks.visible=t>=Te.cracks,this.cracks.material.opacity=(.38+.3*Math.sin(t*.019)**2)*e,this.sparks.material.uniforms.opacity.value=e;const s=t/1e3;for(let r=0;r<this.sparkCount;r++){const a=r*2.399963+s*.5,o=(r*.618+s*.65)%1,c=.38+r%8*.28+o*(i>=0&&i<1?3.5*i:.5);this.sparkData[r*3]=Math.cos(a)*c,this.sparkData[r*3+1]=.04+o*(i>=0&&i<1?3.8:2.6),this.sparkData[r*3+2]=Math.sin(a)*c}this.sparks.geometry.attributes.position.needsUpdate=!0,this.updateChains(t)}updateChains(t){if(this.chainMesh.visible=t>=Te.chains&&t<Te.land+320,!this.chainMesh.visible)return;t>=Te.reveal?(this.model.bindingPoints(this.left,this.right),this.left.sub(this.effects.position),this.right.sub(this.effects.position)):(this.left.set(-.7,3.8,0),this.right.set(.7,3.8,0));const e=ls(t,Te.chains,Te.reveal+110),i=ls(t,Te.breakChains,Te.land+320),s=t>=Te.breakChains;let r=0;for(let a=0;a<Ru;a++){const[o,c,l]=CM[a];this.begin.set(o,c,l),this.end.copy(a%2===0?this.left:this.right),a>=2&&(this.end.y+=.76),this.end.lerp(this.begin,1-e),this.direction.subVectors(this.end,this.begin).normalize().negate();for(let u=0;u<Po;u++){if(s&&u>=6&&u<=8)continue;const d=u/(Po-1);if(this.link.position.lerpVectors(this.begin,this.end,d),s){const h=u<6?.7:1.37;this.link.position.y-=i*i*4.2*h,this.link.position.x+=(a%2===0?-1:1)*i*h}this.link.position.y<.12||(this.link.quaternion.setFromUnitVectors(Au,this.direction),this.link.quaternion.multiply(this.twist.setFromAxisAngle(Au,u%2*Math.PI*.5+i*(u%3))),this.link.updateMatrix(),this.chainMesh.setMatrixAt(r++,this.link.matrix))}}this.chainMesh.count=r,this.chainMesh.instanceMatrix.needsUpdate=!0}hideHud(){this.title.hidden||(this.title.hidden=!0),this.hud.hidden||(this.hud.hidden=!0)}toggleHudClass(t,e){this.hud.classList.contains(t)!==e&&this.hud.classList.toggle(t,e)}target(t,e){if(!oM(t,e))return null;const{position:i,rotation:s}=this.model.group;return{id:aM,x:i.x,y:i.y+xi,z:i.z,yaw:s.y,alive:!0,kind:"warden",scale:t.scale}}dispose(){this.model.dispose(),this.combat.dispose(),this.ownerRing.removeFromParent(),sn(this.ownerRing),this.effects.removeFromParent(),sn(this.effects),this.hud.remove(),this.title.remove()}}const LM=12286207;class IM{constructor(t,e){this.root=t,this.scene=e,this.badge.className="co-warden-buff",this.badge.hidden=!0,this.badge.title="武器傷害 +20% · 移動速度 +10%";const i=document.createElement("span");i.textContent="虛空祝福";const s=document.createElement("i");s.setAttribute("aria-hidden","true"),s.textContent="◆",this.badge.append(s,i,this.timer),this.notice.className="co-warden-notice",this.notice.hidden=!0,this.notice.setAttribute("role","status"),this.spawnNotice.className="co-warden-spawn-warning",this.spawnNotice.hidden=!0,this.spawnNotice.setAttribute("role","status");const r=document.createElement("strong");r.textContent=`${Ii.name}即將登場`;const a=document.createElement("span");a.textContent=Ii.locationLabel,this.spawnCountdown.setAttribute("aria-hidden","true"),this.spawnNotice.append(r,a,this.spawnCountdown),this.royalBadge.className="co-warden-royal",this.royalBadge.textContent="♛ 紫光王者",this.royalBadge.hidden=!0,t.append(this.badge,this.notice,this.spawnNotice,this.royalBadge)}badge=document.createElement("div");timer=document.createElement("b");notice=document.createElement("div");spawnNotice=document.createElement("div");spawnCountdown=document.createElement("b");royalBadge=document.createElement("div");ownerMark;aura=new Map;auraGeometry=new Ms(.82,.97,30);auraMaterial=new Zt({color:LM,transparent:!0,opacity:.69,depthWrite:!1,side:Ce});noticeUntil=0;lastWarningAt=null;showSpawnWarning(t,e){const i=t?t.spawnAt-e:0;if(this.spawnNotice.hidden=i<=0||i>Ii.warningMs,!t||this.spawnNotice.hidden)return!1;const s=`${Math.ceil(i/1e3)} 秒`;return this.spawnCountdown.textContent!==s&&(this.spawnCountdown.textContent=s),this.lastWarningAt===t.spawnAt?!1:(this.lastWarningAt=t.spawnAt,!0)}announce(t,e){const i={recruited:`${t.name} 擊敗並收編了虛空騎士`,destroyed:`${t.name} 擊倒了已收編的虛空騎士`,"player-slain":`${t.name} 被虛空騎士擊倒`},s=t.scoreAwarded??0;this.notice.textContent=t.kind==="player-slain"&&s?`${i[t.kind]} · ${t.ownerName?`${t.ownerName} +${s} 積分`:`騎士賞金 +${s}`}`:`${i[t.kind]}${s?` · +${s} 積分`:""}`,this.notice.hidden=!1,this.noticeUntil=e+3400}update(t,e,i,s,r=null,a=""){if(this.badge.hidden=i<=s,this.root.classList.toggle("co-warden-blessed",!this.badge.hidden),!this.badge.hidden){const c=`${Math.ceil((i-s)/1e3)}s`;this.timer.textContent!==c&&(this.timer.textContent=c)}this.notice.hidden=s>=this.noticeUntil,this.royalBadge.hidden=r===null||r!==a,this.ownerMark&&(this.ownerMark.visible=!1);const o=new Set;for(const c of t){const l=e.get(c.id);if(c.id===r&&c.alive&&c.connected!==!1&&l&&(this.ownerMark??=this.createOwnerMark(),this.ownerMark.visible=!0,this.ownerMark.position.copy(l.group.position)),!c.alive||(c.blessingUntil??0)<=s||!l)continue;o.add(c.id);let u=this.aura.get(c.id);if(!u){u=new ve;for(const[d,h]of[[.05,-Math.PI/2],[1.43,-Math.PI*.32]]){const p=new Lt(this.auraGeometry,this.auraMaterial);p.rotation.x=h,p.position.y=d,d>1&&p.scale.setScalar(.77),u.add(p)}this.aura.set(c.id,u),this.scene.add(u)}u.position.copy(l.group.position),u.rotation.y=s/600}for(const[c,l]of this.aura)o.has(c)||(l.removeFromParent(),this.aura.delete(c))}createOwnerMark(){const t=new ve,e=document.createElement("canvas");e.width=128,e.height=96;const i=e.getContext("2d");if(i){i.fillStyle="#edc6ff",i.strokeStyle="#8b26ff",i.shadowColor="#ac36ff",i.shadowBlur=20,i.lineWidth=5,i.beginPath(),i.moveTo(19,25),i.lineTo(44,42),i.lineTo(64,16),i.lineTo(84,42),i.lineTo(109,25),i.lineTo(99,65),i.lineTo(29,65),i.closePath(),i.fill(),i.stroke(),i.fillRect(30,72,68,6);const r=new xl(e);r.colorSpace=ri;const a=new Aa(new Ta({map:r,transparent:!0,depthWrite:!1}));a.position.y=2.55,a.scale.set(1.65,1.24,1),t.add(a)}const s=new Lt(new Ms(.95,1.19,36),new Zt({color:12276735,transparent:!0,opacity:.84,depthWrite:!1,side:Ce}));return s.rotation.x=-Math.PI/2,s.position.y=.08,t.add(s),this.scene.add(t),t}hide(){this.badge.hidden=!0,this.notice.hidden=!0,this.spawnNotice.hidden=!0,this.royalBadge.hidden=!0,this.ownerMark&&(this.ownerMark.visible=!1),this.root.classList.remove("co-warden-blessed")}dispose(){for(const t of this.aura.values())t.removeFromParent();this.aura.clear(),this.auraGeometry.dispose(),this.auraMaterial.dispose(),this.ownerMark&&(this.ownerMark.removeFromParent(),sn(this.ownerMark)),this.root.classList.remove("co-warden-blessed"),this.badge.remove(),this.notice.remove(),this.spawnNotice.remove(),this.royalBadge.remove()}}function DM(n,t,e){if(n){if(n.state==="DESPAWN")return null;const i=n.ownerId===e?"#56ffe1":n.ownerId?"#94bfff":"#ff974f";return{x:n.x,y:n.y,z:n.z,color:i,pending:!1,label:"虛空騎士"}}return t?{x:t.x,y:t.y,z:t.z,color:"#ffcf76",pending:!0,label:"騎士出生點"}:null}function NM(n,t,e,i,s){const r=Math.hypot(n,t),a=s/Math.max(70,r);return{x:(n*e-t*i)*a,y:(n*i+t*e)*a,offRadar:r>70}}const Hr=(n,t,e)=>Math.max(t,Math.min(e,n)),Cu=(n,t)=>(t-n+Math.PI*3)%(Math.PI*2)-Math.PI;class UM{constructor(t,e,i,s,r,a,o=0,c){this.root=t,this.socket=e,this.roomCode=i,this.roundId=s,this.onFatal=r,this.playerId=a,this.seq=o,this.diagnostics=new dM(t);const l=new Od;this.renderer=new Rd({antialias:l.antialias,powerPreference:"high-performance"}),this.renderer.setPixelRatio(l.pixelRatio),this.renderer.setClearColor(1489372),t.append(this.renderer.domElement),t.insertAdjacentHTML("beforeend",'<div class="co-feedback"></div><div class="co-hud"></div><div class="co-minimap"><canvas aria-label="以自己為中心的戰術雷達"></canvas></div>'+nf()),this.blessing=new IM(t,this.scene),this.tacticalBoard=new pM(t,this.coarse),this.radarCanvas=t.querySelector(".co-minimap canvas"),this.radarContext=this.radarCanvas.getContext("2d"),this.hud=new ef(t.querySelector(".co-hud")),this.aimFeedback=new Fd(t),this.feedback=new Kd(t.querySelector(".co-feedback")),this.armory=new sf(t,u=>!this.ready||this.paused||!this.player.alive||!this.socket.connected?!1:(this.input.set({aim:!1}),u!==this.active&&(this.requestedWeapon=u,this.awaitingWeapon=!0),!0),()=>this.owned,this.restorePointerLock,u=>this.weapons[u].level),this.scene.add(this.arena.group,new vd(16777215,1489372,2)),this.effects=new Bd(this.scene,this.coarse),this.battle=new zd(t),this.makeGun(),this.appearance=new Pd(this.gun),this.pickupFeedback=new Cd(t,this.coarse),this.pickupPreview=new zu(t),this.scope=new kd(t,this.gun,this.coarse),this.makePickups(),this.coarse?this.mobile=new Zd(t,this.input):(this.desktop=new $d(t,this.input),t.onclick=u=>{u.target.closest(".co-armory, [data-game-ui], button, input")||this.restorePointerLock()}),this.stopResize=Iu(t,(u,d)=>{this.cam.aspect=u/d,this.cam.updateProjectionMatrix(),this.renderer.setSize(u,d,!1),this.sizeRadar()}),this.socket.on("match:pickup",this.onPickup),this.socket.on("match:snapshot",this.onSnapshot),this.socket.on("match:shot",this.onShot),this.socket.on("match:hit",this.onHit),this.socket.on("match:kill",this.onKill),this.socket.on("match:damage",this.onDamage),this.socket.on("match:warden",this.onWardenNotice),this.socket.on("disconnect",this.onDisconnect),this.socket.on("connect_error",this.onConnectError),this.loop=new rf((u,d)=>this.update(u,d)),this.settings=new qd(t,()=>{this.tacticalBoard.close(),this.root.dispatchEvent(new Event("combat:reset")),this.sendResetInput(),this.desktop?.setEnabled(!1),this.mobile?.setEnabled(!1),this.armory.setEnabled(!1)},u=>{this.desktop?.setEnabled(!0),this.mobile?.setEnabled(!0),this.armory.setEnabled(!0),u&&this.restorePointerLock()},!0,c?{...c,code:i??""}:void 0)}scene=new ml;cam=new ei(75,1,Sl,Jc);renderer;input=new Yd(()=>this.sendResetInput());arena=new jd;player=new Jd;avatars=new Map;pickupMeshes=new Map;pending=[];snaps=[];seq=0;hud;aimFeedback;armory;feedback;effects;battle;seenShots=new Set;statusTimer=0;loop;settings;desktop;mobile;stopResize=()=>{};owned=new Set(["ar"]);active="ar";weapons=kf();score=0;bounty=cy;scoreTarget=zc;endsAt=0;kills=0;deaths=0;dead=!1;killer="";ping=0;pingTimer=0;serverClockOffset=0;hasClockOffset=!1;notice="";noticeT=0;slowUntil=0;disposed=!1;ready=!1;paused=!1;lastLocalShot=0;recoilPitch=0;recoilYaw=0;gun=new ve;gunFlash;gunMaterial=new Zt({color:2106932});handMaterial=new Zt({color:16777215});coarse=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>0;movementClock=new lM;previousPosition=new P;jumpQueued=!1;reloadQueued=!1;requestedWeapon;life=0;inputReset=0;resyncCount=0;predictionAt=0;diagnostics;cameraOffset=new P;visualPosition=new P;remoteTarget=new P;pickupPreview;pickupFeedback;appearance;tacticalBoard;scope;physicsTime=0;awaitingWeapon=!1;warden;destroyedParts=new Set;blessing;blessingUntil=0;snapshotInterval=50;snapshotJitter=0;lastSnapshotArrival=0;radarCanvas;radarContext;radarPlayers=new Map;radarTimer=0;start(){this.disposed||(this.paused=!1,this.loop.start())}pause(){if(this.disposed)return;this.paused=!0,this.warden?.hideHud(),this.blessing.hide(),this.tacticalBoard.setActive(!1),this.settings?.setActive(!1),this.desktop?.setEnabled(!1),this.mobile?.setEnabled(!1),this.armory.setEnabled(!1),this.input.reset(),this.loop.stop();const t=document.pointerLockElement;t&&(t===this.root||this.root.contains(t))&&document.exitPointerLock?.()}resume(){this.disposed||(this.paused=!1,this.tacticalBoard.setActive(!0),this.settings?.setActive(!0),this.desktop?.setEnabled(!0),this.mobile?.setEnabled(!0),this.armory.setEnabled(!0),this.loop.start())}restorePointerLock=()=>{if(!(this.disposed||this.paused)&&!(this.coarse||this.settings?.isOpen||document.pointerLockElement===this.root))try{this.root.requestPointerLock?.()?.catch(()=>{})}catch{}};sendResetInput(){const t=this.requestedWeapon;if(this.jumpQueued=!1,this.reloadQueued=!1,this.requestedWeapon=void 0,this.movementClock.reset(),this.disposed||!this.ready||!this.socket?.connected||!this.player.alive)return;const e={roundId:this.roundId,life:this.life,seq:++this.seq,clientTime:this.serverNow(),moveX:0,moveY:0,yaw:this.player.yaw,pitch:this.player.pitch,jump:!1,reload:!1,sprint:!1,aim:!1,reset:!0,weapon:t};this.pending=[e],this.socket.emit("match:input",e)}serverNow(){return Date.now()-this.serverClockOffset}makeGun(){const t=new Lt(new we(.18,.16,.9),this.gunMaterial);t.position.set(.34,-.28,-.8);const e=[[[.17,.48,.18],[.47,-.52,-.5]],[[.17,.43,.18],[.12,-.55,-.63]],[[.2,.18,.2],[.37,-.43,-.74]],[[.2,.18,.2],[.17,-.42,-.86]]];for(const[i,s]of e){const r=new Lt(new we(...i),this.handMaterial);r.position.set(...s),this.gun.add(r)}this.gunFlash=new Lt(new ys(.08),new Zt({color:16766045})),this.gunFlash.position.set(.34,-.25,-1.3),this.gunFlash.visible=!1,this.gun.add(t,this.gunFlash),this.cam.add(this.gun),this.scene.add(this.cam)}makePickups(){for(const t of ti){const e=Pe[t],i=new Lt(new ys(.75),new Zt({color:e.color}));i.visible=!1,this.pickupMeshes.set(t,i),this.scene.add(i)}}predict(t){this.previousPosition.copy(this.player.position);const e={x:this.player.position.x,y:this.player.position.y,z:this.player.position.z,yaw:this.player.yaw,pitch:this.player.pitch,velocityY:this.player.velocityY,supportId:this.player.supportId,jumpsUsed:this.player.jumpsUsed,alive:this.player.alive};this.predictionAt+=Bi*1e3,Sf(e,t,Kl(this.destroyedParts),this.physicsTime,this.predictionAt,this.slowUntil,this.blessingUntil),this.physicsTime+=Bi,this.player.position.set(e.x,e.y,e.z),this.player.velocityY=e.velocityY,this.player.jumpsUsed=e.jumpsUsed,this.player.supportId=e.supportId??null}visualBase(t){return t.copy(this.previousPosition).lerp(this.player.position,this.movementClock.alpha)}onSnapshot=t=>{if(this.disposed||this.paused||!An(t,this.roundId))return;if(!Array.isArray(t?.players)||!Array.isArray(t?.pickups))return this.onFatal("多人同步資料無效");const e=this.snaps[this.snaps.length-1];if(e&&t.tick<=e.tick)return;const i=!this.ready;this.ready=!0;const s=performance.now();if(this.lastSnapshotArrival){const _=s-this.lastSnapshotArrival;this.diagnostics.record("snapshot_ms",_),this.snapshotJitter=this.snapshotJitter*.8+Math.abs(_-this.snapshotInterval)*.2,this.snapshotInterval=this.snapshotInterval*.85+_*.15}for(this.lastSnapshotArrival=s,t.byId=new Map(t.players.map(_=>[_.id,_])),this.snaps.push(t);this.snaps.length>12;)this.snaps.shift();const r=t.destroyedBuildingParts??[];(r.length!==this.destroyedParts.size||r.some(_=>!this.destroyedParts.has(_)))&&(this.destroyedParts=new Set(r),this.arena.setDestroyed(this.destroyedParts));const a=t.byId.get(this.playerId);if(!a)return;i&&(this.seq=Math.max(this.seq,a.ack));const o=this.player.alive,c=!o&&a.alive;this.slowUntil=a.slowUntil,this.blessingUntil=a.alive?a.blessingUntil??0:0;const l=this.life!==(a.life??0),u=i||l||this.inputReset!==(a.inputReset??0);this.life=a.life??0,this.inputReset=a.inputReset??0,this.pending=this.pending.filter(_=>_.seq>Math.max(a.ack,a.discardedThrough??0)),i||l||o!==a.alive?(this.pending=[],this.movementClock.reset(),this.jumpQueued=!1,this.reloadQueued=!1,this.requestedWeapon=void 0,this.seq=Math.max(this.seq,a.ack,a.discardedThrough??0),this.resyncCount++,this.armory.close(!1),this.mobile?.reset(),this.desktop?.setEnabled(!this.paused&&!this.settings?.isOpen)):u&&(this.movementClock.reset(),this.resyncCount++),this.visualPosition.copy(this.cam.position);const d=this.player.position.clone(),h={x:a.x,y:a.y,z:a.z,yaw:a.yaw,pitch:a.pitch,velocityY:a.velocityY,supportId:a.supportId,jumpsUsed:a.jumpsUsed,alive:a.alive};this.physicsTime=hM(h,this.pending,Kl(this.destroyedParts),t.simulationTime,t.serverTime,this.slowUntil,this.blessingUntil),this.predictionAt=t.serverTime+this.pending.length*Bi*1e3;const p=Math.hypot(h.x-d.x,h.y-d.y,h.z-d.z),g=u||c||p>10;this.diagnostics.record("correction",p),this.player.position.set(h.x,h.y,h.z),this.player.velocityY=h.velocityY,this.player.jumpsUsed=h.jumpsUsed,this.player.supportId=h.supportId??null,(i||c)&&(this.player.yaw=a.yaw,this.player.pitch=a.pitch),g?(this.previousPosition.copy(this.player.position),this.cameraOffset.set(0,0,0)):(this.previousPosition.add(this.player.position).sub(d),this.visualBase(d),this.cameraOffset.copy(this.visualPosition).sub(d)),this.player.hp=a.hp,this.player.alive=a.alive,this.handMaterial.color.setHex(a.color),this.active!==a.activeWeapon&&(this.input.set({aim:!1}),this.awaitingWeapon=!1),this.active=a.activeWeapon,this.awaitingWeapon=!!this.requestedWeapon||this.pending.some(_=>_.weapon!==void 0&&_.weapon!==a.activeWeapon),this.owned=new Set(a.ownedWeapons),this.weapons=a.weapons,this.score=a.score,this.bounty=a.bounty,this.scoreTarget=t.scoreTarget,this.endsAt=t.endsAt,this.kills=a.kills,this.deaths=a.deaths,this.dead=!a.alive,this.syncAvatars(t.players),this.syncPickups(t.pickups),this.armory.render(this.active),this.updatePanels(t)};updatePanels(t){this.tacticalBoard.update(t.players,this.roomCode,this.ping),this.radarPlayers=t.byId??new Map(t.players.map(e=>[e.id,e]))}syncAvatars(t){const e=new Set(t.map(i=>i.id));for(const[i,s]of this.avatars)e.has(i)||(s.dispose(),this.avatars.delete(i));for(const i of t){if(i.id===this.playerId)continue;let s=this.avatars.get(i.id);s||(s=new Qd(i.id,i.name,i.color),s.respawn(i.x,i.z),s.position.y=i.y-1.65,s.group.position.copy(s.position),this.avatars.set(i.id,s),this.scene.add(s.group,s.deathGroup)),i.alive&&!s.alive&&s.respawn(i.x,i.z),!i.alive&&s.alive&&s.damage(100)}}syncPickups(t){for(const e of t){const i=this.pickupMeshes.get(e.id);i&&(i.position.set(e.x,e.y+.9,e.z),i.visible=e.available)}}sizeRadar(){const t=this.radarCanvas?.getBoundingClientRect();if(!t?.width||!t.height)return;const e=Math.min(window.devicePixelRatio||1,1.5),i=Math.round(t.width*e),s=Math.round(t.height*e);(this.radarCanvas.width!==i||this.radarCanvas.height!==s)&&(this.radarCanvas.width=i,this.radarCanvas.height=s)}drawRadar(t){if(this.radarTimer+=t,this.radarTimer<1/30)return;this.radarTimer%=1/30;const e=this.radarCanvas,i=e.getBoundingClientRect();if(!i.width||!i.height)return;this.sizeRadar();const s=this.snaps[this.snaps.length-1],r=_u(s?.warden),a=DM(s?.warden??null,s?.wardenWarning??null,this.playerId),o=e.width/i.width,c=this.radarContext,l=i.width,u=i.height,d=l/2,h=u/2+(a?2:4),p=Math.min(l,u)*(a?.32:.38);c.setTransform(o,0,0,o,0,0),c.clearRect(0,0,l,u),c.strokeStyle="#ffffff24",c.lineWidth=1,c.beginPath(),c.arc(d,h,p,0,Math.PI*2),c.moveTo(d-p,h),c.lineTo(d+p,h),c.moveTo(d,h-p),c.lineTo(d,h+p),c.stroke(),c.fillStyle="#dfffff",c.font="800 9px Arial",c.fillText("戰術雷達",8,14);const g=this.player.position.y-1.65,_=g<-2?"B1":g>=9?"RF":g>=3?"2F":"1F",m="戰術雷達 "+_+(a?" · "+a.label:"");e.getAttribute("aria-label")!==m&&e.setAttribute("aria-label",m),c.fillText(_,60,14);const f=Math.cos(this.player.yaw),S=Math.sin(this.player.yaw),E=(y,A)=>NM(y-this.player.position.x,A-this.player.position.z,f,S,p),M=(y,A,x)=>{Math.abs(y)<=2.5||(c.fillStyle="#fff",c.fillText(y>0?"▲":"▼",A-4,x-8))},w=(y,A)=>{c.fillStyle="#bf65ff",c.strokeStyle="#f2ccff",c.lineWidth=1,c.beginPath(),c.moveTo(y-6,A-5),c.lineTo(y-3,A-3),c.lineTo(y,A-8),c.lineTo(y+3,A-3),c.lineTo(y+6,A-5),c.lineTo(y+4,A+1),c.lineTo(y-4,A+1),c.closePath(),c.fill(),c.stroke()};for(const y of this.radarPlayers.values()){if(y.id===this.playerId||!y.alive)continue;const A=this.avatars.get(y.id),{x,y:T,offRadar:C}=E(A?.position.x??y.x,A?.position.z??y.z),L=d+x,F=h+T;c.beginPath(),c.arc(L,F,C?5:4,0,Math.PI*2),c.fillStyle="#"+y.color.toString(16).padStart(6,"0"),c.fill(),C&&(c.strokeStyle="#ffffffcc",c.lineWidth=1.5,c.stroke()),y.id===r&&w(L,F),M(y.y-this.player.position.y,L,F)}if(a){const{x:y,y:A,offRadar:x}=E(a.x,a.z),T=d+y,C=h+A;c.beginPath(),c.moveTo(T,C-7),c.lineTo(T+7,C),c.lineTo(T,C+7),c.lineTo(T-7,C),c.closePath(),c.fillStyle=a.pending?"#172742":a.color,c.fill(),c.lineWidth=x?2.2:1.6,c.strokeStyle=a.pending?a.color:"#2f1723",c.stroke(),M(a.y-g,T,C),c.fillStyle=a.color,c.fillText("◆ "+a.label,8,u-5)}c.save(),c.translate(d,h),c.fillStyle="#fff",c.shadowColor="#55f1ae",c.shadowBlur=7,c.beginPath(),c.moveTo(0,-7),c.lineTo(5,6),c.lineTo(0,3),c.lineTo(-5,6),c.closePath(),c.fill(),c.restore(),r===this.playerId&&this.player.alive&&w(d,h-9)}onShot=t=>{if(this.disposed||this.paused||!this.ready||!An(t,this.roundId)||this.seenShots.has(t.eventId))return;this.seenShots.add(t.eventId),this.seenShots.size>512&&this.seenShots.delete(this.seenShots.values().next().value);const e=new P,i=t.id===this.playerId;if(i)e.set(...t.origin);else{const s=this.avatars.get(t.id);s?s.muzzlePosition(e):e.set(...t.origin).add(new P(.34,-.27,0))}this.effects.play(t,e,!i,i,!i);for(const s of t.hits)this.avatars.get(s.targetId)?.hit()};onPickup=t=>{this.disposed||this.paused||!An(t,this.roundId)||this.pickupFeedback.push(t,t.eventId)};onHit=t=>{!this.disposed&&!this.paused&&this.ready&&An(t,this.roundId)&&this.battle.hit(t)};onKill=t=>{!this.disposed&&!this.paused&&this.ready&&An(t,this.roundId)&&this.battle.kill(t)};onDamage=t=>{if(this.disposed||this.paused||!this.ready||!An(t,this.roundId))return;this.player.hp=t.hp,this.killer=t.name;const e=t.wardenAttack?Re[t.wardenAttack].name:t.weapon?Pe[t.weapon].label:"";this.notice=e?`遭 ${t.name} 的 ${e} 擊中`:`遭 ${t.name} 擊中`,this.noticeT=.8,this.feedback.damage(t.damage,new P(t.from.x,0,t.from.z),this.player.position,new P(-Math.sin(this.player.yaw),0,-Math.cos(this.player.yaw)))};onWardenNotice=t=>{!this.disposed&&!this.paused&&An(t,this.roundId)&&this.blessing.announce(t,this.serverNow())};onDisconnect=()=>{this.pause(),this.socket.sendBuffer.length=0,this.onFatal("連線已中斷")};onConnectError=()=>this.onFatal("無法連線至遊戲伺服器");measurePing(t){if(this.pingTimer-=t,this.pingTimer>0)return;this.pingTimer=1;const e=Date.now();this.socket.emit("net:ping",i=>{if(this.disposed)return;this.ping=Date.now()-e;const s=Date.now()-i-this.ping/2;this.serverClockOffset=this.hasClockOffset?this.serverClockOffset*.8+s*.2:s,this.hasClockOffset=!0})}updateRemotePlayers(t){if(!this.snaps.length)return;const e=Hr(80+this.ping*.1+this.snapshotJitter*1.5,80,120),i=this.serverNow()-e;let s=this.snaps[0],r=this.snaps[0],a=0;const o=this.snaps[this.snaps.length-1];if(i>=o.serverTime&&this.snaps.length>1){s=this.snaps[this.snaps.length-2],r=o;const l=Math.max(1,r.serverTime-s.serverTime);a=1+Math.min(75,i-r.serverTime)/l}else{for(let l=1;l<this.snaps.length;l++)if(this.snaps[l].serverTime>=i){s=this.snaps[l-1],r=this.snaps[l];break}a=s===r?0:Hr((i-s.serverTime)/Math.max(1,r.serverTime-s.serverTime),0,1)}const c=1-Math.exp(-t*30);for(const[l,u]of this.avatars){const d=s.byId?.get(l),h=r.byId?.get(l);if(!(!d||!h)){if(this.remoteTarget.set(d.x+(h.x-d.x)*a,d.y+(h.y-d.y)*a-1.65,d.z+(h.z-d.z)*a),h.supportId!==null&&h.supportId===d.supportId){const p=Ws(h.supportId,s.simulationTime),g=Ws(h.supportId,r.simulationTime),_=Ws(h.supportId,this.physicsTime);this.remoteTarget.x+=_.x-(p.x+(g.x-p.x)*a),this.remoteTarget.y+=_.y-(p.y+(g.y-p.y)*a),this.remoteTarget.z+=_.z-(p.z+(g.z-p.z)*a),u.group.position.copy(this.remoteTarget)}else u.group.position.lerp(this.remoteTarget,c);u.group.rotation.y+=Cu(u.group.rotation.y,d.yaw+Cu(d.yaw,h.yaw)*a)*c,u.position.copy(u.group.position),u.updateVisual(t,Math.abs(h.x-d.x)+Math.abs(h.z-d.z)>.02,!0)}}}updateWarden(t){const e=this.snaps[this.snaps.length-1],i=this.hasClockOffset?this.serverNow():e?.serverTime??this.serverNow();if(this.blessing.showSpawnWarning(e?.wardenWarning??null,i)&&this.battle.wardenWarning(),!e?.warden){this.warden?.dispose(),this.warden=void 0;return}this.warden??=new PM(this.scene,this.root,this.coarse,this.playerId),this.warden.update(e.warden,i,t)}update(t,e=t){if(this.disposed||this.paused||(this.diagnostics.record("frame_ms",e*1e3),this.measurePing(t),!this.ready))return;this.desktop?.update();const i=this.input.getState(),s=this.tacticalBoard.isOpen||this.armory.isOpen||!!this.settings?.isOpen||this.paused,r=this.weapons[this.active].reloadUntil>this.serverNow();(this.active!=="sniper"||r||i.reload||i.switchWeapon||!this.player.alive||s||this.awaitingWeapon)&&(this.input.set({aim:!1}),i.aim=!1),s&&(i.shoot=!1,i.jump=!1,i.reload=!1,i.switchWeapon=0,this.jumpQueued=!1,this.reloadQueued=!1,this.input.clearCombat());const a=this.scope.update(this.active,i,this.player.alive,r,s);if(a&&(i.lookX*=.25,i.lookY*=.25),this.player.yaw-=i.lookX*.0024,this.player.pitch=Hr(this.player.pitch-i.lookY*.0021,-1.35,1.35),this.jumpQueued||=i.jump,this.reloadQueued||=i.reload,i.switchWeapon){const w=ti[i.switchWeapon-1];w&&this.owned.has(w)&&w!==this.active&&(this.requestedWeapon=w,this.awaitingWeapon=!0)}let o=!1;const c=Pe[this.active],l=this.weapons[this.active],u=this.serverNow();e>Yc/1e3&&(this.sendResetInput(),e=0),this.player.alive&&this.movementClock.advance(e,()=>{const w={roundId:this.roundId,life:this.life,seq:++this.seq,clientTime:this.serverNow(),moveX:i.moveX,moveY:i.moveY,yaw:this.player.yaw,pitch:this.player.pitch,jump:this.jumpQueued,reload:this.reloadQueued,sprint:!!i.sprint,aim:a,weapon:this.requestedWeapon};this.jumpQueued=!1,this.reloadQueued=!1,this.requestedWeapon=void 0,i.shoot&&!s&&!this.awaitingWeapon&&u-this.lastLocalShot>=c.fireDelay*1e3&&l.ammo>0&&l.reloadUntil<=u&&(w.fire=!0,o=!0,this.recoilPitch=Math.min(.04,this.recoilPitch+.009),this.recoilYaw=Hr(this.recoilYaw+(this.seq%2?.0025:-.0025),-.012,.012),navigator.vibrate?.(8),this.lastLocalShot=u),this.pending.push(w),this.predict(w),this.socket.emit("match:input",w)}),this.pending.length>120&&this.sendResetInput(),this.updateWarden(t),this.updateRemotePlayers(t),this.blessing.update(this.radarPlayers.values(),this.avatars,this.blessingUntil,this.serverNow(),_u(this.snaps[this.snaps.length-1]?.warden),this.playerId);for(const w of this.pickupMeshes.values())w.rotation.y+=t*2;this.drawRadar(t),this.noticeT=Math.max(0,this.noticeT-t),this.effects.update(t),this.feedback.update(t,this.player.hp);const d=Math.exp(-t*16);this.recoilPitch*=d,this.recoilYaw*=d;const h=Math.pow(.5,t/.12),p=Math.pow(.5,t/.08);this.cameraOffset.x*=h,this.cameraOffset.z*=h,this.cameraOffset.y*=p,this.cameraOffset.lengthSq()<1e-6&&this.cameraOffset.set(0,0,0),this.visualBase(this.visualPosition),this.visualPosition.add(this.cameraOffset),this.cam.position.copy(this.visualPosition),this.cam.rotation.set(this.player.pitch,this.player.yaw,0,"YXZ"),this.gun.rotation.set(this.recoilPitch,this.recoilYaw,0),this.gun.position.z=this.recoilPitch*2;const g=l.reloadUntil>this.serverNow();if(this.appearance.update(this.active,l.level),this.pickupFeedback.update(t),this.hud.render({quickReloadSeconds:Math.max(0,Math.ceil((l.quickReloadUntil-this.serverNow())/1e3)),level:l.level,capacity:Mi(this.active,l.level),hp:this.player.hp,ammo:l.ammo,reserve:1/0,label:c.label,notice:this.noticeT?this.notice:"",kills:this.kills,deaths:this.deaths,dead:this.dead,killer:this.killer,hit:!1,kill:!1,reloading:g,score:this.score,bounty:this.bounty,scoreTarget:this.scoreTarget,remainingSeconds:Math.max(0,Math.ceil((this.endsAt-this.serverNow())/1e3))}),this.cam.updateMatrixWorld(!0),this.battle.update(t,this.cam),this.statusTimer+=t,this.statusTimer>=.08){this.statusTimer=0;const w=this.serverNow();for(const y of this.radarPlayers.values())if(y.alive&&(y.burnUntil>w||y.slowUntil>w)){const A=this.avatars.get(y.id);A&&this.effects.status(A.position.clone().add(new P(0,1.22,0)),y.burnUntil>w?"flame":"ice")}}this.arena.update(this.physicsTime,ty(this.snaps[this.snaps.length-1],this.serverNow()),this.renderer);const _=Ud({x:this.player.position.x,y:this.player.position.y,z:this.player.position.z,yaw:this.player.yaw,pitch:this.player.pitch}),m=[...this.avatars].map(([w,y])=>({id:w,x:y.position.x,y:y.position.y+1.65,z:y.position.z,yaw:y.group.rotation.y,alive:y.alive})),f=zo(this.physicsTime,this.destroyedParts),S=this.snaps[this.snaps.length-1]?.warden,E=S&&this.warden?.target(S,this.playerId);E&&m.push(E);const M=Ys(this.gunFlash,this.active);if(o){const w=this.cam.position.toArray(),y=this.cam.getWorldDirection(new P).toArray(),x={...Dd(this.active,w,y,m,Math.random,f,a,l.level),eventId:"local:"+this.seq,id:this.playerId,weapon:this.active,origin:w,dir:y};this.effects.play(x,M,!0,!0,!0,!1)}this.pickupPreview.update([...this.pickupMeshes].map(([w,y])=>({id:w,position:y.position,available:y.visible,owned:this.owned.has(w),state:this.weapons[w]})),this.cam.position,f,this.player.alive&&!s),this.effects.updateLocalMuzzle(M,this.active,this.cam.position,f),this.effects.localFlame(this.player.alive&&!s&&!this.awaitingWeapon&&i.shoot&&this.active==="flame"&&!g&&l.ammo>0,Ys(this.gunFlash,this.active),this.cam.position,this.cam.getWorldDirection(new P),f,t,m,l.level),this.aimFeedback.update(s||!this.player.alive?"neutral":Nd(this.active,_.origin,_.direction,m,f,l.level),this.player.alive&&!s),this.scope.render(this.renderer,this.scene,this.cam),this.diagnostics.update(t,{rtt:this.ping,pending:this.pending.length,camera:this.cameraOffset.length(),resets:this.resyncCount})}dispose(){if(!this.disposed){this.disposed=!0,this.paused=!0,this.ready=!1,this.loop.stop(),this.diagnostics.dispose(),this.socket.off("match:pickup",this.onPickup),this.socket.off("match:snapshot",this.onSnapshot),this.socket.off("match:shot",this.onShot),this.socket.off("match:hit",this.onHit),this.socket.off("match:kill",this.onKill),this.socket.off("match:damage",this.onDamage),this.socket.off("match:warden",this.onWardenNotice),this.socket.off("disconnect",this.onDisconnect),this.socket.off("connect_error",this.onConnectError),this.stopResize(),this.root.onclick=null,this.desktop?.dispose(),this.mobile?.dispose(),this.tacticalBoard.dispose(),this.settings?.dispose(),this.armory.dispose(),this.pickupPreview.dispose(),this.pickupFeedback.dispose(),this.scope.dispose(),this.effects.dispose(),this.battle.dispose(),this.feedback.dispose(),this.hud.dispose(),this.aimFeedback.dispose(),this.warden?.dispose(),this.warden=void 0,this.blessing.dispose();for(const t of this.avatars.values())t.dispose();this.avatars.clear(),sn(this.scene),this.scene.clear(),this.pickupMeshes.clear(),this.pending=[],this.snaps=[],this.radarPlayers.clear(),this.seenShots.clear(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),document.pointerLockElement===this.root&&document.exitPointerLock?.(),this.root.replaceChildren()}}}const $c="chroma-multiplayer-session";function Ef(){try{const n=JSON.parse(sessionStorage.getItem($c));return typeof n?.code=="string"&&typeof n?.playerId=="string"&&typeof n?.resumeToken=="string"?n:null}catch{return null}}function Pu(n){try{n?sessionStorage.setItem($c,JSON.stringify({code:n.code,playerId:n.playerId,resumeToken:n.resumeToken})):sessionStorage.removeItem($c)}catch{}}function Tf({code:n,onResume:t,disabled:e=!1}){return O.jsxs("button",{type:"button",className:"co-resume-card",onClick:t,disabled:e,children:[O.jsx("span",{className:"co-resume-icon","aria-hidden":"true",children:O.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[O.jsx("path",{d:"M4 10a8 8 0 1 1 1.8 7.1M4 4v6h6"}),O.jsx("path",{d:"m11 9 4 3-4 3V9Z"})]})}),O.jsxs("span",{className:"co-resume-copy",children:[O.jsxs("span",{className:"co-resume-eyebrow",children:["繼續你的對戰 ",O.jsx("span",{children:n})]}),O.jsx("strong",{children:"返回上一場"}),O.jsx("small",{children:"回到原本的房間，與隊友再度集合"})]}),O.jsx("span",{className:"co-resume-arrow","aria-hidden":"true",children:"↗"})]})}function Af({notice:n}){const t=n.kind==="reconnected";return O.jsxs("div",{className:`mp-notice ${t?"is-restored":"is-offline"}`,children:[O.jsx("span",{className:"mp-notice-icon","aria-hidden":"true",children:t?"↗":"!"}),O.jsxs("span",{className:"mp-notice-copy",children:[O.jsxs("span",{children:[O.jsx("b",{children:n.name}),t?" 已恢復連線":" 已斷線"]}),O.jsx("small",{children:t?"已回到房間，繼續對戰":"席位保留 60 秒，等待重新連線"})]}),O.jsx("time",{dateTime:new Date(n.at).toISOString(),children:new Date(n.at).toLocaleTimeString("zh-TW",{hour12:!1,hour:"2-digit",minute:"2-digit"})})]})}function FM({notices:n}){const[t,e]=Bt.useState(()=>Date.now()),i=n.filter(s=>s.expiresAt>t).slice(-3);return Bt.useEffect(()=>{const s=n.filter(o=>o.expiresAt>t);if(!s.length)return;const r=Math.min(...s.map(o=>o.expiresAt)),a=setTimeout(()=>e(Date.now()),Math.max(0,r-Date.now()));return()=>clearTimeout(a)},[n,t]),i.length?O.jsx("aside",{className:"mp-broadcast-toasts","aria-label":"房間連線通知",role:"log","aria-live":"polite","aria-relevant":"additions",children:i.map(s=>O.jsx(Af,{notice:s},s.id))}):null}function Lu({notices:n=[],floating:t=!1}){return n.length?t?O.jsx(FM,{notices:n}):O.jsxs("section",{className:"mp-broadcast","aria-label":"房間廣播",children:[O.jsxs("header",{children:[O.jsxs("span",{children:[O.jsx("i",{"aria-hidden":"true"}),"房間廣播"]}),O.jsx("small",{children:"連線動態"})]}),O.jsx("div",{className:"mp-broadcast-log",role:"log","aria-live":"polite","aria-relevant":"additions",children:n.slice(-5).map(e=>O.jsx(Af,{notice:e},e.id))})]}):null}const OM="https://dca-simulator-uw4r.onrender.com",Lo="https://dca-simulator-uw4r.onrender.com".trim().replace(/\/+$/,""),kM=n=>/^https?:\/\/(localhost|127(?:\.\d+){3})(?::|\/|$)/i.test(n),BM=Lo&&!kM(Lo)?Lo:OM,zM={INVALID_NICKNAME:"暱稱需為 2 到 16 個字元",INVALID_ROOM_CODE:"請輸入 6 碼房間碼",ROOM_NOT_FOUND:"房間已不存在，請重新加入或建立房間",ROOM_FULL:"房間已滿（包含斷線保留席位）",ROUND_ENDING:"本局正在結算，請稍後再加入",SESSION_EXPIRED:"上一場席位已過期，或伺服器已重啟，請用房號重新加入",HOST_ONLY:"只有目前房主可以操作",NOT_READY:"需要至少兩位在線玩家才能開始",INVALID_STATE:"房間狀態已改變，請重試",ALREADY_IN_ROOM:"你已在房間內，請先離開"},Io=n=>zM[n]||n||"操作失敗，請重試";function HM({onBack:n,resumeOnMount:t=!1,enterFullscreen:e,exitFullscreen:i,enterOnFirstTouch:s,fullscreenButton:r}){const[a,o]=Bt.useState(t?"reconnecting":"join"),[c,l]=Bt.useState(localStorage.getItem("chroma-name")||""),[u,d]=Bt.useState(new URLSearchParams(location.search).get("room")||""),[h,p]=Bt.useState(null),[g,_]=Bt.useState(""),[m,f]=Bt.useState(""),[S,E]=Bt.useState(!1),[M,w]=Bt.useState(10),[y,A]=Bt.useState([]),x=Bt.useRef(null),T=Bt.useRef(null),C=Bt.useRef(Ef()),L=Bt.useRef(t),F=Bt.useRef(0),z=Bt.useRef(!1),I=Bt.useRef(!1),V=Bt.useRef(!1),B=Bt.useMemo(()=>ia(BM,{autoConnect:!1}),[]),Y=a==="playing"||a==="results",it=g===h?.host;Bt.useEffect(()=>{(a==="lobby"||a==="join")&&i?.()},[a,i]);const q=async(st,...Nt)=>{if(!B.connected)throw new Error("連線已中斷，請等待重連後再操作");try{const wt=await B.timeout(8e3).emitWithAck(st,...Nt);if(wt?.error)throw new Error(Io(wt.error));return wt}catch(wt){throw new Error(wt.message==="operation has timed out"?"伺服器回應逾時，請重試":wt.message)}},Q=()=>{C.current=null,A([]),Pu(null)},et=st=>{if(st?.protocolVersion!==mM)throw L.current=!1,B.disconnect(),new Error("多人伺服器版本不一致，請同步部署前端與 Render 伺服器後再試。");p(st),o(st.state==="PLAYING"?"playing":st.state==="GAME_OVER"?"results":"lobby")},Rt=st=>{C.current={code:st.code,playerId:st.playerId,resumeToken:st.resumeToken},Pu(C.current),F.current=st.lastReceivedSeq||0,L.current=!0,_(st.playerId),d(st.code),et(st.room)};Bt.useEffect(()=>{z.current=!0;const st=async()=>{if(!(!L.current||!C.current||I.current)){I.current=!0,E(!0),f("");try{const Yt=await B.timeout(8e3).emitWithAck("room:resume",C.current);if(!z.current||!L.current)return;if(Yt.error)throw Yt.error==="SESSION_EXPIRED"&&Q(),new Error(Io(Yt.error));Rt(Yt)}catch(Yt){z.current&&(f(Yt.message==="operation has timed out"?"恢復連線逾時，請點「返回上一場」重試":Io(Yt.message)),o("join"),L.current=!1)}finally{I.current=!1,z.current&&E(!1)}}},Nt=Yt=>{if(!(!L.current||I.current||!C.current))try{et(Yt)}catch(Se){f(Se.message),o("join")}},wt=()=>{L.current&&C.current&&(B.sendBuffer.length=0,o("reconnecting"),E(!1))},kt=()=>{f("無法連線至遊戲伺服器，正在重試；斷線席位保留 60 秒"),E(!1)},Me=()=>{L.current=!1,Q(),B.disconnect(),p(null),o("join"),E(!1),f("此席位已在另一個連線恢復，這個連線已結束")},Ne=Yt=>{!L.current||Yt?.code!==C.current?.code||!["disconnected","reconnected"].includes(Yt.kind)||!Number.isFinite(Yt.at)||A(Se=>[...Se.filter(U=>U.id!==Yt.id),{...Yt,expiresAt:Date.now()+8e3}].slice(-3))};return B.on("connect",st),B.on("room:state",Nt),B.on("disconnect",wt),B.on("connect_error",kt),B.on("room:replaced",Me),B.on("room:notice",Ne),L.current&&C.current&&B.connect(),()=>{z.current=!1,B.off("connect",st),B.off("room:state",Nt),B.off("disconnect",wt),B.off("connect_error",kt),B.off("room:replaced",Me),B.off("room:notice",Ne),B.disconnect()}},[B]);const yt=async()=>{L.current=!1,E(!0);try{B.connected&&await q("room:leave")}catch(st){f(st.message)}Q(),B.disconnect(),E(!1),n()},se=async st=>{if(!V.current){V.current=!0,E(!0),f("");try{await q(st)}catch(Nt){st==="game:start"&&i?.(),f(Nt.message)}finally{V.current=!1,z.current&&E(!1)}}};Bt.useEffect(()=>{if(!Y||!x.current||T.current)return;const st=new UM(x.current,B,h?.code,h?.roundId,Nt=>{f(Nt),E(!1),o(B.connected?"join":"reconnecting")},g,F.current,{isHost:it,onLeave:()=>{yt()},onEnd:()=>{se("game:end")}});return T.current=st,st.start(),a==="results"&&st.pause(),()=>{st.dispose(),T.current===st&&(T.current=null)}},[Y,B,h?.code,h?.roundId,g,it]),Bt.useEffect(()=>{a==="results"?T.current?.pause():a==="playing"&&T.current?.resume()},[a]),Bt.useEffect(()=>{if(a!=="results"||!h?.returnAt)return;const st=performance.now()+Math.max(0,h.returnAt-(h.serverTime||Date.now())),Nt=()=>w(Math.max(0,Math.ceil((st-performance.now())/1e3)));Nt();const wt=window.setInterval(Nt,200);return()=>window.clearInterval(wt)},[a,h?.returnAt,h?.serverTime]);const Jt=()=>B.connected?Promise.resolve():new Promise((st,Nt)=>{const wt=()=>{clearTimeout(Ne),B.off("connect",kt),B.off("connect_error",Me)},kt=()=>{wt(),st()},Me=()=>{wt(),Nt(new Error("無法連線至遊戲伺服器，請重試"))},Ne=setTimeout(()=>{wt(),Nt(new Error("連線逾時，請重試"))},1e4);B.once("connect",kt),B.once("connect_error",Me),B.connect()}),te=async st=>{const Nt=c.trim();if(Nt.length<2||Nt.length>16){f("暱稱需為 2 到 16 個字元");return}L.current=!1,I.current=!0,f(""),E(!0);try{await Jt(),C.current&&((await B.timeout(8e3).emitWithAck("room:resume",C.current)).error||await q("room:leave"),Q()),localStorage.setItem("chroma-name",Nt);const wt=await q(st,st==="room:create"?Nt:{code:u,name:Nt});z.current&&Rt(wt)}catch(wt){z.current&&(f(wt.message),o("join"))}finally{I.current=!1,z.current&&E(!1)}},$=async()=>{!C.current||S||(e?.(),o("reconnecting"),f(""),L.current=!0,B.disconnect(),B.sendBuffer.length=0,B.connect())},tt=()=>{te("room:create")},vt=()=>{te("room:join")},Ot=()=>{e?.(),se("game:start")},gt=()=>{e?.(),se("game:again")},Gt=()=>{se("game:lobby")},ye=S?O.jsxs(O.Fragment,{children:[O.jsx("i",{className:"mp-spinner","aria-hidden":"true"}),"連線中…"]}):null,qt=()=>{const st=new URL(location.href);st.searchParams.set("room",h.code),navigator.clipboard?.writeText(st.toString()).catch(()=>f("無法複製，請分享房間碼"))};if(a==="reconnecting")return O.jsx("main",{className:"mp",children:O.jsxs("section",{className:"mp-panel mp-join-panel mp-reconnect-panel",children:[O.jsx("span",{className:"mp-reconnect-orbit","aria-hidden":"true",children:O.jsx("i",{className:"mp-spinner"})}),O.jsx("p",{className:"mp-eyebrow",children:"BACK TO THE ARENA"}),O.jsx("h1",{children:"正在返回上一場"}),O.jsx("p",{className:"mp-subtitle",children:"隊友還在戰場，正在為你恢復連線。"}),O.jsxs("p",{className:"mp-reconnect-hint",children:["斷線席位保留 ",O.jsx("b",{children:"60 秒"})]}),O.jsx("p",{className:"mp-status",role:"status",children:m||"網路恢復後會自動重新連線"}),O.jsx("button",{className:"mp-primary",disabled:S,onClick:$,children:"重試連線"}),O.jsx("button",{className:"mp-secondary",onClick:yt,children:"離開房間"})]})});if(Y){const st=h?.finalStandings||[],Nt=st.filter(kt=>h?.winnerIds?.includes(kt.id)),wt=h?.winnerIds?.includes(g);return O.jsxs("main",{className:"chroma-ops co-multiplayer-shell",onPointerUpCapture:a==="playing"?s:void 0,children:[O.jsx("div",{className:"co-game-stage",ref:x,"aria-label":"CHROMA OPS multiplayer arena"},h?.roundId),a==="playing"&&r,O.jsx(Lu,{notices:y,floating:!0}),m&&O.jsx("p",{className:"mp-match-error",role:"alert",children:m}),a==="results"&&O.jsx("section",{className:"mp-result",role:"dialog","aria-modal":"true","aria-labelledby":"mp-result-title",children:O.jsxs("div",{className:`mp-result-card ${wt?"is-winner":""}`,children:[O.jsx("p",{className:"mp-result-eyebrow",children:"比賽結束"}),O.jsx("h1",{id:"mp-result-title",children:h?.endReason==="draw"?"平手":wt?"勝利！":"戰鬥結束"}),O.jsx("p",{className:"mp-result-winner",children:h?.endReason==="draw"?"本局無人取得積分":O.jsxs(O.Fragment,{children:[O.jsx("b",{children:Nt.map(kt=>kt.name).join("、")})," ",h?.endReason==="target"?`率先達到 ${h.scoreTarget} 分`:Nt.length>1?"超時並列獲勝":"超時積分最高"]})}),h?.winnerTitle&&O.jsx("p",{className:"mp-result-title",children:h.winnerTitle}),O.jsxs("div",{className:"mp-result-ranking",children:[O.jsxs("header",{children:[O.jsx("span",{children:"最終排名"}),O.jsx("span",{children:"積分 · 賞金 · K/D"})]}),st.map(kt=>O.jsxs("div",{className:kt.id===g?"is-me":"",children:[O.jsxs("span",{children:[O.jsx("i",{children:kt.rank}),kt.name,h?.winnerIds?.includes(kt.id)&&O.jsx("em",{children:"勝者"})]}),O.jsxs("strong",{className:kt.bounty>=af?"is-high-bounty":"",children:[kt.score,"分 · 賞",kt.bounty," · ",kt.kills,"/",kt.deaths]})]},kt.id))]}),O.jsxs("p",{className:"mp-result-countdown",children:[O.jsx("b",{children:M})," 秒後自動回到房間"]}),it?O.jsxs("div",{className:"mp-result-actions",children:[O.jsx("button",{className:"mp-primary",disabled:S,onClick:gt,children:S?ye:"立即再玩"}),O.jsx("button",{disabled:S,onClick:Gt,children:"立即回房間"})]}):O.jsx("p",{className:"mp-result-waiting",children:"等待房主操作，或倒數結束後自動返回"}),O.jsx("button",{className:"mp-result-leave",onClick:yt,children:"離開多人模式"})]})})]})}return a==="lobby"&&h?O.jsx("main",{className:"mp",children:O.jsxs("section",{className:"mp-panel mp-lobby-panel",children:[O.jsx("button",{className:"mp-back",disabled:S,onClick:yt,children:"← 離開房間"}),O.jsxs("header",{className:"mp-lobby-header",children:[O.jsxs("div",{children:[O.jsx("p",{className:"mp-eyebrow",children:"CHROMA OPS / LOBBY"}),O.jsx("h1",{children:"集結，準備開戰。"}),O.jsx("p",{className:"mp-subtitle",children:"分享房號，邀請朋友加入你的戰場。"})]}),O.jsxs("div",{className:"mp-room-code",children:[O.jsx("small",{children:"房間代碼"}),O.jsx("strong",{children:h.code}),O.jsxs("span",{children:[O.jsx("i",{}),h.players.filter(st=>st.connected).length," 位在線 · ",h.players.length," / 8 席位"]})]})]}),h.lobbyReason&&O.jsx("p",{className:"mp-status",role:"status",children:h.lobbyReason}),O.jsxs("div",{className:`mp-lobby-columns ${h.notices?.length?"":"is-roster-only"}`,children:[O.jsxs("section",{className:"mp-roster-panel","aria-label":"房間玩家",children:[O.jsxs("h2",{children:["玩家名單 ",O.jsxs("span",{children:[h.players.length.toString().padStart(2,"0")," / 08"]})]}),O.jsx("div",{className:"mp-player-list",children:h.players.map(st=>O.jsxs("div",{className:`mp-player-row ${st.connected?"":"is-offline"}`,children:[O.jsxs("span",{className:"mp-player-info",children:[O.jsxs("b",{children:[st.name,st.id===g&&O.jsx("small",{children:"你"})]}),O.jsxs("span",{children:[O.jsx("i",{}),st.connected?"已連線，準備就緒":"斷線中 · 席位保留 60 秒"]})]}),st.id===h.host&&O.jsx("span",{className:"mp-host-badge",children:"房主"})]},st.id))}),O.jsxs("div",{className:"mp-share-actions",children:[O.jsx("button",{className:"mp-secondary",onClick:()=>navigator.clipboard?.writeText(h.code).catch(()=>f("無法複製，請手動複製房間碼")),children:"複製房間碼"}),O.jsx("button",{className:"mp-secondary",onClick:qt,children:"複製邀請連結 ↗"})]})]}),O.jsx(Lu,{notices:h.notices})]}),O.jsxs("footer",{className:"mp-lobby-footer",children:[O.jsx("p",{children:it?"至少 2 位玩家在線即可開始，朋友也能中途加入。":"等待房主開始遊戲，先調整好你的手感吧。"}),it&&O.jsx("button",{className:"mp-primary",disabled:S||h.players.filter(st=>st.connected).length<2,onClick:Ot,children:S?ye:"開始遊戲 →"})]}),O.jsxs("p",{className:"mp-bounty-rules",children:["賞金競速：先達 ",zc," 分獲勝，限時 8 分鐘。擊殺取得對方當下賞金（50～300），死亡不扣積分。賞金隨擊殺上升、連死逐步下降；超時同分並列獲勝。"]}),O.jsxs("details",{className:"mp-preferences",children:[O.jsx("summary",{children:"視角與操作設定"}),O.jsx(qc,{})]}),m&&O.jsx("p",{className:"mp-error",role:"alert",children:m})]})}):O.jsx("main",{className:"mp",children:O.jsxs("section",{className:"mp-panel mp-join-panel",children:[O.jsx("button",{className:"mp-back",disabled:S,onClick:yt,children:"← 選擇模式"}),O.jsx("p",{className:"mp-eyebrow",children:"CHROMA OPS / MULTIPLAYER"}),O.jsx("h1",{children:"邀請你的隊友。"}),O.jsx("p",{className:"mp-subtitle",children:"建立專屬房間，或用房號直達戰場。"}),C.current&&O.jsx(Tf,{code:C.current.code,disabled:S,onResume:$}),O.jsxs("label",{className:"mp-field",children:["玩家暱稱",O.jsx("input",{placeholder:"大家怎麼稱呼你？",autoComplete:"nickname",disabled:S,value:c,maxLength:"16",onChange:st=>l(st.target.value)})]}),O.jsx("button",{className:"mp-primary",disabled:S,onClick:tt,children:S?ye:"建立新房間 →"}),O.jsx("div",{className:"mp-divider",children:O.jsx("span",{children:"或加入朋友的房間"})}),O.jsxs("label",{className:"mp-field",children:["房間碼",O.jsx("input",{className:"mp-code-input",placeholder:"輸入 6 碼房號",autoCapitalize:"characters",disabled:S,value:u,maxLength:"6",onChange:st=>d(st.target.value.toUpperCase())})]}),O.jsx("button",{className:"mp-secondary",disabled:S,onClick:vt,children:S?ye:"加入房間 ↗"}),O.jsxs("p",{className:"mp-bounty-rules",children:["賞金競速：先達 ",zc," 分獲勝，限時 8 分鐘。擊殺取得對方當下賞金（50～300），死亡不扣積分。賞金隨擊殺上升、連死逐步下降；超時同分並列獲勝。"]}),O.jsxs("details",{className:"mp-preferences",children:[O.jsx("summary",{children:"視角與操作設定"}),O.jsx(qc,{})]}),m&&O.jsx("p",{className:"mp-error",role:"alert",children:m})]})})}const Do=()=>navigator.standalone===!0||matchMedia("(display-mode: standalone), (display-mode: fullscreen)").matches;function Zc(){return document.fullscreenElement||document.webkitFullscreenElement}function No(n){if(!(!n||Zc()!==n))try{(document.exitFullscreen||document.webkitExitFullscreen)?.call(document)?.catch(()=>{})}catch{}}function GM(){const n=Bt.useRef(null),t=Bt.useCallback(d=>{n.current=d},[]),e=Bt.useRef(!1),i=Bt.useRef(null),[s,r]=Bt.useState(!1),[a]=Bt.useState(()=>!Do()&&!!(document.documentElement.requestFullscreen||document.documentElement.webkitRequestFullscreen)&&(document.fullscreenEnabled??document.webkitFullscreenEnabled)!==!1),[o]=Bt.useState(()=>/iPhone|iPod/.test(navigator.userAgent)&&!Do()),c=Bt.useCallback(()=>{const d=n.current;if(!d||i.current||Zc()||Do()||!(d.requestFullscreen||d.webkitRequestFullscreen)||(document.fullscreenEnabled??document.webkitFullscreenEnabled)===!1)return;e.current=!0;const p={cancelled:!1};i.current=p;const g=()=>{i.current===p&&(i.current=null),p.cancelled&&!i.current&&No(d)};try{const _=d.requestFullscreen?d.requestFullscreen({navigationUI:"hide"}):d.webkitRequestFullscreen();Promise.resolve(_).then(g,g)}catch{g()}},[]),l=Bt.useCallback(()=>{i.current&&(i.current.cancelled=!0,i.current=null),e.current=!1,No(n.current)},[]),u=Bt.useCallback(d=>{d.isTrusted&&d.pointerType==="touch"&&!e.current&&c()},[c]);return Bt.useEffect(()=>{const d=n.current,h=()=>r(Zc()===d);return document.addEventListener("fullscreenchange",h),document.addEventListener("webkitfullscreenchange",h),()=>{document.removeEventListener("fullscreenchange",h),document.removeEventListener("webkitfullscreenchange",h),l(),No(d)}},[l]),{attachSurface:t,enter:c,exit:l,enterOnFirstTouch:u,showInstall:o,canEnter:a&&!s}}const VM=Bt.lazy(()=>Uf(()=>import("./WardenPreview-0FMt1xfH.js"),__vite__mapDeps([0,1,2,3])));function WM({onBack:n,fullscreenButton:t}){const e=Bt.useRef(null);return Bt.useEffect(()=>{const i=new oy(e.current);return i.start(),()=>i.dispose()},[]),O.jsxs("main",{className:"chroma-ops",children:[O.jsx("div",{className:"co-game-stage",ref:e}),O.jsxs("div",{className:"co-start",children:["CHROMA OPS ",O.jsx("small",{children:"WASD 移動 · Shift 跑步 · 1–7 武器 · 狙擊槍右鍵開鏡"})]}),O.jsx("button",{type:"button",className:"co-exit",onClick:n,children:"← 選擇模式"}),t]})}function XM(){const[n,t]=Bt.useState(()=>new URLSearchParams(location.search).has("room")?"multi":"menu"),{attachSurface:e,enter:i,exit:s,enterOnFirstTouch:r,showInstall:a,canEnter:o}=GM(),c=Ef();Bt.useEffect(()=>{const d=document.querySelector('meta[name="viewport"]'),h=d?.content;d&&(d.content=`${h}, viewport-fit=cover`);const p=document.createElement("link");p.rel="manifest",p.href="/dca-simulator/chroma-ops.webmanifest";const g=document.createElement("link");return g.rel="apple-touch-icon",g.href="/dca-simulator/chroma-ops-192.png",document.head.append(p,g),()=>{d&&(d.content=h),p.remove(),g.remove()}},[]);const l=()=>{s();const d=new URL(location.href);d.searchParams.delete("room"),history.replaceState(null,"",d),t("menu")},u=o&&O.jsx("button",{type:"button",className:"co-fullscreen",onClick:i,children:"全螢幕"});return O.jsx("div",{className:"co-surface",ref:e,children:n==="solo"?O.jsx(WM,{onBack:l,fullscreenButton:u}):n==="multi"||n==="resume"?O.jsx(HM,{resumeOnMount:n==="resume",onBack:l,enterFullscreen:i,exitFullscreen:s,enterOnFirstTouch:r,fullscreenButton:u}):n==="warden"?O.jsx(Bt.Suspense,{fallback:O.jsx("main",{className:"co-menu",role:"status",children:"載入虛空騎士預覽…"}),children:O.jsx(VM,{onBack:l})}):O.jsx("main",{className:"co-menu",children:O.jsxs("section",{className:"co-menu-card",children:[O.jsx("p",{className:"co-eyebrow",children:"NEON CITY ARENA"}),O.jsx("h1",{children:"CHROMA OPS"}),O.jsx("p",{children:"選擇你的戰場模式"}),O.jsxs("div",{className:"co-mode-grid",children:[O.jsxs("button",{onClick:()=>{i(),t("solo")},children:[O.jsx("span",{children:"◎"}),O.jsx("b",{children:"單機訓練"}),O.jsx("small",{children:"對戰 AI、熟悉地圖與武器"})]}),O.jsxs("button",{onClick:()=>t("multi"),children:[O.jsx("span",{children:"◉"}),O.jsx("b",{children:"多人連線"}),O.jsx("small",{children:"建立房間、邀請朋友對戰"})]})]}),O.jsxs("button",{type:"button",className:"co-warden-entry",onClick:()=>t("warden"),children:[O.jsxs("span",{children:[O.jsx("strong",{children:"虛空騎士預覽"}),O.jsx("small",{children:"檢視 3D 模型與招式動畫"})]}),O.jsx("span",{"aria-hidden":"true",children:"→"})]}),c&&O.jsx(Tf,{code:c.code,onResume:()=>{i(),t("resume")}}),a&&O.jsxs("details",{className:"co-install",children:[O.jsx("summary",{children:"在 iPhone 隱藏瀏覽器工具列"}),O.jsx("p",{children:"在 Safari 點「分享」→「加入主畫面」。如果看到「作為網頁 App 開啟」，請開啟它。之後從主畫面的 Chroma Ops 圖示啟動。"})]}),O.jsx(qc,{})]})})})}const tS=Object.freeze(Object.defineProperty({__proto__:null,default:XM},Symbol.toStringTag,{value:"Module"}));export{Yu as A,ge as B,jM as C,ZM as D,ae as F,ve as G,vd as H,Em as L,YM as M,fn as P,Gi as Q,gl as R,KM as S,$M as T,P as V,Rd as W,Ft as a,Ae as b,ml as c,ei as d,TM as e,Lt as f,On as g,zs as h,Ms as i,Zt as j,dd as k,nn as l,We as m,Fe as n,Iu as o,Ui as p,ui as q,Ce as r,sn as s,QM as t,tS as u};
