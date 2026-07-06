import React, { useEffect, useRef, useState, useCallback } from "react";

const random = (min, max) => Math.random() * (max - min) + min;

const PEST_TYPES = [
  { name: "Cockroach", color: "#5a2d12", size: 24, speed: 1.0, points: 10 },
  { name: "Ant", color: "#111111", size: 16, speed: 1.5, points: 5 },
  { name: "Termite", color: "#d6b46a", size: 18, speed: 1.2, points: 8 },
  { name: "Rat", color: "#555555", size: 28, speed: 0.9, points: 15 },
];

const MAX_PESTS = 40;
const SPAWN_INTERVAL_BASE = 500;
const PEST_REACH_DIST = 85;
const HEALTH_DAMAGE = 5;
const WIN_SCORE = 200;
const WAVE_SCALE_SPEED = 0.5;

const DefendHomeGame = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const [score, setScore] = useState(0);
  const [health, setHealth] = useState(100);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [wave, setWave] = useState(1);
  const [survivalTime, setSurvivalTime] = useState(0);

  const pestsRef = useRef([]);
  const spraysRef = useRef([]);
  const particlesRef = useRef([]);
  const animRef = useRef(null);
  const spawnTimerRef = useRef(null);
  const timerStartRef = useRef(null);
  const frameRef = useRef(null);

  const resetGame = useCallback(() => {
    pestsRef.current = [];
    spraysRef.current = [];
    particlesRef.current = [];
    setScore(0);
    setHealth(100);
    setGameOver(false);
    setWin(false);
    setWave(1);
    setSurvivalTime(0);
    setGameStarted(false);

    if (spawnTimerRef.current) clearInterval(spawnTimerRef.current);
    if (animRef.current) cancelAnimationFrame(animRef.current);
    if (frameRef.current) clearInterval(frameRef.current);

    timerStartRef.current = null;
  }, []);

  const startGame = useCallback(() => {
    resetGame();
    setGameStarted(true);
    timerStartRef.current = Date.now();

    if (frameRef.current) clearInterval(frameRef.current);
    frameRef.current = setInterval(() => {
      setSurvivalTime(Math.floor((Date.now() - timerStartRef.current) / 1000));
    }, 1000);
  }, [resetGame]);

  useEffect(() => {
    if (!gameStarted) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const container = containerRef.current;

    const resize = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resize();
    window.addEventListener("resize", resize);

    const spawnPest = () => {
      if (gameOver || win || pestsRef.current.length >= MAX_PESTS) return;

      const side = Math.floor(random(0, 4));
      let x, y;
      const pad = 40;

      if (side === 0) {
        x = random(0, canvas.width);
        y = -pad;
      } else if (side === 1) {
        x = canvas.width + pad;
        y = random(0, canvas.height);
      } else if (side === 2) {
        x = random(0, canvas.width);
        y = canvas.height + pad;
      } else {
        x = -pad;
        y = random(0, canvas.height);
      }

      const isMobile = canvas.width < 640;
      const type = PEST_TYPES[Math.floor(random(0, PEST_TYPES.length))];

      pestsRef.current.push({
        id: Date.now() + Math.random(),
        x,
        y,
        type,
        size: (isMobile ? type.size * 0.75 : type.size) + random(-3, 4),
        speed: type.speed * (1 + (wave - 1) * WAVE_SCALE_SPEED),
        angle: 0,
        dead: false,
        opacity: 1,
      });
    };

    const spawnInterval = Math.max(200, SPAWN_INTERVAL_BASE - (wave - 1) * 20);
    spawnTimerRef.current = setInterval(spawnPest, spawnInterval);

    const drawBackground = () => {
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grad.addColorStop(0, "#052f32");
      grad.addColorStop(0.5, "#063b3f");
      grad.addColorStop(1, "#0b5a45");

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "rgba(255,255,255,0.05)";
      ctx.lineWidth = 1;

      const step = canvas.width < 640 ? 35 : 50;

      for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const drawHome = () => {
      const isMobile = canvas.width < 640;

      const cx = isMobile ? canvas.width * 0.5 : canvas.width * 0.78;
      const cy = isMobile ? canvas.height * 0.55 : canvas.height * 0.55;
      const scale = isMobile ? 0.55 : 1;

      const safe = health > 50;

      ctx.save();
      ctx.shadowBlur = isMobile ? 20 : 40;
      ctx.shadowColor = safe ? "#7ac943" : "#ff3333";
      ctx.fillStyle = safe ? "#7ac943" : "#ff4d4d";

      ctx.beginPath();
      ctx.moveTo(cx, cy - 110 * scale);
      ctx.lineTo(cx - 140 * scale, cy + 5 * scale);
      ctx.lineTo(cx - 110 * scale, cy + 5 * scale);
      ctx.lineTo(cx - 110 * scale, cy + 110 * scale);
      ctx.lineTo(cx + 110 * scale, cy + 110 * scale);
      ctx.lineTo(cx + 110 * scale, cy + 5 * scale);
      ctx.lineTo(cx + 140 * scale, cy + 5 * scale);
      ctx.closePath();
      ctx.fill();

      ctx.shadowBlur = 0;

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(cx - 30 * scale, cy + 35 * scale, 60 * scale, 75 * scale);

      ctx.fillStyle = "#063b3f";
      ctx.fillRect(cx - 80 * scale, cy + 20 * scale, 40 * scale, 38 * scale);
      ctx.fillRect(cx + 40 * scale, cy + 20 * scale, 40 * scale, 38 * scale);

      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.font = `bold ${isMobile ? 12 : 20}px Arial`;
      ctx.fillText("ACUITY", cx, cy - 12 * scale);

      ctx.font = `${isMobile ? 10 : 14}px Arial`;
      ctx.fillText("PROTECTED HOME", cx, cy + 152 * scale);

      ctx.restore();
    };

    const drawPest = (pest) => {
      ctx.save();
      ctx.translate(pest.x, pest.y);
      ctx.rotate(pest.angle);
      ctx.globalAlpha = pest.opacity;

      const s = pest.size;

      if (pest.type.name === "Cockroach") {
        const body = ctx.createRadialGradient(0, -s * 0.2, s * 0.2, 0, 0, s);
        body.addColorStop(0, "#8b3f16");
        body.addColorStop(0.7, "#3b1608");
        body.addColorStop(1, "#120703");

        ctx.fillStyle = body;
        ctx.beginPath();
        ctx.ellipse(0, 0, s * 0.55, s * 1.25, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#1b0903";
        ctx.beginPath();
        ctx.arc(0, -s * 1.05, s * 0.35, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "#160802";
        ctx.lineWidth = 2;

        for (let i = -1; i <= 1; i++) {
          ctx.beginPath();
          ctx.moveTo(-s * 0.35, i * s * 0.35);
          ctx.lineTo(-s * 1.15, i * s * 0.65);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(s * 0.35, i * s * 0.35);
          ctx.lineTo(s * 1.15, i * s * 0.65);
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.moveTo(-s * 0.15, -s * 1.2);
        ctx.lineTo(-s * 0.7, -s * 1.8);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(s * 0.15, -s * 1.2);
        ctx.lineTo(s * 0.7, -s * 1.8);
        ctx.stroke();
      } else if (pest.type.name === "Ant") {
        ctx.fillStyle = "#070707";

        [-0.7, 0, 0.7].forEach((pos) => {
          ctx.beginPath();
          ctx.ellipse(0, pos * s, s * 0.35, s * 0.42, 0, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.strokeStyle = "#050505";
        ctx.lineWidth = 1.5;

        for (let i = -1; i <= 1; i++) {
          ctx.beginPath();
          ctx.moveTo(-s * 0.2, i * s * 0.25);
          ctx.lineTo(-s * 0.9, i * s * 0.55);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(s * 0.2, i * s * 0.25);
          ctx.lineTo(s * 0.9, i * s * 0.55);
          ctx.stroke();
        }
      } else if (pest.type.name === "Termite") {
        const body = ctx.createLinearGradient(0, -s, 0, s);
        body.addColorStop(0, "#f2d58a");
        body.addColorStop(1, "#9b6a2d");

        ctx.fillStyle = body;
        ctx.beginPath();
        ctx.ellipse(0, 0, s * 0.45, s * 1.05, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#7a4a20";
        ctx.beginPath();
        ctx.arc(0, -s * 0.9, s * 0.32, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "#6b3d1b";
        ctx.lineWidth = 1.5;

        for (let i = -1; i <= 1; i++) {
          ctx.beginPath();
          ctx.moveTo(-s * 0.25, i * s * 0.28);
          ctx.lineTo(-s * 0.95, i * s * 0.55);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(s * 0.25, i * s * 0.28);
          ctx.lineTo(s * 0.95, i * s * 0.55);
          ctx.stroke();
        }
      } else if (pest.type.name === "Rat") {
        const body = ctx.createLinearGradient(-s, 0, s, 0);
        body.addColorStop(0, "#3f3f3f");
        body.addColorStop(0.5, "#777");
        body.addColorStop(1, "#222");

        ctx.fillStyle = body;
        ctx.beginPath();
        ctx.ellipse(0, 0, s * 1.25, s * 0.7, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#2b2b2b";
        ctx.beginPath();
        ctx.arc(s * 0.95, -s * 0.15, s * 0.38, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#111";
        ctx.beginPath();
        ctx.arc(s * 1.15, -s * 0.22, 2.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "#b0b0b0";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(-s * 1.1, s * 0.1);
        ctx.quadraticCurveTo(-s * 2.1, s * 0.9, -s * 2.5, s * 0.1);
        ctx.stroke();
      }

      ctx.restore();
    };

    const drawSprays = () => {
      spraysRef.current.forEach((s, i) => {
        ctx.save();
        ctx.globalAlpha = s.opacity;

        const grad = ctx.createRadialGradient(s.x, s.y, 5, s.x, s.y, s.radius);
        grad.addColorStop(0, "rgba(255,255,255,0.9)");
        grad.addColorStop(0.4, "rgba(122,201,67,0.6)");
        grad.addColorStop(1, "rgba(122,201,67,0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        s.radius += 5;
        s.opacity -= 0.03;

        if (s.opacity <= 0) spraysRef.current.splice(i, 1);
      });
    };

    const drawParticles = () => {
      particlesRef.current.forEach((p, i) => {
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        p.x += p.vx;
        p.y += p.vy;
        p.opacity -= 0.025;
        p.size *= 0.99;

        if (p.opacity <= 0) particlesRef.current.splice(i, 1);
      });
    };

    const animate = () => {
      drawBackground();
      drawHome();

      const isMobile = canvas.width < 640;
      const homeX = isMobile ? canvas.width * 0.5 : canvas.width * 0.78;
      const homeY = canvas.height * 0.55;

      pestsRef.current.forEach((pest, index) => {
        const dx = homeX - pest.x;
        const dy = homeY - pest.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        pest.angle =
          Math.atan2(dy, dx) +
          Math.PI / 2 +
          Math.sin(Date.now() * 0.004 + pest.x * 0.02) * 0.05;

        if (!pest.dead) {
          const speed = pest.speed * (1 + (wave - 1) * WAVE_SCALE_SPEED);
          pest.x += (dx / dist) * speed;
          pest.y += (dy / dist) * speed;
        }

        if (dist < PEST_REACH_DIST && !pest.dead) {
          pestsRef.current.splice(index, 1);

          setHealth((prev) => {
            const next = Math.max(prev - HEALTH_DAMAGE, 0);
            if (next <= 0) setGameOver(true);
            return next;
          });

          return;
        }

        if (pest.dead) {
          pest.opacity -= 0.04;
          pest.y -= 1.2;
        }

        if (pest.opacity <= 0) {
          pestsRef.current.splice(index, 1);
          return;
        }

        drawPest(pest);
      });

      drawSprays();
      drawParticles();

      if (score >= WIN_SCORE && !win && !gameOver) {
        setWin(true);
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleHit = (x, y) => {
      if (gameOver || win) return;

      spraysRef.current.push({ x, y, radius: 30, opacity: 1 });

      pestsRef.current.forEach((pest) => {
        const dx = pest.x - x;
        const dy = pest.y - y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 90 && !pest.dead) {
          pest.dead = true;
          setScore((prev) => prev + pest.type.points);

          for (let i = 0; i < 20; i++) {
            particlesRef.current.push({
              x: pest.x,
              y: pest.y,
              vx: random(-6, 6),
              vy: random(-6, 6),
              size: random(2, 6),
              opacity: 1,
              color: Math.random() > 0.5 ? "#7ac943" : "#ffffff",
            });
          }
        }
      });
    };

    const onCanvasClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      handleHit(x, y);
    };

    const onCanvasTouch = (e) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      handleHit(x, y);
    };

    canvas.addEventListener("click", onCanvasClick);
    canvas.addEventListener("touchstart", onCanvasTouch, { passive: false });

    return () => {
      clearInterval(spawnTimerRef.current);
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("click", onCanvasClick);
      canvas.removeEventListener("touchstart", onCanvasTouch);
      if (frameRef.current) clearInterval(frameRef.current);
    };
  }, [gameStarted, gameOver, win, score, health, wave]);

  return (
    <section
      className="relative w-full h-[75vh] sm:h-[85vh] lg:h-screen bg-[#063b3f] overflow-hidden rounded-xl sm:rounded-none"
      ref={containerRef}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-crosshair touch-none"
      />

      {gameStarted && (
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 text-white pointer-events-none z-10">
          <div className="bg-black/50 backdrop-blur-sm px-3 sm:px-5 py-2 rounded-2xl sm:rounded-full flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <span className="font-bold">🏆 {score}</span>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <span className="font-bold">❤️ {health}%</span>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <span className="font-bold">🌊 {wave}</span>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <span className="font-bold">⏱️ {survivalTime}s</span>
          </div>

          <div className="bg-black/50 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs text-gray-300 pointer-events-auto text-center">
            🖱️ Click / Tap to Spray
          </div>
        </div>
      )}

      {!gameStarted && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-20 px-4">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-5 sm:p-8 max-w-md w-full text-white text-center border border-white/20">
            <span className="text-5xl sm:text-6xl block mb-4">🏡</span>

            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Defend Your Home
            </h2>

            <p className="text-gray-300 text-xs sm:text-sm mb-6 leading-relaxed">
              Pests are attacking! Click or tap to spray them before they reach
              your home.
              <br />
              <span className="inline-block mt-2 bg-green-500/20 px-3 py-1 rounded-full text-xs">
                🎯 Score {WIN_SCORE} to win
              </span>
            </p>

            <button
              onClick={startGame}
              className="bg-green-500 hover:bg-green-400 text-black font-bold px-7 sm:px-8 py-3 rounded-full transition text-sm sm:text-base"
            >
              Start Game
            </button>
          </div>
        </div>
      )}

      {win && gameStarted && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-30 px-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl animate-pulse">
            <div className="text-7xl animate-bounce mb-4">💥</div>

            <h1 className="text-5xl font-black text-red-600">BOOM!!</h1>

            <h2 className="text-3xl font-black text-green-700 mt-2">
              YOU WON!
            </h2>

            <p className="text-gray-600 mt-4">
              The pests have been defeated...
            </p>

            <p className="text-gray-500">Unlocking Secret Reward...</p>

            <div className="mt-8 border-2 border-dashed border-green-600 rounded-2xl p-6 bg-green-50">
              <p className="text-gray-600">🎁 Secret Reward</p>

              <h2 className="text-5xl font-black text-green-700 mt-2">
                5% OFF
              </h2>

              <p className="mt-4 text-gray-600">Coupon Code</p>

              <div className="mt-2 bg-white rounded-xl py-3 border text-2xl font-black tracking-[5px] text-green-700">
                PEST5WIN
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={startGame}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-bold"
              >
                🔄 Play Again
              </button>

              <a
                href="https://wa.me/919941229005?text=Hi%20I%20won%20the%205%25%20coupon%20from%20your%20game."
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-bold"
              >
                🎁 Claim
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DefendHomeGame;
