import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/Disinfection Services.jpg";

const faqs = [
  {
    q: "What types of properties can be disinfected?",
    a: "We provide disinfection services for homes, apartments, offices, hospitals, clinics, schools, colleges, hotels, restaurants, factories, warehouses, gyms, showrooms and commercial spaces.",
  },
  {
    q: "Are the disinfectants safe for people and pets?",
    a: "Yes, our disinfection service is performed by trained professionals using safe application methods. Our team gives proper instructions before and after the service.",
  },
  {
    q: "How long does the disinfection process take?",
    a: "The duration depends on property size and service requirement. A home may take less time, while a large office, hospital or commercial space may take longer.",
  },
  {
    q: "Do you offer emergency disinfection services?",
    a: "Yes, we provide scheduled and urgent disinfection services based on technician availability and location in Bangalore.",
  },
  {
    q: "Can you provide regular sanitization contracts?",
    a: "Yes, we provide one-time disinfection and regular sanitization maintenance options for offices, apartments, hospitals, schools and commercial spaces.",
  },
  {
    q: "What is the difference between cleaning and disinfection?",
    a: "Cleaning removes visible dirt and dust, while disinfection helps reduce germs and microorganisms on surfaces. Both are important for hygiene.",
  },
  {
    q: "Do you provide certification after disinfection?",
    a: "A service completion report or certificate can be provided on request based on the type of disinfection service selected.",
  },
  {
    q: "What equipment do you use for disinfection?",
    a: "We use suitable spraying, fogging and surface application equipment depending on the property type and disinfection requirement.",
  },
];

const disinfectionSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.acuitypestcontrols.com/disinfection-services#service",
    name: "Disinfection Services in Bangalore",
    serviceType: "Disinfection and Sanitization",
    url: "https://www.acuitypestcontrols.com/disinfection-services",
    description:
      "Professional disinfection and sanitization services in Bangalore for homes, offices, hospitals, schools, commercial buildings and industrial facilities.",
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
      url: "https://www.acuitypestcontrols.com/disinfection-services",
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

const DisinfectionServices = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      <SEO
        title="Disinfection Services in Bangalore | Sanitization Service"
        description="Get professional disinfection services in Bangalore for homes, offices, hospitals, schools and commercial spaces. Safe sanitization by Acuity Pest Control."
        keywords="disinfection services Bangalore, sanitization services Bangalore, office disinfection Bangalore, home sanitization Bangalore, commercial disinfection Bangalore, fogging disinfection Bangalore"
        canonical="https://www.acuitypestcontrols.com/disinfection-services"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={disinfectionSchema}
      />

      {/* HERO BANNER */}
      <section className="relative w-full">
        <img
          src={bannerImage}
          alt="Disinfection services in Bangalore by Acuity Pest Control"
          className="w-full h-[40vh] md:h-[110vh] "
        />
      </section>

      {/* INTRODUCTION */}
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm">
            Sanitization Services
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mt-6 mb-6 leading-tight">
            Disinfection Services in Bangalore
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-gray-700 leading-8 mb-5">
                Maintaining a clean and hygienic environment is important for
                the health and safety of employees, customers, patients,
                residents and families. Frequently touched surfaces such as door
                handles, lift buttons, desks, switches and workstations can
                collect germs if not cleaned and disinfected properly.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-5">
                At <strong>Acuity Pest Control</strong>, we provide professional
                disinfection and sanitization services in Bangalore for homes,
                offices, hospitals, schools, commercial buildings and industrial
                facilities. Our trained team uses suitable spraying, fogging and
                surface application methods based on the property requirement.
              </p>

              <p className="text-lg text-gray-700 leading-8">
                Whether you need one-time disinfection or regular sanitization
                support, we provide flexible service options for residential,
                commercial and industrial premises across Bangalore.
              </p>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 shadow-md">
              <h2 className="text-4xl font-bold text-green-900 mb-4">
                Why Professional Disinfection Matters
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Helps maintain clean and hygienic indoor spaces</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Useful for high-touch surfaces and shared areas</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>
                    Supports safer environments for staff and visitors
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Important for offices, hospitals and schools</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Creates a cleaner and more professional space</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Can be planned as one-time or regular service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AREAS WE DISINFECT */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Areas We Disinfect
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide disinfection services for different types of residential,
            commercial, healthcare, educational and industrial spaces.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏠",
                title: "Homes & Apartments",
                desc: "Living rooms, bedrooms, kitchens, bathrooms and high-touch surfaces.",
              },
              {
                icon: "🏢",
                title: "Corporate Offices",
                desc: "Workstations, meeting rooms, reception areas, washrooms and common spaces.",
              },
              {
                icon: "🏥",
                title: "Hospitals & Clinics",
                desc: "Patient areas, consultation rooms, waiting areas, labs and shared spaces.",
              },
              {
                icon: "🏫",
                title: "Schools & Colleges",
                desc: "Classrooms, libraries, cafeterias, washrooms and activity areas.",
              },
              {
                icon: "🏨",
                title: "Hotels & Restaurants",
                desc: "Guest rooms, dining areas, kitchens, lobbies and restrooms.",
              },
              {
                icon: "🏭",
                title: "Factories & Warehouses",
                desc: "Production floors, storage areas, offices and worker rest areas.",
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
        </div>
      </section>

      {/* METHODS */}
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Our Disinfection Methods
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We choose the suitable method based on property type, area size,
            surface condition and disinfection requirement.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Fogging Disinfection",
                desc: "Fogging helps cover large spaces and reaches areas that are difficult to clean manually.",
              },
              {
                name: "Surface Spraying",
                desc: "Targeted spraying is used for floors, walls, corners, common areas and selected surfaces.",
              },
              {
                name: "High-Touch Surface Wiping",
                desc: "Door handles, switches, desks, railings and counters can be wiped as part of surface disinfection.",
              },
              {
                name: "Office Sanitization",
                desc: "Workstations, meeting rooms, reception areas and washrooms can be sanitized as per requirement.",
              },
              {
                name: "Commercial Disinfection",
                desc: "Suitable for shops, showrooms, hotels, restaurants, warehouses and business premises.",
              },
              {
                name: "Scheduled Sanitization",
                desc: "Regular disinfection visits can be planned for offices, schools, hospitals and apartments.",
              },
            ].map((method, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-sm p-6 border-l-4 border-green-600"
              >
                <h3 className="font-bold text-xl text-green-800 mb-2">
                  {method.name}
                </h3>

                <p className="text-gray-600">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Our Disinfection Process
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We follow a simple process to understand your requirement, prepare
            the area and complete the disinfection service safely.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Site Check",
                desc: "We understand the property type, area size and high-touch points before service.",
                detail:
                  "Special areas and sensitive equipment can be discussed before work.",
              },
              {
                step: "2",
                title: "Preparation",
                desc: "We guide you to cover or move items where needed and prepare the area for service.",
                detail:
                  "Food items, electronics and sensitive materials may need protection.",
              },
              {
                step: "3",
                title: "Application",
                desc: "We apply the suitable disinfection method using spraying, fogging or surface treatment.",
                detail:
                  "Our team follows professional safety steps during application.",
              },
              {
                step: "4",
                title: "Completion Guidance",
                desc: "We provide post-service instructions and hygiene recommendations after service.",
                detail:
                  "A report or certificate can be provided on request where applicable.",
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
            We provide professional disinfection services in Bangalore with
            trained technicians, suitable equipment and flexible service
            scheduling.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🧪",
                title: "Suitable Disinfection Products",
                desc: "We use appropriate products and methods based on property type and hygiene requirement.",
              },
              {
                icon: "👨‍🔧",
                title: "Trained Professionals",
                desc: "Our team is trained to handle sanitization work for homes, offices and commercial spaces.",
              },
              {
                icon: "🛡️",
                title: "Safe Application Process",
                desc: "We follow proper safety steps and provide clear instructions before and after service.",
              },
              {
                icon: "💨",
                title: "Fogging & Surface Treatment",
                desc: "We provide fogging, spraying and high-touch surface treatment based on requirement.",
              },
              {
                icon: "⏱️",
                title: "Flexible Scheduling",
                desc: "Services can be planned as one-time work or regular sanitization maintenance.",
              },
              {
                icon: "💰",
                title: "Transparent Pricing",
                desc: "We provide clear service guidance and practical pricing based on site needs.",
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
            Disinfection Services Across Bangalore
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide professional disinfection services in major areas of
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
            Get answers to common questions about disinfection and sanitization
            services.
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
            We offer a complete range of hygiene and pest control solutions.
          </p>

          <div className="flex flex-wrap gap-4">
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
              to="/common-area-treatment-residential-complex"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Common Area Treatment
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-green-800 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Book Disinfection Services in Bangalore
          </h2>

          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Create a cleaner and safer environment for your family, employees
            and customers with professional disinfection services.
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
            sanitization support
          </p>
        </div>
      </section>
    </div>
  );
};

export default DisinfectionServices;
