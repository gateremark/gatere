/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                "3xl": "0 8px 30px 0 rgba(31, 38, 135, 0.37)",
                "large": "0 0 25px rgba(0, 0, 0, 0.2)",
            },
        },
    },
    plugins: [],
};
