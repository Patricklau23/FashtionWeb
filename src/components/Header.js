import React from 'react'
import { logo } from "../assets/index";
import { cart } from "../assets/index";
import { Link } from 'react-router-dom';
import { BsCart } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { FaUser } from "react-icons/fa";

const Header = () => {
    const productData = useSelector((state) => state.logo.productData);
    const userInfo = useSelector((state)=> state.logo.userInfo);
    console.log(userInfo);
  return (
  <div className="w-full h-40 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50">
     <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
            <div>
                <img className="w-[150px] cursor-pointer" src={logo} alt="logo"/>
            </div>
        </Link>

        <div className='flex items-center gap-8'> 
        
            <ul className='flex items-center gap-8'>
                <Link to ='/'><li className='text-base text-black font-bold hover:text-orange-900 
                    hover:underline underline-offset-2 decoration-[1px] 
                    cursor-pointer duration-300'>
                    Home</li>
                </Link>
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
                <Link to ='/blog'>
                    <li className='text-base text-black font-bold hover:text-orange-900 
                    hover:underline underline-offset-2 decoration-[1px] 
                    cursor-pointer duration-300'>
                    Blog</li>
                </Link>
            </ul>
            <Link to="/cart">
                <div className='relative'> 
                    <div className='text-[30px]'><BsCart/> </div>
                    <span className='absolute w-6 top-1 left-1 text-sm flex items-center 
                    justify-center font-bold font-titleFont cursor-pointer text-green-500'>
                        {productData.length}</span>
                </div>
            </Link>
            <Link to="/login">
                {userInfo ? (
                    <img src={userInfo.image} alt="User Avatar" className='w-14 border-4 border-green-300 rounded-lg' />
                ) : (
                    <FaUser className='text-lg' />
                )}
            </Link>

            {
            userInfo ? (
                    <div className='flex flex-col justify-center'>
                        <p>Welcome</p>
                        <p className='font-bold text-yellow-600'>{userInfo.name}</p>
                    </div>
                ) : (
                    <p className='text-gray-500 font-bold'>Visitor</p>
                )
            }


        </div>
    </div>
</div>

  );
};

export default Header
