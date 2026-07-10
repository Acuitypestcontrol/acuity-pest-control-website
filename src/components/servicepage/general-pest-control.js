import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/generalpestcontrolb.jpg";

const faqs = [
  {
    q: "Is general pest control safe for my family and pets?",
    a: "Yes, general pest control can be safe when handled by trained professionals. Our team follows proper application methods and gives safety instructions before and after service.",
  },
  {
    q: "How long does general pest control treatment take?",
    a: "The treatment duration depends on property size, pest activity and treatment requirement. Most home pest control services can be completed within a short service visit.",
  },
  {
    q: "Which pests are covered in general pest control?",
    a: "General pest control can cover cockroaches, ants, spiders, silverfish, centipedes, houseflies, rodents and other common crawling or flying pests based on inspection.",
  },
  {
    q: "Do I need to vacate my home during treatment?",
    a: "In most cases, complete vacation is not required. Our technician will guide you depending on the treatment method used and areas treated.",
  },
  {
    q: "Do you provide pest control for apartments and flats?",
    a: "Yes, we provide pest control for apartments, flats, independent houses, villas, gated communities and rental properties across Bangalore.",
  },
  {
    q: "How soon can I see results?",
    a: "You may notice reduced pest activity after treatment. Complete results depend on pest type, infestation level, hygiene condition and follow-up prevention steps.",
  },
  {
    q: "What is the difference between general pest control and specialized services?",
    a: "General pest control targets common pests. Specialized services like termite treatment, bed bug treatment or rodent control use specific methods for those particular pests.",
  },
  {
    q: "Do you offer AMC for pest control?",
    a: "Yes, we provide scheduled pest control and AMC options for homes, apartments, offices and commercial spaces based on requirement.",
  },
];

const generalPestSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.acuitypestcontrols.com/general-pest-control#service",
    name: "General Pest Control Services in Bangalore",
    serviceType: "General Pest Control",
    url: "https://www.acuitypestcontrols.com/general-pest-control",
    description:
      "Professional general pest control services in Bangalore for homes, apartments, villas and residential spaces to control cockroaches, ants, spiders, silverfish, rodents and other common pests.",
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
      url: "https://www.acuitypestcontrols.com/general-pest-control",
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

const GeneralPestControl = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      <SEO
        title="General Pest Control Services in Bangalore | Acuity Pest Control"
        description="Get professional general pest control services in Bangalore for homes, apartments and villas. Control cockroaches, ants, spiders, silverfish and common pests."
        keywords="general pest control Bangalore, home pest control Bangalore, pest control services Bangalore, residential pest control Bangalore, apartment pest control Bangalore, cockroach control, ant control, rodent control"
        canonical="https://www.acuitypestcontrols.com/general-pest-control"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={generalPestSchema}
      />

      {/* HERO BANNER */}
      <section className="relative w-full">
        <img
          src={bannerImage}
          alt="General pest control services in Bangalore by Acuity Pest Control"
          className="w-full h-[40vh] md:h-[110vh] "
        />
      </section>

      {/* INTRODUCTION */}
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Home Pest Control Services
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 leading-tight">
            General Pest Control Services in Bangalore
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-md text-gray-700 leading-8 mb-5">
                Pests such as cockroaches, ants, spiders, silverfish and rodents
                are not just irritating. They can contaminate food, spread
                germs, damage property and create an unhygienic environment
                inside your home or apartment.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-5">
                At <strong>Acuity Pest Control</strong>, we provide safe and
                effective general pest control services in Bangalore for homes,
                apartments, villas and residential spaces. Our treatment helps
                control a wide range of common pests using professional methods
                based on inspection.
              </p>

              <p className="text-lg text-gray-700 leading-8">
                We follow a complete approach from inspection and targeted
                treatment to prevention guidance. Whether you need one-time pest
                control or regular maintenance, we provide service options based
                on your pest problem and property type.
              </p>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 shadow-md">
              <h2 className="text-4xl font-bold text-green-900 mb-4">
                Pests We Control
              </h2>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Cockroaches",
                  "Ants",
                  "Spiders",
                  "Silverfish",
                  "Centipedes",
                  "Rodents",
                  "House Flies",
                  "Other Crawling Pests",
                ].map((pest, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 rounded-xl shadow-sm text-gray-800 font-semibold text-center"
                  >
                    ✅ {pest}
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-500 mt-4 italic">
                * We also treat other pests based on inspection and service
                requirement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNS OF INFESTATION */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-green-900 text-center mb-4">
            Signs You Need General Pest Control
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Early detection of pest activity can help prevent a bigger
            infestation. Look out for these signs and call us for professional
            pest control support.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "👀",
                title: "Frequent Pest Sightings",
                desc: "Seeing live pests in the kitchen, bathroom, corners, storage areas or near food sources.",
              },
              {
                icon: "💩",
                title: "Droppings or Bad Odor",
                desc: "Small dark droppings, musty smells or unusual odor in hidden areas.",
              },
              {
                icon: "🏠",
                title: "Nests or Hiding Spots",
                desc: "Finding nests near walls, sinks, appliances, storage rooms or dark corners.",
              },
              {
                icon: "🤧",
                title: "Allergies or Skin Irritation",
                desc: "Bite marks, irritation or allergic reactions caused by pests or pest activity.",
              },
              {
                icon: "🍽️",
                title: "Contaminated Food Items",
                desc: "Damaged food packaging, gnaw marks or food contamination.",
              },
              {
                icon: "🔄",
                title: "Recurring Pests",
                desc: "Pests keep returning even after cleaning or using normal DIY sprays.",
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
              <span className="font-semibold">Pro Tip:</span> If you notice
              these signs, act early. Timely treatment helps reduce pest
              activity before it spreads.
            </p>
          </div>
        </div>
      </section>

      {/* COMMON PESTS */}
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Common Household Pests We Treat
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our general pest control service targets a wide range of pests that
            commonly affect homes and apartments in Bangalore.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Cockroaches",
                desc: "Commonly found in kitchens, bathrooms, drains and dark corners.",
              },
              {
                name: "Ants",
                desc: "Ants can contaminate food and appear in kitchens, gardens and wall cracks.",
              },
              {
                name: "Spiders",
                desc: "Spiders create webs in corners, ceilings, storage spaces and less-used areas.",
              },
              {
                name: "Silverfish",
                desc: "Silverfish can damage books, papers, clothing and wallpaper in humid places.",
              },
              {
                name: "Centipedes & Millipedes",
                desc: "Often found in damp places, bathrooms, gardens and storage areas.",
              },
              {
                name: "Rodents",
                desc: "Rats and mice can damage wires, furniture and contaminate food areas.",
              },
              {
                name: "House Flies",
                desc: "House flies can affect hygiene and contaminate food surfaces.",
              },
              {
                name: "Carpet Beetles",
                desc: "Can damage carpets, upholstery, fabrics and natural fibers.",
              },
              {
                name: "Other Crawling Pests",
                desc: "Occasional crawling pests may enter through cracks, gaps, drains and doors.",
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
            Our General Pest Control Process
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We follow a step-by-step process to inspect, treat and guide you
            with prevention steps for better pest control results.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Inspection",
                desc: "Our technicians inspect your home to identify pest activity, hiding areas and entry points.",
                detail:
                  "We check kitchens, bathrooms, storage areas, drains, cracks and structural gaps.",
              },
              {
                step: "2",
                title: "Treatment Plan",
                desc: "Based on inspection, we suggest a suitable treatment plan for the pests found.",
                detail:
                  "Treatment may include sprays, gel baits, traps, dusting or other professional methods.",
              },
              {
                step: "3",
                title: "Safe Application",
                desc: "We apply treatment carefully in affected and high-risk areas.",
                detail:
                  "Our team follows proper safety procedures during treatment.",
              },
              {
                step: "4",
                title: "Prevention & Follow-Up",
                desc: "We share prevention tips to reduce food sources, moisture and pest entry points.",
                detail:
                  "Follow-up or AMC support can be suggested based on the pest issue.",
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
            We provide general pest control in Bangalore with trained
            technicians, safe application methods and quick customer support.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "👨‍🔧",
                title: "Experienced Professionals",
                desc: "Our team is trained to handle common household pest issues professionally.",
              },
              {
                icon: "🛡️",
                title: "Safe Treatment Methods",
                desc: "We follow safe application methods and provide proper service instructions.",
              },
              {
                icon: "💰",
                title: "Affordable Service Packages",
                desc: "We provide practical pest control options based on your property needs.",
              },
              {
                icon: "⚡",
                title: "Targeted Treatment",
                desc: "We focus on affected areas, hiding places and pest entry points.",
              },
              {
                icon: "⏱️",
                title: "Quick Response Across Bangalore",
                desc: "We help customers book pest control service across Bangalore quickly.",
              },
              {
                icon: "🏆",
                title: "Prevention Guidance",
                desc: "We guide you with simple steps to reduce repeat pest activity.",
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
            General Pest Control Service Areas in Bangalore
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide general pest control services in major areas of
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
            Get answers to common questions about general pest control services.
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
              to="/ant-control-treatment"
              className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Ant Control
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
            Book General Pest Control in Bangalore
          </h2>

          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Protect your home from unwanted pests with safe and professional
            general pest control services by Acuity Pest Control.
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
            ⏱ Same-day service available • Free inspection • Professional pest
            control support
          </p>
        </div>
      </section>
    </div>
  );
};

export default GeneralPestControl;
