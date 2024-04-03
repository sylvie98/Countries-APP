import React from 'react'

const Pagination = () => {
  
  return (
    <div className='flex justify-center items-center gap-2 mt-10 mb-10 '>
      <button className='border border-gray-500 p-2'>&lt;</button>
      <button className='border border-gray-500 p-2'>1</button>
      <button className='border border-gray-500 p-2'>2</button>
      <button className='border border-gray-500 p-2'>3</button>
      <button className='border border-gray-500 p-2'>4</button>
      <button className='border border-gray-500 p-2'>5</button>
      <button className='border border-gray-500 p-2'>&gt;</button>
    </div>
  )
}

export default Pagination;