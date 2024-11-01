export interface User {
  id: number;
  uid: string;
  password: string;
  name: string;
  nickname: string;
  email: string;
  provider: string;
}
interface IUser {
  id: number;
  email: string;
  name: string;
  nickname: string;
  password: string;
  provider: string;
  uid: string;
}
interface IBucketList {
  id: number;
  title: string;
  content: string;
  public: boolean;
  user: User;
}

export interface IMessage {
  id: number;
  content: string;
  createTime: string; 
  status: string;
  bucketList: IBucketList;
  userId: number;
  bucketListId: number;
  receiverId: number;
  senderId: number;
  receiver: IUser;
  sender: IUser;
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
