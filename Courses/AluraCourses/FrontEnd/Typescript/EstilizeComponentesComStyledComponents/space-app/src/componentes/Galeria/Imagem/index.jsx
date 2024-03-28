import { styled } from "styled-components";
import BotaoIcone from "../../BotaoIcone";

const Figure = styled.figure`
  width: ${(props) => (props.$expandida ? "90%" : "460px")};
  flex: 0 0 calc(49.5%);
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    width: 100%;
    height: auto;
    min-height: 300px;
    max-height: 300px;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: rgba(0, 22, 52, 1);
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 15px 25px;
    margin-top: -10px;
    margin-bottom: 10px;
    h3 {
      font-family: "GandhiSansBold";
    }
    h4 {
      flex-grow: 1;
      margin: 0;
      font-size: 16px;
      color: rgb(123, 120, 229);
      padding-top: 5px;
    }
    h3 {
      margin: 0;
      font-size: 18px;
    }
  }
`;

const Rodape = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000!important;
`;

const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito }) => {
  const iconeFavorito = foto.favorita ? '/icones/favorito-ativo.png' : '/icones/favorito.png'

  return (
    <Figure $expandida={expandida} id={`foto-${foto.id}`}>
      <img src={foto.path} alt={foto.alt} />
      <figcaption>
        <h3>{foto.titulo}</h3>
        <Rodape>
          <h4>{foto.fonte}</h4>
          <BotaoIcone onClick={() => aoAlternarFavorito(foto)}>
            <img src={iconeFavorito} alt="Icone de favorito" />
          </BotaoIcone>
          {!expandida && (
            <BotaoIcone
              aria-hidden={expandida}
              onClick={() => aoZoomSolicitado(foto)}
            >
              <img src="/icones/expandir.png" alt="Icone de expandir" />
            </BotaoIcone>
          )}
        </Rodape>
      </figcaption>
    </Figure>
  );
};

export default Imagem;
