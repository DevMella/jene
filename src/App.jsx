import React from 'react'
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Shop from './components/Shop/Shop'
import Products from './components/Products/Products'
import Sale from './components/Sale/Sale'
import Card from './components/Card/Card'
import Category from './components/Category/Category'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'
import Products1 from './components/Products1/Products1'

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Hero/>
      <Services/>
      <Shop/>
      <Products/>
      <Sale/>
      <Products1/>
      <Card/>
      <Category/>
      <Blog/>
      <Footer/>
      <Routes>
        {/* <Route path='login' element={<Login/>}/> */}
      </Routes>
    </Router>
    </>
  )
}


export default App
