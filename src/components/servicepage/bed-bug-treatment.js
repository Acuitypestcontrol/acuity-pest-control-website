import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/bedbugb.jpg";

const faqs = [
  {
    q: "Can bed bugs spread quickly?",
    a: "Yes, bed bugs can spread quickly through luggage, clothing, furniture, bedding and movement between rooms. Early professional treatment helps control the infestation before it increases.",
  },
  {
    q: "Is bed bug treatment safe for my family and pets?",
    a: "Yes, bed bug treatment can be safe when handled by trained professionals. Our team follows proper safety methods and gives clear instructions before and after service.",
  },
  {
    q: "How many treatments are required to remove bed bugs?",
    a: "The number of treatments depends on the infestation level, property size and hiding areas. Some cases may need follow-up treatment for better results.",
  },
  {
    q: "Can bed bugs come back after treatment?",
    a: "Bed bugs can return if they are brought back through luggage, furniture or clothing. Professional treatment and prevention guidance help reduce repeat infestation.",
  },
  {
    q: "Do you provide bed bug treatment for hotels, hostels and PGs?",
    a: "Yes, we provide bed bug treatment for homes, apartments, hotels, hostels, PGs, dormitories and commercial spaces across Bangalore.",
  },
  {
    q: "Where do bed bugs usually hide?",
    a: "Bed bugs commonly hide in mattresses, bed frames, headboards, sofas, furniture joints, cracks, curtains, luggage and wall gaps.",
  },
  {
    q: "How do I prepare for bed bug treatment?",
    a: "Wash bedding in hot water where possible, reduce clutter, move furniture slightly away from walls and follow the preparation instructions shared by our team.",
  },
  {
    q: "How soon can I sleep in my bed after treatment?",
    a: "The waiting time depends on the treatment method used. Our technician will guide you on when it is safe to use the treated area again.",
  },
];

const bedBugSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.acuitypestcontrols.com/bed-bug-treatment#service",
    name: "Bed Bug Treatment in Bangalore",
    serviceType: "Bed Bug Control",
    url: "https://www.acuitypestcontrols.com/bed-bug-treatment",
    description:
      "Professional bed bug treatment in Bangalore for homes, apartments, hotels, hostels, PGs and commercial spaces.",
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
      url: "https://www.acuitypestcontrols.com/bed-bug-treatment",
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

const BedBugTreatment = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      <SEO
        title="Bed Bug Treatment in Bangalore | Acuity Pest Control"
        description="Professional bed bug treatment in Bangalore for homes, hotels, apartments and PGs. Safe and effective bed bug control by Acuity Pest Control."
        keywords="bed bug treatment bangalore, bed bug control bangalore, bed bug removal bangalore, bed bug exterminator bangalore, hotel bed bug treatment, home bed bug treatment, pest control bed bugs"
        canonical="https://www.acuitypestcontrols.com/bed-bug-treatment"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={bedBugSchema}
      />

      {/* HERO BANNER */}
      <section className="relative w-full">
        <img
          src={bannerImage}
          alt="Bed Bug Treatment in Bangalore by Acuity Pest Control"
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
            Home Services
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mt-6 mb-6 leading-tight">
            Bed Bug Treatment in Bangalore
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-gray-700 leading-8 mb-5">
                Bed bugs are tiny insects that hide inside mattresses, bed
                frames, sofas, furniture and cracks. They usually become active
                at night and can cause itchy bites, discomfort and sleepless
                nights.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-5">
                At <strong>Acuity Pest Control</strong>, we provide professional
                bed bug treatment in Bangalore for homes, apartments, hotels,
                hostels, PGs and commercial spaces. Our trained technicians
                inspect hiding areas and apply suitable treatment to control bed
                bug activity.
              </p>

              <p className="text-lg text-gray-700 leading-8">
                Bed bugs can spread through luggage, clothing, bedding and
                furniture. Early treatment helps control the infestation before
                it spreads to other rooms or nearby properties.
              </p>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 shadow-md">
              <h2 className="text-4xl font-bold text-green-900 mb-4">
                Why Bed Bugs Are a Major Problem
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">⚠</span>
                  <span>Bite during sleep and cause itchy skin irritation</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">⚠</span>
                  <span>Spread through luggage, clothing and furniture</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">⚠</span>
                  <span>Hide in tiny cracks, mattresses and bed frames</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">⚠</span>
                  <span>Cause stress, discomfort and sleeplessness</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">⚠</span>
                  <span>Can multiply if not treated early</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">⚠</span>
                  <span>DIY methods may not reach hidden bed bugs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNS OF INFESTATION */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-green-900 text-center mb-4">
            Signs of Bed Bug Infestation
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Early detection is important for effective treatment. These are the
            common signs that indicate you may have bed bugs.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🩹",
                title: "Red Itchy Bite Marks",
                desc: "Small red bumps or bite marks on exposed skin after sleeping.",
              },
              {
                icon: "🩸",
                title: "Blood Stains on Sheets",
                desc: "Small rust-colored stains on bedsheets, pillow covers or mattresses.",
              },
              {
                icon: "⚫",
                title: "Dark Spots on Mattress",
                desc: "Dark spots on mattress seams, bedding, bed frames or nearby furniture.",
              },
              {
                icon: "🥚",
                title: "Small Eggs & Shells",
                desc: "Tiny white eggs or shed skins near hiding places and bed corners.",
              },
              {
                icon: "👃",
                title: "Musty Smell",
                desc: "A musty or unpleasant smell may appear in heavily affected rooms.",
              },
              {
                icon: "🐜",
                title: "Live Bed Bugs",
                desc: "Seeing flat, oval, reddish-brown insects near beds or furniture.",
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
              <span className="font-semibold">Tip:</span> Bed bugs are good at
              hiding. If you notice these signs, schedule a professional
              inspection.
            </p>
          </div>
        </div>
      </section>

      {/* BED BUG TYPES */}
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Bed Bug Activity We Handle
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Bed bug treatment requires proper inspection because these pests
            hide in several places inside homes, hotels, hostels and apartments.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Mattress Bed Bugs",
                desc: "Bed bugs commonly hide around mattress seams, bed corners, pillows and bedding.",
              },
              {
                name: "Furniture Bed Bugs",
                desc: "Bed bugs can hide inside sofas, chairs, wooden joints, cushions and furniture gaps.",
              },
              {
                name: "Room Crack Infestation",
                desc: "Bed bugs may hide in cracks, wall gaps, electrical boards, curtains and luggage areas.",
              },
            ].map((bug, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-sm p-6 border-l-4 border-green-600"
              >
                <h3 className="font-bold text-xl text-green-800 mb-2">
                  {bug.name}
                </h3>

                <p className="text-gray-600">{bug.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Our Bed Bug Treatment Process
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We follow a step-by-step approach to inspect hiding areas, treat
            affected spaces and guide you with prevention steps.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Inspection",
                desc: "Our technicians inspect mattress seams, bed frames, headboards, furniture, sofas and cracks.",
                detail:
                  "We identify the infestation level and affected hiding areas.",
              },
              {
                step: "2",
                title: "Treatment Plan",
                desc: "Based on inspection, we suggest a suitable bed bug treatment plan for your property.",
                detail:
                  "Treatment depends on room size, infestation level and hiding places.",
              },
              {
                step: "3",
                title: "Application",
                desc: "We apply treatment carefully in affected areas where bed bugs usually hide.",
                detail:
                  "Our team follows professional safety steps during application.",
              },
              {
                step: "4",
                title: "Follow-Up & Prevention",
                desc: "We share post-treatment care and prevention guidance to reduce repeat infestation.",
                detail:
                  "Follow-up may be suggested depending on infestation level.",
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
            We provide professional bed bug treatment in Bangalore with trained
            technicians, safe methods and quick customer support.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Safe for Family & Pets",
                desc: "We follow safe treatment methods and provide proper safety instructions.",
              },
              {
                icon: "🔍",
                title: "Detailed Inspection",
                desc: "We check common hiding areas before suggesting treatment.",
              },
              {
                icon: "👨‍🔧",
                title: "Trained Technicians",
                desc: "Our team is trained to handle bed bug treatment for homes and commercial spaces.",
              },
              {
                icon: "⚡",
                title: "Quick Response",
                desc: "We help you book bed bug treatment quickly across Bangalore.",
              },
              {
                icon: "💰",
                title: "Affordable Pricing",
                desc: "We provide practical pest control options based on property needs.",
              },
              {
                icon: "🏆",
                title: "Follow-Up Support",
                desc: "We guide you with prevention and post-treatment care.",
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
            Bed Bug Control Services Across Bangalore
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide professional bed bug treatment in major areas of
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
            Get answers to common questions about bed bug treatment and
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
            We offer a complete range of pest control solutions to keep your
            home and office pest-free.
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
              to="/anti-termite-treatment"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Termite Control
            </Link>

            <Link
              to="/rodent-control"
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
            Book Bed Bug Treatment in Bangalore
          </h2>

          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Don&apos;t let bed bugs disturb your sleep. Book professional bed
            bug treatment with Acuity Pest Control today.
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
            ⏱ Same-day service available • Free inspection • Professional bed
            bug control support
          </p>
        </div>
      </section>
    </div>
  );
};

export default BedBugTreatment;
