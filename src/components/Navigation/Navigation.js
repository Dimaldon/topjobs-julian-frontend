import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
	return (
		<div className="header__nav">
			<ul>
				<li>
					<NavLink to="/" className="header__nav__link">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/Empleos" className="header__nav__link">
						Empleos
					</NavLink>
				</li>
				<li>
					<NavLink to="/Contacto" className="header__nav__link">
						Contacto
					</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default Navigation;
