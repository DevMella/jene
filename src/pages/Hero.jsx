import React from 'react'
import pine from '../../assets/pine.png'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <div className='bg-peach w-full font'>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:px-14 px-4">
        <div className='lg:pt-[180px] pt-[100px] col-span-1'>
            <h5 className='text-ash'>NATURAL ORGANIC</h5>
            <h2 className='lg:text-[50px] text-[40px] leading-tight text-ash pt-4'>Fresh Pineapple For Live Healthy</h2>
            <h5 className='text-ash pt-4'>A Great Variety Of Care fully Stored Citruses</h5>
            <Button text='SHOP NOW' className={`w-[200px] mt-5 h-[50px] rounded-full bg-green text-white hover:bg-green-600 transition duration-200`}/>
        </div>
        <div className='w-full lg:col-span-2 mt-14 ' style={{padding:'0px 0px 40px 0px'}}>
          <img src={pine} className="lg:w-full lg:h-[106vh] object-cover" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
