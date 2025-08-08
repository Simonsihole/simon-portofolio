"use client"

import Link from "next/link"
import Image from "next/image"
import { Award, ExternalLink, Github, Linkedin, Mail } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function CertificationsPage() {
const certifications = [
{
  name: "Networking in Google Cloud Specialization",
  issuer: "Coursera Course Certificates",
  date: "Issued Mar 2023",
  credentialId: "4S673M8R9ASM",
  description: "Comprehensive training in Google Cloud networking concepts, implementation, and management.",
  link: "https://www.coursera.org/account/accomplishments/specialization/certificate/4S673M8R9ASM",
  logo: "/coursera-logo.png"
},
{
  name: "Google IT Support Specialization",
  issuer: "Coursera Course Certificates",
  date: "Issued Dec 2022",
  credentialId: "2PAV2XPK6XWE",
  description: "Complete IT support training covering troubleshooting, customer service, and system administration.",
  link: "https://www.coursera.org/account/accomplishments/specialization/certificate/2PAV2XPK6XWE",
  logo: "/coursera-logo.png"
},
{
  name: "Statistics Fundamentals with Python Track",
  issuer: "DataCamp",
  date: "Issued Jun 2022",
  credentialId: "#288,639",
  description: "Comprehensive statistics training using Python for data analysis and visualization.",
  link: "https://www.datacamp.com/statement-of-accomplishment/track/2a361bab93b142a5f6b15df121f6d4645d330668",
  logo: "/datacamp-logo.png"
},
{
  name: "Network Automation Engineering Fundamentals",
  issuer: "Coursera Course Certificates",
  date: "Issued Jun 2023",
  credentialId: "KETBUEDF3PC6",
  description: "Advanced training in network automation, scripting, and engineering principles.",
  link: "https://www.coursera.org/account/accomplishments/specialization/certificate/KETBUEDF3PC6",
  logo: "/coursera-logo.png"
},
]

return (
<div className="min-h-screen bg-gray-950 text-white relative overflow-x-hidden font-sans py-20">
  {/* Background gradient overlay */}
  <div className="fixed inset-0 z-0 opacity-30" style={{
    background: 'radial-gradient(circle at 20% 80%, rgba(0, 100, 255, 0.1), transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 200, 255, 0.1), transparent 50%)'
  }}></div>

  {/* Navigation (simplified for sub-pages) */}
  <motion.nav 
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="fixed top-0 w-full z-50 bg-gray-950/90 border-b border-blue-900"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/simonlogo.png"
              alt="Portfolio Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
          </Link>
        </motion.div>
        <div className="hidden md:flex space-x-8">
          {[
            { href: "/#projects", label: "Projects" },
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

  <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
        Certifications
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
      <p className="text-xl text-gray-300 mt-8 leading-relaxed">
        My professional certifications and completed courses.
      </p>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="grid md:grid-cols-2 gap-8"
    >
      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
          whileHover={{ y: -5 }}
        >
          <Card className="bg-gray-800 border border-blue-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-0">
              <div className="flex items-start space-x-4 mb-4">
                <motion.div 
                  className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-blue-300 font-bold text-sm">
                    {cert.issuer === "Coursera Course Certificates" ? "C" : "D"}
                  </div>
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">{cert.name}</h3>
                  <p className="text-blue-200 text-lg mb-1">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-1">{cert.date}</p>
                  <p className="text-gray-500 text-xs">Credential ID: {cert.credentialId}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">{cert.description}</p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  asChild
                  className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-medium px-6 py-3 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1 border-0"
                >
                  <Link href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Show Credential
                  </Link>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>

    {/* LinkedIn Section */}
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className="mt-20 text-center"
    >
      <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 border border-blue-700 rounded-3xl p-12 shadow-2xl backdrop-blur-sm">
        <div className="max-w-2xl mx-auto">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.7 }}
          >
            <motion.div 
              className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Linkedin className="h-10 w-10 text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              More Certifications Available
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-300 leading-relaxed">
              For a complete view of all my certifications, achievements, and professional development, 
              visit my LinkedIn profile where you can explore my full certification portfolio.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.9 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 border-0"
              >
                <Link 
                  href="https://www.linkedin.com/in/simon-sihole-773ab8179/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center"
                >
                  <Linkedin className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                  View Full Certifications on LinkedIn
                </Link>
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-2 text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.1 }}
            >
              <motion.div 
                className="w-2 h-2 bg-blue-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
              <span className="text-sm">Live Profile</span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-8 pt-8 border-t border-blue-700/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.3 }}
          >
            <p className="text-gray-400 text-sm">
              💡 <span className="text-blue-300 font-semibold">Pro Tip:</span> Connect with me on LinkedIn to stay updated with my latest achievements and professional growth!
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </main>

  {/* Footer */}
  <motion.footer 
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 1 }}
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
                className="p-2 text-gray-400 hover:text-white hover:bg-blue-900 rounded-full transition-all duration-300"
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
