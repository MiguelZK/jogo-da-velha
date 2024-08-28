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
                    if (contador % 2 === 1) jogador = xs;
                    else jogador = os;
                    this.marcacao(el);

                    if (contador > 4 && this.verificaLinha()) {
                        console.log(`Linha ou coluna ${this.verificaLinha()} fechou!`);
                        const vencedor = document.getElementsByClassName(this.verificaLinha());
                        for (let casa of vencedor) {
                            casa.classList.add("fechou");
                            // casa.appendChild(brilho)
                        }
                    } else {
                        console.log(`Nada feito, merrrrmão!`)
                    }
                }
            });
        },

        marcacao(el) {
            el.classList.remove("casa");
            for (let i of el.classList) jogador.push(i)
            if (jogador == xs) {
                el.innerHTML = "X";
                el.classList.add("ocupado", "x");
            }
            else {
                el.innerHTML = "O";
                el.classList.add("ocupado", "o");
            }
            console.log("xs " + xs + " | os " + os)
        },

        verificaLinha() {
            let map = jogador.reduce(function (obj, b) {
                obj[b] = ++obj[b] || 1;
                return obj;
            }, {});

            for (let cld in map) {
                // console.log(map[cl])
                if (map[cld] === 3) {
                    return cld;
                }
            }
            console.log(map);
        }
    }
}

const jogodavelha = criajogodavelha();
jogodavelha.iniciaJogo();