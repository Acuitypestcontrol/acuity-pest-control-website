import React from "react";
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
      <div className="md:max-w-7xl md:mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img
            src={logo}
            alt="Acuity Pest Controls"
            className="h-40 w-auto mb-5"
          />

          <p className="text-gray-300 leading-7">
            Acuity Pest Controls provides professional pest control services in
            Bangalore for homes, apartments, offices and commercial properties.
          </p>

          <div className="flex gap-3 mt-6">
            <a
              href="/https://www.facebook.com/acuity.pest.9/"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="/https://www.instagram.com/acuity_pest_control"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-black mb-5">Quick Links</h3>
          <div className="space-y-3 text-gray-300">
            <a href="/" className="block hover:text-green-400">
              Home
            </a>
            <a href="/aboutus" className="block hover:text-green-400">
              About Us
            </a>
            <a href="/services" className="block hover:text-green-400">
              Services
            </a>
            <a
              href="/pestidentification"
              className="block hover:text-green-400"
            >
              Pest Identification
            </a>
            <a href="/blogsmainpage" className="block hover:text-green-400">
              Blog
            </a>
            <a href="/contactus" className="block hover:text-green-400">
              Contact
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-black mb-5">Our Services</h3>
          <div className="space-y-3 text-gray-300">
            <a
              href="/cockroach-management-service"
              className="block hover:text-green-400"
            >
              Cockroach Control
            </a>
            <a
              href="/anti-termite-treatment"
              className="block hover:text-green-400"
            >
              Termite Control
            </a>
            <a href="/bed-bug-treatment" className="block hover:text-green-400">
              Bed Bug Treatment
            </a>
            <a
              href="/rodent-management-service"
              className="block hover:text-green-400"
            >
              Rodent Control
            </a>
            <a
              href="/mosquito-management-service"
              className="block hover:text-green-400"
            >
              Mosquito Control
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-black mb-5">Contact Us</h3>

          <div className="space-y-4 text-gray-300">
            <a
              href="https://maps.app.goo.gl/N5GeNpCZJMbavHHe7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 hover:text-green-400"
            >
              <FaMapMarkerAlt className="mt-1 text-green-400" />
              <span>
                1st Floor, KVO-08, No-28/2, near Sun Jupiter School, JP Nagar
                6th Phase, Yelachenahalli, Kumaraswamy Layout, Bengaluru,
                Karnataka 560078
              </span>
            </a>

            <a
              href="tel:+919941229005"
              className="flex items-center gap-3 hover:text-green-400"
            >
              <FaPhoneAlt className="text-green-400" />
              +91 99412 29005
            </a>

            <a
              href="https://wa.me/919941229005"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-green-400"
            >
              <FaWhatsapp className="text-green-400" />
              WhatsApp Us
            </a>

            <a
              href="mailto:info@acuitypestcontrols.com"
              className="flex items-center gap-3 hover:text-green-400"
            >
              <FaEnvelope className="text-green-400" />
              info@acuitypestcontrols.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between gap-3 text-gray-400 text-sm">
          <p>© 2026 Acuity Pest Controls. All Rights Reserved.</p>
          <p>Designed for Professional Pest Control Services</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
