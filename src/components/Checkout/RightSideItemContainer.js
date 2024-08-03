import Images from "@/constants/Images";
import Image from "next/legacy/image";
import React from "react";
import RightSideItemProduct from "./RightSideItemProduct";

const RightSideItemContainer = () => {
  return (
    <div className="h-[55vh] overflow-x-hidden w-full">
      <RightSideItemProduct />
      <RightSideItemProduct />
      <RightSideItemProduct />
      <RightSideItemProduct />
      <RightSideItemProduct />
      <RightSideItemProduct />
      <RightSideItemProduct />
      <RightSideItemProduct />
    </div>
  );
};

export default RightSideItemContainer;
