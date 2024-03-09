import React, { ReactNode } from 'react';
import style from './Botao.module.scss';

interface Props {
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void,
  children?: React.ReactNode
}

function Botao({onClick, type, children}: Props){
  return (
    <button
      onClick={onClick}
      type={type}
      className={style.botao}>
      {children}
    </button>
  )
}

export default Botao;


/* 
Props texto
import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component <{ texto: string }>{
  render() {
    return (
      <button className={style.botao}>
        {this.props.texto}
      </button>
    )
  }
}

export default Botao;

*/