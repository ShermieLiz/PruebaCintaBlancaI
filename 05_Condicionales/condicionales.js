// alert(‘Descarga ya!’)
// if(condicion){
//     bloque de codigo si se cumple
// }else{
//     bloque de codigo si no se cumple
// }
// let num1 = 10
// let num2 = '500'
//typeof es para saber que tipo de valor tiene la varible
// console.log(typeof(num2));
//-----operadores logicos------
// =  --> Da un valor
// == --> compara valores
// === --> compara identicos
//100
// if(num1 === '10' ){
    // console.log('Es verdad');
// }else{
    // console.log('No es verdad');
// }
//modulo 
// let edad = prompt ("ingresa tu edad");{

// }

// if (edad >= 18 && edad <= 70){
    // console.log
// }

let player1 = prompt ("Player 1");
let player2 = prompt ("Player 2");

if (player1 === player2){
    console.log("empate");
}else if (player1==="piedra" && player2 === "tijera" || player1 === "papel" && player2 === "piedra" || 
        player1==="tejera" && player2 === "papel"){
            console.log ("Gana player1");
}else if (player2=== "piedra" && player1 === "tijera" || player2 === "papel" && player1 === "piedra" ||
        player2==="tijera" && player1 === "papel"){
            console.log ("Gana player2")

}else{
    console.error ("error");
}







