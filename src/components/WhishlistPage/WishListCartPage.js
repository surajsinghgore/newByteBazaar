"use client";
import Images from "@/constants/Images";
import Image from "next/legacy/image";
import React, { useState } from "react";
import ViewItemModal from "../modal/ViewItemModal";

const WishListCartPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="my-2">
        <div className="w-[80%] m-auto">
          <div className="bg-[#e8e7ea] p-5 rounded-2xl ">
            <div className="relative w-[40%] m-auto h-[200px]">
              <Image src={Images.product.src} layout="fill" alt="prouduct" />
            </div>
          </div>
          <div className="text-center">
            <h1 className="py-2 font-bold text-lg">S. Mokmol Jacket</h1>
            <h1 className="font-medium text-md text-red-500">Rs 4545</h1>
            <div className="my-4">
              <button className="bg-[#d3122a] p-2 px-5 text-white rounded-md hover:bg-slate-950 w-full" onClick={() => setShowModal(true)}>
                Quick View
              </button>
              <button className="bg-black p-2 px-5 text-white rounded-md hover:bg-slate-950 w-full mt-2">Remove From Wishlist</button>
            </div>
          </div>
        </div>
      </div>
      <ViewItemModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default WishListCartPage;
