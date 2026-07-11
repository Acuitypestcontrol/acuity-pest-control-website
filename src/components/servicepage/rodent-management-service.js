import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/rodentb.jpg";

const faqs = [
  {
    q: "Do you remove both rats and mice?",
    a: "Yes, we provide rodent control for rats and mice in homes, apartments, offices, warehouses, restaurants, factories and commercial spaces.",
  },
  {
    q: "Is rodent treatment safe for my family and pets?",
    a: "Yes, rodent control can be safe when handled by trained professionals. Our team places traps and bait stations carefully and gives proper safety instructions.",
  },
  {
    q: "How long does rodent treatment take?",
    a: "Treatment time depends on property size, rodent activity, entry points and infestation level. Follow-up visits may be required for proper monitoring.",
  },
  {
    q: "Can rodents return after treatment?",
    a: "Rodents can return if entry points, food sources and gaps are not managed. We provide prevention guidance and sealing suggestions after inspection.",
  },
  {
    q: "Do you provide rodent control for warehouses and factories?",
    a: "Yes, we provide rodent management for warehouses, factories, godowns, offices, restaurants, retail stores and industrial spaces.",
  },
  {
    q: "What is the difference between baiting and trapping?",
    a: "Trapping captures rodents directly, while baiting uses bait stations in selected areas to control rodent activity. Our technician suggests the right method after inspection.",
  },
  {
    q: "Do you offer AMC for rodent control?",
    a: "Yes, we provide AMC and scheduled rodent monitoring options for homes, apartments, offices, warehouses and commercial spaces.",
  },
  {
    q: "How should I prepare for rodent treatment?",
    a: "Keep food items sealed, reduce clutter, clear access near walls and follow the preparation instructions shared by our technician.",
  },
];

const rodentSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id":
      "https://www.acuitypestcontrols.com/rodent-management-service#service",
    name: "Rodent Management Service in Bangalore",
    serviceType: "Rodent Control",
    url: "https://www.acuitypestcontrols.com/rodent-management-service",
    description:
      "Professional rodent management service in Bangalore for homes, apartments, offices, warehouses, restaurants, factories and commercial spaces.",
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
      url: "https://www.acuitypestcontrols.com/rodent-management-service",
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

const RodentManagementService = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      <SEO
        title="Rodent Control in Bangalore | Rat Control Service"
        description="Get professional rodent control in Bangalore for homes, apartments, offices, warehouses and commercial spaces. Rat and mouse control by Acuity Pest Control."
        keywords="rodent control Bangalore, rat control Bangalore, mouse control Bangalore, rodent management service Bangalore, commercial rodent control, rat removal Bangalore"
        canonical="https://www.acuitypestcontrols.com/rodent-management-service"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={rodentSchema}
      />

      {/* HERO BANNER */}
      <section className="relative w-full">
        <img
          src={bannerImage}
          alt="Rodent control service in Bangalore by Acuity Pest Control"
          className="w-full h-[40vh] md:h-[110vh] "
        />
      </section>

      {/* INTRODUCTION */}
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm">
            Home Services
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mt-6 mb-6 leading-tight">
            Rodent Control in Bangalore
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-gray-700 leading-8 mb-5">
                Rodents such as rats and mice can create serious problems in
                homes, apartments, offices, warehouses, restaurants and
                commercial spaces. They can damage wires, furniture, stored
                goods, food packaging and create hygiene concerns.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-5">
                At <strong>Acuity Pest Control</strong>, we provide professional
                rodent management service in Bangalore using inspection,
                trapping, baiting, monitoring and prevention guidance. Our team
                identifies rodent entry points, nesting areas and movement paths
                before suggesting the right control method.
              </p>

              <p className="text-lg text-gray-700 leading-8">
                We serve homes, apartments, offices, warehouses, factories,
                restaurants and commercial properties across Bangalore. Our
                rodent control service is designed to reduce rodent activity and
                help prevent repeat infestation.
              </p>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 shadow-md">
              <h2 className="text-4xl font-bold text-green-900 mb-4">
                Why Rodent Management is Important
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">⚠</span>
                  <span>Rodents can chew electrical wires and cables</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">⚠</span>
                  <span>Can contaminate food and storage areas</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">⚠</span>
                  <span>May damage insulation, furniture and stored goods</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">⚠</span>
                  <span>Can multiply quickly if not controlled early</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">⚠</span>
                  <span>Creates bad smell, droppings and hygiene issues</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">⚠</span>
                  <span>Can enter through small gaps, drains and openings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-green-900 text-center mb-4">
            Signs of Rodent Infestation
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Early detection is important. Look for these common signs of rat or
            mouse activity.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "💩",
                title: "Droppings",
                desc: "Small dark pellets found in kitchen cabinets, pantries, stores or along walls.",
              },
              {
                icon: "🍽️",
                title: "Chewed Food Packets",
                desc: "Gnaw marks on food containers, packets, bags and boxes.",
              },
              {
                icon: "🪚",
                title: "Gnaw Marks",
                desc: "Rough bite marks on furniture, doors, wires, pipes and plastic items.",
              },
              {
                icon: "🔊",
                title: "Scratching Noises at Night",
                desc: "Scurrying or scratching sounds from ceilings, walls, storage rooms or under floors.",
              },
              {
                icon: "🕳️",
                title: "Rat Holes",
                desc: "Small holes near walls, baseboards, drains, gardens or building edges.",
              },
              {
                icon: "👃",
                title: "Bad Smell",
                desc: "Strong musky smell in hidden areas due to urine, droppings or nesting.",
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
              <span className="font-semibold">Tip:</span> Rodents usually hide
              during the day and move at night. If you notice these signs, book
              a professional inspection early.
            </p>
          </div>
        </div>
      </section>

      {/* RODENT SPECIES */}
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Rodent Activity We Handle
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We handle common rat and mouse activity found in residential,
            commercial and industrial spaces.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Rats",
                desc: "Rats are commonly found near drains, gardens, basements, kitchens, godowns and garbage areas.",
              },
              {
                name: "Mice",
                desc: "Mice can enter homes, stores, offices and warehouses through small gaps and hide in boxes or furniture.",
              },
              {
                name: "Roof & Ceiling Rodents",
                desc: "Rodents may move through ceilings, false ceilings, cable trays and roof areas.",
              },
            ].map((rodent, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-sm p-6 border-l-4 border-green-600"
              >
                <h3 className="font-bold text-xl text-green-800 mb-2">
                  {rodent.name}
                </h3>

                <p className="text-gray-600">{rodent.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Our Rodent Control Process
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We follow a structured process to inspect, control and reduce rodent
            activity in your property.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Inspection",
                desc: "Our technicians inspect your property to identify rodent activity, entry points, nests and food sources.",
                detail:
                  "We check kitchens, stores, drains, ceilings, basements, roof areas and outdoor surroundings.",
              },
              {
                step: "2",
                title: "Trapping & Baiting",
                desc: "We place suitable traps or bait stations in selected areas based on rodent movement.",
                detail:
                  "Placement is planned carefully to reduce risk for children, pets and staff.",
              },
              {
                step: "3",
                title: "Monitoring & Removal",
                desc: "We monitor rodent activity and adjust the control method where required.",
                detail:
                  "Follow-up visits may be suggested depending on infestation level.",
              },
              {
                step: "4",
                title: "Exclusion & Prevention",
                desc: "We suggest sealing entry points, improving sanitation and reducing food sources.",
                detail:
                  "AMC support can be planned for ongoing rodent monitoring.",
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
            We provide rodent control in Bangalore with trained technicians,
            planned treatment methods and practical prevention support.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Safe Rodent Control",
                desc: "We follow safe placement methods and give proper instructions before and after service.",
              },
              {
                icon: "👨‍🔧",
                title: "Experienced Technicians",
                desc: "Our team is trained to inspect rodent activity and apply suitable control methods.",
              },
              {
                icon: "⏱️",
                title: "Fast & Reliable Response",
                desc: "We help customers book rodent control service quickly across Bangalore.",
              },
              {
                icon: "💰",
                title: "Affordable Pricing",
                desc: "We provide practical service options based on property size and infestation level.",
              },
              {
                icon: "🔒",
                title: "Prevention Guidance",
                desc: "We guide you on sealing gaps, managing food sources and reducing rodent entry.",
              },
              {
                icon: "🏙️",
                title: "Service Across Bangalore",
                desc: "We serve residential, commercial and industrial properties across Bangalore.",
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
            Rodent Control Service Across Bangalore
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide rodent management services in major areas of Bangalore,
            including:
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
              "Sarjapur Road",
              "Kanakapura Road",
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
            Get answers to common questions about rodent management.
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
            Explore Our Other Services
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mb-8">
            We offer a complete range of pest control solutions for your home
            and office.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/general-pest-control"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              General Pest Control
            </Link>

            <Link
              to="/cockroach-management-service"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Cockroach Control
            </Link>

            <Link
              to="/mosquito-management-service"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Mosquito Control
            </Link>

            <Link
              to="/ant-control-treatment"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Ant Control
            </Link>

            <Link
              to="/anti-termite-treatment"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Termite Control
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-green-800 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Book Rodent Control in Bangalore
          </h2>

          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Protect your home, office or commercial space from rats and mice
            with professional rodent management by Acuity Pest Control.
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
            ⏱ Free inspection • Safe placement methods • Professional rodent
            control support
          </p>
        </div>
      </section>
    </div>
  );
};

export default RodentManagementService;
