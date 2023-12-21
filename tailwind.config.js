/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                "3xl": "0 0 20px -3px #01f53f80",
                "2xl": " 0 0 15px -5px #01f53f80",
                "xl": "inset 0 0 15px -5px #01f53f80",
                large: "0 0 25px rgba(0, 0, 0, 0.2)",
            },
        },
    },
    plugins: [],
};
