import React from 'react';
import star16 from '../star16.svg';
import logo from '../logo.svg';

const Item = ({ id, name, des, keyWords, count, lang, license, updated }) => {
	return (
		<article className='item'>
			<div>
				<div>
					<img src={logo} alt={name}></img>
					<h4 style={{ color: 'steelblue' }}>{name}</h4>
				</div>
				<h5>{des}</h5>
				<p className='keywords'>{keyWords}</p>
				<p>
					{' '}
					<img src={star16} alt={name}></img> {count}
					<br />
					{lang}
					<br />
				</p>
				<p>Updated: {updated}</p>
			</div>
		</article>
	);
};

export default Item;
