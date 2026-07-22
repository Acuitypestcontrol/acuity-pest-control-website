import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/seo/seo";

import bannerImage from "../images/aboutusbanner.jpg";
import bannerImage1 from "../images/pestman.png";

const AboutUS = () => {
  const vision = [
    "Efficient Services",
    "Responsible Treatment Methods",
    "Advanced Pest-Control Techniques",
    "Long-Lasting Pest Management",
  ];

  const mission = [
    "Personalized Service",
    "Skilled Professionals",
    "Property-Specific Solutions",
    "Post-Service Follow-Up",
  ];

  const faqs = [
    {
      q: "What types of pests do you control?",
      a: "We provide professional control services for cockroaches, mosquitoes, bed bugs, termites, rodents, ants, wood borers, lizards and other common household and commercial pests.",
    },
    {
      q: "How do I know if I need pest control?",
      a: "You may need professional pest control if you notice live pests, droppings, nests, unusual noises, damaged wood, chewed materials, food contamination or unpleasant odours. Our team can inspect the property and recommend a suitable treatment.",
    },
    {
      q: "Is professional pest control safe?",
      a: "Professional pest control can be performed safely when treatment instructions are followed. Acuity Pest Controls uses suitable treatment methods based on the pest, property type and level of infestation.",
    },
    {
      q: "How long does pest control treatment take?",
      a: "Treatment time depends on the pest, property size, infestation level and treatment method. Some services can be completed in one visit, while severe infestations may require monitoring or follow-up treatment.",
    },
    {
      q: "Do you provide pest control for commercial properties?",
      a: "Yes. We provide pest management services for offices, restaurants, hotels, hospitals, warehouses, educational institutions, apartments and other commercial properties across Bangalore.",
    },
  ];

  const aboutSchema = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": "https://www.acuitypestcontrols.com/about#aboutpage",
      name: "About Acuity Pest Controls",
      url: "https://www.acuitypestcontrols.com/about",
      description:
        "Learn about Acuity Pest Controls, a professional pest control company providing residential and commercial pest management services across Bangalore.",
      inLanguage: "en-IN",
      mainEntity: {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://www.acuitypestcontrols.com/#business",
        name: "Acuity Pest Controls",
        url: "https://www.acuitypestcontrols.com/",
        image: "https://www.acuitypestcontrols.com/logo.png",
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
        areaServed: {
          "@type": "City",
          name: "Bengaluru",
        },
        knowsAbout: [
          "Cockroach Control",
          "Termite Treatment",
          "Bed Bug Treatment",
          "Rodent Control",
          "Mosquito Management",
          "Ant Control",
          "Wood Borer Treatment",
          "Commercial Pest Management",
        ],
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

  const strengths = [
    {
      number: "01",
      title: "Experienced Pest-Control Team",
      description:
        "Our trained professionals assess the property, identify pest activity and recommend treatment based on the infestation and property type.",
    },
    {
      number: "02",
      title: "Customer-Focused Service",
      description:
        "We understand the customer’s concern, explain the treatment process clearly and provide solutions suitable for residential and commercial properties.",
    },
    {
      number: "03",
      title: "Property-Specific Treatment",
      description:
        "Every pest problem is different. Our treatment plan is selected according to the pest, infestation level, affected area and surrounding conditions.",
    },
    {
      number: "04",
      title: "Service Support",
      description:
        "Our team provides service guidance, preventive recommendations and follow-up support when required after the treatment.",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <SEO
        title="About Acuity Pest Controls | Pest Control Company Bangalore"
        description="Learn about Acuity Pest Controls, a trusted pest control company in Bangalore providing residential and commercial pest management services."
        keywords="about Acuity Pest Controls, pest control company Bangalore, pest control experts Bangalore, professional pest control Bangalore, pest management company Bangalore"
        canonical="https://www.acuitypestcontrols.com/about"
        image="https://www.acuitypestcontrols.com/logo.png"
        schema={aboutSchema}
      />

      {/* HERO BANNER */}
      <section className="relative h-[45vh] overflow-hidden md:h-[115vh]">
        <img
          src={bannerImage}
          alt="Acuity Pest Controls professional pest control company in Bangalore"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />

        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* ABOUT INTRO */}
      <section className="bg-[#f8fcfb] py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <span className="mb-5 inline-block rounded-full bg-green-600 px-5 py-2 font-bold text-white">
              Professional Pest Management
            </span>

            <h1 className="mb-6 text-3xl font-black text-[#063b3f] md:text-5xl">
              About Acuity Pest Controls
            </h1>

            <p className="mb-5 leading-8 text-gray-700">
              Acuity Pest Controls is a professional pest control company in
              Bangalore providing effective pest management solutions for
              residential, commercial and industrial properties.
            </p>

            <p className="mb-5 leading-8 text-gray-700">
              We provide services for cockroaches, termites, bed bugs, rodents,
              mosquitoes, ants, wood borers and other common pests affecting
              homes and businesses.
            </p>

            <p className="mb-8 leading-8 text-gray-700">
              Our team focuses on identifying the source of pest activity,
              selecting a suitable treatment and helping customers reduce the
              risk of future infestations.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Controls,%20I%20need%20pest%20control%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-2xl bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-700"
              >
                WhatsApp Us
              </a>

              <Link
                to="/services"
                className="inline-block rounded-2xl border border-green-600 px-8 py-4 font-bold text-green-700 transition hover:bg-green-50"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[35px]">
            <img
              src={bannerImage1}
              alt="Professional pest control technician from Acuity Pest Controls"
              className="h-full w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* COMPANY STATISTICS */}
      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:px-6 lg:grid-cols-4">
          {[
            ["19+", "Years of Experience"],
            ["15K+", "Treatments Completed"],
            ["5000+", "Customers Served"],
            ["24/7", "Customer Support"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-green-100 bg-[#f6fffb] p-5 text-center shadow-sm"
            >
              <h2 className="text-2xl font-black text-[#063b3f] sm:text-3xl">
                {number}
              </h2>
              <p className="mt-2 text-sm font-semibold text-gray-600 sm:text-base">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* VISION AND MISSION */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2">
          <div className="rounded-[30px] border border-green-100 bg-[#f6fffb] p-8">
            <h2 className="mb-4 text-3xl font-black text-[#063b3f]">
              Our Vision
            </h2>

            <p className="mb-6 leading-7 text-gray-600">
              To be a trusted pest management company in Bangalore by providing
              dependable services, responsible treatment methods and long-term
              pest prevention support.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {vision.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white p-4 font-bold text-[#063b3f] shadow-sm"
                >
                  ✅ {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] bg-[#063b3f] p-8 text-white">
            <h2 className="mb-4 text-3xl font-black">Our Mission</h2>

            <p className="mb-6 leading-7 text-gray-200">
              To help customers protect their properties through professional
              inspection, suitable treatment, transparent service and practical
              pest-prevention guidance.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {mission.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/10 p-4 font-bold"
                >
                  ✅ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#eef8f4] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="font-bold uppercase tracking-[3px] text-green-700">
              Why Choose Us
            </span>

            <h2 className="mt-4 text-3xl font-black text-[#063b3f] md:text-5xl">
              Trusted Pest Control Experts in Bangalore
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              We combine professional inspection, suitable treatments and
              customer-focused service to manage pest problems in homes and
              commercial properties.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {strengths.map((item) => (
              <div
                key={item.number}
                className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm"
              >
                <span className="text-sm font-black text-green-600">
                  {item.number}
                </span>

                <h3 className="mb-3 mt-2 text-2xl font-black text-[#063b3f]">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESIDENTIAL AND COMMERCIAL SERVICES */}
      <section className="bg-[#063b3f] py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <span className="font-bold uppercase tracking-[3px] text-green-300">
              Complete Pest Management
            </span>

            <h2 className="mb-6 mt-4 text-3xl font-black md:text-5xl">
              Pest Control for Homes and Businesses
            </h2>

            <p className="leading-8 text-gray-200">
              We provide pest management services for apartments, independent
              houses, offices, restaurants, hotels, hospitals, warehouses,
              schools, colleges and other commercial properties across
              Bangalore.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Residential Pest Control",
              "Commercial Pest Control",
              "Termite Management",
              "Cockroach Control",
              "Bed Bug Treatment",
              "Rodent Management",
              "Mosquito Management",
              "Annual Maintenance Services",
            ].map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-white/10 bg-white/10 p-5 font-bold"
              >
                ✅ {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f6fffb] py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <span className="font-bold uppercase tracking-[3px] text-green-700">
              Have Questions?
            </span>

            <h2 className="mt-4 text-3xl font-black text-[#063b3f] md:text-5xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-gray-600">
              Find answers about our pest control treatments, safety, service
              areas and commercial pest management.
            </p>
          </div>

          <div className="space-y-5">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm sm:p-6"
              >
                <h3 className="mb-3 text-lg font-black text-[#063b3f] sm:text-xl">
                  {item.q}
                </h3>

                <p className="leading-7 text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <span className="font-bold uppercase tracking-[3px] text-green-700">
              Service Areas
            </span>

            <h2 className="mt-4 text-3xl font-black text-[#063b3f] md:text-5xl">
              Pest Control Service Areas in Bangalore
            </h2>

            <p className="mx-auto mt-4 max-w-3xl leading-7 text-gray-600">
              Acuity Pest Controls serves residential and commercial customers
              across major localities in Bangalore.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((area) => (
              <span
                key={area}
                className="rounded-full border border-green-100 bg-[#f6fffb] px-4 py-2 text-sm font-semibold text-[#063b3f]"
              >
                Pest Control in {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#063b3f] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <h2 className="mb-5 text-3xl font-black md:text-5xl">
            Book Pest Control Service in Bangalore
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-gray-200">
            Contact Acuity Pest Controls for professional residential and
            commercial pest management services across Bangalore.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919941229005"
              className="inline-block rounded-2xl bg-green-600 px-8 py-4 font-bold transition hover:bg-green-700"
            >
              Call Now: +91 99412 29005
            </a>

            <a
              href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Controls,%20I%20need%20pest%20control%20service%20in%20Bangalore."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-2xl border border-white px-8 py-4 font-bold transition hover:bg-white hover:text-[#063b3f]"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUS;