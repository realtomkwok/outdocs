module.exports = {
    purge: [
        "./src/**/*.js",
        "./src/**/*.jsx",
        "./src/**/*.ts",
        "./src/**/*.tsx",
    ],
    theme: {
        fill: theme => ({
            black: theme("colors.black"),
            white: theme("colors.white"),
            accentColor: theme("colors.accentColor"),
        }),
        screens: {
            sm: "320px",
            md: "768px",
            lg: "1028px",
            xl: "1440px",
        },
        minWidth: {
            "0": "0",
            "1/4": "25%",
            "1/2": "50%",
            "3/4": "75%",
            full: "100%",
        },
        fontFamily: {
            sans: [
                "Nimbus Sans Ext D",
                "Glow Sans SC",
                "Noto Sans SC",
                "Helvetica Neue",
                "Helvetica",
                "system-ui",
                "sans-serif",
            ],
        },
        inset: {
            "0": 0,
            "1": "0.25rem",
            auto: "auto",
        },
        extend: {
            fontSize: {
                heading1: "4rem",
                heading2: "3rem",
                heading3: "2.5rem",
                heading4: "1.5rem",
                subheading: "1.125rem",
                subheadingSmall: "1rem",
                button: "1.125rem",
                body: "1rem",
                tag: "0.875rem",
                tagSmall: `0.5rem`,
            },
            colors: {
                accentColor: "#f5ff00",
                disabled: "#BDBDBD",
                disabledText: "#4f4f4f",
                inactive: "#828282",
            },
        },
    },
    variants: {
        textDecoration: ["responsive", "hover", "focus"],
    },
    plugins: [],
}
