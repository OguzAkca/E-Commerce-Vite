import { Play } from "lucide-react"

const VideoSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
        {/* Video Thumbnail */}
        <img
          src="/resimler/aboutback.jpg"
          alt="Mountain landscape with lake reflection"
          className="w-full h-full object-cover"
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            onClick={() => console.log("Play video")}
            aria-label="Play video"
          >
            <Play className="w-8 h-8 text-white fill-current" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default VideoSection

