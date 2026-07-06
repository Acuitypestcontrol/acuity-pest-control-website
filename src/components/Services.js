import React, { useState } from "react";
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
  "@id": "https://acuitypestcontrols.com/services#service",
  name: "Pest Control Services in Bangalore",
  serviceType: "Pest Control",
  url: "https://acuitypestcontrols.com/services",
  description:
    "Acuity Pest Control provides professional pest control services in Bangalore including cockroach control, termite treatment, bed bug control, rodent control, mosquito control and commercial pest management.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://acuitypestcontrols.com/#business",
    name: "Acuity Pest Control",
    url: "https://acuitypestcontrols.com/",
    telephone: "+91 9941229005",
    email: "acuitypestcontrol@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "JP Nagar 6th Phase, Yelachenahalli",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560062",
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
          description:
            "Cockroach control treatment for homes, kitchens, restaurants and offices.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Termite Control Service in Bangalore",
          description:
            "Termite treatment for wooden furniture, walls and property protection.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rodent Control Service in Bangalore",
          description:
            "Rat and mouse control solutions for homes, offices, warehouses and commercial spaces.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mosquito Control Service in Bangalore",
          description:
            "Mosquito control and pest management for residential and commercial properties.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bed Bug Treatment in Bangalore",
          description:
            "Bed bug treatment for homes, hotels, apartments, bedrooms and PG accommodations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Pest Control in Bangalore",
          description:
            "Pest control services for offices, hotels, hospitals, warehouses, schools and industries.",
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
    },
    {
      image: termiteImg,
      title: "Termite Control",
      desc: "Advanced termite treatment to protect wooden furniture and property.",
    },
    {
      image: rodentImg,
      title: "Rodent Control",
      desc: "Safe rat and mouse control solutions for homes and businesses.",
    },
    {
      image: mosquitoImg,
      title: "Mosquito Control",
      desc: "Mosquito management services to reduce breeding and protect your family.",
    },
    {
      image: bedbugImg,
      title: "Bed Bug Treatment",
      desc: "Complete bed bug management for homes, hotels and apartments.",
    },
    {
      image: woodborerImg,
      title: "Wood Borer Treatment",
      desc: "Professional wood borer treatment for furniture and wooden interiors.",
    },
    {
      image: antImg,
      title: "Ant Control",
      desc: "Effective ant pest control for homes, kitchens and restaurants.",
    },
    {
      image: lizardImg,
      title: "Lizard Control",
      desc: "Hygienic lizard control for residential and commercial properties.",
    },
    {
      image: hotelImg,
      title: "Hotels & Hospitals",
      desc: "Specialized pest control for hotels and healthcare facilities.",
    },
    {
      image: warehouseImg,
      title: "Warehouse Pest Management",
      desc: "Protect your inventory with our warehouse pest solutions.",
    },
    {
      image: officeImg,
      title: "Office & IT Campus",
      desc: "Keep your office pest-free with our professional services.",
    },
    {
      image: schoolImg,
      title: "Schools & Colleges",
      desc: "Safe pest control for educational institutions.",
    },
    {
      image: apartmentImg,
      title: "Residential Complex",
      desc: "Common area pest treatment for apartments and complexes.",
    },
    {
      image: disinfectionImg,
      title: "Disinfection Services",
      desc: "Professional disinfection for homes, offices and businesses.",
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
    );
  };

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <SEO
        title="Pest Control Services in Bangalore | Acuity Pest Control"
        description="Explore Acuity Pest Control services in Bangalore including cockroach control, termite treatment, bed bug control, mosquito control, rodent control and commercial pest management."
        keywords="pest control services Bangalore, cockroach control Bangalore, termite control Bangalore, bed bug control Bangalore, mosquito control Bangalore, rodent control Bangalore, commercial pest control Bangalore"
        canonical="https://acuitypestcontrols.com/services"
        image="https://acuitypestcontrols.com/logo.png"
        schema={servicesPageSchema}
      />

      {/* BANNER */}
      <section className="relative h-[55vh] md:h-[800px] flex items-center">
        <img
          src={bannerImage}
          alt="Pest control services in Bangalore by Acuity Pest Control"
          className="absolute inset-0 w-full h-full "
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/20 to-black/30"></div>
      </section>

      {/* SERVICES */}
      <section className="py-14 sm:py-20 md:py-24 bg-gradient-to-br from-[#f8fcfb] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-green-700 font-bold tracking-[4px] uppercase text-xs sm:text-sm">
              Our Services
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#063b3f] mt-3">
              Pest Control Services in Bangalore
            </h1>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-7">
              Professional pest control services for homes, apartments, offices,
              hotels, hospitals, warehouses, restaurants, schools and commercial
              properties across Bangalore.
            </p>

            <div className="w-20 h-1 bg-green-600 mx-auto mt-5 rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-green-200 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-5 rounded-full bg-green-50 border-4 border-green-100 overflow-hidden flex items-center justify-center shadow-lg">
                  <img
                    src={service.image}
                    alt={`${service.title} service in Bangalore`}
                    className="w-16 h-16 object-contain group-hover:scale-110 transition duration-300"
                  />
                </div>

                <h2 className="text-base sm:text-lg font-black text-[#063b3f] mb-2 leading-tight">
                  {service.title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>

                <a
                  href={`https://wa.me/919941229005?text=${encodeURIComponent(
                    `Hi Acuity Pest Controls, I need ${service.title} service.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-bold transition-all text-sm hover:shadow-lg"
                >
                  Book Now
                </a>
              </div>
            ))}

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-green-100 text-center flex flex-col justify-center items-center">
              <div className="text-4xl mb-3">🤔</div>

              <h2 className="text-lg font-black text-[#063b3f] mb-2">
                Need Help Choosing?
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Our experts are here to guide you.
              </p>

              <a
                href="/contact"
                className="inline-block bg-[#063b3f] hover:bg-[#0a5055] text-white px-6 py-2.5 rounded-full font-bold transition-all text-sm hover:shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED EXPERTS */}
      <section className="py-14 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <span className="text-green-700 font-bold tracking-[3px] uppercase text-xs sm:text-sm">
              About Us
            </span>

            <h2 className="text-3xl md:text-5xl font-black text-[#063b3f] mt-4 mb-6">
              Trusted Pest Control <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                Experts in Bangalore
              </span>
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              Acuity Pest Controls provides safe and effective pest control
              services across Bangalore for homes, apartments, offices,
              restaurants, warehouses and commercial properties.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                ["19+", "Years Experience"],
                ["1L+", "Treatments Done"],
                ["24/7", "Support Available"],
                ["100%", "Eco-Friendly"],
              ].map(([number, label]) => (
                <div
                  key={label}
                  className="bg-[#f6fffb] rounded-2xl p-4 border border-green-100"
                >
                  <h3 className="font-black text-[#063b3f] text-xl">
                    {number}
                  </h3>
                  <p className="text-gray-500 text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <img
              src={bannerImage2}
              alt="Professional pest control expert in Bangalore"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-14 sm:py-16 bg-[#eef8f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-green-700 font-bold tracking-[3px] uppercase text-xs sm:text-sm">
              We Serve
            </span>

            <h2 className="text-3xl md:text-5xl font-black text-[#063b3f] mt-4">
              Residential & Commercial Pest Control Solutions
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
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
                className="bg-white rounded-2xl p-4 sm:p-5 text-center font-bold text-[#063b3f] border border-green-100 text-sm sm:text-base shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + WORKING FORM */}
      <section className="py-14 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 bg-white overflow-hidden">
            <div className="relative min-h-[360px] sm:min-h-[500px] bg-[#ffffff] flex items-center justify-center overflow-hidden">
              <div className="absolute w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] overflow-hidden">
                <img
                  src={bannerImage1}
                  alt="Cockroach control and pest treatment in Bangalore"
                  className="w-full h-full "
                />
              </div>
            </div>

            <div className="p-5 sm:p-8 lg:p-12">
              <h3 className="text-green-600 font-bold tracking-[3px] uppercase mb-4 text-xs sm:text-sm">
                Call Us For Estimate
              </h3>

              <h2 className="text-3xl md:text-5xl text-[#063b3f] font-black mb-4">
                Book Professional Pest Control Services
              </h2>

              <p className="text-gray-700 leading-7 mb-6">
                Safe and effective pest control solutions for homes, apartments,
                offices, hotels, warehouses and commercial properties across
                Bangalore.
              </p>

              <div className="bg-white rounded-[24px] sm:rounded-[35px] shadow-2xl p-5 sm:p-8 border border-green-100">
                <h3 className="text-xl sm:text-4xl font-black text-[#063b3f]">
                  Book An Inspection
                </h3>

                <p className="text-gray-600 text-sm mt-1 mb-4 sm:mb-6">
                  We'll call you back within 30 minutes.
                </p>

                <form
                  className="space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
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
                      <div className="absolute z-50 mt-2 w-full bg-white rounded-2xl shadow-2xl border border-gray-200 max-h-56 overflow-y-auto p-3 sm:p-4">
                        {services.map((item) => (
                          <label
                            key={item.title}
                            className="flex items-center gap-3 py-2 cursor-pointer hover:text-green-700 text-sm"
                          >
                            <input
                              type="checkbox"
                              checked={selectedServices.includes(item.title)}
                              onChange={() => toggleService(item.title)}
                              className="w-4 h-4 accent-green-600 shrink-0"
                            />
                            <span>{item.title}</span>
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
        </div>
      </section>
    </div>
  );
};

export default Services;
