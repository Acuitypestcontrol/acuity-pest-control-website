import React, { useEffect, useState } from "react";
import "../index.css";
import { FaPhoneAlt, FaWhatsapp, FaTimes } from "react-icons/fa";

const pestIcons = ["🪳", "🐜", "🦟", "🐀", "🕷️"];

const gameList = [
  ["defend", "🏆 Defend Your Home"],
  ["whack", "🎯 Whack-a-Pest"],
  ["hunt", "🪳 Pest Hunt"],
  ["meter", "🔥 Infestation Meter"],
  ["uv", "🧪 UV Detection Mode"],
  ["fps", "🎮 FPS Spray Style"],
  ["family", "🏠 Save the Family"],
  ["boss", "👑 Boss Fight"],
];

const GameWinRewardPopup = ({ show, score, onClose, onPlayAgain }) => {
  const [revealReward, setRevealReward] = useState(false);

  useEffect(() => {
    if (show) {
      setRevealReward(false);
      const timer = setTimeout(() => setRevealReward(true), 1800);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!show) return null;

  const couponCode = "PEST5WIN";

  return (
    <div className="fixed inset-0 z-[99999] bg-black/80 flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <span
            key={i}
            className="absolute text-3xl animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 85}%`,
              animationDelay: `${Math.random() * 1.5}s`,
            }}
          >
            {["🎉", "✨", "💥", "🏆", "🎁"][i % 5]}
          </span>
        ))}
      </div>

      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-500 hover:text-red-500"
        >
          <FaTimes />
        </button>

        {!revealReward ? (
          <div className="bg-gradient-to-br from-green-900 to-green-600 text-white py-16 px-6">
            <div className="text-7xl mb-5 animate-bounce">💥</div>
            <h2 className="text-5xl font-black mb-3">BOOM!</h2>
            <p className="text-xl font-bold">You Beat The Pests!</p>
            <p className="text-green-100 mt-3">
              Unlocking your secret reward...
            </p>
          </div>
        ) : (
          <>
            <div className="bg-green-800 text-white py-8 px-6">
              <div className="text-5xl mb-3">🎁</div>
              <h2 className="text-3xl font-black">
                Secret Reward Unlocked!
              </h2>
              <p className="text-green-100 mt-2">
                Final Score: <b>{score}</b>
              </p>
            </div>

            <div className="p-6">
              <div className="border-2 border-dashed border-green-700 rounded-2xl p-6 bg-green-50 mb-5">
                <p className="text-gray-600 font-bold mb-2">You Won</p>
                <h3 className="text-5xl font-black text-green-800">
                  5% OFF
                </h3>

                <p className="text-gray-600 mt-4">Coupon Code</p>
                <div className="mt-2 bg-white border border-green-200 rounded-xl py-3 px-4 text-2xl font-black tracking-widest text-green-900">
                  {couponCode}
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-5">
                Use this coupon while booking your pest control service.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <a
                  href="tel:+919941229005"
                  className="bg-orange-500 text-white py-3 rounded-full font-bold flex items-center justify-center gap-2"
                >
                  <FaPhoneAlt /> Call
                </a>

                <a
                  href={`https://wa.me/919941229005?text=${encodeURIComponent(
                    `Hi Acuity Pest Control, I won 5% OFF coupon from the pest game. Coupon Code: ${couponCode}. I want to book pest control service.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-700 text-white py-3 rounded-full font-bold flex items-center justify-center gap-2"
                >
                  <FaWhatsapp /> Claim
                </a>
              </div>

              <button
                onClick={onPlayAgain}
                className="w-full bg-gray-100 text-gray-700 py-3 rounded-full font-bold"
              >
                🔄 Play Again
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const PestGamePage = () => {
  const [activeGame, setActiveGame] = useState(null);

  return (
    <div className="pest-game-page">
      {!activeGame ? (
        <div className="game-menu">
          <h1>Acuity Pest Control Game Zone</h1>
          <p>Play, spray and protect your home from pests.</p>

          <div className="game-grid">
            {gameList.map(([id, title]) => (
              <button key={id} onClick={() => setActiveGame(id)}>
                <h2>{title}</h2>
                <span>Play Now</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <>
          <button className="back-btn" onClick={() => setActiveGame(null)}>
            ← Back to Games
          </button>

          {activeGame === "defend" && <DefendHome />}
          {activeGame === "whack" && <WhackPest />}
          {activeGame === "hunt" && <PestHunt />}
          {activeGame === "meter" && <InfestationMeter />}
          {activeGame === "uv" && <UVDetection />}
          {activeGame === "fps" && <FPSSpray />}
          {activeGame === "family" && <SaveFamily />}
          {activeGame === "boss" && <BossFight />}
        </>
      )}
    </div>
  );
};

const CTA = () => (
  <a href="tel:+919941229005" className="book-btn">
    Book Now For Pest-Free Home
  </a>
);

const Spray = ({ x, y }) =>
  x ? <span className="spray" style={{ left: x, top: y }} /> : null;

const RandomPests = ({ count = 12, onKill, hidden = false }) => {
  const [pests, setPests] = useState([]);

  useEffect(() => {
    setPests(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        icon: pestIcons[Math.floor(Math.random() * pestIcons.length)],
        x: Math.random() * 85,
        y: Math.random() * 75,
      }))
    );
  }, [count]);

  return pests.map((p) => (
    <button
      key={p.id}
      className={hidden ? "pest hidden-pest" : "pest"}
      style={{ left: `${p.x}%`, top: `${p.y}%` }}
      onClick={(e) => {
        onKill(e);
        setPests((old) => old.filter((x) => x.id !== p.id));
      }}
    >
      {p.icon}
    </button>
  ));
};

const GameLayout = ({ title, text, children, score }) => (
  <section className="game-screen">
    <div className="game-info">
      <h1>{title}</h1>
      <p>{text}</p>
      <div className="score">Pests Removed: {score}</div>
      <CTA />
    </div>
    <div className="game-area">{children}</div>
  </section>
);

const DefendHome = () => {
  const [score, setScore] = useState(0);
  const [spray, setSpray] = useState({});
  const [danger, setDanger] = useState(false);
  const [showReward, setShowReward] = useState(false);

  const resetGame = () => {
    setScore(0);
    setDanger(false);
    setShowReward(false);
  };

  const kill = (e) => {
    setScore((prev) => {
      const next = prev + 1;
      if (next >= 18) setShowReward(true);
      return next;
    });
    setDanger(false);
    setSpray({ x: e.clientX, y: e.clientY });
    setTimeout(() => setSpray({}), 450);
  };

  useEffect(() => {
    const t = setInterval(() => setDanger(true), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <GameLayout
        title="🏆 Defend Your Home"
        text="Pests are coming from all sides. Spray before they reach your house."
        score={score}
      >
        <div className={danger ? "center-home danger" : "center-home"}>🏠</div>
        {!showReward && <RandomPests count={18} onKill={kill} />}
        <Spray {...spray} />
      </GameLayout>

      <GameWinRewardPopup
        show={showReward}
        score={score}
        onClose={() => setShowReward(false)}
        onPlayAgain={resetGame}
      />
    </>
  );
};

const WhackPest = () => {
  const [score, setScore] = useState(0);
  const [spray, setSpray] = useState({});
  const [showReward, setShowReward] = useState(false);
  const holes = Array.from({ length: 9 });

  const resetGame = () => {
    setScore(0);
    setShowReward(false);
  };

  const hit = (e) => {
    setScore((prev) => {
      const next = prev + 1;
      if (next >= 10) setShowReward(true);
      return next;
    });
    setSpray({ x: e.clientX, y: e.clientY });
    setTimeout(() => setSpray({}), 450);
  };

  return (
    <>
      <GameLayout
        title="🎯 Whack-a-Pest"
        text="Cockroaches pop out from holes. Click fast and spray them."
        score={score}
      >
        <div className="holes">
          {holes.map((_, i) => (
            <button key={i} className="hole" onClick={hit}>
              {Math.random() > 0.45 ? "🪳" : ""}
            </button>
          ))}
        </div>
        <Spray {...spray} />
      </GameLayout>

      <GameWinRewardPopup
        show={showReward}
        score={score}
        onClose={() => setShowReward(false)}
        onPlayAgain={resetGame}
      />
    </>
  );
};

const PestHunt = () => {
  const [score, setScore] = useState(0);
  const [spray, setSpray] = useState({});
  const [showReward, setShowReward] = useState(false);

  const resetGame = () => {
    setScore(0);
    setShowReward(false);
  };

  const kill = (e) => {
    setScore((prev) => {
      const next = prev + 1;
      if (next >= 8) setShowReward(true);
      return next;
    });
    setSpray({ x: e.clientX, y: e.clientY });
    setTimeout(() => setSpray({}), 450);
  };

  return (
    <>
      <GameLayout
        title="🪳 Pest Hunt"
        text="Pests hide behind sofa, cupboard, sink and wall cracks. Find and spray them."
        score={score}
      >
        <div className="room-items">
          <span>🛋️ Sofa</span>
          <span>🚪 Cupboard</span>
          <span>🚰 Sink</span>
          <span>🧱 Wall Crack</span>
        </div>
        {!showReward && <RandomPests count={8} onKill={kill} />}
        <Spray {...spray} />
      </GameLayout>

      <GameWinRewardPopup
        show={showReward}
        score={score}
        onClose={() => setShowReward(false)}
        onPlayAgain={resetGame}
      />
    </>
  );
};

const InfestationMeter = () => {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(100);
  const [spray, setSpray] = useState({});
  const [showReward, setShowReward] = useState(false);

  const resetGame = () => {
    setScore(0);
    setLevel(100);
    setShowReward(false);
  };

  const kill = (e) => {
    setScore((prev) => prev + 1);

    setLevel((prev) => {
      const next = Math.max(prev - 10, 0);
      if (next === 0) setShowReward(true);
      return next;
    });

    setSpray({ x: e.clientX, y: e.clientY });
    setTimeout(() => setSpray({}), 450);
  };

  return (
    <>
      <GameLayout
        title="🔥 Infestation Meter"
        text="Spray pests and reduce infestation from 100% to 0%."
        score={score}
      >
        <h2 className="meter-title">Infestation: {level}%</h2>
        <div className="meter">
          <div style={{ width: `${level}%` }} />
        </div>

        {level > 0 && <RandomPests count={10} onKill={kill} />}
        <Spray {...spray} />
      </GameLayout>

      <GameWinRewardPopup
        show={showReward}
        score={score}
        onClose={() => setShowReward(false)}
        onPlayAgain={resetGame}
      />
    </>
  );
};

const UVDetection = () => {
  const [score, setScore] = useState(0);
  const [spray, setSpray] = useState({});
  const [light, setLight] = useState({ x: 250, y: 250 });
  const [showReward, setShowReward] = useState(false);

  const resetGame = () => {
    setScore(0);
    setShowReward(false);
  };

  const kill = (e) => {
    setScore((prev) => {
      const next = prev + 1;
      if (next >= 14) setShowReward(true);
      return next;
    });
    setSpray({ x: e.clientX, y: e.clientY });
    setTimeout(() => setSpray({}), 450);
  };

  return (
    <>
      <GameLayout
        title="🧪 UV Detection Mode"
        text="Move the mouse like UV light. Hidden termites become visible."
        score={score}
      >
        <div
          className="uv-light"
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            setLight({ x: e.clientX - r.left, y: e.clientY - r.top });
          }}
          style={{
            background: `radial-gradient(circle 130px at ${light.x}px ${light.y}px, rgba(122,201,67,.35), rgba(0,0,0,.92))`,
          }}
        >
          {!showReward && <RandomPests count={14} hidden onKill={kill} />}
        </div>
        <Spray {...spray} />
      </GameLayout>

      <GameWinRewardPopup
        show={showReward}
        score={score}
        onClose={() => setShowReward(false)}
        onPlayAgain={resetGame}
      />
    </>
  );
};

const FPSSpray = () => {
  const [score, setScore] = useState(0);
  const [spray, setSpray] = useState({});
  const [showReward, setShowReward] = useState(false);

  const resetGame = () => {
    setScore(0);
    setShowReward(false);
  };

  const kill = (e) => {
    setScore((prev) => {
      const next = prev + 1;
      if (next >= 20) setShowReward(true);
      return next;
    });
    setSpray({ x: e.clientX, y: e.clientY });
    setTimeout(() => setSpray({}), 450);
  };

  return (
    <>
      <GameLayout
        title="🎮 FPS Spray Style"
        text="Cursor becomes spray gun style. Spray running cockroaches professionally."
        score={score}
      >
        <div className="crosshair">＋</div>
        {!showReward && <RandomPests count={20} onKill={kill} />}
        <Spray {...spray} />
      </GameLayout>

      <GameWinRewardPopup
        show={showReward}
        score={score}
        onClose={() => setShowReward(false)}
        onPlayAgain={resetGame}
      />
    </>
  );
};

const SaveFamily = () => {
  const [score, setScore] = useState(0);
  const [warning, setWarning] = useState(false);
  const [spray, setSpray] = useState({});
  const [showReward, setShowReward] = useState(false);

  const resetGame = () => {
    setScore(0);
    setWarning(false);
    setShowReward(false);
  };

  useEffect(() => {
    const t = setInterval(() => setWarning(true), 3000);
    return () => clearInterval(t);
  }, []);

  const kill = (e) => {
    setScore((prev) => {
      const next = prev + 1;
      if (next >= 16) setShowReward(true);
      return next;
    });
    setWarning(false);
    setSpray({ x: e.clientX, y: e.clientY });
    setTimeout(() => setSpray({}), 450);
  };

  return (
    <>
      <GameLayout
        title="🏠 Save the Family"
        text="Protect the happy family inside the house. Stop pests before they enter."
        score={score}
      >
        <div className={warning ? "family-house shake" : "family-house"}>
          👨‍👩‍👧‍👦
        </div>
        {warning && <div className="warning">Warning! Pests are near!</div>}
        {!showReward && <RandomPests count={16} onKill={kill} />}
        <Spray {...spray} />
      </GameLayout>

      <GameWinRewardPopup
        show={showReward}
        score={score}
        onClose={() => setShowReward(false)}
        onPlayAgain={resetGame}
      />
    </>
  );
};

const BossFight = () => {
  const [score, setScore] = useState(0);
  const [bossHealth, setBossHealth] = useState(5);
  const [spray, setSpray] = useState({});
  const [showReward, setShowReward] = useState(false);

  const resetGame = () => {
    setScore(0);
    setBossHealth(5);
    setShowReward(false);
  };

  const hitBoss = (e) => {
    setBossHealth((prev) => {
      const next = Math.max(prev - 1, 0);
      if (next === 0) setShowReward(true);
      return next;
    });

    setScore((prev) => prev + 1);
    setSpray({ x: e.clientX, y: e.clientY });
    setTimeout(() => setSpray({}), 450);
  };

  return (
    <>
      <GameLayout
        title="👑 Boss Fight"
        text="Defeat the giant termite queen with 5 sprays."
        score={score}
      >
        {bossHealth > 0 ? (
          <>
            <button className="boss" onClick={hitBoss}>
              🐜👑
            </button>
            <h2 className="boss-health">
              Queen Termite Health: {bossHealth}/5
            </h2>
          </>
        ) : (
          <div className="win-box explosion">Queen Termite Defeated ✓</div>
        )}
        <Spray {...spray} />
      </GameLayout>

      <GameWinRewardPopup
        show={showReward}
        score={score}
        onClose={() => setShowReward(false)}
        onPlayAgain={resetGame}
      />
    </>
  );
};

export default PestGamePage;