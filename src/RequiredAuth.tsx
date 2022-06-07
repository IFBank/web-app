import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

export function RequireAuth({ children }) {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated === true ? children : <Navigate to="/login" replace />;
}
