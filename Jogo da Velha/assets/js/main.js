function criajogodavelha(){
    
    const xs = [];
    const os = [];
    let contador = 0;

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
                    this.marcacao(el);
                    this.verificaLinha(el);
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
            });
        },

        marcacao(el) {
            if (contador % 2 === 0) {
                xs.push([el.classList[1], el.classList[2]])
                // console.log(`el 1: ${el.classList[1]} | el 2: ${el[2]}`)
                el.classList.remove("casa")
                el.classList.add("ocupado", "o")
                el.innerHTML = "O";
                // console.log(el.classList)
            } else {
                // console.log(el[1].match(/\d/g))
                os.push([el.classList[1], el.classList[2]]);
                // console.log(`el 1: ${el.classList[1]} | el 2: ${el.classList[2]}`)
                el.classList.remove("casa")
                el.classList.add("ocupado", "x")
                // console.log(el.classList)
                el.innerHTML = "X";
            }

            console.log(xs +" | "+ os)
        },

        verificaLinha() {
            // if(xs.contains()){

            // }
        }
    }
}

const jogodavelha = criajogodavelha();
jogodavelha.iniciaJogo();