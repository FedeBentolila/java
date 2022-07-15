//variables

let guardarlocal= (clave, valor) =>{localStorage.setItem(clave, valor) };

//Constructor de productos en venta

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

  
  //Estado del carrito  segun el local storage
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

  for (const iterador3 of carrito){
    const testData2 = !!document.getElementById(iterador3.nombre)  

    let cantidaddelproducto2= 0

    if (testData2==false) {


      let contenedor = document.createElement("div");
      contenedor.setAttribute("id",iterador3.nombre)
      contenedor.classList.add("card", "mb-3", "cardcarrito")
      contenedor.innerHTML = 
      ` <div class="row g-0 justify-content-center align-items-center">
      <div class="col-md-4">
        <img src="${iterador3.imgurl}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-4">
      <div class="card-body">
      <h5 class="card-title">${iterador3.nombre}</h5>
      <p id ="precio${iterador3.nombre}" class="card-text">Precio ${iterador3.precio} dólares</p>
      <p id="cantidad${iterador3.nombre}" class="card-text">Cantidad 1</p>
      <i id ="trash${iterador3.nombre}" class="fa-solid fa-trash-can"></i>
      </div>
      </div>
      </div> `;
      document.getElementById("carrito").appendChild(contenedor)

      

    }else{
      for (const obj of carrito) {
        if (obj.nombre == iterador3.nombre) cantidaddelproducto2++;
      }  
      console.log(cantidaddelproducto2)
      console.log(carrito)
     
      let precioproducto= document.getElementById("precio"+iterador3.nombre)
      precioproducto.innerText=("Precio " + (iterador3.precio * cantidaddelproducto2) + " dólares")
      
      let cantidaddelproductoenhtml= document.getElementById("cantidad"+iterador3.nombre)
      cantidaddelproductoenhtml.innerText=("Cantidad " + cantidaddelproducto2)

    }

    let= botontrash= document.getElementById("trash"+iterador3.nombre)
    botontrash.onclick=()=>{
      console.log(cantidaddelproducto2)
    if (cantidaddelproducto2==1) {
      carrito= carrito.filter(data=>data.id !=iterador3.nombre+cantidaddelproducto2);
      
      
      //Quito el local storage
      localStorage.clear()
      //Actualizo el local storage
      guardarlocal("storagecarrito", JSON.stringify(carrito));
  
      console.log(carrito)
      let element= document.getElementById(iterador3.nombre)
      element.remove();
      cantidaddelproducto2=0
    }else{
      carrito= carrito.filter(data=>data.id !=iterador3.nombre+cantidaddelproducto2);
      
      cantidaddelproducto2 = cantidaddelproducto2-1
      //Quito el local storage
      localStorage.clear()
      //Actualizo el local storage
      guardarlocal("storagecarrito", JSON.stringify(carrito));
  
      console.log(carrito)
      let precioproducto= document.getElementById("precio"+iterador3.nombre)
      precioproducto.innerText=("Precio " + (iterador3.precio * cantidaddelproducto2) + " dólares")
      
      let cantidaddelproductoenhtml= document.getElementById("cantidad"+iterador3.nombre)
      cantidaddelproductoenhtml.innerText=("Cantidad " + cantidaddelproducto2)
    }
  
  }

  }

  


  }


  //////////////////////////////////////////


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
        if (obj.nombre == iterador.nombre) cantidaddelproducto++;
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
      element.remove();
      cantidaddelproducto=0
    }else{
      carrito= carrito.filter(data=>data.id !=iterador.nombre+cantidaddelproducto);
      
      cantidaddelproducto = cantidaddelproducto-1
      //Quito el local storage
      localStorage.clear()
      //Actualizo el local storage
      guardarlocal("storagecarrito", JSON.stringify(carrito));
  
      console.log(carrito)
      let precioproducto= document.getElementById("precio"+iterador.nombre)
      precioproducto.innerText=("Precio " + (iterador.precio * cantidaddelproducto) + " dólares")
      
      let cantidaddelproductoenhtml= document.getElementById("cantidad"+iterador.nombre)
      cantidaddelproductoenhtml.innerText=("Cantidad " + cantidaddelproducto)
    }
  
  }



  }

  }


}
  
  
  