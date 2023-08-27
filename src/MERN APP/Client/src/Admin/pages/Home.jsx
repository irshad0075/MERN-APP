import React from "react";
import VideoCarousel from "../components/VideoCarousel";
import GadgetsAdmin from "../Components/myGadgetsAdmin.jsx";
import PetrolpriceAdmin from "../Components/petrolPriceAdmin.jsx";
import BrandsAdmin from "../Components/BrandsAdmin.jsx";
import CategoriesNameAdmin from "../Components/CategoriesNameAdmin.jsx";
import AdminFooter from "../Components/AdminFooter.jsx";

export default function Home() {
  return (
    <>
      <VideoCarousel />
      <BrandsAdmin />
      <GadgetsAdmin />
      <CategoriesNameAdmin />
      <PetrolpriceAdmin />
      <AdminFooter />
    </>
  );
}
