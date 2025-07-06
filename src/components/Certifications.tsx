
const Certifications = () => {
  const certifications = [
    "Responsive Web Design",
    "Salesforce Developer Virtual Internship",
    "Data Structures (Certified)"
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Certifications
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <h3 className="text-white font-medium">{cert}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
