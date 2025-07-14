### **Exercício: Criação de Workflows**

O seu desafio é criar dois workflows automatizados a partir de um projeto base.

**Workflow 1: Lint, Teste e Build no Push**

1.  **Gatilho:** O workflow deve ser acionado automaticamente sempre que houver um `push` no repositório.
2.  **Ações:** Ele precisa executar os scripts de `lint`, `test` e `build` do projeto.
3.  **Estrutura:** Você tem a flexibilidade de organizar essas ações em um único *job* ou em três *jobs* separados que executam em sequência (um após o outro).

**Workflow 2: Exibir Detalhes de Issues**

1.  **Gatilho:** Este workflow deve ser acionado quando ocorrerem eventos relacionados a *issues* (como abrir, editar, fechar, etc.).
2.  **Ação:** A tarefa principal é exibir no terminal (shell) os detalhes do evento que acionou o workflow, utilizando o comando `echo`.
3.  **Implementação:** Para acessar as informações do evento, você deverá utilizar o gatilho de `issues` e o objeto de contexto do `github`.