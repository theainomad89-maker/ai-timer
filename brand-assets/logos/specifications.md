# Logo Specifications - Pulse App

## Brand Identity
**App Name**: Pulse
**Tagline**: AI-Powered Fitness Timer
**Logo File**: pulse.png
**Brand Style**: Clean, minimal, fitness-focused

## Logo Requirements

### File Formats
- **Primary**: PNG (current format)
- **Location**: `/assets/brand/pulse.png`
- **App Icon**: PNG (multiple sizes required)
- **Splash Icon**: PNG (`/assets/splash-icon.png`)

### Required Sizes

#### App Store Icons
- **iOS**: 1024x1024px (App Store)
- **iOS**: 180x180px (iPhone)
- **iOS**: 167x167px (iPad Pro)
- **iOS**: 152x152px (iPad)
- **iOS**: 120x120px (iPhone)
- **iOS**: 87x87px (iPhone)
- **iOS**: 80x80px (iPhone)
- **iOS**: 76x76px (iPad)
- **iOS**: 60x60px (iPhone)
- **iOS**: 58x58px (iPhone)
- **iOS**: 40x40px (iPhone)
- **iOS**: 29x29px (iPhone)

#### Android Icons
- **Android**: 512x512px (Play Store)
- **Android**: 192x192px (xxxhdpi)
- **Android**: 144x144px (xxhdpi)
- **Android**: 96x96px (xhdpi)
- **Android**: 72x72px (hdpi)
- **Android**: 48x48px (mdpi)
- **Android**: 36x36px (ldpi)

### Logo Variations

#### Primary Logo
- **Usage**: Main brand representation
- **Format**: PNG
- **File**: `pulse.png`
- **Background**: Transparent
- **Colors**: Brand colors (Pulse Green #00C853)

#### App Icon
- **Usage**: App store, home screen
- **Format**: PNG
- **File**: `pulse.png` (same as primary)
- **Background**: White (#FFFFFF)
- **Size**: 87x87px (header), 120x120px (splash)

#### Splash Icon
- **Usage**: App launch screen
- **Format**: PNG
- **File**: `splash-icon.png`
- **Background**: White (#FFFFFF)
- **Size**: Optimized for splash screen

#### Brand Text
- **Usage**: Logo + text combination
- **Font**: System font, weight 800 (Extra Bold)
- **Size**: 51px (header), 64px (splash)
- **Color**: #0A0A0A (near black)
- **Letter Spacing**: -0.3 (header), -0.5 (splash)

## Design Guidelines

### Clear Space
- **Minimum**: 1x the height of the logo
- **Recommended**: 2x the height of the logo
- **Purpose**: Ensure logo isn't crowded by other elements

### Minimum Size
- **Print**: 0.5 inches wide
- **Digital**: 24px wide
- **Purpose**: Maintain legibility and impact

### Color Usage
- **Primary**: Use full brand colors when possible
- **Monochrome**: Use when color isn't available
- **White**: Use on dark backgrounds
- **Black**: Use on light backgrounds

### Background Guidelines
- **Transparent**: Preferred for flexibility
- **White**: Use when transparency isn't supported
- **Avoid**: Busy backgrounds that reduce legibility

## File Organization

### Current File Structure
```
ai-timer-mobile/assets/
├── brand/
│   └── pulse.png              # Primary logo (87x87px header, 120x120px splash)
├── pulse.png                  # App icon
├── splash-icon.png            # Splash screen icon
├── icon.png                   # General app icon
├── adaptive-icon.png          # Android adaptive icon
└── favicon.png                # Web favicon
```

## Usage Rules

### Do's
- ✅ Use the logo consistently across all materials
- ✅ Maintain proper clear space around the logo
- ✅ Use the correct version for the context
- ✅ Ensure high resolution for all applications
- ✅ Test logo visibility on different backgrounds

### Don'ts
- ❌ Don't modify the logo colors
- ❌ Don't stretch or distort the logo
- ❌ Don't use low-resolution versions
- ❌ Don't place the logo on busy backgrounds
- ❌ Don't create your own variations

## Current Implementation

### Logo Usage in App
- **Header**: 87x87px logo + "Pulse" text (51px, weight 800)
- **Splash Screen**: 120x120px logo + "Pulse" text (64px, weight 800)
- **App Icon**: Uses same pulse.png file
- **Background**: White (#FFFFFF) for app icons, transparent for logos

### Brand Text Styling
```javascript
// Header brand text
fontWeight: "800",
fontSize: 51,
color: "#0A0A0A",
letterSpacing: -0.3

// Splash brand text
fontWeight: "800",
fontSize: 64,
color: "#0A0A0A",
letterSpacing: -0.5
```

## Next Steps

1. **Optimize Logo**: Consider creating SVG version for scalability
2. **Create Variations**: Develop monochrome and horizontal versions
3. **Generate App Icons**: Create all required iOS and Android sizes
4. **Test Visibility**: Ensure logo works on various backgrounds
5. **Brand Guidelines**: Document specific usage rules for team

## Tools for Logo Creation

### App Icon Generators
- **App Icon Generator**: https://appicon.co/
- **Icon Kitchen**: https://icon.kitchen/
- **MakeAppIcon**: https://makeappicon.com/

### Design Tools
- **Figma**: Free, web-based design tool
- **Sketch**: Mac-only design tool
- **Adobe Illustrator**: Professional vector design
- **Canva**: User-friendly design platform
