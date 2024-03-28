import styled from 'styled-components';
import searchIcon from './search.png';

// Estilizando o componente de input
const CampoTextoEstilizado = styled.input.attrs(props => ({
    type: "text",
    placeholder: "O que você procura?",
    alt: "Campo de pesquisa"
}))`
    width: 40%;
    height: 46px;
    padding: 12px 16px;
    border: 2px solid #C98CF1;
    background: transparent url(${searchIcon}) no-repeat calc(100% - 16px) 50%;
    background-size: 24px; 
    border-radius: 10px;
    box-sizing: border-box;
    color: #ffffff; 
    caret-color: #ffffff;
    cursor: text; 
    outline: none;

    &::placeholder {
        color: #ffffff;
        opacity: 0.5; 
    }
`;

// Componente funcional CampoTexto que retorna o componente estilizado
const CampoTexto = (props) => {
    return (
        <CampoTextoEstilizado {...props} />
    )
}

export default CampoTexto;