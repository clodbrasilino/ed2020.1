class No {
    constructor(valor){
        this.valor = valor;
        this.proximo = null;
    }
}

class Lista {
    constructor() {
        this.cabeca = null;
    }

    inserirNoInicio(novono) {
        if(this.cabeca == null) { /* lista está vazia?*/
        this.cabeca = novono;
        } else {
        novono.proximo = this.cabeca;
        this.cabeca = novono;
        }
    }

    inserirNoFim(novono) {
        if(this.cabeca == null) {
        this.cabeca = novono;
        } else {
        // navegando até o fim
        let atual = this.cabeca; // atual é o 1º elemento
        while(atual.proximo != null) { /* o elemento atual tem proximo? */
            atual = atual.proximo; // navegue para o próximo
        }
        // apontando para o novo elemento
        atual.proximo = novono;
        }
    }

    imprimir(){
        let atual = this.cabeca;
        let posicao = 1;
        while(atual != null) {
            console.log(posicao++ + ' - ' + atual.valor);
            atual = atual.proximo;
        }
    }
}