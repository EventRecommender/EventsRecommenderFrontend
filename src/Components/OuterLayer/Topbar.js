import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Topbar() 
{
	const [username, setUserName] = useState("Not logged in");

	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="/">Logo</Navbar.Brand>
				<Nav>
					<Nav.Link 
						href='/user'
						className='flex'>
						<h1>{username}</h1>
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}
