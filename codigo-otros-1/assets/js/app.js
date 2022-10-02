const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//Se definierón las variables sin la sintaxis querySelector y se denominarón todas como ID.
let n = document.getElementById('name');
let b = document.getElementById('blog');
let l = document.getElementById('location');

//Se corrigió la sintaxis de la función displayUser
const displayUser = async(username) => {
  //Se agregó estructura try-catch y se eliminó linea "cargando..." 
  //Ya que solo era necesaria para enviar la promesa y aquí el objetivo era obtenerla.
  try{
  const response = await fetch(`${usersEndpoint}/${username}`)
  //Se añadió linea para esperar la promesa y se hizó coincidir con las variables.
  const data = await response.json();
  //Seccion console.log de pruebas para obtener los valores requeridos.
  console.log(data);
  console.log(data.name);
  console.log(data.blog);
  console.log(data.location);
  //Se corrigió sintaxis para DOM 
  n.textContent = `Name: ${data.name}`;
  b.textContent = `Blog: ${data.blog}`;
  l.textContent = `Location: ${data.location}`;

  }catch(err){
    console.log(err);
  }//catch
}// función displayUser

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);


/* Código Anterior 

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError); */