import React from 'react'
import AboutUsHeader from './AboutHeader'
import AboutSecond from './AboutSecond'


import TeamPage from '../TeamPage/TeamPage'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer'
import CompanyLogos from '../../Markalar'
import VideoSection from './VideoPart'
import WorkWithUs from './WorkUsPage'

function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <main className="flex-grow mt-[80px]">
        <div className="container mx-auto">
          <AboutUsHeader />
          <AboutSecond />
          <VideoSection />
          <TeamPage/>
          <CompanyLogos/>
          <WorkWithUs/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AboutUsPage