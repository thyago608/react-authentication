export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserLoginData {
  email: string;
  password: string;
}

export interface UserData {
  user: User;
  token: string;
}
