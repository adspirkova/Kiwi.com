import React, { Component } from "react";
import ReactDOM from "react-dom";
import Flight from "./dashboard/card/Flight.jsx";
import Heading from "./header/Header.jsx";
import Search from "./dashboard/search/Search.jsx";

export default class App extends Component {
  state = {
    flights: [],
    loading: true,
    from: "PRG",
    to: "VLC",
    noavailableflight: true,
    checked: false,
    direct: 0,
  };

  updateFlights = () => {
    // download with new params
    const { from, to, checked, direct } = this.state;

    fetch(
      `https://api.skypicker.com/flights?fly_from=${from}&fly_to=${to}&date_from=08/08/2019&date_to=08/09/2019&curr=EUR&direct_flights=${direct}`
    )
      .then(resp => resp.json())
      .then(data => {
        console.log(data.data);
        this.setState({
          flights: data.data,
          loading: false,
          noavailableflight: false,
          checked,
        });
      });
  };
  

  componentDidMount() {
    this.updateFlights();
  }

  onCheckedChange = e => {
    console.log('Ahoj');
    this.setState({
      checked: e.target.checked,
      direct: 1
    });
    console.log(this.state.checked);
  };

  onSearchChange = e => {
    if (e.target.name === "from") {
      this.setState({ from: e.target.value });
    }

    if (e.target.name === "to") {
      this.setState({ to: e.target.value });
    }
  };

  render() {
    const flightComponents = this.state.flights.map((flight, index) => {
      return (
        <Flight
          key={index}
          price={flight.price}
          time={flight.dTime}
          duration={flight.fly_duration}
          from={flight.cityFrom}
          to={flight.cityTo}
          number={flight.flight_no}
          stop={flight.route}
        />
      );
    });
    return (
      <>
        <Heading
          onSearchChange={this.onSearchChange}
          updateFlights={this.updateFlights}
          onCheckedChange={this.onCheckedChange}
          checked = {this.state.checked}
        />
        {this.state.loading ? <h2>Wait a second...</h2> : flightComponents}
        {flightComponents.length === 0 && !this.state.loading
          ? <h2> No available flights :'(</h2> 
          : flightComponents}
      </>
    );
  }
}
