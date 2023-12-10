import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import myContext from '../../context/data/mycontext'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import { toast } from 'react-toastify'

function Product() {
    const context = useContext(myContext)
    const {mode, product, products,searchkey, 
        setSearchkey,
        filterType, 
        setFilterType,
        filterLoc,
        setFilterLoc} = context

    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart);
    // console.log(cartItems)

    const addCart = (product) => {
        dispatch(addToCart(product))
        toast.success('add to cart');
    }
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])
  return (
    <div className='flex flex-wrap items-center justify-center -m-4 gap-5'>
        {product.filter((obj)=>obj.title.toLowerCase().includes(searchkey))
        .filter((obj)=>obj.category.toLowerCase().includes(filterType))
        .filter((obj)=>obj.location.toLowerCase().includes(filterLoc))
        .map((item, index) => {
            const {title, price, description, imageUrl, category, location} = item;
            return(
                <div key={index} className="flex flex-col bg-white text-gray-700 w-80 h-auto shadow-lg rounded-md overflow-hidden">
                <img 
                     className="w-full h-28 md:h-60 object-cover"
                     src={imageUrl}
                     alt="vermicompost"
                 />
                <div className="p-5 flex flex-col gap-3">
                    {/* <!-- Badges --> */}
                    <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-xs bg-gray-100">{category}</span>
                        <span className="px-3 py-1 rounded-full text-xs bg-gray-100">{location}</span>
                    </div> 
        
                    {/* <!-- Product-Title --> */}
                    <h2 className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap">
                        {title}
                    </h2>
        
                    {/* <!-- Product description --> */}
                    <p className="text-md overflow-ellipsis overflow-hidden whitespace-nowrap">
                        {description}
                    </p>
        
                    {/* <!-- Price --> */}
                    <div>
                        <span className="text-xl font-bold">
                            Rs.{price}
                        </span>
                    </div>
        
                    {/* <!-- Buttons --> */}
                    <div className="flex gap-2 mt-5">
                    <button type='button' 
                    onClick={()=> addCart(item)}
                    className="bg-green px-6 py-2 rounded-md text-white font-medium hover:bg-lightGreen">
                            Add to Cart
                        </button>
                        <Link to={'/details'} className="bg-white px-6 py-2 rounded-md text-green font-medium">
                            See details
                        </Link>
                    </div>
                </div> 
            </div>
            )
        })}
        
        
    </div>
  )
}

export default Product
