import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../component/CartProduct'
import {loadStripe} from '@stripe/stripe-js';
import { toast } from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
// const dotenv=require("dotenv").config()


const 
Cart = () => {
   const productCartItem=useSelector((state)=>state.product.cartItem)
    const totalPrice=productCartItem.reduce((acc,curr)=> acc+parseInt(curr.total),0)
    const totalQty=productCartItem.reduce((acc,curr)=>acc+parseInt(curr.qty),0)
    
    const user=useSelector((state)=>state.user)
   
    const navigate=useNavigate();

    
   const handleCheckout=async()=>{
       
    if(user.email)
    {
    
    

    const stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
    const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/create-checkout-session`,{
      method : "POST",
      headers  : {
        "content-type" : "application/json"
      },
      body  : JSON.stringify(productCartItem)
    })
    if(res.statusCode === 500) return;

    const data = await res.json()
    

    toast("Redirect to payment Gateway...!")
    stripePromise.redirectToCheckout({sessionId : data}) 
      
  }
  else{
    toast("You are not logged in to your account!")

    setTimeout(() => {
      navigate('/login')
    }, 2000);

  }
   }
    

    return (
      <>
      
         <div className="p-2 md:p-4">
          <h2 className="text-lg md:text-2xl font-bold text-slate-600">
            Your Cart Items
          </h2>
  
          
          {/* productCartItem[0] ? */}
          <div className="my-4 flex gap-3">
            {/* display cart items  */}
            <div className="w-full max-w-3xl ">
              {productCartItem.map((el) => {
                return (
                  <CartProduct
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    image={el.image}
                    category={el.category}
                    qty={el.qty}
                    total={el.total}
                    price={el.price}
                  />
                );
              })}
            </div>
    


    {/* total cart items */}
    
    <div className=" w-full max-w-md ml-auto ">
        <h2 className='bg-blue-600 p-1' >Summary</h2>
        <div className=" m-2 flex justify-between">
            <p className='text-slate-600'>Total Items:</p>
            <p className='font-bold'> {totalQty}</p>
        </div>

        <div className=" m-2 flex justify-between">
            <p className='text-slate-600'>Total Price:</p>
            <p className='font-bold'><span>₹</span>{totalPrice}</p>
        </div>

        <button disabled={!totalPrice} className="bg-yellow-500 w-full my-2 flex justify-center py-1" onClick={handleCheckout}>Checkout</button>
    </div>

</div>

    </div>
    </>
  )
}

export default 
Cart