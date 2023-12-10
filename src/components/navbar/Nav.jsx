import React from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { LuMoreVertical } from "react-icons/lu";
import { useSelector } from "react-redux";


function Nav() {

  const user = JSON.parse(localStorage.getItem('user'))

  const logout = () => {
    localStorage.clear('user');
    window.location.href ='/signin'
  }

  const cartItems = useSelector((state) => state.cart)

  return (
    <div>
      {/* <!-- Navbar --> */}
      <nav className="flex items-center justify-between mx-0 fixed top-0  left-0 right-0  w-full pr-8 pl-8 md:pr-20 md:pl-20  pb-2 pt-2 md:py-4 bg-white bg-opacity-90 shadow-lg z-30">
        {/* <!-- Flex Container --> */}
        {/* <div className="flex items-center justify-between"> */}
        {/* <!-- hamburger-menu --> */}
        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-buttom"></span>
        </button>
        {/* </div> */}
        {/* <!-- mobile menu --> */}
        <div className="md:hidden">
          <div
            id="menu"
            className="absolute flex-col items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Sell</a>
            <a href="#">Cart</a>
            <a href="#">About us</a>
          </div>
        </div>
        {/* <!-- Logo --> */}
        <div className="pt-2">
          <img src="/logo.svg" alt="" />
        </div>

        {/* <!-- Menu Items --> */}
        <div className="hidden md:flex md:items-center space-x-8">
          <Link to={"/"} className="hover:text-green">
            Home
          </Link>
          <Link to={"/shop"} className="hover:text-green">
            Shop
          </Link>

          {user ? <Link to={"/account"} className="hover:text-green">
            myAccount
          </Link> : ""}

          {user ? <Link to={"/order"} className="hover:text-green">
            Order
          </Link> : ""}
          
          {user ?  <a onClick={logout} className="hover:text-green cursor-pointer">
            Logout
          </a> : ""}
         
          {user?.user?.email === '2210008@ritindia.edu' ? <Link to={"/sellerdashboard"} className="hover:text-green">
            Sell
          </Link> :""}
          
          <Link to={"/more"} className="hover:text-green">
            <LuMoreVertical />
          </Link>
          <Link to={"/cart"} className="hover:text-green">
            {" "}
            <BsCart3 />
          </Link>
        </div>
        <div className="p-2 block md:hidden w-6 h-6 items-center">
          <BsCart3 />
          <span className="ml-2 text-sm font-medium text-gray-700 group-">0</span>
          <span className="sr-only">items in cart, view bag</span>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
