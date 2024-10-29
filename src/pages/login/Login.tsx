import kakaoLoginBtn from '../../assets/kakao_login_btn.png';
import googleLoginBtn from '../../assets/google_login_btn.png';
const K_REST_API_KEY = import.meta.env.VITE_APP_REST_API_KEY;
const K_REDIRECT_URI = import.meta.env.VITE_APP_REDIRECT_URI;
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?
		client_id=${import.meta.env.VITE_APP_GOOGLE_AUTH_CLIENT_ID}
		&redirect_uri=${import.meta.env.VITE_APP_GOOGLE_REDIRECT_URI}
		&response_type=code
		&scope=email profile`;

const Login = () => {
  //카카오 로그인 함수
  const kakaoLogin = () => {
    window.location.href = kakaoURL;
  };
  //구글 로그인 함수 
  const googleLogin = () => {
    window.location.href = googleURL;
  };

  return (
    <>
      <h1>Login Component</h1>
      <div className="cursor-pointer" onClick={kakaoLogin}>
        <img src={kakaoLoginBtn} alt="카카오 로그인 버튼" />
      </div>
      <div className="cursor-pointer" onClick={googleLogin}>
        <img src={googleLoginBtn} alt="구글 로그인 버튼" />
      </div>
    </>
  );
};
export default Login;
