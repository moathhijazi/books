import { React,  useState }  from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios' ; 

export default function Signin() {

  const [username , setUsername] = useState('')
  const [password , setPassword] = useState('')
  const [alert , setAlert] = useState('')


  const onSubmit = () => {
    if(username === null || password === null) {
      setAlert(<p className='text-red-700'>All fileds required!</p>)
    }else{
      Axios.post('http://localhost:8000/api/signin' , {
        username , password
      }).then((res) => {

          handleRes(res.data);

      })
      
    }
  }

  const handleRes = (data) => {
    if(data[1] === true) {
      setAlert(<p className='text-green-700'>Welcome!</p>)
      const user = data[0] ; 

      localStorage.setItem('id' , user['id']) ; 
      localStorage.setItem('username' , user['username']) ; 
      localStorage.setItem('admin' , user['admin']) ; 
      console.log('Login as ' + localStorage.getItem('username') + 'success!');

      window.location.href = "/" ; 
      
    }else{
      setAlert(<p className='text-red-700'>Invalid username or password!</p>)
    }
  }

  return (
    <div className='container mx-auto flex justify-center'>
        <div className='flex flex-col border border-gray-700 p-3 mt-9 rounded md:w-1/2 items-center w-full'>
          <p>{ alert }</p>
            <h1 className='font-bold text-xl my-3'>Sign in your account</h1>
            <input type="text" name="username" placeholder={'Enter your username'} className='w-full border border-gray-500 rounded pl-2 h-11 my-2 focus:outline-none' onChange = { (e) => {setUsername(e.target.value)} } />
            <input type="password" name="password" placeholder="Enter your password" className='w-full border border-gray-500 rounded pl-2 h-11 my-1 focus:outline-none' onChange = { (e) => {setPassword(e.target.value)} } />
            <p className='self-start my-3 font-medium capitalize'>create new account ? <Link className='text-blue-500' to='/signup'>Sign up</Link> </p>
            <button onClick = {onSubmit} className='w-full border border-gray-500 bg-gray-500 h-10 rounded mt-2 text-white font-bold hover:opacity-80 transition'>Sign in</button>
        </div>
      
    </div>
  )
}
