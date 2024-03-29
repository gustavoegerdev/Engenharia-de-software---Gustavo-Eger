# Aplicativo de Notas de Alunos no Google Sheets

Este aplicativo JavaScript lê dados de uma planilha do Google Sheets contendo informações sobre notas de alunos e calcula suas situações finais com base em critérios específicos. Ele utiliza a API do Google Sheets para acessar e atualizar a planilha.

## Instalação do Node.js

Para executar este aplicativo, é necessário ter o Node.js instalado no seu sistema. Siga as etapas abaixo para instalar o Node.js no Windows:

### 1. Baixe o Instalador

Visite o [site oficial do Node.js](https://nodejs.org/) e baixe o instalador para Windows.

### 2. Execute o Instalador

Após o download, clique duas vezes no arquivo do instalador (`.msi`) para iniciar o processo de instalação.

### 3. Aceite os Termos de Serviço

Leia os termos de serviço e clique em "Next" ou "Aceitar" para continuar.

### 4. Escolha o Diretório de Instalação

Escolha o diretório onde deseja instalar o Node.js. O diretório padrão geralmente é adequado, então você pode simplesmente clicar em "Next" ou "Install" para continuar.

### 5. Selecione os Componentes

Na tela de seleção de componentes, certifique-se de que o "npm package manager" esteja selecionado. O npm é essencial para instalar e gerenciar pacotes do Node.js.

### 6. Inicie a Instalação

Clique em "Next" ou "Install" para iniciar o processo de instalação.

### 7. Conclua a Instalação

Após a conclusão da instalação, você verá uma mensagem indicando que o Node.js foi instalado com sucesso.

### 8. Verifique a Instalação

Abra o prompt de comando do Windows e digite os seguintes comandos para verificar se o Node.js e o npm foram instalados corretamente:

node -v
npm -v


Isso deve exibir as versões instaladas do Node.js e do npm, respectivamente.

## Instalação do googleapis para a API do Google Sheets

Para interagir com a API do Google Sheets, você precisa instalar o pacote "googleapis". Siga as etapas abaixo para instalá-lo via terminal:

npm install googleapis@39 --save


Este comando instala o pacote googleapis, que é compatível com a API do Google Sheets.

## Executando a Aplicação pelo Terminal

Clone o repositório do projeto e siga as instruções abaixo para executar a aplicação:

1. Clone o repositório do projeto para sua máquina local:

git clone URL_DO_REPOSITÓRIO

2. Instale as dependências do Node.js:

cd NOME_DO_DIRETÓRIO_DO_PROJETO
npm install

3. Configure a autenticação da API do Google Sheets conforme descrito no [guia de Início Rápido do Google Sheets Node.js](https://developers.google.com/sheets/api/quickstart/nodejs).

4. Substitua o ID da planilha no arquivo `index.js` pelo ID da sua planilha do Google Sheets.

5. Execute a aplicação:

node index.js

Isso iniciará a aplicação, que lerá os dados da planilha, calculará as situações dos alunos e as notas de aprovação final e atualizará a planilha do Google Sheets com as informações calculadas.

Certifique-se de verificar a saída do console para quaisquer erros ou mensagens de status durante a execução da aplicação.
