import { Experience, Project, Skill, ContactInfo } from '@/types';

export const contactInfo: ContactInfo = {
  email: 'miabilal035@gmail.com',
  phone: '(+966) 578 7578 21',
  linkedin: '/mbilal',
  github: 'mbilal',
  location: 'Saudi Arabia'
};

export const experiences: Experience[] = [
  {
    id: 'first-house',
    company: 'FIRST HOUSE',
    position: 'Software Engineer',
    duration: 'FEB 2025 – Present',
    location: 'Saudi Arabia',
    description: [
      'Developing and maintaining Smart Home IoT solutions, enabling users to control lighting, appliances, and other devices directly from mobile apps using Flutter and ESP32 micro-controllers.',
      'Implementing real-time communication between mobile apps and IoT devices via MQTT and Web-socket protocols for seamless device control.',
      'Designing user-friendly Flutter interfaces for device management, scheduling, and automation of home systems',
      'Developed company first E-Commerce based website using WordPress WooCommerce now selling 5 thousand products online.'
    ],
    technologies: ['Flutter', 'ESP32', 'MQTT', 'WebSocket', 'Firebase', 'REST APIs', 'TDD', 'MVVM', 'WooCommerce'],
    achievements: [
      'Built company\'s first E-Commerce platform with 5,000+ products',
      'Implemented real-time IoT device control system'
    ]
  },
  {
    id: 'sastaticket',
    company: 'Sastaticket.pk',
    position: 'Software Engineer',
    duration: 'Aug 2023 – Dec 2024',
    location: 'Pakistan',
    description: [
      'Worked as part of the mobile engineering team on SastaTicket.pk\'s Flutter app (1M+ users).',
      'Integrated Node.js micro-services with GDS providers (Amadeus), resulting in a 30% improvement in live inventory accuracy and booking reliability.',
      'Contributed to payment workflow optimizations, reducing transaction failures by 25%.',
      'Reduced regression bugs by 50% by establishing a robust unit and UI testing pipeline, and applying Clean Architecture principles for long-term maintainability.'
    ],
    technologies: ['Flutter', 'Node.js', 'Amadeus API', 'CI/CD', 'Firebase', 'REST', 'Unit Testing', 'Clean Architecture', 'MVVM', 'TDD'],
    achievements: [
      '30% improvement in live inventory accuracy',
      'Reduced failed API calls from 140k/week to 40k/week',
      '25% reduction in transaction failures',
      '50% reduction in regression bugs'
    ]
  },
  {
    id: 'software-ag',
    company: 'Software AG',
    position: 'Mobile Engineer',
    duration: 'May 2022 – Aug 2023',
    location: 'Pakistan',
    description: [
      'Designed, developed, and deployed native iOS apps using Swift, UIKit, and SwiftUI, applying clean architectures (MVC/MVVM) for scalability and maintainability.',
      'Integrated RESTful APIs, payment gateways (Credit/Debit, Apple Pay, Stripe), and push notifications, enabling secure fintech and e-commerce solutions.',
      'Implemented offline data storage (Core Data, User Defaults) and improved app performance by 30% through memory optimization and efficient API handling.',
      'Performed code reviews, unit testing (XCTest), and debugging to ensure high-quality, crash-free releases.'
    ],
    technologies: ['Swift', 'Kotlin', 'Flutter', 'REST APIs', 'Combine', 'Coroutines', 'Clean Architecture', 'MVC', 'MVVM'],
    achievements: [
      '30% improvement in app performance',
      'Implemented secure payment gateways',
      'Zero-crash release record'
    ]
  },
  {
    id: 'mobologic',
    company: 'MoboLogic',
    position: 'Internship',
    duration: 'Jan 2022 – May 2022',
    location: 'Pakistan',
    description: [
      'Assisted in developing Mobile Features.',
      'Supported the REST API integration.',
      'Participated in code reviews and debugging sessions.'
    ],
    technologies: ['Flutter', 'REST APIs', 'Mobile Development'],
    achievements: [
      'Gained hands-on experience in mobile development',
      'Contributed to API integration projects'
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'location-reminder',
    title: 'Location Based Task Reminder',
    description: 'Location Based Task Reminder App built on Flutter, Firebase, GoogleMap, Local notification, targeting Android, iOS. This app allows users to set location-based reminders that trigger when they arrive at specific locations.',
    technologies: ['Flutter', 'Firebase', 'Google Maps', 'Local Notifications', 'Android', 'iOS'],
    githubUrl: 'https://github.com/mbilal/location-reminder',
    imageUrl: '/thumbnails/location.png',
    featured: true
  },
  {
    id: 'fantasy-fitness',
    title: 'Fantasy-Fitness iOS',
    description: 'Turn real-world activity into fantasy-style stats. Track running, walking, and jogging to earn points, level up, and compete with friends. Integrated with HealthKit and OneSignal Notifications.',
    technologies: ['SwiftUI', 'Swift Concurrency', 'Supabase', 'Widget Kit', 'HealthKit', 'OneSignal'],
    githubUrl: 'https://github.com/mbilal/fantasy-fitness',
    imageUrl: '/thumbnails/fantasy.png',
    featured: true
  },
  {
    id: 'e-speech',
    title: 'E-Speech',
    description: 'Cross-platform AI-based real-time voice translator supporting 30+ languages. Designed for live conferences & meetings with instant translation capabilities.',
    technologies: ['Flutter', 'AI/ML', 'Real-time Translation', 'Cross-platform', 'Voice Recognition'],
    githubUrl: 'https://github.com/mbilal/e-speech',
    imageUrl: '/thumbnails/espeech.png',
    featured: true
  }
];

export const skills: Skill[] = [
  {
    category: 'Mobile Development',
    technologies: ['Flutter/Dart', 'Kotlin', 'Swift', 'UIKit/SwiftUI', 'Jetpack Compose']
  },
  {
    category: 'Backend Development',
    technologies: ['Node.js', 'Firebase', 'Supabase', 'SQL/NoSQL', 'REST APIs', 'WebSocket']
  },
  {
    category: 'Architecture & Testing',
    technologies: ['GetX', 'Bloc', 'Riverpod', 'MVVM/MVC', 'TDD', 'Unit Testing', 'Widget Testing']
  },
  {
    category: 'CI/CD & Tools',
    technologies: ['GitHub Actions', 'GitLab CI', 'Bitbucket Pipelines', 'Docker', 'Kubernetes']
  }
];

export const education = {
  degree: 'Bachelor of Software Engineering, Computer Science',
  university: 'Awkum, Pakistan',
  graduationDate: 'July 2022',
  certifications: [
    'Google Professional UX Certificate (Coursera)',
    'Advance Programming in Kotlin (Meta)',
    'iOS Development Bootcamp (Udemy)',
    'Agentic AI for Developers (LinkedIn)',
    'Flutter Zero to Hero Mystery Course (Udemy)',
    'Flutter Complete Bootcamp 2022 (Udemy)',
    'UI/UX Design Specialization (California University of Arts-Coursera)'
  ]
};
