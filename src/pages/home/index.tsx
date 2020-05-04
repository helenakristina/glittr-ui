import React from 'react';
import {
  NavLink
} from "react-router-dom";
import Scrollspy from 'react-scrollspy';
import styled from 'styled-components';

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

const Nav = styled.div`
	position: sticky;
	top: 0;
	background: #fff;
	overflow: auto;
	white-space: nowrap;
	display: flex;
`;
const NavItem = styled.div`
	display: inline-flex;
	margin: 0;
	padding: 0;
`;

const NavItemLink = styled.a`
	padding: 1rem;
	color: #5500f0;
	text-decoration: none;
	transition: background 0.3s ease-in;
	&:hover {
		color: red;
	}
`;

const Home = () => {
	return (
		<>
			<Nav>
				<Scrollspy items={['section-1', 'section-2', 'section-3']} currentClassName="is-current">
					<NavItem>
						<NavItemLink href="#home">Home</NavItemLink>
					</NavItem>
					<NavItem>
						<NavItemLink href="#about">About</NavItemLink>
					</NavItem>
					<NavItem>
						<NavItemLink href="#parents">Parents</NavItemLink>
					</NavItem>
          <NavItem>
            <NavItemLink>
             <NavLink to="/login">Login</NavLink></NavItemLink>
          </NavItem>
          <NavItem>
          <NavItemLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            </NavItemLink>
          </NavItem>
				</Scrollspy>
			</Nav>
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
