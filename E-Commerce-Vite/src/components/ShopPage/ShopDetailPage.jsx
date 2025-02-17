import React from 'react'
import ShopHeader from './ShopHeader'
import ShopPage from './ShopPage'
import ShopCards from './ShopCards'
import Pagination from './NextCardBtn'
import CompanyLogos from '../Markalar'
import Footer from '../layout/Footer'
import Header from '../layout/Header/Header'

function ShopDetailPage() {
  return (
    <div>
        <Header/>
        <ShopHeader/>
        <ShopCards/>
        <Pagination/>
        <CompanyLogos/>
        <Footer/>
    </div>
  )
}

export default ShopDetailPage