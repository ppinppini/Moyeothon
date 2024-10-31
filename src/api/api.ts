import axios from 'axios';

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
export const messagePost = async ({ uid }: { uid: string }) => {
  try {
    const response = await apiClient.post(`/message/${uid}`);
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
  }
};
//쪽지 전체 리스트 조회
export const getMessageList = async (uid: string) => {
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
export const deletemMessage = async (uid: string, messageId: number) => {
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
export const replyMessage = async (uid: string, messageId: number, message) => {
  try {
    const response = await apiClient.post(`message/reply/${messageId}/${uid}`, {
      message,
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
// //유저조회
// export const user = async () => {
//   const response = await apiClient.get(`/user/${uid}`);
//   console.log(response);
// };
