"use client";

import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "@/redux/category/CategorySlice";
import { getSubCategory } from "@/redux/subcategory/SubCategorySlice";
import { getUniversalTag } from "@/redux/universaltag/universalTagSlice";
import { getCategoryTag } from "@/redux/categorytag/CategoryTagSlice";
import { getNewsAdmin } from "@/redux/news/NewsSlice";

const Mainlayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    //get category
    dispatch(getCategory());
    //getSubCategory
    dispatch(getSubCategory());
    //universalTags
    dispatch(getUniversalTag());
    //categoryTagtotal
    dispatch(getCategoryTag());
    //getNewsAdmin
    dispatch(getNewsAdmin());
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize(); // Check on initial render
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      {isMobile ? (
        <>{children}</>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default Mainlayout;
