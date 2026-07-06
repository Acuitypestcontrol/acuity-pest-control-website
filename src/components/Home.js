import React, { useState, useEffect } from "react";
import SEO from "../components/seo/seo";

import bannerImage from "../images/homebanner (1).jpg";
import bannerImage1 from "../images/protect-removebg-preview.png";

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://acuitypestcontrols.com/#business",
    name: "Acuity Pest Control",
    url: "https://acuitypestcontrols.com/",
    logo: "https://acuitypestcontrols.com/logo.png",
    image: "https://acuitypestcontrols.com/logo.png",
    description:
      "Acuity Pest Control provides professional pest control services in Bangalore for homes, apartments, offices, restaurants, hotels, hospitals, warehouses and industries.",
    telephone: "+91 9941229005",
    email: "acuitypestcontrol@gmail.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "JP Nagar 6th Phase, Yelachenahalli",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560062",
      addressCountry: "IN",
    },
    areaServed: [
      "Bangalore",
      "JP Nagar",
      "Jayanagar",
      "Whitefield",
      "Electronic City",
      "HSR Layout",
      "Koramangala",
      "Marathahalli",
      "Indiranagar",
      "Banashankari",
      "Hebbal",
      "Sarjapur Road",
    ],
    openingHours: "Mo-Su 00:00-23:59",
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cockroach Control Service in Bangalore",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Termite Control Service in Bangalore",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bed Bug Control Service in Bangalore",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rodent Control Service in Bangalore",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mosquito Control Service in Bangalore",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Pest Control Service in Bangalore",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://acuitypestcontrols.com/#website",
    url: "https://acuitypestcontrols.com/",
    name: "Acuity Pest Control",
    description:
      "Professional pest control services in Bangalore for homes, apartments, offices and commercial properties.",
    publisher: {
      "@id": "https://acuitypestcontrols.com/#business",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which pest control services do you provide in Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide cockroach control, termite treatment, bed bug treatment, rodent control, mosquito control, ant control, lizard treatment, wood borer treatment and commercial pest control services.",
        },
      },
      {
        "@type": "Question",
        name: "Is your pest control treatment safe for family and pets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we use safe and professional treatment methods. Our technicians guide you with safety instructions before and after the service.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide pest control for offices and commercial properties?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide pest management for offices, hotels, hospitals, warehouses, restaurants, schools, apartments and industries.",
        },
      },
      {
        "@type": "Question",
        name: "How can I book a pest control service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can call us or send a WhatsApp enquiry. Our team will contact you and suggest the right treatment.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide same-day pest control service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Based on technician availability and location, we try to provide quick and same-day support across Bangalore.",
        },
      },
    ],
  },
];

const Home = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceOpen, setServiceOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const locations = [
    "Indiranagar",
    "Old Madras Road",
    "CV Raman Nagar",
    "Kaggadasapura",
    "Thippasandra",
    "KR Puram",
    "Begur Road",
    "MG Road",
    "Shanthi Nagar",
    "HBR Layout",
    "Hennur Road",
    "Chansandra",
    "Byrasandra",
    "Tin Factory",
    "Kasturi Nagar",
    "Agara",
    "Kanakapura Road",
    "Banashankari",
    "Rajarajeshwari Nagar",
    "Hosur Road",
    "Kudlu",
    "Singasandra",
    "Electronic City",
    "Kammanahalli",
    "Lingarajapuram",
    "Fraser Town",
    "Munnekolala",
    "HSR Layout",
    "Hoodi",
    "Ramamurthy Nagar",
    "Akshayanagar",
    "Domlur",
    "Wilson Garden",
    "Sadananda Nagar",
    "Whitefield",
    "Mahadevapura",
    "Chinnapanna Halli",
    "Kundalahalli",
    "ITPL Road",
    "Varthur",
    "TC Palya",
    "Horamavu",
    "Babusa Palya",
    "Banaswadi",
    "Ulsoor",
    "Bannerghatta Road",
    "Arekere",
    "Hulimavu",
    "JP Nagar",
    "Jayanagar",
    "BTM Layout",
    "Marathahalli",
    "Bommanahalli",
    "Koramangala",
    "Jeevan Bima Nagar",
    "Old Airport Road",
    "Madiwala",
    "Harlur Road",
    "Sarjapur Road",
    "Kodihalli",
  ];

  const services = [
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

  const testimonials = [
    {
      name: "Nirmala Shah",
      area: "JP Nagar, Bangalore",
      text: "Acuity Pest Controls did a professional termite treatment. The team was on time and explained everything clearly.",
    },
    {
      name: "Ravi Kumar",
      area: "Whitefield, Bangalore",
      text: "Our cockroach problem was solved quickly. Very clean work and good support from the team.",
    },
    {
      name: "Sneha Reddy",
      area: "Electronic City",
      text: "Good mosquito treatment service. The technicians were polite and the service was affordable.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const toggleService = (item) => {
    setSelectedServices((prev) =>
      prev.includes(item)
        ? prev.filter((service) => service !== item)
        : [...prev, item],
    );
  };

  const handleWhatsApp = () => {
    const message = `*New Pest Control Enquiry*

👤 Name: ${name || "Not provided"}
📞 Phone: ${phone || "Not provided"}
🐜 Services Required: ${
      selectedServices.length > 0 ? selectedServices.join(", ") : "Not selected"
    }

Please contact me regarding pest control service.`;

    window.open(
      `https://wa.me/919941229005?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <SEO
        title="Pest Control Services in Bangalore | Acuity Pest Control"
        description="Acuity Pest Control provides professional pest control services in Bangalore for homes, apartments, offices, restaurants, hotels, hospitals and industries. Get safe cockroach, termite, bed bug, mosquito and rodent control solutions."
        keywords="pest control services in Bangalore, pest control Bangalore, cockroach control Bangalore, termite control Bangalore, bed bug control Bangalore, mosquito control Bangalore, rodent control Bangalore, commercial pest control Bangalore"
        canonical="https://acuitypestcontrols.com/"
        image="https://acuitypestcontrols.com/logo.png"
        schema={homeSchema}
      />

      {/* BANNER */}
      <section className="relative h-[40vh] md:h-[110vh]">
        <img
          src={bannerImage}
          alt="Professional pest control services in Bangalore by Acuity Pest Control"
          className="absolute inset-0 w-full h-full "
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* HERO + FORM */}
      <section
        id="inspection"
        className="relative overflow-hidden bg-gradient-to-br from-[#f8fcfb] to-white py-12 sm:py-20 md:py-28"
      >
        <div className="absolute top-0 right-0 w-[45%] h-full bg-gradient-to-l from-[#0f8f55]/10 to-transparent rounded-bl-[120px] hidden lg:block"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-xs sm:text-sm mb-4">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Trusted by 5000+ Customers
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#063b3f] leading-tight">
              Professional Pest Control Services in Bangalore <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                That Actually Works
              </span>
            </h1>

            <p className="text-sm sm:text-base text-gray-600 leading-7 mt-4 max-w-xl">
              Acuity Pest Control provides safe, effective and long-lasting pest
              control services in Bangalore for homes, apartments, offices,
              restaurants, warehouses and industries.
            </p>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-10">
              {[
                ["19+", "Years"],
                ["15K+", "Treatments"],
                ["24/7", "Support"],
              ].map(([num, text]) => (
                <div
                  key={text}
                  className="bg-white rounded-2xl p-3 sm:p-4 text-center shadow-sm border border-gray-100"
                >
                  <h3 className="text-xl sm:text-3xl font-black text-green-700">
                    {num}
                  </h3>
                  <p className="text-gray-500 text-[11px] sm:text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-[24px] sm:rounded-[35px] shadow-2xl p-5 sm:p-8 border border-green-100">
              <h2 className="text-xl sm:text-4xl md:text-3xl font-black text-[#063b3f]">
                Book an Inspection
              </h2>

              <p className="text-gray-600 text-sm mt-1 mb-4 sm:mb-6">
                We'll call you back within 30 minutes.
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-gray-200 p-3 sm:p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white border border-gray-200 p-3 sm:p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setServiceOpen(!serviceOpen)}
                    className="w-full bg-white border border-gray-200 p-3 sm:p-4 rounded-2xl text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
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
                    <div className="absolute z-50 mt-2 w-full bg-white rounded-2xl shadow-2xl border border-gray-200 max-h-56 sm:max-h-64 overflow-y-auto p-3 sm:p-4">
                      {services.map((item) => (
                        <label
                          key={item}
                          className="flex items-center gap-3 py-2 cursor-pointer hover:text-green-700 text-sm"
                        >
                          <input
                            type="checkbox"
                            checked={selectedServices.includes(item)}
                            onChange={() => toggleService(item)}
                            className="w-4 h-4 accent-green-600 shrink-0"
                          />
                          <span>{item}</span>
                        </label>
                      ))}

                      <button
                        type="button"
                        onClick={() => setServiceOpen(false)}
                        className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold text-sm"
                      >
                        Done
                      </button>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 sm:py-4 rounded-2xl font-bold shadow-lg shadow-green-600/30 hover:scale-[1.02] transition text-sm sm:text-base"
                >
                  Get Free Quote via WhatsApp
                </button>
              </form>

              <div className="flex flex-wrap gap-3 mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={bannerImage1}
                alt="Acuity Pest Control technician protecting homes from pests"
                className="w-full h-full "
              />
            </div>

            <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-full shadow-xl flex items-center justify-center text-4xl sm:text-4xl border-4 border-green-100">
              🪳
            </div>

            <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-full shadow-xl flex items-center justify-center text-4xl sm:text-4xl border-4 border-green-100">
              🦟
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center bg-green-600 text-white px-4 py-1.5 rounded-full font-bold text-xs sm:text-sm">
              About Us
            </span>

            <h2 className="text-4xl sm:text-4xl md:text-5xl font-black text-[#063b3f] leading-tight mt-3 mb-4">
              Protecting Homes, Offices & Businesses From Pests
            </h2>

            <p className="text-sm sm:text-base text-gray-700 leading-7 mb-3">
              Acuity Pest Controls provides safe and effective pest control
              services across Bangalore for homes, apartments, offices,
              restaurants, warehouses and commercial properties.
            </p>

            <p className="text-sm sm:text-base text-gray-700 leading-7 mb-6">
              Our trained technicians use professional treatment methods to
              eliminate cockroaches, termites, rodents, mosquitoes, bed bugs and
              other common pests with long-lasting results.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Safe Treatment Methods",
                "Trained Technicians",
                "Home & Commercial Service",
                "Quick WhatsApp Support",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-2xl p-3 sm:p-4 font-bold text-[#063b3f] shadow-sm flex items-center gap-2 text-sm sm:text-base"
                >
                  <span className="text-green-600">✓</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-green-700 font-bold tracking-[3px] uppercase text-xs sm:text-sm">
              Our Services
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#063b3f] mt-3">
              Our Pest Control Services in Bangalore
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              [
                "🪳",
                "Cockroach Control",
                "For kitchens, bathrooms & restaurants",
              ],
              ["🐜", "Termite Control", "Protect wood, walls & furniture"],
              ["🐭", "Rodent Control", "Rat and mouse control solutions"],
              [
                "🦟",
                "Mosquito Control",
                "Indoor and outdoor mosquito treatment",
              ],
              ["🛏️", "Bed Bug Treatment", "For homes, hotels & bedrooms"],
              [
                "🏢",
                "Commercial Pest Control",
                "For offices, hospitals & industries",
              ],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-5 shadow-md border border-green-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-3xl mb-4">
                  {icon}
                </div>

                <h3 className="text-xl font-bold text-[#063b3f] mb-2 leading-tight">
                  {title}
                </h3>

                <p className="text-gray-600 text-sm leading-6 mb-4">{desc}</p>

                <button className="text-green-700 font-semibold hover:text-green-800 transition">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-12 sm:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <span className="text-green-700 font-bold tracking-[3px] uppercase text-xs sm:text-sm">
              Why Choose Us
            </span>

            <h2 className="text-4xl sm:text-4xl md:text-5xl font-black text-[#063b3f] mt-3 mb-4">
              Safe Pest Control With Professional Care
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-7 mb-6">
              Acuity Pest Controls provides reliable pest management services
              with trained technicians, safe treatment methods and quick
              customer support across Bangalore.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Safe Chemicals",
                "Trained Technicians",
                "Quick Response",
                "Affordable Pricing",
                "Home & Commercial",
                "Same Day Support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-[#f6fffb] border border-green-100 rounded-2xl p-3 sm:p-4"
                >
                  <span className="text-green-700 font-black text-lg">✓</span>
                  <span className="font-bold text-[#063b3f] text-sm sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#063b3f] rounded-[24px] sm:rounded-[35px] p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-4xl md:text-3xl font-black mb-3">
              Need Pest Control Today?
            </h3>

            <p className="text-sm sm:text-base text-gray-200 leading-7 mb-5">
              Book an inspection and our pest control expert will guide you with
              the right treatment.
            </p>

            <a
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Controls,%20I%20need%20pest%20control%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-sm sm:text-base"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-12 sm:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full font-bold text-xs sm:text-sm">
              Our Process
            </span>

            <h2 className="text-4xl sm:text-4xl md:text-5xl font-black text-[#063b3f] mt-3">
              Simple 4-Step Process
            </h2>

            <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-2xl mx-auto">
              From inspection to long-term protection, we ensure a hassle-free
              experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: "📞",
                title: "Book Service",
                desc: "Call or WhatsApp to schedule your inspection.",
              },
              {
                icon: "🔍",
                title: "Inspection",
                desc: "Our expert inspects and identifies the pest problem.",
              },
              {
                icon: "🧪",
                title: "Treatment",
                desc: "Safe and effective treatment using professional products.",
              },
              {
                icon: "🛡️",
                title: "Protection",
                desc: "Follow-up support & preventive recommendations.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-white rounded-3xl border border-green-100 shadow-lg p-6 sm:p-8 text-center"
              >
                <div className="absolute -top-2 -right-2 bg-[#063b3f] text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-black text-xs sm:text-sm">
                  {index + 1}
                </div>

                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-green-600 text-white flex items-center justify-center text-4xl sm:text-4xl mb-4 shadow-lg">
                  {item.icon}
                </div>

                <h3 className="text-base sm:text-xl font-black text-[#063b3f] mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-12 sm:py-20 bg-[#f6fffb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-green-700 font-bold tracking-[3px] uppercase text-xs sm:text-sm">
            Testimonials
          </span>

          <h2 className="text-4xl sm:text-4xl md:text-5xl font-black text-[#063b3f] mt-3 mb-8 sm:mb-12">
            What Our Customers Say
          </h2>

          <div className="bg-white rounded-[24px] sm:rounded-[35px] shadow-2xl p-6 sm:p-8 md:p-12 border border-green-100">
            <div className="text-yellow-400 text-4xl sm:text-3xl mb-3">
              ★★★★★
            </div>

            <p className="text-sm sm:text-base md:text-xl text-gray-700 leading-7 mb-5 min-h-[90px]">
              “{testimonials[activeTestimonial].text}”
            </p>

            <h3 className="text-lg sm:text-4xl font-black text-[#063b3f]">
              {testimonials[activeTestimonial].name}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {testimonials[activeTestimonial].area}
            </p>

            <div className="flex justify-center gap-2 sm:gap-3 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 sm:h-3 rounded-full ${
                    activeTestimonial === index
                      ? "bg-green-700 w-6 sm:w-8"
                      : "bg-gray-300 w-2 sm:w-3"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-20 bg-[#f6fffb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-green-700 font-bold tracking-[3px] uppercase text-xs sm:text-sm">
              FAQ
            </span>

            <h2 className="text-4xl sm:text-4xl md:text-5xl font-black text-[#063b3f] mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {[
              [
                "Which pest control services do you provide in Bangalore?",
                "We provide cockroach control, termite treatment, bed bug treatment, rodent control, mosquito control, ant control, lizard treatment, wood borer treatment and commercial pest control services.",
              ],
              [
                "Is your pest control treatment safe for family and pets?",
                "Yes, we use safe and professional treatment methods. Our technicians guide you with safety instructions before and after the service.",
              ],
              [
                "Do you provide pest control for offices and commercial properties?",
                "Yes, we provide pest management for offices, hotels, hospitals, warehouses, restaurants, schools, apartments and industries.",
              ],
              [
                "How can I book a pest control service?",
                "You can call us or send a WhatsApp enquiry. Our team will contact you and suggest the right treatment.",
              ],
              [
                "Do you provide same-day pest control service?",
                "Based on technician availability and location, we try to provide quick and same-day support across Bangalore.",
              ],
            ].map(([question, answer]) => (
              <div
                key={question}
                className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-green-100"
              >
                <h3 className="text-base sm:text-xl font-black text-[#063b3f] mb-2 sm:mb-3 leading-snug">
                  {question}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-7">
                  {answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED */}
      <section className="py-12 sm:py-20 bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-green-700 font-bold tracking-[3px] uppercase text-xs sm:text-sm">
              Trusted Across Bangalore
            </span>

            <h2 className="text-4xl sm:text-4xl md:text-5xl font-black text-[#063b3f] mt-3">
              Serving Homes & Businesses Across Bangalore
            </h2>

            <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto leading-7">
              We proudly provide professional pest control solutions for
              residential, commercial and industrial clients throughout
              Bangalore.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6">
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
                className="bg-[#f8fcfb] border border-green-100 rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-center"
              >
                <h3 className="font-black text-[#063b3f] text-sm sm:text-lg">
                  {item}
                </h3>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-12">
            {[
              ["19+", "Years Experience"],
              ["1L+", "Treatments Completed"],
              ["5K+", "Happy Customers"],
              ["24/7", "Customer Support"],
            ].map(([number, text]) => (
              <div
                key={text}
                className="text-center bg-[#f8fcfb] rounded-2xl p-4 sm:bg-transparent sm:p-0"
              >
                <h2 className="text-4xl sm:text-4xl font-black text-green-600">
                  {number}
                </h2>
                <p className="text-gray-600 font-semibold mt-2 text-xs sm:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-green-700 font-bold tracking-[3px] uppercase">
              Service Areas
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#063b3f] mt-4">
              Pest Control Services Across Bangalore
            </h2>

            <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-3xl mx-auto leading-7">
              We provide pest control services in major residential, commercial
              and industrial areas across Bangalore.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-normal">
            {locations.map((area) => (
              <span
                key={area}
                className="bg-[#f6fffb] border border-green-100 text-[#063b3f] px-4 py-2 rounded-full text-sm font-semibold"
              >
                Pest Control in {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
