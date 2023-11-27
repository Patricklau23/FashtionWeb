import {useState,React,useEffect} from 'react'
import {useLocation} from "react-router-dom";
import {AiFillStar} from "react-icons/ai"
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/logoSlice';
import { ToastContainer, toast } from 'react-toastify';

const Product = () => {
    const dispatch = useDispatch();
    const [details, setDetails] = useState({});
    let [baseQty, setBaseQty] = useState(1);
    const location = useLocation()
    useEffect(()=>{
      //Access the state product details
        setDetails(location.state.item);
    },[location.state.item])

  return (
    <div>
      <div className='max-w-screen-xl flex flex-col mx-auto my-10 gap-10 lg:flex-row '>
        <div className='w-[2/5] relative'>
          <img 
            className='w-full h-full'
            src={details.image} 
            alt="productImg"/>
          <div className='absolute top-3 right-0'>
            {
              details.isNew &&( <p className='bg-red-400 border-[2px] rounded-md text-white font-semibold font-titleFont px-6 py-1 text-center'>On Sale</p> )
            }
          </div>
        </div>
        <div className='w-3/5 flex flex-col justify-center gap-8'>
          <div>
            <h2 className='font-semibold text-4xl'>{details.title}</h2>
          </div>

          <div className='flex gap-4 items-center -mt-4'>
            <p className='line-through text-red-500 text-[20px]'>${details.oldPrice}</p>
            <p className='font-bold text-[30px]'>${details.price}</p>
          </div>

          <div className='flex'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <p className='text-xs text-gray-500 ml-1' >(1 Customer review)</p>
          </div>

          <p className='text-base text-gray-500 -mt-3'>{details.description}</p>

          <div className='flex gap-4 '>
            <div className='flex gap-4 items-center text-gray-500 border p-3'>
              <p className='font-semibold text-base'>Quantity</p>
              <div className='flex items-center gap-4 text-sm font-semibold'>
                <button onClick={()=>setBaseQty(baseQty === 1 ? 1 : baseQty - 1)} className='border-2 border-gray-500 h-8 w-8 font-normal text-lg flex items-center justify-center 
                px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>-</button>
                <span>{baseQty}</span>
                <button onClick={()=>setBaseQty(baseQty+1)}className='border-2 border-gray-500 h-8 w-8 font-normal text-lg flex items-center justify-center 
                px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>+</button>
              </div>
            </div>

            <button 
            onClick={() => {
              dispatch(addToCart({
                _id: details._id,
                title: details.title,
                image: details.image,
                price: details.price,
                quantity: baseQty,
                description: details.description,
              }));
              //Appear right after the addToCart
              toast.success(`${details.title} is added to the cart successfully!`);
            }}
            className='bg-black text-white py-3 px-6 border-2 border-solid hover:bg-green-500 rounded-lg'
          >
            Add To Cart
          </button>
          </div>

          <p className='text-base text-gray-500'>
            Category: <span className='font-medium capitalize'>{details.category}</span>
          </p>
        </div>
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
  )
}

export default Product
