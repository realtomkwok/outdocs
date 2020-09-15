module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1028px',
      'xl': '1440px',
    },
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    fontFamily: {
      'sans': [
        "Nimbus Sans Ext D",
        "Glow Sans SC",
        "Noto Sans SC",
        "Helvetica Neue",
        "Helvetica",
        "system-ui",
        "sans-serif",
      ],
    },
    color: {
      accentColor: "#f5ff00",
    },
    extend: {
      fontSize: {
        'heading1': '4rem',
        'heading2': '3rem',
        'heading3': '2.5rem',
        'heading4': '1.5rem',
        'subheading': '1.125rem',
        'subheadingSmall': '1rem',
        'button': '1.125rem',
        'body': '1rem',
        'tag': '0.875rem',
        'tagSmall': `0.5rem`,
      },
    },
  },
  variants: {
    textDecoration: ['responsive', 'hover', 'focus']
  },
  plugins: [],
}
