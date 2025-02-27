import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../../layout/Header/Header'
import Footer from '../../../layout/Footer'
import { manProducts } from '../../../../Data'
import ManDet from './ManDet'



function ManProductDetail() {
  const { id } = useParams();
  const productId = id.replace('id:', '');
  
  const product = manProducts.find(p => p.id === parseInt(productId));

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Header />
        </div>
        <main className="flex-grow mt-[80px]">
          <div className="container mx-auto px-4 py-8">
            <h1>Product not found</h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <main className="flex-grow mt-[80px]">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">   
             
            <ManDet    />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default ManProductDetail