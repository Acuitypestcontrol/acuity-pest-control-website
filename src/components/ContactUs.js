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

const contactSchema = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://www.acuitypestcontrols.com/contact#contactpage",
    name: "Contact Acuity Pest Controls",
    url: "https://www.acuitypestcontrols.com/contact",
    description:
      "Contact Acuity Pest Controls for professional residential and commercial pest control services across Bangalore.",
    inLanguage: "en-IN",
    mainEntity: {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://www.acuitypestcontrols.com/#business",
      name: "Acuity Pest Controls",
      url: "https://www.acuitypestcontrols.com/",
      image: "https://www.acuitypestcontrols.com/logo.png",
      telephone: "+91 9941229005",
      email: "info@acuitypestcontrols.in",
      priceRange: "₹₹",
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
          opens: "00:00",
          closes: "23:59",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91 9941229005",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Kannada", "Hindi"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91 9941229005",
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: ["English", "Kannada", "Hindi"],
        },
      ],
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
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.acuitypestcontrols.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: "https://www.acuitypestcontrols.com/contact",
      },
    ],
  },
];

const serviceOptions = [
  "Cockroach Control",
  "Anti-Termite Treatment",
  "Pre-Construction Termite Treatment",
  "Post-Construction Termite Treatment",
  "Bed Bug Treatment",
  "Rodent Control",
  "Mosquito Control",
  "Ant Control",
  "Wood Borer Treatment",
  "General Pest Control",
  "Office Pest Control",
  "Hotel and Hospital Pest Control",
  "Warehouse Pest Management",
  "Educational Institution Pest Control",
  "Residential Complex Pest Control",
  "Disinfection Services",
];

const serviceAreas = [
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
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  };

  const sendWhatsApp = (event) => {
    event.preventDefault();

    const cleanPhone = form.phone.replace(/\D/g, "");

    if (cleanPhone.length < 10) {
      window.alert("Please enter a valid phone number.");
      return;
    }

    const message = `*New Pest Control Enquiry*

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📧 Email: ${form.email || "Not provided"}
🐜 Service Required: ${form.service}
📝 Message: ${form.message || "Not provided"}

Please contact me regarding pest control service in Bangalore.`;

    window.open(
      `https://wa.me/919941229005?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const contactCards = [
    {
      icon: <FaPhoneAlt aria-hidden="true" />,
      title: "Call Us",
      text: "+91 99412 29005",
      link: "tel:+919941229005",
      external: false,
      ariaLabel: "Call Acuity Pest Controls",
    },
    {
      icon: <FaWhatsapp aria-hidden="true" />,
      title: "WhatsApp",
      text: "Chat With Us",
      link: "https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Controls,%20I%20need%20pest%20control%20service%20in%20Bangalore.",
      external: true,
      ariaLabel: "Chat with Acuity Pest Controls on WhatsApp",
    },
    {
      icon: <FaEnvelope aria-hidden="true" />,
      title: "Email",
      text: "info@acuitypestcontrols.in",
      link: "mailto:info@acuitypestcontrols.in",
      external: false,
      ariaLabel: "Email Acuity Pest Controls",
    },
    {
      icon: <FaClock aria-hidden="true" />,
      title: "Customer Support",
      text: "Available All Days",
      link: "tel:+919941229005",
      external: false,
      ariaLabel: "Contact pest control customer support",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <SEO
        title="Contact Acuity Pest Controls | Pest Control Bangalore"
        description="Contact Acuity Pest Controls in Bangalore. Call or WhatsApp for cockroach, termite, bed bug, rodent, mosquito and commercial pest control services."
        keywords="contact Acuity Pest Controls, pest control contact Bangalore, pest control phone number Bangalore, pest control near me Bangalore, pest control WhatsApp Bangalore"
        canonical="https://www.acuitypestcontrols.com/contact"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={contactSchema}
      />

      {/* HERO BANNER */}
      <section className="relative h-[45vh] overflow-hidden md:h-[65vh]">
        <img
          src={bannerImage}
          alt="Contact Acuity Pest Controls for professional pest control services in Bangalore"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />

        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* CONTACT CARDS */}
      <section className="bg-[#f8fcfb] py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {contactCards.map((item) => (
            <a
              key={item.title}
              href={item.link}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              aria-label={item.ariaLabel}
              className="rounded-3xl border border-green-100 bg-white p-6 text-center shadow-md transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-3xl text-white">
                {item.icon}
              </div>

              <h2 className="mb-2 text-xl font-black text-[#063b3f]">
                {item.title}
              </h2>

              <p className="break-words font-semibold text-gray-600">
                {item.text}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT FORM AND MAP */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          {/* FORM */}
          <div className="rounded-[35px] border border-green-100 bg-[#f8fcfb] p-6 shadow-xl sm:p-8">
            <h1 className="mb-4 text-3xl font-black text-[#063b3f] md:text-5xl">
              Contact Acuity Pest Controls
            </h1>

            <p className="mb-8 leading-7 text-gray-600">
              Book pest control services in Bangalore for cockroaches, termites,
              bed bugs, mosquitoes, rodents, ants and commercial pest
              management.
            </p>

            <form onSubmit={sendWhatsApp} className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-bold text-[#063b3f]"
                >
                  Full Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                  className="w-full rounded-2xl border border-gray-200 bg-white p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-sm font-bold text-[#063b3f]"
                >
                  Phone Number
                </label>

                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  className="w-full rounded-2xl border border-gray-200 bg-white p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-bold text-[#063b3f]"
                >
                  Email Address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className="w-full rounded-2xl border border-gray-200 bg-white p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-service"
                  className="mb-2 block text-sm font-bold text-[#063b3f]"
                >
                  Select Service
                </label>

                <select
                  id="contact-service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-gray-200 bg-white p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Choose a pest control service</option>

                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-bold text-[#063b3f]"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about your pest problem"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full resize-y rounded-2xl border border-gray-200 bg-white p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-green-600 py-4 font-black text-white shadow-lg shadow-green-600/30 transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Send Enquiry on WhatsApp
              </button>
            </form>

            <div className="mt-5 flex flex-wrap gap-3 text-sm text-gray-500">
              <span>✅ Free enquiry</span>
              <span>✅ Quick response</span>
              <span>✅ No spam</span>
            </div>
          </div>

          {/* MAP AND ADDRESS */}
          <div className="space-y-6">
            <div className="rounded-[35px] bg-[#063b3f] p-6 text-white shadow-xl sm:p-8">
              <h2 className="mb-5 text-3xl font-black">
                Visit or Contact Our Office
              </h2>

              <a
                href="https://maps.app.goo.gl/N5GeNpCZJMbavHHe7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Acuity Pest Controls location in Google Maps"
                className="flex gap-4 leading-7 text-gray-200 transition hover:text-green-300"
              >
                <FaMapMarkerAlt
                  className="mt-1 shrink-0 text-3xl text-green-400"
                  aria-hidden="true"
                />

                <span>
                  1st Floor, KVO-08, No-28/2, near Sun Jupiter School, JP Nagar
                  6th Phase, Yelachenahalli, Kumaraswamy Layout, Bengaluru,
                  Karnataka 560078
                </span>
              </a>

              <div className="mt-6 space-y-4">
                <a
                  href="tel:+919941229005"
                  className="flex items-center gap-3 text-gray-200 transition hover:text-green-300"
                >
                  <FaPhoneAlt
                    className="shrink-0 text-green-400"
                    aria-hidden="true"
                  />
                  <span>+91 99412 29005</span>
                </a>

                <a
                  href="mailto:info@acuitypestcontrols.in"
                  className="flex items-center gap-3 break-all text-gray-200 transition hover:text-green-300"
                >
                  <FaEnvelope
                    className="shrink-0 text-green-400"
                    aria-hidden="true"
                  />
                  <span>info@acuitypestcontrols.in</span>
                </a>

                <div className="flex items-center gap-3 text-gray-200">
                  <FaClock
                    className="shrink-0 text-green-400"
                    aria-hidden="true"
                  />
                  <span>Customer support available all days</span>
                </div>
              </div>
            </div>

            <div className="h-[420px] overflow-hidden rounded-[35px] border border-green-100 shadow-2xl">
              <iframe
                title="Acuity Pest Controls office location in Bangalore"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486.1445905549312!2d77.57224152635192!3d12.897642037032702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15812f498439%3A0x50b67493a003f061!2sAcuity%20Pest%20Control%20-%20Best%20Pest%20Control%20Services!5e0!3m2!1sen!2sin!4v1782902754541!5m2!1sen!2sin"
                width="600"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-[#eef8f4] py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <span className="font-bold uppercase tracking-[3px] text-green-700">
            Areas We Serve
          </span>

          <h2 className="mb-5 mt-4 text-3xl font-black text-[#063b3f] md:text-5xl">
            Pest Control Service Areas Across Bangalore
          </h2>

          <p className="mx-auto mb-8 max-w-3xl leading-7 text-gray-600">
            We provide residential and commercial pest control services across
            major areas of Bangalore.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-green-100 bg-white px-5 py-3 font-bold text-[#063b3f]"
              >
                Pest Control in {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#063b3f] py-16 text-center text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="mb-5 text-3xl font-black md:text-5xl">
            Need Immediate Pest Control Support?
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-gray-200">
            Contact Acuity Pest Controls for professional residential and
            commercial pest management services across Bangalore.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+919941229005"
              className="rounded-2xl bg-green-600 px-8 py-4 font-bold transition hover:bg-green-700"
            >
              Call Now: +91 99412 29005
            </a>

            <a
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Controls,%20I%20need%20pest%20control%20service%20in%20Bangalore."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white px-8 py-4 font-bold text-[#063b3f] transition hover:bg-green-50"
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
