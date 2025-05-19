import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='bg-red-50'>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout