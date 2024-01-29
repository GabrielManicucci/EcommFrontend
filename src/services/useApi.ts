import { match } from "assert";

export const useApi = () => ({
  validateToken: async (token: string) => {
    const data = JSON.parse(token);

    return data.user;
  },

  signin: async (email: string, password: string) => {
    return {
      user: { id: Math.random() * 10, name: "Gabriel", email },
      token: "123456789",
    };
  },
});
