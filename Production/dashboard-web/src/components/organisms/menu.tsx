import styled from "styled-components";
import ConjuntoListaEstilizada from "../molecules/listaEstilizada";

const MenuEstilizado = styled.nav`
  background-color: var(--dark-40);
  border-radius: 0 24px 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  min-height: 100vh;
`;

const LogoEstilizado = styled.img`
padding-top: 10px;
  width: 112px;
  height: 112px;
`;

const MenuComponent = () => {
  return (
    <>
      <MenuEstilizado>
        <LogoEstilizado src="../../../public/logo.png" alt="" />
        <ConjuntoListaEstilizada />
      </MenuEstilizado>
    </>
  );
};

export default MenuComponent;
