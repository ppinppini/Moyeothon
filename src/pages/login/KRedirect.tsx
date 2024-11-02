import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import { apiClient } from '../../api/api';

const KRedirect = () => {
  const navigate = useNavigate();
  // console.log('Authorization code:', code);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    // console.log('Authorization code:', code);

    const fetchToken = async (code: string) => {
      try {
        if (!code) return;
        const response = await apiClient.get(
          `/api/user/oauth2/code/kakao?code=${code}`
        );
        const data = response.data;
        localStorage.setItem('token', data.token);
        localStorage.setItem('uid', data.user.uid);
        navigate('/');
      } catch (error) {
        console.error('Error fetching token:', error);
        // 에러 처리
      }
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
