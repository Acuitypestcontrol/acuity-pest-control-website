import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/Bed Bug Control Bangalore.jpg";

const faqs = [
  {
    q: "How do bed bugs enter homes?",
    a: "Bed bugs usually enter homes through luggage, used furniture, clothes, hotel stays, hostels and visitor belongings.",
  },
  {
    q: "Can bed bugs fly?",
    a: "No, bed bugs cannot fly. They crawl and hide in mattresses, furniture, cracks and upholstery.",
  },
  {
    q: "Is bed bug treatment safe?",
    a: "Yes, bed bug treatment can be safe when handled by trained professionals. Acuity Pest Control follows proper treatment methods and gives safety instructions before and after service.",
  },
  {
    q: "How many treatments are needed?",
    a: "It depends on the infestation level. Heavy infestation may need follow-up treatment for better control.",
  },
  {
    q: "Do you provide bed bug treatment in Bangalore?",
    a: "Yes, Acuity Pest Control provides professional bed bug treatment services across Bangalore for homes, apartments, hotels, hostels, PGs and commercial spaces.",
  },
];

const bedBugBlogSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": "https://acuitypestcontrols.com/blogs/bed-bug-treatment#blogposting",
    headline: "Bed Bug Treatment Guide: Identify, Remove and Prevent Bed Bugs",
    description:
      "Learn how to identify bed bugs, signs of infestation, common hiding places, treatment process and prevention tips from Acuity Pest Control Bangalore.",
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
      "@id": "https://acuitypestcontrols.com/blogs/bed-bug-treatment",
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

const BedBugTreatmentGuide = () => {
  const signs = [
    "Red bite marks on skin",
    "Blood stains on bed sheets",
    "Black spots on mattress",
    "Tiny eggs in mattress seams",
    "Musty smell near bed area",
    "Bed bugs hiding in cracks",
  ];

  const hidingPlaces = [
    "Mattress seams",
    "Bed frames",
    "Sofa corners",
    "Curtains",
    "Wooden furniture",
    "Electrical sockets",
    "Luggage bags",
    "Wall cracks",
  ];

  const treatmentSteps = [
    "Complete room inspection",
    "Identify bed bug hiding areas",
    "Chemical treatment",
    "Steam or heat treatment support",
    "Follow-up inspection",
    "Prevention guidance",
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

  const relatedPosts = [
    {
      title: "Complete Guide to Termite Control",
      slug: "termite-control-guide",
      excerpt:
        "Learn how to identify termite infestations and protect your home from costly damage.",
    },
    {
      title: "Cockroach Infestation: Signs & Solutions",
      slug: "cockroach-control-guide",
      excerpt:
        "Discover the common signs of cockroach infestation and how to control them effectively.",
    },
    {
      title: "Mosquito Control Tips for Your Home",
      slug: "mosquito-control-tips",
      excerpt:
        "Prevent mosquito problems with practical tips for your home and garden.",
    },
    {
      title: "Commercial Pest Control for Offices",
      slug: "commercial-pest-control",
      excerpt:
        "Maintain a healthy workspace with professional commercial pest control solutions.",
    },
  ];

  const tocItems = [
    { id: "what-are-bed-bugs", label: "What Are Bed Bugs?" },
    { id: "signs-of-infestation", label: "Signs of Infestation" },
    { id: "hiding-places", label: "Common Hiding Places" },
    { id: "why-serious", label: "Why Bed Bugs Are a Serious Problem" },
    { id: "treatment-process", label: "Our Treatment Process" },
    { id: "why-acuity", label: "Why Choose Acuity?" },
    { id: "faq", label: "FAQs" },
    { id: "service-areas", label: "Service Areas" },
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
        title="Bed Bug Treatment Guide in Bangalore | Acuity Pest Control"
        description="Learn how to identify bed bugs, signs of infestation, hiding places, treatment process and prevention tips from Acuity Pest Control Bangalore."
        keywords="bed bug treatment Bangalore, bed bug control Bangalore, bed bug signs, bed bug removal Bangalore, bed bug treatment guide, Acuity Pest Control"
        canonical="https://acuitypestcontrols.com/blogs/bed-bug-treatment"
        image="https://acuitypestcontrols.com/logo.png"
        schema={bedBugBlogSchema}
      />

      {/* HERO */}
      <section className="relative h-[55vh] md:h-[110vh] flex items-center">
        <img
          src={bannerImage}
          alt="Bed bug treatment guide in Bangalore by Acuity Pest Control"
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
                Bed Bug Control Bangalore
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-[#063b3f] mt-4 mb-5 leading-tight">
                Bed Bug Treatment Guide: Identify, Remove and Prevent Bed Bugs
              </h1>

              <p className="text-gray-600 leading-8">
                Bed bugs are one of the most difficult pests to control without
                professional support. This guide explains how to identify bed
                bugs, where they hide, why they spread and how professional bed
                bug treatment helps.
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

            {/* Intro */}
            <section id="what-are-bed-bugs" className="scroll-mt-20 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Bed Bug Control Bangalore
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                What Are Bed Bugs?
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                Bed bugs are small reddish-brown insects that feed on human
                blood, usually at night. They hide in mattresses, bed frames,
                sofas, furniture joints, wall cracks and luggage. Bed bug
                infestations can spread quickly if they are not treated
                professionally.
              </p>

              <p className="text-gray-700 leading-8">
                If you notice bites, blood stains, black spots or insects around
                your bed, it is better to book a{" "}
                <Link
                  to="/bed-bug-treatment"
                  className="text-green-700 font-semibold hover:underline"
                >
                  professional bed bug inspection and treatment
                </Link>{" "}
                before the infestation becomes serious.
              </p>
            </section>

            {/* Signs */}
            <section id="signs-of-infestation" className="scroll-mt-20 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Infestation Signs
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Signs of Bed Bug Infestation
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {signs.map((item) => (
                  <div
                    key={item}
                    className="bg-[#f6fffb] border border-green-100 rounded-2xl p-5 shadow-sm"
                  >
                    <p className="font-bold text-[#063b3f]">✅ {item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Hiding Places */}
            <section id="hiding-places" className="scroll-mt-20 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Where They Hide
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Common Bed Bug Hiding Places
              </h2>

              <p className="text-gray-700 leading-8 mb-6">
                Bed bugs are difficult to find because they hide in tiny cracks
                and dark areas. They commonly stay close to sleeping areas and
                come out during the night to feed.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {hidingPlaces.map((item) => (
                  <div
                    key={item}
                    className="bg-[#f8fcfb] border border-green-100 rounded-xl p-4 font-semibold text-[#063b3f] text-sm"
                  >
                    🛏️ {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Danger */}
            <section id="why-serious" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Why Bed Bugs Are a Serious Problem
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                Bed bugs may not damage your property like{" "}
                <Link
                  to="/anti-termite-treatment"
                  className="text-green-700 font-semibold hover:underline"
                >
                  termites
                </Link>
                , but they can disturb your sleep, cause skin irritation,
                allergic reactions and stress. In apartments, hotels, PGs and
                hostels, they can spread from one room to another very quickly.
              </p>

              <p className="text-gray-700 leading-8">
                DIY sprays may kill visible bed bugs, but eggs and hidden bugs
                often remain inside mattresses, cracks and furniture. That is
                why{" "}
                <Link
                  to="/bed-bug-treatment"
                  className="text-green-700 font-semibold hover:underline"
                >
                  professional bed bug treatment
                </Link>{" "}
                gives better long-term support.
              </p>
            </section>

            {/* Treatment Process */}
            <section id="treatment-process" className="scroll-mt-20 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Professional Treatment
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Our Bed Bug Treatment Process
              </h2>

              <div className="grid sm:grid-cols-2 gap-5">
                {treatmentSteps.map((step, index) => (
                  <div
                    key={step}
                    className="relative bg-[#f8fcfb] border border-green-100 rounded-2xl p-6 shadow-sm"
                  >
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-black text-sm">
                      {index + 1}
                    </div>

                    <h3 className="text-lg font-black text-[#063b3f]">
                      {step}
                    </h3>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Acuity */}
            <section id="why-acuity" className="scroll-mt-20 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Why Acuity
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Why Choose Acuity Pest Control?
              </h2>

              <p className="text-gray-700 leading-8 mb-6">
                We provide safe and effective bed bug treatment for homes,
                apartments, PGs, hotels, hostels and commercial spaces across
                Bangalore.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Trained Technicians",
                  "Safe Treatment Methods",
                  "Quick Support",
                  "Affordable Pricing",
                  "Residential & Commercial",
                  "Follow-Up Guidance",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-[#f6fffb] border border-green-100 rounded-xl p-4 font-semibold text-[#063b3f] text-sm"
                  >
                    ✅ {item}
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-20 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                FAQ
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Bed Bug Treatment FAQs
              </h2>

              <div className="space-y-4">
                {faqs.map((item) => (
                  <div
                    key={item.q}
                    className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-5"
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
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Service Areas
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Bed Bug Treatment Across Bangalore
              </h2>

              <div className="flex flex-wrap gap-2">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="bg-[#f6fffb] border border-green-100 text-[#063b3f] px-4 py-2 rounded-full font-semibold text-sm"
                  >
                    Bed Bug Treatment in {area}
                  </span>
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
                  apartments and businesses across Bangalore, including bed bug,
                  termite, cockroach, mosquito and rodent control services.
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
                    to={`/blogs/${post.slug}`}
                    className="block bg-[#f8fcfb] border border-green-100 rounded-2xl p-5 hover:shadow-md transition"
                  >
                    <h4 className="font-black text-[#063b3f] text-lg mb-1">
                      {post.title}
                    </h4>

                    <p className="text-gray-600 text-sm leading-6">
                      {post.excerpt}
                    </p>

                    <span className="text-green-700 font-semibold text-sm mt-2 inline-block">
                      Read More →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:w-1/3">
            {/* CTA Card */}
            <div className="bg-[#063b3f] text-white rounded-3xl p-7 mb-8">
              <h3 className="text-4xl font-black mb-3">Need Help?</h3>

              <p className="text-gray-200 text-sm leading-6 mb-5">
                Get bed bug inspection and treatment support anywhere in
                Bangalore.
              </p>

              <a
                href="tel:+919941229005"
                className="block w-full bg-green-600 hover:bg-green-700 text-center py-3.5 rounded-xl font-bold text-base mb-3 transition"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20bed%20bug%20treatment."
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
                      to={`/blogs/${post.slug}`}
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
                  to="/bed-bug-treatment"
                  className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                >
                  Bed Bug Treatment
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
                  Termite Control
                </Link>

                <Link
                  to="/general-pest-control"
                  className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                >
                  General Pest Control
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
            Need Professional Bed Bug Treatment?
          </h2>

          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Get bed bug inspection and treatment support anywhere in Bangalore.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919941229005"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20bed%20bug%20treatment."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#063b3f] px-8 py-4 rounded-2xl font-bold transition hover:bg-gray-100"
            >
              WhatsApp Us
            </a>

            <Link
              to="/bed-bug-treatment"
              className="border border-white px-8 py-4 rounded-2xl font-bold transition hover:bg-white/10"
            >
              View Bed Bug Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BedBugTreatmentGuide;
