/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-25': '#FCFCFD',
        'gray-50': '#F9FAFB',
        'gray-75': '#F6F6F7',
        'gray-100': '#F2F4F7',
        'gray-200': '#EAECF0',
        'gray-300': '#D0D5DD',
        'gray-400': '#98A2B3',
        'gray-500': '#667085',
        'gray-600': '#475467',
        'gray-700': '#344054',
        'gray-800': '#1D2939',
        'gray-900': '#101828',
        'orange-500': '#FF5613',
        'purple-500': '#4B69FD'
      },
      screens: {
        xs: '430px',
        xl: '1440px'
      },
      spacing: {
        368: '23rem'
      },
      fontFamily: {
        inter: ['Inter'],
        raleway: ['Raleway']
      },
      fontSize: {
        '6xl': '3.75rem'
      }
    }
  },
  plugins: []
}
