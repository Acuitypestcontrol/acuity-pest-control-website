import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  useLocation,
} from "react-router-dom";

import { Helmet } from "react-helmet-async";

import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

import Navbar from "./global/Navbar";
import Footer from "./global/Footer";
import ScrollToTop from "./global/ScrollToTop";

/* =========================================================
   MAIN PAGES
========================================================= */

import Home from "./components/Home";
import AboutUS from "./components/AboutUS";
import ServicesPage from "./components/Services";
import Contact from "./components/ContactUs";
import PestIdentification from "./components/pestidentification";
import PestControlLandingPage from "./components/PestControlLandingPage";

/* =========================================================
   BLOG LISTING
========================================================= */

import Blog from "./components/blogs/blogsmainpage";

/* =========================================================
   DYNAMIC BLOG DETAIL COMPONENT
========================================================= */

import BlogDetail from "./components/blogs/get-rid-of-cockroaches";

/* =========================================================
   INDIVIDUAL BLOG PAGES
========================================================= */

import SignsOfTermiteInfestation from "./components/blogs/signs-of-termite-infestation";
import PestControlVsDIY from "./components/blogs/pest-control-vs-diy";
import BedBugTreatmentGuide from "./components/blogs/bed-bug-treatment";
import RatControlTipsForHomes from "./components/blogs/rat-control-tips-for-homes";
import MosquitoPreventionRainySeason from "./components/blogs/mosquito-prevention-during-rainy-season";
import Top10HouseholdPestsBangalore from "./components/blogs/top-10-household-pests-in-bangalore";
import HowOftenShouldPestControlBeDone from "./components/blogs/how-often-should-pest-control-be-done";
import GermanCockroachVsAmericanCockroach from "./components/blogs/german-cockroach-vs-american-cockroach";
import TermiteTreatmentCostBangalore from "./components/blogs/termite-treatment-cost-bangalore";
import HowToPreventAntInfestationAtHome from "./components/blogs/how-to-prevent-ant-infestation-at-home";
import WhyRegularPestControlImportantBusinesses from "./components/blogs/why-regular-pest-control-is-important-for-businesses";
import PestControlChecklistNewHomes from "./components/blogs/pest-control-checklist-for-new-homes";
import WhyCockroachesEnterKitchen from "./components/blogs/why-cockroaches-enter-your-kitchen";

/* =========================================================
   RESIDENTIAL SERVICE PAGES
========================================================= */

import GeneralPestControl from "./components/servicepage/general-pest-control";
import AntiTermiteTreatment from "./components/servicepage/anti-termite-treatment";
import PostConstructionTermiteTreatment from "./components/servicepage/post-construction-termite";
import BedBug from "./components/servicepage/bed-bug-treatment";
import AntControlTreatment from "./components/servicepage/ant-control-treatment";
import MosquitoManagementService from "./components/servicepage/mosquito-management-service";
import CockroachManagementService from "./components/servicepage/cockroach-management-service";
import RodentManagementService from "./components/servicepage/rodent-management-service";
import WoodBorerTreatment from "./components/servicepage/wood-borer-treatment";
import PreConstructionTermiteTreatment from "./components/servicepage/pre-construction-termite-treatment";

/* =========================================================
   COMMERCIAL SERVICE PAGES
========================================================= */

import PestControlHotelsHospitals from "./components/servicepage/pest-control-hotels-hospitals";
import OfficePestControl from "./components/servicepage/office-pest-control";
import EducationalInstitutionPestControl from "./components/servicepage/educational-institution-pest-control";
import CommonAreaTreatmentResidential from "./components/servicepage/common-area-treatment-residential-complex";
import DisinfectionServices from "./components/servicepage/disinfection-services";
import WarehousePestManagement from "./components/servicepage/warehouse-pest-management";

/* =========================================================
   GAME COMPONENTS
========================================================= */

import PestGameFloatingButton from "./components/PestGameFloatingButton";
import PestGamePage from "./components/pestgame/PestGamePage";
import DefendHomeGame from "./components/pestgame/DefendHomeGame";

/* =========================================================
   GLOBAL ENQUIRY FORM
========================================================= */

import PestEnquiryForm from "./components/PestEnquiryForm";

/* =========================================================
   404 PAGE
========================================================= */

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Acuity Pest Controls</title>

        <meta
          name="description"
          content="The requested page could not be found on the Acuity Pest Controls website."
        />

        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />

        <link rel="canonical" href="https://www.acuitypestcontrols.com/404" />
      </Helmet>

      <section className="flex min-h-[70vh] items-center justify-center bg-gradient-to-br from-[#f4fbf8] to-white px-4 py-20 text-center">
        <div className="mx-auto max-w-2xl rounded-[32px] border border-green-100 bg-white p-8 shadow-[0_25px_80px_rgba(6,59,63,0.12)] sm:p-12">
          <p className="text-sm font-black uppercase tracking-[4px] text-green-700">
            Page Not Found
          </p>

          <h1 className="mt-3 text-7xl font-black text-[#063b3f] md:text-9xl">
            404
          </h1>

          <h2 className="mt-4 text-2xl font-black text-[#063b3f] sm:text-3xl">
            This page does not exist
          </h2>

          <p className="mx-auto mt-4 max-w-lg leading-7 text-gray-600">
            The page you are looking for may have been removed, renamed or moved
            to another location.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="rounded-full bg-green-600 px-7 py-3.5 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-green-700"
            >
              Return to Landing Page
            </Link>

            <Link
              to="/home"
              className="rounded-full border-2 border-green-600 px-7 py-3.5 font-bold text-green-700 transition hover:-translate-y-1 hover:bg-green-50"
            >
              Open Home Page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

/* =========================================================
   APPLICATION CONTENT
========================================================= */

const AppContent = () => {
  const location = useLocation();

  const hideGameButton =
    location.pathname === "/" ||
    location.pathname === "/pest-control-bangalore" ||
    location.pathname === "/pest-game" ||
    location.pathname === "/defend-home-game";

  return (
    <>
      <ScrollToTop />

      <Navbar />

      {!hideGameButton && <PestGameFloatingButton />}

      <PestEnquiryForm />

      <main className="pt-[89px] font-poppins md:pt-[175px]">
        <Routes>
          {/* =================================================
              MAIN LANDING PAGE
          ================================================== */}
          <Route path="/" element={<PestControlLandingPage />} />

          <Route path="/home" element={<Home />} />

          <Route
            path="/pest-control-bangalore"
            element={<PestControlLandingPage />}
          />
          {/* =================================================
              MAIN CANONICAL PAGES
          ================================================== */}

          <Route path="/about" element={<AboutUS />} />

          <Route path="/services" element={<ServicesPage />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/pest-identification" element={<PestIdentification />} />

          {/* =================================================
              SEPARATE LANDING PAGE URL
          ================================================== */}

          <Route
            path="/pest-control-bangalore"
            element={<PestControlLandingPage />}
          />

          {/* =================================================
              OLD MAIN PAGE REDIRECTS
          ================================================== */}

          <Route path="/home" element={<Navigate to="/home" replace />} />

          <Route path="/aboutus" element={<Navigate to="/about" replace />} />

          <Route path="/about-us" element={<Navigate to="/about" replace />} />

          <Route
            path="/Services"
            element={<Navigate to="/services" replace />}
          />

          <Route
            path="/contactus"
            element={<Navigate to="/contact" replace />}
          />

          <Route path="/Contact" element={<Navigate to="/contact" replace />} />

          <Route
            path="/pestidentification"
            element={<Navigate to="/pest-identification" replace />}
          />

          {/* =================================================
              BLOG LISTING
          ================================================== */}

          <Route path="/blogs" element={<Blog />} />

          <Route path="/blog" element={<Navigate to="/blogs" replace />} />

          <Route
            path="/blogsmainpage"
            element={<Navigate to="/blogs" replace />}
          />

          {/* =================================================
              INDIVIDUAL BLOG PAGES
          ================================================== */}

          <Route
            path="/blogs/signs-of-termite-infestation"
            element={<SignsOfTermiteInfestation />}
          />

          <Route
            path="/blogs/pest-control-vs-diy"
            element={<PestControlVsDIY />}
          />

          <Route
            path="/blogs/bed-bug-treatment"
            element={<BedBugTreatmentGuide />}
          />

          <Route
            path="/blogs/rat-control-tips-for-homes"
            element={<RatControlTipsForHomes />}
          />

          <Route
            path="/blogs/mosquito-prevention-during-rainy-season"
            element={<MosquitoPreventionRainySeason />}
          />

          <Route
            path="/blogs/top-10-household-pests-in-bangalore"
            element={<Top10HouseholdPestsBangalore />}
          />

          <Route
            path="/blogs/how-often-should-pest-control-be-done"
            element={<HowOftenShouldPestControlBeDone />}
          />

          <Route
            path="/blogs/german-cockroach-vs-american-cockroach"
            element={<GermanCockroachVsAmericanCockroach />}
          />

          <Route
            path="/blogs/termite-treatment-cost-bangalore"
            element={<TermiteTreatmentCostBangalore />}
          />

          <Route
            path="/blogs/how-to-prevent-ant-infestation-at-home"
            element={<HowToPreventAntInfestationAtHome />}
          />

          <Route
            path="/blogs/why-regular-pest-control-is-important-for-businesses"
            element={<WhyRegularPestControlImportantBusinesses />}
          />

          <Route
            path="/blogs/pest-control-checklist-for-new-homes"
            element={<PestControlChecklistNewHomes />}
          />

          <Route
            path="/blogs/why-cockroaches-enter-your-kitchen"
            element={<WhyCockroachesEnterKitchen />}
          />

          <Route path="/blogs/:slug" element={<BlogDetail />} />

          {/* =================================================
              RESIDENTIAL SERVICE PAGES
          ================================================== */}

          <Route
            path="/general-pest-control"
            element={<GeneralPestControl />}
          />

          <Route
            path="/anti-termite-treatment"
            element={<AntiTermiteTreatment />}
          />

          <Route
            path="/pre-construction-termite-treatment"
            element={<PreConstructionTermiteTreatment />}
          />

          <Route
            path="/post-construction-termite-treatment"
            element={<PostConstructionTermiteTreatment />}
          />

          <Route path="/bed-bug-treatment" element={<BedBug />} />

          <Route
            path="/ant-control-treatment"
            element={<AntControlTreatment />}
          />

          <Route
            path="/mosquito-management-service"
            element={<MosquitoManagementService />}
          />

          <Route
            path="/mosquito-management"
            element={<Navigate to="/mosquito-management-service" replace />}
          />

          <Route
            path="/cockroach-management-service"
            element={<CockroachManagementService />}
          />

          <Route
            path="/rodent-management-service"
            element={<RodentManagementService />}
          />

          <Route
            path="/wood-borer-treatment"
            element={<WoodBorerTreatment />}
          />

          {/* =================================================
              COMMERCIAL SERVICE PAGES
          ================================================== */}

          <Route
            path="/pest-control-hotels-hospitals"
            element={<PestControlHotelsHospitals />}
          />

          <Route
            path="/hotel-hospital-pest-control"
            element={<Navigate to="/pest-control-hotels-hospitals" replace />}
          />

          <Route path="/office-pest-control" element={<OfficePestControl />} />

          <Route
            path="/educational-institution-pest-control"
            element={<EducationalInstitutionPestControl />}
          />

          <Route
            path="/common-area-treatment-residential-complex"
            element={<CommonAreaTreatmentResidential />}
          />

          <Route
            path="/disinfection-services"
            element={<DisinfectionServices />}
          />

          <Route
            path="/warehouse-pest-management"
            element={<WarehousePestManagement />}
          />

          {/* =================================================
              OLD SERVICE URL REDIRECTS
          ================================================== */}

          <Route
            path="/post-construction-termite"
            element={
              <Navigate to="/post-construction-termite-treatment" replace />
            }
          />

          <Route
            path="/common-area-treatment"
            element={
              <Navigate
                to="/common-area-treatment-residential-complex"
                replace
              />
            }
          />

          <Route
            path="/cockroach-control"
            element={<Navigate to="/cockroach-management-service" replace />}
          />

          <Route
            path="/cockroach-pest-control"
            element={<Navigate to="/cockroach-management-service" replace />}
          />

          <Route
            path="/rodent-control"
            element={<Navigate to="/rodent-management-service" replace />}
          />

          <Route
            path="/termite-control-services"
            element={<Navigate to="/anti-termite-treatment" replace />}
          />

          <Route
            path="/residential-pest-control"
            element={<Navigate to="/general-pest-control" replace />}
          />

          <Route
            path="/residential-pest-control-services-in-bangalore-by-acuity-pest-controls"
            element={<Navigate to="/general-pest-control" replace />}
          />

          {/* =================================================
              GAME PAGES
          ================================================== */}

          <Route path="/pest-game" element={<PestGamePage />} />

          <Route path="/defend-home-game" element={<DefendHomeGame />} />

          {/* =================================================
              OLD GAME URL REDIRECTS
          ================================================== */}

          <Route
            path="/PestGamePage"
            element={<Navigate to="/pest-game" replace />}
          />

          <Route
            path="/DefendHomeGame"
            element={<Navigate to="/defend-home-game" replace />}
          />

          {/* =================================================
              FINAL 404 ROUTE
          ================================================== */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

/* =========================================================
   MAIN APP
========================================================= */

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
