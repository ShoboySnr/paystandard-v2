import type { Config } from 'tailwindcss';

const config: Config = {
  prefix: 'tw-',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      xs: '0px',
      sm: '600px',
      md: '900px',
      lg: '1248px',
      xl: '1536px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        blue: '#3860FF',
        'deep-blue': '#152461',
        'dark-gray': '#505069',
        'light-blue': '#88A0FF',
        'light-gray': '#DCDCE1',
        black: '#090C1A',
        white: '#FFFFFF',
        red: '#F22C2C',
        // buttons
        'btn-outline-text': '#1C3080',
      },
      backgroundImage: {
        'gradient-blue-deep-blue': 'linear-gradient(to right, #3860FF, #152461)',
        'gradient-light-blue-deep-blue': 'linear-gradient(to right, #88A0FF, #152461)',
        'gradient-blue-black': 'linear-gradient(to right, #3860FF, #090C1A)',
        'footer-gradient': 'linear-gradient(0deg, #152461 0%, #090C1A 100%)',
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
