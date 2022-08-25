import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcon from 'react-icons/ai';

const Navbar = () => {
	const [sidebar, setSidebar] = useState();
	const showSidebar = () => {
		setSidebar(!sidebar);
	};

	return (
		<>
			<div className='navbar'>
				<Link to='#' className='menu-bars'>
					<FaIcons.FaBars onClick={showSidebar} />
				</Link>
			</div>
			<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
				<ul className='nav-menu-items' onClick={showSidebar}>
					<li className='navbar-toggle'>
						<Link to='#' className='menu-bars'>
							<AiIcon.AiOutlineClose />
						</Link>
					</li>
					<li className='nav-text'>
						<Link to='/'>Home</Link>
					</li>
					<li className='nav-text'>
						<Link to='/about'>About</Link>
					</li>
					<li className='nav-text'>
						<Link to='/'>Nav Item 3</Link>
					</li>
					<li className='nav-text'>
						<Link to='/'>Nav Item 4</Link>
					</li>
					<li className='nav-text'>
						<Link to='/'>Nav Item 5</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
