import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Countries from '../components/Countries'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div>
     
      <Countries />
      <Pagination/>
      
    </div>
  )
}

export default Home