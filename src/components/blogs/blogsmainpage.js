import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import blogImg from "../../images/Australian Cockroach.jpg";
import blogImg1 from "../../images/americancockroch.jpg";
import blogImg2 from "../../images/Signs of Termite Infestation in Your Home.jpg";
import blogImg3 from "../../images/Professional Pest Control vs DIY.jpg";
import blogImg5 from "../../images/Bed Bug.png";
import blogImg6 from "../../images/Black Rat Roof Rat.png";
import blogImg7 from "../../images/mosquito.jpg";
import blogImg8 from "../../images/Top 10 Household Pests in Bangalore.png";
import blogImg9 from "../../images/How Often Should Pest Control Be Done.jpg";
import blogImg10 from "../../images/germanandamerica.webp";
import blogImg11 from "../../images/Termite Treatment Cost in Bangalore.jpg";
import blogImg12 from "../../images/How to Prevent Ant Infestation at Home.jpg";
import blogImg13 from "../../images/Why Regular Pest Control Is Important for Businesses.jpg";
import blogImg14 from "../../images/Why Cockroaches Enter Your Kitchen & How to Stop Them.jpg";
import blogImg15 from "../../images/images.jpg";

const PestBlogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  const categories = [
    "All",
    "Cockroaches",
    "Termites",
    "Rodents",
    "Mosquitoes",
    "Bed Bugs",
    "Ants",
    "General Tips",
  ];

  const blogs = [
    {
      title: "Ultimate Pest Control Guide for Bangalore Homes (2026)",
      slug: "/blogs/how-often-should-pest-control-be-done",
      category: "General Tips",
      date: "June 26, 2026",
      isoDate: "2026-06-26",
      readTime: "8 min read",
      desc: "Learn everything about professional pest control in Bangalore, common pests, treatment options and prevention tips.",
      image: blogImg,
      featured: true,
    },
    {
      title: "How to Get Rid of Cockroaches",
      slug: "/blogs/get-rid-of-cockroaches",
      category: "Cockroaches",
      date: "June 26, 2026",
      isoDate: "2026-06-26",
      readTime: "6 min read",
      desc: "Understand why cockroaches enter homes and how professional cockroach treatment helps remove them effectively.",
      image: blogImg1,
    },
    {
      title: "Signs of Termite Infestation in Your Home",
      slug: "/blogs/signs-of-termite-infestation",
      category: "Termites",
      date: "June 26, 2026",
      isoDate: "2026-06-26",
      readTime: "7 min read",
      desc: "Learn the early signs of termite damage, mud tubes, hollow wood and when to book termite inspection.",
      image: blogImg2,
    },
    {
      title: "Professional Pest Control vs DIY",
      slug: "/blogs/pest-control-vs-diy",
      category: "General Tips",
      date: "June 26, 2026",
      isoDate: "2026-06-26",
      readTime: "5 min read",
      desc: "Compare professional pest control and DIY pest treatment to understand which option is safer and more effective.",
      image: blogImg3,
    },

    {
      title: "Bed Bug Treatment Guide",
      slug: "/blogs/bed-bug-treatment",
      category: "Bed Bugs",
      date: "June 26, 2026",
      isoDate: "2026-06-26",
      readTime: "6 min read",
      desc: "Know the signs of bed bugs, causes of infestation and how professional treatment removes them from bedrooms.",
      image: blogImg5,
    },
    {
      title: "Rat Control Tips for Homes",
      slug: "/blogs/rat-control-tips-for-homes",
      category: "Rodents",
      date: "June 26, 2026",
      isoDate: "2026-06-26",
      readTime: "5 min read",
      desc: "Learn how rats enter homes, health risks caused by rodents and the best ways to prevent rodent infestation.",
      image: blogImg6,
    },
    {
      title: "Mosquito Prevention During Rainy Season",
      slug: "/blogs/mosquito-prevention-during-rainy-season",
      category: "Mosquitoes",
      date: "June 26, 2026",
      isoDate: "2026-06-26",
      readTime: "5 min read",
      desc: "Protect your family from mosquitoes during monsoon with effective prevention and professional mosquito control.",
      image: blogImg7,
    },
    {
      title: "Top 10 Household Pests in Bangalore",
      slug: "/blogs/top-10-household-pests-in-bangalore",
      category: "General Tips",
      date: "June 26, 2026",
      isoDate: "2026-06-26",
      readTime: "7 min read",
      desc: "Discover the most common pests found in Bangalore homes and how to identify them before the problem grows.",
      image: blogImg8,
    },
    {
      title: "How to Prevent Ant Infestation at Home",
      slug: "/blogs/how-to-prevent-ant-infestation-at-home",
      category: "Ants",
      date: "June 26, 2026",
      isoDate: "2026-06-26",
      readTime: "5 min read",
      desc: "Simple and effective ways to prevent ants from entering your home, kitchen and office.",
      image: blogImg12,
    },
    {
      title: "Termite Treatment Cost in Bangalore",
      slug: "/blogs/termite-treatment-cost-bangalore",
      category: "Termites",
      date: "April 6, 2026",
      isoDate: "2026-04-06",
      readTime: "7 min read",
      desc: "Know the average termite treatment cost in Bangalore and the factors that affect pricing for homes and businesses.",
      image: blogImg11,
    },
    {
      title: "German Cockroach vs American Cockroach",
      slug: "/blogs/german-cockroach-vs-american-cockroach",
      category: "Cockroaches",
      date: "Feb 10, 2026",
      isoDate: "2026-02-10",
      readTime: "6 min read",
      desc: "Learn the key differences between German and American cockroaches, including appearance, habitat and treatment methods.",
      image: blogImg10,
    },
    {
      title: "Pest Control Checklist for New Homes",
      slug: "/blogs/pest-control-checklist-for-new-homes",
      category: "General Tips",
      date: "Feb 2, 2026",
      isoDate: "2026-02-02",
      readTime: "6 min read",
      desc: "Moving into a new home? Follow this complete pest control checklist to keep your property safe and pest-free.",
      image: blogImg14,
    },
    {
      title: "How Often Should Pest Control Be Done?",
      slug: "/blogs/how-often-should-pest-control-be-done",
      category: "General Tips",
      date: "Jan 26, 2026",
      isoDate: "2026-01-26",
      readTime: "5 min read",
      desc: "Find out how frequently homes, apartments, offices and commercial spaces should schedule pest control service.",
      image: blogImg9,
    },
    {
      title: "Why Cockroaches Enter Your Kitchen & How to Stop Them",
      slug: "/blogs/why-cockroaches-enter-your-kitchen",
      category: "Cockroaches",
      date: "Jan 6, 2026",
      isoDate: "2026-01-06",
      readTime: "6 min read",
      desc: "Understand why cockroaches are attracted to kitchens and the best ways to control them.",
      image: blogImg15,
    },
    {
      title: "Why Regular Pest Control Is Important for Businesses",
      slug: "/blogs/why-regular-pest-control-is-important-for-businesses",
      category: "General Tips",
      date: "Dec 26, 2025",
      isoDate: "2025-12-26",
      readTime: "7 min read",
      desc: "Discover why offices, restaurants, hotels and commercial properties should schedule regular pest control services.",
      image: blogImg13,
    },
  ];

  const featuredBlog = blogs.find((blog) => blog.featured);

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      activeCategory === "All" || blog.category === activeCategory;

    const matchesSearch =
      blog.title.toLowerCase().includes(searchText.toLowerCase()) ||
      blog.desc.toLowerCase().includes(searchText.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchText.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const showFeaturedBlog =
    featuredBlog && activeCategory === "All" && searchText === "";

  const displayBlogs = showFeaturedBlog
    ? filteredBlogs.filter((blog) => !blog.featured)
    : filteredBlogs;

  const blogSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": "https://acuitypestcontrols.com/blogs#blog",
      name: "Acuity Pest Control Blogs",
      url: "https://acuitypestcontrols.com/blogs",
      description:
        "Expert pest control blogs, prevention tips and treatment guides from Acuity Pest Control Bangalore.",
      publisher: {
        "@type": "Organization",
        name: "Acuity Pest Control",
        url: "https://acuitypestcontrols.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://acuitypestcontrols.com/logo.png",
        },
      },
      blogPost: blogs.map((blog) => ({
        "@type": "BlogPosting",
        headline: blog.title,
        description: blog.desc,
        url: `https://acuitypestcontrols.com${blog.slug}`,
        datePublished: blog.isoDate,
        dateModified: blog.isoDate,
        author: {
          "@type": "Organization",
          name: "Acuity Pest Control",
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": "https://acuitypestcontrols.com/blogs#itemlist",
      name: "Pest Control Blog Articles",
      itemListElement: blogs.map((blog, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://acuitypestcontrols.com${blog.slug}`,
        name: blog.title,
      })),
    },
  ];

  return (
    <div className="w-full bg-white text-gray-800">
      <SEO
        title="Pest Control Blogs in Bangalore | Expert Pest Control Tips"
        description="Read expert pest control blogs from Acuity Pest Control Bangalore. Learn about termites, cockroaches, rodents, mosquitoes, bed bugs, ants and pest prevention tips."
        keywords="pest control blogs Bangalore, pest control tips Bangalore, cockroach control tips, termite treatment guide, rodent control guide, bed bug treatment blog, mosquito control tips, Acuity Pest Control"
        canonical="https://acuitypestcontrols.com/blogs"
        image="https://acuitypestcontrols.com/logo.png"
        schema={blogSchema}
      />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[#008fc5] to-[#005f85] py-20 md:py-28 px-4 text-white overflow-hidden md:pt-48 pt-40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold tracking-wide mb-6">
            📚 Acuity Pest Control Knowledge Center
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Latest Pest Control <br className="hidden md:block" />
            <span className="text-[#f9d56e]">Blogs & Tips</span>
          </h1>

          <p className="max-w-3xl mx-auto text-blue-50 text-lg leading-8">
            Learn expert pest prevention tips, pest identification, treatment
            methods and protection guides for homes, apartments, offices and
            commercial properties in Bangalore.
          </p>
        </div>
      </section>

      {/* FILTER & SEARCH */}
      <section className="py-8 px-4 border-b bg-white sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#008fc5] text-white shadow-md shadow-[#008fc5]/30"
                    : "bg-gray-100 text-gray-700 hover:bg-[#008fc5]/10 hover:text-[#008fc5]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#008fc5] focus:border-transparent transition"
            />

            <svg
              className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* FEATURED BLOG */}
      {showFeaturedBlog && (
        <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-[#006f9f] mb-8 flex items-center gap-3">
              <span className="inline-block w-1 h-8 bg-[#008fc5] rounded-full"></span>
              Featured Blog
            </h2>

            <div className="grid md:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow-xl border border-[#008fc5]/10 transition-transform hover:scale-[1.01] duration-300">
              <div className="h-80 md:h-auto overflow-hidden relative">
                <img
                  src={featuredBlog.image}
                  alt={`${featuredBlog.title} - Acuity Pest Control Blog`}
                  className="w-full h-full  transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute top-4 left-4 bg-[#008fc5] text-white text-xs font-bold uppercase px-3 py-1 rounded-full shadow-lg">
                  Featured
                </div>
              </div>

              <div className="p-8 flex flex-col justify-center">
                <span className="text-[#008fc5] font-bold uppercase text-sm tracking-wider mb-2">
                  {featuredBlog.category}
                </span>

                <h3 className="text-3xl font-extrabold text-gray-900 mb-3 leading-tight">
                  {featuredBlog.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {featuredBlog.desc}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {featuredBlog.date}
                  </span>

                  <span>•</span>

                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {featuredBlog.readTime}
                  </span>
                </div>

                <Link
                  to={featuredBlog.slug}
                  className="inline-flex items-center gap-2 bg-[#008fc5] hover:bg-[#006f9f] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 w-fit shadow-md hover:shadow-lg"
                >
                  Read Full Guide
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* BLOG GRID */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#006f9f] mb-10 flex items-center gap-3">
            <span className="inline-block w-1 h-8 bg-[#008fc5] rounded-full"></span>
            Latest Articles
            {displayBlogs.length > 0 && (
              <span className="text-sm font-normal text-gray-500 ml-2">
                ({displayBlogs.length} posts)
              </span>
            )}
          </h2>

          {displayBlogs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                No blogs match your filters.
              </p>

              <button
                type="button"
                onClick={() => {
                  setActiveCategory("All");
                  setSearchText("");
                }}
                className="mt-4 text-[#008fc5] font-semibold hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayBlogs.map((blog, index) => (
                <article
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group"
                >
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={blog.image}
                      alt={`${blog.title} - Acuity Pest Control Blog`}
                      loading="lazy"
                      className="w-full h-full  transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute top-3 left-3 bg-[#008fc5]/90 text-white text-xs font-bold uppercase px-3 py-1 rounded-full backdrop-blur-sm">
                      {blog.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-extrabold text-gray-900 mb-2 leading-snug line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {blog.desc}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 pt-4">
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {blog.date}
                      </span>

                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {blog.readTime}
                      </span>
                    </div>

                    <Link
                      to={blog.slug}
                      className="mt-4 inline-flex items-center gap-1 text-[#008fc5] font-bold hover:text-[#006f9f] transition group-hover:gap-2"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#006f9f] to-[#004d6e] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold mb-6">
            🛡️ Get Professional Help
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Need Expert Pest Control?
          </h2>

          <p className="text-lg leading-relaxed mb-8 text-blue-50 max-w-2xl mx-auto">
            Our trained technicians are ready to protect your home, apartment,
            office or commercial property from termites, cockroaches, rodents,
            mosquitoes, bed bugs and ants.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-[#006f9f] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              📞 Book Free Inspection
            </Link>

            <a
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20pest%20control%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PestBlogs;
