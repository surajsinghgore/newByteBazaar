import Images from "@/constants/Images";
import Image from "next/legacy/image";

const RightSideItemProduct = () => {
  return (
    <div class="flex items-center justify-between py-3 px-4">
      <div class="relative border p-3 rounded-lg">
        <div class="bg-black absolute -top-3 -right-2 text-white text-[10px] p-1 px-2.5 rounded-full z-40">1</div>
        <div class="relative w-[70px] h-[70px]">
          <Image src={Images.product} alt="product" layout="fill" />
        </div>
      </div>
      <div class="flex-1 pl-3">Apple iPhone 13</div>
      <div class="titleName">24234234323</div>
    </div>
  );
};

export default RightSideItemProduct;
