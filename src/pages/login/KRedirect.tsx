import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';

const KRedirect = () => {
  const navigate = useNavigate();
  // console.log('Authorization code:', code);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    // console.log('Authorization code:', code);

    // const fetchToken = async (code: string) => {
    //   try {
    //     if (!code) return;
    //     const response = await apiClient.post(
    //       `user/oauth2/code/kakao?code=${code}`,
    //       {
    //         code: code,
    //       },
    //     );
    //     const data = response.data;
    //     localStorage.setItem('token', data.token);
    //     localStorage.setItem('uid', data.user.uid);
    //     navigate('/');
    //   } catch (error) {
    //     console.error('Error fetching token:', error);
    //     // 에러 처리
    //   }
    // };
    const fetchToken = async (code: string) => {
      if (!code) return;
      const response = await fetch(
        `https://newteamsgoody.shop/user/oauth2/code/kakao?code=${code}`
        //   {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({ code }),
        // }
      );
      const data = await response.json();
      // console.log(data);
      localStorage.setItem('token', data.token);
      localStorage.setItem('uid', data.user.uid);
      // localStorage.setItem('userId', data.user.id);
      navigate('/home');
    };
    if (code) {
      fetchToken(code);
    }
  }, []);

  return (
    <>
      <h1>
        <Loading />
      </h1>
    </>
  );
};

export default KRedirect;
