import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  FaArrowRight,
  FaCheck,
  FaPhoneAlt,
  FaShieldAlt,
  FaWhatsapp,
} from "react-icons/fa";

import SEO from "../components/seo/seo";

import bannerImage from "../images/aboutusbanner.jpg";
import bannerImage1 from "../images/pestman.png";

/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -55,
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

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 55,
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

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.65,
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
  amount: 0.15,
};

/* =========================================================
   ABOUT PAGE
========================================================= */

const AboutUS = () => {
  const vision = [
    "Efficient Services",
    "Responsible Treatment Methods",
    "Advanced Pest-Control Techniques",
    "Long-Lasting Pest Management",
  ];

  const mission = [
    "Personalized Service",
    "Skilled Professionals",
    "Property-Specific Solutions",
    "Post-Service Follow-Up",
  ];

  const faqs = [
    {
      q: "What types of pests do you control?",
      a: "We provide professional control services for cockroaches, mosquitoes, bed bugs, termites, rodents, ants, wood borers, lizards and other common household and commercial pests.",
    },
    {
      q: "How do I know if I need pest control?",
      a: "You may need professional pest control if you notice live pests, droppings, nests, unusual noises, damaged wood, chewed materials, food contamination or unpleasant odours. Our team can inspect the property and recommend a suitable treatment.",
    },
    {
      q: "Is professional pest control safe?",
      a: "Professional pest control can be performed safely when treatment instructions are followed. Acuity Pest Controls uses suitable treatment methods based on the pest, property type and level of infestation.",
    },
    {
      q: "How long does pest control treatment take?",
      a: "Treatment time depends on the pest, property size, infestation level and treatment method. Some services can be completed in one visit, while severe infestations may require monitoring or follow-up treatment.",
    },
    {
      q: "Do you provide pest control for commercial properties?",
      a: "Yes. We provide pest management services for offices, restaurants, hotels, hospitals, warehouses, educational institutions, apartments and other commercial properties across Bangalore.",
    },
  ];

  const aboutSchema = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": "https://www.acuitypestcontrols.com/about#aboutpage",
      name: "About Acuity Pest Controls",
      url: "https://www.acuitypestcontrols.com/about",
      description:
        "Learn about Acuity Pest Controls, a professional pest control company providing residential and commercial pest management services across Bangalore.",
      inLanguage: "en-IN",
      mainEntity: {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://www.acuitypestcontrols.com/#business",
        name: "Acuity Pest Controls",
        url: "https://www.acuitypestcontrols.com/",
        image: "https://www.acuitypestcontrols.com/logo.png",
        telephone: "+91 9941229005",
        email: "info@acuitygroups.in",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "1st Floor, KVO-08, No-28/2, near Sun Jupiter School, JP Nagar 6th Phase, Yelachenahalli, Kumaraswamy Layout",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560078",
          addressCountry: "IN",
        },
        areaServed: {
          "@type": "City",
          name: "Bengaluru",
        },
        knowsAbout: [
          "Cockroach Control",
          "Termite Treatment",
          "Bed Bug Treatment",
          "Rodent Control",
          "Mosquito Management",
          "Ant Control",
          "Wood Borer Treatment",
          "Commercial Pest Management",
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ];

  const locations = [
    "Indiranagar",
    "Old Madras Road",
    "CV Raman Nagar",
    "Kaggadasapura",
    "Thippasandra",
    "KR Puram",
    "Begur Road",
    "MG Road",
    "Shanthi Nagar",
    "HBR Layout",
    "Hennur Road",
    "Chansandra",
    "Byrasandra",
    "Tin Factory",
    "Kasturi Nagar",
    "Agara",
    "Kanakapura Road",
    "Banashankari",
    "Rajarajeshwari Nagar",
    "Hosur Road",
    "Kudlu",
    "Singasandra",
    "Electronic City",
    "Kammanahalli",
    "Lingarajapuram",
    "Fraser Town",
    "Munnekolala",
    "HSR Layout",
    "Hoodi",
    "Ramamurthy Nagar",
    "Akshayanagar",
    "Domlur",
    "Wilson Garden",
    "Sadananda Nagar",
    "Whitefield",
    "Mahadevapura",
    "Chinnapanna Halli",
    "Kundalahalli",
    "ITPL Road",
    "Varthur",
    "TC Palya",
    "Horamavu",
    "Babusa Palya",
    "Banaswadi",
    "Ulsoor",
    "Bannerghatta Road",
    "Arekere",
    "Hulimavu",
    "JP Nagar",
    "Jayanagar",
    "BTM Layout",
    "Marathahalli",
    "Bommanahalli",
    "Koramangala",
    "Jeevan Bima Nagar",
    "Old Airport Road",
    "Madiwala",
    "Harlur Road",
    "Sarjapur Road",
    "Kodihalli",
  ];

  const strengths = [
    {
      number: "01",
      title: "Experienced Pest-Control Team",
      description:
        "Our trained professionals assess the property, identify pest activity and recommend treatment based on the infestation and property type.",
    },
    {
      number: "02",
      title: "Customer-Focused Service",
      description:
        "We understand the customer’s concern, explain the treatment process clearly and provide solutions suitable for residential and commercial properties.",
    },
    {
      number: "03",
      title: "Property-Specific Treatment",
      description:
        "Every pest problem is different. Our treatment plan is selected according to the pest, infestation level, affected area and surrounding conditions.",
    },
    {
      number: "04",
      title: "Service Support",
      description:
        "Our team provides service guidance, preventive recommendations and follow-up support when required after the treatment.",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <SEO
        title="About Acuity Pest Controls | Pest Control Company Bangalore"
        description="Learn about Acuity Pest Controls, a trusted pest control company in Bangalore providing residential and commercial pest management services."
        keywords="about Acuity Pest Controls, pest control company Bangalore, pest control experts Bangalore, professional pest control Bangalore, pest management company Bangalore"
        canonical="https://www.acuitypestcontrols.com/about"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={aboutSchema}
      />

      <style>
        {`
          @keyframes aboutGlow {
            0%, 100% {
              opacity: 0.28;
              transform: scale(1);
            }

            50% {
              opacity: 0.55;
              transform: scale(1.18);
            }
          }

          @keyframes aboutFloat {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-12px);
            }
          }

          @keyframes aboutShine {
            0% {
              left: -120%;
            }

            100% {
              left: 160%;
            }
          }

          .about-glow {
            animation: aboutGlow 6s ease-in-out infinite;
          }

          .about-float {
            animation: aboutFloat 5s ease-in-out infinite;
          }

          .about-shine {
            position: relative;
            overflow: hidden;
          }

          .about-shine::after {
            position: absolute;
            top: -80%;
            left: -120%;
            width: 22%;
            height: 260%;
            content: "";
            background: rgba(255, 255, 255, 0.25);
            transform: rotate(22deg);
            animation: aboutShine 4.5s ease-in-out infinite;
          }

          .about-grid-pattern {
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
            .about-glow,
            .about-float,
            .about-shine::after {
              animation: none;
            }
          }
        `}
      </style>

      {/* =====================================================
          HERO BANNER
      ====================================================== */}

      <section className="relative h-[48vh] min-h-[390px] overflow-hidden sm:h-[58vh] md:h-[75vh] lg:h-[95vh]">
        <motion.img
          src={bannerImage}
          alt="Acuity Pest Controls professional pest control company in Bangalore"
          className="absolute inset-0 h-full w-full"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          initial={{
            scale: 1.08,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#031f21]/55 via-black/15 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#031f21]/35 via-transparent to-black/15" />

        <div className="about-glow pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-green-400/25 blur-[110px]" />

        <div className="about-glow pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-emerald-300/20 blur-[100px]" />

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f8fcfb] to-transparent" />
      </section>

      {/* =====================================================
          ABOUT INTRO
      ====================================================== */}

      <section className="about-grid-pattern relative overflow-hidden bg-[#f8fcfb] py-16 md:py-24 lg:py-28">
        <div className="about-glow pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-green-300/20 blur-[120px]" />

        <div className="about-glow pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-emerald-200/30 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <span className="about-shine mb-5 inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg">
              <FaShieldAlt />
              Professional Pest Management
            </span>

            <h1 className="mb-6 text-3xl font-black leading-tight text-[#063b3f] sm:text-4xl md:text-5xl lg:text-6xl">
              About Acuity Pest Controls
            </h1>

            <div className="space-y-5">
              <p className="leading-8 text-gray-700">
                Acuity Pest Controls is a professional pest control company in
                Bangalore providing effective pest management solutions for
                residential, commercial and industrial properties.
              </p>

              <p className="leading-8 text-gray-700">
                We provide services for cockroaches, termites, bed bugs,
                rodents, mosquitoes, ants, wood borers and other common pests
                affecting homes and businesses.
              </p>

              <p className="leading-8 text-gray-700">
                Our team focuses on identifying the source of pest activity,
                selecting a suitable treatment and helping customers reduce the
                risk of future infestations.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Controls,%20I%20need%20pest%20control%20service."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="about-shine inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 font-bold text-white shadow-xl transition hover:bg-green-700"
              >
                <FaWhatsapp size={19} />
                WhatsApp Us
              </motion.a>

              <motion.div
                whileHover={{
                  y: -4,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                <Link
                  to="/services"
                  className="inline-flex items-center gap-3 rounded-full border-2 border-green-600 bg-white px-8 py-4 font-bold text-green-700 shadow-sm transition hover:bg-green-50"
                >
                  View Services
                  <FaArrowRight size={13} />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="relative"
          >
            <div className="pointer-events-none absolute -inset-5 rounded-[45px] bg-gradient-to-br from-green-300/20 to-emerald-100/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[38px] border border-white/80 bg-white/65 p-4 shadow-[0_30px_90px_rgba(6,59,63,0.17)] backdrop-blur-xl sm:p-6">
              <div className="absolute left-5 top-5 z-10 rounded-full border border-green-200 bg-white/90 px-4 py-2 text-xs font-black text-green-700 shadow-lg backdrop-blur-xl">
                Professional Team
              </div>

              <img
                src={bannerImage1}
                alt="Professional pest control technician from Acuity Pest Controls"
                className="about-float h-full w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="absolute -bottom-5 left-4 rounded-2xl border border-green-100 bg-white px-5 py-4 shadow-xl sm:left-8">
              <p className="text-xs font-bold uppercase tracking-[1.5px] text-green-700">
                Serving Bangalore
              </p>

              <p className="mt-1 text-sm font-black text-[#063b3f]">
                Residential & Commercial
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          COMPANY STATISTICS
      ====================================================== */}

      <section className="relative bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-2 gap-4 lg:grid-cols-4"
          >
            {[
              ["19+", "Years of Experience"],
              ["15K+", "Treatments Completed"],
              ["5000+", "Customers Served"],
              ["24/7", "Customer Support"],
            ].map(([number, label]) => (
              <motion.div
                key={label}
                variants={scaleIn}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-[26px] border border-green-100 bg-gradient-to-br from-[#f6fffb] to-white p-5 text-center shadow-[0_15px_45px_rgba(6,59,63,0.08)] transition sm:p-7"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-green-200/30 blur-2xl transition group-hover:bg-green-300/40" />

                <h2 className="relative text-3xl font-black text-[#063b3f] sm:text-4xl lg:text-5xl">
                  {number}
                </h2>

                <p className="relative mt-2 text-xs font-semibold text-gray-600 sm:text-sm lg:text-base">
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          VISION AND MISSION
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="pointer-events-none absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-green-100/50 blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            whileHover={{
              y: -7,
            }}
            className="relative overflow-hidden rounded-[34px] border border-green-100 bg-gradient-to-br from-[#f6fffb] to-white p-7 shadow-[0_25px_70px_rgba(6,59,63,0.09)] sm:p-9"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-green-200/40 blur-[60px]" />

            <div className="relative">
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600 text-white shadow-xl">
                <FaShieldAlt size={22} />
              </span>

              <h2 className="mb-4 text-3xl font-black text-[#063b3f]">
                Our Vision
              </h2>

              <p className="mb-7 leading-7 text-gray-600">
                To be a trusted pest management company in Bangalore by
                providing dependable services, responsible treatment methods and
                long-term pest prevention support.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {vision.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{
                      x: 5,
                    }}
                    className="flex items-center gap-3 rounded-2xl border border-green-100 bg-white p-4 font-bold text-[#063b3f] shadow-sm"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <FaCheck size={11} />
                    </span>

                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            whileHover={{
              y: -7,
            }}
            className="relative overflow-hidden rounded-[34px] bg-gradient-to-br from-[#063b3f] to-[#075c55] p-7 text-white shadow-[0_30px_80px_rgba(6,59,63,0.25)] sm:p-9"
          >
            <div className="about-glow pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-400/25 blur-[80px]" />

            <div className="relative">
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-400 text-[#063b3f] shadow-xl">
                <FaArrowRight size={20} />
              </span>

              <h2 className="mb-4 text-3xl font-black">Our Mission</h2>

              <p className="mb-7 leading-7 text-gray-200">
                To help customers protect their properties through professional
                inspection, suitable treatment, transparent service and
                practical pest-prevention guidance.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {mission.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{
                      x: 5,
                    }}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 font-bold backdrop-blur-xl"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-400 text-[#063b3f]">
                      <FaCheck size={11} />
                    </span>

                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}

      <section className="about-grid-pattern relative overflow-hidden bg-[#eef8f4] py-16 md:py-24">
        <div className="about-glow pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-green-300/30 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <span className="inline-flex rounded-full border border-green-200 bg-white px-5 py-2 text-sm font-bold uppercase tracking-[3px] text-green-700 shadow-sm">
              Why Choose Us
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight text-[#063b3f] md:text-5xl">
              Trusted Pest Control Experts in Bangalore
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              We combine professional inspection, suitable treatments and
              customer-focused service to manage pest problems in homes and
              commercial properties.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid gap-6 md:grid-cols-2"
          >
            {strengths.map((item) => (
              <motion.div
                key={item.number}
                variants={fadeUp}
                whileHover={{
                  y: -9,
                }}
                className="group relative overflow-hidden rounded-[30px] border border-green-100 bg-white p-6 shadow-[0_20px_60px_rgba(6,59,63,0.08)] transition sm:p-8"
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-green-100/70 blur-[55px] transition group-hover:bg-green-200/70" />

                <div className="relative flex gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#063b3f] text-lg font-black text-white shadow-xl">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="mb-3 text-xl font-black text-[#063b3f] sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          RESIDENTIAL AND COMMERCIAL SERVICES
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#063b3f] py-16 text-white md:py-24">
        <div className="about-grid-pattern pointer-events-none absolute inset-0 opacity-20" />

        <div className="about-glow pointer-events-none absolute -left-36 top-0 h-[430px] w-[430px] rounded-full bg-green-400/20 blur-[120px]" />

        <div className="about-glow pointer-events-none absolute -right-36 bottom-0 h-[430px] w-[430px] rounded-full bg-emerald-300/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <span className="inline-flex rounded-full border border-green-300/20 bg-green-400/10 px-5 py-2 text-sm font-bold uppercase tracking-[3px] text-green-300">
              Complete Pest Management
            </span>

            <h2 className="mb-6 mt-5 text-3xl font-black leading-tight md:text-5xl">
              Pest Control for Homes and Businesses
            </h2>

            <p className="leading-8 text-gray-200">
              We provide pest management services for apartments, independent
              houses, offices, restaurants, hotels, hospitals, warehouses,
              schools, colleges and other commercial properties across
              Bangalore.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid gap-4 sm:grid-cols-2"
          >
            {[
              "Residential Pest Control",
              "Commercial Pest Control",
              "Termite Management",
              "Cockroach Control",
              "Bed Bug Treatment",
              "Rodent Management",
              "Mosquito Management",
              "Annual Maintenance Services",
            ].map((service) => (
              <motion.div
                key={service}
                variants={scaleIn}
                whileHover={{
                  y: -6,
                  backgroundColor: "rgba(255,255,255,0.16)",
                }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-5 font-bold shadow-lg backdrop-blur-xl"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-400 text-[#063b3f]">
                  <FaCheck size={12} />
                </span>

                {service}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      <section className="about-grid-pattern relative bg-[#f6fffb] py-16 md:py-24">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mb-12 text-center"
          >
            <span className="inline-flex rounded-full border border-green-200 bg-white px-5 py-2 text-sm font-bold uppercase tracking-[3px] text-green-700 shadow-sm">
              Have Questions?
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight text-[#063b3f] md:text-5xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-5 text-gray-600">
              Find answers about our pest control treatments, safety, service
              areas and commercial pest management.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-5"
          >
            {faqs.map((item, index) => (
              <motion.div
                key={item.q}
                variants={fadeUp}
                whileHover={{
                  y: -4,
                }}
                className="group rounded-[24px] border border-green-100 bg-white p-5 shadow-[0_15px_45px_rgba(6,59,63,0.07)] transition sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-sm font-black text-green-700 transition group-hover:bg-green-600 group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="mb-3 text-lg font-black text-[#063b3f] sm:text-xl">
                      {item.q}
                    </h3>

                    <p className="leading-7 text-gray-600">{item.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SERVICE AREAS
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="about-glow pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-green-100/70 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mb-10 text-center"
          >
            <span className="inline-flex rounded-full border border-green-200 bg-[#f6fffb] px-5 py-2 text-sm font-bold uppercase tracking-[3px] text-green-700">
              Service Areas
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight text-[#063b3f] md:text-5xl">
              Pest Control Service Areas in Bangalore
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-7 text-gray-600">
              Acuity Pest Controls serves residential and commercial customers
              across major localities in Bangalore.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="flex flex-wrap justify-center gap-3"
          >
            {locations.map((area) => (
              <motion.span
                key={area}
                variants={scaleIn}
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                className="rounded-full border border-green-100 bg-[#f6fffb] px-4 py-2.5 text-sm font-semibold text-[#063b3f] shadow-sm transition hover:border-green-300 hover:bg-green-50"
              >
                Pest Control in {area}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
    SEO INTERNAL LINKS
===================================================== */}

      <section className="bg-[#f8fcfb] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-[30px] border border-green-100 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-black text-[#063b3f]">
              Professional Pest Control Company in Bangalore
            </h2>

            <p className="mt-5 leading-8 text-gray-700">
              Acuity Pest Controls is one of the trusted companies providing{" "}
              <Link
                to="/services"
                className="font-bold text-green-700 hover:underline"
              >
                pest control services in Bangalore
              </Link>{" "}
              for residential, commercial and industrial properties. Our
              experienced technicians provide safe and effective solutions for
              all major pest infestations across Bengaluru.
            </p>

            <p className="mt-5 leading-8 text-gray-700">
              We specialize in{" "}
              <Link
                to="/cockroach-management-service"
                className="font-bold text-green-700 hover:underline"
              >
                cockroach control
              </Link>
              ,{" "}
              <Link
                to="/anti-termite-treatment"
                className="font-bold text-green-700 hover:underline"
              >
                termite treatment
              </Link>
              ,{" "}
              <Link
                to="/bed-bug-treatment"
                className="font-bold text-green-700 hover:underline"
              >
                bed bug treatment
              </Link>
              ,{" "}
              <Link
                to="/rodent-management-service"
                className="font-bold text-green-700 hover:underline"
              >
                rodent control
              </Link>
              ,{" "}
              <Link
                to="/mosquito-management-service"
                className="font-bold text-green-700 hover:underline"
              >
                mosquito control
              </Link>
              ,{" "}
              <Link
                to="/general-pest-control"
                className="font-bold text-green-700 hover:underline"
              >
                general pest control
              </Link>{" "}
              and commercial pest management throughout Bangalore.
            </p>

            <h3 className="mt-8 text-2xl font-black text-[#063b3f]">
              Explore Our Services
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="rounded-full border border-green-200 bg-green-50 px-4 py-2 font-semibold text-green-700 hover:bg-green-600 hover:text-white"
              >
                All Services
              </Link>

              <Link
                to="/general-pest-control"
                className="rounded-full border border-green-200 bg-green-50 px-4 py-2 font-semibold text-green-700 hover:bg-green-600 hover:text-white"
              >
                General Pest Control
              </Link>

              <Link
                to="/cockroach-management-service"
                className="rounded-full border border-green-200 bg-green-50 px-4 py-2 font-semibold text-green-700 hover:bg-green-600 hover:text-white"
              >
                Cockroach Control
              </Link>

              <Link
                to="/anti-termite-treatment"
                className="rounded-full border border-green-200 bg-green-50 px-4 py-2 font-semibold text-green-700 hover:bg-green-600 hover:text-white"
              >
                Termite Treatment
              </Link>

              <Link
                to="/bed-bug-treatment"
                className="rounded-full border border-green-200 bg-green-50 px-4 py-2 font-semibold text-green-700 hover:bg-green-600 hover:text-white"
              >
                Bed Bug Treatment
              </Link>

              <Link
                to="/rodent-management-service"
                className="rounded-full border border-green-200 bg-green-50 px-4 py-2 font-semibold text-green-700 hover:bg-green-600 hover:text-white"
              >
                Rodent Control
              </Link>

              <Link
                to="/office-pest-control"
                className="rounded-full border border-green-200 bg-green-50 px-4 py-2 font-semibold text-green-700 hover:bg-green-600 hover:text-white"
              >
                Office Pest Control
              </Link>

              <Link
                to="/hotel-hospital-pest-control"
                className="rounded-full border border-green-200 bg-green-50 px-4 py-2 font-semibold text-green-700 hover:bg-green-600 hover:text-white"
              >
                Hotel & Hospital
              </Link>

              <Link
                to="/warehouse-pest-management"
                className="rounded-full border border-green-200 bg-green-50 px-4 py-2 font-semibold text-green-700 hover:bg-green-600 hover:text-white"
              >
                Warehouse Pest Management
              </Link>

              <Link
                to="/blogs"
                className="rounded-full border border-green-200 bg-green-50 px-4 py-2 font-semibold text-green-700 hover:bg-green-600 hover:text-white"
              >
                Pest Control Blogs
              </Link>

              <Link
                to="/pest-identification"
                className="rounded-full border border-green-200 bg-green-50 px-4 py-2 font-semibold text-green-700 hover:bg-green-600 hover:text-white"
              >
                Pest Identification
              </Link>

              <Link
                to="/contact"
                className="rounded-full border border-green-200 bg-green-50 px-4 py-2 font-semibold text-green-700 hover:bg-green-600 hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#063b3f] py-16 text-white md:py-24">
        <div className="about-grid-pattern pointer-events-none absolute inset-0 opacity-20" />

        <div className="about-glow pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-green-400/20 blur-[120px]" />

        <div className="about-glow pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-emerald-300/20 blur-[120px]" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="relative mx-auto max-w-7xl px-4 text-center sm:px-6"
        >
          <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-400 text-[#063b3f] shadow-xl">
            <FaShieldAlt size={25} />
          </span>

          <h2 className="mb-5 text-3xl font-black leading-tight md:text-5xl">
            Book Pest Control Service in Bangalore
          </h2>

          <p className="mx-auto mb-8 max-w-3xl leading-7 text-gray-200">
            Contact Acuity Pest Controls for professional residential and
            commercial pest management services across Bangalore.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="tel:+919941229005"
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="about-shine inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 font-bold text-white shadow-xl transition hover:bg-green-400"
            >
              <FaPhoneAlt />
              Call Now: +91 99412 29005
            </motion.a>

            <motion.a
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Controls,%20I%20need%20pest%20control%20service%20in%20Bangalore."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="inline-flex items-center gap-3 rounded-full border border-white bg-white/5 px-8 py-4 font-bold text-white shadow-xl backdrop-blur-xl transition hover:bg-white hover:text-[#063b3f]"
            >
              <FaWhatsapp size={19} />
              Get a Free Quote
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUS;
