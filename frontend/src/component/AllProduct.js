import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Filter from './Filter'
import CardFeature from './CardFeature'

const AllProduct = ({heading}) => {

  const productData=useSelector((state)=>state.product.productList)
  const categoryList = [...new Set(productData.map(el=>el.category))]
  //for filtering data by category
 const [dataFilter,setDataFilter]=useState([])
 useEffect(()=>{
 setDataFilter(productData)
 
},[productData])

const handleFilterProduct= (category)=>{
const filter=productData.filter(el=>el.category.toLowerCase()===category.toLowerCase())
setDataFilter(()=>{
  return (
    [...filter]
  )
  
})
}

  return (
    <div id="product-list">
       <div className="my-5"  >
        <h2 className='font-bold text-2xl text-slate-800 mb-4 my-2'>{heading}</h2>
        
        <div className=" flex gap-4 justify-center">
          {
       
       categoryList[0] && categoryList.map((el)=>{
        return (
       <Filter category={el} active={dataFilter[0] && el.toLowerCase()===dataFilter[0].category.toLowerCase()}   onClick={()=>handleFilterProduct(el)} />
             
        )
       })
          }
    
       
    
    
    
        </div>
    
        <div className="pt-5 flex flex-wrap gap-8 justify-center" >
          {
          dataFilter.map((el)=>{
           
            return(
              <CardFeature
              key={el._id}
              id={el._id}
    
              image={el.image}
              name={el.name}
              price={el.price}
              category={el.category}
    
              />
            )
          }
    
          )
        }
    
        </div>
    
       </div>
    </div>
  )
}

export default AllProduct