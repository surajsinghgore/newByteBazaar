import Image from "next/legacy/image";
import Link from "next/link";

export default function HomeSwiperCard({ data }) {
  return (
    <div className="relative">
      <div className="main">
        <div className="relative w-full h-[75vh] ">
          <Image src={data?.bannerImage?.src ?? ""} alt={data?.bannerImage?.src ?? ""} layout="fill" className="object-cover" />
        </div>
      </div>

      <div className={`absolute bottom-40 ${data?.direction==='left'?'left-0':'right-0'} w-[50%]`}>
        <div className="p-4 px-8">
          <h6 className="text-sky-800  font-bold text-xl">{data?.category ?? ""}</h6>
          <h1 className="text-black text-4xl font-bold py-2">{data?.title ?? ""}</h1>
          <p className="w-[90%] text-lg font-medium">{data?.description ?? ""}</p>
          <Link href={data?.link ?? ""}>
            <button className="bg-bgColor-900 px-20 cursor-pointer text-white py-4 my-6 rounded-lg outline-none hover:bg-hoverEffect-900">Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
