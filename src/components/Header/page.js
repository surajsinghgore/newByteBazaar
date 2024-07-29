import Image from "next/legacy/image";
import Images from "../../constants/Images.js";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
function page() {
  return (
    <header className="flex items-center p-4 border-b">
      <div class="flex items-center gap-2">
        <div class="logo relative w-[70px] h-[50px] ">
          <Link href={"/"}>
            <Image src={Images.icon.src} alt="logo" layout="fill" />
          </Link>
        </div>
        <div class="text-xl">
          <Link href={"/"}>
            BYTE <span className="text-skyblue-900">BAZAAR</span>
          </Link>
        </div>
      </div>
      <div class="flex items-center gap-2 ">
        <li>Home</li>
        <li>Shop</li>
        <li>Category</li>
        <li>Product</li>
      </div>
      <div class="flex items-center gap-2 ">
        <div class="icons">
          <IoSearchOutline />
        </div>
        <div class="icons">
          <FaRegUser />
        </div>
        <div class="icons">
          <BsCart2 />
        </div>
      </div>
    </header>
  );
}

export default page;
