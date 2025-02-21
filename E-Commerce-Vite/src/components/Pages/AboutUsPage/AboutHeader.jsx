const AboutUsHeader = () => {
    return (
      <div className="relative overflow-hidden">
        {/* Decorative dots */}
        <div className="absolute top-20 right-4 w-2 h-2 bg-purple-400 rounded-full" />
        <div className="absolute bottom-20 right-8 w-2 h-2 bg-purple-400 rounded-full" />
  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="max-w-xl">
              <span className="text-sm font-semibold tracking-wider text-gray-900 uppercase">ABOUT COMPANY</span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-navy-900 tracking-tight">ABOUT US</h1>
              <p className="mt-4 text-lg text-gray-600">
                We know how large objects will act, but things on a small scale
              </p>
              <button className="mt-8 px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors">
                Get Quote Now
              </button>
            </div>
  
            {/* Right Column - Image */}
            <div className="relative">
              {/* Pink circle background */}
              <div className="absolute inset-0 translate-x-4 translate-y-4">
                <div className="absolute inset-0 bg-pink-100 rounded-full" />
              </div>
  
              {/* Main image */}
              <img
                src="/resimler/about.png"
                alt="Woman shopping with bags and credit card"
                className="relative z-10 w-full h-auto max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default AboutUsHeader
  
  