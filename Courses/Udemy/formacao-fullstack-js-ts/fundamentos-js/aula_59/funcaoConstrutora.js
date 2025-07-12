function Calculator() {
    this.display = document.querySelector('.display');

    this.inicia = function () {
        this.cliqueBotoes();
        this.pressionaEnter();
    }

    this.clearDisplay = () => {
        this.display.value = '';
    };

    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if (!conta) {
                alert("Conta invalida");
                return;
            }
            this.display.value = String(conta);
        } catch (e) {
            alert("Conta invalida");
            return;
        }
    };

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        })
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', function (e) {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if (el.classList.contains('btn-del')) {
                this.apagaUm();
            }

            if (el.classList.contains('btn-eq')) {
                this.realizaConta();
            }
        }.bind(this));
    };

    this.btnParaDisplay = (valor) => {
            this.display.value += valor;
    };
}

const calculadora = new Calculator(); // instancia
calculadora.inicia();