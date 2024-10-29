import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
const GRedirect = () => {
    const navigate= useNavigate()
  const code = new URL(window.location.href).searchParams.get('code');
  console.log(code);

  useEffect(() => {
    const fetchToken = async () => {
      if (!code) return;
      
      try {
        const response = await fetch('https://accounts.google.com/o/oauth2/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            code: code,
            client_id: import.meta.env.VITE_APP_GOOGLE_AUTH_CLIENT_ID,
            client_secret: import.meta.env.VITE_APP_GOOGLE_CLIENT_SECRET,
            redirect_uri: import.meta.env.VITE_APP_GOOGLE_REDIRECT_URI,
            grant_type: 'authorization_code',
          }),
        });

        const data = await response.json();
        console.log('Access Token:', data);
        localStorage.setItem('access_token', data.access_token);
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    fetchToken();
    navigate('/')
  }, [code]);

  return (
    <>
      <h1>GRedirect Component</h1>
    </>
  );
};

export default GRedirect;
