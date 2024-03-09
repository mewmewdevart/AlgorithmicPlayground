import React from "react"
import style from "./Relogio.module.scss"

/* Mencionar varias tags sem ter um elemento pai, outra opção seria <> </> tag em branco</>*/

interface Props {
    tempo: number | undefined
}

export default function Relogio({tempo = 0} : Props){
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const [minutoDezena, minutoUnidade] =
        String(minutos).padStart(2, '0');
    const [segundoDezena, segundoUnidade] =
        String(segundos).padStart(2, '0');

    return (
        <React.Fragment> 
            <span className={style.relogioNumero}>
                {minutoDezena}
            </span>
            <span className={style.relogioNumero}>
                {minutoUnidade}
            </span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>
                {segundoDezena}
            </span>
            <span className={style.relogioNumero}>
                {segundoUnidade}
            </span>
        </React.Fragment>
    )
}