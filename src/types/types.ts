export interface User {
  id: number;
  uid: string;
  password: string;
  name: string;
  nickname: string;
  email: string;
  provider: string;
}

export interface BucketItem {
  id: number;
  title: string;
  content: string;
  public: boolean;
  user: User;
}

export interface SearchComponentProps {
  onSearchResults: (results: BucketItem[]) => void; //결과 반환 값 없음
}
