import React from 'react';

const CategoryCard = ({ title, imageUrl, isLarge = false }) => (
  <div className={`relative group cursor-pointer overflow-hidden bg-gray-100 ${
    isLarge ? 'h-full' : 'h-full'
  }`}>
    <img 
      src={imageUrl} 
      alt={title}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-20" />
    <div className="absolute bottom-[5%] left-[5%]">
      <button className="bg-white text-xs sm:text-sm py-1.5 sm:py-2 px-4 sm:px-8 font-medium hover:bg-gray-50 transition-colors">
        {title}
      </button>
    </div>
  </div>
);

const EditorsPicks = () => {
  const categories = [
    {
      id: 1,
      title: "MEN",
      imageUrl: "/resimler/man-card.jpg",
      isLarge: true
    },
    {
      id: 2,
      title: "WOMEN",
      imageUrl: "/resimler/woman-card.png",
      isLarge: false
    },
    {
      id: 3,
      title: "ACCESSORIES",
      imageUrl: "/resimler/acce-card.png",
      isLarge: false
    },
    {
      id: 4,
      title: "KIDS",
      imageUrl: "/resimler/kid-card.png",
      isLarge: false
    }
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold mb-2">EDITOR'S PICK</h1>
          <p className="text-gray-500 text-sm">Problems trying to resolve the conflict between</p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {/* Left side - Large Image */}
          <div className="h-[400px] sm:h-[500px] md:h-[600px]">
            <CategoryCard
              key={categories[0].id}
              title={categories[0].title}
              imageUrl={categories[0].imageUrl}
              isLarge={true}
            />
          </div>
          
          {/* Right side - 2x2 Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-8">
            {categories.slice(1).map((category) => (
              <div key={category.id} className="h-[180px] sm:h-[230px] md:h-[280px]">
                <CategoryCard
                  title={category.title}
                  imageUrl={category.imageUrl}
                  isLarge={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};



export default EditorsPicks;