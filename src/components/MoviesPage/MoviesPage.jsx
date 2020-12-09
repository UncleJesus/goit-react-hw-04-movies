import React, { Component } from "react";
import queryString from "query-string";
import SearchInput from "../SearchInput/SearchInput";
import SearchAPI from "../SearchAPI";
import MoviesFolder from "../MoviesFolder/MoviesFolder";

export default class Movies extends Component {
  state = {
    films: [],
  };

  componentDidMount = () => {
    const { query } = queryString.parse(this.props.location.search);
    if (query) {
      SearchAPI.axiosFilms(query)
        .then((response) => this.setState({ films: response }))
        .catch((error) => this.setState({ error }));
    }
  };

  componentDidUpdate = (prevProps) => {
    const { query: prevQuery } = queryString.parse(prevProps.location.search);
    const { query: nextQuery } = queryString.parse(this.props.location.search);
    if (prevQuery !== nextQuery) {
      SearchAPI.axiosFilms(nextQuery)
        .then((response) => this.setState({ films: response }))
        .catch((error) => this.setState({ error }));
    }
  };

  handleSearchQuery = (query) => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { films } = this.state;
    return (
      <>
        <SearchInput onSubmit={this.handleSearchQuery} />
        {films.length > 0 && (
          <MoviesFolder
            arrayOfMovies={films}
            locationTo={this.props.location}
          />
        )}
      </>
    );
  }
}
