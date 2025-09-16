# Font Recommendations

## App Store-Friendly Fonts

### System Fonts (Recommended)
These fonts are built into iOS and Android, ensuring consistent performance and appearance:

#### iOS System Fonts
- **San Francisco (SF Pro)** - Apple's system font
  - Weights: Regular, Medium, Semibold, Bold
  - Best for: Body text, UI elements
  - Usage: `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;`

#### Android System Fonts
- **Roboto** - Google's system font
  - Weights: Light, Regular, Medium, Bold, Black
  - Best for: Body text, UI elements
  - Usage: `font-family: 'Roboto', sans-serif;`

### Cross-Platform Web Fonts
These fonts work well across all platforms and are App Store approved:

#### Primary Recommendations
1. **Inter** (Highly Recommended)
   - Clean, modern, highly readable
   - Excellent for UI and body text
   - Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap`

2. **Poppins** (Popular Choice)
   - Friendly, approachable
   - Great for headings and UI
   - Google Fonts: `https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap`

3. **Open Sans** (Classic)
   - Highly legible, professional
   - Excellent for body text
   - Google Fonts: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap`

#### Alternative Options
- **Lato** - Humanist, friendly
- **Source Sans Pro** - Adobe's open source font
- **Nunito** - Rounded, friendly
- **Montserrat** - Geometric, modern

## Font Hierarchy

### Recommended Font Stack
```css
/* Primary Font Stack */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;

/* Alternative Stack */
font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
```

### Font Weights
- **Light (300)**: Subtle text, captions
- **Regular (400)**: Body text, default
- **Medium (500)**: Emphasized text, buttons
- **Semibold (600)**: Subheadings, important text
- **Bold (700)**: Headings, strong emphasis

## Implementation Notes

1. **Performance**: System fonts load instantly, custom fonts may cause flash
2. **Accessibility**: Ensure sufficient contrast and readable sizes
3. **Consistency**: Use the same font family across all platforms
4. **Fallbacks**: Always include system font fallbacks
5. **Loading**: Preload custom fonts for better performance

## Next Steps

1. Choose your primary font from the recommendations above
2. Test the font on both iOS and Android devices
3. Ensure the font supports all required weights
4. Update your app's font configuration
5. Document your final font choice in `font-specs.md`
