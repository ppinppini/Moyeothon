import { Textarea, Button } from '@material-tailwind/react';
// import { Input } from '@material-tailwind/react';
import { useMutation } from '@tanstack/react-query';
import { ChangeEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { messagePost, replyMessage } from '../../api/api';
import { queryClient } from '../../config/ReactQueryProvider';

const Letter = () => {
  const [letterContent, setLetterContent] = useState<string>('');
  const location = useLocation();
  const isFromletterList = location?.state.from === 'letterlist';
  console.log(isFromletterList);

  const letterInfo = location?.state?.item;
  const replyInfo = location?.state;
  console.log(replyInfo);
  console.log(letterInfo);
  const navigate = useNavigate();

  // 처음 쪽지 생성하는 함수
  const sendMessageMutate = useMutation({
    mutationFn: () =>
      messagePost(letterInfo.id, letterInfo.userId, letterContent),
    onSuccess: () => {
      queryClient.invalidateQueries();
      alert('성공적으로 쪽지를 전송했어요!');
      navigate('/home');
    },
  });
  // 나한테 온 쪽지 답장하는 함수
  const replyMessageMutation = useMutation({
    mutationFn: () =>
      replyMessage(
        replyInfo.id,
        letterContent,
        replyInfo.senderId,
        replyInfo.bucketListId,
      ),
    onSuccess: () => {
      alert('성공적으로 쪽지를 전송했어요!');
      navigate('/letterlist');
    },
  });
  return (
    <main className="w-full  bg-light h-dvh p-4">
      <div
        className="flex justify-end cursor-pointer hover:-translate-y-2 hover:transition-transform duration-300"
        onClick={() => navigate('/mypage')}
      >
        <i className="fas fa-2xl fa-user text-deep py-4"></i>
      </div>
      <div className="flex flex-col items-center ">
        <h1 className="tablet:text-4xl mobile:text-2xl  font-bold text-middle font-kaisei">
          Someone's Bucket List
        </h1>
        <h2 className="tablet:text-3xl mobile:text-xl font-semibold text-deep">
          {letterInfo?.content}
        </h2>
      </div>
      <div className="flex bg-white py-2 gap-2 rounded-md items-center justify-center mobile:w-1/3 tablet:w-1/6 max-w-32 mt-4">
        <i className="fas fa-2xl fa-envelope text-deep"></i>
        <p>쪽지 작성</p>
      </div>
      <div
        className="relative  mt-10 
       w-1/3 mobile:w-full  flex flex-col  items-center min-w-5 "
      >
        <div className="w-full flex flex-col gap-4">
          {/* <Input
            className="bg-white"
            required
            label="쪽지 제목"
            value={letterTitle}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLetterTitle(e.target.value)
            }
            icon={<i className="fas fa-envelope" />}
          /> */}
          <Textarea
            className="bg-white"
            required
            rows={16}
            label="쪽지 내용"
            value={letterContent}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLetterContent(e.target.value)
            }
          />
          <div className="flex justify-end">
            {!isFromletterList ? (
              <Button
                className="bg-white text-black block"
                onClick={() => sendMessageMutate.mutate()}
              >
                전송
              </Button>
            ) : (
              <Button
                className="bg-deep text-white block"
                onClick={() => replyMessageMutation.mutate()}
              >
                답장하기
              </Button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Letter;
