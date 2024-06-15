import { useContext, useEffect, useState } from "react"
import { SideBarContext } from "../contexts/SideBarContext";
import { CartContext } from "../contexts/CartContext";
import {BsBag} from 'react-icons/bs'
import { Link } from "react-router-dom";
const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const {isOpen,setIsOpen} = useContext(SideBarContext);
  const {itemAmount} = useContext(CartContext)
  //event listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ?  setIsActive(true) : setIsActive(false)
    })
  })
  return (
    <header className={`${isActive ? 'bg-red-500' : 'bg-none'} fixed w-full z-10 transition-all`}>
    <div className="container max-auto flex items-center justify-between h-full m-auto">
      <Link to={'/'}>
        P R O D U C T
      </Link>
      {/* cart */}
       <div 
       onClick={()=> setIsOpen(!isOpen)}
       className=" cursor-pointer  relative  ">
        <BsBag className="text-2xl"/>
        <div className="bg-red-500 absolute -right-2  -bottom-2 text-[12px] w-[18px] h-[18px] text-white
       rounded-full flex justify-center items-center">{itemAmount}</div>
       </div>
    </div>
    </header>
  )
}

export default Header