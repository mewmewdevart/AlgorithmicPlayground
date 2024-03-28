import { styled } from "styled-components";

const Titulo = styled.h2`
    color: rgba(123, 120, 229, 1);
    text-align: ${props=> props.$alinhamento ? props.$alinhamento : 'left'};
    font-size: 20px;
    margin: 20px auto;
    padding: 0;
`

export default Titulo;