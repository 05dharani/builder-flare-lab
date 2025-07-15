# 🌱 AgriSense - Soil Analysis & Crop Recommendation App

A modern, intelligent soil analysis application that provides data-driven crop recommendations based on soil mineral content.

## 📋 Features

- **Soil Analysis**: Input nitrogen, phosphorus, potassium, and pH levels
- **Intelligent Recommendations**: Get personalized crop suggestions with suitability scores
- **Modern UI**: Beautiful agricultural-themed interface with responsive design
- **Real-time Analysis**: Instant crop recommendations based on soil data
- **Production Ready**: Built with TypeScript, React, and modern tooling

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

### Installation & Setup

1. **Download the project** (if you have the zip file, extract it to your desired location)

2. **Navigate to the project directory**:

   ```bash
   cd agrisense
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. **Open your browser** and go to:
   ```
   http://localhost:8080
   ```

The app should now be running! 🎉

## 📁 Project Structure

```
agrisense/
├── client/                 # Frontend React application
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Base UI components (buttons, cards, etc.)
│   │   └── Navigation.tsx # App navigation
│   ├── pages/            # Page components
│   │   ├── Index.tsx     # Main soil analysis page
│   │   ├── About.tsx     # About page
│   │   └── NotFound.tsx  # 404 page
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main app component with routing
│   └── global.css        # Global styles and theme
├── server/               # Backend Express server
│   ├── routes/           # API routes
│   └── index.ts          # Server configuration
├── shared/               # Shared types between client and server
└── package.json          # Dependencies and scripts
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload

# Building
npm run build        # Build for production
npm run start        # Start production server

# Testing & Quality
npm test            # Run tests
npm run typecheck   # Check TypeScript types
npm run format.fix  # Format code with Prettier
```

## 🌾 How to Use AgriSense

1. **Enter Soil Data**: Input your soil's mineral levels:

   - Nitrogen (N) in mg/kg
   - Phosphorus (P) in mg/kg
   - Potassium (K) in mg/kg
   - pH level

2. **Analyze**: Click "Analyze & Recommend" to process your soil data

3. **View Results**: Get instant crop recommendations with:
   - Suitability percentage for each crop
   - Detailed reasoning for recommendations
   - Best match highlighted at the top

## 📊 Supported Crops

The app currently recommends from these crop types:

- 🌾 Wheat
- 🌽 Corn
- 🌱 Soybeans
- 🍅 Tomatoes
- 🥬 Lettuce

## 🎨 Customization

### Changing Colors

Edit `client/global.css` to modify the agricultural color scheme:

- Primary colors (greens)
- Earth tones (browns)
- Nature colors (additional greens)

### Adding New Crops

Edit `client/pages/Index.tsx` and add to the `cropDatabase` array with:

- Crop name and icon
- Nutrient requirements (min/max ranges)
- pH requirements

## 🚀 Deployment

### Option 1: Build for Static Hosting

```bash
npm run build
# Upload the 'dist' folder to any static hosting service
```

### Option 2: Full-Stack Deployment

```bash
npm run build
npm start
# Deploy to platforms like Heroku, DigitalOcean, etc.
```

## 🔧 Troubleshooting

**Port already in use?**

- The app runs on port 8080 by default
- If busy, stop other services or change the port in `vite.config.ts`

**Dependencies not installing?**

- Try deleting `node_modules` and `package-lock.json`
- Run `npm install` again

**App not loading?**

- Check that Node.js version is 18+
- Ensure all dependencies installed successfully
- Check browser console for errors

## 📞 Support

If you encounter any issues:

1. Check the console for error messages
2. Ensure all dependencies are installed
3. Verify Node.js version compatibility
4. Try clearing browser cache and restarting the dev server

## 🌟 Technology Stack

- **Frontend**: React 18, TypeScript, TailwindCSS
- **Backend**: Express.js, Node.js
- **UI Components**: Radix UI, Lucide React
- **Build Tool**: Vite
- **Testing**: Vitest

---

Built with ❤️ for sustainable agriculture and data-driven farming decisions.
