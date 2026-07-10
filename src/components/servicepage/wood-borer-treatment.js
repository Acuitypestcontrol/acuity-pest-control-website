import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/woodborerb.jpg";

const faqs = [
  {
    q: "Can wood borers damage wooden furniture badly?",
    a: "Yes, wood borers can damage wooden furniture, doors, windows, wardrobes and interiors if treatment is delayed. Early inspection and treatment helps reduce further damage.",
  },
  {
    q: "Is wood borer treatment safe for my family and pets?",
    a: "Yes, wood borer treatment can be safe when handled by trained professionals. Our team follows proper application methods and gives safety instructions before and after service.",
  },
  {
    q: "Do I need to replace the affected wooden items?",
    a: "Replacement is not always required. It depends on the damage level. Our technician will inspect the wooden item and suggest treatment or replacement only if needed.",
  },
  {
    q: "How long does wood borer treatment take?",
    a: "Treatment time depends on the number of wooden items, infestation level and treatment method. A normal home service may take a few hours depending on site condition.",
  },
  {
    q: "Do you provide wood borer treatment for offices and commercial spaces?",
    a: "Yes, we provide wood borer treatment for homes, offices, hotels, showrooms, restaurants and commercial spaces with wooden furniture or interiors.",
  },
  {
    q: "How can I prevent wood borers from returning?",
    a: "Keep wooden items dry, reduce moisture, inspect old furniture before use and schedule periodic pest inspection for valuable wooden interiors.",
  },
  {
    q: "Does the treatment leave stains on wood?",
    a: "Treatment impact depends on the wood type, surface finish and method used. Our technician will inspect and explain the safest application option before service.",
  },
  {
    q: "Do you provide warranty for wood borer treatment?",
    a: "Warranty depends on the treatment package, wood condition and infestation level. Our team will explain the applicable terms before service.",
  },
];

const woodBorerSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.acuitypestcontrols.com/wood-borer-treatment#service",
    name: "Wood Borer Treatment in Bangalore",
    serviceType: "Wood Borer Control",
    url: "https://www.acuitypestcontrols.com/wood-borer-treatment",
    description:
      "Professional wood borer treatment in Bangalore for wooden furniture, doors, windows, wardrobes, flooring and interiors.",
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
      url: "https://www.acuitypestcontrols.com/wood-borer-treatment",
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

const WoodBorerTreatment = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      <SEO
        title="Wood Borer Treatment in Bangalore | Acuity Pest Control"
        description="Get professional wood borer treatment in Bangalore for wooden furniture, doors, windows, wardrobes and interiors. Book Acuity Pest Control."
        keywords="wood borer treatment Bangalore, wood borer control Bangalore, furniture pest control Bangalore, wood borer injection treatment, wooden furniture protection, wood pest control Bangalore"
        canonical="https://www.acuitypestcontrols.com/wood-borer-treatment"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={woodBorerSchema}
      />

      {/* HERO BANNER */}
      <section className="relative w-full">
        <img
          src={bannerImage}
          alt="Wood borer treatment in Bangalore by Acuity Pest Control"
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
            Wood Borer Treatment in Bangalore
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-gray-700 leading-8 mb-5">
                Wood borers are destructive insects that can silently damage
                wooden furniture, doors, windows, wardrobes, flooring and
                interiors. Their larvae tunnel inside the wood and weaken the
                structure over time. Small holes, fine powder and hollow sound
                are common warning signs.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-5">
                At <strong>Acuity Pest Control</strong>, we provide professional
                wood borer treatment in Bangalore using suitable injection and
                surface treatment methods. Our team inspects the affected wood,
                identifies the level of damage and suggests the right treatment
                approach.
              </p>

              <p className="text-lg text-gray-700 leading-8">
                We serve homes, offices, hotels, showrooms, restaurants and
                commercial spaces with wooden furniture and interiors. Our
                service helps control wood borer activity and protect valuable
                wooden assets.
              </p>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 shadow-md">
              <h2 className="text-4xl font-bold text-green-900 mb-4">
                Why Wood Borer Treatment is Essential
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>
                    Helps reduce damage to wooden furniture and fittings
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Protects wooden doors, windows and wardrobes</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Helps stop spread to other wooden items</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Reduces costly repair or replacement needs</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Useful for premium wooden interiors and furniture</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>
                    Supports long-term wood maintenance and protection
                  </span>
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
            Signs of Wood Borer Infestation
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Wood borers often stay hidden inside wood. Look for these signs to
            detect the issue early.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🔍",
                title: "Tiny Circular Holes",
                desc: "Small round exit holes on wooden furniture, doors, windows or flooring.",
              },
              {
                icon: "🪚",
                title: "Wood Dust & Frass",
                desc: "Fine powder or sawdust-like material below or near wooden items.",
              },
              {
                icon: "🪵",
                title: "Hollow Sounding Wood",
                desc: "Wood sounds hollow when tapped due to internal damage.",
              },
              {
                icon: "🔨",
                title: "Cracked or Splitting Wood",
                desc: "Surface cracks, splits or weak edges on wooden structures.",
              },
              {
                icon: "🚪",
                title: "Damaged Doors & Windows",
                desc: "Wooden frames may become weak, rough or difficult to use.",
              },
              {
                icon: "🐛",
                title: "Visible Insects or Larvae",
                desc: "Adult beetles or larvae may appear from wood surfaces in some cases.",
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
              Early treatment can help reduce further damage to your wooden
              furniture and interiors.
            </p>
          </div>
        </div>
      </section>

      {/* WOOD BORER TYPES */}
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Wood Borer Activity We Treat
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Different wood borer activity may require different treatment
            methods. Our team inspects the damage before treatment.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Powderpost Beetles",
                desc: "These wood borers create fine powder-like frass and commonly affect dry hardwood furniture.",
              },
              {
                name: "Furniture Beetles",
                desc: "These pests can affect furniture, flooring and wooden fixtures, leaving small round holes.",
              },
              {
                name: "Wood-Boring Beetles",
                desc: "Wood-boring beetles can damage wooden structures, softwood, hardwood and interior woodwork.",
              },
            ].map((borer, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-sm p-6 border-l-4 border-green-600"
              >
                <h3 className="font-bold text-xl text-green-800 mb-2">
                  {borer.name}
                </h3>

                <p className="text-gray-600">{borer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Our Wood Borer Treatment Process
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We follow a planned process to inspect, treat and guide you on wood
            care after treatment.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Inspection",
                desc: "Our team inspects wooden furniture, doors, windows, wardrobes and flooring.",
                detail:
                  "We check exit holes, wood powder, surface damage and infestation level.",
              },
              {
                step: "2",
                title: "Injection Treatment",
                desc: "Treatment is injected into visible holes and affected wooden areas where required.",
                detail:
                  "This helps reach internal galleries where wood borer activity may be present.",
              },
              {
                step: "3",
                title: "Surface Treatment",
                desc: "A suitable surface treatment may be applied to selected wooden surfaces.",
                detail:
                  "The method depends on wood type, finish and condition of the item.",
              },
              {
                step: "4",
                title: "Prevention & Follow-Up",
                desc: "We provide guidance on moisture control, wood care and future inspection.",
                detail:
                  "Follow-up or AMC support can be planned based on the infestation level.",
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
            We provide wood borer treatment in Bangalore with trained
            technicians, careful inspection and practical prevention support.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "👨‍🔧",
                title: "Trained Technicians",
                desc: "Our team is trained to inspect and treat wood borer activity professionally.",
              },
              {
                icon: "🧪",
                title: "Suitable Treatment Methods",
                desc: "Treatment is selected based on wood type, surface finish and infestation level.",
              },
              {
                icon: "🛡️",
                title: "Safe Application Process",
                desc: "We follow proper application methods and provide safety instructions.",
              },
              {
                icon: "💰",
                title: "Transparent Pricing",
                desc: "We provide clear service guidance and practical pricing based on site needs.",
              },
              {
                icon: "🔒",
                title: "Wood Protection Guidance",
                desc: "We guide you on moisture control, inspection and care for wooden items.",
              },
              {
                icon: "🏙️",
                title: "Service Across Bangalore",
                desc: "We serve homes, offices and commercial spaces across Bangalore.",
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
            Wood Borer Treatment Across Bangalore
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide wood borer treatment in major areas of Bangalore,
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
            Get answers to common questions about wood borer treatment.
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
              to="/rodent-management-service"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Rodent Control
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
            Book Wood Borer Treatment in Bangalore
          </h2>

          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Protect your wooden furniture, doors, windows and interiors with
            professional wood borer treatment by Acuity Pest Control.
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
            ⏱ Inspection support • Injection treatment • Professional wood borer
            control
          </p>
        </div>
      </section>
    </div>
  );
};

export default WoodBorerTreatment;
