const fs = require('fs');
const path = require('path');

console.log('> [ ☀️ DAY 1 ] Iniciando o dia 1');

console.log('> [ 🚙 PATH FUNCTION ] Configurando caminho do arquivo');
const filePath = path.resolve(__dirname, 'input.json');

console.log('> [ 📝 FS FUNCTION ] Buscando o arquivo');
let input = fs.readFileSync(filePath, 'utf8');
console.log('> [ 📝 FS FUNCTION ] Aquivo encontrado e lido!');

let inputArray = input.trim().split("\n");
console.log('> [ ✏️ FORMATANDO ] Lista dividida em itens');
// console.log(inputArray);

let arrayDeNumeros = [];
inputArray.map((item) => {

  let separandoLetras = item.split('');
  //console.log('> [ FORMATANDO ] Separando cada caractere:');
  // console.log(separandoLetras);

  for (let i = 0; i < separandoLetras.length; i++) {
    let achandoNumeros = separandoLetras.map((item) => {
      if (item.match(/\d+/g)) {
        if (item !== undefined) {
          return item;
        }
      }
    });

    let numerosFiltrados = achandoNumeros.filter((item) => typeof item === 'string');

    // console.log('> [ SEARCH ] Encontrando números ');

    arrayDeNumeros.push(numerosFiltrados);

    return arrayDeNumeros;

  }

  return arrayDeNumeros;

});

console.log(`> [ 🔀 FILTRANDO ] Lista filtrada`);
// console.log(arrayDeNumeros);


let numerosSomados = arrayDeNumeros.map((item) => {
  let ultimoNumero = (item.length) - 1;
  let soma = parseInt(item[0] + item[ultimoNumero]);

  // console.log('> [ SUM ] Somando os números');
  // console.log(`> [ SUM ] ${item[0]} + ${item[ultimoNumero]} = ${soma}`);
  return soma;
});

console.log('> [ ➕ SUM ] Somando os números');

const todosOsNumerosSomados = numerosSomados.reduce((acc, item) => {
  return acc + item;
});

console.log(`> [ ➕ SUM ] Somando todos os números da lista`);
// console.log(todosOsNumerosSomados);

module.exports = todosOsNumerosSomados;