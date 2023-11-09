import React from 'react'
import {logo} from "../assets/index";
import {cart} from "../assets/index";
import {lock} from "../assets/index";

const Header = () => {
  return (
  <div className="w-full h-40 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50">
     <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
            <img className="w-[150px] cursor-pointer" src={logo} alt="logo"/>
        </div>

        <div className='flex items-center gap-8'> 
        
            <ul className='flex items-center gap-8'>
                <li className='text-base text-black font-bold hover:text-orange-900 
                hover:underline underline-offset-2 decoration-[1px] 
                cursor-pointer duration-300'>
                Home</li>
                <li className='text-base text-black font-bold hover:text-orange-900 
                hover:underline underline-offset-2 decoration-[1px] 
                cursor-pointer duration-300'>
                Pages</li>
                <li className='text-base text-black font-bold hover:text-orange-900 
                hover:underline underline-offset-2 decoration-[1px] 
                cursor-pointer duration-300'>
                Shop</li>
                <li className='text-base text-black font-bold hover:text-orange-900 
                hover:underline underline-offset-2 decoration-[1px] 
                cursor-pointer duration-300'>
                Element</li>
                <li className='text-base text-black font-bold hover:text-orange-900 
                hover:underline underline-offset-2 decoration-[1px] 
                cursor-pointer duration-300'>
                Blog</li>
            </ul>

            <div className='relative'>
                <img className='w-8 h-8 cursor-pointer'src={lock} alt="lockImg" />
                <span className='absolute w-6 top-3 left-1 text-sm flex items-center 
                justify-center font semibold font-titleFont cursor-pointer'>
                    0</span>
            </div>

            <img className='w-8 h-8 rounded-full cursor-pointer' src={cart} alt="cartImg">
            </img>

        </div>
    </div>
</div>

  );
};

export default Header
