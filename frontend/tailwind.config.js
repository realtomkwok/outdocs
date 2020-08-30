module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1028px',
      'xl': '1440px',
    },
    fontFamily: {
      'sans': [
        "Nimbus Sans Ext D",
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
    extend: {},
  },
  variants: {
    textDecoration: ['responsive', 'hover', 'focus']
  },
  plugins: [],
}
