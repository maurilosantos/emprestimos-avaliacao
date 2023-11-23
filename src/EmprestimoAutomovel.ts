import { SolicitacaoEmprestimo } from './SolicitacaoEmprestimo';

export class EmprestimoAutomovel extends SolicitacaoEmprestimo {
    possuiHabilitacao: boolean;

    constructor(nome: string, idade: number, valor: number, parcelas: number, valorParcela: number, rendaMensal: number, possuiHabilitacao: boolean) {
        super(nome, idade, valor, parcelas, valorParcela, rendaMensal);
        this.possuiHabilitacao = possuiHabilitacao;
    }

    aprovar(): boolean {
        return this.idade >= 18 && this.valor == this.parcelas * this.valorParcela && this.rendaMensal > 3000 && this.possuiHabilitacao;
    }
}
