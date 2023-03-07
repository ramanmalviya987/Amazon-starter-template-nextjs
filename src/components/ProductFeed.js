import React, { useEffect } from "react";
import Product from "./Product";
function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-32 lg:-mt-52 mx-auto">
      {products
        .slice(0, 4)
        .map(({ id, price, image, title, description, category, rating }) => (
          <Product
            key={id}
            id={id}
            price={price}
            image={image}
            description={description}
            title={title}
            rating={rating}
            category={category}
          />
        ))}

      <img
        className="md:col-span-full "
        src="https://links.papareact.com/dyz"
      />

     <div className="md:col-span-2">
     {products
        .slice(4, 5)
        .map(({ id, price, image, title, description, category, rating }) => (
          <Product
            key={id}
            id={id}
            price={price}
            image={image}
            description={description}
            title={title}
            rating={rating}
            category={category}
          />
        ))}
     </div>
     {products
        .slice(4, products.length)
        .map(({ id, price, image, title, description, category, rating }) => (
          <Product
            key={id}
            id={id}
            price={price}
            image={image}
            description={description}
            title={title}
            rating={rating}
            category={category}
          />
        ))}
    </div>
  );
}

export default ProductFeed;
