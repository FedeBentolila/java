// Eshop de insumos médicos de endoscopía digestiva

//variables
let ninyector= 0
let nclip= 0
let nansa= 0

let guardarlocal= (clave, valor) =>{localStorage.setItem(clave, valor) };

//Constructor

class Producto {
  constructor (id, nombre, precio, descripcion, imgurl){
    this.id= id;
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.descripcion = descripcion;
    this.imgurl = imgurl;
  }
}

//Productos en venta

const productos = [];
productos.push(new Producto("1","Inyector","100","Inyector descartable para endosocopía","./assests/img/aguja-de-escleroterapia.jpg"))
productos.push(new Producto("2","Ansa caliente", "200","Ansa caliente descartable para endosocopía", "./assests/img/ansacaliente.jpg"))
productos.push(new Producto("3","Clip endoscópico","300","Clip descartable para endosocopía","./assests/img/clip.jpg",))

//Array del Carrito

carrito = [];

//Creador de tarjetas
for (const iterador of productos) {
  let contenedor = document.createElement("div");
  contenedor.setAttribute("id", iterador.id)
  contenedor.classList.add("card", "col-xs-12", "col-md-4",)
  contenedor.innerHTML = 
  ` <img src="${iterador.imgurl}" class="card-img-top" >
  <div class="card-body ">
    <h5 class="card-title"> ${iterador.nombre}</h5>
    <p class="card-text">${iterador.descripcion}</p>
    <p class="card-text"> Precio ${iterador.precio} U$S</p>
    <button id="button${iterador.id}" class="btn btn-primary"> Añadir al carrito</button>
  </div> `;
  document.getElementById("productos").appendChild(contenedor)
}

//Estado del carrito y de las variables segun local storage
const almacenados= JSON.parse(localStorage.getItem("storagecarrito"))

class Producto2 {
  constructor(obj){
    this.id= obj.id;
    this.nombre=obj.nombre;
    this.precio = parseFloat(obj.precio);
    this.descripcion = obj.descripcion;
    this.imgurl = obj.imgurl;

  }
}

if (almacenados!=null) {
  for (const iterador2 of almacenados){
    carrito.push(new Producto2(iterador2)) 
  }
  console.log(carrito)
}

let contadorinyector= 0
for (const iterador3 of carrito){
  if (iterador3.nombre==="Inyector") {
    contadorinyector++;
  }
}

let contadoransa= 0
for (const iterador4 of carrito){
  if (iterador4.nombre==="Ansa caliente") {
    contadoransa++;
  }
}
let contadorclip= 0
for (const iterador5 of carrito){
  if (iterador5.nombre==="Clip endoscópico") {
    contadorclip++;
  }
}



ninyector= contadorinyector
nansa= contadoransa
nclip= contadorclip


//Creador de las tarjetas del carrito del local storage

  if (ninyector>0) {
    let contenedor = document.createElement("div");
    contenedor.setAttribute("id", "Inyector" )
    contenedor.classList.add("card", "mb-3", "cardcarrito")
    contenedor.innerHTML = 
    ` <div class="row g-0 justify-content-center align-items-center">
      <div class="col-md-4">
        <img src="${productos[0].imgurl}" class="img-fluid rounded-start" alt="...">
      </div>
    <div class="col-md-4">
    <div class="card-body">
      <h5 class="card-title">${productos[0].nombre}</h5>
      <p id ="precioiny" class="card-text">Precio ${productos[0].precio} dólares</p>
      <p id="cantidadiny" class="card-text">Cantidad 1</p>
      <i id ="trash1" class="fa-solid fa-trash-can"></i>
    </div>
    </div>
    </div> `;
    document.getElementById("carrito").appendChild(contenedor)
    let precioiny= document.getElementById("precioiny")
    precioiny.innerText=("Precio " + (productos[0].precio * ninyector) + " dólares")
    let cantidainyector= document.getElementById("cantidadiny")
    cantidainyector.innerText=("Cantidad " + ninyector)

    let= botontrash1= document.getElementById("trash1")
    botontrash1.onclick=()=>{
    if (ninyector==1) {
      carrito= carrito.filter(data=>data.id !='Inyector1');
      //Quito el local storage
      localStorage.clear()
      //Actualizo el local storage
      guardarlocal("storagecarrito", JSON.stringify(carrito));
  
      console.log(carrito)
      let element= document.getElementById("Inyector")
      element.remove();
      ninyector= ninyector-1
    }else{
      carrito= carrito.filter(data=>data.id !=('Inyector'+ninyector));
      //Quito el local storage
      localStorage.clear()
      //Actualizo el local storage
      guardarlocal("storagecarrito", JSON.stringify(carrito));
  
      console.log(carrito)
      ninyector= ninyector-1
      let precioiny= document.getElementById("precioiny")
      precioiny.innerText=("Precio " + (productos[0].precio * ninyector) + " dólares")
      let cantidainyector= document.getElementById("cantidadiny")
      cantidainyector.innerText=("Cantidad " + ninyector)
    }
  
  }

  }

  if (nansa>0) {
    let contenedor = document.createElement("div");
    contenedor.setAttribute("id", "Ansa" )
    contenedor.classList.add("card", "mb-3", "cardcarrito")
    contenedor.innerHTML = 
    ` <div class="row g-0 justify-content-center align-items-center">
      <div class="col-md-4">
        <img src="${productos[1].imgurl}" class="img-fluid rounded-start" alt="...">
      </div>
    <div class="col-md-4">
    <div class="card-body">
      <h5 class="card-title">${productos[1].nombre}</h5>
      <p id ="precioans" class="card-text">Precio ${productos[1].precio} dólares</p>
      <p id="cantidadansa" class="card-text">Cantidad 1</p>
      <i id ="trash2" class="fa-solid fa-trash-can"></i>
    </div>
    </div>
    </div> `;
    document.getElementById("carrito").appendChild(contenedor)
    precioansa= document.getElementById("precioans")
    precioansa.innerText=("Precio " + (productos[1].precio * nansa) + " dólares")
    cantidadansa= document.getElementById("cantidadansa")
    cantidadansa.innerText=("Cantidad " + nansa)

    let= botontrash2= document.getElementById("trash2")
    botontrash2.onclick=()=>{
    if (nansa==1) {
      carrito= carrito.filter(data=>data.id !='Ansa1');
      //Quito el local storage
      localStorage.clear()
      //Actualizo el local storage
      guardarlocal("storagecarrito", JSON.stringify(carrito));
  
      console.log(carrito)
      let element= document.getElementById("Ansa")
      element.remove();
      nansa= nansa-1
    }else{
      carrito= carrito.filter(data=>data.id !=('Ansa'+nansa));
      //Quito el local storage
      localStorage.clear()
      //Actualizo el local storage
      guardarlocal("storagecarrito", JSON.stringify(carrito));
  
      console.log(carrito)
      nansa= nansa-1
      precioansa= document.getElementById("precioans")
      precioansa.innerText=("Precio " + (productos[1].precio * nansa) + " dólares")
      cantidadansa= document.getElementById("cantidadansa")
      cantidadansa.innerText=("Cantidad " + nansa)
    }
  
  }

  }

  if (nclip>0) {
    let contenedor = document.createElement("div");
    contenedor.setAttribute("id", "clip" )
    contenedor.classList.add("card", "mb-3", "cardcarrito")
    contenedor.innerHTML = 
    ` <div class="row g-0 justify-content-center align-items-center">
      <div class="col-md-4">
        <img src="${productos[2].imgurl}" class="img-fluid rounded-start" alt="...">
      </div>
    <div class="col-md-4">
    <div class="card-body">
      <h5 class="card-title">${productos[2].nombre}</h5>
      <p id ="precioclip" class="card-text">Precio ${productos[2].precio} dólares</p>
      <p id="cantidadclip" class="card-text">Cantidad 1</p>
      <i id ="trash3" class="fa-solid fa-trash-can"></i>
    </div>
    </div>
    </div> `;
    document.getElementById("carrito").appendChild(contenedor)
    let precioclip= document.getElementById("precioclip")
    precioclip.innerText=("Precio " + (productos[2].precio * nclip) + " dólares")
    cantidadclip= document.getElementById("cantidadclip")
    cantidadclip.innerText=("Cantidad " + nclip)

    let= botontrash3= document.getElementById("trash3")
    botontrash3.onclick=()=>{
    if (nclip==1) {
      carrito= carrito.filter(data=>data.id !='clip1');
      //Quito el local storage
      localStorage.clear()
      //Actualizo el local storage
      guardarlocal("storagecarrito", JSON.stringify(carrito));
  
      console.log(carrito)
      let element= document.getElementById("clip")
      element.remove();
      nclip= nclip-1
    }else{
      carrito= carrito.filter(data=>data.id !=('clip'+nclip));
      //Quito el local storage
      localStorage.clear()
      //Actualizo el local storage
      guardarlocal("storagecarrito", JSON.stringify(carrito));
  
      console.log(carrito)
      nclip= nclip-1
      precioclip= document.getElementById("precioclip")
      precioclip.innerText=("Precio " + (productos[2].precio * nclip) + " dólares")
      cantidadclip= document.getElementById("cantidadclip")
      cantidadclip.innerText=("Cantidad " + nclip)
    }
  
  }

  }
















// Botones para agregar al carrito

let boton= document.getElementById("button1");
boton.onclick=()=>{
  if (ninyector==0) {
    carrito.push(new Producto("Inyector"+(ninyector + 1),"Inyector","100","Inyector descartable para endosocopía","./assests/img/aguja-de-escleroterapia.jpg"))
    //Agrego al local storage el producto
    guardarlocal("storagecarrito", JSON.stringify(carrito));
    
    console.log(carrito)
    let contenedor = document.createElement("div");
    contenedor.setAttribute("id", "Inyector" + (ninyector +1))
    contenedor.classList.add("card", "mb-3", "cardcarrito")
    contenedor.innerHTML = 
    ` <div class="row g-0 justify-content-center align-items-center">
      <div class="col-md-4">
        <img src="${productos[0].imgurl}" class="img-fluid rounded-start" alt="...">
      </div>
    <div class="col-md-4">
    <div class="card-body">
      <h5 class="card-title">${productos[0].nombre}</h5>
      <p id ="precioiny" class="card-text">Precio ${productos[0].precio} dólares</p>
      <p id="cantidadiny" class="card-text">Cantidad 1</p>
      <i id ="trash1" class="fa-solid fa-trash-can"></i>
    </div>
    </div>
    </div> `;
    document.getElementById("carrito").appendChild(contenedor)
    ninyector= ninyector + 1
  } else {
    carrito.push(new Producto("Inyector"+(ninyector + 1),"Inyector","100","Inyector descartable para endosocopía","./assests/img/aguja-de-escleroterapia.jpg"))
    //Agrego al local storage el producto
    guardarlocal("storagecarrito", JSON.stringify(carrito));


    console.log(carrito)
    let precioiny= document.getElementById("precioiny")
    precioiny.innerText=("Precio " + (productos[0].precio + (productos[0].precio * ninyector)) + " dólares")
    ninyector= ninyector + 1
    let cantidainyector= document.getElementById("cantidadiny")
    cantidainyector.innerText=("Cantidad " + ninyector)
    
  }

  //Boton para eliminar

  let= botontrash1= document.getElementById("trash1")
  botontrash1.onclick=()=>{
  if (ninyector==1) {
    carrito= carrito.filter(data=>data.id !='Inyector1');
    //Quito el local storage
    localStorage.clear()
    //Actualizo el local storage
    guardarlocal("storagecarrito", JSON.stringify(carrito));

    console.log(carrito)
    let element= document.getElementById("Inyector1")
    element.remove();
    ninyector= ninyector-1
  }else{
    carrito= carrito.filter(data=>data.id !=('Inyector'+ninyector));
    //Quito el local storage
    localStorage.clear()
    //Actualizo el local storage
    guardarlocal("storagecarrito", JSON.stringify(carrito));

    console.log(carrito)
    ninyector= ninyector-1
    let precioiny= document.getElementById("precioiny")
    precioiny.innerText=("Precio " + (productos[0].precio * ninyector) + " dólares")
    let cantidainyector= document.getElementById("cantidadiny")
    cantidainyector.innerText=("Cantidad " + ninyector)
  }

}
  
}

let boton2= document.getElementById("button2")
boton2.onclick=()=>{
  if (nansa==0) {
  carrito.push(new Producto("Ansa"+(nansa + 1),"Ansa caliente", "200","Ansa caliente descartable para endosocopía", "./assests/img/ansacaliente.jpg"));
  //Agrego al local storage el producto
  guardarlocal("storagecarrito", JSON.stringify(carrito));

  console.log(carrito)
  let contenedor = document.createElement("div");
  contenedor.setAttribute("id", "Ansa" + (nansa + 1))
  contenedor.classList.add("card", "mb-3", "cardcarrito")
  contenedor.innerHTML = 
  ` <div class="row g-0 justify-content-center align-items-center">
      <div class="col-md-4">
        <img src="${productos[1].imgurl}" class="img-fluid rounded-start" alt="...">
      </div>
    <div class="col-md-4">
    <div class="card-body">
      <h5 class="card-title">${productos[1].nombre}</h5>
      <p id="precioans" class="card-text">Precio ${productos[1].precio} dólares</p>
      <p id="cantidadansa" class="card-text">Cantidad 1</p>
      <i id ="trash2" class="fa-solid fa-trash-can"></i>
    </div>
    </div>
    </div> `;
  document.getElementById("carrito").appendChild(contenedor)
  nansa= nansa + 1
  } else {
    carrito.push(new Producto("Ansa"+(nansa + 1),"Ansa caliente", "200","Ansa caliente descartable para endosocopía", "./assests/img/ansacaliente.jpg"));
    //Agrego al local storage el producto
    guardarlocal("storagecarrito", JSON.stringify(carrito));

    console.log(carrito)
    let precioansa= document.getElementById("precioans")
    precioansa.innerText=("Precio " + (productos[1].precio + (productos[1].precio * nansa)) + " dólares")
    nansa= nansa + 1
    let cantidadansa= document.getElementById("cantidadansa")
    cantidadansa.innerText=("Cantidad " + nansa)
  }

  //Boton para eliminar

  let= botontrash2= document.getElementById("trash2")
  botontrash2.onclick=()=>{
  if (nansa==1) {
    carrito= carrito.filter(data=>data.id !='Ansa1');
    //Quito el local storage
    localStorage.clear()
    //Actualizo el local storage
    guardarlocal("storagecarrito", JSON.stringify(carrito));

    console.log(carrito)
    let element= document.getElementById("Ansa1")
    element.remove();
    nansa= nansa-1
  }else{
    carrito= carrito.filter(data=>data.id !=('Ansa'+nansa));
    //Quito el local storage
    localStorage.clear()
    //Actualizo el local storage
    guardarlocal("storagecarrito", JSON.stringify(carrito));

    console.log(carrito)
    nansa= nansa-1
    let precioiny= document.getElementById("precioans")
    precioiny.innerText=("Precio " + (productos[1].precio * nansa) + " dólares")
    let cantidainyector= document.getElementById("cantidadansa")
    cantidainyector.innerText=("Cantidad " + nansa)
  }


 } }

let boton3= document.getElementById("button3")
boton3.onclick=()=>{
  if (nclip==0) {
  carrito.push(new Producto("clip"+(nclip + 1),"Clip endoscópico","300","Clip descartable para endosocopía","./assests/img/clip.jpg"))
  //Agrego al local storage el producto
  guardarlocal("storagecarrito", JSON.stringify(carrito));

  console.log(carrito)
  let contenedor = document.createElement("div");
  contenedor.setAttribute("id", "clip" + (nclip + 1))
  contenedor.classList.add("card", "mb-3", "cardcarrito")
  contenedor.innerHTML = 
  ` <div class="row g-0 justify-content-center align-items-center">
      <div class="col-md-4">
        <img src="${productos[2].imgurl}" class="img-fluid rounded-start" alt="...">
      </div>
    <div class="col-md-4">
    <div class="card-body">
      <h5 class="card-title">${productos[2].nombre}</h5>
      <p id="precioclip" class="card-text">Precio ${productos[2].precio} dólares</p>
      <p id="cantidadclip" class="card-text">Cantidad 1</p>
      <i id ="trash3" class="fa-solid fa-trash-can"></i>
    </div>
    </div>
    </div> `;
  document.getElementById("carrito").appendChild(contenedor)
  nclip= nclip+1
  } else {
    carrito.push(new Producto("clip"+(nclip + 1),"Clip endoscópico","300","Clip descartable para endosocopía","./assests/img/clip.jpg"))
    //Agrego al local storage el producto
    guardarlocal("storagecarrito", JSON.stringify(carrito));

    console.log(carrito)
    let precioclip= document.getElementById("precioclip")
    precioclip.innerText=("Precio " + (productos[2].precio + (productos[2].precio * nclip)) + " dólares")
    nclip= nclip + 1
    let cantidadclip= document.getElementById("cantidadclip")
    cantidadclip.innerText=("Cantidad " + nclip)

  }

  //Boton para eliminar

  let= botontrash3= document.getElementById("trash3")
  botontrash3.onclick=()=>{
  if (nclip==1) {
    carrito= carrito.filter(data=>data.id !='clip1');
    
    //Quito el local storage
    localStorage.clear()
    //Actualizo el local storage
    guardarlocal("storagecarrito", JSON.stringify(carrito));

    console.log(carrito)
    let element= document.getElementById("clip1")
    element.remove();
    nclip= nclip-1
  }else{
    carrito= carrito.filter(data=>data.id !=('clip'+nclip));
    //Quito el local storage
    localStorage.clear()
    //Actualizo el local storage
    guardarlocal("storagecarrito", JSON.stringify(carrito));

    console.log(carrito)
    nclip= nclip-1
    let precioclip= document.getElementById("precioclip")
    precioclip.innerText=("Precio " + (productos[2].precio * nclip) + " dólares")
    let cantidadclip= document.getElementById("cantidadclip")
    cantidadclip.innerText=("Cantidad " + nclip)
  }


 }
}


//Validación del Checkout





//Eshop viejo


//Variables
/* let nombre;
let opcion;
let opcion2;
let insumo;
let total=0; */

//Class

/* class Producto {
  constructor (nombre, precio){
    this.nombre = nombre;
    this.precio = parseFloat(precio);
  }
}
 */

//Arrays

/* const productos = [];
productos.push(new Producto("inyector", "100"))
productos.push(new Producto("ansacaliente", "200"))
productos.push(new Producto("clipx", "300"))
 */

//Funciones

/* function saludo(){
    alert ("Bienvenido " + nombre + " al Eshop de insumos médicos para endoscopía digestiva")
};

function compra()  {
  
    if (opcion2 == 1) {
      alert(" elegiste Inyecctor para tu compra");
      carrito.push(new Producto("inyector", "100"));
    } else if (opcion2 == 2) {
      alert(" elegiste Ansa caliente para tu compra");
      carrito.push(new Producto("ansa caliente", "200"));
    } else if (opcion2 == 3) {
      alert(" elegiste clip hemostatico para tu compra");
      carrito.push(new Producto("clip hemostatico", "300"));
    }
   
    opcion2 = prompt(
      "Desea comprar otro artículo?: 1)Inyector, 2) ansa caliente 3) clip hemostatico 4) finalizar compra"
    );
  };
 */
/* function finalizarcompra() {
    alert("Ud a elegido los siguientes productos") */
   /*  for (let index=0; index<carrito.length; index ++){
      alert(carrito[index].nombre)
    }  
    Aca cambio esta ùltima funciòn por un For each para cumplir con el objetivo del desafìo*/

    /* carrito.forEach((num)=>{
      alert(num.nombre)
    } ) */


   /*  for (let index=0; index<carrito.length; index ++){
      total=carrito[index].precio + total;
      
    }  Aca para reemplazar uso un REDUCE */

    /* total= carrito.reduce((acc, el)=>acc + el.precio,0)

    alert("El total con IVA de los productos seleccionados es dólares " + (total= total * 1.21))

    
  }; 
 */

//Main

//Agreguè un formulario con un evento para escribir el nombre y asi comenzar con los alerts y prompts

/* const getValueInput = () =>{
  nombre = document.getElementById("user_name").value; 

  while (nombre == null ||  nombre == "") {
    alert ("debe ingresar su nombre para continuar")
    nombre = prompt("Buen dìa ingrese su nombre para continuar")
  }
  
  
  saludo ();
  opcion = prompt("A continuación ingrese una opción: 1: ver productos, 2: terminar");
  while (opcion != "1" && opcion != "2") {
    alert ("debe ingresar una opcion para continuar")
    opcion = prompt("Ingrese una opcion válida: 1: ver productos, 2 terminar")
      }
  
  if (opcion==1) {
    alert ("1) inyector endoscópico 100 dólares, 2) Ansa caliente 200 dólares, 3) clip hemostático 300 dólares, precios no incluyen IVA");
      opcion2= prompt("Que artículo desea comprar 1)Inyector, 2) ansa caliente 3) clip hemostatico 4) finalizar compra")
        while (opcion2 != "1" && opcion2 != "2" && opcion2 != "3" && opcion2 != "4") {
          alert ("debe ingresar una opcion para continuar")
            opcion2 = prompt("Ingrese una opcion válida: 1)Inyector, 2) ansa caliente 3) clip hemostatico 4) finalizar compra")
            }
  
        while (opcion2 !=4){
          compra();
          } 
  
          if (opcion2 == 4) {
              finalizarcompra();
              }
       
  } else if (opcion==2){
    alert ("Muchas gracias por su visita")
  }
  
  
}
 */









        



