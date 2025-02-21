const StatCard = ({ value, label }) => {
    return (
      <div className="text-left">
        <div className="text-5xl font-bold text-navy-900 mb-2">{value}</div>
        <p className="text-gray-600 text-sm">{label}</p>
      </div>
    )
  }
  
  export default StatCard