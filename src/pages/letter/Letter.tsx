import { Textarea, Button } from '@material-tailwind/react';
import { Input } from '@material-tailwind/react';
import { useMutation } from '@tanstack/react-query';
import { ChangeEvent, useId, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { messagePost, replyMessage } from '../../api/api';
const Letter = () => {
  const [letterTitle, setLetterTitle] = useState<string>('');
  const [letterContent, setLetterContent] = useState<string>('');
  const uid = localStorage.getItem('uid');
  const location = useLocation();
  const letterInfo = location.state;
  console.log(location.state);

  const navigate = useNavigate();
  const sendMessageMutate = useMutation({
    mutationFn: () =>
      replyMessage(uid, location.state.id, {
        receiverId: location.state.receiverId,
        content: 'letterContent',
      }),
    onSuccess: () => {
      //   alert('쪽지 보내기 성공');
      //   navigate('/letterList');
    },
  });

  // const message = {
  //   id: uuid,
  //   createTime: new Date().toISOString(),
  //   content: letterContent,
  //   sender: {
  //     id: letterInfo.sender.id,
  //     uid: letterInfo.sender.uid,
  //     password: letterInfo.sender.password,
  //     name: letterInfo.sender.name,
  //     nickname: letterInfo.sender.nickname,
  //     email: letterInfo.sender.email,
  //     provider: letterInfo.sender.provider,
  //   },
  //   receiver: {
  //     id: letterInfo.receiver.id,
  //     uid: letterInfo.receiver.uid,
  //     password: letterInfo.receiver.password,
  //     name: letterInfo.receiver.name,
  //     nickname: letterInfo.receiver.nickname,
  //     email: letterInfo.receiver.email,
  //     provider: letterInfo.receiver.provider,
  //   },
  //   status: '읽음',
  // };
  return (
    <main className="w-full  bg-light h-dvh p-4">
      <div
        className="flex justify-end cursor-pointer hover:animate-bounce"
        onClick={() => navigate('/mypage')}
      >
        <i className="fas fa-2xl fa-user text-deep py-4"></i>
      </div>
      <div className="flex flex-col items-center ">
        <h1 className="tablet:text-4xl mobile:text-2xl  font-bold text-middle ">
          Someone's Bucket List
        </h1>
        <h2 className="tablet:text-3xl mobile:text-xl font-semibold text-deep">
          {letterInfo.content}
        </h2>
      </div>
      <div className="flex bg-white py-2 gap-2 rounded-md items-center justify-center mobile:w-1/3 tablet:w-1/6 max-w-32 mt-4">
        <i className="fas fa-2xl fa-envelope text-deep"></i>
        <p>쪽지작성</p>
      </div>
      <form
        className="relative  mt-10 
       w-1/3 mobile:w-full  flex flex-col  items-center min-w-5 "
        action={'백엔드 주소'}
      >
        <div className="w-full flex flex-col gap-4">
          <Input
            className="bg-white"
            required
            label="쪽지 제목"
            value={letterTitle}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLetterTitle(e.target.value)
            }
            icon={<i className="fas fa-envelope" />}
          />
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
            {letterTitle == null && letterContent == null ? (
              <Button className="bg-white text-black block" type="submit">
                전송
              </Button>
            ) : (
              <Button
                className="bg-deep text-white block"
                onClick={() => sendMessageMutate.mutate()}
              >
                전송
              </Button>
            )}
          </div>
        </div>
      </form>
    </main>
  );
};
export default Letter;
