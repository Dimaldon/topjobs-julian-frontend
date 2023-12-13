import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import api from "../../utils/api/api";
import "./Empleos.css";
import Preloader from '../Preloader/Preloader';

function Empleos() {
	const [isLoading, setIsLoading] = useState(true);
	const [cards, setCards] = useState([]);
	useEffect(() => {
		api.getInitialJobs()
			.then((res) => {
				setCards(res.results);
				setIsLoading(false); // set isLoading to false after data is loaded
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(false); // set isLoading to false even if there is an error
			});
	}, []);
	return (
		<main className="content__empleos">
			{isLoading ? <Preloader /> : cards.map((card) => (
				<Card card={card} key={card.id} />
			))}
		</main>
	);
}

export default Empleos;
