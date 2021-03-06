# Desafio Mestre Pokemon
Api para Mestre Pokemon

Existem duas versões da api: 

Na versão principal(master) a propriedade pokemonId não é um editável e é autogerada;

Na versão secundária(branch version_pokemonid_editable) a propriedade pokemonId é um campo editável e não é autogerada;

Ambas funcionam com Mongodb e PostgresSQL


### Requisitos
* Docker

* Docker-Compose

### Como iniciar a aplicação principal?

1. Clonar/Copiar projeto do git (branch master)

#### Com MongoDb 

2. Rode o comando `docker-compose up` na pasta raiz do código para instalar as dependências e iniciar aplicação com banco Mongodb;

#### Com PostgresSQL 

3. Rode o comando `banco=postgres docker-compose up` na pasta raiz do código para instalar as dependências e iniciar aplicação com banco postgres;



### Como iniciar a aplicação secundária?

Obs: Ao mudar de branch recomendo executar o comando:
docker container prune 
Esse comando remove todos os contêineres não usados,isso ajuda evitar problemas na transição de uma versao para outra.


1. Clonar/Copiar projeto do git (branch version_pokemonid_editable)

#### Com MongoDb 

2. Rode o comando `docker-compose up` na pasta raiz do código para instalar as dependências e iniciar aplicação com banco Mongodb;

#### Com PostgresSQL 

3. Rode o comando `banco=postgres docker-compose up` na pasta raiz do código para instalar as dependências e iniciar aplicação com banco postgres;

### Como acessar a api?

A URL base da api é:
http://localhost:3333 ou http://0.0.0.0:3333


### Como acessar a documentação da api?

O endpoint para acessar a documentação dessa api é:
http://localhost:3333/doc/#/ ou http://0.0.0.0:3333/doc/#/

### Como fazer requisções autenticadas na api?

Para autenticar informe no header da requisição o parametro authorization com o valor do token de usuário.


### Como executar requisções para api?

Todas as requisções da api são feitas no formato json.

Todas as requisições podem ser consultadas e testadas na documentação em http://localhost:3333/doc/#/

Breve explicação de algumas requisições:

1.Criar usuário
Para criar um usuário faça uma requisição com método POST para o endpoint:
http://localhost:3333/users

e no corpo/body da requisição infome os dados do usuário em formato json como no exemplo abaixo:
{
  "email":"meuteste@email.com",
  "password": "123456",
  "nickname":"ro" 
}

2.Logar usuário
Para logar/autenticar um usuário faça uma requisição com método POST para o endpoint:
http://localhost:3333/auth

informe o email do usuario e senha no body no formato json como no exemplo abaixo:
{
  "email": "emaildeusuario@teste.com",
  "password": "123456"
}

Caso os dados de usuario estejam correto, a api retornará um objeto json com o token de acesso, como no exemplo abaixo:

{ 
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTY0NTMxOTcsImV4cCI6MTYxNjUzOTU5Nywic3ViIjoiZTVhZjA1Y2QtN2I0Mi00YWIxLWFkZmItYWIyOWI3MTIyMWFmIn0.pM5Ay98EoWjEIYWk2V9-vZxhcKdXTNWR_CZwoa2_ttI"

}


3.Editar usuário
Essa ação requer autenticação jwt;
Para autenticar informe no header da requisição o parametro authorization com o valor do token de usuário.


Então faça uma requisição com método PUT informando o id do usuário que deseja atualizar para o endpoint:

http://localhost:3333/users/id

subsituta id pelo correspondente id de usuário

exemplo:
id usuario é 0300d54f-a59f-497c-8fc7-b4947da4727e

http://localhost:3333/users/0300d54f-a59f-497c-8fc7-b4947da4727e

informe os dados do usuario que deseja alterar no body da requisição no formato json, como no exemplo abaixo:

{

  "email": "emaildeusuario@teste.com",
  "password": "123456"

}


Demais requisições...






