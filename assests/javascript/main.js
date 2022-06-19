// Eshop de insumos médicos de endoscopía digestiva

//Variables
let nombre;
let opcion;
let insumo;
let inyector = 100
let ansacaliente = 200
let clipx =  300


//Funciones
function saludo(){
    alert ("Bienvenido " + nombre + " al Eshop de insumos médicos para endoscopía digestiva")
};

function compra()  {
    insumo = prompt( "elija uno de nuestros insumos \n 1: Inyector  \n 2: Ansa caliente \n 3: clip hemostatico"
    );
  
    if (insumo == 1) {
      alert(" elegiste Inyecctor para tu compra");
    } else if (insumo == 2) {
      alert(" elegiste Ansa caliente para tu compra");
    } else if (insumo == 3) {
      alert(" elegiste clip hemostatico para tu compra");
    }
   
    opcion = prompt(
      "vuelva a ingresar una opcion \n 2: mostrar precios finales  \n 3: terminar"
    );
  };

function finalizarcompra() {
    if (insumo == 1) {
      alert(
        "usted eligio inyector endoscopico por un monto  final de " +
          inyector * 1.21
      );
    } else if (insumo == 2) {
      alert(
        "usted eligio ansa caliente  por un monto  final de " +
          ansacaliente * 1.21
      );
    } else if (insumo == 3) {
      alert(
        "usted eligio clip hemostatico por un monto  final de " +
          clipx * 1.21
      );
    } 
  }; 


//Main
nombre = prompt("Buen dìa ingrese su nombre para continuar");
while (nombre == null ||  nombre == "") {
  alert ("debe ingresar su nombre para continuar")
  nombre = prompt("Buen dìa ingrese su nombre para continuar")
}


saludo ();
opcion = prompt("A continuación ingrese una opción: 1: comprar producto, 2: finalizar compra, 3: terminar");
while (opcion == null ||  opcion == "") {
  alert ("debe ingresar una opcion para continuar")
  opcion = prompt("Ingrese una opcion válida: 1: comprar producto, 2: finalizar compra, 3: terminar")
    }

while (opcion != 3) {
            if (opcion == 1) {
            compra();
            } 
            
            if (opcion == 2) {
            finalizarcompra();
            opcion = 3;
            }
    }

alert ("Muchas gracias")
        



