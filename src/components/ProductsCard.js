import React from 'react'

const ProductsCard = ({product}) => {
  return (
    <div className="group relative">
      <div className='w-full h-96 cursor-pointer overflow-hidden'>
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
                  <p className='line-through text-gray-500'>${product.oldPrice}</p>
                  <p className='font-semibold'>${product.price}</p>
                </div>

                <p className='absolute z-20 w-[100px] text-gray-500 font-bold hover:text-green-500
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
    </div>
  )
}

export default ProductsCard
