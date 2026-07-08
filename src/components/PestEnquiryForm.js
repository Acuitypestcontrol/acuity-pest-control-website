import React, { useEffect, useState } from "react";

const LeadPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const location = form.location.value;
    const service = form.service.value;

    const message = `*New Pest Control Lead*

Name: ${name}
Phone: ${phone}
Email: ${email}
Location: ${location}
Service: ${service}

Website Lead From Acuity Pest Control`;

    window.open(
      `https://wa.me/919941229005?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-green-950/70 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative max-w-lg w-full overflow-hidden rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
        
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-lime-400/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-green-600/40 rounded-full blur-3xl"></div>

        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-5 z-20 text-white/80 hover:text-red-400 text-3xl"
        >
          ×
        </button>

        <div className="relative z-10 text-center px-6 pt-8 pb-5 border-b border-white/15">
          <h2 className="text-3xl font-extrabold text-white mb-2">
            Get Free quote!
          </h2>

          <p className="text-white/80 text-sm leading-relaxed">
            Cockroach Control, Termite Treatment, Bed Bug Control, Mosquito
            Control & Rodent Control Services in Bangalore
          </p>
        </div>

        <div className="relative z-10 p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full bg-white/15 border border-white/20 text-white placeholder-white/70 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-300 focus:bg-white/20"
            />

            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone Number"
              className="w-full bg-white/15 border border-white/20 text-white placeholder-white/70 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-300 focus:bg-white/20"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full bg-white/15 border border-white/20 text-white placeholder-white/70 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-300 focus:bg-white/20"
            />

            <input
              type="text"
              name="location"
              required
              placeholder="Your Location in Bangalore"
              className="w-full bg-white/15 border border-white/20 text-white placeholder-white/70 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-300 focus:bg-white/20"
            />

            <select
              name="service"
              required
              className="w-full bg-white/15 border border-white/20 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-lime-300 focus:bg-slate-900/90"
            >
              <option value="" className="text-yellow-500">
                Select Pest Control Service
              </option>
              <option className="text-white">Cockroach Control</option>
              <option className="text-white">Termite Treatment</option>
              <option className="text-white">Bed Bug Control</option>
              <option className="text-white">Mosquito Control</option>
              <option className="text-white">Rodent Control</option>
              <option className="text-white">Ant Control</option>
              <option className="text-white">Wood Borer Treatment</option>
              <option className="text-white">General Pest Control</option>
              <option className="text-white">Commercial Pest Control</option>
            </select>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-lime-500 to-green-700 hover:from-lime-400 hover:to-green-800 text-white font-bold py-3 rounded-xl transition shadow-lg"
            >
              Submit & WhatsApp
            </button>
          </form>

          <div className="text-center mt-5">
            <a
              href="tel:+919941229005"
              className="inline-block text-white font-semibold bg-white/15 border border-white/20 px-5 py-2 rounded-full hover:bg-white/25 transition"
            >
              📞 Call Now: +91 99412 29005
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadPopup;