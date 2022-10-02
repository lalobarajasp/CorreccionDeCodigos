//Se mando llamar la variable formulario como clase y no como id.
var formulario = document.querySelector(".formulario")

//----------------------------------------------------------
  //Se modifico la sintaxis del evento a submit y se redefinió la función.
  formulario.addEventListener("submit", function(e){
  e.preventDefault();
  
  var n = formulario.elements[0]
  var e = formulario.elements[1]
  var na = formulario.elements[2]

  var nombre = n.value
  var edad = e.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  console.log(nombre)
  console.log(edad)
  console.log(nacionalidad)
  
  //Se modificó la condición a igual a cero, en vez de extrictamente igual.
  if (nombre.length == 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }
  
if ((nombre.length > 0) && (edad > 18 && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
  
});//formulario
//----------------------------------------------------------

/* Se eliminó código de botón en el cuerpo del documento.
Para que solo aparezca en cada invitado y no sea repetitivo.

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.append(corteLinea)
document.body.append(botonBorrar); */

//-----------------------------------------------------------
function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")
var elementoLista = document.createElement("div")
//Se agregó id para el elemento lista.
elementoLista.id = "elemento-lista"
//Se corrigió el método added a add.
elementoLista.classList.add("elemento-lista")
//SE CORRIGIÓ EN TODO EL DOCUMENTO JAVASCRIPT el método appendChild por append.
lista.append(elementoLista)

/* El siguiente código hacia que el nombre del invitado volviera a aparecer en su recuadro. 
Se elimino para que no fuera repetitivo. 

var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.append(spanNombre)
elementoLista.append(inputNombre)
elementoLista.append(espacio) */

//Esta función se encarga de crear el recuadro del invitado con la distribución de sus datos.
function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.append(spanNombre)
elementoLista.append(inputNombre)
elementoLista.append(espacio)
}//function crearElemento

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.append(corteLinea)
elementoLista.append(botonBorrar);

//Esta función se encarga de eliminar al invitado deseado.
botonBorrar.onclick = function() {
//this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
};//botonBorrar


};//function agregarInvitado
//------------------------------------------------------------

