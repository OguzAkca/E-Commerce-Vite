function ShopHeader() {
    const categories = [
      {
        title: "CLOTHS",
        items: "5 Items",
        image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=500&h=500&fit=crop",
        bgColor: "bg-gray-600"
      },
      {
        title: "CLOTHS",
        items: "5 Items",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=500&fit=crop",
        bgColor: "bg-cyan-500"
      },
      {
        title: "CLOTHS",
        items: "5 Items",
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=500&fit=crop",
        bgColor: "bg-pink-300"
      },
      {
        title: "CLOTHS",
        items: "5 Items",
        image: "https://images.unsplash.com/photo-1523359346063-d879354c0ea5?w=500&h=500&fit=crop",
        bgColor: "bg-pink-200"
      },
      {
        title: "CLOTHS",
        items: "5 Items",
        image: "https://images.unsplash.com/photo-1520423465871-0866049020b7?w=500&h=500&fit=crop",
        bgColor: "bg-pink-400"
      },
    ];
  
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Shop</h1>
          <div className="flex items-center gap-2 text-gray-500">
            <span>Home</span>
            <span>/</span>
            <span className="text-gray-400">Shop</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {categories.map((category, index) => (
            <div key={index} className="relative group cursor-pointer overflow-hidden">
              <div className={`absolute inset-0 ${category.bgColor} opacity-20`}></div>
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-xl font-semibold">{category.title}</h3>
                <p className="text-sm mt-2">{category.items}</p>
              </div>
            </div>
          ))}
        </div>
  
        <div className="flex justify-between items-center">
          <p className="text-gray-600">Showing all 12 results</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Views:</span>
              <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
              <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
            </div>
            <select className="px-4 py-2 border rounded-md bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
              Filter
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ShopHeader;