/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html','./src/**/*.{html,js,jsx,ts,tsx'],
    theme: {
        extend: {
            colors: {
                primary: "#003366", // Deep blue
                accent: "#e91e63",  // Pink
                secondary: "#f9f9fb", // Light background
            },
            fontFamily: {
                heading: ["Cinzel", "serif"],
                body: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};

