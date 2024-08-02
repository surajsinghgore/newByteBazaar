import React from "react";
import TopSection from "./Right/TopSection";
import ProductCard from "./Right/ProductCard";

const RightMainContainer = () => {
  return (
    <div className="w-[98%] m-auto">
      <TopSection />
      <div className="grid grid-cols-5 gap-4 w-full h-20 my-10 sm:grid-cols-1 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default RightMainContainer;
