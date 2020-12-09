import React, { Component } from "react";
import SearchAPI from "../SearchAPI";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import { Link, Route } from "react-router-dom";
import routes from "../../routes";

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };

  componentDidMount = () => {
    SearchAPI.axiosMovieDetails(this.props.match.params.movieId)
      .then((response) => this.setState({ movie: response }))
      .catch((error) => this.setState({ error }));
  };

  handleGoBack = () => {
    console.log(this.props.location.state);
    const { state } = this.props.location;
    if (state && state.from) {
      return this.props.history.push(this.props.location.state.from);
    }

    this.props.history.push(routes.home);
  };

  render() {
    const { movie } = this.state;

    return (
      <div>
        {movie && (
          <>
            <button onClick={this.handleGoBack}>Go back</button>
            <div>
              <h2>{movie.title}</h2>
              <p>{`${movie.vote_average * 10} %`}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <ul>
                {movie.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
              <img
                src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                width="300"
                alt={movie.title}
              />
            </div>

            <div>
              <h3>Additional information</h3>
              <ul>
                <li>
                  <Link to={`/movies/${this.props.match.params.movieId}/cast`}>
                    Cast
                  </Link>
                  <Route path={routes.cast} component={Cast} />
                </li>
                <li>
                  <Link
                    to={`/movies/${this.props.match.params.movieId}/reviews`}
                  >
                    Reviews
                  </Link>
                  <Route path={routes.reviews} component={Reviews} />
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    );
  }
}
