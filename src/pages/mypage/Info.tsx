import { useState } from 'react';

const Info = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState('홍길동'); //더미 데이터

  const handleNicknameClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setNickname(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
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
          이메일: newTeams@mail.com
        </div>

        <button className="absolute bottom-1 right-4 text-xs transition-transform duration-300 hover:scale-110">
          탈퇴하기
        </button>
      </div>
    </div>
  );
};

export default Info;
