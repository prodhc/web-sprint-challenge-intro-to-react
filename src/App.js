import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import CharactersCard from './components/CharactersCard';

// This is the main page to display the web application
function App() {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	// this will store and set the main data, Star Wars characters retrieved from the axios request
	const [swCharacters, setSWCharacters] = useState([]); //
	// Fetch characters from the API in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any. hi.

	//this will pull the star wars data and save it to the swCharacters state
	useEffect(() => {
		axios
			.get('https://swapi.dev/api/people')
			.then(res => {
				setSWCharacters(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);


	return (
		<div className="App">
			<Card>
				<CharactersCard swCharacters={swCharacters} />
			</Card>
		</div>
	);
}

export default App;