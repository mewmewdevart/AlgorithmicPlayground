## React: escrevendo com Typescript

- Crie um projeto React com Typescript do zero com Create React App
- Entenda conceitos de React como Componentização, Props e State
- Evite sobreposições de CSS com CSS Modules
- Aprenda sobre os hooks useState e useEffect e entenda como eles eram usados nos class components
- Deixe seu código mais limpo e documentado com a forma mais atual de se escrever React
- Desenvolva seu código com conceitos de boas práticas como DRY (Don't repeat yourself) e SRP (Single Responsibility Principle)


### ReactTS

O React TypeScript combina React, uma biblioteca Typescript para construir interfaces de usuário, com TypeScript, que adiciona tipagem estática ao código.

**Prós:**

1. **Componentização:** Facilita dividir a interface do usuário em componentes reutilizáveis.
2. **Virtual DOM:** Melhora o desempenho atualizando apenas os elementos necessários na interface.
3. **tsX:** Permite escrever HTML dentro do Typescript, facilitando a criação de componentes.
4. **Comunidade ativa:** Oferece suporte extenso e recursos disponíveis para ajudar os desenvolvedores.
5. **Renderização do lado do servidor:** Melhora SEO e velocidade de carregamento inicial.

**Contras:**

1. **Curva de aprendizado inicial:** Pode ser íngreme para iniciantes.
2. **Complexidade:** A gestão do estado e a comunicação entre componentes podem se tornar complexas à medida que o aplicativo cresce.
3. **Ecossistema em constante mudança:** Atualizações frequentes podem ser necessárias para acompanhar as melhores práticas e tecnologias.
4. **Performance em aplicativos grandes:** Pode diminuir devido à complexidade da renderização e gestão de estado.
5. **SEO inicial:** Requer esforço adicional para configuração em comparação com ou

---

### Creating a TypeScript app

```typescript
npx create-react-app alura-studies --template typescript --use-npm 

// only lower capital letters to name the project
// npm to install dependencies (you can select yarn too if you want)
```

Diferenciar npx de npm;
Utilizamos o npx na aplicação e aprendemos a diferenciar o comando npx do comando npm, mostrando quando é melhor usar cada um.

```typescript
my-app
├── README.md
├── node_modules
├── package.tson
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.tson
│   └── robots.txt
└── src
    ├── App.css
    ├── App.ts
    ├── App.test.ts
    ├── index.css
    ├── index.ts
    ├── logo.svg
    ├── serviceWorker.ts
    └── setupTests.ts
```

### Pasta `alura-studies`
Esta é a pasta raiz do projeto `alura-studies`.

- **README.md**: Este é um arquivo Markdown que geralmente contém informações sobre o projeto, como instruções de instalação, uso e outras informações relevantes.
- **node_modules**: Esta pasta contém todas as dependências do projeto, instaladas via npm ou yarn.
- **package.tson**: Este arquivo é um arquivo de configuração do Node.ts que armazena metadados sobre o projeto, como nome, versão, dependências e scripts de execução.
- **.gitignore**: Este arquivo especifica os arquivos e pastas que devem ser ignorados pelo controle de versão Git.

### Pasta `public`
Esta pasta contém arquivos estáticos que serão servidos publicamente pelo servidor da aplicação.
- **favicon.ico**: Ícone que é exibido na aba do navegador.
- **index.html**: O arquivo HTML principal da aplicação, onde geralmente é definido o ponto de entrada para o React e onde o conteúdo da aplicação será renderizado.
- **logo192.png** e **logo512.png**: Logotipos de diferentes tamanhos para a aplicação.
- **manifest.tson**: Um arquivo de manifesto da web que fornece informações sobre a aplicação, como nome, descrição, ícones, etc.
- **robots.txt**: Um arquivo de texto usado para instruir os bots dos mecanismos de pesquisa sobre como rastrear e indexar páginas da web.

### Pasta `src`

Esta pasta contém o código-fonte da aplicação.
- **App.css**: Um arquivo de estilo CSS para estilizar o componente `App`.
- **App.ts**: O componente principal da aplicação, onde geralmente é definida a estrutura da interface do usuário.
- **App.test.ts**: Arquivo de teste para o componente `App`.
- **index.css**: Arquivo de estilo global para a aplicação.
- **index.ts**: Ponto de entrada da aplicação, onde o React é inicializado e o componente `App` é renderizado.
- **logo.svg**: Um logotipo da aplicação.
- **serviceWorker.ts**: Um arquivo Typescript opcional que controla o registro do service worker para habilitar a funcionalidade de cache e uso offline da aplicação.
- **setupTests.ts**: Arquivo de configuração para testes.


---


## Componentização no React: Práticas e Exemplos
A estrutura de componentização é uma parte crucial da arquitetura de desenvolvimento de aplicativos no React. Vamos explorar algumas práticas recomendadas e exemplos de código para entender melhor como criar e integrar componentes de forma eficaz.

#### 1. Convenção de Nomenclatura

**Prática Recomendada:** 
- Inicie o nome dos componentes com letra maiúscula para distingui-los dos elementos HTML padrão ou Web Components.

**Exemplo:**
```jsx
import React from 'react';

class MeuComponente extends React.Component {
  render() {
    return (
      <div>
        Meu Componente
      </div>
    );
  }
}

export default MeuComponente;
```

#### 2. Integração com Web Components

**Prática Recomendada:** 
- Ao integrar Web Components com React, siga a convenção de nomenclatura do React para evitar conflitos.

**Exemplo:**
```jsx
import React from 'react';

class MeuBotao extends React.Component {
  render() {
    return (
      <meu-botao>
        Meu Botão
      </meu-botao>
    );
  }
}

export default MeuBotao;
```

#### 3. Exemplo de Componente React

**Prática Recomendada:** 
- Crie componentes React simples e reutilizáveis para partes específicas da sua interface de usuário.

**Exemplo:**
```jsx
import React from 'react';

class Botao extends React.Component {
  render() {
    return (
      <button>
        Botão
      </button>
    );
  }
}

export default Botao;
```

### return e JSX: Escrevendo HTML no JS
O JSX é uma extensão da sintaxe do JavaScript que nos permite escrever código HTML de forma declarativa dentro do JavaScript. Embora muitas vezes seja descrito como "escrever HTML no JS", essa definição é simplista.

Quando escrevemos componentes em React, o método render() é usado para retornar o que será renderizado na interface do usuário.
```typescript

import React from 'react';

class MeuComponente extends React.Component {
  render() {
    return (
      <div>
        <h1>Olá, Mundo!</h1>
        <p>Este é um exemplo de componente React.</p>
      </div>
    );
  }
}

export default MeuComponente;
```

Embora pareça que estamos escrevendo HTML diretamente dentro do JavaScript, o JSX é **transpilado** para código JavaScript válido pelo compilador Babel antes de ser executado no navegador.

Transpilação é o processo de converter código de uma linguagem para outra linguagem de nível semelhante. 



### Usando CSS

#### Inline style

No React, é possível aplicar estilos diretamente a elementos HTML usando o atributo `style`. Dentro do JSX, os estilos são definidos como um objeto JavaScript, onde as propriedades CSS são escritas em camel case. Isso ocorre porque as chaves do objeto JavaScript não podem conter hífens. Aqui está um exemplo de como usar estilos inline:

```jsx
import React from 'react';

class Botao extends React.Component {
    render() {
        return (
            <button style={{
                backgroundColor: 'blue'
            }}>
                Botão
            </button>
        )
    }
}

export default Botao;
```

Também é possível usar expressões JavaScript dentro dos estilos inline para criar estilos dinâmicos:

```jsx
class Botao extends React.Component {
    render() {
        const color = 'red';
        const backgroundColor = 'purple';
        const estaAtivo = true;
        return (
            <button style={{
                backgroundColor: estaAtivo ? "green" : "red"
            }}>
                Botão
            </button>
        );
    }
}
```

⚠ **ATENÇÃO**: Usar inline styles não é considerado uma boa prática devido à dificuldade de manutenção e separação de preocupações.

#### Arquivo de CSS externo

Além dos estilos inline, é possível criar um arquivo CSS externo e importá-lo no componente React. Por exemplo:

```css
/* style.css */

.tarefa {
  background-color: red;
}
```

Em seguida, você pode importar e aplicar essas classes no seu componente:

```jsx
import React from 'react';
import './style.css'; // Importando o arquivo CSS

class Tarefa extends React.Component {
    render() {
        return (
            <div className="tarefa">
                Tarefa
            </div>
        )
    }
}

export default Tarefa;
```

#### CSS Modules

Os CSS Modules são uma abordagem para o escopo de estilos CSS em nível de componente. Com o CSS Modules, cada componente possui seu próprio escopo CSS, evitando conflitos de nomeação de classes. Para usar o CSS Modules, você precisa instalar a biblioteca `typescript-plugin-css-modules`:

```bash
npm install -D typescript-plugin-css-modules
```

Adicione o trecho `"plugins": [{ "name": "typescript-plugin-css-modules" }] ` no `tsconfig.json`, dentro de "compilerOptions"

Após a instalação, você pode importar arquivos CSS como módulos dentro do seu componente React, lembre-se de renomear o nome dos seus arquivos css/scss para `Nome.module.sass` ou `Nome.module.css`

```jsx
import React from 'react';
import styles from './style.module.css'; // Importando o módulo CSS

class Componente extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                Componente
            </div>
        )
    }
}

export default Componente;
```

No exemplo acima, `styles.container` é uma classe CSS definida no arquivo CSS que está vinculado ao componente. O uso de CSS Modules ajuda a evitar conflitos de nomeação de classes e mantém os estilos encapsulados dentro do componente.

Caso esteja estilizando o projeto usando uma classe que possua hífen, é possível mencioná-la dentro do projeto através de `{styles["novaTarefa-container"]}`

Existe também outras formas de importar: o CSS Modules nos dá o CSS em formato object e os exporta como default, logo, podemos importar das seguintes formas:

```typescript
import style from './NomeDoComponente.module.scss';
```

```typescript
import * as style from './NomeDoComponente.module.scss';
```

```typescript
import { default as style } from './NomeDoComponente.module.scss';
```

```typescript
import { default as style } from './NomeDoComponente.module.scss';
```

Ainda seguindo em como importar um CSS Module, como ele é um export default, podemos nomeá-lo da forma como bem entendermos, por exemplo:


```typescript
import Foo from './NomeDoComponente.module.scss';
```

```typescript
import Bar from './NomeDoComponente.module.scss';
```

```typescript
import Banana from './NomeDoComponente.module.scss'
```
Todas as formas acima retornarão o objeto que o CSS Modules exporta! <br> <br>
Como agora sabemos que podemos nomear o objeto de formas diferentes, podemos também importar vários CSS Modules em um só componente!


```typescript
import BotaoStyle from './Botao.module.scss';
import ItemStyle from './Item.module.scss';
```

#### Props

Em React, `props` (abreviação de propriedades) são utilizadas para passar dados de um componente pai para um componente filho. Isso permite que os componentes sejam configuráveis e reutilizáveis, pois podem receber diferentes dados de entrada através de props.

No exemplo fornecido:

```typescript
// Formulario/index.tsx
class Formulario extends React.Component {
	render() {
		return (
			<Botao
				texto="Adicionar"
			/>
		)
	}
}
```

Neste trecho de código, um componente `Formulario` está renderizando um componente `Botao` e passando uma propriedade `texto` com o valor "Adicionar".

```typescript
// Botao/index.tsx
import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component<{ texto: string }> {
	render() {
		return (
			<button className={style.botao}>
				{this.props.texto}
			</button>
		)
	}
}

export default Botao;
```

No componente `Botao`, a propriedade `texto` é acessada através de `this.props.texto` e usada para renderizar o texto dentro do botão.

Existem duas maneiras comuns de passar dados para um componente filho em React:

1. **Atributos Diretamente Vinculados**: Como `texto="Adicionar"`, são acessíveis dentro do componente filho através de `this.props.texto`.

2. **Props.children**: Permite passar elementos filhos diretamente para o componente filho. Por exemplo:

```typescript
<Botao>
  Adicionar
</Botao>
```

Nesse caso, o texto "Adicionar" seria acessível dentro do componente `Botao` através de `this.props.children`.

Portanto, `props` em React são essenciais para a comunicação entre componentes, permitindo uma estrutura de aplicativo mais modular e flexível. 

```typescript
interface BotaoProps {
  children: ReactNode; // Isso especifica que os children podem ser qualquer nó React
}
```