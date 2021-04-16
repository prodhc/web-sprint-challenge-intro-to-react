import React from 'react';
import styled from 'styled-components';

export default function Character(props) {
	const { swCharacter } = props;

	// styling for the info in each list item card
	const Individual = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 5%;
		font-size: 1rem;
	`;

	return (
		<>
			<Individual>
				<h3>{swCharacter.name}</h3>
				<h3>{swCharacter.birth_year}</h3>
			</Individual>
		</>
	);
}