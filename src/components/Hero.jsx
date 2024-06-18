import { Link } from "react-router-dom"
import React from "react";
import Slider from "react-slick";
import manImg from '../assets/man.jpg'
import { CiDeliveryTruck } from "react-icons/ci";
import { GoShieldLock } from "react-icons/go";
import { IoMdRefresh } from "react-icons/io";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const cartItems = [
    {
      icons:<CiDeliveryTruck/>,
      title:"WORLDWIDE DELIVERY",
      desc:"Far far away, behind the word mountains, far from the countries."
    },
    {
      icons:<GoShieldLock/>,
      title:"SECURE PAYMENTS",
      desc:"Far far away, behind the word mountains, far from the countries."
    },
    {
      icons:<IoMdRefresh/>,
      title:"SIMPLE RETURNS",
      desc:"Far far away, behind the word mountains, far from the countries."
    },
  ]
  return (
    <>
    <section className="bg-[#DFE4E0] h-screen">
    <div className="h-[100px]"></div>

    <Slider {...settings}  className="m-auto container ">
      <div className="w-[150px]">
        1
        {/* <img className="w-full" src={manImg} alt="" /> */}
      </div>
      <div>
        2
        {/* <img className="m-auto" src="https://img.freepik.com/free-photo/proud-teenager-with-white-background_1149-1045.jpg?t=st=1718460289~exp=1718463889~hmac=92433c21f0c374f26db417e1e1d30e4d8cf366fc6bc1dc75344af04e32ec80fe&w=740" alt="" /> */}
      </div>
    </Slider>
    </section>
    
    <section className=" bg-[#F8F9FA] m-auto min-h-[320px] mb-10 flex items-center py-8">
     <div className="container max-auto m-auto">
      <div className="grid gap-[80px] grid-cols sm:grid-cols-2 md:grid-cols-3">
        {cartItems.map((item,index) =>(
          <div key={index} className="max-w-[500px] md:max-w-[400px] h-[200px] bg-white text-center flex flex-col items-center justify-center">
            <div className="text-[35px]">{item.icons}</div>
            <h3 className="my-2">{item.title}</h3>
            <p className="text-[#CFCFCF]">{item.desc}</p>
          </div>
        ))}
      </div>
     </div>
    </section>
    </>
  )
}

export default Hero