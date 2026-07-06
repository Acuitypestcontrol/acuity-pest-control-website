import React, { useEffect, useRef, useState, useCallback } from "react";

const random = (min, max) => Math.random() * (max - min) + min;

const SPECIES = [
  { type: "roach", speed: 1.2, r: 16, points: 5, color: "#3d2b1f" },
  { type: "ant", speed: 1.8, r: 9, points: 3, color: "#1a1a1a" },
  { type: "mosquito", speed: 2.4, r: 10, points: 8, color: "#5c4a70" },
  { type: "spider", speed: 1.0, r: 14, points: 10, color: "#2d1b0e" },
  { type: "fly", speed: 2.8, r: 8, points: 4, color: "#1f3a3f" },
  { type: "beetle", speed: 0.8, r: 18, points: 12, color: "#1a2a1a" },
];

const TARGET = 50;
const MAX_BUGS = 18;

const BugSquash = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const spawnTimerRef = useRef(0);

  const [squashed, setSquashed] = useState(0);
  const [score, setScore] = useState(0);
  const [infestation, setInfestation] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [wave, setWave] = useState(1);
  const [completed, setCompleted] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [survivalTime, setSurvivalTime] = useState(0);

  const bugsRef = useRef([]);
  const splatsRef = useRef([]);
  const particlesRef = useRef([]);
  const timerStartRef = useRef(null);
  const frameRef = useRef(null);

  const resetGame = useCallback(() => {
    bugsRef.current = [];
    splatsRef.current = [];
    particlesRef.current = [];
    spawnTimerRef.current = 0;

    setSquashed(0);
    setScore(0);
    setInfestation(0);
    setCombo(0);
    setMaxCombo(0);
    setWave(1);
    setCompleted(false);
    setGameStarted(false);
    setSurvivalTime(0);

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

  const spawnBug = useCallback(
    (canvas) => {
      if (bugsRef.current.length >= MAX_BUGS) return;

      const isMobile = canvas.width < 640;
      const species = SPECIES[Math.floor(random(0, SPECIES.length))];
      const edge = Math.floor(random(0, 4));

      let x, y;
      const pad = 30;

      if (edge === 0) {
        x = random(0, canvas.width);
        y = -pad;
      } else if (edge === 1) {
        x = canvas.width + pad;
        y = random(0, canvas.height);
      } else if (edge === 2) {
        x = random(0, canvas.width);
        y = canvas.height + pad;
      } else {
        x = -pad;
        y = random(0, canvas.height);
      }

      const speedMult = 1 + (wave - 1) * 0.12;
      const angle = random(0, Math.PI * 2);
      const baseSpeed = species.speed * speedMult;

      bugsRef.current.push({
        id: Math.random().toString(36).slice(2),
        x,
        y,
        vx: Math.cos(angle) * baseSpeed * random(0.7, 1.3),
        vy: Math.sin(angle) * baseSpeed * random(0.7, 1.3),
        wiggle: random(0, Math.PI * 2),
        alive: true,
        squishing: 0,
        ...species,
        r: isMobile ? species.r * 0.85 : species.r,
      });
    },
    [wave]
  );

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

    const drawRoom = () => {
      const cleanValue = infestation / 100;
      const bg = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

      bg.addColorStop(0, "#052f32");
      bg.addColorStop(1, "#0b5a45");

      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = `rgba(255,255,255,${0.03 + cleanValue * 0.07})`;

      const grid = canvas.width < 640 ? 32 : 45;

      for (let x = 0; x < canvas.width; x += grid) {
        ctx.fillRect(x, 0, 1, canvas.height);
      }

      for (let y = 0; y < canvas.height; y += grid) {
        ctx.fillRect(0, y, canvas.width, 1);
      }

      ctx.fillStyle = `rgba(122,201,67,${cleanValue * 0.08})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawBug = (b) => {
      ctx.save();
      ctx.translate(b.x, b.y);
      ctx.rotate(Math.atan2(b.vy, b.vx));

      if (b.squishing > 0) {
        ctx.globalAlpha = Math.max(0, 1 - b.squishing * 1.6);
        ctx.scale(1 + b.squishing * 0.8, 1 - b.squishing * 0.6);
      }

      ctx.fillStyle = b.color || "#333";
      ctx.beginPath();
      ctx.ellipse(0, 0, b.r, b.r * 0.55, 0, 0, Math.PI * 2);
      ctx.fill();

      if (b.type === "roach") {
        ctx.strokeStyle = "rgba(0,0,0,0.4)";
        ctx.lineWidth = 1.5;

        for (let i = -1; i <= 1; i += 1) {
          ctx.beginPath();
          ctx.moveTo(-b.r * 0.2, i * b.r * 0.4);
          ctx.lineTo(-b.r * 1.1, i * b.r * 0.9);
          ctx.stroke();
        }

        ctx.strokeStyle = "rgba(200,150,100,0.5)";
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.moveTo(-b.r * 0.1, -b.r * 0.3);
        ctx.lineTo(-b.r * 1.2, -b.r * 0.8);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(b.r * 0.1, -b.r * 0.3);
        ctx.lineTo(b.r * 1.2, -b.r * 0.8);
        ctx.stroke();
      } else if (b.type === "mosquito") {
        ctx.strokeStyle = "rgba(255,255,255,0.6)";
        ctx.lineWidth = 1.2;

        ctx.beginPath();
        ctx.moveTo(0, -b.r * 0.4);
        ctx.lineTo(b.r * 1.6, -b.r * 1.4);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, b.r * 0.4);
        ctx.lineTo(b.r * 1.6, b.r * 1.4);
        ctx.stroke();

        ctx.fillStyle = "rgba(255,200,200,0.3)";
        ctx.beginPath();
        ctx.arc(b.r * 0.6, -b.r * 0.3, b.r * 0.5, 0, Math.PI * 2);
        ctx.fill();
      } else if (b.type === "spider") {
        ctx.strokeStyle = "rgba(0,0,0,0.3)";
        ctx.lineWidth = 1;

        for (let i = 0; i < 8; i++) {
          const angle = (i / 8) * Math.PI * 2;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(
            Math.cos(angle) * b.r * 1.6,
            Math.sin(angle) * b.r * 1.6
          );
          ctx.stroke();
        }

        ctx.fillStyle = "#1a0e08";
        ctx.beginPath();
        ctx.arc(0, 0, b.r * 0.4, 0, Math.PI * 2);
        ctx.fill();
      } else if (b.type === "fly") {
        ctx.fillStyle = "rgba(200,230,255,0.25)";

        ctx.beginPath();
        ctx.ellipse(
          -b.r * 0.4,
          -b.r * 0.2,
          b.r * 0.8,
          b.r * 0.3,
          -0.3,
          0,
          Math.PI * 2
        );
        ctx.fill();

        ctx.beginPath();
        ctx.ellipse(
          b.r * 0.4,
          -b.r * 0.2,
          b.r * 0.8,
          b.r * 0.3,
          0.3,
          0,
          Math.PI * 2
        );
        ctx.fill();

        ctx.fillStyle = "#ff3b3b";

        ctx.beginPath();
        ctx.arc(-b.r * 0.25, -b.r * 0.15, b.r * 0.15, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(b.r * 0.25, -b.r * 0.15, b.r * 0.15, 0, Math.PI * 2);
        ctx.fill();
      } else if (b.type === "beetle") {
        ctx.strokeStyle = "rgba(0,0,0,0.3)";
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.moveTo(0, -b.r * 0.4);
        ctx.lineTo(0, b.r * 0.4);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(-b.r * 0.3, 0);
        ctx.lineTo(b.r * 0.3, 0);
        ctx.stroke();

        ctx.strokeStyle = "rgba(0,0,0,0.3)";
        ctx.lineWidth = 1.5;

        for (let i = -1; i <= 1; i++) {
          ctx.beginPath();
          ctx.moveTo(-b.r * 0.2, i * b.r * 0.3);
          ctx.lineTo(-b.r * 1.0, i * b.r * 0.7);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(b.r * 0.2, i * b.r * 0.3);
          ctx.lineTo(b.r * 1.0, i * b.r * 0.7);
          ctx.stroke();
        }
      }

      ctx.restore();
    };

    const drawParticles = () => {
      particlesRef.current.forEach((p, i) => {
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.08;
        p.opacity -= 0.025;
        p.size *= 0.98;

        if (p.opacity <= 0) particlesRef.current.splice(i, 1);
      });
    };

    const drawSplats = () => {
      splatsRef.current.forEach((s, i) => {
        ctx.save();
        ctx.globalAlpha = s.opacity;
        ctx.fillStyle = "rgba(122,201,67,0.5)";
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#7ac943";

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(255,255,255,0.2)";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 0.4, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        s.opacity -= 0.02;
        s.r += 0.5;

        if (s.opacity <= 0) splatsRef.current.splice(i, 1);
      });
    };

    const drawMeter = () => {
      const isMobile = canvas.width < 640;

      const w = isMobile ? canvas.width * 0.72 : canvas.width * 0.4;
      const h = isMobile ? 18 : 22;
      const x = canvas.width / 2 - w / 2;
      const y = isMobile ? 78 : 20;

      ctx.fillStyle = "rgba(0,0,0,0.6)";
      ctx.beginPath();
      ctx.roundRect(x - 6, y - 6, w + 12, h + 12, 12);
      ctx.fill();

      const fillW = (w * infestation) / 100;
      const grad = ctx.createLinearGradient(x, y, x + w, y);

      grad.addColorStop(0, "#ff3333");
      grad.addColorStop(0.4, "#ffcc00");
      grad.addColorStop(0.7, "#7ac943");
      grad.addColorStop(1, "#3dff7a");

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(x, y, Math.max(fillW, 8), h, 10);
      ctx.fill();

      ctx.fillStyle = "white";
      ctx.font = `bold ${isMobile ? 10 : 12}px Arial`;
      ctx.textAlign = "center";
      ctx.fillText(`CLEAN ${infestation}%`, x + w / 2, y - 10);
      ctx.textAlign = "left";
    };

    const drawHUD = () => {
      const isMobile = canvas.width < 640;
      const margin = isMobile ? 8 : 16;
      const boxW = isMobile ? 132 : 160;
      const boxH = isMobile ? 66 : 80;

      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.beginPath();
      ctx.roundRect(margin, margin, boxW, boxH, 12);
      ctx.fill();

      ctx.fillStyle = "white";
      ctx.font = `bold ${isMobile ? 11 : 14}px Arial`;
      ctx.textAlign = "left";

      ctx.fillText(`🐜 ${squashed} / ${TARGET}`, margin + 12, margin + 22);
      ctx.fillText(`⭐ ${score} pts`, margin + 12, margin + 42);
      ctx.fillText(`🌊 Wave ${wave}`, margin + 12, margin + 62);

      if (combo > 2) {
        const comboW = isMobile ? 100 : 120;
        const comboX = canvas.width - comboW - margin;

        ctx.fillStyle = "rgba(255,204,0,0.2)";
        ctx.beginPath();
        ctx.roundRect(comboX, margin, comboW, 36, 12);
        ctx.fill();

        ctx.fillStyle = "#ffcc00";
        ctx.font = `bold ${isMobile ? 13 : 18}px Arial`;
        ctx.textAlign = "center";
        ctx.fillText(`🔥 x${combo}`, comboX + comboW / 2, margin + 24);
        ctx.textAlign = "left";
      }
    };

    const step = () => {
      if (completed) return;

      spawnTimerRef.current += 1;

      const isMobile = canvas.width < 640;
      const spawnRate = Math.max(
        isMobile ? 16 : 12,
        40 - wave * 2 - squashed * 0.3
      );

      if (
        spawnTimerRef.current > spawnRate &&
        bugsRef.current.length < MAX_BUGS
      ) {
        spawnBug(canvas);
        spawnTimerRef.current = 0;
      }

      bugsRef.current.forEach((b) => {
        if (b.squishing > 0) {
          b.squishing += 0.08;
          return;
        }

        b.wiggle += 0.15;
        b.x += b.vx + Math.sin(b.wiggle) * 0.5;
        b.y += b.vy + Math.cos(b.wiggle) * 0.5;

        if (b.x < -40 || b.x > canvas.width + 40) b.vx *= -1;
        if (b.y < -40 || b.y > canvas.height + 40) b.vy *= -1;
      });

      bugsRef.current = bugsRef.current.filter((b) => b.squishing < 1);
    };

    const animate = () => {
      drawRoom();
      step();
      bugsRef.current.forEach(drawBug);
      drawSplats();
      drawParticles();
      drawMeter();
      drawHUD();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleHit = (clientX, clientY) => {
      if (completed) return;

      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      let hit = false;

      bugsRef.current.forEach((b) => {
        if (b.squishing > 0) return;

        const dx = b.x - x;
        const dy = b.y - y;

        if (Math.sqrt(dx * dx + dy * dy) < b.r + 18) {
          b.squishing = 0.01;
          hit = true;

          splatsRef.current.push({
            x: b.x,
            y: b.y,
            r: b.r * 1.6,
            opacity: 0.9,
          });

          const colors = ["#7ac943", "#ffcc00", "#ff6b6b", "#ffffff"];

          for (let i = 0; i < 22; i++) {
            const angle = random(0, Math.PI * 2);
            const speed = random(1, 6);

            particlesRef.current.push({
              x: b.x,
              y: b.y,
              vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed - 1,
              size: random(2, 6),
              opacity: 1,
              color: colors[Math.floor(random(0, colors.length))],
            });
          }

          setSquashed((prev) => {
            const next = prev + 1;
            const pct = Math.min(100, Math.round((next / TARGET) * 100));

            setInfestation(pct);

            if (next % 10 === 0 && next > 0) {
              setWave((w) => w + 1);
            }

            if (next >= TARGET) setCompleted(true);

            return next;
          });

          const comboBonus = Math.floor(combo / 3) * 2;
          setScore((prev) => prev + b.points + comboBonus);

          setCombo((prev) => {
            const next = prev + 1;
            if (next > maxCombo) setMaxCombo(next);
            return next;
          });
        }
      });

      if (!hit) {
        setCombo(0);
      }
    };

    const handleClick = (e) => {
      handleHit(e.clientX, e.clientY);
    };

    const handleTouch = (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      handleHit(touch.clientX, touch.clientY);
    };

    canvas.addEventListener("click", handleClick);
    canvas.addEventListener("touchstart", handleTouch, { passive: false });

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("click", handleClick);
      canvas.removeEventListener("touchstart", handleTouch);
      if (frameRef.current) clearInterval(frameRef.current);
    };
  }, [
    gameStarted,
    completed,
    squashed,
    combo,
    maxCombo,
    score,
    infestation,
    wave,
    spawnBug,
  ]);

  return (
    <section
      className="relative w-full h-[75vh] sm:h-[85vh] lg:h-screen bg-[#063b3f] overflow-hidden rounded-xl sm:rounded-none"
      ref={containerRef}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-crosshair touch-none"
      />

      {completed && gameStarted && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-30 px-4">
          <div className="bg-white rounded-3xl p-5 sm:p-8 max-w-md w-full text-center shadow-2xl">
            <span className="text-5xl sm:text-6xl block mb-3">🏆</span>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              Home Secured!
            </h2>

            <p className="text-gray-600 text-sm mb-4">
              Every pest has been eliminated.
            </p>

            <div className="bg-gray-50 rounded-xl p-4 mb-6 text-sm space-y-1 text-gray-700">
              <p>
                🐜 Squashes: <strong>{squashed}</strong>
              </p>
              <p>
                ⭐ Score: <strong>{score}</strong>
              </p>
              <p>
                🔥 Max Combo: <strong>x{maxCombo}</strong>
              </p>
              <p>
                🌊 Waves Survived: <strong>{wave}</strong>
              </p>
              <p>
                ⏱️ Time: <strong>{survivalTime}s</strong>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={startGame}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-bold transition"
              >
                🔄 Play Again
              </button>

              <a
                href="tel:+919941229005"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-full font-bold transition"
              >
                📞 Book Inspection
              </a>
            </div>
          </div>
        </div>
      )}

      {!gameStarted && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-20 px-4">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-5 sm:p-8 max-w-md w-full text-white text-center border border-white/20">
            <span className="text-5xl sm:text-6xl block mb-4">🪳</span>

            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Bug Squash Challenge
            </h2>

            <p className="text-gray-300 text-xs sm:text-sm mb-6 leading-relaxed">
              Squash all {TARGET} pests to clear the infestation!
              <br />
              <span className="inline-block mt-2 bg-green-500/20 px-3 py-1 rounded-full text-xs">
                🔥 Combo streaks = bonus points
              </span>
              <br />
              <span className="inline-block mt-1 bg-blue-500/20 px-3 py-1 rounded-full text-xs">
                🌊 Wave {Math.ceil(TARGET / 10)} – gets harder as you progress
              </span>
            </p>

            <button
              onClick={startGame}
              className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-3 rounded-full transition text-sm sm:text-base"
            >
              Start Game
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default BugSquash;