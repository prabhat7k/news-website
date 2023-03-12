import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
	countryDict = {
		AE: "United Arab Emirates",
		AR: "Argentina",
		AT: "Austria",
		AU: "Australia",
		BE: "Belgium",
		BG: "Bulgaria",
		BR: "Brazil",
		CA: "Canada",
		CH: "Switzerland",
		CN: "China",
		CO: "Colombia",
		CU: "Cuba",
		CZ: "Czech Republic",
		DE: "Germany",
		EG: "Egypt",
		FR: "France",
		GB: "United Kingdom",
		GR: "Greece",
		HK: "Hong Kong",
		ID: "Indonesia",
		IE: "Ireland",
		IL: "Israel",
		IN: "India",
		IT: "Italy",
		JP: "Japan",
		KR: "South Korea",
		LT: "Lithuania",
		MA: "Morocco",
		MX: "Mexico",
		MY: "Malaysia",
		NG: "Nigeria",
		NL: "Netherlands",
		NO: "Norway",
		NZ: "New Zealand",
		PH: "Philippines",
		PT: "Portugal",
		RO: "Romania",
		RS: "Serbia",
		RU: "Russia",
		SA: "Saudi Arabia",
		SE: "Sweden",
		SG: "Singapore",
		SI: "Slovenia",
		SK: "Slovakia",
		TH: "Thailand",
		TR: "Turkey",
		TW: "Taiwan",
		UA: "Ukraine",
		US: "United States",
		VE: "Venezuela",
		ZA: "South Africa",
	};
	capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	countryName = "India";
	category = "general";
	country = "in";
	message = "";

	render() {
		// console.log(this.props.country);
		// console.log(this.props.category);

		this.message = `${this.capitalizeFirstLetter(
			this.props.category
		)} news of ${this.props.country.toUpperCase()} | WorldNews`;

		document.title = this.message;
		return (
			<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
				<div className="mx-5 py-2 badge badge-success">
					WorldNews.com
				</div>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link
								className="nav-link"
								onClick={() => {
									this.props.onCategoryChange("general");
									document.title = this.message;
								}}
								to="/general"
							>
								Home <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								onClick={() => {
									document.title = "WorldNews | About page";
								}}
								to="/about"
							>
								About Us
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								onClick={() => {
									this.props.onCategoryChange("business");
								}}
								to="/business"
							>
								Business
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								onClick={() => {
									this.props.onCategoryChange(
										"entertainment"
									);
								}}
								to="/entertainment"
							>
								Entertainment
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								onClick={() => {
									this.props.onCategoryChange("general");
								}}
								to="/general"
							>
								General
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								onClick={() => {
									this.props.onCategoryChange("health");
								}}
								to="/health"
							>
								Health
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								onClick={() => {
									this.props.onCategoryChange("science");
								}}
								to="/science"
							>
								Science
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								onClick={() => {
									this.props.onCategoryChange("sports");
								}}
								to="/sports"
							>
								Sports
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								onClick={() => {
									this.props.onCategoryChange("technology");
								}}
								to="/technology"
							>
								Technology
							</Link>
						</li>
					</ul>
					{/* countries  */}

					<div className="dropdown overflow-auto">
						<button
							className="btn btn-secondary overflow-auto dropdown-toggle dropdown-toggle-split btn-lg btn-warning custom"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							{this.countryName === "United Arab Emirates"
								? "UAE"
								: this.countryName}
							{"    "}
						</button>
						<div
							className="dropdown-menu pr-5 scroll"
							aria-labelledby="dropdownMenuButton"
						>
							<Link
								className="dropdown-item overflow-auto"
								onClick={() => {
									this.props.onCountryChange("in");
									this.countryName =
										this.countryDict["in".toUpperCase()];
								}}
								to="/in"
							>
								{this.countryDict["in".toUpperCase()]}
							</Link>
							<Link
								className="dropdown-item overflow-auto"
								onClick={() => {
									this.props.onCountryChange("ae");
									this.countryName =
										this.countryDict["ae".toUpperCase()];
								}}
								to="/ae"
							>
								{this.countryDict["ae".toUpperCase()]}
							</Link>
							<Link
								className="dropdown-item overflow-auto"
								onClick={() => {
									this.props.onCountryChange("ar");
									this.countryName =
										this.countryDict["ar".toUpperCase()];
								}}
								to="/ar"
							>
								{this.countryDict["ar".toUpperCase()]}
							</Link>
							<Link
								className="dropdown-item overflow-auto"
								onClick={() => {
									this.props.onCountryChange("at");
									this.countryName =
										this.countryDict["at".toUpperCase()];
								}}
								to="/at"
							>
								{this.countryDict["at".toUpperCase()]}
							</Link>
							<Link
								className="dropdown-item overflow-auto"
								onClick={() => {
									this.props.onCountryChange("br");
									this.countryName =
										this.countryDict["br".toUpperCase()];
								}}
								to="/br"
							>
								{this.countryDict["br".toUpperCase()]}
							</Link>
							<Link
								className="dropdown-item overflow-auto"
								onClick={() => {
									this.props.onCountryChange("ca");
									this.countryName =
										this.countryDict["ca".toUpperCase()];
								}}
								to="/ca"
							>
								{this.countryDict["ca".toUpperCase()]}
							</Link>
							<Link
								className="dropdown-item overflow-auto"
								onClick={() => {
									this.props.onCountryChange("ch");
									this.countryName =
										this.countryDict["ch".toUpperCase()];
								}}
								to="/ch"
							>
								{this.countryDict["ch".toUpperCase()]}
							</Link>
							<Link
								className="dropdown-item overflow-auto"
								onClick={() => {
									this.props.onCountryChange("cn");
									this.countryName =
										this.countryDict["cn".toUpperCase()];
								}}
								to="/cn"
							>
								{this.countryDict["cn".toUpperCase()]}
							</Link>
							<Link
								className="dropdown-item overflow-auto"
								onClick={() => {
									this.props.onCountryChange("de");
									this.countryName =
										this.countryDict["de".toUpperCase()];
								}}
								to="/de"
							>
								{this.countryDict["de".toUpperCase()]}
							</Link>
							<Link
								className="dropdown-item overflow-auto"
								onClick={() => {
									this.props.onCountryChange("eg");
									this.countryName =
										this.countryDict["eg".toUpperCase()];
								}}
								to="/eg"
							>
								{this.countryDict["eg".toUpperCase()]}
							</Link>
							<Link
								className="dropdown-item overflow-auto"
								onClick={() => {
									this.props.onCountryChange("fr");
									this.countryName =
										this.countryDict["fr".toUpperCase()];
								}}
								to="/fr"
							>
								{this.countryDict["fr".toUpperCase()]}
							</Link>
							<Link
								className="dropdown-item overflow-auto"
								onClick={() => {
									this.props.onCountryChange("gb");
									this.countryName =
										this.countryDict["gb".toUpperCase()];
								}}
								to="/gb"
							>
								{this.countryDict["gb".toUpperCase()]}
							</Link>
							<Link
								className="dropdown-item overflow-auto"
								onClick={() => {
									this.props.onCountryChange("jp");
									this.countryName =
										this.countryDict["jp".toUpperCase()];
								}}
								to="/jp"
							>
								{this.countryDict["jp".toUpperCase()]}
							</Link>
							<Link
								className="dropdown-item overflow-auto"
								onClick={() => {
									this.props.onCountryChange("nz");
									this.countryName =
										this.countryDict["nz".toUpperCase()];
								}}
								to="/nz"
							>
								{this.countryDict["nz".toUpperCase()]}
							</Link>
							<Link
								className="dropdown-item overflow-auto"
								onClick={() => {
									this.props.onCountryChange("ru");
									this.countryName =
										this.countryDict["ru".toUpperCase()];
								}}
								to="/ru"
							>
								{this.countryDict["ru".toUpperCase()]}
							</Link>
							<Link
								className="dropdown-item overflow-auto"
								onClick={() => {
									this.props.onCountryChange("sg");
									this.countryName =
										this.countryDict["sg".toUpperCase()];
								}}
								to="/sg"
							>
								{this.countryDict["sg".toUpperCase()]}
							</Link>
							<Link
								className="dropdown-item overflow-auto"
								onClick={() => {
									this.props.onCountryChange("us");
									this.countryName =
										this.countryDict["us".toUpperCase()];
								}}
								to="/us"
							>
								{this.countryDict["us".toUpperCase()]}
							</Link>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
