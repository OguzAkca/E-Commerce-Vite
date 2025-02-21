import React from 'react'
import Header from '../layout/Header/Header'
import { Page } from '../Slider/SliderUse'
import EditorsPicks from '../EditorsPick/EditorPick'
import ShopPage from '../ShopPage/ShopPage'
import Footer from '../layout/Footer'
import { useHistory } from 'react-router-dom'
import ProductDetailPage from './ProductDetail/ProductDetailPage'
import TeamPage from './TeamPage/TeamPage'

function HomePage() {


   


  return (
    <div className="container">
      <Header />
      <Page />
      <div className="relative z-20">
        <EditorsPicks />
      </div>
      <ShopPage/>
      <ProductDetailPage/>
      <TeamPage/>
      
    <Footer/>
    
  
    </div>
  )
}

export default HomePage