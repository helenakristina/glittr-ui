import React from 'react';
import styled from 'styled-components';
import Navigation from '../../components/navigation';

const Section = styled.section`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;

const Home = () => {
	return (
		<>
			<Navigation />
			<div>
				<Section id="home">
					<h1>It's time to have fun!</h1>
					<div> Dance, draw, act, and play</div>
				</Section>
				<Section id="about">About</Section>
				<Section id="parents">Parents</Section>
			</div>
		</>
	);
};

export default Home;
