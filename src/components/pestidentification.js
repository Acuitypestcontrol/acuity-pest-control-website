import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

// Import images (keep your existing imports)
import termiteImg from "../images/Subterranean Termitebox.jpg";
import drywoodTermiteImg from "../images/Drywood Termite.jpg";
import damptermiteImg from "../images/Dampwood Termite.jpg";
import ratImg1 from "../images/norway.webp";
import ratImg from "../images/Black Rat Roof Rat.png";
import mouseImg from "../images/housem.jpg";

import houseFlyImg1 from "../images/houseflay.jpg";
import houseFlyImg2 from "../images/Fruit Fly.jpg";
import houseFlyImg from "../images/flesh.jpg";
import houseFlyImg4 from "../images/Bluebottle Fly.webp";
import houseFlyImg5 from "../images/moth.jpg";

import orientalCockroachImg from "../images/americancockroch.jpg";
import germanCockroachImg from "../images/Germancockroach.webp";
import ausCockroachImg from "../images/Australian Cockroach.jpg";
import orientalCockroachImg2 from "../images/backgrbrownbanded.png";
import orientalCockroachImg3 from "../images/Oriental Cockroach.jpg";

import bedbugImg from "../images/Bed Bug.png";

import stinkAntImg from "../images/Stink Ant.webp";
import pharaohAntImg from "../images/Pharaoh-Ants.webp";
import carpenterAntImg from "../images/Carpenter Ant.jpg";
import carpenterAntImg1 from "../images/Carpenter Ant22.jpg";
import carpenterAntImg2 from "../images/Fire Ant.jpg";
import carpenterAntImg3 from "../images/Black-Crazy-ant.png";



const PestIdentification = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = [
    "ALL",
    "TERMITES",
    "RODENTS",
    "FLIES",
    "COCKROACHES",
    "BEDBUGS",
    "ANT",
  ];

  const pests = [
    // ===== TERMITES (3) =====
    {
      name: "Subterranean Termite",
      category: "TERMITES",
      image: termiteImg,
      desc: "Live underground and build mud tubes to access wood. They cause the most damage to homes.",
    },
    {
      name: "Drywood Termite",
      category: "TERMITES",
      image: drywoodTermiteImg,
      desc: "Live inside dry wood and do not require soil contact. Often found in furniture and wooden structures.",
    },
    {
      name: "Dampwood Termite",
      category: "TERMITES",
      image: damptermiteImg,
      desc: "Prefer damp, decaying wood. Typically found in areas with high moisture content.",
    },

    // ===== RODENTS (3) =====
    {
      name: "Norway Rat / Brown Rat",
      category: "RODENTS",
      image: ratImg1,
      desc: "Large, burrowing rodents that often live near buildings and contaminate food.",
    },
    {
      name: "Black Rat / Roof Rat",
      category: "RODENTS",
      image: ratImg,
      desc: "Agile climbers that nest in roofs and trees; known to spread diseases.",
    },
    {
      name: "House Mouse",
      category: "RODENTS",
      image: mouseImg,
      desc: "Small, adaptable rodents that infest homes, chewing wires and contaminating surfaces.",
    },

    // ===== FLIES (5) =====
    {
      name: "House Fly",
      category: "FLIES",
      image: houseFlyImg1,
      desc: "Common indoor fly that breeds in waste and carries pathogens.",
    },
    {
      name: "Fruit Fly",
      category: "FLIES",
      image: houseFlyImg2,
      desc: "Small flies attracted to fermenting fruit and organic matter.",
    },
    {
      name: "Flesh Fly",
      category: "FLIES",
      image: houseFlyImg,
      desc: "Slightly larger than house flies; breed in decaying meat and animal waste.",
    },
    {
      name: "Bluebottle Fly",
      category: "FLIES",
      image: houseFlyImg4,
      desc: "Metallic blue‑green flies that are often associated with poor sanitation.",
    },
    {
      name: "Moth Fly",
      category: "FLIES",
      image: houseFlyImg5,
      desc: "Small, fuzzy flies that breed in drains and moist organic matter.",
    },

    // ===== COCKROACHES (5) =====
    {
      name: "American Cockroach",
      category: "COCKROACHES",
      image: orientalCockroachImg,
      desc: "Largest of the common roaches; prefers warm, humid environments.",
    },
    {
      name: "German Cockroach",
      category: "COCKROACHES",
      image: germanCockroachImg,
      desc: "The most common indoor cockroach; breeds rapidly in kitchens and bathrooms.",
    },
    {
      name: "Australian Cockroach",
      category: "COCKROACHES",
      image: ausCockroachImg,
      desc: "Similar to American roach but with yellow markings; often found outdoors.",
    },
    {
      name: "Brown Banded Cockroach",
      category: "COCKROACHES",
      image: orientalCockroachImg2,
      desc: "Smaller roach with distinctive light bands across wings; tends to stay in drier areas.",
    },
    {
      name: "Oriental Cockroach",
      category: "COCKROACHES",
      image: orientalCockroachImg3,
      desc: "Dark, shiny roach that prefers damp, dark places like basements and drains.",
    },

    // ===== BEDBUGS (1) =====
    {
      name: "Bed Bug",
      category: "BEDBUGS",
      image: bedbugImg,
      desc: "Small, flat insects that feed on human blood at night; can cause itchy bites.",
    },

    // ===== ANTS (6) =====
    {
      name: "Stink Ant",
      category: "ANT",
      image: stinkAntImg,
      desc: "Dark ants that emit a pungent odor when crushed; often invade homes for food.",
    },
    {
      name: "Pharaoh's Ant",
      category: "ANT",
      image: pharaohAntImg,
      desc: "Tiny yellow‑brown ants that are difficult to control; spread bacteria in healthcare settings.",
    },
    {
      name: "Little Black Ant",
      category: "ANT",
      image: carpenterAntImg,
      desc: "Small, black ants that nest in soil and under debris; attracted to sweets.",
    },
    {
      name: "Carpenter Ant",
      category: "ANT",
      image: carpenterAntImg1,
      desc: "Large, wood‑destroying ants that nest in damp wood, causing structural damage.",
    },
    {
      name: "Fire Ant",
      category: "ANT",
      image: carpenterAntImg2,
      desc: "Aggressive, reddish ants that deliver painful stings; build large mounds.",
    },
    {
      name: "Black Crazy Ant",
      category: "ANT",
      image: carpenterAntImg3,
      desc: "Dark ants with long legs and erratic movements; often invade homes in large numbers.",
    },
  ];

  const filteredPests =
    activeCategory === "ALL"
      ? pests
      : pests.filter((pest) => pest.category === activeCategory);

  // JSON-LD structured data for the page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Pest Identification Guide",
    description:
      "Identify common pests like termites, rodents, cockroaches, bed bugs, flies, and ants with our visual guide. Learn about their habits and how to control them.",
    url: "https://acuitypestcontrols.com/pest-identification",
  };

  return (
    <>
      <Helmet>
        <title>
          Pest Identification Guide – Identify Common Pests | Acuity Pest
          Control
        </title>
        <meta
          name="description"
          content="Identify common pests like termites, rodents, cockroaches, bed bugs, flies, and ants with our visual guide. Learn about their habits and how to control them."
        />
        <meta
          name="keywords"
          content="pest identification, termites, rodents, cockroaches, bed bugs, ants, flies, pest control, Bangalore, subterranean termite, drywood termite, Norway rat, house mouse, American cockroach, German cockroach, bed bug treatment, carpenter ant, fire ant"
        />
        <meta
          property="og:title"
          content="Pest Identification Guide – Identify Common Pests"
        />
        <meta
          property="og:description"
          content="Visual guide to identify common pests in Bangalore. Learn about their habits and get expert help."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://acuitypestcontrols.com/pest-identification"
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="w-full min-h-screen bg-white">
        {/* ===== HERO SECTION ===== */}
        <section className="relative bg-gradient-to-br from-[#008fc5] to-[#006f9f] py-16 md:py-24 px-4 text-white overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10 md:pt-36 pt-24">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-4">
              Pest Identification
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Identify common pests quickly with our visual guide. Learn about
              their habits, habitats, and how to control them.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                🏠 19+ Years Experience
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                🔍 5000+ Pests Identified
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                📞 24/7 Support
              </span>
            </div>
          </div>
        </section>

        {/* ===== WHY IDENTIFY SECTION ===== */}
        <section className="py-12 px-4 max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#063b3f] mb-4">
              Why Identifying Pests Matters
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Proper identification is the first step to effective pest control.
              Different pests require different treatment approaches. Knowing
              what you're dealing with helps you choose the right solution and
              prevent future infestations.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="bg-[#f6fffb] p-6 rounded-2xl border border-green-100">
                <div className="text-3xl mb-2">🔬</div>
                <h3 className="font-bold text-[#063b3f]">Accurate Treatment</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Use the right method for the right pest.
                </p>
              </div>
              <div className="bg-[#f6fffb] p-6 rounded-2xl border border-green-100">
                <div className="text-3xl mb-2">🛡️</div>
                <h3 className="font-bold text-[#063b3f]">Prevent Damage</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Stop pests before they cause structural harm.
                </p>
              </div>
              <div className="bg-[#f6fffb] p-6 rounded-2xl border border-green-100">
                <div className="text-3xl mb-2">🧪</div>
                <h3 className="font-bold text-[#063b3f]">
                  Eco‑Friendly Options
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Choose safe, sustainable control methods.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FILTER + GRID ===== */}
        <section className="py-8 px-4 max-w-7xl mx-auto">
          {/* Intro Text */}
          <div className="text-center mb-10">
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Browse through our comprehensive pest library. Click on a category
              to filter pests by type, or scroll to see all.
            </p>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#008fc5] text-white shadow-lg shadow-blue-500/30 scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-[#008fc5] hover:text-white"
                }`}
                aria-label={`Filter by ${category}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Pest Grid */}
          {filteredPests.length === 0 ? (
            <p className="text-center text-gray-500 text-lg mt-10">
              No pests found in this category.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredPests.map((pest, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    <img
                      src={pest.image}
                      alt={pest.name}
                      className="w-full h-full  transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-800 leading-tight mb-2">
                      {pest.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {pest.desc ||
                        "Common pest found in homes and businesses."}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#008fc5] bg-blue-50 px-3 py-1 rounded-full">
                        {pest.category}
                      </span>
                      <a
                        href={`https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Controls,%20I%20need%20help%20with%20${encodeURIComponent(
                          pest.name,
                        )}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-green-600 hover:text-green-700 transition"
                      >
                        Get Help →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-gradient-to-br from-[#eef8f4] to-white rounded-3xl p-8 border border-green-100">
            <h3 className="text-4xl font-bold text-[#063b3f] mb-3">
              Can't Identify Your Pest?
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto mb-6">
              Send us a photo and we'll help you identify it – free of charge.
            </p>
            <a
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Controls,%20I%20need%20help%20identifying%20a%20pest."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-green-600/30 transition-transform hover:scale-105"
            >
              WhatsApp Us Now
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default PestIdentification;
