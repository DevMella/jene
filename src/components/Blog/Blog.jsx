import React from 'react'

const Blog = () => {
  return (
    <div className='lg:px-14 px-4 py-10'>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-green tracking-wider' style={{ fontSize: "17px", fontWeight: '600' }}>Awesome Shop</p>
        <h3 className='text-4xl' style={{ fontWeight: '600' }}>From Our Blog</h3>
      </div>
      <div className="grid lg:grid-cols-2 wal gap-8">
        <div className='border grid grid-cols-2'>
            <div className='py-[30px] px-6'>
                <h1 className='tracking-wider text-gray-400'>ORGANIC</h1>
                <h1 className='pt-7 text-[22px] text-black' style={{fontWeight:'600'}}>THIS IS SECOUND POST FOR XIPBLOG</h1>
                <h1 className='tracking-wider text-gray-400 pt-7'>Lorem ipsum dolor sit amet, consectetur adipisicing.....</h1>
                <h1 className='tracking-wider text-gray-400 pt-14'>MAR 20TH, 2022</h1>
            </div>
            <div>
                <img src="https://htmldemo.net/jena/jena/assets/img/blog/1.webp" className='w-full' alt="" />
            </div>
        </div>
        <div className='border grid grid-cols-2'>
            <div className='py-[30px] px-6'>
                <h1 className='tracking-wider text-gray-400'>ORGANIC</h1>
                <h1 className='pt-7 text-[22px] text-black' style={{fontWeight:'600'}}>THIS IS SECOUND POST FOR XIPBLOG</h1>
                <h1 className='tracking-wider text-gray-400 pt-7'>Lorem ipsum dolor sit amet, consectetur adipisicing.....</h1>
                <h1 className='tracking-wider text-gray-400 pt-14'>MAR 20TH, 2022</h1>
            </div>
            <div>
                <img src="https://htmldemo.net/jena/jena/assets/img/blog/2.webp" className='w-full' alt="" />
            </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-6 grid-cols-3 pt-14 place-items-center">
        <img src="https://htmldemo.net/jena/jena/assets/img/brand-logo/1.webp" alt="" />
        <img src="https://htmldemo.net/jena/jena/assets/img/brand-logo/2.webp" alt="" />
        <img src="https://htmldemo.net/jena/jena/assets/img/brand-logo/3.webp" alt="" />
        <img src="https://htmldemo.net/jena/jena/assets/img/brand-logo/4.webp" alt="" />
        <img src="https://htmldemo.net/jena/jena/assets/img/brand-logo/6.webp" alt="" />
        <img src="https://htmldemo.net/jena/jena/assets/img/brand-logo/6.webp" alt="" />
      </div>
    </div>
  )
}

export default Blog
