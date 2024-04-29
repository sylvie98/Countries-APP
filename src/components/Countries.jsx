import React, { useEffect, useState } from 'react';
import { getCountries } from '../apis/countries';
import { useSearchParams } from 'react-router-dom';
import Pagination from './Pagination';


const Countries = () => {
  const [listOfCountries, setListOfCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const [displayMode, setDisplayMode] = useState('cards'); 

  useEffect(() => {
    let pageNumber = Number(searchParams.get('page'));

    setLoading(true);
    
    getCountries(pageNumber)
    .then((data) => {
      setListOfCountries(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(()=> {
      setLoading(false);
    });
  }, []);

  const toggleDisplayMode = () => {
    setDisplayMode(displayMode === 'cards' ? 'table' : 'cards');
  };

  return (
    <div>
      <div id='top-section' className='flex justify-around mb-10 mt-10'>
        <div>
          <h3>View Countries</h3>
          <p>Page {Number(searchParams.get('page'))} of 5</p>
        </div>
        <button onClick={toggleDisplayMode}> Displayed on Table</button> 
        <select>
          <option value="">Select region</option>
        </select>
      </div>

      {displayMode === 'cards' ? (
        <div id='countries' className='flex flex-wrap w-full justify-between md:gap-1 items-center p-16'>
          {listOfCountries.length > 0 && listOfCountries.map((country, index) => (
            <div key={index} className='w-5/12 md:w-1/5 mb-5 text-gray-500'>
              <img src={country.flags.svg} alt={country.flags.alt} />
              <p>{country.name.common}</p>
              <p>{country.capital}</p>
              <p>{country.population}</p>
              <p>{country.continents}</p>
            </div>
          ))}
          {loading && <p>Loading...</p>}
          {!loading && listOfCountries.length === 0 && <p>No countries available</p>}
        </div>
      ) : (
        <table id='countries' className='w-full border  border-gray-300'>
          <thead className='border  border-gray-300'>
            <tr>
              <th className='border  border-gray-300'>Flag</th>
              <th className='border  border-gray-300'>Name</th>
              <th className='border  border-gray-300'>Capital</th>
              <th className='border b border-gray-300'>Population</th>
              <th className='border  border-gray-300'>Continent</th>
            </tr>
          </thead>
          <tbody>
            {listOfCountries.length > 0 && listOfCountries.map((country, index) => (
              <tr key={index}>
                <td className='border border-gray-300 p-5'><img src={country.flags.svg} alt={country.flags.alt} style={{ width: '90px'}} /></td>
                <td className='border  border-gray-300'>{country.name.common}</td>
                <td className='border  border-gray-300'>{country.capital}</td>
                <td className='border  border-gray-300'>{country.population}</td>
                <td className='border  border-gray-300'>{country.continents}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
  
      <Pagination searchParams={searchParams} setSearchParams={setSearchParams}/>
    </div>
  )
}

export default Countries;


