import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default function Signup() {
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const [alert , setAlert] = useState('')

    
        
        

    

    const onSubmit = () => {

        if(username ==='' || password === '') {
            setAlert(<p className = 'text-red-700'>All fileds required</p>);
        }else{
            axios.post('http://localhost:8000/api/signup' , {
                username , password
            }).then((res) => {
                handleRes(res.data)
            }) 
        }
        
    }

    const handleRes = (data) =>  {
        
        
        const stateus = data[1] ; 
        if(stateus === true) {
          
            setAlert(<p className = 'text-green-500'>{ data[0] }</p>) ; 
            
            window.location.href = "/signin" ; 

        }else{
            setAlert(<p className = 'text-red-700'>{ data[0] }</p>) ; 
        }

    }


  return (
    <div className='container mx-auto flex justify-center'>
        <div  className='flex flex-col border border-gray-700 p-3 mt-9 rounded md:w-1/2 items-center w-full'>
            <h1 className='font-bold text-xl my-3'>Sign up your account</h1>
            <p>{alert}</p>
            <input  type="text" name="username" placeholder='Enter your username' className='w-full border border-gray-500 rounded pl-2 h-11 my-2 focus:outline-none' onChange= {(e) => {setUsername(e.target.value)}} />
            <input type="password" name="password" placeholder="Enter your password" className='w-full border border-gray-500 rounded pl-2 h-11 my-1 focus:outline-none' onChange= {(e) => {setPassword(e.target.value)}} />
            <p className='self-start my-3 font-medium capitalize'>already have account ? <Link className='text-blue-500' to='/signin'>Sign in</Link> </p>
            <button type='submit' onClick={onSubmit} className='w-full border border-gray-500 bg-gray-500 h-10 rounded mt-2 text-white font-bold hover:opacity-80 transition'>Sign up</button>
        </div>
      
    </div>
  )
}
