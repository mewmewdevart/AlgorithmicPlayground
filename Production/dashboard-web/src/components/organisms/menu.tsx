import styled from "styled-components";
import ConjuntoListaEstilizada from "../molecules/listaEstilizada";

const MenuEstilizado = styled.nav`
  background-color: var(--dark-40);
  border-radius: 0 24px 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
  min-height: 100vh;
`;

const LogoEstilizado = styled.img`
padding-top: 10px;
  width: 112px;
  height: 112px;
  margin-bottom: 5px;
`;

const MenuComponent = () => {
  return (
    <>
      <MenuEstilizado>
        <LogoEstilizado src="/logo.png" alt="" />
        <ConjuntoListaEstilizada />
      </MenuEstilizado>
    </>
  );
};

export default MenuComponent;
