// https://teste-api-lilit.herokuapp.com/api-docs/#/

let getWelcome = async () =>{
  try{
    const response = await fetch('https://teste-api-lilit.herokuapp.com/');
    const welcomeJson = await response.json();
    console.log(welcomeJson);
  }
  catch(err){
    console.error('Peguei: ', err);
  }
}

// getWelcome()


/* Método com promises e then */
// fetch('https://teste-api-lilit.herokuapp.com/') //retorna uma promise
// .then((response) => response.json()) //then é um método da promise para tratar uma promise
// .then((welcomeJson) => console.log(welcomeJson)) //then encadeado pegará o response.json() e usará como parametro, nesse caso o welcomeJson
// .catch((err) => console.error(err));

/* GET com parametro*/
let getBeginers = async () =>{
  try{
    const response = await fetch('https://teste-api-lilit.herokuapp.com/beginers', { //Objeto poderia ser criado fora
      method: 'GET', //opcional quando o método é GET
      headers:{
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1NTY2NjI0NiwiaWF0IjoxNjU1NjY2MjQ2fQ._72xg8XziqbmYJ6a4RLZjNucJnvpdWzGoBmvlDMEAko",
      },
    }); 
    const beginers = await response.json();
    console.log(beginers);
  }
  catch(err){
    console.error('Peguei: ', err);
  }
}

/* GET com filter/*/
let filterBeginers = async (field, value) =>{
  try{
    const response = await fetch(`https://teste-api-lilit.herokuapp.com/beginers/filter?${field}=${value}`, { //Objeto poderia ser criado fora
        headers:{
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1NTY2NjI0NiwiaWF0IjoxNjU1NjY2MjQ2fQ._72xg8XziqbmYJ6a4RLZjNucJnvpdWzGoBmvlDMEAko",
      },
    }); 
    const filteredBeginers = await response.json();
    console.log(filteredBeginers);
  }
  catch(err){
    console.error('Peguei: ', err);
  }
}

filterBeginers("state", "sp")
filterBeginers("name", "linn")



/* GET com busca por ID*/
let getBeginerById = async (id) =>{
  try{
    const response = await fetch(`https://teste-api-lilit.herokuapp.com/beginers/${id}`, { //Objeto poderia ser criado fora
        headers:{
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1NTY2NjI0NiwiaWF0IjoxNjU1NjY2MjQ2fQ._72xg8XziqbmYJ6a4RLZjNucJnvpdWzGoBmvlDMEAko",
      },
    }); 
    const beginersById = await response.json();
    console.log(beginersById);
  }
  catch(err){
    console.error('Peguei: ', err);
  }
}

/* POST com parametro*/
//com objeto interno
let createBeginers = async () =>{
  try{
    const response = await fetch('https://teste-api-lilit.herokuapp.com/beginers/register', { //Objeto poderia ser criado fora
      method: 'POST', //obrigatório
      headers:{
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1NTY2NjI0NiwiaWF0IjoxNjU1NjY2MjQ2fQ._72xg8XziqbmYJ6a4RLZjNucJnvpdWzGoBmvlDMEAko",
      },
      body:JSON.stringify({
        "name": "Triz",
        "phone": "81999999999",
        "email": "triz@hackear.com",
        "linkedin": "https://linkedin.com/in/username",
        "github": "https://github.com/username",
        "city": "sao paulo",
        "state": "sp",
        "studyTime": 2,
        "stacksOfInterest": "Back-end",
        "priorKnowledge": [
          "Node",
          "Typescript",
          "Mongodb"
        ],
        "englishLevel": 2,
        "othersPrograms": "{reprograma}",
        "hasComputer": true,
        "internetAccess": true,
        "message": "Textinho bonitinho",
        "findUs": "Amiges"
      })
    }); 
    const newBeginer = await response.json();
    console.log(newBeginer);
  }
  catch(err){
    console.error('Peguei: ', err);
  }
}

/* POST com parametro*/
//com objeto externo
let beginerData = {
  "name": "Dan Vi",
  "phone": "81999999999",
  "email": "danvi@hackear.com",
  "linkedin": "https://linkedin.com/in/username",
  "github": "https://github.com/username",
  "city": "são paulo",
  "state": "sp",
  "studyTime": 2,
  "stacksOfInterest": "Full-stack",
  "priorKnowledge": [
    "JavaScript",
    "Node",
    "Typescript",
    "React",
    "Angular"
  ],
  "englishLevel": 5,
  "othersPrograms": "{reprograma}",
  "hasComputer": true,
  "internetAccess": true,
  "message": "Textinho bonitinho",
  "findUs": "Amiges"
}

let createBeginners = async (body = beginerData) =>{
  try{
    const response = await fetch('https://teste-api-lilit.herokuapp.com/beginers/register', { //Objeto poderia ser criado fora
      method: 'POST', //obrigatório
      headers:{
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1NTY2NjI0NiwiaWF0IjoxNjU1NjY2MjQ2fQ._72xg8XziqbmYJ6a4RLZjNucJnvpdWzGoBmvlDMEAko",
      },
      body:JSON.stringify(body)
    }); 
    const newBeginer = await response.json();
    console.log(newBeginer);
  }
  catch(err){
    console.error('Peguei: ', err);
  }
}


/*
beginerData = {
  "name": "Filipe Catto",
  "phone": "81999999999",
  "email": "catto@hackear.com",
  "linkedin": "https://linkedin.com/in/username",
  "github": "https://github.com/username",
  "city": "Cidade",
  "state": "Estado",
  "studyTime": 2,
  "stacksOfInterest": "Back-end",
  "priorKnowledge": [
    "Node",
    "Typescript",
    "Mongodb"
  ],
  "englishLevel": 2,
  "othersPrograms": "{reprograma}",
  "hasComputer": true,
  "internetAccess": true,
  "message": "Textinho bonitinho",
  "findUs": "Amiges"
}
*/

/* PUT e PATCH (UPDATED) com parametro*/
//PUT necessita que todas as informações sejam passadas
//PATCH é mais muderno e não necessita de todos os dados passados, somente o que será modificado 
let beginerDataToUpdate = {
  "email": "liniker2@hakear.com",
}

let updateBeginer = async (id, body = beginerDataToUpdate) =>{ //id será o paramêtro passado diretamenta na chamada da função
  try{
    const response = await fetch(`https://teste-api-lilit.herokuapp.com/beginers/update/${id}`, { //Objeto poderia ser criado fora
      method: 'PATCH', //obrigatório
      headers:{
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1NTY2NjI0NiwiaWF0IjoxNjU1NjY2MjQ2fQ._72xg8XziqbmYJ6a4RLZjNucJnvpdWzGoBmvlDMEAko",
      },
      body:JSON.stringify(body)
    }); 
    const updateBeginer = await response.json();
    console.log(updateBeginer);
  }
  catch(err){
    console.error('Peguei: ', err);
  }
}

/* DELETE*/
let deleteBeginer = async (id) =>{ //id será o paramêtro passado diretamenta na chamada da função
  try{
    const response = await fetch(`https://teste-api-lilit.herokuapp.com/beginers/delete/${id}`, { //Objeto poderia ser criado fora
      method: 'DELETE', //obrigatório
      headers:{
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1NTY2NjI0NiwiaWF0IjoxNjU1NjY2MjQ2fQ._72xg8XziqbmYJ6a4RLZjNucJnvpdWzGoBmvlDMEAko"
      }
    }); 
    const deleted = await response.json();
    console.log(deleted);
  }
  catch(err){
    console.error('Peguei: ', err);
  }
}