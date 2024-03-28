## React: Estilize Componentes com Styled Components e Manipule Arquivos Estáticos

### Exemplo de Estilização com Styled Components:

```javascript
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #3498db;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

const App = () => {
  return (
    <div>
      <Button>Styled Button</Button>
    </div>
  );
};

export default App;
```

### Solução para Manipulação de Arquivos Estáticos:

Para manipular arquivos estáticos no React, você pode usar a funcionalidade de importação/exportação padrão do JavaScript. Por exemplo, para importar uma imagem estática:

```javascript
import React from 'react';
import logo from './logo.png'; // Caminho relativo para o arquivo estático

const App = () => {
  return (
    <div>
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default App;
```

## Por que usar o Vite em vez de Create React App no React?

### Exemplo de Configuração Básica com Vite:

1. Instale o Vite globalmente:

```
npm install -g create-vite
```

2. Crie um novo projeto React usando Vite:

```
create-vite my-react-app
```

3. Navegue até o diretório do projeto:

```
cd my-react-app
```

4. Inicie o servidor de desenvolvimento:

```
npm run dev
```

### Razões para Usar o Vite:

- **Desempenho:** O Vite é conhecido por sua inicialização rápida e tempos de compilação mais rápidos em comparação com o Create React App.
- **HMR (Hot Module Replacement) Rápido:** O Vite oferece HMR mais rápido, o que significa que as alterações no código são refletidas instantaneamente no navegador durante o desenvolvimento.
- **Suporte para ESM (ECMAScript Modules):** O Vite suporta nativamente os módulos ES, o que pode levar a um código mais limpo e eficiente.

## Diferenças entre CSS-in-JS e SCSS

### Exemplo de Estilização com CSS-in-JS (Styled Components):

```javascript
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: #3498db;
  color: #ffffff;
  padding: 20px;
`;

const App = () => {
  return (
    <StyledDiv>
      <p>Hello, World!</p>
    </StyledDiv>
  );
};

export default App;
```

### Exemplo de Estilização com SCSS:

```scss
/* styles.scss */

$primary-color: #3498db;
$secondary-color: #ffffff;

.styled-div {
  background-color: $primary-color;
  color: $secondary-color;
  padding: 20px;
}
```

Em um arquivo JavaScript ou javascript:

```javascript
import React from 'react';
import './styles.scss'; // Importa estilos SCSS

const App = () => {
  return (
    <div className="styled-div">
      <p>Hello, World!</p>
    </div>
  );
};

export default App;
```

### Diferenças:

- **CSS-in-JS:** Permite escrever estilos diretamente no arquivo JavaScript/javascript, proporcionando encapsulamento automático de estilos.
- **SCSS:** É uma pré-processador CSS que permite utilizar variáveis, mixins, e outras funcionalidades, mas requer uma compilação separada para gerar arquivos CSS.
- **Encapsulamento:** CSS-in-JS oferece encapsulamento automático de estilos, enquanto o SCSS não oferece esse recurso por padrão, exigindo técnicas adicionais para alcançar um encapsulamento similar.
```
