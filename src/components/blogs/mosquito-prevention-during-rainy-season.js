import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/servicebanner.jpg";

import blogImg4 from "../../images/Monsoon Pest Control Tips for Bangalore Homes.jpg";
import blogImg7 from "../../images/mosquito.jpg";
import blogImg from "../../images/cockroch.png";
import blogImg3 from "../../images/Professional Pest Control vs DIY.jpg";

const faqs = [
  {
    q: "Why do mosquitoes increase during rainy season?",
    a: "Mosquitoes increase during rainy season because stagnant rainwater creates breeding spots around homes, apartments, gardens, drains and terrace areas.",
  },
  {
    q: "Where do mosquitoes breed at home?",
    a: "Mosquitoes commonly breed in buckets, plant trays, water tanks, drains, unused containers, tyres, balcony corners and terrace areas.",
  },
  {
    q: "How can I prevent mosquitoes during monsoon?",
    a: "Remove stagnant water, cover water containers, clean drains, use mosquito screens and book professional mosquito control when activity is high.",
  },
  {
    q: "Is mosquito control safe for homes?",
    a: "Yes, mosquito control can be safe when done by trained professionals. Our team follows proper application methods and gives safety instructions.",
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
    "@id":
      "https://acuitypestcontrols.com/blogs/mosquito-prevention-during-rainy-season#blogposting",
    headline: "Mosquito Prevention During Rainy Season",
    description:
      "Learn how to prevent mosquito breeding during rainy season and protect your home with mosquito control tips from Acuity Pest Control Bangalore.",
    image: "https://acuitypestcontrols.com/logo.png",
    datePublished: "2026-06-26",
    dateModified: "2026-06-26",
    author: {
      "@type": "Organization",
      name: "Acuity Pest Control",
      url: "https://acuitypestcontrols.com/",
    },
    publisher: {
      "@type": "Organization",
      name: "Acuity Pest Control",
      logo: {
        "@type": "ImageObject",
        url: "https://acuitypestcontrols.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://acuitypestcontrols.com/blogs/mosquito-prevention-during-rainy-season",
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
        item: "https://acuitypestcontrols.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: "https://acuitypestcontrols.com/blogs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Mosquito Prevention During Rainy Season",
        item: "https://acuitypestcontrols.com/blogs/mosquito-prevention-during-rainy-season",
      },
    ],
  },
];

const MosquitoPreventionRainySeason = () => {
  const breedingPlaces = [
    "Stagnant water in buckets and pots",
    "Water collected on terrace or balcony",
    "Open drains and water tanks",
    "Plant trays and garden areas",
    "Unused tyres and containers",
    "Construction sites and puddles",
  ];

  const tips = [
    "Remove stagnant water from buckets, pots and trays.",
    "Keep overhead tanks and water containers tightly closed.",
    "Clean drains and avoid water blockage around the house.",
    "Use mosquito screens on windows and doors.",
    "Trim garden plants and remove waste materials.",
    "Book professional mosquito control during heavy mosquito activity.",
  ];

  const process = [
    "Site Inspection",
    "Breeding Spot Identification",
    "Larval Source Treatment",
    "Outdoor Spray Treatment",
    "Fogging / Mosquito Reduction",
    "Prevention Guidance",
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
    { id: "why-mosquitoes-increase", label: "Why Mosquitoes Increase" },
    { id: "breeding-places", label: "Common Breeding Places" },
    { id: "health-risks", label: "Health Risks" },
    { id: "prevention-tips", label: "Prevention Tips" },
    { id: "professional-process", label: "Our Mosquito Control Process" },
    { id: "why-acuity", label: "Why Choose Acuity" },
    { id: "faq", label: "FAQs" },
    { id: "service-areas", label: "Service Areas" },
  ];

  const relatedPosts = [
    {
      title: "Monsoon Pest Control Tips for Bangalore Homes",
      slug: "/blogs/monsoon-pest-control",
      excerpt:
        "Rainy season increases pest activity. Learn how to protect your home from pests.",
      image: blogImg4,
    },
    {
      title: "Top 10 Household Pests in Bangalore",
      slug: "/blogs/top-10-household-pests-in-bangalore",
      excerpt: "Discover the most common pests found in Bangalore homes.",
      image: blogImg,
    },
    {
      title: "Professional Pest Control vs DIY",
      slug: "/blogs/pest-control-vs-diy",
      excerpt: "Compare professional pest control and DIY pest treatment.",
      image: blogImg3,
    },
    {
      title: "Bed Bug Treatment Guide",
      slug: "/blogs/bed-bug-treatment",
      excerpt:
        "Know the signs of bed bugs and how professional treatment supports control.",
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
    <div className="w-full bg-white overflow-hidden">
      <SEO
        title="Mosquito Prevention During Rainy Season | Acuity Pest Control"
        description="Learn how to prevent mosquito breeding during rainy season and when to book professional mosquito control in Bangalore."
        keywords="mosquito prevention rainy season, mosquito control Bangalore, monsoon mosquito control, mosquito breeding prevention, mosquito pest control Bangalore, rainy season pest control"
        canonical="https://acuitypestcontrols.com/blogs/mosquito-prevention-during-rainy-season"
        image="https://acuitypestcontrols.com/logo.png"
        schema={mosquitoBlogSchema}
      />

      {/* HERO */}
      <section className="relative h-[55vh] md:h-[110vh] flex items-center">
        <img
          src={bannerImage}
          alt="Mosquito prevention during rainy season by Acuity Pest Control"
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
                Mosquito Control Bangalore
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-[#063b3f] mt-4 mb-5 leading-tight">
                Mosquito Prevention During Rainy Season
              </h1>

              <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-5">
                <span>📅 June 26, 2026</span>
                <span>•</span>
                <span>⏱ 5 min read</span>
              </div>

              <p className="text-gray-600 leading-8">
                Mosquito activity increases during rainy season because stagnant
                water collects around homes, apartments, terraces, gardens and
                drains. This guide explains how mosquitoes breed, how to prevent
                them and when to book professional mosquito control service.
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

            {/* Why Mosquitoes Increase */}
            <section
              id="why-mosquitoes-increase"
              className="scroll-mt-20 mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Why Mosquitoes Increase During Rainy Season
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                During rainy season, water collects in buckets, pots, terrace
                corners, balcony areas, drains, open containers and construction
                spaces. These small water-filled areas can become mosquito
                breeding spots if they are not cleaned regularly.
              </p>

              <p className="text-gray-700 leading-8">
                If mosquito breeding is not controlled early, the problem can
                spread quickly and affect homes, apartment communities, offices,
                restaurants and commercial properties. For professional help,
                explore our{" "}
                <Link
                  to="/mosquito-management-service"
                  className="text-green-700 font-semibold hover:underline"
                >
                  mosquito control service in Bangalore
                </Link>
                .
              </p>
            </section>

            {/* Breeding Places */}
            <section id="breeding-places" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Common Mosquito Breeding Places
              </h2>

              <p className="text-gray-700 leading-8 mb-6">
                Mosquitoes can breed in very small amounts of stagnant water.
                Check these places regularly during rainy season:
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {breedingPlaces.map((item) => (
                  <div
                    key={item}
                    className="bg-[#f6fffb] border border-green-100 rounded-2xl p-5 shadow-sm"
                  >
                    <p className="font-semibold text-[#063b3f]">🦟 {item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Health Risks */}
            <section id="health-risks" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Health Risks Caused by Mosquitoes
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                Mosquitoes are not only irritating; they can also create health
                concerns for families and employees. During monsoon, mosquito
                bites increase because breeding spots multiply around
                residential and commercial spaces.
              </p>

              <p className="text-gray-700 leading-8">
                Keeping your surroundings dry, clean and professionally treated
                can help reduce mosquito activity and improve safety in homes,
                apartments, offices and common areas.
              </p>
            </section>

            {/* Prevention Tips */}
            <section id="prevention-tips" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Mosquito Prevention Tips for Rainy Season
              </h2>

              <div className="grid sm:grid-cols-2 gap-5">
                {tips.map((tip, index) => (
                  <div
                    key={tip}
                    className="relative bg-[#f8fcfb] border border-green-100 rounded-2xl p-6 shadow-sm"
                  >
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-black text-sm">
                      {index + 1}
                    </div>

                    <p className="text-gray-700 leading-7 font-semibold">
                      {tip}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Professional Process */}
            <section id="professional-process" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Our Mosquito Control Process
              </h2>

              <p className="text-gray-700 leading-8 mb-6">
                Professional mosquito control focuses on finding breeding areas,
                reducing mosquito activity and giving prevention guidance for
                long-term maintenance.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {process.map((step, index) => (
                  <div
                    key={step}
                    className="relative bg-[#f6fffb] border border-green-100 rounded-2xl p-6 shadow-sm"
                  >
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#063b3f] text-white flex items-center justify-center font-black text-sm">
                      {index + 1}
                    </div>

                    <h3 className="text-xl font-black text-[#063b3f]">
                      {step}
                    </h3>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Acuity */}
            <section id="why-acuity" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Why Choose Acuity Pest Control?
              </h2>

              <p className="text-gray-700 leading-8 mb-6">
                We provide mosquito control services for homes, apartments,
                villas, offices, restaurants, warehouses and commercial
                properties across Bangalore.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Trained Technicians",
                  "Safe Treatment Methods",
                  "Residential & Commercial",
                  "Affordable Pricing",
                  "Quick Support",
                  "Prevention Guidance",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-[#f6fffb] rounded-2xl p-4 font-bold text-[#063b3f] border border-green-100"
                  >
                    ✅ {item}
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Mosquito Control FAQs
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

            {/* Service Areas */}
            <section id="service-areas" className="scroll-mt-20 mb-6">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Mosquito Control Services Across Bangalore
              </h2>

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

            {/* Service Links */}
            <div className="bg-white border border-green-100 rounded-2xl p-6 my-10">
              <h3 className="text-xl font-bold text-[#063b3f] mb-4">
                🔗 Related Pest Control Services
              </h3>

              <div className="grid sm:grid-cols-2 gap-3">
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
                  mosquito, cockroach, termite, bed bug and ant control.
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
                Need Mosquito Control?
              </h3>

              <p className="text-gray-200 text-sm leading-6 mb-5">
                Get professional inspection and mosquito control support
                anywhere in Bangalore.
              </p>

              <a
                href="tel:+919941229005"
                className="block w-full bg-green-600 hover:bg-green-700 text-center py-3.5 rounded-xl font-bold text-base mb-3 transition"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20mosquito%20control."
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

          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Get mosquito inspection and mosquito control support from Acuity
            Pest Control anywhere in Bangalore.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919941229005"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20mosquito%20control."
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
