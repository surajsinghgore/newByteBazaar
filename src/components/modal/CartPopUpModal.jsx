import Images from "@/constants/Images";
import Image from "next/legacy/image";
import { IoCloseSharp } from "react-icons/io5";
const CartPopUpModal = () => {
  return (
    <div className="">
      <div className="bg-black flex-1 h-[100vh]   w-[100%] fixed top-0 left-0 opacity-50 z-40"></div>
      <div className="bg-white w-[30%] h-[100vh]  z-50 rounded-tl-3xl rounded-bl-3xl shadow-lg fixed top-0 right-0 ">
        <div className="p-6">
          <div className="border-b-2 flex justify-between text-2xl py-5">
            <div className="title text-primaryColor-900 font-bold">Cart</div>
            <div className="title text-primaryColor-900 font-bold">
              <i className="cursor-pointer" title="close cart">
                <IoCloseSharp />
              </i>
            </div>
          </div>

          <div className="h-[65vh] my-4 overflow-x-hidden overflow-y-auto mainFormSection">
            <p>No Product In Cart</p>
            <div class="flex gap-2 items-center my-3">
              <div class="w-[20%] relative">
                <div class="absolute top-0 left-0 z-10 bg-white p-1 rounded-full border cursor-pointer">
                  <IoCloseSharp />
                </div>
                <div class="relative w-[90%] m-auto h-[90px]">
                  <Image src={Images.cart1} alt="cart1" layout="fill" className="rounded-sm" />
                </div>
              </div>
              <div class="left">
                <h1 className="font-bold">F.Shop Smart sa/ dashg</h1>
                <p className="font-medium">1 x Rs. 4,700.00</p>
              </div>
            </div>
          </div>

          <div class="flex justify-between border-y-2 p-4">
            <div class="font-bold text-primaryColor-900">Subtotal:</div>
            <div class="font-bold text-primaryColor-800">Rs. 4,700.00</div>
          </div>

          {/* btn section */}
          <div class="flex justify-between my-4 text-lg">
            <button className="bg-bgColor-800 w-[48%] p-3 rounded-md text-white">View Cart</button>
            <button className="bg-bgColor-800 w-[48%] rounded-md text-white">Checkout</button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default CartPopUpModal;
