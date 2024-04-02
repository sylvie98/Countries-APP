import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <section className="flex flex-col items-center text-white bg-[url('banner-background.jpg')]">
      <div className='mb-20 w-full max-w-screen-lg flex flex-col items-center px-6 gap-10'>
        <NavBar />
        <h1 className='text-4xl font-bold'>Country API App</h1>
        <p className='text-xl'>This is a simple app that allows you to search for countries and continents using the API.</p>
        <input type="text" name="search" id="search" placeholder='Search country by name' className='px-5 py-3 w-full md:w-1/2'/>
      </div>
    </section>
  )
}

export default Header