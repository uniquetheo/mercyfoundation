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
        "primary-yellow": "#F2C94C",
        "secondary-yellow": "#F2C94C",
        "custom-black": "#0B0706",
        "dark-slate": "#1D2130",
        "dark-gray": "#525560",
        "light-gray": "#E5E5E5",
        "light-1": "#EFF7F2",
        "light-2": "#EBF0F9",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "hero-image": "url('/images/children-with-bread.jpg')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F2C94C",

          secondary: "#1D2130",

          accent: "#00ffff",

          neutral: "#525560",

          "base-100": "#ffffff",

          info: "#0000ff",

          success: "#00ff00",

          warning: "#00ff00",

          error: "#ff0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
