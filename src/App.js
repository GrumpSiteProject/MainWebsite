import "./css/grumpBackground.css"
import './App.css';
import { Route, Switch } from "react-router-dom";
import MainPage from "./comps/MainPage"
import Footer from "./staticComps/Footer"
import Header from "./staticComps/Header"
import Theater from "./comps/theatrePage/Theatre"
function App() {
  return (

    <div class="bg-gradient">
      <div class="bg-dots">
        <Switch>
          <Route exact path="/">
            <Header />
            <MainPage />
            <Footer />
          </Route>
          <Route path="/theatre">

            <Theater />

            <Footer />
          </Route>
        </ Switch>
      </div>
    </div>

  );
}

export default App;
