import React from 'react'
import { useParams } from 'react-router-dom';
import PCard from '../../Cards/PCard';
import Header from '../../layout/Header/Header';
import { womanProducts } from '../../../Data';

function WomanPage() {
    const { categoryName, categoryId } = useParams();

    

    return (
      <div className="flex flex-col min-h-screen">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Header/>
        </div>
        <main className="flex-grow mt-[80px]"> 
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Women's {categoryName}</h1>
            {/* Add your women's category content here */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {womanProducts.map((product) => (
                <PCard    
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  colors={product.colors}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    );
}
export default WomanPage