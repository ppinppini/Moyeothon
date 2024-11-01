import React, { useState, useEffect } from 'react';
import { Textarea, Button, Input } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { apiClient } from '../../api/api';

const AddBucket = () => {
  const [isPublic, setIsPublic] = useState(true);
  const [bucketTitle, setBucketTitle] = useState('');
  const [bucketContent, setBucketContent] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const popup = document.getElementById('popup');
      const button = document.getElementById('circle-button');
      if (
        popup &&
        !popup.contains(event.target as Node) &&
        button &&
        !button.contains(event.target as Node)
      ) {
        setShowPopup(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSave = async () => {
    const uid = localStorage.getItem('uid');
    if (uid) {
      // const bucketData = {
      //   title: bucketTitle,
      //   content: bucketContent,
      //   isPublic: isPublic,
      // };
      // console.log('버킷리스트 데이터:', bucketData);
      try {
        // const response =
        await apiClient.post(`/api/bucket/create/${uid}`, {
          title: bucketTitle,
          content: bucketContent,
          isPublic: isPublic,
        });
        // console.log('버킷리스트 생성 성공:', response.data);
        navigate('/home');
      } catch (error) {
        console.error('버킷리스트 생성 실패:', error);
      }
    }
  };

  return (
    <main className="w-full bg-light h-dvh p-4 flex items-center justify-center relative">
      <div className="w-full flex flex-col gap-4">
        <div className="mb-4">
          <Input
            label="나의 버킷리스트"
            required
            value={bucketTitle}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setBucketTitle(e.target.value)
            }
            className="w-full bg-white"
          />
        </div>
        <div className="mb-4 relative">
          <Textarea
            label="내용"
            rows={16}
            required
            value={bucketContent}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setBucketContent(e.target.value)
            }
            className="w-full bg-white"
          />
          <div className="absolute bottom-4 right-3 flex items-center gap-2">
            <span className="text-gray-600">
              {isPublic ? '공개' : '비공개'}
            </span>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isPublic}
                onChange={() => setIsPublic(!isPublic)}
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:bg-deep">
                <div
                  className={`absolute top-0.5 left-[2px] h-5 w-5 rounded-full bg-white border border-gray-300 transition-transform ${isPublic ? 'peer-checked:left-11 peer-checked:border-white translate-x-5' : ''}`}
                />
              </div>
            </label>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <button
            id="circle-button"
            className="w-12 h-12 rounded-full bg-deep flex items-center justify-center text-white shadow-lg hover:-translate-y-6 hover:transition-transform duration-300"
            onClick={() => setShowPopup(!showPopup)}
          >
            AI
          </button>
          <div className="hover:-translate-y-6 hover:transition-transform duration-300">
            <Button
              className={
                bucketTitle && bucketContent
                  ? 'bg-deep text-white block rounded-full'
                  : 'bg-white text-black block rounded-full'
              }
              type="button"
              onClick={handleSave}
            >
              저장
            </Button>
          </div>
        </div>
      </div>
      {showPopup && (
        <div
          id="popup"
          className="absolute left-7 bottom-60 w-100 h-1/5 bg-[#EEEEEE] rounded-lg shadow-lg flex items-center justify-center p-4"
        >
          <p>‘새벽에 러닝하기’ 버킷리스트는 어떤가요?</p>
        </div>
      )}
    </main>
  );
};

export default AddBucket;
