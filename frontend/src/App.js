import  { 

  createBrowserRouter , 
  createRoutesFromElements , 
  Route , 
  Link, 
  Outlet , 
  RouterProvider

} from 'react-router-dom'

import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Orders from './pages/Orders.jsx'
import Signin from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'
import Profile from './pages/Profile.jsx'
import Admin from './admin/index.jsx'
function App() {
  function Root() {

    const menu = () => {
      var menu = document.querySelector('#menu') ; 
      
      menu.classList.toggle('hidden')


    }

    const admin = localStorage.getItem('admin')

   

    return (
      <>
      <header className='bg-gray-500'>
        <div className='container mx-auto p-3 flex items-center justify-between text-white'>
          <div>
            <img src="../img/logo.png" alt="logo" className='w-12' />
          </div>
          <div className='hidden md:flex space-x-4 '>
            <Link to='/' className='font-bold'>Home</Link>
            <Link to='/products' className='font-bold'>Products</Link>
            <Link to='/orders' className='font-bold'>Orders</Link>
            <Link to='/profile' className="ri-user-line text-xl border border-white px-1.5 "></Link>
              
            
          </div>
          <i className="ri-menu-line text-xl border border-white px-1.5 md:hidden " onClick={() => {menu()}}></i>
        </div>
      </header>
      <div className='container mx-auto'>
        <div id='menu' className='hidden border border-gray-300 p-4 flex flex-col items-center shadow-md mt-1  '>
            <Link to='/' className='font-bold border border-black p-2 my-2 w-40 flex justify-center'>Home</Link>
            <Link to='/orders' className='font-bold border border-black p-2 my-2 w-40 flex justify-center'>Orders</Link>
            <Link to='/profile' className="ri-user-line text-xl px-1.5 border border-black p-2 my-2 w-40 flex justify-center"></Link>
          
          
  
        </div>
       
      </div>
      <div><Outlet /></div>
      </>
    )
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element = {<Root/>} >
        <Route index element ={<Home />} />
        <Route path='/products/:productId' element ={<Products />} />
        <Route path='/orders' element ={<Orders />} />
        <Route path='/admin' element ={<Admin />} />
        <Route path='/signin' element ={<Signin />} />
        <Route path='/signup' element ={<Signup />} />
        <Route path='/profile' element ={<Profile />} />
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );

  
  
}

export default App;
