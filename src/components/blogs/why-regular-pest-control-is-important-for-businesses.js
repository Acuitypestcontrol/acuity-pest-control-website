import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/Why Regular Pest Control Is Important for Businesses.jpg";

const faqs = [
  {
    q: "How often should businesses do pest control?",
    a: "Most businesses should schedule pest control monthly or quarterly depending on business type, pest activity, food handling, storage areas and hygiene requirements.",
  },
  {
    q: "Why is pest control important for restaurants?",
    a: "Restaurants handle food daily, so regular pest control helps reduce contamination risk, customer complaints, pest sightings and hygiene problems.",
  },
  {
    q: "Is pest control safe for offices?",
    a: "Yes, pest control can be safe for offices when handled by trained technicians using proper treatment methods and safety instructions.",
  },
  {
    q: "Do you provide AMC pest control for businesses?",
    a: "Yes, Acuity Pest Control provides one-time and regular AMC pest control services for businesses across Bangalore.",
  },
];

const businessPestControlSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id":
      "https://acuitypestcontrols.com/blogs/why-regular-pest-control-is-important-for-businesses#blogposting",
    headline: "Why Regular Pest Control Is Important for Businesses",
    description:
      "Learn why regular pest control is important for businesses, offices, restaurants, hotels, warehouses, hospitals, schools and commercial properties in Bangalore.",
    image: "https://acuitypestcontrols.com/logo.png",
    datePublished: "2026-06-26",
    dateModified: "2026-06-26",
    author: {
      "@type": "Organization",
      name: "Acuity Pest Control",
      url: "https://acuitypestcontrols.com/",
    },
    publisher: {
      "@type": "Organization",
      name: "Acuity Pest Control",
      logo: {
        "@type": "ImageObject",
        url: "https://acuitypestcontrols.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://acuitypestcontrols.com/blogs/why-regular-pest-control-is-important-for-businesses",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://acuitypestcontrols.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: "https://acuitypestcontrols.com/blogs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Why Regular Pest Control Is Important for Businesses",
        item: "https://acuitypestcontrols.com/blogs/why-regular-pest-control-important-businesses",
      },
    ],
  },
];

const WhyRegularPestControlImportantBusinesses = () => {
  const risks = [
    "Food contamination and hygiene issues",
    "Damage to stock, documents and property",
    "Bad customer impression",
    "Health risks for employees and visitors",
    "Audit and hygiene compliance issues",
    "Loss of business reputation",
  ];

  const benefits = [
    "Maintains a clean workplace",
    "Protects employees and customers",
    "Prevents pest infestation early",
    "Reduces long-term repair costs",
    "Improves brand image",
    "Supports food safety and hygiene standards",
  ];

  const industries = [
    "Restaurants",
    "Hotels",
    "Hospitals",
    "Offices",
    "Warehouses",
    "Factories",
    "Retail Stores",
    "Schools & Colleges",
  ];

  return (
    <div className="bg-white overflow-hidden">
      <SEO
        title="Why Regular Pest Control Is Important for Businesses | Acuity Pest Control"
        description="Learn why regular pest control is important for businesses, offices, restaurants, hotels, warehouses, hospitals, schools and commercial properties in Bangalore."
        keywords="regular pest control for businesses, commercial pest control Bangalore, AMC pest control Bangalore, office pest control, restaurant pest control, warehouse pest management, Acuity Pest Control"
        canonical="https://acuitypestcontrols.com/blogs/why-regular-pest-control-is-important-for-businesses"
        image="https://acuitypestcontrols.com/logo.png"
        schema={businessPestControlSchema}
      />

      {/* HERO */}
      <section className="relative h-[55vh] md:h-[110vh] flex items-center">
        <img
          src={bannerImage}
          alt="Why regular pest control is important for businesses by Acuity Pest Control"
          className="absolute inset-0 w-full h-full "
        />

        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-[#f8fcfb]">
        <div className="max-w-5xl mx-auto px-4">
          <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
            Commercial Pest Control Bangalore
          </span>

          <h1 className="text-4xl md:text-5xl font-black text-[#063b3f] mt-4 mb-6 leading-tight">
            Why Regular Pest Control Is Important for Businesses
          </h1>

          <p className="text-gray-700 leading-8 mb-5">
            For businesses, pest control is not only about removing insects or
            rodents. It is about maintaining hygiene, protecting customers,
            preventing damage and keeping the workplace safe.
          </p>

          <p className="text-gray-700 leading-8">
            Regular pest control helps identify pest problems early before they
            become serious and costly. For professional support, explore our{" "}
            <Link
              to="/general-pest-control"
              className="text-green-700 font-semibold hover:underline"
            >
              commercial pest control services in Bangalore
            </Link>
            .
          </p>
        </div>
      </section>

      {/* RISKS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-[#063b3f]">
              Risks of Ignoring Pest Control
            </h2>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-7">
              Ignoring pest activity can affect hygiene, stock, customer trust,
              employee safety and overall business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {risks.map((item) => (
              <div
                key={item}
                className="bg-[#f6fffb] rounded-3xl p-6 border border-green-100 shadow-sm"
              >
                <h3 className="font-bold text-[#063b3f]">⚠️ {item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-[#eef8f4]">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-black text-[#063b3f] mb-6">
              Benefits of Regular Pest Control
            </h2>

            <p className="text-gray-700 leading-8">
              Scheduled pest control protects your business from recurring pest
              problems and supports a clean, safe and professional environment.
              It is especially important for food-handling businesses,
              warehouses, hotels, hospitals, offices and commercial properties.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-4 font-bold text-[#063b3f] border border-green-100"
              >
                ✅ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-[#063b3f]">
              Businesses We Serve
            </h2>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-7">
              Acuity Pest Control provides commercial pest control and AMC pest
              control support for different business sectors in Bangalore.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((item) => (
              <div
                key={item}
                className="bg-[#f6fffb] rounded-2xl p-5 text-center font-bold text-[#063b3f] border border-green-100"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE LINKS */}
      <section className="py-16 bg-[#f8fcfb]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white border border-green-100 rounded-3xl p-8">
            <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
              Related Commercial Pest Control Services
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                to="/office-pest-control"
                className="bg-[#f6fffb] border border-green-100 rounded-2xl p-5 font-bold text-[#063b3f] hover:text-green-700 transition"
              >
                Office Pest Control →
              </Link>

              <Link
                to="/warehouse-pest-management"
                className="bg-[#f6fffb] border border-green-100 rounded-2xl p-5 font-bold text-[#063b3f] hover:text-green-700 transition"
              >
                Warehouse Pest Management →
              </Link>

              <Link
                to="/pest-control-hotels-hospitals"
                className="bg-[#f6fffb] border border-green-100 rounded-2xl p-5 font-bold text-[#063b3f] hover:text-green-700 transition"
              >
                Hotels and Hospitals Pest Control →
              </Link>

              <Link
                to="/cockroach-management-service"
                className="bg-[#f6fffb] border border-green-100 rounded-2xl p-5 font-bold text-[#063b3f] hover:text-green-700 transition"
              >
                Cockroach Control →
              </Link>

              <Link
                to="/rodent-management-service"
                className="bg-[#f6fffb] border border-green-100 rounded-2xl p-5 font-bold text-[#063b3f] hover:text-green-700 transition"
              >
                Rodent Control →
              </Link>

              <Link
                to="/disinfection-services"
                className="bg-[#f6fffb] border border-green-100 rounded-2xl p-5 font-bold text-[#063b3f] hover:text-green-700 transition"
              >
                Disinfection Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-[#063b3f]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-[#f8fcfb] rounded-2xl p-6 shadow border border-green-100"
              >
                <h3 className="font-black text-lg text-[#063b3f] mb-3">
                  {faq.q}
                </h3>

                <p className="text-gray-700 leading-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHOR */}
      <section className="py-12 bg-[#f8fcfb]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-4xl font-black flex-shrink-0">
              AP
            </div>

            <div>
              <p className="font-black text-[#063b3f] text-lg">
                Acuity Pest Control Team
              </p>

              <p className="text-gray-600 text-sm leading-6">
                We provide professional pest control solutions for homes,
                apartments and businesses across Bangalore, including commercial
                pest control, office pest control, warehouse pest management,
                cockroach control and rodent control.
              </p>

              <div className="flex gap-3 mt-2">
                <Link
                  to="/about"
                  className="text-green-700 font-semibold text-sm hover:underline"
                >
                  About Us
                </Link>

                <Link
                  to="/contact"
                  className="text-green-700 font-semibold text-sm hover:underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#063b3f] text-white">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-5">
            Need Regular Pest Control for Your Business?
          </h2>

          <p className="text-lg text-gray-200 mb-8">
            Acuity Pest Control provides commercial pest control and AMC pest
            control services across Bangalore.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919941229005"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-bold"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20commercial%20pest%20control%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#063b3f] px-8 py-4 rounded-full font-bold"
            >
              WhatsApp
            </a>

            <Link
              to="/office-pest-control"
              className="border border-white px-8 py-4 rounded-full font-bold"
            >
              View Commercial Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyRegularPestControlImportantBusinesses;
