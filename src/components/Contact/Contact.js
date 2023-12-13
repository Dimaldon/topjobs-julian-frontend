import "./Contact.css";
function Contact() {
	const enviaForma = (e) => {
		e.preventDefault();
		alert("Gracias por contactarnos");
	};
	return (
		<main className="content">
			<h1>Contacto</h1>
			<form>
				<div className="content__row">
					<label>Nombre</label>
					<input type="text" name="nombre" />
				</div>
				<div className="content__row">
					<label>Correo Electronico</label>
					<input type="email" name="email" />
				</div>
				<div className="content__row">
					<label>Mensaje</label>
					<textarea></textarea>
				</div>
				<div className="content__row">
					<button onClick={enviaForma}>Enviar</button>
				</div>
			</form>
		</main>
	);
}

export default Contact;
