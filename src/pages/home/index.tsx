import React from 'react';
import { FlippingCard, FlippingCardBack, FlippingCardFront } from 'react-ui-cards';
import Lottie from 'react-lottie';
import Stripe from '../../components/stripe/index';
import animationData from './animation.json';
import styled from 'styled-components';
import Navigation from '../../components/navigation';

const Section = styled.section`
	background-color: #ffd800;
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

const Button = styled.button`
	border-radius: 50px;
	border: black 1px solid;
	width: 200px;
	height: 50px;
	margin: 50px;
	background: #4c2882;
	color: white;
	font-size: 24px;
`;

const Cards = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	width: 100%;
`;

const Card = styled.div`
	width: 95%;
	height: 75%;
	margin: 10px;
	border-radius: 50px;
	text-align: center;
	background: #4c2882;
`;

const Heading = styled.h1`
	font-size: 100px;
	text-shadow: 5px 5px gray;
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
							<Heading>Say hi to Glittr!</Heading>
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
