import React from 'react';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, deleteItem, increamentQuantity, resetCart } from '../redux/logoSlice';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const CartItem = () => {
  const productData = useSelector((state) => state.logo.productData);
  const dispatch = useDispatch();

  return (
    <div className='w-2/3 pr-10 '>
      <div className='w-full'>
        <h2 className='font-titleFont text-2xl'>Your Shopping Cart</h2>
      </div>
        <div>
          {productData.map((item) => (
            <div
              key={item._id}
              className='flex items-center justify-between gap-6 mt-6'
            >
              <div className='flex items-center gap-4 '>
                <RiDeleteBin6Line
                  onClick={() => {
                    dispatch(deleteItem({ _id: item._id }));
                    toast.error(`${item.title} is removed`);
                  }}
                  className='text-x1 text-gray-600 hover:text-red-600 cursor-pointer duration-300'
                />
                <img
                  className='w-32 h-32 object-cover'
                  src={item.image}
                  alt="productImg"
                />
              </div>
              <h2 className='w-52'>{item.title}</h2>
              <h2 className='w-10'>${item.price}</h2>
              <div className='flex gap-4 items-center text-gray-500 border p-3'>
                <p className='font-semibold text-base'>Quantity</p>
                <div className='flex items-center gap-4 text-sm font-semibold'>
                  <span 
                    onClick={()=> dispatch(decrementQuantity({
                        _id: item._id,
                        title: item.image,
                        price: item.price,
                        quantity:1,
                        description: item.description,
                    }))}
                    className='border-2 border-gray-500 h-8 w-8 font-normal text-lg flex items-center justify-center 
                    px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>-</span>
                  <span>{item.quantity}</span>
                  <span 
                        onClick={()=> dispatch(increamentQuantity({
                        _id: item._id,
                        title: item.image,
                        price: item.price,
                        quantity:1,
                        description: item.description,
                    }))}className='border-2 border-gray-500 h-8 w-8 font-normal text-lg flex items-center justify-center 
                    px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>+</span>
                </div>
              </div>
              <p className='w-14'>${item.quantity * item.price}</p>
            </div>
          ))}
          {/* Cart totals and buttons */}
          <button
            onClick={() => {
              dispatch(resetCart());
              toast.error("Your Cart is Empty!");
            }}
            className='bg-red-500 text-white mt-8 ml-9 py-1 px-6 hover:bg-red-800 duration-300'
          >
            Clear Cart
          </button>
          <Link to="/">
            <button className='mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-green-500 duration-300'>
              <span>
                <FaLongArrowAltLeft />
              </span>
              go shopping
            </button>
          </Link>
        </div>
      

      <ToastContainer
        position='top-left'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  );
};

export default CartItem;
