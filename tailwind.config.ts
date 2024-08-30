import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#3760ff",
        "deep-blue": "#152461",
        "dark-gray": "#505069",
        "light-blue": "#88A0FF",
        "light-gray": "#DCDCE1",
        black: "#090C1A",
        white: "#FFFFFF",
      },
      backgroundImage: {
        "gradient-blue-deep-blue": "linear-gradient(to right, #3860FF, #152461)",
        "gradient-light-blue-deep-blue": "linear-gradient(to right, #88A0FF, #152461)",
        "gradient-blue-black": "linear-gradient(to right, #3860FF, #090C1A)",
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [],
};
export default config;
