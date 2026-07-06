import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/antcontrol.jpg";

const faqs = [
  {
    q: "Is ant control treatment safe for children and pets?",
    a: "Yes, we use safe pest control methods applied by trained professionals. Our team gives proper safety instructions before and after the treatment.",
  },
  {
    q: "Where do ants usually hide in a house?",
    a: "Ants commonly hide in kitchens, wall cracks, floor gaps, cupboards, gardens, potted plants, near pet food and storage areas.",
  },
  {
    q: "How long does a typical ant treatment session take?",
    a: "Most residential ant control treatments take around 30 minutes to 1 hour, depending on the property size and infestation level.",
  },
  {
    q: "Will ants come back after professional treatment?",
    a: "Professional treatment targets ant trails, nesting areas and entry points, which helps reduce repeat infestations. Prevention steps are also shared after service.",
  },
  {
    q: "Do you provide ant control for apartments and gated communities?",
    a: "Yes, we provide ant control services for apartments, villas, gated communities, independent houses, restaurants, hotels and offices.",
  },
  {
    q: "How soon can I see results after ant treatment?",
    a: "You may notice reduction in ant activity within 24 to 48 hours. Complete results depend on the infestation level and colony activity.",
  },
  {
    q: "Do you offer a warranty on ant control service?",
    a: "Warranty depends on the service type, property condition and treatment plan. Our team will explain the applicable service terms during booking.",
  },
  {
    q: "How do I prepare for ant control treatment?",
    a: "Clean kitchen counters, cover food items, remove open waste, and keep pets away from treatment areas. Our team will guide you before the service.",
  },
];

const antControlSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://acuitypestcontrols.com/ant-control-treatment#service",
    name: "Ant Control Treatment in Bangalore",
    serviceType: "Ant Pest Control",
    url: "https://acuitypestcontrols.com/ant-control-treatment",
    description:
      "Professional ant control treatment in Bangalore for homes, apartments, kitchens, restaurants, offices and commercial spaces.",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://acuitypestcontrols.com/#business",
      name: "Acuity Pest Control",
      url: "https://acuitypestcontrols.com/",
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
      url: "https://acuitypestcontrols.com/ant-control-treatment",
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

const AntControlTreatment = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      <SEO
        title="Ant Control Treatment in Bangalore | Acuity Pest Control"
        description="Get professional ant control treatment in Bangalore for homes, apartments, kitchens, restaurants and offices. Safe and effective ant pest control service."
        keywords="ant control treatment Bangalore, ant control Bangalore, ant pest control Bangalore, ant removal service Bangalore, kitchen ant control, ant control near me"
        canonical="https://acuitypestcontrols.com/ant-control-treatment"
        image="https://acuitypestcontrols.com/logo.png"
        schema={antControlSchema}
      />

      {/* HERO BANNER */}
      <section className="w-full relative">
        <img
          src={bannerImage}
          alt="Ant control treatment in Bangalore by Acuity Pest Control"
          className="w-full h-[40vh] md:h-[110vh] "
        />
      </section>

      {/* INTRODUCTION */}
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm tracking-wide">
            Home Services
          </span>

          <h1 className="text-2xl md:text-5xl font-semibold text-green-900 mt-6 mb-6 leading-tight">
            Ant Control Treatment in Bangalore
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-md text-gray-700 leading-8 mb-5">
                Ants may look small, but they can contaminate food, create
                unhygienic conditions and spread quickly inside kitchens,
                cupboards, walls and garden areas. A single ant colony can house
                thousands of ants, and once they find a food source, they leave
                chemical trails for others to follow.
              </p>

              <p className="text-md text-gray-700 leading-8 mb-5">
                At <strong>Acuity Pest Control</strong>, we provide
                professional, safe and effective ant control treatment in
                Bangalore to eliminate ants at the source and prevent them from
                coming back. Our trained technicians use suitable pest control
                methods based on the infestation level and property type.
              </p>

              <p className="text-md text-gray-700 leading-8">
                Whether you are dealing with sugar ants, carpenter ants, fire
                ants or pavement ants, we provide tailored solutions for homes,
                apartments, restaurants, offices and commercial spaces.
              </p>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 shadow-md">
              <h2 className="text-2xl font-semibold text-green-900 mb-4">
                Why Ants Are a Problem
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">⚠</span>
                  <span>Contaminate food and food preparation surfaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">⚠</span>
                  <span>Spread quickly through kitchens and storage areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">⚠</span>
                  <span>Can damage wooden structures in some cases</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">⚠</span>
                  <span>Cause painful stings in some ant species</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">⚠</span>
                  <span>Reproduce rapidly when left untreated</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">⚠</span>
                  <span>Difficult to remove completely with DIY methods</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNS OF INFESTATION */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-green-900 text-center mb-4">
            Signs of Ant Infestation
          </h2>

          <p className="text-md text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Not sure if you have an ant problem? Here are the most common signs
            that indicate it is time to call a professional pest control team.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🐜",
                title: "Ant Trails",
                desc: "Visible lines of ants moving along kitchen counters, floors or walls.",
              },
              {
                icon: "🍯",
                title: "Ants Near Food",
                desc: "Ants gathering around sugar, fruits, pet food, water sources or open food.",
              },
              {
                icon: "🏠",
                title: "Nests in Walls or Garden",
                desc: "Small soil mounds in gardens or ants emerging from wall cracks.",
              },
              {
                icon: "🔍",
                title: "Cracks & Holes",
                desc: "Ants entering through tiny cracks in floors, walls, windows or doors.",
              },
              {
                icon: "🧼",
                title: "Food Contamination",
                desc: "Opened food packets with ants inside or food storage areas affected by ants.",
              },
              {
                icon: "🔄",
                title: "Recurring Activity",
                desc: "Ants keep coming back even after cleaning or using normal spray.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-xl text-green-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600">
              <span className="font-semibold">Pro Tip:</span> If you see even a
              few ants regularly, there may be a colony nearby. Early treatment
              helps prevent a bigger infestation.
            </p>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-green-900 mb-4">
            Our Ant Control Process
          </h2>

          <p className="text-md text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We follow a systematic approach to identify ant activity, treat the
            affected areas and reduce the chances of repeat infestation.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Inspection",
                desc: "Our technicians inspect your property to identify ant trails, entry points, nesting areas and infestation level.",
                detail:
                  "We check kitchens, bathrooms, gardens, storage areas and structural gaps.",
              },
              {
                step: "2",
                title: "Treatment Plan",
                desc: "Based on inspection, we create a suitable treatment plan for your home, apartment, restaurant or office.",
                detail:
                  "Treatment method depends on ant species, colony activity and affected areas.",
              },
              {
                step: "3",
                title: "Safe Application",
                desc: "We apply treatment carefully in affected areas, focusing on trails, cracks, nesting zones and entry points.",
                detail:
                  "Our team follows proper safety steps during and after service.",
              },
              {
                step: "4",
                title: "Prevention Support",
                desc: "We share prevention tips to reduce food attraction, entry points and recurring ant activity.",
                detail:
                  "Follow-up support may be suggested based on infestation level.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-green-50 rounded-2xl p-8 text-center hover:shadow-lg transition group"
              >
                <div className="w-16 h-16 rounded-full bg-green-700 text-white flex items-center justify-center mx-auto text-2xl font-semibold mb-5 group-hover:bg-green-800 transition">
                  {step.step}
                </div>

                <h3 className="font-semibold text-xl text-green-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-700 mb-3">{step.desc}</p>

                <p className="text-sm text-gray-500 italic">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES OF ANTS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-green-900 mb-4">
            Types of Ants We Treat in Bangalore
          </h2>

          <p className="text-md text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Different ant species require different treatment approaches. Our
            experts identify the problem and use the right method for your
            property.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Sugar Ants",
                desc: "Attracted to sweet foods and liquids. Commonly found in kitchens and pantries.",
              },
              {
                name: "Carpenter Ants",
                desc: "Nest in wood and can affect furniture and wooden structures.",
              },
              {
                name: "Fire Ants",
                desc: "Aggressive ants that can deliver painful stings. Often found in gardens and open areas.",
              },
              {
                name: "Pavement Ants",
                desc: "Nest under pavement, pathways and building gaps. They may enter through cracks.",
              },
              {
                name: "Pharaoh Ants",
                desc: "Tiny yellow-brown ants often seen in commercial kitchens and sensitive areas.",
              },
              {
                name: "Ghost Ants",
                desc: "Very small ants that prefer sweet foods, moisture and hidden indoor spaces.",
              },
            ].map((ant, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm p-6 border-l-4 border-green-600"
              >
                <h3 className="font-semibold text-xl text-green-800 mb-2">
                  {ant.name}
                </h3>
                <p className="text-gray-600">{ant.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-green-900 mb-4">
            Why Choose Acuity Pest Control?
          </h2>

          <p className="text-md text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide professional pest control services in Bangalore with
            trained technicians, safe methods and quick customer support.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Safe For Family & Pets",
                desc: "We follow safe treatment methods and provide proper safety instructions.",
              },
              {
                icon: "🌿",
                title: "Suitable Treatment Plans",
                desc: "Our treatment plan is based on infestation level, property type and ant activity.",
              },
              {
                icon: "👨‍🔧",
                title: "Trained Technicians",
                desc: "Our team is trained to inspect, identify and treat pest activity professionally.",
              },
              {
                icon: "⚡",
                title: "Quick Service",
                desc: "We respond quickly and help you book ant control service across Bangalore.",
              },
              {
                icon: "💰",
                title: "Affordable Pricing",
                desc: "We provide clear service guidance with practical and affordable pest control options.",
              },
              {
                icon: "🏆",
                title: "Long-Lasting Results",
                desc: "We focus on treatment and prevention steps to reduce repeat ant activity.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-green-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-green-100"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-xl text-green-900 mb-3">
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
          <h2 className="text-3xl md:text-3xl font-semibold text-center text-green-900 mb-4">
            Ant Control Services Across Bangalore
          </h2>

          <p className="text-md text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide professional ant control treatment in all major areas of
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
          <h2 className="text-2xl font-semibold text-green-900 text-center mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-md text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Get answers to the most common questions about our ant control
            treatment services.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition border border-gray-100"
              >
                <h3 className="font-semibold text-green-900 text-md mb-2">
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
          <h2 className="text-3xl md:text-2xl font-semibold text-green-900 mb-4">
            Explore Our Other Pest Control Services
          </h2>

          <p className="text-md text-gray-600 max-w-2xl mb-8">
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
              to="/bed-bug-treatment"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Bed Bug Treatment
            </Link>

            <Link
              to="/termite-treatment"
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

            <Link
              to="/mosquito-control"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Mosquito Control
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-green-800 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-2xl md:text-5xl font-semibold mb-5">
            Book Ant Control Treatment in Bangalore
          </h2>

          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Don&apos;t let ants take over your kitchen and living spaces. Book
            professional ant control treatment with Acuity Pest Control today.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919941229005"
              className="bg-white hover:bg-gray-100 text-green-800 px-8 py-4 rounded-full font-semibold text-md transition shadow-lg"
            >
              📞 Call +91 99412 29005
            </a>

            <Link
              to="/contact"
              className="bg-green-700 hover:bg-green-600 text-white border-2 border-white/50 px-8 py-4 rounded-full font-semibold text-md transition shadow-lg"
            >
              Request a Free Quote
            </Link>
          </div>

          <p className="text-sm text-white/70 mt-6">
            ⏱ Same-day service available • Free inspection • Professional pest
            control support
          </p>
        </div>
      </section>
    </div>
  );
};

export default AntControlTreatment;
