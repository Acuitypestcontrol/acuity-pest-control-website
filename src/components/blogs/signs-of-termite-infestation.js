import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/Signs of Termite Infestation in Your Home1.jpg";

import blogImg from "../../images/cockroch.png";
import blogImg3 from "../../images/Professional Pest Control vs DIY.jpg";
import blogImg4 from "../../images/Monsoon Pest Control Tips for Bangalore Homes.jpg";
import blogImg11 from "../../images/Termite Treatment Cost in Bangalore.jpg";

const canonicalUrl =
  "https://www.acuitypestcontrols.com/blogs/signs-of-termite-infestation";

const blogImageUrl =
  "https://www.acuitypestcontrols.com/images/signs-of-termite-infestation.jpg";

const faqs = [
  {
    q: "What are the first signs of termite infestation?",
    a: "Early signs of termite infestation may include mud tubes, hollow-sounding wood, damaged furniture, tiny holes, wood powder and discarded wings near windows, doors or lights.",
  },
  {
    q: "Can termites damage furniture silently?",
    a: "Yes. Termites often consume wood from the inside, so furniture and wooden structures may look normal outside even when the inner portion is already damaged.",
  },
  {
    q: "When should I book a termite inspection?",
    a: "Book a termite inspection as soon as you notice mud tubes, hollow wood, wood dust, damaged doors, discarded wings, bubbling paint or repeated termite activity.",
  },
  {
    q: "Do you provide termite treatment in Bangalore?",
    a: "Yes, Acuity Pest Control provides termite inspection and treatment services across Bangalore for homes, apartments, villas, offices and commercial properties.",
  },
  {
    q: "Can termites return after treatment?",
    a: "Termite activity can return when untreated areas, moisture sources or entry points remain. Proper inspection, suitable treatment and periodic monitoring help reduce recurring activity.",
  },
];

const termiteSignsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#blogposting`,
    headline: "Signs of Termite Infestation in Your Home",
    description:
      "Learn the early signs of termite infestation, including mud tubes, hollow wood, damaged furniture, discarded wings and when to book termite inspection.",
    image: {
      "@type": "ImageObject",
      url: blogImageUrl,
    },
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
        name: "Signs of Termite Infestation in Your Home",
        item: canonicalUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "Signs of Termite Infestation in Your Home",
    description:
      "Learn how to identify termite mud tubes, hollow wood, discarded wings and other early signs of termite infestation.",
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
        "#mud-tubes p",
        "#hollow-sound p",
        "#discarded-wings p",
        "#why-inspection p",
        "#faq h2",
      ],
    },
  },
];

const SignsOfTermiteInfestation = () => {
  const termiteSigns = [
    {
      id: "mud-tubes",
      number: "1",
      title: "Mud Tubes on Walls or Wooden Surfaces",
      description:
        "Mud tubes are thin brown or soil-coloured lines that may appear on walls, flooring edges, wooden frames, cupboards and corners. Subterranean termites build these tubes to maintain moisture and move safely between the colony and a food source.",
      warning:
        "Breaking a mud tube does not remove the infestation. Active termites may rebuild the tube or create another hidden route.",
    },
    {
      id: "hollow-sound",
      number: "2",
      title: "Hollow Sound from Wooden Furniture",
      description:
        "Termites consume wood from the inside while leaving a thin outer surface. Doors, cupboards, wooden panels and furniture may therefore look normal but sound hollow when tapped gently.",
      warning:
        "Soft, weak or hollow wood should be inspected before the damage spreads to nearby wooden areas.",
    },
    {
      id: "tiny-holes",
      number: "3",
      title: "Tiny Holes, Damaged Edges and Wood Powder",
      description:
        "Small holes, powder-like material, damaged corners and fine particles near furniture may indicate termite or wood-borer activity. These signs often appear around wardrobes, kitchen cabinets, door frames and wooden partitions.",
      warning:
        "Wood powder alone cannot confirm the exact pest. Professional inspection helps distinguish termites from wood borers.",
    },
    {
      id: "discarded-wings",
      number: "4",
      title: "Discarded Wings Near Windows or Lights",
      description:
        "Winged termites, also called swarmers, are attracted to light. After mating, they shed their wings. Small transparent wings near windows, balconies, lights or floors can indicate that a termite colony is nearby.",
      warning:
        "A large number of discarded wings indoors may indicate termite activity within or close to the building.",
    },
    {
      id: "tight-doors",
      number: "5",
      title: "Tight Doors and Windows",
      description:
        "Termite activity and moisture can affect wooden doors, windows and frames. If they suddenly become difficult to open or close, appear uneven or feel swollen, hidden termite damage may be present.",
      warning:
        "Moisture can also cause wood to expand, so the area should be inspected before confirming termite activity.",
    },
    {
      id: "damage-behind",
      number: "6",
      title: "Damage Behind Cupboards and Wall Panels",
      description:
        "Termites prefer dark and undisturbed areas. They may remain hidden behind fixed cupboards, wooden skirting, wall panels, false ceilings, storage racks and modular furniture.",
      warning:
        "Fixed furniture and covered wall sections should be checked when termite activity appears elsewhere in the room.",
    },
    {
      id: "bubbling-paint",
      number: "7",
      title: "Bubbling Paint or Damaged Wall Finish",
      description:
        "Termite movement and moisture behind walls can sometimes cause paint to bubble, peel or appear uneven. Similar signs can also occur because of water leakage or dampness.",
      warning:
        "Do not assume every paint problem is caused by termites. Inspect for mud tubes, moisture and wood damage together.",
    },
    {
      id: "clicking-sounds",
      number: "8",
      title: "Faint Clicking Sounds from Wooden Areas",
      description:
        "In some cases, termite activity may create faint tapping or clicking sounds inside wooden structures. These sounds are easier to notice at night in quiet rooms.",
      warning:
        "Sounds inside walls or furniture can have different causes, so a professional inspection is recommended.",
    },
  ];

  const highRiskAreas = [
    {
      title: "Door and window frames",
      description:
        "Wooden frames connected to walls or flooring may provide hidden termite access.",
    },
    {
      title: "Modular kitchens",
      description:
        "Cabinets near sinks, pipes and damp walls are vulnerable when moisture is present.",
    },
    {
      title: "Wardrobes and cupboards",
      description:
        "Fixed wooden furniture against walls may hide mud tubes and internal damage.",
    },
    {
      title: "Wooden flooring",
      description:
        "Termites may affect flooring, skirting and concealed wooden support areas.",
    },
    {
      title: "False ceilings",
      description:
        "Hidden ceiling spaces may provide undisturbed routes for termite movement.",
    },
    {
      title: "Bathrooms and plumbing areas",
      description:
        "Moisture around pipes, wall joints and nearby wood can create favourable conditions.",
    },
  ];

  const inspectionBenefits = [
    {
      title: "Finds hidden activity",
      description:
        "Technicians inspect concealed areas, wooden fittings, wall edges and possible termite routes.",
    },
    {
      title: "Identifies the affected areas",
      description:
        "Inspection helps determine whether activity is limited to furniture or connected to structural areas.",
    },
    {
      title: "Distinguishes termite damage",
      description:
        "Professional checking helps separate termite activity from wood borers, moisture damage and general wear.",
    },
    {
      title: "Supports suitable treatment",
      description:
        "Treatment can be selected according to the property condition, termite activity and affected material.",
    },
    {
      title: "Helps prevent spreading",
      description:
        "Early action may reduce the risk of termites reaching additional furniture and wooden sections.",
    },
    {
      title: "Provides prevention guidance",
      description:
        "Customers receive recommendations regarding moisture, wood storage and regular monitoring.",
    },
  ];

  const tocItems = [
    {
      id: "mud-tubes",
      label: "1. Mud Tubes",
    },
    {
      id: "hollow-sound",
      label: "2. Hollow-Sounding Wood",
    },
    {
      id: "tiny-holes",
      label: "3. Holes and Wood Powder",
    },
    {
      id: "discarded-wings",
      label: "4. Discarded Wings",
    },
    {
      id: "tight-doors",
      label: "5. Tight Doors and Windows",
    },
    {
      id: "damage-behind",
      label: "6. Hidden Wooden Damage",
    },
    {
      id: "bubbling-paint",
      label: "7. Bubbling Paint",
    },
    {
      id: "clicking-sounds",
      label: "8. Clicking Sounds",
    },
    {
      id: "high-risk-areas",
      label: "High-Risk Areas",
    },
    {
      id: "why-inspection",
      label: "Why Early Inspection Matters",
    },
    {
      id: "faq",
      label: "Termite FAQs",
    },
  ];

  const relatedPosts = [
    {
      title: "Termite Treatment Cost in Bangalore",
      slug: "/blogs/termite-treatment-cost-bangalore",
      excerpt:
        "Learn the common termite treatment cost factors and what can affect pricing in Bangalore.",
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
      excerpt:
        "Compare professional pest control services with common DIY treatment methods.",
      image: blogImg3,
    },
    {
      title: "Monsoon Pest Control Tips for Bangalore Homes",
      slug: "/blogs/monsoon-pest-control",
      excerpt:
        "Learn how to protect your home from common pests during Bangalore's rainy season.",
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
    <div className="w-full bg-white text-gray-800 overflow-hidden">
      <SEO
        title="Signs of Termite Infestation in Your Home | Bangalore"
        description="Learn the early signs of termite infestation, including mud tubes, hollow wood, discarded wings, wood powder and when to book termite inspection in Bangalore."
        keywords="signs of termite infestation, termite infestation Bangalore, termite treatment Bangalore, termite inspection Bangalore, mud tubes, hollow wood, termite wings, termite damage, termite control Bangalore"
        canonical={canonicalUrl}
        image={blogImageUrl}
        schema={termiteSignsSchema}
      />

      {/* HERO */}
      <section className="relative h-[48vh] sm:h-[55vh] md:h-[110vh]">
        <img
          src={bannerImage}
          alt="Signs of termite infestation in wooden furniture and home"
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
                Signs of Termite Infestation
              </span>
            </nav>

            {/* BLOG HEADER */}
            <header className="mb-10">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Termite Control Bangalore
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-[#063b3f] mt-4 mb-5 leading-tight">
                Signs of Termite Infestation in Your Home
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-5">
                <span>📅 Published: June 26, 2026</span>
                <span aria-hidden="true">•</span>
                <span>Reviewed: June 26, 2026</span>
                <span aria-hidden="true">•</span>
                <span>⏱ 9 min read</span>
              </div>

              <p className="text-gray-700 leading-8">
                Termites can damage wooden furniture, doors, frames, cupboards,
                flooring and concealed wooden areas without obvious early
                warning. This guide explains the most common signs of termite
                infestation and when to book a professional termite inspection.
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
            <section className="mb-14">
              <p className="text-gray-700 leading-8 mb-5">
                Termites are among the most damaging pests for homes,
                apartments, villas, offices and commercial properties. The main
                challenge is that termite damage often begins inside wood or
                concealed structural areas.
              </p>

              <p className="text-gray-700 leading-8 mb-5">
                By the time visible damage appears, termites may already have
                affected furniture, door frames, cupboards, flooring, wall
                panels or other wooden sections.
              </p>

              <p className="text-gray-700 leading-8">
                Properties with wooden interiors, moisture-prone corners,
                plumbing lines, false ceilings and fixed furniture require
                regular inspection. Recognising early warning signs can help
                reduce expensive repairs and further damage.
              </p>
            </section>

            {/* TERMITE SIGNS */}
            {termiteSigns.map((sign) => (
              <section
                key={sign.id}
                id={sign.id}
                className="scroll-mt-28 mb-14"
              >
                <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                  Termite Warning Sign {sign.number}
                </span>

                <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                  {sign.number}. {sign.title}
                </h2>

                <p className="text-gray-700 leading-8 mb-5">
                  {sign.description}
                </p>

                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
                  <p className="text-gray-700 leading-7">
                    <strong className="text-[#063b3f]">Important:</strong>{" "}
                    {sign.warning}
                  </p>
                </div>
              </section>
            ))}

            {/* HIGH-RISK AREAS */}
            <section id="high-risk-areas" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Inspection Locations
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Termite-Prone Areas to Check in Your Home
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                Termites usually remain hidden in dark, damp and undisturbed
                areas. Check these locations when you notice termite activity
                elsewhere in the property.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {highRiskAreas.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6"
                  >
                    <h3 className="text-xl font-black text-[#063b3f] mb-3">
                      🏠 {item.title}
                    </h3>

                    <p className="text-gray-600 leading-7">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* WHY INSPECTION */}
            <section id="why-inspection" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Early Termite Detection
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Why Early Termite Inspection Is Important
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                Termite damage can become expensive when activity remains hidden
                for a long time. Professional inspection helps identify active
                areas, possible entry routes, moisture conditions and affected
                wooden sections.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {inspectionBenefits.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#f6fffb] border border-green-100 rounded-2xl p-6"
                  >
                    <h3 className="text-xl font-black text-[#063b3f] mb-3">
                      ✅ {item.title}
                    </h3>

                    <p className="text-gray-600 leading-7">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-gray-700 leading-8 mt-7">
                For professional help, explore our{" "}
                <Link
                  to="/anti-termite-treatment"
                  className="text-green-700 font-semibold hover:underline"
                >
                  anti-termite treatment service in Bangalore
                </Link>
                .
              </p>
            </section>

            {/* IN-ARTICLE CTA */}
            <div className="bg-[#063b3f] text-white rounded-3xl p-7 md:p-9 mb-14">
              <h2 className="text-3xl font-black mb-4">
                Noticed Mud Tubes or Hollow Wood?
              </h2>

              <p className="text-gray-200 leading-7 mb-6">
                Book a termite inspection before the activity spreads to other
                furniture, wooden fittings or hidden structural areas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-green-600 hover:bg-green-700 text-center px-6 py-3 rounded-xl font-bold transition"
                >
                  Book Termite Inspection
                </Link>

                <a
                  href="tel:+919941229005"
                  className="border border-white text-center px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition"
                >
                  Call +91 99412 29005
                </a>
              </div>
            </div>

            {/* RELATED TERMITE SERVICES */}
            <section className="bg-white border border-green-100 rounded-2xl p-6 my-10">
              <h2 className="text-2xl font-bold text-[#063b3f] mb-4">
                🔗 Related Termite Services
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
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
                  Pre-Construction Termite Treatment →
                </Link>

                <Link
                  to="/post-construction-termite-treatment"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Post-Construction Termite Treatment →
                </Link>

                <Link
                  to="/wood-borer-treatment"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Wood Borer Treatment →
                </Link>

                <Link
                  to="/general-pest-control"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  General Pest Control →
                </Link>

                <Link
                  to="/contact"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Book Pest Inspection →
                </Link>
              </div>
            </section>

            {/* RELATED BLOGS */}
            <section className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6 my-10">
              <h2 className="text-2xl font-bold text-[#063b3f] mb-4">
                📖 Related Pest Control Guides
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
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
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Termite Control FAQs
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6"
                  >
                    <h3 className="text-lg font-black text-[#063b3f] mb-2">
                      {faq.q}
                    </h3>

                    <p className="text-gray-600 leading-7">{faq.a}</p>
                  </div>
                ))}
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
                  apartments and businesses across Bangalore, including termite,
                  cockroach, bed bug, mosquito, rodent and ant control.
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
                  Need Termite Control?
                </h2>

                <p className="text-gray-200 text-sm leading-6 mb-5">
                  Get professional termite inspection and treatment support for
                  your property anywhere in Bangalore.
                </p>

                <a
                  href="tel:+919941229005"
                  className="block w-full bg-green-600 hover:bg-green-700 text-center py-3.5 rounded-xl font-bold text-base mb-3 transition"
                >
                  📞 Call Now
                </a>

                <a
                  href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20termite%20inspection%20and%20treatment."
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
                    to="/anti-termite-treatment"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Anti-Termite Treatment
                  </Link>

                  <Link
                    to="/pre-construction-termite-treatment"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Pre-Construction Termite Treatment
                  </Link>

                  <Link
                    to="/post-construction-termite-treatment"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Post-Construction Termite Treatment
                  </Link>

                  <Link
                    to="/wood-borer-treatment"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Wood Borer Treatment
                  </Link>

                  <Link
                    to="/general-pest-control"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    General Pest Control
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
            Need Professional Termite Control?
          </h2>

          <p className="text-gray-200 mb-8 max-w-2xl mx-auto leading-7">
            Acuity Pest Control provides termite inspection and treatment
            support for homes, apartments, villas, offices and commercial
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
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20termite%20inspection%20and%20treatment."
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
