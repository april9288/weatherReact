import React from 'react';

const SearchBox = ({search, search_input, click}) => {
return (
	<div className ='pa2'>
    <input type='search' placeholder="zip code" onChange = {search} value = {search_input} />
    <button onClick = {()=>click()}>Submit</button>
	</div>
	);
}

export default SearchBox;