import React, { lazy, Suspense } from "react";
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
   LOADING SPINNER COMPONENT
========================================================= */

const LoadingSpinner = () => (
  <div className="flex min-h-[70vh] items-center justify-center">
    <div className="text-center">
      <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-green-600 border-t-transparent" />
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

/* =========================================================
   LAZY LOADED COMPONENTS
========================================================= */

const PestControlCareerPage = lazy(
  () => import("./components/PestControlCareerPage"),
);

/* =========================================================
   MAIN PAGES - LAZY LOADED
========================================================= */

const Home = lazy(() => import("./components/Home"));
const AboutUS = lazy(() => import("./components/AboutUS"));
const ServicesPage = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/ContactUs"));
const PestIdentification = lazy(
  () => import("./components/pestidentification"),
);
const PestControlLandingPage = lazy(
  () => import("./components/PestControlLandingPage"),
);

/* =========================================================
   BLOG LISTING - LAZY LOADED
========================================================= */

const Blog = lazy(() => import("./components/blogs/blogsmainpage"));

/* =========================================================
   DYNAMIC BLOG DETAIL - LAZY LOADED
========================================================= */

const BlogDetail = lazy(
  () => import("./components/blogs/get-rid-of-cockroaches"),
);

/* =========================================================
   INDIVIDUAL BLOG PAGES - LAZY LOADED
========================================================= */

const SignsOfTermiteInfestation = lazy(
  () => import("./components/blogs/signs-of-termite-infestation"),
);
const PestControlVsDIY = lazy(
  () => import("./components/blogs/pest-control-vs-diy"),
);
const BedBugTreatmentGuide = lazy(
  () => import("./components/blogs/bed-bug-treatment"),
);
const RatControlTipsForHomes = lazy(
  () => import("./components/blogs/rat-control-tips-for-homes"),
);
const MosquitoPreventionRainySeason = lazy(
  () => import("./components/blogs/mosquito-prevention-during-rainy-season"),
);
const Top10HouseholdPestsBangalore = lazy(
  () => import("./components/blogs/top-10-household-pests-in-bangalore"),
);
const HowOftenShouldPestControlBeDone = lazy(
  () => import("./components/blogs/how-often-should-pest-control-be-done"),
);
const GermanCockroachVsAmericanCockroach = lazy(
  () => import("./components/blogs/german-cockroach-vs-american-cockroach"),
);
const TermiteTreatmentCostBangalore = lazy(
  () => import("./components/blogs/termite-treatment-cost-bangalore"),
);
const HowToPreventAntInfestationAtHome = lazy(
  () => import("./components/blogs/how-to-prevent-ant-infestation-at-home"),
);
const WhyRegularPestControlImportantBusinesses = lazy(
  () =>
    import("./components/blogs/why-regular-pest-control-is-important-for-businesses"),
);
const PestControlChecklistNewHomes = lazy(
  () => import("./components/blogs/pest-control-checklist-for-new-homes"),
);
const WhyCockroachesEnterKitchen = lazy(
  () => import("./components/blogs/why-cockroaches-enter-your-kitchen"),
);

const MonsoonPestControl = lazy(
  () => import("./components/blogs/monsoon-pest-control"),
);

/* =========================================================
   NEW BLOG PAGES - LAZY LOADED
========================================================= */

const Howtogetridofcockroch = lazy(
  () => import("./components/blogs/getridofcockrochinkitchen"), // ✅ Matches file name
);

const Getridfromrats = lazy(
  () => import("./components/blogs/rat-control-tips-forhomes"), // ✅ Matches file name
);

/* =========================================================
   RESIDENTIAL SERVICE PAGES - LAZY LOADED
========================================================= */

const GeneralPestControl = lazy(
  () => import("./components/servicepage/general-pest-control"),
);
const AntiTermiteTreatment = lazy(
  () => import("./components/servicepage/anti-termite-treatment"),
);
const PostConstructionTermiteTreatment = lazy(
  () => import("./components/servicepage/post-construction-termite"),
);
const BedBug = lazy(() => import("./components/servicepage/bed-bug-treatment"));
const AntControlTreatment = lazy(
  () => import("./components/servicepage/ant-control-treatment"),
);
const MosquitoManagementService = lazy(
  () => import("./components/servicepage/mosquito-management-service"),
);
const CockroachManagementService = lazy(
  () => import("./components/servicepage/cockroach-management-service"),
);
const RodentManagementService = lazy(
  () => import("./components/servicepage/rodent-management-service"),
);
const WoodBorerTreatment = lazy(
  () => import("./components/servicepage/wood-borer-treatment"),
);
const PreConstructionTermiteTreatment = lazy(
  () => import("./components/servicepage/pre-construction-termite-treatment"),
);

/* =========================================================
   COMMERCIAL SERVICE PAGES - LAZY LOADED
========================================================= */

const PestControlHotelsHospitals = lazy(
  () => import("./components/servicepage/pest-control-hotels-hospitals"),
);
const OfficePestControl = lazy(
  () => import("./components/servicepage/office-pest-control"),
);
const EducationalInstitutionPestControl = lazy(
  () => import("./components/servicepage/educational-institution-pest-control"),
);
const CommonAreaTreatmentResidential = lazy(
  () =>
    import("./components/servicepage/common-area-treatment-residential-complex"),
);
const DisinfectionServices = lazy(
  () => import("./components/servicepage/disinfection-services"),
);
const WarehousePestManagement = lazy(
  () => import("./components/servicepage/warehouse-pest-management"),
);

/* =========================================================
   GAME COMPONENTS - LAZY LOADED
========================================================= */

const PestGameFloatingButton = lazy(
  () => import("./components/PestGameFloatingButton"),
);
const PestGamePage = lazy(() => import("./components/pestgame/PestGamePage"));
const DefendHomeGame = lazy(
  () => import("./components/pestgame/DefendHomeGame"),
);

/* =========================================================
   GLOBAL ENQUIRY FORM - LAZY LOADED
========================================================= */

const PestEnquiryForm = lazy(() => import("./components/PestEnquiryForm"));

/* =========================================================
   404 PAGE (STATIC - ALREADY SMALL)
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

      {/* Lazy loaded game button - only loaded when needed */}
      {!hideGameButton && (
        <Suspense fallback={null}>
          <PestGameFloatingButton />
        </Suspense>
      )}

      {/* Lazy loaded enquiry form */}
      <Suspense fallback={null}>
        <PestEnquiryForm />
      </Suspense>

      <main className="pt-[89px] font-poppins md:pt-[175px]">
        {/* WRAP ALL ROUTES WITH SUSPENSE */}
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* =================================================
                LANDING PAGE
            ================================================== */}

            <Route path="/" element={<PestControlLandingPage />} />

            {/* =================================================
                NORMAL HOME PAGE
            ================================================== */}

            <Route path="/home" element={<Home />} />

            {/* =================================================
                LANDING PAGE ALTERNATE URL
            ================================================== */}

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
            <Route
              path="/pest-identification"
              element={<PestIdentification />}
            />

            {/* =================================================
                CAREER PAGE
            ================================================== */}

            <Route
              path="/career/pest-control"
              element={<PestControlCareerPage />}
            />

            {/* =================================================
                OLD MAIN PAGE REDIRECTS
            ================================================== */}

            <Route path="/aboutus" element={<Navigate to="/about" replace />} />
            <Route
              path="/about-us"
              element={<Navigate to="/about" replace />}
            />
            <Route
              path="/Services"
              element={<Navigate to="/services" replace />}
            />
            <Route
              path="/contactus"
              element={<Navigate to="/contact" replace />}
            />
            <Route
              path="/Contact"
              element={<Navigate to="/contact" replace />}
            />
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
            <Route
              path="/blogs/rat-control-tips-forhomes"
              element={<Getridfromrats />}
            />
            {/* =================================================
                NEW BLOG ROUTES
            ================================================== */}

            <Route
              path="/blogs/getridofcockrochinkitchen"
              element={<Howtogetridofcockroch />}
            />
            <Route
              path="/blogs/monsoon-pest-control"
              element={<MonsoonPestControl />}
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
            <Route
              path="/office-pest-control"
              element={<OfficePestControl />}
            />
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
              path="/eco-friendly-pest-control-natural-pest-management-in-bangalore"
              element={<Navigate to="/general-pest-control" replace />}
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
                FINAL 404
            ================================================== */}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
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
