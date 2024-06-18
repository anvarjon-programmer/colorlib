/** @format */

import React, { useContext } from 'react';
// import useParams
import { useParams } from 'react-router-dom';
//import cartContext
import { CartContext } from '../contexts/CartContext';
//import product Context
import { ProductContext } from '../contexts/ProductContext';
const ProductDetail = () => {
  //get the product id from the url
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  //if product is not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }
  const { title, price, description, image } = product;
  return (
    <section className=" h-screen w-full flex items-center justify-center">
      <div className="container max-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div
            className="flex flex-1 justify-center 
          items-center mb-2 lg:mb-0 "
          >
            <img
              className="max-w-[200px] lg:max-w-sm"
              src={image}
              alt=""
            />
          </div>
          {/* text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] max-auto lg:max-0">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              $ {price}
            </div>
            <p className="mb-8">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-primary py-4 px-8 text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
