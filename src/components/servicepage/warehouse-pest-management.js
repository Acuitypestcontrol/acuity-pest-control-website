import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/Warehouse Pest Management.jpg";

const faqs = [
  {
    q: "Do you provide pest control for food warehouses and cold storage?",
    a: "Yes, we provide warehouse pest management for food storage, cold storage, general warehouses, godowns, logistics hubs and industrial storage facilities.",
  },
  {
    q: "Can you provide regular inspections and maintenance?",
    a: "Yes, we provide scheduled inspections, monitoring and AMC plans for warehouses based on pest risk, inventory type and facility size.",
  },
  {
    q: "Do you provide service reports and documentation?",
    a: "Yes, service reports or treatment documentation can be provided on request based on the type of warehouse pest management service selected.",
  },
  {
    q: "How do you handle rodent control in large warehouses?",
    a: "We inspect rodent entry points, movement paths, nesting areas and food sources, then use suitable traps, bait stations and prevention guidance.",
  },
  {
    q: "Can treatment be scheduled after working hours?",
    a: "Yes, service can be planned during suitable timings such as off-peak hours, weekends or holidays based on warehouse operations and technician availability.",
  },
  {
    q: "What are stored product insects?",
    a: "Stored product insects include weevils, beetles and moths that can affect grains, pulses, spices, packaged foods and stored raw materials.",
  },
  {
    q: "Do you offer emergency pest control for warehouses?",
    a: "Urgent warehouse pest control support can be planned based on technician availability, location and severity of the pest issue.",
  },
  {
    q: "How do you keep treatment safe for warehouse workers?",
    a: "Our team follows proper application methods, places treatment carefully and provides safety instructions before and after service.",
  },
];

const warehousePestSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id":
      "https://www.acuitypestcontrols.com/warehouse-pest-management#service",
    name: "Warehouse Pest Management in Bangalore",
    serviceType: "Warehouse Pest Control",
    url: "https://www.acuitypestcontrols.com/warehouse-pest-management",
    description:
      "Professional warehouse pest management services in Bangalore for warehouses, godowns, storage facilities, logistics hubs and industrial spaces.",
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
      url: "https://www.acuitypestcontrols.com/warehouse-pest-management",
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

const WarehousePestManagement = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      <SEO
        title="Warehouse Pest Management in Bangalore | Acuity Pest Control"
        description="Professional warehouse pest management in Bangalore for warehouses, godowns, storage facilities, logistics hubs and industrial spaces. Acuity Pest Control."
        keywords="warehouse pest management bangalore, warehouse pest control bangalore, godown pest control bangalore, storage facility pest control, warehouse rodent control, stored product insect control bangalore, logistics warehouse pest control"
        canonical="https://www.acuitypestcontrols.com/warehouse-pest-management"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={warehousePestSchema}
      />

      {/* HERO BANNER */}
      <section className="relative w-full">
        <img
          src={bannerImage}
          alt="Warehouse Pest Management in Bangalore by Acuity Pest Control"
          className="w-full h-auto"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </section>

      {/* INTRODUCTION */}
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm">
            Commercial Services
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mt-6 mb-6 leading-tight">
            Warehouse Pest Management in Bangalore
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-gray-700 leading-8 mb-5">
                Warehouses store valuable inventory, raw materials, finished
                goods and packaging materials that can be affected by rodents,
                cockroaches, ants, flies and stored product insects. A pest
                issue in a warehouse can lead to damaged goods, contamination
                concerns and operational delays.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-5">
                At <strong>Acuity Pest Control</strong>, we provide professional
                warehouse pest management services in Bangalore for warehouses,
                godowns, storage facilities, logistics hubs, cold storage units
                and industrial spaces. Our team inspects the facility and
                suggests a suitable pest control plan based on pest activity and
                stored goods.
              </p>

              <p className="text-lg text-gray-700 leading-8">
                We provide one-time treatment, scheduled monitoring and AMC
                options for warehouse pest control. Our service can be planned
                around your operations to reduce disturbance to daily warehouse
                activity.
              </p>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 shadow-md">
              <h2 className="text-4xl font-bold text-green-900 mb-4">
                Why Warehouse Pest Management is Essential
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Helps protect inventory from pest damage</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Reduces contamination risk in storage areas</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>
                    Controls rodents near racks, docks and waste zones
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Supports better hygiene and stock maintenance</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Helps reduce operational disruption from pests</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Can be planned as AMC or regular monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON PESTS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Common Pests in Warehouses
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We handle pests that can affect warehouse inventory, packaging,
            storage racks and infrastructure.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🐭",
                name: "Rodents",
                desc: "Rats and mice can damage packaging, stored goods, wires and insulation.",
              },
              {
                icon: "🪳",
                name: "Cockroaches",
                desc: "Cockroaches may appear in damp areas, drains, waste zones and storage corners.",
              },
              {
                icon: "🐜",
                name: "Ants",
                desc: "Ants can enter food storage areas, packaging zones and raw material sections.",
              },
              {
                icon: "🪲",
                name: "Stored Product Insects",
                desc: "Weevils, beetles and moths can affect grains, pulses, spices and packaged foods.",
              },
              {
                icon: "🕷️",
                name: "Spiders",
                desc: "Spiders create webs in racks, corners, ceilings and low-traffic storage areas.",
              },
              {
                icon: "🪰",
                name: "Flies",
                desc: "Flies can increase near waste areas, damp zones and food-related storage spaces.",
              },
            ].map((pest, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100"
              >
                <div className="text-4xl mb-3">{pest.icon}</div>

                <h3 className="font-bold text-xl text-green-800 mb-2">
                  {pest.name}
                </h3>

                <p className="text-gray-600">{pest.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS WE PROTECT */}
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Warehouse Areas We Protect
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We inspect and treat important warehouse zones to help reduce pest
            activity and improve storage hygiene.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "📦",
                title: "Storage Racks & Shelves",
                desc: "Inventory storage areas, pallet racks, shelves and stock corners.",
              },
              {
                icon: "🚚",
                title: "Loading & Unloading Bays",
                desc: "Docks, ramps, shutters and entry points where pests can enter.",
              },
              {
                icon: "📋",
                title: "Packing & Dispatch Areas",
                desc: "Packing tables, dispatch zones, conveyor areas and packaging material storage.",
              },
              {
                icon: "🌾",
                title: "Raw Material Storage",
                desc: "Bulk storage areas for grains, spices, components, chemicals or materials.",
              },
              {
                icon: "🏷️",
                title: "Finished Goods Storage",
                desc: "Finished products, carton storage, pallets and dispatch-ready goods.",
              },
              {
                icon: "🗑️",
                title: "Waste & Recycling Zones",
                desc: "Garbage rooms, scrap areas, recycling points and waste collection spaces.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-green-50 rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-green-100"
              >
                <div className="text-4xl mb-3">{item.icon}</div>

                <h3 className="font-bold text-xl text-green-800 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Our Warehouse Pest Management Process
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We follow a planned process to inspect, treat, monitor and maintain
            pest control in warehouse facilities.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Inspection & Risk Assessment",
                desc: "Our team inspects the warehouse to identify pest activity, entry points and high-risk zones.",
                detail:
                  "We check racks, docks, drains, waste areas, storage corners and external surroundings.",
              },
              {
                step: "2",
                title: "Treatment Plan",
                desc: "Based on inspection, we suggest a suitable pest control plan for your warehouse.",
                detail:
                  "The plan depends on product type, pest issue, facility layout and operational schedule.",
              },
              {
                step: "3",
                title: "Treatment Application",
                desc: "We apply suitable treatment and monitoring methods in selected areas.",
                detail:
                  "Treatment may include traps, bait stations, targeted spraying or other professional methods.",
              },
              {
                step: "4",
                title: "Monitoring & Maintenance",
                desc: "We provide follow-up support, monitoring and AMC options for continued pest control.",
                detail:
                  "Reports or service documentation can be shared where required.",
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
            We provide warehouse pest management in Bangalore with trained
            technicians, practical monitoring and scheduled maintenance support.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏭",
                title: "Warehouse-Specific Solutions",
                desc: "We plan service based on warehouse layout, stored goods and pest risk areas.",
              },
              {
                icon: "🧪",
                title: "Suitable Treatment Methods",
                desc: "Treatment is selected based on pest type, product area and safety requirements.",
              },
              {
                icon: "👨‍🔧",
                title: "Trained Technicians",
                desc: "Our team is trained to handle pest control for warehouses and industrial spaces.",
              },
              {
                icon: "🕒",
                title: "Flexible Scheduling",
                desc: "Service can be planned during suitable hours to reduce operational disturbance.",
              },
              {
                icon: "📊",
                title: "Monitoring & Reporting",
                desc: "We provide monitoring support and service reports where required.",
              },
              {
                icon: "📋",
                title: "Flexible AMC Plans",
                desc: "We offer scheduled maintenance options based on warehouse pest risk.",
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
            Warehouse Pest Management Across Bangalore
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We serve warehouses and storage facilities in major industrial areas
            of Bangalore, including:
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Whitefield",
              "Electronic City",
              "Peenya",
              "Bommasandra",
              "Jigani",
              "Doddaballapur",
              "Nelamangala",
              "Kengeri",
              "Rajarajeshwari Nagar",
              "Attibele",
              "Hosur Road",
              "Tumkur Road",
              "Mysore Road",
              "Bellary Road",
              "Kanakapura Road",
              "Sarjapur Road",
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
            Get answers to common questions about warehouse pest management.
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
            We offer a complete range of pest control and hygiene solutions for
            commercial and industrial facilities.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/office-pest-control"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Office Pest Control
            </Link>

            <Link
              to="/rodent-management-service"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Rodent Control
            </Link>

            <Link
              to="/disinfection-services"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Disinfection Services
            </Link>

            <Link
              to="/general-pest-control"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              General Pest Control
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
            Book Warehouse Pest Management in Bangalore
          </h2>

          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Protect your warehouse, inventory and storage facility with
            professional warehouse pest management by Acuity Pest Control.
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
              Request a Free Audit
            </Link>
          </div>

          <p className="text-sm text-white/70 mt-6">
            ⏱ Warehouse inspection • AMC plans • Service reporting support
          </p>
        </div>
      </section>
    </div>
  );
};

export default WarehousePestManagement;
