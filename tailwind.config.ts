import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ebf2ff',
          600: '#1A56DB', // Màu chính của bạn
          700: '#1546b5',   // Nền trắng sạch sẽ
          slate: {
            50: '#F8FAFC',
            600: '#475569',
            900: '#0F172A',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Đảm bảo bạn đã import Inter trong index.css
      },
      borderRadius: {
        'button': '10px', // Nằm giữa 8px - 12px theo đề xuất
      },
      lineHeight: {
        'relaxed': '1.6',
      }
    },
  },
  plugins: [],
}
export default config