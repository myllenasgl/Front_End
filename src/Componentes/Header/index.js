import "./Header.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Opcao = styled.li`
  margin-right: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  font-size: 20px;
  min-width: 120px;
  cursor: pointer;
  & :hover {
    color: #000000;
  }
`;

const Opcoes = styled.ul`
  display: flex;
  justify-content: center; 
  align-items: center; */ /* Se quiser centralizar verticalmente também */
`;


const opcoes = ["Home", "Sobre", "Encomenda", "Doces", "Adm"];
{opcoes.map((texto, index) => (
  <Opcao key={index}>
    <p>{texto}</p>
  </Opcao>
))}


function Header() {
  return (
    <header>
      <nav>
        <Opcoes>
       
          {opcoes.map((texto) => (
            <Link to={`/${texto}`}>
            <Opcao>
              <p>{texto}</p>
            </Opcao>
          </Link>
          ))}
          
        </Opcoes>
        
        <br />
      <h1>Portas abertas à felicidade</h1>
      <h2>O lugar perfeito para os amantes de doces.</h2>
      <br />
      <p>
      Sintam-se em casa e lembrem-se que um doce é sempre bem-vindo!
      </p>
      </nav>
    </header>
  );
}


export default Header;
