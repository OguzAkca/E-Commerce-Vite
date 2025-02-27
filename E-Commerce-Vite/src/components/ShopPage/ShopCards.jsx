
import { useEffect, useState } from 'react';
import { products, accessories, kidsProducts, manProducts, womanProducts }  from '../../Data';

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
    </div>
  </div>
);

const ShopDetailPage = () => {
  const [currentCategory, setCurrentCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const productsPerPage = 12;
  
  // Determine which product array to use based on the current category
  const getProductsByCategory = () => {
    switch(currentCategory) {
      case 'accessories':
        return accessories;
      case 'kids':
        return kidsProducts;
      case 'men':
        return manProducts;
      case 'women':
        return womanProducts;
      case 'all':
        // Combine all product arrays for the "All Products" category
        return [...products, ...accessories, ...kidsProducts, ...manProducts, ...womanProducts];
      default:
        return products;
    }
  };

  // Update products and pagination when category or page changes
  useEffect(() => {
    const allCategoryProducts = getProductsByCategory();
    const total = Math.ceil(allCategoryProducts.length / productsPerPage);
    setTotalPages(total);
    
    // Reset to page 1 when category changes
    if (currentPage > total) {
      setCurrentPage(1);
    }
    
    // Slice products for current page
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    setPaginatedProducts(allCategoryProducts.slice(startIndex, endIndex));
  }, [currentCategory, currentPage]);

  // Page change handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Next and Previous page handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Shop Collection</h1>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <button 
              className={`px-4 py-2 rounded-lg ${currentCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setCurrentCategory('all')}
            >
              All Products
            </button>
            <button 
              className={`px-4 py-2 rounded-lg ${currentCategory === 'products' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setCurrentCategory('products')}
            >
              Graphic Design
            </button>
            <button 
              className={`px-4 py-2 rounded-lg ${currentCategory === 'accessories' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setCurrentCategory('accessories')}
            >
              Accessories
            </button>
            <button 
              className={`px-4 py-2 rounded-lg ${currentCategory === 'kids' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setCurrentCategory('kids')}
            >
              Kids
            </button>
            <button 
              className={`px-4 py-2 rounded-lg ${currentCategory === 'men' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setCurrentCategory('men')}
            >
              Men
            </button>
            <button 
              className={`px-4 py-2 rounded-lg ${currentCategory === 'women' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setCurrentCategory('women')}
            >
              Women
            </button>
          </div>
        </div>
        
        <div className="grid text-black grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginatedProducts.map((product) => (
            <ProductCard
              key={`${product.id}-${product.title}`}
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
              colors={product.colors}
            />
          ))}
        </div>
        
        {/* Custom Pagination Component */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <button 
            className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" 
            disabled={currentPage === 1}
            onClick={handlePrevPage}
          >
            Prev
          </button>
          
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            // Show 5 page buttons at most
            if (
              pageNumber === 1 || 
              pageNumber === totalPages || 
              (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
            ) {
              return (
                <button 
                  key={pageNumber}
                  className={`px-4 py-2 border rounded-md ${
                    currentPage === pageNumber 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              );
            }
            // Add ellipsis
            if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
              return <span key={pageNumber} className="px-2">...</span>;
            }
            return null;
          })}
          
          <button 
            className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopDetailPage;