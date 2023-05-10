h4 align="center">
  <img width="180px" alt="trybe wallet logo" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgamerview.uai.com.br%2Freviews%2Fmario-kart-tour-review%2F&psig=AOvVaw3cwO7rJxMMAtdfxIE4uUSd&ust=1683831415705000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCLikif626_4CFQAAAAAdAAAAABAW" />
  <br /><br />
</h4>

<hr />

# Projeto CarShop API

Projeto realizado durante módulo de Back-end do curso de desenvolvimento web da Trybe.

<details>
  <summary><strong>O que foi feito</strong></summary></br>

  Neste projeto apliquei os princípios de **Programação Orientada a Objetos (POO)** para a construção de uma **API** com `CRUD` para gerenciar uma concessionária de veículos. Foi feito utilizando o banco de dados `MongoDB` através do framework do `Mongoose`. Além disso, foram utilizadas as ferramentas `Docker` e `Docker Compose` para facilitar o processo de desenvolvimento e implantação da aplicação. A metodologia **TDD (Test Driven Development)** foi aplicada para garantir a qualidade do código e a robustez da aplicação.
  
  Nesta aplicação, é possível realizar as operações básicas que se pode fazer em um determinado banco de dados: `CRUD`.
  
  A aplicação foi desenvolvida com:

- `Node.js`
- `TypeScript`
- `Mongoose`
- `POO`
- `S.O.L.I.D`
- `Arquitetura MSC`
- `docker`
- `docker-compose`
- `Express`;

</details>
<details>
  <summary><strong>Como rodar o projeto</strong></summary></br>

 Configurações mínimas para execução do projeto:

- Sistema Operacional Distribuição Unix
- Node versão 16.14.0 LTS
- Docker
- Docker-compose versão >=1.29.2

  **Com Docker:**

  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**

- `docker-compose up -d`;
- `docker exec -it car_shop bash`;
- `PORT=3001` ;
- `npm test`;

**Localmente:**

**Necessita ter um banco de dados(MySql) instalado localmente**

- `npm install` na raiz do projeto;
- `npm run dev`;
- `PORT=3001` ;
- `npm test`;

</details>

<details>
  <summary><strong>:memo: Tecnologias utilizadas</strong></summary><br />
  
- `Node.js`
- `TypeScript`
- `Mongoose`
- `POO`
- `S.O.L.I.D`
- `Arquitetura MSC`
- `docker`
- `docker-compose`
- `Express`;

</details>
<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

- Conectar sua aplicação e fazer consultas ao banco de dados `MongoDB` utilizando o `Mongoose`;
- Realizar uma análise de regras de negócios com foco na construção de aplicações orientadas a objetos;
- Aplicar a arquitetura em `camadas MSC` utilizando MongoDB com `Mongoose`, `Node.js` com `TypeScript` e programação orientada a objetos.

</details>
