import LeftCategoryMenu from "@/components/Product/LeftCategoryMenu";
import ProductTopBanner from "@/components/Product/ProductTopBanner";
import RightMainContainer from "@/components/Product/RightMainContainer";
import React from "react";

export default function page() {
  return (
    <div>
      <ProductTopBanner />
      <div className="mainSection flex gap-10 flex-wrap">
        <div className="left sm:hidden">
          <LeftCategoryMenu />
        </div>
        <div className="flex-1 sm:w-[100%]">
          <RightMainContainer />
        </div>
      </div>
    </div>
  );
}
