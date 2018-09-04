import React from 'react';
import {DebounceInput} from 'react-debounce-input';

const SearchBox = ({onInput}) => {
return (
	<div className ='pa2'>
        <DebounceInput
          className = 'pa3 ba b--green bg-lightest-blue'
          type = 'search'
          minLength={2}
          debounceTimeout={500}
          placeholder="Zip Code"
          onChange={onInput} />
	</div>
	);
}

export default SearchBox;






