import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/Signs of Termite Infestation in Your Home1.jpg";

import blogImg from "../../images/cockroch.png";
import blogImg3 from "../../images/Professional Pest Control vs DIY.jpg";
import blogImg4 from "../../images/Monsoon Pest Control Tips for Bangalore Homes.jpg";
import blogImg11 from "../../images/Termite Treatment Cost in Bangalore.jpg";

const faqs = [
  {
    q: "What are the first signs of termite infestation?",
    a: "The first signs of termite infestation include mud tubes, hollow-sounding wood, damaged furniture, tiny holes, wood powder and discarded wings near windows or lights.",
  },
  {
    q: "Can termites damage furniture silently?",
    a: "Yes, termites usually eat wood from the inside, so furniture may look normal outside while the inside is already damaged.",
  },
  {
    q: "When should I book termite inspection?",
    a: "Book termite inspection as soon as you notice mud tubes, wood dust, hollow wood, damaged doors, discarded wings or repeated termite activity.",
  },
  {
    q: "Do you provide termite treatment in Bangalore?",
    a: "Yes, Acuity Pest Control provides termite inspection and termite treatment services across Bangalore for homes, apartments, offices and commercial properties.",
  },
];

const termiteSignsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id":
      "https://www.acuitypestcontrols.com/blogs/signs-of-termite-infestation#blogposting",
    headline: "Signs of Termite Infestation in Your Home",
    description:
      "Learn the early signs of termite infestation in your home, including mud tubes, hollow wood, damaged furniture, discarded wings and when to book termite inspection.",
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
      "@id":
        "https://www.acuitypestcontrols.com/blogs/signs-of-termite-infestation",
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
        name: "Signs of Termite Infestation in Your Home",
        item: "https://www.acuitypestcontrols.com/blogs/signs-of-termite-infestation",
      },
    ],
  },
];

const SignsOfTermiteInfestation = () => {
  const tocItems = [
    { id: "mud-tubes", label: "1. Mud Tubes on Walls or Wooden Surfaces" },
    { id: "hollow-sound", label: "2. Hollow Sound from Wooden Furniture" },
    { id: "tiny-holes", label: "3. Tiny Holes and Wood Powder" },
    {
      id: "discarded-wings",
      label: "4. Discarded Wings Near Windows or Lights",
    },
    { id: "tight-doors", label: "5. Tight Doors and Windows" },
    {
      id: "damage-behind",
      label: "6. Damage Behind Cupboards and Wall Panels",
    },
    {
      id: "why-inspection",
      label: "Why Early Termite Inspection Is Important",
    },
    { id: "faq", label: "FAQs on Termite Infestation" },
  ];

  const relatedPosts = [
    {
      title: "Termite Treatment Cost in Bangalore",
      slug: "/blogs/termite-treatment-cost-bangalore",
      excerpt:
        "Know the average termite treatment cost in Bangalore and the factors that affect pricing.",
      image: blogImg11,
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
        title="Signs of Termite Infestation in Your Home | Acuity Pest Control"
        description="Learn the early signs of termite infestation in your home including mud tubes, hollow wood, damaged furniture, discarded wings and when to book termite inspection in Bangalore."
        keywords="signs of termite infestation, termite infestation Bangalore, termite treatment Bangalore, termite inspection, mud tubes, hollow wood, termite control Bangalore, Acuity Pest Control"
        canonical="https://www.acuitypestcontrols.com/blogs/signs-of-termite-infestation"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={termiteSignsSchema}
      />

      {/* HERO */}
      <section className="relative h-[55vh] md:h-[110vh] flex items-center">
        <img
          src={bannerImage}
          alt="Signs of termite infestation in home by Acuity Pest Control"
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
                Termite Control Bangalore
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-[#063b3f] mt-4 mb-5 leading-tight">
                Signs of Termite Infestation in Your Home
              </h1>

              <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-5">
                <span>📅 June 26, 2026</span>
                <span>•</span>
                <span>⏱ 7 min read</span>
              </div>

              <p className="text-gray-600 leading-8">
                Termites can damage wooden furniture, doors, frames, cupboards,
                flooring and hidden wooden areas silently. This guide explains
                the common signs of termite infestation and when to book a
                professional termite inspection.
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
                Termites are one of the most damaging pests for homes,
                apartments, villas, offices and commercial properties. The
                biggest problem is that termite damage often starts silently. By
                the time visible damage appears, termites may already have
                affected wooden furniture, door frames, cupboards, flooring or
                wall areas.
              </p>

              <p className="text-gray-700 leading-8 mb-5">
                In Bangalore, termite problems are common because many
                properties have wooden interiors, moisture-prone corners,
                plumbing lines, false ceilings and storage areas. Identifying
                the signs early can help you avoid expensive repairs and protect
                your property.
              </p>

              <section id="mud-tubes" className="scroll-mt-20 mb-8">
                <h2 className="text-3xl font-bold text-[#063b3f] mb-4">
                  1. Mud Tubes on Walls or Wooden Surfaces
                </h2>

                <p className="text-gray-700 leading-8">
                  Mud tubes are one of the most common signs of termite
                  activity. These look like thin brown lines on walls, corners,
                  wooden frames, cupboards or near flooring. Termites build
                  these tubes to travel safely between their colony and food
                  source. If you see mud tubes, do not ignore them because it
                  may indicate active termite movement nearby.
                </p>
              </section>

              <section id="hollow-sound" className="scroll-mt-20 mb-8">
                <h2 className="text-3xl font-bold text-[#063b3f] mb-4">
                  2. Hollow Sound from Wooden Furniture
                </h2>

                <p className="text-gray-700 leading-8">
                  Termites eat wood from the inside. Because of this, the outer
                  surface may look normal while the inside becomes weak and
                  hollow. Tap doors, furniture, cupboards or wooden panels
                  gently. If they sound hollow, it may be a sign of termite
                  damage.
                </p>
              </section>

              <section id="tiny-holes" className="scroll-mt-20 mb-8">
                <h2 className="text-3xl font-bold text-[#063b3f] mb-4">
                  3. Tiny Holes and Wood Powder
                </h2>

                <p className="text-gray-700 leading-8">
                  Small holes, powder-like dust, damaged edges or fine wood
                  particles near furniture can indicate termite activity. These
                  signs are commonly noticed near wardrobes, kitchen cabinets,
                  wooden partitions, door frames and storage areas.
                </p>
              </section>

              <section id="discarded-wings" className="scroll-mt-20 mb-8">
                <h2 className="text-3xl font-bold text-[#063b3f] mb-4">
                  4. Discarded Wings Near Windows or Lights
                </h2>

                <p className="text-gray-700 leading-8">
                  Flying termites, also called swarmers, are often attracted to
                  lights. After mating, they shed their wings. If you notice
                  small transparent wings near windows, balconies, lights or
                  floors, it can be a warning sign that a termite colony may be
                  nearby.
                </p>
              </section>

              <section id="tight-doors" className="scroll-mt-20 mb-8">
                <h2 className="text-3xl font-bold text-[#063b3f] mb-4">
                  5. Tight Doors and Windows
                </h2>

                <p className="text-gray-700 leading-8">
                  Termite activity and moisture can affect wooden doors and
                  windows. If doors or windows suddenly become difficult to
                  close, uneven or tight, there may be hidden termite damage
                  inside the wood.
                </p>
              </section>

              <section id="damage-behind" className="scroll-mt-20 mb-8">
                <h2 className="text-3xl font-bold text-[#063b3f] mb-4">
                  6. Damage Behind Cupboards and Wall Panels
                </h2>

                <p className="text-gray-700 leading-8">
                  Termites often hide in areas that are not checked regularly.
                  Behind fixed cupboards, wall panels, wooden skirting, false
                  ceilings and storage racks are common hiding spots. Regular
                  inspection is important, especially when your home has wooden
                  interiors.
                </p>
              </section>

              <section id="why-inspection" className="scroll-mt-20 mb-8">
                <h2 className="text-3xl font-bold text-[#063b3f] mb-4">
                  Why Early Termite Inspection Is Important
                </h2>

                <p className="text-gray-700 leading-8">
                  Termite damage becomes expensive when ignored. Early
                  inspection helps identify active areas, entry points and
                  possible moisture sources. Professional termite treatment
                  targets hidden movement and helps protect wooden areas. For
                  expert help, explore our{" "}
                  <Link
                    to="/anti-termite-treatment"
                    className="text-green-700 font-semibold hover:underline"
                  >
                    anti-termite treatment in Bangalore
                  </Link>
                  .
                </p>
              </section>

              {/* In-article CTA */}
              <div className="bg-[#f1fbff] border-l-4 border-[#008fc5] p-6 rounded-xl my-10">
                <h3 className="text-3xl md:text-4xl font-bold text-[#006f9f] mb-3">
                  Need Termite Inspection?
                </h3>

                <p className="text-gray-700 leading-7">
                  If you notice mud tubes, hollow wood, damaged furniture,
                  discarded wings or wood powder, book a professional termite
                  inspection with Acuity Pest Control in Bangalore.{" "}
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
                    to="/blogs/termite-treatment-cost-bangalore"
                    className="text-[#008fc5] font-semibold hover:underline"
                  >
                    Termite Treatment Cost in Bangalore →
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

                  <Link
                    to="/blogs/pest-control-bangalore-guide"
                    className="text-[#008fc5] font-semibold hover:underline"
                  >
                    Complete Pest Control Guide →
                  </Link>
                </div>
              </div>

              {/* FAQ */}
              <section id="faq" className="scroll-mt-20 mb-8">
                <h2 className="text-3xl font-bold text-[#063b3f] mb-6">
                  FAQs on Termite Infestation
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

            {/* Bottom CTA buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/contact"
                className="bg-[#008fc5] text-white px-8 py-3 rounded-full font-bold hover:bg-[#006f9f] transition"
              >
                📞 Book Inspection
              </Link>

              <a
                href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20termite%20inspection."
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
                Need Termite Control?
              </h3>

              <p className="text-gray-200 text-sm leading-6 mb-5">
                Get professional termite inspection and treatment support
                anywhere in Bangalore.
              </p>

              <a
                href="tel:+919941229005"
                className="block w-full bg-green-600 hover:bg-green-700 text-center py-3.5 rounded-xl font-bold text-base mb-3 transition"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20termite%20control."
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
            Need Professional Termite Control?
          </h2>

          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Acuity Pest Control provides termite inspection and treatment
            support for homes, apartments, offices and commercial properties
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
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20termite%20control."
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

export default SignsOfTermiteInfestation;
