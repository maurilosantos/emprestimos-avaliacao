import { SolicitacaoEmprestimo } from './SolicitacaoEmprestimo';

export class EmprestimoEstudantil extends SolicitacaoEmprestimo {
    estaMatriculado: boolean;

    constructor(nome: string, idade: number, valor: number, parcelas: number, valorParcela: number, rendaMensal: number, estaMatriculado: boolean) {
        super(nome, idade, valor, parcelas, valorParcela, rendaMensal);
        this.estaMatriculado = estaMatriculado;
    }

    aprovar(): boolean {
        return this.idade >= 18 && this.idade <= 30 && this.valor == this.parcelas * this.valorParcela && this.rendaMensal > 1500 && this.estaMatriculado;
    }
}
