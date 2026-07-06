import React, { useState } from "react";
import { Link } from "react-router-dom";

const PestGameFloatingButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowPopup(true)}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-50 group"
      >
        <div className="bg-[#7ac943] text-red-600 font-bold px-4 py-4 rounded-r-2xl shadow-2xl flex items-center gap-3 hover:pl-6 transition-all duration-300">
          <span className="text-2xl animate-bounce">🎮</span>

          <span className="hidden group-hover:inline whitespace-nowrap">
            Play Pest Game 
            And Win  Coupon
          </span>
        </div>
      </button>

      {showPopup && (
        <div className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center px-4">
          <div className="bg-white rounded-3xl p-7 max-w-md w-full text-center shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-green-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-lime-200 rounded-full opacity-60"></div>

            <h2 className="text-3xl font-black text-[#063b3f] mb-3">
              🎮 Pest Challenge
            </h2>

            <p className="text-gray-600 leading-7">
              Complete the game and unlock a surprise reward from
              <span className="font-bold text-green-700"> Acuity Pest Control</span>.
            </p>

            <div className="my-6 bg-green-50 border border-green-100 rounded-2xl p-5 text-left space-y-3">
              <p>✅ Play the pest control challenge</p>
              <p>✅ Complete the mission</p>
              <p>🎁 Reveal your secret reward after winning</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowPopup(false)}
                className="flex-1 py-3 rounded-full border font-bold text-gray-700"
              >
                Later
              </button>

              <Link
                to="/PestGamePage"
                onClick={() => setShowPopup(false)}
                className="flex-1 py-3 rounded-full bg-green-700 text-white font-bold"
              >
                Start Game
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PestGameFloatingButton;