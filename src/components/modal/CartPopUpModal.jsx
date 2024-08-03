"use client";

import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { cartPopUpState } from "../../redux/Slice/CartPopUpModelState";
import ProudctPopUpCardItem from "../Cart/ProudctPopUpCardItem";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

const CartPopUpModal = () => {
  const modalRef = useRef(null);
  const cartState = useSelector((state) => state.cartPopUpState);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(cartPopUpState(false));
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (cartState.state) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [cartState.state]);

  return (
    <>
      {cartState?.state && (
        <>
          <div className="">
            <div className="bg-black flex-1 h-[100vh]   w-[100%] fixed top-0 left-0 opacity-50 z-40"></div>
            <div className="bg-white w-[30%] h-[100vh]  z-50 rounded-tl-3xl rounded-bl-3xl shadow-lg fixed top-0 right-0 " ref={modalRef}>
              <div className="p-10">
                <div className="border-b-2 flex justify-between text-2xl py-5">
                  <div className="title text-primaryColor-900 font-bold">Cart</div>
                  <div className="title text-primaryColor-900 font-bold">
                    <i className="cursor-pointer" title="close cart" onClick={() => closeModal()}>
                      <IoCloseSharp />
                    </i>
                  </div>
                </div>

                <div className="h-[65vh] my-4 overflow-x-hidden overflow-y-auto mainFormSection">
                  <p>No Product In Cart</p>
                  <ProudctPopUpCardItem cartState={cartState} />
                </div>

                <div className="flex justify-between border-y-2 p-4">
                  <div className="font-bold text-primaryColor-900">Subtotal:</div>
                  <div className="font-bold text-primaryColor-800">Rs. 4,700.00</div>
                </div>

                {/* btn section */}
                <div className="flex justify-between my-4 text-lg">
                  <Link href={"/cart"} className="bg-bgColor-800 w-[48%] text-center p-3 rounded-md text-white hover:bg-slate-950">
                    <button>View Cart</button>
                  </Link>
                  <Link href={"/checkout"} className="bg-bgColor-800 w-[48%] text-center p-3 rounded-md text-white hover:bg-slate-950">
                  <button >Checkout</button>
                  </Link>
                </div>
              </div>
            </div>{" "}
          </div>
        </>
      )}
    </>
  );
};

export default CartPopUpModal;
