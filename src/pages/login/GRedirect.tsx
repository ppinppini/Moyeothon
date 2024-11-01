import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const GRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    const fetchToken = async (code: string) => {
      if (!code) return;

      const response = await fetch(
        `/api/user/oauth2/code/google?code=${code}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code }),
        },
      );

      const data = await response.json();

      localStorage.setItem('token', data.token);
      localStorage.setItem('uid', data.user.uid);

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

export default GRedirect;
