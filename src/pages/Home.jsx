/** @format */

import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero';
import Deal from './Deal';
import Deal2 from './Deal2';
import PopularItems from './PopularItems';
import { PiArrowCircleLeftBold } from 'react-icons/pi';
import { PiArrowCircleRightBold } from 'react-icons/pi';

const Home = () => {
  const { products } = useContext(ProductContext);
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  return (
    <div>
      <div className=" bg-white">
        <Hero />
        <section className="">
          <div className="container mx-auto">
            <div
              className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-[30px] xl:grid-cols-5 
          max-w-sm mx-auto md:max-w-none md:mx-0"
            >
              {filteredProducts.map((product) => {
                return (
                  <Product
                    product={product}
                    key={product.id}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <Deal />
      <PopularItems />
    </div>
  );
};

export default Home;
