# Post-It
Quadro de Post-Its armazenados em RAM, permitindo operações de criação, exclusão e visualização.

## Ferramentas utilizadas
- ECMAScript 6+
- jQuery 3.3.1
- HTML5 e CSS3
- Bootstrap 3.3.7
- Gulp 4.0
- Babel 7.4, transpilando para ES5

## Recursos
- Completamente front-end
- Padrão de arquitetura MVC (Model-View-Controller) organizada em módulos
- Otimização de assets com Gulp e Babel

## Otimização de assets
Foram utilizados Gulp e Babel para racionalizar o uso de assets. Todos os arquivos JavaScript e CSS são minificados e aglutinados em apenas dois (`dist/script.js` e `dist/style.css`), reduzindo o tamanho total do download e a quantidade de requisições HTTP necessárias. O resultado é um carregamento mais rápido.<br>
Dado que os assets originais foram mantidos em `/src`, sua manutenção é facilitada já que é possível dividí-los em diversos arquivos e usar os recursos mais recentes do JavaScript, bastando rodar o Gulp ao final.
