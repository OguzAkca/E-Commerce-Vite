import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../layout/Header/Header';
import PCard from '../../Cards/PCard';
import Footer from '../../layout/Footer';
import { accessories } from '../../../Data';

function AccessoriesPage() {
    const { categoryName, categoryId } = useParams();

    

    return (
      <div className="container mx-auto px-4 py-8">
        <Header/>
        <h1 className="text-3xl font-bold mb-6">Accessories - {categoryName}</h1>
        {/* Add your accessories category content here */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {accessories.map((product) => (
                <PCard   
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  colors={product.colors}
                />
              ))}
            </div>
            <Footer/>
      </div>
    );
}

export default AccessoriesPage;