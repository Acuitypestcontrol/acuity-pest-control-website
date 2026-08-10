import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  FaArrowRight,
  FaCheck,
  FaChevronDown,
  FaPhoneAlt,
  FaShieldAlt,
  FaWhatsapp,
} from "react-icons/fa";

import SEO from "../components/seo/seo";

import bannerImage from "../images/servicebanner.jpg";
import bannerImage1 from "../images/cockroch1.png";
import bannerImage2 from "../images/pestman.png";

import cockroachImg from "../images/cockrochboxpng.png";
import termiteImg from "../images/termitebox.png";
import rodentImg from "../images/rodentbox.png";
import mosquitoImg from "../images/mosquitobox.png";
import bedbugImg from "../images/bedbugbox.jpg";
import woodborerImg from "../images/woodborebox.jpg";
import antImg from "../images/antbox.webp";
import lizardImg from "../images/lizardbox.png";
import hotelImg from "../images/hotels and hospitals.jpg";
import warehouseImg from "../images/warehouse.jpg";
import officeImg from "../images/office.jpg";
import schoolImg from "../images/school.jpg";
import apartmentImg from "../images/residential.jpg";
import disinfectionImg from "../images/dec.jpg";

const servicesPageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.acuitypestcontrols.com/services#service",
  name: "Pest Control Services in Bangalore",
  serviceType: "Pest Control Services",
  url: "https://www.acuitypestcontrols.com/services",
  description:
    "Acuity Pest Controls provides professional pest control services in Bangalore including cockroach control, termite treatment, bed bug treatment, rodent control, mosquito control, wood borer treatment, ant control and commercial pest management.",

  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.acuitypestcontrols.com/#business",
    name: "Acuity Pest Controls",
    url: "https://www.acuitypestcontrols.com/",
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
  },

  areaServed: {
    "@type": "City",
    name: "Bangalore",
  },

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pest Control Services in Bangalore",

    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cockroach Control Service in Bangalore",
          url: "https://www.acuitypestcontrols.com/cockroach-management-service",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Termite Control Service in Bangalore",
          url: "https://www.acuitypestcontrols.com/anti-termite-treatment",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rodent Control Service in Bangalore",
          url: "https://www.acuitypestcontrols.com/rodent-management-service",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mosquito Control Service in Bangalore",
          url: "https://www.acuitypestcontrols.com/mosquito-management-service",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bed Bug Treatment in Bangalore",
          url: "https://www.acuitypestcontrols.com/bed-bug-treatment",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wood Borer Treatment in Bangalore",
          url: "https://www.acuitypestcontrols.com/wood-borer-treatment",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ant Control Treatment in Bangalore",
          url: "https://www.acuitypestcontrols.com/ant-control-treatment",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "General Pest Control in Bangalore",
          url: "https://www.acuitypestcontrols.com/general-pest-control",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hotel and Hospital Pest Control in Bangalore",
          url: "https://www.acuitypestcontrols.com/hotel-hospital-pest-control",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Warehouse Pest Management in Bangalore",
          url: "https://www.acuitypestcontrols.com/warehouse-pest-management",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Office Pest Control in Bangalore",
          url: "https://www.acuitypestcontrols.com/office-pest-control",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Educational Institution Pest Control in Bangalore",
          url: "https://www.acuitypestcontrols.com/educational-institution-pest-control",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Apartment Common Area Pest Control in Bangalore",
          url: "https://www.acuitypestcontrols.com/common-area-treatment-residential-complex",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Disinfection Services in Bangalore",
          url: "https://www.acuitypestcontrols.com/disinfection-services",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pre-Construction Termite Treatment in Bangalore",
          url: "https://www.acuitypestcontrols.com/pre-construction-termite-treatment",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Post-Construction Termite Treatment in Bangalore",
          url: "https://www.acuitypestcontrols.com/post-construction-termite-treatment",
        },
      },
    ],
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
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

const Services = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceOpen, setServiceOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
    {
      image: cockroachImg,
      title: "Cockroach Control",
      desc: "Safe cockroach treatment for homes, kitchens, restaurants and offices.",
      path: "/cockroach-management-service",
    },
    {
      image: termiteImg,
      title: "Termite Control",
      desc: "Advanced termite treatment to protect wooden furniture and property.",
      path: "/anti-termite-treatment",
    },
    {
      image: rodentImg,
      title: "Rodent Control",
      desc: "Safe rat and mouse control solutions for homes and businesses.",
      path: "/rodent-management-service",
    },
    {
      image: mosquitoImg,
      title: "Mosquito Control",
      desc: "Mosquito management services to reduce breeding and protect your family.",
      path: "/mosquito-management-service",
    },
    {
      image: bedbugImg,
      title: "Bed Bug Treatment",
      desc: "Complete bed bug management for homes, hotels and apartments.",
      path: "/bed-bug-treatment",
    },
    {
      image: woodborerImg,
      title: "Wood Borer Treatment",
      desc: "Professional wood borer treatment for furniture and wooden interiors.",
      path: "/wood-borer-treatment",
    },
    {
      image: antImg,
      title: "Ant Control",
      desc: "Effective ant pest control for homes, kitchens and restaurants.",
      path: "/ant-control-treatment",
    },
    {
      image: lizardImg,
      title: "Lizard Control",
      desc: "Hygienic lizard control for residential and commercial properties.",
      path: "/general-pest-control",
    },
    {
      image: hotelImg,
      title: "Hotels & Hospitals",
      desc: "Specialized pest control for hotels and healthcare facilities.",
      path: "/hotel-hospital-pest-control",
    },
    {
      image: warehouseImg,
      title: "Warehouse Pest Management",
      desc: "Protect your inventory with our warehouse pest solutions.",
      path: "/warehouse-pest-management",
    },
    {
      image: officeImg,
      title: "Office & IT Campus",
      desc: "Keep your office pest-free with our professional services.",
      path: "/office-pest-control",
    },
    {
      image: schoolImg,
      title: "Schools & Colleges",
      desc: "Safe pest control for educational institutions.",
      path: "/educational-institution-pest-control",
    },
    {
      image: apartmentImg,
      title: "Residential Complex",
      desc: "Common area pest treatment for apartments and complexes.",
      path: "/common-area-treatment-residential-complex",
    },
    {
      image: disinfectionImg,
      title: "Disinfection Services",
      desc: "Professional disinfection for homes, offices and businesses.",
      path: "/disinfection-services",
    },
    {
      image: termiteImg,
      title: "Pre-Construction Termite Treatment",
      desc: "Preventive anti-termite treatment for new buildings before construction.",
      path: "/pre-construction-termite-treatment",
    },
    {
      image: termiteImg,
      title: "Post-Construction Termite Treatment",
      desc: "Professional termite treatment for completed homes and commercial properties.",
      path: "/post-construction-termite-treatment",
    },
  ];

  const toggleService = (serviceTitle) => {
    setSelectedServices((prev) =>
      prev.includes(serviceTitle)
        ? prev.filter((item) => item !== serviceTitle)
        : [...prev, serviceTitle],
    );
  };

  const handleWhatsApp = () => {
    const message = `*New Pest Control Enquiry*

👤 Name: ${name || "Not Provided"}
📞 Phone: ${phone || "Not Provided"}
🐜 Services Required: ${
      selectedServices.length > 0
        ? selectedServices.join(", ")
        : "Not Selected"
    }

Please contact me regarding pest control service.`;

    window.open(
      `https://wa.me/919941229005?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Pest Control Services in Bangalore | Acuity Pest Controls"
        description="Acuity Pest Controls provides professional pest control services in Bangalore including cockroach, termite, rodent, mosquito, bed bug, ant and commercial pest control."
        keywords="pest control services in Bangalore, pest control Bangalore, pest control near me, cockroach control Bangalore, termite control Bangalore"
        canonical="https://www.acuitypestcontrols.com/services"
        schema={servicesPageSchema}
      />

      <style>
        {`
          @keyframes serviceGlow {
            0%, 100% {
              opacity: 0.25;
              transform: scale(1);
            }

            50% {
              opacity: 0.55;
              transform: scale(1.15);
            }
          }

          @keyframes serviceFloat {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-12px);
            }
          }

          @keyframes serviceShine {
            0% {
              left: -120%;
            }

            100% {
              left: 160%;
            }
          }

          .service-glow {
            animation: serviceGlow 6s ease-in-out infinite;
          }

          .service-float {
            animation: serviceFloat 5s ease-in-out infinite;
          }

          .service-shine {
            position: relative;
            overflow: hidden;
          }

          .service-shine::after {
            position: absolute;
            top: -80%;
            left: -120%;
            width: 20%;
            height: 260%;
            content: "";
            background: rgba(255, 255, 255, 0.25);
            transform: rotate(22deg);
            animation: serviceShine 4.5s ease-in-out infinite;
          }

          .service-grid-pattern {
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
            .service-glow,
            .service-float,
            .service-shine::after {
              animation: none;
            }
          }
        `}
      </style>

      {/* HERO BANNER */}

      <section className="relative h-[48vh] min-h-[390px] overflow-hidden sm:h-[58vh] md:h-[88vh] lg:h-[95vh]">
        <motion.img
          src={bannerImage}
          alt="Professional pest control services in Bangalore"
          className="absolute inset-0 h-full w-full "
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

        <div className="absolute inset-0 bg-gradient-to-r from-[#031f21]/45 via-black/10 to-black/25" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#031f21]/40 via-transparent to-black/10" />

        <div className="service-glow pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-green-400/20 blur-[110px]" />

        <div className="service-glow pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-emerald-300/20 blur-[110px]" />

        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#f8fcfb] to-transparent" />
      </section>

      {/* SERVICES */}

      <section className="service-grid-pattern relative overflow-hidden bg-gradient-to-br from-[#f8fcfb] to-white py-16 sm:py-20 md:py-24">
        <div className="service-glow pointer-events-none absolute -left-40 top-20 h-[430px] w-[430px] rounded-full bg-green-200/35 blur-[120px]" />

        <div className="service-glow pointer-events-none absolute -right-40 bottom-0 h-[430px] w-[430px] rounded-full bg-emerald-100/50 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mx-auto mb-14 max-w-4xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-[4px] text-green-700 shadow-sm sm:text-sm">
              <FaShieldAlt />
              Our Services
            </span>

            <h1 className="mt-5 text-3xl font-black leading-tight text-[#063b3f] sm:text-4xl md:text-5xl lg:text-6xl">
              Pest Control Services in Bangalore
            </h1>

            <p className="mx-auto mt-5 max-w-3xl leading-7 text-gray-600">
              Professional pest control services for homes, apartments,
              offices, hotels, hospitals, warehouses, restaurants, schools
              and commercial properties across Bangalore.
            </p>

            <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-green-600 to-emerald-400" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                variants={scaleIn}
                whileHover={{
                  y: -10,
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-green-100 bg-white p-6 text-center shadow-[0_18px_55px_rgba(6,59,63,0.09)] transition hover:border-green-300 hover:shadow-[0_28px_75px_rgba(6,59,63,0.16)]"
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-green-100/60 blur-[55px] transition group-hover:bg-green-200/70" />

                <span className="absolute left-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#063b3f] text-xs font-black text-white shadow-lg">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative mx-auto mb-6 mt-5 flex h-28 w-28 items-center justify-center rounded-[30px] border border-green-100 bg-gradient-to-br from-green-50 to-white shadow-[0_14px_35px_rgba(6,59,63,0.12)] transition duration-500 group-hover:rotate-3 group-hover:scale-105">
                  <img
                    src={service.image}
                    alt={`${service.title} service in Bangalore`}
                    className="h-20 w-20 object-contain transition duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h2 className="relative mb-3 text-lg font-black leading-tight text-[#063b3f]">
                  {service.title}
                </h2>

                <p className="relative mb-6 flex-1 text-sm leading-7 text-gray-600">
                  {service.desc}
                </p>

                <div className="relative mt-auto flex flex-col gap-3">
                  <Link
                    to={service.path}
                    className="group/link inline-flex items-center justify-center gap-2 rounded-full border border-green-600 px-5 py-3 text-sm font-bold text-green-700 transition hover:bg-green-50"
                  >
                    Learn More
                    <FaArrowRight
                      size={11}
                      className="transition group-hover/link:translate-x-1"
                    />
                  </Link>

                  <a
                    href={`https://wa.me/919941229005?text=${encodeURIComponent(
                      `Hi Acuity Pest Controls, I need ${service.title} service.`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-shine inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700"
                  >
                    <FaWhatsapp size={16} />
                    Book Now
                  </a>
                </div>
              </motion.article>
            ))}

            <motion.div
              variants={scaleIn}
              whileHover={{
                y: -10,
              }}
              className="relative flex min-h-[390px] flex-col items-center justify-center overflow-hidden rounded-[28px] border border-green-200 bg-gradient-to-br from-[#063b3f] to-[#087268] p-7 text-center text-white shadow-[0_25px_70px_rgba(6,59,63,0.22)]"
            >
              <div className="service-glow pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-green-400/25 blur-[70px]" />

              <div className="service-glow pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-emerald-300/20 blur-[70px]" />

              <div className="relative mb-5 flex h-20 w-20 items-center justify-center rounded-[24px] border border-white/15 bg-white/10 text-4xl shadow-xl backdrop-blur-xl">
                🤔
              </div>

              <h2 className="relative mb-3 text-2xl font-black">
                Need Help Choosing?
              </h2>

              <p className="relative mb-7 text-sm leading-7 text-gray-200">
                Our experts are here to guide you.
              </p>

              <Link
                to="/contact"
                className="relative inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#063b3f] shadow-xl transition hover:-translate-y-1 hover:bg-green-50"
              >
                Contact Us
                <FaArrowRight size={11} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TRUSTED EXPERTS */}

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24">
        <div className="service-glow pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-green-100/70 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <span className="inline-flex rounded-full border border-green-200 bg-[#f6fffb] px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-green-700 sm:text-sm">
              About Us
            </span>

            <h2 className="mb-6 mt-5 text-3xl font-black leading-tight text-[#063b3f] md:text-5xl">
              Trusted Pest Control <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Experts in Bangalore
              </span>
            </h2>

            <p className="mb-8 text-sm leading-8 text-gray-600 sm:text-base">
              Acuity Pest Controls provides safe and effective pest control
              services across Bangalore for homes, apartments, offices,
              restaurants, warehouses and commercial properties.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="grid grid-cols-2 gap-4"
            >
              {[
                ["19+", "Years Experience"],
                ["15K+", "Treatments Completed"],
                ["5000+", "Customers Served"],
                ["24/7", "Customer Support"],
              ].map(([number, label]) => (
                <motion.div
                  key={label}
                  variants={scaleIn}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="relative overflow-hidden rounded-[24px] border border-green-100 bg-gradient-to-br from-[#f6fffb] to-white p-5 shadow-[0_15px_40px_rgba(6,59,63,0.08)]"
                >
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-green-200/40 blur-2xl" />

                  <h3 className="relative text-2xl font-black text-[#063b3f] sm:text-3xl">
                    {number}
                  </h3>

                  <p className="relative mt-1 text-xs text-gray-500 sm:text-sm">
                    {label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="relative"
          >
            <div className="pointer-events-none absolute -inset-5 rounded-[45px] bg-gradient-to-br from-green-200/30 to-emerald-100/30 blur-2xl" />

            <div className="relative overflow-hidden rounded-[38px] border border-green-100 bg-gradient-to-br from-[#f6fffb] to-white p-5 shadow-[0_30px_90px_rgba(6,59,63,0.16)] sm:p-8">
              <div className="absolute left-5 top-5 z-10 rounded-full border border-green-200 bg-white/90 px-4 py-2 text-xs font-black text-green-700 shadow-lg backdrop-blur-xl">
                Professional Team
              </div>

              <img
                src={bannerImage2}
                alt="Professional pest control technician in Bangalore"
                className="service-float h-full w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* INDUSTRIES */}

      <section className="service-grid-pattern relative overflow-hidden bg-[#eef8f4] py-16 sm:py-20">
        <div className="service-glow pointer-events-none absolute -right-36 top-0 h-96 w-96 rounded-full bg-green-200/50 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mx-auto mb-12 max-w-4xl text-center"
          >
            <span className="inline-flex rounded-full border border-green-200 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-green-700 shadow-sm sm:text-sm">
              We Serve
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight text-[#063b3f] md:text-5xl">
              Residential & Commercial Pest Control Solutions
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
          >
            {[
              "🏠 Homes",
              "🏢 Apartments",
              "💼 Offices",
              "🏨 Hotels",
              "🏥 Hospitals",
              "🍽️ Restaurants",
              "🏭 Industries",
              "🏬 Warehouses",
              "🏫 Schools",
              "🛒 Retail Stores",
            ].map((item) => (
              <motion.div
                key={item}
                variants={scaleIn}
                whileHover={{
                  y: -7,
                  scale: 1.02,
                }}
                className="rounded-[22px] border border-green-100 bg-white p-5 text-center text-sm font-bold text-[#063b3f] shadow-[0_14px_38px_rgba(6,59,63,0.08)] transition sm:text-base"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SEO CONTENT & INTERNAL LINKS */}

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-green-700 sm:text-sm">
              Pest Control Guide
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight text-[#063b3f] md:text-5xl">
              Professional Pest Control Services in Bangalore
            </h2>

            <div className="mt-5 h-1.5 w-24 rounded-full bg-gradient-to-r from-green-600 to-emerald-400" />

            <p className="mt-6 leading-8 text-gray-700">
              Acuity Pest Controls provides professional{" "}
              <strong>pest control services in Bangalore</strong> for homes,
              apartments, villas, offices, restaurants, hotels, hospitals,
              warehouses, industries and commercial properties. If you are
              searching for <strong>pest control near me</strong> or a trusted{" "}
              <strong>pest control service in Bangalore</strong>, our trained
              technicians provide safe, effective and reliable pest management
              solutions.
            </p>

            <p className="mt-5 leading-8 text-gray-700">
              Our pest control treatments are customized according to the pest
              species, infestation level and property type. We provide targeted
              solutions for common pests including cockroaches, termites, rats,
              mosquitoes, bed bugs, ants, wood borers and other household and
              commercial pests.
            </p>

            <h3 className="mt-12 text-2xl font-black text-[#063b3f] md:text-3xl">
              Residential Pest Control Services in Bangalore
            </h3>

            <p className="mt-4 leading-8 text-gray-700">
              Protect your home and family with professional residential pest
              control services. Our technicians provide customized treatments
              for apartments, villas, independent houses, kitchens, bedrooms
              and residential communities.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/general-pest-control"
                className="rounded-full bg-green-100 px-5 py-2.5 font-semibold text-green-700 transition hover:bg-green-600 hover:text-white"
              >
                General Pest Control
              </Link>

              <Link
                to="/cockroach-management-service"
                className="rounded-full bg-green-100 px-5 py-2.5 font-semibold text-green-700 transition hover:bg-green-600 hover:text-white"
              >
                Cockroach Control
              </Link>

              <Link
                to="/anti-termite-treatment"
                className="rounded-full bg-green-100 px-5 py-2.5 font-semibold text-green-700 transition hover:bg-green-600 hover:text-white"
              >
                Termite Treatment
              </Link>

              <Link
                to="/bed-bug-treatment"
                className="rounded-full bg-green-100 px-5 py-2.5 font-semibold text-green-700 transition hover:bg-green-600 hover:text-white"
              >
                Bed Bug Treatment
              </Link>

              <Link
                to="/rodent-management-service"
                className="rounded-full bg-green-100 px-5 py-2.5 font-semibold text-green-700 transition hover:bg-green-600 hover:text-white"
              >
                Rodent Control
              </Link>

              <Link
                to="/mosquito-management-service"
                className="rounded-full bg-green-100 px-5 py-2.5 font-semibold text-green-700 transition hover:bg-green-600 hover:text-white"
              >
                Mosquito Control
              </Link>

              <Link
                to="/wood-borer-treatment"
                className="rounded-full bg-green-100 px-5 py-2.5 font-semibold text-green-700 transition hover:bg-green-600 hover:text-white"
              >
                Wood Borer Treatment
              </Link>

              <Link
                to="/ant-control-treatment"
                className="rounded-full bg-green-100 px-5 py-2.5 font-semibold text-green-700 transition hover:bg-green-600 hover:text-white"
              >
                Ant Control
              </Link>
            </div>

            <h3 className="mt-12 text-2xl font-black text-[#063b3f] md:text-3xl">
              Commercial Pest Control Services in Bangalore
            </h3>

            <p className="mt-4 leading-8 text-gray-700">
              We also provide professional pest management for offices, IT
              campuses, hotels, hospitals, restaurants, warehouses, schools,
              colleges, industries and residential communities across Bangalore.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/office-pest-control"
                className="rounded-full bg-blue-50 px-5 py-2.5 font-semibold text-[#063b3f] transition hover:bg-[#063b3f] hover:text-white"
              >
                Office Pest Control
              </Link>

              <Link
                to="/hotel-hospital-pest-control"
                className="rounded-full bg-blue-50 px-5 py-2.5 font-semibold text-[#063b3f] transition hover:bg-[#063b3f] hover:text-white"
              >
                Hotel & Hospital Pest Control
              </Link>

              <Link
                to="/warehouse-pest-management"
                className="rounded-full bg-blue-50 px-5 py-2.5 font-semibold text-[#063b3f] transition hover:bg-[#063b3f] hover:text-white"
              >
                Warehouse Pest Management
              </Link>

              <Link
                to="/educational-institution-pest-control"
                className="rounded-full bg-blue-50 px-5 py-2.5 font-semibold text-[#063b3f] transition hover:bg-[#063b3f] hover:text-white"
              >
                School & College Pest Control
              </Link>

              <Link
                to="/common-area-treatment-residential-complex"
                className="rounded-full bg-blue-50 px-5 py-2.5 font-semibold text-[#063b3f] transition hover:bg-[#063b3f] hover:text-white"
              >
                Apartment Common Area Treatment
              </Link>

              <Link
                to="/disinfection-services"
                className="rounded-full bg-blue-50 px-5 py-2.5 font-semibold text-[#063b3f] transition hover:bg-[#063b3f] hover:text-white"
              >
                Disinfection Services
              </Link>

              <Link
                to="/pre-construction-termite-treatment"
                className="rounded-full bg-blue-50 px-5 py-2.5 font-semibold text-[#063b3f] transition hover:bg-[#063b3f] hover:text-white"
              >
                Pre-Construction Termite Treatment
              </Link>

              <Link
                to="/post-construction-termite-treatment"
                className="rounded-full bg-blue-50 px-5 py-2.5 font-semibold text-[#063b3f] transition hover:bg-[#063b3f] hover:text-white"
              >
                Post-Construction Termite Treatment
              </Link>
            </div>

            <h3 className="mt-12 text-2xl font-black text-[#063b3f] md:text-3xl">
              Pest Control Solutions for Every Property
            </h3>

            <p className="mt-4 leading-8 text-gray-700">
              Whether you need pest control for a home, apartment, office,
              restaurant, warehouse, hotel, hospital or educational institution,
              Acuity Pest Controls offers customized pest management solutions.
              Our goal is to identify the source of infestation, treat the
              affected areas and help prevent recurring pest problems.
            </p>

            <h3 className="mt-12 text-2xl font-black text-[#063b3f] md:text-3xl">
              Learn More About Pest Control
            </h3>

            <p className="mt-4 leading-8 text-gray-700">
              Learn about pest species, prevention methods and professional
              treatment options through our resources. Visit our{" "}
              <Link
                to="/blogs"
                className="font-bold text-green-700 hover:underline"
              >
                Pest Control Blogs
              </Link>
              , explore our{" "}
              <Link
                to="/pest-identification"
                className="font-bold text-green-700 hover:underline"
              >
                Pest Identification Guide
              </Link>
              , learn more{" "}
              <Link
                to="/about"
                className="font-bold text-green-700 hover:underline"
              >
                About Acuity Pest Controls
              </Link>
              , or{" "}
              <Link
                to="/contact"
                className="font-bold text-green-700 hover:underline"
              >
                Contact Us
              </Link>{" "}
              to request a pest inspection or service in Bangalore.
            </p>

            <div className="mt-10 rounded-3xl border border-green-100 bg-gradient-to-br from-[#f6fffb] to-white p-6 shadow-sm sm:p-8">
              <h3 className="text-xl font-black text-[#063b3f] sm:text-2xl">
                Looking for Pest Control Near You?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Contact Acuity Pest Controls for professional pest inspection,
                treatment and prevention services across Bangalore.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="tel:+919941229005"
                  className="rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-700"
                >
                  Call +91 99412 29005
                </a>

                <a
                  href="https://wa.me/919941229005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-green-600 px-6 py-3 text-sm font-bold text-green-700 transition hover:bg-green-50"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA AND FORM */}

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24">
        <div className="service-glow pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-green-100/60 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid overflow-hidden rounded-[38px] border border-green-100 bg-white shadow-[0_30px_100px_rgba(6,59,63,0.13)] lg:grid-cols-2">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="relative flex min-h-[380px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#f6fffb] to-white sm:min-h-[520px]"
            >
              <div className="service-glow pointer-events-none absolute h-[340px] w-[340px] rounded-full bg-green-200/50 blur-[90px] sm:h-[460px] sm:w-[460px]" />

              <div className="relative h-[290px] w-[290px] sm:h-[440px] sm:w-[440px]">
                <img
                  src={bannerImage1}
                  alt="Cockroach control and pest treatment in Bangalore"
                  className="service-float h-full w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="relative bg-white p-6 sm:p-10 lg:p-12"
            >
              <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-green-700 sm:text-sm">
                Call Us For Estimate
              </span>

              <h2 className="mb-5 mt-5 text-3xl font-black leading-tight text-[#063b3f] md:text-5xl">
                Book Professional Pest Control Services
              </h2>

              <p className="mb-8 leading-7 text-gray-700">
                Safe and effective pest control solutions for homes,
                apartments, offices, hotels, warehouses and commercial
                properties across Bangalore.
              </p>

              <div className="relative rounded-[30px] border border-green-100 bg-gradient-to-br from-[#f8fcfb] to-white p-5 shadow-[0_24px_70px_rgba(6,59,63,0.12)] sm:p-8">
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-green-200/35 blur-[50px]" />

                <div className="relative">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600 text-white shadow-lg">
                      <FaShieldAlt />
                    </span>

                    <div>
                      <h3 className="text-2xl font-black text-[#063b3f] sm:text-4xl">
                        Book An Inspection
                      </h3>

                      <p className="mt-1 text-sm text-gray-600">
                        We&apos;ll call you back within 30 minutes.
                      </p>
                    </div>
                  </div>

                  <form
                    className="mt-7 space-y-4"
                    onSubmit={(event) => event.preventDefault()}
                  >
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className="w-full rounded-2xl border border-gray-200 bg-white p-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-100"
                    />

                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      className="w-full rounded-2xl border border-gray-200 bg-white p-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-100"
                    />

                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setServiceOpen((prev) => !prev)}
                        className="flex w-full items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 text-left text-sm outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                      >
                        <span
                          className={
                            selectedServices.length
                              ? "text-gray-800"
                              : "text-gray-400"
                          }
                        >
                          {selectedServices.length > 0
                            ? `${selectedServices.length} Service${
                                selectedServices.length > 1 ? "s" : ""
                              } Selected`
                            : "Select Services"}
                        </span>

                        <motion.span
                          animate={{
                            rotate: serviceOpen ? 180 : 0,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="text-green-700"
                        >
                          <FaChevronDown />
                        </motion.span>
                      </button>

                      <AnimatePresence>
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
                            exit={{
                              opacity: 0,
                              y: -8,
                              scale: 0.98,
                            }}
                            transition={{
                              duration: 0.22,
                            }}
                            className="absolute z-50 mt-2 max-h-64 w-full overflow-y-auto rounded-2xl border border-green-100 bg-white p-4 shadow-[0_24px_65px_rgba(6,59,63,0.18)]"
                          >
                            {services.map((item) => (
                              <label
                                key={item.title}
                                className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-2.5 text-sm text-gray-700 transition hover:bg-green-50 hover:text-green-700"
                              >
                                <input
                                  type="checkbox"
                                  checked={selectedServices.includes(
                                    item.title,
                                  )}
                                  onChange={() => toggleService(item.title)}
                                  className="h-4 w-4 shrink-0 accent-green-600"
                                />

                                <span>{item.title}</span>
                              </label>
                            ))}

                            <button
                              type="button"
                              onClick={() => setServiceOpen(false)}
                              className="mt-4 w-full rounded-xl bg-green-600 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-green-700"
                            >
                              Done
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <motion.button
                      type="button"
                      onClick={handleWhatsApp}
                      whileHover={{
                        y: -3,
                        scale: 1.01,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className="service-shine flex w-full items-center justify-center gap-3 rounded-2xl bg-green-600 py-4 text-sm font-bold text-white shadow-lg shadow-green-600/30 transition hover:bg-green-700 sm:text-base"
                    >
                      <FaWhatsapp size={18} />
                      Get Free Quote via WhatsApp
                    </motion.button>
                  </form>

                  <div className="mt-6 flex flex-wrap gap-3 text-xs text-gray-500 sm:text-sm">
                    {["No spam", "100% free", "Quick response"].map(
                      (item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-white px-3 py-2"
                        >
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-700">
                            <FaCheck size={9} />
                          </span>

                          {item}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="tel:+919941229005"
                  className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-5 py-3 text-sm font-bold text-green-700 transition hover:bg-green-100"
                >
                  <FaPhoneAlt />
                  +91 99412 29005
                </a>

                <a
                  href="https://wa.me/919941229005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-5 py-3 text-sm font-bold text-green-700 transition hover:bg-green-100"
                >
                  <FaWhatsapp />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;