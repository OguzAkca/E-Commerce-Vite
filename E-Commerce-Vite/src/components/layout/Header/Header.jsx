import React, { useState } from 'react';
import { Menu, X, Search, ShoppingCart, User, Heart } from 'lucide-react';
import NotificationBar from './topSide';
import Slider from '../../Slider/Slider';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Shop', href: '/shop', hasDropdown: true },
    { title: 'About', href: '/about' },
    { title: 'Blog', href: '/blog' },
    { title: 'Contact', href: '/contact' },
    { title: 'Pages', href: '/pages' },
  ];
  const shopCategories = [
    {
      title: "Kadın",
      items: ["Bags", "Belts", "Cosmetic", "Hats"]
    },
    {
        title: "Erkek",
        items: ["Bags", "Belts", "Cosmetic", "Hats"]
    }
  ];

  const slides = [
    { url: '/resimler/ceket.jpg' },
    { url: '/resimler/ceket2.jpg' }
];

const containerStyles = {
    width: '500px',
    height: '280px',
    margin: '0 auto',
    marginTop: '10px',
};

  return (
    <>
      {/* Notification Bar */}
      <div className="fixed top-0 left-0 w-full z-40">
        <NotificationBar />
      </div>

      {/* Main Header */}
      <header className="w-full bg-white shadow fixed top-[40px] left-0 z-50"> {/* Adjusted for notification bar height */}
        {/* Main header */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="text-xl font-bold">Bandage</div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.title} className="relative">
                <a
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                  onMouseEnter={() => item.hasDropdown && setIsShopDropdownOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setIsShopDropdownOpen(false)}
                >
                  {item.title}
                </a>
                
                {/* Shop Dropdown */}
                {item.hasDropdown && isShopDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 w-[600px] bg-white shadow-lg rounded-b-lg py-6 z-50"
                    onMouseEnter={() => setIsShopDropdownOpen(true)}
                    onMouseLeave={() => setIsShopDropdownOpen(false)}
                  >
                    <div className="grid grid-cols-2 gap-6 px-6">
                      {shopCategories.map((category) => (
                        <div key={category.title} className="space-y-4">
                          <div 
                            className=" rounded-lg bg-cover bg-center"
                            style={{ backgroundImage: `url(${category.image})` }}
                          />
                          <div>
                            <h3 className="font-semibold text-gray-900">{category.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                          </div>
                          <ul className="space-y-2">
                            {category.items.map((item) => (
                              <li key={item}>
                                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

            {/* Desktop Right Section */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center text-blue-600 text-sm">
                <a href="/login" className="hover:text-blue-700">Login</a>
                <span className="mx-2">/</span>
                <a href="/register" className="hover:text-blue-700">Register</a>
              </div>
              <button className="focus:outline-none">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <button className="flex items-center focus:outline-none">
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                <span className="ml-1 text-xs">1</span>
              </button>
              <button className="flex items-center focus:outline-none">
                <Heart className="w-5 h-5 text-gray-600" />
                <span className="ml-1 text-xs">1</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-4">
              <User className="w-6 h-6" />
              <Search className="w-6 h-6" />
              <ShoppingCart className="w-6 h-6" />
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="px-4 py-2 bg-white shadow-lg">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="block py-2 text-gray-600 hover:text-gray-900"
                >
                  {item.title}
                </a>
              ))}
              <div className="py-2 border-t mt-2">
                <a href="/login" className="block py-2 text-blue-600">Login</a>
                <a href="/register" className="block py-2 text-blue-600">Register</a>
              </div>
            </nav>
          </div>
        )}
        <div className="slider" style={containerStyles}>
                <Slider slides={slides} />
            </div>
      </header>
    </>
  );
};

export default Header;


/*function Header() {

    const icons = {
        img: '/icon/search.png',
    }

    const slides = [
        { url: '/resimler/ceket.jpg' },
        { url: '/resimler/ceket2.jpg' }
    ];

    const containerStyles = {
        width: '500px',
        height: '280px',
        margin: '0 auto',
        marginTop: '10px',
    };

    return (
        <div className="header">
            <div className="w-full fixed top-0 left-0 bg-[#FAFAFA] z-50 shadow-md">
                <nav className="py-2 flex flex-col sm:flex-row items-center sm:items-start justify-between sm:justify-between">
                    <div className="sm:flex sm:items-center sm:space-x-4 sm:order-1">
                        <h2 className="text-2xl font-bold">Bandage</h2>
                    </div>
                    <ul className="flex flex-col text-center sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 sm:order-2">
                        <li className='list-none flex-1 text-center sm:inline-block'>
                            <a href="#" className="text-black font-bold sm:text-start">Home</a>
                        </li>
                        <li className='list-none flex-1 text-start sm:inline-block'>
                            <Shop />
                        </li>
                        <li className='list-none flex-1 text-start sm:inline-block'> 
                            <a href="#" className="text-black font-bold">About</a>
                        </li>
                        <li className='list-none flex-1 text-start sm:inline-block'>
                            <a href="#" className="text-black font-bold">Blog</a>
                        </li>
                        <li className='list-none flex-1 text-start sm:inline-block'>
                            <a href="#" className="text-black font-bold">Contacts</a>
                        </li>
                        <li className='list-none flex-1 text-start sm:inline-block'> 
                            <a href="#" className="text-black font-bold">Pages</a>
                        </li>
                    </ul>
                    <div className="sm:order-3 sm:ml-auto mt-2 sm:mt-0">
                        <a href="#" className='text-[#23A6F0]'>Log in/Register</a>
                    </div>
                    <div className="sm:order-4 mt-2 sm:mt-0">
                        <img src={icons.img} alt="icon" className='w-6 h-6'/>
                    </div>
                </nav>
            </div>
            <div className="slider" style={containerStyles}>
                <Slider slides={slides} />
            </div>
        </div>
    )
}

export default Header;*/
