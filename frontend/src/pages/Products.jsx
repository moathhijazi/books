import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
function Data(props) {
  const { productId } = useParams()
  const [product , setProduct] = useState('')
  const [loading, setLoading] = useState(true);

  const order = () => {

  }
  
  useEffect(() => {
    
    Axios.post(`http://localhost:8000/api/show/` , {

      params : productId 

    }).then((res) => {

      setProduct(res.data);
      setLoading(false);

    })

  }, [productId])

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="w-10 h-10 border-2 border-gray-400 rounded-full animate-spin">o</div>
        </div>
      ) : (
        <div className='flex justify-center p-3 ' >
          <div className='border border-gray-400 p-3 w-full rounded md:w-1/2 flex flex-col items-center mt-20'>
            <div className="border border-gray-300 rounded-full p-1 -mt-20 z-40 bg-white">
              <img src="../img/logo.png" alt={product.id} className='w-40 rounded-full' />
            </div>
            <h1 className='font-medium text-xl '>{product.title}</h1>
            <button className='bg-gray-500 p-2 mt-3 font-meduim text-white rounded transition hover:opacity-80' onClick={order} >Order now</button>
          </div>
          </div>
      )}
    </div>
  )
}

export default Data
