"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerenciadorEmprestimos = void 0;
class GerenciadorEmprestimos {
    static add(solicitacao) {
        this.solicitacoes.push(solicitacao);
    }
    static processarSolicitacoes() {
        this.solicitacoes.forEach(solicitacao => {
            const resultado = solicitacao.aprovar() ? 'APROVADO' : 'REPROVADO';
            console.log(`${solicitacao.nome} [${resultado}]`);
        });
    }
}
exports.GerenciadorEmprestimos = GerenciadorEmprestimos;
GerenciadorEmprestimos.solicitacoes = [];
