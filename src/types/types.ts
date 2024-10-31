export interface User {
  id: number;
  name: string;
  password: string;
}

// 유저간 송수신 인터페이스 정의
export interface IUser {
  id: number;
  uid: string;
  password: string;
  name: string;
  nickname: string;
  email: string;
  provider: string;
}

export interface IMessage {
  id: number;
  content: string;
  createTime: string;
  senderId: number;
  receiverId: number;
  sender: User;
  receiver: User;
  status: string;
}

export interface IUsers {
  messages: IMessage[];
}
