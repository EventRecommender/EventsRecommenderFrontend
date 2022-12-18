import jwt_decode from 'jwt-decode';

class JWTService
{
    getToken()
    {
        let token = localStorage.getItem('token');
        if (token === null) { return; }

        return token;
    }

    getDecodedToken()
    {
        let token = localStorage.getItem('token');
        if (token === null) { return; }

        return jwt_decode(token);
    }

    setToken(token)
    {
        return localStorage.setItem("token", JSON.stringify(token));
    }

    deleteToken()
    {
        return localStorage.removeItem('token')
    }
}

export default new JWTService();