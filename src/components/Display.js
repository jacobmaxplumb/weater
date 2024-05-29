import { Component } from "react";

export class Display extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <>{this.props.weather && this.props.weather.main.temp}</>
    }
}