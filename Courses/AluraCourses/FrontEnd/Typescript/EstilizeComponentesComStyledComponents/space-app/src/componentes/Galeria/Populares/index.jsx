import { useState } from "react";
import styled from "styled-components";
import Titulo from "../../Titulo";
import fotosPopulares from "./fotos-populares.json";

const PopularesContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
`;

const Populares = ({ aoZoomSolicitado }) => {
  const [fotos, setFotos] = useState(fotosPopulares);

  const handleZoomSolicitado = (foto) => {
    aoZoomSolicitado(foto);
  };

  return (
    <PopularesContainer>
      <Titulo $alinhamento="center">Populares</Titulo>
      {fotos.map((foto) => (
        <ImageWrapper key={foto.id} onClick={() => handleZoomSolicitado(foto)}>
          <Image src={foto.path} alt={foto.alt} />
        </ImageWrapper>
      ))}
    </PopularesContainer>
  );
};

export default Populares;
