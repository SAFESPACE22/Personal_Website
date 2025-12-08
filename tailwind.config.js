
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                obsidian: '#0a0a0a', // Off-black
            },
            fontFamily: {
                // We can add custom fonts here later
            }
        },
    },
    plugins: [],
}
