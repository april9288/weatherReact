import React, { Component } from 'react';
import SearchboxWeather from './SearchboxWeather';
import CardWeather from './CardWeather';
import './App.css';
import axios from 'axios';

class AppWeather extends Component {
	constructor() {
		super();
		this.state = {
			weather_result : [],
			search : ''
		}
	} 

	onInputChange = (input) => {
		if (input.target.value > 0 && input.key === 'Enter') {
			this.setState({search : input.target.value});
			this.setState({weather_result : []});
			// console.log(input.target.value);
			input.target.value = '';
		}		
	}

	componentDidUpdate() {
		if (this.state.search > 0 && this.state.weather_result.length === 0) {
			let encoded_input = encodeURIComponent(this.state.search);
			let map_address = `http://maps.googleapis.com/maps/api/geocode/json?address=${encoded_input}`;
			axios(map_address)
				.then(response => {
					if (response.data.status === "ZERO_RESULTS") {
						throw new Error("Unable to find that address");
					} else {
						let lat = response.data.results[0].geometry.location.lat;
						let lon = response.data.results[0].geometry.location.lng;
						const API_KEY = '039b4a2ba6bd3cdf82599f6cb429e0f8';
						let weather_API = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY}/${lat},${lon}`;
						console.log(weather_API);
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
		} 
	}

	render() {
		if (this.state.weather_result.length === 0) {
			return (
				<div>
				<h1 className = 'f1'>Weather</h1>
				<SearchboxWeather onInput = {this.onInputChange}/>
				</div>
				);
		} else {
			return (
				<div>
				<h1 className = 'f1'>Weather</h1>
				<SearchboxWeather onInput = {this.onInputChange}/>
				<CardWeather onUpdateInfo = {this.state.weather_result}/>
				</div>
				);
		}
	}
}

export default AppWeather;
