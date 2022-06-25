/*
//Desmonstrando como JS é assíncrono
console.log('primeiro log')
console.log('segundo log')
setTimeout(() => {        //setTimeout simula um atraso
  console.log('terceiro log')
}, 1000)
console.log('quarto log')
*/

/*
//Desmonstrando como JS é assíncrono
function chamarPessoa(nome) {
  setTimeout(() => {
    console.log(nome)
    return nome
  }, 2000)
}
const pessoa = chamarPessoa('Gabriela')
// console retorna 'Gabriela'
console.log(pessoa)

function imprimir(nome) {
  console.log("oi " + nome)
}
// console retorna undefined
imprimir(pessoa)
*/

/*
// O Promise faz com que o JS não mais retorne undefined
function chamarPessoa(nome) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!nome) {
        return reject(Error("Você precisa passar um nome")) // retornado quando o parametro não é definido
      }else{
        // console.log(nome)
        return resolve(nome)
      }
    }, 2000)
  })
}
const pessoa = chamarPessoa('Gabriela')
console.log(pessoa) // retorna Promise { <pending> }

function imprimir(nome) {
  console.log("oi " + nome)
}
imprimir(pessoa) // oi [object Promise]

// Forma de falar como seguir com a Promise()
chamarPessoa('')
.then((respostaDesejada) => {    // caso seja resposta desejada(resolve)
  console.log(respostaDesejada) // retorna Gabriela
  imprimir(respostaDesejada)    // retorna oi Gabriela
}).catch((respostaIndesejada) => console.error(respostaIndesejada)) // caso seja resposta indesejada(reject)

// Combo async-try-await-catch é uma outra forma de lidar com a assincronidade sem os Promises()
async function resolver() {
  try {
    const respostaDesejada = await chamarPessoa('Gabriela')
    console.log(respostaDesejada)
    imprimir(respostaDesejada)
  }
  catch(err) {
    console.error("ERRO CAPTURADO", err)
  }
}
resolver()
*/

/*
//try catch permite o fluxo do código mesmo em caso de erro
// por padrão erros impedem que o código siga sendo executado, sem o try-catch o console.log não seria executado
const nome = "Lorena" 
try {
  nome = "Celina"
}
catch(err) {
  console.error("ERRO CAPTURADO", err)
}

console.log("o nome é " + nome)
//*/

