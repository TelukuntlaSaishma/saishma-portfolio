
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  const handleResumeClick = () => {
    // This would open the PDF resume
    console.log("Opening resume...");
  };

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectsClick = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        <div className="backdrop-blur-md bg-white/5 rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
            Telukuntla Saishma
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4 animate-fade-in">
            Full Stack Developer | AI/ML Enthusiast
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in">
            "Creating smarter web solutions using deep learning, scalable code, and real-world vision."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in">
            <Button 
              onClick={handleResumeClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              View Resume
            </Button>
            <Button 
              onClick={handleContactClick}
              variant="outline" 
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </Button>
            <Button 
              onClick={handleProjectsClick}
              variant="ghost" 
              className="text-gray-300 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              Explore Projects
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 animate-fade-in">
            <a 
              href="mailto:telukuntlasaishma@gmail.com" 
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
            <a 
              href="tel:+919346560390" 
              className="text-gray-400 hover:text-green-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Phone size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/saishma-telukuntla" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/TelukuntlaSaishma" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
