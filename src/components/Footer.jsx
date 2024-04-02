import React from 'react'
import DesktopLogo from './icons/DesktopLogo'

const Footer = () => {
  return (
    <footer className='py-5 w-full flex bg-slate-200 items-center justify-center'>
      <div className='w-full max-w-screen-lg flex items-center px-6 justify-between'>
        <DesktopLogo />
        <p className='text-gray-500'>Copyright &copy; {new Date().getFullYear()}. All rights reserved - SheCanCODE Front-end Cohort #10</p>
      </div>
    </footer>
  )
}

export default Footer