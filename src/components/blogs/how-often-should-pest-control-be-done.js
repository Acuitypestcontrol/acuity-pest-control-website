import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/servicebanner.jpg";

import blogImg from "../../images/cockroch.png";
import blogImg2 from "../../images/Signs of Termite Infestation in Your Home.jpg";
import blogImg3 from "../../images/Professional Pest Control vs DIY.jpg";
import blogImg4 from "../../images/Monsoon Pest Control Tips for Bangalore Homes.jpg";

const faqs = [
  {
    q: "How often should pest control be done for homes?",
    a: "For most homes, pest control can be planned every 3 to 6 months depending on pest activity, location, building condition and surrounding environment.",
  },
  {
    q: "Is yearly pest control enough?",
    a: "Yearly pest control may not be enough for homes with regular cockroach, termite, mosquito, ant or rodent activity. Quarterly service gives better preventive support.",
  },
  {
    q: "Do apartments need regular pest control?",
    a: "Yes, apartments need regular pest control because pests can spread through drainage lines, common areas, ducts, walls and shared spaces.",
  },
  {
    q: "What happens if pest control is delayed?",
    a: "If pest control is delayed, pests may multiply quickly and spread to hidden areas, making treatment more difficult later.",
  },
  {
    q: "Do you provide annual pest control packages?",
    a: "Yes, Acuity Pest Control provides one-time pest control service and AMC pest control plans for homes, apartments, offices and commercial spaces.",
  },
];

const howOftenPestControlSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id":
      "https://www.acuitypestcontrols.com/blogs/how-often-should-pest-control-be-done#blogposting",
    headline: "How Often Should Pest Control Be Done?",
    description:
      "Learn how often pest control should be done for homes, apartments, villas, offices, restaurants, warehouses, hospitals and schools.",
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
        "https://www.acuitypestcontrols.com/blogs/how-often-should-pest-control-be-done",
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
        item: "https://www.acuitypestcontrols.com/blogs/how-often-should-pest-control-be-done",
      },
    ],
  },
];

const HowOftenShouldPestControlBeDone = () => {
  const schedule = [
    { place: "Apartment / Home", time: "Every 3–6 Months" },
    { place: "Villa", time: "Every 3 Months" },
    { place: "Restaurant", time: "Monthly" },
    { place: "Hotel", time: "Monthly" },
    { place: "Office", time: "Every 3 Months" },
    { place: "Warehouse", time: "Monthly" },
    { place: "Hospital", time: "Monthly" },
    { place: "School / College", time: "Every 3–6 Months" },
  ];

  const reasons = [
    "Weather conditions",
    "Food storage",
    "Nearby construction",
    "Garden areas",
    "Drainage issues",
    "Previous infestation history",
  ];

  const benefits = [
    "Prevents major infestations",
    "Protects family health",
    "Keeps kitchen hygienic",
    "Helps detect termites early",
    "Reduces mosquito activity",
    "Saves money in the long run",
  ];

  const tocItems = [
    { id: "why-regular", label: "Why Regular Pest Control Matters" },
    { id: "schedule", label: "Recommended Schedule" },
    { id: "factors", label: "Factors Affecting Frequency" },
    { id: "benefits", label: "Benefits of Regular Pest Control" },
    { id: "faq", label: "FAQs" },
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
      excerpt: "Common termite signs every homeowner should know.",
      image: blogImg2,
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
        title="How Often Should Pest Control Be Done? | Acuity Pest Control"
        description="Learn how often pest control should be done for homes, apartments, offices, restaurants, warehouses and commercial properties in Bangalore."
        keywords="how often should pest control be done, pest control frequency Bangalore, pest control schedule, AMC pest control Bangalore, quarterly pest control, regular pest control Bangalore"
        canonical="https://www.acuitypestcontrols.com/blogs/how-often-should-pest-control-be-done"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={howOftenPestControlSchema}
      />

      {/* HERO */}
      <section className="relative h-[55vh] md:h-[110vh] flex items-center">
        <img
          src={bannerImage}
          alt="How often should pest control be done in Bangalore"
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
                Pest Control Schedule
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-[#063b3f] mt-4 mb-5 leading-tight">
                How Often Should Pest Control Be Done?
              </h1>

              <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-5">
                <span>📅 Jan 26, 2026</span>
                <span>•</span>
                <span>⏱ 5 min read</span>
              </div>

              <p className="text-gray-600 leading-8">
                Pest control frequency depends on the type of property, pest
                activity, surrounding environment and previous infestation
                history. This guide explains how often homes, apartments,
                offices and commercial spaces should plan pest control service.
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
            <section id="why-regular" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Why Regular Pest Control Matters
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                Many homeowners book pest control only after seeing insects or
                rodents. But by the time pests become visible, they may already
                be hiding inside cracks, drains, furniture, storage areas or
                wall gaps. Preventive pest control helps reduce pest activity
                before it becomes serious.
              </p>

              <p className="text-gray-700 leading-8">
                Regular treatment can help reduce cockroaches, termites,
                rodents, mosquitoes, ants, bed bugs and other pests. For
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

            {/* Schedule */}
            <section id="schedule" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Recommended Pest Control Schedule
              </h2>

              <p className="text-gray-700 leading-8 mb-6">
                The schedule below is a general guide. Actual service frequency
                may change based on pest activity, hygiene level, building
                condition and site inspection.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {schedule.map((item) => (
                  <div
                    key={item.place}
                    className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6 shadow-sm text-center"
                  >
                    <h3 className="text-xl font-black text-[#063b3f]">
                      {item.place}
                    </h3>

                    <p className="text-green-700 font-bold mt-3">{item.time}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Factors & Benefits */}
            <div className="grid md:grid-cols-2 gap-10 mb-14">
              <section id="factors" className="scroll-mt-20">
                <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                  Factors Affecting Frequency
                </h2>

                <div className="space-y-3">
                  {reasons.map((item) => (
                    <div
                      key={item}
                      className="bg-[#f6fffb] p-4 rounded-2xl border border-green-100 font-semibold"
                    >
                      ✅ {item}
                    </div>
                  ))}
                </div>
              </section>

              <section id="benefits" className="scroll-mt-20">
                <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                  Benefits of Regular Pest Control
                </h2>

                <div className="space-y-3">
                  {benefits.map((item) => (
                    <div
                      key={item}
                      className="bg-[#f6fffb] p-4 rounded-2xl border border-green-100 font-semibold"
                    >
                      ✔ {item}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
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

            {/* Service Links */}
            <div className="bg-white border border-green-100 rounded-2xl p-6 my-10">
              <h3 className="text-xl font-bold text-[#063b3f] mb-4">
                🔗 Related Pest Control Services
              </h3>

              <div className="grid sm:grid-cols-2 gap-3">
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
            Book Your Next Pest Control Service
          </h2>

          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Whether you need one-time treatment or an AMC plan, Acuity Pest
            Control provides professional pest management services across
            Bangalore.
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
