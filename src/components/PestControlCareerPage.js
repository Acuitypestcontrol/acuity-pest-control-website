import React, { useState } from "react";
import {
  FaUserTie,
  FaTools,
  FaClipboardCheck,
  FaUsersCog,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const PestControlCareerPage = () => {
  const [selectedRole, setSelectedRole] = useState("");

  const jobs = [
    {
      title: "Pest Control Technician",
      icon: <FaTools />,
      experience: "0–2 Years",
      qualification: "10th / 12th / ITI preferred",
      location: "Bangalore",
      description:
        "Join our pest control team and provide professional pest management services for residential and commercial customers.",
      responsibilities: [
        "Perform pest control treatments at customer locations",
        "Identify pest infestations and recommend suitable treatments",
        "Handle pest control equipment and products safely",
        "Follow company safety and service procedures",
        "Maintain professional communication with customers",
      ],
    },
    {
      title: "Business Supervisor",
      icon: <FaUserTie />,
      experience: "2–4 Years",
      qualification: "PUC / Diploma / Any Degree",
      location: "Bangalore",
      description:
        "We are looking for a responsible Business Supervisor to coordinate field teams, customer requirements and daily service operations.",
      responsibilities: [
        "Supervise field technicians and daily operations",
        "Coordinate customer service requirements",
        "Monitor service quality and team performance",
        "Prepare daily reports and operational updates",
        "Support business development activities",
      ],
    },
    {
      title: "Operations Executive",
      icon: <FaClipboardCheck />,
      experience: "1–3 Years",
      qualification: "Any Degree",
      location: "Bangalore",
      description:
        "Join our operations team to coordinate pest control services, technicians, customer schedules and service requirements.",
      responsibilities: [
        "Coordinate daily pest control service schedules",
        "Communicate with customers and field technicians",
        "Track service completion and customer requirements",
        "Maintain operational records and reports",
        "Ensure smooth coordination between teams",
      ],
    },
    {
      title: "Operations Manager",
      icon: <FaUsersCog />,
      experience: "3–6 Years",
      qualification: "Any Degree",
      location: "Bangalore",
      description:
        "We are looking for an experienced Operations Manager to manage teams, service quality, customer relationships and overall pest control operations.",
      responsibilities: [
        "Manage day-to-day pest control operations",
        "Lead and monitor field service teams",
        "Maintain service quality and customer satisfaction",
        "Monitor operational performance and productivity",
        "Develop efficient processes for service delivery",
      ],
    },
  ];

  const scrollToApplication = (role) => {
    setSelectedRole(role);

    setTimeout(() => {
      document.getElementById("career-application")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#063b3f] text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-green-400 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-emerald-500 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-300/30 bg-white/10 px-5 py-2 text-sm font-semibold text-green-300">
              <FaUsersCog />
              Join Acuity Pest Controls
            </span>

            <h1 className="mt-7 text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Build Your Career With{" "}
              <span className="text-green-400">
                Acuity Pest Controls
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg md:text-xl leading-8 text-gray-200">
              Explore career opportunities with Acuity Pest Controls in
              Bangalore. We are looking for talented and motivated people to
              join our pest control, business supervision and operations teams.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#open-positions"
                className="inline-flex items-center gap-3 rounded-full bg-green-500 px-7 py-4 font-bold text-white shadow-lg transition hover:bg-green-600 hover:-translate-y-1"
              >
                View Open Positions
                <FaArrowRight />
              </a>

              <a
                href="#career-application"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-bold text-white transition hover:bg-white/20"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">
            <span className="text-green-600 font-bold uppercase tracking-widest text-sm">
              Careers At Acuity
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-black text-[#063b3f]">
              Grow With Our Pest Control Team
            </h2>

            <p className="mt-5 text-gray-600 leading-7">
              We believe in building a professional team that delivers
              reliable pest control services while creating opportunities for
              employees to learn, grow and develop their careers.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                title: "Career Growth",
                text: "Develop your skills and grow with our expanding operations team.",
              },
              {
                title: "Professional Environment",
                text: "Work with a team focused on quality service and customer satisfaction.",
              },
              {
                title: "Field Experience",
                text: "Gain practical experience in professional pest management services.",
              },
              {
                title: "Team Opportunities",
                text: "Work alongside technicians, supervisors and operations professionals.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-7 shadow-sm border border-gray-100 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="h-12 w-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center text-xl">
                  <FaCheckCircle />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#063b3f]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="open-positions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">
            <span className="text-green-600 font-bold uppercase tracking-widest text-sm">
              Current Openings
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-black text-[#063b3f]">
              Join Our Team
            </h2>

            <p className="mt-5 text-gray-600 leading-7">
              Explore our current career opportunities in pest control
              services, business supervision and operations in Bangalore.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-7">

            {jobs.map((job, index) => (
              <article
                key={index}
                className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-green-200"
              >
                <div className="flex items-start justify-between gap-5">

                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 shrink-0 rounded-2xl bg-[#063b3f] text-green-400 flex items-center justify-center text-2xl transition group-hover:scale-110">
                      {job.icon}
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-[#063b3f]">
                        {job.title}
                      </h3>

                      <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                        <FaMapMarkerAlt className="text-green-500" />
                        {job.location}
                      </div>
                    </div>
                  </div>

                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
                    Experience: {job.experience}
                  </span>

                  <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
                    {job.qualification}
                  </span>
                </div>

                <p className="mt-6 text-gray-600 leading-7">
                  {job.description}
                </p>

                <div className="mt-6">
                  <h4 className="font-bold text-[#063b3f]">
                    Key Responsibilities
                  </h4>

                  <ul className="mt-3 space-y-2">
                    {job.responsibilities.map((responsibility, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-600"
                      >
                        <FaCheckCircle className="mt-1 shrink-0 text-green-500" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => scrollToApplication(job.title)}
                  className="mt-7 inline-flex items-center gap-3 rounded-xl bg-[#063b3f] px-6 py-3 font-bold text-white transition hover:bg-green-600"
                >
                  Apply For This Role
                  <FaArrowRight />
                </button>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* APPLICATION */}
      <section
        id="career-application"
        className="scroll-mt-24 bg-gray-50 py-20"
      >
        <div className="max-w-5xl mx-auto px-6">

          <div className="rounded-3xl bg-[#063b3f] p-8 md:p-12 text-white shadow-2xl">

            <div className="max-w-3xl">
              <span className="text-green-400 font-bold uppercase tracking-widest text-sm">
                Apply Today
              </span>

              <h2 className="mt-3 text-3xl md:text-4xl font-black">
                Start Your Career With Acuity Pest Controls
              </h2>

              <p className="mt-5 text-gray-300 leading-7">
                Interested in joining our team? Send your details and our
                recruitment team will get in touch with you.
              </p>
            </div>

            <form
              action="https://formspree.io/f/mzeppdwo"
              method="POST"
              className="mt-10 grid md:grid-cols-2 gap-5"
            >

              <input
                type="hidden"
                name="_subject"
                value="Career Application - Acuity Pest Controls"
              />

              <input
                type="hidden"
                name="selected_role"
                value={selectedRole}
              />

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91"
                  className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Position
                </label>

                <select
                  name="position"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-green-400"
                >
                  <option value="">Select a position</option>

                  {jobs.map((job, index) => (
                    <option key={index} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold">
                  Experience
                </label>

                <input
                  type="text"
                  name="experience"
                  placeholder="Example: 2 years"
                  className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us about yourself..."
                  className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-xl bg-green-500 px-8 py-4 font-black text-white transition hover:bg-green-600 hover:-translate-y-1"
                >
                  Submit Application
                  <FaArrowRight />
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">

            <div>
              <h2 className="text-2xl md:text-3xl font-black text-[#063b3f]">
                Have Questions About Our Careers?
              </h2>

              <p className="mt-3 text-gray-600">
                Contact Acuity Pest Controls for career opportunities in
                Bangalore.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">

              <a
                href="tel:+919941229005"
                className="inline-flex items-center gap-2 rounded-xl bg-[#063b3f] px-5 py-3 font-bold text-white hover:bg-green-600 transition"
              >
                <FaPhoneAlt />
                Call Us
              </a>

              <a
                href="https://wa.me/919941229005?text=Hi%20Acuity%20Pest%20Controls,%20I%20am%20interested%20in%20a%20career%20opportunity."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-5 py-3 font-bold text-white hover:bg-green-600 transition"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

              <a
                href="mailto:info@acuitygroups.in"
                className="inline-flex items-center gap-2 rounded-xl border border-[#063b3f] px-5 py-3 font-bold text-[#063b3f] hover:bg-[#063b3f] hover:text-white transition"
              >
                <FaEnvelope />
                Email
              </a>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
};

export default PestControlCareerPage;