import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/pre-construction-termite-treatment.jpg";

const faqs = [
  {
    q: "When should pre construction termite treatment be done?",
    a: "Pre construction termite treatment should be done before foundation and flooring work is completed. It is usually applied to the soil during the early construction stage.",
  },
  {
    q: "Is pre construction termite treatment required for new buildings?",
    a: "It is highly recommended for new buildings because it helps create a protective barrier before the structure is completed.",
  },
  {
    q: "Do you provide treatment for commercial and industrial buildings?",
    a: "Yes, we provide pre construction termite treatment for homes, apartments, villas, commercial buildings, factories, warehouses and industrial projects.",
  },
  {
    q: "How long does the termite protection last?",
    a: "The result depends on soil condition, construction quality, moisture level and treatment method. Regular inspection helps maintain termite protection.",
  },
  {
    q: "Do you issue treatment reports or certificates?",
    a: "Service reports or treatment documentation can be provided on request based on the type of project and service selected.",
  },
  {
    q: "Can pre construction termite treatment be done after foundation work?",
    a: "Pre construction treatment is best done before foundation and flooring stages. If construction is already complete, post construction termite treatment may be required.",
  },
  {
    q: "Is the treatment safe for future occupants?",
    a: "Yes, termite treatment can be safe when applied by trained professionals using proper methods and recommended safety procedures.",
  },
  {
    q: "How do I book pre construction termite treatment?",
    a: "You can call or WhatsApp Acuity Pest Control with your project details. Our team will schedule a site visit and suggest the right treatment plan.",
  },
];

const preConstructionTermiteSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id":
      "https://www.acuitypestcontrols.com/pre-construction-termite-treatment#service",
    name: "Pre Construction Termite Treatment in Bangalore",
    serviceType: "Termite Control",
    url: "https://www.acuitypestcontrols.com/pre-construction-termite-treatment",
    description:
      "Professional pre construction termite treatment in Bangalore for residential, commercial and industrial construction projects.",
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
      url: "https://www.acuitypestcontrols.com/pre-construction-termite-treatment",
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

const PreConstructionTermiteTreatment = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      <SEO
        title="Pre Construction Termite Treatment in Bangalore | Acuity Pest Control"
        description="Get professional pre construction termite treatment in Bangalore for homes, apartments, commercial buildings and industrial projects. Book Acuity Pest Control."
        keywords="pre construction termite treatment Bangalore, pre construction anti termite treatment, termite protection Bangalore, foundation termite treatment, building termite prevention, anti termite service Bangalore"
        canonical="https://www.acuitypestcontrols.com/pre-construction-termite-treatment"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={preConstructionTermiteSchema}
      />

      {/* HERO BANNER */}
      <section className="relative w-full">
        <img
          src={bannerImage}
          alt="Pre construction termite treatment in Bangalore by Acuity Pest Control"
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
            Pre Construction Termite Treatment in Bangalore
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-gray-700 leading-8 mb-5">
                Pre construction termite treatment is one of the best ways to
                protect a new building from future termite attacks. The
                treatment is done before foundation and flooring work is
                completed, helping create a protective barrier between the soil
                and the structure.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-5">
                At <strong>Acuity Pest Control</strong>, we provide professional
                pre construction termite treatment in Bangalore for residential
                projects, apartments, villas, commercial buildings, factories
                and industrial developments. Our trained team applies treatment
                based on site condition and construction stage.
              </p>

              <p className="text-lg text-gray-700 leading-8">
                Pre construction termite control helps reduce future termite
                damage risk and protects the property before it is fully built.
                It is suitable for builders, contractors, architects, property
                owners and developers.
              </p>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 shadow-md">
              <h2 className="text-4xl font-bold text-green-900 mb-4">
                Why Choose Pre Construction Treatment?
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Treats soil before foundation work is completed</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>
                    Helps create a protective barrier around the structure
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Reduces future subterranean termite entry risk</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>
                    Useful for homes, apartments and commercial projects
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>
                    Cost-effective compared to major termite repair work
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Important for new construction and large projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Key Benefits of Pre Construction Termite Treatment
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            This preventive treatment helps protect new buildings during the
            construction stage itself.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🛡️",
                title: "Early Protection",
                desc: "Termite treatment is applied before the building is fully completed.",
              },
              {
                icon: "🏗️",
                title: "Foundation Protection",
                desc: "Helps treat soil beneath and around foundation areas.",
              },
              {
                icon: "💰",
                title: "Reduces Future Repair Cost",
                desc: "Prevention is usually more cost-effective than repairing termite damage later.",
              },
              {
                icon: "🧪",
                title: "Professional Application",
                desc: "Treatment is applied by trained technicians using suitable methods.",
              },
              {
                icon: "🏢",
                title: "Suitable for All Projects",
                desc: "Useful for homes, apartments, commercial buildings, factories and warehouses.",
              },
              {
                icon: "😌",
                title: "Peace of Mind",
                desc: "Helps property owners and builders reduce future termite risk.",
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

      {/* TERMITE TYPES */}
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Termites We Target in Pre Construction Treatment
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Pre construction treatment mainly helps reduce risk from termites
            that enter buildings from soil and foundation areas.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Subterranean Termites",
                desc: "These termites live underground and can enter buildings through soil, cracks and foundation gaps.",
              },
              {
                name: "Soil-Based Termite Activity",
                desc: "Termite activity that begins from untreated soil and spreads into wooden structures.",
              },
              {
                name: "Moisture-Area Termites",
                desc: "Termites may become active in areas with moisture, poor drainage or damp construction zones.",
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
            Our Pre Construction Termite Treatment Process
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We follow a planned process to apply termite treatment at the right
            construction stage.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Site Assessment",
                desc: "Our team checks the construction site, soil condition and treatment area.",
                detail:
                  "We plan the treatment based on foundation layout and site requirement.",
              },
              {
                step: "2",
                title: "Treatment Application",
                desc: "Termite treatment is applied to selected soil and foundation areas.",
                detail:
                  "Application is done as per site stage and treatment requirement.",
              },
              {
                step: "3",
                title: "Barrier Creation",
                desc: "The treated soil helps create a protective zone around the building foundation.",
                detail:
                  "This helps reduce termite entry from soil into the structure.",
              },
              {
                step: "4",
                title: "Service Documentation",
                desc: "We provide service guidance and documentation where required.",
                detail:
                  "Reports or certificates can be shared based on the selected service.",
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
            We provide pre construction termite treatment in Bangalore with
            trained technicians, site coordination and practical service
            support.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "👨‍🔧",
                title: "Trained Termite Technicians",
                desc: "Our team is trained to handle termite treatment for construction projects.",
              },
              {
                icon: "🧪",
                title: "Suitable Treatment Methods",
                desc: "Treatment is selected based on construction stage, soil and project requirement.",
              },
              {
                icon: "🏗️",
                title: "Project Site Experience",
                desc: "We coordinate with builders, contractors and site teams for smooth execution.",
              },
              {
                icon: "💰",
                title: "Transparent Pricing",
                desc: "We provide clear service guidance and practical pricing based on project size.",
              },
              {
                icon: "⏱️",
                title: "Timely Site Execution",
                desc: "We plan treatment according to construction schedule and site availability.",
              },
              {
                icon: "📋",
                title: "Service Documentation",
                desc: "Reports or treatment documentation can be provided on request.",
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
            Pre Construction Termite Treatment Across Bangalore
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide pre construction termite treatment for construction
            projects in major areas of Bangalore, including:
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
            Get answers to common questions about pre construction termite
            treatment.
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
            We offer a complete range of termite and pest control solutions for
            your property.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/anti-termite-treatment"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Anti-Termite Treatment
            </Link>

            <Link
              to="/post-construction-termite-treatment"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Post Construction Termite Treatment
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
            Book Pre Construction Termite Treatment
          </h2>

          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Protect your building before construction is completed with
            professional pre construction termite treatment by Acuity Pest
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
            ⏱ Site inspection • Project coordination • Professional termite
            control support
          </p>
        </div>
      </section>
    </div>
  );
};

export default PreConstructionTermiteTreatment;
