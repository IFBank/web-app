import { useEffect, useState } from "react";
import { createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

type SignInCredentials = {
  email: string;
  password: string;
  setLoadingLogin?: (login: any) => void;
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  async function signIn({
    email,
    password,
    setLoadingLogin,
  }: SignInCredentials) {
    try {
      const signInToast = api
        .post("/user/authenticate", {
          //CRIAR ROTA PARA ADMIN SE LOGAR E USAR AQUI
          email,
          password,
        })
        .then(async (response) => {
          await new Promise((resolve) => setTimeout(resolve, 3000));

          localStorage.setItem("@IFTAKE:token", response.data.token);
          api.defaults.headers[
            "Authorization"
          ] = `Bearer ${response.data.token}`;
          setIsAuthenticated(true);
          navigate("/pedidos");
        })
        .finally(() => {
          setLoadingLogin(false);
        });

      toast.promise(signInToast, {
        pending: "Tentando logar...",
        success: "Logado com sucesso!",
        error: "Algum erro encontrado...",
      });
    } catch (err) {}
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
