import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/anti-termite-treatment.jpg";

const faqs = [
  {
    q: "How long does anti-termite treatment last?",
    a: "The result depends on the treatment method, infestation level and property condition. Professional termite treatment gives long-lasting protection when proper prevention and maintenance steps are followed.",
  },
  {
    q: "Is termite treatment safe for my family and pets?",
    a: "Yes, termite treatment can be safe when handled by trained professionals. Our team follows proper application methods and gives safety instructions before and after service.",
  },
  {
    q: "What is the difference between pre-construction and post-construction termite treatment?",
    a: "Pre-construction termite treatment is done before building construction to protect the foundation and soil. Post-construction termite treatment is done after the building is complete to control active termite infestation.",
  },
  {
    q: "How do I know if I have termites?",
    a: "Common signs include mud tubes, hollow-sounding wood, small holes in wood, discarded wings, wood dust, damaged furniture and weak wooden structures.",
  },
  {
    q: "Can I treat termites myself with DIY products?",
    a: "DIY products may reduce visible termites temporarily, but they often fail to reach the colony. Professional termite treatment is recommended for proper control and prevention.",
  },
  {
    q: "How soon can you start termite treatment?",
    a: "We can schedule an inspection based on technician availability and your location in Bangalore. Treatment can be planned after inspection.",
  },
  {
    q: "Do you offer a warranty on termite treatment?",
    a: "Warranty depends on the treatment type, property condition and infestation level. Our team will explain applicable service terms before the treatment.",
  },
  {
    q: "How do I prepare for termite treatment?",
    a: "You may need to move furniture away from walls, clear wooden areas, cover food items and keep pets away from treatment zones. Our team will guide you before service.",
  },
];

const antiTermiteSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.acuitypestcontrols.com/anti-termite-treatment#service",
    name: "Anti-Termite Treatment in Bangalore",
    serviceType: "Termite Control",
    url: "https://www.acuitypestcontrols.com/anti-termite-treatment",
    description:
      "Professional anti-termite treatment in Bangalore to protect homes, apartments, villas, furniture and wooden structures from termite damage.",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://www.acuitypestcontrols.com/#business",
      name: "Acuity Pest Control",
      url: "https://www.acuitypestcontrols.com/",
      telephone: "+91 9941229005",
      email: "info@acuitypestcontrols.in",
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
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: "https://www.acuitypestcontrols.com/anti-termite-treatment",
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
];

const AntiTermiteTreatment = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      <SEO
        title="Anti-Termite Treatment in Bangalore | Acuity Pest Control"
        description="Get professional anti-termite treatment in Bangalore to protect your home, furniture and wooden structures from termite damage. Call Acuity Pest Control."
        keywords="anti-termite treatment Bangalore, termite control Bangalore, termite treatment Bangalore, home termite protection, pre construction termite treatment, post construction termite treatment"
        canonical="https://www.acuitypestcontrols.com/anti-termite-treatment"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={antiTermiteSchema}
      />

      {/* HERO BANNER */}
      <section className="relative w-full">
        <img
          src={bannerImage}
          alt="Anti-termite treatment in Bangalore by Acuity Pest Control"
          className="w-full h-[40vh] md:h-[100vh] "
        />
      </section>

      {/* INTRODUCTION */}
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Home Services
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-green-900 mb-6 leading-tight">
            Anti-Termite Treatment in Bangalore
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-md text-gray-700 leading-8 mb-5">
                Termites are silent destroyers that can damage wooden furniture,
                doors, cupboards, flooring and even the structural strength of
                your property. They work continuously, and by the time you
                notice signs, damage may already have started.
              </p>

              <p className="text-md text-gray-700 leading-8 mb-5">
                At <strong>Acuity Pest Control</strong>, we provide professional
                anti-termite treatment in Bangalore to protect homes,
                apartments, villas and residential properties from costly
                termite damage. Our termite control service helps eliminate
                existing termite activity and reduce the chances of future
                infestation.
              </p>

              <p className="text-md text-gray-700 leading-8">
                Whether you need pre-construction termite treatment for a new
                building or post-construction termite treatment for an existing
                property, our team can guide you with the right solution.
              </p>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 shadow-md">
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                Why Termites Are a Serious Threat
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">⚠</span>
                  <span>Silent damage that often goes unnoticed</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">⚠</span>
                  <span>Damage to furniture, doors, windows and flooring</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">⚠</span>
                  <span>Can affect wooden structures and interiors</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">⚠</span>
                  <span>Repair costs can become expensive if ignored</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">⚠</span>
                  <span>Termite colonies can spread quickly</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">⚠</span>
                  <span>DIY treatments may not reach the colony</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNS OF TERMITE INFESTATION */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 text-center mb-4">
            Signs You Need Anti-Termite Treatment
          </h2>

          <p className="md:text-md text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Early detection is important to prevent severe termite damage. Look
            for these signs and contact us for a termite inspection.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🧱",
                title: "Mud Tubes",
                desc: "Small tunnel-like mud structures on walls, foundations or wooden surfaces.",
              },
              {
                icon: "🪵",
                title: "Hollow Sounding Wood",
                desc: "Wooden furniture or doors may sound hollow when tapped.",
              },
              {
                icon: "🔍",
                title: "Small Holes in Wood",
                desc: "Tiny holes on wooden surfaces with fine wood dust nearby.",
              },
              {
                icon: "🚪",
                title: "Damaged Woodwork",
                desc: "Warped doors, cracked cupboards or weak wooden surfaces.",
              },
              {
                icon: "🪰",
                title: "Termite Wings",
                desc: "Discarded wings near windows, doors or light sources.",
              },
              {
                icon: "🌫️",
                title: "Wood Powder or Dust",
                desc: "Fine sawdust-like powder near furniture or skirting areas.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-xl text-green-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600">
              <span className="font-semibold">
                Don&apos;t wait until it gets worse.
              </span>{" "}
              If you notice these signs, schedule a professional termite
              inspection.
            </p>
          </div>
        </div>
      </section>

      {/* TYPES OF TERMITES */}
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Types of Termites We Treat in Bangalore
          </h2>

          <p className="text-md text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Different termite activity may require different treatment methods.
            Our team inspects the property and suggests a suitable termite
            control solution.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Subterranean Termites",
                desc: "These termites usually live underground and often create mud tubes to reach wooden structures.",
              },
              {
                name: "Drywood Termites",
                desc: "These termites infest dry wood, furniture, flooring and wooden interiors.",
              },
              {
                name: "Dampwood Termites",
                desc: "These termites prefer wood with high moisture content and are often found in damp areas.",
              },
              {
                name: "Wood-Damaging Termites",
                desc: "Termite activity that affects furniture, doors, cupboards, skirting and wooden partitions.",
              },
              {
                name: "Structural Termite Activity",
                desc: "Termites that may affect wooden structures and concealed areas of the property.",
              },
            ].map((termite, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-sm p-6 border-l-4 border-green-600"
              >
                <h3 className="font-bold text-xl text-green-800 mb-2">
                  {termite.name}
                </h3>
                <p className="text-gray-600">{termite.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Our Anti-Termite Treatment Process
          </h2>

          <p className="text-md text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We follow a step-by-step approach to inspect, treat and help protect
            your property from termite activity.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Inspection",
                desc: "Our technicians inspect your property to identify termite signs, affected areas and entry points.",
                detail:
                  "We check wooden furniture, walls, flooring, foundations and moisture-prone areas.",
              },
              {
                step: "2",
                title: "Treatment Plan",
                desc: "Based on the inspection, we suggest a suitable termite treatment plan.",
                detail:
                  "The plan may include pre-construction or post-construction termite control.",
              },
              {
                step: "3",
                title: "Safe Application",
                desc: "We apply the termite treatment carefully in affected and high-risk areas.",
                detail:
                  "Our team follows professional safety procedures during service.",
              },
              {
                step: "4",
                title: "Prevention & Monitoring",
                desc: "We share prevention tips and follow-up guidance to reduce future termite problems.",
                detail:
                  "Ongoing monitoring may be suggested depending on infestation level.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition group"
              >
                <div className="w-16 h-16 rounded-full bg-green-700 text-white flex items-center justify-center mx-auto text-4xl font-bold mb-5 group-hover:bg-green-800 transition">
                  {step.step}
                </div>

                <h3 className="font-bold text-xl text-green-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-700 mb-3">{step.desc}</p>

                <p className="text-sm text-gray-500 italic">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Why Choose Acuity Pest Control?
          </h2>

          <p className="text-md text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide professional termite control services in Bangalore with
            trained technicians, safe methods and practical treatment plans.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Safe Treatment Methods",
                desc: "Our team follows safe application procedures and provides proper safety guidance.",
              },
              {
                icon: "🔬",
                title: "Professional Inspection",
                desc: "We inspect the property before suggesting the termite treatment plan.",
              },
              {
                icon: "👨‍🔧",
                title: "Trained Technicians",
                desc: "Our technicians are trained to handle termite control for homes and commercial spaces.",
              },
              {
                icon: "⏳",
                title: "Long-Lasting Protection",
                desc: "We focus on treatment and prevention steps to reduce termite activity.",
              },
              {
                icon: "💰",
                title: "Transparent Pricing",
                desc: "We provide clear service guidance and practical pricing based on property needs.",
              },
              {
                icon: "🏆",
                title: "Follow-Up Support",
                desc: "We guide you with post-treatment care and prevention recommendations.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-green-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-green-100"
              >
                <div className="text-5xl mb-4">{item.icon}</div>

                <h3 className="font-bold text-xl text-green-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Termite Control Services Across Bangalore
          </h2>

          <p className="text-md text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide professional anti-termite treatment in major areas of
            Bangalore, including:
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Koramangala",
              "Indiranagar",
              "Whitefield",
              "Electronic City",
              "JP Nagar",
              "Bannerghatta Road",
              "HSR Layout",
              "BTM Layout",
              "Marathahalli",
              "Yelahanka",
              "Hebbal",
              "Malleshwaram",
              "Rajajinagar",
              "Vijayanagar",
              "Jayanagar",
              "Basavanagudi",
            ].map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-4 text-center border border-gray-100 hover:border-green-300 transition"
              >
                <span className="font-medium text-gray-800">📍 {area}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8">
            <span className="font-semibold">Don&apos;t see your area?</span> We
            serve all of Bangalore and surrounding regions.{" "}
            <Link
              to="/contact"
              className="text-green-700 font-semibold underline"
            >
              Contact us
            </Link>{" "}
            to check availability.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-green-900 text-center mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-md text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Get answers to common questions about anti-termite treatment and
            termite control.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition border border-gray-100"
              >
                <h3 className="font-bold text-green-900 text-md mb-2">
                  {faq.q}
                </h3>

                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Explore Our Other Pest Control Services
          </h2>

          <p className="text-md text-gray-600 max-w-2xl mb-8">
            We offer a complete range of pest control solutions to keep your
            home and office protected.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/general-pest-control"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              General Pest Control
            </Link>

            <Link
              to="/post-construction-termite-treatment"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Post Construction Termite Treatment
            </Link>

            <Link
              to="/pre-construction-termite-treatment"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Pre Construction Termite Treatment
            </Link>

            <Link
              to="/cockroach-management-service"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Cockroach Control
            </Link>

            <Link
              to="/bed-bug-treatment"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Bed Bug Treatment
            </Link>

            <Link
              to="/ant-control-treatment"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Ant Control
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-green-800 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Book Anti-Termite Treatment in Bangalore
          </h2>

          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Don&apos;t let termites silently damage your property. Book
            professional anti-termite treatment with Acuity Pest Control.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919941229005"
              className="bg-white hover:bg-gray-100 text-green-800 px-8 py-4 rounded-full font-bold text-md transition shadow-lg"
            >
              📞 Call +91 99412 29005
            </a>

            <Link
              to="/contact"
              className="bg-green-700 hover:bg-green-600 text-white border-2 border-white/50 px-8 py-4 rounded-full font-bold text-md transition shadow-lg"
            >
              Request a Free Quote
            </Link>
          </div>

          <p className="text-sm text-white/70 mt-6">
            ⏱ Same-day service available • Free inspection • Professional
            termite control support
          </p>
        </div>
      </section>
    </div>
  );
};

export default AntiTermiteTreatment;
