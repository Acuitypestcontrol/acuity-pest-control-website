import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

import Navbar from "./global/Navbar";
import Footer from "./global/Footer";
import ScrollToTop from "./global/ScrollToTop";

import Home from "./components/Home";
import AboutUS from "./components/AboutUS";
import ServicesPage from "./components/Services";
import Contact from "./components/ContactUs";
import PestIdentification from "./components/pestidentification";

import Blog from "./components/blogs/blogsmainpage";
import BlogDetail from "./components/blogs/get-rid-of-cockroaches";
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

// Service pages
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
import PestControlHotelsHospitals from "./components/servicepage/pest-control-hotels-hospitals";
import OfficePestControl from "./components/servicepage/office-pest-control";
import EducationalInstitutionPestControl from "./components/servicepage/educational-institution-pest-control";
import CommonAreaTreatmentResidential from "./components/servicepage/common-area-treatment-residential-complex";
import DisinfectionServices from "./components/servicepage/disinfection-services";
import WarehousePestManagement from "./components/servicepage/warehouse-pest-management";

import PestGameFloatingButton from "./components/PestGameFloatingButton";
import PestGamePage from "./components/pestgame/PestGamePage";
import DefendHomeGame from "./components/pestgame/DefendHomeGame";

import PestEnquiryForm from "./components/PestEnquiryForm";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <PestGameFloatingButton />
      <PestEnquiryForm />
      <main className="pt-[155px] md:pt-[175px] font-poppins">
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<AboutUS />} />
          <Route path="/aboutus" element={<AboutUS />} />

          <Route path="/services" element={<ServicesPage />} />
          <Route path="/Services" element={<ServicesPage />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/contactus" element={<Contact />} />

          <Route path="/pestidentification" element={<PestIdentification />} />

          {/* Blog listing */}
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogsmainpage" element={<Blog />} />

          {/* Blog pages */}
          <Route
            path="/blogs/get-rid-of-cockroaches"
            element={<BlogDetail />}
          />

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

          {/* Service pages */}
          <Route
            path="/general-pest-control"
            element={<GeneralPestControl />}
          />

          <Route
            path="/anti-termite-treatment"
            element={<AntiTermiteTreatment />}
          />

          <Route
            path="/post-construction-termite-treatment"
            element={<PostConstructionTermiteTreatment />}
          />

          <Route
            path="/post-construction-termite"
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

          <Route
            path="/pre-construction-termite-treatment"
            element={<PreConstructionTermiteTreatment />}
          />

          <Route
            path="/pest-control-hotels-hospitals"
            element={<PestControlHotelsHospitals />}
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
            path="/common-area-treatment"
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

          {/* Game pages */}
          <Route path="/PestGamePage" element={<PestGamePage />} />
          <Route path="/pest-game" element={<PestGamePage />} />

          <Route path="/DefendHomeGame" element={<DefendHomeGame />} />
          <Route path="/defend-home-game" element={<DefendHomeGame />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
