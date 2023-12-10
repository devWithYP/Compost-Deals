import React from 'react'

function Preloader() {
  return (
    <>
     <div className="preloader">
      <div className="logo"><img src="/logo.svg" alt="" /></div>
        <div className="loading">
            <div className="loading-ball"></div>
            <div className="loading-ball"></div>
            <div className="loading-ball"></div>
            <div className="loading-ball"></div>
        </div>
    </div>
    </>
  )
}

export default Preloader