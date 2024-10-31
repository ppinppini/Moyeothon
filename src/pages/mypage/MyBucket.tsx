import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiClient } from '../../api/api';
import { BucketItem } from '../../types/types';

const MyBucket = () => {
  const navigate = useNavigate();
  const [bucketItems, setBucketItems] = useState<BucketItem[]>([]);

  useEffect(() => {
    const fetchBucketItems = async () => {
      try {
        const uid = localStorage.getItem('uid');
        if (uid) {
          const response = await apiClient.get(`/api/user/bucket/${uid}`);
          setBucketItems(response.data);
        }
      } catch (error) {
        console.error('버킷 리스트 불러오기 실패:', error);
      }
    };
    fetchBucketItems();
  }, []);

  const handleIconClick = (id: number) => {
    navigate(`/editBucket/${id}`); // 수정 화면으로 이동
  };

  const handleDelete = async (id: number) => {
    const uid = localStorage.getItem('uid');
    try {
      await apiClient.delete(`/api/bucket/${uid}/${id}`);
      setBucketItems((prevItems) => prevItems.filter((item) => item.id !== id)); // 삭제한 아이템을 제외한 새로운 배열 생성
    } catch (error) {
      console.error('버켓 리스트 삭제 실패:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div>
        <div className="flex flex-wrap mobile:gap-2 tablet:gap-2 gap-4 justify-center ">
          {bucketItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between mobile:min-w-[160px] mobile:max-w-[160px] tablet:min-w-[300px] tablet:max-w-[300px] min-w-[300px] max-w-[300px] min-h-[160px] mb-4 hover:-translate-y-6 hover:transition-transform duration-300 cursor-pointer"
            >
              <div>
                <h3 className="text-lg font-semibold mb-2 mobile:text-sm tablet:text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-600 mobile:text-sm tablet:text-lg">
                  {item.content}
                </p>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  className="bg-deep text-white text-xs rounded-full px-2 py-1 hover:-translate-y-2 transition-transform duration-300"
                  onClick={() => handleIconClick(item.id)} // 수정 버튼 클릭 시 수정 화면으로 이동
                >
                  수정
                </button>
                <button
                  className="bg-deep text-white text-xs rounded-full px-2 py-1 hover:-translate-y-2 transition-transform duration-300"
                  onClick={() => handleDelete(item.id)}
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBucket;
