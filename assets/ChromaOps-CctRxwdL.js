const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/WardenPreview-Op4-k5SV.js","assets/index-uy5Xw0zv.js","assets/index-CDSHnDx4.css","assets/WardenPreview-BAWcPL5r.css"])))=>i.map(i=>d[i]);
import{r as Bt,j as k,_ as Tf}from"./index-uy5Xw0zv.js";function bu(n,t){let e=0,i=0;const s=()=>{const a=n.clientWidth,o=n.clientHeight;!a||!o||a===e&&o===i||(e=a,i=o,t(e,i))},r=typeof ResizeObserver>"u"?null:new ResizeObserver(s);return r?.observe(n),window.addEventListener("resize",s),window.visualViewport?.addEventListener("resize",s),s(),()=>{r?.disconnect(),window.removeEventListener("resize",s),window.visualViewport?.removeEventListener("resize",s)}}const Re={ar:{id:"ar",label:"AR-01",icon:"▰",color:5625599,magazine:30,damage:28,fireDelay:.11,reloadTime:1.25,spread:.006,range:30,headshot:2,description:"平衡全自動步槍"},smg:{id:"smg",label:"VOLT-9",icon:"≋",color:16765021,magazine:36,damage:22,fireDelay:.075,reloadTime:.9,spread:.018,range:45,headshot:2,description:"高速近距離衝鋒槍"},flame:{id:"flame",label:"焰流槍",icon:"✦",color:16739127,magazine:80,damage:20,fireDelay:.08,reloadTime:1.6,spread:.18,range:25,burn:2,description:"近距離燃燒火焰"},ice:{id:"ice",label:"霜凍槍",icon:"❄",color:7924479,magazine:24,damage:28,fireDelay:.16,reloadTime:1.3,spread:.008,range:55,headshot:2,slow:1.25,description:"命中使敵人緩速"},shotgun:{id:"shotgun",label:"裂片散彈槍",icon:"✹",color:13208831,magazine:8,damage:10,fireDelay:.75,reloadTime:1.45,spread:.12,range:35,headshot:2,pellets:10,description:"近距離高爆發"},sniper:{id:"sniper",label:"長弓狙擊槍",icon:"⌖",color:14942074,magazine:5,damage:80,fireDelay:1,reloadTime:2.5,spread:.02,scopedSpread:0,range:420,headshot:2,description:"4 倍狙擊鏡・爆頭致命"},rocket:{id:"rocket",label:"脈衝火箭炮",icon:"◆",color:16735358,magazine:4,damage:100,fireDelay:1.05,reloadTime:1.9,spread:.012,range:100,splash:5,description:"範圍爆炸傷害"}},Qe=["ar","smg","flame","ice","shotgun","rocket","sniper"];function xa(n=1){return 1+.1*(n-1)}function ya(n,t=1){return Re[n].range*(1+.15*(t-1))}const Af=8,Rf=.75;function Mi(n,t=1){return Math.round(Re[n].magazine*(1+.25*(t-1)))}function Cf(){return Object.fromEntries(Qe.map(n=>[n,{level:1,ammo:Mi(n),reloadUntil:0,quickReloadUntil:0}]))}function Eu(n,t,e){return e?t.level<3?"upgrade":t.ammo<Mi(n,t.level)?"refill":"boost":"unlock"}function Pf(n,t,e,i=0,s=1e3){const r=Mi(n,t.level),a=t.ammo,o=Eu(n,t,e);return o==="unlock"?(t.level=1,t.ammo=Mi(n),t.reloadUntil=0,t.quickReloadUntil=0):o==="upgrade"?(t.level=t.level+1,t.ammo=Mi(n,t.level),t.reloadUntil=0):o==="refill"?(t.ammo=r,t.reloadUntil=0):t.quickReloadUntil=i+Af*s,{weapon:n,kind:o,level:t.level,previousCapacity:r,capacity:Mi(n,t.level),ammoAdded:t.ammo-a}}function Na(n,t,e,i=!1,s=1e3){t.reloadUntil&&e>=t.reloadUntil&&(t.ammo=Mi(n,t.level),t.reloadUntil=0),!t.reloadUntil&&(t.ammo===0||i&&t.ammo<Mi(n,t.level))&&(t.reloadUntil=e+Re[n].reloadTime*s*(t.quickReloadUntil>e?Rf:1))}const Xs=[{x:-65,z:45,color:3524949,name:"WEST ARCADE",side:-1},{x:68,z:44,color:1683169,name:"EAST STATION",side:1},{x:-68,z:-47,color:15613063,name:"PINK GALLERY",side:-1},{x:66,z:-48,color:15836972,name:"SUN MARKET",side:1},...[-1,1].flatMap(n=>[-90,-12,92].map((t,e)=>({x:n*112,z:t,color:[9987295,15824696,2537901][e],name:`${n<0?"WEST":"EAST"} ${["STUDIO","SHOPS","GARDEN"][e]}`,side:n})))],It=(n,t,e,i,s,r,a=0)=>({minX:n-e/2,maxX:n+e/2,minZ:t-i/2,maxZ:t+i/2,minY:a,maxY:s,color:r}),wu=Xs.flatMap(n=>[{x:n.x+n.side*16,z0:n.z+25,z1:n.z+1,from:0,to:6,width:4},{x:n.x+n.side*22,z0:n.z+1,z1:n.z+25,from:6,to:12,width:4}]);function Lf(n,t){for(const e of wu){const i=(t-e.z0)/(e.z1-e.z0);if(Math.abs(n-e.x)<=e.width/2&&i>=0&&i<=1)return e.from+(e.to-e.from)*i}return null}const fi=[];for(const n of Xs){const t=(e,i,s,r,a,o=n.color,c=0)=>fi.push(It(n.x+e,n.z+i,s,r,a,o,c));for(const e of[0,6])for(const i of[-1,1])for(const s of["x","z"]){const r=(a,o,c,l)=>s==="x"?t(i*12,a,.4,o,l,n.color,c):t(a,i*12,o,.4,l,n.color,c);r(0,24,e+3.5,e+6);for(const a of[-7,7])r(a,10,e,e+1.2);for(const a of[-12,-6,-2,2,6,12])r(a,.6,e+1.2,e+3.5)}for(const e of[6,12]){t(-8.65,0,6.3,23.6,e,15330801,e-.3),t(5.15,0,13.3,23.6,e,15330801,e-.3),t(-3.5,-10.15,4,3.3,e,15330801,e-.3),t(-3.5,6.7,4,10.2,e,15330801,e-.3);for(const i of[e-6]){for(let s=0;s<12;s++)t(-7.5,-8+(s+.5)*.65,4,.65,i+(s+1)*.25,16761648,i),t(-3.5,-.2-(s+.5)*.65,4,.65,i+3+(s+1)*.25,16761648,i+3);t(-5.5,.9,8,2.2,i+3,16761648,i+2.7)}}for(const e of[-1,1])t(e*12,0,.25,10,13.1,16777215,12),t(0,e*12,6,.25,13.1,16777215,12);t(n.side*18,-1,12,4,6,16761648,5.7),t(n.side*15,27,18,4,12,16761648,11.7),t(n.side*8,20.5,4,17,12,16761648,11.7)}fi.push(It(0,36,88,4,6,16761648,5.7));for(const n of[34,38])fi.push(It(0,n,80,.2,7.1,16777215,6));for(const[n,t,e]of[[-48.5,45,11],[50,44,12]])fi.push(It(n,t,e,4,6,16761648,5.7));for(const n of[-44,44]){fi.push(It(n,40.5,4,9,6,16761648,5.7));for(const t of[-1,1])fi.push(It(n+t*2,41.5,.2,3,7.1,16777215,6))}for(const n of[-36,36])fi.push(It(n,36,1.2,1.2,5.7,7174304));for(const[n,t]of[[-37.5,35],[38,36]]){fi.push(It(n,55.5,t,4,12,16761648,11.7));for(const e of[53.5,57.5])fi.push(It(n,e,t,.2,13.1,16777215,12))}for(const n of[6,12])fi.push(It(68,31,4,2,n,15330801,n-.3));for(const n of[65,71])fi.push(It(n,25,.35,.35,14,6715566));const If=fi,zr=[[-42,-65],[40,-65],[-45,18],[46,20],[-112,64],[115,65],[-30,112],[94,124]],Lo=[[-50,-64],[50,-64],[-38,36],[38,36],[-119,18],[119,18],[-40,80],[42,80],[-16,-90],[16,-90]],Df=[...zr.map(([n,t])=>It(n,t,5,5,.8,15747988)),...[[-40,5],[40,3],[-105,68],[108,68]].flatMap(([n,t])=>[It(n,t,4,1,.65,16761648),It(n,t+.5,4,.2,1.3,16761648,.65)]),...Lo.map(([n,t])=>It(n,t,.25,.25,4.6,14148848))],Nf=[[-140,-114],[-104,-122],[-148,-36],[-140,75],[-78,112],[-26,-116],[28,-122],[84,-106],[140,-100],[145,-36],[126,62],[88,124],[18,126],[-42,112],[-96,58],[-112,-48],[-36,-54],[30,32],[120,24],[-56,8]],Uf=[[-130,-100],[-92,-42],[-45,30],[-65,45],[-65,62],[0,32],[68,44],[68,62],[110,60],[120,-18],[88,-74],[20,-102],[-25,-54],[-112,45],[-12,104],[35,35]],Ff={minX:-90,maxX:90,minZ:-22,maxZ:26},fs=[{name:"NORTH",axis:"z",outer:-46,inner:-22,cross:0,kind:"ramp"},{name:"SOUTH",axis:"z",outer:50,inner:26,cross:0,kind:"ramp"},{name:"WEST",axis:"x",outer:-114,inner:-90,cross:9,kind:"stairs"},{name:"EAST",axis:"x",outer:114,inner:90,cross:9,kind:"stairs"}],tr=fs.map(n=>n.axis==="z"?{minX:-3,maxX:3,minZ:Math.min(n.outer,n.inner),maxZ:Math.max(n.outer,n.inner)}:{minX:Math.min(n.outer,n.inner),maxX:Math.max(n.outer,n.inner),minZ:6,maxZ:12}),Io=(n,t,e,i=0)=>n>=e.minX-i&&n<=e.maxX+i&&t>=e.minZ-i&&t<=e.maxZ+i;function Of(n,t){for(let e=0;e<fs.length;e++)if(Io(n,t,tr[e])){const i=fs[e],s=((i.axis==="z"?t:n)-i.outer)/(i.inner-i.outer);return i.kind==="ramp"?-6*s:-6}return Io(n,t,Ff)?-6:null}function Tu(n,t=tr){let e=[n];for(const i of t)e=e.flatMap(s=>{const r=Math.max(s.minX,i.minX),a=Math.min(s.maxX,i.maxX),o=Math.max(s.minZ,i.minZ),c=Math.min(s.maxZ,i.maxZ);return r>=a||o>=c?[s]:[{...s,maxX:r},{...s,minX:a},{...s,minX:r,maxX:a,maxZ:o},{...s,minX:r,maxX:a,minZ:c}].filter(l=>l.maxX-l.minX>1e-6&&l.maxZ-l.minZ>1e-6)});return e}const Ii=[It(0,2,180,48,-6,8625066,-6.4),It(0,2,180,48,0,13228511,-.35)];for(const n of[-22,26])for(const t of[-46.5,46.5])Ii.push(It(t,n,87,.4,0,5268103,-6));for(const n of[-90,90])Ii.push(It(n,-8,.4,28,0,5268103,-6),It(n,19,.4,14,0,5268103,-6));for(const n of fs){const t=(n.outer+n.inner)/2;for(const e of[-1,1])Ii.push(n.axis==="z"?It(e*3.2,t,.4,24,1.1,8837607,-6):It(t,n.cross+e*3.2,24,.4,1.1,8837607,-6));if(n.kind==="stairs")for(let e=0;e<24;e++){const i=n.outer+Math.sign(n.inner-n.outer)*(e+.5);Ii.push(It(i,n.cross,1,6,-e*.25,16760147,-6.3))}}const Au=[-51.5,-42.5,-33.5,-24.5,24.5,33.5,42.5,51.5].map((n,t)=>({x:n,z:2,width:9,depth:12,color:[16018351,5888449,16761946,10325231][t%4],name:["ARCADE","CAFE","SPORT","MUSIC","BOOKS","TECH","TOYS","BAKERY"][t]}));for(const n of Au){Ii.push(It(n.x-4.5,2,.25,12,-.35,n.color,-6));for(const t of[-4,8]){for(const e of[-1,1])Ii.push(It(n.x+e*3.25,t,2.5,.25,-.35,n.color,-6));Ii.push(It(n.x,t,4,.25,-.35,n.color,-2.5))}Ii.push(It(n.x,2,3,1,-5,5861761,-6))}for(const n of[-20,56])Ii.push(It(n,2,.25,12,-.35,10325231,-6));const kf=Ii,Do=[{x:-64,y:-6,z:18},{x:64,y:-6,z:-14},{x:-42.5,y:-6,z:5},{x:42.5,y:-6,z:-1}],Je={x:0,z:-90,radius:22,centerY:22.2,cabins:8,period:60},Bf=[16731800,3594436,16761648,4945384,13208831,16742461,5625599,9626447],wn=(n,t,e,i,s,r,a)=>({minX:n-i/2,maxX:n+i/2,minY:t-s/2,maxY:t+s/2,minZ:e-r/2,maxZ:e+r/2,color:a}),zf=[-1,1].flatMap(n=>[wn(n*8,10.5,-94,1.2,21,1.2,16761648),wn(n*8,.25,-94,4,.5,4,2374768)]).concat([wn(0,21.2,-94,17,1.2,1.2,16761648)]);function Ru(n,t){const e=(t/Je.period+n/Je.cabins)*Math.PI*2;return{x:Je.x+Math.sin(e)*Je.radius,y:Je.centerY-Math.cos(e)*Je.radius,z:Je.z}}function ia(n,t){const{x:e,y:i,z:s}=Ru(n,t),r=Bf[n];return[wn(e,i-.2,s,6,.4,4,r),wn(e-2.9,i+.55,s,.2,1.1,4,r),wn(e+2.9,i+.55,s,.2,1.1,4,r),wn(e,i+.55,s-1.9,5.6,1.1,.2,r)]}function Hf(n){return Array.from({length:Je.cabins},(t,e)=>ia(e,n)).flat()}function Gf(n,t,e,i){for(let s=0;s<Je.cabins;s++)for(const r of ia(s,i)){const a=Math.max(r.minX-n,0,n-r.maxX),o=Math.max(r.minZ-e,0,e-r.maxZ);if(Math.abs(t-r.maxY)<.025&&a*a+o*o<.42*.42)return s}return null}const Cu=8,ps={x:68,z:28};function Pu(n){const t=(n%28+28)%28;return t<3?0:t<7?(t-3)/4*6:t<10?6:t<14?6+(t-10)/4*6:t<17?12:t<21?12-(t-17)/4*6:t<24?6:6-(t-24)/4*6}function zs(n,t){return n===Cu?{x:ps.x,y:Pu(t),z:ps.z}:Ru(n,t)}function na(n){const t=Pu(n);return[It(68,28,4,4,t,16731800,t-.3),It(66.1,28,.2,4,t+1.1,16777215,t),It(69.9,28,.2,4,t+1.1,16777215,t),It(68,26.1,4,.2,t+1.1,16777215,t)]}function No(n){return[...Hf(n),...na(n)]}function Hl(n,t,e,i){if(Math.abs(n-ps.x)<2.5&&Math.abs(e-ps.z)<2.5)for(const s of na(i)){const r=Math.max(s.minX-n,0,n-s.maxX),a=Math.max(s.minZ-e,0,e-s.maxZ);if(Math.abs(t-s.maxY)<.025&&r*r+a*a<.42*.42)return Cu}return Gf(n,t,e,i)}const Wc={floors:[0,6,12],name:"CHROMA LAB"},re=[],Hs=[],Tn=[],Yi=15330801,Xi=6322567,hn=10082783,$t=(n,t,e,i,s,r,a,o=Yi)=>n.push(It(t,e,i,s,r,o,a));for(const n of[6,12,18])$t(re,58,104,56.8,24.8,n,n-.3);$t(re,58,103,55.6,21.6,.02,0);for(const n of Wc.floors){for(const i of[92,n===0?114:116]){for(const s of[43,73])$t(Hs,s,i,26,.18,n+5.7,n+.4,13234669),$t(re,s,i,26,.35,n+.4,n,Yi);n>0&&($t(Hs,58,i,4,.18,n+5.7,n+.4,13234669),$t(re,58,i,4,.35,n+.4,n,Yi)),$t(re,58,i,56,.35,n+6,n+(n===0?4.2:5.7));for(let s=30;s<=86;s+=4)(n>0||s!==58)&&$t(Tn,s,i,.09,.26,n+5.7,n+.4,Xi);for(const s of[n+.4,n+3,n+5.7])for(const r of[43,73])$t(Tn,r,i,26,.26,s+.05,s-.05,hn);if(n>0)for(const s of[n+.4,n+3,n+5.7])$t(Tn,58,i,4,.26,s+.05,s-.05,hn)}$t(re,30,n===0?105.25:106.25,.4,n===0?17.5:19.5,n+6,n),$t(re,30,94.25,.4,4.5,n+6,n+4.2);const t=n===0?103:104,e=n===0?22:24;$t(Hs,86,t,.18,e,n+5.7,n+.4,13234669),$t(re,86,t,.4,e,n+.4,n),$t(re,86,t,.4,e,n+6,n+5.7);for(const i of[92,96,100,104,108,112,n===0?114:116])$t(Tn,86,i,.26,.09,n+5.7,n+.4,Xi);$t(re,38,105,8,.4,n+3.3,n,Xi),$t(re,34,103,.4,4,n+3.3,n,Xi),$t(re,72,102,6,1.2,n+1.1,n,Yi)}for(const n of Wc.floors){for(let t=0;t<12;t++){const e=(t+1)*.25;$t(re,23.5,94.5+(t+.5)*.75,4,.75,n+e,n,Yi),$t(re,27.5,103.5-(t+.5)*.75,4,.75,n+3+e,n+3,Yi);for(const[i,s,r]of[[21.45,94.5+(t+.5)*.75,n+e],[29.55,103.5-(t+.5)*.75,n+3+e]])$t(re,i,s,.15,.75,r+1.1,r+.95,hn),$t(re,i,s,.15,.12,r+1.1,r,Xi)}$t(re,25.5,104.5,8,2,n+3,n+2.7),$t(re,25.5,93.5,8,2,n+6,n+5.7),$t(re,29.75,94.25,.5,4.5,n+6,n+5.7),$t(re,25.5,105.5,8,.15,n+4.1,n+3,hn),$t(re,25.5,92.5,8,.15,n+7.1,n+6,hn);for(const t of[21.45,29.55])$t(re,t,104.5,.15,2,n+4.1,n+3,hn);$t(re,21.45,93.5,.15,2,n+7.1,n+6,hn)}$t(re,25.5,93.5,8,2,0,-.3);for(const n of[30,86])$t(re,n,106.25,.2,19.5,19.1,18,Xi);for(const n of[92,116])$t(re,58,n,56,.2,19.1,18,Xi);$t(re,58,98,40,.3,21,18,Yi);for(const n of[38,78])$t(re,n,102,.3,8,21,18,Yi);for(let n=38;n<=78;n+=2)$t(Tn,n,97.8,.1,.1,21,18,Xi);$t(re,58,117,56,6,4.7,4.45,hn);$t(re,58,116.7,57,.6,18.25,17.85,Yi);for(const n of[32,40,48,68,76,84])$t(Tn,n,116.25,.22,.5,4.4,0,Xi);const Gl=Hs,Vf=Tn,Wf=[...re,...Hs],as={minX:-154,maxX:154,minZ:-140,maxZ:140,width:308,depth:280},Xc=560,Uo=8,Vl=1.2,xi=1.65,Hr=1.8,qc=.42,Xf=7,Wl=14,sr=.35,ls=1e-4,qf=Nf;Xs.map(n=>({...n,openSouth:!0}));const ke=(n,t,e,i,s,r,a=0)=>({minX:n-e/2,maxX:n+e/2,minZ:t-i/2,maxZ:t+i/2,minY:a,maxY:a+s,color:r}),ei=[...zf,...If,...Df,...kf,...Wf,ke(-152,0,4,280,19,2971848),ke(152,0,4,280,19,15479928),ke(0,-138,308,4,17,15968045),ke(0,138,308,4,17,3524949),ke(0,-3,6,6,3,15747925),ke(-22,13,8,3,2,16758584),ke(24,-14,8,3,2,4945384),ke(-3,20,3,8,2,8014805),ke(5,-25,3,8,2,3524949),ke(-40,-8,12,2,4,9262549),ke(-34,-19,2,18,4,9262549),ke(-49,-19,2,18,4,9262549),ke(42,10,13,2,4,15682683),ke(36,20,2,18,4,15682683),ke(49,20,2,18,4,15682683),ke(-43,-34,4,4,2,16761648),ke(42,34,4,4,2,3524949),ke(-12,92,32,3,3,3524949)];function Fo(n){return{boxes:[...ei,...No(n)],heightAt:vs}}function Yc(n,t){const e=Lf(n,t);return e!==null?e:n>-22&&n<22&&t>52&&t<72?12:n>-25&&n<-16&&t>40&&t<=52?t-40:n>-12&&n<20&&t>88&&t<112?6:n>-38&&n<=-12&&t>88&&t<112?Math.max(0,(n+38)/26*6):0}function vs(n,t){return Of(n,t)??Yc(n,t)}const Oo=new Map;for(const n of ei)for(let t=Math.floor(n.minX/16);t<=Math.floor(n.maxX/16);t++)for(let e=Math.floor(n.minZ/16);e<=Math.floor(n.maxZ/16);e++){const i=`${t},${e}`,s=Oo.get(i)||[];s.push(n),Oo.set(i,s)}function $c(n,t,e=1){const i=new Set;for(let s=Math.floor((n-e)/16);s<=Math.floor((n+e)/16);s++)for(let r=Math.floor((t-e)/16);r<=Math.floor((t+e)/16);r++)for(const a of Oo.get(`${s},${r}`)||[])i.add(a);return[...i]}function Zc(n,t,e,i=qc){const s=Math.max(e.minX-n,0,n-e.maxX),r=Math.max(e.minZ-t,0,t-e.maxZ);return s*s+r*r<i*i}function Ma(n,t,e=qc,i=0,s=ei){return s===ei&&(s=$c(n,t,e)),s.some(r=>Zc(n,t,r,e)&&i<r.maxY-ls&&i+Hr>r.minY+ls)}function ko(n,t,e,i){let s=0,r=i;for(const a of["X","Y","Z"]){const o=a.toLowerCase(),c=t[o],l=n[o];if(Math.abs(c)<1e-9){if(l<e[`min${a}`]||l>e[`max${a}`])return null;continue}const h=(e[`min${a}`]-l)/c,d=(e[`max${a}`]-l)/c;if(s=Math.max(s,Math.min(h,d)),r=Math.min(r,Math.max(h,d)),s>r)return null}return s<=i?s:null}function Si(n,t,e,i={boxes:ei,heightAt:vs}){let s=e;for(const r of i.boxes){const a=ko(n,t,r,s);a!==null&&(s=a)}for(let r=0;r<=s;r+=.1)if(n.y+t.y*r<i.heightAt(n.x+t.x*r,n.z+t.z*r))return r;return s}function Bo(n,t,e,i={boxes:ei,heightAt:vs}){let s=i.heightAt(n,t);for(const r of i.boxes===ei?$c(n,t):i.boxes)r.maxY<=e+ls&&Zc(n,t,r)&&(s=Math.max(s,r.maxY));return s}function Kc(n,t,e,i={boxes:ei,heightAt:vs},s=1,r){if(!n.alive)return;i.boxes===ei&&(i={...i,boxes:$c(n.x,n.z,7)});const a=i;r!==void 0&&(i={...a,boxes:[...a.boxes,...No(r)]}),n.yaw-=t.lookX*.0024,n.pitch=Math.max(-1.35,Math.min(1.35,n.pitch-t.lookY*.0021));let o=n.y-xi,c=Bo(n.x,n.z,o+.02,i),l=Math.abs(o-c)<=.02&&n.velocityY<=0;l?(n.jumpsUsed=0,n.velocityY=0):n.jumpsUsed===0&&(n.jumpsUsed=1),t.jump&&n.jumpsUsed<2&&(n.velocityY=Xf,n.jumpsUsed++,l=!1);const h=-Math.sin(n.yaw),d=-Math.cos(n.yaw);let u=h*t.moveY+Math.cos(n.yaw)*t.moveX,p=d*t.moveY-Math.sin(n.yaw)*t.moveX;const g=Math.hypot(u,p);g>0&&(u=u/g*Uo*s*(t.sprint?Vl:1),p=p/g*Uo*s*(t.sprint?Vl:1));const _=Math.max(0,Math.min(.25,e)),m=Math.max(1,Math.ceil(_/(1/120))),f=_/m;for(let M=0;M<m;M++){if(r!==void 0){const A=r+M*f,x=A+f,E=l?Hl(n.x,n.y-xi,n.z,A):null;if(E!==null){const P=zs(E,A),L=zs(E,x);n.x+=L.x-P.x,n.y+=L.y-P.y,n.z+=L.z-P.z}i={...a,boxes:[...a.boxes,...No(x)]}}o=n.y-xi;const T=(A,x)=>!Ma(A,x,qc,o+(l?sr:0),i.boxes)&&i.heightAt(A,x)<=o+(l?sr:ls),y=n.x+u*f;T(y,n.z)&&(n.x=y);const w=n.z+p*f;if(T(n.x,w)&&(n.z=w),c=Bo(n.x,n.z,o+(l?sr:.04),i),l&&Math.abs(c-o)<=sr){n.y=c+xi,n.velocityY=0,n.jumpsUsed=0;continue}l=!1,n.jumpsUsed===0&&(n.jumpsUsed=1);let b=o+n.velocityY*f-Wl*f*f/2;if(n.velocityY-=Wl*f,b>o)for(const A of i.boxes)Zc(n.x,n.z,A)&&o+Hr<=A.minY+ls&&b+Hr>A.minY&&(b=Math.min(b,A.minY-Hr),n.velocityY=0);n.velocityY<=0&&o>=c-(r!==void 0?.04:ls)&&b<=c&&(b=c,n.velocityY=0,n.jumpsUsed=0,l=!0),n.y=b+xi}r!==void 0&&(n.supportId=n.velocityY<=0?Hl(n.x,n.y-xi,n.z,r+_):null)}function Yf(n,t,e){let i=7,s;for(const o of n){if(!o.available)continue;const c=o.position.x-t.x,l=o.position.y-t.y,h=o.position.z-t.z,d=Math.hypot(c,l,h);d>i||d>.001&&Si(t,{x:c/d,y:l/d,z:h/d},d,e)<d-.05||(i=d,s=o)}if(!s)return"";const r=Eu(s.id,s.state,s.owned),a=r==="unlock"?"取得 Lv.1":r==="upgrade"?`升至 Lv.${s.state.level+1}・彈匣補滿`:r==="refill"?"彈匣補滿":"快速換彈 8 秒・換彈時間 -25%";return`${Re[s.id].label}｜${a}`}class Lu{el=document.createElement("div");signature="";constructor(t){this.el.className="co-pickup-preview",this.el.hidden=!0,t.append(this.el)}update(t,e,i,s){const r=s?Yf(t,e,i):"";r!==this.signature&&(this.signature=r,this.el.textContent=r,this.el.hidden=!r)}dispose(){this.el.remove()}}const jc="186",PM={ROTATE:0,DOLLY:1,PAN:2},LM={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$f=0,Xl=1,Zf=2,Gr=1,Kf=2,Us=3,Ln=0,ii=1,Le=2,$i=0,Cn=1,ui=2,ql=3,Yl=4,jf=5,rs=100,Jf=101,Qf=102,tp=103,ep=104,ip=200,np=201,sp=202,rp=203,Iu=204,Du=205,ap=206,op=207,cp=208,lp=209,hp=210,up=211,dp=212,fp=213,pp=214,zo=0,Ho=1,Go=2,qs=3,Vo=4,Wo=5,Xo=6,qo=7,Nu=0,mp=1,gp=2,Ni=0,Uu=1,Fu=2,Ou=3,ku=4,Bu=5,zu=6,Hu=7,Gu=300,In=301,ms=302,Ua=303,Fa=304,Sa=306,Yo=1e3,qi=1001,$o=1002,He=1003,_p=1004,rr=1005,Ge=1006,Oa=1007,An=1008,ri=1009,Vu=1010,Wu=1011,Ys=1012,Jc=1013,Fi=1014,bi=1015,Oi=1016,Qc=1017,tl=1018,$s=1020,Xu=35902,qu=35899,Yu=1021,$u=1022,Ei=1023,Ji=1026,Rn=1027,el=1028,il=1029,Dn=1030,nl=1031,sl=1033,Vr=33776,Wr=33777,Xr=33778,qr=33779,Zo=35840,Ko=35841,jo=35842,Jo=35843,Qo=36196,tc=37492,ec=37496,ic=37488,nc=37489,sa=37490,sc=37491,rc=37808,ac=37809,oc=37810,cc=37811,lc=37812,hc=37813,uc=37814,dc=37815,fc=37816,pc=37817,mc=37818,gc=37819,_c=37820,vc=37821,xc=36492,yc=36494,Mc=36495,Sc=36283,bc=36284,ra=36285,Ec=36286,vp=3200,wc=0,xp=1,un="",ci="srgb",aa="srgb-linear",oa="linear",he="srgb",ka=7680,yp=519,Mp=512,Sp=513,bp=514,rl=515,Ep=516,wp=517,al=518,Tp=519,Zu=35044,Zi=35048,$l="300 es",Di=2e3,Zs=2001;function Ap(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ca(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Rp(){const n=ca("canvas");return n.style.display="block",n}const Zl={};function la(...n){const t="THREE."+n.shift();console.log(t,...n)}function Ku(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ut(...n){n=Ku(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ie(...n){n=Ku(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function hs(...n){const t=n.join(" ");t in Zl||(Zl[t]=!0,Ut(...n))}function Cp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Pp={[zo]:Ho,[Go]:Xo,[Vo]:qo,[qs]:Wo,[Ho]:zo,[Xo]:Go,[qo]:Vo,[Wo]:qs};class mn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kl=1234567;const Gs=Math.PI/180,Ks=180/Math.PI;function Ki(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]).toLowerCase()}function Kt(n,t,e){return Math.max(t,Math.min(e,n))}function ol(n,t){return(n%t+t)%t}function Lp(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Ip(n,t,e){return n!==t?(e-n)/(t-n):0}function Vs(n,t,e){return(1-e)*n+e*t}function Dp(n,t,e,i){return Vs(n,t,1-Math.exp(-e*i))}function Np(n,t=1){return t-Math.abs(ol(n,t*2)-t)}function Up(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Fp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Op(n,t){return n+Math.floor(Math.random()*(t-n+1))}function kp(n,t){return n+Math.random()*(t-n)}function Bp(n){return n*(.5-Math.random())}function zp(n){n!==void 0&&(Kl=n);let t=Kl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hp(n){return n*Gs}function Gp(n){return n*Ks}function Vp(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Wp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Xp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function qp(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),h=a((t+i)/2),d=r((t-i)/2),u=a((t-i)/2),p=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*h,c*d,c*u,o*l);break;case"YZY":n.set(c*u,o*h,c*d,o*l);break;case"ZXZ":n.set(c*d,c*u,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*p,o*l);break;case"YXY":n.set(c*p,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*p,o*h,o*l);break;default:Ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ue(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ze={DEG2RAD:Gs,RAD2DEG:Ks,generateUUID:Ki,clamp:Kt,euclideanModulo:ol,mapLinear:Lp,inverseLerp:Ip,lerp:Vs,damp:Dp,pingpong:Np,smoothstep:Up,smootherstep:Fp,randInt:Op,randFloat:kp,randFloatSpread:Bp,seededRandom:zp,degToRad:Hp,radToDeg:Gp,isPowerOfTwo:Vp,ceilPowerOfTwo:Wp,floorPowerOfTwo:Xp,setQuaternionFromProperEuler:qp,normalize:ue,denormalize:yi},Tl=class Tl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Tl.prototype.isVector2=!0;let Ft=Tl;class ki{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(d!==_||c!==u||l!==p||h!==g){let m=c*u+l*p+h*g+d*_;m<0&&(u=-u,p=-p,g=-g,_=-_,m=-m);let f=1-o;if(m<.9995){const M=Math.acos(m),T=Math.sin(M);f=Math.sin(f*M)/T,o=Math.sin(o*M)/T,c=c*f+u*o,l=l*f+p*o,h=h*f+g*o,d=d*f+_*o}else{c=c*f+u*o,l=l*f+p*o,h=h*f+g*o,d=d*f+_*o;const M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*d+c*p-l*u,t[e+1]=c*g+h*u+l*d-o*p,t[e+2]=l*g+h*p+o*u-c*d,t[e+3]=h*g-o*d-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),d=o(r/2),u=c(i/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"YZX":this._x=u*h*d+l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d-u*p*g;break;case"XZY":this._x=u*h*d-l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d+u*p*g;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Al=class Al{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),h=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+c*l+a*d-o*h,this.y=i+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ba.copy(this).projectOnVector(t),this.sub(Ba)}reflect(t){return this.sub(Ba.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Al.prototype.isVector3=!0;let C=Al;const Ba=new C,jl=new ki,Rl=class Rl{constructor(t,e,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],_=s[0],m=s[3],f=s[6],M=s[1],T=s[4],y=s[7],w=s[2],b=s[5],A=s[8];return r[0]=a*_+o*M+c*w,r[3]=a*m+o*T+c*b,r[6]=a*f+o*y+c*A,r[1]=l*_+h*M+d*w,r[4]=l*m+h*T+d*b,r[7]=l*f+h*y+d*A,r[2]=u*_+p*M+g*w,r[5]=u*m+p*T+g*b,r[8]=u*f+p*y+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,p=l*r-a*c,g=e*d+i*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*l-h*i)*_,t[2]=(o*i-s*a)*_,t[3]=u*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(i*c-l*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(za.makeScale(t,e)),this}rotate(t){return hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(za.makeRotation(-t)),this}translate(t,e){return hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(za.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Rl.prototype.isMatrix3=!0;let zt=Rl;const za=new zt,Jl=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ql=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yp(){const n={enabled:!0,workingColorSpace:aa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===he&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===he&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===un?oa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[aa]:{primaries:t,whitePoint:i,transfer:oa,toXYZ:Jl,fromXYZ:Ql,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:i,transfer:he,toXYZ:Jl,fromXYZ:Ql,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),n}const Qt=Yp();function ji(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function us(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Bn;class $p{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Bn===void 0&&(Bn=ca("canvas")),Bn.width=t.width,Bn.height=t.height;const s=Bn.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Bn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ca("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ji(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ji(e[i]/255)*255):e[i]=ji(e[i]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zp=0;class cl{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Ki(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ha(s[a].image)):r.push(Ha(s[a]))}else r=Ha(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ha(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$p.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}let Kp=0;const Ga=new C;class Ve extends mn{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,i=qi,s=qi,r=Ge,a=An,o=Ei,c=ri,l=Ve.DEFAULT_ANISOTROPY,h=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Ki(),this.name="",this.source=new cl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ga).x}get height(){return this.source.getSize(Ga).y}get depth(){return this.source.getSize(Ga).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yo:t.x=t.x-Math.floor(t.x);break;case qi:t.x=t.x<0?0:1;break;case $o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yo:t.y=t.y-Math.floor(t.y);break;case qi:t.y=t.y<0?0:1;break;case $o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Gu;Ve.DEFAULT_ANISOTROPY=1;const Cl=class Cl{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(l+1)/2,y=(p+1)/2,w=(f+1)/2,b=(h+u)/4,A=(d+_)/4,x=(g+m)/4;return T>y&&T>w?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=b/i,r=A/i):y>w?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=b/s,r=x/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=A/r,s=x/r),this.set(i,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-_)/M,this.z=(u-h)/M,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Cl.prototype.isVector4=!0;let be=Cl;class jp extends mn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new Ve(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new cl(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends jp{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ju extends Ve{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jp extends Ve{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const va=class va{constructor(t,e,i,s,r,a,o,c,l,h,d,u,p,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,h,d,u,p,g,_,m)}set(t,e,i,s,r,a,o,c,l,h,d,u,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new va().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/zn.setFromMatrixColumn(t,0).length(),r=1/zn.setFromMatrixColumn(t,1).length(),a=1/zn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,p=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=u-_*l,e[9]=-o*c,e[2]=_-u*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,p=c*d,g=l*h,_=l*d;e[0]=u+_*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,p=c*d,g=l*h,_=l*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,p=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=g*l-p,e[8]=u*l+_,e[1]=c*d,e[5]=_*l+u,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-u*d,e[8]=g*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+_,e[5]=a*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qp,t,tm)}lookAt(t,e,i){const s=this.elements;return ni.subVectors(t,e),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),sn.crossVectors(i,ni),sn.lengthSq()===0&&(Math.abs(i.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),sn.crossVectors(i,ni)),sn.normalize(),ar.crossVectors(ni,sn),s[0]=sn.x,s[4]=ar.x,s[8]=ni.x,s[1]=sn.y,s[5]=ar.y,s[9]=ni.y,s[2]=sn.z,s[6]=ar.z,s[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],M=i[3],T=i[7],y=i[11],w=i[15],b=s[0],A=s[4],x=s[8],E=s[12],P=s[1],L=s[5],F=s[9],O=s[13],I=s[2],V=s[6],z=s[10],Y=s[14],it=s[3],q=s[7],Q=s[11],et=s[15];return r[0]=a*b+o*P+c*I+l*it,r[4]=a*A+o*L+c*V+l*q,r[8]=a*x+o*F+c*z+l*Q,r[12]=a*E+o*O+c*Y+l*et,r[1]=h*b+d*P+u*I+p*it,r[5]=h*A+d*L+u*V+p*q,r[9]=h*x+d*F+u*z+p*Q,r[13]=h*E+d*O+u*Y+p*et,r[2]=g*b+_*P+m*I+f*it,r[6]=g*A+_*L+m*V+f*q,r[10]=g*x+_*F+m*z+f*Q,r[14]=g*E+_*O+m*Y+f*et,r[3]=M*b+T*P+y*I+w*it,r[7]=M*A+T*L+y*V+w*q,r[11]=M*x+T*F+y*z+w*Q,r[15]=M*E+T*O+y*Y+w*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15],M=c*p-l*u,T=o*p-l*d,y=o*u-c*d,w=a*p-l*h,b=a*u-c*h,A=a*d-o*h;return e*(_*M-m*T+f*y)-i*(g*M-m*w+f*b)+s*(g*T-_*w+f*A)-r*(g*y-_*b+m*A)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],M=e*o-i*a,T=e*c-s*a,y=e*l-r*a,w=i*c-s*o,b=i*l-r*o,A=s*l-r*c,x=h*_-d*g,E=h*m-u*g,P=h*f-p*g,L=d*m-u*_,F=d*f-p*_,O=u*f-p*m,I=M*O-T*F+y*L+w*P-b*E+A*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/I;return t[0]=(o*O-c*F+l*L)*V,t[1]=(s*F-i*O-r*L)*V,t[2]=(_*A-m*b+f*w)*V,t[3]=(u*b-d*A-p*w)*V,t[4]=(c*P-a*O-l*E)*V,t[5]=(e*O-s*P+r*E)*V,t[6]=(m*y-g*A-f*T)*V,t[7]=(h*A-u*y+p*T)*V,t[8]=(a*F-o*P+l*x)*V,t[9]=(i*P-e*F-r*x)*V,t[10]=(g*b-_*y+f*M)*V,t[11]=(d*y-h*b-p*M)*V,t[12]=(o*E-a*L-c*x)*V,t[13]=(e*L-i*E+s*x)*V,t[14]=(_*T-g*w-m*M)*V,t[15]=(h*w-d*T+u*M)*V,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,p=r*h,g=r*d,_=a*h,m=a*d,f=o*d,M=c*l,T=c*h,y=c*d,w=i.x,b=i.y,A=i.z;return s[0]=(1-(_+f))*w,s[1]=(p+y)*w,s[2]=(g-T)*w,s[3]=0,s[4]=(p-y)*b,s[5]=(1-(u+f))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(g+T)*A,s[9]=(m-M)*A,s[10]=(1-(u+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=zn.set(s[0],s[1],s[2]).length();const o=zn.set(s[4],s[5],s[6]).length(),c=zn.set(s[8],s[9],s[10]).length();r<0&&(a=-a),mi.copy(this);const l=1/a,h=1/o,d=1/c;return mi.elements[0]*=l,mi.elements[1]*=l,mi.elements[2]*=l,mi.elements[4]*=h,mi.elements[5]*=h,mi.elements[6]*=h,mi.elements[8]*=d,mi.elements[9]*=d,mi.elements[10]*=d,e.setFromRotationMatrix(mi),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,s,r,a,o=Di,c=!1){const l=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),p=(i+s)/(i-s);let g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===Di)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Zs)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Di,c=!1){const l=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),p=-(i+s)/(i-s);let g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===Di)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Zs)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};va.prototype.isMatrix4=!0;let ne=va;const zn=new C,mi=new ne,Qp=new C(0,0,0),tm=new C(1,1,1),sn=new C,ar=new C,ni=new C,th=new ne,eh=new ki;class fn{constructor(t=0,e=0,i=0,s=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return th.makeRotationFromQuaternion(t),this.setFromRotationMatrix(th,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return eh.setFromEuler(this),this.setFromQuaternion(eh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class Ju{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let em=0;const ih=new C,Hn=new ki,zi=new ne,or=new C,Ms=new C,im=new C,nm=new ki,nh=new C(1,0,0),sh=new C(0,1,0),rh=new C(0,0,1),ah={type:"added"},sm={type:"removed"},Gn={type:"childadded",child:null},Va={type:"childremoved",child:null};class ve extends mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new C,e=new fn,i=new ki,s=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new zt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ju,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hn.setFromAxisAngle(t,e),this.quaternion.multiply(Hn),this}rotateOnWorldAxis(t,e){return Hn.setFromAxisAngle(t,e),this.quaternion.premultiply(Hn),this}rotateX(t){return this.rotateOnAxis(nh,t)}rotateY(t){return this.rotateOnAxis(sh,t)}rotateZ(t){return this.rotateOnAxis(rh,t)}translateOnAxis(t,e){return ih.copy(t).applyQuaternion(this.quaternion),this.position.add(ih.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nh,t)}translateY(t){return this.translateOnAxis(sh,t)}translateZ(t){return this.translateOnAxis(rh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?or.copy(t):or.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Ms,or,this.up):zi.lookAt(or,Ms,this.up),this.quaternion.setFromRotationMatrix(zi),s&&(zi.extractRotation(s.matrixWorld),Hn.setFromRotationMatrix(zi),this.quaternion.premultiply(Hn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ah),Gn.child=t,this.dispatchEvent(Gn),Gn.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sm),Va.child=t,this.dispatchEvent(Va),Va.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ah),Gn.child=t,this.dispatchEvent(Gn),Gn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,im),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,nm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ve.DEFAULT_UP=new C(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Se extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rm={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Se;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rn={h:0,s:0,l:0},cr={h:0,s:0,l:0};function Xa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Pt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Qt.workingColorSpace){if(t=ol(t,1),e=Kt(e,0,1),i=Kt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Xa(a,r,t+1/3),this.g=Xa(a,r,t),this.b=Xa(a,r,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=ci){function i(r){r!==void 0&&parseFloat(r)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ci){const i=Qu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return Qt.workingToColorSpace($e.copy(this),t),Math.round(Kt($e.r*255,0,255))*65536+Math.round(Kt($e.g*255,0,255))*256+Math.round(Kt($e.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace($e.copy(this),e);const i=$e.r,s=$e.g,r=$e.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=ci){Qt.workingToColorSpace($e.copy(this),t);const e=$e.r,i=$e.g,s=$e.b;return t!==ci?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(rn),this.setHSL(rn.h+t,rn.s+e,rn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(rn),t.getHSL(cr);const i=Vs(rn.h,cr.h,e),s=Vs(rn.s,cr.s,e),r=Vs(rn.l,cr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new Pt;Pt.NAMES=Qu;class ll extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const gi=new C,Hi=new C,qa=new C,Gi=new C,Vn=new C,Wn=new C,oh=new C,Ya=new C,$a=new C,Za=new C,Ka=new be,ja=new be,Ja=new be;class hi{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),gi.subVectors(t,e),s.cross(gi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){gi.subVectors(s,e),Hi.subVectors(i,e),qa.subVectors(t,e);const a=gi.dot(gi),o=gi.dot(Hi),c=gi.dot(qa),l=Hi.dot(Hi),h=Hi.dot(qa),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,Gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Gi.x),c.addScaledVector(a,Gi.y),c.addScaledVector(o,Gi.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return Ka.setScalar(0),ja.setScalar(0),Ja.setScalar(0),Ka.fromBufferAttribute(t,e),ja.fromBufferAttribute(t,i),Ja.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ka,r.x),a.addScaledVector(ja,r.y),a.addScaledVector(Ja,r.z),a}static isFrontFacing(t,e,i,s){return gi.subVectors(i,e),Hi.subVectors(t,e),gi.cross(Hi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),gi.cross(Hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return hi.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return hi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Vn.subVectors(s,i),Wn.subVectors(r,i),Ya.subVectors(t,i);const c=Vn.dot(Ya),l=Wn.dot(Ya);if(c<=0&&l<=0)return e.copy(i);$a.subVectors(t,s);const h=Vn.dot($a),d=Wn.dot($a);if(h>=0&&d<=h)return e.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(Vn,a);Za.subVectors(t,r);const p=Vn.dot(Za),g=Wn.dot(Za);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(Wn,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return oh.subVectors(r,s),o=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(oh,o);const f=1/(m+_+u);return a=_*f,o=u*f,e.copy(i).addScaledVector(Vn,a).addScaledVector(Wn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Un{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(_i.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(_i.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=_i.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_i):_i.fromBufferAttribute(r,a),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lr.copy(i.boundingBox)),lr.applyMatrix4(t.matrixWorld),this.union(lr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),hr.subVectors(this.max,Ss),Xn.subVectors(t.a,Ss),qn.subVectors(t.b,Ss),Yn.subVectors(t.c,Ss),an.subVectors(qn,Xn),on.subVectors(Yn,qn),vn.subVectors(Xn,Yn);let e=[0,-an.z,an.y,0,-on.z,on.y,0,-vn.z,vn.y,an.z,0,-an.x,on.z,0,-on.x,vn.z,0,-vn.x,-an.y,an.x,0,-on.y,on.x,0,-vn.y,vn.x,0];return!Qa(e,Xn,qn,Yn,hr)||(e=[1,0,0,0,1,0,0,0,1],!Qa(e,Xn,qn,Yn,hr))?!1:(ur.crossVectors(an,on),e=[ur.x,ur.y,ur.z],Qa(e,Xn,qn,Yn,hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Vi=[new C,new C,new C,new C,new C,new C,new C,new C],_i=new C,lr=new Un,Xn=new C,qn=new C,Yn=new C,an=new C,on=new C,vn=new C,Ss=new C,hr=new C,ur=new C,xn=new C;function Qa(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){xn.fromArray(n,r);const o=s.x*Math.abs(xn.x)+s.y*Math.abs(xn.y)+s.z*Math.abs(xn.z),c=t.dot(xn),l=e.dot(xn),h=i.dot(xn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Pe=new C,dr=new Ft;let am=0;class Ue extends mn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:am++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Zu,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)dr.fromBufferAttribute(this,e),dr.applyMatrix3(t),this.setXY(e,dr.x,dr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=yi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class td extends Ue{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ed extends Ue{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ae extends Ue{constructor(t,e,i){super(new Float32Array(t),e,i)}}const om=new Un,bs=new C,to=new C;class Fn{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):om.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);const e=bs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(bs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(to.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(to)),this.expandByPoint(bs.copy(t.center).sub(to))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let cm=0;const oi=new ne,eo=new ve,$n=new C,si=new Un,Es=new Un,Be=new C;class ge extends mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ap(t)?ed:td)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,e,i){return oi.makeTranslation(t,e,i),this.applyMatrix4(oi),this}scale(t,e,i){return oi.makeScale(t,e,i),this.applyMatrix4(oi),this}lookAt(t){return eo.lookAt(t),eo.updateMatrix(),this.applyMatrix4(eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($n).negate(),this.translate($n.x,$n.y,$n.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ae(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];si.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const i=this.boundingSphere.center;if(si.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Es.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(si.min,Es.min),si.expandByPoint(Be),Be.addVectors(si.max,Es.max),si.expandByPoint(Be)):(si.expandByPoint(Es.min),si.expandByPoint(Es.max))}si.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Be));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Be.fromBufferAttribute(o,l),c&&($n.fromBufferAttribute(t,l),Be.add($n)),s=Math.max(s,i.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ue(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let x=0;x<i.count;x++)o[x]=new C,c[x]=new C;const l=new C,h=new C,d=new C,u=new Ft,p=new Ft,g=new Ft,_=new C,m=new C;function f(x,E,P){l.fromBufferAttribute(i,x),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,P),u.fromBufferAttribute(r,x),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,P),h.sub(l),d.sub(l),p.sub(u),g.sub(u);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),o[x].add(_),o[E].add(_),o[P].add(_),c[x].add(m),c[E].add(m),c[P].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,E=M.length;x<E;++x){const P=M[x],L=P.start,F=P.count;for(let O=L,I=L+F;O<I;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const T=new C,y=new C,w=new C,b=new C;function A(x){w.fromBufferAttribute(s,x),b.copy(w);const E=o[x];T.copy(E),T.sub(w.multiplyScalar(w.dot(E))).normalize(),y.crossVectors(b,E);const L=y.dot(c[x])<0?-1:1;a.setXYZW(x,T.x,T.y,T.z,L)}for(let x=0,E=M.length;x<E;++x){const P=M[x],L=P.start,F=P.count;for(let O=L,I=L+F;O<I;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const s=new C,r=new C,a=new C,o=new C,c=new C,l=new C,h=new C,d=new C;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*h;for(let f=0;f<h;f++)u[g++]=l[p++]}return new Ue(u,h,d)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ge,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,i);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=t(u,i);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Zu,this.updateRanges=[],this.version=0,this.uuid=Ki()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const Ke=new C;class ha{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=yi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){la("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ha(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){la("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const io=new C,hm=new C,um=new zt;class ln{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=io.subVectors(i,e).cross(hm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(io),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||um.getNormalMatrix(t),s=this.coplanarPoint(io).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let dm=0;class gn extends mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=Cn,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Iu,this.blendDst=Du,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ka,this.stencilZFail=ka,this.stencilZPass=ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Pt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ln().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ft().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class hl extends gn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Zn;const ws=new C,Kn=new C,jn=new C,Jn=new Ft,Ts=new Ft,id=new ne,fr=new C,As=new C,pr=new C,ch=new Ft,no=new Ft,lh=new Ft;class ul extends ve{constructor(t=new hl){if(super(),this.isSprite=!0,this.type="Sprite",Zn===void 0){Zn=new ge;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new lm(e,5);Zn.setIndex([0,1,2,0,2,3]),Zn.setAttribute("position",new ha(i,3,0,!1)),Zn.setAttribute("uv",new ha(i,2,3,!1))}this.geometry=Zn,this.material=t,this.center=new Ft(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ie('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Kn.setFromMatrixScale(this.matrixWorld),id.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),jn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Kn.multiplyScalar(-jn.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;mr(fr.set(-.5,-.5,0),jn,a,Kn,s,r),mr(As.set(.5,-.5,0),jn,a,Kn,s,r),mr(pr.set(.5,.5,0),jn,a,Kn,s,r),ch.set(0,0),no.set(1,0),lh.set(1,1);let o=t.ray.intersectTriangle(fr,As,pr,!1,ws);if(o===null&&(mr(As.set(-.5,.5,0),jn,a,Kn,s,r),no.set(0,1),o=t.ray.intersectTriangle(fr,pr,As,!1,ws),o===null))return;const c=t.ray.origin.distanceTo(ws);c<t.near||c>t.far||e.push({distance:c,point:ws.clone(),uv:hi.getInterpolation(ws,fr,As,pr,ch,no,lh,new Ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function mr(n,t,e,i,s,r){Jn.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Ts.x=r*Jn.x-s*Jn.y,Ts.y=s*Jn.x+r*Jn.y):Ts.copy(Jn),n.copy(t),n.x+=Ts.x,n.y+=Ts.y,n.applyMatrix4(id)}const Wi=new C,so=new C,gr=new C,_r=new C;class dl{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wi.copy(this.origin).addScaledVector(this.direction,e),Wi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){so.copy(t).add(e).multiplyScalar(.5),gr.copy(e).sub(t).normalize(),_r.copy(this.origin).sub(so);const r=t.distanceTo(e)*.5,a=-this.direction.dot(gr),o=_r.dot(this.direction),c=-_r.dot(gr),l=_r.lengthSq(),h=Math.abs(1-a*a);let d,u,p,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(so).addScaledVector(gr,u),p}intersectSphere(t,e){if(t.radius<0)return null;Wi.subVectors(t.center,this.origin);const i=Wi.dot(this.direction),s=Wi.dot(Wi)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Wi)!==null}intersectTriangle(t,e,i,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,p=t.z-a.z,g=e.x-a.x,_=e.y-a.y,m=e.z-a.z,f=i.x-a.x,M=i.y-a.y,T=i.z-a.z,y=Math.abs(c),w=Math.abs(l),b=Math.abs(h);let A,x,E,P,L,F,O,I,V,z,Y,it;if(y>=w&&y>=b?(E=c,F=d,V=g,it=f,c>=0?(A=l,x=h,P=u,L=p,O=_,I=m,z=M,Y=T):(A=h,x=l,P=p,L=u,O=m,I=_,z=T,Y=M)):w>=b?(E=l,F=u,V=_,it=M,l>=0?(A=h,x=c,P=p,L=d,O=m,I=g,z=T,Y=f):(A=c,x=h,P=d,L=p,O=g,I=m,z=f,Y=T)):(E=h,F=p,V=m,it=T,h>=0?(A=c,x=l,P=d,L=u,O=g,I=_,z=f,Y=M):(A=l,x=c,P=u,L=d,O=_,I=g,z=M,Y=f)),E===0)return null;const q=A/E,Q=x/E,et=1/E,Rt=P-q*F,yt=L-Q*F,se=O-q*V,Jt=I-Q*V,te=z-q*it,$=Y-Q*it,tt=te*Jt-$*se,vt=Rt*$-yt*te,Ot=se*yt-Jt*Rt;if(s){if(tt<0||vt<0||Ot<0)return null}else if((tt<0||vt<0||Ot<0)&&(tt>0||vt>0||Ot>0))return null;const gt=tt+vt+Ot;if(gt===0)return null;const Gt=et*(tt*F+vt*V+Ot*it);return(gt>0?Gt<0:Gt>0)?null:this.at(Gt/gt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt extends gn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hh=new ne,yn=new dl,vr=new Fn,uh=new C,xr=new C,yr=new C,Mr=new C,ro=new C,Sr=new C,dh=new C,br=new C;class Lt extends ve{constructor(t=new ge,e=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Sr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(ro.fromBufferAttribute(d,t),a?Sr.addScaledVector(ro,h):Sr.addScaledVector(ro.sub(e),h))}e.add(Sr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere),vr.applyMatrix4(r),yn.copy(t.ray).recast(t.near),!(vr.containsPoint(yn.origin)===!1&&(yn.intersectSphere(vr,uh)===null||yn.origin.distanceToSquared(uh)>(t.far-t.near)**2))&&(hh.copy(r).invert(),yn.copy(t.ray).applyMatrix4(hh),!(i.boundingBox!==null&&yn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,yn)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=a[m.materialIndex],M=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,w=T;y<w;y+=3){const b=o.getX(y),A=o.getX(y+1),x=o.getX(y+2);s=Er(this,f,t,i,l,h,d,b,A,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=o.getX(m),T=o.getX(m+1),y=o.getX(m+2);s=Er(this,a,t,i,l,h,d,M,T,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=a[m.materialIndex],M=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,w=T;y<w;y+=3){const b=y,A=y+1,x=y+2;s=Er(this,f,t,i,l,h,d,b,A,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=m,T=m+1,y=m+2;s=Er(this,a,t,i,l,h,d,M,T,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function fm(n,t,e,i,s,r,a,o){let c;if(t.side===ii?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===Ln,o),c===null)return null;br.copy(o),br.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(br);return l<e.near||l>e.far?null:{distance:l,point:br.clone(),object:n}}function Er(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,xr),n.getVertexPosition(c,yr),n.getVertexPosition(l,Mr);const h=fm(n,t,e,i,xr,yr,Mr,dh);if(h){const d=new C;hi.getBarycoord(dh,xr,yr,Mr,d),s&&(h.uv=hi.getInterpolatedAttribute(s,o,c,l,d,new Ft)),r&&(h.uv1=hi.getInterpolatedAttribute(r,o,c,l,d,new Ft)),a&&(h.normal=hi.getInterpolatedAttribute(a,o,c,l,d,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new C,materialIndex:0};hi.getNormal(xr,yr,Mr,u.normal),h.face=u,h.barycoord=d}return h}class fl extends Ve{constructor(t=null,e=1,i=1,s,r,a,o,c,l=He,h=He,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fh extends Ue{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Qn=new ne,ph=new ne,wr=[],mh=new Un,pm=new ne,Rs=new Lt,Cs=new Fn;class ds extends Lt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,pm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Un),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Qn),mh.copy(t.boundingBox).applyMatrix4(Qn),this.boundingBox.union(mh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Qn),Cs.copy(t.boundingSphere).applyMatrix4(Qn),this.boundingSphere.union(Cs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Rs.geometry=this.geometry,Rs.material=this.material,Rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cs.copy(this.boundingSphere),Cs.applyMatrix4(i),t.ray.intersectsSphere(Cs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qn),ph.multiplyMatrices(i,Qn),Rs.matrixWorld=ph,Rs.raycast(t,wr);for(let a=0,o=wr.length;a<o;a++){const c=wr[a];c.instanceId=r,c.object=this,e.push(c)}wr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new fh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new fl(new Float32Array(s*this.count),s,this.count,el,bi));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Mn=new Fn,mm=new Ft(.5,.5),Tr=new C;class pl{constructor(t=new ln,e=new ln,i=new ln,s=new ln,r=new ln,a=new ln){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Di,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],p=r[7],g=r[8],_=r[9],m=r[10],f=r[11],M=r[12],T=r[13],y=r[14],w=r[15];if(s[0].setComponents(l-a,p-h,f-g,w-M).normalize(),s[1].setComponents(l+a,p+h,f+g,w+M).normalize(),s[2].setComponents(l+o,p+d,f+_,w+T).normalize(),s[3].setComponents(l-o,p-d,f-_,w-T).normalize(),i)s[4].setComponents(c,u,m,y).normalize(),s[5].setComponents(l-c,p-u,f-m,w-y).normalize();else if(s[4].setComponents(l-c,p-u,f-m,w-y).normalize(),e===Di)s[5].setComponents(l+c,p+u,f+m,w+y).normalize();else if(e===Zs)s[5].setComponents(c,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mn)}intersectsSprite(t){Mn.center.set(0,0,0);const e=mm.distanceTo(t.center);return Mn.radius=.7071067811865476+e,Mn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mn)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Tr.x=s.normal.x>0?t.max.x:t.min.x,Tr.y=s.normal.y>0?t.max.y:t.min.y,Tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nd extends gn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ua=new C,da=new C,gh=new ne,Ps=new dl,Ar=new Fn,ao=new C,_h=new C;class Tc extends ve{constructor(t=new ge,e=new nd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)ua.fromBufferAttribute(e,s-1),da.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ua.distanceTo(da);t.setAttribute("lineDistance",new ae(i,1))}else Ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ar.copy(i.boundingSphere),Ar.applyMatrix4(s),Ar.radius+=r,t.ray.intersectsSphere(Ar)===!1)return;gh.copy(s).invert(),Ps.copy(t.ray).applyMatrix4(gh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const f=h.getX(_),M=h.getX(_+1),T=Rr(this,t,Ps,c,f,M,_);T&&e.push(T)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=Rr(this,t,Ps,c,_,m,g-1);f&&e.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const f=Rr(this,t,Ps,c,_,_+1,_);f&&e.push(f)}if(this.isLineLoop){const _=Rr(this,t,Ps,c,g-1,p,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Rr(n,t,e,i,s,r,a){const o=n.geometry.attributes.position;if(ua.fromBufferAttribute(o,s),da.fromBufferAttribute(o,r),e.distanceSqToSegment(ua,da,ao,_h)>i)return;ao.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ao);if(!(l<t.near||l>t.far))return{distance:l,point:_h.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const vh=new C,xh=new C;class gm extends Tc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)vh.fromBufferAttribute(e,s),xh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+vh.distanceTo(xh);t.setAttribute("lineDistance",new ae(i,1))}else Ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sd extends gn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const yh=new ne,Ac=new dl,Cr=new Fn,Pr=new C;class js extends ve{constructor(t=new ge,e=new sd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cr.copy(i.boundingSphere),Cr.applyMatrix4(s),Cr.radius+=r,t.ray.intersectsSphere(Cr)===!1)return;yh.copy(s).invert(),Ac.copy(t.ray).applyMatrix4(yh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,d=i.attributes.position;if(l!==null){const u=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=u,_=p;g<_;g++){const m=l.getX(g);Pr.fromBufferAttribute(d,m),Mh(Pr,m,c,s,t,e,this)}}else{const u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=u,_=p;g<_;g++)Pr.fromBufferAttribute(d,g),Mh(Pr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Mh(n,t,e,i,s,r,a){const o=Ac.distanceSqToPoint(n);if(o<e){const c=new C;Ac.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class rd extends Ve{constructor(t=[],e=In,i,s,r,a,o,c,l,h){super(t,e,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ad extends Ve{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Js extends Ve{constructor(t,e,i=Fi,s,r,a,o=He,c=He,l,h=Ji,d=1){if(h!==Ji&&h!==Rn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class _m extends Js{constructor(t,e=Fi,i=In,s,r,a=He,o=He,c,l=Ji){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class od extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ee extends ge{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2));function g(_,m,f,M,T,y,w,b,A,x,E){const P=y/A,L=w/x,F=y/2,O=w/2,I=b/2,V=A+1,z=x+1;let Y=0,it=0;const q=new C;for(let Q=0;Q<z;Q++){const et=Q*L-O;for(let Rt=0;Rt<V;Rt++){const yt=Rt*P-F;q[_]=yt*M,q[m]=et*T,q[f]=I,l.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[f]=b>0?1:-1,h.push(q.x,q.y,q.z),d.push(Rt/A),d.push(1-Q/x),Y+=1}}for(let Q=0;Q<x;Q++)for(let et=0;et<A;et++){const Rt=u+et+V*Q,yt=u+et+V*(Q+1),se=u+(et+1)+V*(Q+1),Jt=u+(et+1)+V*Q;c.push(Rt,yt,Jt),c.push(yt,se,Jt),it+=6}o.addGroup(p,it,E),p+=it,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ml extends ge{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new C,h=new Ft;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const p=i+d/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(o,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ml(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Nn extends ge{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],p=[];let g=0;const _=[],m=i/2;let f=0;M(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(p,2));function M(){const y=new C,w=new C;let b=0;const A=(e-t)/i;for(let x=0;x<=r;x++){const E=[],P=x/r,L=P*(e-t)+t;for(let F=0;F<=s;F++){const O=F/s,I=O*c+o,V=Math.sin(I),z=Math.cos(I);w.x=L*V,w.y=-P*i+m,w.z=L*z,d.push(w.x,w.y,w.z),y.set(V,A,z).normalize(),u.push(y.x,y.y,y.z),p.push(O,1-P),E.push(g++)}_.push(E)}for(let x=0;x<s;x++)for(let E=0;E<r;E++){const P=_[E][x],L=_[E+1][x],F=_[E+1][x+1],O=_[E][x+1];(t>0||E!==0)&&(h.push(P,L,O),b+=3),(e>0||E!==r-1)&&(h.push(L,F,O),b+=3)}l.addGroup(f,b,0),f+=b}function T(y){const w=g,b=new Ft,A=new C;let x=0;const E=y===!0?t:e,P=y===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*P,0),u.push(0,P,0),p.push(.5,.5),g++;const L=g;for(let F=0;F<=s;F++){const I=F/s*c+o,V=Math.cos(I),z=Math.sin(I);A.x=E*z,A.y=m*P,A.z=E*V,d.push(A.x,A.y,A.z),u.push(0,P,0),b.x=V*.5+.5,b.y=z*.5*P+.5,p.push(b.x,b.y),g++}for(let F=0;F<s;F++){const O=w+F,I=L+F;y===!0?h.push(I,I+1,O):h.push(I+1,I,O),x+=3}l.addGroup(f,x,y===!0?1:2),f+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ba extends ge{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),l(i),h(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const T=new C,y=new C,w=new C;for(let b=0;b<e.length;b+=3)p(e[b+0],T),p(e[b+1],y),p(e[b+2],w),c(T,y,w,M)}function c(M,T,y,w){const b=w+1,A=[];for(let x=0;x<=b;x++){A[x]=[];const E=M.clone().lerp(y,x/b),P=T.clone().lerp(y,x/b),L=b-x;for(let F=0;F<=L;F++)F===0&&x===b?A[x][F]=E:A[x][F]=E.clone().lerp(P,F/L)}for(let x=0;x<b;x++)for(let E=0;E<2*(b-x)-1;E++){const P=Math.floor(E/2);E%2===0?(u(A[x][P+1]),u(A[x+1][P]),u(A[x][P])):(u(A[x][P+1]),u(A[x+1][P+1]),u(A[x+1][P]))}}function l(M){const T=new C;for(let y=0;y<r.length;y+=3)T.x=r[y+0],T.y=r[y+1],T.z=r[y+2],T.normalize().multiplyScalar(M),r[y+0]=T.x,r[y+1]=T.y,r[y+2]=T.z}function h(){const M=new C;for(let T=0;T<r.length;T+=3){M.x=r[T+0],M.y=r[T+1],M.z=r[T+2];const y=m(M)/2/Math.PI+.5,w=f(M)/Math.PI+.5;a.push(y,1-w)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){const T=a[M+0],y=a[M+2],w=a[M+4],b=Math.max(T,y,w),A=Math.min(T,y,w);b>.9&&A<.1&&(T<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),w<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function p(M,T){const y=M*3;T.x=t[y+0],T.y=t[y+1],T.z=t[y+2]}function g(){const M=new C,T=new C,y=new C,w=new C,b=new Ft,A=new Ft,x=new Ft;for(let E=0,P=0;E<r.length;E+=9,P+=6){M.set(r[E+0],r[E+1],r[E+2]),T.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),b.set(a[P+0],a[P+1]),A.set(a[P+2],a[P+3]),x.set(a[P+4],a[P+5]),w.copy(M).add(T).add(y).divideScalar(3);const L=m(w);_(b,P+0,M,L),_(A,P+2,T,L),_(x,P+4,y,L)}}function _(M,T,y,w){w<0&&M.x===1&&(a[T]=M.x-1),y.x===0&&y.z===0&&(a[T]=w/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ba(t.vertices,t.indices,t.radius,t.detail)}}class Ea extends ba{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ea(t.radius,t.detail)}}class gs extends ba{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new gs(t.radius,t.detail)}}class Qi extends ge{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,d=t/o,u=e/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const M=f*u-a;for(let T=0;T<l;T++){const y=T*d-r;g.push(y,-M,0),_.push(0,0,1),m.push(T/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<o;M++){const T=M+l*f,y=M+l*(f+1),w=M+1+l*(f+1),b=M+1+l*f;p.push(T,y,b),p.push(y,w,b)}this.setIndex(p),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qi(t.width,t.height,t.widthSegments,t.heightSegments)}}class er extends ge{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let d=t;const u=(e-t)/s,p=new C,g=new Ft;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const f=r+m/i*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<s;_++){const m=_*(i+1);for(let f=0;f<i;f++){const M=f+m,T=M,y=M+i+1,w=M+i+2,b=M+1;o.push(T,y,b),o.push(y,w,b)}}this.setIndex(o),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class wa extends ge{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],h=[],d=[],u=new C,p=new C,g=new C;for(let _=0;_<=i;_++){const m=a+_/i*o;for(let f=0;f<=s;f++){const M=f/s*r;p.x=(t+e*Math.cos(m))*Math.cos(M),p.y=(t+e*Math.cos(m))*Math.sin(M),p.z=e*Math.sin(m),l.push(p.x,p.y,p.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),g.subVectors(p,u).normalize(),h.push(g.x,g.y,g.z),d.push(f/s),d.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=s;m++){const f=(s+1)*_+m-1,M=(s+1)*(_-1)+m-1,T=(s+1)*(_-1)+m,y=(s+1)*_+m;c.push(f,M,y),c.push(M,T,y)}this.setIndex(c),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wa(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function _s(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(Sh(s))s.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Sh(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function je(n){const t={};for(let e=0;e<n.length;e++){const i=_s(n[e]);for(const s in i)t[s]=i[s]}return t}function Sh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function vm(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function cd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const xm={clone:_s,merge:je};var ym=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class We extends gn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ym,this.fragmentShader=Mm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=vm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Pt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ft().fromArray(s.value);break;case"v3":this.uniforms[i].value=new C().fromArray(s.value);break;case"v4":this.uniforms[i].value=new be().fromArray(s.value);break;case"m3":this.uniforms[i].value=new zt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ne().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Sm extends We{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fs extends gn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wc,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bm extends gn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Em extends gn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ld extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class hd extends ld{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const oo=new ne,bh=new C,Eh=new C;class wm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pl,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;bh.setFromMatrixPosition(t.matrixWorld),e.position.copy(bh),Eh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Eh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){oo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(oo,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Zs||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(oo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Lr=new C,Ir=new ki,Ai=new C;class ud extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Lr,Ir,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lr,Ir,Ai.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Lr,Ir,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lr,Ir,Ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const cn=new C,wh=new Ft,Th=new Ft;class ti extends ud{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(cn.x,cn.y).multiplyScalar(-t/cn.z),cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cn.x,cn.y).multiplyScalar(-t/cn.z)}getViewSize(t,e){return this.getViewBounds(t,wh,Th),e.subVectors(Th,wh)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Gs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Ta extends ud{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Tm extends wm{constructor(){super(new Ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class IM extends ld{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new Tm}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const ts=-90,es=1;class Am extends ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ti(ts,es,t,e);s.layers=this.layers,this.add(s);const r=new ti(ts,es,t,e);r.layers=this.layers,this.add(r);const a=new ti(ts,es,t,e);a.layers=this.layers,this.add(a);const o=new ti(ts,es,t,e);o.layers=this.layers,this.add(o);const c=new ti(ts,es,t,e);c.layers=this.layers,this.add(c);const l=new ti(ts,es,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Di)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Zs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Rm extends ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class DM{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Pl=class Pl{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Pl.prototype.isMatrix2=!0;let Ah=Pl;class NM extends mn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Rh(n,t,e,i){const s=Cm(i);switch(e){case Yu:return n*t;case el:return n*t/s.components*s.byteLength;case il:return n*t/s.components*s.byteLength;case Dn:return n*t*2/s.components*s.byteLength;case nl:return n*t*2/s.components*s.byteLength;case $u:return n*t*3/s.components*s.byteLength;case Ei:return n*t*4/s.components*s.byteLength;case sl:return n*t*4/s.components*s.byteLength;case Vr:case Wr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Xr:case qr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ko:case Jo:return Math.max(n,16)*Math.max(t,8)/4;case Zo:case jo:return Math.max(n,8)*Math.max(t,8)/2;case Qo:case tc:case ic:case nc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ec:case sa:case sc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case rc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ac:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case oc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case cc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case lc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case hc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case uc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case dc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case fc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case pc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case mc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case gc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case _c:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case vc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case xc:case yc:case Mc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Sc:case bc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ra:case Ec:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Cm(n){switch(n){case ri:case Vu:return{byteLength:1,components:1};case Ys:case Wu:case Oi:return{byteLength:2,components:1};case Qc:case tl:return{byteLength:2,components:4};case Fi:case Jc:case bi:return{byteLength:4,components:1};case Xu:case qu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jc}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jc);function dd(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Pm(n){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const h=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Lm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Im=`#ifdef USE_ALPHAHASH
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
#endif`,Dm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Um=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Om=`#ifdef USE_AOMAP
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
#endif`,km=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bm=`#ifdef USE_BATCHING
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
#endif`,zm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wm=`#ifdef USE_IRIDESCENCE
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
#endif`,Xm=`#ifdef USE_BUMPMAP
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
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,t0=`#define PI 3.141592653589793
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
} // validated`,e0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,i0=`vec3 transformedNormal = objectNormal;
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
#endif`,n0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o0="gl_FragColor = linearToOutputTexel( gl_FragColor );",c0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l0=`#ifdef USE_ENVMAP
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
#endif`,h0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,p0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v0=`#ifdef USE_GRADIENTMAP
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
}`,x0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,b0=`#ifdef USE_ENVMAP
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
#endif`,E0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R0=`PhysicalMaterial material;
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
#endif`,C0=`uniform sampler2D dfgLUT;
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
}`,P0=`
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
#endif`,L0=`#if defined( RE_IndirectDiffuse )
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
#endif`,I0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,N0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,H0=`#if defined( USE_POINTS_UV )
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
#endif`,G0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,q0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y0=`#ifdef USE_MORPHTARGETS
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
#endif`,$0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,K0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,j0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tg=`#ifdef USE_NORMALMAP
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
#endif`,eg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ig=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ag=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ug=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gg=`float getShadowMask() {
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
}`,_g=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vg=`#ifdef USE_SKINNING
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
#endif`,xg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yg=`#ifdef USE_SKINNING
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
#endif`,Mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wg=`#ifdef USE_TRANSMISSION
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
#endif`,Tg=`#ifdef USE_TRANSMISSION
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
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ig=`uniform sampler2D t2D;
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
}`,Dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`#include <common>
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
}`,kg=`#if DEPTH_PACKING == 3200
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
}`,Bg=`#define DISTANCE
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
}`,zg=`#define DISTANCE
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
}`,Hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`uniform float scale;
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
}`,Wg=`uniform vec3 diffuse;
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
}`,Xg=`#include <common>
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
}`,qg=`uniform vec3 diffuse;
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
}`,Yg=`#define LAMBERT
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
}`,$g=`#define LAMBERT
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
}`,Zg=`#define MATCAP
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
}`,Kg=`#define MATCAP
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
}`,jg=`#define NORMAL
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
}`,Jg=`#define NORMAL
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
}`,Qg=`#define PHONG
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
}`,t_=`#define PHONG
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
}`,e_=`#define STANDARD
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
}`,i_=`#define STANDARD
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
}`,n_=`#define TOON
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
}`,s_=`#define TOON
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
}`,r_=`uniform float size;
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
}`,a_=`uniform vec3 diffuse;
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
}`,o_=`#include <common>
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
}`,c_=`uniform vec3 color;
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
}`,l_=`uniform float rotation;
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
}`,h_=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:Lm,alphahash_pars_fragment:Im,alphamap_fragment:Dm,alphamap_pars_fragment:Nm,alphatest_fragment:Um,alphatest_pars_fragment:Fm,aomap_fragment:Om,aomap_pars_fragment:km,batching_pars_vertex:Bm,batching_vertex:zm,begin_vertex:Hm,beginnormal_vertex:Gm,bsdfs:Vm,iridescence_fragment:Wm,bumpmap_pars_fragment:Xm,clipping_planes_fragment:qm,clipping_planes_pars_fragment:Ym,clipping_planes_pars_vertex:$m,clipping_planes_vertex:Zm,color_fragment:Km,color_pars_fragment:jm,color_pars_vertex:Jm,color_vertex:Qm,common:t0,cube_uv_reflection_fragment:e0,defaultnormal_vertex:i0,displacementmap_pars_vertex:n0,displacementmap_vertex:s0,emissivemap_fragment:r0,emissivemap_pars_fragment:a0,colorspace_fragment:o0,colorspace_pars_fragment:c0,envmap_fragment:l0,envmap_common_pars_fragment:h0,envmap_pars_fragment:u0,envmap_pars_vertex:d0,envmap_physical_pars_fragment:b0,envmap_vertex:f0,fog_vertex:p0,fog_pars_vertex:m0,fog_fragment:g0,fog_pars_fragment:_0,gradientmap_pars_fragment:v0,lightmap_pars_fragment:x0,lights_lambert_fragment:y0,lights_lambert_pars_fragment:M0,lights_pars_begin:S0,lights_toon_fragment:E0,lights_toon_pars_fragment:w0,lights_phong_fragment:T0,lights_phong_pars_fragment:A0,lights_physical_fragment:R0,lights_physical_pars_fragment:C0,lights_fragment_begin:P0,lights_fragment_maps:L0,lights_fragment_end:I0,lightprobes_pars_fragment:D0,logdepthbuf_fragment:N0,logdepthbuf_pars_fragment:U0,logdepthbuf_pars_vertex:F0,logdepthbuf_vertex:O0,map_fragment:k0,map_pars_fragment:B0,map_particle_fragment:z0,map_particle_pars_fragment:H0,metalnessmap_fragment:G0,metalnessmap_pars_fragment:V0,morphinstance_vertex:W0,morphcolor_vertex:X0,morphnormal_vertex:q0,morphtarget_pars_vertex:Y0,morphtarget_vertex:$0,normal_fragment_begin:Z0,normal_fragment_maps:K0,normal_pars_fragment:j0,normal_pars_vertex:J0,normal_vertex:Q0,normalmap_pars_fragment:tg,clearcoat_normal_fragment_begin:eg,clearcoat_normal_fragment_maps:ig,clearcoat_pars_fragment:ng,iridescence_pars_fragment:sg,opaque_fragment:rg,packing:ag,premultiplied_alpha_fragment:og,project_vertex:cg,dithering_fragment:lg,dithering_pars_fragment:hg,roughnessmap_fragment:ug,roughnessmap_pars_fragment:dg,shadowmap_pars_fragment:fg,shadowmap_pars_vertex:pg,shadowmap_vertex:mg,shadowmask_pars_fragment:gg,skinbase_vertex:_g,skinning_pars_vertex:vg,skinning_vertex:xg,skinnormal_vertex:yg,specularmap_fragment:Mg,specularmap_pars_fragment:Sg,tonemapping_fragment:bg,tonemapping_pars_fragment:Eg,transmission_fragment:wg,transmission_pars_fragment:Tg,uv_pars_fragment:Ag,uv_pars_vertex:Rg,uv_vertex:Cg,worldpos_vertex:Pg,background_vert:Lg,background_frag:Ig,backgroundCube_vert:Dg,backgroundCube_frag:Ng,cube_vert:Ug,cube_frag:Fg,depth_vert:Og,depth_frag:kg,distance_vert:Bg,distance_frag:zg,equirect_vert:Hg,equirect_frag:Gg,linedashed_vert:Vg,linedashed_frag:Wg,meshbasic_vert:Xg,meshbasic_frag:qg,meshlambert_vert:Yg,meshlambert_frag:$g,meshmatcap_vert:Zg,meshmatcap_frag:Kg,meshnormal_vert:jg,meshnormal_frag:Jg,meshphong_vert:Qg,meshphong_frag:t_,meshphysical_vert:e_,meshphysical_frag:i_,meshtoon_vert:n_,meshtoon_frag:s_,points_vert:r_,points_frag:a_,shadow_vert:o_,shadow_frag:c_,sprite_vert:l_,sprite_frag:h_},dt={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Li={basic:{uniforms:je([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:je([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:je([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:je([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:je([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:je([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:je([dt.points,dt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:je([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:je([dt.common,dt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:je([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:je([dt.sprite,dt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distance:{uniforms:je([dt.common,dt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distance_vert,fragmentShader:Wt.distance_frag},shadow:{uniforms:je([dt.lights,dt.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Li.physical={uniforms:je([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Dr={r:0,b:0,g:0},u_=new ne,fd=new zt;fd.set(-1,0,0,0,1,0,0,0,1);function d_(n,t,e,i,s,r){const a=new Pt(0);let o=s===!0?0:1,c,l,h=null,d=0,u=null;function p(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){const y=M.backgroundBlurriness>0;T=t.get(T,y)}return T}function g(M){let T=!1;const y=p(M);y===null?m(a,o):y&&y.isColor&&(m(y,1),T=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(M,T){const y=p(T);y&&(y.isCubeTexture||y.mapping===Sa)?(l===void 0&&(l=new Lt(new Ee(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:_s(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(u_.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(fd),l.material.toneMapped=Qt.getTransfer(y.colorSpace)!==he,(h!==y||d!==y.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Lt(new Qi(2,2),new We({name:"BackgroundMaterial",uniforms:_s(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(y.colorSpace)!==he,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,T){M.getRGB(Dr,cd(n)),e.buffers.color.setClear(Dr.r,Dr.g,Dr.b,T,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:_,dispose:f}}function f_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,a=!1;function o(L,F,O,I,V){let z=!1;const Y=d(L,I,O,F);r!==Y&&(r=Y,l(r.object)),z=p(L,I,O,V),z&&g(L,I,O,V),V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,y(L,F,O,I),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return n.createVertexArray()}function l(L){return n.bindVertexArray(L)}function h(L){return n.deleteVertexArray(L)}function d(L,F,O,I){const V=I.wireframe===!0;let z=i[F.id];z===void 0&&(z={},i[F.id]=z);const Y=L.isInstancedMesh===!0?L.id:0;let it=z[Y];it===void 0&&(it={},z[Y]=it);let q=it[O.id];q===void 0&&(q={},it[O.id]=q);let Q=q[V];return Q===void 0&&(Q=u(c()),q[V]=Q),Q}function u(L){const F=[],O=[],I=[];for(let V=0;V<e;V++)F[V]=0,O[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:O,attributeDivisors:I,object:L,attributes:{},index:null}}function p(L,F,O,I){const V=r.attributes,z=F.attributes;let Y=0;const it=O.getAttributes();for(const q in it)if(it[q].location>=0){const et=V[q];let Rt=z[q];if(Rt===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(Rt=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(Rt=L.instanceColor)),et===void 0||et.attribute!==Rt||Rt&&et.data!==Rt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==I}function g(L,F,O,I){const V={},z=F.attributes;let Y=0;const it=O.getAttributes();for(const q in it)if(it[q].location>=0){let et=z[q];et===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(et=L.instanceColor));const Rt={};Rt.attribute=et,et&&et.data&&(Rt.data=et.data),V[q]=Rt,Y++}r.attributes=V,r.attributesNum=Y,r.index=I}function _(){const L=r.newAttributes;for(let F=0,O=L.length;F<O;F++)L[F]=0}function m(L){f(L,0)}function f(L,F){const O=r.newAttributes,I=r.enabledAttributes,V=r.attributeDivisors;O[L]=1,I[L]===0&&(n.enableVertexAttribArray(L),I[L]=1),V[L]!==F&&(n.vertexAttribDivisor(L,F),V[L]=F)}function M(){const L=r.newAttributes,F=r.enabledAttributes;for(let O=0,I=F.length;O<I;O++)F[O]!==L[O]&&(n.disableVertexAttribArray(O),F[O]=0)}function T(L,F,O,I,V,z,Y){Y===!0?n.vertexAttribIPointer(L,F,O,V,z):n.vertexAttribPointer(L,F,O,I,V,z)}function y(L,F,O,I){_();const V=I.attributes,z=O.getAttributes(),Y=F.defaultAttributeValues;for(const it in z){const q=z[it];if(q.location>=0){let Q=V[it];if(Q===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){const et=Q.normalized,Rt=Q.itemSize,yt=t.get(Q);if(yt===void 0)continue;const se=yt.buffer,Jt=yt.type,te=yt.bytesPerElement,$=Jt===n.INT||Jt===n.UNSIGNED_INT||Q.gpuType===Jc;if(Q.isInterleavedBufferAttribute){const tt=Q.data,vt=tt.stride,Ot=Q.offset;if(tt.isInstancedInterleavedBuffer){for(let gt=0;gt<q.locationSize;gt++)f(q.location+gt,tt.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let gt=0;gt<q.locationSize;gt++)m(q.location+gt);n.bindBuffer(n.ARRAY_BUFFER,se);for(let gt=0;gt<q.locationSize;gt++)T(q.location+gt,Rt/q.locationSize,Jt,et,vt*te,(Ot+Rt/q.locationSize*gt)*te,$)}else{if(Q.isInstancedBufferAttribute){for(let tt=0;tt<q.locationSize;tt++)f(q.location+tt,Q.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let tt=0;tt<q.locationSize;tt++)m(q.location+tt);n.bindBuffer(n.ARRAY_BUFFER,se);for(let tt=0;tt<q.locationSize;tt++)T(q.location+tt,Rt/q.locationSize,Jt,et,Rt*te,Rt/q.locationSize*tt*te,$)}}else if(Y!==void 0){const et=Y[it];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(q.location,et);break;case 3:n.vertexAttrib3fv(q.location,et);break;case 4:n.vertexAttrib4fv(q.location,et);break;default:n.vertexAttrib1fv(q.location,et)}}}}M()}function w(){E();for(const L in i){const F=i[L];for(const O in F){const I=F[O];for(const V in I){const z=I[V];for(const Y in z)h(z[Y].object),delete z[Y];delete I[V]}}delete i[L]}}function b(L){if(i[L.id]===void 0)return;const F=i[L.id];for(const O in F){const I=F[O];for(const V in I){const z=I[V];for(const Y in z)h(z[Y].object),delete z[Y];delete I[V]}}delete i[L.id]}function A(L){for(const F in i){const O=i[F];for(const I in O){const V=O[I];if(V[L.id]===void 0)continue;const z=V[L.id];for(const Y in z)h(z[Y].object),delete z[Y];delete V[L.id]}}}function x(L){for(const F in i){const O=i[F],I=L.isInstancedMesh===!0?L.id:0,V=O[I];if(V!==void 0){for(const z in V){const Y=V[z];for(const it in Y)h(Y[it].object),delete Y[it];delete V[z]}delete O[I],Object.keys(O).length===0&&delete i[F]}}}function E(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function p_(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),e.update(l,i,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let p=0;p<h;p++)u+=l[p];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function m_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Ei&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const x=A===Oi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==ri&&A!==bi&&!x&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Ut("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:y,maxSamples:w,samples:b}}function g_(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new ln,o=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:i,T=M*4;let y=f.clippingState||null;c.value=y,y=h(g,u,T,p);for(let w=0;w!==T;++w)y[w]=e[w];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,y=p;T!==_;++T,y+=4)a.copy(d[T]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}const os=4,__=6,v_=20,x_=256,Ls=new Ta,Ch=new Pt;let co=null,lo=0,ho=0,uo=!1;const y_=new C,Sn=new C;class Ph{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=y_}=r;co=this._renderer.getRenderTarget(),lo=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(co,lo,ho),this._renderer.xr.enabled=uo,t.scissorTest=!1,is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===In||t.mapping===ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),co=this._renderer.getRenderTarget(),lo=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:Oi,format:Ei,colorSpace:aa,depthBuffer:!1},s=Lh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lh(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=M_(r)),this._blurMaterial=b_(r,t,e),this._ggxMaterial=S_(r,t,e)}return s}_compileMaterial(t){const e=new Lt(new ge,t);this._renderer.compile(e,Ls)}_sceneToCubeUV(t,e,i,s,r){const c=new ti(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(Ch),d.toneMapping=Ni,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Lt(new Ee,new Zt({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let f=!1;const M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,f=!0):(m.color.copy(Ch),f=!0);for(let T=0;T<6;T++){const y=T%3;y===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[T],r.y,r.z)):y===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[T]));const w=this._cubeSize;is(s,y*w,T>2?w:0,w,w),d.setRenderTarget(s),f&&d.render(_,c),d.render(t,c)}d.toneMapping=p,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===In||t.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ih());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;is(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,Ls)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,p=d*u,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-os?i-g+os:0),f=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=g-e,is(r,m,f,3*_,2*_),s.setRenderTarget(r),s.render(o,Ls),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,is(t,m,f,3*_,2*_),s.setRenderTarget(t),s.render(o,Ls)}_blur(t,e,i,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;const l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;const h=this._sizeLods[s],d=3*h*(s>this._lodMax-os?s-this._lodMax+os:0),u=4*(this._cubeSize-h);is(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(c,Ls)}}function M_(n){const t=[],e=[];let i=n;const s=n-os+1+__;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);const o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,p=3,g=new Float32Array(p*u*d),_=new Float32Array(p*u*d);for(let f=0;f<d;f++){const M=f%3*2/3-1,T=f>2?0:-1,y=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];g.set(y,p*u*f);for(let w=0;w<u;w++){const b=h[w*2]*2-1,A=h[w*2+1]*2-1;f===0?Sn.set(1,A,b):f===1?Sn.set(-b,1,-A):f===2?Sn.set(-b,A,1):f===3?Sn.set(-1,A,-b):f===4?Sn.set(-b,-1,A):Sn.set(b,A,-1),Sn.toArray(_,(f*u+w)*p)}}const m=new ge;m.setAttribute("position",new Ue(g,p)),m.setAttribute("outputDirection",new Ue(_,p)),e.push(new Lt(m,null)),i>os&&i--}return{lodMeshes:e,sizeLods:t}}function Lh(n,t,e){const i=new di(n,t,e);return i.texture.mapping=Sa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function is(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function S_(n,t,e){return new We({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:x_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function b_(n,t,e){return new We({name:"SphericalGaussianBlur",defines:{SAMPLES:v_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Ih(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Dh(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Aa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class pd extends di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new rd(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ee(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ii,blending:$i});r.uniforms.tEquirect.value=e;const a=new Lt(s,r),o=e.minFilter;return e.minFilter===An&&(e.minFilter=Ge),new Am(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}function E_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){const p=u.mapping;if(p===Ua||p===Fa)if(t.has(u)){const g=t.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const _=new pd(g.height);return _.fromEquirectangularTexture(n,u),t.set(u,_),u.addEventListener("dispose",l),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const p=u.mapping,g=p===Ua||p===Fa,_=p===In||p===ms;if(g||_){let m=e.get(u);const f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new Ph(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return g&&M&&M.height>0||_&&M&&c(M)?(i===null&&(i=new Ph(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===Ua?u.mapping=In:p===Fa&&(u.mapping=ms),u}function c(u){let p=0;const g=6;for(let _=0;_<g;_++)u[_]!==void 0&&p++;return p===g}function l(u){const p=u.target;p.removeEventListener("dispose",l);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function w_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&hs("WebGLRenderer: "+i+" extension not supported."),s}}}function T_(n,t,e,i){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const p in u)t.update(u[p],n.ARRAY_BUFFER)}function l(d){const u=[],p=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(p!==null){const M=p.array;_=p.version;for(let T=0,y=M.length;T<y;T+=3){const w=M[T+0],b=M[T+1],A=M[T+2];u.push(w,b,b,A,A,w)}}else{const M=g.array;_=g.version;for(let T=0,y=M.length/3-1;T<y;T+=3){const w=T+0,b=T+1,A=T+2;u.push(w,b,b,A,A,w)}}const m=new(g.count>=65535?ed:td)(u,1);m.version=_;const f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function A_(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){n.drawElements(i,u,r,d*a),e.update(u,i,1)}function l(d,u,p){p!==0&&(n.drawElementsInstanced(i,u,r,d*a,p),e.update(u,i,p))}function h(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,p);let _=0;for(let m=0;m<p;m++)_+=u[m];e.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function R_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:ie("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function C_(n,t,e){const i=new WeakMap,s=new be;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let E=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let T=0;p===!0&&(T=1),g===!0&&(T=2),_===!0&&(T=3);let y=o.attributes.position.count*T,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const b=new Float32Array(y*w*4*d),A=new ju(b,y,w,d);A.type=bi,A.needsUpdate=!0;const x=T*4;for(let P=0;P<d;P++){const L=m[P],F=f[P],O=M[P],I=y*w*4*P;for(let V=0;V<L.count;V++){const z=V*x;p===!0&&(s.fromBufferAttribute(L,V),b[I+z+0]=s.x,b[I+z+1]=s.y,b[I+z+2]=s.z,b[I+z+3]=0),g===!0&&(s.fromBufferAttribute(F,V),b[I+z+4]=s.x,b[I+z+5]=s.y,b[I+z+6]=s.z,b[I+z+7]=0),_===!0&&(s.fromBufferAttribute(O,V),b[I+z+8]=s.x,b[I+z+9]=s.y,b[I+z+10]=s.z,b[I+z+11]=O.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new Ft(y,w)},i.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];const g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function P_(n,t,e,i,s){let r=new WeakMap;function a(l){const h=s.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const L_={[Uu]:"LINEAR_TONE_MAPPING",[Fu]:"REINHARD_TONE_MAPPING",[Ou]:"CINEON_TONE_MAPPING",[ku]:"ACES_FILMIC_TONE_MAPPING",[zu]:"AGX_TONE_MAPPING",[Hu]:"NEUTRAL_TONE_MAPPING",[Bu]:"CUSTOM_TONE_MAPPING"};function I_(n,t,e,i,s,r){const a=new di(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new ge;l.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ae([0,2,0,0,2,0],2));const h=new Sm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Lt(l,h),u=new Ta(-1,1,1,-1,0,1);let p=null,g=null,_=!1,m,f=null,M=[],T=!1;this.setSize=function(y,w){a.setSize(y,w),o!==null&&o.setSize(y,w),c!==null&&c.setSize(y,w);for(let b=0;b<M.length;b++){const A=M[b];A.setSize&&A.setSize(y,w)}},this.setEffects=function(y){M=y,T=M.length>0&&M[0].isRenderPass===!0;const w=a.width,b=a.height;M.length>0&&o===null&&(o=new di(w,b,{type:Oi,depthBuffer:!1,stencilBuffer:!1}),c=new di(w,b,{type:Oi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){const x=M[A];x.setSize&&x.setSize(w,b)}},this.begin=function(y,w){if(_||y.toneMapping===Ni&&M.length===0)return!1;if(f=w,w!==null){const b=w.width,A=w.height;(a.width!==b||a.height!==A)&&this.setSize(b,A)}return T===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Ni,!0},this.hasRenderPass=function(){return T},this.end=function(y,w){y.toneMapping=m,_=!0;let b=a,A=o;for(let x=0;x<M.length;x++){const E=M[x];E.enabled!==!1&&(E.render(y,A,b,w),E.needsSwap!==!1&&(b=A,A=A===o?c:o))}if(p!==y.outputColorSpace||g!==y.toneMapping){p=y.outputColorSpace,g=y.toneMapping,h.defines={},Qt.getTransfer(p)===he&&(h.defines.SRGB_TRANSFER="");const x=L_[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(f),y.render(d,u),f=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const md=new Ve,Rc=new Js(1,1),gd=new ju,_d=new Jp,vd=new rd,Nh=[],Uh=[],Fh=new Float32Array(16),Oh=new Float32Array(9),kh=new Float32Array(4);function xs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Nh[s];if(r===void 0&&(r=new Float32Array(s),Nh[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Fe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Oe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ra(n,t){let e=Uh[t];e===void 0&&(e=new Int32Array(t),Uh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function D_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function N_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2fv(this.addr,t),Oe(e,t)}}function U_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;n.uniform3fv(this.addr,t),Oe(e,t)}}function F_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4fv(this.addr,t),Oe(e,t)}}function O_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;kh.set(i),n.uniformMatrix2fv(this.addr,!1,kh),Oe(e,i)}}function k_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;Oh.set(i),n.uniformMatrix3fv(this.addr,!1,Oh),Oe(e,i)}}function B_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;Fh.set(i),n.uniformMatrix4fv(this.addr,!1,Fh),Oe(e,i)}}function z_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function H_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2iv(this.addr,t),Oe(e,t)}}function G_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3iv(this.addr,t),Oe(e,t)}}function V_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4iv(this.addr,t),Oe(e,t)}}function W_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function X_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2uiv(this.addr,t),Oe(e,t)}}function q_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3uiv(this.addr,t),Oe(e,t)}}function Y_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4uiv(this.addr,t),Oe(e,t)}}function $_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Rc.compareFunction=e.isReversedDepthBuffer()?al:rl,r=Rc):r=md,e.setTexture2D(t||r,s)}function Z_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||_d,s)}function K_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||vd,s)}function j_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||gd,s)}function J_(n){switch(n){case 5126:return D_;case 35664:return N_;case 35665:return U_;case 35666:return F_;case 35674:return O_;case 35675:return k_;case 35676:return B_;case 5124:case 35670:return z_;case 35667:case 35671:return H_;case 35668:case 35672:return G_;case 35669:case 35673:return V_;case 5125:return W_;case 36294:return X_;case 36295:return q_;case 36296:return Y_;case 35678:case 36198:case 36298:case 36306:case 35682:return $_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return K_;case 36289:case 36303:case 36311:case 36292:return j_}}function Q_(n,t){n.uniform1fv(this.addr,t)}function tv(n,t){const e=xs(t,this.size,2);n.uniform2fv(this.addr,e)}function ev(n,t){const e=xs(t,this.size,3);n.uniform3fv(this.addr,e)}function iv(n,t){const e=xs(t,this.size,4);n.uniform4fv(this.addr,e)}function nv(n,t){const e=xs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function sv(n,t){const e=xs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function rv(n,t){const e=xs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function av(n,t){n.uniform1iv(this.addr,t)}function ov(n,t){n.uniform2iv(this.addr,t)}function cv(n,t){n.uniform3iv(this.addr,t)}function lv(n,t){n.uniform4iv(this.addr,t)}function hv(n,t){n.uniform1uiv(this.addr,t)}function uv(n,t){n.uniform2uiv(this.addr,t)}function dv(n,t){n.uniform3uiv(this.addr,t)}function fv(n,t){n.uniform4uiv(this.addr,t)}function pv(n,t,e){const i=this.cache,s=t.length,r=Ra(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Rc:a=md;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function mv(n,t,e){const i=this.cache,s=t.length,r=Ra(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||_d,r[a])}function gv(n,t,e){const i=this.cache,s=t.length,r=Ra(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||vd,r[a])}function _v(n,t,e){const i=this.cache,s=t.length,r=Ra(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||gd,r[a])}function vv(n){switch(n){case 5126:return Q_;case 35664:return tv;case 35665:return ev;case 35666:return iv;case 35674:return nv;case 35675:return sv;case 35676:return rv;case 5124:case 35670:return av;case 35667:case 35671:return ov;case 35668:case 35672:return cv;case 35669:case 35673:return lv;case 5125:return hv;case 36294:return uv;case 36295:return dv;case 36296:return fv;case 35678:case 36198:case 36298:case 36306:case 35682:return pv;case 35679:case 36299:case 36307:return mv;case 35680:case 36300:case 36308:case 36293:return gv;case 36289:case 36303:case 36311:case 36292:return _v}}class xv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=J_(e.type)}}class yv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vv(e.type)}}class Mv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const fo=/(\w+)(\])?(\[|\.)?/g;function Bh(n,t){n.seq.push(t),n.map[t.id]=t}function Sv(n,t,e){const i=n.name,s=i.length;for(fo.lastIndex=0;;){const r=fo.exec(i),a=fo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Bh(e,l===void 0?new xv(o,n,t):new yv(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new Mv(o),Bh(e,d)),e=d}}}class Yr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Sv(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function zh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const bv=37297;let Ev=0;function wv(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Hh=new zt;function Tv(n){Qt._getMatrix(Hh,Qt.workingColorSpace,n);const t=`mat3( ${Hh.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(n)){case oa:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Gh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+wv(n.getShaderSource(t),o)}else return r}function Av(n,t){const e=Tv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Rv={[Uu]:"Linear",[Fu]:"Reinhard",[Ou]:"Cineon",[ku]:"ACESFilmic",[zu]:"AgX",[Hu]:"Neutral",[Bu]:"Custom"};function Cv(n,t){const e=Rv[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Nr=new C;function Pv(){Qt.getLuminanceCoefficients(Nr);const n=Nr.x.toFixed(4),t=Nr.y.toFixed(4),e=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function Iv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Dv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Os(n){return n!==""}function Vh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Nv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(n){return n.replace(Nv,Fv)}const Uv=new Map;function Fv(n,t){let e=Wt[t];if(e===void 0){const i=Uv.get(t);if(i!==void 0)e=Wt[i],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Cc(e)}const Ov=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xh(n){return n.replace(Ov,kv)}function kv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const Bv={[Gr]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function zv(n){return Bv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Hv={[In]:"ENVMAP_TYPE_CUBE",[ms]:"ENVMAP_TYPE_CUBE",[Sa]:"ENVMAP_TYPE_CUBE_UV"};function Gv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Hv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Vv={[ms]:"ENVMAP_MODE_REFRACTION"};function Wv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Vv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Xv={[Nu]:"ENVMAP_BLENDING_MULTIPLY",[mp]:"ENVMAP_BLENDING_MIX",[gp]:"ENVMAP_BLENDING_ADD"};function qv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Xv[n.combine]||"ENVMAP_BLENDING_NONE"}function Yv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function $v(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=zv(e),l=Gv(e),h=Wv(e),d=qv(e),u=Yv(e),p=Lv(e),g=Iv(r),_=s.createProgram();let m,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),f.length>0&&(f+=`
`)):(m=[qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),f=[qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ni?"#define TONE_MAPPING":"",e.toneMapping!==Ni?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Ni?Cv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Av("linearToOutputTexel",e.outputColorSpace),Pv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),a=Cc(a),a=Vh(a,e),a=Wh(a,e),o=Cc(o),o=Vh(o,e),o=Wh(o,e),a=Xh(a),o=Xh(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=M+m+a,y=M+f+o,w=zh(s,s.VERTEX_SHADER,T),b=zh(s,s.FRAGMENT_SHADER,y);s.attachShader(_,w),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(L){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(w)||"",I=s.getShaderInfoLog(b)||"",V=F.trim(),z=O.trim(),Y=I.trim();let it=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(it=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,w,b);else{const Q=Gh(s,w,"vertex"),et=Gh(s,b,"fragment");ie("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+Q+`
`+et)}else V!==""?Ut("WebGLProgram: Program Info Log:",V):(z===""||Y==="")&&(q=!1);q&&(L.diagnostics={runnable:it,programLog:V,vertexShader:{log:z,prefix:m},fragmentShader:{log:Y,prefix:f}})}s.deleteShader(w),s.deleteShader(b),x=new Yr(s,_),E=Dv(s,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(_,bv)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ev++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=b,this}let Zv=0;class Kv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new jv(t),e.set(t,i)),i}}class jv{constructor(t){this.id=Zv++,this.code=t,this.usedTimes=0}}function Jv(n){return n===Dn||n===sa||n===ra}function Qv(n,t,e,i,s,r){const a=new Ju,o=new Kv,c=new Set,l=[],h=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,E,P,L,F,O){const I=L.fog,V=F.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,it=t.get(x.envMap||z,Y),q=it&&it.mapping===Sa?it.image.height:null,Q=p[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Ut("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const et=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Rt=et!==void 0?et.length:0;let yt=0;V.morphAttributes.position!==void 0&&(yt=1),V.morphAttributes.normal!==void 0&&(yt=2),V.morphAttributes.color!==void 0&&(yt=3);let se,Jt,te,$;if(Q){const pe=Li[Q];se=pe.vertexShader,Jt=pe.fragmentShader}else{se=x.vertexShader,Jt=x.fragmentShader;const pe=o.getVertexShaderStage(x),oe=o.getFragmentShaderStage(x);o.update(x,pe,oe),te=pe.id,$=oe.id}const tt=n.getRenderTarget(),vt=n.state.buffers.depth.getReversed(),Ot=F.isInstancedMesh===!0,gt=F.isBatchedMesh===!0,Gt=!!x.map,xe=!!x.matcap,qt=!!it,st=!!x.aoMap,Nt=!!x.lightMap,Et=!!x.bumpMap&&x.wireframe===!1,kt=!!x.normalMap,ye=!!x.displacementMap,De=!!x.emissiveMap,Yt=!!x.metalnessMap,Me=!!x.roughnessMap,U=x.anisotropy>0,Xe=x.clearcoat>0,le=x.dispersion>0,R=x.retroreflectivity>0,v=x.iridescence>0,B=x.sheen>0,W=x.transmission>0,Z=U&&!!x.anisotropyMap,rt=Xe&&!!x.clearcoatMap,at=Xe&&!!x.clearcoatNormalMap,K=Xe&&!!x.clearcoatRoughnessMap,J=v&&!!x.iridescenceMap,ot=v&&!!x.iridescenceThicknessMap,Tt=B&&!!x.sheenColorMap,ut=B&&!!x.sheenRoughnessMap,ct=!!x.specularMap,At=!!x.specularColorMap,Dt=!!x.specularIntensityMap,Ht=W&&!!x.transmissionMap,N=W&&!!x.thicknessMap,lt=!!x.gradientMap,j=!!x.alphaMap,ht=x.alphaTest>0,mt=!!x.alphaHash,nt=!!x.extensions;let Ct=Ni;x.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ct=n.toneMapping);const bt={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:se,fragmentShader:Jt,defines:x.defines,customVertexShaderID:te,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:gt,batchingColor:gt&&F._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&F.instanceColor!==null,instancingMorph:Ot&&F.morphTexture!==null,outputColorSpace:tt===null?n.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Gt,matcap:xe,envMap:qt,envMapMode:qt&&it.mapping,envMapCubeUVHeight:q,aoMap:st,lightMap:Nt,bumpMap:Et,normalMap:kt,displacementMap:ye,emissiveMap:De,normalMapObjectSpace:kt&&x.normalMapType===xp,normalMapTangentSpace:kt&&x.normalMapType===wc,packedNormalMap:kt&&x.normalMapType===wc&&Jv(x.normalMap.format),metalnessMap:Yt,roughnessMap:Me,anisotropy:U,anisotropyMap:Z,clearcoat:Xe,clearcoatMap:rt,clearcoatNormalMap:at,clearcoatRoughnessMap:K,dispersion:le,retroreflection:R,iridescence:v,iridescenceMap:J,iridescenceThicknessMap:ot,sheen:B,sheenColorMap:Tt,sheenRoughnessMap:ut,specularMap:ct,specularColorMap:At,specularIntensityMap:Dt,transmission:W,transmissionMap:Ht,thicknessMap:N,gradientMap:lt,opaque:x.transparent===!1&&x.blending===Cn&&x.alphaToCoverage===!1,alphaMap:j,alphaTest:ht,alphaHash:mt,combine:x.combine,mapUv:Gt&&g(x.map.channel),aoMapUv:st&&g(x.aoMap.channel),lightMapUv:Nt&&g(x.lightMap.channel),bumpMapUv:Et&&g(x.bumpMap.channel),normalMapUv:kt&&g(x.normalMap.channel),displacementMapUv:ye&&g(x.displacementMap.channel),emissiveMapUv:De&&g(x.emissiveMap.channel),metalnessMapUv:Yt&&g(x.metalnessMap.channel),roughnessMapUv:Me&&g(x.roughnessMap.channel),anisotropyMapUv:Z&&g(x.anisotropyMap.channel),clearcoatMapUv:rt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:at&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ut&&g(x.sheenRoughnessMap.channel),specularMapUv:ct&&g(x.specularMap.channel),specularColorMapUv:At&&g(x.specularColorMap.channel),specularIntensityMapUv:Dt&&g(x.specularIntensityMap.channel),transmissionMapUv:Ht&&g(x.transmissionMap.channel),thicknessMapUv:N&&g(x.thicknessMap.channel),alphaMapUv:j&&g(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(kt||U),vertexNormals:!!V.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(Gt||j),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||V.attributes.normal===void 0&&kt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:yt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ct,decodeVideoTexture:Gt&&x.map.isVideoTexture===!0&&Qt.getTransfer(x.map.colorSpace)===he,decodeVideoTextureEmissive:De&&x.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(x.emissiveMap.colorSpace)===he,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Le,flipSided:x.side===ii,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function m(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)E.push(P),E.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(f(E,x),M(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function f(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function M(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function T(x){const E=p[x.type];let P;if(E){const L=Li[E];P=xm.clone(L.uniforms)}else P=x.uniforms;return P}function y(x,E){let P=h.get(E);return P!==void 0?++P.usedTimes:(P=new $v(n,E,x,s),l.push(P),h.set(E,P)),P}function w(x){if(--x.usedTimes===0){const E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:T,acquireProgram:y,releaseProgram:w,releaseShaderCache:b,programs:l,dispose:A}}function tx(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function ex(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Yh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function $h(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,_,m,f){let M=n[t];return M===void 0?(M={id:u.id,object:u,geometry:p,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:f},n[t]=M):(M.id=u.id,M.object=u,M.geometry=p,M.material=g,M.materialVariant=a(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=m,M.group=f),t++,M}function c(u,p,g,_,m,f,M){M.reversedDepth===!0&&(m=-m);const T=o(u,p,g,_,m,f);g.transmission>0?i.push(T):g.transparent===!0?s.push(T):e.push(T)}function l(u,p,g,_,m,f){const M=o(u,p,g,_,m,f);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,p){e.length>1&&e.sort(u||ex),i.length>1&&i.sort(p||Yh),s.length>1&&s.sort(p||Yh)}function d(){for(let u=t,p=n.length;u<p;u++){const g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function ix(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new $h,n.set(i,[a])):s>=r.length?(a=new $h,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function nx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new Pt};break;case"SpotLight":e={position:new C,direction:new C,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function sx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let rx=0;function ax(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ox(n){const t=new nx,e=sx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new C);const s=new C,r=new ne,a=new ne;function o(l){let h=0,d=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,M=0,T=0,y=0,w=0,b=0,A=0,x=0,E=0,P=0;l.sort(ax);for(let F=0,O=l.length;F<O;F++){const I=l[F],V=I.color,z=I.intensity,Y=I.distance;let it=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Dn?it=I.shadow.map.texture:it=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=V.r*z,d+=V.g*z,u+=V.b*z;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],z);P++}else if(I.isSunLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Q=I.shadow,et=e.get(I);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[g]=et,i.sunShadowMap[g]=it;const Rt=Q.getViewportCount();for(let yt=0;yt<Rt;yt++)i.sunShadowMatrix[_+yt]=Q.getMatrix(yt),i.sunShadowCascade[_+yt]=Q._cascadeData[yt];_+=Rt,g++}i.sun[p]=q,p++}else if(I.isDirectionalLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Q=I.shadow,et=e.get(I);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,i.directionalShadow[m]=et,i.directionalShadowMap[m]=it,i.directionalShadowMatrix[m]=I.shadow.matrix,w++}i.directional[m]=q,m++}else if(I.isSpotLight){const q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(V).multiplyScalar(z),q.distance=Y,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[M]=q;const Q=I.shadow;if(I.map&&(i.spotLightMap[x]=I.map,x++,Q.updateMatrices(I),I.castShadow&&E++),i.spotLightMatrix[M]=Q.matrix,I.castShadow){const et=e.get(I);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,i.spotShadow[M]=et,i.spotShadowMap[M]=it,A++}M++}else if(I.isRectAreaLight){const q=t.get(I);q.color.copy(V).multiplyScalar(z),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[T]=q,T++}else if(I.isPointLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){const Q=I.shadow,et=e.get(I);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,et.shadowCameraNear=Q.camera.near,et.shadowCameraFar=Q.camera.far,i.pointShadow[f]=et,i.pointShadowMap[f]=it,i.pointShadowMatrix[f]=I.shadow.matrix,b++}i.point[f]=q,f++}else if(I.isHemisphereLight){const q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(z),q.groundColor.copy(I.groundColor).multiplyScalar(z),i.hemi[y]=q,y++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const L=i.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==f||L.spotLength!==M||L.rectAreaLength!==T||L.hemiLength!==y||L.numSunShadows!==g||L.numDirectionalShadows!==w||L.numPointShadows!==b||L.numSpotShadows!==A||L.numSpotMaps!==x||L.numLightProbes!==P)&&(i.sun.length=p,i.directional.length=m,i.spot.length=M,i.rectArea.length=T,i.point.length=f,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+x-E,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=P,L.sunLength=p,L.directionalLength=m,L.pointLength=f,L.spotLength=M,L.rectAreaLength=T,L.hemiLength=y,L.numSunShadows=g,L.numDirectionalShadows=w,L.numPointShadows=b,L.numSpotShadows=A,L.numSpotMaps=x,L.numLightProbes=P,i.version=rx++)}function c(l,h){let d=0,u=0,p=0,g=0,_=0,m=0;const f=h.matrixWorldInverse;for(let M=0,T=l.length;M<T;M++){const y=l[M];if(y.isSunLight){const w=i.sun[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(f),d++}else if(y.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),u++}else if(y.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),g++}else if(y.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),a.identity(),r.copy(y.matrixWorld),r.premultiply(f),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const w=i.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const w=i.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(f),m++}}}return{setup:o,setupView:c,state:i}}function Zh(n){const t=new ox(n),e=[],i=[],s=[];function r(u){d.camera=u,e.length=0,i.length=0,s.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function c(u){s.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function cx(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Zh(n),t.set(s,[o])):r>=a.length?(o=new Zh(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hx=`uniform sampler2D shadow_pass;
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
}`,ux=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],dx=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Kh=new ne,Is=new C,po=new C;function fx(n,t,e){let i=new pl;const s=new Ft,r=new Ft,a=new be,o=new bm,c=new Em,l={},h=e.maxTextureSize,d={[Ln]:ii,[ii]:Ln,[Le]:Le},u=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:lx,fragmentShader:hx}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new ge;g.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Lt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gr;let f=this.type;this.render=function(b,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Kf&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gr);const E=n.getRenderTarget(),P=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),F=n.state;F.setBlending($i),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=f!==this.type;O&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(V=>V.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,V=b.length;I<V;I++){const z=b[I],Y=z.shadow;if(Y===void 0){Ut("WebGLShadowMap:",z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const it=Y.getFrameExtents();s.multiply(it),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,Y.mapSize.y=r.y));const q=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=q,Y.map===null||O===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Us){if(z.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new di(s.x,s.y,{format:Dn,type:Oi,minFilter:Ge,magFilter:Ge,generateMipmaps:!1}),Y.map.texture.name=z.name+".shadowMap",Y.map.depthTexture=new Js(s.x,s.y,bi),Y.map.depthTexture.name=z.name+".shadowMapDepth",Y.map.depthTexture.format=Ji,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=He,Y.map.depthTexture.magFilter=He}else z.isPointLight?(Y.map=new pd(s.x),Y.map.depthTexture=new _m(s.x,Fi)):(Y.map=new di(s.x,s.y),Y.map.depthTexture=new Js(s.x,s.y,Fi)),Y.map.depthTexture.name=z.name+".shadowMap",Y.map.depthTexture.format=Ji,this.type===Gr?(Y.map.depthTexture.compareFunction=q?al:rl,Y.map.depthTexture.minFilter=Ge,Y.map.depthTexture.magFilter=Ge):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=He,Y.map.depthTexture.magFilter=He);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);const Q=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();z.isPointLight!==!0&&Y.updateMatrices(z,x);for(let et=0;et<Q;et++){const Rt=Y.getCamera(et);if(z.isPointLight){const yt=Y.camera,se=Y.matrix,Jt=z.distance||yt.far;Jt!==yt.far&&(yt.far=Jt,yt.updateProjectionMatrix()),Is.setFromMatrixPosition(z.matrixWorld),yt.position.copy(Is),po.copy(yt.position),po.add(ux[et]),yt.up.copy(dx[et]),yt.lookAt(po),yt.updateMatrixWorld(),se.makeTranslation(-Is.x,-Is.y,-Is.z),Kh.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Kh,yt.coordinateSystem,yt.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,et),n.clear();else{et===0&&(n.setRenderTarget(Y.map),n.clear());const yt=Y.getViewport(et);a.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),F.viewport(a)}i=Y.getFrustum(et),y(A,x,Rt,z,this.type)}Y.isPointLightShadow!==!0&&this.type===Us&&M(Y,x),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(E,P,L)};function M(b,A){const x=t.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new di(s.x,s.y,{format:Dn,type:Oi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(A,null,x,u,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(A,null,x,p,_,null)}function T(b,A,x,E){let P=null;const L=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)P=L;else if(P=x.isPointLight===!0?c:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const F=P.uuid,O=A.uuid;let I=l[F];I===void 0&&(I={},l[F]=I);let V=I[O];V===void 0&&(V=P.clone(),I[O]=V,A.addEventListener("dispose",w)),P=V}if(P.visible=A.visible,P.wireframe=A.wireframe,E===Us?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:d[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const F=n.properties.get(P);F.light=x}return P}function y(b,A,x,E,P){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===Us)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const O=t.update(b),I=b.material;if(Array.isArray(I)){const V=O.groups;for(let z=0,Y=V.length;z<Y;z++){const it=V[z],q=I[it.materialIndex];if(q&&q.visible){const Q=T(b,q,E,P);b.onBeforeShadow(n,b,A,x,O,Q,it),n.renderBufferDirect(x,null,O,Q,b,it),b.onAfterShadow(n,b,A,x,O,Q,it)}}}else if(I.visible){const V=T(b,I,E,P);b.onBeforeShadow(n,b,A,x,O,V,null),n.renderBufferDirect(x,null,O,V,b,null),b.onAfterShadow(n,b,A,x,O,V,null)}}const F=b.children;for(let O=0,I=F.length;O<I;O++)y(F[O],A,x,E,P)}function w(b){b.target.removeEventListener("dispose",w);for(const x in l){const E=l[x],P=b.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function px(n,t){function e(){let N=!1;const lt=new be;let j=null;const ht=new be(0,0,0,0);return{setMask:function(mt){j!==mt&&!N&&(n.colorMask(mt,mt,mt,mt),j=mt)},setLocked:function(mt){N=mt},setClear:function(mt,nt,Ct,bt,pe){pe===!0&&(mt*=bt,nt*=bt,Ct*=bt),lt.set(mt,nt,Ct,bt),ht.equals(lt)===!1&&(n.clearColor(mt,nt,Ct,bt),ht.copy(lt))},reset:function(){N=!1,j=null,ht.set(-1,0,0,0)}}}function i(){let N=!1,lt=!1,j=null,ht=null,mt=null;return{setReversed:function(nt){if(lt!==nt){const Ct=t.get("EXT_clip_control");nt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),lt=nt;const bt=mt;mt=null,this.setClear(bt)}},getReversed:function(){return lt},setTest:function(nt){nt?tt(n.DEPTH_TEST):vt(n.DEPTH_TEST)},setMask:function(nt){j!==nt&&!N&&(n.depthMask(nt),j=nt)},setFunc:function(nt){if(lt&&(nt=Pp[nt]),ht!==nt){switch(nt){case zo:n.depthFunc(n.NEVER);break;case Ho:n.depthFunc(n.ALWAYS);break;case Go:n.depthFunc(n.LESS);break;case qs:n.depthFunc(n.LEQUAL);break;case Vo:n.depthFunc(n.EQUAL);break;case Wo:n.depthFunc(n.GEQUAL);break;case Xo:n.depthFunc(n.GREATER);break;case qo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ht=nt}},setLocked:function(nt){N=nt},setClear:function(nt){mt!==nt&&(mt=nt,lt&&(nt=1-nt),n.clearDepth(nt))},reset:function(){N=!1,j=null,ht=null,mt=null,lt=!1}}}function s(){let N=!1,lt=null,j=null,ht=null,mt=null,nt=null,Ct=null,bt=null,pe=null;return{setTest:function(oe){N||(oe?tt(n.STENCIL_TEST):vt(n.STENCIL_TEST))},setMask:function(oe){lt!==oe&&!N&&(n.stencilMask(oe),lt=oe)},setFunc:function(oe,pi,wi){(j!==oe||ht!==pi||mt!==wi)&&(n.stencilFunc(oe,pi,wi),j=oe,ht=pi,mt=wi)},setOp:function(oe,pi,wi){(nt!==oe||Ct!==pi||bt!==wi)&&(n.stencilOp(oe,pi,wi),nt=oe,Ct=pi,bt=wi)},setLocked:function(oe){N=oe},setClear:function(oe){pe!==oe&&(n.clearStencil(oe),pe=oe)},reset:function(){N=!1,lt=null,j=null,ht=null,mt=null,nt=null,Ct=null,bt=null,pe=null}}}const r=new e,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let h={},d={},u={},p=new WeakMap,g=[],_=null,m=!1,f=null,M=null,T=null,y=null,w=null,b=null,A=null,x=new Pt(0,0,0),E=0,P=!1,L=null,F=null,O=null,I=null,V=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,it=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=it>=1):q.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=it>=2);let Q=null,et={};const Rt=n.getParameter(n.SCISSOR_BOX),yt=n.getParameter(n.VIEWPORT),se=new be().fromArray(Rt),Jt=new be().fromArray(yt);function te(N,lt,j,ht){const mt=new Uint8Array(4),nt=n.createTexture();n.bindTexture(N,nt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ct=0;Ct<j;Ct++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(lt,0,n.RGBA,1,1,ht,0,n.RGBA,n.UNSIGNED_BYTE,mt):n.texImage2D(lt+Ct,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,mt);return nt}const $={};$[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(n.DEPTH_TEST),a.setFunc(qs),Et(!1),kt(Xl),tt(n.CULL_FACE),st($i);function tt(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function vt(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function Ot(N,lt){return u[N]!==lt?(n.bindFramebuffer(N,lt),u[N]=lt,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=lt),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=lt),!0):!1}function gt(N,lt){let j=g,ht=!1;if(N){j=p.get(lt),j===void 0&&(j=[],p.set(lt,j));const mt=N.textures;if(j.length!==mt.length||j[0]!==n.COLOR_ATTACHMENT0){for(let nt=0,Ct=mt.length;nt<Ct;nt++)j[nt]=n.COLOR_ATTACHMENT0+nt;j.length=mt.length,ht=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,ht=!0);ht&&n.drawBuffers(j)}function Gt(N){return _!==N?(n.useProgram(N),_=N,!0):!1}const xe={[rs]:n.FUNC_ADD,[Jf]:n.FUNC_SUBTRACT,[Qf]:n.FUNC_REVERSE_SUBTRACT};xe[tp]=n.MIN,xe[ep]=n.MAX;const qt={[ip]:n.ZERO,[np]:n.ONE,[sp]:n.SRC_COLOR,[Iu]:n.SRC_ALPHA,[hp]:n.SRC_ALPHA_SATURATE,[cp]:n.DST_COLOR,[ap]:n.DST_ALPHA,[rp]:n.ONE_MINUS_SRC_COLOR,[Du]:n.ONE_MINUS_SRC_ALPHA,[lp]:n.ONE_MINUS_DST_COLOR,[op]:n.ONE_MINUS_DST_ALPHA,[up]:n.CONSTANT_COLOR,[dp]:n.ONE_MINUS_CONSTANT_COLOR,[fp]:n.CONSTANT_ALPHA,[pp]:n.ONE_MINUS_CONSTANT_ALPHA};function st(N,lt,j,ht,mt,nt,Ct,bt,pe,oe){if(N===$i){m===!0&&(vt(n.BLEND),m=!1);return}if(m===!1&&(tt(n.BLEND),m=!0),N!==jf){if(N!==f||oe!==P){if((M!==rs||w!==rs)&&(n.blendEquation(n.FUNC_ADD),M=rs,w=rs),oe)switch(N){case Cn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ui:n.blendFunc(n.ONE,n.ONE);break;case ql:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ie("WebGLState: Invalid blending: ",N);break}else switch(N){case Cn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ui:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ql:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yl:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",N);break}T=null,y=null,b=null,A=null,x.set(0,0,0),E=0,f=N,P=oe}return}mt=mt||lt,nt=nt||j,Ct=Ct||ht,(lt!==M||mt!==w)&&(n.blendEquationSeparate(xe[lt],xe[mt]),M=lt,w=mt),(j!==T||ht!==y||nt!==b||Ct!==A)&&(n.blendFuncSeparate(qt[j],qt[ht],qt[nt],qt[Ct]),T=j,y=ht,b=nt,A=Ct),(bt.equals(x)===!1||pe!==E)&&(n.blendColor(bt.r,bt.g,bt.b,pe),x.copy(bt),E=pe),f=N,P=!1}function Nt(N,lt){N.side===Le?vt(n.CULL_FACE):tt(n.CULL_FACE);let j=N.side===ii;lt&&(j=!j),Et(j),N.blending===Cn&&N.transparent===!1?st($i):st(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const ht=N.stencilWrite;o.setTest(ht),ht&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),De(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?tt(n.SAMPLE_ALPHA_TO_COVERAGE):vt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Et(N){L!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),L=N)}function kt(N){N!==$f?(tt(n.CULL_FACE),N!==F&&(N===Xl?n.cullFace(n.BACK):N===Zf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):vt(n.CULL_FACE),F=N}function ye(N){N!==O&&(Y&&n.lineWidth(N),O=N)}function De(N,lt,j){N?(tt(n.POLYGON_OFFSET_FILL),(I!==lt||V!==j)&&(I=lt,V=j,a.getReversed()&&(lt=-lt),n.polygonOffset(lt,j))):vt(n.POLYGON_OFFSET_FILL)}function Yt(N){N?tt(n.SCISSOR_TEST):vt(n.SCISSOR_TEST)}function Me(N){N===void 0&&(N=n.TEXTURE0+z-1),Q!==N&&(n.activeTexture(N),Q=N)}function U(N,lt,j){j===void 0&&(Q===null?j=n.TEXTURE0+z-1:j=Q);let ht=et[j];ht===void 0&&(ht={type:void 0,texture:void 0},et[j]=ht),(ht.type!==N||ht.texture!==lt)&&(Q!==j&&(n.activeTexture(j),Q=j),n.bindTexture(N,lt||$[N]),ht.type=N,ht.texture=lt)}function Xe(){const N=et[Q];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function le(){try{n.compressedTexImage2D(...arguments)}catch(N){ie("WebGLState:",N)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(N){ie("WebGLState:",N)}}function v(){try{n.texSubImage2D(...arguments)}catch(N){ie("WebGLState:",N)}}function B(){try{n.texSubImage3D(...arguments)}catch(N){ie("WebGLState:",N)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(N){ie("WebGLState:",N)}}function Z(){try{n.compressedTexSubImage3D(...arguments)}catch(N){ie("WebGLState:",N)}}function rt(){try{n.texStorage2D(...arguments)}catch(N){ie("WebGLState:",N)}}function at(){try{n.texStorage3D(...arguments)}catch(N){ie("WebGLState:",N)}}function K(){try{n.texImage2D(...arguments)}catch(N){ie("WebGLState:",N)}}function J(){try{n.texImage3D(...arguments)}catch(N){ie("WebGLState:",N)}}function ot(N){return d[N]!==void 0?d[N]:n.getParameter(N)}function Tt(N,lt){d[N]!==lt&&(n.pixelStorei(N,lt),d[N]=lt)}function ut(N){se.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),se.copy(N))}function ct(N){Jt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Jt.copy(N))}function At(N,lt){let j=l.get(lt);j===void 0&&(j=new WeakMap,l.set(lt,j));let ht=j.get(N);ht===void 0&&(ht=n.getUniformBlockIndex(lt,N.name),j.set(N,ht))}function Dt(N,lt){const ht=l.get(lt).get(N);c.get(lt)!==ht&&(n.uniformBlockBinding(lt,ht,N.__bindingPointIndex),c.set(lt,ht))}function Ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,et={},u={},p=new WeakMap,g=[],_=null,m=!1,f=null,M=null,T=null,y=null,w=null,b=null,A=null,x=new Pt(0,0,0),E=0,P=!1,L=null,F=null,O=null,I=null,V=null,se.set(0,0,n.canvas.width,n.canvas.height),Jt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:vt,bindFramebuffer:Ot,drawBuffers:gt,useProgram:Gt,setBlending:st,setMaterial:Nt,setFlipSided:Et,setCullFace:kt,setLineWidth:ye,setPolygonOffset:De,setScissorTest:Yt,activeTexture:Me,bindTexture:U,unbindTexture:Xe,compressedTexImage2D:le,compressedTexImage3D:R,texImage2D:K,texImage3D:J,pixelStorei:Tt,getParameter:ot,updateUBOMapping:At,uniformBlockBinding:Dt,texStorage2D:rt,texStorage3D:at,texSubImage2D:v,texSubImage3D:B,compressedTexSubImage2D:W,compressedTexSubImage3D:Z,scissor:ut,viewport:ct,reset:Ht}}function mx(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ft,h=new WeakMap,d=new Set;let u;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,v){return g?new OffscreenCanvas(R,v):ca("canvas")}function m(R,v,B){let W=1;const Z=le(R);if((Z.width>B||Z.height>B)&&(W=B/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const rt=Math.floor(W*Z.width),at=Math.floor(W*Z.height);u===void 0&&(u=_(rt,at));const K=v?_(rt,at):u;return K.width=rt,K.height=at,K.getContext("2d").drawImage(R,0,0,rt,at),Ut("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+rt+"x"+at+")."),K}else return"data"in R&&Ut("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function f(R){return R.generateMipmaps}function M(R){n.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(R,v,B,W,Z,rt=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let at;W&&(at=t.get("EXT_texture_norm16"),at||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=v;if(v===n.RED&&(B===n.FLOAT&&(K=n.R32F),B===n.HALF_FLOAT&&(K=n.R16F),B===n.UNSIGNED_BYTE&&(K=n.R8),B===n.UNSIGNED_SHORT&&at&&(K=at.R16_EXT),B===n.SHORT&&at&&(K=at.R16_SNORM_EXT)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.R8UI),B===n.UNSIGNED_SHORT&&(K=n.R16UI),B===n.UNSIGNED_INT&&(K=n.R32UI),B===n.BYTE&&(K=n.R8I),B===n.SHORT&&(K=n.R16I),B===n.INT&&(K=n.R32I)),v===n.RG&&(B===n.FLOAT&&(K=n.RG32F),B===n.HALF_FLOAT&&(K=n.RG16F),B===n.UNSIGNED_BYTE&&(K=n.RG8),B===n.UNSIGNED_SHORT&&at&&(K=at.RG16_EXT),B===n.SHORT&&at&&(K=at.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RG8UI),B===n.UNSIGNED_SHORT&&(K=n.RG16UI),B===n.UNSIGNED_INT&&(K=n.RG32UI),B===n.BYTE&&(K=n.RG8I),B===n.SHORT&&(K=n.RG16I),B===n.INT&&(K=n.RG32I)),v===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RGB8UI),B===n.UNSIGNED_SHORT&&(K=n.RGB16UI),B===n.UNSIGNED_INT&&(K=n.RGB32UI),B===n.BYTE&&(K=n.RGB8I),B===n.SHORT&&(K=n.RGB16I),B===n.INT&&(K=n.RGB32I)),v===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),B===n.UNSIGNED_INT&&(K=n.RGBA32UI),B===n.BYTE&&(K=n.RGBA8I),B===n.SHORT&&(K=n.RGBA16I),B===n.INT&&(K=n.RGBA32I)),v===n.RGB&&(B===n.UNSIGNED_SHORT&&at&&(K=at.RGB16_EXT),B===n.SHORT&&at&&(K=at.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),v===n.RGBA){const J=rt?oa:Qt.getTransfer(Z);B===n.FLOAT&&(K=n.RGBA32F),B===n.HALF_FLOAT&&(K=n.RGBA16F),B===n.UNSIGNED_BYTE&&(K=J===he?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&at&&(K=at.RGBA16_EXT),B===n.SHORT&&at&&(K=at.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function w(R,v){let B;return R?v===null||v===Fi||v===$s?B=n.DEPTH24_STENCIL8:v===bi?B=n.DEPTH32F_STENCIL8:v===Ys&&(B=n.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Fi||v===$s?B=n.DEPTH_COMPONENT24:v===bi?B=n.DEPTH_COMPONENT32F:v===Ys&&(B=n.DEPTH_COMPONENT16),B}function b(R,v){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==He&&R.minFilter!==Ge?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function A(R){const v=R.target;v.removeEventListener("dispose",A),E(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function x(R){const v=R.target;v.removeEventListener("dispose",x),L(v)}function E(R){const v=i.get(R);if(v.__webglInit===void 0)return;const B=R.source,W=p.get(B);if(W){const Z=W[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(R),Object.keys(W).length===0&&p.delete(B)}i.remove(R)}function P(R){const v=i.get(R);n.deleteTexture(v.__webglTexture);const B=R.source,W=p.get(B);delete W[v.__cacheKey],a.memory.textures--}function L(R){const v=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let Z=0;Z<v.__webglFramebuffer[W].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[W][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)n.deleteFramebuffer(v.__webglFramebuffer[W]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=R.textures;for(let W=0,Z=B.length;W<Z;W++){const rt=i.get(B[W]);rt.__webglTexture&&(n.deleteTexture(rt.__webglTexture),a.memory.textures--),i.remove(B[W])}i.remove(R)}let F=0;function O(){F=0}function I(){return F}function V(R){F=R}function z(){const R=F;return R>=s.maxTextures&&Ut("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,R}function Y(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function it(R,v){const B=i.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const W=R.image;if(W===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(B,R,v);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function q(R,v){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){vt(B,R,v);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function Q(R,v){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){vt(B,R,v);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function et(R,v){const B=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){Ot(B,R,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}const Rt={[Yo]:n.REPEAT,[qi]:n.CLAMP_TO_EDGE,[$o]:n.MIRRORED_REPEAT},yt={[He]:n.NEAREST,[_p]:n.NEAREST_MIPMAP_NEAREST,[rr]:n.NEAREST_MIPMAP_LINEAR,[Ge]:n.LINEAR,[Oa]:n.LINEAR_MIPMAP_NEAREST,[An]:n.LINEAR_MIPMAP_LINEAR},se={[Mp]:n.NEVER,[Tp]:n.ALWAYS,[Sp]:n.LESS,[rl]:n.LEQUAL,[bp]:n.EQUAL,[al]:n.GEQUAL,[Ep]:n.GREATER,[wp]:n.NOTEQUAL};function Jt(R,v){if(v.type===bi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ge||v.magFilter===Oa||v.magFilter===rr||v.magFilter===An||v.minFilter===Ge||v.minFilter===Oa||v.minFilter===rr||v.minFilter===An)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Rt[v.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Rt[v.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Rt[v.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,yt[v.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,yt[v.minFilter]),v.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,se[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===He||v.minFilter!==rr&&v.minFilter!==An||v.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function te(R,v){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",A));const W=v.source;let Z=p.get(W);Z===void 0&&(Z={},p.set(W,Z));const rt=Y(v);if(rt!==R.__cacheKey){Z[rt]===void 0&&(Z[rt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[rt].usedTimes++;const at=Z[R.__cacheKey];at!==void 0&&(Z[R.__cacheKey].usedTimes--,at.usedTimes===0&&P(v)),R.__cacheKey=rt,R.__webglTexture=Z[rt].texture}return B}function $(R,v,B){return Math.floor(Math.floor(R/B)/v)}function tt(R,v,B,W){const rt=R.updateRanges;if(rt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,B,W,v.data);else{rt.sort((Tt,ut)=>Tt.start-ut.start);let at=0;for(let Tt=1;Tt<rt.length;Tt++){const ut=rt[at],ct=rt[Tt],At=ut.start+ut.count,Dt=$(ct.start,v.width,4),Ht=$(ut.start,v.width,4);ct.start<=At+1&&Dt===Ht&&$(ct.start+ct.count-1,v.width,4)===Dt?ut.count=Math.max(ut.count,ct.start+ct.count-ut.start):(++at,rt[at]=ct)}rt.length=at+1;const K=e.getParameter(n.UNPACK_ROW_LENGTH),J=e.getParameter(n.UNPACK_SKIP_PIXELS),ot=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Tt=0,ut=rt.length;Tt<ut;Tt++){const ct=rt[Tt],At=Math.floor(ct.start/4),Dt=Math.ceil(ct.count/4),Ht=At%v.width,N=Math.floor(At/v.width),lt=Dt,j=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Ht),e.pixelStorei(n.UNPACK_SKIP_ROWS,N),e.texSubImage2D(n.TEXTURE_2D,0,Ht,N,lt,j,B,W,v.data)}R.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,K),e.pixelStorei(n.UNPACK_SKIP_PIXELS,J),e.pixelStorei(n.UNPACK_SKIP_ROWS,ot)}}function vt(R,v,B){let W=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=n.TEXTURE_3D);const Z=te(R,v),rt=v.source;e.bindTexture(W,R.__webglTexture,n.TEXTURE0+B);const at=i.get(rt);if(rt.version!==at.__version||Z===!0){if(e.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const j=Qt.getPrimaries(Qt.workingColorSpace),ht=v.colorSpace===un?null:Qt.getPrimaries(v.colorSpace),mt=v.colorSpace===un||j===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let J=m(v.image,!1,s.maxTextureSize);J=Xe(v,J);const ot=r.convert(v.format,v.colorSpace),Tt=r.convert(v.type);let ut=y(v.internalFormat,ot,Tt,v.normalized,v.colorSpace,v.isVideoTexture);Jt(W,v);let ct;const At=v.mipmaps,Dt=v.isVideoTexture!==!0,Ht=at.__version===void 0||Z===!0,N=rt.dataReady,lt=b(v,J);if(v.isDepthTexture)ut=w(v.format===Rn,v.type),Ht&&(Dt?e.texStorage2D(n.TEXTURE_2D,1,ut,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,ut,J.width,J.height,0,ot,Tt,null));else if(v.isDataTexture)if(At.length>0){Dt&&Ht&&e.texStorage2D(n.TEXTURE_2D,lt,ut,At[0].width,At[0].height);for(let j=0,ht=At.length;j<ht;j++)ct=At[j],Dt?N&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,ct.width,ct.height,ot,Tt,ct.data):e.texImage2D(n.TEXTURE_2D,j,ut,ct.width,ct.height,0,ot,Tt,ct.data);v.generateMipmaps=!1}else Dt?(Ht&&e.texStorage2D(n.TEXTURE_2D,lt,ut,J.width,J.height),N&&tt(v,J,ot,Tt)):e.texImage2D(n.TEXTURE_2D,0,ut,J.width,J.height,0,ot,Tt,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Dt&&Ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,ut,At[0].width,At[0].height,J.depth);for(let j=0,ht=At.length;j<ht;j++)if(ct=At[j],v.format!==Ei)if(ot!==null)if(Dt){if(N)if(v.layerUpdates.size>0){const mt=Rh(ct.width,ct.height,v.format,v.type);for(const nt of v.layerUpdates){const Ct=ct.data.subarray(nt*mt/ct.data.BYTES_PER_ELEMENT,(nt+1)*mt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,nt,ct.width,ct.height,1,ot,Ct)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ct.width,ct.height,J.depth,ot,ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,ut,ct.width,ct.height,J.depth,0,ct.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ct.width,ct.height,J.depth,ot,Tt,ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,j,ut,ct.width,ct.height,J.depth,0,ot,Tt,ct.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Dt&&Ht&&e.texStorage2D(n.TEXTURE_2D,lt,ut,At[0].width,At[0].height);for(let j=0,ht=At.length;j<ht;j++)ct=At[j],v.format!==Ei?ot!==null?Dt?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,ct.width,ct.height,ot,ct.data):e.compressedTexImage2D(n.TEXTURE_2D,j,ut,ct.width,ct.height,0,ct.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?N&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,ct.width,ct.height,ot,Tt,ct.data):e.texImage2D(n.TEXTURE_2D,j,ut,ct.width,ct.height,0,ot,Tt,ct.data)}else if(v.isDataArrayTexture)if(Dt){if(Ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,ut,J.width,J.height,J.depth),N)if(v.layerUpdates.size>0){const j=Rh(J.width,J.height,v.format,v.type);for(const ht of v.layerUpdates){const mt=J.data.subarray(ht*j/J.data.BYTES_PER_ELEMENT,(ht+1)*j/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ht,J.width,J.height,1,ot,Tt,mt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ot,Tt,J.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ut,J.width,J.height,J.depth,0,ot,Tt,J.data);else if(v.isData3DTexture)Dt?(Ht&&e.texStorage3D(n.TEXTURE_3D,lt,ut,J.width,J.height,J.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ot,Tt,J.data)):e.texImage3D(n.TEXTURE_3D,0,ut,J.width,J.height,J.depth,0,ot,Tt,J.data);else if(v.isFramebufferTexture){if(Ht)if(Dt)e.texStorage2D(n.TEXTURE_2D,lt,ut,J.width,J.height);else{let j=J.width,ht=J.height;for(let mt=0;mt<lt;mt++)e.texImage2D(n.TEXTURE_2D,mt,ut,j,ht,0,ot,Tt,null),j>>=1,ht>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){const j=n.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),J.parentNode!==j){j.appendChild(J),d.add(v),j.onpaint=ht=>{const mt=ht.changedElements;for(const nt of d)mt.includes(nt.image)&&(nt.needsUpdate=!0)},j.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,J);else{const mt=n.RGBA,nt=n.RGBA,Ct=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,mt,nt,Ct,J)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(At.length>0){if(Dt&&Ht){const j=le(At[0]);e.texStorage2D(n.TEXTURE_2D,lt,ut,j.width,j.height)}for(let j=0,ht=At.length;j<ht;j++)ct=At[j],Dt?N&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,ot,Tt,ct):e.texImage2D(n.TEXTURE_2D,j,ut,ot,Tt,ct);v.generateMipmaps=!1}else if(Dt){if(Ht){const j=le(J);e.texStorage2D(n.TEXTURE_2D,lt,ut,j.width,j.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot,Tt,J)}else e.texImage2D(n.TEXTURE_2D,0,ut,ot,Tt,J);f(v)&&M(W),at.__version=rt.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Ot(R,v,B){if(v.image.length!==6)return;const W=te(R,v),Z=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+B);const rt=i.get(Z);if(Z.version!==rt.__version||W===!0){e.activeTexture(n.TEXTURE0+B);const at=Qt.getPrimaries(Qt.workingColorSpace),K=v.colorSpace===un?null:Qt.getPrimaries(v.colorSpace),J=v.colorSpace===un||at===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ot=v.isCompressedTexture||v.image[0].isCompressedTexture,Tt=v.image[0]&&v.image[0].isDataTexture,ut=[];for(let nt=0;nt<6;nt++)!ot&&!Tt?ut[nt]=m(v.image[nt],!0,s.maxCubemapSize):ut[nt]=Tt?v.image[nt].image:v.image[nt],ut[nt]=Xe(v,ut[nt]);const ct=ut[0],At=r.convert(v.format,v.colorSpace),Dt=r.convert(v.type),Ht=y(v.internalFormat,At,Dt,v.normalized,v.colorSpace),N=v.isVideoTexture!==!0,lt=rt.__version===void 0||W===!0,j=Z.dataReady;let ht=b(v,ct);Jt(n.TEXTURE_CUBE_MAP,v);let mt;if(ot){N&&lt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ht,Ht,ct.width,ct.height);for(let nt=0;nt<6;nt++){mt=ut[nt].mipmaps;for(let Ct=0;Ct<mt.length;Ct++){const bt=mt[Ct];v.format!==Ei?At!==null?N?j&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct,0,0,bt.width,bt.height,At,bt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct,Ht,bt.width,bt.height,0,bt.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct,0,0,bt.width,bt.height,At,Dt,bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct,Ht,bt.width,bt.height,0,At,Dt,bt.data)}}}else{if(mt=v.mipmaps,N&&lt){mt.length>0&&ht++;const nt=le(ut[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ht,Ht,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(Tt){N?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ut[nt].width,ut[nt].height,At,Dt,ut[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ht,ut[nt].width,ut[nt].height,0,At,Dt,ut[nt].data);for(let Ct=0;Ct<mt.length;Ct++){const pe=mt[Ct].image[nt].image;N?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct+1,0,0,pe.width,pe.height,At,Dt,pe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct+1,Ht,pe.width,pe.height,0,At,Dt,pe.data)}}else{N?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,At,Dt,ut[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ht,At,Dt,ut[nt]);for(let Ct=0;Ct<mt.length;Ct++){const bt=mt[Ct];N?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct+1,0,0,At,Dt,bt.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct+1,Ht,At,Dt,bt.image[nt])}}}f(v)&&M(n.TEXTURE_CUBE_MAP),rt.__version=Z.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function gt(R,v,B,W,Z,rt){const at=r.convert(B.format,B.colorSpace),K=r.convert(B.type),J=y(B.internalFormat,at,K,B.normalized,B.colorSpace),ot=i.get(v),Tt=i.get(B);if(Tt.__renderTarget=v,!ot.__hasExternalTextures){const ut=Math.max(1,v.width>>rt),ct=Math.max(1,v.height>>rt);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,rt,J,ut,ct,v.depth,0,at,K,null):e.texImage2D(Z,rt,J,ut,ct,0,at,K,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),Me(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Z,Tt.__webglTexture,0,Yt(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Z,Tt.__webglTexture,rt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Gt(R,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,R),v.depthBuffer){const W=v.depthTexture,Z=W&&W.isDepthTexture?W.type:null,rt=w(v.stencilBuffer,Z),at=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Me(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Yt(v),rt,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Yt(v),rt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,rt,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,R)}else{const W=v.textures;for(let Z=0;Z<W.length;Z++){const rt=W[Z],at=r.convert(rt.format,rt.colorSpace),K=r.convert(rt.type),J=y(rt.internalFormat,at,K,rt.normalized,rt.colorSpace);Me(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Yt(v),J,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Yt(v),J,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,J,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xe(R,v,B){const W=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=i.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Jt(n.TEXTURE_CUBE_MAP,v.depthTexture);const ot=r.convert(v.depthTexture.format),Tt=r.convert(v.depthTexture.type);let ut;v.depthTexture.format===Ji?ut=n.DEPTH_COMPONENT24:v.depthTexture.format===Rn&&(ut=n.DEPTH24_STENCIL8);for(let ct=0;ct<6;ct++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ut,v.width,v.height,0,ot,Tt,null)}}else it(v.depthTexture,0);const rt=Z.__webglTexture,at=Yt(v),K=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,J=v.depthTexture.format===Rn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ji)Me(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,K,rt,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,J,K,rt,0);else if(v.depthTexture.format===Rn)Me(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,K,rt,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,J,K,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function qt(R){const v=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const W=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=W}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let W=0;W<6;W++)xe(v.__webglFramebuffer[W],R,W);else{const W=R.texture.mipmaps;W&&W.length>0?xe(v.__webglFramebuffer[0],R,0):xe(v.__webglFramebuffer,R,0)}else if(B){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=n.createRenderbuffer(),Gt(v.__webglDepthbuffer[W],R,!1);else{const Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=v.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,rt)}}else{const W=R.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Gt(v.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,rt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function st(R,v,B){const W=i.get(R);v!==void 0&&gt(W.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&qt(R)}function Nt(R){const v=R.texture,B=i.get(R),W=i.get(v);R.addEventListener("dispose",x);const Z=R.textures,rt=R.isWebGLCubeRenderTarget===!0,at=Z.length>1;if(at||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=v.version,a.memory.textures++),rt){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let J=0;J<v.mipmaps.length;J++)B.__webglFramebuffer[K][J]=n.createFramebuffer()}else B.__webglFramebuffer[K]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<v.mipmaps.length;K++)B.__webglFramebuffer[K]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(at)for(let K=0,J=Z.length;K<J;K++){const ot=i.get(Z[K]);ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Me(R)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<Z.length;K++){const J=Z[K];B.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[K]);const ot=r.convert(J.format,J.colorSpace),Tt=r.convert(J.type),ut=y(J.internalFormat,ot,Tt,J.normalized,J.colorSpace,R.isXRRenderTarget===!0),ct=Yt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,ut,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,B.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Gt(B.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(rt){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Jt(n.TEXTURE_CUBE_MAP,v);for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)gt(B.__webglFramebuffer[K][J],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,J);else gt(B.__webglFramebuffer[K],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);f(v)&&M(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let K=0,J=Z.length;K<J;K++){const ot=Z[K],Tt=i.get(ot);let ut=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ut=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,Tt.__webglTexture),Jt(ut,ot),gt(B.__webglFramebuffer,R,ot,n.COLOR_ATTACHMENT0+K,ut,0),f(ot)&&M(ut)}e.unbindTexture()}else{let K=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,W.__webglTexture),Jt(K,v),v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)gt(B.__webglFramebuffer[J],R,v,n.COLOR_ATTACHMENT0,K,J);else gt(B.__webglFramebuffer,R,v,n.COLOR_ATTACHMENT0,K,0);f(v)&&M(K),e.unbindTexture()}R.depthBuffer&&qt(R)}function Et(R){const v=R.textures;for(let B=0,W=v.length;B<W;B++){const Z=v[B];if(f(Z)){const rt=T(R),at=i.get(Z).__webglTexture;e.bindTexture(rt,at),M(rt),e.unbindTexture()}}}const kt=[],ye=[];function De(R){if(R.samples>0){if(Me(R)===!1){const v=R.textures,B=R.width,W=R.height;let Z=n.COLOR_BUFFER_BIT;const rt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=i.get(R),K=v.length>1;if(K)for(let ot=0;ot<v.length;ot++)e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);const J=R.texture.mipmaps;J&&J.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let ot=0;ot<v.length;ot++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);const Tt=i.get(v[ot]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Tt,0)}n.blitFramebuffer(0,0,B,W,0,0,B,W,Z,n.NEAREST),c===!0&&(kt.length=0,ye.length=0,kt.push(n.COLOR_ATTACHMENT0+ot),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(kt.push(rt),ye.push(rt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ye)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let ot=0;ot<v.length;ot++){e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);const Tt=i.get(v[ot]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,Tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){const v=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Yt(R){return Math.min(s.maxSamples,R.samples)}function Me(R){const v=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function U(R){const v=a.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function Xe(R,v){const B=R.colorSpace,W=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==aa&&B!==un&&(Qt.getTransfer(B)===he?(W!==Ei||Z!==ri)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",B)),v}function le(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.getTextureUnits=I,this.setTextureUnits=V,this.setTexture2D=it,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=et,this.rebindTextures=st,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function gx(n,t){function e(i,s=un){let r;const a=Qt.getTransfer(s);if(i===ri)return n.UNSIGNED_BYTE;if(i===Qc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===tl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===qu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Vu)return n.BYTE;if(i===Wu)return n.SHORT;if(i===Ys)return n.UNSIGNED_SHORT;if(i===Jc)return n.INT;if(i===Fi)return n.UNSIGNED_INT;if(i===bi)return n.FLOAT;if(i===Oi)return n.HALF_FLOAT;if(i===Yu)return n.ALPHA;if(i===$u)return n.RGB;if(i===Ei)return n.RGBA;if(i===Ji)return n.DEPTH_COMPONENT;if(i===Rn)return n.DEPTH_STENCIL;if(i===el)return n.RED;if(i===il)return n.RED_INTEGER;if(i===Dn)return n.RG;if(i===nl)return n.RG_INTEGER;if(i===sl)return n.RGBA_INTEGER;if(i===Vr||i===Wr||i===Xr||i===qr)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zo||i===Ko||i===jo||i===Jo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ko)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qo||i===tc||i===ec||i===ic||i===nc||i===sa||i===sc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Qo||i===tc)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ec)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ic)return r.COMPRESSED_R11_EAC;if(i===nc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===sa)return r.COMPRESSED_RG11_EAC;if(i===sc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===rc||i===ac||i===oc||i===cc||i===lc||i===hc||i===uc||i===dc||i===fc||i===pc||i===mc||i===gc||i===_c||i===vc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===rc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ac)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_c)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xc||i===yc||i===Mc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===xc)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sc||i===bc||i===ra||i===Ec)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Sc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const _x=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vx=`
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

}`;class xx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new od(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new We({vertexShader:_x,fragmentShader:vx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Lt(new Qi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yx extends mn{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new xx,f={},M=e.getContextAttributes();let T=null,y=null;const w=[],b=[],A=new Ft;let x=null,E=null;const P=new ti;P.viewport=new be;const L=new ti;L.viewport=new be;const F=[P,L],O=new Rm;let I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let tt=w[$];return tt===void 0&&(tt=new Wa,w[$]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function($){let tt=w[$];return tt===void 0&&(tt=new Wa,w[$]=tt),tt.getGripSpace()},this.getHand=function($){let tt=w[$];return tt===void 0&&(tt=new Wa,w[$]=tt),tt.getHandSpace()};function z($){const tt=b.indexOf($.inputSource);if(tt===-1)return;const vt=w[tt];vt!==void 0&&(vt.update($.inputSource,$.frame,l||a),vt.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",it);for(let $=0;$<w.length;$++){const tt=b[$];tt!==null&&(b[$]=null,w[$].disconnect(tt))}I=null,V=null,m.reset();for(const $ in f)delete f[$];if(t.setRenderTarget(T),p=null,u=null,d=null,s=null,y=null,te.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(A.width,A.height,!1),E!==null){const $=E.camera;$.fov=E.fov,$.zoom=E.zoom,$.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",it),M.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Ot=null,gt=null;M.depth&&(gt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=M.stencil?Rn:Ji,Ot=M.stencil?$s:Fi);const Gt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Gt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new di(u.textureWidth,u.textureHeight,{format:Ei,type:ri,depthTexture:new Js(u.textureWidth,u.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const vt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new di(p.framebufferWidth,p.framebufferHeight,{format:Ei,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),te.setContext(s),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it($){for(let tt=0;tt<$.removed.length;tt++){const vt=$.removed[tt],Ot=b.indexOf(vt);Ot>=0&&(b[Ot]=null,w[Ot].disconnect(vt))}for(let tt=0;tt<$.added.length;tt++){const vt=$.added[tt];let Ot=b.indexOf(vt);if(Ot===-1){for(let Gt=0;Gt<w.length;Gt++)if(Gt>=b.length){b.push(vt),Ot=Gt;break}else if(b[Gt]===null){b[Gt]=vt,Ot=Gt;break}if(Ot===-1)break}const gt=w[Ot];gt&&gt.connect(vt)}}const q=new C,Q=new C;function et($,tt,vt){q.setFromMatrixPosition(tt.matrixWorld),Q.setFromMatrixPosition(vt.matrixWorld);const Ot=q.distanceTo(Q),gt=tt.projectionMatrix.elements,Gt=vt.projectionMatrix.elements,xe=gt[14]/(gt[10]-1),qt=gt[14]/(gt[10]+1),st=(gt[9]+1)/gt[5],Nt=(gt[9]-1)/gt[5],Et=(gt[8]-1)/gt[0],kt=(Gt[8]+1)/Gt[0],ye=xe*Et,De=xe*kt,Yt=Ot/(-Et+kt),Me=Yt*-Et;if(tt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Me),$.translateZ(Yt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),gt[10]===-1)$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const U=xe+Yt,Xe=qt+Yt,le=ye-Me,R=De+(Ot-Me),v=st*qt/Xe*U,B=Nt*qt/Xe*U;$.projectionMatrix.makePerspective(le,R,v,B,U,Xe),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Rt($,tt){tt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(tt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let tt=$.near,vt=$.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),O.near=L.near=P.near=tt,O.far=L.far=P.far=vt,(I!==O.near||V!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),I=O.near,V=O.far),O.layers.mask=$.layers.mask|6,P.layers.mask=O.layers.mask&-5,L.layers.mask=O.layers.mask&-3;const Ot=$.parent,gt=O.cameras;Rt(O,Ot);for(let Gt=0;Gt<gt.length;Gt++)Rt(gt[Gt],Ot);gt.length===2?et(O,P,L):O.projectionMatrix.copy(P.projectionMatrix),E===null&&$.isPerspectiveCamera&&(E={camera:$,fov:$.fov,zoom:$.zoom}),yt($,O,Ot)};function yt($,tt,vt){vt===null?$.matrix.copy(tt.matrixWorld):($.matrix.copy(vt.matrixWorld),$.matrix.invert(),$.matrix.multiply(tt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ks*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function($){c=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function($){return f[$]};let se=null;function Jt($,tt){if(h=tt.getViewerPose(l||a),g=tt,h!==null){const vt=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Ot=!1;vt.length!==O.cameras.length&&(O.cameras.length=0,Ot=!0);for(let qt=0;qt<vt.length;qt++){const st=vt[qt];let Nt=null;if(p!==null)Nt=p.getViewport(st);else{const kt=d.getViewSubImage(u,st);Nt=kt.viewport,qt===0&&(t.setRenderTargetTextures(y,kt.colorTexture,kt.depthStencilTexture),t.setRenderTarget(y))}let Et=F[qt];Et===void 0&&(Et=new ti,Et.layers.enable(qt),Et.viewport=new be,F[qt]=Et),Et.matrix.fromArray(st.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(st.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),qt===0&&(O.matrix.copy(Et.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ot===!0&&O.cameras.push(Et)}const gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const qt=d.getDepthInformation(vt[0]);qt&&qt.isValid&&qt.texture&&m.init(qt,s.renderState)}if(gt&&gt.includes("camera-access")&&_){t.state.unbindTexture(),d=i.getBinding();for(let qt=0;qt<vt.length;qt++){const st=vt[qt].camera;if(st){let Nt=f[st];Nt||(Nt=new od,f[st]=Nt);const Et=d.getCameraImage(st);Nt.sourceTexture=Et}}}}for(let vt=0;vt<w.length;vt++){const Ot=b[vt],gt=w[vt];Ot!==null&&gt!==void 0&&gt.update(Ot,tt,l||a)}se&&se($,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),g=null}const te=new dd;te.setAnimationLoop(Jt),this.setAnimationLoop=function($){se=$},this.dispose=function(){}}}const Mx=new ne,xd=new zt;xd.set(-1,0,0,0,1,0,0,0,1);function Sx(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,cd(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,T,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,M,T):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ii&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ii&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=t.get(f),T=M.envMap,y=M.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(Mx.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(xd),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,M,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=T*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ii&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function bx(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,w){const b=w.program;i.uniformBlockBinding(y,b)}function l(y,w){let b=s[y.id];b===void 0&&(m(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",M));const A=w.program;i.updateUBOMapping(y,A);const x=t.render.frame;r[y.id]!==x&&(u(y),r[y.id]=x)}function h(y){const w=d();y.__bindingPointIndex=w;const b=n.createBuffer(),A=y.__size,x=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,A,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,b),b}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const w=s[y.id],b=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let x=0,E=b.length;x<E;x++){const P=b[x];if(Array.isArray(P))for(let L=0,F=P.length;L<F;L++)p(P[L],x,L,A);else p(P,x,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,w,b,A){if(_(y,w,b,A)===!0){const x=y.__offset,E=y.value;if(Array.isArray(E)){let P=0;for(let L=0;L<E.length;L++){const F=E[L],O=f(F);g(F,y.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,y.__data)}}function g(y,w,b){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,b)}function _(y,w,b,A){const x=y.value,E=w+"_"+b;if(A[E]===void 0)return typeof x=="number"||typeof x=="boolean"?A[E]=x:ArrayBuffer.isView(x)?A[E]=x.slice():A[E]=x.clone(),!0;{const P=A[E];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return A[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function m(y){const w=y.uniforms;let b=0;const A=16;for(let E=0,P=w.length;E<P;E++){const L=Array.isArray(w[E])?w[E]:[w[E]];for(let F=0,O=L.length;F<O;F++){const I=L[F],V=Array.isArray(I.value)?I.value:[I.value];for(let z=0,Y=V.length;z<Y;z++){const it=V[z],q=f(it),Q=b%A,et=Q%q.boundary,Rt=Q+et;b+=et,Rt!==0&&A-Rt<q.storage&&(b+=A-Rt),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=q.storage}}}const x=b%A;return x>0&&(b+=A-x),y.__size=b,y.__cache={},this}function f(y){const w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",y),w}function M(y){const w=y.target;w.removeEventListener("dispose",M);const b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function T(){for(const y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:T}}const Ex=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ri=null;function wx(){return Ri===null&&(Ri=new fl(Ex,16,16,Dn,Oi),Ri.name="DFG_LUT",Ri.minFilter=Ge,Ri.magFilter=Ge,Ri.wrapS=qi,Ri.wrapT=qi,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}class yd{constructor(t={}){const{canvas:e=Rp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=ri}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const _=p,m=new Set([sl,nl,il]),f=new Set([ri,Fi,Ys,$s,Qc,tl]),M=new Uint32Array(4),T=new Int32Array(4),y=new C;let w=null,b=null;const A=[],x=[];let E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let L=!1,F=null,O=null,I=null,V=null;this._outputColorSpace=ci;let z=0,Y=0,it=null,q=-1,Q=null;const et=new be,Rt=new be;let yt=null;const se=new Pt(0);let Jt=0,te=e.width,$=e.height,tt=1,vt=null,Ot=null;const gt=new be(0,0,te,$),Gt=new be(0,0,te,$);let xe=!1;const qt=new pl;let st=!1,Nt=!1;const Et=new ne,kt=new C,ye=new be,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function Me(){return it===null?tt:1}let U=i;function Xe(S,D){return e.getContext(S,D)}let le,R,v,B,W,Z,rt,at,K,J,ot,Tt,ut,ct,At,Dt,Ht,N,lt,j,ht,mt,nt;try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${jc}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",oe,!1),e.addEventListener("webglcontextcreationerror",pi,!1),U===null){const D="webgl2";if(U=Xe(D,S),U===null)throw Xe(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ct()}catch(S){throw e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",pi,!1),ie("WebGLRenderer: "+S.message),S}function Ct(){le=new w_(U),le.init(),ht=new gx(U,le),R=new m_(U,le,t,ht),v=new px(U,le),R.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),O=U.createFramebuffer(),I=U.createFramebuffer(),V=U.createFramebuffer(),B=new R_(U),W=new tx,Z=new mx(U,le,v,W,R,ht,B),rt=new E_(P),at=new Pm(U),mt=new f_(U,at),K=new T_(U,at,B,mt),J=new P_(U,K,at,mt,B),N=new C_(U,R,Z),At=new g_(W),ot=new Qv(P,rt,le,R,mt,At),Tt=new Sx(P,W),ut=new ix,ct=new cx(le),Ht=new d_(P,rt,v,J,g,c),Dt=new fx(P,J,R),nt=new bx(U,B,R,v),lt=new p_(U,le,B),j=new A_(U,le,B),B.programs=ot.programs,P.capabilities=R,P.extensions=le,P.properties=W,P.renderLists=ut,P.shadowMap=Dt,P.state=v,P.info=B}_!==ri&&(E=new I_(_,e.width,e.height,o,s,r));const bt=new yx(P,U);this.xr=bt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=le.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=le.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(S){S!==void 0&&(tt=S,this.setSize(te,$,!1))},this.getSize=function(S){return S.set(te,$)},this.setSize=function(S,D,X=!0){if(bt.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}te=S,$=D,e.width=Math.floor(S*tt),e.height=Math.floor(D*tt),X===!0&&(e.style.width=S+"px",e.style.height=D+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(te*tt,$*tt).floor()},this.setDrawingBufferSize=function(S,D,X){te=S,$=D,tt=X,e.width=Math.floor(S*X),e.height=Math.floor(D*X),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(_===ri){ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(et)},this.getViewport=function(S){return S.copy(gt)},this.setViewport=function(S,D,X,H){S.isVector4?gt.set(S.x,S.y,S.z,S.w):gt.set(S,D,X,H),v.viewport(et.copy(gt).multiplyScalar(tt).round())},this.getScissor=function(S){return S.copy(Gt)},this.setScissor=function(S,D,X,H){S.isVector4?Gt.set(S.x,S.y,S.z,S.w):Gt.set(S,D,X,H),v.scissor(Rt.copy(Gt).multiplyScalar(tt).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(S){v.setScissorTest(xe=S)},this.setOpaqueSort=function(S){vt=S},this.setTransparentSort=function(S){Ot=S},this.getClearColor=function(S){return S.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor(...arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,X=!0){let H=0;if(S){let G=!1;if(it!==null){const pt=it.texture.format;G=m.has(pt)}if(G){const pt=it.texture.type,xt=f.has(pt),ft=Ht.getClearColor(),Mt=Ht.getClearAlpha(),wt=ft.r,Vt=ft.g,jt=ft.b;xt?(M[0]=wt,M[1]=Vt,M[2]=jt,M[3]=Mt,U.clearBufferuiv(U.COLOR,0,M)):(T[0]=wt,T[1]=Vt,T[2]=jt,T[3]=Mt,U.clearBufferiv(U.COLOR,0,T))}else H|=U.COLOR_BUFFER_BIT}D&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",pi,!1),Ht.dispose(),ut.dispose(),ct.dispose(),W.dispose(),rt.dispose(),J.dispose(),mt.dispose(),nt.dispose(),ot.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Il),bt.removeEventListener("sessionend",Dl),_n.stop()};function pe(S){S.preventDefault(),la("WebGLRenderer: Context Lost."),L=!0}function oe(){la("WebGLRenderer: Context Restored."),L=!1;const S=B.autoReset,D=Dt.enabled,X=Dt.autoUpdate,H=Dt.needsUpdate,G=Dt.type;Ct(),B.autoReset=S,Dt.enabled=D,Dt.autoUpdate=X,Dt.needsUpdate=H,Dt.type=G}function pi(S){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function wi(S){const D=S.target;D.removeEventListener("dispose",wi),xf(D)}function xf(S){yf(S),W.remove(S)}function yf(S){const D=W.get(S).programs;D!==void 0&&(D.forEach(function(X){ot.releaseProgram(X)}),S.isShaderMaterial&&ot.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,X,H,G,pt){D===null&&(D=De);const xt=G.isMesh&&G.matrixWorld.determinantAffine()<0,ft=bf(S,D,X,H,G);v.setMaterial(H,xt);let Mt=X.index,wt=1;if(H.wireframe===!0){if(Mt=K.getWireframeAttribute(X),Mt===void 0)return;wt=2}const Vt=X.drawRange,jt=X.attributes.position;let St=Vt.start*wt,ce=(Vt.start+Vt.count)*wt;pt!==null&&(St=Math.max(St,pt.start*wt),ce=Math.min(ce,(pt.start+pt.count)*wt)),Mt!==null?(St=Math.max(St,0),ce=Math.min(ce,Mt.count)):jt!=null&&(St=Math.max(St,0),ce=Math.min(ce,jt.count));const Ce=ce-St;if(Ce<0||Ce===1/0)return;mt.setup(G,H,ft,X,Mt);let _e,fe=lt;if(Mt!==null&&(_e=at.get(Mt),fe=j,fe.setIndex(_e)),G.isMesh)H.wireframe===!0?(v.setLineWidth(H.wireframeLinewidth*Me()),fe.setMode(U.LINES)):fe.setMode(U.TRIANGLES);else if(G.isLine){let qe=H.linewidth;qe===void 0&&(qe=1),v.setLineWidth(qe*Me()),G.isLineSegments?fe.setMode(U.LINES):G.isLineLoop?fe.setMode(U.LINE_LOOP):fe.setMode(U.LINE_STRIP)}else G.isPoints?fe.setMode(U.POINTS):G.isSprite&&fe.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(le.get("WEBGL_multi_draw"))fe.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const qe=G._multiDrawStarts,_t=G._multiDrawCounts,Ze=G._multiDrawCount,ee=Mt?at.get(Mt).bytesPerElement:1,ai=W.get(H).currentProgram.getUniforms();for(let Ti=0;Ti<Ze;Ti++)ai.setValue(U,"_gl_DrawID",Ti),fe.render(qe[Ti]/ee,_t[Ti])}else if(G.isInstancedMesh)fe.renderInstances(St,Ce,G.count);else if(X.isInstancedBufferGeometry){const qe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,_t=Math.min(X.instanceCount,qe);fe.renderInstances(St,Ce,_t)}else fe.render(St,Ce)};function Ll(S,D,X,H){F!==null&&S.isNodeMaterial&&F.setObject(H,S),st===!0&&At.setState(S,X,!1),S.transparent===!0&&S.side===Le&&S.forceSinglePass===!1?(S.side=ii,S.needsUpdate=!0,nr(S,D,H),S.side=Ln,S.needsUpdate=!0,nr(S,D,H),S.side=Le):nr(S,D,H)}this.compile=function(S,D,X=null){X===null&&(X=S),F!==null&&F.renderStart(S,D,X),b=ct.get(X),b.init(D),x.push(b),X.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),S!==X&&S.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),b.setupLights(),F!==null&&F.updateLights(b.state.lightsArray),Nt=this.localClippingEnabled,st=At.init(this.clippingPlanes,Nt),st===!0&&At.setGlobalState(this.clippingPlanes,D),F!==null&&Dt.render(b.state.shadowsArray,X,D);const H=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const pt=G.material;if(pt)if(Array.isArray(pt))for(let xt=0;xt<pt.length;xt++){const ft=pt[xt];Ll(ft,X,D,G),H.add(ft)}else Ll(pt,X,D,G),H.add(pt)}),b=x.pop(),F!==null&&F.renderEnd(),H},this.compileAsync=function(S,D,X=null){const H=this.compile(S,D,X);return new Promise(G=>{function pt(){if(H.forEach(function(xt){const Mt=W.get(xt).currentProgram;(Mt===void 0||Mt.isReady())&&H.delete(xt)}),H.size===0){G(S);return}setTimeout(pt,10)}le.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Ia=null;function Mf(S){Ia&&Ia(S)}function Il(){_n.stop()}function Dl(){_n.start()}const _n=new dd;_n.setAnimationLoop(Mf),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(S){Ia=S,bt.setAnimationLoop(S),S===null?_n.stop():_n.start()},bt.addEventListener("sessionstart",Il),bt.addEventListener("sessionend",Dl),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(S,D);const X=bt.enabled===!0&&bt.isPresenting===!0,H=E!==null&&(it===null||X)&&E.begin(P,it);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(D),D=bt.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,D,it),b=ct.get(S,x.length),b.init(D),b.state.textureUnits=Z.getTextureUnits(),x.push(b),Et.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),qt.setFromProjectionMatrix(Et,Di,D.reversedDepth),Nt=this.localClippingEnabled,st=At.init(this.clippingPlanes,Nt),w=ut.get(S,A.length),w.init(),A.push(w),bt.enabled===!0&&bt.isPresenting===!0){const xt=P.xr.getDepthSensingMesh();xt!==null&&Da(xt,D,-1/0,P.sortObjects)}Da(S,D,0,P.sortObjects),w.finish(),F!==null&&F.updateLights(b.state.lightsArray),P.sortObjects===!0&&w.sort(vt,Ot),Yt=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Yt&&Ht.addToRenderList(w,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&At.beginShadows();const G=b.state.shadowsArray;if(Dt.render(G,S,D),st===!0&&At.endShadows(),(H&&E.hasRenderPass())===!1){const xt=w.opaque,ft=w.transmissive;if(b.setupLights(),D.isArrayCamera){const Mt=D.cameras;if(ft.length>0)for(let wt=0,Vt=Mt.length;wt<Vt;wt++){const jt=Mt[wt];Ul(xt,ft,S,jt)}Yt&&Ht.render(S);for(let wt=0,Vt=Mt.length;wt<Vt;wt++){const jt=Mt[wt];Nl(w,S,jt,jt.viewport)}}else ft.length>0&&Ul(xt,ft,S,D),Yt&&Ht.render(S),Nl(w,S,D)}it!==null&&Y===0&&(Z.updateMultisampleRenderTarget(it),Z.updateRenderTargetMipmap(it)),H&&E.end(P),S.isScene===!0&&S.onAfterRender(P,S,D),mt.resetDefaultState(),q=-1,Q=null,x.pop(),x.length>0?(b=x[x.length-1],Z.setTextureUnits(b.state.textureUnits),st===!0&&At.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?w=A[A.length-1]:w=null,F!==null&&F.renderEnd()};function Da(S,D,X,H){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLightProbeGrid)b.pushLightProbeGrid(S);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(qt)){H&&ye.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Et);const xt=J.update(S),ft=S.material;ft.visible&&w.push(S,xt,ft,X,ye.z,null,D)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(qt))){const xt=J.update(S),ft=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ye.copy(S.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),ye.copy(xt.boundingSphere.center)),ye.applyMatrix4(S.matrixWorld).applyMatrix4(Et)),Array.isArray(ft)){const Mt=xt.groups;for(let wt=0,Vt=Mt.length;wt<Vt;wt++){const jt=Mt[wt],St=ft[jt.materialIndex];St&&St.visible&&w.push(S,xt,St,X,ye.z,jt,D)}}else ft.visible&&w.push(S,xt,ft,X,ye.z,null,D)}}const pt=S.children;for(let xt=0,ft=pt.length;xt<ft;xt++)Da(pt[xt],D,X,H)}function Nl(S,D,X,H){const{opaque:G,transmissive:pt,transparent:xt}=S;b.setupLightsView(X),st===!0&&At.setGlobalState(P.clippingPlanes,X),H&&v.viewport(et.copy(H)),G.length>0&&ir(G,D,X),pt.length>0&&ir(pt,D,X),xt.length>0&&ir(xt,D,X),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Ul(S,D,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){const St=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new di(1,1,{generateMipmaps:!0,type:St?Oi:ri,minFilter:An,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}const pt=b.state.transmissionRenderTarget[H.id],xt=H.viewport||et;pt.setSize(xt.z*P.transmissionResolutionScale,xt.w*P.transmissionResolutionScale);const ft=P.getRenderTarget(),Mt=P.getActiveCubeFace(),wt=P.getActiveMipmapLevel();P.setRenderTarget(pt),P.getClearColor(se),Jt=P.getClearAlpha(),Jt<1&&P.setClearColor(16777215,.5),P.clear(),Yt&&Ht.render(X);const Vt=P.toneMapping;P.toneMapping=Ni;const jt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),st===!0&&At.setGlobalState(P.clippingPlanes,H),ir(S,X,H),Z.updateMultisampleRenderTarget(pt),Z.updateRenderTargetMipmap(pt),le.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let ce=0,Ce=D.length;ce<Ce;ce++){const _e=D[ce],{object:fe,geometry:qe,material:_t,group:Ze}=_e;if(_t.side===Le&&fe.layers.test(H.layers)){const ee=_t.side;_t.side=ii,_t.needsUpdate=!0,Fl(fe,X,H,qe,_t,Ze),_t.side=ee,_t.needsUpdate=!0,St=!0}}St===!0&&(Z.updateMultisampleRenderTarget(pt),Z.updateRenderTargetMipmap(pt))}P.setRenderTarget(ft,Mt,wt),P.setClearColor(se,Jt),jt!==void 0&&(H.viewport=jt),P.toneMapping=Vt}function ir(S,D,X){const H=D.isScene===!0?D.overrideMaterial:null;for(let G=0,pt=S.length;G<pt;G++){const xt=S[G],{object:ft,geometry:Mt,group:wt}=xt;let Vt=xt.material;Vt.allowOverride===!0&&H!==null&&(Vt=H),ft.layers.test(X.layers)&&Fl(ft,D,X,Mt,Vt,wt)}}function Fl(S,D,X,H,G,pt){F!==null&&G.isNodeMaterial&&F.setObject(S,G),S.onBeforeRender(P,D,X,H,G,pt),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(P,D,X,H,S,pt),G.transparent===!0&&G.side===Le&&G.forceSinglePass===!1?(G.side=ii,G.needsUpdate=!0,P.renderBufferDirect(X,D,H,G,S,pt),G.side=Ln,G.needsUpdate=!0,P.renderBufferDirect(X,D,H,G,S,pt),G.side=Le):P.renderBufferDirect(X,D,H,G,S,pt),S.onAfterRender(P,D,X,H,G,pt)}function nr(S,D,X){D.isScene!==!0&&(D=De);const H=W.get(S),G=b.state.lights,pt=b.state.shadowsArray,xt=G.state.version,ft=ot.getParameters(S,G.state,pt,D,X,b.state.lightProbeGridArray),Mt=ot.getProgramCacheKey(ft);let wt=H.programs;H.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,H.fog=D.fog;const Vt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;H.envMap=rt.get(S.envMap||H.environment,Vt),H.envMapRotation=H.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,wt===void 0&&(S.addEventListener("dispose",wi),wt=new Map,H.programs=wt);let jt=wt.get(Mt);if(jt!==void 0){if(H.currentProgram===jt&&H.lightsStateVersion===xt)return kl(S,ft),jt}else ft.uniforms=ot.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,X,ft),S.onBeforeCompile(ft,P),jt=ot.acquireProgram(ft,Mt),wt.set(Mt,jt),H.uniforms=ft.uniforms;const St=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(St.clippingPlanes=At.uniform),kl(S,ft),H.needsLights=wf(S),H.lightsStateVersion=xt,H.needsLights&&(St.ambientLightColor.value=G.state.ambient,St.lightProbe.value=G.state.probe,St.sunLights.value=G.state.sun,St.sunLightShadows.value=G.state.sunShadow,St.directionalLights.value=G.state.directional,St.directionalLightShadows.value=G.state.directionalShadow,St.spotLights.value=G.state.spot,St.spotLightShadows.value=G.state.spotShadow,St.rectAreaLights.value=G.state.rectArea,St.ltc_1.value=G.state.rectAreaLTC1,St.ltc_2.value=G.state.rectAreaLTC2,St.pointLights.value=G.state.point,St.pointLightShadows.value=G.state.pointShadow,St.hemisphereLights.value=G.state.hemi,St.sunShadowMatrix.value=G.state.sunShadowMatrix,St.sunShadowCascade.value=G.state.sunShadowCascade,St.directionalShadowMatrix.value=G.state.directionalShadowMatrix,St.spotLightMatrix.value=G.state.spotLightMatrix,St.spotLightMap.value=G.state.spotLightMap,St.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=b.state.lightProbeGridArray.length>0,H.currentProgram=jt,H.uniformsList=null,jt}function Ol(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=Yr.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function kl(S,D){const X=W.get(S);X.outputColorSpace=D.outputColorSpace,X.batching=D.batching,X.batchingColor=D.batchingColor,X.instancing=D.instancing,X.instancingColor=D.instancingColor,X.instancingMorph=D.instancingMorph,X.skinning=D.skinning,X.morphTargets=D.morphTargets,X.morphNormals=D.morphNormals,X.morphColors=D.morphColors,X.morphTargetsCount=D.morphTargetsCount,X.numClippingPlanes=D.numClippingPlanes,X.numIntersection=D.numClipIntersection,X.vertexAlphas=D.vertexAlphas,X.vertexTangents=D.vertexTangents,X.toneMapping=D.toneMapping}function Sf(S,D){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(D.matrixWorld);for(let X=0,H=S.length;X<H;X++){const G=S[X];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function bf(S,D,X,H,G){D.isScene!==!0&&(D=De),Z.resetTextureUnits();const pt=D.fog,xt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?D.environment:null,ft=it===null?P.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Qt.workingColorSpace,Mt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,wt=rt.get(H.envMap||xt,Mt),Vt=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,jt=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),St=!!X.morphAttributes.position,ce=!!X.morphAttributes.normal,Ce=!!X.morphAttributes.color;let _e=Ni;H.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(_e=P.toneMapping);const fe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,qe=fe!==void 0?fe.length:0,_t=W.get(H),Ze=b.state.lights;if(st===!0&&(Nt===!0||S!==Q)){const me=S===Q&&H.id===q;At.setState(H,S,me)}let ee=!1;H.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==Ze.state.version||_t.outputColorSpace!==ft||G.isBatchedMesh&&_t.batching===!1||!G.isBatchedMesh&&_t.batching===!0||G.isBatchedMesh&&_t.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&_t.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&_t.instancing===!1||!G.isInstancedMesh&&_t.instancing===!0||G.isSkinnedMesh&&_t.skinning===!1||!G.isSkinnedMesh&&_t.skinning===!0||G.isInstancedMesh&&_t.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&_t.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&_t.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&_t.instancingMorph===!1&&G.morphTexture!==null||_t.envMap!==wt||H.fog===!0&&_t.fog!==pt||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==At.numPlanes||_t.numIntersection!==At.numIntersection)||_t.vertexAlphas!==Vt||_t.vertexTangents!==jt||_t.morphTargets!==St||_t.morphNormals!==ce||_t.morphColors!==Ce||_t.toneMapping!==_e||_t.morphTargetsCount!==qe||!!_t.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ee=!0):(ee=!0,_t.__version=H.version);let ai=_t.currentProgram;ee===!0&&(ai=nr(H,D,G),F&&H.isNodeMaterial&&F.onUpdateProgram(H,ai,_t));let Ti=!1,tn=!1,On=!1;const de=ai.getUniforms(),we=_t.uniforms;if(v.useProgram(ai.program)&&(Ti=!0,tn=!0,On=!0),H.id!==q&&(q=H.id,tn=!0),_t.needsLights){const me=Sf(b.state.lightProbeGridArray,G);_t.lightProbeGrid!==me&&(_t.lightProbeGrid=me,tn=!0)}if(Ti||Q!==S){v.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),de.setValue(U,"projectionMatrix",S.projectionMatrix),de.setValue(U,"viewMatrix",S.matrixWorldInverse);const nn=de.map.cameraPosition;nn!==void 0&&nn.setValue(U,kt.setFromMatrixPosition(S.matrixWorld)),R.logarithmicDepthBuffer&&de.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&de.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),Q!==S&&(Q=S,tn=!0,On=!0)}if(_t.needsLights&&(Ze.state.sunShadowMap.length>0&&de.setValue(U,"sunShadowMap",Ze.state.sunShadowMap,Z),Ze.state.directionalShadowMap.length>0&&de.setValue(U,"directionalShadowMap",Ze.state.directionalShadowMap,Z),Ze.state.spotShadowMap.length>0&&de.setValue(U,"spotShadowMap",Ze.state.spotShadowMap,Z),Ze.state.pointShadowMap.length>0&&de.setValue(U,"pointShadowMap",Ze.state.pointShadowMap,Z)),G.isSkinnedMesh){de.setOptional(U,G,"bindMatrix"),de.setOptional(U,G,"bindMatrixInverse");const me=G.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),de.setValue(U,"boneTexture",me.boneTexture,Z))}G.isBatchedMesh&&(de.setOptional(U,G,"batchingTexture"),de.setValue(U,"batchingTexture",G._matricesTexture,Z),de.setOptional(U,G,"batchingIdTexture"),de.setValue(U,"batchingIdTexture",G._indirectTexture,Z),de.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&de.setValue(U,"batchingColorTexture",G._colorsTexture,Z));const en=X.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&N.update(G,X,ai),(tn||_t.receiveShadow!==G.receiveShadow)&&(_t.receiveShadow=G.receiveShadow,de.setValue(U,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&D.environment!==null&&(we.envMapIntensity.value=D.environmentIntensity),we.dfgLUT!==void 0&&(we.dfgLUT.value=wx()),tn){if(de.setValue(U,"toneMappingExposure",P.toneMappingExposure),_t.needsLights&&Ef(we,On),pt&&H.fog===!0&&Tt.refreshFogUniforms(we,pt),Tt.refreshMaterialUniforms(we,H,tt,$,b.state.transmissionRenderTarget[S.id]),_t.needsLights&&_t.lightProbeGrid){const me=_t.lightProbeGrid;we.probesSH.value=me.texture,we.probesMin.value.copy(me.boundingBox.min),we.probesMax.value.copy(me.boundingBox.max),we.probesResolution.value.copy(me.resolution)}Yr.upload(U,Ol(_t),we,Z)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Yr.upload(U,Ol(_t),we,Z),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&de.setValue(U,"center",G.center),de.setValue(U,"modelViewMatrix",G.modelViewMatrix),de.setValue(U,"normalMatrix",G.normalMatrix),de.setValue(U,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const me=H.uniformsGroups;for(let nn=0,kn=me.length;nn<kn;nn++){const zl=me[nn];nt.update(zl,ai),nt.bind(zl,ai)}}return ai}function Ef(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.sunLights.needsUpdate=D,S.sunLightShadows.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function wf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(S,D,X){const H=W.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),W.get(S.texture).__webglTexture=D,W.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){const X=W.get(S);X.__webglFramebuffer=D,X.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,X=0){it=S,z=D,Y=X;let H=null,G=!1,pt=!1;if(S){const ft=W.get(S);if(ft.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(U.FRAMEBUFFER,ft.__webglFramebuffer),et.copy(S.viewport),Rt.copy(S.scissor),yt=S.scissorTest,v.viewport(et),v.scissor(Rt),v.setScissorTest(yt),q=-1;return}else if(ft.__webglFramebuffer===void 0)Z.setupRenderTarget(S);else if(ft.__hasExternalTextures)Z.rebindTextures(S,W.get(S.texture).__webglTexture,W.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Vt=S.depthTexture;if(ft.__boundDepthTexture!==Vt){if(Vt!==null&&W.has(Vt)&&(S.width!==Vt.image.width||S.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(S)}}const Mt=S.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(pt=!0);const wt=W.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(wt[D])?H=wt[D][X]:H=wt[D],G=!0):S.samples>0&&Z.useMultisampledRTT(S)===!1?H=W.get(S).__webglMultisampledFramebuffer:Array.isArray(wt)?H=wt[X]:H=wt,et.copy(S.viewport),Rt.copy(S.scissor),yt=S.scissorTest}else et.copy(gt).multiplyScalar(tt).floor(),Rt.copy(Gt).multiplyScalar(tt).floor(),yt=xe;if(X!==0&&(H=O),v.bindFramebuffer(U.FRAMEBUFFER,H)&&v.drawBuffers(S,H),v.viewport(et),v.scissor(Rt),v.setScissorTest(yt),G){const ft=W.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,ft.__webglTexture,X)}else if(pt){const ft=D;for(let Mt=0;Mt<S.textures.length;Mt++){const wt=W.get(S.textures[Mt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Mt,wt.__webglTexture,X,ft)}}else if(S!==null&&X!==0){const ft=W.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ft.__webglTexture,X)}q=-1};function Bl(S){const D=W.get(S);return(D.__readFormat!==S.format||D.__readType!==S.type)&&(D.__readFormat=S.format,D.__readType=S.type,D.__formatReadable=R.textureFormatReadable(S.format),D.__typeReadable=R.textureTypeReadable(S.type)),D}this.readRenderTargetPixels=function(S,D,X,H,G,pt,xt,ft=0){if(!(S&&S.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xt!==void 0&&(Mt=Mt[xt]),Mt){v.bindFramebuffer(U.FRAMEBUFFER,Mt);try{const wt=S.textures[ft],Vt=wt.format,jt=wt.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ft);const St=Bl(wt);if(St.__formatReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-H&&X>=0&&X<=S.height-G&&U.readPixels(D,X,H,G,ht.convert(Vt),ht.convert(jt),pt)}finally{const wt=it!==null?W.get(it).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(S,D,X,H,G,pt,xt,ft=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xt!==void 0&&(Mt=Mt[xt]),Mt)if(D>=0&&D<=S.width-H&&X>=0&&X<=S.height-G){v.bindFramebuffer(U.FRAMEBUFFER,Mt);const wt=S.textures[ft],Vt=wt.format,jt=wt.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ft);const St=Bl(wt);if(St.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ce),U.bufferData(U.PIXEL_PACK_BUFFER,pt.byteLength,U.STREAM_READ),U.readPixels(D,X,H,G,ht.convert(Vt),ht.convert(jt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Ce=it!==null?W.get(it).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Ce);const _e=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Cp(U,_e,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ce),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,pt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ce),U.deleteSync(_e),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,X=0){const H=Math.pow(2,-X),G=Math.floor(S.image.width*H),pt=Math.floor(S.image.height*H),xt=D!==null?D.x:0,ft=D!==null?D.y:0;Z.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,xt,ft,G,pt),v.unbindTexture()},this.copyTextureToTexture=function(S,D,X=null,H=null,G=0,pt=0){let xt,ft,Mt,wt,Vt,jt,St,ce,Ce;const _e=S.isCompressedTexture?S.mipmaps[pt]:S.image;if(X!==null)xt=X.max.x-X.min.x,ft=X.max.y-X.min.y,Mt=X.isBox3?X.max.z-X.min.z:1,wt=X.min.x,Vt=X.min.y,jt=X.isBox3?X.min.z:0;else{const we=Math.pow(2,-G);xt=Math.floor(_e.width*we),ft=Math.floor(_e.height*we),S.isDataArrayTexture?Mt=_e.depth:S.isData3DTexture?Mt=Math.floor(_e.depth*we):Mt=1,wt=0,Vt=0,jt=0}H!==null?(St=H.x,ce=H.y,Ce=H.z):(St=0,ce=0,Ce=0);const fe=ht.convert(D.format),qe=ht.convert(D.type);let _t;D.isData3DTexture?(Z.setTexture3D(D,0),_t=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Z.setTexture2DArray(D,0),_t=U.TEXTURE_2D_ARRAY):(Z.setTexture2D(D,0),_t=U.TEXTURE_2D),v.activeTexture(U.TEXTURE0),v.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),v.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),v.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const Ze=v.getParameter(U.UNPACK_ROW_LENGTH),ee=v.getParameter(U.UNPACK_IMAGE_HEIGHT),ai=v.getParameter(U.UNPACK_SKIP_PIXELS),Ti=v.getParameter(U.UNPACK_SKIP_ROWS),tn=v.getParameter(U.UNPACK_SKIP_IMAGES);v.pixelStorei(U.UNPACK_ROW_LENGTH,_e.width),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_e.height),v.pixelStorei(U.UNPACK_SKIP_PIXELS,wt),v.pixelStorei(U.UNPACK_SKIP_ROWS,Vt),v.pixelStorei(U.UNPACK_SKIP_IMAGES,jt);const On=S.isDataArrayTexture||S.isData3DTexture,de=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){const we=W.get(S),en=W.get(D),me=W.get(we.__renderTarget),nn=W.get(en.__renderTarget);v.bindFramebuffer(U.READ_FRAMEBUFFER,me.__webglFramebuffer),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,nn.__webglFramebuffer);for(let kn=0;kn<Mt;kn++)On&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(S).__webglTexture,G,jt+kn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(D).__webglTexture,pt,Ce+kn)),U.blitFramebuffer(wt,Vt,xt,ft,St,ce,xt,ft,U.DEPTH_BUFFER_BIT,U.NEAREST);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||W.has(S)){const we=W.get(S),en=W.get(D);v.bindFramebuffer(U.READ_FRAMEBUFFER,I),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,V);for(let me=0;me<Mt;me++)On?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,we.__webglTexture,G,jt+me):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,we.__webglTexture,G),de?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,en.__webglTexture,pt,Ce+me):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,en.__webglTexture,pt),G!==0?U.blitFramebuffer(wt,Vt,xt,ft,St,ce,xt,ft,U.COLOR_BUFFER_BIT,U.NEAREST):de?U.copyTexSubImage3D(_t,pt,St,ce,Ce+me,wt,Vt,xt,ft):U.copyTexSubImage2D(_t,pt,St,ce,wt,Vt,xt,ft);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else de?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(_t,pt,St,ce,Ce,xt,ft,Mt,fe,qe,_e.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(_t,pt,St,ce,Ce,xt,ft,Mt,fe,_e.data):U.texSubImage3D(_t,pt,St,ce,Ce,xt,ft,Mt,fe,qe,_e):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,pt,St,ce,xt,ft,fe,qe,_e.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,pt,St,ce,_e.width,_e.height,fe,_e.data):U.texSubImage2D(U.TEXTURE_2D,pt,St,ce,xt,ft,fe,qe,_e);v.pixelStorei(U.UNPACK_ROW_LENGTH,Ze),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ee),v.pixelStorei(U.UNPACK_SKIP_PIXELS,ai),v.pixelStorei(U.UNPACK_SKIP_ROWS,Ti),v.pixelStorei(U.UNPACK_SKIP_IMAGES,tn),pt===0&&D.generateMipmaps&&U.generateMipmap(_t),v.unbindTexture()},this.initRenderTarget=function(S){W.get(S).__webglFramebuffer===void 0&&Z.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Z.setTextureCube(S,0):S.isData3DTexture?Z.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Z.setTexture2DArray(S,0):Z.setTexture2D(S,0),v.unbindTexture()},this.resetState=function(){z=0,Y=0,it=null,v.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}function Ws(n,t,e=new C){return n.position.set(.34,-.25,t==="sniper"?-1.95:-1.3),n.updateWorldMatrix(!0,!1),n.getWorldPosition(e)}class Md{constructor(t,e){this.coarse=e,this.el.className="co-pickup-feedback",this.el.hidden=!0,this.el.setAttribute("role","status"),this.el.setAttribute("aria-live","polite"),t.append(this.el)}el=document.createElement("div");queue=[];remaining=0;seen=new Set;push(t,e){if(e){if(this.seen.has(e))return;this.seen.add(e),this.seen.size>256&&this.seen.delete(this.seen.values().next().value)}this.queue.length<3&&this.queue.push(t),this.remaining||this.next()}next(){const t=this.queue.shift();if(this.el.hidden=!t,!t)return;const e=Re[t.weapon];this.el.dataset.level=String(t.level),this.el.style.setProperty("--weapon",`#${e.color.toString(16).padStart(6,"0")}`);const i=t.kind==="unlock"?"取得新武器":t.kind==="upgrade"?`升至 Lv.${t.level}`:t.kind==="boost"?"滿級・快速換彈":"滿級・彈藥補滿",s=t.kind==="unlock"?this.coarse?"點擊武器庫選擇裝備":"按 Q 開啟武器庫裝備":t.kind==="upgrade"?`${t.previousCapacity} → ${t.capacity} 發彈匣 · 已補滿`:t.kind==="boost"?"換彈時間 -25% · 持續 8 秒・重拾刷新":`${t.capacity} 發彈匣 · +${t.ammoAdded} 發`;this.el.replaceChildren();const r=document.createElement("span"),a=document.createElement("div"),o=document.createElement("strong"),c=document.createElement("b"),l=document.createElement("small");r.textContent=e.icon,o.textContent=i,c.textContent=`${e.label} · Lv.${t.level}`,l.textContent=s,a.append(o,c,l),this.el.append(r,a),this.remaining=2}update(t){this.remaining&&(this.remaining=Math.max(0,this.remaining-t),this.remaining||this.next())}dispose(){this.el.remove(),this.queue=[],this.seen.clear()}}const jh=[12044504,5432544,16765543];class Sd{signature="";parts=[];material=new Zt({color:jh[0]});accent=new Zt;constructor(t){const e=[[[.012,.045,.62],[.438,-.28,-.8]],[[.15,.22,.16],[.34,-.45,-.67]],[[.012,.035,.62],[.242,-.28,-.8]],[[.14,.025,.32],[.34,-.185,-.84]]];for(const[i,s]of e){const r=new Lt(new Ee(i[0],i[1],i[2]),this.parts.length===3?this.accent:this.material);r.position.set(s[0],s[1],s[2]),r.visible=!1,t.add(r),this.parts.push(r)}}update(t,e){const i=`${t}:${e}`;i!==this.signature&&(this.signature=i,this.material.color.setHex(jh[e-1]),this.accent.color.setHex(Re[t].color),this.parts.forEach((s,r)=>s.visible=e>=2&&(r<2||e===3)))}}const bd={boxes:ei,heightAt:vs},cs=n=>({x:n[0],y:n[1],z:n[2]}),Tx=(n,t)=>n[0]*t[0]+n[1]*t[1]+n[2]*t[2],mo=(n,t)=>[n[0]-t[0],n[1]-t[1],n[2]-t[2]],$r=n=>Math.hypot(...n),fa=n=>{const t=$r(n)||1;return n.map(e=>e/t)},pa=(n,t,e)=>[n[0]+t[0]*e,n[1]+t[1]*e,n[2]+t[2]*e],gl=12*Math.PI/180;function Pc(n){const t=n.y-xi;return n.kind==="warden"?[[0,1,0],[0,2.35,0],[0,3.55,0],[-.49,2.6,0],[.49,2.6,0]].map(([e,i,s])=>[n.x+e,t+i,n.z+s]):[[0,1.22,0],[0,1.92,0],[-.28,1.22,0],[.28,1.22,0],[0,.46,0]].map(([e,i,s])=>[n.x+e,t+i,n.z+s])}const Lc=(n,t)=>[-Math.sin(n)*Math.cos(t),Math.sin(t),-Math.cos(n)*Math.cos(t)];function Ic(n,t,e){const i=fa(Math.abs(n[1])>.999?[1,0,0]:[-n[2],0,n[0]]),s=[i[1]*n[2]-i[2]*n[1],i[2]*n[0]-i[0]*n[2],i[0]*n[1]-i[1]*n[0]];return fa([n[0]+i[0]*t+s[0]*e,n[1]+i[1]*t+s[1]*e,n[2]+i[2]*t+s[2]*e])}function Ax(n,t,e=!1,i=1){const s=Re[n],r=s.falloff,a=r?1-(1-r.minimum)*Math.max(0,Math.min(1,(t-r.start)/(r.end-r.start))):1;return Math.max(1,Math.round(s.damage*xa(i)*a*(e?s.headshot??1:1)))}function Ed(n,t,e,i){const s=Math.cos(e.yaw),r=Math.sin(e.yaw),a=n[0]-e.x,o=n[2]-e.z,c={x:s*a-r*o,y:n[1]-(e.y-xi),z:r*a+s*o},l={x:s*t[0]-r*t[2],y:t[1],z:r*t[0]+s*t[2]};if(e.kind==="warden"){const u=ko(c,l,{minX:-.77,maxX:.77,minY:.12,maxY:4.7,minZ:-.63,maxZ:.59},i);return u===null?void 0:{distance:u,kind:"body"}}const h=[{kind:"head",minX:-.26,maxX:.26,minY:1.66,maxY:2.18,minZ:-.26,maxZ:.26},{kind:"body",minX:-.15,maxX:.15,minY:1.63,maxY:1.66,minZ:-.14,maxZ:.14},{kind:"body",minX:-.34,maxX:.34,minY:.81,maxY:1.63,minZ:-.19,maxZ:.19},...[-1,1].map(u=>({kind:"body",minX:u*.48-.08,maxX:u*.48+.08,minY:1.03,maxY:1.61,minZ:-.08,maxZ:.08})),...[-1,1].map(u=>({kind:"body",minX:u*.22-.095,maxX:u*.22+.095,minY:.125,maxY:.795,minZ:-.095,maxZ:.095}))];let d;for(const u of h){const p=ko(c,l,u,i);p!==null&&(!d||p<d.distance)&&(d={distance:p,kind:u.kind})}return d}function Zr(n,t,e,i,s=bd){let r=Si(cs(n),cs(t),e,s),a=r<e?"wall":"range",o;for(const c of i){if(!c.alive)continue;const l=Ed(n,t,c,r);l&&l.distance<r&&(r=l.distance,a=l.kind,o=c.id)}return{dir:t,end:pa(n,t,r),kind:a,targetId:o}}function wd(n,t,e,i,s=Math.random,r=bd,a=!1,o=1){const c=Re[n],l=ya(n,o),h=c.damage*xa(o),d=a?c.scopedSpread??c.spread:c.spread,u=[],p=new Map,g=(_,m,f,M)=>{const T=p.get(_);T?(T.damage+=m,T.headshot||=f):p.set(_,{targetId:_,damage:m,headshot:f,position:M})};if(n==="flame"){const _=gl;u.push(Zr(t,e,l,i,r));for(let m=0;m<24;m++){const f=Math.sqrt((m+.5)/24)*Math.tan(_),M=m*2.399963,T=Ic(e,Math.cos(M)*f,Math.sin(M)*f);u.push(Zr(t,T,l,i,r))}for(const m of i){if(!m.alive)continue;let f;for(const M of Pc(m)){const T=mo(M,t),y=$r(T);if(y>l||y<.001)continue;const w=fa(T),b=Math.acos(Math.max(-1,Math.min(1,Tx(w,e))));b<=_&&Si(cs(t),cs(w),y,r)>=y-.001&&(!f||b<f.angle)&&(f={position:M,angle:b})}f&&g(m.id,Math.round(h*(1-.4*f.angle/_)),!1,f.position)}}else{for(let _=0;_<(c.pellets??1);_++){const m=Ic(e,(s()-.5)*d,(s()-.5)*d),f=Zr(t,m,l,i,r);u.push(f),n!=="rocket"&&f.targetId&&g(f.targetId,Ax(n,$r(mo(f.end,t)),f.kind==="head",o),f.kind==="head",f.end)}if(n==="rocket"){const _=u[0];if(_.kind!=="range"){const m=pa(_.end,_.dir,-.06);for(const f of i){if(!f.alive)continue;if(f.id===_.targetId){g(f.id,Math.round(h),!1,_.end);continue}const M=f.kind==="warden"?Pc(f):[[f.x,f.y-xi+1.22,f.z]];let T=c.splash??0,y;for(const w of M){const b=mo(w,m),A=$r(b);A<T&&Si(cs(m),cs(fa(b)),A,r)>=A-.001&&(T=A,y=w)}y&&g(f.id,Math.max(1,Math.round(h*(1-T/c.splash))),!1,y)}}}}return{rays:u,hits:[...p.values()]}}class Rx{constructor(t="kill"){this.prefix=t}states=new Map;sequence=0;reset(){this.states.clear()}death(t){this.states.delete(t)}remove(t){this.states.delete(t)}record(t,e,i,s,r){this.death(e.id);const a=this.states.get(t.id),o=t.alive?{last:r,multi:a&&r-a.last<=4e3?a.multi+1:1,streak:(a?.streak??0)+1}:{last:r,multi:0,streak:0};t.alive&&this.states.set(t.id,o);const c={3:"勢如破竹",5:"大殺特殺",7:"無人能擋",10:"戰場主宰"};return{eventId:`${this.prefix}:${++this.sequence}`,at:r,attackerId:t.id,attackerName:t.name,victimId:e.id,victimName:e.name,weapon:i,headshot:s,multi:o.multi,streak:o.streak,title:c[o.streak]}}}function Td(n,t,e,i,s,r=1){const a=ya(n,r),o=Math.max(Xc,a+2),c={x:t[0],y:t[1],z:t[2]},l=Si(c,{x:e[0],y:e[1],z:e[2]},o,s);let h=l,d=l<o?"blocked":"neutral";for(const p of i){if(!p.alive)continue;const g=Ed(t,e,p,h);g&&g.distance<h&&(h=g.distance,d=h<=a?"in-range":"out-of-range")}if(n!=="flame")return d;let u=1/0;for(const p of i)if(p.alive)for(const g of Pc(p)){const _=g[0]-t[0],m=g[1]-t[1],f=g[2]-t[2],M=Math.hypot(_,m,f);if(M<.001||M>o)continue;const T={x:_/M,y:m/M,z:f/M};T.x*e[0]+T.y*e[1]+T.z*e[2]<Math.cos(gl)||Si(c,T,M,s)>=M-.001&&(u=Math.min(u,M))}return u<1/0?u<=a?"in-range":"out-of-range":d==="blocked"?"blocked":"neutral"}function Ad(n){return{origin:[n.x,n.y,n.z],direction:Lc(n.yaw,n.pitch)}}class Rd{constructor(t){this.root=t,this.label.className="co-aim-feedback",this.label.hidden=!0,t.append(this.label),t.addEventListener("combat:reset",this.reset),t.addEventListener("armory:open",this.reset)}label=document.createElement("span");state="";reset=()=>this.update("neutral",!1);update(t,e){const i=e&&(t==="in-range"||t==="out-of-range")?t:"neutral";i!==this.state&&(this.state=i,this.root.dataset.aimState=i,this.label.textContent=i==="in-range"?"射程內":i==="out-of-range"?"超出射程":"",this.label.hidden=i==="neutral")}dispose(){this.root.removeEventListener("combat:reset",this.reset),this.root.removeEventListener("armory:open",this.reset),delete this.root.dataset.aimState,this.label.remove()}}const _l=.15;class Cd{antialias=!0;pixelRatio;impactLimit;constructor(){const t=matchMedia("(pointer:coarse)").matches,e=navigator.deviceMemory??4,i=(navigator.hardwareConcurrency||4)<=4||e<=3;this.pixelRatio=Math.min(devicePixelRatio,t?i?1:1.6:2),this.impactLimit=i?8:16}}class Pd{constructor(t,e,i){this.root=t,this.gun=e,this.coarse=i,this.shell=document.createElement("div"),this.shell.className="co-scope",this.shell.hidden=!0,this.shell.setAttribute("aria-hidden","true"),this.shell.innerHTML=`<div class="co-scope-shade"></div><div class="co-scope-frame">
      <svg viewBox="0 0 100 100" aria-hidden="true"><path fill="black" fill-rule="evenodd" d="M25 0H75L100 50 75 100H25L0 50ZM80 50a30 30 0 1 0-60 0 30 30 0 1 0 60 0"/></svg>
      <div class="co-scope-reticle"><i></i><b></b><span></span></div><div class="co-scope-stock"></div></div>`,t.append(this.shell),this.overlayCamera.position.z=1,this.overlay.add(this.plane);const s=new Lt(new Ee(.1,.1,1.6),new Zt({color:1053726}));s.position.set(.34,-.25,-1.15);const r=new Lt(new Nn(.09,.09,.34,6),new Zt({color:527120}));r.rotation.x=Math.PI/2,r.position.set(.34,-.12,-.7),this.gunParts.add(s,r),e.add(this.gunParts),this.gunParts.visible=!1,t.addEventListener("combat:reset",this.reset),t.addEventListener("armory:open",this.reset)}shell;lens=new ti(75,1,_l,420);target=new di(256,256);overlay=new ll;overlayCamera=new Ta(-1,1,1,-1,0,2);material=new We({uniforms:{map:{value:this.target.texture}},depthTest:!1,depthWrite:!1,transparent:!0,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`uniform sampler2D map;varying vec2 vUv;
      void main(){
        if(distance(vUv,vec2(.5))>.5)discard;
        gl_FragColor=texture2D(map,vUv);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`});plane=new Lt(new Qi(2,2),this.material);scoped=!1;gunParts=new Se;reset=()=>{this.scoped=!1,this.shell.hidden=!0,this.root.classList.remove("co-scoped")};update(t,e,i,s,r){this.scoped=t==="sniper"&&!!e.aim&&i&&!s&&!r,this.shell.hidden=!this.scoped,this.root.classList.toggle("co-scoped",this.scoped),this.root.querySelector("[data-sprint]")?.setAttribute("aria-pressed",String(!!e.sprint&&i));const a=this.root.querySelector("[data-aim]");return a&&(a.disabled=t!=="sniper",a.setAttribute("aria-pressed",String(this.scoped))),this.gunParts.visible=t==="sniper",this.scoped}render(t,e,i){if(this.gun.visible=!this.scoped,t.render(e,i),this.gun.visible=!0,!this.scoped)return;this.target.samples=Math.min(4,t.capabilities.maxSamples);const s=this.root.clientWidth,r=this.root.clientHeight,a=Math.min(r*.58,s*.44),o=a*.6;this.root.style.setProperty("--scope-size",`${a}px`),this.root.style.setProperty("--lens-size",`${o}px`);const c=Math.max(64,Math.min(this.coarse?512:768,Math.ceil(o*t.getPixelRatio())));this.target.width!==c&&this.target.setSize(c,c),this.lens.position.copy(i.position),this.lens.quaternion.copy(i.quaternion),this.lens.fov=i.fov,this.lens.zoom=4*r/o,this.lens.near=i.near,this.lens.far=i.far,this.lens.updateProjectionMatrix(),this.gun.visible=!1;const l=t.getRenderTarget(),h=t.autoClear;t.setRenderTarget(this.target),t.render(e,this.lens),t.setRenderTarget(l),this.gun.visible=!0,this.plane.scale.set(o/s,o/r,1),t.autoClear=!1,t.clearDepth(),t.render(this.overlay,this.overlayCamera),t.autoClear=h}dispose(){this.root.removeEventListener("combat:reset",this.reset),this.root.removeEventListener("armory:open",this.reset),this.reset(),this.shell.remove(),this.target.dispose(),this.plane.geometry.dispose(),this.material.dispose(),this.gunParts.traverse(t=>{t instanceof Lt&&(t.geometry.dispose(),t.material.dispose())}),this.gun.remove(this.gunParts)}}function pn(...n){const t=new Set,e=new Set,i=new Set,s=new Set;for(const r of n)r.traverse(a=>{if(a instanceof ds&&s.add(a),(a instanceof Lt||a instanceof js||a instanceof Tc)&&t.add(a.geometry),a instanceof Lt||a instanceof js||a instanceof Tc||a instanceof ul)for(const o of Array.isArray(a.material)?a.material:[a.material])e.add(o)});for(const r of s)r.dispose();for(const r of e)for(const a of Object.values(r))a instanceof Ve&&i.add(a);for(const r of i)r.dispose();for(const r of e)r.dispose();for(const r of t)r.dispose()}class Ld{constructor(t,e=!1){this.scene=t,this.coarse=e;const i=e?320:900;this.positions=new Float32Array(i*3),this.colors=new Float32Array(i*3),this.sizes=new Float32Array(i),this.alphas=new Float32Array(i),this.styles=new Float32Array(i),this.particles=Array.from({length:i},()=>({position:new C,velocity:new C,life:0,duration:1,size:0,color:new Pt,style:0}));for(const[s,r,a]of[["position",this.positions,3],["color",this.colors,3],["size",this.sizes,1],["alpha",this.alphas,1],["style",this.styles,1]])this.geometry.setAttribute(s,new Ue(r,a).setUsage(Zi));this.material=new We({transparent:!0,depthWrite:!1,depthTest:!0,blending:Cn,uniforms:{time:{value:0}},vertexShader:`attribute float size;attribute float alpha;attribute float style;varying vec3 vColor;varying float vAlpha;varying float vStyle;
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
      }`,vertexColors:!0}),this.points=new js(this.geometry,this.material),this.points.frustumCulled=!1,this.group.add(this.points),this.beams=Array.from({length:e?32:64},()=>{const s=new Lt(this.cylinder,new Zt({transparent:!0,depthWrite:!1,blending:ui})),r=new Lt(this.cylinder,new Zt({color:16777215,transparent:!0,depthWrite:!1,blending:ui}));return s.visible=r.visible=!1,this.group.add(s,r),{mesh:s,core:r,life:0,duration:1}}),this.rings=Array.from({length:8},()=>{const s=new Lt(this.ringGeometry,new Zt({transparent:!0,depthWrite:!1,side:Le,blending:ui}));return s.visible=!1,this.group.add(s),{mesh:s,life:0,duration:1,radius:1}}),this.flames=Array.from({length:e?24:48},()=>{const s=new We({transparent:!0,depthWrite:!1,depthTest:!0,side:Le,blending:Cn,uniforms:{time:{value:0},opacity:{value:1}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float time;uniform float opacity;varying vec2 vUv;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}
      void main(){float n=noise(vec2(vUv.x*6.+time,vUv.y*9.-time*9.));float fine=noise(vec2(vUv.x*13.,vUv.y*17.-time*13.));float tongue=smoothstep(.25,.8,n*.75+fine*.35);float tip=1.-smoothstep(.65,1.,vUv.y);float ignition=smoothstep(0.,.06,vUv.y);vec3 color=mix(vec3(1.,.86,.34),vec3(1.,.16,.015),vUv.y);gl_FragColor=vec4(color,tongue*tip*ignition*opacity*.32);
      #include <colorspace_fragment>
      }`}),r=new Lt(this.flameGeometry,s);return r.visible=!1,this.group.add(r),{mesh:r,life:0}}),this.localFlames=this.flames.splice(0,e?5:9),t.add(this.group)}localFlames=[];localFlameTimer=0;group=new Se;particles;beams;rings;flames;flameCursor=0;flameGeometry=new Nn(1,.25,1,8,1,!0);cursor=0;beamCursor=0;ringCursor=0;geometry=new ge;material;points;cylinder=new Nn(1,1,1,6,1,!0);ringGeometry=new er(.88,1,48);positions;colors;sizes;alphas;styles;particle(t,e,i,s,r=0,a){const o=this.particles[this.cursor++%this.particles.length];o.position.copy(t),o.color.setHex(e),o.size=i,o.life=o.duration=s,o.style=r,o.velocity.copy(a??new C((Math.random()-.5)*2,Math.random()*2,(Math.random()-.5)*2))}beam(t,e,i,s,r=.022,a){const o=this.beams[this.beamCursor++%this.beams.length],c=e.clone().sub(t),l=c.length();if(l<.01)return;o.mesh.position.copy(t).addScaledVector(c,.5),o.core.position.copy(o.mesh.position);const h=new ki().setFromUnitVectors(new C(0,1,0),c.normalize());o.mesh.quaternion.copy(h),o.core.quaternion.copy(h),o.mesh.scale.set(r,l,r),o.core.scale.set(r*.24,l,r*.24),o.mesh.material.color.setHex(i),o.life=o.duration=s,o.mesh.visible=o.core.visible=!0,o.localWeapon=a,o.end=a?e.clone():void 0}play(t,e,i=!0,s=!1,r=!0,a=!0){const o=Re[t.weapon],c=new C(...t.origin),l=t.weapon;if(i&&this.muzzle(e,l),r&&l==="flame"&&!s){const h=this.coarse?3:2;for(let d=0;d<t.rays.length;d+=h){const u=t.rays[d],p=new C(...u.end),g=p.clone().sub(e),_=g.length();if(_<.1)continue;const m=this.flames[this.flameCursor++%this.flames.length];m.mesh.position.copy(e).addScaledVector(g,.5),m.mesh.quaternion.setFromUnitVectors(new C(0,1,0),g.normalize()),m.mesh.scale.set(.05+_*.018,_,.05+_*.018),m.life=.16,m.mesh.visible=!0}for(let d=0;d<t.rays.length;d+=h){const u=t.rays[d],p=c.distanceTo(new C(...u.end));for(let g=0;g<(this.coarse?5:9);g++){const _=(g+.25)/(this.coarse?5:9),m=new C(...pa(t.origin,u.dir,p*_));p*_<1.3&&m.lerp(e,1-p*_/1.3),this.particle(m,_<.2?16774592:_<.6?16752686:16729633,.15+_*.4,.12+Math.random()*.12,1,new C(0,.4,0)),g%3===0&&this.particle(m,16755780,.055,.18,0,new C(0,.3,0))}}}else if(r&&l!=="flame")for(const h of t.rays){const d=new C(...h.end);if(this.beam(e,d,o.color,l==="smg"?.075:l==="ice"?.16:.105,l==="ice"?.035:l==="rocket"?.06:.02,s?l:void 0),l==="smg"){const u=d.clone().sub(e),p=new C(-u.z,0,u.x).normalize();let g=e.clone().lerp(d,.2);for(let _=1;_<=3;_++){const m=e.clone().lerp(d,.2+_*.12).addScaledVector(p,(_%2?1:-1)*.045);this.beam(g,m,16765021,.06,.007),g=m}}if(l==="ice"||l==="rocket"||l==="smg"){const u=this.coarse?4:10;for(let p=1;p<=u;p++){const g=e.clone().lerp(d,p/(u+1));this.particle(g,o.color,l==="rocket"?.48:l==="ice"?.16:.045,l==="rocket"?.4:.2,l==="rocket"?3:l==="ice"?2:0,new C(0,.12,0))}}}if(a){for(const[h,d]of t.rays.entries())if(d.kind!=="range"&&(l!=="flame"||h%4===0)){const u=new C(...d.end);this.impact(u,l,d.kind==="head",new C(...d.dir).negate())}}a&&l==="rocket"&&t.rays[0]?.kind!=="range"&&this.explosion(new C(...pa(t.rays[0].end,t.rays[0].dir,-.1)))}updateLocalMuzzle(t,e,i,s){const r=t.clone().sub(i),a=r.length(),o=a>.001&&Si(i,r.normalize(),a,s)<a-.01;for(const c of this.beams){if(!c.life||!c.localWeapon||!c.end)continue;if(c.localWeapon!==e){c.localWeapon=void 0;continue}const l=c.end.clone().sub(t),h=l.length();if(o||h<.01){c.mesh.visible=c.core.visible=!1;continue}l.normalize();const d=Si(t,l,h,s);c.mesh.visible=c.core.visible=d>.01,c.mesh.position.copy(t).addScaledVector(l,d*.5),c.core.position.copy(c.mesh.position),c.mesh.quaternion.setFromUnitVectors(new C(0,1,0),l),c.core.quaternion.copy(c.mesh.quaternion),c.mesh.scale.y=c.core.scale.y=d}}localFlame(t,e,i,s,r,a,o=[],c=1){if(this.localFlameTimer+=a,!t)return;const l=e.clone().sub(i),h=l.length();if(h>.001&&Si(i,l.normalize(),h,r)<h-.01){for(const g of this.localFlames)g.life=0,g.mesh.visible=!1;return}const d=this.localFlameTimer>=.04;d&&(this.localFlameTimer=0);const u=s.toArray(),p=i.toArray();this.localFlames.forEach((g,_)=>{const m=_?Math.tan(gl)*.8:0,f=_*Math.PI*2/(this.localFlames.length-1),M=Zr(p,Ic(u,Math.cos(f)*m,Math.sin(f)*m),ya("flame",c),o,r),T=new C(...M.end).sub(e),y=T.length();if(y<.05||T.dot(s)<=0){g.life=0,g.mesh.visible=!1;return}T.normalize();const w=Math.min(y,Si(e,T,y,r));if(w<.05){g.life=0,g.mesh.visible=!1;return}g.mesh.position.copy(e).addScaledVector(T,w*.5),g.mesh.quaternion.setFromUnitVectors(new C(0,1,0),T),g.mesh.scale.set(.05+w*.018,w,.05+w*.018),g.life=.16,g.mesh.visible=!0;const b=g.mesh.material;if(b.uniforms.opacity.value=1,d)for(let A=1;A<=4;A++){const x=e.clone().addScaledVector(T,w*A/5);this.particle(x,A<2?16765803:16740394,.18+A*.07,.12,1,new C(0,.25,0))}})}muzzle(t,e){const i=Re[e].color;for(let s=0;s<(this.coarse?3:7);s++)this.particle(t,s===0?16777215:i,s===0?.32:.08,.04+Math.random()*.035)}impact(t,e,i,s){const r=e==="flame"?this.coarse?2:4:this.coarse?4:e==="ice"?16:10,a=i?16767593:Re[e].color;this.particle(t.clone().addScaledVector(s,.035),16777215,.26,.065);for(let o=0;o<r;o++){const c=new C((Math.random()-.5)*3,Math.random()*3,(Math.random()-.5)*3).addScaledVector(s,1);this.particle(t.clone().addScaledVector(s,.04),a,e==="ice"?.12:.055,.14+Math.random()*.2,e==="ice"?2:0,c)}e==="ice"&&this.particle(t.clone().addScaledVector(s,.05),8707583,.8,.32,3,new C)}explosion(t){const e=this.coarse?25:65;for(let s=0;s<e;s++)this.particle(t,s<10?16774613:s<e*.6?16741421:9666456,s<10?.55:.85,.18+Math.random()*.55,s<e*.6?1:3,new C((Math.random()-.5)*11,Math.random()*7,(Math.random()-.5)*11));const i=this.rings[this.ringCursor++%8];i.mesh.position.copy(t),i.mesh.rotation.x=-Math.PI/2,i.life=i.duration=.35,i.radius=5,i.mesh.material.color.setHex(16751449),i.mesh.visible=!0}status(t,e){this.particle(t,Re[e].color,e==="flame"?.22:.16,.22,e==="flame"?1:2,new C(0,.5,0))}update(t){this.material.uniforms.time.value+=t,this.particles.forEach((e,i)=>{e.life=Math.max(0,e.life-t),e.life&&(e.position.addScaledVector(e.velocity,t),(e.style===0||e.style===2)&&(e.velocity.y-=t*3)),e.position.toArray(this.positions,i*3),e.color.toArray(this.colors,i*3),this.sizes[i]=e.life?e.size*(e.style===3?1+(1-e.life/e.duration):1):0,this.alphas[i]=e.life/e.duration,this.styles[i]=e.style});for(const e of Object.values(this.geometry.attributes))e.needsUpdate=!0;for(const e of this.beams)e.life=Math.max(0,e.life-t),e.mesh.visible=e.core.visible=e.life>0,e.mesh.material.opacity=.32*e.life/e.duration,e.core.material.opacity=e.life/e.duration;for(const e of[this.flames,this.localFlames])for(const i of e){i.life=Math.max(0,i.life-t),i.mesh.visible=i.life>0;const s=i.mesh.material;s.uniforms.time.value=this.material.uniforms.time.value,s.uniforms.opacity.value=i.life/.16}for(const e of this.rings)e.life=Math.max(0,e.life-t),e.mesh.visible=e.life>0,e.mesh.scale.setScalar(Math.max(.01,e.radius*(1-e.life/e.duration))),e.mesh.material.opacity=e.life/e.duration*.65}dispose(){this.scene.remove(this.group),this.geometry.dispose(),this.material.dispose(),this.cylinder.dispose(),this.ringGeometry.dispose(),this.flameGeometry.dispose();for(const t of[this.flames,this.localFlames])for(const e of t)e.mesh.material.dispose();for(const t of this.beams)t.mesh.material.dispose(),t.core.material.dispose();for(const t of this.rings)t.mesh.material.dispose();this.group.clear()}}class Id{constructor(t){this.root=t,this.el.className="co-battle-feedback",this.feed.className="co-kill-feed",this.banner.className="co-kill-banner",this.marker.className="co-hit-marker",this.banner.hidden=this.marker.hidden=!0,this.el.append(this.feed,this.banner,this.marker),t.append(this.el),t.addEventListener("pointerdown",this.unlock),t.addEventListener("keydown",this.unlock)}el=document.createElement("div");feed=document.createElement("div");banner=document.createElement("div");marker=document.createElement("div");entries=[];numbers=[];seen=new Set;ids=[];markerLife=0;markerRank=0;bannerLife=0;bannerAttacker="";audio;disposed=!1;unlock=()=>{if(!this.audio)try{this.audio=new AudioContext}catch{return}this.audio.resume().catch(()=>{})};accept(t){return this.seen.has(t)?!1:(this.seen.add(t),this.ids.push(t),this.ids.length>1024&&this.seen.delete(this.ids.shift()),!0)}hit(t){if(!this.accept(`hit:${t.eventId}`)||!t.hits.length)return;const e=t.hits.some(i=>i.killed)?3:t.hits.some(i=>i.headshot)?2:1;(e>=this.markerRank||!this.markerLife)&&(this.markerRank=e,this.marker.className=`co-hit-marker ${e===3?"is-kill":e===2?"is-head":""}`,this.marker.hidden=!1,this.markerLife=.18),this.tone(e);for(const i of t.hits){if(i.damage<=0)continue;const s=document.createElement("span");s.className=`co-damage-number ${i.killed?"is-kill":i.headshot?"is-head":""}`,s.textContent=String(i.damage),this.el.append(s),this.numbers.push({el:s,life:.7,position:new C(...i.position)}),this.numbers.length>24&&this.numbers.shift().el.remove()}}kill(t){if(!this.accept(`kill:${t.eventId}`))return;const e=document.createElement("div");e.className="co-kill-entry";const i=document.createElement("b"),s=document.createElement("span"),r=document.createElement("b");if(i.textContent=t.attackerName,s.textContent=`${Re[t.weapon].icon}${t.headshot?" · 爆頭":""}`,s.title=Re[t.weapon].label,r.textContent=t.victimName,e.append(i,s,r),t.scoreAwarded!==void 0){const h=document.createElement("em");h.className="co-kill-reward",h.textContent=`+${t.scoreAwarded} 分`,e.append(h)}for(this.feed.prepend(e),this.entries.push({el:e,life:6});this.entries.length>5;)this.entries.shift().el.remove();const a=t.multi>=2?["","","雙殺","三連殺","四連殺","五連殺"][t.multi]??`${t.multi} 連殺`:"";if(!a&&!t.title)return;const o=this.bannerAttacker===t.attackerId&&this.bannerLife>0;this.bannerAttacker=t.attackerId,this.banner.replaceChildren();const c=document.createElement("small"),l=document.createElement("strong");c.textContent=t.attackerName,l.textContent=[a,t.title].filter(Boolean).join(" · "),this.banner.append(c,l),this.banner.hidden=!1,this.bannerLife=2,o||(this.banner.classList.remove("is-entering"),this.banner.offsetWidth,this.banner.classList.add("is-entering"))}tone(t){const e=this.audio;if(!e||e.state!=="running")return;const i=e.createOscillator(),s=e.createGain();i.type="sine",i.frequency.setValueAtTime(t===3?660:t===2?1040:780,e.currentTime),i.frequency.exponentialRampToValueAtTime(t===3?980:500,e.currentTime+.075),s.gain.setValueAtTime(.045,e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.09),i.connect(s).connect(e.destination),i.start(),i.stop(e.currentTime+.1),i.onended=()=>{i.disconnect(),s.disconnect()}}update(t,e){this.disposed||(this.markerLife=Math.max(0,this.markerLife-t),this.markerLife||(this.marker.hidden=!0,this.markerRank=0),this.bannerLife=Math.max(0,this.bannerLife-t),this.banner.hidden=this.bannerLife===0,this.banner.style.opacity=String(Math.min(1,this.bannerLife/.25)),this.entries=this.entries.filter(i=>(i.life-=t,i.life<=0?(i.el.remove(),!1):(i.el.style.opacity=String(Math.min(1,i.life/.4)),!0))),this.numbers=this.numbers.filter(i=>{if(i.life-=t,i.life<=0)return i.el.remove(),!1;const s=i.position.clone().project(e),r=s.z>=-1&&s.z<=1&&Math.abs(s.x)<1.1&&Math.abs(s.y)<1.1;return i.el.hidden=!r,i.el.style.left=`${(s.x*.5+.5)*100}%`,i.el.style.top=`calc(${(-s.y*.5+.5)*100}% - ${(1-i.life/.7)*34}px)`,i.el.style.opacity=String(Math.min(1,i.life/.2)),!0}))}dispose(){this.disposed=!0,this.root.removeEventListener("pointerdown",this.unlock),this.root.removeEventListener("keydown",this.unlock),this.audio?.close().catch(()=>{}),this.el.remove(),this.entries=[],this.numbers=[],this.seen.clear(),this.ids=[]}}const vl=qf.filter(([n,t])=>n>as.minX+1&&n<as.maxX-1&&t>as.minZ+1&&t<as.maxZ-1&&!tr.some(e=>Io(n,t,e,2))&&Yc(n,t)===0&&!Ma(n,t,.75)),Cx=(n,t)=>t&&n[0]===t[0]&&n[1]===t[1],Px=(n,t)=>Math.hypot(n[0]-t.x,n[1]-t.z),Lx=(n,t)=>[...n[Math.min(n.length-1,Math.max(0,Math.floor(t()*n.length)))]];function Ix(n,t,e=Math.random,i=vl){const s=i.filter(c=>!Cx(c,t));if(!s.length)throw new Error("No legal respawn candidates");const r=n.filter(c=>c.alive!==!1),a=s.map(c=>({point:c,distance:r.reduce((l,h)=>Math.min(l,Px(c,h)),1/0)})),o=a.filter(c=>c.distance>=20).map(c=>c.point);return Lx(o.length?o:a.sort((c,l)=>l.distance-c.distance).slice(0,3).map(c=>c.point),e)}const Dd=[...vl.map(([n,t])=>({x:n,y:0,z:t})),...Do];function Dx(n){return n==="smg"?[Do[0]]:n==="shotgun"?[Do[1]]:Dd.filter(t=>t.y===0)}function Nx(n,t,e,i=Math.random,s=Dd){const r=[...n.filter(o=>o.alive!==!1),...t],a=s.filter(o=>(!e||o.x!==e.x||o.y!==e.y||o.z!==e.z)&&r.every(c=>Math.hypot(o.x-c.x,o.y-(c.y??0),o.z-c.z)>=8));return a.length?{...a[Math.min(a.length-1,Math.max(0,Math.floor(i()*a.length)))]}:null}const Qs=2,xl=.5,yl=16,Nd=.1,Ud="chroma-mouse-sensitivity";function Fd(n){return!Number.isFinite(n)||n<xl||n>yl?Qs:Math.round(n*10)/10}function Ux(){try{const n=localStorage.getItem(Ud);return n===null||n.trim()===""?Qs:Fd(Number(n))}catch{return Qs}}let Dc=Ux();const Nc=new Set,Ca=()=>Dc;function ma(n){Dc=Fd(n);try{localStorage.setItem(Ud,String(Dc))}catch{}Nc.forEach(t=>t())}function Od(n){return Nc.add(n),()=>{Nc.delete(n)}}let Fx=0;class kd{constructor(t,e,i,s=!1,r){this.root=t,this.onOpen=e,this.onClose=i,this.roomActions=r;const a=`co-settings-${++Fx}`;this.shell=document.createElement("div"),this.shell.dataset.gameUi="",this.shell.className="co-settings-shell",this.shell.innerHTML=`<button type="button" class="co-settings-trigger" aria-controls="${a}" aria-expanded="false">${this.coarse?"設定":"設定 · F2"}</button>
      <p class="co-lock-hint" hidden>點擊場景繼續遊戲 · F2 開啟設定</p>
      <div class="co-settings-overlay" hidden>
        <section id="${a}" class="co-settings-card" role="dialog" aria-modal="true" aria-labelledby="${a}-title" tabindex="-1">
          <p class="co-settings-eyebrow">CHROMA OPS</p><h2 id="${a}-title">遊戲設定</h2>
          <div class="co-sensitivity"><label for="${a}-range">視角靈敏度 <output for="${a}-range"></output></label>
          <input id="${a}-range" type="range" min="${xl}" max="${yl}" step="${Nd}">
          <p>滑鼠與觸控共用倍率，1 倍為原本手感。設定會自動儲存。</p>
          <button type="button" data-reset>恢復預設（2 倍）</button></div>
          <p class="co-settings-status">${s?"對戰仍在進行，你仍可能受到攻擊":"單人遊戲已暫停"}</p>
          ${r?`<div class="co-room-actions"><p>房間 <b data-room-code></b></p><button type="button" data-invite>複製邀請連結</button>${r.isHost?'<button type="button" data-end>結束本局並回房間</button><div data-end-confirmation hidden><p>結束本局並讓所有人回到原房間？</p><button type="button" data-confirm-end>確認結束本局</button><button type="button" data-cancel-end>繼續對戰</button></div>':""}<button type="button" data-leave>離開房間</button><p data-room-status role="status"></p></div>`:""}
          <button type="button" class="co-settings-continue" data-continue>繼續遊戲</button>
          <p class="co-settings-help">${this.coarse?"點擊「繼續遊戲」返回戰場":"F2 / Esc 關閉 · 關閉後點擊場景繼續"}</p>
        </section>
      </div>`;const o=this.shell.querySelector("[data-room-code]");o&&r&&(o.textContent=r.code),t.classList.add("co-has-settings"),t.append(this.shell),this.panel=this.shell.querySelector(".co-settings-overlay"),this.slider=this.shell.querySelector("input"),this.output=this.shell.querySelector("output"),this.trigger=this.shell.querySelector(".co-settings-trigger"),this.hint=this.shell.querySelector(".co-lock-hint"),this.shell.addEventListener("click",this.onClick),this.slider.addEventListener("input",this.onInput),window.addEventListener("keydown",this.onKey,!0),document.addEventListener("focusin",this.onFocus),document.addEventListener("pointerlockchange",this.updateHint),document.addEventListener("pointerlockerror",this.updateHint),this.unsubscribe=Od(this.render),this.render(),this.updateHint()}shell;panel;slider;output;trigger;hint;previousFocus=null;unsubscribe;open=!1;active=!0;coarse=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>0;get isOpen(){return this.open}render=()=>{const t=Ca();this.slider.value=String(t),this.slider.setAttribute("aria-valuetext",`${t.toFixed(1)} 倍`),this.output.value=`${t.toFixed(1)} 倍`};onInput=()=>ma(Number(this.slider.value));onClick=t=>{t.stopPropagation();const e=t.target;if(e.closest(".co-settings-trigger"))this.show();else if(e.closest("[data-reset]"))ma(Qs);else if(e.closest("[data-leave]"))this.roomActions?.onLeave();else if(e.closest("[data-end]"))this.endConfirmation(!0);else if(e.closest("[data-confirm-end]"))this.endConfirmation(!1),this.roomActions?.onEnd();else if(e.closest("[data-cancel-end]"))this.endConfirmation(!1);else if(e.closest("[data-invite]")){const i=new URL(location.href);i.searchParams.set("room",this.roomActions?.code??""),navigator.clipboard?.writeText(i.toString()).then(()=>this.inviteStatus("邀請連結已複製")).catch(()=>this.inviteStatus("無法複製，請分享房間碼"))}else e.closest("[data-continue]")&&this.close(!this.coarse)};inviteStatus(t){const e=this.shell.querySelector("[data-room-status]");e&&(e.textContent=t)}endConfirmation(t){const e=this.shell.querySelector("[data-end-confirmation]");e&&(e.hidden=!t,t&&e.querySelector("[data-cancel-end]")?.focus())}onFocus=t=>{this.open&&!this.panel.contains(t.target)&&this.slider.focus()};onKey=t=>{if(!this.active)return;const e=t.target instanceof HTMLElement&&t.target.closest("input, textarea, select, [contenteditable]");if(t.key==="F2"&&(this.open||!e)){t.preventDefault(),t.stopImmediatePropagation(),t.repeat||(this.open?this.close(!1):this.show());return}if(this.open){if(t.key==="Escape")t.preventDefault(),t.stopImmediatePropagation(),this.close(!1);else if(t.key==="Tab"){const i=Array.from(this.panel.querySelectorAll("input, button")).filter(a=>!a.closest("[hidden]")),s=i[0],r=i[i.length-1];t.shiftKey&&document.activeElement===s?(t.preventDefault(),r.focus()):!t.shiftKey&&document.activeElement===r&&(t.preventDefault(),s.focus())}}};show(){!this.active||this.open||(this.previousFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.open=!0,this.panel.hidden=!1,this.trigger.setAttribute("aria-expanded","true"),this.onOpen(),document.pointerLockElement===this.root&&document.exitPointerLock?.(),this.slider.focus(),this.updateHint())}close(t=!1,e=!0){this.open&&(this.open=!1,this.endConfirmation(!1),this.panel.hidden=!0,this.trigger.setAttribute("aria-expanded","false"),e&&((this.previousFocus?.isConnected?this.previousFocus:this.trigger).focus({preventScroll:!0}),this.onClose(t)),this.updateHint())}setActive(t){this.active=t,t||this.close(!1,!1),this.shell.hidden=!t,this.updateHint()}updateHint=()=>{(!this.active||this.open)&&document.pointerLockElement===this.root&&document.exitPointerLock?.(),this.hint.hidden=this.coarse||!this.active||this.open||document.pointerLockElement===this.root};dispose(){this.active=!1,this.close(!1,!1),this.unsubscribe(),window.removeEventListener("keydown",this.onKey,!0),document.removeEventListener("focusin",this.onFocus),document.removeEventListener("pointerlockchange",this.updateHint),document.removeEventListener("pointerlockerror",this.updateHint),this.shell.removeEventListener("click",this.onClick),this.slider.removeEventListener("input",this.onInput),this.root.classList.remove("co-has-settings"),this.shell.remove()}}const Jh=()=>({moveX:0,moveY:0,lookX:0,lookY:0,shoot:!1,jump:!1,reload:!1,switchWeapon:0,sprint:!1,aim:!1});class Bd{constructor(t){this.onReset=t}state=Jh();set(t){Object.assign(this.state,t),(t.reload||t.switchWeapon)&&(this.state.aim=!1)}addLook(t,e){this.state.lookX+=t,this.state.lookY+=e}getState(){const t={...this.state};return this.state.lookX=0,this.state.lookY=0,this.state.jump=!1,this.state.reload=!1,this.state.switchWeapon=0,t}get aiming(){return!!this.state.aim}get sprinting(){return!!this.state.sprint}clearCombat(){this.set({shoot:!1,aim:!1,lookX:0,lookY:0,jump:!1,reload:!1,switchWeapon:0})}reset(){const t=this.state.moveX||this.state.moveY||this.state.sprint||this.state.aim||this.state.shoot||this.state.jump;this.state=Jh(),t&&this.onReset?.()}}class zd{constructor(t,e){this.el=t,this.input=e,window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onKey),document.addEventListener("mousemove",this.onMove),t.addEventListener("contextmenu",this.onContext),t.addEventListener("combat:reset",this.reset),t.addEventListener("armory:open",this.clearCombat),document.addEventListener("visibilitychange",this.onVisibility),t.tabIndex=-1,document.addEventListener("pointerlockchange",this.onLockChange),window.addEventListener("blur",this.reset),t.addEventListener("mousedown",this.onDown),window.addEventListener("mouseup",this.onUp)}keys=new Set;enabled=!0;get canPlay(){return this.enabled&&document.pointerLockElement===this.el}get armoryOpen(){return!!this.el.querySelector(".co-armory:not([hidden])")}clearCombat=()=>this.input.clearCombat();reset=()=>{this.keys.clear(),this.input.reset()};onLockChange=()=>{this.reset(),this.canPlay&&this.el.focus({preventScroll:!0})};onKey=t=>{const e=t.key.toLowerCase();if(t.type==="keyup"){this.keys.delete(e);return}const i=["w","a","s","d","shift"].includes(e);if(!this.canPlay||t.target instanceof HTMLElement&&t.target.closest(i?"input, textarea, select, [contenteditable]":"input, button, textarea, select, [contenteditable]")||this.armoryOpen&&!i||!["w","a","s","d"," ","r","q","1","2","3","4","5","6","7","shift"].includes(e))return;t.preventDefault();const s=!t.repeat&&!this.keys.has(e);this.keys.add(e),e===" "&&s&&this.input.set({jump:!0}),e==="r"&&this.input.set({reload:!0}),/^[1-7]$/.test(e)&&this.input.set({switchWeapon:+e})};onMove=t=>{if(this.canPlay&&!this.armoryOpen){const e=Ca();this.input.addLook(t.movementX*e,t.movementY*e)}};onDown=t=>{t.button===2&&this.canPlay&&!this.armoryOpen&&(t.preventDefault(),this.input.set({aim:!0})),t.button===0&&this.canPlay&&!this.armoryOpen&&!(t.target instanceof HTMLElement&&t.target.closest("[data-game-ui], .co-armory, button, input"))&&this.input.set({shoot:!0})};onUp=t=>{t.button===0&&this.input.set({shoot:!1}),t.button===2&&this.input.set({aim:!1})};onContext=t=>t.preventDefault();onVisibility=()=>{document.hidden&&this.reset()};setEnabled(t){this.enabled=t,this.reset()}update(){if(!this.canPlay){this.reset();return}this.input.set({sprint:this.keys.has("shift"),moveX:(this.keys.has("d")?1:0)-(this.keys.has("a")?1:0),moveY:(this.keys.has("w")?1:0)-(this.keys.has("s")?1:0)})}dispose(){this.reset(),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onKey),document.removeEventListener("mousemove",this.onMove),document.removeEventListener("pointerlockchange",this.onLockChange),window.removeEventListener("blur",this.reset),this.el.removeEventListener("contextmenu",this.onContext),this.el.removeEventListener("combat:reset",this.reset),this.el.removeEventListener("armory:open",this.clearCombat),document.removeEventListener("visibilitychange",this.onVisibility),this.el.removeEventListener("mousedown",this.onDown),window.removeEventListener("mouseup",this.onUp)}}class Hd{constructor(t,e){this.el=t,this.input=e,t.classList?.toggle("co-touch-controls",!0),this.portrait?.addEventListener?.("change",this.reset),window.PointerEvent?(t.addEventListener("pointerdown",this.onPointerDown,this.options),t.addEventListener("pointermove",this.onPointerMove,this.options),t.addEventListener("pointerup",this.onPointerUp,this.options),t.addEventListener("pointercancel",this.onPointerUp,this.options)):(t.addEventListener("touchstart",this.onTouchStart,this.options),t.addEventListener("touchmove",this.onTouchMove,this.options),t.addEventListener("touchend",this.onTouchEnd,this.options),t.addEventListener("touchcancel",this.onTouchEnd,this.options)),t.addEventListener("lostpointercapture",this.onPointerUp),t.addEventListener("combat:reset",this.reset),t.addEventListener("armory:open",this.clearCombat),t.addEventListener("tactical:open",this.clearCombat),window.addEventListener("blur",this.reset),window.addEventListener("orientationchange",this.reset),document.addEventListener("visibilitychange",this.onVisibility)}enabled=!0;setEnabled(t){this.enabled=t,this.reset()}portrait=window.matchMedia?.("(orientation: portrait)");isGameTarget=t=>!this.el.querySelector(".co-armory:not([hidden])")&&!(t instanceof HTMLElement&&t.closest(".co-armory, [data-game-ui]"));joyId=null;lookId=null;shootId=null;ox=0;oy=0;lx=0;ly=0;joyTravel=52;options={passive:!1};reset=()=>{this.joyId=null,this.lookId=null,this.shootId=null,this.input.reset(),this.el.style.setProperty("--joy-x","0px"),this.el.style.setProperty("--joy-y","0px")};clearCombat=()=>{this.lookId=null,this.shootId=null,this.input.clearCombat()};stopShooting=()=>{this.shootId=null,this.input.set({shoot:!1})};onVisibility=()=>{document.hidden&&this.reset()};begin=(t,e,i,s)=>{const r=this.el.getBoundingClientRect();if(!this.enabled||this.portrait?.matches||!this.isGameTarget(s))return;const a=s instanceof HTMLElement?s.closest("[data-fire],[data-jump],[data-reload],[data-weapon],[data-sprint],[data-aim]"):null;if(a?.matches("[data-sprint]"))this.input.set({sprint:!this.input.sprinting});else if(a?.matches("[data-aim]"))this.input.set({aim:!this.input.aiming});else if(a?.matches("[data-jump]"))this.input.set({jump:!0});else if(a?.matches("[data-reload]"))this.input.set({reload:!0});else if(a?.matches("[data-weapon]"))this.stopShooting(),this.el.dispatchEvent(new Event("armory"));else if(a?.matches("[data-fire]"))this.shootId=t,this.input.set({shoot:!0});else if(e<r.left+r.width*.48&&this.joyId===null){this.joyId=t,this.ox=e,this.oy=i;const o=this.el.querySelector(".co-joy")?.getBoundingClientRect().width;this.joyTravel=o?o*.42:52}else this.lookId===null&&(this.lookId=t,this.lx=e,this.ly=i)};movePoint=(t,e,i)=>{if(!(!this.enabled||this.portrait?.matches)){if(t===this.joyId){const s=e-this.ox,r=i-this.oy,a=1/Math.max(this.joyTravel,Math.hypot(s,r));this.input.set({moveX:Math.max(-1,Math.min(1,s/this.joyTravel)),moveY:Math.max(-1,Math.min(1,-r/this.joyTravel))}),this.el.style.setProperty("--joy-x",`${s*a*55}%`),this.el.style.setProperty("--joy-y",`${r*a*55}%`)}if(t===this.lookId){const s=Ca();this.input.addLook((e-this.lx)*s,(i-this.ly)*s),this.lx=e,this.ly=i}}};end=t=>{t===this.joyId&&(this.joyId=null,this.input.set({moveX:0,moveY:0}),this.el.style.setProperty("--joy-x","0px"),this.el.style.setProperty("--joy-y","0px")),t===this.lookId&&(this.lookId=null),t===this.shootId&&(this.shootId=null,this.input.set({shoot:!1}))};onPointerDown=t=>{!this.enabled||this.portrait?.matches||!this.isGameTarget(t.target)||(t.preventDefault(),this.begin(t.pointerId,t.clientX,t.clientY,t.target),(t.pointerId===this.joyId||t.pointerId===this.lookId||t.pointerId===this.shootId)&&this.el.setPointerCapture?.(t.pointerId))};onPointerMove=t=>{!this.enabled||t.pointerId!==this.joyId&&!this.isGameTarget(t.target)||(t.preventDefault(),this.movePoint(t.pointerId,t.clientX,t.clientY))};onPointerUp=t=>{this.enabled&&this.isGameTarget(t.target)&&t.preventDefault(),this.end(t.pointerId)};onTouchStart=t=>{if(!(!this.enabled||!this.isGameTarget(t.target))){t.preventDefault();for(const e of Array.from(t.changedTouches))this.begin(e.identifier,e.clientX,e.clientY,t.target)}};onTouchMove=t=>{if(this.enabled)for(const e of Array.from(t.changedTouches))e.identifier!==this.joyId&&!this.isGameTarget(t.target)||(t.preventDefault(),this.movePoint(e.identifier,e.clientX,e.clientY))};onTouchEnd=t=>{this.enabled&&this.isGameTarget(t.target)&&t.preventDefault();for(const e of Array.from(t.changedTouches))this.end(e.identifier)};dispose(){this.el.classList?.toggle("co-touch-controls",!1),this.portrait?.removeEventListener?.("change",this.reset),this.el.removeEventListener("lostpointercapture",this.onPointerUp),this.el.removeEventListener("tactical:open",this.clearCombat),this.el.removeEventListener("armory:open",this.clearCombat),this.el.removeEventListener("combat:reset",this.reset),this.reset(),window.PointerEvent?(this.el.removeEventListener("pointerdown",this.onPointerDown),this.el.removeEventListener("pointermove",this.onPointerMove),this.el.removeEventListener("pointerup",this.onPointerUp),this.el.removeEventListener("pointercancel",this.onPointerUp)):(this.el.removeEventListener("touchstart",this.onTouchStart),this.el.removeEventListener("touchmove",this.onTouchMove),this.el.removeEventListener("touchend",this.onTouchEnd),this.el.removeEventListener("touchcancel",this.onTouchEnd)),window.removeEventListener("blur",this.reset),window.removeEventListener("orientationchange",this.reset),document.removeEventListener("visibilitychange",this.onVisibility)}}class Ox{constructor(t,e=()=>0){this.boxes=t,this.heightAt=e}groundHeight(t,e){return this.heightAt(t,e)}blocked(t,e,i=.42){return Ma(t,e,i,0,this.boxes)}rayBlocked(t,e){return!!this.firstWallHit(t,e.clone().sub(t).normalize(),t.distanceTo(e))}firstWallHit(t,e,i=30){const s=Si(t,e,i,{boxes:this.boxes,heightAt:this.heightAt});return s<i?t.clone().addScaledVector(e,s):null}}class kx{constructor(t){this.points=t}previous=new Map;choose(t,e="player"){const i=Ix(t.map(s=>({x:s.position.x,z:s.position.z,alive:s.alive})),this.previous.get(e),Math.random,this.points);return this.previous.set(e,i),i}}class Bx{timers=new Map;kill(t){this.timers.set(t,3)}update(t,e){for(const[i,s]of this.timers)s<=t?(this.timers.delete(i),e(i)):this.timers.set(i,s-t)}}class zx{kills=0;deaths=0;onKill(){this.kills++}onDeath(){this.deaths++}}class Gd{constructor(t){this.el=t}flash=0;directionTime=0;dir="up";damage(t,e,i,s){const r=e.clone().sub(i);r.y=0,r.normalize(),s.y=0,s.normalize();const a=r.dot(s),o=r.x*s.z-r.z*s.x;this.dir=Math.abs(a)>Math.abs(o)?a>0?"up":"down":o>0?"right":"left",this.flash=Math.min(1,Math.max(.65,this.flash+t/18)),this.directionTime=.8,this.el.classList.remove("is-hit"),this.el.offsetWidth,this.el.classList.add("is-hit")}update(t,e){this.flash=Math.max(0,this.flash-t/.45),this.directionTime=Math.max(0,this.directionTime-t);const i={up:"0rad",right:"1.5708rad",down:"3.1416rad",left:"-1.5708rad"};this.el.style.setProperty("--damage-rotation",i[this.dir]),this.el.style.setProperty("--damage-flash",String(this.flash*.72)),this.el.style.setProperty("--low-hp",String(e<=30?.1+(30-e)/180:0)),this.el.style.setProperty("--damage-opacity",String(this.directionTime?Math.min(1,this.directionTime*2):0)),this.flash||this.el.classList.remove("is-hit")}dispose(){this.el.classList.remove("is-hit")}}class Hx{group=new Se;rotor=new Se;cabins=[];constructor(){const{radius:t,centerY:e,z:i}=Je;this.rotor.position.set(0,e,i);for(const[r,a]of[[t,16761648],[t*.72,1482464]]){const o=new Lt(new wa(r,.65,6,64),new Zt({color:a}));this.rotor.add(o)}for(let r=0;r<12;r++){const a=new Lt(new Ee(.3,t*2,.3),new Zt({color:16777215}));a.rotation.z=r*Math.PI/12,this.rotor.add(a)}const s=new Lt(new Nn(1.6,1.6,10,12),new Zt({color:5625599}));s.rotation.x=Math.PI/2,s.position.set(0,e,i-2),this.group.add(s,this.rotor);for(let r=0;r<Je.cabins;r++){const a=ia(r,0).map(o=>{const c=new Lt(new Ee(o.maxX-o.minX,o.maxY-o.minY,o.maxZ-o.minZ),new Zt({color:o.color}));return this.group.add(c),c});this.cabins.push(a)}this.update(0)}update(t){this.rotor.rotation.z=t/Je.period*Math.PI*2,this.cabins.forEach((e,i)=>ia(i,t).forEach((s,r)=>e[r].position.set((s.minX+s.maxX)/2,(s.minY+s.maxY)/2,(s.minZ+s.maxZ)/2)))}dispose(){this.group.traverse(t=>{t instanceof Lt&&(t.geometry.dispose(),t.material.dispose())})}}const Qh=[It(0,0,as.width,as.depth,0,1685980),It(0,0,78,62,0,14020080),It(-65,0,16,180,0,15330801),It(68,0,16,180,0,15330801),It(0,-64,184,16,0,15330801),It(0,76,210,12,0,15330801),It(0,24,112,12,0,15330801),It(0,102,92,16,0,10082783)],Gx=Qh.flatMap((n,t)=>Tu(n,[...tr,...Qh.slice(t+1)]));function Vx(n){const t=new Map;for(const e of n){const i=t.get(e.maxY)||[];i.push(e),t.set(e.maxY,i)}return[...t.values()].flatMap(e=>e.flatMap((i,s)=>Tu(i,e.slice(s+1).filter(r=>r.minX<i.maxX&&r.maxX>i.minX&&r.minZ<i.maxZ&&r.maxZ>i.minZ))))}function tu(n){return n.maxY===0&&!tr.some(t=>Math.min(n.maxX,t.maxX)>Math.max(n.minX,t.minX)&&Math.min(n.maxZ,t.maxZ)>Math.max(n.minZ,t.minZ))}const go=240,eu=n=>n*n*(3-2*n);function Wx(n){const t=(n%go+go)%go;return t<90?{phase:"day",night:0,cycleTime:t}:t<120?{phase:"dusk",night:eu((t-90)/30),cycleTime:t}:t<210?{phase:"night",night:1,cycleTime:t}:{phase:"dawn",night:1-eu((t-210)/30),cycleTime:t}}function Xx(n,t){return n.environmentTime+Math.max(0,Math.min(.25,(t-n.serverTime)/1e3))}class Vd{group=new Se;wheel=new Hx;boxes=ei;spawns=vl;waypoints=Uf;lift=[];palette=[];pools=new Se;poolMaterial=new Zt({color:16768402,transparent:!0,opacity:0,depthWrite:!1});unitBox=new Ee(1,1,1);openTopBox=this.unitBox.clone();groundPlane=new Qi(1,1).rotateX(-Math.PI/2);matrix=new ne;daySky=new Pt(1489372);sunset=new Pt(13072804);nightSky=new Pt(1051701);sky=new Pt;lastNight=-1;groundHeight(t,e){return vs(t,e)}constructor(){this.group.add(this.wheel.group,this.pools),this.openTopBox.setIndex(Array.from(this.unitBox.index.array).filter((s,r)=>r<12||r>=18)),this.openTopBox.clearGroups();const t=new Set(Gl),e=[...ei.filter(s=>s.maxY>0&&!t.has(s)),It(0,62,44,20,12,1608656),It(4,100,32,24,6,7953112)];this.drawSolids(e),this.drawBoxes(Vf),this.makeGlasshouseWindows(),this.drawBoxes(ei.filter(s=>s.maxY<=0&&!tu(s)),void 0,!0),this.drawBoxes(ei.filter(tu),void 0,!0,this.openTopBox),this.drawBoxes(Gx,void 0,!1,this.groundPlane,!0);for(const s of wu)this.ramp(s.x,s.z0,s.x,s.z1,s.from,s.to,s.width);this.ramp(-20.5,40,-20.5,52,0,12,9),this.ramp(-38,100,-12,100,0,6,24);for(const s of fs){s.kind==="ramp"&&this.ramp(0,s.outer,0,s.inner,0,-6,6);const r=this.sign(`B1  ${s.name}  MALL`,s.axis==="z"?0:s.outer,2.8,s.axis==="z"?s.outer:s.cross,7733217);r.rotation.y=s.name==="NORTH"?Math.PI:s.name==="WEST"?-Math.PI/2:s.name==="EAST"?Math.PI/2:0}this.makeWindows(),this.makeStreet(),this.makeMall(),this.lift=na(0).map(s=>{const r=new Lt(new Ee(s.maxX-s.minX,s.maxY-s.minY,s.maxZ-s.minZ),new Zt({color:s.color}));return this.group.add(r),r});for(const s of Xs)this.sign(s.name,s.x,5,s.z+12.35,s.color);this.sign("SKY WALK  /  6m",0,7.8,38.15,16761648),this.sign("FERRIS PLAZA",0,3,-85,16731800),this.sign("LIFT  0 / 6 / 12",68,13.6,25.75,16731800),this.sign(Wc.name,58,5.25,116.3,10082783);const i=new Set;this.group.traverse(s=>{if(!(s instanceof Lt))return;const r=Array.isArray(s.material)?s.material:[s.material];for(const a of r){if(!(a instanceof Zt)||a===this.poolMaterial||i.has(a))continue;i.add(a);const o=a.color.getHex(),c=[15330801,14020080,10082783,16777215].includes(o),l=a.userData.glow;this.palette.push({material:a,base:a.color.clone(),night:a.userData.fixedLight?1:c?.63:.38,glow:l===void 0?void 0:new Pt(l)})}}),this.wheel.group.traverse(s=>{if(s instanceof Lt){const r=this.palette.find(a=>a.material===s.material);if(r){r.night=.85;const a=r.base.getHex();a===16761648&&(r.glow=new Pt(16742616)),a===1482464&&(r.glow=new Pt(10192383))}}}),this.update(0,0)}drawBoxes(t,e,i=!1,s=this.unitBox,r=!1){const a=new Map;for(const o of t){const c=a.get(o.color)||[];c.push(o),a.set(o.color,c)}for(const[o,c]of a){const l=new Zt({color:o});l.userData.fixedLight=i,e!==void 0&&(l.userData.glow=e);const h=new ds(s,l,c.length);c.forEach((d,u)=>{this.matrix.makeScale(d.maxX-d.minX,r?1:d.maxY-d.minY,d.maxZ-d.minZ),this.matrix.setPosition((d.minX+d.maxX)/2,r?d.maxY:(d.minY+d.maxY)/2,(d.minZ+d.maxZ)/2),h.setMatrixAt(u,this.matrix)}),h.instanceMatrix.needsUpdate=!0,this.group.add(h)}}drawSolids(t){const e=new Map,i=s=>{let r=e.get(s);return r||(r={positions:[],indices:[]},e.set(s,r)),r};for(const s of t){const r=i(s.color),a=r.positions.length/3;for(const o of[s.minY,s.maxY])r.positions.push(s.minX,o,s.minZ,s.maxX,o,s.minZ,s.maxX,o,s.maxZ,s.minX,o,s.maxZ);for(const o of[0,1,2,0,2,3,0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0])r.indices.push(a+o)}for(const s of Vx(t)){const r=i(s.color),a=r.positions.length/3;r.positions.push(s.minX,s.maxY,s.minZ,s.maxX,s.maxY,s.minZ,s.maxX,s.maxY,s.maxZ,s.minX,s.maxY,s.maxZ);for(const o of[0,2,1,0,3,2])r.indices.push(a+o)}for(const[s,r]of e){const a=new ge;a.setAttribute("position",new ae(r.positions,3)),a.setIndex(r.indices),this.group.add(new Lt(a,new Zt({color:s})))}}makeGlasshouseWindows(){const t=new Zt({color:13234669,transparent:!0,opacity:.28,depthWrite:!1});for(const e of Gl){const i=new Lt(this.unitBox,t);i.scale.set(e.maxX-e.minX,e.maxY-e.minY,e.maxZ-e.minZ),i.position.set((e.minX+e.maxX)/2,(e.minY+e.maxY)/2,(e.minZ+e.maxZ)/2),this.group.add(i)}}ramp(t,e,i,s,r,a,o){const c=Math.hypot(i-t,s-e),l=(s-e)/c*o/2,h=-(i-t)/c*o/2,d=Math.min(r,a)-.1,u=[t-l,r,e-h,t+l,r,e+h,i+l,a,s+h,i-l,a,s-h,t-l,d,e-h,t+l,d,e+h,i+l,d,s+h,i-l,d,s-h],p=new ge;p.setAttribute("position",new ae(u,3)),p.setIndex([0,1,2,0,2,3,4,6,5,4,7,6,0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0]),p.computeVertexNormals(),this.group.add(new Lt(p,new Zt({color:16761648,side:Le})))}makeWindows(){const t=[];for(const e of Xs)for(const i of[0,6])for(const s of[-1,1])for(const r of["x","z"])for(const[a,o]of[[-9,5.4],[-4,3.4],[4,3.4],[9,5.4]]){const c=(l,h,d,u)=>t.push(r==="x"?It(e.x+s*12.27,e.z+l,.05,h,d+u/2,13959158,d-u/2):It(e.x+l,e.z+s*12.27,h,.05,d+u/2,13959158,d-u/2));for(const l of[i+1.23,i+3.47])c(a,o,l,.08);for(const l of[a-o/2,a+o/2])c(l,.08,i+2.35,2.3);(e.name.includes("STUDIO")||e.name.includes("GALLERY"))&&c(a,.06,i+2.35,2.3),(e.name.includes("GARDEN")||e.name.includes("MARKET"))&&c(a,o,i+2.7,.06)}this.drawBoxes(t,7733217)}makeMall(){this.drawBoxes([It(0,2,32,24,-5.98,12824031,-6),...[-14,18].map(e=>It(0,e,176,8,-5.98,5748926,-6)),...[-64,64].map(e=>It(e,2,8,40,-5.98,5748926,-6))],void 0,!0);const t=[];for(const e of Au){this.sign(e.name,e.x,-1.4,8.2,e.color),this.sign(e.name,e.x,-1.4,-4.2,e.color);for(const i of[-4.2,8.2])t.push(It(e.x,i,8,.08,-.65,e.color,-.8))}for(const e of[-14,18])t.push(It(0,e,168,.35,-.42,7733217,-.5));for(const e of[-64,0,64])t.push(It(e,2,.35,38,-.42,16766838,-.5));this.drawBoxes(t,void 0,!0),this.sign("B1  COLOR MALL",0,-1.6,2,7733217),this.sign("NORTH EXIT",0,-1.5,-20,7733217),this.sign("SOUTH EXIT",0,-1.5,24,7733217).rotation.y=Math.PI,this.sign("WEST EXIT",-88,-1.5,9,7733217).rotation.y=Math.PI/2,this.sign("EAST EXIT",88,-1.5,9,7733217).rotation.y=-Math.PI/2}makeStreet(){const t=new Nn(.28,.4,3,6),e=new Ea(1,0),i=new ds(t,new Zt({color:16754476}),zr.length),s=new ds(e,new Zt({color:16777215}),zr.length*5),r=[16731818,16765774,5168565,10021195,6740479];zr.forEach(([c,l],h)=>{this.matrix.makeTranslation(c,2.1,l),i.setMatrixAt(h,this.matrix);for(let d=0;d<5;d++){const u=d*Math.PI*2/5;this.matrix.makeScale(1.1,1.15,1.1),this.matrix.setPosition(c+Math.sin(u)*1.1,3.7+d%2*.8,l+Math.cos(u)*1.1),s.setMatrixAt(h*5+d,this.matrix),s.setColorAt(h*5+d,new Pt(r[d]))}}),this.group.add(i,s);const a=Lo.map(([c,l])=>It(c+.65,l,1.5,.65,4.9,16773841,4.6));this.drawBoxes(a,16769948);const o=new ml(4.5,16);for(const[c,l]of Lo){const h=new Lt(o,this.poolMaterial);h.rotation.x=-Math.PI/2,h.position.set(c+.65,.045,l),this.pools.add(h)}}sign(t,e,i,s,r){const a=document.createElement("canvas");a.width=512,a.height=96;const o=a.getContext("2d");o.fillStyle="#12203b",o.fillRect(0,0,512,96),o.strokeStyle="#"+r.toString(16).padStart(6,"0"),o.lineWidth=10,o.strokeRect(3,3,506,90),o.fillStyle="#ffffff",o.font="bold 32px Arial",o.textAlign="center",o.fillText(t,256,60);const c=new Zt({map:new ad(a),side:Le});c.userData.glow=16777215;const l=new Lt(new Qi(8,1.5),c);return l.position.set(e,i,s),this.group.add(l),l}update(t,e=t,i){this.wheel.update(t),na(t).forEach((r,a)=>this.lift[a]?.position.set((r.minX+r.maxX)/2,(r.minY+r.maxY)/2,(r.minZ+r.maxZ)/2));const{night:s}=Wx(e);if(Math.abs(s-this.lastNight)>1e-5){for(const r of this.palette)r.material.color.copy(r.base),r.glow?r.material.color.lerp(r.glow,s):r.material.color.multiplyScalar(1-s*(1-r.night));this.poolMaterial.opacity=s*.16,this.pools.visible=s>.01,this.lastNight=s}i&&(s<.5?this.sky.copy(this.daySky).lerp(this.sunset,s*2):this.sky.copy(this.sunset).lerp(this.nightSky,s*2-1),i.setClearColor(this.sky))}dispose(){this.group.removeFromParent(),pn(this.group),this.group.clear()}}class Wd{position=new C(-10,1.65,-10);velocityY=0;jumpsUsed=0;supportId=null;hp=100;alive=!0;kills=0;deaths=0;yaw=0;pitch=0;color=5285631;respawn(t){this.position.set(t[0],Yc(t[0],t[1])+xi,t[1]),this.velocityY=0,this.jumpsUsed=0,this.supportId=null,this.hp=100,this.alive=!0}damage(t){this.hp=Math.max(0,this.hp-t),this.hp||(this.alive=!1)}}class qx{update(t,e,i,s,r=1,a){const o={x:t.position.x,y:t.position.y,z:t.position.z,yaw:t.yaw,pitch:t.pitch,velocityY:t.velocityY,supportId:t.supportId,jumpsUsed:t.jumpsUsed,alive:t.alive};Kc(o,e,i,{boxes:s.boxes,heightAt:(c,l)=>s.groundHeight(c,l)},r,a),t.position.set(o.x,o.y,o.z),t.yaw=o.yaw,t.pitch=o.pitch,t.supportId=o.supportId??null,t.velocityY=o.velocityY,t.jumpsUsed=o.jumpsUsed}}class Yx{constructor(t){this.spec=t,this.state={level:1,ammo:t.magazine,reloadUntil:0,quickReloadUntil:0}}state;time=0;cooldown=0;get ammo(){return this.state.ammo}get level(){return this.state.level}get capacity(){return Mi(this.spec.id,this.level)}get reserve(){return 1/0}get reloading(){return this.state.reloadUntil>this.time}get quickReloadSeconds(){return Math.max(0,this.state.quickReloadUntil-this.time)}clearBoost(){this.state.quickReloadUntil=0}update(t,e){return this.time+=t,this.cooldown=Math.max(0,this.cooldown-t),Na(this.spec.id,this.state,this.time,!1,1),e&&!this.reloading&&this.cooldown<=0&&this.ammo>0?(this.state.ammo--,this.cooldown=this.spec.fireDelay,Na(this.spec.id,this.state,this.time,!1,1),{fired:!0,empty:this.ammo===0,autoReload:this.reloading}):{fired:!1,empty:this.ammo===0,autoReload:!1}}reload(){Na(this.spec.id,this.state,this.time,!0,1)}collect(t){return Pf(this.spec.id,this.state,t,this.time,1)}refill(){this.state.ammo=this.capacity,this.state.reloadUntil=0,this.cooldown=0,this.clearBoost()}addReserve(t){}}class Xd{constructor(t,e,i,s=""){this.id=t,this.name=e,this.color=i;const r=new Zt({color:i}),a=(h,d,u,p,g="body")=>{const _=new Lt(h,r);_.position.set(d,u,p),this.group.add(_),this.parts.push(_),g==="arm"&&this.arms.push(_),g==="leg"&&this.legs.push(_)};a(new Ee(.68,.82,.38),0,1.22,0),a(new Ee(.52,.52,.52),0,1.92,0),a(new Ee(.16,.58,.16),-.48,1.32,0,"arm"),a(new Ee(.16,.58,.16),.48,1.32,0,"arm"),a(new Ee(.19,.67,.19),-.22,.46,0,"leg"),a(new Ee(.19,.67,.19),.22,.46,0,"leg"),this.gun=new Lt(new Ee(.14,.14,.72),new Zt({color:1581102})),this.gun.position.set(.34,1.38,-.28),this.gun.rotation.x=-.22,this.group.add(this.gun);const o=document.createElement("canvas");o.width=320,o.height=72;const c=o.getContext("2d");c.fillStyle="#fff",c.font="bold 40px Arial",c.textAlign="center",c.fillText(e,160,48);const l=new ul(new hl({map:new ad(o),transparent:!0,depthTest:!0,depthWrite:!1}));l.position.set(0,2.9,0),l.scale.set(3.2,.72,1),this.group.add(l)}group=new Se;position=new C;deathGroup=new Se;hp=100;alive=!0;cooldown=0;parts=[];arms=[];legs=[];pieces=[];walk=0;reaction=0;gun;disposed=!1;clearPieces(){for(const t of this.pieces)t.mesh.material.dispose();this.pieces=[],this.deathGroup.clear()}dispose(){this.disposed||(this.disposed=!0,this.clearPieces(),this.group.removeFromParent(),this.deathGroup.removeFromParent(),pn(this.group),this.group.clear())}muzzlePosition(t=new C){return this.group.localToWorld(t.set(.34,1.38,-.7))}respawn(t,e){this.position.set(t,0,e),this.group.position.copy(this.position),this.hp=100,this.reaction=0,this.parts[0].material.color.setHex(this.color),this.alive=!0,this.group.visible=!0,this.deathGroup.visible=!1,this.clearPieces()}damage(t){this.hp=Math.max(0,this.hp-t),this.reaction=.16,this.hp||this.die()}hit(){this.alive&&(this.reaction=.16)}die(){this.alive=!1,this.group.visible=!1,this.clearPieces(),this.deathGroup.position.copy(this.position),this.deathGroup.visible=!0,this.pieces=this.parts.map((t,e)=>{const i=new Lt(t.geometry,t.material.clone());return i.position.copy(t.position),i.rotation.copy(t.rotation),this.deathGroup.add(i),{mesh:i,velocity:new C((Math.random()-.5)*3,2+Math.random()*2,(Math.random()-.5)*3),spin:new C(Math.random()*8,Math.random()*8,Math.random()*8),life:1.1+e*.02}})}updateVisual(t,e,i){if(!this.alive){for(const r of this.pieces)r.life-=t,r.velocity.y-=11*t,r.mesh.position.addScaledVector(r.velocity,t),r.mesh.rotation.x+=r.spin.x*t,r.mesh.rotation.y+=r.spin.y*t,r.mesh.rotation.z+=r.spin.z*t,r.mesh.visible=r.life>0;this.pieces.length&&this.pieces.every(r=>r.life<=0)&&this.clearPieces();return}this.walk+=e?t*10:t*3;const s=e?Math.sin(this.walk)*.55:0;this.legs.forEach((r,a)=>r.rotation.x=(a?1:-1)*s),this.arms.forEach((r,a)=>r.rotation.x=(i?-.72:0)+(a?1:-1)*s*.45),this.group.rotation.z=0,this.reaction=Math.max(0,this.reaction-t),this.parts[0].material.color.setHex(this.color).lerp(new Pt(16777215),this.reaction/.16*.65)}}function ga(n,t){const e=Math.ceil(Math.hypot(t.x-n.x,t.y-n.y,t.z-n.z)*2);for(let i=0;i<=e;i++){const s=e?i/e:0,r=n.x+(t.x-n.x)*s,a=n.z+(t.z-n.z)*s,o=n.y+(t.y-n.y)*s;if(Math.abs(r-ps.x)<2.8&&Math.abs(a-ps.z)<2.8||Math.abs(r-Je.x)<Je.radius+4&&Math.abs(a-Je.z)<3.5||Ma(r,a,.45,o+.35)||Math.abs(Bo(r,a,o+.35)-o)>.38)return!1}return!0}let _o;function qd(){if(_o)return _o;const n=[],t=new Map,e=(r,a,o)=>(n.push({x:r,y:a,z:o,edges:[]}),n.length-1),i=(r,a)=>{ga(n[r],n[a])&&(n[r].edges.push(a),n[a].edges.push(r))};for(let r=-144;r<=144;r+=8)for(let a=-128;a<=128;a+=8){const o={x:r,y:0,z:a};ga(o,o)&&t.set(`${r},${a}`,e(r,0,a))}for(const[r,a]of t){const[o,c]=r.split(",").map(Number);for(const[l,h]of[[8,0],[0,8],[8,8],[8,-8]]){const d=t.get(`${o+l},${c+h}`);d!==void 0&&i(a,d)}}const s=[];for(const r of[-88,-64,-51.5,-42.5,-33.5,-24.5,0,24.5,33.5,42.5,51.5,64,88])for(const a of[-14,18])s.push(e(r,-6,a));for(const r of[-88,-64,0,64,88])s.push(e(r,-6,9));for(const r of s)for(const a of s)r<a&&Math.hypot(n[r].x-n[a].x,n[r].z-n[a].z)<=30&&i(r,a);for(const r of fs){const a=Math.sign(r.outer-r.inner),o=(h,d)=>r.axis==="z"?{x:0,y:d,z:h}:{x:h,y:d,z:9};let c=-1,l=-1;for(let h=0;h<=14;h++){const d=Math.max(0,Math.min(1,(h-1)/12)),u=o(h===0?r.outer+a:h===14?r.inner-a:r.outer+(r.inner-r.outer)*d,-6*d),p=e(u.x,u.y,u.z);c>=0?i(c,p):l=p,c=p}for(const h of t.values())Math.hypot(n[h].x-n[l].x,n[h].z-n[l].z)<13&&i(l,h);for(const h of s)Math.hypot(n[h].x-n[c].x,n[h].z-n[c].z)<20&&i(c,h)}return _o=n,n}function iu(n,t,e,i=!1){return t.map((r,a)=>({id:a,d:Math.hypot(r.x-n.x,r.z-n.z)+Math.abs(r.y-n.y)*4})).sort((r,a)=>r.d-a.d).find(({id:r,d:a})=>a<30&&e(i?t[r]:n,t[r]))?.id}function $x(n,t,e=ga,i=!1){const s=qd(),r=iu(n,s,e),a=iu(t,s,e,i);if(r===void 0||a===void 0)return[];const o=new Set([r]),c=new Map([[r,0]]),l=new Map;for(;o.size;){let h=-1,d=1/0;for(const u of o){const p=s[u],g=s[a],_=c.get(u)+Math.hypot(p.x-g.x,p.y-g.y,p.z-g.z);_<d&&(h=u,d=_)}if(h===a){const u=[a];for(;l.has(u[0]);)u.unshift(l.get(u[0]));for(;u.length>1&&e(n,s[u[1]]);)u.shift();return[...u.map(p=>s[p]),...e(s[a],t)?[t]:[]]}o.delete(h);for(const u of s[h].edges){const p=s[h],g=s[u],_=c.get(h)+Math.hypot(p.x-g.x,p.y-g.y,p.z-g.z);_<(c.get(u)??1/0)&&(e===ga||e(p,g))&&(c.set(u,_),l.set(u,h),o.add(u))}}return[]}class Zx{routes=new Map;canSee(t,e,i,s=38){return t.alive&&e.alive&&t.position.distanceTo(e.position)<s&&!i.rayBlocked(t.position.clone().add(new C(0,1.3,0)),e.position)}update(t,e,i,s,r,a,o){if(!t.alive||!e.alive)return;t.cooldown-=i;const c=this.canSee(t,e,s,55),l=t.position.distanceTo(e.position),h={x:t.position.x,y:t.position.y,z:t.position.z};let d=this.routes.get(t.id);d&&d.last.distanceTo(t.position)>5&&(d=void 0),d||(d={path:[],remaining:0,goal:h,velocityY:0,last:t.position.clone()},this.routes.set(t.id,d)),d.remaining-=i;const u={x:e.position.x,y:e.position.y-1.65,z:e.position.z};if(u.y>1&&(u.y=0),d.remaining<=0){if(c||u.y<-2||h.y<-2)d.goal=u;else if(!d.path.length){const T=qd().filter(y=>y.y===0);d.goal=T[Math.floor(Math.random()*T.length)]}d.path=$x(h,d.goal),d.remaining=.75}for(;d.path.length&&Math.hypot(d.path[0].x-h.x,d.path[0].z-h.z)<.25&&Math.abs(d.path[0].y-h.y)<.4;)d.path.shift();const p=d.path[0];let g=0,_=0;p&&(g=p.x-h.x,_=p.z-h.z);const m=p?Math.min(i,Math.hypot(g,_)/3.2):i,f={...h,y:h.y+1.65,yaw:0,pitch:0,velocityY:d.velocityY,jumpsUsed:0,alive:!0};Kc(f,{moveX:g,moveY:-_,lookX:0,lookY:0,jump:!1},m,{boxes:s.boxes,heightAt:(M,T)=>s.groundHeight(M,T)},3.2/Uo),t.position.set(f.x,f.y-1.65,f.z),d.velocityY=f.velocityY,d.last.copy(t.position),t.group.position.copy(t.position),(g||_)&&(t.group.rotation.y=Math.atan2(-g,-_)),a&&l<38&&c&&t.cooldown<=0&&(t.cooldown=1.5+Math.random()*.8,o(Math.random()<Math.max(.18,.35-Math.max(0,l-12)*.0065)))}}const nu=n=>n.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);class Yd{constructor(t){this.el=t,this.death.className="co-dead",this.death.hidden=!0,this.el.parentElement?.append(this.death)}death=document.createElement("div");wasDead=!1;hideTimer=0;signature="";render(t){const e=Number.isFinite(t.reserve)?t.reserve:"∞",i=t.remainingSeconds??0,s=t.score===void 0?`擊殺 ${t.kills} <span>／</span> 死亡 ${t.deaths}`:`積分 ${t.score} / ${t.scoreTarget}<small>賞金 ${t.bounty} · ${Math.floor(i/60)}:${String(i%60).padStart(2,"0")} · K/D ${t.kills}/${t.deaths}</small>`,r=`${t.quickReloadSeconds}|${t.level}|${t.capacity}|${t.hp}|${t.ammo}|${e}|${t.label}|${t.notice}|${t.kills}|${t.deaths}|${t.kill}|${t.reloading}|${s}`;r!==this.signature&&(this.signature=r,this.el.innerHTML=`<div class="co-score">${s}</div><div class="co-hp">生命值 <b>${t.hp}</b></div><div class="co-ammo">${t.label} <span class="co-hud-level">Lv.${t.level??1}</span><br><b>${t.ammo} <small>/ ${t.capacity??e}</small></b><small class="co-reserve">&#28961;&#38480;&#20633;&#24392; ${e}</small>${t.quickReloadSeconds?`<em class="co-quick-reload">&#24555;&#36895;&#25563;&#24392; ${t.quickReloadSeconds}s &middot; -25%</em>`:""}${t.reloading?"<em>換彈中</em>":""}</div>${t.notice?`<div class="co-notice">${nu(t.notice)}</div>`:""}<i class="co-crosshair ${t.kill?"is-kill":""}"></i>`),t.dead&&!this.wasDead&&(window.clearTimeout(this.hideTimer),this.death.hidden=!1,this.death.classList.remove("is-leaving"),this.death.innerHTML=`<section class="co-dead-card"><p>戰鬥結束</p><h2>你已陣亡</h2><div class="co-dead-killer">擊倒者 <b>${nu(t.killer||"未知敵人")}</b></div><small>正在準備重生…</small></section>`),!t.dead&&this.wasDead&&(this.death.classList.add("is-leaving"),this.hideTimer=window.setTimeout(()=>{this.death.hidden=!0,this.death.classList.remove("is-leaving")},180)),this.el.parentElement?.classList.toggle("co-is-dead",t.dead),this.wasDead=t.dead}dispose(){window.clearTimeout(this.hideTimer),this.death.remove(),this.el.replaceChildren(),this.el.parentElement?.classList.remove("co-is-dead")}}const $d=()=>`<div class="co-mobile">
  <div class="co-joy" aria-hidden="true"><i></i></div>
  <button type="button" data-sprint aria-label="切換跑步" aria-pressed="false">跑步</button>
  <div class="co-actions">
    <button type="button" data-weapon aria-expanded="false">武器庫</button>
    <button type="button" data-reload>換彈</button>
    <button type="button" data-jump aria-label="跳躍，空中再按一次二段跳">跳躍</button>
    <button type="button" data-aim aria-label="切換狙擊鏡" aria-pressed="false" disabled>瞄準</button>
    <button type="button" data-fire>射擊</button>
  </div>
</div><div class="co-rotate" data-game-ui>請旋轉裝置後遊玩</div>`;class Zd{constructor(t,e,i,s,r=()=>1){this.root=t,this.choose=e,this.owned=i,this.afterClose=s,this.level=r;const a=this.coarse?"左右滑動選擇，點擊已取得武器裝備":"滾輪選擇，滑鼠左鍵裝備目前選取武器";t.insertAdjacentHTML("beforeend",`<div class="co-armory" hidden><div class="co-armory-head">武器庫<small>${a}</small></div><div class="co-armory-track"></div></div>`),this.box=t.querySelector(".co-armory"),this.track=this.box.querySelector(".co-armory-track"),this.trigger=t.querySelector("[data-weapon]"),this.track.innerHTML=Qe.map(o=>{const c=Re[o];return`<button type="button" class="co-weapon-card" data-armory="${o}" style="--weapon:#${c.color.toString(16).padStart(6,"0")}"><span>${c.icon}</span><b>${c.label}</b><strong class="co-level"></strong><small></small><em></em><div class="co-weapon-stats"></div></button>`}).join(""),t.addEventListener("pointerdown",this.onPointerDown,!0),window.addEventListener("pointermove",this.onPointerMove,!0),window.addEventListener("pointerup",this.onPointerUp,!0),window.addEventListener("pointercancel",this.onPointerCancel,!0),window.PointerEvent||(t.addEventListener("touchstart",this.onTouchStart,{capture:!0,passive:!1}),window.addEventListener("touchmove",this.onTouchMove,!0),window.addEventListener("touchend",this.onTouchEnd,{capture:!0,passive:!1}),window.addEventListener("touchcancel",this.onTouchEnd,!0)),window.addEventListener("blur",this.onInterrupted),window.addEventListener("orientationchange",this.onInterrupted),document.addEventListener("visibilitychange",this.onVisibility),t.addEventListener("combat:reset",this.onInterrupted),t.addEventListener("click",this.onClick,!0),t.addEventListener("wheel",this.onWheel,{passive:!1}),t.addEventListener("armory",this.onArmory),window.addEventListener("keydown",this.onKey),this.render("ar")}suppressMouseClick=!1;touchRelease=null;gestures=new Map;scrollFrame;enabled=!0;open=!1;selected=0;active="ar";signature="";box;track;trigger;coarse=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>0;get pointerLocked(){return!this.coarse&&document.pointerLockElement===this.root}equip(t){!this.owned().has(t)||this.choose(t)===!1||this.close()}selectCard(t){const e=t.dataset.armory,i=Qe.indexOf(e);i<0||(this.selected=i,this.render(),this.equip(e))}consume(t){t.preventDefault(),t.stopImmediatePropagation()}start(t,e,i,s,r,a){if(a||(this.suppressMouseClick=!1),this.touchRelease=null,!this.open||!(s instanceof HTMLElement))return;const o=this.pointerLocked||this.box.contains(s);this.gestures.set(t,{x:e,y:i,inside:o,moved:!1,touch:a,card:o?s.closest("[data-armory]"):null}),o||this.consume(r)}moveGesture(t,e,i){if(this.pointerLocked)return;const s=this.gestures.get(t);s&&Math.hypot(e-s.x,i-s.y)>8&&(s.moved=!0)}end(t,e,i,s,r=!1){const a=this.gestures.get(t);if(!a)return;this.gestures.delete(t);const o=!r&&!a.moved;a.inside?a.touch&&o&&a.card&&document.elementFromPoint(e,i)?.closest("[data-armory]")===a.card&&this.selectCard(a.card):(this.consume(s),o&&this.close()),a.touch?(this.touchRelease={x:e,y:i,expires:Date.now()+500},o&&s.cancelable&&s.preventDefault()):(!o||!a.inside)&&(this.suppressMouseClick=!0)}onPointerDown=t=>{t.button===0&&this.start(t.pointerId,t.clientX,t.clientY,t.target,t,t.pointerType==="touch")};onPointerMove=t=>this.moveGesture(t.pointerId,t.clientX,t.clientY);onPointerUp=t=>{this.moveGesture(t.pointerId,t.clientX,t.clientY),this.end(t.pointerId,t.clientX,t.clientY,t)};onPointerCancel=t=>this.end(t.pointerId,t.clientX,t.clientY,t,!0);onTouchStart=t=>{for(const e of Array.from(t.changedTouches))this.start(e.identifier,e.clientX,e.clientY,e.target??t.target,t,!0)};onTouchMove=t=>{for(const e of Array.from(t.changedTouches))this.moveGesture(e.identifier,e.clientX,e.clientY)};onTouchEnd=t=>{for(const e of Array.from(t.changedTouches))this.moveGesture(e.identifier,e.clientX,e.clientY),this.end(e.identifier,e.clientX,e.clientY,t,t.type==="touchcancel")};onClick=t=>{const e=this.touchRelease;if(e&&Date.now()<e.expires&&t.detail>0&&Math.hypot(t.clientX-e.x,t.clientY-e.y)<25){this.touchRelease=null,this.consume(t);return}if(this.suppressMouseClick){this.suppressMouseClick=!1,this.consume(t);return}if(this.coarse&&t.detail>0&&(!("pointerType"in t)||t.pointerType==="touch")){this.open&&this.consume(t);return}if(!this.open||!(t.target instanceof HTMLElement))return;if(this.consume(t),this.pointerLocked){this.equip(Qe[this.selected]);return}if(!this.box.contains(t.target)){this.close();return}const i=t.target.closest("[data-armory]");i&&this.selectCard(i)};onWheel=t=>{this.open&&(t.preventDefault(),this.move(t.deltaY>0?1:-1))};onArmory=()=>this.toggle();onInterrupted=()=>this.close(!1);onVisibility=()=>{document.hidden&&this.close(!1)};onKey=t=>{!this.enabled||t.repeat||t.key.toLowerCase()!=="q"||t.target instanceof HTMLElement&&t.target.closest("input, textarea, select, [contenteditable]")||(t.preventDefault(),this.toggle())};get isOpen(){return this.open}setEnabled(t){this.enabled=t,t||this.close(!1)}close(t=!0){this.gestures.clear(),this.suppressMouseClick=!1,this.touchRelease=null,this.scrollFrame!==void 0&&(cancelAnimationFrame(this.scrollFrame),this.scrollFrame=void 0),this.open&&(this.open=!1,this.box.hidden=!0,this.signature="",this.trigger?.setAttribute("aria-expanded","false"),t&&this.afterClose?.())}toggle(){if(!this.enabled)return;if(this.open){this.close();return}this.root.dispatchEvent(new Event("armory:open")),this.open=!0,this.box.hidden=!1,this.trigger?.setAttribute("aria-expanded","true");const t=Qe.indexOf(this.active);t>=0&&(this.selected=t),this.render(),this.scrollSelected(!1)}move(t){this.selected=(this.selected+t+Qe.length)%Qe.length,this.render(),this.scrollSelected()}render(t=this.active){this.active=t,this.box.hidden=!this.open;const e=this.owned(),i=`${this.open}|${t}|${this.selected}|${Qe.map(s=>`${e.has(s)}:${this.level(s)}`).join("|")}`;i!==this.signature&&(this.signature=i,Qe.forEach((s,r)=>{const a=this.track.children[r],o=e.has(s),c=Re[s],l=this.level(s);a.classList.toggle("active",s===t),a.classList.toggle("focus",r===this.selected),a.classList.toggle("locked",!o),a.setAttribute("aria-disabled",String(!o)),a.dataset.level=o?String(l):"0",a.querySelector("small").textContent=o?c.description:"尚未取得";const h=a.querySelector(".co-level"),d=a.querySelector("em");h&&(h.textContent=o?`Lv.${l}${l===3?" · 滿級":""}`:"未解鎖"),d&&(d.textContent=`${Mi(s,l)} 發彈匣`);const u=a.querySelector(".co-weapon-stats");u&&(u.textContent=`${c.pellets?"每顆":"傷害"} ${Math.round(c.damage*xa(l))} · 射程 ${Number(ya(s,l).toFixed(2))}`)}))}scrollSelected(t=!0){this.scrollFrame!==void 0&&cancelAnimationFrame(this.scrollFrame),this.scrollFrame=requestAnimationFrame(()=>{if(this.scrollFrame=void 0,!this.open)return;const e=this.track.children[this.selected],i=e.offsetLeft+(e.offsetWidth-this.track.clientWidth)/2;this.track.scrollTo({left:i,behavior:t?"smooth":"instant"})})}dispose(){this.enabled=!1,this.open=!1,this.close(),this.box.remove(),window.removeEventListener("blur",this.onInterrupted),window.removeEventListener("orientationchange",this.onInterrupted),document.removeEventListener("visibilitychange",this.onVisibility),this.root.removeEventListener("combat:reset",this.onInterrupted),this.root.removeEventListener("pointerdown",this.onPointerDown,!0),this.root.removeEventListener("touchstart",this.onTouchStart,!0),window.removeEventListener("pointermove",this.onPointerMove,!0),window.removeEventListener("pointerup",this.onPointerUp,!0),window.removeEventListener("pointercancel",this.onPointerCancel,!0),window.removeEventListener("touchmove",this.onTouchMove,!0),window.removeEventListener("touchend",this.onTouchEnd,!0),window.removeEventListener("touchcancel",this.onTouchEnd,!0),this.root.removeEventListener("click",this.onClick,!0),this.root.removeEventListener("wheel",this.onWheel),this.root.removeEventListener("armory",this.onArmory),window.removeEventListener("keydown",this.onKey)}}class Kd{constructor(t){this.update=t}id=0;last=0;running=!1;start(){if(this.running)return;this.running=!0,this.last=0;const t=e=>{if(!this.running)return;const i=Math.min(.05,(e-this.last)/1e3||0);this.last=e,this.update(i),this.running&&(this.id=requestAnimationFrame(t))};this.id=requestAnimationFrame(t)}stop(){this.running=!1,cancelAnimationFrame(this.id),this.id=0,this.last=0}}class Kx{constructor(t){this.root=t;const e=new Cd;this.renderer=new yd({antialias:e.antialias,powerPreference:"high-performance"}),this.renderer.setPixelRatio(e.pixelRatio),this.renderer.setClearColor(1489372),t.append(this.renderer.domElement),t.insertAdjacentHTML("beforeend",'<div class="co-feedback"></div><div class="co-hud"></div>'+$d()),this.hud=new Yd(t.querySelector(".co-hud")),this.aimFeedback=new Rd(t),this.armory=new Zd(t,r=>{this.owned.has(r)&&(this.input.set({aim:!1}),this.active=r,this.armory.render(this.active))},()=>this.owned,this.restorePointerLock,r=>this.weapons.get(r).level),this.feedback=new Gd(t.querySelector(".co-feedback")),this.scene.add(this.arena.group,new hd(16777215,1489372,2)),this.effects=new Ld(this.scene,this.coarse),this.battle=new Id(t),this.makeGun(),this.appearance=new Sd(this.gun),this.pickupFeedback=new Md(t,this.coarse),this.pickupPreview=new Lu(t),this.scope=new Pd(t,this.gun,this.coarse);const i=[16731770,3594436,16235083,10975231,5285631,16739127,3656447,9626447],s=["RED","BLUE","GREEN","YELLOW","PURPLE","ORANGE","CYAN","LIME"];i.forEach((r,a)=>{const o=new Xd("bot"+a,s[a],r);o.respawn(...this.spawns.choose(this.bots,o.id)),this.bots.push(o),this.scene.add(o.group,o.deathGroup)}),this.player.respawn(this.spawns.choose(this.bots)),Qe.forEach(r=>this.addPickup(r)),this.coarse?this.mobile=new Hd(t,this.input):(this.desktop=new zd(t,this.input),t.onclick=r=>{r.target.closest(".co-armory, [data-game-ui], button, input")||this.restorePointerLock()}),this.stopResize=bu(t,(r,a)=>{this.cam.aspect=r/a,this.cam.updateProjectionMatrix(),this.renderer.setSize(r,a,!1)}),this.loop=new Kd(r=>this.update(r)),this.settings=new kd(t,()=>{this.root.dispatchEvent(new Event("combat:reset")),this.desktop?.setEnabled(!1),this.mobile?.setEnabled(!1),this.armory.setEnabled(!1),this.loop.stop()},r=>{this.desktop?.setEnabled(!0),this.mobile?.setEnabled(!0),this.armory.setEnabled(!0),this.loop.start(),r&&this.restorePointerLock()},!1)}scene=new ll;cam=new ti(75,1,_l,Xc);renderer;input=new Bd;arena=new Vd;collision=new Ox(this.arena.boxes,(t,e)=>this.arena.groundHeight(t,e));player=new Wd;controller=new qx;bots=[];ai=new Zx;spawns=new kx(this.arena.spawns);respawn=new Bx;weapons=new Map(Qe.map(t=>[t,new Yx(Re[t])]));active="ar";owned=new Set(["ar"]);pickups=[];hud;aimFeedback;armory;feedback;effects;battle;killTracker=new Rx("solo");shotSequence=0;elapsed=0;status=new Map;statusTimer=0;loop;settings;desktop;mobile;mode=new zx;hit=0;kill=0;shake=0;notice="";noticeT=0;gun=new Se;gunFlash;dead=!1;killer="";coarse=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>0;stopResize=()=>{};pickupPreview;pickupFeedback;appearance;scope;aiming=!1;restorePointerLock=()=>{if(!(this.coarse||this.settings?.isOpen||document.pointerLockElement===this.root))try{this.root.requestPointerLock?.()?.catch(()=>{})}catch{}};makeGun(){const t=new Zt({color:2106932}),e=new Zt({color:this.player.color}),i=new Lt(new Ee(.18,.16,.9),t);i.position.set(.34,-.28,-.8);for(const[s,r,a,o]of[[.47,-.52,-.5,-.55],[.12,-.55,-.63,.42],[.37,-.43,-.74,0],[.17,-.42,-.86,0]]){const c=new Lt(new Ee(.18,.28,.18),e);c.position.set(s,r,a),c.rotation.z=o,this.gun.add(c)}this.gunFlash=new Lt(new gs(.08),new Zt({color:16766045})),this.gunFlash.position.set(.34,-.25,-1.3),this.gunFlash.visible=!1,this.gun.add(i,this.gunFlash),this.cam.add(this.gun),this.scene.add(this.cam)}pickupPoint(t,e){return Nx([this.player,...this.bots].map(i=>({x:i.position.x,y:i.position.y-(i===this.player?1.65:0),z:i.position.z,alive:i.alive})),this.pickups.filter(i=>i.mesh.visible).map(i=>({x:i.position.x,y:i.position.y-.9,z:i.position.z})),t,Math.random,e?Dx(e):void 0)}addPickup(t){const e=new Lt(new gs(.75),new Zt({color:Re[t].color})),i=this.pickupPoint(void 0,t);e.visible=!!i,i&&e.position.set(i.x,i.y+.9,i.z),this.scene.add(e),this.pickups.push({id:t,mesh:e,position:e.position.clone(),cooldown:i?0:.1})}respawnPickup(t){const e=this.pickupPoint({x:t.position.x,y:t.position.y-.9,z:t.position.z});if(!e){t.cooldown=.1;return}t.position.set(e.x,e.y+.9,e.z),t.mesh.position.copy(t.position),t.mesh.visible=!0}resetInput(){this.armory.close(!1),this.desktop?.setEnabled(!0),this.mobile?.reset(),this.input.reset()}actors(){return[{id:"player",x:this.player.position.x,y:this.player.position.y,z:this.player.position.z,yaw:this.player.yaw,alive:this.player.alive},...this.bots.map(t=>({id:t.id,x:t.position.x,y:t.position.y+1.65,z:t.position.z,yaw:t.group.rotation.y,alive:t.alive}))]}actor(t){return t==="player"?this.player:this.bots.find(e=>e.id===t)}actorName(t){return t==="player"?"YOU":this.bots.find(e=>e.id===t)?.name??t}damageActor(t,e,i){const s=this.actor(e.targetId),r=this.actor(t);if(!s?.alive||!r)return;const a=Math.min(s.hp,e.damage);s.damage(a);const o=!s.alive;if(e.targetId==="player"&&(this.feedback.damage(a,r.position,this.player.position,new C(-Math.sin(this.player.yaw),0,-Math.cos(this.player.yaw))),o)){for(const c of this.weapons.values())c.clearBoost();this.dead=!0,this.resetInput(),this.killer=this.actorName(t),this.mode.onDeath()}return o&&(this.status.delete(e.targetId),this.respawn.kill(e.targetId),t==="player"&&(this.mode.onKill(),this.kill=.3),this.battle.kill(this.killTracker.record({id:t,name:this.actorName(t),alive:r.alive},{id:e.targetId,name:this.actorName(e.targetId)},i,e.headshot,this.elapsed*1e3))),{...e,damage:a,killed:o}}shootActor(t,e,i,s,r){const a=wd(e,i.toArray(),s.toArray(),this.actors().filter(h=>h.id!==t),Math.random,Fo(this.elapsed),t==="player"&&this.aiming,t==="player"?this.weapons.get(e).level:1),o=`solo:shot:${++this.shotSequence}`,c={...a,eventId:o,id:t,weapon:e,origin:i.toArray(),dir:s.toArray()};this.effects.play(c,r,!0,t==="player");const l=[];for(const h of a.hits){const d=this.damageActor(t,h,e);if(d&&(l.push(d),!d.killed&&(e==="ice"||e==="flame"))){const u=this.status.get(h.targetId)??{slowUntil:0};e==="ice"?u.slowUntil=this.elapsed+1.25:u.burn={damage:Math.round(4*xa(this.weapons.get(e).level)),attackerId:t,nextTick:u.burn?.nextTick??this.elapsed+.25,expiresAt:this.elapsed+2},this.status.set(h.targetId,u)}}t==="player"&&l.length&&(this.hit=.12,this.battle.hit({eventId:o,weapon:e,hits:l}))}fire(){this.shake=.035,this.gun.position.z=this.shake*2,this.gun.rotation.x=this.shake,this.cam.position.copy(this.player.position),this.cam.rotation.set(this.player.pitch,this.player.yaw,0,"YXZ"),this.cam.updateMatrixWorld(!0),this.shootActor("player",this.active,this.player.position.clone(),new C(...Lc(this.player.yaw,this.player.pitch)),Ws(this.gunFlash,this.active)),this.shake=.035}updateStatuses(t){this.statusTimer+=t;const e=this.statusTimer>=.08;e&&(this.statusTimer=0);for(const[i,s]of this.status){const r=this.actor(i);if(!r?.alive){this.status.delete(i);continue}for(;s.burn&&s.burn.nextTick<=this.elapsed&&s.burn.nextTick<=s.burn.expiresAt;){const a=s.burn.attackerId;s.burn.nextTick+=.25;const o=this.damageActor(a,{targetId:i,damage:s.burn.damage,headshot:!1,position:[r.position.x,r.position.y+(i==="player"?-.4:1.22),r.position.z]},"flame");if(o&&a==="player"&&this.battle.hit({eventId:`solo:burn:${++this.shotSequence}`,weapon:"flame",hits:[o]}),!r.alive)break}s.burn&&this.elapsed>=s.burn.expiresAt&&(s.burn=void 0),e&&r.alive&&(s.burn||s.slowUntil>this.elapsed)&&this.effects.status(r.position.clone().add(new C(0,i==="player"?-.4:1.22,0)),s.burn?"flame":"ice"),!s.burn&&s.slowUntil<=this.elapsed&&this.status.delete(i)}}update(t){this.elapsed+=t,this.desktop?.update(),this.updateStatuses(t);const e=this.input.getState();if(e.switchWeapon){const l=Qe[e.switchWeapon-1];l&&this.owned.has(l)&&(this.input.set({aim:!1}),e.aim=!1,this.active=l)}const i=this.weapons.get(this.active);e.reload&&i.reload();const s=this.armory.isOpen||!!this.settings?.isOpen;(this.active!=="sniper"||i.reloading||!this.player.alive||s)&&(this.input.set({aim:!1}),e.aim=!1),s&&(e.shoot=!1,this.input.clearCombat()),this.aiming=this.scope.update(this.active,e,this.player.alive,i.reloading,s),this.aiming&&(e.lookX*=.25,e.lookY*=.25),this.controller.update(this.player,e,t,this.collision,(this.status.get("player")?.slowUntil??0)>this.elapsed?.65:1,this.elapsed-t),this.arena.update(this.elapsed,this.elapsed,this.renderer);for(const[l,h]of this.weapons)h.update(t,l===this.active&&!s&&e.shoot&&this.player.alive).fired&&this.fire();this.pickups.forEach(l=>{if(l.mesh.rotation.y+=t*2,l.cooldown>0)l.cooldown-=t,l.cooldown<=0&&this.respawnPickup(l);else if(this.player.alive&&this.player.position.distanceTo(l.position)<2){const h=this.weapons.get(l.id).collect(this.owned.has(l.id));if(!h)return;this.owned.add(l.id),l.cooldown=30,l.mesh.visible=!1,this.pickupFeedback.push(h),this.armory.render(this.active)}});const r=new Set(this.bots.filter(l=>this.ai.canSee(l,this.player,this.collision,38)).sort((l,h)=>l.position.distanceTo(this.player.position)-h.position.distanceTo(this.player.position)).slice(0,3).map(l=>l.id));this.bots.forEach(l=>{const h=l.position.clone();this.ai.update(l,this.player,(this.status.get(l.id)?.slowUntil??0)>this.elapsed?t*.65:t,this.collision,this.arena.waypoints,r.has(l.id),d=>{const u=l.position.clone().add(new C(0,1.65,0)),p=this.player.position.clone().add(new C(0,-.43,0));d||p.add(new C((Math.random()<.5?-1:1)*(1.3+Math.random()),Math.random()*.5,0)),this.shootActor(l.id,"ar",u,p.sub(u).normalize(),l.muzzlePosition())}),l.updateVisual(t,l.position.distanceToSquared(h)>.001,l.alive&&this.player.alive)}),this.respawn.update(t,l=>{if(l==="player"){this.player.respawn(this.spawns.choose(this.bots));for(const h of this.weapons.values())h.refill();this.status.delete("player"),this.resetInput(),this.dead=!1}else{const h=this.bots.find(d=>d.id===l);h&&h.respawn(...this.spawns.choose([this.player,...this.bots.filter(d=>d!==h)],h.id))}}),this.hit=Math.max(0,this.hit-t),this.kill=Math.max(0,this.kill-t),this.noticeT=Math.max(0,this.noticeT-t),this.effects.update(t),this.feedback.update(t,this.player.hp),this.cam.position.copy(this.player.position),this.cam.rotation.set(this.player.pitch,this.player.yaw,0,"YXZ"),this.gun.position.z=this.shake*2,this.gun.rotation.x=this.shake,this.shake=Math.max(0,this.shake-t*.5),this.armory.render(this.active),this.appearance.update(this.active,i.level),this.pickupFeedback.update(t),this.hud.render({quickReloadSeconds:Math.ceil(i.quickReloadSeconds),level:i.level,capacity:i.capacity,hp:this.player.hp,ammo:i.ammo,reserve:i.reserve,label:i.spec.label,notice:this.noticeT?this.notice:"",kills:this.mode.kills,deaths:this.mode.deaths,dead:this.dead,killer:this.killer,hit:this.hit>0,kill:this.kill>0,reloading:i.reloading}),this.cam.updateMatrixWorld(!0),this.battle.update(t,this.cam);const a=Fo(this.elapsed),o=this.actors().filter(l=>l.id!=="player");this.pickupPreview.update(this.pickups.map(l=>({id:l.id,position:l.position,available:l.mesh.visible,owned:this.owned.has(l.id),state:this.weapons.get(l.id)})),this.cam.position,a,this.player.alive&&!s),this.effects.updateLocalMuzzle(Ws(this.gunFlash,this.active),this.active,this.cam.position,a),this.effects.localFlame(this.player.alive&&!s&&e.shoot&&this.active==="flame"&&!i.reloading,Ws(this.gunFlash,this.active),this.cam.position,new C(...Lc(this.player.yaw,this.player.pitch)),a,t,o,i.level);const c=Ad({x:this.player.position.x,y:this.player.position.y,z:this.player.position.z,yaw:this.player.yaw,pitch:this.player.pitch});this.aimFeedback.update(s||!this.player.alive?"neutral":Td(this.active,c.origin,c.direction,o,a,i.level),this.player.alive&&!s),this.scope.render(this.renderer,this.scene,this.cam)}start(){this.loop.start()}dispose(){this.pickupPreview.dispose(),this.pickupFeedback.dispose(),this.hud.dispose(),this.aimFeedback.dispose();for(const t of this.bots)t.dispose();this.scope.dispose(),this.arena.dispose(),this.settings?.dispose(),this.root.onclick=null,this.loop.stop(),this.stopResize(),this.desktop?.dispose(),this.mobile?.dispose(),this.armory.dispose(),this.effects.dispose(),this.battle.dispose(),this.status.clear(),this.killTracker.reset(),this.feedback.dispose(),pn(this.scene),this.scene.clear(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.root.replaceChildren()}}const Uc=1500,jx=100,jd=200;function Jx(n){const t=[...n].sort((i,s)=>s.score-i.score);let e=0;return t.map((i,s)=>((s===0||i.score!==t[s-1].score)&&(e=s+1),{...i,rank:e}))}const Bi=Object.create(null);Bi.open="0";Bi.close="1";Bi.ping="2";Bi.pong="3";Bi.message="4";Bi.upgrade="5";Bi.noop="6";const Kr=Object.create(null);Object.keys(Bi).forEach(n=>{Kr[Bi[n]]=n});const Fc={type:"error",data:"parser error"},Jd=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Qd=typeof ArrayBuffer=="function",tf=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n&&n.buffer instanceof ArrayBuffer,Ml=({type:n,data:t},e,i)=>Jd&&t instanceof Blob?e?i(t):su(t,i):Qd&&(t instanceof ArrayBuffer||tf(t))?e?i(t):su(new Blob([t]),i):i(Bi[n]+(t||"")),su=(n,t)=>{const e=new FileReader;return e.onload=function(){const i=e.result.split(",")[1];t("b"+(i||""))},e.readAsDataURL(n)};function ru(n){return n instanceof Uint8Array?n:n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength)}let vo;function Qx(n,t){if(Jd&&n.data instanceof Blob)return n.data.arrayBuffer().then(ru).then(t);if(Qd&&(n.data instanceof ArrayBuffer||tf(n.data)))return t(ru(n.data));Ml(n,!1,e=>{vo||(vo=new TextEncoder),t(vo.encode(e))})}const au="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ks=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let n=0;n<au.length;n++)ks[au.charCodeAt(n)]=n;const ty=n=>{let t=n.length*.75,e=n.length,i,s=0,r,a,o,c;n[n.length-1]==="="&&(t--,n[n.length-2]==="="&&t--);const l=new ArrayBuffer(t),h=new Uint8Array(l);for(i=0;i<e;i+=4)r=ks[n.charCodeAt(i)],a=ks[n.charCodeAt(i+1)],o=ks[n.charCodeAt(i+2)],c=ks[n.charCodeAt(i+3)],h[s++]=r<<2|a>>4,h[s++]=(a&15)<<4|o>>2,h[s++]=(o&3)<<6|c&63;return l},ey=typeof ArrayBuffer=="function",Sl=(n,t)=>{if(typeof n!="string")return{type:"message",data:ef(n,t)};const e=n.charAt(0);return e==="b"?{type:"message",data:iy(n.substring(1),t)}:Kr[e]?n.length>1?{type:Kr[e],data:n.substring(1)}:{type:Kr[e]}:Fc},iy=(n,t)=>{if(ey){const e=ty(n);return ef(e,t)}else return{base64:!0,data:n}},ef=(n,t)=>{switch(t){case"blob":return n instanceof Blob?n:new Blob([n]);case"arraybuffer":default:return n instanceof ArrayBuffer?n:n.buffer}},nf="",ny=(n,t)=>{const e=n.length,i=new Array(e);let s=0;n.forEach((r,a)=>{Ml(r,!1,o=>{i[a]=o,++s===e&&t(i.join(nf))})})},sy=(n,t)=>{const e=n.split(nf),i=[];for(let s=0;s<e.length;s++){const r=Sl(e[s],t);if(i.push(r),r.type==="error")break}return i};function ry(){return new TransformStream({transform(n,t){Qx(n,e=>{const i=e.length;let s;if(i<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,i);else if(i<65536){s=new Uint8Array(3);const r=new DataView(s.buffer);r.setUint8(0,126),r.setUint16(1,i)}else{s=new Uint8Array(9);const r=new DataView(s.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(i))}n.data&&typeof n.data!="string"&&(s[0]|=128),t.enqueue(s),t.enqueue(e)})}})}let xo;function Ur(n){return n.reduce((t,e)=>t+e.length,0)}function Fr(n,t){if(n[0].length===t)return n.shift();const e=new Uint8Array(t);let i=0;for(let s=0;s<t;s++)e[s]=n[0][i++],i===n[0].length&&(n.shift(),i=0);return n.length&&i<n[0].length&&(n[0]=n[0].slice(i)),e}function ay(n,t){xo||(xo=new TextDecoder);const e=[];let i=0,s=-1,r=!1;return new TransformStream({transform(a,o){for(e.push(a);;){if(i===0){if(Ur(e)<1)break;const c=Fr(e,1);r=(c[0]&128)===128,s=c[0]&127,s<126?i=3:s===126?i=1:i=2}else if(i===1){if(Ur(e)<2)break;const c=Fr(e,2);s=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),i=3}else if(i===2){if(Ur(e)<8)break;const c=Fr(e,8),l=new DataView(c.buffer,c.byteOffset,c.length),h=l.getUint32(0);if(h>Math.pow(2,21)-1){o.enqueue(Fc);break}s=h*Math.pow(2,32)+l.getUint32(4),i=3}else{if(Ur(e)<s)break;const c=Fr(e,s);o.enqueue(Sl(r?c:xo.decode(c),t)),i=0}if(s===0||s>n){o.enqueue(Fc);break}}}})}const sf=4;function Ie(n){if(n)return oy(n)}function oy(n){for(var t in Ie.prototype)n[t]=Ie.prototype[t];return n}Ie.prototype.on=Ie.prototype.addEventListener=function(n,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+n]=this._callbacks["$"+n]||[]).push(t),this};Ie.prototype.once=function(n,t){function e(){this.off(n,e),t.apply(this,arguments)}return e.fn=t,this.on(n,e),this};Ie.prototype.off=Ie.prototype.removeListener=Ie.prototype.removeAllListeners=Ie.prototype.removeEventListener=function(n,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var e=this._callbacks["$"+n];if(!e)return this;if(arguments.length==1)return delete this._callbacks["$"+n],this;for(var i,s=0;s<e.length;s++)if(i=e[s],i===t||i.fn===t){e.splice(s,1);break}return e.length===0&&delete this._callbacks["$"+n],this};Ie.prototype.emit=function(n){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),e=this._callbacks["$"+n],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(e){e=e.slice(0);for(var i=0,s=e.length;i<s;++i)e[i].apply(this,t)}return this};Ie.prototype.emitReserved=Ie.prototype.emit;Ie.prototype.listeners=function(n){return this._callbacks=this._callbacks||{},this._callbacks["$"+n]||[]};Ie.prototype.hasListeners=function(n){return!!this.listeners(n).length};const Pa=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,e)=>e(t,0),li=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),cy="arraybuffer";function rf(n,...t){return t.reduce((e,i)=>(n.hasOwnProperty(i)&&(e[i]=n[i]),e),{})}const ly=li.setTimeout,hy=li.clearTimeout;function La(n,t){t.useNativeTimers?(n.setTimeoutFn=ly.bind(li),n.clearTimeoutFn=hy.bind(li)):(n.setTimeoutFn=li.setTimeout.bind(li),n.clearTimeoutFn=li.clearTimeout.bind(li))}const uy=1.33;function dy(n){return typeof n=="string"?fy(n):Math.ceil((n.byteLength||n.size)*uy)}function fy(n){let t=0,e=0;for(let i=0,s=n.length;i<s;i++)t=n.charCodeAt(i),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(i++,e+=4);return e}function af(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function py(n){let t="";for(let e in n)n.hasOwnProperty(e)&&(t.length&&(t+="&"),t+=encodeURIComponent(e)+"="+encodeURIComponent(n[e]));return t}function my(n){let t={},e=n.split("&");for(let i=0,s=e.length;i<s;i++){let r=e[i].split("=");t[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return t}class gy extends Error{constructor(t,e,i){super(t),this.description=e,this.context=i,this.type="TransportError"}}class bl extends Ie{constructor(t){super(),this.writable=!1,La(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,e,i){return super.emitReserved("error",new gy(t,e,i)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const e=Sl(t,this.socket.binaryType);this.onPacket(e)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,e={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(e)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const e=py(t);return e.length?"?"+e:""}}class _y extends bl{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const e=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let i=0;this._polling&&(i++,this.once("pollComplete",function(){--i||e()})),this.writable||(i++,this.once("drain",function(){--i||e()}))}else e()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const e=i=>{if(this.readyState==="opening"&&i.type==="open"&&this.onOpen(),i.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(i)};sy(t,this.socket.binaryType).forEach(e),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,ny(t,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",e=this.query||{};return this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=af()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.createUri(t,e)}}let of=!1;try{of=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const vy=of;function xy(){}class yy extends _y{constructor(t){if(super(t),typeof location<"u"){const e=location.protocol==="https:";let i=location.port;i||(i=e?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||i!==t.port}}doWrite(t,e){const i=this.request({method:"POST",data:t});i.on("success",e),i.on("error",(s,r)=>{this.onError("xhr post error",s,r)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(e,i)=>{this.onError("xhr poll error",e,i)}),this.pollXhr=t}}class Ui extends Ie{constructor(t,e,i){super(),this.createRequest=t,La(this,i),this._opts=i,this._method=i.method||"GET",this._uri=e,this._data=i.data!==void 0?i.data:null,this._create()}_create(){var t;const e=rf(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this._opts.xd;const i=this._xhr=this.createRequest(e);try{i.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){i.setDisableHeaderCheck&&i.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&i.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{i.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{i.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(i),"withCredentials"in i&&(i.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(i.timeout=this._opts.requestTimeout),i.onreadystatechange=()=>{var s;i.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(i.getResponseHeader("set-cookie"))),i.readyState===4&&(i.status===200||i.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof i.status=="number"?i.status:0)},0))},i.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=Ui.requestsCount++,Ui.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=xy,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Ui.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Ui.requestsCount=0;Ui.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",ou);else if(typeof addEventListener=="function"){const n="onpagehide"in li?"pagehide":"unload";addEventListener(n,ou,!1)}}function ou(){for(let n in Ui.requests)Ui.requests.hasOwnProperty(n)&&Ui.requests[n].abort()}const My=(function(){const n=cf({xdomain:!1});return n&&n.responseType!==null})();class Sy extends yy{constructor(t){super(t);const e=t&&t.forceBase64;this.supportsBinary=My&&!e}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new Ui(cf,this.uri(),t)}}function cf(n){const t=n.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||vy))return new XMLHttpRequest}catch{}if(!t)try{return new li[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const lf=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class by extends bl{get name(){return"websocket"}doOpen(){const t=this.uri(),e=this.opts.protocols,i=lf?{}:rf(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(i.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,e,i)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const i=t[e],s=e===t.length-1;Ml(i,this.supportsBinary,r=>{try{this.doWrite(i,r)}catch{}s&&Pa(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",e=this.query||{};return this.opts.timestampRequests&&(e[this.opts.timestampParam]=af()),this.supportsBinary||(e.b64=1),this.createUri(t,e)}}const yo=li.WebSocket||li.MozWebSocket;class Ey extends by{createSocket(t,e,i){return lf?new yo(t,e,i):e?new yo(t,e):new yo(t)}doWrite(t,e){this.ws.send(e)}}class wy extends bl{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const e=ay(Number.MAX_SAFE_INTEGER,this.socket.binaryType),i=t.readable.pipeThrough(e).getReader(),s=ry();s.readable.pipeTo(t.writable),this._writer=s.writable.getWriter();const r=()=>{i.read().then(({done:o,value:c})=>{o||(this.onPacket(c),r())}).catch(o=>{})};r();const a={type:"open"};this.query.sid&&(a.data=`{"sid":"${this.query.sid}"}`),this._writer.write(a).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const i=t[e],s=e===t.length-1;this._writer.write(i).then(()=>{s&&Pa(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const Ty={websocket:Ey,webtransport:wy,polling:Sy},Ay=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Ry=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Oc(n){if(n.length>8e3)throw"URI too long";const t=n,e=n.indexOf("["),i=n.indexOf("]");e!=-1&&i!=-1&&(n=n.substring(0,e)+n.substring(e,i).replace(/:/g,";")+n.substring(i,n.length));let s=Ay.exec(n||""),r={},a=14;for(;a--;)r[Ry[a]]=s[a]||"";return e!=-1&&i!=-1&&(r.source=t,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=Cy(r,r.path),r.queryKey=Py(r,r.query),r}function Cy(n,t){const e=/\/{2,9}/g,i=t.replace(e,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&i.splice(0,1),t.slice(-1)=="/"&&i.splice(i.length-1,1),i}function Py(n,t){const e={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(i,s,r){s&&(e[s]=r)}),e}const kc=typeof addEventListener=="function"&&typeof removeEventListener=="function",jr=[];kc&&addEventListener("offline",()=>{jr.forEach(n=>n())},!1);class dn extends Ie{constructor(t,e){if(super(),this.binaryType=cy,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(e=t,t=null),t){const i=Oc(t);e.hostname=i.host,e.secure=i.protocol==="https"||i.protocol==="wss",e.port=i.port,i.query&&(e.query=i.query)}else e.host&&(e.hostname=Oc(e.host).host);La(this,e),this.secure=e.secure!=null?e.secure:typeof location<"u"&&location.protocol==="https:",e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=e.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},e.transports.forEach(i=>{const s=i.prototype.name;this.transports.push(s),this._transportsByName[s]=i}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},e),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=my(this.opts.query)),kc&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},jr.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const e=Object.assign({},this.opts.query);e.EIO=sf,e.transport=t,this.id&&(e.sid=this.id);const i=Object.assign({},this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](i)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&dn.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const e=this.createTransport(t);e.open(),this.setTransport(e)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",e=>this._onClose("transport close",e))}onOpen(){this.readyState="open",dn.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const e=new Error("server error");e.code=t.data,this._onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let i=0;i<this.writeBuffer.length;i++){const s=this.writeBuffer[i].data;if(s&&(e+=dy(s)),i>0&&e>this._maxPayload)return this.writeBuffer.slice(0,i);e+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,Pa(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,e,i){return this._sendPacket("message",t,e,i),this}send(t,e,i){return this._sendPacket("message",t,e,i),this}_sendPacket(t,e,i,s){if(typeof e=="function"&&(s=e,e=void 0),typeof i=="function"&&(s=i,i=null),this.readyState==="closing"||this.readyState==="closed")return;i=i||{},i.compress=i.compress!==!1;const r={type:t,data:e,options:i};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),s&&this.once("flush",s),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},i=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?i():t()}):this.upgrading?i():t()),this}_onError(t){if(dn.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),kc&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const i=jr.indexOf(this._offlineEventListener);i!==-1&&jr.splice(i,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this._prevBufferLen=0}}}dn.protocol=sf;class Ly extends dn{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let e=this.createTransport(t),i=!1;dn.priorWebsocketSuccess=!1;const s=()=>{i||(e.send([{type:"ping",data:"probe"}]),e.once("packet",d=>{if(!i)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",e),!e)return;dn.priorWebsocketSuccess=e.name==="websocket",this.transport.pause(()=>{i||this.readyState!=="closed"&&(h(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())})}else{const u=new Error("probe error");u.transport=e.name,this.emitReserved("upgradeError",u)}}))};function r(){i||(i=!0,h(),e.close(),e=null)}const a=d=>{const u=new Error("probe error: "+d);u.transport=e.name,r(),this.emitReserved("upgradeError",u)};function o(){a("transport closed")}function c(){a("socket closed")}function l(d){e&&d.name!==e.name&&r()}const h=()=>{e.removeListener("open",s),e.removeListener("error",a),e.removeListener("close",o),this.off("close",c),this.off("upgrading",l)};e.once("open",s),e.once("error",a),e.once("close",o),this.once("close",c),this.once("upgrading",l),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{i||e.open()},200):e.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const e=[];for(let i=0;i<t.length;i++)~this.transports.indexOf(t[i])&&e.push(t[i]);return e}}let Iy=class extends Ly{constructor(t,e={}){const i=typeof t=="object",s=i?{...t}:{...e};(!s.transports||s.transports&&typeof s.transports[0]=="string")&&(s.transports=(s.transports||["polling","websocket","webtransport"]).map(r=>Ty[r]).filter(r=>!!r)),super(i?s:t,s)}};function Dy(n,t="",e){let i=n;e=e||typeof location<"u"&&location,n==null&&(n=e.protocol+"//"+e.host),typeof n=="string"&&(n.charAt(0)==="/"&&(n.charAt(1)==="/"?n=e.protocol+n:n=e.host+n),/^(https?|wss?):\/\//.test(n)||(typeof e<"u"?n=e.protocol+"//"+n:n="https://"+n),i=Oc(n)),i.port||(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";const r=i.host.indexOf(":")!==-1?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+r+":"+i.port+t,i.href=i.protocol+"://"+r+(e&&e.port===i.port?"":":"+i.port),i}const Ny=typeof ArrayBuffer=="function",Uy=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n.buffer instanceof ArrayBuffer,hf=Object.prototype.toString,Fy=typeof Blob=="function"||typeof Blob<"u"&&hf.call(Blob)==="[object BlobConstructor]",Oy=typeof File=="function"||typeof File<"u"&&hf.call(File)==="[object FileConstructor]";function El(n){return Ny&&(n instanceof ArrayBuffer||Uy(n))||Fy&&n instanceof Blob||Oy&&n instanceof File}function Jr(n,t){if(!n||typeof n!="object")return!1;if(Array.isArray(n)){for(let e=0,i=n.length;e<i;e++)if(Jr(n[e]))return!0;return!1}if(El(n))return!0;if(n.toJSON&&typeof n.toJSON=="function"&&arguments.length===1)return Jr(n.toJSON(),!0);for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)&&Jr(n[e]))return!0;return!1}function ky(n){const t=[],e=n.data,i=n;return i.data=Qr(e,t),i.attachments=t.length,{packet:i,buffers:t}}function Qr(n,t,e){if(!n)return n;if(El(n)){const i={_placeholder:!0,num:t.length};return t.push(n),i}else if(Array.isArray(n)){const i=new Array(n.length);for(let s=0;s<n.length;s++)i[s]=Qr(n[s],t);return i}else if(typeof n=="object"&&!(n instanceof Date)){if(n.toJSON&&typeof n.toJSON=="function"&&!e)return Qr(n.toJSON(),t,!0);const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=Qr(n[s],t));return i}return n}function By(n,t){return n.data=Bc(n.data,t),delete n.attachments,n}function Bc(n,t){if(!n)return n;if(n&&n._placeholder===!0){if(typeof n.num=="number"&&n.num>=0&&n.num<t.length)return t[n.num];throw new Error("illegal attachments")}else if(Array.isArray(n))for(let e=0;e<n.length;e++)n[e]=Bc(n[e],t);else if(typeof n=="object")for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&(n[e]=Bc(n[e],t));return n}const uf=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],zy=5;var Xt;(function(n){n[n.CONNECT=0]="CONNECT",n[n.DISCONNECT=1]="DISCONNECT",n[n.EVENT=2]="EVENT",n[n.ACK=3]="ACK",n[n.CONNECT_ERROR=4]="CONNECT_ERROR",n[n.BINARY_EVENT=5]="BINARY_EVENT",n[n.BINARY_ACK=6]="BINARY_ACK"})(Xt||(Xt={}));class Hy{constructor(t){this.replacer=t}encode(t){return(t.type===Xt.EVENT||t.type===Xt.ACK)&&Jr(t)?this.encodeAsBinary({type:t.type===Xt.EVENT?Xt.BINARY_EVENT:Xt.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let e=""+t.type;return(t.type===Xt.BINARY_EVENT||t.type===Xt.BINARY_ACK)&&(e+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(e+=t.nsp+","),t.id!=null&&(e+=t.id),t.data!=null&&(e+=JSON.stringify(t.data,this.replacer)),e}encodeAsBinary(t){const e=ky(t),i=this.encodeAsString(e.packet),s=e.buffers;return s.unshift(i),s}}class wl extends Ie{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let e;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");e=this.decodeString(t);const i=e.type===Xt.BINARY_EVENT;i||e.type===Xt.BINARY_ACK?(e.type=i?Xt.EVENT:Xt.ACK,this.reconstructor=new Gy(e)):super.emitReserved("decoded",e)}else if(El(t)||t.base64)if(this.reconstructor)e=this.reconstructor.takeBinaryData(t),e&&(this.reconstructor=null,super.emitReserved("decoded",e));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let e=0;const i={type:Number(t.charAt(0))};if(Xt[i.type]===void 0)throw new Error("unknown packet type "+i.type);if(i.type===Xt.BINARY_EVENT||i.type===Xt.BINARY_ACK){const r=e+1;for(;t.charAt(++e)!=="-"&&e!=t.length;);const a=t.substring(r,e);if(a!=Number(a)||t.charAt(e)!=="-")throw new Error("Illegal attachments");const o=Number(a);if(!df(o)||o<1)throw new Error("Illegal attachments");if(o>this.opts.maxAttachments)throw new Error("too many attachments");i.attachments=o}if(t.charAt(e+1)==="/"){const r=e+1;for(;++e&&!(t.charAt(e)===","||e===t.length););i.nsp=t.substring(r,e)}else i.nsp="/";const s=t.charAt(e+1);if(s!==""&&Number(s)==s){const r=e+1;for(;++e;){const a=t.charAt(e);if(a==null||Number(a)!=a){--e;break}if(e===t.length)break}i.id=Number(t.substring(r,e+1))}if(t.charAt(++e)){const r=this.tryParse(t.substr(e));if(wl.isPayloadValid(i.type,r))i.data=r;else throw new Error("invalid payload")}return i}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,e){switch(t){case Xt.CONNECT:return _a(e);case Xt.DISCONNECT:return e===void 0;case Xt.CONNECT_ERROR:return typeof e=="string"||_a(e);case Xt.EVENT:case Xt.BINARY_EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&uf.indexOf(e[0])===-1);case Xt.ACK:case Xt.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Gy{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const e=By(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Vy(n){return typeof n=="string"}const df=Number.isInteger||function(n){return typeof n=="number"&&isFinite(n)&&Math.floor(n)===n};function Wy(n){return n===void 0||df(n)}function _a(n){return Object.prototype.toString.call(n)==="[object Object]"}function Xy(n,t){switch(n){case Xt.CONNECT:return t===void 0||_a(t);case Xt.DISCONNECT:return t===void 0;case Xt.EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&uf.indexOf(t[0])===-1);case Xt.ACK:return Array.isArray(t);case Xt.CONNECT_ERROR:return typeof t=="string"||_a(t);default:return!1}}function qy(n){return Vy(n.nsp)&&Wy(n.id)&&Xy(n.type,n.data)}const Yy=Object.freeze(Object.defineProperty({__proto__:null,Decoder:wl,Encoder:Hy,get PacketType(){return Xt},isPacketValid:qy,protocol:zy},Symbol.toStringTag,{value:"Module"}));function vi(n,t,e){return n.on(t,e),function(){n.off(t,e)}}const $y=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class ff extends Ie{constructor(t,e,i){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=e,i&&i.auth&&(this.auth=i.auth),this._opts=Object.assign({},i),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[vi(t,"open",this.onopen.bind(this)),vi(t,"packet",this.onpacket.bind(this)),vi(t,"error",this.onerror.bind(this)),vi(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...e){var i,s,r;if($y.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(e.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(e),this;const a={type:Xt.EVENT,data:e};if(a.options={},a.options.compress=this.flags.compress!==!1,typeof e[e.length-1]=="function"){const h=this.ids++,d=e.pop();this._registerAckCallback(h,d),a.id=h}const o=(s=(i=this.io.engine)===null||i===void 0?void 0:i.transport)===null||s===void 0?void 0:s.writable,c=this.connected&&!(!((r=this.io.engine)===null||r===void 0)&&r._hasPingExpired());return this.flags.volatile&&!o||(c?(this.notifyOutgoingListeners(a),this.packet(a)):this.sendBuffer.push(a)),this.flags={},this}_registerAckCallback(t,e){var i;const s=(i=this.flags.timeout)!==null&&i!==void 0?i:this._opts.ackTimeout;if(s===void 0){this.acks[t]=e;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let o=0;o<this.sendBuffer.length;o++)this.sendBuffer[o].id===t&&this.sendBuffer.splice(o,1);e.call(this,new Error("operation has timed out"))},s),a=(...o)=>{this.io.clearTimeoutFn(r),e.apply(this,o)};a.withError=!0,this.acks[t]=a}emitWithAck(t,...e){return new Promise((i,s)=>{const r=(a,o)=>a?s(a):i(o);r.withError=!0,e.push(r),this.emit(t,...e)})}_addToQueue(t){let e;typeof t[t.length-1]=="function"&&(e=t.pop());const i={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((s,...r)=>(this._queue[0],s!==null?i.tryCount>this._opts.retries&&(this._queue.shift(),e&&e(s)):(this._queue.shift(),e&&e(null,...r)),i.pending=!1,this._drainQueue())),this._queue.push(i),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const e=this._queue[0];e.pending&&!t||(e.pending=!0,e.tryCount++,this.flags=e.flags,this.emit.apply(this,e.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:Xt.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(i=>String(i.id)===t)){const i=this.acks[t];delete this.acks[t],i.withError&&i.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case Xt.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Xt.EVENT:case Xt.BINARY_EVENT:this.onevent(t);break;case Xt.ACK:case Xt.BINARY_ACK:this.onack(t);break;case Xt.DISCONNECT:this.ondisconnect();break;case Xt.CONNECT_ERROR:this.destroy();const i=new Error(t.data.message);i.data=t.data.data,this.emitReserved("connect_error",i);break}}onevent(t){const e=t.data||[];t.id!=null&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const e=this._anyListeners.slice();for(const i of e)i.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const e=this;let i=!1;return function(...s){i||(i=!0,e.packet({type:Xt.ACK,id:t,data:s}))}}onack(t){const e=this.acks[t.id];typeof e=="function"&&(delete this.acks[t.id],e.withError&&t.data.unshift(null),e.apply(this,t.data))}onconnect(t,e){this.id=t,this.recovered=e&&this._pid===e,this._pid=e,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Xt.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const e=this._anyListeners;for(let i=0;i<e.length;i++)if(t===e[i])return e.splice(i,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const e=this._anyOutgoingListeners;for(let i=0;i<e.length;i++)if(t===e[i])return e.splice(i,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const e=this._anyOutgoingListeners.slice();for(const i of e)i.apply(this,t.data)}}}function ys(n){n=n||{},this.ms=n.min||100,this.max=n.max||1e4,this.factor=n.factor||2,this.jitter=n.jitter>0&&n.jitter<=1?n.jitter:0,this.attempts=0}ys.prototype.duration=function(){var n=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),e=Math.floor(t*this.jitter*n);n=(Math.floor(t*10)&1)==0?n-e:n+e}return Math.min(n,this.max)|0};ys.prototype.reset=function(){this.attempts=0};ys.prototype.setMin=function(n){this.ms=n};ys.prototype.setMax=function(n){this.max=n};ys.prototype.setJitter=function(n){this.jitter=n};class zc extends Ie{constructor(t,e){var i;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.opts=e,La(this,e),this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor((i=e.randomizationFactor)!==null&&i!==void 0?i:.5),this.backoff=new ys({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(e.timeout==null?2e4:e.timeout),this._readyState="closed",this.uri=t;const s=e.parser||Yy;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=e.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var e;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(e=this.backoff)===null||e===void 0||e.setMin(t),this)}randomizationFactor(t){var e;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(e=this.backoff)===null||e===void 0||e.setJitter(t),this)}reconnectionDelayMax(t){var e;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(e=this.backoff)===null||e===void 0||e.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new Iy(this.uri,this.opts);const e=this.engine,i=this;this._readyState="opening",this.skipReconnect=!1;const s=vi(e,"open",function(){i.onopen(),t&&t()}),r=o=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",o),t?t(o):this.maybeReconnectOnOpen()},a=vi(e,"error",r);if(this._timeout!==!1){const o=this._timeout,c=this.setTimeoutFn(()=>{s(),r(new Error("timeout")),e.close()},o);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(s),this.subs.push(a),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(vi(t,"ping",this.onping.bind(this)),vi(t,"data",this.ondata.bind(this)),vi(t,"error",this.onerror.bind(this)),vi(t,"close",this.onclose.bind(this)),vi(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(e){this.onclose("parse error",e)}}ondecoded(t){Pa(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,e){let i=this.nsps[t];return i?this._autoConnect&&!i.active&&i.connect():(i=new ff(this,t,e),this.nsps[t]=i),i}_destroy(t){const e=Object.keys(this.nsps);for(const i of e)if(this.nsps[i].active)return;this._close()}_packet(t){const e=this.encoder.encode(t);for(let i=0;i<e.length;i++)this.engine.write(e[i],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,e){var i;this.cleanup(),(i=this.engine)===null||i===void 0||i.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const e=this.backoff.duration();this._reconnecting=!0;const i=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(s=>{s?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",s)):t.onreconnect()}))},e);this.opts.autoUnref&&i.unref(),this.subs.push(()=>{this.clearTimeoutFn(i)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const Ds={};function ta(n,t){typeof n=="object"&&(t=n,n=void 0),t=t||{};const e=Dy(n,t.path||"/socket.io"),i=e.source,s=e.id,r=e.path,a=Ds[s]&&r in Ds[s].nsps,o=t.forceNew||t["force new connection"]||t.multiplex===!1||a;let c;return o?c=new zc(i,t):(Ds[s]||(Ds[s]=new zc(i,t)),c=Ds[s]),e.query&&!t.query&&(t.query=e.queryKey),c.socket(e.path,t)}Object.assign(ta,{Manager:zc,Socket:ff,io:ta,connect:ta});function Hc(){const n=Bt.useId(),t=Bt.useSyncExternalStore(Od,Ca);return k.jsxs("section",{className:"co-sensitivity","aria-label":"視角設定",children:[k.jsxs("label",{htmlFor:n,children:["視角靈敏度 ",k.jsxs("output",{htmlFor:n,children:[t.toFixed(1)," 倍"]})]}),k.jsx("input",{id:n,type:"range",min:xl,max:yl,step:Nd,value:t,"aria-valuetext":`${t.toFixed(1)} 倍`,onChange:e=>ma(Number(e.target.value))}),k.jsx("p",{children:"滑鼠與觸控共用倍率，水平與垂直同步調整；1 倍為原本手感。"}),k.jsx("button",{type:"button",onClick:()=>ma(Qs),children:"恢復預設（2 倍）"})]})}let Zy=0;class Ky{constructor(t,e){this.root=t;const i=`co-tactical-${++Zy}`;this.shell.className="co-tactical",this.shell.dataset.gameUi="",this.shell.innerHTML=`<button type="button" class="co-tactical-trigger" aria-label="戰術板" aria-controls="${i}" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 3v18M14 13h3m-3 4h3"/></svg></button>
      <section class="co-mp-roster" id="${i}" aria-label="戰術板" tabindex="-1">
      <header class="co-tactical-heading"><b></b><button type="button" class="co-tactical-close" aria-label="關閉戰術板">×</button></header>
      <div class="co-tactical-scroll"><div class="co-tactical-columns" aria-hidden="true"><span>名次</span><span>玩家</span><span>積分</span><span>賞金</span><span>K/D</span></div><div class="co-tactical-rows"></div></div></section>`,t.append(this.shell),this.panel=this.shell.querySelector(".co-mp-roster"),this.trigger=this.shell.querySelector(".co-tactical-trigger"),this.body=this.shell.querySelector(".co-tactical-rows"),this.heading=this.shell.querySelector(".co-tactical-heading b"),this.setTouchMode(e),t.addEventListener("click",this.onClick,!0),t.addEventListener("pointerdown",this.onPointerDown,!0),t.addEventListener("pointermove",this.onPointerMove,!0),t.addEventListener("pointerup",this.onPointerEnd,!0),t.addEventListener("pointercancel",this.onPointerEnd,!0),window.PointerEvent||(t.addEventListener("touchstart",this.onTouchStart,{capture:!0,passive:!1}),t.addEventListener("touchmove",this.onTouchMove,{capture:!0,passive:!1}),t.addEventListener("touchend",this.onTouchEnd,!0),t.addEventListener("touchcancel",this.onTouchEnd,!0)),t.addEventListener("armory:open",this.close),window.addEventListener("keydown",this.onKey),window.addEventListener("blur",this.onBlur),window.addEventListener("resize",this.layout)}shell=document.createElement("div");panel;trigger;body;heading;rows=new Map;open=!1;touch=!1;active=!0;gestures=new Map;suppressClick=!1;get isOpen(){return this.touch&&this.open}setTouchMode(t){this.touch=t,this.root.classList.toggle("co-touch-ui",t),this.close()}setActive(t){this.active=t,t||this.close(),this.shell.hidden=!t}toggle(){if(!(!this.touch||!this.active)){if(this.open){this.close();return}this.open=!0,this.panel.hidden=!1,this.trigger.setAttribute("aria-expanded","true"),this.root.dispatchEvent(new Event("tactical:open")),this.layout()}}close=()=>{this.open=!1,this.panel.hidden=this.touch,this.trigger.setAttribute("aria-expanded","false"),this.layout()};onBlur=()=>{this.close(),this.gestures.clear(),this.suppressClick=!1};onKey=t=>{this.isOpen&&t.key==="Escape"&&(t.preventDefault(),this.close(),this.trigger.focus({preventScroll:!0}))};contains(t){return t instanceof Node&&this.shell.contains(t)}consume(t,e=!1){e&&t.preventDefault(),t.stopImmediatePropagation()}onPointerDown=t=>{if(!(!this.touch||!this.active)){if(this.suppressClick=!1,this.contains(t.target)){this.gestures.set(t.pointerId,!1),this.consume(t);return}this.open&&(this.close(),this.gestures.set(t.pointerId,!0),this.suppressClick=!0,this.root.setPointerCapture?.(t.pointerId),this.consume(t,!0))}};onPointerMove=t=>{this.gestures.has(t.pointerId)&&this.consume(t,this.gestures.get(t.pointerId))};onPointerEnd=t=>{if(!this.gestures.has(t.pointerId))return;const e=this.gestures.get(t.pointerId);this.gestures.delete(t.pointerId),this.consume(t,e)};onTouchStart=t=>{if(!this.touch||!this.active)return;this.suppressClick=!1;const e=this.contains(t.target),i=this.open&&!e;if(!(!e&&!i)){i&&(this.close(),this.suppressClick=!0);for(const s of Array.from(t.changedTouches))this.gestures.set(s.identifier,i);this.consume(t,i)}};onTouchMove=t=>{const e=Array.from(t.changedTouches);e.length&&e.every(i=>this.gestures.has(i.identifier))&&this.consume(t,e.some(i=>this.gestures.get(i.identifier)))};onTouchEnd=t=>{const e=Array.from(t.changedTouches),i=e.every(r=>this.gestures.has(r.identifier)),s=e.some(r=>this.gestures.get(r.identifier));for(const r of e)this.gestures.delete(r.identifier);i&&this.consume(t,s)};onClick=t=>{if(!this.touch||!this.active)return;if(this.suppressClick){this.suppressClick=!1,this.consume(t,!0);return}const e=t.target;!(e instanceof Element)||!this.contains(e)||(this.consume(t),e.closest(".co-tactical-trigger")?this.toggle():e.closest(".co-tactical-close")&&(this.close(),this.trigger.focus({preventScroll:!0})))};update(t,e,i){this.heading.textContent=`${e||"房間"} · ${Math.round(i)}ms`;const s=this.shell.querySelector(".co-tactical-scroll"),r=s.scrollTop,a=Jx(t),o=new Set(a.map(c=>c.id));for(const[c,l]of this.rows)o.has(c)||(l.remove(),this.rows.delete(c));a.forEach((c,l)=>{let h=this.rows.get(c.id);if(!h){h=document.createElement("div"),h.className="co-tactical-row";for(let u=0;u<5;u++)h.append(document.createElement("span"));this.rows.set(c.id,h)}[String(c.rank),c.name,String(c.score),String(c.bounty),`${c.kills}/${c.deaths}`].forEach((u,p)=>{h.children[p].textContent!==u&&(h.children[p].textContent=u)}),h.classList.toggle("is-high-bounty",c.bounty>=jd),this.body.children[l]!==h&&this.body.insertBefore(h,this.body.children[l]??null)}),s.scrollTop=r,this.layout()}layout=()=>{const t=this.touch&&!this.open?this.trigger:this.panel;this.root.style.setProperty("--co-roster-bottom",`${t.getBoundingClientRect().bottom-this.root.getBoundingClientRect().top}px`)};dispose(){this.gestures.clear(),this.rows.clear(),this.root.removeEventListener("click",this.onClick,!0),this.root.removeEventListener("pointerdown",this.onPointerDown,!0),this.root.removeEventListener("pointermove",this.onPointerMove,!0),this.root.removeEventListener("pointerup",this.onPointerEnd,!0),this.root.removeEventListener("pointercancel",this.onPointerEnd,!0),this.root.removeEventListener("touchstart",this.onTouchStart,!0),this.root.removeEventListener("touchmove",this.onTouchMove,!0),this.root.removeEventListener("touchend",this.onTouchEnd,!0),this.root.removeEventListener("touchcancel",this.onTouchEnd,!0),this.root.removeEventListener("armory:open",this.close),window.removeEventListener("keydown",this.onKey),window.removeEventListener("blur",this.onBlur),window.removeEventListener("resize",this.layout),this.root.classList.remove("co-touch-ui"),this.root.style.removeProperty("--co-roster-bottom"),this.shell.remove()}}const jy=15;function bn(n,t){return typeof n=="object"&&n!==null&&n.roundId===t}const En={name:"虛空騎士",location:{x:12,y:0,z:8},enrageRate:1.22,alliedHp:1e3,collapseMs:900},cu={durationMs:6e4,speed:1.1},Jy="void-warden",Ae={slash:{name:"三連斬",duration:1970,impact:[500,990,1640],range:5.8,angle:Math.PI*5/6,damage:22,recovery:780},dash:{name:"高速突刺",duration:1040,windup:680,range:13,width:1.35,damage:34,recovery:950},leap:{name:"跳躍下劈",duration:1250,lift:360,windup:690,range:10,radius:6.5,damage:40,recovery:900},burst:{name:"感染爆發",duration:1370,launch:790,impact:1220,radius:2.35,range:11,count:10,width:.68,damage:28,recovery:950}},Te={cracks:430,chains:880,reveal:1580,breakChains:3e3,land:3650,title:4520,finish:5250,titleDuration:1750},Qy=(n,t)=>n.ownerId!==t&&n.state!=="SPAWN"&&n.state!=="DEFEATED"&&n.state!=="ALLIED"&&n.state!=="DESPAWN",tM=(n,t,e)=>(n>e?.65:1)*(t>e&&t-cu.durationMs<=e?cu.speed:1),ea=72,lu=1.1,hu=1.65,uu=new Pt(16763490),du=new Pt(16739094),fu=new Pt(12331270),eM=Array.from({length:ea},(n,t)=>{const e=t*2.399963;return{emitter:t%2,side:Math.cos(e),outward:.66+Math.abs(Math.sin(e))*.68,spread:.6+t%9*.17,lift:1.2+t%11*.26,delay:t*.618%1,lifetime:.49+t%13*.043,size:.046+t%7*.012}});class iM{group=new Se;emitters=[new ve,new ve];sources=[new C,new C];geometry=new ge;vertices=new Float32Array(ea*18);colors=new Float32Array(ea*18);inverse=new ne;shockwave;constructor(){this.group.name="Infection burst",this.group.visible=!1,this.emitters[0].position.set(.07,.72,.41),this.emitters[1].position.set(-.38,1.24,-.58),this.geometry.setAttribute("position",new Ue(this.vertices,3).setUsage(Zi)),this.geometry.setAttribute("color",new Ue(this.colors,3).setUsage(Zi));const t=new Lt(this.geometry,new Zt({vertexColors:!0,side:Le,depthWrite:!1,transparent:!0,blending:ui,toneMapped:!1}));t.frustumCulled=!1,t.renderOrder=2,this.group.add(t),this.shockwave=new Lt(new Qi(4.65,4.65),new We({uniforms:{progress:{value:0}},depthWrite:!1,transparent:!0,blending:ui,toneMapped:!1,vertexShader:`
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
        }`})),this.shockwave.rotation.x=-Math.PI/2,this.shockwave.position.y=.028,this.shockwave.renderOrder=1,this.group.add(this.shockwave)}update(t,e){if(this.group.visible=t!==null,t===null)return;this.shockwave.visible=t<.82,this.shockwave.material.uniforms.progress.value=Math.min(1,t/.82),this.group.updateWorldMatrix(!0,!1),this.inverse.copy(this.group.matrixWorld).invert();for(const[c,l]of this.emitters.entries())l.getWorldPosition(this.sources[c]).applyMatrix4(this.inverse);const i=t<lu,s=i?e?36:ea:e?14:32,r=i?t:t-lu,a=i?1:.52;let o=0;for(let c=0;c<s;c++){const{emitter:l,side:h,outward:d,spread:u,lift:p,delay:g,lifetime:_,size:m}=eM[c],f=i?r-g*.12:(r+g*hu)%hu;if(f<0||f>=_)continue;const M=this.sources[l],T=l===0?1:-1,y=f/_,w=i?.34*(1-Math.exp(-8*f)):0,b=M.x+h*u*(a*f+w),A=M.y+(p*a-1.7*f)*f,x=M.z+T*d*(a*f+w*.73),E=m*(1-y*.59),P=E*(i?3.5:2.5),L=Math.min(1,f/.032)*(1-y)**1.25*(i?1.14:.95);o=this.vertex(o,b,A+E,x,uu,L),o=this.vertex(o,b-E,A,x+E*.45,du,L*.8),o=this.vertex(o,b-h*P,A-P,x-T*P*.5,fu,L*.42),o=this.vertex(o,b,A+E,x,uu,L),o=this.vertex(o,b+E,A,x-E*.45,du,L*.8),o=this.vertex(o,b-h*P,A-P,x-T*P*.5,fu,L*.42)}this.geometry.setDrawRange(0,o/3),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0}vertex(t,e,i,s,r,a){return this.vertices[t]=e,this.vertices[t+1]=i,this.vertices[t+2]=s,this.colors[t]=r.r*a,this.colors[t+1]=r.g*a,this.colors[t+2]=r.b*a,t+3}}const nM=4.8,FM=[{id:"idle",label:"待機"},{id:"walk",label:"走路"},{id:"attack",label:"三連斬"}],Ci=2695994,Or=4469333,Pi=1643810,sM=16741150,pf=[[1,.42],[.42,1],[-.42,1],[-1,.42],[-1,-.42],[-.42,-1],[.42,-1],[1,-.42]],Bs=[[-.13,.076,.184,0,.066],[-.073,.084,.177,0,.068],[.06,.045,.061]],rM=pf.map(([n,t])=>new C(n*Bs[0][1],Bs[0][0],t*Bs[0][2]+Bs[0][4])),Mo=2.22,pu=1.42,mu=30;function aM(){const t=new Uint8Array(4096);for(let i=0;i<32;i++)for(let s=0;s<32;s++){const r=Math.hypot((s+.5)/32-.5,(i+.5)/32-.5)*2,a=(i*32+s)*4;t.set([255,255,255,Math.round(255*Math.max(0,1-r)**2)],a)}const e=new fl(t,32,32);return e.magFilter=e.minFilter=Ge,e.needsUpdate=!0,e}function oM(n){const t=[],e=[],i=new Pt;for(const[r,a,o,c]of n){i.setHex(c);for(const[l,h,d]of[r,a,o])t.push(l,h,d),e.push(i.r,i.g,i.b)}const s=new ge;return s.setAttribute("position",new ae(t,3)),s.setAttribute("color",new ae(e,3)),s.computeVertexNormals(),s}function Pn(n,t,e,i,s,r,a=r){n.push([t,e,i,r],[t,i,s,a])}function Ne(n,t,e=pf){const i=[],s=n.map(([o,c,l,h=0,d=0])=>e.map(([u,p])=>[h+u*c,o,d+p*l])),r=e.length;for(let o=1;o<s.length;o++)for(let c=0;c<r;c++){const l=(c+1)%r;Pn(i,s[o-1][l],s[o-1][c],s[o][c],s[o][l],t[c%t.length],t[(c+o%2)%t.length])}const a=s[s.length-1];for(let o=1;o<r-1;o++)i.push([s[0][0],s[0][o],s[0][o+1],t[0]]),i.push([a[0],a[o+1],a[o],t[0]]);return i}function cM(){const n=[[0,.192,.32],[.132,.237,.27],[.285,.27,.173],[.321,.092,.17],[.277,-.074,.199],[.202,-.224,.267],[0,-.344,.352],[0,-.089,.402]],t=n.flatMap((d,u)=>{const[p,g,_]=d,[m,f,M]=n[(u+1)%n.length];return[d,[(p+m)/2,(g+f)/2,(_+M)/2]]}),e=.34,i=.161,s=-.12,r=(d,u)=>.434-.78*d-.18*u,a=t.map((d,u)=>{const p=(7-u)*Math.PI/8,g=Math.sin(p),_=Math.cos(p)*.056*(1-.3*g),m=g*.102,f=i+_*Math.cos(e)+m*Math.sin(e),M=s+m*Math.cos(e)-_*Math.sin(e);return[f,M,r(f,M)]}),o=[i-.015,s-.004,r(i,s)-.115],c=[15854817,15394269,14998998,15196121,15920096,15854048,16117219,15985892],l=[],h=[];for(const d of[-1,1]){const u=[],p=a.map(([_,m,f])=>[_-.015,m-.004,f-.105]),g=([_,m,f])=>[d*_,m,f];for(let _=0;_<a.length;_++){const m=(_+1)%a.length;if(Pn(u,t[_],t[m],a[m],a[_],c[Math.floor(_/2)]),Pn(u,a[_],a[m],p[m],p[_],788753),h.push([g(o),g(p[_]),g(p[m]),16777215]),_<12){const f=([M,T,y])=>[M*.9,T+.011,y-.099];Pn(u,t[_],f(t[_]),f(t[m]),t[m],13287615)}}for(const[_,m,f,M]of u)l.push([g(_),g(m),g(f),M])}return{faceplate:l,eyeWells:h}}function lM(n,t,e,i){const s=(o,c)=>{const l=c===.5?.29:c===0?-.51:-.3,h=n+(c-.5)*t+o*(i<4?.064:-.044),d=[.46,.72,.97,1.16][o]+(c===.5?.059:0),u=o===3?e+l:[0,.43,1.01][o];return[Math.sin(h)*d,-.04-u+Math.cos(h)*.12,Math.cos(h)*d*.66-.13]},r=[],a=[3746635,2628918,5259360,3352388,5847117];for(let o=0;o<2;o++)for(const c of[0,.5]){const l=(i+o+c*2)%a.length;Pn(r,s(o,c),s(o+1,c),s(o+1,c+.5),s(o,c+.5),a[l],a[(l+1)%a.length])}for(const o of[0,.5]){const c=i%3===0&&o===.5?8997446:a[(i+3)%a.length];Pn(r,s(2,o),s(3,o),s(3,o+.5),s(2,o+.5),c,a[(i+1)%a.length])}return r}const mf=2.78,hM=[[.41,.59],[.9,1.09],[1.52,1.76]],So=[[0,0,0,0,.65,1.94,.24,47,-54],[.41,.08,-.38,.46,.96,2.03,.66,91,37],[.5,.37,.06,.63,.54,1.58,1.22,5,1],[.59,.47,.54,.77,-.4,1.13,1.34,-91,-26],[.66,.47,.53,.79,-.43,1.1,1.37,-94,-28],[.9,.43,.51,.51,-.43,2.04,1.27,-90,36],[.99,.6,.04,.66,.3,1.55,1.47,-2,2],[1.09,.68,-.43,.76,1.04,1.12,1.08,94,-26],[1.17,.68,-.44,.76,1.07,1.1,1.1,96,-27],[1.52,.59,-.23,.38,.82,2.55,1.06,55,61],[1.64,.86,.06,.69,.49,1.98,1.52,8,16],[1.76,1.03,.37,.88,-.2,1.11,1.83,-40,-31],[1.92,1.02,.34,.88,-.22,1.05,1.83,-43,-29],[2.59,0,0,0,.65,1.94,.24,47,-54],[mf,0,0,0,.65,1.94,.24,47,-54]].map(([n,...t])=>({time:n,values:t})),kr=.69,bo=.66,gu=new C(0,-1,0),_u=2;class uM{group=new Se;triangleCount;hips=new Se;body=new Se;infectionBurst=new iM;head=new Se;arms=[];legs=[];cape=[];plates=new Fs({vertexColors:!0,roughness:.78,metalness:.12});fabric=new Fs({vertexColors:!0,side:Le,roughness:.97});face=new Fs({vertexColors:!0,side:Le,roughness:.49});eyeWells=new Zt({color:262918,side:Le});glow=new Fs({vertexColors:!0,color:16764303,emissive:sM,emissiveIntensity:1.1,roughness:.58});particleGeometry=new ge;glowMap=aM();particleMaterial=new sd({map:this.glowMap,color:16752723,size:.13,transparent:!0,opacity:.85,depthWrite:!1,blending:ui});haloMaterial=new hl({map:this.glowMap,color:16741424,transparent:!0,opacity:.24,depthWrite:!1,blending:ui,toneMapped:!1});particlePositions=new Float32Array(mu*3);sole=new C;inverseRoot=new ne;weaponTipAxis=new C;weaponTipDistance=0;hiltPosition=new C;bladeDirection=new C;weaponGroup=new Se;rootRotation=new ki;jointRotation=new ki;shoulderPosition=new C;elbowDirection=new C;handDirection=new C;elbowBend=new C;bladeBase=new ve;bladeTip=new ve;constructor(){this.group.name="Void Warden",this.group.add(this.hips),this.hips.position.y=Mo,this.hips.add(this.body),this.body.add(this.head),this.head.position.set(0,pu,.05),this.piece(this.hips,Ne([[-.25,.134,.145],[-.075,.326,.221],[.16,.225,.193]],[Pi,Ci,Or])),this.piece(this.body,Ne([[0,.19,.17],[.31,.245,.222],[.77,.346,.258],[1.08,.439,.233],[1.28,.189,.172]],[2367789,2695473,4140873,1775653,3483969])),this.piece(this.body,Ne([[1.08,.174,.12],[1.46,.141,.137]],[Pi,Ci])),this.piece(this.head,Ne([[-.298,.1,.112,0,-.036],[-.158,.221,.165,0,-.055],[.095,.282,.215,0,-.081],[.246,.244,.19,0,-.087],[.284,.16,.126,0,-.089]],[Pi,Ci]));const{faceplate:t,eyeWells:e}=cM();this.piece(this.head,t,this.face).name="Faceplate",this.piece(this.head,e,this.eyeWells).name="Recessed eyes";const i=[14076615,15787736,16183784,14604237,15590616,13352381,12958140,15063502];for(const c of[-1,1]){const l=c===1,h=nM-Mo-pu+(l?.033:-.073);this.piece(this.head,Ne([[.105,.139,.126,c*.207,.105],[.249,.123,.138,c*.295,.053],[.386,.11,.128,c*.375,-.005],[.54,.098,.106,c*.432,-.051],[.69,.081,.09,c*(l?.463:.456),-.092],[.83,.063,.071,c*(l?.444:.432),-.113],[.946,.042,.049,c*(l?.397:.379),-.137],[h-.07,.024,.027,c*(l?.342:.337),-.158],[h,.002,.002,c*(l?.291:.307),-.179]],i)),l&&this.piece(this.head,Ne([[.642,.045,.055,.415,-.081],[.749,.033,.04,.373,-.086],[.841,.002,.003,.304,-.073]],i));const d=this.joint(this.body,c*.448,1.016,0),u=this.joint(d,0,-kr,0),p=this.joint(u,0,-bo,0);this.arms.push({shoulder:d,elbow:u,hand:p}),this.piece(d,Ne([[-.71,.057,.061],[-.46,.071,.078],[-.18,.106,.109],[.02,.153,.144,c*.038],[.13,.095,.091]],[Pi,Ci,Or,4404044])),this.piece(u,Ne([[-.68,.049,.055],[-.52,.063,.076],[-.24,.094,.094],[-.052,.105,.112],[.07,.064,.069]],[Ci,Pi,3353150,4863828])),this.piece(p,Ne([[-.205,.042,.052],[-.145,.086,.091],[-.04,.091,.092],[.04,.063,.069]],[Pi,Ci]));const g=[];for(let M=0;M<3;M++){const T=(M-1)*.05;g.push(...Ne([[-.26,.023,.036,T,.02],[-.16,.032,.053,T,.044],[-.074,.026,.045,T,.045]],[Ci,Pi,5324890]))}this.piece(p,g);const _=this.joint(this.hips,c*.214,-.07,0),m=this.joint(_,0,-1.045,0),f=this.joint(m,0,-.99,0);this.legs.push({thigh:_,shin:m,foot:f}),this.piece(_,Ne([[-1.08,.063,.078],[-.85,.071,.084],[-.36,.108,.116],[-.06,.136,.133],[.09,.102,.104]],[Pi,2761011,3812420,Ci])),this.piece(m,Ne([[-.99,.034,.049],[-.76,.045,.055],[-.26,.072,.086],[-.055,.092,.107,0,.015],[.07,.063,.072]],[Ci,Pi,Or,3352124])),this.piece(f,Ne(Bs,[Pi,Ci,Or]))}const s=[1.32,1.96,2.24,1.85,2.01,2.21,1.88,1.4];s.forEach((c,l)=>{const h=.67+l*(2*Math.PI-1.34)/(s.length-1),d=this.piece(this.body,lM(h,.87,c,l),this.fabric);d.position.y=1.15,this.cape.push(d)});const r=[];for(const[c,l]of[.35,1,1.72,2.47,3.18,3.94,4.69,5.44].entries()){const h=[6966126,3877706,5850207,2695219],d=(m,f,M)=>[Math.sin(m)*f,M,Math.cos(m)*f*.71-.04],u=d(l,.21,1.28),p=d(l+.76,.23,1.31),g=d(l+.74,.69,1.035),_=d(l+.01,.68,1.055);Pn(r,u,p,g,_,h[c%4],h[(c+1)%4]),r.push([_,g,d(l+.42,.88,.79),h[(c+2)%4]])}this.piece(this.body,r,this.fabric),this.infection(),this.weapon(this.arms[1].hand);let a=0;this.group.traverse(c=>{c instanceof Lt&&(a+=(c.geometry.index?.count??c.geometry.getAttribute("position").count)/3)}),this.triangleCount=a,this.particleGeometry.setAttribute("position",new Ue(this.particlePositions,3).setUsage(Zi)),this.particleGeometry.setDrawRange(0,18);const o=new js(this.particleGeometry,this.particleMaterial);o.frustumCulled=!1,this.group.add(o,this.infectionBurst.group),this.body.add(...this.infectionBurst.emitters),this.pose("idle",0,!1)}joint(t,e,i,s){const r=new Se;return r.position.set(e,i,s),t.add(r),r}piece(t,e,i=this.plates){const s=new Lt(oM(e),i);return t.add(s),s}infection(){const t=[],e=[];for(const[i,s,r,a]of[[.078,.69,.254,.46],[-.4,1.23,-.37,1.16],[-.13,1.16,-.48,.69]]){const o=Math.sign(r),c=new ul(this.haloMaterial);c.position.set(i,s+.01,r+.24*o),c.scale.setScalar(.83*a),this.body.add(c);const l=Ne([[s-.19*a,.094*a,.07*a,i,r],[s-.08*a,.26*a,.16*a,i,r],[s+.11*a,.24*a,.19*a,i,r],[s+.23*a,.07*a,.07*a,i,r]],[3285554,6305608,2169643,5386305]);t.push(...l),e.push(...Ne([[s-.175*a,.02,.022,i,r+.11*o*a],[s-.06*a,.117*a,.082*a,i,r+.14*o*a],[s+.059*a,.15*a,.094*a,i-.02,r+.16*o*a],[s+.18*a,.033,.038,i+.02,r+.125*o*a]],[16753477,16741680,16761188,15681556,16745506,16756539]));const h=(d,u,p)=>[i+d*a,s+u*a,r+p*o*a];e.push([h(-.03,-.03,.235),h(.022,-.04,.235),h(-.056,-.34,.11),15746323],[h(.03,.05,.244),h(.06,.016,.239),h(.195,.142,.14),16738594],[h(-.09,.045,.21),h(-.12,.02,.2),h(-.24,.12,.05),16340516])}this.piece(this.body,t),this.piece(this.body,e,this.glow)}weapon(t){const e=this.weaponGroup;e.position.set(0,-.1,.07),e.scale.setScalar(_u),t.add(e);const i=[[0,1],[-1,0],[0,-1],[1,0]];this.piece(e,Ne([[-.28,.074,.08],[-.13,.078,.085],[.14,.075,.08],[.24,.115,.13],[.4,.061,.068]],[4075847,2169127,6706279,4534349])),this.piece(e,Ne([[-.45,.15,.11],[-.37,.28,.13],[-.25,.32,.15],[-.2,.11,.085]],[8878484,5256531,12366005,3614781],i)),this.piece(e,Ne([[-2.12,.002,.003,.098],[-1.51,.077,.054,.021],[-.67,.162,.115],[-.4,.194,.129],[-.3,.109,.08]],[12823993,7889789,14268610,9667998],i)),this.piece(e,Ne([[-1.51,.006,.008,.04,.05],[-.73,.022,.014,.015,.113],[-.45,.038,.018,.006,.127]],[16741680,15224094],i),this.glow),this.bladeBase.position.set(0,-.47,0),this.bladeTip.position.set(.098,-2.12,0),this.weaponTipAxis.copy(this.bladeTip.position).multiplyScalar(_u).add(e.position),this.weaponTipDistance=this.weaponTipAxis.length(),this.weaponTipAxis.divideScalar(this.weaponTipDistance),e.add(this.bladeBase,this.bladeTip)}pose(t,e,i){this.weaponGroup.visible=!0;const s=e*(i?En.enrageRate:1),r=s%mf,a=s*Math.PI*1.75,o=Math.sin(s*2.7),c=t==="walk",l=t==="attack";let h=0,d=0,u=0,p=0,g=0,_=0,m=0,f=0;const M=l&&hM.some(([T,y])=>r>=T&&r<=y);if(l){const T=So.findIndex(P=>P.time>r),{time:y,values:w}=So[T-1],{time:b,values:A}=So[T],x=(r-y)/(b-y),E=M?x:x*x*(3-2*x);[h,d,u,p,g,_,m,f]=w.map((P,L)=>ze.lerp(P,A[L],E))}this.hips.position.set(0,Mo+(c?-.06+Math.abs(Math.sin(a))*.075:o*.016),h),this.hips.rotation.y=c?Math.sin(a)*.085:d*.21,this.body.rotation.set((c?.1:u)+(i?.06:0),d*.79,c?Math.sin(a)*.05:-d*.045),this.head.rotation.set(-this.body.rotation.x*.68+o*.025,-d*.34,i?-.07:o*.021);for(let T=0;T<2;T++){const y=T===0?-1:1,w=c?Math.sin(a)*y:0,{thigh:b,shin:A,foot:x}=this.legs[T];if(b.rotation.set(w*.41,y*.1,y*(c?.088:.145)),A.rotation.x=Math.max(0,-w)*.66,l){const F=Math.min(1,u/.7);b.rotation.x=(y===1?-1.19:.72)*F,A.rotation.x=(y===1?1.68:.25)*F}x.rotation.x=-(b.rotation.x+A.rotation.x)*(l?1:.65);const{shoulder:E,elbow:P,hand:L}=this.arms[T];y===1?(E.rotation.set(-.12-w*.18-(c?.19:0),0,.14),P.rotation.set(-.25-Math.max(0,w)*.19,0,0),L.rotation.set(-.34,.046,.12)):(E.rotation.set(-.04-w*.38-u*.8,-.12,-.14-Math.abs(d)*.38),P.rotation.x=-.21-Math.abs(d)*.33,L.rotation.set(-.03,.01,-.05))}return this.plantFeet(),l?this.swingBlade(p,g,_,m,f):this.aimBlade(c?39+Math.sin(a)*4:73,-27),this.cape.forEach((T,y)=>{T.rotation.x=(c?.046:.012)*Math.sin(s*3.2+y*.48)-u*.18,T.rotation.z=(c?.066:.025)*Math.sin(s*2.8+y*.42)-d*.11}),this.glow.emissiveIntensity=(i?2.5:.9)+(o+1)*(i?.4:.16),this.haloMaterial.opacity=(i?.53:.22)+(o+1)*(i?.08:.025),this.eyeWells.color.setHex(i?16738323:262918),i&&this.eyeWells.color.multiplyScalar(1.1+(o+1)*.43),M}swingBlade(t,e,i,s,r){const{shoulder:a,elbow:o,hand:c}=this.arms[1];a.getWorldPosition(this.shoulderPosition).applyMatrix4(this.inverseRoot),this.handDirection.set(t,e,i).sub(this.shoulderPosition);const l=ze.clamp(this.handDirection.length(),.12,kr+bo-.015);this.handDirection.normalize();const h=(kr**2-bo**2+l**2)/(2*l),d=Math.sqrt(Math.max(0,kr**2-h**2));this.elbowBend.set(.85,-.58,-.37),this.elbowBend.addScaledVector(this.handDirection,-this.elbowBend.dot(this.handDirection)).normalize(),this.elbowDirection.copy(this.handDirection).multiplyScalar(h).addScaledVector(this.elbowBend,d),this.group.getWorldQuaternion(this.rootRotation),this.aimJoint(a,gu,this.elbowDirection),this.handDirection.multiplyScalar(l).sub(this.elbowDirection),this.aimJoint(o,gu,this.handDirection),this.aimBlade(s,r)}aimBlade(t,e){const{hand:i}=this.arms[1];this.group.getWorldQuaternion(this.rootRotation),i.getWorldPosition(this.hiltPosition).applyMatrix4(this.inverseRoot);const s=ze.degToRad(t),r=ze.degToRad(e),a=ze.clamp((.105-this.hiltPosition.y)/this.weaponTipDistance,-1,1),o=Math.max(Math.sin(r),a),c=Math.sqrt(1-o*o);this.bladeDirection.set(Math.sin(s)*c,o,Math.cos(s)*c),this.aimJoint(i,this.weaponTipAxis,this.bladeDirection)}entrancePose(t){this.pose("idle",t/1e3,!1);const{land:e,title:i}=Te,r=1-ze.smoothstep(t,e+80,i+400);this.body.rotation.x=.53*r,this.head.rotation.x=.4*r;const a=ze.smoothstep(t,e-125,e+40)*(1-ze.smoothstep(t,e+80,e+640));if(a>0){for(const{thigh:c,shin:l,foot:h}of this.legs)c.rotation.x=-.56*a,l.rotation.x=1.13*a,h.rotation.x=-.57*a;this.plantFeet()}for(const[c,{shoulder:l,elbow:h}]of this.arms.entries()){const d=c===0?-1:1;l.rotation.set(-.26*r,d*.12*r,d*(.14+.43*r)),h.rotation.x=-.23-.48*r}this.weaponGroup.visible=t>=e+130;const o=Math.sin(Math.PI*ze.smoothstep(t,e+140,Te.finish));this.aimBlade(73-27*o,-27+53*o)}combatPose(t,e,i){const s=Math.max(0,e);if(t==="slash"){this.pose("attack",Math.min(s,Ae.slash.duration)/1e3/(i?En.enrageRate:1),i);return}if(this.pose("idle",s/1e3,i),t==="dash"){const r=ze.smoothstep(s,0,Ae.dash.windup);this.body.rotation.x=.58*r,this.head.rotation.x=-.3*r,this.swingBlade(.58,1.63-.42*r,.28+.85*r,24-24*r,20-22*r)}else if(t==="leap"){const r=ze.smoothstep(s,Ae.leap.windup,Ae.leap.duration);this.body.rotation.x=.1+.65*r,this.head.rotation.x=-.34*r,this.swingBlade(.64-.35*r,2.52-1.31*r,.7+.76*r,50-73*r,71-110*r)}else{const r=Math.sin(Math.PI*ze.smoothstep(s,180,Ae.burst.duration));this.body.rotation.x=-.17*r,this.head.rotation.x=.19*r,this.arms[0].shoulder.rotation.z=-.9*r-.14,this.swingBlade(.68+.24*r,1.47+.6*r,.52,92,12+25*r),this.glow.emissiveIntensity+=2.8*r}}selfStabPose(t){this.pose("idle",t/1e3,!0);const e=ze.smoothstep(t,0,410),i=ze.smoothstep(t,450,590);this.body.rotation.x=.24*i-.09*e,this.head.rotation.x=.38*i,this.swingBlade(.87-.56*i,2.12+.48*e-.67*i,.55+.76*e,59+113*e,57-71*i)}collapsePose(t,e){this.pose("idle",t/1e3,!1);const i=ze.smoothstep(t,0,e?400:700),s=e?1-i:i;this.body.rotation.x=s*.62,this.head.rotation.x=s*.42;for(const[r,{thigh:a,shin:o,foot:c}]of this.legs.entries())a.rotation.x=-(r===0?.82:1.22)*s,o.rotation.x=(r===0?1.88:1.63)*s,c.rotation.x=-(a.rotation.x+o.rotation.x)*.94;this.plantFeet(),this.aimBlade(75,-31)}bindingPoints(t,e){this.arms[0].hand.getWorldPosition(t),this.arms[1].hand.getWorldPosition(e)}aimJoint(t,e,i){t.parent.getWorldQuaternion(this.jointRotation).invert().multiply(this.rootRotation),this.sole.copy(i).normalize().applyQuaternion(this.jointRotation),t.quaternion.setFromUnitVectors(e,this.sole)}plantFeet(){this.group.updateWorldMatrix(!0,!1),this.inverseRoot.copy(this.group.matrixWorld).invert();let t=1/0;for(const{foot:e}of this.legs){e.updateWorldMatrix(!0,!1);for(const i of rM)this.sole.copy(i).applyMatrix4(e.matrixWorld).applyMatrix4(this.inverseRoot),t=Math.min(t,this.sole.y)}this.hips.position.y-=t-.006}updateParticles(t,e,i){const s=e!==null,r=i?s?10:6:s?mu:18;this.particleGeometry.setDrawRange(0,r);for(let a=0;a<r;a++){const o=a*2.399963+t*(.18+a%4*.055),c=(a*.618+t*(s?.39:.23))%1,l=.65+a%5*.18+c*.25;this.particlePositions[a*3]=Math.cos(o)*l,this.particlePositions[a*3+1]=.4+c*3.85,this.particlePositions[a*3+2]=Math.sin(o)*l}this.particleGeometry.attributes.position.needsUpdate=!0,this.particleMaterial.size=s?.16:.13,this.infectionBurst.update(e,i)}dispose(){this.group.removeFromParent(),pn(this.group)}}const ns=42,Eo=5e3,wo=new Pt(16752715),dM=new Pt(16731943),Ns=new Pt(16768192);class fM{group=new Se;geometry=new ge;positions=new Float32Array(Eo*3);colors=new Float32Array(Eo*3);accents=new Float32Array(Eo);bolts;boltMatrix=new ne;cursor=0;emitter=new C;trail=Array.from({length:8},()=>({base:new C,tip:new C,at:0}));trailIndex=0;trailCount=0;trailAttack=0;constructor(t){this.geometry.setAttribute("position",new Ue(this.positions,3).setUsage(Zi)),this.geometry.setAttribute("color",new Ue(this.colors,3).setUsage(Zi)),this.geometry.setAttribute("strength",new Ue(this.accents,1).setUsage(Zi));const e=new Lt(this.geometry,new We({transparent:!0,depthWrite:!1,side:Le,vertexColors:!0,toneMapped:!1,vertexShader:`attribute float strength; varying vec4 tint;
        void main(){ tint=vec4(color,strength); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,fragmentShader:"varying vec4 tint; void main(){ gl_FragColor=tint; }"}));e.frustumCulled=!1,e.renderOrder=1,this.group.add(e),this.bolts=new ds(new Ea(.29,t?0:1),new Zt({color:16741933,toneMapped:!1}),Ae.burst.count),this.bolts.count=0,this.bolts.frustumCulled=!1,this.group.add(this.bolts)}update(t,e,i,s,r){if(this.cursor=0,this.bolts.count=0,t){const a=Math.max(0,(e-t.startedAt)*t.rate),o=i?dM:wo,{from:c,to:l}=t;switch(t.kind){case"slash":{const h=Ae.slash,d=h.impact.findIndex(g=>a<=g+135);if(d<0)break;const u=h.impact[d]-a,p=u>=0?.12+.19*(1-Math.min(1,u/550)):.38*(1+u/135);this.fan(c,h.range,t.yaw,h.angle,u<0?Ns:o,p);break}case"dash":{const h=a>=Ae.dash.windup;a<Ae.dash.duration+145&&this.strip(c,l,Ae.dash.width,h?Ns:o,h?.31*(1-Math.max(0,a-Ae.dash.duration)/145):.19);break}case"leap":{const h=a-Ae.leap.duration;if(h<230&&(this.fan(l,Ae.leap.radius,0,Math.PI*2,h>=0?Ns:o,h>=0?.42*(1-h/230):.21),h>=0)){const d=Ae.leap.radius*(.28+.72*h/230);this.arc(l,d,0,Math.PI*2,Ns,.94*(1-h/230),.16)}break}case"burst":{const h=Ae.burst,d=t.rays??[];if(a>h.impact+210)break;const u=(a-h.launch)/(h.impact-h.launch);for(const[p,g]of d.entries())u<1&&this.strip(c,g,.2,o,a<h.launch?.16:.25),this.fan(g,h.radius,0,Math.PI*2,u>=1?Ns:o,u>=1?.38*(1-(a-h.impact)/210):.18),u>=0&&u<1&&(this.emitter.set(ze.lerp(c.x,g.x,u),c.y+.83,ze.lerp(c.z,g.z,u)),this.boltMatrix.makeTranslation(this.emitter.x,this.emitter.y,this.emitter.z),this.bolts.setMatrixAt(p,this.boltMatrix),this.bolts.count++);this.bolts.instanceMatrix.needsUpdate=!0;break}}}this.drawBladeTrail(t,e,s,r),this.geometry.setDrawRange(0,this.cursor),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0,this.geometry.attributes.strength.needsUpdate=!0}drawBladeTrail(t,e,i,s){if(!t||t.kind!=="slash"){this.trailCount=0;return}this.trailAttack!==t.startedAt&&(this.trailCount=0,this.trailAttack=t.startedAt);const r=(e-t.startedAt)*t.rate;if(Ae.slash.impact.some(a=>r>=a-100&&r<=a+105)){const a=this.trail[this.trailIndex];a.base.copy(i),a.tip.copy(s),a.at=e,this.trailIndex=(this.trailIndex+1)%this.trail.length,this.trailCount=Math.min(this.trailCount+1,this.trail.length)}for(let a=0;a<this.trailCount-1;a++){const o=this.trail[(this.trailIndex+this.trail.length-a-1)%this.trail.length],c=this.trail[(this.trailIndex+this.trail.length-a-2)%this.trail.length],l=(1-(e-c.at)/125)*.64;if(l<=0)break;this.triangle(o.base,o.tip,c.tip,wo,l),this.triangle(o.base,c.tip,c.base,wo,l)}}vertex(t,e,i){const s=this.cursor*3;this.positions[s]=t.x,this.positions[s+1]=t.y+.065,this.positions[s+2]=t.z,this.colors[s]=e.r,this.colors[s+1]=e.g,this.colors[s+2]=e.b,this.accents[this.cursor++]=Math.max(0,i)}triangle(t,e,i,s,r){this.vertex(t,s,r),this.vertex(e,s,r),this.vertex(i,s,r)}ringPoint(t,e,i){return{x:t.x+Math.sin(i)*e,y:t.y,z:t.z+Math.cos(i)*e}}fan(t,e,i,s,r,a){for(let o=0;o<ns;o++){const c=i-s/2+s*o/ns,l=i-s/2+s*(o+1)/ns;this.triangle(t,this.ringPoint(t,e,c),this.ringPoint(t,e,l),r,a)}this.arc(t,e,i,s,r,Math.min(.82,a*2.8),.095)}arc(t,e,i,s,r,a,o){for(let c=0;c<ns;c++){const l=i-s/2+s*c/ns,h=i-s/2+s*(c+1)/ns,d=this.ringPoint(t,e,l),u=this.ringPoint(t,e,h),p=this.ringPoint(t,e-o,l),g=this.ringPoint(t,e-o,h);this.triangle(d,p,u,r,a),this.triangle(u,p,g,r,a)}}strip(t,e,i,s,r){const a=e.x-t.x,o=e.z-t.z,c=Math.hypot(a,o)||1,l=o/c*i,h=-a/c*i,d=(m,f)=>({x:m.x+l*f,y:m.y,z:m.z+h*f}),u=d(t,-1),p=d(t,1),g=d(e,-1),_=d(e,1);this.triangle(u,p,g,s,r),this.triangle(g,p,_,s,r);for(const m of[-1,1]){const f=d(t,m),M=d(e,m),T=d(t,m*.92),y=d(e,m*.92);this.triangle(f,T,M,s,r*2.6),this.triangle(M,T,y,s,r*2.6)}}dispose(){this.group.removeFromParent(),pn(this.group)}}const vu=new C(0,1,0),xu=4,To=19,pM=[[-2.5,10,-1.2],[2.6,10,.7],[-1.1,10,2.2],[1.3,10,-2.4]],ss=(n,t,e)=>ze.smoothstep(n,t,e);class mM{constructor(t,e,i,s=""){this.localId=s,this.model.group.visible=!1,this.effects.position.copy(En.location),this.combat=new fM(i),this.ownerRing.rotation.x=-Math.PI/2,this.ownerRing.visible=!1,t.add(this.effects,this.model.group,this.combat.group,this.ownerRing);const r=new wa(.128,.036,5,i?8:12);r.rotateX(Math.PI/2),r.rotateZ(Math.PI/2),r.scale(.78,1.48,.78),this.chainMesh=new ds(r,new Fs({color:3482935,roughness:.44,metalness:.58,emissive:5120275,emissiveIntensity:.38}),xu*To),this.chainMesh.instanceMatrix.setUsage(Zi),this.chainMesh.frustumCulled=!1,this.effects.add(this.chainMesh);const a=new ge,o=[];for(let h=0;h<9;h++){const d=h*Math.PI*2/9+.17;let u=0,p=0;for(let g=1;g<=5;g++){const _=d+Math.sin(h*4+g*9)*.23,m=g*(.62+h%3*.12),f=Math.cos(_)*m,M=Math.sin(_)*m;o.push(u,.034,p,f,.034,M),(g===2||g===4)&&o.push(f,.034,M,f+Math.cos(_+.65)*.53,.034,M+Math.sin(_+.65)*.53),u=f,p=M}}a.setAttribute("position",new ae(o,3)),this.cracks=new gm(a,new nd({color:16742698,transparent:!0,blending:ui,depthWrite:!1,toneMapped:!1})),this.effects.add(this.cracks),this.rift=new Lt(new Qi(16,16),new We({uniforms:{light:{value:0},wave:{value:-1}},transparent:!0,depthWrite:!1,blending:ui,vertexShader:`varying vec2 ground;
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
        }`})),this.rift.rotation.x=-Math.PI/2,this.rift.position.y=.028,this.effects.add(this.rift),this.sparkCount=i?36:78,this.sparkData=new Float32Array(this.sparkCount*3);const c=new ge;c.setAttribute("position",new Ue(this.sparkData,3).setUsage(Zi)),this.sparks=new js(c,new We({uniforms:{opacity:{value:0}},transparent:!0,blending:ui,depthWrite:!1,vertexShader:`uniform float opacity;
        void main(){ vec4 p=modelViewMatrix*vec4(position,1.0);
          gl_Position=projectionMatrix*p;
          gl_PointSize=clamp(112.0*sqrt(opacity)/max(3.0,-p.z),1.0,11.0);
        }`,fragmentShader:`uniform float opacity;
        void main(){ float d=length(gl_PointCoord-vec2(.5));
          gl_FragColor=vec4(1.0,.41,.08,opacity*(1.0-smoothstep(.11,.5,d)));
        }`})),this.sparks.frustumCulled=!1,this.effects.add(this.sparks),this.title.className="co-warden-title",this.title.hidden=!0,this.title.setAttribute("role","status"),this.title.innerHTML="<span>中立 Boss 登場</span><strong>虛空騎士</strong>",this.hud.className="co-warden-hud",this.hud.hidden=!0;const l=document.createElement("span");l.textContent=En.name,this.meter.setAttribute("aria-label",`${En.name}生命值`),this.allegiance.className="co-warden-allegiance",this.warning.className="co-warden-warning",this.hud.append(l,this.meter,this.allegiance,this.warning),e.append(this.title,this.hud)}model=new uM;effects=new Se;title=document.createElement("div");hud=document.createElement("div");allegiance=document.createElement("small");warning=document.createElement("small");meter=document.createElement("progress");combat;ownerRing=new Lt(new er(1.03,1.18,42),new Zt({color:5302220,transparent:!0,opacity:.77,side:Le,depthWrite:!1}));chainMesh;cracks;rift;sparks;sparkData;left=new C;right=new C;begin=new C;end=new C;direction=new C;link=new ve;twist=new ki;destination=new C;sparkCount;motionTime=0;initialized=!1;update(t,e,i){const s=Math.max(0,e-t.spawnAt),r=t.state==="SPAWN";this.title.hidden=s<Te.title||s>=Te.title+Te.titleDuration,this.hud.hidden=s<Te.title&&r,this.meter.max=t.ownerId&&t.state!=="DEFEATED"?En.alliedHp:t.maxHp,this.meter.value=t.hp,this.hud.classList.toggle("is-infected",t.phaseTwo&&!t.ownerId),this.hud.classList.toggle("is-allied",!!t.ownerId),this.hud.classList.toggle("is-owned",t.ownerId===this.localId);const a=t.ownerId?`◆ ${t.ownerId===this.localId?"你的隊友":t.ownerName??"已收編"} · ${Math.max(0,Math.ceil((t.alliedUntil-e)/1e3))}s`:t.enraged?"狂暴":t.phaseTwo?"感染階段":"";this.allegiance.textContent!==a&&(this.allegiance.textContent=a);const o=t.state==="ATTACK"&&t.attack?Ae[t.attack.kind].name:t.state==="ENRAGED"?"自刺狂暴":"";this.warning.textContent!==o&&(this.warning.textContent=o),this.ownerRing.visible=!!t.ownerId&&t.state!=="DESPAWN"&&t.state!=="DEFEATED",this.effects.visible=r,this.model.group.visible=!r||s>=Te.reveal;const c=this.model.group;if(this.destination.set(t.x,t.y+(t.air??0),t.z),!this.initialized||r)c.position.copy(this.destination),c.rotation.y=t.yaw,this.initialized=!0;else{const g=1-Math.exp(-i*20);c.position.lerp(this.destination,g),c.rotation.y+=Math.atan2(Math.sin(t.yaw-c.rotation.y),Math.cos(t.yaw-c.rotation.y))*g}if(this.ownerRing.position.set(c.position.x,t.y+.07,c.position.z),this.ownerRing.material.color.setHex(t.ownerId===this.localId?5439456:8368127),r){const g=ss(s,Te.breakChains,Te.land);c.position.y=t.y+1.86*(1-g**2),this.model.group.visible&&this.model.entrancePose(s),this.showEntrance(s);return}this.motionTime+=i;const l=Math.max(0,e-t.stateAt),h=t.state==="CHASE"||c.position.distanceToSquared(this.destination)>.012,d=t.attack?Math.max(0,(e-t.attack.startedAt)*t.attack.rate):0;t.attack&&(t.state==="ATTACK"||t.state==="STAGGER"&&d<Ae[t.attack.kind].duration+150)?this.model.combatPose(t.attack.kind,d,t.enraged):t.state==="ENRAGED"?this.model.selfStabPose(l):t.state==="DEFEATED"||t.state==="ALLIED"||t.state==="DESPAWN"?this.model.collapsePose(l,t.state==="ALLIED"):this.model.pose(h?"walk":"idle",this.motionTime,t.enraged);let u=t.enraged?this.motionTime+1.2:null;t.state==="ENRAGED"&&(u=l>550?(l-550)/1e3:null),t.state==="ATTACK"&&t.attack?.kind==="burst"&&d>=Ae.burst.launch&&(u=(d-Ae.burst.launch)/1e3),this.model.updateParticles(this.motionTime,u,this.sparkCount<50);const p=t.state==="DESPAWN"?Math.max(.001,1-ss(l,260,En.collapseMs)):1;this.model.group.scale.setScalar(p),this.model.bladeBase.getWorldPosition(this.left),this.model.bladeTip.getWorldPosition(this.right),this.combat.update(t.attack,e,t.enraged,this.left,this.right)}showEntrance(t){const e=ss(t,0,550)*(1-ss(t,Te.land+150,Te.finish)),i=(t-Te.land)/820;this.rift.material.uniforms.light.value=e,this.rift.material.uniforms.wave.value=i<1?i:-1,this.cracks.visible=t>=Te.cracks,this.cracks.material.opacity=(.38+.3*Math.sin(t*.019)**2)*e,this.sparks.material.uniforms.opacity.value=e;const s=t/1e3;for(let r=0;r<this.sparkCount;r++){const a=r*2.399963+s*.5,o=(r*.618+s*.65)%1,c=.38+r%8*.28+o*(i>=0&&i<1?3.5*i:.5);this.sparkData[r*3]=Math.cos(a)*c,this.sparkData[r*3+1]=.04+o*(i>=0&&i<1?3.8:2.6),this.sparkData[r*3+2]=Math.sin(a)*c}this.sparks.geometry.attributes.position.needsUpdate=!0,this.updateChains(t)}updateChains(t){if(this.chainMesh.visible=t>=Te.chains&&t<Te.land+320,!this.chainMesh.visible)return;t>=Te.reveal?(this.model.bindingPoints(this.left,this.right),this.left.sub(this.effects.position),this.right.sub(this.effects.position)):(this.left.set(-.7,3.8,0),this.right.set(.7,3.8,0));const e=ss(t,Te.chains,Te.reveal+110),i=ss(t,Te.breakChains,Te.land+320),s=t>=Te.breakChains;let r=0;for(let a=0;a<xu;a++){const[o,c,l]=pM[a];this.begin.set(o,c,l),this.end.copy(a%2===0?this.left:this.right),a>=2&&(this.end.y+=.76),this.end.lerp(this.begin,1-e),this.direction.subVectors(this.end,this.begin).normalize().negate();for(let h=0;h<To;h++){if(s&&h>=6&&h<=8)continue;const d=h/(To-1);if(this.link.position.lerpVectors(this.begin,this.end,d),s){const u=h<6?.7:1.37;this.link.position.y-=i*i*4.2*u,this.link.position.x+=(a%2===0?-1:1)*i*u}this.link.position.y<.12||(this.link.quaternion.setFromUnitVectors(vu,this.direction),this.link.quaternion.multiply(this.twist.setFromAxisAngle(vu,h%2*Math.PI*.5+i*(h%3))),this.link.updateMatrix(),this.chainMesh.setMatrixAt(r++,this.link.matrix))}}this.chainMesh.count=r,this.chainMesh.instanceMatrix.needsUpdate=!0}hideHud(){this.title.hidden=!0,this.hud.hidden=!0}target(t,e){if(!Qy(t,e))return null;const{position:i,rotation:s}=this.model.group;return{id:Jy,x:i.x,y:i.y+xi,z:i.z,yaw:s.y,alive:!0,kind:"warden"}}dispose(){this.model.dispose(),this.combat.dispose(),this.ownerRing.removeFromParent(),pn(this.ownerRing),this.effects.removeFromParent(),pn(this.effects),this.hud.remove(),this.title.remove()}}const gM=12286207;class _M{constructor(t,e){this.root=t,this.scene=e,this.badge.className="co-warden-buff",this.badge.hidden=!0,this.badge.title="武器傷害 +20% · 移動速度 +10%";const i=document.createElement("span");i.textContent="虛空祝福";const s=document.createElement("i");s.setAttribute("aria-hidden","true"),s.textContent="◆",this.badge.append(s,i,this.timer),this.notice.className="co-warden-notice",this.notice.hidden=!0,this.notice.setAttribute("role","status"),t.append(this.badge,this.notice)}badge=document.createElement("div");timer=document.createElement("b");notice=document.createElement("div");aura=new Map;auraGeometry=new er(.82,.97,30);auraMaterial=new Zt({color:gM,transparent:!0,opacity:.69,depthWrite:!1,side:Le});noticeUntil=0;announce(t,e){const i={recruited:`${t.name} 擊敗並收編了虛空騎士`,destroyed:`${t.name} 擊倒了已收編的虛空騎士`,"player-slain":`${t.name} 被虛空騎士擊倒`};this.notice.textContent=i[t.kind],this.notice.hidden=!1,this.noticeUntil=e+3400}update(t,e,i,s){if(this.badge.hidden=i<=s,this.root.classList.toggle("co-warden-blessed",!this.badge.hidden),!this.badge.hidden){const a=`${Math.ceil((i-s)/1e3)}s`;this.timer.textContent!==a&&(this.timer.textContent=a)}this.notice.hidden=s>=this.noticeUntil;const r=new Set;for(const a of t){const o=e.get(a.id);if(!a.alive||(a.blessingUntil??0)<=s||!o)continue;r.add(a.id);let c=this.aura.get(a.id);if(!c){c=new Se;for(const[l,h]of[[.05,-Math.PI/2],[1.43,-Math.PI*.32]]){const d=new Lt(this.auraGeometry,this.auraMaterial);d.rotation.x=h,d.position.y=l,l>1&&d.scale.setScalar(.77),c.add(d)}this.aura.set(a.id,c),this.scene.add(c)}c.position.copy(o.group.position),c.rotation.y=s/600}for(const[a,o]of this.aura)r.has(a)||(o.removeFromParent(),this.aura.delete(a))}hide(){this.badge.hidden=!0,this.notice.hidden=!0,this.root.classList.remove("co-warden-blessed")}dispose(){for(const t of this.aura.values())t.removeFromParent();this.aura.clear(),this.auraGeometry.dispose(),this.auraMaterial.dispose(),this.root.classList.remove("co-warden-blessed"),this.badge.remove(),this.notice.remove()}}const Br=(n,t,e)=>Math.max(t,Math.min(e,n)),yu=(n,t)=>(t-n+Math.PI*3)%(Math.PI*2)-Math.PI;class vM{constructor(t,e,i,s,r,a,o=0,c){this.root=t,this.socket=e,this.roomCode=i,this.roundId=s,this.onFatal=r,this.playerId=a,this.seq=o;const l=new Cd;this.renderer=new yd({antialias:l.antialias,powerPreference:"high-performance"}),this.renderer.setPixelRatio(l.pixelRatio),this.renderer.setClearColor(1489372),t.append(this.renderer.domElement),t.insertAdjacentHTML("beforeend",'<div class="co-feedback"></div><div class="co-hud"></div><div class="co-minimap"><canvas aria-label="以自己為中心的戰術雷達"></canvas></div>'+$d()),this.blessing=new _M(t,this.scene),this.tacticalBoard=new Ky(t,this.coarse),this.radarCanvas=t.querySelector(".co-minimap canvas"),this.radarContext=this.radarCanvas.getContext("2d"),this.hud=new Yd(t.querySelector(".co-hud")),this.aimFeedback=new Rd(t),this.feedback=new Gd(t.querySelector(".co-feedback")),this.armory=new Zd(t,h=>!this.ready||this.paused||!this.player.alive||!this.socket.connected?!1:(this.input.set({aim:!1}),this.socket.emit("match:weapon",{id:h,roundId:this.roundId}),!0),()=>this.owned,this.restorePointerLock,h=>this.weapons[h].level),this.scene.add(this.arena.group,new hd(16777215,1489372,2)),this.effects=new Ld(this.scene,this.coarse),this.battle=new Id(t),this.makeGun(),this.appearance=new Sd(this.gun),this.pickupFeedback=new Md(t,this.coarse),this.pickupPreview=new Lu(t),this.scope=new Pd(t,this.gun,this.coarse),this.makePickups(),this.coarse?this.mobile=new Hd(t,this.input):(this.desktop=new zd(t,this.input),t.onclick=h=>{h.target.closest(".co-armory, [data-game-ui], button, input")||this.restorePointerLock()}),this.stopResize=bu(t,(h,d)=>{this.cam.aspect=h/d,this.cam.updateProjectionMatrix(),this.renderer.setSize(h,d,!1),this.sizeRadar()}),this.socket.on("match:pickup",this.onPickup),this.socket.on("match:snapshot",this.onSnapshot),this.socket.on("match:shot",this.onShot),this.socket.on("match:hit",this.onHit),this.socket.on("match:kill",this.onKill),this.socket.on("match:damage",this.onDamage),this.socket.on("match:warden",this.onWardenNotice),this.socket.on("disconnect",this.onDisconnect),this.socket.on("connect_error",this.onConnectError),this.loop=new Kd(h=>this.update(h)),this.settings=new kd(t,()=>{this.tacticalBoard.close(),this.root.dispatchEvent(new Event("combat:reset")),this.socket.emit("match:input",{roundId:this.roundId,seq:++this.seq,clientTime:this.serverNow(),moveX:0,moveY:0,yaw:this.player.yaw,pitch:this.player.pitch,jump:!1,reload:!1,sprint:!1,aim:!1}),this.desktop?.setEnabled(!1),this.mobile?.setEnabled(!1),this.armory.setEnabled(!1)},h=>{this.desktop?.setEnabled(!0),this.mobile?.setEnabled(!0),this.armory.setEnabled(!0),h&&this.restorePointerLock()},!0,c?{...c,code:i??""}:void 0)}scene=new ll;cam=new ti(75,1,_l,Xc);renderer;input=new Bd(()=>this.sendResetInput());arena=new Vd;player=new Wd;avatars=new Map;pickupMeshes=new Map;pending=[];snaps=[];seq=0;hud;aimFeedback;armory;feedback;effects;battle;seenShots=new Set;statusTimer=0;loop;settings;desktop;mobile;stopResize=()=>{};owned=new Set(["ar"]);active="ar";weapons=Cf();score=0;bounty=jx;scoreTarget=Uc;endsAt=0;kills=0;deaths=0;dead=!1;killer="";ping=0;pingTimer=0;serverClockOffset=0;hasClockOffset=!1;notice="";noticeT=0;slowUntil=0;disposed=!1;ready=!1;paused=!1;lastLocalShot=0;recoilPitch=0;recoilYaw=0;gun=new Se;gunFlash;gunMaterial=new Zt({color:2106932});handMaterial=new Zt({color:16777215});coarse=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>0;cameraOffset=new C;visualPosition=new C;remoteTarget=new C;moveIntent=new C;pickupPreview;pickupFeedback;appearance;tacticalBoard;scope;physicsTime=0;awaitingWeapon=!1;warden;blessing;blessingUntil=0;snapshotInterval=50;snapshotJitter=0;lastSnapshotArrival=0;radarCanvas;radarContext;radarPlayers=new Map;radarTimer=0;start(){this.disposed||(this.paused=!1,this.loop.start())}pause(){if(this.disposed)return;this.paused=!0,this.warden?.hideHud(),this.blessing.hide(),this.tacticalBoard.setActive(!1),this.settings?.setActive(!1),this.desktop?.setEnabled(!1),this.mobile?.setEnabled(!1),this.armory.setEnabled(!1),this.input.reset(),this.loop.stop();const t=document.pointerLockElement;t&&(t===this.root||this.root.contains(t))&&document.exitPointerLock?.()}resume(){this.disposed||(this.paused=!1,this.tacticalBoard.setActive(!0),this.settings?.setActive(!0),this.desktop?.setEnabled(!0),this.mobile?.setEnabled(!0),this.armory.setEnabled(!0),this.loop.start())}restorePointerLock=()=>{if(!(this.disposed||this.paused)&&!(this.coarse||this.settings?.isOpen||document.pointerLockElement===this.root))try{this.root.requestPointerLock?.()?.catch(()=>{})}catch{}};sendResetInput(){this.disposed||this.paused||!this.ready||!this.socket?.connected||this.socket.emit("match:input",{roundId:this.roundId,seq:++this.seq,clientTime:this.serverNow(),moveX:0,moveY:0,yaw:this.player.yaw,pitch:this.player.pitch,jump:!1,reload:!1,sprint:!1,aim:!1})}serverNow(){return Date.now()-this.serverClockOffset}makeGun(){const t=new Lt(new Ee(.18,.16,.9),this.gunMaterial);t.position.set(.34,-.28,-.8);const e=[[[.17,.48,.18],[.47,-.52,-.5]],[[.17,.43,.18],[.12,-.55,-.63]],[[.2,.18,.2],[.37,-.43,-.74]],[[.2,.18,.2],[.17,-.42,-.86]]];for(const[i,s]of e){const r=new Lt(new Ee(...i),this.handMaterial);r.position.set(...s),this.gun.add(r)}this.gunFlash=new Lt(new gs(.08),new Zt({color:16766045})),this.gunFlash.position.set(.34,-.25,-1.3),this.gunFlash.visible=!1,this.gun.add(t,this.gunFlash),this.cam.add(this.gun),this.scene.add(this.cam)}makePickups(){for(const t of Qe){const e=Re[t],i=new Lt(new gs(.75),new Zt({color:e.color}));i.visible=!1,this.pickupMeshes.set(t,i),this.scene.add(i)}}simulate(t,e,i,s){t.yaw=e.yaw,t.pitch=e.pitch,Kc(t,{moveX:e.moveX,moveY:e.moveY,lookX:0,lookY:0,jump:e.jump,sprint:e.sprint},i,void 0,tM(this.slowUntil,this.blessingUntil,e.clientTime),s)}predict(t,e){const i={x:this.player.position.x,y:this.player.position.y,z:this.player.position.z,yaw:this.player.yaw,pitch:this.player.pitch,velocityY:this.player.velocityY,supportId:this.player.supportId,jumpsUsed:this.player.jumpsUsed,alive:this.player.alive};this.simulate(i,t,e,this.physicsTime),this.physicsTime+=e,this.player.position.set(i.x,i.y,i.z),this.player.yaw=i.yaw,this.player.pitch=i.pitch,this.player.velocityY=i.velocityY,this.player.jumpsUsed=i.jumpsUsed,this.player.supportId=i.supportId??null}onSnapshot=t=>{if(this.disposed||this.paused||!bn(t,this.roundId))return;if(!Array.isArray(t?.players)||!Array.isArray(t?.pickups))return this.onFatal("多人同步資料無效");const e=!this.ready;this.ready=!0;const i=performance.now();if(this.lastSnapshotArrival){const h=i-this.lastSnapshotArrival;this.snapshotJitter=this.snapshotJitter*.8+Math.abs(h-this.snapshotInterval)*.2,this.snapshotInterval=this.snapshotInterval*.85+h*.15}for(this.lastSnapshotArrival=i,t.byId=new Map(t.players.map(h=>[h.id,h])),this.snaps.push(t);this.snaps.length>12;)this.snaps.shift();const s=t.byId.get(this.playerId);if(!s)return;e&&(this.seq=Math.max(this.seq,s.ack));const r=this.player.alive,a=!r&&s.alive;this.slowUntil=s.slowUntil,this.blessingUntil=s.alive?s.blessingUntil??0:0,this.pending=this.pending.filter(h=>h.seq>s.ack),(e||r!==s.alive)&&(this.pending.length=0,this.armory.close(!1),this.input.reset(),this.mobile?.reset(),this.desktop?.setEnabled(!this.paused&&!this.settings?.isOpen)),this.visualPosition.copy(this.player.position).add(this.cameraOffset);const o={x:s.x,y:s.y,z:s.z,yaw:s.yaw,pitch:s.pitch,velocityY:s.velocityY,supportId:s.supportId,jumpsUsed:s.jumpsUsed,alive:s.alive};this.physicsTime=t.simulationTime;for(const h of this.pending)this.simulate(o,h,h.dt,this.physicsTime),this.physicsTime+=h.dt;const c=Math.hypot(o.x-this.player.position.x,o.y-this.player.position.y,o.z-this.player.position.z),l=e||a||c>4;this.player.position.set(o.x,o.y,o.z),this.player.velocityY=o.velocityY,this.player.jumpsUsed=o.jumpsUsed,this.player.supportId=o.supportId??null,(e||a)&&(this.player.yaw=s.yaw,this.player.pitch=s.pitch),l?this.cameraOffset.set(0,0,0):(this.cameraOffset.copy(this.visualPosition).sub(this.player.position),Math.hypot(this.cameraOffset.x,this.cameraOffset.z)>4&&this.cameraOffset.set(0,0,0)),this.player.hp=s.hp,this.player.alive=s.alive,this.handMaterial.color.setHex(s.color),this.active!==s.activeWeapon&&(this.input.set({aim:!1}),this.awaitingWeapon=!1),this.active=s.activeWeapon,this.owned=new Set(s.ownedWeapons),this.weapons=s.weapons,this.score=s.score,this.bounty=s.bounty,this.scoreTarget=t.scoreTarget,this.endsAt=t.endsAt,this.kills=s.kills,this.deaths=s.deaths,this.dead=!s.alive,this.syncAvatars(t.players),this.syncPickups(t.pickups),this.armory.render(this.active),this.updatePanels(t)};updatePanels(t){this.tacticalBoard.update(t.players,this.roomCode,this.ping),this.radarPlayers=t.byId??new Map(t.players.map(e=>[e.id,e]))}syncAvatars(t){const e=new Set(t.map(i=>i.id));for(const[i,s]of this.avatars)e.has(i)||(s.dispose(),this.avatars.delete(i));for(const i of t){if(i.id===this.playerId)continue;let s=this.avatars.get(i.id);s||(s=new Xd(i.id,i.name,i.color),s.respawn(i.x,i.z),s.position.y=i.y-1.65,s.group.position.copy(s.position),this.avatars.set(i.id,s),this.scene.add(s.group,s.deathGroup)),i.alive&&!s.alive&&s.respawn(i.x,i.z),!i.alive&&s.alive&&s.damage(100)}}syncPickups(t){for(const e of t){const i=this.pickupMeshes.get(e.id);i&&(i.position.set(e.x,e.y+.9,e.z),i.visible=e.available)}}sizeRadar(){const t=this.radarCanvas?.getBoundingClientRect();if(!t?.width||!t.height)return;const e=Math.min(window.devicePixelRatio||1,1.5),i=Math.round(t.width*e),s=Math.round(t.height*e);(this.radarCanvas.width!==i||this.radarCanvas.height!==s)&&(this.radarCanvas.width=i,this.radarCanvas.height=s)}drawRadar(t){if(this.radarTimer+=t,this.radarTimer<1/30)return;this.radarTimer%=1/30;const e=this.radarCanvas,i=e.getBoundingClientRect();if(!i.width||!i.height)return;this.sizeRadar();const s=e.width/i.width,r=this.radarContext,a=i.width,o=i.height,c=a/2,l=o/2+4,h=Math.min(a,o)*.38;r.setTransform(s,0,0,s,0,0),r.clearRect(0,0,a,o),r.strokeStyle="#ffffff24",r.lineWidth=1,r.beginPath(),r.arc(c,l,h,0,Math.PI*2),r.moveTo(c-h,l),r.lineTo(c+h,l),r.moveTo(c,l-h),r.lineTo(c,l+h),r.stroke(),r.fillStyle="#dfffff",r.font="800 9px Arial",r.fillText("戰術雷達",8,14);const d=this.player.position.y-1.65,u=d<-2?"B1":d>=9?"RF":d>=3?"2F":"1F";this.radarCanvas.setAttribute("aria-label",`Radar ${u}`),r.fillText(u,60,14);const p=Math.cos(this.player.yaw),g=Math.sin(this.player.yaw);for(const _ of this.radarPlayers.values()){if(_.id===this.playerId||!_.alive)continue;const m=this.avatars.get(_.id),f=m?.position.x??_.x,M=m?.position.z??_.z,T=f-this.player.position.x,y=M-this.player.position.z,w=Math.max(.001,Math.hypot(T,y)),b=T*p-y*g,A=-T*g-y*p,x=h*Math.min(w/70,1)/w,E=c+b*x,P=l-A*x;r.beginPath(),r.arc(E,P,w>70?5:4,0,Math.PI*2),r.fillStyle=`#${_.color.toString(16).padStart(6,"0")}`,r.fill();const L=_.y-this.player.position.y;Math.abs(L)>2.5&&(r.fillStyle="#fff",r.fillText(String.fromCodePoint(L>0?9650:9660),E-4,P-7)),w>70&&(r.strokeStyle="#ffffffcc",r.lineWidth=1.5,r.stroke())}r.save(),r.translate(c,l),r.fillStyle="#fff",r.shadowColor="#55f1ae",r.shadowBlur=7,r.beginPath(),r.moveTo(0,-7),r.lineTo(5,6),r.lineTo(0,3),r.lineTo(-5,6),r.closePath(),r.fill(),r.restore()}onShot=t=>{if(this.disposed||this.paused||!this.ready||!bn(t,this.roundId)||this.seenShots.has(t.eventId))return;this.seenShots.add(t.eventId),this.seenShots.size>512&&this.seenShots.delete(this.seenShots.values().next().value);const e=new C,i=t.id===this.playerId;if(i)e.set(...t.origin);else{const s=this.avatars.get(t.id);s?s.muzzlePosition(e):e.set(...t.origin).add(new C(.34,-.27,0))}this.effects.play(t,e,!i,i,!i);for(const s of t.hits)this.avatars.get(s.targetId)?.hit()};onPickup=t=>{this.disposed||this.paused||!bn(t,this.roundId)||this.pickupFeedback.push(t,t.eventId)};onHit=t=>{!this.disposed&&!this.paused&&this.ready&&bn(t,this.roundId)&&this.battle.hit(t)};onKill=t=>{!this.disposed&&!this.paused&&this.ready&&bn(t,this.roundId)&&this.battle.kill(t)};onDamage=t=>{this.disposed||this.paused||!this.ready||!bn(t,this.roundId)||(this.player.hp=t.hp,this.killer=t.name,this.notice=t.wardenAttack?"? "+t.name+" ?"+Ae[t.wardenAttack].name+"??":t.weapon?"? "+t.name+" ?? "+Re[t.weapon].label+" ??":"? "+t.name+" ??",this.noticeT=.8,this.feedback.damage(t.damage,new C(t.from.x,0,t.from.z),this.player.position,new C(-Math.sin(this.player.yaw),0,-Math.cos(this.player.yaw))))};onWardenNotice=t=>{!this.disposed&&!this.paused&&bn(t,this.roundId)&&this.blessing.announce(t,this.serverNow())};onDisconnect=()=>{this.pause(),this.socket.sendBuffer.length=0,this.onFatal("連線已中斷")};onConnectError=()=>this.onFatal("無法連線至遊戲伺服器");measurePing(t){if(this.pingTimer-=t,this.pingTimer>0)return;this.pingTimer=1;const e=Date.now();this.socket.emit("net:ping",i=>{if(this.disposed)return;this.ping=Date.now()-e;const s=Date.now()-i-this.ping/2;this.serverClockOffset=this.hasClockOffset?this.serverClockOffset*.8+s*.2:s,this.hasClockOffset=!0})}updateRemotePlayers(t){if(!this.snaps.length)return;const e=Br(80+this.ping*.1+this.snapshotJitter*1.5,80,120),i=this.serverNow()-e;let s=this.snaps[0],r=this.snaps[0],a=0;const o=this.snaps[this.snaps.length-1];if(i>=o.serverTime&&this.snaps.length>1){s=this.snaps[this.snaps.length-2],r=o;const l=Math.max(1,r.serverTime-s.serverTime);a=1+Math.min(75,i-r.serverTime)/l}else{for(let l=1;l<this.snaps.length;l++)if(this.snaps[l].serverTime>=i){s=this.snaps[l-1],r=this.snaps[l];break}a=s===r?0:Br((i-s.serverTime)/Math.max(1,r.serverTime-s.serverTime),0,1)}const c=1-Math.exp(-t*30);for(const[l,h]of this.avatars){const d=s.byId?.get(l),u=r.byId?.get(l);if(!(!d||!u)){if(this.remoteTarget.set(d.x+(u.x-d.x)*a,d.y+(u.y-d.y)*a-1.65,d.z+(u.z-d.z)*a),u.supportId!==null&&u.supportId===d.supportId){const p=zs(u.supportId,s.simulationTime),g=zs(u.supportId,r.simulationTime),_=zs(u.supportId,this.physicsTime);this.remoteTarget.x+=_.x-(p.x+(g.x-p.x)*a),this.remoteTarget.y+=_.y-(p.y+(g.y-p.y)*a),this.remoteTarget.z+=_.z-(p.z+(g.z-p.z)*a),h.group.position.copy(this.remoteTarget)}else h.group.position.lerp(this.remoteTarget,c);h.group.rotation.y+=yu(h.group.rotation.y,d.yaw+yu(d.yaw,u.yaw)*a)*c,h.position.copy(h.group.position),h.updateVisual(t,Math.abs(u.x-d.x)+Math.abs(u.z-d.z)>.02,!0)}}}updateWarden(t){const e=this.snaps[this.snaps.length-1];if(!e?.warden){this.warden?.dispose(),this.warden=void 0;return}this.warden??=new mM(this.scene,this.root,this.coarse,this.playerId),this.warden.update(e.warden,this.hasClockOffset?this.serverNow():e.serverTime,t)}update(t){if(this.disposed||this.paused||(this.measurePing(t),!this.ready))return;this.desktop?.update();const e=this.input.getState(),i=this.tacticalBoard.isOpen||this.armory.isOpen||!!this.settings?.isOpen||this.paused,s=this.weapons[this.active].reloadUntil>this.serverNow();(this.active!=="sniper"||s||e.reload||e.switchWeapon||!this.player.alive||i||this.awaitingWeapon)&&(this.input.set({aim:!1}),e.aim=!1),i&&(e.shoot=!1,this.input.clearCombat());const r=this.scope.update(this.active,e,this.player.alive,s,i);r&&(e.lookX*=.25,e.lookY*=.25);const a=this.player.yaw-e.lookX*.0024,o=Br(this.player.pitch-e.lookY*.0021,-1.35,1.35),c={roundId:this.roundId,seq:++this.seq,clientTime:this.serverNow(),moveX:e.moveX,moveY:e.moveY,yaw:a,pitch:o,jump:e.jump,reload:e.reload,sprint:!!e.sprint,aim:r};for(this.pending.push({...c,dt:t});this.pending.length>180;)this.pending.shift();this.predict(c,t),this.socket.emit("match:input",c);const l=-Math.sin(a),h=-Math.cos(a),d=Math.cos(a),u=-Math.sin(a);if(this.moveIntent.set(l*e.moveY+d*e.moveX,0,h*e.moveY+u*e.moveX),this.moveIntent.lengthSq()>1e-4&&this.moveIntent.normalize(),e.switchWeapon){const O=Qe[e.switchWeapon-1];O&&this.owned.has(O)&&O!==this.active&&(this.awaitingWeapon=!0,this.socket.emit("match:weapon",{id:O,roundId:this.roundId}))}let p=!1;const g=Re[this.active],_=this.weapons[this.active],m=this.serverNow();this.player.alive&&e.shoot&&!i&&!this.awaitingWeapon&&m-this.lastLocalShot>=g.fireDelay*1e3&&_.ammo>0&&_.reloadUntil<=m&&(p=!0,this.recoilPitch=Math.min(.04,this.recoilPitch+.009),this.recoilYaw=Br(this.recoilYaw+(this.seq%2?.0025:-.0025),-.012,.012),navigator.vibrate?.(8),this.socket.emit("match:fire",{roundId:this.roundId,seq:c.seq}),this.lastLocalShot=m),this.updateWarden(t),this.updateRemotePlayers(t),this.blessing.update(this.radarPlayers.values(),this.avatars,this.blessingUntil,this.serverNow());for(const O of this.pickupMeshes.values())O.rotation.y+=t*2;this.drawRadar(t),this.noticeT=Math.max(0,this.noticeT-t),this.effects.update(t),this.feedback.update(t,this.player.hp);const f=Math.exp(-t*16);this.recoilPitch*=f,this.recoilYaw*=f;const M=Math.pow(.5,t/.12),T=Math.pow(.5,t/.08),y=this.moveIntent.lengthSq()>.01,w=-this.cameraOffset.x*this.moveIntent.x+-this.cameraOffset.z*this.moveIntent.z;(!y||w>=0)&&(this.cameraOffset.x*=M,this.cameraOffset.z*=M),this.cameraOffset.y*=T,this.cameraOffset.lengthSq()<1e-6&&this.cameraOffset.set(0,0,0),this.visualPosition.copy(this.player.position),r||this.visualPosition.add(this.cameraOffset),this.cam.position.copy(this.visualPosition),this.cam.rotation.set(this.player.pitch,this.player.yaw,0,"YXZ"),this.gun.rotation.set(this.recoilPitch,this.recoilYaw,0),this.gun.position.z=this.recoilPitch*2;const b=_.reloadUntil>this.serverNow();if(this.appearance.update(this.active,_.level),this.pickupFeedback.update(t),this.hud.render({quickReloadSeconds:Math.max(0,Math.ceil((_.quickReloadUntil-this.serverNow())/1e3)),level:_.level,capacity:Mi(this.active,_.level),hp:this.player.hp,ammo:_.ammo,reserve:1/0,label:g.label,notice:this.noticeT?this.notice:"",kills:this.kills,deaths:this.deaths,dead:this.dead,killer:this.killer,hit:!1,kill:!1,reloading:b,score:this.score,bounty:this.bounty,scoreTarget:this.scoreTarget,remainingSeconds:Math.max(0,Math.ceil((this.endsAt-this.serverNow())/1e3))}),this.cam.updateMatrixWorld(!0),this.battle.update(t,this.cam),this.statusTimer+=t,this.statusTimer>=.08){this.statusTimer=0;const O=this.serverNow();for(const I of this.radarPlayers.values())if(I.alive&&(I.burnUntil>O||I.slowUntil>O)){const V=this.avatars.get(I.id);V&&this.effects.status(V.position.clone().add(new C(0,1.22,0)),I.burnUntil>O?"flame":"ice")}}this.arena.update(this.physicsTime,Xx(this.snaps[this.snaps.length-1],this.serverNow()),this.renderer);const A=Ad({x:this.player.position.x,y:this.player.position.y,z:this.player.position.z,yaw:this.player.yaw,pitch:this.player.pitch}),x=[...this.avatars].map(([O,I])=>({id:O,x:I.position.x,y:I.position.y+1.65,z:I.position.z,yaw:I.group.rotation.y,alive:I.alive})),E=Fo(this.physicsTime),P=this.snaps[this.snaps.length-1]?.warden,L=P&&this.warden?.target(P,this.playerId);L&&x.push(L);const F=Ws(this.gunFlash,this.active);if(p){const O=this.cam.position.toArray(),I=this.cam.getWorldDirection(new C).toArray(),z={...wd(this.active,O,I,x,Math.random,E,r,_.level),eventId:"local:"+this.seq,id:this.playerId,weapon:this.active,origin:O,dir:I};this.effects.play(z,F,!0,!0,!0,!1)}this.pickupPreview.update([...this.pickupMeshes].map(([O,I])=>({id:O,position:I.position,available:I.visible,owned:this.owned.has(O),state:this.weapons[O]})),this.cam.position,E,this.player.alive&&!i),this.effects.updateLocalMuzzle(F,this.active,this.cam.position,E),this.effects.localFlame(this.player.alive&&!i&&!this.awaitingWeapon&&e.shoot&&this.active==="flame"&&!b&&_.ammo>0,Ws(this.gunFlash,this.active),this.cam.position,this.cam.getWorldDirection(new C),E,t,x,_.level),this.aimFeedback.update(i||!this.player.alive?"neutral":Td(this.active,A.origin,A.direction,x,E,_.level),this.player.alive&&!i),this.scope.render(this.renderer,this.scene,this.cam)}dispose(){if(!this.disposed){this.disposed=!0,this.paused=!0,this.ready=!1,this.loop.stop(),this.socket.off("match:pickup",this.onPickup),this.socket.off("match:snapshot",this.onSnapshot),this.socket.off("match:shot",this.onShot),this.socket.off("match:hit",this.onHit),this.socket.off("match:kill",this.onKill),this.socket.off("match:damage",this.onDamage),this.socket.off("match:warden",this.onWardenNotice),this.socket.off("disconnect",this.onDisconnect),this.socket.off("connect_error",this.onConnectError),this.stopResize(),this.root.onclick=null,this.desktop?.dispose(),this.mobile?.dispose(),this.tacticalBoard.dispose(),this.settings?.dispose(),this.armory.dispose(),this.pickupPreview.dispose(),this.pickupFeedback.dispose(),this.scope.dispose(),this.effects.dispose(),this.battle.dispose(),this.feedback.dispose(),this.hud.dispose(),this.aimFeedback.dispose(),this.warden?.dispose(),this.warden=void 0,this.blessing.dispose();for(const t of this.avatars.values())t.dispose();this.avatars.clear(),pn(this.scene),this.scene.clear(),this.pickupMeshes.clear(),this.pending=[],this.snaps=[],this.radarPlayers.clear(),this.seenShots.clear(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),document.pointerLockElement===this.root&&document.exitPointerLock?.(),this.root.replaceChildren()}}}const Gc="chroma-multiplayer-session";function gf(){try{const n=JSON.parse(sessionStorage.getItem(Gc));return typeof n?.code=="string"&&typeof n?.playerId=="string"&&typeof n?.resumeToken=="string"?n:null}catch{return null}}function Mu(n){try{n?sessionStorage.setItem(Gc,JSON.stringify({code:n.code,playerId:n.playerId,resumeToken:n.resumeToken})):sessionStorage.removeItem(Gc)}catch{}}function _f({code:n,onResume:t,disabled:e=!1}){return k.jsxs("button",{type:"button",className:"co-resume-card",onClick:t,disabled:e,children:[k.jsx("span",{className:"co-resume-icon","aria-hidden":"true",children:k.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[k.jsx("path",{d:"M4 10a8 8 0 1 1 1.8 7.1M4 4v6h6"}),k.jsx("path",{d:"m11 9 4 3-4 3V9Z"})]})}),k.jsxs("span",{className:"co-resume-copy",children:[k.jsxs("span",{className:"co-resume-eyebrow",children:["繼續你的對戰 ",k.jsx("span",{children:n})]}),k.jsx("strong",{children:"返回上一場"}),k.jsx("small",{children:"回到原本的房間，與隊友再度集合"})]}),k.jsx("span",{className:"co-resume-arrow","aria-hidden":"true",children:"↗"})]})}function vf({notice:n}){const t=n.kind==="reconnected";return k.jsxs("div",{className:`mp-notice ${t?"is-restored":"is-offline"}`,children:[k.jsx("span",{className:"mp-notice-icon","aria-hidden":"true",children:t?"↗":"!"}),k.jsxs("span",{className:"mp-notice-copy",children:[k.jsxs("span",{children:[k.jsx("b",{children:n.name}),t?" 已恢復連線":" 已斷線"]}),k.jsx("small",{children:t?"已回到房間，繼續對戰":"席位保留 60 秒，等待重新連線"})]}),k.jsx("time",{dateTime:new Date(n.at).toISOString(),children:new Date(n.at).toLocaleTimeString("zh-TW",{hour12:!1,hour:"2-digit",minute:"2-digit"})})]})}function xM({notices:n}){const[t,e]=Bt.useState(()=>Date.now()),i=n.filter(s=>s.expiresAt>t).slice(-3);return Bt.useEffect(()=>{const s=n.filter(o=>o.expiresAt>t);if(!s.length)return;const r=Math.min(...s.map(o=>o.expiresAt)),a=setTimeout(()=>e(Date.now()),Math.max(0,r-Date.now()));return()=>clearTimeout(a)},[n,t]),i.length?k.jsx("aside",{className:"mp-broadcast-toasts","aria-label":"房間連線通知",role:"log","aria-live":"polite","aria-relevant":"additions",children:i.map(s=>k.jsx(vf,{notice:s},s.id))}):null}function Su({notices:n=[],floating:t=!1}){return n.length?t?k.jsx(xM,{notices:n}):k.jsxs("section",{className:"mp-broadcast","aria-label":"房間廣播",children:[k.jsxs("header",{children:[k.jsxs("span",{children:[k.jsx("i",{"aria-hidden":"true"}),"房間廣播"]}),k.jsx("small",{children:"連線動態"})]}),k.jsx("div",{className:"mp-broadcast-log",role:"log","aria-live":"polite","aria-relevant":"additions",children:n.slice(-5).map(e=>k.jsx(vf,{notice:e},e.id))})]}):null}const yM="https://dca-simulator-uw4r.onrender.com",Ao="https://dca-simulator-uw4r.onrender.com".trim().replace(/\/+$/,""),MM=n=>/^https?:\/\/(localhost|127(?:\.\d+){3})(?::|\/|$)/i.test(n),SM=Ao&&!MM(Ao)?Ao:yM,bM={INVALID_NICKNAME:"暱稱需為 2 到 16 個字元",INVALID_ROOM_CODE:"請輸入 6 碼房間碼",ROOM_NOT_FOUND:"房間已不存在，請重新加入或建立房間",ROOM_FULL:"房間已滿（包含斷線保留席位）",ROUND_ENDING:"本局正在結算，請稍後再加入",SESSION_EXPIRED:"上一場席位已過期，或伺服器已重啟，請用房號重新加入",HOST_ONLY:"只有目前房主可以操作",NOT_READY:"需要至少兩位在線玩家才能開始",INVALID_STATE:"房間狀態已改變，請重試",ALREADY_IN_ROOM:"你已在房間內，請先離開"},Ro=n=>bM[n]||n||"操作失敗，請重試";function EM({onBack:n,resumeOnMount:t=!1,enterFullscreen:e,exitFullscreen:i,enterOnFirstTouch:s,fullscreenButton:r}){const[a,o]=Bt.useState(t?"reconnecting":"join"),[c,l]=Bt.useState(localStorage.getItem("chroma-name")||""),[h,d]=Bt.useState(new URLSearchParams(location.search).get("room")||""),[u,p]=Bt.useState(null),[g,_]=Bt.useState(""),[m,f]=Bt.useState(""),[M,T]=Bt.useState(!1),[y,w]=Bt.useState(10),[b,A]=Bt.useState([]),x=Bt.useRef(null),E=Bt.useRef(null),P=Bt.useRef(gf()),L=Bt.useRef(t),F=Bt.useRef(0),O=Bt.useRef(!1),I=Bt.useRef(!1),V=Bt.useRef(!1),z=Bt.useMemo(()=>ta(SM,{autoConnect:!1}),[]),Y=a==="playing"||a==="results",it=g===u?.host;Bt.useEffect(()=>{(a==="lobby"||a==="join")&&i?.()},[a,i]);const q=async(st,...Nt)=>{if(!z.connected)throw new Error("連線已中斷，請等待重連後再操作");try{const Et=await z.timeout(8e3).emitWithAck(st,...Nt);if(Et?.error)throw new Error(Ro(Et.error));return Et}catch(Et){throw new Error(Et.message==="operation has timed out"?"伺服器回應逾時，請重試":Et.message)}},Q=()=>{P.current=null,A([]),Mu(null)},et=st=>{if(st?.protocolVersion!==jy)throw L.current=!1,z.disconnect(),new Error("多人伺服器版本不一致，請同步部署前端與 Render 伺服器後再試。");p(st),o(st.state==="PLAYING"?"playing":st.state==="GAME_OVER"?"results":"lobby")},Rt=st=>{P.current={code:st.code,playerId:st.playerId,resumeToken:st.resumeToken},Mu(P.current),F.current=st.lastReceivedSeq||0,L.current=!0,_(st.playerId),d(st.code),et(st.room)};Bt.useEffect(()=>{O.current=!0;const st=async()=>{if(!(!L.current||!P.current||I.current)){I.current=!0,T(!0),f("");try{const Yt=await z.timeout(8e3).emitWithAck("room:resume",P.current);if(!O.current||!L.current)return;if(Yt.error)throw Yt.error==="SESSION_EXPIRED"&&Q(),new Error(Ro(Yt.error));Rt(Yt)}catch(Yt){O.current&&(f(Yt.message==="operation has timed out"?"恢復連線逾時，請點「返回上一場」重試":Ro(Yt.message)),o("join"),L.current=!1)}finally{I.current=!1,O.current&&T(!1)}}},Nt=Yt=>{if(!(!L.current||I.current||!P.current))try{et(Yt)}catch(Me){f(Me.message),o("join")}},Et=()=>{L.current&&P.current&&(z.sendBuffer.length=0,o("reconnecting"),T(!1))},kt=()=>{f("無法連線至遊戲伺服器，正在重試；斷線席位保留 60 秒"),T(!1)},ye=()=>{L.current=!1,Q(),z.disconnect(),p(null),o("join"),T(!1),f("此席位已在另一個連線恢復，這個連線已結束")},De=Yt=>{!L.current||Yt?.code!==P.current?.code||!["disconnected","reconnected"].includes(Yt.kind)||!Number.isFinite(Yt.at)||A(Me=>[...Me.filter(U=>U.id!==Yt.id),{...Yt,expiresAt:Date.now()+8e3}].slice(-3))};return z.on("connect",st),z.on("room:state",Nt),z.on("disconnect",Et),z.on("connect_error",kt),z.on("room:replaced",ye),z.on("room:notice",De),L.current&&P.current&&z.connect(),()=>{O.current=!1,z.off("connect",st),z.off("room:state",Nt),z.off("disconnect",Et),z.off("connect_error",kt),z.off("room:replaced",ye),z.off("room:notice",De),z.disconnect()}},[z]);const yt=async()=>{L.current=!1,T(!0);try{z.connected&&await q("room:leave")}catch(st){f(st.message)}Q(),z.disconnect(),T(!1),n()},se=async st=>{if(!V.current){V.current=!0,T(!0),f("");try{await q(st)}catch(Nt){st==="game:start"&&i?.(),f(Nt.message)}finally{V.current=!1,O.current&&T(!1)}}};Bt.useEffect(()=>{if(!Y||!x.current||E.current)return;const st=new vM(x.current,z,u?.code,u?.roundId,Nt=>{f(Nt),T(!1),o(z.connected?"join":"reconnecting")},g,F.current,{isHost:it,onLeave:()=>{yt()},onEnd:()=>{se("game:end")}});return E.current=st,st.start(),a==="results"&&st.pause(),()=>{st.dispose(),E.current===st&&(E.current=null)}},[Y,z,u?.code,u?.roundId,g,it]),Bt.useEffect(()=>{a==="results"?E.current?.pause():a==="playing"&&E.current?.resume()},[a]),Bt.useEffect(()=>{if(a!=="results"||!u?.returnAt)return;const st=performance.now()+Math.max(0,u.returnAt-(u.serverTime||Date.now())),Nt=()=>w(Math.max(0,Math.ceil((st-performance.now())/1e3)));Nt();const Et=window.setInterval(Nt,200);return()=>window.clearInterval(Et)},[a,u?.returnAt,u?.serverTime]);const Jt=()=>z.connected?Promise.resolve():new Promise((st,Nt)=>{const Et=()=>{clearTimeout(De),z.off("connect",kt),z.off("connect_error",ye)},kt=()=>{Et(),st()},ye=()=>{Et(),Nt(new Error("無法連線至遊戲伺服器，請重試"))},De=setTimeout(()=>{Et(),Nt(new Error("連線逾時，請重試"))},1e4);z.once("connect",kt),z.once("connect_error",ye),z.connect()}),te=async st=>{const Nt=c.trim();if(Nt.length<2||Nt.length>16){f("暱稱需為 2 到 16 個字元");return}L.current=!1,I.current=!0,f(""),T(!0);try{await Jt(),P.current&&((await z.timeout(8e3).emitWithAck("room:resume",P.current)).error||await q("room:leave"),Q()),localStorage.setItem("chroma-name",Nt);const Et=await q(st,st==="room:create"?Nt:{code:h,name:Nt});O.current&&Rt(Et)}catch(Et){O.current&&(f(Et.message),o("join"))}finally{I.current=!1,O.current&&T(!1)}},$=async()=>{!P.current||M||(e?.(),o("reconnecting"),f(""),L.current=!0,z.disconnect(),z.sendBuffer.length=0,z.connect())},tt=()=>{te("room:create")},vt=()=>{te("room:join")},Ot=()=>{e?.(),se("game:start")},gt=()=>{e?.(),se("game:again")},Gt=()=>{se("game:lobby")},xe=M?k.jsxs(k.Fragment,{children:[k.jsx("i",{className:"mp-spinner","aria-hidden":"true"}),"連線中…"]}):null,qt=()=>{const st=new URL(location.href);st.searchParams.set("room",u.code),navigator.clipboard?.writeText(st.toString()).catch(()=>f("無法複製，請分享房間碼"))};if(a==="reconnecting")return k.jsx("main",{className:"mp",children:k.jsxs("section",{className:"mp-panel mp-join-panel mp-reconnect-panel",children:[k.jsx("span",{className:"mp-reconnect-orbit","aria-hidden":"true",children:k.jsx("i",{className:"mp-spinner"})}),k.jsx("p",{className:"mp-eyebrow",children:"BACK TO THE ARENA"}),k.jsx("h1",{children:"正在返回上一場"}),k.jsx("p",{className:"mp-subtitle",children:"隊友還在戰場，正在為你恢復連線。"}),k.jsxs("p",{className:"mp-reconnect-hint",children:["斷線席位保留 ",k.jsx("b",{children:"60 秒"})]}),k.jsx("p",{className:"mp-status",role:"status",children:m||"網路恢復後會自動重新連線"}),k.jsx("button",{className:"mp-primary",disabled:M,onClick:$,children:"重試連線"}),k.jsx("button",{className:"mp-secondary",onClick:yt,children:"離開房間"})]})});if(Y){const st=u?.finalStandings||[],Nt=st.filter(kt=>u?.winnerIds?.includes(kt.id)),Et=u?.winnerIds?.includes(g);return k.jsxs("main",{className:"chroma-ops co-multiplayer-shell",onPointerUpCapture:a==="playing"?s:void 0,children:[k.jsx("div",{className:"co-game-stage",ref:x,"aria-label":"CHROMA OPS multiplayer arena"},u?.roundId),a==="playing"&&r,k.jsx(Su,{notices:b,floating:!0}),m&&k.jsx("p",{className:"mp-match-error",role:"alert",children:m}),a==="results"&&k.jsx("section",{className:"mp-result",role:"dialog","aria-modal":"true","aria-labelledby":"mp-result-title",children:k.jsxs("div",{className:`mp-result-card ${Et?"is-winner":""}`,children:[k.jsx("p",{className:"mp-result-eyebrow",children:"比賽結束"}),k.jsx("h1",{id:"mp-result-title",children:u?.endReason==="draw"?"平手":Et?"勝利！":"戰鬥結束"}),k.jsx("p",{className:"mp-result-winner",children:u?.endReason==="draw"?"本局無人取得積分":k.jsxs(k.Fragment,{children:[k.jsx("b",{children:Nt.map(kt=>kt.name).join("、")})," ",u?.endReason==="target"?`率先達到 ${u.scoreTarget} 分`:Nt.length>1?"超時並列獲勝":"超時積分最高"]})}),u?.winnerTitle&&k.jsx("p",{className:"mp-result-title",children:u.winnerTitle}),k.jsxs("div",{className:"mp-result-ranking",children:[k.jsxs("header",{children:[k.jsx("span",{children:"最終排名"}),k.jsx("span",{children:"積分 · 賞金 · K/D"})]}),st.map(kt=>k.jsxs("div",{className:kt.id===g?"is-me":"",children:[k.jsxs("span",{children:[k.jsx("i",{children:kt.rank}),kt.name,u?.winnerIds?.includes(kt.id)&&k.jsx("em",{children:"勝者"})]}),k.jsxs("strong",{className:kt.bounty>=jd?"is-high-bounty":"",children:[kt.score,"分 · 賞",kt.bounty," · ",kt.kills,"/",kt.deaths]})]},kt.id))]}),k.jsxs("p",{className:"mp-result-countdown",children:[k.jsx("b",{children:y})," 秒後自動回到房間"]}),it?k.jsxs("div",{className:"mp-result-actions",children:[k.jsx("button",{className:"mp-primary",disabled:M,onClick:gt,children:M?xe:"立即再玩"}),k.jsx("button",{disabled:M,onClick:Gt,children:"立即回房間"})]}):k.jsx("p",{className:"mp-result-waiting",children:"等待房主操作，或倒數結束後自動返回"}),k.jsx("button",{className:"mp-result-leave",onClick:yt,children:"離開多人模式"})]})})]})}return a==="lobby"&&u?k.jsx("main",{className:"mp",children:k.jsxs("section",{className:"mp-panel mp-lobby-panel",children:[k.jsx("button",{className:"mp-back",disabled:M,onClick:yt,children:"← 離開房間"}),k.jsxs("header",{className:"mp-lobby-header",children:[k.jsxs("div",{children:[k.jsx("p",{className:"mp-eyebrow",children:"CHROMA OPS / LOBBY"}),k.jsx("h1",{children:"集結，準備開戰。"}),k.jsx("p",{className:"mp-subtitle",children:"分享房號，邀請朋友加入你的戰場。"})]}),k.jsxs("div",{className:"mp-room-code",children:[k.jsx("small",{children:"房間代碼"}),k.jsx("strong",{children:u.code}),k.jsxs("span",{children:[k.jsx("i",{}),u.players.filter(st=>st.connected).length," 位在線 · ",u.players.length," / 8 席位"]})]})]}),u.lobbyReason&&k.jsx("p",{className:"mp-status",role:"status",children:u.lobbyReason}),k.jsxs("div",{className:`mp-lobby-columns ${u.notices?.length?"":"is-roster-only"}`,children:[k.jsxs("section",{className:"mp-roster-panel","aria-label":"房間玩家",children:[k.jsxs("h2",{children:["玩家名單 ",k.jsxs("span",{children:[u.players.length.toString().padStart(2,"0")," / 08"]})]}),k.jsx("div",{className:"mp-player-list",children:u.players.map(st=>k.jsxs("div",{className:`mp-player-row ${st.connected?"":"is-offline"}`,children:[k.jsxs("span",{className:"mp-player-info",children:[k.jsxs("b",{children:[st.name,st.id===g&&k.jsx("small",{children:"你"})]}),k.jsxs("span",{children:[k.jsx("i",{}),st.connected?"已連線，準備就緒":"斷線中 · 席位保留 60 秒"]})]}),st.id===u.host&&k.jsx("span",{className:"mp-host-badge",children:"房主"})]},st.id))}),k.jsxs("div",{className:"mp-share-actions",children:[k.jsx("button",{className:"mp-secondary",onClick:()=>navigator.clipboard?.writeText(u.code).catch(()=>f("無法複製，請手動複製房間碼")),children:"複製房間碼"}),k.jsx("button",{className:"mp-secondary",onClick:qt,children:"複製邀請連結 ↗"})]})]}),k.jsx(Su,{notices:u.notices})]}),k.jsxs("footer",{className:"mp-lobby-footer",children:[k.jsx("p",{children:it?"至少 2 位玩家在線即可開始，朋友也能中途加入。":"等待房主開始遊戲，先調整好你的手感吧。"}),it&&k.jsx("button",{className:"mp-primary",disabled:M||u.players.filter(st=>st.connected).length<2,onClick:Ot,children:M?xe:"開始遊戲 →"})]}),k.jsxs("p",{className:"mp-bounty-rules",children:["賞金競速：先達 ",Uc," 分獲勝，限時 8 分鐘。擊殺取得對方當下賞金（50～300），死亡不扣積分。賞金隨擊殺上升、連死逐步下降；超時同分並列獲勝。"]}),k.jsxs("details",{className:"mp-preferences",children:[k.jsx("summary",{children:"視角與操作設定"}),k.jsx(Hc,{})]}),m&&k.jsx("p",{className:"mp-error",role:"alert",children:m})]})}):k.jsx("main",{className:"mp",children:k.jsxs("section",{className:"mp-panel mp-join-panel",children:[k.jsx("button",{className:"mp-back",disabled:M,onClick:yt,children:"← 選擇模式"}),k.jsx("p",{className:"mp-eyebrow",children:"CHROMA OPS / MULTIPLAYER"}),k.jsx("h1",{children:"邀請你的隊友。"}),k.jsx("p",{className:"mp-subtitle",children:"建立專屬房間，或用房號直達戰場。"}),P.current&&k.jsx(_f,{code:P.current.code,disabled:M,onResume:$}),k.jsxs("label",{className:"mp-field",children:["玩家暱稱",k.jsx("input",{placeholder:"大家怎麼稱呼你？",autoComplete:"nickname",disabled:M,value:c,maxLength:"16",onChange:st=>l(st.target.value)})]}),k.jsx("button",{className:"mp-primary",disabled:M,onClick:tt,children:M?xe:"建立新房間 →"}),k.jsx("div",{className:"mp-divider",children:k.jsx("span",{children:"或加入朋友的房間"})}),k.jsxs("label",{className:"mp-field",children:["房間碼",k.jsx("input",{className:"mp-code-input",placeholder:"輸入 6 碼房號",autoCapitalize:"characters",disabled:M,value:h,maxLength:"6",onChange:st=>d(st.target.value.toUpperCase())})]}),k.jsx("button",{className:"mp-secondary",disabled:M,onClick:vt,children:M?xe:"加入房間 ↗"}),k.jsxs("p",{className:"mp-bounty-rules",children:["賞金競速：先達 ",Uc," 分獲勝，限時 8 分鐘。擊殺取得對方當下賞金（50～300），死亡不扣積分。賞金隨擊殺上升、連死逐步下降；超時同分並列獲勝。"]}),k.jsxs("details",{className:"mp-preferences",children:[k.jsx("summary",{children:"視角與操作設定"}),k.jsx(Hc,{})]}),m&&k.jsx("p",{className:"mp-error",role:"alert",children:m})]})})}const Co=()=>navigator.standalone===!0||matchMedia("(display-mode: standalone), (display-mode: fullscreen)").matches;function Vc(){return document.fullscreenElement||document.webkitFullscreenElement}function Po(n){if(!(!n||Vc()!==n))try{(document.exitFullscreen||document.webkitExitFullscreen)?.call(document)?.catch(()=>{})}catch{}}function wM(){const n=Bt.useRef(null),t=Bt.useCallback(d=>{n.current=d},[]),e=Bt.useRef(!1),i=Bt.useRef(null),[s,r]=Bt.useState(!1),[a]=Bt.useState(()=>!Co()&&!!(document.documentElement.requestFullscreen||document.documentElement.webkitRequestFullscreen)&&(document.fullscreenEnabled??document.webkitFullscreenEnabled)!==!1),[o]=Bt.useState(()=>/iPhone|iPod/.test(navigator.userAgent)&&!Co()),c=Bt.useCallback(()=>{const d=n.current;if(!d||i.current||Vc()||Co()||!(d.requestFullscreen||d.webkitRequestFullscreen)||(document.fullscreenEnabled??document.webkitFullscreenEnabled)===!1)return;e.current=!0;const p={cancelled:!1};i.current=p;const g=()=>{i.current===p&&(i.current=null),p.cancelled&&!i.current&&Po(d)};try{const _=d.requestFullscreen?d.requestFullscreen({navigationUI:"hide"}):d.webkitRequestFullscreen();Promise.resolve(_).then(g,g)}catch{g()}},[]),l=Bt.useCallback(()=>{i.current&&(i.current.cancelled=!0,i.current=null),e.current=!1,Po(n.current)},[]),h=Bt.useCallback(d=>{d.isTrusted&&d.pointerType==="touch"&&!e.current&&c()},[c]);return Bt.useEffect(()=>{const d=n.current,u=()=>r(Vc()===d);return document.addEventListener("fullscreenchange",u),document.addEventListener("webkitfullscreenchange",u),()=>{document.removeEventListener("fullscreenchange",u),document.removeEventListener("webkitfullscreenchange",u),l(),Po(d)}},[l]),{attachSurface:t,enter:c,exit:l,enterOnFirstTouch:h,showInstall:o,canEnter:a&&!s}}const TM=Bt.lazy(()=>Tf(()=>import("./WardenPreview-Op4-k5SV.js"),__vite__mapDeps([0,1,2,3])));function AM({onBack:n,fullscreenButton:t}){const e=Bt.useRef(null);return Bt.useEffect(()=>{const i=new Kx(e.current);return i.start(),()=>i.dispose()},[]),k.jsxs("main",{className:"chroma-ops",children:[k.jsx("div",{className:"co-game-stage",ref:e}),k.jsxs("div",{className:"co-start",children:["CHROMA OPS ",k.jsx("small",{children:"WASD 移動 · Shift 跑步 · 1–7 武器 · 狙擊槍右鍵開鏡"})]}),k.jsx("button",{type:"button",className:"co-exit",onClick:n,children:"← 選擇模式"}),t]})}function RM(){const[n,t]=Bt.useState(()=>new URLSearchParams(location.search).has("room")?"multi":"menu"),{attachSurface:e,enter:i,exit:s,enterOnFirstTouch:r,showInstall:a,canEnter:o}=wM(),c=gf();Bt.useEffect(()=>{const d=document.querySelector('meta[name="viewport"]'),u=d?.content;d&&(d.content=`${u}, viewport-fit=cover`);const p=document.createElement("link");p.rel="manifest",p.href="/dca-simulator/chroma-ops.webmanifest";const g=document.createElement("link");return g.rel="apple-touch-icon",g.href="/dca-simulator/chroma-ops-192.png",document.head.append(p,g),()=>{d&&(d.content=u),p.remove(),g.remove()}},[]);const l=()=>{s();const d=new URL(location.href);d.searchParams.delete("room"),history.replaceState(null,"",d),t("menu")},h=o&&k.jsx("button",{type:"button",className:"co-fullscreen",onClick:i,children:"全螢幕"});return k.jsx("div",{className:"co-surface",ref:e,children:n==="solo"?k.jsx(AM,{onBack:l,fullscreenButton:h}):n==="multi"||n==="resume"?k.jsx(EM,{resumeOnMount:n==="resume",onBack:l,enterFullscreen:i,exitFullscreen:s,enterOnFirstTouch:r,fullscreenButton:h}):n==="warden"?k.jsx(Bt.Suspense,{fallback:k.jsx("main",{className:"co-menu",role:"status",children:"載入虛空騎士預覽…"}),children:k.jsx(TM,{onBack:l})}):k.jsx("main",{className:"co-menu",children:k.jsxs("section",{className:"co-menu-card",children:[k.jsx("p",{className:"co-eyebrow",children:"NEON CITY ARENA"}),k.jsx("h1",{children:"CHROMA OPS"}),k.jsx("p",{children:"選擇你的戰場模式"}),k.jsxs("div",{className:"co-mode-grid",children:[k.jsxs("button",{onClick:()=>{i(),t("solo")},children:[k.jsx("span",{children:"◎"}),k.jsx("b",{children:"單機訓練"}),k.jsx("small",{children:"對戰 AI、熟悉地圖與武器"})]}),k.jsxs("button",{onClick:()=>t("multi"),children:[k.jsx("span",{children:"◉"}),k.jsx("b",{children:"多人連線"}),k.jsx("small",{children:"建立房間、邀請朋友對戰"})]})]}),k.jsxs("button",{type:"button",className:"co-warden-entry",onClick:()=>t("warden"),children:[k.jsxs("span",{children:[k.jsx("strong",{children:"虛空騎士預覽"}),k.jsx("small",{children:"檢視 3D 模型與招式動畫"})]}),k.jsx("span",{"aria-hidden":"true",children:"→"})]}),c&&k.jsx(_f,{code:c.code,onResume:()=>{i(),t("resume")}}),a&&k.jsxs("details",{className:"co-install",children:[k.jsx("summary",{children:"在 iPhone 隱藏瀏覽器工具列"}),k.jsx("p",{children:"在 Safari 點「分享」→「加入主畫面」。如果看到「作為網頁 App 開啟」，請開啟它。之後從主畫面的 Chroma Ops 圖示啟動。"})]}),k.jsx(Hc,{})]})})})}const OM=Object.freeze(Object.defineProperty({__proto__:null,default:RM},Symbol.toStringTag,{value:"Module"}));export{ku as A,ge as B,NM as C,IM as D,ae as F,Se as G,hd as H,gm as L,PM as M,ln as P,ki as Q,dl as R,DM as S,LM as T,C as V,yd as W,Ft as a,ze as b,ll as c,ti as d,uM as e,Lt as f,Nn as g,Fs as h,er as i,Zt as j,nd as k,Qi as l,We as m,Ue as n,bu as o,Zi as p,ui as q,Le as r,pn as s,FM as t,OM as u};
