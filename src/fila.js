class No {
    constructor(valor){
        this.valor = valor;
        this.proximo = null;
    }
}

class Fila {
    constructor() {
        this.inicio = null;
        this.fim = null;
        this.tamanho = 0;
    }

    enfileirar(elemento){
        let novoNo = new No(elemento);
        if(this.tamanho == 0){
            this.inicio = novoNo;
            this.fim = novoNo;
        } else {
            this.fim.proximo = novoNo;
            this.fim = novoNo;
        }
        ++this.tamanho;
    }

    desenfileirar(){
        if(this.tamanho == 0) return null;
        let retirado = this.inicio;
        if(this.tamanho == 1) {
            this.inicio = null;
            this.fim = null;
        } else {
            this.inicio = this.inicio.proximo;
        }
        --this.tamanho;
        return retirado.valor;
    }

    espiar(){
        if(this.tamanho == 0) return null;
        return this.inicio.valor;
    }

    tamanhoDaFila(){
        return this.tamanho;
    }   

    estaVazia(){
        return this.tamanhoDaFila() == 0 ? true : false;
    }
}