import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import Preloader from "../../components/preloader/Preloader";


function Home() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
     setLoading(true)
     setTimeout(() => {
       setLoading(false)
     }, 3000)
  }, [])

  return (
    <>
    {loading? 
    <Preloader />
    :<Layout>
      <div className="bg-whitesmoke" id="root">
        {/* <!-- Hero section --> */}
        <section id="Hero">
          {/* <!-- flex container --> */}
          <div
            className="container flex flex-col-reverse md:flex-row items-center mx-auto mt-10 md:mt-20 space-y-0
        md:space-y-0"
          >
            {/* <!-- Left-item --> */}
            <div className="flex flex-col mb-32 ml-0 md:ml-10  md:mb-32 space-y-12 md:w-1/2 ">
              <div className="max-w-lg text-4xl font-bold text-center text-green md:text-5xl md:text-left md:pl-4 ">
                A platform for both Compost Buyers and Compost Sellers.
              </div>
              <div className=" max-w-md items-center">
                <p className=" text-black pl-4 md:text-left max-w-md text-center">
                  Become Part of our mission to enrich soil and decrease
                  compostable waste in landfills.
                </p>
              </div>
              <div className="flex justify-center md:justify-start md:pl-4">
                <Link
                  to={"/signup"}
                  className="p-3 px-6 pt-2 text-white bg-green rounded-full  baseline hover:bg-black"
                >
                  Get Started
                </Link>
              </div>
            </div>
            {/* <!-- Image --> */}
            <div className=" w-full lg:w-1/2 md:w-3/4">
              <img src="/landingpageimg.svg" alt="" />
            </div>
          </div>
        </section>
        {/* <!-- Features section --> */}
        <section id="features">
          {/* <!-- flex container --> */}
          <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
            {/* <!-- What's diffrent  --> */}
            <div className="flex flex-col space-y-12 md:w-1/2">
              <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                What's diffrent in Compostdeals?
              </h2>
              <p className="max-w-md text-center text-black md:text-left">
                It is a e-commerce platform that seamlessly connects compost
                creators (both individual and commercial), with discerning
                buyers.
              </p>
            </div>

            {/* <!-- Numbered list --> */}
            <div className="flex flex-col space-y-8 md:w-1/2">
              {/* <!-- item 1 --> */}
              <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                {/* <!-- Heading --> */}
                <div className="rounded-l-full bg-VeryVeryLightGreen md:bg-transparent">
                  <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-green">
                      01
                    </div>
                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                      Buy and sell all Varieties of composts
                    </h3>
                  </div>
                </div>
                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    Buy and sell all Varieties of composts
                  </h3>
                  <p className="text-black">
                    Composting is an important part of waste management, since
                    food and other compostable materials make up about 20% of
                    waste in landfills, and due to anaerobic conditions, these
                    materials take longer to biodegrade in the landfill.
                  </p>
                </div>
              </div>

              {/* <!-- item 2 --> */}
              <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                {/* <!-- Heading --> */}
                <div className="rounded-l-full bg-VeryVeryLightGreen md:bg-transparent">
                  <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-green">
                      02
                    </div>
                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                      Buy and sell at same time
                    </h3>
                  </div>
                </div>
                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    Buy and sell at same time
                  </h3>
                  <p className="text-black">
                    Composting is an important part of waste management, since
                    food and other compostable materials make up about 20% of
                    waste in landfills, and due to anaerobic conditions, these
                    materials take longer to biodegrade in the landfill.
                  </p>
                </div>
              </div>

              {/* <!-- item 3 --> */}
              <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                {/* <!-- Heading --> */}
                <div className="rounded-l-full bg-VeryVeryLightGreen md:bg-transparent">
                  <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-green">
                      03
                    </div>
                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                      Buy or Sell composts locally and build connections with
                      them
                    </h3>
                  </div>
                </div>
                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    Buy or Sell composts locally and build connections with them
                  </h3>
                  <p className="text-black">
                    Composting is an important part of waste management, since
                    food and other compostable materials make up about 20% of
                    waste in landfills, and due to anaerobic conditions, these
                    materials take longer to biodegrade in the landfill.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Our products Section --> */}
        <section id="Our products" className="mt-16 ">
          <div className="container flex items-center justify-around mx-auto space-x-0 mt-5 mb-6">
            <h2 className="max-w-md text-4xl font-bold text-center md:text-center ">
              Our Products
            </h2>
          </div>
          <div
            className="container flex flex-col md:flex-row items-center justify-around mx-auto space-y-8 
        md:space-x-5"
          >
            {/* <!-- Item 1 --> */}
            <div className="flex flex-col bg-white text-gray-700 w-80 h-auto shadow-lg rounded-md overflow-hidden">
              <img
                className="w-full h-60 object-cover"
                src="/vermicompost.jpg"
                alt="vermicompost"
              />
              <div className="p-5 flex flex-col gap-3">
                {/* <!-- Badges --> */}
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
                    Vermicompost
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
                    Islampur
                  </span>
                </div>

                {/* <!-- Product-Title --> */}
                <h2 className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap">
                  Best vermicompost
                </h2>

                {/* <!-- Product description --> */}
                <p className="text-md overflow-ellipsis overflow-hidden whitespace-nowrap">
                  Vermicompost is the product of the decomposition process using
                  various species of worms
                </p>

                {/* <!-- Price --> */}
                <div>
                  <span className="text-xl font-bold">Rs. 200</span>
                </div>

                {/* <!-- Buttons --> */}
                <div className="flex gap-2 mt-5">
                  <Link
                    to={"/cart"}
                    className="bg-green px-6 py-2 rounded-md text-white font-medium hover:bg-lightGreen"
                  >
                    Add to Cart
                  </Link>
                  <Link
                    to={"/details"}
                    className="bg-white px-6 py-2 rounded-md text-green font-medium"
                  >
                    See details
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- Item 1-ends --> */}

            <div className="flex flex-col bg-white text-gray-700 w-80 h-auto shadow-lg rounded-md overflow-hidden">
              <img
                className="w-full h-60 object-cover"
                src="/vermicompost.jpg"
                alt="vermicompost"
              />
              <div className="p-5 flex flex-col gap-3">
                {/* <!-- Badges --> */}
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
                    Vermicompost
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
                    Islampur
                  </span>
                </div>

                {/* <!-- Product-Title --> */}
                <h2 className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap">
                  Best vermicompost
                </h2>

                {/* <!-- Product description --> */}
                <p className="text-md overflow-ellipsis overflow-hidden whitespace-nowrap">
                  Vermicompost is the product of the decomposition process using
                  various species of worms
                </p>

                {/* <!-- Price --> */}
                <div>
                  <span className="text-xl font-bold">Rs. 200</span>
                </div>

                {/* <!-- Buttons --> */}
                <div className="flex gap-2 mt-5">
                  <Link
                    to={"/cart"}
                    className="bg-green px-6 py-2 rounded-md text-white font-medium hover:bg-lightGreen"
                  >
                    Add to Cart
                  </Link>
                  <Link
                    to={"/details"}
                    className="bg-white px-6 py-2 rounded-md text-green font-medium"
                  >
                    See details
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- Item 2-ends --> */}

           
            {/* <!-- Item-3 --> */}
            <div className="flex flex-col bg-white text-gray-700 w-80 h-auto shadow-lg rounded-md overflow-hidden">
              <img
                className="w-full h-60 object-cover"
                src="/liquidVermicompost2.jpg"
                alt="vermicompost"
              />
              <div className="p-5 flex flex-col gap-3">
                {/* <!-- Badges --> */}
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
                    Vermicompost
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
                    Islampur
                  </span>
                </div>

                {/* <!-- Product-Title --> */}
                <h2 className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap">
                  Best vermicompost tea
                </h2>

                {/* <!-- Product description --> */}
                <p className="text-md overflow-ellipsis overflow-hidden whitespace-nowrap">
                  Vermicompost tea is the product of the decomposition process
                  using various species of worms
                </p>

                {/* <!-- Price --> */}
                <div>
                  <span className="text-xl font-bold">Rs. 350</span>
                </div>

                {/* <!-- Buttons --> */}
                <div className="flex gap-2 mt-5">
                  <Link
                    to={"/cart"}
                    className="bg-green px-6 py-2 rounded-md text-white font-medium hover:bg-lightGreen"
                  >
                    Add to Cart
                  </Link>
                  <Link
                    to={"/details"}
                    className="bg-white px-6 py-2 rounded-md text-green font-medium"
                  >
                    See details
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- Item-3-ends --> */}
          </div>
        </section>
        {/* <!-- banner section --> */}
        <section id="banner" className="bg-green mt-16">
          {/* <!-- flex container --> */}
          <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
            {/* <!-- Heading --> */}
            <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
              Become Part of our mission to enrich soil and decrease compostable
              waste in landfills.
            </h2>
            {/* <!-- Button --> */}
            <div>
              <Link
                to={"/dashboard"}
                className="p-3 px-6 pt-2 text-green bg-white rounded-full shadow-2xl baseline  hover:bg-black hover:text-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
    }
    </>
  );
}


export default Home;
