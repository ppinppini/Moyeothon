import type { Config } from 'tailwindcss';
import withMT from '@material-tailwind/react/utils/withMT';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        deep: '#304A6E', // 사용자 정의 색상 (예: primary 파란색)
        middle: '#C0D0EF', // 사용자 정의 색상 (예: secondary 보라색)
        light: '#E4EBF1',
      },

      screens: {
        mobile: '374px',
        tablet: '745px',
        desktop: '1921px',
      },

      fontFamily: {
        kaisei: ['"Kaisei Decol"', 'serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
    },
    plugins: [require('@tailwindcss/typography')],
  },
};

export default withMT(config);
