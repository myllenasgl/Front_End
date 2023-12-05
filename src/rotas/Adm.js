import React, { useState, useEffect } from "react";
import {
    getDoces,
    atualizarPedido,
    excluirPedido,
} from "../Componentes/servicos/doces";

function GerenciamentoPedido() {
  const [fabricacao, setfabricacao] = useState(null);
  const [tipo, settipo] = useState("");
  const [cliente, setcliente] = useState("");
  const [quantidade, setquantidade] = useState("");

  useEffect(() => {
    carregarPedido();
  }, []);

  const carregarPedido = async () => {
    try {
      const listarPedidos = await getDoces();


      settipo(listarPedidos);
    } catch (error) {
      console.error("Erro ao carregar pedido:", error);
    }
  };

  const handleEditar = (doces) => {
    // Ao clicar em "Editar", preencha o formulário com os dados da vaga
    setfabricacao(doces._id);
    settipo(doces.tipo);
    setcliente(doces.cliente);
    setquantidade(doces.quantidade);
  };

  const handleAtualizar = async () => {
    try {
      // Chame a função atualizarVaga do seu serviço
      await atualizarPedido(fabricacao, {
        tipo: tipo,
        cliente: cliente,
        quantidade: quantidade,
      });

      // Limpe os campos do formulário após a atualização
      setfabricacao(null);
      settipo("");
      setcliente("");
      setquantidade("");

      carregarPedido();
    } catch (error) {
      console.error("Erro ao atualizar Pedido:", error);
    }
  };

  const handleExcluir = async (id) => {
    try {
      // Chame a função excluirVaga do seu serviço
      await excluirPedido(id);

      carregarPedido();
    } catch (error) {
      console.error("Erro ao excluir pedido:", error);
    }
  };

  return (
    <div>
      <h2>Gerenciamento de Pedidos</h2>
      <ul>
        {tipo &&
          tipo.map((doce) => (
            <li key={doce._id}>
              {doce.tipo} - {doce.cliente} - {doce.quantidade}
              <button onClick={() => handleEditar(doce)}>Editar</button>
              <button onClick={() => handleExcluir(doce._id)}>Excluir</button>
            </li>
          ))}
      </ul>
      {fabricacao !== null && (
        <div>
          <h3>Editar pedido</h3>
          <label>tipo:</label>
          <input
            type="text"
            value={tipo}
            onChange={(e) => settipo(e.target.value)}
          />

          <label>cliente:</label>
          <input
            type="text"
            value={cliente}
            onChange={(e) => setcliente(e.target.value)}
          />

          <label>quantidade:</label>
          <input
            type="text"
            value={quantidade}
            onChange={(e) => setquantidade(e.target.value)}
          />

          <button onClick={handleAtualizar}>Atualizar</button>
        </div>
      )}
    </div>
  );
}

export default GerenciamentoPedido;
