"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { products, accessories, kidsProducts, manProducts, womanProducts } from "../../Data"


const allProducts = [...products, ...accessories, ...kidsProducts, ...manProducts, ...womanProducts]

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: "all",
  })

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const queryParam = urlParams.get("q")

    if (queryParam) {
      setSearchQuery(queryParam)
      performSearch(queryParam)
    }
  }, [])

  const performSearch = (query) => {
    setIsLoading(true)

    setTimeout(() => {
      let filteredResults = allProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(query.toLowerCase()) ||
          product.subtitle.toLowerCase().includes(query.toLowerCase()),
      )

      if (filters.category !== "all") {
        filteredResults = filteredResults.filter(
          (product) => product.subtitle.toLowerCase() === filters.category.toLowerCase(),
        )
      }

      if (filters.priceRange !== "all") {
        const [min, max] = filters.priceRange.split("-").map(Number)
        filteredResults = filteredResults.filter((product) => {
          const price = Number.parseFloat(product.price)
          return price >= min && (max ? price <= max : true)
        })
      }

      setSearchResults(filteredResults)
      setIsLoading(false)

      const url = new URL(window.location)
      url.searchParams.set("q", query)
      window.history.pushState({}, "", url)
    }, 500)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    performSearch(searchQuery)
  }

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }))

    if (searchQuery) {
      performSearch(searchQuery)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-24">
      <h1 className="text-2xl font-bold mb-6">Search Products</h1>

      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex w-full max-w-2xl">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for products..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </form>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-64 bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold text-lg mb-4">Filters</h2>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Category</h3>
            <div className="space-y-2">
              {["all", "pants", "shirts", "necklace", "earring"].map((category) => (
                <label key={category} className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={filters.category === category}
                    onChange={() => handleFilterChange("category", category)}
                    className="mr-2"
                  />
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Price Range</h3>
            <div className="space-y-2">
              {[
                { label: "All Prices", value: "all" },
                { label: "Under $25", value: "0-25" },
                { label: "$25 - $50", value: "25-50" },
                { label: "$50 - $100", value: "50-100" },
                { label: "$100 & Above", value: "100-" },
              ].map((range) => (
                <label key={range.value} className="flex items-center">
                  <input
                    type="radio"
                    name="priceRange"
                    value={range.value}
                    checked={filters.priceRange === range.value}
                    onChange={() => handleFilterChange("priceRange", range.value)}
                    className="mr-2"
                  />
                  {range.label}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-grow">
          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : searchResults.length > 0 ? (
            <>
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-600">
                  {searchResults.length} results for "{searchQuery}"
                </p>
                <select
                  className="border rounded p-2"
                  onChange={(e) => {
                    // Sort functionality would go here
                    console.log("Sort by:", e.target.value)
                  }}
                >
                  <option value="relevance">Sort by: Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <a href={`/product/${product.id}`}>
                      <img
                        src={product.imageUrl || "/placeholder.svg"}
                        alt={product.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-medium text-gray-900">{product.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">{product.subtitle}</p>
                        <p className="font-bold text-blue-600">${product.price}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </>
          ) : searchQuery ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🔍</div>
              <h2 className="text-2xl font-medium mb-2">No results found</h2>
              <p className="text-gray-600">We couldn't find any products matching "{searchQuery}"</p>
              <div className="mt-6">
                <h3 className="font-medium mb-2">Suggestions:</h3>
                <ul className="text-gray-600 list-disc list-inside">
                  <li>Check your spelling</li>
                  <li>Try more general keywords</li>
                  <li>Try different keywords</li>
                  <li>Browse categories instead</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">Enter a search term to find products</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchPage

