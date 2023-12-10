import React, { useContext } from 'react'
import LayoutTwo from '../../../components/layout/LayoutTwo';
import DashboardTab from './DashboardTab';

function Dashboard() {

  return (
       <>
        <section className="text-gray-600 body-font mb-10 mt-36">
            <div className="container px-5 mx-auto mb-10">
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className=" border-2 hover:shadow-green bg-gray-100 border-gray-300    px-4 py-3 rounded-xl">
                            
                            <h2 className="title-font font-medium text-3xl text-black fonts1">10</h2>
                            <p className=" text-green  font-bold">Total Products</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className=" border-2 hover:shadow-green bg-gray-100 border-gray-300    px-4 py-3 rounded-xl">
                            
                            <h2 className="title-font font-medium text-3xl text-black fonts1">10</h2>
                            <p className=" text-green  font-bold">Total Orders</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className=" border-2 hover:shadow-green bg-gray-100 border-gray-300    px-4 py-3 rounded-xl">
                            
                            <h2 className="title-font font-medium text-3xl text-black fonts1">20</h2>
                            <p className=" text-green  font-bold">Total Users</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className=" border-2 hover:shadow-green bg-gray-100 border-gray-300    px-4 py-3 rounded-xl">
                            
                            <h2 className="title-font font-medium text-3xl text-black fonts1">20,000</h2>
                            <p className=" text-green  font-bold">Total Revenue</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <DashboardTab />
        </>
  )
}

export default Dashboard