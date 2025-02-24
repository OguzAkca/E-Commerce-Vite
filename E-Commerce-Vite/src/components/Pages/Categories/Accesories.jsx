import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../layout/Header/Header';
import PCard from '../../Cards/PCard';
import Footer from '../../layout/Footer';

function AccessoriesPage() {
    const { categoryName, categoryId } = useParams();

    const accessories = [
      {
        id: 1,
        title: "Neckless",
        subtitle: "Neckless",
        price: "24.51",
        imageUrl: "/resimler/acce-card.png",
        colors: ['#FFD700', '#FF69B4', '#4169E1', '#32CD32']
      },
      {
        id: 2,
        title: "Earring",
        subtitle: "Woman Earring",
        price: "34.21",
        imageUrl: "/resimler/acce-card.png",
        colors: ['#87CEEB', '#DDA0DD', '#F0E68C']
      },
      {
        id: 3,
        title: "Neckless",
        subtitle: "Neckless",
        price: "49.99",
        imageUrl: "/resimler/acce-card.png",
        colors: ['#98FB98', '#DEB887', '#BA55D3']
      },
      {
        id: 4,
        title: "Earring",
        subtitle: "Woman Earring",
        price: "45.51",
        imageUrl: "/resimler/acce-card.png",
        colors: ['#FF6347', '#20B2AA', '#DAA520', '#FF69B4']
      },
      {
        id: 5,
        title: "Neckless",
        subtitle: "Neckless",
        price: "65.99",
        imageUrl: "/resimler/acce-card.png",
        colors: ['#FF4500', '#4682B4', '#32CD32', '#FFD700']
      },
      {
        id: 6,
        title: "Earring",
        subtitle: "Woman Earring",
        price: "58.48",
        imageUrl: "/resimler/acce-card.png",
        colors: ['#FF69B4', '#4169E1', '#32CD32', '#FFD700']
      },
      {
        id: 7,
        title: "Neckless",
        subtitle: "Neckless",
        price: "44.99",
        imageUrl: "/resimler/acce-card.png",
        colors: ['#DDA0DD', '#F0E68C', '#98FB98']
      },
      {
        id: 8,    
        title: "Earring",
        subtitle: "Woman Earring",
        price: "62.51",
        imageUrl: "/resimler/acce-card.png",
        colors: ['#FF6347', '#4682B4', '#FFD700', '#32CD32']
      },
  ]

    return (
      <div className="container mx-auto px-4 py-8">
        <Header/>
        <h1 className="text-3xl font-bold mb-6">Accessories - {categoryName}</h1>
        {/* Add your accessories category content here */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {accessories.map((product) => (
                <PCard   
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  colors={product.colors}
                />
              ))}
            </div>
            <Footer/>
      </div>
    );
}

export default AccessoriesPage;