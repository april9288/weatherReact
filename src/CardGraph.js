import React from 'react';
import Chart1 from './Chartcomponents/Chart1';
import Chart2 from './Chartcomponents/Chart2';
import Chart3 from './Chartcomponents/Chart3';

const CardGraph = ({updates}) => {
	// console.log(updates);
	const highT_set = updates.map(update => update.apparentTemperatureHigh);
	const lowT_set = updates.map(update => update.apparentTemperatureLow);
	const precip_set = updates.map(update => update.precipProbability);
	const humid_set = updates.map(update => update.humidity);
	const ozone_set = updates.map(update => update.ozone);
	const uv_set = updates.map(update => update.uvIndex);
	const week_set = updates.map(update => update.time);
	const icon_set = updates.map(update => update.icon);

	const data_set = [
	      {weekday: week_set[0], 'high temp': highT_set[0], 'low temp': lowT_set[0], humid: humid_set[0], ozone: ozone_set[0], uv: uv_set[0], icon: icon_set[0], 'precip': precip_set[0]},
	      {weekday: week_set[1], 'high temp': highT_set[1], 'low temp': lowT_set[1], humid: humid_set[1], ozone: ozone_set[1], uv: uv_set[1], icon: icon_set[1], 'precip': precip_set[1]},
	      {weekday: week_set[2], 'high temp': highT_set[2], 'low temp': lowT_set[2], humid: humid_set[2], ozone: ozone_set[2], uv: uv_set[2], icon: icon_set[2], 'precip': precip_set[2]},
	      {weekday: week_set[3], 'high temp': highT_set[3], 'low temp': lowT_set[3], humid: humid_set[3], ozone: ozone_set[3], uv: uv_set[3], icon: icon_set[3], 'precip': precip_set[3]},
	      {weekday: week_set[4], 'high temp': highT_set[4], 'low temp': lowT_set[4], humid: humid_set[4], ozone: ozone_set[4], uv: uv_set[4], icon: icon_set[4], 'precip': precip_set[4]},
	      {weekday: week_set[5], 'high temp': highT_set[5], 'low temp': lowT_set[5], humid: humid_set[5], ozone: ozone_set[5], uv: uv_set[5], icon: icon_set[5], 'precip': precip_set[5]},
	      {weekday: week_set[6], 'high temp': highT_set[6], 'low temp': lowT_set[6], humid: humid_set[6], ozone: ozone_set[6], uv: uv_set[6], icon: icon_set[6], 'precip': precip_set[6]},
	      {weekday: week_set[7], 'high temp': highT_set[7], 'low temp': lowT_set[7], humid: humid_set[7], ozone: ozone_set[7], uv: uv_set[7], icon: icon_set[7], 'precip': precip_set[7]}
	];

	return(
		<div>
		<Chart1 data_set = {data_set}/>
		<Chart2 data_set = {data_set}/>
		<Chart3 data_set = {data_set}/>
		</div>
		);

}
export default CardGraph;


