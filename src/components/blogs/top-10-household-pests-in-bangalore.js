import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/Top10HouseholdPestsBangalore.jpg";

import blogImg1 from "../../images/cockroch.png";
import blogImg5 from "../../images/Bed Bug.png";
import blogImg6 from "../../images/Black Rat Roof Rat.png";
import blogImg2 from "../../images/Signs of Termite Infestation in Your Home.jpg";

const canonicalUrl =
  "https://www.acuitypestcontrols.com/blogs/top-10-household-pests-in-bangalore";

const blogImageUrl =
  "https://www.acuitypestcontrols.com/images/top-10-household-pests-bangalore.jpg";

const faqs = [
  {
    q: "Which pest is most common in Bangalore homes?",
    a: "Cockroaches, mosquitoes, ants, termites, rodents and bed bugs are commonly found in Bangalore homes because of warm weather, seasonal rain, moisture, food sources, drains and dense urban living conditions.",
  },
  {
    q: "How often should I get pest control done?",
    a: "Pest control frequency depends on the pest, property condition and level of activity. Homes with recurring pest problems may require inspection or treatment every three to six months.",
  },
  {
    q: "Are pest control treatments safe?",
    a: "Professional pest control can be carried out safely when trained technicians use suitable application methods and provide preparation, re-entry and cleaning instructions.",
  },
  {
    q: "How can I prevent termites?",
    a: "Reduce moisture near wooden areas, repair water leaks, inspect furniture regularly and book termite inspection when you notice mud tubes, hollow wood, discarded wings or damaged furniture.",
  },
  {
    q: "Do mosquitoes breed only in dirty water?",
    a: "No. Mosquitoes can breed in clean stagnant water collected in buckets, plant trays, tyres, tanks, bottles, drains and balcony corners.",
  },
  {
    q: "When should I call a professional pest control company?",
    a: "Call a professional when pests keep returning, activity is spreading, termites or rodents are present, bed bugs are moving between rooms or DIY treatments provide only temporary relief.",
  },
];

const householdPestsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#blogposting`,
    headline: "Top 10 Household Pests in Bangalore",
    description:
      "Learn how to identify, prevent and control common pests found in Bangalore homes, including cockroaches, termites, mosquitoes, rats, bed bugs, ants and wood borers.",
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
        name: "Top 10 Household Pests in Bangalore",
        item: canonicalUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "Top 10 Household Pests in Bangalore",
    description:
      "Identify the most common pests in Bangalore homes and learn which pest control service may be suitable for each infestation.",
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
        "#why-pest-control-matters p",
        "#top-10-pests h2",
        "#prevention-tips h2",
        "#why-acuity h2",
        "#faq h2",
      ],
    },
  },
];

const Top10HouseholdPestsBangalore = () => {
  const pests = [
    {
      name: "Cockroaches",
      found: "Kitchens, bathrooms, drains, cabinets and appliances",
      signs:
        "Droppings, egg cases, unpleasant odour and cockroaches seen at night",
      problem:
        "Cockroaches can contaminate food and surfaces and may trigger allergies in sensitive people.",
      prevention:
        "Clean food spills, close garbage bins, repair leaks and keep drains and cabinets dry.",
      treatment: "Cockroach Control",
      link: "/cockroach-management-service",
    },
    {
      name: "Termites",
      found: "Wooden furniture, doors, windows, walls, flooring and cupboards",
      signs:
        "Mud tubes, hollow wood, discarded wings, wood damage and bubbling paint",
      problem:
        "Termites can damage wooden furniture, door frames, flooring and concealed wooden structures.",
      prevention:
        "Control moisture, repair leaks, inspect wooden areas and avoid storing wood directly against walls.",
      treatment: "Termite Treatment",
      link: "/anti-termite-treatment",
    },
    {
      name: "Mosquitoes",
      found: "Stagnant water, gardens, balconies, drains and water tanks",
      signs:
        "Mosquito activity during morning or evening and larvae inside collected water",
      problem:
        "Mosquitoes cause irritating bites and may create serious health concerns.",
      prevention:
        "Remove stagnant water, clean drains, cover tanks and empty plant trays and containers regularly.",
      treatment: "Mosquito Control",
      link: "/mosquito-management-service",
    },
    {
      name: "Rats and Mice",
      found:
        "Kitchens, storage rooms, ceilings, roofs, drains and utility areas",
      signs:
        "Droppings, scratching noises, gnaw marks, damaged packets and unpleasant odour",
      problem:
        "Rodents can contaminate food, damage wiring and chew furniture, pipes and stored materials.",
      prevention:
        "Seal entry points, store food properly, manage garbage and remove clutter from storage areas.",
      treatment: "Rodent Control",
      link: "/rodent-management-service",
    },
    {
      name: "Bed Bugs",
      found: "Mattresses, bed frames, sofas, furniture joints and wall cracks",
      signs:
        "Itchy bites, dark stains, shed skins and live bugs near sleeping areas",
      problem:
        "Bed bugs can cause repeated bites, disturbed sleep and spreading infestation between rooms.",
      prevention:
        "Inspect luggage, mattresses and second-hand furniture and reduce clutter around sleeping areas.",
      treatment: "Bed Bug Treatment",
      link: "/bed-bug-treatment",
    },
    {
      name: "Ants",
      found:
        "Kitchens, dining areas, cupboards, gardens and food storage spaces",
      signs:
        "Visible ant trails, nests, soil particles and repeated activity near food or water",
      problem:
        "Ants can contaminate food and create recurring trails inside kitchens and storage areas.",
      prevention:
        "Clean food residue, store sweets and grains properly and seal cracks around doors and windows.",
      treatment: "Ant Control",
      link: "/ant-control-treatment",
    },
    {
      name: "Lizards",
      found: "Walls, ceilings, kitchens, balconies and areas near lights",
      signs:
        "Droppings, visible lizards and repeated activity near insects and light sources",
      problem:
        "Lizards may create hygiene concerns through droppings and repeated presence in kitchens.",
      prevention:
        "Reduce insect activity, close entry gaps, install mesh and maintain clean corners.",
      treatment: "General Pest Control",
      link: "/general-pest-control",
    },
    {
      name: "Spiders",
      found: "Ceiling corners, storage rooms, balconies and undisturbed areas",
      signs:
        "Spider webs, egg sacs and spiders inside dark or cluttered spaces",
      problem: "Spiders create webs and some species may bite when disturbed.",
      prevention:
        "Remove webs, reduce clutter, seal gaps and control insects that serve as food.",
      treatment: "General Pest Control",
      link: "/general-pest-control",
    },
    {
      name: "Wood Borers",
      found: "Furniture, doors, cupboards, wooden panels and decorative wood",
      signs:
        "Small holes, fine wood powder, damaged surfaces and weakened furniture",
      problem:
        "Wood borers can damage wooden furniture and reduce the strength of affected material.",
      prevention:
        "Inspect wooden furniture, reduce moisture and avoid bringing infested wooden items indoors.",
      treatment: "Wood Borer Treatment",
      link: "/wood-borer-treatment",
    },
    {
      name: "Silverfish",
      found: "Bookshelves, wardrobes, bathrooms, cupboards and storage boxes",
      signs:
        "Damaged paper, yellow stains, small holes and silver-coloured insects in damp areas",
      problem:
        "Silverfish can damage books, paper, wallpaper, clothes and stored fabric.",
      prevention:
        "Reduce humidity, improve ventilation and keep books, clothes and storage spaces dry.",
      treatment: "General Pest Control",
      link: "/general-pest-control",
    },
  ];

  const preventionTips = [
    {
      title: "Keep kitchens clean",
      description:
        "Remove food spills, crumbs, grease and leftover food from countertops, floors and appliances.",
    },
    {
      title: "Store food properly",
      description:
        "Keep grains, snacks, sweets and pet food inside airtight containers.",
    },
    {
      title: "Seal entry points",
      description:
        "Close cracks, wall gaps and openings around pipes, windows, doors and utility lines.",
    },
    {
      title: "Remove stagnant water",
      description:
        "Empty plant trays, containers, tyres and buckets and clean drains regularly.",
    },
    {
      title: "Manage garbage",
      description:
        "Dispose of waste daily and keep indoor and outdoor dustbins properly covered.",
    },
    {
      title: "Reduce moisture",
      description:
        "Repair leaking taps, pipes and damp wall areas that attract cockroaches, termites and silverfish.",
    },
    {
      title: "Remove clutter",
      description:
        "Clear unused cardboard, papers and stored materials that create hiding places for pests.",
    },
    {
      title: "Inspect regularly",
      description:
        "Check kitchens, furniture, storage spaces and balconies for early pest warning signs.",
    },
  ];

  const whyChooseUs = [
    {
      title: "Trained technicians",
      description:
        "Our technicians inspect pest activity and recommend treatment according to the property condition.",
    },
    {
      title: "Multiple pest solutions",
      description:
        "We provide treatment for cockroaches, termites, mosquitoes, rodents, bed bugs, ants and other pests.",
    },
    {
      title: "Residential and commercial service",
      description:
        "Services are available for homes, apartments, offices, restaurants, warehouses and commercial buildings.",
    },
    {
      title: "Targeted treatment",
      description:
        "Treatment methods are selected according to the pest species, infestation level and affected areas.",
    },
    {
      title: "Prevention guidance",
      description:
        "Customers receive practical advice about hygiene, moisture, entry points and pest prevention.",
    },
    {
      title: "Bangalore service coverage",
      description:
        "Professional pest inspection and treatment support is available across major Bangalore locations.",
    },
  ];

  const areas = [
    "Whitefield",
    "Electronic City",
    "HSR Layout",
    "JP Nagar",
    "Koramangala",
    "Hebbal",
    "Indiranagar",
    "Marathahalli",
    "Jayanagar",
    "Sarjapur Road",
    "Banashankari",
    "BTM Layout",
  ];

  const tocItems = [
    {
      id: "why-pest-control-matters",
      label: "Why Household Pest Control Matters",
    },
    {
      id: "top-10-pests",
      label: "Top 10 Household Pests",
    },
    {
      id: "common-risk-areas",
      label: "Common Pest-Prone Areas",
    },
    {
      id: "prevention-tips",
      label: "How to Prevent Household Pests",
    },
    {
      id: "when-to-call",
      label: "When to Call Pest Control",
    },
    {
      id: "why-acuity",
      label: "Why Choose Acuity Pest Control?",
    },
    {
      id: "faq",
      label: "Household Pest Control FAQs",
    },
    {
      id: "service-areas",
      label: "Bangalore Service Areas",
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
      title: "Bed Bug Treatment Guide",
      slug: "/blogs/bed-bug-treatment",
      excerpt:
        "Learn the signs of bed bugs and how professional treatment supports control.",
      image: blogImg5,
    },
    {
      title: "Rat Control Tips for Homes",
      slug: "/blogs/rat-control-tips-for-homes",
      excerpt:
        "Learn how to identify rat infestation and reduce rodent entry into your property.",
      image: blogImg6,
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
        title="Top 10 Household Pests in Bangalore | Identification Guide"
        description="Identify the top 10 household pests in Bangalore, including cockroaches, termites, mosquitoes, rats, bed bugs, ants, wood borers and silverfish."
        keywords="household pests Bangalore, common pests in Bangalore homes, cockroach control Bangalore, termite treatment Bangalore, mosquito control Bangalore, rodent control Bangalore, bed bug treatment Bangalore, household pest control"
        canonical={canonicalUrl}
        image={blogImageUrl}
        schema={householdPestsSchema}
      />

      {/* HERO */}
      <section className="relative h-[48vh] sm:h-[55vh] md:h-[110vh]">
        <img
          src={bannerImage}
          alt="Common household pests found in Bangalore homes"
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
                Top 10 Household Pests in Bangalore
              </span>
            </nav>

            {/* BLOG HEADER */}
            <header className="mb-10">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Pest Identification Guide
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-[#063b3f] mt-4 mb-5 leading-tight">
                Top 10 Household Pests in Bangalore
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-5">
                <span>📅 Published: June 26, 2026</span>
                <span aria-hidden="true">•</span>
                <span>Reviewed: June 26, 2026</span>
                <span aria-hidden="true">•</span>
                <span>⏱ 10 min read</span>
              </div>

              <p className="text-gray-700 leading-8">
                Bangalore homes commonly face pest problems because of warm
                weather, seasonal rains, moisture, food sources, drains and
                dense urban living. This guide explains the most common
                household pests, their warning signs, the problems they cause
                and which treatment may be suitable.
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

            {/* WHY PEST CONTROL MATTERS */}
            <section
              id="why-pest-control-matters"
              className="scroll-mt-28 mb-14"
            >
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Household Pest Risks
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Why Household Pest Control Matters
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                Bangalore's warm climate, seasonal rain and urban lifestyle
                create suitable conditions for many household pests.
                Cockroaches, mosquitoes and ants are attracted to food, water
                and drainage areas, while termites and wood borers may damage
                furniture and wooden structures.
              </p>

              <p className="text-gray-700 leading-8 mb-5">
                Rodents can enter through drains, roofs and wall gaps. Bed bugs
                can spread through luggage, furniture and movement between
                rooms. Silverfish and spiders often remain inside damp,
                cluttered and undisturbed spaces.
              </p>

              <p className="text-gray-700 leading-8">
                Early pest identification helps protect food, furniture,
                property and hygiene. For professional inspection and treatment,
                explore our{" "}
                <Link
                  to="/general-pest-control"
                  className="text-green-700 font-semibold hover:underline"
                >
                  general pest control service in Bangalore
                </Link>
                .
              </p>
            </section>

            {/* TOP 10 PESTS */}
            <section id="top-10-pests" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Common Bangalore Pests
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Top 10 Household Pests Found in Bangalore
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                These pests are commonly found in Bangalore homes, apartments,
                villas and residential buildings.
              </p>

              <div className="space-y-6">
                {pests.map((pest, index) => (
                  <article
                    key={pest.name}
                    className="bg-[#f8fcfb] border border-green-100 rounded-3xl p-6 md:p-7 hover:shadow-md transition"
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-black shrink-0">
                        {index + 1}
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-black text-[#063b3f] mb-4">
                          {pest.name}
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-white border border-green-100 rounded-2xl p-4">
                            <p className="text-sm font-black text-[#063b3f] mb-1">
                              Where commonly found
                            </p>

                            <p className="text-gray-600 text-sm leading-6">
                              {pest.found}
                            </p>
                          </div>

                          <div className="bg-white border border-green-100 rounded-2xl p-4">
                            <p className="text-sm font-black text-[#063b3f] mb-1">
                              Common warning signs
                            </p>

                            <p className="text-gray-600 text-sm leading-6">
                              {pest.signs}
                            </p>
                          </div>

                          <div className="bg-white border border-green-100 rounded-2xl p-4">
                            <p className="text-sm font-black text-[#063b3f] mb-1">
                              Problems caused
                            </p>

                            <p className="text-gray-600 text-sm leading-6">
                              {pest.problem}
                            </p>
                          </div>

                          <div className="bg-white border border-green-100 rounded-2xl p-4">
                            <p className="text-sm font-black text-[#063b3f] mb-1">
                              Prevention tip
                            </p>

                            <p className="text-gray-600 text-sm leading-6">
                              {pest.prevention}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-5">
                          <p className="font-semibold text-[#063b3f]">
                            Recommended service: {pest.treatment}
                          </p>

                          <Link
                            to={pest.link}
                            className="inline-flex justify-center bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full font-bold text-sm transition"
                          >
                            View {pest.treatment}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* COMMON RISK AREAS */}
            <section id="common-risk-areas" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Pest-Prone Locations
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Common Pest-Prone Areas Inside a Home
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                Regularly check these locations for droppings, damage, insects,
                eggs, unusual odour and other signs of pest activity.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Kitchen cabinets and spaces below sinks",
                  "Bathrooms, drains and plumbing areas",
                  "Behind refrigerators and other appliances",
                  "Wardrobes, cupboards and storage rooms",
                  "Mattresses, sofas and bed frames",
                  "Balconies, gardens and plant trays",
                  "Door frames, windows and wooden flooring",
                  "False ceilings, roofs and utility areas",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-[#f6fffb] border border-green-100 rounded-2xl p-5"
                  >
                    <p className="font-semibold text-[#063b3f]">🔍 {item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* PREVENTION TIPS */}
            <section id="prevention-tips" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Household Pest Prevention
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                How to Prevent Household Pests
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                Cleanliness, moisture control, proper storage and regular
                inspection can reduce pest activity. However, active or
                recurring infestations may require professional treatment.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {preventionTips.map((item) => (
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

            {/* WHEN TO CALL */}
            <section id="when-to-call" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Active Infestation
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                When Should You Call Professional Pest Control?
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                Professional inspection should be considered when pest activity
                is repeated, spreading or connected to hidden nesting and
                breeding areas.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Pests keep returning after cleaning or DIY treatment",
                  "Cockroaches are visible during daytime",
                  "Termite mud tubes or wood damage appear",
                  "Rodent droppings or scratching noises are found",
                  "Bed bug bites and stains continue",
                  "Mosquito breeding is visible around the property",
                  "Multiple rooms have pest activity",
                  "Food, furniture or electrical wiring is being damaged",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-5"
                  >
                    <p className="font-semibold text-[#063b3f]">⚠️ {item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* WHY ACUITY */}
            <section id="why-acuity" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Acuity Pest Control
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Why Choose Acuity Pest Control?
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                We provide professional pest control services for homes,
                apartments, villas, offices and commercial properties across
                Bangalore.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {whyChooseUs.map((item) => (
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

            {/* IN-ARTICLE CTA */}
            <div className="bg-[#063b3f] text-white rounded-3xl p-7 md:p-9 mb-14">
              <h2 className="text-3xl font-black mb-4">
                Not Sure Which Pest Is in Your Home?
              </h2>

              <p className="text-gray-200 leading-7 mb-6">
                Book a professional pest inspection so our team can identify the
                pest, check affected areas and recommend a suitable treatment
                plan.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-green-600 hover:bg-green-700 text-center px-6 py-3 rounded-xl font-bold transition"
                >
                  Book Pest Inspection
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
                Household Pest FAQs
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

            {/* SERVICE AREAS */}
            <section id="service-areas" className="scroll-mt-28 mb-10">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Bangalore Locations
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Pest Control Services Across Bangalore
              </h2>

              <p className="text-gray-700 leading-8 mb-6">
                Acuity Pest Control provides household pest inspection and
                treatment support across major residential and commercial
                locations in Bangalore.
              </p>

              <div className="flex flex-wrap gap-2">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="bg-[#f6fffb] border border-green-100 text-[#063b3f] px-4 py-2 rounded-full font-semibold text-sm"
                  >
                    Pest Control in {area}
                  </span>
                ))}
              </div>
            </section>

            {/* SERVICE LINKS */}
            <section className="bg-white border border-green-100 rounded-2xl p-6 my-10">
              <h2 className="text-2xl font-bold text-[#063b3f] mb-4">
                🔗 Related Pest Control Services
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
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
                  to="/mosquito-management-service"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Mosquito Control →
                </Link>

                <Link
                  to="/rodent-management-service"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Rodent Control →
                </Link>

                <Link
                  to="/bed-bug-treatment"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Bed Bug Treatment →
                </Link>

                <Link
                  to="/ant-control-treatment"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Ant Control →
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
              </div>
            </section>

            {/* BLOG LINKS */}
            <section className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6 my-10">
              <h2 className="text-2xl font-bold text-[#063b3f] mb-4">
                📖 Related Pest Control Guides
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  to="/blogs/bed-bug-treatment"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Bed Bug Treatment Guide →
                </Link>

                <Link
                  to="/blogs/rat-control-tips-for-homes"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Rat Control Tips for Homes →
                </Link>

                <Link
                  to="/blogs/mosquito-prevention-during-rainy-season"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Mosquito Prevention During Rainy Season →
                </Link>

                <Link
                  to="/blogs/signs-of-termite-infestation"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Signs of Termite Infestation →
                </Link>

                <Link
                  to="/blogs/get-rid-of-cockroaches"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  How to Get Rid of Cockroaches →
                </Link>

                <Link
                  to="/blogs/pest-control-vs-diy"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Professional Pest Control vs DIY →
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
                  apartments and businesses across Bangalore, including
                  cockroach, termite, bed bug, mosquito, rodent, ant and wood
                  borer control.
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
                <h2 className="text-3xl font-black mb-3">Need Pest Control?</h2>

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
                  href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20household%20pest%20control%20service."
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
                  Book Inspection
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

              {/* POPULAR SERVICES */}
              <div className="bg-[#f8fcfb] border border-green-100 rounded-3xl p-6">
                <h2 className="font-black text-[#063b3f] text-lg mb-4">
                  🛠 Popular Services
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

                  <Link
                    to="/mosquito-management-service"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Mosquito Control
                  </Link>

                  <Link
                    to="/ant-control-treatment"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Ant Control
                  </Link>

                  <Link
                    to="/wood-borer-treatment"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Wood Borer Treatment
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
            Need Professional Pest Control in Bangalore?
          </h2>

          <p className="text-gray-200 mb-8 max-w-2xl mx-auto leading-7">
            Protect your home from cockroaches, termites, mosquitoes, rodents,
            bed bugs, ants and other household pests with professional
            inspection and treatment from Acuity Pest Control.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919941229005"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20household%20pest%20control%20service."
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

export default Top10HouseholdPestsBangalore;
