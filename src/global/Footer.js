import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

import logo from "../images/acuitylogo1.png";

const Footer = () => {
  return (
    <footer className="bg-[#063b3f] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* COMPANY DETAILS */}
        <div>
          <Link to="/" aria-label="Acuity Pest Controls Home">
            <img
              src={logo}
              alt="Acuity Pest Controls"
              className="h-40 w-auto mb-5"
            />
          </Link>

          <p className="text-gray-300 leading-7">
            Acuity Pest Controls provides professional pest control services in
            Bangalore for homes, apartments, offices and commercial properties.
          </p>

          <div className="flex gap-3 mt-6">
            <a
              href="https://www.facebook.com/acuity.pest.9/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acuity Pest Controls Facebook"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/acuity_pest_control/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acuity Pest Controls Instagram"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-black mb-5">Quick Links</h3>

          <div className="space-y-3 text-gray-300">
            <Link to="/" className="block hover:text-green-400 transition">
              Home
            </Link>

            <Link to="/about" className="block hover:text-green-400 transition">
              About Us
            </Link>

            <Link
              to="/services"
              className="block hover:text-green-400 transition"
            >
              Services
            </Link>

            <Link
              to="/pest-identification"
              className="block hover:text-green-400 transition"
            >
              Pest Identification
            </Link>

            <Link to="/blogs" className="block hover:text-green-400 transition">
              Blogs
            </Link>

            <Link
              to="/contact"
              className="block hover:text-green-400 transition"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-xl font-black mb-5">Our Services</h3>

          <div className="space-y-3 text-gray-300">
            <Link
              to="/cockroach-management-service"
              className="block hover:text-green-400 transition"
            >
              Cockroach Control
            </Link>

            <Link
              to="/anti-termite-treatment"
              className="block hover:text-green-400 transition"
            >
              Termite Control
            </Link>

            <Link
              to="/bed-bug-treatment"
              className="block hover:text-green-400 transition"
            >
              Bed Bug Treatment
            </Link>

            <Link
              to="/rodent-management-service"
              className="block hover:text-green-400 transition"
            >
              Rodent Control
            </Link>

            <Link
              to="/mosquito-management-service"
              className="block hover:text-green-400 transition"
            >
              Mosquito Control
            </Link>

            <Link
              to="/wood-borer-treatment"
              className="block hover:text-green-400 transition"
            >
              Wood Borer Treatment
            </Link>

            <Link
              to="/disinfection-services"
              className="block hover:text-green-400 transition"
            >
              Disinfection Services
            </Link>
          </div>
        </div>

        {/* CONTACT DETAILS */}
        <div>
          <h3 className="text-xl font-black mb-5">Contact Us</h3>

          <div className="space-y-4 text-gray-300">
            <a
              href="https://maps.app.goo.gl/N5GeNpCZJMbavHHe7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 hover:text-green-400 transition"
            >
              <FaMapMarkerAlt className="mt-1 text-green-400 shrink-0" />

              <span>
                1st Floor, KVO-08, No-28/2, near Sun Jupiter School, JP Nagar
                6th Phase, Yelachenahalli, Kumaraswamy Layout, Bengaluru,
                Karnataka 560078
              </span>
            </a>

            <a
              href="tel:+919941229005"
              className="flex items-center gap-3 hover:text-green-400 transition"
            >
              <FaPhoneAlt className="text-green-400 shrink-0" />
              <span>+91 99412 29005</span>
            </a>

            <a
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Controls,%20I%20need%20pest%20control%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-green-400 transition"
            >
              <FaWhatsapp className="text-green-400 shrink-0" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href="mailto:info@acuitypestcontrols.in"
              className="flex items-center gap-3 hover:text-green-400 transition"
            >
              <FaEnvelope className="text-green-400 shrink-0" />
              <span className="break-all">info@acuitypestcontrols.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between gap-3 text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Acuity Pest Controls. All Rights
            Reserved.
          </p>

          <p>Professional Pest Control Services in Bangalore</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
