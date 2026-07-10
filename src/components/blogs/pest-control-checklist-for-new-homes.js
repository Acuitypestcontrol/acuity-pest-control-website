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
    q: "Should pest control be done before moving into a new house?",
    a: "Yes, it is better to complete pest control before moving furniture into a new home because treatment can be done properly in empty rooms, corners, kitchens and wooden areas.",
  },
  {
    q: "Is anti-termite treatment necessary for new homes?",
    a: "Anti-termite treatment is useful for new homes because it helps protect wooden furniture, doors, frames and hidden areas from termite activity.",
  },
  {
    q: "How long does new home pest control take?",
    a: "Most residential pest control treatments can be completed within a few hours depending on property size, pest activity and treatment type.",
  },
  {
    q: "Do you provide pest control for newly constructed homes in Bangalore?",
    a: "Yes, Acuity Pest Control provides pest control for newly constructed homes, apartments, villas and residential properties across Bangalore.",
  },
];

const newHomeChecklistSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id":
      "https://www.acuitypestcontrols.com/blogs/pest-control-checklist-for-new-homes#blogposting",
    headline: "Pest Control Checklist for New Homes",
    description:
      "Before moving into a new home, follow this pest control checklist to inspect rooms, kitchens, bathrooms, cracks, furniture areas and termite-prone spaces.",
    image: "https://www.acuitypestcontrols.com/logo.png",
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
      logo: {
        "@type": "ImageObject",
        url: "https://www.acuitypestcontrols.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.acuitypestcontrols.com/blogs/pest-control-checklist-for-new-homes",
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
        item: "https://www.acuitypestcontrols.com/blogs/pest-control-checklist-for-new-homes",
      },
    ],
  },
];

const PestControlChecklistNewHomes = () => {
  const checklist = [
    "Inspect every room for pest activity",
    "Check kitchen cabinets and drawers",
    "Inspect bathrooms and drainage pipes",
    "Seal wall cracks and entry points",
    "Plan anti-termite treatment before moving furniture",
    "Deep clean the entire house",
    "Inspect electrical switch boards",
    "Check windows and door gaps",
    "Remove construction debris",
    "Book a professional pest inspection",
  ];

  const pests = [
    "Cockroaches",
    "Termites",
    "Ants",
    "Mosquitoes",
    "Rodents",
    "Bed Bugs",
    "Spiders",
    "Wood Borers",
  ];

  const benefits = [
    "Protects your furniture",
    "Helps prevent repair costs",
    "Improves home hygiene",
    "Reduces hidden pest activity",
    "Helps detect termites early",
    "Peace of mind before shifting",
  ];

  const tocItems = [
    {
      id: "why-pest-control-before-moving",
      label: "Why Pest Control Before Moving In?",
    },
    { id: "checklist", label: "New Home Pest Control Checklist" },
    { id: "common-pests", label: "Common Pests Found in New Homes" },
    { id: "benefits", label: "Benefits of Professional Pest Control" },
    { id: "faq", label: "FAQs" },
  ];

  const relatedPosts = [
    {
      title: "Signs of Termite Infestation in Your Home",
      slug: "/blogs/signs-of-termite-infestation",
      excerpt: "Common termite signs every homeowner should know.",
      image: blogImg2,
    },
    {
      title: "Complete Guide to Pest Control in Bangalore",
      slug: "/blogs/pest-control-bangalore-guide",
      excerpt:
        "Everything you need to know about professional pest control services.",
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
        title="Pest Control Checklist for New Homes | Acuity Pest Control"
        description="Before moving into a new home, follow this pest control checklist for rooms, kitchens, bathrooms, cracks, termite-prone areas and furniture spaces."
        keywords="new home pest control Bangalore, pest control checklist for new homes, moving home pest control, anti termite treatment for new home, pest inspection Bangalore, Acuity Pest Control"
        canonical="https://www.acuitypestcontrols.com/blogs/pest-control-checklist-for-new-homes"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={newHomeChecklistSchema}
      />

      {/* HERO */}
      <section className="relative h-[55vh] md:h-[110vh] flex items-center">
        <img
          src={bannerImage}
          alt="Pest control checklist for new homes by Acuity Pest Control"
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
                New Home Pest Control
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-[#063b3f] mt-4 mb-5 leading-tight">
                Pest Control Checklist for New Homes
              </h1>

              <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-5">
                <span>📅 Feb 2, 2026</span>
                <span>•</span>
                <span>⏱ 6 min read</span>
              </div>

              <p className="text-gray-600 leading-8">
                Moving into a new home is exciting, but pest inspection should
                be done before shifting furniture and household items. This
                checklist helps you check rooms, kitchens, bathrooms, cracks,
                termite-prone areas and common pest hiding places.
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

            {/* Why Pest Control Before Moving In */}
            <section
              id="why-pest-control-before-moving"
              className="scroll-mt-20 mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Why Pest Control Before Moving In?
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                Many new homes may look clean but can still have hidden pest
                activity. Construction materials, moisture, wooden furniture
                areas, drainage systems, wall gaps and storage corners can
                attract termites, cockroaches, ants and rodents.
              </p>

              <p className="text-gray-700 leading-8">
                A professional pest inspection before moving in helps identify
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

            {/* Checklist */}
            <section id="checklist" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                New Home Pest Control Checklist
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                {checklist.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 bg-[#f6fffb] p-5 rounded-2xl border border-green-100"
                  >
                    <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold shrink-0 text-sm">
                      {index + 1}
                    </div>

                    <p className="font-semibold text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Common Pests */}
            <section id="common-pests" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Common Pests Found in New Homes
              </h2>

              <p className="text-gray-700 leading-8 mb-6">
                New homes can attract different pests depending on construction
                condition, moisture, wooden materials, storage areas and
                drainage access.
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {pests.map((item) => (
                  <div
                    key={item}
                    className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-4 text-center font-bold text-[#063b3f]"
                  >
                    🐜 {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section id="benefits" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Benefits of Professional Pest Control
              </h2>

              <p className="text-gray-700 leading-8 mb-6">
                Professional pest control before moving into a new home can help
                reduce hidden pest activity and protect furniture, kitchens,
                bathrooms, wooden areas and storage spaces.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="bg-[#f6fffb] rounded-2xl p-4 border border-green-100 font-bold text-[#063b3f]"
                  >
                    ✅ {item}
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
                  Pre Construction Termite Treatment →
                </Link>

                <Link
                  to="/post-construction-termite-treatment"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Post Construction Termite Treatment →
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
                  apartments and businesses across Bangalore, including termite,
                  cockroach, bed bug, mosquito, ant and rodent control.
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
                Moving Into a New Home?
              </h3>

              <p className="text-gray-200 text-sm leading-6 mb-5">
                Book a complete pest inspection before shifting and prepare your
                new home properly.
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
                  Pre Construction Termite Treatment
                </Link>

                <Link
                  to="/post-construction-termite-treatment"
                  className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                >
                  Post Construction Termite Treatment
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
            Moving Into a New Home?
          </h2>

          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a pest inspection before shifting and prepare your home with
            professional pest control support from Acuity Pest Control.
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
