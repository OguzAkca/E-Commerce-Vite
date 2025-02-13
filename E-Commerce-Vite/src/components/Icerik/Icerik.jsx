import React from 'react';
import { ChevronDown } from 'lucide-react';

const Shop = () => {
  return (
    <div className="cursor-pointer  font-bold group">
      <span className="flex items-center text-black font-bold">Shop <ChevronDown className="w-5 h-5 ml-1" /></span>
      <div className="absolute left-0 hidden group-hover:block">
        <ul className="bg-black shadow-lg rounded-lg w-48 py-2">
          <h2 className="px-4 py-2 font-semibold text-white">Kadın</h2>
          <li className="px-4 py-2 hover:bg-gray-100 hover:text-black font-bold">
            Bags
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 hover:text-black font-bold">
            Belts
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 hover:text-black font-bold">
            Cosmetics
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 hover:text-black font-bold">
            Hats
          </li>
        </ul>
        <ul className="bg-white shadow-lg rounded-lg w-48 py-2 mt-2">
          <h2 className="px-4 py-2 font-semibold text-black">Erkek</h2>
          <li className="px-4 py-2 hover:bg-gray-100 hover:text-black font-bold">
            Bags
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 hover:text-black font-bold">
            Belts
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 hover:text-black font-bold">
            Cosmetics
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 hover:text-black font-bold">
            Hats
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Shop;
