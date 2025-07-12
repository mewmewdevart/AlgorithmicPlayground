// Função fábrica que retorna um objeto calculadora
function createCalculator() {
    return {
        display: document.querySelector('.display'), 

        // Método principal que inicia os comportamentos da calculadora
        inicia: function () {
            this.cliqueBotoes(); // Chama o método cliqueBotoes no contexto do próprio objeto calculadora
            this.pressionaEnter();
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta(){
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta){
                    alert("Conta invalida");
                    return ;
                }
                this.display.value = String(conta);
            } catch(e){
                alert("Conta invalida");
                return ;
            }
        },

        pressionaEnter(){
            this.display.addEventListener('keyup',  e => {
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            })
        },

        // Método que adiciona o evento de clique nos botões
        cliqueBotoes() {
            // Arrow function poderia ser usada aqui também, mas neste caso foi usada function normal com bind
            document.addEventListener('click', function (e) {
                const el = e.target;

                // Se o botão clicado tiver a classe 'btn-num', envia o valor para o display
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                     this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            }.bind(this)); // O bind faz com que "this" dentro da função de callback aponte para o objeto da calculadora
        },

        // Método que coloca o valor do botão no display
        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculator = createCalculator();
calculator.inicia();
