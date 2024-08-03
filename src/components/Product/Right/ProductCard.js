"use client"
import Images from "@/constants/Images";
import Image from "next/legacy/image";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { PiShoppingCartFill } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import ViewItemModal from "@/components/modal/ViewItemModal";
const ProductCard = () => {

const [showModal,setShowModal]=useState(false)
  return (
    <div className="p-2 productCard">
      <div className="bg-[#ebebeb] p-8 rounded-2xl relative w-[100%] m-auto ">
        {/* hover menu appear */}
        <div className="w-full   justify-center items-center absolute bottom-6 left-0 z-50 productHover hidden">
          <div className="p-2 flex gap-2 text-lg">
            <div className="bg-white p-4 shadow-md rounded-md text-black-100 text-[#303030] hover:bg-[#007bff] hover:text-white hover:cursor-pointer" title="QuickView" onClick={()=>setShowModal(true)}>
              <FaEye />
            </div>
            <div className="bg-white p-4 shadow-md rounded-md text-black-100 text-[#303030] hover:bg-[#007bff] hover:text-white hover:cursor-pointer" title="Add to Cart">
              <PiShoppingCartFill />
            </div>
            <div className="bg-white p-4 shadow-md rounded-md text-black-100 text-[#303030] hover:bg-[#007bff] hover:text-white hover:cursor-pointer" title="Add to Wishlist">
              <FaRegHeart />
            </div>
          </div>
        </div>
        <div className="relative w-[60%] h-[220px] m-auto">
          <Image src={Images.product.src} alt="product" layout="fill" />
        </div>
      </div>
      <div className="text-center">
        <h1 className=" my-2 font-bold">W- Men Formal T-shirt</h1>
        <p className="text-blue-600 font-bold">
          Rs. <span>973289</span>
        </p>
      </div>

      <ViewItemModal showModal={showModal} setShowModal={setShowModal}/>
    </div>
  );
};

export default ProductCard;
