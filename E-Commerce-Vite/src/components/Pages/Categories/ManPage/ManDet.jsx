"use client"

import { useState, useEffect } from "react"
import {  manProducts } from "../../../../Data"
import { useParams } from "react-router-dom"
import { getUserInfo, isAuthenticated } from "../../LoginPage/Auth"

const ManDet = () => {
  const [activeTab, setActiveTab] = useState("description")
  const [reviewText, setReviewText] = useState("")
  const [reviews, setReviews] = useState([])
  const [expandedInfo, setExpandedInfo] = useState(null)

  const { id } = useParams()
  const productId = id.replace("id:", "")

  const product = manProducts.find((p) => p.id === Number.parseInt(productId))
  const userInfo = getUserInfo()

  // Load reviews from localStorage on component mount
  useEffect(() => {
    const storedReviews = localStorage.getItem(`product_reviews_${productId}`)
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews))
    }
  }, [productId])

  // Save reviews to localStorage whenever reviews change
  useEffect(() => {
    if (reviews.length > 0) {
      localStorage.setItem(`product_reviews_${productId}`, JSON.stringify(reviews))
    }
  }, [reviews, productId])

  // Submit a review
  const submitReview = (e) => {
    e.preventDefault()
    if (reviewText.trim()) {
      const newReview = {
        id: Date.now(),
        text: reviewText,
        author: userInfo?.name || "Anonymous User",
        date: new Date().toLocaleDateString(),
        userId: userInfo?.id || "guest",
      }

      const updatedReviews = [...reviews, newReview]
      setReviews(updatedReviews)
      localStorage.setItem(`product_reviews_${productId}`, JSON.stringify(updatedReviews))
      setReviewText("")
    }
  }

  // Toggle additional info accordion
  const toggleInfo = (index) => {
    setExpandedInfo(expandedInfo === index ? null : index)
  }

  const tabs = [
    { id: "description", label: "Description" },
    { id: "additional", label: "Additional Information" },
    { id: "reviews", label: `Reviews (${reviews.length})` },
  ]

  const additionalInfoItems = [
    {
      title: "Product Specifications",
      content: "The fabric is 100% cotton, breathable and comfortable for kids of all ages.",
    },
    {
      title: "Care Instructions",
      content: "Machine washable at 30°C. Do not bleach. Tumble dry on low heat.",
    },
    {
      title: "Sizing Information",
      content: "This product runs true to size. Please refer to the size chart for detailed measurements.",
    },
  ]

  return (
    <div className="w-full">
        
      {/* Tabs Navigation */}
      <div className="border-b mb-4 md:mb-6">
        
        <div className="flex gap-4 md:gap-8 px-4 md:px-0 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`pb-2 md:pb-4 px-1 text-sm md:text-base ${
                activeTab === tab.id ? "border-b-2 border-black text-black" : "text-gray-500"
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
              src={product?.imageUrl || "/resimler/pembe.jpg"}
              alt={product?.title || "Product Image"}
              className="w-full h-full object-cover rounded-lg shadow-xl bg-white"
            />
            {activeTab === "description" && (
              <div className="absolute top-0 right-0 bg-white py-1 px-3 rounded-bl-lg rounded-tr-lg shadow">
                <span className="text-sm font-medium">100% Cotton</span>
              </div>
            )}
            <p className="text-sm text-gray-600 mt-2">${product?.price}</p>
            <button className="mt-8 w-full bg-black text-white py-2 px-4 rounded hover:bg-blue-800">
                  Sepete Ekle
                </button>
          </div>
        </div>
            
        {/* Content */}
        <div className="w-full">
          <div className="mb-6 md:hidden">
            <div className="relative">
              <img
                src={product?.imageUrl || "/resimler/pembe.jpg"}
                alt={product?.title || "Product Image"}
                className="w-full rounded-lg"
              />
              {activeTab === "description" && (
                <div className="absolute top-0 right-0 bg-white py-1 px-3 rounded-bl-lg rounded-tr-lg shadow">
                  <span className="text-sm font-medium">100% Cotton</span>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6 px-4 md:px-0">
            {/* Description Tab Content */}
            {activeTab === "description" && (
              <div className="space-y-3 w-full">
                <h3 className="font-bold text-lg md:text-xl w-full">{product?.title}</h3>
                <div className="space-y-4 w-full">
                  <p className="text-sm md:text-base text-gray-600 w-full">
                    {product?.content ||
                      "This premium kids clothing item is made with 100% cotton material, ensuring maximum comfort and breathability for active children. The fabric is soft against the skin and durable enough to withstand frequent washing and daily wear."}
                  </p>
                  <p className="text-sm md:text-base text-gray-600">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door
                    ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                  </p>
                </div>
              </div>
            )}

            {/* Additional Information Tab Content */}
            {activeTab === "additional" && (
              <div className="space-y-4 w-full">
                <h3 className="font-bold text-lg md:text-xl w-full">Additional Information</h3>
                <div className="divide-y border-y">
                  {additionalInfoItems.map((item, index) => (
                    <div key={index} className="py-3">
                      <button
                        className="flex justify-between items-center w-full text-left font-medium"
                        onClick={() => toggleInfo(index)}
                      >
                        {item.title}
                        <span className="text-xl">{expandedInfo === index ? "−" : "+"}</span>
                      </button>
                      {expandedInfo === index && <div className="mt-2 text-sm text-gray-600">{item.content}</div>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews Tab Content */}
            {activeTab === "reviews" && (
              <div className="space-y-6 w-full">
                <h3 className="font-bold text-lg md:text-xl w-full">Customer Reviews</h3>

                {/* Reviews list */}
                {reviews.length > 0 ? (
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <div key={review.id} className="border p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{review.author}</span>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <p className="text-sm">{review.text}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
                )}

                {/* Login/Review Form */}
                <div className="mt-6 border-t pt-4">
                  {isAuthenticated() ? (
                    <form onSubmit={submitReview} className="space-y-4">
                      <div>
                        <label htmlFor="review" className="block mb-2 font-medium">
                          Write a Review as {userInfo?.name || "User"}
                        </label>
                        <textarea
                          id="review"
                          rows="4"
                          className="w-full p-2 border rounded-lg"
                          value={reviewText}
                          onChange={(e) => setReviewText(e.target.value)}
                          placeholder="Share your thoughts about this product..."
                          required
                        />
                      </div>
                      <button type="submit" className="bg-black text-white py-2 px-4 rounded-lg hover:bg-blue-800">
                        Submit Review
                      </button>
                    </form>
                  ) : (
                    <div className="text-center space-y-3">
                      <p>You must be logged in to post a review.</p>
                      <a
                        href="/login" // Adjust this to your login page route
                        className="inline-block bg-black text-white py-2 px-4 rounded-lg hover:bg-blue-800"
                      >
                        Login to Review
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManDet

