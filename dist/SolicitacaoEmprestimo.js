"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitacaoEmprestimo = void 0;
class SolicitacaoEmprestimo {
    constructor(nome, idade, valor, parcelas, valorParcela, rendaMensal) {
        this.nome = nome;
        this.idade = idade;
        this.valor = valor;
        this.parcelas = parcelas;
        this.valorParcela = valorParcela;
        this.rendaMensal = rendaMensal;
    }
}
exports.SolicitacaoEmprestimo = SolicitacaoEmprestimo;
