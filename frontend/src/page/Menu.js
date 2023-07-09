import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import AllProduct from '../component/AllProduct'
import { addCartItem } from '../redux/productSlice'
const Menu = () => {
  const {filterby}=useParams()
  const productData=useSelector(state=>state.product.productList)
  const dispatch=useDispatch()
    const navigate=useNavigate();
 
  
const productDisplay=productData.filter(el=>el._id===filterby)[0]

const handleBuy=( ()=>{
  dispatch(addCartItem(productDisplay))
  navigate('/cart')

 })

const handleAddcartProduct=(e)=>{
  dispatch(addCartItem(productDisplay))
};

  return (
    <div className='p-2 md:p-4'>
      <div className="w-full  max-w-4xl m-auto flex  gap-3  bg-white">
        
        <div className="max-w-sm  overflow-hidden mw-full p-5">
          <img src={productDisplay.image} className='hover:scale-105 h-full'/>
        </div>
        <div className="">
        

    
          <h3 className=' font-semibold text-blue-500 capitalize text-2xl md:text-4xl'>{productDisplay.name}</h3>
          <p className= 'text-blue-400   font-light capitalize text-2xl'>{productDisplay.category}</p>
          <p className="">
            <span className='text-blue-500'>₹</span><span className='font-bold text-2xl'>{productDisplay.price}</span>
          </p>

          <div className="flex gap-3">
<button onClick={handleBuy} className=' bg-yellow-500 min-w-[100px]  w-full m-auto my-1 hover:bg-yellow-600 py-1'>Buy</button>
<button onClick={handleAddcartProduct} className=' bg-yellow-500  min-w-[100px] w-full m-auto my-1 hover:bg-yellow-600 py-1'>Add to Cart</button>

          </div>

          <div className="">
            <p className='text-slate-500'>Description:</p>
            <p className='capitalize text-blue-500'>{productDisplay.description}</p>
          </div>
       
        </div>


      </div>

<AllProduct heading={"Related Product"}/>
    </div>
  )
}

export default Menu