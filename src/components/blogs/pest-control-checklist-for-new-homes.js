import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/servicebanner.jpg";

import blogImg from "../../images/cockroch.png";
import blogImg2 from "../../images/Signs of Termite Infestation in Your Home.jpg";
import blogImg3 from "../../images/Professional Pest Control vs DIY.jpg";
import blogImg4 from "../../images/Monsoon Pest Control Tips for Bangalore Homes.jpg";

const canonicalUrl =
  "https://www.acuitypestcontrols.com/blogs/pest-control-checklist-for-new-homes";

const blogImageUrl =
  "https://www.acuitypestcontrols.com/images/pest-control-checklist-for-new-homes.jpg";

const faqs = [
  {
    q: "Should pest control be done before moving into a new house?",
    a: "Yes, it is better to complete pest control before moving furniture and household items into a new home. Empty rooms, corners, kitchens, cabinets and wooden areas can be inspected and treated properly.",
  },
  {
    q: "Is anti-termite treatment necessary for new homes?",
    a: "Anti-termite treatment can help protect wooden furniture, door frames, cupboards and hidden structural areas from termite activity. The requirement depends on the property condition and construction history.",
  },
  {
    q: "How long does new home pest control take?",
    a: "Most residential pest control treatments can be completed within a few hours. The exact duration depends on the property size, pest activity, number of rooms and treatment type.",
  },
  {
    q: "Do you provide pest control for newly constructed homes in Bangalore?",
    a: "Yes, Acuity Pest Control provides pest inspection and treatment for newly constructed homes, apartments, villas and other residential properties across Bangalore.",
  },
  {
    q: "How many days before shifting should pest control be done?",
    a: "Pest control should ideally be completed before furniture and household items are moved inside. The technician will provide the correct re-entry and cleaning instructions based on the treatment used.",
  },
];

const newHomeChecklistSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#blogposting`,
    headline: "Pest Control Checklist for New Homes",
    description:
      "Before moving into a new home, follow this pest control checklist to inspect rooms, kitchens, bathrooms, cracks, furniture areas and termite-prone spaces.",
    image: {
      "@type": "ImageObject",
      url: blogImageUrl,
    },
    datePublished: "2026-02-02",
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
        name: "Pest Control Checklist for New Homes",
        item: canonicalUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "Pest Control Checklist for New Homes",
    description:
      "A complete pest control checklist for newly constructed homes, apartments and villas before moving in.",
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
        "#why-pest-control-before-moving p",
        "#checklist h2",
        "#common-pests h2",
        "#benefits h2",
        "#faq h2",
      ],
    },
  },
];

const PestControlChecklistNewHomes = () => {
  const checklist = [
    {
      title: "Inspect every room",
      description:
        "Check bedrooms, living areas, corners, skirting, false ceilings and storage areas for pest droppings, nests, dead insects or unusual marks.",
    },
    {
      title: "Check kitchen cabinets",
      description:
        "Inspect drawers, cabinets, sink areas and plumbing lines for cockroaches, ants, moisture and small entry gaps.",
    },
    {
      title: "Inspect bathrooms and drains",
      description:
        "Check floor traps, drainage lines, pipe openings and damp corners where cockroaches and other pests may enter.",
    },
    {
      title: "Seal wall cracks",
      description:
        "Close small gaps around walls, tiles, doors, windows, plumbing lines and electrical openings.",
    },
    {
      title: "Plan termite protection",
      description:
        "Consider anti-termite inspection or treatment before installing furniture, cupboards and wooden fittings.",
    },
    {
      title: "Deep clean the house",
      description:
        "Remove dust, food residue, packaging materials and construction waste before moving household items inside.",
    },
    {
      title: "Inspect electrical points",
      description:
        "Check switchboards, cable openings and electrical ducts because pests may use these spaces as hidden pathways.",
    },
    {
      title: "Check doors and windows",
      description:
        "Inspect gaps under doors and around windows and install suitable seals or mesh where required.",
    },
    {
      title: "Remove construction debris",
      description:
        "Clear unused wood, cardboard, cement bags, packaging and other materials that can shelter pests.",
    },
    {
      title: "Book professional inspection",
      description:
        "A trained pest control technician can identify hidden risk areas and recommend suitable preventive treatment.",
    },
  ];

  const pests = [
    {
      name: "Cockroaches",
      description:
        "They may enter through drains, plumbing lines, kitchen cabinets and cracks.",
    },
    {
      name: "Termites",
      description:
        "They can affect wooden fittings, door frames, cupboards and structural areas.",
    },
    {
      name: "Ants",
      description:
        "They may enter through wall gaps, windows, balconies and plumbing openings.",
    },
    {
      name: "Mosquitoes",
      description:
        "Stagnant water around balconies, terraces and construction areas can support breeding.",
    },
    {
      name: "Rodents",
      description:
        "They may enter through drainage lines, utility ducts and gaps around doors.",
    },
    {
      name: "Bed Bugs",
      description:
        "They can enter with second-hand furniture, mattresses, luggage or stored materials.",
    },
    {
      name: "Spiders",
      description:
        "They may build webs in undisturbed corners, balconies, ceilings and storage areas.",
    },
    {
      name: "Wood Borers",
      description:
        "They may affect untreated or infested wooden furniture and fittings.",
    },
  ];

  const benefits = [
    {
      title: "Protects furniture",
      description:
        "Early inspection and treatment can help protect cupboards, doors, frames and other wooden items.",
    },
    {
      title: "Reduces repair costs",
      description:
        "Detecting termites and wood-related pests early may help prevent expensive structural or furniture repairs.",
    },
    {
      title: "Improves hygiene",
      description:
        "Preventive pest control supports a cleaner kitchen, bathroom and living environment.",
    },
    {
      title: "Controls hidden activity",
      description:
        "Empty rooms allow technicians to inspect corners, cabinets, cracks and drainage points more easily.",
    },
    {
      title: "Detects termites early",
      description:
        "A professional inspection can identify termite risk before furniture and interior work is completed.",
    },
    {
      title: "Provides peace of mind",
      description:
        "Completing pest control before shifting helps you move into a cleaner and better-prepared home.",
    },
  ];

  const warningSigns = [
    "Cockroach droppings inside kitchen cabinets",
    "Termite mud tubes on walls or wooden areas",
    "Hollow sounds from doors or wooden frames",
    "Rodent droppings or gnaw marks",
    "Ant trails near windows and kitchen counters",
    "Dead insects around corners or drainage areas",
    "Small holes or powder on wooden furniture",
    "Mosquito breeding around stagnant water",
  ];

  const tocItems = [
    {
      id: "why-pest-control-before-moving",
      label: "Why Pest Control Before Moving In?",
    },
    {
      id: "checklist",
      label: "New Home Pest Control Checklist",
    },
    {
      id: "common-pests",
      label: "Common Pests Found in New Homes",
    },
    {
      id: "warning-signs",
      label: "Warning Signs to Check",
    },
    {
      id: "benefits",
      label: "Benefits of Professional Pest Control",
    },
    {
      id: "faq",
      label: "Frequently Asked Questions",
    },
  ];

  const relatedPosts = [
    {
      title: "Signs of Termite Infestation in Your Home",
      slug: "/blogs/signs-of-termite-infestation",
      excerpt:
        "Learn the common termite warning signs every homeowner should know.",
      image: blogImg2,
    },
    {
      title: "Complete Guide to Pest Control in Bangalore",
      slug: "/blogs/pest-control-bangalore-guide",
      excerpt:
        "Everything you need to know about professional pest control services in Bangalore.",
      image: blogImg,
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
        "Learn how to protect your home from common pests during the rainy season.",
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
        title="Pest Control Checklist for New Homes | Bangalore"
        description="Before moving into a new home, follow this complete pest control checklist for kitchens, bathrooms, cracks, termite-prone areas and furniture spaces."
        keywords="new home pest control Bangalore, pest control checklist for new homes, moving home pest control, anti termite treatment for new home, pest inspection Bangalore, pest control before shifting, new apartment pest control"
        canonical={canonicalUrl}
        image={blogImageUrl}
        schema={newHomeChecklistSchema}
      />

      {/* HERO */}
      <section className="relative h-[48vh] sm:h-[55vh] md:h-[110vh]">
        <img
          src={bannerImage}
          alt="Pest control checklist for new homes before moving in"
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
                Pest Control Checklist for New Homes
              </span>
            </nav>

            {/* BLOG HEADER */}
            <header className="mb-10">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                New Home Pest Control
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-[#063b3f] mt-4 mb-5 leading-tight">
                Pest Control Checklist for New Homes
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-5">
                <span>📅 Published: February 2, 2026</span>
                <span aria-hidden="true">•</span>
                <span>Reviewed: June 26, 2026</span>
                <span aria-hidden="true">•</span>
                <span>⏱ 8 min read</span>
              </div>

              <p className="text-gray-700 leading-8">
                Moving into a new home is exciting, but pest inspection should
                be completed before shifting furniture and household items. This
                checklist helps you inspect rooms, kitchens, bathrooms, cracks,
                drainage areas, wooden fittings and other common pest hiding
                places.
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

            {/* WHY PEST CONTROL */}
            <section
              id="why-pest-control-before-moving"
              className="scroll-mt-28 mb-14"
            >
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Before Moving In
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Why Pest Control Should Be Done Before Moving In
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                A newly constructed or recently renovated home may look clean,
                but it can still contain hidden pest risks. Construction
                materials, moisture, wooden fittings, drainage systems, wall
                gaps and storage corners may attract termites, cockroaches,
                ants, spiders and rodents.
              </p>

              <p className="text-gray-700 leading-8 mb-5">
                Empty rooms are easier to inspect and treat because technicians
                can access wall corners, cabinets, plumbing openings, skirting,
                floors and wooden areas without furniture blocking these
                locations.
              </p>

              <p className="text-gray-700 leading-8">
                A professional pest inspection before moving in can identify
                possible pest entry points and hidden risk areas. Explore our{" "}
                <Link
                  to="/general-pest-control"
                  className="text-green-700 font-semibold hover:underline"
                >
                  general pest control service in Bangalore
                </Link>{" "}
                for new homes, apartments and villas.
              </p>
            </section>

            {/* CHECKLIST */}
            <section id="checklist" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Moving Checklist
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Complete New Home Pest Control Checklist
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                Complete these inspection and prevention steps before bringing
                furniture, appliances and household belongings into your new
                property.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {checklist.map((item, index) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 bg-[#f6fffb] p-6 rounded-2xl border border-green-100"
                  >
                    <div className="w-11 h-11 rounded-full bg-green-600 text-white flex items-center justify-center font-bold shrink-0 text-sm">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-[#063b3f] mb-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-6">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <p className="text-gray-700 leading-7">
                  <strong className="text-[#063b3f]">Important:</strong>{" "}
                  Complete pest treatment before installing modular kitchens,
                  wardrobes and fixed furniture whenever possible. Hidden areas
                  become harder to access after installation.
                </p>
              </div>
            </section>

            {/* COMMON PESTS */}
            <section id="common-pests" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Pest Risks
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Common Pests Found in New Homes
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                New homes can attract different pests depending on construction
                condition, moisture, nearby surroundings, wooden materials,
                storage areas and drainage access.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                {pests.map((item) => (
                  <div
                    key={item.name}
                    className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6"
                  >
                    <h3 className="text-xl font-black text-[#063b3f] mb-3">
                      🐜 {item.name}
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
                Inspection Signs
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Warning Signs to Check Before Shifting
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                Look carefully for these warning signs before moving furniture
                and household belongings into the property.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {warningSigns.map((item) => (
                  <div
                    key={item}
                    className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-5"
                  >
                    <p className="font-semibold text-[#063b3f]">⚠️ {item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* BENEFITS */}
            <section id="benefits" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Professional Inspection
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Benefits of Professional Pest Control
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                Professional pest control before moving into a new home can help
                reduce hidden pest activity and protect furniture, kitchens,
                bathrooms, wooden areas and storage spaces.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {benefits.map((item) => (
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
                Moving Into a New Home?
              </h2>

              <p className="text-gray-200 leading-7 mb-6">
                Book a professional pest inspection before shifting. Our team
                can inspect kitchens, bathrooms, wooden areas, drainage points
                and other hidden pest-risk locations.
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
                New Home Pest Control FAQs
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

            {/* SERVICE LINKS */}
            <section className="bg-white border border-green-100 rounded-2xl p-6 my-10">
              <h2 className="text-2xl font-bold text-[#063b3f] mb-4">
                🔗 Related Pest Control Services
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  to="/general-pest-control"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  General Pest Control →
                </Link>

                <Link
                  to="/anti-termite-treatment"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Anti-Termite Treatment →
                </Link>

                <Link
                  to="/pre-construction-termite-treatment"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Pre-Construction Termite Treatment →
                </Link>

                <Link
                  to="/post-construction-termite-treatment"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Post-Construction Termite Treatment →
                </Link>

                <Link
                  to="/wood-borer-treatment"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Wood Borer Treatment →
                </Link>

                <Link
                  to="/cockroach-management-service"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Cockroach Control →
                </Link>

                <Link
                  to="/rodent-management-service"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Rodent Control →
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
                  apartments and businesses across Bangalore, including termite,
                  cockroach, bed bug, mosquito, ant and rodent control.
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
                  Moving Into a New Home?
                </h2>

                <p className="text-gray-200 text-sm leading-6 mb-5">
                  Book a complete pest inspection before shifting and prepare
                  your new home properly.
                </p>

                <a
                  href="tel:+919941229005"
                  className="block w-full bg-green-600 hover:bg-green-700 text-center py-3.5 rounded-xl font-bold text-base mb-3 transition"
                >
                  📞 Call Now
                </a>

                <a
                  href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20pest%20control%20for%20my%20new%20home."
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
                    to="/general-pest-control"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    General Pest Control
                  </Link>

                  <Link
                    to="/anti-termite-treatment"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Anti-Termite Treatment
                  </Link>

                  <Link
                    to="/pre-construction-termite-treatment"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Pre-Construction Termite Treatment
                  </Link>

                  <Link
                    to="/post-construction-termite-treatment"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Post-Construction Termite Treatment
                  </Link>

                  <Link
                    to="/wood-borer-treatment"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Wood Borer Treatment
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
            Moving Into a New Home?
          </h2>

          <p className="text-gray-200 mb-8 max-w-2xl mx-auto leading-7">
            Book a pest inspection before shifting and prepare your property
            with professional pest control support from Acuity Pest Control.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919941229005"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20pest%20control%20for%20my%20new%20home."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#063b3f] px-8 py-4 rounded-2xl font-bold transition hover:bg-gray-100"
            >
              WhatsApp Us
            </a>

            <Link
              to="/general-pest-control"
              className="border border-white px-8 py-4 rounded-2xl font-bold transition hover:bg-white/10"
            >
              View Pest Control Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PestControlChecklistNewHomes;
