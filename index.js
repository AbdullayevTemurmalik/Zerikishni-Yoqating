(function () {
  'use strict';

  // ==========================================
  // 1. SVG ICON HELPER (ZERO EMOJIS, 100% VECTOR)
  // ==========================================
  const SVG_ICONS = {
    sun: '<svg class="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>',
    sunset: '<svg class="w-4 h-4 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 18a5 5 0 0 0-10 0"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"/><line x1="1" y1="18" x2="3" y2="18"/><line x1="21" y1="18" x2="23" y2="18"/><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"/><line x1="23" y1="22" x2="1" y2="22"/></svg>',
    moon: '<svg class="w-4 h-4 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    volumeOn: '<svg class="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>',
    volumeOff: '<svg class="w-4 h-4 text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>'
  };

  // ==========================================
  // 2. BMW CAR CATALOG & SPECIFICATIONS
  // ==========================================
  const BMW_MODELS = [
    {
      id: 'm4_g82',
      name: 'BMW M4 G82',
      badge: 'M-COMPETITION',
      engine: '3.0L Twin-Turbo S58 I6',
      hp: '510 OT KUCHI',
      desc: 'Mukammal balans, silliq M-Adaptive podveska va agressiv vertikal G82 dizayni. Ham pro drift, ham shahar poygasi uchun ideal.',
      baseTopSpeed: 325,
      baseAccel: 3.1,
      baseHandling: 95,
      baseNitro: 92,
      defaultPaintIndex: 0,
      dimensions: { width: 2.04, height: 1.38, length: 4.80 },
      grilleStyle: 'vertical_g82',
      spoilerDefault: 1
    },
    {
      id: 'm5_f90_cs',
      name: 'BMW M5 CS (F90)',
      badge: 'F90 CS EDITION',
      engine: '4.4L V8 M-TwinPower S63',
      hp: '635 OT KUCHI',
      desc: 'Oltin bronza aksentlarga ega super-sedan. 4.4 litrli V8 dvigateli bilan shahar va stadionda har qanday raqibni ortda qoldiradi.',
      baseTopSpeed: 345,
      baseAccel: 2.8,
      baseHandling: 92,
      baseNitro: 96,
      defaultPaintIndex: 4,
      dimensions: { width: 2.10, height: 1.42, length: 4.96 },
      grilleStyle: 'classic_cs',
      spoilerDefault: 1
    },
    {
      id: 'm3_e46_gtr',
      name: 'BMW M3 GTR (E46)',
      badge: 'MOST WANTED LEGEND',
      engine: '4.0L P60B40 V8 Race',
      hp: 'AFSONA (GT-PRO)',
      desc: 'Afsonaviy Need for Speed Most Wanted kumush-ko‘k poyga chiziqlari va baland GT anti-qanotga ega haqiqiy drift qiroli.',
      baseTopSpeed: 338,
      baseAccel: 2.9,
      baseHandling: 99,
      baseNitro: 100,
      defaultPaintIndex: 5,
      dimensions: { width: 2.06, height: 1.36, length: 4.68 },
      grilleStyle: 'e46_gtr',
      spoilerDefault: 2
    },
    {
      id: 'm8_f92_gt',
      name: 'BMW M8 Comp GT',
      badge: 'F92 HYPER COUPE',
      engine: '4.4L V8 BiTurbo Pro',
      hp: '750 OT KUCHI',
      desc: 'Aerodinamik flagman giper-kupe. Eng yuqori haqiqiy tezlik va katta magistralda mislsiz barqarorlik.',
      baseTopSpeed: 365,
      baseAccel: 2.5,
      baseHandling: 94,
      baseNitro: 98,
      defaultPaintIndex: 1,
      dimensions: { width: 2.14, height: 1.34, length: 4.90 },
      grilleStyle: 'wide_m8',
      spoilerDefault: 2
    }
  ];

  const PAINT_PALETTE = [
    { name: 'Isle of Man Green', hex: 0x0f6b4a, css: '#0f6b4a', metalness: 0.82, roughness: 0.16 },
    { name: 'Marina Bay Blue', hex: 0x0b4fd6, css: '#0b4fd6', metalness: 0.85, roughness: 0.15 },
    { name: 'Toronto Red Metallic', hex: 0xc81922, css: '#c81922', metalness: 0.78, roughness: 0.18 },
    { name: 'Sao Paulo Yellow', hex: 0xd4e117, css: '#d4e117', metalness: 0.65, roughness: 0.2 },
    { name: 'Frozen Deep Grey', hex: 0x262b33, css: '#262b33', metalness: 0.52, roughness: 0.36 },
    { name: 'Alpine White / GTR Silver', hex: 0xe2e8f0, css: '#e2e8f0', metalness: 0.72, roughness: 0.18 },
    { name: 'Twilight Purple', hex: 0x5b189a, css: '#5b189a', metalness: 0.82, roughness: 0.18 },
    { name: 'Sunset Orange', hex: 0xe85d04, css: '#e85d04', metalness: 0.8, roughness: 0.18 }
  ];

  const NEON_OPTIONS = [
    { name: 'Moviy Neon', color: 0x00f0ff, intensity: 2.6 },
    { name: 'Qizil M-Neon', color: 0xff1e42, intensity: 2.6 },
    { name: 'Binafsha Neon', color: 0xa855f7, intensity: 2.6 },
    { name: 'Zumrad Neon', color: 0x10b981, intensity: 2.6 },
    { name: 'Oltin CS Neon', color: 0xfbbf24, intensity: 2.6 },
    { name: 'O‘chirilgan', color: 0x000000, intensity: 0 }
  ];

  const HEADLIGHT_OPTIONS = [
    { name: 'CS Laser Sariq', color: 0xffdd44 },
    { name: 'Ice LED Oq', color: 0xe0f2fe },
    { name: 'Kristal Ko‘k', color: 0x38bdf8 }
  ];

  const WEATHER_PRESETS = [
    { name: 'Shom', iconKey: 'sunset', sky: 0x0c1428, fog: 0x131c36, ambient: 0x748ffc, dirLight: 0xffb37a, dirIntensity: 1.4 },
    { name: 'Tun Neon', iconKey: 'moon', sky: 0x040710, fog: 0x060a17, ambient: 0x3b4d71, dirLight: 0x60a5fa, dirIntensity: 0.9 },
    { name: 'Quyoshli Kun', iconKey: 'sun', sky: 0x3882c2, fog: 0x6ba6d9, ambient: 0xffffff, dirLight: 0xfff7ed, dirIntensity: 1.7 }
  ];

  const TRAFFIC_COUNTS = {
    low: { label: 'Kam mashina (6 ta)', count: 6 },
    medium: { label: 'O‘rtacha (14 ta)', count: 14 },
    high: { label: 'Ko‘p mashina (26 ta)', count: 26 }
  };

  const TRAFFIC_DIRECTIONS = {
    oneway: { label: 'Faqat to‘g‘riga (1 yo‘nalish)' },
    twoway: { label: 'Ikki tarafdan (2 yo‘nalish)' },
    oncoming: { label: 'Faqat qarama-qarshi' }
  };

  // ==========================================
  // 3. PERSISTENT STATE & SETTINGS
  // ==========================================
  const state = {
    inGarage: true,
    isPaused: false,
    selectedCarIndex: 0,
    p2CarIndex: 1,
    playerCount: 1, // 1 or 2
    trafficDensity: 'medium',
    trafficDirection: 'twoway',
    selectedMode: 'highway', // 'highway', 'stadium', 'drift', 'timeattack'
    paintIndex: 0,
    neonIndex: 0,
    headlightIndex: 0,
    spoilerLevel: 1,
    weatherIndex: 0,
    cameraIndex: 0,
    soundEnabled: true,
    masterVolume: 0.85,
    steerSensitivity: 1.0,
    windowFocused: true,
    headlightsOn: true,
    mStrobeOn: false,
    slowMoActive: false,

    coins: 25000,
    bestScore: 0,
    carUpgrades: [1, 1, 1, 1],

    // Player 1 Physics State
    speed: 0,
    maxSpeedMs: 115,
    lateralVel: 0,
    carX: 0,
    carY: 0,
    carZ: 0,
    carYaw: 0,
    carPitch: 0,
    carRoll: 0,
    verticalVel: 0,
    steerAngle: 0,
    driftAngle: 0,
    driftFactor: 0,
    nitroAmount: 100,
    health: 100,
    lap: 1,
    trackProgress: 0,
    raceRank: 1,
    currentGear: 1,

    // Player 2 Physics State
    p2: {
      speed: 0,
      maxSpeedMs: 115,
      lateralVel: 0,
      carX: 3.6,
      carY: 0,
      carZ: 0,
      carYaw: 0,
      carPitch: 0,
      carRoll: 0,
      verticalVel: 0,
      steerAngle: 0,
      driftAngle: 0,
      driftFactor: 0,
      nitroAmount: 100,
      health: 100,
      distanceKm: 0,
      score: 0,
      lap: 1,
      trackProgress: 0,
      currentGear: 1
    },

    score: 0,
    comboMult: 1.0,
    comboPoints: 0,
    comboTimer: 0,
    distanceKm: 0,
    timeLeft: 70,
    peakSpeedKmh: 0,
    nearMissCount: 0,
    sessionEnded: false
  };

  try {
    const saved = localStorage.getItem('bmw_3d_sim_save_v2');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (typeof parsed.coins === 'number') state.coins = parsed.coins;
      if (typeof parsed.bestScore === 'number') state.bestScore = parsed.bestScore;
      if (Array.isArray(parsed.carUpgrades) && parsed.carUpgrades.length === 4) {
        state.carUpgrades = parsed.carUpgrades;
      }
    }
  } catch (e) {
    // Ignore storage issues
  }

  function saveProgress() {
    try {
      localStorage.setItem('bmw_3d_sim_save_v2', JSON.stringify({
        coins: Math.floor(state.coins),
        bestScore: Math.floor(state.bestScore),
        carUpgrades: state.carUpgrades
      }));
    } catch (e) {
      // Ignore
    }
  }

  // ==========================================
  // 4. AAA WEB AUDIO ENGINE (TURBO BOV, POPS, BLUR-MUTE)
  // ==========================================
  class SoundEngine {
    constructor() {
      this.ctx = null;
      this.engineOsc1 = null;
      this.engineOsc2 = null;
      this.subOsc = null;
      this.engineGain = null;
      this.engineFilter = null;
      this.screechGain = null;
      this.initialized = false;
      this.lastRpm = 0.2;
    }

    init() {
      if (this.initialized) return;
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        this.ctx = new AudioCtx();

        this.engineOsc1 = this.ctx.createOscillator();
        this.engineOsc2 = this.ctx.createOscillator();
        this.subOsc = this.ctx.createOscillator();
        this.engineFilter = this.ctx.createBiquadFilter();
        this.engineGain = this.ctx.createGain();

        this.engineOsc1.type = 'sawtooth';
        this.engineOsc2.type = 'triangle';
        this.subOsc.type = 'sine';
        this.engineOsc1.frequency.value = 52;
        this.engineOsc2.frequency.value = 104;
        this.subOsc.frequency.value = 26;

        this.engineFilter.type = 'lowpass';
        this.engineFilter.frequency.value = 450;
        this.engineGain.gain.value = 0.0;

        this.engineOsc1.connect(this.engineFilter);
        this.engineOsc2.connect(this.engineFilter);
        this.subOsc.connect(this.engineFilter);
        this.engineFilter.connect(this.engineGain);
        this.engineGain.connect(this.ctx.destination);

        this.engineOsc1.start();
        this.engineOsc2.start();
        this.subOsc.start();

        const bufferSize = this.ctx.sampleRate * 1.5;
        const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }
        const whiteNoise = this.ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const bandpass = this.ctx.createBiquadFilter();
        bandpass.type = 'bandpass';
        bandpass.frequency.value = 1150;
        bandpass.Q.value = 4.2;

        this.screechGain = this.ctx.createGain();
        this.screechGain.gain.value = 0.0;

        whiteNoise.connect(bandpass);
        bandpass.connect(this.screechGain);
        this.screechGain.connect(this.ctx.destination);
        whiteNoise.start();

        this.initialized = true;
      } catch (e) {
        this.initialized = false;
      }
    }

    silenceImmediately() {
      if (!this.initialized || !this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        if (this.engineGain) {
          this.engineGain.gain.cancelScheduledValues(now);
          this.engineGain.gain.setValueAtTime(0.0, now);
        }
        if (this.screechGain) {
          this.screechGain.gain.cancelScheduledValues(now);
          this.screechGain.gain.setValueAtTime(0.0, now);
        }
        if (this.ctx.state === 'running') {
          this.ctx.suspend().catch(() => {});
        }
      } catch (e) {
        // Ignore
      }
    }

    updateEngine(rpmRatio, isNitro, isDrifting, activePlay) {
      if (!this.initialized || !this.ctx) return;

      if (document.hidden || !state.windowFocused || !state.soundEnabled || state.inGarage || state.isPaused || !activePlay) {
        this.silenceImmediately();
        return;
      }

      if (this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }

      const vol = state.masterVolume;
      const now = this.ctx.currentTime;
      const baseFreq = 48 + rpmRatio * 165 + (isNitro ? 42 : 0);
      this.engineOsc1.frequency.setTargetAtTime(baseFreq, now, 0.035);
      this.engineOsc2.frequency.setTargetAtTime(baseFreq * 1.5, now, 0.035);
      this.subOsc.frequency.setTargetAtTime(baseFreq * 0.5, now, 0.035);
      this.engineFilter.frequency.setTargetAtTime(320 + rpmRatio * 1250, now, 0.04);
      this.engineGain.gain.setTargetAtTime((0.06 + rpmRatio * 0.065) * vol, now, 0.05);

      const targetScreech = isDrifting ? Math.min(0.085, Math.max(0.04, state.driftFactor * 0.06)) * vol : 0.0;
      this.screechGain.gain.setTargetAtTime(targetScreech, now, 0.035);

      // Trigger Turbo Blow-Off Valve on rapid throttle release from high RPM
      if (this.lastRpm > 0.72 && rpmRatio < 0.45) {
        this.playBov();
      }
      this.lastRpm = rpmRatio;
    }

    playBov() {
      if (!state.soundEnabled || !this.initialized || !this.ctx || this.ctx.state !== 'running') return;
      try {
        const now = this.ctx.currentTime;
        const vol = state.masterVolume * 0.12;
        const bLen = Math.floor(this.ctx.sampleRate * 0.28);
        const buf = this.ctx.createBuffer(1, bLen, this.ctx.sampleRate);
        const d = buf.getChannelData(0);
        for (let i = 0; i < bLen; i++) d[i] = Math.random() * 2 - 1;

        const src = this.ctx.createBufferSource();
        src.buffer = buf;

        const flt = this.ctx.createBiquadFilter();
        flt.type = 'bandpass';
        flt.frequency.setValueAtTime(2600, now);
        flt.frequency.exponentialRampToValueAtTime(800, now + 0.26);
        flt.Q.value = 4.0;

        const gn = this.ctx.createGain();
        gn.gain.setValueAtTime(vol, now);
        gn.gain.exponentialRampToValueAtTime(0.001, now + 0.27);

        src.connect(flt);
        flt.connect(gn);
        gn.connect(this.ctx.destination);
        src.start(now);
      } catch (e) {}
    }

    playPop() {
      if (!state.soundEnabled || !this.initialized || !this.ctx || this.ctx.state !== 'running') return;
      try {
        const now = this.ctx.currentTime;
        const vol = state.masterVolume * 0.15;
        const osc = this.ctx.createOscillator();
        const gn = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(130, now);
        osc.frequency.exponentialRampToValueAtTime(35, now + 0.08);
        gn.gain.setValueAtTime(vol, now);
        gn.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
        osc.connect(gn);
        gn.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.09);
      } catch (e) {}
    }

    playEffect(type) {
      if (!state.soundEnabled || document.hidden || !state.windowFocused) return;
      if (!this.initialized) this.init();
      if (!this.ctx) return;

      try {
        if (this.ctx.state === 'suspended') {
          this.ctx.resume().catch(() => {});
        }
        const vol = state.masterVolume;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        if (type === 'bonus') {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(520, now);
          osc.frequency.exponentialRampToValueAtTime(1040, now + 0.16);
          gain.gain.setValueAtTime(0.09 * vol, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
          osc.start(now);
          osc.stop(now + 0.18);
        } else if (type === 'crash') {
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(140, now);
          osc.frequency.exponentialRampToValueAtTime(25, now + 0.28);
          gain.gain.setValueAtTime(0.2 * vol, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
          osc.start(now);
          osc.stop(now + 0.3);
        } else if (type === 'click') {
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(660, now);
          osc.frequency.exponentialRampToValueAtTime(880, now + 0.06);
          gain.gain.setValueAtTime(0.05 * vol, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
          osc.start(now);
          osc.stop(now + 0.07);
        }
      } catch (e) {
        // Ignore
      }
    }
  }

  const sound = new SoundEngine();

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      state.windowFocused = false;
      sound.silenceImmediately();
    } else {
      state.windowFocused = true;
    }
  });
  window.addEventListener('blur', () => {
    state.windowFocused = false;
    sound.silenceImmediately();
  });
  window.addEventListener('focus', () => {
    state.windowFocused = true;
  });
  window.addEventListener('pagehide', () => {
    state.windowFocused = false;
    sound.silenceImmediately();
  });

  // ==========================================
  // 5. THREE.JS 3D SCENE, CAMERAS, LIGHTS & WARP PARTICLES
  // ==========================================
  const canvas = document.getElementById('gameCanvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(WEATHER_PRESETS[0].sky);
  scene.fog = new THREE.FogExp2(WEATHER_PRESETS[0].fog, 0.0038);

  const camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.2, 520);
  const cameraP2 = new THREE.PerspectiveCamera(62, (window.innerWidth * 0.5) / window.innerHeight, 0.2, 520);

  const ambientLight = new THREE.AmbientLight(WEATHER_PRESETS[0].ambient, 0.95);
  scene.add(ambientLight);

  const sunLight = new THREE.DirectionalLight(WEATHER_PRESETS[0].dirLight, WEATHER_PRESETS[0].dirIntensity);
  sunLight.position.set(40, 75, 45);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.width = 1024;
  sunLight.shadow.mapSize.height = 1024;
  sunLight.shadow.camera.near = 5;
  sunLight.shadow.camera.far = 180;
  const d = 55;
  sunLight.shadow.camera.left = -d;
  sunLight.shadow.camera.right = d;
  sunLight.shadow.camera.top = d;
  sunLight.shadow.camera.bottom = -d;
  scene.add(sunLight);

  // High-Speed Warp Particles & Motion Streaks (Activates at > 140 km/h or Nitro)
  const speedStreakGroup = new THREE.Group();
  scene.add(speedStreakGroup);
  const speedStreaks = [];
  const STREAK_COUNT = 45;
  const streakMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.0 });

  for (let i = 0; i < STREAK_COUNT; i++) {
    const pts = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 4.5)];
    const geom = new THREE.BufferGeometry().setFromPoints(pts);
    const line = new THREE.Line(geom, streakMat.clone());
    const ang = Math.random() * Math.PI * 2;
    const rad = 2.4 + Math.random() * 6.5;
    line.position.set(Math.cos(ang) * rad, 0.8 + Math.sin(ang) * rad * 0.6, -10 - Math.random() * 45);
    speedStreakGroup.add(line);
    speedStreaks.push({ line, baseRad: rad, angle: ang });
  }

  function updateSpeedStreaks(carPos, speedKmh, isNitro, dt) {
    if (state.inGarage || speedKmh < 140) {
      speedStreakGroup.visible = false;
      return;
    }
    speedStreakGroup.visible = true;
    const intensity = Math.min(1.0, (speedKmh - 140) / 160) + (isNitro ? 0.35 : 0);
    speedStreakGroup.position.copy(carPos);

    speedStreaks.forEach((st) => {
      st.line.material.opacity = (0.2 + Math.random() * 0.4) * intensity;
      st.line.position.z += (speedKmh * 0.42 + (isNitro ? 85 : 0)) * dt;
      if (st.line.position.z > 8) {
        st.line.position.z = -35 - Math.random() * 30;
        const ang = Math.random() * Math.PI * 2;
        const rad = 2.2 + Math.random() * 6.5;
        st.line.position.x = Math.cos(ang) * rad;
        st.line.position.y = 0.8 + Math.sin(ang) * rad * 0.6;
      }
    });
  }

  // Garage Showroom Turntable Platform
  const showroomGroup = new THREE.Group();
  scene.add(showroomGroup);

  const podiumMesh = new THREE.Mesh(
    new THREE.CylinderGeometry(4.6, 5.0, 0.35, 64),
    new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.75, roughness: 0.22 })
  );
  podiumMesh.position.y = -0.18;
  podiumMesh.receiveShadow = true;
  showroomGroup.add(podiumMesh);

  const ringMesh = new THREE.Mesh(
    new THREE.RingGeometry(4.3, 4.52, 64),
    new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide })
  );
  ringMesh.rotation.x = -Math.PI / 2;
  ringMesh.position.y = 0.01;
  showroomGroup.add(ringMesh);

  const innerRingMesh = new THREE.Mesh(
    new THREE.RingGeometry(3.2, 3.3, 64),
    new THREE.MeshBasicMaterial({ color: 0xf43f5e, side: THREE.DoubleSide })
  );
  innerRingMesh.rotation.x = -Math.PI / 2;
  innerRingMesh.position.y = 0.012;
  showroomGroup.add(innerRingMesh);

  const archMesh = new THREE.Mesh(
    new THREE.TorusGeometry(5.6, 0.09, 14, 48, Math.PI),
    new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
  );
  archMesh.position.set(0, 0, -1.5);
  showroomGroup.add(archMesh);

  // ==========================================
  // 6. PRO 3D BMW M-SERIES CAR & WHEEL GENERATOR
  // ==========================================
  const playerCarGroup = new THREE.Group();
  scene.add(playerCarGroup);

  const player2CarGroup = new THREE.Group();
  player2CarGroup.visible = false;
  scene.add(player2CarGroup);

  let playerWheels = [];
  let player2Wheels = [];
  let angelEyeMaterials = [];
  let brakeLightMaterials = [];
  let reverseLightMaterials = [];
  let blinkerLeftMat = null;
  let blinkerRightMat = null;
  let nitroFlameMeshes = [];
  let p2NitroFlameMeshes = [];
  let headlightSpotL = null;
  let headlightSpotR = null;
  let strobeLightL = null;
  let strobeLightR = null;
  let camImpactShake = 0;

  function createDetailedBmwMesh(carIdx, paintObj, neonObj, headlightColorHex, spoilerLvl, isPlayer1) {
    const root = new THREE.Group();
    const wheels = [];
    const eyeMats = [];
    const brakeMats = [];
    const revMats = [];
    const flames = [];

    const spec = BMW_MODELS[carIdx];
    const w = spec.dimensions.width;
    const h = spec.dimensions.height;
    const l = spec.dimensions.length;

    const mainBodyMat = new THREE.MeshStandardMaterial({
      color: paintObj.hex,
      metalness: paintObj.metalness,
      roughness: paintObj.roughness
    });

    const carbonMat = new THREE.MeshStandardMaterial({
      color: 0x11151d,
      metalness: 0.6,
      roughness: 0.28
    });

    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x080c14,
      metalness: 0.95,
      roughness: 0.06
    });

    const accentMat = new THREE.MeshStandardMaterial({
      color: carIdx === 1 ? 0xd4af37 : 0xd1d5db,
      metalness: 0.9,
      roughness: 0.18
    });

    const caliperMat = new THREE.MeshStandardMaterial({
      color: carIdx === 1 ? 0xf59e0b : 0xe11d48,
      metalness: 0.65,
      roughness: 0.25
    });

    // 1. Sculpted Lower Chassis & Widebody Fenders
    const chassisMesh = new THREE.Mesh(new THREE.BoxGeometry(w, h * 0.42, l * 0.96), mainBodyMat);
    chassisMesh.position.y = h * 0.31;
    chassisMesh.castShadow = true;
    chassisMesh.receiveShadow = true;
    root.add(chassisMesh);

    [-w * 0.49, w * 0.49].forEach((fx) => {
      [-l * 0.31, l * 0.31].forEach((fz) => {
        const flare = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.28, 0.88), mainBodyMat);
        flare.position.set(fx, 0.42, fz);
        root.add(flare);
      });
    });

    const skirtMesh = new THREE.Mesh(new THREE.BoxGeometry(w + 0.1, 0.09, l * 0.62), carbonMat);
    skirtMesh.position.y = 0.15;
    root.add(skirtMesh);

    const frontBumper = new THREE.Mesh(new THREE.BoxGeometry(w * 0.98, h * 0.34, 0.28), mainBodyMat);
    frontBumper.position.set(0, h * 0.26, -l * 0.47);
    root.add(frontBumper);

    const splitterMesh = new THREE.Mesh(new THREE.BoxGeometry(w + 0.08, 0.06, 0.38), carbonMat);
    splitterMesh.position.set(0, 0.13, -l * 0.49);
    root.add(splitterMesh);

    [-w * 0.34, w * 0.34].forEach((ix) => {
      const intake = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.18, 0.08), carbonMat);
      intake.position.set(ix, 0.24, -l * 0.502);
      root.add(intake);
    });

    const diffuserMesh = new THREE.Mesh(new THREE.BoxGeometry(w * 0.92, 0.18, 0.26), carbonMat);
    diffuserMesh.position.set(0, 0.2, l * 0.48);
    root.add(diffuserMesh);

    // 2. Contoured Power Dome Hood & Trunk Deck
    const hoodMesh = new THREE.Mesh(new THREE.BoxGeometry(w * 0.92, 0.12, l * 0.38), mainBodyMat);
    hoodMesh.position.set(0, h * 0.54, -l * 0.25);
    hoodMesh.rotation.x = 0.055;
    root.add(hoodMesh);

    const powerDome = new THREE.Mesh(new THREE.BoxGeometry(w * 0.42, 0.06, l * 0.28), mainBodyMat);
    powerDome.position.set(0, h * 0.59, -l * 0.24);
    powerDome.rotation.x = 0.055;
    root.add(powerDome);

    [-l * 0.485, l * 0.485].forEach((bz, idx) => {
      const roundel = new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.06, 0.02, 16),
        new THREE.MeshBasicMaterial({ color: 0x0066b1 })
      );
      roundel.rotation.x = idx === 0 ? Math.PI / 2 - 0.2 : Math.PI / 2;
      roundel.position.set(0, idx === 0 ? 0.49 : 0.56, bz);
      root.add(roundel);
    });

    if (carIdx === 2) {
      const stripeMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.65, roughness: 0.22 });
      const hoodStripe = new THREE.Mesh(new THREE.BoxGeometry(w * 0.36, 0.07, l * 0.34), stripeMat);
      hoodStripe.position.set(0, h * 0.595, -l * 0.24);
      hoodStripe.rotation.x = 0.055;
      root.add(hoodStripe);

      const sideStripe = new THREE.Mesh(new THREE.BoxGeometry(w + 0.04, 0.16, l * 0.58), stripeMat);
      sideStripe.position.set(0, h * 0.35, 0.04);
      root.add(sideStripe);
    }

    // 3. Cabin, Carbon Roof & M-Side Mirrors
    const cabinMesh = new THREE.Mesh(new THREE.BoxGeometry(w * 0.82, h * 0.42, l * 0.46), glassMat);
    cabinMesh.position.set(0, h * 0.72, 0.06);
    cabinMesh.castShadow = true;
    root.add(cabinMesh);

    const carbonRoof = new THREE.Mesh(new THREE.BoxGeometry(w * 0.78, 0.055, l * 0.40), carbonMat);
    carbonRoof.position.set(0, h * 0.93, 0.06);
    root.add(carbonRoof);

    [-1, 1].forEach((side) => {
      const mirrorArm = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.05, 0.08), carbonMat);
      mirrorArm.position.set(side * (w * 0.46), h * 0.62, -l * 0.12);
      root.add(mirrorArm);

      const mirrorCap = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.1, 0.12), mainBodyMat);
      mirrorCap.position.set(side * (w * 0.52), h * 0.64, -l * 0.12);
      root.add(mirrorCap);
    });

    // 4. Twin Kidney Grille + M-Stripes
    const grilleHeight = spec.grilleStyle === 'vertical_g82' ? 0.38 : 0.22;
    const grilleWidth = spec.grilleStyle === 'vertical_g82' ? 0.24 : 0.32;
    const grilleOffsetY = spec.grilleStyle === 'vertical_g82' ? 0.33 : 0.37;

    [-1, 1].forEach((side) => {
      const frameMesh = new THREE.Mesh(new THREE.BoxGeometry(grilleWidth, grilleHeight, 0.08), accentMat);
      frameMesh.position.set(side * (grilleWidth * 0.58), grilleOffsetY, -l * 0.502);
      root.add(frameMesh);

      const innerMesh = new THREE.Mesh(new THREE.BoxGeometry(grilleWidth * 0.84, grilleHeight * 0.84, 0.09), carbonMat);
      innerMesh.position.set(side * (grilleWidth * 0.58), grilleOffsetY, -l * 0.505);
      root.add(innerMesh);
    });

    const mColors = [0x0066b1, 0x1d1d5b, 0xe41e26];
    mColors.forEach((col, i) => {
      const bar = new THREE.Mesh(
        new THREE.BoxGeometry(0.025, grilleHeight * 0.76, 0.1),
        new THREE.MeshBasicMaterial({ color: col })
      );
      bar.position.set(0.12 + i * 0.03, grilleOffsetY, -l * 0.508);
      root.add(bar);
    });

    // 5. Angel Eye Laser Headlights
    const eyeMat = new THREE.MeshBasicMaterial({ color: state.headlightsOn ? headlightColorHex : 0x334155 });
    eyeMats.push(eyeMat);

    [-1, 1].forEach((side) => {
      const lampHousing = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.13, 0.1), carbonMat);
      lampHousing.position.set(side * (w * 0.36), 0.44, -l * 0.496);
      root.add(lampHousing);

      [-0.075, 0.075].forEach((offset) => {
        const halo = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.08, 0.11), eyeMat);
        halo.position.set(side * (w * 0.36) + offset, 0.44, -l * 0.50);
        root.add(halo);
      });
    });

    // 6. Taillights, Reverse White Light, Blinkers & Quad Exhausts
    const tailLightMat = new THREE.MeshBasicMaterial({ color: 0x991b1b });
    brakeMats.push(tailLightMat);

    const reverseLightMat = new THREE.MeshBasicMaterial({ color: 0x222222 });
    revMats.push(reverseLightMat);

    const bLeftMat = new THREE.MeshBasicMaterial({ color: 0x332200 });
    const bRightMat = new THREE.MeshBasicMaterial({ color: 0x332200 });
    if (isPlayer1) {
      blinkerLeftMat = bLeftMat;
      blinkerRightMat = bRightMat;
    }

    [-1, 1].forEach((side) => {
      const tailBar = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.11, 0.08), tailLightMat);
      tailBar.position.set(side * (w * 0.35), 0.48, l * 0.495);
      root.add(tailBar);

      const revBar = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.08, 0.08), reverseLightMat);
      revBar.position.set(side * (w * 0.22), 0.48, l * 0.496);
      root.add(revBar);

      const blinkerBar = new THREE.Mesh(
        new THREE.BoxGeometry(0.14, 0.05, 0.09),
        side < 0 ? bLeftMat : bRightMat
      );
      blinkerBar.position.set(side * (w * 0.43), 0.55, l * 0.496);
      root.add(blinkerBar);
    });

    const pipePositions = [-0.46, -0.34, 0.34, 0.46];
    pipePositions.forEach((px) => {
      const pipeMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.048, 0.048, 0.24, 12), accentMat);
      pipeMesh.rotation.x = Math.PI / 2;
      pipeMesh.position.set(px, 0.19, l * 0.505);
      root.add(pipeMesh);

      // Dual-Layer Nitro Flame (Outer Blue + Inner Intense Cyan Core)
      const flameMesh = new THREE.Mesh(
        new THREE.ConeGeometry(0.065, 0.55, 10),
        new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.0 })
      );
      flameMesh.rotation.x = Math.PI / 2;
      flameMesh.position.set(px, 0.19, l * 0.505 + 0.28);
      root.add(flameMesh);
      flames.push(flameMesh);
    });

    // 7. Spoiler / Wing
    if (spoilerLvl === 1) {
      const lipMesh = new THREE.Mesh(new THREE.BoxGeometry(w * 0.88, 0.06, 0.18), carbonMat);
      lipMesh.position.set(0, h * 0.58, l * 0.46);
      lipMesh.rotation.x = 0.22;
      root.add(lipMesh);
    } else if (spoilerLvl === 2) {
      const wingBlade = new THREE.Mesh(new THREE.BoxGeometry(w * 1.0, 0.05, 0.30), carbonMat);
      wingBlade.position.set(0, h * 0.80, l * 0.45);
      wingBlade.rotation.x = 0.18;
      root.add(wingBlade);

      [-0.46, 0.46].forEach((sx) => {
        const strut = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.28, 0.18), carbonMat);
        strut.position.set(sx, h * 0.66, l * 0.44);
        root.add(strut);
      });
    }

    // 8. HIGH-DETAIL M-COMPETITION ALLOY WHEELS + BRAKE DISCS + M CALIPERS
    const wheelPositions = [
      { x: -w * 0.48, y: 0.35, z: -l * 0.31, front: true, isLeft: true },
      { x: w * 0.48, y: 0.35, z: -l * 0.31, front: true, isLeft: false },
      { x: -w * 0.48, y: 0.36, z: l * 0.31, front: false, isLeft: true },
      { x: w * 0.48, y: 0.36, z: l * 0.31, front: false, isLeft: false }
    ];

    const tireGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.28, 24);
    tireGeo.rotateZ(Math.PI / 2);
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x0e1116, roughness: 0.9, metalness: 0.08 });

    const innerRimGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.285, 20);
    innerRimGeo.rotateZ(Math.PI / 2);
    const innerRimMat = new THREE.MeshBasicMaterial({ color: 0x06080d });

    const rimLipGeo = new THREE.CylinderGeometry(0.245, 0.245, 0.29, 24);
    rimLipGeo.rotateZ(Math.PI / 2);

    const discGeo = new THREE.CylinderGeometry(0.21, 0.21, 0.045, 20);
    discGeo.rotateZ(Math.PI / 2);
    const discMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.95, roughness: 0.2 });

    const spokeGeo = new THREE.BoxGeometry(0.045, 0.22, 0.04);

    wheelPositions.forEach((wp) => {
      const wheelContainer = new THREE.Group();
      wheelContainer.position.set(wp.x, wp.y, wp.z);

      // Stationary brake caliper (fixed on wheelContainer, does NOT spin when rolling!)
      const caliper = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.13, 0.16), caliperMat);
      caliper.position.set(wp.isLeft ? 0.04 : -0.04, 0.09, -0.11);
      wheelContainer.add(caliper);

      // Dedicated spinGroup for clean forward/backward rotation around true axle (X-axis)
      const spinGroup = new THREE.Group();
      wheelContainer.add(spinGroup);

      // Tire Rubber
      const tire = new THREE.Mesh(tireGeo, tireMat);
      tire.castShadow = true;
      spinGroup.add(tire);

      // Dark Inner Cavity
      const innerRim = new THREE.Mesh(innerRimGeo, innerRimMat);
      spinGroup.add(innerRim);

      // Outer Alloy Rim Lip
      const rimLip = new THREE.Mesh(rimLipGeo, accentMat);
      spinGroup.add(rimLip);

      // Ventilated Metallic Brake Rotor Disc
      const brakeDisc = new THREE.Mesh(discGeo, discMat);
      brakeDisc.position.x = wp.isLeft ? 0.025 : -0.025;
      spinGroup.add(brakeDisc);

      // BMW Center Hub Cap
      const hubCap = new THREE.Mesh(
        new THREE.CylinderGeometry(0.065, 0.065, 0.30, 16),
        new THREE.MeshBasicMaterial({ color: 0x0284c7 })
      );
      hubCap.geometry.rotateZ(Math.PI / 2);
      spinGroup.add(hubCap);

      // 5-Spoke M-Alloy Wheel Geometry (Spins vividly with motion!)
      const spokeCount = 5;
      for (let s = 0; s < spokeCount; s++) {
        const ang = (s / spokeCount) * Math.PI * 2;
        const spokeMesh = new THREE.Mesh(spokeGeo, accentMat);
        const spokeX = wp.isLeft ? -0.125 : 0.125;
        spokeMesh.position.set(spokeX, Math.sin(ang) * 0.115, Math.cos(ang) * 0.115);
        spokeMesh.rotation.x = ang;
        spinGroup.add(spokeMesh);
      }

      root.add(wheelContainer);
      wheels.push({ group: wheelContainer, spinGroup, front: wp.front, isLeft: wp.isLeft });
    });

    // 9. Underglow Neon
    if (neonObj && neonObj.intensity > 0) {
      const glowPlane = new THREE.Mesh(
        new THREE.PlaneGeometry(w * 1.18, l * 1.06),
        new THREE.MeshBasicMaterial({
          color: neonObj.color,
          transparent: true,
          opacity: 0.42,
          side: THREE.DoubleSide
        })
      );
      glowPlane.rotation.x = -Math.PI / 2;
      glowPlane.position.y = 0.02;
      root.add(glowPlane);
    }

    if (isPlayer1) {
      const uLight = new THREE.PointLight(neonObj.color, neonObj.intensity, 7.0);
      uLight.position.set(0, 0.14, 0);
      root.add(uLight);

      headlightSpotL = new THREE.SpotLight(headlightColorHex, state.headlightsOn ? 2.5 : 0, 65, Math.PI / 5, 0.45, 1.2);
      headlightSpotL.position.set(-w * 0.35, 0.45, -l * 0.48);
      headlightSpotL.target.position.set(-w * 0.35, 0.1, -l * 0.48 - 28);
      root.add(headlightSpotL);
      root.add(headlightSpotL.target);

      headlightSpotR = new THREE.SpotLight(headlightColorHex, state.headlightsOn ? 2.5 : 0, 65, Math.PI / 5, 0.45, 1.2);
      headlightSpotR.position.set(w * 0.35, 0.45, -l * 0.48);
      headlightSpotR.target.position.set(w * 0.35, 0.1, -l * 0.48 - 28);
      root.add(headlightSpotR);
      root.add(headlightSpotR.target);

      strobeLightL = new THREE.PointLight(0x0066ff, 0, 14);
      strobeLightL.position.set(-0.4, h + 0.12, 0);
      root.add(strobeLightL);

      strobeLightR = new THREE.PointLight(0xff1e26, 0, 14);
      strobeLightR.position.set(0.4, h + 0.12, 0);
      root.add(strobeLightR);
    }

    return { root, wheels, eyeMats, brakeMats, revMats, flames };
  }

  function buildBmwModel(carIdx) {
    while (playerCarGroup.children.length > 0) {
      playerCarGroup.remove(playerCarGroup.children[0]);
    }
    const built = createDetailedBmwMesh(
      carIdx,
      PAINT_PALETTE[state.paintIndex],
      NEON_OPTIONS[state.neonIndex],
      HEADLIGHT_OPTIONS[state.headlightIndex].color,
      state.spoilerLevel,
      true
    );
    playerCarGroup.add(built.root);
    playerWheels = built.wheels;
    angelEyeMaterials = built.eyeMats;
    brakeLightMaterials = built.brakeMats;
    reverseLightMaterials = built.revMats;
    nitroFlameMeshes = built.flames;
  }

  function buildPlayer2BmwModel(carIdx) {
    while (player2CarGroup.children.length > 0) {
      player2CarGroup.remove(player2CarGroup.children[0]);
    }
    const p2Paint = PAINT_PALETTE[(carIdx + 2) % PAINT_PALETTE.length];
    const built = createDetailedBmwMesh(
      carIdx,
      p2Paint,
      NEON_OPTIONS[1],
      0xe0f2fe,
      2,
      false
    );
    player2CarGroup.add(built.root);
    player2Wheels = built.wheels;
    p2NitroFlameMeshes = built.flames;
  }

  // ==========================================
  // 7. WORLD ENVIRONMENTS (HIGHWAY, STADIUM BOTS, DRIFT CITY)
  // ==========================================
  const worldGroup = new THREE.Group();
  scene.add(worldGroup);

  let roadSegments = [];
  let trafficCars = [];
  let aiBotCars = [];
  let bonusRings = [];
  let stuntRamps = [];
  let driftParticles = [];
  let skidMarks = [];

  const HIGHWAY_LANES = [-6.0, -2.0, 2.0, 6.0];
  const STADIUM_RADIUS_X = 110;
  const STADIUM_RADIUS_Z = 70;

  function clearWorld() {
    while (worldGroup.children.length > 0) {
      worldGroup.remove(worldGroup.children[0]);
    }
    roadSegments = [];
    trafficCars = [];
    aiBotCars = [];
    bonusRings = [];
    stuntRamps = [];
    driftParticles = [];
    skidMarks = [];
  }

  function buildWorldForMode(mode) {
    clearWorld();

    const groundGeo = new THREE.PlaneGeometry(1100, 1100);
    const groundMat = new THREE.MeshStandardMaterial({
      color: mode === 'stadium' ? 0x0b2418 : (mode === 'drift' ? 0x0f172a : 0x090d16),
      roughness: 0.9,
      metalness: 0.1
    });
    const groundMesh = new THREE.Mesh(groundGeo, groundMat);
    groundMesh.rotation.x = -Math.PI / 2;
    groundMesh.position.y = -0.05;
    groundMesh.receiveShadow = true;
    worldGroup.add(groundMesh);

    if (mode === 'highway' || mode === 'timeattack') {
      const segGeo = new THREE.PlaneGeometry(18, 40);
      const segMat = new THREE.MeshStandardMaterial({ color: 0x161e2e, roughness: 0.62, metalness: 0.18 });

      for (let i = 0; i < 14; i++) {
        const segGroup = new THREE.Group();
        const asphalt = new THREE.Mesh(segGeo, segMat);
        asphalt.rotation.x = -Math.PI / 2;
        asphalt.receiveShadow = true;
        segGroup.add(asphalt);

        const centerLine = new THREE.Mesh(
          new THREE.PlaneGeometry(0.24, 40),
          new THREE.MeshBasicMaterial({ color: 0xfbbf24 })
        );
        centerLine.rotation.x = -Math.PI / 2;
        centerLine.position.y = 0.01;
        segGroup.add(centerLine);

        [-4.0, 4.0].forEach((lx) => {
          for (let d = -16; d <= 16; d += 8) {
            const dash = new THREE.Mesh(
              new THREE.PlaneGeometry(0.16, 3.6),
              new THREE.MeshBasicMaterial({ color: 0xe2e8f0 })
            );
            dash.rotation.x = -Math.PI / 2;
            dash.position.set(lx, 0.01, d);
            segGroup.add(dash);
          }
        });

        [-9.2, 9.2].forEach((gx, idx) => {
          const rail = new THREE.Mesh(
            new THREE.BoxGeometry(0.4, 0.78, 40),
            new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.7, roughness: 0.3 })
          );
          rail.position.set(gx, 0.39, 0);
          segGroup.add(rail);

          const neonStrip = new THREE.Mesh(
            new THREE.BoxGeometry(0.09, 0.14, 40),
            new THREE.MeshBasicMaterial({ color: idx === 0 ? 0x38bdf8 : 0xf43f5e })
          );
          neonStrip.position.set(gx + (idx === 0 ? 0.22 : -0.22), 0.56, 0);
          segGroup.add(neonStrip);
        });

        [-16, 16].forEach((bx, sideIdx) => {
          const bHeight = 16 + ((i * 9 + sideIdx * 7) % 34);
          const building = new THREE.Mesh(
            new THREE.BoxGeometry(9.5, bHeight, 14),
            new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.38, metalness: 0.55 })
          );
          building.position.set(bx * 1.35, bHeight / 2, 0);
          segGroup.add(building);

          const windowStrip = new THREE.Mesh(
            new THREE.BoxGeometry(0.22, bHeight * 0.82, 1.8),
            new THREE.MeshBasicMaterial({ color: sideIdx === 0 ? 0x38bdf8 : (i % 2 === 0 ? 0xa855f7 : 0xf43f5e) })
          );
          windowStrip.position.set(bx * 1.05, bHeight / 2, 0);
          segGroup.add(windowStrip);
        });

        if (i % 3 === 0) {
          const gantry = new THREE.Mesh(
            new THREE.BoxGeometry(19.5, 0.7, 0.6),
            new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8 })
          );
          gantry.position.set(0, 6.2, 0);
          segGroup.add(gantry);

          const signBoard = new THREE.Mesh(
            new THREE.BoxGeometry(7.5, 1.4, 0.2),
            new THREE.MeshBasicMaterial({ color: 0x0284c7 })
          );
          signBoard.position.set(0, 6.2, 0.32);
          segGroup.add(signBoard);
        }

        segGroup.position.z = -i * 40 + 40;
        worldGroup.add(segGroup);
        roadSegments.push(segGroup);
      }

      const densityConfig = TRAFFIC_COUNTS[state.trafficDensity] || TRAFFIC_COUNTS.medium;
      const numTraffic = densityConfig.count;
      const trafficColors = [0xef4444, 0x3b82f6, 0x10b981, 0xf59e0b, 0xe2e8f0, 0x8b5cf6, 0x06b6d4, 0xf97316];

      for (let t = 0; t < numTraffic; t++) {
        const tCar = createTrafficCarMesh(trafficColors[t % trafficColors.length], t % 5 === 0);
        resetTrafficCar(tCar, -40 - t * (360 / numTraffic));
        worldGroup.add(tCar.mesh);
        trafficCars.push(tCar);
      }

      for (let c = 0; c < 4; c++) {
        const gate = createCheckpointGate(mode === 'timeattack' ? 0x10b981 : 0xfbbf24);
        gate.position.set((c % 2 === 0 ? -2.0 : 2.0), 0, -90 - c * 95);
        worldGroup.add(gate);
        bonusRings.push(gate);
      }
    } else if (mode === 'stadium') {
      const trackPoints = 96;
      const trackWidth = 18;
      for (let i = 0; i < trackPoints; i++) {
        const a1 = (i / trackPoints) * Math.PI * 2;
        const a2 = ((i + 1) / trackPoints) * Math.PI * 2;
        const x1 = Math.cos(a1) * STADIUM_RADIUS_X;
        const z1 = Math.sin(a1) * STADIUM_RADIUS_Z;
        const x2 = Math.cos(a2) * STADIUM_RADIUS_X;
        const z2 = Math.sin(a2) * STADIUM_RADIUS_Z;

        const segLen = Math.hypot(x2 - x1, z2 - z1) + 0.6;
        const segTile = new THREE.Mesh(
          new THREE.PlaneGeometry(trackWidth, segLen),
          new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.65 })
        );
        segTile.rotation.x = -Math.PI / 2;
        const angle = Math.atan2(x2 - x1, z2 - z1);
        segTile.rotation.z = -angle;
        segTile.position.set((x1 + x2) * 0.5, 0.02, (z1 + z2) * 0.5);
        segTile.receiveShadow = true;
        worldGroup.add(segTile);

        const curbColor = i % 2 === 0 ? 0xef4444 : 0xf8fafc;
        const curb = new THREE.Mesh(
          new THREE.BoxGeometry(0.9, 0.12, segLen),
          new THREE.MeshBasicMaterial({ color: curbColor })
        );
        curb.position.set(
          Math.cos(a1) * (STADIUM_RADIUS_X - trackWidth * 0.5),
          0.06,
          Math.sin(a1) * (STADIUM_RADIUS_Z - trackWidth * 0.5)
        );
        curb.rotation.y = angle;
        worldGroup.add(curb);
      }

      const finishBanner = new THREE.Group();
      const arch = new THREE.Mesh(
        new THREE.TorusGeometry(9.5, 0.45, 12, 32, Math.PI),
        new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
      );
      finishBanner.add(arch);
      const checkerLine = new THREE.Mesh(
        new THREE.PlaneGeometry(18, 2.5),
        new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide })
      );
      checkerLine.rotation.x = -Math.PI / 2;
      checkerLine.position.y = 0.04;
      finishBanner.add(checkerLine);
      finishBanner.position.set(STADIUM_RADIUS_X, 0, 0);
      worldGroup.add(finishBanner);

      for (let s = 0; s < 20; s++) {
        const ang = (s / 20) * Math.PI * 2;
        const sx = Math.cos(ang) * (STADIUM_RADIUS_X + 24);
        const sz = Math.sin(ang) * (STADIUM_RADIUS_Z + 24);

        const stand = new THREE.Mesh(
          new THREE.BoxGeometry(22, 12, 8),
          new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.5, roughness: 0.4 })
        );
        stand.position.set(sx, 6, sz);
        stand.lookAt(0, 2, 0);
        worldGroup.add(stand);

        const crowdGlow = new THREE.Mesh(
          new THREE.BoxGeometry(20, 1.2, 0.4),
          new THREE.MeshBasicMaterial({ color: s % 2 === 0 ? 0x38bdf8 : 0xf43f5e })
        );
        crowdGlow.position.set(sx * 0.96, 8.5, sz * 0.96);
        crowdGlow.lookAt(0, 2, 0);
        worldGroup.add(crowdGlow);
      }

      const botCount = state.trafficDensity === 'low' ? 3 : (state.trafficDensity === 'high' ? 8 : 5);
      for (let b = 0; b < botCount; b++) {
        const botModelIdx = (b + 1) % BMW_MODELS.length;
        const botPaint = PAINT_PALETTE[(b * 2 + 1) % PAINT_PALETTE.length];
        const botNeon = NEON_OPTIONS[b % 5];
        const botBuilt = createDetailedBmwMesh(botModelIdx, botPaint, botNeon, 0xffdd44, 2, false);

        const startAngle = 0.08 + b * 0.11;
        const laneOffset = (b % 2 === 0 ? -3.2 : 3.2);
        const bx = Math.cos(startAngle) * (STADIUM_RADIUS_X + laneOffset);
        const bz = Math.sin(startAngle) * (STADIUM_RADIUS_Z + laneOffset);
        botBuilt.root.position.set(bx, 0, bz);

        worldGroup.add(botBuilt.root);
        aiBotCars.push({
          mesh: botBuilt.root,
          wheels: botBuilt.wheels,
          angle: startAngle,
          laneOffset,
          angularSpeed: 0.34 + (b * 0.022),
          laps: 1
        });
      }
    } else {
      // 360° Drift City Open Arena
      const gridHelper = new THREE.GridHelper(420, 84, 0x38bdf8, 0x1e293b);
      gridHelper.position.y = 0.01;
      worldGroup.add(gridHelper);

      [35, 72].forEach((rad) => {
        const driftTrackRing = new THREE.Mesh(
          new THREE.RingGeometry(rad - 7, rad + 7, 64),
          new THREE.MeshBasicMaterial({ color: 0x1e293b, side: THREE.DoubleSide })
        );
        driftTrackRing.rotation.x = -Math.PI / 2;
        driftTrackRing.position.y = 0.02;
        worldGroup.add(driftTrackRing);
      });

      const rampPositions = [
        { x: 0, z: -45, rot: 0 },
        { x: 45, z: 0, rot: -Math.PI / 2 },
        { x: 0, z: 45, rot: Math.PI },
        { x: -45, z: 0, rot: Math.PI / 2 },
        { x: -32, z: -32, rot: -Math.PI / 4 },
        { x: 32, z: -32, rot: Math.PI / 4 }
      ];
      rampPositions.forEach((rp) => {
        const rampGroup = new THREE.Group();
        const rampMesh = new THREE.Mesh(
          new THREE.BoxGeometry(7.5, 1.9, 12.5),
          new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.5, roughness: 0.4 })
        );
        rampMesh.rotation.x = 0.22;
        rampMesh.position.y = 0.42;
        rampGroup.add(rampMesh);

        const neonEdge = new THREE.Mesh(
          new THREE.BoxGeometry(7.7, 0.16, 12.6),
          new THREE.MeshBasicMaterial({ color: 0xf43f5e })
        );
        neonEdge.rotation.x = 0.22;
        neonEdge.position.y = 0.92;
        rampGroup.add(neonEdge);

        rampGroup.position.set(rp.x, 0, rp.z);
        rampGroup.rotation.y = rp.rot;
        worldGroup.add(rampGroup);
        stuntRamps.push({ x: rp.x, z: rp.z, radius: 6.4 });
      });

      for (let r = 0; r < 14; r++) {
        const angle = (r / 14) * Math.PI * 2;
        const dist = r % 2 === 0 ? 35 : 72;
        const ring = createCheckpointGate(0xfbbf24);
        ring.position.set(Math.cos(angle) * dist, 0, Math.sin(angle) * dist);
        ring.rotation.y = -angle;
        worldGroup.add(ring);
        bonusRings.push(ring);
      }

      for (let p = 0; p < 18; p++) {
        const angle = (p / 18) * Math.PI * 2;
        const h = 16 + (p % 4) * 8;
        const tower = new THREE.Mesh(
          new THREE.BoxGeometry(10, h, 10),
          new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.7, roughness: 0.2 })
        );
        tower.position.set(Math.cos(angle) * 115, h / 2, Math.sin(angle) * 115);
        worldGroup.add(tower);
      }

      const roamCount = state.trafficDensity === 'low' ? 2 : (state.trafficDensity === 'high' ? 8 : 4);
      for (let b = 0; b < roamCount; b++) {
        const botPaint = PAINT_PALETTE[(b + 3) % PAINT_PALETTE.length];
        const botBuilt = createDetailedBmwMesh(b % 4, botPaint, NEON_OPTIONS[b % 5], 0x38bdf8, 1, false);
        const ang = (b / roamCount) * Math.PI * 2;
        const rad = b % 2 === 0 ? 35 : 72;
        botBuilt.root.position.set(Math.cos(ang) * rad, 0, Math.sin(ang) * rad);
        worldGroup.add(botBuilt.root);
        aiBotCars.push({
          mesh: botBuilt.root,
          wheels: botBuilt.wheels,
          angle: ang,
          laneOffset: rad,
          angularSpeed: 0.42,
          isArenaBot: true
        });
      }
    }
  }

  function createTrafficCarMesh(colorHex, isSuv) {
    const group = new THREE.Group();
    const heightMult = isSuv ? 1.28 : 1.0;
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(1.96, 0.72 * heightMult, 4.45),
      new THREE.MeshStandardMaterial({ color: colorHex, metalness: 0.65, roughness: 0.25 })
    );
    body.position.y = 0.52 * heightMult;
    body.castShadow = true;
    group.add(body);

    const top = new THREE.Mesh(
      new THREE.BoxGeometry(1.68, 0.52 * heightMult, isSuv ? 2.8 : 2.2),
      new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.15, metalness: 0.8 })
    );
    top.position.set(0, 1.02 * heightMult, 0.1);
    group.add(top);

    const tail = new THREE.Mesh(
      new THREE.BoxGeometry(1.75, 0.15, 0.1),
      new THREE.MeshBasicMaterial({ color: 0xff1e26 })
    );
    tail.position.set(0, 0.56, 2.22);
    group.add(tail);

    const head = new THREE.Mesh(
      new THREE.BoxGeometry(1.75, 0.15, 0.1),
      new THREE.MeshBasicMaterial({ color: 0xfef08a })
    );
    head.position.set(0, 0.56, -2.22);
    group.add(head);

    return {
      mesh: group,
      laneIndex: 2,
      speed: 22,
      oncoming: false,
      passed: false
    };
  }

  function resetTrafficCar(tCar, zPos) {
    const laneIdx = Math.floor(Math.random() * HIGHWAY_LANES.length);
    tCar.laneIndex = laneIdx;
    const laneX = HIGHWAY_LANES[laneIdx];

    let oncoming = false;
    if (state.trafficDirection === 'oneway') {
      oncoming = false;
    } else if (state.trafficDirection === 'oncoming') {
      oncoming = true;
    } else {
      oncoming = laneIdx < 2;
    }

    tCar.oncoming = oncoming;
    tCar.speed = oncoming ? -(20 + Math.random() * 14) : (18 + Math.random() * 16);
    tCar.mesh.position.set(laneX, 0, zPos);
    tCar.mesh.rotation.y = oncoming ? Math.PI : 0;
    tCar.passed = false;
  }

  function createCheckpointGate(colorHex) {
    const gateGroup = new THREE.Group();
    const arch = new THREE.Mesh(
      new THREE.TorusGeometry(2.8, 0.18, 12, 32, Math.PI),
      new THREE.MeshBasicMaterial({ color: colorHex })
    );
    arch.position.y = 0.2;
    gateGroup.add(arch);
    return gateGroup;
  }

  function spawnDriftEffects(carGroup, yawAngle) {
    if (driftParticles.length < 50) {
      [-0.75, 0.75].forEach((sideX) => {
        const pGeo = new THREE.BoxGeometry(0.42, 0.28, 0.42);
        const pMat = new THREE.MeshBasicMaterial({ color: 0xe2e8f0, transparent: true, opacity: 0.55 });
        const mesh = new THREE.Mesh(pGeo, pMat);
        const wx = carGroup.position.x + sideX * Math.cos(yawAngle) + 1.5 * Math.sin(yawAngle);
        const wz = carGroup.position.z - sideX * Math.sin(yawAngle) + 1.5 * Math.cos(yawAngle);
        mesh.position.set(wx + (Math.random() - 0.5) * 0.3, 0.14, wz);
        worldGroup.add(mesh);
        driftParticles.push({ mesh, life: 0.55 });
      });
    }

    if (skidMarks.length < 90) {
      [-0.75, 0.75].forEach((sideX) => {
        const mark = new THREE.Mesh(
          new THREE.PlaneGeometry(0.28, 0.9),
          new THREE.MeshBasicMaterial({ color: 0x05070b, transparent: true, opacity: 0.65, side: THREE.DoubleSide })
        );
        mark.rotation.x = -Math.PI / 2;
        mark.rotation.z = yawAngle;
        const wx = carGroup.position.x + sideX * Math.cos(yawAngle) + 1.4 * Math.sin(yawAngle);
        const wz = carGroup.position.z - sideX * Math.sin(yawAngle) + 1.4 * Math.cos(yawAngle);
        mark.position.set(wx, 0.025, wz);
        worldGroup.add(mark);
        skidMarks.push({ mesh: mark, life: 3.5 });
      });
    }
  }

  // ==========================================
  // 8. INPUT HANDLING (1P/2P + BACKTICK ` PAUSE)
  // ==========================================
  const keysP1 = { up: false, down: false, left: false, right: false, drift: false, nitro: false };
  const keysP2 = { up: false, down: false, left: false, right: false, drift: false, nitro: false };

  window.addEventListener('keydown', (e) => {
    const code = e.code;

    if (code === 'Backquote' || e.key === '`' || e.key === '~' || code === 'Escape') {
      if (!state.inGarage && !state.sessionEnded) {
        e.preventDefault();
        togglePauseMenu();
        return;
      }
    }

    if (state.isPaused) return;

    if (state.playerCount === 1) {
      if (code === 'KeyW' || code === 'ArrowUp') keysP1.up = true;
      if (code === 'KeyS' || code === 'ArrowDown') keysP1.down = true;
      if (code === 'KeyA' || code === 'ArrowLeft') keysP1.left = true;
      if (code === 'KeyD' || code === 'ArrowRight') keysP1.right = true;
      if (code === 'Space') {
        keysP1.drift = true;
        if (!state.inGarage) e.preventDefault();
      }
      if (code === 'ShiftLeft' || code === 'ShiftRight') keysP1.nitro = true;
    } else {
      if (code === 'KeyW') keysP1.up = true;
      if (code === 'KeyS') keysP1.down = true;
      if (code === 'KeyA') keysP1.left = true;
      if (code === 'KeyD') keysP1.right = true;
      if (code === 'Space') {
        keysP1.drift = true;
        if (!state.inGarage) e.preventDefault();
      }
      if (code === 'ShiftLeft') keysP1.nitro = true;

      if (code === 'ArrowUp') {
        keysP2.up = true;
        if (!state.inGarage) e.preventDefault();
      }
      if (code === 'ArrowDown') {
        keysP2.down = true;
        if (!state.inGarage) e.preventDefault();
      }
      if (code === 'ArrowLeft') {
        keysP2.left = true;
        if (!state.inGarage) e.preventDefault();
      }
      if (code === 'ArrowRight') {
        keysP2.right = true;
        if (!state.inGarage) e.preventDefault();
      }
      if (code === 'Slash' || code === 'Numpad0' || code === 'ControlRight') {
        keysP2.drift = true;
        if (!state.inGarage) e.preventDefault();
      }
      if (code === 'ShiftRight' || code === 'Enter' || code === 'NumpadEnter') {
        keysP2.nitro = true;
        if (!state.inGarage) e.preventDefault();
      }
    }

    if (code === 'KeyC') cycleCamera();
    if (code === 'KeyV') cycleWeather();
    if (code === 'KeyH') toggleHeadlights();
    if (code === 'KeyM') toggleMStrobe();
    if (code === 'KeyF') toggleSlowMo();
    if (code === 'KeyR' && !state.inGarage) resetPlayerCarPosition();
  });

  window.addEventListener('keyup', (e) => {
    const code = e.code;
    if (state.playerCount === 1) {
      if (code === 'KeyW' || code === 'ArrowUp') keysP1.up = false;
      if (code === 'KeyS' || code === 'ArrowDown') keysP1.down = false;
      if (code === 'KeyA' || code === 'ArrowLeft') keysP1.left = false;
      if (code === 'KeyD' || code === 'ArrowRight') keysP1.right = false;
      if (code === 'Space') keysP1.drift = false;
      if (code === 'ShiftLeft' || code === 'ShiftRight') keysP1.nitro = false;
    } else {
      if (code === 'KeyW') keysP1.up = false;
      if (code === 'KeyS') keysP1.down = false;
      if (code === 'KeyA') keysP1.left = false;
      if (code === 'KeyD') keysP1.right = false;
      if (code === 'Space') keysP1.drift = false;
      if (code === 'ShiftLeft') keysP1.nitro = false;

      if (code === 'ArrowUp') keysP2.up = false;
      if (code === 'ArrowDown') keysP2.down = false;
      if (code === 'ArrowLeft') keysP2.left = false;
      if (code === 'ArrowRight') keysP2.right = false;
      if (code === 'Slash' || code === 'Numpad0' || code === 'ControlRight') keysP2.drift = false;
      if (code === 'ShiftRight' || code === 'Enter' || code === 'NumpadEnter') keysP2.nitro = false;
    }
  });

  function bindTouchButton(btnId, keyProp) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    const start = (ev) => {
      ev.preventDefault();
      sound.init();
      keysP1[keyProp] = true;
      btn.classList.add('active-touch');
    };
    const end = (ev) => {
      ev.preventDefault();
      keysP1[keyProp] = false;
      btn.classList.remove('active-touch');
    };
    btn.addEventListener('mousedown', start);
    btn.addEventListener('mouseup', end);
    btn.addEventListener('mouseleave', end);
    btn.addEventListener('touchstart', start, { passive: false });
    btn.addEventListener('touchend', end, { passive: false });
    btn.addEventListener('touchcancel', end, { passive: false });
  }

  bindTouchButton('touchLeft', 'left');
  bindTouchButton('touchRight', 'right');
  bindTouchButton('touchGas', 'up');
  bindTouchButton('touchBrake', 'down');
  bindTouchButton('touchDrift', 'drift');
  bindTouchButton('touchNitro', 'nitro');

  // ==========================================
  // 9. UI BINDINGS, PAUSE MODAL & GARAGE LOGIC
  // ==========================================
  const coinBalanceText = document.getElementById('coinBalanceText');
  const bestScoreText = document.getElementById('bestScoreText');
  const selectedCarTitle = document.getElementById('selectedCarTitle');
  const carBadgeTag = document.getElementById('carBadgeTag');
  const selectedCarEngine = document.getElementById('selectedCarEngine');
  const selectedCarDesc = document.getElementById('selectedCarDesc');

  const statTopSpeedVal = document.getElementById('statTopSpeedVal');
  const statTopSpeedBar = document.getElementById('statTopSpeedBar');
  const statAccelVal = document.getElementById('statAccelVal');
  const statAccelBar = document.getElementById('statAccelBar');
  const statHandlingVal = document.getElementById('statHandlingVal');
  const statHandlingBar = document.getElementById('statHandlingBar');
  const statNitroVal = document.getElementById('statNitroVal');
  const statNitroBar = document.getElementById('statNitroBar');

  const upgradeStageLabel = document.getElementById('upgradeStageLabel');
  const upgradeCostText = document.getElementById('upgradeCostText');
  const spoilerStatusText = document.getElementById('spoilerStatusText');
  const paintNameLabel = document.getElementById('paintNameLabel');
  const paintSwatchContainer = document.getElementById('paintSwatchContainer');
  const pauseSettingsModal = document.getElementById('pauseSettingsModal');

  function renderPaintSwatches() {
    paintSwatchContainer.innerHTML = '';
    PAINT_PALETTE.forEach((p, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'w-6 h-6 rounded-full border border-white/40 transition ' + (idx === state.paintIndex ? 'swatch-active' : '');
      btn.style.backgroundColor = p.css;
      btn.title = p.name;
      btn.addEventListener('click', () => {
        sound.playEffect('click');
        state.paintIndex = idx;
        paintNameLabel.textContent = p.name;
        renderPaintSwatches();
        buildBmwModel(state.selectedCarIndex);
      });
      paintSwatchContainer.appendChild(btn);
    });
  }

  function updateGarageUI() {
    const car = BMW_MODELS[state.selectedCarIndex];
    const stage = state.carUpgrades[state.selectedCarIndex] || 1;
    const bonusSpeed = (stage - 1) * 14;
    const topSpeed = car.baseTopSpeed + bonusSpeed;
    const accel = Math.max(1.9, (car.baseAccel - (stage - 1) * 0.12)).toFixed(1);
    const handling = Math.min(100, car.baseHandling + (stage - 1) * 2);
    const nitroCap = Math.min(150, car.baseNitro + (stage - 1) * 10);

    coinBalanceText.textContent = Math.floor(state.coins).toLocaleString('en-US');
    bestScoreText.textContent = Math.floor(state.bestScore).toLocaleString('en-US');

    selectedCarTitle.textContent = car.name;
    carBadgeTag.textContent = car.badge;
    selectedCarEngine.textContent = car.engine;
    selectedCarDesc.textContent = car.desc;

    statTopSpeedVal.textContent = topSpeed + ' km/s';
    statTopSpeedBar.style.width = Math.min(100, (topSpeed / 420) * 100) + '%';

    statAccelVal.textContent = accel + ' s';
    statAccelBar.style.width = Math.min(100, ((4.2 - parseFloat(accel)) / 2.3) * 100) + '%';

    statHandlingVal.textContent = handling + '%';
    statHandlingBar.style.width = handling + '%';

    statNitroVal.textContent = nitroCap + '%';
    statNitroBar.style.width = Math.min(100, (nitroCap / 150) * 100) + '%';

    upgradeStageLabel.textContent = 'STAGE ' + stage + (stage >= 5 ? ' (MAX)' : '');
    const cost = stage * 2000;
    upgradeCostText.textContent = stage >= 5 ? 'MAX' : '(' + cost + ' CR)';

    const spoilerNames = ['Yo‘q', 'Sport Lip', 'M-GT Wing'];
    spoilerStatusText.textContent = spoilerNames[state.spoilerLevel];
    paintNameLabel.textContent = PAINT_PALETTE[state.paintIndex].name;

    document.querySelectorAll('.car-select-btn').forEach((btn) => {
      const idx = parseInt(btn.getAttribute('data-car'), 10);
      btn.classList.toggle('car-card-active', idx === state.selectedCarIndex);
    });

    document.querySelectorAll('.mode-select-btn').forEach((btn) => {
      const m = btn.getAttribute('data-mode');
      btn.classList.toggle('mode-card-active', m === state.selectedMode);
    });

    document.querySelectorAll('.player-count-btn').forEach((btn) => {
      const p = parseInt(btn.getAttribute('data-players'), 10);
      btn.classList.toggle('option-pill-active', p === state.playerCount);
    });

    const p2Box = document.getElementById('p2CarSelectBox');
    const pHint = document.getElementById('playerModeHint');
    if (state.playerCount === 2) {
      p2Box.classList.remove('hidden');
      pHint.textContent = '2 Kishi (Split-Screen)';
      document.getElementById('p2CarNameLabel').textContent = BMW_MODELS[state.p2CarIndex].name;
    } else {
      p2Box.classList.add('hidden');
      pHint.textContent = '1 Kishi (Yakka)';
    }

    document.querySelectorAll('.traffic-density-btn').forEach((btn) => {
      const t = btn.getAttribute('data-traffic');
      btn.classList.toggle('traffic-pill-active', t === state.trafficDensity);
    });
    document.getElementById('trafficCountLabel').textContent = TRAFFIC_COUNTS[state.trafficDensity].label;

    document.querySelectorAll('.traffic-dir-btn').forEach((btn) => {
      const dir = btn.getAttribute('data-dir');
      btn.classList.toggle('dir-pill-active', dir === state.trafficDirection);
    });
    document.getElementById('trafficDirLabel').textContent = TRAFFIC_DIRECTIONS[state.trafficDirection].label;
  }

  document.querySelectorAll('.car-select-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      sound.playEffect('click');
      const idx = parseInt(btn.getAttribute('data-car'), 10);
      state.selectedCarIndex = idx;
      state.paintIndex = BMW_MODELS[idx].defaultPaintIndex;
      state.spoilerLevel = BMW_MODELS[idx].spoilerDefault;
      renderPaintSwatches();
      updateGarageUI();
      buildBmwModel(idx);
    });
  });

  document.querySelectorAll('.player-count-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      sound.playEffect('click');
      state.playerCount = parseInt(btn.getAttribute('data-players'), 10);
      updateGarageUI();
    });
  });

  document.getElementById('btnCycleP2Car').addEventListener('click', () => {
    sound.playEffect('click');
    state.p2CarIndex = (state.p2CarIndex + 1) % BMW_MODELS.length;
    updateGarageUI();
  });

  document.querySelectorAll('.traffic-density-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      sound.playEffect('click');
      state.trafficDensity = btn.getAttribute('data-traffic');
      updateGarageUI();
    });
  });

  document.querySelectorAll('.traffic-dir-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      sound.playEffect('click');
      state.trafficDirection = btn.getAttribute('data-dir');
      updateGarageUI();
    });
  });

  document.querySelectorAll('.mode-select-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      sound.playEffect('click');
      state.selectedMode = btn.getAttribute('data-mode');
      updateGarageUI();
    });
  });

  document.getElementById('btnUpgradeCar').addEventListener('click', () => {
    const idx = state.selectedCarIndex;
    const stage = state.carUpgrades[idx];
    if (stage >= 5) {
      showHudBanner('MAKSIMAL DARAJA!', 'Ushbu BMW Stage 5 darajasiga yetgan');
      return;
    }
    const cost = stage * 2000;
    if (state.coins >= cost) {
      state.coins -= cost;
      state.carUpgrades[idx] = stage + 1;
      saveProgress();
      sound.playEffect('bonus');
      updateGarageUI();
    } else {
      sound.playEffect('crash');
    }
  });

  document.getElementById('btnToggleSpoiler').addEventListener('click', () => {
    sound.playEffect('click');
    state.spoilerLevel = (state.spoilerLevel + 1) % 3;
    updateGarageUI();
    buildBmwModel(state.selectedCarIndex);
  });

  document.getElementById('btnCycleNeon').addEventListener('click', (e) => {
    sound.playEffect('click');
    state.neonIndex = (state.neonIndex + 1) % NEON_OPTIONS.length;
    e.currentTarget.textContent = NEON_OPTIONS[state.neonIndex].name;
    buildBmwModel(state.selectedCarIndex);
  });

  document.getElementById('btnCycleHeadlight').addEventListener('click', (e) => {
    sound.playEffect('click');
    state.headlightIndex = (state.headlightIndex + 1) % HEADLIGHT_OPTIONS.length;
    e.currentTarget.textContent = HEADLIGHT_OPTIONS[state.headlightIndex].name;
    buildBmwModel(state.selectedCarIndex);
  });

  function cycleWeather() {
    sound.playEffect('click');
    state.weatherIndex = (state.weatherIndex + 1) % WEATHER_PRESETS.length;
    const w = WEATHER_PRESETS[state.weatherIndex];
    scene.background.setHex(w.sky);
    scene.fog.color.setHex(w.fog);
    ambientLight.color.setHex(w.ambient);
    sunLight.color.setHex(w.dirLight);
    sunLight.intensity = w.dirIntensity;
    document.getElementById('weatherIcon').innerHTML = SVG_ICONS[w.iconKey];
    document.getElementById('weatherLabel').textContent = w.name;
    const pauseWeatherBtn = document.getElementById('settingWeatherBtn');
    if (pauseWeatherBtn) pauseWeatherBtn.textContent = 'Ob-havo: ' + w.name;
  }

  function cycleCamera() {
    sound.playEffect('click');
    state.cameraIndex = (state.cameraIndex + 1) % 3;
    const names = ['Orqa', 'Kapot', 'Kinematik'];
    document.getElementById('cameraLabel').textContent = names[state.cameraIndex];
    const pauseCamBtn = document.getElementById('settingCameraBtn');
    if (pauseCamBtn) pauseCamBtn.textContent = 'Kamera: ' + names[state.cameraIndex];
  }

  function toggleHeadlights() {
    sound.playEffect('click');
    state.headlightsOn = !state.headlightsOn;
    const col = HEADLIGHT_OPTIONS[state.headlightIndex].color;
    angelEyeMaterials.forEach((m) => m.color.setHex(state.headlightsOn ? col : 0x334155));
    if (headlightSpotL) headlightSpotL.intensity = state.headlightsOn ? 2.5 : 0;
    if (headlightSpotR) headlightSpotR.intensity = state.headlightsOn ? 2.5 : 0;
  }

  function toggleMStrobe() {
    sound.playEffect('click');
    state.mStrobeOn = !state.mStrobeOn;
    if (!state.mStrobeOn && strobeLightL && strobeLightR) {
      strobeLightL.intensity = 0;
      strobeLightR.intensity = 0;
    }
  }

  function toggleSlowMo() {
    sound.playEffect('click');
    state.slowMoActive = !state.slowMoActive;
    document.getElementById('hudStatusEvent').textContent = state.slowMoActive ? 'SLOW-MO ON' : 'M-MODE ON';
  }

  function togglePauseMenu() {
    if (state.inGarage || state.sessionEnded) return;
    state.isPaused = !state.isPaused;
    if (state.isPaused) {
      sound.silenceImmediately();
      pauseSettingsModal.classList.remove('hidden');
      syncPauseSettingsUI();
    } else {
      pauseSettingsModal.classList.add('hidden');
    }
  }

  function syncPauseSettingsUI() {
    const names = ['Orqa', 'Kapot', 'Kinematik'];
    document.getElementById('settingCameraBtn').textContent = 'Kamera: ' + names[state.cameraIndex];
    document.getElementById('settingWeatherBtn').textContent = 'Ob-havo: ' + WEATHER_PRESETS[state.weatherIndex].name;
    document.getElementById('settingTrafficDirBtn').textContent = TRAFFIC_DIRECTIONS[state.trafficDirection].label;
    document.getElementById('settingSoundBtn').textContent = state.soundEnabled ? 'Ovoz: Yoqilgan' : 'Ovoz: O‘chirilgan';
  }

  document.getElementById('btnWeatherToggle').addEventListener('click', cycleWeather);
  document.getElementById('btnCameraToggle').addEventListener('click', cycleCamera);
  document.getElementById('btnSoundToggle').addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    if (!state.soundEnabled) sound.silenceImmediately();
    document.getElementById('soundIcon').innerHTML = state.soundEnabled ? SVG_ICONS.volumeOn : SVG_ICONS.volumeOff;
    syncPauseSettingsUI();
  });

  document.getElementById('btnHudLights').addEventListener('click', toggleHeadlights);
  document.getElementById('btnHudStrobe').addEventListener('click', toggleMStrobe);
  document.getElementById('btnHudSlowMo').addEventListener('click', toggleSlowMo);
  document.getElementById('btnHudResetCar').addEventListener('click', resetPlayerCarPosition);
  document.getElementById('btnHudPause').addEventListener('click', togglePauseMenu);

  document.getElementById('btnResumeGame').addEventListener('click', togglePauseMenu);
  document.getElementById('btnPauseRestart').addEventListener('click', () => {
    state.isPaused = false;
    pauseSettingsModal.classList.add('hidden');
    startDrivingSession();
  });
  document.getElementById('btnPauseToGarage').addEventListener('click', () => {
    state.isPaused = false;
    pauseSettingsModal.classList.add('hidden');
    returnToGarage();
  });
  document.getElementById('settingSoundBtn').addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    if (!state.soundEnabled) sound.silenceImmediately();
    document.getElementById('soundIcon').innerHTML = state.soundEnabled ? SVG_ICONS.volumeOn : SVG_ICONS.volumeOff;
    syncPauseSettingsUI();
  });
  document.getElementById('settingWeatherBtn').addEventListener('click', cycleWeather);
  document.getElementById('settingCameraBtn').addEventListener('click', cycleCamera);
  document.getElementById('settingTrafficDirBtn').addEventListener('click', () => {
    const dirs = ['oneway', 'twoway', 'oncoming'];
    const nextIdx = (dirs.indexOf(state.trafficDirection) + 1) % dirs.length;
    state.trafficDirection = dirs[nextIdx];
    trafficCars.forEach((tc, i) => resetTrafficCar(tc, tc.mesh.position.z - i * 5));
    updateGarageUI();
    syncPauseSettingsUI();
  });
  document.getElementById('settingVolumeSlider').addEventListener('input', (e) => {
    state.masterVolume = parseFloat(e.target.value);
    document.getElementById('settingVolumeVal').textContent = Math.round(state.masterVolume * 100) + '%';
  });
  document.getElementById('settingSteerSmoothSlider').addEventListener('input', (e) => {
    state.steerSensitivity = parseFloat(e.target.value);
    document.getElementById('settingSteerVal').textContent = Math.round(state.steerSensitivity * 100) + '%';
  });

  const helpModal = document.getElementById('helpModal');
  document.getElementById('btnHelpToggle').addEventListener('click', () => helpModal.classList.remove('hidden'));
  document.getElementById('btnCloseHelp').addEventListener('click', () => helpModal.classList.add('hidden'));
  document.getElementById('btnConfirmHelp').addEventListener('click', () => helpModal.classList.add('hidden'));

  // ==========================================
  // 10. GAMEPLAY SESSION LIFECYCLE
  // ==========================================
  const garageMenuView = document.getElementById('garageMenuView');
  const inGameHudView = document.getElementById('inGameHudView');
  const btnGarageReturn = document.getElementById('btnGarageReturn');
  const sessionModal = document.getElementById('sessionModal');
  const splitScreenDivider = document.getElementById('splitScreenDivider');
  const p2ClusterBox = document.getElementById('p2ClusterBox');
  const hudRacePositionBadge = document.getElementById('hudRacePositionBadge');

  function resetPlayerCarPosition() {
    if (state.selectedMode === 'stadium') {
      state.carX = STADIUM_RADIUS_X - 3.0;
      state.carZ = 0;
      state.carYaw = 0;
    } else if (state.selectedMode === 'drift') {
      state.carX = -2.5;
      state.carZ = 0;
      state.carYaw = 0;
    } else {
      state.carX = -2.0;
      state.carZ = 0;
      state.carYaw = 0;
    }
    state.carY = 0;
    state.carPitch = 0;
    state.carRoll = 0;
    state.speed = 0;
    state.lateralVel = 0;
    state.driftAngle = 0;
    state.driftFactor = 0;
    state.verticalVel = 0;
    camImpactShake = 0;
    playerCarGroup.position.set(state.carX, 0, state.carZ);
    playerCarGroup.rotation.set(0, state.carYaw, 0);

    if (state.playerCount === 2) {
      state.p2.carX = state.selectedMode === 'stadium' ? STADIUM_RADIUS_X + 3.0 : 2.0;
      state.p2.carY = 0;
      state.p2.carZ = 0;
      state.p2.carYaw = 0;
      state.p2.speed = 0;
      state.p2.lateralVel = 0;
      state.p2.driftAngle = 0;
      state.p2.driftFactor = 0;
      player2CarGroup.position.set(state.p2.carX, 0, state.p2.carZ);
      player2CarGroup.rotation.set(0, 0, 0);
    }
  }

  function startDrivingSession() {
    sound.init();
    sound.playEffect('bonus');

    state.inGarage = false;
    state.isPaused = false;
    state.sessionEnded = false;
    showroomGroup.visible = false;
    garageMenuView.classList.add('hidden');
    inGameHudView.classList.remove('hidden');
    btnGarageReturn.classList.remove('hidden');
    btnGarageReturn.classList.add('flex');
    sessionModal.classList.add('hidden');
    pauseSettingsModal.classList.add('hidden');

    const is2P = state.playerCount === 2;
    splitScreenDivider.classList.toggle('hidden', !is2P);
    p2ClusterBox.classList.toggle('hidden', !is2P);
    p2ClusterBox.classList.toggle('flex', is2P);
    player2CarGroup.visible = is2P;

    hudRacePositionBadge.classList.toggle('hidden', state.selectedMode !== 'stadium');

    const car = BMW_MODELS[state.selectedCarIndex];
    const stage = state.carUpgrades[state.selectedCarIndex] || 1;
    const topKmh = car.baseTopSpeed + (stage - 1) * 14;
    state.maxSpeedMs = topKmh / 2.6;

    const p2Car = BMW_MODELS[state.p2CarIndex];
    state.p2.maxSpeedMs = (p2Car.baseTopSpeed + 28) / 2.6;
    state.p2.nitroAmount = 100;
    state.p2.distanceKm = 0;
    state.p2.score = 0;
    state.p2.lap = 1;
    state.p2.trackProgress = 0;

    state.score = 0;
    state.comboMult = 1.0;
    state.comboPoints = 0;
    state.comboTimer = 0;
    state.distanceKm = 0;
    state.timeLeft = 70;
    state.peakSpeedKmh = 0;
    state.nearMissCount = 0;
    state.nitroAmount = 100;
    state.health = 100;
    state.lap = 1;
    state.trackProgress = 0;
    camImpactShake = 0;

    document.getElementById('hudCarModelName').textContent = car.name;
    if (state.selectedMode === 'timeattack') {
      document.getElementById('hudTimerTitle').textContent = 'Qolgan Vaqt';
    } else if (state.selectedMode === 'stadium') {
      document.getElementById('hudTimerTitle').textContent = 'Stadion Aylana (Lap)';
    } else {
      document.getElementById('hudTimerTitle').textContent = 'Bosib O‘tilgan Masofa';
    }

    buildBmwModel(state.selectedCarIndex);
    if (is2P) {
      buildPlayer2BmwModel(state.p2CarIndex);
    }
    buildWorldForMode(state.selectedMode);
    resetPlayerCarPosition();
  }

  function returnToGarage() {
    sound.playEffect('click');
    sound.silenceImmediately();
    state.inGarage = true;
    state.isPaused = false;
    state.sessionEnded = false;
    showroomGroup.visible = true;
    player2CarGroup.visible = false;
    splitScreenDivider.classList.add('hidden');
    pauseSettingsModal.classList.add('hidden');
    clearWorld();

    inGameHudView.classList.add('hidden');
    btnGarageReturn.classList.add('hidden');
    btnGarageReturn.classList.remove('flex');
    sessionModal.classList.add('hidden');
    garageMenuView.classList.remove('hidden');

    playerCarGroup.position.set(0, 0, 0);
    playerCarGroup.rotation.set(0, 0, 0);
    updateGarageUI();
  }

  function finishSession(reasonTitle) {
    if (state.sessionEnded) return;
    state.sessionEnded = true;
    sound.silenceImmediately();
    sound.playEffect('bonus');

    const totalScore = Math.floor(state.score + state.comboPoints * state.comboMult);
    const earnedCoins = Math.max(350, Math.floor(totalScore * 0.28) + state.nearMissCount * 150);
    state.coins += earnedCoins;
    if (totalScore > state.bestScore) {
      state.bestScore = totalScore;
    }
    saveProgress();

    document.getElementById('modalTitle').textContent = reasonTitle;
    document.getElementById('modalFinalScore').textContent = totalScore.toLocaleString('en-US');
    document.getElementById('modalEarnedCoins').textContent = '+' + earnedCoins.toLocaleString('en-US') + ' CR';
    document.getElementById('modalPeakSpeed').textContent = Math.floor(state.peakSpeedKmh) + ' km/s';
    document.getElementById('modalNearMisses').textContent = state.nearMissCount + ' ta';
    sessionModal.classList.remove('hidden');
  }

  document.getElementById('btnStartDrive').addEventListener('click', startDrivingSession);
  btnGarageReturn.addEventListener('click', returnToGarage);
  document.getElementById('btnModalRestart').addEventListener('click', startDrivingSession);
  document.getElementById('btnModalGarage').addEventListener('click', returnToGarage);

  let popupTimeout = null;
  const hudPopupBanner = document.getElementById('hudPopupBanner');
  const hudPopupTitle = document.getElementById('hudPopupTitle');
  const hudPopupSub = document.getElementById('hudPopupSub');

  function showHudBanner(title, subtitle) {
    hudPopupTitle.textContent = title;
    hudPopupSub.textContent = subtitle;
    hudPopupBanner.classList.remove('opacity-0', 'scale-90');
    hudPopupBanner.classList.add('opacity-100', 'scale-100');
    if (popupTimeout) clearTimeout(popupTimeout);
    popupTimeout = setTimeout(() => {
      hudPopupBanner.classList.remove('opacity-100', 'scale-100');
      hudPopupBanner.classList.add('opacity-0', 'scale-90');
    }, 1400);
  }

  // ==========================================
  // 11. MAIN DRIVING PHYSICS & WHEEL SIMULATION
  // ==========================================
  let lastTime = performance.now();
  let strobeTimer = 0;
  let blinkerTimer = 0;
  let lastGear = 1;

  const hudScoreText = document.getElementById('hudScoreText');
  const hudDriftAngleText = document.getElementById('hudDriftAngleText');
  const hudComboMult = document.getElementById('hudComboMult');
  const hudComboPoints = document.getElementById('hudComboPoints');
  const hudTimerValue = document.getElementById('hudTimerValue');
  const hudHealthPct = document.getElementById('hudHealthPct');
  const hudHealthBar = document.getElementById('hudHealthBar');
  const hudSpeedText = document.getElementById('hudSpeedText');
  const hudGearText = document.getElementById('hudGearText');
  const hudRpmText = document.getElementById('hudRpmText');
  const hudRpmBar = document.getElementById('hudRpmBar');
  const hudNitroPct = document.getElementById('hudNitroPct');
  const hudNitroBar = document.getElementById('hudNitroBar');

  const hudP2SpeedText = document.getElementById('hudP2SpeedText');
  const hudP2GearText = document.getElementById('hudP2GearText');
  const hudP2DistText = document.getElementById('hudP2DistText');
  const hudP2RpmBar = document.getElementById('hudP2RpmBar');
  const hudP2NitroPct = document.getElementById('hudP2NitroPct');
  const hudP2NitroBar = document.getElementById('hudP2NitroBar');

  function updateDrivingPhysics(dt) {
    const carSpec = BMW_MODELS[state.selectedCarIndex];
    const stage = state.carUpgrades[state.selectedCarIndex] || 1;
    const accelFactor = 38 + (stage - 1) * 5.2;
    const handlingFactor = (carSpec.baseHandling / 100) * 2.65 * state.steerSensitivity;

    const usingNitro = keysP1.nitro && state.nitroAmount > 1 && state.speed > 5;
    if (usingNitro) {
      state.nitroAmount = Math.max(0, state.nitroAmount - dt * 25);
    } else {
      state.nitroAmount = Math.min(100, state.nitroAmount + dt * (keysP1.drift ? 22 : 8));
    }

    const effectiveMaxSpeed = state.maxSpeedMs * (usingNitro ? 1.26 : 1.0);

    // Realistic Acceleration, Deceleration & Reverse Gear
    const isBurnout = (keysP1.up && keysP1.down) || (keysP1.up && keysP1.drift && Math.abs(state.speed) < 5);

    if (keysP1.up && !isBurnout) {
      const boostMult = usingNitro ? 1.85 : 1.0;
      state.speed += accelFactor * boostMult * dt;
    } else if (keysP1.down && !isBurnout) {
      if (state.speed > 0.8) {
        state.speed -= 64 * dt; // Strong Brembo Braking
      } else {
        state.speed -= 20 * dt; // Smooth Reverse Acceleration
      }
    } else if (!isBurnout) {
      state.speed *= (1 - 0.42 * dt); // Engine Natural Drag
    }

    const steerInput = (keysP1.left ? 1 : 0) - (keysP1.right ? 1 : 0);
    const speedKmh = Math.min(395, Math.abs(state.speed) * 2.85);
    if (speedKmh > state.peakSpeedKmh) state.peakSpeedKmh = speedKmh;

    const speedRatio = Math.min(1, Math.abs(state.speed) / 24);
    const targetSteer = steerInput * 0.56;
    state.steerAngle += (targetSteer - state.steerAngle) * Math.min(1, dt * 11);

    // Turn Signal Blinkers
    blinkerTimer += dt * 9;
    const blinkOn = Math.floor(blinkerTimer) % 2 === 0;
    if (blinkerLeftMat && blinkerRightMat) {
      blinkerLeftMat.color.setHex(steerInput > 0 && blinkOn ? 0xf59e0b : 0x332200);
      blinkerRightMat.color.setHex(steerInput < 0 && blinkOn ? 0xf59e0b : 0x332200);
    }

    // Pro Drift Physics & Counter-Steer Calculations
    const wantsDrift = keysP1.drift && Math.abs(state.speed) > 10;
    if (wantsDrift) {
      state.speed *= (1 - 0.14 * dt);
      const targetSlip = steerInput !== 0 ? steerInput * 0.75 : (state.driftAngle >= 0 ? 0.54 : -0.54);
      state.driftAngle += (targetSlip - state.driftAngle) * Math.min(1, dt * 6.5);
      state.driftFactor = Math.min(1.6, Math.abs(state.driftAngle) * 2.1);
    } else {
      state.driftAngle += (0 - state.driftAngle) * Math.min(1, dt * 7.5);
      state.driftFactor = Math.max(0, state.driftFactor - dt * 4.5);
    }

    state.speed = Math.max(-18, Math.min(effectiveMaxSpeed, state.speed));

    if (state.selectedMode === 'highway' || state.selectedMode === 'timeattack') {
      // ULTRA-SMOOTH SPRING-DAMPER LATERAL VELOCITY & REVERSE KINEMATICS
      const steerDir = state.speed < -0.2 ? -1 : 1;
      const targetLateralVel = (-steerInput * steerDir * handlingFactor * (7.2 + speedRatio * 7.8)) - (state.driftAngle * 10.5);
      state.lateralVel += (targetLateralVel - state.lateralVel) * Math.min(1, dt * 9.5);
      state.carX += state.lateralVel * dt;

      if (state.carX < -8.0) {
        state.carX = -8.0;
        state.lateralVel *= -0.3;
      } else if (state.carX > 8.0) {
        state.carX = 8.0;
        state.lateralVel *= -0.3;
      }

      const forwardStep = state.speed * dt * 1.35;
      state.distanceKm += Math.max(0, forwardStep) / 1000;
      state.score += Math.max(0, forwardStep) * (speedKmh > 200 ? 2.8 : 1.2);

      const targetYaw = (-state.lateralVel * 0.015) + (state.driftAngle * 0.85);
      state.carYaw += (targetYaw - state.carYaw) * Math.min(1, dt * 11);

      const targetRoll = (state.lateralVel * 0.0042 - state.driftAngle * 0.05) * speedRatio;
      state.carRoll += (targetRoll - state.carRoll) * Math.min(1, dt * 10);

      const targetPitch = keysP1.up ? -0.018 : (keysP1.down && state.speed > 0.5 ? 0.026 : 0);
      state.carPitch += (targetPitch - state.carPitch) * Math.min(1, dt * 10);

      playerCarGroup.position.set(state.carX, state.carY, 0);
      playerCarGroup.rotation.set(state.carPitch, state.carYaw, state.carRoll);

      if (state.playerCount === 2) {
        updatePlayer2Highway(dt, forwardStep);
      }

      // Infinite Looping Road Segments (Supports Forward & Reverse)
      roadSegments.forEach((seg) => {
        seg.position.z += forwardStep;
        if (seg.position.z > 70) {
          seg.position.z -= roadSegments.length * 40;
        } else if (seg.position.z < -roadSegments.length * 40 + 70) {
          seg.position.z += roadSegments.length * 40;
        }
      });

      // Traffic Cars Collision & Near-Miss Detection
      trafficCars.forEach((tCar) => {
        const relSpeed = (state.speed * 1.35) - tCar.speed;
        tCar.mesh.position.z += relSpeed * dt;

        const dz = tCar.mesh.position.z;
        const dx = Math.abs(tCar.mesh.position.x - state.carX);

        if (Math.abs(dz) < 3.9 && dx < 1.72 && state.carY < 1.2) {
          sound.playEffect('crash');
          camImpactShake = 0.45;
          state.speed *= 0.45;
          state.health = Math.max(0, state.health - 15);
          state.comboPoints = 0;
          state.comboMult = 1.0;
          showHudBanner('TO‘QNASHUV!', 'Ehtiyot bo‘ling! -15% Holat');
          resetTrafficCar(tCar, -220 - Math.random() * 120);
          if (state.health <= 0) {
            finishSession('MASHINA SHIKASTLANDI!');
          }
        } else if (!tCar.passed && dz > 2.5 && dz < 14) {
          tCar.passed = true;
          if (dx < 3.1 && speedKmh > 100) {
            state.nearMissCount++;
            state.comboMult = Math.min(5.0, +(state.comboMult + 0.25).toFixed(1));
            const pts = tCar.oncoming ? 500 : 300;
            state.comboPoints += pts;
            state.comboTimer = 3.5;
            sound.playEffect('bonus');
            showHudBanner(tCar.oncoming ? 'QARAMA-QARSHI SHASHKA!' : 'YAQIN SHASHKA (NEAR MISS)!', '+' + pts + ' BALL (x' + state.comboMult + ')');
          }
        }

        if (state.playerCount === 2) {
          const dz2 = tCar.mesh.position.z - state.p2.carZ;
          const dx2 = Math.abs(tCar.mesh.position.x - state.p2.carX);
          if (Math.abs(dz2) < 3.8 && dx2 < 1.7) {
            sound.playEffect('crash');
            state.p2.speed *= 0.45;
            resetTrafficCar(tCar, -220 - Math.random() * 120);
          }
        }

        if (tCar.mesh.position.z > 55 || tCar.mesh.position.z < -420) {
          resetTrafficCar(tCar, -240 - Math.random() * 150);
        }
      });

      bonusRings.forEach((gate) => {
        gate.position.z += forwardStep;
        if (Math.abs(gate.position.z) < 2.8 && Math.abs(gate.position.x - state.carX) < 2.8) {
          sound.playEffect('bonus');
          state.nearMissCount++;
          state.nitroAmount = Math.min(100, state.nitroAmount + 40);
          if (state.selectedMode === 'timeattack') {
            state.timeLeft += 9.0;
            state.score += 1200;
            showHudBanner('CHECKPOINT +9.0s!', '+1200 BALL VA NITRO');
          } else {
            state.score += 850;
            showHudBanner('OLTIN DARVOZA!', '+850 BALL VA NITRO');
          }
          gate.position.z = -340 - Math.random() * 60;
          gate.position.x = HIGHWAY_LANES[Math.floor(Math.random() * HIGHWAY_LANES.length)];
        } else if (gate.position.z > 40) {
          gate.position.z = -340 - Math.random() * 60;
          gate.position.x = HIGHWAY_LANES[Math.floor(Math.random() * HIGHWAY_LANES.length)];
        }
      });

      if (state.selectedMode === 'timeattack') {
        state.timeLeft -= dt;
        if (state.timeLeft <= 0) {
          state.timeLeft = 0;
          finishSession('VAQT TUGADI — TIME ATTACK!');
        }
      }
    } else {
      // 360° STADIUM CIRCUIT OR DRIFT CITY ARENA
      const turnRate = (steerInput * handlingFactor * (1.25 + state.driftFactor * 0.75) * speedRatio) * (state.speed >= 0 ? 1 : -1);
      state.carYaw += turnRate * dt;

      const moveAngle = state.carYaw;
      state.carX -= Math.sin(moveAngle) * state.speed * dt * 1.25;
      state.carZ -= Math.cos(moveAngle) * state.speed * dt * 1.25;

      const boundary = state.selectedMode === 'stadium' ? 145 : 175;
      const radialDist = Math.hypot(state.carX, state.carZ);
      if (radialDist > boundary) {
        const scale = boundary / radialDist;
        state.carX *= scale;
        state.carZ *= scale;
        state.speed *= 0.75;
      }

      state.distanceKm += (Math.abs(state.speed) * dt * 1.25) / 1000;

      // AI Bots Racing with Realistic Visible Wheel Rotation
      aiBotCars.forEach((bot) => {
        bot.angle += bot.angularSpeed * dt;
        if (bot.angle > Math.PI * 2) {
          bot.angle -= Math.PI * 2;
          bot.laps = (bot.laps || 1) + 1;
        }
        const rx = bot.isArenaBot ? bot.laneOffset : (STADIUM_RADIUS_X + bot.laneOffset);
        const rz = bot.isArenaBot ? bot.laneOffset : (STADIUM_RADIUS_Z + bot.laneOffset);
        const nextX = Math.cos(bot.angle) * rx;
        const nextZ = Math.sin(bot.angle) * rz;
        const dx = nextX - bot.mesh.position.x;
        const dz = nextZ - bot.mesh.position.z;
        bot.mesh.position.set(nextX, 0, nextZ);
        bot.mesh.rotation.y = Math.atan2(-dx, -dz);

        const botWheelSpin = bot.angularSpeed * 35 * dt;
        bot.wheels.forEach((w) => {
          w.spinGroup.rotation.x -= botWheelSpin;
        });
      });

      if (state.selectedMode === 'stadium') {
        const playerAngle = (Math.atan2(-state.carZ, state.carX) + Math.PI * 2) % (Math.PI * 2);
        if (state.trackProgress > 5.0 && playerAngle < 1.0) {
          state.lap++;
          state.score += 2500;
          sound.playEffect('bonus');
          showHudBanner('AYLANA ' + state.lap + ' / 3!', '+2500 POYGA BONUSI');
          if (state.lap > 3) {
            finishSession('STADION CHEMPIONI (' + state.raceRank + '-O‘RIN)!');
          }
        }
        state.trackProgress = playerAngle;

        let rank = 1;
        const pTotal = state.lap * 10 + playerAngle;
        aiBotCars.forEach((b) => {
          const bTotal = (b.laps || 1) * 10 + b.angle;
          if (bTotal > pTotal) rank++;
        });
        state.raceRank = rank;
        hudRacePositionBadge.textContent = rank + ' / ' + (aiBotCars.length + 1) + ' O‘RIN';
      }

      stuntRamps.forEach((ramp) => {
        const distToRamp = Math.hypot(state.carX - ramp.x, state.carZ - ramp.z);
        if (distToRamp < ramp.radius && state.carY < 0.3 && state.speed > 16) {
          state.verticalVel = Math.min(22, state.speed * 0.38);
          state.nearMissCount++;
          state.score += 1400;
          sound.playEffect('bonus');
          showHudBanner('HAVODA PARVOZ (STUNT)!', '+1400 BALL');
        }
      });

      if (state.carY > 0 || state.verticalVel > 0) {
        state.carY += state.verticalVel * dt;
        state.verticalVel -= 26 * dt;
        state.carPitch = Math.max(-0.35, Math.min(0.35, state.verticalVel * 0.02));
        if (state.carY <= 0) {
          state.carY = 0;
          state.verticalVel = 0;
          state.carPitch = 0;
        }
      } else {
        state.carPitch = keysP1.up ? -0.02 : 0;
      }

      bonusRings.forEach((ring) => {
        const dRing = Math.hypot(state.carX - ring.position.x, state.carZ - ring.position.z);
        if (dRing < 3.5) {
          sound.playEffect('bonus');
          state.score += 900;
          state.nitroAmount = Math.min(100, state.nitroAmount + 45);
          state.nearMissCount++;
          showHudBanner('BONUS HALQASI!', '+900 BALL');
          const newAngle = Math.random() * Math.PI * 2;
          const newRadius = 28 + Math.random() * 55;
          ring.position.set(Math.cos(newAngle) * newRadius, 0, Math.sin(newAngle) * newRadius);
          ring.rotation.y = -newAngle;
        }
      });

      const targetRoll = (-steerInput * 0.055 - state.driftAngle * 0.06) * speedRatio;
      state.carRoll += (targetRoll - state.carRoll) * Math.min(1, dt * 10);
      playerCarGroup.position.set(state.carX, state.carY, state.carZ);
      playerCarGroup.rotation.set(state.carPitch, state.carYaw + state.driftAngle * 0.65, state.carRoll);

      if (state.playerCount === 2) {
        updatePlayer2Free360(dt, boundary);
      }
    }

    // Drift & Burnout Smoke Spawning
    const driftDeg = Math.min(75, Math.round(Math.abs(state.driftAngle) * 85));
    hudDriftAngleText.textContent = driftDeg + '° DRIFT';

    if ((isBurnout || (state.driftFactor > 0.22 && speedKmh > 35)) && state.carY === 0) {
      state.comboTimer = 3.2;
      state.comboPoints += Math.floor((isBurnout ? 2.5 : state.driftFactor) * Math.max(40, speedKmh) * dt * 3.6);
      if (Math.random() < (isBurnout ? 0.95 : 0.78)) {
        spawnDriftEffects(playerCarGroup, playerCarGroup.rotation.y);
      }
    }

    if (state.comboTimer > 0) {
      state.comboTimer -= dt;
      if (state.comboTimer <= 0 && state.comboPoints > 0) {
        state.score += Math.floor(state.comboPoints * state.comboMult);
        state.comboPoints = 0;
        state.comboMult = 1.0;
      }
    }

    // Particle Lifetime Updates
    for (let i = driftParticles.length - 1; i >= 0; i--) {
      const p = driftParticles[i];
      p.life -= dt;
      p.mesh.position.y += dt * 0.9;
      p.mesh.scale.multiplyScalar(1 + dt * 2.4);
      p.mesh.material.opacity = Math.max(0, p.life);
      if (p.life <= 0) {
        worldGroup.remove(p.mesh);
        driftParticles.splice(i, 1);
      }
    }

    for (let i = skidMarks.length - 1; i >= 0; i--) {
      const s = skidMarks[i];
      s.life -= dt;
      if (s.life <= 0) {
        worldGroup.remove(s.mesh);
        skidMarks.splice(i, 1);
      }
    }

    // ==========================================
    // VISIBLE WHEEL ROTATION & COUNTER-STEER (NO WOBBLE)
    // ==========================================
    const forwardWheelSpin = isBurnout ? (dt * 36.0) : (state.speed * dt * 2.85);

    playerWheels.forEach((w) => {
      // Rear wheels spin extra during burnout
      const spinAmount = (!w.front && isBurnout) ? (dt * 38.0) : forwardWheelSpin;
      w.spinGroup.rotation.x -= spinAmount;

      if (w.front) {
        // True counter-steer blending when drifting
        const counterSteer = state.driftAngle * 0.65;
        const totalSteer = THREE.MathUtils.clamp(state.steerAngle - counterSteer, -0.68, 0.68);
        w.group.rotation.y = totalSteer;
      }
    });

    // Taillight, Reverse Light & Nitro Flame Updates
    const isBraking = (keysP1.down && state.speed > 0.5) || keysP1.drift;
    const isReversing = state.speed < -0.4;

    brakeLightMaterials.forEach((m) => {
      m.color.setHex(isBraking ? 0xff0022 : (isReversing ? 0x661111 : 0x991b1b));
    });
    reverseLightMaterials.forEach((m) => {
      m.color.setHex(isReversing ? 0xffffff : 0x222222);
    });

    nitroFlameMeshes.forEach((f) => {
      f.material.opacity = usingNitro ? (0.75 + Math.random() * 0.25) : 0.0;
      f.scale.setScalar(usingNitro ? (0.92 + Math.random() * 0.45) : 1.0);
    });

    if (state.mStrobeOn && strobeLightL && strobeLightR) {
      strobeTimer += dt * 15;
      const flash = Math.floor(strobeTimer) % 2 === 0;
      strobeLightL.intensity = flash ? 3.8 : 0.2;
      strobeLightR.intensity = flash ? 0.2 : 3.8;
    }

    // Camera Rig & Speed Streaks
    updateCameraRig(camera, playerCarGroup, state.speed, state.carYaw, usingNitro, dt, state.selectedMode);
    if (state.playerCount === 2) {
      updateCameraRig(cameraP2, player2CarGroup, state.p2.speed, state.p2.carYaw, keysP2.nitro && state.p2.nitroAmount > 1, dt, state.selectedMode);
    }
    updateSpeedStreaks(playerCarGroup.position, speedKmh, usingNitro, dt);

    // ==========================================
    // 8-SPEED SEQUENTIAL TRANSMISSION & TACHOMETER
    // ==========================================
    let gear = 1;
    let gearProgress = 0.2;
    if (state.speed < -0.5) {
      gear = 'R';
      gearProgress = Math.min(1, 0.2 + (Math.abs(speedKmh) / 45) * 0.7);
    } else if (speedKmh < 2) {
      gear = 'N';
      gearProgress = keysP1.up ? Math.min(0.85, 0.25 + Math.random() * 0.08) : 0.15;
    } else {
      const thresholds = [0, 48, 92, 142, 192, 245, 298, 348, 999];
      for (let g = 1; g <= 8; g++) {
        if (speedKmh <= thresholds[g]) {
          gear = g;
          const range = thresholds[g] - thresholds[g - 1];
          const prog = (speedKmh - thresholds[g - 1]) / range;
          gearProgress = 0.28 + prog * 0.72;
          break;
        }
      }
    }

    if (gear !== lastGear && typeof gear === 'number' && typeof lastGear === 'number') {
      sound.playPop();
      hudGearText.classList.remove('gear-shift-pop');
      void hudGearText.offsetWidth; // Force CSS reflow
      hudGearText.classList.add('gear-shift-pop');
    }
    lastGear = gear;

    const rpmRatio = isBurnout ? 0.95 : Math.min(1, gearProgress + (keysP1.up ? 0.08 : 0));
    sound.updateEngine(rpmRatio, usingNitro, isBurnout || state.driftFactor > 0.28, !state.sessionEnded);

    hudSpeedText.textContent = Math.floor(speedKmh);
    hudGearText.textContent = gear === 'R' || gear === 'N' ? gear : 'M' + gear;
    const rpmVal = Math.floor(1050 + rpmRatio * 7450);
    hudRpmText.textContent = rpmVal + ' RPM';
    hudRpmBar.style.width = Math.min(100, (rpmVal / 8500) * 100) + '%';
    hudRpmBar.classList.toggle('redline-flash', rpmRatio > 0.88);

    hudNitroPct.textContent = Math.floor(state.nitroAmount) + '%';
    hudNitroBar.style.width = state.nitroAmount + '%';
    document.querySelector('.glass-panel-strong')?.classList.toggle('nitro-active-glow', usingNitro);

    hudScoreText.textContent = Math.floor(state.score).toLocaleString('en-US');
    hudComboMult.textContent = 'x' + state.comboMult.toFixed(1);
    hudComboPoints.textContent = '+' + Math.floor(state.comboPoints);

    if (state.selectedMode === 'timeattack') {
      hudTimerValue.textContent = state.timeLeft.toFixed(1) + ' s';
    } else if (state.selectedMode === 'stadium') {
      hudTimerValue.textContent = 'LAP ' + Math.min(3, state.lap) + ' / 3';
    } else {
      hudTimerValue.textContent = state.distanceKm.toFixed(2) + ' km';
    }

    hudHealthPct.textContent = Math.floor(state.health) + '%';
    hudHealthBar.style.width = state.health + '%';
  }

  function stepPlayer2Core(dt) {
    const p2 = state.p2;
    const usingNitro2 = keysP2.nitro && p2.nitroAmount > 1 && p2.speed > 5;
    if (usingNitro2) {
      p2.nitroAmount = Math.max(0, p2.nitroAmount - dt * 25);
    } else {
      p2.nitroAmount = Math.min(100, p2.nitroAmount + dt * (keysP2.drift ? 20 : 8));
    }

    const maxSpd2 = p2.maxSpeedMs * (usingNitro2 ? 1.25 : 1.0);
    if (keysP2.up) {
      p2.speed += 42 * (usingNitro2 ? 1.8 : 1.0) * dt;
    } else if (keysP2.down) {
      p2.speed -= (p2.speed > 1 ? 60 : 20) * dt;
    } else {
      p2.speed *= (1 - 0.42 * dt);
    }
    p2.speed = Math.max(-22, Math.min(maxSpd2, p2.speed));

    const steer2 = (keysP2.left ? 1 : 0) - (keysP2.right ? 1 : 0);
    p2.steerAngle += (steer2 * 0.56 - p2.steerAngle) * Math.min(1, dt * 11);

    if (keysP2.drift && Math.abs(p2.speed) > 10) {
      const targetSlip2 = steer2 !== 0 ? steer2 * 0.68 : 0.45;
      p2.driftAngle += (targetSlip2 - p2.driftAngle) * Math.min(1, dt * 6.5);
      if (Math.random() < 0.6) spawnDriftEffects(player2CarGroup, player2CarGroup.rotation.y);
    } else {
      p2.driftAngle += (0 - p2.driftAngle) * Math.min(1, dt * 7.5);
    }

    const spin2 = p2.speed * dt * 2.85;
    player2Wheels.forEach((w) => {
      w.spinGroup.rotation.x -= spin2;
      if (w.front) {
        w.group.rotation.y = THREE.MathUtils.clamp(p2.steerAngle - p2.driftAngle * 0.65, -0.68, 0.68);
      }
    });

    p2NitroFlameMeshes.forEach((f) => {
      f.material.opacity = usingNitro2 ? 0.85 : 0.0;
    });

    const spdKmh2 = Math.min(395, Math.abs(p2.speed) * 2.85);
    const gear2 = Math.min(8, Math.max(1, Math.ceil(spdKmh2 / 45)));
    const rpmRatio2 = Math.min(1, 0.2 + ((spdKmh2 % 45) / 45) * 0.75);
    hudP2SpeedText.textContent = Math.floor(spdKmh2);
    hudP2GearText.textContent = p2.speed < -0.5 ? 'R' : (spdKmh2 < 2 ? 'N' : 'M' + gear2);
    hudP2DistText.textContent = p2.distanceKm.toFixed(2) + ' km';
    hudP2RpmBar.style.width = Math.min(100, rpmRatio2 * 100) + '%';
    hudP2NitroPct.textContent = Math.floor(p2.nitroAmount) + '%';
    hudP2NitroBar.style.width = p2.nitroAmount + '%';

    return { steer2, spdRatio2: Math.min(1, Math.abs(p2.speed) / 24) };
  }

  function updatePlayer2Highway(dt, p1ForwardStep) {
    const p2 = state.p2;
    const { steer2, spdRatio2 } = stepPlayer2Core(dt);
    const targetLat2 = (-steer2 * 19 * (0.6 + spdRatio2 * 0.6)) - p2.driftAngle * 10;
    p2.lateralVel += (targetLat2 - p2.lateralVel) * Math.min(1, dt * 9.5);
    p2.carX += p2.lateralVel * dt;
    p2.carX = Math.max(-8.0, Math.min(8.0, p2.carX));

    const p2ForwardStep = p2.speed * dt * 1.35;
    p2.distanceKm += Math.max(0, p2ForwardStep) / 1000;
    p2.carZ += (p1ForwardStep - p2ForwardStep);
    p2.carZ = Math.max(-140, Math.min(140, p2.carZ));

    const targetYaw2 = (-p2.lateralVel * 0.015) + p2.driftAngle * 0.8;
    p2.carYaw += (targetYaw2 - p2.carYaw) * Math.min(1, dt * 11);
    const targetRoll2 = (p2.lateralVel * 0.004) * spdRatio2;
    p2.carRoll += (targetRoll2 - p2.carRoll) * Math.min(1, dt * 10);

    player2CarGroup.position.set(p2.carX, 0, p2.carZ);
    player2CarGroup.rotation.set(0, p2.carYaw, p2.carRoll);
  }

  function updatePlayer2Free360(dt, boundary) {
    const p2 = state.p2;
    const { steer2, spdRatio2 } = stepPlayer2Core(dt);
    const turnRate2 = steer2 * 2.5 * (1.2 + Math.abs(p2.driftAngle)) * spdRatio2 * (p2.speed >= 0 ? 1 : -1);
    p2.carYaw += turnRate2 * dt;

    p2.carX -= Math.sin(p2.carYaw) * p2.speed * dt * 1.25;
    p2.carZ -= Math.cos(p2.carYaw) * p2.speed * dt * 1.25;

    const rDist2 = Math.hypot(p2.carX, p2.carZ);
    if (rDist2 > boundary) {
      p2.carX *= boundary / rDist2;
      p2.carZ *= boundary / rDist2;
      p2.speed *= 0.75;
    }
    p2.distanceKm += (Math.abs(p2.speed) * dt * 1.25) / 1000;
    player2CarGroup.position.set(p2.carX, 0, p2.carZ);
    player2CarGroup.rotation.set(0, p2.carYaw + p2.driftAngle * 0.65, -steer2 * 0.05);
  }

  function updateCameraRig(cam, targetGroup, speedVal, yawVal, usingNitro, dt, mode) {
    const speedAbs = Math.abs(speedVal);
    const targetFov = usingNitro ? 78 : (62 + Math.min(14, speedAbs * 0.14));
    cam.fov += (targetFov - cam.fov) * Math.min(1, dt * 6);
    cam.updateProjectionMatrix();

    const px = targetGroup.position.x;
    const py = targetGroup.position.y;
    const pz = targetGroup.position.z;
    const yaw = (mode === 'drift' || mode === 'stadium') ? yawVal : 0;

    camImpactShake = Math.max(0, camImpactShake - dt * 2.4);
    const roadRumble = speedAbs > 85 ? (Math.random() - 0.5) * 0.024 : 0;
    const impactRumble = (Math.random() - 0.5) * camImpactShake;
    const totalShake = roadRumble + impactRumble;

    if (state.cameraIndex === 0) {
      const dist = 6.3;
      const height = 2.3;
      const desiredX = px + Math.sin(yaw) * dist;
      const desiredZ = pz + Math.cos(yaw) * dist;
      cam.position.x += (desiredX - cam.position.x) * Math.min(1, dt * 11) + totalShake;
      cam.position.y += (py + height - cam.position.y) * Math.min(1, dt * 11) + totalShake;
      cam.position.z += (desiredZ - cam.position.z) * Math.min(1, dt * 11);
      cam.lookAt(px - Math.sin(yaw) * 7, py + 0.85, pz - Math.cos(yaw) * 7);
    } else if (state.cameraIndex === 1) {
      const hoodX = px - Math.sin(yaw) * 0.45;
      const hoodZ = pz - Math.cos(yaw) * 0.45;
      cam.position.set(hoodX + totalShake, py + 1.18 + totalShake, hoodZ);
      cam.lookAt(px - Math.sin(yaw) * 22, py + 0.95, pz - Math.cos(yaw) * 22);
    } else {
      const dist = 10.8;
      const height = 5.4;
      cam.position.set(px + Math.sin(yaw) * dist, py + height, pz + Math.cos(yaw) * dist);
      cam.lookAt(px - Math.sin(yaw) * 4, py + 0.5, pz - Math.cos(yaw) * 4);
    }
  }

  // ==========================================
  // 12. ANIMATION LOOP & LIFECYCLE
  // ==========================================
  function animate(now) {
    requestAnimationFrame(animate);
    let dt = Math.min(0.05, (now - lastTime) / 1000);
    lastTime = now;

    if (state.slowMoActive && !state.inGarage && !state.isPaused) {
      dt *= 0.42;
    }

    const w = window.innerWidth;
    const h = window.innerHeight;

    if (state.inGarage) {
      playerCarGroup.rotation.y += dt * 0.55;
      showroomGroup.rotation.y += dt * 0.55;
      playerWheels.forEach((wheel) => {
        wheel.spinGroup.rotation.x -= dt * 1.5;
      });

      camera.fov = 50;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      camera.position.set(4.5, 2.2, 5.3);
      camera.lookAt(0, 0.55, 0);
      sound.updateEngine(0, false, false, false);

      renderer.setScissorTest(false);
      renderer.setViewport(0, 0, w, h);
      renderer.render(scene, camera);
    } else {
      if (!state.sessionEnded && !state.isPaused) {
        updateDrivingPhysics(dt);
      } else {
        sound.updateEngine(0, false, false, false);
      }

      if (state.playerCount === 2) {
        renderer.setScissorTest(true);

        const halfW = Math.floor(w * 0.5);
        camera.aspect = halfW / h;
        camera.updateProjectionMatrix();
        renderer.setViewport(0, 0, halfW, h);
        renderer.setScissor(0, 0, halfW, h);
        renderer.render(scene, camera);

        cameraP2.aspect = (w - halfW) / h;
        cameraP2.updateProjectionMatrix();
        renderer.setViewport(halfW, 0, w - halfW, h);
        renderer.setScissor(halfW, 0, w - halfW, h);
        renderer.render(scene, cameraP2);
      } else {
        renderer.setScissorTest(false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setViewport(0, 0, w, h);
        renderer.render(scene, camera);
      }
    }
  }

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  window.onload = function () {
    renderPaintSwatches();
    updateGarageUI();
    buildBmwModel(state.selectedCarIndex);
    requestAnimationFrame(animate);
  };
})();
