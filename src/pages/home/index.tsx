import React from 'react';
import { FlippingCard, FlippingCardBack, FlippingCardFront } from 'react-ui-cards';
import Lottie from 'react-lottie';
import Stripe from '../../components/stripe/index';
import animationData from './animation.json';
import styled from 'styled-components';
import Navigation from '../../components/navigation';

const Section = styled.section`
	background-color: white;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: black;
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

const Button = styled.button`
	border-radius: 50px;
	border: black 1px solid;
	width: 150px;
	height: 50px;
	margin: 50px;
`;

const Cards = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	width: 100%;
`;

const Card = styled.div`
	width: 95%;
	height: 95%;
	backgroundsize: contain;
	border: 1px solid black;
	margin: 10px;
	border-radius: 50px;
	text-align: center;
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
						width="900"
						height="550"
						src="https://www.youtube.com/embed/vY49eNceLBo"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					></iframe>
				</Section>
				<Section id="parents">
					<h1>Parents</h1>
					<Cards>
						<FlippingCard>
							<FlippingCardFront>
								<Card>What is Glittr? What programs are offered?</Card>
							</FlippingCardFront>
							<FlippingCardBack>
								<Card>More Details..</Card>
							</FlippingCardBack>
						</FlippingCard>
						<FlippingCard>
							<FlippingCardFront>
								<Card>How will my child benefit from this?</Card>
							</FlippingCardFront>
							<FlippingCardBack>
								<Card>More Details..</Card>
							</FlippingCardBack>
						</FlippingCard>
						<FlippingCard>
							<FlippingCardFront>
								<Card>How much will it cost?</Card>
							</FlippingCardFront>
							<FlippingCardBack>
								<Card>More Details..</Card>
							</FlippingCardBack>
						</FlippingCard>
					</Cards>
					<Cards>
						<FlippingCard>
							<FlippingCardFront>
								<Card>
									<div>How safe is the platform?</div>
								</Card>
							</FlippingCardFront>
							<FlippingCardBack>
								<Card>More Details..</Card>
							</FlippingCardBack>
						</FlippingCard>
						<FlippingCard>
							<FlippingCardFront>
								<Card>What is the time commitment?</Card>
							</FlippingCardFront>
							<FlippingCardBack>
								<Card>More Details..</Card>
							</FlippingCardBack>
						</FlippingCard>
						<FlippingCard>
							<FlippingCardFront>
								<Card>How much parental invovement is required?</Card>
							</FlippingCardFront>
							<FlippingCardBack>
								<Card>More Details..</Card>
							</FlippingCardBack>
						</FlippingCard>
					</Cards>
				</Section>
				<Section id="donate">
					<Container>
						<InnerContainer>
							<h1>Donate $10 to help a low income student get access to WiFi</h1>
							<div> Each child deserves. ect.</div>
							<Button>Learn more</Button>
						</InnerContainer>
						<InnerContainer>
							<Stripe />
						</InnerContainer>
					</Container>
				</Section>
				<Section id="contact">
					<Container>
						<InnerContainer>
							<h1>Get in touch</h1>
							<div> Have questions?</div>
							<Button>Learn more</Button>
						</InnerContainer>
						<InnerContainer>photos here</InnerContainer>
					</Container>
				</Section>
			</div>
		</>
	);
};

export default Home;
