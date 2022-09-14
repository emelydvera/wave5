const React = require('react');
const img = require('./fotocv.jpg')

/************************************************************* 
EJERCICIO 
1-Crear:
- Una cabecera
- Un menú de navegación 
- Un contenido principal

2-Dentro del contenido principal crear:
- Una sección
- Un artículo
- Una figura - Incluir aquí una imagen tuya que funcione como hipervínculo a tu perfil de Linkedin.
- Descripción de la imagen ( Podríamos poner nuestro nombre )
3-Fuera del contenido principal: 
- Pie de página donde tengamos un párrafo.
 ************************************************************/
// Tu código acá

function Home() {
	return (
		<>
			<header role='banner' aria-label='Inicio'>
				<h1>Este es el header</h1>
			</header>
			<nav>
				<ul>
					<li>Navegacion 1</li>
					<li>Navegacion 2</li>
				</ul>
			</nav>
			<main role=''>
				<h2>Aqui estara el contenido de mi pagina </h2>
				<section role='section'>
					este es una section, tiene que ver con el tema principal
				</section>
				<article>
					este es un article, no tiene que ver nada, es independiente
				</article>
				<figure>

					<a href="https://co.linkedin.com/in/emely-daniela-vera-villamizar" target='_blank'>
						<img src={img} alt="mifoto" />
						<figcaption>Podemos ir a mi perfil de Linkedin</figcaption>
					</a>
					
				</figure>

			</main>

			<footer>
				<h2>Pie de pagina</h2>
			</footer>

		</>
	);
}

export default Home
