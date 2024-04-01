import React from 'react'

const Countries = () => {
  return (
    <section className=' mt-20'>
      <div className='flex justify-around'>
        <div>
        <h2>View Countries</h2>
        <p>Page 1 of 5</p>
        </div>
        <select>
          <option value="Select Continent">Select Continent</option>
        </select>

      </div>
    </section>
  )
}

export default Countries