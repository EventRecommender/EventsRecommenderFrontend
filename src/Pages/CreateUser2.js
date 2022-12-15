import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const tagsList =
    [
        "Koncert",
        "Foredrag",
        "Show",
        "Comedy",
        "Musical",
        "Opera",
        "Ballet"
    ]

export default function CreateUser2()
{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [city, setCity] = useState('')
    const [institution, setInstitution] = useState('')
    const [role, setRole] = useState('')
    const [tags, setTags] = useState(tagsList)
    const [selectedTags, setSelectedTags] = useState([])

    const handleNavigate = useNavigate();

    const tagButtons = tags.map((tag, i) =>
        <button
            key={i}
            className={selectedTags.includes(tag) ?
                `border rounded p-1 mr-2 text-md font-semibold bg-orange-600 hover:bg-orange-600 transition focus:ring-orange-600` :
                `border rounded p-1 mr-2 text-md font-semibold bg-orange-400 hover:bg-orange-600 transition focus:ring-orange-600`}
            onClick={(e) => handleSelectedTag(e, tag)}>
            {tag}
        </button>
    )

    const handleSelectedTag = (event, value) =>
    {
        if (selectedTags.includes(value)) 
        {
            setSelectedTags((current) => 
            {
                return current.filter(tag => tag !== value); // Remove from selected tags
            });
        }
        else 
        {
            setSelectedTags(selectedTags.concat(value)); // Add to selected tags 
        }
        console.log(selectedTags)
        event.preventDefault();
    }

    const handleSubmit = (event) => 
    {
        
        let userinfo = JSON.stringify(
            {
                Item1:
                {
                    'username': username,
                    'password': password,
                    'city': city,
                    'institute': institution,
                    'role': role,
                },
                Item2: [selectedTags]
            });
        
        console.log(userinfo)

        fetch('/createUser',
            {
                method: 'POST',
                body: userinfo,
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => { if (response.ok) {console.log(response) }})
            .then((result) =>
            {
                console.log(`Created the user ${result}`);
            })
            .catch((error) =>
            {
                console.error('Error:', error);
            });
        handleNavigate('/');
        event.preventDefault()
    }

    return (
        <div className="relative flex flex-col justify-center pt-20">
            <div className="w-full p-4 m-auto rounded shadow lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center">
                    Create user
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label className="text-sm font-semibold">
                            Username *
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-semibold">
                            Password *
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="text-sm font-semibold">
                            City *
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="text-sm font-semibold">
                            Institution *
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={institution}
                            onChange={(e) => setInstitution(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="text-sm font-semibold">
                            Role *
                        </label>
                        <div className='flex flex-rows mt-1 pb-2'>
                            <label className=''>
                                Student
                            </label>
                            <input
                                type="checkbox"
                                className="ml-2 mr-6 mt-1 bg-white border rounded-md"
                                value={role}
                                checked={role === "Student"}
                                onChange={() => setRole("Student")}
                            />
                            <label>
                                Organization
                            </label>
                            <input
                                type="checkbox"
                                className="ml-2 mr-6 mt-1 bg-white border rounded-md"
                                value={role}
                                checked={role === "Organization"}
                                onChange={() => setRole("Organization")}
                            />
                        </div>
                        {
                            role == "Student" ?
                                <div>
                                    <label className="text-sm font-semibold">
                                        Tags *
                                    </label>
                                    <ul>{tagButtons}</ul>
                                </div>
                                :
                                <></>
                        }
                    </div>
                    <div className="mt-6 flex flex-col items-center">
                        <button
                            className="px-4 py-2 text-white duration-200 bg-green-400 rounded hover:bg-green-600 focus:bg-green-600 focus:outline-none"
                            onClick={(e) => handleSubmit(e.target.value)}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}
