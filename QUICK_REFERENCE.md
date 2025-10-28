# Quick Reference Card 🎨

## 🔥 Current Status
- ✅ Dev Server: http://localhost:3000/
- ✅ Theme: Dark with Orange Accents
- ✅ Primary Color: Blue
- ✅ Build: Production ready (231 KB total, 70 KB gzipped)

## 📋 What Changed

### New Sections
- ✨ **Services Section**: 6-card grid with service offerings

### Redesigned Sections  
- **Hero**: Side-by-side layout with profile image & stats bar
- **About**: Circular skill indicators with percentages
- **Projects**: Dark cards with orange accents
- **Contact**: Two-column info + form layout
- **Navigation**: Dark navbar with backdrop blur
- **Footer**: Three-column layout with social icons

### Colors Added
- **Orange Full Scale**: Used for accents, buttons, highlights
- **Dark Background**: #0f172a throughout
- **Text Colors**: White headings, gray-300 body, gray-400 tertiary

## ⚡ Common Tasks

### Start Dev Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Edit Hero Content
File: `src/sections/Hero.jsx`
- Line 26: Name (currently "Mahmood Fazile")
- Line 32: Title (currently "UI/UX designer")
- Line ~50: Profile image URL

### Edit Skills
File: `src/sections/About.jsx`
- Skills array: Add/remove/edit skills with icons and percentages

### Edit Projects
File: `src/sections/Projects.jsx`
- Projects array: Add your actual projects with titles, descriptions, images, tags

### Edit Services
File: `src/sections/Services.jsx`
- Services array: 6 service cards with titles, descriptions, icons

### Update Contact Info
File: `src/sections/Contact.jsx`
- Line ~5: Phone number
- Line ~10: Email address
- Line ~15: Location

## 🎨 Color Quick Reference

```
Dark Background:    #0f172a (used everywhere)
Primary Blue:       #0ea5e9 (hovers, active states)
Accent Orange:      #f97316 (buttons, highlights)
White Text:         #ffffff (headings)
Gray Text:          #d1d5db (body), #9ca3af (secondary)
Borders:            #374151 (gray-700)
Card Background:    #1f2937 (gray-800)
```

## 📱 Responsive Breakpoints

| Size | Width | Layout |
|------|-------|--------|
| Mobile | 320px | Single column |
| Tablet | 768px | 1-2 columns |
| Desktop | 1024px | 2-3 columns |
| Wide | 1280px+ | Full 3 columns |

## 🚀 Deployment Options

### Quick Deploy (Vercel)
```bash
npm run build
vercel --prod
```

### GitHub Pages
```bash
npm run build
git subtree push --prefix dist origin gh-pages
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

## 📞 Important Files

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main app component |
| `tailwind.config.js` | Colors & Tailwind config |
| `src/sections/` | Page sections |
| `src/components/` | Reusable components |
| `dist/` | Production build |

## ✅ Before Deploying

- [ ] Update all personal information
- [ ] Replace placeholder images
- [ ] Add your real projects
- [ ] Configure contact form backend
- [ ] Test on mobile (F12)
- [ ] Run `npm run build` and verify no errors
- [ ] Check dist/ folder has files

## 🎯 Component Quick Links

- **Hero**: `src/sections/Hero.jsx` (Name, Title, Image, Stats)
- **About**: `src/sections/About.jsx` (Bio, Skills)
- **Services**: `src/sections/Services.jsx` (6 Services)
- **Projects**: `src/sections/Projects.jsx` (Your Projects)
- **Contact**: `src/sections/Contact.jsx` (Contact Info + Form)
- **Nav**: `src/components/Navigation.jsx` (Header)
- **Footer**: `src/components/Footer.jsx` (Footer)

## 🔥 Terminal Commands

```bash
# Start development
npm run dev

# Build production
npm run build

# Install dependencies
npm install

# Clean install
rm -rf node_modules
npm install

# Preview build locally
npm run preview
```

---

**You're all set!** 🎉 The dark theme portfolio is ready for customization and deployment.
