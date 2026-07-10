import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/diypest.jpg";

import blogImg1 from "../../images/cockroch.png";
import blogImg2 from "../../images/Signs of Termite Infestation in Your Home.jpg";
import blogImg3 from "../../images/Monsoon Pest Control Tips for Bangalore Homes.jpg";
import blogImg4 from "../../images/Top 10 Household Pests in Bangalore.png";

const faqs = [
  {
    q: "Is DIY pest control enough for homes?",
    a: "DIY pest control may give temporary relief for small pest problems, but it usually does not remove hidden nests, eggs or breeding areas. Professional pest control is better for recurring pest problems.",
  },
  {
    q: "When should I call professional pest control?",
    a: "You should call professional pest control when pests keep coming back, when you see cockroaches, termites, rodents, bed bugs or mosquitoes regularly, or when the infestation is spreading.",
  },
  {
    q: "Is professional pest control safe?",
    a: "Yes, professional pest control can be safe when done by trained technicians using proper application methods and safety instructions.",
  },
  {
    q: "Which is better, DIY or professional pest control?",
    a: "DIY methods are useful for basic prevention, but professional pest control is better for active infestations, repeated pest activity and hidden breeding areas.",
  },
];

const pestControlVsDIYSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id":
      "https://www.acuitypestcontrols.com/blogs/pest-control-vs-diy#blogposting",
    headline: "Professional Pest Control vs DIY",
    description:
      "Compare professional pest control and DIY pest control methods. Learn which option is safer, more effective and better for pest prevention in Bangalore.",
    image: "https://www.acuitypestcontrols.com/logo.png",
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
      logo: {
        "@type": "ImageObject",
        url: "https://www.acuitypestcontrols.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.acuitypestcontrols.com/blogs/pest-control-vs-diy",
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
        name: "Professional Pest Control vs DIY",
        item: "https://www.acuitypestcontrols.com/blogs/pest-control-vs-diy",
      },
    ],
  },
];

const PestControlVsDIY = () => {
  const tocItems = [
    { id: "what-is-diy", label: "What Is DIY Pest Control?" },
    { id: "what-is-professional", label: "What Is Professional Pest Control?" },
    { id: "main-difference", label: "Main Difference" },
    { id: "advantages", label: "Advantages of Professional Pest Control" },
    { id: "limitations", label: "Limitations of DIY" },
    { id: "when-to-call", label: "When Should You Call Professionals?" },
    { id: "final-recommendation", label: "Final Recommendation" },
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
      title: "Signs of Termite Infestation in Your Home",
      slug: "/blogs/signs-of-termite-infestation",
      excerpt: "Common termite signs every homeowner should know.",
      image: blogImg2,
    },
    {
      title: "Monsoon Pest Control Tips for Bangalore Homes",
      slug: "/blogs/monsoon-pest-control",
      excerpt:
        "Rainy season increases pest activity. Learn how to protect your home.",
      image: blogImg3,
    },
    {
      title: "Top 10 Household Pests in Bangalore",
      slug: "/blogs/top-10-household-pests-in-bangalore",
      excerpt: "Discover the most common pests found in Bangalore homes.",
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
        title="Professional Pest Control vs DIY | Acuity Pest Control Bangalore"
        description="Professional pest control vs DIY pest control: learn the difference, benefits, risks and when to call experts for pest control in Bangalore."
        keywords="professional pest control vs DIY, DIY pest control Bangalore, pest control Bangalore, cockroach control Bangalore, termite treatment Bangalore, rodent control Bangalore, Acuity Pest Control"
        canonical="https://www.acuitypestcontrols.com/blogs/pest-control-vs-diy"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={pestControlVsDIYSchema}
      />

      {/* HERO */}
      <section className="relative h-[55vh] md:h-[110vh] flex items-center">
        <img
          src={bannerImage}
          alt="Professional pest control vs DIY pest control guide by Acuity Pest Control"
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
                Pest Control Guide
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-[#063b3f] mt-4 mb-5 leading-tight">
                Professional Pest Control vs DIY
              </h1>

              <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-5">
                <span>📅 June 26, 2026</span>
                <span>•</span>
                <span>⏱ 5 min read</span>
              </div>

              <p className="text-gray-600 leading-8">
                DIY pest control may help with small pest problems, but active
                infestations need proper inspection, pest identification and
                targeted treatment. This guide explains the difference between
                DIY pest control and professional pest control.
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

            {/* Article content */}
            <article className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-8 mb-5">
                Pest problems are common in homes, apartments, offices,
                restaurants, warehouses and commercial buildings. When people
                see cockroaches, ants, rodents, mosquitoes, bed bugs or
                termites, the first reaction is usually to buy a spray or try a
                home remedy. While DIY pest control may work for very small
                problems, it often gives only temporary relief.
              </p>

              <p className="text-gray-700 leading-8 mb-5">
                Professional pest control is different because it starts with
                inspection, pest identification, source detection and targeted
                treatment. Instead of treating only visible pests, professional
                treatment focuses on hiding areas, breeding points, entry routes
                and prevention guidance.
              </p>

              <section id="what-is-diy" className="scroll-mt-20 mb-10">
                <h2 className="text-3xl font-bold text-[#063b3f] mb-4">
                  What Is DIY Pest Control?
                </h2>

                <p className="text-gray-700 leading-8">
                  DIY pest control means using home remedies, cleaning methods,
                  supermarket sprays, traps, powders or basic repellents without
                  hiring a professional pest control team. These methods may
                  include cockroach sprays, rat glue traps, mosquito coils,
                  vinegar sprays, boric powder, neem oil or other household
                  solutions.
                </p>

                <p className="text-gray-700 leading-8 mt-4">
                  DIY methods can help in small situations, especially when the
                  pest issue is minor and recent. Cleaning food spills, sealing
                  small cracks, removing stagnant water and using basic traps
                  can reduce pest activity. But when pests are already breeding
                  inside hidden areas, DIY methods usually fail to solve the
                  root problem.
                </p>
              </section>

              <section id="what-is-professional" className="scroll-mt-20 mb-10">
                <h2 className="text-3xl font-bold text-[#063b3f] mb-4">
                  What Is Professional Pest Control?
                </h2>

                <p className="text-gray-700 leading-8">
                  Professional pest control is a structured treatment process
                  carried out by trained technicians. It includes inspection,
                  identifying the pest species, checking infestation level,
                  finding hiding areas and applying suitable treatment based on
                  the pest type and property condition.
                </p>

                <p className="text-gray-700 leading-8 mt-4">
                  Cockroach control may require gel baiting and
                  crack-and-crevice treatment. Termite treatment may require
                  targeted treatment for wooden areas and soil contact points.
                  Rodent control may require entry-point sealing, bait stations
                  and monitoring. Bed bug treatment requires careful inspection
                  of mattresses, furniture joints, bed frames and hidden cracks.
                </p>
              </section>

              <section id="main-difference" className="scroll-mt-20 mb-10">
                <h2 className="text-3xl font-bold text-[#063b3f] mb-4">
                  Main Difference Between DIY and Professional Pest Control
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-200 text-left text-sm">
                    <thead className="bg-[#f1fbff]">
                      <tr>
                        <th className="p-4 border">Point</th>
                        <th className="p-4 border">DIY Pest Control</th>
                        <th className="p-4 border">
                          Professional Pest Control
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="p-4 border font-semibold">Inspection</td>
                        <td className="p-4 border">Basic visual checking</td>
                        <td className="p-4 border">
                          Detailed inspection of hidden areas
                        </td>
                      </tr>

                      <tr>
                        <td className="p-4 border font-semibold">Effect</td>
                        <td className="p-4 border">Mostly temporary</td>
                        <td className="p-4 border">
                          Better pest control support
                        </td>
                      </tr>

                      <tr>
                        <td className="p-4 border font-semibold">Target</td>
                        <td className="p-4 border">Visible pests</td>
                        <td className="p-4 border">
                          Pests, hiding spots and breeding areas
                        </td>
                      </tr>

                      <tr>
                        <td className="p-4 border font-semibold">Safety</td>
                        <td className="p-4 border">Depends on product use</td>
                        <td className="p-4 border">
                          Controlled application by trained team
                        </td>
                      </tr>

                      <tr>
                        <td className="p-4 border font-semibold">Best For</td>
                        <td className="p-4 border">Minor prevention</td>
                        <td className="p-4 border">
                          Active infestation and recurring pest problems
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="advantages" className="scroll-mt-20 mb-10">
                <h2 className="text-3xl font-bold text-[#063b3f] mb-4">
                  Advantages of Professional Pest Control
                </h2>

                <p className="text-gray-700 leading-8 mb-4">
                  Professional pest control is more than simply spraying
                  chemicals. Technicians inspect the property, identify the pest
                  species, locate breeding areas and choose a treatment method
                  based on the site condition.
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Complete inspection of the property.</li>
                  <li>Correct identification of pest species.</li>
                  <li>Treatment based on infestation level.</li>
                  <li>Suitable tools and treatment methods.</li>
                  <li>Prevention guidance after service.</li>
                  <li>Reduced chances of repeated pest activity.</li>
                </ul>
              </section>

              <section id="limitations" className="scroll-mt-20 mb-10">
                <h2 className="text-3xl font-bold text-[#063b3f] mb-4">
                  Limitations of DIY Pest Control
                </h2>

                <p className="text-gray-700 leading-8">
                  DIY methods may appear cheaper, but they often fail to control
                  hidden colonies or breeding areas. Repeated use of sprays can
                  also make pests move deeper into walls, ceilings, drains or
                  furniture. This may delay proper treatment and increase the
                  overall problem.
                </p>
              </section>

              <section id="when-to-call" className="scroll-mt-20 mb-10">
                <h2 className="text-3xl font-bold text-[#063b3f] mb-4">
                  When Should You Call Professionals?
                </h2>

                <p className="text-gray-700 leading-8 mb-4">
                  Professional pest control is recommended when:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Pests keep returning after DIY treatment.</li>
                  <li>You notice termites or wood damage.</li>
                  <li>Rodents are entering the property repeatedly.</li>
                  <li>Bed bugs are spreading between rooms.</li>
                  <li>Large cockroach infestations are visible.</li>
                  <li>Mosquito breeding is increasing around the property.</li>
                </ul>
              </section>

              <section id="final-recommendation" className="scroll-mt-20 mb-10">
                <h2 className="text-3xl font-bold text-[#063b3f] mb-4">
                  Final Recommendation
                </h2>

                <p className="text-gray-700 leading-8">
                  DIY pest control can be useful for simple preventive measures
                  such as maintaining cleanliness, sealing entry points and
                  removing water sources. However, active infestations usually
                  require professional inspection and treatment. Expert pest
                  control helps protect your family, property and business while
                  reducing repeated pest problems.
                </p>
              </section>

              {/* In-article CTA */}
              <div className="bg-[#f1fbff] border-l-4 border-[#008fc5] p-6 rounded-xl my-10">
                <h3 className="text-3xl md:text-4xl font-bold text-[#006f9f] mb-3">
                  Need Professional Pest Control?
                </h3>

                <p className="text-gray-700 leading-7">
                  Acuity Pest Control provides professional pest management
                  services for homes, apartments, offices, restaurants, hotels
                  and commercial properties across Bangalore.{" "}
                  <Link
                    to="/contact"
                    className="text-[#008fc5] font-semibold hover:underline"
                  >
                    Book an inspection today
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
                    to="/bed-bug-treatment"
                    className="text-[#008fc5] font-semibold hover:underline"
                  >
                    Bed Bug Treatment →
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
                </div>
              </div>

              {/* Blog Interlinks */}
              <div className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6 my-10">
                <h3 className="text-xl font-bold text-[#063b3f] mb-4">
                  📖 Related Pest Control Guides
                </h3>

                <div className="grid sm:grid-cols-2 gap-3">
                  <Link
                    to="/blogs/get-rid-of-cockroaches"
                    className="text-[#008fc5] font-semibold hover:underline"
                  >
                    How to Get Rid of Cockroaches Permanently →
                  </Link>

                  <Link
                    to="/blogs/signs-of-termite-infestation"
                    className="text-[#008fc5] font-semibold hover:underline"
                  >
                    Signs of Termite Infestation →
                  </Link>

                  <Link
                    to="/blogs/monsoon-pest-control"
                    className="text-[#008fc5] font-semibold hover:underline"
                  >
                    Monsoon Pest Control Tips →
                  </Link>

                  <Link
                    to="/blogs/top-10-household-pests-in-bangalore"
                    className="text-[#008fc5] font-semibold hover:underline"
                  >
                    Top 10 Household Pests in Bangalore →
                  </Link>
                </div>
              </div>

              {/* FAQ */}
              <section id="faq" className="scroll-mt-20 mb-10">
                <h2 className="text-3xl font-bold text-[#063b3f] mb-6">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-5">
                  {faqs.map((faq) => (
                    <div
                      key={faq.q}
                      className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6"
                    >
                      <h3 className="text-xl font-bold text-[#063b3f] mb-2">
                        {faq.q}
                      </h3>

                      <p className="text-gray-600 leading-7">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            </article>

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

            {/* Bottom CTA buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/contact"
                className="bg-[#008fc5] text-white px-8 py-3 rounded-full font-bold hover:bg-[#006f9f] transition"
              >
                📞 Book Inspection
              </Link>

              <a
                href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20pest%20control%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition"
              >
                💬 WhatsApp Us
              </a>

              <Link
                to="/blogs"
                className="border border-[#008fc5] text-[#008fc5] px-8 py-3 rounded-full font-bold hover:bg-[#008fc5]/10 transition"
              >
                ← All Blogs
              </Link>
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
                Need Professional Help?
              </h3>

              <p className="text-gray-200 text-sm leading-6 mb-5">
                Get expert pest control inspection and treatment for your home
                or business anywhere in Bangalore.
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
                  to="/rodent-management-service"
                  className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                >
                  Rodent Control
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
            Need Professional Pest Control?
          </h2>

          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Acuity Pest Control provides professional pest management services
            for homes, apartments, offices, restaurants, hotels and commercial
            properties across Bangalore.
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

export default PestControlVsDIY;
