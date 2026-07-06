import React, { useEffect, useRef, useState } from "react";

const UVDetection = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const pestsRef = useRef([]);
  const spraysRef = useRef([]);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  const [score, setScore] = useState(0);
  const [remaining, setRemaining] = useState(12);
  const [completed, setCompleted] = useState(false);

  const resetGame = () => {
    pestsRef.current = [];
    spraysRef.current = [];
    particlesRef.current = [];
    setScore(0);
    setRemaining(12);
    setCompleted(false);
    createHiddenPests();
  };

  const createHiddenPests = () => {
    const canvas = canvasRef.current;

    pestsRef.current = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: canvas.width * (0.5 + Math.random() * 0.42),
      y: canvas.height * (0.2 + Math.random() * 0.62),
      size: 17 + Math.random() * 8,
      found: false,
      dead: false,
      opacity: 1,
      type: Math.random() > 0.5 ? "termite" : "cockroach",
    }));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      mouseRef.current = {
        x: canvas.width * 0.7,
        y: canvas.height * 0.5,
      };

      createHiddenPests();
    };

    resize();
    window.addEventListener("resize", resize);

    const drawRoom = () => {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(255,255,255,0.025)";
      for (let x = 0; x < canvas.width; x += 45) {
        ctx.fillRect(x, 0, 1, canvas.height);
      }
      for (let y = 0; y < canvas.height; y += 45) {
        ctx.fillRect(0, y, canvas.width, 1);
      }

      ctx.fillStyle = "rgba(255,255,255,0.04)";
      ctx.fillRect(
        canvas.width * 0.46,
        canvas.height * 0.16,
        canvas.width * 0.48,
        canvas.height * 0.72,
      );
    };

    const drawUVLight = () => {
      const { x, y } = mouseRef.current;

      const gradient = ctx.createRadialGradient(x, y, 5, x, y, 90);

      gradient.addColorStop(0, "rgba(170,80,255,0.65)");
      gradient.addColorStop(0.25, "rgba(110,60,255,0.45)");
      gradient.addColorStop(0.55, "rgba(40,120,255,0.22)");
      gradient.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, 90, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "rgba(180,90,255,0.9)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(x, y, 90, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = "rgba(90,180,255,0.55)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(x, y, 55, 0, Math.PI * 2);
      ctx.stroke();
    };
    const isInsideLight = (p) => {
      const dx = p.x - mouseRef.current.x;
      const dy = p.y - mouseRef.current.y;
      return Math.sqrt(dx * dx + dy * dy) < 90;
    };

    const drawTermite = (p, visible) => {
      if (!visible && !p.dead) return;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.globalAlpha = p.dead ? p.opacity : visible ? 1 : 0;

      const s = p.size;

      const body = ctx.createLinearGradient(0, -s, 0, s);
      body.addColorStop(0, "#f2d58a");
      body.addColorStop(1, "#9b6a2d");

      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.ellipse(0, 0, s * 0.48, s * 1.15, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#7a4a20";
      ctx.beginPath();
      ctx.arc(0, -s * 0.95, s * 0.34, 0, Math.PI * 2);
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

      ctx.restore();
    };

    const drawCockroach = (p, visible) => {
      if (!visible && !p.dead) return;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.globalAlpha = p.dead ? p.opacity : visible ? 1 : 0;

      const s = p.size;

      const body = ctx.createLinearGradient(0, -s, 0, s);
      body.addColorStop(0, "#8b3f16");
      body.addColorStop(0.5, "#3b1608");
      body.addColorStop(1, "#120703");

      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.ellipse(0, 0, s * 0.55, s * 1.15, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#1b0903";
      ctx.beginPath();
      ctx.arc(0, -s * 0.95, s * 0.35, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "#160802";
      ctx.lineWidth = 2;

      for (let i = -1; i <= 1; i++) {
        ctx.beginPath();
        ctx.moveTo(-s * 0.35, i * s * 0.35);
        ctx.lineTo(-s * 1.1, i * s * 0.65);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(s * 0.35, i * s * 0.35);
        ctx.lineTo(s * 1.1, i * s * 0.65);
        ctx.stroke();
      }

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

    const drawMeter = () => {
      const x = canvas.width * 0.52;
      const y = 55;
      const w = canvas.width * 0.36;
      const h = 28;

      ctx.fillStyle = "rgba(0,0,0,0.65)";
      ctx.beginPath();
      ctx.roundRect(x, y, w, h, 18);
      ctx.fill();

      const progress = ((12 - remaining) / 12) * w;

      ctx.fillStyle = "#7ac943";
      ctx.beginPath();
      ctx.roundRect(x, y, progress, h, 18);
      ctx.fill();

      ctx.fillStyle = "white";
      ctx.font = "bold 16px Arial";
      ctx.textAlign = "center";
      ctx.fillText(`DETECTED ${12 - remaining}/12`, x + w / 2, y - 12);
    };

    const animate = () => {
      drawRoom();
      drawUVLight();
      drawMeter();

      pestsRef.current.forEach((pest, index) => {
        const visible = isInsideLight(pest);

        if (pest.dead) {
          pest.opacity -= 0.05;
          pest.y -= 1;
        }

        if (pest.opacity <= 0) {
          pestsRef.current.splice(index, 1);
        }

        if (pest.type === "termite") drawTermite(pest, visible);
        else drawCockroach(pest, visible);
      });

      drawSprays();
      drawParticles();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleMove = (e) => {
      const rect = canvas.getBoundingClientRect();

      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleClick = (e) => {
      if (completed) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      spraysRef.current.push({
        x,
        y,
        radius: 25,
        opacity: 1,
      });

      pestsRef.current.forEach((pest) => {
        if (pest.dead) return;

        const dx = pest.x - x;
        const dy = pest.y - y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 75 && isInsideLight(pest)) {
          pest.dead = true;

          setScore((prev) => prev + 1);

          setRemaining((prev) => {
            const next = Math.max(prev - 1, 0);

            if (next === 0) {
              setCompleted(true);
            }

            return next;
          });

          for (let i = 0; i < 16; i++) {
            particlesRef.current.push({
              x: pest.x,
              y: pest.y,
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

    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("click", handleClick);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("click", handleClick);
    };
  }, [remaining, completed]);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-crosshair"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white pointer-events-none w-full">
        <div className="max-w-xl">
          <span className="inline-block bg-[#7ac943] text-black px-5 py-2 rounded-full font-bold mb-5">
            UV Detection Mode
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
            Detect Hidden Termites
          </h1>

          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Move your mouse like a UV inspection light. Hidden pests appear only
            under the light. Click to spray them.
          </p>

          <div className="flex gap-4 flex-wrap mb-6">
            <div className="bg-white text-[#063b3f] px-6 py-4 rounded-full font-bold">
              Pests Removed: {score}
            </div>

            <div className="bg-white text-[#063b3f] px-6 py-4 rounded-full font-bold">
              Remaining: {remaining}
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

    {completed && (
  <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-40 px-4">

    <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl">

      <div className="text-7xl animate-bounce mb-4">
        💥
      </div>

      <h1 className="text-5xl font-black text-red-600">
        BOOM!!
      </h1>

      <h2 className="text-3xl font-black text-green-700 mt-2">
        UV MISSION COMPLETE!
      </h2>

      <p className="text-gray-600 mt-4">
        Every hidden pest has been detected and eliminated.
      </p>

      <div className="bg-gray-50 rounded-xl p-4 mt-6 text-left text-gray-700 space-y-2">
        <p>🔍 Detected : <strong>{score}</strong></p>
        <p>🎯 Remaining : <strong>{remaining}</strong></p>
      </div>

      <div className="mt-6 border-2 border-dashed border-green-600 rounded-2xl p-5 bg-green-50">

        <p className="text-gray-600 font-semibold">
          🎁 Secret Reward Unlocked
        </p>

        <h2 className="text-5xl font-black text-green-700 mt-2">
          5% OFF
        </h2>

        <p className="mt-3 text-gray-600">
          Coupon Code
        </p>

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
          href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20won%20the%205%25%20OFF%20coupon%20from%20the%20UV%20Detection%20game.%20Coupon:%20PEST5WIN"
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

export default UVDetection;
