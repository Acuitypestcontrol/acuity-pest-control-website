import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/servicebanner.jpg";

import blogImg from "../../images/cockroch.png";
import blogImg2 from "../../images/Signs of Termite Infestation in Your Home.jpg";
import blogImg3 from "../../images/Professional Pest Control vs DIY.jpg";
import blogImg4 from "../../images/Monsoon Pest Control Tips for Bangalore Homes.jpg";

const faqs = [
  {
    q: "How do rats enter homes?",
    a: "Rats enter through drain pipes, wall gaps, roof openings, broken doors, windows, utility lines and small cracks around the building.",
  },
  {
    q: "Can rats climb walls?",
    a: "Yes, rats are strong climbers. They can climb rough walls, pipes, grills, trees and cables to enter homes and buildings.",
  },
  {
    q: "Are rats dangerous?",
    a: "Yes, rats can contaminate food, damage wiring, spread bacteria and create hygiene issues inside homes and commercial spaces.",
  },
  {
    q: "How long does rat control take?",
    a: "The time depends on infestation level, entry points and nesting areas. Professional inspection helps decide the right rodent control plan.",
  },
  {
    q: "Do you provide rat control in Bangalore?",
    a: "Yes, Acuity Pest Control provides professional rat and rodent control services across Bangalore for homes, apartments, offices and commercial properties.",
  },
];

const ratControlBlogSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id":
      "https://www.acuitypestcontrols.com/blogs/rat-control-tips-for-homes#blogposting",
    headline: "Rat Control Tips for Homes: Complete Guide to Prevent Rats",
    description:
      "Learn how to identify rat infestation, prevent rodent entry and protect your home with rat control tips from Acuity Pest Control Bangalore.",
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
        "https://www.acuitypestcontrols.com/blogs/rat-control-tips-for-homes",
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
        name: "Rat Control Tips for Homes",
        item: "https://www.acuitypestcontrols.com/blogs/rat-control-tips-for-homes",
      },
    ],
  },
];

const RatControlTipsForHomes = () => {
  const signs = [
    "Rat droppings near kitchen, cupboards or storage areas",
    "Scratching noises at night from ceiling or walls",
    "Chewed food packets, boxes or plastic containers",
    "Damaged electrical wires and furniture edges",
    "Burrows or holes near walls and drains",
    "Strong unpleasant smell in closed spaces",
  ];

  const tips = [
    "Seal gaps, cracks and holes around doors, windows and drains.",
    "Store food grains, snacks and pet food in airtight containers.",
    "Dispose garbage daily and keep dustbins tightly closed.",
    "Remove clutter from storage rooms, balconies and kitchens.",
    "Fix water leaks and avoid water stagnation.",
    "Use traps carefully in safe locations away from children and pets.",
  ];

  const process = [
    "Property Inspection",
    "Entry Point Checking",
    "Bait Station Placement",
    "Rodent Trapping",
    "Monitoring Support",
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
    { id: "why-rat-control", label: "Why Rat Control Is Important" },
    { id: "what-attracts", label: "What Attracts Rats?" },
    { id: "signs", label: "Signs of Rat Infestation" },
    { id: "health-risks", label: "Health and Property Risks" },
    { id: "prevention-tips", label: "Rat Control Tips for Homes" },
    { id: "professional-process", label: "Our Rat Control Process" },
    { id: "why-acuity", label: "Why Choose Acuity" },
    { id: "faq", label: "FAQs" },
    { id: "service-areas", label: "Service Areas" },
  ];

  const relatedPosts = [
    {
      title: "Complete Guide to Pest Control in Bangalore",
      slug: "/blogs/pest-control-bangalore-guide",
      excerpt:
        "Everything you need to know about professional pest control services in Bangalore.",
      image: blogImg,
    },
    {
      title: "Signs of Termite Infestation in Your Home",
      slug: "/blogs/signs-of-termite-infestation",
      excerpt: "Common termite signs every homeowner should know.",
      image: blogImg2,
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
        title="Rat Control Tips for Homes | Rodent Control Bangalore"
        description="Learn rat control tips for homes, signs of rat infestation, health risks, entry points and when to book professional rodent control in Bangalore."
        keywords="rat control Bangalore, rodent control Bangalore, rat infestation signs, rat prevention tips, rodent pest control, rat control tips for homes, Acuity Pest Control"
        canonical="https://www.acuitypestcontrols.com/blogs/rat-control-tips-for-homes"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={ratControlBlogSchema}
      />

      {/* HERO */}
      <section className="relative h-[55vh] md:h-[110vh] flex items-center">
        <img
          src={bannerImage}
          alt="Rat control tips for homes by Acuity Pest Control"
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
                Rodent Control Bangalore
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-[#063b3f] mt-4 mb-5 leading-tight">
                Rat Control Tips for Homes
              </h1>

              <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-5">
                <span>📅 June 26, 2026</span>
                <span>•</span>
                <span>⏱ 5 min read</span>
              </div>

              <p className="text-gray-600 leading-8">
                Rats can enter homes through small gaps, drains, pipes and roof
                openings. This guide explains how to identify rat infestation,
                what attracts rats, how to prevent rodent entry and when to book
                professional rodent control service.
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

            {/* Why Rat Control */}
            <section id="why-rat-control" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Why Rat Control Is Important for Homes
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                Rats are one of the most common pest problems in homes,
                apartments, restaurants and commercial properties. They can
                enter through small gaps, drains, pipes and wall cracks. Once
                inside, rats can damage food packets, furniture, wiring and
                stored materials.
              </p>

              <p className="text-gray-700 leading-8">
                A rat infestation should not be ignored. Early control helps
                protect your family, food, property and hygiene. Professional
                rodent control is often required when rats keep returning even
                after using traps or home remedies. Explore our{" "}
                <Link
                  to="/rodent-management-service"
                  className="text-green-700 font-semibold hover:underline"
                >
                  rodent control service in Bangalore
                </Link>{" "}
                for expert help.
              </p>
            </section>

            {/* What Attracts */}
            <section id="what-attracts" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                What Attracts Rats to Your Home?
              </h2>

              <p className="text-gray-700 leading-8 mb-6">
                Rats usually enter homes looking for food, water and shelter.
                Open garbage, leftover food, pet food, leaking taps, cluttered
                storage rooms and garden waste can attract rodents.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Food leftovers",
                  "Open garbage bins",
                  "Water leaks",
                  "Cluttered storage",
                  "Pet food",
                  "Garden waste",
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

            {/* Signs */}
            <section id="signs" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Signs of Rat Infestation at Home
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {signs.map((item) => (
                  <div
                    key={item}
                    className="bg-[#f6fffb] border border-green-100 rounded-2xl p-5 shadow-sm"
                  >
                    <p className="font-semibold text-[#063b3f]">🐭 {item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Health Risks */}
            <section id="health-risks" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Health and Property Risks Caused by Rats
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                Rats can contaminate food, utensils and storage areas. They may
                carry bacteria and create hygiene problems inside homes,
                restaurants, offices and food-handling spaces.
              </p>

              <p className="text-gray-700 leading-8">
                Rats also chew electrical wires, wooden items, plastic pipes and
                packaging materials. Wire damage can become dangerous because it
                may increase the risk of short circuits or fire.
              </p>
            </section>

            {/* Prevention Tips */}
            <section id="prevention-tips" className="scroll-mt-20 mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                Rat Control Tips for Homes
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
                Our Rat Control Process
              </h2>

              <p className="text-gray-700 leading-8 mb-6">
                Professional rodent control focuses on entry point checking,
                rodent activity mapping, bait station placement, monitoring and
                prevention guidance.
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
                We provide rat and rodent control services for homes,
                apartments, offices, restaurants, warehouses and commercial
                properties across Bangalore.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Experienced Technicians",
                  "Safe Rodent Control",
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
                Rat Control FAQs
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
                Rat Control Services Across Bangalore
              </h2>

              <div className="flex flex-wrap gap-2">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="bg-[#f6fffb] border border-green-100 text-[#063b3f] px-4 py-2 rounded-full font-semibold text-sm"
                  >
                    Rat Control in {area}
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
                  to="/rodent-management-service"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Rodent Control →
                </Link>

                <Link
                  to="/general-pest-control"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  General Pest Control →
                </Link>

                <Link
                  to="/warehouse-pest-management"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Warehouse Pest Management →
                </Link>

                <Link
                  to="/office-pest-control"
                  className="text-[#008fc5] font-semibold hover:underline"
                >
                  Office Pest Control →
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
                  apartments and businesses across Bangalore, including rodent,
                  cockroach, termite, bed bug, mosquito and ant control.
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
              <h3 className="text-4xl font-black mb-3">Need Rat Control?</h3>

              <p className="text-gray-200 text-sm leading-6 mb-5">
                Get professional rodent inspection and control support for your
                home or business anywhere in Bangalore.
              </p>

              <a
                href="tel:+919941229005"
                className="block w-full bg-green-600 hover:bg-green-700 text-center py-3.5 rounded-xl font-bold text-base mb-3 transition"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20rat%20control."
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
                  to="/rodent-management-service"
                  className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                >
                  Rodent Control
                </Link>

                <Link
                  to="/general-pest-control"
                  className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                >
                  General Pest Control
                </Link>

                <Link
                  to="/warehouse-pest-management"
                  className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                >
                  Warehouse Pest Management
                </Link>

                <Link
                  to="/office-pest-control"
                  className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                >
                  Office Pest Control
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
            Need Professional Rat Control in Bangalore?
          </h2>

          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Get rodent inspection and control support from Acuity Pest Control
            anywhere in Bangalore.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919941229005"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20rat%20control."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#063b3f] px-8 py-4 rounded-2xl font-bold transition hover:bg-gray-100"
            >
              WhatsApp Us
            </a>

            <Link
              to="/rodent-management-service"
              className="border border-white px-8 py-4 rounded-2xl font-bold transition hover:bg-white/10"
            >
              View Rodent Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RatControlTipsForHomes;
