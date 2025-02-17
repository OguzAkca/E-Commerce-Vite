import React from 'react';

const BestsellerProducts = () => {
  const products = [
    {
      id: 1,
      image: '/bestseller/bs-1.jpg',
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: 16.48,
      salePrice: 6.48
    },
    {
      id: 2,
      image: '/bestseller/bs-2.png',
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: 16.48,
      salePrice: 6.48
    },
    {
      id: 3,
      image: '/bestseller/bs-3.jpg',
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: 16.48,
      salePrice: 6.48
    },
    {
      id: 4,
      image: '/bestseller/bs-4.jpg',
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: 16.48,
      salePrice: 6.48
    },
    {
      id: 5,
      image: '/bestseller/bs-5.jpg',
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: 16.48,
      salePrice: 6.48
    },
    {
      id: 6,
      image: '/bestseller/bs-6.jpg',
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: 16.48,
      salePrice: 6.48
    },
    {
      id: 7,
      image: '/bestseller/bs-1.jpg',
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: 16.48,
      salePrice: 6.48
    },
    {
      id: 8,
      image: '/bestseller/bs-2.png',
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: 16.48,
      salePrice: 6.48
    }
  ];

  return (
    <div className="w-full px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-8">BESTSELLER PRODUCTS</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative mb-4 overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            <div className="text-center">
              <h3 className="font-bold mb-1">{product.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{product.department}</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                <span className="text-blue-600 font-semibold">${product.salePrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestsellerProducts;
