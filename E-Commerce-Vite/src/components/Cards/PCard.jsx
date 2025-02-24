const PCard = ({ title, price, imageUrl, colors }) => (
    <div className="group cursor-pointer bg-white rounded-lg overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-sm font-medium text-gray-700">{title} </h3>
        <p className="text-sm text-gray-600">${price}</p>
        <div className="flex gap-1">
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full border border-gray-200"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        
        <button className="w-full bg-black text-white text-xs sm:text-sm hover:bg-blue-800">Satın Al</button>
      </div>
    </div>
  );

  export default PCard ;