import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/Top10HouseholdPestsBangalore.jpg";

import blogImg1 from "../../images/cockroch.png";
import blogImg5 from "../../images/Bed Bug.png";
import blogImg6 from "../../images/Black Rat Roof Rat.png";
import blogImg2 from "../../images/Signs of Termite Infestation in Your Home.jpg";

const faqs = [
  {
    q: "Which pest is most common in Bangalore homes?",
    a: "Cockroaches, mosquitoes, ants, termites, rodents and bed bugs are commonly found in Bangalore homes due to warm weather, moisture, drains and urban living conditions.",
  },
  {
    q: "How often should I get pest control done?",
    a: "For homes, pest control can be planned once every 3 to 6 months depending on pest activity, location and property condition.",
  },
  {
    q: "Are pest control treatments safe?",
    a: "Professional pest control can be safe when done by trained technicians using proper application methods and safety instructions.",
  },
  {
    q: "How can I prevent termites?",
    a: "Avoid moisture near wooden areas, inspect furniture regularly, fix leaks and book anti-termite treatment if you notice mud tubes or hollow wood.",
  },
  {
    q: "Do mosquitoes breed only in dirty water?",
    a: "No, mosquitoes can breed even in clean stagnant water collected in buckets, plant trays, tyres, tanks and balcony corners.",
  },
];

const householdPestsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id":
      "https://acuitypestcontrols.com/blogs/top-10-household-pests-in-bangalore#blogposting",
    headline: "Top 10 Household Pests in Bangalore",
    description:
      "Learn how to identify, prevent and control the most common pests found in Bangalore homes including cockroaches, termites, mosquitoes, rats and bed bugs.",
    image: "https://acuitypestcontrols.com/logo.png",
    datePublished: "2026-06-26",
    dateModified: "2026-06-26",
    author: {
      "@type": "Organization",
      name: "Acuity Pest Control",
      url: "https://acuitypestcontrols.com/",
    },
    publisher: {
      "@type": "Organization",
      name: "Acuity Pest Control",
      logo: {
        "@type": "ImageObject",
        url: "https://acuitypestcontrols.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://acuitypestcontrols.com/blogs/top-10-household-pests-in-bangalore",
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
        item: "https://acuitypestcontrols.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: "https://acuitypestcontrols.com/blogs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Top 10 Household Pests in Bangalore",
        item: "https://acuitypestcontrols.com/blogs/top-10-household-pests-in-bangalore",
      },
    ],
  },
];

const Top10HouseholdPestsBangalore = () => {
  const pests = [
    {
      name: "Cockroaches",
      found: "Kitchen, bathrooms, drains",
      problem: "Food contamination, allergies and bacteria spread",
      treatment: "Cockroach Control",
      link: "/cockroach-management-service",
    },
    {
      name: "Termites",
      found: "Wooden furniture, doors, windows, walls",
      problem: "Wood damage and costly repairs",
      treatment: "Termite Control",
      link: "/anti-termite-treatment",
    },
    {
      name: "Mosquitoes",
      found: "Stagnant water, gardens, balconies",
      problem: "Mosquito bites and health concerns",
      treatment: "Mosquito Control",
      link: "/mosquito-management-service",
    },
    {
      name: "Rats",
      found: "Kitchen, store rooms, roofs, drains",
      problem: "Wire damage and food contamination",
      treatment: "Rodent Control",
      link: "/rodent-management-service",
    },
    {
      name: "Bed Bugs",
      found: "Mattress, sofa, bed frame",
      problem: "Itchy bites and disturbed sleep",
      treatment: "Bed Bug Treatment",
      link: "/bed-bug-treatment",
    },
    {
      name: "Ants",
      found: "Kitchen, dining area, food storage",
      problem: "Food contamination and recurring trails",
      treatment: "Ant Control",
      link: "/ant-control-treatment",
    },
    {
      name: "Lizards",
      found: "Walls, ceilings, light areas",
      problem: "Droppings and hygiene issues",
      treatment: "General Pest Control",
      link: "/general-pest-control",
    },
    {
      name: "Spiders",
      found: "Corners, ceilings, storage rooms",
      problem: "Webs and possible bites",
      treatment: "General Pest Control",
      link: "/general-pest-control",
    },
    {
      name: "Wood Borers",
      found: "Furniture, doors, wooden interiors",
      problem: "Furniture damage and powder marks",
      treatment: "Wood Borer Treatment",
      link: "/wood-borer-treatment",
    },
    {
      name: "Silverfish",
      found: "Books, wardrobes, bathrooms",
      problem: "Paper, clothes and fabric damage",
      treatment: "General Pest Control",
      link: "/general-pest-control",
    },
  ];

  const preventionTips = [
    "Keep kitchen and dining areas clean",
    "Store food in airtight containers",
    "Seal wall cracks and entry gaps",
    "Remove stagnant water regularly",
    "Dispose garbage daily",
    "Schedule regular pest inspections",
  ];

  const areas = [
    "Whitefield",
    "Electronic City",
    "HSR Layout",
    "JP Nagar",
    "Koramangala",
    "Hebbal",
    "Indiranagar",
    "Marathahalli",
    "Jayanagar",
    "Sarjapur Road",
    "Banashankari",
    "BTM Layout",
  ];

  const tocItems = [
    {
      id: "why-pest-control-matters",
      label: "Why Household Pest Control Matters",
    },
    { id: "top-10-pests", label: "Top 10 Household Pests" },
    { id: "prevention-tips", label: "How to Prevent Household Pests" },
    { id: "why-acuity", label: "Why Choose Acuity Pest Control?" },
    { id: "faq", label: "Household Pest Control FAQs" },
    { id: "service-areas", label: "Service Areas" },
  ];

  const relatedPosts = [
    {
      title: "How to Get Rid of Cockroaches Permanently",
      slug: "/blogs/get-rid-of-cockroaches",
      excerpt: "Professional methods to control cockroaches from your home.",
      image: blogImg1,
    },
    {
      title: "Signs of Termite Infestation in Your Home",
      slug: "/blogs/signs-of-termite-infestation",
      excerpt: "Common termite signs every homeowner should know.",
      image: blogImg2,
    },
    {
      title: "Bed Bug Treatment Guide",
      slug: "/blogs/bed-bug-treatment",
      excerpt:
        "Know the signs of bed bugs and how professional treatment supports control.",
      image: blogImg5,
    },
    {
      title: "Rat Control Tips for Homes",
      slug: "/blogs/rat-control-tips-for-homes",
      excerpt:
        "Learn how to identify rat infestation and prevent rodent entry.",
      image: blogImg6,
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
    <div className="w-full bg-white overflow-hidden">
      <SEO
        title="Top 10 Household Pests in Bangalore | Acuity Pest Control"
        description="Learn how to identify, prevent and control the most common household pests in Bangalore including cockroaches, termites, mosquitoes, rats, bed bugs and ants."
        keywords="household pests Bangalore, common pests Bangalore, cockroach control Bangalore, termite treatment Bangalore, mosquito control Bangalore, rodent control Bangalore, bed bug treatment Bangalore, Acuity Pest Control"
        canonical="https://acuitypestcontrols.com/blogs/top-10-household-pests-in-bangalore"
        image="https://acuitypestcontrols.com/logo.png"
        schema={householdPestsSchema}
      />

      {/* HERO */}
      <section className="relative h-[55vh] md:h-[110vh] flex items-center">
        <img
          src={bannerImage}
          alt="Top 10 household pests in Bangalore by Acuity Pest Control"
          className="absolute inset-0 w-full h-full "
        />

        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* BLOG LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* MAIN CONTENT */}
          <div className="lg:w-2/3">
            <div className="mb-10">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Pest Identification Guide
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-[#063b3f] mt-4 mb-5 leading-tight">
                Top 10 Household Pests in Bangalore
              </h1>

              <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-5">
                <span>📅 June 26, 2026</span>
                <span>•</span>
                <span>⏱ 7 min read</span>
              </div>

              <p className="text-gray-600 leading-8">
                Bangalore homes commonly face pest problems because of warm
                weather, seasonal rains, food sources, drains and moisture. This
                guide explains the most common household pests, where they are
                found and which treatment may be needed.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6 mb-10">
              <p className="font-black text-[#063b3f] mb-3">
                📑 Table of Contents
              </p>

              <ul className="grid sm:grid-cols-2 gap-1 text-sm">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-green-700 hover:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Introduction */}
            <section
              id="why-pest-control-matters"
              className="scroll-mt-20 mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Why Household Pest Control Matters
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                Bangalore's warm climate, seasonal rains and urban lifestyle
                create suitable conditions for many household pests.
                Cockroaches, termites, mosquitoes, rats, bed bugs and ants can
                affect hygiene, food safety, sleep quality and property value.
              </p>

              <p className="text-gray-700 leading-8">
                Identifying pests early and taking preventive action helps
                protect your family, furniture, food and home environment. For
                professional help, explore our{" "}
                <Link
                  to="/general-pest-control"
                  className="text-green-700 font-semibold hover:underline"
                >
                  general pest control service in Bangalore
                </Link>
                .
              </p>
            </section>

            {/* Top 10 Pests */}
            <section id="top-10-pests" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Top 10 Household Pests Found in Bangalore
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                {pests.map((pest, index) => (
                  <div
                    key={pest.name}
                    className="bg-[#f6fffb] border border-green-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-black shrink-0 text-sm">
                        {index + 1}
                      </div>

                      <div>
                        <h3 className="text-xl font-black text-[#063b3f] mb-2">
                          {pest.name}
                        </h3>

                        <p className="text-gray-700 text-sm leading-6">
                          <strong>Where found:</strong> {pest.found}
                        </p>

                        <p className="text-gray-700 text-sm leading-6 mt-1">
                          <strong>Problems:</strong> {pest.problem}
                        </p>

                        <p className="text-gray-700 text-sm leading-6 mt-1">
                          <strong>Treatment:</strong> {pest.treatment}
                        </p>

                        <Link
                          to={pest.link}
                          className="inline-block mt-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-bold text-xs transition"
                        >
                          View Service
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Prevention Tips */}
            <section id="prevention-tips" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                How to Prevent Household Pests
              </h2>

              <p className="text-gray-700 leading-8 mb-6">
                Regular cleaning, sealing entry points and removing moisture can
                reduce pest activity. But when infestation is active,
                professional treatment gives better control support.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {preventionTips.map((item) => (
                  <div
                    key={item}
                    className="bg-[#f6fffb] rounded-2xl p-4 font-bold text-[#063b3f] border border-green-100"
                  >
                    ✅ {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Why Acuity */}
            <section id="why-acuity" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Why Choose Acuity Pest Control?
              </h2>

              <p className="text-gray-700 leading-8 mb-6">
                We provide professional pest control services for homes,
                apartments, offices and commercial properties across Bangalore.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Trained Technicians",
                  "Safe Application Methods",
                  "Quick Support",
                  "Affordable Pricing",
                  "Residential & Commercial",
                  "Prevention Guidance",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-[#f6fffb] rounded-2xl p-4 font-bold text-[#063b3f] border border-green-100"
                  >
                    ✅ {item}
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Household Pest Control FAQs
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

            {/* Service Areas */}
            <section id="service-areas" className="scroll-mt-20 mb-6">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Pest Control Services Across Bangalore
              </h2>

              <div className="flex flex-wrap gap-2">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="bg-[#f6fffb] border border-green-100 text-[#063b3f] px-4 py-2 rounded-full font-semibold text-sm"
                  >
                    Pest Control in {area}
                  </span>
                ))}
              </div>
            </section>

            {/* In-article CTA */}
            <div className="bg-[#f1fbff] border-l-4 border-[#008fc5] p-6 rounded-xl my-10">
              <h3 className="text-3xl md:text-4xl font-bold text-[#006f9f] mb-3">
                Need Professional Pest Control in Bangalore?
              </h3>

              <p className="text-gray-700 leading-7">
                Protect your home from cockroaches, termites, mosquitoes,
                rodents, bed bugs, ants and other household pests.{" "}
                <Link
                  to="/contact"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Book pest inspection today
                </Link>
                .
              </p>
            </div>

            {/* Service Interlinks */}
            <div className="bg-white border border-green-100 rounded-2xl p-6 my-10">
              <h3 className="text-xl font-bold text-[#063b3f] mb-4">
                🔗 Related Pest Control Services
              </h3>

              <div className="grid sm:grid-cols-2 gap-3">
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
                  to="/mosquito-management-service"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Mosquito Control →
                </Link>

                <Link
                  to="/rodent-management-service"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Rodent Control →
                </Link>

                <Link
                  to="/bed-bug-treatment"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Bed Bug Treatment →
                </Link>

                <Link
                  to="/ant-control-treatment"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Ant Control →
                </Link>
              </div>
            </div>

            {/* Blog Interlinks */}
            <div className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6 my-10">
              <h3 className="text-xl font-bold text-[#063b3f] mb-4">
                📖 Related Pest Control Guides
              </h3>

              <div className="grid sm:grid-cols-2 gap-3">
                <Link
                  to="/blogs/bed-bug-treatment"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Bed Bug Treatment Guide →
                </Link>

                <Link
                  to="/blogs/rat-control-tips-for-homes"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Rat Control Tips for Homes →
                </Link>

                <Link
                  to="/blogs/mosquito-prevention-during-rainy-season"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Mosquito Prevention During Rainy Season →
                </Link>

                <Link
                  to="/blogs/signs-of-termite-infestation"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Signs of Termite Infestation →
                </Link>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-4xl font-black flex-shrink-0">
                AP
              </div>

              <div>
                <p className="font-black text-[#063b3f] text-lg">
                  Acuity Pest Control Team
                </p>

                <p className="text-gray-600 text-sm leading-6">
                  We provide professional pest control solutions for homes,
                  apartments and businesses across Bangalore, including
                  cockroach, termite, bed bug, mosquito, rodent and ant control.
                </p>

                <div className="flex gap-3 mt-2">
                  <Link
                    to="/about"
                    className="text-green-700 font-semibold text-sm hover:underline"
                  >
                    About Us
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

            {/* Related Posts */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="text-4xl font-black text-[#063b3f] mb-6">
                📖 You Might Also Like
              </h3>

              <div className="grid sm:grid-cols-2 gap-5">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    to={post.slug}
                    className="block bg-[#f8fcfb] border border-green-100 rounded-2xl overflow-hidden hover:shadow-md transition group"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={post.image}
                        alt={`${post.title} - Acuity Pest Control Blog`}
                        className="w-full h-full  group-hover:scale-105 transition duration-500"
                      />
                    </div>

                    <div className="p-4">
                      <h4 className="font-black text-[#063b3f] text-lg mb-1 leading-snug">
                        {post.title}
                      </h4>

                      <p className="text-gray-600 text-sm leading-6">
                        {post.excerpt}
                      </p>

                      <span className="text-green-700 font-semibold text-sm mt-2 inline-block">
                        Read More →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:w-1/3">
            {/* CTA Card */}
            <div className="bg-[#063b3f] text-white rounded-3xl p-7 mb-8">
              <h3 className="text-4xl font-black mb-3">Need Pest Control?</h3>

              <p className="text-gray-200 text-sm leading-6 mb-5">
                Get professional pest inspection and treatment for your home or
                business anywhere in Bangalore.
              </p>

              <a
                href="tel:+919941229005"
                className="block w-full bg-green-600 hover:bg-green-700 text-center py-3.5 rounded-xl font-bold text-base mb-3 transition"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20pest%20control%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-[#063b3f] text-center py-3.5 rounded-xl font-bold text-base mb-3 transition"
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

            {/* Popular Posts */}
            <div className="bg-[#f8fcfb] border border-green-100 rounded-3xl p-6 mb-8">
              <h4 className="font-black text-[#063b3f] text-lg mb-4">
                🔥 Popular Posts
              </h4>

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

            {/* Categories */}
            <div className="bg-[#f8fcfb] border border-green-100 rounded-3xl p-6 mb-8">
              <h4 className="font-black text-[#063b3f] text-lg mb-4">
                📂 Categories
              </h4>

              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    to={`/blogs/category/${cat
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                    className="bg-white border border-green-200 px-4 py-2 rounded-full text-sm font-semibold text-[#063b3f] hover:bg-green-50 transition"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>

            {/* Service Links */}
            <div className="bg-[#f8fcfb] border border-green-100 rounded-3xl p-6">
              <h4 className="font-black text-[#063b3f] text-lg mb-4">
                🛠 Popular Services
              </h4>

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
          </aside>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-[#063b3f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-5">
            Need Professional Pest Control in Bangalore?
          </h2>

          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Protect your home from cockroaches, termites, mosquitoes, rodents,
            bed bugs, ants and other household pests with Acuity Pest Control.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919941229005"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20pest%20control%20service."
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

export default Top10HouseholdPestsBangalore;
