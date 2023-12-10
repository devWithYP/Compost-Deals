import React from 'react'
import SellerNav from '../navbar/SellerNav'
import Footer from '../footer/Footer'

function LayoutThree({children}) {
  return (
    <div>
        <SellerNav />
        <div className="content">
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default LayoutThree