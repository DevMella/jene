import React, { useState } from 'react';
import 'flowbite';
import straw from '../../assets/straw.png';
import cover from '../../assets/cover.png';
import cash from '../../assets/cash (1).png';
import cash3 from '../../assets/cash (3).png';
import gin from '../../assets/gin.png';
import Button from '../Button/Button'

const productsData = [
  {
    id: 1,
    name: 'Strawberry Shoulder Pack1',
    price: 55.30,
    image: 'https://htmldemo.net/jena/jena/assets/img/shop/23.webp',
    originalPrice: 65.30,
  },
  {
    id: 2,
    name: 'Cashew Nut Pack',
    price: 23.30,
    image: 'https://htmldemo.net/jena/jena/assets/img/shop/24.webp',
    originalPrice: 30.30,
  },
  {
    id: 3,
    name: 'Cashew Nut Pack',
    price: 41.30,
    image: 'https://htmldemo.net/jena/jena/assets/img/shop/5.webp',
    originalPrice: 53.30,
  },
  {
    id: 4,
    name: 'Cashew Nut Pack',
    price: 75.30,
    image: 'https://htmldemo.net/jena/jena/assets/img/shop/19.webp',
    originalPrice: 103.30,
  },
  {
    id: 5,
    name: 'Strawberry Shoulder Pack1',
    price: 55.30,
    image: 'https://htmldemo.net/jena/jena/assets/img/shop/3.webp',
    originalPrice: 65.30,
  },
  {
    id: 6,
    name: 'Cashew Nut Pack',
    price: 23.30,
    image: 'https://htmldemo.net/jena/jena/assets/img/shop/27.webp',
    originalPrice: 30.30,
  },
  {
    id: 7,
    name: 'Cashew Nut Pack',
    price: 41.30,
    image: 'https://htmldemo.net/jena/jena/assets/img/shop/8.webp',
    originalPrice: 53.30,
  },
  {
    id: 8,
    name: 'Cashew Nut Pack',
    price: 75.30,
    image: 'https://htmldemo.net/jena/jena/assets/img/shop/2.webp',
    originalPrice: 103.30,
  },
];

const Products1 = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const openModal = (product) => {
    setSelectedProduct(product);
    setQuantity(1); 
  };
 
  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className='lg:px-14 px-4 py-10'>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-green tracking-wider' style={{ fontSize: "17px", fontWeight: '600' }}>Awesome Shop</p>
        <h3 className='text-4xl' style={{ fontWeight: '600' }}>Our Products</h3>
      </div>
      <div className="pt-9">
        <div className='grid lg:grid-cols-4 grid-cols-1 items-center gap-6'>
          {productsData.map((product) => (
            <div key={product.id} className='group mb-8'>
              <div className='bg-pro p-4 rounded-md relative w-full lg:h-[300px] sm:h-auto'>
                <button className='bg-black rounded-xl text-white w-[50px] text-[12px] h-[20px]'>NEW</button>
                <div className='flex flex-col items-center justify-center'>
                  <img src={product.image} className='transition-opacity duration-300 group-hover:opacity-0' width={'100%'} alt="" />
                </div>
                <div className="hov absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img src={cover} alt="" />
                </div>
              </div>
              <h6 className='pt-3' style={{ fontWeight: "600" }}>{product.name}</h6>
              <div className='flex items-center justify-between'>
                <p className='line-through' style={{ fontWeight: "100" }}>${product.originalPrice}</p>
                <p style={{ fontWeight: "100" }}>${product.price}</p>
              </div>
              <div className={`flex justify-between mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <div className='flex gap-1 items-center justify-between w-full'>
                  <div className='flex gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" class="bi bi-bag-check-fill" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
                    </svg>
                    <p>ADD TO CART</p>
                  </div>
                  <div className='flex gap-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => openModal(product)} width="20" height="20" fill="green" class="bi bi-eye" viewBox="0 0 16 16">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div id="static-modal" className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-[800px]">
            <div className="flex justify-between">
              <div></div>
              <button onClick={() => setSelectedProduct(null)}>x</button>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className='col-span-1'>
                <div className='bg-pro p-4'>
                  <button className='bg-black rounded-xl text-white w-[50px] text-[12px] h-[20px]'>NEW</button>
                  <img src={selectedProduct.image} className="w-[500px]" alt="" />
                </div>
              </div>
              <div className='col-span-2'>
                <h1 className='text-2xl'>{selectedProduct.name}</h1>
                <div className='flex items-center gap-4 pt-3'>
                  <p className='line-through'>${selectedProduct.originalPrice}</p>
                  <p style={{ fontWeight: "600", fontSize: "20px" }}>${selectedProduct.price}</p>
                  <button className='w-[75px] h-[32px] bg-black text-white rounded-md text-[14px]' >Save 20%</button>
                </div>
                <p className='text-ash pt-7'>This Teton Pullover Hoodie gives you more than laid-back style. It's equipped with moisture-wicking fabric to keep light and dry inside, especially in chilly-weather workouts. An elasticized hem lets you move about freely.</p>
                <div className='pt-6'>
                  <h1 className='tracking-wider pb-3' style={{fontWeight:'600'}}>Quantity</h1>
                  <div className="flex items-center border w-[110px] justify-between h-[40px] rounded-md mb-4">
                    <button onClick={handleDecrement} className="border-none px-2">-</button>
                    <span className="mx-2">{quantity}</span>
                    <button onClick={handleIncrement} className="border-none px-2">+</button>
                  </div>
                  <div>Total: ${(selectedProduct.price * quantity).toFixed(2)}</div>
                  <Button text='CHECKOUT' className={`w-[200px] mt-5 h-[50px] rounded-full bg-green text-white hover:bg-green-600 transition duration-200`}/>
              </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products1;
