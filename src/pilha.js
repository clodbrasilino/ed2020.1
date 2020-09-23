class No {
    constructor(valor){
        this.valor = valor;
        this.proximo = null;
    }
}

class Pilha {
    constructor() {
        this.topo = null;
        this.tamanho = 0;
    }

    empilhar(elemento){
        let novoNo = new No(elemento);
        if(!this.estaVazia()){
            novoNo.proximo = this.topo;
        }
        this.topo = novoNo;
        ++this.tamanho;
    }

    desempilhar(){
        if(this.estaVazia()) return null;
        let desempilhado = this.topo;
        this.topo = this.topo.proximo;
        --this.tamanho;
        return desempilhado.valor;
    }

    espiar(){
        if(this.estaVazia()) return null;
        return this.topo.valor;
    }

    tamanhoDaPilha(){
        return this.tamanho;
    }   

    estaVazia(){
        return this.tamanhoDaPilha() == 0 ? true : false;
    }
}
