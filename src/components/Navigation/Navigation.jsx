import routes from "../../routes";
import { NavLink } from "react-router-dom";
import styles from "./NavigationStyles.module.css";

const Navigation = () => {
  return (
    <ul className={styles.list}>
      <li>
        <NavLink
          className={styles.link}
          activeClassName={styles.activeLink}
          to={routes.home}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={styles.link}
          activeClassName={styles.activeLink}
          to={routes.movies}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
