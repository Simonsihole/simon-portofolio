"use client"

import { ContactForm } from "./contact-form"
import Link from "next/link"
import { Mail } from 'lucide-react'
import Image from "next/image"
import { Github, Linkedin } from 'lucide-react'
import { motion } from "framer-motion"

export default function ContactPage() {
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
        Get In Touch
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
      <p className="text-xl text-gray-300 mt-8 leading-relaxed">
        Have a project in mind or just want to say hello? Fill out the form below!
      </p>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="bg-gray-800 border border-blue-900 rounded-3xl p-8 md:p-12 shadow-xl max-w-2xl mx-auto"
    >
      <ContactForm />
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
