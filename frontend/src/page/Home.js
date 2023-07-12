import React, { useEffect, useRef, useState } from 'react'
import bikelogo from "../assets/bike.png"
import HomeCard from '../component/HomeCard'
import { useSelector } from 'react-redux'
import CardFeature from '../component/CardFeature'
import { FcPrevious, FcNext } from 'react-icons/fc'
import Filter from '../component/Filter'
import AllProduct from '../component/AllProduct'

const Home = () => {
  const productData = useSelector((state) => state.product.productList)

  const homeProductCartList = productData.slice(25, 30)
  const homeProductCartListVegetables = productData.filter(el => el.category === "vegetables", [])
  const loadingArray = new Array(4).fill(null)
  const loadingArrayFeature = new Array(6).fill(null)

  const slideProductRef = useRef()
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200
  }

  const prevProduct = () => {
    slideProductRef.current.scrollLeft -= 200

  }

  const categoryList = [...new Set(productData.map(el => el.category))]


  //for filtering data by category
  const [dataFilter, setDataFilter] = useState([])
  useEffect(() => {
    setDataFilter(productData)

  }, [productData])
  const handleFilterProduct = (category) => {
    const filter = productData.filter(el => el.category.toLowerCase() === category.toLowerCase())
    setDataFilter(() => {
      return (
        [...filter]
      )

    })
  }

  const handleClick=()=>{
    const productListSection = document.getElementById('product-list');
    productListSection.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className='p-2 overflow-x-hidden md:p-4'>

      <div className='md:flex gap-2 py-2'>
        <div className="md:w-1/2 py-4">
          <div className='flex gap-2 bg-amber-400 w-36 px-2 items-center rounded-full'>
            <p className='text-sm text-white font-bold'>Bike Delivery</p>
            <img src={bikelogo} className='h-7'></img>
          </div>
          <h2 className='text-4xl md:text-6xl font-bold py-3' >Experience the swiftest   <span className='  font-bold text-blue-900 '>home delivery service available</span></h2>
          <p className='py-3 font-semibold'>
            Indulge in Culinary Delights: Explore an Exquisite Food Ecommerce Wonderland! Satisfy Your Cravings with a Bountiful Selection of Scrumptious Goodies. From Gourmet Ingredients to Mouthwatering Ready-to-Eat Meals, Our React App Elevates Your Gastronomic Journey. Unleash Your Inner Foodie and Experience Convenience, Quality, and Flavor like Never Before. Bon Appétit!
          </p>
          <button className='font-bold bg-red-500 text-yellow-50 px-4 py-2 rounded-md' onClick={handleClick}>Order Now</button>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-10 p-4 justify-center">
          {
            homeProductCartList[0] ?
              homeProductCartList.map(el => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    category={el.category}
                    price={el.price}

                  />
                )
              })
              :
              loadingArray.map((el, index) => {
                return (
                  <HomeCard
                    key={index}
                    loading={"Loading.."}
                  />
                )
              })
          }



        </div>



      </div>
      <div className=" ">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl">Fresh Vegetables</h2>

          <div className="ml-auto flex gap-2">
            <button onClick={prevProduct} className='bg-slate-300 hover:bg-slate-500 text-lg p-2'>
              <FcPrevious />
            </button>

            <button onClick={nextProduct} className='bg-slate-300 hover:bg-slate-500 text-lg p-2'>
              <FcNext />
            </button>
          </div>
        </div>

        <div className="flex overflow-scroll space-x-3 gap-8 p-4 scrollbar-none scroll-smooth transition-all" ref={slideProductRef}>
          {
            homeProductCartListVegetables[0] ?
              homeProductCartListVegetables.map(el => {
                return (
                  <CardFeature
                    key={el._id}
                    id={el._id}

                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                )
              })
              :
              loadingArrayFeature.map((el) => {
                return (
                  <CardFeature
                    loading={"Loading..."}
                  />
                )
              })
          }
        </div>



      </div>



      <AllProduct heading={"Our Product"} />

    </div>
  )
}

export default Home
