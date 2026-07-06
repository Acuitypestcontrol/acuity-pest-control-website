import React, { useState } from "react";
import DefendHomeGame from "../../components/pestgame/DefendHomeGame";
import WhackAPest from "./WhackAPest";
import PestHunt from "./PestHunt";
import InfestationMeter from "./InfestationMeter";
import UVDetection from "./UVDetection";

const games = [
  {
    id: "defend",
    title: "🏆 Defend Your Home",
    desc: "Protect the house from pests coming from all sides.",
    color: "from-blue-500 to-purple-600",
    icon: "🛡️",
  },
  {
    id: "whack",
    title: "🎯 Whack-a-Pest",
    desc: "Pests pop out from holes. Spray them fast.",
    color: "from-green-500 to-teal-600",
    icon: "🔫",
  },
  {
    id: "hunt",
    title: "🪳 Pest Hunt",
    desc: "Find hidden pests behind furniture and spray them.",
    color: "from-yellow-500 to-orange-600",
    icon: "🔍",
  },
  {
    id: "meter",
    title: "🔥 Infestation Meter",
    desc: "Reduce infestation from 100% to 0%.",
    color: "from-red-500 to-pink-600",
    icon: "📊",
  },
  {
    id: "uv",
    title: "🧪 UV Detection Mode",
    desc: "Use UV light to detect hidden pests.",
    color: "from-indigo-500 to-purple-600",
    icon: "💡",
  },
];

const PestGamePage = () => {
  const [activeGame, setActiveGame] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-x-hidden">
      {!activeGame ? (
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block bg-green-500/20 text-green-400 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider border border-green-500/30 backdrop-blur-sm">
              Acuity Pest Control – Interactive Learning
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mt-5 sm:mt-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent leading-tight">
              Pest Control Game Zone
            </h1>
x
            <p className="text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto mt-4 px-1">
              Play, learn, and master the art of pest elimination. Each game
              teaches you a different aspect of professional pest control.
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-6 text-xs sm:text-sm text-gray-400">
              <span>🎮 5 Games</span>
              <span>⚡ Play & Learn</span>
              <span>🏆 Earn Skills</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {games.map((game) => (
              <button
                key={game.id}
                onClick={() => setActiveGame(game.id)}
                className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-green-400 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/10 p-5 sm:p-6 text-left"
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${game.color} blur-2xl -z-10`}
                />

                <div className="relative z-10">
                  <div className="text-3xl sm:text-4xl mb-3">{game.icon}</div>

                  <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-green-300 transition">
                    {game.title}
                  </h2>

                  <p className="text-gray-400 group-hover:text-gray-200 mt-2 text-sm leading-relaxed">
                    {game.desc}
                  </p>

                  <div className="mt-4 flex items-center text-green-400 font-medium group-hover:text-green-300 text-sm sm:text-base">
                    <span>Play Now</span>
                    <svg
                      className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-16 text-gray-500 text-xs sm:text-sm border-t border-gray-700/50 pt-6 sm:pt-8">
            <p>
              Each game is designed to simulate real pest control challenges.
            </p>
            <p className="mt-1">Good luck, pest controller! 🚀</p>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
          <button
            onClick={() => setActiveGame(null)}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 mb-4 sm:mb-6 bg-gray-800 hover:bg-gray-700 rounded-full text-xs sm:text-sm font-medium transition border border-gray-600 hover:border-gray-400"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Games
          </button>

          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden">
            <div className="p-3 sm:p-4 border-b border-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
              <span className="font-semibold text-green-400 text-sm sm:text-base">
                {games.find((g) => g.id === activeGame)?.title}
              </span>
              <span className="text-xs text-gray-500">🎮 Game Mode</span>
            </div>

            <div className="p-2 sm:p-4 overflow-x-auto">
              {activeGame === "defend" && <DefendHomeGame />}
              {activeGame === "whack" && <WhackAPest />}
              {activeGame === "hunt" && <PestHunt />}
              {activeGame === "meter" && <InfestationMeter />}
              {activeGame === "uv" && <UVDetection />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PestGamePage;
