import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, FileText, Laptop, Shield, Linkedin, Github, Mail, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnimatedCard = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="backdrop-blur-sm bg-opacity-10 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-orange-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-10">
          <motion.section 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300 tracking-tight drop-shadow-[0_5px_5px_rgba(255,165,0,0.3)]">Welcome to EventHorizon</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto backdrop-blur-sm bg-black bg-opacity-30 p-4 sm:p-6 rounded-lg shadow-lg">Your ultimate wiki for penetration testing and cybersecurity in the digital frontier</p>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto backdrop-blur-sm bg-black bg-opacity-30 p-4 sm:p-6 rounded-lg shadow-lg">Explore our comprehensive guides, methodologies, and tools for ethical hacking and security testing. Our collection of cheat sheets and checklists will save you time and enhance your security practices.</p>
            <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg transform transition hover:scale-105 hover:shadow-orange-500/50 animate-pulse">
              <Zap className="mr-2 h-5 w-5" />
              Explore the Wiki
            </Button>
          </motion.section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-24 perspective-1000">
          <AnimatedCard delay={0}>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-orange-500 border-2 hover:shadow-orange-500/50 hover:shadow-2xl transition-all duration-300 backdrop-filter backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300">
                  <FileText className="mr-2 h-8 w-8 text-orange-500" />
                  Security Talks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg">Curated list of security talks, videos, and conference archives.</p>
              </CardContent>
            </Card>
          </AnimatedCard>
          <AnimatedCard delay={0.1}>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-orange-500 border-2 hover:shadow-orange-500/50 hover:shadow-2xl transition-all duration-300 backdrop-filter backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300">
                  <Shield className="mr-2 h-8 w-8 text-orange-500 animate-pulse" />
                  Pentest Methodology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg">Comprehensive guides and checklists for structured cyber infiltration.</p>
              </CardContent>
            </Card>
          </AnimatedCard>
          <AnimatedCard delay={0.2}>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-orange-500 border-2 hover:shadow-orange-500/50 hover:shadow-2xl transition-all duration-300 backdrop-filter backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300">
                  <Laptop className="mr-2 h-8 w-8 text-orange-500" />
                  Learning Platforms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg">Curated list of virtual training grounds to hone your cyber skills.</p>
              </CardContent>
            </Card>
          </AnimatedCard>
          <AnimatedCard delay={0.3}>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-orange-500 border-2 hover:shadow-orange-500/50 hover:shadow-2xl transition-all duration-300 backdrop-filter backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300">
                  <Code className="mr-2 h-8 w-8 text-orange-500" />
                  Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg">Essential digital weapons and cheat codes for various cyber operations.</p>
              </CardContent>
            </Card>
          </AnimatedCard>
          <AnimatedCard delay={0.4}>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-orange-500 border-2 hover:shadow-orange-500/50 hover:shadow-2xl transition-all duration-300 backdrop-filter backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300">
                  <FileText className="mr-2 h-8 w-8 text-orange-500" />
                  Write-Ups
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg">Declassified reports and case studies from real-world cyber missions.</p>
              </CardContent>
            </Card>
          </AnimatedCard>
        </section>

        <motion.section 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 50 }}
        >
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300">Contribute to the Collective Knowledge</h2>
          <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">EventHorizon is an open-source wiki for ethical hacking and penetration testing, deployed on Vercel.</p>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">To contribute, make a pull request on GitHub with your changes or additions to any section.</p>
          <Button 
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white text-lg px-10 py-4 rounded-full shadow-lg transform transition hover:scale-105 hover:shadow-orange-500/50"
            onClick={() => window.open('https://github.com/bogdansys/alpacaexploit', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            Contribute on GitHub
          </Button>
        </motion.section>
      </main>

      <footer className="bg-gradient-to-t from-black to-gray-900 backdrop-filter backdrop-blur-lg py-8 sm:py-12 px-4 sm:px-6 lg:px-8 mt-16 border-t-2 border-orange-500">
        <div className="container mx-auto flex flex-col items-center">
          <div className="mb-8 flex items-center">
            <img src="/alpaca-logo.svg" alt="EventHorizon Logo" className="h-12 w-12 sm:h-16 sm:w-16 mr-3 animate-bounce" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300 font-bold text-2xl sm:text-3xl">EventHorizon</span>
          </div>
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-8">
              <li><a href="#" className="text-base sm:text-lg hover:text-orange-500 transition-colors text-gray-300 hover:underline">About</a></li>
              <li><a href="#" className="text-base sm:text-lg hover:text-orange-500 transition-colors text-gray-300 hover:underline">Contribute</a></li>
              <li><a href="#" className="text-base sm:text-lg hover:text-orange-500 transition-colors text-gray-300 hover:underline">Privacy Policy</a></li>
            </ul>
          </nav>
          <div className="flex space-x-6 mb-8">
            <a href="https://www.linkedin.com/in/mihai-iordache-676444187/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
              <Linkedin className="h-6 w-6 sm:h-8 sm:w-8 text-gray-300 hover:text-orange-500 transition-colors" />
            </a>
            <a href="https://github.com/bogdansys" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
              <Github className="h-6 w-6 sm:h-8 sm:w-8 text-gray-300 hover:text-orange-500 transition-colors" />
            </a>
            <a href="mailto:bogdanmihai453@gmail.com" className="transform hover:scale-110 transition-transform">
              <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-gray-300 hover:text-orange-500 transition-colors" />
            </a>
          </div>
        </div>
        <div className="text-center text-base sm:text-lg text-gray-400">
          © 2024 EventHorizon. Created by Mihai Iordache. All rights reserved. Hack responsibly.
        </div>
      </footer>
    </div>
  );
};

export default Index;
