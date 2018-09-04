import React from 'react';
import CardItem from "./CardItem";

const CardLists = ({updates}) => {
	const new_list = updates.map((update) => {
			return (
				<CardItem
					key = {update.time}
					update = {update} /> 
					);
	})

	return (<div>{new_list}</div>);
} 


export default CardLists;

