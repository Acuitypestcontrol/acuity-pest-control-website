import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/servicebanner.jpg";

import blogImg from "../../images/cockroch.png";
import blogImg2 from "../../images/Signs of Termite Infestation in Your Home.jpg";
import blogImg3 from "../../images/Professional Pest Control vs DIY.jpg";
import blogImg4 from "../../images/Monsoon Pest Control Tips for Bangalore Homes.jpg";

const canonicalUrl =
  "https://www.acuitypestcontrols.com/blogs/rat-control-tips-for-homes";

const blogImageUrl =
  "https://www.acuitypestcontrols.com/images/rat-control-tips-for-homes.jpg";

const faqs = [
  {
    q: "How do rats enter homes?",
    a: "Rats can enter through drain pipes, wall gaps, roof openings, broken doors, windows, utility lines, ventilation openings and small cracks around a building.",
  },
  {
    q: "Can rats climb walls?",
    a: "Yes, rats are strong climbers. They can climb rough walls, pipes, grills, trees, cables and nearby structures to enter homes and buildings.",
  },
  {
    q: "Are rats dangerous?",
    a: "Rats can contaminate food, damage electrical wiring, chew stored materials and create hygiene problems inside homes and commercial properties.",
  },
  {
    q: "How long does rat control take?",
    a: "The duration depends on the infestation level, number of entry points, nesting areas and surrounding conditions. A professional inspection helps determine the correct rodent control plan.",
  },
  {
    q: "Do you provide rat control in Bangalore?",
    a: "Yes, Acuity Pest Control provides professional rat and rodent control services across Bangalore for homes, apartments, offices, warehouses, restaurants and commercial properties.",
  },
  {
    q: "Why do rats keep returning after using traps?",
    a: "Rats may continue returning when food, water, shelter and entry points remain available. Traps alone may not solve the problem without inspection, proofing and monitoring.",
  },
];

const ratControlBlogSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#blogposting`,
    headline: "Rat Control Tips for Homes: Complete Guide to Prevent Rats",
    description:
      "Learn how to identify rat infestation, prevent rodent entry and protect your home with practical rat control tips from Acuity Pest Control Bangalore.",
    image: {
      "@type": "ImageObject",
      url: blogImageUrl,
    },
    datePublished: "2026-06-26",
    dateModified: "2026-06-26",
    author: {
      "@type": "Organization",
      name: "Acuity Pest Control",
      url: "https://www.acuitypestcontrols.com/",
    },
    publisher: {
      "@type": "Organization",
      name: "Acuity Pest Control",
      url: "https://www.acuitypestcontrols.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://www.acuitypestcontrols.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
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
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.acuitypestcontrols.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: "https://www.acuitypestcontrols.com/blogs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Rat Control Tips for Homes",
        item: canonicalUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "Rat Control Tips for Homes",
    description:
      "Learn the common signs of rat infestation, what attracts rats and how professional rodent control can help protect properties in Bangalore.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.acuitypestcontrols.com/#website",
      url: "https://www.acuitypestcontrols.com/",
      name: "Acuity Pest Control",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [
        "h1",
        "#why-rat-control p",
        "#what-attracts h2",
        "#signs h2",
        "#prevention-tips h2",
        "#professional-process h2",
        "#faq h2",
      ],
    },
  },
];

const RatControlTipsForHomes = () => {
  const attractants = [
    {
      title: "Food leftovers",
      description:
        "Uncovered food, crumbs, grains and food residue can attract rats into kitchens and storage areas.",
    },
    {
      title: "Open garbage bins",
      description:
        "Garbage containing food waste can provide a regular feeding source for rodents.",
    },
    {
      title: "Water leaks",
      description:
        "Leaking taps, drainage areas and standing water provide moisture that rats need to survive.",
    },
    {
      title: "Cluttered storage",
      description:
        "Cardboard boxes, unused furniture and stored materials provide hiding and nesting areas.",
    },
    {
      title: "Pet food",
      description:
        "Pet food left uncovered overnight can attract rats and other pests.",
    },
    {
      title: "Garden waste",
      description:
        "Dense vegetation, fallen fruits, waste materials and outdoor clutter can shelter rodents.",
    },
  ];

  const signs = [
    {
      title: "Rat droppings",
      description:
        "Droppings may appear near kitchens, cupboards, food storage areas, walls and hidden corners.",
    },
    {
      title: "Scratching noises",
      description:
        "Movement inside ceilings, walls, cabinets and storage rooms may be heard during the night.",
    },
    {
      title: "Chewed packaging",
      description:
        "Rats may damage food packets, cardboard boxes, plastic containers and stored materials.",
    },
    {
      title: "Gnaw marks",
      description:
        "Fresh gnaw marks may appear on furniture, doors, plastic pipes and electrical wiring.",
    },
    {
      title: "Burrows and holes",
      description:
        "Holes may be visible near walls, drains, gardens, utility areas and building foundations.",
    },
    {
      title: "Unpleasant odour",
      description:
        "Heavy rodent activity can create a strong smell in ceilings, cabinets and enclosed storage spaces.",
    },
  ];

  const risks = [
    {
      title: "Food contamination",
      description:
        "Rodents can contaminate stored food, cooking areas, utensils and surfaces with droppings and urine.",
    },
    {
      title: "Electrical damage",
      description:
        "Rats may chew electrical wires, increasing the risk of equipment failure, short circuits or fire.",
    },
    {
      title: "Property damage",
      description:
        "Furniture, packaging, insulation, pipes and stored materials may be damaged by constant gnawing.",
    },
    {
      title: "Hygiene concerns",
      description:
        "Rat activity can create serious sanitation issues in homes, kitchens, restaurants and warehouses.",
    },
    {
      title: "Business reputation",
      description:
        "Rodent sightings can affect customer confidence in restaurants, offices and commercial properties.",
    },
    {
      title: "Recurring infestation",
      description:
        "Without entry-point control and monitoring, rodent activity may continue even after individual rats are removed.",
    },
  ];

  const tips = [
    {
      title: "Seal entry points",
      description:
        "Close gaps, cracks and holes around doors, windows, drains, pipes, utility lines and roof openings.",
    },
    {
      title: "Store food properly",
      description:
        "Keep grains, snacks, pet food and other items inside strong airtight containers.",
    },
    {
      title: "Manage garbage",
      description:
        "Dispose of waste daily and use dustbins with tight-fitting lids.",
    },
    {
      title: "Remove clutter",
      description:
        "Clear unused boxes, papers, furniture and materials from kitchens, balconies and storage rooms.",
    },
    {
      title: "Repair water leaks",
      description:
        "Fix leaking taps, pipes and drains and avoid stagnant water around the property.",
    },
    {
      title: "Use traps carefully",
      description:
        "Place suitable traps only in safe locations away from children, pets and food preparation areas.",
    },
  ];

  const process = [
    {
      title: "Property inspection",
      description:
        "The property is inspected for droppings, gnaw marks, movement routes, nesting areas and food sources.",
    },
    {
      title: "Entry-point checking",
      description:
        "Doors, drains, pipes, roof openings, vents and structural gaps are checked for rodent access.",
    },
    {
      title: "Bait station placement",
      description:
        "Secure bait stations may be placed in suitable locations based on rodent activity and site safety.",
    },
    {
      title: "Rodent trapping",
      description:
        "Suitable traps may be used in identified movement routes and high-activity areas.",
    },
    {
      title: "Monitoring support",
      description:
        "Rodent activity is monitored to check movement, feeding and control progress.",
    },
    {
      title: "Prevention guidance",
      description:
        "Recommendations are provided for proofing, food storage, waste management and long-term prevention.",
    },
  ];

  const whyChooseUs = [
    {
      title: "Trained technicians",
      description:
        "Our technicians inspect rodent activity and recommend treatment based on the property condition.",
    },
    {
      title: "Residential and commercial service",
      description:
        "We provide rodent control for homes, apartments, restaurants, offices, warehouses and businesses.",
    },
    {
      title: "Site-based treatment",
      description:
        "Rodent control is planned according to entry points, activity level and surrounding conditions.",
    },
    {
      title: "Monitoring support",
      description:
        "Monitoring may be recommended to track rodent activity and treatment performance.",
    },
    {
      title: "Prevention guidance",
      description:
        "Customers receive practical advice about proofing, waste management and food storage.",
    },
    {
      title: "Service across Bangalore",
      description:
        "Rodent inspection and control support is available across major Bangalore locations.",
    },
  ];

  const areas = [
    "Whitefield",
    "Electronic City",
    "HSR Layout",
    "JP Nagar",
    "Koramangala",
    "Indiranagar",
    "Marathahalli",
    "Hebbal",
    "BTM Layout",
    "Jayanagar",
    "Sarjapur Road",
    "Banashankari",
  ];

  const tocItems = [
    {
      id: "why-rat-control",
      label: "Why Rat Control Is Important",
    },
    {
      id: "what-attracts",
      label: "What Attracts Rats?",
    },
    {
      id: "signs",
      label: "Signs of Rat Infestation",
    },
    {
      id: "health-risks",
      label: "Health and Property Risks",
    },
    {
      id: "prevention-tips",
      label: "Rat Control Tips for Homes",
    },
    {
      id: "professional-process",
      label: "Our Rat Control Process",
    },
    {
      id: "why-acuity",
      label: "Why Choose Acuity",
    },
    {
      id: "faq",
      label: "Frequently Asked Questions",
    },
    {
      id: "service-areas",
      label: "Bangalore Service Areas",
    },
  ];

  const relatedPosts = [
    {
      title: "Complete Guide to Pest Control in Bangalore",
      slug: "/blogs/pest-control-bangalore-guide",
      excerpt:
        "Everything you need to know about professional pest control services in Bangalore.",
      image: blogImg,
    },
    {
      title: "Signs of Termite Infestation in Your Home",
      slug: "/blogs/signs-of-termite-infestation",
      excerpt:
        "Learn the common termite warning signs every homeowner should know.",
      image: blogImg2,
    },
    {
      title: "Professional Pest Control vs DIY",
      slug: "/blogs/pest-control-vs-diy",
      excerpt:
        "Compare professional pest control services with common DIY pest treatment methods.",
      image: blogImg3,
    },
    {
      title: "Monsoon Pest Control Tips for Bangalore Homes",
      slug: "/blogs/monsoon-pest-control",
      excerpt:
        "Learn how to protect your home from common pests during Bangalore's rainy season.",
      image: blogImg4,
    },
  ];

  const categories = [
    "Cockroaches",
    "Termites",
    "Rodents",
    "Mosquitoes",
    "Bed Bugs",
    "Ants",
    "General Tips",
  ];

  return (
    <div className="w-full bg-white text-gray-800 overflow-hidden">
      <SEO
        title="Rat Control Tips for Homes | Rodent Control Bangalore"
        description="Learn rat control tips for homes, signs of rat infestation, health risks, entry points and when to book professional rodent control in Bangalore."
        keywords="rat control Bangalore, rodent control Bangalore, rat infestation signs, rat prevention tips, rodent pest control, rat control tips for homes, rat treatment Bangalore, professional rodent control"
        canonical={canonicalUrl}
        image={blogImageUrl}
        schema={ratControlBlogSchema}
      />

      {/* HERO */}
      <section className="relative h-[48vh] sm:h-[55vh] md:h-[110vh]">
        <img
          src={bannerImage}
          alt="Rat control tips for homes and rodent prevention guide"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* BLOG LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          {/* MAIN CONTENT */}
          <main className="w-full lg:w-2/3">
            {/* BREADCRUMB */}
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-600"
            >
              <Link
                to="/"
                className="hover:text-green-700 hover:underline transition"
              >
                Home
              </Link>

              <span aria-hidden="true">/</span>

              <Link
                to="/blogs"
                className="hover:text-green-700 hover:underline transition"
              >
                Blogs
              </Link>

              <span aria-hidden="true">/</span>

              <span
                className="font-semibold text-[#063b3f]"
                aria-current="page"
              >
                Rat Control Tips for Homes
              </span>
            </nav>

            {/* BLOG HEADER */}
            <header className="mb-10">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Rodent Control Bangalore
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-[#063b3f] mt-4 mb-5 leading-tight">
                Rat Control Tips for Homes
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-5">
                <span>📅 Published: June 26, 2026</span>
                <span aria-hidden="true">•</span>
                <span>Reviewed: June 26, 2026</span>
                <span aria-hidden="true">•</span>
                <span>⏱ 9 min read</span>
              </div>

              <p className="text-gray-700 leading-8">
                Rats can enter homes through small gaps, drains, pipes, utility
                openings and roof spaces. This guide explains how to identify a
                rat infestation, what attracts rodents, how to reduce rodent
                entry and when professional rat control may be required.
              </p>
            </header>

            {/* TABLE OF CONTENTS */}
            <div className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6 mb-10">
              <p className="font-black text-[#063b3f] mb-4">
                📑 Table of Contents
              </p>

              <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-green-700 font-medium hover:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* WHY RAT CONTROL */}
            <section id="why-rat-control" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Rodent Infestation
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Why Rat Control Is Important for Homes
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                Rats are common pest problems in homes, apartments, restaurants,
                warehouses and commercial properties. They can enter through
                drains, pipes, wall gaps, damaged doors, ventilation openings
                and roof spaces.
              </p>

              <p className="text-gray-700 leading-8 mb-5">
                Once inside, rats may damage food packets, furniture, wiring,
                insulation, pipes and stored materials. They often remain hidden
                during the day and become active at night, making early
                infestation difficult to notice.
              </p>

              <p className="text-gray-700 leading-8">
                Early control can help protect food, property and hygiene.
                Professional rodent treatment may be required when activity
                continues after traps or basic home remedies. Explore our{" "}
                <Link
                  to="/rodent-management-service"
                  className="text-green-700 font-semibold hover:underline"
                >
                  rodent control service in Bangalore
                </Link>{" "}
                for professional inspection and support.
              </p>
            </section>

            {/* WHAT ATTRACTS */}
            <section id="what-attracts" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Food, Water and Shelter
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                What Attracts Rats to Your Home?
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                Rats usually enter buildings while searching for food, water and
                shelter. These common conditions can make a property more
                attractive to rodents.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {attractants.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#f6fffb] rounded-2xl p-6 border border-green-100"
                  >
                    <h3 className="text-xl font-black text-[#063b3f] mb-3">
                      ✅ {item.title}
                    </h3>

                    <p className="text-gray-600 leading-7">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* SIGNS */}
            <section id="signs" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Rodent Warning Signs
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Signs of Rat Infestation at Home
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                Rats often stay inside hidden areas. Check for these signs in
                kitchens, storage rooms, ceilings, utility spaces and areas near
                walls.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {signs.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#f6fffb] border border-green-100 rounded-2xl p-6 shadow-sm"
                  >
                    <h3 className="text-xl font-black text-[#063b3f] mb-3">
                      🐭 {item.title}
                    </h3>

                    <p className="text-gray-600 leading-7">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <p className="text-gray-700 leading-7">
                  <strong className="text-[#063b3f]">Important:</strong> Seeing
                  rats during daytime may indicate high activity, disturbed
                  nesting areas or competition for food and shelter.
                </p>
              </div>
            </section>

            {/* HEALTH RISKS */}
            <section id="health-risks" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Hygiene and Property Damage
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Health and Property Risks Caused by Rats
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                Rat activity can affect food safety, hygiene, property condition
                and business operations. Early inspection is important when
                signs appear.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {risks.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6"
                  >
                    <h3 className="text-xl font-black text-[#063b3f] mb-3">
                      ⚠️ {item.title}
                    </h3>

                    <p className="text-gray-600 leading-7">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* PREVENTION TIPS */}
            <section id="prevention-tips" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Rodent Prevention
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Rat Control Tips for Homes
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                Rodent prevention requires proper food storage, waste
                management, property maintenance and closing possible entry
                points.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {tips.map((tip, index) => (
                  <div
                    key={tip.title}
                    className="relative bg-[#f8fcfb] border border-green-100 rounded-2xl p-6 shadow-sm"
                  >
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-black text-sm">
                      {index + 1}
                    </div>

                    <h3 className="text-xl font-black text-[#063b3f] mb-3">
                      {tip.title}
                    </h3>

                    <p className="text-gray-600 leading-7">{tip.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* PROFESSIONAL PROCESS */}
            <section id="professional-process" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Professional Rodent Treatment
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Our Rat Control Process
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                Professional rodent control focuses on finding entry points,
                identifying movement routes, reducing activity and preventing
                future access.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {process.map((step, index) => (
                  <div
                    key={step.title}
                    className="relative bg-[#f6fffb] border border-green-100 rounded-2xl p-6 shadow-sm"
                  >
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#063b3f] text-white flex items-center justify-center font-black text-sm">
                      {index + 1}
                    </div>

                    <h3 className="text-xl font-black text-[#063b3f] mb-3">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-6">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* WHY ACUITY */}
            <section id="why-acuity" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Acuity Pest Control
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Why Choose Acuity Pest Control?
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                We provide rat and rodent control for homes, apartments,
                offices, restaurants, warehouses and commercial properties
                across Bangalore.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {whyChooseUs.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#f6fffb] rounded-2xl p-6 border border-green-100"
                  >
                    <h3 className="text-xl font-black text-[#063b3f] mb-3">
                      ✅ {item.title}
                    </h3>

                    <p className="text-gray-600 leading-7">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* IN-ARTICLE CTA */}
            <div className="bg-[#063b3f] text-white rounded-3xl p-7 md:p-9 mb-14">
              <h2 className="text-3xl font-black mb-4">
                Rats Keep Returning to Your Property?
              </h2>

              <p className="text-gray-200 leading-7 mb-6">
                Our team can inspect rodent activity, identify possible entry
                points and recommend a suitable rodent control and monitoring
                plan.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-green-600 hover:bg-green-700 text-center px-6 py-3 rounded-xl font-bold transition"
                >
                  Book an Inspection
                </Link>

                <a
                  href="tel:+919941229005"
                  className="border border-white text-center px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition"
                >
                  Call +91 99412 29005
                </a>
              </div>
            </div>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Rodent Control FAQs
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {faqs.map((item) => (
                  <div
                    key={item.q}
                    className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6"
                  >
                    <h3 className="text-lg font-black text-[#063b3f] mb-2">
                      {item.q}
                    </h3>

                    <p className="text-gray-600 leading-7">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SERVICE AREAS */}
            <section id="service-areas" className="scroll-mt-28 mb-10">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Bangalore Locations
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Rat Control Services Across Bangalore
              </h2>

              <p className="text-gray-700 leading-8 mb-6">
                Acuity Pest Control provides rat inspection and rodent control
                support across major residential and commercial locations in
                Bangalore.
              </p>

              <div className="flex flex-wrap gap-2">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="bg-[#f6fffb] border border-green-100 text-[#063b3f] px-4 py-2 rounded-full font-semibold text-sm"
                  >
                    Rat Control in {area}
                  </span>
                ))}
              </div>
            </section>

            {/* SERVICE LINKS */}
            <section className="bg-white border border-green-100 rounded-2xl p-6 my-10">
              <h2 className="text-2xl font-bold text-[#063b3f] mb-4">
                🔗 Related Pest Control Services
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  to="/rodent-management-service"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Rodent Control →
                </Link>

                <Link
                  to="/general-pest-control"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  General Pest Control →
                </Link>

                <Link
                  to="/warehouse-pest-management"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Warehouse Pest Management →
                </Link>

                <Link
                  to="/office-pest-control"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Office Pest Control →
                </Link>

                <Link
                  to="/hotel-hospital-pest-control"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Hotel and Hospital Pest Control →
                </Link>

                <Link
                  to="/contact"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Book Pest Inspection →
                </Link>
              </div>
            </section>

            {/* AUTHOR BIO */}
            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-black flex-shrink-0">
                AP
              </div>

              <div>
                <p className="font-black text-[#063b3f] text-lg">
                  Acuity Pest Control Team
                </p>

                <p className="text-xs font-semibold text-green-700 mt-1 mb-2">
                  Last reviewed by Acuity Pest Control professionals on June 26,
                  2026.
                </p>

                <p className="text-gray-600 text-sm leading-6">
                  We provide professional pest control solutions for homes,
                  apartments and businesses across Bangalore, including rodent,
                  cockroach, termite, bed bug, mosquito and ant control.
                </p>

                <div className="flex flex-wrap gap-4 mt-3">
                  <Link
                    to="/about"
                    className="text-green-700 font-semibold text-sm hover:underline"
                  >
                    About Us
                  </Link>

                  <Link
                    to="/services"
                    className="text-green-700 font-semibold text-sm hover:underline"
                  >
                    Our Services
                  </Link>

                  <Link
                    to="/contact"
                    className="text-green-700 font-semibold text-sm hover:underline"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            {/* RELATED POSTS */}
            <section className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                📖 You Might Also Like
              </h2>

              <div className="grid sm:grid-cols-2 gap-5">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    to={post.slug}
                    className="block bg-[#f8fcfb] border border-green-100 rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition group"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={post.image}
                        alt={`${post.title} - Acuity Pest Control Blog`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>

                    <div className="p-5">
                      <h3 className="font-black text-[#063b3f] text-lg mb-2 leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-6">
                        {post.excerpt}
                      </p>

                      <span className="text-green-700 font-semibold text-sm mt-3 inline-block">
                        Read More →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </main>

          {/* SIDEBAR */}
          <aside className="w-full lg:w-1/3">
            <div className="lg:sticky lg:top-28">
              {/* CTA CARD */}
              <div className="bg-[#063b3f] text-white rounded-3xl p-7 mb-8">
                <h2 className="text-3xl font-black mb-3">Need Rat Control?</h2>

                <p className="text-gray-200 text-sm leading-6 mb-5">
                  Get professional rodent inspection and control support for
                  your home or business anywhere in Bangalore.
                </p>

                <a
                  href="tel:+919941229005"
                  className="block w-full bg-green-600 hover:bg-green-700 text-center py-3.5 rounded-xl font-bold text-base mb-3 transition"
                >
                  📞 Call Now
                </a>

                <a
                  href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20rat%20control%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-[#063b3f] text-center py-3.5 rounded-xl font-bold text-base mb-3 transition hover:bg-gray-100"
                >
                  💬 WhatsApp Us
                </a>

                <Link
                  to="/contact"
                  className="block w-full border border-white text-center py-3.5 rounded-xl font-bold text-base transition hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>

              {/* POPULAR POSTS */}
              <div className="bg-[#f8fcfb] border border-green-100 rounded-3xl p-6 mb-8">
                <h2 className="font-black text-[#063b3f] text-lg mb-4">
                  🔥 Popular Posts
                </h2>

                <ul className="space-y-3">
                  {relatedPosts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        to={post.slug}
                        className="text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CATEGORIES */}
              <div className="bg-[#f8fcfb] border border-green-100 rounded-3xl p-6 mb-8">
                <h2 className="font-black text-[#063b3f] text-lg mb-4">
                  📂 Categories
                </h2>

                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      to="/blogs"
                      className="bg-white border border-green-200 px-4 py-2 rounded-full text-sm font-semibold text-[#063b3f] hover:bg-green-50 transition"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>

              {/* RELATED SERVICES */}
              <div className="bg-[#f8fcfb] border border-green-100 rounded-3xl p-6">
                <h2 className="font-black text-[#063b3f] text-lg mb-4">
                  🛠 Related Services
                </h2>

                <div className="space-y-3">
                  <Link
                    to="/rodent-management-service"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Rodent Control
                  </Link>

                  <Link
                    to="/general-pest-control"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    General Pest Control
                  </Link>

                  <Link
                    to="/warehouse-pest-management"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Warehouse Pest Management
                  </Link>

                  <Link
                    to="/office-pest-control"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Office Pest Control
                  </Link>

                  <Link
                    to="/hotel-hospital-pest-control"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Hotel and Hospital Pest Control
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-[#063b3f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-5">
            Need Professional Rat Control in Bangalore?
          </h2>

          <p className="text-gray-200 mb-8 max-w-2xl mx-auto leading-7">
            Get rodent inspection and control support for your home, apartment,
            office, restaurant or commercial property from Acuity Pest Control.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919941229005"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20rat%20control%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#063b3f] px-8 py-4 rounded-2xl font-bold transition hover:bg-gray-100"
            >
              WhatsApp Us
            </a>

            <Link
              to="/rodent-management-service"
              className="border border-white px-8 py-4 rounded-2xl font-bold transition hover:bg-white/10"
            >
              View Rodent Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RatControlTipsForHomes;
