import React, { Component } from "react";
import SearchAPI from "../SearchAPI";
import MoviesFolder from "../MoviesFolder/MoviesFolder";
import styles from "./HomePageStyles.module.css";

export default class HomePage extends Component {
  state = {
    films: [],
  };

  componentDidMount = () => {
    SearchAPI.axiosTrendingFilms().then((films) => this.setState({ films }));
  };

  render() {
    const { films } = this.state;
    return (
      <>
        <p className={styles.p}>Trending today</p>
        <MoviesFolder arrayOfMovies={films} />
      </>
    );
  }
}
