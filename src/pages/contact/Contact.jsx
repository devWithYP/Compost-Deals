import React from 'react'
import Layout from '../../components/layout/Layout'

function Contact() {
  return (
    <Layout>
     <div className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex flex-col md:flex-row">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex  items-end justify-start relative">
            <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no"  src="https://maps.google.com/maps?q=rajaramapu%20institute%20of%20technology&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
            {/* <!--  --> */}
            <div className="bg-white relative flex py-6 rounded shadow-md">
                {/* <!--  --> */}
              <div className="lg:w-1/2 px-6 hidden md:block">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">Rajarambapu Institute of technnology, Sakrale</p>
              </div>
              {/* <!--  --> */}
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0 ">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a className="text-green-500 leading-relaxed">yugandharpatil049@gmail.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">8766038350</p>
              </div>
            </div>
          </div>
          {/* <!--  --> */}
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 px-5 mt-8 md:mt-0 rounded-lg">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Please give us feedback, to improve our products</p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-green focus:ring-2 focus:ring-green text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-green focus:ring-2 focus:ring-green text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-green focus:ring-2 focus:ring-green h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="text-white bg-green border-0 py-2 px-6 focus:outline-none hover:bg-lightGreen rounded text-lg">Submit</button>
            <p className="text-xs text-gray-500 mt-3">Click Submt to send us Feedback.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact