import styled from "styled-components";

import IconsComponent from "../atoms/icons.tsx";
import TextComponent from "../atoms/texts.tsx";

const ConjuntoListaEstilizada = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
`

const ListaEstilizada = styled.li`
  display: flex;
  align-items: center;
  width: 190px;
  height: 59px;
  gap: 10px;
  padding: 0 10px;

  &:hover {
    background-color: rgba(158, 110, 254, 0.06);
    color: var(--brandColor);
    cursor: pointer;
  }

  &:active {
    cursor: progress;
  }

  &:focus {
    cursor: pointer;
    box-shadow: 0 0 0 3px var(--secondaryBrandColor); 
  }
`;

const MenuComponent = () => {
  return (
      <ConjuntoListaEstilizada>
        <ListaEstilizada tabIndex={0} role="menuitem">
          <IconsComponent typeOfIcon={"dashboard"} />
          <TextComponent typeOfText={"dashboard"} />
        </ListaEstilizada>

        <ListaEstilizada tabIndex={0} role="menuitem">
          <IconsComponent typeOfIcon={"wallet"} />
          <TextComponent typeOfText={"wallet"} />
        </ListaEstilizada>

        <ListaEstilizada tabIndex={0} role="menuitem">
          <IconsComponent typeOfIcon={"transaction"} />
          <TextComponent typeOfText={"transaction"} />
        </ListaEstilizada>

        <ListaEstilizada tabIndex={0} role="menuitem">
          <IconsComponent typeOfIcon={"support"} />
          <TextComponent typeOfText={"support"} />
        </ListaEstilizada>

        <ListaEstilizada tabIndex={0} role="menuitem" >
          <IconsComponent typeOfIcon={"gear"} />
          <TextComponent typeOfText={"gear"} />
        </ListaEstilizada>

        <ListaEstilizada tabIndex={0} role="menuitem" >
          <IconsComponent typeOfIcon={"power"} />
          <TextComponent typeOfText={"power"} />
        </ListaEstilizada>
      </ConjuntoListaEstilizada>
  );
};

export default MenuComponent;
