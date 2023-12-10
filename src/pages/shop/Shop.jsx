import React from 'react'
import LayoutTwo from '../../components/layout/LayoutTwo'
import Filter from '../../components/filter/Filter'
import Product from '../../components/product/Product'

function Shop() {
  return (
    <LayoutTwo>
      <Filter />
      <div className="flex flex-wrap gap-16 items-center justify-center mt-12 mr-10 ml-12 mb-12"> 
        <Product />
      </div>
     
    </LayoutTwo>
  )
}

export default Shop