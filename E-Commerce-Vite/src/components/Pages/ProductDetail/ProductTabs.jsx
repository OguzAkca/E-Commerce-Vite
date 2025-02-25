import React from 'react';
import { products } from '../../../Data';

const ProductTabs = ({title, price, imageUrl}) => {
  const [activeTab, setActiveTab] = React.useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'additional', label: 'Additional Information' },
    { id: 'reviews', label: 'Reviews (0)' }
  ];

  const accordionItems = [
    {
     
      content: [
        'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
        'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
        'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.'
      ]
    },
    {
     
      items: [
        'the quick fox jumps over the lazy dog',
        'the quick fox jumps over the lazy dog',
        'the quick fox jumps over the lazy dog',
        'the quick fox jumps over the lazy dog'
      ]
    },
    {
     
      items: [
        'the quick fox jumps over the lazy dog',
        'the quick fox jumps over the lazy dog',
        'the quick fox jumps over the lazy dog'
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Tabs Navigation */}
      <div className="border-b mb-4 md:mb-6">
        <div className="flex gap-4 md:gap-8 px-4 md:px-0 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`pb-2 md:pb-4 px-1 text-sm md:text-base ${
                activeTab === tab.id
                  ? 'border-b-2 border-black text-black'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image - Only visible on desktop */}
        <div className="hidden md:block bg-gray-100 rounded-lg p-8 flex items-center justify-center h-full">
          <div className="relative w-full aspect-square max-w-md">
            <img
              src={products[3].imageUrl}
              alt={title}
              className="w-full h-full object-cover rounded-lg shadow-xl bg-white"
            />
            <p className="text-sm text-gray-600">${price}</p>
          </div>
        </div>

        {/* Content */}
        <div className="w-full">
          <div className="mb-6 md:hidden">
            <img
              src="/resimler/pembe.jpg"
              alt="Product details"
              className="w-full rounded-lg"
            />
          </div>

          <div className="space-y-6 px-4 md:px-0">
            {accordionItems.map((item, index) => (
              <div key={index} className="space-y-3 w-full">
                <h3 className="font-bold text-lg md:text-xl w-full">{item.title}</h3>
                {item.content ? (
                  <div className="space-y-4 w-full">
                    {item.content.map((paragraph, i) => (
                      <p key={i} className="text-sm md:text-base text-gray-600 w-full">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-2 w-full">
                    {item.items?.map((listItem, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                        <svg
                          className="w-1.5 h-1.5 md:w-2 md:h-2 text-gray-400 flex-shrink-0 mt-1.5"
                          fill="currentColor"
                          viewBox="0 0 8 8"
                        >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span className="flex-1">{listItem}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;