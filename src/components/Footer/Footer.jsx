import React from 'react'
import Button from '../Button/Button'

const Footer = () => {
  return (
    <div className='bg-foot lg:px-14 px-4 py-10'>
      <div className="grid lg:grid-cols-3 grid-cols-1 place-items-center">
        <div>
            <h1 className='text-2xl'>Sign Up For Newsletters</h1>
            <p className='text-gray-400 pt-2'>Be the first to know. Sign up for newsletter today!</p>
        </div>
        <div className='wal'>
            <form action="" className='flex '>
                <input type="text" className='bg-white border p-4 w-[280px] h-[50px] outline-none' style={{borderRadius:'50px 0px 0px 50px'}} />
                <button className='w-[100px] h-[50px] bg-green text-white' style={{borderRadius:'0px 50px 50px 0px'}}>SIGN UP</button>
            </form>
        </div>
        <div className='flex gap-4 items-center wal'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg>
        </div>
      </div>
      <div className='border mt-[90px]'></div>
      <div className="grid lg:grid-cols-5 grid-cols-1 pt-14">
        <div className='col-span-2'>
            <div>
                <img src="https://htmldemo.net/jena/jena/assets/img/logo4.webp"  alt="" />
            </div>  
            <div className='pt-12'>
                <p style={{fontWeight:'600'}}>Address</p>
                <p className='text-gray-700'>4710-4890 Breckinridge St,Fayetteville</p>
            </div>
            <div className='pt-12'>
                <p style={{fontWeight:'600'}}>Need Help?</p>
                <p className='text-gray-700'>Call: (+800) 345 6789 - (+877) 345 6789</p>
            </div>
        </div>
        <div className='col-span-1'>
            <h1 style={{fontWeight:'600',fontSize:'20px'}}>Company</h1>
            <p className='text-gray-700 pt-10'>Delivery</p>
            <p className='text-gray-700 pt-3'>About Us</p>
            <p className='text-gray-700 pt-3'>Contact Us</p>
            <p className='text-gray-700 pt-3'>Sitemap</p>
            <p className='text-gray-700 pt-3'>Stores</p>
        </div>
        <div className='col-span-1'>
            <h1 style={{fontWeight:'600',fontSize:'20px'}}>My Account</h1>
            <p className='text-gray-700 pt-10'>Legal Notice</p>
            <p className='text-gray-700 pt-3'>About Us</p>
            <p className='text-gray-700 pt-3'>Contact Us</p>
            <p className='text-gray-700 pt-3'>Sitemap</p>
            <p className='text-gray-700 pt-3'>Login</p>
        </div>
        <div className='col-span-1'>
            <h1 style={{fontWeight:'600',fontSize:'20px'}}>Products</h1>
            <p className='text-gray-700 pt-10'>Prices drop</p>
            <p className='text-gray-700 pt-3'>New Products</p>
            <p className='text-gray-700 pt-3'>Best Sales</p>
            <p className='text-gray-700 pt-3'>Login</p>
            <p className='text-gray-700 pt-3'>My account</p>
        </div>
      </div>
      <p className='pt-14 text-gray-700'>&copy; 2024 jena. Made with ❤ by mella</p>
    </div>
  )
}

export default Footer
