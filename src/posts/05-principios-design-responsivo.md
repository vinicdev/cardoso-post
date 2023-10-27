---
title: "Princípios de Design Responsivo"
date: "27 de outubro de 2023"
prev: "Se você é um programador front-end, provavelmente já ouviu falar do SASS - Syntactically Awesome Style Sheets. SASS é um pré-processador de CSS que permite que você escreva estilos de maneira mais eficiente e organizada."
author: "Vinicius Cardoso"
---

# Princípios de Design Responsivo

![conheça sass e aprendar como implementar](/conhecendo-e-usando-sass.jpg)

Olá pessoal, como vocês estão? Já faz um bom tempo que não trago nenhum conteúdo aqui no blog, mas hoje venho falar sobre um assunto super interessante: o design responsivo.

Durante esta semana, estive na faculdade, e um colega de turma me mostrou o site de uma faculdade local aqui na cidade onde moro. Isso me inspirou a criar este material para vocês hoje.

Você pode estar se perguntando o que havia de tão especial nesse site. Bem, algo que pode ser um pouco difícil de encontrar atualmente é que o site não era responsivo.

Antes de compartilhar algumas dicas, quero destacar a importância de projetar seu projeto web para todos os dispositivos, especialmente para celulares, já que a maioria dos acessos ocorre por meio deles.

Agora, sem mais delongas, vamos para a dica da semana!

## Layout Flexível

Ao desenvolver uma página, é crucial priorizar o uso de unidades relativas de medida (porcentagens), em vez de medidas fixas (como pixels).

Vou dar um exemplo simples: imagine que você tenha um card que deve ter 680px, mas se você definir isso de forma fixa, o layout poderá ficar comprometido.

Exemplo:

```css 
    .card__fixo {
        // Desta forma, seu layout ficará quebrado
        width: 680px;
    }

    .card__relativo {
        // Uma forma simples de resolver
        max-width: 680px;
        width: 95%;
    }
```

Na segunda classe exemplificada acima, o card manterá 680px de largura, desde que caiba na tela. Após isso, ele ocupará 95% da tela, evitando problemas de layout.

Outra possibilidade útil no CSS é a função clamp, que é uma ferramenta valiosa para criar designs responsivos e adaptáveis. Ela combina três valores: mínimo, preferido e máximo, permitindo layouts flexíveis para diferentes tamanhos de tela.

Exemplo:

```css 
    .card__clamp {
        width: clamp(200px, 50%, 680px);
    }
```

Gosto muito de utilizar essa função, pois proporciona um ajuste mais fluido e economiza linhas de CSS. Além disso, o clamp não se limita apenas à largura, podendo ser usado de diversas formas. Por exemplo:


```css
    .meu-titulo {
        font-size: clamp(30px, 4vw, 120px);
    }
```

Isso permite tornar o tamanho do texto responsivo, evitando a necessidade de várias @media-queries para ajustá-lo.

## Mobile First
Agora, vou compartilhar algumas ideias sobre a abordagem "Mobile First". Como mencionei no início deste post, é fundamental dar atenção especial aos dispositivos móveis, não apenas por opinião própria, mas também com base em dados do cetic.br, que aponta que mais de 62% da população brasileira acessa a internet exclusivamente por meio de seus celulares. Com mais de 2 anos de experiência como desenvolvedor front-end, posso atestar que a maioria dos acessos que acompanhei eram de dispositivos móveis, o que reforça a importância de priorizar essa plataforma.

Para adotar a abordagem "Mobile First" no CSS, geralmente começamos a criar nossas interfaces considerando dispositivos móveis e, em seguida, aplicamos media queries para ajustar o layout para telas maiores.

---
### O que são Media Queries?
No desenvolvimento web, as media queries são ferramentas essenciais que permitem adaptar o design do seu site a diferentes dispositivos. Aqui estão os passos principais:

- Defina a Consulta de Mídia: Use @media em seu CSS para definir as condições, como largura de tela.
- Especifique Condições: Escolha as características do dispositivo, como largura, altura, etc. 
- Defina as Regras de Estilo: Aplique regras de estilo específicas para atender às condições da consulta de mídia.
- Com esse conhecimento prévio sobre media queries, podemos iniciar um exemplo de como aplicar essa técnica em seu projeto. Imagine que você precisa criar uma página começando pelo menor breakpoint.

---

Você pode seguir os seguintes breakpoints:

- 0 ~ 575px (sem media query)
- 576 ~ 767px (sm) [@media (max-width: 768px)]
- 768 ~ 991px (md) [@media (max-width: 992px)]
- 992 ~ 1199px (lg) [@media (max-width: 1200px)]
- ≥1200px (xl) [@media (min-width: 1201px)]

Exemplo de uso:

```css
/* 0 ~ 575px */
.classe {
    background-color: red;
}

/* 576 ~ 767px (sm, small) */
@media (max-width: 768px) {
    .classe {
        background-color: blue;
    }
}

/* 768 ~ 991px (md, medium) */
@media (max-width: 992px) {
    .classe {
        background-color: green;
    }
}

/* 992 ~ 1199px (lg, large) */
@media (max-width: 1200px) {
    .classe {
        background-color: yellow;
    }
}

/* >=1200px (xl, extra-large) */
@media (min-width: 1201px) {
    .classe {
        background-color: pink;
    }
}
```

## Conclusão

Há muito mais a ser discutido sobre layouts responsivos, mas por hoje, vou encerrar por aqui. Quem sabe em outro post eu aborde novamente esse assunto, que é fundamental para quem deseja desenvolver um site nos dias de hoje. Lembre-se sempre de priorizar os clientes que acessam seu produto por dispositivos móveis. Realize pesquisas de satisfação para identificar os pontos fracos do seu produto.