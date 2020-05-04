import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from './animation.json';
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
const Container = styled.div`
	display: flex;
	width: 100%;
`;

const InnerContainer = styled.div`
	width: 50%;
	text-align: center;
	position: relative;
`;
const Sparkles = styled.span`
	top: 50px;
`;
const Button = styled.button`
	border-radius: 50px;
	border: black 1px solid;
	width: 150px;
	height: 50px;
	margin: 50px;
`;

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
};

const Home = () => {
	return (
		<>
			<Navigation />
			<div>
				<Section id="home">
					<Container>
						<InnerContainer>
							<h1>It's time to have fun!</h1>
							<div> Dance, draw, act, and play.. ect.</div>
							<Button>JOIN THE PARTY</Button>
						</InnerContainer>
						<InnerContainer>
							<Lottie options={defaultOptions} height={400} width={400} />
						</InnerContainer>
					</Container>
				</Section>
				<Section id="about">
					<h1>About</h1>
					<iframe
						width="700"
						height="550"
						src="https://www.youtube.com/embed/vY49eNceLBo"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					></iframe>
				</Section>
				<Section id="parents">Parents</Section>
			</div>
		</>
	);
};

export default Home;
