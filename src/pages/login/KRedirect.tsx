import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

const KRedirect = () => {
    const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  console.log('Authorization code:', code);
   
  useEffect(() => {
    const fetchToken = async () => {
      if (!code) return; // 코드가 없는 경우 함수 종료

      try {
        const response = await fetch('https://kauth.kakao.com/oauth/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
          body: new URLSearchParams({
            grant_type: 'authorization_code',
            client_id: import.meta.env.VITE_APP_REST_API_KEY, // 환경변수에서 API 키 가져오기
            redirect_uri: import.meta.env.VITE_APP_REDIRECT_URI, // 환경변수에서 리다이렉트 URI 가져오기
            code: code, // 인가 코드
          }).toString(), // URLSearchParams를 문자열로 변환
   
        });

        if (!response.ok) {
          throw new Error('토큰 요청이 실패했습니다.'); // 응답 실패 시 오류 발생
        }

        const data = await response.json();
        console.log('토큰 응답 데이터:', data);
        
        // 액세스 토큰을 로컬 스토리지에 저장 (필요시)
        localStorage.setItem('access_token', data.access_token);

        // 사용자 정보를 가져오기 위한 다음 요청을 여기서 추가할 수 있음

      } catch (error) {
        console.error('토큰 요청 오류 발생:', error);
      }
    };

    fetchToken();
    navigate('/')
  }, [code]);

  return (
    <>
      <h1>로그인 중 입니다..</h1>
    </>
  );
};

export default KRedirect;
