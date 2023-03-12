import React, { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import About from "./component/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
	pageSize = 6;
	apiKey = "9ef49caf6e4248da8af88d56cf352f4a";
	state = {
		country: "in",
		category: "general",
	};

	handleCountry = (e) => {
		this.setState({
			country: e,
		});
		console.log(this.state.country);
	};
	handleCategory = (e) => {
		this.setState({
			category: e,
		});
		console.log(this.state.category);
	};

	render() {
		return (
			<div>
				<Router>
					<Navbar
						onCountryChange={this.handleCountry}
						onCategoryChange={this.handleCategory}
						category={this.state.category}
						country={this.state.country}
					/>

					<Switch>
						<Route exact path="/">
							<News
								key="general"
								pageSize={this.pageSize}
								apiKey={this.apiKey}
								country={this.state.country}
								category={this.state.category}
							/>
						</Route>
						<Route exact path="/about">
							<About country={this.state.country} />
						</Route>
						<Route exact path="/business">
							<News
								key="business"
								pageSize={this.pageSize}
								apiKey={this.apiKey}
								country={this.state.country}
								category={this.state.category}
							/>
						</Route>
						<Route exact path="/entertainment">
							<News
								key="entertainment"
								pageSize={this.pageSize}
								apiKey={this.apiKey}
								country={this.state.country}
								category={this.state.category}
							/>
						</Route>
						<Route exact path="/general">
							<News
								key="general"
								pageSize={this.pageSize}
								apiKey={this.apiKey}
								country={this.state.country}
								category={this.state.category}
							/>
						</Route>
						<Route exact path="/health">
							<News
								key="health"
								pageSize={this.pageSize}
								apiKey={this.apiKey}
								country={this.state.country}
								category={this.state.category}
							/>
						</Route>
						<Route exact path="/science">
							<News
								key="science"
								pageSize={this.pageSize}
								apiKey={this.apiKey}
								country={this.state.country}
								category={this.state.category}
							/>
						</Route>
						<Route exact path="/sports">
							<News
								key="sports"
								pageSize={this.pageSize}
								apiKey={this.apiKey}
								country={this.state.country}
								category={this.state.category}
							/>
						</Route>
						<Route exact path="/technology">
							<News
								key="technology"
								pageSize={this.pageSize}
								apiKey={this.apiKey}
								country={this.state.country}
								category={this.state.category}
							/>
						</Route>
						{/* countries */}
						<Route exact path="/in">
							<News
								key="in"
								pageSize={this.pageSize}
								apiKey={this.apiKey}
								country="in"
								category={this.state.category}
							/>
						</Route>
						<Route exact path="/ae">
							<News
								key="ae"
								pageSize={this.pageSize}
								apiKey={this.apiKey}
								country="ae"
								category={this.state.category}
							/>
						</Route>
						<Route exact path="/ar">
							<News
								key="ar"
								pageSize={this.pageSize}
								apiKey={this.apiKey}
								country="ar"
								category={this.state.category}
							/>
						</Route>
						<Route exact path="/at">
							<News
								key="at"
								pageSize={this.pageSize}
								apiKey={this.apiKey}
								country="at"
								category={this.state.category}
							/>
						</Route>
						<Route exact path="/br">
							<News
								key="br"
								pageSize={this.pageSize}
								apiKey={this.apiKey}
								country="br"
								category={this.state.category}
							/>
						</Route>
						<Route exact path="/ca">
							<News
								key="ca"
								pageSize={this.pageSize}
								apiKey={this.apiKey}
								country="ca"
								category={this.state.category}
							/>
						</Route>
						<Route exact path="/ch">
							<News
								key="ch"
								pageSize={this.pageSize}
								apiKey={this.apiKey}
								country="ch"
								category={this.state.category}
							/>
						</Route>
						<Route exact path="/cn">
							<News
								key="cn"
								pageSize={this.pageSize}
								apiKey={this.apiKey}
								country="cn"
								category={this.state.category}
							/>
						</Route>
						<Route exact path="/de">
							<News
								key="de"
								pageSize={this.pageSize}
								apiKey={this.apiKey}
								country="de"
								category={this.state.category}
							/>
						</Route>
						<Route exact path="/eg">
							<News
								key="eg"
								pageSize={this.pageSize}
								apiKey={this.apiKey}
								country="eg"
								category={this.state.category}
							/>
						</Route>
						<Route exact path="/fr">
							<News
								key="fr"
								pageSize={this.pageSize}
								apiKey={this.apiKey}
								country="fr"
								category={this.state.category}
							/>
						</Route>
						<Route exact path="/gb">
							<News
								key="gb"
								pageSize={this.pageSize}
								apiKey={this.apiKey}
								country="gb"
								category={this.state.category}
							/>
						</Route>
						<Route exact path="/jp">
							<News
								key="jp"
								pageSize={this.pageSize}
								apiKey={this.apiKey}
								country="jp"
								category={this.state.category}
							/>
						</Route>
						<Route exact path="/nz">
							<News
								key="nz"
								pageSize={this.pageSize}
								apiKey={this.apiKey}
								country="nz"
								category={this.state.category}
							/>
						</Route>
						<Route exact path="/ru">
							<News
								key="ru"
								pageSize={this.pageSize}
								apiKey={this.apiKey}
								country="ru"
								category={this.state.category}
							/>
						</Route>
						<Route exact path="/sg">
							<News
								key="sg"
								pageSize={this.pageSize}
								apiKey={this.apiKey}
								country="sg"
								category={this.state.category}
							/>
						</Route>
						<Route exact path="/us">
							<News
								key="us"
								pageSize={this.pageSize}
								apiKey={this.apiKey}
								country="us"
								category={this.state.category}
							/>
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}
