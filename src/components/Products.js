import React from 'react'
import ProductsCard from './ProductsCard'

const Products = ({products}) => {
  return (
    <div className='py-10'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='bg-black text-white py-2 w-80 text-center'>
          Shopping Now 
        </h1>
        <span className='w-20 h-[3px] bg-black'></span>
        <p className='w-[700px] text-gray-600 mt-3'>Shop your heart out this November and enjoy amazing discounts and incredible deals! We're thrilled to offer you a fantastic 20% discount on every item in our store. Yes, you read that right – it's 20% off on everything you've been eyeing!Visit our online store or drop by our physical location to experience the best of November shopping. We can't wait to make your shopping experience extraordinary!
        </p>
      </div>
      <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
        {
          products.map((item)=>(
            <ProductsCard key={item._id} product={item}/>
          ))
        }
      </div>
    </div>
  )
}

export default Products
