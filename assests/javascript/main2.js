//variables

let guardarlocal= (clave, valor) =>{localStorage.setItem(clave, valor) };
const testData3 = !!document.getElementById("comprar")
const botoncomprar= document.getElementById("comprar")
let= botonfinalizarcompra= document.getElementById("finalizarcompra")
const testData4 = !!document.getElementById("finalizarcompra")

//funciones
function displaybotoncomprar(){
  if (carrito.length==0) {
    botoncomprar.classList.add('d-none')
    
  } else {
    botoncomprar.classList.remove('d-none')
  }
}

function displayfinalizarcomprar(){
  if (carrito.length==0) {
    botonfinalizarcompra.classList.add('d-none')
    
  } else {
    botonfinalizarcompra.classList.remove('d-none')
  }
}



//Constructores

 class Producto {
    constructor (id, nombre, precio, descripcion, imgurl){
      this.id= id;
      this.nombre = nombre;
      this.precio = parseFloat(precio);
      this.descripcion = descripcion;
      this.imgurl = imgurl;
    }
  } 

  class Producto2 {
    constructor(obj){
      this.id= obj.id;
      this.nombre=obj.nombre;
      this.precio = parseFloat(obj.precio);
      this.descripcion = obj.descripcion;
      this.imgurl = obj.imgurl;
  
    }
    }
  
  //Productos en venta
  
  const productos = [];

  //Fetch de JSON

  fetch('data.json')
  .then(response => {
    return response.json();
  })
  .then(data => {
    for (const iteradorx of data){
      productos.push(new Producto2(iteradorx))
    }

    console.log(productos)


  //Chequeo si esta el DIV productos para que en checkoout.html no intente crear las tarjetas de productos y tire error
  
  
  const testData2 = !!document.getElementById("productos")

  if (testData2==true) {
    
  //Creador de tarjetas de acuerdo al array de productos
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

    let boton= document.getElementById("button"+iterador.id);
    boton.onclick=()=>{
      let cantidaddelproducto= 1
      

    const testData = !!document.getElementById(iterador.nombre)  

    if (testData==false) {
      carrito.push(new Producto(iterador.nombre+cantidaddelproducto,iterador.nombre,iterador.precio,iterador.descripcion,iterador.imgurl))
      
      console.log(cantidaddelproducto)
      
      console.log(carrito)
      //Agrego al local storage el producto
       guardarlocal("storagecarrito", JSON.stringify(carrito));

      let contenedor = document.createElement("div");
      contenedor.setAttribute("id",iterador.nombre)
      contenedor.classList.add("card", "mb-3", "cardcarrito")
      contenedor.innerHTML = 
      ` <div class="row g-0 justify-content-center align-items-center">
      <div class="col-md-4">
        <img src="${iterador.imgurl}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-4">
      <div class="card-body">
      <h5 class="card-title">${iterador.nombre}</h5>
      <p id ="precio${iterador.nombre}" class="card-text">Precio ${iterador.precio} dólares</p>
      <p id="cantidad${iterador.nombre}" class="card-text">Cantidad 1</p>
      <i id ="trash${iterador.nombre}" class="fa-solid fa-trash-can"></i>
      </div>
      </div>
      </div> `;
      document.getElementById("carrito").appendChild(contenedor)
      
    }else{
      for (const obj of carrito) {

        //Operador AND
        
        obj.nombre==iterador.nombre && cantidaddelproducto++

        //obj.nombre==iterador.nombre? cantidaddelproducto++ : cantidaddelproducto

        //if (obj.nombre == iterador.nombre) cantidaddelproducto++;

      }  
      console.log(cantidaddelproducto)
      carrito.push(new Producto(iterador.nombre+cantidaddelproducto,iterador.nombre,iterador.precio,iterador.descripcion,iterador.imgurl))
      
      
      console.log(carrito)
      //Agrego al local storage el producto
      guardarlocal("storagecarrito", JSON.stringify(carrito));
      let precioproducto= document.getElementById("precio"+iterador.nombre)
      precioproducto.innerText=("Precio " + (iterador.precio * cantidaddelproducto) + " dólares")
      
      let cantidaddelproductoenhtml= document.getElementById("cantidad"+iterador.nombre)
      cantidaddelproductoenhtml.innerText=("Cantidad " + cantidaddelproducto)


    }
    
    let= botontrash= document.getElementById("trash"+iterador.nombre)
    botontrash.onclick=()=>{
      console.log(cantidaddelproducto)
    if (cantidaddelproducto==1) {
      carrito= carrito.filter(data=>data.id !=iterador.nombre+cantidaddelproducto);
      
      
      //Quito el local storage
      localStorage.clear()
      //Actualizo el local storage
      guardarlocal("storagecarrito", JSON.stringify(carrito));
  
      console.log(carrito)
      let element= document.getElementById(iterador.nombre)
      cantidaddelproducto=0
      element.remove();

      if (testData3==true) {
        displaybotoncomprar()
        
      }

      if(testData4==true){
        displayfinalizarcomprar ()
    
      }
    }else{
      carrito= carrito.filter(data=>data.id !=iterador.nombre+cantidaddelproducto);
      
      cantidaddelproducto--
      //Quito el local storage
      localStorage.clear()
      //Actualizo el local storage
      guardarlocal("storagecarrito", JSON.stringify(carrito));
  
      console.log(carrito)
      let precioproducto= document.getElementById("precio"+iterador.nombre)
      precioproducto.innerText=("Precio " + (iterador.precio * cantidaddelproducto) + " dólares")
      
      let cantidaddelproductoenhtml= document.getElementById("cantidad"+iterador.nombre)
      cantidaddelproductoenhtml.innerText=("Cantidad " + cantidaddelproducto)

      if (testData3==true) {
        displaybotoncomprar()
        
      }

      if(testData4==true){
        displayfinalizarcomprar ()
      
      
      }
    }
  
  }

  if (testData3==true) {
    displaybotoncomprar()
    
  }

  if(testData4==true){
    displayfinalizarcomprar ()
  
  
  }

  }

  }


}



if (testData3==true) {
  displaybotoncomprar()
  
}

if(testData4==true){
  displayfinalizarcomprar ()


}
    
  });

  //Array del Carrito
  
  carrito = [];

  
  //Estado del carrito  segun el local storage
  const almacenados= JSON.parse(localStorage.getItem("storagecarrito"))


  if (almacenados!=null) {

    if (testData3==true) {
      displaybotoncomprar()
      
    }

  for (const iterador2 of almacenados){
    carrito.push(new Producto2(iterador2)) 
  }

  for (const iterador3 of carrito){


    //Desestructuro el objeto iterador 3 del carrito para no tener que estar escribiendo ejemplo iterador3.nombre
    
    const{id, nombre, precio, descripcion, imgurl}= iterador3

    const testData2 = !!document.getElementById(nombre)  

    let cantidaddelproducto2= 0

    if (testData2==false) {
     
     
      cantidaddelproducto2= 1

      let contenedor = document.createElement("div");
      contenedor.setAttribute("id",nombre)
      contenedor.classList.add("card", "mb-3", "cardcarrito")
      contenedor.innerHTML = 
      ` <div class="row g-0 justify-content-center align-items-center">
      <div class="col-md-4">
        <img src="${imgurl}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-4">
      <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p id ="precio${nombre}" class="card-text">Precio ${precio} dólares</p>
      <p id="cantidad${nombre}" class="card-text">Cantidad 1</p>
      <i id ="trash${nombre}" class="fa-solid fa-trash-can"></i>
      </div>
      </div>
      </div> `;
      document.getElementById("carrito").appendChild(contenedor)

      

    }else{
      for (const obj of carrito) {
        
        //Operador ternario
        
        obj.nombre==nombre? cantidaddelproducto2++ : cantidaddelproducto2
        //if (obj.nombre == iterador3.nombre) cantidaddelproducto2++;
      }  
      console.log(cantidaddelproducto2)
      console.log(carrito)
     
      let precioproducto= document.getElementById("precio"+nombre)
      precioproducto.innerText=("Precio " + (precio * cantidaddelproducto2) + " dólares")
      
      let cantidaddelproductoenhtml= document.getElementById("cantidad"+nombre)
      cantidaddelproductoenhtml.innerText=("Cantidad " + cantidaddelproducto2)

    }

    let= botontrash= document.getElementById("trash"+nombre)
    botontrash.onclick=()=>{
      console.log(cantidaddelproducto2)
    if (cantidaddelproducto2==1) {
      carrito= carrito.filter(data=>data.id !=nombre+cantidaddelproducto2);
      
      
      //Quito el local storage
      localStorage.clear()
      //Actualizo el local storage
      guardarlocal("storagecarrito", JSON.stringify(carrito));
  
      console.log(carrito)
      let element= document.getElementById(nombre)
      element.remove();
      cantidaddelproducto2=0

      if (testData3==true) {
        displaybotoncomprar()
        
      }

      if(testData4==true){
        displayfinalizarcomprar ()
      
      
      }


    }else{
      carrito= carrito.filter(data=>data.id !=nombre+cantidaddelproducto2);
      
      cantidaddelproducto2--
      //Quito el local storage
      localStorage.clear()
      //Actualizo el local storage
      guardarlocal("storagecarrito", JSON.stringify(carrito));
  
      console.log(carrito)
      let precioproducto= document.getElementById("precio"+nombre)
      precioproducto.innerText=("Precio " + (precio * cantidaddelproducto2) + " dólares")
      
      let cantidaddelproductoenhtml= document.getElementById("cantidad"+nombre)
      cantidaddelproductoenhtml.innerText=("Cantidad " + cantidaddelproducto2)

      if (testData3==true) {
        displaybotoncomprar()
        
      }

      if(testData4==true){
        displayfinalizarcomprar ()
      
      
      }
    }
  
  }

  }

  
  }


if (testData4==true) {
    
    botonfinalizarcompra.onclick=()=>{

      //Variables para el formulario

      let fnombre= document.getElementById("fnombre").value
      let fapellido= document.getElementById("fapellido").value
      let ftelefono= document.getElementById("ftelefono").value
      let femail= document.getElementById("femail").value
      let fciudad= document.getElementById("fciudad").value
      let fprovincia= document.getElementById("fprovincia").value
      let fcodigopostal= document.getElementById("fcodigopostal").value
      let ftarjeta= document.getElementById("ftarjeta").value
      let fnumerotarjeta= document.getElementById("fnumerotarjeta").value
      let fvencimiento= document.getElementById("fvencimiento").value
      let fccv= document.getElementById("fccv").value
      arraydeprecios = []

      let fnombrecolor= document.getElementById("fnombre")
      let fapellidocolor= document.getElementById("fapellido")
      let ftelefonocolor= document.getElementById("ftelefono")
      let femailcolor= document.getElementById("femail")
      let fciudadcolor= document.getElementById("fciudad")
      let fprovinciacolor= document.getElementById("fprovincia")
      let fcodigopostalcolor= document.getElementById("fcodigopostal")
      let ftarjetacolor= document.getElementById("ftarjeta")
      let fnumerotarjetacolor= document.getElementById("fnumerotarjeta")
      let fvencimientocolor= document.getElementById("fvencimiento")
      let fccvcolor= document.getElementById("fccv")

      
      for (const i of carrito) {
        arraydeprecios.push(i.precio)
      }

      //rest parameters para calcular el total de la compra

      function fun(...input){
        let sum = 0;
        for(let i of input){
            sum+=i;
        }
        return sum;
    }

    //Validación del formulario y alert final de compra 

    if (fnombre=="") {

      swal("Atención", "Existen campos incompletos", "error");
      fnombrecolor.style.backgroundColor="red"
        
      
    }else{
      fnombrecolor.style.backgroundColor="white"
    }
    
    if (fapellido=="") {

      swal("Atención", "Existen campos incompletos", "error");
      fapellidocolor.style.backgroundColor="red"
    
    } else{
      fapellidocolor.style.backgroundColor="white"
    }

    if (ftelefono=="") {

      swal("Atención", "Existen campos incompletos", "error");
      ftelefonocolor.style.backgroundColor="red"
    
    } else{
      ftelefonocolor.style.backgroundColor="white"
    }


    if (femail=="") {

      swal("Atención", "Existen campos incompletos", "error");
      femailcolor.style.backgroundColor="red"
    
    } else{
      femailcolor.style.backgroundColor="white"
    }


    if (fciudad=="") {

      swal("Atención", "Existen campos incompletos", "error");
      fciudadcolor.style.backgroundColor="red"
    
    } else{
      fciudadcolor.style.backgroundColor="white"
    }

    if (fprovincia=="") {

      swal("Atención", "Existen campos incompletos", "error");
      fprovinciacolor.style.backgroundColor="red"
    
    } else{
      fprovinciacolor.style.backgroundColor="white"
    }


    if (fcodigopostal=="") {

      swal("Atención", "Existen campos incompletos", "error");
      fcodigopostalcolor.style.backgroundColor="red"
    
    } else{
      fcodigopostalcolor.style.backgroundColor="white"
    }

    if (ftarjeta=="") {

      swal("Atención", "Existen campos incompletos", "error");
      ftarjetacolor.style.backgroundColor="red"
    
    } else{
      ftarjetacolor.style.backgroundColor="white"
    }


    if (fnumerotarjeta=="") {

      swal("Atención", "Existen campos incompletos", "error");
      fnumerotarjetacolor.style.backgroundColor="red"
    
    } else{
      fnumerotarjetacolor.style.backgroundColor="white"
    }

    if (fvencimiento=="") {

      swal("Atención", "Existen campos incompletos", "error");
      fvencimientocolor.style.backgroundColor="red"
    
    } else{
      fvencimientocolor.style.backgroundColor="white"
    }



    if (fccv=="") {

      swal("Atención", "Existen campos incompletos", "error");
      fccvcolor.style.backgroundColor="red"
    
    } else{
      fccvcolor.style.backgroundColor="white"
    }
      
  
    if  (fnombre!="" && fapellido!="" && ftelefono !="" && femail!="" && fciudad!="" && fprovincia!="" && fcodigopostal!="" && ftarjeta!="" && fnumerotarjeta!="" && fvencimiento!="" && fccv!="" ) {

  
      swal({
        title: "Compra realizada con éxito",
        text: "Muchas gracias "+ fnombre +" por su compra el total es: "   + fun(...arraydeprecios)+ " dólares",
        icon: "success",
        button: "Aceptar",
      });

      //Quito el local storage
      localStorage.clear()

      let element= document.getElementById("carrito")
      element.remove();
      cantidaddelproducto2=0

      botonfinalizarcompra.classList.add('d-none')



    } 
    
     
    }
  
  }


 
