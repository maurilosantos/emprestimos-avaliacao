import { SolicitacaoEmprestimo } from './SolicitacaoEmprestimo';

export class EmprestimoPessoal extends SolicitacaoEmprestimo {
    constructor(nome: string, idade: number, valor: number, parcelas: number, valorParcela: number, rendaMensal: number) {
        super(nome, idade, valor, parcelas, valorParcela, rendaMensal);
    }

    aprovar(): boolean {
        return this.idade >= 18 && this.valor == this.parcelas * this.valorParcela && this.rendaMensal > 2500;
    }
}
