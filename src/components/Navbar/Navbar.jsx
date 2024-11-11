import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className='bg-peach fixed w-full top-0 z-50 overflow-hidden'>
            <div className='flex items-center justify-between lg:px-14 py-3 px-4'>
                <div>
                    <img src="https://htmldemo.net/jena/jena/assets/img/logo4.webp" className="lg:w-full w-[120px]"  alt="" />
                </div>
                <ul className='flex lg:gap-14'>
                    <Link to={'/'} className="cas">Home</Link>
                    <Link to={''} className="cas">Shop</Link>
                    <Link to={'login'} className="cas">Contact Us</Link>
                </ul>
                <div className='flex items-center gap-6'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-bag-check-fill " viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-person " viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                    </svg>
                </div>
            </div>
      </nav>
      <div className="h-16">

      </div>
    </div>
  )
}

export default Navbar