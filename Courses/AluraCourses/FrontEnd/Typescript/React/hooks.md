### `useState`

O `useState` é um **Hook** fundamental no React que permite criar e gerenciar estados em componentes funcionais.

1. **Inicialização de Estado Simples:**

   ```tsx
   import React, { useState } from 'react';

   function Counter() {
     const [count, setCount] = useState(0);

     const increment = () => {
       setCount(count + 1);
     };

     return (
       <div>
         <h1>Count: {count}</h1>
         <button onClick={increment}>Increment</button>
       </div>
     );
   }
   ```

   Neste exemplo, criamos um contador simples. O estado `count` começa com o valor `0`, e o botão "Increment" aumenta o contador em 1.

2. **Estado em Objetos:**

   Às vezes, você precisa gerenciar vários valores de estado. Use um objeto para agrupá-los:

   ```tsx
   import React, { useState } from 'react';

   function ThemeSwitcher() {
     const [theme, setTheme] = useState({ mode: 'light', fontSize: 16 });

     const toggleTheme = () => {
       setTheme((prevTheme) => ({
         ...prevTheme,
         mode: prevTheme.mode === 'light' ? 'dark' : 'light',
       }));
     };

     return (
       <div>
         <p>Theme: {theme.mode}</p>
         <button onClick={toggleTheme}>Toggle Theme</button>
       </div>
     );
   }
   ```

   Aqui, o estado `theme` é um objeto com as propriedades `mode` e `fontSize`. O botão "Toggle Theme" alterna entre os modos claro e escuro.

3. **Atualização Baseada no Estado Anterior:**

   É uma boa prática usar a função de atualização do estado quando você depende do estado anterior:

   ```tsx
   import React, { useState } from 'react';

   function Incrementer() {
     const [count, setCount] = useState(0);

     const incrementByTwo = () => {
       setCount((prevCount) => prevCount + 2);
     };

     return (
       <div>
         <h1>Count: {count}</h1>
         <button onClick={incrementByTwo}>Increment by 2</button>
       </div>
     );
   }
   ```

   Aqui, o botão "Increment by 2" adiciona 2 ao contador, independentemente do valor atual.

### `useEffect`

O `useEffect` é um hook fundamental para lidar com efeitos colaterais em componentes funcionais. Ele é usado para executar código em resposta a mudanças em variáveis de estado, propriedades ou outros eventos.

Aqui está o seu código com comentários explicativos:

```tsx
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  // Estado para controlar o tipo de recurso (posts, comments, todos)
  const [resourceType, setResourceType] = useState("posts");

  // useEffect com dependência na variável resourceType
  useEffect(() => {
    console.log("Resource type change!"); // Será chamado quando resourceType mudar
  }, [resourceType]);

  // Função para atualizar o tipo de recurso
  const changeResourceType = (newResourceType: string) => {
    setResourceType(newResourceType);
  }

  return (
    <>
      <div className="useEffects">
        <h2>useEffect</h2>
        <p>{resourceType}</p> {/* Exibe o tipo de recurso atual */}
        <div>
          <button onClick={() => changeResourceType("posts")}>Posts</button>
          <button onClick={() => changeResourceType("comments")}>Comments</button>
          button onClick={() => changeResourceType("todos")}>Todos</button>
        </div>
      </div>
    </>
  );
}

export default MyComponent;
```

Aqui estão os principais pontos do exemplo:

1. **`useState`**: O `useState` para controlar o estado da variável `resourceType`. Isso permite que você altere o tipo de recurso com base nos botões clicados.

2. **`useEffect`**: O `useEffect` é usado para observar mudanças na variável `resourceType`. Quando `resourceType` muda, a função de callback dentro do `useEffect` é executada (no caso, o `console.log("Resource type change!")`).

3. **Comentários**:
   - O primeiro comentário explica que o `useEffect` será chamado sempre que `resourceType` mudar.
   - O segundo comentário destaca que, se você usar o `useEffect` sem a lista de dependências (ou seja, sem `[resourceType]`), ele será chamado várias vezes, sempre que o componente renderizar.

### `useRef`

O `useRef` é uma ferramenta poderosa que nos permite acessar e manipular elementos do DOM, bem como armazenar valores persistentes entre renderizações. Vou melhorar o exemplo, adicionar mais comentários e explicar o que cada parte faz:

```tsx
import React, { useState, useRef, useEffect } from 'react';

function UseRefExample() {
  // Estado para armazenar o nome digitado no input
  const [name, setName] = useState('');

  // Ref para contar quantas vezes o componente foi renderizado
  const renders = useRef(0);

  // Efeito colateral para atualizar o contador de renders
  useEffect(() => {
    renders.current = renders.current + 1;
  });

  // Ref para armazenar a referência ao input
  const inputRef = useRef();

  // Função para focar no input quando o botão for clicado
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="useRefs">
      <input
        ref={inputRef} // Associando o ref ao input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite seu nome"
      />
      <p>Hello, my name is {name}</p>
      <p>Renders: {renders.current}</p>
      <button onClick={focusInput}>Focus no Input</button>
    </div>
  );
}

export default UseRefExample;
```

Aqui estão as principais partes do exemplo:

1. **`useRef` para contagem de renders**:
   - Criamos uma variável `renders` usando `useRef(0)`.
   - O valor inicial é `0`.
   - A cada renderização, atualizamos o valor dentro do efeito colateral.

2. **`useRef` para armazenar a referência ao input**:
   - Criamos uma variável `inputRef` usando `useRef()`.
   - Associamos essa referência ao input usando `ref={inputRef}`.
   - Agora podemos acessar o input diretamente através de `inputRef.current`.

**3. Botão para focar no input**:
   - Quando o botão é clicado, chamamos a função `focusInput`.
   - Essa função usa `inputRef.current.focus()` para focar no input.

### `useReducer`

O `useReducer` é um hook do React que oferece uma alternativa ao `useState` para gerenciar o estado complexo da aplicação de forma mais estruturada. Ele é especialmente útil quando o estado depende do estado anterior e requer lógica mais avançada para atualizações.

O `useReducer` recebe um `reducer` e um `estado inicial` como argumentos. O `reducer` é uma função que especifica como o estado deve ser atualizado em resposta a uma ação. A função do `reducer` recebe o estado atual e uma ação, retornando o novo estado. As ações são normalmente objetos com uma propriedade `type` que indica o tipo da ação.

```typescript
import React, { useReducer } from 'react';

// Definindo o reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Estado inicial
const initialState = { count: 0 };

// Componente usando useReducer
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default Counter;
```

Neste exemplo, `reducer` manipula o estado com base no tipo de ação recebida. O componente `Counter` utiliza o `useReducer` para gerenciar o estado do contador, e os botões disparam as ações correspondentes para atualizar o estado.


### Quando usar o `useReducer` e o `useState`?
A escolha entre `useReducer` e `useState` no React depende das necessidades específicas do seu aplicativo e do tipo de lógica de gerenciamento de estado que você está implementando. Ambos têm seus casos de uso adequados, e a decisão muitas vezes envolve fatores como complexidade do estado, lógica de atualização e preferências de organização do código. 🤔

### Use `useState` quando:

1. **Estado Simples:**
   - Use `useState` para estados simples, onde a lógica de atualização é direta e não envolve cálculos complexos ou dependência do estado anterior. 

2. **Independência de Estado:**
   - Quando cada pedaço de estado é independente e não influencia o outro, `useState` é geralmente mais simples e direto.

3. **Facilidade de Leitura:**
   - Em casos mais simples e diretos, `useState` pode proporcionar um código mais conciso e fácil de entender. 

### Use `useReducer` quando:

1. **Lógica Complexa de Atualização:**
   - Quando a lógica de atualização do estado é mais complexa, envolvendo várias condições ou dependência do estado anterior, `useReducer` pode tornar o código mais organizado. 

2. **Estados Relacionados:**
   - Ao lidar com estados relacionados ou múltiplos estados que precisam ser atualizados em conjunto, `useReducer` pode facilitar a gestão desse comportamento. 

3. **Lógica de Ação:**
   - Quando a lógica de atualização do estado é mais semelhante a uma "ação" com um tipo associado, `useReducer` e a estrutura de um switch-case podem ser mais apropriados. ⚙️

4. **Atualização Atômica:**
   - Para garantir atualizações atômicas e consistentes, `useReducer` pode ser preferível, especialmente quando várias partes do estado precisam ser atualizadas ao mesmo tempo. ⚛️

5. **Lógica de Negócios:**
   - Em aplicações com lógica de negócios mais complexa, `useReducer` pode ajudar a manter essa lógica centralizada e mais fácil de entender.

### Considerações Gerais:

- Se a lógica de atualização do estado for simples e direta, e você não precisa lidar com muita complexidade, `useState` pode ser a escolha mais simples e eficiente. 

- Se a lógica de atualização envolve uma série de casos ou é mais complexa, `useReducer` pode proporcionar uma estrutura mais organizada e escalável. 

- Muitas vezes, a escolha entre os dois é uma questão de preferência pessoal e de qual abordagem deixa o código mais claro e fácil de manter para você e sua equipe. 