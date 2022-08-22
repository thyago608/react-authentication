import api from "services/api";
import { UserLoginData, UserData } from "types/User";

export async function login(user: UserLoginData) {
  return {
    user: {
      id: 53,
      name: user.email,
      email: user.email,
    },
    token: "5586a281bf35e8290d11f84c9fb720f0",
  };
}

export async function logout(token: string) {}

export async function validateToken(token: string): Promise<UserData | null> {
  if (token === "5586a281bf35e8290d11f84c9fb720f0") {
    return {
      user: {
        id: 53,
        name: "Thyago Ribeiro",
        email: "thyagoribeiro@gmail.com",
      },
      token: "5586a281bf35e8290d11f84c9fb720f0",
    };
  }

  return null;
}

export function handleTokenInStorage(token: string) {
  localStorage.setItem("authToken", token);
}
