import axios from 'axios';
import { BucketItem } from '../types/types';

const url = import.meta.env.VITE_APP_SERVER_API_URL;

export const api = () => {
  console.log('api 호출');
};

export const apiClient = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

//쪽지 전송
export const messagePost = async (
  bucketListId: number,
  receiverId: number,
  content: string,
) => {
  const uid = localStorage.getItem('uid');
  console.log(uid);
  try {
    const response = await apiClient.post(`/message/${uid}/${bucketListId}`, {
      receiverId: receiverId,
      content: content,
    });

    console.log(`/message/${uid}/${bucketListId}`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
//쪽지 전체 리스트 조회
export const getMessageList = async () => {
  const uid = localStorage.getItem('uid');
  try {
    // 토큰이 필요한 경우 인터셉터에 설정 확인
    const response = await apiClient.get(`/message/user/${uid}`);
    console.log('Response:', response);
    return response.data;
  } catch (err) {
    console.error('쪽지 리스트 조회 오류:', err);
  }
};
//쪽지 삭제
export const deletemMessage = async (messageId: number) => {
  const uid = localStorage.getItem('uid');
  try {
    const response = await apiClient.delete(`/message/${messageId}/${uid}`);

    console.log('삭제!');
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
//쪽지 답장
export const replyMessage = async (
  messageId: number,
  content: string,
  receiverId: number,
  bucketListId: number,
) => {
  const uid = localStorage.getItem('uid');
  try {
    const response = await apiClient.post(
      `message/reply/${uid}/${messageId}/${bucketListId}`,
      {
        receiverId: receiverId,
        content: content,
      },
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

// 해당 유저 송신 쪽지 전체 조회
export const getSendMessage = async () => {
  const uid = localStorage.getItem('uid');
  const response = await apiClient.get(`/message/user/sendmessage/${uid}`);
  console.log(response.data);
  return response.data;
};

// 해당 유저 수신 쪽지 전체 조회
export const getReceiveMessage = async () => {
  const uid = localStorage.getItem('uid');
  const response = await apiClient.get(`/message/user/receivemessage/${uid}`);
  console.log(response.data);
  return response.data;
};

//버킷리스트 생성
export const createBucket = async (
  uid: string,
  title: string,
  content: string,
  isPublic: boolean,
) => {
  try {
    const response = await apiClient.post(`/api/bucket/create/${uid}`, {
      title,
      content,
      isPublic,
    });
    return response.data;
  } catch (error) {
    console.error('버킷리스트 생성 실패:', error);
    throw error;
  }
};

// 버킷리스트를 불러오는 함수
export const fetchBucketItems = async (uid: string): Promise<BucketItem[]> => {
  try {
    const response = await apiClient.get(`/api/bucket/all/${uid}`);
    return response.data;
  } catch (error) {
    console.error('버킷 리스트 불러오기 실패:', error);
    throw error;
  }
};
