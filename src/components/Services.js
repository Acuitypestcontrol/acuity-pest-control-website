import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/seo/seo";

import bannerImage from "../images/servicebanner.jpg";
import bannerImage1 from "../images/cockroch1.png";
import bannerImage2 from "../images/pestman.png";

import cockroachImg from "../images/cockrochboxpng.png";
import termiteImg from "../images/termitebox.png";
import rodentImg from "../images/rodentbox.png";
import mosquitoImg from "../images/mosquitobox.png";
import bedbugImg from "../images/bedbugbox.jpg";
import woodborerImg from "../images/woodborebox.jpg";
import antImg from "../images/antbox.webp";
import lizardImg from "../images/lizardbox.png";
import hotelImg from "../images/hotels and hospitals.jpg";
import warehouseImg from "../images/warehouse.jpg";
import officeImg from "../images/office.jpg";
import schoolImg from "../images/school.jpg";
import apartmentImg from "../images/residential.jpg";
import disinfectionImg from "../images/dec.jpg";

const servicesPageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.acuitypestcontrols.com/services#service",
  name: "Pest Control Services in Bangalore",
  serviceType: "Pest Control",
  url: "https://www.acuitypestcontrols.com/services",
  description:
    "Acuity Pest Control provides professional pest control services in Bangalore including cockroach control, termite treatment, bed bug control, rodent control, mosquito control and commercial pest management.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://www.acuitypestcontrols.com/#business",
    name: "Acuity Pest Control",
    url: "https://www.acuitypestcontrols.com/",
    telephone: "+91 9941229005",
    email: "info@acuitypestcontrols.in",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "1st Floor, KVO-08, No-28/2, near Sun Jupiter School, JP Nagar 6th Phase, Yelachenahalli, Kumaraswamy Layout",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560078",
      addressCountry: "IN",
    },
  },
  areaServed: {
    "@type": "City",
    name: "Bangalore",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pest Control Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cockroach Control Service in Bangalore",
          url: "https://www.acuitypestcontrols.com/cockroach-management-service",
          description:
            "Cockroach control treatment for homes, kitchens, restaurants and offices.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Termite Control Service in Bangalore",
          url: "https://www.acuitypestcontrols.com/anti-termite-treatment",
          description:
            "Anti-termite treatment for homes, offices, wooden furniture and commercial properties.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rodent Control Service in Bangalore",
          url: "https://www.acuitypestcontrols.com/rodent-management-service",
          description:
            "Rat and mouse control solutions for homes, offices, warehouses and commercial properties.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mosquito Control Service in Bangalore",
          url: "https://www.acuitypestcontrols.com/mosquito-management-service",
          description:
            "Mosquito control and management services for residential and commercial properties.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bed Bug Treatment in Bangalore",
          url: "https://www.acuitypestcontrols.com/bed-bug-treatment",
          description:
            "Professional bed bug treatment for homes, hotels, apartments, bedrooms and PG accommodation.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wood Borer Treatment in Bangalore",
          url: "https://www.acuitypestcontrols.com/wood-borer-treatment",
          description:
            "Wood borer treatment for wooden furniture, doors, cupboards and interior woodwork.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ant Control Treatment in Bangalore",
          url: "https://www.acuitypestcontrols.com/ant-control-treatment",
          description:
            "Ant control treatment for homes, kitchens, restaurants, offices and commercial properties.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "General Pest Control in Bangalore",
          url: "https://www.acuitypestcontrols.com/general-pest-control",
          description:
            "General pest control treatment for common crawling and flying pests in homes and commercial spaces.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hotel and Hospital Pest Control in Bangalore",
          url: "https://www.acuitypestcontrols.com/hotel-hospital-pest-control",
          description:
            "Specialized pest management services for hotels, hospitals, clinics and healthcare facilities.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Warehouse Pest Management in Bangalore",
          url: "https://www.acuitypestcontrols.com/warehouse-pest-management",
          description:
            "Warehouse pest management for stored products, inventory and industrial storage facilities.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Office Pest Control in Bangalore",
          url: "https://www.acuitypestcontrols.com/office-pest-control",
          description:
            "Professional pest control services for offices, IT campuses and corporate buildings.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Educational Institution Pest Control in Bangalore",
          url: "https://www.acuitypestcontrols.com/educational-institution-pest-control",
          description:
            "Pest control services for schools, colleges, universities, hostels and educational campuses.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Common Area Pest Control in Bangalore",
          url: "https://www.acuitypestcontrols.com/common-area-treatment-residential-complex",
          description:
            "Common area pest control for apartments, gated communities and residential complexes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Disinfection Services in Bangalore",
          url: "https://www.acuitypestcontrols.com/disinfection-services",
          description:
            "Professional disinfection and sanitization services for homes, offices and commercial properties.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pre-Construction Termite Treatment in Bangalore",
          url: "https://www.acuitypestcontrols.com/pre-construction-termite-treatment",
          description:
            "Preventive anti-termite soil treatment for new buildings before construction.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Post-Construction Termite Treatment in Bangalore",
          url: "https://www.acuitypestcontrols.com/post-construction-termite-treatment",
          description:
            "Post-construction termite treatment for completed residential and commercial buildings.",
        },
      },
    ],
  },
};

const Services = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceOpen, setServiceOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
    {
      image: cockroachImg,
      title: "Cockroach Control",
      desc: "Safe cockroach treatment for homes, kitchens, restaurants and offices.",
      path: "/cockroach-management-service",
    },
    {
      image: termiteImg,
      title: "Termite Control",
      desc: "Advanced termite treatment to protect wooden furniture and property.",
      path: "/anti-termite-treatment",
    },
    {
      image: rodentImg,
      title: "Rodent Control",
      desc: "Safe rat and mouse control solutions for homes and businesses.",
      path: "/rodent-management-service",
    },
    {
      image: mosquitoImg,
      title: "Mosquito Control",
      desc: "Mosquito management services to reduce breeding and protect your family.",
      path: "/mosquito-management-service",
    },
    {
      image: bedbugImg,
      title: "Bed Bug Treatment",
      desc: "Complete bed bug management for homes, hotels and apartments.",
      path: "/bed-bug-treatment",
    },
    {
      image: woodborerImg,
      title: "Wood Borer Treatment",
      desc: "Professional wood borer treatment for furniture and wooden interiors.",
      path: "/wood-borer-treatment",
    },
    {
      image: antImg,
      title: "Ant Control",
      desc: "Effective ant pest control for homes, kitchens and restaurants.",
      path: "/ant-control-treatment",
    },
    {
      image: lizardImg,
      title: "Lizard Control",
      desc: "Hygienic lizard control for residential and commercial properties.",
      path: "/general-pest-control",
    },
    {
      image: hotelImg,
      title: "Hotels & Hospitals",
      desc: "Specialized pest control for hotels and healthcare facilities.",
      path: "/hotel-hospital-pest-control",
    },
    {
      image: warehouseImg,
      title: "Warehouse Pest Management",
      desc: "Protect your inventory with our warehouse pest solutions.",
      path: "/warehouse-pest-management",
    },
    {
      image: officeImg,
      title: "Office & IT Campus",
      desc: "Keep your office pest-free with our professional services.",
      path: "/office-pest-control",
    },
    {
      image: schoolImg,
      title: "Schools & Colleges",
      desc: "Safe pest control for educational institutions.",
      path: "/educational-institution-pest-control",
    },
    {
      image: apartmentImg,
      title: "Residential Complex",
      desc: "Common area pest treatment for apartments and complexes.",
      path: "/common-area-treatment-residential-complex",
    },
    {
      image: disinfectionImg,
      title: "Disinfection Services",
      desc: "Professional disinfection for homes, offices and businesses.",
      path: "/disinfection-services",
    },
    {
      image: termiteImg,
      title: "Pre-Construction Termite Treatment",
      desc: "Preventive anti-termite treatment for new buildings before construction.",
      path: "/pre-construction-termite-treatment",
    },
    {
      image: termiteImg,
      title: "Post-Construction Termite Treatment",
      desc: "Professional termite treatment for completed homes and commercial properties.",
      path: "/post-construction-termite-treatment",
    },
  ];

  const toggleService = (serviceTitle) => {
    setSelectedServices((prev) =>
      prev.includes(serviceTitle)
        ? prev.filter((item) => item !== serviceTitle)
        : [...prev, serviceTitle],
    );
  };

  const handleWhatsApp = () => {
    const message = `*New Pest Control Enquiry*

👤 Name: ${name || "Not Provided"}
📞 Phone: ${phone || "Not Provided"}
🐜 Services Required: ${
      selectedServices.length > 0 ? selectedServices.join(", ") : "Not Selected"
    }

Please contact me regarding pest control service.`;

    window.open(
      `https://wa.me/919941229005?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <SEO
        title="Pest Control Services in Bangalore | Acuity Pest Control"
        description="Explore Acuity Pest Control services in Bangalore including cockroach control, termite treatment, bed bug control, mosquito control, rodent control and commercial pest management."
        keywords="pest control services Bangalore, cockroach control Bangalore, termite control Bangalore, bed bug control Bangalore, mosquito control Bangalore, rodent control Bangalore, commercial pest control Bangalore"
        canonical="https://www.acuitypestcontrols.com/services"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={servicesPageSchema}
      />

      {/* HERO BANNER */}
      <section className="relative h-[45vh] overflow-hidden md:h-[135vh]">
        <img
          src={bannerImage}
          alt="Professional pest control services in Bangalore"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/20 to-black/30"></div>
      </section>

      {/* SERVICES */}
      <section className="bg-gradient-to-br from-[#f8fcfb] to-white py-14 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[4px] text-green-700 sm:text-sm">
              Our Services
            </span>

            <h1 className="mt-3 text-3xl font-black text-[#063b3f] sm:text-4xl md:text-5xl">
              Pest Control Services in Bangalore
            </h1>

            <p className="mx-auto mt-4 max-w-3xl leading-7 text-gray-600">
              Professional pest control services for homes, apartments, offices,
              hotels, hospitals, warehouses, restaurants, schools and commercial
              properties across Bangalore.
            </p>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-green-600"></div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-2xl"
              >
                <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-green-100 bg-green-50 shadow-lg">
                  <img
                    src={service.image}
                    alt={`${service.title} service in Bangalore`}
                    className="h-16 w-16 object-contain transition duration-300 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h2 className="mb-2 text-base font-black leading-tight text-[#063b3f] sm:text-lg">
                  {service.title}
                </h2>

                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  {service.desc}
                </p>

                <Link
                  to={service.path}
                  className="mb-2 mr-2 inline-block rounded-full border border-green-600 px-6 py-2.5 text-sm font-bold text-green-700 transition-all hover:bg-green-50"
                >
                  Learn More
                </Link>

                <a
                  href={`https://wa.me/919941229005?text=${encodeURIComponent(
                    `Hi Acuity Pest Controls, I need ${service.title} service.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-green-600 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-green-700 hover:shadow-lg"
                >
                  Book Now
                </a>
              </div>
            ))}

            <div className="flex flex-col items-center justify-center rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-blue-50 p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-3 text-4xl">🤔</div>

              <h2 className="mb-2 text-lg font-black text-[#063b3f]">
                Need Help Choosing?
              </h2>

              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Our experts are here to guide you.
              </p>

              <Link
                to="/contact"
                className="inline-block rounded-full bg-[#063b3f] px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#0a5055] hover:shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED EXPERTS */}
      <section className="bg-white py-14 sm:py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[3px] text-green-700 sm:text-sm">
              About Us
            </span>

            <h2 className="mb-6 mt-4 text-3xl font-black text-[#063b3f] md:text-5xl">
              Trusted Pest Control <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Experts in Bangalore
              </span>
            </h2>

            <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base">
              Acuity Pest Controls provides safe and effective pest control
              services across Bangalore for homes, apartments, offices,
              restaurants, warehouses and commercial properties.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                ["19+", "Years Experience"],
                ["15K+", "Treatments Completed"],
                ["5000+", "Customers Served"],
                ["24/7", "Customer Support"],
              ].map(([number, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-green-100 bg-[#f6fffb] p-4"
                >
                  <h3 className="text-xl font-black text-[#063b3f]">
                    {number}
                  </h3>

                  <p className="text-sm text-gray-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <img
              src={bannerImage2}
              alt="Professional pest control technician in Bangalore"
              className="h-full w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-[#eef8f4] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[3px] text-green-700 sm:text-sm">
              We Serve
            </span>

            <h2 className="mt-4 text-3xl font-black text-[#063b3f] md:text-5xl">
              Residential & Commercial Pest Control Solutions
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {[
              "🏠 Homes",
              "🏢 Apartments",
              "💼 Offices",
              "🏨 Hotels",
              "🏥 Hospitals",
              "🍽️ Restaurants",
              "🏭 Industries",
              "🏬 Warehouses",
              "🏫 Schools",
              "🛒 Retail Stores",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-green-100 bg-white p-4 text-center text-sm font-bold text-[#063b3f] shadow-sm sm:p-5 sm:text-base"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA AND FORM */}
      <section className="overflow-hidden py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid overflow-hidden bg-white lg:grid-cols-2">
            <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-white sm:min-h-[500px]">
              <div className="absolute h-[280px] w-[280px] overflow-hidden sm:h-[420px] sm:w-[420px]">
                <img
                  src={bannerImage1}
                  alt="Cockroach control and pest treatment in Bangalore"
                  className="h-full w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="p-5 sm:p-8 lg:p-12">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[3px] text-green-600 sm:text-sm">
                Call Us For Estimate
              </h3>

              <h2 className="mb-4 text-3xl font-black text-[#063b3f] md:text-5xl">
                Book Professional Pest Control Services
              </h2>

              <p className="mb-6 leading-7 text-gray-700">
                Safe and effective pest control solutions for homes, apartments,
                offices, hotels, warehouses and commercial properties across
                Bangalore.
              </p>

              <div className="rounded-[24px] border border-green-100 bg-white p-5 shadow-2xl sm:rounded-[35px] sm:p-8">
                <h3 className="text-xl font-black text-[#063b3f] sm:text-4xl">
                  Book An Inspection
                </h3>

                <p className="mb-4 mt-1 text-sm text-gray-600 sm:mb-6">
                  We&apos;ll call you back within 30 minutes.
                </p>

                <form
                  className="space-y-4"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full rounded-2xl border border-gray-200 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 sm:p-4"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    className="w-full rounded-2xl border border-gray-200 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 sm:p-4"
                  />

                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setServiceOpen((prev) => !prev)}
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
                      <div className="absolute z-50 mt-2 max-h-56 w-full overflow-y-auto rounded-2xl border border-gray-200 bg-white p-3 shadow-2xl sm:p-4">
                        {services.map((item) => (
                          <label
                            key={item.title}
                            className="flex cursor-pointer items-center gap-3 py-2 text-sm hover:text-green-700"
                          >
                            <input
                              type="checkbox"
                              checked={selectedServices.includes(item.title)}
                              onChange={() => toggleService(item.title)}
                              className="h-4 w-4 shrink-0 accent-green-600"
                            />

                            <span>{item.title}</span>
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
                    type="button"
                    onClick={handleWhatsApp}
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
        </div>
      </section>
    </div>
  );
};

export default Services;
