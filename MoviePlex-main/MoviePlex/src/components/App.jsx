import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import history from "../history";
import "./scss/App.scss";
import Main from "./Main";
import MovieMain from "./movies/MovieMain";
import NotFound from './NotFound'
import ScrollToTop from "../ScrollToTop";
import TvMain from "./TVshows/TvMain";
import PeopleMain from "./people/PeopleMain";
import MultiSearch from "./MultiSearch";
import MovieInfo from "./movies/MovieInfo";
import MovieGenre from "./movies/MovieGenre";
import MovieSearch from "./movies/MovieSearch";
import PeopleInfo from "./people/PeopleInfo";
import TvInfo from "./TVshows/TvInfo";
import TvGenre from "./TVshows/TvGenre";
import TvSearch from "./TVshows/TvSearch";
const App = () => {
  return (
    <React.Fragment>
      <Router history={history}>
        <ScrollToTop>
          <Switch>
          <Route
              exact path={`/multi/:id`}
              render={(props) => (
                <MultiSearch key={props.match.params.id} {...props} />
              )}
            />
            <Route  path="/" exact component={Main} />
            <Route  path="/movies"  exact component={MovieMain} />
            <Route  path="/movies/info/:id"  exact component={MovieInfo} />
            <Route  path="/movies/search"  exact component={MovieSearch} />
            <Route  path="/movies/genre"  exact component={MovieGenre} />
            <Route  path="/tvshows" exact component={TvMain} />
            <Route  path="/tvshows/search"  exact component={TvSearch} />
            <Route  path="/tvShows/genre"  exact component={TvGenre} />
            <Route  path="/tvshows/info/:id"  exact component={TvInfo} />
            <Route  path="/people" exact component={PeopleMain} />
            <Route  path="/people/info/:id"  exact component={PeopleInfo} />
            <Route  path="*" exact component={NotFound} />
          </Switch>
        </ScrollToTop>
      </Router>
    </React.Fragment>
  );
};
export default App;
