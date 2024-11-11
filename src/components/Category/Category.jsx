import React from 'react'

const Category = () => {
  return (
    <div className='lg:px-14 px-4 py-10'>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-green tracking-wider' style={{ fontSize: "17px", fontWeight: '600' }}>Awesome Shop</p>
        <h3 className='text-4xl' style={{ fontWeight: '600' }}>Hot Categories</h3>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 pt-7">
        <div className='flex gap-7 '>
            <div>
                <img src="https://htmldemo.net/jena/jena/assets/img/category/4.webp" className='border' alt="" />
            </div>
            <div>
                <h1 className='text-[20px]'>Laura Mercier</h1>
                <p className='text-ash hover:text-red-600'>Bananas</p>
                <p className='text-ash hover:text-red-600'>Berries & Cherries</p>
                <p className='text-ash hover:text-red-600'>Apples & Pears</p>
                <p className='text-ash hover:text-red-600'>Oranges & Citrus Fruit</p>
                <p className='text-ash hover:text-red-600'>View All</p>
            </div>
        </div>
        <div className='flex gap-7 wal'>
            <div>
                <img src="https://htmldemo.net/jena/jena/assets/img/category/6.webp" className='border' alt="" />
            </div>
            <div>
                <h1 className='text-[20px]'>Full Miu</h1>
                <p className='text-ash hover:text-red-600'>Cabbages & Greens</p>
                <p className='text-ash hover:text-red-600'>Lettuce & Salad bags</p>
                <p className='text-ash hover:text-red-600'>Tomatoes</p>
                <p className='text-ash hover:text-red-600'>Cucumber</p>
                <p className='text-ash hover:text-red-600'>View All</p>
            </div>
        </div>
        <div className='flex gap-7 wal'>
            <div>
                <img src="https://htmldemo.net/jena/jena/assets/img/category/8.webp" className='border' alt="" />
            </div>
            <div>
                <h1 className='text-[20px]'>Nutrition</h1>
                <p className='text-ash hover:text-red-600'>Potatoes</p>
                <p className='text-ash hover:text-red-600'>Sweet Potatoes</p>
                <p className='text-ash hover:text-red-600'>Onions & Leeks</p>
                <p className='text-ash hover:text-red-600'>Root Vegetables</p>
                <p className='text-ash hover:text-red-600'>View All</p>
            </div>
        </div>
        <div className='flex gap-7 mt-8'>
            <div>
                <img src="https://htmldemo.net/jena/jena/assets/img/category/5.webp" className='border' alt="" />
            </div>
            <div>
                <h1 className='text-[20px]'>Nutrition</h1>
                <p className='text-ash hover:text-red-600'>Potatoes</p>
                <p className='text-ash hover:text-red-600'>Sweet Potatoes</p>
                <p className='text-ash hover:text-red-600'>Onions & Leeks</p>
                <p className='text-ash hover:text-red-600'>Root Vegetables</p>
                <p className='text-ash hover:text-red-600'>View All</p>
            </div>
        </div>
        <div className='flex gap-7 mt-8'>
            <div>
                <img src="https://htmldemo.net/jena/jena/assets/img/category/7.webp" className='border' alt="" />
            </div>
            <div>
                <h1 className='text-[20px]'>Laura  Mercier</h1>
                <p className='text-ash hover:text-red-600'>Bananas</p>
                <p className='text-ash hover:text-red-600'>Apples & Pears</p>
                <p className='text-ash hover:text-red-600'>Berries & Cherries</p>
                <p className='text-ash hover:text-red-600'>Oranges & Citrus fruit</p>
                <p className='text-ash hover:text-red-600'>View All</p>
            </div>
        </div>
        <div className='flex gap-7 mt-8'>
            <div>
                <img src="https://htmldemo.net/jena/jena/assets/img/category/9.webp" className='border' alt="" />
            </div>
            <div>
                <h1 className='text-[20px]'>Apple Juice</h1>
                <p className='text-ash hover:text-red-600'>Fresh Salad</p>
                <p className='text-ash hover:text-red-600'>Salad bag</p>
                <p className='text-ash hover:text-red-600'>Celery</p>
                <p className='text-ash hover:text-red-600'>Peppers</p>
                <p className='text-ash hover:text-red-600'>View All</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Category
