import "./assets/css/main.css";
import "./assets/css/grumpBackground.css";

import { Route, Switch } from "react-router-dom";

import ThankYouMessages from "./comps/ThankYouMessages";
import Theater from "./comps/theatrePage/Theatre";
import Spoofy from "./comps/Spoofy/Spoofy";

import Navbar from "./staticComps/Navbar";
import Footer from "./staticComps/Footer";
import Header from "./staticComps/Header";

import PageNotFound from "./staticComps/PageNotFound";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <div className="page-container">
            <div className="content-wrap">
              <div className="bg-gradient">
                <div className="bg-dots">
                  <Navbar />

                  <ThankYouMessages />
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </Route>

        <Route path="/theatre">
          <div className="page-container">
            <div className="content-wrap">
              <div className="bg-gradient">
                <div className="bg-dots">
                  <Navbar />

                  <Theater />
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </Route>

        <Route path="/spoofy">
          <div className="page-container">
            <div className="content-wrap">
              <Spoofy />
            </div>

            <Footer />
          </div>
        </Route>

        <Route path="*">
          <div className="page-container">
            <div className="content-wrap">
              <div className="bg-gradient">
                <div className="bg-dots">
                  <Navbar />

                  <PageNotFound />
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
