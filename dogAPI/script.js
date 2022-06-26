const container = document.getElementById('demo')
const botaoDogEspecifico = document.getElementById('especifico')
const botaoDogAleatorio = document.getElementById('aleatorio')

const limparConteudo = () => {container.removeChild(container.firstChild)}

botaoDogAleatorio.addEventListener("click", () => {container.removeChild(container.firstChild)}, false);
botaoDogEspecifico.addEventListener("click", () => {container.removeChild(container.firstChild)}, false);

async function getDoguinhoEspecifico(){
  var breed = prompt('Escolha uma raça de cachorro: ');
  try {
    const resposta = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    // console.log(resposta)
    const dados = await resposta.json()
    // console.log(dados)
    const doguinhoImagem = document.createElement('img')
    doguinhoImagem.setAttribute('src', dados.message)
    container.appendChild(doguinhoImagem)
  }
  catch(err) {
    console.error("HTTP Error: ", err);
    alert('Essa raça não existe na nossa base de raças');
  }
}

async function getDoguinhoAleatorio(){
  try{
    const resposta = await fetch('https://dog.ceo/api/breeds/image/random')
    const dados = await resposta.json()
    console.log(dados)
    const doguinhoImagem = document.createElement('img')
    doguinhoImagem.setAttribute('src', dados.message)
    container.appendChild(doguinhoImagem)
  }
  catch(err){
    console.error("HTTP Error: ", err);
    alert('Essa raça não existe na nossa base de raças');
  }
}