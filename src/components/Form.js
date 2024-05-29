import axios from "axios";
import { Component } from "react";

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    handleTextChange = (e) => {
        this.setState({text: e.target.value})
    }

    getWeatherData = async () => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.text}&appid=aa2aefc95ab3fbbaaf699eea4a115eaf`)
        this.props.updateWeather(response.data);
    }

    render() {
        return (
            <>
                <input value={this.state.text} onChange={this.handleTextChange}/>
                <button onClick={this.getWeatherData}>Get Data</button>
            </>
        )
    }
}