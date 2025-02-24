import React from 'react'
import Header from '../../layout/Header/Header'
import ContactUs from './ContactComp'
import CompanyLogos from '../../Markalar'
import Footer from '../../layout/Footer'

function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <main className="flex-grow mt-[80px]">
        <div className="container mx-auto px-4 py-8">
          <ContactUs />
          <CompanyLogos />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ContactUsPage