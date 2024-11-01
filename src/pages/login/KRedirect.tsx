import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KRedirect = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  // console.log('Authorization code:', code);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    // console.log('Authorization code:', code);

    const fetchToken = async (code) => {
      if (!code) return;
      const response = await fetch(`/api/user/oauth2/code/kakao?code=${code}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });
      const data = await response.json();
      // console.log(data);
      localStorage.setItem('token', data.token);
      localStorage.setItem('uid', data.user.uid);
      // localStorage.setItem('userId', data.user.id);
      navigate('/');
    };

    if (code) {
      fetchToken(code);
    }
  }, []);

  return (
    <>
      <h1>로그인 중 입니다..</h1>
    </>
  );
};

export default KRedirect;
