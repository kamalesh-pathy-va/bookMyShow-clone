import {Route} from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/default.HOC";

//Pages
import HomePage from "./pages/Home.page";

function App() {
  return (
    <>
    <DefaultHOC path="/" exact component={HomePage} />  
    </>
  );
}

export default App;
// these <> </> are called fragments