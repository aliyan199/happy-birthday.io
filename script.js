/**
 * HAPPY BIRTHDAY AIMEN — POOKIE PUBG BRAINROT JAVASCRIPT ENGINE
 * Fully featured with Web Audio API sound synthesis, 3 playable mini-games,
 * 8x scope pointer reveal canvas, confetti & fireworks, and 3D card tilt.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. WEB AUDIO SYNTHESIS ENGINE (100% Offline, No Broken External Files)
     ========================================================================== */
  class SoundEngine {
    constructor() {
      this.ctx = null;
      this.sfxEnabled = true;
      this.bgmPlaying = false;
      this.bgmTimer = null;
    }

    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContext();
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    play(name) {
      if (!this.sfxEnabled) return;
      this.init();

      switch (name) {
        case 'pan':
          this.playPanClang();
          break;
        case 'flare':
          this.playFlareWhistle();
          break;
        case 'sixtino':
          this.playSixtinoTune();
          break;
        case 'pookie':
          this.playPookieSparkle();
          break;
        case 'chicken':
          this.playChickenVictory();
          break;
        case 'birthday':
          this.playBirthdayFanfare();
          break;
        case 'drink':
          this.playDrinkSound();
          break;
        case 'airdrop':
          this.playAirdropFlyby();
          break;
        case 'coin':
          this.playCoin();
          break;
        case 'bomb':
          this.playExplosion();
          break;
        case 'spin':
          this.playClick();
          break;
        case 'dua':
          this.playDuaChime();
          break;
        default:
          this.playCoin();
      }
    }

    // PUBG Pan Clang: high metallic clash
    playPanClang() {
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'triangle';
      osc2.type = 'square';
      osc1.frequency.setValueAtTime(840, now);
      osc1.frequency.exponentialRampToValueAtTime(140, now + 0.35);

      osc2.frequency.setValueAtTime(1260, now);
      osc2.frequency.exponentialRampToValueAtTime(320, now + 0.25);

      gain.gain.setValueAtTime(0.7, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.4);
      osc2.stop(now + 0.4);
    }

    // Flare Gun: whistling ascent followed by pop
    playFlareWhistle() {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.exponentialRampToValueAtTime(2400, now + 0.6);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.65);

      setTimeout(() => this.playExplosion(), 550);
    }

    // Sixtino Seventino: quirky brainrot melody
    playSixtinoTune() {
      const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          this.playTone(freq, 'sine', 0.12, 0.25);
        }, idx * 75);
      });
    }

    // Pookie Sparkle: cute harp/fairy twinkle
    playPookieSparkle() {
      const sparkles = [587.33, 739.99, 880.00, 1174.66, 1479.98, 1760.00];
      sparkles.forEach((freq, idx) => {
        setTimeout(() => {
          this.playTone(freq, 'triangle', 0.15, 0.2);
        }, idx * 60);
      });
    }

    // Chicken Dinner: celebratory horn
    playChickenVictory() {
      const chords = [523.25, 659.25, 783.99, 1046.50];
      chords.forEach((f) => this.playTone(f, 'sawtooth', 0.5, 0.15));
      setTimeout(() => {
        [587.33, 739.99, 880.00, 1174.66].forEach((f) => this.playTone(f, 'sawtooth', 0.8, 0.2));
      }, 300);
    }

    // Birthday Fanfare Level-up
    playBirthdayFanfare() {
      const notes = [
        { f: 261.63, d: 200 },
        { f: 261.63, d: 200 },
        { f: 293.66, d: 400 },
        { f: 261.63, d: 400 },
        { f: 349.23, d: 400 },
        { f: 329.63, d: 800 }
      ];
      let delay = 0;
      notes.forEach(n => {
        setTimeout(() => this.playTone(n.f, 'square', n.d / 1000, 0.15), delay);
        delay += n.d + 30;
      });
    }

    playDrinkSound() {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.2);
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.25);
    }

    playAirdropFlyby() {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(100, now);
      osc.frequency.linearRampToValueAtTime(150, now + 0.4);
      osc.frequency.linearRampToValueAtTime(80, now + 0.9);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.linearRampToValueAtTime(0.3, now + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.9);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.9);
    }

    playCoin() {
      this.playTone(987.77, 'sine', 0.08, 0.2);
      setTimeout(() => this.playTone(1318.51, 'sine', 0.12, 0.25), 60);
    }

    playExplosion() {
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(120, now);
      osc.frequency.exponentialRampToValueAtTime(30, now + 0.35);
      gain.gain.setValueAtTime(0.5, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    }

    playClick() {
      this.playTone(450, 'triangle', 0.04, 0.1);
    }

    playDuaChime() {
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      notes.forEach((f, i) => {
        setTimeout(() => this.playTone(f, 'sine', 0.4, 0.15), i * 80);
      });
    }

    playTone(freq, type = 'sine', duration = 0.2, volume = 0.2) {
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(volume, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + duration);
    }

    // Toggle 8-Bit Lo-fi Birthday BGM
    toggleBGM() {
      this.init();
      const musicBtn = document.getElementById('musicToggleBtn');
      const label = musicBtn.querySelector('.btn-label');

      if (this.bgmPlaying) {
        this.stopBGM();
        musicBtn.classList.remove('playing');
        label.textContent = 'BGM: OFF';
      } else {
        this.startBGM();
        musicBtn.classList.add('playing');
        label.textContent = 'BGM: ON';
      }
    }

    startBGM() {
      this.bgmPlaying = true;
      // Happy Birthday Melody in C Major
      const melody = [
        { f: 261.63, d: 250 }, { f: 261.63, d: 250 }, { f: 293.66, d: 500 }, { f: 261.63, d: 500 }, { f: 349.23, d: 500 }, { f: 329.63, d: 1000 },
        { f: 261.63, d: 250 }, { f: 261.63, d: 250 }, { f: 293.66, d: 500 }, { f: 261.63, d: 500 }, { f: 392.00, d: 500 }, { f: 349.23, d: 1000 },
        { f: 261.63, d: 250 }, { f: 261.63, d: 250 }, { f: 523.25, d: 500 }, { f: 440.00, d: 500 }, { f: 349.23, d: 500 }, { f: 329.63, d: 500 }, { f: 293.66, d: 800 },
        { f: 466.16, d: 250 }, { f: 466.16, d: 250 }, { f: 440.00, d: 500 }, { f: 349.23, d: 500 }, { f: 392.00, d: 500 }, { f: 349.23, d: 1200 }
      ];

      let currentNote = 0;
      const playNext = () => {
        if (!this.bgmPlaying) return;
        const note = melody[currentNote];
        this.playTone(note.f, 'triangle', note.d / 1000, 0.08);
        // Add soft bass accompaniment
        this.playTone(note.f / 2, 'sine', note.d / 1000, 0.05);

        currentNote = (currentNote + 1) % melody.length;
        this.bgmTimer = setTimeout(playNext, note.d + 50);
      };
      playNext();
    }

    stopBGM() {
      this.bgmPlaying = false;
      if (this.bgmTimer) clearTimeout(this.bgmTimer);
    }
  }

  const sounds = new SoundEngine();

  // HUD SFX and Music Buttons
  const sfxBtn = document.getElementById('sfxToggleBtn');
  sfxBtn.addEventListener('click', () => {
    sounds.sfxEnabled = !sounds.sfxEnabled;
    sfxBtn.querySelector('.btn-label').textContent = sounds.sfxEnabled ? 'SFX: ON' : 'SFX: OFF';
    if (sounds.sfxEnabled) sounds.play('coin');
  });

  const musicBtn = document.getElementById('musicToggleBtn');
  musicBtn.addEventListener('click', () => {
    sounds.toggleBGM();
  });

  // Soundboard Buttons Event Listeners
  document.querySelectorAll('.sfx-pad').forEach(pad => {
    pad.addEventListener('click', () => {
      const s = pad.getAttribute('data-sound');
      sounds.play(s);
      pad.style.transform = 'scale(0.92)';
      setTimeout(() => pad.style.transform = '', 150);
    });
  });

  /* ==========================================================================
     2. CUSTOM CURSOR & PARTICLES TRAIL
     ========================================================================== */
  const customCursor = document.getElementById('customCursor');
  let mouseX = -100, mouseY = -100;
  let lastParticleTime = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (customCursor) {
      customCursor.style.left = `${mouseX}px`;
      customCursor.style.top = `${mouseY}px`;
    }

    // Spawn Sparkle Trail behind pointer every 45ms
    const now = Date.now();
    if (now - lastParticleTime > 45) {
      spawnCursorSparkle(mouseX, mouseY);
      lastParticleTime = now;
    }
  });

  // Pointer hover interactions
  const interactives = document.querySelectorAll('button, a, .tilt-card, .whack-hole, .reel, .sfx-pad, .airdrop-box-wrap');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => customCursor && customCursor.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => customCursor && customCursor.classList.remove('cursor-hover'));
  });

  window.addEventListener('mousedown', () => customCursor && customCursor.classList.add('cursor-click'));
  window.addEventListener('mouseup', () => customCursor && customCursor.classList.remove('cursor-click'));

  function spawnCursorSparkle(x, y) {
    const dot = document.createElement('div');
    dot.className = 'cursor-trail-dot';
    const emojis = ['✨', '💖', '🤌', '🍗', '💫', '🌟', '60', '70'];
    const pick = emojis[Math.floor(Math.random() * emojis.length)];
    
    dot.textContent = pick;
    dot.style.fontSize = `${Math.random() * 12 + 10}px`;
    dot.style.left = `${x + (Math.random() * 16 - 8)}px`;
    dot.style.top = `${y + (Math.random() * 16 - 8)}px`;
    document.body.appendChild(dot);

    setTimeout(() => dot.remove(), 600);
  }

  // Floating background elements generator
  const floatingDecor = document.getElementById('floatingDecor');
  const bgIcons = ['🪂', '🍗', '🎂', '💖', '🤌', '✨', '🎈', '🍳', '👑'];
  for (let i = 0; i < 18; i++) {
    const el = document.createElement('div');
    el.className = 'floating-element';
    el.textContent = bgIcons[Math.floor(Math.random() * bgIcons.length)];
    el.style.left = `${Math.random() * 100}vw`;
    el.style.animationDuration = `${Math.random() * 12 + 12}s`;
    el.style.animationDelay = `${Math.random() * 8}s`;
    floatingDecor.appendChild(el);
  }

  /* ==========================================================================
     3. 3D TILT EFFECT FOR HERO CARD
     ========================================================================== */
  const heroCard = document.getElementById('heroCard');
  if (heroCard) {
    heroCard.addEventListener('mousemove', (e) => {
      const rect = heroCard.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / rect.height) * 22;
      const rotateY = (x / rect.width) * 22;
      heroCard.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    heroCard.addEventListener('mouseleave', () => {
      heroCard.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  }

  /* ==========================================================================
     4. HERO ACTION BUTTONS (FLARE GUN FIREWORKS, SCROLLS)
     ========================================================================== */
  const fireFlareBtn = document.getElementById('fireFlareGunBtn');
  fireFlareBtn.addEventListener('click', () => {
    sounds.play('flare');
    launchFireworksBurst();
  });

  const scrollDuaBtn = document.getElementById('scrollDuaBtn');
  scrollDuaBtn.addEventListener('click', () => {
    document.getElementById('dua').scrollIntoView({ behavior: 'smooth' });
  });

  const playGamesBtn = document.getElementById('playGamesBtn');
  playGamesBtn.addEventListener('click', () => {
    document.getElementById('games').scrollIntoView({ behavior: 'smooth' });
  });

  /* ==========================================================================
     5. SACRED DUA SECTION: INTERACTIVE AMEEN COUNTER
     ========================================================================== */
  const ameenBtn = document.getElementById('ameenBtn');
  const ameenCountEl = document.getElementById('ameenCount');
  const ameenNotice = document.getElementById('ameenNotice');
  let ameenCount = 777;

  ameenBtn.addEventListener('click', (e) => {
    ameenCount++;
    ameenCountEl.textContent = ameenCount;
    sounds.play('dua');

    // Spawn floating golden stars
    for (let i = 0; i < 8; i++) {
      spawnFloatingAmeen(e.clientX, e.clientY);
    }

    const messages = [
      'Ameen! May Allah shower endless barakah upon Aimen! 🌟',
      'Ameen! May all her prayers be answered with beautiful miracles! 🤲',
      'Ameen! May Aimen receive the highest happiness in life! ✨',
      'Ameen Summa Ameen! Naseeb boht boht acha ho! 💖'
    ];
    ameenNotice.textContent = messages[ameenCount % messages.length];
    ameenNotice.style.color = '#ffd700';
  });

  function spawnFloatingAmeen(x, y) {
    const star = document.createElement('div');
    star.textContent = ['🤲', '✨', '🌟', '💖', '🤲'][Math.floor(Math.random() * 5)];
    star.style.position = 'fixed';
    star.style.left = `${x + (Math.random() * 60 - 30)}px`;
    star.style.top = `${y + (Math.random() * 60 - 30)}px`;
    star.style.fontSize = '1.6rem';
    star.style.pointerEvents = 'none';
    star.style.zIndex = '9999';
    star.style.transition = 'all 1.2s cubic-bezier(0.1, 1, 0.1, 1)';
    document.body.appendChild(star);

    requestAnimationFrame(() => {
      star.style.transform = `translate(${(Math.random() * 80 - 40)}px, -120px) scale(1.4)`;
      star.style.opacity = '0';
    });

    setTimeout(() => star.remove(), 1200);
  }

  /* ==========================================================================
     6. POINTER REVEALING ANIMATION: 8X SCOPE MYSTERY ZONE
     ========================================================================== */
  const scopeContainer = document.getElementById('scopeContainer');
  const scopeCanvas = document.getElementById('scopeCanvas');
  const scopeCtx = scopeCanvas ? scopeCanvas.getContext('2d') : null;

  let scopeMouseX = 250, scopeMouseY = 200;
  let currentLens = 'scope'; // 'scope', 'torch', 'pookie'
  let isPointerOverScope = false;

  function resizeScopeCanvas() {
    if (!scopeCanvas || !scopeContainer) return;
    const rect = scopeContainer.getBoundingClientRect();
    scopeCanvas.width = rect.width;
    scopeCanvas.height = rect.height;
    drawScopeMask();
  }

  window.addEventListener('resize', resizeScopeCanvas);
  setTimeout(resizeScopeCanvas, 200);

  // Switch lens mode
  document.querySelectorAll('.lens-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.lens-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLens = btn.getAttribute('data-lens');
      sounds.play('coin');
      drawScopeMask();
    });
  });

  function updateScopePointer(clientX, clientY) {
    if (!scopeContainer) return;
    const rect = scopeContainer.getBoundingClientRect();
    scopeMouseX = clientX - rect.left;
    scopeMouseY = clientY - rect.top;
    drawScopeMask();
  }

  if (scopeContainer) {
    scopeContainer.addEventListener('mouseenter', () => isPointerOverScope = true);
    scopeContainer.addEventListener('mouseleave', () => {
      isPointerOverScope = false;
      drawScopeMask();
    });
    scopeContainer.addEventListener('mousemove', (e) => updateScopePointer(e.clientX, e.clientY));
    scopeContainer.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        updateScopePointer(e.touches[0].clientX, e.touches[0].clientY);
      }
    });
  }

  function drawScopeMask() {
    if (!scopeCtx || !scopeCanvas) return;
    const w = scopeCanvas.width;
    const h = scopeCanvas.height;

    // Clear and fill darkness
    scopeCtx.clearRect(0, 0, w, h);
    scopeCtx.fillStyle = 'rgba(7, 10, 16, 0.94)';
    scopeCtx.fillRect(0, 0, w, h);

    // If pointer is inside, cut out reveal aperture
    scopeCtx.save();
    scopeCtx.globalCompositeOperation = 'destination-out';

    const radius = currentLens === 'torch' ? 140 : (currentLens === 'pookie' ? 120 : 95);

    const radGrad = scopeCtx.createRadialGradient(
      scopeMouseX, scopeMouseY, radius * 0.1,
      scopeMouseX, scopeMouseY, radius
    );
    radGrad.addColorStop(0, 'rgba(0,0,0,1)');
    radGrad.addColorStop(0.75, 'rgba(0,0,0,0.95)');
    radGrad.addColorStop(1, 'rgba(0,0,0,0)');

    scopeCtx.fillStyle = radGrad;
    scopeCtx.beginPath();
    scopeCtx.arc(scopeMouseX, scopeMouseY, radius, 0, Math.PI * 2);
    scopeCtx.fill();
    scopeCtx.restore();

    // Draw HUD reticle / crosshairs overlay
    if (isPointerOverScope || true) {
      scopeCtx.save();
      if (currentLens === 'scope') {
        // PUBG 8X Scope Reticle
        scopeCtx.strokeStyle = '#00f0ff';
        scopeCtx.lineWidth = 1.5;

        // Outer scope ring
        scopeCtx.beginPath();
        scopeCtx.arc(scopeMouseX, scopeMouseY, 90, 0, Math.PI * 2);
        scopeCtx.stroke();

        // Crosshairs
        scopeCtx.beginPath();
        // Horizontals
        scopeCtx.moveTo(scopeMouseX - 100, scopeMouseY);
        scopeCtx.lineTo(scopeMouseX - 15, scopeMouseY);
        scopeCtx.moveTo(scopeMouseX + 15, scopeMouseY);
        scopeCtx.lineTo(scopeMouseX + 100, scopeMouseY);
        // Verticals
        scopeCtx.moveTo(scopeMouseX, scopeMouseY - 100);
        scopeCtx.lineTo(scopeMouseX, scopeMouseY - 15);
        scopeCtx.moveTo(scopeMouseX, scopeMouseY + 15);
        scopeCtx.lineTo(scopeMouseX, scopeMouseY + 100);
        scopeCtx.stroke();

        // Scope Markings (100m, 200m, 300m)
        scopeCtx.fillStyle = '#00f0ff';
        scopeCtx.font = '9px Orbitron';
        scopeCtx.fillText('8x AIMEN-LOCK', scopeMouseX - 40, scopeMouseY - 60);
        scopeCtx.fillText('100m', scopeMouseX + 20, scopeMouseY + 25);
        scopeCtx.fillText('200m', scopeMouseX + 20, scopeMouseY + 45);
        scopeCtx.fillText('300m', scopeMouseX + 20, scopeMouseY + 65);

        // Center dot
        scopeCtx.fillStyle = '#ff2d75';
        scopeCtx.beginPath();
        scopeCtx.arc(scopeMouseX, scopeMouseY, 3, 0, Math.PI * 2);
        scopeCtx.fill();

      } else if (currentLens === 'torch') {
        // Tactical Flashlight ring
        scopeCtx.strokeStyle = '#ffd700';
        scopeCtx.lineWidth = 2;
        scopeCtx.beginPath();
        scopeCtx.arc(scopeMouseX, scopeMouseY, 135, 0, Math.PI * 2);
        scopeCtx.stroke();

      } else if (currentLens === 'pookie') {
        // Pookie Heart Sparkle ring
        scopeCtx.strokeStyle = '#ff2d75';
        scopeCtx.lineWidth = 3;
        scopeCtx.beginPath();
        scopeCtx.arc(scopeMouseX, scopeMouseY, 115, 0, Math.PI * 2);
        scopeCtx.stroke();

        scopeCtx.fillStyle = '#ff758c';
        scopeCtx.font = '12px Orbitron';
        scopeCtx.fillText('💖 POOKIE RAY', scopeMouseX - 42, scopeMouseY - 80);
      }
      scopeCtx.restore();
    }
  }

  /* ==========================================================================
     7. MINI-GAMES ARCADE SYSTEM
     ========================================================================== */
  // Tabs switching
  const gameTabs = document.querySelectorAll('.game-tab-btn');
  const gamePanels = document.querySelectorAll('.game-panel');

  gameTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      gameTabs.forEach(t => t.classList.remove('active'));
      gamePanels.forEach(p => p.classList.add('hidden'));

      tab.classList.add('active');
      const targetId = tab.getAttribute('data-game');
      document.getElementById(targetId).classList.remove('hidden');
      sounds.play('coin');

      if (targetId === 'airdrop-game') {
        resizeAirdropCanvas();
      }
    });
  });

  // GAME 1: AIRDROP CATCH RUSH (CANVAS GAME)
  const airdropCanvas = document.getElementById('airdropCanvas');
  const airdropCtx = airdropCanvas ? airdropCanvas.getContext('2d') : null;
  const airdropScoreEl = document.getElementById('airdropScore');
  const airdropTimerEl = document.getElementById('airdropTimer');
  const airdropHighEl = document.getElementById('airdropHigh');
  const startAirdropBtn = document.getElementById('startAirdropGameBtn');
  const restartAirdropBtn = document.getElementById('restartAirdropBtn');
  const startScreen = document.getElementById('airdropStartScreen');
  const gameOverScreen = document.getElementById('airdropGameOverScreen');
  const finalScoreVal = document.getElementById('finalScoreVal');
  const rankEarnedVal = document.getElementById('rankEarnedVal');

  let airdropGameRunning = false;
  let airdropScore = 0;
  let airdropHighScore = parseInt(localStorage.getItem('aimen_airdrop_high') || '0', 10);
  let airdropTimeLeft = 30;
  let airdropInterval = null;
  let airdropItems = [];
  let airdropAnimationId = null;

  airdropHighEl.textContent = airdropHighScore;

  // Player Pan Object
  const playerPan = {
    x: 270,
    y: 330,
    width: 80,
    height: 25,
    speed: 8
  };

  function resizeAirdropCanvas() {
    if (!airdropCanvas) return;
    const rect = airdropCanvas.parentElement.getBoundingClientRect();
    airdropCanvas.width = rect.width;
    airdropCanvas.height = 380;
    playerPan.y = airdropCanvas.height - 45;
  }
  window.addEventListener('resize', resizeAirdropCanvas);
  resizeAirdropCanvas();

  // Mouse & Touch control for player pan
  if (airdropCanvas) {
    airdropCanvas.addEventListener('mousemove', (e) => {
      if (!airdropGameRunning) return;
      const rect = airdropCanvas.getBoundingClientRect();
      playerPan.x = e.clientX - rect.left - playerPan.width / 2;
    });

    airdropCanvas.addEventListener('touchmove', (e) => {
      if (!airdropGameRunning || e.touches.length === 0) return;
      const rect = airdropCanvas.getBoundingClientRect();
      playerPan.x = e.touches[0].clientX - rect.left - playerPan.width / 2;
    });
  }

  // Mobile button controls
  document.getElementById('moveLeftBtn').addEventListener('click', () => {
    playerPan.x = Math.max(10, playerPan.x - 45);
  });
  document.getElementById('moveRightBtn').addEventListener('click', () => {
    playerPan.x = Math.min(airdropCanvas.width - playerPan.width - 10, playerPan.x + 45);
  });

  // Start game
  startAirdropBtn.addEventListener('click', startAirdropGame);
  restartAirdropBtn.addEventListener('click', startAirdropGame);

  function startAirdropGame() {
    sounds.play('flare');
    airdropGameRunning = true;
    airdropScore = 0;
    airdropTimeLeft = 30;
    airdropItems = [];
    airdropScoreEl.textContent = '0';
    airdropTimerEl.textContent = '30s';

    startScreen.classList.add('hidden');
    gameOverScreen.classList.add('hidden');

    clearInterval(airdropInterval);
    airdropInterval = setInterval(() => {
      airdropTimeLeft--;
      airdropTimerEl.textContent = `${airdropTimeLeft}s`;
      if (airdropTimeLeft <= 0) {
        endAirdropGame();
      }
    }, 1000);

    cancelAnimationFrame(airdropAnimationId);
    airdropLoop();
  }

  function endAirdropGame() {
    airdropGameRunning = false;
    clearInterval(airdropInterval);
    cancelAnimationFrame(airdropAnimationId);

    sounds.play('chicken');

    if (airdropScore > airdropHighScore) {
      airdropHighScore = airdropScore;
      localStorage.setItem('aimen_airdrop_high', airdropHighScore.toString());
      airdropHighEl.textContent = airdropHighScore;
    }

    finalScoreVal.textContent = airdropScore;

    // Ranks based on score
    let rank = '👑 GRANDMASTER SIXTINO POOKIE';
    if (airdropScore > 1200) rank = '🔥 IMMORTAL POOKIE GODDESS (+1,000,000 AURA)';
    else if (airdropScore > 700) rank = '🍗 POCHINKI BIRTHDAY CHAMPION';
    else if (airdropScore > 300) rank = '🪖 LEVEL 3 BIRTHDAY SURVIVOR';

    rankEarnedVal.textContent = `RANK: ${rank}`;
    gameOverScreen.classList.remove('hidden');
    launchFireworksBurst();
  }

  function spawnGameItem() {
    if (!airdropGameRunning) return;
    const types = [
      { type: 'airdrop', emoji: '📦', score: 50, speed: 2.6, size: 30 },
      { type: 'chicken', emoji: '🍗', score: 100, speed: 3.2, size: 28 },
      { type: 'sixtino', emoji: '🤌', score: 150, speed: 3.6, size: 28 },
      { type: 'drink', emoji: '🥤', score: 30, speed: 2.8, size: 26 },
      { type: 'bomb', emoji: '💣', score: -50, speed: 3.4, size: 28 }
    ];

    const pick = types[Math.floor(Math.random() * types.length)];
    airdropItems.push({
      ...pick,
      x: Math.random() * (airdropCanvas.width - 40) + 10,
      y: -30
    });
  }

  let spawnTimer = 0;
  function airdropLoop() {
    if (!airdropGameRunning) return;

    airdropCtx.clearRect(0, 0, airdropCanvas.width, airdropCanvas.height);

    // Spawn falling item periodically
    spawnTimer++;
    if (spawnTimer % 28 === 0) {
      spawnGameItem();
    }

    // Keep player pan within canvas boundaries
    playerPan.x = Math.max(0, Math.min(airdropCanvas.width - playerPan.width, playerPan.x));

    // Draw Golden Pan (Player)
    airdropCtx.fillStyle = '#ffd700';
    airdropCtx.shadowColor = '#ffd700';
    airdropCtx.shadowBlur = 12;
    airdropCtx.beginPath();
    if (airdropCtx.roundRect) {
      airdropCtx.roundRect(playerPan.x, playerPan.y, playerPan.width, playerPan.height, 8);
    } else {
      airdropCtx.rect(playerPan.x, playerPan.y, playerPan.width, playerPan.height);
    }
    airdropCtx.fill();
    airdropCtx.shadowBlur = 0;

    // Pan handle & label
    airdropCtx.fillStyle = '#111';
    airdropCtx.font = 'bold 11px Orbitron';
    airdropCtx.textAlign = 'center';
    airdropCtx.fillText('AIMEN PAN', playerPan.x + playerPan.width / 2, playerPan.y + 16);

    // Update and draw falling items
    for (let i = airdropItems.length - 1; i >= 0; i--) {
      const item = airdropItems[i];
      item.y += item.speed;

      // Draw item
      airdropCtx.font = `${item.size}px Fredoka`;
      airdropCtx.textAlign = 'center';
      airdropCtx.fillText(item.emoji, item.x, item.y);

      // Collision detection with pan
      if (
        item.y >= playerPan.y - 10 &&
        item.y <= playerPan.y + playerPan.height &&
        item.x >= playerPan.x - 10 &&
        item.x <= playerPan.x + playerPan.width + 10
      ) {
        // Caught item!
        airdropScore = Math.max(0, airdropScore + item.score);
        airdropScoreEl.textContent = airdropScore;

        if (item.type === 'bomb') {
          sounds.play('bomb');
          // Screen flash red
          airdropCanvas.style.boxShadow = '0 0 30px #ff3344';
          setTimeout(() => airdropCanvas.style.boxShadow = '', 200);
        } else if (item.type === 'chicken') {
          sounds.play('chicken');
        } else if (item.type === 'sixtino') {
          sounds.play('sixtino');
        } else {
          sounds.play('pan');
        }

        airdropItems.splice(i, 1);
        continue;
      }

      // Remove items off-screen
      if (item.y > airdropCanvas.height + 30) {
        airdropItems.splice(i, 1);
      }
    }

    airdropAnimationId = requestAnimationFrame(airdropLoop);
  }

  // GAME 2: SIXTINO SEVENTINO SLOT MACHINE
  const spinSlotBtn = document.getElementById('spinSlotBtn');
  const reel1 = document.getElementById('reel1').querySelector('.reel-symbol');
  const reel2 = document.getElementById('reel2').querySelector('.reel-symbol');
  const reel3 = document.getElementById('reel3').querySelector('.reel-symbol');
  const slotTitle = document.getElementById('slotTitle');
  const slotDesc = document.getElementById('slotDesc');
  const jackpotVal = document.getElementById('jackpotVal');

  const slotSymbols = ['🤌', '🍗', '🪖', '💖', '🎁', '🍳', '👑', '🔥'];
  let isSpinning = false;
  let jackpot = 9999999;

  spinSlotBtn.addEventListener('click', () => {
    if (isSpinning) return;
    isSpinning = true;
    sounds.play('spin');

    document.querySelectorAll('.reel').forEach(r => r.classList.add('spinning'));
    slotTitle.textContent = 'ROLLING BRAINROT FORTUNE...';
    slotDesc.textContent = 'Calculating Aimen’s sixtino rizz and chicken dinner luck...';

    let spinsCount = 0;
    const spinInterval = setInterval(() => {
      reel1.textContent = slotSymbols[Math.floor(Math.random() * slotSymbols.length)];
      reel2.textContent = slotSymbols[Math.floor(Math.random() * slotSymbols.length)];
      reel3.textContent = slotSymbols[Math.floor(Math.random() * slotSymbols.length)];
      sounds.play('coin');
      spinsCount++;

      if (spinsCount >= 18) {
        clearInterval(spinInterval);
        document.querySelectorAll('.reel').forEach(r => r.classList.remove('spinning'));
        finalizeSlotSpin();
      }
    }, 90);
  });

  function finalizeSlotSpin() {
    isSpinning = false;
    // High chance of winning special combos
    const roll = Math.random();
    let s1, s2, s3;

    if (roll > 0.4) {
      // Guaranteed 3-of-a-kind jackpot!
      const jackOptions = ['🤌', '🍗', '💖', '👑'];
      const chosen = jackOptions[Math.floor(Math.random() * jackOptions.length)];
      s1 = s2 = s3 = chosen;
    } else {
      s1 = slotSymbols[Math.floor(Math.random() * slotSymbols.length)];
      s2 = slotSymbols[Math.floor(Math.random() * slotSymbols.length)];
      s3 = slotSymbols[Math.floor(Math.random() * slotSymbols.length)];
    }

    reel1.textContent = s1;
    reel2.textContent = s2;
    reel3.textContent = s3;

    jackpot += Math.floor(Math.random() * 50000 + 10000);
    jackpotVal.textContent = jackpot.toLocaleString();

    if (s1 === s2 && s2 === s3) {
      sounds.play('birthday');
      launchFireworksBurst();
      slotTitle.textContent = '🚨 JACKPOT! ULTRA SIXTINO VICTORY! 🚨';
      if (s1 === '🤌') {
        slotDesc.textContent = 'TRIPLE SIXTINO! Aimen has unlocked +999,999 Pookie Aura & Eternal Sigma Rizz! 🤌✨';
      } else if (s1 === '🍗') {
        slotDesc.textContent = 'TRIPLE CHICKEN DINNER! The squad bows before Aimen, the ultimate Pochinki queen! 🍗👑';
      } else if (s1 === '💖') {
        slotDesc.textContent = 'TRIPLE POOKIE HEARTS! May Allah keep Aimen surrounded by boundless love and sweetness! 💖🤲';
      } else {
        slotDesc.textContent = 'ROYAL BIRTHDAY OVERLOAD! All crates have fallen in Aimen’s backyard! 👑🎂';
      }
    } else {
      sounds.play('pan');
      slotTitle.textContent = '✨ NICE ROLL: CERTIFIED SIXTINO! ✨';
      slotDesc.textContent = 'Aimen gained +25,000 Pookie Points and 1 Free Flare Airdrop! Spin again for the Grand Jackpot!';
    }
  }

  // GAME 3: PAN THE BRAINROT (WHACK-A-MEME)
  const whackGrid = document.getElementById('whackGrid');
  const whackScoreEl = document.getElementById('whackScore');
  const whackTimerEl = document.getElementById('whackTimer');
  const whackClangsEl = document.getElementById('whackClangs');
  const startWhackBtn = document.getElementById('startWhackBtn');
  const whackHoles = document.querySelectorAll('.whack-hole');

  let whackScore = 0;
  let whackClangs = 0;
  let whackTimeLeft = 20;
  let whackGameRunning = false;
  let whackInterval = null;
  let molePopInterval = null;

  startWhackBtn.addEventListener('click', startWhackGame);

  function startWhackGame() {
    if (whackGameRunning) return;
    whackGameRunning = true;
    sounds.play('pan');
    whackScore = 0;
    whackClangs = 0;
    whackTimeLeft = 20;
    whackScoreEl.textContent = '0';
    whackClangsEl.textContent = '0';
    whackTimerEl.textContent = '20s';
    startWhackBtn.querySelector('span').textContent = 'GAME RUNNING... 🍳';

    clearInterval(whackInterval);
    clearInterval(molePopInterval);

    whackInterval = setInterval(() => {
      whackTimeLeft--;
      whackTimerEl.textContent = `${whackTimeLeft}s`;
      if (whackTimeLeft <= 0) {
        endWhackGame();
      }
    }, 1000);

    molePopInterval = setInterval(popRandomMole, 750);
  }

  function popRandomMole() {
    if (!whackGameRunning) return;
    const randomHole = whackHoles[Math.floor(Math.random() * whackHoles.length)];
    randomHole.classList.add('active');

    setTimeout(() => {
      randomHole.classList.remove('active');
    }, 600);
  }

  whackHoles.forEach(hole => {
    const target = hole.querySelector('.whack-target');
    target.addEventListener('click', (e) => {
      if (!whackGameRunning || !hole.classList.contains('active')) return;

      sounds.play('pan');
      whackClangs++;
      whackClangsEl.textContent = whackClangs;
      hole.classList.remove('active');

      const label = hole.querySelector('.target-label').textContent;
      if (label === 'Bomb') {
        whackScore = Math.max(0, whackScore - 15);
        sounds.play('bomb');
      } else {
        whackScore += 20;
      }
      whackScoreEl.textContent = whackScore;

      // Spawn pop hit text
      spawnHitFloatText(e.clientX, e.clientY, label === 'Bomb' ? '-15 💥' : '+20 BONK! 🍳');
    });
  });

  function endWhackGame() {
    whackGameRunning = false;
    clearInterval(whackInterval);
    clearInterval(molePopInterval);
    whackHoles.forEach(h => h.classList.remove('active'));
    sounds.play('chicken');
    launchFireworksBurst();
    startWhackBtn.querySelector('span').textContent = 'PLAY AGAIN 🔄';
    alert(`🎉 GG AIMEN! You finished with ${whackScore} Points and ${whackClangs} Golden Pan Clangs! Winner Winner Chicken Dinner! 🍗`);
  }

  function spawnHitFloatText(x, y, text) {
    const hit = document.createElement('div');
    hit.textContent = text;
    hit.style.position = 'fixed';
    hit.style.left = `${x}px`;
    hit.style.top = `${y}px`;
    hit.style.fontFamily = 'Orbitron, sans-serif';
    hit.style.fontSize = '1.1rem';
    hit.style.fontWeight = '900';
    hit.style.color = '#ffd700';
    hit.style.pointerEvents = 'none';
    hit.style.zIndex = '9999';
    hit.style.transition = 'all 0.6s ease-out';
    document.body.appendChild(hit);

    requestAnimationFrame(() => {
      hit.style.transform = 'translateY(-40px) scale(1.2)';
      hit.style.opacity = '0';
    });
    setTimeout(() => hit.remove(), 600);
  }

  /* ==========================================================================
     8. AIRDROP CRATE UNBOXING & LETTER MODAL
     ========================================================================== */
  const airdropBoxWrap = document.getElementById('airdropBoxWrap');
  const airdropCrate = document.getElementById('airdropCrate');
  const birthdayLetterModal = document.getElementById('birthdayLetter');
  const closeLetterBtn = document.getElementById('closeLetterBtn');
  const letterConfettiBtn = document.getElementById('letterConfettiBtn');

  if (airdropBoxWrap) {
    airdropBoxWrap.addEventListener('click', () => {
      sounds.play('airdrop');
      airdropCrate.classList.add('shaking');

      setTimeout(() => {
        sounds.play('flare');
      }, 500);

      setTimeout(() => {
        airdropCrate.classList.remove('shaking');
        sounds.play('birthday');
        launchFireworksBurst();
        birthdayLetterModal.classList.remove('hidden');
      }, 1000);
    });
  }

  if (closeLetterBtn) {
    closeLetterBtn.addEventListener('click', () => {
      birthdayLetterModal.classList.add('hidden');
      sounds.play('coin');
    });
  }

  if (letterConfettiBtn) {
    letterConfettiBtn.addEventListener('click', () => {
      sounds.play('birthday');
      launchFireworksBurst();
    });
  }

  /* ==========================================================================
     9. FIREWORKS & CONFETTI CANVAS ENGINE
     ========================================================================== */
  const ambientCanvas = document.getElementById('ambientCanvas');
  const ambientCtx = ambientCanvas ? ambientCanvas.getContext('2d') : null;
  let fireworksParticles = [];

  function resizeAmbientCanvas() {
    if (!ambientCanvas) return;
    ambientCanvas.width = window.innerWidth;
    ambientCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeAmbientCanvas);
  resizeAmbientCanvas();

  function launchFireworksBurst() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const colors = ['#ff2d75', '#00f0ff', '#ffd700', '#ff758c', '#ffffff', '#00ff88'];

    // Launch multiple bursts
    for (let b = 0; b < 3; b++) {
      const originX = w * (0.2 + b * 0.3);
      const originY = h * (0.25 + Math.random() * 0.3);

      for (let i = 0; i < 45; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 7 + 3;
        fireworksParticles.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: colors[Math.floor(Math.random() * colors.length)],
          radius: Math.random() * 3.5 + 2,
          alpha: 1,
          decay: Math.random() * 0.015 + 0.012
        });
      }
    }
  }

  function renderAmbient() {
    if (!ambientCtx || !ambientCanvas) return;
    ambientCtx.clearRect(0, 0, ambientCanvas.width, ambientCanvas.height);

    for (let i = fireworksParticles.length - 1; i >= 0; i--) {
      const p = fireworksParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.08; // Gravity
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        fireworksParticles.splice(i, 1);
        continue;
      }

      ambientCtx.save();
      ambientCtx.globalAlpha = p.alpha;
      ambientCtx.fillStyle = p.color;
      ambientCtx.shadowColor = p.color;
      ambientCtx.shadowBlur = 8;
      ambientCtx.beginPath();
      ambientCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ambientCtx.fill();
      ambientCtx.restore();
    }

    requestAnimationFrame(renderAmbient);
  }
  renderAmbient();

  /* ==========================================================================
     10. CINEMATIC LANDING PAGE INTRO REVEAL CONTROLLER
     ========================================================================== */
  const introOverlay = document.getElementById('introRevealOverlay');
  const introLaunchBtn = document.getElementById('introLaunchBtn');
  const skipIntroBtn = document.getElementById('skipIntroBtn');
  const replayIntroBtn = document.getElementById('replayIntroBtn');
  const introRocket = document.getElementById('introRocketShell');

  let isRevealing = false;
  document.body.classList.add('reveal-in-progress');

  function triggerSiteReveal() {
    if (isRevealing) return;
    isRevealing = true;

    // 1. Play gun/flare launch sound
    sounds.play('flare');
    if (introRocket) introRocket.classList.add('flying');
    if (introOverlay) introOverlay.classList.add('launching');

    // 2. High-speed flare rocket reaches apex
    setTimeout(() => {
      sounds.play('birthday');
      sounds.play('chicken');
      launchFireworksBurst();

      // Open high-tech blast shutters
      if (introOverlay) introOverlay.classList.add('open-shutters');
      document.body.classList.remove('reveal-in-progress');
      document.body.classList.add('revealed');

      // Softly start birthday background music
      if (!sounds.bgmPlaying) {
        sounds.toggleBGM();
      }
    }, 650);

    // 3. Fully dismiss overlay and clean up
    setTimeout(() => {
      if (introOverlay) introOverlay.classList.add('hidden');
      if (introRocket) introRocket.classList.remove('flying');
      isRevealing = false;
    }, 1400);
  }

  function skipSiteIntro() {
    if (introOverlay) {
      introOverlay.classList.add('open-shutters');
      introOverlay.classList.add('hidden');
    }
    document.body.classList.remove('reveal-in-progress');
    document.body.classList.add('revealed');
    sounds.play('coin');
    launchFireworksBurst();
  }

  function resetAndReplayIntro() {
    if (introOverlay) {
      introOverlay.classList.remove('hidden', 'launching', 'open-shutters');
      document.body.classList.add('reveal-in-progress');
      document.body.classList.remove('revealed');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      sounds.play('coin');
    }
  }

  if (introLaunchBtn) {
    introLaunchBtn.addEventListener('click', triggerSiteReveal);
  }

  if (skipIntroBtn) {
    skipIntroBtn.addEventListener('click', skipSiteIntro);
  }

  if (replayIntroBtn) {
    replayIntroBtn.addEventListener('click', resetAndReplayIntro);
  }

});

