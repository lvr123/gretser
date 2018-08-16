import React from 'react';
import Card from './Card';


const CardList = ({items}) => {

	return (
	<div className="tc">
	{/*<p style={{'font-family':'Baskerville Old Face','font-size': '30px','text-align':'left','padding':'40px 0px 0px 20px'}}>H&M</p>*/}
	{ items.map((user,i) => {
		return (
			<Card key={i} 
		id={items[i].id} 
		desc={items[i].desc} 
		price={items[i].price}
		size={items[i].size}
		imageUrl={items[i].imageUrl}
		/>
		);
	})}
	</div>
	);
}

export default CardList;
