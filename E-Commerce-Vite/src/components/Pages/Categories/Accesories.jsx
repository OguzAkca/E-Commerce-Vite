import React from 'react';
import { useParams } from 'react-router-dom';

function AccessoriesPage() {
    const { categoryName, categoryId } = useParams();

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Accessories - {categoryName}</h1>
        {/* Add your accessories category content here */}
      </div>
    );
}

export default AccessoriesPage;