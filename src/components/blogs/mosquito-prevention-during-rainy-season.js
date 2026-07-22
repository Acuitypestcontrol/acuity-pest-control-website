import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/servicebanner.jpg";

import blogImg4 from "../../images/Monsoon Pest Control Tips for Bangalore Homes.jpg";
import blogImg7 from "../../images/mosquito.jpg";
import blogImg from "../../images/cockroch.png";
import blogImg3 from "../../images/Professional Pest Control vs DIY.jpg";

const canonicalUrl =
  "https://www.acuitypestcontrols.com/blogs/mosquito-prevention-during-rainy-season";

const blogImageUrl =
  "https://www.acuitypestcontrols.com/images/mosquito-prevention-during-rainy-season.jpg";

const faqs = [
  {
    q: "Why do mosquitoes increase during rainy season?",
    a: "Mosquitoes increase during rainy season because stagnant rainwater creates breeding spots around homes, apartments, gardens, drains, balconies and terrace areas.",
  },
  {
    q: "Where do mosquitoes breed at home?",
    a: "Mosquitoes commonly breed in buckets, plant trays, water tanks, drains, unused containers, tyres, balcony corners and terrace areas where stagnant water collects.",
  },
  {
    q: "How can I prevent mosquitoes during monsoon?",
    a: "Remove stagnant water, cover water containers, clean drains, use mosquito screens, trim plants and book professional mosquito control when mosquito activity is high.",
  },
  {
    q: "Is mosquito control safe for homes?",
    a: "Mosquito control can be carried out safely when trained professionals follow suitable application methods and provide the required safety instructions.",
  },
  {
    q: "Do you provide mosquito control in Bangalore?",
    a: "Yes, Acuity Pest Control provides mosquito control services across Bangalore for homes, apartments, villas, offices and commercial properties.",
  },
];

const mosquitoBlogSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#blogposting`,
    headline: "Mosquito Prevention During Rainy Season",
    description:
      "Learn how to prevent mosquito breeding during rainy season and protect your home with mosquito prevention tips from Acuity Pest Control Bangalore.",
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
        name: "Mosquito Prevention During Rainy Season",
        item: canonicalUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "Mosquito Prevention During Rainy Season",
    description:
      "Learn how to reduce mosquito breeding during monsoon and when to book professional mosquito control in Bangalore.",
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
        "#why-mosquitoes-increase p",
        "#breeding-places h2",
        "#prevention-tips h2",
        "#professional-process h2",
        "#faq h2",
      ],
    },
  },
];

const MosquitoPreventionRainySeason = () => {
  const breedingPlaces = [
    {
      title: "Buckets and pots",
      description:
        "Rainwater collected inside buckets, flowerpots and open containers can become mosquito breeding spots.",
    },
    {
      title: "Terraces and balconies",
      description:
        "Water may collect in terrace corners, balcony drains and uneven surfaces after rainfall.",
    },
    {
      title: "Open drains and tanks",
      description:
        "Blocked drains and uncovered water tanks can provide suitable breeding conditions for mosquitoes.",
    },
    {
      title: "Plant trays and gardens",
      description:
        "Water retained in plant trays, leaves and garden containers can support mosquito breeding.",
    },
    {
      title: "Unused tyres and containers",
      description:
        "Old tyres, cans, bottles and unused items can collect rainwater for several days.",
    },
    {
      title: "Construction areas",
      description:
        "Puddles, open drums and stored construction materials may retain water during monsoon.",
    },
  ];

  const tips = [
    {
      title: "Remove stagnant water",
      description:
        "Empty buckets, plant trays, pots and outdoor containers at least once every few days.",
    },
    {
      title: "Cover water containers",
      description:
        "Keep overhead tanks, drums and stored water containers tightly covered.",
    },
    {
      title: "Clean drains",
      description:
        "Remove blockages and debris so rainwater can flow properly around the property.",
    },
    {
      title: "Install mosquito screens",
      description:
        "Use suitable screens on windows and doors to reduce mosquito entry into indoor spaces.",
    },
    {
      title: "Maintain gardens",
      description:
        "Trim dense plants, remove waste materials and avoid overwatering garden areas.",
    },
    {
      title: "Book professional treatment",
      description:
        "Professional mosquito control may be required when mosquito activity remains high despite prevention.",
    },
  ];

  const process = [
    {
      title: "Site inspection",
      description:
        "The property is inspected to identify mosquito-prone areas and possible breeding spots.",
    },
    {
      title: "Breeding spot identification",
      description:
        "Stagnant water sources, drains, terrace areas, gardens and containers are checked.",
    },
    {
      title: "Larval source treatment",
      description:
        "Suitable treatment may be applied to identified breeding sources where required.",
    },
    {
      title: "Outdoor spray treatment",
      description:
        "Selected outdoor resting areas may be treated to reduce adult mosquito activity.",
    },
    {
      title: "Fogging or mosquito reduction",
      description:
        "Fogging or another suitable mosquito reduction method may be advised based on the site.",
    },
    {
      title: "Prevention guidance",
      description:
        "Customers receive recommendations to reduce stagnant water and recurring mosquito activity.",
    },
  ];

  const healthRisks = [
    "Frequent mosquito bites",
    "Sleep disturbance and discomfort",
    "Increased mosquito-borne disease concerns",
    "Higher risk for children and elderly people",
    "Reduced comfort in gardens and balconies",
    "Employee and customer discomfort in commercial spaces",
  ];

  const whyChooseUs = [
    {
      title: "Trained technicians",
      description:
        "Our technicians inspect mosquito-prone areas and use appropriate treatment methods.",
    },
    {
      title: "Residential and commercial service",
      description:
        "We serve homes, apartments, offices, restaurants and other commercial properties.",
    },
    {
      title: "Site-based treatment",
      description:
        "Treatment recommendations are based on property conditions and mosquito activity.",
    },
    {
      title: "Prevention guidance",
      description:
        "Our team provides practical advice for controlling stagnant water and breeding sources.",
    },
    {
      title: "Quick support",
      description:
        "Customers can contact our team for mosquito inspection and service enquiries.",
    },
    {
      title: "Service across Bangalore",
      description:
        "Mosquito control support is available across major Bangalore locations.",
    },
  ];

  const areas = [
    "Whitefield",
    "Electronic City",
    "HSR Layout",
    "JP Nagar",
    "Koramangala",
    "Indiranagar",
    "Marathahalli",
    "Hebbal",
    "BTM Layout",
    "Jayanagar",
    "Sarjapur Road",
    "Banashankari",
  ];

  const tocItems = [
    {
      id: "why-mosquitoes-increase",
      label: "Why Mosquitoes Increase",
    },
    {
      id: "breeding-places",
      label: "Common Breeding Places",
    },
    {
      id: "health-risks",
      label: "Mosquito Health Risks",
    },
    {
      id: "prevention-tips",
      label: "Mosquito Prevention Tips",
    },
    {
      id: "professional-process",
      label: "Our Mosquito Control Process",
    },
    {
      id: "why-acuity",
      label: "Why Choose Acuity",
    },
    {
      id: "faq",
      label: "Frequently Asked Questions",
    },
    {
      id: "service-areas",
      label: "Bangalore Service Areas",
    },
  ];

  const relatedPosts = [
    {
      title: "Monsoon Pest Control Tips for Bangalore Homes",
      slug: "/blogs/monsoon-pest-control",
      excerpt:
        "Learn how to protect your home from cockroaches, mosquitoes, ants and other rainy-season pests.",
      image: blogImg4,
    },
    {
      title: "Top 10 Household Pests in Bangalore",
      slug: "/blogs/top-10-household-pests-in-bangalore",
      excerpt:
        "Discover the most common pests found in Bangalore homes and how to manage them.",
      image: blogImg,
    },
    {
      title: "Professional Pest Control vs DIY",
      slug: "/blogs/pest-control-vs-diy",
      excerpt:
        "Compare professional pest control services with common DIY pest treatment methods.",
      image: blogImg3,
    },
    {
      title: "Bed Bug Treatment Guide",
      slug: "/blogs/bed-bug-treatment",
      excerpt:
        "Learn the common signs of bed bugs and how professional treatment supports control.",
      image: blogImg7,
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
        title="Mosquito Prevention During Rainy Season | Bangalore"
        description="Learn how to prevent mosquito breeding during rainy season, common mosquito breeding places and when to book mosquito control in Bangalore."
        keywords="mosquito prevention rainy season, mosquito control Bangalore, monsoon mosquito control, mosquito breeding prevention, mosquito pest control Bangalore, rainy season pest control, mosquito treatment Bangalore"
        canonical={canonicalUrl}
        image={blogImageUrl}
        schema={mosquitoBlogSchema}
      />

      {/* HERO */}
      <section className="relative h-[48vh] sm:h-[55vh] md:h-[110vh]">
        <img
          src={bannerImage}
          alt="Mosquito prevention during rainy season in Bangalore"
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
                Mosquito Prevention During Rainy Season
              </span>
            </nav>

            {/* BLOG HEADER */}
            <header className="mb-10">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Mosquito Control Bangalore
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-[#063b3f] mt-4 mb-5 leading-tight">
                Mosquito Prevention During Rainy Season
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-5">
                <span>📅 Published: June 26, 2026</span>
                <span aria-hidden="true">•</span>
                <span>Reviewed: June 26, 2026</span>
                <span aria-hidden="true">•</span>
                <span>⏱ 8 min read</span>
              </div>

              <p className="text-gray-700 leading-8">
                Mosquito activity increases during rainy season because stagnant
                water collects around homes, apartments, terraces, gardens and
                drains. This guide explains where mosquitoes breed, how to
                prevent mosquito activity and when to book professional mosquito
                control service in Bangalore.
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

            {/* WHY MOSQUITOES INCREASE */}
            <section
              id="why-mosquitoes-increase"
              className="scroll-mt-28 mb-14"
            >
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Monsoon Mosquito Activity
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Why Mosquitoes Increase During Rainy Season
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                During rainy season, water collects in buckets, pots, terrace
                corners, balcony areas, drains, open containers and construction
                spaces. These water-filled areas can become mosquito breeding
                spots when they remain undisturbed for several days.
              </p>

              <p className="text-gray-700 leading-8 mb-5">
                Warm weather, high humidity and stagnant water provide suitable
                conditions for mosquito development. Even a small amount of
                water inside a plant tray, bottle cap or blocked drain may
                support mosquito breeding.
              </p>

              <p className="text-gray-700 leading-8">
                If mosquito breeding is not controlled early, activity can
                increase around homes, apartment communities, offices,
                restaurants and other commercial properties. For professional
                support, explore our{" "}
                <Link
                  to="/mosquito-management-service"
                  className="text-green-700 font-semibold hover:underline"
                >
                  mosquito control service in Bangalore
                </Link>
                .
              </p>
            </section>

            {/* BREEDING PLACES */}
            <section id="breeding-places" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Water Collection Areas
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Common Mosquito Breeding Places
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                Mosquitoes can breed in small quantities of stagnant water.
                Inspect these areas regularly during monsoon and remove water
                whenever possible.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {breedingPlaces.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#f6fffb] border border-green-100 rounded-2xl p-6 shadow-sm"
                  >
                    <h3 className="text-xl font-black text-[#063b3f] mb-3">
                      🦟 {item.title}
                    </h3>

                    <p className="text-gray-600 leading-7">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <p className="text-gray-700 leading-7">
                  <strong className="text-[#063b3f]">Important:</strong> Empty,
                  scrub and dry water-holding containers regularly. Simply
                  pouring out water without cleaning the container may not
                  remove material attached to the surface.
                </p>
              </div>
            </section>

            {/* HEALTH RISKS */}
            <section id="health-risks" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Mosquito Concerns
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Health and Comfort Risks Caused by Mosquitoes
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                Mosquitoes are not only irritating. Heavy mosquito activity can
                affect sleep, comfort and the safety of people using residential
                and commercial spaces.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {healthRisks.map((item) => (
                  <div
                    key={item}
                    className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-5"
                  >
                    <p className="font-semibold text-[#063b3f]">⚠️ {item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* PREVENTION TIPS */}
            <section id="prevention-tips" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Monsoon Prevention
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Mosquito Prevention Tips for Rainy Season
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                Controlling mosquito breeding requires regular inspection,
                cleaning and removal of stagnant water. Follow these practical
                prevention steps throughout the rainy season.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {tips.map((tip, index) => (
                  <div
                    key={tip.title}
                    className="relative bg-[#f8fcfb] border border-green-100 rounded-2xl p-6 shadow-sm"
                  >
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-black text-sm">
                      {index + 1}
                    </div>

                    <h3 className="text-xl font-black text-[#063b3f] mb-3">
                      {tip.title}
                    </h3>

                    <p className="text-gray-600 leading-7">{tip.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* PROFESSIONAL PROCESS */}
            <section id="professional-process" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Professional Treatment
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Our Mosquito Control Process
              </h2>

              <p className="text-gray-700 leading-8 mb-7">
                Professional mosquito control focuses on finding breeding areas,
                reducing mosquito activity and providing practical prevention
                guidance based on the condition of the property.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {process.map((step, index) => (
                  <div
                    key={step.title}
                    className="relative bg-[#f6fffb] border border-green-100 rounded-2xl p-6 shadow-sm"
                  >
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#063b3f] text-white flex items-center justify-center font-black text-sm">
                      {index + 1}
                    </div>

                    <h3 className="text-xl font-black text-[#063b3f] mb-3">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-6">
                      {step.description}
                    </p>
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
                We provide mosquito control services for homes, apartments,
                villas, offices, restaurants, warehouses and commercial
                properties across Bangalore.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {whyChooseUs.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#f6fffb] rounded-2xl p-6 border border-green-100"
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
                Mosquito Activity Increasing Around Your Property?
              </h2>

              <p className="text-gray-200 leading-7 mb-6">
                Our team can inspect mosquito-prone areas, identify possible
                breeding sources and recommend a suitable mosquito control
                service.
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

            {/* FAQ */}
            <section id="faq" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Mosquito Control FAQs
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
                Mosquito Control Services Across Bangalore
              </h2>

              <p className="text-gray-700 leading-8 mb-6">
                Acuity Pest Control provides mosquito inspection and treatment
                support across major residential and commercial locations in
                Bangalore.
              </p>

              <div className="flex flex-wrap gap-2">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="bg-[#f6fffb] border border-green-100 text-[#063b3f] px-4 py-2 rounded-full font-semibold text-sm"
                  >
                    Mosquito Control in {area}
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
                  to="/mosquito-management-service"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Mosquito Control →
                </Link>

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
                  to="/common-area-treatment-residential-complex"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Common Area Pest Control →
                </Link>

                <Link
                  to="/disinfection-services"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Disinfection Services →
                </Link>

                <Link
                  to="/contact"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Book Pest Inspection →
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
                  mosquito, cockroach, termite, bed bug, ant and rodent control.
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
                  Need Mosquito Control?
                </h2>

                <p className="text-gray-200 text-sm leading-6 mb-5">
                  Get professional inspection and mosquito control support for
                  your home or business anywhere in Bangalore.
                </p>

                <a
                  href="tel:+919941229005"
                  className="block w-full bg-green-600 hover:bg-green-700 text-center py-3.5 rounded-xl font-bold text-base mb-3 transition"
                >
                  📞 Call Now
                </a>

                <a
                  href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20mosquito%20control%20service."
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
                    to="/mosquito-management-service"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Mosquito Control
                  </Link>

                  <Link
                    to="/general-pest-control"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    General Pest Control
                  </Link>

                  <Link
                    to="/common-area-treatment-residential-complex"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Common Area Pest Control
                  </Link>

                  <Link
                    to="/cockroach-management-service"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Cockroach Control
                  </Link>

                  <Link
                    to="/disinfection-services"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Disinfection Services
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
            Need Professional Mosquito Control in Bangalore?
          </h2>

          <p className="text-gray-200 mb-8 max-w-2xl mx-auto leading-7">
            Get mosquito inspection and mosquito control support for your home,
            apartment, office or commercial property from Acuity Pest Control.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919941229005"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20mosquito%20control%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#063b3f] px-8 py-4 rounded-2xl font-bold transition hover:bg-gray-100"
            >
              WhatsApp Us
            </a>

            <Link
              to="/mosquito-management-service"
              className="border border-white px-8 py-4 rounded-2xl font-bold transition hover:bg-white/10"
            >
              View Mosquito Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MosquitoPreventionRainySeason;
