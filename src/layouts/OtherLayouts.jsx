import React from 'react'
import NavBar from '../components/NavBar'
import Pagination from '../components/Pagination'
import Footer from '../components/Footer'


const OtherLayouts = ({children}) => {
  return (
    <div>
      <NavBar />
      {children}
     <Pagination/>
      <Footer />
    </div>
  )
}

export default OtherLayouts