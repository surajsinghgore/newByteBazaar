import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

const CategoryCard = ({ title, image, link }) => {
  return (
    <Link href={link}>
      <div className="w-[80%] m-auto categoryCard">
        <div className="images relative w-[100%] h-[40vh]">
          <Image src={image} alt={image} layout="fill" className="rounded-lg" />
        </div>
        <h1 className="text-center py-3 text-xl font-bold">{title}</h1>
      </div>
    </Link>
  );
};

export default CategoryCard;
