import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { RectAreaLightUniformsLib } from "three/addons/lights/RectAreaLightUniformsLib.js";

const mount = document.querySelector(".arcade-view");
if (!mount) throw new Error("arcade mount missing");

RectAreaLightUniformsLib.init();

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
const look = new THREE.Vector3(0, 2.95, 0);
const dist = 14.2;
let yaw = 0.06;
let pitch = 0;
let ty = yaw;
let tp = pitch;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.42;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setClearColor(0x000000, 0);
mount.appendChild(renderer.domElement);

const bodyMat = new THREE.MeshPhysicalMaterial({ color: 0x252a33, metalness: 0.62, roughness: 0.28, clearcoat: 0.75, clearcoatRoughness: 0.18 });
const edgeMat = new THREE.MeshStandardMaterial({ color: 0x535c6b, metalness: 0.82, roughness: 0.25 });
const blackMat = new THREE.MeshStandardMaterial({ color: 0x050608, metalness: 0.25, roughness: 0.38 });
const chromeMat = new THREE.MeshPhysicalMaterial({ color: 0xdde3ea, metalness: 1, roughness: 0.12 });
const redMat = new THREE.MeshPhysicalMaterial({ color: 0xb90717, emissive: 0x7c0009, emissiveIntensity: 1.8, metalness: 0.35, roughness: 0.2, clearcoat: 1 });
const limeAccentMat = new THREE.MeshPhysicalMaterial({ color: 0xd9ff43, emissive: 0x789900, emissiveIntensity: 2.25, metalness: 0.2, roughness: 0.18, clearcoat: 1 });
const blueMat = new THREE.MeshPhysicalMaterial({ color: 0x027bff, emissive: 0x0050ff, emissiveIntensity: 2, roughness: 0.2 });
const whiteMat = new THREE.MeshPhysicalMaterial({ color: 0xf4f6ff, emissive: 0xb7cbff, emissiveIntensity: 1.3, roughness: 0.16 });
const glassMat = new THREE.MeshPhysicalMaterial({ color: 0x9ac4e7, metalness: 0.05, roughness: 0.06, transmission: 0.18, transparent: true, opacity: 0.32, clearcoat: 1 });

const machine = new THREE.Group();
scene.add(machine);

function mesh(geometry, material, position, rotation = [0, 0, 0], cast = true) {
  const item = new THREE.Mesh(geometry, material);
  item.position.set(...position);
  item.rotation.set(...rotation);
  item.castShadow = cast;
  item.receiveShadow = true;
  machine.add(item);
  return item;
}
function box(size, radius, material, position, rotation) {
  return mesh(new RoundedBoxGeometry(...size, 5, radius), material, position, rotation);
}

box([3.75, 0.28, 2.65], 0.1, edgeMat, [0, 0.15, 0]);
box([3.45, 3.35, 2.3], 0.16, bodyMat, [0, 1.85, 0.05]);
box([3.55, 2.25, 1.92], 0.15, bodyMat, [0, 4.35, -0.18], [-0.085, 0, 0]);
box([3.82, 1.02, 2.05], 0.17, bodyMat, [0, 5.73, -0.05], [0.03, 0, 0]);
box([0.13, 5.35, 2.47], 0.055, edgeMat, [-1.73, 2.85, 0.02]);
box([0.13, 5.35, 2.47], 0.055, edgeMat, [1.73, 2.85, 0.02]);
box([3.56, 0.12, 2.3], 0.045, limeAccentMat, [0, 3.53, 0.06]);

const marqueeCanvas = document.createElement("canvas");
marqueeCanvas.width = 1024;
marqueeCanvas.height = 280;
const mc = marqueeCanvas.getContext("2d");
const mg = mc.createLinearGradient(0, 0, 1024, 280);
mg.addColorStop(0, "#06070a");
mg.addColorStop(0.5, "#161a22");
mg.addColorStop(1, "#050609");
mc.fillStyle = mg;
mc.fillRect(0, 0, 1024, 280);
mc.strokeStyle = "#d9ff43";
mc.lineWidth = 5;
mc.strokeRect(10, 10, 1004, 260);
mc.textAlign = "center";
mc.textBaseline = "middle";
mc.shadowColor = "#d9ff43";
mc.shadowBlur = 26;
mc.fillStyle = "#fff";
mc.font = "900 72px Arial";
mc.fillText("AB GAMING", 512, 118);
mc.shadowBlur = 14;
mc.fillStyle = "#d9ff43";
mc.font = "700 34px Arial";
mc.letterSpacing = "10px";
mc.fillText("STUDIOS", 512, 200);
const marqueeTex = new THREE.CanvasTexture(marqueeCanvas);
marqueeTex.colorSpace = THREE.SRGBColorSpace;
const marqueeMat = new THREE.MeshPhysicalMaterial({ map: marqueeTex, emissiveMap: marqueeTex, emissive: 0xffffff, emissiveIntensity: 0.85, roughness: 0.18, clearcoat: 1 });
box([3.32, 0.7, 0.07], 0.075, marqueeMat, [0, 5.83, 1.01], [-0.03, 0, 0]);

const gameCanvas = document.createElement("canvas");
gameCanvas.width = 900;
gameCanvas.height = 620;
const gc = gameCanvas.getContext("2d");
const gameTex = new THREE.CanvasTexture(gameCanvas);
gameTex.colorSpace = THREE.SRGBColorSpace;
const screenMat = new THREE.MeshBasicMaterial({ map: gameTex, toneMapped: false });
box([3, 2, 0.11], 0.09, blackMat, [0, 4.42, 0.91], [-0.085, 0, 0]);
box([2.72, 1.69, 0.025], 0.055, screenMat, [0, 4.43, 0.978], [-0.085, 0, 0], false);
box([2.82, 1.79, 0.018], 0.06, glassMat, [0, 4.44, 1.008], [-0.085, 0, 0], false);

box([3.75, 0.38, 2.82], 0.12, bodyMat, [0, 3.41, 0.73], [-0.13, 0, 0]);
box([3.43, 0.055, 2.18], 0.045, blackMat, [0, 3.64, 0.86], [-0.13, 0, 0]);
[[-1.48, 3.76, 0.03], [1.48, 3.76, 0.03], [-1.48, 3.83, 1.78], [1.48, 3.83, 1.78]].forEach((p) => mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.025, 24), chromeMat, p, [-0.13, 0, 0]));

function joystick(x) {
  mesh(new THREE.CylinderGeometry(0.11, 0.15, 0.08, 32), blackMat, [x, 3.82, 1.5], [-0.13, 0, 0]);
  mesh(new THREE.CylinderGeometry(0.038, 0.038, 0.38, 24), chromeMat, [x, 4.02, 1.47], [-0.13, 0, 0]);
  mesh(new THREE.SphereGeometry(0.16, 32, 20), redMat, [x, 4.22, 1.44]);
}
joystick(-1.02);

const buttonPositions = [[0.48, 3.82, 1.42], [0.83, 3.82, 1.42], [1.18, 3.82, 1.42], [0.55, 3.86, 1.72], [0.9, 3.86, 1.72], [1.25, 3.86, 1.72]];
buttonPositions.forEach((p, i) => {
  mesh(new THREE.CylinderGeometry(0.105, 0.125, 0.075, 32), i % 3 === 0 ? whiteMat : (i % 2 ? redMat : blueMat), p, [-0.13, 0, 0]);
});

box([2.35, 1.52, 0.1], 0.09, blackMat, [0, 1.73, 1.2]);
box([0.53, 0.78, 0.08], 0.045, edgeMat, [-0.56, 1.8, 1.28]);
box([0.53, 0.78, 0.08], 0.045, edgeMat, [0.56, 1.8, 1.28]);
[-0.56, 0.56].forEach((x) => {
  box([0.11, 0.28, 0.055], 0.025, chromeMat, [x, 1.96, 1.345]);
  box([0.2, 0.105, 0.06], 0.022, redMat, [x, 1.66, 1.35]);
});
box([0.72, 0.16, 0.06], 0.025, edgeMat, [0, 1.1, 1.31]);
box([1.12, 0.26, 0.06], 0.035, edgeMat, [0, 0.62, 1.27]);

for (let x = -6; x <= 6; x++) {
  for (let y = 0; y < 3; y++) {
    mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.025, 12), blackMat, [x * 0.16, 5.3 + y * 0.11, 1.045], [Math.PI / 2, 0, 0], false);
  }
}

box([3.12, 0.035, 0.035], 0.012, limeAccentMat, [0, 0.35, 1.22]);
box([0.035, 2.25, 0.035], 0.012, limeAccentMat, [-1.62, 1.85, 1.22]);
box([0.035, 2.25, 0.035], 0.012, limeAccentMat, [1.62, 1.85, 1.22]);

[-1.3, 1.3].forEach((x) => [-0.72, 0.72].forEach((z) => mesh(new THREE.CylinderGeometry(0.12, 0.14, 0.2, 24), blackMat, [x, -0.03, z])));

scene.add(new THREE.HemisphereLight(0xc6d5f0, 0x151820, 2.75));
const key = new THREE.SpotLight(0xffffff, 165, 25, 0.5, 0.75, 1.15);
key.position.set(5, 9, 7);
key.target.position.set(0, 2.5, 0);
key.castShadow = true;
key.shadow.mapSize.set(2048, 2048);
scene.add(key, key.target);
const fill = new THREE.SpotLight(0xbfd5ff, 95, 18, 0.58, 0.85, 1.2);
fill.position.set(-4, 5, 7);
fill.target.position.set(0, 2.6, 0.4);
scene.add(fill, fill.target);
const rim = new THREE.SpotLight(0x3973ff, 85, 18, 0.48, 0.8, 1.3);
rim.position.set(-6, 6, -5);
rim.target.position.set(0, 3, 0);
scene.add(rim, rim.target);
const accentGlow = new THREE.PointLight(0xd9ff43, 28, 7, 2);
accentGlow.position.set(3, 1.2, 2.5);
scene.add(accentGlow);
const screenGlow = new THREE.RectAreaLight(0x3d7fff, 5, 3, 2);
screenGlow.position.set(0, 4.3, 2.15);
screenGlow.lookAt(0, 4.2, 5);
scene.add(screenGlow);

function roundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
  ctx.fill();
}
function drawGame(t) {
  const w = gameCanvas.width;
  const h = gameCanvas.height;
  const bg = gc.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, "#071a3b");
  bg.addColorStop(0.48, "#070a14");
  bg.addColorStop(1, "#26040b");
  gc.fillStyle = bg;
  gc.fillRect(0, 0, w, h);
  gc.globalAlpha = 0.16;
  gc.strokeStyle = "#62a2ff";
  gc.lineWidth = 2;
  for (let x = -h; x < w + h; x += 55) {
    gc.beginPath();
    gc.moveTo(x, 0);
    gc.lineTo(x - h, h);
    gc.stroke();
  }
  gc.globalAlpha = 1;
  gc.textAlign = "center";
  gc.fillStyle = "#9caccc";
  gc.font = "700 22px Arial";
  gc.fillText("1 VS 1  •  FUTBOL BİLGİ ARENASI", w / 2, 55);
  gc.shadowBlur = 24;
  gc.shadowColor = "#458cff";
  gc.fillStyle = "#fff";
  gc.font = "900 115px Arial";
  gc.fillText("3", 160, 230);
  gc.shadowColor = "#ff2943";
  gc.fillText("1", 740, 230);
  gc.shadowBlur = 0;
  gc.fillStyle = "#556078";
  gc.font = "900 52px Arial";
  gc.fillText("VS", 450, 210);
  gc.fillStyle = "#3990ff";
  roundedRect(gc, 95, 272, 200, 14, 7);
  gc.fillStyle = "#ff203b";
  roundedRect(gc, 605, 272, 200, 14, 7);
  const pulse = 0.5 + 0.5 * Math.sin(t * 3);
  gc.fillStyle = `rgba(255,255,255,${0.08 + pulse * 0.06})`;
  roundedRect(gc, 310, 330, 280, 120, 25);
  gc.fillStyle = "#fff";
  gc.font = "900 42px Arial";
  gc.fillText("SON TUR", 450, 380);
  gc.fillStyle = "#ff3147";
  gc.font = "900 55px Arial";
  gc.fillText(String(10 - Math.floor((t * 0.8) % 10)), 450, 435);
  gc.fillStyle = "#77839d";
  gc.font = "600 18px Arial";
  gc.fillText("BUTONA BAS • CEVABINI SEÇ", 450, 545);
  gc.globalAlpha = 0.09;
  gc.fillStyle = "#000";
  for (let y = 0; y < h; y += 4) gc.fillRect(0, y, w, 2);
  gc.globalAlpha = 1;
  gameTex.needsUpdate = true;
}

function fit() {
  const w = Math.max(1, mount.clientWidth);
  const h = Math.max(1, mount.clientHeight);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h, false);
}
fit();
new ResizeObserver(fit).observe(mount);

const clock = new THREE.Clock();
function placeCamera() {
  camera.position.set(
    Math.sin(yaw) * dist,
    look.y + 0.2 + pitch * 1.4,
    Math.cos(yaw) * dist
  );
  camera.lookAt(look);
}
placeCamera();

addEventListener("pointermove", (e) => {
  const r = mount.getBoundingClientRect();
  const nx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (r.width / 2)));
  const ny = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (r.height / 2)));
  ty = 0.12 + nx * 0.42;
  tp = ny * -0.1;
});

function animate() {
  requestAnimationFrame(animate);
  const t = clock.getElapsedTime();
  drawGame(t);
  accentGlow.intensity = 25 + Math.sin(t * 2.4) * 4;
  yaw += (ty - yaw) * 0.08;
  pitch += (tp - pitch) * 0.08;
  machine.rotation.y = (0.12 - yaw) * 0.65;
  placeCamera();
  renderer.render(scene, camera);
}
animate();
