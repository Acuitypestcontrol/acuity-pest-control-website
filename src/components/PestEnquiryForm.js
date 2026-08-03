import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

const PestEnquiryForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [openCategory, setOpenCategory] = useState("");
  const [errors, setErrors] = useState({});

  const [locationSearch, setLocationSearch] = useState("");
  const [showLocationSuggestions, setShowLocationSuggestions] =
    useState(false);
  const [activeLocationIndex, setActiveLocationIndex] = useState(-1);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    pincode: "",
    message: "",
  });

  const phoneNumber = "919941229005";
  const displayPhone = "+91 99412 29005";

  const bangaloreLocations = [
    { area: "JP Nagar", pincode: "560078" },
    { area: "JP Nagar 1st Phase", pincode: "560078" },
    { area: "JP Nagar 2nd Phase", pincode: "560078" },
    { area: "JP Nagar 3rd Phase", pincode: "560078" },
    { area: "JP Nagar 4th Phase", pincode: "560078" },
    { area: "JP Nagar 5th Phase", pincode: "560078" },
    { area: "JP Nagar 6th Phase", pincode: "560078" },
    { area: "JP Nagar 7th Phase", pincode: "560078" },
    { area: "JP Nagar 8th Phase", pincode: "560076" },
    { area: "JP Nagar 9th Phase", pincode: "560062" },

    { area: "Jayanagar", pincode: "560041" },
    { area: "Jayanagar 1st Block", pincode: "560011" },
    { area: "Jayanagar 2nd Block", pincode: "560011" },
    { area: "Jayanagar 3rd Block", pincode: "560011" },
    { area: "Jayanagar 4th Block", pincode: "560011" },
    { area: "Jayanagar 5th Block", pincode: "560041" },
    { area: "Jayanagar 6th Block", pincode: "560082" },
    { area: "Jayanagar 7th Block", pincode: "560070" },
    { area: "Jayanagar 8th Block", pincode: "560082" },
    { area: "Jayanagar 9th Block", pincode: "560041" },

    { area: "HSR Layout", pincode: "560102" },
    { area: "HSR Layout Sector 1", pincode: "560102" },
    { area: "HSR Layout Sector 2", pincode: "560102" },
    { area: "HSR Layout Sector 3", pincode: "560102" },
    { area: "HSR Layout Sector 4", pincode: "560102" },
    { area: "HSR Layout Sector 5", pincode: "560102" },
    { area: "HSR Layout Sector 6", pincode: "560102" },
    { area: "HSR Layout Sector 7", pincode: "560102" },

    { area: "Whitefield", pincode: "560066" },

    { area: "Electronic City", pincode: "560100" },
    { area: "Electronic City Phase 1", pincode: "560100" },
    { area: "Electronic City Phase 2", pincode: "560100" },

    { area: "Koramangala", pincode: "560034" },
    { area: "Koramangala 1st Block", pincode: "560034" },
    { area: "Koramangala 3rd Block", pincode: "560034" },
    { area: "Koramangala 4th Block", pincode: "560034" },
    { area: "Koramangala 5th Block", pincode: "560095" },
    { area: "Koramangala 6th Block", pincode: "560095" },
    { area: "Koramangala 7th Block", pincode: "560095" },
    { area: "Koramangala 8th Block", pincode: "560095" },

    { area: "Indiranagar", pincode: "560038" },

    { area: "BTM Layout", pincode: "560076" },
    { area: "BTM Layout 1st Stage", pincode: "560029" },
    { area: "BTM Layout 2nd Stage", pincode: "560076" },

    { area: "Bannerghatta Road", pincode: "560076" },
    { area: "Kengeri", pincode: "560060" },
    { area: "Kengeri Satellite Town", pincode: "560060" },

    { area: "Yelahanka", pincode: "560064" },
    { area: "Yelahanka New Town", pincode: "560064" },

    { area: "Marathahalli", pincode: "560037" },
    { area: "Sarjapur Road", pincode: "560035" },
    { area: "Hebbal", pincode: "560024" },

    { area: "RR Nagar", pincode: "560098" },
    { area: "Rajarajeshwari Nagar", pincode: "560098" },

    { area: "Basavanagudi", pincode: "560004" },
    { area: "Malleshwaram", pincode: "560003" },
    { area: "Malleswaram", pincode: "560003" },

    { area: "Banashankari", pincode: "560050" },
    { area: "Banashankari 1st Stage", pincode: "560050" },
    { area: "Banashankari 2nd Stage", pincode: "560070" },
    { area: "Banashankari 3rd Stage", pincode: "560085" },

    { area: "Rajajinagar", pincode: "560010" },

    { area: "KR Puram", pincode: "560036" },
    { area: "Krishnarajapuram", pincode: "560036" },

    { area: "Bellandur", pincode: "560103" },

    { area: "Peenya", pincode: "560058" },
    { area: "Peenya Industrial Area", pincode: "560058" },

    { area: "Kumbalgodu", pincode: "560074" },
    { area: "Attibele", pincode: "562107" },

    { area: "Dabaspet", pincode: "562111" },
    { area: "Dobbaspet", pincode: "562111" },

    { area: "Nelamangala", pincode: "562123" },
    { area: "Doddaballapur", pincode: "561203" },

    { area: "Yelachenahalli", pincode: "560078" },
    { area: "Kumaraswamy Layout", pincode: "560078" },
    { area: "Uttarahalli", pincode: "560061" },

    { area: "Vijayanagar", pincode: "560040" },
    { area: "Nagarbhavi", pincode: "560072" },

    { area: "Mahadevapura", pincode: "560048" },
    { area: "Brookefield", pincode: "560037" },
    { area: "Kadugodi", pincode: "560067" },

    { area: "Bommanahalli", pincode: "560068" },
    { area: "Begur", pincode: "560068" },
    { area: "Hulimavu", pincode: "560076" },
    { area: "Arekere", pincode: "560076" },

    { area: "Domlur", pincode: "560071" },
    { area: "Ulsoor", pincode: "560008" },
    { area: "Shivajinagar", pincode: "560001" },
    { area: "MG Road", pincode: "560001" },

    { area: "Richmond Town", pincode: "560025" },
    { area: "Frazer Town", pincode: "560005" },
    { area: "Cooke Town", pincode: "560005" },

    { area: "Banaswadi", pincode: "560043" },
    { area: "Kalyan Nagar", pincode: "560043" },
    { area: "HRBR Layout", pincode: "560043" },
    { area: "HBR Layout", pincode: "560043" },

    { area: "Ramamurthy Nagar", pincode: "560016" },
    { area: "Horamavu", pincode: "560043" },

    { area: "Jakkur", pincode: "560064" },
    { area: "Thanisandra", pincode: "560077" },
    { area: "Nagawara", pincode: "560045" },
    { area: "Manyata Tech Park", pincode: "560045" },
    { area: "Sahakar Nagar", pincode: "560092" },

    { area: "RT Nagar", pincode: "560032" },
    { area: "Sanjay Nagar", pincode: "560094" },
    { area: "New BEL Road", pincode: "560054" },
    { area: "Mathikere", pincode: "560054" },
    { area: "Yeshwanthpur", pincode: "560022" },

    { area: "Magadi Road", pincode: "560023" },
    { area: "Chandra Layout", pincode: "560040" },
    { area: "Basaveshwaranagar", pincode: "560079" },
    { area: "Kamakshipalya", pincode: "560079" },

    { area: "Wilson Garden", pincode: "560027" },
    { area: "Shantinagar", pincode: "560027" },
    { area: "Lalbagh", pincode: "560004" },

    { area: "Ejipura", pincode: "560047" },
    { area: "Vivek Nagar", pincode: "560047" },
    { area: "Austin Town", pincode: "560047" },

    { area: "Murugeshpalya", pincode: "560017" },
    { area: "HAL", pincode: "560017" },
    { area: "Old Airport Road", pincode: "560017" },

    { area: "CV Raman Nagar", pincode: "560093" },
    { area: "Kaggadasapura", pincode: "560093" },
    { area: "Baiyappanahalli", pincode: "560038" },

    { area: "Munnekollal", pincode: "560037" },
    { area: "Kundalahalli", pincode: "560037" },
    { area: "AECS Layout", pincode: "560037" },

    { area: "Varthur", pincode: "560087" },
    { area: "Gunjur", pincode: "560087" },
    { area: "Panathur", pincode: "560103" },
    { area: "Kadubeesanahalli", pincode: "560103" },

    { area: "Haralur", pincode: "560102" },
    { area: "Kasavanahalli", pincode: "560035" },
    { area: "Kaikondrahalli", pincode: "560035" },
    { area: "Carmelaram", pincode: "560035" },

    { area: "Bommasandra", pincode: "560099" },
    { area: "Jigani", pincode: "560105" },
    { area: "Chandapura", pincode: "560099" },
    { area: "Anekal", pincode: "562106" },

    { area: "Hosur Road", pincode: "560068" },
    { area: "Singasandra", pincode: "560068" },
    { area: "Kudlu Gate", pincode: "560068" },
    { area: "Hosa Road", pincode: "560100" },

    { area: "Kanakapura Road", pincode: "560062" },
    { area: "Konanakunte", pincode: "560062" },
    { area: "Anjanapura", pincode: "560108" },
    { area: "Gottigere", pincode: "560083" },

    { area: "Jalahalli", pincode: "560013" },
    { area: "Vidyaranyapura", pincode: "560097" },
    { area: "MS Palya", pincode: "560097" },
    { area: "Hesaraghatta Road", pincode: "560073" },

    { area: "Devanahalli", pincode: "562110" },
    {
      area: "Kempegowda International Airport",
      pincode: "560300",
    },
  ];

  const serviceGroups = [
    {
      id: "residential",
      title: "Residential Services",
      subtitle: "Pest control services for homes and apartments",
      icon: "🏠",
      services: [
        {
          id: "residential-cockroach",
          label: "Cockroach Control",
          icon: "🪳",
        },
        {
          id: "residential-general-pest",
          label: "General Pest Control",
          icon: "🧴",
        },
        {
          id: "residential-bed-bug",
          label: "Bed Bug Treatment",
          icon: "🛏️",
        },
        {
          id: "residential-fly",
          label: "Fly Control",
          icon: "🪰",
        },
        {
          id: "residential-rodent",
          label: "Rodent Control",
          icon: "🐀",
        },
        {
          id: "residential-anti-termite",
          label: "Anti-Termite Treatment",
          icon: "🏠",
        },
        {
          id: "residential-wood-borer",
          label: "Wood Borer Treatment",
          icon: "🪵",
        },
        {
          id: "residential-mosquito",
          label: "Mosquito Control",
          icon: "🦟",
        },
      ],
    },
    {
      id: "commercial",
      title: "Commercial Services",
      subtitle: "Pest management for businesses and industries",
      icon: "🏢",
      services: [
        {
          id: "commercial-general-pest",
          label: "General Pest Control",
          icon: "🧴",
        },
        {
          id: "commercial-mosquito",
          label: "Mosquito Control",
          icon: "🦟",
        },
        {
          id: "commercial-rodent",
          label: "Rodent Control",
          icon: "🐀",
        },
        {
          id: "commercial-reptile",
          label: "Reptile Control",
          icon: "🦎",
        },
        {
          id: "commercial-anti-termite",
          label: "Anti-Termite Treatment",
          icon: "🏠",
        },
        {
          id: "commercial-wood-borer",
          label: "Wood Borer Treatment",
          icon: "🪵",
        },
        {
          id: "commercial-garden-pest",
          label: "Garden Pest Control",
          icon: "🌿",
        },
      ],
    },
  ];

  const allServices = useMemo(
    () =>
      serviceGroups.flatMap((group) =>
        group.services.map((service) => service.id)
      ),
    []
  );

  const selectedServiceDetails = useMemo(
    () =>
      serviceGroups.flatMap((group) =>
        group.services
          .filter((service) => selectedServices.includes(service.id))
          .map((service) => ({
            id: service.id,
            label: service.label,
            category: group.title,
          }))
      ),
    [selectedServices]
  );

  const filteredLocations = useMemo(() => {
    const searchValue = locationSearch.trim().toLowerCase();

    if (!searchValue) {
      return bangaloreLocations.slice(0, 8);
    }

    return bangaloreLocations
      .filter(
        (location) =>
          location.area.toLowerCase().includes(searchValue) ||
          location.pincode.includes(searchValue)
      )
      .slice(0, 10);
  }, [locationSearch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

  const closePopup = useCallback(() => {
    setIsClosing(true);
    setShowLocationSuggestions(false);
    setOpenCategory("");

    setTimeout(() => {
      setShowPopup(false);
      setIsClosing(false);
    }, 220);
  }, []);

  useEffect(() => {
    if (!showPopup) return undefined;

    const handleKeyDown = (event) => {
      if (event.key !== "Escape") return;

      if (showLocationSuggestions) {
        setShowLocationSuggestions(false);
        setActiveLocationIndex(-1);
        return;
      }

      if (openCategory) {
        setOpenCategory("");
        return;
      }

      closePopup();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    showPopup,
    showLocationSuggestions,
    openCategory,
    closePopup,
  ]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [name]: "",
      }));
    }
  };

  const handleLocationChange = (event) => {
    const value = event.target.value;

    setLocationSearch(value);
    setShowLocationSuggestions(true);
    setActiveLocationIndex(-1);

    setFormData((previousData) => ({
      ...previousData,
      location: value,
      pincode: "",
    }));

    if (errors.location) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        location: "",
      }));
    }
  };

  const selectLocation = (location) => {
    const fullLocation = `${location.area}, Bengaluru, Karnataka - ${location.pincode}`;

    setLocationSearch(fullLocation);
    setShowLocationSuggestions(false);
    setActiveLocationIndex(-1);

    setFormData((previousData) => ({
      ...previousData,
      location: fullLocation,
      pincode: location.pincode,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      location: "",
    }));
  };

  const handleManualLocation = () => {
    const manualLocation = locationSearch.trim();

    setShowLocationSuggestions(false);
    setActiveLocationIndex(-1);

    setFormData((previousData) => ({
      ...previousData,
      location: manualLocation,
      pincode: "",
    }));

    if (manualLocation) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        location: "",
      }));
    }
  };

  const clearLocation = () => {
    setLocationSearch("");
    setShowLocationSuggestions(true);
    setActiveLocationIndex(-1);

    setFormData((previousData) => ({
      ...previousData,
      location: "",
      pincode: "",
    }));
  };

  const handleLocationKeyDown = (event) => {
    if (!showLocationSuggestions) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (filteredLocations.length === 0) return;

      setActiveLocationIndex((previousIndex) =>
        previousIndex < filteredLocations.length - 1
          ? previousIndex + 1
          : 0
      );
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (filteredLocations.length === 0) return;

      setActiveLocationIndex((previousIndex) =>
        previousIndex > 0
          ? previousIndex - 1
          : filteredLocations.length - 1
      );
    }

    if (event.key === "Enter") {
      event.preventDefault();

      if (
        activeLocationIndex >= 0 &&
        filteredLocations.length > 0
      ) {
        selectLocation(filteredLocations[activeLocationIndex]);
      } else {
        handleManualLocation();
      }
    }

    if (event.key === "Escape") {
      setShowLocationSuggestions(false);
      setActiveLocationIndex(-1);
    }
  };

  const toggleService = (serviceId) => {
    setSelectedServices((previousServices) => {
      if (previousServices.includes(serviceId)) {
        return previousServices.filter(
          (selectedId) => selectedId !== serviceId
        );
      }

      return [...previousServices, serviceId];
    });

    if (errors.service) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        service: "",
      }));
    }
  };

  const toggleSelectAll = () => {
    if (selectedServices.length === allServices.length) {
      setSelectedServices([]);
    } else {
      setSelectedServices(allServices);
    }

    if (errors.service) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        service: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const cleanedPhone = formData.phone
      .replace(/\D/g, "")
      .slice(-10);

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!/^\d{10}$/.test(cleanedPhone)) {
      newErrors.phone = "Enter a valid 10-digit number";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Please enter your location";
    }

    if (selectedServices.length === 0) {
      newErrors.service = "Select at least one service";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    const groupedServices = serviceGroups
      .map((group) => {
        const groupSelections = group.services.filter((service) =>
          selectedServices.includes(service.id)
        );

        if (groupSelections.length === 0) return "";

        const serviceLines = groupSelections
          .map((service) => `• ${service.label}`)
          .join("\n");

        return `*${group.title}:*\n${serviceLines}`;
      })
      .filter(Boolean)
      .join("\n\n");

    const whatsappMessage = `*New Pest Control Lead*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "Not provided"}
*Location:* ${formData.location}
*PIN Code:* ${formData.pincode || "Not provided"}

*Services Requested:*

${groupedServices}

*Additional Message:*
${formData.message || "No additional message provided"}

Website Lead From Acuity Pest Control`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    setSubmitted(true);
  };

  if (!showPopup) return null;

  const allSelected =
    selectedServices.length === allServices.length;

  return (
    <>
      <style>{`
        @keyframes acuityFadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes acuityPopIn {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.96);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes acuityPopOut {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          to {
            opacity: 0;
            transform: translateY(16px) scale(0.96);
          }
        }

        @keyframes acuityCheckPop {
          0% {
            transform: scale(0);
            opacity: 0;
          }

          60% {
            transform: scale(1.15);
            opacity: 1;
          }

          100% {
            transform: scale(1);
          }
        }

        @keyframes acuityStripeSlide {
          from {
            background-position: 0 0;
          }

          to {
            background-position: 56px 0;
          }
        }

        .acuity-overlay {
          animation: acuityFadeIn 0.25s ease-out;
        }

        .acuity-card {
          animation: acuityPopIn 0.32s
            cubic-bezier(0.16, 1, 0.3, 1);
        }

        .acuity-card.closing {
          animation: acuityPopOut 0.2s ease-in forwards;
        }

        .acuity-check {
          animation: acuityCheckPop 0.5s
            cubic-bezier(0.34, 1.56, 0.64, 1)
            forwards;
        }

        .acuity-stripes {
          background-image: repeating-linear-gradient(
            135deg,
            #e3a23e 0 14px,
            #12181a 14px 28px
          );
          background-size: 56px 100%;
          animation: acuityStripeSlide 3s linear infinite;
        }

        .acuity-scroll::-webkit-scrollbar {
          width: 6px;
        }

        .acuity-scroll::-webkit-scrollbar-thumb {
          background: #0e3b39;
          border-radius: 999px;
        }

        .acuity-location-list::-webkit-scrollbar {
          width: 5px;
        }

        .acuity-location-list::-webkit-scrollbar-thumb {
          background: #0e3b39;
          border-radius: 999px;
        }

        @media (prefers-reduced-motion: reduce) {
          .acuity-overlay,
          .acuity-card,
          .acuity-check,
          .acuity-stripes {
            animation: none !important;
          }
        }
      `}</style>

      <div
        className="acuity-overlay fixed inset-0 z-[9999] flex items-center justify-center bg-[#12181A]/80 p-3 backdrop-blur-sm sm:p-4"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            setShowLocationSuggestions(false);
            closePopup();
          }
        }}
      >
        <div
          className={`acuity-card relative flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-2xl border border-[#12181A]/10 bg-[#F6F2E7] shadow-[0_30px_90px_rgba(0,0,0,0.5)] sm:max-w-xl ${
            isClosing ? "closing" : ""
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="acuity-popup-heading"
          aria-describedby="acuity-popup-description"
        >
          <div className="acuity-stripes h-1.5 w-full flex-shrink-0" />

          <button
            type="button"
            onClick={closePopup}
            aria-label="Close enquiry form"
            className="absolute right-3 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#12181A]/5 text-xl font-bold text-[#12181A]/60 transition hover:bg-[#B8442F] hover:text-white sm:right-4"
          >
            ×
          </button>

          {submitted ? (
            <div className="flex flex-col items-center px-6 py-14 text-center sm:px-10">
              <div className="acuity-check flex h-16 w-16 items-center justify-center rounded-full bg-[#0E3B39] text-3xl text-white">
                ✓
              </div>

              <h2 className="font-display mt-6 text-2xl font-bold uppercase text-[#12181A]">
                Enquiry Submitted
              </h2>

              <p className="mt-3 max-w-sm text-sm leading-6 text-[#5B6462]">
                Your enquiry has opened in WhatsApp. Send the message and our
                pest control team will contact you shortly.
              </p>

              <a
                href={`tel:+${phoneNumber}`}
                className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-[#0E3B39] px-6 py-3 text-sm font-bold text-[#0E3B39] transition hover:bg-[#0E3B39] hover:text-white"
              >
                📞 Call Us: {displayPhone}
              </a>

              <button
                type="button"
                onClick={closePopup}
                className="mt-4 text-sm font-semibold text-[#5B6462] underline decoration-dotted underline-offset-4 hover:text-[#12181A]"
              >
                Close this window
              </button>
            </div>
          ) : (
            <div className="acuity-scroll overflow-y-auto">
              <div className="px-5 pb-2 pt-6 sm:px-8 sm:pt-8">
                <p className="mb-3 inline-flex rounded-full bg-[#E3A23E]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#B8442F]">
                  Free quotation
                </p>

                <h2
                  id="acuity-popup-heading"
                  className="font-display pr-10 text-2xl font-bold uppercase leading-tight text-[#12181A] sm:text-3xl"
                >
                  Book Pest Control Services in Bangalore
                </h2>

                <p
                  id="acuity-popup-description"
                  className="mt-2 text-sm leading-6 text-[#5B6462]"
                >
                  Select your Bangalore location and choose residential or
                  commercial pest control services. Your enquiry will open
                  directly in WhatsApp.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-4 px-5 pb-7 pt-4 sm:px-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="popup-name"
                      className="mb-1.5 block font-mono text-[11px] font-bold uppercase tracking-wide text-[#12181A]/70"
                    >
                      Name *
                    </label>

                    <input
                      id="popup-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      autoComplete="name"
                      className={`w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none transition focus:ring-4 ${
                        errors.name
                          ? "border-[#B8442F] focus:ring-[#B8442F]/10"
                          : "border-[#12181A]/15 focus:border-[#0E3B39] focus:ring-[#0E3B39]/10"
                      }`}
                    />

                    {errors.name && (
                      <p className="mt-1 text-xs font-medium text-[#B8442F]">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="popup-phone"
                      className="mb-1.5 block font-mono text-[11px] font-bold uppercase tracking-wide text-[#12181A]/70"
                    >
                      Phone *
                    </label>

                    <input
                      id="popup-phone"
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit number"
                      autoComplete="tel"
                      maxLength={15}
                      className={`w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none transition focus:ring-4 ${
                        errors.phone
                          ? "border-[#B8442F] focus:ring-[#B8442F]/10"
                          : "border-[#12181A]/15 focus:border-[#0E3B39] focus:ring-[#0E3B39]/10"
                      }`}
                    />

                    {errors.phone && (
                      <p className="mt-1 text-xs font-medium text-[#B8442F]">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="popup-email"
                    className="mb-1.5 block font-mono text-[11px] font-bold uppercase tracking-wide text-[#12181A]/70"
                  >
                    Email{" "}
                    <span className="font-normal normal-case text-[#5B6462]">
                      (optional)
                    </span>
                  </label>

                  <input
                    id="popup-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="w-full rounded-lg border border-[#12181A]/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#0E3B39] focus:ring-4 focus:ring-[#0E3B39]/10"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="popup-location"
                    className="mb-1.5 block font-mono text-[11px] font-bold uppercase tracking-wide text-[#12181A]/70"
                  >
                    Location in Bangalore *
                  </label>

                  <div className="relative">
                    <input
                      id="popup-location"
                      name="location"
                      type="text"
                      value={locationSearch}
                      onChange={handleLocationChange}
                      onFocus={() => setShowLocationSuggestions(true)}
                      onKeyDown={handleLocationKeyDown}
                      placeholder="Type area name or PIN code"
                      autoComplete="off"
                      className={`w-full rounded-lg border bg-white px-4 py-3 pr-10 text-sm outline-none transition focus:ring-4 ${
                        errors.location
                          ? "border-[#B8442F] focus:ring-[#B8442F]/10"
                          : "border-[#12181A]/15 focus:border-[#0E3B39] focus:ring-[#0E3B39]/10"
                      }`}
                    />

                    {locationSearch && (
                      <button
                        type="button"
                        onClick={clearLocation}
                        aria-label="Clear location"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-lg font-bold text-[#5B6462] transition hover:text-[#B8442F]"
                      >
                        ×
                      </button>
                    )}
                  </div>

                  {showLocationSuggestions && (
                    <div className="acuity-location-list absolute left-0 right-0 top-full z-[10020] mt-1 max-h-60 overflow-y-auto rounded-lg border border-[#12181A]/15 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.22)]">
                      {filteredLocations.length > 0 ? (
                        <>
                          {filteredLocations.map((location, index) => (
                            <button
                              type="button"
                              key={`${location.area}-${location.pincode}-${index}`}
                              onMouseDown={(event) => {
                                event.preventDefault();
                                selectLocation(location);
                              }}
                              className={`flex w-full items-center justify-between gap-3 border-b border-[#12181A]/10 px-4 py-3 text-left transition last:border-b-0 ${
                                activeLocationIndex === index
                                  ? "bg-[#0E3B39] text-white"
                                  : "text-[#1C2321] hover:bg-[#0E3B39]/5"
                              }`}
                            >
                              <span>
                                <span className="block text-sm font-semibold">
                                  {location.area}
                                </span>

                                <span
                                  className={`block text-[11px] ${
                                    activeLocationIndex === index
                                      ? "text-white/70"
                                      : "text-[#5B6462]"
                                  }`}
                                >
                                  Bengaluru, Karnataka
                                </span>
                              </span>

                              <span
                                className={`rounded-full px-2.5 py-1 font-mono text-[11px] font-bold ${
                                  activeLocationIndex === index
                                    ? "bg-white/15 text-white"
                                    : "bg-[#E3A23E]/15 text-[#12181A]"
                                }`}
                              >
                                {location.pincode}
                              </span>
                            </button>
                          ))}

                          <button
                            type="button"
                            onMouseDown={(event) => {
                              event.preventDefault();
                              handleManualLocation();
                            }}
                            className="w-full border-t border-[#12181A]/10 bg-[#F6F2E7] px-4 py-3 text-left transition hover:bg-[#E3A23E]/10"
                          >
                            <span className="block text-xs font-bold text-[#0E3B39]">
                              My area is not listed
                            </span>

                            <span className="mt-0.5 block text-[11px] leading-5 text-[#5B6462]">
                              Continue using “
                              {locationSearch ||
                                "your manually typed location"}
                              ”
                            </span>
                          </button>
                        </>
                      ) : (
                        <div className="px-4 py-4">
                          <p className="text-sm font-bold text-[#12181A]">
                            Your area is not listed
                          </p>

                          <p className="mt-1 text-[11px] leading-5 text-[#5B6462]">
                            Type your complete area, address and PIN code
                            manually. You can still submit your enquiry.
                          </p>

                          <button
                            type="button"
                            onMouseDown={(event) => {
                              event.preventDefault();
                              handleManualLocation();
                            }}
                            className="mt-3 w-full rounded-lg bg-[#0E3B39] px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#0a2b29]"
                          >
                            Use Manually Typed Location
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {formData.pincode ? (
                    <p className="mt-1.5 text-[11px] font-semibold text-[#0E3B39]">
                      ✓ PIN code selected automatically:{" "}
                      {formData.pincode}
                    </p>
                  ) : (
                    <p className="mt-1.5 text-[11px] leading-5 text-[#5B6462]">
                      Start typing your area or PIN code. If your area is not
                      listed, type your complete location manually.
                    </p>
                  )}

                  {errors.location && (
                    <p className="mt-1 text-xs font-medium text-[#B8442F]">
                      {errors.location}
                    </p>
                  )}
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <label className="font-mono text-[11px] font-bold uppercase tracking-wide text-[#12181A]/70">
                      Select Service(s) *
                    </label>

                    <button
                      type="button"
                      onClick={toggleSelectAll}
                      className="flex-shrink-0 font-mono text-[10px] font-bold uppercase tracking-wide text-[#0E3B39] underline decoration-dotted underline-offset-2 hover:text-[#B8442F]"
                    >
                      {allSelected ? "Clear all" : "Select all"}
                    </button>
                  </div>

                  <div className="space-y-2">
                    {serviceGroups.map((group) => {
                      const isOpen = openCategory === group.id;

                      const selectedCount = group.services.filter(
                        (service) =>
                          selectedServices.includes(service.id)
                      ).length;

                      return (
                        <div
                          key={group.id}
                          className={`overflow-hidden rounded-xl border bg-white ${
                            errors.service
                              ? "border-[#B8442F]"
                              : "border-[#12181A]/15"
                          }`}
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setOpenCategory((previousCategory) =>
                                previousCategory === group.id
                                  ? ""
                                  : group.id
                              )
                            }
                            aria-expanded={isOpen}
                            className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition hover:bg-[#0E3B39]/5"
                          >
                            <span className="flex items-center gap-3">
                              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0E3B39]/10 text-xl">
                                {group.icon}
                              </span>

                              <span>
                                <span className="block text-sm font-bold text-[#12181A]">
                                  {group.title}
                                </span>

                                <span className="block text-[11px] text-[#5B6462]">
                                  {selectedCount > 0
                                    ? `${selectedCount} selected`
                                    : group.subtitle}
                                </span>
                              </span>
                            </span>

                            <span
                              className={`flex h-8 w-8 items-center justify-center rounded-full bg-[#0E3B39]/5 text-lg font-bold text-[#0E3B39] transition ${
                                isOpen ? "rotate-180" : ""
                              }`}
                              aria-hidden="true"
                            >
                              ⌄
                            </span>
                          </button>

                          {isOpen && (
                            <div className="border-t border-[#12181A]/10 bg-[#F6F2E7]/60 p-3">
                              <div className="grid gap-2 sm:grid-cols-2">
                                {group.services.map((service) => {
                                  const active =
                                    selectedServices.includes(service.id);

                                  return (
                                    <button
                                      type="button"
                                      key={service.id}
                                      onClick={() =>
                                        toggleService(service.id)
                                      }
                                      aria-pressed={active}
                                      className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-left text-xs font-semibold leading-5 transition ${
                                        active
                                          ? "border-[#0E3B39] bg-[#0E3B39] text-white"
                                          : "border-[#12181A]/10 bg-white text-[#1C2321] hover:border-[#0E3B39]/50"
                                      }`}
                                    >
                                      <span
                                        className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 text-[9px] font-bold ${
                                          active
                                            ? "border-white bg-white text-[#0E3B39]"
                                            : "border-[#12181A]/25 text-transparent"
                                        }`}
                                      >
                                        ✓
                                      </span>

                                      <span>{service.icon}</span>
                                      <span>{service.label}</span>
                                    </button>
                                  );
                                })}
                              </div>

                              <button
                                type="button"
                                onClick={() => setOpenCategory("")}
                                className="mt-3 w-full rounded-lg border border-[#12181A]/15 bg-white px-4 py-2 text-xs font-bold uppercase text-[#5B6462] transition hover:border-[#B8442F] hover:text-[#B8442F]"
                              >
                                Close Service Options ↑
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {errors.service && (
                    <p className="mt-1.5 text-xs font-medium text-[#B8442F]">
                      {errors.service}
                    </p>
                  )}
                </div>

                {selectedServiceDetails.length > 0 && (
                  <div className="rounded-lg border border-[#12181A]/10 bg-white p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-[11px] font-bold uppercase text-[#12181A]/60">
                        {selectedServiceDetails.length} service
                        {selectedServiceDetails.length > 1 ? "s" : ""}{" "}
                        selected
                      </p>

                      <button
                        type="button"
                        onClick={() => setSelectedServices([])}
                        className="text-[11px] font-bold text-[#B8442F] hover:underline"
                      >
                        Clear
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {selectedServiceDetails.map((service) => (
                        <span
                          key={service.id}
                          className="inline-flex items-center gap-1.5 rounded-full bg-[#E3A23E]/15 px-3 py-1.5 text-[11px] font-semibold text-[#12181A]"
                        >
                          <span>
                            {service.label}{" "}
                            <span className="text-[#5B6462]">
                              ({service.category.replace(" Services", "")})
                            </span>
                          </span>

                          <button
                            type="button"
                            onClick={() => toggleService(service.id)}
                            aria-label={`Remove ${service.label}`}
                            className="font-bold text-[#B8442F]"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="popup-message"
                    className="mb-1.5 block font-mono text-[11px] font-bold uppercase tracking-wide text-[#12181A]/70"
                  >
                    Additional Message{" "}
                    <span className="font-normal normal-case text-[#5B6462]">
                      (optional)
                    </span>
                  </label>

                  <textarea
                    id="popup-message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe the pest problem or preferred service date..."
                    className="w-full resize-none rounded-lg border border-[#12181A]/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#0E3B39] focus:ring-4 focus:ring-[#0E3B39]/10"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={closePopup}
                    className="w-full rounded-lg border-2 border-[#12181A]/20 bg-white px-4 py-3.5 text-sm font-bold uppercase text-[#12181A] transition hover:border-[#B8442F] hover:bg-[#B8442F]/5 hover:text-[#B8442F]"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#E3A23E] px-4 py-3.5 text-sm font-bold uppercase text-[#12181A] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#f0b458]"
                  >
                    Submit
                  </button>
                </div>

                <p className="text-center text-xs text-[#5B6462]">
                  Your enquiry will open in WhatsApp after submitting.
                </p>

                <a
                  href={`tel:+${phoneNumber}`}
                  className="flex w-full items-center justify-center rounded-lg border-2 border-[#0E3B39] px-6 py-3.5 text-sm font-bold text-[#0E3B39] transition hover:bg-[#0E3B39] hover:text-white"
                >
                  📞 Call Now: {displayPhone}
                </a>

                <p className="text-center text-[11px] leading-5 text-[#5B6462]">
                  Your contact information is used only to respond to your pest
                  control enquiry.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PestEnquiryForm;