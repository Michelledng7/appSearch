import React from 'react';
import SearchForm from './SearchForm';
import ItemList from './ItemsList';

export default function Home() {
	return (
		<main>
			<SearchForm />
			<ItemList />
		</main>
	);
}
