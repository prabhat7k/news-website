import React, { Component } from "react";
import "./about.css";

export default class About extends Component {
	render() {
		return (
			<div className="aboutus-section">
				<div className="container">
					<h2 className="aboutus-title">About Us</h2>
					<div className="row">
						<div className="col-md-4 col-sm-6 col-xs-12">
							<div className="aboutus">
								<p className="aboutus-text">
									WorldNews is a news website developed by
									Prabhat Kumar, dedicated to providing users
									with the latest news and updates from all
									over the world. Our team of experienced
									journalists and correspondents work
									diligently to gather news from various
									sources, ensuring that our readers receive
									reliable and legitimate information.
								</p>
								<p className="aboutus-text">
									We are committed to providing our users with
									a diverse range of news stories, covering a
									wide variety of topics including politics,
									sports, technology, entertainment, health,
									science, and more. Our goal is to keep our
									readers informed and engaged with the world
									around them.
								</p>
							</div>
						</div>

						<div className="col-md-8 col-sm-6 col-xs-12">
							<div className="feature">
								<div className="feature-box">
									<div className="clearfix">
										<div className="iconset">
											<span className="glyphicon glyphicon-cog icon"></span>
										</div>
										<div className="feature-content">
											<h4>Our Mission</h4>
											<p>
												At WorldNews, our mission is to
												provide our readers with
												reliable, legitimate, and
												diverse news from around the
												world. We believe that access to
												information is essential for a
												well-informed and engaged global
												community, and we strive to
												bring our readers the latest
												news and updates on a wide range
												of topics.
											</p>
										</div>
									</div>
								</div>
								<div className="feature-box">
									<div className="clearfix">
										<div className="iconset">
											<span className="glyphicon glyphicon-cog icon"></span>
										</div>
										<div className="feature-content">
											<h4>Our Coverage</h4>
											<p>
												We cover a wide range of topics,
												including politics, sports,
												technology, entertainment,
												health, science, and more. Our
												team works diligently to provide
												our readers with a comprehensive
												and diverse perspective on news
												stories from all corners of the
												globe. We believe that this
												approach is essential for
												providing our readers with a
												well-rounded understanding of
												the world around them
											</p>
										</div>
									</div>
								</div>
								<div className="feature-box">
									<div className="clearfix">
										<div className="iconset">
											<span className="glyphicon glyphicon-cog icon"></span>
										</div>
										<div className="feature-content">
											<h4>Our Sources</h4>
											<p>
												At WorldNews, we gather news
												from a variety of sources to
												provide our readers with a
												diverse and comprehensive
												perspective on current events.
												We aggregate news from major
												news organizations, government
												agencies, non-governmental
												organizations, and more. Our
												team of experienced journalists
												and correspondents work
												diligently to curate and verify
												the news we publish on our
												website. We aim to provide our
												readers with an amazing
												experience, which is why we
												carefully select and present
												news stories in an easy-to-read
												format. Our goal is to keep our
												readers informed and engaged
												with the world around them, and
												we believe that providing a
												user-friendly platform with
												reliable and diverse sources is
												essential to achieving this.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<nav className="navbar fixed-bottom navbar-expand-lg bg-dark text-light center">
					<h2 className="badge bg-warning lv">WorldNews.com</h2>
					<pre className="container text-light  lv">
						Made With ❤ <div className="copy">prab7k@gmail.com</div>{" "}
					</pre>
					<div className="copy badge">&copy; 2020 - 2025</div>
				</nav>
			</div>
		);
	}
}
