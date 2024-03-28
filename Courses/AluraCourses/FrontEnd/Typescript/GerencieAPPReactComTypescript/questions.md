## 1. Inicializando nosso projeto

Quando trabalhamos com React, podemos criar o projeto do zero, adicionando todos os arquivos necessários para trabalhar com essa biblioteca, ou podemos utilizar um único comando chamado de Create React App.

Sabendo disso, quais os comandos corretos utilizados no terminal para:

1. Criar um projeto React com Typescript utilizando npm com Create React App
2. Entrar na pasta do projeto
3. Rodar o projeto?

**Resposta:**

```typescript
// Comando para criar e gerenciar pacotes
npx create-react-app projeto --template typescript --use-npm

// Comando para entrar 
cd projeto | npm start
```

Alternativa correta! O comando `create-react-app projeto --template typescript` cria o projeto com a linguagem TypeScript, o comando `cd projeto` entra na pasta desse projeto criado e o comando `npm start` roda o projeto.

`npx` : 
O comando npx, diferente do comando npm, apenas executa um pacote, sem que precisemos instalá-lo na nossa máquina, como o create-react-app normalmente só é usado no começo para criar o projeto, o ideal é executar com npx pois isso fará com que você sempre execute a última versão do pacote.

`--use-npm`: Caso o yarn esteja instalado na sua máquina, o Create React App prioriza à utilização dele, e isso irá gerar um yarn.lock dentro da nossa aplicação, e nós queremos utilizar o npm ao invés do yarn, por isso precisamos usar o comando --use-npm se quisermos garantir que o Create React App utilize o npm para instalar as dependências necessárias e também garantir que ele gere o package-lock.json ao invés do yarn.lock.


## 2. Renderização dinâmica de arrays
```typescript
const tarefas = [{ tarefa: 'React' }, { tarefa: 'Javascript' }, { tarefa: 'Typescript '}];
```

Qual é a alternativa que utiliza um método de array de forma correta para renderizar essas tarefas, colocando cada tarefa desse array dentro de um p?

**Resposta:**
```typescript
tarefas.map(item => <p> {item.tarefa} </p>)
```

O map retorna um outro array, e como não foi utilizada chaves, ele está retornando um array de JSX, isso retorna os itens como esperado!

### 2.2
Crie um function component Lista dentro do arquivo src/components/Lista/index.tsx. O componente contém um array chamado tarefas tendo 2 objetos representando cada tarefa, uma das tarefas é React e o tempo é 02:00:00 e o outro é Javascript, que tem o tempo de 01:00:00.

Após isso, retorne uma div, depois renderize esse array utilizando o método map, retornando cada item dentro de uma tag div, a tarefa dentro de uma tag h3 e o tempo dentro de uma tag span. Não esqueça de utilizar o index como key;
```typescript
function Lista() {
  const tarefas = [{ 
    tarefa: 'React', 
    tempo: '02:00:00' },
  { 
    tarefa: 'Javascript',
    tempo: '01:00:00'  }]
  return (
    <div>
      {tarefas.map((item, index) => (
        <div key={index}>
          <h3> {item.tarefa} </h3>
          <span> {item.tempo} </span>
        </div>
      ))}
    </div>
  )
}
```

## 3. Importando CSS Modules

Temos essa estrutura de arquivos:

```
components/
  botao/
    index.tsx
   Botao.module.scssCOPIAR CÓDIGO
```

Com o CSS Modules já configurado na aplicação, como conseguimos importar e utilizar o CSS Modules no arquivo index.tsx, sabendo que dentro de Botao.module.scss existe uma classe botao?

**Resposta:**

```typescript
import style from './Botao.module.scss';

<button className={style.botao}> … </button>
```
Dessa forma conseguimos importar dizendo onde nosso módulo está e colocando as classes CSS dentro de um objeto JS!


## Props padrão para filhos
Qual é o prop padrão que o React disponibiliza para poder utilizar JSX como filho de um componente React?

**Resposta**

children

o React proporciona a props children para que a gente consiga colocar JSX dentro do componente.


## useStes
Fazendo esse código aqui:
```typescript
 const [texto, setTexto] = useState('meu estado');
```
Qual a opção correta sobre qual valor é retornado pela função useState?

**Resposta**

Um array, com o primeiro index sendo o estado e o segundo sendo à função de mudar o estado.
A função useState retorna um array para que possamos desestruturar e pegar os valores de forma simples, apenas utilizando [estado, funcaoQueMudaOEstado].


## 04 : Reaproveitamento de interfaces

Qual a alternativa correta que reaproveita os tipos da interface Props1 para a interface Props2?

**Resposta**
interface Props2 extends Props1 {...}

Dessa forma nós conseguimos herdar todos os tipos de Props1 dentro de Props2!

## 05 : Reagindo ao estado

Precisamos reagir ao estado selecionado para fazer uma mudança no nosso componente. Qual alternativa que define a forma correta de reagir a essa mudança?

**Resposta**
Conseguimos com o useEffect "observar" a mudança do estado e, sempre que ele mudar, executar uma função fazendo alguma alteração.


