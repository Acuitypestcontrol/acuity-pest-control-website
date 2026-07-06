import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaWhatsapp,
  FaChevronDown,
  FaShieldAlt,
  FaBuilding,
  FaSprayCan,
  FaEnvelope,
  FaLocationArrow,
  FaGlobe,
} from "react-icons/fa";
import logo from "../images/acuitylogo1.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      {/* TOP BAR */}
      <div className="bg-[#063b3f] text-white">
        {/* Desktop top bar */}
        <div className="hidden md:flex max-w-7xl mx-auto px-4 py-2 items-center justify-between gap-6 text-sm">
          <a
            href="https://maps.app.goo.gl/N5GeNpCZJMbavHHe7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-200 min-w-0"
          >
            <FaLocationArrow className="text-white flex-shrink-0" />
            <span className="truncate">
              JP Nagar 6th Phase, Yelachenahalli, Bengaluru - 560078
            </span>
          </a>

          <a
            href="tel:+919941229005"
            className="flex items-center gap-2 hover:text-blue-200 whitespace-nowrap"
          >
            <FaPhoneAlt className="text-white" />
            +91 99412 29005
          </a>

          <a
            href="mailto:info@acuitypestcontrols.com"
            className="flex items-center gap-2 hover:text-blue-200 whitespace-nowrap"
          >
            <FaEnvelope className="text-white" />
            info@acuitypestcontrols.com
          </a>
        </div>

        {/* Mobile top bar */}
        <div className="md:hidden grid grid-cols-3 text-xs">
          <a
            href="tel:+919941229005"
            className="py-2.5 flex flex-col items-center justify-center border-r border-white/20"
          >
            <FaPhoneAlt className="text-base mb-1 text-white" />
            <span>Call</span>
          </a>

          <a
            href="https://wa.me/919941229005"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 flex flex-col items-center justify-center border-r border-white/20"
          >
            <FaWhatsapp className="text-base mb-1 text-white" />
            <span>WhatsApp</span>
          </a>

          <a
            href="https://www.acuitypestcontrols.com"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 flex flex-col items-center justify-center"
          >
            <FaGlobe className="text-base mb-1 text-white" />
            <span>Website</span>
          </a>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="mt-3 px-4  flex items-center justify-between bg-white/25 rounded-2xl shadow-md">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={logo}
              alt="Acuity Pest Controls"
              className="h-20 md:h-28 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 font-semibold text-black text-md">
            <Link to="/" className="hover:text-blue-900 transition">
              HOME
            </Link>

            <div className="relative group py-6">
              <Link
                to="/services"
                className="flex items-center gap-1 hover:text-blue-900 transition"
              >
                SERVICES
                <FaChevronDown className="text-xs group-hover:rotate-180 transition-transform duration-300" />
              </Link>

              <div className="absolute left-1/2 -translate-x-1/2 top-full w-[980px] max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-8 grid grid-cols-3 gap-10">
                <div>
                  <h3 className="text-lg font-bold text-[#063b3f] mb-4 flex items-center gap-2">
                    <FaShieldAlt className="text-blue-900" /> HOME SERVICES
                  </h3>
                  <ul className="space-y-2 max-h-60 overflow-y-auto pr-2">
                    {homeServices.map((item) => (
                      <li key={item.link}>
                        <Link
                          to={item.link}
                          className="block text-gray-600 hover:text-blue-900 transition text-sm"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#063b3f] mb-4 flex items-center gap-2">
                    <FaBuilding className="text-blue-900" /> COMMERCIAL SERVICES
                  </h3>
                  <ul className="space-y-2 max-h-60 overflow-y-auto pr-2">
                    {commercialServices.map((item) => (
                      <li key={item.link}>
                        <Link
                          to={item.link}
                          className="block text-gray-600 hover:text-blue-900 transition text-sm"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#063b3f] mb-4 flex items-center gap-2">
                    <FaSprayCan className="text-blue-900" /> SANITIZATION
                  </h3>

                  <Link
                    to="/disinfection-services"
                    className="block text-gray-600 hover:text-blue-900 text-sm"
                  >
                    Disinfection Services
                  </Link>

                  <div className="mt-6 bg-green-50 rounded-2xl p-5 border border-green-100">
                    <h4 className="font-bold text-[#063b3f] mb-1">
                      Need help choosing?
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Our experts are here to guide you.
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-blue-900 hover:bg-green-700 text-white px-5 py-3 rounded-full font-bold transition"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/aboutus" className="hover:text-blue-900 transition">
              ABOUT US
            </Link>

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

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center gap-3">
            <a
              href="tel:+919941229005"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-full font-bold flex items-center gap-2 text-sm"
            >
              <FaPhoneAlt /> Call
            </a>

            <a
              href="https://wa.me/919941229005"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 hover:bg-green-700 text-white px-5 py-3 rounded-full font-bold flex items-center gap-2 text-sm"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden text-2xl text-black bg-white/10 p-2 rounded-lg"
            aria-label="Toggle navigation"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`xl:hidden mx-4 mt-3 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          open ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-5 space-y-3 overflow-y-auto max-h-[85vh]">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block py-3 font-bold border-b border-gray-100"
          >
            HOME
          </Link>

          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full py-3 font-bold border-b border-gray-100"
            >
              <span>SERVICES</span>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="pl-3 mt-3 space-y-2 text-sm">
                <Link
                  to="/services"
                  onClick={() => setOpen(false)}
                  className="block font-bold text-green-700 mb-3"
                >
                  View All Services
                </Link>

                <p className="font-semibold text-[#063b3f]">Home Services</p>
                {homeServices.map((item) => (
                  <Link
                    key={item.link}
                    to={item.link}
                    onClick={() => setOpen(false)}
                    className="block text-gray-600 hover:text-blue-900 py-1"
                  >
                    {item.name}
                  </Link>
                ))}

                <p className="font-semibold text-[#063b3f] mt-4">
                  Commercial Services
                </p>
                {commercialServices.map((item) => (
                  <Link
                    key={item.link}
                    to={item.link}
                    onClick={() => setOpen(false)}
                    className="block text-gray-600 hover:text-blue-900 py-1"
                  >
                    {item.name}
                  </Link>
                ))}

                <p className="font-semibold text-[#063b3f] mt-4">
                  Sanitization
                </p>
                <Link
                  to="/services"
                  onClick={() => setOpen(false)}
                  className="block text-gray-600 hover:text-blue-900 py-1"
                >
                  Disinfection Services
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="block py-3 font-bold border-b border-gray-100"
          >
            ABOUT US
          </Link>

          <Link
            to="/pest-identification"
            onClick={() => setOpen(false)}
            className="block py-3 font-bold border-b border-gray-100"
          >
            PEST IDENTIFICATION
          </Link>

          <Link
            to="/blog"
            onClick={() => setOpen(false)}
            className="block py-3 font-bold border-b border-gray-100"
          >
            BLOG
          </Link>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block py-3 font-bold border-b border-gray-100"
          >
            CONTACT
          </Link>

          <div className="grid grid-cols-2 gap-3 pt-3">
            <a
              href="tel:+919941229005"
              className="bg-orange-500 text-white text-center py-3 rounded-full font-bold"
            >
              Call
            </a>

            <a
              href="https://wa.me/919941229005"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-white text-center py-3 rounded-full font-bold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
