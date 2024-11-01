import { useEffect, useState } from 'react';
import { apiClient } from '../../api/api';
import { SearchComponentProps } from '../../types/types';

const SearchComponent = ({ onSearchResults }: SearchComponentProps) => {
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const fetchSearchResults = async () => {
      const uid = localStorage.getItem('uid');
      if (keyword && uid) {
        try {
          const response = await apiClient.get(`/api/bucket/search/${uid}`, {
            params: { keyword },
          });
          onSearchResults(response.data);
        } catch (error) {
          console.error('검색 실패:', error);
        }
      } else if (!keyword) {
        onSearchResults([]); //검색 창이 비어 있으면 전체 결과 반환
      }
    };

    const debounceTimeout = setTimeout(fetchSearchResults, 150); //검색 후 150ms후에 api 호출ㄹ

    return () => clearTimeout(debounceTimeout); //메모리 누수 방지(이전 타이머 삭제)
  }, [keyword, onSearchResults]);

  return (
    <div className="flex justify-center w-full my-5">
      <div className="relative w-full tablet:max-w-[512px] tablet:min-w-[512px] ">
        {' '}
        <input
          type="text"
          className="w-full bg-white py-2 pl-4 pr-12 rounded-full focus:outline-none focus:ring-0"
          placeholder="검색"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <i className="fa-solid fa-magnifying-glass absolute right-3 top-1/2 transform -translate-y-1/2"></i>
      </div>
    </div>
  );
};

export default SearchComponent;

//서치 로직
//1. 사용자가 검색어(키워드)입력
//2. 해당 키워드를  params: { keyword }로 백엔드에 전송
//3. 백엔드에서 키워드에 해당하는 버킷리스트 값 반환
//4. 반환된 값 중 true 값을 필터링해 화면에 출력
