import React, { Component } from "react";
import axios from "axios";
import "./Recovery.css";

class Recovery extends Component {
  state = {
    data: [],
    ratio: "",
    fratio: "",
  };

  componentDidMount() {
    axios.get("https://corona.lmao.ninja/v2/all").then((response) => {
      const data = response.data;
      this.setState({ data });
      const ratio = (response.data.recovered / response.data.cases) * 100;
      this.setState({ ratio });
      const fratio = ratio.toFixed(2);
      this.setState({ fratio });
      console.log(ratio);
    });
  }
  render() {
    console.log(this.state.data);
    return (
      <div className="recoverycontainer">
        <div>
          <h3 className="recoveryheading">Ratio of Recovery</h3>
        </div>
        <div>
          <div className="ocircle">
            <div className="icircle">
              <h3 className="h3r">{this.state.fratio}%</h3>
            </div>
          </div>
        </div>
        <p className="recoverycontent">
          {this.state.data.cases} Affected | {this.state.data.recovered}{" "}
          Recovered
        </p>
      </div>
    );
  }
}

export default Recovery;
