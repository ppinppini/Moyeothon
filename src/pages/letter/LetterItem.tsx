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
      <div
        className="aspect-square relative bg-white p-2 rounded-lg hover:transition-transform duration-300 max-h-[300px] "
        onClick={modalHandler}
      >
        <div className="text-3xl font-bold">{letter?.sender?.name}</div>
        <div className=" absolute top-1 right-1">
          <IconButton
            className="bg-middle"
            onClick={() => deleteMessageMutation.mutate()}
          >
            <i className="fas fa-trash"></i>
          </IconButton>
        </div>
        <h1>{letter?.content}</h1>
        <div className="text-gray-500">{letter?.status}</div>
        <div className="absolute  right-2 bottom-2">
          {tab == '받은 메일' ? (
            <Button
              className="bg-middle"
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
          <div className="z-10 border-2 border-black mobile:w-80 aspect-square absolute top-1/4 right-1/2 transform mobile:translate-x-1/2 tablet:translate-x-1/2 tablet:-translate-y-1/2 bg-white p-2 rounded-lg ">
            <h1>Modal</h1>
            <div className="text-3xl font-bold">{letter?.sender?.name}</div>
            <div className=" absolute top-1 right-1">
              <IconButton onClick={() => setIsModal(!isModal)}>
                <i className="fas fa-x"></i>
              </IconButton>
            </div>
            <h1>{letter?.content}</h1>
          </div>
        </>
      )}
    </>
  );
};
export default LetterItem;
