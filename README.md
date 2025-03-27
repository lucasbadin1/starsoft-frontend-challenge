## Como Executar o Projeto em Docker 
## Passo 1: Clonar o Repositório
- Primeiramente, clone o repositório para o seu computador e navegue até a pasta do projeto.

`git clone -b docker-setup https://github.com/lucasbadin1/starsoft-frontend-challenge.git`
`cd starsoft-frontend-challenge`

## Passo 2: Rodando o Docker Compose
- O comando docker-compose up é crucial para iniciar o ambiente de desenvolvimento completo no Docker, desde a construção da imagem até a execução do servidor Next.js.

## Passo 3: Acessando a Aplicação:
A aplicação estará disponível no navegador localmente em **http://localhost:3000** após a execução do comando docker-compose up.

## OBS: Como Parar o Docker:
O comando `docker-compose down` é fornecido para garantir que você possa parar o ambiente com segurança quando terminar de trabalhar. Ele elimina os containers e redes associados à execução do projeto.


## Projeto em deploy com a Netlify:

**Link para a aplicação em produção na Netlify**:  
  - Exemplo: [https://67e49abd70acfe448841766a--wondrous-griffin-8da7e9.netlify.app]


# NFT Marketplace - Front-End Challenge

## Descrição

Este projeto é um **marketplace de NFTs** (Non-Fungible Tokens) construído utilizando **Next.js**, **React**, **Redux**, **React Query** e **TypeScript**. O objetivo é proporcionar uma experiência de compra de NFTs fluída e responsiva, com um sistema de carrinho de compras, animações interativas e otimizações de performance.

A aplicação foi desenvolvida de acordo com as melhores práticas de **Clean Code**, otimização de performance e **Responsividade**, buscando garantir uma experiência de usuário de alta qualidade em diferentes dispositivos e tamanhos de tela.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização no lado do servidor (SSR), geração de sites estáticos (SSG), e otimização de performance.
- **React Query**: Biblioteca para **fetching de dados** eficiente, com gerenciamento de estados de **loading**, **erro** e **sucesso**.
- **Redux**: Gerenciamento global de estado, particularmente para o carrinho de compras.
- **Framer Motion**: Biblioteca para animações e interações suaves e dinâmicas, melhorando a UX.
- **TypeScript**: Tipagem estática para garantir maior **robustez** e **manutenibilidade** do código.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e consistente.
- **SASS / Styled Components**: Para **estilização modular** e reutilizável, garantindo escalabilidade do projeto.
- **Docker**: Para configuração do ambiente de desenvolvimento, tornando-o portável e fácil de configurar.

## Funcionalidades Implementadas

### 🚀 Funcionalidades Principais

1. **Página Inicial (Homepage)**:
   - **Desenvolvida com Next.js** e **React Query** para garantir um carregamento rápido e eficiente.
   - **Renderização otimizada** utilizando **getStaticProps** e **getServerSideProps**.

2. **Sistema de Carrinho de Compras**:
   - Gerenciamento de itens no carrinho usando **Redux** com **ações escaláveis** (adicionar, remover, atualizar quantidade).
   - Melhoria na **UI/UX** do carrinho, incluindo animações e transições suaves para interação com o usuário.

3. **Responsividade Completa**:
   - Layouts adaptáveis para diferentes tamanhos de tela, garantindo uma experiência consistente em dispositivos móveis, tablets e desktops.
   - **Refinamento da responsividade** com o uso de **Tailwind CSS** e **flexbox** para ajustes dinâmicos.

4. **Animações Interativas**:
   - Integração com **Framer Motion** para **transições de páginas** e animações em **botões** e **cards**.
   - **Efeitos de hover**, **escala suave** e **sombreamento dinâmico** para aumentar a interatividade.

5. **Otimização de Performance**:
   - **Infinite Scroll** e **carregamento de dados sob demanda** utilizando **React Query** e técnicas de **SSG/SSR**.
   - **Otimização de imagens** usando o componente `next/image`, garantindo que as imagens de NFTs sejam carregadas de forma eficiente.
   - **Importação dinâmica** para componentes pesados, garantindo um tempo de carregamento inicial mais rápido.

6. **SEO e Acessibilidade**:
   - Implementação de boas práticas de **SEO** utilizando **next/head**.
   - **Acessibilidade** melhorada com uso de **atributos ARIA**, **HTML semântico** e suporte completo para leitores de tela.

7. **Modularização de Componentes**:
   - Estrutura de componentes **modulares** e reutilizáveis, como **NFTCard**, **CartButton**, **Header**, e **Footer**, melhorando a escalabilidade do código.
   - **Refatoração contínua** de componentes, aplicando **princípios de Clean Code** e **boas práticas de arquitetura**.

### 🚀 Atualizações Realizadas

#### 20/03/2025 

**Branch Correspondente**:  
- `master` 

- **Página Inicial**: Implementação da homepage utilizando **Next.js** e **React Query**.
- **Otimização de Dados**: Utilização de **getStaticProps** e **getServerSideProps** para melhor performance.
- **Gerenciamento de Estado**: Implementação de **useEffect** para persistir dados carregados.

#### 22/03/2025

**Branch Correspondente**:  
- `feature/cart-enhancements` 

- **Aprimoramento do Carrinho de Compras**: Refatoração da lógica para melhor escalabilidade.
- **Responsividade**: Ajustes finos de layout para diferentes tamanhos de tela.
- **Limpeza de Arquitetura**: Refatoração do código para modularidade e legibilidade.


#### 23/03/2025

**Branch Correspondente**:  
- `feature/cart-state-optimization` 

- **Otimização do Carrinho com Redux**: Melhoria na lógica de estado do carrinho.
- **UI/UX Refinada**: Melhorias em comportamentos de overlay e UI responsiva.
- **Código Organizado**: Melhoria no naming convention e estrutura de componentes.

#### 24/03/2025

**Branch Correspondente**:  
- `refactor/organize-modularize-clean-code` 

- **Otimização de Dados**: Melhorias no **infinite scroll** e **carregamento contínuo**.
- **Otimização da Responsividade**: Ajustes dinâmicos nos itens do carrinho para telas pequenas.
- **Redux Melhorado**: Melhor gestão de estados e re-renderizações otimizadas.

#### 25/03/2025

**Branch Correspondente**:  
- `refactor/organize-modularize-clean-code` 

- **Modularização da Lista de NFTs**: Refatoração para componentes reutilizáveis e organizados.
- **Refatoração de Header**: Melhor separação de responsabilidades e aumento da reusabilidade.
- **Clean Code**: Aplicação rigorosa dos princípios de **Clean Code** e **boas práticas de TypeScript**.
- **Refatoração de CartButton**: Melhorias na estrutura de arquivos e na modularização.

#### 26/03/2025

**Branch Correspondente**:  
- `feature/animations-interactions-styling` 

- **Animações Interativas**: Integração com **Framer Motion** para transições e efeitos dinâmicos.
- **Estilização Otimizada**: Uso de **SASS** e **Styled Components** para garantir modularidade e escalabilidade de estilo.

### Atualizações nas Branches: (26/03/2025)

#### 1. Branch `main` - Deploy na Netlify

- **Deploy automático na Netlify**:
  - Configuração do fluxo de deploy para atualizar automaticamente a aplicação sempre que houver modificações na branch `main`.

  **Link para a aplicação em produção na Netlify**:  
  - Exemplo: [https://67e49abd70acfe448841766a--wondrous-griffin-8da7e9.netlify.app]

#### 2. Branch `docker-setup` - Configuração do ambiente de desenvolvimento utilizando Docker e Docker Compose 





# Teste para Desenvolvedor(a) Front-End Next.js

## Introdução

Bem-vindo(a) ao processo seletivo para a posição de **Desenvolvedor(a) Front-End** em nossa equipe! Este teste tem como objetivo avaliar suas habilidades técnicas em **Next.js**, **React** e as demais tecnologias mencionadas na descrição da vaga.

## Instruções

- Faça um **fork** deste repositório para o seu GitHub pessoal.
- Desenvolva a aplicação conforme as especificações abaixo, seguindo as **melhores práticas de desenvolvimento**.
- Após a conclusão, envie o link do seu repositório para avaliação.
- Sinta-se à vontade para adicionar qualquer documentação ou comentários que julgar necessário.

## Desafio

### Contexto

Você foi designado para desenvolver a interface de um **marketplace de NFTs** (Non-Fungible Tokens) com funcionalidades de carrinho de compras. O objetivo é criar uma aplicação web responsiva e interativa que proporcione uma ótima experiência ao usuário, utilizando **Next.js** como framework principal.

### Requisitos

1. **Uso do Next.js**

   - Utilize **Next.js** como o framework principal da aplicação.
   - Aproveite os recursos do Next.js, como:
     - **Renderização no Lado do Servidor (SSR)** e/ou **Geração de Sites Estáticos (SSG)** para otimizar o carregamento das páginas.
     - **Rotas Dinâmicas** para páginas de detalhes dos NFTs.
     - **Next.js API Routes** se necessário para funcionalidades adicionais.
     - **Otimização de Imagens** com o componente `next/image`.
     - **Importação Dinâmica** para carregamento otimizado de componentes pesados.

2. **Interface do Usuário**

   - Implemente o design fornecido no link do **Figma**:
     - [Figma Design](https://www.figma.com/design/j9HHfWPPoLyObtlVBeMhTD/Front-end-Challenge?node-id=0-1&t=sWwJ0qlYdwzJHKyJ-0)
   - Siga fielmente o design e as especificações fornecidas.
   - Garanta que a aplicação seja **responsiva** e funcione bem em diferentes tamanhos de tela.
   - Implemente navegação entre as páginas utilizando o sistema de roteamento do Next.js.

3. **Gerenciamento de Estado**

   - Utilize **Redux** ou **Redux Toolkit** para gerenciar o estado global da aplicação.
   - Configure a store do Redux e implemente os reducers necessários.
   - Gerencie estados como itens no carrinho,

4. **Busca de Dados**

   - Use **React Query** para buscar e sincronizar dados da API.
   - A API está documentada em:
     - [Starsoft Challenge API Docs](https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/docs)
   - Implemente chamadas para obter a lista de NFTs, detalhes dos itens, etc.
   - Utilize o **Data Fetching** do Next.js (`getStaticProps`, `getServerSideProps`) conforme adequado.
   - Trate os estados de **loading**, **sucesso** e **erro** nas requisições.

5. **Animações e Interações**

   - Utilize **Framer Motion** para adicionar animações e interações conforme necessário.
   - Garanta que as animações sejam suaves e contribuam para a experiência do usuário.
   - Implemente animações em transições de página, hover em botões e cards, entre outros.

6. **Estilização**

   - Use **SASS** ou **Styled Components** para estilizar a aplicação.
   - Organize os estilos de maneira modular e reutilizável.
   - Siga as boas práticas de organização de arquivos e componentes.
   - Garanta a consistência visual em toda a aplicação.

7. **Configuração com Docker**

   - Configure o ambiente de desenvolvimento utilizando **Docker** e **Docker Compose**.
   - Crie um arquivo `Dockerfile` para a aplicação Next.js.
   - Crie um arquivo `docker-compose.yml` para orquestrar os serviços necessários.
   - A aplicação deve ser iniciada com um único comando (`docker-compose up`).
   - Documente quaisquer configurações específicas necessárias.

8. **Boas Práticas de Código**

   - Aplique os princípios de **Clean Code** em toda a sua implementação.
   - Utilize um padrão de código consistente e configure **ESLint** e **Prettier** no projeto.
   - Documente o código quando necessário para melhorar a legibilidade.
   - Utilize os recursos do **Next.js** para otimização, como importação dinâmica e otimização de imagens.

9. **Testes**

   - Escreva testes unitários e/ou de integração para as principais funcionalidades da aplicação utilizando **Jest** e **React Testing Library**.
   - Os testes devem cobrir, no mínimo, os componentes principais e funcionalidades críticas.
   - Garanta que todos os testes passem antes de enviar o projeto.

### Diferenciais (Desejável)

- **TypeScript**

  - Utilize **TypeScript** para adicionar tipagem estática ao seu código, aumentando a robustez e manutenção do projeto.

- **SEO e Acessibilidade**

  - Implemente boas práticas de **SEO** e **acessibilidade** na aplicação.
  - Utilize o componente `next/head` para manipulação de meta tags.
  - Otimize a performance da aplicação seguindo as recomendações do **Lighthouse**.

## Entrega

- O código deve estar disponível em um repositório Git (preferencialmente **GitHub**) público.
- Inclua um arquivo `README.md` com:
  - Instruções claras sobre como configurar e executar a aplicação.
  - Descrição das funcionalidades implementadas.
  - Tecnologias utilizadas e justificativas de escolhas técnicas.
  - Possíveis limitações ou melhorias futuras.
- Certifique-se de que o histórico de commits reflita o andamento do desenvolvimento, com mensagens claras e objetivas.

## Avaliação

Os seguintes aspectos serão considerados na avaliação:

- **Uso do Next.js**: Aproveitamento adequado dos recursos e features do Next.js na aplicação.
- **Fidelidade ao Design**: A interface deve ser fiel ao design fornecido no Figma.
- **Funcionalidade**: A aplicação deve estar funcional e todas as interações devem estar implementadas corretamente.
- **Gerenciamento de Estado**: O uso de Redux para gerenciamento de estado deve ser eficiente e bem estruturado.
- **Busca de Dados**: A integração com a API usando React Query e Next.js deve ser feita corretamente.
- **Animações e Interações**: As animações devem ser suaves e bem integradas na experiência do usuário.
- **Código Limpo**: O código deve ser limpo, seguindo boas práticas de desenvolvimento e princípios de Clean Code.
- **Estilização**: A aplicação deve ser estilizada usando SASS de forma modular e reutilizável.
- **Testes**: Qualidade e abrangência dos testes implementados.
- **Configuração com Docker**: A configuração do ambiente de desenvolvimento utilizando Docker e Docker Compose deve ser clara e funcional.
- **Documentação**: Clareza das instruções e documentação fornecidas no `README.md`.
- **Histórico de Commits**: Uso adequado do Git com commits bem descritos.

---

Boa sorte! Estamos ansiosos para conhecer o seu trabalho e potencial.

>>>>>>> 652faf23926bbf7908d1775e5533aff857214011
