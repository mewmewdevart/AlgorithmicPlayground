### Pesquisa Binaria
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
    log₂(128) ≈ 7

- E se quisermos saber a quantidade necessária para o dobro da lista?
    Seria possível fazer isso usando 8 etapas porque 128 + 128 = 256, que é elevado a 8.
    log₂(256) ≈ 8

Portanto, o número máximo de etapas necessárias para encontrar o nome desejado é aproximadamente 7, conforme sua explicação correta do logaritmo base 2.

**Observe o scripts**
- [pesquisaBinaria_00.py](pesquisaBinaria_00.py) : Revela a posição do item dentro de um array de opções!


**Execução BIG O**
- O (log n) : Tempo Algortimos : Ex- Pesquisa Binaria
- O (n) : Tempo Linear : Ex - Pesquisa Simples
- O (n * log n) : Ex - Um algoritmo rapido de ordenação, como a a ordenação quicksort
- O (n²) : Ex - Um algoritmo lento de ordenação, como a ordenação por seleção
- O (n!) : Ex - Um algoritmo bastante lento, como o do caixeiro viajante

##### Recapitulando:
- A pesquisa binaria é muito mais rapida do que a simples
- O (log n) é mais rapido do que O(n), e ainda fica mais rapdo conforme os elementos da lista aumentam
- A rapidez de um algoritmo não é medida em segundos
- O tempo de execução de um algoritmo é medido por meio de seu crescimento
- O tempo de execução dos albogritmos é expresso na notação Big O

***