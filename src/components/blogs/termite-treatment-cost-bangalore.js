import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/TermiteTreatmentCostBangalore (1).jpg";

import blogImg2 from "../../images/Signs of Termite Infestation in Your Home.jpg";
import blogImg3 from "../../images/Professional Pest Control vs DIY.jpg";
import blogImg4 from "../../images/Monsoon Pest Control Tips for Bangalore Homes.jpg";
import blogImg9 from "../../images/How Often Should Pest Control Be Done.jpg";

const faqs = [
  {
    q: "How much does termite treatment cost in Bangalore?",
    a: "Termite treatment cost depends on property size, infestation level, treatment method, affected area and warranty requirement. A site inspection helps confirm the correct price.",
  },
  {
    q: "Is termite treatment worth it?",
    a: "Yes, termite treatment is worth it because termites can silently damage wooden furniture, doors, flooring, cupboards and structural wood.",
  },
  {
    q: "How long does termite treatment last?",
    a: "The result depends on treatment method, product quality, application process, site condition and maintenance. Inspection helps choose the right plan.",
  },
  {
    q: "Do you provide pre-construction termite treatment?",
    a: "Yes, Acuity Pest Control provides both pre-construction termite treatment and post-construction termite treatment in Bangalore.",
  },
];

const termiteCostSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id":
      "https://www.acuitypestcontrols.com/blogs/termite-treatment-cost-bangalore#blogposting",
    headline: "Termite Treatment Cost in Bangalore",
    description:
      "Learn what affects termite treatment cost in Bangalore, including property size, infestation level, treatment method and warranty requirement.",
    image: "https://www.acuitypestcontrols.com/logo.png",
    datePublished: "2026-04-06",
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
        "https://www.acuitypestcontrols.com/blogs/termite-treatment-cost-bangalore",
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
        name: "Termite Treatment Cost in Bangalore",
        item: "https://www.acuitypestcontrols.com/blogs/termite-treatment-cost-bangalore",
      },
    ],
  },
];

const TermiteTreatmentCostBangalore = () => {
  const costTable = [
    ["1 BHK", "Inspection Required"],
    ["2 BHK", "Inspection Required"],
    ["3 BHK", "Inspection Required"],
    ["Villa", "Site Inspection Required"],
    ["Office", "Site Inspection Required"],
    ["Commercial Property", "Custom Quote"],
  ];

  const factors = [
    "Property size",
    "Infestation level",
    "Treatment method",
    "Wood damage condition",
    "Pre-construction or post-construction",
    "Warranty requirement",
  ];

  const treatments = [
    "Drill & Fill Treatment",
    "Chemical Barrier Treatment",
    "Soil Treatment",
    "Wooden Furniture Treatment",
    "Pre-Construction Treatment",
    "Post-Construction Treatment",
  ];

  const tocItems = [
    { id: "why-cost-varies", label: "Why Termite Treatment Cost Varies" },
    { id: "estimated-pricing", label: "Estimated Termite Treatment Pricing" },
    { id: "factors", label: "Factors That Affect Cost" },
    { id: "treatment-types", label: "Types of Termite Treatment" },
    { id: "cheap-vs-expensive", label: "Why Cheap Treatment Can Be Expensive" },
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
      title: "How Often Should Pest Control Be Done?",
      slug: "/blogs/how-often-should-pest-control-be-done",
      excerpt:
        "Discover the ideal pest control schedule for homes and businesses.",
      image: blogImg9,
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
        title="Termite Treatment Cost in Bangalore | Acuity Pest Control"
        description="Learn what affects termite treatment cost in Bangalore and how to choose the right anti-termite treatment for homes, apartments, offices and commercial properties."
        keywords="termite treatment cost Bangalore, anti termite treatment Bangalore, termite control Bangalore, termite inspection Bangalore, pre construction termite treatment, post construction termite treatment, Acuity Pest Control"
        canonical="https://www.acuitypestcontrols.com/blogs/termite-treatment-cost-bangalore"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={termiteCostSchema}
      />

      {/* HERO */}
      <section className="relative h-[55vh] md:h-[110vh] flex items-center">
        <img
          src={bannerImage}
          alt="Termite treatment cost in Bangalore by Acuity Pest Control"
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
                Termite Treatment Bangalore
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-[#063b3f] mt-4 mb-5 leading-tight">
                Termite Treatment Cost in Bangalore
              </h1>

              <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-5">
                <span>📅 April 6, 2026</span>
                <span>•</span>
                <span>⏱ 7 min read</span>
              </div>

              <p className="text-gray-600 leading-8">
                Termite treatment cost in Bangalore depends on property size,
                infestation level, treatment method, affected wooden areas and
                warranty requirement. This guide explains the main cost factors
                and how to choose the right termite treatment plan.
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
            <section id="why-cost-varies" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Why Termite Treatment Cost Varies
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                Termite treatment cost in Bangalore changes from property to
                property because every site has a different condition. A small
                apartment with limited termite activity may need a different
                treatment plan compared to a villa, office or commercial
                property with multiple affected wooden areas.
              </p>

              <p className="text-gray-700 leading-8">
                Termites are often called silent destroyers because they can
                damage wood and interiors before visible signs appear. A
                professional inspection helps identify the affected areas and
                choose the correct plan. For expert help, explore our{" "}
                <Link
                  to="/anti-termite-treatment"
                  className="text-green-700 font-semibold hover:underline"
                >
                  anti-termite treatment in Bangalore
                </Link>
                .
              </p>
            </section>

            {/* Pricing Table */}
            <section id="estimated-pricing" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Estimated Termite Treatment Pricing
              </h2>

              <p className="text-gray-700 leading-8 mb-6">
                Termite treatment pricing should be confirmed after inspection
                because the cost depends on area size, treatment depth, drilling
                requirement, furniture condition and warranty plan.
              </p>

              <div className="overflow-x-auto rounded-3xl shadow-lg border border-green-100">
                <table className="w-full bg-white">
                  <thead className="bg-green-600 text-white">
                    <tr>
                      <th className="p-5 text-left">Property Type</th>
                      <th className="p-5 text-left">Pricing</th>
                    </tr>
                  </thead>

                  <tbody>
                    {costTable.map(([type, price]) => (
                      <tr key={type} className="border-b">
                        <td className="p-5 font-bold text-[#063b3f]">{type}</td>
                        <td className="p-5 text-gray-700">{price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-gray-600 mt-4 text-sm">
                Note: Final pricing is confirmed only after site inspection.
              </p>
            </section>

            {/* Factors & Treatment Types */}
            <div className="grid md:grid-cols-2 gap-10 mb-14">
              <section id="factors" className="scroll-mt-20">
                <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                  Factors That Affect Cost
                </h2>

                <div className="space-y-3">
                  {factors.map((item) => (
                    <div
                      key={item}
                      className="bg-[#f6fffb] p-4 rounded-2xl border border-green-100 font-semibold"
                    >
                      ✅ {item}
                    </div>
                  ))}
                </div>
              </section>

              <section id="treatment-types" className="scroll-mt-20">
                <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                  Types of Termite Treatment
                </h2>

                <div className="space-y-3">
                  {treatments.map((item) => (
                    <div
                      key={item}
                      className="bg-[#f6fffb] p-4 rounded-2xl border border-green-100 font-semibold"
                    >
                      🛡️ {item}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Why Cheap Can Be Expensive */}
            <section id="cheap-vs-expensive" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Why Cheap Termite Treatment Can Be Expensive
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                Very low-cost termite treatment may skip proper inspection,
                drilling coverage, affected wooden areas or follow-up
                recommendations. This can allow termite activity to continue in
                hidden spaces and may increase repair costs later.
              </p>

              <p className="text-gray-700 leading-8">
                Professional termite treatment focuses on proper inspection,
                treatment planning, application quality and prevention guidance.
                The right plan is more important than choosing only the lowest
                price.
              </p>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Termite Treatment FAQs
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

            {/* In-article CTA */}
            <div className="bg-[#f1fbff] border-l-4 border-[#008fc5] p-6 rounded-xl my-10">
              <h3 className="text-3xl md:text-4xl font-bold text-[#006f9f] mb-3">
                Need Termite Inspection in Bangalore?
              </h3>

              <p className="text-gray-700 leading-7">
                Contact Acuity Pest Control for termite inspection and treatment
                estimate for your home, apartment, office or commercial
                property.{" "}
                <Link
                  to="/contact"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Book termite inspection today
                </Link>
                .
              </p>
            </div>

            {/* Service Interlinks */}
            <div className="bg-white border border-green-100 rounded-2xl p-6 my-10">
              <h3 className="text-xl font-bold text-[#063b3f] mb-4">
                🔗 Related Termite Services
              </h3>

              <div className="grid sm:grid-cols-2 gap-3">
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
              </div>
            </div>

            {/* Blog Interlinks */}
            <div className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6 my-10">
              <h3 className="text-xl font-bold text-[#063b3f] mb-4">
                📖 Related Pest Control Guides
              </h3>

              <div className="grid sm:grid-cols-2 gap-3">
                <Link
                  to="/blogs/signs-of-termite-infestation"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Signs of Termite Infestation →
                </Link>

                <Link
                  to="/blogs/how-often-should-pest-control-be-done"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  How Often Should Pest Control Be Done? →
                </Link>

                <Link
                  to="/blogs/pest-control-vs-diy"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Professional Pest Control vs DIY →
                </Link>

                <Link
                  to="/blogs/monsoon-pest-control"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Monsoon Pest Control Tips →
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
                  cockroach, bed bug, mosquito and ant control.
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
                Need Termite Control?
              </h3>

              <p className="text-gray-200 text-sm leading-6 mb-5">
                Get professional termite inspection and treatment estimate
                anywhere in Bangalore.
              </p>

              <a
                href="tel:+919941229005"
                className="block w-full bg-green-600 hover:bg-green-700 text-center py-3.5 rounded-xl font-bold text-base mb-3 transition"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20termite%20treatment%20cost%20details."
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

                <Link
                  to="/wood-borer-treatment"
                  className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                >
                  Wood Borer Treatment
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
            Need Termite Inspection in Bangalore?
          </h2>

          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact Acuity Pest Control for professional termite inspection and
            treatment estimate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919941229005"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20termite%20treatment%20cost%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#063b3f] px-8 py-4 rounded-2xl font-bold transition hover:bg-gray-100"
            >
              WhatsApp Us
            </a>

            <Link
              to="/anti-termite-treatment"
              className="border border-white px-8 py-4 rounded-2xl font-bold transition hover:bg-white/10"
            >
              View Termite Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermiteTreatmentCostBangalore;
