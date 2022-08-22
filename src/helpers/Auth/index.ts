import api from "services/api";
import { UserLoginData } from "types/User";

export async function login(user: UserLoginData) {
  return {
    user: {
      id: 53,
      name: user.email.split("@")[0],
      email: user.email,
    },
    token: "5586a281bf35e8290d11f84c9fb720f0",
  };
}

export async function logout() {
  const response = await api.post("/logout");

  return response.data;
}

export async function validateToken(token: string) {
  const response = await api.post("/validade", { token });

  return response.data;
}
