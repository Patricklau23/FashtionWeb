import React, { useState } from 'react';
import { logo } from "../assets/index";
import { Link } from 'react-router-dom';
import { BsCart } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { FaUser } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const productData = useSelector((state) => state.logo.productData);
  const userInfo = useSelector((state) => state.logo.userInfo);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 600 });

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  
  return (
    <div className="w-full h-40 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between" >
        <Link to="/">
          <div>
            <img className="w-[150px] cursor-pointer" src={logo} alt="logo" />
          </div>
        </Link>

        <div className='flex items-center gap-8'>
          {/* Sidebar Toggle Button */}
          {isMobile ? (
            <>
              <button onClick={toggleSidebar}>
                <span className="text-3xl">&#9776;</span>
              </button>

              {/* Sidebar Content - Show only on small screens */}
              <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity ${sidebarVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="fixed inset-y-0 left-0 w-64 bg-white transform translate-x overflow-y-auto transition-transform ease-in-out duration-300" >
                  <div className="flex flex-col gap-2 mt-16 p-4">
                    <button onClick={toggleSidebar} className="text-2xl text-black absolute top-4 right-4">
                      &times;
                    </button>
                    <Link to="/cart" onClick={toggleSidebar}>
                      <div className='relative'>
                        <div className='text-[30px]'><BsCart /> </div>
                          <span className='absolute w-6 top-1 left-1 text-sm flex items-center
                                justify-center font-bold font-titleFont cursor-pointer text-green-500'>
                            {productData.length}
                          </span>
                      </div>
                    </Link>
                    {userInfo ? (
                      <div className='flex flex-col justify-center'>
                        <p>Welcome</p>
                        <p className='font-bold text-yellow-600'>{userInfo.name}</p>
                      </div>
                    ) : (
                      <p className='text-gray-500 font-bold'>Visitor</p>
                    )}
                    <Link to="/login" className="flex items-center" onClick={toggleSidebar}>
                      <FaUser className='text-lg' />
                    </Link>
                    <Link to='/' onClick={toggleSidebar}>
                      <p className='text-base text-black font-bold hover:text-orange-900
                          hover:underline underline-offset-2 decoration-[1px]
                          cursor-pointer duration-300'>
                        Home
                      </p>
                    </Link>
                    <Link to="/shop" onClick={toggleSidebar}>
                      <p className="text-base font-bold hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300">
                        Shop
                      </p>
                    </Link>
                    <Link to="/blog" onClick={toggleSidebar}>
                      <p className="text-base font-bold hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300">
                        Blog
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <ul className='flex flex-row items-center gap-8'>
              <Link to='/'>
                <li className='text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration-[1px]
                    cursor-pointer duration-300'>
                  Home
                </li>
              </Link>
              <Link to='/shop'>
                <li className='text-base text-black font-bold hover:text-orange-900
                hover:underline underline-offset-2 decoration-[1px]
                cursor-pointer duration-300'>
                  Shop</li>
              </Link>
              <Link to='/blog'>
                <li className='text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration-[1px]
                    cursor-pointer duration-300'>
                  Blog</li>
              </Link>
              <Link to="/cart">
                <div className='relative'>
                  <div className='text-[30px]'><BsCart /> </div>
                  <span className='absolute w-6 top-1 left-1 text-sm flex items-center
                        justify-center font-bold font-titleFont cursor-pointer text-green-500'>
                    {productData.length}
                  </span>
                </div>
              </Link>
              <Link to="/login">
                {userInfo ? (
                  <img src={userInfo.image} alt="User Avatar" className='w-14 border-4 border-green-300 rounded-lg' />
                ) : (
                  <FaUser className='text-lg' />
                )}
              </Link>

              {userInfo ? (
                <div className='flex flex-col justify-center'>
                  <p>Welcome</p>
                  <p className='font-bold text-yellow-600'>{userInfo.name}</p>
                </div>
              ) : (
                <p className='text-gray-500 font-bold'>Visitor</p>
              )}
            </ul>
          )}

        </div>
      </div>
    </div>
  );
};

export default Header;
