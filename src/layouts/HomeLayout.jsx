import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
const HomeLayout = ({children}) => {
  return (
    <div>
        <Header />
        <NavBar/>
        {children}
        <Footer />
    </div>
  )
}

export default HomeLayout