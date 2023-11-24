import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/logoSlice'
import { ToastContainer, toast } from 'react-toastify';

const ProductsCard = ({product}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = product.title;
  //Make the title lowercase and split the string and combine it as one string
  //Convert to lowercase: "long sleeve jacket"
  //Split by spaces: ["long", "sleeve", "jacket"]
  //Join with no spaces: "longsleevejacket"
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id)

  const handleDetails = () =>{
    navigate(`/product/${rootId}`,{
      state:{
        item:product,
      },
    })
  };
  return (
    <div className="group relative">
      <div onClick={handleDetails}
        className='w-full h-96 cursor-pointer overflow-hidden'>
        <img 
          className='w-full h-full hover:scale-110 duration-500'
          src={product.image} 
          alt="productImg"/>
       </div>
       
       <div className='w-full border-[1px] px-2 py-4'>
          <div className='flex justify-between items-center'>

            <div>
                <h2 className='font-titleFont text-base font-bold'>
                  {product.title.substring(0,15)}
                </h2>
            </div>

            <div className='flex gap-2 justify-end relative overflow-hidden w-[100px]'>

                <div className='flex gap-2 transform group-hover:translate-y-20 duration-500'>
                  <p className='line-through text-red-500'>${product.oldPrice}</p>
                  <p className='font-bold'>${product.price}</p>
                </div>
                
                <p onClick={()=> {
                  dispatch(addToCart({
                  _id: product._id,
                  title: product.title,
                  image: product.image,
                  price: product.price,
                  quantity:1,
                  description:product.description,
                })); 
                toast.success(`${product.title} is added to the cart successfully!`);
                }}
                className='absolute z-20 w-[100px] text-gray-500 font-bold hover:text-green-500
                flex items-center gap-1 top-0 transform -translate-x-24 group-hover:translate-x-2 
                cursor-pointer duration-500'>
                  Add To Cart
                </p>

            </div>
          </div>
          
          <div>
            <p>{product.category}</p>
          </div>
          <div className='absolute top-3 right-0'>
            {
              product.isNew &&( <p className='bg-red-400 border-[2px] rounded-md text-white font-semibold font-titleFont px-6 py-1 text-center'>On Sale</p> )
            }
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

export default ProductsCard
