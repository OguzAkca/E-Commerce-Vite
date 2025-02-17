function ContactUs() {
    const locations = [
      {
        city: "Paris",
        address: "5067 Thom Yorke Cir.",
        postalCode: "75000 Paris",
        phone: "+331 235 235",
        fax: "+331 235 235"
      },
      {
        city: "New York",
        address: "8901 Marmora Road, San Jose,",
        postalCode: "95008 Paris",
        phone: "+331 235 235",
        fax: "+331 235 235"
      },
      {
        city: "Berlin",
        address: "4540 Parker Rd.",
        postalCode: "75000 Paris",
        phone: "+331 235 235",
        fax: "+331 235 235"
      },
      {
        city: "London",
        address: "5611 M. Gray St. Utica",
        postalCode: "75000 Paris",
        phone: "+331 235 235",
        fax: "+331 235 235"
      }
    ];
  
    return (
      <div className="w-full min-h-screen relative ">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900 to-transparent opacity-90"></div>
        </div>
  
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-6 py-4 ">CONTACT US</h1>
              <p className="text-gray-200 mb-8">
                Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: <br />
                Newtonian mechanics
              </p>
              <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors">
                CONTACT US
              </button>
            </div>
  
            {/* Right Column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {locations.map((location, index) => (
                <div key={index} className="text-white">
                  <h3 className="text-xl font-semibold mb-4">{location.city}</h3>
                  <div className="space-y-2">
                    <p>{location.address}</p>
                    <p>{location.postalCode}</p>
                    <p>Phone: {location.phone}</p>
                    <p>Fax: {location.fax}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ContactUs;