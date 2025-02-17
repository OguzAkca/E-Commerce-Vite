function CompanyLogos() {
    const logos = [
      {
        name: "Hooli",
        url: "/icons/marka-1.png",
      },
      {
        name: "Lyft",
        url: "/icons/marka-2.png",
      },
      {
        name: "SomeCompany",
        url: "/icons/marka-3.png",
      },
      {
        name: "Stripe",
        url: "/icons/marka-4.png",
      },
      {
        name: "AWS",
        url: "/icons/fa-brands-5.png",
      },
      {
        name: "Reddit",
        url: "/icons/marka-6.png",
      },
    ];
  
    return (
        <div className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-6">
              {logos.map((logo) => (
                <div key={logo.name} className="flex justify-center items-center">
                  <img
                    className="w-48 md:w-auto md:h-8 grayscale opacity-75 hover:opacity-100 transition-opacity duration-300"
                    src={logo.url}
                    alt={logo.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
  }
  
  export default CompanyLogos;