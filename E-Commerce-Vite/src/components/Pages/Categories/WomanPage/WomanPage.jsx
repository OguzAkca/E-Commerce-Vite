import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../layout/Header/Header';
import Footer from '../../../layout/Footer';
import { womanProducts } from '../../../../Data';

const ProductCardWoman = ({ title, price, imageUrl, colors }) => (
    <div className="group cursor-pointer bg-white rounded-lg overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-sm font-medium text-gray-700">{title}</h3>
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
        <button className="w-full bg-black text-white text-xs sm:text-sm hover:bg-blue-800">Satın Al</button>
      </div>
    </div>
);

const WomanPage = () => {
  const { categoryId } = useParams();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Kadın Koleksiyonu</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {womanProducts.map((product, index) => (
            <ProductCardWoman key={index} {...product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WomanPage;