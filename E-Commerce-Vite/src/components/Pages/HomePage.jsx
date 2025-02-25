import React from 'react'
import Header from '../layout/Header/Header'
import { Page } from '../Slider/SliderUse'
import EditorsPicks from '../EditorsPick/EditorPick'
import ShopPage from '../ShopPage/ShopPage'
import Footer from '../layout/Footer'
import ProductDetailPage from './ProductDetail/ProductDetailPage'
import TeamPage from './TeamPage/TeamPage'
import AboutUsHeader from './AboutUsPage/AboutHeader'
import AboutSecond from './AboutUsPage/AboutSecond'
import VideoSection from './AboutUsPage/VideoPart'
import WorkWithUs from './AboutUsPage/WorkUsPage'
import ProductCard from '../ProductCard'


function HomePage() {


   


  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <main className="flex-grow mt-[80px]">
        <div className="container mx-auto">
          <Page />
          <EditorsPicks />
          <ShopPage/>
          <ProductDetailPage/>
          <AboutUsHeader/>
          <AboutSecond/>
          <VideoSection/>
          <WorkWithUs/>
          <TeamPage/>
          <ProductCard/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage