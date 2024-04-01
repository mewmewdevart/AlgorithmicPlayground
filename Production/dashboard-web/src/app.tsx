import MenuComponent from "./components/organisms/menu";
import styled from "styled-components";

import "./app.css";

const BgEstilizado = styled.div`
  background-color: var( --secondaryBrandColor);
  min-height: 100vh;
`

export function App() {
  return (
    <BgEstilizado>
      <MenuComponent/>
    </BgEstilizado>
  );
}