# Projeto de Gestão de Usuários

Este projeto é uma aplicação simples de gestão de usuários, desenvolvido com React, Typescript, uso de Emotion e Router, além de proteção da home page, como também funcionalidades de login, cadastro, edição e exclusão de usuários. A aplicação armazena os dados dos usuários em memória e permite realizar o login com as credenciais "Fortes" e "123". Além de responsividade para tablets e desktops.

## Funcionalidades

### Tela de Login
- A tela de login solicita o usuário e senha.
- O login é realizado com as credenciais:
  - Usuário: `Fortes`
  - Senha: `123`

### Tela de Listagem de Usuários
- Ao realizar o login, a tela de listagem exibe todos os usuários cadastrados.
- A lista inclui as opções para:
  - Incluir um novo usuário (com a verificação se existe um usuário com o mesmo nome).
  - Editar usuários existentes (com a verificação se existe um usuário com o mesmo nome).
  - Excluir usuários cadastrados, porém não poderá excluir o usuário que está logado e o adm (Usuário: `Fortes`).
- Os usuários podem ser filtrados por ID ou nome ou por mês e dia (Criatividade e recursos a mais desenvolvidos).

### Requisitos Funcionais
1. **Tela de login**: Deve solicitar usuário e senha. O login é realizado com o usuário "Fortes" e senha "123".
2. **Tela de listagem de usuários**: Exibe os usuários cadastrados com as opções de adicionar, editar e excluir.
3. **Cadastro de usuários**:
   - ID gerado automaticamente (UUID).
   - Login e senha definidos pelo usuário.
   - Data de cadastro.

### Requisitos Não Funcionais
1. A aplicação deve ser simples, com foco em um MVP (Minimum Viable Product).
2. Boas práticas de desenvolvimento devem ser seguidas.
3. Caso necessário, testes unitários/funcionais podem ser criados.
4. O projeto deve ser mantido em um repositório do GitHub.

## Como Rodar o Projeto

### 1. Clone o Repositório

```bash
git clone https://github.com/seuusuario/projeto.git
cd projeto

### 2. Instale as Dependências
    npm install
    ou
    yarn install


### 3. Execute o Projeto
    npm start
