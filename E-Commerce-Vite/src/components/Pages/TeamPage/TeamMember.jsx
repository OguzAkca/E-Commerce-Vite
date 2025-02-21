const TeamMember = ({ name, image, role }) => {
    return (
      <div className="flex items-center space-x-4">
        <img src={image || "/placeholder.svg"} alt={name} className="w-40 h-40 rounded-full object-cover" />
        <div className="flex flex-col">
          <h3 className="text-base font-medium text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    )
  }
  
  export default TeamMember