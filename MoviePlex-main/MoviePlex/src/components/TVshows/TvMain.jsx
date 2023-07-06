import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logoname.png";
import { BrowserRouter as Router,  Switch, Route, useRouteMatch } from "react-router-dom";
import sprite from "../../assets/sprite.svg";
import TvBody from "./TvBody";
import TvSearch from "./TvSearch";
import TvGenre from "./TvGenre";
import TvInfo from "./TvInfo";
const TvMain = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <div className="mvhdr">
        <Link to="/">
          <img src={logo} alt="logo" className="mvhdr-logo" />
        </Link>
        <div className="mvhdr-dispflex">
          <Link to="/tvshows/search" className="mvhdr-searchmv">
            Search for a TVshow
          </Link>
          <Link to="/tvshows/genre" className="mvhdr-genrelink">
            search by genre
          </Link>
        </div>
      </div>
      <Router> 
      <Switch>
        <Route
          path={`${path}/info/:id`}
          render={(props) => <TvInfo key={props.match.params.id} {...props} />}
        />
        <Route path={`${path}/search`} component={TvSearch} />
        <Route path={`${path}/genre`} component={TvGenre} />
        <Route path={`${path}/`} component={TvBody} />
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

export default TvMain;
