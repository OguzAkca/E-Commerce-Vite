import React from 'react'
import { useParams } from 'react-router-dom';
import PCard from '../../Cards/PCard';
import Header from '../../layout/Header/Header';

function WomanPage() {
    const { categoryName, categoryId } = useParams();

    const kidsProducts = [
        {
          id: 1,
          title: "Woman's Pants",
          subtitle: "Pants",
          price: "24.51",
          imageUrl: "/resimler/woman-card.png",
          colors: ['#FFD700', '#FF69B4', '#4169E1', '#32CD32']
        },
        {
          id: 2,
          title: "Woman's Shirts",
          subtitle: "Shirts",
          price: "34.21",
          imageUrl: "/resimler/woman-card.png",
          colors: ['#87CEEB', '#DDA0DD', '#F0E68C']
        },
        {
          id: 3,
          title: "Woman's Pants",
          subtitle: "Pants",
          price: "49.99",
          imageUrl: "/resimler/woman-card.png",
          colors: ['#98FB98', '#DEB887', '#BA55D3']
        },
        {
          id: 4,
          title: "Woman's Shirts",
          subtitle: "Shirts",
          price: "45.51",
          imageUrl: "/resimler/woman-card.png",
          colors: ['#FF6347', '#20B2AA', '#DAA520', '#FF69B4']
        },
        {
          id: 5,
          title: "Woman's Pants",
          subtitle: "Pants",
          price: "65.99",
          imageUrl: "/resimler/woman-card.png",
          colors: ['#FF4500', '#4682B4', '#32CD32', '#FFD700']
        },
        {
          id: 6,
          title: "Woman's Shirts",
          subtitle: "Shirts",
          price: "58.48",
          imageUrl: "/resimler/woman-card.png",
          colors: ['#FF69B4', '#4169E1', '#32CD32', '#FFD700']
        },
        {
          id: 7,
          title: "Woman's Pants",
          subtitle: "Pants",
          price: "44.99",
          imageUrl: "/resimler/woman-card.png",
          colors: ['#DDA0DD', '#F0E68C', '#98FB98']
        },
        {
          id: 8,    
          title: "Woman's Shirts",
          subtitle: "Shirts",
          price: "62.51",
          imageUrl: "/resimler/woman-card.png",
          colors: ['#FF6347', '#4682B4', '#FFD700', '#32CD32']
        },
    ]

    return (
      <div className="flex flex-col min-h-screen">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Header/>
        </div>
        <main className="flex-grow mt-[80px]"> 
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Women's {categoryName}</h1>
            {/* Add your women's category content here */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {kidsProducts.map((product) => (
                <PCard    
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
      </div>
    );
}
export default WomanPage