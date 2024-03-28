**Map**

O método `map` é fundamental no React para combinar reaproveitamento de código e renderização dinâmica. Ele permite iterar sobre todos os itens de um array e retornar algo no mesmo índice do laço atual. Exemplo:

```javascript
const tecnologias = ['React', 'Typescript', 'Javascript'];

const tecnologiasComJSX = tecnologias.map(tecnologia => <li>{tecnologia}</li>);
```

Neste caso, `tecnologiasComJSX` será um array de JSX, transformando cada item do array original em elementos JSX.

**Spread Operator**

O operador de propagação (`Spread Operator`) é útil para atualizações em estados, preservando partes não alteradas. Exemplo:

```javascript
let curso = {
  instrutor: "Luiz Fernando",
  curso: "React com Typescript"
};

curso = {
  ...curso,
  ano: 2021
};
```

O `...curso` dentro das chaves significa que o novo objeto terá tudo que `curso` tinha, além do ano adicionado.

**Ternários**

Ternários são essenciais para renderização condicional no React. Exemplo de ternário em JSX:

```javascript
return (
  <>
    {condicao ?
      <p>Atende a condição</p>
    :
      <p>Não atende a condição</p>
    }
  </>
);
```

Também é possível utilizar o operador `&&` para renderização condicional sem a necessidade do `else`.

Exemplo de ternário em classes CSS:

```javascript
return (
  <button className={condicional ? "classe-com-condicional" : "classe-sem-condicional"}>
    Meu botão
  </button>
);
```

Exemplo de ternário em mudança de estado:

```javascript
const [curso, setCurso] = useState({ nome: "React com Typescript", completado: false });

setCurso({
  ...curso,
  completado: condicao ? true : false
});
```

**Destructuring**

O destructuring é útil para aproveitar estados anteriores e modificar algo. No exemplo acima:

```javascript
const [curso, setCurso] = useState({ nome: "React com Typescript", completado: false });

setCurso({
  ...curso,
  completado: condicao ? true : false
});
```

O destructuring é utilizado para preservar as propriedades existentes e apenas modificar a propriedade desejada.


### **useState no React: Transição de Class Components para Functional Components**

O `useState` é um hook fundamental no React que permite adicionar estado a componentes de função (functional components). Se anteriormente você estava acostumado a usar class components para gerenciar o estado, a transição para functional components com `useState` é uma maneira mais concisa e moderna de lidar com a reatividade dos dados em sua aplicação.

**Class Component com State:**
```typescript
import React, { Component } from 'react';

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementar = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Contagem: {this.state.count}</p>
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}

export default Contador;
```

**Functional Component com `useState`:**
```typescript
import React, { useState } from 'react';

const Contador = () => {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default Contador;
```

Na versão com `useState`, você declara o estado inicial diretamente na desestruturação da função `useState`. A função `setCount` agora atualiza o estado, substituindo a necessidade de `this.setState`. Além disso, a inicialização do estado agora é feita apenas uma vez, sem a necessidade de um construtor.

### **useEffect no React: Gerenciando Ciclo de Vida em Functional Components**

O hook `useEffect` é usado para lidar com efeitos colaterais em componentes de função. Em class components, você estava acostumado a usar métodos de ciclo de vida como `componentDidMount` e `componentDidUpdate`. Com `useEffect`, você pode alcançar o mesmo resultado de forma mais declarativa.

**Class Component com componentDidMount e componentDidUpdate:**
```typescript
import React, { Component } from 'react';

class ExemploEffect extends Component {
  componentDidMount() {
    console.log('Componente montado');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Componente atualizado');
  }

  render() {
    return <div>Exemplo de Effect</div>;
  }
}

export default ExemploEffect;
```

**Functional Component com `useEffect`:**
```typescript
import React, { useEffect } from 'react';

const ExemploEffect = () => {
  useEffect(() => {
    console.log('Componente montado');

    return () => {
      console.log('Componente desmontado');
    };
  }, []); // O segundo argumento vazio indica que o efeito é executado apenas uma vez (equivalente ao componentDidMount)

  useEffect(() => {
    console.log('Componente atualizado');
  }); // Este efeito é executado sempre que o componente é atualizado

  return <div>Exemplo de Effect</div>;
};
a
export default ExemploEffect;
```

A transição para `useEffect` é mais concisa e oferece maior controle sobre o ciclo de vida do componente. O segundo argumento do `useEffect` permite que você especifique as dependências para condicionar a execução do efeito. O retorno da função dentro do `useEffect` é equivalente ao `componentWillUnmount` em class components.

### Para saber mais: Ciclo de vida de um componente

Um componente, assim como o ser humano, tem um ciclo de vida! No caso do componente, ele nasce, compartilha informações e morre!

Mas como assim ele morre???

Nossa aplicação não tem múltiplas telas ou renderização condicional de componentes, por isso não conseguimos ver um componente morrendo em si, mas o termo "morrer" é mais conhecido como **unmount**, ou "desmontar" em português, assim como "nascer" seria **mount**, que é "montar" em português, o que faz muito mais sentido para um componente, né?

Em geral, um componente tem um ciclo de vida assim:

**componentWillMount** (antes de ser montado)
   ```typescript
   useLayoutEffect(() => {
     // ...
   }, [])
   ```
   Começamos com um bem pouco utilizado, o hook `useLayoutEffect`. Ele, com o array vazio, atua como o `componentWillMount`. É usado quando você precisa mudar algo visualmente antes do componente aparecer, para que não haja aquele problema da tela piscar assim que a tela carrega. Um bom exemplo disso atualmente é a mudança de temas para light/dark.

**componentDidMount** (acabou de ser montado)
   ```typescript
   useEffect(() => {
     // ...
   }, [])
   ```
   O `useEffect` com o array de dependências vazio atua como o `componentDidMount`. Diferente do `useLayoutEffect`, ele executa assim que o componente é renderizado. Normalmente, é utilizado para fazer chamadas para o servidor ou realizar algum cálculo com props passados.

**componentWillUpdate** (componente vai ser atualizado)
   ```typescript
   useEffect(() => {
     // ...
   }, [variavel])
   ```
   O `componentWillUpdate` pode ser simulado com o `useEffect` e um array de dependências. Quando a variável especificada no array de dependências sofre alterações, o código dentro do `useEffect` é executado. Isso é útil para reagir a mudanças nos props ou estado do componente.

**componentWillUnmount** (componente vai ser desmontado)
   ```typescript
   useEffect(() => {
     return () => {
       // Cleanup code here
     }
   }, [])
   ```

O `componentWillUnmount` é simulado com o `useEffect` e uma função de retorno. Essa função é executada quando o componente está prestes a ser desmontado. É o lugar ideal para limpar recursos, cancelar assinaturas ou fazer outras tarefas de limpeza.

Lembrando que esses métodos são mais comuns em **class components**, mas com os **function components** e os hooks, podemos obter o mesmo comportamento de forma mais concisa e eficiente. 😉