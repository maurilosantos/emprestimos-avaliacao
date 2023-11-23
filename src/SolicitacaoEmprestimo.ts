export abstract class SolicitacaoEmprestimo {
    nome: string;
    idade: number;
    valor: number;
    parcelas: number;
    valorParcela: number;
    rendaMensal: number;

    constructor(nome: string, idade: number, valor: number, parcelas: number, valorParcela: number, rendaMensal: number) {
        this.nome = nome;
        this.idade = idade;
        this.valor = valor;
        this.parcelas = parcelas;
        this.valorParcela = valorParcela;
        this.rendaMensal = rendaMensal;
    }

    abstract aprovar(): boolean;
}
