import { apiClient } from "./api";

export const fetchUserInfo = (param: string) => {
  return apiClient.get(param);
};

