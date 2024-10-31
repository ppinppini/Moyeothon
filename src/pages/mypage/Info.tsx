import { useEffect, useState } from 'react';
import { apiClient } from '../../api/api';
import { useNavigate } from 'react-router-dom';

const Info = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [uid, setUid] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const uid = localStorage.getItem('uid');
        if (uid) {
          setUid(uid);
          const response = await apiClient.get(`/user/${uid}`);
          const { nickname, email } = response.data;
          setNickname(nickname);
          setEmail(email);
        }
      } catch (error) {
        console.error('유저 데이터 불러오기 실패:', error);
      }
    };
    fetchUserData();
  }, []);

  const handleNicknameClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleBlur = async () => {
    try {
      await apiClient.put(`/user/${uid}`, { nickname });
      setIsEditing(false);
    } catch (error) {
      console.error('닉네임 수정 실패:', error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await apiClient.delete(`/user/${uid}`);
      navigate('/login');
    } catch (error) {
      console.error('탈퇴 실패:', error);
    }
  };

  return (
    <div className="flex w-full my-5 bg-light h-full items-center justify-center relative">
      <div className="w-4/5 h-24 bg-white py-4 pl-4 pr-16 rounded-lg focus:outline-none focus:ring-0 relative">
        <div className="flex items-center mobile:text-sm tablet:text-base">
          <span className="mr-2">닉네임:</span>
          {isEditing ? (
            <input
              type="text"
              value={nickname}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className="border-b border-gray-300 focus:outline-none focus:border-blue-500"
              autoFocus
            />
          ) : (
            <div onClick={handleNicknameClick} className="cursor-pointer">
              {nickname}
            </div>
          )}
        </div>
        <div className="mobile:text-sm tablet:text-base">
          이메일: &nbsp;{email}
        </div>
        <button
          className="absolute bottom-1 right-4 text-xs transition-transform duration-300 hover:scale-110"
          onClick={handleDeleteAccount}
        >
          탈퇴하기
        </button>
      </div>
    </div>
  );
};

export default Info;
