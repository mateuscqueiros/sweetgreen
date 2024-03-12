## Pré-processadores CSS

- SASS: Sintatically Awesome Stylesheet.
- Compatível do CSS.
- Variáveis, Mixins, Nesting, Módulos.
- Hampton Lintorn & Natalie Weizenbau.

### Conceitos de SASS

- Módulos: podemos dividir nossos estilos em vários arquivos, chamados módulos. Depois podemos importar
  apenas os que precisamos.
- Variáveis: poder reutilizar um certo valor em todo o estilo referenciando um alias.
- Mixin: Podemos reaproveitar uma porção de CSS, e modificá-la conforme
  parâmetros em cada componente.

## Background-image

- Podemos colocar uma imagem de fundo em um elemento usando a propriedade background-image.
- `background-image`: Por padrão, quando colocamos uma imagem de fundo em um elemento, ela é repetida até cobrir o container. Podemos prevenir esse comportamento, utilizando a propriedade `backgroud-repeat`
- `background-position`: permite que orientemos a imagem a se posicionar em relação ao elemento.
- `background-size`: aceita dois valores. `cover` que faz com que a imagem cubra todo o espaço de seu elemento. `contain` que faz com que a imagem apareça por completo dentro do elemento, mesmo que não o ocupe totalmente.

## Centralizar elementos com position absolute

- Quando tentamos centralizar elementos com left, precisamos compensar a sua largura com o transform para que ele fique centralizado corretamente.

```scss
div.rel {
  position: relative;
  div.abs {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
}
```
