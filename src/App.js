import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardMain from './CardMain';
// import CardLists from './CardLists';
import CardGraph from './CardGraph';
import './App.css';
import axios from 'axios';

let search = "90502"

class App extends Component {
	constructor() {
		super();
		this.state = {
			weather_result : [],
			// search : ''
		}
		this.onInputChange(search);
	} 

	onInputChange = (event) => {
		if (event !== "90502") {
			search = event.target.value
		} 
		let encoded_input = encodeURIComponent(search);
		let map_address = `//maps.googleapis.com/maps/api/geocode/json?address=${encoded_input}`;
		axios(map_address)
				.then(response => {
					if (response.data.status === "ZERO_RESULTS") {
						throw new Error("Unable to find that address");
					} else {
						let lat = response.data.results[0].geometry.location.lat;
						let lon = response.data.results[0].geometry.location.lng;
						// console.log(response.data.results[0].address_components[1].short_name);
						const API_KEY = '039b4a2ba6bd3cdf82599f6cb429e0f8';
						let weather_API = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY}/${lat},${lon}`;
						// console.log(weather_API);
						return axios.get(weather_API);
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
		if (this.state.weather_result.length === 0) {
			return (
				<div>
				<h1 className = 'f1'>Weather</h1>
				<SearchBox onInput = {this.onInputChange}/>
				</div>
				);
		} else {
			return (
				<div>
				<h1 className = 'f1'>Weather</h1>
				<SearchBox onInput = {this.onInputChange}/>
				<CardMain onUpdateInfo = {this.state.weather_result}/>
				<CardGraph updates = {this.state.weather_result.daily.data}/>
				
				</div>
				);
		}
	}
}
//<CardLists updates = {this.state.weather_result.daily.data}/>
export default App;