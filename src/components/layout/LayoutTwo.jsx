import React from 'react'
import Footer from '../footer/Footer'
import Nav from '../navbar/Nav'

function LayoutTwo({children}) {
  return (
    <div>
        <Nav />
        <div className="content">
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default LayoutTwo