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
          Behind every successful project, there is a network of support that deserves recognition. We extend our heartfelt thanks to the following contributors to EventHorizon.
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
                  Family Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">To my family - thank you for your unwavering support and understanding. Your encouragement has been invaluable.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-gray-800 border-orange-500 border-2 hover:shadow-orange-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-orange-500">
                  <Github className="mr-2 h-6 w-6 text-purple-500" />
                  ByteSnipers & Awesome Lists
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We extend our gratitude to ByteSnipers for their comprehensive and invaluable resources. Their curated lists have significantly contributed to the development of this project.
                  You can check out their work here: (https://github.com/ByteSnipers/awesome-pentest-cheat-sheets)
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-gray-800 border-orange-500 border-2 hover:shadow-orange-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-orange-500">
                  <Bot className="mr-2 h-6 w-6 text-blue-500" />
                  ChatGPT: The Digital Assistant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">To ChatGPT - for providing invaluable assistance and insights throughout the development process.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-gray-800 border-orange-500 border-2 hover:shadow-orange-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-orange-500">
                  <Coffee className="mr-2 h-6 w-6 text-yellow-500" />
                  Caffeine: The Unsung Hero
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">To Coffee - for fueling countless late-night coding sessions and keeping productivity high.</p>
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
            Remember, behind every successful endeavor, there are numerous attempts and learning experiences. Continue to learn, stay curious, and may your efforts always be ethical.
          </p>
          <Lightbulb className="mx-auto mt-4 h-8 w-8 text-yellow-500 animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
};

export default Acknowledgments;