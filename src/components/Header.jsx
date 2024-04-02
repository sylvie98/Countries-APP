import React from 'react'
import NavBar from './NavBar'
const Header = () => {
  return (
    <section>
      <NavBar />
      
      <div className="bg-[url('https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg')] bg-no-repeat bg-cover h-[400px]">

    </div>
    <div className='absolute top-0 left-0 w-full flex justify-center items-center flex-col  mt-24  p-5'>
    <h1 className='text-white text-1xl font-bold '>Country API App</h1>
      <p className='text-white  text-2xl mt-6'>This is a simple app that allow you to search for countries and continents using the API</p>
      <input type='text'name='username' placeholder='search country by name' className='h-10 w-72 mt-6'/>
      </div>
    
    </section>
  )
}

export default Header