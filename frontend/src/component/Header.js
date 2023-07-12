import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { logoutRedux } from '../redux/userSlice'
import { toast } from 'react-hot-toast'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const userData = useSelector((state) => state.user)
  // console.log(userData)

  const dispatch = useDispatch()

  const handleShowMenu = () => {
    setShowMenu(preve => !preve)
  }

  const handleLogout = () => {
    dispatch(logoutRedux())
    toast("Logged out successfully")
  }

  // console.log(process.env.REACT_APP_ADMIN_EMAIL)

  const cartItemNumber=useSelector((state)=>state.product.cartItem)
  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4 bg-white'>
      {/* desktop*/}

      <div className='flex items-center h-full justify-between'>
        <Link to={""}>





          <div className='h-14'>
            <img src={logo} alt="" className="h-full" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <nav className='flex gap-3 md:gap-6 text-base md:text-lg'>
            <Link to={""}>Home</Link>
            <Link to={"menu/648feb1f3fcaec18c312de65"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>

          <div className="text-2xl text-slate-600 relative cursor-pointer">
          <Link to={"cart"}>
            <FaShoppingCart />
            <div className="absolute -top-2 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center ">{cartItemNumber.length}</div>
            </Link>
          </div>


          <div className=" text-slate-600 " onClick={handleShowMenu}>
            <div className="text-2xl cursor-pointer">
              <FaUser />
  
            </div>
            {
              showMenu && ( <div className="absolute right-2 bg white py-2 px-1 shadow drop-shadow-md flex flex-col ">
                {
                  userData.email === process.env.REACT_APP_ADMIN_EMAIL &&  <Link to={"newproduct"} className='whitespace-nonwrap cursor-pointer text-center   text-black-800  bg-white border-2'>New product</Link>
                }


                {
                  userData.firstName != "" ? <p className='cursor-pointer text-black-800  bg-white' onClick={handleLogout}>Logout ({userData.firstName})</p> : <Link to={"login"} className='whitespace-nonwrap cursor-pointer text-black-800 '>Login </Link>
                }


              </div>)
            }
          </div>




        </div>

      </div>



      {/* mobile*/}

    </header>
  )
}

export default Header
