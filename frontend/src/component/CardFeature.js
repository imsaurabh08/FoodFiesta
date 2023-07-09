import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { addCartItem } from '../redux/productSlice';

const CardFeature = ({name,price,category,image,loading,id}) => {
  const dispatch=useDispatch()
  const handleAddcartProduct=(e)=>{
    dispatch(addCartItem({
      _id:id,
      name:name,
      image:image,
      price:price,
      category:category
    }))
  };
  return (
    <div className='bg-white shadow-sm p-2 rounded-lg hover:shadow-lg cursor-pointer min-w-[250px] max-w-[300px]'>

      {
        name ?
        <>
        <Link to= {`/menu/${id}`} onClick={()=>window.scrollTo({top:"0",behavior:'smooth'})}>
    <div className="w-50 min-h-[160px]   ">
      <img src={image} className="w-40 m-auto"/>
    </div>

    {/* <div className=""> */}
      <h3 className='text-center font-semibold text-blue-500 capitalize'>{name}</h3>
      <p className= 'text-blue-400 text-center  font-light capitalize'>{category}</p>
      <p className="text-center">
        <span className='text-blue-500'>₹</span><span className='font-bold'>{price}</span>
      </p>
      
      </Link>
<button className='text-center bg-yellow-500  w-full m-auto my-1 hover:bg-yellow-600' onClick={handleAddcartProduct}>Add to Cart</button>



        
        </>
        :
        <div className="min-h-[150px] flex justify-center items-center">
          <p>
            {loading}
          </p>
        </div>
      }


    

</div>
  )
}

export default CardFeature