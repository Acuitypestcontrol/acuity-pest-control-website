import React from "react";
import { Link, useParams } from "react-router-dom";
import SEO from "../seo/seo";

import blogImg from "../../images/Complete Guide to Pest Control in Bangalore.jpg";
import blogImg1 from "../../images/Signs of Termite Infestation in Your Home1.jpg";
import blogImg2 from "../../images/diypest.jpg";
import blogImg3 from "../../images/Complete Guide to Pest Control in Bangalore.jpg";

const blogData = [
  {
    title: "Complete Guide to Pest Control in Bangalore",
    slug: "pest-control-bangalore-guide",
    category: "General Tips",
    date: "June 26, 2026",
    isoDate: "2026-06-26",
    readTime: "8 min read",
    image: blogImg,
    desc: "Everything you need to know about professional pest control services in Bangalore.",
    seoTitle:
      "Complete Guide to Pest Control in Bangalore | Acuity Pest Control",
    seoDescription:
      "Read the complete guide to pest control in Bangalore. Learn about common pests, treatment options, warning signs and prevention tips from Acuity Pest Control.",
    keywords:
      "pest control Bangalore guide, pest control services Bangalore, pest control tips Bangalore, cockroach control Bangalore, termite treatment Bangalore",
    content: [
      {
        heading: "Why Pest Control Is Important in Bangalore",
        text: "Bangalore homes, apartments, offices and commercial properties commonly face problems from cockroaches, termites, rodents, mosquitoes, ants and bed bugs. Regular pest control helps protect health, property and hygiene.",
      },
      {
        heading: "Common Pests Found in Bangalore",
        text: "The most common pests include cockroaches in kitchens, termites in wooden furniture, rodents near storage areas, mosquitoes during monsoon and bed bugs in bedrooms.",
      },
      {
        heading: "When Should You Book Pest Control?",
        text: "You should book pest control when you notice droppings, bite marks, mud tubes, bad smell, damaged wood, insects at night or repeated pest activity even after cleaning.",
      },
    ],
    serviceLinks: [
      {
        label: "General Pest Control",
        path: "/general-pest-control",
      },
      {
        label: "Cockroach Control",
        path: "/cockroach-management-service",
      },
      {
        label: "Termite Treatment",
        path: "/anti-termite-treatment",
      },
      {
        label: "Bed Bug Treatment",
        path: "/bed-bug-treatment",
      },
    ],
  },
  {
    title: "How to Get Rid of Cockroaches Permanently",
    slug: "get-rid-of-cockroaches",
    category: "Cockroaches",
    date: "June 26, 2026",
    isoDate: "2026-06-26",
    readTime: "6 min read",
    image: blogImg,
    desc: "Professional methods to control cockroaches from your home.",
    seoTitle:
      "How to Get Rid of Cockroaches in Bangalore | Acuity Pest Control",
    seoDescription:
      "Learn how to get rid of cockroaches in Bangalore homes, kitchens and apartments. Read signs, hiding places, prevention tips and treatment options.",
    keywords:
      "how to get rid of cockroaches, cockroach control Bangalore, cockroach treatment Bangalore, kitchen cockroach control, cockroach pest control",
    content: [
      {
        heading: "Why Cockroaches Are Common in Bangalore Homes",
        text: "Cockroaches are one of the most common pests found in Bangalore homes, apartments, restaurants, offices and commercial kitchens. They usually enter buildings in search of food, water and shelter. Warm weather, drainage lines, food waste, damp corners and open kitchen areas make cockroaches multiply quickly. Once they start hiding inside cracks, cabinets, sinks and appliances, normal cleaning alone may not remove them completely.",
      },
      {
        heading: "Common Places Where Cockroaches Hide",
        text: "Cockroaches prefer dark, warm and moist places. You may find them behind refrigerators, under kitchen sinks, inside drainage areas, bathroom corners, wall cracks, cupboards, false ceilings, electrical panels and storage rooms. In apartments, they can also move from one flat to another through plumbing lines and common ducts.",
      },
      {
        heading: "Signs of Cockroach Infestation",
        text: "The most common signs include cockroach droppings, egg cases, bad smell, shed skin, live cockroaches at night and small black marks near kitchen cabinets or drains. If you see one or two cockroaches during the day, it may indicate a larger hidden infestation because cockroaches usually come out at night.",
      },
      {
        heading: "Why DIY Cockroach Sprays Are Not Enough",
        text: "Many people use supermarket sprays or home remedies for cockroaches. These may kill visible cockroaches temporarily, but they usually do not reach hidden eggs, nests and breeding areas. Repeated use of sprays can also scatter cockroaches into deeper hiding places. For long-term control, proper inspection and targeted treatment are required.",
      },
      {
        heading: "Professional Cockroach Treatment Process",
        text: "A professional cockroach control service usually includes inspection, identification of hiding spots, gel bait application, crack-and-crevice treatment, residual spray in selected areas and follow-up advice. Gel treatment is useful for kitchens because it targets cockroaches where they feed and hide. The treatment should be done carefully around food storage areas and appliances.",
      },
      {
        heading: "How to Prevent Cockroaches After Treatment",
        text: "To prevent cockroaches from coming back, keep kitchen counters dry, clean food spills immediately, close dustbins properly, avoid leaving dirty dishes overnight, seal cracks around pipes, repair leaking taps and clean drainage areas regularly. Regular housekeeping and preventive pest control can reduce the chances of re-infestation.",
      },
      {
        heading: "When Should You Call Acuity Pest Control?",
        text: "You should book professional cockroach control if you notice cockroaches repeatedly, see droppings near kitchen cabinets, find egg cases, experience bad smell or see cockroaches even after cleaning. Acuity Pest Control provides cockroach treatment for homes, apartments, offices, restaurants and commercial properties in Bangalore.",
      },
    ],
    serviceLinks: [
      {
        label: "Cockroach Control",
        path: "/cockroach-management-service",
      },
      {
        label: "General Pest Control",
        path: "/general-pest-control",
      },
      {
        label: "Office Pest Control",
        path: "/office-pest-control",
      },
      {
        label: "Disinfection Services",
        path: "/disinfection-services",
      },
    ],
  },
  {
    title: "Signs of Termite Infestation in Your Home",
    slug: "signs-of-termite-infestation",
    category: "Termites",
    date: "June 26, 2026",
    isoDate: "2026-06-26",
    readTime: "7 min read",
    image: blogImg1,
    desc: "Common termite signs every homeowner should know.",
    seoTitle: "Signs of Termite Infestation in Your Home | Acuity Pest Control",
    seoDescription:
      "Learn the early signs of termite infestation in your home, including mud tubes, hollow wood, damaged furniture and discarded wings.",
    keywords:
      "signs of termite infestation, termite signs Bangalore, termite control Bangalore, termite treatment Bangalore, anti termite treatment",
    content: [
      {
        heading: "Early Signs of Termites",
        text: "Mud tubes, hollow-sounding wood, damaged furniture, discarded wings and small holes in wooden surfaces are common termite warning signs.",
      },
      {
        heading: "Why Termites Are Dangerous",
        text: "Termites silently damage wooden furniture, doors, frames and structural wood. Early inspection can prevent expensive repairs.",
      },
      {
        heading: "Professional Termite Treatment",
        text: "Professional termite treatment targets termite activity and protects wooden areas using suitable treatment methods.",
      },
    ],
    serviceLinks: [
      {
        label: "Anti-Termite Treatment",
        path: "/anti-termite-treatment",
      },
      {
        label: "Pre Construction Termite Treatment",
        path: "/pre-construction-termite-treatment",
      },
      {
        label: "Post Construction Termite Treatment",
        path: "/post-construction-termite-treatment",
      },
      {
        label: "Wood Borer Treatment",
        path: "/wood-borer-treatment",
      },
    ],
  },
  {
    title: "Professional Pest Control vs DIY",
    slug: "pest-control-vs-diy",
    category: "General Tips",
    date: "June 26, 2026",
    isoDate: "2026-06-26",
    readTime: "5 min read",
    image: blogImg2,
    desc: "Compare professional pest control and DIY pest treatment.",
    seoTitle:
      "Professional Pest Control vs DIY | Acuity Pest Control Bangalore",
    seoDescription:
      "Compare professional pest control and DIY pest treatment. Learn why expert inspection and targeted treatment gives better pest control support.",
    keywords:
      "professional pest control vs DIY, DIY pest control Bangalore, pest control Bangalore, pest treatment guide, pest control service",
    content: [
      {
        heading: "DIY Pest Control",
        text: "DIY sprays may give temporary relief but usually do not remove hidden nests, eggs or breeding areas.",
      },
      {
        heading: "Professional Pest Control",
        text: "Professional pest control uses proper inspection, targeted treatment and safer application methods for better pest management.",
      },
    ],
    serviceLinks: [
      {
        label: "General Pest Control",
        path: "/general-pest-control",
      },
      {
        label: "Cockroach Control",
        path: "/cockroach-management-service",
      },
      {
        label: "Rodent Control",
        path: "/rodent-management-service",
      },
      {
        label: "Mosquito Control",
        path: "/mosquito-management-service",
      },
    ],
  },
  {
    title: "Monsoon Pest Control Tips for Bangalore Homes",
    slug: "monsoon-pest-control",
    category: "General Tips",
    date: "June 26, 2026",
    isoDate: "2026-06-26",
    readTime: "6 min read",
    image: blogImg3,
    desc: "Rainy season increases pest activity in Bangalore homes.",
    seoTitle:
      "Monsoon Pest Control Tips for Bangalore Homes | Acuity Pest Control",
    seoDescription:
      "Read monsoon pest control tips for Bangalore homes. Learn how to prevent mosquitoes, cockroaches, termites and rodents during rainy season.",
    keywords:
      "monsoon pest control Bangalore, rainy season pest control, mosquito control Bangalore, cockroach control Bangalore, termite prevention Bangalore",
    content: [
      {
        heading: "Why Pests Increase During Monsoon",
        text: "Moisture, stagnant water and damp corners attract mosquitoes, cockroaches, termites and rodents during rainy season.",
      },
      {
        heading: "Prevention Tips",
        text: "Keep drains clean, remove stagnant water, seal cracks, store food properly and schedule preventive pest control.",
      },
    ],
    serviceLinks: [
      {
        label: "Mosquito Control",
        path: "/mosquito-management-service",
      },
      {
        label: "Cockroach Control",
        path: "/cockroach-management-service",
      },
      {
        label: "Rodent Control",
        path: "/rodent-management-service",
      },
      {
        label: "General Pest Control",
        path: "/general-pest-control",
      },
    ],
  },
];

const getToc = (content) => {
  return content.map((section) => ({
    id: section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    label: section.heading,
  }));
};

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogData.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-4xl font-bold text-[#006f9f] mb-4">
            Blog Not Found
          </h1>

          <Link to="/blogs" className="text-[#008fc5] font-bold">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const tocItems = getToc(blog.content);

  const relatedBlogs = blogData
    .filter((item) => item.slug !== blog.slug)
    .slice(0, 3);

  const categories = ["Cockroaches", "Termites", "General Tips"];

  const blogSchema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `https://acuitypestcontrols.com/blogs/${blog.slug}#blogposting`,
      headline: blog.title,
      description: blog.desc,
      image: "https://acuitypestcontrols.com/logo.png",
      datePublished: blog.isoDate,
      dateModified: blog.isoDate,
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
        "@id": `https://acuitypestcontrols.com/blogs/${blog.slug}`,
      },
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
          name: blog.title,
          item: `https://acuitypestcontrols.com/blogs/${blog.slug}`,
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-white text-gray-800 overflow-hidden">
      <SEO
        title={blog.seoTitle}
        description={blog.seoDescription}
        keywords={blog.keywords}
        canonical={`https://acuitypestcontrols.com/blogs/${blog.slug}`}
        image="https://acuitypestcontrols.com/logo.png"
        schema={blogSchema}
      />

      {/* HERO */}
      <section className="relative h-[55vh] md:h-[110vh] flex items-center">
        <img
          src={blog.image}
          alt={`${blog.title} - Acuity Pest Control Bangalore`}
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
                {blog.category}
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-[#063b3f] mt-4 mb-5 leading-tight">
                {blog.title}
              </h1>

              <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-5">
                <span>📅 {blog.date}</span>
                <span>•</span>
                <span>⏱ {blog.readTime}</span>
              </div>

              <p className="text-gray-600 leading-8">{blog.desc}</p>
            </div>

            {/* Table of Contents */}
            {tocItems.length > 0 && (
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
            )}

            {/* Article content */}
            <article className="prose prose-lg max-w-none">
              {blog.content.map((section, index) => (
                <div
                  key={index}
                  className="mb-10 scroll-mt-20"
                  id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                >
                  <h2 className="text-3xl font-extrabold text-[#063b3f] mb-4">
                    {section.heading}
                  </h2>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    {section.text}
                  </p>
                </div>
              ))}

              {/* In-article CTA */}
              <div className="bg-[#f1fbff] border-l-4 border-[#008fc5] p-6 rounded-xl my-10">
                <h3 className="text-3xl md:text-4xl font-bold text-[#006f9f] mb-3">
                  Need Help with Pest Control?
                </h3>

                <p className="text-gray-700 leading-7">
                  Acuity Pest Control provides professional pest inspection and
                  treatment services for homes, apartments, offices and
                  commercial properties in Bangalore.{" "}
                  <Link
                    to="/contact"
                    className="text-[#008fc5] font-semibold hover:underline"
                  >
                    Book an inspection today
                  </Link>
                  .
                </p>
              </div>

              {/* Interlinks to services */}
              <div className="bg-white border border-green-100 rounded-2xl p-6 my-10">
                <h3 className="text-xl font-bold text-[#063b3f] mb-4">
                  🔗 Related Pest Control Services
                </h3>

                <div className="grid sm:grid-cols-2 gap-3">
                  {blog.serviceLinks.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="text-[#008fc5] font-semibold hover:underline"
                    >
                      {service.label} →
                    </Link>
                  ))}

                  <Link
                    to="/contact"
                    className="text-[#008fc5] font-semibold hover:underline"
                  >
                    Book Pest Inspection →
                  </Link>
                </div>
              </div>
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
                  apartments and businesses across Bangalore, including
                  cockroach, termite, bed bug, mosquito and rodent control.
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
                href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20pest%20control%20service."
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
                {relatedBlogs.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blogs/${post.slug}`}
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
                        {post.desc}
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
              <h3 className="text-4xl font-black mb-3">Need Pest Control?</h3>

              <p className="text-gray-200 text-sm leading-6 mb-5">
                Get professional pest inspection and treatment for your home or
                business anywhere in Bangalore.
              </p>

              <a
                href="tel:+919941229005"
                className="block w-full bg-green-600 hover:bg-green-700 text-center py-3.5 rounded-xl font-bold text-base mb-3 transition"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20pest%20control%20service."
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

            {/* Blogs by Category */}
            <div className="bg-[#f8fcfb] border border-green-100 rounded-3xl p-6 mb-8">
              <h4 className="font-black text-[#063b3f] text-lg mb-4">
                Blogs by Category
              </h4>

              {categories.map((cat) => (
                <div
                  key={cat}
                  id={cat.toLowerCase().replace(/\s/g, "-")}
                  className="mb-6 scroll-mt-40"
                >
                  <h5 className="font-black text-green-700 mb-2">{cat}</h5>

                  {blogData
                    .filter((post) => post.category === cat)
                    .map((post) => (
                      <Link
                        key={post.slug}
                        to={`/blogs/${post.slug}`}
                        className="block text-sm text-[#063b3f] font-semibold hover:text-green-700 mb-2"
                      >
                        {post.title}
                      </Link>
                    ))}
                </div>
              ))}
            </div>

            {/* Categories */}
            <div className="bg-[#f8fcfb] border border-green-100 rounded-3xl p-6 mb-8">
              <h4 className="font-black text-[#063b3f] text-lg mb-4">
                📂 Categories
              </h4>

              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    type="button"
                    key={cat}
                    onClick={() => {
                      const section = document.getElementById(
                        cat.toLowerCase().replace(/\s/g, "-"),
                      );

                      if (section) {
                        section.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                    className="bg-white border border-green-200 px-4 py-2 rounded-full text-sm font-semibold text-[#063b3f] hover:bg-green-50 transition"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Service Links */}
            <div className="bg-[#f8fcfb] border border-green-100 rounded-3xl p-6">
              <h4 className="font-black text-[#063b3f] text-lg mb-4">
                🛠 Popular Services
              </h4>

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

          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Acuity Pest Control provides professional pest control for homes,
            apartments, restaurants, offices and commercial spaces across
            Bangalore.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919941229005"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20pest%20control%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#063b3f] px-8 py-4 rounded-2xl font-bold transition hover:bg-gray-100"
            >
              WhatsApp Us
            </a>

            <Link
              to="/services"
              className="border border-white px-8 py-4 rounded-2xl font-bold transition hover:bg-white/10"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
