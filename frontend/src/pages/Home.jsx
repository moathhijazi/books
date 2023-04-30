import React, { useEffect, useState } from 'react'
import Axios from 'axios' ; 
import { Link } from 'react-router-dom'

function Home() {
  
  const API = 'http://127.0.0.1:8000/api/' ;
  const [products , setProducts] = useState([]) ; 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(API).then((res) => {
    
      const allProducts = res.data 
  
      
      setProducts(allProducts)
      setLoading(false);
      
  
  
    })
  } , [])
  
 


  return (
    <div className='home-app'>
      <div className='p-3'>
        <h2 className='text-center mt-7 text-3xl font-medium '>Search you book</h2>
        <p className='text-center my-2 font-normal mb-20'>get your book easier</p>
        <div className="flex justify-center">
          <input type="text" name="search" placeholder='search' className='border border-gray-600 pl-2 w-2/3 placeholder:capitalize focus:outline-none ' />
          <button className='bg-gray-500 text-white w-10 h-10'>
            <i className="ri-search-line"></i>
          </button>
        </div>
      </div>
      <section className='p-6 '>
        <hr className='py-4'></hr>
        <h2 className='text-center font-bold text-2xl text-gray-600 mb-5'>Products</h2>
        
        <div className='flex flex-col items-center md:flex-row md:flex-wrap md:space-x-4 md:justify-center '>
          
          
        {loading ? (
        <div className="flex justify-center items-center h-80 p-10">
          <div className="w-10 h-10 border-2 border-gray-400 rounded-full animate-spin">o</div>
        </div>
      ) : (
        

        products.map( (val , key) => {
          return(
            <div key={key} className="card border border-gray-300 w-full md:w-80 rounded mt-3">
              <div className="card-top">
                <img src="img/logo.png" className='w-80 mx-auto' alt="product" />
                <hr />
              </div>
              <div className="card-body p-3 flex flex-col">
                <span className='font-bold text-lg text-gray-700'>{val.title}</span>
                <code className='font-bold text-lg text-gray-600'>{val.price}$ </code>
                <Link to={`products/${val.id}`} className='bg-gray-500 p-3 rounded mt-4 text-white hover:opacity-90 hover:translate-y-1 transition text-center'>See more</Link>
                
              </div>
            </div>
          )
        })
      )}
          
          
          
          
          
        </div>
      </section>
      <footer className='bg-black p-3 text-center text-white capitalize'>
        powered by moath hijazi
      </footer>
    </div>
  )
}

export default Home
