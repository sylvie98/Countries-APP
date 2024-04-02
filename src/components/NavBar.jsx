import React, { useState } from 'react';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <section> 
        <div className='absolute top-0 left-0 w-full flex justify-around p-10'>
          <div className="flex justify-around">
            <img src='src/image/log.svg'className="w-12 h-12 md:w-16 md:h-16" alt="logo" />
            <p className="text-blue-500 text-lg md:text-3xl font-extrabold hidden sm:block">Logoipsum</p>
          </div>
          <div className="block sm:hidden">
          <button className="text-white" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className={`text-white text-sm md:text-base flex gap-6 md:gap-12 ${showMenu ? 'block' : 'hidden'} sm:block`}>
          <li><a href=''>Countries</a></li>
        </div>
      </div>
   </section>
  );
};


export default NavBar
