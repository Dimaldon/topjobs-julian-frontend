import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";
import "./Header.css";

function Header() {
	return (
		<header className="header">
			<div className="header__container">
				<img className="header__logo" src={logo} alt="logo" />
				<h1>Top Jobs Ink</h1>
			</div>
			<Navigation></Navigation>
		</header>
	);
}

export default Header;
