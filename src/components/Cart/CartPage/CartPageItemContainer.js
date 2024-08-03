import Images from "@/constants/Images";
import Image from "next/legacy/image";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaMinus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
const CartPageItemContainer = () => {
  return (
    <div class="p-8 px-10 border-b">
      <div className="flex items-center gap-5 justify-between">
        <div class="">
          <div className="relative w-[150px] h-[150px]">
            <Image src={Images.product.src} alt="Image " layout="fill" />
          </div>
        </div>
        <div className="image">Samsumg Galaxt 20 mobile</div>
        <div className="image">788545</div>
        <div className="image">
          <div class="flex items-center  ">
            <div class="border p-3 rounded-tl-lg  rounded-bl-lg cursor-pointer hover:bg-bgColor-900 hover:text-white">
              <FaMinus />
            </div>
            <div class="border-y p-2 px-7 font-semibold">1</div>
            <div class="border p-3 rounded-tr-lg  rounded-br-lg hover:bg-bgColor-900 hover:text-white cursor-pointer">
              <IoMdAdd />
            </div>
          </div>
        </div>
        <div className="image">695555</div>
        <div className="cursor-pointer font-bold text-2xl hover:text-bgColor-800 mr-4">
          <IoCloseSharp />
        </div>
      </div>
    </div>
  );
};

export default CartPageItemContainer;
