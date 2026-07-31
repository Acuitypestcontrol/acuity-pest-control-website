// import React, { useState } from "react";

// import { Link } from "react-router-dom";

// import SEO from "./seo/seo";
// // Import images (keep your existing imports)
// import termiteImg from "../images/Subterranean Termitebox.jpg";
// import drywoodTermiteImg from "../images/Drywood Termite.jpg";
// import damptermiteImg from "../images/Dampwood Termite.jpg";
// import ratImg1 from "../images/norway.webp";
// import ratImg from "../images/Black Rat Roof Rat.png";
// import mouseImg from "../images/housem.jpg";

// import houseFlyImg1 from "../images/houseflay.jpg";
// import houseFlyImg2 from "../images/Fruit Fly.jpg";
// import houseFlyImg from "../images/flesh.jpg";
// import houseFlyImg4 from "../images/Bluebottle Fly.webp";
// import houseFlyImg5 from "../images/moth.jpg";

// import orientalCockroachImg from "../images/americancockroch.jpg";
// import germanCockroachImg from "../images/Germancockroach.webp";
// import ausCockroachImg from "../images/Australian Cockroach.jpg";
// import orientalCockroachImg2 from "../images/backgrbrownbanded.png";
// import orientalCockroachImg3 from "../images/Oriental Cockroach.jpg";

// import bedbugImg from "../images/Bed Bug.png";

// import stinkAntImg from "../images/Stink Ant.webp";
// import pharaohAntImg from "../images/Pharaoh-Ants.webp";
// import carpenterAntImg from "../images/Carpenter Ant.jpg";
// import carpenterAntImg1 from "../images/Carpenter Ant22.jpg";
// import carpenterAntImg2 from "../images/Fire Ant.jpg";
// import carpenterAntImg3 from "../images/Black-Crazy-ant.png";

// const PestIdentification = () => {
//   const [activeCategory, setActiveCategory] = useState("ALL");

//   const categories = [
//     "ALL",
//     "TERMITES",
//     "RODENTS",
//     "FLIES",
//     "COCKROACHES",
//     "BEDBUGS",
//     "ANT",
//   ];

//   const pests = [
//     // ===== TERMITES (3) =====
//     {
//       name: "Subterranean Termite",
//       category: "TERMITES",
//       image: termiteImg,
//       desc: "Live underground and build mud tubes to access wood. They cause the most damage to homes.",
//     },
//     {
//       name: "Drywood Termite",
//       category: "TERMITES",
//       image: drywoodTermiteImg,
//       desc: "Live inside dry wood and do not require soil contact. Often found in furniture and wooden structures.",
//     },
//     {
//       name: "Dampwood Termite",
//       category: "TERMITES",
//       image: damptermiteImg,
//       desc: "Prefer damp, decaying wood. Typically found in areas with high moisture content.",
//     },

//     // ===== RODENTS (3) =====
//     {
//       name: "Norway Rat / Brown Rat",
//       category: "RODENTS",
//       image: ratImg1,
//       desc: "Large, burrowing rodents that often live near buildings and contaminate food.",
//     },
//     {
//       name: "Black Rat / Roof Rat",
//       category: "RODENTS",
//       image: ratImg,
//       desc: "Agile climbers that nest in roofs and trees; known to spread diseases.",
//     },
//     {
//       name: "House Mouse",
//       category: "RODENTS",
//       image: mouseImg,
//       desc: "Small, adaptable rodents that infest homes, chewing wires and contaminating surfaces.",
//     },

//     // ===== FLIES (5) =====
//     {
//       name: "House Fly",
//       category: "FLIES",
//       image: houseFlyImg1,
//       desc: "Common indoor fly that breeds in waste and carries pathogens.",
//     },
//     {
//       name: "Fruit Fly",
//       category: "FLIES",
//       image: houseFlyImg2,
//       desc: "Small flies attracted to fermenting fruit and organic matter.",
//     },
//     {
//       name: "Flesh Fly",
//       category: "FLIES",
//       image: houseFlyImg,
//       desc: "Slightly larger than house flies; breed in decaying meat and animal waste.",
//     },
//     {
//       name: "Bluebottle Fly",
//       category: "FLIES",
//       image: houseFlyImg4,
//       desc: "Metallic blue‑green flies that are often associated with poor sanitation.",
//     },
//     {
//       name: "Moth Fly",
//       category: "FLIES",
//       image: houseFlyImg5,
//       desc: "Small, fuzzy flies that breed in drains and moist organic matter.",
//     },

//     // ===== COCKROACHES (5) =====
//     {
//       name: "American Cockroach",
//       category: "COCKROACHES",
//       image: orientalCockroachImg,
//       desc: "Largest of the common roaches; prefers warm, humid environments.",
//     },
//     {
//       name: "German Cockroach",
//       category: "COCKROACHES",
//       image: germanCockroachImg,
//       desc: "The most common indoor cockroach; breeds rapidly in kitchens and bathrooms.",
//     },
//     {
//       name: "Australian Cockroach",
//       category: "COCKROACHES",
//       image: ausCockroachImg,
//       desc: "Similar to American roach but with yellow markings; often found outdoors.",
//     },
//     {
//       name: "Brown Banded Cockroach",
//       category: "COCKROACHES",
//       image: orientalCockroachImg2,
//       desc: "Smaller roach with distinctive light bands across wings; tends to stay in drier areas.",
//     },
//     {
//       name: "Oriental Cockroach",
//       category: "COCKROACHES",
//       image: orientalCockroachImg3,
//       desc: "Dark, shiny roach that prefers damp, dark places like basements and drains.",
//     },

//     // ===== BEDBUGS (1) =====
//     {
//       name: "Bed Bug",
//       category: "BEDBUGS",
//       image: bedbugImg,
//       desc: "Small, flat insects that feed on human blood at night; can cause itchy bites.",
//     },

//     // ===== ANTS (6) =====
//     {
//       name: "Stink Ant",
//       category: "ANT",
//       image: stinkAntImg,
//       desc: "Dark ants that emit a pungent odor when crushed; often invade homes for food.",
//     },
//     {
//       name: "Pharaoh's Ant",
//       category: "ANT",
//       image: pharaohAntImg,
//       desc: "Tiny yellow‑brown ants that are difficult to control; spread bacteria in healthcare settings.",
//     },
//     {
//       name: "Little Black Ant",
//       category: "ANT",
//       image: carpenterAntImg,
//       desc: "Small, black ants that nest in soil and under debris; attracted to sweets.",
//     },
//     {
//       name: "Carpenter Ant",
//       category: "ANT",
//       image: carpenterAntImg1,
//       desc: "Large, wood‑destroying ants that nest in damp wood, causing structural damage.",
//     },
//     {
//       name: "Fire Ant",
//       category: "ANT",
//       image: carpenterAntImg2,
//       desc: "Aggressive, reddish ants that deliver painful stings; build large mounds.",
//     },
//     {
//       name: "Black Crazy Ant",
//       category: "ANT",
//       image: carpenterAntImg3,
//       desc: "Dark ants with long legs and erratic movements; often invade homes in large numbers.",
//     },
//   ];

//   const filteredPests =
//     activeCategory === "ALL"
//       ? pests
//       : pests.filter((pest) => pest.category === activeCategory);

//   // JSON-LD structured data for the page
//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "CollectionPage",
//     "@id": "https://www.acuitypestcontrols.com/pest-identification",
//     name: "Pest Identification Guide",
//     url: "https://www.acuitypestcontrols.com/pest-identification",
//     description:
//       "Identify termites, cockroaches, rodents, bed bugs, ants and flies commonly found in Bangalore.",
//     inLanguage: "en-IN",
//     about: [
//       "Cockroaches",
//       "Termites",
//       "Rodents",
//       "Mosquitoes",
//       "Bed Bugs",
//       "Ants",
//       "Flies",
//     ],
//   };
//   return (
//     <>
//       <title>
//         Pest Identification Guide – Identify Common Pests | Acuity Pest Control
//       </title>
//       <meta
//         name="description"
//         content="Identify common pests like termites, rodents, cockroaches, bed bugs, flies, and ants with our visual guide. Learn about their habits and how to control them."
//       />
//       <meta
//         name="keywords"
//         content="pest identification, termites, rodents, cockroaches, bed bugs, ants, flies, pest control, Bangalore, subterranean termite, drywood termite, Norway rat, house mouse, American cockroach, German cockroach, bed bug treatment, carpenter ant, fire ant"
//       />
//       <meta
//         property="og:title"
//         content="Pest Identification Guide – Identify Common Pests"
//       />
//       <meta
//         property="og:description"
//         content="Visual guide to identify common pests in Bangalore. Learn about their habits and get expert help."
//       />
//       <meta property="og:type" content="website" />
//       <meta
//         property="og:url"
//         content="https://www.acuitypestcontrols.com/pest-identification"
//       />
//       <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

//       <div className="w-full min-h-screen bg-white">
//         <SEO
//           title="Pest Identification Guide | Acuity Pest Controls Bangalore"
//           description="Identify termites, cockroaches, rodents, bed bugs, ants and flies with Acuity Pest Controls Bangalore."
//           keywords="pest identification Bangalore, termites Bangalore, cockroach identification, rodent identification, ant identification, bed bug identification"
//           canonical="https://www.acuitypestcontrols.com/pest-identification"
//           image="https://www.acuitypestcontrols.com/logo.png"
//           schema={jsonLd}
//         />

//         {/* ===== HERO SECTION ===== */}
//         <section className="relative bg-gradient-to-br from-[#008fc5] to-[#006f9f] py-16 md:py-24 px-4 text-white overflow-hidden">
//           <div className="max-w-4xl mx-auto text-center relative z-10 md:pt-36 pt-24">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-4">
//               Pest Identification
//             </h1>
//             <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
//               Identify termites, cockroaches, rodents, ants, bed bugs and flies
//               commonly found in homes and commercial properties across
//               Bangalore. Learn how to recognize each pest and when professional
//               treatment is recommended.
//             </p>
//             <div className="mt-8 flex flex-wrap justify-center gap-4">
//               <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
//                 🏠 19+ Years Experience
//               </span>
//               <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
//                 🔍 5000+ Professional Pest Identification Guide in Bangalore
//               </span>
//               <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
//                 📞 24/7 Support
//               </span>
//             </div>
//           </div>
//         </section>

//         {/* ===== WHY IDENTIFY SECTION ===== */}
//         <section className="py-12 px-4 max-w-6xl mx-auto">
//           <div className="text-center">
//             <h2 className="text-3xl font-bold text-[#063b3f] mb-4">
//               Why Identifying Pests Matters
//             </h2>
//             <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Proper identification is the first step to effective pest control.
//               Different pests require different treatment approaches. Knowing
//               what you're dealing with helps you choose the right solution and
//               prevent future infestations.
//             </p>
//             <div className="grid sm:grid-cols-3 gap-6 mt-8">
//               <div className="bg-[#f6fffb] p-6 rounded-2xl border border-green-100">
//                 <div className="text-3xl mb-2">🔬</div>
//                 <h3 className="font-bold text-[#063b3f]">Accurate Treatment</h3>
//                 <p className="text-sm text-gray-600 mt-1">
//                   Use the right method for the right pest.
//                 </p>
//               </div>
//               <div className="bg-[#f6fffb] p-6 rounded-2xl border border-green-100">
//                 <div className="text-3xl mb-2">🛡️</div>
//                 <h3 className="font-bold text-[#063b3f]">Prevent Damage</h3>
//                 <p className="text-sm text-gray-600 mt-1">
//                   Stop pests before they cause structural harm.
//                 </p>
//               </div>
//               <div className="bg-[#f6fffb] p-6 rounded-2xl border border-green-100">
//                 <div className="text-3xl mb-2">🧪</div>
//                 <h3 className="font-bold text-[#063b3f]">
//                   Eco‑Friendly Options
//                 </h3>
//                 <p className="text-sm text-gray-600 mt-1">
//                   Choose safe, sustainable control methods.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ===== FILTER + GRID ===== */}
//         <section className="py-8 px-4 max-w-7xl mx-auto">
//           {/* Intro Text */}
//           <div className="text-center mb-10">
//             <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
//               Browse through our comprehensive pest library. Click on a category
//               to filter pests by type, or scroll to see all.
//             </p>
//           </div>

//           {/* Category Buttons */}
//           <div className="flex flex-wrap justify-center gap-2 mb-12">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-5 py-2.5 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${
//                   activeCategory === category
//                     ? "bg-[#008fc5] text-white shadow-lg shadow-blue-500/30 scale-105"
//                     : "bg-gray-100 text-gray-700 hover:bg-[#008fc5] hover:text-white"
//                 }`}
//                 aria-label={`Filter by ${category}`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           {/* Pest Grid */}
//           {filteredPests.length === 0 ? (
//             <p className="text-center text-gray-500 text-lg mt-10">
//               No pests found in this category.
//             </p>
//           ) : (
//             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {filteredPests.map((pest, index) => (
//                 <div
//                   key={index}
//                   className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
//                 >
//                   <div className="relative h-48 bg-gray-100 overflow-hidden">
//                     <img
//                       src={pest.image}
//                       alt={`${pest.name} identification guide in Bangalore`}
//                       loading="lazy"
//                       decoding="async"
//                       className="w-full h-full   transition-transform duration-500 group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                   </div>
//                   <div className="p-5">
//                     <h3 className="text-lg font-bold text-gray-800 leading-tight mb-2">
//                       {pest.name}
//                     </h3>
//                     <p className="text-sm text-gray-600 leading-relaxed">
//                       {pest.desc ||
//                         "Common pest found in homes and businesses."}
//                     </p>
//                     <div className="mt-4">
//                       <span className="inline-block text-xs font-semibold text-[#008fc5] bg-blue-50 px-3 py-1 rounded-full">
//                         {pest.category}
//                       </span>

//                       <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
//                         <Link
//                           to="/contact"
//                           className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
//                         >
//                           Book Inspection
//                         </Link>

//                         <a
//                           href={`https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Controls,%20I%20need%20help%20with%20${encodeURIComponent(
//                             pest.name,
//                           )}.`}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-sm font-semibold text-green-600 hover:text-green-700 transition"
//                         >
//                           Get Help →
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Bottom CTA */}
//           <div className="mt-16 text-center bg-gradient-to-br from-[#eef8f4] to-white rounded-3xl p-8 border border-green-100">
//             <h3 className="text-4xl font-bold text-[#063b3f] mb-3">
//               Can't Identify Your Pest?
//             </h3>
//             <p className="text-gray-600 max-w-xl mx-auto mb-6">
//               Send us a photo and we'll help you identify it – free of charge.
//             </p>
//             <a
//               href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Controls,%20I%20need%20help%20identifying%20a%20pest."
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-green-600/30 transition-transform hover:scale-105"
//             >
//               WhatsApp Us Now
//             </a>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default PestIdentification;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaMicroscope,
  FaSearch,
  FaShieldAlt,
  FaWhatsapp,
} from "react-icons/fa";

import SEO from "./seo/seo";

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

/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const viewportSettings = {
  once: false,
  amount: 0.12,
};

/* =========================================================
   PEST IDENTIFICATION PAGE
========================================================= */

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
      desc: "Metallic blue-green flies that are often associated with poor sanitation.",
    },
    {
      name: "Moth Fly",
      category: "FLIES",
      image: houseFlyImg5,
      desc: "Small, fuzzy flies that breed in drains and moist organic matter.",
    },

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

    {
      name: "Bed Bug",
      category: "BEDBUGS",
      image: bedbugImg,
      desc: "Small, flat insects that feed on human blood at night; can cause itchy bites.",
    },

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
      desc: "Tiny yellow-brown ants that are difficult to control; spread bacteria in healthcare settings.",
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
      desc: "Large, wood-destroying ants that nest in damp wood, causing structural damage.",
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.acuitypestcontrols.com/pest-identification",
    name: "Pest Identification Guide",
    url: "https://www.acuitypestcontrols.com/pest-identification",
    description:
      "Identify termites, cockroaches, rodents, bed bugs, ants and flies commonly found in Bangalore.",
    inLanguage: "en-IN",
    about: [
      "Cockroaches",
      "Termites",
      "Rodents",
      "Mosquitoes",
      "Bed Bugs",
      "Ants",
      "Flies",
    ],
  };

  return (
    <>
      <title>
        Pest Identification Guide – Identify Common Pests | Acuity Pest Control
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
        content="https://www.acuitypestcontrols.com/pest-identification"
      />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      <div className="min-h-screen w-full overflow-x-hidden bg-white">
        <SEO
          title="Pest Identification Guide | Acuity Pest Controls Bangalore"
          description="Identify termites, cockroaches, rodents, bed bugs, ants and flies with Acuity Pest Controls Bangalore."
          keywords="pest identification Bangalore, termites Bangalore, cockroach identification, rodent identification, ant identification, bed bug identification"
          canonical="https://www.acuitypestcontrols.com/pest-identification"
          image="https://www.acuitypestcontrols.com/logo.png"
          schema={jsonLd}
        />

        <style>
          {`
            @keyframes pestGlow {
              0%, 100% {
                opacity: 0.25;
                transform: scale(1);
              }

              50% {
                opacity: 0.55;
                transform: scale(1.18);
              }
            }

            @keyframes pestFloat {
              0%, 100% {
                transform: translateY(0);
              }

              50% {
                transform: translateY(-10px);
              }
            }

            @keyframes pestShine {
              0% {
                left: -120%;
              }

              100% {
                left: 160%;
              }
            }

            .pest-glow {
              animation: pestGlow 6s ease-in-out infinite;
            }

            .pest-float {
              animation: pestFloat 5s ease-in-out infinite;
            }

            .pest-shine {
              position: relative;
              overflow: hidden;
            }

            .pest-shine::after {
              position: absolute;
              top: -80%;
              left: -120%;
              width: 20%;
              height: 260%;
              content: "";
              background: rgba(255, 255, 255, 0.25);
              transform: rotate(22deg);
              animation: pestShine 4.5s ease-in-out infinite;
            }

            .pest-grid-pattern {
              background-image:
                linear-gradient(
                  rgba(6, 59, 63, 0.04) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(6, 59, 63, 0.04) 1px,
                  transparent 1px
                );

              background-size: 38px 38px;
            }

            @media (prefers-reduced-motion: reduce) {
              .pest-glow,
              .pest-float,
              .pest-shine::after {
                animation: none;
              }
            }
          `}
        </style>

        {/* HERO SECTION */}

        <section className="relative overflow-hidden bg-gradient-to-br from-[#063b3f] via-[#08645d] to-[#008fc5] px-4 pb-20 pt-36 text-white md:pb-28 md:pt-48">
          <div className="pest-grid-pattern pointer-events-none absolute inset-0 opacity-20" />

          <div className="pest-glow pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-green-300/25 blur-[120px]" />

          <div className="pest-glow pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-300/25 blur-[120px]" />

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative z-10 mx-auto max-w-5xl text-center"
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[3px] text-green-100 shadow-xl backdrop-blur-xl sm:text-sm">
              <FaSearch />
              Professional Pest Guide
            </span>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Pest Identification
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-blue-50 sm:text-lg md:text-xl">
              Identify termites, cockroaches, rodents, ants, bed bugs and flies
              commonly found in homes and commercial properties across
              Bangalore. Learn how to recognize each pest and when professional
              treatment is recommended.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="mt-9 flex flex-wrap justify-center gap-3"
            >
              {[
                "🏠 19+ Years Experience",
                "🔍 5000+ Professional Pest Identification Guide in Bangalore",
                "📞 24/7 Support",
              ].map((item) => (
                <motion.span
                  key={item}
                  variants={scaleIn}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-xs font-semibold shadow-lg backdrop-blur-xl sm:text-sm"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* WHY IDENTIFY SECTION */}

        <section className="pest-grid-pattern relative overflow-hidden bg-white px-4 py-16 md:py-24">
          <div className="pest-glow pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-green-100/80 blur-[120px]" />

          <div className="relative mx-auto max-w-6xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="mx-auto max-w-4xl text-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-[#f6fffb] px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-green-700 sm:text-sm">
                <FaMicroscope />
                Pest Awareness
              </span>

              <h2 className="mt-5 text-3xl font-black leading-tight text-[#063b3f] md:text-5xl">
                Why Identifying Pests Matters
              </h2>

              <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
                Proper identification is the first step to effective pest
                control. Different pests require different treatment approaches.
                Knowing what you're dealing with helps you choose the right
                solution and prevent future infestations.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="mt-12 grid gap-6 sm:grid-cols-3"
            >
              {[
                {
                  icon: "🔬",
                  title: "Accurate Treatment",
                  description: "Use the right method for the right pest.",
                },
                {
                  icon: "🛡️",
                  title: "Prevent Damage",
                  description: "Stop pests before they cause structural harm.",
                },
                {
                  icon: "🧪",
                  title: "Eco-Friendly Options",
                  description: "Choose safe, sustainable control methods.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={scaleIn}
                  whileHover={{
                    y: -9,
                    scale: 1.02,
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-green-100 bg-gradient-to-br from-[#f6fffb] to-white p-7 text-center shadow-[0_18px_55px_rgba(6,59,63,0.08)]"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-green-100/70 blur-[45px] transition group-hover:bg-green-200/70" />

                  <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-green-100 bg-white text-3xl shadow-lg transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <h3 className="relative text-xl font-black text-[#063b3f]">
                    {item.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FILTER AND PEST GRID */}

        <section className="relative overflow-hidden bg-[#f8fcfb] px-4 py-16 md:py-24">
          <div className="pest-grid-pattern pointer-events-none absolute inset-0 opacity-70" />

          <div className="pest-glow pointer-events-none absolute -right-40 top-0 h-[430px] w-[430px] rounded-full bg-blue-100/80 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="mx-auto mb-10 max-w-3xl text-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-green-700 shadow-sm">
                <FaSearch />
                Browse Pest Library
              </span>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                Browse through our comprehensive pest library. Click on a
                category to filter pests by type, or scroll to see all.
              </p>
            </motion.div>

            {/* CATEGORY FILTER */}

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="mb-14 flex flex-wrap justify-center gap-3"
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  variants={scaleIn}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  whileHover={{
                    y: -3,
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  aria-label={`Filter by ${category}`}
                  className={`relative rounded-full px-5 py-3 text-xs font-black tracking-wide transition-all duration-300 sm:text-sm md:px-7 ${
                    activeCategory === category
                      ? "bg-[#063b3f] text-white shadow-[0_12px_35px_rgba(6,59,63,0.3)]"
                      : "border border-green-100 bg-white text-gray-700 shadow-sm hover:border-green-300 hover:text-green-700"
                  }`}
                >
                  {activeCategory === category && (
                    <motion.span
                      layoutId="activePestCategory"
                      className="absolute inset-0 -z-10 rounded-full bg-[#063b3f]"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 28,
                      }}
                    />
                  )}

                  {category}
                </motion.button>
              ))}
            </motion.div>

            {/* PEST CARDS */}

            <AnimatePresence mode="wait">
              {filteredPests.length === 0 ? (
                <motion.p
                  key="empty"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  className="mt-10 text-center text-lg text-gray-500"
                >
                  No pests found in this category.
                </motion.p>
              ) : (
                <motion.div
                  key={activeCategory}
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -12,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                  {filteredPests.map((pest, index) => (
                    <motion.article
                      key={`${pest.category}-${pest.name}`}
                      initial={{
                        opacity: 0,
                        y: 30,
                        scale: 0.96,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.04,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{
                        y: -10,
                      }}
                      className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-green-100 bg-white shadow-[0_18px_55px_rgba(6,59,63,0.09)] transition hover:border-green-300 hover:shadow-[0_28px_75px_rgba(6,59,63,0.16)]"
                    >
                      <div className="relative h-56 overflow-hidden bg-gray-100">
                        <img
                          src={pest.image}
                          alt={`${pest.name} identification guide in Bangalore`}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full   transition duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#031f21]/65 via-transparent to-transparent opacity-70" />

                        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[10px] font-black tracking-wider text-white backdrop-blur-xl">
                          {pest.category}
                        </span>

                        <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/15 text-xs font-black text-white backdrop-blur-xl">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="text-xl font-black leading-tight text-[#063b3f]">
                          {pest.name}
                        </h3>

                        <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                          {pest.desc ||
                            "Common pest found in homes and businesses."}
                        </p>

                        <div className="mt-6 border-t border-green-100 pt-5">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <Link
                              to="/contact"
                              className="group/link inline-flex items-center gap-2 text-sm font-bold text-[#063b3f] transition hover:text-green-700"
                            >
                              Book Inspection
                              <FaArrowRight
                                size={11}
                                className="transition group-hover/link:translate-x-1"
                              />
                            </Link>

                            <a
                              href={`https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Controls,%20I%20need%20help%20with%20${encodeURIComponent(
                                pest.name,
                              )}.`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm font-bold text-green-600 transition hover:text-green-700"
                            >
                              <FaWhatsapp />
                              Get Help
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* BOTTOM CTA */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="relative mt-16 overflow-hidden rounded-[36px] border border-green-200 bg-gradient-to-br from-[#063b3f] via-[#075d57] to-[#008fc5] p-7 text-center text-white shadow-[0_30px_90px_rgba(6,59,63,0.22)] sm:p-10 md:p-14"
            >
              <div className="pest-grid-pattern pointer-events-none absolute inset-0 opacity-20" />

              <div className="pest-glow pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-green-300/25 blur-[90px]" />

              <div className="pest-glow pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-300/25 blur-[90px]" />

              <div className="relative">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-2xl shadow-xl backdrop-blur-xl">
                  <FaSearch />
                </span>

                <h3 className="mt-6 text-3xl font-black leading-tight sm:text-4xl">
                  Can't Identify Your Pest?
                </h3>

                <p className="mx-auto mt-4 max-w-xl leading-7 text-blue-50">
                  Send us a photo and we'll help you identify it – free of
                  charge.
                </p>

                <motion.a
                  href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Controls,%20I%20need%20help%20identifying%20a%20pest."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="pest-shine mt-8 inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 font-black text-white shadow-xl transition hover:bg-green-400"
                >
                  <FaWhatsapp size={20} />
                  WhatsApp Us Now
                </motion.a>

                <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-blue-50 sm:text-sm">
                  {[
                    "Free identification help",
                    "Quick response",
                    "Professional support",
                  ].map((item) => (
                    <span key={item} className="inline-flex items-center gap-2">
                      <FaCheckCircle className="text-green-300" />

                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FINAL SUPPORT SECTION */}

        <section className="relative overflow-hidden bg-white px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="grid items-center gap-8 rounded-[32px] border border-green-100 bg-gradient-to-br from-[#f6fffb] to-white p-7 shadow-[0_24px_75px_rgba(6,59,63,0.1)] sm:p-10 lg:grid-cols-[1fr_auto]"
            >
              <div>
                <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[2px] text-green-700">
                  <FaShieldAlt />
                  Professional Assistance
                </span>

                <h2 className="mt-4 text-2xl font-black leading-tight text-[#063b3f] sm:text-3xl">
                  Get Expert Pest Identification Support
                </h2>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#063b3f] px-7 py-4 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#075d57]"
              >
                Book Inspection
                <FaArrowRight size={13} />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PestIdentification;
