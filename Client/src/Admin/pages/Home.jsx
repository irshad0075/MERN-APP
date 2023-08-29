import React from "react";
import VideoCarousel from "../components/VideoCarousel";
import GadgetsAdmin from "../Components/myGadgetsAdmin.jsx";
import BrandsAdmin from "../Components/BrandsAdmin.jsx";
import CategoriesNameAdmin from "../Components/CategoriesNameAdmin.jsx";

export default function Home() {
  return (
    <>
      <VideoCarousel />
      <BrandsAdmin />
      <GadgetsAdmin />
      <CategoriesNameAdmin />
    </>
  );
}
