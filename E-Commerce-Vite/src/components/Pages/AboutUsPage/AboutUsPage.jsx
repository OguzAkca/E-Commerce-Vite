import React from 'react'
import AboutUsHeader from './AboutHeader'
import AboutSecond from './AboutSecond'
import VideoSection from './VideoPart'
import WorkWithUs from './WorkUsPage'
import TeamPage from '../TeamPage/TeamPage'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer'
import CompanyLogos from '../../Markalar'

function AboutUsPage() {
  return (
    <div>
        <Header/>
        <AboutUsHeader/>
      <AboutSecond/>
      <VideoSection/>
      
      <TeamPage/>
      <CompanyLogos/>
      <WorkWithUs/>
      <Footer/>
      
    </div>
  )
}

export default AboutUsPage