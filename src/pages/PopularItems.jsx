import React from "react";
import Slider from "react-slick";
import { PiArrowCircleLeftBold } from "react-icons/pi";
import { PiArrowCircleRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";


const PopularItems = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  return (
    <section className='container max-auto m-auto'>
        
        <div  className='flex my-[70px]  items-center justify-between'>
          <h2 className='text-xl'>Popular Items</h2>
           <div className='flex'>
            <PiArrowCircleLeftBold className="text-[30px]"/>
            <PiArrowCircleRightBold className="text-[30px]"/>
           </div>
           
        </div>
           
           <div className="ml-[100px] mb-16 mt-10">
           <div>
          <Slider {...settings} className="">
            
             <div className="w-[50px]">
              <div className="w-[160px]">
                <img className="w-full h-[210px] object-cover" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
              </div>

              <div className="text-sm capitalize text-gray-500 mb-1">
              Men's Clothing
              </div>
              <h2 className="font-semibold mb-1">Mens Casual Premium <br />
              Slim Fit T-Shirts</h2>
              <div className="font-semibold">$ 22.3</div>
             </div>

             <div className="w-[50px]">
              <div className="w-[160px]">
                <img className="w-full h-[210px] object-cover" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
              </div>
              <div className="text-sm capitalize text-gray-500 mb-1">
              Men's Clothing
              </div>
              <h2 className="font-semibold mb-1">Mens Casual Premium<br />
               Slim 
              Fit T-Shirts</h2>
              <div className="font-semibold">$ 22.3</div>
             </div>

             <div className="w-[50px]">
              <div className="w-[160px]">
                <img className="w-full h-[210px] object-cover" src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="" />
              </div>
              <div className="text-sm capitalize text-gray-500 mb-1">
              Men's Clothing
              </div>
              <h2 className="font-semibold mb-1">Mens Casual Premium <br />Slim Fit T-Shirts</h2>
              <div className="font-semibold">$ 22.3</div>
             </div>

             <div className="w-[50px]">
              <div className="w-[160px]">
                <img className="w-full h-[210px] object-cover" src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" alt="" />
              </div>
              <div className="text-sm capitalize text-gray-500 mb-1">
              Men's Clothing
              </div>
              <h2 className="font-semibold mb-1">Mens Casual Premium <br />Slim Fit T-Shirts</h2>
              <div className="font-semibold">$ 22.3</div>
             </div>

             {/* <div className="w-[50px]">
              <div className="w-[160px]">
                <img className="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" alt="" />
              </div>
              <div className="text-sm capitalize text-gray-500 mb-1">
              Men's Clothing
              </div>
              <h2 className="font-semibold mb-1">Mens Casual Premium <br />Slim Fit T-Shirts</h2>
              <div className="font-semibold">$ 22.3</div>
             </div> */}

         </Slider>
          </div>
           </div>
          </section>
  )
}

export default PopularItems