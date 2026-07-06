import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/howtoprevent.jpg";

import blogImg from "../../images/cockroch.png";
import blogImg1 from "../../images/cockroch1.png";
import blogImg3 from "../../images/Professional Pest Control vs DIY.jpg";
import blogImg4 from "../../images/Monsoon Pest Control Tips for Bangalore Homes.jpg";

const faqs = [
  {
    q: "Why do ants enter homes?",
    a: "Ants usually enter homes searching for food, water and shelter. Sweet food, crumbs, moisture and open food containers attract ants quickly.",
  },
  {
    q: "Can ants damage my home?",
    a: "Some ant species can contaminate food, while certain wood-related ant activity may affect wooden areas. Professional inspection helps identify the exact issue.",
  },
  {
    q: "Are DIY ant sprays effective?",
    a: "DIY sprays may kill visible ants, but they usually do not control the colony or nesting area. Professional ant treatment gives better control.",
  },
  {
    q: "How often should ant control be done?",
    a: "Most homes can plan preventive pest control every 3 to 6 months depending on ant activity, food storage, moisture and surrounding conditions.",
  },
];

const antPreventionSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id":
      "https://acuitypestcontrols.com/blogs/how-to-prevent-ant-infestation-at-home#blogposting",
    headline: "How to Prevent Ant Infestation at Home",
    description:
      "Learn practical ways to prevent ants from entering your home, common causes of ant infestation and when professional ant control is required.",
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
        "https://acuitypestcontrols.com/blogs/how-to-prevent-ant-infestation-at-home",
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
        name: "How to Prevent Ant Infestation at Home",
        item: "https://acuitypestcontrols.com/blogs/how-to-prevent-ant-infestation-at-home",
      },
    ],
  },
];

const HowToPreventAntInfestationAtHome = () => {
  const causes = [
    "Food crumbs left on kitchen counters",
    "Open sugar, honey and food containers",
    "Water leaks and excess moisture",
    "Unsealed wall cracks and entry points",
    "Garbage bins without lids",
    "Pet food left uncovered",
  ];

  const prevention = [
    "Clean kitchen surfaces daily",
    "Store food in airtight containers",
    "Seal cracks around doors and windows",
    "Fix leaking taps and pipes",
    "Empty garbage bins regularly",
    "Trim plants touching your home",
  ];

  const treatment = [
    "Inspection",
    "Identify ant species",
    "Locate nesting areas",
    "Apply professional ant treatment",
    "Treat entry points",
    "Follow-up monitoring",
  ];

  const tocItems = [
    { id: "introduction", label: "Why Ant Infestation Happens" },
    { id: "causes", label: "Common Causes" },
    { id: "prevention", label: "Best Ways to Prevent Ants" },
    { id: "treatment", label: "Professional Ant Control Process" },
    { id: "faq", label: "FAQs" },
  ];

  const relatedPosts = [
    {
      title: "How to Get Rid of Cockroaches Permanently",
      slug: "/blogs/get-rid-of-cockroaches",
      excerpt: "Professional methods to control cockroaches from your home.",
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
      excerpt: "Compare professional pest control and DIY pest treatment.",
      image: blogImg3,
    },
    {
      title: "Monsoon Pest Control Tips for Bangalore Homes",
      slug: "/blogs/monsoon-pest-control",
      excerpt: "Rainy season increases pest activity in Bangalore homes.",
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
    <div className="w-full bg-white overflow-hidden">
      <SEO
        title="How to Prevent Ant Infestation at Home | Acuity Pest Control"
        description="Learn how to prevent ant infestation at home, common causes of ants in kitchen areas and when to book professional ant control in Bangalore."
        keywords="how to prevent ant infestation, ant control Bangalore, ants in home, ant treatment Bangalore, ant pest control, kitchen ants control, Acuity Pest Control"
        canonical="https://acuitypestcontrols.com/blogs/how-to-prevent-ant-infestation-at-home"
        image="https://acuitypestcontrols.com/logo.png"
        schema={antPreventionSchema}
      />

      {/* HERO */}
      <section className="relative h-[55vh] md:h-[110vh] flex items-center">
        <img
          src={bannerImage}
          alt="How to prevent ant infestation at home by Acuity Pest Control"
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
                Ant Control Bangalore
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-[#063b3f] mt-4 mb-5 leading-tight">
                How to Prevent Ant Infestation at Home
              </h1>

              <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-5">
                <span>📅 June 26, 2026</span>
                <span>•</span>
                <span>⏱ 5 min read</span>
              </div>

              <p className="text-gray-600 leading-8">
                Ants are common in kitchens, dining rooms, balconies and food
                storage areas. This guide explains why ants enter homes, what
                attracts them, how to prevent ant infestation and when to book
                professional ant control service.
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
            <section id="introduction" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Why Ant Infestation Happens
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                Ants usually enter homes in search of food, water and shelter.
                They are commonly seen near kitchens, dining areas, sinks,
                balconies, wall cracks and food storage shelves. Once a few ants
                find a food source, they can leave a trail that attracts more
                ants from the colony.
              </p>

              <p className="text-gray-700 leading-8">
                Regular cleaning, proper food storage and sealing entry points
                can reduce ant activity. If you are already facing repeated ant
                problems, explore our{" "}
                <Link
                  to="/ant-control-treatment"
                  className="text-green-700 font-semibold hover:underline"
                >
                  ant control treatment in Bangalore
                </Link>
                .
              </p>
            </section>

            {/* Causes */}
            <section id="causes" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Common Causes of Ant Infestation
              </h2>

              <p className="text-gray-700 leading-8 mb-6">
                Most ant problems start from food access, moisture or small
                entry points. These are the common reasons ants enter homes:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {causes.map((item) => (
                  <div
                    key={item}
                    className="bg-[#f6fffb] rounded-2xl p-5 border border-green-100 shadow-sm"
                  >
                    <p className="font-semibold text-[#063b3f]">🐜 {item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Prevention */}
            <section id="prevention" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Best Ways to Prevent Ants
              </h2>

              <p className="text-gray-700 leading-8 mb-6">
                Simple housekeeping and maintenance steps can help prevent ants
                from entering your home and kitchen.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {prevention.map((item, index) => (
                  <div
                    key={item}
                    className="relative bg-[#f8fcfb] border border-green-100 rounded-2xl p-6 shadow-sm"
                  >
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-black text-sm">
                      {index + 1}
                    </div>

                    <p className="font-semibold text-gray-700 leading-7">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Professional Treatment */}
            <section id="treatment" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Professional Ant Control Process
              </h2>

              <p className="text-gray-700 leading-8 mb-6">
                Professional ant control focuses on identifying the species,
                locating entry points and treating the areas where ants are
                active.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {treatment.map((step, index) => (
                  <div
                    key={step}
                    className="bg-[#f6fffb] border border-green-100 rounded-2xl p-6 shadow-sm"
                  >
                    <div className="text-3xl font-black text-green-600 mb-4">
                      {index + 1}
                    </div>

                    <h3 className="text-xl font-bold text-[#063b3f]">{step}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
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

            {/* Service Links */}
            <div className="bg-white border border-green-100 rounded-2xl p-6 my-10">
              <h3 className="text-xl font-bold text-[#063b3f] mb-4">
                🔗 Related Pest Control Services
              </h3>

              <div className="grid sm:grid-cols-2 gap-3">
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
                  apartments and businesses across Bangalore, including ant,
                  cockroach, termite, bed bug, mosquito and rodent control.
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
              <h3 className="text-4xl font-black mb-3">Need Ant Control?</h3>

              <p className="text-gray-200 text-sm leading-6 mb-5">
                Get professional inspection and treatment for ants in your home
                or business anywhere in Bangalore.
              </p>

              <a
                href="tel:+919941229005"
                className="block w-full bg-green-600 hover:bg-green-700 text-center py-3.5 rounded-xl font-bold text-base mb-3 transition"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20ant%20control."
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
                🛠 Related Services
              </h4>

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
          </aside>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-[#063b3f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-5">
            Need Professional Ant Control?
          </h2>

          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
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
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20ant%20control."
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
