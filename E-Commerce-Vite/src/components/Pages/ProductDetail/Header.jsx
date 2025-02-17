import React from 'react';
import { ChevronLeft, ChevronRight, Heart, ShoppingCart, Eye } from 'lucide-react';

const ProductDisplay = () => {
  const [selectedColor, setSelectedColor] = React.useState('cyan');
  
  const colors = [
    { id: 'cyan', class: 'bg-cyan-400' },
    { id: 'green', class: 'bg-green-400' },
    { id: 'orange', class: 'bg-orange-400' },
    { id: 'navy', class: 'bg-navy-900' }
  ];

  const thumbnails = [
    '/resimler/sari-koltuk.jpg',
    '/resimler/sandalye.jpg',
  ];

  return (
    <div className="w-full max-w-md md:max-w-6xl  ">
      <div className="flex flex-col md:flex-row md:gap-8">
        {/* Product Image Section */}
        <div className="w-full md:w-1/2 relative mb-4 md:mb-0">
          <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 shadow-lg">
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 shadow-lg">
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
          <img 
            src="/resimler/sandalye.jpg" 
            alt="Floating Phone"
            className="w-full rounded-lg"
          />
          <div className="flex gap-2 sm:gap-4 mt-2 sm:mt-4">
            {thumbnails.map((thumb, index) => (
              <img 
                key={index}
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="w-full sm:w-1/2 px-4 sm:px-0">
          <h1 className="text-lg sm:text-2xl font-medium sm:font-semibold mb-1 sm:mb-2">Floating Phone</h1>
          
          <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-4">
            {[1, 2, 3, 4].map((star) => (
              <svg key={star} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs sm:text-sm text-gray-500">10 Reviews</span>
          </div>

          <div className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">$1,139.33</div>
          
          <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-4">
            <span className="text-sm sm:font-medium">Availability:</span>
            <span className="text-sm text-cyan-500">In Stock</span>
          </div>

          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
          </p>

          <div className="flex gap-2 sm:gap-4 mb-4 sm:mb-6">
            {colors.map((color) => (
              <button
                key={color.id}
                className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${color.class} ${
                  selectedColor === color.id ? 'ring-2 ring-offset-1 sm:ring-offset-2 ring-gray-400' : ''
                }`}
                onClick={() => setSelectedColor(color.id)}
              />
            ))}
          </div>

          <div className="flex justify-between sm:justify-start items-center sm:gap-4">
            <button className="bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded sm:rounded-lg text-sm sm:text-base">
              Select Options
            </button>
            <div className="flex gap-2">
              <button className="p-2 sm:p-3 sm:border sm:rounded-lg sm:hover:bg-gray-50">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button className="p-2 sm:p-3 sm:border sm:rounded-lg sm:hover:bg-gray-50">
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button className="p-2 sm:p-3 sm:border sm:rounded-lg sm:hover:bg-gray-50">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;