module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        alabaster: '#FAF7F0',
        sand: '#F2ECE1',
        'sand-light': '#F6F2E9',
        borderWarm: '#E2DBD0',
        'borderWarm-subtle': '#EBE5DC',
        ink: '#0F3D3E',
        taupe: '#3D5A5B',
        terracotta: '#E85D3F',
        'terracotta-hover': '#D1492C',
        coral: '#A63F2B',
        'coral-hover': '#87311F',
        amberBurnt: '#A63F2B',
        sage: '#0F3D3E',
        'sage-bg': '#E6F0EF',
        'terracotta-bg': '#FDF0EC',
        'amber-bg': '#FDF4EC',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['"Newsreader"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
      },
      boxShadow: {
        'card-subtle': '0 1px 3px rgba(15, 61, 62, 0.04), 0 4px 12px -2px rgba(15, 61, 62, 0.05)',
        'card-hover': '0 12px 32px -8px rgba(15, 61, 62, 0.10), 0 2px 6px rgba(15, 61, 62, 0.04)',
        'button-warm': '0 2px 8px -1px rgba(232, 93, 63, 0.28)',
      },
    },
  },
};