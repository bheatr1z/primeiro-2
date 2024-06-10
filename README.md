# Dados dos Atletas

## Resumo do Projeto

Este projeto é uma aplicação JavaScript que recebe informações de um atleta, calcula diversos parâmetros baseados nessas informações, e exibe os resultados para o usuário. 

## Introdução

Os organizadores de uma competição de ginástica artística solicitaram a criação de um software para gerenciar dados dos atletas. A aplicação calcula a categoria, o IMC, a média das notas e exibe todas as informações do atleta de forma organizada.

## Especificações

A classe `Atleta` foi criada para concentrar os atributos e métodos dos atletas. A classe recebe os seguintes atributos:

- `nome`
- `idade`
- `peso`
- `altura`
- `notas`

A classe possui os seguintes métodos:

- `calculaCategoria()`: Calcula a categoria do atleta baseada na idade.
- `calculaIMC()`: Calcula o IMC (Índice de Massa Corporal) do atleta.
- `calculaMediaValida()`: Calcula a média válida das notas do atleta.
- `obtemNomeAtleta()`: Retorna o nome do atleta.
- `obtemIdadeAtleta()`: Retorna a idade do atleta.
- `obtemPesoAtleta()`: Retorna o peso do atleta.
- `obtemNotasAtleta()`: Retorna as notas do atleta.
- `obtemCategoria()`: Retorna a categoria do atleta.
- `obtemIMC()`: Retorna o IMC do atleta.
- `obtemMediaValida()`: Retorna a média válida das notas do atleta.

## Regras Utilizadas

1. **Para calcular a categoria**:
   - Infantil: 9 a 11 anos
   - Juvenil: 12 e 13 anos
   - Intermediário: 14 e 15 anos
   - Adulto: 16 a 30 anos
   - Sem categoria: Demais idades

2. **Para calcular o IMC**:
   - Fórmula: `imc = peso / (altura * altura)`

3. **Para calcular a média válida**:
   - A maior e a menor nota são descartadas, e a média é calculada com as três notas restantes.

## Exemplo de Uso

```javascript
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log("Nome:", atleta.obtemNomeAtleta());
console.log("Idade:", atleta.obtemIdadeAtleta());
console.log("Peso:", atleta.obtemPesoAtleta());
console.log("Altura:", atleta.altura);
console.log("Notas:", atleta.obtemNotasAtleta());
console.log("Categoria:", atleta.obtemCategoria());
console.log("IMC:", atleta.obtemIMC());
console.log("Média válida:", atleta.obtemMediaValida());
