import Image from "next/legacy/image";
import Images from "@/constants/Images";
const ProductTopBanner = () => {
  return (
    <div className="w-[90%] m-auto bg-[#ededed]  my-10 rounded-lg flex items-center gap-2 p-8">
      <div className="details flex-1">
        <div className="details">
          <h1 className="font-bold text-2xl">Featured (Products)</h1>
          <p className="py-4">Welcome to our collection, where excitement meets discovery. We&apos;re committed to keeping you at the forefront technology, and lifestyle trends with smartphone,watches and earphones</p>
        </div>
      </div>
      <div className="image relative w-[20%] h-[250px]">
        <Image src={Images.category} alt="main image" layout="fill" className="rounded-lg" />
      </div>
    </div>
  );
};

export default ProductTopBanner;
