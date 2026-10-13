# Portfolio Website 🚀

A modern, minimal portfolio website built with React, TypeScript, and Vite.

## Features ✨

- 🎨 Beautiful gradient hero section with animations
- 📸 Smooth project showcase with hover effects
- 🎭 Scroll-triggered animations
- 📱 Fully responsive design
- ⚡ Lightning-fast with Vite
- 🔷 TypeScript for type safety
- 🌈 Modern UI with smooth transitions

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization 🎨

### Add Your Projects

Edit `/src/components/Projects.tsx` and update the `projectsData` array:

```typescript
const projectsData: Project[] = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Your project description',
    image: '/path/to/your/image.jpg',
    tags: ['React', 'TypeScript', 'Vite'],
    link: 'https://your-project-url.com'
  },
  // Add more projects...
]
```

### Add Your Screenshots

1. Place your project screenshots in the `/public` folder
2. Update the image paths in `projectsData`

### Customize Colors

Edit CSS variables in `/src/App.css`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-dark: #2d3748;
  --text-light: #718096;
}
```

### Update Hero Section

Edit `/src/components/Hero.tsx` to change the greeting message.

## Deployment Options 🌐

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy! ✅

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://app.netlify.com/drop)

### GitHub Pages

```bash
npm run build
# Follow GitHub Pages deployment guide
```

## Project Structure 📁

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Hero.css
│   │   ├── Projects.tsx
│   │   ├── Projects.css
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectCard.css
│   │   ├── Footer.tsx
│   │   └── Footer.css
│   ├── types/
│   │   └── project.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── public/
├── index.html
└── package.json
```

## Tech Stack 💻

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **CSS3** - Styling with animations

## Browser Support 🌍

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

Made with ❤️ using React + TypeScript + Vite
