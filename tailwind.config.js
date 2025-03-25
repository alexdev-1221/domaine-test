
/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: [
      './**/*.liquid',
  ],
  theme: {
    extend: {
      spacing: {
        '0': '0px',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px'
      },
      colors: {
        'orange': '#FF6633',
        'green': '#006600',
        'blue': '#00639C',
        'yellow': '#FCE78D',
        'pink': '#FFCCFF',
        'navy': '#19264B',
        'black': '#111111',
        'blue-100': '#0A4874',
        'red': '#FF0000',
        'grey': '#E8E8E8'
      }
    }
  },
  safelist: [
    {
      pattern: /tw-bg-(orange|green|blue|yellow|pink|navy)/,
    }
  ]
}
