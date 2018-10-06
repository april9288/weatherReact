import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardMain from './CardMain';
import CardGraph from './CardGraph';

class App extends Component {
	constructor() {
		super();
		this.state = {
			search_input: '',
			locaiton: '',
			weather_result : ""
		}
		
	} 

	componentDidMount() {
		this.onInputChange("90502");
	}

	search = (event) => {
    	this.setState({search_input: event.target.value});
  	}

  	click = () => {
    	this.onInputChange(this.state.search_input);
    	this.setState({weather_result : "pending"});
  	}

	onInputChange = (event) => {
		let Google_API = process.env.REACT_APP_API_KEY_GOOGLE;
		let encoded_input = encodeURIComponent(event);
		let map_address = `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded_input}&key=${Google_API}`;
		fetch(map_address)
				.then(response => response.json())
				.then(response => {
					if (response.status === "ZERO_RESULTS") {
						throw new Error("Unable to find that address");
					} else {
						let location = response.results[0].address_components[1].short_name;
						this.setState({location});
						let lat = response.results[0].geometry.location.lat;
						let lon = response.results[0].geometry.location.lng;
						const API_KEY = process.env.REACT_APP_API_KEY_DarkSky;
						let weather_API = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY}/${lat},${lon}`;
						return fetch(weather_API);
					}
				})
				.then(response => response.json())
				.then(weather_result => this.setState({weather_result}))
				.catch(e => console.log("errrrr : ", e))
	} //end of onInputChange

	render() {
		return (
			<div>
				<h1 className = 'f1'>Weather</h1>
				<SearchBox 
					search = {this.search} 
					search_input = {this.state.search_input}
					click = {this.click}
				/>
			    <CardMain 
			    	location = {this.state.location}
			    	onUpdateInfo = {this.state.weather_result}

			    />
			    {
			    	(this.state.weather_result === "" || this.state.weather_result === "pending") ? <div></div>:<CardGraph updates = {this.state.weather_result.daily.data}/>
			    }
				
			</div>
			);
	}
}

export default App;