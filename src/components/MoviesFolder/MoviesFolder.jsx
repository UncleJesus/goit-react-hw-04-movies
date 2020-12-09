import React from "react";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import styles from "./MoviesFolderStyles.module.css";
import PropTypes from "prop-types";
uuidv4();

const MoviesFolder = ({ arrayOfMovies, locationTo }) => {
  return (
    <ul className={styles.list}>
      {arrayOfMovies.map((movieItem) => (
        <li key={uuidv4()}>
          <NavLink
            className={styles.link}
            activeClassName={styles.activeLink}
            to={{
              pathname: `${routes.movies}/${movieItem.id}`,
              state: { from: locationTo },
            }}
          >
            <p>{movieItem.title ? movieItem.title : movieItem.name}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MoviesFolder;

MoviesFolder.propTypes = {
  arrayOfMovies: PropTypes.array,
};
