import api from "services/api";
import { UserLoginData } from "types/User";

export async function signIn(user: UserLoginData) {
  const response = await api.post("/signin", user);

  return response.data;
}

export async function logout() {
  const response = await api.post("/logout");

  return response.data;
}

export async function validateToken(token: string) {
  const response = await api.post("/validade", { token });

  return response.data;
}
