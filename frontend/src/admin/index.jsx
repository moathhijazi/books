import React, { useState } from 'react'
import Axios from 'axios';

export default function Index() {
    
    const [title , setTitle]  = useState('');
    const [price , setPrice]  = useState('');
    const [alert , setAlert]  = useState('');
    const [loading , setLoading]  = useState('Upload');
    const adminId = localStorage.getItem('id')

    const onSubmit = () => {
        if(title === '' || price === '') {
            setAlert( <div className='p-2 my-3 font-semibold text-red-600 text-center'>All fileds required</div>)
        }else{
            setLoading(<div className="flex justify-center items-center h-auto">
            <div className="w-10 h-10 border-2 border-gray-400 rounded-full animate-spin">o</div>
          </div>)

            Axios.post('http://localhost:8000/api/new/' , {

                title , price , adminId

            }).then((res) => {
                handleRes(res.data)
            })
        }
    }

    const handleRes = (data) => {
         clearOld()
        if(data[1] === true) {
            setAlert(<div className='p-2 my-3 font-semibold text-green-600 text-center'>{data[0]}</div>)
            setLoading('Upload')
        }else{
            setAlert(<div className='p-2 my-3 font-semibold text-red-600 text-center'>Failed to add product!</div>)
            setLoading('Upload')
        }
    }

    const clearOld = ()  => {

        setTitle('')
        setPrice('')
    }


  return (
    <div className='flex justify-center p-6'>
      <div className='w-full border border-gray-400 p-3 rounded  lg:w-1/2'>
        <h1 className='my-4 text-center text-xl font-semibold text-gray-700'>Upload new product</h1>
        
       <div>
        {alert}
       </div>
        <label htmlFor="title" className='text-lg'>
            <span>Title</span>
        </label>
        <div>
            <input type="text" id="title" placeholder='Enter product title' className='border border-gray-400 w-full h-11 pl-2 my-3 rounded focus:outline-none' onChange={ (e) => { setTitle(e.target.value) } } value={ title } />
        </div>
        <label htmlFor="price" className='text-lg'>
            <span>Price</span>
        </label>
        <div>
            <input type="text" id="price" placeholder='Enter product price' className='border border-gray-400 w-full h-11 pl-2 my-3 rounded focus:outline-none' onChange={ (e) => { setPrice(e.target.value) } } value={ price } />
        </div>
        <label htmlFor="price" className='text-lg'>
            <span>Admin id</span>
        </label>
        
            
        
        <div className='flex justify-between items-center'>

            <input type="text" name="id" id="" value={adminId}  className='border border-gray-400 w-1/3 h-11 pl-2 mt-3 rounded focus:outline-none' disabled/>
            <button className='w-1/3 border border-gray-400 h-11 rounded bg-gray-500 text-white hover:opacity-80 transition' onClick = {onSubmit} >{loading}</button>
        
        </div>
      </div>
    </div>
  )
}
