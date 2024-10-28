import { Textarea, Button } from '@material-tailwind/react';
import { Input } from '@material-tailwind/react';
import { ChangeEvent, useState } from 'react';
const Letter = () => {
  const [letterTitle, setLetterTitle] = useState<string | null>('');
  const [letterContent, setLetterContent] = useState<string | null>('');
  return (
    <main className="mt-10 flex flex-col justify-center items-center  ">
      <div className="border-2 relative w-96 flex flex-col justify-center items-center gap-4">
        <Input
          label="쪽지 제목"
          value={letterTitle}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLetterTitle(e.target.value)
          }
          icon={<i className="fas fa-envelope" />}
        />
        <Textarea
          label="쪽지 내용"
          value={letterContent}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLetterContent(e.target.value)
          }
        />
        <Button className="">전송</Button>
      </div>
    </main>
  );
};
export default Letter;
