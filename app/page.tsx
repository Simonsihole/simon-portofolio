"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Database, BarChart3, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      title: "Bitcoin_Predictor",
      description:
        "A full-stack application that forecasts future Bitcoin prices using an LSTM neural network. The backend is built with FastAPI and Python for model inference, while the frontend uses Next.js to visualize historical trends and predicted values interactively.",
      image: "/bitcoin-predictor.png?height=300&width=500",
      tech: ["Python", "FastAPI", "LSTM", "Next.js", "Pandas", "Matplotlib"],
      github: "https://github.com/Simonsihole/btc_predictor",
      live: "https://simon-portofolio-gvlo.vercel.app/",
    },
    {
      title: "Customer Segmentation Analysis",
      description:
        "Machine learning project using clustering algorithms to segment customers based on purchasing behavior and demographics for targeted marketing strategies.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Python", "Scikit-learn", "Matplotlib", "Jupyter"],
      github: "#",
      live: "#",
    },
    {
      title: "Academic Performance Predictor",
      description:
        "A predictive model analyzing student data to identify at-risk students and recommend interventions using various machine learning algorithms.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["R", "Machine Learning", "Shiny", "ggplot2"],
      github: "#",
      live: "#",
    },
  ]

  const skills = [
    { name: "Data Analysis", icon: BarChart3, description: "Python, R, SQL, Statistical Analysis, Data Mining" },
    { name: "Data Visualization", icon: Code, description: "Tableau, Power BI, Matplotlib, Seaborn, D3.js" },
    { name: "Database Management", icon: Database, description: "MySQL, PostgreSQL, MongoDB, Data Modeling" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="hover:text-purple-200 transition-colors backdrop-blur-sm">
                About
              </Link>
              <Link href="#projects" className="hover:text-purple-200 transition-colors backdrop-blur-sm">
                Projects
              </Link>
              <Link href="#skills" className="hover:text-purple-200 transition-colors backdrop-blur-sm">
                Skills
              </Link>
              <Link href="#contact" className="hover:text-purple-200 transition-colors backdrop-blur-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div
          className={`relative z-10 text-center max-w-4xl mx-auto px-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center shadow-2xl">
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="Profile"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Simon Bungaran Sihole
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">Data Enthusiast & IT Graduate</p>

          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
            <p className="text-lg text-gray-200 leading-relaxed">
              Recently graduated from Information Technology with a passion for transforming data into actionable
              insights. Eager to apply analytical skills and modern technologies to solve complex problems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="backdrop-blur-md bg-white/20 border border-white/30 text-white hover:bg-white/30 transition-all duration-300 group shadow-xl"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link href="https://drive.google.com/file/d/10wvc1JZ7zf0sWcxqI0oXyWu6mOQmfKmm/view?usp=drive_link" target="_blank" rel="noopener noreferrer" passHref legacyBehavior>
              <Button
                size="lg"
                className="backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 shadow-xl"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </Link>
          </div>

          <div className="flex justify-center space-x-6">
            <Link
              href="https://github.com/Simonsihole/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 shadow-xl"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/simon-sihole-773ab8179/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 shadow-xl"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:simonsihole@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 shadow-xl"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                I'm a recent Information Technology graduate with a deep passion for data analysis and insights. My
                academic journey has equipped me with strong analytical skills and a solid foundation in programming,
                databases, and statistical analysis. I'm excited to begin my career in the data field and contribute to
                data-driven decision making.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed mb-8">
                During my studies, I've worked on various projects involving data visualization, machine learning, and
                database management. I'm constantly learning new tools and techniques to stay current with the rapidly
                evolving data landscape.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Python", "SQL", "R", "Excel", "Power BI", "Tableau", "Machine Learning"].map((tech) => (
                  <Badge
                    key={tech}
                    className="backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 p-8 shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Workspace"
                  width={400}
                  height={400}
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group shadow-2xl"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                      <skill.icon className="h-8 w-8 text-purple-200 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{skill.name}</h3>
                  <p className="text-gray-200 leading-relaxed">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group overflow-hidden shadow-2xl"
              >
                <div className="aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 backdrop-blur-sm bg-white/5 border-b border-white/10"></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-200 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} className="backdrop-blur-md bg-white/10 border border-white/20 text-white">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      className="backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </Link>

                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      className="backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </Link>
                </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full mb-8"></div>

            <p className="text-xl text-gray-200 mb-12 leading-relaxed">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="backdrop-blur-md bg-white/20 border border-white/30 text-white hover:bg-white/30 transition-all duration-300 shadow-xl"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button
                size="lg"
                className="backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 shadow-xl"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 backdrop-blur-md bg-white/5 border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              © {new Date().getFullYear()} Simon Bungaran Sihole. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="https://github.com/Simonsihole/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-full text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/simon-sihole-773ab8179/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-full text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="mailto:simonsihole@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-full text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"
              >
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
