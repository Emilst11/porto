import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#181B20',
        primary: '#FFDC6C',
        secondary: '#596881',
        dark: '#252C38'
      }
    },
  },
  plugins: [
  ],
};
export default config;
