function criajogodavelha() {

    const xs = [];
    const os = [];
    let contador = 0;
    let jogador;

    return {

        iniciaJogo() {
            this.jogada();
        },


        jogada() {
            document.addEventListener('click', (e) => {
                const el = e.target;// Como arrow function, o "this" permanece a calculadora
                // }.bind(this));   // Se usasse "function" normal, usava esse "bind(this)",
                //pra manter o this com as propriedades da calculadora.

                if (el.classList.contains('casa')) {
                    contador++;
                    console.log(`Contador: ${contador}`);
                    if (contador % 2 === 0) jogador = xs;
                    else jogador = os;
                    this.marcacao(el);

                    if (contador > 2) this.verificaLinha();
                }
            });
        },

        marcacao(el) {
            el.classList.remove("casa");
            jogador.push([el.classList[1], el.classList[2]])
            if (jogador == xs) {
                el.innerHTML = "X";
                el.classList.add("ocupado", "x");
            }
            else {
                el.innerHTML = "O";
                el.classList.add("ocupado", "o");
            }
            console.log(xs + " | " + os)
        },

        verificaLinha() {
            let map = jogador.reduce(function (obj, b) {
                obj[b] = ++obj[b] || 1;
                return obj;
            }, {});
            console.log(map);
        }
    }
}

const jogodavelha = criajogodavelha();
jogodavelha.iniciaJogo();