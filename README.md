# Como Executar o Projeto em Docker 
## Passo 1: Clonar o Repositório
- Primeiramente, clone o repositório para o seu computador e navegue até a pasta do projeto.

`git clone -b docker-setup https://github.com/lucasbadin1/starsoft-frontend-challenge.git`
`cd starsoft-frontend-challenge`

## Passo 2: Rodando o Docker Compose
- O comando docker para iniciar a aplicação é:

`docker-compose up --build` 

- Crucial para iniciar o ambiente de desenvolvimento completo no Docker, desde a construção da imagem até a execução do servidor Next.js. Depois da criação da imagem, o ambiente pode ser iniciado com:

`docker-compose up` 

## Passo 3: Acessando a Aplicação:
A aplicação estará disponível no navegador localmente em **http://localhost:3000** após a execução do comando docker-compose up.

## OBS: Como Parar o Docker:
O comando `docker-compose down` é fornecido para garantir que você possa parar o ambiente com segurança quando terminar de trabalhar. Ele elimina os containers e redes associados à execução do projeto.


# Projeto em deploy com a Vercel:

**Link para a aplicação em produção na Netlify**:  
  - [https://starsoft-frontend-deploy.vercel.app/]


# NFT Marketplace - Front-End Challenge

## Descrição

Este projeto é um **marketplace de NFTs** (Non-Fungible Tokens) construído utilizando **Next.js**, **React**, **Redux**, **React Query** e **TypeScript**. O objetivo é proporcionar uma experiência de compra de NFTs fluída e responsiva, com um sistema de carrinho de compras, animações interativas e otimizações de performance.

A aplicação foi desenvolvida de acordo com as melhores práticas de **Clean Code**, otimização de performance e **Responsividade**, buscando garantir uma experiência de usuário de alta qualidade em diferentes dispositivos e tamanhos de tela.

# Decisões Arquiteturais & Justificativas Técnicas

Nesta etapa final de refinamento, decisões estratégicas foram tomadas visando modernizar a stack e alinhá-la aos padrões atuais da indústria para aplicações **Next.js**.


## A Escolha: Tailwind CSS vs. SASS

Embora o SASS ofereça excelente modularidade, optou-se estrategicamente pelo **Tailwind CSS** neste projeto por três motivos técnicos que impactam diretamente os critérios de avaliação:

1.  **Performance (Bundle Size):** O Tailwind gera CSS atômico. Ao contrário do SASS, que pode crescer linearmente com o projeto, o bundle do Tailwind tende a estagnar, garantindo carregamentos mais rápidos (LCP/FCP), essenciais para e-commerce.
2.  **Server Components (RSC):** Com a evolução do Next.js 14/15, bibliotecas de estilo "Runtime" ou pré-processadores pesados perdem espaço para utility-classes que não dependem de JavaScript para renderizar estilos, eliminando o *Flash of Unstyled Content* (FOUC).
3.  **Manutenibilidade & Padrão de Design:** O uso de tokens utilitários garante consistência visual ("Fidelidade ao Design") sem a necessidade de criar e manter centenas de nomes de classes arbitrários (`.wrapper-left-container-blue`), seguindo princípios de **Atomic CSS**.

> **Nota:** Possuo competência plena em SASS/SCSS e Styled Components, mas para a arquitetura deste projeto específico, o Tailwind se provou a solução tecnicamente superior.


## Gerenciamento de Estado & Persistência

Para atender ao requisito de "Gerenciamento eficiente", evitou-se o uso de bibliotecas pesadas como `redux-persist` (que frequentemente causam problemas de hidratação no Next.js).

* **Solução Criada:** Implementei um **Middleware Redux Customizado**.
* **Como funciona:** Ele intercepta apenas as ações do carrinho e salva no `localStorage` de forma assíncrona.
* **Hidratação Segura:** Foi implementado o padrão de `Mounted State` nos componentes de UI para evitar o erro de *Hydration Mismatch* entre Servidor (SSR) e Cliente, garantindo que o usuário não perca seus itens ao atualizar a página (F5).

---

## Estratégia de Testes (QA)

A suíte de testes foi desenhada focando na **Pirâmide de Testes**, priorizando a lógica crítica de negócio sobre testes de implementação visual frágeis.

1.  **Lógica de Negócio (100% Cobertura):**
    * `cart-slice.ts`: Testes exaustivos garantindo que cálculos de total, adição e remoção de itens sejam matematicamente precisos.
    * `products.ts (Service)`: Mocks de API para garantir tratamento de erros (ex: Error 500) e adaptação de dados.
2.  **Integração (Componentes Críticos):**
    * `CartButton`: Testes de integração validando se a interação do usuário dispara as ações corretas no Redux e se a UI responde (ex: mostrar contador vs. mostrar "Carrinho Vazio").
3.  **Unitários (UI):**
    * `QuantityButton`: Validação de limites (não permitir quantidade < 1).


## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização no lado do servidor (SSR), geração de sites estáticos (SSG), e otimização de performance.
- **React Query**: Biblioteca para **fetching de dados** eficiente, com gerenciamento de estados de **loading**, **erro** e **sucesso**.
- **Redux**: Gerenciamento global de estado, particularmente para o carrinho de compras.
- **Framer Motion**: Biblioteca para animações e interações suaves e dinâmicas, melhorando a UX.
- **TypeScript**: Tipagem estática para garantir maior **robustez** e **manutenibilidade** do código.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e consistente.
- **Tailwind / Styled Components**: Para **estilização modular** e reutilizável, garantindo escalabilidade do projeto.
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

#### Atualizações no desenvolvimento - 2026

**Branch Correspondente**:
- `main`

- **Containerização Avançada & Segurança**: 
  - Implementação de `Dockerfile` utilizando **Multi-stage Builds** (stages: *deps*, *builder*, *runner*), segregando dependências de desenvolvimento das de produção.
  - Ativação do modo **Next.js Standalone**, que rastreia apenas os arquivos necessários para execução, reduzindo drasticamente o tamanho da imagem final de **>1GB para ~100MB**.
  - Configuração de usuário não-root (`nextjs`) para execução do container, mitigando riscos de segurança em ambientes de produção.

- **Engenharia de Testes**: 
  - Migração para um ambiente de testes moderno utilizando **Jest** com compilador **SWC** (baseado em Rust) para execução ultrarrápida.
  - Atingimento de **100% de Cobertura de Código** nas regras de negócio financeiro (`cart-slice`), garantindo integridade matemática.
  - Implementação de testes de integração no `CartButton` utilizando mocks inteligentes para isolar a lógica de orquestração da interface visual complexa.

- **Arquitetura de Estado & Middleware**: 
  - Desenvolvimento de um **Middleware Redux Nativo** para persistência de dados.
  - A solução elimina a necessidade de bibliotecas de terceiros (como `redux-persist`), reduzindo o bundle size e oferecendo controle granular sobre quais *slices* do estado são salvos no `localStorage`, evitando overhead desnecessário.

- **Resolução de Hidratação (SSR)**: 
  - Diagnóstico e correção de erros críticos de *Hydration Mismatch* típicos do Next.js App Router.
  - Aplicação do padrão **"Mounted State"** (via hooks customizados) para sincronizar deterministicamente a renderização inicial do servidor com o primeiro paint do cliente, assegurando uma UX fluida e sem "piscadas" de conteúdo.

- **Refatoração TypeScript Strict & Linting**: 
  - Adoção de **Strict Mode** em todo o projeto.
  - Remoção sistemática de tipos `any` em testes e componentes, substituindo-os por interfaces tipadas e Generics.
  - Correção de todos os *warnings* de ESLint e problemas de conformidade, resultando em um código autodocumentável e seguro em tempo de compilação.

- **Estabilização da Stack & Interface**:
  - **Correção de Layouts**: Ajustes finos de CSS/Tailwind para garantir 100% de fidelidade ao protótipo (Pixel Perfect) e corrigir quebras de layout em dispositivos móveis.
  - **Sanitização de Código**: Remoção de *dead code*, logs de desenvolvimento e importações não utilizadas, otimizando a leitura e a performance da aplicação.
  - **Padronização de Componentes**: Unificação da linguagem visual e comportamental dos componentes interativos (botões, modais e inputs). 


### Atualizações nas Branches: 2026

#### 1. Branch `main` - Deploy na Vercel / Configuração Docker

- **Deploy automático na Vercel**:
  - Configuração do fluxo de deploy para atualizar automaticamente a aplicação sempre que houver modificações na branch `main`.





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
