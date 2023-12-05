import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Componentes/Header";
import Home from "./rotas/Home";
import Doces from "./rotas/Doces";
import Encomenda from "./rotas/Encomenda";
import Adm from "./rotas/Adm"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/Encomenda" element={<Encomenda/>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Doces" element={<Doces/>}/>
        <Route path="/Adm" element={<Adm/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
