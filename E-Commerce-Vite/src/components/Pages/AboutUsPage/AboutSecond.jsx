import StatCard from "./StatCard"


const AboutSecond = () => {
    const stats = [
      { value: "15K", label: "Happy Customers" },
      { value: "150K", label: "Monthly Visitors" },
      { value: "15", label: "Countries Worldwide" },
      { value: "100+", label: "Top Partners" },
    ]
  
    return (
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-16">
            <span className="text-red-500 text-sm block mb-4">Problems trying</span>
  
            <div className="grid md:grid-cols-2 gap-8">
              <h2 className="text-3xl font-bold text-navy-900">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              </h2>
  
              <p className="text-gray-600 mt-2 md:mt-0">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian
                mechanics
              </p>
            </div>
          </div>
  
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default AboutSecond
  

