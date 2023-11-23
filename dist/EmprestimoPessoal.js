"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmprestimoPessoal = void 0;
const SolicitacaoEmprestimo_1 = require("./SolicitacaoEmprestimo");
class EmprestimoPessoal extends SolicitacaoEmprestimo_1.SolicitacaoEmprestimo {
    constructor(nome, idade, valor, parcelas, valorParcela, rendaMensal) {
        super(nome, idade, valor, parcelas, valorParcela, rendaMensal);
    }
    aprovar() {
        return this.idade >= 18 && this.valor == this.parcelas * this.valorParcela && this.rendaMensal > 2500;
    }
}
exports.EmprestimoPessoal = EmprestimoPessoal;
