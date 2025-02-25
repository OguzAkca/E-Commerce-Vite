import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../../layout/Header/Header'
import Footer from '../../../layout/Footer'
import { kidsProducts } from '../../../../Data'
import ProductTabs from '../../ProductDetail/ProductTabs'

function KidsProductDetail() {
  const { id } = useParams();
  const productId = id.replace('id:', '');
  
  const product = kidsProducts.find(p => p.id === parseInt(productId));

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
              <div className="md:flex-shrink-0">
                <img
                  className="h-96 w-full object-cover md:w-96"
                  src={product.imageUrl}
                  alt={product.title}
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Kids Collection
                </div>
                <h2 className="mt-2 text-2xl font-bold text-gray-900">{product.title}</h2>
                <p className="mt-4 text-xl text-gray-900">${product.price}</p>
                
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">Available Colors</h3>
                  <div className="mt-2 flex space-x-2">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 rounded-full border border-gray-200"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                
                <button className="mt-8 w-full bg-black text-white py-2 px-4 rounded hover:bg-blue-800">
                  Sepete Ekle
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </main>
      <ProductTabs />
      <Footer />
    </div>
  )
}

export default KidsProductDetail