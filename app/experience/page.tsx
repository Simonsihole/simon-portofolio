"use client"

import Link from "next/link"
import Image from "next/image"
import { Briefcase, Users, Github, Linkedin, Mail } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

// Helper function to calculate duration between two dates
function calculateDuration(startDate: string, endDate?: string): string {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()
  
  const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
  
  if (totalMonths === 0) {
    return "Less than 1 mo"
  }
  
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  
  let result = ""
  if (years > 0) {
    result += `${years} yr${years > 1 ? 's' : ''}`
  }
  if (months > 0) {
    if (result) result += " "
    result += `${months} mo${months > 1 ? 's' : ''}`
  }
  
  return result
}

// Helper function to format date range display
function formatDateRange(startDate: string, endDate?: string): string {
  const start = new Date(startDate)
  const startFormatted = start.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  
  if (endDate) {
    const end = new Date(endDate)
    const endFormatted = end.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    return `${startFormatted} - ${endFormatted}`
  } else {
    return `${startFormatted} - Present`
  }
}

export default function ExperiencePage() {
const experiences = [
{
  title: "Founder",
  company: "Sipaling Data (Identity Building)",
  type: "Full-time",
  startDate: "2025-07-01", // July 2025
  endDate: undefined, // Current position
  location: "Indonesia · Remote",
  description: [
    "Providing data-driven insights to empower Indonesian UMKM in making informed business decisions.",
    "Developing custom analytics dashboards and reporting tools tailored to small business needs.",
    "Offering training and consultation to help UMKM owners understand and leverage their business data effectively.",
  ],
},
{
  title: "Commercial and Customer Relation Staff",
  company: "Pelindo Multi Terminal",
  type: "Internship",
  startDate: "2025-08-01", // Aug 2025
  endDate: undefined, // Current position
  location: "Kecamatan Medan Belawan, North Sumatra, Indonesia · On-site",
  description: [
    "Assisted in managing commercial operations and customer relations.",
    "Supported data analysis for customer feedback and service improvement initiatives.",
  ],
},
{
  title: "Data Analyst",
  company: "PT GITS Indonesia",
  type: "Apprenticeship",
  startDate: "2023-08-01", // Aug 2023
  endDate: "2024-01-31", // Jan 2024
  location: "Medan Kota, North Sumatra, Indonesia · Remote",
  description: [
    "Performed data cleaning, transformation, and analysis to extract actionable insights.",
    "Developed dashboards and reports using various data visualization tools.",
    "Collaborated with development teams to integrate data solutions.",
  ],
},
{
  title: "Chairman",
  company: "Youth Christmas Event, HKBP Immanuel",
  type: "Volunteer",
  startDate: "2023-01-01", // Assuming full year 2023
  endDate: "2023-12-31",
  location: "Indonesia",
  description: [
    "Planned budgets and coordinated with church stakeholders for funding and logistics.",
    "Managed internal and external collaborations to ensure smooth event execution.",
    "Led a committee that successfully organized an event attended by 200+ participants.",
  ],
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
        Experience
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
    </motion.div>

    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="mb-16"
    >
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-3xl font-bold mb-8 text-blue-300 flex items-center"
      >
        <Briefcase className="mr-3 h-7 w-7" /> Professional Experience
      </motion.h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => {
          const duration = calculateDuration(exp.startDate, exp.endDate)
          const dateRange = formatDateRange(exp.startDate, exp.endDate)
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-gray-800 border border-blue-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                  <p className="text-blue-200 text-lg mb-1">{exp.company} · {exp.type}</p>
                  <p className="text-gray-400 text-sm mb-3">
                    {dateRange} · {duration} · {exp.location}
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </motion.section>
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