import UserService from "./UserService";

class APIService
{
    async getIncomingActivities()
    {
        let url = new URL('/getIncommingActivities', window.location.origin),
            params = { monthsForward: 20, area: UserService.getArea() }
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

        const response = await fetch(url);
        if (response.ok)
        {
            const content = await response.json();
            let result = [];

            for (let act of content)
            {
                let event =
                {
                    key: act.id,
                    img: act.img,
                    title: act.title,
                    place: act.place,
                    host: act.host,
                    date: act.date,
                    type: act.type,
                    url: act.url,
                    description: act.description
                }
                result.push(event);
            }
            localStorage.setItem('incomingActivities', JSON.stringify(result));
        }
        localStorage.setItem('incomingActivities', JSON.stringify([]));
    }

    async getRecommendations()
    {
        let url = new URL('/getRecommendations', window.location.origin),
            params = { userid: UserService.getID() }
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

        const response = await fetch(url);
        if (response.ok)
        {
            const content = await response.json()
            let result = []

            for (let act of content)
            {
                let event = 
                {
                    key: act.id,
                    img: act.img,
                    title: act.title,
                    place: act.place,
                    host: act.host,
                    date: act.date,
                    type: act.type,
                    url: act.url,
                    description: act.description
                }
                result.push(event);
            }
            localStorage.setItem('recommendations', JSON.stringify(result));
        }
        localStorage.setItem('recommendations', JSON.stringify([]));
    }
}

export default new APIService();