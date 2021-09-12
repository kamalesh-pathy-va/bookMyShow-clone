import {Route} from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//Pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";
import Plays from "./pages/Plays.page";

function App() {
  return (
    <>
    <DefaultHOC path="/" exact component={HomePage} />
    <MovieHOC path="/movie/:id" exact component={Movie} />
    <DefaultHOC path="/plays" exact component={Plays} />
    </>
  );
}

export default App;
// these <> </> are called fragments