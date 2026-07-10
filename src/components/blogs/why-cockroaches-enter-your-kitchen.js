import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/WhyCockroachesEnterKitchen.jpg";

import blogImg1 from "../../images/cockroch1.png";
import blogImg3 from "../../images/Professional Pest Control vs DIY.jpg";
import blogImg4 from "../../images/Monsoon Pest Control Tips for Bangalore Homes.jpg";
import blogImg15 from "../../images/Why Cockroaches Enter Your Kitchen & How to Stop Them.jpg";

const faqs = [
  {
    q: "Why do cockroaches come into kitchens?",
    a: "Cockroaches enter kitchens because they find food, water, warmth and hiding places near cabinets, drains, sinks and appliances.",
  },
  {
    q: "Are cockroaches dangerous?",
    a: "Yes, cockroaches can contaminate food and kitchen surfaces, creating hygiene and health concerns for homes and commercial kitchens.",
  },
  {
    q: "Can DIY sprays remove cockroaches completely?",
    a: "DIY sprays may kill visible cockroaches, but they usually do not control hidden nests, eggs and breeding areas.",
  },
  {
    q: "Do you provide cockroach control in Bangalore?",
    a: "Yes, Acuity Pest Control provides professional cockroach control services across Bangalore for homes, apartments, restaurants, offices and commercial spaces.",
  },
];

const cockroachKitchenSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id":
      "https://www.acuitypestcontrols.com/blogs/why-cockroaches-enter-your-kitchen#blogposting",
    headline: "Why Cockroaches Enter Your Kitchen & How to Stop Them",
    description:
      "Learn why cockroaches are attracted to kitchens, common causes of cockroach activity and how professional cockroach control helps protect hygiene.",
    image: "https://www.acuitypestcontrols.com/logo.png",
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
      logo: {
        "@type": "ImageObject",
        url: "https://www.acuitypestcontrols.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.acuitypestcontrols.com/blogs/why-cockroaches-enter-your-kitchen",
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
        item: "https://www.acuitypestcontrols.com/blogs/why-cockroaches-enter-your-kitchen",
      },
    ],
  },
];

const WhyCockroachesEnterKitchen = () => {
  const reasons = [
    "Food crumbs left on counters and floors",
    "Unwashed dishes kept overnight",
    "Open garbage bins",
    "Water leaks under sink area",
    "Grease buildup near stove and exhaust",
    "Cracks, drains and wall gaps",
  ];

  const prevention = [
    "Clean kitchen counters every night",
    "Store food in airtight containers",
    "Fix leaking taps and pipes",
    "Keep dustbins closed",
    "Seal cracks and drain gaps",
    "Book professional cockroach treatment",
  ];

  const tocItems = [
    { id: "why-kitchens-attract", label: "Why Kitchens Attract Cockroaches" },
    {
      id: "common-reasons",
      label: "Common Reasons Cockroaches Enter Kitchens",
    },
    { id: "how-to-stop", label: "How to Stop Cockroaches in Your Kitchen" },
    {
      id: "professional-treatment",
      label: "Why Professional Treatment Works Better",
    },
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
      title: "German Cockroach vs American Cockroach",
      slug: "/blogs/german-cockroach-vs-american-cockroach",
      excerpt: "Learn the difference between German and American cockroaches.",
      image: blogImg15,
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
      excerpt:
        "Rainy season increases pest activity. Learn how to protect your home.",
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
        title="Why Cockroaches Enter Your Kitchen | Acuity Pest Control"
        description="Learn why cockroaches enter kitchens, what attracts them, how to prevent kitchen cockroaches and when to book cockroach control in Bangalore."
        keywords="cockroaches in kitchen, why cockroaches enter kitchen, cockroach control Bangalore, kitchen pest control, cockroach treatment Bangalore, Acuity Pest Control"
        canonical="https://www.acuitypestcontrols.com/blogs/why-cockroaches-enter-your-kitchen"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={cockroachKitchenSchema}
      />

      {/* HERO */}
      <section className="relative h-[55vh] md:h-[110vh] flex items-center">
        <img
          src={bannerImage}
          alt="Why cockroaches enter your kitchen by Acuity Pest Control"
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
                Cockroach Control Bangalore
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-[#063b3f] mt-4 mb-5 leading-tight">
                Why Cockroaches Enter Your Kitchen & How to Stop Them
              </h1>

              <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-5">
                <span>📅 Jan 26, 2026</span>
                <span>•</span>
                <span>⏱ 5 min read</span>
              </div>

              <p className="text-gray-600 leading-8">
                Cockroaches commonly enter kitchens because they find food,
                water, warmth and hiding places. This guide explains what
                attracts cockroaches, how to prevent them and when to book
                professional cockroach control service.
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

            {/* Why Kitchens Attract */}
            <section id="why-kitchens-attract" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Why Kitchens Attract Cockroaches
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                Kitchens provide everything cockroaches need to survive: food,
                water, warmth and hiding spaces. Even small crumbs, grease,
                leaking pipes, open garbage bins or unwashed dishes can attract
                cockroaches.
              </p>

              <p className="text-gray-700 leading-8">
                Cockroaches commonly hide behind refrigerators, under sinks,
                inside cabinets, near drains and around kitchen appliances. For
                professional help, explore our{" "}
                <Link
                  to="/cockroach-management-service"
                  className="text-green-700 font-semibold hover:underline"
                >
                  cockroach control service in Bangalore
                </Link>
                .
              </p>
            </section>

            {/* Common Reasons */}
            <section id="common-reasons" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Common Reasons Cockroaches Enter Kitchens
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {reasons.map((item) => (
                  <div
                    key={item}
                    className="bg-[#f6fffb] border border-green-100 rounded-2xl p-5 shadow-sm"
                  >
                    <p className="font-semibold text-[#063b3f]">🪳 {item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* How to Stop */}
            <section id="how-to-stop" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                How to Stop Cockroaches in Your Kitchen
              </h2>

              <p className="text-gray-700 leading-8 mb-6">
                Regular cleaning and blocking entry points can reduce cockroach
                activity, but hidden colonies and breeding areas may need
                professional treatment.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {prevention.map((item) => (
                  <div
                    key={item}
                    className="bg-[#f6fffb] rounded-2xl p-4 font-bold text-[#063b3f] border border-green-100"
                  >
                    ✅ {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Professional Treatment */}
            <section id="professional-treatment" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Why Professional Treatment Works Better
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                Professional cockroach control targets hidden areas, breeding
                zones and movement paths. It is more effective than spraying
                only visible cockroaches.
              </p>

              <p className="text-gray-700 leading-8">
                Acuity Pest Control provides cockroach treatment for kitchens,
                homes, apartments, restaurants, offices and commercial
                properties across Bangalore.
              </p>
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

            {/* In-article CTA */}
            <div className="bg-[#f1fbff] border-l-4 border-[#008fc5] p-6 rounded-xl my-10">
              <h3 className="text-3xl md:text-4xl font-bold text-[#006f9f] mb-3">
                Need Cockroach Control for Your Kitchen?
              </h3>

              <p className="text-gray-700 leading-7">
                Book professional cockroach treatment with Acuity Pest Control
                across Bangalore.{" "}
                <Link
                  to="/contact"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Book cockroach inspection today
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
                  to="/general-pest-control"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  General Pest Control →
                </Link>

                <Link
                  to="/office-pest-control"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Office Pest Control →
                </Link>

                <Link
                  to="/disinfection-services"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Disinfection Services →
                </Link>
              </div>
            </div>

            {/* Blog Interlinks */}
            <div className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6 my-10">
              <h3 className="text-xl font-bold text-[#063b3f] mb-4">
                📖 Related Cockroach Guides
              </h3>

              <div className="grid sm:grid-cols-2 gap-3">
                <Link
                  to="/blogs/get-rid-of-cockroaches"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  How to Get Rid of Cockroaches Permanently →
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
                  cockroach, termite, bed bug, mosquito and ant control.
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
              <h3 className="text-4xl font-black mb-3">
                Need Cockroach Control?
              </h3>

              <p className="text-gray-200 text-sm leading-6 mb-5">
                Get professional inspection and treatment for your kitchen or
                home anywhere in Bangalore.
              </p>

              <a
                href="tel:+919941229005"
                className="block w-full bg-green-600 hover:bg-green-700 text-center py-3.5 rounded-xl font-bold text-base mb-3 transition"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20cockroach%20control."
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
                  to="/office-pest-control"
                  className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                >
                  Office Pest Control
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
            Need Cockroach Control for Your Kitchen?
          </h2>

          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Book professional cockroach treatment with Acuity Pest Control
            across Bangalore.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919941229005"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20cockroach%20control."
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
