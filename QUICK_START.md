# Quick Start Guide

## Prerequisites
- Node.js (version 14 or higher) - Download from https://nodejs.org/

## Quick Setup (Windows)
1. Double-click `setup.bat` to automatically install dependencies
2. Run `npm start` to start the development server

## Quick Setup (Mac/Linux)
1. Open terminal in the project folder
2. Run `chmod +x setup.sh` to make the script executable
3. Run `./setup.sh` to automatically install dependencies
4. Run `npm start` to start the development server

## Manual Setup
1. Open terminal/command prompt in the project folder
2. Run `npm install`
3. Run `npm start`

## Access the App
- The app will automatically open in your browser at `http://localhost:3000`
- If it doesn't open automatically, manually navigate to `http://localhost:3000`

## Features to Test
- **Banner Slider**: Auto-rotating hero banner
- **Mobile Menu**: Click the hamburger menu on mobile view
- **Newsletter Modal**: Will appear automatically after 2 seconds
- **Notification Toast**: Purchase notification appears after 2 seconds
- **Product Hover Effects**: Hover over products to see image changes
- **Responsive Design**: Resize browser window to test mobile/tablet views

## Troubleshooting
- If you get "port 3000 already in use", run `PORT=3001 npm start`
- If images don't load, ensure you're in the correct directory
- If dependencies fail to install, try `npm cache clean --force` then `npm install`

## Next Steps
- Read the full README.md for detailed documentation
- Explore the component structure in `src/components/`
- Modify product data in `src/pages/HomePage.js`
- Customize styles in `src/assets/css/style.css` 