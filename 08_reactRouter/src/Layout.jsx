import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet/>        {/*outlet is used layout file as base between header and footer and it mainatain same things. header and footer same rahega but uske ander ki chiz change hoti rhegi  .agar header aur footer ke niche outlet hota toh same hi rhete sbkuch  */}
        <Footer/>
    </>
  )
}

export default Layout