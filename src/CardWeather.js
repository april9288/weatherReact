import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

const CardWeather = ({onUpdateInfo}) => {

	let raw_icon = onUpdateInfo.currently.icon;
	let new_icon = "";
	if (raw_icon.includes("-")) {
		new_icon = raw_icon.toUpperCase();
		new_icon = new_icon.replace(/-/g, "_");
	} else {
		new_icon = raw_icon.toUpperCase();
	}

	const defaults = {
	  zone : onUpdateInfo.timezone,
	  temp : onUpdateInfo.currently.temperature,
	  summary : onUpdateInfo.currently.summary,
	  icon: new_icon,
	  color: 'goldenrod',
	  size: 200,
	  animate: true
	};

	return (
		<div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<h2 className = 'f3 sans-serif black-80'>{defaults.zone}</h2>
			<ReactAnimatedWeather
			    icon={defaults.icon}
			    color={defaults.color}
			    size={defaults.size}
			    animate={defaults.animate}
	        />
			<h2 className = 'f2 sans-serif black-80'>{`Currently weather is ${defaults.summary}`}</h2>
			<h3 className = 'black-80'>{`Temperature is ${defaults.temp}'F`}</h3>
		</div>
		);
}

export default CardWeather;
