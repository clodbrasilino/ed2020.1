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

    buscarPelaPosicao(posicaoBuscada){
        // navegação
        let atual = this.cabeca;
        let posicaoAtual = 1;
        let elementoEncontrado = null;
        while (atual != null && posicaoAtual != posicaoBuscada) {
            atual = atual.proximo;
            ++posicaoAtual;
        }
        // ao encontrar, retornar o elemento
        if(atual != null) return atual.valor;
        // é necessário ter cuidado com a ausência do elemento
        return null;
    }

    removerPelaPosicao(posicaoASerApagada){
        // navegação
        let atual = this.cabeca;
        let posicaoAtual = 1;

        /* é necessário não perder a referência do elemento 
         anterior ao elemento que vai ser apagado */

        // 1º caso: o elemento a ser apagado é o primeiro
        if(posicaoASerApagada == 1){
            this.cabeca = this.cabeca.proximo;
        }
        // 2º caso: o elemento a ser apagado é o segundo ou posterior
        else {
            while(atual != null && posicaoAtual != posicaoASerApagada-1){
                atual = atual.proximo;
                ++posicaoAtual;
            }
            atual.proximo = atual.proximo.proximo;
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

alunos = new Lista();
alunos.inserirNoFim(new No('Tiago'));
alunos.inserirNoFim(new No('Eduardo'));
alunos.inserirNoFim(new No('Eduarda'));
alunos.inserirNoFim(new No('Aparecida'));
alunos.inserirNoFim(new No('Taciane'));
alunos.inserirNoFim(new No('John'));
alunos.inserirNoFim(new No('João'));
alunos.imprimir();
alunos.removerPelaPosicao(5);
alunos.imprimir();