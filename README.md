# AI Workout Timer

A complete workout timer application that converts natural language workout descriptions into intelligent interval timers with voice cues. Features both a mobile app with OCR photo capture and a backend AI service.

## 🏗️ Project Structure

```
aitimer/
├── ai-timer-api/          # Backend AI service (Node.js + Fastify + OpenAI)
├── ai-timer-mobile/       # Mobile app (React Native + Expo + TypeScript)
└── README.md              # This file
```

## 🚀 Quick Start

### 1. Backend API Setup

```bash
cd ai-timer-api
npm install
cp .env.example .env
# Edit .env with your OpenAI API key
npm start
```

### 2. Mobile App Setup

```bash
cd ai-timer-mobile
npm install
cp .env.example .env
# Edit .env with your backend API URL
npx expo run:ios --device  # or --android for Android
```

## 📱 Mobile App Features

### Core Functionality
- **AI-Powered Workout Conversion**: Natural language to structured timers
- **Multiple Workout Types**: EMOM, Intervals, Circuits, Tabata
- **Voice Cues & Vibration**: Text-to-speech announcements and haptic feedback
- **Timeline Management**: Edit, add, delete, and reorder workout events

### New OCR Photo Capture
- **📸 Photo Input**: Take photos of workout instructions or select from library
- **🔍 On-Device OCR**: Extract text using local processing (no cloud uploads)
- **🤖 AI Processing**: Same AI pipeline as text input
- **🔒 Privacy-First**: All processing happens on your device

### Supported Workout Formats
- **EMOM**: "20-min EMOM. Odd: 12 burpees. Even: 45s plank."
- **Intervals**: "10 rounds: 30s work, 15s rest"
- **Circuits**: "3 rounds: 10 pushups, 20 squats, 30s rest between exercises"
- **Tabata**: "8 rounds: 20s work, 10s rest"

## 🖥️ Backend API Features

### Endpoints
- `POST /generate` - Convert workout text to structured timer
- `GET /health` - Health check endpoint

### AI Processing
- **OpenAI GPT-4**: Advanced natural language understanding
- **Structured Output**: Consistent JSON format for mobile app
- **Error Handling**: Graceful fallbacks and user-friendly messages

## 🛠️ Tech Stack

### Mobile App
- **Framework**: React Native + Expo
- **Language**: TypeScript
- **State Management**: Zustand
- **Navigation**: expo-router
- **OCR**: expo-text-extractor (on-device)
- **Image Processing**: expo-image-picker, expo-image-manipulator
- **Audio**: expo-speech (TTS)
- **Native Features**: expo-keep-awake, expo-av

### Backend API
- **Runtime**: Node.js
- **Framework**: Fastify
- **AI**: OpenAI GPT-4
- **Deployment**: Railway
- **Validation**: Zod schemas

## 📋 Current Status

### ✅ Completed
- **Backend API**: Fully functional with OpenAI integration
- **Mobile App Core**: Timer functionality, voice cues, timeline management
- **OCR Photo Capture**: iOS implementation complete and tested
- **Development Build**: Native module integration working
- **Deployment**: Backend deployed on Railway

### 🔄 In Progress
- **Android Testing**: OCR functionality needs validation on Android
- **Performance Optimization**: OCR processing speed improvements
- **Error Handling**: Enhanced user feedback for edge cases

### 📋 Planned
- **Cloud OCR Fallback**: Optional cloud processing for better handwriting
- **Batch Processing**: Multiple workout photos at once
- **OCR History**: Save and reuse processed photos
- **Offline Mode**: Basic timer functionality without network

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Expo CLI
- **iOS Development**: Xcode 15+ with iOS device/simulator
- **Android Development**: Android Studio with device/emulator
- OpenAI API key

### Backend Setup
```bash
cd ai-timer-api
npm install
cp .env.example .env
# Add your OpenAI API key to .env
npm start
```

### Mobile App Setup
```bash
cd ai-timer-mobile
npm install
cp .env.example .env
# Add your backend API URL to .env
npx expo run:ios --device  # First time build
npx expo start --dev-client # Start development server
```

## 🔧 Development

### Why Development Build?
The mobile app requires a development build (`expo run:ios` or `expo run:android`) because:
- **Native OCR Module**: `expo-text-extractor` requires native compilation
- **Image Processing**: Camera and photo library access need native permissions
- **Performance**: Native modules provide better performance than Expo Go

### Development Workflow
1. **Start Metro**: `npx expo start --dev-client`
2. **Build Native**: `npx expo run:ios --device` (first time or after native changes)
3. **Hot Reload**: JS/TS changes reload automatically
4. **Native Changes**: Require rebuilding with `npx expo run:ios --device`

### Troubleshooting
```bash
# If build fails with sandbox errors
cd ios && rm -rf Pods && rm -rf build && pod install
cd .. && npx expo run:ios --device

# If native modules not found
npx expo prebuild --clean
npx expo run:ios --device
```

## 🌐 Deployment

### Backend (Railway)
1. Connect GitHub repository to Railway
2. Set environment variable: `OPENAI_API_KEY`
3. Deploy automatically on push to main branch

### Mobile App (EAS Build)
```bash
# Install EAS CLI
npm install -g @expo/eas-cli

# Login and configure
eas login
eas build:configure

# Build for production
eas build --platform ios
eas build --platform android
```

## 📚 Documentation

- **Mobile App**: See [ai-timer-mobile/README.md](ai-timer-mobile/README.md) for detailed setup
- **Backend API**: See [ai-timer-api/README.md](ai-timer-api/README.md) for API documentation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly (development build required for mobile)
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🆘 Support

For issues and questions:
- Check the troubleshooting sections in each README
- Review Expo and React Native documentation
- Open an issue on GitHub

---

**Note**: The mobile app requires a development build due to native OCR modules. Use `npx expo run:ios --device` or `npx expo run:android --device` for development, and EAS Build for production releases.

---
*Last updated: September 2025*
