import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

function ProtectedLayouts() {
  return (
    <div className='app-layout'>
      <Navbar/>
      <div className="main-content-wrapper">
         <Sidebar/>
         <div className="page-content">
           <Outlet/>
         </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ProtectedLayouts
