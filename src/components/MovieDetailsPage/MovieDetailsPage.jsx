import React, { Component } from "react";
import SearchAPI from "../SearchAPI";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import { Link, NavLink, Route } from "react-router-dom";
import styles from "./MovieDetailsPageStyles.module.css";
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
              <ul className={styles.listStyleNone}>
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
              <ul className={styles.listStyleNone}>
                <li>
                  <NavLink
                    className={styles.link}
                    to={`/movies/${this.props.match.params.movieId}/cast`}
                  >
                    Cast
                  </NavLink>
                  <NavLink
                    className={styles.link}
                    to={`/movies/${this.props.match.params.movieId}/reviews`}
                  >
                    Reviews
                  </NavLink>
                </li>
                <li>
                  <Route path={routes.cast} component={Cast} />
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
