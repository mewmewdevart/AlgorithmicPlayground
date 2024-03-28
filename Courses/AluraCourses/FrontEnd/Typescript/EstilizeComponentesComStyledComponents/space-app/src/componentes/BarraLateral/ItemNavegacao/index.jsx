import styled from "styled-components";

const ItemListaEstilizada = styled.li`
    line-height: 29px;
    display: flex;
    align-items: center;
    margin-top: 25px;
    cursor: pointer;
    color: ${props=> props.$ativo ? 'rgba(123, 120, 229, 1)' : 'rgba(217, 217, 217, 1)'};
    font-family: ${props=> props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
    display: flex;
    align-items: center;
    gap: 22px;
`;

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false }) => {
    return (
        <ItemListaEstilizada $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
            {children}
        </ItemListaEstilizada>
    );
};

export default ItemNavegacao;
