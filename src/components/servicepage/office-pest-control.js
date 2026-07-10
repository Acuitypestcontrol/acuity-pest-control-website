import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/office-pest-control.jpg";

const faqs = [
  {
    q: "Do you provide pest control for IT companies and coworking spaces?",
    a: "Yes, we provide office pest control services for IT companies, corporate offices, coworking spaces, commercial buildings and business workspaces across Bangalore.",
  },
  {
    q: "Can office pest control be done after office hours?",
    a: "Yes, pest control service can be planned during evenings, weekends or holidays based on office availability and technician schedule.",
  },
  {
    q: "Is the treatment safe for employees and visitors?",
    a: "Yes, office pest control can be safe when handled by trained professionals. Our team follows proper safety methods and gives instructions before and after service.",
  },
  {
    q: "Do you provide AMC for offices?",
    a: "Yes, we provide AMC and scheduled pest control maintenance for offices, IT parks, coworking spaces and commercial buildings.",
  },
  {
    q: "Which pests are covered under office pest control?",
    a: "Office pest control can cover cockroaches, ants, rodents, mosquitoes, flies, spiders, silverfish and other common office pests based on inspection.",
  },
  {
    q: "How long does office pest control treatment take?",
    a: "The treatment duration depends on office size, pest activity and areas covered. Our team can give a time estimate after inspection.",
  },
  {
    q: "Do you treat server rooms and sensitive equipment areas?",
    a: "Yes, we can inspect server rooms and sensitive equipment areas. Treatment method will be selected carefully based on safety and equipment conditions.",
  },
  {
    q: "How often should office pest control be done?",
    a: "Treatment frequency depends on office size, pantry usage, pest activity and hygiene condition. Monthly or quarterly maintenance may be suggested for high-traffic offices.",
  },
];

const officePestControlSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.acuitypestcontrols.com/office-pest-control#service",
    name: "Office Pest Control in Bangalore",
    serviceType: "Office Pest Control",
    url: "https://www.acuitypestcontrols.com/office-pest-control",
    description:
      "Professional office pest control services in Bangalore for IT campuses, corporate offices, coworking spaces and commercial workspaces.",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://www.acuitypestcontrols.com/#business",
      name: "Acuity Pest Control",
      url: "https://www.acuitypestcontrols.com/",
      telephone: "+91 9941229005",
      email: "info@acuitypestcontrols.com",
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
      url: "https://www.acuitypestcontrols.com/office-pest-control",
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

const OfficePestControl = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      <SEO
        title="Office Pest Control in Bangalore | Corporate Pest Control Service"
        description="Get professional office pest control in Bangalore for IT companies, corporate offices, coworking spaces and commercial buildings. Safe service by Acuity Pest Control."
        keywords="office pest control Bangalore, corporate pest control Bangalore, IT office pest control, commercial pest control Bangalore, coworking space pest control, office rodent control Bangalore"
        canonical="https://www.acuitypestcontrols.com/office-pest-control"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={officePestControlSchema}
      />

      {/* HERO BANNER */}
      <section className="relative w-full">
        <img
          src={bannerImage}
          alt="Office pest control services in Bangalore by Acuity Pest Control"
          className="w-full h-[40vh] md:h-[110vh] "
        />
      </section>

      {/* INTRODUCTION */}
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm">
            Commercial Services
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mt-6 mb-6 leading-tight">
            Office Pest Control in Bangalore
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-gray-700 leading-8 mb-5">
                Offices and IT campuses are high-traffic spaces where pests can
                easily find food, water and shelter. Cockroaches in pantries,
                ants near workstations, rodents in storage rooms and mosquitoes
                in common areas can affect hygiene, employee comfort and
                workplace reputation.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-5">
                At <strong>Acuity Pest Control</strong>, we provide professional
                office pest control services for corporate offices, IT parks,
                commercial buildings, coworking spaces and workspaces across
                Bangalore. Our service is planned to be safe, discreet and
                suitable for business environments.
              </p>

              <p className="text-lg text-gray-700 leading-8">
                We work with facility managers, admin teams and HR teams to
                schedule pest control during suitable timings such as evenings,
                weekends or holidays to reduce disruption to office operations.
              </p>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 shadow-md">
              <h2 className="text-4xl font-bold text-green-900 mb-4">
                Why Office Pest Control is Essential
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Helps maintain a clean and hygienic workplace</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Reduces pest activity in pantries and food areas</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Helps protect office equipment and stored items</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Maintains a professional image for visitors</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Supports workplace health and hygiene standards</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Can be planned as AMC or scheduled maintenance</span>
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
            Common Pests Found in Offices
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We handle common pests that affect commercial workspaces, IT offices
            and corporate buildings.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🪳",
                name: "Cockroaches",
                desc: "Commonly found in pantries, restrooms, break rooms and food storage areas.",
              },
              {
                icon: "🐭",
                name: "Rodents",
                desc: "Rats and mice may damage cables, papers, files, furniture and stored items.",
              },
              {
                icon: "🐜",
                name: "Ants",
                desc: "Ant trails can appear around desks, pantries, walls and food areas.",
              },
              {
                icon: "🦟",
                name: "Mosquitoes",
                desc: "Mosquitoes may breed in stagnant water, plant pots, basements and outdoor spaces.",
              },
              {
                icon: "🕷️",
                name: "Spiders & Silverfish",
                desc: "Often found in storage areas, basements, corners and less-used rooms.",
              },
              {
                icon: "🪰",
                name: "Flies",
                desc: "Houseflies and fruit flies may appear near garbage points, pantry areas and food waste.",
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
            Office Areas We Protect
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We inspect and treat important office areas to help reduce pest
            activity and improve workplace hygiene.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🖥️",
                title: "Workstations & Cubicles",
                desc: "Desks, computers, keyboards, personal storage and workstation areas.",
              },
              {
                icon: "🍽️",
                title: "Pantry & Cafeteria",
                desc: "Kitchen counters, microwave area, refrigerator zones and dining spaces.",
              },
              {
                icon: "💻",
                title: "Server Rooms",
                desc: "Sensitive equipment rooms, cable areas, cooling units and raised flooring.",
              },
              {
                icon: "🏢",
                title: "Reception & Lobby",
                desc: "Visitor areas, furniture, plant zones and front office spaces.",
              },
              {
                icon: "🚻",
                title: "Washrooms & Restrooms",
                desc: "Toilets, sinks, pipes, exhaust areas and moisture-prone zones.",
              },
              {
                icon: "📦",
                title: "Storage & Archive Rooms",
                desc: "Paper storage, old files, boxes, supplies and low-traffic rooms.",
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
            Our Office Pest Control Process
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We follow a planned process to inspect, treat and maintain pest
            control in office environments.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Inspection",
                desc: "We inspect workspaces, pantries, restrooms, storage rooms, server rooms and common areas.",
                detail:
                  "We identify pest activity, entry points, hiding areas and risk zones.",
              },
              {
                step: "2",
                title: "Treatment Plan",
                desc: "Based on inspection, we suggest a suitable treatment plan for your office.",
                detail:
                  "Treatment may include gel baiting, traps, targeted spraying or other professional methods.",
              },
              {
                step: "3",
                title: "Safe Application",
                desc: "We apply treatment carefully in selected areas with proper safety steps.",
                detail:
                  "Service can be planned during non-working hours where required.",
              },
              {
                step: "4",
                title: "Monitoring & Maintenance",
                desc: "We provide prevention guidance and AMC support for regular office pest control.",
                detail:
                  "Reports or service records can be shared based on requirement.",
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
            We provide office pest control in Bangalore with trained
            technicians, flexible scheduling and practical maintenance support.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Safe for Employees",
                desc: "We follow safe treatment methods and provide clear instructions before and after service.",
              },
              {
                icon: "🤫",
                title: "Discreet & Professional",
                desc: "Our team works professionally to reduce disturbance in office environments.",
              },
              {
                icon: "🕒",
                title: "Flexible Scheduling",
                desc: "Service can be planned during evenings, weekends or holidays based on availability.",
              },
              {
                icon: "👨‍🔧",
                title: "Trained Technicians",
                desc: "Our technicians are trained to handle pest control for offices and commercial spaces.",
              },
              {
                icon: "📋",
                title: "AMC & Preventive Maintenance",
                desc: "We provide scheduled pest control options for office maintenance.",
              },
              {
                icon: "🏆",
                title: "Service Across Bangalore",
                desc: "We serve offices in major business hubs, IT parks and commercial areas.",
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
            Office Pest Control Across Bangalore
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide pest control services for offices in major business hubs
            across Bangalore, including:
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
            Get answers to common questions about office pest control.
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
            your business.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/general-pest-control"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              General Pest Control
            </Link>

            <Link
              to="/disinfection-services"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Disinfection Services
            </Link>

            <Link
              to="/common-area-treatment-residential-complex"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Common Area Treatment
            </Link>

            <Link
              to="/educational-institution-pest-control"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              School & College Pest Control
            </Link>

            <Link
              to="/cockroach-management-service"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Cockroach Control
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-green-800 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Book Office Pest Control in Bangalore
          </h2>

          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Protect your employees, clients and workplace reputation with
            professional office pest control by Acuity Pest Control.
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
            ⏱ After-hours service available • Free inspection • Professional
            office pest control support
          </p>
        </div>
      </section>
    </div>
  );
};

export default OfficePestControl;
