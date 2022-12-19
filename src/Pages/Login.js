import React, { useEffect, useRef, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import AuthContext from '../Context/AuthProvider';
import JWTService from '../Services/JWTService';
import UserService from '../Services/UserService';

export default function Loginpage2()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setAuth, setUser, setIsLoggedIn, role, setRole} = useContext(AuthContext);
    
    const userRef = useRef();    const errRef = useRef();
    const handleNavigate = useNavigate();

    const handleUserLogin = (e) =>
    {
        let loginData = JSON.stringify(
            {
                'username': username,
                'password': password
            });

        // Returns ID, username, role, token, area
        fetch('/login', {
            method: 'POST',
            body: loginData,
            headers: {
                'Content-Type': "application/json"
            }
        }).then((response) =>
        {
            if (response.ok)
            {
                response.json().then((content) =>
                {
                    JWTService.setToken(content.token); // Sets user token in local storage
                    UserService.storeUser(content); // Stores user information
                    handleNavigate('/home', { replace: true }); // Force navigation when token is stored
                })
            }
            else console.log(response);
        }).catch((error) => console.log(error));

        e.preventDefault();
    }

    const handleCreateUser = (e) =>
    {
        e.preventDefault();
        handleNavigate('create-user');
    }

    return (
        <div className="relative flex flex-col justify-center pt-20">
            <div className="w-full p-4 m-auto rounded shadow lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center">
                    Login
                </h1>
                <form className="mt-6" onSubmit={handleUserLogin}>
                    <div className="mb-2">
                        <label className="text-sm font-semibold">
                            Username
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={username}
                            id="username"
                            name='username'
                            ref={userRef} 
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-semibold">
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={password}
                            id="password"
                            name='password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mt-6">
                        <button
                            type='submit '
                            className="w-full px-4 py-2 text-white duration-200 bg-gray-400 rounded hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                            Login
                        </button>
                    </div>
                </form>
                <p className="mt-8 text-sm text-center">
                    Not signed up? {" "}
                    <a
                        href=""
                        className="font-medium text-blue-600 hover:underline"
                        onClick={handleCreateUser}>
                        Create account
                    </a>
                </p>
            </div>
        </div>

    )
}
