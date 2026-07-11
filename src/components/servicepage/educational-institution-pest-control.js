import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/Pest Control In Educational Institution.jpg";

const faqs = [
  {
    q: "Are the treatments safe for young children and students?",
    a: "Yes, pest control can be safe for students and staff when handled by trained professionals. Our team follows proper safety methods and schedules treatment at suitable times.",
  },
  {
    q: "Can you provide services after school hours or on weekends?",
    a: "Yes, we can plan pest control services during evenings, weekends or holidays based on institution availability and technician schedule.",
  },
  {
    q: "Do you offer AMC for schools and colleges?",
    a: "Yes, we provide AMC and scheduled pest control maintenance options for schools, colleges, universities, hostels and educational campuses.",
  },
  {
    q: "Which pests do you control in educational institutions?",
    a: "We control cockroaches, rodents, ants, termites, mosquitoes, flies, spiders and other crawling or flying insects based on inspection.",
  },
  {
    q: "Do you service universities, hostels and boarding schools?",
    a: "Yes, we provide pest control services for schools, colleges, universities, training centres, hostels, PGs and boarding facilities.",
  },
  {
    q: "How do you prevent pests from coming back?",
    a: "We inspect entry points, breeding areas, food zones and waste areas, then suggest preventive steps and regular monitoring where required.",
  },
  {
    q: "How do you handle pest control in canteens?",
    a: "For canteens and food areas, we follow careful application methods and provide safety instructions to avoid food contamination.",
  },
  {
    q: "Can you provide service documentation?",
    a: "Yes, service reports or treatment documentation can be provided on request based on the type of service selected.",
  },
];

const educationalInstitutionSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id":
      "https://www.acuitypestcontrols.com/educational-institution-pest-control#service",
    name: "Pest Control for Educational Institutions in Bangalore",
    serviceType: "Institutional Pest Control",
    url: "https://www.acuitypestcontrols.com/educational-institution-pest-control",
    description:
      "Professional pest control services for schools, colleges, universities, hostels and educational institutions in Bangalore.",
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
      url: "https://www.acuitypestcontrols.com/educational-institution-pest-control",
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

const EducationalInstitutionPestControl = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      <SEO
        title="Pest Control for Schools in Bangalore | Educational Institution Pest Control"
        description="Get professional pest control for schools, colleges, universities, hostels and educational institutions in Bangalore. Safe pest management by Acuity Pest Control."
        keywords="pest control for schools Bangalore, educational institution pest control, school pest control Bangalore, college pest control Bangalore, university pest management, hostel pest control Bangalore"
        canonical="https://www.acuitypestcontrols.com/educational-institution-pest-control"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={educationalInstitutionSchema}
      />

      {/* HERO BANNER */}
      <section className="relative w-full">
        <img
          src={bannerImage}
          alt="Pest control for educational institutions in Bangalore by Acuity Pest Control"
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
            Pest Control for Educational Institutions in Bangalore
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-gray-700 leading-8 mb-5">
                Educational institutions are high-traffic spaces where students,
                teachers, staff and visitors use classrooms, canteens,
                libraries, laboratories, hostels and common areas every day.
                Pests like cockroaches, rodents, ants, termites, mosquitoes and
                flies can affect hygiene, safety and the learning environment.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-5">
                At <strong>Acuity Pest Control</strong>, we provide professional
                pest control services for schools, colleges, universities,
                training centres, hostels and educational campuses in Bangalore.
                Our team inspects the premises and suggests suitable pest
                management solutions based on the risk areas and pest activity.
              </p>

              <p className="text-lg text-gray-700 leading-8">
                We can schedule pest control services during suitable timings
                such as after school hours, weekends or holidays to reduce
                disturbance to students and staff.
              </p>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 shadow-md">
              <h2 className="text-4xl font-bold text-green-900 mb-4">
                Why Educational Institutions Need Pest Control
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Helps protect student and staff health</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Maintains a clean and hygienic learning space</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Reduces pest activity in classrooms and canteens</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Helps prevent damage to furniture and property</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Supports better hygiene in hostels and kitchens</span>
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
            Common Pests Found in Educational Institutions
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We handle pests that commonly affect schools, colleges, hostels,
            canteens, libraries and campus facilities.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🪳",
                name: "Cockroaches",
                desc: "Found in canteens, kitchens, labs and washrooms. They can affect hygiene in food and common areas.",
              },
              {
                icon: "🐭",
                name: "Rodents",
                desc: "Rats and mice may damage cables, furniture and stored food in pantries or storage rooms.",
              },
              {
                icon: "🐜",
                name: "Ants",
                desc: "Ants can appear in classrooms, staff rooms, canteens, gardens and food storage areas.",
              },
              {
                icon: "🪵",
                name: "Termites",
                desc: "Termites can damage wooden furniture, doors, cupboards, library shelves and interiors.",
              },
              {
                icon: "🦟",
                name: "Mosquitoes",
                desc: "Mosquitoes breed in stagnant water around campus, gardens, drains and outdoor areas.",
              },
              {
                icon: "🪰",
                name: "Flies & Other Insects",
                desc: "Flies and other insects can increase around food waste, damp areas and garbage points.",
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
            We provide pest control for indoor and outdoor areas within schools,
            colleges, universities and educational campuses.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "📚",
                title: "Classrooms",
                desc: "Lecture halls, classrooms, tutorial rooms and study areas.",
              },
              {
                icon: "📖",
                title: "Libraries & Reading Rooms",
                desc: "Book shelves, reading areas, storage rooms and computer labs.",
              },
              {
                icon: "🔬",
                title: "Science Laboratories",
                desc: "Chemistry, physics, biology labs and equipment areas.",
              },
              {
                icon: "👩‍🏫",
                title: "Staff Rooms & Offices",
                desc: "Faculty rooms, admin offices, reception areas and meeting rooms.",
              },
              {
                icon: "🍽️",
                title: "Canteens & Cafeterias",
                desc: "Kitchens, dining areas, food counters and storage zones.",
              },
              {
                icon: "🏠",
                title: "Hostels & Dormitories",
                desc: "Student rooms, common rooms, washrooms and hostel kitchens.",
              },
              {
                icon: "🏟️",
                title: "Auditoriums & Sports Halls",
                desc: "Large gathering areas, indoor halls, gyms and activity spaces.",
              },
              {
                icon: "🌳",
                title: "Campus Grounds",
                desc: "Gardens, pathways, playgrounds and open areas around campus.",
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
            Our Educational Institution Pest Control Process
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We follow a planned process to inspect, treat and maintain pest
            control in educational environments.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Inspection",
                desc: "We inspect classrooms, kitchens, hostels, labs, libraries, gardens, drains and storage areas.",
                detail:
                  "We identify pest activity, breeding points and high-risk zones.",
              },
              {
                step: "2",
                title: "Treatment Plan",
                desc: "We suggest a pest control plan based on the institution type, pest issue and campus layout.",
                detail:
                  "The plan can include one-time service or regular maintenance.",
              },
              {
                step: "3",
                title: "Safe Application",
                desc: "Treatment is applied carefully in selected areas with proper safety steps.",
                detail:
                  "Service can be scheduled during suitable non-class hours.",
              },
              {
                step: "4",
                title: "Monitoring & Prevention",
                desc: "We provide prevention guidance and maintenance support to reduce repeat pest issues.",
                detail:
                  "AMC plans can be prepared for year-round pest control.",
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
            We provide institutional pest control in Bangalore with trained
            technicians, planned schedules and practical maintenance support.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🧒",
                title: "Student-Friendly Planning",
                desc: "Service can be scheduled during suitable timings to reduce disturbance to students and staff.",
              },
              {
                icon: "🕒",
                title: "Flexible Service Hours",
                desc: "Evening, weekend and holiday service options can be planned based on availability.",
              },
              {
                icon: "👨‍🔧",
                title: "Trained Technicians",
                desc: "Our team is trained to handle pest control for schools, colleges and institutions.",
              },
              {
                icon: "🌿",
                title: "Practical Pest Management",
                desc: "We focus on inspection, treatment, monitoring and prevention guidance.",
              },
              {
                icon: "📋",
                title: "Service Reports",
                desc: "Service documentation or reports can be shared on request where applicable.",
              },
              {
                icon: "🏆",
                title: "AMC Support",
                desc: "We provide scheduled pest control options for educational campuses and hostels.",
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
            Educational Institution Pest Control Across Bangalore
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide pest control services for schools, colleges and
            universities in major areas of Bangalore, including:
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
            Get answers to common questions about pest control in educational
            institutions.
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
            various sectors.
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
            Book Pest Control for Your Institution
          </h2>

          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Protect students, staff and campus facilities with professional pest
            control services for educational institutions in Bangalore.
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
            ⏱ Flexible scheduling • AMC support • Professional pest control
            service
          </p>
        </div>
      </section>
    </div>
  );
};

export default EducationalInstitutionPestControl;
