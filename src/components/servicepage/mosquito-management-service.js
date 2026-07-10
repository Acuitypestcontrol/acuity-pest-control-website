import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/1594b5b5-0fca-4ad5-bdea-6096fef1273b.jpg";

const faqs = [
  {
    q: "Is mosquito treatment safe for my family and pets?",
    a: "Yes, mosquito treatment can be safe when handled by trained professionals. Our team follows proper application methods and gives safety instructions before and after service.",
  },
  {
    q: "Where do mosquitoes usually breed?",
    a: "Mosquitoes commonly breed in stagnant water, flower pot trays, blocked drains, gutters, unused tyres, water tanks, sumps, containers and garden areas.",
  },
  {
    q: "Do you provide mosquito control for apartments and gated communities?",
    a: "Yes, we provide mosquito control for homes, apartments, gated communities, residential complexes, offices, hotels and commercial spaces across Bangalore.",
  },
  {
    q: "Can mosquito treatment help reduce dengue and malaria risk?",
    a: "Professional mosquito management helps reduce mosquito activity and breeding areas, which can lower the risk of mosquito-borne diseases when combined with prevention steps.",
  },
  {
    q: "How often should mosquito treatment be done?",
    a: "Treatment frequency depends on season, location, water stagnation and mosquito activity. During monsoon, regular mosquito control may be recommended.",
  },
  {
    q: "What is the difference between fogging and spraying?",
    a: "Fogging helps reduce adult mosquitoes in open and outdoor areas, while spraying can be used for selected surfaces, resting areas and breeding zones based on inspection.",
  },
  {
    q: "Do you treat both indoor and outdoor areas?",
    a: "Yes, we can treat indoor and outdoor areas such as gardens, parking areas, drains, common spaces, balconies, basements and building surroundings.",
  },
  {
    q: "How soon can I see results after mosquito treatment?",
    a: "You may notice reduced mosquito activity after treatment. Long-term results depend on removing stagnant water and following prevention steps.",
  },
];

const mosquitoSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id":
      "https://www.acuitypestcontrols.com/mosquito-management-service#service",
    name: "Mosquito Management Service in Bangalore",
    serviceType: "Mosquito Control",
    url: "https://www.acuitypestcontrols.com/mosquito-management-service",
    description:
      "Professional mosquito management service in Bangalore for homes, apartments, gated communities, offices and commercial spaces.",
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
      url: "https://www.acuitypestcontrols.com/mosquito-management-service",
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

const MosquitoManagementService = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      <SEO
        title="Mosquito Control in Bangalore | Mosquito Management Service"
        description="Get professional mosquito control in Bangalore for homes, apartments, gated communities and commercial spaces. Mosquito fogging and treatment by Acuity Pest Control."
        keywords="mosquito control Bangalore, mosquito management service Bangalore, mosquito fogging Bangalore, mosquito treatment Bangalore, dengue prevention Bangalore, malaria control Bangalore"
        canonical="https://www.acuitypestcontrols.com/mosquito-management-service"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={mosquitoSchema}
      />

      {/* HERO BANNER */}
      <section className="relative w-full">
        <img
          src={bannerImage}
          alt="Mosquito control service in Bangalore by Acuity Pest Control"
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
            Mosquito Control in Bangalore
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-gray-700 leading-8 mb-5">
                Mosquitoes are more than just a disturbance. They can affect
                comfort, hygiene and health in homes, apartments, gardens,
                offices, hotels and commercial spaces. Bangalore’s monsoon,
                water stagnation and garden areas can create suitable breeding
                conditions for mosquitoes.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-5">
                At <strong>Acuity Pest Control</strong>, we provide professional
                mosquito management service in Bangalore to reduce mosquito
                breeding areas and control adult mosquito activity. Our team
                inspects the site and suggests suitable treatment based on the
                property type and mosquito problem.
              </p>

              <p className="text-lg text-gray-700 leading-8">
                We serve homes, apartments, gated communities, offices, hotels,
                hospitals and commercial spaces. Our mosquito control service
                focuses on inspection, source reduction, treatment and
                prevention guidance.
              </p>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 shadow-md">
              <h2 className="text-4xl font-bold text-green-900 mb-4">
                Why Mosquito Management is Important
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">⚠</span>
                  <span>
                    Helps reduce mosquito activity around your property
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">⚠</span>
                  <span>Useful during monsoon and high mosquito seasons</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">⚠</span>
                  <span>Targets stagnant water and common breeding points</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">⚠</span>
                  <span>
                    Improves comfort in homes, gardens and common areas
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">⚠</span>
                  <span>
                    Helps protect families, staff, customers and residents
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">⚠</span>
                  <span>Can be planned as regular maintenance or AMC</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BREEDING AREAS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Common Mosquito Breeding Areas
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Identifying and reducing breeding areas is one of the most important
            steps in mosquito control.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "💧",
                title: "Stagnant Water",
                desc: "Puddles, uncovered tanks, bird baths and standing water around the property.",
              },
              {
                icon: "🪴",
                title: "Flower Pots & Saucers",
                desc: "Over-watered plants and water collected in flower pot trays.",
              },
              {
                icon: "🚰",
                title: "Blocked Drains & Gutters",
                desc: "Clogged drains, gutters and water channels that hold water for days.",
              },
              {
                icon: "🚗",
                title: "Unused Tyres & Containers",
                desc: "Tyres, buckets, tin cans and open containers collecting rainwater.",
              },
              {
                icon: "🛢️",
                title: "Water Tanks & Sumps",
                desc: "Uncovered or leaking overhead tanks, underground sumps and storage areas.",
              },
              {
                icon: "🌿",
                title: "Gardens & Dark Corners",
                desc: "Dense plants, shaded corners and damp outdoor spaces where mosquitoes rest.",
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

      {/* MOSQUITO TYPES */}
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Mosquito Activity We Control
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Different mosquito types may breed in different areas. Our team
            checks the site and suggests suitable control methods.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Container Breeding Mosquitoes",
                desc: "Mosquitoes that breed in clean stagnant water collected in pots, buckets, tyres and containers.",
              },
              {
                name: "Drain & Stagnant Water Mosquitoes",
                desc: "Mosquitoes that breed around drains, sumps, gutters, water channels and damp outdoor spaces.",
              },
              {
                name: "Garden Resting Mosquitoes",
                desc: "Adult mosquitoes that rest in dense plants, shaded corners, parking areas and outdoor spaces.",
              },
            ].map((mosquito, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-sm p-6 border-l-4 border-green-600"
              >
                <h3 className="font-bold text-xl text-green-800 mb-2">
                  {mosquito.name}
                </h3>

                <p className="text-gray-600">{mosquito.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Our Mosquito Management Process
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We follow an integrated approach to reduce mosquito breeding points
            and adult mosquito activity.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Inspection",
                desc: "Our technicians inspect your property to identify breeding sites, resting areas and water stagnation points.",
                detail:
                  "We check gardens, drains, tanks, sumps, containers and outdoor spaces.",
              },
              {
                step: "2",
                title: "Source Reduction",
                desc: "We identify stagnant water and guide you on reducing mosquito breeding areas.",
                detail:
                  "Prevention may include covering tanks, clearing gutters and maintaining gardens.",
              },
              {
                step: "3",
                title: "Treatment Application",
                desc: "We apply suitable mosquito control treatment based on the property and problem area.",
                detail:
                  "Treatment may include fogging, spraying or larval control where required.",
              },
              {
                step: "4",
                title: "Prevention & Monitoring",
                desc: "We provide prevention tips and can plan follow-up or AMC service for continued support.",
                detail:
                  "Regular service is helpful during monsoon or high mosquito activity seasons.",
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
            We provide mosquito control in Bangalore with trained technicians,
            site inspection and practical prevention guidance.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Targeted Mosquito Control",
                desc: "We focus on breeding areas, resting areas and high mosquito activity zones.",
              },
              {
                icon: "🛡️",
                title: "Safe Treatment Methods",
                desc: "Our team follows safe application methods and gives proper service instructions.",
              },
              {
                icon: "🌿",
                title: "Source Reduction Support",
                desc: "We help identify stagnant water and guide you with prevention steps.",
              },
              {
                icon: "👨‍🔧",
                title: "Trained Professionals",
                desc: "Our team is trained to handle mosquito control for homes and commercial spaces.",
              },
              {
                icon: "⏱️",
                title: "Quick Response Across Bangalore",
                desc: "We help customers book mosquito control service quickly across Bangalore.",
              },
              {
                icon: "💰",
                title: "Affordable Service Packages",
                desc: "We provide practical service options based on property needs and season.",
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
            Mosquito Management Across Bangalore
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide professional mosquito control in major areas of
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
            Get answers to common questions about mosquito management and
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
              to="/ant-control-treatment"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Ant Control
            </Link>

            <Link
              to="/rodent-management-service"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Rodent Control
            </Link>

            <Link
              to="/bed-bug-treatment"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Bed Bug Treatment
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-green-800 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Book Mosquito Control in Bangalore
          </h2>

          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Reduce mosquito activity around your property with professional
            mosquito management service by Acuity Pest Control.
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
            mosquito control support
          </p>
        </div>
      </section>
    </div>
  );
};

export default MosquitoManagementService;
