import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/howtoprevent.jpg";

import blogImg from "../../images/cockroch.png";
import blogImg1 from "../../images/cockroch1.png";
import blogImg3 from "../../images/Professional Pest Control vs DIY.jpg";
import blogImg4 from "../../images/Monsoon Pest Control Tips for Bangalore Homes.jpg";

const canonicalUrl =
  "https://www.acuitypestcontrols.com/blogs/how-to-prevent-ant-infestation-at-home";

const blogImageUrl =
  "https://www.acuitypestcontrols.com/images/how-to-prevent-ant-infestation-at-home.jpg";

const faqs = [
  {
    q: "Why do ants enter homes?",
    a: "Ants usually enter homes searching for food, water and shelter. Sweet food, crumbs, moisture and open food containers can attract ants quickly.",
  },
  {
    q: "Can ants damage my home?",
    a: "Some ant species can contaminate food, while certain wood-related ant activity may affect wooden areas. A professional inspection helps identify the exact ant species and the seriousness of the problem.",
  },
  {
    q: "Are DIY ant sprays effective?",
    a: "DIY sprays may kill visible ants temporarily, but they usually do not control the colony, queen or nesting area. Professional ant treatment provides more targeted control.",
  },
  {
    q: "How often should ant control be done?",
    a: "Most homes can plan preventive pest control every 3 to 6 months depending on ant activity, food storage, moisture, building condition and surrounding areas.",
  },
  {
    q: "How can I stop ants from entering my kitchen?",
    a: "Keep kitchen counters clean and dry, store food in airtight containers, empty dustbins regularly, repair water leaks and seal cracks around doors, windows and pipes.",
  },
];

const antPreventionSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#blogposting`,
    headline: "How to Prevent Ant Infestation at Home",
    description:
      "Learn practical ways to prevent ants from entering your home, common causes of ant infestation and when professional ant control is required.",
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
        name: "How to Prevent Ant Infestation at Home",
        item: canonicalUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "How to Prevent Ant Infestation at Home",
    description:
      "Learn how to prevent ants in kitchens, bedrooms, balconies and food storage areas and when professional ant control is required.",
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
        "#introduction p",
        "#causes h2",
        "#prevention h2",
        "#treatment h2",
        "#faq h2",
      ],
    },
  },
];

const HowToPreventAntInfestationAtHome = () => {
  const causes = [
    {
      title: "Food crumbs",
      description:
        "Crumbs and food residue on kitchen counters, floors and dining tables provide an easy food source for ants.",
    },
    {
      title: "Open food containers",
      description:
        "Sugar, honey, sweets, fruits and other food stored in open containers can attract ants quickly.",
    },
    {
      title: "Water leaks",
      description:
        "Leaking taps, pipes and damp areas provide the moisture ants need to survive.",
    },
    {
      title: "Wall cracks",
      description:
        "Small cracks near doors, windows, tiles, pipes and walls allow ants to enter indoor areas.",
    },
    {
      title: "Open garbage bins",
      description:
        "Garbage bins without proper lids can attract ants and other pests into the home.",
    },
    {
      title: "Uncovered pet food",
      description:
        "Pet food left outside for long periods can become a regular food source for ants.",
    },
  ];

  const prevention = [
    {
      title: "Clean kitchen surfaces",
      description:
        "Wipe kitchen counters, dining tables and floors every day to remove crumbs and food spills.",
    },
    {
      title: "Use airtight containers",
      description:
        "Store sugar, sweets, snacks, grains and other food inside sealed containers.",
    },
    {
      title: "Seal entry points",
      description:
        "Close cracks and gaps around doors, windows, tiles, walls and plumbing lines.",
    },
    {
      title: "Repair water leaks",
      description:
        "Fix leaking taps and pipes and keep sinks, bathrooms and kitchen areas dry.",
    },
    {
      title: "Manage garbage properly",
      description:
        "Use dustbins with lids and empty kitchen waste regularly to avoid attracting ants.",
    },
    {
      title: "Trim nearby plants",
      description:
        "Trim branches and plants touching walls, windows or balconies because ants may use them as entry routes.",
    },
  ];

  const treatment = [
    {
      title: "Property inspection",
      description:
        "The technician inspects kitchens, balconies, walls, cabinets and other areas where ant activity is visible.",
    },
    {
      title: "Ant species identification",
      description:
        "Identifying the ant species helps determine the correct treatment method and likely nesting locations.",
    },
    {
      title: "Locate nesting areas",
      description:
        "Ant trails and entry points are inspected to locate possible colonies and nesting zones.",
    },
    {
      title: "Targeted treatment",
      description:
        "Suitable gel, bait or professional treatment may be applied based on the ant species and infestation level.",
    },
    {
      title: "Treat entry points",
      description:
        "Cracks, gaps and active pathways are treated to reduce recurring ant movement.",
    },
    {
      title: "Follow-up monitoring",
      description:
        "Follow-up inspection may be recommended to check activity and provide prevention guidance.",
    },
  ];

  const warningSigns = [
    "Long ant trails appearing regularly",
    "Ants repeatedly entering kitchen cabinets",
    "Ant activity around sugar and food containers",
    "Ants coming through wall cracks or electrical points",
    "Large numbers of ants near sinks and drainage areas",
    "Winged ants appearing inside the property",
    "Ant activity continuing after cleaning",
    "Possible nesting activity inside walls or wooden areas",
  ];

  const tocItems = [
    {
      id: "introduction",
      label: "Why Ant Infestation Happens",
    },
    {
      id: "causes",
      label: "Common Causes of Ant Infestation",
    },
    {
      id: "prevention",
      label: "Best Ways to Prevent Ants",
    },
    {
      id: "warning-signs",
      label: "Signs You Need Ant Control",
    },
    {
      id: "treatment",
      label: "Professional Ant Control Process",
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
        "Learn professional methods to control cockroaches and reduce repeated infestation in your home.",
      image: blogImg1,
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
        "Compare professional pest control services with common DIY pest treatment methods.",
      image: blogImg3,
    },
    {
      title: "Monsoon Pest Control Tips for Bangalore Homes",
      slug: "/blogs/monsoon-pest-control",
      excerpt:
        "Learn how to reduce cockroaches, mosquitoes, ants and other pests during rainy season.",
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
        title="How to Prevent Ant Infestation at Home | Ant Control"
        description="Learn how to prevent ant infestation at home, what attracts ants to kitchens and when to book professional ant control treatment in Bangalore."
        keywords="how to prevent ant infestation, ant control Bangalore, ants in home, ant treatment Bangalore, ant pest control, kitchen ant control, prevent ants at home, professional ant control"
        canonical={canonicalUrl}
        image={blogImageUrl}
        schema={antPreventionSchema}
      />

      {/* HERO */}
      <section className="relative h-[48vh] sm:h-[55vh] md:h-[110vh]">
        <img
          src={bannerImage}
          alt="How to prevent ant infestation at home in Bangalore"
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
                How to Prevent Ant Infestation at Home
              </span>
            </nav>

            {/* BLOG HEADER */}
            <header className="mb-10">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Ant Control Bangalore
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-[#063b3f] mt-4 mb-5 leading-tight">
                How to Prevent Ant Infestation at Home
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-5">
                <span>📅 Published: June 26, 2026</span>
                <span aria-hidden="true">•</span>
                <span>Reviewed: June 26, 2026</span>
                <span aria-hidden="true">•</span>
                <span>⏱ 7 min read</span>
              </div>

              <p className="text-gray-700 leading-8">
                Ants are commonly found in kitchens, dining rooms, balconies,
                bathrooms and food storage areas. This guide explains why ants
                enter homes, what attracts them, how to prevent an ant
                infestation and when professional ant control treatment may be
                required.
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

            {/* INTRODUCTION */}
            <section id="introduction" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Understanding Ant Activity
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Why Ant Infestation Happens
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                Ants usually enter homes in search of food, water and shelter.
                They are commonly seen near kitchens, dining areas, sinks,
                balconies, wall cracks and food storage shelves. Once a few
                worker ants locate a food source, they can leave a chemical
                trail that attracts more ants from the colony.
              </p>

              <p className="text-gray-700 leading-8 mb-5">
                Warm weather, moisture, open food containers and small entry
                gaps can make a property more attractive to ants. Ant colonies
                may also be located outside the home, inside soil, wall gaps,
                balconies, gardens or other protected areas.
              </p>

              <p className="text-gray-700 leading-8">
                Regular cleaning, proper food storage and sealing entry points
                can help reduce ant activity. For repeated ant problems, explore
                our{" "}
                <Link
                  to="/ant-control-treatment"
                  className="text-green-700 font-semibold hover:underline"
                >
                  professional ant control treatment in Bangalore
                </Link>
                .
              </p>
            </section>

            {/* CAUSES */}
            <section id="causes" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Common Attractants
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Common Causes of Ant Infestation
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                Most ant problems begin because ants can access food, water or
                shelter. Small changes in cleaning, storage and maintenance can
                help reduce these common causes.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {causes.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#f6fffb] rounded-2xl p-6 border border-green-100 shadow-sm"
                  >
                    <h3 className="text-xl font-black text-[#063b3f] mb-3">
                      🐜 {item.title}
                    </h3>

                    <p className="text-gray-600 leading-7">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* PREVENTION */}
            <section id="prevention" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Ant Prevention Tips
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Best Ways to Prevent Ants at Home
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                Regular housekeeping and basic property maintenance can make
                your home less attractive to ants. Follow these practical ant
                prevention steps.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {prevention.map((item, index) => (
                  <div
                    key={item.title}
                    className="relative bg-[#f8fcfb] border border-green-100 rounded-2xl p-6 shadow-sm"
                  >
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-black text-sm">
                      {index + 1}
                    </div>

                    <h3 className="text-xl font-black text-[#063b3f] mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-7">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <p className="text-gray-700 leading-7">
                  <strong className="text-[#063b3f]">Important:</strong> Avoid
                  placing uncovered food near windows, balconies, kitchen
                  corners or sinks. Even small food particles can attract a
                  large number of ants.
                </p>
              </div>
            </section>

            {/* WARNING SIGNS */}
            <section id="warning-signs" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Active Ant Problem
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Signs You May Need Professional Ant Control
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                Occasional ants may be managed with cleaning and prevention.
                However, repeated or heavy ant activity may indicate a nearby
                colony or hidden nesting area.
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

            {/* PROFESSIONAL TREATMENT */}
            <section id="treatment" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Treatment Method
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Professional Ant Control Process
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                Professional ant control focuses on identifying the ant species,
                locating entry points, finding active areas and applying a
                suitable treatment based on the infestation.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {treatment.map((step, index) => (
                  <div
                    key={step.title}
                    className="bg-[#f6fffb] border border-green-100 rounded-2xl p-6 shadow-sm"
                  >
                    <div className="text-3xl font-black text-green-600 mb-4">
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

            {/* IN-ARTICLE CTA */}
            <div className="bg-[#063b3f] text-white rounded-3xl p-7 md:p-9 mb-14">
              <h2 className="text-3xl font-black mb-4">
                Ants Keep Coming Back?
              </h2>

              <p className="text-gray-200 leading-7 mb-6">
                Acuity Pest Control can inspect the active areas, identify
                possible nesting locations and recommend a suitable ant control
                treatment for your home or business.
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
                Ant Control FAQs
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
                  to="/ant-control-treatment"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Ant Control Treatment →
                </Link>

                <Link
                  to="/general-pest-control"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  General Pest Control →
                </Link>

                <Link
                  to="/cockroach-management-service"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Cockroach Control →
                </Link>

                <Link
                  to="/disinfection-services"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Disinfection Services →
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
                  apartments and businesses across Bangalore, including ant,
                  cockroach, termite, bed bug, mosquito and rodent control.
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
                <h2 className="text-3xl font-black mb-3">Need Ant Control?</h2>

                <p className="text-gray-200 text-sm leading-6 mb-5">
                  Get professional inspection and treatment for ants in your
                  home or business anywhere in Bangalore.
                </p>

                <a
                  href="tel:+919941229005"
                  className="block w-full bg-green-600 hover:bg-green-700 text-center py-3.5 rounded-xl font-bold text-base mb-3 transition"
                >
                  📞 Call Now
                </a>

                <a
                  href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20ant%20control%20service."
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
                    to="/ant-control-treatment"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Ant Control Treatment
                  </Link>

                  <Link
                    to="/general-pest-control"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    General Pest Control
                  </Link>

                  <Link
                    to="/cockroach-management-service"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Cockroach Control
                  </Link>

                  <Link
                    to="/disinfection-services"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Disinfection Services
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
            Need Professional Ant Control?
          </h2>

          <p className="text-gray-200 mb-8 max-w-2xl mx-auto leading-7">
            Acuity Pest Control provides professional ant control for homes,
            apartments, offices and commercial properties across Bangalore.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919941229005"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20ant%20control%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#063b3f] px-8 py-4 rounded-2xl font-bold transition hover:bg-gray-100"
            >
              WhatsApp Us
            </a>

            <Link
              to="/ant-control-treatment"
              className="border border-white px-8 py-4 rounded-2xl font-bold transition hover:bg-white/10"
            >
              View Ant Control Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToPreventAntInfestationAtHome;
