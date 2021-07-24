//objetivos de facturacion

let facturacionMayo = parseInt(prompt('ingrese facturacion mes mayo'));

if (facturacionMayo == 90000) {
    alert('la facturacion cumplio el objetivo mensual');
}

else if (facturacionMayo < 90000) {
    alert('la facturacion no cumplio el objetivo mensual');
}

else if (facturacionMayo > 90000) {
    alert('la facturacion supero el objetivo mensual');
}

