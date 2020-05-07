import React from 'react';
import Scrollspy from 'react-scrollspy';
import styled from 'styled-components';

const Nav = styled.div`
	position: sticky;
	top: 0;
	font-weight: 600;
	color: white;
	background-color: #ffd029;
	overflow: auto;
	white-space: nowrap;
	display: flex;
	z-index: 1;
	justify-content: space-between;
	font-family: 'Poppins', sans-serif;
`;
const NavItem = styled.div`
	display: inline-flex;
	font-weight: 600;
	margin: 0;
	padding: 0;
	&:hover {
		background: #6d5495;
		border-radius: 50px;
	}
`;

const NavItemLink = styled.a`
	padding: 1rem;
	color: white;
	text-decoration: none;
	transition: background 0.3s ease-in;
`;

const NavItemFloatRight = styled.div`
	place-self: center;
	margin: 20px;
`;

const Navigation = () => {
	return (
		<>
			<Nav>
				<Scrollspy
					items={['section-1', 'section-2', 'section-3']}
					currentClassName="is-current"
					className="navItem"
					style={{
						fontWeight: 300,
					}}
					offset={-50}
				>
					<NavItem>
						<NavItemLink href="/#home">Home</NavItemLink>
					</NavItem>
					<NavItem>
						<NavItemLink href="/#about">About</NavItemLink>
					</NavItem>
					<NavItem>
						<NavItemLink href="/#parents">Parents</NavItemLink>
					</NavItem>
					<NavItem>
						<NavItemLink href="/#donate">Donate</NavItemLink>
					</NavItem>
					<NavItem>
						<NavItemLink href="/#contact">Contact</NavItemLink>
					</NavItem>
				</Scrollspy>
				<NavItemFloatRight>
					<NavItemLink href="/login">Sign in</NavItemLink>
				</NavItemFloatRight>
			</Nav>
		</>
	);
};

export default Navigation;
