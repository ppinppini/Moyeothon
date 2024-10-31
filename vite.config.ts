import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 5173,
    // proxy: {
    //   '/user/oauth2/code/kakao': {
    //     target: 'https://newteamsgoody.shop',
    //     changeOrigin: true,
    //     secure: true, // https를 사용하는 경우에만 추가 (개발 환경에서 필요시)
    //     rewrite: (path) =>
    //       path.replace(
    //         /^\/user\/oauth2\/code\/kakao/,
    //         '/user/oauth2/code/kakao',
    //       ),
    //   },
    // },
    proxy: {
      '/api/user/oauth2/code/kakao': {
        target: 'https://newteamsgoody.shop',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api\/user\/oauth2\/code\/kakao/, '/user/oauth2/code/kakao'),
      },
    },
  },
});
