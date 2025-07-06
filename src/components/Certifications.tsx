
const Certifications = () => {
  const certifications = [
    {
      name: "Responsive Web Design",
      image: "/lovable-uploads/15638c33-66fa-431c-ac0f-0b0f40167e02.png",
      issuer: "freeCodeCamp",
      date: "April 30, 2025"
    },
    {
      name: "Salesforce Developer Virtual Internship",
      image: "/lovable-uploads/0fefbb45-2cfa-481b-8594-6e7e315e9128.png",
      issuer: "Smart InternZ",
      date: "February 02, 2024"
    },
    {
      name: "Data Structures using Python Programming",
      image: "/lovable-uploads/ac8b8832-5ff2-41f7-9726-f1a3c90d5a3c.png",
      issuer: "CodeTantra",
      date: "December 18, 2024"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 group"
            >
              <div className="aspect-[4/3] mb-4 overflow-hidden rounded-lg border border-white/10">
                <img 
                  src={cert.image} 
                  alt={cert.name}
                  className="w-full h-full object-contain bg-white/5 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className="text-white font-semibold text-lg mb-2">{cert.name}</h3>
                <p className="text-blue-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
