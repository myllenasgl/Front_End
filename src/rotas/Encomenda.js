import React, { useState } from "react";
import { encomendarDoces } from "../Componentes/servicos/doces";
import "./Pedido.css";

function EncomendaPedido() {
  const [tipo, settipo] = useState("");
  const [cliente, setcliente] = useState("");
  const [quantidade, setquantidade] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleCadastro = async () => {
    try {
      const novoPedido = await encomendarDoces({
        tipo,
        cliente,
        quantidade,
      });

      console.log("Novo pedido feito:", novoPedido);

      setShowAlert(true);

      settipo("");
      setcliente("");
      setquantidade("");

      // Esconde a mensagem após 3 segundos
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } catch (error) {
      console.error("Erro ao realizar pedido:", error);
    }
  };

  return (
    <div className="encomenda-pedido-container">
      <form>
        <h1>Realize seu pedido:</h1>
        <br />
        <label>Pedido:</label>
        <input
          type="text"
          value={tipo}
          onChange={(e) => settipo(e.target.value)}
        />

        <br />
        <br />

        <label>Cliente:</label>
        <input
          type="text"
          value={cliente}
          onChange={(e) => setcliente(e.target.value)}
        />

        <br />
        <br />

        <label>Quantidade:</label>
        <input
          type="text"
          value={quantidade}
          onChange={(e) => setquantidade(e.target.value)}
        />

        <br />
        <br />

        <button type="button" onClick={handleCadastro} className="botao">
          Concluir pedido
        </button>

        {showAlert && (
          <div className="alerta">
            <p>Pedido feito com sucesso!</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default EncomendaPedido;
