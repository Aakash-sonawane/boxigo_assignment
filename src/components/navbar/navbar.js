import React from 'react'

export default function Navbar() {
  return (
   <>
    <div className='nav-bar'>
        <div className='bold f15 live'><i className="fa-solid fa-xl fa-truck"></i> MY MOVES</div>
        <div className='bold f15'><i className="fa-solid fa-xl fa-user grayc"></i> MY PROFILE</div>
        <div className='bold f15'><i className="fa-solid fa-xl fa-calculator grayc"></i> GET QUOTE</div>
        <div className='bold f15'><i className="fa-solid fa-xl fa-right-from-bracket grayc"></i> LOGOUT</div>
      </div>
   </>
  )
}
