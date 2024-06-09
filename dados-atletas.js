class Atletas {
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    calcularCategoria() {
        if(this.idade >= 9 && this.idade <= 11){
            return "Infantil"
        } else if(this.idade >= 12 && this.idade <= 13) {
            return "Juvenil"
        } else if(this.idade >= 14 && this.idade <= 15) {
            return "Intermediário"
        } else if(this.idade >= 16 && this.idade <= 30) {
            return "Adulto"
        } else {
            return "Sem categoria"
        }
    }
    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }
    calcularMediaValida() {
        let notasOrdenadas = this.notas.slice().sort((a, b) => a - b);
        let notasComputadas = notasOrdenadas.slice(1, -1);
        let media = notasComputadas.reduce((a, b) => a + b, 0) / notasComputadas.length;
        return media.toFixed(8);
    }
    obtemNomeAtleta() {
        return this.nome;

    }
    obtemIdadeAtleta() {
        return this.idade;

    }
    obtemPesoAtleta() {
        return this.peso;

    }
    obtemNotasAtleta() {
        return this.notas.join(",");

    }
    obtemCategoria() {
        return this.calcularCategoria();
    }
    obtemIMC() {
        return this.calcularIMC().toFixed(8);

    }
    obtemMediaValida() {
        return this.calcularMediaValida();

    }
}
const atleta = new Atletas("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
console.log("Nome:", atleta.obtemNomeAtleta());
console.log("Idade:", atleta.obtemIdadeAtleta());
console.log("Peso:", atleta.obtemPesoAtleta());
console.log("Altura:", atleta.altura);
console.log("Notas:", atleta.obtemNotasAtleta());
console.log("Categoria:", atleta.obtemCategoria());
console.log("IMC:", atleta.obtemIMC());
console.log("Média válida:", atleta.obtemMediaValida());