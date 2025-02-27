import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/actions';
import { products } from '../../Data';

const ProductCard = ({ title, price, imageUrl, colors, subtitle, description }) => (
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
      <p className="text-xs text-gray-500">{subtitle}</p>
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

const ShopPage = () => {
  const dispatch = useDispatch();
  const { productList, fetchState } = useSelector((state) => state.product);
  
  // State for the filtered/sorted products
  const [displayedProducts, setDisplayedProducts] = useState(products);
  // State for the current filter option
  const [filterOption, setFilterOption] = useState('popularity');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Apply filtering/sorting whenever filterOption changes
  useEffect(() => {
    let sortedProducts = [...products];
    
    switch(filterOption) {
      case 'price-low-high':
        sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case 'price-high-low':
        sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case 'newest':
        // Assuming newest would be sorted by id in descending order
        sortedProducts.sort((a, b) => b.id - a.id);
        break;
      case 'popularity':
      default:
        // Keep the default order for popularity
        break;
    }
    
    setDisplayedProducts(sortedProducts);
  }, [filterOption]);

  // Handler for filter changes
  const handleFilterChange = (option) => {
    setFilterOption(option);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Pass the filterOption and handler to ShopHeader */}
      <ShopHeader 
        filterOption={filterOption} 
        onFilterChange={handleFilterChange} 
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-xl text-black font-semibold mb-2">Featured Products</h2>
          <h1 className="text-3xl text-black font-bold mb-4">BESTSELLER PRODUCTS</h1>
          <p className="text-gray-600">Problems trying to resolve the conflict between</p>
          {fetchState === "LOADING" && <p>Loading...</p>}
          {fetchState === "FETCHED" && (
            <div className="product-list">
              {productList.map((product) => (
                <div key={product.id} className="product-card">
                  <h3>{product.title}</h3>
                  <p>{product.price} $</p>
                </div>
              ))}
            </div>
          )}
          {fetchState === "ERROR" && <p>Failed to load products.</p>}
        </div>
        
        <div className="grid text-black grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              subtitle={product.subtitle}
              price={product.price}
              imageUrl={product.imageUrl}
              colors={product.colors}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;