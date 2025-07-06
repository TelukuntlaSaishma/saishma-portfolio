
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="backdrop-blur-md bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400 min-h-[120px]"
                  required
                />
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:telukuntlasaishma@gmail.com"
                  className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  <Mail size={20} />
                  <span>telukuntlasaishma@gmail.com</span>
                </a>
                <a 
                  href="tel:+919346560390"
                  className="flex items-center space-x-4 text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  <Phone size={20} />
                  <span>+91 9346560390</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/saishma-telukuntla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn Profile</span>
                </a>
                <a 
                  href="https://github.com/TelukuntlaSaishma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  <Github size={20} />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
