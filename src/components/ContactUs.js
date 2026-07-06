import React, { useState } from "react";
import SEO from "./seo/seo";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import bannerImage from "../images/contact us .jpg";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://acuitypestcontrols.com/contact#contactpage",
  name: "Contact Acuity Pest Control",
  url: "https://acuitypestcontrols.com/contact",
  description:
    "Contact Acuity Pest Control for professional pest control services in Bangalore for homes, apartments, offices and commercial properties.",
  mainEntity: {
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://acuitypestcontrols.com/#business",
    name: "Acuity Pest Control",
    url: "https://acuitypestcontrols.com/",
    telephone: "+91 9941229005",
    email: "info@acuitypestcontrols.com",
    priceRange: "$$",
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
      name: "Bangalore",
    },
    openingHours: "Mo-Su 00:00-23:59",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 9941229005",
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["English", "Kannada", "Hindi"],
    },
  },
};

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();

    const message = `*New Contact Enquiry*

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Service: ${form.service}
Message: ${form.message}

Please contact me.`;

    window.open(
      `https://wa.me/919941229005?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div className="w-full bg-white overflow-hidden">
      <SEO
        title="Contact Acuity Pest Control | Pest Control Service in Bangalore"
        description="Contact Acuity Pest Control for professional pest control services in Bangalore. Call or WhatsApp for cockroach, termite, bed bug, mosquito and rodent control service."
        keywords="contact Acuity Pest Control, pest control contact Bangalore, pest control service Bangalore phone number, pest control near me Bangalore, pest control WhatsApp Bangalore"
        canonical="https://acuitypestcontrols.com/contact"
        image="https://acuitypestcontrols.com/logo.png"
        schema={contactSchema}
      />

      {/* HERO */}
      <section className="relative h-[55vh] md:h-[100vh]">
        <img
          src={bannerImage}
          alt="Contact Acuity Pest Control for pest control services in Bangalore"
          className="absolute inset-0 w-full h-full "
        />

        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* CONTACT CARDS */}
      <section className="py-14 bg-[#f8fcfb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <FaPhoneAlt />,
              title: "Call Us",
              text: "+91 99412 29005",
              link: "tel:+919941229005",
            },
            {
              icon: <FaWhatsapp />,
              title: "WhatsApp",
              text: "Chat With Us",
              link: "https://wa.me/919941229005",
            },
            {
              icon: <FaEnvelope />,
              title: "Email",
              text: "info@acuitypestcontrols.com",
              link: "mailto:info@acuitypestcontrols.com",
            },
            {
              icon: <FaClock />,
              title: "Support",
              text: "All Days Available",
              link: "tel:+919941229005",
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.link}
              target={item.link.includes("wa.me") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="bg-white rounded-3xl p-6 shadow-md border border-green-100 text-center hover:-translate-y-2 hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-green-600 text-white flex items-center justify-center text-4xl mb-4">
                {item.icon}
              </div>

              <h2 className="text-xl font-black text-[#063b3f] mb-2">
                {item.title}
              </h2>

              <p className="text-gray-600 font-semibold">{item.text}</p>
            </a>
          ))}
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10">
          {/* FORM */}
          <div className="bg-[#f8fcfb] rounded-[35px] p-6 sm:p-8 shadow-xl border border-green-100">
            <h1 className="text-3xl md:text-5xl font-black text-[#063b3f] mb-4">
              Contact Acuity Pest Control
            </h1>

            <p className="text-gray-600 mb-8 leading-7">
              Book pest control service in Bangalore for cockroach control,
              termite treatment, bed bug treatment, mosquito control, rodent
              control and commercial pest management.
            </p>

            <form onSubmit={sendWhatsApp} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full p-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select Service</option>
                <option>Cockroach Control</option>
                <option>Termite Control</option>
                <option>Bed Bug Treatment</option>
                <option>Rodent Control</option>
                <option>Mosquito Control</option>
                <option>Ant Control</option>
                <option>Lizard Control</option>
                <option>Commercial Pest Control</option>
                <option>Disinfection Services</option>
              </select>

              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-black shadow-lg shadow-green-600/30 transition"
              >
                Send Enquiry on WhatsApp
              </button>
            </form>
          </div>

          {/* MAP + ADDRESS */}
          <div className="space-y-6">
            <div className="bg-[#063b3f] text-white rounded-[35px] p-8 shadow-xl">
              <h2 className="text-3xl font-black mb-5">Visit / Contact Us</h2>

              <a
                href="https://maps.app.goo.gl/N5GeNpCZJMbavHHe7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 text-gray-200 leading-7"
              >
                <FaMapMarkerAlt className="text-green-400 text-4xl shrink-0 mt-1" />
                1st Floor, KVO-08, No-28/2, near Sun Jupiter School, JP Nagar
                6th Phase, Yelachenahalli, Kumaraswamy Layout, Bengaluru,
                Karnataka 560078
              </a>

              <div className="mt-6 space-y-4">
                <a
                  href="tel:+919941229005"
                  className="flex items-center gap-3 text-gray-200 hover:text-green-300"
                >
                  <FaPhoneAlt className="text-green-400" />
                  +91 99412 29005
                </a>

                <a
                  href="mailto:info@acuitypestcontrols.com"
                  className="flex items-center gap-3 text-gray-200 hover:text-green-300"
                >
                  <FaEnvelope className="text-green-400" />
                  info@acuitypestcontrols.com
                </a>
              </div>
            </div>

            <div className="rounded-[35px] overflow-hidden shadow-2xl border border-green-100 h-[420px]">
              <iframe
                title="Acuity Pest Control Bangalore location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486.1445905549312!2d77.57224152635192!3d12.897642037032702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15812f498439%3A0x50b67493a003f061!2sAcuity%20Pest%20Control%20-%20Best%20Pest%20Control%20Services!5e0!3m2!1sen!2sin!4v1782902754541!5m2!1sen!2sin"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 bg-[#eef8f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-[#063b3f] mb-8">
            Pest Control Service Areas Across Bangalore
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "JP Nagar",
              "Jayanagar",
              "BTM Layout",
              "HSR Layout",
              "Koramangala",
              "Whitefield",
              "Electronic City",
              "Marathahalli",
              "Hebbal",
              "Indiranagar",
              "Banashankari",
              "Sarjapur Road",
            ].map((area) => (
              <span
                key={area}
                className="bg-white border border-green-100 px-5 py-3 rounded-full font-bold text-[#063b3f]"
              >
                Pest Control in {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#063b3f] text-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-5xl font-black mb-5">
            Need Immediate Pest Control Support?
          </h2>

          <p className="text-gray-200 mb-8">
            Contact Acuity Pest Control for safe, professional and affordable
            pest control services in Bangalore.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+919941229005"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Controls,%20I%20need%20pest%20control%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#063b3f] px-8 py-4 rounded-2xl font-bold"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
