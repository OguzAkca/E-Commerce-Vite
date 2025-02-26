import React from 'react'
import ProductHeader from './Header'
import ProductTabs from './ProductTabs'
import BestsellerProducts from './BestSeller'

import CompanyLogos from '../../Markalar'

function ProductDetailPage() {
  return (
    <>
    <ProductHeader/>
    <ProductTabs/>
    <BestsellerProducts/>
    <CompanyLogos/>
    </>
  )
}

export default ProductDetailPage

