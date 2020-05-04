import React from 'react';
import { NavLink } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';
import styled from 'styled-components';

const Nav = styled.div`
	position: sticky;
	top: 0;
	background: #fff;
	overflow: auto;
	white-space: nowrap;
	display: flex;
	z-index: 1;
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
					<NavItem className="navItem">
						<NavItemLink href="/#home">Home</NavItemLink>
					</NavItem>
					<NavItem className="navItem">
						<NavItemLink href="/#about">About</NavItemLink>
					</NavItem>
					<NavItem className="navItem">
						<NavItemLink href="/#parents">Parents</NavItemLink>
					</NavItem>
					<NavItem className="navItem">
						<NavLink to="/donate">Donate</NavLink>
					</NavItem>
					<NavItem className="navItem">
						<NavItemLink href="/#contact">Contact</NavItemLink>
					</NavItem>
					<NavItem className="navItem">
						<NavLink to="/login">Signup</NavLink>
					</NavItem>
				</Scrollspy>
			</Nav>
		</>
	);
};

export default Navigation;
