import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/GermanCockroachVsAmericanCockroach.jpg";

import blogImg1 from "../../images/cockroch.png";
import blogImg15 from "../../images/Why Cockroaches Enter Your Kitchen & How to Stop Them.jpg";
import blogImg4 from "../../images/Monsoon Pest Control Tips for Bangalore Homes.jpg";
import blogImg8 from "../../images/Top 10 Household Pests in Bangalore.png";

const canonicalUrl =
  "https://www.acuitypestcontrols.com/blogs/german-cockroach-vs-american-cockroach";

const socialImage =
  "https://www.acuitypestcontrols.com/images/german-cockroach-vs-american-cockroach.jpg";

const faqs = [
  {
    q: "Which cockroach is more difficult to control?",
    a: "German cockroaches are usually more difficult to control because they reproduce faster and hide inside kitchens, appliances, cabinets and food preparation areas.",
  },
  {
    q: "Can American cockroaches fly?",
    a: "Yes, adult American cockroaches can glide or fly short distances in some conditions, but they usually crawl and enter buildings through drains, basements and gaps.",
  },
  {
    q: "Which cockroach is common in Bangalore?",
    a: "Both German and American cockroaches are commonly found in Bangalore. German cockroaches are often found in kitchens, while American cockroaches are common near drains and damp areas.",
  },
  {
    q: "Do DIY sprays remove cockroaches completely?",
    a: "DIY sprays may kill visible cockroaches, but they usually do not control hidden nests, eggs or breeding areas. Professional cockroach treatment gives better control.",
  },
];

const germanCockroachBlogSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#blogposting`,
    headline: "German Cockroach vs American Cockroach",
    description:
      "Compare German and American cockroaches by size, colour, hiding places and breeding habits. Learn which is harder to control and when to book cockroach treatment in Bangalore.",
    image: {
      "@type": "ImageObject",
      url: socialImage,
    },
    datePublished: "2026-02-10",
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
        name: "German Cockroach vs American Cockroach",
        item: canonicalUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "German Cockroach vs American Cockroach",
    description:
      "Learn how German and American cockroaches differ in size, colour, behaviour, hiding places and treatment requirements.",
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
        "#comparison h2",
        "#treatment h2",
        "#faq h2",
      ],
    },
  },
];

const GermanCockroachVsAmericanCockroach = () => {
  const comparison = [
    {
      title: "Size",
      german: "Small, around 1.2–1.6 cm",
      american: "Large, around 3–5 cm",
    },
    {
      title: "Colour",
      german: "Light brown with two dark stripes",
      american: "Reddish-brown",
    },
    {
      title: "Common Location",
      german: "Kitchens, cabinets, restaurants and appliances",
      american: "Drains, basements, bathrooms and sewers",
    },
    {
      title: "Breeding Speed",
      german: "Very fast",
      american: "Moderate",
    },
    {
      title: "Risk Level",
      german: "Very high in kitchens and food areas",
      american: "High near damp and drainage areas",
    },
    {
      title: "Treatment Difficulty",
      german: "Difficult because they hide and breed quickly",
      american: "Moderate with proper drain and entry-point treatment",
    },
  ];

  const germanSigns = [
    "Small light-brown cockroaches",
    "Found near kitchen appliances",
    "Usually seen at night",
    "Fast breeding activity",
    "Strong unpleasant smell",
    "Egg capsules near cabinets",
  ];

  const americanSigns = [
    "Large reddish-brown cockroaches",
    "Found near bathrooms",
    "Frequently seen near drains",
    "Activity in basements",
    "Presence inside garages",
    "Activity near outdoor manholes",
  ];

  const tocItems = [
    {
      id: "introduction",
      label: "Understanding the Difference",
    },
    {
      id: "comparison",
      label: "Comparison Table",
    },
    {
      id: "german-signs",
      label: "German Cockroach Signs",
    },
    {
      id: "american-signs",
      label: "American Cockroach Signs",
    },
    {
      id: "treatment",
      label: "Which One Is Harder to Control?",
    },
    {
      id: "prevention",
      label: "Cockroach Prevention Tips",
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
        "Understand why cockroaches enter homes and how professional treatment helps control them effectively.",
      image: blogImg1,
    },
    {
      title: "Why Cockroaches Enter Your Kitchen & How to Stop Them",
      slug: "/blogs/why-cockroaches-enter-your-kitchen",
      excerpt:
        "Discover why cockroaches are attracted to kitchens and the best ways to control them.",
      image: blogImg15,
    },
    {
      title: "Monsoon Pest Control Tips for Bangalore Homes",
      slug: "/blogs/monsoon-pest-control",
      excerpt:
        "Rainy season increases pest activity. Learn how to protect your home from pests.",
      image: blogImg4,
    },
    {
      title: "Top 10 Household Pests in Bangalore",
      slug: "/blogs/top-10-household-pests-in-bangalore",
      excerpt:
        "Discover the most common pests found in Bangalore homes and how to identify them.",
      image: blogImg8,
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

  const preventionTips = [
    "Keep kitchen counters and floors clean",
    "Store food in closed containers",
    "Repair leaking taps and pipes",
    "Clean grease around kitchen appliances",
    "Seal cracks and wall gaps",
    "Cover bathroom and kitchen drains",
    "Remove garbage regularly",
    "Book professional treatment for heavy infestations",
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      <SEO
        title="German vs American Cockroach: Differences & Control"
        description="Compare German and American cockroaches by size, colour, hiding places and breeding habits. Learn which is harder to control and when to book cockroach treatment in Bangalore."
        keywords="German cockroach vs American cockroach, difference between German and American cockroach, German cockroach identification, American cockroach identification, cockroach control Bangalore, cockroach treatment Bangalore, kitchen cockroach control, drain cockroach control"
        canonical={canonicalUrl}
        image={socialImage}
        schema={germanCockroachBlogSchema}
      />

      {/* HERO */}
      <section className="relative h-[48vh] sm:h-[55vh] md:h-[72vh]">
        <img
          src={bannerImage}
          alt="German cockroach and American cockroach identification comparison"
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
              className="mb-8 text-sm text-gray-600 flex flex-wrap items-center gap-2"
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
                className="text-[#063b3f] font-semibold"
                aria-current="page"
              >
                German Cockroach vs American Cockroach
              </span>
            </nav>

            {/* HEADER */}
            <header className="mb-10">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Cockroach Control Bangalore
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-[#063b3f] mt-4 mb-5 leading-tight">
                German Cockroach vs American Cockroach
              </h1>

              <p className="text-sm text-gray-500 mb-5">
                Updated June 2026 · 7-minute read
              </p>

              <p className="text-gray-700 leading-8">
                German cockroaches and American cockroaches are both common in
                Bangalore, but they differ in size, hiding places, breeding
                speed and treatment requirements. Identifying the correct
                species helps you choose the right cockroach control plan.
              </p>
            </header>

            {/* TABLE OF CONTENTS */}
            <div className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6 mb-10">
              <p className="font-black text-[#063b3f] mb-3">
                📑 Table of Contents
              </p>

              <ul className="grid sm:grid-cols-2 gap-2 text-sm">
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

            {/* INTRODUCTION */}
            <section id="introduction" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Cockroach Identification
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Understanding the Difference
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                Cockroaches are among the most common household and commercial
                pests in Bangalore. Two species frequently found in buildings
                are the German cockroach and the American cockroach. Both can
                contaminate surfaces and create hygiene problems, but their
                behaviour and hiding places are different.
              </p>

              <p className="text-gray-700 leading-8">
                German cockroaches are usually found inside kitchens, cabinets
                and electrical appliances. American cockroaches are larger and
                are commonly seen near bathrooms, drains, basements and damp
                areas. For professional support, explore our{" "}
                <Link
                  to="/cockroach-management-service"
                  className="text-green-700 font-semibold hover:underline"
                >
                  cockroach control service in Bangalore
                </Link>
                .
              </p>
            </section>

            {/* COMPARISON TABLE */}
            <section id="comparison" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Species Comparison
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                German Cockroach vs American Cockroach Comparison
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-green-100 shadow-sm">
                <table className="w-full min-w-[700px] bg-white">
                  <thead className="bg-green-600 text-white">
                    <tr>
                      <th scope="col" className="p-5 text-left">
                        Feature
                      </th>

                      <th scope="col" className="p-5 text-left">
                        German Cockroach
                      </th>

                      <th scope="col" className="p-5 text-left">
                        American Cockroach
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {comparison.map((item) => (
                      <tr
                        key={item.title}
                        className="border-b border-gray-100 last:border-b-0"
                      >
                        <th
                          scope="row"
                          className="p-5 text-left font-bold text-[#063b3f]"
                        >
                          {item.title}
                        </th>

                        <td className="p-5 text-gray-700">{item.german}</td>

                        <td className="p-5 text-gray-700">{item.american}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* SIGNS */}
            <div className="grid md:grid-cols-2 gap-8 mb-14">
              <section id="german-signs" className="scroll-mt-28">
                <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                  Kitchen Infestation
                </span>

                <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                  German Cockroach Signs
                </h2>

                <div className="space-y-3">
                  {germanSigns.map((item) => (
                    <div
                      key={item}
                      className="bg-[#f6fffb] p-4 rounded-2xl border border-green-100 font-semibold text-[#063b3f]"
                    >
                      ✅ {item}
                    </div>
                  ))}
                </div>
              </section>

              <section id="american-signs" className="scroll-mt-28">
                <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                  Drain Infestation
                </span>

                <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                  American Cockroach Signs
                </h2>

                <div className="space-y-3">
                  {americanSigns.map((item) => (
                    <div
                      key={item}
                      className="bg-[#f6fffb] p-4 rounded-2xl border border-green-100 font-semibold text-[#063b3f]"
                    >
                      ✅ {item}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* INTERNAL LINKS BOX */}
            <div className="mb-14 bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h2 className="text-xl font-black text-[#063b3f] mb-3">
                Not Sure Which Cockroach You Have?
              </h2>

              <p className="text-gray-700 leading-7">
                Use our{" "}
                <Link
                  to="/pest-identification"
                  className="text-green-700 font-semibold hover:underline"
                >
                  pest identification guide
                </Link>{" "}
                to compare common household pests. For active cockroach
                infestations, book our{" "}
                <Link
                  to="/cockroach-management-service"
                  className="text-green-700 font-semibold hover:underline"
                >
                  professional cockroach treatment in Bangalore
                </Link>
                .
              </p>
            </div>

            {/* TREATMENT */}
            <section id="treatment" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Professional Treatment
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Which Cockroach Is Harder to Control?
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                German cockroaches are usually harder to control because they
                reproduce quickly and hide inside kitchen cabinets, appliances,
                cracks and food storage areas. Eggs and hidden colonies may
                remain after ordinary spray application, so infestations often
                require{" "}
                <Link
                  to="/cockroach-management-service"
                  className="text-green-700 font-semibold hover:underline"
                >
                  professional cockroach treatment
                </Link>
                .
              </p>

              <p className="text-gray-700 leading-8 mb-5">
                American cockroaches are larger and often enter buildings
                through drains, basements, bathrooms, sewer connections and
                outdoor gaps. Controlling them requires drain treatment,
                sanitation, entry-point inspection and suitable pest control
                methods.
              </p>

              <p className="text-gray-700 leading-8">
                Properties experiencing several pest problems can also consider
                our{" "}
                <Link
                  to="/general-pest-control"
                  className="text-green-700 font-semibold hover:underline"
                >
                  general pest control service
                </Link>{" "}
                for broader household pest protection.
              </p>
            </section>

            {/* PREVENTION */}
            <section id="prevention" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Prevention Guide
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                How to Prevent Cockroaches
              </h2>

              <p className="text-gray-700 leading-8 mb-6">
                Regular cleaning, moisture control and sealing entry points can
                reduce cockroach activity. However, recurring or heavy
                infestations generally require professional inspection and
                targeted treatment.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {preventionTips.map((tip) => (
                  <div
                    key={tip}
                    className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-5"
                  >
                    <p className="font-semibold text-[#063b3f]">✅ {tip}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Cockroach FAQs
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
            <section className="mb-14 bg-[#f6fffb] border border-green-100 rounded-2xl p-6">
              <h2 className="text-2xl font-black text-[#063b3f] mb-4">
                Cockroach Control Services
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                Acuity Pest Control provides cockroach treatment for homes,
                apartments, restaurants, kitchens, offices, hotels and other
                commercial properties across Bangalore.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/cockroach-management-service"
                  className="text-green-700 font-bold hover:underline"
                >
                  View Cockroach Control Service →
                </Link>

                <Link
                  to="/contact"
                  className="text-green-700 font-bold hover:underline"
                >
                  Book an Inspection →
                </Link>

                <Link
                  to="/blogs"
                  className="text-green-700 font-bold hover:underline"
                >
                  Read More Blogs →
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
                  Last reviewed by Acuity Pest Control professionals
                </p>

                <p className="text-gray-600 text-sm leading-6">
                  We provide professional pest control solutions for homes,
                  apartments, restaurants, offices and commercial spaces across
                  Bangalore, including cockroach, termite, bed bug, mosquito and
                  rodent control.
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
                  Get cockroach inspection and treatment for German or American
                  cockroaches anywhere in Bangalore.
                </p>

                <a
                  href="tel:+919941229005"
                  className="block w-full bg-green-600 hover:bg-green-700 text-center py-3.5 rounded-xl font-bold text-base mb-3 transition"
                >
                  📞 Call Now
                </a>

                <a
                  href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20cockroach%20treatment."
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
                    to="/ant-control-treatment"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Ant Control
                  </Link>

                  <Link
                    to="/disinfection-services"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Disinfection Services
                  </Link>

                  <Link
                    to="/pest-identification"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Pest Identification
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
            Need Professional Cockroach Control?
          </h2>

          <p className="text-gray-200 mb-8 max-w-2xl mx-auto leading-7">
            Acuity Pest Control provides professional German and American
            cockroach treatment for homes, apartments, restaurants, kitchens
            and offices across Bangalore.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919941229005"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20cockroach%20treatment."
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

export default GermanCockroachVsAmericanCockroach;