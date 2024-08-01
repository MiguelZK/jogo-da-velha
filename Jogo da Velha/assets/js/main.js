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
                    this.verificaLinha();
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
                xs.push(el[1])
                console.log(`el 1: ${el[1]} | el 2: ${el[2]}`)
                el.classList.remove("casa")
                el.classList.add("ocupado")
                console.log(el.classList)
            } else {
                // console.log(el[1].match(/\d/g))
                os.push(el[1]);
                console.log(`el 1: ${el[1]} | el 2: ${el[2]}`)
                el.classList.remove("casa")
                el.classList.add("ocupado")
                console.log(el.classList)
            }

            console.log(xs +" | "+ os)
        },

        verificaLinha() {

        }
    }
}

const jogodavelha = criajogodavelha();
jogodavelha.iniciaJogo();