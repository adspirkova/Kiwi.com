import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Flight from './dashboard/card/Flight.jsx';


export default class App extends Component {
    state = {
        flights: [],
        loading: true,
    }

    componentDidMount() {
        fetch('https://api.skypicker.com/flights?fly_from=PRG&fly_to=VLC&date_from=08/08/2019&date_to=08/09/2019&curr=EUR')
        .then(resp => resp.json())
        .then(data => {
            console.log(data.data)
            this.setState({
                flights: data.data,
                loading: false
            })
        })        
    }


    render(){
        const flightComponents = this.state.flights.map((flight, index) => {
        return (
            < Flight 
                key={index}
                price = {flight.price}
                time = {flight.dTime}
                duration = {flight.fly_duration}
                from = {flight.cityFrom}
                to = {flight.cityTo}
             />
                )
            })
        return (
            <>
            {this.state.loading ? 'Wait a second...': flightComponents}
            </>
        )
    }
}