import TeamMember from "./TeamMember"


const TeamPage = () => {
    const teamMembers = [
      {
        name: "Gökhan Özdemir",
        image: "/resimler/gkhn.jpg",
        role : "Project Manager"
      },
      {
        name: "Oğuz Akca",
        image: "/resimler/ouz.jpeg",
        role : "Full Stack Developer",
      },
     
    ]
  
    return (
      <div className="py-12 px-4 sm:py-32">
        <div className="mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Team</h2>
            <p className="mt-4 text-sm leading-6 text-gray-600 max-w-xs mx-auto sm:text-lg sm:max-w-none">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian
              mechanics
            </p>
          </div>
  
          {/* Team Members Grid */}
          <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} name={member.name} image={member.image} role={member.role}/>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default TeamPage
  

