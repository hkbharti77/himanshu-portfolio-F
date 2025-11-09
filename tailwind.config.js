/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      // Mithila/Madhubani art inspired colors
      'mithila-red': '#E91E63', // Traditional red from Madhubani art
      'mithila-yellow': '#FFEB3B', // Vibrant yellow
      'mithila-green': '#4CAF50', // Traditional green
      'mithila-blue': '#2196F3', // Divine blue
      'mithila-orange': '#FF9800', // Warm orange
      'mithila-brown': '#795548', // Earthy brown
      'mithila-pink': '#FF80AB', // Soft pink
      'mithila-purple': '#9C27B0', // Royal purple
      'mithila-turquoise': '#009688', // Turquoise for water elements
      'mithila-gold': '#FFD700', // Gold for decorative elements
      'mithila-saffron': '#FF5722', // Saffron orange
      'mithila-peacock': '#004D40', // Deep green like peacock feathers
      'mithila-sky': '#87CEEB', // Sky blue
      'mithila-earthy': '#8D6E63', // Earthy tones
      'mithila-cream': '#FFF8E1', // Cream for backgrounds
      'mithila-charcoal': '#212121', // Charcoal black
      
      // New Mithila Dark Theme Palette
      'bg-deep': '#0B1020',  // midnight indigo
      'ink': '#FDE68A',      // mithila parchment tint for text-muted
      'rose': '#E11D48',     // madhubani pink/rose
      'haldi': '#F59E0B',    // turmeric orange
      'paan': '#22C55E',     // leaf green
      'peacock': '#06B6D4',  // peacock blue
      'cream': '#FFF7E6',    // soft cream for light-mode
      'slate-50': '#f8fafc',
      'slate-100': '#f1f5f9',
      'slate-200': '#e2e8f0',
      'slate-300': '#cbd5e1',
      'slate-400': '#94a3b8',
      'slate-500': '#64748b',
      'slate-600': '#475569',
      'slate-700': '#334155',
      'slate-800': '#1e293b',
      'slate-900': '#0f172a',
      
      // Original colors (keeping for compatibility)
      'blue': '#0075FF',
      "lightblue": "#DAEBFF",
      'lightgrey': '#AEC7E4',
      'navyblue': '#002834',
      'beach': '#8EA9C1',
      'circlebg' : "rgba(77, 213, 143, 0.25)",
      'darkblue' : ' #000321',
      'offwhite' : 'rgba(255, 255, 255, 0.75);',
      'bordertop' : 'rgba(196, 196, 196, 0.5);',
      'blue-500' : '#0075FF',
      'darkgray' : '#90A3B4',
      'babyblue' : '#E2F3F9',
      'grey500': '#ECECEC',
      'bluegray' : "#7D82A1",
      'bluegrey' : "#7C8F9E",
      'midnightblue' : '#183B56',
      'midblue' : '#00276F',
      'bluebg' : "rgba(47, 184, 227, 0.2)",
      'border' : "rgba(128, 135, 137, 0.35)"
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
      '65xl': ['65px', { lineHeight: '1' }],
      '80xl': ['80px', { lineHeight: '6rem' }],
    },
    extend: {
      // Adding dark mode variants for Mithila colors
      backgroundColor: {
        'dark-mithila': '#004D40', // Dark peacock green
        'dark-card': '#2D3748', // Dark card background
      },
      textColor: {
        'dark-mithila-text': '#E2E8F0', // Light text for dark mode
      },
      // Custom gradient for navbar
      backgroundImage: {
        'navbar-gradient': 'linear-gradient(to bottom, rgba(11,16,32,.85) 0%, rgba(11,16,32,.65) 100%)',
      }
    },
  },
  plugins: [],
}