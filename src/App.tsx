import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

// TODO: Rotas privadas e etc.
function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<LoginPage />} /> */}
      <Route path="/" element={<DashboardPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />

      <Route path="/pedidos" element={<PedidosPage />} />
      <Route path="/pedidos/new" element={<NewPedidoPage />} />
      <Route path="/pedidos/confirm" element={<PedidoConfirmPage />} />

      <Route path="/encomendas" element={<EncomendasPage />} />
      <Route path="/encomendas/:id_pedido" element={<EncomendaPedidoPage />} />

      <Route path="/estoque" element={<EstoquePage />} />
      <Route path="/estoque/new" element={<NewItemPage />} />
      <Route path="/estoque/edit/:id_item" element={<EditItemPage />} />
      <Route path="/estoque/balanco" element={<BalancoPage />} />
    </Routes>
  );
}

export default App;
