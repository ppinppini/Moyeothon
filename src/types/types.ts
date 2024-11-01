export interface User {
  id: number;
  name: string;
  password: string;
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
}
