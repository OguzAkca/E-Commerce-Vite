import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/resimler/Shopping.jpg",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=600&width=1200",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=600&width=1200",
  },
]

export const Page = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    }
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }
  
    return (
      <main className="w-full h-screen overflow-hidden">
        <div className="relative w-full h-full">
          {/* Slides */}
          <div
            className="w-full h-full transition-transform duration-500 ease-out flex"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img src={slide.image || "/placeholder.svg"}  className="w-full h-full object-cover" />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-/60" />
                </div>
  
                {/* Content */}
                <div className="relative z-10 flex flex-col items-start gap-[20px] justify-center h-full text-center text-white px-4">
                    <h2 className="text-[35px]">Summer 2025</h2>
                    <h1 className="text-[65px]">New Collection</h1>

                  <p className="text-[30px] md:text-xl mb-8 max-w-xl w-61">We know how large objects will act,
                    but things on a small scale.
                  </p>
                  <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-200 font-semibold">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
  
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
  
          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </main>
    )
  }
  


