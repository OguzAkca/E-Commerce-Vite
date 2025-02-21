import React from 'react'
import Header from '../layout/Header/Header'
import { Page } from '../Slider/SliderUse'
import EditorsPicks from '../EditorsPick/EditorPick'
import ShopPage from '../ShopPage/ShopPage'
import Footer from '../layout/Footer'
import { useHistory } from 'react-router-dom'
import ProductDetailPage from './ProductDetail/ProductDetailPage'
import TeamPage from './TeamPage/TeamPage'
import AboutUsHeader from './AboutUsPage/AboutHeader'
import AboutSecond from './AboutUsPage/AboutSecond'
import VideoSection from './AboutUsPage/VideoPart'
import WorkWithUs from './AboutUsPage/WorkUsPage'


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
      <AboutUsHeader/>
      <AboutSecond/>
      <VideoSection/>
      <WorkWithUs/>
      <TeamPage/>
      
    <Footer/>
    
  
    </div>
  )
}

export default HomePage