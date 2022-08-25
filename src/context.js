import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useCallback } from 'react';

//const url = 'https://api.github.com/search/repositories?q=${query}+language:${language}&per_page=20'
const url = 'https://api.github.com/search/repositories?q=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	// const [loading, setLoading] = useState(false)
	const [searchTerm, setSearchTerm] = useState('r');
	const [selects, setSelects] = useState();
	const [lists, setLists] = useState([]);

	const fetchItems = useCallback(async () => {
		//setLoading(true)
		try {
			const res = await fetch(
				`${url}${searchTerm}+language:${selects}&per_page=20`
			);
			const data = await res.json();
			console.log(`${url}${searchTerm}`);
			console.log(`${url}${searchTerm}+language:${selects}&per_page=20`);
			console.log(data);
			const { items } = data;
			const keyRepos = items.map((item) => {
				const {
					id,
					full_name,
					description,
					topics,
					stargazers_count,
					language,
					license,
					updated_at,
				} = item;
				return {
					id: id,
					name: full_name,
					des: description,
					keyWords: topics,
					count: stargazers_count,
					lang: language,
					license: license,
					updated: updated_at,
				};
			});
			setLists(keyRepos);
			console.log(keyRepos);
		} catch (error) {
			console.log(error);
		}
	}, [searchTerm, selects]);
	console.log(lists);
	useEffect(() => {
		fetchItems();
	}, [searchTerm, selects, fetchItems]); //selects language

	return (
		<AppContext.Provider
			value={{
				//loading,
				lists,
				selects,
				setSelects,
				setSearchTerm,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
