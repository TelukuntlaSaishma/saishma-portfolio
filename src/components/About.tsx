
const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Profile Summary</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Passionate Full Stack Developer skilled in React.js, JavaScript, and Python with practical experience 
              in CRM systems, scalable web apps, and deep learning. Known for strong problem-solving, teamwork, 
              and real-world impact through projects.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
              <h4 className="text-xl font-semibold mb-3 text-purple-400">Education</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-white">B.Tech in CSE (AI & ML)</h5>
                  <p className="text-gray-400">Jyothishmathi Institutions of Technology and Science</p>
                  <p className="text-sm text-gray-500">2021–2025 | CGPA: 7.2</p>
                </div>
                <div>
                  <h5 className="font-medium text-white">Higher Secondary</h5>
                  <p className="text-gray-400">Alphores Junior College</p>
                  <p className="text-sm text-gray-500">2019–2021 | CGPA: 85.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
