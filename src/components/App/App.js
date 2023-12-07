import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
// import api from '../utils/api';
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Main />}></Route>
				<Route path="/Contacto" element={<Contact />}></Route>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
