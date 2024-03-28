## 1. Por dentro do GlobalStyles

Você aprendeu a normalizar os estilos CSS de um projeto. Mas por que devemos fazer isso? Qual é o objetivo de utilizar o GlobalStyles para resetar o CSS de um projeto? Marque uma ou mais opções corretas:

**Resposta:**
- Aplicar um estilo padrão global em todos os elementos: <br> 
    - Utilizar o GlobalStyles para resetar o CSS de um projeto permite aplicar um estilo padrão global em todos os elementos. Isso significa que você pode definir as propriedades de estilo básicas (como margens, preenchimento, fontes) da mesma forma em todo o site.

- Evitar conflitos de estilos entre diferentes navegadores:
    - GlobalStyles ajuda a evitar conflitos de estilos entre diferentes navegadores, já que alguns navegadores possuem estilos padrão diferentes para certos elementos HTML, o que pode levar a inconsistências na aparência do site.

## 2. Estilo ativo

Imagine que você precise desenvolver uma lista de navegação e o requisito especial dessa lista é criar estilos que serão visíveis apenas no item ativo, isto é, naquele elemento de navegação que foi selecionado. Marque a alternativa que corresponda a uma forma correta de fazer isso de acordo com o que foi falado nas aulas anteriores:


**Resposta:**
- Utilizando props para receber o valor ativo do elemento.
    - Correto! Ao usar props para receber o valor ativo, podemos passar esse estado ativo como uma propriedade para o componente de item de navegação. Com base no valor desta propriedade, podemos aplicar estilos diferentes ao componente, tornando-o ativo ou não.


## 3. Meu layout, minha vida

Imagine que está desenvolvendo um projeto de uma aplicação web de um E-commerce e seu Tech Lead pediu para que priorizasse a criação do layout da galeria de produtos em destaque. Você dominando o styled-components e os conceitos de divisão de conteúdo no HTML partiu para criação.

![Imagem de layout da galeria de produtos em destaque](https://caelum-online-public.s3.amazonaws.com/3096-react/Aula3-img1.png.png)


**Resposta**
const ProdutosContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
`

Utilizamos o display: flex para criar um container flexível, justify-content: space-between para distribuir os produtos igualmente na horizontal, flex-wrap: wrap para permitir a quebra dos produtos em várias linhas e gap: 20px para adicionar espaçamento entre os produtos.


## 4. Criando um overlay
Você tem uma tarefa muito importante para o projeto que seu time está trabalhando: criar um overlay que será utilizado em uma modal de zoom, assim como no curso. Marque a alternativa que indique corretamente o necessário:

**Resposta**
const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

Essa é a estrutura base que queremos. O código utiliza a biblioteca styled-components para criar um componente chamado Overlay, que possui as propriedades de estilo adequadas para um overlay de modal de zoom. O background-color define a cor de fundo com uma transparência de 70% (rgba(0, 0, 0, 0.7)), e as propriedades de position e top, right, bottom, left são utilizadas para posicionar o overlay de forma fixa e cobrir toda a área visível da página.