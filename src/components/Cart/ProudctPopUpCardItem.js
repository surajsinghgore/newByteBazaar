import Image from "next/legacy/image";
import Images from "@/constants/Images";
import { IoCloseSharp } from "react-icons/io5";
const ProudctPopUpCardItem = () => {
  return (
    <div class="flex gap-2 items-center my-3">
      <div class="w-[20%] relative">
        <div class="absolute top-0 left-0 z-10 bg-white p-1 rounded-full border cursor-pointer hover:bg-blue-500 hover:text-white" title="Remove">
          <IoCloseSharp />
        </div>
        <div class="relative w-[90%] m-auto h-[90px]">
          <Image src={Images.cart1} alt="cart1" layout="fill" className="rounded-md" />
        </div>
      </div>
      <div class="left">
        <h1 className="font-bold">F.Shop Smart sa/ dashg</h1>
        <p className="font-medium">1 x Rs. 4,700.00</p>
      </div>
    </div>
  );
};

export default ProudctPopUpCardItem;
