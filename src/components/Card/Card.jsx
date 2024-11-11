import React from 'react'
import Button from '../Button/Button'
import juice from '../../assets/juice.png'
import jat from '../../assets/jat.png'

const Card = () => {
  return (
    <div className='bg-reds w-full mt-14'>
      <div className='lg:px-14 px-4 py-10 text-white'>
        <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className='col-span-1'>
                <h1 className='text-6xl lg:leading-normal leading-tight'>100% Organic. <br /> Natural Fresh Juice</h1>
                <p className='pt-5'>Made of 100% Valencia oranges to hold a perfect balance of sweet and tart flavour. This juice is made most enjoyable by the absence of pulp.</p>
                <Button text='CHECKOUT' className={`w-[200px] mt-5 h-[50px] rounded-full bg-white text-black hover:bg-green-600 transition duration-200`}/>
            </div>
            <div className='col-span-1 relative'>
              <img src={juice} className='w-[52%]' alt="" />
                <img src={jat} className='absolute top-[-140px] w-full' alt="" />
            </div>
        </div>
      </div>    
    </div>
  )
}

export default Card
