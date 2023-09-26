import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: '#9C7AE4',
        white: '#ffffff',
        grey: '#EBEEF6',
        deep_blue: '#2B2D41',
        green: '#A8E0A7',
      }
    },
  },
  plugins: [],
}
export default config
