import React from 'react';
import { logoLight, paymentLogo } from '../assets/index.js';

const Footer = () => {
  return (
    <div className='flex bg-black text-[#949494] py-20'>
      <div className='flex gap-[100px] max-w-screen-xl h-full mx-auto '>
        <div className='flex flex-col gap-4 mt-6'>
          <div>
            <img src={logoLight} alt="logoLight" className='w-[100px] ml-[-20px] mb-4' />
            <img className='w-[600px] ml-[-30px]' src={paymentLogo} alt="payment" />
            <i className="bi bi-0-circle-fill" style={{ color: "red" }}></i>
          </div> 

          <span className='ml-[-18px] font-bold text-lg text-red-100'>
            Follow us
          </span>
          
          <div className='flex gap-5 ml-[-15px]'>
            <i className="fa-brands fa-instagram cursor-pointer" style={{ color: 'white' }}></i>
            <i className="fa-brands fa-facebook cursor-pointer" style={{ color: 'white' }}></i>
            <i className="fa-brands fa-youtube cursor-pointer" style={{ color: 'white' }}></i>
            <i className="fa-brands fa-twitter cursor-pointer" style={{ color: 'white' }}></i>
            <i className="fa-brands fa-tiktok cursor-pointer" style={{ color: 'white' }}></i>
            <i className="fa-brands fa-github cursor-pointer" style={{ color: 'white' }}></i>
          </div>
        </div>
      
        <div className='flex flex-col gap-5 mt-6 list-none'>
          <h2 className='text-2xl font-semibold'>Company</h2>
          <li className='cursor-pointer text-red-100'>About Us</li>
          <li className='cursor-pointer text-red-100'>Blog</li>
          <li className='cursor-pointer text-red-100'>Partnerships</li>
          <li className='cursor-pointer text-red-100'>Careers</li>
          <li className='cursor-pointer text-red-100'>Press</li>
        </div>

        <div className='flex flex-col gap-5 mt-6 list-none'>
          <h2 className='text-2xl font-semibold'>Profile</h2>
          <li className="fa-solid fa-user">
            <span className='text-red-100 cursor-pointer text-[10px] ml-2'> My account</span>
          </li>
          <li className="fa-solid fa-cart-shopping">
            <span className='text-red-100 cursor-pointer text-[10px] ml-2'> Checkout</span>
          </li>
          <li className="fa-solid fa-house">
            <span className='text-red-100 cursor-pointer text-[10px] ml-2'> Order tracking</span>
          </li>
          <li className="fa-solid fa-circle-info">
            <span className='text-red-100 cursor-pointer text-[10px] ml-2'>Help & support</span>
          </li>
        </div>

        <div className='flex flex-col gap-5 mt-6 list-none'>
          <h2 className='text-2xl font-semibold'>Locate us</h2>
          <li className=' text-red-100' >Office: 123 Middleton Crt, L3R2Y8</li>
          <li className=' text-red-100 '>Mobile: 4372568988</li>
          <li className=' text-red-100 '>Fax: 4572568988</li>
          <li className=' text-red-100 '>Email: logo@React.com</li>
        </div>

        <div className='flex flex-col gap-5 justify-center'>
              <h2 className='text-2xl font-semibold whitespace-nowrap'>🎉Subscribe for Our Special Offers🎁</h2>
              <div className='flex flex-col'>
                <input className='bg-transparent border px-[100px] py-3 text-sm' type="text" placeholder='Your email address...' />
                <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black py-1'>Subscribe</button>
              </div>
        </div>
      </div>  
    </div>
    
  );
}

export default Footer;

