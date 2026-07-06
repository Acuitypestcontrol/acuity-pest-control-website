import React from "react";
import SEO from "../components/seo/seo";

import bannerImage from "../images/aboutusbanner.jpg";
import bannerImage1 from "../images/pestman.png";

const AboutUS = () => {
  const vision = [
    "Efficient Services",
    "Eco-Friendly Products",
    "Advanced Techniques",
    "Long-Lasting Results",
  ];

  const mission = [
    "Personalized Service",
    "Skilled Professionals",
    "Tailored Solutions",
    "Post-Service Follow-Up",
  ];

  const faqs = [
    {
      q: "What types of pests do you control?",
      a: "We help control cockroaches, mosquitoes, bed bugs, termites, rodents, spiders, ants, wood borers, and lizards.",
    },
    {
      q: "How do I know if I need pest control?",
      a: "If you are seeing pests, finding droppings, nests, dead insects, unusual noises, property damage, chewed wood, food damage or unpleasant odors, it is best to contact a pest control professional for an inspection.",
    },
    {
      q: "Is pest control safe?",
      a: "Yes, pest control can be safe when performed by qualified professionals. Acuity Pest Controls uses safe and effective methods that minimize risks to people, pets and the environment.",
    },
    {
      q: "How long does it take to eliminate pests?",
      a: "The time required depends on the pest type, infestation level and treatment method. Some issues are resolved quickly, while others may require monitoring and follow-up.",
    },
  ];

  const aboutSchema = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": "https://acuitypestcontrols.com/about#aboutpage",
      name: "About Acuity Pest Control",
      url: "https://acuitypestcontrols.com/about",
      description:
        "Acuity Pest Control is a professional pest control company in Bangalore offering safe pest management services for homes, apartments, offices, restaurants, warehouses and commercial properties.",
      mainEntity: {
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
        areaServed: {
          "@type": "City",
          name: "Bangalore",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ];

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

  return (
    <div className="w-full overflow-hidden bg-white">
      <SEO
        title="About Acuity Pest Control | Pest Control Company in Bangalore"
        description="Learn about Acuity Pest Control, a professional pest control company in Bangalore offering safe pest management for homes, apartments, offices and commercial spaces."
        keywords="about Acuity Pest Control, pest control company Bangalore, pest control experts Bangalore, professional pest control Bangalore, pest management company Bangalore"
        canonical="https://acuitypestcontrols.com/about"
        image="https://acuitypestcontrols.com/logo.png"
        schema={aboutSchema}
      />

      {/* BANNER */}
      <section className="relative h-[55vh] md:h-[800px] flex items-center">
        <img
          src={bannerImage}
          alt="About Acuity Pest Control company in Bangalore"
          className="absolute inset-0 w-full h-full "
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* ABOUT INTRO */}
      <section className="py-16 md:py-24 bg-[#f8fcfb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-green-600 text-white px-5 py-2 rounded-full font-bold mb-5">
              Guaranteed Pest Control
            </span>

            <h1 className="text-3xl md:text-5xl font-black text-[#063b3f] mb-6">
              About Acuity Pest Control
            </h1>

            <p className="text-gray-700 leading-8 mb-5">
              Acuity Pest Control is one of Bangalore’s trusted pest control
              companies. Our main goal is to provide excellent service to our
              clients and help them prevent pest problems in the future.
            </p>

            <p className="text-gray-700 leading-8 mb-8">
              We provide professional pest control service booking support and
              reliable treatment solutions for residential, commercial and
              industrial properties across Bangalore.
            </p>

            <a
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Controls,%20I%20need%20pest%20control%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold"
            >
              Contact Us
            </a>
          </div>

          <div className="rounded-[35px] overflow-hidden">
            <img
              src={bannerImage1}
              alt="Professional pest control expert from Acuity Pest Control"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* VISION MISSION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-[#f6fffb] border border-green-100 rounded-[30px] p-8">
            <h2 className="text-3xl font-black text-[#063b3f] mb-6">
              Our Vision
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {vision.map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-2xl p-4 font-bold text-[#063b3f]"
                >
                  ✅ {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#063b3f] rounded-[30px] p-8 text-white">
            <h2 className="text-3xl font-black mb-6">Our Mission</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {mission.map((item) => (
                <div
                  key={item}
                  className="bg-white/10 rounded-2xl p-4 font-bold"
                >
                  ✅ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED EXPERTS */}
      <section className="py-16 md:py-24 bg-[#eef8f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-green-700 font-bold tracking-[3px] uppercase">
              Trusted Pest Experts
            </span>

            <h2 className="text-3xl md:text-5xl font-black text-[#063b3f] mt-4 mb-6">
              Trusted Pest Control Company in Bangalore
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <h3 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-3">
                  01. Expertise
                </h3>
                <p className="text-gray-600 leading-7">
                  Our team consists of highly trained and experienced
                  professionals who are well-versed in the latest pest control
                  techniques and technologies.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <h3 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-3">
                  02. Customer Focus
                </h3>
                <p className="text-gray-600 leading-7">
                  We prioritize customer satisfaction and tailor our services to
                  meet your unique needs with safe, effective and discreet pest
                  control solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#063b3f] rounded-[35px] p-8 text-white">
            <span className="text-green-300 font-bold tracking-[3px] uppercase">
              Unmatched Excellence
            </span>

            <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6">
              Safe Pest Management for Homes and Businesses
            </h2>

            <p className="text-gray-200 leading-8 mb-8">
              Our focus is on effective pest elimination while prioritizing the
              safety of your family, staff, customers and pets.
            </p>

            <div className="space-y-5">
              {[
                ["Residential Pest Control", "99%", "Success Rate"],
                ["Commercial Pest Control", "95%", "Retention Rate"],
                ["Loyal Customers", "98%", "Repeat Purchase Rate"],
              ].map(([title, percent, label]) => (
                <div key={title}>
                  <div className="flex justify-between font-bold mb-2">
                    <span>{title}</span>
                    <span>{percent}</span>
                  </div>
                  <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 rounded-full"
                      style={{ width: percent }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-300 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#f6fffb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-green-700 font-bold tracking-[3px] uppercase">
              Have Questions?
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#063b3f] mt-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mt-4">
              Find quick answers about our pest control services, treatment
              options, safety and service process.
            </p>
          </div>

          <div className="space-y-5">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-green-100"
              >
                <h3 className="text-lg sm:text-xl font-black text-[#063b3f] mb-3">
                  {item.q}
                </h3>
                <p className="text-gray-600 leading-7">{item.a}</p>
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
              Pest Control Service Areas in Bangalore
            </h2>
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

      {/* CTA */}
      <section className="py-16 bg-[#063b3f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-5">
            Book Pest Control Service in Bangalore
          </h2>
          <p className="text-gray-200 mb-8">
            Contact Acuity Pest Control for safe, effective and reliable pest
            management services in Bangalore.
          </p>
          <a
            href="tel:+919941229005"
            className="inline-block bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold"
          >
            Call Now: +91 99412 29005
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUS;
