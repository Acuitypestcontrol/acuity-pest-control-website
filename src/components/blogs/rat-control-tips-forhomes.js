import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/Black Rat Roof Rat.png";

const RatControlTipsForHomes = () => {
  return (
    <div className="w-full bg-white text-gray-800 overflow-hidden">
      <SEO
        title="Rat Control Tips for Homes | Acuity Pest Control Bangalore"
        description="Learn rat control tips for homes in Bangalore. Discover signs of rat infestation, health risks, prevention tips and professional rodent control services."
        keywords="rat control Bangalore, rodent control Bangalore, rat infestation signs, rat prevention tips, rodent pest control, rat treatment Bangalore"
        canonical="https://www.acuitypestcontrols.com/blogs/rat-control-tips-for-homes"
        image="https://www.acuitypestcontrols.com/logo.png"
      />

      <section className="relative h-[55vh] md:h-[110vh] flex items-center">
        <img
          src={bannerImage}
          alt="Rat control tips for homes in Bangalore"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <main className="lg:w-2/3">
            <nav className="mb-8 text-sm text-gray-600 flex flex-wrap items-center gap-2">
              <Link to="/" className="hover:text-green-700 hover:underline">Home</Link>
              <span>/</span>
              <Link to="/blogs" className="hover:text-green-700 hover:underline">Blogs</Link>
              <span>/</span>
              <span className="text-[#063b3f] font-semibold">Rat Control Tips</span>
            </nav>

            <header className="mb-10">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">Rodent Control Bangalore</span>
              <h1 className="text-4xl md:text-5xl font-black text-[#063b3f] mt-4 mb-5 leading-tight">
                Rat Control Tips for Homes: How to Keep Rats Away
              </h1>
              <p className="text-gray-700 leading-8">
                Rats can enter homes through small gaps, drains, pipes and roof openings. This guide explains how to identify a rat infestation, what attracts rodents, and how to prevent them. For professional help, explore our{" "}
                <Link to="/rodent-management-service" className="text-green-700 font-semibold hover:underline">
                  rodent control service in Bangalore
                </Link>
                .
              </p>
            </header>

            <section className="mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Why Rats Enter Homes
              </h2>
              <p className="text-gray-700 leading-8 mb-5">
                Rats enter homes searching for food, water and shelter. They are attracted to garbage, pet food, stored grains and water leaks.
              </p>
              <p className="text-gray-700 leading-8">
                Once inside, rats can damage furniture, electrical wiring, food packets and insulation. They often remain hidden during the day and become active at night.
              </p>
            </section>

            <section className="mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Signs of Rat Infestation
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">⚠</span>
                  <span><strong>Rat droppings:</strong> Small dark pellets near food areas or corners</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">⚠</span>
                  <span><strong>Scratching noises:</strong> Sounds inside walls, ceilings or storage rooms at night</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">⚠</span>
                  <span><strong>Gnaw marks:</strong> Chewed furniture, wires, doors or plastic pipes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">⚠</span>
                  <span><strong>Burrows and holes:</strong> Small holes near walls, drains or gardens</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">⚠</span>
                  <span><strong>Unpleasant odour:</strong> Strong smell from hidden nesting areas</span>
                </li>
              </ul>
            </section>

            <section className="mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Health and Property Risks
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl">❗</span>
                  <span>Contaminate food and kitchen surfaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl">❗</span>
                  <span>Chew electrical wires – risk of short circuits or fire</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl">❗</span>
                  <span>Damage furniture, doors and insulation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl">❗</span>
                  <span>Create hygiene problems in homes and businesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl">❗</span>
                  <span>Spread diseases through droppings and urine</span>
                </li>
              </ul>
            </section>

            <section className="mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Rat Prevention Tips for Homes
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>Seal entry points:</strong> Close gaps around doors, windows, pipes and drains</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>Store food properly:</strong> Keep grains and food in sealed containers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>Manage garbage:</strong> Dispose of waste daily with covered bins</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>Remove clutter:</strong> Clear cardboard boxes and unused materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>Repair water leaks:</strong> Fix leaking taps and pipes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>Maintain gardens:</strong> Trim plants and avoid clutter near the building</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>Book professional rodent control:</strong> Schedule regular{" "}
                    <Link to="/rodent-management-service" className="text-green-700 font-semibold hover:underline">
                      rodent control service
                    </Link>
                  </span>
                </li>
              </ul>
            </section>

            <section className="mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                When to Call Professional Pest Control
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">➜</span>
                  <span>Rats keep returning after using traps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">➜</span>
                  <span>Multiple entry points are visible</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">➜</span>
                  <span>Rat activity is spreading to other rooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">➜</span>
                  <span>DIY methods are not working</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">➜</span>
                  <span>You notice gnaw marks on electrical wires</span>
                </li>
              </ul>
              <p className="mt-5 text-gray-700 leading-8">
                If you notice these signs, book a{" "}
                <Link to="/contact" className="text-green-700 font-semibold hover:underline">
                  professional rodent inspection
                </Link>{" "}
                today.
              </p>
            </section>

            <div className="bg-[#063b3f] text-white rounded-3xl p-7 md:p-9 mb-14">
              <h2 className="text-3xl font-black mb-4">
                Need Professional Rat Control?
              </h2>
              <p className="text-gray-200 leading-7 mb-6">
                Book a professional rodent inspection and treatment for your home today.
              </p>
              <Link to="/rodent-management-service" className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-bold text-white inline-block">
                View Rodent Control Service →
              </Link>
              <Link to="/contact" className="ml-4 border border-white px-6 py-3 rounded-xl font-bold text-white hover:bg-white/10 inline-block">
                Contact Us
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                📖 You Might Also Like
              </h3>
              <div className="grid sm:grid-cols-2 gap-5">
                <Link to="/blogs/signs-of-termite-infestation" className="block bg-[#f8fcfb] border border-green-100 rounded-2xl p-5 hover:shadow-md transition">
                  <h4 className="font-black text-[#063b3f]">Signs of Termite Infestation</h4>
                  <p className="text-gray-600 text-sm">Learn the common warning signs of termites in your home.</p>
                </Link>
                <Link to="/blogs/how-to-prevent-ant-infestation-at-home" className="block bg-[#f8fcfb] border border-green-100 rounded-2xl p-5 hover:shadow-md transition">
                  <h4 className="font-black text-[#063b3f]">How to Prevent Ant Infestation</h4>
                  <p className="text-gray-600 text-sm">Simple ways to prevent ants from entering your home.</p>
                </Link>
                <Link to="/blogs/pest-control-checklist-for-new-homes" className="block bg-[#f8fcfb] border border-green-100 rounded-2xl p-5 hover:shadow-md transition">
                  <h4 className="font-black text-[#063b3f]">Pest Control Checklist for New Homes</h4>
                  <p className="text-gray-600 text-sm">Complete checklist for new home pest control.</p>
                </Link>
                <Link to="/blogs/why-regular-pest-control-is-important-for-businesses" className="block bg-[#f8fcfb] border border-green-100 rounded-2xl p-5 hover:shadow-md transition">
                  <h4 className="font-black text-[#063b3f]">Why Businesses Need Pest Control</h4>
                  <p className="text-gray-600 text-sm">Learn why regular pest control is important for businesses.</p>
                </Link>
              </div>
            </div>
          </main>

          <aside className="lg:w-1/3">
            <div className="bg-[#063b3f] text-white rounded-3xl p-7 sticky top-28">
              <h3 className="text-3xl font-black mb-3">Need Rat Control?</h3>
              <p className="text-gray-200 text-sm leading-6 mb-5">Get professional rodent control for your home today.</p>
              <a href="tel:+919941229005" className="block w-full bg-green-600 hover:bg-green-700 text-center py-3.5 rounded-xl font-bold text-base mb-3">📞 Call Now</a>
              <Link to="/contact" className="block w-full border border-white text-center py-3.5 rounded-xl font-bold text-base hover:bg-white/10">Contact Us</Link>
            </div>

            <div className="mt-6 bg-[#f8fcfb] border border-green-100 rounded-3xl p-6">
              <h4 className="font-black text-[#063b3f] text-lg mb-4">🛠 Related Services</h4>
              <div className="space-y-3">
                <Link to="/rodent-management-service" className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm">Rodent Control</Link>
                <Link to="/general-pest-control" className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm">General Pest Control</Link>
                <Link to="/cockroach-management-service" className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm">Cockroach Control</Link>
                <Link to="/anti-termite-treatment" className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm">Termite Treatment</Link>
                <Link to="/bed-bug-treatment" className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm">Bed Bug Treatment</Link>
                <Link to="/warehouse-pest-management" className="block text-[#063b3f] font-semibold hover:text-green-700 transition text-sm">Warehouse Pest Management</Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <section className="py-16 bg-[#063b3f] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-5">Need Professional Rat Control?</h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Get professional rodent control for your home, apartment, restaurant, office or warehouse across Bangalore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919941229005" className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold">Call Now</a>
            <Link to="/rodent-management-service" className="border border-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10">View Service</Link>
            <Link to="/contact" className="border border-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10">Get a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RatControlTipsForHomes;