export const theme = {
  colors: {
    // Primary colors
    background: '#070606',
    backgroundAlt: '#0a0909',
    backgroundLight: '#121111',

    // Text colors
    white: '#FFFFFF',
    lightGray: '#DCDCDC',
    mediumGray: '#9A9A9A',
    darkGray: '#6B6B6B',
    linkColor: '#BDBDBC',

    // Accent colors
    primary: '#ECFF88',
    primaryHover: '#D4E67A',
    primaryDark: '#B8CC5C',

    // Semantic colors
    success: '#4CAF50',
    error: '#F44336',
    warning: '#FF9800',
    info: '#2196F3',

    // Aliases for backwards compatibility
    green: '#ECFF88',
    emerald: '#ECFF88',
  },

  fonts: {
    primary: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: '"SF Mono", "Fira Code", "Consolas", monospace',
  },

  fontSizes: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    md: '1.125rem',     // 18px
    lg: '1.25rem',      // 20px
    xl: '1.5rem',       // 24px
    '2xl': '2rem',      // 32px
    '3xl': '2.5rem',    // 40px
    '4xl': '3rem',      // 48px
    '5xl': '3.5rem',    // 56px
    '6xl': '4rem',      // 64px
    '7xl': '5rem',      // 80px
    '8xl': '6rem',      // 96px
  },

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  lineHeights: {
    tight: 1.1,
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  spacing: {
    0: '0',
    1: '0.25rem',     // 4px
    2: '0.5rem',      // 8px
    3: '0.75rem',     // 12px
    4: '1rem',        // 16px
    5: '1.25rem',     // 20px
    6: '1.5rem',      // 24px
    8: '2rem',        // 32px
    10: '2.5rem',     // 40px
    12: '3rem',       // 48px
    16: '4rem',       // 64px
    20: '5rem',       // 80px
    24: '6rem',       // 96px
    32: '8rem',       // 128px
    40: '10rem',      // 160px
    48: '12rem',      // 192px
  },

  breakpoints: {
    xs: '375px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  borderRadius: {
    none: '0',
    sm: '0.25rem',    // 4px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
    '2xl': '1.5rem',  // 24px
    full: '9999px',
  },

  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    glow: '0 0 20px rgba(236, 255, 136, 0.3)',
    glowStrong: '0 0 40px rgba(236, 255, 136, 0.5)',
  },

  transitions: {
    fast: '150ms ease',
    normal: '300ms ease',
    slow: '500ms ease',
    spring: '500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },

  zIndex: {
    hide: -1,
    base: 0,
    dropdown: 100,
    sticky: 200,
    fixed: 300,
    modalBackdrop: 400,
    modal: 500,
    popover: 600,
    tooltip: 700,
    toast: 800,
    max: 9999,
  },

  container: {
    maxWidth: '1440px',
    padding: {
      mobile: '1rem',
      tablet: '2rem',
      desktop: '4rem',
    },
  },
} as const;

export type Theme = typeof theme;
export type ThemeColors = keyof typeof theme.colors;
export type ThemeFontSizes = keyof typeof theme.fontSizes;
export type ThemeSpacing = keyof typeof theme.spacing;
export type ThemeBreakpoints = keyof typeof theme.breakpoints;
