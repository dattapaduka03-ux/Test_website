# Installation Guide for npm Users

## If you're using npm (not pnpm)

The project is configured for `pnpm` by default, but you can use `npm` instead. Follow these steps:

### Option 1: Using npm (Recommended for most users)

```bash
# 1. Extract the ZIP file
# 2. Open terminal in the project folder
# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

# 5. Open in browser
# http://localhost:3000
```

### Option 2: Using pnpm (Faster, recommended for experienced developers)

First, install pnpm globally:
```bash
npm install -g pnpm
```

Then run:
```bash
pnpm install
pnpm run dev
```

---

## Troubleshooting

### Issue: "npm install" fails with dependency errors

**Solution:** Use the `--legacy-peer-deps` flag:
```bash
npm install --legacy-peer-deps
```

### Issue: "vite: command not found"

**Solution:** Make sure dependencies are installed:
```bash
npm install
```

Then try again:
```bash
npm run dev
```

### Issue: Port 3000 already in use

**Solution:** Vite will automatically use the next available port. Check the terminal output for the actual URL (e.g., `http://localhost:3001`).

### Issue: "Cannot find module" errors

**Solution:** Delete node_modules and reinstall:
```bash
rm -rf node_modules
npm install
npm run dev
```

---

## Available Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run check     # Check TypeScript errors
npm run format    # Format code with Prettier
```

---

## System Requirements

- **Node.js**: v18 or higher (download from nodejs.org)
- **npm**: v9 or higher (comes with Node.js)
- **Disk Space**: 500 MB minimum
- **RAM**: 2 GB minimum

---

## Verify Installation

After running `npm install`, you should see:
- ✅ No error messages
- ✅ A `node_modules` folder created
- ✅ A `package-lock.json` file created

If you see these, you're ready to run `npm run dev`!

---

## Quick Start Summary

```bash
# 1. Extract ZIP
# 2. cd ashram_website
# 3. npm install
# 4. npm run dev
# 5. Open http://localhost:3000
```

---

## Need Help?

1. Check this guide (NPM_INSTALL_GUIDE.md)
2. See SETUP_GUIDE.md for more detailed information
3. Check QUICK_START.txt for quick reference

---

**Happy coding! 🙏**
