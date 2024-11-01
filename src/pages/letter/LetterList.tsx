import { useMutation } from '@tanstack/react-query';
import LetterItem from './LetterItem';
import { getReceiveMessage, getSendMessage } from '../../api/api';
import { useEffect, useState } from 'react';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

const LetterList = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState('받은 메일');
  const [messages, setMessages] = useState([]);

  const getReceiveMessageMutation = useMutation({
    mutationFn: () => getReceiveMessage(),
    onSuccess: (data) => {
      setMessages(data);
      console.log('받은 메일:', data);
    },
  });

  const getSendMessageMutation = useMutation({
    mutationFn: () => getSendMessage(),
    onSuccess: (data) => {
      setMessages(data);
      console.log('보낸 메일:', data);
    },
  });
  useEffect(() => {
    // 초기 로드 시 '받은 메일' 데이터를 가져옴
    if (tab === '받은 메일') {
      getReceiveMessageMutation.mutate();
    }
  }, [tab]);

  const handleTabChange = (selectedTab: string) => {
    setTab(selectedTab);
    if (selectedTab === '받은 메일') {
      getReceiveMessageMutation.mutate();
    } else if (selectedTab === '보낸 메일') {
      getSendMessageMutation.mutate();
    }
  };

  return (
    <main className="p-8 h-full">
      <div className="flex justify-between">
        <div
          className="   w-12 h-12 flex items-center justify-center  z-50"
          onClick={() => navigate('/home')}
        >
          <i className="fas fa-2xl fa-right-from-bracket text-deep cursor-pointer"></i>
        </div>
        <div
          className="    w-12 h-12 flex items-center justify-center  z-50 cursor-pointer hover:-translate-y-2 hover:transition-transform duration-300"
          onClick={() => navigate('/myPage')}
        >
          <i className="fas fa-2xl fa-user text-deep"></i>
        </div>
      </div>
      <h1 className="text-center text-middle mobile:text-3xl font-kaisei">
        Check Your Letter
      </h1>
      <div className="flex justify-center gap-3 py-2 rounded-md items-center max-w-24 bg-white mb-5 mobile:w-1/3 tablet:w-1/6 max-w-32 mt-4">
        <i className="fas fa-2xl fa-envelope text-deep"></i>
        쪽지함
      </div>
      <div className="flex gap-4 mb-5">
        <Button
          className={`${
            tab === '받은 메일'
              ? '  bg-deep  text-white'
              : 'bg-transparent text-deep'
          }`}
          onClick={() => handleTabChange('받은 메일')}
        >
          받은 메일
        </Button>
        <Button
          className={`${
            tab === '보낸 메일'
              ? '  bg-deep  text-white'
              : 'bg-transparent text-deep'
          }`}
          onClick={() => handleTabChange('보낸 메일')}
        >
          보낸 메일
        </Button>
      </div>
      <section className="grid mobile:grid-cols-2 tablet:grid-cols-4 gap-2 relative">
        {messages?.map((letter: any) => (
          <LetterItem key={letter.id} letter={letter} tab={tab} />
        ))}
      </section>
    </main>
  );
};
export default LetterList;
