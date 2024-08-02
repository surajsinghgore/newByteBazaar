import Image from "next/legacy/image";
import Images from "../../constants/Images.js";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
function page() {
  return (
    <header className="flex items-center p-4 border-b sm:flex-wrap">
      <div class="flex items-center gap-2">
        <div class="logo relative w-[70px] h-[50px] sm:h-[20px] sm:w-[20px]">
          <Link href={"/"}>
            <Image src={Images.icon.src} alt="logo" layout="fill" />
          </Link>
        </div>
        <div class="text-2xl font-semibold sm:text-sm">
          <Link href={"/"}>
            BYTE <span className="text-skyblue-900">BAZAAR</span>
          </Link>
        </div>
      </div>

      <div class="flex items-center gap-10 flex-1 justify-center text-2xl font-semibold text-[#3b3b3b] sm:py-2 sm:pl-2 sm:text-sm sm:gap-4 ">
        <li>
          <Link href="">Home</Link>
        </li>
        <li>
          <Link href="">Shop</Link>
        </li>
        <li>
          <Link href="">Category</Link>
        </li>
        <li>
          <Link href="">Product</Link>
        </li>
      </div>
      <div class="flex items-center gap-5 w-[20%] text-2xl justify-end sm:justify-center sm:w-[100%]  sm:py-2 sm:gap-2 sm:text-sm pr-4">
        <div class="icons">
          <IoMdSearch />
        </div>
        <div class="icons">
          <FaRegUser />
        </div>
        <div class="icons relative">
          <div class=" rounded-full absolute -top-3 right-0 text-sm text-black font-semibold">0</div>
          <i className="cursor-pointer">
            <FiShoppingCart />
          </i>
        </div>
      </div>
    </header>
  );
}

export default page;
