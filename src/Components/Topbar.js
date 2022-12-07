import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export default function Topbar() 
{
	const [username, SetUserName] = useState('Username');

   return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="/">Logo</Navbar.Brand>
            <Nav>
               <Nav.Link href='/user'>{username}</Nav.Link>
            </Nav>
				
			</Container>
		</Navbar>
	);
}
