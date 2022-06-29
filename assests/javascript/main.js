// Eshop de insumos médicos de endoscopía digestiva

//Variables
let nombre;
let opcion;
let opcion2;
let insumo;
let total=0;


//Class

class Producto {
  constructor (nombre, precio){
    this.nombre = nombre;
    this.precio = parseFloat(precio);
  }
}


//Arrays

const productos = [];
productos.push(new Producto("inyector", "100"))
productos.push(new Producto("ansacaliente", "200"))
productos.push(new Producto("clipx", "300"))

const carrito = [];


//Funciones

function saludo(){
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

function finalizarcompra() {
    alert("Ud a elegido los siguientes productos")
   /*  for (let index=0; index<carrito.length; index ++){
      alert(carrito[index].nombre)
    }  
    Aca cambio esta ùltima funciòn por un For each para cumplir con el objetivo del desafìo*/

    carrito.forEach((num)=>{
      alert(num.nombre)
    } )


   /*  for (let index=0; index<carrito.length; index ++){
      total=carrito[index].precio + total;
      
    }  Aca para reemplazar uso un REDUCE */

    total= carrito.reduce((acc, el)=>acc + el.precio,0)

    alert("El total con IVA de los productos seleccionados es dólares " + (total= total * 1.21))

    
  }; 


//Main
nombre = prompt("Buen dìa ingrese su nombre para continuar");
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







        



