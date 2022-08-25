import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
//import components
import Header from './components/Header';

import SearchForm from './components/SearchForm';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
	return (
		<Router>
			<div>
				<Header />
				<Navbar />
				<Routes>
					<Route path='/about' element={<About />} />
					<Route path='/' element={<Home />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
