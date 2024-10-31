import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface BucketItem {
  title: string;
  description: string;
}

const bucketItems: BucketItem[] = [
  {
    title: '비 오는 날 포장마차 가기🎉',
    description:
      '비 오는 날 낭만 가득하게 포장마차에서 소주 드실 분 쪽지 주세요~',
  },
  {
    title: '한강에서 캔맥 마시기',
    description:
      '아직 한강에서 캔맥주를 안 마셔봤네요,, 저랑 같이 한강 가실분?!',
  },
  {
    title: '밤에 돗자리 들고 하늘 잘 보이는 잔디밭 찾아 누워서 별 보기',
    description: '돗자리도 제가 들고 갑니다 ㅎㅎ 낭만 찾아봐~',
  },
  {
    title: '번지 점프 도전!!',
    description: '혼자 도전하기는 무서워서..! 같이 도전해봐요..!!!!!',
  },
  {
    title: '옥상에서 야경보며 맥주 한잔🍺',
    description: '맥주 좋아합니다. 맥주 좋아하시는 분 찾아요.',
  },
  {
    title: '목적지 없이 드라이브',
    description:
      '쏘카로 차 빌려서 무작정 창문 열고 드라이브 해보는게 제 버킷리스트입니다! 저 운전 잘하는데 함께하실 분?',
  },
  {
    title: '목적지 없이 드라이브',
    description:
      '쏘카로 차 빌려서 무작정 창문 열고 드라이브 해보는게 제 버킷리스트입니다! 저 운전 잘하는데 함께하실 분?',
  },
  {
    title: '목적지 없이 드라이브',
    description:
      '쏘카로 차 빌려서 무작정 창문 열고 드라이브 해보는게 제 버킷리스트입니다! 저 운전 잘하는데 함께하실 분?',
  },
  {
    title: '목적지 없이 드라이브',
    description:
      '쏘카로 차 빌려서 무작정 창문 열고 드라이브 해보는게 제 버킷리스트입니다! 저 운전 잘하는데 함께하실 분?',
  },

  {
    title: '목적지 없이 드라이브',
    description:
      '쏘카로 차 빌려서 무작정 창문 열고 드라이브 해보는게 제 버킷리스트입니다! 저 운전 잘하는데 함께하실 분?',
  },
  {
    title: '목적지 없이 드라이브',
    description:
      '쏘카로 차 빌려서 무작정 창문 열고 드라이브 해보는게 제 버킷리스트입니다! 저 운전 잘하는데 함께하실 분?',
  },
]; //더미데이터

const BucketComponent = () => {
  const navigate = useNavigate();
  const [popupData, setPopupData] = useState<BucketItem | null>(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleIconClick = () => {
    navigate('/letter'); // 연결 링크 수정 필요
  };

  const handleItemClick = (item: BucketItem) => {
    setPopupData(item);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setPopupData(null);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div>
        <div className="flex flex-wrap mobile:gap-2 tablet:gap-2 gap-4 justify-center ">
          {bucketItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between mobile:w-1/2 mobile:min-w-[150px] mobile:max-w-[150px] tablet:min-w-[300px] tablet:max-w-[300px] min-w-[300px] max-w-[300px] min-h-[150px] mb-4 hover:-translate-y-6 hover:transition-transform duration-300 cursor-pointer "
              onClick={() => handleItemClick(item)}
            >
              <div>
                <h3 className="mobile:text-sm tablet:text-lg font-semibold mb-2 ">
                  {item.title}
                </h3>
                <p className="text-gray-600 tablet:text-lg mobile:text-xs">
                  {item.description}
                </p>
              </div>
              <i
                className="fa-solid fa-envelope self-end mt-2 text-deep text-2xl hover:-translate-y-2 mobile:text-lg"
                onClick={handleIconClick}
              ></i>
            </div>
          ))}
        </div>
      </div>

      {isPopupVisible &&
        popupData && ( //팝업
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
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 "
                onClick={closePopup}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <h3 className="text-lg font-semibold mb-2 mb-4 text-left mobile:text-base">
                {popupData.title}
              </h3>
              <p className="text-gray-600 mobile:text-sm">
                {popupData.description}
              </p>
            </div>
          </div>
        )}
    </div>
  );
};

export default BucketComponent;
