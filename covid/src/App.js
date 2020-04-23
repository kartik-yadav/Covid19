import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter,Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Faq from "./containers/Faq/Faq";
import Help from "./containers/Help/Help";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/" exact component={Home} />
           <Route path="/Faq" component={Faq} />
          <Route path="/Help" component={Help} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
