import React from 'react';

const SearchboxWeather = ({onInput}) => {
return (
	<div className ='pa2'>
		<input 
		className = 'pa3 ba b--green bg-lightest-blue'
		type='search' 
		placeholder ='Zip Code'
		onKeyPress = {onInput}/>
	</div>
	);
}

export default SearchboxWeather;




