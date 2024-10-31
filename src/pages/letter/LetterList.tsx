import { useQuery, useMutation } from '@tanstack/react-query';
import LetterItem from './LetterItem';
import { getMessageList } from '../../api/api';
import { apiClient } from '../../api/api';
const LetterList = () => {
  const uid = localStorage.getItem('uid');
  const { data, isError, isPending } = useQuery({
    queryKey: ['message'],
    queryFn: () => getMessageList(uid),
  });
  console.log(data);

  // user()
  return (
    <main className="p-4  h-dvh">
      <div className="flex justify-end">
        <i className="fas fa-2xl fa-user text-deep"></i>
      </div>
      <h1 className="text-center text-middle mobile:text-3xl">
        Check Your Letter
      </h1>
      <div className="flex justify-center gap-3   items-center max-w-24 bg-white ">
        <i className="fas fa-2xl fa-envelope text-deep"></i>
        쪽지함
      </div>

      <section className="grid mobile:grid-cols-2 tablet:grid-cols-3 gap-2 relative">
        {data?.map((letter) => <LetterItem key={letter.id} letter={letter} />)}
      </section>
    </main>
  );
};
export default LetterList;
