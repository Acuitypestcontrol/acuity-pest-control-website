import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaChevronDown,
  FaShieldAlt,
  FaBuilding,
  FaSprayCan,
  FaLocationArrow,
} from "react-icons/fa";

import logo from "../images/acuitylogo1.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      link: "/post-construction-termite",
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

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-transparent">
      {/* ================= TOP BAR ================= */}

      <div
        className={`text-white transition-all duration-300 ${
          scrolled
            ? "bg-[#063b3f]/35 backdrop-blur-md shadow-sm"
            : "bg-[#063b3f]/70 backdrop-blur-sm"
        }`}
      >
        {/* Desktop top bar */}

        <div className="hidden md:flex max-w-7xl mx-auto px-4 py-2 items-center justify-between gap-4 text-sm">
          <a
            href="https://maps.app.goo.gl/N5GeNpCZJMbavHHe7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-0 items-center gap-2 hover:text-green-300 transition"
          >
            <FaLocationArrow className="shrink-0" />

            <span className="truncate">
              JP Nagar 6th Phase, Yelachenahalli, Bengaluru - 560078
            </span>
          </a>

          <div className="flex shrink-0 items-center gap-4">
            <Link
              to=""
              className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded-full font-semibold transition"
            >
              🏅 ISO 9001:2015 - (305024122052Q)
            </Link>

            <a
              href="mailto:info@acuitygroups.in"
              className="flex items-center gap-2 hover:text-green-300 transition"
            >
              <FaEnvelope />

              <span className="hidden lg:inline">info@acuitygroups.in</span>
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-5">
            <a
              href="tel:+919941229005"
              className="flex items-center gap-2 hover:text-green-300 transition"
            >
              <FaPhoneAlt />
              +91 99412 29005
            </a>

            <a
              href="https://wa.me/919941229005"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-300 transition"
            >
              <FaWhatsapp className="text-green-400" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Compact mobile top bar */}

        <div className="grid grid-cols-3 md:hidden px-2 py-1.5 text-[11px] sm:text-xs font-semibold">
          <a
            href="tel:+919941229005"
            className="flex items-center justify-center gap-1.5"
          >
            <FaPhoneAlt className="shrink-0" />
            Call
          </a>

          <a
            href="mailto:info@acuitygroups.in"
            className="flex items-center justify-center gap-1.5"
          >
            <FaEnvelope className="shrink-0" />
            Email
          </a>

          <a
            href="https://wa.me/919941229005"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5"
          >
            <FaWhatsapp className="shrink-0 text-green-400" />
            WhatsApp
          </a>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}

      <div
        className={`w-full border-b transition-all duration-300 ${
          scrolled
            ? "bg-white/55 backdrop-blur-md border-white/40 shadow-sm"
            : "bg-white/30 backdrop-blur-sm border-white/20 shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="flex min-h-[62px] md:min-h-0 items-center justify-between bg-transparent px-2 sm:px-4 py-1 md:py-0">
            {/* Logo */}

            <Link
              to="/"
              onClick={closeMobileMenu}
              className="flex shrink-0 items-center"
            >
              <img
                src={logo}
                alt="Acuity Pest Controls"
                className={`h-12 sm:h-14 md:h-28 w-auto object-contain transition-all duration-300 ${
                  scrolled ? "scale-95" : "scale-100"
                }`}
              />
            </Link>

            {/* ================= DESKTOP NAVIGATION ================= */}

            <nav className="hidden xl:flex items-center gap-6 font-semibold text-black text-md">
              <Link to="/" className="hover:text-blue-900 transition">
                HOME
              </Link>

              <Link to="/aboutus" className="hover:text-blue-900 transition">
                ABOUT US
              </Link>

              <div className="relative group py-6">
                <Link
                  to="/services"
                  className="flex items-center gap-1 hover:text-blue-900 transition"
                >
                  SERVICES
                  <FaChevronDown className="text-xs group-hover:rotate-180 transition-transform duration-300" />
                </Link>

                {/* Services mega menu */}

                <div className="absolute left-1/2 top-full grid w-[980px] max-w-[90vw] -translate-x-1/2 translate-y-2 grid-cols-3 gap-10 rounded-2xl border border-gray-100 bg-white p-8 opacity-0 invisible shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {/* Home services */}

                  <div>
                    <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#063b3f]">
                      <FaShieldAlt className="text-blue-900" />
                      HOME SERVICES
                    </h3>

                    <ul className="max-h-60 space-y-2 overflow-y-auto pr-2">
                      {homeServices.map((item) => (
                        <li key={item.link}>
                          <Link
                            to={item.link}
                            className="block text-sm text-gray-600 transition hover:text-blue-900"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Commercial services */}

                  <div>
                    <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#063b3f]">
                      <FaBuilding className="text-blue-900" />
                      COMMERCIAL SERVICES
                    </h3>

                    <ul className="max-h-60 space-y-2 overflow-y-auto pr-2">
                      {commercialServices.map((item) => (
                        <li key={item.link}>
                          <Link
                            to={item.link}
                            className="block text-sm text-gray-600 transition hover:text-blue-900"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Sanitization */}

                  <div>
                    <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#063b3f]">
                      <FaSprayCan className="text-blue-900" />
                      SANITIZATION
                    </h3>

                    <Link
                      to="/disinfection-services"
                      className="block text-sm text-gray-600 hover:text-blue-900"
                    >
                      Disinfection Services
                    </Link>

                    <div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-5">
                      <h4 className="mb-1 font-bold text-[#063b3f]">
                        Need help choosing?
                      </h4>

                      <p className="mb-4 text-sm text-gray-600">
                        Our experts are here to guide you.
                      </p>

                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-5 py-3 font-bold text-white transition hover:bg-green-700"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/pestidentification"
                className="hover:text-blue-900 transition"
              >
                PEST IDENTIFICATION
              </Link>

              <Link
                to="/blogsmainpage"
                className="hover:text-blue-900 transition"
              >
                BLOG
              </Link>

              <Link to="/contactus" className="hover:text-blue-900 transition">
                CONTACT
              </Link>
            </nav>

            {/* Compact mobile toggle */}

            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              className={`xl:hidden flex h-10 w-10 items-center justify-center rounded-lg text-xl transition-all duration-300 ${
                scrolled
                  ? "bg-white/30 text-black border border-white/40"
                  : "bg-white/20 text-black border border-white/30"
              }`}
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`xl:hidden mx-3 sm:mx-4 mt-1 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          open
            ? "max-h-[82vh] opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="max-h-[82vh] space-y-3 overflow-y-auto px-5 py-4">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="block border-b border-gray-100 py-3 font-bold"
          >
            HOME
          </Link>

          <Link
            to="/aboutus"
            onClick={closeMobileMenu}
            className="block border-b border-gray-100 py-3 font-bold"
          >
            ABOUT US
          </Link>

          <div>
            <button
              type="button"
              onClick={() => setServicesOpen((current) => !current)}
              className="flex w-full items-center justify-between border-b border-gray-100 py-3 font-bold"
              aria-expanded={servicesOpen}
            >
              <span>SERVICES</span>

              <FaChevronDown
                className={`transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                servicesOpen
                  ? "max-h-[1200px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-3 space-y-2 pl-3 text-sm">
                <Link
                  to="/services"
                  onClick={closeMobileMenu}
                  className="mb-3 block font-bold text-green-700"
                >
                  View All Services
                </Link>

                <p className="font-semibold text-[#063b3f]">Home Services</p>

                {homeServices.map((item) => (
                  <Link
                    key={item.link}
                    to={item.link}
                    onClick={closeMobileMenu}
                    className="block py-1 text-gray-600 hover:text-blue-900"
                  >
                    {item.name}
                  </Link>
                ))}

                <p className="mt-4 font-semibold text-[#063b3f]">
                  Commercial Services
                </p>

                {commercialServices.map((item) => (
                  <Link
                    key={item.link}
                    to={item.link}
                    onClick={closeMobileMenu}
                    className="block py-1 text-gray-600 hover:text-blue-900"
                  >
                    {item.name}
                  </Link>
                ))}

                <p className="mt-4 font-semibold text-[#063b3f]">
                  Sanitization
                </p>

                <Link
                  to="/disinfection-services"
                  onClick={closeMobileMenu}
                  className="block py-1 text-gray-600 hover:text-blue-900"
                >
                  Disinfection Services
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/pestidentification"
            onClick={closeMobileMenu}
            className="block border-b border-gray-100 py-3 font-bold"
          >
            PEST IDENTIFICATION
          </Link>

          <Link
            to="/blogsmainpage"
            onClick={closeMobileMenu}
            className="block border-b border-gray-100 py-3 font-bold"
          >
            BLOG
          </Link>

          <Link
            to="/contactus"
            onClick={closeMobileMenu}
            className="block border-b border-gray-100 py-3 font-bold"
          >
            CONTACT
          </Link>

          <div className="grid grid-cols-2 gap-3 pt-3">
            <a
              href="tel:+919941229005"
              className="rounded-full bg-orange-500 py-3 text-center font-bold text-white"
            >
              Call
            </a>

            <a
              href="https://wa.me/919941229005"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-600 py-3 text-center font-bold text-white"
            >
              WhatsApp
            </a>
          </div>

          <a
            href="mailto:info@acuitygroups.in"
            className="block py-2 text-center font-semibold text-blue-600"
          >
            <FaEnvelope className="mr-2 inline" />
            info@acuitygroups.in
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
