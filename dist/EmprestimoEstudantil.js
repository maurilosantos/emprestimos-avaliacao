"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmprestimoEstudantil = void 0;
const SolicitacaoEmprestimo_1 = require("./SolicitacaoEmprestimo");
class EmprestimoEstudantil extends SolicitacaoEmprestimo_1.SolicitacaoEmprestimo {
    constructor(nome, idade, valor, parcelas, valorParcela, rendaMensal, estaMatriculado) {
        super(nome, idade, valor, parcelas, valorParcela, rendaMensal);
        this.estaMatriculado = estaMatriculado;
    }
    aprovar() {
        return this.idade >= 18 && this.idade <= 30 && this.valor == this.parcelas * this.valorParcela && this.rendaMensal > 1500 && this.estaMatriculado;
    }
}
exports.EmprestimoEstudantil = EmprestimoEstudantil;
