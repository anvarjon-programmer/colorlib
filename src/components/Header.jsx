/** @format */

import { useContext, useEffect, useState } from 'react';
import { SideBarContext } from '../contexts/SideBarContext';
import { CartContext } from '../contexts/CartContext';
import { BsBag } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { IoCloseOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const { itemAmount } = useContext(CartContext);

  // State for dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Event listener for scroll
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 15 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // State for sidebar menu visibility
  const [isSideMenuOpen, setMenu] = useState(false);

  const navLinks = [
    { label: 'NEW', href: '#' },
    { label: 'MEN', href: '#' },
    { label: 'WOMEN', href: '#' },
    { label: 'ACCESSORIES', href: '#' },
    { label: 'JEWELRY', href: '#' },
    { label: 'ABOUT', href: '#' },
    { label: 'CONTACT', href: '#' },
  ];

  return (
    <>
      <header
        className={`${
          isActive ? 'bg-[#FBFBFA]' : 'bg-none'
        } fixed w-full z-10 transition-all`}
      >
        <nav className="container mx-auto flex items-center justify-between h-[80px] m-auto">
          <section className="flex items-center gap-4">
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            <Link to={'/'}>P R O D U C T</Link>
          </section>
          <div className="flex items-center gap-7">
            <div
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              className="relative"
            >
              <button
                className="hidden lg:block text-gray-400 hover:text-black no-underline"
                type="button"
              >
                Dropdown
              </button>
              {isDropdownOpen && (
                <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 mt-2">
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {navLinks.map((d, i) => (
              <Link
                key={i}
                className="hidden lg:block text-gray-400 hover:text-black no-underline"
                to={d.href}
              >
                {d.label}
              </Link>
            ))}
          </div>
          {/* sidebar mobile menu */}
          <div className="flex items-center px-10">
            <div
              className={clsx(
                'fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all',
                isSideMenuOpen && 'translate-x-0'
              )}
            >
              <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen z-50 p-8 gap-8 w-56 flex">
                <IoCloseOutline
                  onClick={() => setMenu(false)}
                  className="mt-0 mb-8 text-3xl cursor-pointer no-underline"
                />
                {navLinks.map((d, i) => (
                  <Link
                    key={i}
                    className="font-bold"
                    to={d.href}
                  >
                    {d.label}
                  </Link>
                ))}
              </section>
            </div>
            <section className="flex items-center gap-4">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer relative"
              >
                <BsBag className="text-2xl" />
                <div
                  className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white
                  rounded-full flex justify-center items-center"
                >
                  {itemAmount}
                </div>
              </div>
              <FaUser className="text-3xl" />
              <CiSearch className="text-3xl" />
            </section>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
