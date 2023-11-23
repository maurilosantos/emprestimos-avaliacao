"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmprestimoPessoal_1 = require("./EmprestimoPessoal");
const EmprestimoAutomovel_1 = require("./EmprestimoAutomovel");
const EmprestimoEstudantil_1 = require("./EmprestimoEstudantil");
const GerenciadorEmprestimos_1 = require("./GerenciadorEmprestimos");
GerenciadorEmprestimos_1.GerenciadorEmprestimos.add(new EmprestimoPessoal_1.EmprestimoPessoal('Maurilo', 25, 5000, 10, 500, 3000));
GerenciadorEmprestimos_1.GerenciadorEmprestimos.add(new EmprestimoAutomovel_1.EmprestimoAutomovel('Adriane', 30, 10000, 20, 500, 3500, true));
GerenciadorEmprestimos_1.GerenciadorEmprestimos.add(new EmprestimoEstudantil_1.EmprestimoEstudantil('Gustavo', 40, 2000, 4, 500, 2000, true));
GerenciadorEmprestimos_1.GerenciadorEmprestimos.processarSolicitacoes();
