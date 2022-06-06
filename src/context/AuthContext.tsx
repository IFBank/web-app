import { useEffect, useState } from "react";
import { createContext, ReactNode } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { api } from "../services/api";

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export async function signOut() {
  localStorage.removeItem("@IFTAKE:token");
}

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    async function verifyToken() {
      const token = localStorage.getItem("@IFTAKE:token");
      const response = await api.get("/user/admin/verify", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setIsAuthenticated(true);
        api.defaults.headers["Authorization"] = `Bearer ${token}`;
        navigate("/pedidos");
      }
    }

    verifyToken();
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post("/user/authenticate", {
        email,
        password,
      });

      if (email !== "maike@estudante.ifms.edu.br") {
        throw new Error();
      }

      localStorage.setItem("@IFTAKE:token", response.data.token);
      api.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;
      setIsAuthenticated(true);

      navigate("/pedidos");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
