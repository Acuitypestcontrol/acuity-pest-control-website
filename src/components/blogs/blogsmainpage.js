import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaNewspaper,
  FaSearch,
  FaShieldAlt,
  FaWhatsapp,
} from "react-icons/fa";

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

/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -45,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 45,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const viewportSettings = {
  once: false,
  amount: 0.1,
};

/* =========================================================
   BLOG PAGE
========================================================= */

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
      slug: "/blogs/pest-control-bangalore-guide",
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
      title: "Monsoon Pest Control Tips for Bangalore Homes",
      slug: "/blogs/monsoon-pest-control",
      category: "General Tips",
      date: "June 20, 2026",
      isoDate: "2026-06-20",
      readTime: "6 min read",
      desc: "Learn how to prevent cockroaches, mosquitoes, ants, termites and rodents during Bangalore's rainy season.",
      image: blogImg7,
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
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": "https://www.acuitypestcontrols.com/blogs#itemlist",
      name: "Pest Control Blog Articles",
      itemListElement: blogs.map((blog, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://www.acuitypestcontrols.com${blog.slug}`,
        name: blog.title,
      })),
    },
  ];

  const resetFilters = () => {
    setActiveCategory("All");
    setSearchText("");
  };

  return (
    <div className="w-full overflow-x-hidden bg-white text-gray-800">
      <SEO
        title="Pest Control Blogs in Bangalore | Expert Pest Control Tips"
        description="Read expert pest control blogs from Acuity Pest Control Bangalore. Learn about termites, cockroaches, rodents, mosquitoes, bed bugs, ants and pest prevention tips."
        keywords="pest control blogs Bangalore, pest control tips Bangalore, cockroach control tips, termite treatment guide, rodent control guide, bed bug treatment blog, mosquito control tips, Acuity Pest Control"
        canonical="https://www.acuitypestcontrols.com/blogs"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={blogSchema}
      />

      <style>
        {`
          @keyframes blogGlow {
            0%, 100% {
              opacity: 0.25;
              transform: scale(1);
            }

            50% {
              opacity: 0.55;
              transform: scale(1.18);
            }
          }

          @keyframes blogFloat {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes blogShine {
            0% {
              left: -120%;
            }

            100% {
              left: 160%;
            }
          }

          .blog-glow {
            animation: blogGlow 6s ease-in-out infinite;
          }

          .blog-float {
            animation: blogFloat 5s ease-in-out infinite;
          }

          .blog-shine {
            position: relative;
            overflow: hidden;
          }

          .blog-shine::after {
            position: absolute;
            top: -80%;
            left: -120%;
            width: 20%;
            height: 260%;
            content: "";
            background: rgba(255, 255, 255, 0.25);
            transform: rotate(22deg);
            animation: blogShine 4.5s ease-in-out infinite;
          }

          .blog-grid-pattern {
            background-image:
              linear-gradient(
                rgba(6, 59, 63, 0.04) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(6, 59, 63, 0.04) 1px,
                transparent 1px
              );

            background-size: 38px 38px;
          }

          @media (prefers-reduced-motion: reduce) {
            .blog-glow,
            .blog-float,
            .blog-shine::after {
              animation: none;
            }
          }
        `}
      </style>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#031f21] via-[#075f59] to-[#008fc5] px-4 pb-20 pt-40 text-white md:pb-28 md:pt-52">
        <div className="blog-grid-pattern pointer-events-none absolute inset-0 opacity-20" />

        <div className="blog-glow pointer-events-none absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-green-300/25 blur-[120px]" />

        <div className="blog-glow pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-300/25 blur-[120px]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto max-w-7xl text-center"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold tracking-wide shadow-xl backdrop-blur-xl">
            <FaNewspaper />
            📚 Acuity Pest Control Knowledge Center
          </span>

          <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Latest Pest Control
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-green-300 to-[#f9d56e] bg-clip-text text-transparent">
              Blogs & Tips
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-blue-50 sm:text-lg">
            Learn expert pest prevention tips, pest identification, treatment
            methods and protection guides for homes, apartments, offices and
            commercial properties in Bangalore.
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mt-9 flex flex-wrap justify-center gap-3 md:gap-4"
          >
            {[
              `📚 ${blogs.length} Expert Articles`,
              "🏠 Bangalore Focused",
              "🛡️ Professional Advice",
            ].map((item) => (
              <motion.span
                key={item}
                variants={scaleIn}
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold shadow-lg backdrop-blur-xl"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* =====================================================
          FILTER AND SEARCH
      ====================================================== */}

      <section className="sticky top-0 z-30 border-b border-green-100 bg-white/95 px-4 py-5 shadow-[0_10px_35px_rgba(6,59,63,0.08)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
            {categories.map((category) => (
              <motion.button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className={`relative rounded-full px-4 py-2.5 text-xs font-bold transition-all duration-300 sm:text-sm ${
                  activeCategory === category
                    ? "text-white shadow-[0_10px_30px_rgba(6,59,63,0.25)]"
                    : "border border-gray-100 bg-gray-50 text-gray-700 hover:border-green-200 hover:bg-green-50 hover:text-green-700"
                }`}
              >
                {activeCategory === category && (
                  <motion.span
                    layoutId="activeBlogCategory"
                    className="absolute inset-0 -z-10 rounded-full bg-[#063b3f]"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 28,
                    }}
                  />
                )}

                {category}
              </motion.button>
            ))}
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:w-80">
            <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search blogs..."
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              className="w-full rounded-full border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED BLOG
      ====================================================== */}

      <AnimatePresence>
        {showFeaturedBlog && featuredBlog && (
          <motion.section
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="blog-grid-pattern relative overflow-hidden bg-gradient-to-b from-white to-[#f8fcfb] px-4 py-16 md:py-24"
          >
            <div className="blog-glow pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-green-100/80 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                className="mb-9 flex items-center gap-4"
              >
                <span className="h-10 w-1.5 rounded-full bg-green-600" />

                <div>
                  <span className="text-xs font-black uppercase tracking-[3px] text-green-700">
                    Recommended Reading
                  </span>

                  <h2 className="mt-1 text-3xl font-black text-[#063b3f]">
                    Featured Blog
                  </h2>
                </div>
              </motion.div>

              <motion.article
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                whileHover={{
                  y: -6,
                }}
                className="group grid overflow-hidden rounded-[36px] border border-green-100 bg-white shadow-[0_30px_90px_rgba(6,59,63,0.13)] md:grid-cols-2"
              >
                <motion.div
                  variants={fadeLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                  className="relative min-h-[320px] overflow-hidden md:min-h-[480px]"
                >
                  <img
                    src={featuredBlog.image}
                    alt={`${featuredBlog.title} | Acuity Pest Controls`}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="h-full w-full   transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#031f21]/60 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#063b3f]/85 px-4 py-2 text-xs font-black uppercase tracking-wider text-white shadow-lg backdrop-blur-xl">
                    Featured
                  </span>
                </motion.div>

                <motion.div
                  variants={fadeRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                  className="relative flex flex-col justify-center p-7 sm:p-9 md:p-12"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-green-100/70 blur-[70px]" />

                  <div className="relative">
                    <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-black uppercase tracking-[2px] text-green-700">
                      {featuredBlog.category}
                    </span>

                    <h3 className="mt-5 text-3xl font-black leading-tight text-[#063b3f] md:text-4xl">
                      {featuredBlog.title}
                    </h3>

                    <p className="mt-5 leading-8 text-gray-600">
                      {featuredBlog.desc}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="inline-flex items-center gap-2">
                        <FaCalendarAlt className="text-green-600" />

                        {featuredBlog.date}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-gray-400" />

                      <span className="inline-flex items-center gap-2">
                        <FaClock className="text-green-600" />

                        {featuredBlog.readTime}
                      </span>
                    </div>

                    <motion.div
                      whileHover={{
                        y: -3,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      className="mt-8 w-fit"
                    >
                      <Link
                        to={featuredBlog.slug}
                        className="blog-shine inline-flex items-center gap-3 rounded-full bg-[#063b3f] px-7 py-4 font-bold text-white shadow-xl transition hover:bg-[#075d57]"
                      >
                        Read Full Guide
                        <FaArrowRight size={13} />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.article>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* =====================================================
          BLOG GRID
      ====================================================== */}

      <section className="blog-grid-pattern relative overflow-hidden bg-[#f8fcfb] px-4 py-16 md:py-24">
        <div className="blog-glow pointer-events-none absolute -left-40 top-0 h-[430px] w-[430px] rounded-full bg-green-100/80 blur-[120px]" />

        <div className="blog-glow pointer-events-none absolute -right-40 bottom-0 h-[430px] w-[430px] rounded-full bg-blue-100/70 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mb-11 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
          >
            <div className="flex items-center gap-4">
              <span className="h-12 w-1.5 rounded-full bg-green-600" />

              <div>
                <span className="text-xs font-black uppercase tracking-[3px] text-green-700">
                  Pest Control Knowledge
                </span>

                <h2 className="mt-1 text-3xl font-black text-[#063b3f] md:text-4xl">
                  Latest Articles
                </h2>
              </div>
            </div>

            {displayBlogs.length > 0 && (
              <span className="w-fit rounded-full border border-green-100 bg-white px-4 py-2 text-sm font-semibold text-gray-500 shadow-sm">
                {displayBlogs.length} posts
              </span>
            )}
          </motion.div>

          <AnimatePresence mode="wait">
            {displayBlogs.length === 0 ? (
              <motion.div
                key="no-blogs"
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                className="rounded-[32px] border border-green-100 bg-white px-6 py-20 text-center shadow-[0_20px_60px_rgba(6,59,63,0.08)]"
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-2xl text-green-700">
                  <FaSearch />
                </span>

                <p className="mt-5 text-lg font-semibold text-gray-500">
                  No blogs match your filters.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-5 rounded-full bg-[#063b3f] px-7 py-3 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#075d57]"
                >
                  Reset filters
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={`${activeCategory}-${searchText}`}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
              >
                {displayBlogs.map((blog, index) => (
                  <motion.article
                    key={`${blog.title}-${index}`}
                    initial={{
                      opacity: 0,
                      y: 35,
                      scale: 0.96,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      y: -10,
                    }}
                    className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-green-100 bg-white shadow-[0_18px_55px_rgba(6,59,63,0.09)] transition hover:border-green-300 hover:shadow-[0_28px_80px_rgba(6,59,63,0.16)]"
                  >
                    <div className="relative h-60 overflow-hidden bg-gray-100">
                      <img
                        src={blog.image}
                        alt={`${blog.title} | Acuity Pest Controls Bangalore`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full   transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#031f21]/65 via-transparent to-transparent" />

                      <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#063b3f]/85 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-white shadow-lg backdrop-blur-xl">
                        {blog.category}
                      </span>

                      <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/15 text-xs font-black text-white backdrop-blur-xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="line-clamp-2 text-xl font-black leading-snug text-[#063b3f]">
                        {blog.title}
                      </h3>

                      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-7 text-gray-600">
                        {blog.desc}
                      </p>

                      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-green-100 pt-5 text-xs text-gray-500">
                        <span className="inline-flex items-center gap-2">
                          <FaCalendarAlt className="text-green-600" />

                          {blog.date}
                        </span>

                        <span className="inline-flex items-center gap-2">
                          <FaClock className="text-green-600" />

                          {blog.readTime}
                        </span>
                      </div>

                      <Link
                        to={blog.slug}
                        className="group/link mt-5 inline-flex w-fit items-center gap-2 font-black text-green-700 transition hover:text-[#063b3f]"
                      >
                        Read More
                        <FaArrowRight
                          size={12}
                          className="transition group-hover/link:translate-x-1"
                        />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      {/* =====================================================
    SEO CONTENT + SERVICE INTERNAL LINKS
===================================================== */}

      <section className="blog-grid-pattern relative overflow-hidden bg-white px-4 py-16 md:py-24">
        <div className="blog-glow pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-green-100/70 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="overflow-hidden rounded-[34px] border border-green-100 bg-gradient-to-br from-[#f8fcfb] to-white p-6 shadow-[0_25px_80px_rgba(6,59,63,0.10)] sm:p-9 md:p-12"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-5 py-2 text-xs font-black uppercase tracking-[3px] text-green-700 shadow-sm">
              <FaShieldAlt />
              Pest Control Resources
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight text-[#063b3f] md:text-5xl">
              Expert Pest Control Tips for Bangalore Homes and Businesses
            </h2>

            <p className="mt-6 leading-8 text-gray-700">
              The Acuity Pest Controls knowledge centre provides practical
              information about common pests, early infestation signs,
              prevention methods and professional treatment options. Our
              Bangalore-focused articles help homeowners, apartment residents,
              facility managers and business owners understand when a pest
              problem can be managed through prevention and when professional
              treatment is required.
            </p>

            <p className="mt-5 leading-8 text-gray-700">
              You can read our guides to identify pest activity and then explore
              the related professional service. For complete protection against
              multiple pests, visit our{" "}
              <Link
                to="/general-pest-control"
                className="font-black text-green-700 hover:underline"
              >
                general pest control service in Bangalore
              </Link>
              . You can also view all available treatments on our{" "}
              <Link
                to="/services"
                className="font-black text-green-700 hover:underline"
              >
                pest control services page
              </Link>
              .
            </p>

            <h3 className="mt-10 text-2xl font-black text-[#063b3f]">
              Explore Pest Control Guides and Related Services
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-[24px] border border-green-100 bg-white p-5 shadow-sm">
                <h4 className="text-lg font-black text-[#063b3f]">
                  Cockroach Control Guides
                </h4>

                <p className="mt-2 text-sm leading-7 text-gray-600">
                  Learn why cockroaches enter kitchens, how to identify
                  different cockroach species and how professional treatment
                  controls an infestation.
                </p>

                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    to="/blogs/get-rid-of-cockroaches"
                    className="font-bold text-green-700 hover:underline"
                  >
                    How to Get Rid of Cockroaches
                  </Link>

                  <Link
                    to="/blogs/german-cockroach-vs-american-cockroach"
                    className="font-bold text-green-700 hover:underline"
                  >
                    German vs American Cockroach
                  </Link>

                  <Link
                    to="/cockroach-management-service"
                    className="inline-flex items-center gap-2 font-black text-[#063b3f] hover:text-green-700"
                  >
                    Cockroach control in Bangalore
                    <FaArrowRight size={11} />
                  </Link>
                </div>
              </div>

              <div className="rounded-[24px] border border-green-100 bg-white p-5 shadow-sm">
                <h4 className="text-lg font-black text-[#063b3f]">
                  Termite Treatment Guides
                </h4>

                <p className="mt-2 text-sm leading-7 text-gray-600">
                  Understand termite warning signs, treatment costs and
                  preventive options for new and existing buildings.
                </p>

                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    to="/blogs/signs-of-termite-infestation"
                    className="font-bold text-green-700 hover:underline"
                  >
                    Signs of Termite Infestation
                  </Link>

                  <Link
                    to="/blogs/termite-treatment-cost-bangalore"
                    className="font-bold text-green-700 hover:underline"
                  >
                    Termite Treatment Cost in Bangalore
                  </Link>

                  <Link
                    to="/anti-termite-treatment"
                    className="inline-flex items-center gap-2 font-black text-[#063b3f] hover:text-green-700"
                  >
                    Anti-termite treatment in Bangalore
                    <FaArrowRight size={11} />
                  </Link>
                </div>
              </div>

              <div className="rounded-[24px] border border-green-100 bg-white p-5 shadow-sm">
                <h4 className="text-lg font-black text-[#063b3f]">
                  Bed Bug Treatment Guides
                </h4>

                <p className="mt-2 text-sm leading-7 text-gray-600">
                  Identify bed bug activity and learn why professional
                  inspection and targeted treatment are important.
                </p>

                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    to="/blogs/bed-bug-treatment"
                    className="font-bold text-green-700 hover:underline"
                  >
                    Bed Bug Treatment Guide
                  </Link>

                  <Link
                    to="/bed-bug-treatment"
                    className="inline-flex items-center gap-2 font-black text-[#063b3f] hover:text-green-700"
                  >
                    Bed bug treatment in Bangalore
                    <FaArrowRight size={11} />
                  </Link>
                </div>
              </div>

              <div className="rounded-[24px] border border-green-100 bg-white p-5 shadow-sm">
                <h4 className="text-lg font-black text-[#063b3f]">
                  Rodent Control Guides
                </h4>

                <p className="mt-2 text-sm leading-7 text-gray-600">
                  Learn how rats and mice enter properties, the risks they
                  create and how to prevent recurring rodent activity.
                </p>

                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    to="/blogs/rat-control-tips-for-homes"
                    className="font-bold text-green-700 hover:underline"
                  >
                    Rat Control Tips for Homes
                  </Link>

                  <Link
                    to="/rodent-management-service"
                    className="inline-flex items-center gap-2 font-black text-[#063b3f] hover:text-green-700"
                  >
                    Rodent control in Bangalore
                    <FaArrowRight size={11} />
                  </Link>
                </div>
              </div>

              <div className="rounded-[24px] border border-green-100 bg-white p-5 shadow-sm">
                <h4 className="text-lg font-black text-[#063b3f]">
                  Mosquito Prevention Guides
                </h4>

                <p className="mt-2 text-sm leading-7 text-gray-600">
                  Find practical mosquito prevention advice for Bangalore’s
                  rainy season and learn how to reduce breeding areas.
                </p>

                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    to="/blogs/mosquito-prevention-during-rainy-season"
                    className="font-bold text-green-700 hover:underline"
                  >
                    Mosquito Prevention During Rainy Season
                  </Link>

                  <Link
                    to="/mosquito-management-service"
                    className="inline-flex items-center gap-2 font-black text-[#063b3f] hover:text-green-700"
                  >
                    Mosquito control in Bangalore
                    <FaArrowRight size={11} />
                  </Link>
                </div>
              </div>

              <div className="rounded-[24px] border border-green-100 bg-white p-5 shadow-sm">
                <h4 className="text-lg font-black text-[#063b3f]">
                  Ant Prevention Guides
                </h4>

                <p className="mt-2 text-sm leading-7 text-gray-600">
                  Learn how food, moisture and entry points attract ants into
                  kitchens, homes and commercial spaces.
                </p>

                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    to="/blogs/how-to-prevent-ant-infestation-at-home"
                    className="font-bold text-green-700 hover:underline"
                  >
                    How to Prevent Ant Infestation
                  </Link>

                  <Link
                    to="/ant-control-treatment"
                    className="inline-flex items-center gap-2 font-black text-[#063b3f] hover:text-green-700"
                  >
                    Ant control treatment in Bangalore
                    <FaArrowRight size={11} />
                  </Link>
                </div>
              </div>
            </div>

            <h3 className="mt-12 text-2xl font-black text-[#063b3f]">
              Pest Control for Commercial Properties
            </h3>

            <p className="mt-4 leading-8 text-gray-700">
              Businesses require regular inspections and preventive pest
              management to protect hygiene, inventory, employees and customers.
              Read our{" "}
              <Link
                to="/blogs/why-regular-pest-control-is-important-for-businesses"
                className="font-black text-green-700 hover:underline"
              >
                commercial pest control guide
              </Link>{" "}
              and explore services designed for different business environments.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                {
                  label: "Office Pest Control",
                  path: "/office-pest-control",
                },
                {
                  label: "Hotel & Hospital Pest Control",
                  path: "/hotel-hospital-pest-control",
                },
                {
                  label: "Warehouse Pest Management",
                  path: "/warehouse-pest-management",
                },
                {
                  label: "School & College Pest Control",
                  path: "/educational-institution-pest-control",
                },
                {
                  label: "Apartment Common Area Treatment",
                  path: "/common-area-treatment-residential-complex",
                },
                {
                  label: "Disinfection Services",
                  path: "/disinfection-services",
                },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="rounded-full border border-green-200 bg-white px-5 py-3 text-sm font-bold text-green-700 transition hover:bg-green-600 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3 border-t border-green-100 pt-8">
              <Link
                to="/pest-identification"
                className="rounded-full bg-[#063b3f] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#075d57]"
              >
                Identify a Pest
              </Link>

              <Link
                to="/about"
                className="rounded-full border border-green-200 bg-white px-6 py-3 text-sm font-bold text-green-700 transition hover:bg-green-50"
              >
                About Acuity Pest Controls
              </Link>

              <Link
                to="/contact"
                className="rounded-full border border-green-200 bg-white px-6 py-3 text-sm font-bold text-green-700 transition hover:bg-green-50"
              >
                Book a Pest Inspection
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#031f21] via-[#075d57] to-[#008fc5] px-4 py-20 text-center text-white md:py-28">
        <div className="blog-grid-pattern pointer-events-none absolute inset-0 opacity-20" />

        <div className="blog-glow pointer-events-none absolute -left-36 top-0 h-96 w-96 rounded-full bg-green-300/25 blur-[110px]" />

        <div className="blog-glow pointer-events-none absolute -right-36 bottom-0 h-96 w-96 rounded-full bg-blue-300/25 blur-[110px]" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="relative z-10 mx-auto max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold shadow-lg backdrop-blur-xl">
            <FaShieldAlt />
            🛡️ Get Professional Help
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight md:text-5xl">
            Need Expert Pest Control?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-blue-50 sm:text-lg">
            Our trained technicians are ready to protect your home, apartment,
            office or commercial property from termites, cockroaches, rodents,
            mosquitoes, bed bugs and ants.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <motion.div
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.96,
              }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-[#063b3f] shadow-xl transition hover:bg-green-50"
              >
                📞 Book Free Inspection
                <FaArrowRight size={12} />
              </Link>
            </motion.div>

            <motion.a
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Control,%20I%20need%20pest%20control%20service."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="blog-shine inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 font-bold text-white shadow-xl transition hover:bg-green-400"
            >
              <FaWhatsapp size={19} />
              💬 WhatsApp Us
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default PestBlogs;
