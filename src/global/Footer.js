import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import {
  FaArrowRight,
  FaBuilding,
  FaChevronUp,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
  FaSprayCan,
  FaWhatsapp,
} from "react-icons/fa";

import logo from "../images/acuitylogo1.png";

/* =========================================================
   FOOTER CONTENT
========================================================= */

const quickLinks = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "About Us",
    link: "/aboutus",
  },
  {
    name: "All Services",
    link: "/services",
  },
  {
    name: "Pest Identification",
    link: "/pestidentification",
  },
  {
    name: "Blogs",
    link: "/blogsmainpage",
  },
  {
    name: "Contact Us",
    link: "/contactus",
  },
];

const residentialServices = [
  {
    name: "General Pest Control",
    link: "/general-pest-control",
  },
  {
    name: "Cockroach Control",
    link: "/cockroach-management-service",
  },
  {
    name: "Anti-Termite Treatment",
    link: "/anti-termite-treatment",
  },
  {
    name: "Bed Bug Treatment",
    link: "/bed-bug-treatment",
  },
  {
    name: "Rodent Control",
    link: "/rodent-management-service",
  },
  {
    name: "Mosquito Control",
    link: "/mosquito-management-service",
  },
  {
    name: "Wood Borer Treatment",
    link: "/wood-borer-treatment",
  },
];

const commercialServices = [
  {
    name: "Office Pest Control",
    link: "/office-pest-control",
  },
  {
    name: "Hotels & Hospitals",
    link: "/pest-control-hotels-hospitals",
  },
  {
    name: "Warehouse Pest Management",
    link: "/warehouse-pest-management",
  },
  {
    name: "Educational Institutions",
    link: "/educational-institution-pest-control",
  },
  {
    name: "Residential Common Areas",
    link: "/common-area-treatment-residential-complex",
  },
  {
    name: "Disinfection Services",
    link: "/disinfection-services",
  },
];

const serviceAreas = [
  "JP Nagar",
  "Jayanagar",
  "Banashankari",
  "BTM Layout",
  "HSR Layout",
  "Koramangala",
  "Electronic City",
  "Whitefield",
  "Marathahalli",
  "Indiranagar",
  "Sarjapur Road",
  "Bannerghatta Road",
];

/* =========================================================
   ANIMATION SETTINGS
========================================================= */

const revealUp = {
  hidden: {
    opacity: 0,
    y: 35,
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

const revealLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
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
   FOOTER
========================================================= */

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="relative overflow-hidden bg-[#031f21] text-white">
        {/* =================================================
            CUSTOM ANIMATIONS
        ================================================== */}

        <style>
          {`
            @keyframes footerGlow {
              0%, 100% {
                opacity: 0.25;
                transform: scale(1);
              }

              50% {
                opacity: 0.5;
                transform: scale(1.18);
              }
            }

            @keyframes footerShine {
              0% {
                left: -100%;
              }

              100% {
                left: 160%;
              }
            }

            @keyframes footerWhatsAppPulse {
              0%, 100% {
                box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
              }

              50% {
                box-shadow: 0 0 0 12px rgba(34, 197, 94, 0);
              }
            }

            .footer-glow {
              animation: footerGlow 6s ease-in-out infinite;
            }

            .footer-shine {
              position: relative;
              overflow: hidden;
            }

            .footer-shine::after {
              position: absolute;
              top: -80%;
              left: -100%;
              width: 18%;
              height: 260%;
              content: "";
              background: rgba(255, 255, 255, 0.28);
              transform: rotate(22deg);
              animation: footerShine 4.8s ease-in-out infinite;
            }

            .footer-whatsapp-pulse {
              animation: footerWhatsAppPulse 2.5s ease-in-out infinite;
            }

            .footer-grid {
              background-image:
                linear-gradient(
                  rgba(255, 255, 255, 0.035) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(255, 255, 255, 0.035) 1px,
                  transparent 1px
                );

              background-size: 34px 34px;
            }

            @media (prefers-reduced-motion: reduce) {
              .footer-glow,
              .footer-shine::after,
              .footer-whatsapp-pulse {
                animation: none;
              }
            }
          `}
        </style>

        {/* BACKGROUND DECORATION */}

        <div className="footer-grid pointer-events-none absolute inset-0 opacity-60" />

        <div className="footer-glow pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-green-500/20 blur-[120px]" />

        <div className="footer-glow pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-emerald-400/15 blur-[120px]" />

        {/* =================================================
            TOP CALL TO ACTION
        ================================================== */}

        <div className="relative z-10 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <motion.div
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="relative overflow-hidden rounded-[32px] border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-8 lg:p-10"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-400/20 blur-[70px]" />

              <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-green-300/25 bg-green-400/10 px-4 py-2 text-xs font-black uppercase tracking-[2px] text-green-300">
                    <FaShieldAlt />
                    Professional Pest Protection
                  </span>

                  <h2 className="mt-5 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                    Need Pest Control Service in Bangalore?
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
                    Speak with our team for cockroach control, termite
                    treatment, bed bug treatment, rodent control, mosquito
                    management and commercial pest control services.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <motion.a
                    href="tel:+919941229005"
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-black text-[#063b3f] shadow-xl transition hover:bg-green-50"
                  >
                    <FaPhoneAlt />
                    Call Now
                  </motion.a>

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
                    className="footer-shine footer-whatsapp-pulse inline-flex items-center justify-center gap-3 rounded-full bg-green-500 px-7 py-4 font-black text-white shadow-xl transition hover:bg-green-400"
                  >
                    <FaWhatsapp size={19} />
                    WhatsApp Us
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* =================================================
            MAIN FOOTER CONTENT
        ================================================== */}

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1fr_1fr]">
            {/* COMPANY DETAILS */}

            <motion.div
              variants={revealLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              <Link
                to="/"
                aria-label="Acuity Pest Controls Home"
                className="inline-flex"
              >
                <img
                  src={logo}
                  alt="Acuity Pest Controls"
                  className="h-28 w-auto object-contain brightness-0 invert sm:h-32"
                  loading="lazy"
                />
              </Link>

              <p className="mt-5 max-w-md text-sm leading-7 text-gray-300 sm:text-base">
                Acuity Pest Controls provides professional pest control services
                in Bangalore for homes, apartments, offices, restaurants,
                hotels, hospitals, warehouses and industries.
              </p>

              <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-green-300/20 bg-green-400/10 px-4 py-3">
                <span className="text-2xl">🏅</span>

                <div>
                  <p className="text-sm font-black text-white">ISO 9001:2015</p>

                  <p className="mt-0.5 text-[11px] text-green-200">
                    Certificate: 305024122052Q
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <SocialLink
                  href="https://www.facebook.com/acuity.pest.9/"
                  label="Acuity Pest Controls Facebook"
                  icon={FaFacebookF}
                />

                <SocialLink
                  href="https://www.instagram.com/acuity_pest_control/"
                  label="Acuity Pest Controls Instagram"
                  icon={FaInstagram}
                />

                <SocialLink
                  href="https://wa.me/919941229005"
                  label="Acuity Pest Controls WhatsApp"
                  icon={FaWhatsapp}
                />
              </div>
            </motion.div>

            {/* QUICK LINKS */}

            <FooterLinkColumn
              title="Quick Links"
              icon={FaArrowRight}
              links={quickLinks}
            />

            {/* RESIDENTIAL SERVICES */}

            <FooterLinkColumn
              title="Home Services"
              icon={FaShieldAlt}
              links={residentialServices}
            />

            {/* COMMERCIAL SERVICES */}

            <FooterLinkColumn
              title="Commercial Services"
              icon={FaBuilding}
              links={commercialServices}
            />
          </div>

          {/* =================================================
              CONTACT INFORMATION
          ================================================== */}

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            <ContactCard
              icon={FaPhoneAlt}
              label="Call Our Team"
              value="+91 99412 29005"
              href="tel:+919941229005"
            />

            <ContactCard
              icon={FaWhatsapp}
              label="WhatsApp Support"
              value="Chat with our team"
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Controls,%20I%20need%20pest%20control%20service."
              external
            />

            <ContactCard
              icon={FaEnvelope}
              label="Email Address"
              value="info@acuitygroups.in
"
              href="mailto:info@acuitygroups.in
"
            />

            <ContactCard
              icon={FaClock}
              label="Working Hours"
              value="Mon – Sun, 8 AM – 8 PM"
            />
          </motion.div>

          {/* =================================================
              ADDRESS AND SERVICE AREAS
          ================================================== */}

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            {/* ADDRESS */}

            <motion.div
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-500 text-white shadow-lg">
                  <FaMapMarkerAlt size={20} />
                </span>

                <div>
                  <h3 className="text-xl font-black text-white">
                    Visit Our Office
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-300">
                    1st Floor, KVO-08, No-28/2, near Sun Jupiter School, JP
                    Nagar 6th Phase, Yelachenahalli, Kumaraswamy Layout,
                    Bengaluru, Karnataka 560078.
                  </p>

                  <a
                    href="https://maps.app.goo.gl/N5GeNpCZJMbavHHe7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-5 py-3 text-sm font-black text-green-300 transition hover:bg-green-500 hover:text-white"
                  >
                    Open Google Maps
                    <FaArrowRight size={12} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* SERVICE AREAS */}

            <motion.div
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500 text-white shadow-lg">
                  <FaSprayCan size={20} />
                </span>

                <div>
                  <h3 className="text-xl font-black text-white">
                    Bangalore Service Areas
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    Pest-control support across major locations
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-gray-300 transition hover:border-green-400/40 hover:bg-green-400/10 hover:text-green-300"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* =================================================
            COPYRIGHT
        ================================================== */}

        <div className="relative z-10 border-t border-white/10 bg-black/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-xs text-gray-400 sm:px-6 md:flex-row md:text-left lg:px-8">
            <p>
              © {new Date().getFullYear()} Acuity Pest Controls. All Rights
              Reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/services" className="transition hover:text-green-300">
                Pest Control Services
              </Link>

              <span className="hidden h-1 w-1 rounded-full bg-gray-600 sm:block" />

              <Link to="/contactus" className="transition hover:text-green-300">
                Contact
              </Link>

              <span className="hidden h-1 w-1 rounded-full bg-gray-600 sm:block" />

              <p>Professional Pest Control in Bangalore</p>
            </div>
          </div>
        </div>
      </footer>

      {/* =====================================================
          SCROLL TO TOP BUTTON
      ====================================================== */}

      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            initial={{
              opacity: 0,
              scale: 0.7,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.7,
              y: 20,
            }}
            whileHover={{
              y: -5,
              scale: 1.06,
            }}
            whileTap={{
              scale: 0.92,
            }}
            aria-label="Scroll to top"
            className="fixed bottom-[88px] left-4 z-[1200] flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[#063b3f] text-white shadow-[0_18px_45px_rgba(6,59,63,0.35)] md:bottom-6 md:left-6"
          >
            <FaChevronUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

/* =========================================================
   FOOTER LINK COLUMN
========================================================= */

const FooterLinkColumn = ({ title, icon: Icon, links }) => {
  return (
    <motion.div
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/15 text-green-300">
          <Icon size={16} />
        </span>

        <h3 className="text-lg font-black text-white">{title}</h3>
      </div>

      <div className="space-y-1.5">
        {links.map((item) => (
          <Link
            key={item.link}
            to={item.link}
            className="group flex items-center gap-3 rounded-xl py-2 text-sm text-gray-300 transition hover:translate-x-1 hover:text-green-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 transition group-hover:scale-150" />

            {item.name}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

/* =========================================================
   CONTACT CARD
========================================================= */

const ContactCard = ({ icon: Icon, label, value, href, external = false }) => {
  const content = (
    <motion.div
      variants={revealUp}
      whileHover={{
        y: -7,
        scale: 1.015,
      }}
      className="group h-full rounded-[22px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-green-400/30 hover:bg-white/10"
    >
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-green-500 text-white shadow-lg transition group-hover:rotate-6">
          <Icon size={18} />
        </span>

        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-wider text-green-300">
            {label}
          </p>

          <p className="mt-1 break-all text-sm font-black text-white">
            {value}
          </p>
        </div>
      </div>
    </motion.div>
  );

  if (!href) {
    return content;
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block"
    >
      {content}
    </a>
  );
};

/* =========================================================
   SOCIAL ICON
========================================================= */

const SocialLink = ({ href, label, icon: Icon }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{
        y: -5,
        rotate: 5,
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.92,
      }}
      className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white shadow-lg transition hover:border-green-400/30 hover:bg-green-500"
    >
      <Icon />
    </motion.a>
  );
};

export default Footer;
