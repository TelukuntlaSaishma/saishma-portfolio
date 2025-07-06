
const Experience = () => {
  const experiences = [
    {
      role: "Salesforce Developer Intern",
      company: "Smart InternZ",
      duration: "8-week virtual internship",
      achievements: [
        "Implemented CRM automation using Apex & Salesforce APIs",
        "Reduced manual data entry by 40%",
        "Improved reporting efficiency by 30%"
      ]
    },
    {
      role: "Event Organizer",
      company: "Techspartens Club",
      duration: "Club Leadership Role",
      achievements: [
        "Led tech events and logistics coordination",
        "Managed speaker relations and scheduling",
        "Enhanced student engagement in tech activities"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-blue-400 font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.duration}</span>
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
