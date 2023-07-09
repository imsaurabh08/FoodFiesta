import React, { useState } from 'react'
import { BsFillCloudUploadFill } from 'react-icons/bs'
import { ImageToBAse64 } from '../utility/ImageToBase64'
import { toast } from 'react-hot-toast'

const Newproduct = () => {
  const [data,setData]=useState({
    name:"",
    category:"",
    image:"",
    price:"",
    description:"",
  })

  const handleOnChange=(e)=>{
const {name,value}=e.target

setData((preve)=>{
  return{
    ...preve,
    [name]:value


  }
})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()

    const {name,image,category,price}=data

    if(name && image && category && price)
    {
      const fetchData=await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/uploadProduct`,{
        method:"POST",
        headers:{
          'content-type':"application/json",
  
        },
        body:JSON.stringify(data)
      })
      const fetchres=await fetchData.json()
      toast(fetchres.message)

      setData(()=>{
        return{
        name : "",
        category :"",
        image :"",
        price :"",
        description:"",
        }
      })
    }

    else{
      toast("Enter all required fields")
    }

   

   
  }

 const uploadImage= async(e)=>{
    const data=await ImageToBAse64(e.target.files[0])

setData((preve)=>{
  return{
    ...preve,
    image:data


  }
})
 }

  return (
    <div className='p-4' >


      <form action="" className='m-auto w-full max-w-md p-3 shadow flex flex-col bg-white 200' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type={'text'} name="name" className='bg-slate-200 p-1 my-1' onChange={handleOnChange} value={data.name} />


        <label htmlFor='category'>Category</label>
        <select className='bg-slate-200 p-1  my-1' name='category' onChange={handleOnChange}  >
          <option value={"sel"}>Select category</option>
          <option value={"fruits"} >Fruits</option>
          <option value={"vegetables"}>Vegetables</option>
          <option value={"icecream"}>Icecream</option>
          <option value={"dosa"}>Dosa</option>
          <option value={"pizza"}>Pizza</option>
          <option value={"rice"}>Rice</option>
          <option value={"paneer"}>Paneer</option>
          <option value={"soup"}>Soup</option>
         

         



        </select>

        <label htmlFor='image'>Image
        <div id='image' className="h-40 my-3 rounded w-full bg-slate-500 flex items-center justify-center">
          {
            data.image?  <img src={data.image} className='h-full'/> :<span className='text-5xl'> <BsFillCloudUploadFill /> </span>
          }
          
         
          <input type={'file'} accept='image/*' id='image'  onChange={uploadImage} className=''   />
        </div>
        </label>

        <label htmlFor='price' className='my-1'>Price</label>
        <input type={"text"} name='price' value={data.price} className='bg-slate-200 p-1 my-1' onChange={handleOnChange}  />

      <label htmlFor='description'>Description</label>
      <textarea rows={2} value={data.description} className='bg-slate-200 p-1 my-1 resize-none' name='description' onChange={handleOnChange} ></textarea>

      <button className='bg-slate-500 hover:bg-blue-500 text-white text-lg drop-shadow my-2'>Save</button>
      </form>
    </div>
  )
}

export default Newproduct