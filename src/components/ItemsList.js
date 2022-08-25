import React from 'react';
import Item from './Item';
import { useGlobalContext } from '../context';

const ItemsList = () => {
	const { loading, lists } = useGlobalContext();
	console.log({ lists });

	if (loading) {
		return 'Loading';
	}
	if (lists.length < 1) {
		return <h3> No results matching the search criteria</h3>;
	}
	return (
		<div className='lists-center'>
			<h3>Repositories</h3>
			<div>
				{lists.map((list) => {
					return <Item key={list.id} {...list} />;
				})}
			</div>
		</div>
	);
};

export default ItemsList;
