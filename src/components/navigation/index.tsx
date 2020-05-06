import React from 'react';
import { NavLink } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';
import styled from 'styled-components';

const Nav = styled.div`
	position: sticky;
	top: 0;
	background-color: #ffd800;
	overflow: auto;
	white-space: nowrap;
	display: flex;
	z-index: 1;
	justify-content: space-between;
`;
const NavItem = styled.div`
	display: inline-flex;
	margin: 0;
	padding: 0;
	font-weight: 600;
	color: white;
	&:hover {
		background: #4c2882;
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
					<NavLink to="/login">Sign in</NavLink>
				</NavItemFloatRight>
			</Nav>
		</>
	);
};

export default Navigation;
