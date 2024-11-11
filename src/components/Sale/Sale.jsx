import React from 'react'

const Sale = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-4 grid-cols-1 lg:px-14 px-4 py-10 w-full gap-6">
        <div className='col-span-1'>
            <img src="https://htmldemo.net/jena/jena/assets/img/category/1.webp" width={'100%'} style={{height:'340px', borderRadius:'4px'}} alt="" />
        </div>
        <div className='col-span-2'>
            <img src="https://htmldemo.net/jena/jena/assets/img/category/2.webp" width={'100%'} style={{height:'340px', borderRadius:'4px'}} alt="" />
        </div>
        <div className='col-span-1'>
            <img src="https://htmldemo.net/jena/jena/assets/img/category/3.webp" width={'100%'} style={{height:'340px', borderRadius:'4px'}} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Sale
