import React, { useContext } from 'react'
import myContext from '../../../context/data/mycontext';

function AddProduct() {
    const context = useContext(myContext);
    const {products,setProducts,addProduct} = context
    return (
        <div className='bg-backGround'>
            <div className=' flex justify-center items-center h-screen'>
                <div className=' bg-gray-200 px-10 py-10 rounded-xl border-2 border-green '>
                    <div className="">
                        <h1 className='text-center text-gray-900 text-xl mb-4 font-bold'>Add Product</h1>
                    </div>
                    <div>
                        <input type="text"
                       onChange={(e) => setProducts({ ...products, title: e.target.value })} value={products.title}
                            name='title'
                            className=' mb-4 px-2 py-2 w-full lg:w-[20em] rounded-md border-0 text-green shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-green'
                            placeholder='Product title'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='price'
                            onChange={(e) => setProducts({ ...products, price: e.target.value })} value={products.price}
                            className=' mb-4 px-2 py-2 w-full lg:w-[20em] rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-green'
                            placeholder='Product price'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='imageurl'
                            onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })} value={products.imageUrl}
                            className=' mb-4 px-2 py-2 w-full lg:w-[20em] rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-green'
                            placeholder='Product imageUrl'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='category'
                            onChange={(e) => setProducts({ ...products, category: e.target.value })} value={products.category}
                            className=' mb-4 px-2 py-2 w-full lg:w-[20em] rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-green'
                            placeholder='Product category'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='location'
                            onChange={(e) => setProducts({ ...products, location: e.target.value })} value={products.location}
                            className=' mb-4 px-2 py-2 w-full lg:w-[20em] rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-green'
                            placeholder='Product location'
                        />
                    </div>
                    <div>
                       <textarea cols="30" rows="10" 
                       name='description' onChange={(e) => setProducts({ ...products, description: e.target.value })}
                       className=' mb-4 px-2 py-2 w-full lg:w-[20em] rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-green'
                       placeholder='Product Decription'>

                       </textarea>
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button
                        onClick={addProduct}
                            className=' bg-green w-full text-white font-bold  px-2 py-2 rounded-lg'>
                            Add Product
                        </button>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default AddProduct