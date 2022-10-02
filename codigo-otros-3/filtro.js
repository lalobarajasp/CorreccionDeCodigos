//--------Arreglo--------------------------------------------
//Se declaro el arreglo productos con let para poder realizar cambios.
let productos = [
    {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
    {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
    {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
    {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
    {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
  ]//productos
  
  const li = document.getElementsByName("lista-de-productos")
  console.log(li);
  const $i = document.querySelector(".input");
  console.log($i);
  
  //Ciclo para agregar productos del arreglos al divisor HTML en forma de lista.
  for (let i = 0; i < productos.length; i++) {
    let d = document.createElement("div")
    d.classList.add("producto")
  
    let ti = document.createElement("p")
    //Se corrigió la designación titulo a nombre.
    ti.classList.add("nombre")
    ti.textContent = productos[i].nombre
    
    let imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    //Se añadió indice de la lista, para identificarse del HTML.
    li[0].appendChild(d)
  }//for 
  

/* Se reestructuró la función displayProductos.
Se reestructuró la función botonDeFiltro y se añadió indices.


  displayProductos(productos)
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  } */

  //-----------------------------------------------------------
  let botonDeFiltro = document.querySelector("button");
  
  botonDeFiltro.onclick = function() {
    while (li.firstChild) {
      li[i].removeChild(li[i].firstChild);
    }
  
    const texto = $i.value;
    console.log(texto);
    let productosFiltrados = filtrado(productos, texto );
  
    for (let i = 0; i < productosFiltrados.length; i++) {
      let d = document.createElement("div")
      d.classList.add("producto")
    
      let ti = document.createElement("p")
      ti.classList.add("titulo")
      ti.textContent = productosFiltrados[i].nombre
      
      let imagen = document.createElement("img");
      imagen.setAttribute('src', productosFiltrados[i].img);
    
      d.appendChild(ti)
      d.appendChild(imagen)

      //Se añadió indice de la lista.
      li[0].appendChild(d)
    }//for
  
    
  }//botonDeFiltro

  //------------------------------------------------------------
  let filtrado = (productos = [], texto) => {
    return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
  }//filtrado
  
  