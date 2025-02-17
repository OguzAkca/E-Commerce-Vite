import React from 'react';

const ProductCard = ({ title, price, imageUrl, colors }) => (
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
    </div>
  </div>
);

const ShopCards = () => {
  const products = [
    {
      id: 1,
      title: "Graphic Designatata",
      subtitle: "English Department",
      price: "54.51",
      imageUrl: "/ShopCovers/cover-1.png",
      colors: ['#FFD700', '#FF69B4', '#4169E1', '#32CD32']
    },
    {
      id: 2,
      title: "Graphic Design",
      subtitle: "English Department",
      price: "34.21",
      imageUrl: "/ShopCovers/cover-2.png",
      colors: ['#87CEEB', '#DDA0DD', '#F0E68C']
    },
    {
      id: 3,
      title: "Graphic Design",
      subtitle: "English Department",
      price: "49.99",
      imageUrl: "/ShopCovers/cover-3.png",
      colors: ['#98FB98', '#DEB887', '#BA55D3']
    },
    {
      id: 4,
      title: "Graphic Design",
      subtitle: "English Department",
      price: "45.51",
      imageUrl: "/ShopCovers/cover-4.png",
      colors: ['#FF6347', '#20B2AA', '#DAA520', '#FF69B4']
    },
    {
      id: 5,
      title: "Graphic Design",
      subtitle: "English Department",
      price: "65.99",
      imageUrl: "/ShopCovers/cover-5.png",
      colors: ['#FF4500', '#4682B4', '#32CD32', '#FFD700']
    },
    {
      id: 6,
      title: "Graphic Design",
      subtitle: "English Department",
      price: "58.48",
      imageUrl: "/ShopCovers/cover-6.png",
      colors: ['#FF69B4', '#4169E1', '#32CD32', '#FFD700']
    },
    {
      id: 7,
      title: "Graphic Design",
      subtitle: "English Department",
      price: "44.99",
      imageUrl: "/ShopCovers/cover-7.png",
      colors: ['#DDA0DD', '#F0E68C', '#98FB98']
    },
    {
      id: 8,
      title: "Graphic Design",
      subtitle: "English Department",
      price: "62.51",
      imageUrl: "/ShopCovers/cover-8.png",
      colors: ['#FF6347', '#4682B4', '#FFD700', '#32CD32']
    },
    {
        id: 9,
        title: "Graphic Designatata",
        subtitle: "English Department",
        price: "54.51",
        imageUrl: "/ShopCovers/cover-1.png",
        colors: ['#FFD700', '#FF69B4', '#4169E1', '#32CD32']
      },
      {
        id: 10,
        title: "Graphic Design",
        subtitle: "English Department",
        price: "34.21",
        imageUrl: "/ShopCovers/cover-2.png",
        colors: ['#87CEEB', '#DDA0DD', '#F0E68C']
      },
      {
        id: 11,
        title: "Graphic Design",
        subtitle: "English Department",
        price: "49.99",
        imageUrl: "/ShopCovers/cover-3.png",
        colors: ['#98FB98', '#DEB887', '#BA55D3']
      },
      {
        id: 12,
        title: "Graphic Design",
        subtitle: "English Department",
        price: "45.51",
        imageUrl: "/ShopCovers/cover-4.png",
        colors: ['#FF6347', '#20B2AA', '#DAA520', '#FF69B4']
      },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        
        
        <div className="grid text-black grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
              colors={product.colors}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCards;