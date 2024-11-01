import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiClient } from '../../api/api';
import { BucketItem } from '../../types/types';
import SearchComponent from './Search';

const BucketComponent = () => {
  const navigate = useNavigate();
  const [bucketItems, setBucketItems] = useState<BucketItem[]>([]);
  const [originalItems, setOriginalItems] = useState<BucketItem[]>([]);
  const [popupData, setPopupData] = useState<BucketItem | null>(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  //true 값만 보이도록 필터링
  const filterPublicItems = (items: BucketItem[]) => {
    return items.filter((item) => item.public);
  };

  useEffect(() => {
    const fetchBucketItems = async () => {
      const uid = localStorage.getItem('uid');
      if (uid) {
        try {
          const response = await apiClient.get(`/api/bucket/all/${uid}`);
          const filteredItems = filterPublicItems(response.data); //필터링 함수
          setBucketItems(filteredItems);
          setOriginalItems(filteredItems);
        } catch (error) {
          console.error('버킷 리스트 불러오기 실패:', error);
        }
      }
    };
    fetchBucketItems();
  }, []);

  const handleIconClick = (user: BucketItem['user']) => {
    navigate('/letter', { state: { user } }); //user 정보를 담아 보냄
  };

  const handleItemClick = (item: BucketItem) => {
    setPopupData(item);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setPopupData(null);
  };

  //검색 값을 반환하는 함수
  const handleSearchResults = (results: BucketItem[]) => {
    const publicResults = filterPublicItems(results); //필터링 함수
    setBucketItems(publicResults.length > 0 ? publicResults : originalItems); //검색 결과 없을 시 원본 배열(전체 버킷리스트)로 반환
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div>
        <SearchComponent onSearchResults={handleSearchResults} />
        <div className="flex flex-wrap mobile:gap-2 tablet:gap-2 gap-4 justify-center ">
          {bucketItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between mobile:w-1/2 mobile:min-w-[150px] mobile:max-w-[150px] tablet:min-w-[300px] tablet:max-w-[300px] min-w-[300px] max-w-[300px] min-h-[150px] mb-4 hover:-translate-y-6 hover:transition-transform duration-300 cursor-pointer"
              onClick={() => handleItemClick(item)}
            >
              <div>
                <h3 className="mobile:text-sm tablet:text-lg font-semibold mb-2 ">
                  {item.title}
                </h3>
                <p className="text-gray-600 tablet:text-lg mobile:text-xs">
                  {item.content}
                </p>
              </div>
              <i
                className="fa-solid fa-envelope self-end mt-2 text-deep text-2xl hover:-translate-y-2 mobile:text-lg"
                onClick={(e) => {
                  e.stopPropagation(); //이벤트 버블링 방지 (부모 요소 이벤트 실행 방지)
                  handleIconClick(item.user);
                }}
              ></i>
            </div>
          ))}
        </div>
      </div>
      {isPopupVisible && popupData && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={closePopup}
          ></div>
          <div
            id="popup"
            className="absolute w-96 h-2/5 bg-[#dddddd] rounded-3xl shadow-lg flex flex-col items-start justify-start px-12 pt-20 mobile:w-80"
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={closePopup}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <h3 className="text-lg font-semibold mb-2 mb-4 text-left mobile:text-base">
              {popupData.title}
            </h3>
            <p className="text-gray-600 mobile:text-sm">{popupData.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BucketComponent;
