export interface User {
  id: number;
  name: string;
  password: string;
}

export interface BucketItem {
  id: number;
  title: string;
  content: string;
  public: boolean;
}
