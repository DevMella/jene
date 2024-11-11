import React from 'react'

const Shop = () => {
  return (
    <div className='lg:px-14 px-4 py-10'>
      <div className='flex flex-col items-center  justify-center'>
        <p className='text-green tracking-wider' style={{fontSize:"17px", fontWeight:'600'}}>Awesome Shop</p>
        <h3 className='text-4xl' style={{fontWeight:'600'}}>Jena Collection</h3>
      </div>
      <div className="grid lg:grid-cols-2 gap-7 pt-9">
        <div className="bg-custom w-full"></div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-7">
            <div className='bg-garlic '></div>
            <div className='bg-cabbage'></div>
            <div className='bg-juice'></div>
            <div className='bg-lemon'></div>
        </div>
      </div>
    </div>
  )
}

export default Shop
