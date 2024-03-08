import React, { ReactNode } from 'react';
import style from './Botao.module.scss';

interface BotaoProps {
  children: ReactNode; // This specifies that children can be any React node
}

class Botao extends React.Component<BotaoProps> {
  render() {
    return (
      <button className={style.botao}>
        {this.props.children}
      </button>
    )
  }
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