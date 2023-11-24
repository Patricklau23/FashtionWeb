import React, {useEffect, useState} from 'react';
import { sea } from '../assets/index';
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const Cart = () => {
  const productData = useSelector((state) => state.logo.productData);
  const userInfo = useSelector((state)=> state.logo.userInfo);
  const [totalAmt, setTotalAmt] = useState();
  const [payNow, setPayNow ] = useState(false);
  const navigate = useNavigate();

  useEffect(()=> {
    let price = 0;
    productData.map((item)=>{
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  },[productData]);

  const handleCheckout = () => {
    if(userInfo){
      setPayNow(true);
    }else{
      toast.error("Please sign in to Checkout");
      setTimeout(() => {
        navigate("/login");
        },2000);
    };
  };


  const payment = async (token) => {
    try {
      const response = await axios.post("http://localhost:8000/pay", {
        amount: totalAmt * 100,
        token: token.id,
      });
      console.log("Payment Response:", response);
    } catch (error) {
      console.error("Axios Error:", error);
    }
  };
  

  return (
    <div className='mx-[auto]'>
      <img className='w-full h-60 object-cover' src={sea} alt='cartbg' />
        {productData.length === 0 ? (
          <div className='flex flex-col items-center mt-4 p-[50px]'>
            <h1 className=' text-orange-300 text-[25px] text-center'>
              Your Cart is Empty<br></br>Let's start your shopping journey by exploring our collection!
            </h1>
            <Link
              to='/'
              className='mt-8 ml-7 flex items-center gap-2 text-gray-400 hover:text-green-500 hover:scale-110 duration-300'
            >
              <span className='text-[25px] mb-2'>
                <FaLongArrowAltLeft />
              </span>
              <p className='text-[25px] mb-4'>Shop Now</p>
            </Link>
          </div>
        ) : (
        <div className='max-w-screen-xl mx-auto py-20 flex'>
          <CartItem />
          <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
            <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
              <h2 className='text-2xl font-medium'>Cart Totals</h2>

              <p className='flex items-center gap-4 text-base'>
                Subtotal{''}
                <span className='font-titleFont font-bold text-lg'>$ {totalAmt}</span>
              </p>

              <p className='flex items-start gap-4 text-base'>
                Shipping{''}
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </p>
            </div>

            <p className='font-titleFont font-semibold flex justify-between mt-6'>
              Total
              <span className='text-xl font-bold'>$ {totalAmt}</span>
            </p>
            <button onClick={handleCheckout} className='bg-black text-base text-white w-full p-4 mt-6 hover:bg-gray-800 duration-300'>
              Proceed To Checkout
            </button>
            {
              payNow && <div className='w-full mt-6 flex items-center justify-center'>
                <StripeCheckout
                  stripeKey="pk_test_51OFkQ8IVhIF5jdENury8yXsEkSOris9EHhpO8VkaGVxeRUMpWKWTb4C5Cm8oaxiJFNIsAh5kzxp9fgtObBdMT6Ik004YCFxLiB"
                  name="Logo Online Shopping"
                  amount={totalAmt * 100}
                  Label ="Pay to Logo"
                  description={`Your Payment amount is $${totalAmt}`}
                  token={payment}
                  email={userInfo.email}
                />
              </div>
            }
          </div>     
        </div>     
      )}
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

export default Cart;
