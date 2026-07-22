import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/diypest.jpg";

import blogImg1 from "../../images/cockroch.png";
import blogImg2 from "../../images/Signs of Termite Infestation in Your Home.jpg";
import blogImg3 from "../../images/Monsoon Pest Control Tips for Bangalore Homes.jpg";
import blogImg4 from "../../images/Top 10 Household Pests in Bangalore.png";

const canonicalUrl =
  "https://www.acuitypestcontrols.com/blogs/pest-control-vs-diy";

const blogImageUrl =
  "https://www.acuitypestcontrols.com/images/professional-pest-control-vs-diy.jpg";

const faqs = [
  {
    q: "Is DIY pest control enough for homes?",
    a: "DIY pest control may provide temporary relief for a small pest problem, but it usually does not remove hidden nests, eggs, colonies or breeding areas. Professional pest control is more suitable for recurring or active infestations.",
  },
  {
    q: "When should I call professional pest control?",
    a: "Call professional pest control when pests keep returning, activity is spreading, termites or rodents are present, bed bugs are moving between rooms or DIY treatments are no longer working.",
  },
  {
    q: "Is professional pest control safe?",
    a: "Professional pest control can be carried out safely when trained technicians use suitable treatment methods and provide the required preparation and safety instructions.",
  },
  {
    q: "Which is better, DIY or professional pest control?",
    a: "DIY methods are useful for basic prevention and very minor pest activity. Professional pest control is better for active infestations, recurring pest activity and hidden breeding areas.",
  },
  {
    q: "Can DIY pest control make an infestation worse?",
    a: "Incorrect or repeated product use can sometimes push pests deeper into cracks, walls, drains, ceilings or furniture. It may also delay proper identification and targeted treatment.",
  },
];

const pestControlVsDIYSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#blogposting`,
    headline: "Professional Pest Control vs DIY",
    description:
      "Compare professional pest control and DIY pest control methods. Learn which option is safer, more effective and better for pest prevention in Bangalore.",
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
        name: "Professional Pest Control vs DIY",
        item: canonicalUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "Professional Pest Control vs DIY",
    description:
      "Understand the difference between DIY pest control and professional pest control and learn when professional treatment is required.",
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
        "#what-is-diy p",
        "#what-is-professional p",
        "#main-difference h2",
        "#advantages h2",
        "#final-recommendation p",
        "#faq h2",
      ],
    },
  },
];

const PestControlVsDIY = () => {
  const comparisonRows = [
    {
      point: "Inspection",
      diy: "Basic visual checking by the property owner",
      professional: "Detailed inspection of visible and hidden pest areas",
    },
    {
      point: "Pest identification",
      diy: "The pest species may be incorrectly identified",
      professional: "Technicians identify the pest and infestation level",
    },
    {
      point: "Treatment target",
      diy: "Mostly visible pests and accessible areas",
      professional: "Pests, entry points, hiding spots and breeding areas",
    },
    {
      point: "Treatment result",
      diy: "May provide temporary reduction",
      professional: "Provides more complete pest management support",
    },
    {
      point: "Product application",
      diy: "Depends on customer knowledge and label instructions",
      professional: "Controlled application by trained technicians",
    },
    {
      point: "Best suited for",
      diy: "Basic prevention and very minor pest activity",
      professional: "Active infestations and recurring pest problems",
    },
  ];

  const professionalAdvantages = [
    {
      title: "Detailed inspection",
      description:
        "Technicians inspect kitchens, bathrooms, furniture, drains, cracks, ceilings and other pest-prone areas.",
    },
    {
      title: "Correct pest identification",
      description:
        "Different pest species require different treatment methods, products and monitoring plans.",
    },
    {
      title: "Targeted treatment",
      description:
        "Treatment is selected based on the pest, infestation level and condition of the property.",
    },
    {
      title: "Hidden-area treatment",
      description:
        "Professional service focuses on cracks, crevices, nesting areas, entry points and breeding zones.",
    },
    {
      title: "Safety guidance",
      description:
        "Customers receive preparation, re-entry, cleaning and prevention instructions based on the treatment.",
    },
    {
      title: "Follow-up support",
      description:
        "Follow-up inspection or monitoring may be advised for recurring or heavy pest activity.",
    },
  ];

  const diyLimitations = [
    "DIY products usually target only visible pests.",
    "The pest species may be identified incorrectly.",
    "Hidden eggs, nests and colonies may remain untreated.",
    "Incorrect product use can create safety concerns.",
    "Repeated sprays may push pests into deeper hiding areas.",
    "Different products may be mixed or applied unnecessarily.",
    "The infestation may spread while proper treatment is delayed.",
    "Temporary results can increase long-term treatment costs.",
  ];

  const whenToCall = [
    {
      title: "Pests keep returning",
      description:
        "Repeated pest activity after cleaning and DIY treatment usually indicates a hidden source or nesting area.",
    },
    {
      title: "Termite activity is visible",
      description:
        "Mud tubes, hollow wood, damaged frames or discarded wings require professional termite inspection.",
    },
    {
      title: "Rodents enter repeatedly",
      description:
        "Recurring rodent activity may require inspection, baiting, monitoring and entry-point control.",
    },
    {
      title: "Bed bugs are spreading",
      description:
        "Bed bugs can hide inside mattresses, furniture joints, wall gaps, bed frames and nearby rooms.",
    },
    {
      title: "Cockroach activity is heavy",
      description:
        "Cockroaches visible during daytime may indicate a large or disturbed infestation.",
    },
    {
      title: "Mosquito breeding is increasing",
      description:
        "Stagnant water, blocked drains and outdoor breeding areas may require inspection and professional treatment.",
    },
  ];

  const tocItems = [
    {
      id: "what-is-diy",
      label: "What Is DIY Pest Control?",
    },
    {
      id: "what-is-professional",
      label: "What Is Professional Pest Control?",
    },
    {
      id: "main-difference",
      label: "Main Difference",
    },
    {
      id: "advantages",
      label: "Advantages of Professional Pest Control",
    },
    {
      id: "limitations",
      label: "Limitations of DIY Pest Control",
    },
    {
      id: "when-to-call",
      label: "When Should You Call Professionals?",
    },
    {
      id: "final-recommendation",
      label: "Final Recommendation",
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
        "Learn professional methods to control cockroaches and reduce recurring infestation.",
      image: blogImg1,
    },
    {
      title: "Signs of Termite Infestation in Your Home",
      slug: "/blogs/signs-of-termite-infestation",
      excerpt:
        "Learn the common termite warning signs every homeowner should know.",
      image: blogImg2,
    },
    {
      title: "Monsoon Pest Control Tips for Bangalore Homes",
      slug: "/blogs/monsoon-pest-control",
      excerpt:
        "Learn how to protect your home from common pests during Bangalore's rainy season.",
      image: blogImg3,
    },
    {
      title: "Top 10 Household Pests in Bangalore",
      slug: "/blogs/top-10-household-pests-in-bangalore",
      excerpt:
        "Discover the most common pests found in Bangalore homes and how to manage them.",
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
        title="Professional Pest Control vs DIY | Bangalore Guide"
        description="Professional pest control vs DIY: compare effectiveness, safety, cost and treatment methods and learn when to call pest control experts in Bangalore."
        keywords="professional pest control vs DIY, DIY pest control Bangalore, pest control Bangalore, DIY pest treatment, professional pest treatment, cockroach control Bangalore, termite treatment Bangalore, rodent control Bangalore"
        canonical={canonicalUrl}
        image={blogImageUrl}
        schema={pestControlVsDIYSchema}
      />

      {/* HERO */}
      <section className="relative h-[48vh] sm:h-[55vh] md:h-[110vh]">
        <img
          src={bannerImage}
          alt="Professional pest control versus DIY pest treatment"
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
                Professional Pest Control vs DIY
              </span>
            </nav>

            {/* BLOG HEADER */}
            <header className="mb-10">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Pest Control Guide
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-[#063b3f] mt-4 mb-5 leading-tight">
                Professional Pest Control vs DIY
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-5">
                <span>📅 Published: June 26, 2026</span>
                <span aria-hidden="true">•</span>
                <span>Reviewed: June 26, 2026</span>
                <span aria-hidden="true">•</span>
                <span>⏱ 9 min read</span>
              </div>

              <p className="text-gray-700 leading-8">
                DIY pest control may help with minor prevention, but active
                infestations usually require proper inspection, pest
                identification and targeted treatment. This guide explains the
                difference between DIY pest control and professional pest
                control so you can choose the right approach for your property.
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
                Pest problems are common in homes, apartments, offices,
                restaurants, warehouses and commercial buildings. When people
                notice cockroaches, ants, rodents, mosquitoes, bed bugs or
                termites, the first reaction is often to buy a spray, powder,
                trap or home remedy.
              </p>

              <p className="text-gray-700 leading-8">
                DIY pest control can sometimes reduce minor visible activity.
                However, professional pest control begins with inspection, pest
                identification, source detection and targeted treatment. Instead
                of treating only the visible pest, technicians examine hiding
                areas, entry routes, nesting points and breeding conditions.
              </p>
            </section>

            {/* DIY */}
            <section id="what-is-diy" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Home Treatment Methods
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                What Is DIY Pest Control?
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                DIY pest control means using home remedies, cleaning methods,
                supermarket sprays, traps, powders, repellents or other products
                without hiring a professional pest control team.
              </p>

              <p className="text-gray-700 leading-8 mb-5">
                Common DIY methods include cockroach sprays, rodent glue traps,
                mosquito coils, vinegar sprays, boric powder, neem oil and
                household cleaning solutions. These methods may help when the
                pest activity is minor and recent.
              </p>

              <p className="text-gray-700 leading-8">
                Cleaning food spills, sealing small cracks, removing stagnant
                water and placing basic traps can support pest prevention.
                However, DIY methods usually cannot reach pests breeding inside
                drains, furniture, ceilings, walls or other hidden areas.
              </p>
            </section>

            {/* PROFESSIONAL */}
            <section id="what-is-professional" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Expert Treatment
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                What Is Professional Pest Control?
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                Professional pest control is a structured treatment process
                carried out by trained technicians. It begins with property
                inspection, pest identification, infestation assessment and
                examination of pest-prone areas.
              </p>

              <p className="text-gray-700 leading-8 mb-5">
                Treatment is then selected based on the pest species, building
                condition and level of activity. Different infestations require
                different methods.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6">
                  <h3 className="text-xl font-black text-[#063b3f] mb-3">
                    Cockroach control
                  </h3>

                  <p className="text-gray-600 leading-7">
                    May include gel baiting, crack-and-crevice treatment and
                    inspection of kitchens, drains and cabinets.
                  </p>
                </div>

                <div className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6">
                  <h3 className="text-xl font-black text-[#063b3f] mb-3">
                    Termite treatment
                  </h3>

                  <p className="text-gray-600 leading-7">
                    May require inspection of wooden areas, soil contact points,
                    walls, door frames and structural gaps.
                  </p>
                </div>

                <div className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6">
                  <h3 className="text-xl font-black text-[#063b3f] mb-3">
                    Rodent control
                  </h3>

                  <p className="text-gray-600 leading-7">
                    May include inspection, bait stations, traps, entry-point
                    identification and regular monitoring.
                  </p>
                </div>

                <div className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6">
                  <h3 className="text-xl font-black text-[#063b3f] mb-3">
                    Bed bug treatment
                  </h3>

                  <p className="text-gray-600 leading-7">
                    Requires inspection of mattresses, bed frames, furniture
                    joints, wall cracks and surrounding areas.
                  </p>
                </div>
              </div>
            </section>

            {/* COMPARISON */}
            <section id="main-difference" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Treatment Comparison
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Main Difference Between DIY and Professional Pest Control
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                The main difference is that DIY methods usually focus on visible
                pest activity, while professional pest control examines the
                cause, hiding areas and infestation level.
              </p>

              <div className="overflow-x-auto rounded-2xl border border-gray-200">
                <table className="w-full min-w-[700px] text-left text-sm">
                  <thead className="bg-[#063b3f] text-white">
                    <tr>
                      <th className="p-4 border border-white/20">Point</th>
                      <th className="p-4 border border-white/20">
                        DIY Pest Control
                      </th>
                      <th className="p-4 border border-white/20">
                        Professional Pest Control
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {comparisonRows.map((row, index) => (
                      <tr
                        key={row.point}
                        className={
                          index % 2 === 0 ? "bg-white" : "bg-[#f8fcfb]"
                        }
                      >
                        <td className="p-4 border border-gray-200 font-black text-[#063b3f]">
                          {row.point}
                        </td>

                        <td className="p-4 border border-gray-200 text-gray-600">
                          {row.diy}
                        </td>

                        <td className="p-4 border border-gray-200 text-gray-600">
                          {row.professional}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ADVANTAGES */}
            <section id="advantages" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Professional Benefits
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Advantages of Professional Pest Control
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                Professional pest control involves more than simply applying a
                spray. The service is planned according to the pest, property
                condition and level of activity.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {professionalAdvantages.map((item) => (
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
            </section>

            {/* LIMITATIONS */}
            <section id="limitations" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                DIY Treatment Risks
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Limitations of DIY Pest Control
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                DIY methods may appear cheaper initially, but they can fail to
                control hidden colonies, nests, eggs and breeding areas.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {diyLimitations.map((item) => (
                  <div
                    key={item}
                    className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-5"
                  >
                    <p className="font-semibold text-[#063b3f]">⚠️ {item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <p className="text-gray-700 leading-7">
                  <strong className="text-[#063b3f]">Important:</strong> Always
                  follow the product label. Do not mix pest control products or
                  apply more than the recommended quantity.
                </p>
              </div>
            </section>

            {/* WHEN TO CALL */}
            <section id="when-to-call" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Active Infestation
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                When Should You Call Professional Pest Control?
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                Professional treatment should be considered when pest activity
                is recurring, spreading or affecting hidden areas of the
                property.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {whenToCall.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6"
                  >
                    <h3 className="text-xl font-black text-[#063b3f] mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-7">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* FINAL RECOMMENDATION */}
            <section id="final-recommendation" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Final Decision
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Which Pest Control Option Should You Choose?
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                DIY pest control is useful for basic preventive actions such as
                maintaining cleanliness, storing food correctly, sealing small
                entry points and removing stagnant water.
              </p>

              <p className="text-gray-700 leading-8 mb-5">
                Professional pest control is more suitable when pests keep
                returning, the infestation is spreading or the breeding source
                is hidden inside drains, walls, furniture, ceilings or
                structural areas.
              </p>

              <p className="text-gray-700 leading-8">
                The best approach is to use regular prevention for minor risks
                and professional inspection for active or recurring pest
                problems.
              </p>
            </section>

            {/* IN-ARTICLE CTA */}
            <div className="bg-[#063b3f] text-white rounded-3xl p-7 md:p-9 mb-14">
              <h2 className="text-3xl font-black mb-4">
                DIY Treatment Not Working?
              </h2>

              <p className="text-gray-200 leading-7 mb-6">
                Acuity Pest Control provides professional pest inspection and
                treatment for homes, apartments, offices, restaurants and
                commercial properties across Bangalore.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-green-600 hover:bg-green-700 text-center px-6 py-3 rounded-xl font-bold transition"
                >
                  Book an Inspection
                </Link>

                <a
                  href="tel:+919941229005"
                  className="border border-white text-center px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition"
                >
                  Call +91 99412 29005
                </a>
              </div>
            </div>

            {/* SERVICE INTERLINKS */}
            <section className="bg-white border border-green-100 rounded-2xl p-6 my-10">
              <h2 className="text-2xl font-bold text-[#063b3f] mb-4">
                🔗 Related Pest Control Services
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
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
            </section>

            {/* BLOG INTERLINKS */}
            <section className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6 my-10">
              <h2 className="text-2xl font-bold text-[#063b3f] mb-4">
                📖 Related Pest Control Guides
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  to="/blogs/get-rid-of-cockroaches"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  How to Get Rid of Cockroaches →
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
                  Top 10 Household Pests →
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Pest Control FAQs
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
                  apartments and businesses across Bangalore, including
                  cockroach, termite, bed bug, mosquito, rodent and ant control.
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
                  Need Professional Help?
                </h2>

                <p className="text-gray-200 text-sm leading-6 mb-5">
                  Get professional pest inspection and treatment for your home
                  or business anywhere in Bangalore.
                </p>

                <a
                  href="tel:+919941229005"
                  className="block w-full bg-green-600 hover:bg-green-700 text-center py-3.5 rounded-xl font-bold text-base mb-3 transition"
                >
                  📞 Call Now
                </a>

                <a
                  href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20professional%20pest%20control%20service."
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
            Need Professional Pest Control?
          </h2>

          <p className="text-gray-200 mb-8 max-w-2xl mx-auto leading-7">
            Acuity Pest Control provides professional pest management for homes,
            apartments, offices, restaurants, hotels and commercial properties
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
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20professional%20pest%20control%20service."
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
