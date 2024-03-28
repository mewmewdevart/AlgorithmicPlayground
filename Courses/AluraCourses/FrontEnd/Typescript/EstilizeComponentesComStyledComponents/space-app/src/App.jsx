import { useState } from "react";

import { styled } from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/BannerEstilizado";
import Galeria from "./componentes/Galeria";

import fotos from "./fotos.json";
import ModalZoom from "./componentes/ModalZoom";

const FundoGradiente = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(4, 24, 51, 1),
    rgba(4, 36, 79, 1),
    rgba(21, 69, 128, 1)
  );
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const AppContainer = styled.div`
  width: 98%; 
  max-width: 1440px;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column; /* Display as column by default */
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row; /* Change to row layout for screens wider than 768px */
  }
`;

const ConteudoGaleria = styled.section`
  flex-grow: 1; /* Grow to fill available space */
`;

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null)

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      });
    }
  
    setFotosDaGaleria(fotosDaGaleria.map(fotosDaGaleria => {
      return {
        ...fotosDaGaleria,
        favorita: fotosDaGaleria.id === foto.id ? !foto.favorita : fotosDaGaleria.favorita
      }
    }))
  };

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner />
            <Galeria 
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
              fotos={fotosDaGaleria}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom 
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />
    </FundoGradiente>
  );
};

export default App;
