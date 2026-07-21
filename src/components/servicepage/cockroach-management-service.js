import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/cockrochmanagement.jpg";

const faqs = [
  {
    q: "How long does cockroach treatment take?",
    a: "Cockroach treatment usually takes around 30 minutes to 1 hour depending on the property size, kitchen condition and infestation level.",
  },
  {
    q: "Is cockroach gel treatment safe for family and pets?",
    a: "Yes, cockroach gel treatment can be safe when applied by trained professionals. Our team gives proper safety instructions before and after the service.",
  },
  {
    q: "Can cockroaches come back after treatment?",
    a: "Cockroaches can return if food waste, moisture, cracks and drain entry points are not managed. Professional treatment and prevention steps help reduce repeat infestation.",
  },
  {
    q: "Do you provide cockroach control for restaurants and hotels?",
    a: "Yes, we provide cockroach control for restaurants, hotels, commercial kitchens, offices, apartments and food-handling areas across Bangalore.",
  },
  {
    q: "How often should I get cockroach treatment done?",
    a: "For homes, treatment frequency depends on infestation level. For restaurants, hotels and commercial kitchens, regular preventive pest control is recommended.",
  },
  {
    q: "What is the difference between gel bait and spray treatment?",
    a: "Gel bait targets cockroaches in hiding areas, while spray treatment is used in selected areas based on infestation and property condition. Our technician suggests the right method after inspection.",
  },
  {
    q: "Do I need to vacate the property during cockroach treatment?",
    a: "In most cases, complete vacation is not required. Our technician will guide you based on the treatment method used.",
  },
  {
    q: "What should I do before cockroach treatment?",
    a: "Clean kitchen surfaces, remove open food items, clear clutter near affected areas and follow the preparation instructions shared by our team.",
  },
];

const cockroachSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id":
      "https://www.acuitypestcontrols.com/cockroach-management-service#service",
    name: "Cockroach Management Service in Bangalore",
    serviceType: "Cockroach Control",
    url: "https://www.acuitypestcontrols.com/cockroach-management-service",
    description:
      "Professional cockroach management service in Bangalore for homes, apartments, kitchens, restaurants, offices and commercial properties.",
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
      url: "https://www.acuitypestcontrols.com/cockroach-management-service",
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

const CockroachManagementService = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      <SEO
        title="Cockroach Control in Bangalore | Acuity Pest Control"
        description="Professional cockroach control in Bangalore for homes, apartments, restaurants and offices. Safe and effective treatment by Acuity Pest Control."
        keywords="cockroach control bangalore, cockroach pest control bangalore, cockroach treatment bangalore, kitchen cockroach control, german cockroach treatment, cockroach removal bangalore, commercial cockroach control"
        canonical="https://www.acuitypestcontrols.com/cockroach-management-service"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={cockroachSchema}
      />

      {/* HERO BANNER */}
      <section className="relative w-full">
        <img
          src={bannerImage}
          alt="Cockroach Control Service in Bangalore by Acuity Pest Control"
          className="w-full h-auto"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </section>

      {/* INTRODUCTION */}
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
            Home Services
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mt-6 mb-6 leading-tight">
            Cockroach Control in Bangalore
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-gray-700 leading-8 mb-5">
                Cockroaches are among the most common and stubborn pests found
                in homes, kitchens, restaurants, offices and commercial spaces.
                They hide inside kitchen cabinets, bathrooms, drains,
                appliances, cracks and dark corners.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-5">
                At <strong>Acuity Pest Control</strong>, we provide professional
                cockroach management service in Bangalore using safe and
                effective treatment methods. Our trained technicians inspect
                hiding areas and apply suitable treatment to reduce cockroach
                activity.
              </p>

              <p className="text-lg text-gray-700 leading-8">
                We serve homes, apartments, restaurants, hotels, offices and
                commercial properties across Bangalore. Our cockroach control
                service helps improve hygiene and reduce repeat infestation
                through treatment and prevention guidance.
              </p>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 shadow-md">
              <h2 className="text-4xl font-bold text-green-900 mb-4">
                Why Cockroaches Are a Serious Problem
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">⚠</span>
                  <span>Contaminate food and food preparation surfaces</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">⚠</span>
                  <span>Hide in kitchens, bathrooms, drains and cupboards</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">⚠</span>
                  <span>Can trigger allergies and breathing discomfort</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">⚠</span>
                  <span>Produce a musty smell in affected areas</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">⚠</span>
                  <span>Multiply quickly if not treated early</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">⚠</span>
                  <span>
                    DIY sprays may not reach hidden cockroach activity
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNS OF INFESTATION */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-green-900 text-center mb-4">
            Signs of Cockroach Infestation
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Cockroaches usually hide during the day and become active at night.
            Look for these signs to identify the problem early.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🧹",
                title: "Cockroaches in Kitchen Cabinets",
                desc: "Seeing live or dead cockroaches inside cabinets, drawers and pantry areas.",
              },
              {
                icon: "🚰",
                title: "Near Sinks & Drains",
                desc: "Cockroaches often gather near water sources like sinks, pipes and drain openings.",
              },
              {
                icon: "👃",
                title: "Bad Smell in Cupboards",
                desc: "A strong musty smell may appear in infested kitchens or storage areas.",
              },
              {
                icon: "⚫",
                title: "Black Droppings",
                desc: "Small dark droppings found near hiding spots, appliances and corners.",
              },
              {
                icon: "🥚",
                title: "Egg Cases",
                desc: "Brownish capsule-like egg cases found behind appliances or hidden corners.",
              },
              {
                icon: "🌙",
                title: "Night Activity",
                desc: "Cockroaches running when you switch on the light at night.",
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
              <span className="font-semibold">Tip:</span> If you notice these
              signs, book a professional inspection before the infestation
              spreads.
            </p>
          </div>
        </div>
      </section>

      {/* TYPES OF COCKROACHES */}
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Cockroach Species We Handle
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Different cockroach species may require different treatment methods.
            Our technicians inspect the property and suggest the right cockroach
            control plan.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "German Cockroach",
                desc: "Commonly found in homes, kitchens and restaurants. They reproduce quickly and hide in small cracks.",
              },
              {
                name: "American Cockroach",
                desc: "Larger cockroaches often found near drains, basements, damp areas and outdoor entry points.",
              },
              {
                name: "Oriental Cockroach",
                desc: "Dark-colored cockroaches that prefer cool and damp places such as drains and storage areas.",
              },
              {
                name: "Brown-Banded Cockroach",
                desc: "Small cockroaches that may hide in warm, dry areas, furniture and electrical appliances.",
              },
              {
                name: "Smoky Brown Cockroach",
                desc: "Usually found around gardens, attics and outdoor areas, but they may enter homes and buildings.",
              },
            ].map((roach, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-sm p-6 border-l-4 border-green-600"
              >
                <h3 className="font-bold text-xl text-green-800 mb-2">
                  {roach.name}
                </h3>

                <p className="text-gray-600">{roach.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Our Cockroach Control Process
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We follow a step-by-step approach to inspect, treat and reduce
            cockroach infestation in your property.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Inspection",
                desc: "Our technicians inspect kitchens, bathrooms, drains, appliances, cupboards, cracks and hidden corners.",
                detail:
                  "We identify activity level, hiding areas and possible entry points.",
              },
              {
                step: "2",
                title: "Treatment Plan",
                desc: "Based on inspection, we suggest a suitable cockroach treatment method for your property.",
                detail:
                  "Treatment may include gel bait, spray or other professional methods.",
              },
              {
                step: "3",
                title: "Application",
                desc: "We apply treatment carefully in target areas like under sinks, behind cabinets and near drains.",
                detail:
                  "Our team follows proper safety steps during treatment.",
              },
              {
                step: "4",
                title: "Follow-Up & Prevention",
                desc: "We share prevention tips to reduce food sources, moisture and cockroach entry points.",
                detail:
                  "Follow-up support may be suggested depending on infestation level.",
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

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide professional cockroach control in Bangalore with trained
            technicians, safe methods and quick customer support.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Safe for Family & Pets",
                desc: "We follow safe treatment methods and provide proper safety instructions.",
              },
              {
                icon: "🌿",
                title: "Targeted Treatment",
                desc: "Our treatment focuses on cockroach hiding areas, trails and entry points.",
              },
              {
                icon: "👨‍🔧",
                title: "Trained Technicians",
                desc: "Our team is trained to handle cockroach control for homes and commercial spaces.",
              },
              {
                icon: "⚡",
                title: "Quick Response",
                desc: "We help you book cockroach control service quickly across Bangalore.",
              },
              {
                icon: "💰",
                title: "Affordable Pricing",
                desc: "We provide practical pest control options based on property needs.",
              },
              {
                icon: "🏆",
                title: "Follow-Up Support",
                desc: "We guide you with prevention and post-treatment care.",
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
            Cockroach Control Services Across Bangalore
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide professional cockroach management in major areas of
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

          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Get answers to common questions about cockroach management and
            prevention.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition border border-gray-100"
              >
                <h3 className="font-bold text-green-900 text-lg mb-2">
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

          <p className="text-lg text-gray-600 max-w-2xl mb-8">
            We offer a complete range of pest control solutions to keep your
            home and office pest-free.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/general-pest-control"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              General Pest Control
            </Link>

            <Link
              to="/ant-control-treatment"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Ant Control
            </Link>

            <Link
              to="/bed-bug-treatment"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Bed Bug Treatment
            </Link>

            <Link
              to="/anti-termite-treatment"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Termite Control
            </Link>

            <Link
              to="/rodent-management-service"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Rodent Control
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-green-800 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Book Cockroach Control in Bangalore
          </h2>

          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Don&apos;t let cockroaches affect your health and hygiene. Book
            professional cockroach management service with Acuity Pest Control.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919941229005"
              className="bg-white hover:bg-gray-100 text-green-800 px-8 py-4 rounded-full font-bold text-lg transition shadow-lg"
            >
              📞 Call +91 99412 29005
            </a>

            <Link
              to="/contact"
              className="bg-green-700 hover:bg-green-600 text-white border-2 border-white/50 px-8 py-4 rounded-full font-bold text-lg transition shadow-lg"
            >
              Request a Free Quote
            </Link>
          </div>

          <p className="text-sm text-white/70 mt-6">
            ⏱ Same-day service available • Free inspection • Professional
            cockroach control support
          </p>
        </div>
      </section>
    </div>
  );
};

export default CockroachManagementService;
