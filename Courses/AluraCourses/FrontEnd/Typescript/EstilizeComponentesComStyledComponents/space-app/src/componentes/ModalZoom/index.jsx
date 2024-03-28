import { useEffect } from "react";
import { styled } from "styled-components";
import Imagem from "../Galeria/Imagem";
import BotaoIcone from "../BotaoIcone";

const Overlay = styled.div`
    background-color: rgba(47, 45, 100, 0.8);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
`;

const DialogEstilizado = styled.dialog`
    position: fixed;
    top: 50%;
    left: 50%; 
    transform: translate(-50%, -50%);
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    z-index: 10000;
`;

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
    useEffect(() => {
        if (foto) {
            // Impede o scroll da página de rolar enquanto o modal está aberto
            document.body.style.overflow = "hidden";
        } else {
            // Restaura o comportamento padrão de rolagem da página
            document.body.style.overflow = "";
        }
    }, [foto]);

    return (
        <>
            {foto && (
                <>
                    <Overlay onClick={aoFechar}>
                        <DialogEstilizado open={!!foto}>
                            <Imagem foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito}/>
                            <form method="dialog">
                                <BotaoIcone formMethod="dialog">
                                    <img src="/icones/fechar.png" alt="Icone de fechar" />
                                </BotaoIcone>
                            </form>
                        </DialogEstilizado>
                    </Overlay>
                </>
            )}
        </>
    );
};

export default ModalZoom;
