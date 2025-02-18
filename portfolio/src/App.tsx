import React from 'react';
import { Github, Mail, Linkedin, Code2, Database, Brain, Layout, Terminal, Github as Git } from 'lucide-react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    title: "Python Development",
    description: "Pandas, Numpy, Matplotlib, Django, Scikit-learn, PyTorch, Keras",
    icon: Code2,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Database Management",
    description: "MySQL, MongoDB, Oracle SQL, Microsoft Excel, PowerBI",
    icon: Database,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Machine Learning",
    description: "Data Analysis, Model Development, Neural Networks",
    icon: Brain,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Front End Technologies",
    description: "HTML, CSS, GUI Development with Java Swing",
    icon: Layout,
    color: "from-orange-500 to-yellow-500"
  },
  {
    title: "System Programming",
    description: "Kernel Development Using C, Object Oriented Programming using Java",
    icon: Terminal,
    color: "from-red-500 to-pink-500"
  },
  {
    title: "Version Control",
    description: "Git, Active Debugging and Problem Solving",
    icon: Git,
    color: "from-indigo-500 to-purple-500"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-10" />
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80')] 
          bg-cover bg-center opacity-40"
        />
        
        <div className="relative z-20 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-4">Geetanshi Dewangan</h1>
            <p className="text-xl text-gray-300 mb-8">Python Developer & Machine Learning Enthusiast</p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              An enthusiastic sophomore at KIIT looking forward to internship opportunities, 
              specializing in Python development, Data analysis and Machine Learning.
            </p>
            
            <div className="flex justify-center gap-6">
              <a href="https://github.com/Geetanshi" 
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:geetanshidewangan04@gmail.com"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/Geetanshi"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Technical Skills
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-xl`} />
                <div className="relative bg-white/10 p-6 rounded-xl backdrop-blur-sm group-hover:bg-white/5 transition-colors">
                  <skill.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-gray-400">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;