/*******************************************************************************

Realizar una función llamada “calculatePrice” que reciba dos parámetros,
el primero siendo el nombre de un producto (ej: "Laptop""), y el segundo 
el precio de ese producto (sin el signo $). Dicha función deberá retornar 
un string con el nombre del producto, el costo del envío del mismo, y el precio final.

Ejemplo:
calculatePrice("play", 30000)

output : "el costo de envio de una play es de 500 pesos y el precio total seria de 30500 pesos"
*******************************************************************************/
//Tu código acá
let calculatePrice = (nombreProducto, precioProducto) => {

	let mensajeFinal;
	let costoEnvio;

	if (precioProducto <= 0) {
		mensajeFinal = 'Error'
	} else if (!nombreProducto || !precioProducto)  {
		mensajeFinal = "ingresar ambos parámetros"
	} else if (typeof nombreProducto !== 'string') {
		mensajeFinal = "ingresar un nombre válido"
	} else if (precioProducto >= 1 && precioProducto <= 2000) {
		costoEnvio = 300;
		mensajeFinal = "el costo de envio de" + nombreProducto + "es de " + costoEnvio + " pesos y el precio total seria de " + (precioProducto + costoEnvio) + " pesos"
	} else if (precioProducto >= 2001 && precioProducto <= 4000) {
		costoEnvio = 500;
		mensajeFinal = "el costo de envio de" + nombreProducto + "es de " + costoEnvio + " pesos y el precio total seria de " + (precioProducto + costoEnvio) + " pesos"
	} else if (precioProducto > 4000) {
		costoEnvio = 700;
		mensajeFinal = "el costo de envio de" + nombreProducto + "es de " + costoEnvio + " pesos y el precio total seria de " + (precioProducto + costoEnvio) + " pesos"
	}

	return mensajeFinal
};




module.exports = {
	calculatePrice,
};
