import{r as He,j as k}from"./index-DgpGHtQX.js";function Ch(i,e){let t=0,n=0;const s=()=>{const a=i.clientWidth,o=i.clientHeight;!a||!o||a===t&&o===n||(t=a,n=o,e(t,n))},r=typeof ResizeObserver>"u"?null:new ResizeObserver(s);return r?.observe(i),window.addEventListener("resize",s),window.visualViewport?.addEventListener("resize",s),s(),()=>{r?.disconnect(),window.removeEventListener("resize",s),window.visualViewport?.removeEventListener("resize",s)}}const Et={ar:{id:"ar",label:"AR-01",icon:"▰",color:5625599,magazine:30,damage:28,fireDelay:.11,reloadTime:1.25,spread:.006,range:30,headshot:2,description:"平衡全自動步槍"},smg:{id:"smg",label:"VOLT-9",icon:"≋",color:16765021,magazine:36,damage:22,fireDelay:.075,reloadTime:.9,spread:.018,range:45,headshot:2,description:"高速近距離衝鋒槍"},flame:{id:"flame",label:"焰流槍",icon:"✦",color:16739127,magazine:80,damage:20,fireDelay:.08,reloadTime:1.6,spread:.18,range:25,burn:2,description:"近距離燃燒火焰"},ice:{id:"ice",label:"霜凍槍",icon:"❄",color:7924479,magazine:24,damage:28,fireDelay:.16,reloadTime:1.3,spread:.008,range:55,headshot:2,slow:1.25,description:"命中使敵人緩速"},shotgun:{id:"shotgun",label:"裂片散彈槍",icon:"✹",color:13208831,magazine:8,damage:10,fireDelay:.75,reloadTime:1.45,spread:.12,range:35,headshot:2,pellets:10,description:"近距離高爆發"},sniper:{id:"sniper",label:"長弓狙擊槍",icon:"⌖",color:14942074,magazine:5,damage:80,fireDelay:1,reloadTime:2.5,spread:.02,scopedSpread:0,range:420,headshot:2,description:"4 倍狙擊鏡・爆頭致命"},rocket:{id:"rocket",label:"脈衝火箭炮",icon:"◆",color:16735358,magazine:4,damage:100,fireDelay:1.05,reloadTime:1.9,spread:.012,range:100,splash:5,description:"範圍爆炸傷害"}},Xt=["ar","smg","flame","ice","shotgun","rocket","sniper"];function Kr(i=1){return 1+.1*(i-1)}function Jr(i,e=1){return Et[i].range*(1+.15*(e-1))}const Id=8,Dd=.75;function mn(i,e=1){return Math.round(Et[i].magazine*(1+.25*(e-1)))}function Nd(){return Object.fromEntries(Xt.map(i=>[i,{level:1,ammo:mn(i),reloadUntil:0,quickReloadUntil:0}]))}function Ph(i,e,t){return t?e.level<3?"upgrade":e.ammo<mn(i,e.level)?"refill":"boost":"unlock"}function Ud(i,e,t,n=0,s=1e3){const r=mn(i,e.level),a=e.ammo,o=Ph(i,e,t);return o==="unlock"?(e.level=1,e.ammo=mn(i),e.reloadUntil=0,e.quickReloadUntil=0):o==="upgrade"?(e.level=e.level+1,e.ammo=mn(i,e.level),e.reloadUntil=0):o==="refill"?(e.ammo=r,e.reloadUntil=0):e.quickReloadUntil=n+Id*s,{weapon:i,kind:o,level:e.level,previousCapacity:r,capacity:mn(i,e.level),ammoAdded:e.ammo-a}}function la(i,e,t,n=!1,s=1e3){e.reloadUntil&&t>=e.reloadUntil&&(e.ammo=mn(i,e.level),e.reloadUntil=0),!e.reloadUntil&&(e.ammo===0||n&&e.ammo<mn(i,e.level))&&(e.reloadUntil=t+Et[i].reloadTime*s*(e.quickReloadUntil>t?Dd:1))}const As=[{x:-65,z:45,color:3524949,name:"WEST ARCADE",side:-1},{x:68,z:44,color:1683169,name:"EAST STATION",side:1},{x:-68,z:-47,color:15613063,name:"PINK GALLERY",side:-1},{x:66,z:-48,color:15836972,name:"SUN MARKET",side:1},...[-1,1].flatMap(i=>[-90,-12,92].map((e,t)=>({x:i*112,z:e,color:[9987295,15824696,2537901][t],name:`${i<0?"WEST":"EAST"} ${["STUDIO","SHOPS","GARDEN"][t]}`,side:i})))],Pe=(i,e,t,n,s,r,a=0)=>({minX:i-t/2,maxX:i+t/2,minZ:e-n/2,maxZ:e+n/2,minY:a,maxY:s,color:r}),Lh=As.flatMap(i=>[{x:i.x+i.side*16,z0:i.z+25,z1:i.z+1,from:0,to:6,width:4},{x:i.x+i.side*22,z0:i.z+1,z1:i.z+25,from:6,to:12,width:4}]);function Fd(i,e){for(const t of Lh){const n=(e-t.z0)/(t.z1-t.z0);if(Math.abs(i-t.x)<=t.width/2&&n>=0&&n<=1)return t.from+(t.to-t.from)*n}return null}const ln=[];for(const i of As){const e=(t,n,s,r,a,o=i.color,c=0)=>ln.push(Pe(i.x+t,i.z+n,s,r,a,o,c));for(const t of[0,6])for(const n of[-1,1])for(const s of["x","z"]){const r=(a,o,c,l)=>s==="x"?e(n*12,a,.4,o,l,i.color,c):e(a,n*12,o,.4,l,i.color,c);r(0,24,t+3.5,t+6);for(const a of[-7,7])r(a,10,t,t+1.2);for(const a of[-12,-6,-2,2,6,12])r(a,.6,t+1.2,t+3.5)}for(const t of[6,12]){e(-8.65,0,6.3,23.6,t,15330801,t-.3),e(5.15,0,13.3,23.6,t,15330801,t-.3),e(-3.5,-10.15,4,3.3,t,15330801,t-.3),e(-3.5,6.7,4,10.2,t,15330801,t-.3);for(const n of[t-6]){for(let s=0;s<12;s++)e(-7.5,-8+(s+.5)*.65,4,.65,n+(s+1)*.25,16761648,n),e(-3.5,-.2-(s+.5)*.65,4,.65,n+3+(s+1)*.25,16761648,n+3);e(-5.5,.9,8,2.2,n+3,16761648,n+2.7)}}for(const t of[-1,1])e(t*12,0,.25,10,13.1,16777215,12),e(0,t*12,6,.25,13.1,16777215,12);e(i.side*18,-1,12,4,6,16761648,5.7),e(i.side*15,27,18,4,12,16761648,11.7),e(i.side*8,20.5,4,17,12,16761648,11.7)}ln.push(Pe(0,36,88,4,6,16761648,5.7));for(const i of[34,38])ln.push(Pe(0,i,80,.2,7.1,16777215,6));for(const[i,e,t]of[[-48.5,45,11],[50,44,12]])ln.push(Pe(i,e,t,4,6,16761648,5.7));for(const i of[-44,44]){ln.push(Pe(i,40.5,4,9,6,16761648,5.7));for(const e of[-1,1])ln.push(Pe(i+e*2,41.5,.2,3,7.1,16777215,6))}for(const i of[-36,36])ln.push(Pe(i,36,1.2,1.2,5.7,7174304));for(const[i,e]of[[-37.5,35],[38,36]]){ln.push(Pe(i,55.5,e,4,12,16761648,11.7));for(const t of[53.5,57.5])ln.push(Pe(i,t,e,.2,13.1,16777215,12))}for(const i of[6,12])ln.push(Pe(68,31,4,2,i,15330801,i-.3));for(const i of[65,71])ln.push(Pe(i,25,.35,.35,14,6715566));const Od=ln,_r=[[-42,-65],[40,-65],[-45,18],[46,20],[-112,64],[115,65],[-30,112],[94,124]],eo=[[-50,-64],[50,-64],[-38,36],[38,36],[-119,18],[119,18],[-40,80],[42,80],[-16,-90],[16,-90]],Bd=[..._r.map(([i,e])=>Pe(i,e,5,5,.8,15747988)),...[[-40,5],[40,3],[-105,68],[108,68]].flatMap(([i,e])=>[Pe(i,e,4,1,.65,16761648),Pe(i,e+.5,4,.2,1.3,16761648,.65)]),...eo.map(([i,e])=>Pe(i,e,.25,.25,4.6,14148848))],kd=[[-140,-114],[-104,-122],[-148,-36],[-140,75],[-78,112],[-26,-116],[28,-122],[84,-106],[140,-100],[145,-36],[126,62],[88,124],[18,126],[-42,112],[-96,58],[-112,-48],[-36,-54],[30,32],[120,24],[-56,8]],zd=[[-130,-100],[-92,-42],[-45,30],[-65,45],[-65,62],[0,32],[68,44],[68,62],[110,60],[120,-18],[88,-74],[20,-102],[-25,-54],[-112,45],[-12,104],[35,35]],Hd={minX:-90,maxX:90,minZ:-22,maxZ:26},Qi=[{name:"NORTH",axis:"z",outer:-46,inner:-22,cross:0,kind:"ramp"},{name:"SOUTH",axis:"z",outer:50,inner:26,cross:0,kind:"ramp"},{name:"WEST",axis:"x",outer:-114,inner:-90,cross:9,kind:"stairs"},{name:"EAST",axis:"x",outer:114,inner:90,cross:9,kind:"stairs"}],Ns=Qi.map(i=>i.axis==="z"?{minX:-3,maxX:3,minZ:Math.min(i.outer,i.inner),maxZ:Math.max(i.outer,i.inner)}:{minX:Math.min(i.outer,i.inner),maxX:Math.max(i.outer,i.inner),minZ:6,maxZ:12}),to=(i,e,t,n=0)=>i>=t.minX-n&&i<=t.maxX+n&&e>=t.minZ-n&&e<=t.maxZ+n;function Gd(i,e){for(let t=0;t<Qi.length;t++)if(to(i,e,Ns[t])){const n=Qi[t],s=((n.axis==="z"?e:i)-n.outer)/(n.inner-n.outer);return n.kind==="ramp"?-6*s:-6}return to(i,e,Hd)?-6:null}function Ih(i,e=Ns){let t=[i];for(const n of e)t=t.flatMap(s=>{const r=Math.max(s.minX,n.minX),a=Math.min(s.maxX,n.maxX),o=Math.max(s.minZ,n.minZ),c=Math.min(s.maxZ,n.maxZ);return r>=a||o>=c?[s]:[{...s,maxX:r},{...s,minX:a},{...s,minX:r,maxX:a,maxZ:o},{...s,minX:r,maxX:a,minZ:c}].filter(l=>l.maxX-l.minX>1e-6&&l.maxZ-l.minZ>1e-6)});return t}const Tn=[Pe(0,2,180,48,-6,8625066,-6.4),Pe(0,2,180,48,0,13228511,-.35)];for(const i of[-22,26])for(const e of[-46.5,46.5])Tn.push(Pe(e,i,87,.4,0,5268103,-6));for(const i of[-90,90])Tn.push(Pe(i,-8,.4,28,0,5268103,-6),Pe(i,19,.4,14,0,5268103,-6));for(const i of Qi){const e=(i.outer+i.inner)/2;for(const t of[-1,1])Tn.push(i.axis==="z"?Pe(t*3.2,e,.4,24,1.1,8837607,-6):Pe(e,i.cross+t*3.2,24,.4,1.1,8837607,-6));if(i.kind==="stairs")for(let t=0;t<24;t++){const n=i.outer+Math.sign(i.inner-i.outer)*(t+.5);Tn.push(Pe(n,i.cross,1,6,-t*.25,16760147,-6.3))}}const Dh=[-51.5,-42.5,-33.5,-24.5,24.5,33.5,42.5,51.5].map((i,e)=>({x:i,z:2,width:9,depth:12,color:[16018351,5888449,16761946,10325231][e%4],name:["ARCADE","CAFE","SPORT","MUSIC","BOOKS","TECH","TOYS","BAKERY"][e]}));for(const i of Dh){Tn.push(Pe(i.x-4.5,2,.25,12,-.35,i.color,-6));for(const e of[-4,8]){for(const t of[-1,1])Tn.push(Pe(i.x+t*3.25,e,2.5,.25,-.35,i.color,-6));Tn.push(Pe(i.x,e,4,.25,-.35,i.color,-2.5))}Tn.push(Pe(i.x,2,3,1,-5,5861761,-6))}for(const i of[-20,56])Tn.push(Pe(i,2,.25,12,-.35,10325231,-6));const Vd=Tn,no=[{x:-64,y:-6,z:18},{x:64,y:-6,z:-14},{x:-42.5,y:-6,z:5},{x:42.5,y:-6,z:-1}],Wt={x:0,z:-90,radius:22,centerY:22.2,cabins:8,period:60},Wd=[16731800,3594436,16761648,4945384,13208831,16742461,5625599,9626447],li=(i,e,t,n,s,r,a)=>({minX:i-n/2,maxX:i+n/2,minY:e-s/2,maxY:e+s/2,minZ:t-r/2,maxZ:t+r/2,color:a}),Xd=[-1,1].flatMap(i=>[li(i*8,10.5,-94,1.2,21,1.2,16761648),li(i*8,.25,-94,4,.5,4,2374768)]).concat([li(0,21.2,-94,17,1.2,1.2,16761648)]);function Nh(i,e){const t=(e/Wt.period+i/Wt.cabins)*Math.PI*2;return{x:Wt.x+Math.sin(t)*Wt.radius,y:Wt.centerY-Math.cos(t)*Wt.radius,z:Wt.z}}function Dr(i,e){const{x:t,y:n,z:s}=Nh(i,e),r=Wd[i];return[li(t,n-.2,s,6,.4,4,r),li(t-2.9,n+.55,s,.2,1.1,4,r),li(t+2.9,n+.55,s,.2,1.1,4,r),li(t,n+.55,s-1.9,5.6,1.1,.2,r)]}function qd(i){return Array.from({length:Wt.cabins},(e,t)=>Dr(t,i)).flat()}function Yd(i,e,t,n){for(let s=0;s<Wt.cabins;s++)for(const r of Dr(s,n)){const a=Math.max(r.minX-i,0,i-r.maxX),o=Math.max(r.minZ-t,0,t-r.maxZ);if(Math.abs(e-r.maxY)<.025&&a*a+o*o<.42*.42)return s}return null}const Uh=8,es={x:68,z:28};function Fh(i){const e=(i%28+28)%28;return e<3?0:e<7?(e-3)/4*6:e<10?6:e<14?6+(e-10)/4*6:e<17?12:e<21?12-(e-17)/4*6:e<24?6:6-(e-24)/4*6}function Es(i,e){return i===Uh?{x:es.x,y:Fh(e),z:es.z}:Nh(i,e)}function Nr(i){const e=Fh(i);return[Pe(68,28,4,4,e,16731800,e-.3),Pe(66.1,28,.2,4,e+1.1,16777215,e),Pe(69.9,28,.2,4,e+1.1,16777215,e),Pe(68,26.1,4,.2,e+1.1,16777215,e)]}function io(i){return[...qd(i),...Nr(i)]}function cl(i,e,t,n){if(Math.abs(i-es.x)<2.5&&Math.abs(t-es.z)<2.5)for(const s of Nr(n)){const r=Math.max(s.minX-i,0,i-s.maxX),a=Math.max(s.minZ-t,0,t-s.maxZ);if(Math.abs(e-s.maxY)<.025&&r*r+a*a<.42*.42)return Uh}return Yd(i,e,t,n)}const dc={floors:[0,6,12],name:"CHROMA LAB"},st=[],bs=[],hi=[],zn=15330801,Bn=6322567,Qn=10082783,$e=(i,e,t,n,s,r,a,o=zn)=>i.push(Pe(e,t,n,s,r,o,a));for(const i of[6,12,18])$e(st,58,104,56.8,24.8,i,i-.3);$e(st,58,103,55.6,21.6,.02,0);for(const i of dc.floors){for(const n of[92,i===0?114:116]){for(const s of[43,73])$e(bs,s,n,26,.18,i+5.7,i+.4,13234669),$e(st,s,n,26,.35,i+.4,i,zn);i>0&&($e(bs,58,n,4,.18,i+5.7,i+.4,13234669),$e(st,58,n,4,.35,i+.4,i,zn)),$e(st,58,n,56,.35,i+6,i+(i===0?4.2:5.7));for(let s=30;s<=86;s+=4)(i>0||s!==58)&&$e(hi,s,n,.09,.26,i+5.7,i+.4,Bn);for(const s of[i+.4,i+3,i+5.7])for(const r of[43,73])$e(hi,r,n,26,.26,s+.05,s-.05,Qn);if(i>0)for(const s of[i+.4,i+3,i+5.7])$e(hi,58,n,4,.26,s+.05,s-.05,Qn)}$e(st,30,i===0?105.25:106.25,.4,i===0?17.5:19.5,i+6,i),$e(st,30,94.25,.4,4.5,i+6,i+4.2);const e=i===0?103:104,t=i===0?22:24;$e(bs,86,e,.18,t,i+5.7,i+.4,13234669),$e(st,86,e,.4,t,i+.4,i),$e(st,86,e,.4,t,i+6,i+5.7);for(const n of[92,96,100,104,108,112,i===0?114:116])$e(hi,86,n,.26,.09,i+5.7,i+.4,Bn);$e(st,38,105,8,.4,i+3.3,i,Bn),$e(st,34,103,.4,4,i+3.3,i,Bn),$e(st,72,102,6,1.2,i+1.1,i,zn)}for(const i of dc.floors){for(let e=0;e<12;e++){const t=(e+1)*.25;$e(st,23.5,94.5+(e+.5)*.75,4,.75,i+t,i,zn),$e(st,27.5,103.5-(e+.5)*.75,4,.75,i+3+t,i+3,zn);for(const[n,s,r]of[[21.45,94.5+(e+.5)*.75,i+t],[29.55,103.5-(e+.5)*.75,i+3+t]])$e(st,n,s,.15,.75,r+1.1,r+.95,Qn),$e(st,n,s,.15,.12,r+1.1,r,Bn)}$e(st,25.5,104.5,8,2,i+3,i+2.7),$e(st,25.5,93.5,8,2,i+6,i+5.7),$e(st,29.75,94.25,.5,4.5,i+6,i+5.7),$e(st,25.5,105.5,8,.15,i+4.1,i+3,Qn),$e(st,25.5,92.5,8,.15,i+7.1,i+6,Qn);for(const e of[21.45,29.55])$e(st,e,104.5,.15,2,i+4.1,i+3,Qn);$e(st,21.45,93.5,.15,2,i+7.1,i+6,Qn)}$e(st,25.5,93.5,8,2,0,-.3);for(const i of[30,86])$e(st,i,106.25,.2,19.5,19.1,18,Bn);for(const i of[92,116])$e(st,58,i,56,.2,19.1,18,Bn);$e(st,58,98,40,.3,21,18,zn);for(const i of[38,78])$e(st,i,102,.3,8,21,18,zn);for(let i=38;i<=78;i+=2)$e(hi,i,97.8,.1,.1,21,18,Bn);$e(st,58,117,56,6,4.7,4.45,Qn);$e(st,58,116.7,57,.6,18.25,17.85,zn);for(const i of[32,40,48,68,76,84])$e(hi,i,116.25,.22,.5,4.4,0,Bn);const ll=bs,$d=hi,Zd=[...st,...bs],Yi={minX:-154,maxX:154,minZ:-140,maxZ:140,width:308,depth:280},fc=560,so=8,hl=1.2,En=1.65,vr=1.8,pc=.42,Kd=7,ul=14,Os=.35,Ki=1e-4,Jd=kd;As.map(i=>({...i,openSouth:!0}));const Lt=(i,e,t,n,s,r,a=0)=>({minX:i-t/2,maxX:i+t/2,minZ:e-n/2,maxZ:e+n/2,minY:a,maxY:a+s,color:r}),Yt=[...Xd,...Od,...Bd,...Vd,...Zd,Lt(-152,0,4,280,19,2971848),Lt(152,0,4,280,19,15479928),Lt(0,-138,308,4,17,15968045),Lt(0,138,308,4,17,3524949),Lt(0,-3,6,6,3,15747925),Lt(-22,13,8,3,2,16758584),Lt(24,-14,8,3,2,4945384),Lt(-3,20,3,8,2,8014805),Lt(5,-25,3,8,2,3524949),Lt(-40,-8,12,2,4,9262549),Lt(-34,-19,2,18,4,9262549),Lt(-49,-19,2,18,4,9262549),Lt(42,10,13,2,4,15682683),Lt(36,20,2,18,4,15682683),Lt(49,20,2,18,4,15682683),Lt(-43,-34,4,4,2,16761648),Lt(42,34,4,4,2,3524949),Lt(-12,92,32,3,3,3524949)];function ro(i){return{boxes:[...Yt,...io(i)],heightAt:ss}}function mc(i,e){const t=Fd(i,e);return t!==null?t:i>-22&&i<22&&e>52&&e<72?12:i>-25&&i<-16&&e>40&&e<=52?e-40:i>-12&&i<20&&e>88&&e<112?6:i>-38&&i<=-12&&e>88&&e<112?Math.max(0,(i+38)/26*6):0}function ss(i,e){return Gd(i,e)??mc(i,e)}const ao=new Map;for(const i of Yt)for(let e=Math.floor(i.minX/16);e<=Math.floor(i.maxX/16);e++)for(let t=Math.floor(i.minZ/16);t<=Math.floor(i.maxZ/16);t++){const n=`${e},${t}`,s=ao.get(n)||[];s.push(i),ao.set(n,s)}function gc(i,e,t=1){const n=new Set;for(let s=Math.floor((i-t)/16);s<=Math.floor((i+t)/16);s++)for(let r=Math.floor((e-t)/16);r<=Math.floor((e+t)/16);r++)for(const a of ao.get(`${s},${r}`)||[])n.add(a);return[...n]}function _c(i,e,t,n=pc){const s=Math.max(t.minX-i,0,i-t.maxX),r=Math.max(t.minZ-e,0,e-t.maxZ);return s*s+r*r<n*n}function jr(i,e,t=pc,n=0,s=Yt){return s===Yt&&(s=gc(i,e,t)),s.some(r=>_c(i,e,r,t)&&n<r.maxY-Ki&&n+vr>r.minY+Ki)}function Oh(i,e,t,n){let s=0,r=n;for(const a of["X","Y","Z"]){const o=a.toLowerCase(),c=e[o],l=i[o];if(Math.abs(c)<1e-9){if(l<t[`min${a}`]||l>t[`max${a}`])return null;continue}const h=(t[`min${a}`]-l)/c,d=(t[`max${a}`]-l)/c;if(s=Math.max(s,Math.min(h,d)),r=Math.min(r,Math.max(h,d)),s>r)return null}return s<=n?s:null}function gn(i,e,t,n={boxes:Yt,heightAt:ss}){let s=t;for(const r of n.boxes){const a=Oh(i,e,r,s);a!==null&&(s=a)}for(let r=0;r<=s;r+=.1)if(i.y+e.y*r<n.heightAt(i.x+e.x*r,i.z+e.z*r))return r;return s}function oo(i,e,t,n={boxes:Yt,heightAt:ss}){let s=n.heightAt(i,e);for(const r of n.boxes===Yt?gc(i,e):n.boxes)r.maxY<=t+Ki&&_c(i,e,r)&&(s=Math.max(s,r.maxY));return s}function vc(i,e,t,n={boxes:Yt,heightAt:ss},s=1,r){if(!i.alive)return;n.boxes===Yt&&(n={...n,boxes:gc(i.x,i.z,7)});const a=n;r!==void 0&&(n={...a,boxes:[...a.boxes,...io(r)]}),i.yaw-=e.lookX*.0024,i.pitch=Math.max(-1.35,Math.min(1.35,i.pitch-e.lookY*.0021));let o=i.y-En,c=oo(i.x,i.z,o+.02,n),l=Math.abs(o-c)<=.02&&i.velocityY<=0;l?(i.jumpsUsed=0,i.velocityY=0):i.jumpsUsed===0&&(i.jumpsUsed=1),e.jump&&i.jumpsUsed<2&&(i.velocityY=Kd,i.jumpsUsed++,l=!1);const h=-Math.sin(i.yaw),d=-Math.cos(i.yaw);let u=h*e.moveY+Math.cos(i.yaw)*e.moveX,p=d*e.moveY-Math.sin(i.yaw)*e.moveX;const g=Math.hypot(u,p);g>0&&(u=u/g*so*s*(e.sprint?hl:1),p=p/g*so*s*(e.sprint?hl:1));const x=Math.max(0,Math.min(.25,t)),m=Math.max(1,Math.ceil(x/(1/120))),f=x/m;for(let M=0;M<m;M++){if(r!==void 0){const R=r+M*f,v=R+f,b=l?cl(i.x,i.y-En,i.z,R):null;if(b!==null){const C=Es(b,R),L=Es(b,v);i.x+=L.x-C.x,i.y+=L.y-C.y,i.z+=L.z-C.z}n={...a,boxes:[...a.boxes,...io(v)]}}o=i.y-En;const T=(R,v)=>!jr(R,v,pc,o+(l?Os:0),n.boxes)&&n.heightAt(R,v)<=o+(l?Os:Ki),S=i.x+u*f;T(S,i.z)&&(i.x=S);const w=i.z+p*f;if(T(i.x,w)&&(i.z=w),c=oo(i.x,i.z,o+(l?Os:.04),n),l&&Math.abs(c-o)<=Os){i.y=c+En,i.velocityY=0,i.jumpsUsed=0;continue}l=!1,i.jumpsUsed===0&&(i.jumpsUsed=1);let E=o+i.velocityY*f-ul*f*f/2;if(i.velocityY-=ul*f,E>o)for(const R of n.boxes)_c(i.x,i.z,R)&&o+vr<=R.minY+Ki&&E+vr>R.minY&&(E=Math.min(E,R.minY-vr),i.velocityY=0);i.velocityY<=0&&o>=c-(r!==void 0?.04:Ki)&&E<=c&&(E=c,i.velocityY=0,i.jumpsUsed=0,l=!0),i.y=E+En}r!==void 0&&(i.supportId=i.velocityY<=0?cl(i.x,i.y-En,i.z,r+x):null)}function jd(i,e,t){let n=7,s;for(const o of i){if(!o.available)continue;const c=o.position.x-e.x,l=o.position.y-e.y,h=o.position.z-e.z,d=Math.hypot(c,l,h);d>n||d>.001&&gn(e,{x:c/d,y:l/d,z:h/d},d,t)<d-.05||(n=d,s=o)}if(!s)return"";const r=Ph(s.id,s.state,s.owned),a=r==="unlock"?"取得 Lv.1":r==="upgrade"?`升至 Lv.${s.state.level+1}・彈匣補滿`:r==="refill"?"彈匣補滿":"快速換彈 8 秒・換彈時間 -25%";return`${Et[s.id].label}｜${a}`}class Bh{el=document.createElement("div");signature="";constructor(e){this.el.className="co-pickup-preview",this.el.hidden=!0,e.append(this.el)}update(e,t,n,s){const r=s?jd(e,t,n):"";r!==this.signature&&(this.signature=r,this.el.textContent=r,this.el.hidden=!r)}dispose(){this.el.remove()}}const xc="186",Qd=0,dl=1,ef=2,xr=1,tf=2,ys=3,pi=0,Zt=1,jt=2,Hn=0,fi=1,ws=2,fl=3,pl=4,nf=5,qi=100,sf=101,rf=102,af=103,of=104,cf=200,lf=201,hf=202,uf=203,kh=204,zh=205,df=206,ff=207,pf=208,mf=209,gf=210,_f=211,vf=212,xf=213,yf=214,co=0,lo=1,ho=2,Rs=3,uo=4,fo=5,po=6,mo=7,Hh=0,Sf=1,Mf=2,Rn=0,Gh=1,Vh=2,Wh=3,Xh=4,qh=5,Yh=6,$h=7,Zh=300,mi=301,ts=302,ha=303,ua=304,Qr=306,go=1e3,kn=1001,_o=1002,Nt=1003,Ef=1004,Bs=1005,zt=1006,da=1007,ui=1008,rn=1009,Kh=1010,Jh=1011,Cs=1012,yc=1013,Pn=1014,_n=1015,Ln=1016,Sc=1017,Mc=1018,Ps=1020,jh=35902,Qh=35899,eu=1021,tu=1022,vn=1023,Vn=1026,di=1027,Ec=1028,bc=1029,gi=1030,wc=1031,Tc=1033,yr=33776,Sr=33777,Mr=33778,Er=33779,vo=35840,xo=35841,yo=35842,So=35843,Mo=36196,Eo=37492,bo=37496,wo=37488,To=37489,Ur=37490,Ao=37491,Ro=37808,Co=37809,Po=37810,Lo=37811,Io=37812,Do=37813,No=37814,Uo=37815,Fo=37816,Oo=37817,Bo=37818,ko=37819,zo=37820,Ho=37821,Go=36492,Vo=36494,Wo=36495,Xo=36283,qo=36284,Fr=36285,Yo=36286,bf=3200,ml=0,wf=1,ei="",nn="srgb",Or="srgb-linear",Br="linear",ct="srgb",fa=7680,Tf=519,Af=512,Rf=513,Cf=514,Ac=515,Pf=516,Lf=517,Rc=518,If=519,nu=35044,Df=35048,gl="300 es",An=2e3,kr=2001;function Nf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Uf(){const i=zr("canvas");return i.style.display="block",i}const _l={};function Hr(...i){const e="THREE."+i.shift();console.log(e,...i)}function iu(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function De(...i){i=iu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function tt(...i){i=iu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ji(...i){const e=i.join(" ");e in _l||(_l[e]=!0,De(...i))}function Ff(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Of={[co]:lo,[ho]:po,[uo]:mo,[Rs]:fo,[lo]:co,[po]:ho,[mo]:uo,[fo]:Rs};class yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pa=Math.PI/180,$o=180/Math.PI;function ti(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function je(i,e,t){return Math.max(e,Math.min(t,i))}function Bf(i,e){return(i%e+e)%e}function ma(i,e,t){return(1-t)*i+t*e}function wn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Yc=class Yc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yc.prototype.isVector2=!0;let ke=Yc;class Si{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(d!==x||c!==u||l!==p||h!==g){let m=c*u+l*p+h*g+d*x;m<0&&(u=-u,p=-p,g=-g,x=-x,m=-m);let f=1-o;if(m<.9995){const M=Math.acos(m),T=Math.sin(M);f=Math.sin(f*M)/T,o=Math.sin(o*M)/T,c=c*f+u*o,l=l*f+p*o,h=h*f+g*o,d=d*f+x*o}else{c=c*f+u*o,l=l*f+p*o,h=h*f+g*o,d=d*f+x*o;const M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*d+c*p-l*u,e[t+1]=c*g+h*u+l*d-o*p,e[t+2]=l*g+h*p+o*u-c*d,e[t+3]=h*g-o*d-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"YZX":this._x=u*h*d+l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d-u*p*g;break;case"XZY":this._x=u*h*d-l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d+u*p*g;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const $c=class $c{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ga.copy(this).projectOnVector(e),this.sub(ga)}reflect(e){return this.sub(ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$c.prototype.isVector3=!0;let P=$c;const ga=new P,vl=new Si,Zc=class Zc{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],x=s[0],m=s[3],f=s[6],M=s[1],T=s[4],S=s[7],w=s[2],E=s[5],R=s[8];return r[0]=a*x+o*M+c*w,r[3]=a*m+o*T+c*E,r[6]=a*f+o*S+c*R,r[1]=l*x+h*M+d*w,r[4]=l*m+h*T+d*E,r[7]=l*f+h*S+d*R,r[2]=u*x+p*M+g*w,r[5]=u*m+p*T+g*E,r[8]=u*f+p*S+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,p=l*r-a*c,g=t*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(s*l-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=u*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_a.makeScale(e,t)),this}rotate(e){return Ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_a.makeRotation(-e)),this}translate(e,t){return Ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Zc.prototype.isMatrix3=!0;let Be=Zc;const _a=new Be,xl=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yl=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kf(){const i={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=Gn(s.r),s.g=Gn(s.g),s.b=Gn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?Br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ji("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ji("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Or]:{primaries:e,whitePoint:n,transfer:Br,toXYZ:xl,fromXYZ:yl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:xl,fromXYZ:yl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),i}const Je=kf();function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ai;class zf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ai===void 0&&(Ai=zr("canvas")),Ai.width=e.width,Ai.height=e.height;const s=Ai.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ai}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gn(t[n]/255)*255):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hf=0;class Cc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(va(s[a].image)):r.push(va(s[a]))}else r=va(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let Gf=0;const xa=new P;class Ut extends yi{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=kn,s=kn,r=zt,a=ui,o=vn,c=rn,l=Ut.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=ti(),this.name="",this.source=new Cc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xa).x}get height(){return this.source.getSize(xa).y}get depth(){return this.source.getSize(xa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case go:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case _o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case go:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case _o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Zh;Ut.DEFAULT_ANISOTROPY=1;const Kc=class Kc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],g=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,S=(p+1)/2,w=(f+1)/2,E=(h+u)/4,R=(d+x)/4,v=(g+m)/4;return T>S&&T>w?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=E/n,r=R/n):S>w?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=E/s,r=v/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=R/r,s=v/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-x)/M,this.z=(u-h)/M,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kc.prototype.isVector4=!0;let St=Kc;class Vf extends yi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Ut(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Cc(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class on extends Vf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class su extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wf extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Zr=class Zr{constructor(e,t,n,s,r,a,o,c,l,h,d,u,p,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,d,u,p,g,x,m)}set(e,t,n,s,r,a,o,c,l,h,d,u,p,g,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Ri.setFromMatrixColumn(e,0).length(),r=1/Ri.setFromMatrixColumn(e,1).length(),a=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,p=a*d,g=o*h,x=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=u-x*l,t[9]=-o*c,t[2]=x-u*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*h,p=c*d,g=l*h,x=l*d;t[0]=u+x*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=x+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*h,p=c*d,g=l*h,x=l*d;t[0]=u-x*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*h,p=a*d,g=o*h,x=o*d;t[0]=c*h,t[4]=g*l-p,t[8]=u*l+x,t[1]=c*d,t[5]=x*l+u,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,p=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-u*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*d+g,t[10]=u-x*d}else if(e.order==="XZY"){const u=a*c,p=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+x,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xf,e,qf)}lookAt(e,t,n){const s=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Yn.crossVectors(n,Kt),Yn.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Yn.crossVectors(n,Kt)),Yn.normalize(),ks.crossVectors(Kt,Yn),s[0]=Yn.x,s[4]=ks.x,s[8]=Kt.x,s[1]=Yn.y,s[5]=ks.y,s[9]=Kt.y,s[2]=Yn.z,s[6]=ks.z,s[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],M=n[3],T=n[7],S=n[11],w=n[15],E=s[0],R=s[4],v=s[8],b=s[12],C=s[1],L=s[5],N=s[9],B=s[13],I=s[2],V=s[6],z=s[10],Y=s[14],ne=s[3],q=s[7],Q=s[11],te=s[15];return r[0]=a*E+o*C+c*I+l*ne,r[4]=a*R+o*L+c*V+l*q,r[8]=a*v+o*N+c*z+l*Q,r[12]=a*b+o*B+c*Y+l*te,r[1]=h*E+d*C+u*I+p*ne,r[5]=h*R+d*L+u*V+p*q,r[9]=h*v+d*N+u*z+p*Q,r[13]=h*b+d*B+u*Y+p*te,r[2]=g*E+x*C+m*I+f*ne,r[6]=g*R+x*L+m*V+f*q,r[10]=g*v+x*N+m*z+f*Q,r[14]=g*b+x*B+m*Y+f*te,r[3]=M*E+T*C+S*I+w*ne,r[7]=M*R+T*L+S*V+w*q,r[11]=M*v+T*N+S*z+w*Q,r[15]=M*b+T*B+S*Y+w*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15],M=c*p-l*u,T=o*p-l*d,S=o*u-c*d,w=a*p-l*h,E=a*u-c*h,R=a*d-o*h;return t*(x*M-m*T+f*S)-n*(g*M-m*w+f*E)+s*(g*T-x*w+f*R)-r*(g*S-x*E+m*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],M=t*o-n*a,T=t*c-s*a,S=t*l-r*a,w=n*c-s*o,E=n*l-r*o,R=s*l-r*c,v=h*x-d*g,b=h*m-u*g,C=h*f-p*g,L=d*m-u*x,N=d*f-p*x,B=u*f-p*m,I=M*B-T*N+S*L+w*C-E*b+R*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/I;return e[0]=(o*B-c*N+l*L)*V,e[1]=(s*N-n*B-r*L)*V,e[2]=(x*R-m*E+f*w)*V,e[3]=(u*E-d*R-p*w)*V,e[4]=(c*C-a*B-l*b)*V,e[5]=(t*B-s*C+r*b)*V,e[6]=(m*S-g*R-f*T)*V,e[7]=(h*R-u*S+p*T)*V,e[8]=(a*N-o*C+l*v)*V,e[9]=(n*C-t*N-r*v)*V,e[10]=(g*E-x*S+f*M)*V,e[11]=(d*S-h*E-p*M)*V,e[12]=(o*b-a*L-c*v)*V,e[13]=(t*L-n*b+s*v)*V,e[14]=(x*T-g*w-m*M)*V,e[15]=(h*w-d*T+u*M)*V,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,p=r*h,g=r*d,x=a*h,m=a*d,f=o*d,M=c*l,T=c*h,S=c*d,w=n.x,E=n.y,R=n.z;return s[0]=(1-(x+f))*w,s[1]=(p+S)*w,s[2]=(g-T)*w,s[3]=0,s[4]=(p-S)*E,s[5]=(1-(u+f))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(g+T)*R,s[9]=(m-M)*R,s[10]=(1-(u+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ri.set(s[0],s[1],s[2]).length();const o=Ri.set(s[4],s[5],s[6]).length(),c=Ri.set(s[8],s[9],s[10]).length();r<0&&(a=-a),un.copy(this);const l=1/a,h=1/o,d=1/c;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=d,un.elements[9]*=d,un.elements[10]*=d,t.setFromRotationMatrix(un),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=An,c=!1){const l=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s);let g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===An)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===kr)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=An,c=!1){const l=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),p=-(n+s)/(n-s);let g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===An)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===kr)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Zr.prototype.isMatrix4=!0;let dt=Zr;const Ri=new P,un=new dt,Xf=new P(0,0,0),qf=new P(1,1,1),Yn=new P,ks=new P,Kt=new P,Sl=new dt,Ml=new Si;class _i{constructor(e=0,t=0,n=0,s=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ml.setFromEuler(this),this.setFromQuaternion(Ml,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class ru{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yf=0;const El=new P,Ci=new Si,Dn=new dt,zs=new P,os=new P,$f=new P,Zf=new Si,bl=new P(1,0,0),wl=new P(0,1,0),Tl=new P(0,0,1),Al={type:"added"},Kf={type:"removed"},Pi={type:"childadded",child:null},ya={type:"childremoved",child:null};class Dt extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new P,t=new _i,n=new Si,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new Be}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ru,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(bl,e)}rotateY(e){return this.rotateOnAxis(wl,e)}rotateZ(e){return this.rotateOnAxis(Tl,e)}translateOnAxis(e,t){return El.copy(e).applyQuaternion(this.quaternion),this.position.add(El.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bl,e)}translateY(e){return this.translateOnAxis(wl,e)}translateZ(e){return this.translateOnAxis(Tl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zs.copy(e):zs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(os,zs,this.up):Dn.lookAt(zs,os,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(Dn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Al),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kf),ya.child=e,this.dispatchEvent(ya),ya.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Al),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,$f),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,Zf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Dt.DEFAULT_UP=new P(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $t extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jf={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jf)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function Ma(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=Bf(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ma(a,r,e+1/3),this.g=Ma(a,r,e),this.b=Ma(a,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=nn){function n(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const n=au[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return Je.workingToColorSpace(kt.copy(this),e),Math.round(je(kt.r*255,0,255))*65536+Math.round(je(kt.g*255,0,255))*256+Math.round(je(kt.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(kt.copy(this),t);const n=kt.r,s=kt.g,r=kt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=nn){Je.workingToColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,s=kt.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(Hs);const n=ma($n.h,Hs.h,t),s=ma($n.s,Hs.s,t),r=ma($n.l,Hs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Oe;Oe.NAMES=au;class Pc extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const dn=new P,Nn=new P,Ea=new P,Un=new P,Li=new P,Ii=new P,Rl=new P,ba=new P,wa=new P,Ta=new P,Aa=new St,Ra=new St,Ca=new St;class an{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),dn.subVectors(e,t),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){dn.subVectors(s,t),Nn.subVectors(n,t),Ea.subVectors(e,t);const a=dn.dot(dn),o=dn.dot(Nn),c=dn.dot(Ea),l=Nn.dot(Nn),h=Nn.dot(Ea),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Un.x),c.addScaledVector(a,Un.y),c.addScaledVector(o,Un.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Aa.setScalar(0),Ra.setScalar(0),Ca.setScalar(0),Aa.fromBufferAttribute(e,t),Ra.fromBufferAttribute(e,n),Ca.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Aa,r.x),a.addScaledVector(Ra,r.y),a.addScaledVector(Ca,r.z),a}static isFrontFacing(e,t,n,s){return dn.subVectors(n,t),Nn.subVectors(e,t),dn.cross(Nn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),dn.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return an.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Li.subVectors(s,n),Ii.subVectors(r,n),ba.subVectors(e,n);const c=Li.dot(ba),l=Ii.dot(ba);if(c<=0&&l<=0)return t.copy(n);wa.subVectors(e,s);const h=Li.dot(wa),d=Ii.dot(wa);if(h>=0&&d<=h)return t.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Li,a);Ta.subVectors(e,r);const p=Li.dot(Ta),g=Ii.dot(Ta);if(g>=0&&p<=g)return t.copy(r);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ii,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Rl.subVectors(r,s),o=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(Rl,o);const f=1/(m+x+u);return a=x*f,o=u*f,t.copy(n).addScaledVector(Li,a).addScaledVector(Ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Mi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gs.copy(n.boundingBox)),Gs.applyMatrix4(e.matrixWorld),this.union(Gs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),Vs.subVectors(this.max,cs),Di.subVectors(e.a,cs),Ni.subVectors(e.b,cs),Ui.subVectors(e.c,cs),Zn.subVectors(Ni,Di),Kn.subVectors(Ui,Ni),si.subVectors(Di,Ui);let t=[0,-Zn.z,Zn.y,0,-Kn.z,Kn.y,0,-si.z,si.y,Zn.z,0,-Zn.x,Kn.z,0,-Kn.x,si.z,0,-si.x,-Zn.y,Zn.x,0,-Kn.y,Kn.x,0,-si.y,si.x,0];return!Pa(t,Di,Ni,Ui,Vs)||(t=[1,0,0,0,1,0,0,0,1],!Pa(t,Di,Ni,Ui,Vs))?!1:(Ws.crossVectors(Zn,Kn),t=[Ws.x,Ws.y,Ws.z],Pa(t,Di,Ni,Ui,Vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fn=[new P,new P,new P,new P,new P,new P,new P,new P],fn=new P,Gs=new Mi,Di=new P,Ni=new P,Ui=new P,Zn=new P,Kn=new P,si=new P,cs=new P,Vs=new P,Ws=new P,ri=new P;function Pa(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ri.fromArray(i,r);const o=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),c=e.dot(ri),l=t.dot(ri),h=n.dot(ri);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const wt=new P,Xs=new ke;let jf=0;class cn extends yi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nu,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xs.fromBufferAttribute(this,t),Xs.applyMatrix3(e),this.setXY(t,Xs.x,Xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class ou extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cu extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ft extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Qf=new Mi,ls=new P,La=new P;class Ei{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ls.subVectors(e,this.center);const t=ls.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ls,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(La.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ls.copy(e.center).add(La)),this.expandByPoint(ls.copy(e.center).sub(La))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ep=0;const tn=new dt,Ia=new Dt,Fi=new P,Jt=new Mi,hs=new Mi,It=new P;class At extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nf(e)?cu:ou)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return Ia.lookAt(e),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ft(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];hs.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(Jt.min,hs.min),Jt.expandByPoint(It),It.addVectors(Jt.max,hs.max),Jt.expandByPoint(It)):(Jt.expandByPoint(hs.min),Jt.expandByPoint(hs.max))}Jt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)It.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(It));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)It.fromBufferAttribute(o,l),c&&(Fi.fromBufferAttribute(e,l),It.add(Fi)),s=Math.max(s,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new cn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new P,c[v]=new P;const l=new P,h=new P,d=new P,u=new ke,p=new ke,g=new ke,x=new P,m=new P;function f(v,b,C){l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,C),u.fromBufferAttribute(r,v),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,C),h.sub(l),d.sub(l),p.sub(u),g.sub(u);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),o[v].add(x),o[b].add(x),o[C].add(x),c[v].add(m),c[b].add(m),c[C].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,b=M.length;v<b;++v){const C=M[v],L=C.start,N=C.count;for(let B=L,I=L+N;B<I;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const T=new P,S=new P,w=new P,E=new P;function R(v){w.fromBufferAttribute(s,v),E.copy(w);const b=o[v];T.copy(b),T.sub(w.multiplyScalar(w.dot(b))).normalize(),S.crossVectors(E,b);const L=S.dot(c[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,L)}for(let v=0,b=M.length;v<b;++v){const C=M[v],L=C.start,N=C.count;for(let B=L,I=L+N;B<I;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,d=new P;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let p=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*h;for(let f=0;f<h;f++)u[g++]=l[p++]}return new cn(u,h,d)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=e(u,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nu,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Gt=new P;class Gr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Hr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Hr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Da=new P,np=new P,ip=new Be;class jn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Da.subVectors(n,t).cross(np.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Da),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ip.getNormalMatrix(e),s=this.coplanarPoint(Da).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let sp=0;class bi extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=fi,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kh,this.blendDst=zh,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fa,this.stencilZFail=fa,this.stencilZPass=fa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new jn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ke().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class lu extends bi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Oi;const us=new P,Bi=new P,ki=new P,zi=new ke,ds=new ke,hu=new dt,qs=new P,fs=new P,Ys=new P,Cl=new ke,Na=new ke,Pl=new ke;class uu extends Dt{constructor(e=new lu){if(super(),this.isSprite=!0,this.type="Sprite",Oi===void 0){Oi=new At;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new tp(t,5);Oi.setIndex([0,1,2,0,2,3]),Oi.setAttribute("position",new Gr(n,3,0,!1)),Oi.setAttribute("uv",new Gr(n,2,3,!1))}this.geometry=Oi,this.material=e,this.center=new ke(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&tt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bi.setFromMatrixScale(this.matrixWorld),hu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ki.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bi.multiplyScalar(-ki.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;$s(qs.set(-.5,-.5,0),ki,a,Bi,s,r),$s(fs.set(.5,-.5,0),ki,a,Bi,s,r),$s(Ys.set(.5,.5,0),ki,a,Bi,s,r),Cl.set(0,0),Na.set(1,0),Pl.set(1,1);let o=e.ray.intersectTriangle(qs,fs,Ys,!1,us);if(o===null&&($s(fs.set(-.5,.5,0),ki,a,Bi,s,r),Na.set(0,1),o=e.ray.intersectTriangle(qs,Ys,fs,!1,us),o===null))return;const c=e.ray.origin.distanceTo(us);c<e.near||c>e.far||t.push({distance:c,point:us.clone(),uv:an.getInterpolation(us,qs,fs,Ys,Cl,Na,Pl,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function $s(i,e,t,n,s,r){zi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ds.x=r*zi.x-s*zi.y,ds.y=s*zi.x+r*zi.y):ds.copy(zi),i.copy(e),i.x+=ds.x,i.y+=ds.y,i.applyMatrix4(hu)}const On=new P,Ua=new P,Zs=new P,Ks=new P;class Lc{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ua.copy(e).add(t).multiplyScalar(.5),Zs.copy(t).sub(e).normalize(),Ks.copy(this.origin).sub(Ua);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Zs),o=Ks.dot(this.direction),c=-Ks.dot(Zs),l=Ks.lengthSq(),h=Math.abs(1-a*a);let d,u,p,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const x=1/h;d*=x,u*=x,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ua).addScaledVector(Zs,u),p}intersectSphere(e,t){if(e.radius<0)return null;On.subVectors(e.center,this.origin);const n=On.dot(this.direction),s=On.dot(On)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,p=e.z-a.z,g=t.x-a.x,x=t.y-a.y,m=t.z-a.z,f=n.x-a.x,M=n.y-a.y,T=n.z-a.z,S=Math.abs(c),w=Math.abs(l),E=Math.abs(h);let R,v,b,C,L,N,B,I,V,z,Y,ne;if(S>=w&&S>=E?(b=c,N=d,V=g,ne=f,c>=0?(R=l,v=h,C=u,L=p,B=x,I=m,z=M,Y=T):(R=h,v=l,C=p,L=u,B=m,I=x,z=T,Y=M)):w>=E?(b=l,N=u,V=x,ne=M,l>=0?(R=h,v=c,C=p,L=d,B=m,I=g,z=T,Y=f):(R=c,v=h,C=d,L=p,B=g,I=m,z=f,Y=T)):(b=h,N=p,V=m,ne=T,h>=0?(R=c,v=l,C=d,L=u,B=g,I=x,z=f,Y=M):(R=l,v=c,C=u,L=d,B=x,I=g,z=M,Y=f)),b===0)return null;const q=R/b,Q=v/b,te=1/b,Re=C-q*N,ye=L-Q*N,it=B-q*V,Ke=I-Q*V,Qe=z-q*ne,$=Y-Q*ne,ee=Qe*Ke-$*it,ve=Re*$-ye*Qe,Ne=it*ye-Ke*Re;if(s){if(ee<0||ve<0||Ne<0)return null}else if((ee<0||ve<0||Ne<0)&&(ee>0||ve>0||Ne>0))return null;const ge=ee+ve+Ne;if(ge===0)return null;const Ge=te*(ee*N+ve*V+Ne*ne);return(ge>0?Ge<0:Ge>0)?null:this.at(Ge/ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ll=new dt,ai=new Lc,Js=new Ei,Il=new P,js=new P,Qs=new P,er=new P,Fa=new P,tr=new P,Dl=new P,nr=new P;class Fe extends Dt{constructor(e=new At,t=new nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){tr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(Fa.fromBufferAttribute(d,e),a?tr.addScaledVector(Fa,h):tr.addScaledVector(Fa.sub(t),h))}t.add(tr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(r),ai.copy(e.ray).recast(e.near),!(Js.containsPoint(ai.origin)===!1&&(ai.intersectSphere(Js,Il)===null||ai.origin.distanceToSquared(Il)>(e.far-e.near)**2))&&(Ll.copy(r).invert(),ai.copy(e.ray).applyMatrix4(Ll),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ai)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const m=u[g],f=a[m.materialIndex],M=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=M,w=T;S<w;S+=3){const E=o.getX(S),R=o.getX(S+1),v=o.getX(S+2);s=ir(this,f,e,n,l,h,d,E,R,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const M=o.getX(m),T=o.getX(m+1),S=o.getX(m+2);s=ir(this,a,e,n,l,h,d,M,T,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const m=u[g],f=a[m.materialIndex],M=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=M,w=T;S<w;S+=3){const E=S,R=S+1,v=S+2;s=ir(this,f,e,n,l,h,d,E,R,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const M=m,T=m+1,S=m+2;s=ir(this,a,e,n,l,h,d,M,T,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function rp(i,e,t,n,s,r,a,o){let c;if(e.side===Zt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===pi,o),c===null)return null;nr.copy(o),nr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(nr);return l<t.near||l>t.far?null:{distance:l,point:nr.clone(),object:i}}function ir(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,js),i.getVertexPosition(c,Qs),i.getVertexPosition(l,er);const h=rp(i,e,t,n,js,Qs,er,Dl);if(h){const d=new P;an.getBarycoord(Dl,js,Qs,er,d),s&&(h.uv=an.getInterpolatedAttribute(s,o,c,l,d,new ke)),r&&(h.uv1=an.getInterpolatedAttribute(r,o,c,l,d,new ke)),a&&(h.normal=an.getInterpolatedAttribute(a,o,c,l,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new P,materialIndex:0};an.getNormal(js,Qs,er,u.normal),h.face=u,h.barycoord=d}return h}class du extends Ut{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Nt,h=Nt,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nl extends cn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Hi=new dt,Ul=new dt,sr=[],Fl=new Mi,ap=new dt,ps=new Fe,ms=new Ei;class br extends Fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Nl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ap)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hi),Fl.copy(e.boundingBox).applyMatrix4(Hi),this.boundingBox.union(Fl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hi),ms.copy(e.boundingSphere).applyMatrix4(Hi),this.boundingSphere.union(ms)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ps.geometry=this.geometry,ps.material=this.material,ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ms.copy(this.boundingSphere),ms.applyMatrix4(n),e.ray.intersectsSphere(ms)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hi),Ul.multiplyMatrices(n,Hi),ps.matrixWorld=Ul,ps.raycast(e,sr);for(let a=0,o=sr.length;a<o;a++){const c=sr[a];c.instanceId=r,c.object=this,t.push(c)}sr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Nl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new du(new Float32Array(s*this.count),s,this.count,Ec,_n));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const oi=new Ei,op=new ke(.5,.5),rr=new P;class fu{constructor(e=new jn,t=new jn,n=new jn,s=new jn,r=new jn,a=new jn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],p=r[7],g=r[8],x=r[9],m=r[10],f=r[11],M=r[12],T=r[13],S=r[14],w=r[15];if(s[0].setComponents(l-a,p-h,f-g,w-M).normalize(),s[1].setComponents(l+a,p+h,f+g,w+M).normalize(),s[2].setComponents(l+o,p+d,f+x,w+T).normalize(),s[3].setComponents(l-o,p-d,f-x,w-T).normalize(),n)s[4].setComponents(c,u,m,S).normalize(),s[5].setComponents(l-c,p-u,f-m,w-S).normalize();else if(s[4].setComponents(l-c,p-u,f-m,w-S).normalize(),t===An)s[5].setComponents(l+c,p+u,f+m,w+S).normalize();else if(t===kr)s[5].setComponents(c,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){oi.center.set(0,0,0);const t=op.distanceTo(e.center);return oi.radius=.7071067811865476+t,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(rr.x=s.normal.x>0?e.max.x:e.min.x,rr.y=s.normal.y>0?e.max.y:e.min.y,rr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(rr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cp extends bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vr=new P,Wr=new P,Ol=new dt,gs=new Lc,ar=new Ei,Oa=new P,Bl=new P;class kl extends Dt{constructor(e=new At,t=new cp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Vr.fromBufferAttribute(t,s-1),Wr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Vr.distanceTo(Wr);e.setAttribute("lineDistance",new ft(n,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(s),ar.radius+=r,e.ray.intersectsSphere(ar)===!1)return;Ol.copy(s).invert(),gs.copy(e.ray).applyMatrix4(Ol);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=l){const f=h.getX(x),M=h.getX(x+1),T=or(this,e,gs,c,f,M,x);T&&t.push(T)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(p),f=or(this,e,gs,c,x,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=l){const f=or(this,e,gs,c,x,x+1,x);f&&t.push(f)}if(this.isLineLoop){const x=or(this,e,gs,c,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function or(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Vr.fromBufferAttribute(o,s),Wr.fromBufferAttribute(o,r),t.distanceSqToSegment(Vr,Wr,Oa,Bl)>n)return;Oa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Oa);if(!(l<e.near||l>e.far))return{distance:l,point:Bl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class lp extends bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zl=new dt,Zo=new Lc,cr=new Ei,lr=new P;class Ko extends Dt{constructor(e=new At,t=new lp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(s),cr.radius+=r,e.ray.intersectsSphere(cr)===!1)return;zl.copy(s).invert(),Zo.copy(e.ray).applyMatrix4(zl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=u,x=p;g<x;g++){const m=l.getX(g);lr.fromBufferAttribute(d,m),Hl(lr,m,c,s,e,t,this)}}else{const u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=u,x=p;g<x;g++)lr.fromBufferAttribute(d,g),Hl(lr,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Hl(i,e,t,n,s,r,a){const o=Zo.distanceSqToPoint(i);if(o<t){const c=new P;Zo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class pu extends Ut{constructor(e=[],t=mi,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mu extends Ut{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ls extends Ut{constructor(e,t,n=Pn,s,r,a,o=Nt,c=Nt,l,h=Vn,d=1){if(h!==Vn&&h!==di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class hp extends Ls{constructor(e,t=Pn,n=mi,s,r,a=Nt,o=Nt,c,l=Vn){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gu extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yt extends At{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(d,2));function g(x,m,f,M,T,S,w,E,R,v,b){const C=S/R,L=w/v,N=S/2,B=w/2,I=E/2,V=R+1,z=v+1;let Y=0,ne=0;const q=new P;for(let Q=0;Q<z;Q++){const te=Q*L-B;for(let Re=0;Re<V;Re++){const ye=Re*C-N;q[x]=ye*M,q[m]=te*T,q[f]=I,l.push(q.x,q.y,q.z),q[x]=0,q[m]=0,q[f]=E>0?1:-1,h.push(q.x,q.y,q.z),d.push(Re/R),d.push(1-Q/v),Y+=1}}for(let Q=0;Q<v;Q++)for(let te=0;te<R;te++){const Re=u+te+V*Q,ye=u+te+V*(Q+1),it=u+(te+1)+V*(Q+1),Ke=u+(te+1)+V*Q;c.push(Re,ye,Ke),c.push(ye,it,Ke),ne+=6}o.addGroup(p,ne,b),p+=ne,u+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ic extends At{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new P,h=new ke;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const p=n+d/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(o,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class vi extends At{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],p=[];let g=0;const x=[],m=n/2;let f=0;M(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ft(d,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(p,2));function M(){const S=new P,w=new P;let E=0;const R=(t-e)/n;for(let v=0;v<=r;v++){const b=[],C=v/r,L=C*(t-e)+e;for(let N=0;N<=s;N++){const B=N/s,I=B*c+o,V=Math.sin(I),z=Math.cos(I);w.x=L*V,w.y=-C*n+m,w.z=L*z,d.push(w.x,w.y,w.z),S.set(V,R,z).normalize(),u.push(S.x,S.y,S.z),p.push(B,1-C),b.push(g++)}x.push(b)}for(let v=0;v<s;v++)for(let b=0;b<r;b++){const C=x[b][v],L=x[b+1][v],N=x[b+1][v+1],B=x[b][v+1];(e>0||b!==0)&&(h.push(C,L,B),E+=3),(t>0||b!==r-1)&&(h.push(L,N,B),E+=3)}l.addGroup(f,E,0),f+=E}function T(S){const w=g,E=new ke,R=new P;let v=0;const b=S===!0?e:t,C=S===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*C,0),u.push(0,C,0),p.push(.5,.5),g++;const L=g;for(let N=0;N<=s;N++){const I=N/s*c+o,V=Math.cos(I),z=Math.sin(I);R.x=b*z,R.y=m*C,R.z=b*V,d.push(R.x,R.y,R.z),u.push(0,C,0),E.x=V*.5+.5,E.y=z*.5*C+.5,p.push(E.x,E.y),g++}for(let N=0;N<s;N++){const B=w+N,I=L+N;S===!0?h.push(I,I+1,B):h.push(I+1,I,B),v+=3}l.addGroup(f,v,S===!0?1:2),f+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ea extends At{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(r.slice(),3)),this.setAttribute("uv",new ft(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const T=new P,S=new P,w=new P;for(let E=0;E<t.length;E+=3)p(t[E+0],T),p(t[E+1],S),p(t[E+2],w),c(T,S,w,M)}function c(M,T,S,w){const E=w+1,R=[];for(let v=0;v<=E;v++){R[v]=[];const b=M.clone().lerp(S,v/E),C=T.clone().lerp(S,v/E),L=E-v;for(let N=0;N<=L;N++)N===0&&v===E?R[v][N]=b:R[v][N]=b.clone().lerp(C,N/L)}for(let v=0;v<E;v++)for(let b=0;b<2*(E-v)-1;b++){const C=Math.floor(b/2);b%2===0?(u(R[v][C+1]),u(R[v+1][C]),u(R[v][C])):(u(R[v][C+1]),u(R[v+1][C+1]),u(R[v+1][C]))}}function l(M){const T=new P;for(let S=0;S<r.length;S+=3)T.x=r[S+0],T.y=r[S+1],T.z=r[S+2],T.normalize().multiplyScalar(M),r[S+0]=T.x,r[S+1]=T.y,r[S+2]=T.z}function h(){const M=new P;for(let T=0;T<r.length;T+=3){M.x=r[T+0],M.y=r[T+1],M.z=r[T+2];const S=m(M)/2/Math.PI+.5,w=f(M)/Math.PI+.5;a.push(S,1-w)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){const T=a[M+0],S=a[M+2],w=a[M+4],E=Math.max(T,S,w),R=Math.min(T,S,w);E>.9&&R<.1&&(T<.2&&(a[M+0]+=1),S<.2&&(a[M+2]+=1),w<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function p(M,T){const S=M*3;T.x=e[S+0],T.y=e[S+1],T.z=e[S+2]}function g(){const M=new P,T=new P,S=new P,w=new P,E=new ke,R=new ke,v=new ke;for(let b=0,C=0;b<r.length;b+=9,C+=6){M.set(r[b+0],r[b+1],r[b+2]),T.set(r[b+3],r[b+4],r[b+5]),S.set(r[b+6],r[b+7],r[b+8]),E.set(a[C+0],a[C+1]),R.set(a[C+2],a[C+3]),v.set(a[C+4],a[C+5]),w.copy(M).add(T).add(S).divideScalar(3);const L=m(w);x(E,C+0,M,L),x(R,C+2,T,L),x(v,C+4,S,L)}}function x(M,T,S,w){w<0&&M.x===1&&(a[T]=M.x-1),S.x===0&&S.z===0&&(a[T]=w/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.vertices,e.indices,e.radius,e.detail)}}class Dc extends ea{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Dc(e.radius,e.detail)}}class ns extends ea{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ns(e.radius,e.detail)}}class xi extends At{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=e/o,u=t/c,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){const M=f*u-a;for(let T=0;T<l;T++){const S=T*d-r;g.push(S,-M,0),x.push(0,0,1),m.push(T/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<o;M++){const T=M+l*f,S=M+l*(f+1),w=M+1+l*(f+1),E=M+1+l*f;p.push(T,S,E),p.push(S,w,E)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(x,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Nc extends At{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let d=e;const u=(t-e)/s,p=new P,g=new ke;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let x=0;x<s;x++){const m=x*(n+1);for(let f=0;f<n;f++){const M=f+m,T=M,S=M+n+1,w=M+n+2,E=M+1;o.push(T,S,E),o.push(S,w,E)}}this.setIndex(o),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Uc extends At{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const c=[],l=[],h=[],d=[],u=new P,p=new P,g=new P;for(let x=0;x<=n;x++){const m=a+x/n*o;for(let f=0;f<=s;f++){const M=f/s*r;p.x=(e+t*Math.cos(m))*Math.cos(M),p.y=(e+t*Math.cos(m))*Math.sin(M),p.z=t*Math.sin(m),l.push(p.x,p.y,p.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),g.subVectors(p,u).normalize(),h.push(g.x,g.y,g.z),d.push(f/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){const f=(s+1)*x+m-1,M=(s+1)*(x-1)+m-1,T=(s+1)*(x-1)+m,S=(s+1)*x+m;c.push(f,M,S),c.push(M,T,S)}this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function is(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Gl(s))s.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Gl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Vt(i){const e={};for(let t=0;t<i.length;t++){const n=is(i[t]);for(const s in n)e[s]=n[s]}return e}function Gl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function up(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _u(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const dp={clone:is,merge:Vt};var fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qt extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fp,this.fragmentShader=pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=up(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Oe().setHex(s.value);break;case"v2":this.uniforms[n].value=new ke().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new St().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Be().fromArray(s.value);break;case"m4":this.uniforms[n].value=new dt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class mp extends Qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gp extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _p extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class vp extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class vu extends vp{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const hr=new P,ur=new Si,Sn=new P;class xu extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(hr,ur,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hr,ur,Sn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(hr,ur,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hr,ur,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new P,Vl=new ke,Wl=new ke;class qt extends xu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,Vl,Wl),t.subVectors(Wl,Vl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Fc extends xu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gi=-90,Vi=1;class xp extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qt(Gi,Vi,e,t);s.layers=this.layers,this.add(s);const r=new qt(Gi,Vi,e,t);r.layers=this.layers,this.add(r);const a=new qt(Gi,Vi,e,t);a.layers=this.layers,this.add(a);const o=new qt(Gi,Vi,e,t);o.layers=this.layers,this.add(o);const c=new qt(Gi,Vi,e,t);c.layers=this.layers,this.add(c);const l=new qt(Gi,Vi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class yp extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Jc=class Jc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Jc.prototype.isMatrix2=!0;let Xl=Jc;function ql(i,e,t,n){const s=Sp(n);switch(t){case eu:return i*e;case Ec:return i*e/s.components*s.byteLength;case bc:return i*e/s.components*s.byteLength;case gi:return i*e*2/s.components*s.byteLength;case wc:return i*e*2/s.components*s.byteLength;case tu:return i*e*3/s.components*s.byteLength;case vn:return i*e*4/s.components*s.byteLength;case Tc:return i*e*4/s.components*s.byteLength;case yr:case Sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mr:case Er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xo:case So:return Math.max(i,16)*Math.max(e,8)/4;case vo:case yo:return Math.max(i,8)*Math.max(e,8)/2;case Mo:case Eo:case wo:case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bo:case Ur:case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Co:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Do:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case No:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ko:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case zo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ho:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Go:case Vo:case Wo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xo:case qo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Fr:case Yo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sp(i){switch(i){case rn:case Kh:return{byteLength:1,components:1};case Cs:case Jh:case Ln:return{byteLength:2,components:1};case Sc:case Mc:return{byteLength:2,components:4};case Pn:case yc:case _n:return{byteLength:4,components:1};case jh:case Qh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xc}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xc);function yu(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Mp(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const x=d[p];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bp=`#ifdef USE_ALPHAHASH
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
#endif`,wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ap=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cp=`#ifdef USE_AOMAP
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
#endif`,Pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lp=`#ifdef USE_BATCHING
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
#endif`,Ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Np=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Up=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fp=`#ifdef USE_IRIDESCENCE
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
#endif`,Op=`#ifdef USE_BUMPMAP
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
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,qp=`#define PI 3.141592653589793
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
} // validated`,Yp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$p=`vec3 transformedNormal = objectNormal;
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
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tm=`#ifdef USE_ENVMAP
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
#endif`,nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
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
#endif`,sm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hm=`#ifdef USE_GRADIENTMAP
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
}`,um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ym=`PhysicalMaterial material;
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
#endif`,Sm=`uniform sampler2D dfgLUT;
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
}`,Mm=`
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
#endif`,Em=`#if defined( RE_IndirectDiffuse )
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
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Am=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dm=`#if defined( USE_POINTS_UV )
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
#endif`,Nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Om=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,km=`#ifdef USE_MORPHTARGETS
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
#endif`,zm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qm=`#ifdef USE_NORMALMAP
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
#endif`,Ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Km=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ng=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ig=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,og=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cg=`float getShadowMask() {
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
}`,lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hg=`#ifdef USE_SKINNING
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
#endif`,ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dg=`#ifdef USE_SKINNING
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
#endif`,fg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_g=`#ifdef USE_TRANSMISSION
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
#endif`,vg=`#ifdef USE_TRANSMISSION
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
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Eg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bg=`uniform sampler2D t2D;
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
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`#include <common>
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
}`,Pg=`#if DEPTH_PACKING == 3200
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
}`,Lg=`#define DISTANCE
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
}`,Ig=`#define DISTANCE
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
}`,Dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ug=`uniform float scale;
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
}`,Fg=`uniform vec3 diffuse;
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
}`,Og=`#include <common>
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
}`,Bg=`uniform vec3 diffuse;
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
}`,kg=`#define LAMBERT
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
}`,zg=`#define LAMBERT
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
}`,Hg=`#define MATCAP
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
}`,Gg=`#define MATCAP
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
}`,Vg=`#define NORMAL
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
}`,Wg=`#define NORMAL
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
}`,Xg=`#define PHONG
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
}`,qg=`#define PHONG
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
}`,Yg=`#define STANDARD
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
}`,$g=`#define STANDARD
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
}`,Zg=`#define TOON
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
}`,Kg=`#define TOON
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
}`,Jg=`uniform float size;
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
}`,jg=`uniform vec3 diffuse;
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
}`,Qg=`#include <common>
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
}`,e0=`uniform vec3 color;
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
}`,t0=`uniform float rotation;
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
}`,n0=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:Ep,alphahash_pars_fragment:bp,alphamap_fragment:wp,alphamap_pars_fragment:Tp,alphatest_fragment:Ap,alphatest_pars_fragment:Rp,aomap_fragment:Cp,aomap_pars_fragment:Pp,batching_pars_vertex:Lp,batching_vertex:Ip,begin_vertex:Dp,beginnormal_vertex:Np,bsdfs:Up,iridescence_fragment:Fp,bumpmap_pars_fragment:Op,clipping_planes_fragment:Bp,clipping_planes_pars_fragment:kp,clipping_planes_pars_vertex:zp,clipping_planes_vertex:Hp,color_fragment:Gp,color_pars_fragment:Vp,color_pars_vertex:Wp,color_vertex:Xp,common:qp,cube_uv_reflection_fragment:Yp,defaultnormal_vertex:$p,displacementmap_pars_vertex:Zp,displacementmap_vertex:Kp,emissivemap_fragment:Jp,emissivemap_pars_fragment:jp,colorspace_fragment:Qp,colorspace_pars_fragment:em,envmap_fragment:tm,envmap_common_pars_fragment:nm,envmap_pars_fragment:im,envmap_pars_vertex:sm,envmap_physical_pars_fragment:mm,envmap_vertex:rm,fog_vertex:am,fog_pars_vertex:om,fog_fragment:cm,fog_pars_fragment:lm,gradientmap_pars_fragment:hm,lightmap_pars_fragment:um,lights_lambert_fragment:dm,lights_lambert_pars_fragment:fm,lights_pars_begin:pm,lights_toon_fragment:gm,lights_toon_pars_fragment:_m,lights_phong_fragment:vm,lights_phong_pars_fragment:xm,lights_physical_fragment:ym,lights_physical_pars_fragment:Sm,lights_fragment_begin:Mm,lights_fragment_maps:Em,lights_fragment_end:bm,lightprobes_pars_fragment:wm,logdepthbuf_fragment:Tm,logdepthbuf_pars_fragment:Am,logdepthbuf_pars_vertex:Rm,logdepthbuf_vertex:Cm,map_fragment:Pm,map_pars_fragment:Lm,map_particle_fragment:Im,map_particle_pars_fragment:Dm,metalnessmap_fragment:Nm,metalnessmap_pars_fragment:Um,morphinstance_vertex:Fm,morphcolor_vertex:Om,morphnormal_vertex:Bm,morphtarget_pars_vertex:km,morphtarget_vertex:zm,normal_fragment_begin:Hm,normal_fragment_maps:Gm,normal_pars_fragment:Vm,normal_pars_vertex:Wm,normal_vertex:Xm,normalmap_pars_fragment:qm,clearcoat_normal_fragment_begin:Ym,clearcoat_normal_fragment_maps:$m,clearcoat_pars_fragment:Zm,iridescence_pars_fragment:Km,opaque_fragment:Jm,packing:jm,premultiplied_alpha_fragment:Qm,project_vertex:eg,dithering_fragment:tg,dithering_pars_fragment:ng,roughnessmap_fragment:ig,roughnessmap_pars_fragment:sg,shadowmap_pars_fragment:rg,shadowmap_pars_vertex:ag,shadowmap_vertex:og,shadowmask_pars_fragment:cg,skinbase_vertex:lg,skinning_pars_vertex:hg,skinning_vertex:ug,skinnormal_vertex:dg,specularmap_fragment:fg,specularmap_pars_fragment:pg,tonemapping_fragment:mg,tonemapping_pars_fragment:gg,transmission_fragment:_g,transmission_pars_fragment:vg,uv_pars_fragment:xg,uv_pars_vertex:yg,uv_vertex:Sg,worldpos_vertex:Mg,background_vert:Eg,background_frag:bg,backgroundCube_vert:wg,backgroundCube_frag:Tg,cube_vert:Ag,cube_frag:Rg,depth_vert:Cg,depth_frag:Pg,distance_vert:Lg,distance_frag:Ig,equirect_vert:Dg,equirect_frag:Ng,linedashed_vert:Ug,linedashed_frag:Fg,meshbasic_vert:Og,meshbasic_frag:Bg,meshlambert_vert:kg,meshlambert_frag:zg,meshmatcap_vert:Hg,meshmatcap_frag:Gg,meshnormal_vert:Vg,meshnormal_frag:Wg,meshphong_vert:Xg,meshphong_frag:qg,meshphysical_vert:Yg,meshphysical_frag:$g,meshtoon_vert:Zg,meshtoon_frag:Kg,points_vert:Jg,points_frag:jg,shadow_vert:Qg,shadow_frag:e0,sprite_vert:t0,sprite_frag:n0},de={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},bn={basic:{uniforms:Vt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Vt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Vt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Vt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Vt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Oe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Vt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Vt([de.points,de.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Vt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Vt([de.common,de.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Vt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Vt([de.sprite,de.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:Vt([de.common,de.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:Vt([de.lights,de.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};bn.physical={uniforms:Vt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const dr={r:0,b:0,g:0},i0=new dt,Su=new Be;Su.set(-1,0,0,0,1,0,0,0,1);function s0(i,e,t,n,s,r){const a=new Oe(0);let o=s===!0?0:1,c,l,h=null,d=0,u=null;function p(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){const S=M.backgroundBlurriness>0;T=e.get(T,S)}return T}function g(M){let T=!1;const S=p(M);S===null?m(a,o):S&&S.isColor&&(m(S,1),T=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,T){const S=p(T);S&&(S.isCubeTexture||S.mapping===Qr)?(l===void 0&&(l=new Fe(new yt(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:is(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(i0.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Su),l.material.toneMapped=Je.getTransfer(S.colorSpace)!==ct,(h!==S||d!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Fe(new xi(2,2),new Qt({name:"BackgroundMaterial",uniforms:is(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Je.getTransfer(S.colorSpace)!==ct,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,T){M.getRGB(dr,_u(i)),t.buffers.color.setClear(dr.r,dr.g,dr.b,T,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:x,dispose:f}}function r0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(L,N,B,I,V){let z=!1;const Y=d(L,I,B,N);r!==Y&&(r=Y,l(r.object)),z=p(L,I,B,V),z&&g(L,I,B,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,S(L,N,B,I),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function d(L,N,B,I){const V=I.wireframe===!0;let z=n[N.id];z===void 0&&(z={},n[N.id]=z);const Y=L.isInstancedMesh===!0?L.id:0;let ne=z[Y];ne===void 0&&(ne={},z[Y]=ne);let q=ne[B.id];q===void 0&&(q={},ne[B.id]=q);let Q=q[V];return Q===void 0&&(Q=u(c()),q[V]=Q),Q}function u(L){const N=[],B=[],I=[];for(let V=0;V<t;V++)N[V]=0,B[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:I,object:L,attributes:{},index:null}}function p(L,N,B,I){const V=r.attributes,z=N.attributes;let Y=0;const ne=B.getAttributes();for(const q in ne)if(ne[q].location>=0){const te=V[q];let Re=z[q];if(Re===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(Re=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(Re=L.instanceColor)),te===void 0||te.attribute!==Re||Re&&te.data!==Re.data)return!0;Y++}return r.attributesNum!==Y||r.index!==I}function g(L,N,B,I){const V={},z=N.attributes;let Y=0;const ne=B.getAttributes();for(const q in ne)if(ne[q].location>=0){let te=z[q];te===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(te=L.instanceColor));const Re={};Re.attribute=te,te&&te.data&&(Re.data=te.data),V[q]=Re,Y++}r.attributes=V,r.attributesNum=Y,r.index=I}function x(){const L=r.newAttributes;for(let N=0,B=L.length;N<B;N++)L[N]=0}function m(L){f(L,0)}function f(L,N){const B=r.newAttributes,I=r.enabledAttributes,V=r.attributeDivisors;B[L]=1,I[L]===0&&(i.enableVertexAttribArray(L),I[L]=1),V[L]!==N&&(i.vertexAttribDivisor(L,N),V[L]=N)}function M(){const L=r.newAttributes,N=r.enabledAttributes;for(let B=0,I=N.length;B<I;B++)N[B]!==L[B]&&(i.disableVertexAttribArray(B),N[B]=0)}function T(L,N,B,I,V,z,Y){Y===!0?i.vertexAttribIPointer(L,N,B,V,z):i.vertexAttribPointer(L,N,B,I,V,z)}function S(L,N,B,I){x();const V=I.attributes,z=B.getAttributes(),Y=N.defaultAttributeValues;for(const ne in z){const q=z[ne];if(q.location>=0){let Q=V[ne];if(Q===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){const te=Q.normalized,Re=Q.itemSize,ye=e.get(Q);if(ye===void 0)continue;const it=ye.buffer,Ke=ye.type,Qe=ye.bytesPerElement,$=Ke===i.INT||Ke===i.UNSIGNED_INT||Q.gpuType===yc;if(Q.isInterleavedBufferAttribute){const ee=Q.data,ve=ee.stride,Ne=Q.offset;if(ee.isInstancedInterleavedBuffer){for(let ge=0;ge<q.locationSize;ge++)f(q.location+ge,ee.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ge=0;ge<q.locationSize;ge++)m(q.location+ge);i.bindBuffer(i.ARRAY_BUFFER,it);for(let ge=0;ge<q.locationSize;ge++)T(q.location+ge,Re/q.locationSize,Ke,te,ve*Qe,(Ne+Re/q.locationSize*ge)*Qe,$)}else{if(Q.isInstancedBufferAttribute){for(let ee=0;ee<q.locationSize;ee++)f(q.location+ee,Q.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ee=0;ee<q.locationSize;ee++)m(q.location+ee);i.bindBuffer(i.ARRAY_BUFFER,it);for(let ee=0;ee<q.locationSize;ee++)T(q.location+ee,Re/q.locationSize,Ke,te,Re*Qe,Re/q.locationSize*ee*Qe,$)}}else if(Y!==void 0){const te=Y[ne];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(q.location,te);break;case 3:i.vertexAttrib3fv(q.location,te);break;case 4:i.vertexAttrib4fv(q.location,te);break;default:i.vertexAttrib1fv(q.location,te)}}}}M()}function w(){b();for(const L in n){const N=n[L];for(const B in N){const I=N[B];for(const V in I){const z=I[V];for(const Y in z)h(z[Y].object),delete z[Y];delete I[V]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;const N=n[L.id];for(const B in N){const I=N[B];for(const V in I){const z=I[V];for(const Y in z)h(z[Y].object),delete z[Y];delete I[V]}}delete n[L.id]}function R(L){for(const N in n){const B=n[N];for(const I in B){const V=B[I];if(V[L.id]===void 0)continue;const z=V[L.id];for(const Y in z)h(z[Y].object),delete z[Y];delete V[L.id]}}}function v(L){for(const N in n){const B=n[N],I=L.isInstancedMesh===!0?L.id:0,V=B[I];if(V!==void 0){for(const z in V){const Y=V[z];for(const ne in Y)h(Y[ne].object),delete Y[ne];delete V[z]}delete B[I],Object.keys(B).length===0&&delete n[N]}}}function b(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function a0(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let p=0;p<h;p++)u+=l[p];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function o0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==vn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const v=R===Ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==rn&&R!==_n&&!v&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(De("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:S,maxSamples:w,samples:E}}function c0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new jn,o=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:n,T=M*4;let S=f.clippingState||null;c.value=S,S=h(g,u,T,p);for(let w=0;w!==T;++w)S[w]=t[w];f.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const f=p+x*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,S=p;T!==x;++T,S+=4)a.copy(d[T]).applyMatrix4(M,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const $i=4,l0=6,h0=20,u0=256,_s=new Fc,Yl=new Oe;let Ba=null,ka=0,za=0,Ha=!1;const d0=new P,ci=new P;class $l{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=d0}=r;Ba=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ba,ka,za),this._renderer.xr.enabled=Ha,e.scissorTest=!1,Wi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mi||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ba=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Ln,format:vn,colorSpace:Or,depthBuffer:!1},s=Zl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zl(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=f0(r)),this._blurMaterial=m0(r,e,t),this._ggxMaterial=p0(r,e,t)}return s}_compileMaterial(e){const t=new Fe(new At,e);this._renderer.compile(t,_s)}_sceneToCubeUV(e,t,n,s,r){const c=new qt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(Yl),d.toneMapping=Rn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fe(new yt,new nt({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let f=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,f=!0):(m.color.copy(Yl),f=!0);for(let T=0;T<6;T++){const S=T%3;S===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[T],r.y,r.z)):S===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[T]));const w=this._cubeSize;Wi(s,S*w,T>2?w:0,w,w),d.setRenderTarget(s),f&&d.render(x,c),d.render(e,c)}d.toneMapping=p,d.autoClear=u,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===mi||e.mapping===ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Wi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,_s)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,p=d*u,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-$i?n-g+$i:0),f=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-t,Wi(r,m,f,3*x,2*x),s.setRenderTarget(r),s.render(o,_s),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Wi(e,m,f,3*x,2*x),s.setRenderTarget(e),s.render(o,_s)}_blur(e,t,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],d=3*h*(s>this._lodMax-$i?s-this._lodMax+$i:0),u=4*(this._cubeSize-h);Wi(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(c,_s)}}function f0(i){const e=[],t=[];let n=i;const s=i-$i+1+l0;for(let r=0;r<s;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,p=3,g=new Float32Array(p*u*d),x=new Float32Array(p*u*d);for(let f=0;f<d;f++){const M=f%3*2/3-1,T=f>2?0:-1,S=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];g.set(S,p*u*f);for(let w=0;w<u;w++){const E=h[w*2]*2-1,R=h[w*2+1]*2-1;f===0?ci.set(1,R,E):f===1?ci.set(-E,1,-R):f===2?ci.set(-E,R,1):f===3?ci.set(-1,R,-E):f===4?ci.set(-E,-1,R):ci.set(E,R,-1),ci.toArray(x,(f*u+w)*p)}}const m=new At;m.setAttribute("position",new cn(g,p)),m.setAttribute("outputDirection",new cn(x,p)),t.push(new Fe(m,null)),n>$i&&n--}return{lodMeshes:t,sizeLods:e}}function Zl(i,e,t){const n=new on(i,e,t);return n.texture.mapping=Qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function p0(i,e,t){return new Qt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:u0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ta(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function m0(i,e,t){return new Qt({name:"SphericalGaussianBlur",defines:{SAMPLES:h0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ta(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Kl(){return new Qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ta(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Jl(){return new Qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function ta(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Mu extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new pu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yt(5,5,5),r=new Qt({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:Hn});r.uniforms.tEquirect.value=t;const a=new Fe(s,r),o=t.minFilter;return t.minFilter===ui&&(t.minFilter=zt),new xp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function g0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){const p=u.mapping;if(p===ha||p===ua)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const x=new Mu(g.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",l),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const p=u.mapping,g=p===ha||p===ua,x=p===mi||p===ts;if(g||x){let m=t.get(u);const f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new $l(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return g&&M&&M.height>0||x&&M&&c(M)?(n===null&&(n=new $l(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===ha?u.mapping=mi:p===ua&&(u.mapping=ts),u}function c(u){let p=0;const g=6;for(let x=0;x<g;x++)u[x]!==void 0&&p++;return p===g}function l(u){const p=u.target;p.removeEventListener("dispose",l);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function _0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ji("WebGLRenderer: "+n+" extension not supported."),s}}}function v0(i,e,t,n){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const p in u)e.update(u[p],i.ARRAY_BUFFER)}function l(d){const u=[],p=d.index,g=d.attributes.position;let x=0;if(g===void 0)return;if(p!==null){const M=p.array;x=p.version;for(let T=0,S=M.length;T<S;T+=3){const w=M[T+0],E=M[T+1],R=M[T+2];u.push(w,E,E,R,R,w)}}else{const M=g.array;x=g.version;for(let T=0,S=M.length/3-1;T<S;T+=3){const w=T+0,E=T+1,R=T+2;u.push(w,E,E,R,R,w)}}const m=new(g.count>=65535?cu:ou)(u,1);m.version=x;const f=r.get(d);f&&e.remove(f),r.set(d,m)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function x0(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function l(d,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,d*a,p),t.update(u,n,p))}function h(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,p);let x=0;for(let m=0;m<p;m++)x+=u[m];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function y0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:tt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function S0(i,e,t){const n=new WeakMap,s=new St;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let b=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let T=0;p===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let S=o.attributes.position.count*T,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const E=new Float32Array(S*w*4*d),R=new su(E,S,w,d);R.type=_n,R.needsUpdate=!0;const v=T*4;for(let C=0;C<d;C++){const L=m[C],N=f[C],B=M[C],I=S*w*4*C;for(let V=0;V<L.count;V++){const z=V*v;p===!0&&(s.fromBufferAttribute(L,V),E[I+z+0]=s.x,E[I+z+1]=s.y,E[I+z+2]=s.z,E[I+z+3]=0),g===!0&&(s.fromBufferAttribute(N,V),E[I+z+4]=s.x,E[I+z+5]=s.y,E[I+z+6]=s.z,E[I+z+7]=0),x===!0&&(s.fromBufferAttribute(B,V),E[I+z+8]=s.x,E[I+z+9]=s.y,E[I+z+10]=s.z,E[I+z+11]=B.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new ke(S,w)},n.set(o,u),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];const g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function M0(i,e,t,n,s){let r=new WeakMap;function a(l){const h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const E0={[Gh]:"LINEAR_TONE_MAPPING",[Vh]:"REINHARD_TONE_MAPPING",[Wh]:"CINEON_TONE_MAPPING",[Xh]:"ACES_FILMIC_TONE_MAPPING",[Yh]:"AGX_TONE_MAPPING",[$h]:"NEUTRAL_TONE_MAPPING",[qh]:"CUSTOM_TONE_MAPPING"};function b0(i,e,t,n,s,r){const a=new on(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new At;l.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ft([0,2,0,0,2,0],2));const h=new mp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Fe(l,h),u=new Fc(-1,1,1,-1,0,1);let p=null,g=null,x=!1,m,f=null,M=[],T=!1;this.setSize=function(S,w){a.setSize(S,w),o!==null&&o.setSize(S,w),c!==null&&c.setSize(S,w);for(let E=0;E<M.length;E++){const R=M[E];R.setSize&&R.setSize(S,w)}},this.setEffects=function(S){M=S,T=M.length>0&&M[0].isRenderPass===!0;const w=a.width,E=a.height;M.length>0&&o===null&&(o=new on(w,E,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),c=new on(w,E,{type:Ln,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){const v=M[R];v.setSize&&v.setSize(w,E)}},this.begin=function(S,w){if(x||S.toneMapping===Rn&&M.length===0)return!1;if(f=w,w!==null){const E=w.width,R=w.height;(a.width!==E||a.height!==R)&&this.setSize(E,R)}return T===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=Rn,!0},this.hasRenderPass=function(){return T},this.end=function(S,w){S.toneMapping=m,x=!0;let E=a,R=o;for(let v=0;v<M.length;v++){const b=M[v];b.enabled!==!1&&(b.render(S,R,E,w),b.needsSwap!==!1&&(E=R,R=R===o?c:o))}if(p!==S.outputColorSpace||g!==S.toneMapping){p=S.outputColorSpace,g=S.toneMapping,h.defines={},Je.getTransfer(p)===ct&&(h.defines.SRGB_TRANSFER="");const v=E0[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(f),S.render(d,u),f=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const Eu=new Ut,Jo=new Ls(1,1),bu=new su,wu=new Wf,Tu=new pu,jl=[],Ql=[],eh=new Float32Array(16),th=new Float32Array(9),nh=new Float32Array(4);function rs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=jl[s];if(r===void 0&&(r=new Float32Array(s),jl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function na(i,e){let t=Ql[e];t===void 0&&(t=new Int32Array(e),Ql[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function w0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function T0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function A0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function R0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function C0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;nh.set(n),i.uniformMatrix2fv(this.addr,!1,nh),Pt(t,n)}}function P0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;th.set(n),i.uniformMatrix3fv(this.addr,!1,th),Pt(t,n)}}function L0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;eh.set(n),i.uniformMatrix4fv(this.addr,!1,eh),Pt(t,n)}}function I0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function D0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function N0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function U0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function F0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function O0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function B0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function k0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function z0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Jo.compareFunction=t.isReversedDepthBuffer()?Rc:Ac,r=Jo):r=Eu,t.setTexture2D(e||r,s)}function H0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wu,s)}function G0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Tu,s)}function V0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||bu,s)}function W0(i){switch(i){case 5126:return w0;case 35664:return T0;case 35665:return A0;case 35666:return R0;case 35674:return C0;case 35675:return P0;case 35676:return L0;case 5124:case 35670:return I0;case 35667:case 35671:return D0;case 35668:case 35672:return N0;case 35669:case 35673:return U0;case 5125:return F0;case 36294:return O0;case 36295:return B0;case 36296:return k0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return G0;case 36289:case 36303:case 36311:case 36292:return V0}}function X0(i,e){i.uniform1fv(this.addr,e)}function q0(i,e){const t=rs(e,this.size,2);i.uniform2fv(this.addr,t)}function Y0(i,e){const t=rs(e,this.size,3);i.uniform3fv(this.addr,t)}function $0(i,e){const t=rs(e,this.size,4);i.uniform4fv(this.addr,t)}function Z0(i,e){const t=rs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function K0(i,e){const t=rs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function J0(i,e){const t=rs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function j0(i,e){i.uniform1iv(this.addr,e)}function Q0(i,e){i.uniform2iv(this.addr,e)}function e_(i,e){i.uniform3iv(this.addr,e)}function t_(i,e){i.uniform4iv(this.addr,e)}function n_(i,e){i.uniform1uiv(this.addr,e)}function i_(i,e){i.uniform2uiv(this.addr,e)}function s_(i,e){i.uniform3uiv(this.addr,e)}function r_(i,e){i.uniform4uiv(this.addr,e)}function a_(i,e,t){const n=this.cache,s=e.length,r=na(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Jo:a=Eu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function o_(i,e,t){const n=this.cache,s=e.length,r=na(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||wu,r[a])}function c_(i,e,t){const n=this.cache,s=e.length,r=na(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Tu,r[a])}function l_(i,e,t){const n=this.cache,s=e.length,r=na(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||bu,r[a])}function h_(i){switch(i){case 5126:return X0;case 35664:return q0;case 35665:return Y0;case 35666:return $0;case 35674:return Z0;case 35675:return K0;case 35676:return J0;case 5124:case 35670:return j0;case 35667:case 35671:return Q0;case 35668:case 35672:return e_;case 35669:case 35673:return t_;case 5125:return n_;case 36294:return i_;case 36295:return s_;case 36296:return r_;case 35678:case 36198:case 36298:case 36306:case 35682:return a_;case 35679:case 36299:case 36307:return o_;case 35680:case 36300:case 36308:case 36293:return c_;case 36289:case 36303:case 36311:case 36292:return l_}}class u_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=W0(t.type)}}class d_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=h_(t.type)}}class f_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function ih(i,e){i.seq.push(e),i.map[e.id]=e}function p_(i,e,t){const n=i.name,s=n.length;for(Ga.lastIndex=0;;){const r=Ga.exec(n),a=Ga.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){ih(t,l===void 0?new u_(o,i,e):new d_(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new f_(o),ih(t,d)),t=d}}}class wr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);p_(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function sh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const m_=37297;let g_=0;function __(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const rh=new Be;function v_(i){Je._getMatrix(rh,Je.workingColorSpace,i);const e=`mat3( ${rh.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Br:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ah(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+__(i.getShaderSource(e),o)}else return r}function x_(i,e){const t=v_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const y_={[Gh]:"Linear",[Vh]:"Reinhard",[Wh]:"Cineon",[Xh]:"ACESFilmic",[Yh]:"AgX",[$h]:"Neutral",[qh]:"Custom"};function S_(i,e){const t=y_[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fr=new P;function M_(){Je.getLuminanceCoefficients(fr);const i=fr.x.toFixed(4),e=fr.y.toFixed(4),t=fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function b_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function w_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ss(i){return i!==""}function oh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ch(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const T_=/^[ \t]*#include +<([\w\d./]+)>/gm;function jo(i){return i.replace(T_,R_)}const A_=new Map;function R_(i,e){let t=We[e];if(t===void 0){const n=A_.get(e);if(n!==void 0)t=We[n],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return jo(t)}const C_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lh(i){return i.replace(C_,P_)}function P_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const L_={[xr]:"SHADOWMAP_TYPE_PCF",[ys]:"SHADOWMAP_TYPE_VSM"};function I_(i){return L_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const D_={[mi]:"ENVMAP_TYPE_CUBE",[ts]:"ENVMAP_TYPE_CUBE",[Qr]:"ENVMAP_TYPE_CUBE_UV"};function N_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":D_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const U_={[ts]:"ENVMAP_MODE_REFRACTION"};function F_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":U_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const O_={[Hh]:"ENVMAP_BLENDING_MULTIPLY",[Sf]:"ENVMAP_BLENDING_MIX",[Mf]:"ENVMAP_BLENDING_ADD"};function B_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":O_[i.combine]||"ENVMAP_BLENDING_NONE"}function k_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function z_(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=I_(t),l=N_(t),h=F_(t),d=B_(t),u=k_(t),p=E_(t),g=b_(r),x=s.createProgram();let m,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ss).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ss).join(`
`),f.length>0&&(f+=`
`)):(m=[hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),f=[hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?We.tonemapping_pars_fragment:"",t.toneMapping!==Rn?S_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,x_("linearToOutputTexel",t.outputColorSpace),M_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ss).join(`
`)),a=jo(a),a=oh(a,t),a=ch(a,t),o=jo(o),o=oh(o,t),o=ch(o,t),a=lh(a),o=lh(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=M+m+a,S=M+f+o,w=sh(s,s.VERTEX_SHADER,T),E=sh(s,s.FRAGMENT_SHADER,S);s.attachShader(x,w),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(L){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(x)||"",B=s.getShaderInfoLog(w)||"",I=s.getShaderInfoLog(E)||"",V=N.trim(),z=B.trim(),Y=I.trim();let ne=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,E);else{const Q=ah(s,w,"vertex"),te=ah(s,E,"fragment");tt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+Q+`
`+te)}else V!==""?De("WebGLProgram: Program Info Log:",V):(z===""||Y==="")&&(q=!1);q&&(L.diagnostics={runnable:ne,programLog:V,vertexShader:{log:z,prefix:m},fragmentShader:{log:Y,prefix:f}})}s.deleteShader(w),s.deleteShader(E),v=new wr(s,x),b=w_(s,x)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,m_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=g_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=E,this}let H_=0;class G_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new V_(e),t.set(e,n)),n}}class V_{constructor(e){this.id=H_++,this.code=e,this.usedTimes=0}}function W_(i){return i===gi||i===Ur||i===Fr}function X_(i,e,t,n,s,r){const a=new ru,o=new G_,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,b,C,L,N,B){const I=L.fog,V=N.geometry,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ne=e.get(v.envMap||z,Y),q=ne&&ne.mapping===Qr?ne.image.height:null,Q=p[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&De("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const te=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Re=te!==void 0?te.length:0;let ye=0;V.morphAttributes.position!==void 0&&(ye=1),V.morphAttributes.normal!==void 0&&(ye=2),V.morphAttributes.color!==void 0&&(ye=3);let it,Ke,Qe,$;if(Q){const pt=bn[Q];it=pt.vertexShader,Ke=pt.fragmentShader}else{it=v.vertexShader,Ke=v.fragmentShader;const pt=o.getVertexShaderStage(v),rt=o.getFragmentShaderStage(v);o.update(v,pt,rt),Qe=pt.id,$=rt.id}const ee=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Ne=N.isInstancedMesh===!0,ge=N.isBatchedMesh===!0,Ge=!!v.map,_t=!!v.matcap,qe=!!ne,se=!!v.aoMap,Ie=!!v.lightMap,be=!!v.bumpMap&&v.wireframe===!1,Ue=!!v.normalMap,vt=!!v.displacementMap,Rt=!!v.emissiveMap,Ye=!!v.metalnessMap,xt=!!v.roughnessMap,F=v.anisotropy>0,Ft=v.clearcoat>0,ot=v.dispersion>0,A=v.retroreflectivity>0,_=v.iridescence>0,O=v.sheen>0,W=v.transmission>0,Z=F&&!!v.anisotropyMap,re=Ft&&!!v.clearcoatMap,ae=Ft&&!!v.clearcoatNormalMap,K=Ft&&!!v.clearcoatRoughnessMap,j=_&&!!v.iridescenceMap,oe=_&&!!v.iridescenceThicknessMap,Te=O&&!!v.sheenColorMap,ue=O&&!!v.sheenRoughnessMap,ce=!!v.specularMap,Ae=!!v.specularColorMap,Le=!!v.specularIntensityMap,ze=W&&!!v.transmissionMap,U=W&&!!v.thicknessMap,le=!!v.gradientMap,J=!!v.alphaMap,he=v.alphaTest>0,me=!!v.alphaHash,ie=!!v.extensions;let Ce=Rn;v.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ce=i.toneMapping);const Ee={shaderID:Q,shaderType:v.type,shaderName:v.name,vertexShader:it,fragmentShader:Ke,defines:v.defines,customVertexShaderID:Qe,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:ge,batchingColor:ge&&N._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&N.instanceColor!==null,instancingMorph:Ne&&N.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ge,matcap:_t,envMap:qe,envMapMode:qe&&ne.mapping,envMapCubeUVHeight:q,aoMap:se,lightMap:Ie,bumpMap:be,normalMap:Ue,displacementMap:vt,emissiveMap:Rt,normalMapObjectSpace:Ue&&v.normalMapType===wf,normalMapTangentSpace:Ue&&v.normalMapType===ml,packedNormalMap:Ue&&v.normalMapType===ml&&W_(v.normalMap.format),metalnessMap:Ye,roughnessMap:xt,anisotropy:F,anisotropyMap:Z,clearcoat:Ft,clearcoatMap:re,clearcoatNormalMap:ae,clearcoatRoughnessMap:K,dispersion:ot,retroreflection:A,iridescence:_,iridescenceMap:j,iridescenceThicknessMap:oe,sheen:O,sheenColorMap:Te,sheenRoughnessMap:ue,specularMap:ce,specularColorMap:Ae,specularIntensityMap:Le,transmission:W,transmissionMap:ze,thicknessMap:U,gradientMap:le,opaque:v.transparent===!1&&v.blending===fi&&v.alphaToCoverage===!1,alphaMap:J,alphaTest:he,alphaHash:me,combine:v.combine,mapUv:Ge&&g(v.map.channel),aoMapUv:se&&g(v.aoMap.channel),lightMapUv:Ie&&g(v.lightMap.channel),bumpMapUv:be&&g(v.bumpMap.channel),normalMapUv:Ue&&g(v.normalMap.channel),displacementMapUv:vt&&g(v.displacementMap.channel),emissiveMapUv:Rt&&g(v.emissiveMap.channel),metalnessMapUv:Ye&&g(v.metalnessMap.channel),roughnessMapUv:xt&&g(v.roughnessMap.channel),anisotropyMapUv:Z&&g(v.anisotropyMap.channel),clearcoatMapUv:re&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ue&&g(v.sheenRoughnessMap.channel),specularMapUv:ce&&g(v.specularMap.channel),specularColorMapUv:Ae&&g(v.specularColorMap.channel),specularIntensityMapUv:Le&&g(v.specularIntensityMap.channel),transmissionMapUv:ze&&g(v.transmissionMap.channel),thicknessMapUv:U&&g(v.thicknessMap.channel),alphaMapUv:J&&g(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ue||F),vertexNormals:!!V.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!V.attributes.uv&&(Ge||J),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||V.attributes.normal===void 0&&Ue===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:ye,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Ge&&v.map.isVideoTexture===!0&&Je.getTransfer(v.map.colorSpace)===ct,decodeVideoTextureEmissive:Rt&&v.emissiveMap.isVideoTexture===!0&&Je.getTransfer(v.emissiveMap.colorSpace)===ct,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===jt,flipSided:v.side===Zt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ie&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&v.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function m(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)b.push(C),b.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(f(b,v),M(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function f(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function M(v,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function T(v){const b=p[v.type];let C;if(b){const L=bn[b];C=dp.clone(L.uniforms)}else C=v.uniforms;return C}function S(v,b){let C=h.get(b);return C!==void 0?++C.usedTimes:(C=new z_(i,b,v,s),l.push(C),h.set(b,C)),C}function w(v){if(--v.usedTimes===0){const b=l.indexOf(v);l[b]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:T,acquireProgram:S,releaseProgram:w,releaseShaderCache:E,programs:l,dispose:R}}function q_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Y_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function uh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function dh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,x,m,f){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:p,material:g,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:f},i[e]=M):(M.id=u.id,M.object=u,M.geometry=p,M.material=g,M.materialVariant=a(u),M.groupOrder=x,M.renderOrder=u.renderOrder,M.z=m,M.group=f),e++,M}function c(u,p,g,x,m,f,M){M.reversedDepth===!0&&(m=-m);const T=o(u,p,g,x,m,f);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):t.push(T)}function l(u,p,g,x,m,f){const M=o(u,p,g,x,m,f);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,p){t.length>1&&t.sort(u||Y_),n.length>1&&n.sort(p||uh),s.length>1&&s.sort(p||uh)}function d(){for(let u=e,p=i.length;u<p;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function $_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new dh,i.set(n,[a])):s>=r.length?(a=new dh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Z_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Oe};break;case"SpotLight":t={position:new P,direction:new P,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function K_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let J_=0;function j_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Q_(i){const e=new Z_,t=K_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,r=new dt,a=new dt;function o(l){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,M=0,T=0,S=0,w=0,E=0,R=0,v=0,b=0,C=0;l.sort(j_);for(let N=0,B=l.length;N<B;N++){const I=l[N],V=I.color,z=I.intensity,Y=I.distance;let ne=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===gi?ne=I.shadow.map.texture:ne=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=V.r*z,d+=V.g*z,u+=V.b*z;else if(I.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(I.sh.coefficients[q],z);C++}else if(I.isSunLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Q=I.shadow,te=t.get(I);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=te,n.sunShadowMap[g]=ne;const Re=Q.getViewportCount();for(let ye=0;ye<Re;ye++)n.sunShadowMatrix[x+ye]=Q.getMatrix(ye),n.sunShadowCascade[x+ye]=Q._cascadeData[ye];x+=Re,g++}n.sun[p]=q,p++}else if(I.isDirectionalLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Q=I.shadow,te=t.get(I);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.directionalShadow[m]=te,n.directionalShadowMap[m]=ne,n.directionalShadowMatrix[m]=I.shadow.matrix,w++}n.directional[m]=q,m++}else if(I.isSpotLight){const q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(V).multiplyScalar(z),q.distance=Y,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,n.spot[M]=q;const Q=I.shadow;if(I.map&&(n.spotLightMap[v]=I.map,v++,Q.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[M]=Q.matrix,I.castShadow){const te=t.get(I);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.spotShadow[M]=te,n.spotShadowMap[M]=ne,R++}M++}else if(I.isRectAreaLight){const q=e.get(I);q.color.copy(V).multiplyScalar(z),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),n.rectArea[T]=q,T++}else if(I.isPointLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){const Q=I.shadow,te=t.get(I);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,n.pointShadow[f]=te,n.pointShadowMap[f]=ne,n.pointShadowMatrix[f]=I.shadow.matrix,E++}n.point[f]=q,f++}else if(I.isHemisphereLight){const q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(z),q.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[S]=q,S++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const L=n.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==f||L.spotLength!==M||L.rectAreaLength!==T||L.hemiLength!==S||L.numSunShadows!==g||L.numDirectionalShadows!==w||L.numPointShadows!==E||L.numSpotShadows!==R||L.numSpotMaps!==v||L.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=m,n.spot.length=M,n.rectArea.length=T,n.point.length=f,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+v-b,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,L.sunLength=p,L.directionalLength=m,L.pointLength=f,L.spotLength=M,L.rectAreaLength=T,L.hemiLength=S,L.numSunShadows=g,L.numDirectionalShadows=w,L.numPointShadows=E,L.numSpotShadows=R,L.numSpotMaps=v,L.numLightProbes=C,n.version=J_++)}function c(l,h){let d=0,u=0,p=0,g=0,x=0,m=0;const f=h.matrixWorldInverse;for(let M=0,T=l.length;M<T;M++){const S=l[M];if(S.isSunLight){const w=n.sun[d];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(f),d++}else if(S.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),u++}else if(S.isSpotLight){const w=n.spot[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const w=n.rectArea[x];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(f),a.identity(),r.copy(S.matrixWorld),r.premultiply(f),a.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){const w=n.point[p];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const w=n.hemi[m];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(f),m++}}}return{setup:o,setupView:c,state:n}}function fh(i){const e=new Q_(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function c(u){s.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function ev(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new fh(i),e.set(s,[o])):r>=a.length?(o=new fh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const tv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nv=`uniform sampler2D shadow_pass;
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
}`,iv=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],sv=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],ph=new dt,vs=new P,Va=new P;function rv(i,e,t){let n=new fu;const s=new ke,r=new ke,a=new St,o=new gp,c=new _p,l={},h=t.maxTextureSize,d={[pi]:Zt,[Zt]:pi,[jt]:jt},u=new Qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:tv,fragmentShader:nv}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new At;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Fe(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xr;let f=this.type;this.render=function(E,R,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===tf&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xr);const b=i.getRenderTarget(),C=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Hn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=f!==this.type;B&&R.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(V=>V.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,V=E.length;I<V;I++){const z=E[I],Y=z.shadow;if(Y===void 0){De("WebGLShadowMap:",z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const ne=Y.getFrameExtents();s.multiply(ne),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,Y.mapSize.y=r.y));const q=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=q,Y.map===null||B===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===ys){if(z.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new on(s.x,s.y,{format:gi,type:Ln,minFilter:zt,magFilter:zt,generateMipmaps:!1}),Y.map.texture.name=z.name+".shadowMap",Y.map.depthTexture=new Ls(s.x,s.y,_n),Y.map.depthTexture.name=z.name+".shadowMapDepth",Y.map.depthTexture.format=Vn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Nt,Y.map.depthTexture.magFilter=Nt}else z.isPointLight?(Y.map=new Mu(s.x),Y.map.depthTexture=new hp(s.x,Pn)):(Y.map=new on(s.x,s.y),Y.map.depthTexture=new Ls(s.x,s.y,Pn)),Y.map.depthTexture.name=z.name+".shadowMap",Y.map.depthTexture.format=Vn,this.type===xr?(Y.map.depthTexture.compareFunction=q?Rc:Ac,Y.map.depthTexture.minFilter=zt,Y.map.depthTexture.magFilter=zt):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Nt,Y.map.depthTexture.magFilter=Nt);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);const Q=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();z.isPointLight!==!0&&Y.updateMatrices(z,v);for(let te=0;te<Q;te++){const Re=Y.getCamera(te);if(z.isPointLight){const ye=Y.camera,it=Y.matrix,Ke=z.distance||ye.far;Ke!==ye.far&&(ye.far=Ke,ye.updateProjectionMatrix()),vs.setFromMatrixPosition(z.matrixWorld),ye.position.copy(vs),Va.copy(ye.position),Va.add(iv[te]),ye.up.copy(sv[te]),ye.lookAt(Va),ye.updateMatrixWorld(),it.makeTranslation(-vs.x,-vs.y,-vs.z),ph.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(ph,ye.coordinateSystem,ye.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,te),i.clear();else{te===0&&(i.setRenderTarget(Y.map),i.clear());const ye=Y.getViewport(te);a.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),N.viewport(a)}n=Y.getFrustum(te),S(R,v,Re,z,this.type)}Y.isPointLightShadow!==!0&&this.type===ys&&M(Y,v),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,C,L)};function M(E,R){const v=e.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new on(s.x,s.y,{format:gi,type:Ln}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,v,u,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,v,p,x,null)}function T(E,R,v,b){let C=null;const L=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)C=L;else if(C=v.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=C.uuid,B=R.uuid;let I=l[N];I===void 0&&(I={},l[N]=I);let V=I[B];V===void 0&&(V=C.clone(),I[B]=V,R.addEventListener("dispose",w)),C=V}if(C.visible=R.visible,C.wireframe=R.wireframe,b===ys?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:d[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const N=i.properties.get(C);N.light=v}return C}function S(E,R,v,b,C){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===ys)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);const B=e.update(E),I=E.material;if(Array.isArray(I)){const V=B.groups;for(let z=0,Y=V.length;z<Y;z++){const ne=V[z],q=I[ne.materialIndex];if(q&&q.visible){const Q=T(E,q,b,C);E.onBeforeShadow(i,E,R,v,B,Q,ne),i.renderBufferDirect(v,null,B,Q,E,ne),E.onAfterShadow(i,E,R,v,B,Q,ne)}}}else if(I.visible){const V=T(E,I,b,C);E.onBeforeShadow(i,E,R,v,B,V,null),i.renderBufferDirect(v,null,B,V,E,null),E.onAfterShadow(i,E,R,v,B,V,null)}}const N=E.children;for(let B=0,I=N.length;B<I;B++)S(N[B],R,v,b,C)}function w(E){E.target.removeEventListener("dispose",w);for(const v in l){const b=l[v],C=E.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function av(i,e){function t(){let U=!1;const le=new St;let J=null;const he=new St(0,0,0,0);return{setMask:function(me){J!==me&&!U&&(i.colorMask(me,me,me,me),J=me)},setLocked:function(me){U=me},setClear:function(me,ie,Ce,Ee,pt){pt===!0&&(me*=Ee,ie*=Ee,Ce*=Ee),le.set(me,ie,Ce,Ee),he.equals(le)===!1&&(i.clearColor(me,ie,Ce,Ee),he.copy(le))},reset:function(){U=!1,J=null,he.set(-1,0,0,0)}}}function n(){let U=!1,le=!1,J=null,he=null,me=null;return{setReversed:function(ie){if(le!==ie){const Ce=e.get("EXT_clip_control");ie?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),le=ie;const Ee=me;me=null,this.setClear(Ee)}},getReversed:function(){return le},setTest:function(ie){ie?ee(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(ie){J!==ie&&!U&&(i.depthMask(ie),J=ie)},setFunc:function(ie){if(le&&(ie=Of[ie]),he!==ie){switch(ie){case co:i.depthFunc(i.NEVER);break;case lo:i.depthFunc(i.ALWAYS);break;case ho:i.depthFunc(i.LESS);break;case Rs:i.depthFunc(i.LEQUAL);break;case uo:i.depthFunc(i.EQUAL);break;case fo:i.depthFunc(i.GEQUAL);break;case po:i.depthFunc(i.GREATER);break;case mo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=ie}},setLocked:function(ie){U=ie},setClear:function(ie){me!==ie&&(me=ie,le&&(ie=1-ie),i.clearDepth(ie))},reset:function(){U=!1,J=null,he=null,me=null,le=!1}}}function s(){let U=!1,le=null,J=null,he=null,me=null,ie=null,Ce=null,Ee=null,pt=null;return{setTest:function(rt){U||(rt?ee(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(rt){le!==rt&&!U&&(i.stencilMask(rt),le=rt)},setFunc:function(rt,hn,xn){(J!==rt||he!==hn||me!==xn)&&(i.stencilFunc(rt,hn,xn),J=rt,he=hn,me=xn)},setOp:function(rt,hn,xn){(ie!==rt||Ce!==hn||Ee!==xn)&&(i.stencilOp(rt,hn,xn),ie=rt,Ce=hn,Ee=xn)},setLocked:function(rt){U=rt},setClear:function(rt){pt!==rt&&(i.clearStencil(rt),pt=rt)},reset:function(){U=!1,le=null,J=null,he=null,me=null,ie=null,Ce=null,Ee=null,pt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},d={},u={},p=new WeakMap,g=[],x=null,m=!1,f=null,M=null,T=null,S=null,w=null,E=null,R=null,v=new Oe(0,0,0),b=0,C=!1,L=null,N=null,B=null,I=null,V=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ne=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=ne>=1):q.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=ne>=2);let Q=null,te={};const Re=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),it=new St().fromArray(Re),Ke=new St().fromArray(ye);function Qe(U,le,J,he){const me=new Uint8Array(4),ie=i.createTexture();i.bindTexture(U,ie),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<J;Ce++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(le+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return ie}const $={};$[i.TEXTURE_2D]=Qe(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(Rs),be(!1),Ue(dl),ee(i.CULL_FACE),se(Hn);function ee(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function ve(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Ne(U,le){return u[U]!==le?(i.bindFramebuffer(U,le),u[U]=le,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=le),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=le),!0):!1}function ge(U,le){let J=g,he=!1;if(U){J=p.get(le),J===void 0&&(J=[],p.set(le,J));const me=U.textures;if(J.length!==me.length||J[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Ce=me.length;ie<Ce;ie++)J[ie]=i.COLOR_ATTACHMENT0+ie;J.length=me.length,he=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,he=!0);he&&i.drawBuffers(J)}function Ge(U){return x!==U?(i.useProgram(U),x=U,!0):!1}const _t={[qi]:i.FUNC_ADD,[sf]:i.FUNC_SUBTRACT,[rf]:i.FUNC_REVERSE_SUBTRACT};_t[af]=i.MIN,_t[of]=i.MAX;const qe={[cf]:i.ZERO,[lf]:i.ONE,[hf]:i.SRC_COLOR,[kh]:i.SRC_ALPHA,[gf]:i.SRC_ALPHA_SATURATE,[pf]:i.DST_COLOR,[df]:i.DST_ALPHA,[uf]:i.ONE_MINUS_SRC_COLOR,[zh]:i.ONE_MINUS_SRC_ALPHA,[mf]:i.ONE_MINUS_DST_COLOR,[ff]:i.ONE_MINUS_DST_ALPHA,[_f]:i.CONSTANT_COLOR,[vf]:i.ONE_MINUS_CONSTANT_COLOR,[xf]:i.CONSTANT_ALPHA,[yf]:i.ONE_MINUS_CONSTANT_ALPHA};function se(U,le,J,he,me,ie,Ce,Ee,pt,rt){if(U===Hn){m===!0&&(ve(i.BLEND),m=!1);return}if(m===!1&&(ee(i.BLEND),m=!0),U!==nf){if(U!==f||rt!==C){if((M!==qi||w!==qi)&&(i.blendEquation(i.FUNC_ADD),M=qi,w=qi),rt)switch(U){case fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ws:i.blendFunc(i.ONE,i.ONE);break;case fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:tt("WebGLState: Invalid blending: ",U);break}else switch(U){case fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case fl:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pl:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",U);break}T=null,S=null,E=null,R=null,v.set(0,0,0),b=0,f=U,C=rt}return}me=me||le,ie=ie||J,Ce=Ce||he,(le!==M||me!==w)&&(i.blendEquationSeparate(_t[le],_t[me]),M=le,w=me),(J!==T||he!==S||ie!==E||Ce!==R)&&(i.blendFuncSeparate(qe[J],qe[he],qe[ie],qe[Ce]),T=J,S=he,E=ie,R=Ce),(Ee.equals(v)===!1||pt!==b)&&(i.blendColor(Ee.r,Ee.g,Ee.b,pt),v.copy(Ee),b=pt),f=U,C=!1}function Ie(U,le){U.side===jt?ve(i.CULL_FACE):ee(i.CULL_FACE);let J=U.side===Zt;le&&(J=!J),be(J),U.blending===fi&&U.transparent===!1?se(Hn):se(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const he=U.stencilWrite;o.setTest(he),he&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Rt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function be(U){L!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),L=U)}function Ue(U){U!==Qd?(ee(i.CULL_FACE),U!==N&&(U===dl?i.cullFace(i.BACK):U===ef?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),N=U}function vt(U){U!==B&&(Y&&i.lineWidth(U),B=U)}function Rt(U,le,J){U?(ee(i.POLYGON_OFFSET_FILL),(I!==le||V!==J)&&(I=le,V=J,a.getReversed()&&(le=-le),i.polygonOffset(le,J))):ve(i.POLYGON_OFFSET_FILL)}function Ye(U){U?ee(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function xt(U){U===void 0&&(U=i.TEXTURE0+z-1),Q!==U&&(i.activeTexture(U),Q=U)}function F(U,le,J){J===void 0&&(Q===null?J=i.TEXTURE0+z-1:J=Q);let he=te[J];he===void 0&&(he={type:void 0,texture:void 0},te[J]=he),(he.type!==U||he.texture!==le)&&(Q!==J&&(i.activeTexture(J),Q=J),i.bindTexture(U,le||$[U]),he.type=U,he.texture=le)}function Ft(){const U=te[Q];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ot(){try{i.compressedTexImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function _(){try{i.texSubImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function O(){try{i.texSubImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function re(){try{i.texStorage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function ae(){try{i.texStorage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function K(){try{i.texImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function j(){try{i.texImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function oe(U){return d[U]!==void 0?d[U]:i.getParameter(U)}function Te(U,le){d[U]!==le&&(i.pixelStorei(U,le),d[U]=le)}function ue(U){it.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),it.copy(U))}function ce(U){Ke.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Ke.copy(U))}function Ae(U,le){let J=l.get(le);J===void 0&&(J=new WeakMap,l.set(le,J));let he=J.get(U);he===void 0&&(he=i.getUniformBlockIndex(le,U.name),J.set(U,he))}function Le(U,le){const he=l.get(le).get(U);c.get(le)!==he&&(i.uniformBlockBinding(le,he,U.__bindingPointIndex),c.set(le,he))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,te={},u={},p=new WeakMap,g=[],x=null,m=!1,f=null,M=null,T=null,S=null,w=null,E=null,R=null,v=new Oe(0,0,0),b=0,C=!1,L=null,N=null,B=null,I=null,V=null,it.set(0,0,i.canvas.width,i.canvas.height),Ke.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:ve,bindFramebuffer:Ne,drawBuffers:ge,useProgram:Ge,setBlending:se,setMaterial:Ie,setFlipSided:be,setCullFace:Ue,setLineWidth:vt,setPolygonOffset:Rt,setScissorTest:Ye,activeTexture:xt,bindTexture:F,unbindTexture:Ft,compressedTexImage2D:ot,compressedTexImage3D:A,texImage2D:K,texImage3D:j,pixelStorei:Te,getParameter:oe,updateUBOMapping:Ae,uniformBlockBinding:Le,texStorage2D:re,texStorage3D:ae,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:W,compressedTexSubImage3D:Z,scissor:ue,viewport:ce,reset:ze}}function ov(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ke,h=new WeakMap,d=new Set;let u;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,_){return g?new OffscreenCanvas(A,_):zr("canvas")}function m(A,_,O){let W=1;const Z=ot(A);if((Z.width>O||Z.height>O)&&(W=O/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const re=Math.floor(W*Z.width),ae=Math.floor(W*Z.height);u===void 0&&(u=x(re,ae));const K=_?x(re,ae):u;return K.width=re,K.height=ae,K.getContext("2d").drawImage(A,0,0,re,ae),De("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+re+"x"+ae+")."),K}else return"data"in A&&De("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function f(A){return A.generateMipmaps}function M(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(A,_,O,W,Z,re=!1){if(A!==null){if(i[A]!==void 0)return i[A];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ae;W&&(ae=e.get("EXT_texture_norm16"),ae||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=_;if(_===i.RED&&(O===i.FLOAT&&(K=i.R32F),O===i.HALF_FLOAT&&(K=i.R16F),O===i.UNSIGNED_BYTE&&(K=i.R8),O===i.UNSIGNED_SHORT&&ae&&(K=ae.R16_EXT),O===i.SHORT&&ae&&(K=ae.R16_SNORM_EXT)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.R8UI),O===i.UNSIGNED_SHORT&&(K=i.R16UI),O===i.UNSIGNED_INT&&(K=i.R32UI),O===i.BYTE&&(K=i.R8I),O===i.SHORT&&(K=i.R16I),O===i.INT&&(K=i.R32I)),_===i.RG&&(O===i.FLOAT&&(K=i.RG32F),O===i.HALF_FLOAT&&(K=i.RG16F),O===i.UNSIGNED_BYTE&&(K=i.RG8),O===i.UNSIGNED_SHORT&&ae&&(K=ae.RG16_EXT),O===i.SHORT&&ae&&(K=ae.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RG8UI),O===i.UNSIGNED_SHORT&&(K=i.RG16UI),O===i.UNSIGNED_INT&&(K=i.RG32UI),O===i.BYTE&&(K=i.RG8I),O===i.SHORT&&(K=i.RG16I),O===i.INT&&(K=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGB8UI),O===i.UNSIGNED_SHORT&&(K=i.RGB16UI),O===i.UNSIGNED_INT&&(K=i.RGB32UI),O===i.BYTE&&(K=i.RGB8I),O===i.SHORT&&(K=i.RGB16I),O===i.INT&&(K=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),O===i.UNSIGNED_INT&&(K=i.RGBA32UI),O===i.BYTE&&(K=i.RGBA8I),O===i.SHORT&&(K=i.RGBA16I),O===i.INT&&(K=i.RGBA32I)),_===i.RGB&&(O===i.UNSIGNED_SHORT&&ae&&(K=ae.RGB16_EXT),O===i.SHORT&&ae&&(K=ae.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),_===i.RGBA){const j=re?Br:Je.getTransfer(Z);O===i.FLOAT&&(K=i.RGBA32F),O===i.HALF_FLOAT&&(K=i.RGBA16F),O===i.UNSIGNED_BYTE&&(K=j===ct?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&ae&&(K=ae.RGBA16_EXT),O===i.SHORT&&ae&&(K=ae.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function w(A,_){let O;return A?_===null||_===Pn||_===Ps?O=i.DEPTH24_STENCIL8:_===_n?O=i.DEPTH32F_STENCIL8:_===Cs&&(O=i.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Pn||_===Ps?O=i.DEPTH_COMPONENT24:_===_n?O=i.DEPTH_COMPONENT32F:_===Cs&&(O=i.DEPTH_COMPONENT16),O}function E(A,_){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==Nt&&A.minFilter!==zt?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function R(A){const _=A.target;_.removeEventListener("dispose",R),b(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function v(A){const _=A.target;_.removeEventListener("dispose",v),L(_)}function b(A){const _=n.get(A);if(_.__webglInit===void 0)return;const O=A.source,W=p.get(O);if(W){const Z=W[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(A),Object.keys(W).length===0&&p.delete(O)}n.remove(A)}function C(A){const _=n.get(A);i.deleteTexture(_.__webglTexture);const O=A.source,W=p.get(O);delete W[_.__cacheKey],a.memory.textures--}function L(A){const _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let Z=0;Z<_.__webglFramebuffer[W].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[W][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)i.deleteFramebuffer(_.__webglFramebuffer[W]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=A.textures;for(let W=0,Z=O.length;W<Z;W++){const re=n.get(O[W]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),a.memory.textures--),n.remove(O[W])}n.remove(A)}let N=0;function B(){N=0}function I(){return N}function V(A){N=A}function z(){const A=N;return A>=s.maxTextures&&De("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,A}function Y(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function ne(A,_){const O=n.get(A);if(A.isVideoTexture&&F(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const W=A.image;if(W===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(O,A,_);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function q(A,_){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){ve(O,A,_);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function Q(A,_){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){ve(O,A,_);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function te(A,_){const O=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){Ne(O,A,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}const Re={[go]:i.REPEAT,[kn]:i.CLAMP_TO_EDGE,[_o]:i.MIRRORED_REPEAT},ye={[Nt]:i.NEAREST,[Ef]:i.NEAREST_MIPMAP_NEAREST,[Bs]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[da]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},it={[Af]:i.NEVER,[If]:i.ALWAYS,[Rf]:i.LESS,[Ac]:i.LEQUAL,[Cf]:i.EQUAL,[Rc]:i.GEQUAL,[Pf]:i.GREATER,[Lf]:i.NOTEQUAL};function Ke(A,_){if(_.type===_n&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===zt||_.magFilter===da||_.magFilter===Bs||_.magFilter===ui||_.minFilter===zt||_.minFilter===da||_.minFilter===Bs||_.minFilter===ui)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Re[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Re[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Re[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ye[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ye[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,it[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Nt||_.minFilter!==Bs&&_.minFilter!==ui||_.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Qe(A,_){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",R));const W=_.source;let Z=p.get(W);Z===void 0&&(Z={},p.set(W,Z));const re=Y(_);if(re!==A.__cacheKey){Z[re]===void 0&&(Z[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[re].usedTimes++;const ae=Z[A.__cacheKey];ae!==void 0&&(Z[A.__cacheKey].usedTimes--,ae.usedTimes===0&&C(_)),A.__cacheKey=re,A.__webglTexture=Z[re].texture}return O}function $(A,_,O){return Math.floor(Math.floor(A/O)/_)}function ee(A,_,O,W){const re=A.updateRanges;if(re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,W,_.data);else{re.sort((Te,ue)=>Te.start-ue.start);let ae=0;for(let Te=1;Te<re.length;Te++){const ue=re[ae],ce=re[Te],Ae=ue.start+ue.count,Le=$(ce.start,_.width,4),ze=$(ue.start,_.width,4);ce.start<=Ae+1&&Le===ze&&$(ce.start+ce.count-1,_.width,4)===Le?ue.count=Math.max(ue.count,ce.start+ce.count-ue.start):(++ae,re[ae]=ce)}re.length=ae+1;const K=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Te=0,ue=re.length;Te<ue;Te++){const ce=re[Te],Ae=Math.floor(ce.start/4),Le=Math.ceil(ce.count/4),ze=Ae%_.width,U=Math.floor(Ae/_.width),le=Le,J=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,ze,U,le,J,O,W,_.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function ve(A,_,O){let W=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=i.TEXTURE_3D);const Z=Qe(A,_),re=_.source;t.bindTexture(W,A.__webglTexture,i.TEXTURE0+O);const ae=n.get(re);if(re.version!==ae.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const J=Je.getPrimaries(Je.workingColorSpace),he=_.colorSpace===ei?null:Je.getPrimaries(_.colorSpace),me=_.colorSpace===ei||J===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let j=m(_.image,!1,s.maxTextureSize);j=Ft(_,j);const oe=r.convert(_.format,_.colorSpace),Te=r.convert(_.type);let ue=S(_.internalFormat,oe,Te,_.normalized,_.colorSpace,_.isVideoTexture);Ke(W,_);let ce;const Ae=_.mipmaps,Le=_.isVideoTexture!==!0,ze=ae.__version===void 0||Z===!0,U=re.dataReady,le=E(_,j);if(_.isDepthTexture)ue=w(_.format===di,_.type),ze&&(Le?t.texStorage2D(i.TEXTURE_2D,1,ue,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,ue,j.width,j.height,0,oe,Te,null));else if(_.isDataTexture)if(Ae.length>0){Le&&ze&&t.texStorage2D(i.TEXTURE_2D,le,ue,Ae[0].width,Ae[0].height);for(let J=0,he=Ae.length;J<he;J++)ce=Ae[J],Le?U&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ce.width,ce.height,oe,Te,ce.data):t.texImage2D(i.TEXTURE_2D,J,ue,ce.width,ce.height,0,oe,Te,ce.data);_.generateMipmaps=!1}else Le?(ze&&t.texStorage2D(i.TEXTURE_2D,le,ue,j.width,j.height),U&&ee(_,j,oe,Te)):t.texImage2D(i.TEXTURE_2D,0,ue,j.width,j.height,0,oe,Te,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Le&&ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,ue,Ae[0].width,Ae[0].height,j.depth);for(let J=0,he=Ae.length;J<he;J++)if(ce=Ae[J],_.format!==vn)if(oe!==null)if(Le){if(U)if(_.layerUpdates.size>0){const me=ql(ce.width,ce.height,_.format,_.type);for(const ie of _.layerUpdates){const Ce=ce.data.subarray(ie*me/ce.data.BYTES_PER_ELEMENT,(ie+1)*me/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,ie,ce.width,ce.height,1,oe,Ce)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ce.width,ce.height,j.depth,oe,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,ue,ce.width,ce.height,j.depth,0,ce.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ce.width,ce.height,j.depth,oe,Te,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,ue,ce.width,ce.height,j.depth,0,oe,Te,ce.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Le&&ze&&t.texStorage2D(i.TEXTURE_2D,le,ue,Ae[0].width,Ae[0].height);for(let J=0,he=Ae.length;J<he;J++)ce=Ae[J],_.format!==vn?oe!==null?Le?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,ce.width,ce.height,oe,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,J,ue,ce.width,ce.height,0,ce.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?U&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ce.width,ce.height,oe,Te,ce.data):t.texImage2D(i.TEXTURE_2D,J,ue,ce.width,ce.height,0,oe,Te,ce.data)}else if(_.isDataArrayTexture)if(Le){if(ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,ue,j.width,j.height,j.depth),U)if(_.layerUpdates.size>0){const J=ql(j.width,j.height,_.format,_.type);for(const he of _.layerUpdates){const me=j.data.subarray(he*J/j.data.BYTES_PER_ELEMENT,(he+1)*J/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,j.width,j.height,1,oe,Te,me)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,oe,Te,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ue,j.width,j.height,j.depth,0,oe,Te,j.data);else if(_.isData3DTexture)Le?(ze&&t.texStorage3D(i.TEXTURE_3D,le,ue,j.width,j.height,j.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,oe,Te,j.data)):t.texImage3D(i.TEXTURE_3D,0,ue,j.width,j.height,j.depth,0,oe,Te,j.data);else if(_.isFramebufferTexture){if(ze)if(Le)t.texStorage2D(i.TEXTURE_2D,le,ue,j.width,j.height);else{let J=j.width,he=j.height;for(let me=0;me<le;me++)t.texImage2D(i.TEXTURE_2D,me,ue,J,he,0,oe,Te,null),J>>=1,he>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const J=i.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),j.parentNode!==J){J.appendChild(j),d.add(_),J.onpaint=he=>{const me=he.changedElements;for(const ie of d)me.includes(ie.image)&&(ie.needsUpdate=!0)},J.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{const me=i.RGBA,ie=i.RGBA,Ce=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,me,ie,Ce,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Le&&ze){const J=ot(Ae[0]);t.texStorage2D(i.TEXTURE_2D,le,ue,J.width,J.height)}for(let J=0,he=Ae.length;J<he;J++)ce=Ae[J],Le?U&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,oe,Te,ce):t.texImage2D(i.TEXTURE_2D,J,ue,oe,Te,ce);_.generateMipmaps=!1}else if(Le){if(ze){const J=ot(j);t.texStorage2D(i.TEXTURE_2D,le,ue,J.width,J.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,Te,j)}else t.texImage2D(i.TEXTURE_2D,0,ue,oe,Te,j);f(_)&&M(W),ae.__version=re.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Ne(A,_,O){if(_.image.length!==6)return;const W=Qe(A,_),Z=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);const re=n.get(Z);if(Z.version!==re.__version||W===!0){t.activeTexture(i.TEXTURE0+O);const ae=Je.getPrimaries(Je.workingColorSpace),K=_.colorSpace===ei?null:Je.getPrimaries(_.colorSpace),j=_.colorSpace===ei||ae===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const oe=_.isCompressedTexture||_.image[0].isCompressedTexture,Te=_.image[0]&&_.image[0].isDataTexture,ue=[];for(let ie=0;ie<6;ie++)!oe&&!Te?ue[ie]=m(_.image[ie],!0,s.maxCubemapSize):ue[ie]=Te?_.image[ie].image:_.image[ie],ue[ie]=Ft(_,ue[ie]);const ce=ue[0],Ae=r.convert(_.format,_.colorSpace),Le=r.convert(_.type),ze=S(_.internalFormat,Ae,Le,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,le=re.__version===void 0||W===!0,J=Z.dataReady;let he=E(_,ce);Ke(i.TEXTURE_CUBE_MAP,_);let me;if(oe){U&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,ze,ce.width,ce.height);for(let ie=0;ie<6;ie++){me=ue[ie].mipmaps;for(let Ce=0;Ce<me.length;Ce++){const Ee=me[Ce];_.format!==vn?Ae!==null?U?J&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,Ee.width,Ee.height,Ae,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,ze,Ee.width,Ee.height,0,Ee.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,Ee.width,Ee.height,Ae,Le,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,ze,Ee.width,Ee.height,0,Ae,Le,Ee.data)}}}else{if(me=_.mipmaps,U&&le){me.length>0&&he++;const ie=ot(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,ze,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Te){U?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ue[ie].width,ue[ie].height,Ae,Le,ue[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ze,ue[ie].width,ue[ie].height,0,Ae,Le,ue[ie].data);for(let Ce=0;Ce<me.length;Ce++){const pt=me[Ce].image[ie].image;U?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,pt.width,pt.height,Ae,Le,pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,ze,pt.width,pt.height,0,Ae,Le,pt.data)}}else{U?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ae,Le,ue[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ze,Ae,Le,ue[ie]);for(let Ce=0;Ce<me.length;Ce++){const Ee=me[Ce];U?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,Ae,Le,Ee.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,ze,Ae,Le,Ee.image[ie])}}}f(_)&&M(i.TEXTURE_CUBE_MAP),re.__version=Z.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function ge(A,_,O,W,Z,re){const ae=r.convert(O.format,O.colorSpace),K=r.convert(O.type),j=S(O.internalFormat,ae,K,O.normalized,O.colorSpace),oe=n.get(_),Te=n.get(O);if(Te.__renderTarget=_,!oe.__hasExternalTextures){const ue=Math.max(1,_.width>>re),ce=Math.max(1,_.height>>re);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,re,j,ue,ce,_.depth,0,ae,K,null):t.texImage2D(Z,re,j,ue,ce,0,ae,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),xt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Z,Te.__webglTexture,0,Ye(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Z,Te.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(A,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){const W=_.depthTexture,Z=W&&W.isDepthTexture?W.type:null,re=w(_.stencilBuffer,Z),ae=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye(_),re,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye(_),re,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,re,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,A)}else{const W=_.textures;for(let Z=0;Z<W.length;Z++){const re=W[Z],ae=r.convert(re.format,re.colorSpace),K=r.convert(re.type),j=S(re.internalFormat,ae,K,re.normalized,re.colorSpace);xt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye(_),j,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye(_),j,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,j,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(A,_,O){const W=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=n.get(_.depthTexture);if(Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ke(i.TEXTURE_CUBE_MAP,_.depthTexture);const oe=r.convert(_.depthTexture.format),Te=r.convert(_.depthTexture.type);let ue;_.depthTexture.format===Vn?ue=i.DEPTH_COMPONENT24:_.depthTexture.format===di&&(ue=i.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ue,_.width,_.height,0,oe,Te,null)}}else ne(_.depthTexture,0);const re=Z.__webglTexture,ae=Ye(_),K=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,j=_.depthTexture.format===di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Vn)xt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,re,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,j,K,re,0);else if(_.depthTexture.format===di)xt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,re,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,j,K,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function qe(A){const _=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const W=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=W}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let W=0;W<6;W++)_t(_.__webglFramebuffer[W],A,W);else{const W=A.texture.mipmaps;W&&W.length>0?_t(_.__webglFramebuffer[0],A,0):_t(_.__webglFramebuffer,A,0)}else if(O){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=i.createRenderbuffer(),Ge(_.__webglDepthbuffer[W],A,!1);else{const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=_.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,re)}}else{const W=A.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ge(_.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,re)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(A,_,O){const W=n.get(A);_!==void 0&&ge(W.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&qe(A)}function Ie(A){const _=A.texture,O=n.get(A),W=n.get(_);A.addEventListener("dispose",v);const Z=A.textures,re=A.isWebGLCubeRenderTarget===!0,ae=Z.length>1;if(ae||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=_.version,a.memory.textures++),re){O.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[K]=[];for(let j=0;j<_.mipmaps.length;j++)O.__webglFramebuffer[K][j]=i.createFramebuffer()}else O.__webglFramebuffer[K]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)O.__webglFramebuffer[K]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ae)for(let K=0,j=Z.length;K<j;K++){const oe=n.get(Z[K]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&xt(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let K=0;K<Z.length;K++){const j=Z[K];O.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[K]);const oe=r.convert(j.format,j.colorSpace),Te=r.convert(j.type),ue=S(j.internalFormat,oe,Te,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),ce=Ye(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,ue,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,O.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Ge(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ke(i.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)ge(O.__webglFramebuffer[K][j],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else ge(O.__webglFramebuffer[K],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);f(_)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let K=0,j=Z.length;K<j;K++){const oe=Z[K],Te=n.get(oe);let ue=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,Te.__webglTexture),Ke(ue,oe),ge(O.__webglFramebuffer,A,oe,i.COLOR_ATTACHMENT0+K,ue,0),f(oe)&&M(ue)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,W.__webglTexture),Ke(K,_),_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)ge(O.__webglFramebuffer[j],A,_,i.COLOR_ATTACHMENT0,K,j);else ge(O.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,K,0);f(_)&&M(K),t.unbindTexture()}A.depthBuffer&&qe(A)}function be(A){const _=A.textures;for(let O=0,W=_.length;O<W;O++){const Z=_[O];if(f(Z)){const re=T(A),ae=n.get(Z).__webglTexture;t.bindTexture(re,ae),M(re),t.unbindTexture()}}}const Ue=[],vt=[];function Rt(A){if(A.samples>0){if(xt(A)===!1){const _=A.textures,O=A.width,W=A.height;let Z=i.COLOR_BUFFER_BIT;const re=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(A),K=_.length>1;if(K)for(let oe=0;oe<_.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const j=A.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let oe=0;oe<_.length;oe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Te=n.get(_[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,O,W,0,0,O,W,Z,i.NEAREST),c===!0&&(Ue.length=0,vt.length=0,Ue.push(i.COLOR_ATTACHMENT0+oe),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(Ue.push(re),vt.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let oe=0;oe<_.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Te=n.get(_[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){const _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Ye(A){return Math.min(s.maxSamples,A.samples)}function xt(A){const _=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function F(A){const _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function Ft(A,_){const O=A.colorSpace,W=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Or&&O!==ei&&(Je.getTransfer(O)===ct?(W!==vn||Z!==rn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",O)),_}function ot(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.getTextureUnits=I,this.setTextureUnits=V,this.setTexture2D=ne,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=te,this.rebindTextures=se,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function cv(i,e){function t(n,s=ei){let r;const a=Je.getTransfer(s);if(n===rn)return i.UNSIGNED_BYTE;if(n===Sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Mc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kh)return i.BYTE;if(n===Jh)return i.SHORT;if(n===Cs)return i.UNSIGNED_SHORT;if(n===yc)return i.INT;if(n===Pn)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===Ln)return i.HALF_FLOAT;if(n===eu)return i.ALPHA;if(n===tu)return i.RGB;if(n===vn)return i.RGBA;if(n===Vn)return i.DEPTH_COMPONENT;if(n===di)return i.DEPTH_STENCIL;if(n===Ec)return i.RED;if(n===bc)return i.RED_INTEGER;if(n===gi)return i.RG;if(n===wc)return i.RG_INTEGER;if(n===Tc)return i.RGBA_INTEGER;if(n===yr||n===Sr||n===Mr||n===Er)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vo||n===xo||n===yo||n===So)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mo||n===Eo||n===bo||n===wo||n===To||n===Ur||n===Ao)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Mo||n===Eo)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===wo)return r.COMPRESSED_R11_EAC;if(n===To)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ur)return r.COMPRESSED_RG11_EAC;if(n===Ao)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ro||n===Co||n===Po||n===Lo||n===Io||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===ko||n===zo||n===Ho)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ro)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Co)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Po)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Io)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Do)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===No)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ko)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ho)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Go||n===Vo||n===Wo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Go)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xo||n===qo||n===Fr||n===Yo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const lv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hv=`
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

}`;class uv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new gu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Qt({vertexShader:lv,fragmentShader:hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dv extends yi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new uv,f={},M=t.getContextAttributes();let T=null,S=null;const w=[],E=[],R=new ke;let v=null,b=null;const C=new qt;C.viewport=new St;const L=new qt;L.viewport=new St;const N=[C,L],B=new yp;let I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ee=w[$];return ee===void 0&&(ee=new Sa,w[$]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function($){let ee=w[$];return ee===void 0&&(ee=new Sa,w[$]=ee),ee.getGripSpace()},this.getHand=function($){let ee=w[$];return ee===void 0&&(ee=new Sa,w[$]=ee),ee.getHandSpace()};function z($){const ee=E.indexOf($.inputSource);if(ee===-1)return;const ve=w[ee];ve!==void 0&&(ve.update($.inputSource,$.frame,l||a),ve.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ne);for(let $=0;$<w.length;$++){const ee=E[$];ee!==null&&(E[$]=null,w[$].disconnect(ee))}I=null,V=null,m.reset();for(const $ in f)delete f[$];if(e.setRenderTarget(T),p=null,u=null,d=null,s=null,S=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),b!==null){const $=b.camera;$.fov=b.fov,$.zoom=b.zoom,$.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ne),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ne=null,ge=null;M.depth&&(ge=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=M.stencil?di:Vn,Ne=M.stencil?Ps:Pn);const Ge={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ge),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new on(u.textureWidth,u.textureHeight,{format:vn,type:rn,depthTexture:new Ls(u.textureWidth,u.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ve={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new on(p.framebufferWidth,p.framebufferHeight,{format:vn,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Qe.setContext(s),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne($){for(let ee=0;ee<$.removed.length;ee++){const ve=$.removed[ee],Ne=E.indexOf(ve);Ne>=0&&(E[Ne]=null,w[Ne].disconnect(ve))}for(let ee=0;ee<$.added.length;ee++){const ve=$.added[ee];let Ne=E.indexOf(ve);if(Ne===-1){for(let Ge=0;Ge<w.length;Ge++)if(Ge>=E.length){E.push(ve),Ne=Ge;break}else if(E[Ge]===null){E[Ge]=ve,Ne=Ge;break}if(Ne===-1)break}const ge=w[Ne];ge&&ge.connect(ve)}}const q=new P,Q=new P;function te($,ee,ve){q.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(ve.matrixWorld);const Ne=q.distanceTo(Q),ge=ee.projectionMatrix.elements,Ge=ve.projectionMatrix.elements,_t=ge[14]/(ge[10]-1),qe=ge[14]/(ge[10]+1),se=(ge[9]+1)/ge[5],Ie=(ge[9]-1)/ge[5],be=(ge[8]-1)/ge[0],Ue=(Ge[8]+1)/Ge[0],vt=_t*be,Rt=_t*Ue,Ye=Ne/(-be+Ue),xt=Ye*-be;if(ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(xt),$.translateZ(Ye),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ge[10]===-1)$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const F=_t+Ye,Ft=qe+Ye,ot=vt-xt,A=Rt+(Ne-xt),_=se*qe/Ft*F,O=Ie*qe/Ft*F;$.projectionMatrix.makePerspective(ot,A,_,O,F,Ft),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Re($,ee){ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ee=$.near,ve=$.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),B.near=L.near=C.near=ee,B.far=L.far=C.far=ve,(I!==B.near||V!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,V=B.far),B.layers.mask=$.layers.mask|6,C.layers.mask=B.layers.mask&-5,L.layers.mask=B.layers.mask&-3;const Ne=$.parent,ge=B.cameras;Re(B,Ne);for(let Ge=0;Ge<ge.length;Ge++)Re(ge[Ge],Ne);ge.length===2?te(B,C,L):B.projectionMatrix.copy(C.projectionMatrix),b===null&&$.isPerspectiveCamera&&(b={camera:$,fov:$.fov,zoom:$.zoom}),ye($,B,Ne)};function ye($,ee,ve){ve===null?$.matrix.copy(ee.matrixWorld):($.matrix.copy(ve.matrixWorld),$.matrix.invert(),$.matrix.multiply(ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=$o*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function($){c=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function($){return f[$]};let it=null;function Ke($,ee){if(h=ee.getViewerPose(l||a),g=ee,h!==null){const ve=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Ne=!1;ve.length!==B.cameras.length&&(B.cameras.length=0,Ne=!0);for(let qe=0;qe<ve.length;qe++){const se=ve[qe];let Ie=null;if(p!==null)Ie=p.getViewport(se);else{const Ue=d.getViewSubImage(u,se);Ie=Ue.viewport,qe===0&&(e.setRenderTargetTextures(S,Ue.colorTexture,Ue.depthStencilTexture),e.setRenderTarget(S))}let be=N[qe];be===void 0&&(be=new qt,be.layers.enable(qe),be.viewport=new St,N[qe]=be),be.matrix.fromArray(se.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(se.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),qe===0&&(B.matrix.copy(be.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ne===!0&&B.cameras.push(be)}const ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const qe=d.getDepthInformation(ve[0]);qe&&qe.isValid&&qe.texture&&m.init(qe,s.renderState)}if(ge&&ge.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let qe=0;qe<ve.length;qe++){const se=ve[qe].camera;if(se){let Ie=f[se];Ie||(Ie=new gu,f[se]=Ie);const be=d.getCameraImage(se);Ie.sourceTexture=be}}}}for(let ve=0;ve<w.length;ve++){const Ne=E[ve],ge=w[ve];Ne!==null&&ge!==void 0&&ge.update(Ne,ee,l||a)}it&&it($,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Qe=new yu;Qe.setAnimationLoop(Ke),this.setAnimationLoop=function($){it=$},this.dispose=function(){}}}const fv=new dt,Au=new Be;Au.set(-1,0,0,0,1,0,0,0,1);function pv(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,_u(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,T,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,M,T):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Zt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Zt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=e.get(f),T=M.envMap,S=M.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(fv.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Au),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,M,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=T*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Zt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function mv(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,w){const E=w.program;n.uniformBlockBinding(S,E)}function l(S,w){let E=s[S.id];E===void 0&&(m(S),E=h(S),s[S.id]=E,S.addEventListener("dispose",M));const R=w.program;n.updateUBOMapping(S,R);const v=e.render.frame;r[S.id]!==v&&(u(S),r[S.id]=v)}function h(S){const w=d();S.__bindingPointIndex=w;const E=i.createBuffer(),R=S.__size,v=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,E),E}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const w=s[S.id],E=S.uniforms,R=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let v=0,b=E.length;v<b;v++){const C=E[v];if(Array.isArray(C))for(let L=0,N=C.length;L<N;L++)p(C[L],v,L,R);else p(C,v,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,w,E,R){if(x(S,w,E,R)===!0){const v=S.__offset,b=S.value;if(Array.isArray(b)){let C=0;for(let L=0;L<b.length;L++){const N=b[L],B=f(N);g(N,S.__data,C),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(C+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,S.__data)}}function g(S,w,E){typeof S=="number"||typeof S=="boolean"?w[0]=S:S.isMatrix3?(w[0]=S.elements[0],w[1]=S.elements[1],w[2]=S.elements[2],w[3]=0,w[4]=S.elements[3],w[5]=S.elements[4],w[6]=S.elements[5],w[7]=0,w[8]=S.elements[6],w[9]=S.elements[7],w[10]=S.elements[8],w[11]=0):ArrayBuffer.isView(S)?w.set(new S.constructor(S.buffer,S.byteOffset,w.length)):S.toArray(w,E)}function x(S,w,E,R){const v=S.value,b=w+"_"+E;if(R[b]===void 0)return typeof v=="number"||typeof v=="boolean"?R[b]=v:ArrayBuffer.isView(v)?R[b]=v.slice():R[b]=v.clone(),!0;{const C=R[b];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return R[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function m(S){const w=S.uniforms;let E=0;const R=16;for(let b=0,C=w.length;b<C;b++){const L=Array.isArray(w[b])?w[b]:[w[b]];for(let N=0,B=L.length;N<B;N++){const I=L[N],V=Array.isArray(I.value)?I.value:[I.value];for(let z=0,Y=V.length;z<Y;z++){const ne=V[z],q=f(ne),Q=E%R,te=Q%q.boundary,Re=Q+te;E+=te,Re!==0&&R-Re<q.storage&&(E+=R-Re),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=q.storage}}}const v=E%R;return v>0&&(E+=R-v),S.__size=E,S.__cache={},this}function f(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):De("WebGLRenderer: Unsupported uniform value type.",S),w}function M(S){const w=S.target;w.removeEventListener("dispose",M);const E=a.indexOf(w.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function T(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:T}}const gv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mn=null;function _v(){return Mn===null&&(Mn=new du(gv,16,16,gi,Ln),Mn.name="DFG_LUT",Mn.minFilter=zt,Mn.magFilter=zt,Mn.wrapS=kn,Mn.wrapT=kn,Mn.generateMipmaps=!1,Mn.needsUpdate=!0),Mn}class Ru{constructor(e={}){const{canvas:t=Uf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=rn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const x=p,m=new Set([Tc,wc,bc]),f=new Set([rn,Pn,Cs,Ps,Sc,Mc]),M=new Uint32Array(4),T=new Int32Array(4),S=new P;let w=null,E=null;const R=[],v=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1,N=null,B=null,I=null,V=null;this._outputColorSpace=nn;let z=0,Y=0,ne=null,q=-1,Q=null;const te=new St,Re=new St;let ye=null;const it=new Oe(0);let Ke=0,Qe=t.width,$=t.height,ee=1,ve=null,Ne=null;const ge=new St(0,0,Qe,$),Ge=new St(0,0,Qe,$);let _t=!1;const qe=new fu;let se=!1,Ie=!1;const be=new dt,Ue=new P,vt=new St,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function xt(){return ne===null?ee:1}let F=n;function Ft(y,D){return t.getContext(y,D)}let ot,A,_,O,W,Z,re,ae,K,j,oe,Te,ue,ce,Ae,Le,ze,U,le,J,he,me,ie;try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xc}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",hn,!1),F===null){const D="webgl2";if(F=Ft(D,y),F===null)throw Ft(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ce()}catch(y){throw t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",hn,!1),tt("WebGLRenderer: "+y.message),y}function Ce(){ot=new _0(F),ot.init(),he=new cv(F,ot),A=new o0(F,ot,e,he),_=new av(F,ot),A.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),B=F.createFramebuffer(),I=F.createFramebuffer(),V=F.createFramebuffer(),O=new y0(F),W=new q_,Z=new ov(F,ot,_,W,A,he,O),re=new g0(C),ae=new Mp(F),me=new r0(F,ae),K=new v0(F,ae,O,me),j=new M0(F,K,ae,me,O),U=new S0(F,A,Z),Ae=new c0(W),oe=new X_(C,re,ot,A,me,Ae),Te=new pv(C,W),ue=new $_,ce=new ev(ot),ze=new s0(C,re,_,j,g,c),Le=new rv(C,j,A),ie=new mv(F,O,A,_),le=new a0(F,ot,O),J=new x0(F,ot,O),O.programs=oe.programs,C.capabilities=A,C.extensions=ot,C.properties=W,C.renderLists=ue,C.shadowMap=Le,C.state=_,C.info=O}x!==rn&&(b=new b0(x,t.width,t.height,o,s,r));const Ee=new dv(C,F);this.xr=Ee,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const y=ot.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ot.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(y){y!==void 0&&(ee=y,this.setSize(Qe,$,!1))},this.getSize=function(y){return y.set(Qe,$)},this.setSize=function(y,D,X=!0){if(Ee.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}Qe=y,$=D,t.width=Math.floor(y*ee),t.height=Math.floor(D*ee),X===!0&&(t.style.width=y+"px",t.style.height=D+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(Qe*ee,$*ee).floor()},this.setDrawingBufferSize=function(y,D,X){Qe=y,$=D,ee=X,t.width=Math.floor(y*X),t.height=Math.floor(D*X),this.setViewport(0,0,y,D)},this.setEffects=function(y){if(x===rn){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let D=0;D<y.length;D++)if(y[D].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(te)},this.getViewport=function(y){return y.copy(ge)},this.setViewport=function(y,D,X,H){y.isVector4?ge.set(y.x,y.y,y.z,y.w):ge.set(y,D,X,H),_.viewport(te.copy(ge).multiplyScalar(ee).round())},this.getScissor=function(y){return y.copy(Ge)},this.setScissor=function(y,D,X,H){y.isVector4?Ge.set(y.x,y.y,y.z,y.w):Ge.set(y,D,X,H),_.scissor(Re.copy(Ge).multiplyScalar(ee).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(y){_.setScissorTest(_t=y)},this.setOpaqueSort=function(y){ve=y},this.setTransparentSort=function(y){Ne=y},this.getClearColor=function(y){return y.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(y=!0,D=!0,X=!0){let H=0;if(y){let G=!1;if(ne!==null){const pe=ne.texture.format;G=m.has(pe)}if(G){const pe=ne.texture.type,xe=f.has(pe),fe=ze.getClearColor(),Se=ze.getClearAlpha(),we=fe.r,Ve=fe.g,Ze=fe.b;xe?(M[0]=we,M[1]=Ve,M[2]=Ze,M[3]=Se,F.clearBufferuiv(F.COLOR,0,M)):(T[0]=we,T[1]=Ve,T[2]=Ze,T[3]=Se,F.clearBufferiv(F.COLOR,0,T))}else H|=F.COLOR_BUFFER_BIT}D&&(H|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),N=y},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",hn,!1),ze.dispose(),ue.dispose(),ce.dispose(),W.dispose(),re.dispose(),j.dispose(),me.dispose(),ie.dispose(),oe.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Qc),Ee.removeEventListener("sessionend",el),ii.stop()};function pt(y){y.preventDefault(),Hr("WebGLRenderer: Context Lost."),L=!0}function rt(){Hr("WebGLRenderer: Context Restored."),L=!1;const y=O.autoReset,D=Le.enabled,X=Le.autoUpdate,H=Le.needsUpdate,G=Le.type;Ce(),O.autoReset=y,Le.enabled=D,Le.autoUpdate=X,Le.needsUpdate=H,Le.type=G}function hn(y){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function xn(y){const D=y.target;D.removeEventListener("dispose",xn),wd(D)}function wd(y){Td(y),W.remove(y)}function Td(y){const D=W.get(y).programs;D!==void 0&&(D.forEach(function(X){oe.releaseProgram(X)}),y.isShaderMaterial&&oe.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,X,H,G,pe){D===null&&(D=Rt);const xe=G.isMesh&&G.matrixWorld.determinantAffine()<0,fe=Cd(y,D,X,H,G);_.setMaterial(H,xe);let Se=X.index,we=1;if(H.wireframe===!0){if(Se=K.getWireframeAttribute(X),Se===void 0)return;we=2}const Ve=X.drawRange,Ze=X.attributes.position;let Me=Ve.start*we,at=(Ve.start+Ve.count)*we;pe!==null&&(Me=Math.max(Me,pe.start*we),at=Math.min(at,(pe.start+pe.count)*we)),Se!==null?(Me=Math.max(Me,0),at=Math.min(at,Se.count)):Ze!=null&&(Me=Math.max(Me,0),at=Math.min(at,Ze.count));const bt=at-Me;if(bt<0||bt===1/0)return;me.setup(G,H,fe,X,Se);let gt,ut=le;if(Se!==null&&(gt=ae.get(Se),ut=J,ut.setIndex(gt)),G.isMesh)H.wireframe===!0?(_.setLineWidth(H.wireframeLinewidth*xt()),ut.setMode(F.LINES)):ut.setMode(F.TRIANGLES);else if(G.isLine){let Ot=H.linewidth;Ot===void 0&&(Ot=1),_.setLineWidth(Ot*xt()),G.isLineSegments?ut.setMode(F.LINES):G.isLineLoop?ut.setMode(F.LINE_LOOP):ut.setMode(F.LINE_STRIP)}else G.isPoints?ut.setMode(F.POINTS):G.isSprite&&ut.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))ut.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ot=G._multiDrawStarts,_e=G._multiDrawCounts,Ht=G._multiDrawCount,et=Se?ae.get(Se).bytesPerElement:1,en=W.get(H).currentProgram.getUniforms();for(let yn=0;yn<Ht;yn++)en.setValue(F,"_gl_DrawID",yn),ut.render(Ot[yn]/et,_e[yn])}else if(G.isInstancedMesh)ut.renderInstances(Me,bt,G.count);else if(X.isInstancedBufferGeometry){const Ot=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,_e=Math.min(X.instanceCount,Ot);ut.renderInstances(Me,bt,_e)}else ut.render(Me,bt)};function jc(y,D,X,H){N!==null&&y.isNodeMaterial&&N.setObject(H,y),se===!0&&Ae.setState(y,X,!1),y.transparent===!0&&y.side===jt&&y.forceSinglePass===!1?(y.side=Zt,y.needsUpdate=!0,Fs(y,D,H),y.side=pi,y.needsUpdate=!0,Fs(y,D,H),y.side=jt):Fs(y,D,H)}this.compile=function(y,D,X=null){X===null&&(X=y),N!==null&&N.renderStart(y,D,X),E=ce.get(X),E.init(D),v.push(E),X.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),y!==X&&y.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),Ie=this.localClippingEnabled,se=Ae.init(this.clippingPlanes,Ie),se===!0&&Ae.setGlobalState(this.clippingPlanes,D),N!==null&&Le.render(E.state.shadowsArray,X,D);const H=new Set;return y.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const pe=G.material;if(pe)if(Array.isArray(pe))for(let xe=0;xe<pe.length;xe++){const fe=pe[xe];jc(fe,X,D,G),H.add(fe)}else jc(pe,X,D,G),H.add(pe)}),E=v.pop(),N!==null&&N.renderEnd(),H},this.compileAsync=function(y,D,X=null){const H=this.compile(y,D,X);return new Promise(G=>{function pe(){if(H.forEach(function(xe){const Se=W.get(xe).currentProgram;(Se===void 0||Se.isReady())&&H.delete(xe)}),H.size===0){G(y);return}setTimeout(pe,10)}ot.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let oa=null;function Ad(y){oa&&oa(y)}function Qc(){ii.stop()}function el(){ii.start()}const ii=new yu;ii.setAnimationLoop(Ad),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(y){oa=y,Ee.setAnimationLoop(y),y===null?ii.stop():ii.start()},Ee.addEventListener("sessionstart",Qc),Ee.addEventListener("sessionend",el),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(y,D);const X=Ee.enabled===!0&&Ee.isPresenting===!0,H=b!==null&&(ne===null||X)&&b.begin(C,ne);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(D),D=Ee.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,D,ne),E=ce.get(y,v.length),E.init(D),E.state.textureUnits=Z.getTextureUnits(),v.push(E),be.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),qe.setFromProjectionMatrix(be,An,D.reversedDepth),Ie=this.localClippingEnabled,se=Ae.init(this.clippingPlanes,Ie),w=ue.get(y,R.length),w.init(),R.push(w),Ee.enabled===!0&&Ee.isPresenting===!0){const xe=C.xr.getDepthSensingMesh();xe!==null&&ca(xe,D,-1/0,C.sortObjects)}ca(y,D,0,C.sortObjects),w.finish(),N!==null&&N.updateLights(E.state.lightsArray),C.sortObjects===!0&&w.sort(ve,Ne),Ye=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,Ye&&ze.addToRenderList(w,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Ae.beginShadows();const G=E.state.shadowsArray;if(Le.render(G,y,D),se===!0&&Ae.endShadows(),(H&&b.hasRenderPass())===!1){const xe=w.opaque,fe=w.transmissive;if(E.setupLights(),D.isArrayCamera){const Se=D.cameras;if(fe.length>0)for(let we=0,Ve=Se.length;we<Ve;we++){const Ze=Se[we];nl(xe,fe,y,Ze)}Ye&&ze.render(y);for(let we=0,Ve=Se.length;we<Ve;we++){const Ze=Se[we];tl(w,y,Ze,Ze.viewport)}}else fe.length>0&&nl(xe,fe,y,D),Ye&&ze.render(y),tl(w,y,D)}ne!==null&&Y===0&&(Z.updateMultisampleRenderTarget(ne),Z.updateRenderTargetMipmap(ne)),H&&b.end(C),y.isScene===!0&&y.onAfterRender(C,y,D),me.resetDefaultState(),q=-1,Q=null,v.pop(),v.length>0?(E=v[v.length-1],Z.setTextureUnits(E.state.textureUnits),se===!0&&Ae.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,N!==null&&N.renderEnd()};function ca(y,D,X,H){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLightProbeGrid)E.pushLightProbeGrid(y);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(qe)){H&&vt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(be);const xe=j.update(y),fe=y.material;fe.visible&&w.push(y,xe,fe,X,vt.z,null,D)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(qe))){const xe=j.update(y),fe=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),vt.copy(y.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),vt.copy(xe.boundingSphere.center)),vt.applyMatrix4(y.matrixWorld).applyMatrix4(be)),Array.isArray(fe)){const Se=xe.groups;for(let we=0,Ve=Se.length;we<Ve;we++){const Ze=Se[we],Me=fe[Ze.materialIndex];Me&&Me.visible&&w.push(y,xe,Me,X,vt.z,Ze,D)}}else fe.visible&&w.push(y,xe,fe,X,vt.z,null,D)}}const pe=y.children;for(let xe=0,fe=pe.length;xe<fe;xe++)ca(pe[xe],D,X,H)}function tl(y,D,X,H){const{opaque:G,transmissive:pe,transparent:xe}=y;E.setupLightsView(X),se===!0&&Ae.setGlobalState(C.clippingPlanes,X),H&&_.viewport(te.copy(H)),G.length>0&&Us(G,D,X),pe.length>0&&Us(pe,D,X),xe.length>0&&Us(xe,D,X),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function nl(y,D,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){const Me=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new on(1,1,{generateMipmaps:!0,type:Me?Ln:rn,minFilter:ui,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const pe=E.state.transmissionRenderTarget[H.id],xe=H.viewport||te;pe.setSize(xe.z*C.transmissionResolutionScale,xe.w*C.transmissionResolutionScale);const fe=C.getRenderTarget(),Se=C.getActiveCubeFace(),we=C.getActiveMipmapLevel();C.setRenderTarget(pe),C.getClearColor(it),Ke=C.getClearAlpha(),Ke<1&&C.setClearColor(16777215,.5),C.clear(),Ye&&ze.render(X);const Ve=C.toneMapping;C.toneMapping=Rn;const Ze=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),se===!0&&Ae.setGlobalState(C.clippingPlanes,H),Us(y,X,H),Z.updateMultisampleRenderTarget(pe),Z.updateRenderTargetMipmap(pe),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let at=0,bt=D.length;at<bt;at++){const gt=D[at],{object:ut,geometry:Ot,material:_e,group:Ht}=gt;if(_e.side===jt&&ut.layers.test(H.layers)){const et=_e.side;_e.side=Zt,_e.needsUpdate=!0,il(ut,X,H,Ot,_e,Ht),_e.side=et,_e.needsUpdate=!0,Me=!0}}Me===!0&&(Z.updateMultisampleRenderTarget(pe),Z.updateRenderTargetMipmap(pe))}C.setRenderTarget(fe,Se,we),C.setClearColor(it,Ke),Ze!==void 0&&(H.viewport=Ze),C.toneMapping=Ve}function Us(y,D,X){const H=D.isScene===!0?D.overrideMaterial:null;for(let G=0,pe=y.length;G<pe;G++){const xe=y[G],{object:fe,geometry:Se,group:we}=xe;let Ve=xe.material;Ve.allowOverride===!0&&H!==null&&(Ve=H),fe.layers.test(X.layers)&&il(fe,D,X,Se,Ve,we)}}function il(y,D,X,H,G,pe){N!==null&&G.isNodeMaterial&&N.setObject(y,G),y.onBeforeRender(C,D,X,H,G,pe),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(C,D,X,H,y,pe),G.transparent===!0&&G.side===jt&&G.forceSinglePass===!1?(G.side=Zt,G.needsUpdate=!0,C.renderBufferDirect(X,D,H,G,y,pe),G.side=pi,G.needsUpdate=!0,C.renderBufferDirect(X,D,H,G,y,pe),G.side=jt):C.renderBufferDirect(X,D,H,G,y,pe),y.onAfterRender(C,D,X,H,G,pe)}function Fs(y,D,X){D.isScene!==!0&&(D=Rt);const H=W.get(y),G=E.state.lights,pe=E.state.shadowsArray,xe=G.state.version,fe=oe.getParameters(y,G.state,pe,D,X,E.state.lightProbeGridArray),Se=oe.getProgramCacheKey(fe);let we=H.programs;H.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,H.fog=D.fog;const Ve=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;H.envMap=re.get(y.envMap||H.environment,Ve),H.envMapRotation=H.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,we===void 0&&(y.addEventListener("dispose",xn),we=new Map,H.programs=we);let Ze=we.get(Se);if(Ze!==void 0){if(H.currentProgram===Ze&&H.lightsStateVersion===xe)return rl(y,fe),Ze}else fe.uniforms=oe.getUniforms(y),N!==null&&y.isNodeMaterial&&N.build(y,X,fe),y.onBeforeCompile(fe,C),Ze=oe.acquireProgram(fe,Se),we.set(Se,Ze),H.uniforms=fe.uniforms;const Me=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Me.clippingPlanes=Ae.uniform),rl(y,fe),H.needsLights=Ld(y),H.lightsStateVersion=xe,H.needsLights&&(Me.ambientLightColor.value=G.state.ambient,Me.lightProbe.value=G.state.probe,Me.sunLights.value=G.state.sun,Me.sunLightShadows.value=G.state.sunShadow,Me.directionalLights.value=G.state.directional,Me.directionalLightShadows.value=G.state.directionalShadow,Me.spotLights.value=G.state.spot,Me.spotLightShadows.value=G.state.spotShadow,Me.rectAreaLights.value=G.state.rectArea,Me.ltc_1.value=G.state.rectAreaLTC1,Me.ltc_2.value=G.state.rectAreaLTC2,Me.pointLights.value=G.state.point,Me.pointLightShadows.value=G.state.pointShadow,Me.hemisphereLights.value=G.state.hemi,Me.sunShadowMatrix.value=G.state.sunShadowMatrix,Me.sunShadowCascade.value=G.state.sunShadowCascade,Me.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Me.spotLightMatrix.value=G.state.spotLightMatrix,Me.spotLightMap.value=G.state.spotLightMap,Me.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=E.state.lightProbeGridArray.length>0,H.currentProgram=Ze,H.uniformsList=null,Ze}function sl(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=wr.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function rl(y,D){const X=W.get(y);X.outputColorSpace=D.outputColorSpace,X.batching=D.batching,X.batchingColor=D.batchingColor,X.instancing=D.instancing,X.instancingColor=D.instancingColor,X.instancingMorph=D.instancingMorph,X.skinning=D.skinning,X.morphTargets=D.morphTargets,X.morphNormals=D.morphNormals,X.morphColors=D.morphColors,X.morphTargetsCount=D.morphTargetsCount,X.numClippingPlanes=D.numClippingPlanes,X.numIntersection=D.numClipIntersection,X.vertexAlphas=D.vertexAlphas,X.vertexTangents=D.vertexTangents,X.toneMapping=D.toneMapping}function Rd(y,D){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;S.setFromMatrixPosition(D.matrixWorld);for(let X=0,H=y.length;X<H;X++){const G=y[X];if(G.texture!==null&&G.boundingBox.containsPoint(S))return G}return null}function Cd(y,D,X,H,G){D.isScene!==!0&&(D=Rt),Z.resetTextureUnits();const pe=D.fog,xe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?D.environment:null,fe=ne===null?C.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Je.workingColorSpace,Se=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,we=re.get(H.envMap||xe,Se),Ve=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ze=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Me=!!X.morphAttributes.position,at=!!X.morphAttributes.normal,bt=!!X.morphAttributes.color;let gt=Rn;H.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(gt=C.toneMapping);const ut=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ot=ut!==void 0?ut.length:0,_e=W.get(H),Ht=E.state.lights;if(se===!0&&(Ie===!0||y!==Q)){const mt=y===Q&&H.id===q;Ae.setState(H,y,mt)}let et=!1;H.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Ht.state.version||_e.outputColorSpace!==fe||G.isBatchedMesh&&_e.batching===!1||!G.isBatchedMesh&&_e.batching===!0||G.isBatchedMesh&&_e.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&_e.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&_e.instancing===!1||!G.isInstancedMesh&&_e.instancing===!0||G.isSkinnedMesh&&_e.skinning===!1||!G.isSkinnedMesh&&_e.skinning===!0||G.isInstancedMesh&&_e.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&_e.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&_e.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&_e.instancingMorph===!1&&G.morphTexture!==null||_e.envMap!==we||H.fog===!0&&_e.fog!==pe||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Ae.numPlanes||_e.numIntersection!==Ae.numIntersection)||_e.vertexAlphas!==Ve||_e.vertexTangents!==Ze||_e.morphTargets!==Me||_e.morphNormals!==at||_e.morphColors!==bt||_e.toneMapping!==gt||_e.morphTargetsCount!==Ot||!!_e.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,_e.__version=H.version);let en=_e.currentProgram;et===!0&&(en=Fs(H,D,G),N&&H.isNodeMaterial&&N.onUpdateProgram(H,en,_e));let yn=!1,Wn=!1,wi=!1;const lt=en.getUniforms(),Mt=_e.uniforms;if(_.useProgram(en.program)&&(yn=!0,Wn=!0,wi=!0),H.id!==q&&(q=H.id,Wn=!0),_e.needsLights){const mt=Rd(E.state.lightProbeGridArray,G);_e.lightProbeGrid!==mt&&(_e.lightProbeGrid=mt,Wn=!0)}if(yn||Q!==y){_.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),lt.setValue(F,"projectionMatrix",y.projectionMatrix),lt.setValue(F,"viewMatrix",y.matrixWorldInverse);const qn=lt.map.cameraPosition;qn!==void 0&&qn.setValue(F,Ue.setFromMatrixPosition(y.matrixWorld)),A.logarithmicDepthBuffer&&lt.setValue(F,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&lt.setValue(F,"isOrthographic",y.isOrthographicCamera===!0),Q!==y&&(Q=y,Wn=!0,wi=!0)}if(_e.needsLights&&(Ht.state.sunShadowMap.length>0&&lt.setValue(F,"sunShadowMap",Ht.state.sunShadowMap,Z),Ht.state.directionalShadowMap.length>0&&lt.setValue(F,"directionalShadowMap",Ht.state.directionalShadowMap,Z),Ht.state.spotShadowMap.length>0&&lt.setValue(F,"spotShadowMap",Ht.state.spotShadowMap,Z),Ht.state.pointShadowMap.length>0&&lt.setValue(F,"pointShadowMap",Ht.state.pointShadowMap,Z)),G.isSkinnedMesh){lt.setOptional(F,G,"bindMatrix"),lt.setOptional(F,G,"bindMatrixInverse");const mt=G.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),lt.setValue(F,"boneTexture",mt.boneTexture,Z))}G.isBatchedMesh&&(lt.setOptional(F,G,"batchingTexture"),lt.setValue(F,"batchingTexture",G._matricesTexture,Z),lt.setOptional(F,G,"batchingIdTexture"),lt.setValue(F,"batchingIdTexture",G._indirectTexture,Z),lt.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&lt.setValue(F,"batchingColorTexture",G._colorsTexture,Z));const Xn=X.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&U.update(G,X,en),(Wn||_e.receiveShadow!==G.receiveShadow)&&(_e.receiveShadow=G.receiveShadow,lt.setValue(F,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&D.environment!==null&&(Mt.envMapIntensity.value=D.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=_v()),Wn){if(lt.setValue(F,"toneMappingExposure",C.toneMappingExposure),_e.needsLights&&Pd(Mt,wi),pe&&H.fog===!0&&Te.refreshFogUniforms(Mt,pe),Te.refreshMaterialUniforms(Mt,H,ee,$,E.state.transmissionRenderTarget[y.id]),_e.needsLights&&_e.lightProbeGrid){const mt=_e.lightProbeGrid;Mt.probesSH.value=mt.texture,Mt.probesMin.value.copy(mt.boundingBox.min),Mt.probesMax.value.copy(mt.boundingBox.max),Mt.probesResolution.value.copy(mt.resolution)}wr.upload(F,sl(_e),Mt,Z)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(wr.upload(F,sl(_e),Mt,Z),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&lt.setValue(F,"center",G.center),lt.setValue(F,"modelViewMatrix",G.modelViewMatrix),lt.setValue(F,"normalMatrix",G.normalMatrix),lt.setValue(F,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const mt=H.uniformsGroups;for(let qn=0,Ti=mt.length;qn<Ti;qn++){const ol=mt[qn];ie.update(ol,en),ie.bind(ol,en)}}return en}function Pd(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.sunLights.needsUpdate=D,y.sunLightShadows.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function Ld(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(y,D,X){const H=W.get(y);H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),W.get(y.texture).__webglTexture=D,W.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,D){const X=W.get(y);X.__webglFramebuffer=D,X.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,X=0){ne=y,z=D,Y=X;let H=null,G=!1,pe=!1;if(y){const fe=W.get(y);if(fe.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(F.FRAMEBUFFER,fe.__webglFramebuffer),te.copy(y.viewport),Re.copy(y.scissor),ye=y.scissorTest,_.viewport(te),_.scissor(Re),_.setScissorTest(ye),q=-1;return}else if(fe.__webglFramebuffer===void 0)Z.setupRenderTarget(y);else if(fe.__hasExternalTextures)Z.rebindTextures(y,W.get(y.texture).__webglTexture,W.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ve=y.depthTexture;if(fe.__boundDepthTexture!==Ve){if(Ve!==null&&W.has(Ve)&&(y.width!==Ve.image.width||y.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(y)}}const Se=y.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(pe=!0);const we=W.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(we[D])?H=we[D][X]:H=we[D],G=!0):y.samples>0&&Z.useMultisampledRTT(y)===!1?H=W.get(y).__webglMultisampledFramebuffer:Array.isArray(we)?H=we[X]:H=we,te.copy(y.viewport),Re.copy(y.scissor),ye=y.scissorTest}else te.copy(ge).multiplyScalar(ee).floor(),Re.copy(Ge).multiplyScalar(ee).floor(),ye=_t;if(X!==0&&(H=B),_.bindFramebuffer(F.FRAMEBUFFER,H)&&_.drawBuffers(y,H),_.viewport(te),_.scissor(Re),_.setScissorTest(ye),G){const fe=W.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,fe.__webglTexture,X)}else if(pe){const fe=D;for(let Se=0;Se<y.textures.length;Se++){const we=W.get(y.textures[Se]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Se,we.__webglTexture,X,fe)}}else if(y!==null&&X!==0){const fe=W.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,fe.__webglTexture,X)}q=-1};function al(y){const D=W.get(y);return(D.__readFormat!==y.format||D.__readType!==y.type)&&(D.__readFormat=y.format,D.__readType=y.type,D.__formatReadable=A.textureFormatReadable(y.format),D.__typeReadable=A.textureTypeReadable(y.type)),D}this.readRenderTargetPixels=function(y,D,X,H,G,pe,xe,fe=0){if(!(y&&y.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=W.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se){_.bindFramebuffer(F.FRAMEBUFFER,Se);try{const we=y.textures[fe],Ve=we.format,Ze=we.type;y.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+fe);const Me=al(we);if(Me.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-H&&X>=0&&X<=y.height-G&&F.readPixels(D,X,H,G,he.convert(Ve),he.convert(Ze),pe)}finally{const we=ne!==null?W.get(ne).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(y,D,X,H,G,pe,xe,fe=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=W.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se)if(D>=0&&D<=y.width-H&&X>=0&&X<=y.height-G){_.bindFramebuffer(F.FRAMEBUFFER,Se);const we=y.textures[fe],Ve=we.format,Ze=we.type;y.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+fe);const Me=al(we);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,at),F.bufferData(F.PIXEL_PACK_BUFFER,pe.byteLength,F.STREAM_READ),F.readPixels(D,X,H,G,he.convert(Ve),he.convert(Ze),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const bt=ne!==null?W.get(ne).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,bt);const gt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Ff(F,gt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,at),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,pe),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(at),F.deleteSync(gt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,D=null,X=0){const H=Math.pow(2,-X),G=Math.floor(y.image.width*H),pe=Math.floor(y.image.height*H),xe=D!==null?D.x:0,fe=D!==null?D.y:0;Z.setTexture2D(y,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,xe,fe,G,pe),_.unbindTexture()},this.copyTextureToTexture=function(y,D,X=null,H=null,G=0,pe=0){let xe,fe,Se,we,Ve,Ze,Me,at,bt;const gt=y.isCompressedTexture?y.mipmaps[pe]:y.image;if(X!==null)xe=X.max.x-X.min.x,fe=X.max.y-X.min.y,Se=X.isBox3?X.max.z-X.min.z:1,we=X.min.x,Ve=X.min.y,Ze=X.isBox3?X.min.z:0;else{const Mt=Math.pow(2,-G);xe=Math.floor(gt.width*Mt),fe=Math.floor(gt.height*Mt),y.isDataArrayTexture?Se=gt.depth:y.isData3DTexture?Se=Math.floor(gt.depth*Mt):Se=1,we=0,Ve=0,Ze=0}H!==null?(Me=H.x,at=H.y,bt=H.z):(Me=0,at=0,bt=0);const ut=he.convert(D.format),Ot=he.convert(D.type);let _e;D.isData3DTexture?(Z.setTexture3D(D,0),_e=F.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Z.setTexture2DArray(D,0),_e=F.TEXTURE_2D_ARRAY):(Z.setTexture2D(D,0),_e=F.TEXTURE_2D),_.activeTexture(F.TEXTURE0),_.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,D.flipY),_.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_.pixelStorei(F.UNPACK_ALIGNMENT,D.unpackAlignment);const Ht=_.getParameter(F.UNPACK_ROW_LENGTH),et=_.getParameter(F.UNPACK_IMAGE_HEIGHT),en=_.getParameter(F.UNPACK_SKIP_PIXELS),yn=_.getParameter(F.UNPACK_SKIP_ROWS),Wn=_.getParameter(F.UNPACK_SKIP_IMAGES);_.pixelStorei(F.UNPACK_ROW_LENGTH,gt.width),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt.height),_.pixelStorei(F.UNPACK_SKIP_PIXELS,we),_.pixelStorei(F.UNPACK_SKIP_ROWS,Ve),_.pixelStorei(F.UNPACK_SKIP_IMAGES,Ze);const wi=y.isDataArrayTexture||y.isData3DTexture,lt=D.isDataArrayTexture||D.isData3DTexture;if(y.isDepthTexture){const Mt=W.get(y),Xn=W.get(D),mt=W.get(Mt.__renderTarget),qn=W.get(Xn.__renderTarget);_.bindFramebuffer(F.READ_FRAMEBUFFER,mt.__webglFramebuffer),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Ti=0;Ti<Se;Ti++)wi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(y).__webglTexture,G,Ze+Ti),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(D).__webglTexture,pe,bt+Ti)),F.blitFramebuffer(we,Ve,xe,fe,Me,at,xe,fe,F.DEPTH_BUFFER_BIT,F.NEAREST);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||y.isRenderTargetTexture||W.has(y)){const Mt=W.get(y),Xn=W.get(D);_.bindFramebuffer(F.READ_FRAMEBUFFER,I),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,V);for(let mt=0;mt<Se;mt++)wi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Mt.__webglTexture,G,Ze+mt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Mt.__webglTexture,G),lt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xn.__webglTexture,pe,bt+mt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Xn.__webglTexture,pe),G!==0?F.blitFramebuffer(we,Ve,xe,fe,Me,at,xe,fe,F.COLOR_BUFFER_BIT,F.NEAREST):lt?F.copyTexSubImage3D(_e,pe,Me,at,bt+mt,we,Ve,xe,fe):F.copyTexSubImage2D(_e,pe,Me,at,we,Ve,xe,fe);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else lt?y.isDataTexture||y.isData3DTexture?F.texSubImage3D(_e,pe,Me,at,bt,xe,fe,Se,ut,Ot,gt.data):D.isCompressedArrayTexture?F.compressedTexSubImage3D(_e,pe,Me,at,bt,xe,fe,Se,ut,gt.data):F.texSubImage3D(_e,pe,Me,at,bt,xe,fe,Se,ut,Ot,gt):y.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,pe,Me,at,xe,fe,ut,Ot,gt.data):y.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,pe,Me,at,gt.width,gt.height,ut,gt.data):F.texSubImage2D(F.TEXTURE_2D,pe,Me,at,xe,fe,ut,Ot,gt);_.pixelStorei(F.UNPACK_ROW_LENGTH,Ht),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,et),_.pixelStorei(F.UNPACK_SKIP_PIXELS,en),_.pixelStorei(F.UNPACK_SKIP_ROWS,yn),_.pixelStorei(F.UNPACK_SKIP_IMAGES,Wn),pe===0&&D.generateMipmaps&&F.generateMipmap(_e),_.unbindTexture()},this.initRenderTarget=function(y){W.get(y).__webglFramebuffer===void 0&&Z.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Z.setTextureCube(y,0):y.isData3DTexture?Z.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Z.setTexture2DArray(y,0):Z.setTexture2D(y,0),_.unbindTexture()},this.resetState=function(){z=0,Y=0,ne=null,_.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}function Ts(i,e,t=new P){return i.position.set(.34,-.25,e==="sniper"?-1.95:-1.3),i.updateWorldMatrix(!0,!1),i.getWorldPosition(t)}class Cu{constructor(e,t){this.coarse=t,this.el.className="co-pickup-feedback",this.el.hidden=!0,this.el.setAttribute("role","status"),this.el.setAttribute("aria-live","polite"),e.append(this.el)}el=document.createElement("div");queue=[];remaining=0;seen=new Set;push(e,t){if(t){if(this.seen.has(t))return;this.seen.add(t),this.seen.size>256&&this.seen.delete(this.seen.values().next().value)}this.queue.length<3&&this.queue.push(e),this.remaining||this.next()}next(){const e=this.queue.shift();if(this.el.hidden=!e,!e)return;const t=Et[e.weapon];this.el.dataset.level=String(e.level),this.el.style.setProperty("--weapon",`#${t.color.toString(16).padStart(6,"0")}`);const n=e.kind==="unlock"?"取得新武器":e.kind==="upgrade"?`升至 Lv.${e.level}`:e.kind==="boost"?"滿級・快速換彈":"滿級・彈藥補滿",s=e.kind==="unlock"?this.coarse?"點擊武器庫選擇裝備":"按 Q 開啟武器庫裝備":e.kind==="upgrade"?`${e.previousCapacity} → ${e.capacity} 發彈匣 · 已補滿`:e.kind==="boost"?"換彈時間 -25% · 持續 8 秒・重拾刷新":`${e.capacity} 發彈匣 · +${e.ammoAdded} 發`;this.el.replaceChildren();const r=document.createElement("span"),a=document.createElement("div"),o=document.createElement("strong"),c=document.createElement("b"),l=document.createElement("small");r.textContent=t.icon,o.textContent=n,c.textContent=`${t.label} · Lv.${e.level}`,l.textContent=s,a.append(o,c,l),this.el.append(r,a),this.remaining=2}update(e){this.remaining&&(this.remaining=Math.max(0,this.remaining-e),this.remaining||this.next())}dispose(){this.el.remove(),this.queue=[],this.seen.clear()}}const mh=[12044504,5432544,16765543];class Pu{signature="";parts=[];material=new nt({color:mh[0]});accent=new nt;constructor(e){const t=[[[.012,.045,.62],[.438,-.28,-.8]],[[.15,.22,.16],[.34,-.45,-.67]],[[.012,.035,.62],[.242,-.28,-.8]],[[.14,.025,.32],[.34,-.185,-.84]]];for(const[n,s]of t){const r=new Fe(new yt(n[0],n[1],n[2]),this.parts.length===3?this.accent:this.material);r.position.set(s[0],s[1],s[2]),r.visible=!1,e.add(r),this.parts.push(r)}}update(e,t){const n=`${e}:${t}`;n!==this.signature&&(this.signature=n,this.material.color.setHex(mh[t-1]),this.accent.color.setHex(Et[e].color),this.parts.forEach((s,r)=>s.visible=t>=2&&(r<2||t===3)))}}const Lu={boxes:Yt,heightAt:ss},Zi=i=>({x:i[0],y:i[1],z:i[2]}),vv=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],Wa=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]],Tr=i=>Math.hypot(...i),Xr=i=>{const e=Tr(i)||1;return i.map(t=>t/e)},qr=(i,e,t)=>[i[0]+e[0]*t,i[1]+e[1]*t,i[2]+e[2]*t],Oc=12*Math.PI/180;function Iu(i){const e=i.y-En;return[[0,1.22,0],[0,1.92,0],[-.28,1.22,0],[.28,1.22,0],[0,.46,0]].map(([t,n,s])=>[i.x+t,e+n,i.z+s])}const Qo=(i,e)=>[-Math.sin(i)*Math.cos(e),Math.sin(e),-Math.cos(i)*Math.cos(e)];function ec(i,e,t){const n=Xr(Math.abs(i[1])>.999?[1,0,0]:[-i[2],0,i[0]]),s=[n[1]*i[2]-n[2]*i[1],n[2]*i[0]-n[0]*i[2],n[0]*i[1]-n[1]*i[0]];return Xr([i[0]+n[0]*e+s[0]*t,i[1]+n[1]*e+s[1]*t,i[2]+n[2]*e+s[2]*t])}function xv(i,e,t=!1,n=1){const s=Et[i],r=s.falloff,a=r?1-(1-r.minimum)*Math.max(0,Math.min(1,(e-r.start)/(r.end-r.start))):1;return Math.max(1,Math.round(s.damage*Kr(n)*a*(t?s.headshot??1:1)))}function Du(i,e,t,n){const s=Math.cos(t.yaw),r=Math.sin(t.yaw),a=i[0]-t.x,o=i[2]-t.z,c={x:s*a-r*o,y:i[1]-(t.y-En),z:r*a+s*o},l={x:s*e[0]-r*e[2],y:e[1],z:r*e[0]+s*e[2]},h=[{kind:"head",minX:-.26,maxX:.26,minY:1.66,maxY:2.18,minZ:-.26,maxZ:.26},{kind:"body",minX:-.15,maxX:.15,minY:1.63,maxY:1.66,minZ:-.14,maxZ:.14},{kind:"body",minX:-.34,maxX:.34,minY:.81,maxY:1.63,minZ:-.19,maxZ:.19},...[-1,1].map(u=>({kind:"body",minX:u*.48-.08,maxX:u*.48+.08,minY:1.03,maxY:1.61,minZ:-.08,maxZ:.08})),...[-1,1].map(u=>({kind:"body",minX:u*.22-.095,maxX:u*.22+.095,minY:.125,maxY:.795,minZ:-.095,maxZ:.095}))];let d;for(const u of h){const p=Oh(c,l,u,n);p!==null&&(!d||p<d.distance)&&(d={distance:p,kind:u.kind})}return d}function Ar(i,e,t,n,s=Lu){let r=gn(Zi(i),Zi(e),t,s),a=r<t?"wall":"range",o;for(const c of n){if(!c.alive)continue;const l=Du(i,e,c,r);l&&l.distance<r&&(r=l.distance,a=l.kind,o=c.id)}return{dir:e,end:qr(i,e,r),kind:a,targetId:o}}function Nu(i,e,t,n,s=Math.random,r=Lu,a=!1,o=1){const c=Et[i],l=Jr(i,o),h=c.damage*Kr(o),d=a?c.scopedSpread??c.spread:c.spread,u=[],p=new Map,g=(x,m,f,M)=>{const T=p.get(x);T?(T.damage+=m,T.headshot||=f):p.set(x,{targetId:x,damage:m,headshot:f,position:M})};if(i==="flame"){const x=Oc;u.push(Ar(e,t,l,n,r));for(let m=0;m<24;m++){const f=Math.sqrt((m+.5)/24)*Math.tan(x),M=m*2.399963,T=ec(t,Math.cos(M)*f,Math.sin(M)*f);u.push(Ar(e,T,l,n,r))}for(const m of n){if(!m.alive)continue;let f;for(const M of Iu(m)){const T=Wa(M,e),S=Tr(T);if(S>l||S<.001)continue;const w=Xr(T),E=Math.acos(Math.max(-1,Math.min(1,vv(w,t))));E<=x&&gn(Zi(e),Zi(w),S,r)>=S-.001&&(!f||E<f.angle)&&(f={position:M,angle:E})}f&&g(m.id,Math.round(h*(1-.4*f.angle/x)),!1,f.position)}}else{for(let x=0;x<(c.pellets??1);x++){const m=ec(t,(s()-.5)*d,(s()-.5)*d),f=Ar(e,m,l,n,r);u.push(f),i!=="rocket"&&f.targetId&&g(f.targetId,xv(i,Tr(Wa(f.end,e)),f.kind==="head",o),f.kind==="head",f.end)}if(i==="rocket"){const x=u[0];if(x.kind!=="range"){const m=qr(x.end,x.dir,-.06);for(const f of n){if(!f.alive)continue;const M=[f.x,f.y-En+1.22,f.z],T=Wa(M,m),S=Tr(T);f.id===x.targetId?g(f.id,Math.round(h),!1,x.end):S<(c.splash??0)&&gn(Zi(m),Zi(Xr(T)),S,r)>=S-.001&&g(f.id,Math.max(1,Math.round(h*(1-S/c.splash))),!1,M)}}}}return{rays:u,hits:[...p.values()]}}class yv{constructor(e="kill"){this.prefix=e}states=new Map;sequence=0;reset(){this.states.clear()}death(e){this.states.delete(e)}remove(e){this.states.delete(e)}record(e,t,n,s,r){this.death(t.id);const a=this.states.get(e.id),o=e.alive?{last:r,multi:a&&r-a.last<=4e3?a.multi+1:1,streak:(a?.streak??0)+1}:{last:r,multi:0,streak:0};e.alive&&this.states.set(e.id,o);const c={3:"勢如破竹",5:"大殺特殺",7:"無人能擋",10:"戰場主宰"};return{eventId:`${this.prefix}:${++this.sequence}`,at:r,attackerId:e.id,attackerName:e.name,victimId:t.id,victimName:t.name,weapon:n,headshot:s,multi:o.multi,streak:o.streak,title:c[o.streak]}}}function Uu(i,e,t,n,s,r=1){const a=Jr(i,r),o=Math.max(fc,a+2),c={x:e[0],y:e[1],z:e[2]},l=gn(c,{x:t[0],y:t[1],z:t[2]},o,s);let h=l,d=l<o?"blocked":"neutral";for(const p of n){if(!p.alive)continue;const g=Du(e,t,p,h);g&&g.distance<h&&(h=g.distance,d=h<=a?"in-range":"out-of-range")}if(i!=="flame")return d;let u=1/0;for(const p of n)if(p.alive)for(const g of Iu(p)){const x=g[0]-e[0],m=g[1]-e[1],f=g[2]-e[2],M=Math.hypot(x,m,f);if(M<.001||M>o)continue;const T={x:x/M,y:m/M,z:f/M};T.x*t[0]+T.y*t[1]+T.z*t[2]<Math.cos(Oc)||gn(c,T,M,s)>=M-.001&&(u=Math.min(u,M))}return u<1/0?u<=a?"in-range":"out-of-range":d==="blocked"?"blocked":"neutral"}function Fu(i){return{origin:[i.x,i.y,i.z],direction:Qo(i.yaw,i.pitch)}}class Ou{constructor(e){this.root=e,this.label.className="co-aim-feedback",this.label.hidden=!0,e.append(this.label),e.addEventListener("combat:reset",this.reset),e.addEventListener("armory:open",this.reset)}label=document.createElement("span");state="";reset=()=>this.update("neutral",!1);update(e,t){const n=t&&(e==="in-range"||e==="out-of-range")?e:"neutral";n!==this.state&&(this.state=n,this.root.dataset.aimState=n,this.label.textContent=n==="in-range"?"射程內":n==="out-of-range"?"超出射程":"",this.label.hidden=n==="neutral")}dispose(){this.root.removeEventListener("combat:reset",this.reset),this.root.removeEventListener("armory:open",this.reset),delete this.root.dataset.aimState,this.label.remove()}}const Bc=.15;class Bu{antialias=!0;pixelRatio;impactLimit;constructor(){const e=matchMedia("(pointer:coarse)").matches,t=navigator.deviceMemory??4,n=(navigator.hardwareConcurrency||4)<=4||t<=3;this.pixelRatio=Math.min(devicePixelRatio,e?n?1:1.6:2),this.impactLimit=n?8:16}}class ku{constructor(e,t,n){this.root=e,this.gun=t,this.coarse=n,this.shell=document.createElement("div"),this.shell.className="co-scope",this.shell.hidden=!0,this.shell.setAttribute("aria-hidden","true"),this.shell.innerHTML=`<div class="co-scope-shade"></div><div class="co-scope-frame">
      <svg viewBox="0 0 100 100" aria-hidden="true"><path fill="black" fill-rule="evenodd" d="M25 0H75L100 50 75 100H25L0 50ZM80 50a30 30 0 1 0-60 0 30 30 0 1 0 60 0"/></svg>
      <div class="co-scope-reticle"><i></i><b></b><span></span></div><div class="co-scope-stock"></div></div>`,e.append(this.shell),this.overlayCamera.position.z=1,this.overlay.add(this.plane);const s=new Fe(new yt(.1,.1,1.6),new nt({color:1053726}));s.position.set(.34,-.25,-1.15);const r=new Fe(new vi(.09,.09,.34,6),new nt({color:527120}));r.rotation.x=Math.PI/2,r.position.set(.34,-.12,-.7),this.gunParts.add(s,r),t.add(this.gunParts),this.gunParts.visible=!1,e.addEventListener("combat:reset",this.reset),e.addEventListener("armory:open",this.reset)}shell;lens=new qt(75,1,Bc,420);target=new on(256,256);overlay=new Pc;overlayCamera=new Fc(-1,1,1,-1,0,2);material=new Qt({uniforms:{map:{value:this.target.texture}},depthTest:!1,depthWrite:!1,transparent:!0,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`uniform sampler2D map;varying vec2 vUv;
      void main(){
        if(distance(vUv,vec2(.5))>.5)discard;
        gl_FragColor=texture2D(map,vUv);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`});plane=new Fe(new xi(2,2),this.material);scoped=!1;gunParts=new $t;reset=()=>{this.scoped=!1,this.shell.hidden=!0,this.root.classList.remove("co-scoped")};update(e,t,n,s,r){this.scoped=e==="sniper"&&!!t.aim&&n&&!s&&!r,this.shell.hidden=!this.scoped,this.root.classList.toggle("co-scoped",this.scoped),this.root.querySelector("[data-sprint]")?.setAttribute("aria-pressed",String(!!t.sprint&&n));const a=this.root.querySelector("[data-aim]");return a&&(a.disabled=e!=="sniper",a.setAttribute("aria-pressed",String(this.scoped))),this.gunParts.visible=e==="sniper",this.scoped}render(e,t,n){if(this.gun.visible=!this.scoped,e.render(t,n),this.gun.visible=!0,!this.scoped)return;this.target.samples=Math.min(4,e.capabilities.maxSamples);const s=this.root.clientWidth,r=this.root.clientHeight,a=Math.min(r*.58,s*.44),o=a*.6;this.root.style.setProperty("--scope-size",`${a}px`),this.root.style.setProperty("--lens-size",`${o}px`);const c=Math.max(64,Math.min(this.coarse?512:768,Math.ceil(o*e.getPixelRatio())));this.target.width!==c&&this.target.setSize(c,c),this.lens.position.copy(n.position),this.lens.quaternion.copy(n.quaternion),this.lens.fov=n.fov,this.lens.zoom=4*r/o,this.lens.near=n.near,this.lens.far=n.far,this.lens.updateProjectionMatrix(),this.gun.visible=!1;const l=e.getRenderTarget(),h=e.autoClear;e.setRenderTarget(this.target),e.render(t,this.lens),e.setRenderTarget(l),this.gun.visible=!0,this.plane.scale.set(o/s,o/r,1),e.autoClear=!1,e.clearDepth(),e.render(this.overlay,this.overlayCamera),e.autoClear=h}dispose(){this.root.removeEventListener("combat:reset",this.reset),this.root.removeEventListener("armory:open",this.reset),this.reset(),this.shell.remove(),this.target.dispose(),this.plane.geometry.dispose(),this.material.dispose(),this.gunParts.traverse(e=>{e instanceof Fe&&(e.geometry.dispose(),e.material.dispose())}),this.gun.remove(this.gunParts)}}function ia(...i){const e=new Set,t=new Set,n=new Set,s=new Set;for(const r of i)r.traverse(a=>{if(a instanceof br&&s.add(a),(a instanceof Fe||a instanceof Ko||a instanceof kl)&&e.add(a.geometry),a instanceof Fe||a instanceof Ko||a instanceof kl||a instanceof uu)for(const o of Array.isArray(a.material)?a.material:[a.material])t.add(o)});for(const r of s)r.dispose();for(const r of t)for(const a of Object.values(r))a instanceof Ut&&n.add(a);for(const r of n)r.dispose();for(const r of t)r.dispose();for(const r of e)r.dispose()}class zu{constructor(e,t=!1){this.scene=e,this.coarse=t;const n=t?320:900;this.positions=new Float32Array(n*3),this.colors=new Float32Array(n*3),this.sizes=new Float32Array(n),this.alphas=new Float32Array(n),this.styles=new Float32Array(n),this.particles=Array.from({length:n},()=>({position:new P,velocity:new P,life:0,duration:1,size:0,color:new Oe,style:0}));for(const[s,r,a]of[["position",this.positions,3],["color",this.colors,3],["size",this.sizes,1],["alpha",this.alphas,1],["style",this.styles,1]])this.geometry.setAttribute(s,new cn(r,a).setUsage(Df));this.material=new Qt({transparent:!0,depthWrite:!1,depthTest:!0,blending:fi,uniforms:{time:{value:0}},vertexShader:`attribute float size;attribute float alpha;attribute float style;varying vec3 vColor;varying float vAlpha;varying float vStyle;
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
      }`,vertexColors:!0}),this.points=new Ko(this.geometry,this.material),this.points.frustumCulled=!1,this.group.add(this.points),this.beams=Array.from({length:t?32:64},()=>{const s=new Fe(this.cylinder,new nt({transparent:!0,depthWrite:!1,blending:ws})),r=new Fe(this.cylinder,new nt({color:16777215,transparent:!0,depthWrite:!1,blending:ws}));return s.visible=r.visible=!1,this.group.add(s,r),{mesh:s,core:r,life:0,duration:1}}),this.rings=Array.from({length:8},()=>{const s=new Fe(this.ringGeometry,new nt({transparent:!0,depthWrite:!1,side:jt,blending:ws}));return s.visible=!1,this.group.add(s),{mesh:s,life:0,duration:1,radius:1}}),this.flames=Array.from({length:t?24:48},()=>{const s=new Qt({transparent:!0,depthWrite:!1,depthTest:!0,side:jt,blending:fi,uniforms:{time:{value:0},opacity:{value:1}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float time;uniform float opacity;varying vec2 vUv;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}
      void main(){float n=noise(vec2(vUv.x*6.+time,vUv.y*9.-time*9.));float fine=noise(vec2(vUv.x*13.,vUv.y*17.-time*13.));float tongue=smoothstep(.25,.8,n*.75+fine*.35);float tip=1.-smoothstep(.65,1.,vUv.y);float ignition=smoothstep(0.,.06,vUv.y);vec3 color=mix(vec3(1.,.86,.34),vec3(1.,.16,.015),vUv.y);gl_FragColor=vec4(color,tongue*tip*ignition*opacity*.32);
      #include <colorspace_fragment>
      }`}),r=new Fe(this.flameGeometry,s);return r.visible=!1,this.group.add(r),{mesh:r,life:0}}),this.localFlames=this.flames.splice(0,t?5:9),e.add(this.group)}localFlames=[];localFlameTimer=0;group=new $t;particles;beams;rings;flames;flameCursor=0;flameGeometry=new vi(1,.25,1,8,1,!0);cursor=0;beamCursor=0;ringCursor=0;geometry=new At;material;points;cylinder=new vi(1,1,1,6,1,!0);ringGeometry=new Nc(.88,1,48);positions;colors;sizes;alphas;styles;particle(e,t,n,s,r=0,a){const o=this.particles[this.cursor++%this.particles.length];o.position.copy(e),o.color.setHex(t),o.size=n,o.life=o.duration=s,o.style=r,o.velocity.copy(a??new P((Math.random()-.5)*2,Math.random()*2,(Math.random()-.5)*2))}beam(e,t,n,s,r=.022,a){const o=this.beams[this.beamCursor++%this.beams.length],c=t.clone().sub(e),l=c.length();if(l<.01)return;o.mesh.position.copy(e).addScaledVector(c,.5),o.core.position.copy(o.mesh.position);const h=new Si().setFromUnitVectors(new P(0,1,0),c.normalize());o.mesh.quaternion.copy(h),o.core.quaternion.copy(h),o.mesh.scale.set(r,l,r),o.core.scale.set(r*.24,l,r*.24),o.mesh.material.color.setHex(n),o.life=o.duration=s,o.mesh.visible=o.core.visible=!0,o.localWeapon=a,o.end=a?t.clone():void 0}play(e,t,n=!0,s=!1,r=!0,a=!0){const o=Et[e.weapon],c=new P(...e.origin),l=e.weapon;if(n&&this.muzzle(t,l),r&&l==="flame"&&!s){const h=this.coarse?3:2;for(let d=0;d<e.rays.length;d+=h){const u=e.rays[d],p=new P(...u.end),g=p.clone().sub(t),x=g.length();if(x<.1)continue;const m=this.flames[this.flameCursor++%this.flames.length];m.mesh.position.copy(t).addScaledVector(g,.5),m.mesh.quaternion.setFromUnitVectors(new P(0,1,0),g.normalize()),m.mesh.scale.set(.05+x*.018,x,.05+x*.018),m.life=.16,m.mesh.visible=!0}for(let d=0;d<e.rays.length;d+=h){const u=e.rays[d],p=c.distanceTo(new P(...u.end));for(let g=0;g<(this.coarse?5:9);g++){const x=(g+.25)/(this.coarse?5:9),m=new P(...qr(e.origin,u.dir,p*x));p*x<1.3&&m.lerp(t,1-p*x/1.3),this.particle(m,x<.2?16774592:x<.6?16752686:16729633,.15+x*.4,.12+Math.random()*.12,1,new P(0,.4,0)),g%3===0&&this.particle(m,16755780,.055,.18,0,new P(0,.3,0))}}}else if(r&&l!=="flame")for(const h of e.rays){const d=new P(...h.end);if(this.beam(t,d,o.color,l==="smg"?.075:l==="ice"?.16:.105,l==="ice"?.035:l==="rocket"?.06:.02,s?l:void 0),l==="smg"){const u=d.clone().sub(t),p=new P(-u.z,0,u.x).normalize();let g=t.clone().lerp(d,.2);for(let x=1;x<=3;x++){const m=t.clone().lerp(d,.2+x*.12).addScaledVector(p,(x%2?1:-1)*.045);this.beam(g,m,16765021,.06,.007),g=m}}if(l==="ice"||l==="rocket"||l==="smg"){const u=this.coarse?4:10;for(let p=1;p<=u;p++){const g=t.clone().lerp(d,p/(u+1));this.particle(g,o.color,l==="rocket"?.48:l==="ice"?.16:.045,l==="rocket"?.4:.2,l==="rocket"?3:l==="ice"?2:0,new P(0,.12,0))}}}if(a){for(const[h,d]of e.rays.entries())if(d.kind!=="range"&&(l!=="flame"||h%4===0)){const u=new P(...d.end);this.impact(u,l,d.kind==="head",new P(...d.dir).negate())}}a&&l==="rocket"&&e.rays[0]?.kind!=="range"&&this.explosion(new P(...qr(e.rays[0].end,e.rays[0].dir,-.1)))}updateLocalMuzzle(e,t,n,s){const r=e.clone().sub(n),a=r.length(),o=a>.001&&gn(n,r.normalize(),a,s)<a-.01;for(const c of this.beams){if(!c.life||!c.localWeapon||!c.end)continue;if(c.localWeapon!==t){c.localWeapon=void 0;continue}const l=c.end.clone().sub(e),h=l.length();if(o||h<.01){c.mesh.visible=c.core.visible=!1;continue}l.normalize();const d=gn(e,l,h,s);c.mesh.visible=c.core.visible=d>.01,c.mesh.position.copy(e).addScaledVector(l,d*.5),c.core.position.copy(c.mesh.position),c.mesh.quaternion.setFromUnitVectors(new P(0,1,0),l),c.core.quaternion.copy(c.mesh.quaternion),c.mesh.scale.y=c.core.scale.y=d}}localFlame(e,t,n,s,r,a,o=[],c=1){if(this.localFlameTimer+=a,!e)return;const l=t.clone().sub(n),h=l.length();if(h>.001&&gn(n,l.normalize(),h,r)<h-.01){for(const g of this.localFlames)g.life=0,g.mesh.visible=!1;return}const d=this.localFlameTimer>=.04;d&&(this.localFlameTimer=0);const u=s.toArray(),p=n.toArray();this.localFlames.forEach((g,x)=>{const m=x?Math.tan(Oc)*.8:0,f=x*Math.PI*2/(this.localFlames.length-1),M=Ar(p,ec(u,Math.cos(f)*m,Math.sin(f)*m),Jr("flame",c),o,r),T=new P(...M.end).sub(t),S=T.length();if(S<.05||T.dot(s)<=0){g.life=0,g.mesh.visible=!1;return}T.normalize();const w=Math.min(S,gn(t,T,S,r));if(w<.05){g.life=0,g.mesh.visible=!1;return}g.mesh.position.copy(t).addScaledVector(T,w*.5),g.mesh.quaternion.setFromUnitVectors(new P(0,1,0),T),g.mesh.scale.set(.05+w*.018,w,.05+w*.018),g.life=.16,g.mesh.visible=!0;const E=g.mesh.material;if(E.uniforms.opacity.value=1,d)for(let R=1;R<=4;R++){const v=t.clone().addScaledVector(T,w*R/5);this.particle(v,R<2?16765803:16740394,.18+R*.07,.12,1,new P(0,.25,0))}})}muzzle(e,t){const n=Et[t].color;for(let s=0;s<(this.coarse?3:7);s++)this.particle(e,s===0?16777215:n,s===0?.32:.08,.04+Math.random()*.035)}impact(e,t,n,s){const r=t==="flame"?this.coarse?2:4:this.coarse?4:t==="ice"?16:10,a=n?16767593:Et[t].color;this.particle(e.clone().addScaledVector(s,.035),16777215,.26,.065);for(let o=0;o<r;o++){const c=new P((Math.random()-.5)*3,Math.random()*3,(Math.random()-.5)*3).addScaledVector(s,1);this.particle(e.clone().addScaledVector(s,.04),a,t==="ice"?.12:.055,.14+Math.random()*.2,t==="ice"?2:0,c)}t==="ice"&&this.particle(e.clone().addScaledVector(s,.05),8707583,.8,.32,3,new P)}explosion(e){const t=this.coarse?25:65;for(let s=0;s<t;s++)this.particle(e,s<10?16774613:s<t*.6?16741421:9666456,s<10?.55:.85,.18+Math.random()*.55,s<t*.6?1:3,new P((Math.random()-.5)*11,Math.random()*7,(Math.random()-.5)*11));const n=this.rings[this.ringCursor++%8];n.mesh.position.copy(e),n.mesh.rotation.x=-Math.PI/2,n.life=n.duration=.35,n.radius=5,n.mesh.material.color.setHex(16751449),n.mesh.visible=!0}status(e,t){this.particle(e,Et[t].color,t==="flame"?.22:.16,.22,t==="flame"?1:2,new P(0,.5,0))}update(e){this.material.uniforms.time.value+=e,this.particles.forEach((t,n)=>{t.life=Math.max(0,t.life-e),t.life&&(t.position.addScaledVector(t.velocity,e),(t.style===0||t.style===2)&&(t.velocity.y-=e*3)),t.position.toArray(this.positions,n*3),t.color.toArray(this.colors,n*3),this.sizes[n]=t.life?t.size*(t.style===3?1+(1-t.life/t.duration):1):0,this.alphas[n]=t.life/t.duration,this.styles[n]=t.style});for(const t of Object.values(this.geometry.attributes))t.needsUpdate=!0;for(const t of this.beams)t.life=Math.max(0,t.life-e),t.mesh.visible=t.core.visible=t.life>0,t.mesh.material.opacity=.32*t.life/t.duration,t.core.material.opacity=t.life/t.duration;for(const t of[this.flames,this.localFlames])for(const n of t){n.life=Math.max(0,n.life-e),n.mesh.visible=n.life>0;const s=n.mesh.material;s.uniforms.time.value=this.material.uniforms.time.value,s.uniforms.opacity.value=n.life/.16}for(const t of this.rings)t.life=Math.max(0,t.life-e),t.mesh.visible=t.life>0,t.mesh.scale.setScalar(Math.max(.01,t.radius*(1-t.life/t.duration))),t.mesh.material.opacity=t.life/t.duration*.65}dispose(){this.scene.remove(this.group),this.geometry.dispose(),this.material.dispose(),this.cylinder.dispose(),this.ringGeometry.dispose(),this.flameGeometry.dispose();for(const e of[this.flames,this.localFlames])for(const t of e)t.mesh.material.dispose();for(const e of this.beams)e.mesh.material.dispose(),e.core.material.dispose();for(const e of this.rings)e.mesh.material.dispose();this.group.clear()}}class Hu{constructor(e){this.root=e,this.el.className="co-battle-feedback",this.feed.className="co-kill-feed",this.banner.className="co-kill-banner",this.marker.className="co-hit-marker",this.banner.hidden=this.marker.hidden=!0,this.el.append(this.feed,this.banner,this.marker),e.append(this.el),e.addEventListener("pointerdown",this.unlock),e.addEventListener("keydown",this.unlock)}el=document.createElement("div");feed=document.createElement("div");banner=document.createElement("div");marker=document.createElement("div");entries=[];numbers=[];seen=new Set;ids=[];markerLife=0;markerRank=0;bannerLife=0;bannerAttacker="";audio;disposed=!1;unlock=()=>{if(!this.audio)try{this.audio=new AudioContext}catch{return}this.audio.resume().catch(()=>{})};accept(e){return this.seen.has(e)?!1:(this.seen.add(e),this.ids.push(e),this.ids.length>1024&&this.seen.delete(this.ids.shift()),!0)}hit(e){if(!this.accept(`hit:${e.eventId}`)||!e.hits.length)return;const t=e.hits.some(n=>n.killed)?3:e.hits.some(n=>n.headshot)?2:1;(t>=this.markerRank||!this.markerLife)&&(this.markerRank=t,this.marker.className=`co-hit-marker ${t===3?"is-kill":t===2?"is-head":""}`,this.marker.hidden=!1,this.markerLife=.18),this.tone(t);for(const n of e.hits){if(n.damage<=0)continue;const s=document.createElement("span");s.className=`co-damage-number ${n.killed?"is-kill":n.headshot?"is-head":""}`,s.textContent=String(n.damage),this.el.append(s),this.numbers.push({el:s,life:.7,position:new P(...n.position)}),this.numbers.length>24&&this.numbers.shift().el.remove()}}kill(e){if(!this.accept(`kill:${e.eventId}`))return;const t=document.createElement("div");t.className="co-kill-entry";const n=document.createElement("b"),s=document.createElement("span"),r=document.createElement("b");if(n.textContent=e.attackerName,s.textContent=`${Et[e.weapon].icon}${e.headshot?" · 爆頭":""}`,s.title=Et[e.weapon].label,r.textContent=e.victimName,t.append(n,s,r),e.scoreAwarded!==void 0){const h=document.createElement("em");h.className="co-kill-reward",h.textContent=`+${e.scoreAwarded} 分`,t.append(h)}for(this.feed.prepend(t),this.entries.push({el:t,life:6});this.entries.length>5;)this.entries.shift().el.remove();const a=e.multi>=2?["","","雙殺","三連殺","四連殺","五連殺"][e.multi]??`${e.multi} 連殺`:"";if(!a&&!e.title)return;const o=this.bannerAttacker===e.attackerId&&this.bannerLife>0;this.bannerAttacker=e.attackerId,this.banner.replaceChildren();const c=document.createElement("small"),l=document.createElement("strong");c.textContent=e.attackerName,l.textContent=[a,e.title].filter(Boolean).join(" · "),this.banner.append(c,l),this.banner.hidden=!1,this.bannerLife=2,o||(this.banner.classList.remove("is-entering"),this.banner.offsetWidth,this.banner.classList.add("is-entering"))}tone(e){const t=this.audio;if(!t||t.state!=="running")return;const n=t.createOscillator(),s=t.createGain();n.type="sine",n.frequency.setValueAtTime(e===3?660:e===2?1040:780,t.currentTime),n.frequency.exponentialRampToValueAtTime(e===3?980:500,t.currentTime+.075),s.gain.setValueAtTime(.045,t.currentTime),s.gain.exponentialRampToValueAtTime(.001,t.currentTime+.09),n.connect(s).connect(t.destination),n.start(),n.stop(t.currentTime+.1),n.onended=()=>{n.disconnect(),s.disconnect()}}update(e,t){this.disposed||(this.markerLife=Math.max(0,this.markerLife-e),this.markerLife||(this.marker.hidden=!0,this.markerRank=0),this.bannerLife=Math.max(0,this.bannerLife-e),this.banner.hidden=this.bannerLife===0,this.banner.style.opacity=String(Math.min(1,this.bannerLife/.25)),this.entries=this.entries.filter(n=>(n.life-=e,n.life<=0?(n.el.remove(),!1):(n.el.style.opacity=String(Math.min(1,n.life/.4)),!0))),this.numbers=this.numbers.filter(n=>{if(n.life-=e,n.life<=0)return n.el.remove(),!1;const s=n.position.clone().project(t),r=s.z>=-1&&s.z<=1&&Math.abs(s.x)<1.1&&Math.abs(s.y)<1.1;return n.el.hidden=!r,n.el.style.left=`${(s.x*.5+.5)*100}%`,n.el.style.top=`calc(${(-s.y*.5+.5)*100}% - ${(1-n.life/.7)*34}px)`,n.el.style.opacity=String(Math.min(1,n.life/.2)),!0}))}dispose(){this.disposed=!0,this.root.removeEventListener("pointerdown",this.unlock),this.root.removeEventListener("keydown",this.unlock),this.audio?.close().catch(()=>{}),this.el.remove(),this.entries=[],this.numbers=[],this.seen.clear(),this.ids=[]}}const kc=Jd.filter(([i,e])=>i>Yi.minX+1&&i<Yi.maxX-1&&e>Yi.minZ+1&&e<Yi.maxZ-1&&!Ns.some(t=>to(i,e,t,2))&&mc(i,e)===0&&!jr(i,e,.75)),Sv=(i,e)=>e&&i[0]===e[0]&&i[1]===e[1],Mv=(i,e)=>Math.hypot(i[0]-e.x,i[1]-e.z),Ev=(i,e)=>[...i[Math.min(i.length-1,Math.max(0,Math.floor(e()*i.length)))]];function bv(i,e,t=Math.random,n=kc){const s=n.filter(c=>!Sv(c,e));if(!s.length)throw new Error("No legal respawn candidates");const r=i.filter(c=>c.alive!==!1),a=s.map(c=>({point:c,distance:r.reduce((l,h)=>Math.min(l,Mv(c,h)),1/0)})),o=a.filter(c=>c.distance>=20).map(c=>c.point);return Ev(o.length?o:a.sort((c,l)=>l.distance-c.distance).slice(0,3).map(c=>c.point),t)}const Gu=[...kc.map(([i,e])=>({x:i,y:0,z:e})),...no];function wv(i){return i==="smg"?[no[0]]:i==="shotgun"?[no[1]]:Gu.filter(e=>e.y===0)}function Tv(i,e,t,n=Math.random,s=Gu){const r=[...i.filter(o=>o.alive!==!1),...e],a=s.filter(o=>(!t||o.x!==t.x||o.y!==t.y||o.z!==t.z)&&r.every(c=>Math.hypot(o.x-c.x,o.y-(c.y??0),o.z-c.z)>=8));return a.length?{...a[Math.min(a.length-1,Math.max(0,Math.floor(n()*a.length)))]}:null}const Is=2,zc=.5,Hc=16,Vu=.1,Wu="chroma-mouse-sensitivity";function Xu(i){return!Number.isFinite(i)||i<zc||i>Hc?Is:Math.round(i*10)/10}function Av(){try{const i=localStorage.getItem(Wu);return i===null||i.trim()===""?Is:Xu(Number(i))}catch{return Is}}let tc=Av();const nc=new Set,sa=()=>tc;function Yr(i){tc=Xu(i);try{localStorage.setItem(Wu,String(tc))}catch{}nc.forEach(e=>e())}function qu(i){return nc.add(i),()=>{nc.delete(i)}}let Rv=0;class Yu{constructor(e,t,n,s=!1,r){this.root=e,this.onOpen=t,this.onClose=n,this.roomActions=r;const a=`co-settings-${++Rv}`;this.shell=document.createElement("div"),this.shell.dataset.gameUi="",this.shell.className="co-settings-shell",this.shell.innerHTML=`<button type="button" class="co-settings-trigger" aria-controls="${a}" aria-expanded="false">${this.coarse?"設定":"設定 · F2"}</button>
      <p class="co-lock-hint" hidden>點擊場景繼續遊戲 · F2 開啟設定</p>
      <div class="co-settings-overlay" hidden>
        <section id="${a}" class="co-settings-card" role="dialog" aria-modal="true" aria-labelledby="${a}-title" tabindex="-1">
          <p class="co-settings-eyebrow">CHROMA OPS</p><h2 id="${a}-title">遊戲設定</h2>
          <div class="co-sensitivity"><label for="${a}-range">視角靈敏度 <output for="${a}-range"></output></label>
          <input id="${a}-range" type="range" min="${zc}" max="${Hc}" step="${Vu}">
          <p>滑鼠與觸控共用倍率，1 倍為原本手感。設定會自動儲存。</p>
          <button type="button" data-reset>恢復預設（2 倍）</button></div>
          <p class="co-settings-status">${s?"對戰仍在進行，你仍可能受到攻擊":"單人遊戲已暫停"}</p>
          ${r?`<div class="co-room-actions"><p>房間 <b data-room-code></b></p><button type="button" data-invite>複製邀請連結</button>${r.isHost?'<button type="button" data-end>結束本局並回房間</button><div data-end-confirmation hidden><p>結束本局並讓所有人回到原房間？</p><button type="button" data-confirm-end>確認結束本局</button><button type="button" data-cancel-end>繼續對戰</button></div>':""}<button type="button" data-leave>離開房間</button><p data-room-status role="status"></p></div>`:""}
          <button type="button" class="co-settings-continue" data-continue>繼續遊戲</button>
          <p class="co-settings-help">${this.coarse?"點擊「繼續遊戲」返回戰場":"F2 / Esc 關閉 · 關閉後點擊場景繼續"}</p>
        </section>
      </div>`;const o=this.shell.querySelector("[data-room-code]");o&&r&&(o.textContent=r.code),e.classList.add("co-has-settings"),e.append(this.shell),this.panel=this.shell.querySelector(".co-settings-overlay"),this.slider=this.shell.querySelector("input"),this.output=this.shell.querySelector("output"),this.trigger=this.shell.querySelector(".co-settings-trigger"),this.hint=this.shell.querySelector(".co-lock-hint"),this.shell.addEventListener("click",this.onClick),this.slider.addEventListener("input",this.onInput),window.addEventListener("keydown",this.onKey,!0),document.addEventListener("focusin",this.onFocus),document.addEventListener("pointerlockchange",this.updateHint),document.addEventListener("pointerlockerror",this.updateHint),this.unsubscribe=qu(this.render),this.render(),this.updateHint()}shell;panel;slider;output;trigger;hint;previousFocus=null;unsubscribe;open=!1;active=!0;coarse=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>0;get isOpen(){return this.open}render=()=>{const e=sa();this.slider.value=String(e),this.slider.setAttribute("aria-valuetext",`${e.toFixed(1)} 倍`),this.output.value=`${e.toFixed(1)} 倍`};onInput=()=>Yr(Number(this.slider.value));onClick=e=>{e.stopPropagation();const t=e.target;if(t.closest(".co-settings-trigger"))this.show();else if(t.closest("[data-reset]"))Yr(Is);else if(t.closest("[data-leave]"))this.roomActions?.onLeave();else if(t.closest("[data-end]"))this.endConfirmation(!0);else if(t.closest("[data-confirm-end]"))this.endConfirmation(!1),this.roomActions?.onEnd();else if(t.closest("[data-cancel-end]"))this.endConfirmation(!1);else if(t.closest("[data-invite]")){const n=new URL(location.href);n.searchParams.set("room",this.roomActions?.code??""),navigator.clipboard?.writeText(n.toString()).then(()=>this.inviteStatus("邀請連結已複製")).catch(()=>this.inviteStatus("無法複製，請分享房間碼"))}else t.closest("[data-continue]")&&this.close(!this.coarse)};inviteStatus(e){const t=this.shell.querySelector("[data-room-status]");t&&(t.textContent=e)}endConfirmation(e){const t=this.shell.querySelector("[data-end-confirmation]");t&&(t.hidden=!e,e&&t.querySelector("[data-cancel-end]")?.focus())}onFocus=e=>{this.open&&!this.panel.contains(e.target)&&this.slider.focus()};onKey=e=>{if(!this.active)return;const t=e.target instanceof HTMLElement&&e.target.closest("input, textarea, select, [contenteditable]");if(e.key==="F2"&&(this.open||!t)){e.preventDefault(),e.stopImmediatePropagation(),e.repeat||(this.open?this.close(!1):this.show());return}if(this.open){if(e.key==="Escape")e.preventDefault(),e.stopImmediatePropagation(),this.close(!1);else if(e.key==="Tab"){const n=Array.from(this.panel.querySelectorAll("input, button")).filter(a=>!a.closest("[hidden]")),s=n[0],r=n[n.length-1];e.shiftKey&&document.activeElement===s?(e.preventDefault(),r.focus()):!e.shiftKey&&document.activeElement===r&&(e.preventDefault(),s.focus())}}};show(){!this.active||this.open||(this.previousFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.open=!0,this.panel.hidden=!1,this.trigger.setAttribute("aria-expanded","true"),this.onOpen(),document.pointerLockElement===this.root&&document.exitPointerLock?.(),this.slider.focus(),this.updateHint())}close(e=!1,t=!0){this.open&&(this.open=!1,this.endConfirmation(!1),this.panel.hidden=!0,this.trigger.setAttribute("aria-expanded","false"),t&&((this.previousFocus?.isConnected?this.previousFocus:this.trigger).focus({preventScroll:!0}),this.onClose(e)),this.updateHint())}setActive(e){this.active=e,e||this.close(!1,!1),this.shell.hidden=!e,this.updateHint()}updateHint=()=>{(!this.active||this.open)&&document.pointerLockElement===this.root&&document.exitPointerLock?.(),this.hint.hidden=this.coarse||!this.active||this.open||document.pointerLockElement===this.root};dispose(){this.active=!1,this.close(!1,!1),this.unsubscribe(),window.removeEventListener("keydown",this.onKey,!0),document.removeEventListener("focusin",this.onFocus),document.removeEventListener("pointerlockchange",this.updateHint),document.removeEventListener("pointerlockerror",this.updateHint),this.shell.removeEventListener("click",this.onClick),this.slider.removeEventListener("input",this.onInput),this.root.classList.remove("co-has-settings"),this.shell.remove()}}const gh=()=>({moveX:0,moveY:0,lookX:0,lookY:0,shoot:!1,jump:!1,reload:!1,switchWeapon:0,sprint:!1,aim:!1});class $u{constructor(e){this.onReset=e}state=gh();set(e){Object.assign(this.state,e),(e.reload||e.switchWeapon)&&(this.state.aim=!1)}addLook(e,t){this.state.lookX+=e,this.state.lookY+=t}getState(){const e={...this.state};return this.state.lookX=0,this.state.lookY=0,this.state.jump=!1,this.state.reload=!1,this.state.switchWeapon=0,e}get aiming(){return!!this.state.aim}get sprinting(){return!!this.state.sprint}clearCombat(){this.set({shoot:!1,aim:!1,lookX:0,lookY:0,jump:!1,reload:!1,switchWeapon:0})}reset(){const e=this.state.moveX||this.state.moveY||this.state.sprint||this.state.aim||this.state.shoot||this.state.jump;this.state=gh(),e&&this.onReset?.()}}class Zu{constructor(e,t){this.el=e,this.input=t,window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onKey),document.addEventListener("mousemove",this.onMove),e.addEventListener("contextmenu",this.onContext),e.addEventListener("combat:reset",this.reset),e.addEventListener("armory:open",this.clearCombat),document.addEventListener("visibilitychange",this.onVisibility),e.tabIndex=-1,document.addEventListener("pointerlockchange",this.onLockChange),window.addEventListener("blur",this.reset),e.addEventListener("mousedown",this.onDown),window.addEventListener("mouseup",this.onUp)}keys=new Set;enabled=!0;get canPlay(){return this.enabled&&document.pointerLockElement===this.el}get armoryOpen(){return!!this.el.querySelector(".co-armory:not([hidden])")}clearCombat=()=>this.input.clearCombat();reset=()=>{this.keys.clear(),this.input.reset()};onLockChange=()=>{this.reset(),this.canPlay&&this.el.focus({preventScroll:!0})};onKey=e=>{const t=e.key.toLowerCase();if(e.type==="keyup"){this.keys.delete(t);return}const n=["w","a","s","d","shift"].includes(t);if(!this.canPlay||e.target instanceof HTMLElement&&e.target.closest(n?"input, textarea, select, [contenteditable]":"input, button, textarea, select, [contenteditable]")||this.armoryOpen&&!n||!["w","a","s","d"," ","r","q","1","2","3","4","5","6","7","shift"].includes(t))return;e.preventDefault();const s=!e.repeat&&!this.keys.has(t);this.keys.add(t),t===" "&&s&&this.input.set({jump:!0}),t==="r"&&this.input.set({reload:!0}),/^[1-7]$/.test(t)&&this.input.set({switchWeapon:+t})};onMove=e=>{if(this.canPlay&&!this.armoryOpen){const t=sa();this.input.addLook(e.movementX*t,e.movementY*t)}};onDown=e=>{e.button===2&&this.canPlay&&!this.armoryOpen&&(e.preventDefault(),this.input.set({aim:!0})),e.button===0&&this.canPlay&&!this.armoryOpen&&!(e.target instanceof HTMLElement&&e.target.closest("[data-game-ui], .co-armory, button, input"))&&this.input.set({shoot:!0})};onUp=e=>{e.button===0&&this.input.set({shoot:!1}),e.button===2&&this.input.set({aim:!1})};onContext=e=>e.preventDefault();onVisibility=()=>{document.hidden&&this.reset()};setEnabled(e){this.enabled=e,this.reset()}update(){if(!this.canPlay){this.reset();return}this.input.set({sprint:this.keys.has("shift"),moveX:(this.keys.has("d")?1:0)-(this.keys.has("a")?1:0),moveY:(this.keys.has("w")?1:0)-(this.keys.has("s")?1:0)})}dispose(){this.reset(),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onKey),document.removeEventListener("mousemove",this.onMove),document.removeEventListener("pointerlockchange",this.onLockChange),window.removeEventListener("blur",this.reset),this.el.removeEventListener("contextmenu",this.onContext),this.el.removeEventListener("combat:reset",this.reset),this.el.removeEventListener("armory:open",this.clearCombat),document.removeEventListener("visibilitychange",this.onVisibility),this.el.removeEventListener("mousedown",this.onDown),window.removeEventListener("mouseup",this.onUp)}}class Ku{constructor(e,t){this.el=e,this.input=t,e.classList?.toggle("co-touch-controls",!0),this.portrait?.addEventListener?.("change",this.reset),window.PointerEvent?(e.addEventListener("pointerdown",this.onPointerDown,this.options),e.addEventListener("pointermove",this.onPointerMove,this.options),e.addEventListener("pointerup",this.onPointerUp,this.options),e.addEventListener("pointercancel",this.onPointerUp,this.options)):(e.addEventListener("touchstart",this.onTouchStart,this.options),e.addEventListener("touchmove",this.onTouchMove,this.options),e.addEventListener("touchend",this.onTouchEnd,this.options),e.addEventListener("touchcancel",this.onTouchEnd,this.options)),e.addEventListener("lostpointercapture",this.onPointerUp),e.addEventListener("combat:reset",this.reset),e.addEventListener("armory:open",this.clearCombat),e.addEventListener("tactical:open",this.clearCombat),window.addEventListener("blur",this.reset),window.addEventListener("orientationchange",this.reset),document.addEventListener("visibilitychange",this.onVisibility)}enabled=!0;setEnabled(e){this.enabled=e,this.reset()}portrait=window.matchMedia?.("(orientation: portrait)");isGameTarget=e=>!this.el.querySelector(".co-armory:not([hidden])")&&!(e instanceof HTMLElement&&e.closest(".co-armory, [data-game-ui]"));joyId=null;lookId=null;shootId=null;ox=0;oy=0;lx=0;ly=0;joyTravel=52;options={passive:!1};reset=()=>{this.joyId=null,this.lookId=null,this.shootId=null,this.input.reset(),this.el.style.setProperty("--joy-x","0px"),this.el.style.setProperty("--joy-y","0px")};clearCombat=()=>{this.lookId=null,this.shootId=null,this.input.clearCombat()};stopShooting=()=>{this.shootId=null,this.input.set({shoot:!1})};onVisibility=()=>{document.hidden&&this.reset()};begin=(e,t,n,s)=>{const r=this.el.getBoundingClientRect();if(!this.enabled||this.portrait?.matches||!this.isGameTarget(s))return;const a=s instanceof HTMLElement?s.closest("[data-fire],[data-jump],[data-reload],[data-weapon],[data-sprint],[data-aim]"):null;if(a?.matches("[data-sprint]"))this.input.set({sprint:!this.input.sprinting});else if(a?.matches("[data-aim]"))this.input.set({aim:!this.input.aiming});else if(a?.matches("[data-jump]"))this.input.set({jump:!0});else if(a?.matches("[data-reload]"))this.input.set({reload:!0});else if(a?.matches("[data-weapon]"))this.stopShooting(),this.el.dispatchEvent(new Event("armory"));else if(a?.matches("[data-fire]"))this.shootId=e,this.input.set({shoot:!0});else if(t<r.left+r.width*.48&&this.joyId===null){this.joyId=e,this.ox=t,this.oy=n;const o=this.el.querySelector(".co-joy")?.getBoundingClientRect().width;this.joyTravel=o?o*.42:52}else this.lookId===null&&(this.lookId=e,this.lx=t,this.ly=n)};movePoint=(e,t,n)=>{if(!(!this.enabled||this.portrait?.matches)){if(e===this.joyId){const s=t-this.ox,r=n-this.oy,a=1/Math.max(this.joyTravel,Math.hypot(s,r));this.input.set({moveX:Math.max(-1,Math.min(1,s/this.joyTravel)),moveY:Math.max(-1,Math.min(1,-r/this.joyTravel))}),this.el.style.setProperty("--joy-x",`${s*a*55}%`),this.el.style.setProperty("--joy-y",`${r*a*55}%`)}if(e===this.lookId){const s=sa();this.input.addLook((t-this.lx)*s,(n-this.ly)*s),this.lx=t,this.ly=n}}};end=e=>{e===this.joyId&&(this.joyId=null,this.input.set({moveX:0,moveY:0}),this.el.style.setProperty("--joy-x","0px"),this.el.style.setProperty("--joy-y","0px")),e===this.lookId&&(this.lookId=null),e===this.shootId&&(this.shootId=null,this.input.set({shoot:!1}))};onPointerDown=e=>{!this.enabled||this.portrait?.matches||!this.isGameTarget(e.target)||(e.preventDefault(),this.begin(e.pointerId,e.clientX,e.clientY,e.target),(e.pointerId===this.joyId||e.pointerId===this.lookId||e.pointerId===this.shootId)&&this.el.setPointerCapture?.(e.pointerId))};onPointerMove=e=>{!this.enabled||e.pointerId!==this.joyId&&!this.isGameTarget(e.target)||(e.preventDefault(),this.movePoint(e.pointerId,e.clientX,e.clientY))};onPointerUp=e=>{this.enabled&&this.isGameTarget(e.target)&&e.preventDefault(),this.end(e.pointerId)};onTouchStart=e=>{if(!(!this.enabled||!this.isGameTarget(e.target))){e.preventDefault();for(const t of Array.from(e.changedTouches))this.begin(t.identifier,t.clientX,t.clientY,e.target)}};onTouchMove=e=>{if(this.enabled)for(const t of Array.from(e.changedTouches))t.identifier!==this.joyId&&!this.isGameTarget(e.target)||(e.preventDefault(),this.movePoint(t.identifier,t.clientX,t.clientY))};onTouchEnd=e=>{this.enabled&&this.isGameTarget(e.target)&&e.preventDefault();for(const t of Array.from(e.changedTouches))this.end(t.identifier)};dispose(){this.el.classList?.toggle("co-touch-controls",!1),this.portrait?.removeEventListener?.("change",this.reset),this.el.removeEventListener("lostpointercapture",this.onPointerUp),this.el.removeEventListener("tactical:open",this.clearCombat),this.el.removeEventListener("armory:open",this.clearCombat),this.el.removeEventListener("combat:reset",this.reset),this.reset(),window.PointerEvent?(this.el.removeEventListener("pointerdown",this.onPointerDown),this.el.removeEventListener("pointermove",this.onPointerMove),this.el.removeEventListener("pointerup",this.onPointerUp),this.el.removeEventListener("pointercancel",this.onPointerUp)):(this.el.removeEventListener("touchstart",this.onTouchStart),this.el.removeEventListener("touchmove",this.onTouchMove),this.el.removeEventListener("touchend",this.onTouchEnd),this.el.removeEventListener("touchcancel",this.onTouchEnd)),window.removeEventListener("blur",this.reset),window.removeEventListener("orientationchange",this.reset),document.removeEventListener("visibilitychange",this.onVisibility)}}class Cv{constructor(e,t=()=>0){this.boxes=e,this.heightAt=t}groundHeight(e,t){return this.heightAt(e,t)}blocked(e,t,n=.42){return jr(e,t,n,0,this.boxes)}rayBlocked(e,t){return!!this.firstWallHit(e,t.clone().sub(e).normalize(),e.distanceTo(t))}firstWallHit(e,t,n=30){const s=gn(e,t,n,{boxes:this.boxes,heightAt:this.heightAt});return s<n?e.clone().addScaledVector(t,s):null}}class Pv{constructor(e){this.points=e}previous=new Map;choose(e,t="player"){const n=bv(e.map(s=>({x:s.position.x,z:s.position.z,alive:s.alive})),this.previous.get(t),Math.random,this.points);return this.previous.set(t,n),n}}class Lv{timers=new Map;kill(e){this.timers.set(e,3)}update(e,t){for(const[n,s]of this.timers)s<=e?(this.timers.delete(n),t(n)):this.timers.set(n,s-e)}}class Iv{kills=0;deaths=0;onKill(){this.kills++}onDeath(){this.deaths++}}class Ju{constructor(e){this.el=e}flash=0;directionTime=0;dir="up";damage(e,t,n,s){const r=t.clone().sub(n);r.y=0,r.normalize(),s.y=0,s.normalize();const a=r.dot(s),o=r.x*s.z-r.z*s.x;this.dir=Math.abs(a)>Math.abs(o)?a>0?"up":"down":o>0?"right":"left",this.flash=Math.min(1,Math.max(.65,this.flash+e/18)),this.directionTime=.8,this.el.classList.remove("is-hit"),this.el.offsetWidth,this.el.classList.add("is-hit")}update(e,t){this.flash=Math.max(0,this.flash-e/.45),this.directionTime=Math.max(0,this.directionTime-e);const n={up:"0rad",right:"1.5708rad",down:"3.1416rad",left:"-1.5708rad"};this.el.style.setProperty("--damage-rotation",n[this.dir]),this.el.style.setProperty("--damage-flash",String(this.flash*.72)),this.el.style.setProperty("--low-hp",String(t<=30?.1+(30-t)/180:0)),this.el.style.setProperty("--damage-opacity",String(this.directionTime?Math.min(1,this.directionTime*2):0)),this.flash||this.el.classList.remove("is-hit")}dispose(){this.el.classList.remove("is-hit")}}class Dv{group=new $t;rotor=new $t;cabins=[];constructor(){const{radius:e,centerY:t,z:n}=Wt;this.rotor.position.set(0,t,n);for(const[r,a]of[[e,16761648],[e*.72,1482464]]){const o=new Fe(new Uc(r,.65,6,64),new nt({color:a}));this.rotor.add(o)}for(let r=0;r<12;r++){const a=new Fe(new yt(.3,e*2,.3),new nt({color:16777215}));a.rotation.z=r*Math.PI/12,this.rotor.add(a)}const s=new Fe(new vi(1.6,1.6,10,12),new nt({color:5625599}));s.rotation.x=Math.PI/2,s.position.set(0,t,n-2),this.group.add(s,this.rotor);for(let r=0;r<Wt.cabins;r++){const a=Dr(r,0).map(o=>{const c=new Fe(new yt(o.maxX-o.minX,o.maxY-o.minY,o.maxZ-o.minZ),new nt({color:o.color}));return this.group.add(c),c});this.cabins.push(a)}this.update(0)}update(e){this.rotor.rotation.z=e/Wt.period*Math.PI*2,this.cabins.forEach((t,n)=>Dr(n,e).forEach((s,r)=>t[r].position.set((s.minX+s.maxX)/2,(s.minY+s.maxY)/2,(s.minZ+s.maxZ)/2)))}dispose(){this.group.traverse(e=>{e instanceof Fe&&(e.geometry.dispose(),e.material.dispose())})}}const _h=[Pe(0,0,Yi.width,Yi.depth,0,1685980),Pe(0,0,78,62,0,14020080),Pe(-65,0,16,180,0,15330801),Pe(68,0,16,180,0,15330801),Pe(0,-64,184,16,0,15330801),Pe(0,76,210,12,0,15330801),Pe(0,24,112,12,0,15330801),Pe(0,102,92,16,0,10082783)],Nv=_h.flatMap((i,e)=>Ih(i,[...Ns,..._h.slice(e+1)]));function Uv(i){const e=new Map;for(const t of i){const n=e.get(t.maxY)||[];n.push(t),e.set(t.maxY,n)}return[...e.values()].flatMap(t=>t.flatMap((n,s)=>Ih(n,t.slice(s+1).filter(r=>r.minX<n.maxX&&r.maxX>n.minX&&r.minZ<n.maxZ&&r.maxZ>n.minZ))))}function vh(i){return i.maxY===0&&!Ns.some(e=>Math.min(i.maxX,e.maxX)>Math.max(i.minX,e.minX)&&Math.min(i.maxZ,e.maxZ)>Math.max(i.minZ,e.minZ))}const Xa=240,xh=i=>i*i*(3-2*i);function Fv(i){const e=(i%Xa+Xa)%Xa;return e<90?{phase:"day",night:0,cycleTime:e}:e<120?{phase:"dusk",night:xh((e-90)/30),cycleTime:e}:e<210?{phase:"night",night:1,cycleTime:e}:{phase:"dawn",night:1-xh((e-210)/30),cycleTime:e}}function Ov(i,e){return i.environmentTime+Math.max(0,Math.min(.25,(e-i.serverTime)/1e3))}class ju{group=new $t;wheel=new Dv;boxes=Yt;spawns=kc;waypoints=zd;lift=[];palette=[];pools=new $t;poolMaterial=new nt({color:16768402,transparent:!0,opacity:0,depthWrite:!1});unitBox=new yt(1,1,1);openTopBox=this.unitBox.clone();groundPlane=new xi(1,1).rotateX(-Math.PI/2);matrix=new dt;daySky=new Oe(1489372);sunset=new Oe(13072804);nightSky=new Oe(1051701);sky=new Oe;lastNight=-1;groundHeight(e,t){return ss(e,t)}constructor(){this.group.add(this.wheel.group,this.pools),this.openTopBox.setIndex(Array.from(this.unitBox.index.array).filter((s,r)=>r<12||r>=18)),this.openTopBox.clearGroups();const e=new Set(ll),t=[...Yt.filter(s=>s.maxY>0&&!e.has(s)),Pe(0,62,44,20,12,1608656),Pe(4,100,32,24,6,7953112)];this.drawSolids(t),this.drawBoxes($d),this.makeGlasshouseWindows(),this.drawBoxes(Yt.filter(s=>s.maxY<=0&&!vh(s)),void 0,!0),this.drawBoxes(Yt.filter(vh),void 0,!0,this.openTopBox),this.drawBoxes(Nv,void 0,!1,this.groundPlane,!0);for(const s of Lh)this.ramp(s.x,s.z0,s.x,s.z1,s.from,s.to,s.width);this.ramp(-20.5,40,-20.5,52,0,12,9),this.ramp(-38,100,-12,100,0,6,24);for(const s of Qi){s.kind==="ramp"&&this.ramp(0,s.outer,0,s.inner,0,-6,6);const r=this.sign(`B1  ${s.name}  MALL`,s.axis==="z"?0:s.outer,2.8,s.axis==="z"?s.outer:s.cross,7733217);r.rotation.y=s.name==="NORTH"?Math.PI:s.name==="WEST"?-Math.PI/2:s.name==="EAST"?Math.PI/2:0}this.makeWindows(),this.makeStreet(),this.makeMall(),this.lift=Nr(0).map(s=>{const r=new Fe(new yt(s.maxX-s.minX,s.maxY-s.minY,s.maxZ-s.minZ),new nt({color:s.color}));return this.group.add(r),r});for(const s of As)this.sign(s.name,s.x,5,s.z+12.35,s.color);this.sign("SKY WALK  /  6m",0,7.8,38.15,16761648),this.sign("FERRIS PLAZA",0,3,-85,16731800),this.sign("LIFT  0 / 6 / 12",68,13.6,25.75,16731800),this.sign(dc.name,58,5.25,116.3,10082783);const n=new Set;this.group.traverse(s=>{if(!(s instanceof Fe))return;const r=Array.isArray(s.material)?s.material:[s.material];for(const a of r){if(!(a instanceof nt)||a===this.poolMaterial||n.has(a))continue;n.add(a);const o=a.color.getHex(),c=[15330801,14020080,10082783,16777215].includes(o),l=a.userData.glow;this.palette.push({material:a,base:a.color.clone(),night:a.userData.fixedLight?1:c?.63:.38,glow:l===void 0?void 0:new Oe(l)})}}),this.wheel.group.traverse(s=>{if(s instanceof Fe){const r=this.palette.find(a=>a.material===s.material);if(r){r.night=.85;const a=r.base.getHex();a===16761648&&(r.glow=new Oe(16742616)),a===1482464&&(r.glow=new Oe(10192383))}}}),this.update(0,0)}drawBoxes(e,t,n=!1,s=this.unitBox,r=!1){const a=new Map;for(const o of e){const c=a.get(o.color)||[];c.push(o),a.set(o.color,c)}for(const[o,c]of a){const l=new nt({color:o});l.userData.fixedLight=n,t!==void 0&&(l.userData.glow=t);const h=new br(s,l,c.length);c.forEach((d,u)=>{this.matrix.makeScale(d.maxX-d.minX,r?1:d.maxY-d.minY,d.maxZ-d.minZ),this.matrix.setPosition((d.minX+d.maxX)/2,r?d.maxY:(d.minY+d.maxY)/2,(d.minZ+d.maxZ)/2),h.setMatrixAt(u,this.matrix)}),h.instanceMatrix.needsUpdate=!0,this.group.add(h)}}drawSolids(e){const t=new Map,n=s=>{let r=t.get(s);return r||(r={positions:[],indices:[]},t.set(s,r)),r};for(const s of e){const r=n(s.color),a=r.positions.length/3;for(const o of[s.minY,s.maxY])r.positions.push(s.minX,o,s.minZ,s.maxX,o,s.minZ,s.maxX,o,s.maxZ,s.minX,o,s.maxZ);for(const o of[0,1,2,0,2,3,0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0])r.indices.push(a+o)}for(const s of Uv(e)){const r=n(s.color),a=r.positions.length/3;r.positions.push(s.minX,s.maxY,s.minZ,s.maxX,s.maxY,s.minZ,s.maxX,s.maxY,s.maxZ,s.minX,s.maxY,s.maxZ);for(const o of[0,2,1,0,3,2])r.indices.push(a+o)}for(const[s,r]of t){const a=new At;a.setAttribute("position",new ft(r.positions,3)),a.setIndex(r.indices),this.group.add(new Fe(a,new nt({color:s})))}}makeGlasshouseWindows(){const e=new nt({color:13234669,transparent:!0,opacity:.28,depthWrite:!1});for(const t of ll){const n=new Fe(this.unitBox,e);n.scale.set(t.maxX-t.minX,t.maxY-t.minY,t.maxZ-t.minZ),n.position.set((t.minX+t.maxX)/2,(t.minY+t.maxY)/2,(t.minZ+t.maxZ)/2),this.group.add(n)}}ramp(e,t,n,s,r,a,o){const c=Math.hypot(n-e,s-t),l=(s-t)/c*o/2,h=-(n-e)/c*o/2,d=Math.min(r,a)-.1,u=[e-l,r,t-h,e+l,r,t+h,n+l,a,s+h,n-l,a,s-h,e-l,d,t-h,e+l,d,t+h,n+l,d,s+h,n-l,d,s-h],p=new At;p.setAttribute("position",new ft(u,3)),p.setIndex([0,1,2,0,2,3,4,6,5,4,7,6,0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0]),p.computeVertexNormals(),this.group.add(new Fe(p,new nt({color:16761648,side:jt})))}makeWindows(){const e=[];for(const t of As)for(const n of[0,6])for(const s of[-1,1])for(const r of["x","z"])for(const[a,o]of[[-9,5.4],[-4,3.4],[4,3.4],[9,5.4]]){const c=(l,h,d,u)=>e.push(r==="x"?Pe(t.x+s*12.27,t.z+l,.05,h,d+u/2,13959158,d-u/2):Pe(t.x+l,t.z+s*12.27,h,.05,d+u/2,13959158,d-u/2));for(const l of[n+1.23,n+3.47])c(a,o,l,.08);for(const l of[a-o/2,a+o/2])c(l,.08,n+2.35,2.3);(t.name.includes("STUDIO")||t.name.includes("GALLERY"))&&c(a,.06,n+2.35,2.3),(t.name.includes("GARDEN")||t.name.includes("MARKET"))&&c(a,o,n+2.7,.06)}this.drawBoxes(e,7733217)}makeMall(){this.drawBoxes([Pe(0,2,32,24,-5.98,12824031,-6),...[-14,18].map(t=>Pe(0,t,176,8,-5.98,5748926,-6)),...[-64,64].map(t=>Pe(t,2,8,40,-5.98,5748926,-6))],void 0,!0);const e=[];for(const t of Dh){this.sign(t.name,t.x,-1.4,8.2,t.color),this.sign(t.name,t.x,-1.4,-4.2,t.color);for(const n of[-4.2,8.2])e.push(Pe(t.x,n,8,.08,-.65,t.color,-.8))}for(const t of[-14,18])e.push(Pe(0,t,168,.35,-.42,7733217,-.5));for(const t of[-64,0,64])e.push(Pe(t,2,.35,38,-.42,16766838,-.5));this.drawBoxes(e,void 0,!0),this.sign("B1  COLOR MALL",0,-1.6,2,7733217),this.sign("NORTH EXIT",0,-1.5,-20,7733217),this.sign("SOUTH EXIT",0,-1.5,24,7733217).rotation.y=Math.PI,this.sign("WEST EXIT",-88,-1.5,9,7733217).rotation.y=Math.PI/2,this.sign("EAST EXIT",88,-1.5,9,7733217).rotation.y=-Math.PI/2}makeStreet(){const e=new vi(.28,.4,3,6),t=new Dc(1,0),n=new br(e,new nt({color:16754476}),_r.length),s=new br(t,new nt({color:16777215}),_r.length*5),r=[16731818,16765774,5168565,10021195,6740479];_r.forEach(([c,l],h)=>{this.matrix.makeTranslation(c,2.1,l),n.setMatrixAt(h,this.matrix);for(let d=0;d<5;d++){const u=d*Math.PI*2/5;this.matrix.makeScale(1.1,1.15,1.1),this.matrix.setPosition(c+Math.sin(u)*1.1,3.7+d%2*.8,l+Math.cos(u)*1.1),s.setMatrixAt(h*5+d,this.matrix),s.setColorAt(h*5+d,new Oe(r[d]))}}),this.group.add(n,s);const a=eo.map(([c,l])=>Pe(c+.65,l,1.5,.65,4.9,16773841,4.6));this.drawBoxes(a,16769948);const o=new Ic(4.5,16);for(const[c,l]of eo){const h=new Fe(o,this.poolMaterial);h.rotation.x=-Math.PI/2,h.position.set(c+.65,.045,l),this.pools.add(h)}}sign(e,t,n,s,r){const a=document.createElement("canvas");a.width=512,a.height=96;const o=a.getContext("2d");o.fillStyle="#12203b",o.fillRect(0,0,512,96),o.strokeStyle="#"+r.toString(16).padStart(6,"0"),o.lineWidth=10,o.strokeRect(3,3,506,90),o.fillStyle="#ffffff",o.font="bold 32px Arial",o.textAlign="center",o.fillText(e,256,60);const c=new nt({map:new mu(a),side:jt});c.userData.glow=16777215;const l=new Fe(new xi(8,1.5),c);return l.position.set(t,n,s),this.group.add(l),l}update(e,t=e,n){this.wheel.update(e),Nr(e).forEach((r,a)=>this.lift[a]?.position.set((r.minX+r.maxX)/2,(r.minY+r.maxY)/2,(r.minZ+r.maxZ)/2));const{night:s}=Fv(t);if(Math.abs(s-this.lastNight)>1e-5){for(const r of this.palette)r.material.color.copy(r.base),r.glow?r.material.color.lerp(r.glow,s):r.material.color.multiplyScalar(1-s*(1-r.night));this.poolMaterial.opacity=s*.16,this.pools.visible=s>.01,this.lastNight=s}n&&(s<.5?this.sky.copy(this.daySky).lerp(this.sunset,s*2):this.sky.copy(this.sunset).lerp(this.nightSky,s*2-1),n.setClearColor(this.sky))}dispose(){this.group.removeFromParent(),ia(this.group),this.group.clear()}}class Qu{position=new P(-10,1.65,-10);velocityY=0;jumpsUsed=0;supportId=null;hp=100;alive=!0;kills=0;deaths=0;yaw=0;pitch=0;color=5285631;respawn(e){this.position.set(e[0],mc(e[0],e[1])+En,e[1]),this.velocityY=0,this.jumpsUsed=0,this.supportId=null,this.hp=100,this.alive=!0}damage(e){this.hp=Math.max(0,this.hp-e),this.hp||(this.alive=!1)}}class Bv{update(e,t,n,s,r=1,a){const o={x:e.position.x,y:e.position.y,z:e.position.z,yaw:e.yaw,pitch:e.pitch,velocityY:e.velocityY,supportId:e.supportId,jumpsUsed:e.jumpsUsed,alive:e.alive};vc(o,t,n,{boxes:s.boxes,heightAt:(c,l)=>s.groundHeight(c,l)},r,a),e.position.set(o.x,o.y,o.z),e.yaw=o.yaw,e.pitch=o.pitch,e.supportId=o.supportId??null,e.velocityY=o.velocityY,e.jumpsUsed=o.jumpsUsed}}class kv{constructor(e){this.spec=e,this.state={level:1,ammo:e.magazine,reloadUntil:0,quickReloadUntil:0}}state;time=0;cooldown=0;get ammo(){return this.state.ammo}get level(){return this.state.level}get capacity(){return mn(this.spec.id,this.level)}get reserve(){return 1/0}get reloading(){return this.state.reloadUntil>this.time}get quickReloadSeconds(){return Math.max(0,this.state.quickReloadUntil-this.time)}clearBoost(){this.state.quickReloadUntil=0}update(e,t){return this.time+=e,this.cooldown=Math.max(0,this.cooldown-e),la(this.spec.id,this.state,this.time,!1,1),t&&!this.reloading&&this.cooldown<=0&&this.ammo>0?(this.state.ammo--,this.cooldown=this.spec.fireDelay,la(this.spec.id,this.state,this.time,!1,1),{fired:!0,empty:this.ammo===0,autoReload:this.reloading}):{fired:!1,empty:this.ammo===0,autoReload:!1}}reload(){la(this.spec.id,this.state,this.time,!0,1)}collect(e){return Ud(this.spec.id,this.state,e,this.time,1)}refill(){this.state.ammo=this.capacity,this.state.reloadUntil=0,this.cooldown=0,this.clearBoost()}addReserve(e){}}class ed{constructor(e,t,n,s=""){this.id=e,this.name=t,this.color=n;const r=new nt({color:n}),a=(h,d,u,p,g="body")=>{const x=new Fe(h,r);x.position.set(d,u,p),this.group.add(x),this.parts.push(x),g==="arm"&&this.arms.push(x),g==="leg"&&this.legs.push(x)};a(new yt(.68,.82,.38),0,1.22,0),a(new yt(.52,.52,.52),0,1.92,0),a(new yt(.16,.58,.16),-.48,1.32,0,"arm"),a(new yt(.16,.58,.16),.48,1.32,0,"arm"),a(new yt(.19,.67,.19),-.22,.46,0,"leg"),a(new yt(.19,.67,.19),.22,.46,0,"leg"),this.gun=new Fe(new yt(.14,.14,.72),new nt({color:1581102})),this.gun.position.set(.34,1.38,-.28),this.gun.rotation.x=-.22,this.group.add(this.gun);const o=document.createElement("canvas");o.width=320,o.height=72;const c=o.getContext("2d");c.fillStyle="#fff",c.font="bold 40px Arial",c.textAlign="center",c.fillText(t,160,48);const l=new uu(new lu({map:new mu(o),transparent:!0,depthTest:!0,depthWrite:!1}));l.position.set(0,2.9,0),l.scale.set(3.2,.72,1),this.group.add(l)}group=new $t;position=new P;deathGroup=new $t;hp=100;alive=!0;cooldown=0;parts=[];arms=[];legs=[];pieces=[];walk=0;reaction=0;gun;disposed=!1;clearPieces(){for(const e of this.pieces)e.mesh.material.dispose();this.pieces=[],this.deathGroup.clear()}dispose(){this.disposed||(this.disposed=!0,this.clearPieces(),this.group.removeFromParent(),this.deathGroup.removeFromParent(),ia(this.group),this.group.clear())}muzzlePosition(e=new P){return this.group.localToWorld(e.set(.34,1.38,-.7))}respawn(e,t){this.position.set(e,0,t),this.group.position.copy(this.position),this.hp=100,this.reaction=0,this.parts[0].material.color.setHex(this.color),this.alive=!0,this.group.visible=!0,this.deathGroup.visible=!1,this.clearPieces()}damage(e){this.hp=Math.max(0,this.hp-e),this.reaction=.16,this.hp||this.die()}hit(){this.alive&&(this.reaction=.16)}die(){this.alive=!1,this.group.visible=!1,this.clearPieces(),this.deathGroup.position.copy(this.position),this.deathGroup.visible=!0,this.pieces=this.parts.map((e,t)=>{const n=new Fe(e.geometry,e.material.clone());return n.position.copy(e.position),n.rotation.copy(e.rotation),this.deathGroup.add(n),{mesh:n,velocity:new P((Math.random()-.5)*3,2+Math.random()*2,(Math.random()-.5)*3),spin:new P(Math.random()*8,Math.random()*8,Math.random()*8),life:1.1+t*.02}})}updateVisual(e,t,n){if(!this.alive){for(const r of this.pieces)r.life-=e,r.velocity.y-=11*e,r.mesh.position.addScaledVector(r.velocity,e),r.mesh.rotation.x+=r.spin.x*e,r.mesh.rotation.y+=r.spin.y*e,r.mesh.rotation.z+=r.spin.z*e,r.mesh.visible=r.life>0;this.pieces.length&&this.pieces.every(r=>r.life<=0)&&this.clearPieces();return}this.walk+=t?e*10:e*3;const s=t?Math.sin(this.walk)*.55:0;this.legs.forEach((r,a)=>r.rotation.x=(a?1:-1)*s),this.arms.forEach((r,a)=>r.rotation.x=(n?-.72:0)+(a?1:-1)*s*.45),this.group.rotation.z=0,this.reaction=Math.max(0,this.reaction-e),this.parts[0].material.color.setHex(this.color).lerp(new Oe(16777215),this.reaction/.16*.65)}}function Ds(i,e){const t=Math.ceil(Math.hypot(e.x-i.x,e.y-i.y,e.z-i.z)*2);for(let n=0;n<=t;n++){const s=t?n/t:0,r=i.x+(e.x-i.x)*s,a=i.z+(e.z-i.z)*s,o=i.y+(e.y-i.y)*s;if(Math.abs(r-es.x)<2.8&&Math.abs(a-es.z)<2.8||Math.abs(r-Wt.x)<Wt.radius+4&&Math.abs(a-Wt.z)<3.5||jr(r,a,.45,o+.35)||Math.abs(oo(r,a,o+.35)-o)>.38)return!1}return!0}let qa;function td(){if(qa)return qa;const i=[],e=new Map,t=(r,a,o)=>(i.push({x:r,y:a,z:o,edges:[]}),i.length-1),n=(r,a)=>{Ds(i[r],i[a])&&(i[r].edges.push(a),i[a].edges.push(r))};for(let r=-144;r<=144;r+=8)for(let a=-128;a<=128;a+=8){const o={x:r,y:0,z:a};Ds(o,o)&&e.set(`${r},${a}`,t(r,0,a))}for(const[r,a]of e){const[o,c]=r.split(",").map(Number);for(const[l,h]of[[8,0],[0,8],[8,8],[8,-8]]){const d=e.get(`${o+l},${c+h}`);d!==void 0&&n(a,d)}}const s=[];for(const r of[-88,-64,-51.5,-42.5,-33.5,-24.5,0,24.5,33.5,42.5,51.5,64,88])for(const a of[-14,18])s.push(t(r,-6,a));for(const r of[-88,-64,0,64,88])s.push(t(r,-6,9));for(const r of s)for(const a of s)r<a&&Math.hypot(i[r].x-i[a].x,i[r].z-i[a].z)<=30&&n(r,a);for(const r of Qi){const a=Math.sign(r.outer-r.inner),o=(h,d)=>r.axis==="z"?{x:0,y:d,z:h}:{x:h,y:d,z:9};let c=-1,l=-1;for(let h=0;h<=14;h++){const d=Math.max(0,Math.min(1,(h-1)/12)),u=o(h===0?r.outer+a:h===14?r.inner-a:r.outer+(r.inner-r.outer)*d,-6*d),p=t(u.x,u.y,u.z);c>=0?n(c,p):l=p,c=p}for(const h of e.values())Math.hypot(i[h].x-i[l].x,i[h].z-i[l].z)<13&&n(l,h);for(const h of s)Math.hypot(i[h].x-i[c].x,i[h].z-i[c].z)<20&&n(c,h)}return qa=i,i}function yh(i,e){return e.map((n,s)=>({id:s,d:Math.hypot(n.x-i.x,n.z-i.z)+Math.abs(n.y-i.y)*4})).sort((n,s)=>n.d-s.d).find(({id:n,d:s})=>s<30&&Ds(i,e[n]))?.id}function zv(i,e){const t=td(),n=yh(i,t),s=yh(e,t);if(n===void 0||s===void 0)return[];const r=new Set([n]),a=new Map([[n,0]]),o=new Map;for(;r.size;){let c=-1,l=1/0;for(const h of r){const d=t[h],u=t[s],p=a.get(h)+Math.hypot(d.x-u.x,d.y-u.y,d.z-u.z);p<l&&(c=h,l=p)}if(c===s){const h=[s];for(;o.has(h[0]);)h.unshift(o.get(h[0]));for(;h.length>1&&Ds(i,t[h[1]]);)h.shift();return[...h.map(d=>t[d]),...Ds(t[s],e)?[e]:[]]}r.delete(c);for(const h of t[c].edges){const d=t[c],u=t[h],p=a.get(c)+Math.hypot(d.x-u.x,d.y-u.y,d.z-u.z);p<(a.get(h)??1/0)&&(a.set(h,p),o.set(h,c),r.add(h))}}return[]}class Hv{routes=new Map;canSee(e,t,n,s=38){return e.alive&&t.alive&&e.position.distanceTo(t.position)<s&&!n.rayBlocked(e.position.clone().add(new P(0,1.3,0)),t.position)}update(e,t,n,s,r,a,o){if(!e.alive||!t.alive)return;e.cooldown-=n;const c=this.canSee(e,t,s,55),l=e.position.distanceTo(t.position),h={x:e.position.x,y:e.position.y,z:e.position.z};let d=this.routes.get(e.id);d&&d.last.distanceTo(e.position)>5&&(d=void 0),d||(d={path:[],remaining:0,goal:h,velocityY:0,last:e.position.clone()},this.routes.set(e.id,d)),d.remaining-=n;const u={x:t.position.x,y:t.position.y-1.65,z:t.position.z};if(u.y>1&&(u.y=0),d.remaining<=0){if(c||u.y<-2||h.y<-2)d.goal=u;else if(!d.path.length){const T=td().filter(S=>S.y===0);d.goal=T[Math.floor(Math.random()*T.length)]}d.path=zv(h,d.goal),d.remaining=.75}for(;d.path.length&&Math.hypot(d.path[0].x-h.x,d.path[0].z-h.z)<.25&&Math.abs(d.path[0].y-h.y)<.4;)d.path.shift();const p=d.path[0];let g=0,x=0;p&&(g=p.x-h.x,x=p.z-h.z);const m=p?Math.min(n,Math.hypot(g,x)/3.2):n,f={...h,y:h.y+1.65,yaw:0,pitch:0,velocityY:d.velocityY,jumpsUsed:0,alive:!0};vc(f,{moveX:g,moveY:-x,lookX:0,lookY:0,jump:!1},m,{boxes:s.boxes,heightAt:(M,T)=>s.groundHeight(M,T)},3.2/so),e.position.set(f.x,f.y-1.65,f.z),d.velocityY=f.velocityY,d.last.copy(e.position),e.group.position.copy(e.position),(g||x)&&(e.group.rotation.y=Math.atan2(-g,-x)),a&&l<38&&c&&e.cooldown<=0&&(e.cooldown=1.5+Math.random()*.8,o(Math.random()<Math.max(.18,.35-Math.max(0,l-12)*.0065)))}}const Sh=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);class nd{constructor(e){this.el=e,this.death.className="co-dead",this.death.hidden=!0,this.el.parentElement?.append(this.death)}death=document.createElement("div");wasDead=!1;hideTimer=0;signature="";render(e){const t=Number.isFinite(e.reserve)?e.reserve:"∞",n=e.remainingSeconds??0,s=e.score===void 0?`擊殺 ${e.kills} <span>／</span> 死亡 ${e.deaths}`:`積分 ${e.score} / ${e.scoreTarget}<small>賞金 ${e.bounty} · ${Math.floor(n/60)}:${String(n%60).padStart(2,"0")} · K/D ${e.kills}/${e.deaths}</small>`,r=`${e.quickReloadSeconds}|${e.level}|${e.capacity}|${e.hp}|${e.ammo}|${t}|${e.label}|${e.notice}|${e.kills}|${e.deaths}|${e.kill}|${e.reloading}|${s}`;r!==this.signature&&(this.signature=r,this.el.innerHTML=`<div class="co-score">${s}</div><div class="co-hp">生命值 <b>${e.hp}</b></div><div class="co-ammo">${e.label} <span class="co-hud-level">Lv.${e.level??1}</span><br><b>${e.ammo} <small>/ ${e.capacity??t}</small></b><small class="co-reserve">&#28961;&#38480;&#20633;&#24392; ${t}</small>${e.quickReloadSeconds?`<em class="co-quick-reload">&#24555;&#36895;&#25563;&#24392; ${e.quickReloadSeconds}s &middot; -25%</em>`:""}${e.reloading?"<em>換彈中</em>":""}</div>${e.notice?`<div class="co-notice">${Sh(e.notice)}</div>`:""}<i class="co-crosshair ${e.kill?"is-kill":""}"></i>`),e.dead&&!this.wasDead&&(window.clearTimeout(this.hideTimer),this.death.hidden=!1,this.death.classList.remove("is-leaving"),this.death.innerHTML=`<section class="co-dead-card"><p>戰鬥結束</p><h2>你已陣亡</h2><div class="co-dead-killer">擊倒者 <b>${Sh(e.killer||"未知敵人")}</b></div><small>正在準備重生…</small></section>`),!e.dead&&this.wasDead&&(this.death.classList.add("is-leaving"),this.hideTimer=window.setTimeout(()=>{this.death.hidden=!0,this.death.classList.remove("is-leaving")},180)),this.el.parentElement?.classList.toggle("co-is-dead",e.dead),this.wasDead=e.dead}dispose(){window.clearTimeout(this.hideTimer),this.death.remove(),this.el.replaceChildren(),this.el.parentElement?.classList.remove("co-is-dead")}}const id=()=>`<div class="co-mobile">
  <div class="co-joy" aria-hidden="true"><i></i></div>
  <button type="button" data-sprint aria-label="切換跑步" aria-pressed="false">跑步</button>
  <div class="co-actions">
    <button type="button" data-weapon aria-expanded="false">武器庫</button>
    <button type="button" data-reload>換彈</button>
    <button type="button" data-jump aria-label="跳躍，空中再按一次二段跳">跳躍</button>
    <button type="button" data-aim aria-label="切換狙擊鏡" aria-pressed="false" disabled>瞄準</button>
    <button type="button" data-fire>射擊</button>
  </div>
</div><div class="co-rotate" data-game-ui>請旋轉裝置後遊玩</div>`;class sd{constructor(e,t,n,s,r=()=>1){this.root=e,this.choose=t,this.owned=n,this.afterClose=s,this.level=r;const a=this.coarse?"左右滑動選擇，點擊已取得武器裝備":"滾輪選擇，滑鼠左鍵裝備目前選取武器";e.insertAdjacentHTML("beforeend",`<div class="co-armory" hidden><div class="co-armory-head">武器庫<small>${a}</small></div><div class="co-armory-track"></div></div>`),this.box=e.querySelector(".co-armory"),this.track=this.box.querySelector(".co-armory-track"),this.trigger=e.querySelector("[data-weapon]"),this.track.innerHTML=Xt.map(o=>{const c=Et[o];return`<button type="button" class="co-weapon-card" data-armory="${o}" style="--weapon:#${c.color.toString(16).padStart(6,"0")}"><span>${c.icon}</span><b>${c.label}</b><strong class="co-level"></strong><small></small><em></em><div class="co-weapon-stats"></div></button>`}).join(""),e.addEventListener("pointerdown",this.onPointerDown,!0),window.addEventListener("pointermove",this.onPointerMove,!0),window.addEventListener("pointerup",this.onPointerUp,!0),window.addEventListener("pointercancel",this.onPointerCancel,!0),window.PointerEvent||(e.addEventListener("touchstart",this.onTouchStart,{capture:!0,passive:!1}),window.addEventListener("touchmove",this.onTouchMove,!0),window.addEventListener("touchend",this.onTouchEnd,{capture:!0,passive:!1}),window.addEventListener("touchcancel",this.onTouchEnd,!0)),window.addEventListener("blur",this.onInterrupted),window.addEventListener("orientationchange",this.onInterrupted),document.addEventListener("visibilitychange",this.onVisibility),e.addEventListener("combat:reset",this.onInterrupted),e.addEventListener("click",this.onClick,!0),e.addEventListener("wheel",this.onWheel,{passive:!1}),e.addEventListener("armory",this.onArmory),window.addEventListener("keydown",this.onKey),this.render("ar")}suppressMouseClick=!1;touchRelease=null;gestures=new Map;scrollFrame;enabled=!0;open=!1;selected=0;active="ar";signature="";box;track;trigger;coarse=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>0;get pointerLocked(){return!this.coarse&&document.pointerLockElement===this.root}equip(e){!this.owned().has(e)||this.choose(e)===!1||this.close()}selectCard(e){const t=e.dataset.armory,n=Xt.indexOf(t);n<0||(this.selected=n,this.render(),this.equip(t))}consume(e){e.preventDefault(),e.stopImmediatePropagation()}start(e,t,n,s,r,a){if(a||(this.suppressMouseClick=!1),this.touchRelease=null,!this.open||!(s instanceof HTMLElement))return;const o=this.pointerLocked||this.box.contains(s);this.gestures.set(e,{x:t,y:n,inside:o,moved:!1,touch:a,card:o?s.closest("[data-armory]"):null}),o||this.consume(r)}moveGesture(e,t,n){if(this.pointerLocked)return;const s=this.gestures.get(e);s&&Math.hypot(t-s.x,n-s.y)>8&&(s.moved=!0)}end(e,t,n,s,r=!1){const a=this.gestures.get(e);if(!a)return;this.gestures.delete(e);const o=!r&&!a.moved;a.inside?a.touch&&o&&a.card&&document.elementFromPoint(t,n)?.closest("[data-armory]")===a.card&&this.selectCard(a.card):(this.consume(s),o&&this.close()),a.touch?(this.touchRelease={x:t,y:n,expires:Date.now()+500},o&&s.cancelable&&s.preventDefault()):(!o||!a.inside)&&(this.suppressMouseClick=!0)}onPointerDown=e=>{e.button===0&&this.start(e.pointerId,e.clientX,e.clientY,e.target,e,e.pointerType==="touch")};onPointerMove=e=>this.moveGesture(e.pointerId,e.clientX,e.clientY);onPointerUp=e=>{this.moveGesture(e.pointerId,e.clientX,e.clientY),this.end(e.pointerId,e.clientX,e.clientY,e)};onPointerCancel=e=>this.end(e.pointerId,e.clientX,e.clientY,e,!0);onTouchStart=e=>{for(const t of Array.from(e.changedTouches))this.start(t.identifier,t.clientX,t.clientY,t.target??e.target,e,!0)};onTouchMove=e=>{for(const t of Array.from(e.changedTouches))this.moveGesture(t.identifier,t.clientX,t.clientY)};onTouchEnd=e=>{for(const t of Array.from(e.changedTouches))this.moveGesture(t.identifier,t.clientX,t.clientY),this.end(t.identifier,t.clientX,t.clientY,e,e.type==="touchcancel")};onClick=e=>{const t=this.touchRelease;if(t&&Date.now()<t.expires&&e.detail>0&&Math.hypot(e.clientX-t.x,e.clientY-t.y)<25){this.touchRelease=null,this.consume(e);return}if(this.suppressMouseClick){this.suppressMouseClick=!1,this.consume(e);return}if(this.coarse&&e.detail>0&&(!("pointerType"in e)||e.pointerType==="touch")){this.open&&this.consume(e);return}if(!this.open||!(e.target instanceof HTMLElement))return;if(this.consume(e),this.pointerLocked){this.equip(Xt[this.selected]);return}if(!this.box.contains(e.target)){this.close();return}const n=e.target.closest("[data-armory]");n&&this.selectCard(n)};onWheel=e=>{this.open&&(e.preventDefault(),this.move(e.deltaY>0?1:-1))};onArmory=()=>this.toggle();onInterrupted=()=>this.close(!1);onVisibility=()=>{document.hidden&&this.close(!1)};onKey=e=>{!this.enabled||e.repeat||e.key.toLowerCase()!=="q"||e.target instanceof HTMLElement&&e.target.closest("input, textarea, select, [contenteditable]")||(e.preventDefault(),this.toggle())};get isOpen(){return this.open}setEnabled(e){this.enabled=e,e||this.close(!1)}close(e=!0){this.gestures.clear(),this.suppressMouseClick=!1,this.touchRelease=null,this.scrollFrame!==void 0&&(cancelAnimationFrame(this.scrollFrame),this.scrollFrame=void 0),this.open&&(this.open=!1,this.box.hidden=!0,this.signature="",this.trigger?.setAttribute("aria-expanded","false"),e&&this.afterClose?.())}toggle(){if(!this.enabled)return;if(this.open){this.close();return}this.root.dispatchEvent(new Event("armory:open")),this.open=!0,this.box.hidden=!1,this.trigger?.setAttribute("aria-expanded","true");const e=Xt.indexOf(this.active);e>=0&&(this.selected=e),this.render(),this.scrollSelected(!1)}move(e){this.selected=(this.selected+e+Xt.length)%Xt.length,this.render(),this.scrollSelected()}render(e=this.active){this.active=e,this.box.hidden=!this.open;const t=this.owned(),n=`${this.open}|${e}|${this.selected}|${Xt.map(s=>`${t.has(s)}:${this.level(s)}`).join("|")}`;n!==this.signature&&(this.signature=n,Xt.forEach((s,r)=>{const a=this.track.children[r],o=t.has(s),c=Et[s],l=this.level(s);a.classList.toggle("active",s===e),a.classList.toggle("focus",r===this.selected),a.classList.toggle("locked",!o),a.setAttribute("aria-disabled",String(!o)),a.dataset.level=o?String(l):"0",a.querySelector("small").textContent=o?c.description:"尚未取得";const h=a.querySelector(".co-level"),d=a.querySelector("em");h&&(h.textContent=o?`Lv.${l}${l===3?" · 滿級":""}`:"未解鎖"),d&&(d.textContent=`${mn(s,l)} 發彈匣`);const u=a.querySelector(".co-weapon-stats");u&&(u.textContent=`${c.pellets?"每顆":"傷害"} ${Math.round(c.damage*Kr(l))} · 射程 ${Number(Jr(s,l).toFixed(2))}`)}))}scrollSelected(e=!0){this.scrollFrame!==void 0&&cancelAnimationFrame(this.scrollFrame),this.scrollFrame=requestAnimationFrame(()=>{if(this.scrollFrame=void 0,!this.open)return;const t=this.track.children[this.selected],n=t.offsetLeft+(t.offsetWidth-this.track.clientWidth)/2;this.track.scrollTo({left:n,behavior:e?"smooth":"instant"})})}dispose(){this.enabled=!1,this.open=!1,this.close(),this.box.remove(),window.removeEventListener("blur",this.onInterrupted),window.removeEventListener("orientationchange",this.onInterrupted),document.removeEventListener("visibilitychange",this.onVisibility),this.root.removeEventListener("combat:reset",this.onInterrupted),this.root.removeEventListener("pointerdown",this.onPointerDown,!0),this.root.removeEventListener("touchstart",this.onTouchStart,!0),window.removeEventListener("pointermove",this.onPointerMove,!0),window.removeEventListener("pointerup",this.onPointerUp,!0),window.removeEventListener("pointercancel",this.onPointerCancel,!0),window.removeEventListener("touchmove",this.onTouchMove,!0),window.removeEventListener("touchend",this.onTouchEnd,!0),window.removeEventListener("touchcancel",this.onTouchEnd,!0),this.root.removeEventListener("click",this.onClick,!0),this.root.removeEventListener("wheel",this.onWheel),this.root.removeEventListener("armory",this.onArmory),window.removeEventListener("keydown",this.onKey)}}class rd{constructor(e){this.update=e}id=0;last=0;running=!1;start(){if(this.running)return;this.running=!0,this.last=0;const e=t=>{if(!this.running)return;const n=Math.min(.05,(t-this.last)/1e3||0);this.last=t,this.update(n),this.running&&(this.id=requestAnimationFrame(e))};this.id=requestAnimationFrame(e)}stop(){this.running=!1,cancelAnimationFrame(this.id),this.id=0,this.last=0}}class Gv{constructor(e){this.root=e;const t=new Bu;this.renderer=new Ru({antialias:t.antialias,powerPreference:"high-performance"}),this.renderer.setPixelRatio(t.pixelRatio),this.renderer.setClearColor(1489372),e.append(this.renderer.domElement),e.insertAdjacentHTML("beforeend",'<div class="co-feedback"></div><div class="co-hud"></div>'+id()),this.hud=new nd(e.querySelector(".co-hud")),this.aimFeedback=new Ou(e),this.armory=new sd(e,r=>{this.owned.has(r)&&(this.input.set({aim:!1}),this.active=r,this.armory.render(this.active))},()=>this.owned,this.restorePointerLock,r=>this.weapons.get(r).level),this.feedback=new Ju(e.querySelector(".co-feedback")),this.scene.add(this.arena.group,new vu(16777215,1489372,2)),this.effects=new zu(this.scene,this.coarse),this.battle=new Hu(e),this.makeGun(),this.appearance=new Pu(this.gun),this.pickupFeedback=new Cu(e,this.coarse),this.pickupPreview=new Bh(e),this.scope=new ku(e,this.gun,this.coarse);const n=[16731770,3594436,16235083,10975231,5285631,16739127,3656447,9626447],s=["RED","BLUE","GREEN","YELLOW","PURPLE","ORANGE","CYAN","LIME"];n.forEach((r,a)=>{const o=new ed("bot"+a,s[a],r);o.respawn(...this.spawns.choose(this.bots,o.id)),this.bots.push(o),this.scene.add(o.group,o.deathGroup)}),this.player.respawn(this.spawns.choose(this.bots)),Xt.forEach(r=>this.addPickup(r)),this.coarse?this.mobile=new Ku(e,this.input):(this.desktop=new Zu(e,this.input),e.onclick=r=>{r.target.closest(".co-armory, [data-game-ui], button, input")||this.restorePointerLock()}),this.stopResize=Ch(e,(r,a)=>{this.cam.aspect=r/a,this.cam.updateProjectionMatrix(),this.renderer.setSize(r,a,!1)}),this.loop=new rd(r=>this.update(r)),this.settings=new Yu(e,()=>{this.root.dispatchEvent(new Event("combat:reset")),this.desktop?.setEnabled(!1),this.mobile?.setEnabled(!1),this.armory.setEnabled(!1),this.loop.stop()},r=>{this.desktop?.setEnabled(!0),this.mobile?.setEnabled(!0),this.armory.setEnabled(!0),this.loop.start(),r&&this.restorePointerLock()},!1)}scene=new Pc;cam=new qt(75,1,Bc,fc);renderer;input=new $u;arena=new ju;collision=new Cv(this.arena.boxes,(e,t)=>this.arena.groundHeight(e,t));player=new Qu;controller=new Bv;bots=[];ai=new Hv;spawns=new Pv(this.arena.spawns);respawn=new Lv;weapons=new Map(Xt.map(e=>[e,new kv(Et[e])]));active="ar";owned=new Set(["ar"]);pickups=[];hud;aimFeedback;armory;feedback;effects;battle;killTracker=new yv("solo");shotSequence=0;elapsed=0;status=new Map;statusTimer=0;loop;settings;desktop;mobile;mode=new Iv;hit=0;kill=0;shake=0;notice="";noticeT=0;gun=new $t;gunFlash;dead=!1;killer="";coarse=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>0;stopResize=()=>{};pickupPreview;pickupFeedback;appearance;scope;aiming=!1;restorePointerLock=()=>{if(!(this.coarse||this.settings?.isOpen||document.pointerLockElement===this.root))try{this.root.requestPointerLock?.()?.catch(()=>{})}catch{}};makeGun(){const e=new nt({color:2106932}),t=new nt({color:this.player.color}),n=new Fe(new yt(.18,.16,.9),e);n.position.set(.34,-.28,-.8);for(const[s,r,a,o]of[[.47,-.52,-.5,-.55],[.12,-.55,-.63,.42],[.37,-.43,-.74,0],[.17,-.42,-.86,0]]){const c=new Fe(new yt(.18,.28,.18),t);c.position.set(s,r,a),c.rotation.z=o,this.gun.add(c)}this.gunFlash=new Fe(new ns(.08),new nt({color:16766045})),this.gunFlash.position.set(.34,-.25,-1.3),this.gunFlash.visible=!1,this.gun.add(n,this.gunFlash),this.cam.add(this.gun),this.scene.add(this.cam)}pickupPoint(e,t){return Tv([this.player,...this.bots].map(n=>({x:n.position.x,y:n.position.y-(n===this.player?1.65:0),z:n.position.z,alive:n.alive})),this.pickups.filter(n=>n.mesh.visible).map(n=>({x:n.position.x,y:n.position.y-.9,z:n.position.z})),e,Math.random,t?wv(t):void 0)}addPickup(e){const t=new Fe(new ns(.75),new nt({color:Et[e].color})),n=this.pickupPoint(void 0,e);t.visible=!!n,n&&t.position.set(n.x,n.y+.9,n.z),this.scene.add(t),this.pickups.push({id:e,mesh:t,position:t.position.clone(),cooldown:n?0:.1})}respawnPickup(e){const t=this.pickupPoint({x:e.position.x,y:e.position.y-.9,z:e.position.z});if(!t){e.cooldown=.1;return}e.position.set(t.x,t.y+.9,t.z),e.mesh.position.copy(e.position),e.mesh.visible=!0}resetInput(){this.armory.close(!1),this.desktop?.setEnabled(!0),this.mobile?.reset(),this.input.reset()}actors(){return[{id:"player",x:this.player.position.x,y:this.player.position.y,z:this.player.position.z,yaw:this.player.yaw,alive:this.player.alive},...this.bots.map(e=>({id:e.id,x:e.position.x,y:e.position.y+1.65,z:e.position.z,yaw:e.group.rotation.y,alive:e.alive}))]}actor(e){return e==="player"?this.player:this.bots.find(t=>t.id===e)}actorName(e){return e==="player"?"YOU":this.bots.find(t=>t.id===e)?.name??e}damageActor(e,t,n){const s=this.actor(t.targetId),r=this.actor(e);if(!s?.alive||!r)return;const a=Math.min(s.hp,t.damage);s.damage(a);const o=!s.alive;if(t.targetId==="player"&&(this.feedback.damage(a,r.position,this.player.position,new P(-Math.sin(this.player.yaw),0,-Math.cos(this.player.yaw))),o)){for(const c of this.weapons.values())c.clearBoost();this.dead=!0,this.resetInput(),this.killer=this.actorName(e),this.mode.onDeath()}return o&&(this.status.delete(t.targetId),this.respawn.kill(t.targetId),e==="player"&&(this.mode.onKill(),this.kill=.3),this.battle.kill(this.killTracker.record({id:e,name:this.actorName(e),alive:r.alive},{id:t.targetId,name:this.actorName(t.targetId)},n,t.headshot,this.elapsed*1e3))),{...t,damage:a,killed:o}}shootActor(e,t,n,s,r){const a=Nu(t,n.toArray(),s.toArray(),this.actors().filter(h=>h.id!==e),Math.random,ro(this.elapsed),e==="player"&&this.aiming,e==="player"?this.weapons.get(t).level:1),o=`solo:shot:${++this.shotSequence}`,c={...a,eventId:o,id:e,weapon:t,origin:n.toArray(),dir:s.toArray()};this.effects.play(c,r,!0,e==="player");const l=[];for(const h of a.hits){const d=this.damageActor(e,h,t);if(d&&(l.push(d),!d.killed&&(t==="ice"||t==="flame"))){const u=this.status.get(h.targetId)??{slowUntil:0};t==="ice"?u.slowUntil=this.elapsed+1.25:u.burn={damage:Math.round(4*Kr(this.weapons.get(t).level)),attackerId:e,nextTick:u.burn?.nextTick??this.elapsed+.25,expiresAt:this.elapsed+2},this.status.set(h.targetId,u)}}e==="player"&&l.length&&(this.hit=.12,this.battle.hit({eventId:o,weapon:t,hits:l}))}fire(){this.shake=.035,this.gun.position.z=this.shake*2,this.gun.rotation.x=this.shake,this.cam.position.copy(this.player.position),this.cam.rotation.set(this.player.pitch,this.player.yaw,0,"YXZ"),this.cam.updateMatrixWorld(!0),this.shootActor("player",this.active,this.player.position.clone(),new P(...Qo(this.player.yaw,this.player.pitch)),Ts(this.gunFlash,this.active)),this.shake=.035}updateStatuses(e){this.statusTimer+=e;const t=this.statusTimer>=.08;t&&(this.statusTimer=0);for(const[n,s]of this.status){const r=this.actor(n);if(!r?.alive){this.status.delete(n);continue}for(;s.burn&&s.burn.nextTick<=this.elapsed&&s.burn.nextTick<=s.burn.expiresAt;){const a=s.burn.attackerId;s.burn.nextTick+=.25;const o=this.damageActor(a,{targetId:n,damage:s.burn.damage,headshot:!1,position:[r.position.x,r.position.y+(n==="player"?-.4:1.22),r.position.z]},"flame");if(o&&a==="player"&&this.battle.hit({eventId:`solo:burn:${++this.shotSequence}`,weapon:"flame",hits:[o]}),!r.alive)break}s.burn&&this.elapsed>=s.burn.expiresAt&&(s.burn=void 0),t&&r.alive&&(s.burn||s.slowUntil>this.elapsed)&&this.effects.status(r.position.clone().add(new P(0,n==="player"?-.4:1.22,0)),s.burn?"flame":"ice"),!s.burn&&s.slowUntil<=this.elapsed&&this.status.delete(n)}}update(e){this.elapsed+=e,this.desktop?.update(),this.updateStatuses(e);const t=this.input.getState();if(t.switchWeapon){const l=Xt[t.switchWeapon-1];l&&this.owned.has(l)&&(this.input.set({aim:!1}),t.aim=!1,this.active=l)}const n=this.weapons.get(this.active);t.reload&&n.reload();const s=this.armory.isOpen||!!this.settings?.isOpen;(this.active!=="sniper"||n.reloading||!this.player.alive||s)&&(this.input.set({aim:!1}),t.aim=!1),s&&(t.shoot=!1,this.input.clearCombat()),this.aiming=this.scope.update(this.active,t,this.player.alive,n.reloading,s),this.aiming&&(t.lookX*=.25,t.lookY*=.25),this.controller.update(this.player,t,e,this.collision,(this.status.get("player")?.slowUntil??0)>this.elapsed?.65:1,this.elapsed-e),this.arena.update(this.elapsed,this.elapsed,this.renderer);for(const[l,h]of this.weapons)h.update(e,l===this.active&&!s&&t.shoot&&this.player.alive).fired&&this.fire();this.pickups.forEach(l=>{if(l.mesh.rotation.y+=e*2,l.cooldown>0)l.cooldown-=e,l.cooldown<=0&&this.respawnPickup(l);else if(this.player.alive&&this.player.position.distanceTo(l.position)<2){const h=this.weapons.get(l.id).collect(this.owned.has(l.id));if(!h)return;this.owned.add(l.id),l.cooldown=30,l.mesh.visible=!1,this.pickupFeedback.push(h),this.armory.render(this.active)}});const r=new Set(this.bots.filter(l=>this.ai.canSee(l,this.player,this.collision,38)).sort((l,h)=>l.position.distanceTo(this.player.position)-h.position.distanceTo(this.player.position)).slice(0,3).map(l=>l.id));this.bots.forEach(l=>{const h=l.position.clone();this.ai.update(l,this.player,(this.status.get(l.id)?.slowUntil??0)>this.elapsed?e*.65:e,this.collision,this.arena.waypoints,r.has(l.id),d=>{const u=l.position.clone().add(new P(0,1.65,0)),p=this.player.position.clone().add(new P(0,-.43,0));d||p.add(new P((Math.random()<.5?-1:1)*(1.3+Math.random()),Math.random()*.5,0)),this.shootActor(l.id,"ar",u,p.sub(u).normalize(),l.muzzlePosition())}),l.updateVisual(e,l.position.distanceToSquared(h)>.001,l.alive&&this.player.alive)}),this.respawn.update(e,l=>{if(l==="player"){this.player.respawn(this.spawns.choose(this.bots));for(const h of this.weapons.values())h.refill();this.status.delete("player"),this.resetInput(),this.dead=!1}else{const h=this.bots.find(d=>d.id===l);h&&h.respawn(...this.spawns.choose([this.player,...this.bots.filter(d=>d!==h)],h.id))}}),this.hit=Math.max(0,this.hit-e),this.kill=Math.max(0,this.kill-e),this.noticeT=Math.max(0,this.noticeT-e),this.effects.update(e),this.feedback.update(e,this.player.hp),this.cam.position.copy(this.player.position),this.cam.rotation.set(this.player.pitch,this.player.yaw,0,"YXZ"),this.gun.position.z=this.shake*2,this.gun.rotation.x=this.shake,this.shake=Math.max(0,this.shake-e*.5),this.armory.render(this.active),this.appearance.update(this.active,n.level),this.pickupFeedback.update(e),this.hud.render({quickReloadSeconds:Math.ceil(n.quickReloadSeconds),level:n.level,capacity:n.capacity,hp:this.player.hp,ammo:n.ammo,reserve:n.reserve,label:n.spec.label,notice:this.noticeT?this.notice:"",kills:this.mode.kills,deaths:this.mode.deaths,dead:this.dead,killer:this.killer,hit:this.hit>0,kill:this.kill>0,reloading:n.reloading}),this.cam.updateMatrixWorld(!0),this.battle.update(e,this.cam);const a=ro(this.elapsed),o=this.actors().filter(l=>l.id!=="player");this.pickupPreview.update(this.pickups.map(l=>({id:l.id,position:l.position,available:l.mesh.visible,owned:this.owned.has(l.id),state:this.weapons.get(l.id)})),this.cam.position,a,this.player.alive&&!s),this.effects.updateLocalMuzzle(Ts(this.gunFlash,this.active),this.active,this.cam.position,a),this.effects.localFlame(this.player.alive&&!s&&t.shoot&&this.active==="flame"&&!n.reloading,Ts(this.gunFlash,this.active),this.cam.position,new P(...Qo(this.player.yaw,this.player.pitch)),a,e,o,n.level);const c=Fu({x:this.player.position.x,y:this.player.position.y,z:this.player.position.z,yaw:this.player.yaw,pitch:this.player.pitch});this.aimFeedback.update(s||!this.player.alive?"neutral":Uu(this.active,c.origin,c.direction,o,a,n.level),this.player.alive&&!s),this.scope.render(this.renderer,this.scene,this.cam)}start(){this.loop.start()}dispose(){this.pickupPreview.dispose(),this.pickupFeedback.dispose(),this.hud.dispose(),this.aimFeedback.dispose();for(const e of this.bots)e.dispose();this.scope.dispose(),this.arena.dispose(),this.settings?.dispose(),this.root.onclick=null,this.loop.stop(),this.stopResize(),this.desktop?.dispose(),this.mobile?.dispose(),this.armory.dispose(),this.effects.dispose(),this.battle.dispose(),this.status.clear(),this.killTracker.reset(),this.feedback.dispose(),ia(this.scene),this.scene.clear(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.root.replaceChildren()}}const ic=1500,Vv=100,ad=200;function Wv(i){const e=[...i].sort((n,s)=>s.score-n.score);let t=0;return e.map((n,s)=>((s===0||n.score!==e[s-1].score)&&(t=s+1),{...n,rank:t}))}const In=Object.create(null);In.open="0";In.close="1";In.ping="2";In.pong="3";In.message="4";In.upgrade="5";In.noop="6";const Rr=Object.create(null);Object.keys(In).forEach(i=>{Rr[In[i]]=i});const sc={type:"error",data:"parser error"},od=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",cd=typeof ArrayBuffer=="function",ld=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i&&i.buffer instanceof ArrayBuffer,Gc=({type:i,data:e},t,n)=>od&&e instanceof Blob?t?n(e):Mh(e,n):cd&&(e instanceof ArrayBuffer||ld(e))?t?n(e):Mh(new Blob([e]),n):n(In[i]+(e||"")),Mh=(i,e)=>{const t=new FileReader;return t.onload=function(){const n=t.result.split(",")[1];e("b"+(n||""))},t.readAsDataURL(i)};function Eh(i){return i instanceof Uint8Array?i:i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength)}let Ya;function Xv(i,e){if(od&&i.data instanceof Blob)return i.data.arrayBuffer().then(Eh).then(e);if(cd&&(i.data instanceof ArrayBuffer||ld(i.data)))return e(Eh(i.data));Gc(i,!1,t=>{Ya||(Ya=new TextEncoder),e(Ya.encode(t))})}const bh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ms=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let i=0;i<bh.length;i++)Ms[bh.charCodeAt(i)]=i;const qv=i=>{let e=i.length*.75,t=i.length,n,s=0,r,a,o,c;i[i.length-1]==="="&&(e--,i[i.length-2]==="="&&e--);const l=new ArrayBuffer(e),h=new Uint8Array(l);for(n=0;n<t;n+=4)r=Ms[i.charCodeAt(n)],a=Ms[i.charCodeAt(n+1)],o=Ms[i.charCodeAt(n+2)],c=Ms[i.charCodeAt(n+3)],h[s++]=r<<2|a>>4,h[s++]=(a&15)<<4|o>>2,h[s++]=(o&3)<<6|c&63;return l},Yv=typeof ArrayBuffer=="function",Vc=(i,e)=>{if(typeof i!="string")return{type:"message",data:hd(i,e)};const t=i.charAt(0);return t==="b"?{type:"message",data:$v(i.substring(1),e)}:Rr[t]?i.length>1?{type:Rr[t],data:i.substring(1)}:{type:Rr[t]}:sc},$v=(i,e)=>{if(Yv){const t=qv(i);return hd(t,e)}else return{base64:!0,data:i}},hd=(i,e)=>{switch(e){case"blob":return i instanceof Blob?i:new Blob([i]);case"arraybuffer":default:return i instanceof ArrayBuffer?i:i.buffer}},ud="",Zv=(i,e)=>{const t=i.length,n=new Array(t);let s=0;i.forEach((r,a)=>{Gc(r,!1,o=>{n[a]=o,++s===t&&e(n.join(ud))})})},Kv=(i,e)=>{const t=i.split(ud),n=[];for(let s=0;s<t.length;s++){const r=Vc(t[s],e);if(n.push(r),r.type==="error")break}return n};function Jv(){return new TransformStream({transform(i,e){Xv(i,t=>{const n=t.length;let s;if(n<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,n);else if(n<65536){s=new Uint8Array(3);const r=new DataView(s.buffer);r.setUint8(0,126),r.setUint16(1,n)}else{s=new Uint8Array(9);const r=new DataView(s.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(n))}i.data&&typeof i.data!="string"&&(s[0]|=128),e.enqueue(s),e.enqueue(t)})}})}let $a;function pr(i){return i.reduce((e,t)=>e+t.length,0)}function mr(i,e){if(i[0].length===e)return i.shift();const t=new Uint8Array(e);let n=0;for(let s=0;s<e;s++)t[s]=i[0][n++],n===i[0].length&&(i.shift(),n=0);return i.length&&n<i[0].length&&(i[0]=i[0].slice(n)),t}function jv(i,e){$a||($a=new TextDecoder);const t=[];let n=0,s=-1,r=!1;return new TransformStream({transform(a,o){for(t.push(a);;){if(n===0){if(pr(t)<1)break;const c=mr(t,1);r=(c[0]&128)===128,s=c[0]&127,s<126?n=3:s===126?n=1:n=2}else if(n===1){if(pr(t)<2)break;const c=mr(t,2);s=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),n=3}else if(n===2){if(pr(t)<8)break;const c=mr(t,8),l=new DataView(c.buffer,c.byteOffset,c.length),h=l.getUint32(0);if(h>Math.pow(2,21)-1){o.enqueue(sc);break}s=h*Math.pow(2,32)+l.getUint32(4),n=3}else{if(pr(t)<s)break;const c=mr(t,s);o.enqueue(Vc(r?c:$a.decode(c),e)),n=0}if(s===0||s>i){o.enqueue(sc);break}}}})}const dd=4;function Tt(i){if(i)return Qv(i)}function Qv(i){for(var e in Tt.prototype)i[e]=Tt.prototype[e];return i}Tt.prototype.on=Tt.prototype.addEventListener=function(i,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+i]=this._callbacks["$"+i]||[]).push(e),this};Tt.prototype.once=function(i,e){function t(){this.off(i,t),e.apply(this,arguments)}return t.fn=e,this.on(i,t),this};Tt.prototype.off=Tt.prototype.removeListener=Tt.prototype.removeAllListeners=Tt.prototype.removeEventListener=function(i,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+i];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+i],this;for(var n,s=0;s<t.length;s++)if(n=t[s],n===e||n.fn===e){t.splice(s,1);break}return t.length===0&&delete this._callbacks["$"+i],this};Tt.prototype.emit=function(i){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+i],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(t){t=t.slice(0);for(var n=0,s=t.length;n<s;++n)t[n].apply(this,e)}return this};Tt.prototype.emitReserved=Tt.prototype.emit;Tt.prototype.listeners=function(i){return this._callbacks=this._callbacks||{},this._callbacks["$"+i]||[]};Tt.prototype.hasListeners=function(i){return!!this.listeners(i).length};const ra=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),sn=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),ex="arraybuffer";function fd(i,...e){return e.reduce((t,n)=>(i.hasOwnProperty(n)&&(t[n]=i[n]),t),{})}const tx=sn.setTimeout,nx=sn.clearTimeout;function aa(i,e){e.useNativeTimers?(i.setTimeoutFn=tx.bind(sn),i.clearTimeoutFn=nx.bind(sn)):(i.setTimeoutFn=sn.setTimeout.bind(sn),i.clearTimeoutFn=sn.clearTimeout.bind(sn))}const ix=1.33;function sx(i){return typeof i=="string"?rx(i):Math.ceil((i.byteLength||i.size)*ix)}function rx(i){let e=0,t=0;for(let n=0,s=i.length;n<s;n++)e=i.charCodeAt(n),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(n++,t+=4);return t}function pd(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function ax(i){let e="";for(let t in i)i.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(i[t]));return e}function ox(i){let e={},t=i.split("&");for(let n=0,s=t.length;n<s;n++){let r=t[n].split("=");e[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return e}class cx extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}}class Wc extends Tt{constructor(e){super(),this.writable=!1,aa(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,n){return super.emitReserved("error",new cx(e,t,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=Vc(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=ax(e);return t.length?"?"+t:""}}class lx extends Wc{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||t()})),this.writable||(n++,this.once("drain",function(){--n||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};Kv(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Zv(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=pd()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}}let md=!1;try{md=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const hx=md;function ux(){}class dx extends lx{constructor(e){if(super(e),typeof location<"u"){const t=location.protocol==="https:";let n=location.port;n||(n=t?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",(s,r)=>{this.onError("xhr post error",s,r)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,n)=>{this.onError("xhr poll error",t,n)}),this.pollXhr=e}}class Cn extends Tt{constructor(e,t,n){super(),this.createRequest=e,aa(this,n),this._opts=n,this._method=n.method||"GET",this._uri=t,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var e;const t=fd(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(t);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&n.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var s;n.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=Cn.requestsCount++,Cn.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=ux,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Cn.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Cn.requestsCount=0;Cn.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",wh);else if(typeof addEventListener=="function"){const i="onpagehide"in sn?"pagehide":"unload";addEventListener(i,wh,!1)}}function wh(){for(let i in Cn.requests)Cn.requests.hasOwnProperty(i)&&Cn.requests[i].abort()}const fx=(function(){const i=gd({xdomain:!1});return i&&i.responseType!==null})();class px extends dx{constructor(e){super(e);const t=e&&e.forceBase64;this.supportsBinary=fx&&!t}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new Cn(gd,this.uri(),e)}}function gd(i){const e=i.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||hx))return new XMLHttpRequest}catch{}if(!e)try{return new sn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const _d=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class mx extends Wc{get name(){return"websocket"}doOpen(){const e=this.uri(),t=this.opts.protocols,n=_d?{}:fd(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,n)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],s=t===e.length-1;Gc(n,this.supportsBinary,r=>{try{this.doWrite(n,r)}catch{}s&&ra(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=pd()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}}const Za=sn.WebSocket||sn.MozWebSocket;class gx extends mx{createSocket(e,t,n){return _d?new Za(e,t,n):t?new Za(e,t):new Za(e)}doWrite(e,t){this.ws.send(t)}}class _x extends Wc{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const t=jv(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),s=Jv();s.readable.pipeTo(e.writable),this._writer=s.writable.getWriter();const r=()=>{n.read().then(({done:o,value:c})=>{o||(this.onPacket(c),r())}).catch(o=>{})};r();const a={type:"open"};this.query.sid&&(a.data=`{"sid":"${this.query.sid}"}`),this._writer.write(a).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],s=t===e.length-1;this._writer.write(n).then(()=>{s&&ra(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const vx={websocket:gx,webtransport:_x,polling:px},xx=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,yx=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function rc(i){if(i.length>8e3)throw"URI too long";const e=i,t=i.indexOf("["),n=i.indexOf("]");t!=-1&&n!=-1&&(i=i.substring(0,t)+i.substring(t,n).replace(/:/g,";")+i.substring(n,i.length));let s=xx.exec(i||""),r={},a=14;for(;a--;)r[yx[a]]=s[a]||"";return t!=-1&&n!=-1&&(r.source=e,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=Sx(r,r.path),r.queryKey=Mx(r,r.query),r}function Sx(i,e){const t=/\/{2,9}/g,n=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function Mx(i,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,s,r){s&&(t[s]=r)}),t}const ac=typeof addEventListener=="function"&&typeof removeEventListener=="function",Cr=[];ac&&addEventListener("offline",()=>{Cr.forEach(i=>i())},!1);class ni extends Tt{constructor(e,t){if(super(),this.binaryType=ex,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(t=e,e=null),e){const n=rc(e);t.hostname=n.host,t.secure=n.protocol==="https"||n.protocol==="wss",t.port=n.port,n.query&&(t.query=n.query)}else t.host&&(t.hostname=rc(t.host).host);aa(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},t.transports.forEach(n=>{const s=n.prototype.name;this.transports.push(s),this._transportsByName[s]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=ox(this.opts.query)),ac&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Cr.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=dd,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&ni.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",t=>this._onClose("transport close",t))}onOpen(){this.readyState="open",ni.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let n=0;n<this.writeBuffer.length;n++){const s=this.writeBuffer[n].data;if(s&&(t+=sx(s)),n>0&&t>this._maxPayload)return this.writeBuffer.slice(0,n);t+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,ra(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,t,n){return this._sendPacket("message",e,t,n),this}send(e,t,n){return this._sendPacket("message",e,t,n),this}_sendPacket(e,t,n,s){if(typeof t=="function"&&(s=t,t=void 0),typeof n=="function"&&(s=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const r={type:e,data:t,options:n};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),s&&this.once("flush",s),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(ni.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),ac&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=Cr.indexOf(this._offlineEventListener);n!==-1&&Cr.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}}ni.protocol=dd;class Ex extends ni{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let t=this.createTransport(e),n=!1;ni.priorWebsocketSuccess=!1;const s=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",d=>{if(!n)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;ni.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(h(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const u=new Error("probe error");u.transport=t.name,this.emitReserved("upgradeError",u)}}))};function r(){n||(n=!0,h(),t.close(),t=null)}const a=d=>{const u=new Error("probe error: "+d);u.transport=t.name,r(),this.emitReserved("upgradeError",u)};function o(){a("transport closed")}function c(){a("socket closed")}function l(d){t&&d.name!==t.name&&r()}const h=()=>{t.removeListener("open",s),t.removeListener("error",a),t.removeListener("close",o),this.off("close",c),this.off("upgrading",l)};t.once("open",s),t.once("error",a),t.once("close",o),this.once("close",c),this.once("upgrading",l),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||t.open()},200):t.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const t=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}}let bx=class extends Ex{constructor(e,t={}){const n=typeof e=="object",s=n?{...e}:{...t};(!s.transports||s.transports&&typeof s.transports[0]=="string")&&(s.transports=(s.transports||["polling","websocket","webtransport"]).map(r=>vx[r]).filter(r=>!!r)),super(n?s:e,s)}};function wx(i,e="",t){let n=i;t=t||typeof location<"u"&&location,i==null&&(i=t.protocol+"//"+t.host),typeof i=="string"&&(i.charAt(0)==="/"&&(i.charAt(1)==="/"?i=t.protocol+i:i=t.host+i),/^(https?|wss?):\/\//.test(i)||(typeof t<"u"?i=t.protocol+"//"+i:i="https://"+i),n=rc(i)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const r=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+r+":"+n.port+e,n.href=n.protocol+"://"+r+(t&&t.port===n.port?"":":"+n.port),n}const Tx=typeof ArrayBuffer=="function",Ax=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i.buffer instanceof ArrayBuffer,vd=Object.prototype.toString,Rx=typeof Blob=="function"||typeof Blob<"u"&&vd.call(Blob)==="[object BlobConstructor]",Cx=typeof File=="function"||typeof File<"u"&&vd.call(File)==="[object FileConstructor]";function Xc(i){return Tx&&(i instanceof ArrayBuffer||Ax(i))||Rx&&i instanceof Blob||Cx&&i instanceof File}function Pr(i,e){if(!i||typeof i!="object")return!1;if(Array.isArray(i)){for(let t=0,n=i.length;t<n;t++)if(Pr(i[t]))return!0;return!1}if(Xc(i))return!0;if(i.toJSON&&typeof i.toJSON=="function"&&arguments.length===1)return Pr(i.toJSON(),!0);for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t)&&Pr(i[t]))return!0;return!1}function Px(i){const e=[],t=i.data,n=i;return n.data=Lr(t,e),n.attachments=e.length,{packet:n,buffers:e}}function Lr(i,e,t){if(!i)return i;if(Xc(i)){const n={_placeholder:!0,num:e.length};return e.push(i),n}else if(Array.isArray(i)){const n=new Array(i.length);for(let s=0;s<i.length;s++)n[s]=Lr(i[s],e);return n}else if(typeof i=="object"&&!(i instanceof Date)){if(i.toJSON&&typeof i.toJSON=="function"&&!t)return Lr(i.toJSON(),e,!0);const n={};for(const s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=Lr(i[s],e));return n}return i}function Lx(i,e){return i.data=oc(i.data,e),delete i.attachments,i}function oc(i,e){if(!i)return i;if(i&&i._placeholder===!0){if(typeof i.num=="number"&&i.num>=0&&i.num<e.length)return e[i.num];throw new Error("illegal attachments")}else if(Array.isArray(i))for(let t=0;t<i.length;t++)i[t]=oc(i[t],e);else if(typeof i=="object")for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&(i[t]=oc(i[t],e));return i}const xd=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Ix=5;var Xe;(function(i){i[i.CONNECT=0]="CONNECT",i[i.DISCONNECT=1]="DISCONNECT",i[i.EVENT=2]="EVENT",i[i.ACK=3]="ACK",i[i.CONNECT_ERROR=4]="CONNECT_ERROR",i[i.BINARY_EVENT=5]="BINARY_EVENT",i[i.BINARY_ACK=6]="BINARY_ACK"})(Xe||(Xe={}));class Dx{constructor(e){this.replacer=e}encode(e){return(e.type===Xe.EVENT||e.type===Xe.ACK)&&Pr(e)?this.encodeAsBinary({type:e.type===Xe.EVENT?Xe.BINARY_EVENT:Xe.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===Xe.BINARY_EVENT||e.type===Xe.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=Px(e),n=this.encodeAsString(t.packet),s=t.buffers;return s.unshift(n),s}}class qc extends Tt{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const n=t.type===Xe.BINARY_EVENT;n||t.type===Xe.BINARY_ACK?(t.type=n?Xe.EVENT:Xe.ACK,this.reconstructor=new Nx(t)):super.emitReserved("decoded",t)}else if(Xc(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(Xe[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===Xe.BINARY_EVENT||n.type===Xe.BINARY_ACK){const r=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const a=e.substring(r,t);if(a!=Number(a)||e.charAt(t)!=="-")throw new Error("Illegal attachments");const o=Number(a);if(!yd(o)||o<1)throw new Error("Illegal attachments");if(o>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=o}if(e.charAt(t+1)==="/"){const r=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););n.nsp=e.substring(r,t)}else n.nsp="/";const s=e.charAt(t+1);if(s!==""&&Number(s)==s){const r=t+1;for(;++t;){const a=e.charAt(t);if(a==null||Number(a)!=a){--t;break}if(t===e.length)break}n.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){const r=this.tryParse(e.substr(t));if(qc.isPayloadValid(n.type,r))n.data=r;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case Xe.CONNECT:return $r(t);case Xe.DISCONNECT:return t===void 0;case Xe.CONNECT_ERROR:return typeof t=="string"||$r(t);case Xe.EVENT:case Xe.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&xd.indexOf(t[0])===-1);case Xe.ACK:case Xe.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Nx{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=Lx(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Ux(i){return typeof i=="string"}const yd=Number.isInteger||function(i){return typeof i=="number"&&isFinite(i)&&Math.floor(i)===i};function Fx(i){return i===void 0||yd(i)}function $r(i){return Object.prototype.toString.call(i)==="[object Object]"}function Ox(i,e){switch(i){case Xe.CONNECT:return e===void 0||$r(e);case Xe.DISCONNECT:return e===void 0;case Xe.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&xd.indexOf(e[0])===-1);case Xe.ACK:return Array.isArray(e);case Xe.CONNECT_ERROR:return typeof e=="string"||$r(e);default:return!1}}function Bx(i){return Ux(i.nsp)&&Fx(i.id)&&Ox(i.type,i.data)}const kx=Object.freeze(Object.defineProperty({__proto__:null,Decoder:qc,Encoder:Dx,get PacketType(){return Xe},isPacketValid:Bx,protocol:Ix},Symbol.toStringTag,{value:"Module"}));function pn(i,e,t){return i.on(e,t),function(){i.off(e,t)}}const zx=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Sd extends Tt{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[pn(e,"open",this.onopen.bind(this)),pn(e,"packet",this.onpacket.bind(this)),pn(e,"error",this.onerror.bind(this)),pn(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){var n,s,r;if(zx.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const a={type:Xe.EVENT,data:t};if(a.options={},a.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const h=this.ids++,d=t.pop();this._registerAckCallback(h,d),a.id=h}const o=(s=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||s===void 0?void 0:s.writable,c=this.connected&&!(!((r=this.io.engine)===null||r===void 0)&&r._hasPingExpired());return this.flags.volatile&&!o||(c?(this.notifyOutgoingListeners(a),this.packet(a)):this.sendBuffer.push(a)),this.flags={},this}_registerAckCallback(e,t){var n;const s=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(s===void 0){this.acks[e]=t;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let o=0;o<this.sendBuffer.length;o++)this.sendBuffer[o].id===e&&this.sendBuffer.splice(o,1);t.call(this,new Error("operation has timed out"))},s),a=(...o)=>{this.io.clearTimeoutFn(r),t.apply(this,o)};a.withError=!0,this.acks[e]=a}emitWithAck(e,...t){return new Promise((n,s)=>{const r=(a,o)=>a?s(a):n(o);r.withError=!0,t.push(r),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((s,...r)=>(this._queue[0],s!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(s)):(this._queue.shift(),t&&t(null,...r)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:Xe.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(n=>String(n.id)===e)){const n=this.acks[e];delete this.acks[e],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case Xe.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Xe.EVENT:case Xe.BINARY_EVENT:this.onevent(e);break;case Xe.ACK:case Xe.BINARY_ACK:this.onack(e);break;case Xe.DISCONNECT:this.ondisconnect();break;case Xe.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let n=!1;return function(...s){n||(n=!0,t.packet({type:Xe.ACK,id:e,data:s}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Xe.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const n of t)n.apply(this,e.data)}}}function as(i){i=i||{},this.ms=i.min||100,this.max=i.max||1e4,this.factor=i.factor||2,this.jitter=i.jitter>0&&i.jitter<=1?i.jitter:0,this.attempts=0}as.prototype.duration=function(){var i=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*i);i=(Math.floor(e*10)&1)==0?i-t:i+t}return Math.min(i,this.max)|0};as.prototype.reset=function(){this.attempts=0};as.prototype.setMin=function(i){this.ms=i};as.prototype.setMax=function(i){this.max=i};as.prototype.setJitter=function(i){this.jitter=i};class cc extends Tt{constructor(e,t){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,aa(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((n=t.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new as({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const s=t.parser||kx;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new bx(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const s=pn(t,"open",function(){n.onopen(),e&&e()}),r=o=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",o),e?e(o):this.maybeReconnectOnOpen()},a=pn(t,"error",r);if(this._timeout!==!1){const o=this._timeout,c=this.setTimeoutFn(()=>{s(),r(new Error("timeout")),t.close()},o);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(s),this.subs.push(a),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(pn(e,"ping",this.onping.bind(this)),pn(e,"data",this.ondata.bind(this)),pn(e,"error",this.onerror.bind(this)),pn(e,"close",this.onclose.bind(this)),pn(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){ra(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new Sd(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const n of t)if(this.nsps[n].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(s=>{s?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",s)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const xs={};function Ir(i,e){typeof i=="object"&&(e=i,i=void 0),e=e||{};const t=wx(i,e.path||"/socket.io"),n=t.source,s=t.id,r=t.path,a=xs[s]&&r in xs[s].nsps,o=e.forceNew||e["force new connection"]||e.multiplex===!1||a;let c;return o?c=new cc(n,e):(xs[s]||(xs[s]=new cc(n,e)),c=xs[s]),t.query&&!e.query&&(e.query=t.queryKey),c.socket(t.path,e)}Object.assign(Ir,{Manager:cc,Socket:Sd,io:Ir,connect:Ir});function lc(){const i=He.useId(),e=He.useSyncExternalStore(qu,sa);return k.jsxs("section",{className:"co-sensitivity","aria-label":"視角設定",children:[k.jsxs("label",{htmlFor:i,children:["視角靈敏度 ",k.jsxs("output",{htmlFor:i,children:[e.toFixed(1)," 倍"]})]}),k.jsx("input",{id:i,type:"range",min:zc,max:Hc,step:Vu,value:e,"aria-valuetext":`${e.toFixed(1)} 倍`,onChange:t=>Yr(Number(t.target.value))}),k.jsx("p",{children:"滑鼠與觸控共用倍率，水平與垂直同步調整；1 倍為原本手感。"}),k.jsx("button",{type:"button",onClick:()=>Yr(Is),children:"恢復預設（2 倍）"})]})}let Hx=0;class Gx{constructor(e,t){this.root=e;const n=`co-tactical-${++Hx}`;this.shell.className="co-tactical",this.shell.dataset.gameUi="",this.shell.innerHTML=`<button type="button" class="co-tactical-trigger" aria-label="戰術板" aria-controls="${n}" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 3v18M14 13h3m-3 4h3"/></svg></button>
      <section class="co-mp-roster" id="${n}" aria-label="戰術板" tabindex="-1">
      <header class="co-tactical-heading"><b></b><button type="button" class="co-tactical-close" aria-label="關閉戰術板">×</button></header>
      <div class="co-tactical-scroll"><div class="co-tactical-columns" aria-hidden="true"><span>名次</span><span>玩家</span><span>積分</span><span>賞金</span><span>K/D</span></div><div class="co-tactical-rows"></div></div></section>`,e.append(this.shell),this.panel=this.shell.querySelector(".co-mp-roster"),this.trigger=this.shell.querySelector(".co-tactical-trigger"),this.body=this.shell.querySelector(".co-tactical-rows"),this.heading=this.shell.querySelector(".co-tactical-heading b"),this.setTouchMode(t),e.addEventListener("click",this.onClick,!0),e.addEventListener("pointerdown",this.onPointerDown,!0),e.addEventListener("pointermove",this.onPointerMove,!0),e.addEventListener("pointerup",this.onPointerEnd,!0),e.addEventListener("pointercancel",this.onPointerEnd,!0),window.PointerEvent||(e.addEventListener("touchstart",this.onTouchStart,{capture:!0,passive:!1}),e.addEventListener("touchmove",this.onTouchMove,{capture:!0,passive:!1}),e.addEventListener("touchend",this.onTouchEnd,!0),e.addEventListener("touchcancel",this.onTouchEnd,!0)),e.addEventListener("armory:open",this.close),window.addEventListener("keydown",this.onKey),window.addEventListener("blur",this.onBlur),window.addEventListener("resize",this.layout)}shell=document.createElement("div");panel;trigger;body;heading;rows=new Map;open=!1;touch=!1;active=!0;gestures=new Map;suppressClick=!1;get isOpen(){return this.touch&&this.open}setTouchMode(e){this.touch=e,this.root.classList.toggle("co-touch-ui",e),this.close()}setActive(e){this.active=e,e||this.close(),this.shell.hidden=!e}toggle(){if(!(!this.touch||!this.active)){if(this.open){this.close();return}this.open=!0,this.panel.hidden=!1,this.trigger.setAttribute("aria-expanded","true"),this.root.dispatchEvent(new Event("tactical:open")),this.layout()}}close=()=>{this.open=!1,this.panel.hidden=this.touch,this.trigger.setAttribute("aria-expanded","false"),this.layout()};onBlur=()=>{this.close(),this.gestures.clear(),this.suppressClick=!1};onKey=e=>{this.isOpen&&e.key==="Escape"&&(e.preventDefault(),this.close(),this.trigger.focus({preventScroll:!0}))};contains(e){return e instanceof Node&&this.shell.contains(e)}consume(e,t=!1){t&&e.preventDefault(),e.stopImmediatePropagation()}onPointerDown=e=>{if(!(!this.touch||!this.active)){if(this.suppressClick=!1,this.contains(e.target)){this.gestures.set(e.pointerId,!1),this.consume(e);return}this.open&&(this.close(),this.gestures.set(e.pointerId,!0),this.suppressClick=!0,this.root.setPointerCapture?.(e.pointerId),this.consume(e,!0))}};onPointerMove=e=>{this.gestures.has(e.pointerId)&&this.consume(e,this.gestures.get(e.pointerId))};onPointerEnd=e=>{if(!this.gestures.has(e.pointerId))return;const t=this.gestures.get(e.pointerId);this.gestures.delete(e.pointerId),this.consume(e,t)};onTouchStart=e=>{if(!this.touch||!this.active)return;this.suppressClick=!1;const t=this.contains(e.target),n=this.open&&!t;if(!(!t&&!n)){n&&(this.close(),this.suppressClick=!0);for(const s of Array.from(e.changedTouches))this.gestures.set(s.identifier,n);this.consume(e,n)}};onTouchMove=e=>{const t=Array.from(e.changedTouches);t.length&&t.every(n=>this.gestures.has(n.identifier))&&this.consume(e,t.some(n=>this.gestures.get(n.identifier)))};onTouchEnd=e=>{const t=Array.from(e.changedTouches),n=t.every(r=>this.gestures.has(r.identifier)),s=t.some(r=>this.gestures.get(r.identifier));for(const r of t)this.gestures.delete(r.identifier);n&&this.consume(e,s)};onClick=e=>{if(!this.touch||!this.active)return;if(this.suppressClick){this.suppressClick=!1,this.consume(e,!0);return}const t=e.target;!(t instanceof Element)||!this.contains(t)||(this.consume(e),t.closest(".co-tactical-trigger")?this.toggle():t.closest(".co-tactical-close")&&(this.close(),this.trigger.focus({preventScroll:!0})))};update(e,t,n){this.heading.textContent=`${t||"房間"} · ${Math.round(n)}ms`;const s=this.shell.querySelector(".co-tactical-scroll"),r=s.scrollTop,a=Wv(e),o=new Set(a.map(c=>c.id));for(const[c,l]of this.rows)o.has(c)||(l.remove(),this.rows.delete(c));a.forEach((c,l)=>{let h=this.rows.get(c.id);if(!h){h=document.createElement("div"),h.className="co-tactical-row";for(let u=0;u<5;u++)h.append(document.createElement("span"));this.rows.set(c.id,h)}[String(c.rank),c.name,String(c.score),String(c.bounty),`${c.kills}/${c.deaths}`].forEach((u,p)=>{h.children[p].textContent!==u&&(h.children[p].textContent=u)}),h.classList.toggle("is-high-bounty",c.bounty>=ad),this.body.children[l]!==h&&this.body.insertBefore(h,this.body.children[l]??null)}),s.scrollTop=r,this.layout()}layout=()=>{const e=this.touch&&!this.open?this.trigger:this.panel;this.root.style.setProperty("--co-roster-bottom",`${e.getBoundingClientRect().bottom-this.root.getBoundingClientRect().top}px`)};dispose(){this.gestures.clear(),this.rows.clear(),this.root.removeEventListener("click",this.onClick,!0),this.root.removeEventListener("pointerdown",this.onPointerDown,!0),this.root.removeEventListener("pointermove",this.onPointerMove,!0),this.root.removeEventListener("pointerup",this.onPointerEnd,!0),this.root.removeEventListener("pointercancel",this.onPointerEnd,!0),this.root.removeEventListener("touchstart",this.onTouchStart,!0),this.root.removeEventListener("touchmove",this.onTouchMove,!0),this.root.removeEventListener("touchend",this.onTouchEnd,!0),this.root.removeEventListener("touchcancel",this.onTouchEnd,!0),this.root.removeEventListener("armory:open",this.close),window.removeEventListener("keydown",this.onKey),window.removeEventListener("blur",this.onBlur),window.removeEventListener("resize",this.layout),this.root.classList.remove("co-touch-ui"),this.root.style.removeProperty("--co-roster-bottom"),this.shell.remove()}}const Vx=13;function Xi(i,e){return typeof i=="object"&&i!==null&&i.roundId===e}const gr=(i,e,t)=>Math.max(e,Math.min(t,i)),Th=(i,e)=>(e-i+Math.PI*3)%(Math.PI*2)-Math.PI;class Wx{constructor(e,t,n,s,r,a,o=0,c){this.root=e,this.socket=t,this.roomCode=n,this.roundId=s,this.onFatal=r,this.playerId=a,this.seq=o;const l=new Bu;this.renderer=new Ru({antialias:l.antialias,powerPreference:"high-performance"}),this.renderer.setPixelRatio(l.pixelRatio),this.renderer.setClearColor(1489372),e.append(this.renderer.domElement),e.insertAdjacentHTML("beforeend",'<div class="co-feedback"></div><div class="co-hud"></div><div class="co-minimap"><canvas aria-label="以自己為中心的戰術雷達"></canvas></div>'+id()),this.tacticalBoard=new Gx(e,this.coarse),this.radarCanvas=e.querySelector(".co-minimap canvas"),this.radarContext=this.radarCanvas.getContext("2d"),this.hud=new nd(e.querySelector(".co-hud")),this.aimFeedback=new Ou(e),this.feedback=new Ju(e.querySelector(".co-feedback")),this.armory=new sd(e,h=>!this.ready||this.paused||!this.player.alive||!this.socket.connected?!1:(this.input.set({aim:!1}),this.socket.emit("match:weapon",{id:h,roundId:this.roundId}),!0),()=>this.owned,this.restorePointerLock,h=>this.weapons[h].level),this.scene.add(this.arena.group,new vu(16777215,1489372,2)),this.effects=new zu(this.scene,this.coarse),this.battle=new Hu(e),this.makeGun(),this.appearance=new Pu(this.gun),this.pickupFeedback=new Cu(e,this.coarse),this.pickupPreview=new Bh(e),this.scope=new ku(e,this.gun,this.coarse),this.makePickups(),this.coarse?this.mobile=new Ku(e,this.input):(this.desktop=new Zu(e,this.input),e.onclick=h=>{h.target.closest(".co-armory, [data-game-ui], button, input")||this.restorePointerLock()}),this.stopResize=Ch(e,(h,d)=>{this.cam.aspect=h/d,this.cam.updateProjectionMatrix(),this.renderer.setSize(h,d,!1),this.sizeRadar()}),this.socket.on("match:pickup",this.onPickup),this.socket.on("match:snapshot",this.onSnapshot),this.socket.on("match:shot",this.onShot),this.socket.on("match:hit",this.onHit),this.socket.on("match:kill",this.onKill),this.socket.on("match:damage",this.onDamage),this.socket.on("disconnect",this.onDisconnect),this.socket.on("connect_error",this.onConnectError),this.loop=new rd(h=>this.update(h)),this.settings=new Yu(e,()=>{this.tacticalBoard.close(),this.root.dispatchEvent(new Event("combat:reset")),this.socket.emit("match:input",{roundId:this.roundId,seq:++this.seq,clientTime:this.serverNow(),moveX:0,moveY:0,yaw:this.player.yaw,pitch:this.player.pitch,jump:!1,reload:!1,sprint:!1,aim:!1}),this.desktop?.setEnabled(!1),this.mobile?.setEnabled(!1),this.armory.setEnabled(!1)},h=>{this.desktop?.setEnabled(!0),this.mobile?.setEnabled(!0),this.armory.setEnabled(!0),h&&this.restorePointerLock()},!0,c?{...c,code:n??""}:void 0)}scene=new Pc;cam=new qt(75,1,Bc,fc);renderer;input=new $u(()=>this.sendResetInput());arena=new ju;player=new Qu;avatars=new Map;pickupMeshes=new Map;pending=[];snaps=[];seq=0;hud;aimFeedback;armory;feedback;effects;battle;seenShots=new Set;statusTimer=0;loop;settings;desktop;mobile;stopResize=()=>{};owned=new Set(["ar"]);active="ar";weapons=Nd();score=0;bounty=Vv;scoreTarget=ic;endsAt=0;kills=0;deaths=0;dead=!1;killer="";ping=0;pingTimer=0;serverClockOffset=0;hasClockOffset=!1;notice="";noticeT=0;slowUntil=0;disposed=!1;ready=!1;paused=!1;lastLocalShot=0;recoilPitch=0;recoilYaw=0;gun=new $t;gunFlash;gunMaterial=new nt({color:2106932});handMaterial=new nt({color:16777215});coarse=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>0;cameraOffset=new P;visualPosition=new P;remoteTarget=new P;moveIntent=new P;pickupPreview;pickupFeedback;appearance;tacticalBoard;scope;physicsTime=0;awaitingWeapon=!1;snapshotInterval=50;snapshotJitter=0;lastSnapshotArrival=0;radarCanvas;radarContext;radarPlayers=new Map;radarTimer=0;start(){this.disposed||(this.paused=!1,this.loop.start())}pause(){if(this.disposed)return;this.paused=!0,this.tacticalBoard.setActive(!1),this.settings?.setActive(!1),this.desktop?.setEnabled(!1),this.mobile?.setEnabled(!1),this.armory.setEnabled(!1),this.input.reset(),this.loop.stop();const e=document.pointerLockElement;e&&(e===this.root||this.root.contains(e))&&document.exitPointerLock?.()}resume(){this.disposed||(this.paused=!1,this.tacticalBoard.setActive(!0),this.settings?.setActive(!0),this.desktop?.setEnabled(!0),this.mobile?.setEnabled(!0),this.armory.setEnabled(!0),this.loop.start())}restorePointerLock=()=>{if(!(this.disposed||this.paused)&&!(this.coarse||this.settings?.isOpen||document.pointerLockElement===this.root))try{this.root.requestPointerLock?.()?.catch(()=>{})}catch{}};sendResetInput(){this.disposed||this.paused||!this.ready||!this.socket?.connected||this.socket.emit("match:input",{roundId:this.roundId,seq:++this.seq,clientTime:this.serverNow(),moveX:0,moveY:0,yaw:this.player.yaw,pitch:this.player.pitch,jump:!1,reload:!1,sprint:!1,aim:!1})}serverNow(){return Date.now()-this.serverClockOffset}makeGun(){const e=new Fe(new yt(.18,.16,.9),this.gunMaterial);e.position.set(.34,-.28,-.8);const t=[[[.17,.48,.18],[.47,-.52,-.5]],[[.17,.43,.18],[.12,-.55,-.63]],[[.2,.18,.2],[.37,-.43,-.74]],[[.2,.18,.2],[.17,-.42,-.86]]];for(const[n,s]of t){const r=new Fe(new yt(...n),this.handMaterial);r.position.set(...s),this.gun.add(r)}this.gunFlash=new Fe(new ns(.08),new nt({color:16766045})),this.gunFlash.position.set(.34,-.25,-1.3),this.gunFlash.visible=!1,this.gun.add(e,this.gunFlash),this.cam.add(this.gun),this.scene.add(this.cam)}makePickups(){for(const e of Xt){const t=Et[e],n=new Fe(new ns(.75),new nt({color:t.color}));n.visible=!1,this.pickupMeshes.set(e,n),this.scene.add(n)}}simulate(e,t,n,s){e.yaw=t.yaw,e.pitch=t.pitch,vc(e,{moveX:t.moveX,moveY:t.moveY,lookX:0,lookY:0,jump:t.jump,sprint:t.sprint},n,void 0,this.slowUntil>this.serverNow()?.65:1,s)}predict(e,t){const n={x:this.player.position.x,y:this.player.position.y,z:this.player.position.z,yaw:this.player.yaw,pitch:this.player.pitch,velocityY:this.player.velocityY,supportId:this.player.supportId,jumpsUsed:this.player.jumpsUsed,alive:this.player.alive};this.simulate(n,e,t,this.physicsTime),this.physicsTime+=t,this.player.position.set(n.x,n.y,n.z),this.player.yaw=n.yaw,this.player.pitch=n.pitch,this.player.velocityY=n.velocityY,this.player.jumpsUsed=n.jumpsUsed,this.player.supportId=n.supportId??null}onSnapshot=e=>{if(this.disposed||this.paused||!Xi(e,this.roundId))return;if(!Array.isArray(e?.players)||!Array.isArray(e?.pickups))return this.onFatal("多人同步資料無效");const t=!this.ready;this.ready=!0;const n=performance.now();if(this.lastSnapshotArrival){const h=n-this.lastSnapshotArrival;this.snapshotJitter=this.snapshotJitter*.8+Math.abs(h-this.snapshotInterval)*.2,this.snapshotInterval=this.snapshotInterval*.85+h*.15}for(this.lastSnapshotArrival=n,e.byId=new Map(e.players.map(h=>[h.id,h])),this.snaps.push(e);this.snaps.length>12;)this.snaps.shift();const s=e.byId.get(this.playerId);if(!s)return;t&&(this.seq=Math.max(this.seq,s.ack));const r=this.player.alive,a=!r&&s.alive;this.slowUntil=s.slowUntil,this.pending=this.pending.filter(h=>h.seq>s.ack),(t||r!==s.alive)&&(this.pending.length=0,this.armory.close(!1),this.input.reset(),this.mobile?.reset(),this.desktop?.setEnabled(!this.paused&&!this.settings?.isOpen)),this.visualPosition.copy(this.player.position).add(this.cameraOffset);const o={x:s.x,y:s.y,z:s.z,yaw:s.yaw,pitch:s.pitch,velocityY:s.velocityY,supportId:s.supportId,jumpsUsed:s.jumpsUsed,alive:s.alive};this.physicsTime=e.simulationTime;for(const h of this.pending)this.simulate(o,h,h.dt,this.physicsTime),this.physicsTime+=h.dt;const c=Math.hypot(o.x-this.player.position.x,o.y-this.player.position.y,o.z-this.player.position.z),l=t||a||c>4;this.player.position.set(o.x,o.y,o.z),this.player.velocityY=o.velocityY,this.player.jumpsUsed=o.jumpsUsed,this.player.supportId=o.supportId??null,(t||a)&&(this.player.yaw=s.yaw,this.player.pitch=s.pitch),l?this.cameraOffset.set(0,0,0):(this.cameraOffset.copy(this.visualPosition).sub(this.player.position),Math.hypot(this.cameraOffset.x,this.cameraOffset.z)>4&&this.cameraOffset.set(0,0,0)),this.player.hp=s.hp,this.player.alive=s.alive,this.handMaterial.color.setHex(s.color),this.active!==s.activeWeapon&&(this.input.set({aim:!1}),this.awaitingWeapon=!1),this.active=s.activeWeapon,this.owned=new Set(s.ownedWeapons),this.weapons=s.weapons,this.score=s.score,this.bounty=s.bounty,this.scoreTarget=e.scoreTarget,this.endsAt=e.endsAt,this.kills=s.kills,this.deaths=s.deaths,this.dead=!s.alive,this.syncAvatars(e.players),this.syncPickups(e.pickups),this.armory.render(this.active),this.updatePanels(e)};updatePanels(e){this.tacticalBoard.update(e.players,this.roomCode,this.ping),this.radarPlayers=e.byId??new Map(e.players.map(t=>[t.id,t]))}syncAvatars(e){const t=new Set(e.map(n=>n.id));for(const[n,s]of this.avatars)t.has(n)||(s.dispose(),this.avatars.delete(n));for(const n of e){if(n.id===this.playerId)continue;let s=this.avatars.get(n.id);s||(s=new ed(n.id,n.name,n.color),s.respawn(n.x,n.z),s.position.y=n.y-1.65,s.group.position.copy(s.position),this.avatars.set(n.id,s),this.scene.add(s.group,s.deathGroup)),n.alive&&!s.alive&&s.respawn(n.x,n.z),!n.alive&&s.alive&&s.damage(100)}}syncPickups(e){for(const t of e){const n=this.pickupMeshes.get(t.id);n&&(n.position.set(t.x,t.y+.9,t.z),n.visible=t.available)}}sizeRadar(){const e=this.radarCanvas?.getBoundingClientRect();if(!e?.width||!e.height)return;const t=Math.min(window.devicePixelRatio||1,1.5),n=Math.round(e.width*t),s=Math.round(e.height*t);(this.radarCanvas.width!==n||this.radarCanvas.height!==s)&&(this.radarCanvas.width=n,this.radarCanvas.height=s)}drawRadar(e){if(this.radarTimer+=e,this.radarTimer<1/30)return;this.radarTimer%=1/30;const t=this.radarCanvas,n=t.getBoundingClientRect();if(!n.width||!n.height)return;this.sizeRadar();const s=t.width/n.width,r=this.radarContext,a=n.width,o=n.height,c=a/2,l=o/2+4,h=Math.min(a,o)*.38;r.setTransform(s,0,0,s,0,0),r.clearRect(0,0,a,o),r.strokeStyle="#ffffff24",r.lineWidth=1,r.beginPath(),r.arc(c,l,h,0,Math.PI*2),r.moveTo(c-h,l),r.lineTo(c+h,l),r.moveTo(c,l-h),r.lineTo(c,l+h),r.stroke(),r.fillStyle="#dfffff",r.font="800 9px Arial",r.fillText("戰術雷達",8,14);const d=this.player.position.y-1.65,u=d<-2?"B1":d>=9?"RF":d>=3?"2F":"1F";this.radarCanvas.setAttribute("aria-label",`Radar ${u}`),r.fillText(u,60,14);const p=Math.cos(this.player.yaw),g=Math.sin(this.player.yaw);for(const x of this.radarPlayers.values()){if(x.id===this.playerId||!x.alive)continue;const m=this.avatars.get(x.id),f=m?.position.x??x.x,M=m?.position.z??x.z,T=f-this.player.position.x,S=M-this.player.position.z,w=Math.max(.001,Math.hypot(T,S)),E=T*p-S*g,R=-T*g-S*p,v=h*Math.min(w/70,1)/w,b=c+E*v,C=l-R*v;r.beginPath(),r.arc(b,C,w>70?5:4,0,Math.PI*2),r.fillStyle=`#${x.color.toString(16).padStart(6,"0")}`,r.fill();const L=x.y-this.player.position.y;Math.abs(L)>2.5&&(r.fillStyle="#fff",r.fillText(String.fromCodePoint(L>0?9650:9660),b-4,C-7)),w>70&&(r.strokeStyle="#ffffffcc",r.lineWidth=1.5,r.stroke())}r.save(),r.translate(c,l),r.fillStyle="#fff",r.shadowColor="#55f1ae",r.shadowBlur=7,r.beginPath(),r.moveTo(0,-7),r.lineTo(5,6),r.lineTo(0,3),r.lineTo(-5,6),r.closePath(),r.fill(),r.restore()}onShot=e=>{if(this.disposed||this.paused||!this.ready||!Xi(e,this.roundId)||this.seenShots.has(e.eventId))return;this.seenShots.add(e.eventId),this.seenShots.size>512&&this.seenShots.delete(this.seenShots.values().next().value);const t=new P,n=e.id===this.playerId;if(n)t.set(...e.origin);else{const s=this.avatars.get(e.id);s?s.muzzlePosition(t):t.set(...e.origin).add(new P(.34,-.27,0))}this.effects.play(e,t,!n,n,!n);for(const s of e.hits)this.avatars.get(s.targetId)?.hit()};onPickup=e=>{this.disposed||this.paused||!Xi(e,this.roundId)||this.pickupFeedback.push(e,e.eventId)};onHit=e=>{!this.disposed&&!this.paused&&this.ready&&Xi(e,this.roundId)&&this.battle.hit(e)};onKill=e=>{!this.disposed&&!this.paused&&this.ready&&Xi(e,this.roundId)&&this.battle.kill(e)};onDamage=e=>{this.disposed||this.paused||!this.ready||!Xi(e,this.roundId)||(this.player.hp=e.hp,this.killer=e.name,this.notice=`遭 ${e.name} 使用 ${Et[e.weapon]?.label??"武器"} 擊中`,this.noticeT=.8,this.feedback.damage(e.damage,new P(e.from.x,0,e.from.z),this.player.position,new P(-Math.sin(this.player.yaw),0,-Math.cos(this.player.yaw))))};onDisconnect=()=>{this.pause(),this.socket.sendBuffer.length=0,this.onFatal("連線已中斷")};onConnectError=()=>this.onFatal("無法連線至遊戲伺服器");measurePing(e){if(this.pingTimer-=e,this.pingTimer>0)return;this.pingTimer=1;const t=Date.now();this.socket.emit("net:ping",n=>{if(this.disposed)return;this.ping=Date.now()-t;const s=Date.now()-n-this.ping/2;this.serverClockOffset=this.hasClockOffset?this.serverClockOffset*.8+s*.2:s,this.hasClockOffset=!0})}updateRemotePlayers(e){if(!this.snaps.length)return;const t=gr(80+this.ping*.1+this.snapshotJitter*1.5,80,120),n=this.serverNow()-t;let s=this.snaps[0],r=this.snaps[0],a=0;const o=this.snaps[this.snaps.length-1];if(n>=o.serverTime&&this.snaps.length>1){s=this.snaps[this.snaps.length-2],r=o;const l=Math.max(1,r.serverTime-s.serverTime);a=1+Math.min(75,n-r.serverTime)/l}else{for(let l=1;l<this.snaps.length;l++)if(this.snaps[l].serverTime>=n){s=this.snaps[l-1],r=this.snaps[l];break}a=s===r?0:gr((n-s.serverTime)/Math.max(1,r.serverTime-s.serverTime),0,1)}const c=1-Math.exp(-e*30);for(const[l,h]of this.avatars){const d=s.byId?.get(l),u=r.byId?.get(l);if(!(!d||!u)){if(this.remoteTarget.set(d.x+(u.x-d.x)*a,d.y+(u.y-d.y)*a-1.65,d.z+(u.z-d.z)*a),u.supportId!==null&&u.supportId===d.supportId){const p=Es(u.supportId,s.simulationTime),g=Es(u.supportId,r.simulationTime),x=Es(u.supportId,this.physicsTime);this.remoteTarget.x+=x.x-(p.x+(g.x-p.x)*a),this.remoteTarget.y+=x.y-(p.y+(g.y-p.y)*a),this.remoteTarget.z+=x.z-(p.z+(g.z-p.z)*a),h.group.position.copy(this.remoteTarget)}else h.group.position.lerp(this.remoteTarget,c);h.group.rotation.y+=Th(h.group.rotation.y,d.yaw+Th(d.yaw,u.yaw)*a)*c,h.position.copy(h.group.position),h.updateVisual(e,Math.abs(u.x-d.x)+Math.abs(u.z-d.z)>.02,!0)}}}update(e){if(this.disposed||this.paused||(this.measurePing(e),!this.ready))return;this.desktop?.update();const t=this.input.getState(),n=this.tacticalBoard.isOpen||this.armory.isOpen||!!this.settings?.isOpen||this.paused,s=this.weapons[this.active].reloadUntil>this.serverNow();(this.active!=="sniper"||s||t.reload||t.switchWeapon||!this.player.alive||n||this.awaitingWeapon)&&(this.input.set({aim:!1}),t.aim=!1),n&&(t.shoot=!1,this.input.clearCombat());const r=this.scope.update(this.active,t,this.player.alive,s,n);r&&(t.lookX*=.25,t.lookY*=.25);const a=this.player.yaw-t.lookX*.0024,o=gr(this.player.pitch-t.lookY*.0021,-1.35,1.35),c={roundId:this.roundId,seq:++this.seq,clientTime:this.serverNow(),moveX:t.moveX,moveY:t.moveY,yaw:a,pitch:o,jump:t.jump,reload:t.reload,sprint:!!t.sprint,aim:r};for(this.pending.push({...c,dt:e});this.pending.length>180;)this.pending.shift();this.predict(c,e),this.socket.emit("match:input",c);const l=-Math.sin(a),h=-Math.cos(a),d=Math.cos(a),u=-Math.sin(a);if(this.moveIntent.set(l*t.moveY+d*t.moveX,0,h*t.moveY+u*t.moveX),this.moveIntent.lengthSq()>1e-4&&this.moveIntent.normalize(),t.switchWeapon){const L=Xt[t.switchWeapon-1];L&&this.owned.has(L)&&L!==this.active&&(this.awaitingWeapon=!0,this.socket.emit("match:weapon",{id:L,roundId:this.roundId}))}let p=!1;const g=Et[this.active],x=this.weapons[this.active],m=this.serverNow();this.player.alive&&t.shoot&&!n&&!this.awaitingWeapon&&m-this.lastLocalShot>=g.fireDelay*1e3&&x.ammo>0&&x.reloadUntil<=m&&(p=!0,this.recoilPitch=Math.min(.04,this.recoilPitch+.009),this.recoilYaw=gr(this.recoilYaw+(this.seq%2?.0025:-.0025),-.012,.012),navigator.vibrate?.(8),this.socket.emit("match:fire",{roundId:this.roundId,clientTime:c.clientTime}),this.lastLocalShot=m),this.updateRemotePlayers(e);for(const L of this.pickupMeshes.values())L.rotation.y+=e*2;this.drawRadar(e),this.noticeT=Math.max(0,this.noticeT-e),this.effects.update(e),this.feedback.update(e,this.player.hp);const f=Math.exp(-e*16);this.recoilPitch*=f,this.recoilYaw*=f;const M=Math.pow(.5,e/.12),T=Math.pow(.5,e/.08),S=this.moveIntent.lengthSq()>.01,w=-this.cameraOffset.x*this.moveIntent.x+-this.cameraOffset.z*this.moveIntent.z;(!S||w>=0)&&(this.cameraOffset.x*=M,this.cameraOffset.z*=M),this.cameraOffset.y*=T,this.cameraOffset.lengthSq()<1e-6&&this.cameraOffset.set(0,0,0),this.visualPosition.copy(this.player.position),r||this.visualPosition.add(this.cameraOffset),this.cam.position.copy(this.visualPosition),this.cam.rotation.set(this.player.pitch,this.player.yaw,0,"YXZ"),this.gun.rotation.set(this.recoilPitch,this.recoilYaw,0),this.gun.position.z=this.recoilPitch*2;const E=x.reloadUntil>this.serverNow();if(this.appearance.update(this.active,x.level),this.pickupFeedback.update(e),this.hud.render({quickReloadSeconds:Math.max(0,Math.ceil((x.quickReloadUntil-this.serverNow())/1e3)),level:x.level,capacity:mn(this.active,x.level),hp:this.player.hp,ammo:x.ammo,reserve:1/0,label:g.label,notice:this.noticeT?this.notice:"",kills:this.kills,deaths:this.deaths,dead:this.dead,killer:this.killer,hit:!1,kill:!1,reloading:E,score:this.score,bounty:this.bounty,scoreTarget:this.scoreTarget,remainingSeconds:Math.max(0,Math.ceil((this.endsAt-this.serverNow())/1e3))}),this.cam.updateMatrixWorld(!0),this.battle.update(e,this.cam),this.statusTimer+=e,this.statusTimer>=.08){this.statusTimer=0;const L=this.serverNow();for(const N of this.radarPlayers.values())if(N.alive&&(N.burnUntil>L||N.slowUntil>L)){const B=this.avatars.get(N.id);B&&this.effects.status(B.position.clone().add(new P(0,1.22,0)),N.burnUntil>L?"flame":"ice")}}this.arena.update(this.physicsTime,Ov(this.snaps[this.snaps.length-1],this.serverNow()),this.renderer);const R=Fu({x:this.player.position.x,y:this.player.position.y,z:this.player.position.z,yaw:this.player.yaw,pitch:this.player.pitch}),v=[...this.avatars].map(([L,N])=>({id:L,x:N.position.x,y:N.position.y+1.65,z:N.position.z,yaw:N.group.rotation.y,alive:N.alive})),b=ro(this.physicsTime),C=Ts(this.gunFlash,this.active);if(p){const L=this.cam.position.toArray(),N=this.cam.getWorldDirection(new P).toArray(),I={...Nu(this.active,L,N,v,Math.random,b,r,x.level),eventId:"local:"+this.seq,id:this.playerId,weapon:this.active,origin:L,dir:N};this.effects.play(I,C,!0,!0,!0,!1)}this.pickupPreview.update([...this.pickupMeshes].map(([L,N])=>({id:L,position:N.position,available:N.visible,owned:this.owned.has(L),state:this.weapons[L]})),this.cam.position,b,this.player.alive&&!n),this.effects.updateLocalMuzzle(C,this.active,this.cam.position,b),this.effects.localFlame(this.player.alive&&!n&&!this.awaitingWeapon&&t.shoot&&this.active==="flame"&&!E&&x.ammo>0,Ts(this.gunFlash,this.active),this.cam.position,this.cam.getWorldDirection(new P),b,e,v,x.level),this.aimFeedback.update(n||!this.player.alive?"neutral":Uu(this.active,R.origin,R.direction,v,b,x.level),this.player.alive&&!n),this.scope.render(this.renderer,this.scene,this.cam)}dispose(){if(!this.disposed){this.disposed=!0,this.paused=!0,this.ready=!1,this.loop.stop(),this.socket.off("match:pickup",this.onPickup),this.socket.off("match:snapshot",this.onSnapshot),this.socket.off("match:shot",this.onShot),this.socket.off("match:hit",this.onHit),this.socket.off("match:kill",this.onKill),this.socket.off("match:damage",this.onDamage),this.socket.off("disconnect",this.onDisconnect),this.socket.off("connect_error",this.onConnectError),this.stopResize(),this.root.onclick=null,this.desktop?.dispose(),this.mobile?.dispose(),this.tacticalBoard.dispose(),this.settings?.dispose(),this.armory.dispose(),this.pickupPreview.dispose(),this.pickupFeedback.dispose(),this.scope.dispose(),this.effects.dispose(),this.battle.dispose(),this.feedback.dispose(),this.hud.dispose(),this.aimFeedback.dispose();for(const e of this.avatars.values())e.dispose();this.avatars.clear(),ia(this.scene),this.scene.clear(),this.pickupMeshes.clear(),this.pending=[],this.snaps=[],this.radarPlayers.clear(),this.seenShots.clear(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),document.pointerLockElement===this.root&&document.exitPointerLock?.(),this.root.replaceChildren()}}}const hc="chroma-multiplayer-session";function Md(){try{const i=JSON.parse(sessionStorage.getItem(hc));return typeof i?.code=="string"&&typeof i?.playerId=="string"&&typeof i?.resumeToken=="string"?i:null}catch{return null}}function Ah(i){try{i?sessionStorage.setItem(hc,JSON.stringify({code:i.code,playerId:i.playerId,resumeToken:i.resumeToken})):sessionStorage.removeItem(hc)}catch{}}function Ed({code:i,onResume:e,disabled:t=!1}){return k.jsxs("button",{type:"button",className:"co-resume-card",onClick:e,disabled:t,children:[k.jsx("span",{className:"co-resume-icon","aria-hidden":"true",children:k.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[k.jsx("path",{d:"M4 10a8 8 0 1 1 1.8 7.1M4 4v6h6"}),k.jsx("path",{d:"m11 9 4 3-4 3V9Z"})]})}),k.jsxs("span",{className:"co-resume-copy",children:[k.jsxs("span",{className:"co-resume-eyebrow",children:["繼續你的對戰 ",k.jsx("span",{children:i})]}),k.jsx("strong",{children:"返回上一場"}),k.jsx("small",{children:"回到原本的房間，與隊友再度集合"})]}),k.jsx("span",{className:"co-resume-arrow","aria-hidden":"true",children:"↗"})]})}function bd({notice:i}){const e=i.kind==="reconnected";return k.jsxs("div",{className:`mp-notice ${e?"is-restored":"is-offline"}`,children:[k.jsx("span",{className:"mp-notice-icon","aria-hidden":"true",children:e?"↗":"!"}),k.jsxs("span",{className:"mp-notice-copy",children:[k.jsxs("span",{children:[k.jsx("b",{children:i.name}),e?" 已恢復連線":" 已斷線"]}),k.jsx("small",{children:e?"已回到房間，繼續對戰":"席位保留 60 秒，等待重新連線"})]}),k.jsx("time",{dateTime:new Date(i.at).toISOString(),children:new Date(i.at).toLocaleTimeString("zh-TW",{hour12:!1,hour:"2-digit",minute:"2-digit"})})]})}function Xx({notices:i}){const[e,t]=He.useState(()=>Date.now()),n=i.filter(s=>s.expiresAt>e).slice(-3);return He.useEffect(()=>{const s=i.filter(o=>o.expiresAt>e);if(!s.length)return;const r=Math.min(...s.map(o=>o.expiresAt)),a=setTimeout(()=>t(Date.now()),Math.max(0,r-Date.now()));return()=>clearTimeout(a)},[i,e]),n.length?k.jsx("aside",{className:"mp-broadcast-toasts","aria-label":"房間連線通知",role:"log","aria-live":"polite","aria-relevant":"additions",children:n.map(s=>k.jsx(bd,{notice:s},s.id))}):null}function Rh({notices:i=[],floating:e=!1}){return i.length?e?k.jsx(Xx,{notices:i}):k.jsxs("section",{className:"mp-broadcast","aria-label":"房間廣播",children:[k.jsxs("header",{children:[k.jsxs("span",{children:[k.jsx("i",{"aria-hidden":"true"}),"房間廣播"]}),k.jsx("small",{children:"連線動態"})]}),k.jsx("div",{className:"mp-broadcast-log",role:"log","aria-live":"polite","aria-relevant":"additions",children:i.slice(-5).map(t=>k.jsx(bd,{notice:t},t.id))})]}):null}const qx="https://dca-simulator-uw4r.onrender.com",Ka="https://dca-simulator-uw4r.onrender.com".trim().replace(/\/+$/,""),Yx=i=>/^https?:\/\/(localhost|127(?:\.\d+){3})(?::|\/|$)/i.test(i),$x=Ka&&!Yx(Ka)?Ka:qx,Zx={INVALID_NICKNAME:"暱稱需為 2 到 16 個字元",INVALID_ROOM_CODE:"請輸入 6 碼房間碼",ROOM_NOT_FOUND:"房間已不存在，請重新加入或建立房間",ROOM_FULL:"房間已滿（包含斷線保留席位）",ROUND_ENDING:"本局正在結算，請稍後再加入",SESSION_EXPIRED:"上一場席位已過期，或伺服器已重啟，請用房號重新加入",HOST_ONLY:"只有目前房主可以操作",NOT_READY:"需要至少兩位在線玩家才能開始",INVALID_STATE:"房間狀態已改變，請重試",ALREADY_IN_ROOM:"你已在房間內，請先離開"},Ja=i=>Zx[i]||i||"操作失敗，請重試";function Kx({onBack:i,resumeOnMount:e=!1,enterFullscreen:t,exitFullscreen:n,enterOnFirstTouch:s,fullscreenButton:r}){const[a,o]=He.useState(e?"reconnecting":"join"),[c,l]=He.useState(localStorage.getItem("chroma-name")||""),[h,d]=He.useState(new URLSearchParams(location.search).get("room")||""),[u,p]=He.useState(null),[g,x]=He.useState(""),[m,f]=He.useState(""),[M,T]=He.useState(!1),[S,w]=He.useState(10),[E,R]=He.useState([]),v=He.useRef(null),b=He.useRef(null),C=He.useRef(Md()),L=He.useRef(e),N=He.useRef(0),B=He.useRef(!1),I=He.useRef(!1),V=He.useRef(!1),z=He.useMemo(()=>Ir($x,{autoConnect:!1}),[]),Y=a==="playing"||a==="results",ne=g===u?.host;He.useEffect(()=>{(a==="lobby"||a==="join")&&n?.()},[a,n]);const q=async(se,...Ie)=>{if(!z.connected)throw new Error("連線已中斷，請等待重連後再操作");try{const be=await z.timeout(8e3).emitWithAck(se,...Ie);if(be?.error)throw new Error(Ja(be.error));return be}catch(be){throw new Error(be.message==="operation has timed out"?"伺服器回應逾時，請重試":be.message)}},Q=()=>{C.current=null,R([]),Ah(null)},te=se=>{if(se?.protocolVersion!==Vx)throw L.current=!1,z.disconnect(),new Error("多人伺服器版本不一致，請同步部署前端與 Render 伺服器後再試。");p(se),o(se.state==="PLAYING"?"playing":se.state==="GAME_OVER"?"results":"lobby")},Re=se=>{C.current={code:se.code,playerId:se.playerId,resumeToken:se.resumeToken},Ah(C.current),N.current=se.lastReceivedSeq||0,L.current=!0,x(se.playerId),d(se.code),te(se.room)};He.useEffect(()=>{B.current=!0;const se=async()=>{if(!(!L.current||!C.current||I.current)){I.current=!0,T(!0),f("");try{const Ye=await z.timeout(8e3).emitWithAck("room:resume",C.current);if(!B.current||!L.current)return;if(Ye.error)throw Ye.error==="SESSION_EXPIRED"&&Q(),new Error(Ja(Ye.error));Re(Ye)}catch(Ye){B.current&&(f(Ye.message==="operation has timed out"?"恢復連線逾時，請點「返回上一場」重試":Ja(Ye.message)),o("join"),L.current=!1)}finally{I.current=!1,B.current&&T(!1)}}},Ie=Ye=>{if(!(!L.current||I.current||!C.current))try{te(Ye)}catch(xt){f(xt.message),o("join")}},be=()=>{L.current&&C.current&&(z.sendBuffer.length=0,o("reconnecting"),T(!1))},Ue=()=>{f("無法連線至遊戲伺服器，正在重試；斷線席位保留 60 秒"),T(!1)},vt=()=>{L.current=!1,Q(),z.disconnect(),p(null),o("join"),T(!1),f("此席位已在另一個連線恢復，這個連線已結束")},Rt=Ye=>{!L.current||Ye?.code!==C.current?.code||!["disconnected","reconnected"].includes(Ye.kind)||!Number.isFinite(Ye.at)||R(xt=>[...xt.filter(F=>F.id!==Ye.id),{...Ye,expiresAt:Date.now()+8e3}].slice(-3))};return z.on("connect",se),z.on("room:state",Ie),z.on("disconnect",be),z.on("connect_error",Ue),z.on("room:replaced",vt),z.on("room:notice",Rt),L.current&&C.current&&z.connect(),()=>{B.current=!1,z.off("connect",se),z.off("room:state",Ie),z.off("disconnect",be),z.off("connect_error",Ue),z.off("room:replaced",vt),z.off("room:notice",Rt),z.disconnect()}},[z]);const ye=async()=>{L.current=!1,T(!0);try{z.connected&&await q("room:leave")}catch(se){f(se.message)}Q(),z.disconnect(),T(!1),i()},it=async se=>{if(!V.current){V.current=!0,T(!0),f("");try{await q(se)}catch(Ie){se==="game:start"&&n?.(),f(Ie.message)}finally{V.current=!1,B.current&&T(!1)}}};He.useEffect(()=>{if(!Y||!v.current||b.current)return;const se=new Wx(v.current,z,u?.code,u?.roundId,Ie=>{f(Ie),T(!1),o(z.connected?"join":"reconnecting")},g,N.current,{isHost:ne,onLeave:()=>{ye()},onEnd:()=>{it("game:end")}});return b.current=se,se.start(),a==="results"&&se.pause(),()=>{se.dispose(),b.current===se&&(b.current=null)}},[Y,z,u?.code,u?.roundId,g,ne]),He.useEffect(()=>{a==="results"?b.current?.pause():a==="playing"&&b.current?.resume()},[a]),He.useEffect(()=>{if(a!=="results"||!u?.returnAt)return;const se=performance.now()+Math.max(0,u.returnAt-(u.serverTime||Date.now())),Ie=()=>w(Math.max(0,Math.ceil((se-performance.now())/1e3)));Ie();const be=window.setInterval(Ie,200);return()=>window.clearInterval(be)},[a,u?.returnAt,u?.serverTime]);const Ke=()=>z.connected?Promise.resolve():new Promise((se,Ie)=>{const be=()=>{clearTimeout(Rt),z.off("connect",Ue),z.off("connect_error",vt)},Ue=()=>{be(),se()},vt=()=>{be(),Ie(new Error("無法連線至遊戲伺服器，請重試"))},Rt=setTimeout(()=>{be(),Ie(new Error("連線逾時，請重試"))},1e4);z.once("connect",Ue),z.once("connect_error",vt),z.connect()}),Qe=async se=>{const Ie=c.trim();if(Ie.length<2||Ie.length>16){f("暱稱需為 2 到 16 個字元");return}L.current=!1,I.current=!0,f(""),T(!0);try{await Ke(),C.current&&((await z.timeout(8e3).emitWithAck("room:resume",C.current)).error||await q("room:leave"),Q()),localStorage.setItem("chroma-name",Ie);const be=await q(se,se==="room:create"?Ie:{code:h,name:Ie});B.current&&Re(be)}catch(be){B.current&&(f(be.message),o("join"))}finally{I.current=!1,B.current&&T(!1)}},$=async()=>{!C.current||M||(t?.(),o("reconnecting"),f(""),L.current=!0,z.disconnect(),z.sendBuffer.length=0,z.connect())},ee=()=>{Qe("room:create")},ve=()=>{Qe("room:join")},Ne=()=>{t?.(),it("game:start")},ge=()=>{t?.(),it("game:again")},Ge=()=>{it("game:lobby")},_t=M?k.jsxs(k.Fragment,{children:[k.jsx("i",{className:"mp-spinner","aria-hidden":"true"}),"連線中…"]}):null,qe=()=>{const se=new URL(location.href);se.searchParams.set("room",u.code),navigator.clipboard?.writeText(se.toString()).catch(()=>f("無法複製，請分享房間碼"))};if(a==="reconnecting")return k.jsx("main",{className:"mp",children:k.jsxs("section",{className:"mp-panel mp-join-panel mp-reconnect-panel",children:[k.jsx("span",{className:"mp-reconnect-orbit","aria-hidden":"true",children:k.jsx("i",{className:"mp-spinner"})}),k.jsx("p",{className:"mp-eyebrow",children:"BACK TO THE ARENA"}),k.jsx("h1",{children:"正在返回上一場"}),k.jsx("p",{className:"mp-subtitle",children:"隊友還在戰場，正在為你恢復連線。"}),k.jsxs("p",{className:"mp-reconnect-hint",children:["斷線席位保留 ",k.jsx("b",{children:"60 秒"})]}),k.jsx("p",{className:"mp-status",role:"status",children:m||"網路恢復後會自動重新連線"}),k.jsx("button",{className:"mp-primary",disabled:M,onClick:$,children:"重試連線"}),k.jsx("button",{className:"mp-secondary",onClick:ye,children:"離開房間"})]})});if(Y){const se=u?.finalStandings||[],Ie=se.filter(Ue=>u?.winnerIds?.includes(Ue.id)),be=u?.winnerIds?.includes(g);return k.jsxs("main",{className:"chroma-ops co-multiplayer-shell",onPointerUpCapture:a==="playing"?s:void 0,children:[k.jsx("div",{className:"co-game-stage",ref:v,"aria-label":"CHROMA OPS multiplayer arena"},u?.roundId),a==="playing"&&r,k.jsx(Rh,{notices:E,floating:!0}),m&&k.jsx("p",{className:"mp-match-error",role:"alert",children:m}),a==="results"&&k.jsx("section",{className:"mp-result",role:"dialog","aria-modal":"true","aria-labelledby":"mp-result-title",children:k.jsxs("div",{className:`mp-result-card ${be?"is-winner":""}`,children:[k.jsx("p",{className:"mp-result-eyebrow",children:"比賽結束"}),k.jsx("h1",{id:"mp-result-title",children:u?.endReason==="draw"?"平手":be?"勝利！":"戰鬥結束"}),k.jsx("p",{className:"mp-result-winner",children:u?.endReason==="draw"?"本局無人取得積分":k.jsxs(k.Fragment,{children:[k.jsx("b",{children:Ie.map(Ue=>Ue.name).join("、")})," ",u?.endReason==="target"?`率先達到 ${u.scoreTarget} 分`:Ie.length>1?"超時並列獲勝":"超時積分最高"]})}),u?.winnerTitle&&k.jsx("p",{className:"mp-result-title",children:u.winnerTitle}),k.jsxs("div",{className:"mp-result-ranking",children:[k.jsxs("header",{children:[k.jsx("span",{children:"最終排名"}),k.jsx("span",{children:"積分 · 賞金 · K/D"})]}),se.map(Ue=>k.jsxs("div",{className:Ue.id===g?"is-me":"",children:[k.jsxs("span",{children:[k.jsx("i",{children:Ue.rank}),Ue.name,u?.winnerIds?.includes(Ue.id)&&k.jsx("em",{children:"勝者"})]}),k.jsxs("strong",{className:Ue.bounty>=ad?"is-high-bounty":"",children:[Ue.score,"分 · 賞",Ue.bounty," · ",Ue.kills,"/",Ue.deaths]})]},Ue.id))]}),k.jsxs("p",{className:"mp-result-countdown",children:[k.jsx("b",{children:S})," 秒後自動回到房間"]}),ne?k.jsxs("div",{className:"mp-result-actions",children:[k.jsx("button",{className:"mp-primary",disabled:M,onClick:ge,children:M?_t:"立即再玩"}),k.jsx("button",{disabled:M,onClick:Ge,children:"立即回房間"})]}):k.jsx("p",{className:"mp-result-waiting",children:"等待房主操作，或倒數結束後自動返回"}),k.jsx("button",{className:"mp-result-leave",onClick:ye,children:"離開多人模式"})]})})]})}return a==="lobby"&&u?k.jsx("main",{className:"mp",children:k.jsxs("section",{className:"mp-panel mp-lobby-panel",children:[k.jsx("button",{className:"mp-back",disabled:M,onClick:ye,children:"← 離開房間"}),k.jsxs("header",{className:"mp-lobby-header",children:[k.jsxs("div",{children:[k.jsx("p",{className:"mp-eyebrow",children:"CHROMA OPS / LOBBY"}),k.jsx("h1",{children:"集結，準備開戰。"}),k.jsx("p",{className:"mp-subtitle",children:"分享房號，邀請朋友加入你的戰場。"})]}),k.jsxs("div",{className:"mp-room-code",children:[k.jsx("small",{children:"房間代碼"}),k.jsx("strong",{children:u.code}),k.jsxs("span",{children:[k.jsx("i",{}),u.players.filter(se=>se.connected).length," 位在線 · ",u.players.length," / 8 席位"]})]})]}),u.lobbyReason&&k.jsx("p",{className:"mp-status",role:"status",children:u.lobbyReason}),k.jsxs("div",{className:`mp-lobby-columns ${u.notices?.length?"":"is-roster-only"}`,children:[k.jsxs("section",{className:"mp-roster-panel","aria-label":"房間玩家",children:[k.jsxs("h2",{children:["玩家名單 ",k.jsxs("span",{children:[u.players.length.toString().padStart(2,"0")," / 08"]})]}),k.jsx("div",{className:"mp-player-list",children:u.players.map(se=>k.jsxs("div",{className:`mp-player-row ${se.connected?"":"is-offline"}`,children:[k.jsxs("span",{className:"mp-player-info",children:[k.jsxs("b",{children:[se.name,se.id===g&&k.jsx("small",{children:"你"})]}),k.jsxs("span",{children:[k.jsx("i",{}),se.connected?"已連線，準備就緒":"斷線中 · 席位保留 60 秒"]})]}),se.id===u.host&&k.jsx("span",{className:"mp-host-badge",children:"房主"})]},se.id))}),k.jsxs("div",{className:"mp-share-actions",children:[k.jsx("button",{className:"mp-secondary",onClick:()=>navigator.clipboard?.writeText(u.code).catch(()=>f("無法複製，請手動複製房間碼")),children:"複製房間碼"}),k.jsx("button",{className:"mp-secondary",onClick:qe,children:"複製邀請連結 ↗"})]})]}),k.jsx(Rh,{notices:u.notices})]}),k.jsxs("footer",{className:"mp-lobby-footer",children:[k.jsx("p",{children:ne?"至少 2 位玩家在線即可開始，朋友也能中途加入。":"等待房主開始遊戲，先調整好你的手感吧。"}),ne&&k.jsx("button",{className:"mp-primary",disabled:M||u.players.filter(se=>se.connected).length<2,onClick:Ne,children:M?_t:"開始遊戲 →"})]}),k.jsxs("p",{className:"mp-bounty-rules",children:["賞金競速：先達 ",ic," 分獲勝，限時 8 分鐘。擊殺取得對方當下賞金（50～300），死亡不扣積分。賞金隨擊殺上升、連死逐步下降；超時同分並列獲勝。"]}),k.jsxs("details",{className:"mp-preferences",children:[k.jsx("summary",{children:"視角與操作設定"}),k.jsx(lc,{})]}),m&&k.jsx("p",{className:"mp-error",role:"alert",children:m})]})}):k.jsx("main",{className:"mp",children:k.jsxs("section",{className:"mp-panel mp-join-panel",children:[k.jsx("button",{className:"mp-back",disabled:M,onClick:ye,children:"← 選擇模式"}),k.jsx("p",{className:"mp-eyebrow",children:"CHROMA OPS / MULTIPLAYER"}),k.jsx("h1",{children:"邀請你的隊友。"}),k.jsx("p",{className:"mp-subtitle",children:"建立專屬房間，或用房號直達戰場。"}),C.current&&k.jsx(Ed,{code:C.current.code,disabled:M,onResume:$}),k.jsxs("label",{className:"mp-field",children:["玩家暱稱",k.jsx("input",{placeholder:"大家怎麼稱呼你？",autoComplete:"nickname",disabled:M,value:c,maxLength:"16",onChange:se=>l(se.target.value)})]}),k.jsx("button",{className:"mp-primary",disabled:M,onClick:ee,children:M?_t:"建立新房間 →"}),k.jsx("div",{className:"mp-divider",children:k.jsx("span",{children:"或加入朋友的房間"})}),k.jsxs("label",{className:"mp-field",children:["房間碼",k.jsx("input",{className:"mp-code-input",placeholder:"輸入 6 碼房號",autoCapitalize:"characters",disabled:M,value:h,maxLength:"6",onChange:se=>d(se.target.value.toUpperCase())})]}),k.jsx("button",{className:"mp-secondary",disabled:M,onClick:ve,children:M?_t:"加入房間 ↗"}),k.jsxs("p",{className:"mp-bounty-rules",children:["賞金競速：先達 ",ic," 分獲勝，限時 8 分鐘。擊殺取得對方當下賞金（50～300），死亡不扣積分。賞金隨擊殺上升、連死逐步下降；超時同分並列獲勝。"]}),k.jsxs("details",{className:"mp-preferences",children:[k.jsx("summary",{children:"視角與操作設定"}),k.jsx(lc,{})]}),m&&k.jsx("p",{className:"mp-error",role:"alert",children:m})]})})}const ja=()=>navigator.standalone===!0||matchMedia("(display-mode: standalone), (display-mode: fullscreen)").matches;function uc(){return document.fullscreenElement||document.webkitFullscreenElement}function Qa(i){if(!(!i||uc()!==i))try{(document.exitFullscreen||document.webkitExitFullscreen)?.call(document)?.catch(()=>{})}catch{}}function Jx(){const i=He.useRef(null),e=He.useCallback(d=>{i.current=d},[]),t=He.useRef(!1),n=He.useRef(null),[s,r]=He.useState(!1),[a]=He.useState(()=>!ja()&&!!(document.documentElement.requestFullscreen||document.documentElement.webkitRequestFullscreen)&&(document.fullscreenEnabled??document.webkitFullscreenEnabled)!==!1),[o]=He.useState(()=>/iPhone|iPod/.test(navigator.userAgent)&&!ja()),c=He.useCallback(()=>{const d=i.current;if(!d||n.current||uc()||ja()||!(d.requestFullscreen||d.webkitRequestFullscreen)||(document.fullscreenEnabled??document.webkitFullscreenEnabled)===!1)return;t.current=!0;const p={cancelled:!1};n.current=p;const g=()=>{n.current===p&&(n.current=null),p.cancelled&&!n.current&&Qa(d)};try{const x=d.requestFullscreen?d.requestFullscreen({navigationUI:"hide"}):d.webkitRequestFullscreen();Promise.resolve(x).then(g,g)}catch{g()}},[]),l=He.useCallback(()=>{n.current&&(n.current.cancelled=!0,n.current=null),t.current=!1,Qa(i.current)},[]),h=He.useCallback(d=>{d.isTrusted&&d.pointerType==="touch"&&!t.current&&c()},[c]);return He.useEffect(()=>{const d=i.current,u=()=>r(uc()===d);return document.addEventListener("fullscreenchange",u),document.addEventListener("webkitfullscreenchange",u),()=>{document.removeEventListener("fullscreenchange",u),document.removeEventListener("webkitfullscreenchange",u),l(),Qa(d)}},[l]),{attachSurface:e,enter:c,exit:l,enterOnFirstTouch:h,showInstall:o,canEnter:a&&!s}}function jx({onBack:i,fullscreenButton:e}){const t=He.useRef(null);return He.useEffect(()=>{const n=new Gv(t.current);return n.start(),()=>n.dispose()},[]),k.jsxs("main",{className:"chroma-ops",children:[k.jsx("div",{className:"co-game-stage",ref:t}),k.jsxs("div",{className:"co-start",children:["CHROMA OPS ",k.jsx("small",{children:"WASD 移動 · Shift 跑步 · 1–7 武器 · 狙擊槍右鍵開鏡"})]}),k.jsx("button",{type:"button",className:"co-exit",onClick:i,children:"← 選擇模式"}),e]})}function ty(){const[i,e]=He.useState(()=>new URLSearchParams(location.search).has("room")?"multi":"menu"),{attachSurface:t,enter:n,exit:s,enterOnFirstTouch:r,showInstall:a,canEnter:o}=Jx(),c=Md();He.useEffect(()=>{const d=document.querySelector('meta[name="viewport"]'),u=d?.content;d&&(d.content=`${u}, viewport-fit=cover`);const p=document.createElement("link");p.rel="manifest",p.href="/dca-simulator/chroma-ops.webmanifest";const g=document.createElement("link");return g.rel="apple-touch-icon",g.href="/dca-simulator/chroma-ops-192.png",document.head.append(p,g),()=>{d&&(d.content=u),p.remove(),g.remove()}},[]);const l=()=>{s();const d=new URL(location.href);d.searchParams.delete("room"),history.replaceState(null,"",d),e("menu")},h=o&&k.jsx("button",{type:"button",className:"co-fullscreen",onClick:n,children:"全螢幕"});return k.jsx("div",{className:"co-surface",ref:t,children:i==="solo"?k.jsx(jx,{onBack:l,fullscreenButton:h}):i==="multi"||i==="resume"?k.jsx(Kx,{resumeOnMount:i==="resume",onBack:l,enterFullscreen:n,exitFullscreen:s,enterOnFirstTouch:r,fullscreenButton:h}):k.jsx("main",{className:"co-menu",children:k.jsxs("section",{className:"co-menu-card",children:[k.jsx("p",{className:"co-eyebrow",children:"NEON CITY ARENA"}),k.jsx("h1",{children:"CHROMA OPS"}),k.jsx("p",{children:"選擇你的戰場模式"}),k.jsxs("div",{className:"co-mode-grid",children:[k.jsxs("button",{onClick:()=>{n(),e("solo")},children:[k.jsx("span",{children:"◎"}),k.jsx("b",{children:"單機訓練"}),k.jsx("small",{children:"對戰 AI、熟悉地圖與武器"})]}),k.jsxs("button",{onClick:()=>e("multi"),children:[k.jsx("span",{children:"◉"}),k.jsx("b",{children:"多人連線"}),k.jsx("small",{children:"建立房間、邀請朋友對戰"})]})]}),c&&k.jsx(Ed,{code:c.code,onResume:()=>{n(),e("resume")}}),a&&k.jsxs("details",{className:"co-install",children:[k.jsx("summary",{children:"在 iPhone 隱藏瀏覽器工具列"}),k.jsx("p",{children:"在 Safari 點「分享」→「加入主畫面」。如果看到「作為網頁 App 開啟」，請開啟它。之後從主畫面的 Chroma Ops 圖示啟動。"})]}),k.jsx(lc,{})]})})})}export{ty as default};
