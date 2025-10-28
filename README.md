# My Portfolio

A modern, responsive personal portfolio website built with **React** and **Tailwind CSS**.

![React](https://img.shields.io/badge/React-18.3-blue?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?style=flat-square&logo=vite)
![Node](https://img.shields.io/badge/Node-18+-339933?style=flat-square&logo=node.js)

## ✨ Features

- ✅ **Responsive Design** - Works seamlessly on mobile, tablet, and desktop devices
- ✅ **Smooth Scrolling** - Smooth navigation between sections with react-scroll
- ✅ **Modern UI** - Clean and professional design using Tailwind CSS
- ✅ **Optimized Performance** - Code splitting, lazy loading, and minification
- ✅ **SEO Ready** - Semantic HTML and meta tags for better search engine visibility
- ✅ **Accessible** - WCAG compliant with proper ARIA labels and semantic markup
- ✅ **Contact Form** - Integrated contact form with validation (ready to configure)
- ✅ **Dark Mode Ready** - Easy to add dark mode toggle
- ✅ **Production Ready** - Deploy to Netlify or Vercel with zero configuration

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx        # Navigation bar with mobile menu
│   │   ├── Footer.jsx            # Footer with social links
│   │   ├── ProjectCard.jsx       # Individual project card component
│   │   └── ContactForm.jsx       # Contact form component
│   ├── sections/
│   │   ├── Hero.jsx              # Hero section with CTA
│   │   ├── About.jsx             # About section with skills
│   │   ├── Projects.jsx          # Projects showcase section
│   │   └── Contact.jsx           # Contact section
│   ├── App.jsx                   # Main App component
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Global styles and Tailwind directives
├── public/
├── index.html                    # HTML entry point
├── vite.config.js                # Vite configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
├── package.json                  # Dependencies and scripts
├── .eslintrc.cjs                 # ESLint configuration
├── .gitignore                    # Git ignore rules
└── README.md                     # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Customize the portfolio** (Important!)
   Update the following files with your information:
   - `src/components/Navigation.jsx` - Replace "John Doe" with your name
   - `src/sections/Hero.jsx` - Update your name and tagline
   - `src/sections/About.jsx` - Add your bio, photo, and skills
   - `src/sections/Projects.jsx` - Add your actual projects
   - `src/sections/Contact.jsx` - Update contact information
   - `src/components/Footer.jsx` - Update social media links
   - Update social links in both Navigation and Footer components

### Development

Run the development server:

```bash
npm run dev
```

This will start a local development server at `http://localhost:3000` with hot module replacement (HMR).

### Build for Production

Create an optimized production build:

```bash
npm run build
```

This creates a `dist/` folder with optimized files ready for deployment.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 🎨 Customization Guide

### Update Your Information

1. **Name & Contact Info**
   - Navigate to `src/components/Navigation.jsx` and update the name
   - Update `src/sections/Contact.jsx` with your actual contact details
   - Update `src/components/Footer.jsx` with your name and social links

2. **Profile Photo**
   - Replace the placeholder image in `src/sections/About.jsx`
   - Update the `src` attribute: `src="path-to-your-image.jpg"`

3. **Bio & Skills**
   - Edit the bio text in `src/sections/About.jsx`
   - Add/remove skills by modifying the `skills` array
   - Import relevant icons from `react-icons`

4. **Projects**
   - Edit the `projects` array in `src/sections/Projects.jsx`
   - Add your project images (replace placeholders)
   - Update project titles, descriptions, and links

5. **Colors & Branding**
   - Modify `tailwind.config.js` to change the color palette
   - Update `primary` and `secondary` colors
   - Change fonts in the `fontFamily` section

6. **Contact Form Configuration**
   - The form currently has client-side validation
   - To enable form submissions, choose one:
     - **FormSubmit.co** - Free service, no backend needed
     - **Netlify Forms** - Free with Netlify hosting
     - **Custom Backend** - Build your own API

   **Example with FormSubmit.co:**
   ```jsx
   // In ContactForm.jsx
   const handleSubmit = async (e) => {
     e.preventDefault()
     const form = e.target
     fetch('https://formsubmit.co/YOUR_EMAIL@example.com', {
       method: 'POST',
       body: new FormData(form),
       headers: { 'Accept': 'application/json' }
     }).then(r => r.json())
   }
   ```

### Color Palette

The default color scheme uses:
- **Primary**: Sky Blue (0ea5e9 - perfect for CTAs and highlights)
- **Secondary**: Purple (a855f7 - for accents)
- **Dark**: Slate (0f172a - for footer)
- **Light**: Light Gray (f8fafc - for backgrounds)

Customize in `tailwind.config.js` under the `colors` section.

### Responsive Breakpoints

The site uses Tailwind's standard breakpoints:
- `xs`: 320px (mobile)
- `sm`: 640px (small mobile)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)
- `xl`: 1280px (large desktop)
- `2xl`: 1536px (extra large)

## 📦 Dependencies

- **React 18.3** - UI library
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **react-icons 5.3** - Icon library with 12,000+ icons
- **react-scroll 1.9** - Smooth scrolling library
- **Vite 5.2** - Fast build tool and dev server

## 🚢 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Set build command: `npm run build`
6. Set publish directory: `dist`
7. Click "Deploy"

**netlify.toml** (optional, create if needed):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

**vercel.json** (optional):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

### Deploy to GitHub Pages

1. Update `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/my-portfolio/',
     ...
   })
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Push to GitHub and enable Pages in repository settings

### Deploy to Traditional Hosting

1. Run `npm run build`
2. Upload the contents of the `dist/` folder to your hosting provider
3. Set your hosting to serve `index.html` for all routes

## 🔧 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Create production build
npm run preview   # Preview production build locally
npm run lint      # Run ESLint to check code quality
```

## 🌟 Future Enhancements

Here are some features you can add later:

### 1. Dark Mode Toggle
```jsx
// Add dark mode state and theme toggle button
const [isDark, setIsDark] = useState(false)
// Use Tailwind's dark: prefix
```

### 2. Animation Enhancements
- Framer Motion for complex animations
- Intersection Observer for scroll-triggered animations
- Page transitions

### 3. Blog Section
- Add a blog with Markdown support
- Use Contentful or Sanity CMS
- SEO optimization for blog posts

### 4. CMS Integration
- Headless CMS (Contentful, Sanity, Strapi)
- Manage projects and content from a dashboard
- No need to redeploy when updating content

### 5. Performance Optimizations
- Image optimization with Next.js Image or Unpic
- WebP format support
- Service Worker for offline support

### 6. Advanced SEO
- Open Graph meta tags for social sharing
- Structured data (Schema.org)
- Sitemap generation
- Analytics integration (Google Analytics, Plausible)

### 7. Additional Features
- Blog with search functionality
- Subscribe to newsletter
- Case studies for projects
- Testimonials/Reviews section
- Skills assessment section
- Video portfolio
- Interactive code snippets

### 8. Testing
```bash
npm install --save-dev vitest @testing-library/react
```
- Unit tests with Vitest
- Component tests with React Testing Library
- E2E tests with Cypress or Playwright

### 9. Static Site Generation
- Migrate to Next.js for SSR/SSG
- Better SEO with automatic sitemap
- Incremental Static Regeneration

### 10. Accessibility Improvements
- Screen reader testing
- Keyboard navigation enhancements
- Color contrast improvements
- ARIA labels expansion

## 🐛 Troubleshooting

### Port already in use
```bash
# Change the port in vite.config.js or use:
npm run dev -- --port 3001
```

### Styles not applying
- Make sure `src/index.css` is imported in `src/main.jsx`
- Check that `tailwind.config.js` content paths are correct
- Clear Vite cache: `rm -rf .vite`

### Build issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and use it as a template for your portfolio!

## 📞 Support

For issues or questions:
1. Check the Tailwind CSS documentation: https://tailwindcss.com
2. React docs: https://react.dev
3. Vite docs: https://vitejs.dev

## 🙏 Acknowledgments

- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-scroll](https://github.com/fisshy/react-scroll)

---

**Happy Coding! 🚀**

Made with ❤️ for passionate developers
