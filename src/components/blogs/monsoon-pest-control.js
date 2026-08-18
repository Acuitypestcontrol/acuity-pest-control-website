import React from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/seo";

import bannerImage from "../../images/Monsoon Pest Control Tips for Bangalore Homes.jpg";

const MonsoonPestControl = () => {
  return (
    <div className="w-full bg-white text-gray-800 overflow-hidden">
      <SEO
        title="Monsoon Pest Control Tips for Bangalore Homes | Acuity Pest Control"
        description="Learn how to protect your Bangalore home from mosquitoes, cockroaches, termites and rodents during monsoon with these pest control tips."
        keywords="monsoon pest control Bangalore, rainy season pest control, mosquito control Bangalore, cockroach control Bangalore, termite prevention Bangalore"
        canonical="https://www.acuitypestcontrols.com/blogs/monsoon-pest-control"
        image="https://www.acuitypestcontrols.com/logo.png"
      />

      <section className="relative h-[55vh] md:h-[110vh] flex items-center">
        <img
          src={bannerImage}
          alt="Monsoon pest control tips for Bangalore homes"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
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
              <span className="text-[#063b3f] font-semibold">Monsoon Pest Control Tips</span>
            </nav>

            <header className="mb-10">
              <span className="text-green-700 font-bold tracking-[3px] uppercase text-sm">Seasonal Pest Control</span>
              <h1 className="text-4xl md:text-5xl font-black text-[#063b3f] mt-4 mb-5 leading-tight">
                Monsoon Pest Control Tips for Bangalore Homes
              </h1>
              <p className="text-gray-700 leading-8">
                Monsoon season brings relief from heat but also increases pest activity. This guide explains why pests increase during rainy season and how to protect your home with professional{" "}
                <Link to="/general-pest-control" className="text-green-700 font-semibold hover:underline">
                  pest control services in Bangalore
                </Link>
                .
              </p>
            </header>

            <section className="mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Why Pests Increase During Monsoon
              </h2>
              <p className="text-gray-700 leading-8 mb-5">
                Moisture, stagnant water and damp corners attract mosquitoes, cockroaches, termites and rodents during rainy season.
              </p>
              <p className="text-gray-700 leading-8">
                Rainwater collects in buckets, plant trays, terrace corners, balcony areas, drains and open containers — creating ideal breeding conditions for pests.
              </p>
            </section>

            <section className="mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Common Monsoon Pests
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>Mosquitoes:</strong> Breed in stagnant water, drains and plant trays. Book{" "}
                    <Link to="/mosquito-management-service" className="text-green-700 font-semibold hover:underline">
                      mosquito control service
                    </Link>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>Cockroaches:</strong> Enter homes seeking shelter from rain. Need{" "}
                    <Link to="/cockroach-management-service" className="text-green-700 font-semibold hover:underline">
                      cockroach control
                    </Link>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>Termites:</strong> Moisture attracts them to wooden areas. Get{" "}
                    <Link to="/anti-termite-treatment" className="text-green-700 font-semibold hover:underline">
                      termite treatment
                    </Link>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>Rodents:</strong> Seek dry shelter during heavy rain. Try{" "}
                    <Link to="/rodent-management-service" className="text-green-700 font-semibold hover:underline">
                      rodent control
                    </Link>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>Ants:</strong> Enter homes looking for food and shelter. Use{" "}
                    <Link to="/ant-control-treatment" className="text-green-700 font-semibold hover:underline">
                      ant control
                    </Link>
                  </span>
                </li>
              </ul>
            </section>

            <section className="mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#063b3f] mt-4 mb-6">
                Monsoon Pest Prevention Tips
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">1</span>
                  <span><strong>Remove stagnant water:</strong> Empty buckets, plant trays and containers regularly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">2</span>
                  <span><strong>Cover water containers:</strong> Keep overhead tanks and drums tightly covered</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">3</span>
                  <span><strong>Clean drains:</strong> Remove blockages so rainwater flows properly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">4</span>
                  <span><strong>Install mosquito screens:</strong> Use screens on windows and doors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">5</span>
                  <span><strong>Maintain gardens:</strong> Trim dense plants and avoid overwatering</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">6</span>
                  <span><strong>Seal cracks:</strong> Close gaps around pipes, windows and doors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">7</span>
                  <span><strong>Store food properly:</strong> Keep food in sealed containers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">8</span>
                  <span><strong>Book professional treatment:</strong> Schedule{" "}
                    <Link to="/general-pest-control" className="text-green-700 font-semibold hover:underline">
                      general pest control
                    </Link> before monsoon peaks
                  </span>
                </li>
              </ul>
            </section>

            <div className="bg-[#063b3f] text-white rounded-3xl p-7 md:p-9 mb-14">
              <h2 className="text-3xl font-black mb-4">
                Need Professional Pest Control Before Monsoon?
              </h2>
              <p className="text-gray-200 leading-7 mb-6">
                Book a professional pest inspection and treatment for your home before the monsoon peaks.
              </p>
              <Link to="/contact" className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-bold text-white inline-block">
                Contact Us Today →
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-3xl md:text-4xl font-black text-[#063b3f] mb-6">
                📖 You Might Also Like
              </h3>
              <div className="grid sm:grid-cols-2 gap-5">
                <Link to="/blogs/mosquito-prevention-during-rainy-season" className="block bg-[#f8fcfb] border border-green-100 rounded-2xl p-5 hover:shadow-md transition">
                  <h4 className="font-black text-[#063b3f]">Mosquito Prevention During Rainy Season</h4>
                  <p className="text-gray-600 text-sm">Protect your family from mosquitoes during monsoon.</p>
                </Link>
                <Link to="/blogs/how-to-get-rid-of-cockroaches" className="block bg-[#f8fcfb] border border-green-100 rounded-2xl p-5 hover:shadow-md transition">
                  <h4 className="font-black text-[#063b3f]">How to Get Rid of Cockroaches</h4>
                  <p className="text-gray-600 text-sm">Learn how to get rid of cockroaches in your kitchen.</p>
                </Link>
              </div>
            </div>
          </main>

          <aside className="lg:w-1/3">
            <div className="bg-[#063b3f] text-white rounded-3xl p-7 sticky top-28">
              <h3 className="text-3xl font-black mb-3">Need Pest Control?</h3>
              <p className="text-gray-200 text-sm leading-6 mb-5">Get professional pest control for your home before the monsoon.</p>
              <a href="tel:+919941229005" className="block w-full bg-green-600 hover:bg-green-700 text-center py-3.5 rounded-xl font-bold text-base mb-3">📞 Call Now</a>
              <Link to="/contact" className="block w-full border border-white text-center py-3.5 rounded-xl font-bold text-base hover:bg-white/10">Contact Us</Link>
            </div>
          </aside>
        </div>
      </div>

      <section className="py-16 bg-[#063b3f] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-5">Protect Your Home This Monsoon</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919941229005" className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold">Call Now</a>
            <Link to="/general-pest-control" className="border border-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10">View Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MonsoonPestControl;