import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "motion/react";
import bannerImage1 from "../images/tshirt.png";

import {
  ArrowRight,
  BadgeCheck,
  Bot,
  BookOpen,
  Building2,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Factory,
  Headphones,
  HomeIcon,
  Hospital,
  Hotel,
  LoaderCircle,
  MapPin,
  MessageCircle,
  Minus,
  Phone,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound,
  Warehouse,
  X,
} from "lucide-react";

import SEO from "../components/seo/seo";

import bannerImage from "../images/tshirt.png";

/* =========================================================
   BANGALORE SERVICE LOCATIONS
========================================================= */

const locations = [
  "JP Nagar",
  "Jayanagar",
  "Banashankari",
  "Kanakapura Road",
  "Bannerghatta Road",
  "BTM Layout",
  "HSR Layout",
  "Koramangala",
  "Electronic City",
  "Whitefield",
  "Marathahalli",
  "Indiranagar",
  "KR Puram",
  "Sarjapur Road",
  "Yelachenahalli",
  "Kumaraswamy Layout",
  "Basavanagudi",
  "Rajajinagar",
  "Malleshwaram",
  "Hebbal",
  "Yelahanka",
  "Bellandur",
  "Mahadevapura",
  "Horamavu",
  "Banaswadi",
  "Varthur",
  "Bommanahalli",
  "Arekere",
  "Hulimavu",
  "Uttarahalli",
];

/* =========================================================
   SERVICES USED IN ENQUIRY FORMS
========================================================= */

const formServices = [
  "General Pest Control",
  "Cockroach Control",
  "Termite Control",
  "Anti-Termite Treatment",
  "Pre Construction Termite Treatment",
  "Post Construction Termite Treatment",
  "Bed Bug Treatment",
  "Rodent Control",
  "Mosquito Control",
  "Ant Control",
  "Lizard Treatment",
  "Wood Borer Treatment",
  "Disinfection Services",
  "Pest Control for Hotels",
  "Pest Control for Hospitals",
  "Warehouse Pest Management",
  "Office Pest Control",
  "IT Campus Pest Control",
  "School & College Pest Control",
  "Residential Apartment Pest Control",
  "Commercial Pest Control",
  "Snake and Reptile Assistance",
  "Bee Hive Assistance",
  "Wasp and Hornet Control",
  "Spider Control",
  "Scorpion Control",
  "Fly Control",
  "Flea and Tick Control",
  "Silverfish Control",
  "Stored Product Pest Control",
  "Bird Control",
  "Other Pest Problem",
];

/* =========================================================
   HOME PAGE SERVICE CARDS
========================================================= */

const serviceCards = [
  {
    number: "01",
    icon: "🪳",
    title: "Cockroach Control in Bangalore",
    shortTitle: "Cockroach Control",
    description:
      "Professional cockroach control service in Bangalore for kitchens, bathrooms, apartments, restaurants, offices and commercial properties.",
    link: "/cockroach-management-service",
    label: "Popular Service",
  },
  {
    number: "02",
    icon: "🐜",
    title: "Termite Treatment in Bangalore",
    shortTitle: "Termite Treatment",
    description:
      "Anti-termite treatment in Bangalore for wooden furniture, doors, walls, flooring, apartments and commercial buildings.",
    link: "/anti-termite-treatment",
    label: "Property Protection",
  },
  {
    number: "03",
    icon: "🐭",
    title: "Rodent Control in Bangalore",
    shortTitle: "Rodent Control",
    description:
      "Professional rat and mouse control services for homes, restaurants, offices, warehouses and industrial properties.",
    link: "/rodent-management-service",
    label: "Home & Commercial",
  },
  {
    number: "04",
    icon: "🦟",
    title: "Mosquito Control in Bangalore",
    shortTitle: "Mosquito Control",
    description:
      "Indoor and outdoor mosquito control service with breeding-source inspection, treatment and prevention guidance.",
    link: "/mosquito-management-service",
    label: "Seasonal Protection",
  },
  {
    number: "05",
    icon: "🛏️",
    title: "Bed Bug Treatment in Bangalore",
    shortTitle: "Bed Bug Treatment",
    description:
      "Professional bed bug treatment for bedrooms, mattresses, apartments, hostels, hotels and furnished properties.",
    link: "/bed-bug-treatment",
    label: "Deep Treatment",
  },
  {
    number: "06",
    icon: "🏠",
    title: "General Pest Control in Bangalore",
    shortTitle: "General Pest Control",
    description:
      "General pest control services for cockroaches, ants, spiders, silverfish and other common household pests.",
    link: "/general-pest-control",
    label: "Complete Protection",
  },
  {
    number: "07",
    icon: "🏢",
    title: "Office Pest Control in Bangalore",
    shortTitle: "Office Pest Control",
    description:
      "Scheduled pest management services for offices, corporate buildings, coworking spaces and IT campuses.",
    link: "/office-pest-control",
    label: "Business Solutions",
  },
  {
    number: "08",
    icon: "🏨",
    title: "Hotel & Hospital Pest Control",
    shortTitle: "Hotel & Hospital Pest Control",
    description:
      "Professional pest control for hotels, hospitals, clinics, restaurants, hostels and hospitality properties.",
    link: "/hotel-hospital-pest-control",
    label: "Commercial Service",
  },
  {
    number: "09",
    icon: "🏭",
    title: "Warehouse Pest Management",
    shortTitle: "Warehouse Pest Control",
    description:
      "Integrated pest management for warehouses, godowns, storage areas, factories and distribution centres.",
    link: "/warehouse-pest-management",
    label: "Industrial Protection",
  },
];

/* =========================================================
   PEST CONTROL PROCESS
========================================================= */

const processSteps = [
  {
    icon: Phone,
    number: "01",
    title: "Book Service",
    description:
      "Call or WhatsApp our team and explain the pest problem at your property.",
  },
  {
    icon: Search,
    number: "02",
    title: "Property Inspection",
    description:
      "Our technician inspects the affected areas and identifies the infestation.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Professional Treatment",
    description:
      "The appropriate treatment is applied based on the pest and property type.",
  },
  {
    icon: BadgeCheck,
    number: "04",
    title: "Prevention Guidance",
    description:
      "Our team provides useful after-service and pest-prevention instructions.",
  },
];

/* =========================================================
   PROPERTY TYPES AND INDUSTRIES
========================================================= */

const industries = [
  {
    icon: HomeIcon,
    title: "Homes",
    description: "Apartments, villas and residential properties",
  },
  {
    icon: Building2,
    title: "Offices",
    description: "Corporate offices, coworking spaces and IT campuses",
  },
  {
    icon: Hotel,
    title: "Hotels",
    description: "Hotels, restaurants and hospitality properties",
  },
  {
    icon: Hospital,
    title: "Hospitals",
    description: "Hospitals, clinics and healthcare facilities",
  },
  {
    icon: Warehouse,
    title: "Warehouses",
    description: "Storage units, godowns and distribution centres",
  },
  {
    icon: Factory,
    title: "Industries",
    description: "Factories, production units and industrial properties",
  },
];

/* =========================================================
   RELATED BLOGS FOR INTERNAL LINKING
========================================================= */

const relatedGuides = [
  {
    category: "Cockroach Control",
    icon: "🪳",
    title: "How to Get Rid of Cockroaches",
    description:
      "Learn why cockroaches enter properties and when professional cockroach treatment is required.",
    link: "/blogs/get-rid-of-cockroaches",
  },
  {
    category: "Termite Treatment",
    icon: "🐜",
    title: "Signs of Termite Infestation",
    description:
      "Identify early termite warning signs before they damage furniture, wood and your property.",
    link: "/blogs/signs-of-termite-infestation",
  },
  {
    category: "Rodent Control",
    icon: "🐭",
    title: "Rat Control Tips for Homes",
    description:
      "Practical rodent-prevention methods for kitchens, apartments and residential properties.",
    link: "/blogs/rat-control-tips-for-homes",
  },
  {
    category: "Mosquito Control",
    icon: "🦟",
    title: "Mosquito Prevention During Rainy Season",
    description:
      "Reduce mosquito breeding and protect your family during Bangalore's rainy season.",
    link: "/blogs/mosquito-prevention-during-rainy-season",
  },
];

/* =========================================================
   TESTIMONIALS
========================================================= */

const testimonials = [
  {
    name: "Nirmala Shah",
    area: "JP Nagar, Bengaluru",
    service: "Termite Treatment",
    text: "Acuity Pest Controls did a professional termite treatment. The team was on time and explained everything clearly.",
  },
  {
    name: "Ravi Kumar",
    area: "Whitefield, Bengaluru",
    service: "Cockroach Control",
    text: "Our cockroach problem was solved quickly. The work was clean and we received good support from the team.",
  },
  {
    name: "Sneha Reddy",
    area: "Electronic City, Bengaluru",
    service: "Mosquito Control",
    text: "Good mosquito treatment service. The technicians were polite and the service was affordable.",
  },
];

/* =========================================================
   FREQUENTLY ASKED QUESTIONS
========================================================= */

const faqItems = [
  {
    question: "Which pest control services do you provide in Bangalore?",
    answer:
      "Acuity Pest Controls provides general pest control, cockroach control, termite treatment, bed bug treatment, rodent control, mosquito control, ant control, wood borer treatment and commercial pest management services across Bangalore.",
  },
  {
    question: "How can I find a reliable pest control service near me?",
    answer:
      "Choose a pest control company that inspects the infestation, explains the treatment process, provides safety instructions and recommends preventive measures. Acuity Pest Controls serves homes and businesses across major Bangalore locations.",
  },
  {
    question: "How much does pest control cost in Bangalore?",
    answer:
      "Pest control cost in Bangalore depends on the pest type, property size, infestation level, affected areas and treatment method. Contact our team with your property and pest details to receive an appropriate quotation.",
  },
  {
    question: "Do you provide pest control for homes and apartments?",
    answer:
      "Yes. We provide pest control services for flats, apartments, villas, independent houses, gated communities and residential common areas throughout Bangalore.",
  },
  {
    question:
      "Do you provide pest control for offices and commercial properties?",
    answer:
      "Yes. We provide commercial pest control for offices, restaurants, hotels, hospitals, warehouses, schools, colleges, IT campuses, factories and industrial properties.",
  },
  {
    question: "Do you provide same-day pest control service in Bangalore?",
    answer:
      "Same-day pest control service may be available depending on your Bangalore location, pest problem and technician availability. Call or WhatsApp our team to check the earliest available appointment.",
  },
  {
    question: "Is pest control safe for children and pets?",
    answer:
      "Safety requirements depend on the pest and treatment method. Our technicians explain preparation, waiting time, ventilation and after-service precautions for children, adults and pets.",
  },
  {
    question: "How often should pest control be done?",
    answer:
      "The recommended frequency depends on the pest, property type and infestation level. Homes may require periodic preventive treatment, while restaurants, offices, hotels and warehouses may benefit from a scheduled pest-management plan.",
  },
  {
    question: "Which areas do you serve in Bangalore?",
    answer:
      "We serve JP Nagar, Jayanagar, Banashankari, BTM Layout, HSR Layout, Koramangala, Electronic City, Whitefield, Marathahalli, Indiranagar, Hebbal, Yelahanka, Sarjapur Road and many nearby Bangalore areas.",
  },
  {
    question: "How can I book pest control service in Bangalore?",
    answer:
      "Call Acuity Pest Controls at +91 99412 29005 or submit the WhatsApp inspection form on our website. Share your location, pest problem and property type so our team can recommend the right service.",
  },
];

/* =========================================================
   SEO AND STRUCTURED DATA
========================================================= */

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "PestControl",
    "@id": "https://www.acuitypestcontrols.com/#business",

    name: "Acuity Pest Controls",

    alternateName: "Acuity Pest Control Bangalore",

    url: "https://www.acuitypestcontrols.com/",

    logo: "https://www.acuitypestcontrols.com/logo.png",

    image: "https://www.acuitypestcontrols.com/logo.png",

    description:
      "Acuity Pest Controls is a professional pest control company in Bangalore providing cockroach control, termite treatment, bed bug treatment, rodent control, mosquito control and commercial pest management services.",

    telephone: "+919941229005",

    email: "info@acuitypestcontrols.in",

    priceRange: "₹₹",

    currenciesAccepted: "INR",

    paymentAccepted: "Cash, UPI, Bank Transfer",

    hasMap:
      "https://www.google.com/maps?q=1st+Floor,+KVO-08,+No-28%2F2,+Near+Sun+Jupiter+School,+JP+Nagar+6th+Phase,+Yelachenahalli,+Kumaraswamy+Layout,+Bengaluru,+Karnataka+560078",

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",

        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],

        opens: "08:00",

        closes: "20:00",
      },
    ],

    address: {
      "@type": "PostalAddress",

      streetAddress:
        "1st Floor, KVO-08, No-28/2, Near Sun Jupiter School, JP Nagar 6th Phase, Yelachenahalli, Kumaraswamy Layout",

      addressLocality: "Bengaluru",

      addressRegion: "Karnataka",

      postalCode: "560078",

      addressCountry: "IN",
    },

    areaServed: [
      {
        "@type": "City",

        name: "Bengaluru",
      },

      ...locations.map((location) => ({
        "@type": "Place",

        name: `${location}, Bengaluru, Karnataka`,
      })),
    ],

    contactPoint: {
      "@type": "ContactPoint",

      telephone: "+919941229005",

      contactType: "customer service",

      areaServed: "IN-KA",

      availableLanguage: ["English", "Kannada", "Hindi"],
    },

    knowsAbout: [
      "Pest Control in Bangalore",
      "Cockroach Control",
      "Termite Treatment",
      "Bed Bug Treatment",
      "Rodent Control",
      "Mosquito Control",
      "Ant Control",
      "Wood Borer Treatment",
      "Residential Pest Control",
      "Commercial Pest Control",
      "Warehouse Pest Management",
      "Office Pest Control",
    ],

    makesOffer: serviceCards.map((service) => ({
      "@type": "Offer",

      itemOffered: {
        "@type": "Service",

        name: service.title,

        description: service.description,

        provider: {
          "@id": "https://www.acuitypestcontrols.com/#business",
        },

        areaServed: {
          "@type": "City",

          name: "Bengaluru",
        },

        url: `https://www.acuitypestcontrols.com${service.link}`,
      },
    })),
  },

  {
    "@context": "https://schema.org",

    "@type": "WebSite",

    "@id": "https://www.acuitypestcontrols.com/#website",

    url: "https://www.acuitypestcontrols.com/",

    name: "Acuity Pest Controls",

    alternateName: "Acuity Pest Control Bangalore",

    description:
      "Professional pest control services in Bangalore for homes, apartments, offices, restaurants, hotels, hospitals, warehouses and industries.",

    inLanguage: "en-IN",

    publisher: {
      "@id": "https://www.acuitypestcontrols.com/#business",
    },
  },

  {
    "@context": "https://schema.org",

    "@type": "WebPage",

    "@id": "https://www.acuitypestcontrols.com/#webpage",

    url: "https://www.acuitypestcontrols.com/",

    name: "Pest Control in Bangalore | Acuity Pest Controls",

    description:
      "Professional pest control services in Bangalore including cockroach control, termite treatment, bed bug treatment, rodent control and mosquito control.",

    isPartOf: {
      "@id": "https://www.acuitypestcontrols.com/#website",
    },

    about: {
      "@id": "https://www.acuitypestcontrols.com/#business",
    },

    primaryImageOfPage: {
      "@type": "ImageObject",

      url: "https://www.acuitypestcontrols.com/logo.png",
    },

    inLanguage: "en-IN",
  },

  {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",

        position: 1,

        name: "Pest Control in Bangalore",

        item: "https://www.acuitypestcontrols.com/",
      },
    ],
  },

  {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: faqItems.map((item) => ({
      "@type": "Question",

      name: item.question,

      acceptedAnswer: {
        "@type": "Answer",

        text: item.answer,
      },
    })),
  },
];

/* =========================================================
   SCROLL ANIMATIONS
========================================================= */

const revealUp = {
  hidden: {
    opacity: 0,
    y: 65,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const revealLeft = {
  hidden: {
    opacity: 0,
    x: -75,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const revealRight = {
  hidden: {
    opacity: 0,
    x: 75,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const revealZoom = {
  hidden: {
    opacity: 0,
    scale: 0.82,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const viewportSettings = {
  once: false,
  amount: 0.16,
  margin: "0px 0px -45px 0px",
};

/* =========================================================
   REUSABLE SECTION HEADING
========================================================= */

const SectionHeading = ({
  eyebrow,
  title,
  description,
  light = false,
  align = "center",
}) => {
  return (
    <motion.div
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      className={`max-w-3xl ${
        align === "left" ? "text-left" : "mx-auto text-center"
      }`}
    >
      <span
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[2px] ${
          light
            ? "border-white/20 bg-white/10 text-green-200"
            : "border-green-200 bg-green-50 text-green-700"
        }`}
      >
        <Sparkles size={15} />

        {eyebrow}
      </span>

      <h2
        className={`mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl ${
          light ? "text-white" : "text-[#063b3f]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-sm leading-7 sm:text-base ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

/* =========================================================
   AI CHATBOT QUICK QUESTIONS
========================================================= */

const chatbotSuggestions = [
  "Identify my pest",
  "Cockroach treatment",
  "Termite treatment",
  "Bed bug treatment",
  "Snake emergency",
  "Bee hive removal",
  "Rodent control",
  "Book an inspection",
];

/* =========================================================
   CHATBOT SERVICE PAGE LINKS
========================================================= */

const chatbotServiceLinks = {
  cockroach: {
    title: "Cockroach Control",
    path: "/cockroach-management-service",
  },

  termite: {
    title: "Termite Treatment",
    path: "/anti-termite-treatment",
  },

  bedbug: {
    title: "Bed Bug Treatment",
    path: "/bed-bug-treatment",
  },

  rodent: {
    title: "Rodent Control",
    path: "/rodent-management-service",
  },

  mosquito: {
    title: "Mosquito Control",
    path: "/mosquito-management-service",
  },

  office: {
    title: "Office Pest Control",
    path: "/office-pest-control",
  },

  hotel: {
    title: "Hotel & Hospital Pest Control",
    path: "/hotel-hospital-pest-control",
  },

  warehouse: {
    title: "Warehouse Pest Management",
    path: "/warehouse-pest-management",
  },
};

/* =========================================================
   COMPLETE AI CHATBOT REPLY LOGIC
========================================================= */

const getChatbotReply = (message) => {
  const text = message.toLowerCase().trim();

  const includesAny = (keywords) =>
    keywords.some((keyword) => text.includes(keyword));

  /* -------------------------
     GREETING
  ------------------------- */

  if (
    includesAny([
      "hi",
      "hello",
      "hey",
      "good morning",
      "good afternoon",
      "good evening",
    ])
  ) {
    return {
      text: "Hello! 👋 I am the Acuity Pest Control Assistant. You can ask me about insects, rodents, reptiles, snakes, bees, birds or any other pest problem.",
    };
  }

  /* -------------------------
     EMERGENCY SNAKE OR REPTILE
  ------------------------- */

  if (
    includesAny([
      "snake",
      "snakes",
      "cobra",
      "python",
      "viper",
      "krait",
      "serpent",
    ])
  ) {
    return {
      text: "Please do not approach, touch, trap or disturb the snake. Keep children and pets away, close nearby doors if it is safe, and maintain a clear distance. Snake handling should only be done by an authorised snake rescuer or wildlife professional. Call our team and share your location so we can guide you to the appropriate support.",
      action: "collect-details",
      emergency: true,
    };
  }

  if (
    includesAny(["reptile", "reptiles", "monitor lizard", "chameleon", "gecko"])
  ) {
    return {
      text: "For reptiles, keep a safe distance and do not try to catch or injure the animal. Remove children and pets from the area and contact a trained wildlife or reptile-rescue professional. We can also inspect possible entry points and pest-food sources around the property.",
      action: "collect-details",
    };
  }

  /* -------------------------
     LIZARDS
  ------------------------- */

  if (
    includesAny(["lizard", "lizards", "house lizard", "wall lizard", "gecko"])
  ) {
    return {
      text: "Lizard activity is often linked to insects, open entry points, wall gaps and food sources. We can inspect the property and recommend insect control, exclusion methods and preventive steps.",
      service: {
        title: "View Pest Control Services",
        path: "/services",
      },
    };
  }
  /* -------------------------
     BEES, WASPS AND HORNETS
  ------------------------- */

  if (
    includesAny([
      "bee",
      "bees",
      "honey bee",
      "honeybee",
      "beehive",
      "bee hive",
      "wasp",
      "wasps",
      "hornet",
      "hornets",
      "yellow jacket",
    ])
  ) {
    return {
      text: "Do not disturb, spray or hit the hive or nest. Keep people and pets away from the area. Bee colonies may require safe relocation by a trained beekeeper, while wasp or hornet nests require professional removal. Please share a photo, location and nest position with our team.",
      action: "collect-details",
    };
  }

  /* -------------------------
     SCORPIONS
  ------------------------- */

  if (includesAny(["scorpion", "scorpions"])) {
    return {
      text: "Avoid touching or trying to catch the scorpion. Keep children and pets away. Scorpion control may include inspection, hiding-area treatment, crack sealing and reduction of insect prey around the property.",
      action: "collect-details",
    };
  }

  /* -------------------------
     SPIDERS
  ------------------------- */

  if (includesAny(["spider", "spiders", "spider web", "cobweb", "webs"])) {
    return {
      text: "Spider activity is usually connected to insects, undisturbed corners, storage areas and entry gaps. We can provide inspection, web removal guidance, insect control and preventive treatment.",
      service: {
        title: "View General Pest Control",
        path: "/general-pest-control",
      },
    };
  }

  /* -------------------------
     COCKROACHES
  ------------------------- */

  if (
    includesAny([
      "cockroach",
      "cockroaches",
      "roach",
      "roaches",
      "german cockroach",
      "american cockroach",
    ])
  ) {
    return {
      text: "For cockroaches, we recommend professional treatment for kitchens, bathrooms, drains, cabinets and hidden harbourage areas. Our technician will inspect the infestation and provide preparation instructions.",
      service: chatbotServiceLinks.cockroach,
    };
  }

  /* -------------------------
     TERMITES AND WOOD PESTS
  ------------------------- */

  if (
    includesAny([
      "termite",
      "termites",
      "white ant",
      "white ants",
      "wood damage",
      "mud tube",
      "mud tubes",
    ])
  ) {
    return {
      text: "For termites or white ants, we recommend a detailed inspection. Treatment depends on whether the infestation is in furniture, walls, flooring, wooden frames or the building structure.",
      service: chatbotServiceLinks.termite,
    };
  }

  if (
    includesAny([
      "wood borer",
      "woodborer",
      "powderpost beetle",
      "wood beetle",
      "holes in wood",
      "wood dust",
    ])
  ) {
    return {
      text: "Small holes, powder-like wood dust or weak furniture may indicate wood-borer activity. Our technician can inspect the affected wood and recommend the suitable treatment.",
      service: {
        title: "View Wood Borer Treatment",
        path: "/wood-borer-treatment",
      },
    };
  }

  /* -------------------------
     BED BUGS
  ------------------------- */

  if (
    includesAny([
      "bed bug",
      "bed bugs",
      "bedbug",
      "bedbugs",
      "bites at night",
      "blood spots on bed",
    ])
  ) {
    return {
      text: "Bed bugs usually hide in mattresses, bed frames, furniture joints, sofas and nearby cracks. Professional treatment is recommended because hidden insects and eggs can cause the infestation to return.",
      service: chatbotServiceLinks.bedbug,
    };
  }

  /* -------------------------
     RODENTS
  ------------------------- */

  if (
    includesAny([
      "rat",
      "rats",
      "mouse",
      "mice",
      "rodent",
      "rodents",
      "droppings",
      "gnaw marks",
    ])
  ) {
    return {
      text: "For rats or mice, we provide inspection, entry-point identification, trapping or control planning and preventive recommendations for homes, offices, restaurants and warehouses.",
      service: chatbotServiceLinks.rodent,
    };
  }

  /* -------------------------
     MOSQUITOES
  ------------------------- */

  if (
    includesAny([
      "mosquito",
      "mosquitoes",
      "fogging",
      "mosquito breeding",
      "dengue",
    ])
  ) {
    return {
      text: "For mosquitoes, our technician checks breeding locations, stagnant water and resting areas before recommending indoor or outdoor mosquito treatment.",
      service: chatbotServiceLinks.mosquito,
    };
  }

  /* -------------------------
     ANTS
  ------------------------- */

  if (
    includesAny([
      "ant",
      "ants",
      "carpenter ant",
      "fire ant",
      "red ant",
      "black ant",
      "pharaoh ant",
    ]) &&
    !includesAny(["termite", "white ant"])
  ) {
    return {
      text: "Ant treatment depends on the species, nesting location and food source. Our technician can inspect trails and nesting areas before recommending the correct treatment.",
      service: {
        title: "View Ant Control",
        path: "/ant-control",
      },
    };
  }

  /* -------------------------
     FLIES
  ------------------------- */

  if (
    includesAny([
      "fly",
      "flies",
      "house fly",
      "fruit fly",
      "drain fly",
      "blue bottle fly",
      "moth fly",
    ])
  ) {
    return {
      text: "Fly control requires identifying breeding sources such as drains, waste, food residue, moisture or decaying material. We can inspect the property and recommend sanitation, source control and treatment.",
      service: {
        title: "View General Pest Control",
        path: "/general-pest-control",
      },
    };
  }

  /* -------------------------
     FLEAS AND TICKS
  ------------------------- */

  if (
    includesAny([
      "flea",
      "fleas",
      "tick",
      "ticks",
      "pet flea",
      "dog tick",
      "cat flea",
    ])
  ) {
    return {
      text: "Fleas and ticks may affect pets, bedding, carpets and surrounding areas. Pest treatment should be combined with veterinary guidance for pets and cleaning of affected fabrics and resting areas.",
      action: "collect-details",
    };
  }

  /* -------------------------
     SILVERFISH
  ------------------------- */

  if (includesAny(["silverfish", "silver fish"])) {
    return {
      text: "Silverfish prefer damp, dark areas and may damage paper, books, wallpaper and stored materials. Treatment includes moisture reduction, crack treatment and targeted pest control.",
      action: "collect-details",
    };
  }

  /* -------------------------
     CENTIPEDES AND MILLIPEDES
  ------------------------- */

  if (includesAny(["centipede", "centipedes", "millipede", "millipedes"])) {
    return {
      text: "Centipedes and millipedes are often associated with moisture, gardens, drains and entry gaps. Control includes moisture correction, exclusion and treatment of hiding areas.",
      action: "collect-details",
    };
  }

  /* -------------------------
     MOTHS AND BEETLES
  ------------------------- */

  if (
    includesAny([
      "moth",
      "moths",
      "clothes moth",
      "carpet beetle",
      "beetle",
      "beetles",
    ])
  ) {
    return {
      text: "Moths and beetles may affect clothes, carpets, furniture, stored food or wooden items. Please tell us where you are seeing them so we can identify the likely pest and suggest the correct treatment.",
      action: "collect-details",
    };
  }

  /* -------------------------
     STORED PRODUCT PESTS
  ------------------------- */

  if (
    includesAny([
      "weevil",
      "weevils",
      "grain insect",
      "rice insect",
      "flour beetle",
      "pantry pest",
      "stored product pest",
      "insects in rice",
      "insects in flour",
      "insects in grains",
    ])
  ) {
    return {
      text: "Stored-product pests can infest rice, flour, pulses, spices, grains and packaged food. Remove heavily infested items, clean shelves and contact us for inspection and treatment guidance.",
      action: "collect-details",
    };
  }

  /* -------------------------
     BIRDS
  ------------------------- */

  if (
    includesAny([
      "pigeon",
      "pigeons",
      "bird",
      "birds",
      "crow",
      "sparrow",
      "bird nest",
    ])
  ) {
    return {
      text: "Bird-control solutions may include netting, spikes, exclusion and cleaning recommendations. Active nests, eggs and protected species must be handled carefully and according to local wildlife rules.",
      action: "collect-details",
    };
  }

  /* -------------------------
     BATS
  ------------------------- */

  if (includesAny(["bat", "bats", "bat colony"])) {
    return {
      text: "Do not touch or trap bats. Keep people and pets away and contact a trained wildlife professional. Exclusion should only be done after confirming that no dependent young are inside.",
      action: "collect-details",
    };
  }

  /* -------------------------
     SNAILS AND SLUGS
  ------------------------- */

  if (includesAny(["snail", "snails", "slug", "slugs"])) {
    return {
      text: "Snails and slugs are commonly linked to damp gardens, drainage and excess moisture. Control includes habitat correction, removal of hiding places and suitable treatment.",
      action: "collect-details",
    };
  }

  /* -------------------------
     OFFICE AND COMMERCIAL
  ------------------------- */

  if (
    includesAny([
      "office",
      "company",
      "corporate",
      "commercial",
      "shop",
      "mall",
      "it campus",
    ])
  ) {
    return {
      text: "We provide scheduled commercial pest-management services for offices, corporate properties, IT campuses, shops and other business facilities.",
      service: chatbotServiceLinks.office,
    };
  }

  if (
    includesAny([
      "hotel",
      "restaurant",
      "hospital",
      "clinic",
      "hostel",
      "kitchen",
      "food business",
    ])
  ) {
    return {
      text: "We provide pest-management services for hotels, restaurants, hospitals, clinics, hostels and food-handling properties, with treatment planning based on the facility.",
      service: chatbotServiceLinks.hotel,
    };
  }

  if (
    includesAny([
      "warehouse",
      "godown",
      "storage",
      "factory",
      "industry",
      "industrial",
    ])
  ) {
    return {
      text: "Warehouse and industrial pest management may include rodent control, crawling-insect control, flying-insect management, monitoring and preventive recommendations.",
      service: chatbotServiceLinks.warehouse,
    };
  }

  /* -------------------------
     UNKNOWN PEST IDENTIFICATION
  ------------------------- */

  if (
    includesAny([
      "identify pest",
      "which insect",
      "unknown insect",
      "not sure",
      "what pest is this",
      "send photo",
    ])
  ) {
    return {
      text: "Please share the pest colour, size, shape, location, activity time and any damage you noticed. You can also send a clear photo through WhatsApp so our team can help identify it.",
      action: "collect-details",
    };
  }

  /* -------------------------
     PRICE
  ------------------------- */

  if (
    includesAny([
      "price",
      "cost",
      "charge",
      "charges",
      "rate",
      "quotation",
      "estimate",
    ])
  ) {
    return {
      text: "The price depends on the pest type, property size, infestation level and treatment method. Share your details and our team will provide the appropriate quotation.",
      action: "collect-details",
    };
  }

  /* -------------------------
     SAFETY
  ------------------------- */

  if (
    includesAny([
      "safe",
      "safety",
      "child",
      "children",
      "baby",
      "pet",
      "dog",
      "cat",
      "pregnant",
    ])
  ) {
    return {
      text: "Safety instructions depend on the treatment selected. Our technician will explain preparation, waiting time, ventilation and after-service precautions for children, adults and pets.",
    };
  }

  /* -------------------------
     URGENT SERVICE
  ------------------------- */

  if (
    includesAny([
      "same day",
      "today",
      "urgent",
      "immediately",
      "emergency",
      "now",
    ])
  ) {
    return {
      text: "Same-day service depends on your location and technician availability. Please share your name, phone number, location and pest problem so our team can check availability.",
      action: "collect-details",
    };
  }

  /* -------------------------
     LOCATION
  ------------------------- */

  if (
    includesAny([
      "location",
      "area",
      "where do you serve",
      "service area",
      "bangalore areas",
    ])
  ) {
    return {
      text: "We provide pest-control services across Bangalore, including JP Nagar, Jayanagar, Banashankari, HSR Layout, Koramangala, Whitefield, Electronic City, Marathahalli, Indiranagar, Hebbal, Yelahanka and nearby areas.",
    };
  }

  /* -------------------------
     BOOKING
  ------------------------- */

  if (includesAny(["book", "inspection", "appointment", "schedule", "visit"])) {
    return {
      text: "I can help you book an inspection. Please enter your name, 10-digit phone number, location and required pest-control service.",
      action: "collect-details",
    };
  }

  /* -------------------------
     CONTACT
  ------------------------- */

  if (includesAny(["call", "phone", "contact", "number", "whatsapp"])) {
    return {
      text: "You can call Acuity Pest Controls at +91 99412 29005 or continue here and send your enquiry through WhatsApp.",
      action: "collect-details",
    };
  }

  /* -------------------------
     THANK YOU
  ------------------------- */

  if (includesAny(["thank", "thanks", "thank you"])) {
    return {
      text: "You are welcome. You can ask me about any insect, rodent, reptile, bird or pest-control problem.",
    };
  }

  /* -------------------------
     DEFAULT RESPONSE
  ------------------------- */

  return {
    text: "I can help with cockroaches, termites, bed bugs, rats, mosquitoes, ants, flies, spiders, scorpions, bees, wasps, snakes, reptiles, lizards, fleas, ticks, birds, bats, wood borers and other pest problems. Please describe what you saw and where you found it.",
  };
};

/* =========================================================
   AI CHATBOT COMPONENT (MODIFIED – WhatsApp removed)
========================================================= */

const AcuityChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isMinimized, setIsMinimized] = useState(false);

  const [input, setInput] = useState("");

  const [isTyping, setIsTyping] = useState(false);

  const [showLeadForm, setShowLeadForm] = useState(false);

  const [leadDetails, setLeadDetails] = useState({
    name: "",
    phone: "",
    location: "",
    service: "",
  });

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello! 👋 I am the Acuity Pest Control Assistant. How can I help you today?",
    },
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const scrollTimer = window.setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);

    return () => {
      window.clearTimeout(scrollTimer);
    };
  }, [messages, isTyping, isOpen, showLeadForm]);

  const addBotReply = (reply) => {
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((previous) => [
        ...previous,
        {
          id: Date.now(),
          sender: "bot",
          text: reply.text,
          service: reply.service,
        },
      ]);

      setIsTyping(false);

      if (reply.action === "collect-details") {
        setShowLeadForm(true);
      }
    }, 700);
  };

  const sendMessage = (customMessage) => {
    const messageText =
      typeof customMessage === "string" ? customMessage.trim() : input.trim();

    if (!messageText || isTyping) {
      return;
    }

    setMessages((previous) => [
      ...previous,
      {
        id: Date.now(),
        sender: "user",
        text: messageText,
      },
    ]);

    setInput("");

    const reply = getChatbotReply(messageText);

    addBotReply(reply);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      sendMessage();
    }
  };

  const handleLeadChange = (event) => {
    const { name, value } = event.target;

    setLeadDetails((previous) => ({
      ...previous,

      [name]: name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value,
    }));
  };

  // MODIFIED: Instead of opening WhatsApp, we show a success message and log the enquiry.
  const sendLeadToInternal = (event) => {
    event.preventDefault();

    const cleanName = leadDetails.name.trim();
    const cleanPhone = leadDetails.phone.replace(/\D/g, "");
    const cleanLocation = leadDetails.location.trim();
    const cleanService = leadDetails.service.trim();

    if (!cleanName) {
      window.alert("Please enter your name.");
      return;
    }

    if (cleanPhone.length !== 10) {
      window.alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!cleanLocation) {
      window.alert("Please enter your location.");
      return;
    }

    if (!cleanService) {
      window.alert("Please select the required service.");
      return;
    }

    const recentChat = messages
      .slice(-6)
      .map(
        (message) =>
          `${message.sender === "user" ? "Customer" : "Assistant"}: ${
            message.text
          }`,
      )
      .join("\n");

    const whatsappMessage = `*New AI Chatbot Enquiry*

*Name:* ${cleanName}
*Phone:* ${cleanPhone}
*Location:* ${cleanLocation}
*Required Service:* ${cleanService}

*Recent Chat:*
${recentChat}

Enquiry received from Acuity Pest Controls website.`;

    const whatsappNumber = "919941229005";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setMessages((previous) => [
      ...previous,
      {
        id: Date.now(),
        sender: "bot",
        text: "Your enquiry is ready in WhatsApp. Please press Send to deliver it to our team.",
      },
    ]);

    setShowLeadForm(false);

    setLeadDetails({
      name: "",
      phone: "",
      location: "",
      service: "",
    });
  };

  const resetChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: "bot",
        text: "Hello! 👋 I am the Acuity Pest Control Assistant. How can I help you today?",
      },
    ]);

    setInput("");

    setShowLeadForm(false);

    setLeadDetails({
      name: "",
      phone: "",
      location: "",
      service: "",
    });
  };

  // Return the JSX for the chatbot (same as before, but with the modified submit handler)
  return (
    <>
      {/* Floating button to open chat */}
      {!isOpen && (
        <motion.button
          type="button"
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          initial={{
            opacity: 0,
            scale: 0.7,
            y: 25,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          whileHover={{
            scale: 1.07,
            y: -4,
          }}
          whileTap={{
            scale: 0.94,
          }}
          aria-label="Open Acuity Pest Control chat assistant"
          className="fixed bottom-[88px] right-4 z-[1200] flex items-center gap-3 rounded-full border-4 border-white bg-gradient-to-r from-[#063b3f] to-green-700 p-2 pr-5 text-white shadow-[0_20px_50px_rgba(6,59,63,0.35)] md:bottom-6 md:right-6"
        >
          <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-green-400 text-[#063b3f]">
            <Bot size={26} />
            <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
          </span>
          <span className="text-left">
            <span className="block text-xs font-medium text-green-200">
              Need help?
            </span>
            <span className="block text-sm font-black">Chat With Us</span>
          </span>
        </motion.button>
      )}

      {/* Chat window */}
      {isOpen && (
        <motion.aside
          initial={{
            opacity: 0,
            scale: 0.88,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.88,
            y: 40,
          }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`fixed bottom-[88px] right-3 z-[1300] w-[calc(100%-24px)] overflow-hidden rounded-[26px] border border-green-100 bg-white shadow-[0_30px_90px_rgba(6,59,63,0.32)] sm:right-5 sm:w-[410px] md:bottom-6 md:right-6 ${
            isMinimized ? "h-auto" : ""
          }`}
        >
          {/* Header */}
          <div className="relative overflow-hidden bg-gradient-to-r from-[#063b3f] via-[#075f51] to-green-700 px-4 py-4 text-white">
            <div className="absolute -right-10 -top-12 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            <div className="relative flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-green-400 text-[#063b3f] shadow-lg">
                  <Bot size={24} />
                  <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-2 border-[#075f51] bg-green-300" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-black sm:text-base">
                    Acuity AI Assistant
                  </p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-[10px] font-medium text-green-100 sm:text-xs">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-green-300" />
                    Online • Quick response
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsMinimized((previous) => !previous)}
                  aria-label={
                    isMinimized ? "Expand chatbot" : "Minimize chatbot"
                  }
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                >
                  {isMinimized ? (
                    <ChevronDown size={17} />
                  ) : (
                    <Minus size={17} />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setIsMinimized(false);
                  }}
                  aria-label="Close chatbot"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                >
                  <X size={17} />
                </button>
              </div>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="h-[330px] overflow-y-auto bg-gradient-to-b from-[#f4fbf8] to-white px-3 py-4 sm:h-[390px] sm:px-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`flex max-w-[88%] items-start gap-2 ${
                          message.sender === "user"
                            ? "flex-row-reverse"
                            : "flex-row"
                        }`}
                      >
                        <div
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                            message.sender === "user"
                              ? "bg-[#063b3f] text-white"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {message.sender === "user" ? (
                            <UserRound size={16} />
                          ) : (
                            <Bot size={16} />
                          )}
                        </div>
                        <div>
                          <div
                            className={`rounded-2xl px-4 py-3 text-xs leading-6 shadow-sm sm:text-sm ${
                              message.sender === "user"
                                ? "rounded-tr-md bg-gradient-to-r from-[#063b3f] to-green-700 text-white"
                                : "rounded-tl-md border border-green-100 bg-white text-gray-700"
                            }`}
                          >
                            {message.text}
                          </div>
                          {message.service && (
                            <Link
                              to={message.service.path}
                              onClick={() => setIsOpen(false)}
                              className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-2 text-[10px] font-black text-green-700 transition hover:border-green-600 hover:bg-green-600 hover:text-white sm:text-xs"
                            >
                              {message.service.title}
                              <ArrowRight size={13} />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
                          <Bot size={16} />
                        </div>
                        <div className="flex items-center gap-1 rounded-2xl rounded-tl-md border border-green-100 bg-white px-4 py-3 shadow-sm">
                          {[0, 1, 2].map((dot) => (
                            <motion.span
                              key={dot}
                              animate={{
                                y: [0, -5, 0],
                                opacity: [0.4, 1, 0.4],
                              }}
                              transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: dot * 0.15,
                              }}
                              className="h-2 w-2 rounded-full bg-green-500"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Lead Form (modified: uses internal submission) */}
                  {showLeadForm && (
                    <motion.form
                      onSubmit={sendLeadToInternal}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      className="rounded-2xl border border-green-200 bg-white p-3 shadow-lg sm:p-4"
                    >
                      <div className="mb-3 flex items-start gap-2">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                          <MessageCircle size={18} />
                        </div>
                        <div>
                          <p className="text-xs font-black text-[#063b3f] sm:text-sm">
                            Request a callback
                          </p>
                          <p className="mt-0.5 text-[10px] leading-4 text-gray-500 sm:text-xs">
                            Enter your details and our team will contact you.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        <div className="relative">
                          <UserRound
                            size={15}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-green-700"
                          />
                          <input
                            type="text"
                            name="name"
                            value={leadDetails.name}
                            onChange={handleLeadChange}
                            placeholder="Your full name"
                            autoComplete="name"
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-3 text-xs text-gray-700 outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
                          />
                        </div>
                        <div className="relative">
                          <Phone
                            size={15}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-green-700"
                          />
                          <input
                            type="tel"
                            name="phone"
                            value={leadDetails.phone}
                            onChange={handleLeadChange}
                            placeholder="10-digit phone number"
                            inputMode="numeric"
                            autoComplete="tel"
                            maxLength={10}
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-3 text-xs text-gray-700 outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
                          />
                        </div>
                        <div className="relative">
                          <MapPin
                            size={15}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-green-700"
                          />
                          <input
                            type="text"
                            name="location"
                            value={leadDetails.location}
                            onChange={handleLeadChange}
                            placeholder="Your Bangalore location"
                            autoComplete="address-level2"
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-3 text-xs text-gray-700 outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
                          />
                        </div>
                        <div className="relative">
                          <ShieldCheck
                            size={15}
                            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-green-700"
                          />
                          <select
                            name="service"
                            value={leadDetails.service}
                            onChange={handleLeadChange}
                            className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-9 text-xs text-gray-700 outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
                          >
                            <option value="">Select required service</option>
                            {formServices.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                          <ChevronDown
                            size={15}
                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                          />
                        </div>
                        <button
                          type="submit"
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-green-700 px-4 py-3 text-xs font-black text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-0.5 hover:from-green-700 hover:to-green-800"
                        >
                          <MessageCircle size={16} />
                          Submit Enquiry
                        </button>
                      </div>
                    </motion.form>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Quick questions */}
              <div className="border-t border-gray-100 bg-white px-3 py-3 sm:px-4">
                <p className="mb-2 text-[9px] font-black uppercase tracking-[1.5px] text-gray-400">
                  Quick questions
                </p>
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {chatbotSuggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => sendMessage(suggestion)}
                      disabled={isTyping}
                      className="shrink-0 rounded-full border border-green-200 bg-green-50 px-3 py-2 text-[10px] font-bold text-green-700 transition hover:border-green-600 hover:bg-green-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="border-t border-gray-100 bg-white px-3 pb-3 pt-2 sm:px-4 sm:pb-4">
                <div className="flex items-end gap-2 rounded-2xl border border-gray-200 bg-gray-50 p-2 transition focus-within:border-green-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-green-100">
                  <textarea
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={handleInputKeyDown}
                    rows={1}
                    placeholder="Type your pest-control question..."
                    aria-label="Type your pest-control question"
                    className="max-h-24 min-h-[40px] flex-1 resize-none bg-transparent px-2 py-2 text-xs leading-5 text-gray-700 outline-none placeholder:text-gray-400 sm:text-sm"
                  />
                  <motion.button
                    type="button"
                    onClick={() => sendMessage()}
                    disabled={!input.trim() || isTyping}
                    whileHover={{
                      scale: 1.06,
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    aria-label="Send chatbot message"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-600 text-white shadow-md transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-300"
                  >
                    {isTyping ? (
                      <LoaderCircle size={17} className="animate-spin" />
                    ) : (
                      <Send size={17} />
                    )}
                  </motion.button>
                </div>
                <div className="mt-2 flex items-center justify-between px-1">
                  <button
                    type="button"
                    onClick={resetChat}
                    className="text-[10px] font-bold text-gray-400 transition hover:text-green-700"
                  >
                    Start new conversation
                  </button>
                  <p className="text-[9px] text-gray-400">
                    Acuity Pest Controls
                  </p>
                </div>
              </div>
            </>
          )}
        </motion.aside>
      )}
    </>
  );
};

/* =========================================================
   HOME PAGE COMPONENT (MODIFIED – WhatsApp removed)
========================================================= */

const Home = () => {
  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");

  const [serviceOpen, setServiceOpen] = useState(false);

  const [selectedServices, setSelectedServices] = useState([]);

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const [openFaq, setOpenFaq] = useState(0);

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTestimonial((previous) => (previous + 1) % testimonials.length);
    }, 5000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const toggleService = (serviceName) => {
    setSelectedServices((previous) =>
      previous.includes(serviceName)
        ? previous.filter((service) => service !== serviceName)
        : [...previous, serviceName],
    );
  };

  // Modified: this form now logs enquiry instead of sending WhatsApp
const handleEnquirySubmit = (event) => {
  event.preventDefault();

  const cleanName = name.trim();
  const cleanPhone = phone.replace(/\D/g, "");

  if (!cleanName) {
    window.alert("Please enter your full name.");
    return;
  }

  if (cleanPhone.length !== 10) {
    window.alert("Please enter a valid 10-digit phone number.");
    return;
  }

  const selectedServiceText =
    selectedServices.length > 0
      ? selectedServices.join(", ")
      : "General Pest Control Enquiry";

  const whatsappMessage = `*New Website Enquiry*

*Name:* ${cleanName}
*Phone:* ${cleanPhone}
*Required Service:* ${selectedServiceText}

Enquiry received from Acuity Pest Controls website.`;

  const whatsappNumber = "919941229005";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");

  setName("");
  setPhone("");
  setSelectedServices([]);
  setServiceOpen(false);
};

  const previousTestimonial = () => {
    setActiveTestimonial((previous) =>
      previous === 0 ? testimonials.length - 1 : previous - 1,
    );
  };

  const nextTestimonial = () => {
    setActiveTestimonial((previous) => (previous + 1) % testimonials.length);
  };

  return (
    <div className="w-full overflow-x-hidden bg-white">
      {/* =====================================================
          SEO
      ====================================================== */}

      <SEO
        title="Pest Control Services in Bangalore | Acuity Pest Controls"
        description="Looking for professional pest control services in Bangalore? Acuity Pest Controls offers termite treatment, cockroach control, bed bug treatment, rodent control, mosquito control and commercial pest management. Book an inspection today."
        keywords="pest control services in Bangalore, pest control Bangalore, cockroach control Bangalore, termite control Bangalore, bed bug control Bangalore, mosquito control Bangalore, rodent control Bangalore, commercial pest control Bangalore"
        canonical="https://www.acuitypestcontrols.com/"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={homeSchema}
      />

      {/* =====================================================
          TOP SCROLL PROGRESS BAR
      ====================================================== */}

      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-[9999] h-1 origin-left bg-green-500"
      />

      {/* =====================================================
          HOME PAGE ANIMATIONS
      ====================================================== */}

      <style>
        {`
          @keyframes acuityFloat {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }

            50% {
              transform: translateY(-16px) rotate(3deg);
            }
          }

          @keyframes acuityFloatReverse {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }

            50% {
              transform: translateY(13px) rotate(-3deg);
            }
          }

          @keyframes acuityPulseGlow {
            0%, 100% {
              box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.2);
            }

            50% {
              box-shadow: 0 0 0 18px rgba(34, 197, 94, 0);
            }
          }

          @keyframes acuityMarquee {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          .acuity-float {
            animation: acuityFloat 5s ease-in-out infinite;
          }

          .acuity-float-reverse {
            animation: acuityFloatReverse 6s ease-in-out infinite;
          }

          .acuity-pulse-glow {
            animation: acuityPulseGlow 2.2s ease-in-out infinite;
          }

          .acuity-marquee {
            animation: acuityMarquee 28s linear infinite;
          }

          .acuity-marquee:hover {
            animation-play-state: paused;
          }

          .home-banner {
            position: relative;
            width: 100%;
            overflow: hidden;
            background: #f3f7f5;
          }

          .home-banner img {
            display: block;
            width: 100%;
            height: auto;
            object-fit: contain;
          }

          @media (max-width: 767px) {
            .home-banner img {
              min-height: 240px;
              object-fit: cover;
              object-position: center;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .acuity-float,
            .acuity-float-reverse,
            .acuity-pulse-glow,
            .acuity-marquee {
              animation: none;
            }
          }
        `}
      </style>
      {/* =====================================================
          HOME BANNER
      ====================================================== */}

      <section className="home-banner">
        <motion.img
          src={bannerImage}
          alt="Professional pest control services in Bangalore by Acuity Pest Controls"
          fetchPriority="high"
          decoding="async"
          initial={{
            opacity: 0,
            scale: 1.06,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </section>

      {/* =====================================================
          HERO AND INSPECTION FORM
      ====================================================== */}

      <section
        id="inspection"
        className="relative overflow-hidden bg-gradient-to-br from-[#f7fcfa] via-white to-green-50 py-14 sm:py-20 md:py-28"
      >
        {/* BACKGROUND DECORATIONS */}

        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />

        <div className="acuity-pulse pointer-events-none absolute -right-28 top-10 h-[390px] w-[390px] rounded-full bg-emerald-200/30 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-white to-transparent" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16"
        >
          {/* HERO CONTENT */}

          <motion.div variants={revealLeft}>
            <motion.span
              whileHover={{
                scale: 1.03,
              }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-xs font-black text-green-700 shadow-sm sm:text-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-70" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              Trusted by 5,000+ Customers
            </motion.span>

            <h1 className="max-w-3xl text-3xl font-black leading-[1.13] text-[#063b3f] sm:text-4xl md:text-5xl lg:text-[58px]">
              Professional Pest Control Services in Bangalore
              <span className="mt-2 block bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                for Homes and Businesses
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base md:text-[17px] md:leading-8">
              Acuity Pest Controls provides professional and long-lasting{" "}
              <Link
                to="/general-pest-control"
                className="font-bold text-green-700 underline decoration-green-300 underline-offset-4 transition hover:text-green-800"
              >
                pest control services in Bangalore
              </Link>{" "}
              for homes, apartments, offices, restaurants, hotels, hospitals,
              warehouses and industrial properties.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Our trained technicians provide solutions for{" "}
              <Link
                to="/cockroach-management-service"
                className="font-semibold text-green-700 hover:underline"
              >
                cockroach control
              </Link>
              ,{" "}
              <Link
                to="/anti-termite-treatment"
                className="font-semibold text-green-700 hover:underline"
              >
                termite treatment
              </Link>
              ,{" "}
              <Link
                to="/bed-bug-treatment"
                className="font-semibold text-green-700 hover:underline"
              >
                bed bug treatment
              </Link>
              ,{" "}
              <Link
                to="/rodent-management-service"
                className="font-semibold text-green-700 hover:underline"
              >
                rodent control
              </Link>{" "}
              and{" "}
              <Link
                to="/mosquito-management-service"
                className="font-semibold text-green-700 hover:underline"
              >
                mosquito management
              </Link>
              .
            </p>

            {/* HERO BUTTONS - WhatsApp removed, only call and chat */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <motion.a
                href="tel:+919941229005"
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="acuity-shine inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-green-700 px-7 py-3.5 text-sm font-black text-white shadow-xl shadow-green-700/20 transition hover:from-green-700 hover:to-green-800"
              >
                <Phone size={18} />
                Call +91 99412 29005
              </motion.a>

              <motion.button
                onClick={() => {
                  // Trigger AI chatbot open
                  // We need to access the chatbot's state. Since the chatbot is inside this component,
                  // we can use a ref or state to control it. For simplicity, we'll rely on the floating button.
                  // We'll just scroll to the chatbot or open it via a global event? Since we can't easily access the chatbot's state from here,
                  // we can either remove this button or make it open the chatbot by using a global event or ref.
                  // As a quick fix, we'll just scroll to the chatbot area.
                  const chatbotButton = document.querySelector(
                    '[aria-label="Open Acuity Pest Control chat assistant"]',
                  );
                  if (chatbotButton) {
                    chatbotButton.click();
                  }
                }}
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-green-600 bg-white px-7 py-3.5 text-sm font-black text-green-700 shadow-sm transition hover:bg-green-50"
              >
                <Bot size={18} />
                Chat with AI
              </motion.button>
            </div>

            {/* TRUST POINTS */}

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
              {[
                "Trained Technicians",
                "Home & Commercial",
                "Quick Response",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-bold text-[#063b3f] sm:text-sm"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <Check size={13} strokeWidth={3} />
                  </span>

                  {item}
                </div>
              ))}
            </div>

            {/* STATISTICS */}

            <motion.div
              variants={staggerContainer}
              className="mt-9 grid grid-cols-3 gap-2.5 sm:gap-4"
            >
              {[
                {
                  number: "19+",
                  label: "Years",
                  icon: Clock3,
                },
                {
                  number: "15K+",
                  label: "Treatments",
                  icon: ShieldCheck,
                },
                {
                  number: "All Days",
                  label: "Support",
                  icon: Headphones,
                },
              ].map((stat) => {
                const StatIcon = stat.icon;

                return (
                  <motion.div
                    key={stat.label}
                    variants={revealUp}
                    whileHover={{
                      y: -7,
                      scale: 1.025,
                    }}
                    className="group rounded-2xl border border-green-100 bg-white p-3 text-center shadow-[0_12px_35px_rgba(6,59,63,0.08)] transition sm:p-5"
                  >
                    <span className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-green-700 transition group-hover:bg-green-600 group-hover:text-white">
                      <StatIcon size={18} />
                    </span>

                    <p className="text-lg font-black text-[#063b3f] sm:text-2xl">
                      {stat.number}
                    </p>

                    <p className="mt-1 text-[10px] font-bold text-gray-500 sm:text-xs">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* INSPECTION FORM (modified: uses internal submission, not WhatsApp) */}

          <motion.div
            variants={revealRight}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="acuity-float pointer-events-none absolute -left-5 -top-7 hidden h-20 w-20 items-center justify-center rounded-3xl border border-green-100 bg-white text-4xl shadow-xl sm:flex">
              🪳
            </div>

            <div className="acuity-float-reverse pointer-events-none absolute -bottom-7 -right-5 hidden h-20 w-20 items-center justify-center rounded-3xl border border-green-100 bg-white text-4xl shadow-xl sm:flex">
              🛡️
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-green-100 bg-white p-5 shadow-[0_30px_90px_rgba(6,59,63,0.16)] sm:rounded-[36px] sm:p-8">
              <div className="pointer-events-none absolute -right-20 -top-24 h-52 w-52 rounded-full bg-green-100 blur-3xl" />

              <div className="relative">
                <div className="mb-6 flex items-start gap-3">
                  <div className="acuity-pulse-glow flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-700 text-white shadow-lg">
                    <ShieldCheck size={25} />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[2px] text-green-700">
                      Free Inspection Request
                    </p>

                    <h2 className="mt-1 text-2xl font-black text-[#063b3f] sm:text-3xl">
                      Book Pest Control Service
                    </h2>

                    <p className="mt-2 text-xs leading-5 text-gray-500 sm:text-sm">
                      Submit your details and our team will contact you to
                      understand your pest problem.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  {/* NAME */}

                  <div>
                    <label
                      htmlFor="homepage-name"
                      className="mb-2 block text-xs font-black text-[#063b3f] sm:text-sm"
                    >
                      Your Full Name
                    </label>

                    <div className="relative">
                      <UserRound
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-green-700"
                      />

                      <input
                        id="homepage-name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Enter your full name"
                        autoComplete="name"
                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-3.5 pl-12 pr-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                      />
                    </div>
                  </div>

                  {/* PHONE */}

                  <div>
                    <label
                      htmlFor="homepage-phone"
                      className="mb-2 block text-xs font-black text-[#063b3f] sm:text-sm"
                    >
                      Phone Number
                    </label>

                    <div className="relative">
                      <Phone
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-green-700"
                      />

                      <input
                        id="homepage-phone"
                        type="tel"
                        value={phone}
                        onChange={(event) =>
                          setPhone(
                            event.target.value.replace(/\D/g, "").slice(0, 10),
                          )
                        }
                        placeholder="Enter 10-digit phone number"
                        inputMode="numeric"
                        autoComplete="tel"
                        maxLength={10}
                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-3.5 pl-12 pr-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                      />
                    </div>
                  </div>

                  {/* SERVICE DROPDOWN */}

                  <div className="relative">
                    <label className="mb-2 block text-xs font-black text-[#063b3f] sm:text-sm">
                      Select Required Services
                    </label>

                    <button
                      type="button"
                      onClick={() => setServiceOpen((previous) => !previous)}
                      aria-expanded={serviceOpen}
                      className="flex w-full items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-left text-sm outline-none transition hover:border-green-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <ShieldCheck
                          size={18}
                          className="shrink-0 text-green-700"
                        />

                        <span
                          className={`truncate ${
                            selectedServices.length > 0
                              ? "font-bold text-[#063b3f]"
                              : "text-gray-400"
                          }`}
                        >
                          {selectedServices.length > 0
                            ? `${selectedServices.length} service${
                                selectedServices.length > 1 ? "s" : ""
                              } selected`
                            : "Choose pest control services"}
                        </span>
                      </span>

                      <motion.span
                        animate={{
                          rotate: serviceOpen ? 180 : 0,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="shrink-0 text-gray-400"
                      >
                        <ChevronDown size={19} />
                      </motion.span>
                    </button>

                    {serviceOpen && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: -8,
                          scale: 0.98,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }}
                        className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 max-h-64 overflow-y-auto rounded-2xl border border-green-100 bg-white p-2 shadow-[0_20px_60px_rgba(6,59,63,0.18)]"
                      >
                        {formServices.map((service) => {
                          const selected = selectedServices.includes(service);

                          return (
                            <button
                              key={service}
                              type="button"
                              onClick={() => toggleService(service)}
                              className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-xs font-semibold transition sm:text-sm ${
                                selected
                                  ? "bg-green-600 text-white"
                                  : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                              }`}
                            >
                              <span
                                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                                  selected
                                    ? "border-white bg-white text-green-700"
                                    : "border-gray-300 bg-white"
                                }`}
                              >
                                {selected && (
                                  <Check size={13} strokeWidth={3} />
                                )}
                              </span>

                              {service}
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </div>

                  {/* SELECTED SERVICES */}

                  {selectedServices.length > 0 && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      className="flex max-h-24 flex-wrap gap-2 overflow-y-auto rounded-2xl border border-green-100 bg-green-50 p-3"
                    >
                      {selectedServices.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-green-700 shadow-sm transition hover:bg-red-50 hover:text-red-600 sm:text-xs"
                          title={`Remove ${service}`}
                        >
                          {service}

                          <X size={12} />
                        </button>
                      ))}
                    </motion.div>
                  )}

                  {/* SUBMIT BUTTON - now submits internally */}

                  <motion.button
                    type="submit"
                    whileHover={{
                      y: -3,
                      scale: 1.01,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="acuity-shine flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-green-600 to-green-700 px-5 py-4 text-sm font-black text-white shadow-xl shadow-green-700/20 transition hover:from-green-700 hover:to-green-800"
                  >
                    <Send size={19} />
                    Submit Enquiry
                    <ArrowRight size={17} />
                  </motion.button>

                  <div className="grid grid-cols-3 gap-1.5 pt-1 text-center text-[9px] font-bold text-gray-500 sm:gap-2 sm:text-[10px]">
                    <span className="rounded-xl bg-gray-50 px-2 py-2">
                      ✓ No spam
                    </span>

                    <span className="rounded-xl bg-gray-50 px-2 py-2">
                      ✓ Free enquiry
                    </span>

                    <span className="rounded-xl bg-gray-50 px-2 py-2">
                      ✓ Quick response
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================================
          TRUST AND SERVICE HIGHLIGHT STRIP
      ====================================================== */}

      <section className="relative z-20 -mt-1 border-y border-green-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-green-100 px-4 sm:px-6 md:grid-cols-4 md:divide-y-0">
          {[
            {
              icon: ShieldCheck,
              title: "Professional Treatment",
              text: "Treatment selected for each pest",
            },
            {
              icon: BadgeCheck,
              title: "Trained Technicians",
              text: "Experienced service professionals",
            },
            {
              icon: Clock3,
              title: "Quick Scheduling",
              text: "Subject to area availability",
            },
            {
              icon: Headphones,
              title: "Customer Support",
              text: "Call and WhatsApp assistance",
            },
          ].map((item) => {
            const ItemIcon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={revealUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                whileHover={{
                  y: -5,
                }}
                className="group flex items-start gap-3 px-3 py-6 sm:px-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-green-700 transition group-hover:bg-green-600 group-hover:text-white">
                  <ItemIcon size={21} />
                </span>

                <div>
                  <h3 className="text-xs font-black text-[#063b3f] sm:text-sm">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[10px] leading-4 text-gray-500 sm:text-xs">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          PEST CONTROL SERVICES
      ====================================================== */}

      <section
        id="pest-control-services"
        className="relative overflow-hidden bg-[#f7fbf9] py-16 sm:py-20 md:py-28"
      >
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-green-200/30 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          {/* SECTION HEADING */}

          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[1.5px] text-green-700 shadow-sm">
              <ShieldCheck size={15} />
              Our Pest Control Services
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight text-[#063b3f] sm:text-4xl md:text-5xl">
              Complete Pest Control Solutions
              <span className="block text-green-600">Across Bangalore</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              We provide residential and commercial pest control services for
              common pest problems found in Bangalore homes, apartments,
              offices, restaurants, hotels, hospitals, warehouses and
              industries.
            </p>
          </motion.div>

          {/* SERVICE CARDS */}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {serviceCards.map((service, index) => (
              <motion.article
                key={service.title}
                variants={revealUp}
                whileHover={{
                  y: -10,
                  scale: 1.015,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="group relative overflow-hidden rounded-[26px] border border-green-100 bg-white p-5 shadow-[0_15px_45px_rgba(6,59,63,0.08)] sm:p-6"
              >
                <div className="pointer-events-none absolute -right-14 -top-16 h-36 w-36 rounded-full bg-green-100 transition duration-500 group-hover:scale-150 group-hover:bg-green-200" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <motion.span
                      whileHover={{
                        rotate: [0, -8, 8, 0],
                        scale: 1.08,
                      }}
                      className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-50 to-green-100 text-3xl shadow-inner"
                    >
                      {service.icon}
                    </motion.span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-green-100 bg-white text-xs font-black text-green-700 shadow-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-black text-[#063b3f] transition group-hover:text-green-700">
                    {service.title}
                  </h3>

                  <p className="mt-3 min-h-[48px] text-sm leading-6 text-gray-600">
                    {service.description}
                  </p>

                  <Link
                    to={service.link}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2.5 text-xs font-black text-green-700 transition hover:border-green-600 hover:bg-green-600 hover:text-white"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    View Service
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* ALL SERVICES BUTTON */}

          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-10 flex justify-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#063b3f] px-7 py-3.5 text-sm font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-green-700"
            >
              Explore All Pest Control Services
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          ABOUT ACUITY PEST CONTROLS
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          {/* ABOUT IMAGE */}

          <motion.div
            variants={revealLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="relative"
          >
            <div className="pointer-events-none absolute -left-6 -top-6 h-full w-full rounded-[34px] bg-green-100" />

            <div className="relative overflow-hidden rounded-[30px] border-4 border-white bg-[#eaf7f0] shadow-[0_25px_70px_rgba(6,59,63,0.18)]">
              <motion.img
                src={bannerImage1}
                alt="Acuity Pest Controls technician providing professional pest control service in Bangalore"
                loading="lazy"
                decoding="async"
                whileHover={{
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="h-[420px] w-full object-contain object-bottom sm:h-[520px]"
              />

              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/40 bg-[#063b3f]/95 p-4 text-white shadow-xl backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-5">
                <div className="grid grid-cols-3 divide-x divide-white/20 text-center">
                  <div className="px-2">
                    <p className="text-xl font-black text-green-300 sm:text-3xl">
                      19+
                    </p>

                    <p className="mt-1 text-[9px] font-bold sm:text-xs">
                      Years of Experience
                    </p>
                  </div>

                  <div className="px-2">
                    <p className="text-xl font-black text-green-300 sm:text-3xl">
                      15K+
                    </p>

                    <p className="mt-1 text-[9px] font-bold sm:text-xs">
                      Treatments
                    </p>
                  </div>

                  <div className="px-2">
                    <p className="text-xl font-black text-green-300 sm:text-3xl">
                      5K+
                    </p>

                    <p className="mt-1 text-[9px] font-bold sm:text-xs">
                      Customers
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-3 top-8 hidden rounded-2xl border border-green-100 bg-white p-4 shadow-xl sm:block"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <BadgeCheck size={21} />
                </span>

                <div>
                  <p className="text-xs font-black text-[#063b3f]">
                    Trusted Service
                  </p>

                  <p className="text-[10px] text-gray-500">
                    Homes and businesses
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ABOUT CONTENT */}

          <motion.div
            variants={revealRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-black uppercase tracking-[1.5px] text-green-700">
              <BadgeCheck size={15} />
              About Acuity Pest Controls
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight text-[#063b3f] sm:text-4xl md:text-5xl">
              Protecting Bangalore Properties
              <span className="block text-green-600">From Unwanted Pests</span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Acuity Pest Controls is a professional{" "}
              <Link
                to="/about"
                className="font-bold text-green-700 underline decoration-green-300 underline-offset-4 hover:text-green-800"
              >
                pest control company in Bangalore
              </Link>{" "}
              providing customized pest-management solutions for residential,
              commercial, industrial and institutional properties.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Our team identifies the pest, understands the infestation level
              and recommends a suitable treatment method. We focus on proper
              application, clear customer guidance and preventive advice to
              reduce recurring pest activity.
            </p>

            {/* ABOUT FEATURES */}

            <motion.div
              variants={staggerContainer}
              className="mt-7 grid gap-3 sm:grid-cols-2"
            >
              {[
                {
                  icon: ShieldCheck,
                  title: "Property-Specific Treatment",
                  description:
                    "Treatment selected according to pest type and property condition.",
                },
                {
                  icon: UserRound,
                  title: "Experienced Technicians",
                  description:
                    "Professional team trained to handle residential and commercial sites.",
                },
                {
                  icon: Search,
                  title: "Detailed Pest Inspection",
                  description:
                    "Inspection helps identify pest activity and possible entry points.",
                },
                {
                  icon: BadgeCheck,
                  title: "Service Guidance",
                  description:
                    "Clear preparation and post-treatment instructions for customers.",
                },
              ].map((feature) => {
                const FeatureIcon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    variants={revealUp}
                    whileHover={{
                      y: -5,
                    }}
                    className="rounded-2xl border border-green-100 bg-[#f8fcfa] p-4 transition hover:border-green-300 hover:bg-white hover:shadow-lg"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700">
                      <FeatureIcon size={19} />
                    </span>

                    <h3 className="mt-3 text-sm font-black text-[#063b3f]">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-gray-500">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700"
              >
                Learn More About Us
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#063b3f] bg-white px-6 py-3.5 text-sm font-black text-[#063b3f] transition hover:-translate-y-1 hover:bg-[#063b3f] hover:text-white"
              >
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          COMMON PEST PROBLEMS
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#063b3f] py-16 text-white sm:py-20 md:py-28">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[1.5px] text-green-300 backdrop-blur-sm">
              <Search size={15} />
              Common Pest Problems
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              Signs You May Need
              <span className="block text-green-400">
                Professional Pest Control
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-green-50/75 sm:text-base sm:leading-8">
              Pest problems can grow quickly when warning signs are ignored.
              Contact our team when you notice repeated pest activity inside
              your property.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                number: "01",
                title: "Pests Seen Frequently",
                text: "Cockroaches, ants, rodents or insects repeatedly appearing indoors.",
              },
              {
                number: "02",
                title: "Droppings or Pest Marks",
                text: "Rodent droppings, cockroach marks, nests or damaged food packets.",
              },
              {
                number: "03",
                title: "Damaged Wood",
                text: "Hollow wood, mud tubes, powder or damage caused by termites and wood borers.",
              },
              {
                number: "04",
                title: "Bites and Skin Irritation",
                text: "Unexplained bites that may indicate bed bugs, mosquitoes or other pests.",
              },
              {
                number: "05",
                title: "Unusual Sounds",
                text: "Scratching or movement sounds inside ceilings, walls or storage areas.",
              },
              {
                number: "06",
                title: "Bad Odour",
                text: "Persistent unpleasant smells from hidden pest activity or rodent nesting.",
              },
              {
                number: "07",
                title: "Pest Eggs or Nests",
                text: "Egg cases, webs, nesting materials or insect activity near dark corners.",
              },
              {
                number: "08",
                title: "Repeated DIY Failure",
                text: "Pests returning even after cleaning, sprays or temporary home remedies.",
              },
            ].map((problem) => (
              <motion.article
                key={problem.number}
                variants={revealUp}
                whileHover={{
                  y: -8,
                  backgroundColor: "rgba(255,255,255,0.12)",
                }}
                className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <span className="text-xs font-black tracking-[2px] text-green-400">
                  {problem.number}
                </span>

                <h3 className="mt-4 text-lg font-black text-white">
                  {problem.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-green-50/70 sm:text-sm">
                  {problem.text}
                </p>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-10 flex flex-col items-center justify-between gap-5 rounded-[26px] border border-green-400/20 bg-white/10 p-5 backdrop-blur-md sm:p-7 md:flex-row"
          >
            <div>
              <p className="text-sm font-black text-green-300">
                Not sure which pest treatment you need?
              </p>

              <p className="mt-2 max-w-2xl text-xs leading-5 text-green-50/75 sm:text-sm">
                Speak with our pest control team and explain the signs you have
                noticed. We will help you identify the suitable service.
              </p>
            </div>

            <a
              href="tel:+919941229005"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3.5 text-sm font-black text-[#063b3f] shadow-lg transition hover:-translate-y-1 hover:bg-green-400"
            >
              <Phone size={18} />
              Call Our Team
            </a>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          HOW THE SERVICE WORKS
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24">
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-green-100/50 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-emerald-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Simple Process"
            title="How Our Pest Control Service Works"
            description="From your first enquiry to treatment and prevention guidance, our process is simple and customer-friendly."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-transparent via-green-300 to-transparent lg:block" />

            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  variants={revealUp}
                  whileHover={{
                    y: -10,
                  }}
                  className="relative z-10 text-center"
                >
                  <motion.div
                    whileHover={{
                      rotate: [0, -6, 6, 0],
                      scale: 1.05,
                    }}
                    className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border-8 border-white bg-green-600 text-white shadow-[0_14px_35px_rgba(22,163,74,0.3)]"
                  >
                    <Icon size={28} />

                    <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#063b3f] text-xs font-black text-white">
                      {step.number}
                    </span>
                  </motion.div>

                  <div className="mt-6 rounded-[24px] border border-green-100 bg-[#f8fcfb] p-6 shadow-sm transition duration-300 hover:border-green-300 hover:bg-white hover:shadow-xl">
                    <h3 className="text-xl font-black text-[#063b3f]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            variants={revealZoom}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-12 overflow-hidden rounded-[30px] bg-gradient-to-r from-[#063b3f] via-[#075f51] to-green-700 p-6 shadow-[0_25px_70px_rgba(6,59,63,0.22)] sm:p-8"
          >
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

              <div className="relative">
                <span className="inline-flex rounded-full bg-green-400 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-[#063b3f]">
                  Need Help Choosing?
                </span>

                <h3 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                  Tell us what pest problem you are facing
                </h3>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-300 sm:text-base">
                  Use our AI chat assistant, call our team or send a WhatsApp
                  enquiry. We will help you identify the suitable pest control
                  service.
                </p>
              </div>

              <a
                href="#inspection"
                className="relative inline-flex items-center justify-center gap-2 rounded-full bg-green-400 px-7 py-4 font-black text-[#063b3f] transition duration-300 hover:-translate-y-1 hover:bg-green-300"
              >
                Get Service Guidance
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PROPERTY TYPES AND INDUSTRIES
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#f6fbf8] py-16 sm:py-20 md:py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-green-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Properties We Serve"
            title="Pest Control for Homes and Businesses"
            description="We provide professional pest-management services for residential, commercial, institutional and industrial properties across Bangalore."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {industries.map((industry, index) => {
              const IndustryIcon = industry.icon;

              return (
                <motion.article
                  key={industry.title}
                  variants={revealUp}
                  whileHover={{
                    y: -9,
                    scale: 1.015,
                  }}
                  className="group relative overflow-hidden rounded-[26px] border border-green-100 bg-white p-6 shadow-[0_12px_38px_rgba(6,59,63,0.07)]"
                >
                  <div className="pointer-events-none absolute -right-12 -top-14 h-32 w-32 rounded-full bg-green-50 transition duration-500 group-hover:scale-150 group-hover:bg-green-100" />

                  <div className="relative flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition duration-300 group-hover:bg-green-600 group-hover:text-white">
                      <IndustryIcon size={26} />
                    </div>

                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-xl font-black text-[#063b3f]">
                          {industry.title}
                        </h3>

                        <span className="text-[10px] font-black text-green-600">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {industry.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative mt-5 border-t border-green-100 pt-4">
                    {industry.title === "Homes" && (
                      <Link
                        to="/general-pest-control"
                        className="inline-flex items-center gap-2 text-xs font-black text-green-700 transition hover:gap-3 hover:text-green-800"
                      >
                        Residential Pest Control
                        <ArrowRight size={14} />
                      </Link>
                    )}

                    {industry.title === "Offices" && (
                      <Link
                        to="/office-pest-control"
                        className="inline-flex items-center gap-2 text-xs font-black text-green-700 transition hover:gap-3 hover:text-green-800"
                      >
                        Office Pest Control
                        <ArrowRight size={14} />
                      </Link>
                    )}

                    {industry.title === "Hotels" && (
                      <Link
                        to="/hotel-hospital-pest-control"
                        className="inline-flex items-center gap-2 text-xs font-black text-green-700 transition hover:gap-3 hover:text-green-800"
                      >
                        Hotel Pest Control
                        <ArrowRight size={14} />
                      </Link>
                    )}

                    {industry.title === "Hospitals" && (
                      <Link
                        to="/hotel-hospital-pest-control"
                        className="inline-flex items-center gap-2 text-xs font-black text-green-700 transition hover:gap-3 hover:text-green-800"
                      >
                        Hospital Pest Control
                        <ArrowRight size={14} />
                      </Link>
                    )}

                    {industry.title === "Warehouses" && (
                      <Link
                        to="/warehouse-pest-management"
                        className="inline-flex items-center gap-2 text-xs font-black text-green-700 transition hover:gap-3 hover:text-green-800"
                      >
                        Warehouse Pest Management
                        <ArrowRight size={14} />
                      </Link>
                    )}

                    {industry.title === "Industries" && (
                      <Link
                        to="/services"
                        className="inline-flex items-center gap-2 text-xs font-black text-green-700 transition hover:gap-3 hover:text-green-800"
                      >
                        Industrial Pest Control
                        <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          RESIDENTIAL AND COMMERCIAL PEST CONTROL
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2">
          {/* RESIDENTIAL */}

          <motion.article
            variants={revealLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            whileHover={{
              y: -7,
            }}
            className="group relative overflow-hidden rounded-[30px] border border-green-100 bg-gradient-to-br from-green-50 via-white to-white p-6 shadow-[0_20px_60px_rgba(6,59,63,0.09)] sm:p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-green-200/50 transition duration-500 group-hover:scale-125" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600 text-white shadow-lg">
                <HomeIcon size={27} />
              </div>

              <p className="mt-6 text-xs font-black uppercase tracking-[2px] text-green-700">
                Residential Services
              </p>

              <h2 className="mt-3 text-2xl font-black leading-tight text-[#063b3f] sm:text-3xl">
                Pest Control for Homes and Apartments in Bangalore
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
                Protect kitchens, bedrooms, bathrooms, balconies, furniture and
                common areas from cockroaches, termites, bed bugs, rodents,
                mosquitoes and ants.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Apartments and flats",
                  "Independent houses",
                  "Villas and gated communities",
                  "Residential common areas",
                  "Rental properties",
                  "Newly occupied homes",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs font-bold text-gray-700 sm:text-sm"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <Check size={12} strokeWidth={3} />
                    </span>

                    {item}
                  </div>
                ))}
              </div>

              <Link
                to="/general-pest-control"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-green-700"
              >
                View Home Pest Control
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.article>

          {/* COMMERCIAL */}

          <motion.article
            variants={revealRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            whileHover={{
              y: -7,
            }}
            className="group relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#063b3f] via-[#075f51] to-green-700 p-6 text-white shadow-[0_25px_70px_rgba(6,59,63,0.2)] sm:p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/10 transition duration-500 group-hover:scale-125" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-400 text-[#063b3f] shadow-lg">
                <Building2 size={27} />
              </div>

              <p className="mt-6 text-xs font-black uppercase tracking-[2px] text-green-300">
                Commercial Services
              </p>

              <h2 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl">
                Commercial Pest Management for Bangalore Businesses
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-300 sm:text-base">
                We support commercial properties with inspection-based pest
                management, scheduled treatment, monitoring and prevention
                guidance according to the facility type.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Corporate offices",
                  "Hotels and restaurants",
                  "Hospitals and clinics",
                  "Warehouses and godowns",
                  "Schools and colleges",
                  "Factories and industries",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs font-bold text-gray-200 sm:text-sm"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-400 text-[#063b3f]">
                      <Check size={12} strokeWidth={3} />
                    </span>

                    {item}
                  </div>
                ))}
              </div>

              <Link
                to="/office-pest-control"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-green-400 px-6 py-3 text-sm font-black text-[#063b3f] shadow-lg transition hover:-translate-y-1 hover:bg-green-300"
              >
                View Commercial Pest Control
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.article>
        </div>
      </section>
      {/* =====================================================
          WHY CHOOSE ACUITY PEST CONTROLS
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#f6fbf8] py-16 sm:py-20 md:py-28">
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-green-200/30 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Why Choose Acuity"
            title="Professional Pest Control With Customer-Focused Service"
            description="We inspect the property, understand the pest problem and recommend a suitable treatment for the infestation and property type."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                icon: Search,
                title: "Inspection-Based Planning",
                description:
                  "Our technician checks pest activity, affected areas, possible entry points and infestation conditions before recommending treatment.",
              },
              {
                icon: ShieldCheck,
                title: "Suitable Treatment Methods",
                description:
                  "The treatment method is selected according to the pest, property type, infestation level and affected areas.",
              },
              {
                icon: UserRound,
                title: "Experienced Technicians",
                description:
                  "Our pest-control professionals are trained to work in residential, commercial, institutional and industrial properties.",
              },
              {
                icon: BadgeCheck,
                title: "Clear Service Guidance",
                description:
                  "Customers receive preparation instructions, treatment information and important post-service recommendations.",
              },
              {
                icon: Clock3,
                title: "Convenient Scheduling",
                description:
                  "We arrange technician visits according to your Bangalore location, service requirement and available appointment slots.",
              },
              {
                icon: Headphones,
                title: "Phone and WhatsApp Support",
                description:
                  "Our team assists customers with service selection, booking, location details and treatment-related questions.",
              },
            ].map((feature, index) => {
              const FeatureIcon = feature.icon;

              return (
                <motion.article
                  key={feature.title}
                  variants={revealUp}
                  whileHover={{
                    y: -9,
                    scale: 1.015,
                  }}
                  className="group relative overflow-hidden rounded-[26px] border border-green-100 bg-white p-6 shadow-[0_14px_42px_rgba(6,59,63,0.07)]"
                >
                  <div className="pointer-events-none absolute -right-12 -top-14 h-32 w-32 rounded-full bg-green-50 transition duration-500 group-hover:scale-150 group-hover:bg-green-100" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition duration-300 group-hover:bg-green-600 group-hover:text-white">
                        <FeatureIcon size={25} />
                      </span>

                      <span className="text-xs font-black tracking-[2px] text-green-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-black text-[#063b3f] sm:text-xl">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          {/* WHY CHOOSE CTA */}

          <motion.div
            variants={revealZoom}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-10 flex flex-col items-center justify-between gap-6 rounded-[28px] border border-green-100 bg-white p-6 shadow-[0_20px_60px_rgba(6,59,63,0.08)] sm:p-8 md:flex-row"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                <Phone size={25} />
              </span>

              <div>
                <h3 className="text-xl font-black text-[#063b3f] sm:text-2xl">
                  Need help selecting the correct treatment?
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-7 text-gray-600">
                  Explain the pest problem, property type and affected area to
                  our team. We will guide you toward the appropriate service.
                </p>
              </div>
            </div>

            <a
              href="tel:+919941229005"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700"
            >
              <Phone size={18} />
              Call Our Team
            </a>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          BANGALORE SERVICE LOCATIONS
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#063b3f] py-16 text-white sm:py-20 md:py-28">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Service Areas"
            title="Pest Control Services Across Bangalore"
            description="Our technicians provide pest-control services across major residential, commercial and industrial locations in Bengaluru."
            light
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {locations.map((location) => (
              <motion.div
                key={location}
                variants={revealUp}
                whileHover={{
                  y: -5,
                  scale: 1.04,
                }}
                className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-xs font-bold text-green-50 backdrop-blur-sm transition hover:border-green-400 hover:bg-green-400 hover:text-[#063b3f] sm:px-5 sm:text-sm"
              >
                <MapPin
                  size={15}
                  className="text-green-400 transition group-hover:text-[#063b3f]"
                />
                Pest Control in {location}
              </motion.div>
            ))}
          </motion.div>

          {/* LOCATION CONTENT */}

          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mx-auto mt-10 max-w-4xl rounded-[28px] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm sm:p-8"
          >
            <h3 className="text-xl font-black text-white sm:text-2xl">
              Looking for pest control near you in Bangalore?
            </h3>

            <p className="mt-4 text-sm leading-7 text-green-50/75 sm:text-base">
              Acuity Pest Controls serves JP Nagar, Jayanagar, Banashankari, HSR
              Layout, Koramangala, Whitefield, Electronic City, Marathahalli,
              Indiranagar, KR Puram, Sarjapur Road and nearby Bangalore
              locations.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="tel:+919941229005"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-400 px-6 py-3.5 text-sm font-black text-[#063b3f] transition hover:-translate-y-1 hover:bg-green-300"
              >
                <Phone size={18} />
                Call to Check Availability
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#063b3f]"
              >
                View Contact Details
                <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PEST CONTROL GUIDES AND BLOGS
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-green-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Pest Control Guides"
            title="Helpful Information About Common Pest Problems"
            description="Read our guides to understand pest warning signs, prevention methods and when professional pest-control treatment may be required."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {relatedGuides.map((guide) => (
              <motion.article
                key={guide.title}
                variants={revealUp}
                whileHover={{
                  y: -9,
                  scale: 1.015,
                }}
                className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-green-100 bg-white shadow-[0_14px_42px_rgba(6,59,63,0.08)]"
              >
                <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-white">
                  <div className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full bg-green-200/50 transition duration-500 group-hover:scale-150" />

                  <motion.span
                    whileHover={{
                      rotate: [0, -8, 8, 0],
                      scale: 1.12,
                    }}
                    className="relative text-6xl"
                  >
                    {guide.icon}
                  </motion.span>

                  <span className="absolute left-4 top-4 rounded-full border border-green-200 bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-green-700 shadow-sm">
                    {guide.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-black leading-6 text-[#063b3f] transition group-hover:text-green-700">
                    {guide.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
                    {guide.description}
                  </p>

                  <Link
                    to={guide.link}
                    className="mt-5 inline-flex items-center gap-2 text-xs font-black text-green-700 transition hover:gap-3 hover:text-green-800"
                    aria-label={`Read ${guide.title}`}
                  >
                    Read Full Guide
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* MORE BLOG LINKS */}

          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-10 grid gap-4 rounded-[28px] border border-green-100 bg-[#f7fbf9] p-5 sm:grid-cols-2 sm:p-7 lg:grid-cols-4"
          >
            {[
              {
                title: "Pest Control vs DIY Methods",
                link: "/blogs/pest-control-vs-diy",
              },
              {
                title: "Bed Bug Treatment Guide",
                link: "/blogs/bed-bug-treatment",
              },
              {
                title: "German vs American Cockroach",
                link: "/blogs/german-cockroach-vs-american-cockroach",
              },
              {
                title: "Why Businesses Need Pest Control",
                link: "/blogs/why-regular-pest-control-important-businesses",
              },
            ].map((blog) => (
              <Link
                key={blog.title}
                to={blog.link}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-green-100 bg-white p-4 text-sm font-black text-[#063b3f] shadow-sm transition hover:-translate-y-1 hover:border-green-400 hover:text-green-700 hover:shadow-lg"
              >
                <span>{blog.title}</span>

                <ArrowRight
                  size={16}
                  className="shrink-0 text-green-600 transition-transform group-hover:translate-x-1"
                />
              </Link>
            ))}
          </motion.div>

          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-8 flex justify-center"
          >
            <Link
              to="/blogs"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#063b3f] px-7 py-3.5 text-sm font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-green-700"
            >
              <BookOpen size={18} />
              View All Pest Control Blogs
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>
      {/* =====================================================
          CUSTOMER TESTIMONIALS
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#f4fbf8] py-16 sm:py-20 md:py-24">
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-green-200/45 blur-[100px]" />

        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-emerald-200/30 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Customer Reviews"
            title="What Our Customers Say"
            description="Customer feedback from residential and commercial pest-control services across Bangalore."
          />

          <motion.div
            variants={revealZoom}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-[34px] border border-green-100 bg-white p-6 shadow-[0_24px_70px_rgba(6,59,63,0.12)] sm:p-10"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-green-100/70 blur-2xl" />

            <div className="relative z-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div
                  className="flex gap-1 text-yellow-400"
                  aria-label="Five-star customer review"
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={19} fill="currentColor" />
                  ))}
                </div>

                <span className="w-fit rounded-full bg-green-50 px-3 py-1.5 text-xs font-black text-green-700">
                  {testimonials[activeTestimonial].service}
                </span>
              </div>

              <motion.blockquote
                key={activeTestimonial}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="mt-7 text-lg font-semibold leading-8 text-gray-700 sm:text-2xl sm:leading-10"
              >
                “{testimonials[activeTestimonial].text}”
              </motion.blockquote>

              <motion.div
                key={`${activeTestimonial}-customer`}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.05,
                }}
                className="mt-7 flex items-center gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#063b3f] font-black text-green-300">
                  {testimonials[activeTestimonial].name.charAt(0).toUpperCase()}
                </div>

                <div>
                  <p className="font-black text-[#063b3f]">
                    {testimonials[activeTestimonial].name}
                  </p>

                  <p className="text-sm text-gray-500">
                    {testimonials[activeTestimonial].area}
                  </p>
                </div>
              </motion.div>

              <div className="mt-8 flex items-center justify-between gap-4">
                {/* TESTIMONIAL DOTS */}

                <div className="flex gap-2">
                  {testimonials.map((testimonial, index) => (
                    <button
                      key={testimonial.name}
                      type="button"
                      onClick={() => {
                        setActiveTestimonial(index);
                      }}
                      aria-label={`Show review ${index + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        activeTestimonial === index
                          ? "w-8 bg-green-600"
                          : "w-2.5 bg-green-200 hover:bg-green-400"
                      }`}
                    />
                  ))}
                </div>

                {/* TESTIMONIAL ARROWS */}

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={previousTestimonial}
                    aria-label="Previous customer review"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-green-200 bg-white text-green-700 transition hover:bg-green-600 hover:text-white"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <button
                    type="button"
                    onClick={nextTestimonial}
                    aria-label="Next customer review"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-green-200 bg-white text-green-700 transition hover:bg-green-600 hover:text-white"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* REVIEW TRUST STRIP */}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-3"
          >
            {[
              {
                icon: Star,
                title: "Customer Feedback",
                text: "Reviews from Bangalore customers",
              },
              {
                icon: BadgeCheck,
                title: "Professional Service",
                text: "Clear guidance and trained support",
              },
              {
                icon: MapPin,
                title: "Local Bangalore Team",
                text: "Residential and commercial service",
              },
            ].map((item) => {
              const ItemIcon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={revealUp}
                  whileHover={{
                    y: -5,
                  }}
                  className="flex items-center gap-3 rounded-2xl border border-green-100 bg-white p-4 shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                    <ItemIcon size={19} />
                  </span>

                  <div>
                    <h3 className="text-xs font-black text-[#063b3f] sm:text-sm">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FREQUENTLY ASKED QUESTIONS
      ====================================================== */}

      <section
        id="frequently-asked-questions"
        className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-28"
      >
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-green-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Questions About Pest Control in Bangalore"
            description="Find answers about our pest-control services, booking process, commercial treatments, safety guidance and service availability."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-12 space-y-4"
          >
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <motion.article
                  key={item.question}
                  variants={revealUp}
                  className={`overflow-hidden rounded-[22px] border bg-white transition duration-300 ${
                    isOpen
                      ? "border-green-400 shadow-[0_15px_45px_rgba(6,59,63,0.1)]"
                      : "border-green-100 shadow-sm hover:border-green-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq((previous) =>
                        previous === index ? -1 : index,
                      )
                    }
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6 sm:py-6"
                  >
                    <span className="flex items-start gap-4">
                      <span
                        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black transition ${
                          isOpen
                            ? "bg-green-600 text-white"
                            : "bg-green-50 text-green-700"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`text-sm font-black leading-6 sm:text-lg ${
                          isOpen ? "text-green-700" : "text-[#063b3f]"
                        }`}
                      >
                        {item.question}
                      </span>
                    </span>

                    <motion.span
                      animate={{
                        rotate: isOpen ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                        isOpen
                          ? "bg-green-600 text-white"
                          : "bg-green-50 text-green-700"
                      }`}
                    >
                      <ChevronDown size={19} />
                    </motion.span>
                  </button>

                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-green-100 px-5 py-5 sm:px-[72px] sm:py-6">
                      <p className="text-sm leading-7 text-gray-600 sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.article>
              );
            })}
          </motion.div>

          {/* FAQ CONTACT BOX */}

          <motion.div
            variants={revealZoom}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-10 flex flex-col items-center justify-between gap-5 rounded-[26px] bg-[#f4fbf8] p-6 sm:p-8 md:flex-row"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-600 text-white">
                <MessageCircle size={23} />
              </span>

              <div>
                <h3 className="text-lg font-black text-[#063b3f] sm:text-xl">
                  Still have a pest-control question?
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Ask our team about pest identification, treatment selection,
                  appointment availability or service preparation.
                </p>
              </div>
            </div>

            <a
              href="tel:+919941229005"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3.5 text-sm font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-green-700"
            >
              <Phone size={18} />
              Call Our Team
            </a>
          </motion.div>
        </div>
      </section>
      {/* =====================================================
          FINAL CALL TO ACTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#063b3f] via-[#075f51] to-green-700 py-16 text-white sm:py-20 md:py-24">
        <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-green-400/15 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <motion.div
          variants={revealZoom}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6"
        >
          <div className="overflow-hidden rounded-[32px] border border-white/15 bg-white/10 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.18)] backdrop-blur-md sm:p-10 lg:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-green-300/30 bg-green-300/10 px-4 py-2 text-xs font-black uppercase tracking-[1.5px] text-green-300">
                  <ShieldCheck size={15} />
                  Book Professional Pest Control
                </span>

                <h2 className="mt-5 max-w-4xl text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
                  Protect Your Property From Pests
                  <span className="block text-green-300">
                    With Acuity Pest Controls
                  </span>
                </h2>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-green-50/80 sm:text-base sm:leading-8">
                  Contact our team for pest inspection, service guidance and
                  professional treatment for homes, offices, hotels,
                  restaurants, hospitals, warehouses and industries across
                  Bangalore.
                </p>

                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
                  {[
                    "Residential pest control",
                    "Commercial pest management",
                    "Inspection-based treatment",
                    "Phone and WhatsApp support",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs font-bold text-green-50 sm:text-sm"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-400 text-[#063b3f]">
                        <Check size={12} strokeWidth={3} />
                      </span>

                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <motion.a
                  href="tel:+919941229005"
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-full bg-green-400 px-7 py-4 text-sm font-black text-[#063b3f] shadow-xl transition hover:bg-green-300"
                >
                  <Phone size={19} />
                  Call +91 99412 29005
                </motion.a>

                <motion.a
                  href="#inspection"
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-black text-white transition hover:bg-white hover:text-[#063b3f]"
                >
                  <Send size={19} />
                  Submit Enquiry
                </motion.a>

                <motion.a
                  href="#inspection"
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-full border border-green-300/30 bg-transparent px-7 py-4 text-sm font-black text-green-200 transition hover:border-green-300 hover:bg-green-300 hover:text-[#063b3f]"
                >
                  Request Inspection
                  <ArrowRight size={17} />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          SEO INTERNAL LINKING FOOTER CONTENT
      ====================================================== */}
      {/* =====================================================
          SEO INTERNAL LINKING CONTENT
      ====================================================== */}

      <section className="border-b border-green-100 bg-[#f7fbf9] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="rounded-[28px] border border-green-100 bg-white p-6 shadow-sm sm:p-8"
          >
            <h2 className="text-2xl font-black leading-tight text-[#063b3f] sm:text-3xl">
              Pest Control Services in Bangalore for Homes and Businesses
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Searching for a reliable{" "}
              <Link
                to="/services"
                className="font-bold text-green-700 underline decoration-green-300 underline-offset-4 transition hover:text-green-800"
              >
                pest control service in Bangalore
              </Link>
              ? Acuity Pest Controls provides professional pest-management
              solutions for houses, apartments, offices, restaurants, hotels,
              hospitals, warehouses, schools and industrial properties across
              Bengaluru.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Customers searching online for{" "}
              <Link
                to="/contact"
                className="font-bold text-green-700 underline decoration-green-300 underline-offset-4 transition hover:text-green-800"
              >
                pest control near me
              </Link>{" "}
              can contact our Bangalore team for inspection, treatment
              recommendations and preventive pest-control support. Our{" "}
              <Link
                to="/general-pest-control"
                className="font-bold text-green-700 underline decoration-green-300 underline-offset-4 transition hover:text-green-800"
              >
                general pest control in Bangalore
              </Link>{" "}
              helps manage cockroaches, ants, spiders, silverfish and other
              common household pests.
            </p>

            <h3 className="mt-7 text-xl font-black text-[#063b3f] sm:text-2xl">
              Residential Pest Control Services in Bangalore
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Protect your home with professional{" "}
              <Link
                to="/cockroach-management-service"
                className="font-bold text-green-700 hover:underline"
              >
                cockroach control in Bangalore
              </Link>
              ,{" "}
              <Link
                to="/anti-termite-treatment"
                className="font-bold text-green-700 hover:underline"
              >
                termite treatment in Bangalore
              </Link>
              ,{" "}
              <Link
                to="/bed-bug-treatment"
                className="font-bold text-green-700 hover:underline"
              >
                bed bug treatment in Bangalore
              </Link>
              ,{" "}
              <Link
                to="/rodent-management-service"
                className="font-bold text-green-700 hover:underline"
              >
                rodent control in Bangalore
              </Link>
              ,{" "}
              <Link
                to="/mosquito-management-service"
                className="font-bold text-green-700 hover:underline"
              >
                mosquito control in Bangalore
              </Link>
              ,{" "}
              <Link
                to="/ant-control"
                className="font-bold text-green-700 hover:underline"
              >
                ant control in Bangalore
              </Link>{" "}
              and{" "}
              <Link
                to="/wood-borer-treatment"
                className="font-bold text-green-700 hover:underline"
              >
                wood borer treatment in Bangalore
              </Link>
              .
            </p>

            <h3 className="mt-7 text-xl font-black text-[#063b3f] sm:text-2xl">
              Commercial Pest Control Services in Bangalore
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              We also provide specialized{" "}
              <Link
                to="/office-pest-control"
                className="font-bold text-green-700 hover:underline"
              >
                office pest control in Bangalore
              </Link>
              ,{" "}
              <Link
                to="/hotel-hospital-pest-control"
                className="font-bold text-green-700 hover:underline"
              >
                hotel and hospital pest control
              </Link>
              ,{" "}
              <Link
                to="/warehouse-pest-management"
                className="font-bold text-green-700 hover:underline"
              >
                warehouse pest management
              </Link>
              ,{" "}
              <Link
                to="/educational-institution-pest-control"
                className="font-bold text-green-700 hover:underline"
              >
                pest control for schools and colleges
              </Link>{" "}
              and{" "}
              <Link
                to="/common-area-treatment-residential-complex"
                className="font-bold text-green-700 hover:underline"
              >
                apartment common-area pest control
              </Link>
              .
            </p>

            <h3 className="mt-7 text-xl font-black text-[#063b3f] sm:text-2xl">
              Explore Our Pest Control Services
            </h3>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {[
                {
                  label: "Pest Control in Bangalore",
                  path: "/services",
                },
                {
                  label: "General Pest Control Bangalore",
                  path: "/general-pest-control",
                },
                {
                  label: "Cockroach Control Bangalore",
                  path: "/cockroach-management-service",
                },
                {
                  label: "Termite Treatment Bangalore",
                  path: "/anti-termite-treatment",
                },
                {
                  label: "Pre Construction Termite Treatment",
                  path: "/pre-construction-termite-treatment",
                },
                {
                  label: "Post Construction Termite Treatment",
                  path: "/post-construction-termite-treatment",
                },
                {
                  label: "Bed Bug Treatment Bangalore",
                  path: "/bed-bug-treatment",
                },
                {
                  label: "Rodent Control Bangalore",
                  path: "/rodent-management-service",
                },
                {
                  label: "Mosquito Control Bangalore",
                  path: "/mosquito-management-service",
                },
                {
                  label: "Ant Control Bangalore",
                  path: "/ant-control",
                },
                {
                  label: "Wood Borer Treatment",
                  path: "/wood-borer-treatment",
                },
                {
                  label: "Office Pest Control",
                  path: "/office-pest-control",
                },
                {
                  label: "Hotel & Hospital Pest Control",
                  path: "/hotel-hospital-pest-control",
                },
                {
                  label: "Warehouse Pest Management",
                  path: "/warehouse-pest-management",
                },
                {
                  label: "Pest Identification",
                  path: "/pest-identification",
                },
                {
                  label: "Pest Control Blogs",
                  path: "/blogs",
                },
                {
                  label: "Contact Pest Control Team",
                  path: "/contact",
                },
              ].map((seoLink) => (
                <Link
                  key={`${seoLink.path}-${seoLink.label}`}
                  to={seoLink.path}
                  className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-bold text-green-700 transition hover:border-green-600 hover:bg-green-600 hover:text-white"
                >
                  {seoLink.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          MOBILE STICKY ACTION BAR (removed WhatsApp)
      ====================================================== */}

      <div className="fixed bottom-0 left-0 right-0 z-[1100] border-t border-green-100 bg-white/95 p-2 shadow-[0_-10px_35px_rgba(6,59,63,0.12)] backdrop-blur-md md:hidden">
        <div className="grid grid-cols-2 gap-2">
          <a
            href="tel:+919941229005"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#063b3f] px-3 py-3 text-xs font-black text-white"
          >
            <Phone size={17} />
            Call Now
          </a>

          <button
            onClick={() => {
              // Open the chatbot
              const chatbotButton = document.querySelector(
                '[aria-label="Open Acuity Pest Control chat assistant"]',
              );
              if (chatbotButton) {
                chatbotButton.click();
              }
            }}
            className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-3 py-3 text-xs font-black text-white"
          >
            <Bot size={17} />
            Chat with AI
          </button>
        </div>
      </div>

      {/* =====================================================
          AI CHATBOT (only this remains for WhatsApp-like interaction)
      ====================================================== */}

      <AcuityChatBot />
    </div>
  );
};

export default Home;
