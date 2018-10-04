import React from 'react';
import './index.css';
import ReactAnimatedWeather from 'react-animated-weather';

const CardMain = ({location, onUpdateInfo}) => {

	console.log(onUpdateInfo);

	if (onUpdateInfo === "" || onUpdateInfo === "pending") {

		return (
			<div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
				<h2 className = 'f4 sans-serif black-80'>{location}</h2>
				<div className="lds-circle"></div>
				<h2 className = 'f5 sans-serif black-80'>{`Calculating`}</h2>	
			</div>
			);

	} else {
		let raw_icon = onUpdateInfo.currently.icon;
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

		const defaults = {
		  temp : onUpdateInfo.currently.temperature,
		  summary : onUpdateInfo.currently.summary,
		  icon: new_icon(raw_icon),
		  color: 'goldenrod',
		  size: 100,
		  animate: true
		};

		return (
			<div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
				<h2 className = 'f4 sans-serif black-80'>{location}</h2>
				<ReactAnimatedWeather
				    icon={defaults.icon}
				    color={defaults.color}
				    size={defaults.size}
				    animate={defaults.animate}
		        />
				<h2 className = 'f5 sans-serif black-80'>{`Currently weather is ${defaults.summary}`}</h2>
				<h3 className = 'black-80'>{`Temperature is ${defaults.temp}'F`}</h3>
			</div>
			);
	}

	
}

export default CardMain;
