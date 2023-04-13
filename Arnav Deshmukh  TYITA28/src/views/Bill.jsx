
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router';
import Navbar from '../widgets/Navbar';
import Menu from '../widgets/Menu';


const Bill = () => {
    const product = useLocation();
    console.log(product.state)
   
  return (
    <div className='flex flex-col '>
        <Navbar/>
        <Menu/>
        <div className='bg-cardColor h-1  mb-12' ></div>

<div className='bg-cardColor flex flex-col item-center w-[300px] h-p[300px] rounded-xl text-primary gap-2 m-auto p-5'>
        <img src={product.state.productUrl} alt="" />
        <div className='flex flex-row items-center gap-2'>
        <h1 className='font-semibold font-poppins'>Product Name : </h1>
             <h1 className='font-semibold font-poppins'>{product.state.productName}</h1>

        </div>
        <div className='flex flex-row items-center'>
        <h1 className='font-semibold font-poppins'>Product Count : </h1>
             <h1 className='font-semibold font-poppins'>{product.state.count}</h1>

        </div>
        <div className='flex flex-row items-center'>
        <h1 className='font-semibold font-poppins'>Product Paid: </h1>
             <h1 className='font-semibold font-poppins'> $ {product.state.pricePaid}</h1>

        </div>
        {/* <div className='flex flex-row items-center'>
        <h1 className='font-semibold font-poppins'>Product Date : </h1>
             <h1 className='font-semibold font-poppins'>{product.state.date}</h1>

        </div> */}
        <div className='flex flex-row items-center'>
        <h1 className='font-semibold font-poppins'>Useremail  : </h1>
             <h1 className='font-semibold font-poppins'>Pratham Gandhi</h1>

        </div>
       



    </div>

    </div>
    
  )
}

export default Bill