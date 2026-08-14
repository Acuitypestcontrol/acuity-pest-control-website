import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import {
  FaArrowRight,
  FaBars,
  FaBuilding,
  FaChevronDown,
  FaEnvelope,
  FaLocationArrow,
  FaPhoneAlt,
  FaShieldAlt,
  FaSprayCan,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";

import logo from "../images/acuitylogo1.png";

/* =========================================================
   ANIMATION SETTINGS
========================================================= */

const menuAnimation = {
  hidden: {
    opacity: 0,
    y: -15,
    scale: 0.98,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,

    transition: {
      duration: 0.18,
    },
  },
};

const mobileMenuAnimation = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.32,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    y: -15,
    scale: 0.97,

    transition: {
      duration: 0.22,
    },
  },
};

/* =========================================================
   NAVBAR COMPONENT
========================================================= */

const Navbar = () => {
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);

  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 45);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setDesktopServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const homeServices = [
    {
      name: "General Pest Control",
      link: "/general-pest-control",
    },
    {
      name: "Anti-Termite Treatment",
      link: "/anti-termite-treatment",
    },
    {
      name: "Post Construction Termite Treatment",
      link: "/post-construction-termite-treatment",
    },
    {
      name: "Bed Bug Treatment",
      link: "/bed-bug-treatment",
    },
    {
      name: "Ant Control Treatment",
      link: "/ant-control-treatment",
    },
    {
      name: "Mosquito Management Service",
      link: "/mosquito-management-service",
    },
    {
      name: "Cockroach Management Service",
      link: "/cockroach-management-service",
    },
    {
      name: "Rodent Management Service",
      link: "/rodent-management-service",
    },
    {
      name: "Wood Borer Treatment",
      link: "/wood-borer-treatment",
    },
  ];

  const commercialServices = [
    {
      name: "Pre Construction Termite Treatment",
      link: "/pre-construction-termite-treatment",
    },
    {
      name: "Pest Control For Hotels And Hospitals",
      link: "/pest-control-hotels-hospitals",
    },
    {
      name: "Warehouse Pest Management",
      link: "/warehouse-pest-management",
    },
    {
      name: "IT Campuses And Office Pest Control",
      link: "/office-pest-control",
    },
    {
      name: "Pest Control In Educational Institution",
      link: "/educational-institution-pest-control",
    },
    {
      name: "Common Area Treatment – Residential Complex",
      link: "/common-area-treatment-residential-complex",
    },
  ];

  const closeMobileMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  const isActiveLink = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  const servicesActive =
    location.pathname === "/services" ||
    homeServices.some((item) => location.pathname.startsWith(item.link)) ||
    commercialServices.some((item) =>
      location.pathname.startsWith(item.link),
    ) ||
    location.pathname.startsWith("/disinfection-services");

  return (
    <>
      <header className="fixed left-0 top-0 z-[1000] w-full">
        <style>
          {`
            @keyframes navbarGlow {
              0%, 100% {
                opacity: 0.3;
                transform: scale(1);
              }

              50% {
                opacity: 0.6;
                transform: scale(1.15);
              }
            }

            @keyframes navbarShine {
              0% {
                left: -100%;
              }

              100% {
                left: 160%;
              }
            }

            @keyframes whatsappPulse {
              0%, 100% {
                box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.32);
              }

              50% {
                box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
              }
            }

            .navbar-glow {
              animation: navbarGlow 5s ease-in-out infinite;
            }

            .navbar-shine {
              position: relative;
              overflow: hidden;
            }

            .navbar-shine::after {
              position: absolute;
              top: -80%;
              left: -100%;
              width: 18%;
              height: 260%;
              content: "";
              background: rgba(255, 255, 255, 0.3);
              transform: rotate(22deg);
              animation: navbarShine 4.5s ease-in-out infinite;
            }

            .navbar-whatsapp-pulse {
              animation: whatsappPulse 2.4s ease-in-out infinite;
            }

            @media (prefers-reduced-motion: reduce) {
              .navbar-glow,
              .navbar-shine::after,
              .navbar-whatsapp-pulse {
                animation: none;
              }
            }
          `}
        </style>

        {/* DESKTOP TOP INFORMATION BAR */}

        <motion.div
          animate={{
            height: scrolled ? 0 : "auto",
            opacity: scrolled ? 0 : 1,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="hidden overflow-hidden bg-[#063b3f]/90 text-white backdrop-blur-xl md:block"
        >
          <div className="mx-auto flex max-w-[1450px] items-center justify-between gap-5 px-5 py-2 text-xs lg:px-8 lg:text-sm">
            <a
              href="https://maps.app.goo.gl/N5GeNpCZJMbavHHe7"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-w-0 items-center gap-2 transition hover:text-green-300"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-green-500 group-hover:text-white">
                <FaLocationArrow size={12} />
              </span>

              <span className="truncate font-semibold">
                JP Nagar 6th Phase, Yelachenahalli, Bengaluru – 560078
              </span>
            </a>

            <span className="navbar-shine hidden shrink-0 items-center gap-2 rounded-full border border-green-400/30 bg-green-600 px-4 py-1.5 font-bold text-white shadow-lg lg:flex">
              <span>🏅</span>
              ISO 9001:2015 – (305024122052Q)
            </span>

            <a
              href="mailto:info@acuitypestcontrols.in"
              className="group hidden shrink-0 items-center gap-2 transition hover:text-green-300 xl:flex"
            >
              <FaEnvelope className="transition group-hover:scale-110" />

              info@acuitypestcontrols.in
            </a>

            <div className="flex shrink-0 items-center gap-3">
              <a
                href="tel:+919941229005"
                className="group flex items-center gap-2 rounded-full px-3 py-1.5 transition hover:bg-white/10 hover:text-green-300"
              >
                <FaPhoneAlt className="transition group-hover:rotate-12" />

                <span className="font-bold">+91 99412 29005</span>
              </a>

              <a
                href="https://wa.me/919941229005"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-whatsapp-pulse flex items-center gap-2 rounded-full bg-green-600 px-4 py-1.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-green-500"
              >
                <FaWhatsapp size={17} />

                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

        {/* MOBILE TOP BAR */}

        <motion.div
          animate={{
            height: scrolled ? 0 : "auto",
            opacity: scrolled ? 0 : 1,
          }}
          transition={{
            duration: 0.3,
          }}
          className="overflow-hidden bg-[#063b3f]/90 text-white backdrop-blur-xl md:hidden"
        >
          <div className="grid grid-cols-3 divide-x divide-white/10 px-2 py-2 text-[11px] font-bold">
            <a
              href="tel:+919941229005"
              className="flex items-center justify-center gap-1.5"
            >
              <FaPhoneAlt />

              Call
            </a>

            <a
              href="mailto:info@acuitypestcontrols.in"
              className="flex items-center justify-center gap-1.5"
            >
              <FaEnvelope />

              Email
            </a>

            <a
              href="https://wa.me/919941229005"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 text-green-300"
            >
              <FaWhatsapp size={14} />

              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* MAIN NAVIGATION */}

        <motion.div
          animate={{
            paddingTop: scrolled ? 0 : 4,
            paddingBottom: scrolled ? 0 : 4,
          }}
          transition={{
            duration: 0.35,
          }}
          className={`relative w-full transition-all duration-500 ${
            scrolled
              ? "border-b border-white/30 bg-transparent shadow-[0_12px_40px_rgba(6,59,63,0.12)] backdrop-blur-3xl"
              : "border-b border-transparent bg-transparent shadow-none backdrop-blur-none"
          }`}
        >
          <div
            className={`navbar-glow pointer-events-none absolute -left-20 top-0 h-32 w-64 rounded-full bg-green-300/30 blur-[80px] transition-opacity duration-500 ${
              scrolled ? "opacity-30" : "opacity-20"
            }`}
          />

          <div className="relative mx-auto max-w-[1450px] px-3 sm:px-5 lg:px-8">
            <div
              className={`flex items-center justify-between transition-all duration-500 ${
                scrolled ? "min-h-[72px]" : "min-h-[84px] md:min-h-[105px]"
              }`}
            >
              <motion.div
                animate={{
                  scale: scrolled ? 0.9 : 1,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="shrink-0"
              >
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  aria-label="Go to Acuity Pest Controls homepage"
                  className="group flex items-center"
                >
                  <img
                    src={logo}
                    alt="Acuity Pest Controls"
                    className={`w-auto object-contain transition-all duration-500 ${
                      scrolled
                        ? "h-14 md:h-[90px]"
                        : "h-14 sm:h-16 md:h-[120px]"
                    }`}
                  />
                </Link>
              </motion.div>

              {/* DESKTOP NAVIGATION */}

              <nav className="hidden items-center gap-1 xl:flex">
                <DesktopNavLink
                  to="/home"
                  label="HOME"
                  active={isActiveLink("/")}
                />

                <DesktopNavLink
                  to="/about"
                  label="ABOUT US"
                  active={isActiveLink("/about")}
                />

                <div
                  className="relative"
                  onMouseEnter={() => setDesktopServicesOpen(true)}
                  onMouseLeave={() => setDesktopServicesOpen(false)}
                >
                  <Link
                    to="/services"
                    onFocus={() => setDesktopServicesOpen(true)}
                    className={`group relative flex items-center gap-1.5 rounded-full px-4 py-3 text-sm font-black tracking-wide transition duration-300 ${
                      servicesActive
                        ? "text-green-700"
                        : "text-[#102e30] hover:text-green-700"
                    }`}
                  >
                    SERVICES

                    <FaChevronDown
                      className={`text-[10px] transition-transform duration-300 ${
                        desktopServicesOpen ? "rotate-180" : ""
                      }`}
                    />

                    <span
                      className={`absolute bottom-1 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-green-600 transition-all duration-300 ${
                        servicesActive || desktopServicesOpen
                          ? "w-8"
                          : "w-0 group-hover:w-8"
                      }`}
                    />
                  </Link>

                  <AnimatePresence>
                    {desktopServicesOpen && (
                      <motion.div
                        variants={menuAnimation}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute right-[-320px] top-full z-[1200] pt-4"
                      >
                        <div className="relative grid w-[1000px]  max-w-[92vw] grid-cols-[1fr_1fr_0.8fr] gap-7 overflow-hidden rounded-[28px] border border-white/60 bg-white/95 p-7 shadow-[0_30px_90px_rgba(6,59,63,0.22)] backdrop-blur-2xl">
                          <div className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full bg-green-200/50 blur-[80px]" />

                          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-emerald-100/60 blur-[70px]" />

                          <div className="relative">
                            <div className="mb-5 flex items-center gap-3">
                              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                                <FaShieldAlt size={19} />
                              </span>

                              <div>
                                <h3 className="font-black text-[#063b3f]">
                                  Home Services
                                </h3>

                                <p className="text-xs text-gray-500">
                                  Residential pest protection
                                </p>
                              </div>
                            </div>

                            <ul className="space-y-1.5">
                              {homeServices.map((item) => (
                                <li key={item.link}>
                                  <MegaMenuLink item={item} />
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="relative">
                            <div className="mb-5 flex items-center gap-3">
                              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                                <FaBuilding size={19} />
                              </span>

                              <div>
                                <h3 className="font-black text-[#063b3f]">
                                  Commercial Services
                                </h3>

                                <p className="text-xs text-gray-500">
                                  Business and industrial solutions
                                </p>
                              </div>
                            </div>

                            <ul className="space-y-1.5">
                              {commercialServices.map((item) => (
                                <li key={item.link}>
                                  <MegaMenuLink item={item} />
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="relative">
                            <div className="mb-5 flex items-center gap-3">
                              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                                <FaSprayCan size={19} />
                              </span>

                              <div>
                                <h3 className="font-black text-[#063b3f]">
                                  Sanitization
                                </h3>

                                <p className="text-xs text-gray-500">
                                  Hygiene and disinfection
                                </p>
                              </div>
                            </div>

                            <MegaMenuLink
                              item={{
                                name: "Disinfection Services",
                                link: "/disinfection-services",
                              }}
                            />

                            <div className="mt-5 overflow-hidden rounded-[22px] bg-gradient-to-br from-[#063b3f] to-green-700 p-5 text-white shadow-xl">
                              <span className="inline-flex rounded-full bg-green-400 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#063b3f]">
                                Need Assistance?
                              </span>

                              <h4 className="mt-3 text-lg font-black">
                                Not sure which treatment you need?
                              </h4>

                              <p className="mt-2 text-xs leading-5 text-green-100">
                                Tell our pest-control experts about your
                                problem.
                              </p>

                              <Link
                                to="/contact"
                                className="navbar-shine mt-4 inline-flex items-center gap-2 rounded-full bg-green-400 px-5 py-3 text-xs font-black text-[#063b3f] transition hover:-translate-y-1 hover:bg-green-300"
                              >
                                Contact Our Team

                                <FaArrowRight size={11} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <DesktopNavLink
                  to="/pest-identification"
                  label="PEST IDENTIFICATION"
                  active={isActiveLink("/pest-identification")}
                />

                <DesktopNavLink
                  to="/blogs"
                  label="BLOG"
                  active={location.pathname.startsWith("/blogs")}
                />

                <DesktopNavLink
                  to="/contact"
                  label="CONTACT"
                  active={isActiveLink("/contact")}
                />
              </nav>

              <motion.button
                type="button"
                onClick={() => {
                  setOpen((current) => !current);
                }}
                whileTap={{
                  scale: 0.9,
                }}
                aria-label={
                  open ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={open}
                className={`relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border text-lg shadow-lg transition duration-300 xl:hidden ${
                  open
                    ? "border-green-600 bg-green-600 text-white"
                    : scrolled
                      ? "border-green-100 bg-white/90 text-[#063b3f]"
                      : "border-white/50 bg-white/70 text-[#063b3f] backdrop-blur-xl"
                }`}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={open ? "close" : "menu"}
                    initial={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.7,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    {open ? <FaTimes /> : <FaBars />}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* MOBILE NAVIGATION MENU */}

        <AnimatePresence>
          {open && (
            <>
              <motion.button
                type="button"
                aria-label="Close mobile navigation overlay"
                onClick={closeMobileMenu}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                className="fixed inset-0 top-[70px] z-[900] bg-[#031f21]/45 backdrop-blur-sm xl:hidden"
              />

              <motion.div
                variants={mobileMenuAnimation}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute left-3 right-3 top-full z-[1100] mt-2 max-h-[calc(100vh-100px)] overflow-y-auto rounded-[26px] border border-white/60 bg-white/95 p-4 shadow-[0_30px_90px_rgba(6,59,63,0.3)] backdrop-blur-2xl sm:left-auto sm:right-5 sm:w-[430px] xl:hidden"
              >
                <div className="mb-3 flex items-center justify-between rounded-2xl bg-green-50 p-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={logo}
                      alt="Acuity Pest Controls"
                      className="h-11 w-auto object-contain"
                    />

                    <div>
                      <p className="text-xs font-black text-[#063b3f]">
                        Acuity Pest Controls
                      </p>

                      <p className="mt-0.5 text-[10px] text-gray-500">
                        Professional pest solutions
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={closeMobileMenu}
                    aria-label="Close mobile menu"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#063b3f] shadow-sm"
                  >
                    <FaTimes />
                  </button>
                </div>

                <div className="space-y-1">
                  <MobileNavLink
                    to="/"
                    label="HOME"
                    active={isActiveLink("/")}
                    onClick={closeMobileMenu}
                  />

                  <MobileNavLink
                    to="/about"
                    label="ABOUT US"
                    active={isActiveLink("/about")}
                    onClick={closeMobileMenu}
                  />

                  <div className="overflow-hidden rounded-2xl">
                    <button
                      type="button"
                      onClick={() => {
                        setServicesOpen((current) => !current);
                      }}
                      aria-expanded={servicesOpen}
                      className={`flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-black transition ${
                        servicesOpen || servicesActive
                          ? "bg-green-50 text-green-700"
                          : "text-[#183638] hover:bg-gray-50"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-green-100 text-green-700">
                          <FaSprayCan size={13} />
                        </span>

                        SERVICES
                      </span>

                      <FaChevronDown
                        size={12}
                        className={`transition-transform duration-300 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {servicesOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                          className="overflow-hidden"
                        >
                          <div className="ml-4 mt-2 border-l-2 border-green-100 pb-3 pl-4">
                            <Link
                              to="/services"
                              onClick={closeMobileMenu}
                              className="mb-3 flex items-center justify-between rounded-xl bg-[#063b3f] px-4 py-3 text-xs font-black text-white"
                            >
                              View All Services

                              <FaArrowRight size={11} />
                            </Link>

                            <p className="mb-2 mt-4 text-[10px] font-black uppercase tracking-[1.5px] text-green-700">
                              Home Services
                            </p>

                            <div className="space-y-1">
                              {homeServices.map((item) => (
                                <Link
                                  key={item.link}
                                  to={item.link}
                                  onClick={closeMobileMenu}
                                  className="block rounded-xl px-3 py-2.5 text-xs font-semibold text-gray-600 transition hover:bg-green-50 hover:text-green-700"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>

                            <p className="mb-2 mt-5 text-[10px] font-black uppercase tracking-[1.5px] text-green-700">
                              Commercial Services
                            </p>

                            <div className="space-y-1">
                              {commercialServices.map((item) => (
                                <Link
                                  key={item.link}
                                  to={item.link}
                                  onClick={closeMobileMenu}
                                  className="block rounded-xl px-3 py-2.5 text-xs font-semibold text-gray-600 transition hover:bg-green-50 hover:text-green-700"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>

                            <p className="mb-2 mt-5 text-[10px] font-black uppercase tracking-[1.5px] text-green-700">
                              Sanitization
                            </p>

                            <Link
                              to="/disinfection-services"
                              onClick={closeMobileMenu}
                              className="block rounded-xl px-3 py-2.5 text-xs font-semibold text-gray-600 transition hover:bg-green-50 hover:text-green-700"
                            >
                              Disinfection Services
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <MobileNavLink
                    to="/pest-identification"
                    label="PEST IDENTIFICATION"
                    active={isActiveLink("/pest-identification")}
                    onClick={closeMobileMenu}
                  />

                  <MobileNavLink
                    to="/blogs"
                    label="BLOG"
                    active={location.pathname.startsWith("/blogs")}
                    onClick={closeMobileMenu}
                  />

                  <MobileNavLink
                    to="/contact"
                    label="CONTACT"
                    active={isActiveLink("/contact")}
                    onClick={closeMobileMenu}
                  />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <a
                    href="tel:+919941229005"
                    className="flex items-center justify-center gap-2 rounded-2xl bg-[#063b3f] py-3.5 text-sm font-black text-white shadow-lg transition active:scale-95"
                  >
                    <FaPhoneAlt size={14} />

                    Call Now
                  </a>

                  <a
                    href="https://wa.me/919941229005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navbar-whatsapp-pulse flex items-center justify-center gap-2 rounded-2xl bg-green-600 py-3.5 text-sm font-black text-white shadow-lg transition active:scale-95"
                  >
                    <FaWhatsapp size={17} />

                    WhatsApp
                  </a>
                </div>

                <a
                  href="mailto:info@acuitypestcontrols.in"
                  className="mt-3 flex items-center justify-center gap-2 rounded-2xl border border-green-100 bg-green-50 py-3 text-xs font-bold text-green-700"
                >
                  <FaEnvelope />

                  info@acuitypestcontrols.in
                </a>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

/* =========================================================
   DESKTOP NAVIGATION LINK
========================================================= */

const DesktopNavLink = ({ to, label, active }) => {
  return (
    <Link
      to={to}
      className={`group relative rounded-full px-4 py-3 text-sm font-black tracking-wide transition duration-300 ${
        active ? "text-green-700" : "text-[#102e30] hover:text-green-700"
      }`}
    >
      {label}

      <span
        className={`absolute bottom-1 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-green-600 transition-all duration-300 ${
          active ? "w-8" : "w-0 group-hover:w-8"
        }`}
      />

      {active && (
        <motion.span
          layoutId="activeDesktopNav"
          className="absolute inset-x-2 inset-y-1 -z-10 rounded-full bg-green-50"
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 30,
          }}
        />
      )}
    </Link>
  );
};

/* =========================================================
   MEGA MENU LINK
========================================================= */

const MegaMenuLink = ({ item }) => {
  return (
    <Link
      to={item.link}
      className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-gray-600 transition duration-200 hover:translate-x-1 hover:bg-green-50 hover:text-green-700"
    >
      <span>{item.name}</span>

      <FaArrowRight
        size={10}
        className="shrink-0 -translate-x-2 opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100"
      />
    </Link>
  );
};

/* =========================================================
   MOBILE NAVIGATION LINK
========================================================= */

const MobileNavLink = ({ to, label, active, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-black transition ${
        active
          ? "bg-green-50 text-green-700"
          : "text-[#183638] hover:bg-gray-50"
      }`}
    >
      <span>{label}</span>

      <span
        className={`h-2 w-2 rounded-full transition ${
          active ? "bg-green-600" : "bg-transparent"
        }`}
      />
    </Link>
  );
};

export default Navbar;