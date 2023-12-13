import React from "react";
import "./Card.css";
function Card(props) {
	let Publicacion_Fecha = new Date(props.card.publication_date);
	console.log(Publicacion_Fecha.toString());
	props.card.publication_date = !isNaN(Publicacion_Fecha)
		? `${Publicacion_Fecha.getFullYear()}-${("0" + (Publicacion_Fecha.getMonth() + 1)).slice(-2)}-${("0" + (Publicacion_Fecha.getDate() + 1)).slice(-2)}`
		: "-";
	return (
		<div className="card">
			<div className="card__header">
				<h2>{props.card.name}</h2>
			</div>
			<div className="card__content">
				<div className="card__content__row">
					<div className="card__content__row-subject">Fecha:</div>
					<div className="card__content__row-value">{props.card.publication_date}</div>
				</div>
				<div className="card__content__row">
					<div className="card__content__row-subject">Compañia:</div>
					<div className="card__content__row-value">{props.card.company.name}</div>
				</div>
				<div className="card__content__row">
					<div className="card__content__row-subject">Categoria:</div>
					<div className="card__content__row-value">{props.card.categories.length > 0 ? props.card.categories[0].name : ""}</div>
				</div>
				<div className="card__content__row">
					<div className="card__content__row-subject">Nivel:</div>
					<div className="card__content__row-value">{props.card.levels.length > 0 ? props.card.levels[0].name : ""}</div>
				</div>
				<div className="card__content__row">
					<div className="card__content__row-subject">Ubicacion:</div>
					<div className="card__content__row-value">{props.card.locations.length > 0 ? props.card.locations[0].name : ""}</div>
				</div>
			</div>
			<div className="card__footer">
				<a href={props.card.refs.landing_page} target="_blank" rel="noreferrer">
					Ver mas informacion
				</a>
			</div>
		</div>
	);
}

export default Card;
