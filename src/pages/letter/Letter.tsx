import { Textarea, Button } from '@material-tailwind/react';
import { Input } from '@material-tailwind/react';
import { ChangeEvent, useState } from 'react';
const Letter = () => {
  const [letterTitle, setLetterTitle] = useState<string | null>('');
  const [letterContent, setLetterContent] = useState<string | null>('');

  const sendLetter = () => {};

  return (
    <main className="h-screen  w-full flex flex-col items-center justify-center bg-light">
      <h1 className="text-4xl  font-bold text-middle">Someone's Bucket List</h1>
      <h2 className="text-3xl font-semibold text-deep">목적지 없이 드라이브</h2>
      <form
        className="relative  mt-10 p-4
       w-1/3 mobile:w-full h-screen  flex flex-col  items-center justify-evenly  "
      >
        <div className="w-full flex flex-col gap-4">
          <Input
            label="쪽지 제목"
            value={letterTitle}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLetterTitle(e.target.value)
            }
            icon={<i className="fas fa-envelope" />}
          />
          <Textarea
            rows={16}
            label="쪽지 내용"
            value={letterContent}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLetterContent(e.target.value)
            }
          />
        </div>

        <div className="absolute right-8 bottom-1">
          <Button className="bg-white text-black" type="submit">
            전송
          </Button>
        </div>
      </form>
    </main>
  );
};
export default Letter;
