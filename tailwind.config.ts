import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#111827",
                  
          "secondary": "#f3f4f6",
                  
          "accent": "#f3e8ff",
                  
          "neutral": "#1f1825",
                  
          "base-100": "#e9e8ed",
                  
          "info": "#4aa0de",
                  
          "success": "#22c55e",
                  
          "warning": "#f8a116",
                  
          "error": "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
export default config
