# Font Specifications

## Selected Font Family
**Primary Font**: System Fonts (San Francisco on iOS, Roboto on Android)
**Typography Style**: Clean, minimal, system-native approach

## Font Configuration

### Typography Scale
```css
/* Headings */
title: 22px (Bold 700)
itemTitle: 17px (Semibold 600)

/* Body Text */
label: 16px (Semibold 600)
body: 16px (Regular 400)
hint: 14px (Regular 400)

/* UI Elements */
button: 16px (Semibold 600)
input: 16px (Regular 400)
caption: 12px (Regular 400)

/* Brand Text */
brand: 51px (Extra Bold 800) - Header
brand-large: 64px (Extra Bold 800) - Splash
```

### Line Heights
- **Headings**: 1.2 (tight)
- **Body Text**: 1.5 (comfortable)
- **UI Elements**: 1.4 (balanced)

### Letter Spacing
- **Headings**: -0.02em (slightly tighter)
- **Body Text**: 0 (normal)
- **Small Text**: 0.01em (slightly wider)

## Implementation

### React Native / Expo
```javascript
// Typography configuration (from theme.ts)
export const typography = {
  title: { fontSize: 22, fontWeight: "700" as const, color: "#0A0A0A" },
  label: { fontSize: 16, fontWeight: "600" as const, color: "#0A0A0A" },
  body: { fontSize: 16, fontWeight: "400" as const, color: "#0A0A0A" },
  caption: { fontSize: 12, fontWeight: "400" as const, color: "#6E6E73" },
  hint: { fontSize: 14, fontWeight: "400" as const, color: "#6E6E73" },
  itemTitle: { fontSize: 17, fontWeight: "600" as const, color: "#0A0A0A" },
};

// Usage example
const styles = StyleSheet.create({
  brandText: {
    fontWeight: "800",
    fontSize: 51,
    color: colors.text,
    letterSpacing: -0.3,
  },
  body: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.text,
  },
});
```

### CSS (Web)
```css
/* System font stack */
:root {
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  --font-size-xs: 0.75rem;    /* 12px - caption */
  --font-size-sm: 0.875rem;   /* 14px - hint */
  --font-size-base: 1rem;     /* 16px - body, label */
  --font-size-lg: 1.0625rem;  /* 17px - itemTitle */
  --font-size-xl: 1.375rem;   /* 22px - title */
  --font-size-2xl: 3.1875rem; /* 51px - brand header */
  --font-size-3xl: 4rem;      /* 64px - brand splash */
}
```

## Accessibility Guidelines

### Minimum Font Sizes
- **Body Text**: 16px minimum
- **UI Elements**: 14px minimum
- **Captions**: 12px minimum

### Contrast Requirements
- **Normal Text**: 4.5:1 contrast ratio minimum
- **Large Text**: 3:1 contrast ratio minimum

### Readability
- Line height should be 1.4-1.6 for body text
- Avoid using all caps for long text
- Use sufficient spacing between letters and words

## Testing Checklist

- [ ] Font loads correctly on iOS
- [ ] Font loads correctly on Android
- [ ] All font weights are available
- [ ] Text is readable at all sizes
- [ ] Contrast meets accessibility standards
- [ ] Font renders consistently across devices
- [ ] Performance impact is minimal

## Notes

- Uses system fonts for optimal performance and native feel
- No custom font files required - leverages platform defaults
- Typography is optimized for mobile-first design
- Letter spacing is used for brand text (-0.3 for header, -0.5 for splash)
- Font weights range from 400 (regular) to 800 (extra bold)
- All text colors use the brand color palette from theme.ts
