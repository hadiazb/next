import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
	const handleClick = () => {
		console.log('hola');
	};

	return (
		<div>
			<Navbar />
			<h1>Home</h1>
			<button onClick={handleClick}>pincha</button>
		</div>
	);
};

export default Home;
