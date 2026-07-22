import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/hotelb.jpg";

const faqs = [
  {
    q: "Do you provide pest control without disturbing guests or patients?",
    a: "Yes, pest control service can be scheduled during suitable timings such as low-occupancy hours, nights, weekends or holidays to reduce disturbance.",
  },
  {
    q: "Are the treatments safe for hotels and hospitals?",
    a: "Yes, pest control can be safe when handled by trained professionals. Our team follows proper safety methods and gives instructions before and after service.",
  },
  {
    q: "Do you offer AMC for hotels and hospitals?",
    a: "Yes, we provide AMC and scheduled pest control maintenance for hotels, hospitals, clinics, resorts, restaurants and healthcare facilities.",
  },
  {
    q: "Can treatments be scheduled after business hours?",
    a: "Yes, service can be planned after working hours, during weekends or based on your operational timing and technician availability.",
  },
  {
    q: "Do you provide service reports and documentation?",
    a: "Yes, service reports or treatment documentation can be provided on request based on the type of service selected.",
  },
  {
    q: "What pests are covered under hotel and hospital pest control?",
    a: "We control cockroaches, rodents, ants, termites, mosquitoes, flies, bed bugs, silverfish and other common pests based on inspection.",
  },
  {
    q: "How do you handle pest control in hotel kitchens and food areas?",
    a: "For food areas, we use careful application methods and provide safety instructions to avoid food contamination.",
  },
  {
    q: "Do you provide emergency pest control services?",
    a: "Emergency pest control support can be planned based on technician availability, location and urgency of the pest issue.",
  },
];

const hotelsHospitalsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id":
      "https://www.acuitypestcontrols.com/pest-control-hotels-hospitals#service",
    name: "Pest Control for Hotels and Hospitals in Bangalore",
    serviceType: "Hospitality and Healthcare Pest Control",
    url: "https://www.acuitypestcontrols.com/pest-control-hotels-hospitals",
    description:
      "Professional pest control services for hotels, hospitals, resorts, clinics and healthcare facilities in Bangalore.",
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
      url: "https://www.acuitypestcontrols.com/pest-control-hotels-hospitals",
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

const PestControlHotelsHospitals = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      <SEO
        title="Pest Control for Hotels and Hospitals in Bangalore | Acuity Pest Control"
        description="Professional pest control for hotels and hospitals in Bangalore. Control cockroaches, rodents, flies, mosquitoes and other pests with Acuity Pest Control."
        canonical="https://www.acuitypestcontrols.com/hotel-hospital-pest-control"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={hotelsHospitalsSchema}
      />

      {/* HERO BANNER */}
      <section className="relative w-full">
        <img
          src={bannerImage}
          alt="Pest control for hotels and hospitals in Bangalore by Acuity Pest Control"
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
            Pest Control for Hotels and Hospitals in Bangalore
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-gray-700 leading-8 mb-5">
                Hotels and hospitals are sensitive environments where hygiene,
                safety and reputation are very important. A single pest issue in
                a guest room, ward, kitchen, restaurant or clinical area can
                create discomfort, complaints and hygiene concerns.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-5">
                At <strong>Acuity Pest Control</strong>, we provide professional
                pest control services for hotels, resorts, hospitals, clinics
                and healthcare facilities in Bangalore. Our service is planned
                carefully to reduce disruption to guests, patients, staff and
                daily operations.
              </p>

              <p className="text-lg text-gray-700 leading-8">
                We provide scheduled pest control, AMC support and service
                documentation where required. Our team works with facility
                managers, admin teams and housekeeping teams to maintain clean
                and pest-controlled premises.
              </p>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 shadow-md">
              <h2 className="text-4xl font-bold text-green-900 mb-4">
                Why Hotels & Hospitals Need Pest Control
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Protects guest experience and patient comfort</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Helps maintain hygiene in sensitive spaces</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Reduces pest activity in kitchens and food areas</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Protects brand reputation and customer trust</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>
                    Supports healthcare and hospitality hygiene standards
                  </span>
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
            Common Pests in Hotels & Hospitals
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We handle pests that can affect hygiene, safety and comfort in
            hospitality and healthcare spaces.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🪳",
                name: "Cockroaches",
                desc: "Commonly found in kitchens, pantries, drains, waste areas and food service zones.",
              },
              {
                icon: "🐭",
                name: "Rodents",
                desc: "Rats and mice may damage wiring, contaminate food and enter storage areas.",
              },
              {
                icon: "🐜",
                name: "Ants",
                desc: "Ants can appear in guest rooms, restaurants, storage spaces and food areas.",
              },
              {
                icon: "🪵",
                name: "Termites",
                desc: "Termites can damage wooden furniture, doors, cupboards and interiors.",
              },
              {
                icon: "🦟",
                name: "Mosquitoes",
                desc: "Mosquitoes may breed around stagnant water, gardens and outdoor areas.",
              },
              {
                icon: "🪰",
                name: "Flies",
                desc: "Flies can appear around food preparation areas, waste zones and damp spaces.",
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
            Areas We Protect
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We inspect and treat important areas in hotels, hospitals, resorts
            and healthcare facilities.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🛏️",
                title: "Guest Rooms & Suites",
                desc: "Bedrooms, bathrooms, wardrobes, balconies and room corners.",
              },
              {
                icon: "🏥",
                title: "Hospital Wards & ICUs",
                desc: "Patient rooms, treatment areas, intensive care units and waiting areas.",
              },
              {
                icon: "🍽️",
                title: "Restaurants & Kitchens",
                desc: "Cooking areas, food storage, dining halls, pantries and buffet counters.",
              },
              {
                icon: "🩺",
                title: "Clinical & Surgical Areas",
                desc: "Consultation rooms, labs, treatment zones and sensitive healthcare areas.",
              },
              {
                icon: "🗑️",
                title: "Waste Disposal Areas",
                desc: "Garbage rooms, waste storage, dumpsters and recycling zones.",
              },
              {
                icon: "🌿",
                title: "Gardens & Common Areas",
                desc: "Lobbies, lawns, walkways, parking areas and outdoor spaces.",
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
            Our Hotel & Hospital Pest Control Process
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We follow a planned process to inspect, treat and maintain pest
            control in hospitality and healthcare environments.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Inspection",
                desc: "We inspect guest rooms, wards, kitchens, storage spaces, waste areas and outdoor zones.",
                detail:
                  "We identify pest activity, entry points, breeding areas and high-risk zones.",
              },
              {
                step: "2",
                title: "Treatment Plan",
                desc: "Based on inspection, we prepare a suitable pest control plan for the property.",
                detail:
                  "The plan can include one-time service, scheduled treatment or AMC.",
              },
              {
                step: "3",
                title: "Safe Application",
                desc: "Treatment is applied carefully in selected areas with proper safety procedures.",
                detail:
                  "Service can be planned during low-occupancy or non-operational timings.",
              },
              {
                step: "4",
                title: "Monitoring & Documentation",
                desc: "We provide follow-up guidance and maintenance support to reduce repeat pest issues.",
                detail:
                  "Reports or service documentation can be shared based on requirement.",
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
            We provide hotel and hospital pest control in Bangalore with trained
            technicians, flexible scheduling and practical maintenance support.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🤫",
                title: "Discreet & Professional",
                desc: "Our team works professionally to reduce disturbance to guests, patients and staff.",
              },
              {
                icon: "🛡️",
                title: "Safe Treatment Methods",
                desc: "We follow safe application methods and give proper service instructions.",
              },
              {
                icon: "👨‍🔧",
                title: "Trained Technicians",
                desc: "Our technicians are trained to handle pest control for hotels and healthcare spaces.",
              },
              {
                icon: "🕒",
                title: "Flexible Scheduling",
                desc: "Treatment can be planned during suitable timings to reduce operational disturbance.",
              },
              {
                icon: "📋",
                title: "AMC & Maintenance",
                desc: "We provide scheduled pest control options for ongoing property maintenance.",
              },
              {
                icon: "📄",
                title: "Service Documentation",
                desc: "Reports or treatment records can be provided on request where applicable.",
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
            Hotel & Hospital Pest Control Across Bangalore
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide pest control for hotels, resorts, hospitals and clinics
            in major areas of Bangalore, including:
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
            Get answers to common questions about pest control in hotels and
            hospitals.
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
            commercial establishments.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/office-pest-control"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Office Pest Control
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
            Book Hotel & Hospital Pest Control in Bangalore
          </h2>

          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Maintain a clean, safe and hygienic environment with professional
            pest control for hotels and hospitals by Acuity Pest Control.
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
            ⏱ Flexible scheduling • AMC support • Professional commercial pest
            control
          </p>
        </div>
      </section>
    </div>
  );
};

export default PestControlHotelsHospitals;
