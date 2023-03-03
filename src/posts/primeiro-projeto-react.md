---
title: "Como fazer primeiro projeto com React(NextJS)"
date: "02/02/2023"
prev: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
---
# Como fazer primeiro projeto com React(NextJS)

React e Next.js são duas das tecnologias mais populares no mundo do desenvolvimento web moderno. Juntas, elas podem ajudar a criar aplicativos web altamente dinâmicos e interativos. Se você é novo no React e Next.js, pode ser difícil saber por onde começar. Neste post, vamos dar uma olhada nos primeiros passos que você pode dar para começar a trabalhar com essas tecnologias.
1. Instale as ferramentas necessárias
Antes de começar a trabalhar com React e Next.js, é importante ter as ferramentas necessárias instaladas em seu computador. Você precisará do Node.js e do NPM (ou Yarn) instalados. O Node.js é uma plataforma que permite que você execute código JavaScript fora do navegador, enquanto o NPM e o Yarn são gerenciadores de pacotes que facilitam a instalação e gerenciamento de bibliotecas e dependências.
2. Crie um novo projeto Next.js
Agora que você tem as ferramentas necessárias instaladas, é hora de criar um novo projeto Next.js. Para fazer isso, abra seu terminal e execute os seguintes comandos:
lua

```sh
    npx create-next-app meu-projeto
    cd meu-projeto
    npm run dev
```

O primeiro comando criará um novo projeto Next.js chamado "meu-projeto". O segundo comando mudará para o diretório do projeto e o terceiro comando iniciará um servidor de desenvolvimento para que você possa começar a trabalhar.
3. Crie um componente React
Agora que você tem um projeto Next.js em execução, é hora de criar um componente React. Os componentes são blocos de construção fundamentais do React e são usados para criar interfaces de usuário. Para criar um novo componente, crie um novo arquivo na pasta "components" do seu projeto e adicione o seguinte código:
jsx

```sh
    import React from 'react'

    function MeuComponente() {
        return (
         
        )
    }
    export default MeuComponente
```

Este é um componente React simples que renderiza um título e um parágrafo. Você pode adicionar este componente a qualquer página do seu projeto Next.js para exibi-lo na interface do usuário.
4. Adicione estilos com CSS
Agora que você tem um componente React em funcionamento, é hora de adicionar estilos. O Next.js tem suporte embutido para CSS, então você pode adicionar arquivos CSS diretamente aos seus componentes. Crie um novo arquivo CSS na pasta "styles" do seu projeto e adicione o seguinte código:
css

```sh
    h1 {
        font-size: 36px;
        color: #333;
    }

    p {
        font-size: 18px;
        color: #666;
    }
```
    Este arquivo CSS define estilos para os elementos h1 e p. Agora, para usar esses estilos no seu componente React, importe o arquivo CSS no início do arquivo do componente:
    jsx

```sh
    import React from 'react'
    import styles from '../styles/MeuComponente.module.css'

    function MeuComponente() {
    return (
        <div>
        <h1 className={styles.titulo}>Meu Componente</h1>
        <p className={styles.paragrafo}>
```
