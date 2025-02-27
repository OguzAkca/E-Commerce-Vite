"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import { products, accessories, kidsProducts, manProducts, womanProducts } from "../../Data"
import { Link, useHistory } from "react-router-dom"

const allProducts = [...products, ...accessories, ...kidsProducts, ...manProducts, ...womanProducts]

const SearchComponent = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const searchRef = useRef(null)
  const inputRef = useRef(null)
  const history = useHistory()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isSearchOpen])

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen)
    if (!isSearchOpen) {
      setSearchQuery("")
      setSearchResults([])
    }
  }

  const handleSearch = (e) => {
    const query = e.target.value
    setSearchQuery(query)

    if (query.length > 2) {
      setIsLoading(true)
      // Simulate API call with setTimeout
      setTimeout(() => {
        const filteredResults = allProducts.filter(
          (product) =>
            product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.subtitle.toLowerCase().includes(query.toLowerCase()),
        )
        setSearchResults(filteredResults.slice(0, 5)) // Limit to 5 results
        setIsLoading(false)
      }, 300)
    } else {
      setSearchResults([])
    }
  }

  const handleProductClick = (product) => {
    setIsSearchOpen(false)
    // Determine the correct route based on the product type
    let route
    if (kidsProducts.some((p) => p.id === product.id)) {
      route = `/shop/kids/${product.subtitle}/id/${product.id}`
    } else if (accessories.some((p) => p.id === product.id)) {
      route = `/shop/accessories/${product.subtitle}/${product.id}`
    } else if (manProducts.some((p) => p.id === product.id)) {
      route = `/shop/men/${product.subtitle}/${product.id}`
    } else if (womanProducts.some((p) => p.id === product.id)) {
      route = `/shop/women/${product.subtitle}/${product.id}`
    } else {
      route = `/product/${product.id}`
    }
    history.push(route)
  }

  return (
    <div className="relative" ref={searchRef}>
      <button
        onClick={handleSearchToggle}
        className="focus:outline-none p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Search"
      >
        <Search className="w-5 h-5 text-gray-600" />
      </button>

      {isSearchOpen && (
        <div className="absolute right-0 top-full mt-2 w-screen max-w-md bg-white shadow-lg rounded-lg overflow-hidden z-50">
          <div className="p-4">
            <div className="flex items-center border-b border-gray-200 pb-2">
              <Search className="w-5 h-5 text-gray-400 mr-2" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search products, categories..."
                className="w-full outline-none text-gray-700"
                value={searchQuery}
                onChange={handleSearch}
              />
              <button onClick={handleSearchToggle} className="ml-2 text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 max-h-96 overflow-y-auto">
              {isLoading ? (
                <div className="flex justify-center py-4">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                </div>
              ) : searchQuery.length > 2 ? (
                <>
                  {searchResults.length > 0 ? (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Products ({searchResults.length})</h3>
                      <ul className="divide-y divide-gray-100">
                        {searchResults.map((product) => (
                          <li key={product.id} className="py-3">
                            <button
                              onClick={() => handleProductClick(product)}
                              className="flex items-center hover:bg-gray-50 p-2 rounded w-full text-left"
                            >
                              <img
                                src={product.imageUrl || "/placeholder.svg"}
                                alt={product.title}
                                className="w-12 h-12 object-cover rounded"
                              />
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">{product.title}</p>
                                <p className="text-sm text-gray-500">{product.subtitle}</p>
                                <p className="text-sm font-bold text-blue-600">${product.price}</p>
                              </div>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="py-4 text-center text-gray-500">No results found for "{searchQuery}"</div>
                  )}
                </>
              ) : searchQuery.length > 0 ? (
                <div className="py-4 text-center text-gray-500">Type at least 3 characters to search</div>
              ) : (
                <div className="py-2">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Popular Searches</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Graphic Design", "Necklace", "Kid's Pants", "Man's Shirts", "Woman's Pants"].map((term) => (
                      <button
                        key={term}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200"
                        onClick={() => setSearchQuery(term)}
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {searchResults.length > 0 && (
              <div className="mt-4 pt-3 border-t border-gray-100">
                <Link
                  to={`/search?q=${encodeURIComponent(searchQuery)}`}
                  className="text-blue-600 text-sm hover:underline"
                  onClick={() => setIsSearchOpen(false)}
                >
                  View all results for "{searchQuery}"
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchComponent