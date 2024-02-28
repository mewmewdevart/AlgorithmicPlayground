## Sumário 📚
- [Execução BIG O](#execução-big-o)
- [Pesquisa Binária](#pesquisa-binária)
- [Ordenação por Seleção](#ordenação-por-seleção)

### Execução BIG O

O Big O é uma notação que descreve o desempenho ou complexidade de tempo de um algoritmo em termos do tamanho de sua entrada. Ele nos ajuda a entender como o tempo de execução de um algoritmo cresce à medida que o tamanho da entrada aumenta.

- O(log n): Tempo de algoritmos eficientes, como a pesquisa binária.
- O(n): Tempo linear, onde o tempo de execução cresce proporcionalmente ao tamanho da entrada.
- O(n * log n): Tempo de algoritmos rápidos de ordenação, como o quicksort.
- O(n²): Tempo de algoritmos mais lentos de ordenação, como a ordenação por seleção.
- O(n!): Tempo de algoritmos extremamente lentos, como o do caixeiro viajante.

### Pesquisa Binária
A pesquisa binária é um algoritmo de busca utilizado para encontrar um determinado elemento em uma lista ordenada, dividindo repetidamente a lista pela metade e comparando o elemento alvo com o elemento central.

Na pesquisa binária, o número máximo de etapas para encontrar um item em uma lista ordenada pode ser determinado pelo logaritmo base 2 do tamanho da lista. Suponha que você tenha uma lista com 128 nomes diferentes e esteja realizando uma pesquisa binária. Qual seria o número máximo de etapas necessárias para encontrar o nome desejado?

Para calcular a quantidade de etapas necessárias, podemos utilizar a lógica do logaritmo, que é o oposto da exponenciação. Por exemplo:
- 2 elevado a 2 = 2 x 2 = 4
- 2 elevado a 3 = 2 x 2 x 2 = 8
- 2 elevado a 4 = 2 x 2 x 2 x 2 = 16
- 2 elevado a 5 = 2 x 2 x 2 x 2 x 2 = 32
- 2 elevado a 6 = 2 x 2 x 2 x 2 x 2 x 2 = 64
- 2 elevado a 7 = 2 x 2 x 2 x 2 x 2 x 2 x 2 = 128
- 2 elevado a 8 = 2 x 2 x 2 x 2 x 2 x 2 x 2 x 2 = 256

Como podemos observar, 2 elevado a 7 é igual a 128. Portanto, seria necessário um total de 7 passos para encontrar o nome desejado.

- Utilizando a propriedade do logaritmo mencionada, podemos calcular:
    log base 2 de 128 é aproximadamente igual a 7

- E se quisermos saber a quantidade necessária para o dobro da lista? 🤔 <br>
    Seria possível fazer isso usando 8 etapas porque 128 + 128 = 256, que é elevado a 8.
    log base 2 de 256 é aproximadamente igual a 8

Portanto, o número máximo de etapas necessárias para encontrar o nome desejado é aproximadamente 7, conforme sua explicação correta do logaritmo base 2.

**Observe o script**
- [00pesquisaBinaria_00.py](00pesquisaBinaria_00.py) : Revela a posição do item dentro de um array de opções!

**Exercícios** <br> Forneça o tempo de execução considerando os termos de notação BIG O.
1. Você tem um nome e deseja encontrar o número de telefone para esse nome em uma agenda telefônica?
   - **Resposta:** O(log n)
3. Voce tem um numero de telefone e deseja encontrar o dono dele em uma agenda telefonica (Dica: Deve procurar pela agenda inteira)
   - **Resposta:** O(n)
5. Voce quer ler o numero de cada pessoa da agenda telefonica
   - **Resposta:** O(n)
7. Voce quer ler os numeros apenas dos nomes que começam com A
    - **Resposta:** O(n)

**Recapitulando**
- A pesquisa binária é muito mais rápida do que a simples
- O(log n) é mais rápido do que O(n), e ainda fica mais rápido conforme os elementos da lista aumentam
- A rapidez de um algoritmo não é medida em segundos
- O tempo de execução de um algoritmo é medido por meio de seu crescimento
- O tempo de execução dos algoritmos é expresso na notação Big O

### Ordenação por Seleção

**Arrays**
- Um array é uma estrutura de dados que contém uma coleção de elementos do mesmo tipo, organizados em uma sequência contígua de memória.

**Lista Encadeada**

- Uma lista encadeada é uma estrutura de dados composta por nós, onde cada nó contém um valor e uma referência (ou ponteiro) para o próximo nó na sequência.

As principais diferenças entre lista encadeada e array são:
- Armazenamento na Memória
- Tamanho e Flexibilidade
- Acesso aos Elementos
- Inserção e Remoção
- Uso de Memória
- Eficiência em Operações

**Observe o script**
- [01ordenaSelecao.py](01ordenaSelecao.py)

**Exercícios de Ordenação por Seleção**:
1. Suponha que você esteja criando um aplicativo para acompanhar suas finanças:

| Número | Item                  |
|--------|-----------------------|
| 1      | Compras               |
| 2      | Cinema                |
| 3      | Mensalidade do SFBC  |

Todos os dias você anotará tudo o que gastou e onde gastou. No final do mês, você deverá revisar os seus gastos e resumir o quanto gastou. Logo, você terá um monte de inserções e poucas leituras. Você deverá usar um array ou uma lista para implementar este aplicativo? 
   - **Resposta:** Lista encadeada, porque a lista terá mais inserções do que leituras. Estarei adicionando despesas à lista todos os dias e lendo todas as despesas uma vez no mês.
2.  Suponha que você esteja criando um aplicativo para anotar os pedidos dos clientes em um restaurante. Seu aplicativo precisa de uma lista de pedidos. Os garçons adicionam os pedidos a essa lista e os chefes retiram os pedidos da lista. Funciona como uma fila. Os garçons colocam os pedidos no final da fila e os chefes retiram os pedidos do começo dela para cozinhá-los.
Você usaria um array ou uma lista encadeada para implementar essa lista? (Dica: listas encadeadas são boas para inserções/eliminações e arrays são bons para acesso aleatório. O que fazer neste caso?)
   - **Resposta:**  Lista encadeada. Muitas inserções e deleções estão ocorrendo. Não é necessário pesquisar ou ter acesso aleatório a uma posição específica (nisso os arrays são bons), pois o garçom sempre pega o último da fila enquanto o chefe o primeiro.
3.  Vamos analisar um experimento. Imagine que o Facebook guarda uma lista de usuários. Quando alguém tenta acessar o Facebook, uma busca é feita pelo nome de usuário. Se o nome da pessoa está na lista, ela pode continuar o acesso. As pessoas acessam o Facebook com muita frequência, então existem muitas buscas nessa lista. Presuma que o Facebook use a pesquisa binária para procurar um nome na lista. A pesquisa binária requer acesso aleatório – você precisa ser capaz de acessar o meio da lista de nomes instantaneamente. Sabendo disso, você implementaria essa lista como um array ou uma lista encadeada? 
    - **Resposta:** Um array, por se tratar de uma pesquisa binária, o tipo de leitura mais rápida considerada para esse caso seria se os dados estivessem de forma ordenada. Ele pesquisaria letra por letra. Se o nome da pessoa é Larissa, ele procuraria por L usando a pesquisa binária, em seguida o A, depois o R, e assim por diante, uma série de leituras [L][A][R][I][S][S][A] sendo feita a cada chamada.
4.  As pessoas se inscrevem no Facebook com muita frequência também. Suponha que você decida usar um array para armazenar a lista de usuários. Quais as desvantagens de um array em relação às inserções? Em particular, imagine que você está usando a pesquisa binária para buscar os logins. O que acontece quando você adiciona novos usuários em um array?
    - **Resposta:** A pesquisa binária seria lenta e falha pois os elementos não estariam ordenados sequencialmente, dificultando a localização eficiente de um usuário específico.

**Observação 👀**: É possível usar diferentes tipos de ordenações em um projeto, imaginando em um contexto híbrido, como um array de listas encadeadas. <br>
![Screenshot from 2024-02-27 23-21-41](https://github.com/mewmewdevart/AlgorithmicPlayground/assets/50052600/6cd37042-a72c-4fad-a369-ab9cbaaf0df5)


