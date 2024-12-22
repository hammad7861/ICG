import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./MobileStyles.css";
//import axiosInstance from "./components/axiosInstance";
import CustomSection from "./components/CustomSection";
import LineSection from "./components/LineSection";
import ExploreMore from "./components/ExploreMore";
import { ProductFinder } from "./components/productFinder/ProductFinder";
import { Footer } from "./components/icgFooter/Footer";
import NavigationBar from "./components/navigation/NavigationBar";
import { CeoMessage } from "./components/ceoMessage/CeoMessage";
import TimelineContainer from "./components/timeline/TimelineContainer";
import AboutPage from "./components/about/AboutPage";
import { CareerPage } from "./components/career/CareerPage";
import { Career } from "./components/career/Career";
import { Gallery } from "./components/gallery/Gallery";
import GalleryThumbnail from "./components/gallery/GalleryThumbnail";
import ContactPage from "./contact/components/ContactPage";
import AgriculturePage from "./components/agriculture/AgriculturePage";
import Printing from "./components/agriculture/Printing";
import Electronics from "./components/agriculture/Electronics";
import MediaRelease from "./components/media/MediaRelease";
import AvailableStock from "./components/availablestock/AvailableStock";
import Automotive from "./components/agriculture/Automotive";
import { ProductsFinder } from "./components/productsfinder/ProductsFinder";
import ChemicalCategories from "./components/chemicalcategories/ChemicalCategories";
import Antioxidants from "./components/chemicalcategories/AntiOxidants";
import Absorber from "./components/chemicalcategories/Absorber";
import OpticalBrightners from "./components/chemicalcategories/OpticalBrightners";
import FlameRetardants from "./components/chemicalcategories/FlameRetardants";
import HALS from "./components/chemicalcategories/HALS";
import Construction from "./components/construction";
import PaintCoating from "./components/PaintCoating"; // Import the PaintCoating component
import PigmentsDyes from "./components/chemicalcategories/PigmentsDyes";
import AntiBlocks from "./components/chemicalcategories/AntiBlocks";
import PolymersAndResins from "./components/chemicalcategories/PolymersAndResins";
import Plasticizers from "./components/chemicalcategories/Plasticizers";
import NucleatingAgents from "./components/chemicalcategories/NucleatingAgents";
import PolymerProcessingAdditives from "./components/chemicalcategories/PolymerProcessingAdditives";
import MasterBatches from "./components/chemicalcategories/MasterBatches";
import Compounds from "./components/chemicalcategories/Compounds";
import HomeCare from "./components/HomeCare";
// import Construction from "./components/construction";
import Medical from "./components/Medical";
import Adhesive from "./components/Adhesive";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <NavigationBar />
      {/* <Navigation/> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CustomSection />
              <LineSection />
              <ExploreMore />
              {/* <FindProduct /> */}
              <ProductFinder />
              <MediaRelease />
            </>
          }
        />
        {/* <Route path="/AutomotivePage" element={<AutomotivePage  />} /> */}
        
        <Route path="/HomeCare" element={<HomeCare />} />
        <Route path="/Compunds" element={<Compounds />} />
        <Route path="/CeoMessage" element={<CeoMessage />} />
        <Route path="/Adhesive" element={<Adhesive />} />
        <Route path="/Absorber" element={<Absorber />} />
        <Route path="/Medical" element={<Medical />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/PaintCoating" element={<PaintCoating />} />
        <Route path="/Automotive" element={<Automotive />} />
        <Route path="/AgriculturePage" element={<AgriculturePage />} />
        <Route path="/Printing" element={<Printing />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/MediaRelease" element={<MediaRelease />} />
        <Route path="/AvailableStock" element={<AvailableStock />} />
        <Route path="/ProductsFinder" element={<ProductsFinder />} />
        <Route path="/ChemicalCategories" element={<ChemicalCategories />} />
        <Route path="/AntiOxidants" element={<Antioxidants />} />
        <Route path="/Absorber" element={<Absorber />} />
        <Route path="/FlameRetardants" element={<FlameRetardants />} />
        <Route path="/OpticalBrightners" element={<OpticalBrightners />} />
        <Route path="/HALS" element={<HALS />} />
        {/*<Route path="/building-construction" element={<building-construction />} /> */}
        <Route path="/PigmentsDyes" element={<PigmentsDyes />} />
        <Route path="/Antiblocks" element={<AntiBlocks />} />
        <Route path="/PolymersAndResins" element={<PolymersAndResins />} />
        <Route path="/Plasticizers" element={<Plasticizers />} />
        <Route path="/NucleatingAgents" element={<NucleatingAgents />} />
        <Route
          path="/PolymerProcessingAdditives"
          element={<PolymerProcessingAdditives />}
        />
        <Route path="/MasterBatches" element={<MasterBatches />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/CareerPage" element={<CareerPage />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/GalleryThumbnail" element={<GalleryThumbnail />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/CeoMessage" element={<CeoMessage />} />
        <Route path="/Timeline" element={<TimelineContainer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
