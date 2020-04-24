import React from "react";
import "./Home.css";
import { fetchData } from "../../components/Api/Apis";
import Cards from "../../components/Cards/Cards";
import Recovery from "../../components/Recovery/Recovery";
import Twitter from "../../components/Twitter/Twitter";
import News from "../../components/News/News";
import Chart from "../../components/Chart/Chart";
import CountryPicker from "../../components/CountryPicker/CountryPicker";

class Home extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className="homecontainer">
        <div className="leftcontainer">
          <div className="cards">
            <Cards />
          </div>
          <div className="lastcontainer">
            <div className="charthome">
              <div className="cphome">
                <CountryPicker
                  handleCountryChange={this.handleCountryChange}
                />
              </div>
              <Chart data={data} country={country} />
            </div>
            <div className="newshome">
              <News />
            </div>
          </div>
        </div>
        <div className="rtcontainer">
          <Recovery />
          <Twitter />
        </div>
      </div>
    );
  }
}
export default Home;
