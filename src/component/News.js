import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
	static defaultProps = {
		country: "in",
		pageSize: 9,
		category: "general",
	};
	constructor() {
		super();
		this.state = {
			articles: [],
			loading: false,
			page: 1,
		};
	}
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

	async updateNews() {
		const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			loading: false,
		});
	}
	async componentDidMount() {
		this.updateNews();
	}

	fetchMoreData = async () => {
		this.setState({ page: this.state.page + 1 });
		const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({
			articles: this.state.articles.concat(parsedData.articles),
			totalResults: parsedData.totalResults,
		});
	};

	capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	render() {
		return (
			<>
				<h1 className="text-center" style={{ margin: "70px" }}>
					Your Top {this.capitalizeFirstLetter(this.props.category)}{" "}
					Headlines from{" "}
					{this.countryDict[this.props.country.toUpperCase()]}
				</h1>
				{/* {this.state.loading && <Spinner />} */}
				<InfiniteScroll
					dataLength={this.state.articles.length}
					next={this.fetchMoreData}
					hasMore={
						this.state.articles.length !== this.state.totalResults
					}
					loader={<Spinner />}
				>
					<div className="container">
						<div className="row">
							{this.state.articles.map((element) => {
								return (
									<div className="col-md-4" key={element.url}>
										<NewsItem
											title={
												element.title
													? element.title
													: ""
											}
											description={
												element.description
													? element.description
													: ""
											}
											imageUrl={element.urlToImage}
											newsUrl={element.url}
											author={element.author}
											date={element.publishedAt}
											source={element.source.name}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</InfiniteScroll>
			</>
		);
	}
}
