/**
 * Este programa Node lê texto da entrada padrão, calcula a frequência
 * de cada letra nesse texto e exibe um histograma dos caracteres mais
 * frequentemente usados. Ele requer Node 12 ou superior para ser executado.
 *
 * Em um ambiente do tipo Unix, você pode invocar o programa assim:
 *    node charfreq.js < corpus.txt
 */

// Esta classe estende Map para que o método get() retorne o valor especificado
// em vez de null quando a chave não estiver no mapa
class MapaPadrao extends Map {
	constructor(valorPadrao) {
		super();                              // Invoca o construtor da superclasse
		this.valorPadrao = valorPadrao;       // Lembra o valor padrão
	}

	get(chave) {
		if (this.has(chave)) {                // Se a chave já estiver no mapa
			return super.get(chave);          // retorne seu valor da superclasse.
		}
		else {
			return this.valorPadrao;          // Caso contrário, retorne o valor padrão
		}
	}
}

// Esta classe calcula e exibe histogramas de frequência de letras
class Histograma {
	constructor() {
		this.contagemLetras = new MapaPadrao(0);   // Mapa de letras para contagens
		this.totalLetras = 0;                      // Quantas letras no total
	}

	// Esta função atualiza o histograma com as letras do texto.
	adicionar(texto) {
		// Remove espaços em branco do texto e converte para maiúsculas
		texto = texto.replace(/\s/g, "").toUpperCase();

		// Agora percorra os caracteres do texto
		for(let caractere of texto) {
			let contagem = this.contagemLetras.get(caractere); // Obtém contagem antiga
			this.contagemLetras.set(caractere, contagem + 1);  // Incrementa
			this.totalLetras++;
		}
	}

	// Converte o histograma em uma string que exibe um gráfico ASCII
	toString() {
		// Converte o Map para um array de arrays [chave, valor]
		let entradas = [...this.contagemLetras];

		// Ordena o array por contagem e depois alfabeticamente
		entradas.sort((a, b) => {              // Uma função para definir a ordem de classificação.
			if (a[1] === b[1]) {               // Se as contagens forem iguais
				return a[0] < b[0] ? -1 : 1;   // ordene alfabeticamente.
			} else {                           // Se as contagens forem diferentes
				return b[1] - a[1];            // ordene pela maior contagem.
			}
		});

		// Converte as contagens em porcentagens
		for(let entrada of entradas) {
			entrada[1] = entrada[1] / this.totalLetras * 100;
		}

		// Elimina quaisquer entradas com menos de 1%
		entradas = entradas.filter(entrada => entrada[1] >= 1);

		// Agora converte cada entrada em uma linha de texto
		let linhas = entradas.map(
			([l, n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`
		);

		// E retorna as linhas concatenadas, separadas por caracteres de nova linha.
		return linhas.join("\n");
	}
}

// Esta função assíncrona (que retorna uma Promise) cria um objeto Histograma,
// lê assincronamente fragmentos de texto da entrada padrão e adiciona esses fragmentos ao
// histograma. Quando chega ao final do fluxo, retorna este histograma.
async function histogramaDaEntradaPadrao() {
	process.stdin.setEncoding("utf-8"); // Lê strings Unicode, não bytes
	let histograma = new Histograma();
	for await (let fragmento of process.stdin) {
		histograma.adicionar(fragmento);
	}
	return histograma;
}

// Esta última linha de código é o corpo principal do programa.
// Ela cria um objeto Histograma da entrada padrão e, em seguida, imprime o histograma.
histogramaDaEntradaPadrao().then(histograma => { console.log(histograma.toString()); });
