import React from 'react';
import { FlippingCard, FlippingCardBack, FlippingCardFront } from 'react-ui-cards';
import Monster from '../../assets/img/monster.png';
import Placeholder from '../../assets/img/placeholder.png';
import Placeholder2 from '../../assets/img/placeholder2.png';
import Stripe from '../../components/stripe/index';
import styled from 'styled-components';
import Navigation from '../../components/navigation';

const Section = styled.section`
	background-color: #ffd029;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
	font-family: 'Poppins', sans-serif;
`;
const Container = styled.div`
	display: flex;
	width: 100%;
`;

const InnerContainer = styled.div`
	width: 50%;
	text-align: center;
	position: relative;
	place-self: center;
`;

const Button = styled.button`
	border-radius: 50px;
	border: black 1px solid;
	width: 200px;
	height: 50px;
	margin: 50px;
	background: #6d5495;
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
	background: #6d5495;
`;

const Heading = styled.h1`
	font-size: 170px;
	line-height: 192px;
	letter-spacing: 0.06em;
	font-weight: 600;
	color: #ffffff;
	text-shadow: 14px 14px 8px #b18507;
	margin: 10px;
	font-family: 'Chicle', cursive;
`;

const Home = () => {
	return (
		<>
			<Navigation />
			<div>
				<Section id="home">
					<Container>
						<InnerContainer>
							<Heading>SAY HI TO GLITTR!</Heading>
							<div> Dance, draw, act, and play.. ect.</div>
							<Button>JOIN THE PARTY</Button>
						</InnerContainer>
						<InnerContainer>
							<img src={Monster} />
						</InnerContainer>
					</Container>
				</Section>
				<Section id="about">
					<Heading>HOW IT WORKS</Heading>
					<Cards>
						<FlippingCard>
							<FlippingCardFront>
								<Card>Create Profile</Card>
							</FlippingCardFront>
							<FlippingCardBack>
								<Card></Card>
							</FlippingCardBack>
						</FlippingCard>
						<FlippingCard>
							<FlippingCardFront>
								<Card>Watch videos and get creative</Card>
							</FlippingCardFront>
							<FlippingCardBack>
								<Card></Card>
							</FlippingCardBack>
						</FlippingCard>
						<FlippingCard>
							<FlippingCardFront>
								<Card>Watch videos and get creative</Card>
							</FlippingCardFront>
							<FlippingCardBack>
								<Card></Card>
							</FlippingCardBack>
						</FlippingCard>
					</Cards>
				</Section>
				<Section>
					<img src={Placeholder} height={'700px'} />
				</Section>
				<Section>
					<Container>
						<InnerContainer>
							<img src={Monster} />
						</InnerContainer>
						<InnerContainer>
							<img src={Placeholder2} />
						</InnerContainer>
					</Container>
				</Section>
				<Section id="parents">
					<Cards>
						<FlippingCard>
							<FlippingCardFront>
								<Card>What is Glittr? What programs are offered?</Card>
							</FlippingCardFront>
							<FlippingCardBack>
								<Card></Card>
							</FlippingCardBack>
						</FlippingCard>
						<FlippingCard>
							<FlippingCardFront>
								<Card>How will my child benefit from this?</Card>
							</FlippingCardFront>
							<FlippingCardBack>
								<Card></Card>
							</FlippingCardBack>
						</FlippingCard>
						<FlippingCard>
							<FlippingCardFront>
								<Card>How much will it cost?</Card>
							</FlippingCardFront>
							<FlippingCardBack>
								<Card></Card>
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
								<Card></Card>
							</FlippingCardBack>
						</FlippingCard>
						<FlippingCard>
							<FlippingCardFront>
								<Card>What is the time commitment?</Card>
							</FlippingCardFront>
							<FlippingCardBack>
								<Card></Card>
							</FlippingCardBack>
						</FlippingCard>
						<FlippingCard>
							<FlippingCardFront>
								<Card>How much parental invovement is required?</Card>
							</FlippingCardFront>
							<FlippingCardBack>
								<Card></Card>
							</FlippingCardBack>
						</FlippingCard>
					</Cards>
				</Section>
				<Section id="donate">
					<Container>
						<InnerContainer>
							<h1>Donate $10 to help a low income student get access to WiFi</h1>
							<div>
								{' '}
								Every child deserves a space to share their feelings and get creative, especially during
								these stressful and isolating times. By donating $10 you can help one low income student
								get access to our services!
							</div>
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
							<Heading>Questions?</Heading>
							<div>
								Have questions or concerns? Please let us know! If you are interested in learning more
								about our teacher workshops, please reach out for more info.{' '}
							</div>
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
