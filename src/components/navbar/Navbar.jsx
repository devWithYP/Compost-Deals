import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="bg-white">
    {/* <!-- Navbar --> */}
    <nav className=" container mx-auto fixed top-0  left-0 right-0  w-full  p-6 pb-4 pt-4 bg-white bg-opacity-90 shadow-lg rounded-full z-30">
        {/* <!-- Flex Container --> */}
        <div className="flex items-center justify-between">
            {/* <!-- Logo --> */}
            <div className="pt-2">
                <img src="/logo.svg" alt=""/>
            </div>
            {/* <!-- Menu Items --> */}
            <div className="hidden md:flex space-x-8">
                <Link to={'/'} className="hover:text-green">Home</Link>
                <Link to={'/shop'} className="hover:text-green">Shop</Link>
                <Link to={'/sellerdashboard'} className="hover:text-green">Sell</Link>
                <Link to={'/cart'} className="hover:text-green">Cart</Link>
                <Link to={'/contact'} className="hover:text-green">Contact us</Link>
            </div>
            {/* <!--Button --> */}
            <Link to={'/signup'} className=" hidden md:block p-3 px-6 pt-2 text-white bg-green rounded-full  baseline hover:bg-black">
               Get Started
            </Link>
            {/* <!-- hamburger-menu --> */}
            <button id="menu-btn" className="block hamburger md:hidden focus:outline-none">
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-buttom"></span>
            </button>
        </div>
        {/* <!-- mobile menu --> */}
        <div className="md:hidden">
            <div id="menu" className="absolute flex-col items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">Sell</a>
                <a href="#">Cart</a>
                <a href="#">Contact us</a>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar