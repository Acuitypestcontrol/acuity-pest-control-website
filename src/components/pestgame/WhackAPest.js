import React, { useEffect, useRef, useState } from "react";

const WhackAPest = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const timerRef = useRef(null);

  const holesRef = useRef([]);
  const activePestsRef = useRef([]);
  const spraysRef = useRef([]);
  const particlesRef = useRef([]);

  const [score, setScore] = useState(0);
  const [missed, setMissed] = useState(0);
  const [unlocked, setUnlocked] = useState(false);

  const resetGame = () => {
    activePestsRef.current = [];
    spraysRef.current = [];
    particlesRef.current = [];
    setScore(0);
    setMissed(0);
    setUnlocked(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      holesRef.current = [];

      const cols = 3;
      const rows = 3;

      const startX = canvas.width * 0.58;
      const gapX = canvas.width * 0.14;
      const gapY = canvas.height / 4;

      for (let r = 1; r <= rows; r++) {
        for (let c = 0; c < cols; c++) {
          holesRef.current.push({
            x: startX + gapX * c,
            y: gapY * r,
            radiusX: 70,
            radiusY: 24,
          });
        }
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const spawnPest = () => {
      const availableHoles = holesRef.current.filter(
        (_, index) =>
          !activePestsRef.current.some((p) => p.holeIndex === index),
      );

      if (availableHoles.length === 0) return;

      const hole =
        availableHoles[Math.floor(Math.random() * availableHoles.length)];

      const holeIndex = holesRef.current.indexOf(hole);

      activePestsRef.current.push({
        holeIndex,
        progress: 0,
        state: "up",
        timer: 0,
        type: Math.random() > 0.5 ? "cockroach" : "rat",
      });
    };

    timerRef.current = setInterval(spawnPest, 750);

    const drawBackground = () => {
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

      ctx.fillStyle = "rgba(255,255,255,0.05)";

      for (let x = 0; x < canvas.width; x += 45) {
        ctx.fillRect(x, 0, 1, canvas.height);
      }

      for (let y = 0; y < canvas.height; y += 45) {
        ctx.fillRect(0, y, canvas.width, 1);
      }
    };

    const drawHole = (hole) => {
      ctx.save();

      ctx.fillStyle = "rgba(0,0,0,0.75)";
      ctx.beginPath();
      ctx.ellipse(
        hole.x,
        hole.y,
        hole.radiusX,
        hole.radiusY,
        0,
        0,
        Math.PI * 2,
      );
      ctx.fill();

      ctx.strokeStyle = "rgba(255,255,255,0.15)";
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.fillStyle = "rgba(122,201,67,0.18)";
      ctx.beginPath();
      ctx.ellipse(
        hole.x,
        hole.y - 3,
        hole.radiusX * 0.75,
        hole.radiusY * 0.55,
        0,
        0,
        Math.PI * 2,
      );
      ctx.fill();

      ctx.restore();
    };

    const drawCockroach = (x, y, size, opacity) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.globalAlpha = opacity;

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
      drawBackground();

      holesRef.current.forEach(drawHole);

      activePestsRef.current.forEach((pest, index) => {
        const hole = holesRef.current[pest.holeIndex];

        if (!hole) return;

        if (pest.state === "up") {
          pest.progress += 0.055;

          if (pest.progress >= 1) {
            pest.progress = 1;
            pest.state = "wait";
          }
        } else if (pest.state === "wait") {
          pest.timer += 1;

          if (pest.timer > 45) {
            pest.state = "down";
          }
        } else if (pest.state === "down") {
          pest.progress -= 0.045;

          if (pest.progress <= 0) {
            activePestsRef.current.splice(index, 1);
            setMissed((prev) => prev + 1);
          }
        } else if (pest.state === "hit") {
          pest.progress -= 0.06;

          if (pest.progress <= 0) {
            activePestsRef.current.splice(index, 1);
          }
        }

        const pestY = hole.y - pest.progress * 70;
        const opacity = pest.state === "hit" ? pest.progress : 1;

        if (pest.type === "cockroach") {
          drawCockroach(hole.x, pestY, 24, opacity);
        } else {
          drawRat(hole.x, pestY, 26, opacity);
        }
      });

      drawSprays();
      drawParticles();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      spraysRef.current.push({
        x,
        y,
        radius: 25,
        opacity: 1,
      });

      activePestsRef.current.forEach((pest) => {
        if (pest.state === "hit") return;

        const hole = holesRef.current[pest.holeIndex];
        const pestY = hole.y - pest.progress * 70;

        const dx = hole.x - x;
        const dy = pestY - y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 70 && pest.progress > 0.35) {
          pest.state = "hit";

          setScore((prev) => {
            const next = prev + 1;

            if (next >= 10) setUnlocked(true);

            return next;
          });

          for (let i = 0; i < 16; i++) {
            particlesRef.current.push({
              x: hole.x,
              y: pestY,
              vx: (Math.random() - 0.5) * 6,
              vy: (Math.random() - 0.5) * 6,
              size: 2 + Math.random() * 4,
              opacity: 1,
              color: Math.random() > 0.5 ? "#7ac943" : "#ffffff",
            });
          }
        }
      });
    };

    canvas.addEventListener("click", handleClick);

    return () => {
      clearInterval(timerRef.current);
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-[#063b3f] overflow-hidden flex items-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-crosshair"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white pointer-events-none w-full">
        <div className="max-w-xl">
          <span className="inline-block bg-[#7ac943] text-black px-5 py-2 rounded-full font-bold mb-5">
            Whack-a-Pest Challenge
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
            Spray Pests Before They Hide
          </h1>

          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Cockroaches and rats pop out from holes. Click fast to spray them
            before they disappear.
          </p>

          <div className="flex gap-4 flex-wrap mb-6">
            <div className="bg-white text-[#063b3f] px-6 py-4 rounded-full font-bold">
              Pests Removed: {score}
            </div>

            <div className="bg-white text-[#063b3f] px-6 py-4 rounded-full font-bold">
              Missed: {missed}
            </div>
          </div>

          <a
            href="tel:+919606074510"
            className="inline-block bg-[#7ac943] text-black px-8 py-4 rounded-full font-bold pointer-events-auto"
          >
            Book Now For Pest-Free Home
          </a>
        </div>
      </div>

      {unlocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-40 px-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl">
            <div className="text-7xl animate-bounce mb-4">💥</div>

            <h1 className="text-5xl font-black text-red-600">BOOM!!</h1>

            <h2 className="text-3xl font-black text-green-700 mt-2">
              WHACK MASTER!
            </h2>

            <p className="text-gray-600 mt-4">
              You smashed every pest before it escaped.
            </p>

            <div className="bg-gray-50 rounded-xl p-4 mt-6 text-left text-gray-700 space-y-2">
              <p>
                🪳 Pests Removed : <strong>{score}</strong>
              </p>
              <p>
                💨 Missed : <strong>{missed}</strong>
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
                onClick={resetGame}
                className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-bold"
              >
                🔄 Play Again
              </button>

              <a
                href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20won%20the%205%25%20OFF%20coupon%20from%20the%20Whack-a-Pest%20game.%20Coupon:%20PEST5WIN"
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

export default WhackAPest;
