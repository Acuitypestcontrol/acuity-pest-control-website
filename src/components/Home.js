import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/seo/seo";

import bannerImage from "../images/homebanner (1).jpg";
import bannerImage1 from "../images/protect-removebg-preview.png";

const locations = [
  "JP Nagar",
  "Jayanagar",
  "Banashankari",
  "Kanakapura Road",
  "Bannerghatta Road",
  "BTM Layout",
  "HSR Layout",
  "Koramangala",
  "Electronic City",
  "Whitefield",
  "Marathahalli",
  "Indiranagar",
  "KR Puram",
  "Sarjapur Road",
  "Yelachenahalli",
];

const formServices = [
  "General Pest Control",
  "Cockroach Control",
  "Termite Control",
  "Anti-Termite Treatment",
  "Pre Construction Termite Treatment",
  "Post Construction Termite Treatment",
  "Bed Bug Treatment",
  "Rodent Control",
  "Mosquito Control",
  "Ant Control",
  "Lizard Treatment",
  "Wood Borer Treatment",
  "Disinfection Services",
  "Pest Control for Hotels",
  "Pest Control for Hospitals",
  "Warehouse Pest Management",
  "Office Pest Control",
  "IT Campus Pest Control",
  "School & College Pest Control",
  "Residential Apartment Pest Control",
  "Commercial Pest Control",
];

const serviceCards = [
  {
    icon: "🪳",
    title: "Cockroach Control",
    description: "For kitchens, bathrooms and restaurants",
    link: "/cockroach-management-service",
  },
  {
    icon: "🐜",
    title: "Termite Control",
    description: "Protect wood, walls and furniture",
    link: "/anti-termite-treatment",
  },
  {
    icon: "🐭",
    title: "Rodent Control",
    description: "Rat and mouse control solutions",
    link: "/rodent-management-service",
  },
  {
    icon: "🦟",
    title: "Mosquito Control",
    description: "Indoor and outdoor mosquito treatment",
    link: "/mosquito-management-service",
  },
  {
    icon: "🛏️",
    title: "Bed Bug Treatment",
    description: "Treatment for homes, hotels and bedrooms",
    link: "/bed-bug-treatment",
  },
  {
    icon: "🏢",
    title: "Commercial Pest Control",
    description: "For offices, hospitals and industries",
    link: "/office-pest-control",
  },
];

const testimonials = [
  {
    name: "Nirmala Shah",
    area: "JP Nagar, Bengaluru",
    text: "Acuity Pest Controls did a professional termite treatment. The team was on time and explained everything clearly.",
  },
  {
    name: "Ravi Kumar",
    area: "Whitefield, Bengaluru",
    text: "Our cockroach problem was solved quickly. The work was clean and we received good support from the team.",
  },
  {
    name: "Sneha Reddy",
    area: "Electronic City, Bengaluru",
    text: "Good mosquito treatment service. The technicians were polite and the service was affordable.",
  },
];

const faqItems = [
  {
    question: "Which pest control services do you provide in Bangalore?",
    answer:
      "We provide cockroach control, termite treatment, bed bug treatment, rodent control, mosquito control, ant control, lizard treatment, wood borer treatment and commercial pest control services.",
  },
  {
    question: "What safety guidance do you provide for families and pets?",
    answer:
      "We use professional treatment methods selected for the pest problem and property type. Our technicians provide the required safety instructions before and after treatment.",
  },
  {
    question:
      "Do you provide pest control for offices and commercial properties?",
    answer:
      "Yes, we provide pest management for offices, hotels, hospitals, warehouses, restaurants, schools, apartments and industries.",
  },
  {
    question: "How can I book a pest control service?",
    answer:
      "You can call us or send a WhatsApp enquiry. Our team will contact you and suggest the right treatment.",
  },
  {
    question: "Do you provide same-day pest control service?",
    answer:
      "Based on technician availability and location, we try to provide quick and same-day support across Bangalore.",
  },
];

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "PestControl",
    "@id": "https://www.acuitypestcontrols.com/#business",
    name: "Acuity Pest Controls",
    url: "https://www.acuitypestcontrols.com/",
    logo: "https://www.acuitypestcontrols.com/logo.png",
    image: "https://www.acuitypestcontrols.com/logo.png",
    description:
      "Acuity Pest Controls provides professional pest control services in Bangalore for homes, apartments, offices, restaurants, hotels, hospitals, warehouses and industries.",
    telephone: "+919941229005",
    email: "info@acuitypestcontrols.in",
    priceRange: "₹₹",

    hasMap:
      "https://www.google.com/maps?q=1st+Floor,+KVO-08,+No-28%2F2,+Near+Sun+Jupiter+School,+JP+Nagar+6th+Phase,+Yelachenahalli,+Kumaraswamy+Layout,+Bengaluru,+Karnataka+560078&output=embed",

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "1st Floor, KVO-08, No-28/2, Near Sun Jupiter School, JP Nagar 6th Phase, Yelachenahalli, Kumaraswamy Layout",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560078",
      addressCountry: "IN",
    },

    areaServed: locations.map((location) => ({
      "@type": "Place",
      name: `${location}, Bengaluru`,
    })),

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919941229005",
      contactType: "customer service",
      areaServed: "IN-KA",
      availableLanguage: ["English", "Kannada", "Hindi"],
    },

    makesOffer: serviceCards.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: `${service.title} Service in Bangalore`,
      },
    })),
  },

  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.acuitypestcontrols.com/#website",
    url: "https://www.acuitypestcontrols.com/",
    name: "Acuity Pest Controls",
    description:
      "Professional pest control services in Bangalore for homes, apartments, offices and commercial properties.",
    publisher: {
      "@id": "https://www.acuitypestcontrols.com/#business",
    },
  },

  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

const Home = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceOpen, setServiceOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTestimonial((previous) => (previous + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const toggleService = (serviceName) => {
    setSelectedServices((previous) =>
      previous.includes(serviceName)
        ? previous.filter((service) => service !== serviceName)
        : [...previous, serviceName],
    );
  };

  const handleWhatsApp = (event) => {
    event.preventDefault();

    const cleanName = name.trim();
    const cleanPhone = phone.replace(/\D/g, "");

    if (!cleanName) {
      window.alert("Please enter your full name.");
      return;
    }

    if (cleanPhone.length !== 10) {
      window.alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const selectedServiceText =
      selectedServices.length > 0
        ? selectedServices.join(", ")
        : "Not selected";

    const message = `*New Pest Control Enquiry*

👤 Name: ${cleanName}
📞 Phone: ${cleanPhone}
🐜 Services Required: ${selectedServiceText}

Please contact me regarding pest control service.`;

    const whatsappUrl = `https://wa.me/919941229005?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <SEO
        title="Pest Control Services in Bangalore | Acuity Pest Controls"
        description="Looking for professional pest control services in Bangalore? Acuity Pest Controls offers termite treatment, cockroach control, bed bug treatment, rodent control, mosquito control and commercial pest management. Book an inspection today."
        keywords="pest control services in Bangalore, pest control Bangalore, cockroach control Bangalore, termite control Bangalore, bed bug control Bangalore, mosquito control Bangalore, rodent control Bangalore, commercial pest control Bangalore"
        canonical="https://www.acuitypestcontrols.com/"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={homeSchema}
      />

      {/* BANNER */}

      <section className="relative h-[40vh] md:h-[110vh]">
        <img
          src={bannerImage}
          alt="Professional pest control services in Bangalore by Acuity Pest Controls"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
          decoding="async"
        />

        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* HERO AND INSPECTION FORM */}

      <section
        id="inspection"
        className="relative overflow-hidden bg-gradient-to-br from-[#f8fcfb] to-white py-12 sm:py-20 md:py-28"
      >
        <div className="absolute right-0 top-0 hidden h-full w-[45%] rounded-bl-[120px] bg-gradient-to-l from-[#0f8f55]/10 to-transparent lg:block" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-xs font-bold text-green-700 sm:text-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Trusted by 5,000+ Customers
            </span>

            <h1 className="text-3xl font-black leading-tight text-[#063b3f] sm:text-4xl md:text-5xl">
              Professional Pest Control Services in Bangalore
              <span className="mt-1 block bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                for Homes and Businesses
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              Acuity Pest Controls provides professional and long-lasting pest
              control services in Bangalore for homes, apartments, offices,
              restaurants, warehouses and industries.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3 sm:mt-10 sm:gap-4">
              {[
                ["19+", "Years"],
                ["15K+", "Treatments"],
                ["All Days", "Support"],
              ].map(([number, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-gray-100 bg-white p-3 text-center shadow-sm sm:p-4"
                >
                  <p className="text-xl font-black text-green-700 sm:text-3xl">
                    {number}
                  </p>

                  <p className="text-[11px] text-gray-500 sm:text-sm">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[24px] border border-green-100 bg-white p-5 shadow-2xl sm:rounded-[35px] sm:p-8">
              <h2 className="text-xl font-black text-[#063b3f] sm:text-3xl">
                Book an Inspection
              </h2>

              <p className="mb-4 mt-1 text-sm text-gray-600 sm:mb-6">
                Our team will contact you shortly.
              </p>

              <form className="space-y-4" onSubmit={handleWhatsApp}>
                <div>
                  <label htmlFor="customer-name" className="sr-only">
                    Your full name
                  </label>

                  <input
                    id="customer-name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your Full Name"
                    autoComplete="name"
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 sm:p-4"
                  />
                </div>

                <div>
                  <label htmlFor="customer-phone" className="sr-only">
                    Phone number
                  </label>

                  <input
                    id="customer-phone"
                    type="tel"
                    inputMode="numeric"
                    value={phone}
                    onChange={(event) =>
                      setPhone(
                        event.target.value.replace(/\D/g, "").slice(0, 10),
                      )
                    }
                    placeholder="Phone Number"
                    autoComplete="tel"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 sm:p-4"
                  />
                </div>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setServiceOpen((previous) => !previous)}
                    aria-expanded={serviceOpen}
                    aria-controls="service-options"
                    className="flex w-full items-center justify-between rounded-2xl border border-gray-200 bg-white p-3 text-left text-sm focus:outline-none focus:ring-2 focus:ring-green-500 sm:p-4"
                  >
                    <span
                      className={
                        selectedServices.length
                          ? "text-gray-800"
                          : "text-gray-400"
                      }
                    >
                      {selectedServices.length > 0
                        ? `${selectedServices.length} Service${
                            selectedServices.length > 1 ? "s" : ""
                          } Selected`
                        : "Select Services"}
                    </span>

                    <span className="text-gray-500">
                      {serviceOpen ? "▲" : "▼"}
                    </span>
                  </button>

                  {serviceOpen && (
                    <div
                      id="service-options"
                      className="absolute z-50 mt-2 max-h-64 w-full overflow-y-auto rounded-2xl border border-gray-200 bg-white p-3 shadow-2xl sm:p-4"
                    >
                      {formServices.map((service) => (
                        <label
                          key={service}
                          className="flex cursor-pointer items-center gap-3 py-2 text-sm hover:text-green-700"
                        >
                          <input
                            type="checkbox"
                            checked={selectedServices.includes(service)}
                            onChange={() => toggleService(service)}
                            className="h-4 w-4 shrink-0 accent-green-600"
                          />

                          <span>{service}</span>
                        </label>
                      ))}

                      <button
                        type="button"
                        onClick={() => setServiceOpen(false)}
                        className="mt-4 w-full rounded-xl bg-green-600 py-3 text-sm font-bold text-white hover:bg-green-700"
                      >
                        Done
                      </button>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-green-600 py-3 text-sm font-bold text-white shadow-lg shadow-green-600/30 transition hover:scale-[1.02] hover:bg-green-700 sm:py-4 sm:text-base"
                >
                  Get Free Quote via WhatsApp
                </button>
              </form>

              <div className="mt-4 flex flex-wrap gap-3 text-xs text-gray-500 sm:mt-6 sm:text-sm">
                <span>✅ No spam</span>
                <span>✅ 100% free</span>
                <span>✅ Quick response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section id="about" className="py-12 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
          <div className="relative order-2 flex justify-center lg:order-1">
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-white shadow-2xl sm:h-72 sm:w-72 md:h-96 md:w-96">
              <img
                src={bannerImage1}
                alt="Acuity Pest Controls technician protecting a home from pests"
                className="h-full w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="absolute -right-3 -top-3 flex h-16 w-16 items-center justify-center rounded-full border-4 border-green-100 bg-white text-4xl shadow-xl sm:-right-6 sm:-top-6 sm:h-24 sm:w-24">
              🪳
            </div>

            <div className="absolute -bottom-3 -left-3 flex h-16 w-16 items-center justify-center rounded-full border-4 border-green-100 bg-white text-4xl shadow-xl sm:-bottom-6 sm:-left-6 sm:h-24 sm:w-24">
              🦟
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center rounded-full bg-green-600 px-4 py-1.5 text-xs font-bold text-white sm:text-sm">
              About Us
            </span>

            <h2 className="mb-4 mt-3 text-4xl font-black leading-tight text-[#063b3f] sm:text-4xl md:text-5xl">
              Protecting Homes, Offices & Businesses From Pests
            </h2>

            <p className="mb-3 text-sm leading-7 text-gray-700 sm:text-base">
              Acuity Pest Controls provides professional pest control services
              across Bangalore for homes, apartments, offices, restaurants,
              warehouses and commercial properties.
            </p>

            <p className="mb-6 text-sm leading-7 text-gray-700 sm:text-base">
              Our trained technicians use professional treatment methods to
              eliminate cockroaches, termites, rodents, mosquitoes, bed bugs and
              other common pests with long-lasting results.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Professional Treatment Methods",
                "Trained Technicians",
                "Home & Commercial Service",
                "Quick WhatsApp Support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-2xl bg-white p-3 text-sm font-bold text-[#063b3f] shadow-sm sm:p-4 sm:text-base"
                >
                  <span className="text-green-600">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section id="services" className="py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 text-center sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[3px] text-green-700 sm:text-sm">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#063b3f] sm:text-4xl md:text-5xl">
              Our Pest Control Services in Bangalore
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-green-100 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-3xl">
                  {service.icon}
                </div>

                <h3 className="mb-2 text-xl font-bold leading-tight text-[#063b3f]">
                  {service.title}
                </h3>

                <p className="mb-4 text-sm leading-6 text-gray-600">
                  {service.description}
                </p>

                <Link
                  to={service.link}
                  className="inline-flex items-center font-semibold text-green-700 transition hover:text-green-800"
                >
                  Learn More →
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="rounded-full bg-green-600 px-7 py-3 text-center font-bold text-white shadow-md transition hover:bg-green-700"
            >
              View All Pest Control Services
            </Link>

            <Link
              to="/blogs"
              className="rounded-full border-2 border-green-600 px-7 py-3 text-center font-bold text-green-700 transition hover:bg-green-50"
            >
              Read Pest Control Blogs
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[3px] text-green-700 sm:text-sm">
              Why Choose Us
            </p>

            <h2 className="mb-4 mt-3 text-4xl font-black text-[#063b3f] sm:text-4xl md:text-5xl">
              Professional Pest Control With Responsible Care
            </h2>

            <p className="mb-6 text-sm leading-7 text-gray-600 sm:text-base">
              Acuity Pest Controls provides reliable pest management services
              with trained technicians, professional treatment methods and quick
              customer support across Bangalore.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Professional Products",
                "Trained Technicians",
                "Quick Response",
                "Affordable Pricing",
                "Home & Commercial",
                "Same-Day Support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-green-100 bg-[#f6fffb] p-3 sm:p-4"
                >
                  <span className="text-lg font-black text-green-700">✓</span>

                  <span className="text-sm font-bold text-[#063b3f] sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] bg-[#063b3f] p-6 text-white sm:rounded-[35px] sm:p-8">
            <h3 className="mb-3 text-2xl font-black sm:text-3xl">
              Need Pest Control Today?
            </h3>

            <p className="mb-5 text-sm leading-7 text-gray-200 sm:text-base">
              Book an inspection and our pest control expert will guide you with
              the right treatment.
            </p>

            <a
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Controls,%20I%20need%20pest%20control%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-2xl bg-green-600 px-6 py-3 text-sm font-bold text-white hover:bg-green-700 sm:px-8 sm:py-4 sm:text-base"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center sm:mb-16">
            <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-xs font-bold text-green-700 sm:text-sm">
              Our Process
            </span>

            <h2 className="mt-3 text-4xl font-black text-[#063b3f] sm:text-4xl md:text-5xl">
              Simple 4-Step Process
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">
              From inspection to long-term protection, we ensure a hassle-free
              experience.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {[
              {
                icon: "📞",
                title: "Book Service",
                description: "Call or WhatsApp to schedule your inspection.",
              },
              {
                icon: "🔍",
                title: "Inspection",
                description:
                  "Our expert inspects and identifies the pest problem.",
              },
              {
                icon: "🧪",
                title: "Treatment",
                description:
                  "Targeted treatment using professional pest-control products.",
              },
              {
                icon: "🛡️",
                title: "Protection",
                description:
                  "Follow-up support and preventive recommendations.",
              },
            ].map((item, index) => (
              <article
                key={item.title}
                className="relative rounded-3xl border border-green-100 bg-white p-6 text-center shadow-lg sm:p-8"
              >
                <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#063b3f] text-xs font-black text-white sm:h-10 sm:w-10 sm:text-sm">
                  {index + 1}
                </div>

                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-4xl text-white shadow-lg sm:h-20 sm:w-20">
                  {item.icon}
                </div>

                <h3 className="mb-2 text-base font-black text-[#063b3f] sm:text-xl">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}

      <section className="bg-[#f6fffb] py-12 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[3px] text-green-700 sm:text-sm">
            Testimonials
          </p>

          <h2 className="mb-8 mt-3 text-4xl font-black text-[#063b3f] sm:mb-12 sm:text-4xl md:text-5xl">
            What Our Customers Say
          </h2>

          <div className="rounded-[24px] border border-green-100 bg-white p-6 shadow-2xl sm:rounded-[35px] sm:p-8 md:p-12">
            <div
              className="mb-3 text-3xl text-yellow-400"
              aria-label="Five-star customer review"
            >
              ★★★★★
            </div>

            <p className="mb-5 min-h-[90px] text-sm leading-7 text-gray-700 sm:text-base md:text-xl">
              “{testimonials[activeTestimonial].text}”
            </p>

            <h3 className="text-lg font-black text-[#063b3f] sm:text-2xl">
              {testimonials[activeTestimonial].name}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {testimonials[activeTestimonial].area}
            </p>

            <div className="mt-6 flex justify-center gap-2 sm:gap-3">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  className={`h-2 rounded-full transition-all sm:h-3 ${
                    activeTestimonial === index
                      ? "w-6 bg-green-700 sm:w-8"
                      : "w-2 bg-gray-300 sm:w-3"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="bg-[#f6fffb] py-12 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[3px] text-green-700 sm:text-sm">
              FAQ
            </p>

            <h2 className="mt-3 text-4xl font-black text-[#063b3f] sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-green-100 bg-white p-4 shadow-sm sm:p-6"
              >
                <h3 className="mb-2 text-base font-black leading-snug text-[#063b3f] sm:mb-3 sm:text-xl">
                  {item.question}
                </h3>

                <p className="text-sm leading-7 text-gray-600 sm:text-base">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMERS AND INDUSTRIES */}

      <section className="border-y bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[3px] text-green-700 sm:text-sm">
              Trusted Across Bangalore
            </p>

            <h2 className="mt-3 text-4xl font-black text-[#063b3f] sm:text-4xl md:text-5xl">
              Serving Homes & Businesses Across Bangalore
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              We provide professional pest control solutions for residential,
              commercial and industrial clients throughout Bangalore.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6">
            {[
              "🏠 Homes",
              "🏢 Offices",
              "🏨 Hotels",
              "🏥 Hospitals",
              "🏭 Industries",
              "🏬 Commercial Spaces",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-green-100 bg-[#f8fcfb] p-4 text-center sm:rounded-3xl sm:p-8"
              >
                <h3 className="text-sm font-black text-[#063b3f] sm:text-lg">
                  {item}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6 md:grid-cols-4">
            {[
              ["19+", "Years Experience"],
              ["15K+", "Treatments Completed"],
              ["5K+", "Customers Served"],
              ["All Days", "Customer Support"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="rounded-2xl bg-[#f8fcfb] p-4 text-center sm:bg-transparent sm:p-0"
              >
                <p className="text-3xl font-black text-green-600 sm:text-4xl">
                  {number}
                </p>

                <p className="mt-2 text-xs font-semibold text-gray-600 sm:text-base">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <p className="font-bold uppercase tracking-[3px] text-green-700">
              Service Areas
            </p>

            <h2 className="mt-4 text-3xl font-black text-[#063b3f] md:text-5xl">
              Pest Control Services Across Bangalore
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
              We provide pest control services in major residential, commercial
              and industrial areas across Bangalore, including South Bengaluru
              and nearby localities.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((area) => (
              <span
                key={area}
                className="rounded-full border border-green-100 bg-[#f6fffb] px-4 py-2 text-sm font-semibold text-[#063b3f]"
              >
                {area}
              </span>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-gray-600 sm:text-base">
            Contact Acuity Pest Controls to confirm technician availability in
            your locality.
          </p>
        </div>
      </section>

      {/* GOOGLE MAP */}

      <section className="bg-[#f6fffb] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[3px] text-green-700 sm:text-sm">
              Our Location
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#063b3f] md:text-5xl">
              Pest Control Company in Bangalore
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
              Visit or contact Acuity Pest Controls for professional residential
              and commercial pest control services in Bangalore.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-green-100 bg-white shadow-xl">
            <iframe
              src="https://www.google.com/maps?q=1st+Floor,+KVO-08,+No-28%2F2,+Near+Sun+Jupiter+School,+JP+Nagar+6th+Phase,+Yelachenahalli,+Kumaraswamy+Layout,+Bengaluru,+Karnataka+560078&output=embed"
              title="Acuity Pest Controls location in Bangalore"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=1st+Floor%2C+KVO-08%2C+No-28%2F2%2C+Near+Sun+Jupiter+School%2C+JP+Nagar+6th+Phase%2C+Yelachenahalli%2C+Kumaraswamy+Layout%2C+Bengaluru%2C+Karnataka+560078"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-green-600 px-7 py-3 font-bold text-white shadow-md transition hover:bg-green-700"
            >
              Open Location in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
