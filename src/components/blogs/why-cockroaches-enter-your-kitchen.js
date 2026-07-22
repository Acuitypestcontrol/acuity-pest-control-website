import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/WhyCockroachesEnterKitchen.jpg";

import blogImg1 from "../../images/cockroch1.png";
import blogImg3 from "../../images/Professional Pest Control vs DIY.jpg";
import blogImg4 from "../../images/Monsoon Pest Control Tips for Bangalore Homes.jpg";
import blogImg15 from "../../images/Why Cockroaches Enter Your Kitchen & How to Stop Them.jpg";

const canonicalUrl =
  "https://www.acuitypestcontrols.com/blogs/why-cockroaches-enter-your-kitchen";

const blogImageUrl =
  "https://www.acuitypestcontrols.com/images/why-cockroaches-enter-your-kitchen.jpg";

const faqs = [
  {
    q: "Why do cockroaches come into kitchens?",
    a: "Cockroaches enter kitchens because they find food, water, warmth and dark hiding places near cabinets, drains, sinks, appliances and wall gaps.",
  },
  {
    q: "Are cockroaches dangerous in a kitchen?",
    a: "Cockroaches can contaminate food, utensils and kitchen surfaces. Their droppings, shed skin and movement through drains and waste areas can create hygiene concerns.",
  },
  {
    q: "Can DIY sprays remove cockroaches completely?",
    a: "DIY sprays may kill visible cockroaches, but they may not reach hidden harbourage areas, eggs, young cockroaches and breeding zones behind cabinets or appliances.",
  },
  {
    q: "Why do cockroaches come out at night?",
    a: "Cockroaches are mainly active at night because the kitchen is quieter, darker and safer for them to search for food and water.",
  },
  {
    q: "Do you provide cockroach control in Bangalore?",
    a: "Yes, Acuity Pest Control provides professional cockroach control services across Bangalore for homes, apartments, restaurants, offices and commercial kitchens.",
  },
];

const cockroachKitchenSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#blogposting`,
    headline: "Why Cockroaches Enter Your Kitchen and How to Stop Them",
    description:
      "Learn why cockroaches enter kitchens, what attracts them, common warning signs and how professional cockroach control helps protect kitchen hygiene.",
    image: {
      "@type": "ImageObject",
      url: blogImageUrl,
    },
    datePublished: "2026-01-26",
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
        name: "Why Cockroaches Enter Your Kitchen",
        item: canonicalUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "Why Cockroaches Enter Your Kitchen and How to Stop Them",
    description:
      "Understand what attracts cockroaches to kitchens and how cleaning, moisture control, entry-point sealing and professional treatment can reduce infestation.",
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
        "#why-kitchens-attract p",
        "#common-reasons h2",
        "#warning-signs h2",
        "#how-to-stop h2",
        "#professional-treatment p",
        "#faq h2",
      ],
    },
  },
];

const WhyCockroachesEnterKitchen = () => {
  const reasons = [
    {
      title: "Food crumbs and leftovers",
      description:
        "Small crumbs, spilled grains, food residue and uncovered leftovers provide an easy food source for cockroaches.",
    },
    {
      title: "Unwashed dishes",
      description:
        "Plates, pans and utensils kept overnight may contain grease, food particles and moisture that attract cockroaches.",
    },
    {
      title: "Open garbage bins",
      description:
        "Food waste inside uncovered dustbins provides cockroaches with regular access to food and shelter.",
    },
    {
      title: "Water leaks",
      description:
        "Leaking taps, sink pipes and damp cabinets provide the moisture cockroaches need to survive.",
    },
    {
      title: "Grease buildup",
      description:
        "Grease around stoves, exhaust systems, tiles and appliances can continue attracting cockroaches even after visible food is removed.",
    },
    {
      title: "Cracks and drain gaps",
      description:
        "Cockroaches can enter through drains, pipe openings, wall cracks, cabinet joints and gaps around utility lines.",
    },
    {
      title: "Warm appliances",
      description:
        "Refrigerators, ovens, microwaves and electrical appliances create warm, protected hiding spaces.",
    },
    {
      title: "Cardboard and clutter",
      description:
        "Cardboard boxes, newspapers and stored packaging provide dark shelter and possible breeding locations.",
    },
  ];

  const warningSigns = [
    {
      title: "Cockroaches seen at night",
      description:
        "Cockroaches commonly appear after the kitchen becomes dark and quiet.",
    },
    {
      title: "Droppings",
      description:
        "Small dark droppings may appear inside cabinets, drawers, corners and near appliances.",
    },
    {
      title: "Egg cases",
      description:
        "Brown capsule-like egg cases may be found behind furniture, inside cabinets or near hidden gaps.",
    },
    {
      title: "Unpleasant odour",
      description:
        "Heavy cockroach activity may create a persistent musty or oily smell inside the kitchen.",
    },
    {
      title: "Shed skin",
      description:
        "Young cockroaches shed their skin while developing, leaving small remains near harbourage areas.",
    },
    {
      title: "Daytime activity",
      description:
        "Cockroaches appearing during the day may indicate high activity, overcrowding or disturbed hiding places.",
    },
  ];

  const prevention = [
    {
      title: "Clean counters every night",
      description:
        "Remove crumbs, grease, spills and food residue from countertops, floors and cooking areas.",
    },
    {
      title: "Store food properly",
      description:
        "Keep grains, snacks, sweets, pet food and leftovers inside sealed airtight containers.",
    },
    {
      title: "Wash dishes promptly",
      description:
        "Avoid leaving dirty plates, pans and utensils in the sink overnight.",
    },
    {
      title: "Fix water leaks",
      description:
        "Repair leaking taps, pipes, drainage connections and damp areas below the sink.",
    },
    {
      title: "Manage garbage",
      description:
        "Dispose of kitchen waste daily and use dustbins with tight-fitting lids.",
    },
    {
      title: "Seal cracks and gaps",
      description:
        "Close wall cracks, cabinet gaps, pipe openings and spaces around doors and windows.",
    },
    {
      title: "Clean behind appliances",
      description:
        "Regularly clean behind refrigerators, ovens, microwaves and other kitchen appliances.",
    },
    {
      title: "Reduce clutter",
      description:
        "Remove unnecessary cardboard boxes, papers and unused packaging from kitchen storage areas.",
    },
  ];

  const professionalAdvantages = [
    {
      title: "Detailed inspection",
      description:
        "Technicians inspect cabinets, drains, appliances, wall gaps and other hidden cockroach harbourage areas.",
    },
    {
      title: "Targeted application",
      description:
        "Treatment is applied according to cockroach activity, hiding locations and kitchen conditions.",
    },
    {
      title: "Hidden-area treatment",
      description:
        "Professional methods focus on concealed spaces where cockroaches breed and rest.",
    },
    {
      title: "Reduced pesticide exposure",
      description:
        "Targeted application can reduce unnecessary spraying across food preparation and open kitchen surfaces.",
    },
    {
      title: "Monitoring support",
      description:
        "Monitoring may be recommended to check continuing movement and treatment performance.",
    },
    {
      title: "Prevention guidance",
      description:
        "Customers receive practical advice on cleaning, moisture control, storage and sealing entry points.",
    },
  ];

  const kitchenHotspots = [
    "Below the kitchen sink",
    "Behind the refrigerator",
    "Near gas stoves and ovens",
    "Inside cabinets and drawers",
    "Around drains and pipe openings",
    "Behind microwave ovens",
    "Near garbage bins",
    "Inside cardboard storage boxes",
  ];

  const tocItems = [
    {
      id: "why-kitchens-attract",
      label: "Why Kitchens Attract Cockroaches",
    },
    {
      id: "common-reasons",
      label: "Reasons Cockroaches Enter Kitchens",
    },
    {
      id: "warning-signs",
      label: "Signs of Cockroach Activity",
    },
    {
      id: "kitchen-hotspots",
      label: "Common Kitchen Hiding Places",
    },
    {
      id: "how-to-stop",
      label: "How to Stop Kitchen Cockroaches",
    },
    {
      id: "professional-treatment",
      label: "Why Professional Treatment Helps",
    },
    {
      id: "faq",
      label: "Frequently Asked Questions",
    },
  ];

  const relatedPosts = [
    {
      title: "How to Get Rid of Cockroaches Permanently",
      slug: "/blogs/get-rid-of-cockroaches",
      excerpt:
        "Learn professional methods to control cockroaches and reduce recurring infestation.",
      image: blogImg1,
    },
    {
      title: "German Cockroach vs American Cockroach",
      slug: "/blogs/german-cockroach-vs-american-cockroach",
      excerpt: "Learn the differences between German and American cockroaches.",
      image: blogImg15,
    },
    {
      title: "Professional Pest Control vs DIY",
      slug: "/blogs/pest-control-vs-diy",
      excerpt:
        "Compare professional pest control services with common DIY treatment methods.",
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
        title="Why Cockroaches Enter Your Kitchen | How to Stop Them"
        description="Learn why cockroaches enter kitchens, what attracts them, warning signs, prevention tips and when to book cockroach control in Bangalore."
        keywords="cockroaches in kitchen, why cockroaches enter kitchen, cockroach control Bangalore, kitchen cockroach treatment, kitchen pest control Bangalore, cockroach prevention, cockroach infestation signs"
        canonical={canonicalUrl}
        image={blogImageUrl}
        schema={cockroachKitchenSchema}
      />

      {/* HERO */}
      <section className="relative h-[48vh] sm:h-[55vh] md:h-[110vh]">
        <img
          src={bannerImage}
          alt="Cockroach entering a kitchen and hiding near appliances"
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
                Why Cockroaches Enter Your Kitchen
              </span>
            </nav>

            {/* BLOG HEADER */}
            <header className="mb-10">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Cockroach Control Bangalore
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-[#063b3f] mt-4 mb-5 leading-tight">
                Why Cockroaches Enter Your Kitchen & How to Stop Them
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-5">
                <span>📅 Published: January 26, 2026</span>
                <span aria-hidden="true">•</span>
                <span>Reviewed: June 26, 2026</span>
                <span aria-hidden="true">•</span>
                <span>⏱ 9 min read</span>
              </div>

              <p className="text-gray-700 leading-8">
                Cockroaches commonly enter kitchens because they find food,
                water, warmth and protected hiding places. This guide explains
                what attracts cockroaches, the warning signs to check, how to
                reduce kitchen cockroach activity and when professional
                cockroach treatment may be required.
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

            {/* WHY KITCHENS ATTRACT */}
            <section id="why-kitchens-attract" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Food, Water and Shelter
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Why Kitchens Attract Cockroaches
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                Kitchens provide nearly everything cockroaches need to survive.
                Food crumbs, grease, water leaks, warm appliances and dark
                cabinets create favourable conditions for cockroach activity.
              </p>

              <p className="text-gray-700 leading-8 mb-5">
                Even a clean-looking kitchen can contain food residue behind
                appliances, grease around cooking areas and moisture under the
                sink. Cockroaches can survive on very small amounts of food and
                remain hidden inside narrow gaps during the day.
              </p>

              <p className="text-gray-700 leading-8">
                Cockroaches commonly hide behind refrigerators, below sinks,
                inside cabinets, near drains and around appliances. For
                professional support, explore our{" "}
                <Link
                  to="/cockroach-management-service"
                  className="text-green-700 font-semibold hover:underline"
                >
                  cockroach control service in Bangalore
                </Link>
                .
              </p>
            </section>

            {/* COMMON REASONS */}
            <section id="common-reasons" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Cockroach Attractants
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Common Reasons Cockroaches Enter Kitchens
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                These common kitchen conditions can attract cockroaches or allow
                them to remain hidden inside the property.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {reasons.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#f6fffb] border border-green-100 rounded-2xl p-6 shadow-sm"
                  >
                    <h3 className="text-xl font-black text-[#063b3f] mb-3">
                      🪳 {item.title}
                    </h3>

                    <p className="text-gray-600 leading-7">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* WARNING SIGNS */}
            <section id="warning-signs" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Cockroach Infestation Signs
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Signs of Cockroach Activity in Your Kitchen
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                Cockroaches usually remain hidden during the day. Look for these
                warning signs around cabinets, appliances, sinks and storage
                areas.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {warningSigns.map((item) => (
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

              <div className="mt-7 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <p className="text-gray-700 leading-7">
                  <strong className="text-[#063b3f]">Important:</strong>{" "}
                  Cockroaches seen during daytime may indicate heavy activity,
                  disturbed hiding places or competition for food and shelter.
                </p>
              </div>
            </section>

            {/* KITCHEN HOTSPOTS */}
            <section id="kitchen-hotspots" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Inspection Areas
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Common Cockroach Hiding Places in Kitchens
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                Check these areas for droppings, egg cases, live cockroaches,
                grease buildup and moisture.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {kitchenHotspots.map((item) => (
                  <div
                    key={item}
                    className="bg-[#f6fffb] border border-green-100 rounded-2xl p-5"
                  >
                    <p className="font-semibold text-[#063b3f]">🔍 {item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* HOW TO STOP */}
            <section id="how-to-stop" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Kitchen Cockroach Prevention
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                How to Stop Cockroaches in Your Kitchen
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                Cleaning, food storage, moisture control and sealing entry
                points can reduce cockroach activity. However, established
                colonies may require professional treatment.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {prevention.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#f6fffb] border border-green-100 rounded-2xl p-6"
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

            {/* PROFESSIONAL TREATMENT */}
            <section id="professional-treatment" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Professional Cockroach Control
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Why Professional Cockroach Treatment Works Better
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                DIY sprays mainly affect visible cockroaches. They may not reach
                hidden harbourage areas, young cockroaches, egg cases or
                breeding zones behind cabinets and appliances.
              </p>

              <p className="text-gray-700 leading-8 mb-7">
                Professional treatment begins with inspection and focuses on
                areas where cockroaches hide, feed and move.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {professionalAdvantages.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6"
                  >
                    <h3 className="text-xl font-black text-[#063b3f] mb-3">
                      🛡️ {item.title}
                    </h3>

                    <p className="text-gray-600 leading-7">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-gray-700 leading-8 mt-7">
                Acuity Pest Control provides cockroach treatment for kitchens,
                homes, apartments, restaurants, offices and commercial
                properties across Bangalore.
              </p>
            </section>

            {/* IN-ARTICLE CTA */}
            <div className="bg-[#063b3f] text-white rounded-3xl p-7 md:p-9 mb-14">
              <h2 className="text-3xl font-black mb-4">
                Cockroaches Keep Returning to Your Kitchen?
              </h2>

              <p className="text-gray-200 leading-7 mb-6">
                Book a professional inspection so our team can identify hidden
                cockroach activity, breeding areas and suitable treatment
                locations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-green-600 hover:bg-green-700 text-center px-6 py-3 rounded-xl font-bold transition"
                >
                  Book Cockroach Inspection
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
                Cockroach Control FAQs
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6"
                  >
                    <h3 className="font-black text-lg text-[#063b3f] mb-2">
                      {faq.q}
                    </h3>

                    <p className="text-gray-600 leading-7">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SERVICE INTERLINKS */}
            <section className="bg-white border border-green-100 rounded-2xl p-6 my-10">
              <h2 className="text-2xl font-bold text-[#063b3f] mb-4">
                🔗 Related Pest Control Services
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  to="/cockroach-management-service"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Cockroach Control →
                </Link>

                <Link
                  to="/general-pest-control"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  General Pest Control →
                </Link>

                <Link
                  to="/hotel-hospital-pest-control"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Hotel and Hospital Pest Control →
                </Link>

                <Link
                  to="/office-pest-control"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Office Pest Control →
                </Link>

                <Link
                  to="/warehouse-pest-management"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Warehouse Pest Management →
                </Link>

                <Link
                  to="/contact"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Book Pest Inspection →
                </Link>
              </div>
            </section>

            {/* BLOG INTERLINKS */}
            <section className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6 my-10">
              <h2 className="text-2xl font-bold text-[#063b3f] mb-4">
                📖 Related Cockroach Guides
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  to="/blogs/get-rid-of-cockroaches"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  How to Get Rid of Cockroaches →
                </Link>

                <Link
                  to="/blogs/german-cockroach-vs-american-cockroach"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  German vs American Cockroach →
                </Link>

                <Link
                  to="/blogs/monsoon-pest-control"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Monsoon Pest Control Tips →
                </Link>

                <Link
                  to="/blogs/pest-control-vs-diy"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Professional Pest Control vs DIY →
                </Link>

                <Link
                  to="/blogs/top-10-household-pests-in-bangalore"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Top Household Pests in Bangalore →
                </Link>

                <Link
                  to="/blogs/how-often-should-pest-control-be-done"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  How Often Should Pest Control Be Done? →
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
                  apartments and businesses across Bangalore, including
                  cockroach, termite, bed bug, mosquito, rodent and ant control.
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
                <h2 className="text-3xl font-black mb-3">
                  Need Cockroach Control?
                </h2>

                <p className="text-gray-200 text-sm leading-6 mb-5">
                  Get professional inspection and treatment for your kitchen,
                  home or business anywhere in Bangalore.
                </p>

                <a
                  href="tel:+919941229005"
                  className="block w-full bg-green-600 hover:bg-green-700 text-center py-3.5 rounded-xl font-bold text-base mb-3 transition"
                >
                  📞 Call Now
                </a>

                <a
                  href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20cockroach%20control%20for%20my%20kitchen."
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
                  Book Inspection
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
                    to="/cockroach-management-service"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Cockroach Control
                  </Link>

                  <Link
                    to="/general-pest-control"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    General Pest Control
                  </Link>

                  <Link
                    to="/hotel-hospital-pest-control"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Hotel and Hospital Pest Control
                  </Link>

                  <Link
                    to="/office-pest-control"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Office Pest Control
                  </Link>

                  <Link
                    to="/warehouse-pest-management"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Warehouse Pest Management
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
            Need Cockroach Control for Your Kitchen?
          </h2>

          <p className="text-gray-200 mb-8 max-w-2xl mx-auto leading-7">
            Book professional cockroach inspection and treatment for your home,
            apartment, restaurant, office or commercial kitchen with Acuity Pest
            Control.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919941229005"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20cockroach%20control%20for%20my%20kitchen."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#063b3f] px-8 py-4 rounded-2xl font-bold transition hover:bg-gray-100"
            >
              WhatsApp Us
            </a>

            <Link
              to="/cockroach-management-service"
              className="border border-white px-8 py-4 rounded-2xl font-bold transition hover:bg-white/10"
            >
              View Cockroach Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyCockroachesEnterKitchen;
