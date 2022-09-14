import { useState } from "react";

const React = require("react");

/**
 *********************Punto 1************************
 Crear 3 inputs (name,email y phone) con sus labels correspondientes
 
 *********************Punto 2*************************
 Crear un select cuyo label sea 'Countries'
 las opciones deben ser (Argentina, Chile, Colombia, Venezuela, México, Bolivia,Uruguay) 
 
 *********************Punto 3************************
 Crear dos radio button (envio y retiro) con sus labels correspondientes
 
 *********************Punto 4************************
 Crear al menos 2 checkbox (Reloj, bicicleta y Notebook) con sus labels correspondientes
 */



function Form() {

	return (
	
		<>
			<form>
				<fieldset>
					<legend>Informacion Personal</legend>

					<label htmlFor="name">Name: </label>
					<input id='name' type="text" name="name"
					/>

					<label htmlFor="email">Email: </label>
					<input id="email" type="email" name="email"
						/>

					<label htmlFor='phone'>Phone: </label>
					<input id='phone' type="number" name="phone"
						/>

				</fieldset>

				<fieldset>
					<legend> Paises</legend>

					<label htmlFor="pais">Countries</label>
					<select id="pais" name="pais">

						<optgroup label="sur">
							<option value="arg" key="">Argentina</option>
							<option value="cl" key="">Chile</option>
							<option value="ur" key="">Uruguay</option>
							<option value="bl" key="">Bolivia</option>
						</optgroup>

						<optgroup label="centro">
							<option value="co" key="">Colombia</option>
							<option value="vn" key="">Venezuela</option>
						</optgroup>

						<optgroup label="norte" >
							<option value="mx" key="">México</option>
						</optgroup>

					</select>
				</fieldset>

				<fieldset>
					<legend>Radio Button</legend>

					<input id="envio" type="radio" name='forma-entrega' value='envio' />
					<label htmlFor="envio">Envio</label>

					<input id='retiro' type="radio" name="forma-entrega" value='retiro' />
					<label htmlFor="retiro">Retiro</label>
				</fieldset>

				<fieldset>
					<legend>Checkbox</legend>

					<input id='bicicleta' type="checkbox" name='equipos-electronicos' value='bicicleta' />
					<label htmlFor="bicicleta">Bicicleta</label>

					<input id='reloj' type="checkbox" name='equipos-electronicos' value='reloj' />
					<label htmlFor="reloj">Reloj</label>

					<input id='notebook' type="checkbox" name='equipos-electronicos' value='notebook' />
					<label htmlFor="notebook">Notebook</label>
				</fieldset>
			</form>
		</>
	);
}

export default Form
