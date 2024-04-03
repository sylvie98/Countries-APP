import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-gray-300 flex justify-around h-32'>
      <div className='flex'>
      <img src="src/image/log.svg" alt="logo" className="w-12 h-12 md:w-16 md:h-16" />
              <p className='text-blue-500 text-2xl font-bold'>Logoipsum</p>
      </div>
      
              <p>Copyright &copy; 2024. all right reserved</p>
    </div>
    
  )
}

export default Footer