# Pesquisa Binária 
def pesquisa_binaria(lista, item):
    baixo = 0
    alto = len(lista) - 1
    while baixo <= alto:
        meio = (baixo + alto) // 2 # 0 + 4 / 2 = 2
        chute = lista[meio] # o chute é lista[2] para saber se o item está naquela posição
        if chute == item: # Se o chute for igual, retorna a posição correta
            return meio
        if chute > item: # Se chute for maior, o numero alto passa a ser meio - 1
            alto = meio - 1
        else:
            baixo = meio + 1 # Se chute for menor, o numero baixo passa a ser meio + 1
    return None

minha_lista = [1, 3, 5, 7, 9]
print(pesquisa_binaria(minha_lista, 9)) # Revela a posição do item dentro da lista
print(pesquisa_binaria(minha_lista, -1)) # Caso nao exista retorna None
