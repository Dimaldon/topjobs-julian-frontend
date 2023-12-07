import React from "react";
import "./Main.css";
import mainImg from "../../images/computer-work.svg";
function Main() {
	return (
		<main className="content">
			<h1>¡Tu trabajo soñado en TI a solo un click de distancia!</h1>
			<img src={mainImg} />
		</main>
	);
}

export default Main;
