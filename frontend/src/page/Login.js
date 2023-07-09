import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import loginSignupImage from '../assets/login-animation.gif'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginRedux } from '../redux/userSlice';
const Login = () => {

  
    const [data, setdata] = useState(
      {

       
        email: "",
        password: "",
        
      }
    )
    
    const navigate=useNavigate()

const userData=useSelector(state =>state)

const dispatch=useDispatch()
  
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
  const {email,password}=data
  if( email && password)
  {
   
    const fetchdata=await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/login`,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(data)
    })

   const dataresp=await fetchdata.json()
      toast(dataresp.message)

      if(dataresp.alert)
      {
        toast("Login successfully")
         dispatch(loginRedux(dataresp))
        setTimeout(() => {
          navigate("/")
        }, 1000);
       
      }
      else{
        toast("Invalid credential")

      }


      
   
   
  }
  else{
    alert("Please enter required fields")
  }
    }
    
   


  return (
    <div className=""  >
       
    <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4 mt-0">


      <div className=" w-20 overflow -hidden rounded-full ">


        <img src={loginSignupImage} alt="" className="w-full " />
      </div>

      <form action="" className="w-full flex flex-col " onSubmit={handleSubmit}>
      
        

        <label htmlFor='Email'>Email </label>
        <input type={'email'} id="email" name="email" className='mt-1 mb-1 w-full bg-slate-300 px-2 py-1 rounded' value={data.email} onChange={handleOnChange} />

        <label htmlFor='password'>Password</label>
        <input type={'password'} id="password" name="password" className='mt-1 mb-1 w-full bg-slate-300 px-2 py-1 rounded  '  value={data.password} onChange={handleOnChange} />

      
        <button className="w-full max-w-[150px]  m-auto bg-blue-500 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4" >Login</button>
      </form>

      <p className='mt-2 '>Don't have account ? <Link to={"/signup"} className='text-red-500 underline
'>Sign Up</Link> </p>

    </div>
  </div>
  )
}

export default Login