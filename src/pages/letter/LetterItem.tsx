import { IconButton } from '@material-tailwind/react';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { deletemMessage } from '../../api/api';
import { queryClient } from '../../config/ReactQueryProvider';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { IMessage } from '../../types/types';
const LetterItem = ({ letter, tab }: { letter: IMessage; tab: string }) => {
  const messageId = letter?.id;
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();
  const modalHandler = () => {
    setIsModal(!isModal);
  };
  //삭제함수
  const deleteMessageMutation = useMutation({
    mutationFn: () => deletemMessage(messageId),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: (err) => {
      console.log('삭제 중 오류 발생', err);
    },
  });
  return (
    <>
      <main className=" h-dvh p-4 ">
        <div
          className="aspect-square relative bg-white pt-14 px-8 rounded-lg hover:transition-transform duration-300 max-h-[300px] "
          onClick={modalHandler}
        >
          <div className=" font-semibold mobile:text-sm tablet:text-2xl">
            {letter?.sender?.nickname}
          </div>
          <div className=" absolute top-3 right-3">
            <IconButton
              className="bg-deep w-8 h-8"
              onClick={() => deleteMessageMutation.mutate()}
            >
              <i className="fas fa-trash "></i>
            </IconButton>
          </div>
          <h1 className="pt-2 mobile:text-sm tablet:text-sm text-1xl">
            {letter?.content}
          </h1>
          <div className="text-gray-500 pt-2 mobile:text-xs tablet:text-sm">
            {letter?.status}
          </div>
          <div className="absolute  right-2 bottom-2">
            {tab == '받은 메일' ? (
              <Button
                className="bg-deep rounded-lg"
                onClick={() =>
                  navigate('/letter', {
                    state: { ...letter, from: 'letterlist' },
                  })
                }
              >
                답장하기
              </Button>
            ) : (
              ''
            )}
          </div>
        </div>
        {isModal && (
          <>
            <div
              className="fixed inset-0 bg-black opacity-50 z-10"
              onClick={modalHandler}
            ></div>
            <div className="z-10 bg-[#dddddd] px-12 pt-20 mobile:w-80 aspect-square absolute top-1/4 right-1/2 transform mobile:translate-x-1/2 tablet:translate-x-1/2 tablet:-translate-y-1/2  p-2 rounded-3xl ">
              <h3 className="text-lg font-semibold mb-4 text-left mobile:text-base">
                {letter?.sender?.nickname}
              </h3>
              <div className=" absolute top-1 right-1">
                <button
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                  onClick={() => setIsModal(!isModal)}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
              <p className="text-gray-600 mobile:text-sm">{letter?.content}</p>
            </div>
          </>
        )}
      </main>
    </>
  );
};
export default LetterItem;
