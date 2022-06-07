import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import {
  PedidosPage,
  NewPedidoPage,
  PedidoConfirmPage,
} from "./pages/PedidosFlow";
import { EncomendasPage, EncomendaPedidoPage } from "./pages/EncomendasFlow";
import {
  EstoquePage,
  NewItemPage,
  EditItemPage,
  BalancoPage,
} from "./pages/EstoqueFlow";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import { useContext } from "react";
import { RequireAuth } from "./RequiredAuth";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <></>
            </RequireAuth>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />

        <Route
          path="/pedidos"
          element={
            <RequireAuth>
              <PedidosPage />
            </RequireAuth>
          }
        />
        <Route
          path="/pedidos/new"
          element={
            <RequireAuth>
              <NewPedidoPage />
            </RequireAuth>
          }
        />
        <Route
          path="/pedidos/confirm"
          element={
            <RequireAuth>
              <PedidoConfirmPage />
            </RequireAuth>
          }
        />
        <Route
          path="/encomendas"
          element={
            <RequireAuth>
              <EncomendasPage />
            </RequireAuth>
          }
        />

        <Route
          path="/encomendas/:id_pedido"
          element={
            <RequireAuth>
              <EncomendaPedidoPage />
            </RequireAuth>
          }
        />
        <Route
          path="/estoque"
          element={
            <RequireAuth>
              <EstoquePage />
            </RequireAuth>
          }
        />
        <Route
          path="/estoque/new"
          element={
            <RequireAuth>
              <NewItemPage />
            </RequireAuth>
          }
        />
        <Route
          path="/estoque/edit/:id_item"
          element={
            <RequireAuth>
              <EditItemPage />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
