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
]; // 더미 데이터

const MyBucket = () => {
  const navigate = useNavigate();
  const handleIconClick = () => {
    navigate('/addBucket'); // 연결 링크 수정 필요
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="px-10">
        <div className="flex flex-wrap gap-4 justify-center ">
          {bucketItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between min-w-[300px] max-w-[300px] min-h-[200px] mb-4 hover:-translate-y-6 hover:transition-transform duration-300 cursor-pointer"
            >
              <div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
              <div className="flex justify-end gap-2">
                {' '}
                {/* Flexbox 추가 및 간격 조정 */}
                <button
                  className="bg-deep text-white text-sm rounded-full px-2 py-1 hover:-translate-y-2 transition-transform duration-300"
                  onClick={handleIconClick}
                >
                  수정
                </button>
                <button className="bg-deep text-white text-sm rounded-full px-2 py-1 hover:-translate-y-2 transition-transform duration-300">
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
