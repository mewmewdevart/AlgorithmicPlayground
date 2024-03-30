import { styled } from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  img {
    width: 200px;
    height: 65px;
  }
`;

const Cabecalho = ({ aoPesquisar }) => {
  const handlePesquisa = (texto) => {
    aoPesquisar(texto);
  };

  return (
    <HeaderEstilizado>
      <img src="/imagens/logo.png" alt="Logo" />
      <CampoTexto aoAlterar={handlePesquisa} />
    </HeaderEstilizado>
  );
};

export default Cabecalho;
