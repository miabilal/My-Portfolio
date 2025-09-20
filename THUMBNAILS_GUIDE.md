# Project Thumbnails Guide

## 📸 How to Add Your Project Thumbnails

### 1. **Replace Placeholder Images**
Replace the SVG placeholder files in `/public/thumbnails/` with your actual project screenshots:

- `location-reminder.svg` → `location-reminder.png` (or `.jpg`, `.webp`)
- `fantasy-fitness.svg` → `fantasy-fitness.png` (or `.jpg`, `.webp`)  
- `e-speech.svg` → `e-speech.png` (or `.jpg`, `.webp`)

### 2. **Recommended Image Specifications**
- **Format**: PNG, JPG, or WebP
- **Size**: 400x300px (4:3 aspect ratio)
- **File Size**: Under 200KB for optimal loading
- **Content**: App screenshots, UI mockups, or project demos

### 3. **Image Optimization Tips**
- Use tools like [TinyPNG](https://tinypng.com/) to compress images
- Consider using WebP format for better compression
- Ensure images are high-quality but optimized for web

### 4. **Adding New Projects**
To add thumbnails for new projects:

1. Add the image to `/public/thumbnails/`
2. Update the `imageUrl` field in `/src/data/portfolio.ts`:
   ```typescript
   {
     id: 'new-project',
     title: 'New Project',
     imageUrl: '/thumbnails/new-project.png',
     // ... other fields
   }
   ```

### 5. **Fallback Handling**
The component automatically handles missing images gracefully. If an image fails to load, the project card will display without the thumbnail.

## 🎨 Current Placeholder Images
The current SVG placeholders are color-coded:
- **Blue**: Location Reminder (location-based features)
- **Green**: Fantasy Fitness (health/fitness theme)  
- **Purple**: E-Speech (AI/technology theme)

Replace these with actual screenshots of your projects for the best visual impact!
