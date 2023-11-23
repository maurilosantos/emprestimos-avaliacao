import { EmprestimoPessoal } from './EmprestimoPessoal';
import { EmprestimoAutomovel } from './EmprestimoAutomovel';
import { EmprestimoEstudantil } from './EmprestimoEstudantil';
import { GerenciadorEmprestimos } from './GerenciadorEmprestimos';

GerenciadorEmprestimos.add(new EmprestimoPessoal('Maurilo', 25, 5000, 10, 500, 3000));
GerenciadorEmprestimos.add(new EmprestimoAutomovel('Adriane', 30, 10000, 20, 500, 3500, true));
GerenciadorEmprestimos.add(new EmprestimoEstudantil('Gustavo', 40, 2000, 4, 500, 2000, true));

GerenciadorEmprestimos.processarSolicitacoes();
