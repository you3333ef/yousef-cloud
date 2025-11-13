/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        syrian: {
          primary: '#054239',
          primaryLight: '#428177',
          primaryDark: '#002623',
          secondary: '#b9a779',
          secondaryLight: '#edebe0',
          secondaryDark: '#988561',
          accent: '#6b1f2a',
          neutralLight: '#ffffff',
          neutralDark: '#3d3a3b',
          gold: '#b9a779',
          green: '#054239',
          sand: '#edebe0',
        },
      },
      fontFamily: {
        'arabic': ['Qamra', 'Amiri', 'Tahoma', 'Arial', 'sans-serif'],
        'arabic-fallback': ['Tahoma', 'Arial', 'sans-serif'],
        'latin': ['Georgia', 'Times New Roman', 'serif'],
        'latin-fallback': ['Arial', 'sans-serif'],
        'mono': ['Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      borderRadius: {
        'modern': '12px',
        'modern-lg': '20px',
        'modern-xl': '28px',
      },
      boxShadow: {
        'syrian': '0 4px 20px rgba(5, 66, 57, 0.15)',
        'syrian-md': '0 6px 30px rgba(5, 66, 57, 0.18)',
        'syrian-lg': '0 8px 40px rgba(5, 66, 57, 0.22)',
        'syrian-xl': '0 12px 60px rgba(5, 66, 57, 0.25)',
        'glow-gold': '0 0 20px rgba(185, 167, 121, 0.4)',
        'glow-green': '0 0 20px rgba(5, 66, 57, 0.4)',
      },
      backgroundImage: {
        'gradient-syrian': 'linear-gradient(135deg, #054239 0%, #428177 100%)',
        'gradient-syrian-reverse': 'linear-gradient(315deg, #054239 0%, #428177 100%)',
        'gradient-syrian-gold': 'linear-gradient(135deg, #b9a779 0%, #988561 100%)',
        'pattern-syrian': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23054239' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
