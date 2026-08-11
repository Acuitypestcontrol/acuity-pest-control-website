import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PestControlLandingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    service: "",
    propertyType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] = useState({
    type: "",
    message: "",
  });

  const phoneNumber = "919941229005";
  const displayPhone = "+91 99412 29005";

  const siteUrl = "https://www.acuitypestcontrols.com";
  const pageUrl = `${siteUrl}/`;

  const pageTitle = "Pest Control Services in Bangalore | Acuity Pest Control";

  const pageDescription =
    "Professional pest control services in Bangalore for cockroaches, termites, bed bugs, rodents, mosquitoes and other pests. Book residential or commercial pest control with Acuity.";

  const socialImage = `${siteUrl}/logo192.png`;

  /*
   * Generate the enquiry number once for this page load.
   * It is used both on the form and in the submitted lead.
   */
  const today = new Date();

  const caseFileNumber = `AC-${today.getFullYear()}-${String(
    today.getMonth() + 1,
  ).padStart(2, "0")}${String(today.getDate()).padStart(2, "0")}-${String(
    today.getHours(),
  ).padStart(2, "0")}${String(today.getMinutes()).padStart(2, "0")}${String(
    today.getSeconds(),
  ).padStart(2, "0")}`;

  const primaryServices = [
    {
      code: "01",
      icon: "🪳",
      title: "Cockroach Control in Bangalore",
      description:
        "Professional cockroach gel baiting and residual spray treatment for kitchens, bathrooms, apartments, villas, offices and commercial properties.",
      zone: "Kitchen · Bathroom",
      href: "/cockroach-management-service",
    },
    {
      code: "02",
      icon: "🛏️",
      title: "Bed Bug Treatment in Bangalore",
      description:
        "Targeted bed bug treatment for mattresses, beds, furniture, bedrooms, hostels, hotels and residential properties.",
      zone: "Bedroom · Furniture",
      href: "/bed-bug-treatment",
    },
    {
      code: "03",
      icon: "🏠",
      title: "Anti-Termite Treatment in Bangalore",
      description:
        "Pre-construction and post-construction termite treatment for homes, apartments, villas, offices and commercial buildings.",
      zone: "Walls · Flooring",
      href: "/anti-termite-treatment",
    },
    {
      code: "04",
      icon: "🐀",
      title: "Rodent and Rat Control in Bangalore",
      description:
        "Professional rat and rodent management using baiting, trapping and entry-point control for homes, offices and warehouses.",
      zone: "Indoor · Perimeter",
      href: "/rodent-management-service",
    },
    {
      code: "05",
      icon: "🦟",
      title: "Mosquito Control in Bangalore",
      description:
        "Mosquito fogging and breeding-source control for apartments, villas, offices, schools, hotels and outdoor common areas.",
      zone: "Indoor · Outdoor",
      href: "/mosquito-management-service",
    },
    {
      code: "06",
      icon: "🧴",
      title: "General Pest Control in Bangalore",
      description:
        "Complete pest control for cockroaches, ants, spiders and other common pests using professional-grade treatment.",
      zone: "Complete Property",
      href: "/general-pest-control",
    },
  ];

  const propertyTypes = [
    "1 RK",
    "1 BHK",
    "2 BHK",
    "3 BHK",
    "4 BHK",
    "Villa",
    "Apartment",
    "Independent House",
    "Office",
    "Shop",
    "Restaurant",
    "Hotel",
    "Hospital",
    "School",
    "College",
    "Warehouse",
    "Factory",
    "Industrial Property",
  ];

  const benefits = [
    "Trained and background-verified technicians",
    "Residential and commercial pest control",
    "Professional pest identification before treatment",
    "Same-day and next-day appointments, subject to availability",
    "Modern equipment and professional-grade products",
    "Transparent quotation before treatment",
    "Service coverage across Bangalore",
    "Treatment guidance and after-service support",
  ];

  const residentialProperties = [
    "1 RK homes",
    "1 BHK apartments",
    "2 BHK apartments",
    "3 BHK apartments",
    "4 BHK apartments",
    "Villas",
    "Independent houses",
    "Gated communities",
    "Apartment common areas",
    "Rental properties",
  ];

  const commercialProperties = [
    "Corporate offices",
    "IT companies and campuses",
    "Hotels and hospitality properties",
    "Hospitals and healthcare facilities",
    "Restaurants and commercial kitchens",
    "Schools and colleges",
    "Warehouses and logistics facilities",
    "Factories and industrial units",
    "Retail shops and showrooms",
    "Construction sites",
  ];

  const serviceAreas = [
    "JP Nagar",
    "Jayanagar",
    "HSR Layout",
    "Whitefield",
    "Electronic City",
    "Koramangala",
    "Indiranagar",
    "BTM Layout",
    "Bannerghatta Road",
    "Banashankari",
    "RR Nagar",
    "Hebbal",
    "Marathahalli",
    "Sarjapur Road",
    "Bellandur",
    "KR Puram",
    "Yelahanka",
    "Kengeri",
    "Rajajinagar",
    "Malleshwaram",
    "Basavanagudi",
    "Peenya",
    "Mahadevapura",
    "Brookefield",
    "Kadugodi",
    "Varthur",
    "Panathur",
    "Bommanahalli",
    "Hulimavu",
    "Uttarahalli",
    "Kanakapura Road",
    "Attibele",
    "Nelamangala",
    "Doddaballapur",
    "Devanahalli",
  ];

  const pestsCovered = [
    "Cockroaches",
    "Termites",
    "Bed bugs",
    "Mosquitoes",
    "Rats and rodents",
    "Ants",
    "Spiders",
    "Lizards",
    "Wood borers",
    "House flies",
    "Drain flies",
    "Ticks",
    "Fleas",
    "Garden pests",
    "Reptiles",
  ];

  const serviceCoverage = [
    {
      code: "SRV-01",
      label: "General Pest Control",
      description:
        "Complete treatment for cockroaches, ants, spiders and other household pests.",
      href: "/general-pest-control",
    },
    {
      code: "SRV-02",
      label: "Cockroach Management Service",
      description:
        "Gel baiting and residual treatment for kitchens, bathrooms and commercial food areas.",
      href: "/cockroach-management-service",
    },
    {
      code: "SRV-03",
      label: "Bed Bug Treatment",
      description:
        "Targeted treatment for mattresses, beds, furniture and infested rooms.",
      href: "/bed-bug-treatment",
    },
    {
      code: "SRV-04",
      label: "Anti-Termite Treatment",
      description:
        "Professional anti-termite treatment for existing homes and commercial buildings.",
      href: "/anti-termite-treatment",
    },
    {
      code: "SRV-05",
      label: "Post Construction Termite Treatment",
      description:
        "Drilling and chemical treatment for active termite infestations.",
      href: "/post-construction-termite-treatment",
    },
    {
      code: "SRV-06",
      label: "Pre Construction Termite Treatment",
      description:
        "Soil and foundation treatment before construction to prevent termites.",
      href: "/pre-construction-termite-treatment",
    },
    {
      code: "SRV-07",
      label: "Rodent Management Service",
      description:
        "Professional baiting, trapping and rodent entry-point management.",
      href: "/rodent-management-service",
    },
    {
      code: "SRV-08",
      label: "Mosquito Management Service",
      description:
        "Mosquito fogging and breeding-source control for indoor and outdoor areas.",
      href: "/mosquito-management-service",
    },
    {
      code: "SRV-09",
      label: "Ant Control Treatment",
      description:
        "Professional treatment for indoor and outdoor ant infestations.",
      href: "/ant-control-treatment",
    },
    {
      code: "SRV-10",
      label: "Wood Borer Treatment",
      description:
        "Treatment for wooden furniture, doors, frames and structural woodwork.",
      href: "/wood-borer-treatment",
    },
    {
      code: "SRV-11",
      label: "Hotels and Hospitals Pest Control",
      description:
        "Specialised pest management for hotels, hospitals and healthcare properties.",
      href: "/pest-control-hotels-hospitals",
    },
    {
      code: "SRV-12",
      label: "Warehouse Pest Management",
      description:
        "Integrated pest management for warehouses and storage facilities.",
      href: "/warehouse-pest-management",
    },
    {
      code: "SRV-13",
      label: "Office Pest Control",
      description:
        "Professional pest control for offices, IT campuses and workplaces.",
      href: "/office-pest-control",
    },
    {
      code: "SRV-14",
      label: "Educational Institution Pest Control",
      description:
        "Pest control for schools, colleges and educational campuses.",
      href: "/educational-institution-pest-control",
    },
    {
      code: "SRV-15",
      label: "Residential Common Area Treatment",
      description:
        "Pest management for corridors, basements, gardens and common areas.",
      href: "/common-area-treatment-residential-complex",
    },
    {
      code: "SRV-16",
      label: "Disinfection Services",
      description:
        "Professional sanitisation for residential and commercial properties.",
      href: "/disinfection-services",
    },
  ];

  const internalLinks = [
    {
      category: "Residential Pest Control",
      links: [
        {
          label: "General Pest Control",
          href: "/general-pest-control",
        },
        {
          label: "Cockroach Control Service",
          href: "/cockroach-management-service",
        },
        {
          label: "Bed Bug Treatment",
          href: "/bed-bug-treatment",
        },
        {
          label: "Anti-Termite Treatment",
          href: "/anti-termite-treatment",
        },
        {
          label: "Post Construction Termite Treatment",
          href: "/post-construction-termite-treatment",
        },
        {
          label: "Mosquito Control Service",
          href: "/mosquito-management-service",
        },
        {
          label: "Rodent and Rat Control",
          href: "/rodent-management-service",
        },
        {
          label: "Ant Control Treatment",
          href: "/ant-control-treatment",
        },
        {
          label: "Wood Borer Treatment",
          href: "/wood-borer-treatment",
        },
      ],
    },
    {
      category: "Commercial Pest Control",
      links: [
        {
          label: "Pre Construction Termite Treatment",
          href: "/pre-construction-termite-treatment",
        },
        {
          label: "Office Pest Control",
          href: "/office-pest-control",
        },
        {
          label: "Warehouse Pest Management",
          href: "/warehouse-pest-management",
        },
        {
          label: "Hotels and Hospitals Pest Control",
          href: "/pest-control-hotels-hospitals",
        },
        {
          label: "Educational Institution Pest Control",
          href: "/educational-institution-pest-control",
        },
        {
          label: "Apartment Common Area Treatment",
          href: "/common-area-treatment-residential-complex",
        },
        {
          label: "Disinfection Services",
          href: "/disinfection-services",
        },
      ],
    },
    {
      category: "Explore Acuity",
      links: [
        {
          label: "View All Pest Control Services",
          href: "/services",
        },
        {
          label: "Pest Identification Guide",
          href: "/pest-identification",
        },
        {
          label: "Pest Control Blogs",
          href: "/blogs",
        },
        {
          label: "About Acuity Pest Control",
          href: "/about",
        },
        {
          label: "Contact Acuity Pest Control",
          href: "/contact",
        },
      ],
    },
  ];

  const relatedLinks = [
    {
      label: "How to Get Rid of Cockroaches",
      href: "/blogs/get-rid-of-cockroaches",
    },
    {
      label: "Signs of Termite Infestation in Your Home",
      href: "/blogs/signs-of-termite-infestation",
    },
    {
      label: "Professional Pest Control vs DIY",
      href: "/blogs/pest-control-vs-diy",
    },
    {
      label: "Complete Bed Bug Treatment Guide",
      href: "/blogs/bed-bug-treatment",
    },
    {
      label: "Rat Control Tips for Homes",
      href: "/blogs/rat-control-tips-for-homes",
    },
    {
      label: "Mosquito Prevention During Rainy Season",
      href: "/blogs/mosquito-prevention-during-rainy-season",
    },
    {
      label: "Top 10 Household Pests in Bangalore",
      href: "/blogs/top-10-household-pests-in-bangalore",
    },
    {
      label: "How Often Should Pest Control Be Done?",
      href: "/blogs/how-often-should-pest-control-be-done",
    },
    {
      label: "German Cockroach vs American Cockroach",
      href: "/blogs/german-cockroach-vs-american-cockroach",
    },
    {
      label: "Termite Treatment Cost in Bangalore",
      href: "/blogs/termite-treatment-cost-bangalore",
    },
    {
      label: "How to Prevent Ant Infestation at Home",
      href: "/blogs/how-to-prevent-ant-infestation-at-home",
    },
    {
      label: "Why Regular Pest Control Is Important for Businesses",
      href: "/blogs/why-regular-pest-control-is-important-for-businesses",
    },
    {
      label: "Pest Control Checklist for New Homes",
      href: "/blogs/pest-control-checklist-for-new-homes",
    },
    {
      label: "Why Cockroaches Enter Your Kitchen",
      href: "/blogs/why-cockroaches-enter-your-kitchen",
    },
    {
      label: "View All Pest Control Blogs",
      href: "/blogs",
    },
  ];

  const faqs = [
    {
      q: "How much does pest control cost in Bangalore?",
      a: "The cost depends on pest type, infestation level, property size and treatment required. General pest control usually costs less than termite or bed bug treatment. Submit your details for an exact quotation.",
    },
    {
      q: "Do you provide pest control services near me in Bangalore?",
      a: "Yes. Acuity provides pest control across JP Nagar, Jayanagar, HSR Layout, Whitefield, Electronic City, Koramangala, BTM Layout, Hebbal, Marathahalli, Bellandur and other Bangalore areas.",
    },
    {
      q: "Do you provide same-day pest control in Bangalore?",
      a: "Same-day and next-day appointments may be available depending on technician availability, location and service type.",
    },
    {
      q: "Is pest control safe for children and pets?",
      a: "Our technicians explain the required safety precautions. Depending on the treatment, children and pets may need to stay away from the treated area for a specified time.",
    },
    {
      q: "How often should pest control be done?",
      a: "Preventive pest control is commonly scheduled every three to six months. Commercial properties may require monthly pest-management visits.",
    },
    {
      q: "Which treatment works best for cockroaches?",
      a: "Cockroach gel baiting combined with targeted residual treatment in cracks, crevices and activity areas is commonly used.",
    },
    {
      q: "How long does termite treatment last?",
      a: "The protection period depends on the treatment method, building condition, chemical and warranty plan.",
    },
    {
      q: "Can bed bugs be removed completely?",
      a: "Bed bug control requires detailed treatment of mattresses, beds, furniture and hiding areas. Heavy infestations may need follow-up treatment.",
    },
    {
      q: "Do you provide mosquito fogging in Bangalore?",
      a: "Yes. We provide mosquito fogging and breeding-source control for homes, apartments, offices, schools and commercial properties.",
    },
    {
      q: "Do you provide rat control for homes and offices?",
      a: "Yes. Rodent management includes inspection, baiting, trapping and recommendations for closing entry points.",
    },
    {
      q: "Do you provide pest control for apartments?",
      a: "Yes. We serve 1 RK, 1 BHK, 2 BHK, 3 BHK and 4 BHK apartments, villas, independent houses and common areas.",
    },
    {
      q: "Do you provide commercial pest control?",
      a: "Yes. We serve offices, IT campuses, hotels, hospitals, restaurants, schools, warehouses and factories.",
    },
    {
      q: "Do you provide annual pest-control contracts?",
      a: "Annual and scheduled pest-management plans may be arranged for businesses, commercial properties and apartment communities.",
    },
    {
      q: "How can I book pest control with Acuity?",
      a: "Fill in the quotation form, contact us on WhatsApp or call +91 99412 29005.",
    },
  ];

  /*
   * SEO / Structured Data
   */
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: "Acuity Pest Control Services",
    url: pageUrl,
    telephone: "+91 99412 29005",
    description: pageDescription,
    priceRange: "₹₹",
    image: socialImage,
    address: {
      "@type": "PostalAddress",
      streetAddress: "JP Nagar 6th Phase, Yelachenahalli",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560078",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: "Bengaluru",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 99412 29005",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Kannada", "Hindi"],
    },
    serviceType: serviceCoverage.map((service) => service.label),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Pest Control Services in Bangalore",
    serviceType: "Residential and Commercial Pest Control",
    description: pageDescription,
    url: pageUrl,
    provider: {
      "@type": "LocalBusiness",
      name: "Acuity Pest Control Services",
      telephone: "+91 99412 29005",
      url: pageUrl,
    },
    areaServed: {
      "@type": "City",
      name: "Bengaluru",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  /*
   * Form handlers
   */
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const createWhatsAppMessage = () => {
    return `Hello Acuity Pest Control,

I would like to book a pest control service.

Enquiry Number: ${caseFileNumber}
Name: ${formData.name || "Not provided"}
Phone: ${formData.phone || "Not provided"}
Location: ${formData.location || "Not provided"}
Service Required: ${formData.service || "Not selected"}
Property Type: ${formData.propertyType || "Not selected"}
Additional Details: ${formData.message || "Not provided"}

Please contact me with the service details and quotation.`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitStatus({
      type: "",
      message: "",
    });

    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.location.trim() ||
      !formData.service
    ) {
      setSubmitStatus({
        type: "error",
        message:
          "Please fill in your name, phone number, location and service.",
      });

      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, "").slice(-10);

    if (!/^\d{10}$/.test(cleanPhone)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid 10-digit Indian phone number.",
      });

      return;
    }

    setIsSubmitting(true);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      createWhatsAppMessage(),
    )}`;

    /*
     * Open WhatsApp window immediately.
     * This helps prevent popup blocking after the async request.
     */
    const whatsappWindow = window.open("", "_blank", "noopener,noreferrer");

    try {
      const response = await fetch("https://formspree.io/f/mzeppdwo", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: cleanPhone,
          location: formData.location.trim(),
          service: formData.service,
          propertyType: formData.propertyType || "Not selected",
          message: formData.message.trim() || "Not provided",

          enquiryNumber: caseFileNumber,

          leadSource: "Acuity Pest Control Website",

          landingPage: "Pest Control Services in Bangalore",

          website: pageUrl,

          submittedAt: new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
          }),

          _subject: `New Website Lead - ${formData.service} - ${caseFileNumber}`,
        }),
      });

      if (!response.ok) {
        let errorMessage = "Unable to submit your enquiry. Please try again.";

        try {
          const errorData = await response.json();

          if (Array.isArray(errorData?.errors) && errorData.errors.length > 0) {
            errorMessage = errorData.errors
              .map((error) => error.message)
              .filter(Boolean)
              .join(" ");
          }
        } catch {
          // Keep default message.
        }

        throw new Error(errorMessage);
      }

      setSubmitStatus({
        type: "success",
        message:
          "Thank you! Your enquiry has been sent to the Acuity team. WhatsApp is opening now.",
      });

      setFormData({
        name: "",
        phone: "",
        location: "",
        service: "",
        propertyType: "",
        message: "",
      });

      if (whatsappWindow) {
        whatsappWindow.location.href = whatsappURL;
      } else {
        window.location.href = whatsappURL;
      }
    } catch (error) {
      if (whatsappWindow) {
        whatsappWindow.close();
      }

      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById("booking-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />

        <meta
          name="keywords"
          content="pest control Bangalore, pest control services Bangalore, pest control near me Bangalore, cockroach control Bangalore, termite treatment Bangalore, bed bug treatment Bangalore, rat control Bangalore, mosquito control Bangalore, residential pest control Bangalore, commercial pest control Bangalore"
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="website" />

        <meta property="og:title" content={pageTitle} />

        <meta property="og:description" content={pageDescription} />

        <meta property="og:url" content={pageUrl} />

        <meta property="og:image" content={socialImage} />

        <meta
          property="og:image:alt"
          content="Acuity Pest Control Services in Bangalore"
        />

        <meta property="og:site_name" content="Acuity Pest Control Services" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content={pageTitle} />

        <meta name="twitter:description" content={pageDescription} />

        <meta name="twitter:image" content={socialImage} />

        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>

        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <style>{`
        .font-display {
          font-family: "Oswald", "Arial Narrow", sans-serif;
          letter-spacing: 0.01em;
        }

        .font-body {
          font-family: "Inter", system-ui, sans-serif;
        }

        .font-mono {
          font-family: "IBM Plex Mono", "Courier New", monospace;
        }

        .hazard-stripes {
          background-image: repeating-linear-gradient(
            135deg,
            #E3A23E 0 18px,
            #12181A 18px 36px
          );
          background-size: 51px 51px;
        }

        .hazard-stripes-anim {
          animation: acuitySlide 6s linear infinite;
        }

        @keyframes acuitySlide {
          from {
            background-position: 0 0;
          }

          to {
            background-position: 51px 0;
          }
        }

        .ticket-edge {
          -webkit-mask-image:
            radial-gradient(
              circle 7px at 0 50%,
              transparent 7px,
              black 7.5px
            ),
            radial-gradient(
              circle 7px at 100% 50%,
              transparent 7px,
              black 7.5px
            );

          -webkit-mask-composite: source-in;
          mask-composite: intersect;
        }

        .dot-grid {
          background-image: radial-gradient(
            circle,
            rgba(246, 242, 231, 0.14) 1px,
            transparent 1px
          );

          background-size: 24px 24px;
        }

        .acuity-card-lift {
          transition:
            transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .acuity-card-lift:hover {
          transform: translateY(-6px);
          box-shadow:
            0 20px 45px -18px rgba(18, 24, 26, 0.35);
        }

        .acuity-pulse {
          animation: acuityPulse 2.2s ease-in-out infinite;
        }

        @keyframes acuityPulse {
          0%,
          100% {
            box-shadow:
              0 0 0 0 rgba(227, 162, 62, 0.45);
          }

          50% {
            box-shadow:
              0 0 0 10px rgba(227, 162, 62, 0);
          }
        }

        .acuity-fab-pulse {
          animation: acuityFabPulse 2.4s ease-in-out infinite;
        }

        @keyframes acuityFabPulse {
          0%,
          100% {
            box-shadow:
              0 0 0 0 rgba(37, 211, 102, 0.5);
          }

          50% {
            box-shadow:
              0 0 0 14px rgba(37, 211, 102, 0);
          }
        }

        .acuity-corner-tag {
          clip-path: polygon(
            0 0,
            100% 0,
            100% 70%,
            50% 100%,
            0 70%
          );
        }

        .acuity-underline-grow {
          position: relative;
        }

        .acuity-underline-grow::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          height: 3px;
          width: 42px;
          background: #E3A23E;
          border-radius: 999px;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>

      <main
        className="font-body min-h-screen bg-[#F6F2E7] text-[#1C2321]"
        id="top"
      >
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#12181A]">
          <div className="hazard-stripes hazard-stripes-anim h-2 w-full opacity-90" />

          <div className="dot-grid absolute inset-0" />

          <div
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-20 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #E3A23E 0%, transparent 70%)",
            }}
          />

          <div
            className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full opacity-20 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #0E3B39 0%, transparent 70%)",
            }}
          />

          <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E3A23E]/50 bg-[#E3A23E]/10 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#E3A23E]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#E3A23E]" />
                Bangalore residential and commercial pest control
              </div>

              <h1 className="font-display max-w-3xl text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                Professional Pest Control Services in Bangalore
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Looking for professional pest control near you in Bangalore?
                Acuity provides{" "}
                <a
                  href="/cockroach-management-service"
                  className="font-semibold text-[#E3A23E] underline decoration-dotted underline-offset-4 hover:text-white"
                >
                  cockroach control
                </a>
                ,{" "}
                <a
                  href="/anti-termite-treatment"
                  className="font-semibold text-[#E3A23E] underline decoration-dotted underline-offset-4 hover:text-white"
                >
                  termite treatment
                </a>
                ,{" "}
                <a
                  href="/bed-bug-treatment"
                  className="font-semibold text-[#E3A23E] underline decoration-dotted underline-offset-4 hover:text-white"
                >
                  bed bug treatment
                </a>
                ,{" "}
                <a
                  href="/rodent-management-service"
                  className="font-semibold text-[#E3A23E] underline decoration-dotted underline-offset-4 hover:text-white"
                >
                  rodent control
                </a>{" "}
                and{" "}
                <a
                  href="/mosquito-management-service"
                  className="font-semibold text-[#E3A23E] underline decoration-dotted underline-offset-4 hover:text-white"
                >
                  mosquito control
                </a>{" "}
                for homes, apartments, offices and commercial properties.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#E3A23E] px-7 py-4 text-center font-bold text-[#12181A] shadow-xl transition hover:-translate-y-1 hover:bg-[#f0b458]"
                >
                  Get a Free Quotation
                </button>

                <a
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    "Hello Acuity Pest Control, I need pest control service in Bangalore. Please share the service details and quotation.",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/25 bg-white/5 px-7 py-4 text-center font-bold text-white backdrop-blur transition hover:bg-white/10"
                >
                  Message on WhatsApp
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ["19+", "Years in the field"],
                  ["15K+", "Treatments completed"],
                  ["24/7", "Enquiry support"],
                  ["BLR", "Bangalore-wide service"],
                ].map(([number, label]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:border-[#E3A23E]/40 hover:bg-white/10"
                  >
                    <p className="font-display text-2xl font-bold text-[#E3A23E]">
                      {number}
                    </p>

                    <p className="mt-1 text-xs leading-snug text-white/60">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FORM */}
            <div id="booking-form" className="relative scroll-mt-24">
              <div className="ticket-edge rounded-2xl bg-[#F6F2E7] p-5 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)] sm:p-7">
                <div className="mb-5 flex items-start justify-between border-b border-dashed border-[#12181A]/20 pb-4">
                  <div>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0E3B39]">
                      Enquiry · No. {caseFileNumber}
                    </p>

                    <h2 className="font-display mt-1 text-2xl font-bold uppercase text-[#12181A] sm:text-3xl">
                      Request a Free Pest Control Quote
                    </h2>
                  </div>

                  <span className="acuity-corner-tag hidden shrink-0 bg-[#B8442F] px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-widest text-white sm:block">
                    Open
                  </span>
                </div>

                <p className="mb-5 text-sm leading-6 text-[#5B6462]">
                  Share your location, pest problem and property type. Your
                  enquiry will be sent to our team and WhatsApp will open for
                  quick confirmation.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block font-mono text-xs font-bold uppercase tracking-wide text-[#12181A]/70"
                      >
                        Name *
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        autoComplete="name"
                        required
                        className="w-full rounded-xl border border-[#12181A]/20 bg-white px-4 py-3 outline-none transition focus:border-[#0E3B39] focus:ring-4 focus:ring-[#0E3B39]/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block font-mono text-xs font-bold uppercase tracking-wide text-[#12181A]/70"
                      >
                        Phone Number *
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit number"
                        autoComplete="tel"
                        maxLength={15}
                        required
                        className="w-full rounded-xl border border-[#12181A]/20 bg-white px-4 py-3 outline-none transition focus:border-[#0E3B39] focus:ring-4 focus:ring-[#0E3B39]/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="mb-1.5 block font-mono text-xs font-bold uppercase tracking-wide text-[#12181A]/70"
                    >
                      Location in Bangalore *
                    </label>

                    <input
                      id="location"
                      name="location"
                      type="text"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Example: JP Nagar, Whitefield or 560078"
                      required
                      className="w-full rounded-xl border border-[#12181A]/20 bg-white px-4 py-3 outline-none transition focus:border-[#0E3B39] focus:ring-4 focus:ring-[#0E3B39]/10"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-1.5 block font-mono text-xs font-bold uppercase tracking-wide text-[#12181A]/70"
                      >
                        Select Service *
                      </label>

                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-[#12181A]/20 bg-white px-4 py-3 outline-none transition focus:border-[#0E3B39] focus:ring-4 focus:ring-[#0E3B39]/10"
                      >
                        <option value="">Choose service</option>

                        <option value="General Pest Control">
                          General Pest Control
                        </option>

                        <option value="Cockroach Control">
                          Cockroach Control
                        </option>

                        <option value="Bed Bug Treatment">
                          Bed Bug Treatment
                        </option>

                        <option value="Anti-Termite Treatment">
                          Anti-Termite Treatment
                        </option>

                        <option value="Pre Construction Termite Treatment">
                          Pre Construction Termite Treatment
                        </option>

                        <option value="Post Construction Termite Treatment">
                          Post Construction Termite Treatment
                        </option>

                        <option value="Rodent and Rat Control">
                          Rodent and Rat Control
                        </option>

                        <option value="Mosquito Control and Fogging">
                          Mosquito Control and Fogging
                        </option>

                        <option value="Lizard Control">Lizard Control</option>

                        <option value="Ant Control">Ant Control</option>

                        <option value="Spider Control">Spider Control</option>

                        <option value="Wood Borer Treatment">
                          Wood Borer Treatment
                        </option>

                        <option value="Fly Control">Fly Control</option>

                        <option value="Tick and Flea Control">
                          Tick and Flea Control
                        </option>

                        <option value="Warehouse Pest Management">
                          Warehouse Pest Management
                        </option>

                        <option value="Office Pest Control">
                          Office Pest Control
                        </option>

                        <option value="Hotel and Hospital Pest Control">
                          Hotel and Hospital Pest Control
                        </option>

                        <option value="Educational Institution Pest Control">
                          Educational Institution Pest Control
                        </option>

                        <option value="Residential Common Area Treatment">
                          Residential Common Area Treatment
                        </option>

                        <option value="Disinfection Services">
                          Disinfection Services
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="propertyType"
                        className="mb-1.5 block font-mono text-xs font-bold uppercase tracking-wide text-[#12181A]/70"
                      >
                        Property Type
                      </label>

                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#12181A]/20 bg-white px-4 py-3 outline-none transition focus:border-[#0E3B39] focus:ring-4 focus:ring-[#0E3B39]/10"
                      >
                        <option value="">Choose property</option>

                        {propertyTypes.map((property) => (
                          <option key={property} value={property}>
                            {property}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block font-mono text-xs font-bold uppercase tracking-wide text-[#12181A]/70"
                    >
                      Additional Details
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe the pest problem or preferred appointment time"
                      className="w-full resize-none rounded-xl border border-[#12181A]/20 bg-white px-4 py-3 outline-none transition focus:border-[#0E3B39] focus:ring-4 focus:ring-[#0E3B39]/10"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-[#0E3B39] px-6 py-4 text-base font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0a2b29] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {isSubmitting
                      ? "Sending Enquiry..."
                      : "Send Enquiry to Our Team"}
                  </button>

                  {submitStatus.message && (
                    <div
                      role="status"
                      aria-live="polite"
                      className={`rounded-xl border px-4 py-3 text-sm font-semibold ${
                        submitStatus.type === "success"
                          ? "border-green-200 bg-green-50 text-green-800"
                          : "border-red-200 bg-red-50 text-red-800"
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <p className="text-center text-xs text-[#5B6462]">
                    Your information is sent securely through Formspree and used
                    only to respond to your enquiry.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="hazard-stripes border-b border-[#12181A]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-[#12181A] px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
            {[
              "Professional treatment",
              "Quick response",
              "Trained technicians",
              "Bangalore-wide service",
            ].map((text) => (
              <div
                key={text}
                className="flex items-center justify-center gap-2 bg-[#12181A] px-3 py-5 text-center font-mono text-xs font-bold uppercase tracking-wide text-white sm:text-sm"
              >
                <span className="text-[#E3A23E]">✓</span>

                <span>{text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="scroll-mt-20 bg-[#F6F2E7] px-4 py-16 sm:px-6 md:py-20 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0E3B39]">
                Residential and commercial treatment
              </p>

              <h2 className="font-display mt-3 text-3xl font-bold uppercase text-[#12181A] sm:text-4xl">
                Popular Pest Control Services in Bangalore
              </h2>

              <p className="mt-4 leading-7 text-[#5B6462]">
                Our technicians inspect the affected property, identify pest
                activity and recommend a suitable treatment.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {primaryServices.map((service) => (
                <article
                  key={service.title}
                  className="acuity-card-lift group relative overflow-hidden rounded-2xl border border-[#12181A]/15 bg-white p-6"
                >
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#0E3B39]/5 transition group-hover:scale-125" />

                  <div className="relative flex items-start justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0E3B39]/8 text-3xl">
                      {service.icon}
                    </span>

                    <span className="font-mono text-xs font-bold text-[#12181A]/30">
                      NO.{service.code}
                    </span>
                  </div>

                  <h3 className="font-display relative mt-5 text-xl font-bold uppercase text-[#12181A]">
                    <a
                      href={service.href}
                      className="transition hover:text-[#0E3B39]"
                    >
                      {service.title}
                    </a>
                  </h3>

                  <p className="relative mt-3 leading-7 text-[#5B6462]">
                    {service.description}
                  </p>

                  <div className="relative mt-4 flex items-center justify-between border-t border-dashed border-[#12181A]/15 pt-4">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#0E3B39]">
                      Zone: {service.zone}
                    </span>

                    <button
                      type="button"
                      onClick={scrollToForm}
                      className="font-bold text-[#B8442F] transition group-hover:translate-x-1"
                    >
                      Book →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROPERTY COVERAGE */}
        <section className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0E3B39]">
                Property coverage
              </p>

              <h2 className="font-display mt-3 text-3xl font-bold uppercase text-[#12181A] sm:text-4xl">
                Residential and Commercial Pest Control in Bangalore
              </h2>

              <p className="mt-4 leading-7 text-[#5B6462]">
                We provide{" "}
                <a
                  href="/general-pest-control"
                  className="font-semibold text-[#0E3B39] underline decoration-dotted underline-offset-4"
                >
                  residential pest control
                </a>{" "}
                for homes and apartments, along with{" "}
                <a
                  href="/office-pest-control"
                  className="font-semibold text-[#0E3B39] underline decoration-dotted underline-offset-4"
                >
                  office pest control
                </a>
                ,{" "}
                <a
                  href="/warehouse-pest-management"
                  className="font-semibold text-[#0E3B39] underline decoration-dotted underline-offset-4"
                >
                  warehouse pest management
                </a>{" "}
                and specialised commercial treatment.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-[#12181A]/15 bg-[#F6F2E7] p-6 sm:p-8">
                <h3 className="font-display acuity-underline-grow inline-block text-2xl font-bold uppercase text-[#12181A]">
                  Residential Pest Control
                </h3>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {residentialProperties.map((property) => (
                    <div
                      key={property}
                      className="flex items-center gap-3 rounded-xl border border-[#12181A]/10 bg-white p-3 transition hover:border-[#0E3B39]/40"
                    >
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#0E3B39]/10 text-[10px] font-bold text-[#0E3B39]">
                        ✓
                      </span>

                      <span className="text-sm font-semibold">{property}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#12181A]/15 bg-[#12181A] p-6 text-white sm:p-8">
                <h3 className="font-display acuity-underline-grow inline-block text-2xl font-bold uppercase">
                  Commercial Pest Control
                </h3>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {commercialProperties.map((property) => (
                    <div
                      key={property}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-[#E3A23E]/40"
                    >
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#E3A23E]/15 text-[10px] font-bold text-[#E3A23E]">
                        ✓
                      </span>

                      <span className="text-sm font-semibold text-white/80">
                        {property}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PESTS */}
        <section className="bg-[#F6F2E7] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0E3B39]">
                  Pest identification
                </p>

                <h2 className="font-display mt-3 text-3xl font-bold uppercase leading-tight text-[#12181A] sm:text-4xl">
                  Common Pests We Control in Bangalore
                </h2>

                <p className="mt-5 leading-8 text-[#5B6462]">
                  Correct pest identification is important because each pest
                  requires a different treatment method.
                </p>

                <a
                  href="/pest-identification"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#12181A] px-6 py-4 font-bold text-white transition hover:bg-[#0E3B39]"
                >
                  View Pest Identification <span aria-hidden="true">→</span>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {pestsCovered.map((pest, index) => (
                  <div
                    key={pest}
                    className={`acuity-card-lift rounded-xl border p-4 ${
                      index === 0
                        ? "border-[#0E3B39] bg-[#0E3B39] text-white"
                        : "border-[#12181A]/15 bg-white text-[#12181A]"
                    }`}
                  >
                    <span className="font-mono text-[10px] font-bold opacity-50">
                      PEST-
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="mt-2 font-semibold">{pest}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EMERGENCY CTA */}
        <section className="relative overflow-hidden bg-[#B8442F] px-4 py-12 text-white sm:px-6 lg:px-8">
          <div className="dot-grid absolute inset-0 opacity-40" />

          <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                Urgent pest problem?
              </p>

              <h2 className="font-display mt-2 text-3xl font-bold uppercase sm:text-4xl">
                Same-Day Pest Control in Bangalore
              </h2>

              <p className="mt-3 max-w-3xl leading-7 text-white/80">
                Contact us for the earliest available appointment. Availability
                depends on location, technician schedule and treatment type.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:+${phoneNumber}`}
                className="rounded-full bg-white px-6 py-4 font-bold text-[#B8442F] shadow-lg transition hover:-translate-y-0.5"
              >
                Call {displayPhone}
              </a>

              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  "Hello Acuity Pest Control, I need an urgent pest control appointment in Bangalore.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 px-6 py-4 font-bold text-white transition hover:bg-white/10"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section
          id="pricing"
          className="scroll-mt-20 bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0E3B39]">
                Transparent quotation
              </p>

              <h2 className="font-display mt-3 text-3xl font-bold uppercase text-[#12181A] sm:text-4xl">
                Pest Control Services Bangalore Price Guide
              </h2>

              <p className="mx-auto mt-4 max-w-3xl leading-7 text-[#5B6462]">
                Prices vary depending on property size, infestation level,
                treatment method, visits and warranty.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                [
                  "Property size",
                  "Larger properties require more treatment material and technician time.",
                ],
                [
                  "Pest type",
                  "Cockroaches, termites, bed bugs and rodents require different treatments.",
                ],
                [
                  "Infestation",
                  "Heavy infestations may require additional treatment and follow-up.",
                ],
                [
                  "Treatment plan",
                  "One-time treatment and annual plans are priced differently.",
                ],
                [
                  "Warranty",
                  "Longer termite warranties may affect the final quotation.",
                ],
              ].map(([factor, description], index) => (
                <div
                  key={factor}
                  className="acuity-card-lift relative rounded-2xl border border-[#12181A]/15 bg-[#F6F2E7] p-6"
                >
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0E3B39]/40">
                    Factor {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="font-display mt-2 text-lg font-bold uppercase text-[#0E3B39]">
                    {factor}
                  </p>

                  <p className="mt-2 leading-6 text-[#5B6462]">{description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={scrollToForm}
                className="rounded-full bg-[#E3A23E] px-7 py-4 font-bold text-[#12181A] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#f0b458]"
              >
                Get My Exact Price Quote
              </button>
            </div>
          </div>
        </section>

        {/* WHY ACUITY */}
        <section className="px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl bg-[#12181A] p-7 text-white sm:p-10">
              <div className="hazard-stripes absolute inset-x-0 top-0 h-1.5" />

              <div className="dot-grid absolute inset-0 opacity-40" />

              <p className="relative font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#E3A23E]">
                Local pest-control professionals
              </p>

              <h2 className="font-display relative mt-4 text-3xl font-bold uppercase sm:text-4xl">
                Why Choose Acuity Pest Control in Bangalore?
              </h2>

              <p className="relative mt-5 leading-8 text-white/70">
                Our team reviews the pest problem, property type and affected
                areas before recommending treatment.
              </p>

              <a
                href={`tel:+${phoneNumber}`}
                className="relative mt-8 inline-flex items-center gap-2 rounded-full border border-[#E3A23E]/40 bg-[#E3A23E]/10 px-5 py-3 font-display text-xl font-bold text-[#E3A23E] transition hover:bg-[#E3A23E]/20"
              >
                📞 {displayPhone}
              </a>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold uppercase text-[#12181A] sm:text-4xl">
                Professional Treatment for Homes and Businesses
              </h2>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 rounded-xl border border-[#12181A]/15 bg-white p-4 transition hover:border-[#0E3B39]/40 hover:shadow-md"
                  >
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#0E3B39]/10 text-[10px] font-bold text-[#0E3B39]">
                      ✓
                    </span>

                    <p className="text-sm font-semibold leading-6">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="bg-[#12181A] px-4 py-16 text-white sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#E3A23E]">
                Explore our website
              </p>

              <h2 className="font-display mt-3 text-3xl font-bold uppercase sm:text-4xl">
                Pest Control Services and Resources
              </h2>

              <p className="mt-4 leading-7 text-white/65">
                Explore residential treatments, commercial pest management, pest
                identification and helpful resources.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {internalLinks.map((group) => (
                <div
                  key={group.category}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="font-display acuity-underline-grow inline-block text-xl font-bold uppercase text-[#E3A23E]">
                    {group.category}
                  </h3>

                  <div className="mt-8 space-y-2">
                    {group.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/75 transition hover:border-[#E3A23E]/60 hover:bg-white/10 hover:text-white"
                      >
                        <span>{link.label}</span>

                        <span
                          aria-hidden="true"
                          className="text-[#E3A23E] transition group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AREAS */}
        <section
          id="areas"
          className="scroll-mt-20 bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0E3B39]">
                Local service coverage
              </p>

              <h2 className="font-display mt-3 text-3xl font-bold uppercase text-[#12181A] sm:text-4xl">
                Pest Control Services Across Bangalore
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {serviceAreas.map((area, index) => (
                <div
                  key={area}
                  className={`acuity-card-lift rounded-xl border px-4 py-4 ${
                    index === 0
                      ? "border-[#0E3B39] bg-[#0E3B39] text-white"
                      : "border-[#12181A]/15 bg-[#F6F2E7]"
                  }`}
                >
                  <span className="font-mono text-[9px] font-bold opacity-50">
                    BLR-
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-1 text-sm font-bold">
                    Pest Control in {area}
                  </p>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-[#5B6462]">
              Your area is not listed? Contact us with your complete location
              and PIN code.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="scroll-mt-20 bg-[#F6F2E7] px-4 py-16 sm:px-6 md:py-20 lg:px-8"
        >
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0E3B39]">
                Pest control questions
              </p>

              <h2 className="font-display mt-3 text-3xl font-bold uppercase text-[#12181A] sm:text-4xl">
                Frequently Asked Questions About Pest Control in Bangalore
              </h2>
            </div>

            <div className="mt-10 space-y-3">
              {faqs.map((faq, index) => (
                <details
                  key={faq.q}
                  className="group rounded-xl border border-[#12181A]/15 bg-white p-5 transition hover:border-[#0E3B39]/40"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="flex items-baseline gap-3">
                      <span className="font-mono text-xs font-bold text-[#0E3B39]">
                        Q{String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="font-bold text-[#12181A]">{faq.q}</span>
                    </span>

                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#0E3B39]/10 text-base text-[#0E3B39] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="mt-4 border-t border-dashed border-[#12181A]/15 pt-4 pl-9 leading-7 text-[#5B6462]">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG LINKS */}
        <section className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="text-center font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0E3B39]">
              Pest control knowledge
            </p>

            <h2 className="font-display mt-3 text-center text-3xl font-bold uppercase text-[#12181A] sm:text-4xl">
              Related Pest Control Resources
            </h2>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {relatedLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between rounded-xl border border-[#12181A]/15 bg-[#F6F2E7] px-5 py-4 font-semibold transition hover:border-[#0E3B39] hover:text-[#0E3B39]"
                >
                  <span>{link.label}</span>

                  <span
                    aria-hidden="true"
                    className="transition group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#0E3B39] px-6 py-14 text-center text-white sm:px-10">
            <div className="hazard-stripes absolute inset-x-0 top-0 h-1.5" />

            <div className="dot-grid absolute inset-0 opacity-30" />

            <h2 className="font-display relative mx-auto max-w-3xl text-3xl font-bold uppercase sm:text-4xl">
              Book Professional Pest Control in Bangalore
            </h2>

            <p className="relative mx-auto mt-4 max-w-2xl leading-7 text-white/70">
              Contact Acuity for residential pest control, commercial pest
              management and specialised pest treatments.
            </p>

            <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={`tel:+${phoneNumber}`}
                className="rounded-full bg-[#E3A23E] px-7 py-4 font-bold text-[#12181A] shadow-lg transition hover:-translate-y-0.5"
              >
                Call {displayPhone}
              </a>

              <button
                type="button"
                onClick={scrollToForm}
                className="rounded-full border border-white/25 bg-white/5 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Request Free Quote
              </button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#12181A] px-4 py-10 text-center text-white/50 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="font-display text-lg font-bold uppercase text-white">
              Acuity Pest Control Services
            </p>

            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6">
              Professional residential and commercial pest control services in
              Bangalore.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-5 font-mono text-sm font-semibold">
              <a
                href={`tel:+${phoneNumber}`}
                className="transition hover:text-[#E3A23E]"
              >
                {displayPhone}
              </a>

              <a href="/" className="transition hover:text-[#E3A23E]">
                Home
              </a>

              <a href="/services" className="transition hover:text-[#E3A23E]">
                Services
              </a>

              <a href="/blogs" className="transition hover:text-[#E3A23E]">
                Blogs
              </a>

              <a href="/contact" className="transition hover:text-[#E3A23E]">
                Contact
              </a>
            </div>

            <p className="mt-7 border-t border-white/10 pt-7 text-xs">
              © {today.getFullYear()} Acuity Pest Control Services. All rights
              reserved.
            </p>
          </div>
        </footer>

        {/* DESKTOP WHATSAPP */}
        {/* <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            "Hello Acuity Pest Control, I need pest control service in Bangalore.",
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="acuity-fab-pulse fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-2xl transition hover:scale-105 md:flex"
          aria-label="Chat with Acuity Pest Control on WhatsApp"
        >
          💬
        </a> */}

        {/* MOBILE CALL / WHATSAPP */}
        <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 border-t border-[#12181A]/10 bg-white p-2 shadow-2xl md:hidden">
          <a
            href={`tel:+${phoneNumber}`}
            className="rounded-l-xl bg-[#12181A] px-4 py-3 text-center text-sm font-bold text-white"
          >
            Call Now
          </a>

          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              "Hello Acuity Pest Control, I need pest control service in Bangalore.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-r-xl bg-[#E3A23E] px-4 py-3 text-center text-sm font-bold text-[#12181A]"
          >
            WhatsApp
          </a>
        </div>

        <div className="h-16 md:hidden" />
      </main>
    </>
  );
};

export default PestControlLandingPage;
