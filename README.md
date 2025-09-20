# Muhammad Bilal - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This portfolio showcases my work as a Software Engineer specializing in mobile development, IoT solutions, and full-stack applications.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dark Mode**: Built-in dark mode support
- **Performance**: Optimized for speed and SEO
- **Accessibility**: WCAG compliant with proper ARIA labels
- **TypeScript**: Fully typed for better development experience
- **Animations**: Smooth Framer Motion animations
- **Contact Form**: Functional contact form (ready for backend integration)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   │   ├── Header.tsx    # Navigation header
│   │   └── Footer.tsx    # Site footer
│   ├── sections/         # Page sections
│   │   ├── Hero.tsx      # Hero section
│   │   ├── About.tsx     # About section
│   │   ├── Experience.tsx # Work experience
│   │   ├── Projects.tsx  # Projects showcase
│   │   └── Contact.tsx   # Contact form
│   └── ui/               # UI components
│       ├── Button.tsx    # Reusable button
│       ├── Card.tsx      # Card component
│       └── ScrollToTop.tsx # Scroll to top button
├── data/                 # Static data
│   └── portfolio.ts      # Portfolio data
└── types/                # TypeScript types
    └── index.ts          # Type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mbilal/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

Update your personal information in `src/data/portfolio.ts`:

```typescript
export const contactInfo: ContactInfo = {
  email: 'your-email@example.com',
  phone: 'your-phone-number',
  linkedin: '/your-linkedin',
  github: 'your-github-username',
  location: 'Your Location'
};
```

### Experience & Projects

Add your work experience and projects in the same file:

```typescript
export const experiences: Experience[] = [
  // Add your work experience
];

export const projects: Project[] = [
  // Add your projects
];
```

### Styling

The portfolio uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.js`
- Global styles in `src/app/globals.css`
- Component-specific styles in individual component files

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **SEO**: Fully optimized for search engines
- **Accessibility**: WCAG 2.1 AA compliant

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: miabilal035@gmail.com
- **LinkedIn**: [linkedin.com/in/mbilal](https://linkedin.com/in/mbilal)
- **GitHub**: [github.com/mbilal](https://github.com/mbilal)
- **Phone**: (+966) 578 7578 21

---

Built with ❤️ by Muhammad Bilal