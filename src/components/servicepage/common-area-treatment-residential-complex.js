import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/Common Area Treatment  Residential Complex.jpg";

const faqs = [
  {
    q: "Do you provide services for gated communities and apartment complexes?",
    a: "Yes, we provide pest management services for gated communities, apartment complexes, residential societies and common areas in Bangalore.",
  },
  {
    q: "Is the treatment safe for children, elderly people and pets?",
    a: "Yes, our team follows safe treatment methods and gives proper instructions before and after service to reduce risk for residents, children and pets.",
  },
  {
    q: "Can you provide monthly or quarterly maintenance services?",
    a: "Yes, we provide scheduled pest control maintenance options for apartments, societies and residential communities based on the requirement.",
  },
  {
    q: "Which pests are covered under common area treatment?",
    a: "Common area treatment can cover cockroaches, mosquitoes, rodents, ants, termites, flies, spiders and other crawling or flying insects based on inspection.",
  },
  {
    q: "Do you treat landscaped gardens and water features?",
    a: "Yes, we can inspect and treat gardens, lawns, pathways, water collection points and other outdoor common areas where pests may breed.",
  },
  {
    q: "How soon can you start the service?",
    a: "Service timing depends on technician availability and property location. We can schedule an inspection and plan treatment based on the site condition.",
  },
  {
    q: "Do you provide AMC for apartment pest control?",
    a: "Yes, we provide AMC and scheduled maintenance options for residential complexes, apartments and gated communities.",
  },
  {
    q: "How do I book pest control for my apartment community?",
    a: "You can call or WhatsApp Acuity Pest Control. We will arrange a site inspection and suggest the right pest control plan for your community.",
  },
];

const commonAreaSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id":
      "https://www.acuitypestcontrols.com/common-area-treatment-residential-complex#service",
    name: "Common Area Pest Control for Residential Complexes in Bangalore",
    serviceType: "Common Area Pest Control",
    url: "https://www.acuitypestcontrols.com/common-area-treatment-residential-complex",
    description:
      "Professional common area pest control services in Bangalore for apartment complexes, gated communities and residential societies.",
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
      url: "https://www.acuitypestcontrols.com/common-area-treatment-residential-complex",
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

const CommonAreaTreatmentResidential = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      <SEO
        title="Common Area Pest Control Bangalore | Acuity Pest Control"
        description="Professional common area pest control in Bangalore for apartments, gated communities and residential societies. Customized AMC plans by Acuity Pest Control."
        keywords="common area pest control bangalore, apartment pest control bangalore, gated community pest control, residential society pest control, apartment AMC pest control, residential complex pest management"
        canonical="https://www.acuitypestcontrols.com/common-area-treatment-residential-complex"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={commonAreaSchema}
      />

      {/* HERO BANNER */}
      <section className="relative w-full">
        <img
          src={bannerImage}
          alt="Common Area Pest Control for Residential Complexes in Bangalore"
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
            Common Area Pest Control for Residential Complexes in Bangalore
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-gray-700 leading-8 mb-5">
                Common areas in apartments and residential communities are
                highly vulnerable to pests due to daily usage, waste collection
                points, gardens, drainage systems and parking basements. Pests
                like cockroaches, mosquitoes, rodents, ants and termites can
                create health and hygiene issues for residents.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-5">
                At <strong>Acuity Pest Control</strong>, we provide professional
                common area treatment services for apartment complexes, gated
                communities and residential societies in Bangalore. Our service
                covers shared spaces such as lobbies, corridors, basements,
                garbage areas, gardens and play areas.
              </p>

              <p className="text-lg text-gray-700 leading-8">
                We provide customized treatment plans and scheduled maintenance
                options to help keep your community clean, hygienic and
                pest-controlled throughout the year.
              </p>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 shadow-md">
              <h2 className="text-4xl font-bold text-green-900 mb-4">
                Why Common Area Pest Control is Essential
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>
                    Helps prevent pests from spreading into individual flats
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Maintains clean and hygienic shared spaces</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Reduces resident complaints about pest issues</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Controls pests in garbage, garden and drain areas</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Supports better hygiene in apartment communities</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Useful for AMC and regular preventive maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON AREAS WE COVER */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Common Areas We Cover
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We treat shared spaces inside residential complexes to help reduce
            pest activity and improve community hygiene.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🪁",
                title: "Children's Play Area",
                desc: "Playgrounds, sand areas, slides, swings and surrounding green spaces.",
              },
              {
                icon: "🚗",
                title: "Parking Basement",
                desc: "Basement parking areas, ramps, stairwells and open parking spaces.",
              },
              {
                icon: "🏛️",
                title: "Club House & Community Hall",
                desc: "Meeting rooms, party halls, gyms and indoor recreational spaces.",
              },
              {
                icon: "🗑️",
                title: "Garbage Collection Areas",
                desc: "Dustbins, waste rooms, garbage collection points and recycling zones.",
              },
              {
                icon: "🏢",
                title: "Lift Lobby & Corridors",
                desc: "Lift lobbies, corridors, staircase landings and common passageways.",
              },
              {
                icon: "🌿",
                title: "Garden & Landscape Areas",
                desc: "Lawns, flower beds, hedges, pathways and water collection points.",
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

      {/* PESTS WE CONTROL */}
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Pests We Control in Common Areas
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our common area pest management service covers pests commonly found
            in apartments, societies and gated communities.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Cockroaches",
                desc: "Commonly found near garbage areas, drains, basements and food waste zones.",
              },
              {
                name: "Mosquitoes",
                desc: "Breed in stagnant water, clogged drains, garden areas and water collection points.",
              },
              {
                name: "Rodents",
                desc: "Rats and mice are attracted to garbage, food waste, basements and storage areas.",
              },
              {
                name: "Ants",
                desc: "Ant trails can spread through common areas and enter individual apartments.",
              },
              {
                name: "Termites",
                desc: "Termite activity can affect wooden areas, garden zones and structural wood.",
              },
              {
                name: "Flies & Other Insects",
                desc: "Houseflies, drain flies and other insects can breed in waste and moisture-prone areas.",
              },
            ].map((pest, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-sm p-6 border-l-4 border-green-600"
              >
                <h3 className="font-bold text-xl text-green-800 mb-2">
                  {pest.name}
                </h3>

                <p className="text-gray-600">{pest.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Our Common Area Treatment Process
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We follow a structured process to inspect, treat and maintain pest
            control in apartment common areas.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Inspection",
                desc: "Our team inspects common areas to identify pest activity, breeding points and entry areas.",
                detail:
                  "We check basements, garbage points, gardens, corridors, drains and play areas.",
              },
              {
                step: "2",
                title: "Treatment Plan",
                desc: "We suggest a suitable pest control plan based on property layout and pest issues.",
                detail:
                  "The plan can be one-time treatment or scheduled maintenance.",
              },
              {
                step: "3",
                title: "Safe Application",
                desc: "We apply targeted treatment in affected common areas with proper safety steps.",
                detail:
                  "Treatment can be scheduled at suitable times to reduce disturbance.",
              },
              {
                step: "4",
                title: "Monitoring & Maintenance",
                desc: "We provide follow-up guidance and maintenance support to reduce repeat pest issues.",
                detail: "AMC options can be planned based on community needs.",
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
            We provide common area pest control in Bangalore with trained
            technicians, planned service schedules and practical pest management
            support.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏢",
                title: "Apartment Community Support",
                desc: "We work with apartment communities, property managers and residential societies.",
              },
              {
                icon: "🛡️",
                title: "Safe Treatment Methods",
                desc: "We follow safe application methods and provide proper instructions to residents.",
              },
              {
                icon: "🌿",
                title: "Practical Pest Control Plans",
                desc: "Treatment plans are based on pest type, property layout and common area usage.",
              },
              {
                icon: "👨‍🔧",
                title: "Trained Technicians",
                desc: "Our team is trained to handle common area pest control for residential complexes.",
              },
              {
                icon: "📅",
                title: "Scheduled Maintenance",
                desc: "We offer scheduled service options and AMC support for apartment communities.",
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
            Common Area Pest Control Across Bangalore
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide common area pest control for residential complexes in
            major areas of Bangalore, including:
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
            Get answers to common questions about common area pest control for
            residential complexes.
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
            We offer a complete range of pest control solutions for residential
            and commercial properties.
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
              to="/rodent-management-service"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Rodent Control
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
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-green-800 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Keep Your Community Clean & Pest-Free
          </h2>

          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Protect your residents and improve community hygiene with
            professional common area pest control. Schedule a site inspection
            today.
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
            ⏱ Customized AMC plans • Free inspection • Professional pest control
            support
          </p>
        </div>
      </section>
    </div>
  );
};

export default CommonAreaTreatmentResidential;
