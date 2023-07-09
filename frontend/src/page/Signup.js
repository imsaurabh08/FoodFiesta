import React, { useState } from 'react'
import loginSignupImage from '../assets/login-animation.gif'
import { Link } from 'react-router-dom'
import { useNavigate,Navigate } from 'react-router-dom'
import {toast} from 'react-hot-toast'

const Signup = () => {
const navigate=useNavigate();

  const [data, setdata] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
     
    }
  )

 const handleOnChange=(e)=>{
     const {name,value}=e.target
     setdata((preve)=>{
      return{
        ...preve,
        [name]:value
      }
     })
  }

  const handleSubmit=async(e)=>{
e.preventDefault()
const {firstName,email,password}=data
if(firstName && email && password )
{
  

    const fetchdata=await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/signup`,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(data)
})

   const dataresp=await fetchdata.json()
    
  toast(dataresp.message)
  // alert(dataresp.message)

  if(dataresp.alert)
  {
     navigate("/login")
  }
   
  
 
  }
else{
  toast("Please enter required fields")
}
  }

  return (
    <div className="">
      <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4 mt-0">


        <div className=" w-20 overflow -hidden rounded-full ">


          <img src={loginSignupImage} alt="" className="w-full " />
        </div>

        <form action="" className="w-full flex flex-col " onSubmit={handleSubmit}>
          <label htmlFor='firstname'>First Name</label>
          <input type={'text'} id="firstName" name="firstName" className='mt-1 mb-1 w-full bg-slate-300 px-2 py-1 rounded' value={data.firstName} onChange={handleOnChange}  />

          <label htmlFor='lastName'>Last Name</label>
          <input type={'text'} id="lastName" name="lastName" className='mt-1 mb-1 w-full bg-slate-300 px-2 py-1 rounded' value={data.lastName} onChange={handleOnChange}  />

          <label htmlFor='Email'>Email </label>
          <input type={'email'} id="email" name="email" className='mt-1 mb-1 w-full bg-slate-300 px-2 py-1 rounded' value={data.email} onChange={handleOnChange} />

          <label htmlFor='password'>Password</label>
          <input type={'password'} id="password" name="password" className='mt-1 mb-1 w-full bg-slate-300 px-2 py-1 rounded  '  value={data.password} onChange={handleOnChange} />

        
          <button className="w-full max-w-[150px]  m-auto bg-blue-500 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4" >Sign Up</button>
        </form>

        <p className='mt-2 '>Already have account ? <Link to={"/login"} className='text-red-500 underline
 '>Login</Link> </p>

      </div>
    </div>
  )
}

export default Signup