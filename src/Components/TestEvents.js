import React from 'react';
import dayjs, { Dayjs } from 'dayjs';

const testImg = "https://akkc.dk/media/7989/jul-i-gammelby-akkc-1920x1080.jpg?anchor=center&mode=crop&width=425&height=324&rnd=133082206630000000"
const testTitles = 
[
    "Fredagsbar",
    "Spilaften",
    "LAN",
    "Koncert"
]

const testPlace = "Aalborg";

const testHost = 
[
    "AKKC",
    "Studenterhuset",
    "migogaalborg",
    "studerende aau",
    "f-klubben"
]

const testType =
[
    "Fest",
    "Brætspil",
    "Film",
    "Spil",
    "Bajer"
]

export default function CreateDummyEvents(count)
{
    let result = []

    for (let i = 0; i < count; i++)
    {
        let event = {img: testImg, 
                    title: testTitles[Math.floor(Math.random() * testTitles.length)],
                    place: testPlace,
                    host: testHost[Math.floor(Math.random() * testHost.length)],
                    date: "08-12-2022",
                    type: testType[Math.floor(Math.random() * testType.length)],
                    url: "https://akkc.dk/arrangementer/musik-teater/show/wallmans-2022/"
                    };
        result.push(event)
    }

    return result;
}
