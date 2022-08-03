const { products } = require("./utils/products");

/************************************************************************************
PUNTO 1
utiliza addingIdToProduct para agregarle un id único a cada producto empezando en 1
*************************************************************************************/
// Tu código acá
let addingIdToProduct = () => {
	return products.map((e, id) => {
		return { ...e, id: id + 1 }
	})
};

/*****************************************************************************
 * PUNTO 2
 * utiliza returningTheNames para retornar el nombre de cada uno de los productos
 ******************************************************************************/
// Tu código acá
let returningTheNames = () => {

	return products.map(e => e.name)
};

/********************************************************************************
PUNTO 3
utiliza searchID para retornar el producto cuyo id corresponda al parametro pasado.
Si ejecuto searchID(3) debería devolver el objeto entero, cuyo id sea 3
************************************************************************************/
// Tu código acá
let searchID = (idParams) => {

	let productId = addingIdToProduct()
	let productFind = productId.find(e => e.id === idParams)

	if (!productFind) {
		return "no hubo coincidencias"
	} else {
		return productFind;
	}
};

/*****************************************************************************
PUNTO 4
utiliza matchingColors para retornar los productos que hagan match con 
el color pasado por parámetro
******************************************************************************/
// Tu código acá
let matchingColors = (colorParam) => {
	let colorArray = [];
	let productId = addingIdToProduct()
	productId.forEach(e => {
		if (e.colors.includes(colorParam)) {
			colorArray.push(e)
		}
	})

	return colorArray;
};

/*****************************************************************************
PUNTO 5
utiliza colorsLength para retornar los productos que no tengan color
******************************************************************************/
// Tu código acá
let colorsLength = () => {
	let productId = addingIdToProduct()
	return productId.filter(e => e.colors.length === 0)
};

/*****************************************************************************
PUNTO 6
utiliza addProduct para agregar un nuevo producto que contenga las mismas
propiedades (name,price,quantity,colors).
Retornar los productos donde se incluya el producto agregado
******************************************************************************/
// Tu código acá
let addProduct = ({ name, price, quantity, colors }) => {
	if (name && price && quantity && colors) {
		let newObj = {}
		products.push(newObj = {
			name: name,
			price: price,
			quantity: quantity,
			colors: colors,
		})
		return newObj;
	}
	return products;
};


/*****************************************************************************
PUNTO 7
utiliza deleteProduct para Eliminar del array de productos a aquellos sin stock (con quantity 0)
******************************************************************************/
// Tu código acá
let deleteProduct = () => {
	return products.filter(e => e.quantity !== 0)

};
/*****************************************************************************
PUNTO 8
utiliza existingProducts para sumar el numero total de stock entre todos los productos.
Debe retornar dicho numero
******************************************************************************/
// Tu código acá
let existingProducts = (arr) => {
	return arr.reduce((val, e) => val + e.quantity, 0)
};

/*****************************************************************************
PUNTO 9
utiliza showHigherPrice para retornar los productos cuyo importe sea mayor al pasado por parametro
Esta función recibe el array de productos y el importe (precio) a buscar:
showHigherPrice(products,500) 
debería devolver 2 objetos, ya que solo 2 productos tienen un valor mayor a 500
******************************************************************************/
// Tu código acá
let showHigherPrice = (arr, price) => {
	return arr.filter(e => e.price > price)
};

module.exports = {
	addingIdToProduct,
	existingProducts,
	deleteProduct,
	addProduct,
	colorsLength,
	matchingColors,
	searchID,
	returningTheNames,
	showHigherPrice,
};
