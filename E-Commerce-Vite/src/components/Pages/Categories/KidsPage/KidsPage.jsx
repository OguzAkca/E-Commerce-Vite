import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Header from '../../../layout/Header/Header';
import Footer from '../../../layout/Footer';
import { kidsProducts } from '../../../../Data';

const ProductCardKids = ({ id, title, price, imageUrl, colors, categoryName, categoryId }) => {
  const history = useHistory();

  const handleProductClick = () => {
    history.push(`/shop/kids/${categoryName}/id/${id}`);
  };

  return (
    <div className="group cursor-pointer bg-white rounded-lg overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-sm font-medium text-gray-700">{title} </h3>
        <p className="text-sm text-gray-600">${price}</p>
        <div className="flex gap-1">
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full border border-gray-200"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        
        <button 
          className="w-full bg-black text-white py-2 text-xs sm:text-sm hover:bg-blue-800"
          onClick={handleProductClick}
        >
          Satın Al
        </button>
      </div>
    </div>
  );
};

function KidsPage() {
    const { categoryName, categoryId } = useParams();
    
    return (
      <div className="flex flex-col min-h-screen">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Header/>
        </div>
        <main className="flex-grow mt-[80px]">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">- {categoryName}</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {kidsProducts.map((product) => (
                <ProductCardKids    
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  colors={product.colors}
                  categoryName={categoryName}
                  categoryId={categoryId}
                />
              ))}
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    );
}

export default KidsPage;