import React from 'react';
import { CountriesSection } from '../styled-components/GeneralComponents'

const Countries = () => {
  return (
    <CountriesSection>
      {/* Top part  */}
      <div id='top-section'>
        <div>
          <h3>View Countries</h3>
          <p>Page 1 of 5</p>
        </div>
        <select>
          <option value="">Select region</option>
        </select>
      </div>

      {/* List of countries */}
      <div id='countries'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, iure error! Nulla, soluta sint. Repellendus, id, necessitatibus voluptatum recusandae enim excepturi quisquam labore nam quam ad ea in explicabo aspernatur!
      </div>

      {/* Pagination  */}
      <div id='pagination'>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button">4</button>
        <button type="button">5</button>
      </div>
    </CountriesSection>
  )
}

export default Countries