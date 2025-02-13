export default function Badge({ children, className = "" }) {
    return <span className={`px-2 py-1 text-xs font-medium rounded-md ${className}`}>{children}</span>
  }
  
  