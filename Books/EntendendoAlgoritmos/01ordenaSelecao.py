def buscaMenor(arr):
    menor = arr[0] # Armazena o conteudo do primeiro indice[0]
    menor_indice = 0 # Armazena o indice do menor valor
    for i in range(1, len(arr)):  # Para i no intervalo de 1 até o tamanho do array
        if arr[i] < menor: # Se o valor do indice[i] for menor que o valor do indice[0]
            menor = arr[i] # O valor do indice[i] passa a ser o menor
            menor_indice = i # O indice do menor valor passa a ser o indice[i]
    return menor_indice

def ordenacaoPorSelecao(arr):
    novoArr = []
    for i in range(len(arr)):
        menor = buscaMenor(arr)
        novoArr.append(arr.pop(menor))
    return novoArr

arr = [5, 3, 6, 2, 10]


print (ordenacaoPorSelecao(arr))