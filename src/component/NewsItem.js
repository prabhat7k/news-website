import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card">
          <img
            className="card-img-top"
            src={
              !imageUrl
                ? "https://techcrunch.com/wp-content/uploads/2022/03/spotify-discord-glitch-down.jpg?w=711"
                : imageUrl
            }
            alt="Card image cap"
          />
          <div className="card-body">
            <div className="text-primary">{source}</div>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small class="text-danger">
                By {author} at {new Date(date).toUTCString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-primary">
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}
