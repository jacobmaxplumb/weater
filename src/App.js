import { Component } from "react";
import { Display } from "./components/Display";
import { Form } from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null
    }
  }

  updateWeather = (weatherData) => {
    this.setState({weather: weatherData})
  }


  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form updateWeather={this.updateWeather}/>
        <br />
        <Display weather={this.state.weather}/>
      </div>
    );
  }
}

export default App;
