import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';

const KRedirect = () => {
  const navigate = useNavigate();
  // console.log('Authorization code:', code);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    console.log('Authorization code:', code);

    // const fetchToken = async (code: string) => {
    //   if (!code) return;
    //   const response = await fetch(`/api/user/oauth2/code/kakao?code=${code}`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ code }),
    //   });
    //   const data = await response.json();
    //   // console.log(data);
    //   localStorage.setItem('token', data.token);
    //   localStorage.setItem('uid', data.user.uid);
    //   // localStorage.setItem('userId', data.user.id);
    //   navigate('/home');
    // };
    const fetchToken = async (code: string) => {
      if (!code) return;

      try {
        const response = await fetch(
          `/user/oauth2/code/kakao?code=${code}`,
          // {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/json',
          //   },
          //   body: JSON.stringify({ code }),
          // },
        );

        if (!response.ok) {
          console.error('Error:', response.status);
          throw new Error('Failed to fetch');
        }

        // Content-Type이 JSON인지 확인
        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          localStorage.setItem('token', data.token);
          localStorage.setItem('uid', data.user.uid);
          navigate('/home');
        } else {
          // JSON이 아닐 경우 오류 처리
          const text = await response.text();
          console.error('Response is not JSON:', text);
          throw new Error('Received non-JSON response');
        }
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    if (code) {
      fetchToken(code);
    }
  }, []);

  return (
    <>
      <div>
        <Loading />
      </div>
    </>
  );
};

export default KRedirect;
