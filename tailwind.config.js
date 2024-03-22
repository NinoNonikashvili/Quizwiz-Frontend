/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-25': '#FCFCFD',
        'gray-50': '#F9FAFB',
        'gray-75': '#F6F6F7',
        'gray-80': '#FAFAFA',
        'gray-90': '#f1f2f5',
        'gray-100': '#F2F4F7',
        'gray-200': '#EAECF0',
        'gray-300': '#D0D5DD',
        'gray-400': '#98A2B3',
        'gray-500': '#667085',
        'gray-500-50': '#66708580',
        'gray-600': '#475467',
        'gray-700': '#344054',
        'gray-800': '#1D2939',
        'gray-850': '#808080',
        'gray-900': '#101828',
        'orange-500': '#FF5613',
        'purple-500': '#4B69FD',
        'green-100': '#D1FADF'
      },
      screens: {
        xs: '430px',
        xl: '1440px'
      },
      spacing: {
        368: '23rem',
        74: '4.625rem',
        220: '13.75rem',
        464: '29rem',
        936: '58.5rem',
        394: '24.625rem',
        512: '32rem',
        18: '1.125rem',
        22: '1.375rem',
        26: '1.625rem',
        14: '0.875rem',
        49: '12.25rem'
        // 10: '0.625rem'
      },
      fontFamily: {
        inter: ['Inter'],
        raleway: ['Raleway']
      },
      fontSize: {
        '6xl': '3.75rem'
      },
      lineHeight: {
        'leading-13': '55px'
      }
    }
  },
  plugins: []
}
