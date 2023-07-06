import React from "react";
import { BrowserRouter as Router,  Switch, Route, useRouteMatch } from "react-router-dom";
import sprite from "../../assets/sprite.svg";
import logo from "../../assets/logoname.png";
import { Link } from "react-router-dom";
import PeopleSearch from "./peopleSearch";
import PeopleInfo from "./PeopleInfo";
const PeopleMain = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <div className="mvhdr">
        <Link to="/">
          <img src={logo} alt="logo" className="mvhdr-logo" />
        </Link>
      </div>
      <Router> 
      <Switch>
        <Route
         exact  path={`${path}/info/:id`}
          render={(props) => (
            <PeopleInfo key={props.match.params.id} {...props} />
          )}
        />
        <Route exact path={`${path}/`} component={PeopleSearch} />
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
            href=" https://www.instagram.com/nuthan_reddy__45/"
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

export default PeopleMain;
