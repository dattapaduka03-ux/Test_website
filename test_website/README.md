# Avimuktha Datta Paaduka Ashram Website - Setup Guide

## Quick Start (3 Steps)

### 1. Install Dependencies
```bash
cd ashram_website
pnpm install
```

If you don't have `pnpm`, install it first:
```bash
npm install -g pnpm
```

Or use `npm` instead:
```bash
npm install
```

### 2. Start Development Server
```bash
pnpm run dev
```
Or with npm:
```bash
npm run dev
```

### 3. Open in Browser
Visit: `http://localhost:3000` (or the port shown in terminal)

---

## Project Structure

```
ashram_website/
├── client/
│   ├── public/
│   │   ├── images/           # All website images (8 images included)
│   │   │   ├── hero-guru.jpg
│   │   │   ├── hero-sevas.jpg
│   │   │   ├── hero-activities.jpg
│   │   │   ├── hero-trust.jpg
│   │   │   ├── hero-sthala.jpg
│   │   │   ├── hero-contact.jpg
│   │   │   ├── gallery-7.jpg
│   │   │   └── gallery-8.jpg
│   │   ├── favicon.ico
│   │   └── __manus__/        # Framework files
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx      # Main landing page
│   │   │   └── EventsPage.tsx # Events calendar
│   │   ├── components/       # UI components
│   │   ├── contexts/
│   │   │   └── LanguageContext.tsx
│   │   ├── hooks/
│   │   │   └── useScrollAnimation.tsx
│   │   ├── translations.json # 4-language translations
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css         # Global styles
│   └── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
└── SETUP_GUIDE.md
```

---

## Features Included

✅ **Multilingual Support** - English, Hindi, Kannada, Telugu  
✅ **Responsive Design** - Mobile, tablet, desktop  
✅ **8 High-Quality Images** - All included locally  
✅ **Smooth Animations** - Scroll-triggered effects  
✅ **Interactive Events Calendar** - With translated event data  
✅ **8 Navigation Pages** - Full site structure  
✅ **Orange/Yellow Theme** - Vibrant spiritual aesthetic  

---

## Available Pages

1. **Home** - Hero section with ashram introduction
2. **Guru Parampara** - Spiritual lineage
3. **Sevas** - Services and practices
4. **Activities** - Community programs
5. **Gallery** - Photo gallery (8 images)
6. **Trust** - Trust information
7. **Sthala Puranam** - Sacred location details
8. **Contact Us** - Contact information
9. **Events** - Interactive calendar with pujas

---

## Language Switching

Click the **Globe (🌐) icon** in the top-right corner to switch between:
- English (EN)
- हिन्दी (Hindi)
- ಕನ್ನಡ (Kannada)
- తెలుగు (Telugu)

All content translates instantly!

---

## Development Commands

```bash
# Start dev server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview

# Type check
pnpm run type-check

# Lint code
pnpm run lint
```

---

## Technology Stack

- **React 19** - UI framework
- **Tailwind CSS 4** - Styling
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Wouter** - Lightweight routing
- **Lucide React** - Icons
- **Custom Animations** - Scroll-triggered effects

---

## Images Included

All 8 images are stored in `client/public/images/`:

| File | Size | Usage |
|------|------|-------|
| hero-guru.jpg | 958 KB | Guru Parampara page |
| hero-sevas.jpg | 231 KB | Sevas page |
| hero-activities.jpg | 847 KB | Activities page |
| hero-trust.jpg | 536 KB | Trust page |
| hero-sthala.jpg | 782 KB | Sthala Puranam page |
| hero-contact.jpg | 927 KB | Contact page |
| gallery-7.jpg | 153 KB | Gallery |
| gallery-8.jpg | 159 KB | Gallery |

**Total Size**: ~4.5 MB

---

## Customization Guide

### Change Colors
Edit `client/src/index.css`:
```css
@layer base {
  :root {
    --primary: #ff901c;              /* Tree Poppy Orange */
    --primary-foreground: #ffffff;
    --secondary: #ffc61d;            /* Lightning Yellow */
    --accent: #D4AF37;               /* Gold */
    /* ... other colors ... */
  }
}
```

### Update Translations
Edit `client/src/translations.json`:
```json
{
  "en": {
    "nav.home": "HOME",
    "nav.guru": "GURU PARAMPARA",
    ...
  },
  "hi": {
    "nav.home": "होम",
    "nav.guru": "गुरु परंपरा",
    ...
  }
}
```

### Add New Pages
1. Create `client/src/pages/NewPage.tsx`
2. Add navigation item in `Home.tsx` (around line 79-88)
3. Add translations to `translations.json`
4. Add case in `renderPage()` function in `Home.tsx`

---

## Troubleshooting

### Images not showing?
```bash
# Check if images exist
ls -la client/public/images/

# Should show 8 .jpg files
```

If missing, copy them from the original project.

### Port 3000 already in use?
Vite automatically uses the next available port. Check terminal for the actual URL.

### Dependencies installation fails?
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

Or with npm:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors?
```bash
pnpm run type-check
```

### Black screen or blank page?
1. Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. Check browser console: `F12` → Console tab
3. Ensure all images are in `client/public/images/`

---

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance Optimization

- Images are optimized JPEGs (~4.5MB total)
- CSS animations use GPU acceleration
- Lazy loading for gallery images
- Responsive images for all screen sizes
- Minimal JavaScript bundle

---

## VS Code Extensions (Recommended)

- **ES7+ React/Redux/React-Native snippets** - dsznajder.es7-react-js-snippets
- **Tailwind CSS IntelliSense** - bradlc.vscode-tailwindcss
- **TypeScript Vue Plugin** - Vue.vscode-typescript-vue-plugin
- **Prettier** - esbenp.prettier-vscode

---

## File Editing Tips

### To edit page content:
Edit `client/src/pages/Home.tsx` (main page) or `client/src/pages/EventsPage.tsx` (events)

### To edit translations:
Edit `client/src/translations.json` - add translations for all 4 languages

### To edit styles:
Edit `client/src/index.css` for global styles or add `className` in components

### To edit navigation:
Look for `navigationItems` in `client/src/pages/Home.tsx` (line ~79)

---

## Production Build

To create a production-ready build:

```bash
pnpm run build
```

This creates a `dist/` folder with optimized files ready for deployment.

---

## Need Help?

1. **Check this guide** - SETUP_GUIDE.md
2. **Review the code** - `client/src/pages/Home.tsx`
3. **Check translations** - `client/src/translations.json`
4. **View styles** - `client/src/index.css`

---

## Version Info

- **Project**: Avimuktha Datta Paaduka Ashram Website
- **Version**: 1.0.0
- **Status**: ✅ Fully Working
- **Last Updated**: April 2026
- **All Images**: ✅ Included
- **All Dependencies**: ✅ Configured

---

**Happy coding! 🙏**

For more information, visit the project repository or contact the development team.
