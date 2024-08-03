"use client";
import Images from "@/constants/Images";
import Image from "next/legacy/image";
import React, { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
const ViewItemModal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  // Function to handle click outside the modal
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  if (!showModal) return null;
  return (
    <>
      {showModal && (
        <>
          <div className="fixed inset-0 bg-[#3f3f3f] bg-opacity-90 overflow-y-auto h-full w-full z-50">
            <div className="flex justify-center items-center  w-full h-[100vh] relative ">
              <div className="relative  mx-auto p-5  border w-[60vw] flex justify-center items-center shadow-lg rounded-lg bg-white pb-10" ref={modalRef}>
                <div className="mt-3 px-4">
                  <div className="mx-auto flex justify-center gap-5">
                    <div class="w-[50%] bg-[#ebebeb] flex justify-center items-center h-[54vh] rounded-lg">
                      <div class=" relative w-[40%] m-auto h-[30vh]">
                        <Image src={Images.product.src} alt="Controller" className="" layout="fill" />
                      </div>
                    </div>
                    <div class="flex-1 pl-4 relative">
                      <div class="absolute top-0 right-0 text-2xl cursor-pointer hover:text-red-500" title="close modal" onClick={()=>setShowModal(false)}>
                        <IoClose />
                      </div>
                      <h3 className="py-5 text-2xl leading-6 font-medium text-gray-900">Nb. CH99 3D Video Game Controller</h3>
                      <h3 className="py-2 text-xl leading-6 font-medium text-gray-600">Rs 556606</h3>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam sint aut expedita ea. Repellat vel, nisi nesciunt cum perspiciatis atque sapiente qui aut praesentium voluptatem iusto architecto est recusandae illo deleniti maxime. Distinctio neque quos velit illum, vero recusandae sequi adipisci quas non sapiente maiores magnam facere commodi exercitationem quia natus repellendus dolorum aliquid! Quisquam ducimus cum esse reprehenderit tempora eius error, nulla corrupti optio expedita? Saepe quam dicta aliquam rerum sed enim animi odit, et placeat, ipsam tempora libero voluptatibus reprehenderit consectetur mollitia omnis culpa quibusdam eligendi. Ea, et.</p>
                      <div className="items-center py-3">

                        <div className="flex justify-between items-center mt-3">
                          <button className="bg-bgColor-800 p-4 px-5 text-white rounded-md hover:bg-slate-950 w-full">Add to Cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ViewItemModal;
