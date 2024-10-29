import { IconButton } from '@material-tailwind/react';
import { useState } from 'react';
const LetterItem = () => {
  const [isModal, setIsModal] = useState(false);

  const modalHandler = () => {
    setIsModal(!isModal);
  };
  return (
    <>
      <div
        className=" aspect-square relative bg-white p-2 rounded-lg hover:-translate-y-8 hover:transition-transform duration-300 cursor-pointer"
        onClick={modalHandler}
      >
        <div className="text-3xl font-bold">이름</div>
        <div className="bg-middle absolute top-1 right-1">
          <IconButton>
            <i className="fas fa-trash"></i>
          </IconButton>
        </div>
        <h1>목적지 없이 드라이브</h1>
        <p>저도 드라이브 좋아합니다 같이 드라이브가요</p>
      </div>
      <div
        className="aspect-square relative bg-white p-2 rounded-lg hover:-translate-y-8 hover:transition-transform duration-300 cursor-pointer"
        onClick={modalHandler}
      >
        <div className="text-3xl font-bold">이름</div>
        <div className=" absolute top-1 right-1">
          <IconButton className="bg-middle">
            <i className="fas fa-trash"></i>
          </IconButton>
        </div>
        <h1>목적지 없이 드라이브</h1>
        <p>저도 드라이브 좋아합니다 같이 드라이브가요</p>
      </div>
      {isModal && (
        <div className=" mobile:w-80 aspect-square absolute top-1/2 right-1/2 transform mobile:translate-x-1/2 tablet:translate-x-1/2 tablet:-translate-y-1/2 bg-white p-2 rounded-lg ">
          <h1>모달창임</h1>
          <div className="text-3xl font-bold">이름</div>
          <div className="bg-middle absolute top-1 right-1">
            <IconButton>
              <i className="fas fa-trash"></i>
            </IconButton>
          </div>
          <h1>목적지 없이 드라이브</h1>
          <p>저도 드라이브 좋아합니다 같이 드라이브가요</p>
        </div>
      )}
    </>
  );
};
export default LetterItem;
