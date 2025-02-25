import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../layout/Header/Header';
import Footer from '../../../layout/Footer';
import { accessories } from '../../../../Data';
import { useHistory } from 'react-router-dom';

const ProductCardAccessories = ({ title, price, imageUrl, colors, categoryName, id }) => {

  const history = useHistory();
  
  const handleProductClick = () => {
    history.push(`/shop/accessories/${categoryName}/id/${id}`);
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
        <button className="w-full bg-black text-white text-xs sm:text-sm hover:bg-blue-800"
        onClick={handleProductClick}>Satın Al</button>
      </div>
    </div>
);
}

const AccessoriesPage = () => {
  const { categoryName, categoryId  } = useParams();


  
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Aksesuar Koleksiyonu</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {accessories.map((product) => (
                <ProductCardAccessories    
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
      </main>
      <Footer />
    </div>
  );
};

export default AccessoriesPage;