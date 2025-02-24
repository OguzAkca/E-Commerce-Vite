import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../ProductCard';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer';

const ProductCardKids = ({ title, price, imageUrl, colors }) => (
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
        
        <button className="w-full bg-black text-white text-xs sm:text-sm hover:bg-blue-800">Satın Al</button>
      </div>
    </div>
  );

function KidsPage() {
    const { categoryName, categoryId } = useParams();
    const kidsProducts = [
        {
          id: 1,
          title: "Kid's Pants",
          subtitle: "Pants",
          price: "24.51",
          imageUrl: "/resimler/kid-card.png",
          colors: ['#FFD700', '#FF69B4', '#4169E1', '#32CD32']
        },
        {
          id: 2,
          title: "Kid's Shirts",
          subtitle: "Shirts",
          price: "34.21",
          imageUrl: "/resimler/kid-card.png",
          colors: ['#87CEEB', '#DDA0DD', '#F0E68C']
        },
        {
          id: 3,
          title: "Kid's Pants",
          subtitle: "Pants",
          price: "49.99",
          imageUrl: "/resimler/kid-card.png",
          colors: ['#98FB98', '#DEB887', '#BA55D3']
        },
        {
          id: 4,
          title: "Kid's Shirts",
          subtitle: "Shirts",
          price: "45.51",
          imageUrl: "/resimler/kid-card.png",
          colors: ['#FF6347', '#20B2AA', '#DAA520', '#FF69B4']
        },
        {
          id: 5,
          title: "Kid's Pants",
          subtitle: "Pants",
          price: "65.99",
          imageUrl: "/resimler/kid-card.png",
          colors: ['#FF4500', '#4682B4', '#32CD32', '#FFD700']
        },
        {
          id: 6,
          title: "Kid's Shirts",
          subtitle: "Shirts",
          price: "58.48",
          imageUrl: "/resimler/kid-card.png",
          colors: ['#FF69B4', '#4169E1', '#32CD32', '#FFD700']
        },
        {
          id: 7,
          title: "Kid's Pants",
          subtitle: "Pants",
          price: "44.99",
          imageUrl: "/resimler/kid-card.png",
          colors: ['#DDA0DD', '#F0E68C', '#98FB98']
        },
        {
          id: 8,    
          title: "Kid's Shirts",
          subtitle: "Shirts",
          price: "62.51",
          imageUrl: "/resimler/kid-card.png",
          colors: ['#FF6347', '#4682B4', '#FFD700', '#32CD32']
        },
    ];

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
                  title={product.title}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  colors={product.colors}
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
