
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "Hourly Bus Demand Prediction",
      description: "Built deep learning model for hourly bus demand using synthetic smart-card data (Deep-GAN). Achieved 91% accuracy by solving class imbalance.",
      techStack: ["Python", "Deep Learning", "TensorFlow"],
      github: "#",
      demo: "#"
    },
    {
      name: "Furniture Catalog Website",
      description: "Developed fully responsive React.js-based UI with intuitive navigation and sleek interface. Boosted engagement by 35% and session duration by 40%.",
      techStack: ["React.js", "HTML", "CSS", "JavaScript"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="backdrop-blur-md bg-white/5 border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl text-white">{project.name}</CardTitle>
                <CardDescription className="text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="border-gray-500 text-gray-300 hover:bg-gray-700">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-500 text-gray-300 hover:bg-gray-700">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
