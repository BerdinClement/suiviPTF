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
        f_red: '#EA5C5C',
        f_green: '#66D478',
        f_orange: '#FFA95A',
        blue_login: '#EBEEF6',
        back_login: '#2B2D41',
        background: "#F9F9F9"
      }
    },
  },
  plugins: [],
}
export default config
