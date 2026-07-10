import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/postcontrolservice.jpg";

const faqs = [
  {
    q: "How long does post construction termite treatment last?",
    a: "The result depends on soil condition, property maintenance, moisture level and treatment quality. Professional termite treatment gives long-lasting protection when proper prevention steps are followed.",
  },
  {
    q: "Is drilling required for post construction termite treatment?",
    a: "Yes, small holes may be drilled at selected points to inject termiticide into the soil and affected areas. The holes are sealed after treatment.",
  },
  {
    q: "Is post construction termite treatment safe for my family and pets?",
    a: "Yes, termite treatment can be safe when handled by trained professionals. Our team follows proper application methods and gives safety instructions before and after service.",
  },
  {
    q: "Can this treatment control existing termites?",
    a: "Yes, post construction termite treatment is used to control existing termite activity and create a protective barrier to reduce future termite entry.",
  },
  {
    q: "Do you provide a warranty for termite treatment?",
    a: "Warranty depends on the treatment package, property condition and infestation level. Our team will explain the applicable terms before service.",
  },
  {
    q: "Can the treatment be done in occupied homes?",
    a: "Yes, post construction termite treatment can usually be done in occupied homes. Our technician will guide you about safety precautions and preparation.",
  },
  {
    q: "When should post construction termite treatment be done?",
    a: "It can be done after construction is completed or when termite activity is noticed. Early treatment helps reduce the risk of furniture and structural wood damage.",
  },
  {
    q: "What is the difference between pre-construction and post-construction termite treatment?",
    a: "Pre-construction termite treatment is done before or during building construction. Post-construction termite treatment is done after the building is complete using drilling, injection and targeted treatment methods.",
  },
];

const postConstructionTermiteSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id":
      "https://www.acuitypestcontrols.com/post-construction-termite-treatment#service",
    name: "Post Construction Termite Treatment in Bangalore",
    serviceType: "Termite Control",
    url: "https://www.acuitypestcontrols.com/post-construction-termite-treatment",
    description:
      "Professional post construction termite treatment in Bangalore for homes, apartments, villas, offices and commercial properties.",
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
      url: "https://www.acuitypestcontrols.com/post-construction-termite-treatment",
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

const PostConstructionTermiteTreatment = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      <SEO
        title="Post Construction Termite Treatment in Bangalore | Acuity Pest Control"
        description="Get professional post construction termite treatment in Bangalore for homes, apartments, villas and commercial properties. Safe termite control by Acuity Pest Control."
        keywords="post construction termite treatment Bangalore, termite treatment Bangalore, termite control Bangalore, anti termite service Bangalore, post construction anti termite treatment"
        canonical="https://www.acuitypestcontrols.com/post-construction-termite-treatment"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={postConstructionTermiteSchema}
      />

      {/* HERO BANNER */}
      <section className="relative w-full">
        <img
          src={bannerImage}
          alt="Post construction termite treatment in Bangalore by Acuity Pest Control"
          className="w-full h-[40vh] md:h-[110vh] "
        />
      </section>

      {/* INTRODUCTION */}
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm">
            Home Services
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-green-900 mt-6 mb-6 leading-tight">
            Post Construction Termite Treatment in Bangalore
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-md md:text-lg text-gray-700 leading-8 mb-5">
                Even after construction is completed, termites can enter through
                soil, cracks, expansion joints and wooden structures. Without
                proper treatment, they can damage furniture, doors, wardrobes,
                flooring and wooden interiors.
              </p>

              <p className="text-md md:text-lg text-gray-700 leading-8 mb-5">
                At <strong>Acuity Pest Control</strong>, we provide professional
                post construction termite treatment in Bangalore for homes,
                apartments, villas, offices and commercial properties. Our
                treatment helps control existing termite activity and reduce the
                chances of future termite entry.
              </p>

              <p className="text-md md:text-lg text-gray-700 leading-8">
                We use professional drilling and injection methods where
                required to deliver termite treatment into selected areas. Our
                team inspects the property and suggests the right treatment plan
                based on termite activity and property condition.
              </p>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 shadow-md">
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                Why Post Construction Treatment is Essential
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>
                    Helps protect furniture, doors and wooden fixtures
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>
                    Reduces termite damage risk in completed buildings
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>
                    Useful for homes, apartments and commercial spaces
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Cost-effective compared to major repair work</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>
                    Can be done after property construction is complete
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Helps reduce future termite infestation risk</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-green-900 text-center mb-4">
            Signs Your Property Needs Post Construction Termite Treatment
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Detect termite activity early to prevent costly damage. Look for
            these warning signs.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🧱",
                title: "Mud Tubes",
                desc: "Small tunnel-like structures on walls, corners, foundations or wooden areas.",
              },
              {
                icon: "🪵",
                title: "Hollow Wood",
                desc: "Wooden furniture or doors that sound hollow when tapped.",
              },
              {
                icon: "🔍",
                title: "Small Holes & Frass",
                desc: "Tiny holes in wood with fine sawdust-like material around them.",
              },
              {
                icon: "🚪",
                title: "Warped Doors & Windows",
                desc: "Sticking or warped wooden frames due to termite activity or moisture.",
              },
              {
                icon: "🪰",
                title: "Discarded Wings",
                desc: "Piles of wings near windows or lights can indicate termite swarming.",
              },
              {
                icon: "🏚️",
                title: "Damaged Woodwork",
                desc: "Weak furniture, cracked wooden surfaces or damaged fixtures.",
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
                Don&apos;t ignore these signs.
              </span>{" "}
              A professional inspection can confirm termite activity and help
              protect your property.
            </p>
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Termites We Treat in Post Construction
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our treatment targets common termite activity found in homes,
            apartments and commercial buildings in Bangalore.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Subterranean Termites",
                desc: "These termites usually live underground and build mud tubes to reach wooden structures.",
              },
              {
                name: "Drywood Termites",
                desc: "These termites infest dry wood, furniture, door frames, cupboards and flooring.",
              },
              {
                name: "Dampwood Termites",
                desc: "These termites prefer wood with high moisture content and damp areas.",
              },
              {
                name: "Wood-Damaging Termite Activity",
                desc: "Termite activity that affects furniture, doors, cupboards, skirting and wooden interiors.",
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

      {/* PROCESS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Our Post Construction Termite Treatment Process
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We follow a structured process to inspect, treat and help protect
            your completed property from termite damage.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Inspection",
                desc: "Our technicians inspect your property to identify termite activity, entry points and risk areas.",
                detail:
                  "We check walls, flooring, furniture, wooden fixtures and moisture-prone areas.",
              },
              {
                step: "2",
                title: "Drilling",
                desc: "Small holes may be drilled at selected points to reach soil and affected areas.",
                detail:
                  "Drilling is done carefully and the holes are sealed after treatment.",
              },
              {
                step: "3",
                title: "Chemical Injection",
                desc: "Termite treatment is injected into selected areas to create a protective barrier.",
                detail:
                  "Our team follows professional safety methods during application.",
              },
              {
                step: "4",
                title: "Sealing & Protection",
                desc: "After application, drill holes are sealed and prevention guidance is shared.",
                detail:
                  "Follow-up or warranty support depends on the selected package.",
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

      {/* BENEFITS */}
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Benefits of Post Construction Termite Treatment
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Post construction termite treatment helps protect completed
            properties from hidden termite damage.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Property Protection",
                desc: "Helps reduce termite activity around completed buildings and interiors.",
              },
              {
                icon: "🪵",
                title: "Protects Furniture & Woodwork",
                desc: "Helps safeguard doors, windows, wardrobes and wooden fixtures.",
              },
              {
                icon: "🚫",
                title: "Controls Active Infestation",
                desc: "Targets existing termite activity and helps reduce further spread.",
              },
              {
                icon: "🏠",
                title: "Suitable for Homes & Offices",
                desc: "Useful for residential, commercial and apartment properties.",
              },
              {
                icon: "🔧",
                title: "Drilling & Injection Method",
                desc: "Treatment is applied using professional drilling and injection where required.",
              },
              {
                icon: "📋",
                title: "AMC Support",
                desc: "Scheduled maintenance options can be planned for long-term termite control.",
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

      {/* WHY CHOOSE US */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Why Choose Acuity Pest Control?
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide termite treatment in Bangalore with trained technicians,
            safe application methods and practical prevention guidance.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "👨‍🔧",
                title: "Trained Technicians",
                desc: "Our team is trained to handle termite inspection and treatment professionally.",
              },
              {
                icon: "🧪",
                title: "Suitable Termite Treatment",
                desc: "Treatment is selected based on property condition and termite activity.",
              },
              {
                icon: "🔬",
                title: "Professional Equipment",
                desc: "We use suitable drilling and injection tools where required.",
              },
              {
                icon: "💰",
                title: "Transparent Pricing",
                desc: "We provide clear service guidance and practical pricing based on site needs.",
              },
              {
                icon: "⏱️",
                title: "Quick Response Across Bangalore",
                desc: "We help customers book termite inspection and service across Bangalore.",
              },
              {
                icon: "🏆",
                title: "Follow-Up Support",
                desc: "We guide you with post-treatment care and termite prevention steps.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100"
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
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Post Construction Termite Treatment Across Bangalore
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide post construction termite treatment in major areas of
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
                className="bg-gray-50 rounded-xl shadow-sm p-4 text-center border border-gray-100 hover:border-green-300 transition"
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
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-green-900 text-center mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Get answers to common questions about post construction termite
            treatment.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:bg-gray-100 transition border border-gray-100"
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
      <section className="py-10 md:py-20 px-6 bg-white">
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
              to="/anti-termite-treatment"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Anti-Termite Treatment
            </Link>

            <Link
              to="/pre-construction-termite-treatment"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Pre Construction Termite Treatment
            </Link>

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
            Book Post Construction Termite Treatment
          </h2>

          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Protect your completed property from termite damage with
            professional post construction termite treatment by Acuity Pest
            Control.
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
            ⏱ Free inspection • Minimal drilling • Professional termite control
            support
          </p>
        </div>
      </section>
    </div>
  );
};

export default PostConstructionTermiteTreatment;
