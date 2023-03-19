---
title: "Como fazer primeiro projeto com React(NextJS)"
date: "19 de março de 2023"
prev: "Que tal aprimorar suas habilidades em desenvolvimento web aprendendo um pouco mais sobre React e criando seu primeiro projeto utilizando o Next.js, uma estrutura de código aberto que oferece uma experiência de desenvolvimento incrivelmente intuitiva e fácil?"
author: "Vinicius Cardoso"
---
# Como fazer primeiro projeto com React(NextJS)

![Banner da postagem](/primeiro-projeto-nextjs.png)

Se você está começando no mundo do desenvolvimento web com React, pode ser um pouco intimidante pensar em como criar seu primeiro projeto. Felizmente, o Next.js oferece uma ótima estrutura para ajudá-lo a dar seus primeiros passos no mundo do desenvolvimento web.

O [Next.js](https://nextjs.org/learn/foundations/about-nextjs) é um framework que permite criar aplicativos React com facilidade e rapidez. Ele oferece uma variedade de recursos, como renderização do lado do servidor (SSR), gerenciamento de rotas, suporte a CSS modular e muito mais. Com o Next.js, você pode criar aplicativos web de alta qualidade e escaláveis com facilidade.

Neste post, vamos dar uma olhada em como criar seu primeiro projeto com React utilizando o Next.js. Vamos começar!

## Pré-requisitos

Antes de começar, você precisará ter o [Node.js](https://nodejs.org/pt-br/download/) instalado em seu computador. Você pode baixá-lo a partir do site oficial do Node.js.

## Passo 1: Criar um novo projeto

O primeiro passo é criar um novo projeto Next.js. Abra o terminal e navegue até a pasta onde você deseja criar seu novo projeto. Em seguida, digite o seguinte comando:

```sh
    npx create-next-app my-project
```
Substitua "my-project" pelo nome que você deseja dar ao seu projeto. O comando acima criará uma nova pasta chamada "my-project" e instalará todas as dependências necessárias para o seu projeto.

## Passo 2: Executar o projeto

Depois que o projeto for criado, você poderá executá-lo no navegador digitando o seguinte comando no terminal:

```sh
    cd my-project
    npm run dev
```

Este comando iniciará o servidor Next.js e abrirá o projeto no navegador.

## Passo 3: Adicionar páginas

Agora que o projeto está em execução, você pode começar a adicionar páginas ao seu aplicativo. Para adicionar uma nova página, crie um arquivo dentro da pasta "pages" com o nome que você deseja dar à sua página e com a extensão ".js".

Por exemplo, se você quiser criar uma página chamada "about", crie um arquivo chamado "about.js" dentro da pasta "pages".

Dentro desse arquivo, você pode adicionar seu código React como faria normalmente em um aplicativo React padrão.

## Passo 4: Adicionar estilos

O Next.js vem com suporte integrado para CSS modular. Para adicionar estilos a uma página, crie um arquivo com a extensão ".module.css" na mesma pasta que sua página. Em seguida, importe o arquivo de estilo em sua página da seguinte maneira:

```sh
   import styles from './styles.module.css'
```

Em seguida, você pode usar as classes definidas em seu arquivo de estilo em seus elementos HTML, como faria normalmente em um aplicativo React padrão.

## Passo 5: Deploy do aplicativo

Por fim, você pode implantar seu aplicativo em um servidor. O Next.js torna isso muito fácil. Existem várias opções para hospedar seu aplicativo Next.js, incluindo a própria plataforma Vercel, que é mantida pelos criadores do Next.js.

Para implantar seu aplicativo no Vercel, basta criar uma conta, conectar seu repositório ao Vercel e seguir as instruções para implantar seu aplicativo.

## Conclusão

Em resumo, o Next.js é uma ótima opção para quem está começando a trabalhar com React e deseja criar aplicativos web de alta qualidade e escaláveis. Com sua estrutura poderosa e recursos avançados, o Next.js simplifica o processo de criação de aplicativos React, permitindo que você se concentre em desenvolver recursos e funcionalidades para o seu aplicativo.

Ao seguir os passos simples apresentados neste post, você pode criar seu primeiro projeto com React utilizando o Next.js com facilidade. Lembre-se de que a prática é a chave para se tornar um desenvolvedor web bem-sucedido, por isso não tenha medo de experimentar e explorar os recursos disponíveis no Next.js. Com o tempo, você pode criar aplicativos web incríveis que atendam às necessidades de seus usuários e ajudem você a crescer em sua carreira como desenvolvedor web.