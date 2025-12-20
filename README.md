O repositório pedrobarrosvp/react_chucknorris é um projeto de estudo desenvolvido em React que consome a API pública do Chuck Norris (Chuck Norris API). O objetivo principal da aplicação é exibir fatos curiosos e "verdades" engraçadas sobre o lendário Chuck Norris, permitindo que o usuário visualize frases aleatórias ou filtre por categorias.

Aqui estão os detalhes técnicos e as instruções para execução:

1. Descrição do Projeto
A aplicação funciona como um buscador de frases. Ela se conecta ao endpoint da API para buscar dados em formato JSON e renderiza essas informações em uma interface moderna e responsiva. É um exemplo clássico de projeto para praticar o consumo de APIs REST, manipulação de estados e hooks no React.

2. Tecnologias Utilizadas
Com base na estrutura comum desse repositório, as tecnologias envolvidas são:

React.js: Biblioteca principal para construção da interface.

JavaScript (ES6+): Linguagem de programação.

Styled Components (ou CSS comum): Para a estilização dos componentes.

Axios ou Fetch API: Para realizar as requisições HTTP para a API do Chuck Norris.

React Hooks (como useState e useEffect): Para gerenciar o ciclo de vida e os dados da aplicação.

3. Instruções para Rodar Localmente
Para rodar o projeto na sua máquina, siga estes passos:

Pré-requisitos:

Ter o Node.js instalado (recomenda-se a versão LTS).

Ter o Git instalado.

Passo a passo:

Clonar o repositório: Abra o seu terminal e digite:

Bash

git clone https://github.com/pedrobarrosvp/react_chucknorris.git
Acessar a pasta do projeto:

Bash

cd react_chucknorris
Instalar as dependências: Use o gerenciador de pacotes (NPM ou Yarn) para baixar as bibliotecas necessárias:

Bash

npm install
# ou, se preferir usar o yarn:
yarn
Iniciar a aplicação: Após a instalação, execute o comando para rodar o servidor de desenvolvimento:

Bash

npm start
# ou
yarn start
Acessar no navegador: A aplicação abrirá automaticamente ou poderá ser acessada no endereço: http://localhost:3000.

Principais Funcionalidades (esperadas)
Busca Aleatória: Um botão que traz uma frase nova a cada clique.

Categorias: Uma lista ou dropdown para filtrar as frases por temas (ex: dev, food, movie, etc.).

Campo de Busca: Pesquisa por palavras-chave específicas dentro da base de piadas.


<img width="1917" height="984" alt="Captura de tela 2025-12-19 230638" src="https://github.com/user-attachments/assets/0f0d4d97-a881-4640-bbcc-4bc0c41b3249" />


<img width="1901" height="988" alt="Captura de tela 2025-12-19 230605" src="https://github.com/user-attachments/assets/8b480f31-31a6-4767-b0ff-b2db9ce63163" />


<img width="1916" height="991" alt="Captura de tela 2025-12-19 230717" src="https://github.com/user-attachments/assets/2b44f22b-b0b7-40e8-b591-1fcddc1a903d" />

