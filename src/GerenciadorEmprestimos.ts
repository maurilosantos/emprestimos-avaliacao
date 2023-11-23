import { SolicitacaoEmprestimo } from './SolicitacaoEmprestimo';

export class GerenciadorEmprestimos {
    static solicitacoes: SolicitacaoEmprestimo[] = [];

    static add(solicitacao: SolicitacaoEmprestimo) {
        this.solicitacoes.push(solicitacao);
    }

    static processarSolicitacoes() {
        this.solicitacoes.forEach(solicitacao => {
            const resultado = solicitacao.aprovar() ? 'APROVADO' : 'REPROVADO';
            console.log(`${solicitacao.nome} [${resultado}]`);
        });
    }
}
