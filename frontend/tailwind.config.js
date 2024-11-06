/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        center: true,
        padding: "1rem", // Adjust padding as needed
        screens: {
          sm: "100%", // Full width on small screens
          md: "100%", // Full width on medium screens
          lg: "1024px", // Custom width for large screens
          xl: "1280px", // Custom width for extra-large screens
          "2xl": "1280px", // Custom width for 2xl screens
        },
      },
    },
  },
  plugins: [],
};
