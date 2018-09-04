import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import moment from 'moment';

const CardItem = ({update}) => {

	let raw_icon = update.icon;

	const new_icon = (input) => {
		let new_icon = "";
		if (input.includes("-")) {
			new_icon = input.toUpperCase();
			new_icon = new_icon.replace(/-/g, "_");
			return new_icon;
		} else {
			new_icon = input.toUpperCase();
			return new_icon;
		}
	}

	const forecast = (input) => {
		if (input.includes("-")) {
			return input.replace(/-/g, " ");
		} else { 
			return input;
		}
	}

	const new_time = moment(update.time*1000).format('ddd');

	const defaults = {
	  highT : update.apparentTemperatureHigh,
	  lowT : update.apparentTemperatureLow,
	  summary : update.summary,
	  icon : new_icon(raw_icon),
	  forecast : forecast(raw_icon),
	  color: 'goldenrod',
	  size: 50,
	  animate: true
	};

	return (
		<div className = 'bg-light-blue dib br3 pa2 ma1 grow bw2 shadow-5'>
			<p className = 'f5 b sans-serif black-100'>{new_time}</p>
			<ReactAnimatedWeather
			    icon={defaults.icon}
			    color={defaults.color}
			    size={defaults.size}
			    animate={defaults.animate}
	        />
			<p className = 'f6 b sans-serif black-100'>{`${defaults.forecast}`}</p>
			<p className = 'f6 b black-100'>{`High : ${defaults.highT}'F`}</p>
			<p className = 'f6 b black-100'>{`Low : ${defaults.lowT}'F`}</p>
		</div>
		);
} 


export default CardItem;