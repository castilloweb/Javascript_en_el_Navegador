window.onload = function(){
	setTimeout(function(){
	for (let index = 0; index < 9; index++) {
        if(index % 2 === 1){
        juegaPc()
        	}else{
            turnoJugador()
            }            
          }
      }, 3000)
} 

let uno = document.getElementById(1)
let dos = document.getElementById(2)
let tres = document.getElementById(3)
let cuatro = document.getElementById(4)
let cinco = document.getElementById(5)
let seis = document.getElementById(6)
let siete = document.getElementById(7)
let ocho = document.getElementById(8)
let nueve = document.getElementById(9)

let estadoJ1= true
let estadoPc = false
let estadoJuego = true
      
let pintarCuadrado = function(jugador, numero){
	if (jugador = pc){
		numero.setAttribute('class', 'jugadorPc')
	} else {
		numero.setAttribute('class', 'jugador1')
	}
}
 let juegaPc = function(){
 	var numeroPc = Math.floor(Math.random() * (10 - 1)) + 1;
 	if ()
 }























 /*window.onload = function(){
     console.log('iniciamos la app')
     let estadoJ1= true
     let estadoPc = false
     let estadoJuego = true
      setTimeout(function(){
      		for (let index = 0; index < 9; index++) {
              console.log(index)
                  console.log(`dentro del timer ${index}`)
                  if(index % 2){
                      juegaPc()
                  }else{
                      pedirNumero()
                  }            
          }
      }, 3000)
     var contadorJuego=0
     do{
             if(estadoJ1){
                 pedirNumero()
                 estadoJ1=false
                 estadoPc= true
             }else if(estadoPc){
                 juegaPc()
                 estadoJ1=true
                 estadoPc= false
             }
             if(contadorJuego > 9){
                 estadoJuego= false
             }
             contadorJuego++
     }while (estadoJuego) 
 }


 let pedirNumero = function() {
     let numeros = [0,1,2,3,4,5,6,7,8]
     do {
         var numeroUsuario = parseInt(prompt('dime un numero 0-8', 0))
     } while (isNaN(numeroUsuario) || numeros.indexOf(numeroUsuario) === -1 );
     pintarCuadrado(numeroUsuario, 'jugador1')
     return numeroUsuario
 }

 let pintarCuadrado = function (valorIngresadoJugador, jugadorActual) {
     let tableroJuego = document.querySelectorAll('.cuadrados') 
     tableroJuego[valorIngresadoJugador].classList.add(jugadorActual)
 }


 let juegaPc = function () {
     var numeroPc = Math.round(Math.random()*8)
     console.log(`la Pc jugo el cuadrado ${numeroPc}`)
     pintarCuadrado(numeroPc, 'jugadorPc')
 }