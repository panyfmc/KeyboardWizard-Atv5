# Objetivo do Repositório
O objetivo deste repositório é desenvolver uma página web utilizando apenas HTML, CSS e JavaScript, seguindo a identidade visual dos protótipos do projeto selecionado.
Esta atividade visa proporcionar colaboração e contribuição para o projeto Keyboard Wizard, com ênfase em HTML, CSS e JavaScript.

## Descrição do Projeto
Keyboard Wizard é um jogo de digitação com elementos de roguelike, inteiramente contido na web e desenvolvido 100% em JavaScript. No jogo, o jogador assume o controle de um feiticeiro iniciante que está aprendendo e memorizando o efeito de cada
palavra mágica. O jogador enfrentará ondas de monstros cada vez mais fortes, desafiando seu vocabulário. O usuário pode digitar qualquer palavra existente em um campo de entrada, e, dependendo das letras que a compõem, a palavra terá diferentes
efeitos no combate.

## Desenvolvedores:
O desenvolvimento do jogo contará com a participação de vários desenvolvedores, tendo por criador o Alípio. Inicialmente, ele será desenvolvido por Gabriel Almeida e Paula Argôlo. 

## Justificativa da escolha dos Requisitos
 Durante a implementação deste projeto, foram selecionados dois requisitos funcionais e dois não-funcionais previamente definidos no escopo. A escolha foi feita por Gabriel e Paula, considerando o protótipo "Desenvolvimento-Site", que ofereceu uma visão mais completa e clara. Isso facilitou um manejo mais preciso e fiel ao projeto final desejado, levando em conta isso os requisitos foram:
### [RF01] Criar Cadastro e Permitir Acesso;
O site deve permitir ao jogador que navegue pelas 5 telas (Jogo, wiki, perfil, tutorial e coleção) e exibir as respectivas informações presente em cada tela. No entanto, o foco principal será apenas na tela inicial, menu do jogo, já que o objetivo é desenvolver apenas 1 página web como citado acima.
### [RF02] Navegação;
O sistema deve permitir que um usuário crie um cadastro que manterá todo progresso feito durante o jogo e poderá ser acessado sem perda de dados em qualquer outro dispositivo. O jogo deve possuir alguma forma de aferir os dados relevantes e formatá-los em um arquivo.
### [NFSG006] Acesso mediado por credenciais.
A solução não pode ser implementada de forma a fornecer acesso não autorizado a bancos de dados contendo informações de terceiros.
### [NFIM007] Código comentado e catalogado;
O código fonte deve ser mantido bem documentado e organizado por meio de comentários e catalogação.


## Resultados Obtidos

### Implementação da Página Web
A página web foi desenvolvida com sucesso utilizando apenas HTML, CSS e JavaScript, conforme proposto no objetivo do repositório. A identidade visual dos protótipos foi seguida rigorosamente, resultando em uma interface agradável e intuitiva para os usuários.

### Funcionalidades Desenvolvidas
- **Cadastro e Acesso:** A funcionalidade de cadastro permite que os jogadores criem uma conta para salvar e acessar seu progresso em qualquer dispositivo, atendendo ao requisito funcional [RF01].
- **Navegação:** O sistema de navegação foi implementado para permitir o acesso às diferentes telas (Jogo, Wiki, Perfil, Tutorial e Coleção). O foco principal foi na tela inicial e no menu do jogo, conforme especificado no escopo do projeto [RF02].

### Requisitos Atendidos
- **Requisitos Funcionais:**
  - [RF01] Criar Cadastro e Permitir Acesso: Implementado com sucesso, permitindo a criação de contas de usuário e navegação entre as telas principais.
  - [RF02] Navegação: Navegação entre as telas implementada, com ênfase na tela inicial e menu do jogo.

- **Requisitos Não-Funcionais:**
  - [NFSG006] Acesso mediado por credenciais: Implementado um sistema de autenticação seguro para proteger o acesso aos dados dos usuários.
  - [NFIM007] Código comentado e catalogado: Todo o código fonte foi devidamente documentado e organizado com comentários claros e precisos, facilitando a manutenção e futuras contribuições.

### Desafios e Soluções
Durante o desenvolvimento, enfrentamos alguns desafios significativos:

- **Design dos Botões:** Houve dificuldade em ajustar o design dos botões para ser fiel ao protótipo original. A solução encontrada foi alterar a estrutura dos botões para não utilizar arquivos .svg, evitando comprometer futuras implementações relacionadas ao requisito não funcional de responsividade ([NFUS001] Telas responsivas).
  
- **Autenticação dos Campos na Página de Login e Registro:** Tivemos dificuldades em implementar a autenticação dos campos na página de login e registro. Esse problema foi resolvido com sucesso através do estudo da documentação do Firebase e do uso de funções fornecidas pelo próprio Firebase, além de referências encontradas em páginas da internet.

### Próximos Passos
- **Refatoração da Primeira Tela:** Deve-se planejar a refatoração da primeira tela para cumprir o requisito não funcional de responsividade ([NFUS001] Telas responsivas).
- **Criação de Perfil para o Usuário:** Como um novo requisito a ser acrescentado, deve-se considerar a implementação de um perfil para o usuário, permitindo uma personalização e uma experiência mais rica.
- **Incremento das Páginas de Wiki e Tutorial:** Deve-se estudar como incrementar as páginas de Wiki e Tutorial sem comprometer a progressão do jogo, mantendo a identidade visual da página e evitando poluição visual.

### Banco de Dados
Foi utilizado o banco de dados do Firebase para armazenar as informações do jogo e dos usuários. Para obter acesso ao banco de dados, entre em contato com o colaborador GabrielDosSantosAlmeida.
