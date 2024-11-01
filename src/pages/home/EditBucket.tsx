import React, { useState, useEffect } from 'react';
import { Textarea, Button, Input } from '@material-tailwind/react';
import { useNavigate, useParams } from 'react-router-dom';
import { apiClient } from '../../api/api';

const EditBucket = () => {
  const [isPublic, setIsPublic] = useState(true);
  const [bucketTitle, setBucketTitle] = useState('');
  const [bucketContent, setBucketContent] = useState('');
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>(); //url에서 아이디 추출

  useEffect(() => {
    const fetchData = async () => {
      const uid = localStorage.getItem('uid');
      if (uid && id) {
        try {
          const { data } = await apiClient.get(`/api/bucket/${uid}/${id}`);
          setBucketTitle(data.title || '');
          setBucketContent(data.content || '');
          setIsPublic(data.public ?? true); //undefined 또는 null이면 true 반환
        } catch (error) {
          console.error('버킷리스트 데이터 가져오기 실패:', error);
        }
      }
    };
    fetchData();
  }, [id]);

  const handleEdit = async () => {
    const uid = localStorage.getItem('uid');
    if (uid && id) {
      try {
        await apiClient.put(`/api/bucket/${uid}/${id}`, {
          title: bucketTitle,
          content: bucketContent,
          isPublic: isPublic,
        });
        navigate('/mypage');
      } catch (error) {
        console.error('버킷리스트 수정 실패:', error);
      }
    }
  };

  return (
    <main className="w-full bg-light h-dvh p-4 flex items-center justify-center relative">
      <div className="w-full flex flex-col gap-4">
        <Input
          label="나의 버킷리스트"
          required
          value={bucketTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setBucketTitle(e.target.value)
          }
          className="w-full bg-white mb-4"
        />
        <div className="relative mb-4">
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
                onChange={() => setIsPublic((prev) => !prev)} //boolean 값 반전
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:bg-deep">
                <div
                  className={`absolute top-0.5 left-[2px] h-5 w-5 rounded-full bg-white border border-gray-300 transition-transform ${
                    isPublic ? 'translate-x-5' : ''
                  }`}
                />
              </div>
            </label>
          </div>
        </div>
        <div className="flex justify-end w-full">
          <Button
            className={`${
              bucketTitle && bucketContent
                ? 'bg-deep text-white'
                : 'bg-white text-black'
            } block rounded-full hover:-translate-y-2 hover:transition-transform duration-300`}
            type="button"
            onClick={handleEdit}
          >
            저장
          </Button>
        </div>
      </div>
    </main>
  );
};

export default EditBucket;
