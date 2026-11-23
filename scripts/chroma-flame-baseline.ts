import { execFileSync } from 'node:child_process';
import { writeFile, unlink } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';

// Private, uniquely named modules preserve the old ray implementation on both
// sides of the connection. Current geometry/effects appearance stays identical.
export async function flameBaseline(reference='HEAD'){
  const suffix=`.flame-${randomUUID()}.local`,files:string[]=[];
  const relatives=['shared/arena','shared/combat','shared/aim','server/src/voidWarden','server/src/index',
    'src/chroma-ops/systems/WeaponEffects','src/chroma-ops/core/MultiplayerGame'];
  try{
    for(const relative of relatives){
      let source=execFileSync('git',['show',`${reference}:${relative}.ts`],{cwd:fileURLToPath(new URL('../',import.meta.url)),encoding:'utf8'}).replaceAll('\r\n','\n');
      source=source.replaceAll('./voidWarden.js',`./voidWarden${suffix}.js`).replace(/\/(arena|combat|aim|WeaponEffects)(?=\.js['"]|['"])/g,`/$1${suffix}`);
      if(relative.endsWith('MultiplayerGame')&&!source.includes("measure('flameCPU_ms'")){
        // Measurement-only instrumentation, with the same wrapper on both
        // variants. No query, shooting, death or rendering behavior is changed.
        source=source.replace('    this.desktop?.update();const input=', '    this.diagnostics.beginCombatFrame();\n    this.desktop?.update();const input=')
          .replace('const result=resolveShot(this.active,origin,direction,targets,Math.random,effectWorld,aiming,state.level);',
            "const result=this.diagnostics.measure('shotCPU_ms',()=>resolveShot(this.active,origin,direction,targets,Math.random,effectWorld,aiming,state.level));")
          .replace('    this.effects.localFlame(',"    this.diagnostics.measure('flameCPU_ms',()=>this.effects.localFlame(")
          .replace("effectWorld,dt,targets,state.level);this.aimFeedback.update(blocked||!this.player.alive?'neutral':queryAim(this.active,aim.origin,aim.direction,targets,effectWorld,state.level),this.player.alive&&!blocked);this.scope.render(this.renderer,this.scene,this.cam);",
            "effectWorld,dt,targets,state.level));this.aimFeedback.update(blocked||!this.player.alive?'neutral':this.diagnostics.measure('aimCPU_ms',()=>queryAim(this.active,aim.origin,aim.direction,targets,effectWorld,state.level)),this.player.alive&&!blocked);this.scope.render(this.renderer,this.scene,this.cam);this.diagnostics.endCombatFrame();");
        if(!source.includes("measure('aimCPU_ms'"))throw new Error('Baseline instrumentation did not match');
      }
      const filename=fileURLToPath(new URL(`../${relative}${suffix}.ts`,import.meta.url));
      await writeFile(filename,source,{flag:'wx'});files.push(filename);
    }
    return {
      server:await import(pathToFileURL(files[4]).href) as typeof import('../server/src/index.ts'),
      combat:await import(pathToFileURL(files[1]).href) as typeof import('../shared/combat.ts'),
      arena:await import(pathToFileURL(files[0]).href) as typeof import('../shared/arena.ts'),
      aim:await import(pathToFileURL(files[2]).href) as typeof import('../shared/aim.ts'),
      effects:await import(pathToFileURL(files[5]).href) as typeof import('../src/chroma-ops/systems/WeaponEffects.ts'),
      clientModule:`/dca-simulator/src/chroma-ops/core/MultiplayerGame${suffix}.ts`,
      async dispose(){for(const filename of files)await unlink(filename);},
    };
  }catch(error){for(const filename of files)await unlink(filename);throw error;}
}
