import React, { Component } from "react";
import SearchAPI from "../SearchAPI";
import styles from "./CastStyles.module.css";
export default class Cast extends Component {
  state = {
    cast: null,
  };

  componentDidMount = () => {
    SearchAPI.axiosCast(this.props.match.params.movieId)
      .then((response) => {
        this.setState({ cast: response.cast });
      })
      .catch((error) => this.setState({ error }));
  };

  render() {
    const { cast } = this.state;
    return (
      <>
        {cast && (
          <ul className={styles.listStyleNone}>
            {cast.map((actor) => (
              <li key={actor.id}>
                <p>{actor.name}</p>
                <p>Caracter:{actor.character}</p>
                {actor.profile_path && (
                  <img
                    src={`http://image.tmdb.org/t/p/w185//${actor.profile_path}`}
                    width="150"
                    alt={actor.name}
                  />
                )}
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

// this.setState({ movie: response })
