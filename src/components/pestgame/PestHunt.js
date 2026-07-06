import React, { useEffect, useRef, useState } from "react";

const PestHunt = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const timerRef = useRef(null);

  const spotsRef = useRef([]);
  const pestRef = useRef(null);
  const spraysRef = useRef([]);
  const particlesRef = useRef([]);

  const [score, setScore] = useState(0);
  const [escaped, setEscaped] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const resetGame = () => {
    pestRef.current = null;
    spraysRef.current = [];
    particlesRef.current = [];
    setScore(0);
    setEscaped(0);
    setUnlocked(false);
    setGameStarted(false);
  };

  const startGame = () => {
    resetGame();
    setGameStarted(true);
  };

  useEffect(() => {
    if (!gameStarted) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      spotsRef.current = [
        { name: "Sofa", x: canvas.width * 0.62, y: canvas.height * 0.72 },
        { name: "Cupboard", x: canvas.width * 0.82, y: canvas.height * 0.35 },
        { name: "Sink", x: canvas.width * 0.55, y: canvas.height * 0.38 },
        { name: "Dustbin", x: canvas.width * 0.78, y: canvas.height * 0.72 },
        { name: "Wall Crack", x: canvas.width * 0.92, y: canvas.height * 0.55 },
      ];
    };

    resize();
    window.addEventListener("resize", resize);

    const spawnPest = () => {
      if (pestRef.current || unlocked) return;

      const spot =
        spotsRef.current[Math.floor(Math.random() * spotsRef.current.length)];

      pestRef.current = {
        x: spot.x,
        y: spot.y,
        spot,
        progress: 0,
        state: "peek",
        timer: 0,
        opacity: 1,
        type: Math.random() > 0.55 ? "cockroach" : "rat",
      };
    };

    timerRef.current = setInterval(spawnPest, 800);

    const drawRoom = () => {
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height,
      );
      gradient.addColorStop(0, "#052f32");
      gradient.addColorStop(1, "#0b5a45");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() / 10000;
      ctx.strokeStyle = "rgba(255,255,255,0.04)";
      ctx.lineWidth = 1;
      const step = canvas.width < 640 ? 40 : 60;

      for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x + Math.sin(time + x * 0.01) * 3, 0);
        ctx.lineTo(x + Math.sin(time + x * 0.01) * 3, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y + Math.cos(time + y * 0.01) * 3);
        ctx.lineTo(canvas.width, y + Math.cos(time + y * 0.01) * 3);
        ctx.stroke();
      }

      const isMobile = canvas.width < 640;
      const scale = isMobile ? 0.65 : 1;

      ctx.fillStyle = "rgba(0,0,0,0.4)";
      ctx.fillRect(
        canvas.width * 0.5,
        canvas.height * 0.18,
        canvas.width * 0.45,
        canvas.height * 0.68,
      );

      ctx.fillStyle = "#3b2a22";
      ctx.shadowBlur = 20;
      ctx.shadowColor = "rgba(0,0,0,0.5)";
      ctx.fillRect(
        canvas.width * 0.57,
        canvas.height * 0.68,
        170 * scale,
        75 * scale,
      );
      ctx.shadowBlur = 0;

      ctx.fillStyle = "#5b4034";
      ctx.fillRect(
        canvas.width * 0.6,
        canvas.height * 0.63,
        130 * scale,
        55 * scale,
      );

      ctx.fillStyle = "#5a3a20";
      ctx.shadowBlur = 15;
      ctx.shadowColor = "rgba(0,0,0,0.4)";
      ctx.fillRect(
        canvas.width * 0.78,
        canvas.height * 0.22,
        120 * scale,
        230 * scale,
      );
      ctx.shadowBlur = 0;

      ctx.fillStyle = "#2b1d13";
      ctx.fillRect(
        canvas.width * 0.815,
        canvas.height * 0.25,
        12 * scale,
        180 * scale,
      );

      ctx.fillStyle = "#d8d8d8";
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(0,0,0,0.3)";
      ctx.fillRect(
        canvas.width * 0.51,
        canvas.height * 0.32,
        130 * scale,
        55 * scale,
      );
      ctx.shadowBlur = 0;

      ctx.fillStyle = "#777";
      ctx.beginPath();
      ctx.arc(
        canvas.width * 0.55,
        canvas.height * 0.35,
        22 * scale,
        0,
        Math.PI * 2,
      );
      ctx.fill();

      ctx.fillStyle = "#222";
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(0,0,0,0.3)";
      ctx.fillRect(
        canvas.width * 0.76,
        canvas.height * 0.66,
        70 * scale,
        85 * scale,
      );
      ctx.shadowBlur = 0;

      ctx.fillStyle = "#555";
      ctx.fillRect(
        canvas.width * 0.755,
        canvas.height * 0.64,
        80 * scale,
        15 * scale,
      );

      ctx.strokeStyle = "#111";
      ctx.lineWidth = isMobile ? 3 : 4;
      ctx.shadowBlur = 8;
      ctx.shadowColor = "rgba(0,0,0,0.5)";
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.9, canvas.height * 0.5);
      ctx.lineTo(canvas.width * 0.96, canvas.height * 0.58);
      ctx.moveTo(canvas.width * 0.94, canvas.height * 0.48);
      ctx.lineTo(canvas.width * 0.89, canvas.height * 0.61);
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    const drawCockroach = (x, y, size, opacity) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.globalAlpha = opacity;
      ctx.shadowBlur = 15;
      ctx.shadowColor = "rgba(0,0,0,0.5)";

      const body = ctx.createLinearGradient(0, -size, 0, size);
      body.addColorStop(0, "#8b3f16");
      body.addColorStop(0.5, "#3b1608");
      body.addColorStop(1, "#120703");

      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.ellipse(0, 0, size * 0.55, size * 1.15, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#1b0903";
      ctx.beginPath();
      ctx.arc(0, -size * 0.95, size * 0.35, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "#160802";
      ctx.lineWidth = 2;

      for (let i = -1; i <= 1; i++) {
        ctx.beginPath();
        ctx.moveTo(-size * 0.35, i * size * 0.35);
        ctx.lineTo(-size * 1.1, i * size * 0.65);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(size * 0.35, i * size * 0.35);
        ctx.lineTo(size * 1.1, i * size * 0.65);
        ctx.stroke();
      }

      ctx.restore();
    };

    const drawRat = (x, y, size, opacity) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.globalAlpha = opacity;
      ctx.shadowBlur = 15;
      ctx.shadowColor = "rgba(0,0,0,0.5)";

      const body = ctx.createLinearGradient(-size, 0, size, 0);
      body.addColorStop(0, "#3f3f3f");
      body.addColorStop(0.5, "#777");
      body.addColorStop(1, "#222");

      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.ellipse(0, 0, size * 1.1, size * 0.65, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#2b2b2b";
      ctx.beginPath();
      ctx.arc(size * 0.9, -size * 0.15, size * 0.35, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "#b0b0b0";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-size * 1.1, size * 0.1);
      ctx.quadraticCurveTo(-size * 2, size * 0.8, -size * 2.4, size * 0.1);
      ctx.stroke();

      ctx.restore();
    };

    const drawSprays = () => {
      spraysRef.current.forEach((s, i) => {
        ctx.save();
        ctx.globalAlpha = s.opacity;

        const gradient = ctx.createRadialGradient(
          s.x,
          s.y,
          5,
          s.x,
          s.y,
          s.radius,
        );
        gradient.addColorStop(0, "rgba(255,255,255,0.95)");
        gradient.addColorStop(0.45, "rgba(122,201,67,0.55)");
        gradient.addColorStop(1, "rgba(122,201,67,0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        s.radius += 5;
        s.opacity -= 0.04;

        if (s.opacity <= 0) spraysRef.current.splice(i, 1);
      });
    };

    const drawParticles = () => {
      particlesRef.current.forEach((p, i) => {
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        p.x += p.vx;
        p.y += p.vy;
        p.opacity -= 0.035;

        if (p.opacity <= 0) particlesRef.current.splice(i, 1);
      });
    };

    const animate = () => {
      drawRoom();

      const pest = pestRef.current;

      if (pest) {
        if (pest.state === "peek") {
          pest.progress += 0.12;
          if (pest.progress >= 1) {
            pest.progress = 1;
            pest.state = "wait";
          }
        } else if (pest.state === "wait") {
          pest.timer += 1;
          if (pest.timer > 25) {
            pest.state = "hide";
          }
        } else if (pest.state === "hide") {
          pest.progress -= 0.1;
          if (pest.progress <= 0) {
            pestRef.current = null;
            setEscaped((prev) => prev + 1);
          }
        } else if (pest.state === "hit") {
          pest.opacity -= 0.05;
          pest.y -= 1;
          if (pest.opacity <= 0) {
            pestRef.current = null;
          }
        }

        const isMobile = canvas.width < 640;
        const showY = pest.spot.y - pest.progress * (isMobile ? 34 : 45);
        const pestSize = isMobile ? 18 : 24;
        const ratSize = isMobile ? 20 : 26;

        if (pest.type === "cockroach") {
          drawCockroach(pest.spot.x, showY, pestSize, pest.opacity);
        } else {
          drawRat(pest.spot.x, showY, ratSize, pest.opacity);
        }
      }

      drawSprays();
      drawParticles();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleHit = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      spraysRef.current.push({
        x,
        y,
        radius: 25,
        opacity: 1,
      });

      const pest = pestRef.current;
      if (!pest || pest.state === "hit") return;

      const isMobile = canvas.width < 640;
      const pestX = pest.spot.x;
      const pestY = pest.spot.y - pest.progress * (isMobile ? 34 : 45);

      const dx = pestX - x;
      const dy = pestY - y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < (isMobile ? 65 : 75) && pest.progress > 0.35) {
        pest.state = "hit";

        setScore((prev) => {
          const next = prev + 1;
          if (next >= 10) setUnlocked(true);
          return next;
        });

        for (let i = 0; i < 18; i++) {
          particlesRef.current.push({
            x: pestX,
            y: pestY,
            vx: (Math.random() - 0.5) * 6,
            vy: (Math.random() - 0.5) * 6,
            size: 2 + Math.random() * 4,
            opacity: 1,
            color: Math.random() > 0.5 ? "#7ac943" : "#ffffff",
          });
        }
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
      clearInterval(timerRef.current);
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("click", handleClick);
      canvas.removeEventListener("touchstart", handleTouch);
    };
  }, [gameStarted, unlocked]);

  return (
    <section className="relative w-full h-[75vh] sm:h-[85vh] lg:h-screen bg-[#063b3f] overflow-hidden rounded-xl sm:rounded-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-crosshair touch-none"
      />

      {!gameStarted ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-20 px-4">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-5 sm:p-8 max-w-md w-full text-white text-center border border-white/20 shadow-2xl">
            <div className="text-5xl sm:text-6xl mb-4">🔍</div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Pest Hunt</h2>

            <p className="text-gray-300 text-xs sm:text-sm mb-6 leading-relaxed">
              Pests hide behind furniture, sink, dustbin and wall cracks.
              <br />
              <span className="inline-block mt-2 bg-green-500/20 px-3 py-1 rounded-full text-xs">
                🎯 Find &amp; spray 10 pests to win
              </span>
              <br />
              <span className="inline-block mt-1 bg-yellow-500/20 px-3 py-1 rounded-full text-xs">
                ⚡ They appear fast – be quick!
              </span>
            </p>

            <button
              onClick={startGame}
              className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-3 rounded-full transition transform hover:scale-105 text-sm sm:text-base"
            >
              Start Hunt
            </button>
          </div>
        </div>
      ) : (
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 text-white pointer-events-none z-10">
          <div className="bg-black/40 backdrop-blur-sm px-3 sm:px-5 py-2 rounded-2xl sm:rounded-full flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm border border-white/10">
            <span className="font-bold">🎯 {score}</span>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <span className="font-bold">💨 {escaped}</span>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <span className="font-bold text-green-400">
              ⏱️ {10 - score} left
            </span>
          </div>

          <div className="bg-black/40 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs text-gray-300 pointer-events-auto border border-white/10 text-center">
            🖱️ Click / Tap to spray
          </div>
        </div>
      )}

      {unlocked && gameStarted && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-30 px-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl animate-[bounce_0.8s]">
            <div className="text-7xl mb-4 animate-bounce">💥</div>

            <h1 className="text-5xl font-black text-red-600">BOOM!!</h1>

            <h2 className="text-3xl font-black text-green-700 mt-2">
              PESTS ELIMINATED!
            </h2>

            <p className="text-gray-600 mt-4">You found every hidden pest.</p>

            <div className="bg-gray-50 rounded-xl p-4 mt-6 text-left text-gray-700 space-y-2">
              <p>
                🐜 Removed : <strong>{score}</strong>
              </p>
              <p>
                💨 Escaped : <strong>{escaped}</strong>
              </p>
            </div>

            <div className="mt-6 border-2 border-dashed border-green-600 rounded-2xl p-5 bg-green-50">
              <p className="text-gray-600 font-semibold">
                🎁 Secret Reward Unlocked
              </p>

              <h2 className="text-5xl font-black text-green-700 mt-2">
                5% OFF
              </h2>

              <p className="mt-3 text-gray-600">Coupon Code</p>

              <div className="mt-2 bg-white border rounded-xl py-3 text-2xl font-black tracking-[5px] text-green-700">
                PEST5WIN
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-8">
              <button
                onClick={startGame}
                className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-bold"
              >
                🔄 Play Again
              </button>

              <a
                href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20won%20the%205%25%20OFF%20coupon%20from%20the%20Pest%20Hunt%20game.%20Coupon:%20PEST5WIN"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-bold"
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

export default PestHunt;
