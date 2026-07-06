import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/GermanCockroachVsAmericanCockroach.jpg";

import blogImg1 from "../../images/cockroch.png";
import blogImg15 from "../../images/Why Cockroaches Enter Your Kitchen & How to Stop Them.jpg";
import blogImg4 from "../../images/Monsoon Pest Control Tips for Bangalore Homes.jpg";
import blogImg8 from "../../images/Top 10 Household Pests in Bangalore.png";

const faqs = [
  {
    q: "Which cockroach is more difficult to control?",
    a: "German cockroaches are usually more difficult to control because they reproduce faster and hide inside kitchens, appliances, cabinets and food preparation areas.",
  },
  {
    q: "Can American cockroaches fly?",
    a: "Yes, adult American cockroaches can glide or fly short distances in some conditions, but they usually crawl and enter buildings through drains, basements and gaps.",
  },
  {
    q: "Which cockroach is common in Bangalore?",
    a: "Both German and American cockroaches are commonly found in Bangalore. German cockroaches are often found in kitchens, while American cockroaches are common near drains and damp areas.",
  },
  {
    q: "Do DIY sprays remove cockroaches completely?",
    a: "DIY sprays may kill visible cockroaches, but they usually do not control hidden nests, eggs or breeding areas. Professional cockroach treatment gives better control.",
  },
];

const germanCockroachBlogSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id":
      "https://acuitypestcontrols.com/blogs/german-cockroach-vs-american-cockroach#blogposting",
    headline: "German Cockroach vs American Cockroach",
    description:
      "Learn the difference between German and American cockroaches, common signs, hiding places and the right cockroach control treatment in Bangalore.",
    image: "https://acuitypestcontrols.com/logo.png",
    datePublished: "2026-02-10",
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
        "https://acuitypestcontrols.com/blogs/german-cockroach-vs-american-cockroach",
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
];

const GermanCockroachVsAmericanCockroach = () => {
  const comparison = [
    {
      title: "Size",
      german: "Small, around 1.2–1.6 cm",
      american: "Large, around 3–5 cm",
    },
    {
      title: "Color",
      german: "Light brown with two dark stripes",
      american: "Reddish-brown",
    },
    {
      title: "Common Location",
      german: "Kitchen, cabinets, restaurants and appliances",
      american: "Drains, basements, bathrooms and sewers",
    },
    {
      title: "Breeding Speed",
      german: "Very fast",
      american: "Moderate",
    },
    {
      title: "Risk Level",
      german: "Very high in kitchens and food areas",
      american: "High near damp and drainage areas",
    },
    {
      title: "Treatment Difficulty",
      german: "Difficult because they hide and breed fast",
      american: "Moderate with proper drain and entry point treatment",
    },
  ];

  const germanSigns = [
    "Small light-brown cockroaches",
    "Found near kitchen appliances",
    "Seen mostly at night",
    "Fast breeding",
    "Strong unpleasant smell",
    "Egg capsules near cabinets",
  ];

  const americanSigns = [
    "Large reddish-brown cockroaches",
    "Found near bathrooms",
    "Seen in drains",
    "Basements",
    "Garages",
    "Outdoor manholes",
  ];

  const tocItems = [
    { id: "introduction", label: "Introduction" },
    { id: "comparison", label: "Comparison Table" },
    { id: "german-signs", label: "German Cockroach Signs" },
    { id: "american-signs", label: "American Cockroach Signs" },
    { id: "treatment", label: "Which One Is Harder To Control?" },
    { id: "faq", label: "FAQs" },
  ];

  const relatedPosts = [
    {
      title: "How to Get Rid of Cockroaches Permanently",
      slug: "/blogs/get-rid-of-cockroaches",
      excerpt:
        "Understand why cockroaches enter homes and how professional treatment helps control them effectively.",
      image: blogImg1,
    },
    {
      title: "Why Cockroaches Enter Your Kitchen & How to Stop Them",
      slug: "/blogs/why-cockroaches-enter-your-kitchen",
      excerpt:
        "Discover why cockroaches are attracted to kitchens and the best ways to control them.",
      image: blogImg15,
    },
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
      excerpt:
        "Discover the most common pests found in Bangalore homes and how to identify them.",
      image: blogImg8,
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
        title="German Cockroach vs American Cockroach | Acuity Pest Control"
        description="Learn the key differences between German and American cockroaches, their signs, hiding places and the right cockroach control treatment in Bangalore."
        keywords="German cockroach vs American cockroach, German cockroach Bangalore, American cockroach Bangalore, cockroach control Bangalore, cockroach treatment Bangalore, cockroach pest control"
        canonical="https://acuitypestcontrols.com/blogs/german-cockroach-vs-american-cockroach"
        image="https://acuitypestcontrols.com/logo.png"
        schema={germanCockroachBlogSchema}
      />

      {/* HERO */}
      <section className="relative h-[55vh] md:h-[110vh] flex items-center">
        <img
          src={bannerImage}
          alt="German cockroach vs American cockroach guide by Acuity Pest Control"
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
                Cockroach Control Bangalore
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-[#063b3f] mt-4 mb-5 leading-tight">
                German Cockroach vs American Cockroach
              </h1>

              <p className="text-gray-600 leading-8">
                German cockroaches and American cockroaches are both common in
                Bangalore, but they are different in size, hiding places,
                breeding speed and treatment method. Identifying the correct
                type helps choose the right cockroach control plan.
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
            <section id="introduction" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Understanding the Difference
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                Cockroaches are one of the most common household and commercial
                pests in Bangalore. The two species most frequently found are
                the German cockroach and the American cockroach. Both can create
                hygiene issues, but their behaviour and hiding places are
                different.
              </p>

              <p className="text-gray-700 leading-8">
                German cockroaches are usually found in kitchens, cabinets and
                appliances. American cockroaches are bigger and are commonly
                seen near bathrooms, drains, basements and damp areas. For
                professional help, explore our{" "}
                <Link
                  to="/cockroach-management-service"
                  className="text-green-700 font-semibold hover:underline"
                >
                  cockroach control service in Bangalore
                </Link>
                .
              </p>
            </section>

            {/* Comparison Table */}
            <section id="comparison" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                German Cockroach vs American Cockroach Comparison
              </h2>

              <div className="overflow-auto rounded-3xl shadow-lg">
                <table className="w-full bg-white">
                  <thead className="bg-green-600 text-white">
                    <tr>
                      <th className="p-5 text-left">Feature</th>
                      <th className="p-5 text-left">German Cockroach</th>
                      <th className="p-5 text-left">American Cockroach</th>
                    </tr>
                  </thead>

                  <tbody>
                    {comparison.map((item) => (
                      <tr key={item.title} className="border-b">
                        <td className="p-5 font-bold">{item.title}</td>
                        <td className="p-5">{item.german}</td>
                        <td className="p-5">{item.american}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Signs */}
            <div className="grid md:grid-cols-2 gap-10 mb-14">
              <section id="german-signs" className="scroll-mt-20">
                <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                  German Cockroach Signs
                </h2>

                <div className="space-y-3">
                  {germanSigns.map((item) => (
                    <div
                      key={item}
                      className="bg-[#f6fffb] p-4 rounded-2xl border border-green-100 font-semibold"
                    >
                      ✅ {item}
                    </div>
                  ))}
                </div>
              </section>

              <section id="american-signs" className="scroll-mt-20">
                <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                  American Cockroach Signs
                </h2>

                <div className="space-y-3">
                  {americanSigns.map((item) => (
                    <div
                      key={item}
                      className="bg-[#f6fffb] p-4 rounded-2xl border border-green-100 font-semibold"
                    >
                      ✅ {item}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Treatment */}
            <section id="treatment" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Which One Is Harder To Control?
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                German cockroaches are usually harder to control because they
                reproduce quickly and hide inside kitchen cabinets, appliances,
                cracks and food storage areas. Since eggs and hidden colonies
                may remain, they often need{" "}
                <Link
                  to="/cockroach-management-service"
                  className="text-green-700 font-semibold hover:underline"
                >
                  professional cockroach treatment
                </Link>
                .
              </p>

              <p className="text-gray-700 leading-8">
                American cockroaches are larger and often enter through drains,
                basements, bathrooms and sewer connections. Controlling them
                requires drain treatment, entry point inspection, sanitation and
                suitable pest control methods.
              </p>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
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
                  apartments, restaurants, offices and commercial spaces across
                  Bangalore, including cockroach, termite, bed bug, mosquito and
                  rodent control.
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
                Need Cockroach Control?
              </h3>

              <p className="text-gray-200 text-sm leading-6 mb-5">
                Get cockroach inspection and treatment for German or American
                cockroaches anywhere in Bangalore.
              </p>

              <a
                href="tel:+919941229005"
                className="block w-full bg-green-600 hover:bg-green-700 text-center py-3.5 rounded-xl font-bold text-base mb-3 transition"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20cockroach%20treatment."
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
                  to="/cockroach-management-service"
                  className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                >
                  Cockroach Control
                </Link>

                <Link
                  to="/general-pest-control"
                  className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                >
                  General Pest Control
                </Link>

                <Link
                  to="/ant-control-treatment"
                  className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                >
                  Ant Control
                </Link>

                <Link
                  to="/disinfection-services"
                  className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                >
                  Disinfection Services
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
            Need Professional Cockroach Control?
          </h2>

          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Acuity Pest Control provides professional German and American
            cockroach treatment for homes, apartments, restaurants and offices
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
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20cockroach%20treatment."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#063b3f] px-8 py-4 rounded-2xl font-bold transition hover:bg-gray-100"
            >
              WhatsApp Us
            </a>

            <Link
              to="/cockroach-management-service"
              className="border border-white px-8 py-4 rounded-2xl font-bold transition hover:bg-white/10"
            >
              View Cockroach Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GermanCockroachVsAmericanCockroach;
