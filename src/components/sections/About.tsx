'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Database, Users, Award, BookOpen } from 'lucide-react';
import Card from '@/components/ui/Card';
import { EnhancedCard3D } from '@/components/3d/Card3D';
import { skills, education } from '@/data/portfolio';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const stats = [
    { icon: Code, label: 'Years Experience', value: '4+' },
    { icon: Smartphone, label: 'Mobile Apps', value: '10+' },
    { icon: Database, label: 'Projects', value: '30+' },
    { icon: Users, label: 'Happy Users', value: '1M+' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A passionate Software Engineer with expertise in mobile development, IoT solutions, 
              and full-stack applications. I love creating innovative solutions that solve real-world problems.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map(({ icon: Icon, label, value }, index) => (
              <EnhancedCard3D 
                key={index} 
                className="text-center" 
                hover
                glowColor={['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981'][index % 4]}
              >
                <div className="flex flex-col items-center">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {label}
                  </div>
                </div>
              </EnhancedCard3D>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Skills */}
            <motion.div variants={itemVariants}>
              <EnhancedCard3D className="h-full" glowColor="#3b82f6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Code className="w-6 h-6 mr-3 text-blue-600" />
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                        {skill.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </EnhancedCard3D>
            </motion.div>

            {/* Education & Certifications */}
            <motion.div variants={itemVariants}>
              <EnhancedCard3D className="h-full" glowColor="#10b981">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <BookOpen className="w-6 h-6 mr-3 text-green-600" />
                  Education & Certifications
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {education.degree}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">
                      {education.university}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {education.graduationDate}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-yellow-600" />
                      Professional Certifications
                    </h4>
                    <div className="space-y-2">
                      {education.certifications.map((cert, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </EnhancedCard3D>
            </motion.div>
          </div>

          {/* Personal Statement */}
          <motion.div variants={itemVariants} className="mt-16">
            <Card className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Mission
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
                I believe in creating technology that makes a positive impact on people&apos;s lives. 
                Whether it&apos;s building intuitive mobile apps, developing IoT solutions for smart homes, 
                or architecting scalable backend systems, I&apos;m passionate about delivering high-quality 
                software that solves real problems and provides exceptional user experiences.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
