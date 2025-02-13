export default function Button({ children, className = "", ...props }) {
    return (
      <button
        className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors 
        focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
  
  