import React from 'react'
import {MdDelete} from 'react-icons/md'
import { useDispatch,useSelector } from 'react-redux'
import { deleteCartItem,increaseQty,decreaseQty } from '../redux/productSlice'
const CartProduct = ({id,name,price,category,qty,total,image}) => {
   const dispatch=useDispatch()
  
  return (
    <div className='bg-slate-300 p-2 flex gap-2 border-2 '>
     <div className=" bg-white p-2 overflow-hidden">
        <img src={image} className='h-28 w-40 object-cover'/>
     </div>

     <div className=" w-full">
        
<div className=" flex justify-between">
    
        <h3 className=' font-semibold text-blue-500 capitalize text-lg md:text-xl'>{name}</h3>

<div className=" cursor-pointer hover:text-red-700 p-1 hover:scale-110  "  onClick={()=>dispatch(deleteCartItem(id))}>
  <MdDelete/>
</div>
</div>

        <p className= 'text-blue-400   font-light capitalize text-xl'>{category}</p>
        <p className="">
          <span className='text-blue-500'>₹</span><span className='font-bold text-sm'>{price}</span>
        </p>


<div className="flex flex-row justify-between ">
        <div className="flex gap-3">
        <button   onClick={()=>{ dispatch(decreaseQty(id))}}  className=' bg-slate-200  min-w-[50px] w-full m-auto my-1 hover:bg-slate-600 py-1'>-</button>
<p className='text-semi-bold p-1 text-lg'>{qty}</p>

        <button onClick={()=>{dispatch(increaseQty(id))}} className=' bg-slate-200 min-w-[50px]  w-full m-auto my-1 hover:bg-slate-600 py-1'>+</button>

        </div>

        <div className=" flex gap-2">
          <p className='text-slate-500'>Total:</p>
          <p className='font-bold'><span>₹</span>{total}</p>
        </div>
        </div>
     
      </div>

    </div>
  )
}

export default CartProduct