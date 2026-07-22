import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/TermiteTreatmentCostBangalore (1).jpg";

import blogImg2 from "../../images/Signs of Termite Infestation in Your Home.jpg";
import blogImg3 from "../../images/Professional Pest Control vs DIY.jpg";
import blogImg4 from "../../images/Monsoon Pest Control Tips for Bangalore Homes.jpg";
import blogImg9 from "../../images/How Often Should Pest Control Be Done.jpg";

const canonicalUrl =
  "https://www.acuitypestcontrols.com/blogs/termite-treatment-cost-bangalore";

const blogImageUrl =
  "https://www.acuitypestcontrols.com/images/termite-treatment-cost-bangalore.jpg";

const faqs = [
  {
    q: "How much does termite treatment cost in Bangalore?",
    a: "Termite treatment cost depends on the property size, infestation level, affected area, treatment method, drilling requirement and warranty plan. A site inspection is required to confirm the correct price.",
  },
  {
    q: "Is termite treatment worth it?",
    a: "Yes. Termites can silently damage wooden furniture, doors, flooring, cupboards and structural wood. Timely treatment may help reduce further damage and costly repairs.",
  },
  {
    q: "How long does termite treatment last?",
    a: "The result depends on the treatment method, product quality, application process, site condition, moisture level and property maintenance. The technician will recommend a suitable treatment and monitoring plan.",
  },
  {
    q: "Do you provide pre-construction termite treatment?",
    a: "Yes, Acuity Pest Control provides pre-construction and post-construction termite treatment services for homes, apartments, villas, offices and commercial properties across Bangalore.",
  },
  {
    q: "Can termite treatment cost be confirmed over the phone?",
    a: "A basic estimate may be discussed, but final pricing should be confirmed after inspecting the affected area, property size, termite activity and required treatment method.",
  },
];

const termiteCostSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#blogposting`,
    headline: "Termite Treatment Cost in Bangalore",
    description:
      "Learn what affects termite treatment cost in Bangalore, including property size, infestation level, treatment method, affected area and warranty requirements.",
    image: {
      "@type": "ImageObject",
      url: blogImageUrl,
    },
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
        name: "Termite Treatment Cost in Bangalore",
        item: canonicalUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "Termite Treatment Cost in Bangalore",
    description:
      "Understand the main factors that affect termite treatment cost for residential and commercial properties in Bangalore.",
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
        "#why-cost-varies p",
        "#estimated-pricing h2",
        "#factors h2",
        "#treatment-types h2",
        "#cheap-vs-expensive p",
        "#faq h2",
      ],
    },
  },
];

const TermiteTreatmentCostBangalore = () => {
  const propertyTypes = [
    {
      type: "1 BHK apartment",
      pricing: "Inspection required",
      details:
        "Pricing depends on the number of affected rooms, wooden fittings, wall areas and treatment method.",
    },
    {
      type: "2 BHK apartment",
      pricing: "Inspection required",
      details:
        "The estimate depends on property size, termite spread, drilling coverage and furniture condition.",
    },
    {
      type: "3 BHK apartment",
      pricing: "Inspection required",
      details:
        "Larger apartments may require treatment across multiple rooms, walls, cupboards and wooden fixtures.",
    },
    {
      type: "Villa or independent house",
      pricing: "Site inspection required",
      details:
        "Villas may require inspection of multiple floors, wooden interiors, soil contact areas and outdoor sections.",
    },
    {
      type: "Office",
      pricing: "Site inspection required",
      details:
        "The quotation depends on office size, partitions, furniture, flooring and affected work areas.",
    },
    {
      type: "Commercial property",
      pricing: "Custom quotation",
      details:
        "Commercial pricing is based on the total area, infestation level, treatment schedule and operational requirements.",
    },
  ];

  const factors = [
    {
      title: "Property size",
      description:
        "Larger properties normally require more inspection time, labour, treatment material and application coverage.",
    },
    {
      title: "Infestation level",
      description:
        "A limited infestation may require targeted treatment, while widespread activity may require treatment across multiple areas.",
    },
    {
      title: "Treatment method",
      description:
        "Drilling, chemical barriers, soil treatment and wooden furniture treatment involve different application processes.",
    },
    {
      title: "Affected wooden areas",
      description:
        "The number and condition of cupboards, doors, frames, flooring and furniture can influence the treatment plan.",
    },
    {
      title: "Construction stage",
      description:
        "Pre-construction and post-construction termite treatments use different methods and coverage requirements.",
    },
    {
      title: "Warranty and follow-up",
      description:
        "The service plan, warranty period, monitoring requirement and follow-up visits may affect the overall quotation.",
    },
  ];

  const treatments = [
    {
      title: "Drill and fill treatment",
      description:
        "Small holes may be drilled at suitable points so the treatment can reach concealed termite movement areas.",
    },
    {
      title: "Chemical barrier treatment",
      description:
        "A protective treatment barrier may be created around affected wall, floor or structural sections.",
    },
    {
      title: "Soil treatment",
      description:
        "Soil treatment may be used to reduce termite movement from the ground into the building.",
    },
    {
      title: "Wooden furniture treatment",
      description:
        "Affected cupboards, doors, frames, panels and other wooden items may receive targeted treatment.",
    },
    {
      title: "Pre-construction treatment",
      description:
        "Soil and foundation areas are treated during construction before flooring and structural work are completed.",
    },
    {
      title: "Post-construction treatment",
      description:
        "Existing buildings are inspected and treated through suitable drilling, injection and targeted application methods.",
    },
  ];

  const inspectionChecks = [
    "Mud tubes on walls, corners and wooden surfaces",
    "Hollow-sounding doors, cupboards and furniture",
    "Discarded termite wings near windows and lights",
    "Wood powder, damaged edges or small holes",
    "Moisture around bathrooms, pipes and kitchens",
    "Damage behind fixed cupboards and wall panels",
    "Termite activity near flooring and skirting",
    "Previous treatment history and recurring activity",
  ];

  const cheapTreatmentRisks = [
    {
      title: "Limited inspection",
      description:
        "Low-cost treatment may focus only on the visible area without checking hidden termite routes.",
    },
    {
      title: "Incomplete coverage",
      description:
        "Important walls, flooring, furniture or entry points may remain untreated.",
    },
    {
      title: "Wrong treatment method",
      description:
        "Applying a general spray may not address termites moving inside walls, wood or soil.",
    },
    {
      title: "No follow-up guidance",
      description:
        "Without monitoring and prevention advice, termite activity may continue unnoticed.",
    },
    {
      title: "Repeated treatment expense",
      description:
        "Temporary treatment may require repeated spending without controlling the source.",
    },
    {
      title: "Higher repair costs",
      description:
        "Continued termite activity can increase damage to furniture, doors, flooring and wooden interiors.",
    },
  ];

  const tocItems = [
    {
      id: "why-cost-varies",
      label: "Why Termite Treatment Cost Varies",
    },
    {
      id: "estimated-pricing",
      label: "Termite Treatment Pricing Guide",
    },
    {
      id: "factors",
      label: "Factors That Affect Cost",
    },
    {
      id: "inspection-checks",
      label: "What Is Checked During Inspection?",
    },
    {
      id: "treatment-types",
      label: "Types of Termite Treatment",
    },
    {
      id: "cheap-vs-expensive",
      label: "Why Very Cheap Treatment Can Cost More",
    },
    {
      id: "faq",
      label: "Frequently Asked Questions",
    },
  ];

  const relatedPosts = [
    {
      title: "Signs of Termite Infestation in Your Home",
      slug: "/blogs/signs-of-termite-infestation",
      excerpt:
        "Learn the common termite warning signs every homeowner should know.",
      image: blogImg2,
    },
    {
      title: "How Often Should Pest Control Be Done?",
      slug: "/blogs/how-often-should-pest-control-be-done",
      excerpt:
        "Learn how frequently pest control may be needed for homes and businesses.",
      image: blogImg9,
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
        title="Termite Treatment Cost in Bangalore | Price Guide"
        description="Learn what affects termite treatment cost in Bangalore, including property size, infestation level, treatment method, affected area and warranty plan."
        keywords="termite treatment cost Bangalore, anti termite treatment cost Bangalore, termite control Bangalore, termite inspection Bangalore, pre construction termite treatment, post construction termite treatment, termite treatment price Bangalore"
        canonical={canonicalUrl}
        image={blogImageUrl}
        schema={termiteCostSchema}
      />

      {/* HERO */}
      <section className="relative h-[48vh] sm:h-[55vh] md:h-[110vh]">
        <img
          src={bannerImage}
          alt="Termite treatment cost and inspection guide in Bangalore"
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
                Termite Treatment Cost in Bangalore
              </span>
            </nav>

            {/* BLOG HEADER */}
            <header className="mb-10">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Termite Treatment Bangalore
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-[#063b3f] mt-4 mb-5 leading-tight">
                Termite Treatment Cost in Bangalore
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-5">
                <span>📅 Published: April 6, 2026</span>
                <span aria-hidden="true">•</span>
                <span>Reviewed: June 26, 2026</span>
                <span aria-hidden="true">•</span>
                <span>⏱ 9 min read</span>
              </div>

              <p className="text-gray-700 leading-8">
                Termite treatment cost in Bangalore depends on the property
                size, level of infestation, affected wooden areas, treatment
                method, drilling requirement and warranty plan. This guide
                explains the main cost factors and why a site inspection is
                necessary before confirming the final price.
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

            {/* WHY COST VARIES */}
            <section id="why-cost-varies" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Termite Pricing Factors
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Why Termite Treatment Cost Varies
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                Termite treatment cost changes from one property to another
                because every building has a different size, construction type,
                infestation level and number of affected areas.
              </p>

              <p className="text-gray-700 leading-8 mb-5">
                A small apartment with limited activity in one cupboard may need
                a different treatment plan from a villa, office or commercial
                property with termites in multiple rooms, flooring and wall
                sections.
              </p>

              <p className="text-gray-700 leading-8">
                Termites often damage wood and interiors before visible signs
                appear. A professional inspection helps identify the affected
                areas and choose the correct treatment plan. Explore our{" "}
                <Link
                  to="/anti-termite-treatment"
                  className="text-green-700 font-semibold hover:underline"
                >
                  anti-termite treatment service in Bangalore
                </Link>{" "}
                for inspection and treatment support.
              </p>
            </section>

            {/* PRICING GUIDE */}
            <section id="estimated-pricing" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Property-Based Estimate
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Termite Treatment Pricing Guide
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                Final termite treatment pricing should be confirmed after a site
                inspection. The quotation depends on treatment coverage,
                drilling requirement, property condition, affected furniture and
                warranty plan.
              </p>

              <div className="overflow-x-auto rounded-2xl border border-green-100">
                <table className="w-full min-w-[760px] bg-white text-left">
                  <thead className="bg-[#063b3f] text-white">
                    <tr>
                      <th className="p-5 border border-white/20">
                        Property Type
                      </th>

                      <th className="p-5 border border-white/20">
                        Pricing Status
                      </th>

                      <th className="p-5 border border-white/20">
                        What Affects the Estimate
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {propertyTypes.map((item, index) => (
                      <tr
                        key={item.type}
                        className={
                          index % 2 === 0 ? "bg-white" : "bg-[#f8fcfb]"
                        }
                      >
                        <td className="p-5 border border-gray-200 font-black text-[#063b3f]">
                          {item.type}
                        </td>

                        <td className="p-5 border border-gray-200 font-semibold text-green-700">
                          {item.pricing}
                        </td>

                        <td className="p-5 border border-gray-200 text-gray-600 leading-7">
                          {item.details}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <p className="text-gray-700 leading-7">
                  <strong className="text-[#063b3f]">Pricing note:</strong>{" "}
                  Exact pricing cannot be confirmed only by property type.
                  Inspection is required to check the infestation level,
                  affected area and suitable treatment method.
                </p>
              </div>
            </section>

            {/* FACTORS */}
            <section id="factors" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Cost Calculation
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Factors That Affect Termite Treatment Cost
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                These are the main factors considered while preparing a termite
                treatment quotation.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {factors.map((item) => (
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

            {/* INSPECTION CHECKS */}
            <section id="inspection-checks" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Site Inspection
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                What Is Checked During a Termite Inspection?
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                A termite inspection helps determine the affected sections,
                possible termite routes and suitable treatment coverage.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {inspectionChecks.map((item) => (
                  <div
                    key={item}
                    className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-5"
                  >
                    <p className="font-semibold text-[#063b3f]">🔍 {item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* TREATMENT TYPES */}
            <section id="treatment-types" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Treatment Methods
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Types of Termite Treatment
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                The treatment method is selected according to the construction
                stage, termite activity, affected material and accessibility of
                the infestation.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {treatments.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#f6fffb] border border-green-100 rounded-2xl p-6"
                  >
                    <h3 className="text-xl font-black text-[#063b3f] mb-3">
                      🛡️ {item.title}
                    </h3>

                    <p className="text-gray-600 leading-7">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* CHEAP VS EXPENSIVE */}
            <section id="cheap-vs-expensive" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Treatment Quality
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Why Very Cheap Termite Treatment Can Cost More Later
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                A very low quotation may not include complete inspection,
                sufficient treatment coverage, affected wooden areas, follow-up
                recommendations or monitoring support.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {cheapTreatmentRisks.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6"
                  >
                    <h3 className="text-xl font-black text-[#063b3f] mb-3">
                      ⚠️ {item.title}
                    </h3>

                    <p className="text-gray-600 leading-7">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-gray-700 leading-8 mt-7">
                The correct treatment plan, application quality and complete
                coverage are more important than selecting only the lowest
                price.
              </p>
            </section>

            {/* IN-ARTICLE CTA */}
            <div className="bg-[#063b3f] text-white rounded-3xl p-7 md:p-9 mb-14">
              <h2 className="text-3xl font-black mb-4">
                Need an Accurate Termite Treatment Estimate?
              </h2>

              <p className="text-gray-200 leading-7 mb-6">
                Book a site inspection so our team can check the affected areas,
                infestation level and suitable treatment method before preparing
                your quotation.
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

            {/* FAQ */}
            <section id="faq" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Termite Cost FAQs
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
                  Request Termite Quote →
                </Link>
              </div>
            </section>

            {/* BLOG LINKS */}
            <section className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6 my-10">
              <h2 className="text-2xl font-bold text-[#063b3f] mb-4">
                📖 Related Pest Control Guides
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
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
                  Need Termite Pricing?
                </h2>

                <p className="text-gray-200 text-sm leading-6 mb-5">
                  Book a professional termite inspection and receive a treatment
                  estimate based on your property condition.
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
                  className="block w-full bg-white text-[#063b3f] text-center py-3.5 rounded-xl font-bold text-base mb-3 transition hover:bg-gray-100"
                >
                  💬 WhatsApp Us
                </a>

                <Link
                  to="/contact"
                  className="block w-full border border-white text-center py-3.5 rounded-xl font-bold text-base transition hover:bg-white/10"
                >
                  Request Inspection
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
            Need a Termite Treatment Estimate in Bangalore?
          </h2>

          <p className="text-gray-200 mb-8 max-w-2xl mx-auto leading-7">
            Book a professional inspection and receive a treatment quotation
            based on your property size, infestation level and affected areas.
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
