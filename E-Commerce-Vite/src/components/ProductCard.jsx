import { Clock, Users, Bookmark } from "lucide-react"
import Badge from "./Badge"
import Button from "./Button"
import { products } from "../Data";


function ProductCard() {
  return (
    <div
      className="bg-white rounded-xl shadow-sm overflow-hidden mx-auto
                    w-full max-w-[300px] sm:max-w-sm"
    >
      {/* Sale Badge and Image */}
      <div className="relative">
        <Badge className="absolute top-2 left-2 bg-red-500 text-white">Sale</Badge>
        <img
          src={products[2].imageUrl}
          alt="Product Image"
          className="w-full h-[150px] sm:h-48 object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        {/* Icons */}
        <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 mb-3 sm:mb-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
            <Users size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span>20+</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
            <Clock size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span>20 min</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
            <Bookmark size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span>Beginner</span>
          </div>
        </div>

        {/* Title and Description */}
        <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
          <h3 className="text-xs sm:text-sm text-gray-500">English Department</h3>
          <h2 className="text-base sm:text-lg font-semibold">Graphic Design</h2>
        </div>

        {/* Price and Colors */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="font-bold text-base sm:text-lg">$1.48</div>
          <div className="flex gap-1">
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500"></div>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-500"></div>
          </div>
        </div>

        {/* Learn More Button */}
        <button className="w-full bg-black text-white text-xs sm:text-sm hover:bg-gray-800">Learn More</button>
      </div>
    </div>
  )
}

export default ProductCard;