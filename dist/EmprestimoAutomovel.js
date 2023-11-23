"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmprestimoAutomovel = void 0;
const SolicitacaoEmprestimo_1 = require("./SolicitacaoEmprestimo");
class EmprestimoAutomovel extends SolicitacaoEmprestimo_1.SolicitacaoEmprestimo {
    constructor(nome, idade, valor, parcelas, valorParcela, rendaMensal, possuiHabilitacao) {
        super(nome, idade, valor, parcelas, valorParcela, rendaMensal);
        this.possuiHabilitacao = possuiHabilitacao;
    }
    aprovar() {
        return this.idade >= 18 && this.valor == this.parcelas * this.valorParcela && this.rendaMensal > 3000 && this.possuiHabilitacao;
    }
}
exports.EmprestimoAutomovel = EmprestimoAutomovel;
