import React from "react";
import MovieSearch from "./MovieSearch";
import MovieGenre from "./MovieGenre";
import MovieInfo from "./MovieInfo";
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import MovieBody from "./MovieBody";
import sprite from "../../assets/sprite.svg";
import logo from "../../assets/logoname.png";
import { Link } from "react-router-dom";
import "../scss/moviehdr.scss";
const MovieMain = () => {

  let path="/movies";

  return (
    <div>
      <div className="mvhdr">
        <Link to="/">
          <img src={logo} alt="logo" className="mvhdr-logo" />
        </Link>
        <div className="mvhdr-dispflex">
          <Link to="/movies/search" className="mvhdr-searchmv">
            Search for a movie
          </Link>
          <Link to="/movies/genre" className="mvhdr-genrelink">
            search by genre
          </Link>
        </div>
      </div>
      <Router>
        <Switch>
          <Route exact path={`${path}/`} component={MovieBody} />
          <Route
            exact path={`${path}/info/:id`}
            render={(props) => (
              <MovieInfo key={props.match.params.id} {...props} />
            )}
          />
          <Route exact  path={`${path}/search`} component={MovieSearch} />
          <Route exact path={`${path}/genre`} component={MovieGenre} />
        </Switch>
      </Router>
      <div className="movie-footer">
        <div className="movie-footer-nav">
          <a
            href="mailto:sainuthanreddy213@gmail.com"
            className="movie-footer-nav-link"
          >
            <svg className="movie-footer-nav-item">
              <use xlinkHref={`${sprite}#icon-mail4`}></use>
            </svg>
          </a>
          <a
            href="mailto:sainuthanreddy213@gmail.com"
            className="movie-footer-nav-link"
          >
            <svg className="movie-footer-nav-item">
              <use xlinkHref={`${sprite}#icon-facebook2`}></use>
            </svg>
          </a>
          <a
            className="movie-footer-nav-link"
            href="https://www.instagram.com/nuthan_reddy__45/"
          >
            <svg className="movie-footer-nav-item">
              <use xlinkHref={`${sprite}#icon-instagram`}></use>
            </svg>
          </a>
          <a
            className="movie-footer-nav-link"
            href=" https://twitter.com/NuthanReddy__45"
          >
            <svg className="movie-footer-nav-item">
              <use xlinkHref={`${sprite}#icon-twitter`}></use>
            </svg>
          </a>

          <a
            className="movie-footer-nav-link"
            href="https://github.com/NuthanReddy45"
          >
            <svg className="movie-footer-nav-item">
              <use xlinkHref={`${sprite}#icon-github`}></use>
            </svg>
          </a>
        </div>
        <div className="movie-footer-by">
          <span>&copy;</span>Sai Nuthan Reddy
        </div>
      </div>
    </div>
  );
};

export default MovieMain;
