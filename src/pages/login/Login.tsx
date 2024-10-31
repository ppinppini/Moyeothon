import kakaoLoginBtn from '../../assets/kakao_login_medium_narrow.png';
import kakaoLoginBtn1 from '../../assets/kakao_login_btn.svg';
import googleLoginBtn from '../../assets/google_login_btn.png';
import logo from '../../assets/logo.png';
const K_REST_API_KEY = import.meta.env.VITE_APP_REST_API_KEY;
const K_REDIRECT_URI = import.meta.env.VITE_APP_REDIRECT_URI;
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?
		client_id=${import.meta.env.VITE_APP_GOOGLE_AUTH_CLIENT_ID}
		&redirect_uri=${import.meta.env.VITE_APP_GOOGLE_REDIRECT_URI}
		&response_type=code
		&scope=email profile`;

const Login = () => {
  // console.log(kakaoURL);
  //카카오 로그인 함수
  const kakaoLogin = () => {
    window.location.href = kakaoURL;
    console.log('리다이렉션 페이지로 가십시오!!');
    // window.location.href = 'http://localhost:5173/oauth2/authorization/kakao ';
  };
  //구글 로그인 함수
  const googleLogin = () => {
    window.location.href = googleURL;
  };

  return (
    <div className="bg-gradient-to-b from-[#88A5D5] to-white h-screen flex flex-col justify-center items-center gap-4 ">
      <div>
        <img src={logo} alt="로고이미지" />
      </div>

      <div
        className="cursor-pointer bg-[#FEE500] font-bold rounded-3xl"
        onClick={kakaoLogin}
      >
        <img
          className="w-[300px]"
          src={kakaoLoginBtn1}
          alt="카카오 로그인 버튼"
        />
      </div>
      <div className="cursor-pointer" onClick={googleLogin}>
        <img
          src={googleLoginBtn}
          className="w-[300px]"
          alt="구글 로그인 버튼"
        />
      </div>
    </div>
  );
};
export default Login;
