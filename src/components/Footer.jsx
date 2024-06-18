import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="mt-[150px] mb-20">
      <div className="container max-w-auto m-auto">
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-[30px] xl:grid-cols-5 
    max-w-sm mx-auto md:max-w-none md:mx-0">
      <div>
        <h2 className="text-[#333] text-xl">Help</h2>
        <ul className="mt-5">
          <li>
            <Link className="#212529" to={'/'}>Contact us</Link>
          </li>
          <li>
            <Link className="#212529" to={'/'}>Account</Link>
          </li>
          <li>
            <Link className="#212529" to={'/'}>Shopping</Link>
          </li>
          <li>
            <Link className="#212529" to={'/'}>Returns</Link>
          </li>
          <li>
            <Link className="#212529" to={'/'}>FAQ</Link>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-[#333] text-xl">Help</h2>
        <ul className="mt-5">
          <li>
            <Link className="#212529" to={'/'}>Contact us</Link>
          </li>
          <li>
            <Link className="#212529" to={'/'}>Account</Link>
          </li>
          <li>
            <Link className="#212529" to={'/'}>Shopping</Link>
          </li>
          <li>
            <Link className="#212529" to={'/'}>Returns</Link>
          </li>
          <li>
            <Link className="#212529" to={'/'}>FAQ</Link>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-[#333] text-xl">Help</h2>
        <ul className="mt-5">
          <li>
            <Link className="#212529" to={'/'}>Contact us</Link>
          </li>
          <li>
            <Link className="#212529" to={'/'}>Account</Link>
          </li>
          <li>
            <Link className="#212529" to={'/'}>Shopping</Link>
          </li>
          <li>
            <Link className="#212529" to={'/'}>Returns</Link>
          </li>
          <li>
            <Link className="#212529" to={'/'}>FAQ</Link>
          </li>
        </ul>
      </div>

      <div>
        <h2>Join our list and receive exclusives</h2>
        <div className="mt-5 flex w-[500px] h-10 border border-collapse border-black">
          <input className="border-none outline-none pl-5" type="text" />
          <button className="bg-black text-white w-[180px] ml-auto">SUBSCRIBE</button>
        </div>
      </div>
    </div>
    </div>
    </footer>


  )
}

export default Footer