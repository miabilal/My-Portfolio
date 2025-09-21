'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Award, Code2 } from 'lucide-react';
import Card from '@/components/ui/Card';
import { EnhancedCard3D } from '@/components/3d/Card3D';
import { experiences } from '@/data/portfolio';

const Experience: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const getCompanyColor = (company: string) => {
    const colors = {
      'FIRST HOUSE': 'blue',
      'Sastaticket.pk': 'green',
      'Software AG': 'purple',
      'MoboLogic': 'orange'
    };
    return colors[company as keyof typeof colors] || 'gray';
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              Work Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A journey of growth, innovation, and impact across different companies and technologies.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            {experiences.map((experience, index) => {
              const color = getCompanyColor(experience.company);
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={experience.id}
                  variants={itemVariants}
                  className={`relative flex items-center mb-12 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-${color}-500 rounded-full border-4 border-white dark:border-gray-800 z-10`}></div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                    <EnhancedCard3D 
                      className="h-full" 
                      hover
                      glowColor={['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981'][index % 4]}
                    >
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {experience.position}
                            </h3>
                            <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                              {experience.company}
                            </h4>
                          </div>
                          <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <Calendar className="w-4 h-4 mr-1" />
                              {experience.duration}
                            </div>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <MapPin className="w-4 h-4 mr-1" />
                              {experience.location}
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-3">
                          {experience.description.map((desc, descIndex) => (
                            <p
                              key={descIndex}
                              className="text-gray-600 dark:text-gray-400 leading-relaxed"
                            >
                              {desc}
                            </p>
                          ))}
                        </div>

                        {/* Achievements */}
                        {experience.achievements && experience.achievements.length > 0 && (
                          <div>
                            <h5 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                              <Award className="w-4 h-4 mr-1 text-yellow-600" />
                              Key Achievements
                            </h5>
                            <ul className="space-y-1">
                              {experience.achievements.map((achievement, achIndex) => (
                                <li
                                  key={achIndex}
                                  className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                                >
                                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Technologies */}
                        <div>
                          <h5 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                            <Code2 className="w-4 h-4 mr-1 text-blue-600" />
                            Technologies
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className={`px-2 py-1 bg-${color}-100 dark:bg-${color}-900 text-${color}-800 dark:text-${color}-200 rounded-md text-xs font-medium`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </EnhancedCard3D>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <Card className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Interested in Working Together?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I&apos;m always excited to take on new challenges and contribute to innovative projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Get In Touch
                </a>
                <a
                  href={`https://github.com/miabilal`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View GitHub
                </a>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
