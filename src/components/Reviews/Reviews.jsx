import React, { Component } from "react";
import SearchAPI from "../SearchAPI";

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount = () => {
    SearchAPI.axiosReviews(this.props.match.params.movieId)
      .then((response) => this.setState({ reviews: response.results }))
      .catch((error) => this.setState({ error }));
  };

  render() {
    const { reviews } = this.state;
    console.log(reviews);
    return (
      <>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <h2>{review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
        {/* {reviews === 0 && (
          <p>We don't have any reviews for this movie</p>
        )} */}
      </>
    );
  }
}
