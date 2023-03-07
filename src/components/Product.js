import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

import Currency from "react-currency-formatter";

function Product({ id, image, title, price, description, category }) {
  const rating = Math.round(Math.random() * 5); // Generate random number between 0 and 5 and round it

  const [hasPrime] = useState(Math.random() < 0.5);


  const stars = Array.from({ length: rating }, (_, i) => (
    <StarIcon className="text-yellow-500" height={43} key={i} />
  ));
  return (
    <div className="relative flex flex-col m-5 bg-white p-10 z-30">
      <p className=" absolute right-2 top-2 text-xs italic text-gray-400">{category}</p>

      <Image src={image} height={200} width={200} objectFit="contain" />
      <p className="my-3">{title}</p>

      <div className="flex ">{stars}</div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="INR" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" />
          <p className="text-xs text-gray-500">Free Next-day Delivery</p>
        </div>
      )}
      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
}

export default Product;
