//Porcentaje Facturacion

let facturacionMayo = parseInt(prompt ('ingrese monto total facturacion de mayo'));
let facturacionJunio = parseInt(prompt ('ingrese monto total facturacion mes de junio'));
let facturacionJulio = parseInt(prompt ('ingrese monto total facturacion mes de julio'));


let promedio = (facturacionMayo + facturacionJunio + facturacionJulio) / 3;
alert ('el promedio de las facturaciones es :'  + promedio);