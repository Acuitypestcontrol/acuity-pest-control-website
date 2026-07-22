import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/servicebanner.jpg";

import blogImg from "../../images/cockroch.png";
import blogImg2 from "../../images/Signs of Termite Infestation in Your Home.jpg";
import blogImg3 from "../../images/Professional Pest Control vs DIY.jpg";
import blogImg4 from "../../images/Monsoon Pest Control Tips for Bangalore Homes.jpg";

const canonicalUrl =
  "https://www.acuitypestcontrols.com/blogs/how-often-should-pest-control-be-done";

const blogImageUrl =
  "https://www.acuitypestcontrols.com/images/how-often-should-pest-control-be-done.jpg";

const faqs = [
  {
    q: "How often should pest control be done for homes?",
    a: "For most homes, pest control can be planned every 3 to 6 months depending on pest activity, location, building condition and the surrounding environment.",
  },
  {
    q: "Is yearly pest control enough?",
    a: "Yearly pest control may not be enough for homes with regular cockroach, termite, mosquito, ant or rodent activity. Quarterly service can provide better preventive support.",
  },
  {
    q: "Do apartments need regular pest control?",
    a: "Yes, apartments need regular pest control because pests can spread through drainage lines, common areas, ducts, walls and other shared spaces.",
  },
  {
    q: "What happens if pest control is delayed?",
    a: "If pest control is delayed, pests may multiply quickly and spread to hidden areas, making the infestation more difficult to control later.",
  },
  {
    q: "Do you provide annual pest control packages?",
    a: "Yes, Acuity Pest Control provides one-time pest control services and AMC pest control plans for homes, apartments, offices and commercial spaces.",
  },
];

const howOftenPestControlSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#blogposting`,
    headline: "How Often Should Pest Control Be Done?",
    description:
      "Learn how often pest control should be done for homes, apartments, villas, offices, restaurants, warehouses, hospitals and schools.",
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
        name: "How Often Should Pest Control Be Done?",
        item: canonicalUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "How Often Should Pest Control Be Done?",
    description:
      "See recommended pest control schedules for homes, apartments, offices, restaurants and commercial properties in Bangalore.",
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
        "#why-regular p",
        "#schedule h2",
        "#benefits h2",
        "#faq h2",
      ],
    },
  },
];

const HowOftenShouldPestControlBeDone = () => {
  const schedule = [
    {
      place: "Apartment / Home",
      time: "Every 3–6 Months",
      description:
        "Recommended for preventive control based on pest activity and building condition.",
    },
    {
      place: "Villa",
      time: "Every 3 Months",
      description:
        "Villas may require frequent service because of gardens, open spaces and drainage areas.",
    },
    {
      place: "Restaurant",
      time: "Monthly",
      description:
        "Frequent treatment supports food hygiene and helps control cockroach and rodent activity.",
    },
    {
      place: "Hotel",
      time: "Monthly",
      description:
        "Regular monitoring protects guest rooms, kitchens, storage areas and common spaces.",
    },
    {
      place: "Office",
      time: "Every 3 Months",
      description:
        "Quarterly preventive service can help control cockroaches, rodents, ants and mosquitoes.",
    },
    {
      place: "Warehouse",
      time: "Monthly",
      description:
        "Frequent inspection helps protect stored materials from rodents, insects and other pests.",
    },
    {
      place: "Hospital",
      time: "Monthly",
      description:
        "Routine pest management supports hygiene in sensitive healthcare environments.",
    },
    {
      place: "School / College",
      time: "Every 3–6 Months",
      description:
        "Preventive service can be planned during holidays or low-occupancy periods.",
    },
  ];

  const reasons = [
    "Weather and seasonal conditions",
    "Food preparation and storage",
    "Nearby construction activity",
    "Garden and outdoor areas",
    "Drainage and moisture issues",
    "Previous infestation history",
    "Building age and condition",
    "Nearby waste collection areas",
  ];

  const benefits = [
    "Helps prevent major infestations",
    "Supports a hygienic environment",
    "Keeps kitchens and storage areas cleaner",
    "Helps detect termite activity early",
    "Reduces mosquito breeding conditions",
    "Helps control cockroach and rodent activity",
    "Protects furniture and property",
    "May reduce treatment costs over time",
  ];

  const tocItems = [
    {
      id: "why-regular",
      label: "Why Regular Pest Control Matters",
    },
    {
      id: "schedule",
      label: "Recommended Pest Control Schedule",
    },
    {
      id: "factors",
      label: "Factors Affecting Frequency",
    },
    {
      id: "benefits",
      label: "Benefits of Regular Pest Control",
    },
    {
      id: "amc",
      label: "One-Time Service vs AMC",
    },
    {
      id: "warning-signs",
      label: "Signs You Need Immediate Treatment",
    },
    {
      id: "faq",
      label: "Frequently Asked Questions",
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
        "Compare professional pest control services with DIY pest treatment methods.",
      image: blogImg3,
    },
    {
      title: "Monsoon Pest Control Tips for Bangalore Homes",
      slug: "/blogs/monsoon-pest-control",
      excerpt:
        "Learn how to reduce pest activity during Bangalore's rainy season.",
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

  const warningSigns = [
    "Cockroaches repeatedly appearing during the day",
    "Rodent droppings or gnaw marks",
    "Termite mud tubes or hollow wooden surfaces",
    "Bed bug bites or dark marks on mattresses",
    "Mosquito breeding near stagnant water",
    "Ant trails inside kitchens and storage areas",
    "Unusual pest-related smell",
    "Pest activity continuing after cleaning",
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      <SEO
        title="How Often Should Pest Control Be Done? Complete Guide"
        description="Learn how often pest control should be done for homes, apartments, offices, restaurants and commercial properties. See recommended treatment schedules and prevention tips."
        keywords="how often should pest control be done, pest control frequency Bangalore, pest control schedule Bangalore, AMC pest control Bangalore, quarterly pest control, regular pest control Bangalore, annual pest control service"
        canonical={canonicalUrl}
        image={blogImageUrl}
        schema={howOftenPestControlSchema}
      />

      {/* HERO */}
      <section className="relative h-[48vh] sm:h-[55vh] md:h-[110vh]">
        <img
          src={bannerImage}
          alt="Recommended pest control frequency and schedule in Bangalore"
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
            {/* VISIBLE BREADCRUMB */}
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
                How Often Should Pest Control Be Done?
              </span>
            </nav>

            {/* BLOG HEADER */}
            <header className="mb-10">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Pest Control Schedule
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-[#063b3f] mt-4 mb-5 leading-tight">
                How Often Should Pest Control Be Done?
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-5">
                <span>📅 Published: Jan 26, 2026</span>
                <span aria-hidden="true">•</span>
                <span>Reviewed: Jun 26, 2026</span>
                <span aria-hidden="true">•</span>
                <span>⏱ 7 min read</span>
              </div>

              <p className="text-gray-700 leading-8">
                Pest control frequency depends on the property type, pest
                activity, surrounding environment, hygiene conditions and
                previous infestation history. This guide explains how often
                homes, apartments, offices, restaurants and other commercial
                properties should schedule pest control services.
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
            <section id="why-regular" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Preventive Pest Management
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Why Regular Pest Control Matters
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                Many homeowners book pest control only after seeing insects or
                rodents. However, by the time pests become visible, they may
                already be hiding inside cracks, drains, furniture, storage
                areas, false ceilings or wall gaps. Preventive pest control can
                help reduce pest activity before it becomes a serious
                infestation.
              </p>

              <p className="text-gray-700 leading-8 mb-5">
                Regular inspection and treatment can help manage cockroaches,
                termites, rodents, mosquitoes, ants, bed bugs and other common
                pests. The required frequency will depend on how quickly pests
                return and the conditions around your property.
              </p>

              <p className="text-gray-700 leading-8">
                For professional inspection and treatment, explore our{" "}
                <Link
                  to="/general-pest-control"
                  className="text-green-700 font-semibold hover:underline"
                >
                  general pest control service in Bangalore
                </Link>
                .
              </p>
            </section>

            {/* SCHEDULE */}
            <section id="schedule" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Recommended Frequency
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Recommended Pest Control Schedule
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                The schedule below is a general recommendation. The actual
                service frequency may change depending on pest activity,
                sanitation, building condition, nearby surroundings and the
                findings of a professional site inspection.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                {schedule.map((item) => (
                  <div
                    key={item.place}
                    className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6 shadow-sm"
                  >
                    <h3 className="text-xl font-black text-[#063b3f]">
                      {item.place}
                    </h3>

                    <p className="text-green-700 font-bold mt-2 mb-3">
                      {item.time}
                    </p>

                    <p className="text-gray-600 text-sm leading-6">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <p className="text-gray-700 leading-7">
                  <strong className="text-[#063b3f]">Important:</strong> A heavy
                  or active infestation may require an initial treatment,
                  follow-up visits and more frequent monitoring before moving to
                  a preventive schedule.
                </p>
              </div>
            </section>

            {/* FACTORS AND BENEFITS */}
            <div className="grid md:grid-cols-2 gap-8 mb-14">
              <section id="factors" className="scroll-mt-28">
                <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                  Property Conditions
                </span>

                <h2 className="text-3xl font-black text-[#063b3f] mt-4 mb-6">
                  Factors Affecting Pest Control Frequency
                </h2>

                <div className="space-y-3">
                  {reasons.map((item) => (
                    <div
                      key={item}
                      className="bg-[#f6fffb] p-4 rounded-2xl border border-green-100 font-semibold text-[#063b3f]"
                    >
                      ✅ {item}
                    </div>
                  ))}
                </div>
              </section>

              <section id="benefits" className="scroll-mt-28">
                <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                  Preventive Benefits
                </span>

                <h2 className="text-3xl font-black text-[#063b3f] mt-4 mb-6">
                  Benefits of Regular Pest Control
                </h2>

                <div className="space-y-3">
                  {benefits.map((item) => (
                    <div
                      key={item}
                      className="bg-[#f6fffb] p-4 rounded-2xl border border-green-100 font-semibold text-[#063b3f]"
                    >
                      ✔ {item}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* AMC SECTION */}
            <section id="amc" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Service Options
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                One-Time Pest Control vs AMC Pest Control
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-green-100 rounded-2xl p-6">
                  <h3 className="text-2xl font-black text-[#063b3f] mb-4">
                    One-Time Pest Control
                  </h3>

                  <p className="text-gray-700 leading-7 mb-4">
                    One-time pest control is suitable when you are dealing with
                    a specific pest problem or need treatment for a particular
                    area.
                  </p>

                  <ul className="space-y-3 text-gray-700">
                    <li>✅ Suitable for a specific infestation</li>
                    <li>✅ Treatment based on current pest activity</li>
                    <li>✅ Useful for homes and small properties</li>
                    <li>✅ Follow-up may be advised when required</li>
                  </ul>
                </div>

                <div className="border border-green-100 bg-[#f8fcfb] rounded-2xl p-6">
                  <h3 className="text-2xl font-black text-[#063b3f] mb-4">
                    AMC Pest Control
                  </h3>

                  <p className="text-gray-700 leading-7 mb-4">
                    An annual maintenance contract is suitable for properties
                    that need regular inspection, scheduled treatment and
                    preventive pest management.
                  </p>

                  <ul className="space-y-3 text-gray-700">
                    <li>✅ Scheduled pest control visits</li>
                    <li>✅ Regular monitoring and prevention</li>
                    <li>✅ Suitable for commercial properties</li>
                    <li>✅ Better support for recurring pest activity</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* WARNING SIGNS */}
            <section id="warning-signs" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Active Infestation
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Signs You Need Immediate Pest Control
              </h2>

              <p className="text-gray-700 leading-8 mb-6">
                You should not wait for the next scheduled preventive treatment
                when there are clear signs of an active infestation. Book an
                inspection when you notice any of the following:
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

            {/* IN-ARTICLE CTA */}
            <div className="bg-[#063b3f] text-white rounded-3xl p-7 md:p-9 mb-14">
              <h2 className="text-3xl font-black mb-4">
                Not Sure Which Schedule You Need?
              </h2>

              <p className="text-gray-200 leading-7 mb-6">
                Our team can inspect your property, identify pest activity and
                recommend a suitable one-time treatment or scheduled pest
                control plan.
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
                Pest Control FAQs
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
                  to="/cockroach-management-service"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Cockroach Control →
                </Link>

                <Link
                  to="/anti-termite-treatment"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Termite Treatment →
                </Link>

                <Link
                  to="/rodent-management-service"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Rodent Control →
                </Link>

                <Link
                  to="/mosquito-management-service"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Mosquito Control →
                </Link>

                <Link
                  to="/bed-bug-treatment"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Bed Bug Treatment →
                </Link>

                <Link
                  to="/office-pest-control"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Office Pest Control →
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
                  apartments and businesses across Bangalore, including
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
                <h2 className="text-3xl font-black mb-3">Need Pest Control?</h2>

                <p className="text-gray-200 text-sm leading-6 mb-5">
                  Get professional pest inspection and treatment for your home
                  or business anywhere in Bangalore.
                </p>

                <a
                  href="tel:+919941229005"
                  className="block w-full bg-green-600 hover:bg-green-700 text-center py-3.5 rounded-xl font-bold text-base mb-3 transition"
                >
                  📞 Call Now
                </a>

                <a
                  href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20a%20regular%20pest%20control%20plan."
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

              {/* SERVICE LINKS */}
              <div className="bg-[#f8fcfb] border border-green-100 rounded-3xl p-6">
                <h2 className="font-black text-[#063b3f] text-lg mb-4">
                  🛠 Popular Services
                </h2>

                <div className="space-y-3">
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
                    to="/anti-termite-treatment"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Termite Treatment
                  </Link>

                  <Link
                    to="/bed-bug-treatment"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Bed Bug Treatment
                  </Link>

                  <Link
                    to="/rodent-management-service"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Rodent Control
                  </Link>

                  <Link
                    to="/mosquito-management-service"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Mosquito Control
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
            Book Your Next Pest Control Service
          </h2>

          <p className="text-gray-200 mb-8 max-w-2xl mx-auto leading-7">
            Whether you need a one-time treatment or an AMC plan, Acuity Pest
            Control provides professional pest management services for homes,
            apartments and businesses across Bangalore.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919941229005"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20a%20pest%20control%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#063b3f] px-8 py-4 rounded-2xl font-bold transition hover:bg-gray-100"
            >
              WhatsApp Us
            </a>

            <Link
              to="/services"
              className="border border-white px-8 py-4 rounded-2xl font-bold transition hover:bg-white/10"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowOftenShouldPestControlBeDone;
