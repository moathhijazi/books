import React from 'react'

export default function Profile() {
    const user = localStorage.getItem('id') ; 
    if(user === null) {
        window.location.href = "/signin" ; 
    }

    // const userId = localStorage.getItem('id');
    const username = localStorage.getItem('username');

    const singOut = () => {
      localStorage.removeItem('id');
      localStorage.removeItem('username');
      localStorage.removeItem('admin');
      window.location.href = "/signin" ;

    }
    
  return (
    <div className='flex justify-center p-3 ' >
     <div className='border border-gray-400 p-3 w-full rounded md:w-1/2 flex flex-col items-center mt-20'>
      <div className="border border-gray-300 rounded-full p-1 -mt-20 z-40 bg-white">
        <img src="img/logo.png" alt={username} className='w-40 rounded-full' />
      </div>
      <h1 className='font-medium text-xl '>@{username}</h1>
      <button className='bg-red-500 p-2 mt-3 font-meduim text-white border border-red-950 rounded transition hover:opacity-80' onClick={singOut} >Sign out</button>
     </div>
    </div>
  )
}
