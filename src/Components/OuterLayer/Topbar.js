import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import UserService from '../../Services/UserService';

export default function Topbar() 
{
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() =>
	{
		function checkToken()
		{
			const token = localStorage.getItem('token');

			if (token)
			{
				setIsLoggedIn(true) 
			}

			window.addEventListener('storage', checkToken);
		}

		return () =>
			{
				window.removeEventListener('storage', checkToken);
			}
	}, [])

	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href={isLoggedIn ? '/home' : '/'}>Logo</Navbar.Brand>
				<Nav>
					<Nav.Link 
						href='/user'
						className='flex'>
						{isLoggedIn ? <button>Logout </button> : 
									  <button>Login </button>}
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}
