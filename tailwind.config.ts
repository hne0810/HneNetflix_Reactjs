import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage :{
        'banner': 'url(./src/assets/images/temp-1.jpeg)'
      }
    },
  },
  plugins: [],
} satisfies Config;
