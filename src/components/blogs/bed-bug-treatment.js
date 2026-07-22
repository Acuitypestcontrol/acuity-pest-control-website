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
    // existing BlogPosting schema
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    // existing FAQ schema
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    // existing breadcrumb schema
  },

  // ADD THIS HERE
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.acuitypestcontrols.com/blogs/bed-bug-treatment#webpage",
    url: "https://www.acuitypestcontrols.com/blogs/bed-bug-treatment",
    name: "Bed Bug Treatment Guide in Bangalore",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [
        "h1",
        "#what-are-bed-bugs p",
        "#signs-of-infestation h2",
        "#treatment-process h2",
      ],
    },
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
      title: "Signs of Termite Infestation in Your Home",
      slug: "/blogs/signs-of-termite-infestation",
      excerpt:
        "Learn the early signs of termite activity, including mud tubes, hollow wood and damaged furniture.",
    },
    {
      title: "How to Get Rid of Cockroaches",
      slug: "/blogs/get-rid-of-cockroaches",
      excerpt:
        "Understand why cockroaches enter homes and how professional treatment helps control an infestation.",
    },
    {
      title: "Mosquito Prevention During Rainy Season",
      slug: "/blogs/mosquito-prevention-during-rainy-season",
      excerpt:
        "Protect your family from mosquitoes during Bangalore's rainy season with practical prevention tips.",
    },
    {
      title: "Why Regular Pest Control Is Important for Businesses",
      slug: "/blogs/why-regular-pest-control-is-important-for-businesses",
      excerpt:
        "Learn why offices, hotels, restaurants and commercial properties need scheduled pest management.",
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
        keywords="bed bug treatment Bangalore,
bed bug control Bangalore,
professional bed bug treatment,
bed bug removal services,
bed bug exterminator Bangalore,
bed bug infestation,
bed bug inspection,
mattress bed bugs,
hotel bed bug treatment,
PG bed bug treatment,
home bed bug control,
Acuity Pest Control Bangalore"
        canonical="https://www.acuitypestcontrols.com/blogs/bed-bug-treatment"
        image="https://www.acuitypestcontrols.com/images/bed-bug-control-bangalore.jpg"
        schema={bedBugBlogSchema}
      />

      {/* HERO */}
      <section className="relative h-[55vh] md:h-[110vh] flex items-center">
        <img
          src={bannerImage}
          alt="Bed bug treatment and identification guide in Bangalore"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* BLOG LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* MAIN CONTENT */}
          <main className="lg:w-2/3">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-8 text-sm text-gray-600 flex flex-wrap items-center gap-2"
            >
              <Link to="/" className="hover:text-green-700 hover:underline">
                Home
              </Link>

              <span>/</span>

              <Link
                to="/blogs"
                className="hover:text-green-700 hover:underline"
              >
                Blogs
              </Link>

              <span>/</span>

              <span className="text-[#063b3f] font-semibold">
                Bed Bug Treatment Guide
              </span>
            </nav>

            <header className="mb-10">
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
            </header>

            {/* Table of Contents */}
            <div className="bg-[#f8fcfb] border border-green-100 rounded-2xl p-6 mb-10">
              <p className="font-black text-[#063b3f] mb-3">
                📑 Table of Contents
              </p>

              <ul className="grid sm:grid-cols-2 gap-2 text-sm">
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
            <section id="what-are-bed-bugs" className="scroll-mt-28 mb-14">
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
            <section id="signs-of-infestation" className="scroll-mt-28 mb-14">
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

            {/* Internal Links Box */}
            <div className="mb-14 bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h3 className="text-xl font-black text-[#063b3f] mb-3">
                Not Sure Which Pest You Have?
              </h3>

              <p className="text-gray-700 leading-7">
                Compare bed bugs with other common household pests using our{" "}
                <Link
                  to="/pest-identification"
                  className="text-green-700 font-semibold hover:underline"
                >
                  pest identification guide
                </Link>
                . For confirmed infestations, explore our{" "}
                <Link
                  to="/bed-bug-treatment"
                  className="text-green-700 font-semibold hover:underline"
                >
                  professional bed bug treatment service in Bangalore
                </Link>
                .
              </p>
            </div>

            {/* Hiding Places */}
            <section id="hiding-places" className="scroll-mt-28 mb-14">
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
            <section id="why-serious" className="scroll-mt-28 mb-14">
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
            <section id="treatment-process" className="scroll-mt-28 mb-14">
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
            <section id="why-acuity" className="scroll-mt-28 mb-14">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">
                Why Acuity
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Why Choose Acuity Pest Control?
              </h2>

              <p className="text-gray-700 leading-8 mb-6">
                We provide professional{" "}
                <Link
                  to="/bed-bug-treatment"
                  className="text-green-700 font-semibold hover:underline"
                >
                  bed bug treatment in Bangalore
                </Link>{" "}
                for homes, apartments, PGs, hotels, hostels and commercial
                spaces. Customers dealing with multiple pest problems can also
                explore our{" "}
                <Link
                  to="/general-pest-control"
                  className="text-green-700 font-semibold hover:underline"
                >
                  general pest control service
                </Link>
                .
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
            <section id="faq" className="scroll-mt-28 mb-14">
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
            <section id="service-areas" className="scroll-mt-28 mb-6">
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

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  to="/bed-bug-treatment"
                  className="text-green-700 font-bold hover:underline"
                >
                  View Bed Bug Treatment Service →
                </Link>

                <Link
                  to="/contact"
                  className="text-green-700 font-bold hover:underline"
                >
                  Book a Pest Inspection →
                </Link>

                <Link
                  to="/blogs"
                  className="text-green-700 font-bold hover:underline"
                >
                  Read More Pest Control Blogs →
                </Link>
              </div>
            </section>

            {/* Author Bio */}
            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-black flex-shrink-0">
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

            {/* Related Posts */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                📖 You Might Also Like
              </h2>

              <div className="grid sm:grid-cols-2 gap-5">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    to={post.slug}
                    className="block bg-[#f8fcfb] border border-green-100 rounded-2xl p-5 hover:shadow-md hover:-translate-y-1 transition"
                  >
                    <h3 className="font-black text-[#063b3f] text-lg mb-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-6">
                      {post.excerpt}
                    </p>

                    <span className="text-green-700 font-semibold text-sm mt-3 inline-block">
                      Read More →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </main>

          {/* SIDEBAR */}
          <aside className="lg:w-1/3">
            <div className="lg:sticky lg:top-28">
              {/* CTA Card */}
              <div className="bg-[#063b3f] text-white rounded-3xl p-7 mb-8">
                <h2 className="text-3xl font-black mb-3">Need Help?</h2>

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

              {/* Popular Posts */}
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

              {/* Categories */}
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

              {/* Service Links */}
              <div className="bg-[#f8fcfb] border border-green-100 rounded-3xl p-6">
                <h2 className="font-black text-[#063b3f] text-lg mb-4">
                  🛠 Related Services
                </h2>

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
                    to="/rodent-control"
                    className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm"
                  >
                    Rodent Control
                  </Link>

                  <Link
                    to="/mosquito-management"
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
            Need Professional Bed Bug Treatment?
          </h2>

          <p className="text-gray-200 mb-8 max-w-2xl mx-auto leading-7">
            Get professional bed bug inspection and treatment support for homes,
            apartments, hotels, hostels and commercial properties anywhere in
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
