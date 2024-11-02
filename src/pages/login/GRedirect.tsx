import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
const GRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    const fetchToken = async (code: string) => {
      if (!code) return;

      const response = await fetch(
        `https://newteamsgoody.shop/user/oauth2/code/google?code=${code}`
        // {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({ code }),
        // },
      );

      const data = await response.json();

      localStorage.setItem('token', data.token);
      localStorage.setItem('uid', data.user.uid);

      navigate('/home');
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

export default GRedirect;
