import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardMain from './CardMain';
import CardGraph from './CardGraph';
import axios from 'axios';

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
		let Google_API = "AIzaSyDNbz3odAS6Mfs-Wh-W9zHPUwMDpvC3exk";
		let encoded_input = encodeURIComponent(event);
		let map_address = `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded_input}&key=${Google_API}`;
		axios(map_address)
				.then(response => {
					if (response.data.status === "ZERO_RESULTS") {
						throw new Error("Unable to find that address");
					} else {
						// console.log(response.data.results[0].address_components[1].short_name);
						let location = response.data.results[0].address_components[1].short_name;
						this.setState({location});
						let lat = response.data.results[0].geometry.location.lat;
						let lon = response.data.results[0].geometry.location.lng;
						const API_KEY = '5aa08ac0612a0f8f60ef7332036c2d97';
						let weather_API = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY}/${lat},${lon}`;
						return axios.get(weather_API);
						//https://api.darksky.net/forecast/039b4a2ba6bd3cdf82599f6cb429e0f8/30.2228447,-97.74735720000001
					}
				})
				.then(response => this.setState({weather_result: response.data}))	
				.catch(e => {
					if (e.code === "ENOTFOUND") {
						console.log("Unable to connent to API servers");
					} else {
						console.log("Error Msaage : ", e.message);
					}
				})
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