## 1. Sobre o Tailwind

Neste primeiro vídeo, fomos apresentados ao framework CSS Tailwind, aprendemos o que ele é, por quê usá-lo, seus propósitos e vantagens. Diante disso, assinale a alternativa correta:

De acordo com o que vimos anteriormente, podemos afirmar que:

**Resposta**

Uma das grandes vantagens do Tailwind, é que não precisamos seguir um padrão visual pré definido pelo framework.

As classes de utilidades do Tailwind permitem um maior controle na estilização da página, pois há uma alta variedade de classes, o que torna o layout mais personalizado.

## 2. Tailwind.config

Gabriela decidiu adicionar uma personalização de cor ao seu projeto, porém ao aplicar a classe text-primary na linha 21 do código, percebeu que não obteve sucesso e a classe não foi aplicada. Então, resolveu compartilhar seu código HTML, para que nós possamos te ajudar a entender o que está acontecendo.

Código:

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwindCSS.config = {
        theme: {
          extend: {
            primary: "#f2dae7",
          },
        },
      };
    </script>
  </head>
  <body>
    <div
      class="p-10 m-auto my-10 flex flex-col w-2/5 bg-gradient-to-r from-pink-300 to-slate-400 justify-center"
    >
      <p class="text-6xl font-black text-primary">Gabriela</p>
      <p class="text-4xl">Front-end</p>
    </div>
  </body>
</html>
```

** Resposta **

O erro se encontra na linha 13 do código onde declaramos a variável da cor sem o uso da palavra chave colors.
Alternativa correta! Certo! O erro neste caso foi não ter declarado a palavra chave colors, que permite que você personalize a paleta de cores global para seu projeto. A cor personalizada deveria estar dentro do bloco de colors, dessa forma:

```html
colors: { primary: '#62D8C1' },
```

O erro se encontra na linha 10 do código, na declaração das configurações do Tailwind.
Alternativa correta! Certo! A estudante está declarando tailwindCSS.config {} quando a sintaxe correta é tailwind.config {}.

## 3. Flexbox no Tailwind CSS

Gabriela está avançando em seu portfólio e percebeu que já sabe como dispor os elementos em coluna utilizando o Flexbox por meio do Tailwind, mas ainda está em dúvida em relação à disposição em linha.

Sendo assim, ela nos enviou o seguinte código:

```html
<body>
  <div>
    <img
      class="h-44"
      src="https://img.freepik.com/free-photo/website-development-developer-working-program-codes-office-computer-program-programmer-workplace-programming-code-software-source-code_372999-389.jpg?w=1380"
      alt="codigo json"
    />
    <div
      class="p-10 flex flex-col w-2/5 bg-gradient-to-r from-pink-300 to-slate-400 justify-center h-44"
    >
      <p class="text-6xl font-black text-primary font-titulo">Gabriela</p>
      <p class="text-4xl">Front-end</p>
    </div>
  </div>
</body>
```

Exemplo:
![Imagem Exemplo](https://caelum-online-public.s3.amazonaws.com/2415-tailwind/03/aula3-img1.png)

Resultado:
![Imagem Resultado](https://caelum-online-public.s3.amazonaws.com/2415-tailwind/03/aula3-img2.png)

De acordo com os seus conhecimentos a respeito do Flexbox no Tailwind, o código correto que deverá ser utilizado para construir o layout que a estudante deseja é:

**Resposta**

O código deverá estar assim: <div class="flex">.
Certo! Para que possamos construir o layout que a estudante deseja, precisamos adicionar na linha 2 do código a classe flex na div, com isso os elementos irão se dispor com o flex-direction: row (um ao lado do outro).

## 4. Qual é a classe?

Gabriela segue avançando em seu projeto pessoal, no momento está praticando como estilizar as bordas e sombras com Tailwind e pediu nossa ajuda para construir esse layout:

Exemplo:
![Imagem Exemplo](https://caelum-online-public.s3.amazonaws.com/2415-tailwind/04/aula4-img1.png)

No momento seu projeto encontra-se assim:

```html
<body>
  <div class="flex w-fit m-auto my-10">
    <img
      class="h-44"
      src="https://img.freepik.com/free-photo/website-development-developer-working-program-codes-office-computer-program-programmer-workplace-programming-code-software-source-code_372999-389.jpg?w=1380"
      alt="codigo json"
    />
    <div
      class="p-10 flex flex-col bg-gradient-to-r from-pink-300 to-slate-400 justify-center h-44"
    >
      <p class="text-6xl font-black text-primary font-titulo">Gabriela</p>
      <p class="text-4xl">Desenvolvedora Front-end</p>
    </div>
  </div>
</body>
```

![Imagem Exemplo](https://caelum-online-public.s3.amazonaws.com/2415-tailwind/04/aula4-img2.png)

Sendo assim, as classes que irão construir o layout que Gabriela deseja, é:

**Resposta**

Para construir as bordas e sombreamentos devemos utilizar a classe rounded-r-xl na linha 4 do código e a classe utilitária shadow-2xl na linha 2 do código.

Alternativa correta! Certo! A classe rounded-r-xl irá produzir um arredondamento das bordas à direita e a classe shadow-2xl irá construir o sombreamento do elemento main. O código ficará assim:

## 5. Complete a animação

Gabriela se inspirou na Alura Newsletter e decidiu aplicar a animação do sino balançando em seu projeto pessoal, criando esse efeito nos links das suas redes sociais.

Mas antes de aplicar, ela gostaria de saber se você, assim como ela, também aprendeu a fazer as configurações no tailwindConfig dessa animação.

Sendo assim, analise o código de Gabriela e assinale as alternativas que preenchem com os trechos de código corretos os espaços que estão vazios.

```html
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#f2dae7'
            },
            fontFamily: {
                titulo: ['Vast Shadow', 'cursive']                    
            },
            _________ {
                sino_kf: {
                    '0%, 100%': {
                        transform: 'rotate(-10deg)'
                    },
                    '___': {
                        transform: 'rotate(10deg)'
                    },
                }
            },
            animation: {
                sino: 'sino_kf 0.31s ____________ infinite'
            },
        }
    }
}
```

**Resposta**

- Na linha 15 do código, o trecho que completa corretamente é 50% e na linha 21, o trecho é ease-in-out. <br> Na animação do sino, temos modificações da posição da rotação quando a animação inicia e termina (0% e 100%) e também na metade da animação, o que é representado pelos 50%. E a animação do sino propriamente dita, tem a diretiva ease-in-out, que faz com que a mudança aconteça lentamente tanto no início quanto no final, e acelere apenas no meio.

- Na linha 10 do código, o trecho que completa corretamente é: keyframes: <br>
Keyframes é a palavra chave utilizada no Tailwind para passar as configurações de tema da animação.