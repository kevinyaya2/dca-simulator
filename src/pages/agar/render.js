function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function radiusFromMass(mass) {
  return Math.sqrt(mass) * 3.9;
}

function canAbsorbCell(attacker, defender, distance) {
  const ratio = attacker.mass / Math.max(1, defender.mass);
  if (ratio <= 1.001) return false;
  const attackerRadius = radiusFromMass(attacker.mass);
  const defenderRadius = radiusFromMass(defender.mass);
  return distance < attackerRadius + defenderRadius;
}

function canPotentiallyAbsorbCell(attacker, defender) {
  return attacker.mass > defender.mass * 1.001;
}

function toRgb(hex) {
  const h = hex.replace("#", "");
  const value = h.length === 3
    ? h.split("").map((s) => s + s).join("")
    : h;
  const n = Number.parseInt(value, 16);
  return {
    r: (n >> 16) & 255,
    g: (n >> 8) & 255,
    b: n & 255,
  };
}

function rgba(hex, alpha) {
  const { r, g, b } = toRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function mix(hexA, hexB, t) {
  const a = toRgb(hexA);
  const b = toRgb(hexB);
  const p = clamp(t, 0, 1);
  const r = Math.round(a.r + (b.r - a.r) * p);
  const g = Math.round(a.g + (b.g - a.g) * p);
  const b2 = Math.round(a.b + (b.b - a.b) * p);
  return `rgb(${r}, ${g}, ${b2})`;
}

function worldToScreen(camera, width, height, x, y) {
  return {
    x: (x - camera.x) * camera.zoom + width * 0.5,
    y: (y - camera.y) * camera.zoom + height * 0.5,
  };
}

function drawBackground(ctx, state, width, height, timeMs) {
  const grad = ctx.createLinearGradient(0, 0, width, height);
  grad.addColorStop(0, "#080b25");
  grad.addColorStop(0.38, "#11103a");
  grad.addColorStop(0.7, "#1a0b30");
  grad.addColorStop(1, "#09061b");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  const overlayA = ctx.createRadialGradient(width * 0.24, height * 0.18, 8, width * 0.24, height * 0.18, width * 0.72);
  overlayA.addColorStop(0, "rgba(58, 228, 255, 0.16)");
  overlayA.addColorStop(1, "rgba(58, 228, 255, 0)");
  ctx.fillStyle = overlayA;
  ctx.fillRect(0, 0, width, height);

  const overlayB = ctx.createRadialGradient(width * 0.76, height * 0.72, 16, width * 0.76, height * 0.72, width * 0.8);
  overlayB.addColorStop(0, "rgba(255, 98, 194, 0.14)");
  overlayB.addColorStop(1, "rgba(255, 98, 194, 0)");
  ctx.fillStyle = overlayB;
  ctx.fillRect(0, 0, width, height);

  const gridSpacing = 120 * state.camera.zoom;
  if (gridSpacing > 28) {
    const offsetX = ((-state.camera.x * state.camera.zoom) % gridSpacing + gridSpacing) % gridSpacing;
    const offsetY = ((-state.camera.y * state.camera.zoom) % gridSpacing + gridSpacing) % gridSpacing;
    ctx.strokeStyle = "rgba(138, 154, 255, 0.095)";
    ctx.lineWidth = 1;
    for (let x = offsetX; x < width; x += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = offsetY; y < height; y += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  }

  for (const particle of state.backgroundParticles) {
    const x = ((particle.x * width - state.camera.x * 0.03 * particle.depth) % width + width) % width;
    const y = ((particle.y * height - state.camera.y * 0.03 * particle.depth) % height + height) % height;
    const pulse = 0.5 + Math.sin(timeMs * 0.0014 * particle.twinkle + particle.phase) * 0.5;
    const alpha = 0.2 + pulse * 0.48 * particle.depth;
    ctx.fillStyle = `hsla(${particle.hue}, 90%, 72%, ${alpha})`;
    ctx.beginPath();
    ctx.arc(x, y, particle.size * particle.depth, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawWobbleBlobPath(ctx, x, y, radius, seed, timeMs) {
  const points = clamp(Math.floor(18 + radius / 4), 16, 40);
  const t = timeMs * 0.0018;
  const wobble = Math.min(4.6, radius * 0.085);
  for (let i = 0; i <= points; i += 1) {
    const p = (i / points) * Math.PI * 2;
    const wave = Math.sin(p * 3.1 + seed + t) * wobble * 0.65
      + Math.sin(p * 5.2 + seed * 1.7 - t * 1.15) * wobble * 0.35;
    const r = Math.max(8, radius + wave);
    const px = x + Math.cos(p) * r;
    const py = y + Math.sin(p) * r;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
}

function drawCell(ctx, camera, width, height, cell, timeMs, showName = false, relation = "neutral") {
  const pos = worldToScreen(camera, width, height, cell.x, cell.y);
  const radius = radiusFromMass(cell.mass) * camera.zoom;
  if (radius < 2.5) return;

  ctx.save();
  ctx.shadowBlur = Math.max(6, radius * 0.45);
  ctx.shadowColor = rgba(cell.color, 0.5);

  ctx.beginPath();
  drawWobbleBlobPath(ctx, pos.x, pos.y, radius, cell.wobbleSeed, timeMs);
  const core = mix(cell.color, "#f5ffff", 0.34);
  const edge = mix(cell.color, "#07101b", 0.18);
  const gradient = ctx.createRadialGradient(
    pos.x - radius * 0.28,
    pos.y - radius * 0.32,
    Math.max(1, radius * 0.16),
    pos.x,
    pos.y,
    radius * 1.05,
  );
  gradient.addColorStop(0, core);
  gradient.addColorStop(0.62, cell.color);
  gradient.addColorStop(1, edge);
  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.lineWidth = Math.max(1.2, radius * 0.06);
  ctx.strokeStyle = rgba("#f8ffff", 0.43);
  ctx.stroke();

  if (relation === "prey" || relation === "threat" || relation === "bounty" || relation === "revenge" || relation === "protected") {
    const isPrey = relation === "prey";
    const isBounty = relation === "bounty";
    const isRevenge = relation === "revenge";
    const isProtected = relation === "protected";
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, radius + Math.max(5, radius * 0.16), 0, Math.PI * 2);
    ctx.lineWidth = Math.max(2, radius * 0.08);
    ctx.strokeStyle = isProtected
      ? "rgba(112, 236, 255, 0.95)"
      : isBounty
        ? "rgba(255, 227, 110, 0.96)"
        : isRevenge
          ? "rgba(255, 149, 218, 0.96)"
        : isPrey ? "rgba(112, 255, 188, 0.9)" : "rgba(255, 88, 158, 0.92)";
    ctx.shadowBlur = Math.max(10, radius * 0.4);
    ctx.shadowColor = isProtected
      ? "rgba(112, 236, 255, 0.78)"
      : isBounty
        ? "rgba(255, 227, 110, 0.76)"
        : isRevenge
          ? "rgba(255, 149, 218, 0.76)"
        : isPrey ? "rgba(75, 255, 190, 0.72)" : "rgba(255, 72, 150, 0.72)";
    ctx.stroke();
    ctx.shadowBlur = 0;
  }

  ctx.beginPath();
  ctx.ellipse(pos.x - radius * 0.24, pos.y - radius * 0.32, radius * 0.3, radius * 0.18, -0.4, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255, 255, 255, 0.42)";
  ctx.fill();

  ctx.restore();

  if (showName && radius > 12) {
    const mass = Math.round(cell.mass);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const nameY = pos.y - Math.max(4, radius * 0.06);
    const massY = pos.y + Math.max(10, radius * 0.22);
    const nameFont = Math.max(10, radius * 0.22);
    const massFont = Math.max(9, radius * 0.18);

    ctx.font = `700 ${nameFont}px "Segoe UI", "Microsoft JhengHei", sans-serif`;
    ctx.lineWidth = Math.max(3, nameFont * 0.36);
    ctx.strokeStyle = "rgba(6, 10, 24, 0.92)";
    ctx.strokeText(cell.name, pos.x, nameY);
    ctx.fillStyle = "rgba(250, 254, 255, 0.98)";
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
    ctx.shadowBlur = Math.max(3, nameFont * 0.2);
    ctx.fillText(cell.name, pos.x, nameY);

    ctx.font = `800 ${massFont}px "Segoe UI", sans-serif`;
    ctx.lineWidth = Math.max(3, massFont * 0.4);
    ctx.strokeStyle = "rgba(6, 10, 24, 0.9)";
    ctx.strokeText(mass.toString(), pos.x, massY);
    ctx.fillStyle = "rgba(226, 236, 255, 0.98)";
    ctx.fillText(mass.toString(), pos.x, massY);

    if (relation === "prey" || relation === "threat" || relation === "bounty" || relation === "revenge" || relation === "protected") {
      const tag = relation === "prey"
        ? "EDIBLE"
        : relation === "bounty"
          ? "BOUNTY"
          : relation === "revenge"
            ? "REVENGE"
          : relation === "protected"
            ? "SAFE"
            : "DANGER";
      const tagY = pos.y - radius - Math.max(10, radius * 0.18);
      const tagFont = Math.max(9, radius * 0.14);
      ctx.font = `900 ${tagFont}px "Segoe UI", sans-serif`;
      ctx.lineWidth = Math.max(3, tagFont * 0.36);
      ctx.strokeStyle = "rgba(3, 7, 20, 0.9)";
      ctx.strokeText(tag, pos.x, tagY);
      ctx.fillStyle = relation === "prey"
        ? "rgba(126, 255, 198, 0.98)"
        : relation === "bounty"
          ? "rgba(255, 227, 110, 0.98)"
          : relation === "revenge"
            ? "rgba(255, 149, 218, 0.98)"
          : relation === "protected"
            ? "rgba(126, 235, 255, 0.98)"
            : "rgba(255, 126, 178, 0.98)";
      ctx.fillText(tag, pos.x, tagY);
    }
    ctx.shadowBlur = 0;
  }
}

function drawVirus(ctx, camera, width, height, virus, timeMs) {
  const pos = worldToScreen(camera, width, height, virus.x, virus.y);
  const radius = radiusFromMass(virus.mass) * camera.zoom;
  if (radius < 3) return;

  const spikes = 18;
  const spin = virus.spin + timeMs * 0.0003;
  ctx.beginPath();
  for (let i = 0; i <= spikes; i += 1) {
    const p = (i / spikes) * Math.PI * 2 + spin;
    const amp = i % 2 === 0 ? radius * 1.12 : radius * 0.78;
    const px = pos.x + Math.cos(p) * amp;
    const py = pos.y + Math.sin(p) * amp;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();

  const gradient = ctx.createRadialGradient(
    pos.x - radius * 0.24,
    pos.y - radius * 0.3,
    radius * 0.22,
    pos.x,
    pos.y,
    radius * 1.08,
  );
  gradient.addColorStop(0, "#ddff92");
  gradient.addColorStop(0.55, "#8eea50");
  gradient.addColorStop(1, "#2f8d37");
  ctx.fillStyle = gradient;
  ctx.shadowBlur = radius * 0.45;
  ctx.shadowColor = "rgba(154, 255, 116, 0.5)";
  ctx.fill();

  ctx.lineWidth = Math.max(1, radius * 0.08);
  ctx.strokeStyle = "rgba(240, 255, 220, 0.7)";
  ctx.stroke();
}

function drawFood(ctx, camera, width, height, food, timeMs) {
  const pos = worldToScreen(camera, width, height, food.x, food.y);
  const radius = radiusFromMass(food.mass) * camera.zoom;
  if (radius < 0.8) return;

  const pulse = 0.86 + Math.sin(timeMs * 0.0019 + food.drift) * 0.12;
  const r = radius * pulse;
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
  ctx.fillStyle = food.color;
  ctx.shadowBlur = r * 3.2;
  ctx.shadowColor = food.color;
  ctx.fill();

  if (food.mass >= 3) {
    ctx.lineWidth = Math.max(1, r * 0.18);
    ctx.strokeStyle = rgba("#ffffff", food.mass >= 8 ? 0.72 : 0.42);
    ctx.stroke();

    if (food.mass >= 8) {
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, r * 1.65, 0, Math.PI * 2);
      ctx.lineWidth = Math.max(1, r * 0.08);
      ctx.strokeStyle = rgba(food.color, 0.36);
      ctx.stroke();
    }
  }

  if (food.type && food.type !== "normal") {
    const glyph = food.type === "speed"
      ? "S"
      : food.type === "shield"
        ? "O"
        : food.type === "nova"
          ? "N"
          : food.type === "merge"
            ? "M"
            : food.type === "freeze"
              ? "F"
              : "G";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `900 ${Math.max(9, r * 0.9)}px "Segoe UI", sans-serif`;
    ctx.lineWidth = Math.max(2, r * 0.22);
    ctx.strokeStyle = "rgba(5, 8, 20, 0.82)";
    ctx.strokeText(glyph, pos.x, pos.y + r * 0.03);
    ctx.fillStyle = "rgba(255, 255, 255, 0.96)";
    ctx.fillText(glyph, pos.x, pos.y + r * 0.03);
  }
}

function drawEffects(ctx, camera, width, height, state) {
  for (const effect of state.effects) {
    const pos = worldToScreen(camera, width, height, effect.x, effect.y);
    const life = effect.ttl / effect.maxTtl;
    const radius = effect.radius * (1 + (1 - life) * 0.6) * camera.zoom;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = rgba(effect.color, 0.14 * life);
    ctx.fill();
    ctx.lineWidth = Math.max(1, radius * 0.07);
    ctx.strokeStyle = rgba("#ffffff", 0.22 * life);
    ctx.stroke();
  }

  for (const particle of state.particles) {
    const pos = worldToScreen(camera, width, height, particle.x, particle.y);
    const life = particle.life / particle.maxLife;
    const size = particle.size * (0.5 + life * 0.8) * camera.zoom;
    if (size < 0.2) continue;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, size, 0, Math.PI * 2);
    ctx.fillStyle = rgba(particle.color, 0.16 + life * 0.8);
    ctx.fill();
  }
}

function drawWorldBounds(ctx, camera, width, height, world) {
  const topLeft = worldToScreen(camera, width, height, 0, 0);
  const bottomRight = worldToScreen(camera, width, height, world.width, world.height);
  const w = bottomRight.x - topLeft.x;
  const h = bottomRight.y - topLeft.y;
  ctx.strokeStyle = "rgba(192, 210, 255, 0.2)";
  ctx.lineWidth = Math.max(1, 2 * camera.zoom);
  ctx.strokeRect(topLeft.x, topLeft.y, w, h);
}

function drawAreaEvents(ctx, state, width, height, timeMs) {
  const camera = state.camera;
  if (state.safeZone) {
    const safe = state.safeZone;
    const pos = worldToScreen(camera, width, height, safe.x, safe.y);
    const radius = safe.radius * camera.zoom;
    ctx.save();
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
    ctx.lineWidth = Math.max(2, 5 * camera.zoom);
    ctx.strokeStyle = "rgba(132, 255, 203, 0.62)";
    ctx.shadowBlur = 18;
    ctx.shadowColor = "rgba(132, 255, 203, 0.45)";
    ctx.stroke();
    ctx.restore();
  }

  for (const zone of state.zones || []) {
    const pos = worldToScreen(camera, width, height, zone.x, zone.y);
    const radius = zone.radius * camera.zoom;
    if (radius < 6) continue;

    const pulse = 0.5 + Math.sin(timeMs * 0.002 + zone.pulse) * 0.5;
    const alpha = zone.type === "blackhole" ? 0.24 : 0.14 + pulse * 0.08;
    const gradient = ctx.createRadialGradient(pos.x, pos.y, Math.max(4, radius * 0.08), pos.x, pos.y, radius);
    gradient.addColorStop(0, rgba(zone.color, zone.type === "blackhole" ? 0.48 : 0.28));
    gradient.addColorStop(0.62, rgba(zone.color, alpha));
    gradient.addColorStop(1, rgba(zone.color, 0));

    ctx.save();
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.lineWidth = Math.max(1.4, 3 * camera.zoom);
    ctx.strokeStyle = rgba(zone.color, 0.44 + pulse * 0.2);
    ctx.setLineDash(zone.type === "storm" ? [10, 8] : zone.type === "nebula" ? [2, 10] : []);
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, radius * (0.96 + pulse * 0.04), 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    if (zone.type === "blackhole") {
      ctx.translate(pos.x, pos.y);
      ctx.rotate(timeMs * 0.0018);
      ctx.beginPath();
      ctx.arc(0, 0, Math.max(8, radius * 0.12), 0, Math.PI * 2);
      ctx.fillStyle = "rgba(5, 4, 18, 0.94)";
      ctx.shadowBlur = Math.max(18, radius * 0.2);
      ctx.shadowColor = rgba(zone.color, 0.92);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(0, 0, radius * 0.24, radius * 0.08, 0.35, 0, Math.PI * 2);
      ctx.strokeStyle = rgba("#ffffff", 0.48);
      ctx.lineWidth = Math.max(1, radius * 0.02);
      ctx.stroke();
    }
    ctx.restore();

    if (radius > 58) {
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `900 ${Math.max(12, Math.min(22, radius * 0.12))}px "Segoe UI", "Microsoft JhengHei", sans-serif`;
      ctx.lineWidth = 4;
      ctx.strokeStyle = "rgba(5, 8, 22, 0.9)";
      ctx.strokeText(zone.label, pos.x, pos.y - radius * 0.72);
      ctx.fillStyle = rgba(zone.color, 0.95);
      ctx.fillText(zone.label, pos.x, pos.y - radius * 0.72);
    }
  }
}

function getCellRelationToPlayer(state, cell) {
  if (cell.ownerId === state.player.id && state.playerRun?.invulnerableUntil > state.time) return "protected";
  if (state.revenge?.actorId && state.revenge.expiresAt > state.time && cell.ownerId === state.revenge.actorId) return "revenge";
  if (state.bounty?.actorId && cell.ownerId === state.bounty.actorId) return "bounty";
  if (cell.ownerId === state.player.id || state.player.cells.length === 0) return "neutral";

  let canEatPlayer = false;
  let playerCanEat = false;
  let playerCouldEat = false;
  let couldEatPlayer = false;
  for (const playerCell of state.player.cells) {
    const dist = Math.hypot(cell.x - playerCell.x, cell.y - playerCell.y);
    if (canAbsorbCell(cell, playerCell, dist)) canEatPlayer = true;
    if (canAbsorbCell(playerCell, cell, dist)) playerCanEat = true;
    if (canPotentiallyAbsorbCell(cell, playerCell)) couldEatPlayer = true;
    if (canPotentiallyAbsorbCell(playerCell, cell)) playerCouldEat = true;
  }

  if (canEatPlayer || couldEatPlayer) return "threat";
  if (playerCanEat || playerCouldEat) return "prey";
  return "neutral";
}

export function renderGame(ctx, state, viewport, timeMs) {
  const width = viewport.width;
  const height = viewport.height;
  ctx.clearRect(0, 0, width, height);
  drawBackground(ctx, state, width, height, timeMs);
  drawWorldBounds(ctx, state.camera, width, height, state.world);
  drawAreaEvents(ctx, state, width, height, timeMs);

  for (const food of state.foods) drawFood(ctx, state.camera, width, height, food, timeMs);
  for (const blob of state.ejected) {
    const pos = worldToScreen(state.camera, width, height, blob.x, blob.y);
    const radius = radiusFromMass(blob.mass) * state.camera.zoom;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = mix(blob.color, "#ffffff", 0.24);
    ctx.shadowBlur = radius * 2.4;
    ctx.shadowColor = rgba(blob.color, 0.7);
    ctx.fill();
  }
  for (const virus of state.viruses) drawVirus(ctx, state.camera, width, height, virus, timeMs);

  const cells = [state.player, ...state.bots].flatMap((actor) => actor.cells);
  cells.sort((a, b) => a.mass - b.mass);
  for (const cell of cells) {
    drawCell(ctx, state.camera, width, height, cell, timeMs, true, getCellRelationToPlayer(state, cell));
  }
  drawEffects(ctx, state.camera, width, height, state);
}
