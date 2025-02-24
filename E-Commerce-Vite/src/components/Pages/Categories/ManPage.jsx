import React from 'react';
import { useParams } from 'react-router-dom';

const ManPage = () => {
  const { categoryName, categoryId } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Men's {categoryName}</h1>
      {/* Add your men's category content here */}
    </div>
  );
};

export default ManPage;