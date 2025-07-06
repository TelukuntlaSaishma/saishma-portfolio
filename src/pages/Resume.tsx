import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
const Resume = () => {
  const handleDownloadResume = () => {
    // This would trigger download of the actual PDF resume
    console.log("Downloading resume...");
  };
  return <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Resume
            </h1>
            <Button onClick={handleDownloadResume} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
              <Download size={20} className="mr-2" />
              Download PDF
            </Button>
          </div>

          {/* Contact Information */}
          <Card className="backdrop-blur-md bg-white/5 border-white/10 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Telukuntla Saishma</CardTitle>
              <p className="text-center text-lg text-gray-300">Full Stack Developer | AI/ML Enthusiast</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-blue-400" />
                  <span className="text-sky-200">telukuntlasaishma@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-green-400" />
                  <span>+91 9346560390</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin size={18} className="text-blue-400" />
                  <span className="text-sky-200">linkedin.com/in/saishma-telukuntla</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Github size={18} className="text-purple-400" />
                  <span>github.com/TelukuntlaSaishma</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Summary */}
          <Card className="backdrop-blur-md bg-white/5 border-white/10 mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-blue-400">Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                Passionate Full Stack Developer skilled in React.js, JavaScript, and Python with practical experience 
                in CRM systems, scalable web apps, and deep learning. Known for strong problem-solving, teamwork, 
                and real-world impact through projects.
              </p>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="backdrop-blur-md bg-white/5 border-white/10 mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-blue-400">Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">B.Tech in Computer Science & Engineering (AI & ML)</h3>
                <p className="text-gray-300">Jyothishmathi Institutions of Technology and Science</p>
                <p className="text-gray-400">2021 – 2025 | CGPA: 7.2</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Higher Secondary Education</h3>
                <p className="text-gray-300">Alphores Junior College</p>
                <p className="text-gray-400">2019 – 2021 | CGPA: 85.0</p>
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="backdrop-blur-md bg-white/5 border-white/10 mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-blue-400">Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white">Salesforce Developer Intern</h3>
                <p className="text-purple-400 font-medium">Smart InternZ</p>
                <p className="text-gray-400 mb-2">8-week Virtual Internship</p>
                <ul className="space-y-1 text-gray-300">
                  <li>• Implemented CRM automation using Apex & Salesforce APIs</li>
                  <li>• Reduced manual data entry by 40%</li>
                  <li>• Improved reporting efficiency by 30%</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Event Organizer</h3>
                <p className="text-purple-400 font-medium">Techspartens Club</p>
                <p className="text-gray-400 mb-2">Club Leadership Role</p>
                <ul className="space-y-1 text-gray-300">
                  <li>• Led tech events and logistics coordination</li>
                  <li>• Managed speaker relations and scheduling</li>
                  <li>• Enhanced student engagement in tech activities</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="backdrop-blur-md bg-white/5 border-white/10 mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-blue-400">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Languages</h4>
                  <p className="text-gray-300">HTML, CSS, JavaScript, Python, Java, MySQL</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Frameworks</h4>
                  <p className="text-gray-300">React.js, TensorFlow</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Tools & Technologies</h4>
                  <p className="text-gray-300">Git, GitHub, REST APIs, Salesforce</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Soft Skills</h4>
                  <p className="text-gray-300">Teamwork, Problem-solving, Communication</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Projects */}
          <Card className="backdrop-blur-md bg-white/5 border-white/10 mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-blue-400">Key Projects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white">Hourly Bus Demand Prediction</h3>
                <p className="text-gray-300 mb-2">
                  Built deep learning model for hourly bus demand using synthetic smart-card data (Deep-GAN). 
                  Achieved 91% accuracy by solving class imbalance.
                </p>
                <p className="text-sm text-blue-300">Tech Stack: Python, Deep Learning, TensorFlow</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Furniture Catalog Website</h3>
                <p className="text-gray-300 mb-2">
                  Developed fully responsive React.js-based UI with intuitive navigation and sleek interface. 
                  Boosted engagement by 35% and session duration by 40%.
                </p>
                <p className="text-sm text-blue-300">Tech Stack: React.js, HTML, CSS, JavaScript</p>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="backdrop-blur-md bg-white/5 border-white/10 mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-blue-400">Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li>• Responsive Web Design</li>
                <li>• Salesforce Developer Virtual Internship</li>
                <li>• Data Structures (Certified)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
};
export default Resume;