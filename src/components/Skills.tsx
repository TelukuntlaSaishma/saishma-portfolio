
const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["HTML", "CSS", "JavaScript", "Python", "Java", "MySQL"],
      color: "blue"
    },
    {
      category: "Frameworks",
      skills: ["React.js", "TensorFlow"],
      color: "purple"
    },
    {
      category: "Tools/Tech",
      skills: ["Git", "GitHub", "REST APIs", "Salesforce"],
      color: "green"
    },
    {
      category: "Soft Skills",
      skills: ["Teamwork", "Problem-solving", "Communication"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      purple: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      green: "bg-green-500/20 text-green-300 border-green-500/30",
      orange: "bg-orange-500/20 text-orange-300 border-orange-500/30"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className={`inline-block px-3 py-2 rounded-lg text-sm border ${getColorClasses(category.color)} transition-all duration-300 hover:scale-105`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
