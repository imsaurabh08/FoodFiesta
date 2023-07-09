import React from 'react'
import {AiOutlineFilter} from 'react-icons/ai'

const Filter = ({category,onClick,active}) => {
  // console.log(active)
  return (
    <div onClick={onClick} >
        <div className={`text-3xl cursor-pointer p-5 rounded-full ${ active ?  "bg-yellow-900" : "bg-yellow-500"}  } `}>
       
        <AiOutlineFilter/>
    </div>

    <div className="flex justify-center capitalize text-bold ">
        {category}
    </div>
    </div>
  )
}

export default Filter