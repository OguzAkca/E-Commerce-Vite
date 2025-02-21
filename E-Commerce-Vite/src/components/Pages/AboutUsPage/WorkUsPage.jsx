const WorkWithUs = () => {
    return (
      <div className="min-h-[600px]">
        <div className="grid md:grid-cols-2">
          {/* Left Column - Content */}
          <div className="bg-blue-600 px-8 py-16 md:px-16 flex flex-col justify-center">
            <div className="max-w-xl">
              <span className="text-white text-sm font-semibold tracking-wider uppercase">WORK WITH US</span>
  
              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">Now Let's grow Yours</h2>
  
              <p className="mt-6 text-white/90 text-lg">
                The gradual accumulation of information about atomic and small-scale behavior during the first quarter of
                the 20th
              </p>
  
              <button
                className="mt-8 px-8 py-3 border-2 border-white text-blue font-medium 
                hover:bg-white hover:text-blue-600 transition-colors"
              >
                Button
              </button>
            </div>
          </div>
  
          {/* Right Column - Image */}
          <div className="bg-gray-50">
            <img
              src="/resimler/wwu.png"
              alt="Woman in coral top"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    )
  }
  
  export default WorkWithUs
  
  