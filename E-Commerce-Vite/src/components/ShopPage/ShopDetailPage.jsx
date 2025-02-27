import React from 'react'
import ShopHeader from './ShopHeader'
import ShopCards from './ShopCards'
import Pagination from './NextCardBtn'
import CompanyLogos from '../Markalar'
import Footer from '../layout/Footer'
import Header from '../layout/Header/Header'

function ShopDetailPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <main className="flex-grow mt-[80px]">
        
        <div className="container mx-auto">
          <ShopHeader />
          <div >
            <ShopCards />
          
            <CompanyLogos />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ShopDetailPage