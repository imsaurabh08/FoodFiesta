import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = ({name,category,price,image,loading,id}) => {
  return (

    <div className='bg-white shadow-md p-2 rounded-lg min-w-[150px] '>

      {
        name ?
        <Link to={`/menu/${id}`} onClick={()=>window.scrollTo({top:"0",behavior:'smooth'})} >

        <><div className="w-50 min-h-[160px] ">
          <img src={image} className="w-40"/>
        </div>

        <div className="">
          <h3 className='text-center font-semibold text-blue-500 capitalize'>{name}</h3>
          <p className= 'text-blue-400 text-center  font-light'>{category}</p>
          <p className="text-center">
            <span className='text-blue-500'>₹</span><span className='font-bold'>{price}</span>
          </p>
        </div>
</>
</Link>
:
<div className="flex justify-center items-center h-full"><span>{loading}</span></div>
      }

    </div>
  )
}

export default HomeCard