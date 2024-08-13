import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Github, Coffee, Lightbulb, Bot } from 'lucide-react';

const Acknowledgments = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-orange-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Acknowledgments
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-300 mb-12 text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
        >
          Behind every great hacker, there's a support network that deserves recognition. Here's to the unsung heroes of AlpacaExploit!
        </motion.p>

        <motion.div 
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Card className="bg-gray-800 border-orange-500 border-2 hover:shadow-orange-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-orange-500">
                  <Heart className="mr-2 h-6 w-6 text-pink-500" />
                  Family Support Squad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">To Mom, Dad, and Sis - thanks for not calling the FBI when you saw all those command prompts open. Your support is the real 'zero-day exploit' in my heart.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-gray-800 border-orange-500 border-2 hover:shadow-orange-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-orange-500">
                  <Github className="mr-2 h-6 w-6 text-purple-500" />
                  Sindre Sorhus & Awesome Lists
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">We extend our gratitude to Sindre Sorhus and the Awesome Lists community for their comprehensive and invaluable resources. Their curated lists have significantly contributed to the development of this project.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-gray-800 border-orange-500 border-2 hover:shadow-orange-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-orange-500">
                  <Bot className="mr-2 h-6 w-6 text-blue-500" />
                  ChatGPT: The Silicon Sidekick
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">To ChatGPT - for being the rubber duck that talks back. Your responses are like Stack Overflow on steroids, minus the snarky comments.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-gray-800 border-orange-500 border-2 hover:shadow-orange-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-orange-500">
                  <Coffee className="mr-2 h-6 w-6 text-yellow-500" />
                  Caffeine: The Real MVP
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">To Coffee - for turning 'I have no idea what I'm doing' into 'I am a coding genius' at 2 AM. You're the true backbone of this project.</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg text-gray-400">
            Remember, behind every successful hack, there's a failed one (or a hundred). Keep learning, stay curious, and may your exploits always be ethical!
          </p>
          <Lightbulb className="mx-auto mt-4 h-8 w-8 text-yellow-500 animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
};

export default Acknowledgments;
