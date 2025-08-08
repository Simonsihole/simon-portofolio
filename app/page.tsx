"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Database, BarChart3 } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { motion } from "framer-motion"

export default function Portfolio() {
const [isVisible, setIsVisible] = useState(false)
const [nameTypingComplete, setNameTypingComplete] = useState(false)

useEffect(() => {
  setIsVisible(true)
}, [])

// Function for smooth scrolling to sections on the *same* page
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const projects = [
  {
    title: "Bitcoin_Predictor",
    description:
      "A full-stack application that forecasts future Bitcoin prices using an LSTM neural network. The backend is built with FastAPI and Python for model inference, while the frontend uses Next.js to visualize historical trends and predicted values interactively.",
    image: "/bitcoin-predictor.png",
    tech: ["Python", "FastAPI", "LSTM", "Next.js", "Pandas", "Matplotlib"],
    github: "https://github.com/Simonsihole/btc_predictor",
    live: "https://simon-lstmbtc.vercel.app/",
  },
  {
    title: "Data Visualization and Market Basket Analysis on Shopee Sales Data",
    description:
      "Performed Market Basket Analysis (MBA) to identify item associations in customer transactions for 'Png.by_nya' Shopee Online Shop, focusing on K-pop fan kits and polaroids. Derived insights on frequently purchased item combinations to support marketing and cross-selling strategies.",
    image: "/Pt_gits.png",
    tech: ["Python", "Scikit-learn", "Matplotlib", "Jupyter"],
    github: "#",
    live: "#",
  },
  {
    title: "Rekap2Excel",
    description:
      "A lightweight automation tool that reads rekapitulasi data from PDF or image files, extracts key information, and exports it into a clean, structured Excel file. Designed to save time and reduce manual entry for businesses and organizations, especially for recurring reports like attendance, sales, or inventory summaries.",
    image: "/placeholder.svg?height=300&width=500&text=Rekap2Excel",
    tech: ["Python", "PDF Processing", "Image Recognition", "Excel Automation", "Data Extraction"],
    github: "#",
    live: "#",
  },
]

const skills = [
  { name: "Data Analysis", icon: BarChart3, description: "Python, R, SQL, Statistical Analysis, Data Mining" },
  { name: "Data Visualization", icon: Code, description: "Tableau, Power BI, Matplotlib, Seaborn, D3.js" },
  { name: "Database Management", icon: Database, description: "MySQL, PostgreSQL, MongoDB, Data Modeling" },
]

const nameText = "Simon Bungaran Sihole"

return (
  <div className="min-h-screen bg-gray-950 text-white relative overflow-x-hidden font-sans">
    {/* Enhanced Background gradient overlay */}
    <div className="fixed inset-0 z-0 opacity-40" style={{
      background: 'radial-gradient(circle at 20% 80%, rgba(0, 100, 255, 0.15), transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 200, 255, 0.15), transparent 50%), radial-gradient(circle at 50% 50%, rgba(0, 150, 255, 0.1), transparent 50%)'
    }}></div>

    {/* Enhanced Navigation */}
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-gray-950/95 backdrop-blur-md border-b border-blue-900/50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-2 group mb-4 md:mb-0">
              <Image
                src="/simonlogo.png"
                alt="Portfolio Logo"
                width={32}
                height={32}
                className="rounded-full group-hover:scale-110 transition-transform duration-300"
              />
            </Link>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:space-x-8 md:flex-nowrap">
            {[
              { href: "/#projects", label: "Projects", onClick: (e: any) => { e.preventDefault(); scrollToSection('projects'); } },
              { href: "/experience", label: "Experience" },
              { href: "/certifications", label: "Certifications" },
              { href: "/awards", label: "Awards" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link 
                  href={item.href} 
                  onClick={item.onClick}
                  className="hover:text-blue-300 transition-colors duration-300 relative group"
                >
                  {item.label}
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-blue-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  ></motion.span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>

    {/* Enhanced Hero Section */}
    <section id="hero" className="min-h-screen flex items-center justify-center relative z-10 px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-white via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              <TypewriterEffect
                text={nameText}
                speed={70}
                delay={300}
                onTypingComplete={() => setNameTypingComplete(true)}
                className="text-5xl md:text-7xl font-extrabold"
              />
            </span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xl md:text-2xl text-blue-200 mb-8 leading-relaxed font-medium"
        >
          Hi!
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: nameTypingComplete ? 1 : 0, y: nameTypingComplete ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed"
        >
          I'm Simon Bungaran Sihole a passionate Data Enthusiast who loves transforming data into actionable insights, applying analytical skills and modern technologies to solve complex problems.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: nameTypingComplete ? 1 : 0, y: nameTypingComplete ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I'm passionate about blending creativity, strategy, and curiosity in everything I do. Music, especially guitar fingerstyle, lets me express emotions through melody and rhythm, while gaming sharpens my strategic thinking and problem-solving skills. I'm deeply interested in predictive programming, where data and algorithms work together to anticipate outcomes, and I keep my mind and body sharp through an active love for sports.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              className="relative overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white font-semibold px-8 py-4 rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 border-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-violet-500 before:via-purple-500 before:to-indigo-500 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100" 
              onClick={() => scrollToSection('projects')}
            >
              <span className="relative z-10">View My Work</span>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="https://drive.google.com/file/d/1fqU7gg4XDtdpdAZKqyez_qx7XYIlk2u-/view?usp=drive_link" target="_blank" rel="noopener noreferrer" passHref legacyBehavior>
              <Button variant="outline" size="lg" className="relative overflow-hidden bg-transparent border-2 border-gradient-to-r from-cyan-400 to-blue-500 text-cyan-300 font-semibold px-8 py-4 rounded-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 backdrop-blur-sm">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex justify-center space-x-6"
        >
          {[
            { href: "https://github.com/Simonsihole/", icon: Github },
            { href: "https://www.linkedin.com/in/simon-sihole-773ab8179/", icon: Linkedin },
            { href: "mailto:simonsihole@gmail.com", icon: Mail }
          ].map((social, index) => (
            <motion.div
              key={social.href}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.7 + index * 0.1 }}
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-400 hover:text-white hover:bg-blue-900 rounded-full transition-all duration-300 hover:shadow-lg"
              >
                <social.icon className="h-6 w-6" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>

    {/* Enhanced Skills Section */}
    <section id="skills" className="py-20 bg-gray-900 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-transparent border border-blue-900 hover:border-blue-700 hover:bg-gray-800 transition-all duration-300 group shadow-xl hover:shadow-2xl">
                <CardContent className="p-8 text-center">
                  <motion.div 
                    className="mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-full group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300">
                      <skill.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">{skill.name}</h3>
                  <p className="text-gray-300 leading-relaxed">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Enhanced Projects Section */}
    <section id="projects" className="py-20 bg-gray-950 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gray-800 border border-blue-900 hover:border-blue-700 transition-all duration-300 group overflow-hidden shadow-xl hover:shadow-2xl">
                <motion.div 
                  className="aspect-video relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} className="bg-blue-900 text-blue-200 border border-blue-800 hover:bg-blue-800 transition-colors duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="relative overflow-hidden bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-gray-200 font-medium px-4 py-2 rounded-lg shadow-lg hover:shadow-gray-500/25 transition-all duration-300 transform hover:-translate-y-1 border border-gray-600 hover:border-gray-500">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link href={project.live} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-medium px-4 py-2 rounded-lg shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-1 border-0">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Enhanced Footer */}
    <motion.footer 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-8 bg-gray-950 border-t border-blue-900 mt-20 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Simon Bungaran Sihole. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {[
              { href: "https://github.com/Simonsihole/", icon: Github },
              { href: "https://www.linkedin.com/in/simon-sihole-773ab8179/", icon: Linkedin },
              { href: "mailto:simonsihole@gmail.com", icon: Mail }
            ].map((social, index) => (
              <motion.div
                key={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white hover:bg-blue-900 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  </div>
)
}
