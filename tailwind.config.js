module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "20px",
            },
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#0FCFEC",
                    secondary: "#19D3AE",
                    accent: "#3A4256",
                    neutral: "#3d4451",
                    "accent-content": "#939393",
                    "base-100": "#ffffff",
                },
            },
            "dark",
            "cupcake",
        ],
    },
    plugins: [require("daisyui")],
};
