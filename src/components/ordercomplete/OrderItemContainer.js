import Images from "@/constants/Images";
import Image from "next/legacy/image";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaMinus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
const OrderItemContainer = () => {
  return (
    <div className="my-4">
      <div className="flex items-center gap-5 justify-between">
        <div className="">
          <div className="relative w-[50px] h-[50px]">
            <Image src={Images.product.src} alt="Image " layout="fill" />
          </div>
        </div>
        <div className="flex-1">
          <div className="aa">Samsumg Galaxt 20 mobile</div>
          <div className="text-sm">Qty: 1</div>
        </div>

        <div className="image">695555</div>
      </div>
    </div>
  );
};

export default OrderItemContainer;
